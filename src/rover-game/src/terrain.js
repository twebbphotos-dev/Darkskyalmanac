/* ──────────────────────────────────────────────────────────────
   terrain.js — the ground: heightfield, craters, ripples, rocks,
   layered outcrops.

   One height function is shared by everything that touches the
   ground — the mesh, the rover's six wheels, the rock scatter,
   Ingenuity's landing-site search. Change it and all of them follow.
   ────────────────────────────────────────────────────────────── */
import * as THREE from 'three';
import { rng, MARS, GRADE_GLSL, gradeColor } from './mars.js';

export const PLAY_R = 500;                 // you can roam this far from the origin (2.7: 2.5× wider; 3.5: 3.2× the area again, more of the real ground)
export const TILE = 7;                     // metres per ground-texture tile
export const START = { x: 0, z: 18 };
export const OUTCROP_SITES = [            // drawn in closer in 2.4: a shorter drive between finds
  [  52, -78], [-112,  -8], [ 128,  96],
  [ -58, 152], [ 196,-112], [-168,-150],
];
/* Mesas: erosional remnants standing proud of the floor, cliffs of layered rock on
   every side but one, where a talus ramp lets you drive up to the top for the view. */
export const MESAS = [
  { x:  -40, z:  -150, R: 26, H: 17, ramp:  2.2 },
  { x:  150, z:   10, R: 20, H: 13, ramp:  3.4 },
  { x:  -10, z:  205, R: 30, H: 21, ramp: -1.6 },
  { x: -195, z:   75, R: 22, H: 15, ramp:  0.2 },
  { x:   95, z: -205, R: 17, H: 11, ramp:  1.2 },
  { x:  215, z:  170, R: 19, H: 14, ramp: -2.4 },
];

const FINE = 1.6;                         // grid spacing where you can drive...
const FINE_IN = 330, MID = 2.4;             // ...out to here, then a little coarser to the roaming edge
const FINE_HALF = PLAY_R + 48;                  // ...out to here (just past the roaming edge), then the grid stretches
const WIND = { x: 0.82, z: 0.57 };         // prevailing wind, sets the ripple grain
const RIPPLE_L = 6.4;                      // large-ripple wavelength, metres

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

/* ── seeded value noise, in world units ───────────────────────── */
function noiseField(seed, cells = 128) {
  const rand = rng(seed);
  const grid = new Float32Array(cells * cells);
  for (let i = 0; i < grid.length; i++) grid[i] = rand() * 2 - 1;
  const at = (a, b) => grid[(((b % cells) + cells) % cells) * cells + (((a % cells) + cells) % cells)];
  return (x, y) => {
    const x0 = Math.floor(x), y0 = Math.floor(y);
    const fx = x - x0, fy = y - y0;
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const a = at(x0, y0), b = at(x0 + 1, y0), c = at(x0, y0 + 1), d = at(x0 + 1, y0 + 1);
    return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
  };
}

const nSwell = noiseField(2024), nRoll = noiseField(7741), nRidge = noiseField(905);
const nRough = noiseField(1337), nFine = noiseField(4242);
const nSand = noiseField(611), nWarp = noiseField(88), nRim = noiseField(3301), nRock = noiseField(1960);

/* ── impact craters ───────────────────────────────────────────── */
/* A few big degraded ones, many small fresh ones — the same lopsided
   size distribution the real surface has. Kept clear of the start
   pad and the outcrops. */
export const CRATERS = (() => {
  const rand = rng(31415);
  const list = [];
  const clear = (x, z, R) =>
    Math.hypot(x - START.x, z - START.z) > R * 1.9 + 9 &&
    OUTCROP_SITES.every(([ox, oz]) => Math.hypot(x - ox, z - oz) > R * 1.7 + 8) &&
    list.every(c => Math.hypot(x - c.x, z - c.z) > (R + c.R) * 1.15);

  let guard = 0;
  while (list.length < 22 && guard++ < 4000) {
    const u = rand();
    const R = list.length < 2 ? 19 + rand() * 7            // two landmarks
            : list.length < 7 ? 8 + rand() * 6
            : 3.6 + u * u * 4.5;
    const a = rand() * Math.PI * 2, d = 20 + Math.sqrt(rand()) * (PLAY_R - 30);
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    if (!clear(x, z, R)) continue;
    const fresh = R < 8 ? 0.15 : 0.105;                    // big ones have filled in
    list.push({ x, z, R, D: R * fresh, H: R * 0.038 });
  }
  return list;
})();

function craterAt(x, z) {
  let h = 0;
  for (let i = 0; i < CRATERS.length; i++) {
    const c = CRATERS[i];
    const dx = x - c.x, dz = z - c.z, lim = c.R * 2.6;
    if (dx > lim || dx < -lim || dz > lim || dz < -lim) continue;
    const t = Math.sqrt(dx * dx + dz * dz) / c.R;
    if (t >= 2.6) continue;
    if (t < 1) h += -c.D + (c.D + c.H) * Math.pow(t, 2.3);          // bowl
    else { const k = (2.6 - t) / 1.6; h += c.H * k * k * k; }       // rim and ejecta apron
  }
  return h;
}

/* nearest crater in units of its own radius: <1 inside, ~1 on the rim */
export function craterT(x, z) {
  let best = 99;
  for (let i = 0; i < CRATERS.length; i++) {
    const c = CRATERS[i];
    const t = Math.hypot(x - c.x, z - c.z) / c.R;
    if (t < best) best = t;
  }
  return best;
}

/* ── wind ripples ─────────────────────────────────────────────── */
/* Sand collects in patches; within a patch it is combed into ripples
   square to the wind. 0 = bare ground, 1 = full sand sheet. */
export function sandMask(x, z) {
  let m = smooth(0.1, 0.48, nSand(x / 68, z / 68) + nRoll(x / 31, z / 31) * 0.25);
  if (m > 0) for (let i = 0; i < OUTCROP_SITES.length; i++) {      // none banked up the outcrop rises
    const d = Math.hypot(x - OUTCROP_SITES[i][0], z - OUTCROP_SITES[i][1]);
    if (d < 16) m *= smooth(7, 16, d);
  }
  return m;
}

/* flat bedrock broken into polygonal plates — the pavement Jezero's floor is known for */
export function paverMask(x, z) {
  return smooth(0.12, 0.42, nSwell(x / 61 + 9.3, z / 61 - 4.1) + nRough(x / 14, z / 14) * 0.18) * (1 - sandMask(x, z));
}

function ripples(x, z, m) {
  const phase = (x * WIND.x + z * WIND.z) / RIPPLE_L + nWarp(x / 24, z / 24) * 0.85;
  const s = Math.sin(phase * Math.PI * 2);
  // sharper crests than troughs, and crests that fade in and out along their length
  const along = 0.62 + 0.38 * nFine((x * WIND.z - z * WIND.x) / 9, phase * 0.5);
  return (Math.pow(0.5 + 0.5 * s, 1.9) - 0.33) * 0.44 * m * along;
}

/* ── the delta, off to the west ───────────────────────────────── */
/* Out of reach, but always in view: the eroded front of a river delta —
   a long scarp with a ragged edge — and one butte left standing in
   front of it, the way Kodiak stands off Jezero's. 0 = floor, 1 = top. */
function deltaFront(x, z) {
  const edge = -272 + nRim(z / 170, 3.1) * 46 + nSwell(z / 48, 7.7) * 16;
  return smooth(0, 1, (edge - x) / 34);
}
function butte(x, z) {
  const d = Math.hypot(x + 214, z + 86) * (1 + 0.2 * nRoll(x / 38, z / 38));
  return smooth(37, 23, d);
}
/* where layered rock is exposed in a cliff, for the strata shading */
export function strataMask(x, z) { return Math.max(deltaFront(x, z), butte(x, z)); }

/* ── the height function ──────────────────────────────────────── */
/* ── the real ground: HiRISE elevation of Jezero ──────────────────
   Two crops of NASA's Mars 2020 Terrain-Relative-Navigation DTM mosaic,
   centred on Perseverance's landing point (18.4447° N, 77.4508° E), +x east,
   +z south, heights in metres relative to the landing site:
     site_1m.png  1.2 km square at 1 m      area_4m.png  8 km square at 4 m
   Packed as 16-bit values in the red and green channels: (h + 300) × 100. */
export const DTM = { site: null, area: null, edge: 0, on: false };
/* Space is compressed: one game metre covers SQ metres of Mars, so the delta, the
   buttes and the crater floor sit SQ times closer than they really are. Heights are
   squashed by SV rather than SQ, so slopes come out steeper (×SQ/SV) but nothing
   becomes a wall. */
