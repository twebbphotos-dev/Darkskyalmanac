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
import { createStick, buzz } from '../../rover-game/src/stick.js';
import { DETAIL } from '../../rover-game/src/detail.js';      // the Mars simulator's detail setting, shared
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
const craters = [], rocks = [], VAN = { x: 0, z: 0 };
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
  // Van Serg, stop 9: a real crater about 100 m across, true size, beside where the rover parked (stop 9 is at 1735 m east,
  // 1228 m south of the lander, so 421.75, -303 here), set just off the route. Its rim is strewn with angular blocks, mostly
  // under 30 cm, a few up to about 2 m (the Apollo 17 Preliminary Science Report). Its own random numbers, so nothing else moves.
  { const v = rng(17), x = 421.75 + 38, z = -303 + 44; add(x, z, 50, 0.5); VAN.x = x; VAN.z = z;
    for (let i = 0; i < 170; i++) { const a = v() * 6.2832, d = 50 * (0.86 + Math.pow(v(), 1.5) * 1.1);
      rocks.push({ x: x + Math.cos(a) * d, z: z + Math.sin(a) * d, s: 0.07 + Math.pow(v(), 4) * 0.95, yaw: v() * 6.28, k: v() }); } }
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
  const h = groundBase(x, z) + (f > 0 ? (microRaw(x, z) + craterFine(x, z)) * f : 0) + rockH(x, z);
  return SLAB.on && Math.abs(x - SLAB.x) < 8 && Math.abs(z - SLAB.z) < 8 ? Math.max(h, slabAt(x, z)) : h;
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
// the ramp: one of the five pieces lies tilted, one end bedded in the soil and the other raised, its long face a ramp
// you can drive. Its surface is ground for the wheels (slabAt, in ground()), and the same function shapes its mesh.
const SLAB = { on: false, x: 0, z: 0, c: 1, s: 0, L: 10, W: 4.6, H: 2.4 };
function slabRel(u, v) {      // height above the hillside at u along (0 at the bedded end, L at the raised lip) and v across
  const { L, W, H } = SLAB;
  if (u < -0.6 || u > L + 1.2 || Math.abs(v) > W / 2 + 1.4) return -9;
  const hw = W / 2 * (0.86 + 0.28 * fbm(u * 0.45 + 7, 3.3, 3)), le = L + 0.8 * (fbm(v * 0.6 + 2, 8.1, 3) - 0.5);      // a ragged outline, not a box
  const top = H * Math.max(0, u) / L - 0.12 + (0.1 * (fbm(u * 0.9 + 4, v * 0.9, 3) - 0.5) + 0.035 * (fbm(u * 4 + 1, v * 4 - 3, 2) - 0.5)) * Math.min(1, Math.max(0, u));
  const side = ss(hw + 0.6, hw - 0.9, Math.abs(v)), lip = ss(le + 0.5, le - 0.45, u);      // sides that fall away in a broken curve, a snapped-off lip
  return top * side * lip - 1.2 * (1 - side * lip);
}
function slabAt(x, z) {
  const dx = x - SLAB.x, dz = z - SLAB.z, u = dx * SLAB.c + dz * SLAB.s + SLAB.L / 2, v = -dx * SLAB.s + dz * SLAB.c, r = slabRel(u, v);
  return r < -8 ? -1e9 : groundBase(x, z) + r;
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
  // the fifth piece, the ramp: below the boulder on its downhill side, running down the slope, its lip at the lower end
  const a = Math.PI / 2 - 0.15;      // its long axis, from the bedded end to the lip: south, a little east
  Object.assign(SLAB, { x: BOULDER.x + 9, z: BOULDER.z + 13, c: Math.cos(a), s: Math.sin(a), on: true });
  const NU = 70, NV = 36, U0 = -0.5, U1 = SLAB.L + 1.1, V0 = -SLAB.W / 2 - 1.3, pos = [], idx = [];
  for (let j = 0; j <= NV; j++) for (let i = 0; i <= NU; i++) {
    const u = U0 + (U1 - U0) * i / NU, v = V0 + (-2 * V0) * j / NV, x = SLAB.x + (u - SLAB.L / 2) * SLAB.c - v * SLAB.s, z = SLAB.z + (u - SLAB.L / 2) * SLAB.s + v * SLAB.c;
    const r = slabRel(u, v); pos.push(x, groundBase(x, z) + (r < -8 ? -1.2 : r), z);
  }
  for (let j = 0; j < NV; j++) for (let i = 0; i < NU; i++) { const k = j * (NU + 1) + i; idx.push(k, k + NU + 1, k + 1, k + 1, k + NU + 1, k + NU + 2); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); sg.setIndex(idx); sg.computeVertexNormals();
  if (sg.attributes.normal.getY(0) < 0) { idx.reverse(); sg.setIndex(idx); sg.computeVertexNormals(); }
  rockColors(sg, 21.7);
  const sm = new THREE.Mesh(sg, mat); sm.castShadow = sm.receiveShadow = true; scene.add(sm);
}
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
// Speed, chosen on the briefing card: real (1), double (2), or triple (3, unlocked by finishing the time trial once),
// the faster ones with stronger motors and grippier tires to get there
const unlocked3 = () => true;      // open to everyone for now (it was unlocked by finishing a lap: !!(REC.lap || REC.lap2 || REC.lap3))
let SPD = (() => { try { return +localStorage.getItem('lrv-speed') || 1; } catch (e) { return 1; } })();
const WHEEL_R = 0.41, REST = 0.36, K = 4200, C_DAMP = 620, CRR = 0.05, VREV = 1.6;
let MU = 0.62, VMAX = 5.0;      // 5 m/s = 18 km/h, Gene Cernan's top speed on Apollo 17 (the design speed on the level was about 13 km/h)
function setSpeed(n) { SPD = n === 3 && unlocked3() ? 3 : n === 2 || n === 3 ? 2 : 1; MU = [0.62, 0.85, 1.0][SPD - 1]; VMAX = [5.0, 11.2, 15.0][SPD - 1]; try { localStorage.setItem('lrv-speed', String(SPD)); } catch (e) { /* not remembered */ } }
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
  toast(`Airborne ${a.t.toFixed(1)} s · ${U.m(a.d, 1)} · ${U.m(a.peak, 1)} high${flip}${recs.length ? ' · new record' : ''}`);
  showRecords();
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
const RUN = { on: false, t: 0, cp: 0, peak: 0, away: false, warned: false };
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
  if (off > 35) { RUN.on = false; RUN.away = false; $('clock').textContent = ''; toast('Too far from the route · time trial over'); return; }
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
const CRASH = { roof: 0, on: false, t: 0, fade: 0, safe: { x: 0, z: 0, yaw: 0 }, safeT: 0, pieces: [] };
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
  CRASH.on = true; CRASH.t = 0; CRASH.fade = 0; rover.visible = false;
  CRASH.pieces.forEach(p => scene.remove(p.m)); CRASH.pieces = [];
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
    const wheel = key[0] === 'w', go = R() < (wheel ? 0.1 + 0.45 * k : 0.05 + 0.4 * k);
    if (go) { launch(mesh(d), d.c, (wheel ? 1.0 : 0.6) * (0.3 + k), wheel, d.sz); continue; }
    const host = wheel ? ends[d.c.x > 0 ? 'c2' : 'c0'] : null, g = mesh(d);      // left on, knocked askew: a wheel goes with its end of the chassis
    if (host) g.position.copy(d.c).sub(C).sub(host.position); else g.position.copy(d.c).sub(C);
    g.rotation.set((R() - 0.5) * (wheel ? 0.7 : 0.3) * (0.3 + k), (R() - 0.5) * 0.3 * (0.3 + k), (R() - 0.5) * 0.3 * (0.3 + k));
    (host || body).add(g); }
  body.position.copy(C).applyMatrix4(rover.matrixWorld); body.quaternion.copy(car.q); scene.add(body);
  const rr = body.position.clone().sub(car.p);
  CRASH.pieces.push(Object.assign({ m: body, v: car.v.clone().add(car.w.clone().cross(rr)), w: car.w.clone() }, debrisBody(body)));
  for (let j = 0, n = Math.round(30 + 70 * k); j < n; j++) { const i = dnext; dnext = (dnext + 1) % DN;      // a puff of dust, falling straight back
    dpos[i * 3] = car.p.x + (R() - .5) * 2; dpos[i * 3 + 1] = car.p.y; dpos[i * 3 + 2] = car.p.z + (R() - .5) * 2;
    dvel[i * 3] = car.v.x * 0.5 + (R() - .5) * 3 * (0.3 + k); dvel[i * 3 + 1] = R() * 2.5 * (0.3 + k); dvel[i * 3 + 2] = car.v.z * 0.5 + (R() - .5) * 3 * (0.3 + k); dlife[i] = 1; }
  car.v.set(0, 0, 0); car.w.set(0, 0, 0); AIR.t = 0; AIR.grounded = true;
  toast(k < 0.4 ? 'Rollover · the rover is wrecked' : 'Crash · the rover breaks apart');
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
  x.addScaledVector(p.v, h);
  const wl = p.w.length(); if (wl > 1e-6) q.premultiply(_dq.setFromAxisAngle(_dw.copy(p.w).divideScalar(wl), wl * h)).normalize();
  p.still = touch && p.v.length() < 0.06 && wl < 0.08 ? p.still + h : 0; if (p.still > 0.6) p.rest = true;      // settled: leave it lying there
}
function stepCrash(dt) {
  if (!CRASH.on) {      // remember where it last drove upright, to bring it back there
    if ((CRASH.safeT += dt) > 1 && _up.y > 0.85 && AIR.grounded) { CRASH.safeT = 0; CRASH.safe = { x: car.p.x, z: car.p.z, yaw: Math.atan2(-_fw.z, _fw.x) }; }
    if (CRASH.roof > 3.5 || (_up.y < -0.2 && CRASH.topDown && car.v.length() > 4)) breakApart(Math.max(CRASH.roof, car.v.length()));      // only on landing upside down: a roll in the air is not yet a crash
    CRASH.topDown = false;
    CRASH.roof = 0;
  } else if ((CRASH.t += dt) > 3.5) {
    CRASH.on = false; rover.visible = true; place(CRASH.safe.x, CRASH.safe.z, CRASH.safe.yaw); camInit = false; toast('A new rover · back where you last drove safely');
  }
  if (CRASH.pieces.length && (CRASH.fade += dt) > 10) {      // the wreck fades away after 10 s
    const o = Math.max(0, 1 - (CRASH.fade - 10) / 1.5); DEBRIS_MATS.forEach(m => { if (!m.transparent) { m.transparent = true; m.needsUpdate = true; } m.opacity = o; });
    if (o === 0) { CRASH.pieces.forEach(p => scene.remove(p.m)); CRASH.pieces = []; }
  }
  const n = Math.min(12, Math.ceil(dt * 200)); for (const p of CRASH.pieces) for (let i = 0; i < n; i++) stepDebris(p, dt / n);
}
let upsideT = 0;
function recover() { const yaw = Math.atan2(-_fw.z, _fw.x); place(car.p.x, car.p.z, yaw); toast('Back on its wheels'); }
$('btn-recover').addEventListener('click', recover);
if (U.US) {      // the start card, in US units
  document.querySelectorAll('#speedpick button').forEach(b => { b.textContent = ['Real', 'Double', 'Triple'][b.dataset.v - 1] + ' · ' + U.kmh(18 * b.dataset.v); });
  $('spec-rover').textContent = 'About 1,540 lb loaded with crew; 10 ft long; four wire-mesh wheels, each with its own motor; front and rear steering';
  $('fine-rec').textContent = '11 mph';
  $('spec-top').textContent = '11 mph, the record Gene Cernan set on Apollo 17 (it was built for about 8 mph on the level). Faster downhill, where gravity does the work';
}
document.querySelectorAll('#speedpick button').forEach(b => {
  if (b.dataset.v === '3') b.hidden = !unlocked3();
  b.classList.toggle('on', +b.dataset.v === SPD);
  b.addEventListener('click', () => { setSpeed(+b.dataset.v); showRecords(); document.querySelectorAll('#speedpick button').forEach(o => o.classList.toggle('on', o === b)); });
});
$('btn-go').addEventListener('click', () => { $('brief').classList.remove('on'); if (SEC.ok && LM.on) startIntro(); else running = OBJ.live = true; });
$('cine-skip').addEventListener('click', () => { if (INTRO.on) endIntro(); else if (BRIEF.on && BRIEF.t < BRIEF.lines[2][0]) BRIEF.t = BRIEF.lines[2][0]; });
{ const go = e => { e.preventDefault(); location.href = '../moon'; }; $('back').addEventListener('click', go); }

