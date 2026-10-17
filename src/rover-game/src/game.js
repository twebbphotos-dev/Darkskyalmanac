/* ──────────────────────────────────────────────────────────────
   game.js — "Jezero Traverse"
   An open-world Perseverance + Ingenuity proof of concept.

   Drive across cratered, wind-rippled Martian ground on a working
   rocker-bogie, pick your way round the boulders, and use Mastcam-Z
   to read the layering in the outcrops you find. Ingenuity waits on
   the ground, flies ahead when asked, and sets down at a new airfield
   until you call on it again.
   ────────────────────────────────────────────────────────────── */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { buildMars } from './mars.js';
import { loadDTM, DTM, buildTerrain, buildHazardGrid, terrainFloor, scatterRocks, prepScan, findLanding, colliders,
         height, groundHeight, cobbleHeight, normalAt, sandMask, paverMask, CRATERS, PLAY_R, START, OUTCROP_SITES, wheelGround, EXT, SITE } from './terrain.js';
import { buildSuspension, WHEEL_R } from './suspension.js';
import { makeOutcrop } from './outcrop.js';
import { createEDL, difficulty, setDifficulty } from './edl.js';
import { createStick, buzz } from './stick.js';

/* ── tunables ─────────────────────────────────────────────────── */
const CFG = {
  start:      new THREE.Vector3(START.x, 0, START.z),
  roverYaw:   Math.PI,          // the .glb nose points +Z; game forward is -Z
  camRange:   26,               // how close Mastcam-Z needs you
  camFOVzoom: 15,
  framedDeg:  9,                // how tightly you must frame a target
  scoutRange: 72,               // how far ahead of the rover Ingenuity images
  scoutReveal: 64,              // what it spots from up there
  heliAlt:    10,               // cruise height above ground — about what the real one flew
  flights:    6,
};

const ACCEL = 19, MAX_FWD = 16, MAX_REV = 4.5, DRAG = 5.5, TURN = 1.45;
const GOLD = 0xcba85a, CYAN = 0x7fd4e0, GREEN = 0x6fcf7f;
const HELI = { spin: 0.9, lift: 2.2, scan: 2.6, cruise: 9, rotor: 36, hover: 3.2 };   // cruise in m/s; hover: lift-off height

/* ── the science ──────────────────────────────────────────────── */
/* Six things a rover has actually found in Martian sedimentary rock.
   `read` is what the camera sees, `mean` is what that implies, and `real`
   is the photograph a rover took of the genuine article. Photos are NASA's:
   the game looks for photos/<id>.jpg beside the page first (npm run photos
   fetches them), then falls back to NASA's own copy. */
const NASA = 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpeg';
const UNITS = [
  { kind: 'sandstone', feature: 'crossbeds', name: 'Cross-bedded sandstone',
    read: 'Thin layers inside each bed sit at an angle to the bed itself.',
    mean: 'Ripples and small dunes of sand, migrating one way under moving water. A current that kept flowing in the same direction.',
    real: { id: 'PIA19076', place: '“Whale Rock”, Gale crater', by: 'Curiosity · Mastcam · sol 796, November 2014',
      note: 'Curiosity found this at the foot of Mount Sharp. The team read the cross-bedding as sand ripples driven along by currents running down a delta and out into a lake.',
      credit: 'NASA/JPL-Caltech/MSSS', page: 'https://www.jpl.nasa.gov/images/pia19076-cross-bedding-at-whale-rock/' } },
  { kind: 'mudstone', feature: 'laminae', name: 'Laminated mudstone',
    read: 'Laminae a few millimetres thick, flat and even, one on another.',
    mean: 'Fine sediment settling out of still water, far from where the river came in. A quiet lake floor.',
    real: { id: 'PIA19075', place: '“Pahrump Hills”, Gale crater', by: 'Curiosity · Mastcam · sol 792, October 2014',
      note: 'About a metre of rock face. Layers this thin and this even suggested mud settling a long way from the delta that fed the lake, possibly in deeper water.',
      credit: 'NASA/JPL-Caltech/MSSS', page: 'https://www.jpl.nasa.gov/images/pia19075-thin-laminated-rock-in-pahrump-hills-outcrop/' } },
  { kind: 'conglomerate', feature: 'pebbles', name: 'Pebble conglomerate',
    read: 'Rounded pebbles up to a few centimetres across, set in a sandy matrix.',
    mean: 'Rounding takes a long tumble, and wind cannot move gravel this size. A vigorous stream carried it here.',
    real: { id: 'PIA17062', place: '“Hottah”, Gale crater', by: 'Curiosity · Mastcam · sol 39, September 2012',
      note: 'Found weeks after landing: a slab of old streambed, tilted up like broken pavement. It was the first water-carried gravel anyone had seen on Mars.',
      credit: 'NASA/JPL-Caltech/MSSS', page: 'https://www.jpl.nasa.gov/images/pia17062-remnants-of-ancient-streambed-on-mars-white-balanced-view' } },
  { kind: 'sandstone', feature: 'foresets', name: 'Inclined delta beds',
    read: 'Steeply sloping layers, sandwiched between flat-lying beds above and below.',
    mean: 'Sediment spilling down the front of a delta as it built out into standing water. A river meeting a lake.',
    real: { id: 'PIA24485', place: '“Kodiak” butte, Jezero crater', by: 'Perseverance · Mastcam-Z · 22 February 2021',
      note: 'Photographed four days after landing. Kodiak’s mix of inclined and horizontal layering is what a geologist expects of a river delta on Earth — the evidence that Jezero once held a lake.',
      credit: 'NASA/JPL-Caltech/ASU/MSSS', page: 'https://www.jpl.nasa.gov/images/pia24485-perseverance-view-of-the-delta-in-jezero-crater/' } },
  { kind: 'mudstone', feature: 'veins', name: 'Mineral-veined mudstone',
    read: 'Pale veins cut through the rock and stand proud of its surface.',
    mean: 'Water moved through cracks after the rock had hardened and left minerals behind. A later, second chapter of water.',
    real: { id: 'PIA19161', place: '“Garden City”, Gale crater', by: 'Curiosity · Mastcam · sol 929, March 2015',
      note: 'A network of two-tone veins standing up to 6 cm above the rock round them. The vein fill has resisted erosion better than the mudstone it grew in.',
      credit: 'NASA/JPL-Caltech/MSSS', page: 'https://www.jpl.nasa.gov/images/pia19161-prominent-veins-at-garden-city-on-mount-sharp-mars/' } },
  { kind: 'conglomerate', feature: 'boulders', name: 'Boulder flood beds',
    read: 'Boulders up to a metre across, jumbled together above much finer layers.',
    mean: 'It takes fast, deep water to move boulders. Flash floods, arriving after a long spell of gentler flow.',
    real: { id: 'PIA24684', place: 'Delta scarp, Jezero crater', by: 'Perseverance · Mastcam-Z and SuperCam · 2021',
      note: 'Long-range views of the delta’s cliffs showed layers of boulders up to 1.5 m across sitting on finer beds: the slow river that built the delta was later overtaken by flash floods.',
      credit: 'NASA/JPL-Caltech/LANL/CNES/CNRS/ASU/MSSS', page: 'https://www.jpl.nasa.gov/images/pia24684-two-views-of-delta-scarp/' } },
];

const $ = id => document.getElementById(id);

/* ── state ────────────────────────────────────────────────────── */
const S = {
  phase: 'brief',                // brief | drive | cam | fly | done
  logged: 0,
  flights: CFG.flights,
  rover: { pos: CFG.start.clone(), yaw: 0, speed: 0 },
  cam: 'chase',
  camYaw: 0, camPitch: 0,        // Mastcam pan/tilt, relative to the rover
  heli: { phase: 'landed', t: 0, dur: 2, spin: 0, yaw: 0, from: new THREE.Vector3(), to: new THREE.Vector3(), ctrl: new THREE.Vector3(), at: null, site: null,
          head: 0, pitch: 0, roll: 0, pv: 0, rv: 0, vel: new THREE.Vector3() },
  outcrops: [],
  framed: null,
};

/* ── renderer ─────────────────────────────────────────────────── */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
// Resolution adapts to the device: start at up to 1.5× and step down while frames run slow
// The rover is the star: never drop below native resolution on a normal screen, and go
// up to 2× on high-density ones while frames allow it.
const PR_MAX = Math.min(devicePixelRatio || 1, 2);
let pr = PR_MAX;
renderer.setPixelRatio(pr);
const perf = { t: 0, n: 0, lo: Math.min(1, PR_MAX) };
function adaptRes(dt) {
  perf.t += dt; perf.n++;
  if (perf.t < 2) return;
  const ms = perf.t / perf.n * 1000; perf.t = perf.n = 0;
  const want = ms > 24 ? pr - 0.15 : ms < 13 ? pr + 0.1 : pr;
  const np = Math.max(perf.lo, Math.min(PR_MAX, want));
  if (Math.abs(np - pr) > 0.01) { pr = np; renderer.setPixelRatio(pr); resize(); }
}
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 6000);

const { sun, sky, map, bump, sunDir } = buildMars(scene, renderer);
document.getElementById('loadmsg').textContent = 'Loading Jezero elevation…';
await loadDTM('dtm/');                               // the real ground, before anything is built on it
if (DTM.on) { scene.fog.near = 60; scene.fog.far = SITE ? SITE.fog : 1900; }   // far enough to see the delta front, 2.5 km off
buildTerrain(scene, map, bump);

function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

/* ── outcrops ─────────────────────────────────────────────────── */
OUTCROP_SITES.forEach(([x, z], i) => {
  const u = UNITS[SITE ? SITE.unit : i];
  const g = makeOutcrop({
    feature: u.feature, seed: 400 + i * 131, x, z, ground: height,
    length: 4.4 + (i % 3) * 0.7, width: 2.3 + (i % 2) * 0.5,
  });
  const y = height(x, z);
  scene.add(g);
  const { length: len, width: wid, yaw, top } = g.userData;

  // discovery marker — hidden until Ingenuity images it, or you get close
  const ringMat = new THREE.MeshBasicMaterial({
    color: GOLD, transparent: true, opacity: 0.8, side: THREE.DoubleSide, fog: false, depthWrite: false,
  });
  const ring = new THREE.Mesh(new THREE.RingGeometry(len + 2.6, len + 3.1, 56), ringMat);
  ring.position.set(x, y + 0.15, z);
  ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normalAt(x, z, 5));
  ring.visible = false;
  scene.add(ring);

  // it is long and thin, so fence it with three circles along its axis
  const ax = Math.cos(yaw), az = -Math.sin(yaw);
  for (const t of [-0.58, 0, 0.58]) colliders.push({ x: x + ax * len * t, z: z + az * len * t, r: wid * 0.98, h: 5 });

  S.outcrops.push({
    ...u, i, group: g,
    pos: new THREE.Vector3(x, y, z),
    focus: new THREE.Vector3(x, y + top * 0.4, z),
    ring, ringMat, found: false, logged: false, wid: wid, top,
  });
});

/* level 3: Perseverance's route as a faint dashed line on the ground, and a beacon at the end of it */
const GOAL = SITE ? (() => {
  const p = SITE.path, pts = [];
  for (let i = 0; i + 2 < p.length; i += 2) { const x0 = p[i], z0 = p[i + 1], x1 = p[i + 2], z1 = p[i + 3], n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, z1 - z0) / 2));
    for (let k = 0; k < n; k++) { const x = x0 + (x1 - x0) * k / n, z = z0 + (z1 - z0) * k / n; pts.push(new THREE.Vector3(x, height(x, z) + 0.35, z)); } }
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineDashedMaterial({ color: GOLD, dashSize: 2.2, gapSize: 2.2, transparent: true, opacity: 0.55, depthWrite: false }));
  line.computeLineDistances(); scene.add(line);
  const { x, z } = SITE.end, y = height(x, z);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 60, 24, 1, true), new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.25, depthWrite: false, side: THREE.DoubleSide, fog: false }));
  beam.position.set(x, y + 30, z); scene.add(beam);
  const ring = new THREE.Mesh(new THREE.RingGeometry(9, 10, 64), new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.set(x, y + 0.3, z); scene.add(ring);
  return { beam, told: false };
})() : null;

/* rocks, kept clear of the start pad and the outcrops — scattered once the scanned rocks have loaded */
let rockCount = null;
const ROCK_SCANS = {
  big: ['boulder_01', 'boulder_namaqua_03', 'boulder_namaqua_06'],
  mid: ['stone_01_low', 'rock_moon_04_low', 'stones_namaqua_01_low', 'boulder_namaqua_03_low'],
};
async function loadScans() {
  const out = { big: [], mid: [] };
  for (const tier of ['big', 'mid']) {
    const gl = await Promise.all(ROCK_SCANS[tier].map(n => load(`models/rocks/${n}.glb`)));
    gl.forEach(g => g.scene.traverse(o => { if (o.isMesh) out[tier].push(prepScan(o)); }));
  }
  return out;
}
function scatter(scans) {
  rockCount = scatterRocks(scene, {
    seed: 5150, scans,
    exclude: (x, z, s) =>
      Math.hypot(x - START.x, z - START.z) < (s > 0.36 ? 9 : 3.2) ||
      S.outcrops.some(o => Math.hypot(x - o.pos.x, z - o.pos.z) < 8.5),
  });
}

/* ── Ingenuity scan pulse ─────────────────────────────────────── */
const pulseMat = new THREE.MeshBasicMaterial({ color: 0xbfe8ff, transparent: true, opacity: 0, side: THREE.DoubleSide, fog: false, depthWrite: false });
const pulse = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.4, 64), pulseMat);
pulse.rotation.x = -Math.PI / 2;
scene.add(pulse);

