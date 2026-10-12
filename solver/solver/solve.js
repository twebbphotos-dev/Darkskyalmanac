/*
 * solve.js - blind plate solve against the quad index.
 *
 * Pure: takes a detected star list plus parsed catalog buffers, returns a
 * solution object. No DOM, no fetch, no app state. This is the module that
 * ports into another project unchanged.
 *
 * Approach: the focal length is known from EXIF, so angular scale is a hard
 * filter rather than something to search over. Image quads are generated the
 * same way the catalog's were (brightest-first from each anchor star) so the
 * two sides tend to pick the same four stars, then matched on a 4-D geometric
 * hash, confirmed by projecting the catalog back onto the frame.
 */

import {
  quadCode, quantiseCode, CODE_SCALE, wahba, matApply, matApplyT,
  vecToRaDec, angsep, vnorm,
} from './geom.js';
import { lowerBoundCode0, starsNear, starVec, magForDensity } from './catalog.js';

export const DEFAULTS = {
  minUseStars: 40,      // floor on detections fed to quad generation
  maxUseStars: 140,     // ceiling; the real number tracks index density
  maxQuads: 3000,       // image quads attempted before giving up
  innerPick: 6,         // inner stars considered per A-B pair
  perPair: 10,          // quads emitted per A-B pair
  perAnchor: 30,        // quads emitted per anchor star
  scaleTol: 0.10,       // fractional focal-length uncertainty (EXIF zooms lie)
  pixErr: 1.0,          // assumed centroid error, drives the code tolerance
  codeTolMin: 0.0022,
  codeTolMax: 0.02,
  matchTolPx: 6,        // verification radius
  minMatches: 8,
  minMatchFrac: 0.18,   // weak floor; the chance-match test below is the real gate
  chanceFactor: 4,      // matches must beat random alignment by this factor
  residualScaleTol: 0.004, // radial slack in verification, per px from centre
  verifyLimit: 120,     // candidate quads fully verified before stopping
  // Final accuracy gate. Real solves fit their matched stars to ~0.4–1.4 px;
  // chance alignments that slip past the count test sit at 2.8–5+ px with
  // few matches. Accept a tight fit, or a looser one only with many stars.
  maxRmsPx: 2.2,
  strictMinMatch: 20,
  looseRmsPx: 3.2,
  looseMinMatch: 40,
};

/* ------------------------------------------------------------ camera model */

export function makeCamera(width, height, focalMm, sensorWidthMm, flip = false) {
  const mmPerPx = sensorWidthMm / width;
  const tanPerPx = mmPerPx / focalMm;
  const cx = width / 2, cy = height / 2;
  return {
    width, height, cx, cy, tanPerPx, focalMm, mmPerPx, flip,
    /** pixel -> unit vector in the camera frame (+Z boresight, +X right, +Y up) */
    toVec(px, py) {
      let X = (px - cx) * tanPerPx;
      const Y = -(py - cy) * tanPerPx;
      if (flip) X = -X;
      return vnorm([X, Y, 1]);
    },
    /** camera-frame unit vector -> pixel, or null if behind the camera */
    toPix(v) {
      if (v[2] <= 1e-6) return null;
      let X = v[0] / v[2];
      const Y = v[1] / v[2];
      if (flip) X = -X;
      return [cx + X / tanPerPx, cy - Y / tanPerPx];
    },
  };
}

export function fieldAngles(width, height, focalMm, sensorWidthMm) {
  const mmPerPx = sensorWidthMm / width;
  const w = 2 * Math.atan((mmPerPx * width) / 2 / focalMm);
  const h = 2 * Math.atan((mmPerPx * height) / 2 / focalMm);
  const d = 2 * Math.atan((mmPerPx * Math.hypot(width, height)) / 2 / focalMm);
  const R2D = 180 / Math.PI;
  return { w: w * R2D, h: h * R2D, diag: d * R2D };
}

/**
 * Layers whose quads comfortably fit inside the frame, largest (most precise
 * hash) first. The 0.4 ratio matters: a quad only counts if its entire circle
 * lands inside the rectangle, so quads approaching the frame's short dimension
 * almost never fit and the usable count collapses.
 */
