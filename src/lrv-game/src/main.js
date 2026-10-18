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

const $ = id => document.getElementById(id);
const G = 1.62;                       // lunar surface gravity, m/s²
const TOUCH = matchMedia('(pointer: coarse)').matches;

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
   throws the rover into the air. The mountains around the valley are the real ones, from the terrain model. */
const HALF = 420, CELL = 1.25, N = Math.round(2 * HALF / CELL) + 1;      // the drivable square, 840 m across
const craters = [], rocks = [];
{ const r = rng(1972);
  const add = (x, z, R, fresh) => craters.push({ x, z, R, depth: R * (0.12 + 0.26 * fresh), rim: R * (0.025 + 0.06 * fresh) });
  // a few fresh ones within reach of the start, the rims to aim for
  [[48, -18, 13, 1], [-30, 64, 17, .95], [96, 52, 21, .9], [20, 120, 11, 1], [-92, -40, 24, .85]].forEach(c => add(...c));
  for (let i = 0; i < 1500; i++) {
    const R = 1.2 / Math.sqrt(1 - r() * (1 - (1.2 / 32) ** 2));        // a power-law spread of sizes, 1.2 to 32 m
    const x = (r() * 2 - 1) * (HALF - 10), z = (r() * 2 - 1) * (HALF - 10);
    if (Math.hypot(x, z) < 14 || Math.hypot(x + 12, z - 4) < 14) continue;      // the start and the lander stand on level ground
    add(x, z, R, Math.pow(r(), 2.2));
  }
  for (let i = 0; i < 900; i++) { const x = (r() * 2 - 1) * (HALF - 6), z = (r() * 2 - 1) * (HALF - 6); if (Math.hypot(x, z) < 10) continue;
    rocks.push({ x, z, s: 0.12 + Math.pow(r(), 3) * 0.7, yaw: r() * 6.28, k: r() }); }
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
const H = new Float32Array(N * N);
function buildGround() {
  indexCraters();
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const x = -HALF + i * CELL, z = -HALF + j * CELL;
    H[j * N + i] = (fbm(x / 60, z / 60, 4) - .5) * 3 + (fbm(x / 9 + 40, z / 9, 3) - .5) * 0.35 + craterH(x, z);
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
function ground(x, z) {      // height of the drawn surface (bilinear on the grid), plus rocks
  const u = Math.max(0, Math.min(N - 1.001, (x + HALF) / CELL)), v = Math.max(0, Math.min(N - 1.001, (z + HALF) / CELL)), i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j;
  const a = H[j * N + i], b = H[j * N + i + 1], c = H[(j + 1) * N + i], d = H[(j + 1) * N + i + 1];
  return a + (b - a) * fu + (c - a) * fv + (a - b - c + d) * fu * fv + rockH(x, z);
}
const _n = new THREE.Vector3();
function normalAt(x, z) { const e = 0.35; return _n.set(ground(x - e, z) - ground(x + e, z), 2 * e, ground(x, z - e) - ground(x, z + e)).normalize(); }

/* ── scene ───────────────────────────────────────────────────── */
const renderer = new THREE.WebGLRenderer({ canvas: $('scene'), antialias: true });
renderer.setPixelRatio(Math.min(2, devicePixelRatio));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.25;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x000000);      // no air, so a black sky even in full sunlight
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 80000);
function resize() { renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();

// a low morning Sun in the east, as on every Apollo landing; nothing but the ground itself to fill the shadows
const SUN = new THREE.Vector3(Math.sin(95 * Math.PI / 180) * Math.cos(16 * Math.PI / 180), Math.sin(16 * Math.PI / 180), -Math.cos(95 * Math.PI / 180) * Math.cos(16 * Math.PI / 180)).normalize();
const sun = new THREE.DirectionalLight(0xfffaf2, 3.4); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 1, far: 200 }); sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.04;
scene.add(sun, sun.target);
scene.add(new THREE.HemisphereLight(0x000000, 0x6e6a64, 0.55));

