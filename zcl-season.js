/* ZCLSeason — when each planet can be seen from your location.
   A planet counts as visible on a night when, at some moment with the Sun
   more than 8° below the horizon, it stands at least 10° up. Scans night by
   night using JPL mean orbital elements (good to a fraction of a degree,
   plenty for dates). Needs zcl-tz.js. */
(function(){
  var D2R=Math.PI/180, R2D=180/Math.PI, DAY=86400000;
  var EL={
    Mercury:[0.38709927,0.00000037,0.20563593,0.00001906,7.00497902,-0.00594749,252.25032350,149472.67411175,77.45779628,0.16047689,48.33076593,-0.12534081],
    Venus:  [0.72333566,0.0000039,0.00677672,-0.00004107,3.39467605,-0.0007889,181.97909950,58517.81538729,131.60246718,0.00268329,76.67984255,-0.27769418],
    Earth:  [1.00000261,0.00000562,0.01671123,-0.00004392,-0.00001531,-0.01294668,100.46457166,35999.37244981,102.93768193,0.32327364,0,0],
    Mars:   [1.52371034,0.0000018,0.09339410,0.00007882,1.84969142,-0.00813131,-4.55343205,19140.30268499,-23.94362959,0.44441088,49.55953891,-0.29257343],
    Jupiter:[5.20288700,-0.00011607,0.04838624,-0.00013253,1.30439695,-0.00183714,34.39644051,3034.74612775,14.72847983,0.21252668,100.47390909,0.20469106],
    Saturn: [9.53667594,-0.0012506,0.05386179,-0.00050991,2.48599187,0.00193609,49.95424423,1222.49362201,92.59887831,-0.41897216,113.66242448,-0.28867794],
    Uranus: [19.18916464,-0.00196176,0.04725744,-0.00004397,0.77263783,-0.00242939,313.23810451,428.48202785,170.95427630,0.40805281,74.01692503,0.04240589],
    Neptune:[30.06992276,0.00026291,0.00859048,0.00005105,1.77004347,0.00035372,-55.12002969,218.45945325,44.96476227,-0.32241464,131.78422574,-0.00508664],
    Pluto:  [39.48211675,-0.00031596,0.24882730,0.00005170,17.14001206,0.00004818,238.92903833,145.20780515,224.06891629,-0.04062942,110.30393684,-0.01183482]
  };
  function helio(k,T){
    var q=EL[k], a=q[0]+q[1]*T, e=q[2]+q[3]*T, I=(q[4]+q[5]*T)*D2R, L=q[6]+q[7]*T, wb=q[8]+q[9]*T, Om=q[10]+q[11]*T;
    var w=(wb-Om)*D2R, M=(((L-wb)%360)+360)%360*D2R, E=M;
    for(var i=0;i<8;i++) E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));
    var xp=a*(Math.cos(E)-e), yp=a*Math.sqrt(1-e*e)*Math.sin(E), O=Om*D2R;
    var cw=Math.cos(w),sw=Math.sin(w),cO=Math.cos(O),sO=Math.sin(O),cI=Math.cos(I),sI=Math.sin(I);
    return [(cw*cO-sw*sO*cI)*xp+(-sw*cO-cw*sO*cI)*yp, (cw*sO+sw*cO*cI)*xp+(-sw*sO+cw*cO*cI)*yp, sw*sI*xp+cw*sI*yp];
  }
  function radec(v){ var ob=23.43928*D2R, x=v[0], y=v[1]*Math.cos(ob)-v[2]*Math.sin(ob), z=v[1]*Math.sin(ob)+v[2]*Math.cos(ob);
    return [Math.atan2(y,x), Math.atan2(z,Math.hypot(x,y))]; }
  // geocentric RA/Dec (radians) of planet and Sun
  function pos(name,t){
    var T=(t/DAY+2440587.5-2451545)/36525, E=helio('Earth',T), P=helio(name,T);
    return {p:radec([P[0]-E[0],P[1]-E[1],P[2]-E[2]]), s:radec([-E[0],-E[1],-E[2]])};
  }
  function alt(t,rd,lat,lng){
    var lst=(280.46061837+360.98564736629*(t/DAY+2440587.5-2451545)+lng)*D2R, H=lst-rd[0], la=lat*D2R;
    return Math.asin(Math.sin(la)*Math.sin(rd[1])+Math.cos(la)*Math.cos(rd[1])*Math.cos(H));
  }
  function lerp(a,b,f){ var d=b[0]-a[0]; if(d>Math.PI)d-=2*Math.PI; if(d<-Math.PI)d+=2*Math.PI; return [a[0]+d*f,a[1]+(b[1]-a[1])*f]; }

  // One night (local noon → next noon): {vis, first, last, eve, morn}
  // [Sun below, planet above] in degrees: bright planets show in twilight,
  // the faint outer worlds need a properly dark sky and some altitude.
  var RULE={Mercury:[-6,5],Venus:[-6,5],Mars:[-6,8],Jupiter:[-6,8],Saturn:[-6,8],Uranus:[-12,15],Neptune:[-12,15],Pluto:[-12,15]};
  function night(name,noon,L,A,B){
    var r={vis:false,first:null,last:null,eve:false,morn:false}, STEP=15*60000, R=RULE[name];
    var ups=[];
    for(var k=0;k<96;k++){
      var t=noon+k*STEP, f=k/96, s=lerp(A.s,B.s,f);
      if(alt(t,s,L.lat,L.lng)>R[0]*D2R) continue;
      var up=alt(t,lerp(A.p,B.p,f),L.lat,L.lng)>=R[1]*D2R;
      ups.push(up);
      if(!up) continue;
      r.vis=true; if(!r.first) r.first=t; r.last=t;
    }
    // evening = up in the first 2 h of darkness, morning = up in the last 2 h
    var n=ups.length, w=Math.min(8,n); r.eve=ups.slice(0,w).indexOf(true)>=0; r.morn=ups.slice(n-w).indexOf(true)>=0; if(r.vis&&!r.eve&&!r.morn){ r.eve=r.first-noon<DAY/2; r.morn=!r.eve; }
    return r;
  }
  var cache={};
  /* Returns {now:{visible,sky}, start, end, next} — Dates of the first and
     last visible moments of the current/next viewing window, and the start
     of the one after. Scans up to ~2.6 years. */
  function season(name,from){
    var L=ZCLTZ.loc(), tz=L.tz; from=from||new Date();
    var dk=ZCLTZ.dayKey(new Date(from.getTime()-12*3600000),tz).split('-').map(Number);
    var key=name+'|'+dk.join('-')+'|'+L.lat.toFixed(2)+','+L.lng.toFixed(2);
    if(cache[key]) return cache[key];
    var N=950, nights=[], prev=null;
    for(var i=0;i<=N;i++){
      var noon=ZCLTZ.at(dk[0],dk[1]-1,dk[2]+i,12,0,tz).getTime();
      var A=prev||pos(name,noon), B=pos(name,noon+DAY); prev=B;
      nights.push(night(name,noon,L,A,B));
    }
    // smooth out threshold flicker: fill gaps under 10 nights, drop runs under 3
    var st=nights.map(function(n){return n.vis;});
    function runs(val,maxLen,to){ for(var j=0;j<st.length;){ if(st[j]!==val){j++;continue;} var k=j; while(k<st.length&&st[k]===val)k++;
      if(j>0&&k<st.length&&k-j<maxLen) for(var q=j;q<k;q++) st[q]=to; j=k; } }
    runs(false,10,true); runs(true,3,false);
    function find(from,val){ for(var j=from;j<st.length;j++) if(st[j]===val) return j; return -1; }
    function firstT(a,b){ for(var j=a;j<b;j++) if(nights[j].first) return new Date(nights[j].first); return null; }
    function lastT(a,b){ for(var j=b-1;j>=a;j--) if(nights[j].last) return new Date(nights[j].last); return null; }
    function sky(a,b){ var e=0,m=0,al=0,n=0; for(var j=a;j<b;j++){ if(!nights[j].vis) continue; n++; var x=nights[j];
        if(x.eve&&x.morn) al++; else if(x.eve) e++; else m++; }
      return al>=e&&al>=m&&al>0?'both':e>=m?'evening':'morning'; }
    var res={name:name, visible:st[0]};
    var s0=st[0]?0:find(0,true);
    if(s0<0){ res.start=null; cache[key]=res; return res; }
    var e0=find(s0,false); if(e0<0) e0=st.length;
    res.start=st[0]?null:firstT(s0,e0);
    res.end=e0<st.length?lastT(s0,e0):null;
    res.sky=sky(st[0]?0:s0, Math.min(e0, (st[0]?0:s0)+30));
    res.skyNow=st[0]?sky(0,Math.min(e0,3)):null;
    var s1=e0<st.length?find(e0,true):-1;
    res.next=s1>=0?firstT(s1,st.length):null;
    res.nextSky=s1>=0?sky(s1,Math.min(st.length,s1+30)):null;
    cache[key]=res; return res;
  }
  function fmt(d){ return d?ZCLTZ.fmtDate(d,{month:'short',day:'numeric',year:'numeric'}):'—'; }
  function skyWord(s){ return s==='evening'?'Evening sky':s==='morning'?'Morning sky':'All night'; }
  var SCOPE={Uranus:1,Neptune:1,Pluto:1};
  /* Renders three cards into el (uses the page's .zcl-pcard styles). */
  function render(el,name){
    if(!el) return;
    if(!document.getElementById('zcl-season-css')){ var cs=document.createElement('style'); cs.id='zcl-season-css';
      cs.textContent='.zcl-seasongrid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}@media(max-width:560px){.zcl-seasongrid{gap:6px}.zcl-seasongrid .zcl-pcard{padding:9px 9px}.zcl-seasongrid .zcl-pcval{font-size:14px}.zcl-seasongrid .zcl-pcsub{font-size:11.5px}}';
      document.head.appendChild(cs); }
    var r=season(name), c=function(l,v,s,a){ return '<div class="zcl-pcard'+(a?' accent':'')+'"><div class="zcl-pclabel">'+l+'</div><div class="zcl-pcval">'+v+'</div><div class="zcl-pcsub">'+s+'</div></div>'; };
    var h='', aid=SCOPE[name]?(name==='Pluto'?' — large telescope':' — binoculars or telescope'):'';
    if(r.visible){
      h+=c('Right now','Visible', skyWord(r.skyNow||r.sky)+aid, true);
      h+=c('Disappears', r.end?fmt(r.end):'Not for years', r.end?'Lost in the Sun’s glare':'Stays in view');
      h+=c('Returns', r.next?fmt(r.next):'—', r.next?(r.nextSky==='both'?'Back all night':'Back in the '+skyWord(r.nextSky).toLowerCase()):'');
    } else {
      h+=c('Right now','Hidden', 'Too close to the Sun');
      h+=c('Visible again', r.start?fmt(r.start):'—', r.start?skyWord(r.sky)+aid:'');
      h+=c('Disappears', r.end?fmt(r.end):'—', r.end?'Lost in the Sun’s glare again':'');
    }
    el.innerHTML=h;
  }
  function vec(name,t){ var T=(t/DAY+2440587.5-2451545)/36525; return {P:helio(name,T), E:helio('Earth',T)}; }
  window.ZCLSeason={season:season, render:render, pos:pos, vec:vec, radec:radec};
})();
