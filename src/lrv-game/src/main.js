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
import { createStick, buzz } from '../../rover-game/src/stick.js';
import { DETAIL } from '../../rover-game/src/detail.js';      // the Mars simulator's detail setting, shared

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
const HALF = 470, CX = 373, CZ = -375, CELL = 1.6, N = Math.round(2 * HALF / CELL) + 1;      // the drivable square, 940 m across, round the third drive
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
const craters = [], rocks = [];
{ const r = rng(1972);
  const add = (x, z, R, fresh) => craters.push({ x, z, R, fresh, depth: R * (0.12 + 0.26 * fresh), rim: R * (0.025 + 0.06 * fresh) });
  // a few fresh ones within reach of the start, the rims to aim for
  [[48, -18, 13, 1], [-30, 64, 17, .95], [96, 52, 21, .9], [20, 120, 11, 1], [-92, -40, 24, .85]].forEach(c => add(...c));
  for (let i = 0; i < 2000; i++) {
    const R = 1.2 / Math.sqrt(1 - r() * (1 - (1.2 / 32) ** 2));        // a power-law spread of sizes, 1.2 to 32 m
    const x = CX + (r() * 2 - 1) * (HALF - 10), z = CZ + (r() * 2 - 1) * (HALF - 10);
    if (Math.hypot(x, z) < 14 || Math.hypot(x + 12, z - 4) < 14) continue;      // the start and the lander stand on level ground
    add(x, z, R, Math.pow(r(), 2.2));
  }
  for (let i = 0; i < 1150; i++) { const x = CX + (r() * 2 - 1) * (HALF - 6), z = CZ + (r() * 2 - 1) * (HALF - 6); if (Math.hypot(x, z) < 10) continue;
    rocks.push({ x, z, s: 0.12 + Math.pow(r(), 3) * 0.7, yaw: r() * 6.28, k: r() }); }
  // a fresh crater digs through the soil into rock and throws blocks out over its rim; worn ones have lost theirs
  for (const c of craters) { if (c.fresh < 0.55 || c.R < 4) continue; const n = Math.round(c.R * c.fresh * 2.2);
    for (let i = 0; i < n; i++) { const a = r() * 6.2832, d = c.R * (0.85 + Math.pow(r(), 1.7) * 1.3), x = c.x + Math.cos(a) * d, z = c.z + Math.sin(a) * d;
      if (!inSq(x, z, 6) || Math.hypot(x, z) < 10) continue;
      rocks.push({ x, z, s: 0.2 + Math.pow(r(), 2.2) * Math.min(1.6, c.R * 0.07), yaw: r() * 6.28, k: r() }); } }
}
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
function buildGround() {
  indexCraters();
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const x = CX - HALF + i * CELL, z = CZ - HALF + j * CELL;
    const edge = ss(0, 40, HALF - Math.max(Math.abs(x - CX), Math.abs(z - CZ)));      // the detail fades out at the edge, where the terrain model's ring takes over
    HB[j * N + i] = demGame(x, z) + edge * ((fbm(x / 60, z / 60, 4) - .5) * 2.2 + (fbm(x / 9 + 40, z / 9, 3) - .5) * 0.35);
    H[j * N + i] = HB[j * N + i] + edge * craterH(x, z);
    B[j * N + i] = brightness(x, z);
  }
}
// rocks are small bumps the wheels feel, under the rock you see
const ROCK_GRID = new Map(), RG = 8;
function indexRocks() { rocks.forEach((k, n) => { const key = Math.floor(k.x / RG) + ',' + Math.floor(k.z / RG); if (!ROCK_GRID.has(key)) ROCK_GRID.set(key, []); ROCK_GRID.get(key).push(n); }); }
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
  return groundBase(x, z) + (f > 0 ? (microRaw(x, z) + craterFine(x, z)) * f : 0) + rockH(x, z);
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
scene.add(new THREE.HemisphereLight(0x000000, 0x6e6a64, 0.55));

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
    const gx = F[j * TN + Math.min(TN - 1, i + 1)] - F[j * TN + Math.max(0, i - 1)], gz = F[Math.min(TN - 1, j + 1) * TN + i] - F[Math.max(0, j - 1) * TN + i], l = Math.hypot(gx, 2 * TP, gz), o = (j * TN + i) * 4;
    D[o] = 128 - gx / l * 127; D[o + 1] = 128 + 2 * TP / l * 127; D[o + 2] = 128 - gz / l * 127; D[o + 3] = 255;      // the world-space normal: x east, y up, z south
  }
  const t = new THREE.DataTexture(D, TN, TN); t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy(); t.needsUpdate = true;
  reliefU.value = t;
}
function groundMesh() {
  const g = new THREE.PlaneGeometry(2 * HALF, 2 * HALF, N - 1, N - 1); g.rotateX(-Math.PI / 2); g.translate(CX, 0, CZ);
  const p = g.attributes.position, uv = g.attributes.uv;
  const col = new Float32Array(p.count * 3);
  for (let k = 0; k < p.count; k++) { const i = Math.round((p.getX(k) - CX + HALF) / CELL), j = Math.round((p.getZ(k) - CZ + HALF) / CELL); p.setY(k, H[j * N + i]); uv.setXY(k, p.getX(k) / 3.2, p.getZ(k) / 3.2); col.fill(B[j * N + i], k * 3, k * 3 + 3); }
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
    p.setXYZ(k, x, groundBase(x, z) + m + (f > 0 ? craterFine(x, z) * f : 0), z); uv.setXY(k, x / 3.2, z / 3.2); const b = bilB(x, z) * (1 + Math.max(-0.08, Math.min(0.08, m * 0.6))); col.setXYZ(k, b, b, b); }
  p.needsUpdate = uv.needsUpdate = col.needsUpdate = true; patchGeo.computeVertexNormals(); patchGeo.computeBoundingSphere();
  patchU.value.set(PATCH.cx, PATCH.cz, PATCH.half - 1.0, 0);
}
// the valley and its mountains, from NASA's terrain model: 64 km square on a 250 m grid, heights in quarter-metres,
// drawn at true size with the Moon's curvature; sunk just under the drivable square where the two overlap
// The valley and its mountains, from NASA's terrain model at the same half scale as the drivable square, in two rings:
// a fine one 5 km across at 20 m, so that where it meets the drivable square the two follow the same shape (the coarse
// ring alone, at 167 m, sagged metres below it on the slopes and left a step), and one at 50 m out to 16 km.
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
  };
  const m = new THREE.Mesh(g, fm); m.receiveShadow = true; scene.add(m);
}
function farMesh() { ringMesh(2500, 250, HALF); ringMesh(8000, 320, 2500); }
function rockMeshes() {
  const geo = new THREE.IcosahedronGeometry(1, 1), p = geo.attributes.position, r = rng(11);
  for (let k = 0; k < p.count; k++) { const s = 0.75 + r() * 0.4; p.setXYZ(k, p.getX(k) * s, p.getY(k) * s * 0.7, p.getZ(k) * s); }
  geo.computeVertexNormals();
  const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x77736d, roughness: .95, flatShading: true }), rocks.length);
  const o = new THREE.Object3D();
  rocks.forEach((k, n) => { o.position.set(k.x, groundBase(k.x, k.z) + microRaw(k.x, k.z) - k.s * 0.62, k.z); o.rotation.set(0, k.yaw, 0); o.scale.setScalar(k.s); o.updateMatrix(); im.setMatrixAt(n, o.matrix); });
  im.castShadow = im.receiveShadow = true; scene.add(im);
}

