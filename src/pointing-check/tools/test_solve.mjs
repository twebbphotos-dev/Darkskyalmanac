/*
 * End-to-end solver test against synthetic star fields.
 *
 * Projects real catalog stars onto a frame at a known pointing, then degrades
 * it the way a real sub is degraded: centroid noise, dropped detections,
 * spurious detections, and flux noise that scrambles the brightness ordering
 * the quad generator relies on. A solve counts as correct only if the
 * recovered centre and roll land within tolerance of the truth.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseStars, parseQuads } from '../solver/catalog.js';
import { solve, makeCamera, fieldAngles } from '../solver/solve.js';
import { radecToVec, vecToRaDec, matApply, angsep } from '../solver/geom.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CAT = path.join(HERE, '..', 'catalog');
const D2R = Math.PI / 180, R2D = 180 / Math.PI;

const ab = (f) => {
  const b = fs.readFileSync(f);
  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
};

const manifest = JSON.parse(fs.readFileSync(path.join(CAT, 'manifest.json'), 'utf8'));
const stars = parseStars(ab(path.join(CAT, 'stars.bin')));
const layers = manifest.layers.map((L) => ({
  name: L.name, dmin: L.dmin, dmax: L.dmax,
  quads: parseQuads(ab(path.join(CAT, L.file))),
}));
console.log(`catalog: ${stars.n} stars, layers ${layers.map((l) => `${l.name}:${l.quads.n}`).join(' ')}`);

/* --------------------------------------------------------- random helpers */