const SQ = 1.5, SV = 3.0;
export const EXT = 1995;                           // the mesh, and the elevation, run out to here
async function decode(url, n) {
  const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
  const c = document.createElement('canvas'); c.width = c.height = n;
  const g = c.getContext('2d', { willReadFrequently: true, colorSpace: 'srgb' });
  g.drawImage(img, 0, 0);
  const d = g.getImageData(0, 0, n, n).data, out = new Float32Array(n * n);
  for (let i = 0; i < n * n; i++) out[i] = (d[i * 4] * 256 + d[i * 4 + 1]) / 100 - 300;
  return out;
}
export async function loadDTM(base = 'dtm/') {
  try {
    [DTM.site, DTM.area] = await Promise.all([decode(base + 'site_1m.png', 1200), decode(base + 'area_4m.png', 2000)]);
  } catch (e) { console.warn('elevation data unavailable — using the procedural ground', e); return false; }
  const a = DTM.area, edge = [];
  for (let i = 0; i < 2000; i += 8) edge.push(a[i], a[1999 * 2000 + i], a[i * 2000], a[i * 2000 + 1999]);
  edge.sort((p, q) => p - q); DTM.edge = edge[edge.length >> 1]; DTM.plain = DTM.edge * SV;
  DTM.on = true;
  CRATERS.length = 0;                              // the real craters are in the elevation now
  return true;
}
function bilerp(arr, n, u, v) {
  u = Math.max(0, Math.min(n - 1.001, u)); v = Math.max(0, Math.min(n - 1.001, v));
  const i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, k = j * n + i;
  const a = arr[k], b = arr[k + 1], c = arr[k + n], d = arr[k + n + 1];
  return (a + (b - a) * fu) * (1 - fv) + (c + (d - c) * fu) * fv;
}
function dtmAt(x, z) { x *= SQ; z *= SQ; return dtmRaw(x, z) * SV; }
function dtmRaw(x, z) {
  const far = bilerp(DTM.area, 2000, (x + 4000) / 4 - 0.5, (z + 4000) / 4 - 0.5);
  const m = Math.max(Math.abs(x), Math.abs(z));
  if (m >= 598) return far;
  const near = bilerp(DTM.site, 1200, x + 599.5, z + 599.5);
  return m < 540 ? near : near + (far - near) * smooth(540, 598, m);
}
/* the edge of the roaming area: a ragged wall of layered rock with notches you can see
   through, and a talus skirt at its foot. */
function rimWall(x, z, d) {
  const rr = d - PLAY_R;
  if (rr < -6) return 0;
  const H = 30 + 26 * (0.5 + 0.5 * nRim(x / 90, z / 90)) + nRough(x / 22, z / 22) * 7;
  // gullies and buttresses: the wall front wanders in and out at several scales
  let s = smooth(-4, 46, rr + nRough(x / 31 + 5, z / 31) * 9 + nRim(x / 13 + 7, z / 13) * 4.5 + nFine(x / 5, z / 5) * 1.2);
  // ledges: cliff bands between benches, but wandering up and down along the wall and
  // softened, so no bench runs dead level round the whole crater
  const o = nRim(x / 38 + 3, z / 38) * 1.1 + nRough(x / 11, z / 11) * 0.3;
  const t = s * 6 + o, f = Math.floor(t);
  const lo = 0.05 + 0.75 * (0.5 + 0.5 * nRough(x / 23 + 11, z / 23));   // a bench here, a plain slope there
  s = (f + smooth(lo, 1, t - f) - o) / 6;
  return H * s + smooth(-6, 6, rr) * 1.6 + nFine(x / 3, z / 3) * 0.6 * smooth(-4, 10, rr);
}
function mesaAt(x, z) {
  let h = 0;
  for (let i = 0; i < MESAS.length; i++) {
    const m = MESAS[i], dx = x - m.x, dz = z - m.z, lim = m.R * 2.8;
    if (dx > lim || dx < -lim || dz > lim || dz < -lim) continue;
    const a = Math.atan2(dz, dx);
    const dd = Math.hypot(dx, dz) * (1 + 0.16 * nRoll(x / 19 + i, z / 19) + 0.05 * nRough(x / 4.5, z / 4.5));
    let da = Math.abs(a - m.ramp); if (da > Math.PI) da = 2 * Math.PI - da;
    const o = nRoll(x / 9 + i * 3, z / 9) * 0.7 + nRough(x / 4, z / 4) * 0.15;      // benches that wander
    const t = smooth(m.R * 1.02, m.R * 0.86, dd) * 5 + o, f = Math.floor(t);
    const lo = 0.1 + 0.7 * (0.5 + 0.5 * nRough(x / 9 + i * 5, z / 9));
    const cliff = Math.max(0, (f + smooth(lo, 1, t - f) - o) / 5);
    const ramp = Math.min(1, Math.max(0, (m.R * 2.7 - dd) / (m.R * 1.8))) * smooth(0.42, 0.2, da);
    const talus = smooth(m.R * 1.6, m.R * 0.95, dd) * 0.14;
    const cap = 1 + 0.13 * nRoll(x / 11 + i * 2, z / 11) + 0.04 * nRough(x / 3.5, z / 3.5);   // a broken, uneven caprock, not a table top
    h += m.H * Math.max(cliff * cap, ramp, talus);
  }
  return h;
}
export function mesaT(x, z) {      // nearest mesa in units of its radius
  let best = 99;
  for (const m of MESAS) best = Math.min(best, Math.hypot(x - m.x, z - m.z) / m.R);
  return best;
}

let SITE_BASE = null;
function heightReal(x, z) {
  const d = Math.sqrt(x * x + z * z);
  let h = dtmAt(x, z);
  const near = 1 - smooth(PLAY_R + 30, PLAY_R + 110, d);
  if (near > 0) {
    h += near * (nFine(x / 2.6, z / 2.6) * 0.12 + nRough(x / 13, z / 13) * 0.5);
    h += mesaAt(x, z);
    if (!SITE_BASE) SITE_BASE = OUTCROP_SITES.map(([ox, oz]) => {     // mean ground round each outcrop
      let t = 0; for (let k = 0; k < 16; k++) t += dtmAt(ox + Math.cos(k * 0.39) * 10, oz + Math.sin(k * 0.39) * 10); return t / 16;
    });
    for (let i = 0; i < OUTCROP_SITES.length; i++) {
      const dx = x - OUTCROP_SITES[i][0], dz = z - OUTCROP_SITES[i][1], d2 = dx * dx + dz * dz;
      if (d2 < 1100) {
        const w = smooth(22, 11, Math.sqrt(d2));                     // a level pad, so the beds sit flat
        h += (SITE_BASE[i] - h) * w + 0.9 * Math.exp(-d2 / (2 * 6.8 * 6.8));
      }
    }
  }
  h += rimWall(x, z, d);
  const edge = Math.max(Math.abs(x), Math.abs(z));
  if (edge > EXT - 300) h += (DTM.edge * SV - h) * smooth(EXT - 300, EXT, edge);   // settle onto the far plain at the rim of the mesh
  return h;
}

export function height(x, z) {
  if (DTM.on) return heightReal(x, z);
  const d = Math.sqrt(x * x + z * z);
  const near = 1 - smooth(PLAY_R + 30, PLAY_R + 110, d);     // fine detail fades where the grid coarsens

  // broad swells with a ridged term, so it is not all soft pillows
  const ridge = 1 - Math.abs(nRidge(x / 88, z / 88));
  let h = nSwell(x / 132, z / 132) * 5.4
        + nRoll(x / 54, z / 54) * 2.0
        + (ridge * ridge - 0.42) * 2.3;

  // shallow basin round the start
  h -= Math.exp(-(d * d) / (2 * 52 * 52)) * 3.0;

  if (near > 0) {
    h += near * (nRough(x / 11.5, z / 11.5) * 0.42 + nFine(x / 5.2, z / 5.2) * 0.11);
    h += near * craterAt(x, z);
    const m = sandMask(x, z);
    if (m > 0) h += near * ripples(x, z, m);

    // each outcrop caps a low rise: an erosional remnant standing on its own apron
    for (let i = 0; i < OUTCROP_SITES.length; i++) {
      const dx = x - OUTCROP_SITES[i][0], dz = z - OUTCROP_SITES[i][1], d2 = dx * dx + dz * dz;
      if (d2 < 1100) h += 1.3 * Math.exp(-d2 / (2 * 6.8 * 6.8));
    }
  }

  h += mesaAt(x, z) + rimWall(x, z, d);

  // the crater rim, far off: what you see on the horizon
  if (d > 230) {
    const far = smooth(230, 760, d);
    const r = 1 - Math.abs(nRim(x / 270, z / 270));
    h += far * (14 + 44 * Math.pow(r, 1.4) + nSwell(x / 140, z / 140) * 9);   // low and worn, as Jezero's rim is
  }
  // Everything settles to a level plain at the edge of the mesh, so that from
  // high above (the landing) the ground runs on into the far plain without a step.
  const edge = Math.max(Math.abs(x), Math.abs(z));
  if (edge > 700) h *= 1 - smooth(700, 915, edge);
  return h;
}

