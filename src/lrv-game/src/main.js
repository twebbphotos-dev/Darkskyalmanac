/* ──────────────────────────────────────────────────────────────
   Lunar Roving Vehicle · Apollo 17
   Drive the Apollo 17 rover in the Taurus–Littrow valley under the Moon's
   gravity, 1.62 m/s², a sixth of Earth's. The physics is the point:
   four sprung wheels whose grip is limited by the load on each, a body
   that pitches, rolls and spins freely once it leaves the ground, and
   dust that flies in clean arcs because there is no air to slow it.
   ────────────────────────────────────────────────────────────── */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { createStick, buzz } from '../../rover-game/src/stick.js';
import { DETAIL, DETAIL_NAME, detailChoice, setDetail } from '../../rover-game/src/detail.js';      // the Mars simulator's detail setting, shared
import * as U from '../../rover-game/src/units.js';      // metric or US, from Settings, shared too

const $ = id => document.getElementById(id);
const G = 1.62;                       // lunar surface gravity, m/s²
const TOUCH = document.documentElement.classList.contains('touch');

/* ── random numbers and noise, seeded so the ground is the same every visit ── */
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const P = (() => { const r = rng(7), a = new Float32Array(256 * 256); for (let i = 0; i < a.length; i++) a[i] = r(); return a; })();
const lat = (i, j) => P[(((i % 256) + 256) % 256) * 256 + (((j % 256) + 256) % 256)];
function vnoise(u, v) { const i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, su = fu * fu * (3 - 2 * fu), sv = fv * fv * (3 - 2 * fv);
  const a = lat(i, j), b = lat(i + 1, j), c = lat(i, j + 1), d = lat(i + 1, j + 1); return a + (b - a) * su + (c - a) * sv + (a - b - c + d) * su * sv; }
const fbm = (x, z, o) => { let f = 0, a = .5, q = 1; for (let k = 0; k < o; k++) { f += a * vnoise(x * q, z * q); a *= .5; q *= 2.03; } return f; };
const ss = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

/* ── the ground ──────────────────────────────────────────────────
   Near the lander the ground is generated: NASA's terrain model of the site has 250 m cells, far too coarse
   for the craters a rover drives among. Craters follow the Moon's size mix (many small, few large, most of
   them worn), each a bowl with a raised rim; a fresh rim drops away steeply on the inside, which is what
   throws the rover into the air. The mountains around the valley are the real ones, from the terrain model.
   The drivable square holds the whole of the third drive (stops 6 to 9), at a quarter scale across: one game metre is
   SQ metres of the Moon, and heights are squashed by SV, so slopes come out SQ·SV = 1.6 times real. The valley's
   shape under it comes from the same terrain model, with the Moon's curvature; the craters are game size. */
const SQ = 4, SV = 0.4, RM = 1737400;
const HALF = 600, CX = 243, CZ = -375, CELL = 1.6, N = Math.round(2 * HALF / CELL) + 1;      // the drivable square, 1.2 km across, round the third drive (grown west in 4.93 for room round Shorty)
const inSq = (x, z, m) => Math.abs(x - CX) < HALF - m && Math.abs(z - CZ) < HALF - m;
let DEM = null;      // NASA's terrain model of the site (models/moon-a17.bin): 256 × 250 m, heights in quarter-metres, centred on the lander
function demRaw(X, Z) {      // metres, at X east and Z south of the lander in real metres; Catmull-Rom between the 250 m cells so slopes stay smooth
  if (!DEM) return 0;
  const u = X / 250 + 127.5, v = Z / 250 + 127.5, i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j;
  const d = (a, b) => DEM[Math.max(0, Math.min(255, b)) * 256 + Math.max(0, Math.min(255, a))] / 4;
  const cr = (a, b, c, e, t) => b + 0.5 * t * (c - a + t * (2 * a - 5 * b + 4 * c - e + t * (3 * (b - c) + e - a)));
  const row = k => cr(d(i - 1, k), d(i, k), d(i + 1, k), d(i + 2, k), fu);
  return cr(row(j - 1), row(j), row(j + 1), row(j + 2), fv);
}
let DEM0 = 0;
function demGame(x, z) { const X = x * SQ, Z = z * SQ; return (demRaw(X, Z) - DEM0) * SV - (X * X + Z * Z) / (2 * RM) * SV; }
const craters = [], rocks = [], VAN = { x: 0, z: 0 }, SHORTY = { x: -158, z: 62, R: 55 };
{ const r = rng(1972);
  const add = (x, z, R, fresh) => craters.push({ x, z, R, fresh, depth: R * (0.12 + 0.26 * fresh), rim: R * (0.025 + 0.06 * fresh) });
  // a few fresh ones within reach of the start, the rims to aim for
  [[48, -18, 13, 1], [-30, 64, 17, .95], [96, 52, 21, .9], [20, 120, 11, 1], [-40, -75, 24, .85]].forEach(c => add(...c));      // (the last moved out of Shorty's way)
  // the square was 940 m across round (373, −375) when these were laid out; they stay where they were, and the strip it
  // grew by (to make room for Shorty, west of the lander) gets its own, from its own random numbers, just below
  const CX0 = 373, CZ0 = -375, H0 = 470, old = (x, z) => Math.abs(x - CX0) < H0 && Math.abs(z - CZ0) < H0;
  for (let i = 0; i < 2000; i++) {
    const R = 1.2 / Math.sqrt(1 - r() * (1 - (1.2 / 32) ** 2));        // a power-law spread of sizes, 1.2 to 32 m
    const x = CX0 + (r() * 2 - 1) * (H0 - 10), z = CZ0 + (r() * 2 - 1) * (H0 - 10);
    if (Math.hypot(x, z) < 14 || Math.hypot(x + 12, z - 4) < 14) continue;      // the start and the lander stand on level ground
    add(x, z, R, Math.pow(r(), 2.2));
  }
  for (let i = 0; i < 1150; i++) { const x = CX0 + (r() * 2 - 1) * (H0 - 6), z = CZ0 + (r() * 2 - 1) * (H0 - 6); if (Math.hypot(x, z) < 10) continue;
    rocks.push({ x, z, s: 0.12 + Math.pow(r(), 3) * 0.7, yaw: r() * 6.28, k: r() }); }
  { const q = rng(2112);      // the new strip, at the same density
    for (let i = 0; i < 1060; i++) { const R = 1.2 / Math.sqrt(1 - q() * (1 - (1.2 / 32) ** 2)), x = CX + (q() * 2 - 1) * (HALF - 10), z = CZ + (q() * 2 - 1) * (HALF - 10), f = Math.pow(q(), 2.2);
      if (old(x, z) || Math.hypot(x + 12, z - 4) < 14 || Math.hypot(x - SHORTY.x, z - SHORTY.z) < SHORTY.R * 1.3) continue; add(x, z, R, f); }
    for (let i = 0; i < 600; i++) { const x = CX + (q() * 2 - 1) * (HALF - 6), z = CZ + (q() * 2 - 1) * (HALF - 6), s = 0.12 + Math.pow(q(), 3) * 0.7, yaw = q() * 6.28, k = q();
      if (!old(x, z)) rocks.push({ x, z, s, yaw, k }); } }
  // a fresh crater digs through the soil into rock and throws blocks out over its rim; worn ones have lost theirs
  for (const c of craters) { if (c.fresh < 0.55 || c.R < 4) continue; const n = Math.round(c.R * c.fresh * 2.2);
    for (let i = 0; i < n; i++) { const a = r() * 6.2832, d = c.R * (0.85 + Math.pow(r(), 1.7) * 1.3), x = c.x + Math.cos(a) * d, z = c.z + Math.sin(a) * d;
      if (!inSq(x, z, 6) || Math.hypot(x, z) < 10) continue;
      rocks.push({ x, z, s: 0.2 + Math.pow(r(), 2.2) * Math.min(1.6, c.R * 0.07), yaw: r() * 6.28, k: r() }); } }
  // Van Serg, stop 9: a real crater about 100 m across, true size, beside where the rover parked (stop 9 is at 1735 m east,
  // 1228 m south of the lander, so 421.75, -303 here), set just off the route. Its rim is strewn with angular blocks, mostly
  // under 30 cm, a few up to about 2 m (the Apollo 17 Preliminary Science Report). Its own random numbers, so nothing else moves.
  { const v = rng(17), x = 421.75 + 38, z = -303 + 44; add(x, z, 50, 0.5); VAN.x = x; VAN.z = z;
    for (let i = 0; i < 170; i++) { const a = v() * 6.2832, d = 50 * (0.86 + Math.pow(v(), 1.5) * 1.1);
      rocks.push({ x: x + Math.cos(a) * d, z: z + Math.sin(a) * d, s: 0.07 + Math.pow(v(), 4) * 0.95, yaw: v() * 6.28, k: v() }); } }
  // Shorty, stop 4 of the second drive: about 110 m across and up to 14 m deep, true size, but drawn here about 160 m
  // west-southwest of the lander, out the way the second drive went, where the real one is some 4.3 km west. Smaller craters
  // that would cut its rim are cleared first (after the blocks are thrown, so nothing else moves). Its rim, where Harrison Schmitt found the orange soil, is tinted
  // (orangeAt, below). A few blocks on the rim; its own random numbers.
  for (let i = craters.length - 1; i >= 0; i--) if (Math.hypot(craters[i].x - SHORTY.x, craters[i].z - SHORTY.z) < SHORTY.R * 1.25 + craters[i].R * 0.5) craters.splice(i, 1);
  { const v = rng(74); craters.push({ x: SHORTY.x, z: SHORTY.z, R: SHORTY.R, fresh: 0.5, depth: 14, rim: 2.2 });
    for (let i = 0; i < 70; i++) { const a = v() * 6.2832, d = SHORTY.R * (0.9 + Math.pow(v(), 1.5) * 0.8);
      rocks.push({ x: SHORTY.x + Math.cos(a) * d, z: SHORTY.z + Math.sin(a) * d, s: 0.08 + Math.pow(v(), 4) * 0.8, yaw: v() * 6.28, k: v() }); } }
}
// The orange soil: glass beads from fire-fountain eruptions, buried under later lava and dug out by the impact. Schmitt
// found it as a narrow zone on the rim, not a ring round the crater: here two patches on the rim, the larger where the
// sample was scooped (74220), elongated along the rim and broken up at the edges. A light tint on the ground's own color.
const ORANGE = [[2.4, 1.02, 0.15, 0.09, 1], [2.95, 1.06, 0.08, 0.06, 0.7]];      // angle round the rim, distance out (radii), spread along and across, strength
function orangeAt(x, z) {
  const dx = x - SHORTY.x, dz = z - SHORTY.z, d = Math.hypot(dx, dz) / SHORTY.R; if (d < 0.75 || d > 1.35) return 0;
  const a = Math.atan2(dz, dx); let w = 0;
  for (const [a0, d0, sa, sd, k] of ORANGE) { let da = a - a0; da -= 6.2832 * Math.round(da / 6.2832); w = Math.max(w, k * Math.exp(-(da * da) / (2 * sa * sa) - ((d - d0) * (d - d0)) / (2 * sd * sd))); }
  return w < 0.02 ? 0 : ss(0.15, 0.55, w * (0.6 + 0.8 * fbm(x / 5 + 3, z / 5 - 5, 3)));
}
const tintOrange = (b, w, out) => { out[0] = b * (1 + 0.38 * w); out[1] = b * (1 + 0.06 * w); out[2] = b * (1 - 0.36 * w); return out; };
const CG = 16, CRATER_GRID = new Map();      // craters by 16 m cell, so each point checks only its neighbors
function indexCraters() { craters.forEach(c => { const e = c.R * 2.2; for (let a = Math.floor((c.x - e) / CG); a <= Math.floor((c.x + e) / CG); a++) for (let b = Math.floor((c.z - e) / CG); b <= Math.floor((c.z + e) / CG); b++) { const k = a + ',' + b; if (!CRATER_GRID.has(k)) CRATER_GRID.set(k, []); CRATER_GRID.get(k).push(c); } }); }
function craterH(x, z) {
  let h = 0;
  for (const c of CRATER_GRID.get(Math.floor(x / CG) + ',' + Math.floor(z / CG)) || []) {
    const dx = x - c.x, dz = z - c.z; if (dx > c.R * 2.2 || dx < -c.R * 2.2 || dz > c.R * 2.2 || dz < -c.R * 2.2) continue;
    const d = Math.hypot(dx, dz) / c.R;
    h += d < 1 ? c.rim + (-c.depth - c.rim) * (1 - d * d) * (1 - d * d * 0.35) : c.rim * Math.exp(-(((d - 1) / 0.42) ** 2));
  }
  return h;
}
const H = new Float32Array(N * N), B = new Float32Array(N * N), HB = new Float32Array(N * N);      // HB: the same ground without its craters, for the relief map
function brightness(x, z) {
  let b = 0;
  for (const c of CRATER_GRID.get(Math.floor(x / CG) + ',' + Math.floor(z / CG)) || []) { const d = Math.hypot(x - c.x, z - c.z) / c.R; if (d < 2.1) b = Math.max(b, c.fresh * c.fresh * (d < 1 ? 0.55 : Math.exp(-(((d - 1) / 0.5) ** 2)))); }
  return 0.9 + 0.2 * (fbm(x / 35 + 7, z / 35, 3) - .5) + 0.45 * b;
}
// The surface of the terrain model's inner ring exactly as drawn: flat triangles on its 20 m grid, sunk 0.15 m. Where
// the slope curves, as at the foot of the North Massif, those triangles sag up to half a meter below the true shape.
function ringSurf(x, z) {
  const u = (x - CX + 2500) / 20, v = (z - CZ + 2500) / 20, i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, n = (a, b) => demGame(CX - 2500 + a * 20, CZ - 2500 + b * 20);
  const ha = n(i, j), hb = n(i, j + 1), hd = n(i + 1, j);
  if (fu + fv <= 1) return ha + (hd - ha) * fu + (hb - ha) * fv - 0.15;
  const hc = n(i + 1, j + 1); return hc + (hb - hc) * (1 - fu) + (hd - hc) * (1 - fv) - 0.15;
}
function buildGround() {
  indexCraters();
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const x = CX - HALF + i * CELL, z = CZ - HALF + j * CELL;
    const edge = ss(0, 40, HALF - Math.max(Math.abs(x - CX), Math.abs(z - CZ)));      // the detail fades out at the edge, where the terrain model's ring takes over
    // and over the same 40 m the shape eases onto the ring's own surface, so the two meet without a ledge (it cast a shadow line along the edge)
    const d = demGame(x, z), rs = edge < 1 ? ringSurf(x, z) : d;
    HB[j * N + i] = rs + edge * (d - rs) + edge * ((fbm(x / 60, z / 60, 4) - .5) * 2.2 + (fbm(x / 9 + 40, z / 9, 3) - .5) * 0.35);
    H[j * N + i] = HB[j * N + i] + edge * craterH(x, z);
    B[j * N + i] = brightness(x, z);
  }
  // the landing site: Challenger came down on fairly even ground, so the bumps under it are smoothed out, not leveled: the
  // ground eases toward the plane that best fits it (keeping its own slope), fully within 6 m, fading out by 22 m, so
  // there is no flat terrace (a flat pad to its mean height read as one), and the lander stands on that plane (below)
  const near = (R, fn) => { for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const dx = CX - HALF + i * CELL - LM.x, dz = CZ - HALF + j * CELL - LM.z, r = Math.hypot(dx, dz); if (r < R) fn(j * N + i, dx, dz, r); } };
  let S0 = 0, Sx = 0, Sz = 0, Sxx = 0, Szz = 0, Sxz = 0, Sh = 0, Sxh = 0, Szh = 0;
  near(14, (o, dx, dz) => { const h = H[o]; S0++; Sx += dx; Sz += dz; Sxx += dx * dx; Szz += dz * dz; Sxz += dx * dz; Sh += h; Sxh += dx * h; Szh += dz * h; });
  if (S0 > 10) {      // least squares h = a + b dx + c dz (Cramer's rule)
    const M = [[S0, Sx, Sz], [Sx, Sxx, Sxz], [Sz, Sxz, Szz]], v = [Sh, Sxh, Szh], det = m => m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
    const D0 = det(M), col = k => M.map((row, i) => row.map((x, j) => j === k ? v[i] : x)), [a, b, c] = [0, 1, 2].map(k => det(col(k)) / D0);
    LM.plane = { a, b, c };
    near(22, (o, dx, dz, r) => { const w = ss(22, 6, r), t = a + b * dx + c * dz; H[o] += (t - H[o]) * w; HB[o] += (t - HB[o]) * w; });
  }
}
// rocks are small bumps the wheels feel, under the rock you see
const ROCK_GRID = new Map(), RG = 8;
function indexRocks() { for (let i = rocks.length - 1; i >= 0; i--) if (Math.hypot(rocks[i].x - LM.x, rocks[i].z - LM.z) < 7) rocks.splice(i, 1);      // nothing under the lander
  rocks.forEach((k, n) => { const key = Math.floor(k.x / RG) + ',' + Math.floor(k.z / RG); if (!ROCK_GRID.has(key)) ROCK_GRID.set(key, []); ROCK_GRID.get(key).push(n); }); }
function rockH(x, z) {
  let h = 0; const gx = Math.floor(x / RG), gz = Math.floor(z / RG);
  for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) { const l = ROCK_GRID.get((gx + a) + ',' + (gz + b)); if (!l) continue;
    for (const n of l) { const k = rocks[n], d2 = ((x - k.x) ** 2 + (z - k.z) ** 2) / (k.s * k.s); if (d2 < 1) h = Math.max(h, k.s * 0.55 * Math.sqrt(1 - d2)); } }
  return h;
}
/* Craterlets a few tens of centimeters to a meter or two across, and the grain of the soil: too small for the
   1.25 m grid, so they live in a finer patch of ground that follows the rover. The wheels feel them too. */
function hash2(i, j) { let h = Math.imul(i, 374761393) + Math.imul(j, 668265263); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
const MC = 3;
function microRaw(x, z) {
  let h = (vnoise(x / 1.7, z / 1.7) - .5) * 0.12 + (vnoise(x / 0.55 + 71, z / 0.55) - .5) * 0.04;
  const ci = Math.floor(x / MC), cj = Math.floor(z / MC);
  for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
    const i = ci + a, j = cj + b, p = hash2(i, j); if (p > 0.26) continue;
    const R = 0.25 / Math.sqrt(1 - hash2(i + 91, j) * (1 - (0.25 / 1.5) ** 2)), cx = (i + hash2(i, j + 57)) * MC, cz = (j + hash2(i + 13, j + 7)) * MC;
    const d = Math.hypot(x - cx, z - cz) / R; if (d > 1.8) continue;
    const dep = R * (0.05 + 0.09 * hash2(i + 5, j + 3)), rim = dep * 0.25;
    h += d < 1 ? rim + (-dep - rim) * (1 - d * d) : rim * Math.exp(-(((d - 1) / 0.4) ** 2));
  }
  return h;
}
const PATCH = { cx: 0, cz: 0, half: 48 };
function microFade(x, z) { return ss(PATCH.half, PATCH.half - 6, Math.max(Math.abs(x - PATCH.cx), Math.abs(z - PATCH.cz))); }
function groundBase(x, z) {
  const u = Math.max(0, Math.min(N - 1.001, (x - CX + HALF) / CELL)), v = Math.max(0, Math.min(N - 1.001, (z - CZ + HALF) / CELL)), i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j;
  const a = H[j * N + i], b = H[j * N + i + 1], c = H[(j + 1) * N + i], d = H[(j + 1) * N + i + 1];
  return a + (b - a) * fu + (c - a) * fv + (a - b - c + d) * fu * fv;
}
// the craters at full shape, where the 1.6 m grid rounds the small ones away: what the fine patch adds to the grid
function craterFine(x, z) {
  const u = Math.max(0, Math.min(N - 1.001, (x - CX + HALF) / CELL)), v = Math.max(0, Math.min(N - 1.001, (z - CZ + HALF) / CELL)), i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, o = j * N + i;
  const hb = HB[o] + (HB[o + 1] - HB[o]) * fu + (HB[o + N] - HB[o]) * fv + (HB[o] - HB[o + 1] - HB[o + N] + HB[o + N + 1]) * fu * fv;
  return hb + ss(0, 40, HALF - Math.max(Math.abs(x - CX), Math.abs(z - CZ))) * craterH(x, z) - groundBase(x, z);
}
function ground(x, z) {      // height of the drawn surface, plus rocks
  const f = microFade(x, z);
  const h = groundBase(x, z) + (f > 0 ? (microRaw(x, z) + craterFine(x, z)) * f : 0) + rockH(x, z);
  return SLABS.length ? Math.max(h, slabAt(x, z)) : h;
}
const _n = new THREE.Vector3();
function normalAt(x, z) { const e = 0.35; return _n.set(ground(x - e, z) - ground(x + e, z), 2 * e, ground(x, z - e) - ground(x, z + e)).normalize(); }

/* ── scene ───────────────────────────────────────────────────── */
const renderer = new THREE.WebGLRenderer({ canvas: $('scene'), antialias: DETAIL.aa, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(DETAIL.pr, devicePixelRatio));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.25;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x000000);      // no air, so a black sky even in full sunlight
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 80000);
function resize() { renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();

// a low morning Sun in the east, as on every Apollo landing; nothing but the ground itself to fill the shadows
const SUN = new THREE.Vector3(Math.sin(95 * Math.PI / 180) * Math.cos(16 * Math.PI / 180), Math.sin(16 * Math.PI / 180), -Math.cos(95 * Math.PI / 180) * Math.cos(16 * Math.PI / 180)).normalize();
const sun = new THREE.DirectionalLight(0xfffaf2, 3.4); sun.castShadow = true;
sun.shadow.mapSize.set(DETAIL.shadow, DETAIL.shadow); { const r = 30 * DETAIL.shadowR; Object.assign(sun.shadow.camera, { left: -r, right: r, top: r, bottom: -r, near: 1, far: 200 }); } sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.04;
scene.add(sun, sun.target);
scene.add(new THREE.HemisphereLight(0x000000, 0x6e6a64, 0.75));      // light thrown back up by the sunlit ground, which keeps the shadows from going quite black

// regolith: a fine grey with a little noise, drawn at close range. Centred near white: a mid-grey map
// (128, about 0.22 once linear) darkened the near ground to a quarter of the mountains' brightness
function regolithTex() {
  const S = 256, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), im = x.createImageData(S, S), r = rng(3);
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) { const n = (fbm(i / 18, j / 18, 4) - .5) * 40 + (r() - .5) * 26, v = Math.max(0, Math.min(255, 200 + n * 0.7)), o = (j * S + i) * 4; im.data[o] = im.data[o + 1] = im.data[o + 2] = v; im.data[o + 3] = 255; }
  x.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
// fine relief for the soil surface, as a normal map: pits and clods a few centimeters across, which the low Sun picks out
function grainNormal() {
  const S = 256, h = new Float32Array(S * S), r = rng(29);
  for (let k = 0; k < 900; k++) { const cx = r() * S, cy = r() * S, R = 1.5 + Math.pow(r(), 3) * 9, dep = (r() < .6 ? -1 : .6) * R * 0.25, e = Math.ceil(R * 1.6);
    for (let dy = -e; dy <= e; dy++) for (let dx = -e; dx <= e; dx++) { const d = Math.hypot(dx, dy) / R; if (d > 1.6) continue; const px = ((Math.round(cx) + dx) % S + S) % S, py = ((Math.round(cy) + dy) % S + S) % S;
      h[py * S + px] += d < 1 ? dep * (1 - d * d) : -dep * 0.2 * Math.exp(-(((d - 1) / 0.3) ** 2)); } }
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) h[j * S + i] += (fbm(i / 6, j / 6, 3) - .5) * 1.4;
  const c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), im = x.createImageData(S, S);
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) { const gx = h[j * S + (i + 1) % S] - h[j * S + (i + S - 1) % S], gy = h[((j + 1) % S) * S + i] - h[((j + S - 1) % S) * S + i], l = Math.hypot(gx, gy, 2), o = (j * S + i) * 4;
    im.data[o] = 128 - gx / l * 127; im.data[o + 1] = 128 + gy / l * 127; im.data[o + 2] = 128 + 2 / l * 127; im.data[o + 3] = 255; }
  x.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; return t;
}
const soil = new THREE.MeshStandardMaterial({ color: 0xa8a49d, roughness: 1, metalness: 0, map: regolithTex(), normalMap: grainNormal(), vertexColors: true });
soil.normalScale.set(0.34, 0.34);
// the grain is for the ground at your feet: it tiles every 3.2 m, and further off it hammered the whole plain into one pattern
const grainFade = sh => sh.fragmentShader.replace('#include <normal_fragment_maps>', THREE.ShaderChunk.normal_fragment_maps.replace('mapN.xy *= normalScale;', 'mapN.xy *= normalScale * ( 1.0 - smoothstep( 5.0, 22.0, length( vViewPosition ) ) );'));
// the ground beyond the fine patch is lit by the relief map (reliefMap, below) rather than by the grid's own slopes, so the small craters show at any range
const reliefU = { value: null };
const relief = sh => {
  sh.uniforms.uRelief = reliefU;
  sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vWxz;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWxz = (modelMatrix * vec4(transformed, 1.0)).xz;');
  sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vWxz; uniform sampler2D uRelief;')
    .replace('#include <normal_fragment_begin>', THREE.ShaderChunk.normal_fragment_begin.replace('vec3 normal = normalize( vNormal );',      // before the grain's tangent frame is built on it
      `vec3 normal = normalize( ( viewMatrix * vec4( texture2D( uRelief, ( vWxz - vec2( ${(CX - HALF).toFixed(1)}, ${(CZ - HALF).toFixed(1)} ) ) / ${(2 * HALF).toFixed(1)} ).xyz * 2.0 - 1.0, 0.0 ) ).xyz );`));
};
soil.onBeforeCompile = sh => { sh.fragmentShader = grainFade(sh); };
soil.polygonOffset = true; soil.polygonOffsetFactor = -1; soil.polygonOffsetUnits = -1;      // the fine patch wins where it overlaps the coarse ground
const patchU = { value: new THREE.Vector4(0, 0, 0, 0) };      // the fine patch's centre and half-size: the coarse ground is not drawn there
const coarse = soil.clone();
coarse.onBeforeCompile = sh => {
  // the crater field's relief before the grain takes over its hook (the other way round, the grain replaced the line it
  // looks for and the square got the field's tone but not its relief, so the textured ring showed a line at the edge);
  // the square has its own craters, so the field's relief only fades in over its last 80 m, to match the ring at the edge
  craterField(sh, CRATER_W, '#include <normal_fragment_maps>', `smoothstep( ${(HALF - 80).toFixed(1)}, ${HALF.toFixed(1)}, max( abs( vWxz.x - ${CX.toFixed(1)} ), abs( vWxz.y - ${CZ.toFixed(1)} ) ) )`);
  sh.fragmentShader = grainFade(sh); relief(sh);
  sh.uniforms.uPatch = patchU;
  sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform vec4 uPatch;').replace('void main() {', 'void main() {\n  if (abs(vWxz.x - uPatch.x) < uPatch.z && abs(vWxz.y - uPatch.y) < uPatch.z) discard;');
};

/* Most craters are 1 to 3 m across, too small for the 1.6 m grid: past the fine patch (which now draws them at full
   shape) the plain went smooth until the big craters showed again. So every crater, and the craterlets and lumps of
   the fine patch, is drawn into a relief map of the whole square at about half a meter, which the ground beyond the
   patch is lit by. Its mipmaps average the small craters out smoothly with distance, where the grid dropped them. */
function reliefMap() {
  const TN = DETAIL.grid > 1.3 ? 1024 : 2048, TP = 2 * HALF / TN, X0 = CX - HALF, Z0 = CZ - HALF, F = new Float32Array(TN * TN);
  const edge = (x, z) => ss(0, 40, HALF - Math.max(Math.abs(x - CX), Math.abs(z - CZ)));
  for (let j = 0; j < TN; j++) for (let i = 0; i < TN; i++) {
    const x = X0 + (i + 0.5) * TP, z = Z0 + (j + 0.5) * TP, u = Math.min(N - 1.001, (i + 0.5) * TP / CELL), v = Math.min(N - 1.001, (j + 0.5) * TP / CELL), a = Math.floor(u), b = Math.floor(v), fu = u - a, fv = v - b, o = b * N + a;
    F[j * TN + i] = HB[o] + (HB[o + 1] - HB[o]) * fu + (HB[o + N] - HB[o]) * fv + (HB[o] - HB[o + 1] - HB[o + N] + HB[o + N + 1]) * fu * fv + edge(x, z) * (vnoise(x / 1.7, z / 1.7) - .5) * 0.12;
  }
  const stamp = (cx, cz, reach, prof) => {
    const i0 = Math.max(0, Math.floor((cx - reach - X0) / TP)), i1 = Math.min(TN - 1, Math.ceil((cx + reach - X0) / TP)), j0 = Math.max(0, Math.floor((cz - reach - Z0) / TP)), j1 = Math.min(TN - 1, Math.ceil((cz + reach - Z0) / TP));
    for (let j = j0; j <= j1; j++) { const z = Z0 + (j + 0.5) * TP; for (let i = i0; i <= i1; i++) { const x = X0 + (i + 0.5) * TP, d = Math.hypot(x - cx, z - cz); if (d < reach) F[j * TN + i] += edge(x, z) * prof(d); } }
  };
  for (const c of craters) stamp(c.x, c.z, c.R * 2.2, r => { const d = r / c.R; return d < 1 ? c.rim + (-c.depth - c.rim) * (1 - d * d) * (1 - d * d * 0.35) : c.rim * Math.exp(-(((d - 1) / 0.42) ** 2)); });
  for (let ci = Math.floor(X0 / MC); ci <= Math.floor((X0 + 2 * HALF) / MC); ci++) for (let cj = Math.floor(Z0 / MC); cj <= Math.floor((Z0 + 2 * HALF) / MC); cj++) {      // the craterlets, as microRaw draws them
    if (hash2(ci, cj) > 0.26) continue;
    const R = 0.25 / Math.sqrt(1 - hash2(ci + 91, cj) * (1 - (0.25 / 1.5) ** 2)); if (R < 0.4) continue;      // smaller ones are under a pixel
    const dep = R * (0.05 + 0.09 * hash2(ci + 5, cj + 3)), rim = dep * 0.25;
    stamp((ci + hash2(ci, cj + 57)) * MC, (cj + hash2(ci + 13, cj + 7)) * MC, R * 1.8, r => { const d = r / R; return d < 1 ? rim + (-dep - rim) * (1 - d * d) : rim * Math.exp(-(((d - 1) / 0.4) ** 2)); });
  }
  const D = new Uint8Array(TN * TN * 4);
  for (let j = 0; j < TN; j++) for (let i = 0; i < TN; i++) {
    let gx = F[j * TN + Math.min(TN - 1, i + 1)] - F[j * TN + Math.max(0, i - 1)], gz = F[Math.min(TN - 1, j + 1) * TN + i] - F[Math.max(0, j - 1) * TN + i];
    const x = X0 + (i + 0.5) * TP, z = Z0 + (j + 0.5) * TP, e = edge(x, z);
    if (e < 1) { const k = TP / 10;      // near the edge, the terrain model's smooth slope, as the ring beyond is lit (vertex normals), not its flat triangles
      gx = gx * e + (1 - e) * (demGame(x + 10, z) - demGame(x - 10, z)) * k; gz = gz * e + (1 - e) * (demGame(x, z + 10) - demGame(x, z - 10)) * k; }
    const l = Math.hypot(gx, 2 * TP, gz), o = (j * TN + i) * 4;
    D[o] = 128 - gx / l * 127; D[o + 1] = 128 + 2 * TP / l * 127; D[o + 2] = 128 - gz / l * 127; D[o + 3] = 255;      // the world-space normal: x east, y up, z south
  }
  const t = new THREE.DataTexture(D, TN, TN); t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy(); t.needsUpdate = true;
  reliefU.value = t;
}
const _oc = [0, 0, 0];
function groundMesh() {
  const g = new THREE.PlaneGeometry(2 * HALF, 2 * HALF, N - 1, N - 1); g.rotateX(-Math.PI / 2); g.translate(CX, 0, CZ);
  const p = g.attributes.position, uv = g.attributes.uv;
  const col = new Float32Array(p.count * 3);
  for (let k = 0; k < p.count; k++) { const i = Math.round((p.getX(k) - CX + HALF) / CELL), j = Math.round((p.getZ(k) - CZ + HALF) / CELL); p.setY(k, H[j * N + i]); uv.setXY(k, p.getX(k) / 3.2, p.getZ(k) / 3.2); const w = orangeAt(p.getX(k), p.getZ(k)); if (w > 0) col.set(tintOrange(B[j * N + i], w, _oc), k * 3); else col.fill(B[j * N + i], k * 3, k * 3 + 3); }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, coarse); m.receiveShadow = true; scene.add(m);
}
// the fine patch: 96 m square at 0.4 m, rebuilt round the rover as it drives
const PS = 0.4 * DETAIL.grid, PN = Math.round(2 * PATCH.half / PS) + 1;
const patchGeo = new THREE.PlaneGeometry(2 * PATCH.half, 2 * PATCH.half, PN - 1, PN - 1); patchGeo.rotateX(-Math.PI / 2);
patchGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(PN * PN * 3), 3));
const patchMesh = new THREE.Mesh(patchGeo, soil); patchMesh.receiveShadow = true; patchMesh.frustumCulled = false;
function bilB(x, z) { const u = Math.max(0, Math.min(N - 1.001, (x - CX + HALF) / CELL)), v = Math.max(0, Math.min(N - 1.001, (z - CZ + HALF) / CELL)), i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j;
  return B[j * N + i] * (1 - fu) * (1 - fv) + B[j * N + i + 1] * fu * (1 - fv) + B[(j + 1) * N + i] * (1 - fu) * fv + B[(j + 1) * N + i + 1] * fu * fv; }