export const FIT_RATIO = 0.40;
export function pickLayers(layers, fovShortDeg) {
  const fit = layers
    .filter((L) => L.dmax <= fovShortDeg * FIT_RATIO)
    .sort((a, b) => b.dmax - a.dmax);
  if (fit.length) return fit;
  // Narrower than every layer was built for (long telephoto, or a cropped
  // frame): still use the layers whose smaller quads fit. Image quads are
  // only built at sizes the frame can hold, so the oversize ones never match.
  return layers
    .filter((L) => L.dmin <= fovShortDeg * FIT_RATIO)
    .sort((a, b) => a.dmax - b.dmax);
}

/**
 * How many detections to feed quad generation: enough to cover the index stars
 * the frame contains, with headroom for dropouts and spurious detections.
 */
export function starBudget(layer, fovWDeg, fovHDeg, opts) {
  const expected = (layer.density || 2.0) * fovWDeg * fovHDeg;
  return Math.max(opts.minUseStars,
    Math.min(opts.maxUseStars, Math.round(expected * 1.7)));
}


/**
 * Magnitude cut for verification.
 *
 * Projecting every catalog star into a wide frame makes chance alignment so
 * likely that a wrong attitude can "match" dozens of stars. Rather than guess
 * a limit, derive it from the chance-match budget: keep enough stars that a
 * random attitude would be expected to hit only a couple. On a narrow field
 * this allows more stars than the catalog holds, so nothing is cut.
 */
export function verifyMagLimit(stars, nDet, fov, width, height, opts) {
  const maxR = Math.hypot(width, height) / 2;
  const meanTol = opts.matchTolPx + (opts.residualScaleTol || 0) * 0.6 * maxR;
  const area = width * height;
  const budget = (2.5 * area) / Math.max(1, nDet * Math.PI * meanTol * meanTol);
  const maxCat = Math.max(60, Math.min(6000, budget));
  return magForDensity(stars, maxCat / Math.max(1e-6, fov.w * fov.h));
}

/* --------------------------------------------------------- image quad gen */

export function buildImageQuads(vecs, dminDeg, dmaxDeg, opts) {
  const n = vecs.length;
  const D2R = Math.PI / 180;
  const dmin = dminDeg * D2R, dmax = dmaxDeg * D2R;
  const seen = new Set();
  const quads = [];

  // pairwise separations once; n is small (<= ~34)
  const sep = [];
  for (let i = 0; i < n; i++) {
    sep.push(new Float64Array(n));
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const s = angsep(vecs[i], vecs[j]);
      sep[i][j] = s; sep[j][i] = s;
    }
  }

  // vecs arrive brightest-first, so plain index order is brightness order and
  // mirrors how the catalog picked its anchors
  for (let a = 0; a < n && quads.length < opts.maxQuads; a++) {
    const bCand = [];
    for (let b = 0; b < n; b++) {
      if (b === a) continue;
      if (sep[a][b] >= dmin && sep[a][b] <= dmax) bCand.push(b);
    }
    if (bCand.length < 3) continue;
    // nearest-first, matching how the catalog chose its B stars
    bCand.sort((p, q) => sep[a][p] - sep[a][q]);

    let madeForA = 0;
    for (const b of bCand) {
      if (madeForA >= opts.perAnchor || quads.length >= opts.maxQuads) break;
      // stars inside the circle with a-b as diameter
      const half = sep[a][b] / 2;
      const mid = vnorm([
        vecs[a][0] + vecs[b][0], vecs[a][1] + vecs[b][1], vecs[a][2] + vecs[b][2],
      ]);
      const inner = [];
      for (let k = 0; k < n; k++) {
        if (k === a || k === b) continue;
        if (angsep(vecs[k], mid) < half * 0.995) inner.push(k);
      }
      if (inner.length < 2) continue;
      const pick = inner.slice(0, opts.innerPick);
      let madeForAB = 0;
      for (let i = 0; i < pick.length && madeForAB < opts.perPair; i++) {
        for (let j = i + 1; j < pick.length && madeForAB < opts.perPair; j++) {
          const quad = [a, b, pick[i], pick[j]].sort((p, q) => p - q);
          const key = quad.join(',');
          if (seen.has(key)) continue;
          seen.add(key);
          const r = quadCode(vecs[quad[0]], vecs[quad[1]], vecs[quad[2]], vecs[quad[3]]);
          if (!r) continue;
          quads.push({
            stars: r.order.map((o) => quad[o]),
            code: r.code,
            abDeg: r.abDeg,
          });
          madeForAB++; madeForA++;
          if (quads.length >= opts.maxQuads) break;
        }
      }
    }
  }
  return quads;
}

