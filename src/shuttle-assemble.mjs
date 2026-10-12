// Space Shuttle: NASA ships the textured orbiter as loose pieces. Put them back together.
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {mergeDocuments, unpartition, prune} from '@gltf-transform/functions';
import {MeshoptDecoder} from 'meshoptimizer';
import draco3d from 'draco3dgltf';
import fs from 'fs';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder,'draco3d.decoder': await draco3d.createDecoderModule()});
const D='/tmp/claude-0/sts/', cfg=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const doc=await io.read(D+'shuttle_D.glb'); const scene=doc.getRoot().listScenes()[0];
for (const a of doc.getRoot().listAnimations()) a.dispose();
const zup=[1,0,0,0, 0,0,-1,0, 0,1,0,0, 0,0,0,1];
const root=doc.createNode('orbiter').setMatrix(zup); for(const c of scene.listChildren()){ scene.removeChild(c); root.addChild(c); } scene.addChild(root);
for(const p of cfg.parts){ const d=await io.read(D+p.file); for (const a of d.getRoot().listAnimations()) a.dispose();
  const map=mergeDocuments(doc,d); const sc=doc.getRoot().listScenes().find(s=>s!==scene);
  const holder=doc.createNode(p.name); if(p.t) holder.setTranslation(p.t); if(p.r) holder.setRotation(p.r); if(p.s) holder.setScale(p.s);
  const pivot=doc.createNode(p.name+'_pivot'); if(p.pivot) pivot.setTranslation(p.pivot.map(v=>-v)); holder.addChild(pivot);
  for(const c of sc.listChildren()){ sc.removeChild(c); (p.raw? pivot : pivot).addChild(c); } sc.dispose();
  // holder is expressed in the orbiter's own (z-up) frame unless p.world
  (p.world? scene : root).addChild(holder); }
for (const m of doc.getRoot().listMaterials()) { const n=m.getName();
  if (/^doors|shut-doors/.test(n)) m.setDoubleSided(true);
  if (n==='doors inside') m.setBaseColorFactor([.80,.82,.84,1]).setMetallicFactor(.55).setRoughnessFactor(.32);      // the inner faces are the silvered radiator panels
  if (/shut-doors/.test(n) || n==='doors edge') m.setBaseColorFactor([.9,.9,.9,1]);
  if (/^default#/.test(n)) m.setBaseColorFactor([.4,.4,.4,1]); }
for (const e of doc.getRoot().listExtensionsUsed()) if (e.extensionName==='KHR_draco_mesh_compression') e.dispose();
for (const t of doc.getRoot().listTextures()) if (t.listParents().filter(p=>p.propertyType!=='Root').length===0) t.dispose();
await doc.transform(unpartition(), prune());
await io.write(process.argv[3],doc); console.log('wrote',process.argv[3]);