// regolith: a fine grey with a little noise, drawn at close range
function regolithTex() {
  const S = 256, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), im = x.createImageData(S, S), r = rng(3);
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) { const n = (fbm(i / 18, j / 18, 4) - .5) * 40 + (r() - .5) * 26, v = Math.max(0, Math.min(255, 128 + n)), o = (j * S + i) * 4; im.data[o] = im.data[o + 1] = im.data[o + 2] = v; im.data[o + 3] = 255; }
  x.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
const soil = new THREE.MeshStandardMaterial({ color: 0x9a968f, roughness: 1, metalness: 0, map: regolithTex() });
soil.map.repeat.set(1, 1);

function groundMesh() {
  const g = new THREE.PlaneGeometry(2 * HALF, 2 * HALF, N - 1, N - 1); g.rotateX(-Math.PI / 2);
  const p = g.attributes.position, uv = g.attributes.uv;
  for (let k = 0; k < p.count; k++) { const i = Math.round((p.getX(k) + HALF) / CELL), j = Math.round((p.getZ(k) + HALF) / CELL); p.setY(k, H[j * N + i]); uv.setXY(k, p.getX(k) / 3.2, p.getZ(k) / 3.2); }
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, soil); m.receiveShadow = true; scene.add(m);
}
// the valley and its mountains, from NASA's terrain model: 64 km square on a 250 m grid, heights in quarter-metres,
// drawn at true size with the Moon's curvature; sunk just under the drivable square where the two overlap
function farMesh(dem) {
  const DN = 256, C = 250, RM = 1737400, M = 192, W = DN * C;
  const dv = (i, j) => dem[Math.max(0, Math.min(DN - 1, j)) * DN + Math.max(0, Math.min(DN - 1, i))] / 4;
  const at = (x, z) => { const u = x / C + DN / 2 - .5, v = z / C + DN / 2 - .5, i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j;
    return dv(i, j) * (1 - fu) * (1 - fv) + dv(i + 1, j) * fu * (1 - fv) + dv(i, j + 1) * (1 - fu) * fv + dv(i + 1, j + 1) * fu * fv; };
  const h0 = at(0, 0), g = new THREE.PlaneGeometry(W, W, M, M); g.rotateX(-Math.PI / 2);
  const p = g.attributes.position;
  for (let k = 0; k < p.count; k++) { const x = p.getX(k), z = p.getZ(k), r = Math.hypot(x, z), inside = 1 - ss(HALF * 1.2, HALF * 2.2, Math.max(Math.abs(x), Math.abs(z)));
    p.setY(k, (at(x, z) - h0) * ss(HALF * 0.9, 2600, r) - r * r / (2 * RM) - 1.2 * inside); }
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0x8f8b85, roughness: 1 })); m.receiveShadow = true; scene.add(m);
}
function rockMeshes() {
  const geo = new THREE.IcosahedronGeometry(1, 1), p = geo.attributes.position, r = rng(11);
  for (let k = 0; k < p.count; k++) { const s = 0.75 + r() * 0.4; p.setXYZ(k, p.getX(k) * s, p.getY(k) * s * 0.7, p.getZ(k) * s); }
  geo.computeVertexNormals();
  const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x77736d, roughness: .95, flatShading: true }), rocks.length);
  const o = new THREE.Object3D();
  rocks.forEach((k, n) => { o.position.set(k.x, ground(k.x, k.z) - k.s * 0.62, k.z); o.rotation.set(0, k.yaw, 0); o.scale.setScalar(k.s); o.updateMatrix(); im.setMatrixAt(n, o.matrix); });
  im.castShadow = im.receiveShadow = true; scene.add(im);
}

/* ── the rover: one rigid body on four sprung wheels ─────────────
   Loaded with two astronauts and their gear the rover weighed about 700 kg; the body is a box of that mass,
   3.1 m long and 2.06 m wide. On the Moon each wheel carries a sixth of what it would on Earth, so it grips
   a sixth as hard: the rover skids, bounces, and leaves the ground easily. */
