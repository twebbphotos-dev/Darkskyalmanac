/* ──────────────────────────────────────────────────────────────
   suspension.js — a working rocker-bogie

   The Almanac's rover model ships its mobility system as rigid
   meshes: no bones, no pivots. But every tyre, spoke, knuckle and
   arm is its own connected piece of geometry, so at load time this
   finds those pieces, sorts them by where they sit, and re-hangs
   them on a proper linkage:

       body ── rocker ─┬─ front steering knuckle ── front wheel
                       └─ bogie ─┬─ middle wheel
                                 └─ rear steering knuckle ── rear wheel

   Each frame the linkage is solved from the ground height under
   each of the six wheels. The body rides at the average of the two
   rockers — that averaging is the differential, and it is why the
   deck stays so level while the wheels walk over rocks.

   All coordinates here are in the model's own space: nose +Z, up +Y.
   ────────────────────────────────────────────────────────────── */
import * as THREE from 'three';

export const WHEEL_R = 0.2635;

// read straight off the model's geometry (metres, +X side; the −X side mirrors)
const WHEELS = [
  { id: 'F', x: 1.0625, z:  1.0955, steers: true  },
  { id: 'M', x: 1.1845, z: -0.0900, steers: false },
  { id: 'R', x: 1.0625, z: -1.1650, steers: true  },
];
const ROCKER = { x: 0.80, y: 0.890, z:  0.21 };   // rocker pivot on the body
const BOGIE  = { x: 0.90, y: 0.664, z: -0.54 };   // bogie pivot on the rocker
const TRACK = (WHEELS[0].x + WHEELS[1].x + WHEELS[2].x) / 3;   // mean half-track
const MOBILITY_NODES = ['Wheels_objs', 'suspension', 'hazcams_front'];   // where the parts live

/* ── which rigid body does a piece of geometry belong to? ─────── */
function classify(mn, mx) {
  if (mn.x * mx.x <= 0) return null;                        // straddles the centreline: body
  const side = mn.x > 0 ? 1 : -1;
  const inner = Math.min(Math.abs(mn.x), Math.abs(mx.x));
  const outer = Math.max(Math.abs(mn.x), Math.abs(mx.x));
  const cy = (mn.y + mx.y) / 2, cz = (mn.z + mx.z) / 2, cx = (inner + outer) / 2;
  if (inner < 0.70 || cy >= 1.02) return null;              // inboard or up on the deck: body

  // wheels: tyre, spokes, hub, axle stub — everything that fits inside the wheel's envelope
  for (const w of WHEELS) {
    if (inner >= w.x - 0.18 && outer <= w.x + 0.18 && mn.y >= -0.02 && mx.y <= 0.54 &&
        mn.z >= w.z - 0.275 && mx.z <= w.z + 0.275) return { side, part: 'wheel' + w.id };
  }
  // steering knuckles: whatever hangs below the steering actuator at a corner wheel
  for (const w of WHEELS) {
    if (w.steers && mx.y <= 0.665 && outer <= w.x + 0.2 &&
        mn.z >= w.z - 0.28 && mx.z <= w.z + 0.28) return { side, part: 'steer' + w.id };
  }
  // the arms: rocker forward of the middle wheel, bogie aft, split at the bogie pivot
  if (cz > 0) return { side, part: 'rocker' };
  if (cz <= -0.62) return { side, part: 'bogie' };
  return { side, part: cx < 0.868 ? 'rocker' : 'bogie' };
}