/* surface normal by central differences */
const _a = new THREE.Vector3(), _b = new THREE.Vector3();
export function normalAt(x, z, e = 1.2) {
  _a.set(2 * e, height(x + e, z) - height(x - e, z), 0);
  _b.set(0, height(x, z + e) - height(x, z - e), 2 * e);
  return _b.cross(_a).normalize();
}

/* ── terrain mesh ─────────────────────────────────────────────── */
/* One grid: 1.25 m cells across the drivable area, then stretching
   geometrically out to the rim hills. No seams, no second mesh. */
export function buildTerrain(scene, map, bump) {
  const axis = [];
  { const half = [0]; let v = 0; while (v < FINE_HALF - 1e-6) { v = Math.min(FINE_HALF, v + (v < FINE_IN ? FINE : Math.min(MID, FINE + (v - FINE_IN) * 0.03))); half.push(v); }
    axis.push(...half.slice(1).map(q => -q).reverse(), ...half); }
  let edge = FINE_HALF, step = MID;
  const outer = [];
  if (DTM.on) {   // grow to 30 m cells, then hold, out to the end of the elevation data
    while (edge < EXT) { step = Math.min(45, step * 1.16); edge = Math.min(EXT, edge + step); outer.push(edge); }
  } else for (let k = 0; k < 25; k++) { step *= 1.215; edge += step; outer.push(edge); }
  const coords = [...outer.map(v => -v).reverse(), ...axis, ...outer];
  const n = coords.length;

  const pos = new Float32Array(n * n * 3);
  const uv = new Float32Array(n * n * 2);
  const col = new Float32Array(n * n * 3);
  const sand = new Float32Array(n * n);
  const ground = new Float32Array(n * n * 2);       // x: bedrock pavement, y: cliff strata
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const k = j * n + i, x = coords[i], z = coords[j];
    pos[k * 3] = x; pos[k * 3 + 1] = height(x, z); pos[k * 3 + 2] = z;
    uv[k * 2] = x / TILE; uv[k * 2 + 1] = z / TILE;
  }

  const idx = new Uint32Array((n - 1) * (n - 1) * 6);
  let o = 0;
  for (let j = 0; j < n - 1; j++) for (let i = 0; i < n - 1; i++) {
    const a = j * n + i, b = a + 1, c = a + n, d = c + 1;
    idx[o++] = a; idx[o++] = c; idx[o++] = b;
    idx[o++] = b; idx[o++] = c; idx[o++] = d;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  geo.computeVertexNormals();

  /* Vertex tint, multiplied into the texture. Pale dust settles in hollows
     and crater floors; slopes, rims and crests are swept bare and dark; and
     the whole surface drifts between redder and greyer ground over tens of
     metres. This is most of what stops it reading as one flat carpet.
     Sand sheets get their own attribute and are shaded separately below. */
  const nrm = geo.attributes.normal;
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const k = j * n + i, x = coords[i], z = coords[j], y = pos[k * 3 + 1];
    let r = 1, g = 1, b = 1;
    if (Math.abs(x) <= FINE_HALF + 30 && Math.abs(z) <= FINE_HALF + 30) {
      const e = 3.2;
      const hollow = (height(x + e, z) + height(x - e, z) + height(x, z + e) + height(x, z - e)) / 4 - y;
      const steep = 1 - nrm.getY(k);
      const ct = craterT(x, z);
      const rim = ct > 0.8 && ct < 1.4 ? 1 - Math.abs(ct - 1.05) / 0.35 : 0;
      const sm = sandMask(x, z) * (1 - smooth(PLAY_R - 10, PLAY_R + 20, Math.hypot(x, z)));
      sand[k] = sm * (1 - smooth(0.06, 0.16, steep));          // sand will not lie on a steep face
      ground[k * 2] = paverMask(x, z) * (1 - Math.min(1, steep * 14)) * (1 - smooth(PLAY_R - 20, PLAY_R + 10, Math.hypot(x, z)));

      const dust = Math.min(1, Math.max(0, hollow) * 1.9 + (ct < 0.6 ? 0.45 : 0));
      const bare = Math.min(1, steep * 11 + Math.max(0, -hollow) * 1.6 + Math.max(0, rim) * 0.7) * (1 - sm * 0.7);
      const unit = nSwell(x / 61 + 9.3, z / 61 - 4.1);                 // which kind of ground this is
      const macro = 1 + unit * 0.2 + nRough(x / 9, z / 9) * 0.07;
      r = macro * (1 + unit * 0.05); g = macro; b = macro * (1 - unit * 0.07);
      r += (1.32 - r) * dust * 0.6;  g += (1.08 - g) * dust * 0.6;  b += (0.88 - b) * dust * 0.6;   // fine dust: the reddest thing on Mars
      r += (0.58 - r) * bare * 0.7;  g += (0.58 - g) * bare * 0.7;  b += (0.64 - b) * bare * 0.7;
    }
    if (DTM.on || Math.hypot(x, z) > PLAY_R - 8) {
      // anything steep is a cliff of layered rock: the rim wall, the mesas, the delta front, Kodiak
      const st = smooth(0.16, 0.36, 1 - nrm.getY(k));
      ground[k * 2 + 1] = st;
      r += (1.04 - r) * st * 0.6; g += (0.86 - g) * st * 0.6; b += (0.74 - b) * st * 0.6;
    }
    col[k * 3] = r; col[k * 3 + 1] = g; col[k * 3 + 2] = b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('sand', new THREE.BufferAttribute(sand, 1));
  geo.setAttribute('ground', new THREE.BufferAttribute(ground, 2));
  geo.computeBoundingSphere();

  const mat = new THREE.MeshStandardMaterial({
    map, bumpMap: bump, bumpScale: 1.6, roughness: 0.97, metalness: 0, vertexColors: true,
  });
  // Photogrammetry-scanned ground (Poly Haven, CC0): used for its detail, not its colour.
  // Each sample is divided by that texture's own average, so it adds real grain, pebbles
  // and cracks on top of the Mars colour the rest of the shader works out.
  const TL = new THREE.TextureLoader(), tx = (n, srgb) => {
    const t = TL.load(`tex/${n}.jpg`); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
    if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t;
  };
  const scan = {
    tReg: { value: tx('regolith_diff', true) }, tRegN: { value: tx('regolith_nor') },
    tSand: { value: tx('sand_diff', true) }, tSandN: { value: tx('sand_nor') },
    tPeb: { value: tx('pebbles_diff', true) }, tPebN: { value: tx('pebbles_nor') },
    tSlab: { value: tx('slab_diff', true) }, tSlabN: { value: tx('slab_nor') },
  };
  mat.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, scan);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float sand;\nattribute vec2 ground;\nvarying float vSand;\nvarying vec2 vGround;\nvarying vec3 vWPos;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvSand = sand;\nvGround = ground;\nvWPos = ( modelMatrix * vec4( position, 1.0 ) ).xyz;');

    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
      varying float vSand; varying vec2 vGround; varying vec3 vWPos;
      float vCrack;
      uniform sampler2D tReg, tRegN, tSand, tSandN, tPeb, tPebN, tSlab, tSlabN;
      vec3 detail( sampler2D t, vec2 uv, vec3 mean ) {
        vec3 c = texture2D( t, uv ).rgb / mean;
        float l = dot( c, vec3( 0.3, 0.55, 0.15 ) );
        return mix( vec3( l ), c, 0.3 );               // mostly brightness: the scan's grain, not its Earth colour
      }
      float sDet; vec2 sUv;
      ${GRADE_GLSL}
      vec2 hash2( vec2 p ) { return fract( sin( vec2( dot( p, vec2( 127.1, 311.7 ) ), dot( p, vec2( 269.5, 183.3 ) ) ) ) * 43758.5453 ); }
      float vnoise( vec2 p ) {
        vec2 i = floor( p ), f = fract( p ); f = f * f * ( 3.0 - 2.0 * f );
        float a = hash2( i ).x, b = hash2( i + vec2( 1, 0 ) ).x, c = hash2( i + vec2( 0, 1 ) ).x, d = hash2( i + vec2( 1, 1 ) ).x;
        return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y ) * 2.0 - 1.0;
      }
      float fbm( vec2 p ) { return vnoise( p ) * 0.55 + vnoise( p * 2.07 + 5.3 ) * 0.3 + vnoise( p * 4.13 + 1.7 ) * 0.15; }
      // distance to the nearest plate edge, and a random number for the plate you are on
      vec2 plates( vec2 p ) {
        vec2 n = floor( p ), f = fract( p );
        float f1 = 8.0, f2 = 8.0, id = 0.0;
        for ( int j = -1; j <= 1; j++ ) for ( int i = -1; i <= 1; i++ ) {
          vec2 g = vec2( float( i ), float( j ) );
          vec2 o = hash2( n + g );
          float d = length( g + o - f );
          if ( d < f1 ) { f2 = f1; f1 = d; id = o.x; } else if ( d < f2 ) { f2 = d; }
        }
        return vec2( f2 - f1, id );
      }`)
      // albedo: sampled a second and third time at much larger scales to break up
      // the tiling, then eased toward clean sand where the sand sheets are
      .replace('#include <map_fragment>', `
      #ifdef USE_MAP
        vec4 sampledDiffuseColor = texture2D( map, vMapUv );
        float macroL = dot( texture2D( map, vMapUv * 0.137 + 0.31 ).rgb, vec3( 0.3, 0.5, 0.2 ) );
        float macroM = dot( texture2D( map, vMapUv * 0.031 + 0.67 ).rgb, vec3( 0.3, 0.5, 0.2 ) );
        sampledDiffuseColor.rgb *= clamp( mix( 1.0, macroL / 0.085, 0.32 ) * mix( 1.0, macroM / 0.085, 0.22 ), 0.62, 1.5 );
        sampledDiffuseColor.rgb = mix( sampledDiffuseColor.rgb, vec3( 0.212, 0.099, 0.054 ), vSand * 0.82 );

        // bedrock pavement: pale flat plates a metre or so across, sand in the joints
        float viewD = length( vViewPosition );
        float pv = vGround.x * ( 1.0 - smoothstep( 70.0, 150.0, viewD ) );
        vCrack = 0.0;
        if ( pv > 0.02 ) {
          vec2 wob = vec2( sin( vWPos.z * 1.7 ) + sin( vWPos.z * 0.61 + 1.3 ), sin( vWPos.x * 1.9 ) + sin( vWPos.x * 0.53 + 2.1 ) ) * 0.07;
          vec2 pl = plates( vWPos.xz * 0.92 + wob );
          float joint = 1.0 - smoothstep( 0.03, 0.03 + 0.05 + viewD * 0.004, pl.x );
          vec3 plate = vec3( 0.265, 0.150, 0.098 ) * ( 0.78 + 0.5 * pl.y ) * ( 0.8 + 0.2 * sampledDiffuseColor.r / 0.16 );
          sampledDiffuseColor.rgb = mix( sampledDiffuseColor.rgb, plate, pv * 0.86 );
          sampledDiffuseColor.rgb = mix( sampledDiffuseColor.rgb, vec3( 0.105, 0.048, 0.026 ), joint * pv * 0.9 );
          vCrack = pv * ( 1.0 - joint * 0.4 );
        }

        // cliffs of layered rock: beds picked out wherever the face is steep
        if ( vGround.y > 0.02 ) {
          // Beds are never ruler-straight: they dip, sag and swell along the face, thin out and
          // lose definition in patches, and are streaked by dust washed down from above.
          vec2 xz = vWPos.xz;
          float warp = fbm( xz / 70.0 ) * 4.5 + fbm( xz / 17.0 + 3.1 ) * 1.3 + fbm( xz / 5.0 + 7.7 ) * 0.25 + dot( xz, vec2( 0.011, 0.006 ) );
          float yw = vWPos.y + warp;
          float yy = yw * 0.21 + fbm( vec2( yw * 0.05, dot( xz, vec2( 0.02, 0.013 ) ) ) ) * 0.35;   // uneven unit thickness
          float un = floor( yy ), fu = fract( yy );
          float tone = fract( sin( un * 127.1 + 31.7 ) * 43758.5 );
          tone = clamp( tone + fbm( xz / 26.0 + un * 7.3 ) * 0.45, 0.0, 1.0 );           // a bed changes along its length
          float fw = fwidth( yw );
          float fine = vnoise( vec2( yw * 3.4, dot( xz, vec2( 0.25, 0.17 ) ) ) ) * 0.22 * ( 1.0 - smoothstep( 0.25, 0.6, fw * 3.4 ) )
                     + vnoise( vec2( yw * 8.1, dot( xz, vec2( 0.9, 0.6 ) ) ) ) * 0.12 * ( 1.0 - smoothstep( 0.15, 0.4, fw * 8.1 ) );
          float seam = 0.25 + 0.75 * smoothstep( -0.3, 0.4, fbm( xz / 9.0 + un * 3.1 ) );   // the recess between units comes and goes
          float bed = ( tone - 0.5 ) * 0.8 + fine - 0.5 * seam * ( 1.0 - smoothstep( 0.0, 0.12 + 0.08 * vnoise( xz * 0.3 ), fu ) ) + 0.15 * smoothstep( 0.75, 1.0, fu );
          bed *= 0.55 + 0.45 * smoothstep( -0.5, 0.3, fbm( xz / 34.0 + vWPos.y / 11.0 ) );           // definition fades in patches
          // dust and desert varnish streaking down the face
          float streak = fbm( vec2( dot( xz, vec2( 0.62, 0.78 ) ) * 0.9, vWPos.y * 0.04 ) );
          float face = 1.0 - smoothstep( 0.86, 0.985, inverseTransformDirection( normalize( vNormal ), viewMatrix ).y );   // world up, not view up
          // on a cliff the ground texture is smeared down the face, so swap it for plain rock with its own grain
          float grain = texture2D( tSlab, vec2( dot( xz, vec2( 0.7, -0.7 ) ), vWPos.y ) * 0.31 ).g / 0.36;
          vec3 rock = mix( vec3( 0.15, 0.068, 0.038 ), vec3( 0.215, 0.118, 0.068 ), tone ) * mix( 1.0, grain, 0.35 );
          sampledDiffuseColor.rgb = mix( sampledDiffuseColor.rgb, rock, face * vGround.y * 0.92 );
          sampledDiffuseColor.rgb *= ( 1.0 + bed * 0.45 * vGround.y * face ) * ( 1.0 + streak * 0.16 * vGround.y * face );
        }
        // scanned ground detail, strongest close to the camera
        {
          float d = length( vViewPosition );
          sDet = 1.0 - smoothstep( 25.0, 140.0, d );
          float sMid = 1.0 - smoothstep( 120.0, 600.0, d );
          vec2 uv = vWPos.xz / 2.4; sUv = uv;
          float peb = smoothstep( 0.55, 0.8, texture2D( tPeb, vWPos.xz / 23.0 ).g / 0.18 * 0.5 );   // patches of pebble lag
          vec3 reg = mix( detail( tReg, uv, vec3( 0.2918, 0.1620, 0.0763 ) ), detail( tPeb, uv * 0.9, vec3( 0.228, 0.1797, 0.11 ) ), peb * 0.75 );
          vec3 snd = detail( tSand, uv * 0.8, vec3( 0.227, 0.1734, 0.1094 ) );
          vec3 slb = detail( tSlab, vWPos.xz / 3.2, vec3( 0.643, 0.3605, 0.1784 ) );
          vec3 dt = mix( reg, snd, vSand );
          dt = mix( dt, slb, vGround.x * 0.7 * ( 1.0 - vSand ) );
          vec3 far = detail( tReg, vWPos.xz / 31.0, vec3( 0.2918, 0.1620, 0.0763 ) );   // the same grain, much larger, for mid distance
          sampledDiffuseColor.rgb *= mix( vec3( 1.0 ), dt, sDet * 0.9 ) * mix( vec3( 1.0 ), far, sMid * 0.35 );
        }
        diffuseColor *= sampledDiffuseColor;
      #endif`)
      // vertex tint has been multiplied in by now: grade the finished albedo
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb = marsGrade( diffuseColor.rgb );')
      // normals: pebbly bump on bare ground, fading out on sand, where instead
      // fine wind ripples run square to the wind — about 40 cm crest to crest
      .replace('#include <normal_fragment_maps>', `
      #ifdef USE_BUMPMAP
        normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd() * ( 1.0 - vSand * 0.85 ) * ( 1.0 - vCrack * 0.6 ), faceDirection );
      #endif
      // scanned normals: the real relief of grit, pebbles and cracks
      if ( sDet > 0.01 ) {
        vec3 nR = texture2D( tRegN, sUv ).xyz * 2.0 - 1.0;
        vec3 nS = texture2D( tSandN, sUv * 0.8 ).xyz * 2.0 - 1.0;
        vec3 nL = texture2D( tSlabN, vWPos.xz / 3.2 ).xyz * 2.0 - 1.0;
        vec3 tn = mix( mix( nR, nS, vSand ), nL, vGround.x * 0.7 * ( 1.0 - vSand ) );
        vec3 wn = inverseTransformDirection( normal, viewMatrix );
        wn = normalize( wn + vec3( tn.x, 0.0, -tn.y ) * 0.9 * sDet );       // ground lies flat: tangent x = east, y = north
        normal = normalize( ( viewMatrix * vec4( wn, 0.0 ) ).xyz );
      }
      if ( vSand > 0.02 ) {
        vec2 wind = vec2( ${WIND.x.toFixed(3)}, ${WIND.z.toFixed(3)} );
        float along = dot( vWPos.xz, vec2( -wind.y, wind.x ) );
        float ph = dot( vWPos.xz, wind ) / 0.42 + sin( along * 0.9 ) * 0.8 + sin( along * 0.23 + 1.7 ) * 2.1;
        float fade = vSand * ( 1.0 - smoothstep( 14.0, 55.0, length( vViewPosition ) ) );
        float c = cos( ph * 6.2832 );
        vec3 wn = inverseTransformDirection( normal, viewMatrix );
        wn.xz -= wind * c * 0.34 * fade;
        normal = normalize( ( viewMatrix * vec4( normalize( wn ), 0.0 ) ).xyz );
        diffuseColor.rgb *= 1.0 + sin( ph * 6.2832 ) * 0.07 * fade;
      }`);
  };

  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

