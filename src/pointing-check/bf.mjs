import fs from 'fs';
const S='/home/claude/work/v2/solver/';
const { parseStars } = await import(S+'solver/catalog.js');
const { makeCamera } = await import(S+'solver/solve.js');
const C=S+'catalog/'; const ab=(f)=>{const b=fs.readFileSync(C+f);return b.buffer.slice(b.byteOffset,b.byteOffset+b.length)};
const st=parseStars(ab('stars.bin'));
const det=JSON.parse(fs.readFileSync('det.json')).map(d=>[d[0],d[1]]);
const W=1170,H=1685;
// bright catalog stars (mag<4.5)
const D2R=Math.PI/180;
const cat=[]; for(let i=0;i<st.n;i++){ const m=st.mag[i]/100; if(m<3.6) cat.push([st.ra[i],st.dec[i],m]); }
console.log('cat bright',cat.length, 'sample', st.ra[0], st.dec[0]);
const toV=(ra,dec)=>[Math.cos(dec)*Math.cos(ra),Math.cos(dec)*Math.sin(ra),Math.sin(dec)];
const isDeg = Math.abs(st.dec[0])>3.2 || Math.abs(st.ra[0])>6.3;
const conv=(a)=>isDeg? a*D2R : a;
const V=cat.map(([ra,dec,m])=>[toV(conv(ra),conv(dec)),m]);
// Altair
const alt=toV(conv(isDeg?297.6958:297.6958*D2R), conv(isDeg?8.8683:8.8683*D2R));
const grid=new Map(); const cell=8; for(const [x,y] of det){const k=Math.floor(x/cell)*100003+Math.floor(y/cell); if(!grid.has(k))grid.set(k,[]); grid.get(k).push([x,y]);}
function near(x,y,tol){const gx=Math.floor(x/cell),gy=Math.floor(y/cell);for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){const arr=grid.get((gx+a)*100003+gy+b); if(!arr)continue; for(const [u,v] of arr) if((u-x)**2+(v-y)**2<tol*tol) return true;} return false;}
// rotation: build camera frame so that Altair projects at pixel (ax,ay) with roll r
let best=[];
const ax=621,ay=673;
for(const sw of [35.9]) for(let f=12;f<=40;f+=0.5) for(const flip of [false,true]){
  const cam=makeCamera(W,H,f,sw,flip);
  const pv=cam.toVec(ax,ay); // camera-frame vector of Altair pixel
  for(let r=0;r<360;r+=1){
    // build R: world->camera s.t. alt maps to pv, with roll r about pv
    // world basis: e1=alt, e2 = perpendicular toward north pole
    const z=[0,0,1]; let n=[z[0]-alt[0]*alt[2],z[1]-alt[1]*alt[2],z[2]-alt[2]*alt[2]]; let nl=Math.hypot(...n); n=n.map(x=>x/nl);
    const e3=[alt[1]*n[2]-alt[2]*n[1],alt[2]*n[0]-alt[0]*n[2],alt[0]*n[1]-alt[1]*n[0]];
    // camera basis at pv: c1=pv, c2 = rotated "up"
    const up=[0,1,0]; let u=[up[0]-pv[0]*pv[1],up[1]-pv[1]*pv[1],up[2]-pv[2]*pv[1]]; let ul=Math.hypot(...u); u=u.map(x=>x/ul);
    const w3=[pv[1]*u[2]-pv[2]*u[1],pv[2]*u[0]-pv[0]*u[2],pv[0]*u[1]-pv[1]*u[0]];
    const c=Math.cos(r*D2R), s=Math.sin(r*D2R);
    const c2=u.map((x,i)=>c*x+s*w3[i]), c3=w3.map((x,i)=>c*x-s*u[i]);
    // R maps alt->pv, n->c2, e3->c3 : R = pv*alt^T + c2*n^T + c3*e3^T
    const R=[0,1,2].map(i=>[0,1,2].map(j=>pv[i]*alt[j]+c2[i]*n[j]+c3[i]*e3[j]));
    let hit=0,tot=0;
    for(const [v,m] of V){ const cv=[R[0][0]*v[0]+R[0][1]*v[1]+R[0][2]*v[2],R[1][0]*v[0]+R[1][1]*v[1]+R[1][2]*v[2],R[2][0]*v[0]+R[2][1]*v[1]+R[2][2]*v[2]];
      const p=cam.toPix(cv); if(!p||p[0]<10||p[1]<10||p[0]>W-10||p[1]>H*0.68) continue; tot++; if(near(p[0],p[1],6)) hit++; }
    if(tot>=8) best.push([hit/tot,hit,tot,f,r,flip]);
  }
}
best.sort((a,b)=>b[0]-a[0]||b[1]-a[1]); console.log(best.slice(0,8));