/* ── dust ─────────────────────────────────────────────────────── */
const DUST_N = 150;
const dust = (() => {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const c = cv.getContext('2d');
  const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(206,176,145,.8)'); g.addColorStop(1, 'rgba(206,176,145,0)');
  c.fillStyle = g; c.fillRect(0, 0, 64, 64);

  const pos = new Float32Array(DUST_N * 3).fill(-999);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({
    map: new THREE.CanvasTexture(cv), size: 1.4, transparent: true,
    depthWrite: false, opacity: 0.5, sizeAttenuation: true,
  }));
  pts.frustumCulled = false;
  scene.add(pts);
  return { pts, pos, geo, vel: new Float32Array(DUST_N * 3), life: new Float32Array(DUST_N), head: 0 };
})();

function puff(x, y, z, spread = 0.6, up = 0.8) {
  const i = dust.head = (dust.head + 1) % DUST_N;
  dust.pos.set([x, y, z], i * 3);
  dust.vel.set([(Math.random() - .5) * spread, Math.random() * up + 0.15, (Math.random() - .5) * spread], i * 3);
  dust.life[i] = 1;
}

function stepDust(dt) {
  for (let i = 0; i < DUST_N; i++) {
    if (dust.life[i] <= 0) continue;
    dust.life[i] -= dt * 0.7;
    for (let k = 0; k < 3; k++) dust.pos[i * 3 + k] += dust.vel[i * 3 + k] * dt;
    dust.vel[i * 3 + 1] -= dt * 0.3;
    if (dust.life[i] <= 0) dust.pos[i * 3 + 1] = -999;
  }
  dust.geo.attributes.position.needsUpdate = true;
}

/* ── wheel tracks ─────────────────────────────────────────────── */
/* Two ribbons laid on the ground behind the rear wheels: deep and dark in
   sand, faint on bedrock, fading out with age. One mesh, rewritten in
   place as the rover moves. */
const TRK = { max: 560, step: 0.3, half: 0.2, lane: 1.1, back: 1.17 };
const tracks = (() => {
  const cv = document.createElement('canvas'); cv.width = 64; cv.height = 64;
  const c = cv.getContext('2d');
  const edge = c.createLinearGradient(0, 0, 64, 0);
  edge.addColorStop(0, 'rgba(34,18,11,0)'); edge.addColorStop(0.14, 'rgba(34,18,11,0.5)');
  edge.addColorStop(0.86, 'rgba(34,18,11,0.5)'); edge.addColorStop(1, 'rgba(34,18,11,0)');
  c.fillStyle = edge; c.fillRect(0, 0, 64, 64);
  c.strokeStyle = 'rgba(14,7,4,0.6)'; c.lineWidth = 4.5; c.lineCap = 'round';
  for (const y of [8, 24, 40, 56]) {                       // grouser prints: shallow chevrons
    c.beginPath(); c.moveTo(9, y + 4); c.quadraticCurveTo(32, y - 6, 55, y + 4); c.stroke();
  }
  c.strokeStyle = 'rgba(120,80,55,0.22)'; c.lineWidth = 2;  // the lip of soil each grouser throws up
  for (const y of [16, 32, 48, 64]) { c.beginPath(); c.moveTo(10, y + 3); c.quadraticCurveTo(32, y - 6, 54, y + 3); c.stroke(); }
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = THREE.ClampToEdgeWrapping; tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

  const n = TRK.max;
  const pos = new Float32Array(n * 4 * 3), uv = new Float32Array(n * 4 * 2), col = new Float32Array(n * 4 * 4);
  const idx = new Uint16Array((n - 1) * 12);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 4).setUsage(THREE.DynamicDrawUsage));
  geo.setIndex(new THREE.BufferAttribute(idx, 1).setUsage(THREE.DynamicDrawUsage));
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    map: tex, transparent: true, depthWrite: false, vertexColors: true, roughness: 1, side: THREE.DoubleSide,
    polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3,
  }));
  mesh.frustumCulled = false; mesh.receiveShadow = true; mesh.renderOrder = 2;
  scene.add(mesh);
  geo.setDrawRange(0, 0);

  const samples = [];
  let run = 0, lastX = NaN, lastZ = 0, broken = true;

  function rebuild() {
    const m = samples.length;
    let q = 0;
    for (let i = 0; i < m; i++) {
      const s = samples[i];
      const age = Math.min(1, i / (m * 0.22 + 1));           // the oldest fifth fades away
      for (let k = 0; k < 4; k++) {
        const o = i * 4 + k;
        pos[o * 3] = s.p[k * 3]; pos[o * 3 + 1] = s.p[k * 3 + 1]; pos[o * 3 + 2] = s.p[k * 3 + 2];
        uv[o * 2] = k === 0 || k === 3 ? 0 : 1; uv[o * 2 + 1] = s.v;
        col[o * 4] = col[o * 4 + 1] = col[o * 4 + 2] = 1; col[o * 4 + 3] = s.a * age;
      }
      if (i > 0 && !s.gap) {
        const a = (i - 1) * 4, b = i * 4;
        idx[q++] = a; idx[q++] = b; idx[q++] = a + 1; idx[q++] = a + 1; idx[q++] = b; idx[q++] = b + 1;           // left lane
        idx[q++] = a + 2; idx[q++] = b + 2; idx[q++] = a + 3; idx[q++] = a + 3; idx[q++] = b + 2; idx[q++] = b + 3; // right lane
      }
    }
    geo.attributes.position.needsUpdate = geo.attributes.uv.needsUpdate = geo.attributes.color.needsUpdate = true;
    geo.index.needsUpdate = true;
    geo.setDrawRange(0, q);
  }

  return {
    cut() { broken = true; lastX = NaN; },
    lay(r, fwd, right) {
      const moved = Math.hypot(r.pos.x - lastX, r.pos.z - lastZ);
      if (moved < TRK.step) return;
      if (moved > 3) broken = true;                          // a jump, not a drive
      run += broken || !(moved >= 0) ? 0 : moved;
      lastX = r.pos.x; lastZ = r.pos.z;

      const p = new Float32Array(12);
      const bx = r.pos.x - fwd.x * TRK.back, bz = r.pos.z - fwd.z * TRK.back;
      [-TRK.lane - TRK.half, -TRK.lane + TRK.half, TRK.lane - TRK.half, TRK.lane + TRK.half].forEach((off, k) => {
        const x = bx + right.x * off, z = bz + right.z * off;
        p[k * 3] = x; p[k * 3 + 1] = height(x, z) + 0.035; p[k * 3 + 2] = z;
      });
      const soft = sandMask(bx, bz), hard = paverMask(bx, bz);
      samples.push({ p, v: run / 0.62, a: Math.min(1, 0.5 + soft * 0.5) * (1 - hard * 0.6), gap: broken });
      broken = false;
      if (samples.length > TRK.max) { samples.shift(); samples[0].gap = true; }
      rebuild();
    },
  };
})();

/* ── models ───────────────────────────────────────────────────── */
const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder);   // the Almanac's .glb files are meshopt-compressed

let rover = null, roverModel = null, sus = null, heli = null, rotors = [];
/* the Remote Sensing Mast: stowed on the deck as the model ships, raised by the
   model's own animation clips the first time Mastcam-Z is opened */
const MAST = { mixer: null, actions: [], dur: 0, t: 0, up: false, raising: false,
  top: null, head: null, q0: null, axis: null, pan: 0, panWant: 0, off: 0 };

/* Normally just loads models/*.glb. The hosted build sets __GLB_B64 because
   that host will not serve .glb, so the models ride along as base64 text. */
const load = url => new Promise((res, rej) => {
  if (!globalThis.__GLB_B64) return loader.load(url, res, undefined, rej);
  fetch(url + '.txt')
    .then(r => r.text())
    .then(t => {
      const bin = atob(t.trim());
      const buf = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
      loader.parse(buf.buffer, '', res, rej);
    })
    .catch(rej);
});

async function loadModels() {
  const [p, i] = await Promise.all([load('models/perseverance.glb'), load('../models/ingenuity.glb')   /* the app's copy: byte-identical */]);

  rover = new THREE.Group();
  rover.rotation.order = 'YXZ';
  roverModel = p.scene;
  MAST.mixer = new THREE.AnimationMixer(roverModel);
  for (const clip of p.animations) {
    if (!/^(CylinderAction|bottomAction|topAction|Cylinder\.002Action)$/.test(clip.name)) continue;
    const a = MAST.mixer.clipAction(clip); a.setLoop(THREE.LoopOnce, 1); a.clampWhenFinished = true;
    a.play(); a.paused = true; a.time = 0;
    MAST.actions.push(a); MAST.dur = Math.max(MAST.dur, clip.duration);
  }
  MAST.mixer.update(0);
  MAST.top = roverModel.getObjectByName('top'); MAST.head = roverModel.getObjectByName('head');
  roverModel.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  roverModel.rotation.y = CFG.roverYaw;
  rover.add(roverModel);
  scene.add(rover);
  sus = buildSuspension(roverModel);        // re-hang the wheels and arms on a real linkage

  // Ingenuity lives on the ground, at true scale, with its feet at the group origin
  heli = new THREE.Group();
  heli.rotation.order = 'YXZ';
  const hr = i.scene;
  hr.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  hr.updateMatrixWorld(true);
  hr.position.y -= new THREE.Box3().setFromObject(hr).min.y;
  heli.add(hr);
  heli.updateMatrixWorld(true);
  scene.add(heli);

  // counter-rotating coaxial rotors, spun the way the Almanac viewer spins them
  ['rotors_01', 'rotors_02'].forEach((n, k) => {
    const o = hr.getObjectByName(n);
    if (o) rotors.push([o, (k % 2 ? -1 : 1) * (Math.sign(o.matrixWorld.elements[1]) || 1)]);
  });

  // first airfield: a flat spot a little ahead and to the right of the rover
  const pad = findLanding(START.x + 7, START.z - 10, [{ x: START.x, z: START.z, r: 5 }]);
  S.heli.site = pad;
  S.heli.yaw = 0.6;
  setDown(pad.x, pad.z, S.heli.yaw);
}

/* Raise the mast: scrub the deploy clips from stowed to upright. The model's clips run
   raise → hold → stow over 20 s; the mast is fully up and settled 2.8 s in, so only that
   stretch is played. (Scrubbing all of it raised the mast and stowed it again.) */
const MAST_UP_T = 2.8;
function setMast(k) {
  if (!MAST.actions.length) return;
  for (const a of MAST.actions) { a.paused = true; a.time = Math.min(a.getClip().duration, k * MAST_UP_T); }
  MAST.mixer.update(0);
  if (k >= 1 && !MAST.q0 && MAST.top && MAST.head) {
    // once upright, find the mast's own long axis so the head can pan about it
    MAST.q0 = MAST.top.quaternion.clone();
    roverModel.updateMatrixWorld(true);
    const hw = MAST.head.getWorldPosition(new THREE.Vector3());
    const local = MAST.top.parent.worldToLocal(hw.clone());
    MAST.axis = local.sub(MAST.top.position).normalize();
    // which way do the cameras look at zero pan? measure it, so pan 0 = straight ahead
    const cams = roverModel.getObjectByName('Mastcam_Z_cams').getWorldPosition(new THREE.Vector3());
    const look = cams.sub(hw); look.y = 0;
    const fwd = new THREE.Vector3(-Math.sin(S.rover.yaw), 0, -Math.cos(S.rover.yaw));
    MAST.off = Math.atan2(look.x * fwd.z - look.z * fwd.x, look.x * fwd.x + look.z * fwd.z);
  }
}
const _qa = new THREE.Quaternion();
function stepMast(dt) {
  if (MAST.raising) {
    MAST.t = Math.min(1, MAST.t + dt / 2.6);
    setMast(MAST.t * MAST.t * (3 - 2 * MAST.t));
    if (MAST.t >= 1) { MAST.raising = false; MAST.up = true; }
  }
  if (MAST.q0) {
    MAST.pan += (MAST.panWant - MAST.pan) * Math.min(1, dt * 3);
    MAST.top.quaternion.copy(_qa.setFromAxisAngle(MAST.axis, MAST.pan - MAST.off)).multiply(MAST.q0);
  }
}

/* ── the traverse map ─────────────────────────────────────────── */
/* North-up shaded relief of the real ground, under a fog of war: lifted where the
   rover has been and where Ingenuity has flown. Your track, the outcrops you have
   found and logged, Ingenuity's parking spot, and dashed circles for what it only
   glimpsed. A small copy sits in the corner; M opens the full map. */