/* ── the rover: one rigid body on four sprung wheels ─────────────
   Loaded with two astronauts and their gear the rover weighed about 700 kg; the body is a box of that mass,
   3.1 m long and 2.06 m wide. On the Moon each wheel carries a sixth of what it would on Earth, so it grips
   a sixth as hard: the rover skids, bounces, and leaves the ground easily. */
const MASS = 700, I = new THREE.Vector3(MASS / 12 * (1.1 ** 2 + 2.06 ** 2), MASS / 12 * (3.1 ** 2 + 2.06 ** 2), MASS / 12 * (3.1 ** 2 + 1.1 ** 2));
// Double speed, chosen on the briefing card: twice the top speed, with stronger motors and grippier tires to get there
let FAST = (() => { try { return localStorage.getItem('lrv-speed') === '2'; } catch (e) { return false; } })();
const WHEEL_R = 0.41, REST = 0.36, K = 4200, C_DAMP = 620, CRR = 0.05, VREV = 1.6;
let MU = 0.62, VMAX = 5.0;      // 5 m/s = 18 km/h, Gene Cernan's top speed on Apollo 17 (the design speed on the level was about 13 km/h)
function setSpeed(fast) { FAST = fast; MU = fast ? 0.85 : 0.62; VMAX = fast ? 11.2 : 5.0; try { localStorage.setItem('lrv-speed', fast ? '2' : '1'); } catch (e) { /* not remembered */ } }
setSpeed(FAST);
const WHEELS = [[1.15, 0.915, 1], [1.15, -0.915, 1], [-1.15, 0.915, -1], [-1.15, -0.915, -1]].map(([x, z, f]) => ({ at: new THREE.Vector3(x, -0.08, z), steer: f, comp: 0, contact: false, spin: 0, off: 0, hit: 0 }));      // off: time out of contact; hit: how hard it came down, for the dust
const HULL = []; for (const x of [-1.5, 1.5]) for (const z of [-1.0, 1.0]) for (const y of [-0.3, 0.75]) HULL.push(new THREE.Vector3(x, y, z));
const car = { p: new THREE.Vector3(0, 0, 0), v: new THREE.Vector3(), q: new THREE.Quaternion(), w: new THREE.Vector3(), steer: 0 };
function place(x, z, yaw) { car.p.set(x, ground(x, z) + 0.8, z); car.v.set(0, 0, 0); car.w.set(0, 0, 0); car.q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw); car.steer = 0; }

