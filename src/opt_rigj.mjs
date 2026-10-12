import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, simplify, meshopt, textureCompress, flatten, join } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder, MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';
import sharp from 'sharp';
await MeshoptDecoder.ready; await MeshoptEncoder.ready; await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
  'draco3d.decoder': await draco3d.createDecoderModule(), 'meshopt.decoder':MeshoptDecoder,'meshopt.encoder':MeshoptEncoder});
const [src,dst,ratio]=process.argv.slice(2);
const doc = await io.read(src);
for (const t of doc.getRoot().listTextures()) if (t.listParents().filter(p=>p.propertyType!=='Root').length===0) t.dispose();
if (process.env.DROP) for (const n of doc.getRoot().listNodes()) if (new RegExp(process.env.DROP).test(n.getName())) n.dispose();
for (const e of doc.getRoot().listExtensionsUsed()) if (e.extensionName==='KHR_draco_mesh_compression') e.dispose();
const r=+ratio;
await doc.transform(dedup(), flatten(), join(), weld(), ...(r<1?[simplify({simplifier:MeshoptSimplifier, ratio:r, error:+(process.argv[5]||0.0015)})]:[]), prune(),
  textureCompress({encoder:sharp, targetFormat:'webp', resize:[1024,1024], quality:82}),
  meshopt({encoder:MeshoptEncoder, level:'medium'}));
await io.write(dst, doc);
