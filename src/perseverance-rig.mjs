// Perseverance: NASA's model has the six wheels as one mesh and the whole suspension as another, so nothing can move.
// This cuts them into the real moving parts — a rocker on each side carrying the front wheel, a bogie hinged to the back
// of each rocker carrying the other two, the differential bar across the deck and the two links that tie it to the
// rockers — each as its own node, placed on its real pivot. Every loose piece of the mesh is assigned by where it sits.
// A do-nothing animation ("rig") names those nodes so later optimisation steps leave them separate.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune } from '@gltf-transform/functions';
import { MeshoptDecoder } from 'meshoptimizer';
import draco3d from 'draco3dgltf';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'draco3d.decoder': await draco3d.createDecoderModule(), 'draco3d.encoder': await draco3d.createEncoderModule() });
const [src, dst] = process.argv.slice(2), DEBUG = !!process.env.DEBUG, doc = await io.read(src);
for (const e of doc.getRoot().listExtensionsUsed()) if (e.extensionName === 'KHR_draco_mesh_compression') e.dispose();
const buf = doc.getRoot().listBuffers()[0], scene = doc.getRoot().listScenes()[0], N = n => doc.getRoot().listNodes().find(x => x.getName() === n);
// pivots and centres, in metres (x: left of the rover is +, y: up, z: forward), measured from the model's own pivot housings
const P = { rocker: [.80, .89, .21], bogie: [.90, .665, -.54], link: [.64, 1.165, .215], bar: [0, 1.165, -.145], wheelF: [1.06, .265, 1.095], wheelM: [1.185, .265, -.09], wheelR: [1.06, .265, -1.165] };
const parts = new Map();      // name → { origin, prims: Map(sourcePrimitive → { verts: Map(old→new), idx: [] }) }
const part = (name, o) => { if (!parts.has(name)) parts.set(name, { origin: o, prims: new Map() }); return parts.get(name); };
const side = x => x > 0 ? 'L' : 'R', mir = (o, s) => [s === 'L' ? o[0] : -o[0], o[1], o[2]];
function classify(kind, c, lo, hi) {      // c: centre of the piece's bounding box
  const s = side(c[0]), ax = Math.abs(c[0]);
  if (kind === 'wheel') return c[2] > .5 ? ['wheel_F' + s, mir(P.wheelF, s)] : c[2] > -.6 ? ['wheel_M' + s, mir(P.wheelM, s)] : ['wheel_R' + s, mir(P.wheelR, s)];
  if (c[1] > 1.1) return hi[2] < -.05 ? ['diff_bar', P.bar] : ['link_' + s, mir(P.link, s)];                 // up on the deck: the bar itself, or a link running forward from its end
  if (c[2] < -.6) return ['bogie_' + s, mir(P.bogie, s)];                                                    // rear arm, rear steering, rear leg
  if (c[2] < -.02 && ax > .862) return ['bogie_' + s, mir(P.bogie, s)];                                      // outboard of the rocker's rear tube: the bogie's forward arm and middle leg
  return ['rocker_' + s, mir(P.rocker, s)];
}
const stats = {};
for (const [nodeName, kind] of [['Wheels_objs', 'wheel'], ['suspension', 'susp']]) { const node = N(nodeName), W = node.getWorldMatrix(), prims = node.getMesh().listPrimitives();
  // loose pieces: triangles joined wherever corners coincide, across materials
  const pts = [], key = new Map(), maps = [];
  for (const p of prims) { const A = p.getAttribute('POSITION'), v = [0, 0, 0], map = new Int32Array(A.getCount());
    for (let i = 0; i < A.getCount(); i++) { A.getElement(i, v); const w = [W[0] * v[0] + W[4] * v[1] + W[8] * v[2] + W[12], W[1] * v[0] + W[5] * v[1] + W[9] * v[2] + W[13], W[2] * v[0] + W[6] * v[1] + W[10] * v[2] + W[14]], k = w.map(x => Math.round(x * 5000)).join(','); let id = key.get(k); if (id === undefined) { id = pts.length; pts.push(w); key.set(k, id); } map[i] = id; }
    maps.push(map); }
  const par = Int32Array.from({ length: pts.length }, (_, i) => i), find = x => { while (par[x] !== x) { par[x] = par[par[x]]; x = par[x]; } return x; };
  prims.forEach((p, pi) => { const I = p.getIndices().getArray(), map = maps[pi]; for (let t = 0; t < I.length; t += 3) { const a = find(map[I[t]]), b = find(map[I[t + 1]]); if (a !== b) par[b] = a; const c = find(map[I[t + 2]]), a2 = find(a); if (c !== a2) par[c] = a2; } });
  const box = new Map(); pts.forEach((w, i) => { const r = find(i); let q = box.get(r); if (!q) { q = { lo: [9, 9, 9], hi: [-9, -9, -9] }; box.set(r, q); } for (let k = 0; k < 3; k++) { if (w[k] < q.lo[k]) q.lo[k] = w[k]; if (w[k] > q.hi[k]) q.hi[k] = w[k]; } });
  for (const q of box.values()) { const c = q.lo.map((v, k) => (v + q.hi[k]) / 2); [q.name, q.origin] = classify(kind, c, q.lo, q.hi); }
  prims.forEach((p, pi) => { const I = p.getIndices().getArray(), map = maps[pi];
    for (let t = 0; t < I.length; t += 3) { const q = box.get(find(map[I[t]])), pt = part(q.name, q.origin); let e = pt.prims.get(p); if (!e) { e = { verts: new Map(), idx: [], W }; pt.prims.set(p, e); }
      for (let j = 0; j < 3; j++) { const i = I[t + j]; let k = e.verts.get(i); if (k === undefined) { k = e.verts.size; e.verts.set(i, k); } e.idx.push(k); } stats[q.name] = (stats[q.name] || 0) + 1; } }); }
