// Space Shuttle: NASA's model gives two stretches of fuselage side wall the wrong material. The starboard wall wears the
// port side's texture (so "United States" reads backwards) and part of the port wall wears the plain grey of the bay's
// inner rail (a blank patch over the lettering). Give each stretch the texture made for it.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dequantize, meshopt, prune } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';
await MeshoptDecoder.ready; await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });
const [src, dst] = process.argv.slice(2), doc = await io.read(src); await doc.transform(dequantize());
const buf = doc.getRoot().listBuffers()[0], M = n => doc.getRoot().listMaterials().find(m => m.getName() === n), body = doc.getRoot().listNodes().find(n => /^shut/.test(n.getName())), W = body.getWorldMatrix();
const prim = n => body.getMesh().listPrimitives().find(q => q.getMaterial().getName() === n);
const wpos = (P, i) => { const v = [0, 0, 0]; P.getElement(i, v); return [W[0] * v[0] + W[4] * v[1] + W[8] * v[2] + W[12], W[1] * v[0] + W[5] * v[1] + W[9] * v[2] + W[13], W[2] * v[0] + W[6] * v[1] + W[10] * v[2] + W[14]]; };
const outer = (w, side) => { const e1 = w[1].map((q, k) => q - w[0][k]), e2 = w[2].map((q, k) => q - w[0][k]), nz = e1[0] * e2[1] - e1[1] * e2[0], cz = (w[0][2] + w[1][2] + w[2][2]) / 3;
  return Math.abs(cz) > 105 && cz * side > 0 && nz * side > 0 && Math.abs(nz) > .6 * Math.hypot(e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], nz); };      // on the outer wall of that side, facing outwards
// 1. starboard wall: swap the port texture for the starboard one (same layout, lettering the right way round)
{ const p = prim('side prt'), P = p.getAttribute('POSITION'), I = p.getIndices(), A = I.getArray(), keep = [], move = [];
  for (let t = 0; t < A.length; t += 3) (outer([0, 1, 2].map(j => wpos(P, A[t + j])), 1) ? move : keep).push(A[t], A[t + 1], A[t + 2]);
  console.log('starboard wall:', move.length / 3, 'triangles re-textured');
  I.setArray(new A.constructor(keep)); body.getMesh().addPrimitive(p.clone().setMaterial(M('side stb')).setIndices(doc.createAccessor().setType('SCALAR').setArray(new A.constructor(move)).setBuffer(buf))); }
// 2. port wall: the blank stretch has no texture coordinates at all. It is the mirror image of the starboard wall, so take
//    each corner's coordinates from its twin on the other side.
{ const twins = []; for (const p of body.getMesh().listPrimitives()) { if (!/^side (stb|prt)$/.test(p.getMaterial().getName())) continue; const P = p.getAttribute('POSITION'), U = p.getAttribute('TEXCOORD_0'), A = p.getIndices().getArray(), u = [0, 0];
    for (let t = 0; t < A.length; t += 3) { const w = [0, 1, 2].map(j => wpos(P, A[t + j])); if (!outer(w, 1)) continue; for (let j = 0; j < 3; j++) { U.getElement(A[t + j], u); twins.push([w[j], [u[0], u[1]]]); } } }
  const twin = w => { let best = null, bd = 1e9; for (const [q, uv] of twins) { const d = Math.hypot(q[0] - w[0], q[1] - w[1], q[2] + w[2]); if (d < bd) { bd = d; best = uv; } } return bd < 2.5 ? best : null; };
  const p = prim('bay prt evarail'), P = p.getAttribute('POSITION'), N = p.getAttribute('NORMAL'), I = p.getIndices(), A = I.getArray(), keep = [], pos = [], nor = [], uvs = [], v = [0, 0, 0];
  for (let t = 0; t < A.length; t += 3) { const w = [0, 1, 2].map(j => wpos(P, A[t + j])), uv = outer(w, -1) ? w.map(twin) : [null];
    if (uv.some(q => !q)) { keep.push(A[t], A[t + 1], A[t + 2]); continue; }
    for (let j = 0; j < 3; j++) { P.getElement(A[t + j], v); pos.push(...v); N.getElement(A[t + j], v); nor.push(...v); uvs.push(...uv[j]); } }
  console.log('port wall:', pos.length / 9, 'blank triangles textured');
  I.setArray(new A.constructor(keep)); const acc = (type, arr) => doc.createAccessor().setType(type).setArray(new Float32Array(arr)).setBuffer(buf);
  body.getMesh().addPrimitive(doc.createPrimitive().setMaterial(M('side prt')).setAttribute('POSITION', acc('VEC3', pos)).setAttribute('NORMAL', acc('VEC3', nor)).setAttribute('TEXCOORD_0', acc('VEC2', uvs)).setIndices(doc.createAccessor().setType('SCALAR').setArray(Uint16Array.from({ length: pos.length / 3 }, (_, i) => i)).setBuffer(buf))); }
await doc.transform(prune(), meshopt({ encoder: MeshoptEncoder, level: 'medium', quantizePosition: 14, quantizeNormal: 8, quantizeTexcoord: 12 }));
await io.write(dst, doc); console.log('wrote', dst);
