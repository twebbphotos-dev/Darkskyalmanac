import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { weld, prune, dedup } from '@gltf-transform/functions';
import draco3d from 'draco3dgltf';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
import fs from 'fs';
const [,, inp, jpg, out] = process.argv;
await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'draco3d.decoder': await draco3d.createDecoderModule(), 'draco3d.encoder': await draco3d.createEncoderModule(), 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });
const doc = await io.read(inp);
const root = doc.getRoot();
for (const e of root.listExtensionsUsed()) if (e.extensionName === 'KHR_draco_mesh_compression' || e.extensionName === 'EXT_texture_webp') e.dispose();
const suit = fs.readFileSync(jpg);
const mats = root.listMaterials();
console.log(mats.map(m => [m.getName(), m.getBaseColorTexture() && m.getBaseColorTexture().getMimeType(), m.getBaseColorTexture() && m.getBaseColorTexture().getImage().byteLength]));
// the suit material: the big texture; the visor keeps its own small one
const big = mats.map(m => m.getBaseColorTexture()).filter(Boolean).sort((a, b) => b.getImage().byteLength - a.getImage().byteLength)[0];
for (const m of mats) { const t = m.getBaseColorTexture(); if (t && t.getImage().byteLength < 10000 && m.getName() === 'astnt1_1') console.log('small on suit?', m.getName()); }
const nt = doc.createTexture('suit').setImage(suit).setMimeType('image/jpeg');
for (const m of mats) { const t = m.getBaseColorTexture(); if (t === big || (t && t.getMimeType() === 'image/webp' && t.getImage().byteLength > 10000)) m.setBaseColorTexture(nt); }
for (const t of root.listTextures()) if (t.getMimeType() === 'image/webp') t.setImage(fs.readFileSync(process.argv[5])).setMimeType('image/png');
await doc.transform(weld(), dedup(), prune());
doc.createExtension(EXTMeshoptCompression).setRequired(true).setEncoderOptions({ method: EXTMeshoptCompression.EncoderMethod.QUANTIZE });
await io.write(out, doc);
console.log(root.listTextures().map(t => [t.getName(), t.getMimeType(), t.getImage().byteLength]));