/* ── connected components of one mesh, with model-space bounds ── */
function components(mesh, toModel) {
  const geo = mesh.geometry, pos = geo.attributes.position, idx = geo.index;
  const nV = pos.count, nT = (idx ? idx.count : nV) / 3;
  const tri = (t, k) => (idx ? idx.getX(t * 3 + k) : t * 3 + k);

  // weld coincident vertices on a 16-bit lattice, so split normals do not break pieces apart
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  const L = new Float32Array(nV * 3);
  for (let i = 0; i < nV; i++) {
    const p = [pos.getX(i), pos.getY(i), pos.getZ(i)];
    for (let a = 0; a < 3; a++) { L[i * 3 + a] = p[a]; if (p[a] < lo[a]) lo[a] = p[a]; if (p[a] > hi[a]) hi[a] = p[a]; }
  }
  const sc = [0, 1, 2].map(a => 65535 / Math.max(1e-9, hi[a] - lo[a]));
  const weld = new Map(), wid = new Int32Array(nV);
  let nW = 0;
  for (let i = 0; i < nV; i++) {
    const k = Math.round((L[i * 3] - lo[0]) * sc[0]) +
              Math.round((L[i * 3 + 1] - lo[1]) * sc[1]) * 65536 +
              Math.round((L[i * 3 + 2] - lo[2]) * sc[2]) * 4294967296;
    let w = weld.get(k);
    if (w === undefined) { w = nW++; weld.set(k, w); }
    wid[i] = w;
  }

  const par = new Int32Array(nW);
  for (let i = 0; i < nW; i++) par[i] = i;
  const find = a => { while (par[a] !== a) { par[a] = par[par[a]]; a = par[a]; } return a; };
  for (let t = 0; t < nT; t++) {
    const a = find(wid[tri(t, 0)]), b = find(wid[tri(t, 1)]), c = find(wid[tri(t, 2)]);
    if (b !== a) par[b] = a;
    if (c !== a) par[c] = a;
  }

  const v = new THREE.Vector3();
  const comps = new Map();
  for (let t = 0; t < nT; t++) {
    const root = find(wid[tri(t, 0)]);
    let c = comps.get(root);
    if (!c) comps.set(root, c = { tris: [], mn: new THREE.Vector3(Infinity, Infinity, Infinity), mx: new THREE.Vector3(-Infinity, -Infinity, -Infinity) });
    c.tris.push(t);
    for (let k = 0; k < 3; k++) {
      const i = tri(t, k);
      v.set(L[i * 3], L[i * 3 + 1], L[i * 3 + 2]).applyMatrix4(toModel);
      c.mn.min(v); c.mx.max(v);
    }
  }
  return { comps: [...comps.values()], tri, nT };
}