function buildPatch(cx, cz) {
  PATCH.cx = Math.round(cx / PS) * PS; PATCH.cz = Math.round(cz / PS) * PS;
  const p = patchGeo.attributes.position, uv = patchGeo.attributes.uv, col = patchGeo.attributes.color;
  for (let j = 0; j < PN; j++) for (let i = 0; i < PN; i++) { const k = j * PN + i, x = PATCH.cx - PATCH.half + i * PS, z = PATCH.cz - PATCH.half + j * PS, f = microFade(x, z), m = f > 0 ? microRaw(x, z) * f : 0;
    p.setXYZ(k, x, groundBase(x, z) + m + (f > 0 ? craterFine(x, z) * f : 0), z); uv.setXY(k, x / 3.2, z / 3.2); const b = bilB(x, z) * (1 + Math.max(-0.08, Math.min(0.08, m * 0.6))), w = orangeAt(x, z); if (w > 0) { tintOrange(b, w, _oc); col.setXYZ(k, _oc[0], _oc[1], _oc[2]); } else col.setXYZ(k, b, b, b); }
  p.needsUpdate = uv.needsUpdate = col.needsUpdate = true; patchGeo.computeVertexNormals(); patchGeo.computeBoundingSphere();
  patchU.value.set(PATCH.cx, PATCH.cz, PATCH.half - 1.0, 0);
}
// the valley and its mountains, from NASA's terrain model: 64 km square on a 250 m grid, heights in quarter-metres,
// drawn at true size with the Moon's curvature; sunk just under the drivable square where the two overlap
// The valley and its mountains, from NASA's terrain model at the same half scale as the drivable square, in two rings:
// a fine one 5 km across at 20 m, so that where it meets the drivable square the two follow the same shape (the coarse
// ring alone, at 167 m, sagged metres below it on the slopes and left a step), and one at 50 m out to 16 km.
/* The valley beyond the drivable square has only the terrain model's shape, 20 to 50 m apart: smooth, where the square
   is pocked with craters, so the square's edge showed as a line halfway up the North Massif. These slopes are out of
   reach, so a texture does: a tiling field of craters (bowl and raised rim, many small and few large, wrapping at the
   edges), its slopes in rg and a shading tone in alpha, laid on at two scales by world position. It is fainter on the
   steep slopes: on the massifs, soil creeping downhill wears craters away, and the Apollo photographs show them smooth. */