const MAP = { R: PLAY_R + 18, cell: 2, n: 0, seen: null, relief: null, track: [], clues: [], t: 0, open: false };
MAP.n = Math.round(MAP.R * 2 / MAP.cell);
MAP.seen = new Uint8Array(MAP.n * MAP.n);
function seeArea(x, z, r) {
  const { n, cell, R } = MAP, i0 = Math.floor((x - r + R) / cell), i1 = Math.ceil((x + r + R) / cell);
  const j0 = Math.floor((z - r + R) / cell), j1 = Math.ceil((z + r + R) / cell);
  for (let j = Math.max(0, j0); j < Math.min(n, j1); j++) for (let i = Math.max(0, i0); i < Math.min(n, i1); i++) {
    const cx = (i + 0.5) * cell - R, cz = (j + 0.5) * cell - R;
    if (Math.hypot(cx - x, cz - z) < r) MAP.seen[j * n + i] = 1;
  }
}
function buildRelief() {
  const N = 300, cv = document.createElement('canvas'); cv.width = cv.height = N;
  const c = cv.getContext('2d'), id = c.createImageData(N, N), R = MAP.R, px = (2 * R) / N;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const x = (i + 0.5) * px - R, z = (j + 0.5) * px - R, h = height(x, z);
    const gx = (height(x + px, z) - h) / px, gz = (height(x, z + px) - h) / px;
    let sh = 0.62 - gx * 1.6 - gz * 1.1; sh = Math.max(0.25, Math.min(1.2, sh));
    const sand = sandMask(x, z);
    const out = Math.hypot(x, z) > PLAY_R;
    const k = out ? 0.45 : 1;
    id.data.set([(178 - sand * 20) * sh * k, (140 - sand * 14) * sh * k, (104 - sand * 6) * sh * k, 255], (j * N + i) * 4);
  }
  c.putImageData(id, 0, 0);
  MAP.relief = cv;
}
function drawMap(cv, big) {
  const c = cv.getContext('2d'), W = cv.width, R = MAP.R, sc = W / (2 * R), P = (x, z) => [(x + R) * sc, (z + R) * sc];
  if (!MAP.relief) buildRelief();
  c.clearRect(0, 0, W, W);
  c.drawImage(MAP.relief, 0, 0, W, W);
  // fog of war: one pixel per cell, scaled up smoothly so it has soft edges
  const { n, seen } = MAP;
  if (!MAP.fog) { MAP.fog = document.createElement('canvas'); MAP.fog.width = MAP.fog.height = n; }
  const fc = MAP.fog.getContext('2d'), fd = fc.createImageData(n, n);
  for (let k = 0; k < n * n; k++) { fd.data[k * 4] = 14; fd.data[k * 4 + 1] = 10; fd.data[k * 4 + 2] = 20; fd.data[k * 4 + 3] = seen[k] ? 0 : 190; }
  fc.putImageData(fd, 0, 0);
  c.imageSmoothingEnabled = true; c.drawImage(MAP.fog, 0, 0, W, W);
  // the edge of the roaming area
  c.strokeStyle = 'rgba(242,228,190,.35)'; c.setLineDash([4, 4]); c.lineWidth = 1;
  c.beginPath(); c.arc(...P(0, 0), PLAY_R * sc, 0, 6.3); c.stroke(); c.setLineDash([]);
  // clues from Ingenuity
  for (const k of MAP.clues) {
    if (k.o.found) continue;
    c.strokeStyle = 'rgba(127,212,224,.9)'; c.fillStyle = 'rgba(127,212,224,.12)'; c.lineWidth = big ? 2 : 1.2; c.setLineDash([5, 4]);
    c.beginPath(); c.arc(...P(k.x, k.z), k.r * sc, 0, 6.3); c.fill(); c.stroke(); c.setLineDash([]);
    if (big) { c.fillStyle = '#7FD4E0'; c.font = '600 11px Montserrat, sans-serif'; c.textAlign = 'center'; c.fillText('layered rock?', ...P(k.x, k.z - k.r - 3)); }
  }
  // the track
  if (MAP.track.length > 1) {
    c.strokeStyle = 'rgba(242,228,190,.8)'; c.lineWidth = big ? 2 : 1.2; c.beginPath();
    MAP.track.forEach(([x, z], i) => c[i ? 'lineTo' : 'moveTo'](...P(x, z))); c.stroke();
  }
  if (SITE) {      // level 3: Perseverance's route and the end of the drive
    c.strokeStyle = 'rgba(203,168,90,.75)'; c.lineWidth = big ? 2 : 1.2; c.setLineDash([4, 3]); c.beginPath();
    for (let i = 0; i < SITE.path.length; i += 2) c[i ? 'lineTo' : 'moveTo'](...P(SITE.path[i], SITE.path[i + 1])); c.stroke(); c.setLineDash([]);
    const [gx, gy] = P(SITE.end.x, SITE.end.z); c.fillStyle = '#E6CC85'; c.beginPath(); c.arc(gx, gy, big ? 6 : 3.5, 0, 6.3); c.fill();
    if (big) { c.font = '600 11px Montserrat, sans-serif'; c.textAlign = 'left'; c.fillText('End of the drive', gx + 10, gy + 4); }
  }
  // outcrops: found in gold, logged in green, numbered
  S.outcrops.forEach((o, i) => {
    if (!o.found) return;
    const [x, y] = P(o.pos.x, o.pos.z), r = big ? 7 : 4;
    c.save(); c.translate(x, y); c.rotate(Math.PI / 4);
    c.fillStyle = o.logged ? '#6FCF7F' : '#CBA85A'; c.strokeStyle = 'rgba(0,0,0,.6)'; c.lineWidth = 1.5;
    c.fillRect(-r, -r, 2 * r, 2 * r); c.strokeRect(-r, -r, 2 * r, 2 * r); c.restore();
    if (big) { c.fillStyle = '#F2E4BE'; c.font = '600 11px Montserrat, sans-serif'; c.textAlign = 'left'; c.fillText(o.logged ? o.name : `${o.name} — not yet imaged`, x + 12, y + 4); }
  });
  // Ingenuity
  if (S.heli.site) {
    const [x, y] = P(heli ? heli.position.x : S.heli.site.x, heli ? heli.position.z : S.heli.site.z);
    c.strokeStyle = '#7FD4E0'; c.lineWidth = 1.5; const r = big ? 6 : 4;
    c.beginPath(); c.moveTo(x - r, y); c.lineTo(x + r, y); c.moveTo(x, y - r); c.lineTo(x, y + r); c.stroke();
  }
  // the rover, pointing where it faces
  const [rx, ry] = P(S.rover.pos.x, S.rover.pos.z), a = -S.rover.yaw, L = big ? 11 : 7;
  c.save(); c.translate(rx, ry); c.rotate(a);
  c.fillStyle = '#F2E4BE'; c.strokeStyle = '#0d0a18'; c.lineWidth = 1.5;
  c.beginPath(); c.moveTo(0, -L); c.lineTo(L * 0.62, L * 0.7); c.lineTo(0, L * 0.35); c.lineTo(-L * 0.62, L * 0.7); c.closePath(); c.fill(); c.stroke();
  c.restore();
  if (big) {
    c.fillStyle = 'rgba(242,228,190,.8)'; c.font = '600 10px Montserrat, sans-serif'; c.textAlign = 'center';
    c.fillText('N', W - 18, 22); c.beginPath(); c.moveTo(W - 18, 28); c.lineTo(W - 18, 44); c.strokeStyle = 'rgba(242,228,190,.8)'; c.stroke();
    const bar = 100 * sc; c.fillRect(14, W - 18, bar, 2); c.textAlign = 'left'; c.fillText('100 m', 14, W - 24);
  }
}
function stepMap(dt) {
  if (S.phase === 'brief') return;
  const p = S.rover.pos, last = MAP.track[MAP.track.length - 1];
  if (!last || Math.hypot(p.x - last[0], p.z - last[1]) > 2.5) { MAP.track.push([p.x, p.z]); seeArea(p.x, p.z, 40); }
  MAP.t += dt;
  if (MAP.t > 0.25) { MAP.t = 0; drawMap($('minimap'), false); if (MAP.open) drawMap($('bigmap'), true); }
}
function toggleMap(force) {
  MAP.open = force ?? !MAP.open;
  $('mapsheet').classList.toggle('on', MAP.open);
  if (MAP.open) {
    drawMap($('bigmap'), true);
    const left = S.outcrops.filter(o => !o.found).length, clues = MAP.clues.filter(k => !k.o.found).length;
    $('map-note').textContent = left === 0 ? 'Every outcrop has been found.'
      : clues ? `${left} outcrop${left > 1 ? 's' : ''} still unfound. Ingenuity has ${clues} lead${clues > 1 ? 's' : ''} — the dashed circles.`
      : `${left} outcrop${left > 1 ? 's' : ''} still unfound. Send Ingenuity${kb('F')} over the dark ground to look for leads.`;
  }
}

/* ── input ────────────────────────────────────────────────────── */
const keys = Object.create(null);
const touch = { f: 0, b: 0, l: 0, r: 0 };

addEventListener('keydown', e => {
  const k = e.key.toLowerCase();
  if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
  if (keys[k]) return;
  keys[k] = true;
  if (k === 'c') S.phase === 'cam' ? capture() : S.phase === 'cine' ? endCine() : openCam();
  if (k === 'escape' && S.phase === 'cam') closeCam();
  if (k === ' ' && S.phase === 'cam') capture();
  if (k === 'f') launchHeli();
  if (k === 'm') toggleMap();
  if (k === 'v' && S.phase !== 'cam') S.cam = S.cam === 'map' ? 'chase' : 'map';      // overhead camera
});
addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });

/* phones and tablets: no keyboard, so no key names anywhere in the text */
const TOUCH = matchMedia('(pointer: coarse)').matches;
const kb = (k, pre = ' ') => TOUCH ? '' : `${pre}(${k})`;

/* Drag on the scene to swing the camera round the rover (mouse or finger); the wheel zooms.
   While Mastcam-Z is open, the same drag aims the camera instead. Let go and start driving,
   and the view eases back behind the rover. */