const MASS = 700, I = new THREE.Vector3(MASS / 12 * (1.1 ** 2 + 2.06 ** 2), MASS / 12 * (3.1 ** 2 + 2.06 ** 2), MASS / 12 * (3.1 ** 2 + 1.1 ** 2));
const WHEEL_R = 0.41, REST = 0.36, K = 4200, C_DAMP = 620, MU = 0.62, CRR = 0.07, VMAX = 3.6, VREV = 1.4;      // 3.6 m/s = 13 km/h, the rover's top speed on the level
const WHEELS = [[1.15, 0.915, 1], [1.15, -0.915, 1], [-1.15, 0.915, -1], [-1.15, -0.915, -1]].map(([x, z, f]) => ({ at: new THREE.Vector3(x, -0.08, z), steer: f, comp: 0, contact: false, spin: 0 }));
const HULL = []; for (const x of [-1.5, 1.5]) for (const z of [-1.0, 1.0]) for (const y of [-0.3, 0.75]) HULL.push(new THREE.Vector3(x, y, z));
const car = { p: new THREE.Vector3(0, 0, 0), v: new THREE.Vector3(), q: new THREE.Quaternion(), w: new THREE.Vector3(), steer: 0 };
function place(x, z, yaw) { car.p.set(x, ground(x, z) + 0.8, z); car.v.set(0, 0, 0); car.w.set(0, 0, 0); car.q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw); car.steer = 0; }

const _f = new THREE.Vector3(), _t = new THREE.Vector3(), _r = new THREE.Vector3(), _a = new THREE.Vector3(), _up = new THREE.Vector3(), _fw = new THREE.Vector3(), _rt = new THREE.Vector3(),
      _vc = new THREE.Vector3(), _wf = new THREE.Vector3(), _ws = new THREE.Vector3(), _tmp = new THREE.Vector3(), _qi = new THREE.Quaternion(), _wb = new THREE.Vector3(), _L = new THREE.Vector3();