function craterTile() {
  const S = 512, h = new Float32Array(S * S), r = rng(8017);
  for (let k = 0; k < 1500; k++) {
    const R0 = 2 / Math.sqrt(1 - r() * (1 - (2 / 46) ** 2)), cx = r() * S, cy = r() * S, dep = R0 * (0.12 + 0.18 * r()), rim = dep * 0.3, e = Math.ceil(R0 * 2);
    for (let dy = -e; dy <= e; dy++) for (let dx = -e; dx <= e; dx++) { const d = Math.hypot(dx, dy) / R0; if (d > 2) continue;
      const o = (((Math.round(cy) + dy) % S + S) % S) * S + ((Math.round(cx) + dx) % S + S) % S;
      h[o] += d < 1 ? rim - (dep + rim) * (1 - d * d) : rim * Math.exp(-(((d - 1) / 0.45) ** 2)); } }
  let mean = 0; for (const v of h) mean += v; mean /= h.length;      // the tone is centered, so the texture shades the ground without darkening it overall
  const c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), im = x.createImageData(S, S);
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) { const gx = (h[j * S + (i + 1) % S] - h[j * S + (i + S - 1) % S]) / 2, gz = (h[((j + 1) % S) * S + i] - h[((j + S - 1) % S) * S + i]) / 2, o = (j * S + i) * 4;
    im.data[o] = 128 + Math.max(-127, Math.min(127, -gx * 160)); im.data[o + 1] = 128 + Math.max(-127, Math.min(127, -gz * 160)); im.data[o + 2] = 128; im.data[o + 3] = 128 + Math.max(-110, Math.min(110, (h[j * S + i] - mean) * 30)); }
  x.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; t.colorSpace = THREE.NoColorSpace; t.premultiplyAlpha = false; return t;
}
const CRATER_TILE = { value: null };
// how much of it: by distance from the eye alone, the same on both sides of the drivable square's edge, so the edge
// leaves no line (fading in by position, over its last 60 m, still showed one from afar); none near the rover
const CRATER_W = 'smoothstep( 70.0, 260.0, length( vViewPosition ) )';
// adds the crater field to a ground material's shader; w is a GLSL expression for how much of it to show (vWxz is the world xz)
const craterField = (sh, w, after, nw = '1.0') => {      // nw: how much of its relief, on top of w
  sh.uniforms.uCrT = CRATER_TILE;
  sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vCN;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvCN = normalize(mat3(modelMatrix) * objectNormal);');
  sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform sampler2D uCrT; varying vec3 vCN;')
    .replace('#include <color_fragment>', `#include <color_fragment>
      float crW = ( ${w} ) * ( 0.4 + 0.6 * smoothstep( 0.8, 0.96, normalize( vCN ).y ) ); vec4 crA = texture2D( uCrT, vWxz / 120.0 ), crB = texture2D( uCrT, vWxz / 620.0 + 0.37 );
      diffuseColor.rgb *= 1.0 + crW * ( ( crA.a - 0.5 ) * 0.22 + ( crB.a - 0.5 ) * 0.22 );`)
    .replace(after, `${after}
      { vec2 t = ( crA.rg * 2.0 - 1.0 ) * 0.45 + ( crB.rg * 2.0 - 1.0 ) * 0.38; vec3 wn = normalize( vCN ), dw = vec3( t.x, 0.0, t.y ) * crW * ( ${nw} ); dw -= wn * dot( wn, dw );
        normal = normalize( normal + ( viewMatrix * vec4( dw, 0.0 ) ).xyz ); }`);
};
function ringMesh(half, seg, hole) {
  const g = new THREE.PlaneGeometry(2 * half, 2 * half, seg, seg); g.rotateX(-Math.PI / 2); g.translate(CX, 0, CZ);
  const p = g.attributes.position;
  const uv = g.attributes.uv, col = new Float32Array(p.count * 3);
  for (let k = 0; k < p.count; k++) { const x = p.getX(k), z = p.getZ(k); p.setY(k, demGame(x, z) - 0.15); uv.setXY(k, x / 3.2, z / 3.2); col.fill(brightness(x, z), k * 3, k * 3 + 3); }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.computeVertexNormals();
  const fm = new THREE.MeshStandardMaterial({ color: soil.color, roughness: 1, map: soil.map, vertexColors: true });      // the same soil as the drivable square, so its edge does not show
  fm.onBeforeCompile = sh => {      // not drawn where the next ring in is (sunk under it instead, it showed through every dip)
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vWxz;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWxz = (modelMatrix * vec4(transformed, 1.0)).xz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vWxz;').replace('void main() {', `void main() {\n  if (max(abs(vWxz.x - ${CX.toFixed(1)}), abs(vWxz.y - ${CZ.toFixed(1)})) < ${(hole - 1).toFixed(1)}) discard;`);
    craterField(sh, CRATER_W, '#include <normal_fragment_begin>');
  };
  // three.js reuses a compiled shader whenever onBeforeCompile's source text matches, and both rings share this one:
  // without its own key the outer ring took the inner one's hole (470 m, not 2.5 km) and drew over it, its coarser
  // 50 m triangles fighting the 20 m ones in patches all the way up the mountains
  fm.customProgramCacheKey = () => 'ring' + hole;
  const m = new THREE.Mesh(g, fm); m.receiveShadow = true; scene.add(m);
}
function farMesh() { ringMesh(2500, 250, HALF); ringMesh(8000, 320, 2500); }
CRATER_TILE.value = craterTile();
/* ── Tracy's Rock: the split boulder at stop 6 of the third drive, which Gene Cernan named for his daughter. It rolled
   and bounced about a kilometer down the North Massif, leaving a trail still visible from orbit, and broke into five
   pieces where it stopped. Put back together it would be about 18 × 10 × 6 m (LROC); the largest piece is some 10 m
   across. Drawn at its true size (like the craters, it is not shrunk with the map), resting on the hillside beside
   where the rover parked. Each piece is the same rough block, cut flat along the cracks between them and pushed a little apart. ── */
const BOULDER = { x: 0, z: 0, cyl: [] };
// the crater the route crosses about 80 m before stop 8, about 15 m across (one of the generated craters, picked by place)
const RAMP_CRATER = craters.reduce((b, c) => Math.hypot(c.x - 677.6, c.z + 699.9) < Math.hypot(b.x - 677.6, b.z + 699.9) ? c : b);
// Tilted slabs of rock, one end bedded in the soil and the other raised, their long faces ramps you can drive: the fifth
// piece of Tracy's Rock, lying low beside the others, and a slab on the near rim of a crater the route crosses before
// stop 8, a jump straight along the route. Each surface is ground for the wheels (slabAt, in ground()), and the same
// function shapes its mesh. c, s: the direction from the bedded end to the lip.
const SLABS = [];
function slabRel(S, u, v) {      // height above the hillside at u along (0 at the bedded end, L at the raised lip) and v across
  const { L, W, H } = S;
  if (u < -0.6 || u > L + 1.2 || Math.abs(v) > W / 2 + 1.4) return -9;
  const hw = W / 2 * (0.86 + 0.28 * fbm(u * 0.45 + 7, 3.3, 3)), le = L + 0.8 * (fbm(v * 0.6 + 2, 8.1, 3) - 0.5);      // a ragged outline, not a box
  const top = H * Math.max(0, u) / L - 0.12 + (0.1 * (fbm(u * 0.9 + 4, v * 0.9, 3) - 0.5) + 0.035 * (fbm(u * 4 + 1, v * 4 - 3, 2) - 0.5)) * Math.min(1, Math.max(0, u));
  const side = ss(hw + 0.6, hw - 0.9, Math.abs(v)), lip = ss(le + 0.5, le - 0.45, u);      // sides that fall away in a broken curve, a snapped-off lip
  return top * side * lip - 1.2 * (1 - side * lip);
}
function slabAt(x, z) {
  let best = -1e9;
  for (const S of SLABS) {
    const dx = x - S.x, dz = z - S.z; if (Math.abs(dx) > S.L || Math.abs(dz) > S.L) continue;
    const u = dx * S.c + dz * S.s + S.L / 2, v = -dx * S.s + dz * S.c, r = slabRel(S, u, v);
    if (r > -8) best = Math.max(best, groundBase(x, z) + r);
  }
  return best;
}
function buildSlab(S, mat, tone) {      // the slab's mesh, from the same surface the wheels drive
  SLABS.push(S);
  const NU = 70, NV = 36, U0 = -0.5, U1 = S.L + 1.1, V0 = -S.W / 2 - 1.3, pos = [], idx = [];
  for (let j = 0; j <= NV; j++) for (let i = 0; i <= NU; i++) {
    const u = U0 + (U1 - U0) * i / NU, v = V0 + (-2 * V0) * j / NV, x = S.x + (u - S.L / 2) * S.c - v * S.s, z = S.z + (u - S.L / 2) * S.s + v * S.c;
    const r = slabRel(S, u, v); pos.push(x, groundBase(x, z) + (r < -8 ? -1.2 : r), z);
  }
  for (let j = 0; j < NV; j++) for (let i = 0; i < NU; i++) { const k = j * (NU + 1) + i; idx.push(k, k + NU + 1, k + 1, k + 1, k + NU + 1, k + NU + 2); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); sg.setIndex(idx); sg.computeVertexNormals();
  if (sg.attributes.normal.getY(0) < 0) { idx.reverse(); sg.setIndex(idx); sg.computeVertexNormals(); }
  rockColors(sg, tone);
  const sm = new THREE.Mesh(sg, mat); sm.castShadow = sm.receiveShadow = true; scene.add(sm);
}
/* Rock surface, for Tracy's Rock and its ramp: a tiling height field of lumps, cracks and pits (alpha) and its normals
   (rgb), laid on from three sides by world position (triplanar), so it needs no texture coordinates and never stretches. */
function rockSurface() {
  const S = 256, h = new Float32Array(S * S), r = rng(76535);
  const pn = (x, y, P) => { const i = Math.floor(x), j = Math.floor(y), fx = x - i, fy = y - j, u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy);      // value noise that wraps every P cells
    const H = (a, b) => hash2(((a % P) + P) % P, ((b % P) + P) % P); return H(i, j) * (1 - u) * (1 - v) + H(i + 1, j) * u * (1 - v) + H(i, j + 1) * (1 - u) * v + H(i + 1, j + 1) * u * v; };
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) { let v = 0, a = 0.5; for (const P of [4, 8, 16, 32, 64]) { v += a * pn(i / S * P, j / S * P, P); a *= 0.55; } h[j * S + i] = v * 2.2; }
  for (let k = 0; k < 420; k++) { const cx = r() * S, cy = r() * S, R0 = 1.2 + Math.pow(r(), 3) * 7, e = Math.ceil(R0 * 1.5);      // pits: small impacts and vesicles
    for (let dy = -e; dy <= e; dy++) for (let dx = -e; dx <= e; dx++) { const d = Math.hypot(dx, dy) / R0; if (d > 1.5) continue; const o = (((Math.round(cy) + dy) % S + S) % S) * S + ((Math.round(cx) + dx) % S + S) % S; h[o] -= d < 1 ? 0.22 * (1 - d * d) : -0.03 * (1.5 - d); } }
  const c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), im = x.createImageData(S, S);
  let lo = 1e9, hi = -1e9; for (const v of h) { lo = Math.min(lo, v); hi = Math.max(hi, v); }
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) { const gx = h[j * S + (i + 1) % S] - h[j * S + (i + S - 1) % S], gy = h[((j + 1) % S) * S + i] - h[((j + S - 1) % S) * S + i], k = 0.09, l = Math.hypot(gx, gy, k), o = (j * S + i) * 4;
    im.data[o] = 128 - gx / l * 127; im.data[o + 1] = 128 - gy / l * 127; im.data[o + 2] = 128 + k / l * 127; im.data[o + 3] = 255 * (h[j * S + i] - lo) / (hi - lo); }
  x.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; t.colorSpace = THREE.NoColorSpace; t.premultiplyAlpha = false; return t;
}
function rockMaterial() {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 1, metalness: 0 }), tex = rockSurface();
  m.onBeforeCompile = sh => {
    sh.uniforms.rockN = { value: tex };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vRP; varying vec3 vRN;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvRP = (modelMatrix * vec4(transformed, 1.0)).xyz; vRN = normalize(mat3(modelMatrix) * objectNormal);');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      uniform sampler2D rockN; varying vec3 vRP; varying vec3 vRN;
      vec4 tri( vec3 p, vec3 w ) { return texture2D( rockN, p.zy ) * w.x + texture2D( rockN, p.xz ) * w.y + texture2D( rockN, p.xy ) * w.z; }
      vec3 triN( vec3 p, vec3 n, vec3 w ) {      // UDN blend of the three projections' normals onto the surface normal
        vec2 a = texture2D( rockN, p.zy ).xy * 2.0 - 1.0, b = texture2D( rockN, p.xz ).xy * 2.0 - 1.0, c = texture2D( rockN, p.xy ).xy * 2.0 - 1.0;
        return vec3( 0.0, a.y, a.x ) * w.x + vec3( b.x, 0.0, b.y ) * w.y + vec3( c.x, c.y, 0.0 ) * w.z; }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
      vec3 rw = pow( abs( normalize( vRN ) ), vec3( 4.0 ) ); rw /= rw.x + rw.y + rw.z;
      float pits = tri( vRP / 1.7, rw ).a * 0.6 + tri( vRP / 0.45, rw ).a * 0.4;
      diffuseColor.rgb *= 0.72 + 0.5 * pits;`)
      .replace('#include <normal_fragment_begin>', `#include <normal_fragment_begin>
      { vec3 wn = normalize( vRN ); vec3 w = pow( abs( wn ), vec3( 4.0 ) ); w /= w.x + w.y + w.z;
        vec3 d = triN( vRP / 1.7, wn, w ) * 0.9 + triN( vRP / 0.45, wn, w ) * 0.55 * ( 1.0 - smoothstep( 8.0, 30.0, length( vViewPosition ) ) );
        normal = normalize( ( viewMatrix * vec4( normalize( wn + d ), 0.0 ) ).xyz ); }`);
  };
  return m;
}
/* Rock color: a mid grey that varies over the surface, dusted lighter where it faces up, darker in hollows (the photographs). */
function rockColors(geo, seed) {
  const p = geo.attributes.position, n = geo.attributes.normal, c = new Float32Array(p.count * 3), W = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    let v = 0.5 + 0.13 * (fbm(x * 0.35 + seed, z * 0.35 + y * 0.3, 3) - 0.5) + 0.08 * (fbm(x * 2.1 - y, z * 2.1 + seed, 2) - 0.5);
    W.set(n.getX(i), n.getY(i), n.getZ(i)); v += 0.07 * ss(0.45, 0.95, W.y) - 0.05 * ss(-0.1, -0.7, W.y);
    v = Math.pow(Math.max(0.05, v), 2.2); c[i * 3] = v; c[i * 3 + 1] = v * 0.985; c[i * 3 + 2] = v * 0.96;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(c, 3));
}
function splitBoulder() {
  const st = CPS[0], A = [9, 4.4, 5], yaw = 0.35, SINK = 0.7;
  BOULDER.x = st.x - 21; BOULDER.z = st.z - 3;      // along the slope from the stop, not up it: the hillside here is steep
  const g0 = groundBase(BOULDER.x, BOULDER.z), e = 6;
  const up = new THREE.Vector3(groundBase(BOULDER.x - e, BOULDER.z) - groundBase(BOULDER.x + e, BOULDER.z), 2 * e, groundBase(BOULDER.x, BOULDER.z - e) - groundBase(BOULDER.x, BOULDER.z + e)).normalize();
  // the cracks, as planes n·p = d in the boulder's frame (x along its length)
  const cuts = [[1, 0, 0.12, -1.0], [0.08, 0.1, 1, 1.0], [1, 0.05, -0.25, 4.4], [0.25, 0.15, 1, -1.4]].map(([x, y, z, d]) => { const n = new THREE.Vector3(x, y, z), l = n.length(); return { n: n.divideScalar(l), d: d / l }; });
  const frags = [      // which side of which cracks each piece keeps, and how far it moved off (the fifth is the ramp)
    [[[0, -1], [1, 1]], [-1.1, 0, 0.7]], [[[0, -1], [1, -1]], [-0.8, -0.1, -0.6]],
    [[[0, 1], [2, -1], [3, 1]], [0.2, 0, 0.55]], [[[0, 1], [2, -1], [3, -1]], [0.15, -0.05, -0.65]],
  ];
  const grp = BOULDER.grp = new THREE.Group(); grp.position.set(BOULDER.x, g0 - SINK, BOULDER.z);      // bedded into the slope, its base along the hillside
  grp.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), up).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw)); scene.add(grp);
  const mat = rockMaterial();
  const P = new THREE.Vector3(), cyl = [];
  const base = new THREE.IcosahedronGeometry(1, 5); base.deleteAttribute('normal'); base.deleteAttribute('uv');
  const sphere = mergeVertices(base);      // one vertex per point, so the surface shades smoothly and each point is shaped once
  for (const [keep, push] of frags) {
    const geo = sphere.clone(), p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      P.fromBufferAttribute(p, i).normalize();
      const n = fbm(P.x * 1.6 + P.y * 2.3 + 11, P.z * 1.6 - P.y * 1.3, 3), f = fbm(P.x * 7 + 3, P.z * 7 + P.y * 6, 3), g = fbm(P.x * 19 - 5, P.z * 19 + P.y * 17, 2), h = fbm(P.x * 48 + 9, P.z * 48 - P.y * 41, 2);
      const crag = 0.84 + 0.3 * n + 0.12 * f + 0.06 * g + 0.025 * h;      // big lumps, a rough broken surface, then a fine pitted one
      const peak = 1 + 0.35 * Math.max(0, P.y) * Math.exp(-((P.x - 0.15) ** 2 + (P.z + 0.1) ** 2) * 2.5);      // higher toward one end of the ridge, as in the photographs
      const sq = v => Math.sign(v) * Math.pow(Math.abs(v), 0.55);      // a blocky, squared-off shape rather than an egg
      P.set(sq(P.x) * A[0], sq(P.y) * A[1] * peak, sq(P.z) * A[2]).multiplyScalar(crag); if (P.y < -1) P.y = -1 + (P.y + 1) * 0.3;      // a flat base, bedded in the soil
      for (const [ci, side] of keep) { const c = cuts[ci], dist = side * (c.n.dot(P) - c.d); if (dist < 0) P.addScaledVector(c.n, -dist * side); }      // cut flat along the crack
      p.setXYZ(i, P.x + push[0], P.y + push[1], P.z + push[2]);
    }
    geo.computeVertexNormals(); rockColors(geo, cyl.length * 3.1);
    const m = new THREE.Mesh(geo, mat); m.castShadow = m.receiveShadow = true; grp.add(m);
    // its footprint, as a row of upright cylinders for the rover to run into
    geo.computeBoundingBox(); const b = geo.boundingBox, lx = b.max.x - b.min.x, lz = b.max.z - b.min.z, along = lx > lz, short = Math.min(lx, lz), n = Math.max(1, Math.round(Math.max(lx, lz) / short));
    for (let k = 0; k < n; k++) {
      const t = (k + 0.5) / n, cx = along ? b.min.x + lx * t : (b.min.x + b.max.x) / 2, cz = along ? (b.min.z + b.max.z) / 2 : b.min.z + lz * t;
      const w = new THREE.Vector3(cx, 1, cz).applyQuaternion(grp.quaternion);
      cyl.push({ x: BOULDER.x + w.x, z: BOULDER.z + w.z, r: short / 2 * 0.85, top: g0 - SINK + b.max.y });
    }
  }
  BOULDER.cyl = cyl;
  // the fifth piece, below the boulder on its downhill side, lying low
  const a = Math.PI / 2 - 0.15;
  buildSlab({ x: BOULDER.x + 9, z: BOULDER.z + 13, c: Math.cos(a), s: Math.sin(a), L: 8, W: 4.2, H: 0.7 }, mat, 21.7);
  // the ramp: on the near rim of the crater the route crosses 80 m before stop 8 (15 m across), pointing across it along
  // the route, a gentle 8° so it reads as a slab of rock, not a launcher; its lip a meter short of the rim
  const C = RAMP_CRATER, ra = Math.atan2(0.358, 0.934), dc = Math.cos(ra), ds = Math.sin(ra), back = C.R + 1 + 5;
  buildSlab({ x: C.x - dc * back, z: C.z - ds * back, c: dc, s: ds, L: 10, W: 4.4, H: 1.5 }, mat, 13.1);
}
function rockMeshes() {
  const geo = new THREE.IcosahedronGeometry(1, 1), p = geo.attributes.position, r = rng(11);
  for (let k = 0; k < p.count; k++) { const s = 0.75 + r() * 0.4; p.setXYZ(k, p.getX(k) * s, p.getY(k) * s * 0.7, p.getZ(k) * s); }
  geo.computeVertexNormals();
  const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x77736d, roughness: .95, flatShading: true }), rocks.length);
  const o = new THREE.Object3D();
  rocks.forEach((k, n) => { o.position.set(k.x, groundBase(k.x, k.z) + microRaw(k.x, k.z) - k.s * 0.62, k.z); o.rotation.set(0, k.yaw, 0); o.scale.setScalar(k.s); o.updateMatrix(); im.setMatrixAt(n, o.matrix); });
  // Each rock is mostly buried, only its top showing, and the ground casts no shadow of its own: so on a slope facing
  // away from the Sun (a crater wall) the buried part used to throw a shadow up through the ground, a dark blot with no
  // rock to explain it. Only the part above the ground casts one now.
  const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  depth.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vLy;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvLy = position.y;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vLy;').replace('void main() {', 'void main() {\n  if ( vLy < 0.56 ) discard;      // below the ground line (the rock sits 0.62 of its size down)');
  };
  im.customDepthMaterial = depth;
  im.castShadow = im.receiveShadow = true; scene.add(im);
}

/* ── the rover: one rigid body on four sprung wheels ─────────────
   Loaded with two astronauts and their gear the rover weighed about 700 kg; the body is a box of that mass,
   3.1 m long and 2.06 m wide. On the Moon each wheel carries a sixth of what it would on Earth, so it grips
   a sixth as hard: the rover skids, bounces, and leaves the ground easily. */
const MASS = 700, I = new THREE.Vector3(MASS / 12 * (1.1 ** 2 + 2.06 ** 2), MASS / 12 * (3.1 ** 2 + 2.06 ** 2), MASS / 12 * (3.1 ** 2 + 1.1 ** 2));
// Speed, chosen on the briefing card: real (1), double (2), or triple (3, unlocked by finishing the time trial once),
// the faster ones with stronger motors and grippier tires to get there
const unlocked3 = () => true;      // open to everyone for now (it was unlocked by finishing a lap: !!(REC.lap || REC.lap2 || REC.lap3))
let SPD = (() => { try { return +localStorage.getItem('lrv-spd') || 2; } catch (e) { return 2; } })();      // double unless chosen otherwise (a new key: the old one held everyone's first default, real)
const WHEEL_R = 0.41, REST = 0.36, K = 4200, C_DAMP = 620, CRR = 0.05, VREV = 1.6;
let MU = 0.62, VMAX = 5.0;      // 5 m/s = 18 km/h, Gene Cernan's top speed on Apollo 17 (the design speed on the level was about 13 km/h)
function setSpeed(n) { SPD = n === 3 && unlocked3() ? 3 : n === 2 || n === 3 ? 2 : 1; MU = [0.62, 0.85, 1.0][SPD - 1]; VMAX = [5.0, 11.2, 15.0][SPD - 1]; try { localStorage.setItem('lrv-spd', String(SPD)); } catch (e) { /* not remembered */ } }
const WHEELS = [[1.15, 0.915, 1], [1.15, -0.915, 1], [-1.15, 0.915, -1], [-1.15, -0.915, -1]].map(([x, z, f]) => ({ at: new THREE.Vector3(x, -0.08, z), steer: f, comp: 0, contact: false, spin: 0, off: 0, hit: 0 }));      // off: time out of contact; hit: how hard it came down, for the dust
const LM = { on: false, x: -12, z: 4, y: 0 };      // where the lunar module stands; measured from its model: footpads 4.1 m out along each axis, the descent stage 2.2 m round
const HULL = []; for (const x of [-1.5, 1.5]) for (const z of [-1.0, 1.0]) for (const y of [-0.3, 0.75]) HULL.push(new THREE.Vector3(x, y, z));
const car = { p: new THREE.Vector3(0, 0, 0), v: new THREE.Vector3(), q: new THREE.Quaternion(), w: new THREE.Vector3(), steer: 0 };
function place(x, z, yaw) {      // set down on the slope, not level: level on a hillside buried the uphill wheels, and the suspension threw it into the air
  const e = 1.5, n = new THREE.Vector3(groundBase(x - e, z) - groundBase(x + e, z), 2 * e, groundBase(x, z - e) - groundBase(x, z + e)).normalize();
  car.q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw));
  car.p.set(x, ground(x, z), z).addScaledVector(n, 0.8); car.v.set(0, 0, 0); car.w.set(0, 0, 0); car.steer = 0; parked = true; WHEELS.forEach(w => { w.hx = w.hy = 0; });
}
let parked = true;      // set down, the brakes hold it, even on a slope, until the driver first touches the controls

const _f = new THREE.Vector3(), _t = new THREE.Vector3(), _r = new THREE.Vector3(), _a = new THREE.Vector3(), _up = new THREE.Vector3(), _fw = new THREE.Vector3(), _rt = new THREE.Vector3(),
      _vc = new THREE.Vector3(), _wf = new THREE.Vector3(), _ws = new THREE.Vector3(), _tmp = new THREE.Vector3(), _qi = new THREE.Quaternion(), _wb = new THREE.Vector3(), _L = new THREE.Vector3();
const AIR = { t: 0, start: null, peak: 0, last: null, best: 0, grounded: true, spin: 0 };
const REC = Object.assign({ t: 0, d: 0, h: 0, v: 0, v2: 0, v3: 0, lap: 0, lap2: 0, lap3: 0 }, (() => { try { return JSON.parse(localStorage.getItem('lrv-records')) || {}; } catch (e) { return {}; } })());
setSpeed(SPD);      // v, v2: top speed in km/h, at real and at double speed
let throttle = 0, steerIn = 0;
const STEER_RATE = 0.42;      // rad/s at the wheel, about 24°/s: straight ahead to full lock in about 1 s (an estimate, not a documented figure)
function step(h) {
  _f.set(0, -G * MASS, 0); _t.set(0, 0, 0);
  _up.set(0, 1, 0).applyQuaternion(car.q); _fw.set(1, 0, 0).applyQuaternion(car.q); _rt.set(0, 0, 1).applyQuaternion(car.q);
  const speed = car.v.dot(_fw);
  // Four-wheel steering, limited at speed to about the sharpest turn the tires can hold: each grips a sixth as hard as on
  // Earth, so the most sideways push is about MU·g ≈ 1 m/s². Turning tighter only slides, and the old limit (which fell off
  // with forward speed, itself shrinking in a slide) left the wheels at full lock and fed the slide into a spin.
  const vh = Math.hypot(car.v.x, car.v.z), dmax = Math.min(0.42, Math.atan(1.15 * 1.3 * MU * G / Math.max(0.01, vh * vh)));
  car.steer += Math.max(-STEER_RATE * h, Math.min(STEER_RATE * h, steerIn * dmax - car.steer));      // the steering motors turn the wheels at a steady rate, on the ground or off it
  let touching = 0;
  for (const wl of WHEELS) {
    const a = _a.copy(wl.at).applyQuaternion(car.q).add(car.p);      // the top of the suspension, in the world
    let t = (a.y - ground(a.x, a.z)) / Math.max(0.3, _up.y);           // distance down the strut to the ground
    const x = REST + WHEEL_R - t;
    if (x <= 0) { wl.contact = false; wl.comp = 0; wl.off += h; continue; }
    if (wl.off > 0.12) wl.hit = Math.max(wl.hit, -car.v.y + 0.5);      // touching down after a hop
    wl.off = 0; wl.contact = true; touching++;
    const xd = (x - wl.comp) / h; wl.comp = x;
    let Fn = K * Math.min(x, REST) + C_DAMP * xd + (x > REST ? 60000 * (x - REST) : 0);      // spring, damper, and the bump stop
    if (Fn <= 0) continue;
    const n = normalAt(a.x, a.z), cp = _r.copy(a).addScaledVector(_up, -(t - WHEEL_R * 0.1)), r = cp.sub(car.p);
    _vc.copy(car.w).cross(r).add(car.v);                                // velocity of the tire where it meets the ground
    const st = car.steer * wl.steer;
    _wf.copy(_fw).multiplyScalar(Math.cos(st)).addScaledVector(_rt, Math.sin(st)); _wf.addScaledVector(n, -_wf.dot(n)).normalize();
    _ws.copy(n).cross(_wf).normalize();
    const vf = _vc.dot(_wf), vs = _vc.dot(_ws), lim = MU * Fn;
    let Fl;
    if (throttle > 0.02 && vf > -0.3) Fl = throttle * [520, 900, 1300][SPD - 1] * Math.max(0, 1 - vf / VMAX);      // each wheel's motor, governed to top speed
    else if (throttle < -0.02 && vf < 0.3) Fl = throttle * 300 * Math.max(0, 1 + vf / VREV);
    else if (Math.abs(throttle) > 0.02) Fl = -Math.sign(vf) * lim;                            // driving against the motion is braking
    else Fl = 0;
    Fl -= Math.sign(vf) * Math.min(Math.abs(vf) * 400, CRR * Fn);                             // soft soil drags at the wheels
    let Fs = -vs * 1600;
    if (parked) {      // parked: the brakes and the tread's grip hold the tire where it stands, as static friction, until the slope is too much for it
      wl.hx += vf * h; wl.hy += vs * h; Fl = -(vf * 12000 + wl.hx * 30000); Fs = -(vs * 12000 + wl.hy * 30000);
      const g = Math.hypot(Fl, Fs); if (g > lim) { wl.hx *= lim / g; wl.hy *= lim / g; }      // slipping: the hold gives way with it
    }
    const tot = Math.hypot(Fl, Fs); if (tot > lim) { Fl *= lim / tot; Fs *= lim / tot; }        // the friction circle: grip is shared
    _tmp.copy(_up).multiplyScalar(Fn).addScaledVector(_wf, Fl).addScaledVector(_ws, Fs);
    _f.add(_tmp); _t.add(_L.copy(r).cross(_tmp));
    wl.spin += vf / WHEEL_R * h;
  }
  for (const c of HULL) {      // the chassis itself meeting the ground, if it rolls or bottoms out
    const a = _a.copy(c).applyQuaternion(car.q).add(car.p), g = ground(a.x, a.z), pen = g - a.y;
    if (pen <= 0) continue;
    touching++;
    const r = _r.copy(a).sub(car.p); _vc.copy(car.w).cross(r).add(car.v); const n = normalAt(a.x, a.z), vn = _vc.dot(n);
    if (c.y > 0) { CRASH.roof = Math.max(CRASH.roof, -vn); CRASH.topDown = true; }      // the top of the rover hitting the ground: how hard
    const Fn = Math.max(0, 90000 * pen - 3000 * vn);
    _tmp.copy(_vc).addScaledVector(n, -vn); const vt = _tmp.length(); if (vt > 1e-4) _tmp.multiplyScalar(-Math.min(0.55 * Fn, vt * 3000) / vt);
    _tmp.addScaledVector(n, Fn); _f.add(_tmp); _t.add(_L.copy(r).cross(_tmp));
  }
  {
    _qi.copy(car.q).invert();
    const hit = (sx, sy, sz, R, flat) => {      // a sphere (or, flat, a vertical cylinder at this height) against the chassis box
      const b = _a.set(sx, sy, sz).sub(car.p).applyQuaternion(_qi);
      const q = _r.set(Math.max(-1.5, Math.min(1.5, b.x)), Math.max(-0.3, Math.min(0.75, b.y)), Math.max(-1.0, Math.min(1.0, b.z))).applyQuaternion(car.q).add(car.p);
      const n = _wb.copy(q).sub(_tmp.set(sx, flat ? q.y : sy, sz)); let d = n.length();
      if (d >= R) return;
      if (d < 1e-4) { n.copy(car.p).sub(_tmp.set(sx, car.p.y, sz)); n.y = 0; d = 0; } n.normalize();
      const r = q.sub(car.p); _vc.copy(car.w).cross(r).add(car.v); const vn = _vc.dot(n);
      const Fn = Math.max(0, 90000 * (R - d) - 3000 * vn);
      _tmp.copy(_vc).addScaledVector(n, -vn); const vt = _tmp.length(); if (vt > 1e-4) _tmp.multiplyScalar(-Math.min(0.4 * Fn, vt * 3000) / vt);
      _tmp.addScaledVector(n, Fn); _f.add(_tmp); _t.add(_L.copy(r).cross(_tmp)); touching++;
    };
    if (LM.on && Math.hypot(car.p.x - LM.x, car.p.z - LM.z) < 8) {      // the lunar module: its descent stage, footpads and legs are solid
      hit(LM.x, Math.max(LM.y + 0.3, Math.min(LM.y + 7, car.p.y)), LM.z, 2.2, true);
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        hit(LM.x + dx * 4.1, LM.y + 0.25, LM.z + dz * 4.1, 0.5);      // the footpad
        for (let k = 1; k <= 4; k++) { const t = k / 5, r = 4.1 - 1.9 * t; hit(LM.x + dx * r, LM.y + 0.4 + 2.2 * t, LM.z + dz * r, 0.2); }      // the leg, up to the stage
      }
    }
    if (BOULDER.cyl.length && Math.hypot(car.p.x - BOULDER.x, car.p.z - BOULDER.z) < 22)      // the split boulder at stop 6
      for (const c of BOULDER.cyl) if (car.p.y < c.top + 0.6) hit(c.x, Math.min(c.top, car.p.y), c.z, c.r, true);
  }
  car.v.addScaledVector(_f, h / MASS);
  // turning: τ = I·dω/dt + ω × (Iω), worked in the body's own axes
  _qi.copy(car.q).invert(); _wb.copy(car.w).applyQuaternion(_qi); const tb = _tmp.copy(_t).applyQuaternion(_qi);
  const Iw = _L.set(I.x * _wb.x, I.y * _wb.y, I.z * _wb.z); const gyro = _a.copy(_wb).cross(Iw);
  _wb.x += (tb.x - gyro.x) / I.x * h; _wb.y += (tb.y - gyro.y) / I.y * h; _wb.z += (tb.z - gyro.z) / I.z * h;
  car.w.copy(_wb).applyQuaternion(car.q);
  car.p.addScaledVector(car.v, h);
  const dq = new THREE.Quaternion(car.w.x * h * .5, car.w.y * h * .5, car.w.z * h * .5, 0).multiply(car.q);
  car.q.x += dq.x; car.q.y += dq.y; car.q.z += dq.z; car.q.w += dq.w; car.q.normalize();
  // keep to the mapped square
  const lim2 = HALF - 12; if (Math.abs(car.p.x - CX) > lim2 || Math.abs(car.p.z - CZ) > lim2) { car.p.x = CX + Math.max(-lim2, Math.min(lim2, car.p.x - CX)); car.p.z = CZ + Math.max(-lim2, Math.min(lim2, car.p.z - CZ)); car.v.multiplyScalar(0.3); }
  // air time: off the ground with nothing touching
  if (touching === 0) {
    if (AIR.grounded && AIR.t === 0) { AIR.start = car.p.clone(); AIR.peak = 0; AIR.spin = 0; }
    AIR.t += h; AIR.spin += Math.hypot(car.w.x, car.w.z) * h; /* tumbling: roll and pitch, not the heading */ AIR.peak = Math.max(AIR.peak, car.p.y - 0.78 - ground(car.p.x, car.p.z)); AIR.grounded = false;
  } else if (!AIR.grounded) {
    AIR.grounded = true;
    if (AIR.t > 0.45) { const d = Math.hypot(car.p.x - AIR.start.x, car.p.z - AIR.start.z); AIR.last = { t: AIR.t, d, peak: Math.max(0, AIR.peak), spin: AIR.spin }; if (AIR.t > AIR.best) AIR.best = AIR.t; landed(AIR.last); }
    AIR.t = 0;
  }
  return touching;
}

/* ── the time trial: the whole third drive as a loop, out from the lander north to the split boulder at stop 6, east
   to stop 8, and home past Van Serg crater (stop 9). The stops were surveyed from orbit (Haase et al. 2019, as in the
   3D viewer), in metres east and south of the lander, drawn at the square's quarter scale; between stops the line
   follows the general route. It stays hidden while you roam; a faint ring just up the route starts the clock. ── */
const DRIVES = [
  ['#7CC7F2', [[0, 0], [129, -27], [330, -1400], [460, -2700], [805, -3003], [1294, -3036], [2200, -2950], [3012, -2599], [2500, -1900], [1735, -1228], [900, -600], [145, -39], [0, 0]]],
];
const LMP = [-12, 4];      // where the lander stands here
const COURSE = [];      // the loop's dots, flattened x, z: stray too far from them and the attempt ends
const OBJ = { x: LMP[0] + 150 / SQ, z: LMP[1] - 170 / SQ, ring: null, line: null };      // the start and finish, on the route just north of the lander
const CPS = [['stop 6 · Tracy’s Rock', 805, -3003], ['stop 8', 3012, -2599], ['stop 9 · Van Serg', 1735, -1228]].map(([n, x, z]) => ({ n, x: LMP[0] + x / SQ, z: LMP[1] + z / SQ }));      // to pass in order
function routeDots() {
  const cr = (a, b, c, d, t) => .5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);
  const pos = [], col = [], cc = new THREE.Color();
  for (const [hex, raw] of DRIVES) {
    const C = raw.map(q => [LMP[0] + q[0] / SQ, LMP[1] + q[1] / SQ]), P = i => C[Math.max(0, Math.min(C.length - 1, i))]; cc.set(hex);
    let carry = 0;
    for (let i = 0; i < C.length - 1; i++) {
      const L = Math.hypot(C[i + 1][0] - C[i][0], C[i + 1][1] - C[i][1]), n = Math.max(2, Math.ceil(L / 0.5));
      for (let k = 0; k < n; k++) { const t = k / n, x = cr(P(i - 1)[0], P(i)[0], P(i + 1)[0], P(i + 2)[0], t), z = cr(P(i - 1)[1], P(i)[1], P(i + 1)[1], P(i + 2)[1], t);
        if ((carry += L / n) < 3) continue; carry = 0;      // a dot every 3 m
        if (!inSq(x, z, 14)) continue;
        pos.push(x, groundBase(x, z) + 0.12, z); col.push(cc.r, cc.g, cc.b); COURSE.push(x, z); }
    }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  // small, faint dots (0.3 m, never under 2 pixels, so the line still reads ahead); op fades the line in and out
  const mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { map: { value: DOT }, px: { value: 1 }, vh: { value: 800 }, op: { value: 0 } },
    vertexShader: 'attribute vec3 color; varying vec3 vC; uniform float px, vh; void main() { vC = color; vec4 mv = modelViewMatrix * vec4( position, 1.0 ); gl_Position = projectionMatrix * mv; gl_PointSize = max( 2.0 * px, 0.3 * projectionMatrix[1][1] * 0.5 * vh / -mv.z ); }',
    fragmentShader: 'uniform sampler2D map; uniform float op; varying vec3 vC; void main() { float a = texture2D( map, gl_PointCoord ).a; if ( a < 0.02 ) discard; gl_FragColor = vec4( vC, a * 0.45 * op ); }' });
  const m = new THREE.Points(g, mat), _vs = new THREE.Vector2(); m.frustumCulled = false; m.renderOrder = 2; m.visible = false; scene.add(m); OBJ.line = m;
  const ring = new THREE.Mesh(new THREE.RingGeometry(3.6, 3.85, 48), new THREE.MeshBasicMaterial({ color: 0x7CC7F2, transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false }));      // faint: a gate, not a beacon
  ring.rotation.x = -Math.PI / 2; ring.position.set(OBJ.x, groundBase(OBJ.x, OBJ.z) + 0.25, OBJ.z); scene.add(ring); OBJ.ring = ring;
  m.onBeforeRender = r => { mat.uniforms.px.value = r.getPixelRatio(); mat.uniforms.vh.value = r.getDrawingBufferSize(_vs).y; };
}

/* ── dust: thrown off the wheels, it flies in clean parabolas and falls straight back. There is no air to hold it up. ── */
const DN = 1400, dpos = new Float32Array(DN * 3), dvel = new Float32Array(DN * 3), dlife = new Float32Array(DN);
const dgeo = new THREE.BufferGeometry(); dgeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
function softDot() {      // a round grain with a soft edge: bare points draw as hard squares
  const c = document.createElement('canvas'); c.width = c.height = 32; const x = c.getContext('2d'), g = x.createRadialGradient(16, 16, 0, 16, 16, 16);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.45, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 32, 32);
  return new THREE.CanvasTexture(c);
}
const DOT = softDot();
const dust = new THREE.Points(dgeo, new THREE.PointsMaterial({ color: 0x8f8a82, size: 0.04, map: DOT, transparent: true, opacity: 0.6, depthWrite: false })); dust.frustumCulled = false; scene.add(dust);
let dnext = 0;
// the blast of a landing: coarser, lighter grains (a fresh, unweathered spray of soil catches the Sun), the same airless arcs
const PN2 = 1600, ppos = new Float32Array(PN2 * 3), pvel = new Float32Array(PN2 * 3), plife = new Float32Array(PN2);
const pgeo = new THREE.BufferGeometry(); pgeo.setAttribute('position', new THREE.BufferAttribute(ppos, 3));
const puff = new THREE.Points(pgeo, new THREE.PointsMaterial({ color: 0xbdb7ad, size: 0.085, map: DOT, transparent: true, opacity: 0.55, depthWrite: false })); puff.frustumCulled = false; scene.add(puff);
let pnext = 0;
function kick(dt) {
  for (const wl of WHEELS) {
    if (!wl.contact) continue;
    const a = _a.copy(wl.at).applyQuaternion(car.q).add(car.p), sp = car.v.length(); const n = Math.min(12, Math.floor(sp * 3 * dt * 60 * (0.6 + Math.random())));
    for (let k = 0; k < n; k++) { const i = dnext; dnext = (dnext + 1) % DN;
      dpos[i * 3] = a.x + (Math.random() - .5) * .3; dpos[i * 3 + 1] = ground(a.x, a.z) + 0.05; dpos[i * 3 + 2] = a.z + (Math.random() - .5) * .3;
      const up = 0.8 + Math.random() * 1.6 * Math.min(1, sp / 3);       // flung up and back off the turning wire mesh
      dvel[i * 3] = -_fw.x * sp * (0.25 + Math.random() * .5) + (Math.random() - .5) * .6; dvel[i * 3 + 1] = up; dvel[i * 3 + 2] = -_fw.z * sp * (0.25 + Math.random() * .5) + (Math.random() - .5) * .6;
      dlife[i] = 1; }
    if (wl.hit > 0) {      // coming down from a jump, the tire blasts a ring of soil out sideways, low and fast, that falls back in the same clean arcs
      const g = ground(a.x, a.z), m = Math.min(260, Math.round(90 * wl.hit)), k0 = Math.min(3, wl.hit);
      for (let k = 0; k < m; k++) { const i = pnext, ang = Math.random() * 6.2832, out = (0.4 + Math.random() * 1.0) * k0; pnext = (pnext + 1) % PN2;
        ppos[i * 3] = a.x + Math.cos(ang) * 0.25; ppos[i * 3 + 1] = g + 0.04; ppos[i * 3 + 2] = a.z + Math.sin(ang) * 0.25;
        pvel[i * 3] = Math.cos(ang) * out + car.v.x * 0.4; pvel[i * 3 + 1] = (0.2 + Math.random() * 0.6) * k0; pvel[i * 3 + 2] = Math.sin(ang) * out + car.v.z * 0.4;
        plife[i] = 1; }
      wl.hit = 0;
    }
  }
  for (let i = 0; i < DN; i++) {
    if (dlife[i] <= 0) { dpos[i * 3 + 1] = -9999; continue; }
    dvel[i * 3 + 1] -= G * dt; dpos[i * 3] += dvel[i * 3] * dt; dpos[i * 3 + 1] += dvel[i * 3 + 1] * dt; dpos[i * 3 + 2] += dvel[i * 3 + 2] * dt;
    if (dpos[i * 3 + 1] < ground(dpos[i * 3], dpos[i * 3 + 2])) dlife[i] = 0;      // lands and stays: no puff, no drift
  }
  dgeo.attributes.position.needsUpdate = true;
  for (let i = 0; i < PN2; i++) {
    if (plife[i] <= 0) { ppos[i * 3 + 1] = -9999; continue; }
    pvel[i * 3 + 1] -= G * dt; ppos[i * 3] += pvel[i * 3] * dt; ppos[i * 3 + 1] += pvel[i * 3 + 1] * dt; ppos[i * 3 + 2] += pvel[i * 3 + 2] * dt;
    if (ppos[i * 3 + 1] < ground(ppos[i * 3], ppos[i * 3 + 2])) plife[i] = 0;
  }
  pgeo.attributes.position.needsUpdate = true;
}

/* ── wheel tracks: the wire-mesh tires press a chevron tread into the soil, darker where the surface dust is
   pushed aside. They stay: nothing on the Moon blows them away. ── */
function trackTex() {      // soft-edged: a shallow, slightly darker groove, the chevrons pressed in faintly (blurred by layering, which every browser draws)
  const S = 64, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, S, 0); g.addColorStop(0, 'rgba(58,56,53,0)'); g.addColorStop(0.16, 'rgba(56,54,51,.22)'); g.addColorStop(0.84, 'rgba(56,54,51,.22)'); g.addColorStop(1, 'rgba(58,56,53,0)');
  x.fillStyle = g; x.fillRect(0, 0, S, S);
  x.lineCap = 'round'; x.lineJoin = 'round';
  for (const [w, a] of [[S * .2, .04], [S * .14, .065], [S * .08, .1]]) { x.strokeStyle = `rgba(40,38,36,${a})`; x.lineWidth = w;
    for (let k = -1; k < 5; k++) { const y = k * S / 4; x.beginPath(); x.moveTo(S * .16, y); x.lineTo(S * .5, y + S * .11); x.lineTo(S * .84, y); x.stroke(); } }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
const TRACK_MAX = 1400, trackMat = new THREE.MeshStandardMaterial({ map: trackTex(), transparent: true, depthWrite: false, roughness: 1, vertexColors: true, flatShading: true,      // flat: lit by its own facets (the ribbon carries no normals)
  polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -6 });
const tracks = WHEELS.map(() => {
  const pos = new Float32Array(TRACK_MAX * 2 * 3), uv = new Float32Array(TRACK_MAX * 2 * 2), col = new Float32Array(TRACK_MAX * 2 * 4), idx = new Uint32Array((TRACK_MAX - 1) * 6);
  for (let i = 0; i < TRACK_MAX - 1; i++) { const o = i * 2; idx.set([o, o + 2, o + 1, o + 2, o + 3, o + 1], i * 6); }      // wound to face up: the other way round they faced the ground and were culled, so no track ever showed
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setAttribute('color', new THREE.BufferAttribute(col, 4));
  g.setIndex(new THREE.BufferAttribute(idx, 1)); g.setDrawRange(0, 0);
  const m = new THREE.Mesh(g, trackMat); m.frustumCulled = false; m.receiveShadow = true; m.renderOrder = 1; scene.add(m);
  return { g, pos, uv, col, n: 0, last: null, s: 0, gap: false };
});
const _tp = new THREE.Vector3();
// The ground as drawn, not the smooth formula: the fine patch is flat triangles 0.4 m across over craterlets a few
// centimeters deep, and a tread laid on the formula sank under them almost everywhere, so no track ever showed.
function drawnH(x, z) {
  const u = (x - PATCH.cx + PATCH.half) / PS, v = (z - PATCH.cz + PATCH.half) / PS;
  if (!(u >= 0 && v >= 0 && u < PN - 1 && v < PN - 1)) return groundBase(x, z);
  const i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, P = patchGeo.attributes.position, h = (a, b) => P.getY(b * PN + a);
  const ha = h(i, j), hb = h(i, j + 1), hd = h(i + 1, j);      // the patch's two triangles per cell, split from (i, j+1) to (i+1, j)
  if (fu + fv <= 1) return ha + (hd - ha) * fu + (hb - ha) * fv;
  const hc = h(i + 1, j + 1); return hc + (hb - hc) * (1 - fu) + (hd - hc) * (1 - fv);
}
function pushTrack(T, x1, y1, z1, x2, y2, z2, alpha) {
  if (T.n >= TRACK_MAX) {      // full: forget the oldest half
    const keep = TRACK_MAX >> 1, from = TRACK_MAX - keep; T.pos.copyWithin(0, from * 6, TRACK_MAX * 6); T.uv.copyWithin(0, from * 4, TRACK_MAX * 4); T.col.copyWithin(0, from * 8, TRACK_MAX * 8); T.n = keep;
  }
  T.pos.set([x1, y1, z1, x2, y2, z2], T.n * 6); T.uv.set([0, T.s, 1, T.s], T.n * 4); T.col.set([1, 1, 1, alpha, 1, 1, 1, alpha], T.n * 8); T.n++;
}
function layTracks() {
  WHEELS.forEach((wl, k) => {
    const T = tracks[k];
    if (!wl.contact) { if (T.n) T.gap = true; return; }
    const W = WHEEL_PARTS[k], a = (W ? _tp.set(W.c.x, wl.at.y, W.c.z) : _tp.copy(wl.at)).applyQuaternion(car.q).add(car.p);      // under the tire itself: the suspension mount is 13 cm further out
    if (T.last && !T.gap && Math.hypot(a.x - T.last.x, a.z - T.last.z) < 0.25) return;
    const hw = W ? W.hw : 0.115, dx = T.last && !T.gap ? a.x - T.last.x : _fw.x, dz = T.last && !T.gap ? a.z - T.last.z : _fw.z, l = Math.hypot(dx, dz) || 1, nx = -dz / l * hw, nz = dx / l * hw;
    const x1 = a.x + nx, z1 = a.z + nz, x2 = a.x - nx, z2 = a.z - nz, yc = drawnH(a.x, a.z), y1 = Math.max(drawnH(x1, z1), yc) + 0.02, y2 = Math.max(drawnH(x2, z2), yc) + 0.02;
    if (T.gap) {      // after a jump the tread starts again where the wheels came down: two see-through joins bridge the gap unseen
      const o = (T.n - 1) * 6, q = T.pos.slice(o, o + 6); pushTrack(T, q[0], q[1], q[2], q[3], q[4], q[5], 0); pushTrack(T, x1, y1, z1, x2, y2, z2, 0); T.gap = false;
    } else if (T.last) T.s += Math.hypot(a.x - T.last.x, a.z - T.last.z) / 0.5;
    pushTrack(T, x1, y1, z1, x2, y2, z2, 1);
    T.last = { x: a.x, z: a.z };
    const G2 = T.g.attributes; G2.position.needsUpdate = G2.uv.needsUpdate = G2.color.needsUpdate = true; T.g.setDrawRange(0, Math.max(0, (T.n - 1) * 6));
  });
}

/* ── Earth, where it really hangs over Taurus–Littrow: about 54° up in the west-southwest, almost still in the
   sky because the Moon keeps one face to it. It is lit by the same Sun as the ground, so its phase comes out right
   for the Sun's place in the sky. About 1.9° across, nearly four times the full Moon seen from Earth. ── */
/* Earth as the crew saw it on the first moonwalk (12 December 1972, 00:00 to 04:00 UT, at 20.19° N 30.77° E), worked
   out with Astronomy Engine (src/lrv-game/tools/earth-sky.mjs): 45° above the horizon toward 240° (southwest), 1.88°
   across, about two-thirds lit. It never moves in the lunar sky. The disc facing the Moon is centered on 111° W, 8.5° S,
   the eastern Pacific, with the Americas toward the eastern limb, and Earth's axis tilted as the pole vector gives.
   The surface is NASA's Blue Marble (land, ocean and ice, public domain, models/earth-bm.jpg); the clouds on it are
   drawn, since the actual clouds of that hour are not known. It is lit by the same Sun as the ground, so its phase follows. */
const EARTH_SKY = { az: 240.7, el: 45.1, diam: 1.88, sub: [-110.9, -8.5], pole: [-0.3895, 0.2953, -0.8724] };
function earth() {
  const D = 60000, el = EARTH_SKY.el * Math.PI / 180, az = EARTH_SKY.az * Math.PI / 180, rad = D * Math.tan(EARTH_SKY.diam / 2 * Math.PI / 180);
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0, fog: false, color: new THREE.Color(2.2, 2.2, 2.2) });      // Earth's daylit clouds and seas are brighter than the gray ground beside you
  new THREE.TextureLoader().load('../models/earth-bm.jpg', t => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; mat.map = t; mat.needsUpdate = true; });
  mat.onBeforeCompile = sh => {      // drawn cloud swirls over the map, thicker toward the poles and along the storm belts, and a thin blue rim of air
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vOp;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvOp = normalize(position);');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vOp;
      float eH(vec3 p) { p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float eV(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
        return mix(mix(mix(eH(i), eH(i + vec3(1, 0, 0)), f.x), mix(eH(i + vec3(0, 1, 0)), eH(i + vec3(1, 1, 0)), f.x), f.y),
                   mix(mix(eH(i + vec3(0, 0, 1)), eH(i + vec3(1, 0, 1)), f.x), mix(eH(i + vec3(0, 1, 1)), eH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      float eF(vec3 p) { float a = 0., w = .5; for (int k = 0; k < 5; k++) { a += w * eV(p); p = p * 2.03 + 1.7; w *= .5; } return a; }`)
      .replace('#include <map_fragment>', `#include <map_fragment>
        { vec3 q = vOp; float lat = abs(q.y);
          vec3 sw = q * 3. + vec3(eF(q * 2.5) , eF(q * 2.5 + 4.), eF(q * 2.5 + 8.)) * 1.6;      // swirled
          float belt = .56 - .08 * smoothstep(.35, .75, lat) - .06 * smoothstep(.12, .02, abs(lat - .08));      // more at mid-latitudes and along the equatorial belt
          float c = smoothstep(belt, belt + .14, eF(sw * 2.2)) * .8;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.93, .94, .96), clamp(c, 0., 1.)); }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        { float rim = 1. - abs(dot(normalize(vNormal), vec3(0., 0., 1.))); totalEmissiveRadiance += vec3(.12, .25, .55) * pow(rim, 4.) * .35; }`);
  };
  const m = new THREE.Mesh(new THREE.SphereGeometry(rad, 64, 32), mat);
  const dir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el));
  m.position.copy(dir).multiplyScalar(D);
  // turn it: three's sphere puts longitude L, latitude B at (cos B cos L, sin B, -cos B sin L), north up
  const ll = (L, B) => { L *= Math.PI / 180; B *= Math.PI / 180; return new THREE.Vector3(Math.cos(B) * Math.cos(L), Math.sin(B), -Math.cos(B) * Math.sin(L)); };
  const basis = (a, b) => { const x = a.clone().normalize(), y = b.clone().addScaledVector(x, -b.dot(x)).normalize(); return new THREE.Matrix4().makeBasis(x, y, new THREE.Vector3().crossVectors(x, y)); };
  const A = basis(ll(...EARTH_SKY.sub), new THREE.Vector3(0, 1, 0)), B = basis(dir.clone().negate(), new THREE.Vector3(...EARTH_SKY.pole));
  m.quaternion.setFromRotationMatrix(B.multiply(A.transpose()));      // the sub-lunar point faces the site, the pole points where it does
  return m;
}
const EARTH = earth(); scene.add(EARTH);