const ORB = { yaw: 0, pitch: 0, dist: 1, id: null, x: 0, y: 0, idle: 9 };
// a drag that starts on the HUD must not scroll or bounce the page (iOS); briefing sheets can still scroll
document.addEventListener('touchmove', e => { if (!e.target.closest('.sheet')) e.preventDefault(); }, { passive: false });
addEventListener('pointerdown', e => {
  if (e.target !== renderer.domElement || ORB.id !== null) return;
  if (!['drive', 'fly', 'cam'].includes(S.phase)) return;
  ORB.id = e.pointerId; ORB.x = e.clientX; ORB.y = e.clientY;
  try { renderer.domElement.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
});
addEventListener('pointermove', e => {
  if (e.pointerId !== ORB.id) return;
  const dx = e.clientX - ORB.x, dy = e.clientY - ORB.y;
  ORB.x = e.clientX; ORB.y = e.clientY;
  const sp = TOUCH ? 1.4 : 1;
  if (S.phase === 'cam') {                       // aim Mastcam-Z: narrow lens, so a finer touch
    S.camYaw = Math.max(-0.9, Math.min(0.9, S.camYaw + dx * 0.0022 * sp));
    S.camPitch = Math.max(-0.28, Math.min(0.3, S.camPitch + dy * 0.0018 * sp));
    return;
  }
  ORB.yaw -= dx * 0.0065 * sp;
  ORB.pitch = Math.max(-0.42, Math.min(0.85, ORB.pitch + dy * 0.005 * sp));
  ORB.idle = 0;
});
const orbEnd = e => { if (e.pointerId === ORB.id) { ORB.id = null; ORB.idle = 0; } };
addEventListener('pointerup', orbEnd); addEventListener('pointercancel', orbEnd);
addEventListener('wheel', e => {
  if (e.target !== renderer.domElement || S.phase === 'cam') return;
  ORB.dist = Math.max(0.45, Math.min(2.4, ORB.dist * Math.exp(e.deltaY * 0.0012)));
}, { passive: true });

// keyboard wins when pressed; otherwise the thumbstick, which is analogue — half a push is half speed
const stick = createStick(document.getElementById('stick-rover'));
const axF = () => { const k = (keys.w || keys.arrowup ? 1 : 0) - (keys.s || keys.arrowdown ? 1 : 0); return k || stick.y; };
const axT = () => { const k = (keys.a || keys.arrowleft ? 1 : 0) - (keys.d || keys.arrowright ? 1 : 0); return k || -stick.x; };

/* ── driving ──────────────────────────────────────────────────── */
const fwdV = new THREE.Vector3(), rightV = new THREE.Vector3();
const gS = new Float32Array(6);            // ground under each wheel, lightly smoothed
let gReady = false, edgeWarned = 0;

/* ── mobility: traction, rocks, tipping ───────────────────────────
   Numbers from the real rover where they exist:
     · wheels 52.5 cm across; a wheel can climb a block about that tall
     · 60 cm under the belly, so taller blocks can pass between the wheels, not under the body
     · designed not to tip over at 45° in any direction; the flight software
       treats 30° as its tilt limit and stops there
   The centre of mass is not published. 0.95 m above the ground and 10 cm aft of
   centre (the nuclear power source hangs off the back) puts the static tip-over
   angles just above that 45° design figure:                                     */
const MOB = {
  cgH: 0.95, cgAft: 0.10,
  halfTrack: 1.10,                       // mean distance from the centreline to the wheel contact lines
  front: 1.0955, rear: 1.165,            // axle positions fore and aft of the body centre
  belly: 0.60, climb: 0.50,
  warn: 30 * Math.PI / 180,              // flight-software tilt limit
  g: 3.71,                               // Mars
  slideG: 6.5,                           // gravity for sliding, scaled up to suit the time-compressed driving
  dyn: 0.035,                            // share of turning (centripetal) load that counts toward tipping; speeds are ×400
};
MOB.tipSide = Math.atan(MOB.halfTrack / MOB.cgH);                   // ≈ 49°
MOB.tipFwd = Math.atan((MOB.front + MOB.cgAft) / MOB.cgH);          // nose down ≈ 52°
MOB.tipBack = Math.atan((MOB.rear - MOB.cgAft) / MOB.cgH);          // nose up ≈ 48°
const WHEEL_PLAN = 0.27;                 // a tyre's footprint, as a circle in plan
const BODY = { hw: 0.78, hl: 1.45 };     // the body box between the wheels, half-width and half-length

/* how well the wheels grip here: tan of the steepest slope they can hold */
function grip(x, z) {
  const sand = sandMask(x, z), pave = paverMask(x, z);
  return 0.70 + 0.15 * pave - 0.25 * sand;     // ~35° on regolith, ~40° on bedrock, ~25° on drift sand
}

const ATT = { pitch: 0, lean: 0, effRoll: 0, effPitch: 0, tipT: 0, warnT: 0, slipT: 0, safe: null, safeT: 0, bumpT: 0 };
const slideV = new THREE.Vector2();
const wPos = Array.from({ length: 6 }, () => new THREE.Vector2());

function stepRover(dt) {
  const r = S.rover;
  if (S.phase === 'roll') { stepRollover(dt); return; }
  const driving = S.phase === 'drive';

  const turn = driving ? axT() : 0;
  const fwd = driving ? axF() : 0;
  const yawRate = turn * TURN;
  r.yaw += yawRate * dt;

  fwdV.set(-Math.sin(r.yaw), 0, -Math.cos(r.yaw));
  rightV.set(Math.cos(r.yaw), 0, -Math.sin(r.yaw));

  // the ground's slope under the whole rover, and how much of it the wheels can hold
  const e = 1.4;
  const gx = (height(r.pos.x + e, r.pos.z) - height(r.pos.x - e, r.pos.z)) / (2 * e);
  const gz = (height(r.pos.x, r.pos.z + e) - height(r.pos.x, r.pos.z - e)) / (2 * e);
  const along = 0.5 * (gx * fwdV.x + gz * fwdV.z) + 0.5 * Math.tan(ATT.pitch);   // rise per metre ahead: the ground's, and the body's own
  const mu = grip(r.pos.x, r.pos.z);
  const tanS = Math.hypot(gx, gz), slope = Math.atan(tanS);

  // Uphill, the drive fades as the slope nears what the wheels can grip; past it, they just spin.
  const up = Math.max(0, along * Math.sign(r.speed || fwd || 1)) / mu;
  const climbF = Math.max(0, 1 - up * up);
  // Blocks under the wheels: the steeper the face a wheel is rolling up, the harder the push.
  const rocks = 1 / (1 + (r.climb || 0) * 2.4);
  const cap = (MAX_FWD * climbF + Math.min(1.6, Math.max(0, -along) * 2.2)) * rocks;

  if (fwd !== 0) r.speed += fwd * ACCEL * dt * (up < 1 ? 1 : 0.15);
  else r.speed -= Math.sign(r.speed) * Math.min(Math.abs(r.speed), DRAG * dt);
  r.speed = Math.max(-MAX_REV * Math.max(0.25, climbF), Math.min(Math.max(up < 0.9 ? 0.4 : 0, cap), r.speed));
  if ((r.climb || 0) > 1.4 && Math.abs(r.speed) > 5 && ATT.bumpT <= 0) { buzz(15); ATT.bumpT = 0.25; ATT.shake = 0.6; }   // a wheel meets a block's face
  const spinning = up >= 1 && fwd * Math.sign(along) > 0;
  if (spinning) r.speed *= Math.exp(-dt * 3);                                       // wheels spinning in place
  ATT.spinT = spinning ? (ATT.spinT || 0) + dt : 0;
  if (ATT.spinT > 0.8 && performance.now() - (ATT.slipToast || 0) > 8000) {
    ATT.slipToast = performance.now();
    toast(`Wheels spinning: ${Math.round(Math.atan(Math.abs(along)) * 57.3)}° is past what they grip here. Back off, or angle across the slope.`);
  }

  // Past the grip limit the whole rover slides downhill; below it, any slide bleeds away.
  const excess = Math.sin(slope) - mu * Math.cos(slope);
  if (excess > 0 && tanS > 1e-4) {
    slideV.x -= gx / tanS * MOB.slideG * excess * dt;
    slideV.y -= gz / tanS * MOB.slideG * excess * dt;
    ATT.slipT += dt;
  } else {
    slideV.multiplyScalar(Math.exp(-dt * 5));
    ATT.slipT = Math.max(0, ATT.slipT - dt * 2);
  }
  if (ATT.slipT > 0.6 && performance.now() - (ATT.slipToast || 0) > 8000) {
    ATT.slipToast = performance.now();
    toast(sandMask(r.pos.x, r.pos.z) > 0.4 ? 'Wheels slipping in drift sand: the slope is past what they can grip.' : 'Sliding: this slope is steeper than the wheels can hold.');
  }

  const next = r.pos.clone().addScaledVector(fwdV, r.speed * dt);
  next.x += slideV.x * dt; next.z += slideV.y * dt;

  const d = Math.hypot(next.x, next.z);
  if (d > PLAY_R - 8) {
    next.x *= (PLAY_R - 8) / d; next.z *= (PLAY_R - 8) / d; r.speed *= 0.4; slideV.set(0, 0);
    if (performance.now() - edgeWarned > 9000) { edgeWarned = performance.now(); toast('The crater wall: too steep to climb. Turn back into the basin.'); }
  }

  /* Blocks too tall to climb stop the wheels; blocks taller than the belly also stop the body.
     Anything between can pass under the rover, between the wheels. */
  let hit = 0;
  const pushOut = (px, pz, cx, cz, min) => {
    const dx = px - cx, dz = pz - cz, d2 = dx * dx + dz * dz;
    if (d2 >= min * min || d2 < 1e-8) return false;
    const dd = Math.sqrt(d2), k = (min - dd);
    next.x += dx / dd * k; next.z += dz / dd * k;
    hit = Math.max(hit, -((dx / dd) * fwdV.x + (dz / dd) * fwdV.z) * Math.sign(r.speed || 1));    // 1 = head-on
    return true;
  };
  for (let pass = 0; pass < 2; pass++) for (const c of colliders) {
    const ox = c.x - next.x, oz = c.z - next.z;
    if (ox * ox + oz * oz > (c.r + 2.2) * (c.r + 2.2)) continue;
    const tall = c.h ?? 9;
    if (tall > MOB.climb) for (const w of sus ? sus.wheels : []) {
      const xr = -w.x;
      pushOut(next.x + rightV.x * xr + fwdV.x * w.z, next.z + rightV.z * xr + fwdV.z * w.z, c.x, c.z, c.r + WHEEL_PLAN);
    }
    if (tall > MOB.belly) {
      // circle against the body box, in the rover's own frame
      const lx = ox * rightV.x + oz * rightV.z, lz = ox * fwdV.x + oz * fwdV.z;
      const qx = Math.max(-BODY.hw, Math.min(BODY.hw, lx)), qz = Math.max(-BODY.hl, Math.min(BODY.hl, lz));
      const px = next.x + rightV.x * qx + fwdV.x * qz, pz = next.z + rightV.z * qx + fwdV.z * qz;
      pushOut(px, pz, c.x, c.z, c.r);
    }
  }
  if (heli && S.heli.phase === 'landed') {
    const lx = (heli.position.x - next.x) * rightV.x + (heli.position.z - next.z) * rightV.z;
    const lz = (heli.position.x - next.x) * fwdV.x + (heli.position.z - next.z) * fwdV.z;
    const qx = Math.max(-1.3, Math.min(1.3, lx)), qz = Math.max(-1.6, Math.min(1.6, lz));
    pushOut(next.x + rightV.x * qx + fwdV.x * qz, next.z + rightV.z * qx + fwdV.z * qz, heli.position.x, heli.position.z, 0.6);
  }
  if (hit > 0.2) {
    if (Math.abs(r.speed) > 3 && ATT.bumpT <= 0) { buzz(25); ATT.bumpT = 0.4; ATT.shake = Math.min(1, Math.abs(r.speed) / MAX_FWD); }
    r.speed *= 1 - 0.7 * Math.min(1, hit);
    slideV.multiplyScalar(0.3);
  }
  ATT.bumpT -= dt;
  r.pos.x = next.x; r.pos.z = next.z;

  if (!sus) return;

  /* The suspension. Each tyre is rolled over the ground and the blocks under it (it meets a
     block's face with its rim, not its centre), and the linkage sorts out where that leaves
     the rockers, the bogies and the body. */
  let lump = 0, climb = 0;
  const dir = Math.sign(r.speed) || 1;
  for (let i = 0; i < 6; i++) {
    const w = sus.wheels[i];
    const xr = -w.x;                                    // model +X is the rover's left
    const wx = r.pos.x + rightV.x * xr + fwdV.x * w.z;
    const wz = r.pos.z + rightV.z * xr + fwdV.z * w.z;
    const g = wheelGround(wx, wz, fwdV.x, fwdV.z);
    const base = height(wx, wz);
    lump = Math.max(lump, g - base);
    // the face this tyre is about to roll up, over the next 15 cm
    const ahead = wheelGround(wx + fwdV.x * dir * 0.15, wz + fwdV.z * dir * 0.15, fwdV.x, fwdV.z) - height(wx + fwdV.x * dir * 0.15, wz + fwdV.z * dir * 0.15);
    climb = Math.max(climb, (ahead - (g - base)) / 0.15);
    // a tyre drops off a block quickly but climbs at the rate the linkage allows
    const k = g > gS[i] ? 18 : 30;
    gS[i] = gReady ? gS[i] + (g - gS[i]) * Math.min(1, dt * k) : g;
    wPos[i].set(wx, wz);

    // each wheel turns at its own ground speed: the outside of a turn runs faster
    const arm = w.steer ? Math.hypot(w.x, w.z) : Math.abs(w.x);
    w.spin.rotation.x += (r.speed + yawRate * Math.sign(xr) * arm) * dt / WHEEL_R;

    if (w.steer) {
      // corner wheels steer: toe to the tangent for a turn on the spot, lead into an arc when rolling
      const slow = 1 - Math.min(1, Math.abs(r.speed) / 1.4);
      const want = Math.sign(xr) * Math.sign(w.z) * 0.72 * Math.abs(turn) * slow
                 + Math.sign(w.z) * turn * 0.30 * (1 - slow);
      w.steer.rotation.y += (want - w.steer.rotation.y) * Math.min(1, dt * 5);
    }
  }
  gReady = true;
  r.lump = lump;
  r.climb = Math.max(0, climb);

  const p = sus.pose(gS);
  r.pos.y = p.y;
  rover.position.copy(r.pos);
  rover.rotation.set(p.pitch, r.yaw, -p.lean);
  if (ATT.shake > 0) {                                 // a jolt when a wheel meets a block head-on
    ATT.shake = Math.max(0, ATT.shake - dt * 3);
    rover.rotation.x += Math.sin(performance.now() * 0.06) * 0.02 * ATT.shake;
  }

  /* Tipping. The body's own pitch and lean (slope plus whatever the wheels are standing on),
     plus a share of the sideways load from turning, against the static tip-over angles. */
  ATT.pitch = p.pitch; ATT.lean = p.lean;                          // lean: + is the left side up
  const aLat = r.speed * yawRate * MOB.dyn;                          // outward load in a turn (+ toward the right when turning left)
  ATT.effRoll = Math.atan(Math.tan(p.lean) + aLat / MOB.g);          // + rolling toward the right side (left side up)
  ATT.effPitch = p.pitch;                                             // + nose up
  const sideM = MOB.tipSide - Math.abs(ATT.effRoll);
  const pitchM = (ATT.effPitch > 0 ? MOB.tipBack : MOB.tipFwd) - Math.abs(ATT.effPitch);
  const tilt = Math.max(Math.abs(ATT.effRoll), Math.abs(ATT.effPitch));
  if (tilt > MOB.warn && performance.now() - ATT.warnT > 7000) {
    ATT.warnT = performance.now(); buzz(60);
    toast(`Tilt ${Math.round(tilt * 57.3)}°: past the 30° the flight software allows. It would stop here.`);
  }
  if (Math.min(sideM, pitchM) < 0) ATT.tipT += dt; else ATT.tipT = Math.max(0, ATT.tipT - dt * 2);
  if (ATT.tipT > 0.25 && driving) startRollover(sideM < pitchM ? 'side' : 'pitch');

  // remember the last place it was sitting comfortably, to recover to
  ATT.safeT += dt;
  if (ATT.safeT > 1.2 && tilt < 0.21 && slideV.length() < 0.3 && excess < 0) {
    ATT.safeT = 0; ATT.safe = { x: r.pos.x, z: r.pos.z, yaw: r.yaw };
  }
  drawAttitude();

  tracks.lay(r, fwdV, rightV);

  if (Math.abs(r.speed) > 1.3 && Math.random() < 0.5) {
    const side = Math.random() < 0.5 ? 1.1 : -1.1;
    puff(r.pos.x + rightV.x * side - fwdV.x * 1.3, r.pos.y + 0.12, r.pos.z + rightV.z * side - fwdV.z * 1.3, 0.6, 0.3);
  }

  discover();
}

/* ── rollover ─────────────────────────────────────────────────── */
/* Past the tip-over angle the centre of mass is outside the downhill wheels and
   nothing brings it back: it goes over about that line of wheels. */
const ROLL = { t: 0, axis: new THREE.Vector3(), pivot: new THREE.Vector3(), m0: new THREE.Matrix4(), sign: 1, total: 1.75, kind: '', why: '' };
const _m = new THREE.Matrix4(), _mr = new THREE.Matrix4(), _up = new THREE.Vector3();
function startRollover(kind) {
  const r = S.rover;
  S.phase = 'roll'; r.speed = 0; slideV.set(0, 0);
  ROLL.t = 0; ROLL.kind = kind; ROLL.shown = false;
  const deg = v => Math.round(Math.abs(v) * 57.3);
  if (kind === 'side') {
    const s = Math.sign(ATT.effRoll) || 1;
    ROLL.axis.copy(fwdV);
    ROLL.pivot.copy(r.pos).addScaledVector(rightV, s * MOB.halfTrack);
    ROLL.dir = rightV.clone().multiplyScalar(s);
    ROLL.why = `Roll reached ${deg(ATT.effRoll)}°. With the centre of mass ${MOB.cgH} m up and the wheels ${MOB.halfTrack} m either side of it, `
             + `the rover tips sideways past ${deg(MOB.tipSide)}°: the centre of mass is then outside the ${s > 0 ? 'right' : 'left'}-hand wheels.`;
  } else {
    const back = ATT.effPitch > 0;
    ROLL.axis.copy(rightV);
    ROLL.pivot.copy(r.pos).addScaledVector(fwdV, back ? -MOB.rear : MOB.front);
    ROLL.dir = fwdV.clone().multiplyScalar(back ? -1 : 1);
    ROLL.why = `Pitch reached ${deg(ATT.effPitch)}° ${back ? 'nose up' : 'nose down'}. It goes over ${back ? 'backwards' : 'forwards'} past `
             + `${deg(back ? MOB.tipBack : MOB.tipFwd)}°, when the centre of mass passes over the ${back ? 'rear' : 'front'} axle.`;
  }
  ROLL.pivot.y = height(ROLL.pivot.x, ROLL.pivot.z);
  // which way round the axis tips the deck toward the downhill side
  _up.set(0, 1, 0).applyAxisAngle(ROLL.axis, 0.1);
  ROLL.sign = _up.dot(ROLL.dir) > 0 ? 1 : -1;
  rover.updateMatrix(); ROLL.m0.copy(rover.matrix); rover.matrixAutoUpdate = false;
  buzz([40, 30, 80]);
  hud();
}
function stepRollover(dt) {
  ROLL.t += dt;
  const k = Math.min(1, ROLL.t / 1.35);
  let a = ROLL.total * k * k;                                           // falling: slow, then all at once
  if (k >= 1) a = ROLL.total + Math.sin(Math.min(1, (ROLL.t - 1.35) / 0.5) * Math.PI) * 0.06 * Math.exp(-(ROLL.t - 1.35) * 3);
  _mr.makeRotationAxis(ROLL.axis, a * ROLL.sign);
  _m.makeTranslation(ROLL.pivot.x, ROLL.pivot.y, ROLL.pivot.z).multiply(_mr)
    .multiply(new THREE.Matrix4().makeTranslation(-ROLL.pivot.x, -ROLL.pivot.y, -ROLL.pivot.z)).multiply(ROLL.m0);
  rover.matrix.copy(_m); rover.matrixWorldNeedsUpdate = true;
  if (k >= 1 && !ROLL.dust) {
    ROLL.dust = true; buzz(220);
    for (let i = 0; i < 26; i++) puff(ROLL.pivot.x + ROLL.dir.x * 1.2 + (Math.random() - .5) * 3, ROLL.pivot.y + 0.1, ROLL.pivot.z + ROLL.dir.z * 1.2 + (Math.random() - .5) * 3, 2.2, 0.9);
  }
  if (ROLL.t > 2.4 && !ROLL.shown) {
    ROLL.shown = true;
    $('roll-why').textContent = ROLL.why;
    $('rollsheet').classList.add('on');
  }
}
function recoverRover() {
  $('rollsheet').classList.remove('on');
  rover.matrixAutoUpdate = true; ROLL.dust = false;
  const s = ATT.safe || { x: CFG.start.x, z: CFG.start.z, yaw: 0 };
  const r = S.rover;
  r.pos.set(s.x, height(s.x, s.z), s.z); r.yaw = s.yaw; r.speed = 0; slideV.set(0, 0);
  ATT.tipT = 0; gReady = false; camInit = false; tracks.cut();
  S.phase = 'drive'; hud();
  toast('Recovered to the last stable stop. In the real mission, that rollover would have ended it.');
}

/* ── tilt instrument ──────────────────────────────────────────── */
const attCv = document.getElementById('attitude'), attG = attCv ? attCv.getContext('2d') : null;
function drawAttitude() {
  if (!attG) return;
  const W = attCv.width, H = attCv.height, c = attG, u = W / 160;
  c.clearRect(0, 0, W, H);
  const zone = (v, lim) => Math.abs(v) >= lim * 0.92 ? '#E0583A' : Math.abs(v) >= MOB.warn ? '#E0A040' : '#F2E4BE';
  const dial = (cx, label, ang, limA, limB, side) => {
    const R = 30 * u, cy = 40 * u;
    c.save(); c.translate(cx, cy);
    c.strokeStyle = 'rgba(242,228,190,.18)'; c.lineWidth = 1 * u;
    c.beginPath(); c.arc(0, 0, R, 0, 6.2832); c.stroke();
    c.beginPath(); c.moveTo(-R, 0); c.lineTo(R, 0); c.stroke();           // horizon
    // the limits, marked where the rover's "up" would point at them
    const tick = (a, col, w) => { c.strokeStyle = col; c.lineWidth = w * u; c.beginPath(); c.arc(0, 0, R, -Math.PI / 2 + a - 0.05, -Math.PI / 2 + a + 0.05); c.stroke(); };
    c.strokeStyle = 'rgba(224,160,64,.55)'; c.lineWidth = 3 * u;
    c.beginPath(); c.arc(0, 0, R, -Math.PI / 2 + MOB.warn, -Math.PI / 2 + limA); c.stroke();
    c.beginPath(); c.arc(0, 0, R, -Math.PI / 2 - limB, -Math.PI / 2 - MOB.warn); c.stroke();
    tick(limA, '#E0583A', 4); tick(-limB, '#E0583A', 4);
    // the rover, seen from behind or from the side
    c.rotate(ang);
    const col = zone(ang, ang > 0 ? limA : limB);
    c.fillStyle = col; c.strokeStyle = col; c.lineWidth = 1.4 * u;
    if (side) {
      c.fillRect(-13 * u, -11 * u, 26 * u, 6 * u);                          // deck
      c.fillRect(7 * u, -19 * u, 2.2 * u, 9 * u); c.fillRect(5 * u, -21 * u, 6 * u, 3 * u);   // mast, at the front (right)
      for (const x of [-11, 0, 11]) { c.beginPath(); c.arc(x * u, 0, 3.6 * u, 0, 6.2832); c.stroke(); }
    } else {
      c.fillRect(-10 * u, -11 * u, 20 * u, 7 * u);
      c.fillRect(-14 * u, -3 * u, 4 * u, 6 * u); c.fillRect(10 * u, -3 * u, 4 * u, 6 * u);   // wheels
    }
    c.beginPath(); c.arc(0, -7 * u, 1.6 * u, 0, 6.2832); c.fillStyle = '#0d0a18'; c.fill();    // centre of mass
    c.restore();
    c.fillStyle = col; c.font = `600 ${9 * u}px Inter, system-ui, sans-serif`; c.textAlign = 'center';
    c.fillText(`${label} ${Math.round(Math.abs(ang) * 57.3)}°`, cx, 84 * u);
  };
  // roll: + is right side down, drawn as a clockwise turn seen from behind
  dial(40 * u, 'ROLL', ATT.effRoll, MOB.tipSide, MOB.tipSide, false);
  // pitch: nose to the right, so nose up is an anticlockwise turn
  dial(120 * u, 'PITCH', -ATT.effPitch, MOB.tipFwd, MOB.tipBack, true);
}

/* within 30 m you have seen it for yourself */
function discover() {
  seeArea(S.rover.pos.x, S.rover.pos.z, 40);
  for (const o of S.outcrops) {
    if (o.found) continue;
    if (S.rover.pos.distanceTo(o.pos) < 30) reveal(o, true);
  }
}

function reveal(o, self) {
  if (o.found) return;
  o.found = true;
  o.ring.visible = true;
  if (self) toast(`Outcrop in view — ${o.name.toLowerCase()} candidate.`);
  hud();
}

/* ── Ingenuity ────────────────────────────────────────────────── */
/* It waits on the ground. Ask for a recon and it spins up, flies to the
   point ahead of the rover, images it, then picks itself a flat, clear
   patch nearby and sets down there — a new airfield — until next time. */
const ease = t => t * t * (3 - 2 * t);
const UP = new THREE.Vector3(0, 1, 0);
const qLevel = new THREE.Quaternion(), qLand = new THREE.Quaternion(), qYaw = new THREE.Quaternion();
const heliPrev = new THREE.Vector3();

function landedQuat(x, z, yaw, out) {
  qYaw.setFromAxisAngle(UP, yaw);
  return out.setFromUnitVectors(UP, normalAt(x, z, 0.6)).multiply(qYaw);    // feet flat on the slope
}

function setDown(x, z, yaw) {
  heli.position.set(x, height(x, z) + 0.01, z);
  landedQuat(x, z, yaw, heli.quaternion);
}

function launchHeli() {
  const h = S.heli;
  if (S.phase !== 'drive' || h.phase !== 'landed') return;
  if (S.flights <= 0) { toast('Ingenuity is out of charge for today.'); return; }

  S.phase = 'fly';
  S.flights--;
  S.rover.speed = 0;

  const ahead = S.rover.pos.clone().addScaledVector(fwdV, CFG.scoutRange);
  const d = Math.hypot(ahead.x, ahead.z);
  if (d > PLAY_R - 14) { ahead.x *= (PLAY_R - 14) / d; ahead.z *= (PLAY_R - 14) / d; }

  // decide now where it will put down afterwards
  h.site = findLanding(ahead.x, ahead.z, [
    ...S.outcrops.map(o => ({ x: o.pos.x, z: o.pos.z, r: 11 })),
    { x: S.rover.pos.x, z: S.rover.pos.z, r: 7 },
  ]);

  h.at = ahead;
  h.phase = 'spinup';
  h.t = 0;
  h.from.copy(heli.position);
  h.to.set(ahead.x, height(ahead.x, ahead.z) + CFG.heliAlt, ahead.z);
  h.head = heliYawNow();
  h.yaw = Math.atan2(h.to.x - h.from.x, h.to.z - h.from.z) + Math.PI;
  S.cam = 'heli';
  hud();
  toast('Ingenuity spinning up — imaging the ground ahead.');
}

/* A flight leg is one smooth curve: a quadratic arc in height over a straight ground track,
   timed with smootherstep so it starts and stops with zero speed. The arc's peak clears the
   highest ground under the track, so it holds a steady altitude over bumps instead of
   tracing them. Attitude follows the motion through damped springs: it tips into the
   acceleration, banks into turns, and settles level as it slows. */
const smoother = t => t * t * t * (t * (t * 6 - 15) + 10);
const _hp = new THREE.Vector3(), _hv = new THREE.Vector3(), _ha = new THREE.Vector3();
function heliYawNow() { return new THREE.Euler().setFromQuaternion(heli.quaternion, 'YXZ').y; }
function planLeg(h, from, to, clear) {
  h.from.copy(from); h.to.copy(to);
  let top = Math.max(from.y, to.y);
  for (let i = 1; i < 24; i++) {                        // highest ground under the track
    const u = i / 24, x = from.x + (to.x - from.x) * u, z = from.z + (to.z - from.z) * u;
    top = Math.max(top, height(x, z) + clear);
  }
  h.ctrl.set((from.x + to.x) / 2, 2 * top - (from.y + to.y) / 2, (from.z + to.z) / 2);   // arc peaks at `top`
  const dist = Math.hypot(to.x - from.x, to.z - from.z);
  h.dur = Math.max(2.4, Math.min(10, dist / HELI.cruise * 1.6 + 0.8));
}
function legAt(h, k, out) {          // position on the leg; k is raw time fraction
  const s = smoother(k), a = 1 - s;
  out.set(h.from.x + (h.to.x - h.from.x) * s,
          a * a * h.from.y + 2 * a * s * h.ctrl.y + s * s * h.to.y,
          h.from.z + (h.to.z - h.from.z) * s);
  return out;
}
const wrapA = a => Math.atan2(Math.sin(a), Math.cos(a));
function heliAttitude(h, dt, accFwd, accSide, wobble) {
  // damped springs: critically damped-ish, so no snap and no long overshoot
  const spring = (x, v, target, w) => { const a = w * w * (target - x) - 2 * 0.8 * w * v; v += a * dt; return [x + v * dt, v]; };
  const tPitch = THREE.MathUtils.clamp(-accFwd * 0.06, -0.26, 0.26);
  const tRoll = THREE.MathUtils.clamp(-accSide * 0.07, -0.3, 0.3);
  [h.pitch, h.pv] = spring(h.pitch, h.pv, tPitch, 4.5);
  [h.roll, h.rv] = spring(h.roll, h.rv, tRoll, 4.5);
  h.head += wrapA(h.yaw - h.head) * Math.min(1, dt * 1.8);        // turn the nose round gently
  heli.rotation.set(h.pitch + wobble * 0.02 * Math.sin(h.t * 2.3), h.head, h.roll + wobble * 0.025 * Math.sin(h.t * 1.7 + 1));
}

function stepHeli(dt) {
  const h = S.heli;
  const flying = h.phase !== 'landed' && h.phase !== 'spindown';
  h.spin += ((flying ? 1 : 0) - h.spin) * Math.min(1, dt * (flying ? 3.5 : 2.2));
  if (h.spin > 0.004) rotors.forEach(([o, d]) => o.rotateX(d * HELI.rotor * h.spin * dt));
  if (h.phase === 'landed') return;

  h.t += dt;
  heliPrev.copy(heli.position);
  const wash = (x, z, n) => { if (Math.random() < n) puff(x + (Math.random() - .5) * 1.6, height(x, z) + 0.08, z + (Math.random() - .5) * 1.6, 1.5, 0.35); };
  // velocity and acceleration in the craft's own frame, for the attitude springs
  const motion = () => {
    _hv.subVectors(heli.position, heliPrev).divideScalar(Math.max(dt, 1e-3));
    _ha.subVectors(_hv, h.vel).divideScalar(Math.max(dt, 1e-3));
    h.vel.lerp(_hv, Math.min(1, dt * 10));
    const fx = -Math.sin(h.head), fz = -Math.cos(h.head);          // nose direction (model faces -z at yaw 0 + π)
    return [_ha.x * fx + _ha.z * fz + (h.vel.x * fx + h.vel.z * fz) * 0.35,   // tilt into accel, plus a little for drag
            _ha.x * -fz + _ha.z * fx];
  };

  if (h.phase === 'spinup') {
    wash(h.from.x, h.from.z, 0.25 * h.spin);
    h.head = heliYawNow();
    if (h.t >= HELI.spin) { h.phase = 'takeoff'; h.t = 0; h.pitch = h.roll = h.pv = h.rv = 0; h.vel.set(0, 0, 0); }

  } else if (h.phase === 'takeoff') {
    // straight up off the pad, easing to a hover, nose already swinging toward the target
    const k = Math.min(1, h.t / HELI.lift);
    heli.position.set(h.from.x, h.from.y + HELI.hover * smoother(k), h.from.z);
    heliAttitude(h, dt, 0, 0, k);
    wash(h.from.x, h.from.z, 0.6 * (1 - k));
    if (k >= 1) {
      h.phase = 'out'; h.t = 0;
      planLeg(h, heli.position.clone(), h.to.clone(), CFG.heliAlt);
    }

  } else if (h.phase === 'out' || h.phase === 'hop') {
    const k = Math.min(1, h.t / h.dur);
    legAt(h, k, heli.position);
    const g = height(heli.position.x, heli.position.z) + 2.5;        // last-ditch clearance, rarely touched
    if (heli.position.y < g) heli.position.y += (g - heli.position.y) * Math.min(1, dt * 6);
    const [af, as] = motion();
    heliAttitude(h, dt, af, as, 1);
    if (k >= 1) {
      if (h.phase === 'out') { h.phase = 'scan'; h.t = 0; h.hoverY = heli.position.y; doScan(); }
      else { h.phase = 'land'; h.t = 0; h.from.copy(heli.position); landedQuat(h.site.x, h.site.z, h.yaw, qLand); }
    }

  } else if (h.phase === 'scan') {
    const k = Math.min(1, h.t / HELI.scan);
    pulseMat.opacity = 0.5 * (1 - k);
    pulse.scale.setScalar((0.9 + k * CFG.scoutReveal) / 1.15);
    pulse.position.set(h.at.x, height(h.at.x, h.at.z) + 0.2, h.at.z);
    // hold station: a slow bob and a gentle look left and right
    const fade = Math.sin(Math.PI * k);
    heli.position.y = h.hoverY + Math.sin(h.t * 1.6) * 0.22 * fade;
    h.yaw = h.yawScan ?? (h.yawScan = h.yaw);
    h.yaw = h.yawScan + Math.sin(k * Math.PI * 2) * 0.45;
    const [af, as] = motion();
    heliAttitude(h, dt, af, as, 1);
    if (k >= 1) {
      pulseMat.opacity = 0;
      h.yawScan = undefined;
      h.phase = 'hop'; h.t = 0;
      const dest = new THREE.Vector3(h.site.x, height(h.site.x, h.site.z) + HELI.hover, h.site.z);
      if (Math.hypot(dest.x - heli.position.x, dest.z - heli.position.z) > 0.5) h.yaw = Math.atan2(dest.x - heli.position.x, dest.z - heli.position.z) + Math.PI;
      planLeg(h, heli.position.clone(), dest, CFG.heliAlt * 0.7);
    }

  } else if (h.phase === 'land') {
    // a slow, eased settle: fastest mid-way, feather-light at touchdown
    const k = Math.min(1, h.t / (HELI.lift * 1.2));
    const ground = height(h.site.x, h.site.z) + 0.01;
    heli.position.set(h.site.x, h.from.y + (ground - h.from.y) * smoother(k), h.site.z);
    if (k < 0.75) { const [af, as] = motion(); heliAttitude(h, dt, af, as, 1 - k); }
    else heli.quaternion.slerp(qLand, Math.min(1, dt * 5));
    wash(h.site.x, h.site.z, 0.7 * k);
    if (k >= 1) {
      setDown(h.site.x, h.site.z, h.yaw);
      h.phase = 'spindown'; h.t = 0;
      S.phase = 'drive';
      S.cam = 'chase';
      const away = Math.round(Math.hypot(h.site.x - S.rover.pos.x, h.site.z - S.rover.pos.z));
      toastSoon(`Ingenuity is down ${away} m out, waiting for the next recon.`);
      hud();
    }

  } else if (h.phase === 'spindown') {
    if (h.spin < 0.02) { h.phase = 'landed'; hud(); }
  }
}

let scanNote = '';
function doScan() {
  let n = 0;
  for (const o of S.outcrops) {
    if (o.found) continue;
    if (Math.hypot(o.pos.x - S.heli.at.x, o.pos.z - S.heli.at.z) <= CFG.scoutReveal) { reveal(o, false); n++; }
  }
  // what it saw goes on the map; and further out, at the edge of its images, it may
  // glimpse something layered without being sure — a clue, drawn as a dashed circle
  seeArea(S.heli.at.x, S.heli.at.z, CFG.scoutReveal);
  let hints = 0;
  for (const o of S.outcrops) {
    if (o.found || MAP.clues.some(c => c.o === o)) continue;
    const d = Math.hypot(o.pos.x - S.heli.at.x, o.pos.z - S.heli.at.z);
    if (d <= CFG.scoutReveal * 2.3) {
      const a = Math.random() * 6.283, r = 6 + Math.random() * 10;
      MAP.clues.push({ o, x: o.pos.x + Math.cos(a) * r, z: o.pos.z + Math.sin(a) * r, r: 22 });
      hints++;
    }
  }
  scanNote = n ? `Ingenuity found ${n} outcrop${n > 1 ? 's' : ''} — marked on the ground.`
               : hints ? `Nothing close, but Ingenuity glimpsed layering further out — ${hints} clue${hints > 1 ? 's' : ''} on the map${kb('M')}.`
               : 'Nothing layered in frame. Try a different heading.';
  toast(scanNote);
}

/* ── Mastcam-Z ────────────────────────────────────────────────── */
function openCam() {
  if (S.phase !== 'drive') return;
  const near = S.outcrops.filter(o => !o.logged && S.rover.pos.distanceTo(o.pos) < CFG.camRange);
  if (!near.length) { toast('Nothing in Mastcam range — drive closer to an outcrop.'); return; }
  S.phase = 'cam';
  S.rover.speed = 0;

  // pre-aim at the closest target, so opening the camera lands you near it
  const r = S.rover;
  const t = near.reduce((a, b) => r.pos.distanceTo(a.pos) < r.pos.distanceTo(b.pos) ? a : b);
  const eye = new THREE.Vector3(r.pos.x, r.pos.y + 2.3, r.pos.z).addScaledVector(fwdV, 0.75);
  // aim at the face turned toward the rover, not the middle of the rock
  const toR = r.pos.clone().sub(t.focus).setY(0).normalize();
  const face = t.focus.clone().addScaledVector(toR, Math.min(t.wid || 2, r.pos.distanceTo(t.focus) - 4) * 0.8);
  face.y = height(face.x, face.z) + (t.top || 1) * 0.45;
  const d = face.sub(eye);
  let dy = Math.atan2(-d.x, -d.z) - r.yaw;
  dy = Math.atan2(Math.sin(dy), Math.cos(dy));           // wrap to [-pi, pi]
  S.camYaw = Math.max(-0.9, Math.min(0.9, dy));
  S.camPitch = Math.max(-0.28, Math.min(0.3, Math.asin(d.y / d.length())));
  /* The hero sequence, in beats:
       1 the mast swings up off the deck      (first time only)
       2 the head turns to face the outcrop   — camera over the mast's shoulder
       3 the camera flies into the lens       — and you are looking through Mastcam-Z
     Then you frame and shoot (step 3 of 4), and SuperCam fires (step 4). */
  CIN.t = 0; CIN.target = t; CIN.raise = !MAST.up;
  CIN.b1 = CIN.raise ? 3.2 : 0;                  // end of beat 1
  CIN.b2 = CIN.b1 + 2.4;                         // end of beat 2
  CIN.dur = CIN.b2 + 1.1;                        // end of beat 3
  CIN.beat = 0;
  MAST.panWant = 0;
  if (CIN.raise) { MAST.raising = true; MAST.t = 0; }
  S.phase = 'cine';
  cinema(true);
  hud();
}
const CIN = { t: 0, dur: 2, target: null };
function endCine() {
  S.phase = 'cam';
  MAST.panWant = S.camYaw;
  if (MAST.raising) { MAST.raising = false; MAST.t = 1; setMast(1); MAST.up = true; }
  if (roverModel) roverModel.visible = false;     // you are looking out of the camera now
  document.body.classList.add('camview');
  cinema(false);
  irisIn();
  beat(3, 'Frame the target', TOUCH ? 'You are looking through Mastcam-Z. Drag to aim, centre the layers, then tap Capture.' : 'You are looking through Mastcam-Z. Drag or use the drive keys to aim, centre the layers, then press C or Space.');
  setTimeout(() => { if (S.phase === 'cam') clearBeat(); }, 3200);
  hud();
}

/* letterbox, step captions, iris and shutter: the language of the sequence */
function cinema(on) { document.body.classList.toggle('cinema', on); if (!on) $('beat').classList.remove('on'); }
let beatKey = '';
function beat(step, title, sub, stay = false) {
  const k = step + title + sub;
  if (k === beatKey) return; beatKey = k;
  const el = $('beat');
  $('beat-step').textContent = `Step ${step} of 4`;
  $('beat-title').textContent = title;
  $('beat-sub').textContent = sub;
  el.classList.toggle('stay', stay);
  el.classList.remove('on'); void el.offsetWidth; el.classList.add('on');
}
function clearBeat() { $('beat').classList.remove('on'); beatKey = ''; }
function irisIn() { $('iris').animate([{ opacity: 1 }, { opacity: 0 }], { duration: 420, easing: 'ease-out' }); }
function shutter() {
  $('shutter').animate([{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)', offset: 0.45 }, { transform: 'scaleY(1)', offset: 0.6 }, { transform: 'scaleY(0)' }],
    { duration: 380, easing: 'ease-in-out' });
}
function stepBeats() {
  if (S.phase === 'cine') {
    const t = CIN.t;
    if (CIN.raise && t < CIN.b1) beat(1, 'Deploying the Remote Sensing Mast', 'The 2 m mast swings up off the deck. Mastcam-Z and SuperCam ride on top.');
    else if (t < CIN.b2) beat(2, 'Mastcam-Z turns to the target', `The head pans toward the outcrop, ${Math.round(S.rover.pos.distanceTo(CIN.target.focus))} m away.`);
    else beat(2, 'Into the camera', 'Two zoom cameras, 26 to 110 mm, 2 m above the ground: a geologist\'s eye height.');
  }
}

function closeCam() {
  if (roverModel) roverModel.visible = true;
  S.phase = 'drive';
  S.framed = null;
  document.body.classList.remove('camview');
  $('reticle').classList.remove('on');
  clearBeat();
  hud();
}

function capture() {
  if (S.phase !== 'cam') return;
  if (!S.framed) { toast('Nothing centred in the frame.'); return; }
  const o = S.framed;
  o.logged = true;
  S.logged++;
  o.ringMat.color.setHex(GREEN);
  // the shot: shutter, a held frame with its stamp, then out to watch SuperCam fire
  shutter();
  $('flash').animate([{ opacity: 0.55 }, { opacity: 0 }], { duration: 420, fill: 'none', easing: 'ease-out' });
  $('stamp').textContent = `Image acquired · ${o.name}`;
  $('stamp').animate([{ opacity: 0, transform: 'translate(-50%,-50%) scale(1.15)' }, { opacity: 1, transform: 'translate(-50%,-50%) scale(1)', offset: 0.15 }, { opacity: 1, offset: 0.8 }, { opacity: 0 }],
    { duration: 1300, easing: 'ease-out' });
  LASER.t = -1.1; LASER.on = true; LASER.target = o; LASER.n = 0;        // hold on the frame for a beat first
  S.phase = 'laser';
  $('reticle').classList.remove('on');
  hud();
}
/* SuperCam's laser is infrared (1,064 nm) and invisible; the beam is drawn so you can
   see where it goes. The spark at the rock is real: each pulse turns a pinhead of rock
   into glowing plasma, and SuperCam reads the light to tell what it is made of. */
const LASER = { t: 0, on: false, target: null };
const beam = (() => {
  const g = new THREE.CylinderGeometry(0.03, 0.03, 1, 8, 1, true);   // drawn far thicker than the real beam, so you can follow it
  g.translate(0, 0.5, 0); g.rotateX(Math.PI / 2);                     // runs from its origin along +z, so lookAt and a z scale lay it from the mast to the rock
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0xff4a3a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  m.frustumCulled = false; m.visible = false; scene.add(m);
  const glow = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'), gr = x.createRadialGradient(32, 32, 0, 32, 32, 32);      // a soft round spark, not a square
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0xffe2b0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sp.scale.setScalar(0.5); sp.visible = false; scene.add(sp);
  const lt = new THREE.PointLight(0xffc890, 0, 6); scene.add(lt);
  return { m, sp, lt };
})();
const LASER_END = 6.0;
function stepLaser(dt) {
  if (!LASER.on) return;
  const was = LASER.t;
  LASER.t += dt;
  if (was < 0 && LASER.t >= 0) {                      // cut from the camera view to the wide shot
    if (roverModel) roverModel.visible = true;
    document.body.classList.remove('camview');
    cinema(true); irisIn();
  }
  if (LASER.t < 0) return;
  const dist = Math.round(S.rover.pos.distanceTo(LASER.target.focus));
  if (LASER.t < 3.0) beat(4, 'SuperCam fires', `Pulse ${Math.min(30, Math.max(0, Math.floor((LASER.t - 0.6) / 2.2 * 30)))} of 30 · infrared laser, ${dist} m. Each pulse turns a pinhead of rock into glowing plasma.`);
  else beat(4, 'Reading the spark', 'A spectrometer splits the plasma\'s light. Its lines say which elements the rock is made of.');
  const o = LASER.target, from = MAST.head ? MAST.head.getWorldPosition(new THREE.Vector3()) : S.rover.pos.clone().add(new THREE.Vector3(0, 2.2, 0));
  const to = o.focus.clone();
  const pulse = LASER.t > 0.6 && LASER.t < 2.8 ? (Math.sin(LASER.t * 85) > 0.2 ? 1 : 0) : 0;
  beam.m.visible = beam.sp.visible = LASER.t < 2.9;
  beam.m.position.copy(from); beam.m.lookAt(to); beam.m.scale.set(1, 1, from.distanceTo(to));
  beam.m.material.opacity = pulse * 0.8;
  beam.sp.position.copy(to); beam.sp.material.opacity = pulse; beam.sp.scale.setScalar(0.5 + Math.random() * 0.6);
  beam.lt.position.copy(to); beam.lt.intensity = pulse * 4;
  if (pulse && Math.random() < 0.3) puff(to.x, to.y, to.z, 0.15, 0.4);
  if (LASER.t > LASER_END) {
    LASER.on = false; beam.m.visible = beam.sp.visible = false; beam.lt.intensity = 0;
    S.phase = 'drive'; S.framed = null; cinema(false); clearBeat(); hud();
    showCard(o);
  }
}

/* The discovery card: what the game's camera read, then the real photograph.
   Image sources are tried in order — a local copy, NASA's copy — and if
   neither loads (some hosts block outside images) the link still stands. */
function showCard(o) {
  const r = o.real;
  $('card-name').textContent = o.name;
  $('card-read').textContent = o.read;
  $('card-mean').textContent = o.mean;
  $('card-n').textContent = `Outcrop ${S.logged} of ${S.outcrops.length}`;
  $('real-place').textContent = r.place;
  $('real-by').textContent = r.by;
  $('real-note').textContent = r.note;
  $('real-credit').textContent = `Image: ${r.credit} · ${r.id}`;
  $('real-link').href = r.page;

  const img = $('real-img'), fig = $('real-fig');
  const tries = [`photos/${r.id}.jpg`, `${NASA}${r.id}.jpg`];
  fig.classList.remove('none'); fig.classList.add('wait');
  img.onload = () => {
    fig.classList.remove('wait');
    // frame the photograph at its own shape, within reason, so a tall one is not cut to a strip
    fig.style.aspectRatio = String(Math.max(0.85, Math.min(2.3, img.naturalWidth / img.naturalHeight)));
  };
  fig.style.aspectRatio = '';
  img.onerror = () => { if (tries.length) img.src = tries.shift(); else { fig.classList.remove('wait'); fig.classList.add('none'); } };
  img.alt = `${r.place}: ${o.name.toLowerCase()}, photographed by ${r.by.split(' · ')[0]}`;
  img.src = tries.shift();
  $('card').classList.add('on');
  $('card').querySelector('.card').scrollTop = 0;
}

$('card-ok').addEventListener('click', () => {
  $('card').classList.remove('on');
  if (SITE) { if (S.logged >= S.outcrops.length) toast('Outcrop logged. Carry on along the route to the end of the drive, the gold beacon.'); }
  else if (S.logged >= S.outcrops.length) done();
});

function done() {
  S.phase = 'done';
  if (SITE) { $('done-h1').textContent = 'Drive complete'; $('done-h2').textContent = `Level ${SITE.level} · ${SITE.year} · ${SITE.title}`;
    $('done-p').textContent = `You followed Perseverance’s ${SITE.year} route, read the rocks on the way, and reached the end of the drive.${SITE.next ? ' The next level picks up the following year.' : ' More years are on the way.'}`; $('done-p2').style.display = 'none';
    if (SITE.next) $('btn-again').textContent = 'Next level'; $('done').classList.add('on'); return; }
  $('done-n').textContent = S.outcrops.length;
  $('btn-again').textContent = 'Next level · 2022';      // the landing site in 2021 leads on to the year levels
  $('done').classList.add('on');
}

/* which target, if any, is centred in the Mastcam frame */
const camFwd = new THREE.Vector3(), toT = new THREE.Vector3();
function updateFraming() {
  camera.updateMatrixWorld();
  camera.getWorldDirection(camFwd);
  let best = null, bestA = Infinity;
  for (const o of S.outcrops) {
    if (o.logged) continue;
    const dist = S.rover.pos.distanceTo(o.pos);
    if (dist > CFG.camRange + 8) continue;
    toT.subVectors(o.focus, camera.position).normalize();
    const a = Math.acos(Math.min(1, camFwd.dot(toT))) * 180 / Math.PI;
    if (a < CFG.framedDeg && a < bestA) { best = o; bestA = a; }
  }
  if (best !== S.framed) { S.framed = best; hud(); }
  S.framed = best;
  const ret = $('reticle');
  ret.classList.toggle('on', !!best);
  if (best) {
    $('ret-name').textContent = 'LAYERED TARGET';
    $('ret-dist').textContent = Math.round(S.rover.pos.distanceTo(best.pos)) + ' m';
    if (!best.found) reveal(best, false);
  }
}

/* ── camera ───────────────────────────────────────────────────── */
const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3();
let camInit = false;

let dbgCam = null;
function stepCamera(dt) {
  const r = S.rover;
  if (dbgCam) {
    camera.position.set(dbgCam[0], dbgCam[1], dbgCam[2]);
    camera.lookAt(dbgCam[3], dbgCam[4], dbgCam[5]);
    sky.position.copy(camera.position);
    aimSun(r);
    return;
  }

  if (S.phase === 'cine' || (S.phase === 'laser' && LASER.t >= 0)) {
    const side = new THREE.Vector3(Math.cos(r.yaw), 0, -Math.sin(r.yaw));
    const head = MAST.head ? MAST.head.getWorldPosition(new THREE.Vector3()) : r.pos.clone().add(new THREE.Vector3(0, 2.2, 0));
    const ez = x => x * x * (3 - 2 * x), cl = x => Math.min(1, Math.max(0, x));
    let p, tg, fov = 40, follow = 3;
    if (S.phase === 'cine') {
      CIN.t = Math.min(CIN.dur, CIN.t + dt);
      const t = CIN.t, to = CIN.target.focus;
      const toT = to.clone().sub(head).setY(0).normalize(), sd = new THREE.Vector3(-toT.z, 0, toT.x);
      if (CIN.raise && t < CIN.b1) {
        // beat 1: low at the front quarter, a slow arc, eyes on the mast as it swings up
        const k = ez(t / CIN.b1);
        const a = 0.85 - k * 0.55;
        p = r.pos.clone().addScaledVector(fwdV, 3.3).addScaledVector(side, Math.sin(a) * 3.1).add(new THREE.Vector3(0, 0.6 + k * 0.4, 0));
        tg = r.pos.clone().add(new THREE.Vector3(0, 1.0, 0)).lerp(head, 0.35 + 0.65 * k);
        fov = 42; follow = 2.5;
      } else if (t < CIN.b2) {
        // beat 2: over the mast's shoulder; the head turns, the outcrop sits beyond it
        const k = ez(cl((t - CIN.b1) / (CIN.b2 - CIN.b1)));
        MAST.panWant = S.camYaw * cl((t - CIN.b1) / 1.2);
        p = head.clone().addScaledVector(toT, -3.4 + k * 0.9).addScaledVector(sd, 1.6 - k * 0.6).add(new THREE.Vector3(0, 0.75 - k * 0.3, 0));
        tg = head.clone().lerp(to, 0.45 + 0.35 * k);
        fov = 40 - k * 6; follow = 2.2;
      } else {
        // beat 3: fly into the lens
        const k = ez(cl((t - CIN.b2) / (CIN.dur - CIN.b2)));
        MAST.panWant = S.camYaw;
        const eye = head.clone(); eye.y = Math.max(eye.y, r.pos.y + 2.1);
        const yaw = r.yaw + S.camYaw;
        const dir = new THREE.Vector3(-Math.sin(yaw), Math.sin(S.camPitch), -Math.cos(yaw)).normalize();
        p = eye.clone().addScaledVector(dir, -1.1 * (1 - k)).add(new THREE.Vector3(0, 0.3 * (1 - k), 0));
        tg = eye.clone().addScaledVector(dir, 20);
        fov = 32 + (CFG.camFOVzoom - 32) * k; follow = 5;
        if (k > 0.82 && roverModel) roverModel.visible = false;     // through the glass
      }
      stepBeats();
      if (CIN.t >= CIN.dur && !MAST.raising) endCine();
    } else {
      // beat 4: over the shoulder of the mast, rock in frame, beam crossing the shot; then pull out wide
      const to = LASER.target.focus, k = cl((LASER.t - 2.9) / 1.7);
      const toT = to.clone().sub(head).setY(0).normalize(), sd = new THREE.Vector3(-toT.z, 0, toT.x);
      const near = head.clone().addScaledVector(toT, -2.6).addScaledVector(sd, 1.5).add(new THREE.Vector3(0, 0.7, 0));
      const mid = head.clone().lerp(to, 0.5);
      const wide = mid.clone().addScaledVector(sd, 10 + head.distanceTo(to) * 0.55).add(new THREE.Vector3(0, 5, 0));
      p = near.lerp(wide, ez(k));
      tg = head.clone().lerp(to, 0.42).lerp(mid.clone().add(new THREE.Vector3(0, -0.4, 0)), ez(k));
      fov = 34 + 12 * ez(k); follow = 2.2;
    }
    p.y = Math.max(p.y, height(p.x, p.z) + 0.35);
    camera.fov += (fov - camera.fov) * Math.min(1, dt * 4);
    camera.updateProjectionMatrix();
    camPos.lerp(p, Math.min(1, dt * follow)); camTgt.lerp(tg, Math.min(1, dt * (follow + 1.5)));
    if (S.phase === 'cine' && CIN.t < 0.05) { camPos.copy(p); camTgt.copy(tg); }
    if (S.phase === 'laser' && LASER.t < 0.05) { camPos.copy(p); camTgt.copy(tg); }
    camera.position.copy(camPos); camera.lookAt(camTgt);
    sky.position.copy(camera.position);
    aimSun(r);
    return;
  }

  if (S.phase === 'cam' || (S.phase === 'laser' && LASER.t < 0)) {
    MAST.panWant = S.camYaw;
    // look down the mast: narrow field, pan and tilt with the drive keys
    if (S.phase === 'cam') S.camYaw += axT() * 0.7 * dt;
    S.camPitch = Math.max(-0.28, Math.min(0.3, S.camPitch + axF() * 0.5 * dt));
    S.camYaw = Math.max(-0.9, Math.min(0.9, S.camYaw));

    const yaw = r.yaw + S.camYaw;
    const eye = MAST.head ? MAST.head.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3(r.pos.x, r.pos.y + 2.3, r.pos.z).addScaledVector(fwdV, 0.75);
    eye.y = Math.max(eye.y, r.pos.y + 2.1);              // the real Mastcam-Z sits about 2 m above the ground
    const dir = new THREE.Vector3(-Math.sin(yaw), Math.sin(S.camPitch), -Math.cos(yaw)).normalize();
    camera.position.copy(eye);
    camera.lookAt(eye.clone().addScaledVector(dir, 40));

    camera.fov += (CFG.camFOVzoom - camera.fov) * Math.min(1, dt * 7);
    camera.updateProjectionMatrix();
    camPos.copy(camera.position); camTgt.copy(eye).addScaledVector(dir, 20);
    if (S.phase === 'cam') updateFraming();
    sky.position.copy(camera.position);
    aimSun(r);
    return;
  }

  if (camera.fov !== 52) {
    camera.fov += (52 - camera.fov) * Math.min(1, dt * 7);
    if (Math.abs(camera.fov - 52) < 0.05) camera.fov = 52;
    camera.updateProjectionMatrix();
  }

  let wantP, wantT, k = 3.2, kT = 0;
  if (S.cam === 'map') {
    wantP = new THREE.Vector3(r.pos.x, height(r.pos.x, r.pos.z) + 86, r.pos.z + 34);
    wantT = new THREE.Vector3(r.pos.x, r.pos.y, r.pos.z);
    k = 2.2;
  } else if (S.cam === 'heli' && heli) {
    const hp = heli.getWorldPosition(new THREE.Vector3());
    wantP = hp.clone().add(new THREE.Vector3(4.6, 2.4 + ORB.pitch * 5, 6.4).applyAxisAngle(UP, ORB.yaw).multiplyScalar(ORB.dist));      // close: it is only 1.2 m across
    wantT = hp.clone().add(new THREE.Vector3(0, 0.25, 0));
    k = 2.4; kT = 8;                       // keep the eye on it even when the camera body lags
  } else {
    // behind and above, swung round by any drag: a point on a sphere about the rover
    if (ORB.id === null) {
      ORB.idle += dt;
      if (ORB.idle > 1.2 && Math.abs(r.speed) > 1) {                  // driving again: drift back behind
        ORB.yaw = Math.atan2(Math.sin(ORB.yaw), Math.cos(ORB.yaw));
        const f = 1 - Math.exp(-dt * 1.4);
        ORB.yaw -= ORB.yaw * f; ORB.pitch -= ORB.pitch * f;
      }
    }
    const D = 10.9 * ORB.dist, el = Math.max(0.06, Math.min(1.35, 0.497 + ORB.pitch)), az = r.yaw + ORB.yaw;
    wantP = r.pos.clone().add(new THREE.Vector3(Math.sin(az) * Math.cos(el) * D, Math.sin(el) * D, Math.cos(az) * Math.cos(el) * D));
    const ahead = r.pos.clone().addScaledVector(fwdV, 8).add(new THREE.Vector3(0, 1.1, 0));
    const centre = r.pos.clone().add(new THREE.Vector3(0, 1.1, 0));
    wantT = ahead.lerp(centre, Math.min(1, Math.abs(Math.atan2(Math.sin(ORB.yaw), Math.cos(ORB.yaw))) * 1.6 + Math.abs(ORB.pitch) * 1.2));
    if (ORB.id !== null) k = 9;                                         // follow the finger, not lag behind it
  }

  // never let the chase camera sink into a hill
  wantP.y = Math.max(wantP.y, height(wantP.x, wantP.z) + 2.4);

  if (!camInit) { camPos.copy(wantP); camTgt.copy(wantT); camInit = true; }
  const t = 1 - Math.exp(-k * dt);
  camPos.lerp(wantP, t);
  camTgt.lerp(wantT, kT ? 1 - Math.exp(-kT * dt) : t);
  camera.position.copy(camPos);
  camera.lookAt(camTgt);
  sky.position.copy(camera.position);
  aimSun(r);
}

const sunOff = sun.position.clone();
function aimSun(r) {
  sun.target.position.set(r.pos.x, r.pos.y, r.pos.z);
  sun.position.copy(sun.target.position).add(sunOff);
}

/* ── screen markers for found-but-unlogged outcrops ───────────── */
const marks = S.outcrops.map(() => {
  const el = document.createElement('div');
  el.className = 'mark';
  el.innerHTML = '<i></i><b></b>';
  $('marks').appendChild(el);
  return el;
});

const heliMark = document.createElement('div');
heliMark.className = 'mark heli';
heliMark.innerHTML = '<i></i><b></b>';
$('marks').appendChild(heliMark);

const _p = new THREE.Vector3();
function stepMarks() {
  camera.updateMatrixWorld();

  // where the helicopter is parked, once it is far enough off to lose sight of
  let show = false;
  if (heli && S.heli.phase === 'landed' && (S.phase === 'drive' || S.phase === 'cam')) {
    const dist = heli.position.distanceTo(S.rover.pos);
    _p.copy(heli.position); _p.y += 0.9; _p.project(camera);
    const x = (_p.x * 0.5 + 0.5) * innerWidth, y = (-_p.y * 0.5 + 0.5) * innerHeight;
    if (dist > 14 && _p.z < 1 && x > -40 && x < innerWidth + 40 && y > -40 && y < innerHeight + 40) {
      show = true;
      heliMark.style.transform = `translate(${x}px,${y}px)`;
      heliMark.querySelector('b').textContent = 'Ingenuity ' + Math.round(dist) + ' m';
    }
  }
  heliMark.style.display = show ? 'block' : 'none';

  S.outcrops.forEach((o, i) => {
    const el = marks[i];
    if (!o.found || o.logged || S.phase === 'brief' || S.phase === 'done') { el.style.display = 'none'; return; }
    _p.copy(o.focus).project(camera);
    if (_p.z > 1) { el.style.display = 'none'; return; }
    const x = (_p.x * 0.5 + 0.5) * innerWidth;
    const y = (-_p.y * 0.5 + 0.5) * innerHeight;
    if (x < -60 || x > innerWidth + 60 || y < -60 || y > innerHeight + 60) { el.style.display = 'none'; return; }
    el.style.display = 'block';
    el.style.transform = `translate(${x}px,${y}px)`;
    el.querySelector('b').textContent = Math.round(S.rover.pos.distanceTo(o.pos)) + ' m';
  });
}

/* ── HUD ──────────────────────────────────────────────────────── */
let toastT = 0;
function toast(m) { $('toast').textContent = m; $('toast').classList.add('on'); toastT = 3.4; }
function toastSoon(m) { setTimeout(() => toast(m), 500); }

function hud() {
  $('logged').textContent = `${S.logged} / ${S.outcrops.length}`;
  $('flights').textContent = S.flights;

  let p = '';
  const kl = k => TOUCH ? '' : ` · ${k}`, cam = S.phase === 'cam';
  $('btn-heli').textContent = cam ? 'Back to driving' + kl('Esc') : 'Scout ahead' + kl('F');
  $('btn-cam').textContent = cam ? 'Capture' + kl('Space') : 'Mastcam-Z' + kl('C');
  $('btn-map').textContent = 'Map' + kl('M');
  if (S.phase === 'cam') p = TOUCH ? (S.framed ? 'Target centred — tap <b>Capture</b>' : 'Drag to aim · <b>Back to driving</b> to stow')
                                     : (S.framed ? 'Target centred — <b>Space</b> or <b>C</b> to capture' : 'Drag or use the drive keys to aim · <b>Esc</b> to stow');
  else if (S.phase === 'fly') p = 'Ingenuity in flight…';
  else if (S.phase === 'drive') {
    const near = S.outcrops.find(o => !o.logged && S.rover.pos.distanceTo(o.pos) < CFG.camRange);
    if (near) p = TOUCH ? 'Outcrop in Mastcam range — tap <b>Mastcam-Z</b>' : 'Outcrop in Mastcam range — press <b>C</b>';
  }
  $('prompt').innerHTML = p;
  $('prompt').classList.toggle('on', !!p);
}

/* ── loop ─────────────────────────────────────────────────────── */
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  adaptRes(dt);

  if (edl && edl.active) {                       // level 1 runs its own cameras and worlds
    edl.step(dt);
    stepDust(dt);
    if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('on'); }
    edl.render();
    requestAnimationFrame(frame);
    return;
  }

  update(dt, now);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
/* one step of the surface game, without drawing — the frame loop calls it, and so can tests */
function update(dt, now = performance.now()) {
  if (rover) stepRover(dt);
  if (heli) stepHeli(dt);
  if (MAST.mixer) stepMast(dt);
  stepLaser(dt);
  stepMap(dt);

  // discovery rings breathe until they are logged, and stay out of the photo
  const b = 0.5 + Math.sin(now * 0.004) * 0.25;
  for (const o of S.outcrops) {
    if (o.found && !o.logged) o.ringMat.opacity = b;
    o.ring.visible = o.found && S.phase !== 'cam' && S.phase !== 'cine' && S.phase !== 'laser';
  }

  stepDust(dt);
  stepCamera(dt);
  stepMarks();
  if (GOAL && S.phase === 'drive') {      // level 3: the end of the drive
    GOAL.beam.material.opacity = 0.22 + Math.sin(now * 0.003) * 0.08;
    const d = Math.hypot(S.rover.pos.x - SITE.end.x, S.rover.pos.z - SITE.end.z);
    if (d < 14) { if (S.logged >= S.outcrops.length) done(); else if (!GOAL.told) { GOAL.told = true; toast('This is the end of the drive. Image the outcrop half way along the route first.'); } }
    else if (d > 30) GOAL.told = false;
  }

  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('on'); }
  if ((frameN = (frameN + 1) % 10) === 0) hud();
}
let frameN = 0;