const _f = new THREE.Vector3(), _t = new THREE.Vector3(), _r = new THREE.Vector3(), _a = new THREE.Vector3(), _up = new THREE.Vector3(), _fw = new THREE.Vector3(), _rt = new THREE.Vector3(),
      _vc = new THREE.Vector3(), _wf = new THREE.Vector3(), _ws = new THREE.Vector3(), _tmp = new THREE.Vector3(), _qi = new THREE.Quaternion(), _wb = new THREE.Vector3(), _L = new THREE.Vector3();
const AIR = { t: 0, start: null, peak: 0, last: null, best: 0, grounded: true, spin: 0 };
const REC = Object.assign({ t: 0, d: 0, h: 0, v: 0, v2: 0, lap: 0, lap2: 0 }, (() => { try { return JSON.parse(localStorage.getItem('lrv-records')) || {}; } catch (e) { return {}; } })());      // v, v2: top speed in km/h, at real and at double speed
let throttle = 0, steerIn = 0;
const STEER_RATE = 0.3;      // rad/s at the wheel, about 17°/s: straight ahead to full lock in about 1.4 s (an estimate, not a documented figure)
function step(h) {
  _f.set(0, -G * MASS, 0); _t.set(0, 0, 0);
  _up.set(0, 1, 0).applyQuaternion(car.q); _fw.set(1, 0, 0).applyQuaternion(car.q); _rt.set(0, 0, 1).applyQuaternion(car.q);
  const speed = car.v.dot(_fw);
  const dmax = 0.42 / (1 + 0.12 * speed * speed);      // four-wheel steering, gentler at speed
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
    if (throttle > 0.02 && vf > -0.3) Fl = throttle * (FAST ? 900 : 520) * Math.max(0, 1 - vf / VMAX);      // each wheel's motor, governed to top speed
    else if (throttle < -0.02 && vf < 0.3) Fl = throttle * 300 * Math.max(0, 1 + vf / VREV);
    else if (Math.abs(throttle) > 0.02) Fl = -Math.sign(vf) * lim;                            // driving against the motion is braking
    else Fl = 0;
    Fl -= Math.sign(vf) * Math.min(Math.abs(vf) * 400, CRR * Fn);                             // soft soil drags at the wheels
    let Fs = -vs * 1600;
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
    if (c.y > 0) CRASH.roof = Math.max(CRASH.roof, -vn);      // the top of the rover hitting the ground: how hard
    const Fn = Math.max(0, 90000 * pen - 3000 * vn);
    _tmp.copy(_vc).addScaledVector(n, -vn); const vt = _tmp.length(); if (vt > 1e-4) _tmp.multiplyScalar(-Math.min(0.55 * Fn, vt * 3000) / vt);
    _tmp.addScaledVector(n, Fn); _f.add(_tmp); _t.add(_L.copy(r).cross(_tmp));
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
const CPS = [['stop 6', 805, -3003], ['stop 8', 3012, -2599], ['stop 9 · Van Serg', 1735, -1228]].map(([n, x, z]) => ({ n, x: LMP[0] + x / SQ, z: LMP[1] + z / SQ }));      // to pass in order
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
function trackTex() {
  const S = 64, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d');
  x.fillStyle = 'rgba(30,29,27,.38)'; x.fillRect(S * .06, 0, S * .88, S);
  x.strokeStyle = 'rgba(14,13,12,.55)'; x.lineWidth = S * .07; x.lineCap = 'round';
  for (let k = -1; k < 5; k++) { const y = k * S / 4; x.beginPath(); x.moveTo(S * .12, y); x.lineTo(S * .5, y + S * .12); x.lineTo(S * .88, y); x.stroke(); }
  x.fillStyle = 'rgba(205,200,190,.22)'; x.fillRect(0, 0, S * .06, S); x.fillRect(S * .94, 0, S * .06, S);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; return t;
}
const TRACK_MAX = 1400, trackMat = new THREE.MeshStandardMaterial({ map: trackTex(), transparent: true, depthWrite: false, roughness: 1, vertexColors: true, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -6 });
const tracks = WHEELS.map(() => {
  const pos = new Float32Array(TRACK_MAX * 2 * 3), uv = new Float32Array(TRACK_MAX * 2 * 2), col = new Float32Array(TRACK_MAX * 2 * 4), idx = new Uint32Array((TRACK_MAX - 1) * 6);
  for (let i = 0; i < TRACK_MAX - 1; i++) { const o = i * 2; idx.set([o, o + 1, o + 2, o + 2, o + 1, o + 3], i * 6); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setAttribute('color', new THREE.BufferAttribute(col, 4));
  g.setIndex(new THREE.BufferAttribute(idx, 1)); g.setDrawRange(0, 0);
  const m = new THREE.Mesh(g, trackMat); m.frustumCulled = false; m.receiveShadow = true; m.renderOrder = 1; scene.add(m);
  return { g, pos, uv, col, n: 0, last: null, s: 0, gap: false };
});
const _tp = new THREE.Vector3();
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
    const a = _tp.copy(wl.at).applyQuaternion(car.q).add(car.p);
    if (T.last && !T.gap && Math.hypot(a.x - T.last.x, a.z - T.last.z) < 0.25) return;
    const dx = T.last && !T.gap ? a.x - T.last.x : _fw.x, dz = T.last && !T.gap ? a.z - T.last.z : _fw.z, l = Math.hypot(dx, dz) || 1, nx = -dz / l * 0.115, nz = dx / l * 0.115;
    const x1 = a.x + nx, z1 = a.z + nz, x2 = a.x - nx, z2 = a.z - nz, y1 = ground(x1, z1) + 0.012, y2 = ground(x2, z2) + 0.012;
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
function earth() {
  const S = 512, c = document.createElement('canvas'); c.width = S; c.height = S / 2; const x = c.getContext('2d'), im = x.createImageData(S, S / 2), r = rng(5);
  for (let j = 0; j < S / 2; j++) for (let i = 0; i < S; i++) { const lat = Math.abs(j / (S / 2) - .5) * 2, land = fbm(i / 60, j / 60, 5) > 0.56, cloud = Math.max(0, fbm(i / 22 + 9, j / 14, 5) - 0.5) * 3.2 + (lat > 0.85 ? 1 : 0);
    let R = land ? 120 : 22, G2 = land ? 105 : 58, Bc = land ? 70 : 128; const k = Math.min(1, cloud); R += (245 - R) * k; G2 += (245 - G2) * k; Bc += (250 - Bc) * k;
    const o = (j * S + i) * 4; im.data[o] = R; im.data[o + 1] = G2; im.data[o + 2] = Bc; im.data[o + 3] = 255; }
  x.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const D = 60000, el = 54 * Math.PI / 180, az = 240 * Math.PI / 180, rad = D * Math.tan(0.95 * Math.PI / 180);
  const m = new THREE.Mesh(new THREE.SphereGeometry(rad, 48, 24), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9, metalness: 0, fog: false }));
  m.position.set(Math.sin(az) * Math.cos(el) * D, Math.sin(el) * D, -Math.cos(az) * Math.cos(el) * D);
  return m;
}
const EARTH = earth(); scene.add(EARTH);