/* ── loop ── */
let running = false, last = performance.now();
const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3(); let camInit = false;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (BRIEF.on) stepBrief(dt);
  if (running) {
    const kf = (keys.w || keys.arrowup ? 1 : 0) - (keys.s || keys.arrowdown ? 1 : 0), kt = (keys.a || keys.arrowleft ? 1 : 0) - (keys.d || keys.arrowright ? 1 : 0);
    throttle = kf || stick.y; steerIn = -(kt || -stick.x);
    if (Math.abs(throttle) > 0.02 || Math.abs(steerIn) > 0.02) parked = false;
    const n = Math.min(12, Math.ceil(dt / (1 / 240))), h = dt / n;
    if (!CRASH.on) for (let i = 0; i < n; i++) step(h);
    _up.set(0, 1, 0).applyQuaternion(car.q); _fw.set(1, 0, 0).applyQuaternion(car.q); stepCrash(dt);
    kick(dt); layTracks();
    if (Math.max(Math.abs(car.p.x - PATCH.cx), Math.abs(car.p.z - PATCH.cz)) > 14) buildPatch(car.p.x, car.p.z);      // keep the fine ground under the rover
    upsideT = _up.y < 0.35 ? upsideT + dt : 0; $('btn-recover').classList.toggle('on', upsideT > 1.2);
  }
  rover.position.copy(car.p); rover.quaternion.copy(car.q); turnWheels();
  if (INTRO.on) { stepIntro(dt); renderer.render(scene, camera); requestAnimationFrame(frame); return; }
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
  if (window.__lrv && window.__lrv.cam) camera.position.copy(window.__lrv.cam);      // test hooks
  if (window.__lrv && window.__lrv.look) camera.lookAt(window.__lrv.look);
  sun.position.copy(car.p).addScaledVector(SUN, 120); sun.target.position.copy(car.p);
  const kmh = Math.abs(car.v.dot(_fw)) * 3.6; $('speed').textContent = U.speed(kmh).toFixed(1); if (running) speedRecord(kmh, AIR.grounded && AIR.t === 0, dt); lineFade(dt);
  $('air').textContent = AIR.t > 0.15 ? `Airborne ${AIR.t.toFixed(1)} s` : '';
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('on'); }
  siteMarks();
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
  INTRO.on = false; document.body.classList.remove('intro'); $('cine-cap').classList.remove('on'); OBJ.ring.visible = OBJ.live = true;
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
  const a = _ic.set(c.x + INTRO.d.x * 13 + side.x * 6, c.y + 3.2, c.z + INTRO.d.z * 13 + side.z * 6);
  const b = _it.set(c.x + INTRO.d.x * 3.5 + side.x * 6.5, c.y + 1.2, c.z + INTRO.d.z * 3.5 + side.z * 6.5);
  const kb = sm(4, 8);
  camera.position.copy(a).lerp(b, kb);
  const cE = new THREE.Vector3(car.p.x + INTRO.d.x * 6 - side.x * 3, car.p.y + 2.2, car.p.z + INTRO.d.z * 6 - side.z * 3);
  camera.position.lerp(cE, sm(17, 23.5));
  if (T > BACK[0] - 0.6) {      // up and off to the side for the turn, away from the lander, then down behind it for the start
    const P = INTRO.path, m = P[P.length >> 1], e = P[P.length - 1], fx = Math.cos(e[2]), fz = -Math.sin(e[2]);
    let sx = -fz, sz = fx; if ((m[0] - LM.x) * sx + (m[1] - LM.z) * sz < 0) { sx = -sx; sz = -sz; }
    const H = _tmp.set(m[0] + sx * 9 - fx * 3, groundBase(m[0], m[1]) + 5, m[1] + sz * 9 - fz * 3);
    camera.position.lerp(H, sm(BACK[0] - 0.6, BACK[0] + 1.6));
    const D = pov === 1 ? 16 : 7.5, lift = pov === 1 ? 0.35 : 0, pc = Math.cos(ORB.pitch + lift) * D;
    camera.position.lerp(_tmp.set(e[0] - fx * pc, ground(e[0], e[1]) + 0.8 + 1.6 + Math.sin(ORB.pitch + lift) * D, e[1] - fz * pc), sm(BACK[1] - 1.8, INTRO_LEN));
  }
  camera.position.y = Math.max(camera.position.y, ground(camera.position.x, camera.position.z) + 1.2);
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
    'Its rim is strewn with angular blocks thrown out by the impact, mostly smaller than 30 cm, with a few boulders up to about 2 m across. A piece they broke from a boulder on the rim, sample 79115, turned out to be regolith breccia: loose lunar soil welded into rock by the shock of an impact.'] },
];
const _sp = new THREE.Vector3();
let siteRun = false;
function openSite(st) {
  $('sc-t').textContent = st.name; $('sc-s').textContent = st.sub; $('sc-b').innerHTML = st.body.map(t => `<p>${t}</p>`).join('');
  $('sitecard').classList.add('on'); siteRun = running; running = false;
}
$('sc-close').addEventListener('click', () => { $('sitecard').classList.remove('on'); running = siteRun; });
SITES.forEach(st => { const b = document.createElement('button'); b.className = 'site'; b.innerHTML = `<i></i>${st.name}`; b.addEventListener('click', () => openSite(st)); $('sites').appendChild(b); st.el = b; });
function siteMarks() {
  for (const st of SITES) {
    const [x, z, h] = st.at(), d = Math.hypot(x - camera.position.x, z - camera.position.z);
    _sp.set(x, ground(x, z) + h, z).project(camera);
    const show = d < 320 && _sp.z < 1 && Math.abs(_sp.x) < 1.05 && Math.abs(_sp.y) < 1.05;
    st.el.style.display = show ? 'flex' : 'none';
    if (show) { st.el.style.left = ((_sp.x + 1) / 2 * innerWidth).toFixed(1) + 'px'; st.el.style.top = ((1 - _sp.y) / 2 * innerHeight).toFixed(1) + 'px'; st.el.style.opacity = d < 60 ? 1 : 0.7; }
  }
}
function turnWheels() { WHEEL_PARTS.forEach((w, k) => { w.steer.rotation.y = -car.steer * WHEELS[k].steer; w.spin.rotation.z = -WHEELS[k].spin; }); }

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
  if (lrv) { const o = lrv.scene; dusty(o); o.updateMatrixWorld(true); o.position.y = -0.78 - new THREE.Box3().setFromObject(o).min.y; rover.add(o); rigWheels(); buildSections(); buildDebris(); }      // tires on the ground at the resting ride height
  else rover.add(new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.5, 2.06), new THREE.MeshStandardMaterial({ color: 0xb9b6b0 })));
  if (lm) { const o = lm.scene; dusty(o); const x = LM.x, z = LM.z; LM.y = ground(x, z); LM.on = true; o.position.set(x, ground(x, z) - 0.15, z); o.rotation.y = -Math.PI / 2; scene.add(o); }
  $('loading').classList.remove('on'); $('brief').classList.add('on');
  requestAnimationFrame(t => { last = t; frame(t); });
})();
window.__lrv = { ORB, WHEEL_PARTS, WHEELS, rover, CRASH, stepDebris, INTRO, SEC, BOULDER, SLAB, VAN, SITES, openSite, OBJ, CPS, RUN, breakApart, EARTH, look: null, car, AIR, step, ground, place, tick: (n, dt = 1 / 60) => { for (let i = 0; i < n; i++) { const k = 4; for (let j = 0; j < k; j++) step(dt / k); } }, set: (t, s) => { throttle = t; steerIn = s; parked = false; }, craters };