/* ── wiring ───────────────────────────────────────────────────── */
$('btn-cam').addEventListener('click', () => S.phase === 'cam' ? capture() : S.phase === 'cine' ? endCine() : openCam());
$('btn-heli').addEventListener('click', () => S.phase === 'cam' ? closeCam() : launchHeli());
$('btn-recover').addEventListener('click', recoverRover);
/* ── levels ───────────────────────────────────────────────────── */
let edl = null;

/* Level 2 begins wherever level 1 put the rover down — or on the target, if skipped. */
function startSurface(landed) {
  const x = landed ? landed.x : START.x, z = landed ? landed.z : START.z;
  rover.visible = true;
  S.rover.pos.set(x, height(x, z), z); S.rover.speed = 0;
  gReady = false; camInit = false; S.cam = 'chase'; tracks.cut();
  // Ingenuity rode down under the rover's belly; by now it has been set on the ground nearby
  const pad = findLanding(x + 7, z - 10, [{ x, z, r: 5 }]);
  S.heli.site = pad; S.heli.phase = 'landed';
  setDown(pad.x, pad.z, S.heli.yaw);
  heli.visible = true;
  S.phase = 'brief';
  hud();
  $('rover-brief').classList.add('on');
}
$('btn-drive').addEventListener('click', () => {
  $('rover-brief').classList.remove('on');
  S.phase = 'drive'; hud();
  stepMap(1);
  toast(SITE ? 'Follow the gold dashes: Perseverance’s real route. One outcrop half way, then the beacon. M opens the map.' : 'Six outcrops to find. Ingenuity is parked beside you. M opens the map.');
});