/* ── rover and lander models ── */
const rover = new THREE.Group(); scene.add(rover);
const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
function dusty(root) { root.traverse(o => { if (!o.isMesh) return; o.castShadow = o.receiveShadow = true; [].concat(o.material).forEach(m => { if (m.color) m.color.lerp(new THREE.Color(0x9b958c), 0.18); }); }); }

/* ── controls ── */
const keys = Object.create(null);
addEventListener('keydown', e => { keys[e.key.toLowerCase()] = true; if (e.key.toLowerCase() === 'r') recover(); });
addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });
const stick = createStick($('stick'));
const ORB = { yaw: 0, pitch: 0.18, id: null, x: 0, y: 0, idle: 9 };
let pov = 0;      // 0 chase, 1 wide, 2 the driver's seat
$('btn-pov').addEventListener('click', () => { pov = (pov + 1) % 3; $('btn-pov').textContent = ['Chase', 'Wide', 'Seat'][pov]; camInit = false; rover.visible = true; });
addEventListener('pointerdown', e => { if (e.target !== renderer.domElement) return; ORB.id = e.pointerId; ORB.x = e.clientX; ORB.y = e.clientY; });
addEventListener('pointermove', e => { if (e.pointerId !== ORB.id) return; ORB.yaw -= (e.clientX - ORB.x) * 0.006; ORB.pitch = Math.max(-0.1, Math.min(1.1, ORB.pitch + (e.clientY - ORB.y) * 0.004)); ORB.x = e.clientX; ORB.y = e.clientY; ORB.idle = 0; });
addEventListener('pointerup', e => { if (e.pointerId === ORB.id) ORB.id = null; });
document.addEventListener('touchmove', e => { if (!e.target.closest('.sheet')) e.preventDefault(); }, { passive: false });

