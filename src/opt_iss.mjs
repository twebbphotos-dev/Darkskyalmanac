// ISS: NASA's 2.7M-triangle model → web size, without shredding it.
// v1 of this script cut every part to a fixed fraction of its triangles, which turned thin parts (the robot arm, handrails,
// shutters) into loose shards. This version works to a size limit instead: anything smaller than DROP is removed whole,
// and everything else is simplified only until its shape would move by more than ERR. Nothing is collapsed across its own
// surface, so parts keep their form. The Cupola is kept exactly as NASA made it.
// Small fittings (under BOXD across) become plain boxes in their own colour. Shipped build:
//   ARM='{"ELP_PRIME":-52,"SHP_PRIME":-10,"WRP":38,"WRR":50}' ARMT=16 DROPD=.3 BOXD=.8 ERRD=.04 DROP=.1 BOXH=.35 ERR=.02 NODEBOX=.7 node opt_iss.mjs "International Space Station (ISS).glb" iss.glb
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, meshopt, textureCompress, flatten, join, compactPrimitive } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder, MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';
import sharp from 'sharp';
await MeshoptDecoder.ready; await MeshoptEncoder.ready; await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'draco3d.decoder': await draco3d.createDecoderModule(), 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });
const [src, dst] = process.argv.slice(2), E = process.env;
const UNIT = 8.5;                                            // metres per model unit (from the real sizes of Kibo and Node 3)
const ERR = +(E.ERR || .012) / UNIT, DROP = +(E.DROP || .06) / UNIT, KEEP = new RegExp(E.KEEP || '^Cupola'), FINE = new RegExp(E.FINE || '^$'), FINEK = +(E.FINEK || .4);
const doc = await io.read(src);
for (const t of doc.getRoot().listTextures()) if (t.listParents().filter(p => p.propertyType !== 'Root').length === 0) t.dispose();
if (E.DROPN) for (const n of doc.getRoot().listNodes()) if (new RegExp(E.DROPN).test(n.getName())) n.dispose();
for (const e of doc.getRoot().listExtensionsUsed()) if (e.extensionName === 'KHR_draco_mesh_compression') e.dispose();
for (const m of doc.getRoot().listMaterials()) { m.setNormalTexture(null); m.setOcclusionTexture(null); }
// NASA's file is a mirror image of the real station (Kibo on the starboard side, lettering reversed). Flip it back.
{ const scene = doc.getRoot().listScenes()[0], flip = doc.createNode('unmirror').setScale([1, 1, -1]); for (const c of scene.listChildren()) { scene.removeChild(c); flip.addChild(c); } scene.addChild(flip); }
// The big heat radiators are plain panels that take one flat colour from the texture atlas, but in this export their texture
// coordinates are garbage (a solar-cell texel tiled 1,383 times across each panel). The real panels are white: point them at the atlas's white swatch.
for (const node of doc.getRoot().listNodes()) { if (!/^(P1|S1)_Radiator$/.test(node.getName()) || !node.getMesh()) continue;
  for (const prim of node.getMesh().listPrimitives()) { const uv = prim.getAttribute('TEXCOORD_0'); if (!uv || !prim.getMaterial() || prim.getMaterial().getName() !== 'Truss') continue;
    const A = new Float32Array(uv.getCount() * 2); for (let i = 0; i < uv.getCount(); i++) { A[i * 2] = .804; A[i * 2 + 1] = .994; }
    prim.setAttribute('TEXCOORD_0', uv.clone().setArray(A).setNormalized(false)); } }
