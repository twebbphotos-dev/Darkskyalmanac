// Bake every node's transform into its geometry and merge everything into one mesh with one primitive per material.
import { NodeIO, Document } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { MeshoptDecoder } from 'meshoptimizer';
import draco3d from 'draco3dgltf';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'draco3d.decoder': await draco3d.createDecoderModule() });
const doc = await io.read(process.argv[2]), S = +(process.argv[4] || 1), by = new Map();
for (const node of doc.getRoot().listNodes()) { const mesh = node.getMesh(); if (!mesh) continue; const m = node.getWorldMatrix();
  for (const p of mesh.listPrimitives()) { const mat = p.getMaterial(), P = p.getAttribute('POSITION'), N = p.getAttribute('NORMAL'), U = p.getAttribute('TEXCOORD_0'), I = p.getIndices();
    if (!by.has(mat)) by.set(mat, { pos: [], nor: [], uv: [], idx: [], hasUV: !!mat.getBaseColorTexture() }); const g = by.get(mat), base = g.pos.length / 3, e = [0, 0, 0], u = [0, 0];
    for (let i = 0; i < P.getCount(); i++) { P.getElement(i, e); g.pos.push((m[0] * e[0] + m[4] * e[1] + m[8] * e[2] + m[12]) * S, (m[1] * e[0] + m[5] * e[1] + m[9] * e[2] + m[13]) * S, (m[2] * e[0] + m[6] * e[1] + m[10] * e[2] + m[14]) * S);
      if (N) { N.getElement(i, e); const x = m[0] * e[0] + m[4] * e[1] + m[8] * e[2], y = m[1] * e[0] + m[5] * e[1] + m[9] * e[2], z = m[2] * e[0] + m[6] * e[1] + m[10] * e[2], l = Math.hypot(x, y, z) || 1; g.nor.push(x / l, y / l, z / l); } else g.nor.push(0, 1, 0);
      if (U) { U.getElement(i, u); g.uv.push(u[0], u[1]); } else g.uv.push(0, 0); }
    if (I) for (let i = 0; i < I.getCount(); i++) g.idx.push(base + I.getScalar(i)); else for (let i = 0; i < P.getCount(); i++) g.idx.push(base + i); } }
const buf = doc.getRoot().listBuffers()[0], mesh = doc.createMesh('merged');
for (const [mat, g] of by) { const pr = doc.createPrimitive().setMaterial(mat)
    .setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(new Float32Array(g.pos)).setBuffer(buf))
    .setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(new Float32Array(g.nor)).setBuffer(buf))
    .setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint32Array(g.idx)).setBuffer(buf));
  if (g.hasUV) pr.setAttribute('TEXCOORD_0', doc.createAccessor().setType('VEC2').setArray(new Float32Array(g.uv)).setBuffer(buf)); mesh.addPrimitive(pr); }
const scene = doc.getRoot().listScenes()[0]; for (const a of doc.getRoot().listAnimations()) a.dispose(); for (const n of doc.getRoot().listNodes()) n.dispose();
scene.addChild(doc.createNode('merged').setMesh(mesh));
for (const e of doc.getRoot().listExtensionsUsed()) if (e.extensionName === 'KHR_draco_mesh_compression') e.dispose();
await io.write(process.argv[3], doc); console.log('materials', by.size);