/* ------------------------------------------------------------ verification */

export function verify(R, cam, detected, stars, fov, opts) {
  const boresight = matApplyT(R, [0, 0, 1]);
  const radius = (fov.diag / 2 + 0.3) * (Math.PI / 180);
  // Compare like with like. A wide frame holds thousands of catalog stars, and
  // projecting all of them makes chance alignments so common that a wrong
  // attitude can "match" dozens of stars. Cutting the catalog to roughly the
  // detections' own sky density keeps a match meaningful.
  const near = starsNear(stars, boresight, radius, opts.vMagLimit || 99);

  // project catalog stars into the frame
  const px = new Float64Array(near.length);
  const py = new Float64Array(near.length);
  const live = [];
  for (let i = 0; i < near.length; i++) {
    const vc = matApply(R, starVec(stars, near[i]));
    const p = cam.toPix(vc);
    if (!p) continue;
    if (p[0] < -20 || p[1] < -20 || p[0] > cam.width + 20 || p[1] > cam.height + 20) continue;
    px[i] = p[0]; py[i] = p[1];
    live.push(i);
  }
  if (live.length < opts.minMatches) {
    return { ok: false, nMatch: 0, inField: live.length };
  }

  // uniform grid for nearest-neighbour lookup, sized so the 3x3 probe always
  // covers the largest match radius any star can earn
  const maxR = Math.hypot(cam.width, cam.height) / 2;
  const cell = Math.max(4, opts.matchTolPx + (opts.residualScaleTol || 0) * maxR);
  const grid = new Map();
  const key = (gx, gy) => gx * 100003 + gy;
  for (const i of live) {
    const k = key(Math.floor(px[i] / cell), Math.floor(py[i] / cell));
    let arr = grid.get(k);
    if (!arr) { arr = []; grid.set(k, arr); }
    arr.push(i);
  }

  // Match radius grows with distance from the optical axis. Residual scale
  // error displaces a star radially, so a fixed radius would reject a correct
  // solution purely because the assumed focal length was slightly off.
  const radialTol = opts.residualScaleTol || 0;
  const pairs = [];
  let sumSq = 0;
  for (let d = 0; d < detected.length; d++) {
    const sx = detected[d].x, sy = detected[d].y;
    const r = Math.hypot(sx - cam.cx, sy - cam.cy);
    const tolPx = opts.matchTolPx + radialTol * r;
    const gx = Math.floor(sx / cell), gy = Math.floor(sy / cell);
    let bi = -1, bd = tolPx * tolPx;
    for (let ddx = -1; ddx <= 1; ddx++) {
      for (let ddy = -1; ddy <= 1; ddy++) {
        const arr = grid.get(key(gx + ddx, gy + ddy));
        if (!arr) continue;
        for (const i of arr) {
          const ex = px[i] - sx, ey = py[i] - sy;
          const e2 = ex * ex + ey * ey;
          if (e2 < bd) { bd = e2; bi = i; }
        }
      }
    }
    if (bi >= 0) {
      pairs.push({ det: d, star: near[bi], err: Math.sqrt(bd) });
      sumSq += bd;
    }
  }

  const nMatch = pairs.length;
  const denom = Math.max(1, Math.min(detected.length, live.length));
  const frac = nMatch / denom;

  // How many matches would a wrong attitude get by luck? Everything scales
  // with field size and tolerance, so this is checked rather than assumed.
  const meanTol = opts.matchTolPx + radialTol * 0.6 * maxR;
  const chance = detected.length * Math.PI * meanTol * meanTol
    * (live.length / Math.max(1, cam.width * cam.height));
  const ok = nMatch >= opts.minMatches
    && frac >= opts.minMatchFrac
    && nMatch >= chance * (opts.chanceFactor || 4);

  return {
    ok, nMatch, inField: live.length, frac, chance,
    rms: nMatch ? Math.sqrt(sumSq / nMatch) : Infinity,
    pairs,
  };
}

/* ---------------------------------------------------------------- refining */

function fitFromPairs(pairs, cam, detected, stars) {
  const body = [], ref = [];
  for (const p of pairs) {
    body.push(cam.toVec(detected[p.det].x, detected[p.det].y));
    ref.push(starVec(stars, p.star));
  }
  return wahba(body, ref);
}