/* ── build the linkage ────────────────────────────────────────── */
export function buildSuspension(model) {
  model.updateMatrixWorld(true);
  const inv = model.matrixWorld.clone().invert();

  const sides = {};
  const wheels = [];           // six, in a fixed order: +X side F M R, then −X side F M R
  const groups = {};           // "side:part" -> { group, rest }

  const node = (parent, parentRest, x, y, z, key) => {
    const g = new THREE.Group();
    g.position.set(x - parentRest.x, y - parentRest.y, z - parentRest.z);
    parent.add(g);
    const rest = new THREE.Vector3(x, y, z);
    if (key) groups[key] = { group: g, rest };
    return { g, rest };
  };
  const origin = new THREE.Vector3();

  for (const s of [1, -1]) {
    const rocker = node(model, origin, s * ROCKER.x, ROCKER.y, ROCKER.z, `${s}:rocker`);
    const bogie = node(rocker.g, rocker.rest, s * BOGIE.x, BOGIE.y, BOGIE.z, `${s}:bogie`);
    const side = { rocker: rocker.g, bogie: bogie.g, steer: {} };
    for (const w of WHEELS) {
      const arm = w.id === 'F' ? rocker : bogie;
      let hub = arm;
      if (w.steers) {
        hub = node(arm.g, arm.rest, s * w.x, WHEEL_R, w.z, `${s}:steer${w.id}`);
        side.steer[w.id] = hub.g;
      }
      const wh = node(hub.g, hub.rest, s * w.x, WHEEL_R, w.z, `${s}:wheel${w.id}`);
      wheels.push({ id: w.id, side: s, x: s * w.x, z: w.z, spin: wh.g, steer: w.steers ? hub.g : null });
    }
    sides[s] = side;
  }

  // sort every piece of the mobility meshes onto the linkage
  const stats = { parts: 0, tris: 0 };
  const sources = [];
  for (const name of MOBILITY_NODES) {
    const root = model.getObjectByName(name);
    if (root) root.traverse(o => { if (o.isMesh) sources.push(o); });
  }

  for (const mesh of sources) {
    const toModel = inv.clone().multiply(mesh.matrixWorld);
    const { comps, tri } = components(mesh, toModel);
    const buckets = new Map();
    const keep = [];

    for (const c of comps) {
      const hit = classify(c.mn, c.mx);
      const key = hit && `${hit.side}:${hit.part}`;
      let out = keep;
      if (key && groups[key]) { out = buckets.get(key); if (!out) buckets.set(key, out = []); }
      for (const t of c.tris) out.push(tri(t, 0), tri(t, 1), tri(t, 2));
    }
    if (!buckets.size) continue;

    // The new meshes share the original vertex buffers and differ only in their
    // index, so nothing is copied and the split costs almost no memory.
    const share = index => {
      const g = new THREE.BufferGeometry();
      for (const [n, a] of Object.entries(mesh.geometry.attributes)) g.setAttribute(n, a);
      g.setIndex(index);
      g.boundingSphere = null;
      return g;
    };
    const src = mesh.geometry;
    if (!src.boundingSphere) src.computeBoundingSphere();

    for (const [key, index] of buckets) {
      const { group, rest } = groups[key];
      const part = new THREE.Mesh(share(index), mesh.material);
      part.geometry.boundingSphere = src.boundingSphere.clone();
      part.castShadow = part.receiveShadow = true;
      part.matrixAutoUpdate = false;
      part.matrix.makeTranslation(-rest.x, -rest.y, -rest.z).multiply(toModel);
      group.add(part);
      stats.parts++; stats.tris += index.length / 3;
    }
    mesh.geometry = share(keep);
    mesh.geometry.boundingSphere = src.boundingSphere.clone();
    if (!keep.length) mesh.visible = false;
  }

  /* ── solve one side: three wheel-centre heights in, joint angles out ──
     Angles are "nose-up positive". The bogie lies across its two wheels;
     the rocker spans from the bogie pivot to the front wheel. */
  const bogieBase = WHEELS[1].z - WHEELS[2].z;                       // middle–rear wheelbase
  const bpU = BOGIE.z - WHEELS[2].z, bpV = BOGIE.y - WHEEL_R;        // bogie pivot, from rear wheel
  const rfU = WHEELS[0].z - BOGIE.z, rfV = WHEEL_R - BOGIE.y;        // front wheel, from bogie pivot
  const rfL = Math.hypot(rfU, rfV), rf0 = Math.atan2(rfV, rfU);
  const rpU = ROCKER.z - BOGIE.z, rpV = ROCKER.y - BOGIE.y;          // rocker pivot, from bogie pivot
  const clamp1 = v => Math.max(-0.95, Math.min(0.95, v));

  function solveSide(gF, gM, gR) {
    const cF = gF + WHEEL_R, cM = gM + WHEEL_R, cR = gR + WHEEL_R;
    // Ground heights are read at the wheels' plan positions, so a rise over a horizontal span:
    // atan, not asin, or a 35° slope would read as 44° and the body would over-tilt.
    const beta = Math.atan((cM - cR) / bogieBase);
    const yB = cR + bpU * Math.sin(beta) + bpV * Math.cos(beta);
    const rho = Math.atan((cF - yB) / rfL) - rf0;
    const yP = yB + rpU * Math.sin(rho) + rpV * Math.cos(rho);
    return { beta, rho, yP };
  }

  /* heights: ground under each wheel, in `wheels` order.
     Returns the body pose: height of the model origin, pitch (nose-up +)
     and lean (the model's +X side up +). */
  function pose(g) {
    const A = solveSide(g[0], g[1], g[2]);       // +X side
    const B = solveSide(g[3], g[4], g[5]);       // −X side
    const pitch = (A.rho + B.rho) / 2;                                   // the differential
    const lean = Math.atan2(A.yP - B.yP, 2 * TRACK);                    // heights are measured at the wheels
    const y = (A.yP + B.yP) / 2 - ROCKER.z * Math.sin(pitch) - ROCKER.y * Math.cos(pitch);

    // In model space +Z is forward, so a nose-up angle is a negative turn about X.
    sides[1].rocker.rotation.x = -(A.rho - pitch);
    sides[1].bogie.rotation.x = -(A.beta - A.rho);
    sides[-1].rocker.rotation.x = -(B.rho - pitch);
    sides[-1].bogie.rotation.x = -(B.beta - B.rho);
    return { y, pitch, lean, rocker: [A.rho - pitch, B.rho - pitch], bogie: [A.beta - A.rho, B.beta - B.rho] };
  }

  return { wheels, pose, stats };
}
