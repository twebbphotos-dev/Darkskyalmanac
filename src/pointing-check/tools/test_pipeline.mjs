/*
 * Full-pipeline test: render a synthetic frame as actual pixels (Gaussian
 * PSFs, read noise, sky gradient, hot pixels, a bit of foreground), then run
 * the real detector and solver over it. test_solve.mjs feeds the solver a
 * perfect star list; this is the one that exercises detect.js.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseStars, parseQuads, starVec, starsNear } from '../solver/catalog.js';
import { toGray, detectStars } from '../solver/detect.js';
import { solve, makeCamera, fieldAngles, starsInFrame } from '../solver/solve.js';
import { radecToVec, matApply, angsep } from '../solver/geom.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CAT = path.join(HERE, '..', 'catalog');
const D2R = Math.PI / 180, R2D = 180 / Math.PI;
const ab = (f) => { const b = fs.readFileSync(f); return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength); };

const man = JSON.parse(fs.readFileSync(path.join(CAT, 'manifest.json'), 'utf8'));
const stars = parseStars(ab(path.join(CAT, 'stars.bin')));
const names = JSON.parse(fs.readFileSync(path.join(CAT, 'names.json'), 'utf8'));
const layers = man.layers.map((L) => ({
  name: L.name, dmin: L.dmin, dmax: L.dmax, density: L.density,
  quads: parseQuads(ab(path.join(CAT, L.file))),
}));

let seed = 4242;
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const gauss = () => { let u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };

function truthMatrix(ra, dec, rollDeg) {
  const b = radecToVec(ra, dec);
  let n = [-b[0] * b[2], -b[1] * b[2], 1 - b[2] * b[2]];
  const nn = Math.hypot(n[0], n[1], n[2]);
  n = nn < 1e-9 ? [1, 0, 0] : n.map((x) => x / nn);
  const x0 = [n[1] * b[2] - n[2] * b[1], n[2] * b[0] - n[0] * b[2], n[0] * b[1] - n[1] * b[0]];
  const R0 = [x0, n, b];
  const p = -rollDeg * D2R, c = Math.cos(p), s = Math.sin(p);
  return [
    [c * R0[0][0] - s * R0[1][0], c * R0[0][1] - s * R0[1][1], c * R0[0][2] - s * R0[1][2]],
    [s * R0[0][0] + c * R0[1][0], s * R0[0][1] + c * R0[1][1], s * R0[0][2] + c * R0[1][2]],
    R0[2],
  ];
}

/**
 * Render RGBA pixels for a star field.
 * @param o.fwhm      star FWHM in px
 * @param o.skyLevel  background level, 0-255
 * @param o.readNoise sigma in DN
 * @param o.limitMag  faintest star rendered (the sensor goes deeper than the catalog)
 * @param o.foreground fraction of frame height occupied by dark terrain
 */
function render(o) {
  const { W, H, F, SW, ra, dec, roll, fwhm, skyLevel, readNoise, limitMag, foreground, trail } = o;
  const cam = makeCamera(W, H, F, SW, false);
  const fov = fieldAngles(W, H, F, SW);
  const R = truthMatrix(ra, dec, roll);
  const b = radecToVec(ra, dec);

  const buf = new Float32Array(W * H);
  // sky with a gradient, as light pollution on one side
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      buf[y * W + x] = skyLevel * (0.75 + 0.5 * (x / W) * (1 - 0.4 * y / H));
    }
  }

  // Moffat profile, not Gaussian. Real star images carry heavy wings, and
  // those wings are what keeps flux ordering meaningful once bright stars
  // saturate - a pure Gaussian truncates so fast that every bright star looks
  // the same size, which is not how a sub behaves.
  const beta = 2.5;
  const alpha = fwhm / (2 * Math.sqrt(Math.pow(2, 1 / beta) - 1));
  const sigma = fwhm / 2.3548;
  const rad = Math.max(4, Math.ceil(alpha * 7));
  const near = starsNear(stars, b, (fov.diag / 2 + 1) * D2R);
  let drawn = 0;
  for (const i of near) {
    const mag = stars.mag[i] / 100;
    if (mag > limitMag) continue;
    const p = cam.toPix(matApply(R, starVec(stars, i)));
    if (!p) continue;
    const [sx, sy] = p;
    if (sx < -rad || sy < -rad || sx > W + rad || sy > H + rad) continue;
    // calibrated so a mag 10 star sits a few sigma above the read noise and
    // anything brighter than ~mag 4 saturates, as a real sub does
    const total = 1.8e5 * Math.pow(10, -0.4 * (mag - 2.0));
    const norm = (beta - 1) / (Math.PI * alpha * alpha);
    const peak = total * norm;
    for (let dy = -rad; dy <= rad; dy++) {
      const yy = Math.round(sy) + dy;
      if (yy < 0 || yy >= H) continue;
      for (let dx = -rad; dx <= rad; dx++) {
        const xx = Math.round(sx) + dx;
        if (xx < 0 || xx >= W) continue;
        const ex = xx - sx, ey = yy - sy;
        const tx = trail ? ex / (1 + trail) : ex;
        const r2 = (tx * tx + ey * ey) / (alpha * alpha);
        buf[yy * W + xx] += peak * Math.pow(1 + r2, -beta);
      }
    }
    drawn++;
  }

  // dark foreground across the bottom, as a ridge line
  if (foreground > 0) {
    for (let x = 0; x < W; x++) {
      const edge = H * (1 - foreground) + Math.sin(x / 180) * H * 0.05 + Math.sin(x / 47) * H * 0.012;
      for (let y = Math.max(0, Math.floor(edge)); y < H; y++) buf[y * W + x] = 2 + rnd() * 3;
    }
  }

  // hot pixels
  for (let k = 0; k < 60; k++) {
    buf[(Math.floor(rnd() * H) * W) + Math.floor(rnd() * W)] += 120 + rnd() * 100;
  }

  const rgba = new Uint8ClampedArray(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    const v = Math.max(0, Math.min(255, buf[i] + gauss() * readNoise));
    rgba[i * 4] = v; rgba[i * 4 + 1] = v; rgba[i * 4 + 2] = v; rgba[i * 4 + 3] = 255;
  }
  return { rgba, drawn, truth: { ra, dec, roll } };
}