/* ── rocks ────────────────────────────────────────────────────── */
/* A lopsided lump with fracture planes knocked onto it, and a flat base.
   Smooth blobs read as river stones and plain polyhedra as crystals; broken
   rock is mostly flat faces meeting at edges. `rounded` skips the fracturing,
   for water-worn clasts. */
export function boulderGeo(seed, detail = 1, rounded = false) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  const p = g.attributes.position;
  const rand = rng(seed);
  const unit = () => new THREE.Vector3(rand() - 0.5, rand() - 0.5, rand() - 0.5).normalize();

  const lobes = [0, 1, 2, 3].map(() => ({ k: unit().multiplyScalar(1.2 + rand() * 2.2), ph: rand() * 6.3, a: 0.06 + rand() * 0.1 }));
  const planes = [{ n: new THREE.Vector3(0, -1, 0), d: 0.42 }];                 // it sits on something
  if (!rounded) for (let i = 0, n = 5 + ((rand() * 5) | 0); i < n; i++) planes.push({ n: unit(), d: 0.5 + rand() * 0.38 });

  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    let r = 1;
    for (const l of lobes) r += l.a * Math.sin(v.dot(l.k) + l.ph);
    v.multiplyScalar(r);
    for (const pl of planes) { const o = v.dot(pl.n) - pl.d; if (o > 0) v.addScaledVector(pl.n, -o); }
    p.setXYZ(i, v.x, v.y * 0.82, v.z);
  }
  g.computeVertexNormals();
  g.computeBoundingBox();
  const bb = g.boundingBox;
  g.userData = { minY: bb.min.y, maxY: bb.max.y, rXZ: (bb.max.x - bb.min.x + bb.max.z - bb.min.z) / 4 };
  return g;
}

