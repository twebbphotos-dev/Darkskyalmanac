(function(){
"use strict";
var $=function(id){return document.getElementById(id)};
var D2R=Math.PI/180, R2D=180/Math.PI, DAY=86400000, AU=149597870.7;
var L=ZCLTZ.loc(), TZ=L.tz;
function dot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}
function len(a){return Math.sqrt(dot(a,a))}
/* Mars as seen from Earth at time t — JPL mean elements (good to a few
   hundredths of an arcsecond in size and a day or so in dates). */
function mars(t){
  var v=ZCLSeason.vec('Mars',t), P=v.P, E=v.E, g=[P[0]-E[0],P[1]-E[1],P[2]-E[2]], r=len(P), d=len(g);
  var ca=Math.max(-1,Math.min(1,dot(P,g)/(r*d))), a=Math.acos(ca)*R2D;
  var rd=ZCLSeason.radec(g), sd=ZCLSeason.radec([-E[0],-E[1],-E[2]]);
  var el=Math.acos(Math.max(-1,Math.min(1,-dot(g,E)/(d*len(E)))))*R2D;
  var dra=sd[0]-rd[0], pa=Math.atan2(Math.cos(sd[1])*Math.sin(dra), Math.sin(sd[1])*Math.cos(rd[1])-Math.cos(sd[1])*Math.sin(rd[1])*Math.cos(dra));
  return {t:t, r:r, d:d, phase:a, lit:(1+ca)/2, ra:rd[0], dec:rd[1], sun:sd, elong:el, pa:pa,
    size:2*3396.2/(d*AU)*206264.8, mag:-1.601+5*Math.log10(r*d)+0.02267*a-0.0001302*a*a};
}
function alt(t,ra,dec){
  var lst=(280.46061837+360.98564736629*(t/DAY+2440587.5-2451545)+L.lng)*D2R, H=lst-ra, la=L.lat*D2R;
  return Math.asin(Math.sin(la)*Math.sin(dec)+Math.cos(la)*Math.cos(dec)*Math.cos(H));
}
function fmtT(d){return ZCLTZ.fmtTime(d,TZ)}
function fmtD(d,y){return ZCLTZ.fmtDate(d,y?{month:'short',day:'numeric',year:'numeric'}:{month:'short',day:'numeric'},TZ)}
function fmtMY(d){return ZCLTZ.fmtDate(d,{month:'short',year:'numeric'},TZ)}

/* ── Oppositions and the size curve for the next ten years ── */
var NOW=Date.now(), series=[], opps=[];
(function(){
  var prev=null, prev2=null;
  for(var t=NOW-60*DAY;t<NOW+3700*DAY;t+=DAY){
    var m=mars(t);
    if((t-NOW)%(4*DAY)===0||series.length===0) series.push(m);
    if(prev2&&prev.elong>prev2.elong&&prev.elong>=m.elong&&prev.elong>170){
      // closest approach falls within a couple of weeks of opposition
      var best=prev; for(var k=-20;k<=20;k++){ var q=mars(prev.t+k*DAY); if(q.size>best.size) best=q; }
      // the opposition itself: the hour Mars sits exactly opposite the Sun along the ecliptic
      var dl=function(tt){ var w=ZCLSeason.vec('Mars',tt), a=(Math.atan2(w.P[1]-w.E[1],w.P[0]-w.E[0])-Math.atan2(-w.E[1],-w.E[0]))*R2D; return ((a%360)+360)%360-180; };
      var lo=prev.t-3*DAY, hi=prev.t+3*DAY, ot=prev.t; if(dl(lo)*dl(hi)<0){ for(var b=0;b<40;b++){ var mid=(lo+hi)/2; if(dl(lo)*dl(mid)<=0) hi=mid; else lo=mid; } ot=(lo+hi)/2; }
      if(ot>NOW-30*DAY) opps.push({t:ot, m:best});
    }
    prev2=prev; prev=m;
  }
})();
var nowM=mars(NOW), nextOpp=opps.filter(function(o){return o.t>NOW-3*DAY})[0];
var bestOpp=opps.reduce(function(a,o){return !a||o.m.size>a.m.size?o:a},null);

/* ── Hero: the photo, shaded to the phase and drawn to relative scale ── */
var img=new Image(); img.src='img/mars.jpg';
var OPTS=[{lab:'Tonight',m:nowM,when:'Tonight'}];
if(nextOpp) OPTS.push({lab:fmtMY(new Date(nextOpp.t)),m:mars(nextOpp.t),when:'Opposition · '+fmtD(new Date(nextOpp.t),1),best:nextOpp.m});
if(bestOpp&&bestOpp!==nextOpp) OPTS.push({lab:fmtMY(new Date(bestOpp.t)),m:mars(bestOpp.t),when:'Opposition · '+fmtD(new Date(bestOpp.t),1),best:bestOpp.m});
var sel=0, maxSize=Math.max.apply(null,OPTS.map(function(o){return (o.best||o.m).size}));
$('mr-sizes').innerHTML=OPTS.map(function(o,i){return '<button class="zcl-vbtn'+(i===0?' on':'')+'" data-i="'+i+'"><span class="l">'+o.lab+'</span><span class="s">'+o.lab+'</span></button>'}).join('');
[].forEach.call($('mr-sizes').children,function(b){ b.addEventListener('click',function(){ sel=+b.dataset.i;
  [].forEach.call($('mr-sizes').children,function(x){x.classList.toggle('on',x===b)}); drawHero(); }); });
function smooth(a,b,x){var t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t)}
function disc(R,m){
  var c=document.createElement('canvas'); c.width=c.height=2*R+2; var x=c.getContext('2d');
  var SC=399.5, SCY=399, SR=340;                         // the disc inside the photo
  x.drawImage(img,SC-SR,SCY-SR,2*SR,2*SR,1,1,2*R,2*R);
  var id=x.getImageData(0,0,c.width,c.height), p=id.data, ca=Math.cos(m.phase*D2R);
  var sx=-Math.sin(m.pa), sy=-Math.cos(m.pa);           // toward the Sun on screen (north up, east left)
  var edge=Math.max(.012,1.5/R);
  for(var j=0;j<c.height;j++) for(var i=0;i<c.width;i++){
    var nx=(i-1-R+.5)/R, ny=(j-1-R+.5)/R, rr=nx*nx+ny*ny, o=(j*c.width+i)*4;
    var cov=smooth(1+edge,1-edge,Math.sqrt(rr)); if(cov<=0){p[o+3]=0;continue;}
    var u=nx*sx+ny*sy, v=-nx*sy+ny*sx, term=-ca*Math.sqrt(Math.max(0,1-v*v));
    var lit=smooth(term-.035,term+.035,u), k=.035+.965*lit;
    var haze=Math.pow(Math.min(1,rr),6)*.35*lit;             // thin bright limb haze on the sunlit edge
    p[o]=Math.min(255,p[o]*k+200*haze); p[o+1]=Math.min(255,p[o+1]*k+190*haze); p[o+2]=Math.min(255,p[o+2]*k+205*haze); p[o+3]=255*cov;
  }
  x.putImageData(id,0,0); return c;
}
function drawHero(){
  var cv=$('mr-cv'), dpr=Math.min(2,window.devicePixelRatio||1), W=Math.round(cv.clientWidth*dpr), H=Math.round(cv.clientHeight*dpr);
  if(!W||!H) return; cv.width=W; cv.height=H; var ctx=cv.getContext('2d');
  var o=OPTS[sel], m=o.best||o.m, lit=o.best?o.best:o.m;
  var R=Math.max(3*dpr, Math.min(W,H)*.4*m.size/maxSize);
  if(img.complete&&img.naturalWidth){
    var d=disc(Math.round(R),lit);
    ctx.save(); ctx.shadowColor='rgba(217,120,70,.35)'; ctx.shadowBlur=R*.35;
    ctx.drawImage(d,W/2-d.width/2,H/2-d.height/2); ctx.restore();
  }
  // faint ring showing the biggest size, for comparison
  if(sel!==OPTS.length-1||OPTS.length===1){ var Rm=Math.min(W,H)*.4; ctx.strokeStyle='rgba(203,168,90,.22)'; ctx.setLineDash([4*dpr,6*dpr]); ctx.lineWidth=dpr;
    ctx.beginPath(); ctx.arc(W/2,H/2,Rm,0,7); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle='rgba(203,168,90,.5)'; ctx.font=Math.round(10*dpr)+'px Montserrat, sans-serif'; ctx.textAlign='center';
    ctx.fillText('size at '+OPTS[OPTS.length-1].lab, W/2, H/2+Rm+14*dpr); }
  $('mr-tl').innerHTML=o.when+'<b>'+m.size.toFixed(1)+'″ across · '+Math.round(lit.lit*100)+'% lit</b>';
  $('mr-tr').innerHTML='Distance<b>'+Math.round(m.d*AU/1e6)+' million km</b>';
}
img.onload=drawHero; window.addEventListener('resize',function(){drawHero();drawChart();});
$('mr-note').innerHTML='Mars in true colour, photographed from space — shaded to its phase and drawn to <b>relative size</b>. Tonight it is '+nowM.size.toFixed(1)+'″ across; at '+(bestOpp?fmtMY(new Date(bestOpp.t)):'its best')+'’s opposition it will be '+(bestOpp?bestOpp.m.size.toFixed(1):'')+'″, about '+(bestOpp?(bestOpp.m.size/nowM.size).toFixed(1):'')+' times wider.';