/* ── rover and lander models ── */
const rover = new THREE.Group(); scene.add(rover);
const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
/* The lunar module's skin, as the Dark Sky Almanac's spacecraft viewer dresses the same NASA model: the descent stage in
   crinkled amber foil (about 11 facets a metre, a second, larger set under it), the cabin in dull tan-grey aluminium, the legs bare metal, all in the tones they photographed on the
   Moon. Nothing is painted on: the crinkle is worked out in the shader from the position on the craft (each small cell of
   space a flat facet tilted its own way, so it never repeats and needs no texture coordinates, which the model lacks),
   with faint, uneven tone and shine over every part so nothing reads as plastic. */
function lmShader(m, key, foil, w) {      // foil: [facets per metre, strength] or null; w: [tone, shine, wrinkle, features per metre]
  m.onBeforeCompile = sh => {
    sh.uniforms.uW = { value: new THREE.Vector4(...w) }; sh.uniforms.uF = { value: new THREE.Vector2(...(foil || [1, 0])) };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWp;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWp = (modelMatrix * vec4(transformed, 1.)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vWp; uniform vec4 uW; uniform vec2 uF;
      float wH(vec3 p) { p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float wV(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
        return mix(mix(mix(wH(i), wH(i + vec3(1, 0, 0)), f.x), mix(wH(i + vec3(0, 1, 0)), wH(i + vec3(1, 1, 0)), f.x), f.y),
                   mix(mix(wH(i + vec3(0, 0, 1)), wH(i + vec3(1, 0, 1)), f.x), mix(wH(i + vec3(0, 1, 1)), wH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      float wF(vec3 p) { return wV(p) * .5 + wV(p * 2.7 + 3.1) * .3 + wV(p * 7.3 + 7.7) * .2; }
      vec3 fH(vec3 p) { p = fract(p * vec3(.1031, .1030, .0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx); }
      vec3 fCell(vec3 x) { vec3 i = floor(x), f = fract(x), id = vec3(.5); float best = 9.;
        for (int a = -1; a <= 1; a++) for (int b = -1; b <= 1; b++) for (int c = -1; c <= 1; c++) { vec3 g = vec3(float(a), float(b), float(c)), o = fH(i + g), d = g + o - f; float l = dot(d, d); if (l < best) { best = l; id = o; } }
        return id - .5; }`)
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= 1. + uW.x * (wF(vWp * uW.w) - .52) * 2.;')
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = clamp(roughnessFactor + uW.y * (wF(vWp * uW.w * 2.3 + 11.) - .5) * 2., .05, 1.);')
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        { vec3 q = vWp * uW.w * 4.; vec3 d = vec3(wV(q), wV(q + 17.3), wV(q + 31.7)) - .5; normal = normalize(normal + uW.z * (viewMatrix * vec4(d, 0.)).xyz); }
        if (uF.y > 0.) { vec3 q = vWp * uF.x; float fw = length(fwidth(q)); vec3 t = fCell(q) * smoothstep(1.1, .3, fw) + .6 * fCell(q * .37 + 5.) * smoothstep(1.1, .3, fw * .37); normal = normalize(normal + uF.y * (viewMatrix * vec4(t, 0.)).xyz); }`);
  };
  m.customProgramCacheKey = () => 'lm-' + key;
}
function foilLM(root) {
  root.traverse(o => {
    if (!o.isMesh) return;
    o.material = [].concat(o.material).map(m0 => { const m = m0.clone(), n = m.name || '', set = (hex, metal, rough) => { m.color.set(hex); m.metalness = metal; m.roughness = rough; };
      if (/blinn1SG|blinn10SG/.test(n)) { set(0xcf8530, .15, .5); lmShader(m, 'amber', [11, .09], [.06, .1, .02, 1.5]); }      // amber foil, crinkled
      else if (/blinn9SG/.test(n)) { set(0xa85a22, .15, .52); lmShader(m, 'amber2', [11, .09], [.06, .1, .02, 1.5]); }      // the crinkle and shine kept gentle: stronger, the facets flashed light and dark
      else if (/initialShadingGr|blinn3SG|blinn7SG/.test(n)) { set(n.includes('blinn3') ? 0x62554d : 0x92806f, .08, .55);      // little metalness: no sky here to reflect, it would only darken
        lmShader(m, 'cabin', null, [.08, .12, .04, 1.2]); m.flatShading = true; }      // each panel lit flat, a clean edge at every corner (the model's normals are smoothed across them)      // the cabin: dull aluminium panels
      else if (/blinn4SG/.test(n)) { set(0xb3aba0, .12, .5); lmShader(m, 'metal', null, [.07, .12, .04, 2]); }      // legs, ladder, porch and antennas: bare metal
      else if (/blinn6SG|blinn2SG/.test(n)) { set(n.includes('blinn6') ? 0x18181a : 0x3c3634, .3, .55); lmShader(m, 'dark', null, [.06, .1, .03, 2]); }
      return m; });
    if (o.material.length === 1) o.material = o.material[0];
  });
}
function dusty(root) { root.traverse(o => { if (!o.isMesh) return; o.castShadow = o.receiveShadow = true; [].concat(o.material).forEach(m => { if (m.color) m.color.lerp(new THREE.Color(0x9b958c), 0.18); }); }); }

/* ── controls ── */
const keys = Object.create(null);
addEventListener('keydown', e => { keys[e.key.toLowerCase()] = true; if (e.key.toLowerCase() === 'r') recover(); });
addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });
const stick = createStick($('stick'));
const ORB = { yaw: 0, pitch: 0.18, id: null, x: 0, y: 0, idle: 9 };
let pov = 0;      // 0 chase, 1 wide, 2 the driver's seat, 3 low: a wide follow from just above the ground
const POV_ORDER = [0, 3, 1, 2], POV_NAME = ['Chase', 'Wide', 'Seat', 'Low'];
function setPov(n) { pov = n; $('btn-pov').textContent = POV_NAME[pov]; camInit = false; rover.visible = true; if (n === 2) { ORB.yaw = 0; ORB.pitch = 0.18; } }
$('btn-pov').addEventListener('click', () => setPov(POV_ORDER[(POV_ORDER.indexOf(pov) + 1) % 4]));
addEventListener('pointerdown', e => { if (e.target !== renderer.domElement) return; ORB.id = e.pointerId; ORB.x = e.clientX; ORB.y = e.clientY; });
addEventListener('pointermove', e => { if (e.pointerId !== ORB.id) return; ORB.yaw -= (e.clientX - ORB.x) * 0.006; ORB.pitch = Math.max(pov === 2 ? -0.7 : -0.1, Math.min(1.1, ORB.pitch + (e.clientY - ORB.y) * 0.004)); ORB.x = e.clientX; ORB.y = e.clientY; ORB.idle = 0; });
addEventListener('pointerup', e => { if (e.pointerId === ORB.id) ORB.id = null; });
document.addEventListener('touchmove', e => { if (!e.target.closest('.sheet')) e.preventDefault(); }, { passive: false });

/* ── HUD ── */
let toastT = 0;
/* The edge of the map, without an invisible wall: Mission Control calls the crew back to the mission area, and Gene
   Cernan takes the controls, keeps his speed and swings the rover back round, in the letterbox; pointed back in, they are yours again. */
const HOME = { on: false, t: 0, cool: 0, th: 0, st: 0, v0: 0 }, _hq = new THREE.Quaternion(), _hy = new THREE.Vector3(0, 1, 0);
function homeCap(m) { const el = $('cine-cap'); el.classList.remove('on'); el.textContent = m; void el.offsetWidth; el.classList.add('on'); }
function homeEnd() { HOME.on = false; HOME.cool = 6; document.body.classList.remove('home'); $('cine-cap').classList.remove('on'); }
function homeStep(dt) {      // true while Cernan is driving
  const edge = HALF - Math.max(Math.abs(car.p.x - CX), Math.abs(car.p.z - CZ));
  if (!HOME.on) {
    const v = car.v.dot(_fw);
    if ((HOME.cool -= dt) > 0 || edge > 40 + 4 * Math.max(0, v) || CRASH.on || BRIEF.on || INTRO.on) return false;      // a little earlier the faster you go
    HOME.on = true; HOME.t = 0; HOME.v0 = Math.max(3, car.v.dot(_fw));      // the speed he keeps document.body.classList.add('home');
    homeCap('Mission Control · You’re at the edge of the mission area. Head back toward the LM.');
  }
  if (CRASH.on || BRIEF.on || INTRO.on) { homeEnd(); return false; }
  HOME.t += dt;
  const far = Math.hypot(LM.x - car.p.x, LM.z - car.p.z) > 500, tx = far ? CX : LM.x, tz = far ? CZ : LM.z;      // toward the lander, or the middle of the map
  let err = Math.atan2(-(tz - car.p.z), tx - car.p.x) - Math.atan2(-_fw.z, _fw.x); err -= 2 * Math.PI * Math.round(err / (2 * Math.PI));
  if ((Math.abs(err) < 0.4 && HOME.t > 0.8) || HOME.t > 8) { homeEnd(); toast('Heading back in · the controls are yours'); return false; }      // pointed back in: yours again
  // A driver's swing, faster than the tires alone would turn at this speed: heading and motion turn together, the speed held
  const turn = Math.max(-0.9 * dt, Math.min(0.9 * dt, err)); car.q.premultiply(_hq.setFromAxisAngle(_hy, turn)); car.v.applyAxisAngle(_hy, turn);
  const v = car.v.dot(_fw);
  HOME.st = Math.max(-1, Math.min(1, -err * 2.5));      // steering is right-positive, heading counterclockwise
  HOME.th = v < HOME.v0 ? 0.8 : 0;      // he keeps his speed
  return true;
}
function toast(m) { $('toast').textContent = m; $('toast').classList.add('on'); toastT = 3.6; }
function landed(a) {
  buzz(a.t > 1.2 ? 40 : 20);
  const recs = [];
  if (a.t > REC.t) { REC.t = a.t; recs.push('air time'); } if (a.d > REC.d) { REC.d = a.d; recs.push('distance'); } if (a.peak > REC.h) { REC.h = a.peak; recs.push('height'); }
  try { localStorage.setItem('lrv-records', JSON.stringify(REC)); } catch (e) { /* not remembered */ }
  const flip = a.spin > 5.4 ? ' · full roll!' : a.spin > 2.6 ? ' · half roll' : '';
  toast(`Airborne ${a.t.toFixed(1)} s · ${U.m(a.d, 1)} · ${U.m(a.peak, 1)} high${flip}${recs.length ? ' · new record' : ''}`);
  showRecords(); offerReplay(a);
}
function showRecords() {
  $('best').textContent = REC.t ? REC.t.toFixed(1) + ' s' : '—';
  const top = REC[SPD > 1 ? 'v' + SPD : 'v']; $('topv').textContent = top ? U.SPEED + ' · best ' + U.speed(top).toFixed(1) : U.SPEED;
  const lap = REC[SPD > 1 ? 'lap' + SPD : 'lap'];
  $('rec').textContent = [lap ? `Best loop ${Math.floor(lap / 60)}:${(lap % 60).toFixed(1).padStart(4, '0')}` : '', REC.t ? `${REC.t.toFixed(1)} s in the air · ${U.m(REC.d, 1)} · ${U.m(REC.h, 1)} high` : ''].filter(Boolean).join(' · ');
}
/* The time trial. Through the faint ring the clock starts and the loop appears; stops 6, 8 and 9 must be passed in that
   order (the next one is marked on screen with its distance), and back through the ring the clock stops. Best lap per
   speed setting; the top speed on the ground during a lap is kept too (Cernan's 18 km/h was driven, not flown). */
const RUN = { on: false, t: 0, cp: 0, peak: 0, away: false, warned: false, save: null };
// Strayed off the route: put back at the last place on it, with the clock as it was there, and carry on
const REJOIN = { t: 0 };
function rejoin() {
  const S = RUN.save; $('btn-rejoin').classList.remove('on'); REJOIN.t = 0; if (!S || CRASH.on) return;
  place(S.x, S.z, S.yaw); camInit = false;
  Object.assign(RUN, { on: true, t: S.t, cp: S.cp, peak: S.peak, warned: false, away: true });
  toast(`Back on the route · the clock resumes at ${fmtT(S.t)}`);
}
/* Into the ring, the drive pauses for a short briefing in the letterbox, then the clock starts on "Go". Paused rather
   than braked: on the Moon's weak grip a rover at full speed needs tens of meters to stop. Figures: Guinness World
   Records (lunar speed record) and the Apollo 17 traverse record (third drive, 12.1 km). */
const BRIEF = { on: false, t: 0, cap: '', go: false, lines: null };
function startBrief() {
  const lk = SPD > 1 ? 'lap' + SPD : 'lap';
  BRIEF.lines = [
    [0, 6.5, 'The time trial: Apollo 17’s third drive, north to Tracy’s Rock at stop 6, east to stop 8, and home past Van Serg crater. On the Moon it was ' + (U.US ? '7.5 mi (12.1 km)' : '12.1 km') + '; here the stops sit at a quarter of their true distances, so the loop is about ' + (U.US ? '1.5 mi' : '2.5 km') + '.'],
    [6.5, 12, 'The fastest anyone has driven on the Moon is about ' + (U.US ? '11 mph (18 km/h)' : '18 km/h (11 mph)') + ': Gene Cernan, in this rover, downhill on the way back from that drive. It is still the lunar speed record.' + (REC[lk] ? ` Your best loop at this speed: ${fmtT(REC[lk])}.` : '')],
    [12, 13.6, 'Timer started · Go!'],
  ];
  BRIEF.on = true; BRIEF.t = 0; BRIEF.go = false; running = false; document.body.classList.add('briefing');
}
function stepBrief(dt) {
  const T = (BRIEF.t += dt);
  if (T >= BRIEF.lines[2][0] && !BRIEF.go) { BRIEF.go = true; running = true; RUN.on = true; RUN.t = 0; RUN.cp = 0; RUN.peak = 0; RUN.warned = false; }
  if (T >= BRIEF.lines[2][1]) { BRIEF.on = false; document.body.classList.remove('briefing'); }
  let cap = ''; if (BRIEF.on) for (const [t0, t1, txt] of BRIEF.lines) if (T >= t0 && T < t1) cap = txt;
  if (cap !== BRIEF.cap) { BRIEF.cap = cap; const el = $('cine-cap'); el.classList.remove('on'); if (cap) { el.textContent = cap; void el.offsetWidth; el.classList.add('on'); } }
}
function offLine() { let m = 1e9; for (let i = 0; i < COURSE.length; i += 2) { const dx = COURSE[i] - car.p.x, dz = COURSE[i + 1] - car.p.z, d = dx * dx + dz * dz; if (d < m) m = d; } return Math.sqrt(m); }
function lineFade(dt) {      // the route stays faintly in view while you roam, and firms up when the clock starts
  const u = OBJ.line.material.uniforms.op, want = !OBJ.live ? 0 : RUN.on ? 1 : 0.65;      // hidden until the drive is yours
  u.value += Math.sign(want - u.value) * Math.min(Math.abs(want - u.value), dt / 1.5);
  OBJ.line.visible = u.value > 0.001;
}
const fmtT = t => `${Math.floor(t / 60)}:${(t % 60).toFixed(1).padStart(4, '0')}`;
function mark(x, z, label) {      // the small on-screen marker for the gate or the next checkpoint
  _tp.set(x, groundBase(x, z) + 2, z).project(camera);
  const el = $('objmark'), px = (_tp.x * 0.5 + 0.5) * innerWidth, py = (-_tp.y * 0.5 + 0.5) * innerHeight;
  if (_tp.z < 1) { el.style.display = 'block'; el.style.transform = `translate(${Math.max(20, Math.min(innerWidth - 170, px))}px,${Math.max(80, Math.min(innerHeight - 60, py))}px)`; el.querySelector('b').textContent = label; }
  else el.style.display = 'none';
}
function speedRecord(kmh, grounded, dt) {
  const dG = Math.hypot(OBJ.x - car.p.x, OBJ.z - car.p.z);
  if (!RUN.on) {
    if (dG < 4.5 && !RUN.away) { RUN.away = true; startBrief(); return; }
    if (dG > 8) RUN.away = false;      // after a lap, drive out of the ring before it can start again
    mark(OBJ.x, OBJ.z, dG > 25 ? `Time trial · ${U.far(dG)}` : 'Time trial'); $('clock').textContent = '';
    return;
  }
  RUN.t += dt;
  if (grounded && kmh > RUN.peak) RUN.peak = kmh;
  const off = offLine();      // stray too far from the line and the attempt is over: the clock goes, the line fades away
  if (off < 8 && AIR.grounded && _up.y > 0.85 && (RUN.saveT = (RUN.saveT || 0) + dt) > 1) {      // where to put you back if you stray: the last place on the line, about a second ago
    RUN.saveT = 0; RUN.save = { x: car.p.x, z: car.p.z, yaw: Math.atan2(-_fw.z, _fw.x), t: RUN.t, cp: RUN.cp, peak: RUN.peak }; }
  if (off > 35) { RUN.on = false; RUN.away = false; $('clock').textContent = ''; toast('Too far from the route · time trial over');
    if (RUN.save) { REJOIN.t = 10; $('btn-rejoin').classList.add('on'); } return; }
  if (off > 20 && !RUN.warned) { RUN.warned = true; toast('Back to the line, or the time trial ends'); } else if (off < 12) RUN.warned = false;
  const next = CPS[RUN.cp];
  if (next) {
    const d = Math.hypot(next.x - car.p.x, next.z - car.p.z);
    if (d < 14) { RUN.cp++; toast(`${next.n[0].toUpperCase() + next.n.slice(1)} · ${fmtT(RUN.t)}`); }
    mark(next.x, next.z, `${next.n} · ${U.far(d)}`);
  } else {
    mark(OBJ.x, OBJ.z, `Finish · ${U.far(dG)}`);
    if (dG < 4.5) {
      RUN.on = false; RUN.away = true;
      const first = !unlocked3(), lk = SPD > 1 ? 'lap' + SPD : 'lap', vk = SPD > 1 ? 'v' + SPD : 'v', best = !REC[lk] || RUN.t < REC[lk];
      if (best) REC[lk] = RUN.t;
      const vb = RUN.peak > REC[vk] + 0.05; if (vb) REC[vk] = RUN.peak;
      toast(`Loop ${fmtT(RUN.t)}${best ? ' · best lap' : ''} · top speed ${U.kmh(RUN.peak, 1)}${SPD === 1 && RUN.peak > 18 ? ' · faster than Cernan’s ' + U.kmh(18) : ''}${first ? ' · Triple speed unlocked: choose it on the start card' : ''}`);
      try { localStorage.setItem('lrv-records', JSON.stringify(REC)); } catch (e) { /* not remembered */ }
      showRecords();
    }
  }
  $('clock').textContent = fmtT(RUN.t);
}
/* A catastrophic crash, rolling onto the roof hard or tumbling at speed: the rover breaks apart, pieces fly in clean
   lunar arcs and bounce, and after a few seconds it is back on its wheels where it last drove safely. */
const CRASH = { roof: 0, on: false, t: 0, fade: 0, safe: { x: 0, z: 0, yaw: 0 }, safeT: 0, pieces: [], joints: [], extra: [] };      // extra: the crew's skinned meshes
/* The pieces are the rover itself: each wheel whole, and the rest cut into chunks by where they sit (a 4 × 2 × 2 grid
   over the chassis), with their own textures. Built once, after the wheels are rigged. They fade out after 10 s. */
const DEBRIS = [], DEBRIS_MATS = new Map();
function buildDebris() {
  rover.updateMatrixWorld(true);
  const inv = rover.matrixWorld.clone().invert(), P = new THREE.Vector3(), nm = new THREE.Matrix3(), buckets = new Map();
  const mat = m => { if (!DEBRIS_MATS.has(m)) DEBRIS_MATS.set(m, m.clone()); return DEBRIS_MATS.get(m); };
  rover.traverse(o => {
    if (!o.isMesh) return;
    const wk = WHEEL_PARTS.findIndex(w => { for (let q = o; q; q = q.parent) if (q === w.spin) return true; return false; });
    const M = inv.clone().multiply(o.matrixWorld), g = o.geometry, pos = g.attributes.position, idx = g.index ? g.index.array : null, nTri = (idx ? idx.length : pos.count) / 3;
    nm.getNormalMatrix(M);
    const f = new Float32Array(pos.count * 3); for (let i = 0; i < pos.count; i++) { P.fromBufferAttribute(pos, i).applyMatrix4(M); f[i * 3] = P.x; f[i * 3 + 1] = P.y; f[i * 3 + 2] = P.z; }
    for (let t = 0; t < nTri; t++) {
      const v = [0, 1, 2].map(k => idx ? idx[t * 3 + k] : t * 3 + k);
      let key = 'w' + wk;
      if (wk < 0) { const cx = (f[v[0] * 3] + f[v[1] * 3] + f[v[2] * 3]) / 3, cy = (f[v[0] * 3 + 1] + f[v[1] * 3 + 1] + f[v[2] * 3 + 1]) / 3, cz = (f[v[0] * 3 + 2] + f[v[1] * 3 + 2] + f[v[2] * 3 + 2]) / 3;
        if (cy > SEC.KIT) key = 'k' + (cx > -0.1 ? 1 : 0) + (cz > 0 ? 1 : 0);      // the kit on top: four pieces
        else { let sec = cx < SEC.HA ? 0 : cx > SEC.HF ? 2 : 1; for (const w of WHEEL_PARTS) if (Math.abs(cz) > 0.42 && cy > -0.9 && Math.abs(cx - w.c.x) < 0.56) sec = w.c.x > 0 ? 2 : 0; key = 'c' + sec; } }      // the chassis breaks only at its hinges
      if (!buckets.has(key)) buckets.set(key, new Map());
      const b = buckets.get(key); if (!b.has(o)) b.set(o, { f, M: M.clone(), n: nm.clone(), list: [] });
      b.get(o).list.push(...v);
    }
  });
  for (const [key, b] of buckets) {
    const box = new THREE.Box3();
    for (const { f, list } of b.values()) for (const v of list) box.expandByPoint(P.set(f[v * 3], f[v * 3 + 1], f[v * 3 + 2]));
    const c = box.getCenter(new THREE.Vector3()), sz = box.getSize(new THREE.Vector3()), parts = [];
    for (const [o, { f, n, list }] of b) {
      const g = o.geometry, out = new THREE.BufferGeometry(), a = new Float32Array(list.length * 3);
      list.forEach((v, i) => { a[i * 3] = f[v * 3] - c.x; a[i * 3 + 1] = f[v * 3 + 1] - c.y; a[i * 3 + 2] = f[v * 3 + 2] - c.z; });
      out.setAttribute('position', new THREE.BufferAttribute(a, 3));
      for (const name of Object.keys(g.attributes)) { if (name === 'position') continue; const at = g.attributes[name], s = at.itemSize, d = new Float32Array(list.length * s);
        list.forEach((v, i) => { if (name === 'normal') { P.fromBufferAttribute(at, v).applyMatrix3(n).normalize(); d[i * 3] = P.x; d[i * 3 + 1] = P.y; d[i * 3 + 2] = P.z; return; }
          d[i * s] = at.getX(v); if (s > 1) d[i * s + 1] = at.getY(v); if (s > 2) d[i * s + 2] = at.getZ(v); if (s > 3) d[i * s + 3] = at.getW(v); });
        out.setAttribute(name, new THREE.BufferAttribute(d, s)); }
      parts.push({ geo: out, mat: mat(o.material) });
    }
    DEBRIS.push({ c, sz, parts, key, kind: key[0] });
  }
}
/* The wreck. The chassis stays one body, bent at its hinges by the blow; wheels and pieces of the kit tear loose, more of
   them the harder it hits, the rest left on it at odd angles. Everything keeps the rover's own motion, so it slides and
   tumbles on rather than bursting outward, and each piece is a rigid body: it falls at the Moon's 1.62 m/s², and points
   on its outline meet the ground with a stiff spring and friction, so it lands, tips over, rolls and comes to rest.
   Forces are per unit mass, so a piece's mass drops out; its shape sets how it turns. */
function debrisBody(m, sz, wheel) {      // contact points and box-shaped inertia for a piece, in its own frame
  const pts = [];
  if (wheel) { const R = Math.max(sz.x, sz.y) / 2, hz = sz.z / 2;      // a tire: points round both edges of the tread, so it rolls
    for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; for (const z of [-hz, hz]) pts.push(new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, z)); } }
  else { m.updateMatrixWorld(true); const inv = m.matrixWorld.clone().invert();      // the corners of each part's box, the bent ends included
    m.traverse(o => { if (!o.userData.part) return; const bb = new THREE.Box3(); o.children.forEach(c => { c.geometry.computeBoundingBox(); bb.union(c.geometry.boundingBox); }); const M = inv.clone().multiply(o.matrixWorld);
      for (let i = 0; i < 8; i++) pts.push(new THREE.Vector3(i & 1 ? bb.max.x : bb.min.x, i & 2 ? bb.max.y : bb.min.y, i & 4 ? bb.max.z : bb.min.z).applyMatrix4(M)); }); }
  m.updateMatrixWorld(true); let low = 0;      // the kit stands above the hull that registers the crash, so it starts in the ground: lift each piece out
  for (const v of pts) { const w = v.clone().applyQuaternion(m.quaternion).add(m.position); low = Math.max(low, ground(w.x, w.z) - w.y); } m.position.y += low;
  const box = new THREE.Box3().setFromPoints(pts), d = box.getSize(new THREE.Vector3()).max(new THREE.Vector3(0.1, 0.1, 0.1));
  return { pts, R: Math.max(...pts.map(v => v.length())), I: new THREE.Vector3((d.y * d.y + d.z * d.z) / 12, (d.x * d.x + d.z * d.z) / 12, (d.x * d.x + d.y * d.y) / 12), still: 0, rest: false };
}
function breakApart(hit = 8) {      // hit: how hard, m/s
  const k = Math.max(0, Math.min(1, (hit - 3.5) / 8));      // 0 a slow roll onto the roof .. 1 a hard tumble
  CRASH.on = true; CRASH.t = 0; CRASH.fade = 0; rover.visible = false; CRASH.id = (CRASH.id || 0) + 1;
  CRASH.pieces.forEach(p => scene.remove(p.m)); CRASH.extra.forEach(m => scene.remove(m)); CRASH.pieces = []; CRASH.joints = []; CRASH.extra = [];
  DEBRIS_MATS.forEach(m => { m.opacity = 1; m.transparent = false; m.needsUpdate = true; });
  rover.updateMatrixWorld(true);
  const mesh = d => { const g = new THREE.Group(); g.userData.part = true; d.parts.forEach(({ geo, mat }) => { const n = new THREE.Mesh(geo, mat); n.castShadow = true; g.add(n); }); return g; };
  const R = Math.random, by = {}; DEBRIS.forEach(d => { by[d.key] = d; });
  const launch = (m, c, pop, wheel, sz) => {      // a loose piece: the rover's velocity at that point, plus a small kick away from it
    const rr = c.clone().applyMatrix4(rover.matrixWorld).sub(car.p), v = car.v.clone().add(car.w.clone().cross(rr));
    v.addScaledVector(rr.clone().setY(0).normalize(), pop * (0.5 + R())).add(new THREE.Vector3(0, pop * (0.3 + R() * 0.7), 0));
    m.position.copy(c).applyMatrix4(rover.matrixWorld); m.quaternion.copy(car.q); scene.add(m);
    CRASH.pieces.push(Object.assign({ m, v, w: car.w.clone().add(new THREE.Vector3(R() - .5, R() - .5, R() - .5).multiplyScalar(4 * pop)) }, debrisBody(m, sz, wheel)));
  };
  // the chassis, bent at its hinges; on a hard enough blow one end tears away
  const C = by.c1.c, body = new THREE.Group(); body.add(mesh(by.c1));
  const tear = k > 0.85 && R() < (k - 0.85) * 3 ? (R() < 0.5 ? 'c0' : 'c2') : null, ends = {};
  for (const key of ['c0', 'c2']) { const d = by[key]; if (!d) continue;
    if (key === tear) { launch(mesh(d), d.c, 1.2 * k, false); continue; }
    const hx = key === 'c0' ? SEC.HA : SEC.HF, piv = new THREE.Group(); piv.position.set(hx - C.x, SEC.HY - C.y, -C.z);
    const g = mesh(d); g.position.set(d.c.x - hx, d.c.y - SEC.HY, d.c.z); piv.add(g); body.add(piv);
    piv.rotation.z = (R() < 0.5 ? -1 : 1) * (0.08 + 0.4 * k) * (0.6 + 0.4 * R()); piv.rotation.x = (R() - 0.5) * 0.25 * k; ends[key] = piv; }
  for (const key of ['w0', 'w1', 'w2', 'w3', 'k00', 'k01', 'k10', 'k11']) { const d = by[key]; if (!d) continue;
    const wheel = key[0] === 'w', go = R() < (wheel ? 0.1 + 0.45 * k : 0.45 + 0.4 * k);      // the antennas, camera and seats on top are the weakest parts: even a slow roll tears some off
    if (go) { launch(mesh(d), d.c, (wheel ? 1.0 : 0.6) * (0.3 + k), wheel, d.sz); continue; }
    const host = wheel ? ends[d.c.x > 0 ? 'c2' : 'c0'] : null, g = mesh(d);      // left on, knocked askew: a wheel goes with its end of the chassis
    if (host) g.position.copy(d.c).sub(C).sub(host.position); else g.position.copy(d.c).sub(C);
    g.rotation.set((R() - 0.5) * (wheel ? 0.7 : 1.1) * (0.3 + k), (R() - 0.5) * 0.3 * (0.3 + k), (R() - 0.5) * (wheel ? 0.3 : 1.0) * (0.3 + k));
    if (!wheel) g.scale.set(1, 0.5 + 0.25 * R(), 1);      // what stays on is crushed flat against the ground it landed on
    (host || body).add(g); }
  body.position.copy(C).applyMatrix4(rover.matrixWorld); body.quaternion.copy(car.q); scene.add(body);
  // The crew, thrown clear as rag dolls: each suit stays one skinned mesh on its ten bones, which become rigid bodies on the
  // ground, held together at the shoulders, elbows, hips and knees by soft joints, so the limbs flop and the suit creases
  // but nothing comes apart. Only the backpack may break loose. Each starts from the pose he was riding in. Thrown gently
  // and slowed in the air: more slapstick than violent.
  for (const h of CREW) {
    if (!h.visible) continue;
    h.updateMatrixWorld(true); const seat = h.userData.bones, pack = R() < 0.5, tq = new THREE.Quaternion(), tp = new THREE.Vector3(), ts = new THREE.Vector3();
    const pop = new THREE.Vector3((R() - 0.5) * 1.2, 0.8 + 1.2 * k + R() * 0.6, (R() - 0.5) * 1.2), spin = new THREE.Vector3(R() - .5, R() - .5, R() - .5).multiplyScalar(1.5 + 2 * k);
    const bones = [], segP = [];
    for (let b = 0; b < 10; b++) {
      if (b === 7 && !pack) { bones.push(bones[0]); segP.push(null); continue; }
      const S = CREW_SEG[b], bone = new THREE.Bone();
      seat[b].matrixWorld.decompose(tp, tq, ts);      // where the seat's bone is now (the backpack's is the torso's)
      bone.position.copy(S.c).sub(CREW_SEG[b === 7 ? 0 : b].c).applyQuaternion(tq).add(tp); bone.quaternion.copy(tq); scene.add(bone); bones.push(bone);
      const hs = S.size.clone().multiplyScalar(0.5).max(new THREE.Vector3(0.05, 0.05, 0.05)), pts = [];
      for (let i = 0; i < 8; i++) pts.push(new THREE.Vector3(i & 1 ? hs.x : -hs.x, i & 2 ? hs.y : -hs.y, i & 4 ? hs.z : -hs.z));
      const d = hs.clone().multiplyScalar(2), rr = bone.position.clone().sub(car.p);
      const piece = { m: bone, v: car.v.clone().add(car.w.clone().cross(rr)).add(pop), w: car.w.clone().add(spin), inv: b ? 1 : 0.3, airDamp: 0.9, pts, R: hs.length(),
        I: new THREE.Vector3((d.y * d.y + d.z * d.z) / 12, (d.x * d.x + d.z * d.z) / 12, (d.x * d.x + d.y * d.y) / 12), still: 0, rest: false };
      if (b === 7) { piece.v.add(new THREE.Vector3(R() - 0.5, R(), R() - 0.5)); piece.w.multiplyScalar(1.5); }      // the backpack, torn off its straps, goes its own way
      CRASH.pieces.push(piece); segP.push(piece);
    }
    let low = 0; for (const P of segP) if (P) for (const v of P.pts) { const w = v.clone().applyQuaternion(P.m.quaternion).add(P.m.position); low = Math.max(low, ground(w.x, w.z) - w.y); }
    segP.forEach(P => { if (P) { P.m.position.y += low; P.m.updateMatrixWorld(true); } });      // out of the ground, all together
    const skel = new THREE.Skeleton(bones, crewInverses(pack));
    for (const [g, m, loose] of h.userData.parts) {
      const mat = DEBRIS_MATS.get(m) || (DEBRIS_MATS.set(m, Object.assign(m.clone(), { onBeforeCompile: m.onBeforeCompile, customProgramCacheKey: m.customProgramCacheKey })), DEBRIS_MATS.get(m));      // the suit's own shader goes with it
      let geo = g; if (pack) { geo = new THREE.BufferGeometry(); for (const a in g.attributes) geo.setAttribute(a, g.attributes[a]); geo.setIndex(loose); }
      const sk = new THREE.SkinnedMesh(geo, mat); sk.castShadow = true; sk.frustumCulled = false; sk.bind(skel, new THREE.Matrix4()); scene.add(sk); CRASH.extra.push(sk);
    }
    for (const [a, b2, at] of CREW_JOINTS) CRASH.joints.push({ A: segP[a], B: segP[b2], la: at.clone().sub(CREW_SEG[a].c), lb: at.clone().sub(CREW_SEG[b2].c) });
  }


  const rr = body.position.clone().sub(car.p);
  CRASH.pieces.push(Object.assign({ m: body, main: true, v: car.v.clone().add(car.w.clone().cross(rr)), w: car.w.clone() }, debrisBody(body)));
  for (let j = 0, n = Math.round(30 + 70 * k); j < n; j++) { const i = dnext; dnext = (dnext + 1) % DN;      // a puff of dust, falling straight back
    dpos[i * 3] = car.p.x + (R() - .5) * 2; dpos[i * 3 + 1] = car.p.y; dpos[i * 3 + 2] = car.p.z + (R() - .5) * 2;
    dvel[i * 3] = car.v.x * 0.5 + (R() - .5) * 3 * (0.3 + k); dvel[i * 3 + 1] = R() * 2.5 * (0.3 + k); dvel[i * 3 + 2] = car.v.z * 0.5 + (R() - .5) * 3 * (0.3 + k); dlife[i] = 1; }
  car.v.set(0, 0, 0); car.w.set(0, 0, 0); AIR.t = 0; AIR.grounded = true;
  toast(k < 0.4 ? 'Rollover · the rover is wrecked' : 'Crash · the rover breaks apart');
}
const _ja = new THREE.Vector3(), _jb = new THREE.Vector3(), _je = new THREE.Vector3(), _jv = new THREE.Vector3(), _jt = new THREE.Vector3();
function stepJoints(h) {      // the rag dolls' joints: a soft spring and damper pulling the two anchor points together, pushing each part by its share
  for (const J of CRASH.joints) {
    const A = J.A, B = J.B, ra = _ja.copy(J.la).applyQuaternion(A.m.quaternion), rb = _jb.copy(J.lb).applyQuaternion(B.m.quaternion);
    const e = _je.copy(B.m.position).add(rb).sub(A.m.position).sub(ra);
    const dv = _jv.copy(B.w).cross(rb).add(B.v).sub(_jt.copy(A.w).cross(ra)).sub(A.v);
    const F = e.multiplyScalar(-1600).addScaledVector(dv, -32).multiplyScalar(h);      // the impulse on B; A takes the opposite
    if (F.lengthSq() > 1e-7) { A.rest = B.rest = false; }      // a tug wakes a part that had come to rest
    B.v.addScaledVector(F, B.inv); A.v.addScaledVector(F, -A.inv);
    const iB = 3 / (B.I.x + B.I.y + B.I.z), iA = 3 / (A.I.x + A.I.y + A.I.z);
    B.w.addScaledVector(_jt.copy(rb).cross(F), B.inv * iB * 0.5); A.w.addScaledVector(_jt.copy(ra).cross(F), -A.inv * iA * 0.5);
  }
}
const _dq = new THREE.Quaternion(), _dp = new THREE.Vector3(), _dv = new THREE.Vector3(), _dw = new THREE.Vector3(), _dt = new THREE.Vector3(), _dr = new THREE.Vector3();
function stepDebris(p, h) {      // one rigid piece, one small time step
  if (p.rest) return;
  const q = p.m.quaternion, x = p.m.position, F = _dv.set(0, -G, 0), T = _dt.set(0, 0, 0);
  const np = Math.max(4, p.pts.length), K = 9600 / np, Cd = 240 / np, Cf = 120 / np;      // stiffness, damping and grip shared among the points, per unit mass
  let touch = 0;
  if (x.y - p.R < ground(x.x, x.z) + 0.5) for (const pl of p.pts) {      // (high in the air, no point can be touching)
    const r = _dr.copy(pl).applyQuaternion(q), px = r.x + x.x, py = r.y + x.y, pz = r.z + x.z, pen = ground(px, pz) - py;
    if (pen <= 0) continue;
    touch++;
    const n = normalAt(px, pz), vp = _dw.copy(p.w).cross(r).add(p.v), vn = vp.dot(n), Fn = Math.max(0, K * Math.min(pen, 0.08) - Cd * vn);      // capped, so nothing is ever fired out of the ground
    const vt = vp.addScaledVector(n, -vn), s = vt.length(), Ft = s > 1e-5 ? Math.min(0.8 * Fn, s * Cf) / s : 0;      // regolith friction, about 0.8
    const f = _dp.copy(n).multiplyScalar(Fn).addScaledVector(vt, -Ft);
    F.add(f); T.add(r.cross(f));
  }
  p.v.addScaledVector(F, h);
  _dq.copy(q).invert(); const tb = T.applyQuaternion(_dq), wb = _dr.copy(p.w).applyQuaternion(_dq);
  wb.x += tb.x / p.I.x * h; wb.y += tb.y / p.I.y * h; wb.z += tb.z / p.I.z * h; p.w.copy(wb.applyQuaternion(q));
  if (touch) { p.w.multiplyScalar(Math.exp(-h * 1.2)); p.v.multiplyScalar(Math.exp(-h * 0.4)); }      // the soil soaks up a rolling piece's energy
  else if (p.airDamp) p.w.multiplyScalar(Math.exp(-h * p.airDamp));      // the rag dolls: no air on the Moon, but the suit's stiffness slows the flailing
  x.addScaledVector(p.v, h);
  const wl = p.w.length(); if (wl > 1e-6) q.premultiply(_dq.setFromAxisAngle(_dw.copy(p.w).divideScalar(wl), wl * h)).normalize();
  p.still = touch && p.v.length() < 0.06 && wl < 0.08 ? p.still + h : 0; if (p.still > 0.6) p.rest = true;      // settled: leave it lying there
}
function stepCrash(dt) {
  if (!CRASH.on) {      // remember where it last drove upright, to bring it back there
    if ((CRASH.safeT += dt) > 1 && _up.y > 0.85 && AIR.grounded) { CRASH.safeT = 0; CRASH.safe = { x: car.p.x, z: car.p.z, yaw: Math.atan2(-_fw.z, _fw.x) }; }
    if (CRASH.roof > 3.5 || (_up.y < -0.2 && CRASH.topDown)) breakApart(Math.max(CRASH.roof, car.v.length()));      // landing upside down, however slowly: the antennas, the camera and the crew on top take it. A roll in the air is not yet a crash
    CRASH.topDown = false;
    CRASH.roof = 0;
  } else if ((CRASH.t += dt) > 4.5) {
    CRASH.on = false; rover.visible = true; place(CRASH.safe.x, CRASH.safe.z, CRASH.safe.yaw); camInit = false; toast('A new rover · back where you last drove safely');
  }
  if (CRASH.pieces.length && (CRASH.fade += dt) > 10) {      // the wreck fades away after 10 s
    const o = Math.max(0, 1 - (CRASH.fade - 10) / 1.5); DEBRIS_MATS.forEach(m => { if (!m.transparent) { m.transparent = true; m.needsUpdate = true; } m.opacity = o; });
    if (o === 0) { CRASH.pieces.forEach(p => scene.remove(p.m)); CRASH.extra.forEach(m => scene.remove(m)); CRASH.pieces = []; CRASH.joints = []; CRASH.extra = []; }
  }
  const n = Math.min(12, Math.ceil(dt * 200)); for (let i = 0; i < n; i++) { stepJoints(dt / n); for (const p of CRASH.pieces) stepDebris(p, dt / n); }
}
let upsideT = 0;
function recover() { const yaw = Math.atan2(-_fw.z, _fw.x); place(car.p.x, car.p.z, yaw); toast('Back on its wheels'); }
$('btn-recover').addEventListener('click', recover);
if (U.US) {      // the start card, in US units
  document.querySelectorAll('.spd button').forEach(b => { b.innerHTML = ['Real', 'Double', 'Triple'][b.dataset.v - 1] + '<small>' + U.kmh(18 * b.dataset.v) + '</small>'; });
  $('spec-rover').textContent = 'About 1,540 lb loaded with crew; 10 ft long; four wire-mesh wheels, each with its own motor; front and rear steering';
  $('fine-rec').textContent = '11 mph';
  $('spec-top').textContent = '11 mph, the record Gene Cernan set on Apollo 17 (it was built for about 8 mph on the level). Faster downhill, where gravity does the work';
}
const markSpeed = () => document.querySelectorAll('.spd button').forEach(o => o.classList.toggle('on', +o.dataset.v === SPD));
document.querySelectorAll('.spd button').forEach(b => {
  if (b.dataset.v === '3') b.hidden = !unlocked3();
  b.addEventListener('click', () => {
    if (RUN.on && +b.dataset.v !== SPD) { RUN.on = false; RUN.away = false; $('clock').textContent = ''; toast('Speed changed · time trial over'); }      // a lap counts at one speed only
    setSpeed(+b.dataset.v); showRecords(); markSpeed();
  });
});
markSpeed();
$('btn-go').addEventListener('click', () => { $('brief').classList.remove('on'); if (SEC.ok && LM.on) startIntro(); else { running = OBJ.live = true; CREW.forEach(c => { c.visible = true; }); } });
$('cine-skip').addEventListener('click', () => { if (INTRO.on) endIntro(); else if (BRIEF.on && BRIEF.t < BRIEF.lines[2][0]) BRIEF.t = BRIEF.lines[2][0]; });
/* The menu (the back button) and the settings (the gear), as in the Mars simulator. The drive pauses while either is open.
   Back to Objects is the extensionless address, as every other page links it: a redirected page from the offline cache fails to open. */
const SHEETS = ['menu', 'settings'], PAUSE = { was: false };
const anyOpen = () => SHEETS.some(id => $(id).classList.contains('on'));
function openSheet(id) { if (!anyOpen()) { PAUSE.was = running; running = false; } $(id).classList.add('on'); }
function closeSheets(resume = PAUSE.was) { SHEETS.forEach(id => $(id).classList.remove('on')); running = resume; }
function toDrive() {      // out of the opening film, a time trial's briefing or a wreck, ready to drive
  if (INTRO.on) endIntro();
  if (BRIEF.on) { BRIEF.on = false; document.body.classList.remove('briefing'); $('cine-cap').classList.remove('on'); BRIEF.cap = ''; }
  if (CRASH.on) { CRASH.on = false; rover.visible = true; }
  if (HOME.on) homeEnd();
  RUN.on = false; RUN.save = null; REJOIN.t = 0; $('btn-rejoin').classList.remove('on'); $('clock').textContent = '';
  CREW.forEach(c => { c.visible = true; }); OBJ.live = true; camInit = false;
}
{ const tap = (el, f) => { const go = e => { e.preventDefault(); e.stopPropagation(); f(); }; el.addEventListener('pointerup', go); el.addEventListener('click', go); };      // the game's own touch handling can swallow a plain tap on iPhone
  let last = 0; const once = f => () => { const t = performance.now(); if (t - last > 400) { last = t; f(); } };      // pointerup and click both fire: act once
  tap($('back'), once(() => { if ($('brief').classList.contains('on')) location.href = '../objects'; else if (anyOpen()) closeSheets(); else openSheet('menu'); }));
  tap($('btn-set'), once(() => { markSettings(); SHEETS.forEach(id => $(id).classList.remove('on')); openSheet('settings'); }));
}
$('m-resume').addEventListener('click', () => closeSheets());
$('m-trial').addEventListener('click', () => {      // put down short of the start ring, facing it; drive through to start the clock
  toDrive(); RUN.away = false; place(OBJ.x, OBJ.z + 22, Math.PI / 2); closeSheets(true); $('brief').classList.remove('on'); toast('Drive through the ring to start the clock');
});
$('m-lander').addEventListener('click', () => { toDrive(); place(0, 0, Math.atan2(350, 82)); closeSheets(true); $('brief').classList.remove('on'); toast('Back beside the lander'); });
$('m-objects').addEventListener('click', () => { location.href = '../objects'; });
let setQ = detailChoice();
function markSettings() {
  markSpeed(); setQ = detailChoice();
  document.querySelectorAll('.cam button').forEach(b => b.classList.toggle('on', +b.dataset.c === pov));
  document.querySelectorAll('.det button').forEach(b => b.classList.toggle('on', b.dataset.q === setQ));
  $('set-apply').hidden = true; const r = $('set-rec'); r.armed = false; r.textContent = 'Reset records';
  $('set-note').textContent = `Now drawing at ${DETAIL_NAME[0].toUpperCase() + DETAIL_NAME.slice(1)}. Lower detail runs smoother; higher looks sharper.`;
}
document.querySelectorAll('.cam button').forEach(b => b.addEventListener('click', () => { setPov(+b.dataset.c); markSettings(); }));
document.querySelectorAll('.det button').forEach(b => b.addEventListener('click', () => {
  setQ = b.dataset.q; document.querySelectorAll('.det button').forEach(o => o.classList.toggle('on', o === b)); $('set-apply').hidden = setQ === detailChoice(); }));
$('set-apply').addEventListener('click', () => { setDetail(setQ); location.reload(); });
$('set-done').addEventListener('click', () => closeSheets());
$('set-rec').addEventListener('click', () => {      // two taps, so a stray one cannot wipe them
  const r = $('set-rec'); if (!r.armed) { r.armed = true; r.textContent = 'Tap again to erase'; return; }
  Object.keys(REC).forEach(k => { REC[k] = 0; }); AIR.best = 0; try { localStorage.removeItem('lrv-records'); } catch (e) { /* storage blocked */ }
  showRecords(); r.armed = false; r.textContent = 'Records erased';
});

/* ── replay: the last 20 s of the rover's pose, kept every frame. After a long jump over a crater, a button offers it
   again in slow motion from a fixed camera low beside the jump, the crater rim in view. ── */
const HIST = [], REPLAY = { on: false, t: 0, end: 0, cam: new THREE.Vector3(), jump: null, offerT: 0, save: null };
let simT = 0;
function record() {
  HIST.push([simT, car.p.x, car.p.y, car.p.z, car.q.x, car.q.y, car.q.z, car.q.w, car.steer, ...WHEELS.map(w => w.spin)]);
  while (HIST.length && HIST[0][0] < simT - 20) HIST.shift();
}
function offerReplay(a) {      // called on landing: a long jump, taking off from or passing over a crater 3 m or more across
  if (!(a.t >= 1.5 || a.d >= 12) || !AIR.start) return;
  const S = AIR.start, E = car.p, dx = E.x - S.x, dz = E.z - S.z, L2 = dx * dx + dz * dz || 1;
  const over = craters.find(c => { if (c.R < 1.5) return false; const u = Math.max(0, Math.min(1, ((c.x - S.x) * dx + (c.z - S.z) * dz) / L2)); return Math.hypot(S.x + dx * u - c.x, S.z + dz * u - c.z) < c.R * 1.15; });
  if (!over) return;
  REPLAY.jump = { t0: simT - a.t, t1: simT, S: S.clone(), E: E.clone(), c: over, a }; REPLAY.offerT = 6; $('btn-replay').classList.add('on');
}
function startReplay() {
  const J = REPLAY.jump; if (!J || REPLAY.on || CRASH.on) return;
  $('btn-replay').classList.remove('on'); REPLAY.offerT = 0;
  REPLAY.save = { run: running, steer: car.steer, spin: WHEELS.map(w => w.spin) };
  REPLAY.fov = camera.fov; REPLAY.on = true; REPLAY.t = J.t0 - 1.2; REPLAY.end = Math.min(simT, J.t1 + 1.8); running = false; document.body.classList.add('replay');
  // the camera: beside the middle of the jump, on the side away from the crater's center, low to the ground
  const mx = (J.S.x + J.E.x) / 2, mz = (J.S.z + J.E.z) / 2, d = Math.max(1, Math.hypot(J.E.x - J.S.x, J.E.z - J.S.z)), ux = (J.E.x - J.S.x) / d, uz = (J.E.z - J.S.z) / d;
  let nx = -uz, nz = ux; if ((mx - J.c.x) * nx + (mz - J.c.z) * nz < 0) { nx = -nx; nz = -nz; }
  const D = Math.max(9, Math.min(30, d * 0.7 + 6)), cx = mx + nx * D - ux * d * 0.2, cz = mz + nz * D - uz * d * 0.2;
  REPLAY.cam.set(cx, ground(cx, cz) + 1.3, cz);
  const el = $('cine-cap'); el.textContent = `Replay · ${J.a.t.toFixed(1)} s in the air · ${U.m(J.a.d, 1)} · ${U.m(J.a.peak, 1)} high`; void el.offsetWidth; el.classList.add('on');
}
function endReplay() {
  if (!REPLAY.on) return;
  REPLAY.on = false; document.body.classList.remove('replay'); camera.fov = REPLAY.fov; camera.updateProjectionMatrix(); $('cine-cap').classList.remove('on');
  car.steer = REPLAY.save.steer; WHEELS.forEach((w, k) => { w.spin = REPLAY.save.spin[k]; }); running = REPLAY.save.run; camInit = false;
}
function stepReplay(dt) {
  REPLAY.t += dt * 0.55;      // slow motion
  if (REPLAY.t >= REPLAY.end) { endReplay(); return false; }
  let i = HIST.findIndex(h => h[0] > REPLAY.t); if (i < 1) i = i < 0 ? HIST.length - 1 : 1;
  const A = HIST[i - 1], B = HIST[i], w = Math.max(0, Math.min(1, (REPLAY.t - A[0]) / Math.max(1e-6, B[0] - A[0])));
  rover.position.set(A[1] + (B[1] - A[1]) * w, A[2] + (B[2] - A[2]) * w, A[3] + (B[3] - A[3]) * w);
  rover.quaternion.set(A[4], A[5], A[6], A[7]).slerp(_qi.set(B[4], B[5], B[6], B[7]), w);
  car.steer = A[8] + (B[8] - A[8]) * w; WHEELS.forEach((wl, k) => { wl.spin = A[9 + k] + (B[9 + k] - A[9 + k]) * w; }); turnWheels();
  camera.position.copy(REPLAY.cam); camera.lookAt(_tmp.copy(rover.position).add(_r.set(0, 0.3, 0)));
  camera.fov = Math.max(14, Math.min(REPLAY.fov, 2 * Math.atan(7 / camera.position.distanceTo(rover.position)) * 180 / Math.PI)); camera.updateProjectionMatrix();      // a long lens: the rover and some ground round it fill the frame
  sun.position.copy(rover.position).addScaledVector(SUN, 120); sun.target.position.copy(rover.position);
  return true;
}
$('btn-replay').addEventListener('click', startReplay);
$('btn-rejoin').addEventListener('click', rejoin);
$('cine-skip').addEventListener('click', () => { if (REPLAY.on) endReplay(); });

/* ── loop ── */
let running = false, last = performance.now();
const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3(); let camInit = false;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (BRIEF.on) stepBrief(dt);
  if (running) {
    const kf = (keys.w || keys.arrowup ? 1 : 0) - (keys.s || keys.arrowdown ? 1 : 0), kt = (keys.a || keys.arrowleft ? 1 : 0) - (keys.d || keys.arrowright ? 1 : 0);
    throttle = kf || stick.y; steerIn = -(kt || -stick.x);
    if (homeStep(dt)) { throttle = HOME.th; steerIn = HOME.st; }      // Cernan driving, the player's controls set aside
    if (Math.abs(throttle) > 0.02 || Math.abs(steerIn) > 0.02) parked = false;
    const n = Math.min(12, Math.ceil(dt / (1 / 240))), h = dt / n;
    if (!CRASH.on) for (let i = 0; i < n; i++) step(h);
    _up.set(0, 1, 0).applyQuaternion(car.q); _fw.set(1, 0, 0).applyQuaternion(car.q); stepCrash(dt);
    kick(dt); layTracks();
    if (Math.max(Math.abs(car.p.x - PATCH.cx), Math.abs(car.p.z - PATCH.cz)) > 14) buildPatch(car.p.x, car.p.z);      // keep the fine ground under the rover
    upsideT = _up.y < 0.35 ? upsideT + dt : 0; $('btn-recover').classList.toggle('on', upsideT > 1.2);
    simT += dt; if (!CRASH.on) record();
    if (REPLAY.offerT > 0 && (REPLAY.offerT -= dt) <= 0 || CRASH.on) { REPLAY.offerT = 0; $('btn-replay').classList.remove('on'); }
    if (REJOIN.t > 0 && ((REJOIN.t -= dt) <= 0 || RUN.on)) { REJOIN.t = 0; $('btn-rejoin').classList.remove('on'); }
  }
  if (REPLAY.on && stepReplay(dt)) { renderer.render(scene, camera); requestAnimationFrame(frame); return; }
  rover.position.copy(car.p); rover.quaternion.copy(car.q); turnWheels(); stepCrew(dt);
  if (INTRO.on) { stepIntro(dt); renderer.render(scene, camera); requestAnimationFrame(frame); return; }
  // chase camera, held a little above the ground
  ORB.idle += dt; if (ORB.idle > (pov === 2 ? 4 : 2.5)) { ORB.yaw *= Math.exp(-dt * 1.5); ORB.pitch += (0.18 - ORB.pitch) * Math.min(1, dt * 1.5); }
  _up.set(0, 1, 0).applyQuaternion(car.q); _fw.set(1, 0, 0).applyQuaternion(car.q);
  const wreck = CRASH.on && CRASH.pieces.find(p => p.main);
  if (CREW[0] && !INTRO.on && OBJ.live) CREW[0].visible = pov !== 2;      // in his seat you see through his eyes, not his helmet
  if (wreck) {      // the crash, one of three shots, never the same twice running: low beside the tumble, low and wide behind it, or rising high to look down on the wreck
    if (CRASH.camFor !== CRASH.id) { CRASH.camFor = CRASH.id; let c; do c = Math.floor(Math.random() * 3); while (c === CRASH.cam); CRASH.cam = c; CRASH.side = Math.random() < 0.5 ? 1 : -1; }
    const k = ss(0, 2.2, CRASH.t), heading = Math.atan2(-_fw.z, _fw.x) + Math.PI, t = wreck.m.position, sh = heading + CRASH.side * Math.PI / 2;
    const want = CRASH.cam === 0 ? _tmp.set(t.x + Math.cos(sh) * (9 + 3 * k), t.y + 0.45, t.z - Math.sin(sh) * (9 + 3 * k))
      : CRASH.cam === 1 ? _tmp.set(t.x + Math.cos(heading + 0.5 * CRASH.side) * (14 + 4 * k), t.y + 0.9 + 0.6 * k, t.z - Math.sin(heading + 0.5 * CRASH.side) * (14 + 4 * k))
      : _tmp.set(t.x + Math.cos(heading) * (8 - k), t.y + 2.5 + 18 * k, t.z - Math.sin(heading) * (8 - k));
    want.y = Math.max(want.y, ground(want.x, want.z) + (CRASH.cam === 2 ? 1.5 : 0.35));
    camPos.lerp(want, 1 - Math.exp(-dt * 3)); camTgt.lerp(t, 1 - Math.exp(-dt * 6));
    camera.position.copy(camPos); camera.lookAt(camTgt);
  } else if (pov === 2) {      // Gene Cernan's seat: the camera rides with the rover, every bump included; drag to look around, as far as a turn of the shoulders lets him
    camera.position.copy(_a.set(-0.62, 0.95, -0.32).applyQuaternion(car.q).add(car.p));
    const ly = Math.max(-2.3, Math.min(2.3, ORB.yaw)), lp = ORB.pitch - 0.18 - 0.14;      // level is a little below the horizon, the ground ahead in view
    _r.set(Math.cos(ly) * Math.cos(lp), Math.sin(lp), -Math.sin(ly) * Math.cos(lp)).applyQuaternion(car.q);
    camera.up.copy(_up); camera.lookAt(_tmp.copy(camera.position).add(_r)); camera.up.set(0, 1, 0);
  } else {
    const low = pov === 3, heading = Math.atan2(-_fw.z, _fw.x), yaw = heading + Math.PI + ORB.yaw, D = pov === 1 ? 16 : low ? 12 : 7.5, lift = pov === 1 ? 0.35 : low ? -0.2 : 0;
    const want = _tmp.set(car.p.x + Math.cos(yaw) * Math.cos(ORB.pitch + lift) * D, car.p.y + (low ? 0.2 : 1.6) + Math.sin(ORB.pitch + lift) * D, car.p.z - Math.sin(yaw) * Math.cos(ORB.pitch + lift) * D);
    want.y = Math.max(want.y, ground(want.x, want.z) + (low ? 0.45 : 1.2));      // the low view: from just over the ground, wide, the rover against the sky
    if (!camInit) { camPos.copy(want); camTgt.copy(car.p); camInit = true; }
    camPos.lerp(want, 1 - Math.exp(-dt * 4)); camTgt.lerp(_a.copy(car.p).add(_r.set(0, 0.6, 0)), 1 - Math.exp(-dt * 8));
    camera.position.copy(camPos); camera.lookAt(camTgt);
  }
  if (window.__lrv && window.__lrv.cam) camera.position.copy(window.__lrv.cam);      // test hooks
  if (window.__lrv && window.__lrv.look) camera.lookAt(window.__lrv.look);
  sun.position.copy(car.p).addScaledVector(SUN, 120); sun.target.position.copy(car.p);
  const kmh = Math.abs(car.v.dot(_fw)) * 3.6; $('speed').textContent = U.speed(kmh).toFixed(1); if (running) speedRecord(kmh, AIR.grounded && AIR.t === 0, dt); lineFade(dt);
  $('air').textContent = AIR.t > 0.15 ? `Airborne ${AIR.t.toFixed(1)} s` : '';
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('on'); }
  siteMarks(); if (running) mapTick(dt);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

/* ── the wheels: the model is a scan of the museum's rover, with the wheels fused into the rest. Each wheel is found
   from the geometry (the cluster of points low at each corner, then a circle fitted to the lower half of its tread),
   and every triangle inside its cylinder is cut out into its own part, pivoted at the hub, so it can turn with the
   physics and steer. The fender hugs the top of the tire, a few centimeters out and overhanging its inboard side,
   so the cylinder is fitted tight, reaching past the tread only outboard, where the hub's disc stands proud. ── */
const WHEEL_PARTS = [];
function rigWheels() {
  rover.updateMatrixWorld(true);
  const inv = rover.matrixWorld.clone().invert(), meshes = [], P = new THREE.Vector3();
  rover.traverse(o => { if (o.isMesh) meshes.push(o); });
  const src = meshes.map(m => { const M = inv.clone().multiply(m.matrixWorld), pos = m.geometry.attributes.position, f = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) { P.fromBufferAttribute(pos, i).applyMatrix4(M); f[i * 3] = P.x; f[i * 3 + 1] = P.y; f[i * 3 + 2] = P.z; }
    return { m, M, f }; });
  const box = [0, 1, 2, 3].map(() => ({ x0: 1e9, x1: -1e9, z0: 1e9, z1: -1e9, y0: 1e9, n: 0 }));
  for (const { f } of src) for (let i = 0; i < f.length; i += 3) { const x = f[i], y = f[i + 1], z = f[i + 2];
    if (y > -0.45 || Math.abs(x) < 0.6 || Math.abs(z) < 0.45) continue;
    const b = box[(x > 0 ? 0 : 2) + (z > 0 ? 0 : 1)];      // the same order as WHEELS
    b.x0 = Math.min(b.x0, x); b.x1 = Math.max(b.x1, x); b.z0 = Math.min(b.z0, z); b.z1 = Math.max(b.z1, z); b.y0 = Math.min(b.y0, y); b.n++; }
  if (box.some(b => b.n < 100)) return;      // not the model expected: leave it whole
  const W = box.map(b => {
    // The tread's width at each height up its lower half gives the circle (w² + y² is linear in y), clear of the
    // fender, which only covers the top. Its width across, from the same lower tread, gives the cylinder's length.
    const xg = (b.x0 + b.x1) / 2, zc = (b.z0 + b.z1) / 2, lo = new Float32Array(21).fill(1e9), hi = new Float32Array(21).fill(-1e9), zs = [];
    for (const { f } of src) for (let i = 0; i < f.length; i += 3) { const x = f[i], y = f[i + 1], z = f[i + 2], j = Math.floor((y - b.y0) * 100) - 4;
      if (Math.abs(z - zc) > (b.z1 - b.z0) / 2 + 0.05 || Math.abs(x - xg) > 0.5) continue;
      if (j >= 0 && j < 21) { lo[j] = Math.min(lo[j], x); hi[j] = Math.max(hi[j], x); }
      if (y < b.y0 + 0.12) zs.push(z); }
    let n = 0, sx = 0, sy = 0, sv = 0, syy = 0, syv = 0;
    lo.forEach((l, j) => { if (hi[j] < l) return; const y = b.y0 + (j + 4.5) / 100, h = (hi[j] - l) / 2, v = h * h + y * y; n++; sx += (hi[j] + l) / 2; sy += y; sv += v; syy += y * y; syv += y * v; });
    const k = (n * syv - sy * sv) / (n * syy - sy * sy), cx = sx / n, cy = k / 2, r = Math.sqrt((sv - k * sy) / n + cy * cy);
    zs.sort((a, c) => a - c);
    const z0 = zs[Math.floor(zs.length * 0.01)] - 0.015, z1 = zs[Math.floor(zs.length * 0.99)] + 0.015, out = zc > 0 ? 0.04 : -0.04;      // the hub's disc stands proud of the tread on the outboard side
    return { c: new THREE.Vector3(cx, cy, (z0 + z1) / 2), r: r * 1.015, hw: (z1 - z0) / 2, z0: z0 - (z0 + z1) / 2 + Math.min(0, out), z1: z1 - (z0 + z1) / 2 + Math.max(0, out) };
  });
  if (W.some(w => !(w.r > 0.25 && w.r < 0.5 && w.hw > 0.05 && w.hw < 0.25))) return;      // the fit failed: leave the model whole
  const inside = (f, i) => { for (let k = 0; k < 4; k++) { const w = W[k], dx = f[i * 3] - w.c.x, dy = f[i * 3 + 1] - w.c.y, dz = f[i * 3 + 2] - w.c.z; if (dx * dx + dy * dy < w.r * w.r && dz > w.z0 && dz < w.z1) return k; } return -1; };
  W.forEach(w => { const steer = new THREE.Group(), spin = new THREE.Group(); steer.position.copy(w.c); steer.add(spin); rover.add(steer); w.steer = steer; w.spin = spin; });
  const nm = new THREE.Matrix3();
  for (const { m, M, f } of src) {
    const g = m.geometry, idx = g.index ? g.index.array : null, nTri = (idx ? idx.length : g.attributes.position.count) / 3, vi = (t, k) => idx ? idx[t * 3 + k] : t * 3 + k;
    const keep = [[], [], [], [], []];      // triangles' vertex lists: wheels 0-3, then the rest
    // The fenders are painted orange in the scan and the tires are not: scraps of fender inside the cylinder (its edge
    // hugs the tread) stay on the body by their color, or they turned with the wheel.
    const map = m.material.map, img = map && map.image, uv = g.attributes.uv;
    let px = null; if (img && img.width && uv) { try { const cv = document.createElement('canvas'); cv.width = img.width; cv.height = img.height; const cx2 = cv.getContext('2d'); cx2.drawImage(img, 0, 0); px = cx2.getImageData(0, 0, img.width, img.height).data; } catch (e) { px = null; } }
    const orange = (a, b, c) => { if (!px) return false; let u = (uv.getX(a) + uv.getX(b) + uv.getX(c)) / 3, v = (uv.getY(a) + uv.getY(b) + uv.getY(c)) / 3; if (map.flipY) v = 1 - v;
      const X = Math.min(img.width - 1, Math.max(0, Math.floor((u - Math.floor(u)) * img.width))), Y = Math.min(img.height - 1, Math.max(0, Math.floor((v - Math.floor(v)) * img.height))), o = (Y * img.width + X) * 4;
      return px[o] - px[o + 2] > 60 && px[o] > 90; };
    for (let t = 0; t < nTri; t++) { const a = vi(t, 0), b = vi(t, 1), c = vi(t, 2), ka = inside(f, a);
      keep[ka >= 0 && inside(f, b) === ka && inside(f, c) === ka && !orange(a, b, c) ? ka : 4].push(a, b, c); }
    if (keep[4].length === nTri * 3) continue;      // nothing of a wheel in this part
    nm.getNormalMatrix(M);
    const build = (list, off) => {
      const out = new THREE.BufferGeometry(), nrm = g.attributes.normal;
      const pos = new Float32Array(list.length * 3); list.forEach((v, i) => { pos[i * 3] = f[v * 3] - off.x; pos[i * 3 + 1] = f[v * 3 + 1] - off.y; pos[i * 3 + 2] = f[v * 3 + 2] - off.z; });
      out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      if (nrm) { const a = new Float32Array(list.length * 3); list.forEach((v, i) => { P.fromBufferAttribute(nrm, v).applyMatrix3(nm).normalize(); a[i * 3] = P.x; a[i * 3 + 1] = P.y; a[i * 3 + 2] = P.z; }); out.setAttribute('normal', new THREE.BufferAttribute(a, 3)); }
      for (const name of Object.keys(g.attributes)) { if (name === 'position' || name === 'normal') continue; const at = g.attributes[name], s = at.itemSize, a = new Float32Array(list.length * s);
        list.forEach((v, i) => { a[i * s] = at.getX(v); if (s > 1) a[i * s + 1] = at.getY(v); if (s > 2) a[i * s + 2] = at.getZ(v); if (s > 3) a[i * s + 3] = at.getW(v); }); out.setAttribute(name, new THREE.BufferAttribute(a, s)); }
      return out;
    };
    const mk = (geo, parent) => { const n = new THREE.Mesh(geo, m.material); n.castShadow = n.receiveShadow = true; parent.add(n); };
    mk(build(keep[4], new THREE.Vector3()), rover);
    for (let k = 0; k < 4; k++) if (keep[k].length) mk(build(keep[k], W[k].c), W[k].spin);
    m.parent.remove(m);
  }
  WHEEL_PARTS.push(...W);
}
/* ── unloading the rover: it rode to the Moon folded into a package in Quadrant I of the descent stage, underside
   out, its chassis folded in three and its wheels tucked in. A D-ring pulled from the ladder released the top; the
   package tilted out, hinged at the bottom of the bay, and as tapes were paid out from the ground the aft chassis
   swung open and its wheels sprang out and locked, then the forward chassis and its wheels, and the rover was set
   down on its wheels. Here the scanned model is cut into those three chassis sections at their hinges (the center
   one carries the seats) and folded the same way. The seats and console rode folded flat, and the antennas, TV
   camera and radio relay unit were not on it at all: the crew fitted them once it stood on the surface. So
   everything above the chassis deck is hidden while it is stowed and comes back after it is set down. ── */
