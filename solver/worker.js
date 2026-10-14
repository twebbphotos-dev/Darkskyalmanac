/*
 * worker.js - catalog loading, star detection and plate solving off the main
 * thread, so the UI stays responsive while a frame is being solved.
 */

import { parseStars, parseQuads } from './solver/catalog.js';
import { toGray, detectStars } from './solver/detect.js';
import { solve, makeCamera, starsInFrame, dsosInFrame } from './solver/solve.js';
import { FIGURES } from './solver/figures.js';

/**
 * Objects in frame, most worth naming first: Messier objects, then named and
 * Caldwell objects, then NGC/IC, then minor clusters (Collinder, Trumpler...),
 * each tier by brightness, with the tiers overlapping a little so a bright
 * showpiece can beat a faint galaxy; named Messiers lead their tier. Anything within 0.25 deg of an object
 * already listed is dropped (NGC 6530 is the cluster inside the Lagoon).
 * Messier numbers are written M8, not M 8.
 */
const CATID = /^(M|NGC|IC|C|Col|Cr|Tr|Mel|Harvard|Pal|PGC|ESO|PK|Stock|B)\s*[\d-]/;
function rankObjects(list) {
  const tier = (o) => {
    const ids = [o.n, o.d || ''];
    if (ids.some((s) => /^M \d/.test(s))) return 0;
    if (!CATID.test(o.n) || /^C \d/.test(o.d || '')) return 1;
    if (/^(NGC|IC) /.test(o.n)) return 2;
    return 3;
  };
  // Messier objects with a common name (Lagoon, Eagle, Trifid) are the famous
  // ones, so they get a head start over numbered-only Messiers.
  const famous = (o) => (tier(o) === 0 && !CATID.test(o.n) ? 1.5 : 0);
  const score = (o) => tier(o) * 3 + Math.min(12, Math.max(0, o.m ?? 12)) * 0.5 - famous(o);
  const D2R = Math.PI / 180, lim = Math.cos(0.25 * D2R);
  const vec = (o) => { const r = o.r * D2R, d = o.c * D2R; return [Math.cos(d) * Math.cos(r), Math.cos(d) * Math.sin(r), Math.sin(d)]; };
  const out = [];
  for (const o of list.map((x) => ({ ...x, s: score(x) })).sort((a, b) => a.s - b.s)) {
    const v = vec(o);
    if (out.some((p) => p.v[0] * v[0] + p.v[1] * v[1] + p.v[2] * v[2] > lim)) continue;
    out.push({ ...o, v, n: o.n.replace(/^M (\d)/, 'M$1'), d: (o.d || '').replace(/^M (\d)/, 'M$1') });
  }
  return out;
}

/**
 * Constellation figures that cross the frame, as pixel segments. Endpoints
 * more than 80 deg off-axis are skipped (gnomonic blows up); the canvas clips
 * the rest. The label sits at the mean of the figure's vertices in frame.
 * Each segment also carries its endpoints' RA/Dec (deg), and `pts` lists the
 * in-frame vertices as [x, y, ra, dec], so the page can drop whatever sits
 * below the horizon for the photo's time and place.
 */
function figuresInFrame(sol, cam) {
  const D2R = Math.PI / 180, lim = Math.cos(80 * D2R), b = sol.boresight, R = sol.R;
  const W = cam.width, H = cam.height, out = [];
  for (const f of FIGURES) {
    const pix = f.v.map(([ra, dec]) => {
      const r = ra * D2R, d = dec * D2R, cd = Math.cos(d);
      const v = [cd * Math.cos(r), cd * Math.sin(r), Math.sin(d)];
      if (v[0] * b[0] + v[1] * b[1] + v[2] * b[2] < lim) return null;
      const c = [R[0][0] * v[0] + R[0][1] * v[1] + R[0][2] * v[2],
        R[1][0] * v[0] + R[1][1] * v[1] + R[1][2] * v[2],
        R[2][0] * v[0] + R[2][1] * v[1] + R[2][2] * v[2]];
      return cam.toPix(c);
    });
    const segs = [];
    for (const [i, j] of f.l) {
      const p = pix[i], q = pix[j];
      if (!p || !q) continue;
      if (Math.max(p[0], q[0]) < 0 || Math.min(p[0], q[0]) > W
        || Math.max(p[1], q[1]) < 0 || Math.min(p[1], q[1]) > H) continue;
      segs.push([p[0], p[1], q[0], q[1], f.v[i][0], f.v[i][1], f.v[j][0], f.v[j][1]]);
    }
    if (!segs.length) continue;
    const pts = [];
    pix.forEach((p, i) => { if (p && p[0] >= 0 && p[1] >= 0 && p[0] <= W && p[1] <= H) pts.push([p[0], p[1], f.v[i][0], f.v[i][1]]); });
    const inside = pts;
    const lab = inside.length >= 2
      ? [inside.reduce((s, p) => s + p[0], 0) / inside.length, inside.reduce((s, p) => s + p[1], 0) / inside.length]
      : null;
    out.push({ n: f.n, segs, lab, pts });
  }
  return out;
}