function residualRms(R, cam, detected, stars, pairs) {
  let s = 0;
  for (const p of pairs) {
    const b = cam.toVec(detected[p.det].x, detected[p.det].y);
    const r = matApply(R, starVec(stars, p.star));
    const a = angsep(b, r);
    s += a * a;
  }
  return Math.sqrt(s / Math.max(1, pairs.length));
}

/** Golden-section search for the focal length that minimises angular residual. */
function refineFocal(pairs, width, height, sensorWidthMm, f0, flip, detected, stars, tol) {
  const F = (f) => {
    const cam = makeCamera(width, height, f, sensorWidthMm, flip);
    const R = fitFromPairs(pairs, cam, detected, stars);
    return { v: residualRms(R, cam, detected, stars, pairs), R, cam };
  };
  let lo = f0 * (1 - tol), hi = f0 * (1 + tol);
  const gr = (Math.sqrt(5) - 1) / 2;
  let c = hi - gr * (hi - lo), d = lo + gr * (hi - lo);
  let fc = F(c), fd = F(d);
  for (let i = 0; i < 26; i++) {
    if (fc.v < fd.v) { hi = d; d = c; fd = fc; c = hi - gr * (hi - lo); fc = F(c); }
    else { lo = c; c = d; fc = fd; d = lo + gr * (hi - lo); fd = F(d); }
  }
  const best = fc.v < fd.v ? c : d;
  const r = F(best);
  return { focalMm: best, ...r };
}

/* -------------------------------------------------------------------- main */

/**
 * @param {object} args
 * @param {Array}  args.detected  star list from detect.js, brightest first
 * @param {number} args.width,height  image pixel dimensions
 * @param {number} args.focalMm    nominal focal length from EXIF
 * @param {number} args.sensorWidthMm
 * @param {object} args.stars      parsed stars.bin
 * @param {Array}  args.layers     [{ name, dmin, dmax, quads }] parsed quad indices
 * @param {object} [args.options]
 * @returns solution or { ok:false, reason }
 */