/* ── HUD ── */
let toastT = 0;
function toast(m) { $('toast').textContent = m; $('toast').classList.add('on'); toastT = 3.6; }
function landed(a) {
  buzz(a.t > 1.2 ? 40 : 20);
  const recs = [];
  if (a.t > REC.t) { REC.t = a.t; recs.push('air time'); } if (a.d > REC.d) { REC.d = a.d; recs.push('distance'); } if (a.peak > REC.h) { REC.h = a.peak; recs.push('height'); }
  try { localStorage.setItem('lrv-records', JSON.stringify(REC)); } catch (e) { /* not remembered */ }
  const flip = a.spin > 5.4 ? ' · full roll!' : a.spin > 2.6 ? ' · half roll' : '';
  toast(`Airborne ${a.t.toFixed(1)} s · ${a.d.toFixed(1)} m · ${a.peak.toFixed(1)} m high${flip}${recs.length ? ' · new record' : ''}`);
  showRecords();
}
function showRecords() {
  $('best').textContent = REC.t ? REC.t.toFixed(1) + ' s' : '—';
  const top = FAST ? REC.v2 : REC.v; $('topv').textContent = top ? 'km/h · best ' + top.toFixed(1) : 'km/h';
  const lap = FAST ? REC.lap2 : REC.lap;
  $('rec').textContent = [lap ? `Best loop ${Math.floor(lap / 60)}:${(lap % 60).toFixed(1).padStart(4, '0')}` : '', REC.t ? `${REC.t.toFixed(1)} s in the air · ${REC.d.toFixed(1)} m · ${REC.h.toFixed(1)} m high` : ''].filter(Boolean).join(' · ');
}
/* The time trial. Through the faint ring the clock starts and the loop appears; stops 6, 8 and 9 must be passed in that
   order (the next one is marked on screen with its distance), and back through the ring the clock stops. Best lap per
   speed setting; the top speed on the ground during a lap is kept too (Cernan's 18 km/h was driven, not flown). */