/* shared rock shading: mottled faces, dust on top, dust banked round the base */
export function rockMaterial(base = 0xffffff) {
  const mat = new THREE.MeshStandardMaterial({ color: base, roughness: 0.92, flatShading: true });
  mat.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vRockP;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vRockP = position;
        #ifdef USE_INSTANCING
          vRockP.xz += instanceMatrix[3].xz * 0.37;      // so no two rocks share a pattern
        #endif`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vRockP;\n' + GRADE_GLSL)
      .replace('#include <normal_fragment_maps>', `
      #include <normal_fragment_maps>
      float mot = sin( vRockP.x * 6.3 + sin( vRockP.y * 9.1 + vRockP.z * 4.3 ) * 1.8 ) * sin( vRockP.z * 7.7 + sin( vRockP.x * 5.3 + vRockP.y * 6.1 ) * 1.8 );
      diffuseColor.rgb *= 0.86 + 0.24 * mot;
      vec3 wn = inverseTransformDirection( normal, viewMatrix );
      diffuseColor.rgb = mix( diffuseColor.rgb, marsGrade( vec3( 0.36, 0.20, 0.12 ) ), smoothstep( 0.35, 0.95, wn.y ) * 0.66 );
      diffuseColor.rgb = mix( diffuseColor.rgb, marsGrade( vec3( 0.30, 0.155, 0.09 ) ), ( 1.0 - smoothstep( -0.3, 0.0, vRockP.y ) ) * 0.75 );`);
  };
  return mat;
}

const CELL = 1.0;
const bumpHash = new Map();                 // cobbles small enough to drive over
const hashKey = (ix, iz) => (ix + 2048) * 4096 + (iz + 2048);
export const colliders = [];                // rocks too big to drive over

/* extra height a wheel sees at (x, z) from the cobbles under it */
function cobbleAt(x, z) {
  const ix = Math.floor(x / CELL), iz = Math.floor(z / CELL);
  let h = 0;
  for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
    const cell = bumpHash.get(hashKey(ix + a, iz + b));
    if (!cell) continue;
    for (let i = 0; i < cell.length; i++) {
      const c = cell[i];
      const dx = x - c.x, dz = z - c.z, q = (dx * dx + dz * dz) / (c.a * c.a);
      if (q < 1) { const v = c.h * Math.min(1, (1 - q) * 2.6); if (v > h) h = v; }     // flat-topped, steep-sided, like a real block
    }
  }
  return h;
}

/* what a wheel actually rides on */
export function groundHeight(x, z) { return height(x, z) + cobbleAt(x, z); }
export function cobbleHeight(x, z) { return cobbleAt(x, z); }

const DRIVE_OVER = 0.50;   // metres. A wheel can climb a block about its own diameter (52.5 cm); taller stops it.

/* Where a wheel actually sits: the 26 cm tyre rolled along the ground, so it starts climbing a
   block when its rim touches the face, not when its centre is over it. Returns the height of the
   lowest point of the tyre (ground-equivalent), sampled along the direction it is rolling. */
export function wheelGround(x, z, fx, fz, R = 0.2635) {
  let best = -Infinity;
  for (let i = -3; i <= 3; i++) {
    const s = (i / 3) * R * 0.95, lift = Math.sqrt(R * R - s * s) - R;
    const g = height(x + fx * s, z + fz * s) + cobbleAt(x + fx * s, z + fz * s) + lift;
    if (g > best) best = g;
  }
  return best;
}

/* A photogrammetry-scanned rock, made ready to scatter: its geometry scaled so it
   is about 2 m across, like the procedural ones, sitting with a little of its base
   below ground; its own scanned colour, normal and roughness maps; and the same
   dust on top and dust banked round the foot the procedural rocks get. */
export function prepScan(mesh) {
  mesh.updateMatrixWorld(true);
  const g = mesh.geometry.clone(); g.applyMatrix4(mesh.matrixWorld);
  g.computeBoundingBox(); let bb = g.boundingBox;
  const rXZ = (bb.max.x - bb.min.x + bb.max.z - bb.min.z) / 4;
  g.translate(-(bb.min.x + bb.max.x) / 2, -bb.min.y, -(bb.min.z + bb.max.z) / 2);
  g.scale(1 / rXZ, 1 / rXZ, 1 / rXZ);
  g.computeBoundingBox(); bb = g.boundingBox;
  const h = bb.max.y; g.translate(0, -h * 0.16, 0);                 // bedded a little way in
  g.userData = { minY: -h * 0.16, maxY: h * 0.84, rXZ: 1, scan: true };
  const src = mesh.material;
  const mat = new THREE.MeshStandardMaterial({
    map: src.map, normalMap: src.normalMap, roughnessMap: src.roughnessMap, roughness: 1, metalness: 0,
    normalScale: new THREE.Vector2(1.2, 1.2),
  });
  if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;
  mat.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vRockP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvRockP = position;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vRockP;\n' + GRADE_GLSL)
      .replace('#include <normal_fragment_maps>', `
      #include <normal_fragment_maps>
      vec3 wn = inverseTransformDirection( normal, viewMatrix );
      // Mars dust: settles on what faces up, banks round the foot
      vec3 dust = marsGrade( vec3( 0.30, 0.19, 0.125 ) );
      diffuseColor.rgb = mix( diffuseColor.rgb, dust, smoothstep( 0.55, 0.97, wn.y ) * 0.5 );
      diffuseColor.rgb = mix( diffuseColor.rgb, dust * 0.92, ( 1.0 - smoothstep( 0.0, ${(h * 0.22).toFixed(3)}, vRockP.y + ${(h * 0.16).toFixed(3)} ) ) * 0.7 );`);
  };
  return { geo: g, mat };
}