export function solve(args) {
  const opts = { ...DEFAULTS, ...(args.options || {}) };
  const { width, height, focalMm, sensorWidthMm, stars, detected } = args;
  const t0 = (typeof performance !== 'undefined' ? performance.now() : Date.now());

  if (detected.length < 6) {
    return { ok: false, reason: 'too-few-stars', detected: detected.length };
  }

  const fov = fieldAngles(width, height, focalMm, sensorWidthMm);
  const usable = pickLayers(args.layers, Math.min(fov.w, fov.h));
  if (!usable.length) {
    return { ok: false, reason: 'no-layer-for-field', fov };
  }

  const attempts = [];
  for (const flip of [false, true]) {
    for (const layer of usable.slice(0, 2)) attempts.push({ flip, layer });
  }

  let best = null;
  let quadsTried = 0, candidatesSeen = 0;

  for (const att of attempts) {
    const cam = makeCamera(width, height, focalMm, sensorWidthMm, att.flip);
    const use = detected.slice(0, starBudget(att.layer, fov.w, fov.h, opts));
    const vMagLimit = verifyMagLimit(stars, use.length, fov, width, height, opts);
    const vopts = { ...opts, vMagLimit };
    const vecs = use.map((s) => cam.toVec(s.x, s.y));
    const imgQuads = buildImageQuads(vecs, att.layer.dmin, att.layer.dmax, opts);
    const Q = att.layer.quads;
    const pxPerDeg = width / fov.w;
    let verified = 0;

    for (const q of imgQuads) {
      quadsTried++;
      const abArcmin = q.abDeg * 60;
      const abLo = abArcmin * (1 - opts.scaleTol);
      const abHi = abArcmin * (1 + opts.scaleTol);

      // tolerance scales with the quad's own baseline: a long baseline pins
      // the code down far more tightly than a short one
      const baselinePx = q.abDeg * pxPerDeg;
      const tolCode = Math.min(
        opts.codeTolMax,
        Math.max(opts.codeTolMin, (2.5 * opts.pixErr * Math.SQRT2) / Math.max(1, baselinePx)),
      );
      const tolU = tolCode * CODE_SCALE;
      const c0 = quantiseCode(q.code[0]), c1 = quantiseCode(q.code[1]);
      const c2 = quantiseCode(q.code[2]), c3 = quantiseCode(q.code[3]);

      // index is sorted on code[0], so that bounds the scan
      const lo = lowerBoundCode0(Q.code, Q.n, Math.max(0, c0 - tolU));
      const hi = lowerBoundCode0(Q.code, Q.n, Math.min(65535, c0 + tolU) + 1);

      for (let i = lo; i < hi; i++) {
        const o = i * 4;
        const dd = Q.dist[i];
        if (dd < abLo || dd > abHi) continue;
        if (Math.abs(Q.code[o + 1] - c1) > tolU) continue;
        if (Math.abs(Q.code[o + 2] - c2) > tolU) continue;
        if (Math.abs(Q.code[o + 3] - c3) > tolU) continue;

        const ref = [
          starVec(stars, Q.idx[o]), starVec(stars, Q.idx[o + 1]),
          starVec(stars, Q.idx[o + 2]), starVec(stars, Q.idx[o + 3]),
        ];

        // The hash is scale-invariant, so a matched quad says nothing about
        // whether the EXIF focal length was right - but comparing the image's
        // A-B separation against the catalog's exact one measures the error
        // directly. Correcting here matters: verification reprojects the whole
        // field, and 1% of focal error throws edge stars off by ~15px, which
        // would reject an otherwise correct match.
        const catAB = (angsep(ref[0], ref[1]) * 180) / Math.PI;
        const ratio = q.abDeg / catAB;
        if (!(ratio > 1 - opts.scaleTol && ratio < 1 + opts.scaleTol)) continue;
        candidatesSeen++;

        const fTry = focalMm * ratio;
        const camC = Math.abs(ratio - 1) < 2e-4
          ? cam : makeCamera(width, height, fTry, sensorWidthMm, att.flip);
        const body = q.stars.map((s) => camC.toVec(use[s].x, use[s].y));
        const R = wahba(body, ref);
        const v = verify(R, camC, use, stars,
          fieldAngles(width, height, fTry, sensorWidthMm), vopts);
        verified++;
        if (v.ok && (!best || v.nMatch > best.v.nMatch)) {
          best = { R, cam: camC, focal: fTry, v, flip: att.flip,
            layer: att.layer.name, vMagLimit };
        }
        if (best) break;
        if (verified > opts.verifyLimit) break;
      }
      if (best || verified > opts.verifyLimit) break;
    }
    if (best) break;
  }

  if (!best) {
    return {
      ok: false, reason: 'no-match', detected: detected.length,
      quadsTried, candidatesSeen, fov,
      ms: (typeof performance !== 'undefined' ? performance.now() : Date.now()) - t0,
    };
  }

  // --- refine against every matched star, then against the full detection list
  let { R, cam } = best;
  let pairs = best.v.pairs;
  let focal = best.focal || focalMm;

  for (let pass = 0; pass < 2; pass++) {
    const r = refineFocal(
      pairs, width, height, sensorWidthMm, focal, best.flip,
      detected, stars, pass === 0 ? 0.02 : 0.004,
    );
    focal = r.focalMm; R = r.R; cam = r.cam;
    const v = verify(R, cam, detected, stars,
      fieldAngles(width, height, focal, sensorWidthMm),
      { ...opts,
        vMagLimit: verifyMagLimit(stars, detected.length, fov, width, height, opts),
        matchTolPx: opts.matchTolPx * (pass ? 0.7 : 1),
        residualScaleTol: opts.residualScaleTol * (pass ? 0.25 : 1) });
    if (v.nMatch >= opts.minMatches) pairs = v.pairs;
  }

  // Harvest pass. Chance matching scales with the square of the match radius,
  // so once the attitude is known the radius can shrink to a few times the
  // measured residual, and that buys a far deeper catalog at the same risk.
  // More matched stars means a better final fit and a fuller list to show.
  {
    const rmsPx0 = (residualRms(R, cam, detected, stars, pairs) * 180 * 3600 / Math.PI)
      / ((Math.atan(cam.tanPerPx) * 180 * 3600) / Math.PI);
    const tight = {
      ...opts,
      matchTolPx: Math.max(1.8, Math.min(6, rmsPx0 * 3)),
      residualScaleTol: 0,
    };
    tight.vMagLimit = verifyMagLimit(stars, detected.length,
      fieldAngles(width, height, focal, sensorWidthMm), width, height, tight);
    const v = verify(R, cam, detected, stars,
      fieldAngles(width, height, focal, sensorWidthMm), tight);
    if (v.nMatch >= Math.max(opts.minMatches, pairs.length * 0.6)) {
      pairs = v.pairs;
      R = fitFromPairs(pairs, cam, detected, stars);
    }
  }

  const finalFov = fieldAngles(width, height, focal, sensorWidthMm);
  const boresight = matApplyT(R, [0, 0, 1]);
  const [ra, dec] = vecToRaDec(boresight);

  // roll: bearing of celestial north, clockwise from the top of the frame
  const pole = [0, 0, 1];
  const northTangent = vnorm([
    pole[0] - boresight[0] * boresight[2],
    pole[1] - boresight[1] * boresight[2],
    pole[2] - boresight[2] * boresight[2],
  ]);
  const nCam = matApply(R, northTangent);
  let roll = (Math.atan2(cam.flip ? -nCam[0] : nCam[0], nCam[1]) * 180) / Math.PI;
  if (roll < 0) roll += 360;

  const rmsArc = (residualRms(R, cam, detected, stars, pairs) * 180 * 3600) / Math.PI;
  const scaleArcsecPx = (Math.atan(cam.tanPerPx) * 180 * 3600) / Math.PI;
  const rmsPxFinal = rmsArc / scaleArcsecPx;
  if (!((rmsPxFinal <= opts.maxRmsPx && pairs.length >= opts.strictMinMatch) || (rmsPxFinal <= opts.looseRmsPx && pairs.length >= opts.looseMinMatch))) {
    return { ok: false, reason: 'no-match', detected: detected.length, weak: { nMatch: pairs.length, rmsPx: rmsPxFinal } };
  }

  return {
    ok: true,
    ra, dec,
    fov: finalFov,
    roll,
    mirrored: best.flip,
    focalMm: focal,
    focalNominalMm: focalMm,
    scaleArcsecPx,
    nMatch: pairs.length,
    nDetected: detected.length,
    rmsArcsec: rmsArc,
    rmsPx: rmsArc / scaleArcsecPx,
    layer: best.layer,
    quadsTried, candidatesSeen,
    boresight,
    R,
    pairs,
    ms: (typeof performance !== 'undefined' ? performance.now() : Date.now()) - t0,
  };
}