const RUN = { on: false, t: 0, cp: 0, peak: 0, away: false, warned: false };
function offLine() { let m = 1e9; for (let i = 0; i < COURSE.length; i += 2) { const dx = COURSE[i] - car.p.x, dz = COURSE[i + 1] - car.p.z, d = dx * dx + dz * dz; if (d < m) m = d; } return Math.sqrt(m); }
function lineFade(dt) {      // the line eases in when the clock starts and out when the attempt ends
  const u = OBJ.line.material.uniforms.op, want = RUN.on ? 1 : 0;
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
    if (dG < 4.5 && !RUN.away) { RUN.on = true; RUN.t = 0; RUN.cp = 0; RUN.peak = 0; RUN.away = true; RUN.warned = false;
      toast("Clock running · stops 6, 8 and 9, then back here"); }
    if (dG > 8) RUN.away = false;      // after a lap, drive out of the ring before it can start again
    mark(OBJ.x, OBJ.z, dG > 25 ? `Time trial · ${Math.round(dG)} m` : 'Time trial'); $('clock').textContent = '';
    return;
  }
  RUN.t += dt;
  if (grounded && kmh > RUN.peak) RUN.peak = kmh;
  const off = offLine();      // stray too far from the line and the attempt is over: the clock goes, the line fades away
  if (off > 35) { RUN.on = false; RUN.away = false; $('clock').textContent = ''; toast('Too far from the route · time trial over'); return; }
  if (off > 20 && !RUN.warned) { RUN.warned = true; toast('Back to the line, or the time trial ends'); } else if (off < 12) RUN.warned = false;
  const next = CPS[RUN.cp];
  if (next) {
    const d = Math.hypot(next.x - car.p.x, next.z - car.p.z);
    if (d < 14) { RUN.cp++; toast(`${next.n[0].toUpperCase() + next.n.slice(1)} · ${fmtT(RUN.t)}`); }
    mark(next.x, next.z, `${next.n} · ${Math.round(d)} m`);
  } else {
    mark(OBJ.x, OBJ.z, `Finish · ${Math.round(dG)} m`);
    if (dG < 4.5) {
      RUN.on = false; RUN.away = true;
      const lk = FAST ? 'lap2' : 'lap', vk = FAST ? 'v2' : 'v', best = !REC[lk] || RUN.t < REC[lk];
      if (best) REC[lk] = RUN.t;
      const vb = RUN.peak > REC[vk] + 0.05; if (vb) REC[vk] = RUN.peak;
      toast(`Loop ${fmtT(RUN.t)}${best ? ' · best lap' : ''} · top speed ${RUN.peak.toFixed(1)} km/h${!FAST && RUN.peak > 18 ? ' · faster than Cernan’s 18' : ''}`);
      try { localStorage.setItem('lrv-records', JSON.stringify(REC)); } catch (e) { /* not remembered */ }
      showRecords();
    }
  }
  $('clock').textContent = fmtT(RUN.t);
}
/* A catastrophic crash, rolling onto the roof hard or tumbling at speed: the rover breaks apart, pieces fly in clean
   lunar arcs and bounce, and after a few seconds it is back on its wheels where it last drove safely. */