const base = new URL('./catalog/', import.meta.url);
let CAT = null;

async function fetchWithProgress(url, onChunk) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url.split('/').pop()}: HTTP ${res.status}`);
  const total = Number(res.headers.get('content-length')) || 0;
  if (!res.body || !onChunk) return { buf: await res.arrayBuffer(), total };
  const reader = res.body.getReader();
  const parts = [];
  let got = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    parts.push(value);
    got += value.length;
    onChunk(value.length, total);
  }
  const buf = new Uint8Array(got);
  let o = 0;
  for (const p of parts) { buf.set(p, o); o += p.length; }
  return { buf: buf.buffer, total };
}

async function loadCatalog() {
  if (CAT) return CAT;
  const manifest = await (await fetch(new URL('manifest.json', base))).json();

  // rough total so the progress bar moves smoothly rather than in four jumps
  const expected = manifest.layers.reduce((a, L) => a + L.bytes, 0) + 900000;
  let got = 0;
  const bump = (n) => {
    got += n;
    self.postMessage({ type: 'progress', loaded: got, total: expected });
  };

  const starsBuf = (await fetchWithProgress(new URL('stars.bin', base), bump)).buf;
  const layers = [];
  for (const L of manifest.layers) {
    const { buf } = await fetchWithProgress(new URL(L.file, base), bump);
    layers.push({
      name: L.name, dmin: L.dmin, dmax: L.dmax, density: L.density,
      quads: parseQuads(buf),
    });
  }
  const names = await (await fetch(new URL('names.json', base))).json();
  const dso = await (await fetch(new URL('dso.json', base))).json();

  CAT = { manifest, stars: parseStars(starsBuf), layers, names, dso };
  return CAT;
}

self.onmessage = async (ev) => {
  const msg = ev.data;
  try {
    if (msg.type === 'load') {
      const c = await loadCatalog();
      self.postMessage({
        type: 'ready',
        nStars: c.stars.n,
        layers: c.layers.map((l) => ({ name: l.name, n: l.quads.n, dmin: l.dmin, dmax: l.dmax })),
      });
      return;
    }

    if (msg.type === 'solve') {
      const c = await loadCatalog();
      const { rgba, width, height, focalMm } = msg;
      // The sensor's long side spans the image's long edge. The camera model
      // measures along the image width, so a portrait frame needs the width
      // scaled down; without this every portrait solve was searched at the
      // wrong scale and reported a focal length ~1.5x too long.
      const sensorWidthMm = msg.sensorWidthMm * width / Math.max(width, height);

      const t0 = performance.now();
      const gray = toGray(new Uint8ClampedArray(rgba), width, height);
      let detected = detectStars(gray, width, height, msg.detect || {});
      const tDetect = performance.now() - t0;

      // A real star field has a wide brightness spread; sensor noise and JPEG
      // blocking do not. This separates "no stars here" from "stars found but
      // the solve failed", which need completely different advice.
      const snrs = detected.map((s) => s.snr).sort((a, b) => a - b);
      const snrP90 = snrs.length ? snrs[Math.floor(snrs.length * 0.9)] : 0;

      if (detected.length < 8) {
        self.postMessage({
          type: 'result',
          ok: false, reason: 'too-few-stars',
          detected: detected.map((s) => ({ x: s.x, y: s.y })),
          snrP90, tDetect,
        });
        return;
      }

      // Lens unknown: the stars are found once, then each focal length in
      // msg.focalList is tried in turn until one solves. Each try already
      // tolerates +-12% scale, so a 1.2x ladder leaves no gaps.
      // Two detection passes. The second, only if the first finds nothing,
      // drops elongated and one-sided blobs (cloud rims, people and trees
      // against the sky), ranks by sharpness instead of total glow, and takes
      // the best stars from every part of the frame so patterns span it.
      const PASSES = [null, { shape: true, rank: 'snr', spread: 4 }];
      let sol = null, tried = 0;
      const det1 = detected;
      const unknown = !!(msg.focalList && msg.focalList.length);
      // A cropped frame, or a sensor width that doesn't match the camera,
      // shifts the effective focal length; if the entered value fails, the
      // neighbours either side are tried too (each solve covers +-12%).
      const NEAR = [1.2, 1 / 1.2, 1.44, 1 / 1.44];
      const nTry = unknown ? msg.focalList.length * PASSES.length : PASSES.length + NEAR.length;
      for (const pass of PASSES) {
        if (pass) {
          const d2 = detectStars(gray, width, height, { ...(msg.detect || {}), ...pass });
          if (d2.length < 8) continue;
          detected = d2;
        }
        if (unknown) {
          const opts = { ...(msg.options || {}), scaleTol: 0.12 };
          for (const f of msg.focalList) {
            tried++;
            self.postMessage({ type: 'trying', f, i: tried, n: nTry });
            sol = solve({
              detected, width, height, focalMm: f, sensorWidthMm,
              stars: c.stars, layers: c.layers, options: opts,
            });
            if (sol.ok) break;
          }
        } else {
          tried++;
          if (pass) self.postMessage({ type: 'trying', f: focalMm, i: tried, n: nTry, pass: 2 });
          sol = solve({
            detected, width, height, focalMm, sensorWidthMm,
            stars: c.stars, layers: c.layers, options: msg.options || {},
          });
        }
        if (sol && sol.ok) break;
      }
      if (!unknown && !(sol && sol.ok) && sol && sol.reason !== 'too-few-stars') {
        for (const k of NEAR) {
          tried++;
          const f = focalMm * k;
          self.postMessage({ type: 'trying', f, i: tried, n: nTry, near: true });
          const s2 = solve({
            detected: det1, width, height, focalMm: f, sensorWidthMm,
            stars: c.stars, layers: c.layers, options: { ...(msg.options || {}), scaleTol: 0.12 },
          });
          if (s2.ok) { s2.focalNominalMm = focalMm; sol = s2; detected = det1; break; }
        }
      }
      if (unknown && !(sol && sol.ok)) sol = { ok: false, reason: 'unknown-lens', ms: 0 };

      if (!sol.ok) {
        self.postMessage({
          type: 'result', ok: false, reason: sol.reason,
          nDetected: detected.length, snrP90,
          detected: detected.slice(0, 500).map((s) => ({ x: s.x, y: s.y })),
          tDetect, tSolve: sol.ms, tried,
        });
        return;
      }

      const cam = makeCamera(width, height, sol.focalMm, sensorWidthMm, sol.mirrored);
      const inFrame = starsInFrame(sol, c.stars, c.names, cam, 60);
      const dsos = rankObjects(dsosInFrame(sol, c.dso, cam, 400)).slice(0, 40);

      self.postMessage({
        type: 'result',
        ok: true,
        ra: sol.ra, dec: sol.dec,
        fov: sol.fov, roll: sol.roll, mirrored: sol.mirrored,
        focalMm: sol.focalMm, focalNominalMm: sol.focalNominalMm,
        scaleArcsecPx: sol.scaleArcsecPx,
        nMatch: sol.nMatch, nDetected: detected.length,
        rmsArcsec: sol.rmsArcsec, rmsPx: sol.rmsPx,
        layer: sol.layer,
        tDetect, tSolve: sol.ms, tried,
        stars: inFrame.map((s) => ({
          x: s.x, y: s.y, mag: s.mag, name: s.name, bayer: s.bayer, con: s.con,
          ra: s.ra, dec: s.dec,
        })),
        dsos: dsos.map((d) => ({ x: d.x, y: d.y, n: d.n, d: d.d, m: d.m, t: d.t })),
        figures: figuresInFrame(sol, cam),
        detected: detected.slice(0, 500).map((s) => ({ x: s.x, y: s.y })),
      });
    }
  } catch (err) {
    self.postMessage({ type: 'error', message: String(err && err.message || err) });
  }
};