const SW = 35.9;
const CASES = [
  { label: '300mm, clean 8s',        W: 3000, H: 2000, F: 300, fwhm: 2.8, skyLevel: 22, readNoise: 2.5, limitMag: 11.0, foreground: 0,    trail: 0 },
  { label: '300mm, short 2s',        W: 3000, H: 2000, F: 300, fwhm: 2.6, skyLevel: 16, readNoise: 3.0, limitMag: 9.3,  foreground: 0,    trail: 0 },
  { label: '300mm, soft focus',      W: 3000, H: 2000, F: 300, fwhm: 6.5, skyLevel: 26, readNoise: 3.0, limitMag: 10.5, foreground: 0,    trail: 0 },
  { label: '300mm, slight trailing', W: 3000, H: 2000, F: 300, fwhm: 3.0, skyLevel: 24, readNoise: 2.5, limitMag: 10.5, foreground: 0,    trail: 1.8 },
  { label: '300mm, bright sky',      W: 3000, H: 2000, F: 300, fwhm: 3.0, skyLevel: 95, readNoise: 4.0, limitMag: 9.5,  foreground: 0,    trail: 0 },
  { label: '200mm, ridge in frame',  W: 3000, H: 2000, F: 200, fwhm: 3.0, skyLevel: 24, readNoise: 2.5, limitMag: 10.5, foreground: 0.33, trail: 0 },
  { label: '135mm, clean',           W: 3000, H: 2000, F: 135, fwhm: 3.0, skyLevel: 22, readNoise: 2.5, limitMag: 10.0, foreground: 0,    trail: 0 },
  { label: '50mm, ridge in frame',   W: 3000, H: 2000, F: 50,  fwhm: 2.8, skyLevel: 28, readNoise: 3.0, limitMag: 9.5,  foreground: 0.28, trail: 0 },
  { label: '24mm, Milky Way wide',   W: 3000, H: 2000, F: 24,  fwhm: 2.6, skyLevel: 30, readNoise: 3.0, limitMag: 9.0,  foreground: 0.22, trail: 0 },
];

const N = Number(process.argv[2] || 4);
let pass = 0, total = 0;
const allT = [];

for (const C of CASES) {
  let ok = 0, n = 0;
  const errs = [], dets = [], matches = [], times = [];
  for (let t = 0; t < N; t++) {
    const ra = rnd() * 2 * Math.PI;
    const dec = Math.asin(rnd() * 2 - 1);
    const roll = rnd() * 360;
    const img = render({ ...C, SW, ra, dec, roll });

    const t0 = Date.now();
    const gray = toGray(img.rgba, C.W, C.H);
    const detected = detectStars(gray, C.W, C.H);
    const tDet = Date.now() - t0;

    const sol = solve({
      detected, width: C.W, height: C.H, focalMm: C.F, sensorWidthMm: SW,
      stars, layers,
    });
    n++; total++;
    dets.push(detected.length);
    times.push(tDet + (sol.ms || 0));
    if (sol.ok) {
      const err = angsep(radecToVec(ra, dec), sol.boresight) * R2D;
      let dR = Math.abs(sol.roll - roll) % 360; if (dR > 180) dR = 360 - dR;
      if (err < 0.1 && dR < 1.0) { ok++; pass++; }
      errs.push(err * 3600);
      matches.push(sol.nMatch);
    }
  }
  const med = (a) => (a.length ? a.slice().sort((x, y) => x - y)[a.length >> 1] : NaN);
  times.forEach((x) => allT.push(x));
  console.log(
    `${C.label.padEnd(26)} ${String(ok).padStart(2)}/${n}` +
    `  detected ${String(med(dets)).padStart(4)}` +
    `  matched ${String(med(matches) || '-').padStart(3)}` +
    `  err ${isNaN(med(errs)) ? '   -' : med(errs).toFixed(1).padStart(5)}"` +
    `  ${med(times).toFixed(0)}ms`,
  );
}
console.log(`\nTOTAL ${pass}/${total}`);
const s = allT.sort((a, b) => a - b);
console.log(`detect+solve: median ${s[s.length >> 1]}ms  max ${s[s.length - 1]}ms`);
process.exit(pass === total ? 0 : 1);