$('btn-start').addEventListener('click', () => { $('brief').classList.remove('on'); edl.brief(); });
$('btn-skip').addEventListener('click', () => { $('brief').classList.remove('on'); startSurface(null); });
document.querySelectorAll('[data-level]').forEach(b => b.addEventListener('click', () => { location.search = '?level=' + b.dataset.level; }));
if (SITE) {      // a year level: straight onto the ground
  $('rb-h1').textContent = SITE.title; $('rb-h2').textContent = `Level ${SITE.level} · ${SITE.year}`;
  document.querySelectorAll('#rover-brief .spec span').forEach(sp => { if (sp.textContent === 'Objective') sp.nextElementSibling.textContent = 'Follow Perseverance’s route (the gold dashes), image the outcrop half way, then reach the beacon at the end of the drive. Go anywhere you like on the way'; });
  $('rb-p').textContent = `${SITE.text} The ground is the real one, from ${SITE.src}, ${SITE.scale}.`;
}
{ const marks = () => document.querySelectorAll('#diff [data-d]').forEach(b => b.classList.toggle('on', b.dataset.d === difficulty()));      // Easy or Realistic, remembered on this device
  document.querySelectorAll('#diff [data-d]').forEach(b => b.addEventListener('click', () => { setDifficulty(b.dataset.d); marks(); })); marks(); }