const AIR = { t: 0, start: null, peak: 0, last: null, best: 0, grounded: true };
let throttle = 0, steerIn = 0;
function step(h) {
  _f.set(0, -G * MASS, 0); _t.set(0, 0, 0);
  _up.set(0, 1, 0).applyQuaternion(car.q); _fw.set(1, 0, 0).applyQuaternion(car.q); _rt.set(0, 0, 1).applyQuaternion(car.q);
  const speed = car.v.dot(_fw);
  const dmax = 0.42 / (1 + 0.12 * speed * speed);      // four-wheel steering, gentler at speed
  car.steer += (steerIn * dmax - car.steer) * Math.min(1, h * 6);
  let touching = 0;
  for (const wl of WHEELS) {
    const a = _a.copy(wl.at).applyQuaternion(car.q).add(car.p);      // the top of the suspension, in the world
    let t = (a.y - ground(a.x, a.z)) / Math.max(0.3, _up.y);           // distance down the strut to the ground
    const x = REST + WHEEL_R - t;
    if (x <= 0) { wl.contact = false; wl.comp = 0; continue; }
    wl.contact = true; touching++;
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
    if (throttle > 0.02 && vf > -0.3) Fl = throttle * 420 * Math.max(0, 1 - vf / VMAX);      // each wheel's motor, governed to top speed
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
  const lim2 = HALF - 12; if (Math.abs(car.p.x) > lim2 || Math.abs(car.p.z) > lim2) { car.p.x = Math.max(-lim2, Math.min(lim2, car.p.x)); car.p.z = Math.max(-lim2, Math.min(lim2, car.p.z)); car.v.multiplyScalar(0.3); }
  // air time: off the ground with nothing touching
  if (touching === 0) {
    if (AIR.grounded && AIR.t === 0) { AIR.start = car.p.clone(); AIR.peak = 0; }
    AIR.t += h; AIR.peak = Math.max(AIR.peak, car.p.y - 0.78 - ground(car.p.x, car.p.z)); AIR.grounded = false;
  } else if (!AIR.grounded) {
    AIR.grounded = true;
    if (AIR.t > 0.45) { const d = Math.hypot(car.p.x - AIR.start.x, car.p.z - AIR.start.z); AIR.last = { t: AIR.t, d, peak: Math.max(0, AIR.peak) }; if (AIR.t > AIR.best) AIR.best = AIR.t; landed(AIR.last); }
    AIR.t = 0;
  }
  return touching;
}

/* ── dust: thrown off the wheels, it flies in clean parabolas and falls straight back. There is no air to hold it up. ── */
const DN = 1400, dpos = new Float32Array(DN * 3), dvel = new Float32Array(DN * 3), dlife = new Float32Array(DN);
const dgeo = new THREE.BufferGeometry(); dgeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
const dust = new THREE.Points(dgeo, new THREE.PointsMaterial({ color: 0xcdc7bc, size: 0.08, transparent: true, opacity: 0.85, depthWrite: false })); dust.frustumCulled = false; scene.add(dust);
let dnext = 0;
function kick(dt) {
  for (const wl of WHEELS) {
    if (!wl.contact) continue;
    const a = _a.copy(wl.at).applyQuaternion(car.q).add(car.p), sp = car.v.length(); const n = Math.min(12, Math.floor(sp * 3 * dt * 60 * (0.6 + Math.random())));
    for (let k = 0; k < n; k++) { const i = dnext; dnext = (dnext + 1) % DN;
      dpos[i * 3] = a.x + (Math.random() - .5) * .3; dpos[i * 3 + 1] = ground(a.x, a.z) + 0.05; dpos[i * 3 + 2] = a.z + (Math.random() - .5) * .3;
      const up = 0.8 + Math.random() * 1.6 * Math.min(1, sp / 3);       // flung up and back off the turning wire mesh
      dvel[i * 3] = -_fw.x * sp * (0.25 + Math.random() * .5) + (Math.random() - .5) * .6; dvel[i * 3 + 1] = up; dvel[i * 3 + 2] = -_fw.z * sp * (0.25 + Math.random() * .5) + (Math.random() - .5) * .6;
      dlife[i] = 1; }
  }
  for (let i = 0; i < DN; i++) {
    if (dlife[i] <= 0) { dpos[i * 3 + 1] = -9999; continue; }
    dvel[i * 3 + 1] -= G * dt; dpos[i * 3] += dvel[i * 3] * dt; dpos[i * 3 + 1] += dvel[i * 3 + 1] * dt; dpos[i * 3 + 2] += dvel[i * 3 + 2] * dt;
    if (dpos[i * 3 + 1] < ground(dpos[i * 3], dpos[i * 3 + 2])) dlife[i] = 0;      // lands and stays: no puff, no drift
  }
  dgeo.attributes.position.needsUpdate = true;
}

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
addEventListener('pointerdown', e => { if (e.target !== renderer.domElement) return; ORB.id = e.pointerId; ORB.x = e.clientX; ORB.y = e.clientY; });
addEventListener('pointermove', e => { if (e.pointerId !== ORB.id) return; ORB.yaw -= (e.clientX - ORB.x) * 0.006; ORB.pitch = Math.max(-0.1, Math.min(1.1, ORB.pitch + (e.clientY - ORB.y) * 0.004)); ORB.x = e.clientX; ORB.y = e.clientY; ORB.idle = 0; });
addEventListener('pointerup', e => { if (e.pointerId === ORB.id) ORB.id = null; });
document.addEventListener('touchmove', e => { if (!e.target.closest('.sheet')) e.preventDefault(); }, { passive: false });

/* ── HUD ── */
let toastT = 0;
function toast(m) { $('toast').textContent = m; $('toast').classList.add('on'); toastT = 3.6; }
function landed(a) {
  buzz(a.t > 1.2 ? 40 : 20);
  toast(`Airborne ${a.t.toFixed(1)} s · ${a.d.toFixed(1)} m · ${a.peak.toFixed(1)} m high`);
  $('best').textContent = AIR.best.toFixed(1) + ' s';
}
let upsideT = 0;
function recover() { const yaw = Math.atan2(-_fw.z, _fw.x); place(car.p.x, car.p.z, yaw); toast('Back on its wheels'); }
$('btn-recover').addEventListener('click', recover);
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
    for (let i = 0; i < n; i++) step(h);
    kick(dt);
    upsideT = _up.y < 0.35 ? upsideT + dt : 0; $('btn-recover').classList.toggle('on', upsideT > 1.2);
  }
  rover.position.copy(car.p); rover.quaternion.copy(car.q);
  // chase camera, held a little above the ground
  ORB.idle += dt; if (ORB.idle > 2.5) { ORB.yaw *= Math.exp(-dt * 1.5); ORB.pitch += (0.18 - ORB.pitch) * Math.min(1, dt * 1.5); }
  const heading = Math.atan2(-_fw.z, _fw.x), yaw = heading + Math.PI + ORB.yaw, D = 7.5;
  const want = _tmp.set(car.p.x + Math.cos(yaw) * Math.cos(ORB.pitch) * D, car.p.y + 1.6 + Math.sin(ORB.pitch) * D, car.p.z - Math.sin(yaw) * Math.cos(ORB.pitch) * D);
  want.y = Math.max(want.y, ground(want.x, want.z) + 1.2);
  if (!camInit) { camPos.copy(want); camTgt.copy(car.p); camInit = true; }
  camPos.lerp(want, 1 - Math.exp(-dt * 4)); camTgt.lerp(_a.copy(car.p).add(_r.set(0, 0.6, 0)), 1 - Math.exp(-dt * 8));
  camera.position.copy(camPos); camera.lookAt(camTgt);
  sun.position.copy(car.p).addScaledVector(SUN, 120); sun.target.position.copy(car.p);
  const kmh = Math.abs(car.v.dot(_fw)) * 3.6; $('speed').textContent = kmh.toFixed(1);
  $('air').textContent = AIR.t > 0.15 ? `Airborne ${AIR.t.toFixed(1)} s` : '';
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('on'); }
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