console.log(Object.entries(stats).map(([k, v]) => k + ' ' + v).join(' · '));
// build the nodes
const COL = { rocker: [1, .2, .2], bogie: [.2, .5, 1], link: [1, 1, 0], diff: [.2, 1, .3], wheel: [.8, .8, .8] }, dbgMat = {};
const nodes = {};
for (const [name, pt] of parts) { const mesh = doc.createMesh(name), o = pt.origin;
  for (const [p, e] of pt.prims) { const q = doc.createPrimitive().setMaterial(p.getMaterial()), W = e.W;
    if (DEBUG) { const k = name.split('_')[0]; q.setMaterial(dbgMat[k] || (dbgMat[k] = doc.createMaterial('dbg_' + k).setBaseColorFactor([...COL[k], 1]))); }
    for (const sem of p.listSemantics()) { const a = p.getAttribute(sem), es = a.getElementSize(), out = new Float32Array(e.verts.size * es), v = new Array(es).fill(0);
      for (const [i, k] of e.verts) { a.getElement(i, v); if (sem === 'POSITION') { out[k * 3] = W[0] * v[0] + W[4] * v[1] + W[8] * v[2] + W[12] - o[0]; out[k * 3 + 1] = W[1] * v[0] + W[5] * v[1] + W[9] * v[2] + W[13] - o[1]; out[k * 3 + 2] = W[2] * v[0] + W[6] * v[1] + W[10] * v[2] + W[14] - o[2]; } else for (let c = 0; c < es; c++) out[k * es + c] = v[c]; }
      q.setAttribute(sem, doc.createAccessor().setType(a.getType()).setArray(out).setBuffer(buf)); }
    q.setIndices(doc.createAccessor().setType('SCALAR').setArray(e.verts.size > 65535 ? new Uint32Array(e.idx) : new Uint16Array(e.idx)).setBuffer(buf)); mesh.addPrimitive(q); }
  nodes[name] = doc.createNode(name).setMesh(mesh); }
const place = (name, parent) => { const o = parts.get(name).origin, po = parent ? parts.get(parent).origin : [0, 0, 0]; nodes[name].setTranslation([o[0] - po[0], o[1] - po[1], o[2] - po[2]]); (parent ? nodes[parent] : scene).addChild(nodes[name]); };
for (const s of ['L', 'R']) { place('rocker_' + s); place('wheel_F' + s, 'rocker_' + s); place('link_' + s, 'rocker_' + s); place('bogie_' + s, 'rocker_' + s); place('wheel_M' + s, 'bogie_' + s); place('wheel_R' + s, 'bogie_' + s); }
place('diff_bar');
N('Wheels_objs').dispose(); N('suspension').dispose();
const tAcc = doc.createAccessor().setType('SCALAR').setArray(new Float32Array([0, 1])).setBuffer(buf), anim = doc.createAnimation('rig');
for (const name in nodes) { const smp = doc.createAnimationSampler().setInput(tAcc).setOutput(doc.createAccessor().setType('VEC4').setArray(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1])).setBuffer(buf)).setInterpolation('LINEAR'); anim.addSampler(smp).addChannel(doc.createAnimationChannel().setTargetNode(nodes[name]).setTargetPath('rotation').setSampler(smp)); }
await doc.transform(prune());
await io.write(dst, doc); console.log('wrote', dst);