$('btn-again').addEventListener('click', () => { if (!SITE) location.search = '?level=1'; else if (SITE.next) location.search = '?level=' + SITE.next; else location.reload(); });
$('minimap').addEventListener('click', () => toggleMap(true));
$('map-close').addEventListener('click', () => toggleMap(false));
$('btn-map').addEventListener('click', () => toggleMap());

(async () => {
  let scans = null;
  try { $('loadmsg').textContent = 'Loading rocks…'; scans = await loadScans(); }
  catch (e) { console.warn('scanned rocks unavailable, using procedural ones', e); }
  scatter(scans);
  try { $('loadmsg').textContent = 'Loading rover…'; await loadModels(); }
  catch (e) {
    $('loadmsg').textContent = 'The 3D models could not load — check that models/ sits beside this page.';
    console.error(e); return;
  }
  S.rover.pos.y = height(S.rover.pos.x, S.rover.pos.z);
  // the orbital photograph of Jezero, if it is beside the page; without it the landing draws its own map
  const regionImg = await new Promise(res => { const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = 'img/jezero-region.jpg'; });
  edl = createEDL({
    renderer, scene, camera, height, sunDir, groundMap: map, buildHazardGrid, puff,
    target: START, playR: PLAY_R, regionImg, outcrops: OUTCROP_SITES, sandMask, onBack: () => $('brief').classList.add('on'), floor: terrainFloor(), plainY: DTM.on ? (SITE ? terrainFloor() - 2 : DTM.plain) : undefined, origin: SITE ? SITE.origin : null, ext: DTM.on ? EXT : 0, fog: { near: scene.fog.near, far: scene.fog.far },
    rover: () => rover, roverYaw: () => S.rover.yaw,
    setHeliVisible: v => { heli.visible = v; },
    afterCamera: (x, y, z) => {                    // keep the sky and the shadow light with the lander
      sky.position.copy(camera.position);
      sun.target.position.set(x, y, z); sun.position.copy(sun.target.position).add(sunOff);
    },
    settleRover: (x, z) => { S.rover.pos.set(x, height(x, z), z); S.rover.speed = 0; gReady = false; stepRover(0); },
    onLanded: startSurface,
  });
  hud();
  $('loading').classList.remove('on');
  if (SITE) startSurface(null); else $('brief').classList.add('on');
  requestAnimationFrame(frame);
})();