/* ── start ── */
(async () => {
  $('loadmsg').textContent = 'Shaping the valley…';
  await new Promise(r => setTimeout(r, 30));
  buildGround(); indexRocks(); groundMesh(); rockMeshes();
  try { const r = await fetch('../models/moon-a17.bin'); if (r.ok) farMesh(new Int16Array(await r.arrayBuffer())); } catch (e) { /* offline without it: the drivable square alone */ }
  place(0, 0, Math.atan2(-64, -30));      // facing the nearest fresh crater, the Sun behind
  $('loadmsg').textContent = 'Unloading the rover…';
  const [lrv, lm] = await Promise.all([loader.loadAsync('../models/lrv.glb').catch(() => null), loader.loadAsync('../models/lm.glb').catch(() => null)]);
  if (lrv) { const o = lrv.scene; dusty(o); o.updateMatrixWorld(true); o.position.y = -0.78 - new THREE.Box3().setFromObject(o).min.y; rover.add(o); }      // tires on the ground at the resting ride height
  else rover.add(new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.5, 2.06), new THREE.MeshStandardMaterial({ color: 0xb9b6b0 })));
  if (lm) { const o = lm.scene; dusty(o); const x = -12, z = 4; o.position.set(x, ground(x, z) - 0.15, z); o.rotation.y = -Math.PI / 2; scene.add(o); }
  $('loading').classList.remove('on'); $('brief').classList.add('on');
  requestAnimationFrame(t => { last = t; frame(t); });
})();
window.__lrv = { car, AIR, step, ground, place, tick: (n, dt = 1 / 60) => { for (let i = 0; i < n; i++) { const k = 4; for (let j = 0; j < k; j++) step(dt / k); } }, set: (t, s) => { throttle = t; steerIn = s; }, craters };