// HA, HF: the hinges, splitting the model into an aft (0.7 m), center (1.5 m) and forward (0.8 m) chassis, so the two ends fold
// back over the center side by side, as the real package did (it stood 1.5 m tall); HY: the fold line, at the top of the
// chassis (everything above it is the kit, stowed separately); HB: the bottom of the chassis, the package's pivot in its bay
const SEC = { ok: false, aft: new THREE.Group(), fwd: new THREE.Group(), HA: -0.8, HF: 0.7, HY: 0.05, HB: -0.4, KIT: 0.05, kit: [] };
function bakeGeo(g, f, nm, list, off) {      // the triangles in list, in rover space (f), less off
  const P = new THREE.Vector3(), out = new THREE.BufferGeometry(), a = new Float32Array(list.length * 3);
  list.forEach((v, i) => { a[i * 3] = f[v * 3] - off.x; a[i * 3 + 1] = f[v * 3 + 1] - off.y; a[i * 3 + 2] = f[v * 3 + 2] - off.z; });
  out.setAttribute('position', new THREE.BufferAttribute(a, 3));
  for (const name of Object.keys(g.attributes)) { if (name === 'position') continue; const at = g.attributes[name], s = at.itemSize, d = new Float32Array(list.length * s);
    list.forEach((v, i) => { if (name === 'normal') { P.fromBufferAttribute(at, v).applyMatrix3(nm).normalize(); d[i * 3] = P.x; d[i * 3 + 1] = P.y; d[i * 3 + 2] = P.z; return; }
      d[i * s] = at.getX(v); if (s > 1) d[i * s + 1] = at.getY(v); if (s > 2) d[i * s + 2] = at.getZ(v); if (s > 3) d[i * s + 3] = at.getW(v); });
    out.setAttribute(name, new THREE.BufferAttribute(d, s)); }
  return out;
}
function buildSections() {
  if (WHEEL_PARTS.length !== 4) return;
  rover.updateMatrixWorld(true);
  const inv = rover.matrixWorld.clone().invert(), P = new THREE.Vector3(), nm = new THREE.Matrix3(), list = [], zero = new THREE.Vector3();
  rover.traverse(o => { if (o.isMesh && !WHEEL_PARTS.some(w => { for (let q = o; q; q = q.parent) if (q === w.spin) return true; return false; })) list.push(o); });
  SEC.aft.position.set(SEC.HA, SEC.HY, 0); SEC.fwd.position.set(SEC.HF, SEC.HY, 0);
  const center = new THREE.Group(); rover.add(center, SEC.aft, SEC.fwd);
  const cells = new Map();      // the kit above the deck, in half-meter cells, so it can come out piece by piece
  for (const o of list) {
    const M = inv.clone().multiply(o.matrixWorld), g = o.geometry, pos = g.attributes.position, idx = g.index ? g.index.array : null, nTri = (idx ? idx.length : pos.count) / 3;
    nm.getNormalMatrix(M);
    const f = new Float32Array(pos.count * 3); for (let i = 0; i < pos.count; i++) { P.fromBufferAttribute(pos, i).applyMatrix4(M); f[i * 3] = P.x; f[i * 3 + 1] = P.y; f[i * 3 + 2] = P.z; }
    const parts = [[], [], []];      // aft, center, forward
    for (let t = 0; t < nTri; t++) { const v = [0, 1, 2].map(k => idx ? idx[t * 3 + k] : t * 3 + k), cx = (f[v[0] * 3] + f[v[1] * 3] + f[v[2] * 3]) / 3, cy = (f[v[0] * 3 + 1] + f[v[1] * 3 + 1] + f[v[2] * 3 + 1]) / 3;
      let sec = cx < SEC.HA ? 0 : cx > SEC.HF ? 2 : 1; const cz = (f[v[0] * 3 + 2] + f[v[1] * 3 + 2] + f[v[2] * 3 + 2]) / 3;
      for (const w of WHEEL_PARTS) if (Math.abs(cz) > 0.42 && cy > -0.9 && cy <= SEC.KIT && Math.abs(cx - w.c.x) < 0.56) sec = w.c.x > 0 ? 2 : 0;      // a wheel's fender and suspension go with its section
      if (cy > SEC.KIT) { const key = sec + '|' + Math.floor(cx / 0.45) + '|' + Math.floor(cy / 0.45) + '|' + Math.floor(cz / 0.45);
        if (!cells.has(key)) cells.set(key, { sec, parts: new Map(), n: 0, x: 0, y: 0, z: 0 });
        const c = cells.get(key); if (!c.parts.has(o)) c.parts.set(o, { f, nm: nm.clone(), l: [] }); c.parts.get(o).l.push(...v); c.n++; c.x += cx; c.y += cy; c.z += cz; }
      else parts[sec].push(...v); }
    parts.forEach((l, k) => { if (!l.length) return; const grp = [SEC.aft, center, SEC.fwd][k], n = new THREE.Mesh(bakeGeo(g, f, nm, l, k === 1 ? zero : grp.position), o.material); n.castShadow = n.receiveShadow = true; grp.add(n); });
    o.parent.remove(o);
  }
  for (const c of cells.values()) {      // each cell its own little group, pivoted at its middle so it can pop out
    const mid = new THREE.Vector3(c.x / c.n, c.y / c.n, c.z / c.n), grp = [SEC.aft, center, SEC.fwd][c.sec], g = new THREE.Group();
    g.position.copy(mid).sub(c.sec === 1 ? zero : grp.position); grp.add(g);
    for (const [o, { f, nm: m3, l }] of c.parts) { const n = new THREE.Mesh(bakeGeo(o.geometry, f, m3, l, mid), o.material); n.castShadow = n.receiveShadow = true; g.add(n); }
    SEC.kit.push({ m: g, y: mid.y, x: mid.x });
  }
  SEC.kit.sort((a, b) => Math.floor(a.y / 0.45) - Math.floor(b.y / 0.45) || a.x - b.x);      // from the deck up: seats and console, then the masts and what sits on them
  SEC.kit.forEach((k, i) => { k.t = 22.6 + i * Math.min(0.08, 4.2 / SEC.kit.length); });
  WHEEL_PARTS.forEach((w, k) => { (WHEELS[k].at.x > 0 ? SEC.fwd : SEC.aft).attach(w.steer); w.home = w.steer.position.clone(); });
  SEC.ok = true;
}
// 0 unfolded .. 1 folded: the aft and forward chassis under the center one, each pair of wheels turned flat against its section
// 0 unfolded .. 1 folded: the aft and forward chassis folded back over the center one, each pair of wheels swung in on
// its suspension to lie flat on the underside of its own section, side by side
function foldPose(fa, ff, wa, wf) {
  SEC.aft.rotation.z = -Math.PI * fa; SEC.fwd.rotation.z = Math.PI * ff;
  WHEEL_PARTS.forEach((w, k) => { const front = WHEELS[k].at.x > 0, t = front ? wf : wa, side = Math.sign(w.home.z);
    w.steer.rotation.x = side * Math.PI / 2 * t;
    w.steer.position.set(w.home.x + ((front ? 0.4 : -0.35) - w.home.x) * t, w.home.y + (-0.5 - w.home.y) * t, w.home.z + (side * 0.37 - w.home.z) * t); });
}
const INTRO = { on: false, t: 0, R0: 3.42, P: new THREE.Vector3(), d: new THREE.Vector3(), q: new THREE.Quaternion(), end: null, capT: '', pts: null };
const INTRO_CAPS = [
  [0.6, 5.2, '11 December 1972, Taurus–Littrow. The rover rode to the Moon folded into a package on the side of the lunar module.'],
  [5.4, 8.8, 'From the ladder, a D-handle releases the package. A tape pulled from the ground tilts it out, hinged at the bottom of its bay.'],
  [9.0, 12.4, 'Partway over, the aft chassis swings open on its springs and locks, and the rear wheels spring into place.'],
  [12.6, 16.4, 'With the rear wheels on the ground, a second tape lets the front down. The rover moves out from the lander as the forward chassis and its wheels unfold.'],
  [16.6, 19.8, 'On all four wheels at last, it is disconnected from the lander and pulled clear.'],
  [20.0, 22.4, 'Its 210 kg weigh no more here than 35 kg on Earth.'],
  [22.4, 27.4, 'The crew unfolds the seats and console, and fits the antennas, TV camera and radio relay unit.'],
  [27.6, 32.6, 'With front and rear wheels both steering, it could turn in a circle about 3 m in radius.'],
];
const INTRO_LEN = 32.8, BACK = [27.4, 32.4];      // BACK: it reverses away from the lander and swings round to face the time trial's ring
function startIntro() {
  INTRO.on = true; INTRO.t = 0; document.body.classList.add('intro'); OBJ.ring.visible = OBJ.line.visible = false; OBJ.line.material.uniforms.op.value = 0;
  if (!INTRO.pts) { INTRO.pts = []; rover.traverse(o => { if (!o.isMesh) return; const p = o.geometry.attributes.position, n = Math.min(60, p.count);      // a scatter of points on every part
    for (let i = 0; i < n; i++) INTRO.pts.push([o, new THREE.Vector3().fromBufferAttribute(p, Math.floor(i * p.count / n))]); }); }
  INTRO.d.set(1, 0, 1).normalize();      // Quadrant I: between the forward leg, under the hatch and the ladder, and the next leg round
  INTRO.P.set(LM.x + INTRO.d.x * INTRO.R0, LM.y + 1.35, LM.z + INTRO.d.z * INTRO.R0);      // the pivot at the bottom of the bay, on the package's outer face: its inner side then stands just off the stage wall, 2.1 m out
  const yaw = Math.atan2(INTRO.d.z, -INTRO.d.x);      // nose toward the lander: it comes out tail first
  INTRO.q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
  const x0 = LM.x + INTRO.d.x * (INTRO.R0 + SEC.HF + 0.9), z0 = LM.z + INTRO.d.z * (INTRO.R0 + SEC.HF + 0.9);      // pulled 0.9 m clear of where it came down
  // Then it backs out: straight for a meter, wheels steering into a smooth arc and back out of it, stopping square on to
  // the ring. Heading ψ along the reversing distance s: dψ/ds = κ, κ rising and falling as sin², at most 0.36 (2.8 m radius).
  // The total turn that leaves it pointing at the ring depends on where it ends, so it is found by a few passes.
  const A = 1.0, B = 0.6, n = 160, kap = (s, K, L) => s < A || s > L - B ? 0 : K * Math.sin(Math.PI * (s - A) / (L - A - B)) ** 2;
  let turn = 0, path = null, L = 9;
  for (let it = 0; it < 8; it++) {
    L = A + B + Math.max(2, 2 * Math.abs(turn) / 0.36); const K = 2 * turn / (L - A - B), ds = L / n;
    let x = x0, z = z0, psi = yaw; path = [[x, z, psi, 0]];
    for (let i = 1; i <= n; i++) { const k = kap((i - 0.5) * ds, K, L); psi += k * ds / 2; x -= Math.cos(psi) * ds; z += Math.sin(psi) * ds; psi += k * ds / 2; path.push([x, z, psi, kap(i * ds, K, L)]); }
    const want = Math.atan2(-(OBJ.z - z), OBJ.x - x); let dd = want - psi; dd = Math.atan2(Math.sin(dd), Math.cos(dd)); turn += dd;
  }
  INTRO.path = path; INTRO.L = L;
  const e = path[n]; INTRO.end = { x: e[0], z: e[1], yaw: e[2] };
  place(x0, z0, yaw);
}
function endIntro() {
  INTRO.on = false; document.body.classList.remove('intro'); $('cine-cap').classList.remove('on'); OBJ.ring.visible = OBJ.live = true; CREW.forEach(c => { c.visible = true; });
  foldPose(0, 0, 0, 0); SEC.kit.forEach(k => { k.m.visible = true; k.m.scale.setScalar(1); }); place(INTRO.end.x, INTRO.end.z, INTRO.end.yaw);
  camPos.copy(camera.position); camTgt.copy(car.p); camInit = true;      // the chase camera picks up from the last shot
  running = true;
}
const _iq = new THREE.Quaternion(), _iz = new THREE.Vector3(0, 0, 1), _ip = new THREE.Vector3(), _ic = new THREE.Vector3(), _it = new THREE.Vector3();
function stepIntro(dt) {
  const T = (INTRO.t += dt), sm = (a, b) => ss(a, b, T);
  if (T >= INTRO_LEN) return endIntro();
  // the chassis and wheels, each swinging out and snapping into its lock (a little past, then back)
  const snap = (a, b) => { const u = Math.max(0, Math.min(1, (T - a) / (b - a))); return u <= 0 ? 0 : 1 + 2.2 * Math.pow(u - 1, 3) + 1.2 * Math.pow(u - 1, 2); };
  foldPose(1 - snap(9.0, 10.4), 1 - snap(13.6, 15.2), 1 - snap(10.0, 11.0), 1 - snap(14.8, 15.8));
  SEC.kit.forEach(k => { const u = Math.min(1, (T - k.t) / 0.22); k.m.visible = u > 0; if (u > 0) k.m.scale.setScalar(1 + 2.7 * Math.pow(u - 1, 3) + 1.7 * Math.pow(u - 1, 2)); });      // one piece after another, each popping out with a little overshoot
  // Tilt (degrees from level, 90 upright in the bay, nose down): the D-handle lets the top out a few degrees, then each
  // pull on the first tape rotates it further about its pivot at the bottom of the bay, with pauses between pulls.
  let phi = 90 - 4 * sm(4.6, 5.3);
  for (const [a, b, d] of [[6.0, 7.4, 18], [8.0, 9.4, 20], [10.4, 11.8, 16], [12.6, 16.6, 40]]) phi -= d * sm(a, b);
  // Once the rear wheels are down they stay on the ground, and the second tape lets the pivot end down to its wheels;
  // meanwhile the rover moves out from the lander, then it is pulled the rest of the way clear.
  const lower = sm(12.6, 16.6);
  _ip.copy(INTRO.P).addScaledVector(INTRO.d, 0.6 * sm(12.8, 16.6) + 0.3 * sm(17.0, 19.0));
  _ip.y += (car.p.y + SEC.HB - INTRO.P.y) * lower;
  const rx = _ip.x + INTRO.d.x * 1.75, rz = _ip.z + INTRO.d.z * 1.75, lift = _ip.y - ground(rx, rz);      // the pivot above the ground the rear wheels stand on
  // the rear wheels' lowest point sits 1.73 m back and 0.38 m down from the pivot: on the ground when 1.73 sin φ − 0.38 cos φ = −lift
  const touch = (Math.asin(Math.max(-1, Math.min(1, -lift / 1.771))) + Math.atan2(0.38, 1.73)) * 180 / Math.PI;
  phi = Math.max(phi, touch, 0) * Math.PI / 180;
  _iq.copy(INTRO.q).multiply(new THREE.Quaternion().setFromAxisAngle(_iz, -phi));
  const pos = _ic.copy(_ip).sub(_it.set(SEC.HF, SEC.HB, 0).applyQuaternion(_iq));
  const k = sm(19.0, 20.0);      // settle onto the pose the drive starts from
  CREW.forEach(c => { c.visible = T > BACK[0] - 0.4; });      // aboard for the drive out, once the rover is set up
  if (T > BACK[0]) {      // reversing round to face the ring, front and rear wheels steering opposite ways
    const u = Math.min(1, (T - BACK[0]) / (BACK[1] - BACK[0])), sNow = INTRO.L * u * u * u * (u * (6 * u - 15) + 10), P = INTRO.path, n = P.length - 1;
    const f = Math.min(n, sNow / INTRO.L * n), i = Math.min(n - 1, Math.floor(f)), w = f - i, at = j => P[i][j] + (P[i + 1][j] - P[i][j]) * w;
    place(at(0), at(1), at(2)); car.steer = Math.atan(1.15 * at(3));
    const dS = sNow - (INTRO.s || 0); INTRO.s = sNow; WHEELS.forEach(wl => { wl.spin -= dS / WHEEL_R; });
  } else INTRO.s = 0;
  rover.position.copy(pos).lerp(car.p, k); rover.quaternion.copy(_iq).slerp(car.q, k);
  // nothing goes into the ground: whatever part of the rover is lowest is kept on or above it
  rover.updateMatrixWorld(true);
  let low = 1e9; for (const [m, v] of INTRO.pts) { _tmp.copy(v).applyMatrix4(m.matrixWorld); low = Math.min(low, _tmp.y - ground(_tmp.x, _tmp.z)); }
  if (low < 0.02) rover.position.y += 0.02 - low;
  // three shots: the lander from out on the plain, alongside the bay, then round behind the rover
  const side = _ip.set(-INTRO.d.z, 0, INTRO.d.x), c = INTRO.P;
  const a = _ic.set(c.x + INTRO.d.x * 13 + side.x * 6, c.y + 0.3, c.z + INTRO.d.z * 13 + side.z * 6);      // low on the plain, the lander against the black sky
  const b = _it.set(c.x + INTRO.d.x * 3.5 + side.x * 6.5, c.y - 0.2, c.z + INTRO.d.z * 3.5 + side.z * 6.5);
  const kb = sm(4, 8);
  camera.position.copy(a).lerp(b, kb);
  const cE = new THREE.Vector3(car.p.x + INTRO.d.x * 6 - side.x * 3, car.p.y + 0.4, car.p.z + INTRO.d.z * 6 - side.z * 3);
  camera.position.lerp(cE, sm(17, 23.5));
  if (T > BACK[0] - 0.6) {      // up and off to the side for the turn, away from the lander, then down behind it for the start
    const P = INTRO.path, m = P[P.length >> 1], e = P[P.length - 1], fx = Math.cos(e[2]), fz = -Math.sin(e[2]);
    let sx = -fz, sz = fx; if ((m[0] - LM.x) * sx + (m[1] - LM.z) * sz < 0) { sx = -sx; sz = -sz; }
    const H = _tmp.set(m[0] + sx * 9 - fx * 3, groundBase(m[0], m[1]) + 5, m[1] + sz * 9 - fz * 3);
    camera.position.lerp(H, sm(BACK[0] - 0.6, BACK[0] + 1.6));
    const D = pov === 1 ? 16 : 7.5, lift = pov === 1 ? 0.35 : 0, pc = Math.cos(ORB.pitch + lift) * D;
    camera.position.lerp(_tmp.set(e[0] - fx * pc, ground(e[0], e[1]) + 0.8 + 1.6 + Math.sin(ORB.pitch + lift) * D, e[1] - fz * pc), sm(BACK[1] - 1.8, INTRO_LEN));
  }
  camera.position.y = Math.max(camera.position.y, ground(camera.position.x, camera.position.z) + 0.45);
  camera.lookAt(_ip.copy(c).add(_it.set(0, 1.0 - 0.4 * sm(4, 10), 0)).lerp(_tmp.copy(rover.position).add(_it.set(0, 0.4, 0)), sm(6, 12)));
  sun.position.copy(rover.position).addScaledVector(SUN, 120); sun.target.position.copy(rover.position);
  let cap = ''; for (const [t0, t1, txt] of INTRO_CAPS) if (T >= t0 && T < t1) cap = txt;
  if (cap !== INTRO.capT) { INTRO.capT = cap; const el = $('cine-cap'); el.classList.remove('on'); if (cap) { el.textContent = cap; void el.offsetWidth; el.classList.add('on'); } }
}
/* ── site cards: a few places worth stopping, marked in the view; tap one for what happened there. Every figure is
   from NASA (the Apollo 17 Lunar Surface Journal and Preliminary Science Report), LROC, or the papers named. ── */
