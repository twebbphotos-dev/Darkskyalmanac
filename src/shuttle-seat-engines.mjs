// Space Shuttle: seat the five engine bells in their sockets. They were placed by eye when the orbiter was assembled from
// NASA's loose parts and ended up floating behind the tail. Positions measured from the orbiter's own heat-shield domes.
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {dequantize, meshopt, prune} from '@gltf-transform/functions';
import {MeshoptDecoder, MeshoptEncoder} from 'meshoptimizer';
await MeshoptDecoder.ready; await MeshoptEncoder.ready;
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder,'meshopt.encoder':MeshoptEncoder});
const [src,dst]=process.argv.slice(2); const doc=await io.read(src);
await doc.transform(dequantize());
const MOVE={ top:[46,-28,0], low:[28,-3,0], oms:[88,-14,0] }; const count={top:0,low:0,oms:0};
const inv3=(m)=>{ const a=m[0],b=m[1],c=m[2],d=m[4],e=m[5],f=m[6],g=m[8],h=m[9],i=m[10]; const det=a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g); return [(e*i-f*h)/det,(c*h-b*i)/det,(b*f-c*e)/det,(f*g-d*i)/det,(a*i-c*g)/det,(c*d-a*f)/det,(d*h-e*g)/det,(b*g-a*h)/det,(a*e-b*d)/det]; };
for(const n of doc.getRoot().listNodes()){ if(!/^eng/.test(n.getName())||!n.getMesh()) continue; const W=n.getWorldMatrix(), I=inv3(W);
  for(const p of n.getMesh().listPrimitives()){ const P=p.getAttribute('POSITION'), A=new Float32Array(P.getArray()), v=[0,0,0];
    for(let k=0;k<P.getCount();k++){ v[0]=A[k*3]; v[1]=A[k*3+1]; v[2]=A[k*3+2];
      const y=W[1]*v[0]+W[5]*v[1]+W[9]*v[2]+W[13], z=W[2]*v[0]+W[6]*v[1]+W[10]*v[2]+W[14];
      const g = (Math.abs(z)>55 && y>70) ? 'oms' : y>40 ? 'top' : 'low', d=MOVE[g]; count[g]++;
      // world-space shift → the mesh's own space (column-major 3×3 inverse)
      A[k*3]+=I[0]*d[0]+I[3]*d[1]+I[6]*d[2]; A[k*3+1]+=I[1]*d[0]+I[4]*d[1]+I[7]*d[2]; A[k*3+2]+=I[2]*d[0]+I[5]*d[1]+I[8]*d[2]; }
    P.setArray(A); } }
console.log('moved vertices', count);
await doc.transform(prune(), meshopt({encoder:MeshoptEncoder, level:'medium', quantizePosition:14, quantizeNormal:8, quantizeTexcoord:12}));
await io.write(dst,doc); console.log('wrote',dst);