// Some panels tile their texture hundreds of times, so their UVs run into the thousands and would be crushed by
// quantisation. Shift each triangle's UVs back next to the origin — identical on a repeating texture.
for (const mesh of doc.getRoot().listMeshes()) for (const prim of mesh.listPrimitives()) {
  const uv = prim.getAttribute('TEXCOORD_0'); if (!uv) continue; const el = [0, 0]; let lo = [1e9, 1e9], hi = [-1e9, -1e9];
  for (let i = 0; i < uv.getCount(); i++) { uv.getElement(i, el); for (let k = 0; k < 2; k++) { lo[k] = Math.min(lo[k], el[k]); hi[k] = Math.max(hi[k], el[k]); } }
  if (hi[0] - lo[0] <= 3 && hi[1] - lo[1] <= 3 && lo[0] > -4 && hi[0] < 4 && lo[1] > -4 && hi[1] < 4) continue;
  const idx = prim.getIndices(), n = idx ? idx.getCount() : uv.getCount(), I = i => idx ? idx.getScalar(i) : i;
  for (const sem of prim.listSemantics()) { const a = prim.getAttribute(sem), es = a.getElementSize(), s = a.getArray();
    const isUV = sem === 'TEXCOORD_0', out = isUV ? new Float32Array(n * es) : new s.constructor(n * es), e = new Array(es).fill(0);
    for (let i = 0; i < n; i++) { a.getElement(I(i), e); if (!isUV && a.getNormalized()) { const j = I(i) * es; for (let k = 0; k < es; k++) out[i * es + k] = s[j + k]; } else for (let k = 0; k < es; k++) out[i * es + k] = e[k]; }
    if (isUV) for (let t = 0; t < n; t += 3) { const fu = Math.floor(Math.min(out[t * 2], out[t * 2 + 2], out[t * 2 + 4])), fv = Math.floor(Math.min(out[t * 2 + 1], out[t * 2 + 3], out[t * 2 + 5])); for (let k = 0; k < 3; k++) { out[(t + k) * 2] -= fu; out[(t + k) * 2 + 1] -= fv; } }
    const na = a.clone().setArray(out); if (isUV) na.setNormalized(false); prim.setAttribute(sem, na); }
  prim.setIndices(null); }
await doc.transform(dedup(), weld());
// Canadarm2 keeps its seven joints (NASA's model has each as a real hinge), so the arm can move. Each joint turns about one
// axis of its parent: shoulder roll/yaw/pitch, elbow pitch, wrist pitch/yaw/roll. ARM lists the pose to reach, in degrees.
{ const JOINTS = { SHR: [1, 0, 0], SHY: [0, 0, 1], SHP_PRIME: [0, 0, 1], ELP_PRIME: [0, 0, 1], WRP: [0, 0, 1], WRY: [0, 1, 0], WRR: [1, 0, 0] }, ARM = JSON.parse(E.ARM || '{}'), T = +(E.ARMT || 16), N = 33, buf = doc.getRoot().listBuffers()[0];
  const times = new Float32Array(N); for (let i = 0; i < N; i++) times[i] = T * i / (N - 1); const tAcc = doc.createAccessor().setType('SCALAR').setArray(times).setBuffer(buf), anim = doc.createAnimation('arm');
  const mul = (a, b) => [a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1], a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0], a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3], a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2]];
  for (const name in JOINTS) { const node = doc.getRoot().listNodes().find(n => n.getName() === name); if (!node) throw new Error('no joint ' + name); const q0 = node.getRotation(), ax = JOINTS[name], deg = ARM[name] || 0, out = new Float32Array(N * 4);
    for (let i = 0; i < N; i++) { const k = i / (N - 1), e = k * k * (3 - 2 * k), h = deg * e * Math.PI / 360, q = mul([ax[0] * Math.sin(h), ax[1] * Math.sin(h), ax[2] * Math.sin(h), Math.cos(h)], q0); out.set(q, i * 4); }
    const smp = doc.createAnimationSampler().setInput(tAcc).setOutput(doc.createAccessor().setType('VEC4').setArray(out).setBuffer(buf)).setInterpolation('LINEAR');
    anim.addSampler(smp).addChannel(doc.createAnimationChannel().setTargetNode(node).setTargetPath('rotation').setSampler(smp)); } }