/* ── Tonight cards ── */
function card(l,v,s,c){return '<div class="zcl-pcard'+(c?' '+c:'')+'"><div class="zcl-pclabel">'+l+'</div><div class="zcl-pcval">'+v+'</div>'+(s?'<div class="zcl-pcsub">'+s+'</div>':'')+'</div>'}
(function(){
  var dk=ZCLTZ.dayKey(new Date(NOW),TZ).split('-').map(Number), start=ZCLTZ.at(dk[0],dk[1]-1,dk[2],12,0,TZ).getTime();
  if(NOW<start-6*3600000) start-=DAY;      // before 6 AM: the night still in progress; after that, the night to come
  var h0=-0.5667*D2R, prev=null, rise=null, set=null, best=null, ba=-9, m=nowM;
  for(var t=start;t<=start+DAY;t+=6*60000){ var a=alt(t,m.ra,m.dec)-h0;
    if(prev!==null){ if(prev<0&&a>=0&&!rise) rise=new Date(t-6*60000*a/(a-prev)); if(prev>=0&&a<0&&!set) set=new Date(t-6*60000*a/(a-prev)); }
    if(a>0&&a>ba&&alt(t,m.sun[0],m.sun[1])<-12*D2R){ba=a;best=new Date(t);} prev=a; }
  var an=alt(NOW,m.ra,m.dec)*R2D, up=an>0, h='';
  h+=card('Right now', up?Math.round(an)+'° up':'Below horizon', up?'Altitude above the horizon':(rise?'Rises '+fmtT(rise):''), up&&an>20?'accent':'');
  h+=card('Best view', best?fmtT(best):'Daytime only', best?'Highest in darkness · '+Math.round((ba+h0)*R2D)+'° up':'Too close to the Sun tonight');
  h+=card('Rises · sets', (rise?fmtT(rise):'—')+' · '+(set?fmtT(set):'—'), 'For your saved location');
  h+=card('Phase', Math.round(m.lit*100)+'% lit', m.lit>.97?(m.elong>150?'Fully lit, near opposition':'Almost fully lit'):'A slightly gibbous disc');
  h+=card('Size', m.size.toFixed(1)+'″', 'Across the equator');
  h+=card('Brightness', 'mag '+m.mag.toFixed(1), m.mag<-1.5?'Brighter than Sirius':m.mag<0?'Brighter than all but a few stars':m.mag<1?'Like a first-magnitude star':'A modest reddish star');
  h+=card('Distance', Math.round(m.d*AU/1e6)+' million km', 'Light takes '+Math.round(m.d*AU/299792.458/60)+' minutes');
  if(nextOpp){ var dd=Math.round((nextOpp.t-NOW)/DAY);
    h+=card('Next opposition', fmtD(new Date(nextOpp.t),1), dd>0?'In '+dd+' days · '+nextOpp.m.size.toFixed(1)+'″ across':'Now — closest & brightest'); }
  $('mr-tonight').innerHTML=h;
})();
setTimeout(function(){ ZCLSeason.render($('zcl-season'),'Mars'); },60);

