// Space Shuttle: make the two payload bay doors separate parts on their hinge lines, with one animation: shut → open.
// As on the real orbiter the starboard door opens first and the port door follows (and they close in the reverse order).
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dequantize, meshopt, prune } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';
await MeshoptDecoder.ready; await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });
const [src, dst] = process.argv.slice(2), doc = await io.read(src); await doc.transform(dequantize());
const buf = doc.getRoot().listBuffers()[0], scene = doc.getRoot().listScenes()[0], old = doc.getRoot().listNodes().find(n => /^door/.test(n.getName())), W = old.getWorldMatrix();
const OPEN = 150, T = 8, doors = [{ name: 'door_stb', hinge: [0, 2, 102], sgn: 1, t0: 0, t1: 4.6 }, { name: 'door_port', hinge: [0, 2, -102], sgn: -1, t0: 3.4, t1: 8 }];
const nmat = [W[0], W[1], W[2], W[4], W[5], W[6], W[8], W[9], W[10]], det = W[0] * (W[5] * W[10] - W[6] * W[9]) - W[1] * (W[4] * W[10] - W[6] * W[8]) + W[2] * (W[4] * W[9] - W[5] * W[8]), sc = Math.cbrt(Math.abs(det));
for (const d of doors) { const mesh = doc.createMesh(d.name);
  for (const p of old.getMesh().listPrimitives()) { const P = p.getAttribute('POSITION'), N = p.getAttribute('NORMAL'), U = p.getAttribute('TEXCOORD_0'), I = p.getIndices().getArray(), v = [0, 0, 0], map = new Map(), pos = [], nor = [], uv = [], idx = [];
    const wp = i => { P.getElement(i, v); return [W[0] * v[0] + W[4] * v[1] + W[8] * v[2] + W[12], W[1] * v[0] + W[5] * v[1] + W[9] * v[2] + W[13], W[2] * v[0] + W[6] * v[1] + W[10] * v[2] + W[14]]; };
    for (let t = 0; t < I.length; t += 3) { const tri = [wp(I[t]), wp(I[t + 1]), wp(I[t + 2])]; if ((tri[0][2] + tri[1][2] + tri[2][2]) * d.sgn <= 0) continue;
      for (let j = 0; j < 3; j++) { const i = I[t + j]; let k = map.get(i); if (k === undefined) { k = pos.length / 3; map.set(i, k); pos.push(tri[j][0] - d.hinge[0], tri[j][1] - d.hinge[1], tri[j][2] - d.hinge[2]);
          if (N) { N.getElement(i, v); nor.push((nmat[0] * v[0] + nmat[3] * v[1] + nmat[6] * v[2]) / sc, (nmat[1] * v[0] + nmat[4] * v[1] + nmat[7] * v[2]) / sc, (nmat[2] * v[0] + nmat[5] * v[1] + nmat[8] * v[2]) / sc); }
          if (U) { const u = [0, 0]; U.getElement(i, u); uv.push(u[0], u[1]); } } idx.push(k); } }
    if (!idx.length) continue;
    const q = doc.createPrimitive().setMaterial(p.getMaterial()).setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(new Float32Array(pos)).setBuffer(buf)).setIndices(doc.createAccessor().setType('SCALAR').setArray(pos.length / 3 > 65535 ? new Uint32Array(idx) : new Uint16Array(idx)).setBuffer(buf));
    if (N) q.setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(new Float32Array(nor)).setBuffer(buf)); if (U) q.setAttribute('TEXCOORD_0', doc.createAccessor().setType('VEC2').setArray(new Float32Array(uv)).setBuffer(buf)); mesh.addPrimitive(q); }
  d.node = doc.createNode(d.name).setTranslation(d.hinge).setMesh(mesh); scene.addChild(d.node); }
old.dispose();
// the model's doors stand open; shut is the same swing run backwards
const anim = doc.createAnimation('doors'), K = 25;
for (const d of doors) { const times = new Float32Array(K), out = new Float32Array(K * 4);
  for (let i = 0; i < K; i++) { const t = T * i / (K - 1), k = Math.max(0, Math.min(1, (t - d.t0) / (d.t1 - d.t0))), e = k * k * (3 - 2 * k), a = -d.sgn * OPEN * (1 - e) * Math.PI / 180; times[i] = t; out.set([Math.sin(a / 2), 0, 0, Math.cos(a / 2)], i * 4); }
  const smp = doc.createAnimationSampler().setInput(doc.createAccessor().setType('SCALAR').setArray(times).setBuffer(buf)).setOutput(doc.createAccessor().setType('VEC4').setArray(out).setBuffer(buf)).setInterpolation('LINEAR');
  anim.addSampler(smp).addChannel(doc.createAnimationChannel().setTargetNode(d.node).setTargetPath('rotation').setSampler(smp)); }
await doc.transform(prune(), meshopt({ encoder: MeshoptEncoder, level: 'medium', quantizePosition: 14, quantizeNormal: 8, quantizeTexcoord: 12 }));
await io.write(dst, doc); console.log('wrote', dst);