const det3 = m => m[0] * (m[5] * m[10] - m[6] * m[9]) - m[1] * (m[4] * m[10] - m[6] * m[8]) + m[2] * (m[4] * m[9] - m[5] * m[8]);
// principal axes of a cloud of points (Jacobi rotation of its 3×3 covariance) — for a snug box around a part at any angle
function axes(P, vs) { let c = [0, 0, 0]; for (const v of vs) for (let k = 0; k < 3; k++) c[k] += P[v * 3 + k]; c = c.map(x => x / vs.length);
  const C = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; for (const v of vs) { const d = [P[v * 3] - c[0], P[v * 3 + 1] - c[1], P[v * 3 + 2] - c[2]]; for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) C[a][b] += d[a] * d[b]; }
  const V = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  for (let it = 0; it < 24; it++) { let p = 0, q = 1, m = Math.abs(C[0][1]); if (Math.abs(C[0][2]) > m) { m = Math.abs(C[0][2]); p = 0; q = 2; } if (Math.abs(C[1][2]) > m) { m = Math.abs(C[1][2]); p = 1; q = 2; } if (m < 1e-20) break;
    const th = .5 * Math.atan2(2 * C[p][q], C[q][q] - C[p][p]), cs = Math.cos(th), sn = Math.sin(th);
    for (let k = 0; k < 3; k++) { const a = C[k][p], b = C[k][q]; C[k][p] = cs * a - sn * b; C[k][q] = sn * a + cs * b; }
    for (let k = 0; k < 3; k++) { const a = C[p][k], b = C[q][k]; C[p][k] = cs * a - sn * b; C[q][k] = sn * a + cs * b; }
    for (let k = 0; k < 3; k++) { const a = V[k][p], b = V[k][q]; V[k][p] = cs * a - sn * b; V[k][q] = sn * a + cs * b; } }
  const e1 = [V[0][0], V[1][0], V[2][0]], e2 = [V[0][1], V[1][1], V[2][1]], e3 = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
  return [e1, e2, e3]; }
// the 24 corners, normals and 12 triangles of a box given by its axes and extents, faces pointing outwards
function boxArrays(bx) { const p = new Float32Array(72), nr = new Float32Array(72), ix = []; let vo = 0;
  for (let f = 0; f < 6; f++) { const k = f >> 1, sg = f & 1 ? 1 : -1, k1 = (k + 1) % 3, k2 = (k + 2) % 3, nrm = bx.ax[k].map(x => x * sg);
    const corner = (s1, s2) => { const c = [0, 0, 0], co = []; co[k] = sg > 0 ? bx.hi[k] : bx.lo[k]; co[k1] = s1 ? bx.hi[k1] : bx.lo[k1]; co[k2] = s2 ? bx.hi[k2] : bx.lo[k2]; for (let a = 0; a < 3; a++) for (let d = 0; d < 3; d++) c[d] += bx.ax[a][d] * co[a]; return c; };
    const q4 = sg > 0 ? [corner(0, 0), corner(1, 0), corner(1, 1), corner(0, 1)] : [corner(0, 0), corner(0, 1), corner(1, 1), corner(1, 0)];
    q4.forEach((c, j) => { p.set(c, (vo + j) * 3); nr.set(nrm, (vo + j) * 3); }); ix.push(vo, vo + 1, vo + 2, vo, vo + 2, vo + 3); vo += 4; }
  return { p, nr, ix }; }
function fitBox(P, vs) { const ax = axes(P, vs), lo = [1e30, 1e30, 1e30], hi = [-1e30, -1e30, -1e30];
  for (const v of vs) for (let k = 0; k < 3; k++) { const x = P[v * 3] * ax[k][0] + P[v * 3 + 1] * ax[k][1] + P[v * 3 + 2] * ax[k][2]; if (x < lo[k]) lo[k] = x; if (x > hi[k]) hi[k] = x; }
  return { ax, lo, hi }; }