const CRASH = { roof: 0, on: false, t: 0, safe: { x: 0, z: 0, yaw: 0 }, safeT: 0, pieces: [] };
const PIECE_MATS = [0xb9b6b0, 0x8a8782, 0xc89a3c, 0x3a3836].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.7, metalness: 0.3 }));
function breakApart() {
  CRASH.on = true; CRASH.t = 0; rover.visible = false;
  CRASH.pieces.forEach(p => scene.remove(p.m)); CRASH.pieces = [];
  const shapes = [
    ...[0, 1, 2, 3].map(() => [new THREE.CylinderGeometry(0.41, 0.41, 0.23, 18), 3]),      // the wire wheels
    [new THREE.BoxGeometry(1.3, 0.12, 0.9), 0], [new THREE.BoxGeometry(1.1, 0.12, 0.8), 0], [new THREE.BoxGeometry(0.6, 0.35, 0.5), 1],      // chassis panels, a seat
    [new THREE.ConeGeometry(0.5, 0.25, 16, 1, true), 0], [new THREE.BoxGeometry(0.5, 0.3, 0.35), 2], [new THREE.BoxGeometry(0.9, 0.08, 0.3), 2],      // the dish, a battery, a fender
  ];
  for (const [geo, mi] of shapes) {
    const m = new THREE.Mesh(geo, PIECE_MATS[mi]); m.castShadow = true; scene.add(m);
    const off = new THREE.Vector3((Math.random() - .5) * 2.4, Math.random() * 0.8, (Math.random() - .5) * 1.6).applyQuaternion(car.q);
    m.position.copy(car.p).add(off); m.quaternion.copy(car.q);
    const v = car.v.clone().multiplyScalar(0.6).add(new THREE.Vector3((Math.random() - .5) * 5, 1.5 + Math.random() * 4, (Math.random() - .5) * 5));
    CRASH.pieces.push({ m, v, w: new THREE.Vector3((Math.random() - .5) * 9, (Math.random() - .5) * 9, (Math.random() - .5) * 9), r: 0.25 });
  }
  for (let k = 0; k < 160; k++) { const i = dnext; dnext = (dnext + 1) % DN;      // a cloud of dust, falling straight back
    dpos[i * 3] = car.p.x + (Math.random() - .5) * 2; dpos[i * 3 + 1] = car.p.y; dpos[i * 3 + 2] = car.p.z + (Math.random() - .5) * 2;
    dvel[i * 3] = (Math.random() - .5) * 6; dvel[i * 3 + 1] = Math.random() * 4; dvel[i * 3 + 2] = (Math.random() - .5) * 6; dlife[i] = 1; }
  car.v.set(0, 0, 0); car.w.set(0, 0, 0); AIR.t = 0; AIR.grounded = true;
  toast('Crash · the rover breaks apart');
}
function stepCrash(dt) {
  if (!CRASH.on) {      // remember where it last drove upright, to bring it back there
    if ((CRASH.safeT += dt) > 1 && _up.y > 0.85 && AIR.grounded) { CRASH.safeT = 0; CRASH.safe = { x: car.p.x, z: car.p.z, yaw: Math.atan2(-_fw.z, _fw.x) }; }
    if (CRASH.roof > 3.5 || (_up.y < -0.2 && car.v.length() > 4)) breakApart();
    CRASH.roof = 0;
  } else if ((CRASH.t += dt) > 3.5) {
    CRASH.on = false; rover.visible = true; place(CRASH.safe.x, CRASH.safe.z, CRASH.safe.yaw); camInit = false; toast('A new rover · back where you last drove safely');
  }
  for (const p of CRASH.pieces) {
    p.v.y -= G * dt; p.m.position.addScaledVector(p.v, dt);
    p.m.rotation.x += p.w.x * dt; p.m.rotation.y += p.w.y * dt; p.m.rotation.z += p.w.z * dt;
    const g = ground(p.m.position.x, p.m.position.z) + p.r;
    if (p.m.position.y < g) { p.m.position.y = g; if (p.v.y < 0) p.v.y *= -0.3; p.v.x *= 0.6; p.v.z *= 0.6; p.w.multiplyScalar(0.6); }
  }
}
let upsideT = 0;
function recover() { const yaw = Math.atan2(-_fw.z, _fw.x); place(car.p.x, car.p.z, yaw); toast('Back on its wheels'); }
$('btn-recover').addEventListener('click', recover);
document.querySelectorAll('#speedpick button').forEach(b => {
  b.classList.toggle('on', (b.dataset.v === '2') === FAST);
  b.addEventListener('click', () => { setSpeed(b.dataset.v === '2'); showRecords(); document.querySelectorAll('#speedpick button').forEach(o => o.classList.toggle('on', o === b)); });
});
$('btn-go').addEventListener('click', () => { $('brief').classList.remove('on'); running = true; });
{ const go = e => { e.preventDefault(); location.href = '../moon'; }; $('back').addEventListener('click', go); }