const SITES = [
  { at: () => [LM.x, LM.z, 8.5], name: 'Challenger', sub: 'Apollo 17 landing site · 11 December 1972', body: [
    'Gene Cernan and Harrison Schmitt landed here in the lunar module Challenger, less than 200 m from their target, while Ronald Evans circled overhead in the command module America.',
    'They stayed about 75 hours, longer than any other Apollo crew, and spent more than 22 hours outside on three moonwalks. With the rover they covered about 35 km and brought home about 110 kg of rock and soil, more than any other mission.',
    'On the first moonwalk part of a rear fender was knocked off, and the wheels sprayed the crew and the rover with dust. Overnight they made a new one from laminated maps, duct tape and clamps.',
    'It was the last of the Apollo landings.'] },
  { at: () => [BOULDER.x, BOULDER.z, 7.5], name: 'Tracy’s Rock', sub: 'Stop 6 · the foot of the North Massif', body: [
    'This boulder broke loose high on the North Massif and rolled and bounced about a kilometer down the slope, leaving a trail still visible from orbit, then split into five pieces where it stopped. Put back together it would be about 18 by 10 by 6 m. Gene Cernan named it for his daughter, Tracy.',
    '<b>Troctolite 76535.</b> Among the rock fragments the crew raked from the soil here was a coarse-grained crystalline rock about 4.2 to 4.3 billion years old. It formed slowly, deep in the young Moon’s crust, and was later dug out by impacts.',
    'In 2009 researchers at MIT found that it is weakly magnetized, and that its magnetism dates from when it crystallized. That points to a molten, churning core that gave the young Moon a magnetic field, as Earth’s core does today. A 2016 study supported the result.'] },
  { at: () => [VAN.x, VAN.z, 5], name: 'Van Serg crater', sub: 'Stop 9 · the last drive', body: [
    'A crater about 100 m across, blasted through the dark soil that covers the valley floor. The crew came here on the third moonwalk to work out how it formed and to sample the dark material and what lies beneath it.',
    'Its rim is strewn with angular blocks thrown out by the impact, mostly smaller than 30 cm, with a few boulders up to about 2 m across. A piece they broke from a boulder on the rim, sample 79115, turned out to be regolith breccia: loose lunar soil welded into rock by the shock of an impact.',
    '<b>What they found.</b> Harrison Schmitt called it a fresh impact crater with a blocky rim as soon as they arrived. Its shape bears that out: a raised rim of blocks, benches stepping down the inner walls, and a mound of blocks on the floor. Nearly every rock they sampled was the same dark, crumbly breccia, which the geologists read as the valley floor’s own soil, hardened into rock by the impact and thrown out of the crater.',
    '<b>The name.</b> Schmitt named it for Hugh McKinstry (1896–1961), a Harvard geology professor who wrote scientific satires under the pen name Nicholas Vanserg.'] },
  { at: () => [SHORTY.x, SHORTY.z, 6], name: 'Shorty crater', sub: 'Stop 4 · the second drive · the orange soil', body: [
    'On the second moonwalk Harrison Schmitt, the only geologist to walk on the Moon, looked down at the rim of this crater and saw orange soil. Shorty is about 110 m across and up to 14 m deep.',
    'Almost all of that soil is tiny beads and broken pieces of orange glass, colored by titanium. They were sprayed out in fire-fountain eruptions about 3.6 billion years ago, buried under a later lava flow, and brought back up by the impact that made the crater. In the core tube the crew drove into the rim, the orange gave way to black beads: the same glass, crystallized as it cooled.',
    'Decades later the beads changed ideas about the Moon itself. In 2008 a team led by Alberto Saal found traces of water in these volcanic glasses, and in 2011 tiny pockets of melt sealed inside crystals in this very soil showed that the Moon’s magma had held about a hundred times more water than earlier studies suggested.',
    '<i>The real Shorty is about 4.3 km west of the lander. It is drawn here at its true size but much closer, so the drive to it is short.</i>'] },
  // Discoveries: rocks and soils brought back, each where it was found. Masses and descriptions from the Lunar Sample
  // Compendium and NASA's Astromaterials 3D; img, when given, is a photograph in img/lrv/ (shown only if it loads).
  { kind: 'find', at: () => [BOULDER.x - 10, BOULDER.z + 9, 2.5], label: '76535 · troctolite', name: '76535,0', sub: 'Apollo Lunar Collection · Apollo 17 · Station 6', body: [
    'A troctolite: a coarse-grained igneous rock made almost entirely of large grains of pale green olivine and white plagioclase feldspar. It weighs about 156 g and came back in a rake sample from the soil at Station 6, the stop at the split boulder, on the third moonwalk.',
    'It crystallized deep in the young Moon’s crust about 4.2 to 4.3 billion years ago, slowly enough to grow its large, interlocking grains, and was later dug out by impacts.',
    'Few rocks have been studied so closely. In 2009 researchers at MIT found it weakly magnetized since it formed, evidence that the young Moon had a magnetic field from a molten core. In 2021, chemical differences still preserved inside its crystals showed it must have cooled within about 20 million years, far faster than the more than 100 million years once thought.'] },
  { kind: 'find', at: () => { const dx = -0.65, dz = -0.76; return [VAN.x + dx * 48, VAN.z + dz * 48, 2.5]; }, label: '79115 · breccia', name: '79115,0', sub: 'Apollo Lunar Collection · Apollo 17 · Station 9', body: [
    'Regolith breccia: loose lunar soil and broken rock welded into stone by the shock of an impact. On the third moonwalk the crew broke this 346 g piece off the top of a fractured boulder on the rim of Van Serg crater, hoping it would tell how and when the crater formed. Its partner, 79135, 2.3 kg, came from the bottom of the same boulder.',
    'About 60% of it is a fine matrix of mineral debris and glass. Mixed through it are fragments of highland rock, mare basalt and other basalts, and beads of orange volcanic glass like those at Shorty crater: soil from across the valley, swept up and pressed together.'] },
  { kind: 'find', at: () => [SHORTY.x + Math.cos(2.4) * SHORTY.R * 1.05, SHORTY.z + Math.sin(2.4) * SHORTY.R * 1.05, 2.5], label: '74220 · orange soil', name: '74220,0', sub: 'Apollo Lunar Collection · Apollo 17 · Station 4', body: [
    'The orange soil itself: 1,180 g scooped from the rim of Shorty crater on the second moonwalk. With the samples from the trench Harrison Schmitt dug across the orange zone and the core tube driven beside it, the set comes to about 4.6 kg.',
    'About 99% of it is beads and broken bits of orange glass; the rest is mostly fragments of basalt. Each bead is a droplet of lava sprayed from a fire fountain about 3.6 billion years ago and frozen to glass in flight. The color comes from titanium.',
    'The beads still hold traces of the gases that drove the eruption. In 2008 and 2011 they gave the first strong evidence of water inside the Moon.'] },
];
// Photographs for the cards, all NASA (public domain), in lrv/img/: each [file, caption]
const SITE_IMGS = {
  'Tracy’s Rock': [['img/tracys-rock.jpg', 'Harrison Schmitt beside the boulder at Station 6, with the front of the rover at left. AS17-146-22294, photographed by Gene Cernan, 13 December 1972. NASA.']],
  'Van Serg crater': [['img/van-serg.jpg', 'Harrison Schmitt in the rover at Station 9, Van Serg crater, on the third moonwalk. AS17-134-20454, photographed by Gene Cernan, 13 December 1972. NASA.']],
  'Shorty crater': [['img/shorty.jpg', 'Looking into Shorty crater from Station 4, with the orange soil on its rim. AS17-137-20992, 12 December 1972. NASA.']],
  '76535,0': [['img/76535.jpg', 'Sample 76535, photographed at NASA’s Manned Spacecraft Center (now Johnson Space Center) in 1973. NASA photo S73-19456.']],
  '79115,0': [['img/79115.jpg', 'Sample 79115, photographed at NASA’s Manned Spacecraft Center (now Johnson Space Center) in 1973. NASA photo S73-15396.']],
  '74220,0': [['img/orange-soil.jpg', 'The orange soil at Station 4, Shorty crater. The tripod is the gnomon, the crew’s reference for scale, sun angle and color. AS17-137-20990, 12 December 1972, color gently enhanced. NASA.'],
    ['img/orange-beads.jpg', 'Orange glass beads and fragments from the soil, 0.02 to 0.045 mm across, magnified 160 times. NASA photo S73-15171, January 1973.']],
};
SITES.forEach(st => { st.imgs = SITE_IMGS[st.name] || []; });
const _sp = new THREE.Vector3();
/* ── the map: a shaded relief of the drivable square (drawn once from the ground grid), your path on it (kept on this
   device), the time trial's loop, the lander, and the names on the crew's traverse maps. Samples show as hints until
   their card has been opened. ── */