export function scatterRocks(scene, { seed = 5150, exclude, scans = null }) {
  const rand = rng(seed);
  const mat = rockMaterial();

  // three tiers of detail, so the triangles go where you can see them:
  // the few big blocks, the hundreds of mid-size rocks, and thousands of pebbles.
  // With scans, the first two tiers are real photogrammetry rocks; pebbles stay procedural.
  const proc = [
    [0, 1, 2].map(i => ({ geo: boulderGeo(seed + i * 977, 2), mat })),
    [0, 1, 2, 3].map(i => ({ geo: boulderGeo(seed + 4000 + i * 311, 1), mat })),
    [0, 1, 2].map(i => ({ geo: boulderGeo(seed + 7000 + i * 173, 0), mat })),
  ];
  const tiersM = [scans && scans.big.length ? scans.big : proc[0], scans && scans.mid.length ? scans.mid : proc[1], proc[2]];
  const tiers = tiersM.map(t => t.map(e => e.geo));
  const lists = tiers.map(t => t.map(() => []));

  const dark = new THREE.Color(0x3d322d), dusty = new THREE.Color(0x96664a), tmp = new THREE.Color();   // basalt, clean to dust-coated

  // rocks cluster: dense fields, bare stretches, and almost none on the sand
  const density = (x, z) =>
    (0.16 + 0.84 * smooth(-0.15, 0.55, nRock(x / 46, z / 46))) * (1 - 0.85 * sandMask(x, z));

  const place = (x, z, s, isBig) => {
    if (exclude && exclude(x, z, s)) return;
    const tier = s >= 0.8 ? 0 : s > 0.14 ? 1 : 2;
    const geos = tiers[tier];
    const v = (rand() * geos.length) | 0, ud = geos[v].userData;
    const sy = ud.scan ? s * (0.85 + rand() * 0.3) : s * (0.55 + rand() * 0.5);
    const sink = -ud.minY * (0.55 + rand() * 0.4);      // flat base, bedded a little way in
    const top = sy * (sink + ud.maxY);
    const a = s * ud.rXZ;
    lists[tier][v].push({ x, z, s, sy, y: height(x, z) + sy * sink, yaw: rand() * 6.3,
                          tx: (rand() - 0.5) * 0.3, tz: (rand() - 0.5) * 0.3, c: Math.pow(rand(), 1.4) });
    if (top <= DRIVE_OVER) {
      const k = hashKey(Math.floor(x / CELL), Math.floor(z / CELL));
      let cell = bumpHash.get(k); if (!cell) bumpHash.set(k, cell = []);
      cell.push({ x, z, a: a * 0.9 + 0.1, h: top * 0.92 });     // +0.1: a wheel starts climbing early
    } else {
      colliders.push({ x, z, r: a * 0.86, h: top });
    }
  };

  // boulders and blocks: power-law sizes, a handful genuinely large
  for (let i = 0, g = 0; i < 2600 && g < 144000; g++) {      // counts scaled with the roaming area in 3.5
    const a = rand() * Math.PI * 2, r = 9 + Math.sqrt(rand()) * (PLAY_R + 40);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (rand() > density(x, z)) continue;
    place(x, z, Math.min(2.6, 0.36 * Math.pow(0.02 + rand() * 0.98, -0.55)), true); i++;
  }
  // cobbles: the ones the suspension has to walk over
  for (let i = 0, g = 0; i < 21000 && g < 380000; g++) {
    const a = rand() * Math.PI * 2, r = 4 + Math.sqrt(rand()) * (PLAY_R + 14);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (rand() > density(x, z)) continue;
    place(x, z, Math.min(0.34, 0.065 * Math.pow(0.035 + rand() * 0.965, -0.5)), false); i++;
  }
  // rock gardens: patches strewn with blocks a wheel can just climb, 15–50 cm, the ground
  // the rover's drivers spent most of their time picking a way across
  for (let i = 0, g = 0; i < 10000 && g < 290000; g++) {
    const a = rand() * Math.PI * 2, r = 6 + Math.sqrt(rand()) * (PLAY_R - 4);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const field = smooth(0.05, 0.45, nRock(x / 46, z / 46) + nRough(x / 17, z / 17) * 0.25) * (1 - sandMask(x, z));
    if (rand() > field) continue;
    place(x, z, 0.3 + Math.pow(rand(), 2.0) * 0.45, false); i++;
  }
  // talus: blocks fallen from the rim wall and the mesa cliffs, piled at their feet
  for (let i = 0; i < 1400; i++) {
    const a = rand() * Math.PI * 2, r = PLAY_R - 4 + Math.pow(rand(), 1.5) * 22;
    place(Math.cos(a) * r, Math.sin(a) * r, Math.min(3.2, 0.45 * Math.pow(0.03 + rand() * 0.97, -0.6)), true);
  }
  for (const m of MESAS) for (let i = 0; i < m.R * 6; i++) {
    const a = rand() * Math.PI * 2;
    let da = Math.abs(a - m.ramp); if (da > Math.PI) da = 2 * Math.PI - da;
    if (da < 0.4) continue;                                  // keep the ramp drivable
    const t = 1.0 + Math.pow(rand(), 1.6) * 0.6;
    place(m.x + Math.cos(a) * m.R * t, m.z + Math.sin(a) * m.R * t, Math.min(2.4, 0.4 * Math.pow(0.04 + rand() * 0.96, -0.55)), true);
  }
  // ejecta: blocks thrown out round each crater, thickest at the rim
  for (const c of CRATERS) {
    const nB = Math.round(c.R * 1.3), nS = Math.round(c.R * 5);
    for (let i = 0; i < nB + nS; i++) {
      const a = rand() * Math.PI * 2, t = 0.92 + Math.pow(rand(), 1.8) * 1.35;
      const x = c.x + Math.cos(a) * c.R * t, z = c.z + Math.sin(a) * c.R * t;
      if (i < nB) place(x, z, Math.min(1.5, 0.3 * Math.pow(0.05 + rand() * 0.95, -0.5)) * (c.R > 12 ? 1.25 : 0.8), true);
      else place(x, z, Math.min(0.34, 0.07 * Math.pow(0.04 + rand() * 0.96, -0.5)), false);
    }
  }

  const dummy = new THREE.Object3D();
  // Rocks are batched in 90 m tiles (pebbles stay in one batch), so the camera and the shadow pass can skip
  // the tiles they cannot see instead of drawing every rock on the map every frame.
  const TILEW = 90;
  lists.forEach((tier, t) => tier.forEach((all, i) => {
    if (!all.length) return;
    const groups = new Map();
    for (const b of all) { const key = t === 2 ? 'all' : Math.floor(b.x / TILEW) + ',' + Math.floor(b.z / TILEW); if (!groups.has(key)) groups.set(key, []); groups.get(key).push(b); }
    for (const list of groups.values()) placeTile(t, i, list);
  }));
  function placeTile(t, i, list) {
    const m = new THREE.InstancedMesh(tiers[t][i], tiersM[t][i].mat, list.length);
    m.receiveShadow = true; m.castShadow = t < 2;           // pebbles are too small to need a shadow pass
    list.forEach((b, k) => {
      dummy.position.set(b.x, b.y, b.z);
      dummy.rotation.set(b.tx, b.yaw, b.tz);
      dummy.scale.set(b.s, b.sy, b.s);
      dummy.updateMatrix();
      m.setMatrixAt(k, dummy.matrix);
      if (tiers[t][i].userData.scan) m.setColorAt(k, tmp.setRGB(0.98, 0.86, 0.76).multiplyScalar(0.55 + 0.4 * b.c));   // scanned colour, warmed and varied
      else m.setColorAt(k, tmp.copy(dark).lerp(dusty, b.c));
    });
    m.instanceMatrix.needsUpdate = true;
    m.instanceColor.needsUpdate = true;
    m.computeBoundingSphere();
    m.frustumCulled = true;
    scene.add(m);
  }

  return lists.map(t => t.reduce((a, l) => a + l.length, 0));     // rocks per tier
}

