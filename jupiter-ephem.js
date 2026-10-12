/* ---------------------------------------------------------------------------
   jupiter-ephem.js — Jupiter's viewing geometry and the Galilean moons,
   computed on the device, offline.

   Theory: Meeus, "Astronomical Algorithms" 2nd ed., ch. 43 (physical
   ephemeris: tilt, pole angle, central meridians) and ch. 44 high-accuracy
   method, after J. Lieske's E5 theory — the standard for predicting transits,
   shadow transits and eclipses of the Galilean moons. Ported from the
   astronomia library (MIT, © 2013 Sonia Keys, © 2016 commenthol), with VSOP87
   replaced by a truncated copy of the same VSOP87D data (89 terms; worst case
   ~11" for Jupiter 2000–2060 — under 0.01 Jupiter radius for any moon).

   CONVENTIONS (same as saturn-ephem.js):
     moons[i].X  Jupiter equatorial radii, along the equator, + toward WEST
     moons[i].Y  radii, + toward Jupiter's NORTH pole
     moons[i].Z  radii, + FARTHER from Earth than Jupiter
     shadows[i]  where that moon's shadow falls on the disc, as seen from
                 Earth: {X, Y, onDisc}. onDisc is true only while the shadow
                 is actually on the visible face.
     DE / DS     jovicentric declination of Earth / Sun (tilt of the pole)
     P           position angle of the north pole, from N through E
     cm2         System II central meridian longitude (degrees)
--------------------------------------------------------------------------- */
(function(global){
'use strict';
var d=Math.PI/180, s2r=d/3600, TWO_PI=2*Math.PI;
var VSOP = {"earth":{"L":[[[1.75347,0,0],[0.03341656,4.669257,6283.07585],[0.0003489428,4.626102,12566.1517],[0.00003417571,2.828866,3.523118],[0.00003497056,2.744118,5753.384885],[0.00003135896,3.62767,77713.771468],[0.00002676218,4.418084,7860.419392],[0.00002342687,6.135162,3930.209696],[0.00001273166,2.037097,529.690965],[0.00001324292,0.742464,11506.76977],[0.00000901855,2.045054,26.29832],[0.00001199167,1.109629,1577.343542],[0.00000857223,3.508492,398.149003],[0.00000779786,1.178827,5223.69392],[0.0000099025,5.232681,5884.926847],[0.00000753141,2.533391,5507.553239],[0.00000505264,4.582926,18849.22755]],[[6283.32,0,0],[0.002060589,2.678235,6283.07585]],[],[],[],[]],"B":[[],[],[],[],[]],"R":[[[1.00014,0,0],[0.016707,3.098464,6283.07585],[0.0001395602,3.055246,12566.1517],[0.0000308372,5.198467,77713.771468],[0.00001628461,1.173877,5753.384885],[0.00001575568,2.846852,7860.419392],[0.00000924799,5.452922,11506.76977],[0.00000542444,4.564091,3930.209696]],[[0.001030186,1.10749,6283.07585]],[],[],[],[]]},"jupiter":{"L":[[[0.5995469,0,0],[0.09695899,5.061918,529.690965],[0.005736101,1.444062,7.113547],[0.003063892,5.417347,1059.38193],[0.0009717828,4.142647,632.783739],[0.000729031,3.640429,522.577418],[0.0006426399,3.411452,103.092774],[0.0003980605,2.293767,419.484644],[0.0003885778,1.272317,316.39187],[0.0002796462,1.784546,536.804512],[0.0001358974,5.77481,1589.072895],[0.00008246362,3.58228,206.185548],[0.00008768686,3.630003,949.175609],[0.00007368057,5.081011,735.876514],[0.00006263171,0.024976,213.299095],[0.0000611405,4.513195,1162.474704],[0.00004905419,1.320846,110.206321],[0.00005305283,1.306712,14.227094],[0.00005305457,4.186251,1052.268383],[0.00004647249,4.699581,3.932153],[0.00003045009,4.31676,426.598191],[0.00002610001,1.566676,846.082835],[0.00002028191,1.063765,3.181394],[0.00001764768,2.141481,1066.495477],[0.00001722983,3.88036,1265.567479],[0.00001920959,0.971689,639.897286],[0.00001633217,3.582011,515.463871],[0.00001431997,4.296837,625.670192]],[[529.9348,0,0],[0.004897412,4.220667,529.690965],[0.002289185,6.026475,7.113547],[0.0002765538,4.57266,1059.38193],[0.0002072094,5.459389,522.577418]],[],[],[],[]],"B":[[[0.02268616,3.558526,529.690965],[0.001099716,3.908093,1059.38193],[0.001100904,0,0],[0.00008101427,3.605096,522.577418],[0.00006043996,4.258831,1589.072895],[0.00006437782,0.306271,536.804512]],[[0.001773518,5.701665,529.690965]],[],[],[],[]],"R":[[[5.208874,0,0],[0.2520933,3.491086,529.690965],[0.006105999,3.841154,1059.38193],[0.002820295,2.574199,632.783739],[0.001876474,2.075904,522.577418],[0.0008679294,0.710011,419.484644],[0.0007206287,0.214657,536.804512],[0.0006551723,5.979959,316.39187],[0.0002913462,1.677592,103.092774],[0.0003013527,2.161321,949.175609],[0.0002345321,3.540231,735.876514],[0.0002228371,4.193628,1589.072895],[0.0002394734,0.274579,7.113547],[0.000130326,2.960431,1162.474704],[0.00009703346,1.906696,206.185548],[0.00012749,2.715501,1052.268383],[0.00009161431,4.413526,213.299095],[0.00007894539,2.479076,426.598191],[0.00007057978,2.181848,1265.567479],[0.00006137755,6.264175,846.082835]],[[0.01271802,2.649375,529.690965]],[],[],[],[]]}};
function pmod(x,m){ x%=m; return x<0?x+m:x; }
function series(ser,tau){ var tot=0,tp=1; for(var p=0;p<ser.length;p++){ var a=ser[p],s=0; for(var k=0;k<a.length;k++){ var t=a[k]; s+=t[0]*Math.cos(t[1]+t[2]*tau); } tot+=s*tp; tp*=tau; } return tot; }
function helio(pl,jde){ var tau=(jde-2451545)/365250; return {lon:pmod(series(pl.L,tau),TWO_PI), lat:series(pl.B,tau), range:series(pl.R,tau)}; }
function toFK5(lon,lat,jde){ var T=(jde-2451545)/36525, Lp=lon-(1.397+0.00031*T)*T*d, sL=Math.sin(Lp), cL=Math.cos(Lp);
  return {lon:lon+(-0.09033+0.03916*(cL+sL)*Math.tan(lat))*s2r, lat:lat+0.03916*(cL-sL)*s2r}; }
function nutation(jde){ var T=(jde-2451545)/36525, Om=(125.04452-1934.136261*T)*d, L=(280.4665+36000.7698*T)*d, Lp=(218.3165+481267.8813*T)*d;
  return {dpsi:(-17.20*Math.sin(Om)-1.32*Math.sin(2*L)-0.23*Math.sin(2*Lp)+0.21*Math.sin(2*Om))*s2r,
          deps:(9.20*Math.cos(Om)+0.57*Math.cos(2*L)+0.10*Math.cos(2*Lp)-0.09*Math.cos(2*Om))*s2r}; }
function meanObliquity(jde){ var T=(jde-2451545)/36525; return (23+26/60+21.448/3600)*d+(-46.815*T-0.00059*T*T+0.001813*T*T*T)*s2r; }
function horner(x){ var r=0; for(var i=arguments.length-1;i>0;i--) r=r*x+arguments[i]; return r; }
var LIGHT=0.0057755183;
function jdeOf(date){ return date.getTime()/86400000+2440587.5+69.2/86400; }

/* ================= ch. 43 — physical ephemeris ================= */
function physical(jde){
  var dd=jde-2433282.5, T1=dd/36525;
  var a0=268*d+0.1061*d*T1, d0=64.5*d-0.0164*d*T1;
  var W1=17.71*d+877.90003539*d*dd, W2=16.838*d+870.27003539*d*dd;
  var e=helio(VSOP.earth,jde), ef=toFK5(e.lon,e.lat,jde), l0=ef.lon, b0=ef.lat, R=e.range;
  var sl0=Math.sin(l0), cl0=Math.cos(l0), sb0=Math.sin(b0);
  var D=4, l,b,r,x,y,z;
  for(var it=0;it<2;it++){
    var h=helio(VSOP.jupiter,jde-LIGHT*D), f=toFK5(h.lon,h.lat,jde);
    l=f.lon; b=f.lat; r=h.range;
    x=r*Math.cos(b)*Math.cos(l)-R*cl0; y=r*Math.cos(b)*Math.sin(l)-R*sl0; z=r*Math.sin(b)-R*sb0;
    D=Math.sqrt(x*x+y*y+z*z);
  }
  var e0=meanObliquity(jde), se0=Math.sin(e0), ce0=Math.cos(e0);
  var sl=Math.sin(l), cl=Math.cos(l), sb=Math.sin(b), cb=Math.cos(b);
  var as=Math.atan2(ce0*sl-se0*sb/cb,cl), ds=Math.asin(ce0*sb+se0*cb*sl);
  var DS=Math.asin(-Math.sin(d0)*Math.sin(ds)-Math.cos(d0)*Math.cos(ds)*Math.cos(a0-as));
  var u=y*ce0-z*se0, v=y*se0+z*ce0;
  var al=Math.atan2(u,x), de=Math.atan(v/Math.hypot(x,u));
  var zeta=Math.atan2(Math.sin(d0)*Math.cos(de)*Math.cos(a0-al)-Math.sin(de)*Math.cos(d0), Math.cos(de)*Math.sin(a0-al));
  var DE=Math.asin(-Math.sin(d0)*Math.sin(de)-Math.cos(d0)*Math.cos(de)*Math.cos(a0-al));
  var w2=W2-zeta-5.02626*d*D;
  var C=(2*r*D+R*R-r*r-D*D)/(4*r*D); if(Math.sin(l-l0)<0) C=-C;
  w2=pmod(w2+C,TWO_PI);
  var nu=nutation(jde), eps=e0+nu.deps, se=Math.sin(eps), ce=Math.cos(eps);
  var sa=Math.sin(al), ca=Math.cos(al);
  al+=0.005693*d*(ca*cl0*ce+sa*sl0)/Math.cos(de);
  de+=0.005693*d*(cl0*ce*(se/ce*Math.cos(de)-sa*Math.sin(de))+ca*Math.sin(de)*sl0);
  var td=Math.tan(de), dA=(ce+se*Math.sin(al)*td)*nu.dpsi-Math.cos(al)*td*nu.deps, dD=se*Math.cos(al)*nu.dpsi+Math.sin(al)*nu.deps;
  var ap=al+dA, dp=de+dD, td0=Math.tan(d0);
  var a0p=a0+(ce+se*Math.sin(a0)*td0)*nu.dpsi-Math.cos(a0)*td0*nu.deps, d0p=d0+se*Math.cos(a0)*nu.dpsi+Math.sin(a0)*nu.deps;
  var P=Math.atan2(Math.cos(d0p)*Math.sin(a0p-ap), Math.sin(d0p)*Math.cos(dp)-Math.cos(d0p)*Math.sin(dp)*Math.cos(a0p-ap));
  // elongation from the Sun (Sun at l0+180°)
  var lam=Math.atan2(y,x), bet=Math.atan(z/Math.hypot(x,y));
  var elong=Math.acos(Math.max(-1,Math.min(1,Math.cos(bet)*Math.cos(lam-l0-Math.PI))));
  return {DS:DS, DE:DE, P:P, cm2:w2/d, delta:D, r:r, R:R, ra:pmod(ap,TWO_PI), dec:dp, elong:elong,
          radiusArcsec:71492/149597870.7/D*206264.806};
}

/* ================= ch. 44 — E5 satellites ================= */
var KK=[17295,21819,27558,36548], NAMES=['Io','Europa','Ganymede','Callisto'];
// Jupiter's mean orbital node & inclination (Meeus ch. 31, equinox of date)
function jNode(jde){ var T=(jde-2451545)/36525; return horner(T,100.464407,1.0209774,0.00040315,0.000000404)*d; }
function jInc(jde){ var T=(jde-2451545)/36525; return horner(T,1.303267,-0.0054965,0.00000466,-0.000000002)*d; }

/* observer: 'earth' or 'sun' (the Sun's view gives the shadows) */
function e5(jde, observer){
  var l0v,b0v,t,D=5;
  var h;
  if(observer==='sun'){
    var jh=helio(VSOP.jupiter,jde); D=jh.range;
    h=helio(VSOP.jupiter,jde-LIGHT*D);
    l0v=h.lon; b0v=h.lat; t=jde-2443000.5-LIGHT*D;
  } else {
    var e=helio(VSOP.earth,jde), s=e.lon+Math.PI, T=(jde-2451545)/36525;
    var lp=s-1.397*d*T-0.00031*d*T*T;
    var sl=pmod(s-0.09033*s2r,TWO_PI), sbeta=0.03916*s2r*(Math.cos(lp)-Math.sin(lp))-e.lat, R=e.range;
    var ss=Math.sin(sl), cs=Math.cos(sl), sB=Math.sin(sbeta), tau=LIGHT*D, x=0,y=0,z=0;
    for(var it=0;it<2;it++){
      h=helio(VSOP.jupiter,jde-tau);
      var sL=Math.sin(h.lon), cL=Math.cos(h.lon), sb=Math.sin(h.lat), cb=Math.cos(h.lat);
      x=h.range*cb*cL+R*cs; y=h.range*cb*sL+R*ss; z=h.range*sb+R*sB;
      D=Math.sqrt(x*x+y*y+z*z); tau=LIGHT*D;
    }
    l0v=Math.atan2(y,x); b0v=Math.atan(z/Math.hypot(x,y)); t=jde-2443000.5-tau;
  }
  var p=d, S=Math.sin, C=Math.cos;
  var l1=106.07719*p+203.48895579*p*t, l2=175.73161*p+101.374724735*p*t, l3=120.55883*p+50.317609207*p*t, l4=84.44459*p+21.571071177*p*t;
  var pi1=97.0881*p+0.16138586*p*t, pi2=154.8663*p+0.04726307*p*t, pi3=188.184*p+0.00712734*p*t, pi4=335.2868*p+0.00184*p*t;
  var w1=312.3346*p-0.13279386*p*t, w2=100.4411*p-0.03263064*p*t, w3=119.1942*p-0.00717703*p*t, w4=322.6186*p-0.00175934*p*t;
  var Gam=0.33033*p*S(163.679*p+0.0010512*p*t)+0.03439*p*S(34.486*p-0.0161731*p*t);
  var Phi=199.6766*p+0.1737919*p*t, psi=316.5182*p-0.00000208*p*t;
  var G=30.23756*p+0.0830925701*p*t+Gam, Gp=31.97853*p+0.0334597339*p*t, Pi=13.469942*p;
  var S1=0.47259*p*S(2*(l1-l2))-0.03478*p*S(pi3-pi4)+0.01081*p*S(l2-2*l3+pi3)+0.00738*p*S(Phi)+0.00713*p*S(l2-2*l3+pi2)
    -0.00674*p*S(pi1+pi3-2*Pi-2*G)+0.00666*p*S(l2-2*l3+pi4)+0.00445*p*S(l1-pi3)-0.00354*p*S(l1-l2)-0.00317*p*S(2*psi-2*Pi)
    +0.00265*p*S(l1-pi4)-0.00186*p*S(G)+0.00162*p*S(pi2-pi3)+0.00158*p*S(4*(l1-l2))-0.00155*p*S(l1-l3)-0.00138*p*S(psi+w3-2*Pi-2*G)
    -0.00115*p*S(2*(l1-2*l2+w2))+0.00089*p*S(pi2-pi4)+0.00085*p*S(l1+pi3-2*Pi-2*G)+0.00083*p*S(w2-w3)+0.00053*p*S(psi-w2);
  var S2=1.06476*p*S(2*(l2-l3))+0.04256*p*S(l1-2*l2+pi3)+0.03581*p*S(l2-pi3)+0.02395*p*S(l1-2*l2+pi4)+0.01984*p*S(l2-pi4)
    -0.01778*p*S(Phi)+0.01654*p*S(l2-pi2)+0.01334*p*S(l2-2*l3+pi2)+0.01294*p*S(pi3-pi4)-0.01142*p*S(l2-l3)-0.01057*p*S(G)
    -0.00775*p*S(2*(psi-Pi))+0.00524*p*S(2*(l1-l2))-0.0046*p*S(l1-l3)+0.00316*p*S(psi-2*G+w3-2*Pi)-0.00203*p*S(pi1+pi3-2*Pi-2*G)
    +0.00146*p*S(psi-w3)-0.00145*p*S(2*G)+0.00125*p*S(psi-w4)-0.00115*p*S(l1-2*l3+pi3)-0.00094*p*S(2*(l2-w2))
    +0.00086*p*S(2*(l1-2*l2+w2))-0.00086*p*S(5*Gp-2*G+52.225*p)-0.00078*p*S(l2-l4)-0.00064*p*S(3*l3-7*l4+4*pi4)
    +0.00064*p*S(pi1-pi4)-0.00063*p*S(l1-2*l3+pi4)+0.00058*p*S(w3-w4)+0.00056*p*S(2*(psi-Pi-G))+0.00056*p*S(2*(l2-l4))
    +0.00055*p*S(2*(l1-l3))+0.00052*p*S(3*l3-7*l4+pi3+3*pi4)-0.00043*p*S(l1-pi3)+0.00041*p*S(5*(l2-l3))+0.00041*p*S(pi4-Pi)
    +0.00032*p*S(w2-w3)+0.00032*p*S(2*(l3-G-Pi));
  var S3=0.1649*p*S(l3-pi3)+0.09081*p*S(l3-pi4)-0.06907*p*S(l2-l3)+0.03784*p*S(pi3-pi4)+0.01846*p*S(2*(l3-l4))-0.0134*p*S(G)
    -0.01014*p*S(2*(psi-Pi))+0.00704*p*S(l2-2*l3+pi3)-0.0062*p*S(l2-2*l3+pi2)-0.00541*p*S(l3-l4)+0.00381*p*S(l2-2*l3+pi4)
    +0.00235*p*S(psi-w3)+0.00198*p*S(psi-w4)+0.00176*p*S(Phi)+0.0013*p*S(3*(l3-l4))+0.00125*p*S(l1-l3)-0.00119*p*S(5*Gp-2*G+52.225*p)
    +0.00109*p*S(l1-l2)-0.001*p*S(3*l3-7*l4+4*pi4)+0.00091*p*S(w3-w4)+0.0008*p*S(3*l3-7*l4+pi3+3*pi4)-0.00075*p*S(2*l2-3*l3+pi3)
    +0.00072*p*S(pi1+pi3-2*Pi-2*G)+0.00069*p*S(pi4-Pi)-0.00058*p*S(2*l3-3*l4+pi4)-0.00057*p*S(l3-2*l4+pi4)+0.00056*p*S(l3+pi3-2*Pi-2*G)
    -0.00052*p*S(l2-2*l3+pi1)-0.0005*p*S(pi2-pi3)+0.00048*p*S(l3-2*l4+pi3)-0.00045*p*S(2*l2-3*l3+pi4)-0.00041*p*S(pi2-pi4)
    -0.00038*p*S(2*G)-0.00037*p*S(pi3-pi4+w3-w4)-0.00032*p*S(3*l3-7*l4+2*pi3+2*pi4)+0.0003*p*S(4*(l3-l4))+0.00029*p*S(l3+pi4-2*Pi-2*G)
    -0.00028*p*S(w3+psi-2*Pi-2*G)+0.00026*p*S(l3-Pi-G)+0.00024*p*S(l2-3*l3+2*l4)+0.00021*p*S(2*(l3-Pi-G))-0.00021*p*S(l3-pi2)+0.00017*p*S(2*(l3-pi3));
  var S4=0.84287*p*S(l4-pi4)+0.03431*p*S(pi4-pi3)-0.03305*p*S(2*(psi-Pi))-0.03211*p*S(G)-0.01862*p*S(l4-pi3)+0.01186*p*S(psi-w4)
    +0.00623*p*S(l4+pi4-2*G-2*Pi)+0.00387*p*S(2*(l4-pi4))-0.00284*p*S(5*Gp-2*G+52.225*p)-0.00234*p*S(2*(psi-pi4))-0.00223*p*S(l3-l4)
    -0.00208*p*S(l4-Pi)+0.00178*p*S(psi+w4-2*pi4)+0.00134*p*S(pi4-Pi)+0.00125*p*S(2*(l4-G-Pi))-0.00117*p*S(2*G)-0.00112*p*S(2*(l3-l4))
    +0.00107*p*S(3*l3-7*l4+4*pi4)+0.00102*p*S(l4-G-Pi)+0.00096*p*S(2*l4-psi-w4)+0.00087*p*S(2*(psi-w4))-0.00085*p*S(3*l3-7*l4+pi3+3*pi4)
    +0.00085*p*S(l3-2*l4+pi4)-0.00081*p*S(2*(l4-psi))+0.00071*p*S(l4+pi4-2*Pi-3*G)+0.00061*p*S(l1-l4)-0.00056*p*S(psi-w3)
    -0.00054*p*S(l3-2*l4+pi3)+0.00051*p*S(l2-l4)+0.00042*p*S(2*(psi-G-Pi))+0.00039*p*S(2*(pi4-w4))+0.00036*p*S(psi+Pi-pi4-w4)
    +0.00035*p*S(2*Gp-G+188.37*p)-0.00035*p*S(l4-pi4+2*Pi-2*psi)-0.00032*p*S(l4+pi4-2*Pi-G)+0.0003*p*S(2*Gp-2*G+149.15*p)
    +0.00029*p*S(3*l3-7*l4+2*pi3+2*pi4)+0.00028*p*S(l4-pi4+2*psi-2*Pi)-0.00028*p*S(2*(l4-w4))-0.00027*p*S(pi3-pi4+w3-w4)
    -0.00026*p*S(5*Gp-3*G+188.37*p)+0.00025*p*S(w4-w3)-0.00025*p*S(l2-3*l3+2*l4)-0.00023*p*S(3*(l3-l4))+0.00021*p*S(2*l4-2*Pi-3*G)
    -0.00021*p*S(2*l3-3*l4+pi4)+0.00019*p*S(l4-pi4-G)-0.00019*p*S(2*l4-pi3-pi4)-0.00018*p*S(l4-pi4+G)-0.00016*p*S(l4+pi3-2*Pi-2*G);
  var L=[l1+S1,l2+S2,l3+S3,l4+S4];
  var Bb=[
    Math.atan(0.0006393*S(L[0]-w1)+0.0001825*S(L[0]-w2)+0.0000329*S(L[0]-w3)-0.0000311*S(L[0]-psi)+0.0000093*S(L[0]-w4)
      +0.0000075*S(3*L[0]-4*l2-1.9927*S1+w2)+0.0000046*S(L[0]+psi-2*Pi-2*G)),
    Math.atan(0.0081004*S(L[1]-w2)+0.0004512*S(L[1]-w3)-0.0003284*S(L[1]-psi)+0.000116*S(L[1]-w4)+0.0000272*S(l1-2*l3+1.0146*S2+w2)
      -0.0000144*S(L[1]-w1)+0.0000143*S(L[1]+psi-2*Pi-2*G)+0.0000035*S(L[1]-psi+G)-0.0000028*S(l1-2*l3+1.0146*S2+w3)),
    Math.atan(0.0032402*S(L[2]-w3)-0.0016911*S(L[2]-psi)+0.0006847*S(L[2]-w4)-0.0002797*S(L[2]-w2)+0.0000321*S(L[2]+psi-2*Pi-2*G)
      +0.0000051*S(L[2]-psi+G)-0.0000045*S(L[2]-psi-G)-0.0000045*S(L[2]+psi-2*Pi)+0.0000037*S(L[2]+psi-2*Pi-3*G)
      +0.000003*S(2*l2-3*L[2]+4.03*S3+w2)-0.0000021*S(2*l2-3*L[2]+4.03*S3+w3)),
    Math.atan(-0.0076579*S(L[3]-psi)+0.0044134*S(L[3]-w4)-0.0005112*S(L[3]-w3)+0.0000773*S(L[3]+psi-2*Pi-2*G)+0.0000104*S(L[3]-psi+G)
      -0.0000102*S(L[3]-psi-G)+0.0000088*S(L[3]+psi-2*Pi-3*G)-0.0000038*S(L[3]+psi-2*Pi-G))
  ];
  var Rr=[
    5.90569*(1-0.0041339*C(2*(l1-l2))-0.0000387*C(l1-pi3)-0.0000214*C(l1-pi4)+0.000017*C(l1-l2)-0.0000131*C(4*(l1-l2))+0.0000106*C(l1-l3)-0.0000066*C(l1+pi3-2*Pi-2*G)),
    9.39657*(1+0.0093848*C(l1-l2)-0.0003116*C(l2-pi3)-0.0001744*C(l2-pi4)-0.0001442*C(l2-pi2)+0.0000553*C(l2-l3)+0.0000523*C(l1-l3)-0.000029*C(2*(l1-l2))+0.0000164*C(2*(l2-w2))+0.0000107*C(l1-2*l3+pi3)-0.0000102*C(l2-pi1)-0.0000091*C(2*(l1-l3))),
    14.98832*(1-0.0014388*C(l3-pi3)-0.0007917*C(l3-pi4)+0.0006342*C(l2-l3)-0.0001761*C(2*(l3-l4))+0.0000294*C(l3-l4)-0.0000156*C(3*(l3-l4))+0.0000156*C(l1-l3)-0.0000153*C(l1-l2)+0.000007*C(2*l2-3*l3+pi3)-0.0000051*C(l3+pi3-2*Pi-2*G)),
    26.36273*(1-0.0073546*C(l4-pi4)+0.0001621*C(l4-pi3)+0.0000974*C(l3-l4)-0.0000543*C(l4+pi4-2*Pi-2*G)-0.0000271*C(2*(l4-pi4))+0.0000182*C(l4-Pi)+0.0000177*C(2*(l3-l4))-0.0000167*C(2*l4-psi-w4)+0.0000167*C(psi-w4)-0.0000155*C(2*(l4-Pi-G))+0.0000142*C(2*(l4-psi))+0.0000105*C(l1-l4)+0.0000092*C(l2-l4)-0.0000089*C(l4-Pi-G)-0.0000062*C(l4+pi4-2*Pi-3*G)+0.0000048*C(2*(l4-w4)))
  ];
  var T0=(jde-2433282.423)/36525, Pp=(1.3966626*p+0.0003088*p*T0)*T0;
  for(var i=0;i<4;i++) L[i]+=Pp;
  psi+=Pp;
  var Tj=(jde-2415020)/36525, I=3.120262*p+0.0006*p*Tj;
  var X=[],Y=[],Z=[];
  for(i=0;i<4;i++){ var cB=C(Bb[i]); X[i]=Rr[i]*C(L[i]-psi)*cB; Y[i]=Rr[i]*S(L[i]-psi)*cB; Z[i]=Rr[i]*S(Bb[i]); }
  X[4]=0; Y[4]=0; Z[4]=1;
  var sI=S(I), cI=C(I), Om=jNode(jde), sOm=S(Om), cOm=C(Om), sPh=S(psi-Om), cPh=C(psi-Om);
  var inc=jInc(jde), si=S(inc), ci=C(inc), sl0=S(l0v), cl0=C(l0v), sb0=S(b0v), cb0=C(b0v);
  var A=[],B=[],Cc=[];
  for(i=0;i<5;i++){
    var a=X[i], b=Y[i]*cI-Z[i]*sI, c=Y[i]*sI+Z[i]*cI, a0;
    a0=a*cPh-b*sPh; b=a*sPh+b*cPh; a=a0;
    var bq=b*ci-c*si; c=b*si+c*ci; b=bq;
    a0=a*cOm-b*sOm; b=a*sOm+b*cOm; a=a0;
    a0=a*sl0-b*cl0; b=a*cl0+b*sl0; a=a0;
    A[i]=a; B[i]=c*sb0+b*cb0; Cc[i]=c*cb0-b*sb0;
  }
  var Dd=Math.atan2(A[4],Cc[4]), sD=S(Dd), cD=C(Dd), out=[];
  for(i=0;i<4;i++){
    var xx=A[i]*cD-Cc[i]*sD, yy=A[i]*sD+Cc[i]*cD, zz=B[i], q=xx/Rr[i];
    xx+=Math.abs(zz)/KK[i]*Math.sqrt(Math.max(0,1-q*q));
    var W=D/(D+zz/2095);
    out.push({name:NAMES[i], X:xx*W, Y:yy*W, Z:zz, r:Rr[i]});
  }
  return out;
}

var POLAR=66854/71492;                      // Jupiter polar / equatorial radius
var MOON_R=[1821.6,1560.8,2634.1,2410.3].map(function(k){return k/71492;});

/* Shadows: each moon as seen from the Sun marks where its shadow lands on
   the planet (sun frame). That surface point is carried into Earth's frame by
   the rotation about Jupiter's axis that maps the sun-frame moon positions onto
   the Earth-frame ones (the Sun–Earth angle seen from Jupiter). */
function compute(date){
  var jde=jdeOf(date), g=physical(jde), m=e5(jde,'earth'), ms=e5(jde,'sun');
  // rotation angle about the pole: from Callisto (largest orbit, best-conditioned)
  var phi=Math.atan2(m[3].Z,m[3].X)-Math.atan2(ms[3].Z,ms[3].X);
  var cph=Math.cos(phi), sph=Math.sin(phi);
  var shadows=m.map(function(mm,i){
    var s=ms[i];
    var e2=s.X*s.X+(s.Y/POLAR)*(s.Y/POLAR);
    if(s.Z>0 || e2>=1) return {X:NaN,Y:NaN,onDisc:false,name:mm.name};   // moon not between Sun and planet
    var zs=-Math.sqrt(Math.max(0,1-e2));                                  // surface point facing the Sun (Z away from observer)
    var X=s.X*cph-zs*sph, Z=s.X*sph+zs*cph;                                // same rotation as the moons
    return {X:X, Y:s.Y, Z:Z, onDisc:Z<0, name:mm.name};
  });
  g.moons=m; g.shadows=shadows; g.phi=phi; g.date=date;
  // Sun direction in Earth's frame (x west, y north pole, z toward Earth)
  g.sun=[ Math.sin(phi)*Math.cos(g.DS), Math.sin(g.DS), Math.cos(phi)*Math.cos(g.DS) ];
  g.mag=-9.40+5*Math.log10(g.r*g.delta)+0.005*Math.abs(Math.acos(Math.cos(phi))/d);
  return g;
}
global.JupiterEphem={compute:compute, physical:physical, e5:e5, jdeOf:jdeOf, POLAR:POLAR, MOON_R:MOON_R, NAMES:NAMES};
})(typeof self!=='undefined'?self:this);