/* ── loop ── */
let running = false, last = performance.now();
const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3(); let camInit = false;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (running) {
    const kf = (keys.w || keys.arrowup ? 1 : 0) - (keys.s || keys.arrowdown ? 1 : 0), kt = (keys.a || keys.arrowleft ? 1 : 0) - (keys.d || keys.arrowright ? 1 : 0);
    throttle = kf || stick.y; steerIn = -(kt || -stick.x);
    const n = Math.min(12, Math.ceil(dt / (1 / 240))), h = dt / n;
    if (!CRASH.on) for (let i = 0; i < n; i++) step(h);
    _up.set(0, 1, 0).applyQuaternion(car.q); _fw.set(1, 0, 0).applyQuaternion(car.q); stepCrash(dt);
    kick(dt); layTracks();
    if (Math.max(Math.abs(car.p.x - PATCH.cx), Math.abs(car.p.z - PATCH.cz)) > 14) buildPatch(car.p.x, car.p.z);      // keep the fine ground under the rover
    upsideT = _up.y < 0.35 ? upsideT + dt : 0; $('btn-recover').classList.toggle('on', upsideT > 1.2);
  }
  rover.position.copy(car.p); rover.quaternion.copy(car.q); turnWheels();
  // chase camera, held a little above the ground
  ORB.idle += dt; if (ORB.idle > 2.5) { ORB.yaw *= Math.exp(-dt * 1.5); ORB.pitch += (0.18 - ORB.pitch) * Math.min(1, dt * 1.5); }
  _up.set(0, 1, 0).applyQuaternion(car.q); _fw.set(1, 0, 0).applyQuaternion(car.q);
  if (pov === 2) {      // Gene Cernan's seat: the camera rides with the rover, every bump included
    camera.position.copy(_a.set(-0.62, 0.95, -0.32).applyQuaternion(car.q).add(car.p));
    camera.up.copy(_up); camera.lookAt(_r.copy(camera.position).addScaledVector(_fw, 10).addScaledVector(_up, -1.4).add(_tmp.set(0, 0, 0)));
    camera.up.set(0, 1, 0);
  } else {
    const heading = Math.atan2(-_fw.z, _fw.x), yaw = heading + Math.PI + ORB.yaw, D = pov === 1 ? 16 : 7.5, lift = pov === 1 ? 0.35 : 0;
    const want = _tmp.set(car.p.x + Math.cos(yaw) * Math.cos(ORB.pitch + lift) * D, car.p.y + 1.6 + Math.sin(ORB.pitch + lift) * D, car.p.z - Math.sin(yaw) * Math.cos(ORB.pitch + lift) * D);
    want.y = Math.max(want.y, ground(want.x, want.z) + 1.2);
    if (!camInit) { camPos.copy(want); camTgt.copy(car.p); camInit = true; }
    camPos.lerp(want, 1 - Math.exp(-dt * 4)); camTgt.lerp(_a.copy(car.p).add(_r.set(0, 0.6, 0)), 1 - Math.exp(-dt * 8));
    camera.position.copy(camPos); camera.lookAt(camTgt);
  }
  if (window.__lrv && window.__lrv.look) camera.lookAt(window.__lrv.look);      // test hook
  sun.position.copy(car.p).addScaledVector(SUN, 120); sun.target.position.copy(car.p);
  const kmh = Math.abs(car.v.dot(_fw)) * 3.6; $('speed').textContent = kmh.toFixed(1); if (running) speedRecord(kmh, AIR.grounded && AIR.t === 0, dt); lineFade(dt);
  $('air').textContent = AIR.t > 0.15 ? `Airborne ${AIR.t.toFixed(1)} s` : '';
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('on'); }
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
    for (let t = 0; t < nTri; t++) { const a = vi(t, 0), b = vi(t, 1), c = vi(t, 2), ka = inside(f, a);
      keep[ka >= 0 && inside(f, b) === ka && inside(f, c) === ka ? ka : 4].push(a, b, c); }
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
function turnWheels() { WHEEL_PARTS.forEach((w, k) => { w.steer.rotation.y = -car.steer * WHEELS[k].steer; w.spin.rotation.z = -WHEELS[k].spin; }); }

/* ── start ── */
(async () => {
  $('loadmsg').textContent = 'Shaping the valley…';
  await new Promise(r => setTimeout(r, 30));
  try { const r = await fetch('../models/moon-a17.bin'); if (r.ok) { DEM = new Int16Array(await r.arrayBuffer()); DEM0 = demRaw(0, 0); } } catch (e) { /* offline without it: flat ground, no mountains */ }
  buildGround(); indexRocks(); reliefMap(); groundMesh(); buildPatch(0, 0); scene.add(patchMesh); rockMeshes(); routeDots(); showRecords();
  if (DEM) farMesh();
  place(0, 0, Math.atan2(350, 82));      // facing north, up the valley toward the North Massif
  $('loadmsg').textContent = 'Unloading the rover…';
  const [lrv, lm] = await Promise.all([loader.loadAsync('../models/lrv.glb').catch(() => null), loader.loadAsync('../models/lm.glb').catch(() => null)]);
  if (lrv) { const o = lrv.scene; dusty(o); o.updateMatrixWorld(true); o.position.y = -0.78 - new THREE.Box3().setFromObject(o).min.y; rover.add(o); rigWheels(); }      // tires on the ground at the resting ride height
  else rover.add(new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.5, 2.06), new THREE.MeshStandardMaterial({ color: 0xb9b6b0 })));
  if (lm) { const o = lm.scene; dusty(o); const x = -12, z = 4; o.position.set(x, ground(x, z) - 0.15, z); o.rotation.y = -Math.PI / 2; scene.add(o); }
  $('loading').classList.remove('on'); $('brief').classList.add('on');
  requestAnimationFrame(t => { last = t; frame(t); });
})();
window.__lrv = { ORB, WHEEL_PARTS, WHEELS, rover, CRASH, OBJ, CPS, RUN, breakApart, EARTH, look: null, car, AIR, step, ground, place, tick: (n, dt = 1 / 60) => { for (let i = 0; i < n; i++) { const k = 4; for (let j = 0; j < k; j++) step(dt / k); } }, set: (t, s) => { throttle = t; steerIn = s; }, craters };