/* the lowest point of the whole terrain mesh */
export function terrainFloor() {
  let lo = Infinity;
  const L = DTM.on ? EXT : 940, st = DTM.on ? 20 : 5;
  for (let x = -L; x <= L; x += st) for (let z = -L; z <= L; z += st) lo = Math.min(lo, height(x, z));
  return lo;
}

/* ── where it is safe to set a rover down ─────────────────────── */
/* What Terrain-Relative Navigation works from: a map of the ground with
   everything a landing should avoid marked on it. Built from the same
   terrain the rover will drive on — slopes, boulders, sand, craters,
   outcrops — so the red on the map is really there when you arrive. */
export function buildHazardGrid(half = PLAY_R + 20, cell = 3) {
  const n = Math.round((half * 2) / cell);
  const data = new Uint8Array(n * n);
  const at = (i, j) => [(i + 0.5) * cell - half, (j + 0.5) * cell - half];

  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const [x, z] = at(i, j);
    const d = Math.hypot(x, z);
    let hz = 0;
    if (d > PLAY_R - 14) hz = 1;                                           // outside the mapped area
    else if (Math.acos(Math.min(1, normalAt(x, z, 2.2).y)) > 0.29) hz = 1;  // steeper than ~17 degrees
    else if (sandMask(x, z) > 0.45) hz = 1;                                 // rippled sand: a wheel trap
    else if (craterT(x, z) < 1.12) hz = 1;                                  // crater bowls and rims
    else if (mesaT(x, z) < 1.25) hz = 1;                                   // mesas and their cliffs
    else if (OUTCROP_SITES.some(([ox, oz]) => Math.hypot(x - ox, z - oz) < 10)) hz = 1;
    data[j * n + i] = hz;
  }
  // boulders, with room for the rover's footprint round each
  for (const c of colliders) {
    const r = c.r + 2.4, i0 = Math.floor((c.x - r + half) / cell), i1 = Math.ceil((c.x + r + half) / cell);
    const j0 = Math.floor((c.z - r + half) / cell), j1 = Math.ceil((c.z + r + half) / cell);
    for (let j = Math.max(0, j0); j < Math.min(n, j1); j++) for (let i = Math.max(0, i0); i < Math.min(n, i1); i++) {
      const [x, z] = at(i, j);
      if (Math.hypot(x - c.x, z - c.z) < r) data[j * n + i] = 1;
    }
  }
  const hazardAt = (x, z) => {
    const i = Math.floor((x + half) / cell), j = Math.floor((z + half) / cell);
    return i < 0 || j < 0 || i >= n || j >= n ? 1 : data[j * n + i];
  };
  let top = -Infinity;                                   // highest ground on the map, for laying the overlay above it
  for (let x = -PLAY_R; x <= PLAY_R; x += 6) for (let z = -PLAY_R; z <= PLAY_R; z += 6) top = Math.max(top, height(x, z));
  return { n, half, cell, data, hazardAt, top: top + 4 };
}

/* ── somewhere flat and clear to put a helicopter down ────────── */
export function findLanding(cx, cz, avoid = []) {
  let best = null, bestScore = Infinity;
  for (let ring = 0; ring < 7; ring++) {
    const rad = ring * 2.6;
    const steps = ring === 0 ? 1 : 10;
    for (let k = 0; k < steps; k++) {
      const a = (k / steps) * Math.PI * 2 + ring * 0.7;
      const x = cx + Math.cos(a) * rad, z = cz + Math.sin(a) * rad;
      if (Math.hypot(x, z) > PLAY_R - 6) continue;
      if (colliders.some(c => Math.hypot(x - c.x, z - c.z) < c.r + 1.6)) continue;
      if (avoid.some(p => Math.hypot(x - p.x, z - p.z) < p.r)) continue;
      // all four feet: slope under the legs, and no cobble under any of them
      const n = normalAt(x, z, 0.6);
      const tilt = Math.acos(Math.min(1, n.y));
      const lumps = cobbleAt(x + 0.3, z) + cobbleAt(x - 0.3, z) + cobbleAt(x, z + 0.3) + cobbleAt(x, z - 0.3);
      const score = tilt * 30 + lumps * 40 + sandMask(x, z) * 1.5 + rad * 0.12;
      if (score < bestScore) { bestScore = score; best = { x, z, tilt }; }
    }
    if (best && bestScore < 2.2 && ring >= 2) break;
  }
  return best || { x: cx, z: cz, tilt: 0 };
}

/* ── layered outcrops ─────────────────────────────────────────── */
/* Low, long remnants of bedded rock — the shape real outcrops take, a
   ledge or a small butte rather than a pillar. Every bed is a prism on
   one shared plan outline, so the faces line up into a single cliff.
   Tone carries the bedding. Each kind also gets the one feature that
   identifies it in the field. */
const BED_PALETTES = {
  sandstone:    ['#a8794f', '#bb8c5f', '#96683f', '#b38558', '#7d5636'],
  mudstone:     ['#9a8a78', '#ab9a86', '#857565', '#b3a28d', '#74665a'],   // pale grey-tan, as at Pahrump Hills
  conglomerate: ['#a08672', '#b29782', '#877261', '#bca592', '#917a69'],   // tan-grey, as at Hottah
};

/* a flat bed: side faces plus caps */
function bed(outline, y0, y1, scale, ox, oz, col, V, C, wob = null, cap = null) {
  const n = outline.length, top = cap || col;
  const push = (x, y, z, c = col) => { V.push(x + ox, y, z + oz); C.push(c.r, c.g, c.b); };
  for (let k = 0; k < n; k++) {
    const a = outline[k], b = outline[(k + 1) % n];
    const sa = scale * (wob ? wob[k] : 1), sb = scale * (wob ? wob[(k + 1) % n] : 1);
    const ax = a.x * sa, az = a.z * sa, bx = b.x * sb, bz = b.z * sb;
    push(ax, y0, az); push(bx, y1, bz); push(bx, y0, bz);   // side
    push(ax, y0, az); push(ax, y1, az); push(bx, y1, bz);
    push(0, y1, 0, top); push(bx, y1, bz, top); push(ax, y1, az, top);   // top cap: where the dust settles
    push(0, y0, 0); push(ax, y0, az); push(bx, y0, bz);     // bottom cap
  }
}

/* A set of inclined laminae between two flat surfaces. Each lamina climbs
   along the outcrop's long axis and is cut off where it meets the top or
   bottom of the set — which is exactly how cross-beds and delta foresets
   end against the beds above and below them. Side faces only. */
function inclinedSet(outline, y0, y1, scale, slope, thick, cols, V, C, rand, oz = 0) {
  const n = outline.length;
  let reach = 0;
  for (const p of outline) reach = Math.max(reach, Math.abs(p.x * scale));
  const clampY = v => Math.max(y0, Math.min(y1, v));
  let i = 0;
  for (let c = y0 - reach * slope - thick; c < y1 + reach * slope; c += thick, i++) {
    const col = cols[i % cols.length];
    const t = thick * (0.8 + rand() * 0.4);
    for (let k = 0; k < n; k++) {
      const a = outline[k], b = outline[(k + 1) % n];
      const ax = a.x * scale, az = a.z * scale, bx = b.x * scale, bz = b.z * scale;
      const a0 = clampY(c + ax * slope), a1 = clampY(c + t + ax * slope);
      const b0 = clampY(c + bx * slope), b1 = clampY(c + t + bx * slope);
      if (a1 - a0 < 1e-4 && b1 - b0 < 1e-4) continue;                  // pinched out here
      V.push(ax, a0, az + oz, bx, b1, bz + oz, bx, b0, bz + oz, ax, a0, az + oz, ax, a1, az + oz, bx, b1, bz + oz);
      for (let q = 0; q < 6; q++) C.push(col.r, col.g, col.b);
    }
  }
}

