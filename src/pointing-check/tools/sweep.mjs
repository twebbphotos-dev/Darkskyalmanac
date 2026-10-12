/* Sensitivity sweep: vary one degradation factor at a time to find the
 * solver's real operating envelope, at 300mm half-res and 50mm half-res. */
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
import { parseStars, parseQuads, starVec, starsNear } from '../solver/catalog.js';
import { solve, makeCamera, fieldAngles } from '../solver/solve.js';
import { radecToVec, matApply, angsep } from '../solver/geom.js';
const HERE=path.dirname(fileURLToPath(import.meta.url)), CAT=path.join(HERE,'..','catalog');
const ab=f=>{const b=fs.readFileSync(f);return b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength);};
const man=JSON.parse(fs.readFileSync(path.join(CAT,'manifest.json'),'utf8'));
const stars=parseStars(ab(path.join(CAT,'stars.bin')));
const layers=man.layers.map(L=>({name:L.name,dmin:L.dmin,dmax:L.dmax,density:L.density,
  quads:parseQuads(ab(path.join(CAT,L.file)))}));
const D2R=Math.PI/180,R2D=180/Math.PI;
let seed=777; const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
const gauss=()=>{let u=0,v=0;while(!u)u=rnd();while(!v)v=rnd();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);};
function tm(ra,dec,roll){const b=radecToVec(ra,dec);
  let n=[-b[0]*b[2],-b[1]*b[2],1-b[2]*b[2]];const nn=Math.hypot(...n);n=n.map(x=>x/nn);
  const x0=[n[1]*b[2]-n[2]*b[1],n[2]*b[0]-n[0]*b[2],n[0]*b[1]-n[1]*b[0]];
  const R0=[x0,n,b];const p=-roll*D2R,c=Math.cos(p),s=Math.sin(p);
  return [[c*R0[0][0]-s*R0[1][0],c*R0[0][1]-s*R0[1][1],c*R0[0][2]-s*R0[1][2]],
          [s*R0[0][0]+c*R0[1][0],s*R0[0][1]+c*R0[1][1],s*R0[0][2]+c*R0[1][2]],R0[2]];}
const SW=35.9;
function trial(cfg){
  const {W,H,F,pixNoise,dropFrac,spurious,fluxNoise,focalErr,magLimit}=cfg;
  const ra=rnd()*2*Math.PI, dec=Math.asin(rnd()*2-1), roll=rnd()*360;
  const trueF=F*(1+focalErr*(rnd()*2-1));
  const cam=makeCamera(W,H,trueF,SW,false), fov=fieldAngles(W,H,trueF,SW);
  const R=tm(ra,dec,roll), b=radecToVec(ra,dec);
  const near=starsNear(stars,b,(fov.diag/2)*D2R);
  const det=[];
  for(const i of near){ const mag=stars.mag[i]/100; if(mag>magLimit) continue;
    const p=cam.toPix(matApply(R,starVec(stars,i))); if(!p) continue;
    const x=p[0]+gauss()*pixNoise, y=p[1]+gauss()*pixNoise;
    if(x<5||y<5||x>W-5||y>H-5) continue; if(rnd()<dropFrac) continue;
    det.push({x,y,flux:Math.max(1e-9,Math.pow(10,-0.4*mag)*(1+gauss()*fluxNoise))}); }
  if(det.length<10) return null;
  const faint=Math.min(...det.map(d=>d.flux));
  for(let k=0;k<spurious;k++) det.push({x:10+rnd()*(W-20),y:10+rnd()*(H-20),flux:faint*(0.6+rnd()*3)});
  det.sort((a,c)=>c.flux-a.flux);
  const sol=solve({detected:det,width:W,height:H,focalMm:F,sensorWidthMm:SW,stars,layers});
  if(!sol.ok) return {ok:false,ms:sol.ms};
  const err=angsep(radecToVec(ra,dec),sol.boresight)*R2D;
  return {ok:err<0.05,ms:sol.ms};
}
const N=Number(process.argv[2]||25);
const BASE={W:3000,H:2000,F:300,pixNoise:0.6,dropFrac:0.15,spurious:12,fluxNoise:0.25,focalErr:0,magLimit:9.0};
const SWEEPS=[
  ['pixNoise',[0.3,0.6,1.0,1.5,2.5]],
  ['dropFrac',[0.0,0.15,0.3,0.45,0.6]],
  ['spurious',[0,12,40,100,250]],
  ['fluxNoise',[0.1,0.25,0.45,0.8,1.2]],
  ['focalErr',[0,0.01,0.025,0.04,0.07]],
  ['magLimit',[9.0,8.5,8.0,7.5,7.0]],
];
for(const F of [300,50]){
  console.log(`\n### ${F}mm half-res (one factor varied, others at realistic baseline)`);
  for(const [k,vals] of SWEEPS){
    const row=[];
    for(const v of vals){ let ok=0,n=0;
      for(let t=0;t<N;t++){ const r=trial({...BASE,F,[k]:v}); if(!r) continue; n++; if(r.ok) ok++; }
      row.push(`${k==='magLimit'?'mag<=':''}${v}: ${n?Math.round(100*ok/n):0}%`); }
    console.log(`  ${k.padEnd(10)} ${row.join('   ')}`);
  }
}