const NODEBOX = +(E.NODEBOX || .7) / UNIT; let nodeBoxes = 0;
let before = 0, after = 0, dropped = 0, boxed = 0; const rows = [], tot = { hull: [0, 0], det: [0, 0], boxes: 0 };
const DROPD = +(E.DROPD || .18) / UNIT, BOXD = +(E.BOXD || .45) / UNIT, ERRD = +(E.ERRD || .02) / UNIT, BOXH = +(E.BOXH || .2) / UNIT, DET = /Detail|GITAI|Payload|ORU|Handrail/i;
for (const node of doc.getRoot().listNodes()) { const mesh = node.getMesh(); if (!mesh) continue; const name = node.getName(), ws = Math.cbrt(Math.abs(det3(node.getWorldMatrix()))); let b = 0, a = 0;
  const isDet = DET.test(name), drop = isDet ? DROPD : DROP, boxMax = isDet ? BOXD : BOXH;
  // A whole fitting that is small (a camera on its mount, a connector cluster) becomes one box. Judged piece by piece,
  // its small parts would be dropped and its one larger plate left floating in space.
  if (isDet && !KEEP.test(name)) { const prims = mesh.listPrimitives().filter(p => p.getIndices()), lo = [1e30, 1e30, 1e30], hi = [-1e30, -1e30, -1e30]; let nt = 0, big = null, bigN = -1;
    for (const p of prims) { const A = p.getAttribute('POSITION').getArray(), t = p.getIndices().getCount() / 3; nt += t; if (t > bigN) { bigN = t; big = p; }
      for (let i = 0; i < A.length; i += 3) for (let k = 0; k < 3; k++) { const x = A[i + k]; if (x < lo[k]) lo[k] = x; if (x > hi[k]) hi[k] = x; } }
    const diag = Math.hypot(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]) * ws;
    if (prims.length && diag < NODEBOX && nt > 12) { before += nt; tot.det[0] += nt;
      if (diag < DROPD) { for (const p of prims) p.dispose(); dropped += nt; rows.push([name, nt, 0]); continue; }
      const all = []; for (const p of prims) all.push(new Float32Array(p.getAttribute('POSITION').getArray())); const len = all.reduce((s, a) => s + a.length, 0), P = new Float32Array(len); let o = 0; for (const a of all) { P.set(a, o); o += a.length; }
      const st = Math.max(1, Math.floor(P.length / 3 / 4000)), vs = []; for (let i = 0; i < P.length / 3; i += st) vs.push(i);
      const bx = fitBox(P, Array.from({ length: P.length / 3 }, (_, i) => i).filter((_, i) => i % st === 0 || true)), g = boxArrays(bx), uvA = big.getAttribute('TEXCOORD_0'), el = [0, 0]; let uv = [0, 0];
      if (uvA) { const I0 = big.getIndices().getArray(); for (let j = 0; j < 3; j++) { uvA.getElement(I0[j], el); uv[0] += el[0] / 3; uv[1] += el[1] / 3; } }
      for (const sem of big.listSemantics()) if (!/^(POSITION|NORMAL|TEXCOORD_0)$/.test(sem)) big.setAttribute(sem, null);
      big.setAttribute('POSITION', big.getAttribute('POSITION').clone().setArray(g.p).setNormalized(false)); const nor = big.getAttribute('NORMAL'); if (nor) big.setAttribute('NORMAL', nor.clone().setArray(g.nr).setNormalized(false));
      if (uvA) { const U = new Float32Array(48); for (let i = 0; i < 24; i++) { U[i * 2] = uv[0]; U[i * 2 + 1] = uv[1]; } big.setAttribute('TEXCOORD_0', uvA.clone().setArray(U).setNormalized(false)); }
      big.setIndices(big.getIndices().clone().setArray(new Uint16Array(g.ix))); for (const p of prims) if (p !== big) p.dispose();
      after += 12; tot.det[1] += 12; nodeBoxes++; boxed += nt; rows.push([name, nt, 12]); continue; } }
  for (const prim of mesh.listPrimitives()) { const idx = prim.getIndices(), pos = prim.getAttribute('POSITION'); if (!idx) continue;
    for (const sem of prim.listSemantics()) if (!/^(POSITION|NORMAL|TEXCOORD_0)$/.test(sem)) prim.setAttribute(sem, null);
    let I = new Uint32Array(idx.getArray()); let P = new Float32Array(pos.getArray()); const n = pos.getCount(); b += I.length / 3;
    if (!KEEP.test(name)) {
      // connected pieces, joined wherever two vertices share a position
      const key = new Map(), rep = new Uint32Array(n), par = new Uint32Array(n); const bits = new Uint32Array(P.buffer, P.byteOffset, n * 3);
      for (let i = 0; i < n; i++) { const k = bits[i * 3] + ',' + bits[i * 3 + 1] + ',' + bits[i * 3 + 2]; let r = key.get(k); if (r === undefined) { r = i; key.set(k, i); } rep[i] = r; par[i] = i; }
      const find = x => { while (par[x] !== x) { par[x] = par[par[x]]; x = par[x]; } return x; };
      for (let t = 0; t < I.length; t += 3) { const r0 = find(rep[I[t]]), r1 = find(rep[I[t + 1]]); if (r1 !== r0) par[r1] = r0; const r2 = find(rep[I[t + 2]]); if (r2 !== r0) par[r2] = r0; }
      const pcs = new Map();
      for (let t = 0; t < I.length; t += 3) { const r = find(rep[I[t]]); let q = pcs.get(r); if (!q) { q = { lo: [1e30, 1e30, 1e30], hi: [-1e30, -1e30, -1e30], tris: [] }; pcs.set(r, q); } q.tris.push(t);
        for (let j = 0; j < 3; j++) { const v = I[t + j]; for (let k = 0; k < 3; k++) { const x = P[v * 3 + k]; if (x < q.lo[k]) q.lo[k] = x; if (x > q.hi[k]) q.hi[k] = x; } } }
      const keepT = [], boxes = [], uvA = prim.getAttribute('TEXCOORD_0'), el = [0, 0];
      for (const q of pcs.values()) { const d = Math.hypot(q.hi[0] - q.lo[0], q.hi[1] - q.lo[1], q.hi[2] - q.lo[2]) * ws;
        if (d < drop) { dropped += q.tris.length; continue; }
        if (d < boxMax && q.tris.length > 12) {      // a small fitting: stand a plain box in for it, in its own colour
          const vs = [...new Set(q.tris.flatMap(t => [rep[I[t]], rep[I[t + 1]], rep[I[t + 2]]]))], { ax, lo, hi } = fitBox(P, vs);
          let best = -1, bt = q.tris[0]; for (const t of q.tris) { const A = I[t] * 3, B = I[t + 1] * 3, Cc = I[t + 2] * 3, u = [P[B] - P[A], P[B + 1] - P[A + 1], P[B + 2] - P[A + 2]], w = [P[Cc] - P[A], P[Cc + 1] - P[A + 1], P[Cc + 2] - P[A + 2]];
            const ar = Math.hypot(u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]); if (ar > best) { best = ar; bt = t; } }
          let uv = [0, 0]; if (uvA) { for (let j = 0; j < 3; j++) { uvA.getElement(I[bt + j], el); uv[0] += el[0] / 3; uv[1] += el[1] / 3; } }
          boxes.push({ ax, lo, hi, uv }); boxed += q.tris.length; tot.boxes++; continue; }
        for (const t of q.tris) keepT.push(I[t], I[t + 1], I[t + 2]); }
      I = new Uint32Array(keepT);
      if (I.length) { const e = (isDet ? ERRD : FINE.test(name) ? ERR * FINEK : ERR) / ws, uv = prim.getAttribute('TEXCOORD_0'), nor = prim.getAttribute('NORMAL'), mat = prim.getMaterial();
        // fittings may be simplified across their own texture seams (they are flat-coloured); hulls may not, so lettering and panel lines stay put
        if (mat && mat.getBaseColorTexture() && uv) { const A = new Float32Array(n * 5), e3 = [0, 0, 0];
          for (let i = 0; i < n; i++) { uv.getElement(i, e3); A[i * 5] = e3[0]; A[i * 5 + 1] = e3[1]; if (nor) { nor.getElement(i, e3); A[i * 5 + 2] = e3[0]; A[i * 5 + 3] = e3[1]; A[i * 5 + 4] = e3[2]; } }
          [I] = MeshoptSimplifier.simplifyWithAttributes(I, P, 3, A, 5, isDet ? [.2, .2, .1, .1, .1] : [1.5, 1.5, .3, .3, .3], null, 0, e, isDet ? ['ErrorAbsolute', 'Permissive'] : ['ErrorAbsolute']);
        } else [I] = MeshoptSimplifier.simplify(I, P, 3, 0, e, isDet ? ['ErrorAbsolute', 'Permissive'] : ['ErrorAbsolute']); }
      if (boxes.length) {      // append the stand-in boxes: 24 corners and 12 triangles each, faces pointing outwards
        const nb = boxes.length, m = n + nb * 24, nor = prim.getAttribute('NORMAL'), uvB = prim.getAttribute('TEXCOORD_0');
        const P2 = new Float32Array(m * 3); P2.set(P); const N2 = nor ? new Float32Array(m * 3) : null, U2 = uvB ? new Float32Array(m * 2) : null, t3 = [0, 0, 0];
        if (nor) for (let i = 0; i < n; i++) { nor.getElement(i, t3); N2.set(t3, i * 3); } if (uvB) for (let i = 0; i < n; i++) { uvB.getElement(i, el); U2[i * 2] = el[0]; U2[i * 2 + 1] = el[1]; }
        const I2 = new Uint32Array(I.length + nb * 36); I2.set(I); let vo = n, io = I.length;
        for (const bx of boxes) { const g = boxArrays(bx); P2.set(g.p, vo * 3); if (N2) N2.set(g.nr, vo * 3); if (U2) for (let j = 0; j < 24; j++) { U2[(vo + j) * 2] = bx.uv[0]; U2[(vo + j) * 2 + 1] = bx.uv[1]; } I2.set(g.ix.map(x => x + vo), io); vo += 24; io += 36; }
        prim.setAttribute('POSITION', pos.clone().setArray(P2)); if (nor) prim.setAttribute('NORMAL', nor.clone().setArray(N2).setNormalized(false)); if (uvB) prim.setAttribute('TEXCOORD_0', uvB.clone().setArray(U2).setNormalized(false));
        I = I2; P = P2; } }
    a += I.length / 3;
    if (!I.length) { prim.dispose(); continue; }
    prim.setIndices(idx.clone().setArray(prim.getAttribute('POSITION').getCount() > 65534 ? new Uint32Array(I) : new Uint16Array(I))); compactPrimitive(prim); }
  before += b; after += a; rows.push([name, b, a]); (isDet ? tot.det : tot.hull)[0] += b; (isDet ? tot.det : tot.hull)[1] += a; }
console.log('hull', tot.hull, 'fittings', tot.det, 'boxes', tot.boxes, 'whole fittings boxed', nodeBoxes);
rows.sort((x, y) => y[2] - x[2]); for (const r of rows.slice(0, +(E.TOP || 30))) console.log(r[0].padEnd(40), String(r[1]).padStart(8), '→', String(r[2]).padStart(7));
console.log('tris', before, '→', after, '(dropped whole:', dropped, 'boxed:', boxed, ') ERR', (ERR * UNIT * 100).toFixed(1), 'cm DROP', (DROP * UNIT * 100).toFixed(0), 'cm');
if (E.DRY) process.exit(0);
await doc.transform(flatten(), join({ keepNamed: false }), prune(), textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [+(E.TEX || 512), +(E.TEX || 512)], quality: 80 }), meshopt({ encoder: MeshoptEncoder, level: E.LVL || 'medium', quantizePosition: 14, quantizeNormal: 8, quantizeTexcoord: 12 }));
await io.write(dst, doc); console.log('wrote', dst);
