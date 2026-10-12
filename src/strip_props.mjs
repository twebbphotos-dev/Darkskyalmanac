import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {prune} from '@gltf-transform/functions';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc=await io.read(process.argv[2]); let n=0;
// NASA's Blender scene carries helper geometry: pivot cubes, camera markers, a fake shadow card and a display pedestal
for(const node of doc.getRoot().listNodes()){ const m=node.getMesh(); if(!m) continue;
  const mats=m.listPrimitives().map(p=>p.getMaterial()?.getName()||'');
  if(mats.every(x=>x===''||x==='pivot'||x==='shadow2')){ node.setMesh(null); n++; } }
await doc.transform(prune({keepLeaves:true}));
console.log('removed helper meshes',n); await io.write(process.argv[3],doc);
