// Reduce a rock-build.py glTF to about <faces> triangles (keeping the scan's own normals) then quantize and meshopt-compress it.
//   node rock-simplify.mjs in.glb out.glb 120000
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { weld, simplify, prune, dedup, meshopt } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder, MeshoptSimplifier } from 'meshoptimizer';
const [,, inp, out, faces] = process.argv;
await MeshoptEncoder.ready; await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });
const doc = await io.read(inp);
const prim = doc.getRoot().listMeshes()[0].listPrimitives()[0], n = prim.getIndices().getCount() / 3;
await doc.transform(weld({}), simplify({ simplifier: MeshoptSimplifier, ratio: Math.min(1, +faces / n), error: 0.001 }), dedup(), prune(), meshopt({ encoder: MeshoptEncoder, level: 'medium' }));
console.log(out, Math.round(n), '->', prim.getIndices().getCount() / 3, 'faces');
await io.write(out, doc);