const MAP = { relief: null, trail: (() => { try { return JSON.parse(localStorage.getItem('lrv-trail')) || []; } catch (e) { return []; } })(), seen: (() => { try { return new Set(JSON.parse(localStorage.getItem('lrv-found')) || []); } catch (e) { return new Set(); } })(), t: 0, saveT: 0, open: false };
const MAP_NAMES = () => [
  [LM.x + 22, LM.z + 30, 'Challenger'], [CPS[0].x, CPS[0].z - 22, 'Station 6'], [CPS[1].x - 10, CPS[1].z - 20, 'Station 8'],
  [VAN.x, VAN.z - SHORTY.R - 8, 'Station 9 · Van Serg'], [SHORTY.x, SHORTY.z - SHORTY.R - 12, 'Shorty'], [CX, CZ - HALF + 70, 'North Massif'],
];
const MAP_EDGE = [['Sculptured Hills →', 1, 0.42], ['← South Massif', -1, 0.96]];      // beyond the square: [label, side (1 east, −1 west), how far down]
function reliefCanvas() {
  const S = 340, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), im = x.createImageData(S, S);
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
    const gx = CX - HALF + (i + 0.5) * 2 * HALF / S, gz = CZ - HALF + (j + 0.5) * 2 * HALF / S, e = 2 * HALF / S;
    const dx = groundBase(gx + e, gz) - groundBase(gx - e, gz), dz = groundBase(gx, gz + e) - groundBase(gx, gz - e);
    const v = Math.max(16, Math.min(215, 108 - dx / e * 150 - dz / e * 38)), o = (j * S + i) * 4;      // lit from the east, like the valley under this Sun
    im.data[o] = v; im.data[o + 1] = v * 0.98; im.data[o + 2] = v * 0.93; im.data[o + 3] = 255;
  }
  x.putImageData(im, 0, 0); return c;
}
function drawMap(cv, cx, cz, span, big) {      // span: meters across the canvas
  const dpr = Math.min(2, devicePixelRatio || 1), W = Math.round(cv.clientWidth * dpr); if (!W) return;
  if (cv.width !== W) { cv.width = cv.height = W; }
  const x = cv.getContext('2d'), k = W / span, P = (wx, wz) => [(wx - cx) * k + W / 2, (wz - cz) * k + W / 2];
  if (!MAP.relief) MAP.relief = reliefCanvas();
  x.fillStyle = '#1a1916'; x.fillRect(0, 0, W, W);
  const [rx, ry] = P(CX - HALF, CZ - HALF); x.drawImage(MAP.relief, rx, ry, 2 * HALF * k, 2 * HALF * k);
  x.lineJoin = x.lineCap = 'round';
  x.strokeStyle = 'rgba(124,199,242,.55)'; x.lineWidth = Math.max(1, 1.2 * dpr); x.setLineDash([2 * dpr, 4 * dpr]); x.beginPath();      // the third drive
  for (let i = 0; i < COURSE.length; i += 6) { const [a, b] = P(COURSE[i], COURSE[i + 1]); i ? x.lineTo(a, b) : x.moveTo(a, b); } x.stroke(); x.setLineDash([]);
  x.strokeStyle = 'rgba(230,204,133,.9)'; x.lineWidth = Math.max(1.5, (big ? 2 : 1.6) * dpr); x.beginPath();      // where you have driven
  let pen = false; for (const q of MAP.trail) { if (!q) { pen = false; continue; } const [a, b] = P(q[0], q[1]); pen ? x.lineTo(a, b) : x.moveTo(a, b); pen = true; } x.stroke();
  const fs = (big ? 11 : 8) * dpr; x.font = `600 ${fs}px Montserrat, sans-serif`; x.textAlign = 'center';
  for (const st of SITES) if (st.kind === 'find') {      // samples: a hint until found
    const [wx, wz] = st.at(), [a, b] = P(wx, wz), seen = MAP.seen.has(st.name);
    x.beginPath(); x.arc(a, b, (big ? 5 : 3.2) * dpr, 0, 6.3); x.strokeStyle = '#7CC7F2'; x.lineWidth = 1.3 * dpr; x.stroke(); if (seen) { x.fillStyle = '#7CC7F2'; x.fill(); }
    if (big) { x.fillStyle = 'rgba(201,189,151,.95)'; x.fillText(seen ? st.name.split(',')[0] : '?', a, b + 17 * dpr); }
  }
  if (big || span < 600) for (const [wx, wz, t] of MAP_NAMES()) { const [a, b] = P(wx, wz); x.fillStyle = 'rgba(0,0,0,.55)'; x.fillText(t, a + dpr, b + dpr); x.fillStyle = '#E6CC85'; x.fillText(t, a, b); }
  if (big) for (const [t, side, f] of MAP_EDGE) { x.textAlign = side > 0 ? 'right' : 'left'; x.fillStyle = 'rgba(201,189,151,.8)'; x.fillText(t, side > 0 ? W - 8 * dpr : 8 * dpr, W * f); }
  const [la, lb] = P(LM.x, LM.z); x.fillStyle = '#F2E4BE'; x.fillRect(la - 2.5 * dpr, lb - 2.5 * dpr, 5 * dpr, 5 * dpr);      // the lander
  const [ca, cb] = P(car.p.x, car.p.z), hd = Math.atan2(-_fw.z, _fw.x);      // you, pointing the way you face
  x.save(); x.translate(ca, cb); x.rotate(-hd); x.beginPath(); x.moveTo(7 * dpr, 0); x.lineTo(-4.5 * dpr, 4 * dpr); x.lineTo(-2.5 * dpr, 0); x.lineTo(-4.5 * dpr, -4 * dpr); x.closePath();
  x.fillStyle = '#E6CC85'; x.strokeStyle = '#0d0a18'; x.lineWidth = 1.2 * dpr; x.fill(); x.stroke(); x.restore();
}
function mapTick(dt) {
  const L = MAP.trail[MAP.trail.length - 1];
  if (!CRASH.on && (!L || Math.hypot(car.p.x - L[0], car.p.z - L[1]) > 3)) { if (L && Math.hypot(car.p.x - L[0], car.p.z - L[1]) > 30) MAP.trail.push(null); MAP.trail.push([+car.p.x.toFixed(1), +car.p.z.toFixed(1)]); if (MAP.trail.length > 6000) MAP.trail.splice(0, 1000); }      // a gap after a jump back
  if ((MAP.saveT += dt) > 5) { MAP.saveT = 0; try { localStorage.setItem('lrv-trail', JSON.stringify(MAP.trail)); } catch (e) { /* not kept */ } }
  if ((MAP.t += dt) > 0.2) { MAP.t = 0; drawMap($('minimap'), car.p.x, car.p.z, 260, false); }
}
let mapRun = false;
$('minimap').addEventListener('click', () => { if (INTRO.on || REPLAY.on || BRIEF.on) return; mapRun = running; running = false; $('mapsheet').classList.add('on'); requestAnimationFrame(() => drawMap($('mapbig'), CX, CZ, 2 * HALF, true)); });
$('mapsheet-close').addEventListener('click', () => { $('mapsheet').classList.remove('on'); running = mapRun; });
let siteRun = false;
function openSite(st) {
  $('sc-t').textContent = st.name; $('sc-s').textContent = st.sub;
  const fig = ([src, cap]) => `<figure><img src="${src}" alt="" loading="lazy" onerror="this.parentNode.remove()"><figcaption>${cap}</figcaption></figure>`;
  $('sc-b').innerHTML = (st.imgs[0] ? fig(st.imgs[0]) : '') + st.body.map(t => `<p>${t}</p>`).join('') + st.imgs.slice(1).map(fig).join('');      // the first picture leads, any others follow the text
  $('sitecard').classList.add('on'); siteRun = running; running = false;
  if (st.kind === 'find' && !MAP.seen.has(st.name)) { MAP.seen.add(st.name); try { localStorage.setItem('lrv-found', JSON.stringify([...MAP.seen])); } catch (e) { /* not kept */ } }
}
$('sc-close').addEventListener('click', () => { $('sitecard').classList.remove('on'); running = siteRun; });
SITES.forEach(st => { const b = document.createElement('button'); b.className = st.kind === 'find' ? 'site find' : 'site'; b.innerHTML = `<i></i>${st.label || st.name}`; b.addEventListener('click', () => openSite(st)); $('sites').appendChild(b); st.el = b; });
function siteMarks() {      // shown when near, or when looked at fairly directly; fading out with distance and off to the side
  camera.updateMatrixWorld();      // this frame's view (lookAt refreshes the matrix before it turns the camera)
  for (const st of SITES) {
    const [x, z, h] = st.at(), d = Math.hypot(x - camera.position.x, z - camera.position.z);
    _sp.set(x, ground(x, z) + h, z).project(camera);
    const aim = Math.hypot(_sp.x, _sp.y * 0.8), far = st.kind === 'find' ? 150 : 280;
    const o = _sp.z < 1 && Math.abs(_sp.x) < 1.05 && Math.abs(_sp.y) < 1.05 ? (d < 35 ? 1 : ss(far, far * 0.55, d) * ss(0.5, 0.28, aim)) : 0;
    st.el.style.display = o > 0.02 ? 'flex' : 'none';
    if (o > 0.02) { st.el.style.left = ((_sp.x + 1) / 2 * innerWidth).toFixed(1) + 'px'; st.el.style.top = ((1 - _sp.y) / 2 * innerHeight).toFixed(1) + 'px'; st.el.style.opacity = o.toFixed(2); }
  }
}
function turnWheels() { WHEEL_PARTS.forEach((w, k) => { w.steer.rotation.y = -car.steer * WHEELS[k].steer; w.spin.rotation.z = -WHEELS[k].spin; }); }

/* ── the crew: NASA's astronaut model (NASA 3D Resources, public domain), its suit texture given the weave of Beta cloth
   (models/astronaut.glb, rebuilt by src/lrv-game/astronaut.md). The scan stands with its arms out; here its legs are bent
   into a seat (the shins folded back at the knee, then everything below the hip swung forward, each bend blended over a
   few centimeters, the way a pressure suit creases) and the rest is a skinned mesh on ten bones: torso, thighs, shins,
   upper arms, forearms and the backpack. Gray lunar dust works up the boots and lower legs. Gene Cernan drives from the
   left seat (his suit carries the commander's red stripes), his right hand always on the T-handle of the hand controller
   between the seats, his left on the edge of his seat; Harrison Schmitt rides on the right, holding on to his seat with
   both hands. Each rides the bumps on his own: the torso a soft, damped pendulum that tries to stay upright when the rover
   tilts, the body lifting off the seat cushion over a hard bump until the seat belt holds it. ── */
const CREW = [], CREW_JOINTS = [], CREW_SEG = [];      // CREW_JOINTS: [parent segment, child segment, where they meet]
const CREW_SEATS = [[-0.66, 0.16, -0.33], [-0.66, 0.16, 0.33]];      // where each seat is, rover frame (x forward, z to the right)
const HAND_CTRL = new THREE.Vector3(-0.3, 0.4, 0);      // the grip of the hand controller, rover frame
// Segments: 0 torso and head, 1 2 thighs, 3 4 shins, 5 6 upper arms, 7 backpack, 8 9 forearms (odd-even: right, left).
// The arm's joints in the scan's standing frame, relative to the seat: shoulder, elbow, the middle of the glove.
const ARM = { S: new THREE.Vector3(0.26, 0.435, -0.07), E: new THREE.Vector3(0.44, 0.334, -0.08), H: new THREE.Vector3(0.72, 0.149, -0.093) };      // after prepSuit: arms 30° below level, wrist at (0.64, 1.15 m), glove (0.72, 1.08 m)
const armBones = sd => sd < 0 ? [5, 8] : [6, 9];
/* The suits: "Space suit" by IgorSholopov (sketchfab.com/3d-models/space-suit-bdc42075279746dab4c8b54784276a20, CC BY 4.0),
   an Apollo A7L, its textures re-encoded and its mesh compressed (src/lrv-game/astronaut.md). Changed here at load
   (prepSuit): the arms raised from its A-pose to level, the shoulders and chest broadened and the cloth puffed out, as
   a pressurized A7L stood (the model's are slim), and the portable life support system on the back with the oxygen
   purge system on top and the remote control unit on the chest, which the model lacks, at their published sizes
   (about 66 × 46 × 25 cm for the backpack). The model's own textures carry the cloth, folds and markings; gray lunar dust
   is ground into the lower legs (vertex colors, buildCrew). */
const toFloat = g => { for (const k in g.attributes) { const a = g.attributes[k]; if (a.array instanceof Float32Array && !a.normalized) continue;
  const f = new Float32Array(a.count * a.itemSize); for (let i = 0; i < a.count; i++) for (let c = 0; c < a.itemSize; c++) f[i * a.itemSize + c] = a.getComponent(i, c); g.setAttribute(k, new THREE.BufferAttribute(f, a.itemSize)); } return g; };
