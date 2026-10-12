import fs from 'fs';
const S='/home/claude/work/v2/solver/';
const { parseStars } = await import(S+'solver/catalog.js');
const { makeCamera } = await import(S+'solver/solve.js');
const { wahba, matApply, angsep, vnorm } = await import(S+'solver/geom.js');
const C=S+'catalog/'; const ab=(f)=>{const b=fs.readFileSync(C+f);return b.buffer.slice(b.byteOffset,b.byteOffset+b.length)};
const st=parseStars(ab('stars.bin'));
const det=JSON.parse(fs.readFileSync('det.json'));
const W=2576,H=1738;
const nearDet=(x,y,r)=>det.map((d,i)=>[Math.hypot(d[0]-x,d[1]-y),i,d]).filter(a=>a[0]<r).sort((a,b)=>b[2][2]-a[2][2])[0];
const A=nearDet(129,1314,40), T=nearDet(1715,735,40);
console.log('anchors',A&&A[2].slice(0,3),T&&T[2].slice(0,3));
const D2R=Math.PI/180; const v=(raH,dec)=>{const r=raH*15*D2R,d=dec*D2R;return [Math.cos(d)*Math.cos(r),Math.cos(d)*Math.sin(r),Math.sin(d)]};
const vA=v(5+40/60+45.5/3600,-(1+56/60+34/3600)), vT=v(5+35/60+16.5/3600,-(5+23/60+23/3600));
const s=angsep(vA,vT); console.log('sep deg',s/D2R);
for(const flip of [false,true]){
  let best=null;
  for(let f=250;f<=500;f+=0.25){ const cam=makeCamera(W,H,f,35.9,flip); const a=cam.toVec(A[2][0],A[2][1]), t=cam.toVec(T[2][0],T[2][1]); const e=Math.abs(angsep(a,t)-s); if(!best||e<best[0]) best=[e,f]; }
  const f=best[1]; const cam=makeCamera(W,H,f,35.9,flip);
  const R=wahba([cam.toVec(A[2][0],A[2][1]),cam.toVec(T[2][0],T[2][1])],[vA,vT]);
  // count catalog stars matching detections
  let hit=0,tot=0,errs=[]; const mags=[];
  for(let i=0;i<st.n;i++){ const m=st.mag[i]/100; if(m>8.5) continue; const w=[Math.cos(st.dec[i])*Math.cos(st.ra[i]),Math.cos(st.dec[i])*Math.sin(st.ra[i]),Math.sin(st.dec[i])];
    const p=cam.toPix(matApply(R,w)); if(!p||p[0]<0||p[1]<0||p[0]>W||p[1]>H) continue; tot++;
    let bd=1e9; for(const d of det){const e=Math.hypot(d[0]-p[0],d[1]-p[1]); if(e<bd) bd=e;} if(bd<6){hit++;errs.push(bd);} mags.push(m); }
  console.log('flip',flip,'f',f.toFixed(1),'catalog in frame (mag<8.5)',tot,'matched',hit,'mean err',(errs.reduce((a,b)=>a+b,0)/Math.max(1,errs.length)).toFixed(2));
}
