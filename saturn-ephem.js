/* ---------------------------------------------------------------------------
   saturn-ephem.js — Saturn's ring geometry and the positions of its eight
   major moons, computed on the device, offline.

   Theory: Meeus, "Astronomical Algorithms" 2nd ed., ch. 45 (the ring) and
   ch. 46 (the satellites, after G. Dourneau). This is the same theory behind
   the classic Sky & Telescope Saturn's-moons tool. The code is a port of the
   astronomia library's implementation (MIT, © 2013 Sonia Keys, © 2016
   commenthol), with its full VSOP87 planetary series replaced by a truncated
   copy generated from the same VSOP87D data: 101 terms instead of ~5,000,
   worst-case error 18" in Saturn's longitude over 2000–2060. That moves a
   moon by well under 1% of a Saturn radius — invisible at any eyepiece scale.

   OUTPUT CONVENTIONS (all verified against the full-precision reference):
     moons[i].X  Saturn equatorial radii, along the ring's long axis,
                 POSITIVE TOWARD CELESTIAL WEST
     moons[i].Y  radii, along the ring's short axis, positive toward
                 Saturn's NORTH pole
     moons[i].Z  radii, positive = FARTHER from Earth than Saturn
     B   tilt of the ring plane toward Earth (negative = we see the south face)
     Bs  the same for the Sun (sign vs B says which face is lit)
     dU  Sun's saturnicentric longitude minus Earth's, signed (radians)
     P   position angle of Saturn's north pole, from celestial north toward
         east (radians)
--------------------------------------------------------------------------- */
(function(global){
'use strict';

var d = Math.PI/180, s2r = d/3600, TWO_PI = 2*Math.PI;

var VSOP = {"earth":{"L":[[[1.75347,0,0],[0.03341656,4.669257,6283.07585],[0.0003489428,4.626102,12566.1517],[0.00003417571,2.828866,3.523118],[0.00003497056,2.744118,5753.384885],[0.00003135896,3.62767,77713.771468],[0.00002676218,4.418084,7860.419392],[0.00002342687,6.135162,3930.209696],[0.00001273166,2.037097,529.690965],[0.00001324292,0.742464,11506.76977],[0.00000901855,2.045054,26.29832],[0.00001199167,1.109629,1577.343542],[0.00000857223,3.508492,398.149003],[0.00000779786,1.178827,5223.69392],[0.0000099025,5.232681,5884.926847],[0.00000753141,2.533391,5507.553239],[0.00000505264,4.582926,18849.22755]],[[6283.32,0,0],[0.002060589,2.678235,6283.07585]],[],[],[],[]],"B":[[],[],[],[],[]],"R":[[[1.00014,0,0],[0.016707,3.098464,6283.07585],[0.0001395602,3.055246,12566.1517],[0.0000308372,5.198467,77713.771468],[0.00001628461,1.173877,5753.384885],[0.00001575568,2.846852,7860.419392],[0.00000924799,5.452922,11506.76977],[0.00000542444,4.564091,3930.209696]],[[0.001030186,1.10749,6283.07585]],[],[],[],[]]},"saturn":{"L":[[[0.8740135,0,0],[0.1110766,3.962051,213.299095],[0.01414151,4.585815,7.113547],[0.003983794,0.52112,206.185548],[0.003507692,3.303299,426.598191],[0.002068163,0.246584,103.092774],[0.0007927129,3.840071,220.412642],[0.0002399034,4.669769,110.206321],[0.0001657358,0.437191,419.484644],[0.0001490699,5.769033,316.39187],[0.000158203,0.93809,632.783739],[0.0001460956,1.565186,3.932153],[0.0001316031,4.448912,14.227094],[0.0001505351,2.7167,639.897286],[0.000130053,5.981191,11.0457],[0.0001072507,3.129396,202.253395],[0.00005863207,0.23657,529.690965],[0.00005227771,4.207832,3.181394],[0.00006126308,1.763285,277.034994],[0.00005019658,3.177879,433.711738],[0.00004592541,0.619764,199.072001],[0.00004005862,2.244799,63.735898],[0.00002953815,0.982804,95.979227],[0.00003873696,3.222827,138.517497],[0.00002461172,2.031636,735.876514],[0.0000326949,0.774919,949.175609],[0.00001758143,3.265805,522.577418],[0.00001640183,5.50505,846.082835],[0.00001580641,4.372663,309.278323]],[[213.543,0,0],[0.01296855,1.828205,213.299095],[0.005643476,2.885001,7.113547],[0.0009832303,1.080701,426.598191],[0.001076788,2.277699,206.185548],[0.0004025459,2.041283,220.412642],[0.0001994173,1.279547,103.092774]],[],[],[],[]],"B":[[[0.04330678,3.602844,213.299095],[0.002403483,2.852385,426.598191],[0.0008474594,0,0],[0.0003086336,3.484415,220.412642],[0.0003411606,0.572973,206.185548],[0.0001473407,2.118466,639.897286],[0.00009916668,5.790032,419.484644],[0.00006993564,4.736047,7.113547],[0.00004807587,5.433053,316.39187],[0.00004788392,4.965129,110.206321],[0.00003432125,2.732558,433.711738],[0.00001506129,6.013045,103.092774]],[[0.00397555,5.3329,213.299095],[0.0004947864,3.141593,0]],[],[],[],[]],"R":[[[9.557581,0,0],[0.5292138,2.392262,213.299095],[0.0187368,5.235496,206.185548],[0.01464664,1.64763,426.598191],[0.008218911,5.9352,316.39187],[0.005475069,5.015326,103.092774],[0.003716844,2.271148,220.412642],[0.003617784,3.139043,7.113547],[0.001406175,5.704067,632.783739],[0.001089747,3.293136,110.206321],[0.0006900702,5.940996,419.484644],[0.0006105335,0.940378,639.897286],[0.0004891304,1.557334,202.253395],[0.0003414379,0.195186,277.034994],[0.0003240172,5.470846,949.175609],[0.0002093657,0.463492,735.876514],[0.0002083912,1.521026,433.711738],[0.0002074668,5.332557,199.072001],[0.0001529846,3.059437,529.690965]],[[0.06182981,0.258435,213.299095],[0.005065776,0.711147,206.185548],[0.003413941,5.796358,426.598191],[0.001884914,0.472157,220.412642]],[],[],[],[]]}};

function pmod(x,m){ x%=m; return x<0?x+m:x; }
function horner(x){ var r=0; for(var i=arguments.length-1;i>0;i--) r=r*x+arguments[i]; return r; }

function series(ser, tau){
  var tot=0, tp=1;
  for(var p=0;p<ser.length;p++){
    var arr=ser[p], sum=0;
    for(var k=0;k<arr.length;k++){ var t=arr[k]; sum+=t[0]*Math.cos(t[1]+t[2]*tau); }
    tot+=sum*tp; tp*=tau;
  }
  return tot;
}
/* Heliocentric ecliptic coordinates, mean equinox of date (VSOP87D). */
function helio(pl, jde){
  var tau=(jde-2451545)/365250;
  return { lon: pmod(series(pl.L,tau),TWO_PI), lat: series(pl.B,tau), range: series(pl.R,tau) };
}
/* Meeus (32.3): VSOP87 dynamical frame -> FK5. */
function toFK5(lon, lat, jde){
  var T=(jde-2451545)/36525;
  var Lp=lon-(1.397+0.00031*T)*T*d, sL=Math.sin(Lp), cL=Math.cos(Lp);
  return { lon: lon+(-0.09033+0.03916*(cL+sL)*Math.tan(lat))*s2r,
           lat: lat+0.03916*(cL-sL)*s2r };
}
/* Geometric geocentric Sun, mean equinox of date (Meeus 25.9). */
function sunVSOP(jde){
  var e=helio(VSOP.earth,jde), s=e.lon+Math.PI, T=(jde-2451545)/36525;
  var lp=s-1.397*d*T-0.00031*d*T*T;
  return { lon: pmod(s-0.09033*s2r,TWO_PI),
           lat: 0.03916*s2r*(Math.cos(lp)-Math.sin(lp)) - e.lat,
           range: e.range };
}
/* Meeus (21.5)/(21.7): precess ecliptic coordinates between Julian epochs. */
function precessEcl(lon, lat, epochFrom, epochTo){
  var s=s2r, eta, pi, p;
  var T=(epochFrom-2000)*0.01, t=(epochTo-epochFrom)*0.01;
  var etaC=[horner(T,47.0029*s,-0.06603*s,0.000598*s), -0.03302*s+0.000598*s*T, 0.000060*s];
  var piC =[horner(T,174.876384*d,3289.4789*s,0.60622*s), -869.8089*s-0.50491*s*T, 0.03536*s];
  var pC  =[horner(T,5029.0966*s,2.22226*s,-0.000042*s), 1.11113*s-0.000042*s*T, -0.000006*s];
  pi = horner(t,piC[0],piC[1],piC[2]);
  p  = horner(t,pC[0],pC[1],pC[2])*t;
  eta= horner(t,etaC[0],etaC[1],etaC[2])*t;
  var sb=Math.sin(lat), cb=Math.cos(lat), sd=Math.sin(pi-lon), cd=Math.cos(pi-lon);
  var A=Math.cos(eta)*cb*sd-Math.sin(eta)*sb, B=cb*cd, C=Math.cos(eta)*sb+Math.sin(eta)*cb*sd;
  return { lon: p+pi-Math.atan2(A,B), lat: Math.asin(C) };
}
/* Low-precision nutation (Meeus ch. 22, ~0.5" / 0.1"). */
function nutation(jde){
  var T=(jde-2451545)/36525;
  var Om=(125.04452-1934.136261*T)*d, L=(280.4665+36000.7698*T)*d, Lp=(218.3165+481267.8813*T)*d;
  return { dpsi: (-17.20*Math.sin(Om)-1.32*Math.sin(2*L)-0.23*Math.sin(2*Lp)+0.21*Math.sin(2*Om))*s2r,
           deps: (9.20*Math.cos(Om)+0.57*Math.cos(2*L)+0.10*Math.cos(2*Lp)-0.09*Math.cos(2*Om))*s2r };
}
function meanObliquity(jde){
  var T=(jde-2451545)/36525;
  return (23+26/60+21.448/3600)*d + (-46.815*T-0.00059*T*T+0.001813*T*T*T)*s2r;
}
function eclToEq(lon, lat, eps){
  var se=Math.sin(eps), ce=Math.cos(eps), sl=Math.sin(lon);
  return { ra: pmod(Math.atan2(sl*ce-Math.tan(lat)*se, Math.cos(lon)),TWO_PI),
           dec: Math.asin(Math.sin(lat)*ce+Math.cos(lat)*se*sl) };
}
var LIGHT = 0.0057755183;   // days per AU

/* Terrestrial time: ΔT ≈ 69 s through the late 2020s; the moons move a few
   thousandths of a radius in that time, so a constant is plenty. */
function jdeOf(date){ return date.getTime()/86400000 + 2440587.5 + 69.2/86400; }

/* ================= Satellites — Meeus ch. 46 ================= */
function Qs(jde){
  var q=this;
  q.t1=jde-2411093; q.t2=q.t1/365.25; q.t3=(jde-2433282.423)/365.25+1950;
  q.t4=jde-2411368; q.t5=q.t4/365.25; q.t6=jde-2415020; q.t7=q.t6/36525;
  q.t8=q.t6/365.25; q.t9=(jde-2442000.5)/365.25; q.t10=jde-2409786; q.t11=q.t10/36525;
  q.W0=5.095*d*(q.t3-1866.39); q.W1=74.4*d+32.39*d*q.t2; q.W2=134.3*d+92.62*d*q.t2;
  q.W3=42*d-0.5118*d*q.t5; q.W4=276.59*d+0.5118*d*q.t5;
  q.W5=267.2635*d+1222.1136*d*q.t7; q.W6=175.4762*d+1221.5515*d*q.t7;
  q.W7=2.4891*d+0.002435*d*q.t7; q.W8=113.35*d-0.2597*d*q.t7;
  q.s1=Math.sin(28.0817*d); q.c1=Math.cos(28.0817*d);
  q.s2=Math.sin(168.8112*d); q.c2=Math.cos(168.8112*d);
  q.e1=0.05589-0.000346*q.t7;
  q.sW0=Math.sin(q.W0); q.s3W0=Math.sin(3*q.W0); q.s5W0=Math.sin(5*q.W0);
  q.sW1=Math.sin(q.W1); q.sW2=Math.sin(q.W2);
  q.sW3=Math.sin(q.W3); q.cW3=Math.cos(q.W3); q.sW4=Math.sin(q.W4); q.cW4=Math.cos(q.W4);
  q.sW7=Math.sin(q.W7); q.cW7=Math.cos(q.W7);
}
Qs.prototype.mimas=function(){
  var L=127.64*d+381.994497*d*this.t1-43.57*d*this.sW0-0.72*d*this.s3W0-0.02144*d*this.s5W0;
  var p=106.1*d+365.549*d*this.t2, M=L-p;
  var C=2.18287*d*Math.sin(M)+0.025988*d*Math.sin(2*M)+0.00043*d*Math.sin(3*M);
  return {l:L+C, r:3.06879/(1+0.01905*Math.cos(M+C)), g:1.563*d, O:54.5*d-365.072*d*this.t2};
};
Qs.prototype.enceladus=function(){
  var L=200.317*d+262.7319002*d*this.t1+0.25667*d*this.sW1+0.20883*d*this.sW2;
  var p=309.107*d+123.44121*d*this.t2, M=L-p;
  var C=0.55577*d*Math.sin(M)+0.00168*d*Math.sin(2*M);
  return {l:L+C, r:3.94118/(1+0.00485*Math.cos(M+C)), g:0.0262*d, O:348*d-151.95*d*this.t2};
};
Qs.prototype.tethys=function(){
  return {l:285.306*d+190.69791226*d*this.t1+2.063*d*this.sW0+0.03409*d*this.s3W0+0.001015*d*this.s5W0,
          r:4.880998, g:1.0976*d, O:111.33*d-72.2441*d*this.t2};
};
Qs.prototype.dione=function(){
  var L=254.712*d+131.53493193*d*this.t1-0.0215*d*this.sW1-0.01733*d*this.sW2;
  var p=174.8*d+30.82*d*this.t2, M=L-p;
  var C=0.24717*d*Math.sin(M)+0.00033*d*Math.sin(2*M);
  return {l:L+C, r:6.24871/(1+0.002157*Math.cos(M+C)), g:0.0139*d, O:232*d-30.27*d*this.t2};
};
Qs.prototype.rhea=function(){
  var pp=342.7*d+10.057*d*this.t2;
  var a1=0.000265*Math.sin(pp)+0.001*this.sW4, a2=0.000265*Math.cos(pp)+0.001*this.cW4;
  var e=Math.hypot(a1,a2), p=Math.atan2(a1,a2), N=345*d-10.057*d*this.t2;
  var lp=359.244*d+79.6900472*d*this.t1+0.086754*d*Math.sin(N);
  var i=28.0362*d+0.346898*d*Math.cos(N)+0.0193*d*this.cW3;
  var O=168.8034*d+0.736936*d*Math.sin(N)+0.041*d*this.sW3;
  return this.subr(lp,p,e,8.725924,O,i);
};
Qs.prototype.subr=function(lp,p,e,a,O,i){
  var M=lp-p, e2=e*e, e3=e2*e, e4=e2*e2, e5=e3*e2;
  var C=(2*e-0.25*e3+0.0520833333*e5)*Math.sin(M)+(1.25*e2-0.458333333*e4)*Math.sin(2*M)
       +(1.083333333*e3-0.671875*e5)*Math.sin(3*M)+1.072917*e4*Math.sin(4*M)+1.142708*e5*Math.sin(5*M);
  var r=a*(1-e2)/(1+e*Math.cos(M+C));
  var g=O-168.8112*d, si=Math.sin(i), ci=Math.cos(i), sg=Math.sin(g), cg=Math.cos(g);
  var a1=si*sg, a2=this.c1*si*cg-this.s1*ci;
  var gam=Math.asin(Math.hypot(a1,a2)), u=Math.atan2(a1,a2);
  var h=this.c1*si-this.s1*ci*cg, psi=Math.atan2(this.s1*sg,h);
  return {l:lp+C+u-g-psi, r:r, g:gam, O:168.8112*d+u};
};
Qs.prototype.titan=function(){
  var L=261.1582*d+22.57697855*d*this.t4+0.074025*d*this.sW3;
  var ip=27.45141*d+0.295999*d*this.cW3, Op=168.66925*d+0.628808*d*this.sW3;
  var sip=Math.sin(ip), cip=Math.cos(ip), sOW=Math.sin(Op-this.W8), cOW=Math.cos(Op-this.W8);
  var a1=this.sW7*sOW, a2=this.cW7*sip-this.sW7*cip*cOW;
  var g0=102.8623*d, psi=Math.atan2(a1,a2), s=Math.hypot(a1,a2);
  var g=this.W4-Op-psi, w=0;
  for(var k=0;k<3;k++){ w=this.W4+0.37515*d*(Math.sin(2*g)-Math.sin(2*g0)); g=w-Op-psi; }
  var ep=0.029092+0.00019048*(Math.cos(2*g)-Math.cos(2*g0));
  var qq=2*(this.W5-w);
  var b1=sip*sOW, b2=this.cW7*sip*cOW-this.sW7*cip;
  var th=Math.atan2(b1,b2)+this.W8;
  var e=ep+0.002778797*ep*Math.cos(qq), p=w+0.159215*d*Math.sin(qq);
  var u=2*this.W5-2*th+psi;
  var h=0.9375*ep*ep*Math.sin(qq)+0.1875*s*s*Math.sin(2*(this.W5-th));
  var lp=L-0.254744*d*(this.e1*Math.sin(this.W6)+0.75*this.e1*this.e1*Math.sin(2*this.W6)+h);
  var i=ip+0.031843*d*s*Math.cos(u), O=Op+0.031843*d*s*Math.sin(u)/sip;
  return this.subr(lp,p,e,20.216193,O,i);
};
Qs.prototype.hyperion=function(){
  var eta=92.39*d+0.5621071*d*this.t6, z=148.19*d-19.18*d*this.t8;
  var th=184.8*d-35.41*d*this.t9, thp=th-7.5*d;
  var as=176*d+12.22*d*this.t8, bs=8*d+24.44*d*this.t8, cs=bs+5*d;
  var w=69.898*d-18.67088*d*this.t8, phi=2*(w-this.W5), chi=94.9*d-2.292*d*this.t8;
  var S=Math.sin, Cc=Math.cos;
  var a=24.50601-0.08686*Cc(eta)-0.00166*Cc(z+eta)+0.00175*Cc(z-eta);
  var e=0.103458-0.004099*Cc(eta)-0.000167*Cc(z+eta)+0.000235*Cc(z-eta)
       +0.02303*Cc(z)-0.00212*Cc(2*z)+0.000151*Cc(3*z)+0.00013*Cc(phi);
  var p=w+0.15648*d*S(chi)-0.4457*d*S(eta)-0.2657*d*S(z+eta)-0.3573*d*S(z-eta)
       -12.872*d*S(z)+1.668*d*S(2*z)-0.2419*d*S(3*z)-0.07*d*S(phi);
  var lp=177.047*d+16.91993829*d*this.t6+0.15648*d*S(chi)+9.142*d*S(eta)
       +0.007*d*S(2*eta)-0.014*d*S(3*eta)+0.2275*d*S(z+eta)+0.2112*d*S(z-eta)
       -0.26*d*S(z)-0.0098*d*S(2*z)-0.013*d*S(as)+0.017*d*S(bs)-0.0303*d*S(phi);
  var i=27.3347*d+0.6434886*d*Cc(chi)+0.315*d*this.cW3+0.018*d*Cc(th)-0.018*d*Cc(cs);
  var O=168.6812*d+1.40136*d*Cc(chi)+0.68599*d*this.sW3-0.0392*d*S(cs)+0.0366*d*S(thp);
  return this.subr(lp,p,e,a,O,i);
};
Qs.prototype.iapetus=function(){
  var S=Math.sin, Cc=Math.cos;
  var L=261.1582*d+22.57697855*d*this.t4;
  var wp=91.796*d+0.562*d*this.t7, psi=4.367*d-0.195*d*this.t7;
  var th=146.819*d-3.198*d*this.t7, phi=60.47*d+1.521*d*this.t7, PHI=205.055*d-2.091*d*this.t7;
  var ep=0.028298+0.001156*this.t11, w0=352.91*d+11.71*d*this.t11;
  var mu=76.3852*d+4.53795125*d*this.t10;
  var ip=horner(this.t11,18.4602*d,-0.9518*d,-0.072*d,0.0054*d);
  var Op=horner(this.t11,143.198*d,-3.919*d,0.116*d,0.008*d);
  var l=mu-w0, g=w0-Op-psi, g1=w0-Op-phi, ls=this.W5-wp, gs=wp-th, lT=L-this.W4, gT=this.W4-PHI;
  var u1=2*(l+g-ls-gs), u2=l+g1-lT-gT, u3=l+2*(g-ls-gs), u4=lT+gT-g1, u5=2*(ls+gs);
  var a=58.935028+0.004638*Cc(u1)+0.058222*Cc(u2);
  var e=ep-0.0014097*Cc(g1-gT)+0.0003733*Cc(u5-2*g)+0.000118*Cc(u3)+0.0002408*Cc(l)
       +0.0002849*Cc(l+u2)+0.000619*Cc(u4);
  var w=0.08077*d*S(g1-gT)+0.02139*d*S(u5-2*g)-0.00676*d*S(u3)+0.0138*d*S(l)
       +0.01632*d*S(l+u2)+0.03547*d*S(u4);
  var p=w0+w/ep;
  var lp=mu-0.04299*d*S(u2)-0.00789*d*S(u1)-0.06312*d*S(ls)-0.00295*d*S(2*ls)
       -0.02231*d*S(u5)+0.0065*d*S(u5+psi);
  var i=ip+0.04204*d*Cc(u5+psi)+0.00235*d*Cc(l+g1+lT+gT+phi)+0.0036*d*Cc(u2+phi);
  var wq=0.04204*d*S(u5+psi)+0.00235*d*S(l+g1+lT+gT+phi)+0.00358*d*S(u2+phi);
  return this.subr(lp,p,e,a,Op+wq/Math.sin(ip),i);
};

var NAMES=['Mimas','Enceladus','Tethys','Dione','Rhea','Titan','Hyperion','Iapetus'];
var KK=[0,20947,23715,26382,29876,35313,53800,59222,91820];

function moons(jde){
  var sun=sunVSOP(jde), ss=Math.sin(sun.lon), cs=Math.cos(sun.lon), sbeta=Math.sin(sun.lat);
  var R=sun.range, D=9, x,y,z,_jde;
  for(var it=0;it<2;it++){
    _jde=jde-LIGHT*D;
    var h=helio(VSOP.saturn,_jde), f=toFK5(h.lon,h.lat,_jde);
    var sl=Math.sin(f.lon), cl=Math.cos(f.lon), sb=Math.sin(f.lat), cb=Math.cos(f.lat);
    x=h.range*cb*cl+R*cs; y=h.range*cb*sl+R*ss; z=h.range*sb+R*sbeta;
    D=Math.sqrt(x*x+y*y+z*z);
  }
  var l0=Math.atan2(y,x), b0=Math.atan(z/Math.hypot(x,y));
  var yr=2000+(jde-2451545)/365.25;
  var pe=precessEcl(l0,b0,yr,2000+(2433282.4235-2451545)/365.25);
  l0=pe.lon; b0=pe.lat;
  var q=new Qs(_jde);
  var s4=[null,q.mimas(),q.enceladus(),q.tethys(),q.dione(),q.rhea(),q.titan(),q.hyperion(),q.iapetus()];
  var X=[0],Y=[0],Z=[1],j;
  for(j=1;j<=8;j++){
    var u=s4[j].l-s4[j].O, w=s4[j].O-168.8112*d, r=s4[j].r;
    var su=Math.sin(u), cu=Math.cos(u), sw=Math.sin(w), cw=Math.cos(w), sg=Math.sin(s4[j].g), cg=Math.cos(s4[j].g);
    X[j]=r*(cu*cw-su*cg*sw); Y[j]=r*(su*cw*cg+cu*sw); Z[j]=r*su*sg;
  }
  X[0]=0; Y[0]=0;
  var sl0=Math.sin(l0), cl0=Math.cos(l0), sb0=Math.sin(b0), cb0=Math.cos(b0);
  var A=[],Bv=[],Cv=[];
  for(j=0;j<=8;j++){
    var a=X[j], b=q.c1*Y[j]-q.s1*Z[j], c=q.s1*Y[j]+q.c1*Z[j];
    var a0=q.c2*a-q.s2*b; b=q.s2*a+q.c2*b; a=a0;
    A[j]=a*sl0-b*cl0; b=a*cl0+b*sl0;
    Bv[j]=b*cb0+c*sb0; Cv[j]=c*cb0-b*sb0;
  }
  var DD=Math.atan2(A[0],Cv[0]), sD=Math.sin(DD), cD=Math.cos(DD), out=[];
  for(j=1;j<=8;j++){
    var XX=A[j]*cD-Cv[j]*sD, YY=A[j]*sD+Cv[j]*cD, ZZ=Bv[j];
    var dd=XX/s4[j].r;
    XX+=Math.abs(ZZ)/KK[j]*Math.sqrt(Math.max(0,1-dd*dd));
    var W=D/(D+ZZ/2475);
    out.push({ name:NAMES[j-1], X:XX*W, Y:YY*W, Z:ZZ, r:s4[j].r });
  }
  return { moons:out, delta:D };
}

/* ================= Ring & disc geometry — Meeus ch. 45 ================= */
function ring(jde){
  var T=(jde-2451545)/36525;
  var i=horner(T,28.075216*d,-0.012998*d,0.000004*d), O=horner(T,169.50847*d,1.394681*d,0.000412*d);
  var e=helio(VSOP.earth,jde), ef=toFK5(e.lon,e.lat,jde);
  var R=e.range, l0=ef.lon, b0=ef.lat, sl0=Math.sin(l0), cl0=Math.cos(l0), sb0=Math.sin(b0);
  var D=9, l,b,r,x,y,z;
  for(var it=0;it<2;it++){
    var h=helio(VSOP.saturn,jde-LIGHT*D), f=toFK5(h.lon,h.lat,jde);
    r=h.range; l=f.lon; b=f.lat;
    var sl=Math.sin(l), cl=Math.cos(l), sb=Math.sin(b), cb=Math.cos(b);
    x=r*cb*cl-R*cl0; y=r*cb*sl-R*sl0; z=r*sb-R*sb0;
    D=Math.sqrt(x*x+y*y+z*z);
  }
  var lam=Math.atan2(y,x), bet=Math.atan(z/Math.hypot(x,y));
  // angular distance from the Sun as seen from Earth (the Sun sits at l0+180°)
  var elong=Math.acos(Math.max(-1,Math.min(1,Math.cos(bet)*Math.cos(lam-l0-Math.PI))));
  var si=Math.sin(i), ci=Math.cos(i), sbe=Math.sin(bet), cbe=Math.cos(bet);
  var B=Math.asin(si*cbe*Math.sin(lam-O)-ci*sbe);
  var N=113.6655*d+0.8771*d*T;
  var lp=l-0.01759*d/r, bp=b-0.000764*d*Math.cos(l-N)/r;
  var sbp=Math.sin(bp), cbp=Math.cos(bp);
  var Bs=Math.asin(si*cbp*Math.sin(lp-O)-ci*sbp);
  var U1=Math.atan2(si*sbp+ci*cbp*Math.sin(lp-O), cbp*Math.cos(lp-O));
  var U2=Math.atan2(si*sbe+ci*cbe*Math.sin(lam-O), cbe*Math.cos(lam-O));
  var dU=U1-U2; if(dU>Math.PI) dU-=TWO_PI; if(dU<-Math.PI) dU+=TWO_PI;
  var nu=nutation(jde), eps=meanObliquity(jde)+nu.deps;
  var lam0=O-Math.PI/2, bet0=Math.PI/2-i;
  lam+=0.005693*d*Math.cos(l0-lam)/cbe; bet+=0.005693*d*Math.sin(l0-lam)*sbe;
  lam0+=nu.dpsi; lam+=nu.dpsi;
  var q0=eclToEq(lam0,bet0,eps), q=eclToEq(lam,bet,eps);
  var P=Math.atan2(Math.cos(q0.dec)*Math.sin(q0.ra-q.ra),
                   Math.sin(q0.dec)*Math.cos(q.dec)-Math.cos(q0.dec)*Math.sin(q.dec)*Math.cos(q0.ra-q.ra));
  return { B:B, Bs:Bs, dU:dU, P:P, delta:D, r:r, ra:q.ra, dec:q.dec, elong:elong,
           // apparent equatorial radius, arcsec (Meeus: 8.2729"/Δ... use 60268 km)
           radiusArcsec: 60268/149597870.7/D*206264.806 };
}

/* Saturn's visual magnitude (Meeus 41.x, with the ring term). */
function magnitude(g){
  var sB=Math.abs(Math.sin(g.B));
  return -8.88 + 5*Math.log10(g.r*g.delta) + 0.044*Math.abs(g.dU/d) - 2.60*sB + 1.25*sB*sB;
}

/* One call for everything the page needs. */
function compute(date){
  var jde=jdeOf(date), g=ring(jde), m=moons(jde);
  g.moons=m.moons; g.mag=magnitude(g); g.date=date;
  return g;
}

global.SaturnEphem = { compute:compute, ring:ring, moons:moons, jdeOf:jdeOf, NAMES:NAMES };
})(typeof self!=='undefined'?self:this);