/* ── Size chart ── */
function drawChart(){
  var box=$('mr-chart'), W=Math.max(300,box.clientWidth), phone=W<560, H=phone?210:240, ml=34, mr=12, mt=phone?44:40, mb=24;
  var t0=series[0].t, t1=series[series.length-1].t, ymax=Math.ceil((maxSize+2)/5)*5;
  var X=function(t){return ml+(t-t0)/(t1-t0)*(W-ml-mr)}, Y=function(v){return mt+(1-v/ymax)*(H-mt-mb)};
  var s='<svg viewBox="0 0 '+W+' '+H+'" width="'+W+'" height="'+H+'" role="img" aria-label="Apparent size of Mars over the next ten years"><defs><linearGradient id="mrA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D98A5E" stop-opacity=".32"/><stop offset="1" stop-color="#D98A5E" stop-opacity="0"/></linearGradient></defs>';
  for(var v=5;v<=ymax;v+=5) s+='<line x1="'+ml+'" x2="'+(W-mr)+'" y1="'+Y(v)+'" y2="'+Y(v)+'" stroke="rgba(203,168,90,.09)"/><text x="'+(ml-6)+'" y="'+(Y(v)+3)+'" text-anchor="end" font-size="9.5" fill="#7A6E55">'+v+'″</text>';
  var y0=new Date(t0).getFullYear()+1;
  for(var yr=y0;;yr++){ var ty=ZCLTZ.at(yr,0,1,0,0,TZ).getTime(); if(ty>t1) break; var xx=X(ty);
    s+='<line x1="'+xx+'" x2="'+xx+'" y1="'+(H-mb)+'" y2="'+(H-mb+4)+'" stroke="rgba(203,168,90,.35)"/>';
    if(!phone||yr%2===1) s+='<text x="'+xx+'" y="'+(H-6)+'" text-anchor="middle" font-size="9.5" fill="#7A6E55">'+yr+'</text>'; }
  var pts=series.map(function(m){return X(m.t).toFixed(1)+','+Y(m.size).toFixed(1)}).join(' ');
  s+='<polygon points="'+X(t0)+','+Y(0)+' '+pts+' '+X(t1)+','+Y(0)+'" fill="url(#mrA)"/>';
  s+='<polyline points="'+pts+'" fill="none" stroke="#D98A5E" stroke-width="2" stroke-linejoin="round"/>';
  s+='<line x1="'+ml+'" x2="'+(W-mr)+'" y1="'+Y(0)+'" y2="'+Y(0)+'" stroke="rgba(203,168,90,.35)"/>';
  var nx=X(NOW); s+='<line x1="'+nx+'" x2="'+nx+'" y1="'+(mt-10)+'" y2="'+Y(0)+'" stroke="rgba(230,204,133,.55)" stroke-dasharray="3 3"/><text x="'+(nx+4)+'" y="'+(mt-2)+'" font-size="9.5" fill="#E6CC85">Now</text>';
  s+='<circle cx="'+nx+'" cy="'+Y(nowM.size)+'" r="4" fill="#E6CC85" stroke="#141319" stroke-width="2"/>';
  opps.forEach(function(o){ var x=X(o.m.t), y=Y(o.m.size), big=o===bestOpp;
    s+='<circle cx="'+x+'" cy="'+y+'" r="4.5" fill="'+(big?'#F2E4BE':'#D98A5E')+'" stroke="#141319" stroke-width="2"/>';
    s+='<text x="'+x+'" y="'+(y-22)+'" text-anchor="middle" font-size="'+(phone?9:10)+'" fill="#9A875C">'+ZCLTZ.fmtDate(new Date(o.t),{month:'short',year:phone?'2-digit':'numeric'},TZ).replace(' ',phone?" ’":' ').replace("’’","’")+'</text>';
    s+='<text x="'+x+'" y="'+(y-10)+'" text-anchor="middle" font-size="'+(phone?10:11)+'" font-weight="600" fill="#F2E4BE">'+o.m.size.toFixed(1)+'″</text>'; });
  s+='<line id="mr-xh" x1="0" x2="0" y1="'+mt+'" y2="'+Y(0)+'" stroke="rgba(242,228,190,.5)" opacity="0"/><circle id="mr-xd" r="4" fill="#F2E4BE" opacity="0"/>';
  s+='<rect x="'+ml+'" y="0" width="'+(W-ml-mr)+'" height="'+H+'" fill="transparent" id="mr-hit"/></svg>';
  var tip=$('mr-tip'); box.innerHTML=s; box.appendChild(tip);
  var hit=$('mr-hit'), xh=$('mr-xh'), xd=$('mr-xd');
  function move(e){ var r=box.getBoundingClientRect(), px=(e.touches?e.touches[0].clientX:e.clientX)-r.left, sx=px*W/r.width;
    var t=t0+(sx-ml)/(W-ml-mr)*(t1-t0), i=Math.max(0,Math.min(series.length-1,Math.round((t-t0)/(4*DAY)))), m=series[i];
    var x=X(m.t), y=Y(m.size); xh.setAttribute('x1',x); xh.setAttribute('x2',x); xh.setAttribute('opacity',1); xd.setAttribute('cx',x); xd.setAttribute('cy',y); xd.setAttribute('opacity',1);
    tip.innerHTML='<b>'+fmtD(new Date(m.t),1)+'</b><br>'+m.size.toFixed(1)+'″ across · '+Math.round(m.d*AU/1e6)+' million km';
    var lx=x*r.width/W; tip.style.left=Math.max(70,Math.min(r.width-70,lx))+'px'; tip.style.top=(y*r.height/H-10)+'px'; tip.style.opacity=1; }
  function out(){ tip.style.opacity=0; xh.setAttribute('opacity',0); xd.setAttribute('opacity',0); }
  hit.addEventListener('mousemove',move); hit.addEventListener('touchmove',move,{passive:true}); hit.addEventListener('touchstart',move,{passive:true});
  hit.addEventListener('mouseleave',out); hit.addEventListener('touchend',function(){setTimeout(out,1500)});
}
drawChart(); if(document.fonts&&document.fonts.ready) document.fonts.ready.then(drawHero);
})();