/* small handle for tuning and smoke tests */
const _w = new THREE.Vector3();
window.__game = {
  MAST, setMast, get LASER() { return LASER; }, get CIN() { return CIN; }, ATT, MOB, S, CFG, scene, camera, THREE, height, groundHeight, sandMask, paverMask, CRATERS, UNITS, get rockCount() { return rockCount; }, renderer, tick: (n, dt = 1 / 30) => { for (let i = 0; i < n; i++) update(dt); }, colliders,
  card: i => { S.logged = Math.max(S.logged, 1); showCard(S.outcrops[i]); },
  get sus() { return sus; },
  get edl() { return edl; },
  startSurface,
  get heli() { return heli; },
  tp: (x, z, yaw = 0) => { S.rover.pos.set(x, height(x, z), z); S.rover.yaw = yaw; S.rover.speed = 0; camInit = false; gReady = false; tracks.cut(); },
  view: (...v) => { dbgCam = v.length === 6 ? v : null; },
  findAll: () => { S.outcrops.forEach(o => reveal(o, false)); },
  outcrops: () => S.outcrops.map(o => ({ n: o.name, found: o.found, logged: o.logged, p: [o.pos.x, +o.pos.y.toFixed(1), o.pos.z] })),
  // how far each wheel's tread sits above (+) or below (−) the ground it is on, in metres
  wheelGap: () => { rover.updateMatrixWorld(true); return sus.wheels.map(w => { w.spin.getWorldPosition(_w); return +(_w.y - WHEEL_R - groundHeight(_w.x, _w.z)).toFixed(3); }); },
};