/** Catalog stars inside the solved frame, brightest first. */
export function starsInFrame(sol, stars, names, cam, limit = 40) {
  const radius = ((sol.fov.diag / 2) * Math.PI) / 180;
  const near = starsNear(stars, sol.boresight, radius);
  const out = [];
  for (const i of near) {
    const p = cam.toPix(matApply(sol.R, starVec(stars, i)));
    if (!p) continue;
    if (p[0] < 0 || p[1] < 0 || p[0] > cam.width || p[1] > cam.height) continue;
    const nm = names && names[String(i)];
    out.push({
      idx: i, x: p[0], y: p[1],
      mag: stars.mag[i] / 100,
      ra: stars.ra[i], dec: stars.dec[i],
      name: nm && nm.n ? nm.n : null,
      bayer: nm && nm.b ? nm.b : null,
      con: nm && nm.c ? nm.c : null,
    });
  }
  out.sort((a, b) => a.mag - b.mag);
  return out.slice(0, limit);
}

/**
 * Deep-sky objects inside the solved frame, brightest first.
 * Capped: a wide field on the galactic centre contains hundreds of catalogued
 * clusters and drawing them all hides the frame underneath.
 */
export function dsosInFrame(sol, dsos, cam, limit = 15) {
  const D2R = Math.PI / 180;
  const out = [];
  for (const d of dsos) {
    const ra = d.r * D2R, dec = d.c * D2R;
    const cd = Math.cos(dec);
    const v = [cd * Math.cos(ra), cd * Math.sin(ra), Math.sin(dec)];
    if (angsep(v, sol.boresight) > ((sol.fov.diag / 2) * D2R)) continue;
    const p = cam.toPix(matApply(sol.R, v));
    if (!p) continue;
    if (p[0] < 0 || p[1] < 0 || p[0] > cam.width || p[1] > cam.height) continue;
    out.push({ ...d, x: p[0], y: p[1] });
  }
  out.sort((a, b) => (a.m ?? 99) - (b.m ?? 99));
  return out.slice(0, limit);
}