function prepSuit(src) {
  src.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(src), k = 1.85 / (box.max.y - box.min.y), cx = (box.min.x + box.max.x) / 2, out = new THREE.Group();
  let zb = new THREE.Box3(); src.traverse(o => { if (o.isMesh && o.material.name === 'base_002') zb.expandByObject(o); }); const cz = (zb.min.z + zb.max.z) / 2;
  const PIV = [0.22, 1.38], ROT = [0.23, 1.43], TH = Math.PI / 12, ANG = Math.PI / 4, SH = 0.01,      // ANG: the arm's slant in the model; TH: how far it is raised (to 30° below level, near how it is used, so the skin bends less)
         // the arm's line from the armpit; it turns about the top of the shoulder, so the shoulder pad rises with it
    V = new THREE.Vector3(), N = new THREE.Vector3();
  src.traverse(o => {
    if (!o.isMesh) return;
    const g = toFloat(o.geometry.clone()); g.applyMatrix4(o.matrixWorld); g.translate(-cx, -box.min.y, -cz); g.scale(k, k, k);      // metres, soles at 0, the suit centred
    const p = g.attributes.position, n = g.attributes.normal, cloth = o.material.name === 'base_002', fitted = /buttons|vents/.test(o.material.name), hard = /helm|gold/.test(o.material.name);      // fitted: the connectors and straps on the cloth
    for (let i = 0; i < p.count; i++) {
      V.fromBufferAttribute(p, i); N.fromBufferAttribute(n, i); const sd = Math.sign(V.x) || 1;
      // the arm: points along the line from the shoulder down to the hand, raised to level, blended in at the armpit
      const dx = Math.abs(V.x) - PIV[0], dy = V.y - PIV[1], t = dx * Math.cos(ANG) - dy * Math.sin(ANG), r = Math.abs(dx * Math.sin(ANG) + dy * Math.cos(ANG));
      // outside the torso only: the torso's side below the armpit lies close to that slanting line too, and used to go up with the arm and stretch
      const out = V.y > 1.36 ? 1 : ss(0.2, 0.235, Math.abs(V.x));
      const wArm = V.y > 0.86 && !hard ? ss(-0.04, 0.07, t) * ss(0.12, 0.085, r) * ss(1.62, 1.5, V.y) * out : 0;
      if (wArm > 0) { const a = TH * wArm * sd, c = Math.cos(a), s = Math.sin(a), lx = V.x - sd * ROT[0], ly = V.y - ROT[1];
        V.x = sd * ROT[0] + lx * c - ly * s; V.y = ROT[1] + lx * s + ly * c; const nx = N.x * c - N.y * s; N.y = N.x * s + N.y * c; N.x = nx; }
      // the shoulders and chest broadened (the arms move out with them), the cloth filled out
      const band = ss(0.98, 1.28, V.y) * ss(1.62, 1.5, V.y);
      if (wArm > 0.5) V.x += sd * SH * band; else if (!hard) { V.x *= 1 + (SH / PIV[0]) * band; V.z *= 1 + 0.03 * band; }
      if (cloth) V.addScaledVector(N, 0.01 * (1 - wArm) + 0.006 * wArm);      // filled out a little: the arms barely (more read as bloated)
      else if (fitted) { const l = Math.hypot(V.x * 0.3, V.z) || 1; V.x += V.x * 0.3 / l * 0.018; V.z += V.z / l * 0.018; }      // out with the cloth beneath
      p.setXYZ(i, V.x, V.y, V.z); n.setXYZ(i, N.x, N.y, N.z);
    }
    const mesh = new THREE.Mesh(g, o.material); out.add(mesh);
  });
  // the backpack (PLSS), the oxygen purge system on top, and the remote control unit on the chest: beta-cloth covers
  const cover = new THREE.MeshStandardMaterial({ color: 0xd9d4c8, roughness: 0.9, name: 'pack' }), unit = new THREE.MeshStandardMaterial({ color: 0xc9c5bc, roughness: 0.7, name: 'rcu' });
  const add = (w, h, d, r, x, y, z, m, addon) => { const g = new RoundedBoxGeometry(w, h, d, 3, r); g.translate(x, y, z); const mesh = new THREE.Mesh(g, m); if (addon) mesh.userData.addon = addon; out.add(mesh); };
  add(0.47, 0.64, 0.25, 0.05, 0, 1.3, -0.315, cover, 'pack');
  add(0.44, 0.2, 0.21, 0.05, 0, 1.73, -0.305, cover, 'pack');
  add(0.21, 0.14, 0.09, 0.02, 0, 1.2, 0.215, unit, null);
  return out;
}
function crewMaterial(src) {      // the model's own material, with the dust in the vertex colors and a touch dingier
  const m = src.clone(); m.vertexColors = true; m.color.multiplyScalar(0.93); return m;
}
function cmdrMaterial(src) {      // Gene Cernan's: the commander's red bands on arms and legs and a red stripe across the helmet (Apollo 13 on)
  const m = src.clone();
  m.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec3 sp;\nvarying vec3 vSp;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvSp = sp;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vSp;').replace('#include <color_fragment>', `#include <color_fragment>
      { float ax = abs(vSp.x), y = vSp.y, arm = step(1.25, y) * step(.3, ax);
        float red = arm * smoothstep(.025, .015, abs(ax - .4)) + step(y, .9) * step(.5, y) * smoothstep(.025, .015, abs(y - .66)) + step(1.74, y) * smoothstep(.02, .012, ax);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.5, .04, .04), clamp(red, 0., 1.) * .9); }`);
  };
  m.customProgramCacheKey = () => 'cmdr-' + src.name;
  return m;
}
let VISOR = null;
function visorMaterial() {
  if (VISOR) return VISOR;
  const c = document.createElement('canvas'); c.width = 256; c.height = 128; const x = c.getContext('2d'), g = x.createLinearGradient(0, 0, 0, 128);
  g.addColorStop(0, '#000'); g.addColorStop(0.47, '#050505'); g.addColorStop(0.5, '#9a978f'); g.addColorStop(0.62, '#7d7a73'); g.addColorStop(1, '#55534e');      // black sky over the bright gray ground
  x.fillStyle = g; x.fillRect(0, 0, 256, 128); x.fillStyle = '#fff'; x.beginPath(); x.arc(70, 40, 5, 0, 6.3); x.fill();      // and the Sun
  const t = new THREE.CanvasTexture(c); t.mapping = THREE.EquirectangularReflectionMapping; t.colorSpace = THREE.SRGBColorSpace;
  const env = new THREE.PMREMGenerator(renderer).fromEquirectangular(t).texture; t.dispose();
  return (VISOR = new THREE.MeshStandardMaterial({ color: 0xd8a640, metalness: 1, roughness: 0.14, envMap: env, envMapIntensity: 1.25, name: 'visor' }));      // gold over a mirror
}
// The arm's axis in the standing suit (from ARM, before the crew is scaled): along it from the shoulder, and off it
const AX = (() => { const sx = ARM.S.x, sy = ARM.S.y + 0.93, dx = ARM.H.x - sx, dy = ARM.H.y + 0.93 - sy, l = Math.hypot(dx, dy);
  return { sx, sy, ux: dx / l, uy: dy / l, le: Math.hypot(ARM.E.x - sx, ARM.E.y - ARM.S.y) }; })();
const armAx = (ax, y) => { const dx = ax - AX.sx, dy = y - AX.sy; return [dx * AX.ux + dy * AX.uy, Math.abs(dx * AX.uy - dy * AX.ux)]; };
const armAt = (ax, y) => { if (ax < 0.24 && y < 1.32) return false;      // the torso's side under the arm stays torso
  const [al, pe] = armAx(ax, y); return al > -0.05 && pe < (al > 0.35 ? 0.2 : 0.15); };
function buildCrew(src) {
  src.updateMatrixWorld(true);
  const box = new THREE.Box3(); src.traverse(o => { if (o.isMesh && !o.userData.addon) box.expandByObject(o); });      // the suit itself, not the backpack built on
  const k = 1.85 / (box.max.y - box.min.y), V = new THREE.Vector3(), Q = new THREE.Quaternion(), E = new THREE.Euler(), NV = new THREE.Vector3();
  const hipY = 0.93, kneeY = 0.5, cz = (box.min.z + box.max.z) / 2 * k;
  const rotAbout = (v, piv, e) => v.sub(piv).applyQuaternion(Q.setFromEuler(E.set(e[0], e[1], e[2]))).add(piv);
  const parts = [], segOf = [];
  src.traverse(o => {
    if (!o.isMesh) return;
    const g = o.geometry.clone(); g.applyMatrix4(o.matrixWorld); g.translate(-(box.min.x + box.max.x) / 2, -box.min.y, 0); g.scale(k, k, k);
    const p = g.attributes.position, nrm = g.attributes.normal, col = new Float32Array(p.count * 3), seg = new Uint8Array(p.count), si = new Uint16Array(p.count * 4), sw = new Float32Array(p.count * 4), sp = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) {
      V.fromBufferAttribute(p, i); const y0 = V.y, ax = Math.abs(V.x), r = V.x < 0 ? 0 : 1; sp.set([V.x, y0, V.z - cz], i * 3);      // where it is on the standing suit, for the details
      const w = [];      // [bone, weight]: blended across the waist, knees, shoulders and elbows, so the suit bends instead of breaking
      if (o.userData.addon === 'pack') w.push([7, 1]);
      else if (armAt(ax, y0)) {      // along the arm's own axis, from the shoulder: blended in at the shoulder and the elbow
        const [al, pe] = armAx(ax, y0), wa = al > 0.35 ? 1 : ss(-0.03, 0.05, al) * ss(0.15, 0.11, pe), wf = ss(AX.le - 0.04, AX.le + 0.04, al);      // the torso's side below the arm (under 1.29 m) stays torso: tied to the arm, it was dragged into a sheet when the arm came down      // past the armpit it is all arm, the drooping fingertips too
        w.push([0, 1 - wa], [5 + r, wa * (1 - wf)], [8 + r, wa * wf]);
      } else {
        const wt = ss(hipY - 0.06, hipY + 0.1, y0), wk = ss(kneeY - 0.05, kneeY + 0.05, y0);
        w.push([0, wt], [1 + r, (1 - wt) * wk], [3 + r, (1 - wt) * (1 - wk)]);
      }
      let best = 0; w.forEach(([b, x], j) => { si[i * 4 + j] = b; sw[i * 4 + j] = x; if (x > w[best][1]) best = j; }); seg[i] = w[best][0];
      const dust = Math.max(ss(0.66, 0.06, y0), 0.45 * ss(0.62, 0.48, Math.abs(y0 - 0.5)) * (V.z > cz ? 1 : 0.3));      // gray regolith: thick up the boots and lower legs, ground into the knees
      col.set([1 - 0.42 * dust, 1 - 0.43 * dust, 1 - 0.45 * dust], i * 3);
      const wKnee = ss(kneeY + 0.06, kneeY - 0.06, y0), wHip = ss(hipY + 0.07, hipY - 0.09, y0);
      if (seg[i] !== 7 && !armAt(ax, y0)) {
        NV.fromBufferAttribute(nrm, i);
        if (wKnee > 0) { rotAbout(V, new THREE.Vector3(V.x, kneeY, cz), [Math.PI / 2 * wKnee, 0, 0]); NV.applyQuaternion(Q); }       // shin back
        if (wHip > 0) { rotAbout(V, new THREE.Vector3(V.x, hipY, cz), [-Math.PI / 2 * wHip, 0, 0]); NV.applyQuaternion(Q); }         // thigh forward, shin now down
        nrm.setXYZ(i, NV.x, NV.y, NV.z);      // the normals turn with it (recomputing them would crease every texture seam)
      }
      p.setXYZ(i, V.x, V.y - hipY, V.z);      // the seat, under the hips, is the origin
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setAttribute('sp', new THREE.BufferAttribute(sp, 3));
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4)); g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
    const m = o.material.name === 'helm_gold' ? visorMaterial() : crewMaterial(o.material);
    const idx = g.index ? g.index.array : Array.from({ length: p.count }, (_, i) => i), loose = [];
    for (let t = 0; t < idx.length; t += 3) { const n = (seg[idx[t]] === 7) + (seg[idx[t + 1]] === 7) + (seg[idx[t + 2]] === 7); if (n === 0 || n === 3) loose.push(idx[t], idx[t + 1], idx[t + 2]); }
    parts.push([g, m, loose]); segOf.push(seg);      // loose: the triangles left once the backpack tears away, none stretched across the seam
  });
  const leg = hipY - kneeY;
  CREW_JOINTS.length = 0;
  for (const sd of [-1, 1]) { const r = sd < 0 ? 0 : 1, [u, f] = armBones(sd);
    CREW_JOINTS.push([0, u, ARM.S.clone().setX(sd * ARM.S.x)], [u, f, ARM.E.clone().setX(sd * ARM.E.x)],
      [0, 1 + r, new THREE.Vector3(sd * 0.1, 0, cz)], [1 + r, 3 + r, new THREE.Vector3(sd * 0.1, 0, cz + leg)]); }
  CREW_SEG.length = 0;      // each segment's center and box: its bone's origin, and its rigid body in a crash
  for (let sg = 0; sg < 10; sg++) { const b = new THREE.Box3(); let any = false;
    parts.forEach(([g], j) => { const p = g.attributes.position, seg = segOf[j]; for (let i = 0; i < p.count; i++) if (seg[i] === sg) { b.expandByPoint(V.fromBufferAttribute(p, i)); any = true; } });
    CREW_SEG.push(any ? { c: b.getCenter(new THREE.Vector3()), size: b.getSize(new THREE.Vector3()) } : { c: new THREE.Vector3(), size: new THREE.Vector3(0.12, 0.12, 0.12) }); }
  // A little smaller than the suit stands (1.70 m instead of 1.85), so the two sit within the seats and reach their edges.
  // The shapes above are worked out at full size; everything the rig uses is scaled together here, the standing
  // coordinates (sp) for the commander's bands excepted.
  parts.forEach(([g]) => g.scale(CREW_K, CREW_K, CREW_K));
  CREW_SEG.forEach(S => { S.c.multiplyScalar(CREW_K); S.size.multiplyScalar(CREW_K); }); CREW_JOINTS.forEach(J => J[2].multiplyScalar(CREW_K));
  if (!ARM.scaled) { ARM.S.multiplyScalar(CREW_K); ARM.E.multiplyScalar(CREW_K); ARM.H.multiplyScalar(CREW_K); ARM.scaled = true; }
  return parts;
}
// bone b's skeleton slot: the backpack rides the torso's bone until it breaks loose
const crewInverses = (packOwn) => Array.from({ length: 10 }, (_, b) => { const c = CREW_SEG[b === 7 && !packOwn ? 0 : b].c; return new THREE.Matrix4().makeTranslation(-c.x, -c.y, -c.z); });
function seatCrew(parts) {
  CREW_SEATS.forEach((pos, i) => {
    const holder = new THREE.Group(); holder.position.set(...pos); holder.rotation.y = Math.PI / 2;      // facing forward, +x
    const bones = []; for (let b = 0; b < 10; b++) { if (b === 7) { bones.push(bones[0]); continue; } const bone = new THREE.Bone(); holder.add(bone); bones.push(bone); }
    const skel = new THREE.Skeleton(bones, crewInverses(false));
    const mine = parts.map(([g, m0, l]) => [g, i === 0 && /^(base_002|helmet)$/.test(m0.name) ? cmdrMaterial(m0) : m0, l]);      // Gene Cernan, the commander: red bands
    mine.forEach(([g, m]) => { const sk = new THREE.SkinnedMesh(g, m); sk.castShadow = true; sk.frustumCulled = false; sk.bind(skel, new THREE.Matrix4()); holder.add(sk); });
    // the grips, in his own frame (x to his left, z forward): Cernan's right hand on the hand controller
    const grip = sd => i === 0 && sd < 0 ? new THREE.Vector3(-(HAND_CTRL.z - pos[2]), HAND_CTRL.y - pos[1], HAND_CTRL.x - pos[0]) : new THREE.Vector3(sd * 0.27, -0.02, 0.16);      // the front corner of the seat, beside the thigh
    const P = CREW_P[i];
    holder.userData = { parts: mine, bones, grips: [grip(-1), grip(1)], P,
      st: { lx: 0, lz: 0, vx: 0, vz: 0, y: 0, vy: 0, v: null, hands: [grip(-1), grip(1)], up: 0, yaw: 0, vyaw: 0, look: 0, lookT: 1 + i * 2, fx: 0, fz: 0, t: i * 7 } };
    holder.visible = false; rover.add(holder); CREW.push(holder); poseCrew(holder);
  });
}
// how each rides: torso stiffness and damping (balance), how far felt gravity sways him, seat cushion stiffness
const CREW_K = 0.92;
// how each rides: torso stiffness and damping (balance; soft, so the body sways), how far felt gravity sways him, seat
// cushion stiffness, how quickly he reacts to a jolt (seconds), and his own slow fidget; the passenger looks about more
// how far he holds himself upright when the rover tilts (Cernan, gripping the hand controller, rides with it more), and how far he glances into a slide
const CREW_P = [{ K: 68, C: 5.2, kg: 0.22, ks: 1700, tau: 0.05, fid: 0.035, look: 0.12, ph: 0.3, bal: 0.55, glance: 0.55 }, { K: 50, C: 3.6, kg: 0.36, ks: 1300, tau: 0.14, fid: 0.055, look: 0.5, ph: 2.1, bal: 1.05, glance: 0.35 }];
const FUN = { rolled: false, on: false, t: 0 };      // the rare big jump when Schmitt throws his hands up
const _cY = new THREE.Vector3(0, 1, 0), _c0 = new THREE.Vector3(), _ca = new THREE.Vector3(), _cb = new THREE.Vector3(), _cc = new THREE.Vector3(), _cd = new THREE.Vector3(), _ce = new THREE.Vector3();
const _cq = new THREE.Quaternion(), _cq2 = new THREE.Quaternion(), _cqI = new THREE.Quaternion(), _cP = new THREE.Vector3(), _cS = new THREE.Vector3(), _cE = new THREE.Vector3(), _cH = new THREE.Vector3();
function setBone(B, b, q, piv0, piv) { B[b].quaternion.copy(q); B[b].position.copy(CREW_SEG[b].c).sub(piv0).applyQuaternion(q).add(piv); }
function poseCrew(h) {
  const { bones: B, st } = h.userData, P = _cP.set(0, st.y, 0);
  const qt = _cq.setFromUnitVectors(_cY, _ca.set(st.lx, 1, st.lz).normalize()).multiply(_cq2.setFromAxisAngle(_cY, st.yaw));      // lean, then the turn of the shoulders (the helmet is fixed to the suit: to look, he turns)
  setBone(B, 0, qt, _c0.set(0, 0, 0), P);      // the torso swings about the hips
  for (const b of [1, 2, 3, 4]) setBone(B, b, _cqI, _c0.set(0, 0, 0), P);
  for (const sd of [-1, 1]) {      // two-bone reach: shoulder, elbow, hand on its grip
    const [u, f] = armBones(sd), S0 = _cb.copy(ARM.S).setX(sd * ARM.S.x), E0 = _cc.copy(ARM.E).setX(sd * ARM.E.x), H0 = _cd.copy(ARM.H).setX(sd * ARM.H.x);
    const L1 = S0.distanceTo(E0), L2 = E0.distanceTo(H0), S = _cS.copy(S0).applyQuaternion(qt).add(P);
    const d = _cH.copy(st.hands[sd < 0 ? 0 : 1]).sub(S), D = Math.max(Math.abs(L1 - L2) + 0.01, Math.min(L1 + L2 - 0.002, d.length())); d.normalize();
    const a = (L1 * L1 - L2 * L2 + D * D) / (2 * D), ht = Math.sqrt(Math.max(0, L1 * L1 - a * a));
    const pole = _ce.set(sd * (0.7 + 0.3 * st.up), -0.8 + 1.0 * st.up, -0.6 + 0.4 * st.up); pole.addScaledVector(d, -pole.dot(d)).normalize();      // elbows out and down, or out when the hands go up
    const E = _cE.copy(S).addScaledVector(d, a).addScaledVector(pole, ht), H = d.multiplyScalar(D).add(S);
    const qu = new THREE.Quaternion().setFromUnitVectors(_ca.copy(E0).sub(S0).normalize(), _ce.copy(E).sub(S).normalize());
    if (st.up > 0.01) qu.premultiply(_cq2.setFromAxisAngle(_ce.copy(E).sub(S).normalize(), sd * Math.PI / 4 * st.up));      // hands up: the arm turns so the backs of the gloves face forward (the scan's fingers are curled: palms out read as claws)
    const qf = new THREE.Quaternion().setFromUnitVectors(_ca.copy(H0).sub(E0).normalize().applyQuaternion(qu), _ce.copy(H).sub(E).normalize()).multiply(qu);
    if (st.up > 0.01) qf.premultiply(_cq2.setFromAxisAngle(_ce.copy(H).sub(E).normalize(), sd * Math.PI / 4 * st.up));
    setBone(B, u, qu, S0, S); setBone(B, f, qf, E0, E);
  }
}
function stepCrew(dt) {
  if (!dt) return;
  if (!AIR.grounded && AIR.t > 1 && !FUN.rolled) { FUN.rolled = true; FUN.on = Math.random() < 0.12; }      // a big jump: now and then, hands in the air
  if (AIR.grounded) { FUN.rolled = false; if (FUN.on && (FUN.t += dt) > 0.6) { FUN.on = false; FUN.t = 0; } }
  for (const h of CREW) {
    const { st, P, grips } = h.userData;
    if (CRASH.on) { Object.assign(st, { lx: 0, lz: 0, vx: 0, vz: 0, y: 0, vy: 0, v: null }); continue; }
    // the seat's acceleration, from the rover's motion; then felt gravity and true up in his own frame
    const r = _ca.copy(h.position).applyQuaternion(car.q), v = _cb.copy(car.w).cross(r).add(car.v);
    if (!st.v) st.v = v.clone();
    const acc = _cc.copy(v).sub(st.v).divideScalar(dt); st.v.copy(v); if (acc.lengthSq() > 900) acc.setLength(30);
    const qi = _cq2.copy(car.q).multiply(h.quaternion).invert(), f = _cd.set(0, -G, 0).sub(acc).applyQuaternion(qi), up = _ce.set(0, 1, 0).applyQuaternion(qi);
    const jolt = Math.abs(f.y + G * up.y); if (jolt > 4) { st.vx += (Math.random() - 0.5) * jolt * 0.07; st.vz += (Math.random() - 0.5) * jolt * 0.05; st.vyaw += (Math.random() - 0.5) * jolt * 0.05; }      // a hard bump knocks each a little differently
    const a = 1 - Math.exp(-dt / P.tau); st.fx += (f.x - st.fx) * a; st.fz += (f.z - st.fz) * a;      // each feels the sway a moment late, his own moment
    st.t += dt; const fid = P.fid, fx0 = fid * (Math.sin(st.t * 0.61 + P.ph) + 0.6 * Math.sin(st.t * 1.37 + 2 * P.ph)), fz0 = fid * 0.7 * Math.sin(st.t * 0.83 + 3 * P.ph);      // a slow fidget, never in step
    // where he looks: about the valley now and then (the passenger more), and round toward the way the rover is going when it slides
    if ((st.lookT -= dt) < 0) { st.lookT = 2.5 + Math.random() * 4; st.look = Math.random() < 0.35 ? 0 : (Math.random() - 0.5) * 2 * P.look; }
    const vl = _cb.copy(car.v).applyQuaternion(qi), sp = Math.hypot(vl.x, vl.z), slip = sp > 1.5 ? Math.atan2(vl.x, vl.z) : 0;
    const drift = Math.abs(slip) > 0.15 && Math.abs(slip) < 2.6 ? Math.max(-0.35, Math.min(0.35, slip * P.glance)) : 0;
    const yawT = drift + st.look * (drift ? 0.6 : 1); st.vyaw += dt * (14 * (yawT - st.yaw) - 6.5 * st.vyaw); st.yaw = Math.max(-0.5, Math.min(0.5, st.yaw + dt * st.vyaw));
    const n = Math.ceil(dt / 0.004), hh = dt / n;
    for (let i = 0; i < n; i++) {
      // the torso: pulled toward true up (balance), swayed by felt gravity (less than it would be: he is holding on), damped
      st.vx += hh * (P.K * (up.x * P.bal + fx0 - st.lx) + P.kg * P.K * st.fx / 2.5 - P.C * st.vx); st.vz += hh * (P.K * (up.z * P.bal + fz0 - st.lz) + P.kg * P.K * st.fz / 2.5 - P.C * st.vz);
      const L = Math.hypot(st.lx, st.lz); if (L > 0.35) { const g = -3 * P.K * (L - 0.35) / L * hh; st.vx += g * st.lx; st.vz += g * st.lz; }      // the suit stiffens at the end of its bend
      st.lx += hh * st.vx; st.lz += hh * st.vz;
      // the body on the seat: the cushion below, the seat belt about 5 cm up
      const c = st.y < 0 ? -P.ks * st.y - 40 * st.vy : st.y > 0.05 ? -P.ks * (st.y - 0.05) - 40 * st.vy : 0;
      st.vy += hh * (f.y + c); st.y += hh * st.vy;
    }
    const L = Math.hypot(st.lx, st.lz); if (L > 0.5) { st.lx *= 0.5 / L; st.lz *= 0.5 / L; }
    st.y = Math.max(-0.03, Math.min(0.09, st.y));
    const want = FUN.on && h === CREW[1] ? 1 : 0; st.up += (want - st.up) * (1 - Math.exp(-dt * (want ? 7 : 4)));
    for (let j = 0; j < 2; j++) st.hands[j].copy(grips[j]).lerp(_c0.set(j ? 0.29 : -0.29, 0.95, 0.2).multiplyScalar(CREW_K), st.up);      // straight up, elbows soft
    poseCrew(h);
  }
}
function handController() {      // the T-handle on its post between the seats
  const g = new THREE.Group(), mat = new THREE.MeshStandardMaterial({ color: 0x3a3a3c, roughness: 0.6, metalness: 0.4 });
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.018, 0.33, 10), mat); post.position.y = -0.17;
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.12, 10), mat); bar.rotation.z = Math.PI / 2;
  g.add(post, bar); g.position.copy(HAND_CTRL); g.traverse(o => { o.castShadow = true; }); return g;
}

/* ── start ── */
(async () => {
  $('loadmsg').textContent = 'Shaping the valley…';
  await new Promise(r => setTimeout(r, 30));
  try { const r = await fetch('../models/moon-a17.bin'); if (r.ok) { DEM = new Int16Array(await r.arrayBuffer()); DEM0 = demRaw(0, 0); } } catch (e) { /* offline without it: flat ground, no mountains */ }
  buildGround(); indexRocks(); reliefMap(); groundMesh(); buildPatch(0, 0); scene.add(patchMesh); rockMeshes(); splitBoulder(); routeDots(); showRecords();
  if (DEM) farMesh();
  place(0, 0, Math.atan2(350, 82));      // facing north, up the valley toward the North Massif
  $('loadmsg').textContent = 'Unloading the rover…';
  const [lrv, lm] = await Promise.all([loader.loadAsync('../models/lrv.glb').catch(() => null), loader.loadAsync('../models/lm.glb').catch(() => null)]);
  if (lrv) { const o = lrv.scene; dusty(o); o.updateMatrixWorld(true); o.position.y = -0.78 - new THREE.Box3().setFromObject(o).min.y; rover.add(o, handController()); rigWheels(); buildSections(); buildDebris(); }      // tires on the ground at the resting ride height
  else rover.add(new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.5, 2.06), new THREE.MeshStandardMaterial({ color: 0xb9b6b0 })));
  { const a = await loader.loadAsync('../models/astronaut-a7l.glb').catch(() => null); if (a) seatCrew(buildCrew(prepSuit(a.scene))); }      // after the sections and debris are cut, so the crew is in neither
  if (lm) { const o = lm.scene; dusty(o); foilLM(o); const x = LM.x, z = LM.z; LM.y = ground(x, z); LM.on = true;
    // stood on its four pads: tilted to the ground's slope under them, and set so the lowest pad presses 3 cm into the dust
    const pad = [[4.1, 0], [-4.1, 0], [0, 4.1], [0, -4.1]].map(([dx, dz]) => ground(x + dx, z + dz));
    const nrm = new THREE.Vector3(pad[1] - pad[0], 8.2, pad[3] - pad[2]).normalize();
    o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), nrm).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2));
    o.position.set(x, 0, z); o.updateMatrixWorld(true);
    let gap = 1e9; const V = new THREE.Vector3(); o.traverse(m => { if (!m.isMesh) return; const P = m.geometry.attributes.position; for (let i = 0; i < P.count; i += 2) { V.fromBufferAttribute(P, i).applyMatrix4(m.matrixWorld); gap = Math.min(gap, V.y - ground(V.x, V.z)); } });
    o.position.y = -gap - 0.03; scene.add(o); }
  $('loading').classList.remove('on'); $('brief').classList.add('on');
  requestAnimationFrame(t => { last = t; frame(t); });
})();
window.__lrv = { SHORTY, ORB, WHEEL_PARTS, WHEELS, rover, CRASH, stepDebris, INTRO, SEC, BOULDER, SLABS, VAN, SITES, openSite, OBJ, CPS, RUN, breakApart, EARTH, look: null, car, AIR, step, ground, place, tick: (n, dt = 1 / 60) => { for (let i = 0; i < n; i++) { const k = 4; for (let j = 0; j < k; j++) step(dt / k); } }, set: (t, s) => { throttle = t; steerIn = s; parked = false; }, craters };