let seed = 12345;
function rnd() { // deterministic LCG so failures are reproducible
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
}
function gauss() {
  let u = 0, v = 0;
  while (u === 0) u = rnd();
  while (v === 0) v = rnd();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function truthMatrix(ra, dec, rollDeg) {
  const b = radecToVec(ra, dec);
  let n = [-b[0] * b[2], -b[1] * b[2], 1 - b[2] * b[2]];
  const nn = Math.hypot(n[0], n[1], n[2]);
  if (nn < 1e-9) n = [1, 0, 0]; else n = n.map((x) => x / nn);
  const x0 = [
    n[1] * b[2] - n[2] * b[1],
    n[2] * b[0] - n[0] * b[2],
    n[0] * b[1] - n[1] * b[0],
  ];
  const R0 = [x0, n, b]; // rows
  const phi = -rollDeg * D2R;
  const c = Math.cos(phi), s = Math.sin(phi);
  return [
    [c * R0[0][0] - s * R0[1][0], c * R0[0][1] - s * R0[1][1], c * R0[0][2] - s * R0[1][2]],
    [s * R0[0][0] + c * R0[1][0], s * R0[0][1] + c * R0[1][1], s * R0[0][2] + c * R0[1][2]],
    R0[2],
  ];
}

/* ------------------------------------------------------- synthetic frame */

function synth(cfg) {
  const { width, height, focalMm, sensorWidthMm, ra, dec, roll,
    pixNoise, dropFrac, spurious, fluxNoise, magLimit } = cfg;
  const R = truthMatrix(ra, dec, roll);
  const cam = makeCamera(width, height, focalMm, sensorWidthMm, false);
  const fov = fieldAngles(width, height, focalMm, sensorWidthMm);
  const b = radecToVec(ra, dec);
  const rad = (fov.diag / 2) * D2R;

  const out = [];
  for (let i = 0; i < stars.n; i++) {
    const v = [stars.vx[i], stars.vy[i], stars.vz[i]];
    if (v[0] * b[0] + v[1] * b[1] + v[2] * b[2] < Math.cos(rad)) continue;
    const mag = stars.mag[i] / 100;
    if (mag > magLimit) continue;
    const p = cam.toPix(matApply(R, v));
    if (!p) continue;
    const x = p[0] + gauss() * pixNoise;
    const y = p[1] + gauss() * pixNoise;
    if (x < 5 || y < 5 || x > width - 5 || y > height - 5) continue;
    if (rnd() < dropFrac) continue;
    const flux = Math.pow(10, -0.4 * mag) * (1 + gauss() * fluxNoise);
    out.push({ x, y, flux: Math.max(1e-9, flux), truth: i });
  }

  // spurious detections: hot pixels, satellites, and real stars fainter than
  // the catalog goes, which is the case that actually breaks brightness order
  const faintest = out.length ? Math.min(...out.map((s) => s.flux)) : 1e-6;
  for (let k = 0; k < spurious; k++) {
    out.push({
      x: 10 + rnd() * (width - 20),
      y: 10 + rnd() * (height - 20),
      flux: faintest * (0.6 + rnd() * 3.0),
      truth: -1,
    });
  }
  out.sort((a, b2) => b2.flux - a.flux);
  return { detected: out, R, cam, fov };
}

/* ------------------------------------------------------------------ cases */

const A7III_W = 35.9; // sensor width, mm

const CASES = [
  { label: '300mm half-res', focalMm: 300, width: 3000, height: 2000, magLimit: 9.0 },
  { label: '300mm full-res', focalMm: 300, width: 6000, height: 4000, magLimit: 9.0 },
  { label: '200mm half-res', focalMm: 200, width: 3000, height: 2000, magLimit: 9.0 },
  { label: '135mm half-res', focalMm: 135, width: 3000, height: 2000, magLimit: 8.5 },
  { label: '85mm  half-res', focalMm: 85, width: 3000, height: 2000, magLimit: 8.0 },
  { label: '50mm  half-res', focalMm: 50, width: 3000, height: 2000, magLimit: 7.0 },
  { label: '24mm  half-res', focalMm: 24, width: 3000, height: 2000, magLimit: 6.0 },
];

const PROFILES = {
  normal: { pixNoise: 0.6, dropFrac: 0.15, spurious: 12, fluxNoise: 0.25, focalErr: 0 },
  // Beyond anything a real sub should look like: a third of the stars missing,
  // heavy spurious detections, sloppy centroids, and an EXIF focal length that
  // lies by 2.5% (teleconverter, focus breathing, a mislabelled zoom).
  hard: { pixNoise: 1.5, dropFrac: 0.30, spurious: 40, fluxNoise: 0.45, focalErr: 0.025 },
};
const DEGRADE = PROFILES[process.env.PROFILE || 'normal'];
if (!DEGRADE) throw new Error('unknown PROFILE');
console.log(`profile: ${process.env.PROFILE || 'normal'}`);

const TRIALS = Number(process.argv[2] || 12);
let grandPass = 0, grandTotal = 0;
const timings = [];

for (const C of CASES) {
  let pass = 0, fail = 0;
  const errs = [], rollErrs = [], times = [], scales = [];
  const failures = [];

  for (let t = 0; t < TRIALS; t++) {
    const ra = rnd() * 2 * Math.PI;
    const dec = Math.asin(rnd() * 2 - 1);
    const roll = rnd() * 360;
    const trueFocal = C.focalMm * (1 + (DEGRADE.focalErr || 0) * (rnd() * 2 - 1));
    const S = synth({ ...C, ...DEGRADE, focalMm: trueFocal,
      sensorWidthMm: A7III_W, ra, dec, roll });
    if (S.detected.length < 10) { continue; }

    const sol = solve({
      detected: S.detected,
      width: C.width, height: C.height,
      focalMm: C.focalMm, sensorWidthMm: A7III_W,
      stars, layers,
    });

    grandTotal++;
    if (!sol.ok) {
      fail++;
      failures.push(`  MISS ra=${(ra * R2D).toFixed(1)} dec=${(dec * R2D).toFixed(1)} ` +
        `n=${S.detected.length} reason=${sol.reason} quads=${sol.quadsTried}`);
      continue;
    }
    const truthVec = radecToVec(ra, dec);
    const errDeg = angsep(truthVec, sol.boresight) * R2D;
    let dRoll = Math.abs(sol.roll - roll) % 360;
    if (dRoll > 180) dRoll = 360 - dRoll;

    const good = errDeg < 0.05 && dRoll < 0.5;
    if (good) { pass++; grandPass++; } else {
      fail++;
      failures.push(`  WRONG err=${errDeg.toFixed(3)}deg dRoll=${dRoll.toFixed(2)} ` +
        `nMatch=${sol.nMatch} rms=${sol.rmsPx.toFixed(2)}px`);
    }
    errs.push(errDeg); rollErrs.push(dRoll); times.push(sol.ms);
    scales.push(sol.focalMm / trueFocal);
  }

  const med = (a) => (a.length ? a.slice().sort((x, y) => x - y)[a.length >> 1] : NaN);
  times.forEach((t) => timings.push(t));
  console.log(
    `${C.label.padEnd(16)} pass ${String(pass).padStart(2)}/${pass + fail}` +
    `  centre_err_med ${(med(errs) * 3600).toFixed(1)}"` +
    `  roll_err_med ${med(rollErrs).toFixed(3)}deg` +
    `  focal_ratio_med ${med(scales)?.toFixed(4)}` +
    `  t_med ${med(times)?.toFixed(0)}ms`,
  );
  failures.slice(0, 3).forEach((f) => console.log(f));
}

console.log(`\nTOTAL ${grandPass}/${grandTotal} ` +
  `(${((grandPass / Math.max(1, grandTotal)) * 100).toFixed(1)}%)`);
const st = timings.slice().sort((a, b) => a - b);
if (st.length) {
  console.log(`solve time: median ${st[st.length >> 1].toFixed(0)}ms  ` +
    `p90 ${st[Math.floor(st.length * 0.9)].toFixed(0)}ms  max ${st[st.length - 1].toFixed(0)}ms`);
}
process.exit(grandPass === grandTotal ? 0 : 1);