export function makeOutcrop({ kind, seed, length = 5, width = 2.7, height: tall = 3, dip = 6, feature = null }) {
  const rand = rng(seed);
  const pal = BED_PALETTES[kind];
  const g = new THREE.Group();

  // One plan outline, long axis along local X, reused by every bed. Jointed rock
  // breaks into blocks, so the plan is squarer than an ellipse; its edge wanders,
  // and here and there a block has fallen away and left a notch.
  const sides = 44;
  const outline = [];
  const ph = [rand() * 6.3, rand() * 6.3, rand() * 6.3];
  const bites = [0, 1, 2, 3].map(() => ({ a: rand() * 6.2832, w: 0.16 + rand() * 0.2, d: 0.07 + rand() * 0.13 }));
  for (let k = 0; k < sides; k++) {
    const a = (k / sides) * Math.PI * 2;
    let r = 0.88 + 0.07 * Math.sin(2 * a + ph[0]) + 0.055 * Math.sin(3 * a + ph[1]) + 0.045 * Math.sin(5 * a + ph[2]) + 0.03 * Math.sin(9 * a + ph[0] * 2.3) + (rand() - 0.5) * 0.035;
    for (const b of bites) {
      const da = Math.abs(Math.atan2(Math.sin(a - b.a), Math.cos(a - b.a)));
      if (da < b.w) r -= b.d * (1 - da / b.w);
    }
    const cx = Math.cos(a), sz = Math.sin(a), e = 0.86;
    outline.push({ x: Math.sign(cx) * Math.pow(Math.abs(cx), e) * r * length, z: Math.sign(sz) * Math.pow(Math.abs(sz), e) * r * width });
  }
  // every bed weathers back by its own few centimetres, unevenly round the edge
  const wobble = () => {
    const p0 = rand() * 6.3, p1 = rand() * 6.3, p2 = rand() * 6.3, amp = 0.005 + rand() * 0.011, slow = rand() * 0.022;
    return outline.map((_, k) => 1 - slow * (1 + Math.sin((k / sides) * 6.2832 + p0))
      - amp * (1 + 0.6 * Math.sin((k / sides) * 18.85 + p1) + 0.4 * Math.sin((k / sides) * 43.98 + p2)));
  };
  const DUST = new THREE.Color(0xa58260);
  const dusted = (c, t = 0.45) => c.clone().lerp(DUST, t);
  // the stack leans back to one side: a steep face to read, a stepped slope behind it
  const leanZ = (rand() < 0.5 ? -1 : 1) * width * (0.14 + rand() * 0.1);
  const lean = y => leanZ * Math.min(1, y / tall);

  const base = new THREE.Color(pal[0]);
  const hsl = {}; base.getHSL(hsl);
  const tone = (l, sat = 1) => new THREE.Color().setHSL(hsl.h + (rand() - 0.5) * 0.018, Math.min(1, hsl.s * sat), Math.min(0.6, hsl.l * l));
  const bedTone = () => rand() < 0.18 ? tone(0.66 + rand() * 0.1, 0.72)             // dark, resistant marker bed
                                      : tone(0.82 + rand() * 0.44, 0.88 + rand() * 0.24);
  // The profile only ever narrows upward: an overhanging bed shows the camera
  // nothing but its unlit underside.
  let prev = Infinity;
  const profile = (y, even) => {
    const f = Math.min(1, y / tall);
    const recess = even ? 0.995 : rand() < 0.16 ? 0.95 + rand() * 0.03 : 0.99 + rand() * 0.01;
    return (prev = Math.min(prev, (1 - Math.pow(f, 1.9) * 0.4) * recess));
  };

  const V = [], C = [];
  const thin = feature === 'laminae';
  const flat = (y, t, col, grow = 1) => {
    const c = col || bedTone();
    bed(outline, y, y + t, profile(y) * grow, (rand() - 0.5) * 0.06, lean(y) + (rand() - 0.5) * 0.06, c, V, C, wobble(), dusted(c));
    return y + t;
  };
  const bedT = () => thin ? 0.045 + rand() * 0.05 : 0.1 + rand() * 0.16;

  let y = 0;
  if (feature === 'crossbeds') {
    // sets of inclined laminae, each bounded above and below by a flat surface
    while (y < tall) {
      y = flat(y, 0.07 + rand() * 0.06, tone(0.6, 0.75));
      const h = 0.42 + rand() * 0.3, sc = profile(y, true);
      const a = tone(1.18), b = tone(0.8);
      inclinedSet(outline, y, y + h, sc, 0.3 + rand() * 0.12, 0.085, [a, b, a, tone(0.95)], V, C, rand, lean(y + h / 2));
      y += h;
    }
    y = flat(y, 0.14);
  } else if (feature === 'foresets') {
    // flat bottomsets, a thick body of steep foresets, flat topsets
    while (y < tall * 0.24) y = flat(y, bedT());
    const h = tall * 0.5, sc = profile(y, true);
    inclinedSet(outline, y, y + h, sc, 0.36, 0.15, [tone(1.22), tone(0.86), tone(1.05), tone(0.7, 0.8)], V, C, rand, lean(y + h / 2));
    y += h;
    while (y < tall) y = flat(y, bedT());
  } else {
    let since = 0;
    while (y < tall) {
      if (feature === 'veins' && since > 1 && rand() < 0.42) {
        // a pale vein, thin and harder than the rock it fills, so it stands proud
        y = flat(y, 0.05 + rand() * 0.03, new THREE.Color(0xe4d9c6), 1.035);
        since = 0;
      } else { y = flat(y, bedT()); since++; }
    }
  }

  // the top is not a table: a few broken slabs of the last beds are left standing on it
  let crown = y;
  for (let i = 0, n = 2 + ((rand() * 3) | 0); i < n; i++) {
    const sc = prev * (0.26 + rand() * 0.24), t = 0.07 + rand() * 0.16, c = bedTone();
    bed(outline, y - 0.02, y + t, sc, (rand() - 0.5) * length * prev * 0.95, lean(y) + (rand() - 0.5) * width * prev * 0.5, c, V, C, wobble(), dusted(c, 0.4));
    crown = Math.max(crown, y + t);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(V, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
  geo.computeVertexNormals();
  // non-indexed, so computeVertexNormals already gives exact per-face normals;
  // flatShading would instead derive them from screen derivatives and mislight the caps
  const rock = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.93 }));
  rock.castShadow = true;        // beds are thinner than a shadow texel, so they
  rock.receiveShadow = false;    // cast onto the ground but never onto themselves
  g.add(rock);

  const d = new THREE.Object3D();
  const strew = (geom, mat, n, at) => {
    const m = new THREE.InstancedMesh(geom, mat, n);
    for (let i = 0; i < n; i++) { at(d, i); d.updateMatrix(); m.setMatrixAt(i, d.matrix); }
    m.castShadow = true; m.receiveShadow = false;
    g.add(m);
  };
  const onEdge = grow => { const k = (rand() * sides) | 0, p = outline[k], q = outline[(k + 1) % sides], t = rand(); return [(p.x + (q.x - p.x) * t) * grow, (p.z + (q.z - p.z) * t) * grow]; };

  if (feature === 'boulders') {
    // water-worn boulders weathering out of the upper beds
    strew(boulderGeo(seed + 9, 2, true), rockMaterial(0x756a61), 16, o => {
      const yy = tall * (0.5 + rand() * 0.5), sc = 1 - Math.pow(yy / tall, 1.9) * 0.4;
      const [px, pz] = onEdge(sc * (0.8 + rand() * 0.18)), s = 0.3 + rand() * 0.42;
      o.position.set(px, yy, pz + lean(yy)); o.rotation.set(rand() * 3, rand() * 6.3, rand() * 3); o.scale.set(s, s * 0.85, s);
    });
  }
  if (feature === 'pebbles') {
    // rounded clasts standing out of the face as the sandy matrix erodes round them
    strew(boulderGeo(seed + 13, 1, true), rockMaterial(0x6d6966), 90, o => {
      const yy = tall * rand() * 0.96, sc = 1 - Math.pow(yy / tall, 1.9) * 0.4;
      const [px, pz] = onEdge(sc * 0.97), s = 0.045 + rand() * 0.075;
      o.position.set(px, yy, pz + lean(yy)); o.rotation.set(rand() * 3, rand() * 6.3, rand() * 3); o.scale.setScalar(s);
    });
  }

  // talus: rubble shed off the face, piled along the foot of it
  strew(boulderGeo(seed + 55, 1), rockMaterial(new THREE.Color(pal[2]).getHex()), 34 + ((rand() * 14) | 0), o => {
    const [px, pz] = onEdge(1.0 + Math.pow(rand(), 1.6) * 0.5), s = 0.08 + Math.pow(rand(), 1.8) * 0.42;
    o.position.set(px, 0.1 + s * 0.2, pz); o.rotation.set((rand() - .5) * 0.5, rand() * 6.3, (rand() - .5) * 0.5); o.scale.set(s, s * 0.75, s);
  });

  // regional dip along the long axis — the tilt is what says "sedimentary"
  g.rotation.order = 'YZX';
  const yaw = rand() * Math.PI * 2;
  g.rotation.set(0, yaw, (dip + (rand() - 0.5) * 2) * Math.PI / 180);
  g.userData = { top: crown, length, width, yaw };
  return g;
}
