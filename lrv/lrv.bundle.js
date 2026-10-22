/*! Dark Sky Almanac © 2026 Tyler Webb · Zion Canyon Light. All rights reserved. Third-party license notices are kept below. */
var op=0,hu=1,cp=2;var gr=1,lp=2,ba=3,ki=0,Dn=1,Gn=2,zi=0,_a=1,uu=2,du=3,fu=4,hp=5;var xr=100,up=101,dp=102,fp=103,pp=104,mp=200,gp=201,xp=202,bp=203,pu=204,mu=205,_p=206,yp=207,vp=208,Mp=209,Sp=210,Ep=211,wp=212,Tp=213,Ap=214,Dc=0,Fc=1,Nc=2,ta=3,Uc=4,Oc=5,kc=6,zc=7,gu=0,Rp=1,Cp=2,vi=0,xu=1,bu=2,_u=3,vo=4,yu=5,vu=6,Mu=7,$h="attached",Pp="detached",Su=300,zs=301,br=302,ya=303,sl=304,Mo=306,On=1e3,ai=1001,na=1002,tn=1003,rl=1004;var _r=1005;var Yt=1006,va=1007;var Zn=1008;var Wn=1009,Eu=1010,wu=1011,Ma=1012,al=1013,Mi=1014,$n=1015,Si=1016,ol=1017,cl=1018,Sa=1020,Tu=35902,Au=35899,Ru=1021,Cu=1022,Qn=1023,Fi=1026,Bs=1027,ll=1028,hl=1029,Hs=1030,ul=1031;var dl=1033,So=33776,Eo=33777,wo=33778,To=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,bl=37492,_l=37496,yl=37488,vl=37489,Ao=37490,Ml=37491,Sl=37808,El=37809,wl=37810,Tl=37811,Al=37812,Rl=37813,Cl=37814,Pl=37815,Il=37816,Ll=37817,Dl=37818,Fl=37819,Nl=37820,Ul=37821,Ol=36492,kl=36494,zl=36495,Bl=36283,Hl=36284,Ro=36285,Vl=36286;var ar=2300,or=2301,Pc=2302,Qh=2303,eu=2400,tu=2401,nu=2402,Ip=2500;var Pu=0,Co=1,Ea=2,Lp=3200,Iu=3201;var Gl=0,Dp=1,oi="",Bt="srgb",In="srgb-linear",io="linear",wt="srgb";var Ic=7680;var Fp=519,Np=512,Up=513,Op=514,Wl=515,kp=516,zp=517,ql=518,Bp=519,Lu=35044;var Du="300 es",gi=2e3,ia=2001;function r0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function a0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hp(){let i=sa("canvas");return i.style.display="block",i}var Ef={},ra=null;function so(...i){let e="THREE."+i.shift();ra?ra("log",e,...i):console.log(e,...i)}function Vp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=Vp(i);let e="THREE."+i.shift();if(ra)ra("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Oe(...i){i=Vp(i);let e="THREE."+i.shift();if(ra)ra("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rr(...i){let e=i.join(" ");e in Ef||(Ef[e]=!0,Re(...i))}function Gp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wp={[Dc]:Fc,[Nc]:kc,[Uc]:zc,[ta]:Oc,[Fc]:Dc,[kc]:Nc,[zc]:Uc,[Oc]:ta},Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wf=1234567,to=Math.PI/180,cr=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Fu(i,e){return(i%e+e)%e}function o0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function c0(i,e,t){return i!==e?(t-i)/(e-i):0}function no(i,e,t){return(1-t)*i+t*e}function l0(i,e,t,n){return no(i,e,1-Math.exp(-t*n))}function h0(i,e=1){return e-Math.abs(Fu(i,e*2)-e)}function u0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function d0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function f0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function p0(i,e){return i+Math.random()*(e-i)}function m0(i){return i*(.5-Math.random())}function g0(i){i!==void 0&&(wf=i);let e=wf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x0(i){return i*to}function b0(i){return i*cr}function _0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function y0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function v0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function M0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Nu={DEG2RAD:to,RAD2DEG:cr,generateUUID:xi,clamp:it,euclideanModulo:Fu,mapLinear:o0,inverseLerp:c0,lerp:no,damp:l0,pingpong:h0,smoothstep:u0,smootherstep:d0,randInt:f0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:x0,radToDeg:b0,isPowerOfTwo:_0,ceilPowerOfTwo:y0,floorPowerOfTwo:v0,setQuaternionFromProperEuler:M0,normalize:Ct,denormalize:mi},ke=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let _=Math.acos(g),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+x*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rh.copy(this).projectOnVector(e),this.sub(Rh)}reflect(e){return this.sub(Rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rh=new R,Tf=new ht,Ne=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],_=s[1],M=s[4],b=s[7],v=s[2],S=s[5],T=s[8];return r[0]=a*x+o*_+l*v,r[3]=a*g+o*M+l*S,r[6]=a*p+o*b+l*T,r[1]=c*x+h*_+u*v,r[4]=c*g+h*M+u*S,r[7]=c*p+h*b+u*T,r[2]=d*x+f*_+m*v,r[5]=d*g+f*M+m*S,r[8]=d*p+f*b+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ch.makeScale(e,t)),this}rotate(e){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ch.makeRotation(-e)),this}translate(e,t){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ch=new Ne,Af=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rf=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S0(){let i={enabled:!0,workingColorSpace:In,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===wt&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(s.r=ea(s.r),s.g=ea(s.g),s.b=ea(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[In]:{primaries:e,whitePoint:n,transfer:io,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}var Je=S0();function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ea(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Br,Bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=sa("canvas")),Br.width=e.width,Br.height=e.height;let s=Br.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ss(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ss(t[n]/255)*255):t[n]=ss(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},E0=0,aa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ph(s[a].image)):r.push(Ph(s[a]))}else r=Ph(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var w0=0,Ih=new R,un=class i extends Ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ai,s=ai,r=Yt,a=Zn,o=Qn,l=Wn,c=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=xi(),this.name="",this.source=new aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case On:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case On:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Su;un.DEFAULT_ANISOTROPY=1;var ft=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,b=(f+1)/2,v=(p+1)/2,S=(h+d)/4,T=(u+x)/4,y=(m+g)/4;return M>b&&M>v?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=T/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=y/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=T/r,s=y/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hc=class extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new un(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new aa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends Hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ro=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vc=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ze=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,g)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Hr.setFromMatrixColumn(e,0).length(),r=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T0,e,A0)}lookAt(e,t,n){let s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),ws.crossVectors(n,Kn),ws.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),ws.crossVectors(n,Kn)),ws.normalize(),rc.crossVectors(Kn,ws),s[0]=ws.x,s[4]=rc.x,s[8]=Kn.x,s[1]=ws.y,s[5]=rc.y,s[9]=Kn.y,s[2]=ws.z,s[6]=rc.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],M=n[7],b=n[11],v=n[15],S=s[0],T=s[4],y=s[8],w=s[12],C=s[1],P=s[5],F=s[9],D=s[13],I=s[2],O=s[6],B=s[10],X=s[14],te=s[3],q=s[7],J=s[11],Q=s[15];return r[0]=a*S+o*C+l*I+c*te,r[4]=a*T+o*P+l*O+c*q,r[8]=a*y+o*F+l*B+c*J,r[12]=a*w+o*D+l*X+c*Q,r[1]=h*S+u*C+d*I+f*te,r[5]=h*T+u*P+d*O+f*q,r[9]=h*y+u*F+d*B+f*J,r[13]=h*w+u*D+d*X+f*Q,r[2]=m*S+x*C+g*I+p*te,r[6]=m*T+x*P+g*O+p*q,r[10]=m*y+x*F+g*B+p*J,r[14]=m*w+x*D+g*X+p*Q,r[3]=_*S+M*C+b*I+v*te,r[7]=_*T+M*P+b*O+v*q,r[11]=_*y+M*F+b*B+v*J,r[15]=_*w+M*D+b*X+v*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],_=l*f-c*d,M=o*f-c*u,b=o*d-l*u,v=a*f-c*h,S=a*d-l*h,T=a*u-o*h;return t*(x*_-g*M+p*b)-n*(m*_-g*v+p*S)+s*(m*M-x*v+p*T)-r*(m*b-x*S+g*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],_=t*o-n*a,M=t*l-s*a,b=t*c-r*a,v=n*l-s*o,S=n*c-r*o,T=s*c-r*l,y=h*x-u*m,w=h*g-d*m,C=h*p-f*m,P=u*g-d*x,F=u*p-f*x,D=d*p-f*g,I=_*D-M*F+b*P+v*C-S*w+T*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return e[0]=(o*D-l*F+c*P)*O,e[1]=(s*F-n*D-r*P)*O,e[2]=(x*T-g*S+p*v)*O,e[3]=(d*S-u*T-f*v)*O,e[4]=(l*C-a*D-c*w)*O,e[5]=(t*D-s*C+r*w)*O,e[6]=(g*b-m*T-p*M)*O,e[7]=(h*T-d*b+f*M)*O,e[8]=(a*F-o*C+c*y)*O,e[9]=(n*C-t*F-r*y)*O,e[10]=(m*S-x*b+p*_)*O,e[11]=(u*b-h*S-f*_)*O,e[12]=(o*w-a*P-l*y)*O,e[13]=(t*P-n*w+s*y)*O,e[14]=(x*M-m*v-g*_)*O,e[15]=(h*v-u*M+d*_)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,x=a*h,g=a*u,p=o*u,_=l*c,M=l*h,b=l*u,v=n.x,S=n.y,T=n.z;return s[0]=(1-(x+p))*v,s[1]=(f+b)*v,s[2]=(m-M)*v,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(d+p))*S,s[6]=(g+_)*S,s[7]=0,s[8]=(m+M)*T,s[9]=(g-_)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Hr.set(s[0],s[1],s[2]).length(),o=Hr.set(s[4],s[5],s[6]).length(),l=Hr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ui.copy(this);let c=1/a,h=1/o,u=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=gi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===gi)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ia)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===gi)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===ia)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hr=new R,ui=new ze,T0=new R(0,0,0),A0=new R(1,1,1),ws=new R,rc=new R,Kn=new R,Cf=new ze,Pf=new ht,bi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pf.setFromEuler(this),this.setFromQuaternion(Pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},R0=0,If=new R,Vr=new ht,$i=new ze,ac=new R,ja=new R,C0=new R,P0=new ht,Lf=new R(1,0,0),Df=new R(0,1,0),Ff=new R(0,0,1),Nf={type:"added"},I0={type:"removed"},Gr={type:"childadded",child:null},Lh={type:"childremoved",child:null},Ht=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new bi,n=new ht,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ne}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Lf,e)}rotateY(e){return this.rotateOnAxis(Df,e)}rotateZ(e){return this.rotateOnAxis(Ff,e)}translateOnAxis(e,t){return If.copy(e).applyQuaternion(this.quaternion),this.position.add(If.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lf,e)}translateY(e){return this.translateOnAxis(Df,e)}translateZ(e){return this.translateOnAxis(Ff,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ac.copy(e):ac.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(ja,ac,this.up):$i.lookAt(ac,ja,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),Vr.setFromRotationMatrix($i),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,C0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,P0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new R(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var It=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},L0={type:"move"},oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},oc={h:0,s:0,l:0};function Dh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Fu(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Dh(a,r,e+1/3),this.g=Dh(a,r,e),this.b=Dh(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=qp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Je.workingToColorSpace(Sn.copy(this),e),Math.round(it(Sn.r*255,0,255))*65536+Math.round(it(Sn.g*255,0,255))*256+Math.round(it(Sn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Bt){Je.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,s=Sn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(oc);let n=no(Ts.h,oc.h,t),s=no(Ts.s,oc.s,t),r=no(Ts.l,oc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Le;Le.NAMES=qp;var ca=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},di=new R,Qi=new R,Fh=new R,es=new R,Wr=new R,qr=new R,Uf=new R,Nh=new R,Uh=new R,Oh=new R,kh=new ft,zh=new ft,Bh=new ft,Is=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),Qi.subVectors(n,t),Fh.subVectors(e,t);let a=di.dot(di),o=di.dot(Qi),l=di.dot(Fh),c=Qi.dot(Qi),h=Qi.dot(Fh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,es.x),l.addScaledVector(a,es.y),l.addScaledVector(o,es.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return kh.setScalar(0),zh.setScalar(0),Bh.setScalar(0),kh.fromBufferAttribute(e,t),zh.fromBufferAttribute(e,n),Bh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(kh,r.x),a.addScaledVector(zh,r.y),a.addScaledVector(Bh,r.z),a}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),Qi.subVectors(e,t),di.cross(Qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),di.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Wr.subVectors(s,n),qr.subVectors(r,n),Nh.subVectors(e,n);let l=Wr.dot(Nh),c=qr.dot(Nh);if(l<=0&&c<=0)return t.copy(n);Uh.subVectors(e,s);let h=Wr.dot(Uh),u=qr.dot(Uh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Wr,a);Oh.subVectors(e,r);let f=Wr.dot(Oh),m=qr.dot(Oh);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(qr,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Uf.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Uf,o);let p=1/(g+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Wr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cc.copy(n.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),lc.subVectors(this.max,Ka),Xr.subVectors(e.a,Ka),jr.subVectors(e.b,Ka),Kr.subVectors(e.c,Ka),As.subVectors(jr,Xr),Rs.subVectors(Kr,jr),tr.subVectors(Xr,Kr);let t=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-tr.z,tr.y,As.z,0,-As.x,Rs.z,0,-Rs.x,tr.z,0,-tr.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-tr.y,tr.x,0];return!Hh(t,Xr,jr,Kr,lc)||(t=[1,0,0,0,1,0,0,0,1],!Hh(t,Xr,jr,Kr,lc))?!1:(hc.crossVectors(As,Rs),t=[hc.x,hc.y,hc.z],Hh(t,Xr,jr,Kr,lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ts=[new R,new R,new R,new R,new R,new R,new R,new R],fi=new R,cc=new Jt,Xr=new R,jr=new R,Kr=new R,As=new R,Rs=new R,tr=new R,Ka=new R,lc=new R,hc=new R,nr=new R;function Hh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){nr.fromArray(i,r);let o=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),h=n.dot(nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var an=new R,uc=new ke,D0=0,je=class extends Ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:D0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var lr=class extends je{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oo=class extends je{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends je{constructor(e,t,n){super(new Float32Array(e),t,n)}},F0=new Jt,Ya=new R,Vh=new R,zn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):F0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);let t=Ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ya,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(Vh)),this.expandByPoint(Ya.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},N0=0,ri=new ze,Gh=new Ht,Yr=new R,Yn=new Jt,Ja=new Jt,bn=new R,Tt=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r0(e)?oo:lr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return Gh.lookAt(e),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ja.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(Yn.min,Ja.min),Yn.expandByPoint(bn),bn.addVectors(Yn.max,Ja.max),Yn.expandByPoint(bn)):(Yn.expandByPoint(Ja.min),Yn.expandByPoint(Ja.max))}Yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bn.fromBufferAttribute(o,c),l&&(Yr.fromBufferAttribute(e,c),bn.add(Yr)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new R,l[y]=new R;let c=new R,h=new R,u=new R,d=new ke,f=new ke,m=new ke,x=new R,g=new R;function p(y,w,C){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[y].add(x),o[w].add(x),o[C].add(x),l[y].add(g),l[w].add(g),l[C].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,w=_.length;y<w;++y){let C=_[y],P=C.start,F=C.count;for(let D=P,I=P+F;D<I;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new R,b=new R,v=new R,S=new R;function T(y){v.fromBufferAttribute(s,y),S.copy(v);let w=o[y];M.copy(w),M.sub(v.multiplyScalar(v.dot(w))).normalize(),b.crossVectors(S,w);let P=b.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,P)}for(let y=0,w=_.length;y<w;++y){let C=_[y],P=C.start,F=C.count;for(let D=P,I=P+F;D<I;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new je(d,h,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},la=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lu,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Pn=new R,ha=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new je(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wh=new R,U0=new R,O0=new Ne,pi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wh.subVectors(n,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Wh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||O0.getNormalMatrix(e),s=this.coplanarPoint(Wh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},k0=0,Bn=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=_a,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ic,this.stencilZFail=Ic,this.stencilZPass=Ic,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ns=new R,qh=new R,dc=new R,fc=new R,hr=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qh.copy(e).add(t).multiplyScalar(.5),dc.copy(t).sub(e).normalize(),fc.copy(this.origin).sub(qh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(dc),o=fc.dot(this.direction),l=-fc.dot(dc),c=fc.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qh).addScaledVector(dc,d),f}intersectSphere(e,t){if(e.radius<0)return null;ns.subVectors(e.center,this.origin);let n=ns.dot(this.direction),s=ns.dot(ns)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,_=n.y-a.y,M=n.z-a.z,b=Math.abs(l),v=Math.abs(c),S=Math.abs(h),T,y,w,C,P,F,D,I,O,B,X,te;if(b>=v&&b>=S?(w=l,F=u,O=m,te=p,l>=0?(T=c,y=h,C=d,P=f,D=x,I=g,B=_,X=M):(T=h,y=c,C=f,P=d,D=g,I=x,B=M,X=_)):v>=S?(w=c,F=d,O=x,te=_,c>=0?(T=h,y=l,C=f,P=u,D=g,I=m,B=M,X=p):(T=l,y=h,C=u,P=f,D=m,I=g,B=p,X=M)):(w=h,F=f,O=g,te=M,h>=0?(T=l,y=c,C=u,P=d,D=m,I=x,B=p,X=_):(T=c,y=l,C=d,P=u,D=x,I=m,B=_,X=p)),w===0)return null;let q=T/w,J=y/w,Q=1/w,Ee=C-q*F,ve=P-J*F,gt=D-q*O,et=I-J*O,ct=B-q*te,K=X-J*te,ne=ct*et-K*gt,ye=Ee*K-ve*ct,Be=gt*ve-et*Ee;if(s){if(ne<0||ye<0||Be<0)return null}else if((ne<0||ye<0||Be<0)&&(ne>0||ye>0||Be>0))return null;let be=ne+ye+Be;if(be===0)return null;let $e=Q*(ne*F+ye*O+Be*te);return(be>0?$e<0:$e>0)?null:this.at($e/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jn=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Of=new ze,ir=new hr,pc=new zn,kf=new R,mc=new R,gc=new R,xc=new R,Xh=new R,bc=new R,zf=new R,_c=new R,st=class extends Ht{constructor(e=new Tt,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){bc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Xh.fromBufferAttribute(u,e),a?bc.addScaledVector(Xh,h):bc.addScaledVector(Xh.sub(t),h))}t.add(bc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(r),ir.copy(e.ray).recast(e.near),!(pc.containsPoint(ir.origin)===!1&&(ir.intersectSphere(pc,kf)===null||ir.origin.distanceToSquared(kf)>(e.far-e.near)**2))&&(Of.copy(r).invert(),ir.copy(e.ray).applyMatrix4(Of),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=_,v=M;b<v;b+=3){let S=o.getX(b),T=o.getX(b+1),y=o.getX(b+2);s=yc(this,p,e,n,c,h,u,S,T,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=o.getX(g),M=o.getX(g+1),b=o.getX(g+2);s=yc(this,a,e,n,c,h,u,_,M,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=_,v=M;b<v;b+=3){let S=b,T=b+1,y=b+2;s=yc(this,p,e,n,c,h,u,S,T,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=g,M=g+1,b=g+2;s=yc(this,a,e,n,c,h,u,_,M,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function z0(i,e,t,n,s,r,a,o){let l;if(e.side===Dn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ki,o),l===null)return null;_c.copy(o),_c.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_c);return c<t.near||c>t.far?null:{distance:c,point:_c.clone(),object:i}}function yc(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,mc),i.getVertexPosition(l,gc),i.getVertexPosition(c,xc);let h=z0(i,e,t,n,mc,gc,xc,zf);if(h){let u=new R;Is.getBarycoord(zf,mc,gc,xc,u),s&&(h.uv=Is.getInterpolatedAttribute(s,o,l,c,u,new ke)),r&&(h.uv1=Is.getInterpolatedAttribute(r,o,l,c,u,new ke)),a&&(h.normal=Is.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};Is.getNormal(mc,gc,xc,d.normal),h.face=d,h.barycoord=u}return h}var Za=new ft,Bf=new ft,Hf=new ft,B0=new ft,Vf=new ze,vc=new R,jh=new zn,Gf=new ze,Kh=new hr,Ls=class extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$h,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vc),this.boundingBox.expandByPoint(vc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vc),this.boundingSphere.expandByPoint(vc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jh.copy(this.boundingSphere),jh.applyMatrix4(s),e.ray.intersectsSphere(jh)!==!1&&(Gf.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(Gf),!(this.boundingBox!==null&&Kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Bf.fromBufferAttribute(s.attributes.skinIndex,e),Hf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Za.copy(t),t.set(0,0,0,0)):(Za.set(...t,1),t.set(0,0,0)),Za.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Hf.getComponent(r);if(a!==0){let o=Bf.getComponent(r);Vf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(B0.copy(Za).applyMatrix4(Vf),a)}}return t.isVector4&&(t.w=Za.w),t.applyMatrix4(this.bindMatrixInverse)}},rs=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ds=class extends un{constructor(e=null,t=1,n=1,s,r,a,o,l,c=tn,h=tn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wf=new ze,H0=new ze,Fs=class i{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:H0;Wf.multiplyMatrices(o,t[r]),Wf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ds(t,e,e,Qn,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Re("Skeleton: No bone found with UUID:",r),a=new rs),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},as=class extends je{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Jr=new ze,qf=new ze,Mc=[],Xf=new Jt,V0=new ze,$a=new st,Qa=new zn,ur=class extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new as(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,V0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Jr),Xf.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(Xf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Jr),Qa.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(Qa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if($a.geometry=this.geometry,$a.material=this.material,$a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qa.copy(this.boundingSphere),Qa.applyMatrix4(n),e.ray.intersectsSphere(Qa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Jr),qf.multiplyMatrices(n,Jr),$a.matrixWorld=qf,$a.raycast(e,Mc);for(let a=0,o=Mc.length;a<o;a++){let l=Mc[a];l.instanceId=r,l.object=this,t.push(l)}Mc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new as(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ds(new Float32Array(s*this.count),s,this.count,ll,$n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sr=new zn,G0=new ke(.5,.5),Sc=new R,ua=class{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],_=r[12],M=r[13],b=r[14],v=r[15];if(s[0].setComponents(c-a,f-h,p-m,v-_).normalize(),s[1].setComponents(c+a,f+h,p+m,v+_).normalize(),s[2].setComponents(c+o,f+u,p+x,v+M).normalize(),s[3].setComponents(c-o,f-u,p-x,v-M).normalize(),n)s[4].setComponents(l,d,g,b).normalize(),s[5].setComponents(c-l,f-d,p-g,v-b).normalize();else if(s[4].setComponents(c-l,f-d,p-g,v-b).normalize(),t===gi)s[5].setComponents(c+l,f+d,p+g,v+b).normalize();else if(t===ia)s[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);let t=G0.distanceTo(e.center);return sr.radius=.7071067811865476+t,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sc.x=s.normal.x>0?e.max.x:e.min.x,Sc.y=s.normal.y>0?e.max.y:e.min.y,Sc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var da=class extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gc=new R,Wc=new R,jf=new ze,eo=new hr,Ec=new zn,Yh=new R,Kf=new R,dr=class extends Ht{constructor(e=new Tt,t=new da){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Gc.fromBufferAttribute(t,s-1),Wc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Gc.distanceTo(Wc);e.setAttribute("lineDistance",new dt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=r,e.ray.intersectsSphere(Ec)===!1)return;jf.copy(s).invert(),eo.copy(e.ray).applyMatrix4(jf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),_=h.getX(x+1),M=wc(this,e,eo,l,p,_,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=wc(this,e,eo,l,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=wc(this,e,eo,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=wc(this,e,eo,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Gc.fromBufferAttribute(o,s),Wc.fromBufferAttribute(o,r),t.distanceSqToSegment(Gc,Wc,Yh,Kf)>n)return;Yh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Yh);if(!(c<e.near||c>e.far))return{distance:c,point:Kf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Yf=new R,Jf=new R,co=class extends dr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Yf.fromBufferAttribute(t,s),Jf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yf.distanceTo(Jf);e.setAttribute("lineDistance",new dt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},lo=class extends dr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},os=class extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zf=new ze,iu=new hr,Tc=new zn,Ac=new R,cs=class extends Ht{constructor(e=new Tt,t=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(s),Tc.radius+=r,e.ray.intersectsSphere(Tc)===!1)return;Zf.copy(s).invert(),iu.copy(e.ray).applyMatrix4(Zf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);Ac.fromBufferAttribute(u,g),$f(Ac,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)Ac.fromBufferAttribute(u,m),$f(Ac,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $f(i,e,t,n,s,r,a){let o=iu.distanceSqToPoint(i);if(o<t){let l=new R;iu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ho=class extends un{constructor(e=[],t=zs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_i=class extends un{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ns=class extends un{constructor(e,t,n=Mi,s,r,a,o=tn,l=tn,c,h=Fi,u=1){if(h!==Fi&&h!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new aa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qc=class extends Ns{constructor(e,t=Mi,n=zs,s,r,a=tn,o=tn,l,c=Fi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},uo=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yi=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function m(x,g,p,_,M,b,v,S,T,y,w){let C=b/T,P=v/y,F=b/2,D=v/2,I=S/2,O=T+1,B=y+1,X=0,te=0,q=new R;for(let J=0;J<B;J++){let Q=J*P-D;for(let Ee=0;Ee<O;Ee++){let ve=Ee*C-F;q[x]=ve*_,q[g]=Q*M,q[p]=I,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[p]=S>0?1:-1,h.push(q.x,q.y,q.z),u.push(Ee/T),u.push(1-J/y),X+=1}}for(let J=0;J<y;J++)for(let Q=0;Q<T;Q++){let Ee=d+Q+O*J,ve=d+Q+O*(J+1),gt=d+(Q+1)+O*(J+1),et=d+(Q+1)+O*J;l.push(Ee,ve,et),l.push(ve,gt,et),te+=6}o.addGroup(f,te,w),f+=te,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var fr=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function _(){let b=new R,v=new R,S=0,T=(t-e)/n;for(let y=0;y<=r;y++){let w=[],C=y/r,P=C*(t-e)+e;for(let F=0;F<=s;F++){let D=F/s,I=D*l+o,O=Math.sin(I),B=Math.cos(I);v.x=P*O,v.y=-C*n+g,v.z=P*B,u.push(v.x,v.y,v.z),b.set(O,T,B).normalize(),d.push(b.x,b.y,b.z),f.push(D,1-C),w.push(m++)}x.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let C=x[w][y],P=x[w+1][y],F=x[w+1][y+1],D=x[w][y+1];(e>0||w!==0)&&(h.push(C,P,D),S+=3),(t>0||w!==r-1)&&(h.push(P,F,D),S+=3)}c.addGroup(p,S,0),p+=S}function M(b){let v=m,S=new ke,T=new R,y=0,w=b===!0?e:t,C=b===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;let P=m;for(let F=0;F<=s;F++){let I=F/s*l+o,O=Math.cos(I),B=Math.sin(I);T.x=w*B,T.y=g*C,T.z=w*O,u.push(T.x,T.y,T.z),d.push(0,C,0),S.x=O*.5+.5,S.y=B*.5*C+.5,f.push(S.x,S.y),m++}for(let F=0;F<s;F++){let D=v+F,I=P+F;b===!0?h.push(I,I+1,D):h.push(I+1,I,D),y+=3}c.addGroup(p,y,b===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xc=class i extends Tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new R,b=new R,v=new R;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],b),f(t[S+2],v),l(M,b,v,_)}function l(_,M,b,v){let S=v+1,T=[];for(let y=0;y<=S;y++){T[y]=[];let w=_.clone().lerp(b,y/S),C=M.clone().lerp(b,y/S),P=S-y;for(let F=0;F<=P;F++)F===0&&y===S?T[y][F]=w:T[y][F]=w.clone().lerp(C,F/P)}for(let y=0;y<S;y++)for(let w=0;w<2*(S-y)-1;w++){let C=Math.floor(w/2);w%2===0?(d(T[y][C+1]),d(T[y+1][C]),d(T[y][C])):(d(T[y][C+1]),d(T[y+1][C+1]),d(T[y+1][C]))}}function c(_){let M=new R;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(_),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function h(){let _=new R;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let b=g(_)/2/Math.PI+.5,v=p(_)/Math.PI+.5;a.push(b,1-v)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let M=a[_+0],b=a[_+2],v=a[_+4],S=Math.max(M,b,v),T=Math.min(M,b,v);S>.9&&T<.1&&(M<.2&&(a[_+0]+=1),b<.2&&(a[_+2]+=1),v<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,M){let b=_*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function m(){let _=new R,M=new R,b=new R,v=new R,S=new ke,T=new ke,y=new ke;for(let w=0,C=0;w<r.length;w+=9,C+=6){_.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),S.set(a[C+0],a[C+1]),T.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),v.copy(_).add(M).add(b).divideScalar(3);let P=g(v);x(S,C+0,_,P),x(T,C+2,M,P),x(y,C+4,b,P)}}function x(_,M,b,v){v<0&&_.x===1&&(a[M]=_.x-1),b.x===0&&b.z===0&&(a[M]=v/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var fa=class i extends Xc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ls=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let _=p*d-a;for(let M=0;M<c;M++){let b=M*u-r;m.push(b,-_,0),x.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let M=_+c*p,b=_+c*(p+1),v=_+1+c*(p+1),S=_+1+c*p;f.push(M,b,S),f.push(b,v,S)}this.setIndex(f),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},fo=class i extends Tt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new R,m=new ke;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,M=_,b=_+n+1,v=_+n+2,S=_+1;o.push(M,b,S),o.push(b,v,S)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var po=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let _=[],M=p/n,b=a+M*o,v=e*Math.cos(b),S=Math.sqrt(e*e-v*v),T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let y=0;y<=t;y++){let w=y/t,C=s+w*r;u.x=-S*Math.cos(C),u.y=v,u.z=S*Math.sin(C),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(w+T,1-M),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let M=h[p][_+1],b=h[p][_],v=h[p+1][_],S=h[p+1][_+1];(p!==0||a>0)&&f.push(M,b,S),(p!==n-1||l<Math.PI)&&f.push(b,v,S)}this.setIndex(f),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Qf(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Qf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function En(i){let e={};for(let t=0;t<i.length;t++){let n=yr(i[t]);for(let s in n)e[s]=n[s]}return e}function Qf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function W0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Xp={clone:yr,merge:En},q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=W0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jc=class extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},on=class extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hn=class extends on{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var pa=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kc=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ps(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Lc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function j0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ep(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function K0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yc=class extends Ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eu,endingEnd:eu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case tu:r=e,o=2*t-n;break;case nu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tu:a=e,l=2*n-t;break;case nu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*x+.5*m,b=f*g-f*x;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+_*a[c+v]+M*a[l+v]+b*a[u+v];return r}},Jc=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Zc=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$c=class extends Ui{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],p=f*d+m*2,_=u[p],M=u[p+1],b=e*d+m*2,v=h[b],S=h[b+1],T=J0(n,t,_,v,s);r[m]=jp(T,x,M,S,g)}return r}};function jp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Y0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function J0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=jp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Y0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Lc(e.settings)&&(n.settings={inTangents:Ps(e.settings.inTangents,Array),outTangents:Ps(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $c(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case or:t=this.InterpolantFactoryMethodLinear;break;case Pc:t=this.InterpolantFactoryMethodSmooth;break;case Qh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return Pc;case this.InterpolantFactoryMethodBezier:return Qh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Lc(this.settings)&&(tp(this.settings.inTangents,e),tp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&a0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Lc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function tp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=or;var hs=class extends Vn{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=ar;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};mo.prototype.ValueTypeName="color";var us=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};us.prototype.ValueTypeName="number";var Qc=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ht.slerpFlat(r,0,a,c-o,a,c,l);return r}},ds=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qc(this.times,this.values,this.getValueSize(),e)}};ds.prototype.ValueTypeName="quaternion";ds.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Vn{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ar;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};Us.prototype.ValueTypeName="vector";var go=class{constructor(e="",t=-1,n=[],s=Ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push($0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=j0(l);l=ep(l,1,h),c=ep(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new us(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Z0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return mo;case"quaternion":return ds;case"bool":case"boolean":return hs;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Z0(i.type);if(i.times===void 0){let n=[],s=[];K0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Lc(i.settings)&&(t.settings={inTangents:Ps(i.settings.inTangents,Float32Array),outTangents:Ps(i.settings.outTangents,Float32Array)}),t}var Di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(np(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!np(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function np(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var el=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kp=new el,Oi=class{constructor(e){this.manager=e!==void 0?e:Kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var is={},su=class extends Error{constructor(e,t){super(e),this.response=t}},ma=class extends Oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Di.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(is[e]!==void 0){is[e].push({onLoad:t,onProgress:n,onError:s});return}is[e]=[],is[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=is[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){_();function _(){u.read().then(({done:M,value:b})=>{if(M)p.close();else{x+=b.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let S=0,T=h.length;S<T;S++){let y=h[S];y.onProgress&&y.onProgress(v)}p.enqueue(b),_()}},M=>{p.error(M)})}}});return new Response(g)}else throw new su(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Di.add(`file:${e}`,c);let h=is[e];delete is[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=is[e];if(h===void 0)throw this.manager.itemError(e),c;delete is[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zr=new WeakMap,tl=class extends Oi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Zr.get(a);u===void 0&&(u=[],Zr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=sa("img");function l(){h(),t&&t(this);let u=Zr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Zr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Di.remove(`image:${e}`);let d=Zr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Zr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var pr=class extends Oi{constructor(e){super(e)}load(e,t,n,s){let r=new un,a=new tl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},mr=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ga=class extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jh=new ze,ip=new R,sp=new R,xa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Jh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ia||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rc=new R,Cc=new ht,Li=new R,xo=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rc,Cc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Cc,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Rc,Cc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Cc,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new R,rp=new ke,ap=new ke,en=class extends xo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,rp,ap),t.subVectors(ap,rp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ru=class extends xa{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},bo=class extends mr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ru}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},au=class extends xa{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},_o=class extends mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new au}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Os=class extends xo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ou=class extends xa{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new ou}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ps=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Zh=new WeakMap,yo=class extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Di.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Zh.has(a)===!0?(s&&s(Zh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Di.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Zh.set(l,c),Di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var $r=-90,Qr=1,nl=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en($r,Qr,e,t);s.layers=this.layers,this.add(s);let r=new en($r,Qr,e,t);r.layers=this.layers,this.add(r);let a=new en($r,Qr,e,t);a.layers=this.layers,this.add(a);let o=new en($r,Qr,e,t);o.layers=this.layers,this.add(o);let l=new en($r,Qr,e,t);l.layers=this.layers,this.add(l);let c=new en($r,Qr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},il=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ou="\\[\\]\\.:\\/",Q0=new RegExp("["+Ou+"]","g"),ku="[^"+Ou+"]",ex="[^"+Ou.replace("\\.","")+"]",tx=/((?:WC+[\/:])*)/.source.replace("WC",ku),nx=/(WCOD+)?/.source.replace("WCOD",ex),ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ku),sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ku),rx=new RegExp("^"+tx+nx+ix+sx+"$"),ax=["material","materials","bones","map"],cu=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q0,"")}static parseTrackName(e){let t=rx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ax.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=cu;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a1=new Float32Array(1);var lu=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function zu(i,e,t,n){let s=ox(n);switch(t){case Ru:return i*e;case ll:return i*e/s.components*s.byteLength;case hl:return i*e/s.components*s.byteLength;case Hs:return i*e*2/s.components*s.byteLength;case ul:return i*e*2/s.components*s.byteLength;case Cu:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case dl:return i*e*4/s.components*s.byteLength;case So:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(e,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(e,8)/2;case xl:case bl:case yl:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _l:case Ao:case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ol:case kl:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bl:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ro:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ox(i){switch(i){case Wn:case Eu:return{byteLength:1,components:1};case Ma:case wu:case Si:return{byteLength:2,components:1};case ol:case cl:return{byteLength:2,components:4};case Mi:case al:case $n:return{byteLength:4,components:1};case Tu:case Au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function gm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lx(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ux=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ex=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ob=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,db=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,b_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,__=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:hx,alphahash_pars_fragment:ux,alphamap_fragment:dx,alphamap_pars_fragment:fx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:xx,batching_pars_vertex:bx,batching_vertex:_x,begin_vertex:yx,beginnormal_vertex:vx,bsdfs:Mx,iridescence_fragment:Sx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:wx,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:Ax,clipping_planes_vertex:Rx,color_fragment:Cx,color_pars_fragment:Px,color_pars_vertex:Ix,color_vertex:Lx,common:Dx,cube_uv_reflection_fragment:Fx,defaultnormal_vertex:Nx,displacementmap_pars_vertex:Ux,displacementmap_vertex:Ox,emissivemap_fragment:kx,emissivemap_pars_fragment:zx,colorspace_fragment:Bx,colorspace_pars_fragment:Hx,envmap_fragment:Vx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Wx,envmap_pars_vertex:qx,envmap_physical_pars_fragment:nb,envmap_vertex:Xx,fog_vertex:jx,fog_pars_vertex:Kx,fog_fragment:Yx,fog_pars_fragment:Jx,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:$x,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:eb,lights_pars_begin:tb,lights_toon_fragment:ib,lights_toon_pars_fragment:sb,lights_phong_fragment:rb,lights_phong_pars_fragment:ab,lights_physical_fragment:ob,lights_physical_pars_fragment:cb,lights_fragment_begin:lb,lights_fragment_maps:hb,lights_fragment_end:ub,lightprobes_pars_fragment:db,logdepthbuf_fragment:fb,logdepthbuf_pars_fragment:pb,logdepthbuf_pars_vertex:mb,logdepthbuf_vertex:gb,map_fragment:xb,map_pars_fragment:bb,map_particle_fragment:_b,map_particle_pars_fragment:yb,metalnessmap_fragment:vb,metalnessmap_pars_fragment:Mb,morphinstance_vertex:Sb,morphcolor_vertex:Eb,morphnormal_vertex:wb,morphtarget_pars_vertex:Tb,morphtarget_vertex:Ab,normal_fragment_begin:Rb,normal_fragment_maps:Cb,normal_pars_fragment:Pb,normal_pars_vertex:Ib,normal_vertex:Lb,normalmap_pars_fragment:Db,clearcoat_normal_fragment_begin:Fb,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Ub,iridescence_pars_fragment:Ob,opaque_fragment:kb,packing:zb,premultiplied_alpha_fragment:Bb,project_vertex:Hb,dithering_fragment:Vb,dithering_pars_fragment:Gb,roughnessmap_fragment:Wb,roughnessmap_pars_fragment:qb,shadowmap_pars_fragment:Xb,shadowmap_pars_vertex:jb,shadowmap_vertex:Kb,shadowmask_pars_fragment:Yb,skinbase_vertex:Jb,skinning_pars_vertex:Zb,skinning_vertex:$b,skinnormal_vertex:Qb,specularmap_fragment:e_,specularmap_pars_fragment:t_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:s_,transmission_pars_fragment:r_,uv_pars_fragment:a_,uv_pars_vertex:o_,uv_vertex:c_,worldpos_vertex:l_,background_vert:h_,background_frag:u_,backgroundCube_vert:d_,backgroundCube_frag:f_,cube_vert:p_,cube_frag:m_,depth_vert:g_,depth_frag:x_,distance_vert:b_,distance_frag:__,equirect_vert:y_,equirect_frag:v_,linedashed_vert:M_,linedashed_frag:S_,meshbasic_vert:E_,meshbasic_frag:w_,meshlambert_vert:T_,meshlambert_frag:A_,meshmatcap_vert:R_,meshmatcap_frag:C_,meshnormal_vert:P_,meshnormal_frag:I_,meshphong_vert:L_,meshphong_frag:D_,meshphysical_vert:F_,meshphysical_frag:N_,meshtoon_vert:U_,meshtoon_frag:O_,points_vert:k_,points_frag:z_,shadow_vert:B_,shadow_frag:H_,sprite_vert:V_,sprite_frag:G_},fe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Hi={basic:{uniforms:En([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:En([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:En([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:En([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:En([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:En([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:En([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:En([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:En([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:En([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:En([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:En([fe.common,fe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:En([fe.lights,fe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Hi.physical={uniforms:En([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Xl={r:0,b:0,g:0},W_=new ze,xm=new Ne;xm.set(-1,0,0,0,1,0,0,0,1);function q_(i,e,t,n,s,r){let a=new Le(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let b=_.backgroundBlurriness>0;M=e.get(M,b)}return M}function m(_){let M=!1,b=f(_);b===null?g(a,o):b&&b.isColor&&(g(b,1),M=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){let b=f(M);b&&(b.isCubeTexture||b.mapping===Mo)?(c===void 0&&(c=new st(new yi(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:yr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W_.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xm),c.material.toneMapped=Je.getTransfer(b.colorSpace)!==wt,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new st(new ls(2,2),new Ln({name:"BackgroundMaterial",uniforms:yr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(b.colorSpace)!==wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,M){_.getRGB(Xl,Uu(i)),t.buffers.color.setClear(Xl.r,Xl.g,Xl.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:x,dispose:p}}function X_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(P,F,D,I,O){let B=!1,X=u(P,I,D,F);r!==X&&(r=X,c(r.object)),B=f(P,I,D,O),B&&m(P,I,D,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,b(P,F,D,I),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,F,D,I){let O=I.wireframe===!0,B=n[F.id];B===void 0&&(B={},n[F.id]=B);let X=P.isInstancedMesh===!0?P.id:0,te=B[X];te===void 0&&(te={},B[X]=te);let q=te[D.id];q===void 0&&(q={},te[D.id]=q);let J=q[O];return J===void 0&&(J=d(l()),q[O]=J),J}function d(P){let F=[],D=[],I=[];for(let O=0;O<t;O++)F[O]=0,D[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:D,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,F,D,I){let O=r.attributes,B=F.attributes,X=0,te=D.getAttributes();for(let q in te)if(te[q].location>=0){let Q=O[q],Ee=B[q];if(Ee===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor)),Q===void 0||Q.attribute!==Ee||Ee&&Q.data!==Ee.data)return!0;X++}return r.attributesNum!==X||r.index!==I}function m(P,F,D,I){let O={},B=F.attributes,X=0,te=D.getAttributes();for(let q in te)if(te[q].location>=0){let Q=B[q];Q===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let Ee={};Ee.attribute=Q,Q&&Q.data&&(Ee.data=Q.data),O[q]=Ee,X++}r.attributes=O,r.attributesNum=X,r.index=I}function x(){let P=r.newAttributes;for(let F=0,D=P.length;F<D;F++)P[F]=0}function g(P){p(P,0)}function p(P,F){let D=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;D[P]=1,I[P]===0&&(i.enableVertexAttribArray(P),I[P]=1),O[P]!==F&&(i.vertexAttribDivisor(P,F),O[P]=F)}function _(){let P=r.newAttributes,F=r.enabledAttributes;for(let D=0,I=F.length;D<I;D++)F[D]!==P[D]&&(i.disableVertexAttribArray(D),F[D]=0)}function M(P,F,D,I,O,B,X){X===!0?i.vertexAttribIPointer(P,F,D,O,B):i.vertexAttribPointer(P,F,D,I,O,B)}function b(P,F,D,I){x();let O=I.attributes,B=D.getAttributes(),X=F.defaultAttributeValues;for(let te in B){let q=B[te];if(q.location>=0){let J=O[te];if(J===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let Q=J.normalized,Ee=J.itemSize,ve=e.get(J);if(ve===void 0)continue;let gt=ve.buffer,et=ve.type,ct=ve.bytesPerElement,K=et===i.INT||et===i.UNSIGNED_INT||J.gpuType===al;if(J.isInterleavedBufferAttribute){let ne=J.data,ye=ne.stride,Be=J.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<q.locationSize;be++)p(q.location+be,ne.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<q.locationSize;be++)g(q.location+be);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let be=0;be<q.locationSize;be++)M(q.location+be,Ee/q.locationSize,et,Q,ye*ct,(Be+Ee/q.locationSize*be)*ct,K)}else{if(J.isInstancedBufferAttribute){for(let ne=0;ne<q.locationSize;ne++)p(q.location+ne,J.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ne=0;ne<q.locationSize;ne++)g(q.location+ne);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let ne=0;ne<q.locationSize;ne++)M(q.location+ne,Ee/q.locationSize,et,Q,Ee*ct,Ee/q.locationSize*ne*ct,K)}}else if(X!==void 0){let Q=X[te];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(q.location,Q);break;case 3:i.vertexAttrib3fv(q.location,Q);break;case 4:i.vertexAttrib4fv(q.location,Q);break;default:i.vertexAttrib1fv(q.location,Q)}}}}_()}function v(){w();for(let P in n){let F=n[P];for(let D in F){let I=F[D];for(let O in I){let B=I[O];for(let X in B)h(B[X].object),delete B[X];delete I[O]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let D in F){let I=F[D];for(let O in I){let B=I[O];for(let X in B)h(B[X].object),delete B[X];delete I[O]}}delete n[P.id]}function T(P){for(let F in n){let D=n[F];for(let I in D){let O=D[I];if(O[P.id]===void 0)continue;let B=O[P.id];for(let X in B)h(B[X].object),delete B[X];delete O[P.id]}}}function y(P){for(let F in n){let D=n[F],I=P.isInstancedMesh===!0?P.id:0,O=D[I];if(O!==void 0){for(let B in O){let X=O[B];for(let te in X)h(X[te].object),delete X[te];delete O[B]}delete D[I],Object.keys(D).length===0&&delete n[F]}}}function w(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function j_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function K_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Qn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let y=T===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Wn&&T!==$n&&!y&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:b,maxSamples:v,samples:S}}function Y_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new pi,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,M=_*4,b=p.clippingState||null;l.value=b,b=h(m,d,M,f);for(let v=0;v!==M;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,b=f;M!==x;++M,b+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Ta=4,J_=6,Z_=20,$_=256,Po=new Os,Yp=new Le,Bu=null,Hu=0,Vu=0,Gu=!1,Q_=new R,vr=new R,Ra=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Q_}=r;Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Hu,Vu),this._renderer.xr.enabled=Gu,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Si,format:Qn,colorSpace:In,depthBuffer:!1},s=Jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ey(r)),this._blurMaterial=ny(r,e,t),this._ggxMaterial=ty(r,e,t)}return s}_compileMaterial(e){let t=new st(new Tt,e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,n,s,r){let l=new en(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Yp),u.toneMapping=vi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new yi,new Jn({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,p=!0):(g.color.copy(Yp),p=!0);for(let M=0;M<6;M++){let b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let v=this._cubeSize;wa(s,b*v,M>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===zs||e.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;wa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Po)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Ta?n-m+Ta:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,wa(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Po),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,wa(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(o,Po)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Ta?s-this._lodMax+Ta:0),d=4*(this._cubeSize-h);wa(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Po)}};function ey(i){let e=[],t=[],n=i,s=i-Ta+1+J_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){let _=p%3*2/3-1,M=p>2?0:-1,b=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];m.set(b,f*d*p);for(let v=0;v<d;v++){let S=h[v*2]*2-1,T=h[v*2+1]*2-1;p===0?vr.set(1,T,S):p===1?vr.set(-S,1,-T):p===2?vr.set(-S,T,1):p===3?vr.set(-1,T,-S):p===4?vr.set(-S,-1,T):vr.set(S,T,-1),vr.toArray(x,(p*d+v)*f)}}let g=new Tt;g.setAttribute("position",new je(m,f)),g.setAttribute("outputDirection",new je(x,f)),t.push(new st(g,null)),n>Ta&&n--}return{lodMeshes:t,sizeLods:e}}function Jp(i,e,t){let n=new kn(i,e,t);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ty(i,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ny(i,e,t){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:Z_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Zp(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function $p(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kl=class extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ho(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yi(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:zi});r.uniforms.tEquirect.value=t;let a=new st(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Yt),new nl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function iy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ya||f===sl)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new Kl(m.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===ya||f===sl,x=f===zs||f===br;if(m||x){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Ra(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let _=d.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Ra(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===ya?d.mapping=zs:f===sl&&(d.mapping=br),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function sy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&rr("WebGLRenderer: "+n+" extension not supported."),s}}}function ry(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let M=0,b=_.length;M<b;M+=3){let v=_[M+0],S=_[M+1],T=_[M+2];d.push(v,S,S,T,T,v)}}else{let _=m.array;x=m.version;for(let M=0,b=_.length/3-1;M<b;M+=3){let v=M+0,S=M+1,T=M+2;d.push(v,S,S,T,T,v)}}let g=new(m.count>=65535?oo:lr)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ay(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function oy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function cy(i,e,t){let n=new WeakMap,s=new ft;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let b=o.attributes.position.count*M,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*v*4*u),T=new ro(S,b,v,u);T.type=$n,T.needsUpdate=!0;let y=M*4;for(let C=0;C<u;C++){let P=g[C],F=p[C],D=_[C],I=b*v*4*C;for(let O=0;O<P.count;O++){let B=O*y;f===!0&&(s.fromBufferAttribute(P,O),S[I+B+0]=s.x,S[I+B+1]=s.y,S[I+B+2]=s.z,S[I+B+3]=0),m===!0&&(s.fromBufferAttribute(F,O),S[I+B+4]=s.x,S[I+B+5]=s.y,S[I+B+6]=s.z,S[I+B+7]=0),x===!0&&(s.fromBufferAttribute(D,O),S[I+B+8]=s.x,S[I+B+9]=s.y,S[I+B+10]=s.z,S[I+B+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new ke(b,v)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ly(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var hy={[xu]:"LINEAR_TONE_MAPPING",[bu]:"REINHARD_TONE_MAPPING",[_u]:"CINEON_TONE_MAPPING",[vo]:"ACES_FILMIC_TONE_MAPPING",[vu]:"AGX_TONE_MAPPING",[Mu]:"NEUTRAL_TONE_MAPPING",[yu]:"CUSTOM_TONE_MAPPING"};function uy(i,e,t,n,s,r){let a=new kn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Tt;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));let h=new jc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new st(c,h),d=new Os(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,_=[],M=!1;this.setSize=function(b,v){a.setSize(b,v),o!==null&&o.setSize(b,v),l!==null&&l.setSize(b,v);for(let S=0;S<_.length;S++){let T=_[S];T.setSize&&T.setSize(b,v)}},this.setEffects=function(b){_=b,M=_.length>0&&_[0].isRenderPass===!0;let v=a.width,S=a.height;_.length>0&&o===null&&(o=new kn(v,S,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new kn(v,S,{type:Si,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<_.length;T++){let y=_[T];y.setSize&&y.setSize(v,S)}},this.begin=function(b,v){if(x||b.toneMapping===vi&&_.length===0)return!1;if(p=v,v!==null){let S=v.width,T=v.height;(a.width!==S||a.height!==T)&&this.setSize(S,T)}return M===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=vi,!0},this.hasRenderPass=function(){return M},this.end=function(b,v){b.toneMapping=g,x=!0;let S=a,T=o;for(let y=0;y<_.length;y++){let w=_[y];w.enabled!==!1&&(w.render(b,T,S,v),w.needsSwap!==!1&&(S=T,T=T===o?l:o))}if(f!==b.outputColorSpace||m!==b.toneMapping){f=b.outputColorSpace,m=b.toneMapping,h.defines={},Je.getTransfer(f)===wt&&(h.defines.SRGB_TRANSFER="");let y=hy[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var bm=new un,Xu=new Ns(1,1),_m=new ro,ym=new Vc,vm=new ho,Qp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function Ca(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qp[s];if(r===void 0&&(r=new Float32Array(s),Qp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jl(i,e){let t=em[e];t===void 0&&(t=new Int32Array(e),em[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function gy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;im.set(n),i.uniformMatrix2fv(this.addr,!1,im),fn(t,n)}}function xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;nm.set(n),i.uniformMatrix3fv(this.addr,!1,nm),fn(t,n)}}function by(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;tm.set(n),i.uniformMatrix4fv(this.addr,!1,tm),fn(t,n)}}function _y(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function Sy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function Ay(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=t.isReversedDepthBuffer()?ql:Wl,r=Xu):r=bm,t.setTexture2D(e||r,s)}function Ry(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ym,s)}function Cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vm,s)}function Py(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_m,s)}function Iy(i){switch(i){case 5126:return dy;case 35664:return fy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return xy;case 35676:return by;case 5124:case 35670:return _y;case 35667:case 35671:return yy;case 35668:case 35672:return vy;case 35669:case 35673:return My;case 5125:return Sy;case 36294:return Ey;case 36295:return wy;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Py}}function Ly(i,e){i.uniform1fv(this.addr,e)}function Dy(i,e){let t=Ca(e,this.size,2);i.uniform2fv(this.addr,t)}function Fy(i,e){let t=Ca(e,this.size,3);i.uniform3fv(this.addr,t)}function Ny(i,e){let t=Ca(e,this.size,4);i.uniform4fv(this.addr,t)}function Uy(i,e){let t=Ca(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Oy(i,e){let t=Ca(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ky(i,e){let t=Ca(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zy(i,e){i.uniform1iv(this.addr,e)}function By(i,e){i.uniform2iv(this.addr,e)}function Hy(i,e){i.uniform3iv(this.addr,e)}function Vy(i,e){i.uniform4iv(this.addr,e)}function Gy(i,e){i.uniform1uiv(this.addr,e)}function Wy(i,e){i.uniform2uiv(this.addr,e)}function qy(i,e){i.uniform3uiv(this.addr,e)}function Xy(i,e){i.uniform4uiv(this.addr,e)}function jy(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xu:a=bm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ky(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ym,r[a])}function Yy(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vm,r[a])}function Jy(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_m,r[a])}function Zy(i){switch(i){case 5126:return Ly;case 35664:return Dy;case 35665:return Fy;case 35666:return Ny;case 35674:return Uy;case 35675:return Oy;case 35676:return ky;case 5124:case 35670:return zy;case 35667:case 35671:return By;case 35668:case 35672:return Hy;case 35669:case 35673:return Vy;case 5125:return Gy;case 36294:return Wy;case 36295:return qy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return Jy}}var ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}},Ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zy(t.type)}},Yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Wu=/(\w+)(\])?(\[|\.)?/g;function sm(i,e){i.seq.push(e),i.map[e.id]=e}function $y(i,e,t){let n=i.name,s=n.length;for(Wu.lastIndex=0;;){let r=Wu.exec(n),a=Wu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sm(t,c===void 0?new ju(o,i,e):new Ku(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Yu(o),sm(t,u)),t=u}}}var Aa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$y(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function rm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qy=37297,ev=0;function tv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var am=new Ne;function nv(i){Je._getMatrix(am,Je.workingColorSpace,i);let e=`mat3( ${am.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case io:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function om(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+tv(i.getShaderSource(e),o)}else return r}function iv(i,e){let t=nv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var sv={[xu]:"Linear",[bu]:"Reinhard",[_u]:"Cineon",[vo]:"ACESFilmic",[vu]:"AgX",[Mu]:"Neutral",[yu]:"Custom"};function rv(i,e){let t=sv[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jl=new R;function av(){Je.getLuminanceCoefficients(jl);let i=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function cv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Lo(i){return i!==""}function cm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(i){return i.replace(hv,dv)}var uv=new Map;function dv(i,e){let t=Ve[e];if(t===void 0){let n=uv.get(e);if(n!==void 0)t=Ve[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ju(t)}var fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(i){return i.replace(fv,pv)}function pv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function um(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var mv={[gr]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function gv(i){return mv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xv={[zs]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE_UV"};function bv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var _v={[br]:"ENVMAP_MODE_REFRACTION"};function yv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_v[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vv={[gu]:"ENVMAP_BLENDING_MULTIPLY",[Rp]:"ENVMAP_BLENDING_MIX",[Cp]:"ENVMAP_BLENDING_ADD"};function Mv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vv[i.combine]||"ENVMAP_BLENDING_NONE"}function Sv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ev(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=gv(t),c=bv(t),h=yv(t),u=Mv(t),d=Sv(t),f=ov(t),m=cv(r),x=s.createProgram(),g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Lo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(g=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==vi?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),a=Ju(a),a=cm(a,t),a=lm(a,t),o=Ju(o),o=cm(o,t),o=lm(o,t),a=hm(a),o=hm(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+g+a,b=_+p+o,v=rm(s,s.VERTEX_SHADER,M),S=rm(s,s.FRAGMENT_SHADER,b);s.attachShader(x,v),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(v)||"",I=s.getShaderInfoLog(S)||"",O=F.trim(),B=D.trim(),X=I.trim(),te=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,S);else{let J=om(s,v,"vertex"),Q=om(s,S,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+J+`
`+Q)}else O!==""?Re("WebGLProgram: Program Info Log:",O):(B===""||X==="")&&(q=!1);q&&(P.diagnostics={runnable:te,programLog:O,vertexShader:{log:B,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(v),s.deleteShader(S),y=new Aa(s,x),w=lv(s,x)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Qy)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ev++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=S,this}var wv=0,Zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $u(e),t.set(e,n)),n}},$u=class{constructor(e){this.id=wv++,this.code=e,this.usedTimes=0}};function Tv(i){return i===Hs||i===Ao||i===Ro}function Av(i,e,t,n,s,r){let a=new ao,o=new Zu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,w,C,P,F,D){let I=P.fog,O=F.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,te=e.get(y.envMap||B,X),q=te&&te.mapping===Mo?te.image.height:null,J=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Re("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ee=Q!==void 0?Q.length:0,ve=0;O.morphAttributes.position!==void 0&&(ve=1),O.morphAttributes.normal!==void 0&&(ve=2),O.morphAttributes.color!==void 0&&(ve=3);let gt,et,ct,K;if(J){let kt=Hi[J];gt=kt.vertexShader,et=kt.fragmentShader}else{gt=y.vertexShader,et=y.fragmentShader;let kt=o.getVertexShaderStage(y),St=o.getFragmentShaderStage(y);o.update(y,kt,St),ct=kt.id,K=St.id}let ne=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,be=F.isBatchedMesh===!0,$e=!!y.map,hn=!!y.matcap,tt=!!te,ut=!!y.aoMap,Ot=!!y.lightMap,at=!!y.bumpMap&&y.wireframe===!1,qt=!!y.normalMap,xn=!!y.displacementMap,Un=!!y.emissiveMap,Kt=!!y.metalnessMap,sn=!!y.roughnessMap,z=y.anisotropy>0,yn=y.clearcoat>0,Rt=y.dispersion>0,L=y.retroreflectivity>0,E=y.iridescence>0,H=y.sheen>0,W=y.transmission>0,Y=z&&!!y.anisotropyMap,se=yn&&!!y.clearcoatMap,oe=yn&&!!y.clearcoatNormalMap,Z=yn&&!!y.clearcoatRoughnessMap,ee=E&&!!y.iridescenceMap,ce=E&&!!y.iridescenceThicknessMap,Ce=H&&!!y.sheenColorMap,de=H&&!!y.sheenRoughnessMap,le=!!y.specularMap,Pe=!!y.specularColorMap,De=!!y.specularIntensityMap,We=W&&!!y.transmissionMap,k=W&&!!y.thicknessMap,he=!!y.gradientMap,$=!!y.alphaMap,ue=y.alphaTest>0,ge=!!y.alphaHash,ie=!!y.extensions,Ie=vi;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let we={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:gt,fragmentShader:et,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:be,batchingColor:be&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:$e,matcap:hn,envMap:tt,envMapMode:tt&&te.mapping,envMapCubeUVHeight:q,aoMap:ut,lightMap:Ot,bumpMap:at,normalMap:qt,displacementMap:xn,emissiveMap:Un,normalMapObjectSpace:qt&&y.normalMapType===Dp,normalMapTangentSpace:qt&&y.normalMapType===Gl,packedNormalMap:qt&&y.normalMapType===Gl&&Tv(y.normalMap.format),metalnessMap:Kt,roughnessMap:sn,anisotropy:z,anisotropyMap:Y,clearcoat:yn,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:Z,dispersion:Rt,retroreflection:L,iridescence:E,iridescenceMap:ee,iridescenceThicknessMap:ce,sheen:H,sheenColorMap:Ce,sheenRoughnessMap:de,specularMap:le,specularColorMap:Pe,specularIntensityMap:De,transmission:W,transmissionMap:We,thicknessMap:k,gradientMap:he,opaque:y.transparent===!1&&y.blending===_a&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ue,alphaHash:ge,combine:y.combine,mapUv:$e&&m(y.map.channel),aoMapUv:ut&&m(y.aoMap.channel),lightMapUv:Ot&&m(y.lightMap.channel),bumpMapUv:at&&m(y.bumpMap.channel),normalMapUv:qt&&m(y.normalMap.channel),displacementMapUv:xn&&m(y.displacementMap.channel),emissiveMapUv:Un&&m(y.emissiveMap.channel),metalnessMapUv:Kt&&m(y.metalnessMap.channel),roughnessMapUv:sn&&m(y.roughnessMap.channel),anisotropyMapUv:Y&&m(y.anisotropyMap.channel),clearcoatMapUv:se&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&m(y.sheenRoughnessMap.channel),specularMapUv:le&&m(y.specularMap.channel),specularColorMapUv:Pe&&m(y.specularColorMap.channel),specularIntensityMapUv:De&&m(y.specularIntensityMap.channel),transmissionMapUv:We&&m(y.transmissionMap.channel),thicknessMapUv:k&&m(y.thicknessMap.channel),alphaMapUv:$&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(qt||z),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&($e||$),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&qt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ve,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:Un&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Gn,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ie&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&y.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)w.push(C),w.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(w,y),_(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){let w=f[y.type],C;if(w){let P=Hi[w];C=Xp.clone(P.uniforms)}else C=y.uniforms;return C}function b(y,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Ev(i,w,y,s),c.push(C),h.set(w,C)),C}function v(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:b,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:T}}function Rv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function dm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,g,p){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.materialVariant=a(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=g,_.group=p),e++,_}function l(d,f,m,x,g,p,_){_.reversedDepth===!0&&(g=-g);let M=o(d,f,m,x,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(d,f,m,x,g,p){let _=o(d,f,m,x,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||Cv),n.length>1&&n.sort(f||dm),s.length>1&&s.sort(f||dm)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Pv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new fm,i.set(n,[a])):s>=r.length?(a=new fm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Iv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Le};break;case"SpotLight":t={position:new R,direction:new R,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Lv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Dv=0;function Fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nv(i){let e=new Iv,t=Lv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new ze,a=new ze;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,_=0,M=0,b=0,v=0,S=0,T=0,y=0,w=0,C=0;c.sort(Fv);for(let F=0,D=c.length;F<D;F++){let I=c[F],O=I.color,B=I.intensity,X=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hs?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],B);C++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=te;let Ee=J.getViewportCount();for(let ve=0;ve<Ee;ve++)n.sunShadowMatrix[x+ve]=J.getMatrix(ve),n.sunShadowCascade[x+ve]=J._cascadeData[ve];x+=Ee,m++}n.sun[f]=q,f++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=te,n.directionalShadowMatrix[g]=I.shadow.matrix,v++}n.directional[g]=q,g++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(O).multiplyScalar(B),q.distance=X,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[_]=q;let J=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,J.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=J.matrix,I.castShadow){let Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=te,T++}_++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(O).multiplyScalar(B),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=q,M++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let J=I.shadow,Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=q,p++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(B),q.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[b]=q,b++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==b||P.numSunShadows!==m||P.numDirectionalShadows!==v||P.numPointShadows!==S||P.numSpotShadows!==T||P.numSpotMaps!==y||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=M,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=b,P.numSunShadows=m,P.numDirectionalShadows=v,P.numPointShadows=S,P.numSpotShadows=T,P.numSpotMaps=y,P.numLightProbes=C,n.version=Dv++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let b=c[_];if(b.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function pm(i){let e=new Nv(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Uv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new pm(i),e.set(s,[o])):r>=a.length?(o=new pm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zv=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Bv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],mm=new ze,Io=new R,qu=new R;function Hv(i,e,t){let n=new ua,s=new ke,r=new ke,a=new ft,o=new pa,l=new Kc,c={},h=t.maxTextureSize,u={[ki]:Dn,[Dn]:ki,[Gn]:Gn},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Ov,fragmentShader:kv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Tt;m.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new st(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gr;let p=this.type;this.render=function(S,T,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===lp&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gr);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let D=p!==this.type;D&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=S.length;I<O;I++){let B=S[I],X=B.shadow;if(X===void 0){Re("WebGLShadowMap:",B,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let te=X.getFrameExtents();s.multiply(te),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,X.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||D===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ba){if(B.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new kn(s.x,s.y,{format:Hs,type:Si,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),X.map.texture.name=B.name+".shadowMap",X.map.depthTexture=new Ns(s.x,s.y,$n),X.map.depthTexture.name=B.name+".shadowMapDepth",X.map.depthTexture.format=Fi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=tn,X.map.depthTexture.magFilter=tn}else B.isPointLight?(X.map=new Kl(s.x),X.map.depthTexture=new qc(s.x,Mi)):(X.map=new kn(s.x,s.y),X.map.depthTexture=new Ns(s.x,s.y,Mi)),X.map.depthTexture.name=B.name+".shadowMap",X.map.depthTexture.format=Fi,this.type===gr?(X.map.depthTexture.compareFunction=q?ql:Wl,X.map.depthTexture.minFilter=Yt,X.map.depthTexture.magFilter=Yt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=tn,X.map.depthTexture.magFilter=tn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let J=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();B.isPointLight!==!0&&X.updateMatrices(B,y);for(let Q=0;Q<J;Q++){let Ee=X.getCamera(Q);if(B.isPointLight){let ve=X.camera,gt=X.matrix,et=B.distance||ve.far;et!==ve.far&&(ve.far=et,ve.updateProjectionMatrix()),Io.setFromMatrixPosition(B.matrixWorld),ve.position.copy(Io),qu.copy(ve.position),qu.add(zv[Q]),ve.up.copy(Bv[Q]),ve.lookAt(qu),ve.updateMatrixWorld(),gt.makeTranslation(-Io.x,-Io.y,-Io.z),mm.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),X._frustum.setFromProjectionMatrix(mm,ve.coordinateSystem,ve.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(X.map),i.clear());let ve=X.getViewport(Q);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),F.viewport(a)}n=X.getFrustum(Q),b(T,y,Ee,B,this.type)}X.isPointLightShadow!==!0&&this.type===ba&&_(X,y),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,C,P)};function _(S,T){let y=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new kn(s.x,s.y,{format:Hs,type:Si}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,y,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,y,f,x,null)}function M(S,T,y,w){let C=null,P=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)C=P;else if(C=y.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=C.uuid,D=T.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let O=I[D];O===void 0&&(O=C.clone(),I[D]=O,T.addEventListener("dispose",v)),C=O}if(C.visible=T.visible,C.wireframe=T.wireframe,w===ba?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:u[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=y}return C}function b(S,T,y,w,C){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===ba)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let D=e.update(S),I=S.material;if(Array.isArray(I)){let O=D.groups;for(let B=0,X=O.length;B<X;B++){let te=O[B],q=I[te.materialIndex];if(q&&q.visible){let J=M(S,q,w,C);S.onBeforeShadow(i,S,T,y,D,J,te),i.renderBufferDirect(y,null,D,J,S,te),S.onAfterShadow(i,S,T,y,D,J,te)}}}else if(I.visible){let O=M(S,I,w,C);S.onBeforeShadow(i,S,T,y,D,O,null),i.renderBufferDirect(y,null,D,O,S,null),S.onAfterShadow(i,S,T,y,D,O,null)}}let F=S.children;for(let D=0,I=F.length;D<I;D++)b(F[D],T,y,w,C)}function v(S){S.target.removeEventListener("dispose",v);for(let y in c){let w=c[y],C=S.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Vv(i,e){function t(){let k=!1,he=new ft,$=null,ue=new ft(0,0,0,0);return{setMask:function(ge){$!==ge&&!k&&(i.colorMask(ge,ge,ge,ge),$=ge)},setLocked:function(ge){k=ge},setClear:function(ge,ie,Ie,we,kt){kt===!0&&(ge*=we,ie*=we,Ie*=we),he.set(ge,ie,Ie,we),ue.equals(he)===!1&&(i.clearColor(ge,ie,Ie,we),ue.copy(he))},reset:function(){k=!1,$=null,ue.set(-1,0,0,0)}}}function n(){let k=!1,he=!1,$=null,ue=null,ge=null;return{setReversed:function(ie){if(he!==ie){let Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),he=ie;let we=ge;ge=null,this.setClear(we)}},getReversed:function(){return he},setTest:function(ie){ie?ne(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ie){$!==ie&&!k&&(i.depthMask(ie),$=ie)},setFunc:function(ie){if(he&&(ie=Wp[ie]),ue!==ie){switch(ie){case Dc:i.depthFunc(i.NEVER);break;case Fc:i.depthFunc(i.ALWAYS);break;case Nc:i.depthFunc(i.LESS);break;case ta:i.depthFunc(i.LEQUAL);break;case Uc:i.depthFunc(i.EQUAL);break;case Oc:i.depthFunc(i.GEQUAL);break;case kc:i.depthFunc(i.GREATER);break;case zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=ie}},setLocked:function(ie){k=ie},setClear:function(ie){ge!==ie&&(ge=ie,he&&(ie=1-ie),i.clearDepth(ie))},reset:function(){k=!1,$=null,ue=null,ge=null,he=!1}}}function s(){let k=!1,he=null,$=null,ue=null,ge=null,ie=null,Ie=null,we=null,kt=null;return{setTest:function(St){k||(St?ne(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(St){he!==St&&!k&&(i.stencilMask(St),he=St)},setFunc:function(St,hi,Pi){($!==St||ue!==hi||ge!==Pi)&&(i.stencilFunc(St,hi,Pi),$=St,ue=hi,ge=Pi)},setOp:function(St,hi,Pi){(ie!==St||Ie!==hi||we!==Pi)&&(i.stencilOp(St,hi,Pi),ie=St,Ie=hi,we=Pi)},setLocked:function(St){k=St},setClear:function(St){kt!==St&&(i.clearStencil(St),kt=St)},reset:function(){k=!1,he=null,$=null,ue=null,ge=null,ie=null,Ie=null,we=null,kt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,_=null,M=null,b=null,v=null,S=null,T=null,y=new Le(0,0,0),w=0,C=!1,P=null,F=null,D=null,I=null,O=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,te=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=te>=2);let J=null,Q={},Ee=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),gt=new ft().fromArray(Ee),et=new ft().fromArray(ve);function ct(k,he,$,ue){let ge=new Uint8Array(4),ie=i.createTexture();i.bindTexture(k,ie),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<$;Ie++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(he+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ie}let K={};K[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(ta),at(!1),qt(hu),ne(i.CULL_FACE),ut(zi);function ne(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function ye(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Be(k,he){return d[k]!==he?(i.bindFramebuffer(k,he),d[k]=he,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function be(k,he){let $=m,ue=!1;if(k){$=f.get(he),$===void 0&&($=[],f.set(he,$));let ge=k.textures;if($.length!==ge.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ie=ge.length;ie<Ie;ie++)$[ie]=i.COLOR_ATTACHMENT0+ie;$.length=ge.length,ue=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ue=!0);ue&&i.drawBuffers($)}function $e(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let hn={[xr]:i.FUNC_ADD,[up]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};hn[fp]=i.MIN,hn[pp]=i.MAX;let tt={[mp]:i.ZERO,[gp]:i.ONE,[xp]:i.SRC_COLOR,[pu]:i.SRC_ALPHA,[Sp]:i.SRC_ALPHA_SATURATE,[vp]:i.DST_COLOR,[_p]:i.DST_ALPHA,[bp]:i.ONE_MINUS_SRC_COLOR,[mu]:i.ONE_MINUS_SRC_ALPHA,[Mp]:i.ONE_MINUS_DST_COLOR,[yp]:i.ONE_MINUS_DST_ALPHA,[Ep]:i.CONSTANT_COLOR,[wp]:i.ONE_MINUS_CONSTANT_COLOR,[Tp]:i.CONSTANT_ALPHA,[Ap]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(k,he,$,ue,ge,ie,Ie,we,kt,St){if(k===zi){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),k!==hp){if(k!==p||St!==C){if((_!==xr||v!==xr)&&(i.blendEquation(i.FUNC_ADD),_=xr,v=xr),St)switch(k){case _a:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFunc(i.ONE,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",k);break}else switch(k){case _a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case du:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fu:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",k);break}M=null,b=null,S=null,T=null,y.set(0,0,0),w=0,p=k,C=St}return}ge=ge||he,ie=ie||$,Ie=Ie||ue,(he!==_||ge!==v)&&(i.blendEquationSeparate(hn[he],hn[ge]),_=he,v=ge),($!==M||ue!==b||ie!==S||Ie!==T)&&(i.blendFuncSeparate(tt[$],tt[ue],tt[ie],tt[Ie]),M=$,b=ue,S=ie,T=Ie),(we.equals(y)===!1||kt!==w)&&(i.blendColor(we.r,we.g,we.b,kt),y.copy(we),w=kt),p=k,C=!1}function Ot(k,he){k.side===Gn?ye(i.CULL_FACE):ne(i.CULL_FACE);let $=k.side===Dn;he&&($=!$),at($),k.blending===_a&&k.transparent===!1?ut(zi):ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let ue=k.stencilWrite;o.setTest(ue),ue&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Un(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function qt(k){k!==op?(ne(i.CULL_FACE),k!==F&&(k===hu?i.cullFace(i.BACK):k===cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),F=k}function xn(k){k!==D&&(X&&i.lineWidth(k),D=k)}function Un(k,he,$){k?(ne(i.POLYGON_OFFSET_FILL),(I!==he||O!==$)&&(I=he,O=$,a.getReversed()&&(he=-he),i.polygonOffset(he,$))):ye(i.POLYGON_OFFSET_FILL)}function Kt(k){k?ne(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function sn(k){k===void 0&&(k=i.TEXTURE0+B-1),J!==k&&(i.activeTexture(k),J=k)}function z(k,he,$){$===void 0&&(J===null?$=i.TEXTURE0+B-1:$=J);let ue=Q[$];ue===void 0&&(ue={type:void 0,texture:void 0},Q[$]=ue),(ue.type!==k||ue.texture!==he)&&(J!==$&&(i.activeTexture($),J=$),i.bindTexture(k,he||K[k]),ue.type=k,ue.texture=he)}function yn(){let k=Q[J];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Rt(){try{i.compressedTexImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function E(){try{i.texSubImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function H(){try{i.texSubImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function se(){try{i.texStorage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function oe(){try{i.texStorage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function Z(){try{i.texImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function ee(){try{i.texImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function ce(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function Ce(k,he){u[k]!==he&&(i.pixelStorei(k,he),u[k]=he)}function de(k){gt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function le(k){et.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),et.copy(k))}function Pe(k,he){let $=c.get(he);$===void 0&&($=new WeakMap,c.set(he,$));let ue=$.get(k);ue===void 0&&(ue=i.getUniformBlockIndex(he,k.name),$.set(k,ue))}function De(k,he){let ue=c.get(he).get(k);l.get(he)!==ue&&(i.uniformBlockBinding(he,ue,k.__bindingPointIndex),l.set(he,ue))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,Q={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,_=null,M=null,b=null,v=null,S=null,T=null,y=new Le(0,0,0),w=0,C=!1,P=null,F=null,D=null,I=null,O=null,gt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ye,bindFramebuffer:Be,drawBuffers:be,useProgram:$e,setBlending:ut,setMaterial:Ot,setFlipSided:at,setCullFace:qt,setLineWidth:xn,setPolygonOffset:Un,setScissorTest:Kt,activeTexture:sn,bindTexture:z,unbindTexture:yn,compressedTexImage2D:Rt,compressedTexImage3D:L,texImage2D:Z,texImage3D:ee,pixelStorei:Ce,getParameter:ce,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:se,texStorage3D:oe,texSubImage2D:E,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:de,viewport:le,reset:We}}function Gv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return m?new OffscreenCanvas(L,E):sa("canvas")}function g(L,E,H){let W=1,Y=Rt(L);if((Y.width>H||Y.height>H)&&(W=H/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let se=Math.floor(W*Y.width),oe=Math.floor(W*Y.height);d===void 0&&(d=x(se,oe));let Z=E?x(se,oe):d;return Z.width=se,Z.height=oe,Z.getContext("2d").drawImage(L,0,0,se,oe),Re("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+se+"x"+oe+")."),Z}else return"data"in L&&Re("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),L;return L}function p(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(L,E,H,W,Y,se=!1){if(L!==null){if(i[L]!==void 0)return i[L];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe;W&&(oe=e.get("EXT_texture_norm16"),oe||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=E;if(E===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8),H===i.UNSIGNED_SHORT&&oe&&(Z=oe.R16_EXT),H===i.SHORT&&oe&&(Z=oe.R16_SNORM_EXT)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),E===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8),H===i.UNSIGNED_SHORT&&oe&&(Z=oe.RG16_EXT),H===i.SHORT&&oe&&(Z=oe.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),E===i.RGB&&(H===i.UNSIGNED_SHORT&&oe&&(Z=oe.RGB16_EXT),H===i.SHORT&&oe&&(Z=oe.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),E===i.RGBA){let ee=se?io:Je.getTransfer(Y);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=ee===wt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&oe&&(Z=oe.RGBA16_EXT),H===i.SHORT&&oe&&(Z=oe.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(L,E){let H;return L?E===null||E===Mi||E===Sa?H=i.DEPTH24_STENCIL8:E===$n?H=i.DEPTH32F_STENCIL8:E===Ma&&(H=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Mi||E===Sa?H=i.DEPTH_COMPONENT24:E===$n?H=i.DEPTH_COMPONENT32F:E===Ma&&(H=i.DEPTH_COMPONENT16),H}function S(L,E){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==tn&&L.minFilter!==Yt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function T(L){let E=L.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function y(L){let E=L.target;E.removeEventListener("dispose",y),P(E)}function w(L){let E=n.get(L);if(E.__webglInit===void 0)return;let H=L.source,W=f.get(H);if(W){let Y=W[E.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(L),Object.keys(W).length===0&&f.delete(H)}n.remove(L)}function C(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let H=L.source,W=f.get(H);delete W[E.__cacheKey],a.memory.textures--}function P(L){let E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let Y=0;Y<E.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(E.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)i.deleteFramebuffer(E.__webglFramebuffer[W]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let H=L.textures;for(let W=0,Y=H.length;W<Y;W++){let se=n.get(H[W]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(H[W])}n.remove(L)}let F=0;function D(){F=0}function I(){return F}function O(L){F=L}function B(){let L=F;return L>=s.maxTextures&&Re("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,L}function X(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function te(L,E){let H=n.get(L);if(L.isVideoTexture&&z(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){let W=L.image;if(W===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,L,E);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function q(L,E){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){ye(H,L,E);return}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function J(L,E){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){ye(H,L,E);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function Q(L,E){let H=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&H.__version!==L.version){Be(H,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}let Ee={[On]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},ve={[tn]:i.NEAREST,[rl]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},gt={[Np]:i.NEVER,[Bp]:i.ALWAYS,[Up]:i.LESS,[Wl]:i.LEQUAL,[Op]:i.EQUAL,[ql]:i.GEQUAL,[kp]:i.GREATER,[zp]:i.NOTEQUAL};function et(L,E){if(E.type===$n&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yt||E.magFilter===va||E.magFilter===_r||E.magFilter===Zn||E.minFilter===Yt||E.minFilter===va||E.minFilter===_r||E.minFilter===Zn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Ee[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Ee[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Ee[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ve[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,gt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===tn||E.minFilter!==_r&&E.minFilter!==Zn||E.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ct(L,E){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",T));let W=E.source,Y=f.get(W);Y===void 0&&(Y={},f.set(W,Y));let se=X(E);if(se!==L.__cacheKey){Y[se]===void 0&&(Y[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Y[se].usedTimes++;let oe=Y[L.__cacheKey];oe!==void 0&&(Y[L.__cacheKey].usedTimes--,oe.usedTimes===0&&C(E)),L.__cacheKey=se,L.__webglTexture=Y[se].texture}return H}function K(L,E,H){return Math.floor(Math.floor(L/H)/E)}function ne(L,E,H,W){let se=L.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,H,W,E.data);else{se.sort((Ce,de)=>Ce.start-de.start);let oe=0;for(let Ce=1;Ce<se.length;Ce++){let de=se[oe],le=se[Ce],Pe=de.start+de.count,De=K(le.start,E.width,4),We=K(de.start,E.width,4);le.start<=Pe+1&&De===We&&K(le.start+le.count-1,E.width,4)===De?de.count=Math.max(de.count,le.start+le.count-de.start):(++oe,se[oe]=le)}se.length=oe+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Ce=0,de=se.length;Ce<de;Ce++){let le=se[Ce],Pe=Math.floor(le.start/4),De=Math.ceil(le.count/4),We=Pe%E.width,k=Math.floor(Pe/E.width),he=De,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,We,k,he,$,H,W,E.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function ye(L,E,H){let W=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=i.TEXTURE_3D);let Y=ct(L,E),se=E.source;t.bindTexture(W,L.__webglTexture,i.TEXTURE0+H);let oe=n.get(se);if(se.version!==oe.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let $=Je.getPrimaries(Je.workingColorSpace),ue=E.colorSpace===oi?null:Je.getPrimaries(E.colorSpace),ge=E.colorSpace===oi||$===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=g(E.image,!1,s.maxTextureSize);ee=yn(E,ee);let ce=r.convert(E.format,E.colorSpace),Ce=r.convert(E.type),de=b(E.internalFormat,ce,Ce,E.normalized,E.colorSpace,E.isVideoTexture);et(W,E);let le,Pe=E.mipmaps,De=E.isVideoTexture!==!0,We=oe.__version===void 0||Y===!0,k=se.dataReady,he=S(E,ee);if(E.isDepthTexture)de=v(E.format===Bs,E.type),We&&(De?t.texStorage2D(i.TEXTURE_2D,1,de,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,de,ee.width,ee.height,0,ce,Ce,null));else if(E.isDataTexture)if(Pe.length>0){De&&We&&t.texStorage2D(i.TEXTURE_2D,he,de,Pe[0].width,Pe[0].height);for(let $=0,ue=Pe.length;$<ue;$++)le=Pe[$],De?k&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,le.width,le.height,ce,Ce,le.data):t.texImage2D(i.TEXTURE_2D,$,de,le.width,le.height,0,ce,Ce,le.data);E.generateMipmaps=!1}else De?(We&&t.texStorage2D(i.TEXTURE_2D,he,de,ee.width,ee.height),k&&ne(E,ee,ce,Ce)):t.texImage2D(i.TEXTURE_2D,0,de,ee.width,ee.height,0,ce,Ce,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){De&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,de,Pe[0].width,Pe[0].height,ee.depth);for(let $=0,ue=Pe.length;$<ue;$++)if(le=Pe[$],E.format!==Qn)if(ce!==null)if(De){if(k)if(E.layerUpdates.size>0){let ge=zu(le.width,le.height,E.format,E.type);for(let ie of E.layerUpdates){let Ie=le.data.subarray(ie*ge/le.data.BYTES_PER_ELEMENT,(ie+1)*ge/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ie,le.width,le.height,1,ce,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,ee.depth,ce,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,de,le.width,le.height,ee.depth,0,le.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,ee.depth,ce,Ce,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,de,le.width,le.height,ee.depth,0,ce,Ce,le.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{De&&We&&t.texStorage2D(i.TEXTURE_2D,he,de,Pe[0].width,Pe[0].height);for(let $=0,ue=Pe.length;$<ue;$++)le=Pe[$],E.format!==Qn?ce!==null?De?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(i.TEXTURE_2D,$,de,le.width,le.height,0,le.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?k&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,le.width,le.height,ce,Ce,le.data):t.texImage2D(i.TEXTURE_2D,$,de,le.width,le.height,0,ce,Ce,le.data)}else if(E.isDataArrayTexture)if(De){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,de,ee.width,ee.height,ee.depth),k)if(E.layerUpdates.size>0){let $=zu(ee.width,ee.height,E.format,E.type);for(let ue of E.layerUpdates){let ge=ee.data.subarray(ue*$/ee.data.BYTES_PER_ELEMENT,(ue+1)*$/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,ee.width,ee.height,1,ce,Ce,ge)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ce,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,ee.width,ee.height,ee.depth,0,ce,Ce,ee.data);else if(E.isData3DTexture)De?(We&&t.texStorage3D(i.TEXTURE_3D,he,de,ee.width,ee.height,ee.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ce,ee.data)):t.texImage3D(i.TEXTURE_3D,0,de,ee.width,ee.height,ee.depth,0,ce,Ce,ee.data);else if(E.isFramebufferTexture){if(We)if(De)t.texStorage2D(i.TEXTURE_2D,he,de,ee.width,ee.height);else{let $=ee.width,ue=ee.height;for(let ge=0;ge<he;ge++)t.texImage2D(i.TEXTURE_2D,ge,de,$,ue,0,ce,Ce,null),$>>=1,ue>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),ee.parentNode!==$){$.appendChild(ee),u.add(E),$.onpaint=ue=>{let ge=ue.changedElements;for(let ie of u)ge.includes(ie.image)&&(ie.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let ge=i.RGBA,ie=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,ie,Ie,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(De&&We){let $=Rt(Pe[0]);t.texStorage2D(i.TEXTURE_2D,he,de,$.width,$.height)}for(let $=0,ue=Pe.length;$<ue;$++)le=Pe[$],De?k&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ce,Ce,le):t.texImage2D(i.TEXTURE_2D,$,de,ce,Ce,le);E.generateMipmaps=!1}else if(De){if(We){let $=Rt(ee);t.texStorage2D(i.TEXTURE_2D,he,de,$.width,$.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Ce,ee)}else t.texImage2D(i.TEXTURE_2D,0,de,ce,Ce,ee);p(E)&&_(W),oe.__version=se.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Be(L,E,H){if(E.image.length!==6)return;let W=ct(L,E),Y=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);let se=n.get(Y);if(Y.version!==se.__version||W===!0){t.activeTexture(i.TEXTURE0+H);let oe=Je.getPrimaries(Je.workingColorSpace),Z=E.colorSpace===oi?null:Je.getPrimaries(E.colorSpace),ee=E.colorSpace===oi||oe===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ce=E.isCompressedTexture||E.image[0].isCompressedTexture,Ce=E.image[0]&&E.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!ce&&!Ce?de[ie]=g(E.image[ie],!0,s.maxCubemapSize):de[ie]=Ce?E.image[ie].image:E.image[ie],de[ie]=yn(E,de[ie]);let le=de[0],Pe=r.convert(E.format,E.colorSpace),De=r.convert(E.type),We=b(E.internalFormat,Pe,De,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,he=se.__version===void 0||W===!0,$=Y.dataReady,ue=S(E,le);et(i.TEXTURE_CUBE_MAP,E);let ge;if(ce){k&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,We,le.width,le.height);for(let ie=0;ie<6;ie++){ge=de[ie].mipmaps;for(let Ie=0;Ie<ge.length;Ie++){let we=ge[Ie];E.format!==Qn?Pe!==null?k?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,we.width,we.height,Pe,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,We,we.width,we.height,0,we.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,we.width,we.height,Pe,De,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,We,we.width,we.height,0,Pe,De,we.data)}}}else{if(ge=E.mipmaps,k&&he){ge.length>0&&ue++;let ie=Rt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,We,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ce){k?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,Pe,De,de[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,We,de[ie].width,de[ie].height,0,Pe,De,de[ie].data);for(let Ie=0;Ie<ge.length;Ie++){let kt=ge[Ie].image[ie].image;k?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,kt.width,kt.height,Pe,De,kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,We,kt.width,kt.height,0,Pe,De,kt.data)}}else{k?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,De,de[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,We,Pe,De,de[ie]);for(let Ie=0;Ie<ge.length;Ie++){let we=ge[Ie];k?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,Pe,De,we.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,We,Pe,De,we.image[ie])}}}p(E)&&_(i.TEXTURE_CUBE_MAP),se.__version=Y.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function be(L,E,H,W,Y,se){let oe=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),ee=b(H.internalFormat,oe,Z,H.normalized,H.colorSpace),ce=n.get(E),Ce=n.get(H);if(Ce.__renderTarget=E,!ce.__hasExternalTextures){let de=Math.max(1,E.width>>se),le=Math.max(1,E.height>>se);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,se,ee,de,le,E.depth,0,oe,Z,null):t.texImage2D(Y,se,ee,de,le,0,oe,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),sn(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,Ce.__webglTexture,0,Kt(E)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,Ce.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(L,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let W=E.depthTexture,Y=W&&W.isDepthTexture?W.type:null,se=v(E.stencilBuffer,Y),oe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;sn(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(E),se,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(E),se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,se,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,L)}else{let W=E.textures;for(let Y=0;Y<W.length;Y++){let se=W[Y],oe=r.convert(se.format,se.colorSpace),Z=r.convert(se.type),ee=b(se.internalFormat,oe,Z,se.normalized,se.colorSpace);sn(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(E),ee,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(E),ee,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ee,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function hn(L,E,H){let W=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(E.depthTexture);if(Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),et(i.TEXTURE_CUBE_MAP,E.depthTexture);let ce=r.convert(E.depthTexture.format),Ce=r.convert(E.depthTexture.type),de;E.depthTexture.format===Fi?de=i.DEPTH_COMPONENT24:E.depthTexture.format===Bs&&(de=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,de,E.width,E.height,0,ce,Ce,null)}}else te(E.depthTexture,0);let se=Y.__webglTexture,oe=Kt(E),Z=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ee=E.depthTexture.format===Bs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Fi)sn(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Z,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Z,se,0);else if(E.depthTexture.format===Bs)sn(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Z,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Z,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(L){let E=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let W=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),W){let Y=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),E.__depthDisposeCallback=Y}E.__boundDepthTexture=W}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)hn(E.__webglFramebuffer[W],L,W);else{let W=L.texture.mipmaps;W&&W.length>0?hn(E.__webglFramebuffer[0],L,0):hn(E.__webglFramebuffer,L,0)}else if(H){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]===void 0)E.__webglDepthbuffer[W]=i.createRenderbuffer(),$e(E.__webglDepthbuffer[W],L,!1);else{let Y=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}}else{let W=L.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),$e(E.__webglDepthbuffer,L,!1);else{let Y=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(L,E,H){let W=n.get(L);E!==void 0&&be(W.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&tt(L)}function Ot(L){let E=L.texture,H=n.get(L),W=n.get(E);L.addEventListener("dispose",y);let Y=L.textures,se=L.isWebGLCubeRenderTarget===!0,oe=Y.length>1;if(oe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=E.version,a.memory.textures++),se){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let ee=0;ee<E.mipmaps.length;ee++)H.__webglFramebuffer[Z][ee]=i.createFramebuffer()}else H.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<E.mipmaps.length;Z++)H.__webglFramebuffer[Z]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(oe)for(let Z=0,ee=Y.length;Z<ee;Z++){let ce=n.get(Y[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&sn(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let ee=Y[Z];H.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);let ce=r.convert(ee.format,ee.colorSpace),Ce=r.convert(ee.type),de=b(ee.internalFormat,ce,Ce,ee.normalized,ee.colorSpace,L.isXRRenderTarget===!0),le=Kt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,de,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),et(i.TEXTURE_CUBE_MAP,E);for(let Z=0;Z<6;Z++)if(E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)be(H.__webglFramebuffer[Z][ee],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else be(H.__webglFramebuffer[Z],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(E)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Z=0,ee=Y.length;Z<ee;Z++){let ce=Y[Z],Ce=n.get(ce),de=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Ce.__webglTexture),et(de,ce),be(H.__webglFramebuffer,L,ce,i.COLOR_ATTACHMENT0+Z,de,0),p(ce)&&_(de)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Z=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,W.__webglTexture),et(Z,E),E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)be(H.__webglFramebuffer[ee],L,E,i.COLOR_ATTACHMENT0,Z,ee);else be(H.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,Z,0);p(E)&&_(Z),t.unbindTexture()}L.depthBuffer&&tt(L)}function at(L){let E=L.textures;for(let H=0,W=E.length;H<W;H++){let Y=E[H];if(p(Y)){let se=M(L),oe=n.get(Y).__webglTexture;t.bindTexture(se,oe),_(se),t.unbindTexture()}}}let qt=[],xn=[];function Un(L){if(L.samples>0){if(sn(L)===!1){let E=L.textures,H=L.width,W=L.height,Y=i.COLOR_BUFFER_BIT,se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(L),Z=E.length>1;if(Z)for(let ce=0;ce<E.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let ee=L.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ce=0;ce<E.length;ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);let Ce=n.get(E[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,H,W,0,0,H,W,Y,i.NEAREST),l===!0&&(qt.length=0,xn.length=0,qt.push(i.COLOR_ATTACHMENT0+ce),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(qt.push(se),xn.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<E.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);let Ce=n.get(E[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Kt(L){return Math.min(s.maxSamples,L.samples)}function sn(L){let E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function z(L){let E=a.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function yn(L,E){let H=L.colorSpace,W=L.format,Y=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==In&&H!==oi&&(Je.getTransfer(H)===wt?(W!==Qn||Y!==Wn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",H)),E}function Rt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=ut,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Un,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wv(i,e){function t(n,s=oi){let r,a=Je.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eu)return i.BYTE;if(n===wu)return i.SHORT;if(n===Ma)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Si)return i.HALF_FLOAT;if(n===Ru)return i.ALPHA;if(n===Cu)return i.RGB;if(n===Qn)return i.RGBA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===Hs)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===So||n===Eo||n===wo||n===To)if(a===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===bl||n===_l||n===yl||n===vl||n===Ao||n===Ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===bl)return a===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_l)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yl)return r.COMPRESSED_R11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ao)return r.COMPRESSED_RG11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sl||n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Fl||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ol||n===kl||n===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ol)return a===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===Hl||n===Ro||n===Vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new uo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ln({vertexShader:qv,fragmentShader:Xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ed=class extends Ni{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Qu,p={},_=t.getContextAttributes(),M=null,b=null,v=[],S=[],T=new ke,y=null,w=null,C=new en;C.viewport=new ft;let P=new en;P.viewport=new ft;let F=[C,P],D=new il,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=v[K];return ne===void 0&&(ne=new oa,v[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=v[K];return ne===void 0&&(ne=new oa,v[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=v[K];return ne===void 0&&(ne=new oa,v[K]=ne),ne.getHandSpace()};function B(K){let ne=S.indexOf(K.inputSource);if(ne===-1)return;let ye=v[ne];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||a),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",te);for(let K=0;K<v.length;K++){let ne=S[K];ne!==null&&(S[K]=null,v[K].disconnect(ne))}I=null,O=null,g.reset();for(let K in p)delete p[K];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,b=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Be=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=_.stencil?Bs:Fi,Be=_.stencil?Sa:Mi);let $e={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new kn(d.textureWidth,d.textureHeight,{format:Qn,type:Wn,depthTexture:new Ns(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new kn(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(K){for(let ne=0;ne<K.removed.length;ne++){let ye=K.removed[ne],Be=S.indexOf(ye);Be>=0&&(S[Be]=null,v[Be].disconnect(ye))}for(let ne=0;ne<K.added.length;ne++){let ye=K.added[ne],Be=S.indexOf(ye);if(Be===-1){for(let $e=0;$e<v.length;$e++)if($e>=S.length){S.push(ye),Be=$e;break}else if(S[$e]===null){S[$e]=ye,Be=$e;break}if(Be===-1)break}let be=v[Be];be&&be.connect(ye)}}let q=new R,J=new R;function Q(K,ne,ye){q.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(ye.matrixWorld);let Be=q.distanceTo(J),be=ne.projectionMatrix.elements,$e=ye.projectionMatrix.elements,hn=be[14]/(be[10]-1),tt=be[14]/(be[10]+1),ut=(be[9]+1)/be[5],Ot=(be[9]-1)/be[5],at=(be[8]-1)/be[0],qt=($e[8]+1)/$e[0],xn=hn*at,Un=hn*qt,Kt=Be/(-at+qt),sn=Kt*-at;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(sn),K.translateZ(Kt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let z=hn+Kt,yn=tt+Kt,Rt=xn-sn,L=Un+(Be-sn),E=ut*tt/yn*z,H=Ot*tt/yn*z;K.projectionMatrix.makePerspective(Rt,L,E,H,z,yn),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ee(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ne=K.near,ye=K.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),D.near=P.near=C.near=ne,D.far=P.far=C.far=ye,(I!==D.near||O!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,O=D.far),D.layers.mask=K.layers.mask|6,C.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Be=K.parent,be=D.cameras;Ee(D,Be);for(let $e=0;$e<be.length;$e++)Ee(be[$e],Be);be.length===2?Q(D,C,P):D.projectionMatrix.copy(C.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),ve(K,D,Be)};function ve(K,ne,ye){ye===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=cr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let gt=null;function et(K,ne){if(h=ne.getViewerPose(c||a),m=ne,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Be=!1;ye.length!==D.cameras.length&&(D.cameras.length=0,Be=!0);for(let tt=0;tt<ye.length;tt++){let ut=ye[tt],Ot=null;if(f!==null)Ot=f.getViewport(ut);else{let qt=u.getViewSubImage(d,ut);Ot=qt.viewport,tt===0&&(e.setRenderTargetTextures(b,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(b))}let at=F[tt];at===void 0&&(at=new en,at.layers.enable(tt),at.viewport=new ft,F[tt]=at),at.matrix.fromArray(ut.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ut.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),tt===0&&(D.matrix.copy(at.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Be===!0&&D.cameras.push(at)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let tt=u.getDepthInformation(ye[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,s.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let tt=0;tt<ye.length;tt++){let ut=ye[tt].camera;if(ut){let Ot=p[ut];Ot||(Ot=new uo,p[ut]=Ot);let at=u.getCameraImage(ut);Ot.sourceTexture=at}}}}for(let ye=0;ye<v.length;ye++){let Be=S[ye],be=v[ye];Be!==null&&be!==void 0&&be.update(Be,ne,c||a)}gt&&gt(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}let ct=new gm;ct.setAnimationLoop(et),this.setAnimationLoop=function(K){gt=K},this.dispose=function(){}}},jv=new ze,Mm=new Ne;Mm.set(-1,0,0,0,1,0,0,0,1);function Kv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Uu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,M,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,b=_.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Mm),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let S=v.program;n.uniformBlockBinding(b,S)}function c(b,v){let S=s[b.id];S===void 0&&(g(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",_));let T=v.program;n.updateUBOMapping(b,T);let y=e.render.frame;r[b.id]!==y&&(d(b),r[b.id]=y)}function h(b){let v=u();b.__bindingPointIndex=v;let S=i.createBuffer(),T=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let v=s[b.id],S=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let y=0,w=S.length;y<w;y++){let C=S[y];if(Array.isArray(C))for(let P=0,F=C.length;P<F;P++)f(C[P],y,P,T);else f(C,y,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,v,S,T){if(x(b,v,S,T)===!0){let y=b.__offset,w=b.value;if(Array.isArray(w)){let C=0;for(let P=0;P<w.length;P++){let F=w[P],D=p(F);m(F,b.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,b.__data)}}function m(b,v,S){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,S)}function x(b,v,S,T){let y=b.value,w=v+"_"+S;if(T[w]===void 0)return typeof y=="number"||typeof y=="boolean"?T[w]=y:ArrayBuffer.isView(y)?T[w]=y.slice():T[w]=y.clone(),!0;{let C=T[w];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return T[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function g(b){let v=b.uniforms,S=0,T=16;for(let w=0,C=v.length;w<C;w++){let P=Array.isArray(v[w])?v[w]:[v[w]];for(let F=0,D=P.length;F<D;F++){let I=P[F],O=Array.isArray(I.value)?I.value:[I.value];for(let B=0,X=O.length;B<X;B++){let te=O[B],q=p(te),J=S%T,Q=J%q.boundary,Ee=J+Q;S+=Q,Ee!==0&&T-Ee<q.storage&&(S+=T-Ee),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=q.storage}}}let y=S%T;return y>0&&(S+=T-y),b.__size=S,b.__cache={},this}function p(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",b),v}function _(b){let v=b.target;v.removeEventListener("dispose",_);let S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function M(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var Jv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function Zv(){return Bi===null&&(Bi=new Ds(Jv,16,16,Hs,Si),Bi.name="DFG_LUT",Bi.minFilter=Yt,Bi.magFilter=Yt,Bi.wrapS=ai,Bi.wrapT=ai,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Do=class{constructor(e={}){let{canvas:t=Hp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Wn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,g=new Set([dl,ul,hl]),p=new Set([Wn,Mi,Ma,Sa,ol,cl]),_=new Uint32Array(4),M=new Int32Array(4),b=new R,v=null,S=null,T=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,F=null,D=null,I=null,O=null;this._outputColorSpace=Bt;let B=0,X=0,te=null,q=-1,J=null,Q=new ft,Ee=new ft,ve=null,gt=new Le(0),et=0,ct=t.width,K=t.height,ne=1,ye=null,Be=null,be=new ft(0,0,ct,K),$e=new ft(0,0,ct,K),hn=!1,tt=new ua,ut=!1,Ot=!1,at=new ze,qt=new R,xn=new ft,Un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function sn(){return te===null?ne:1}let z=n;function yn(A,U){return t.getContext(A,U)}let Rt,L,E,H,W,Y,se,oe,Z,ee,ce,Ce,de,le,Pe,De,We,k,he,$,ue,ge,ie;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",kt,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",hi,!1),z===null){let U="webgl2";if(z=yn(U,A),z===null)throw yn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(A){throw t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",hi,!1),Oe("WebGLRenderer: "+A.message),A}function Ie(){Rt=new sy(z),Rt.init(),ue=new Wv(z,Rt),L=new K_(z,Rt,e,ue),E=new Vv(z,Rt),L.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),D=z.createFramebuffer(),I=z.createFramebuffer(),O=z.createFramebuffer(),H=new oy(z),W=new Rv,Y=new Gv(z,Rt,E,W,L,ue,H),se=new iy(C),oe=new lx(z),ge=new X_(z,oe),Z=new ry(z,oe,H,ge),ee=new ly(z,Z,oe,ge,H),k=new cy(z,L,Y),Pe=new Y_(W),ce=new Av(C,se,Rt,L,ge,Pe),Ce=new Kv(C,W),de=new Pv,le=new Uv(Rt),We=new q_(C,se,E,ee,m,l),De=new Hv(C,ee,L),ie=new Yv(z,H,L,E),he=new j_(z,Rt,H),$=new ay(z,Rt,H),H.programs=ce.programs,C.capabilities=L,C.extensions=Rt,C.properties=W,C.renderLists=de,C.shadowMap=De,C.state=E,C.info=H}x!==Wn&&(w=new uy(x,t.width,t.height,o,s,r));let we=new ed(C,z);this.xr=we,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=Rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(ct,K,!1))},this.getSize=function(A){return A.set(ct,K)},this.setSize=function(A,U,j=!0){if(we.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=A,K=U,t.width=Math.floor(A*ne),t.height=Math.floor(U*ne),j===!0&&(t.style.width=A+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(ct*ne,K*ne).floor()},this.setDrawingBufferSize=function(A,U,j){ct=A,K=U,ne=j,t.width=Math.floor(A*j),t.height=Math.floor(U*j),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(x===Wn){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Q)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,U,j,V){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,U,j,V),E.viewport(Q.copy(be).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy($e)},this.setScissor=function(A,U,j,V){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,U,j,V),E.scissor(Ee.copy($e).multiplyScalar(ne).round())},this.getScissorTest=function(){return hn},this.setScissorTest=function(A){E.setScissorTest(hn=A)},this.setOpaqueSort=function(A){ye=A},this.setTransparentSort=function(A){Be=A},this.getClearColor=function(A){return A.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,j=!0){let V=0;if(A){let G=!1;if(te!==null){let me=te.texture.format;G=g.has(me)}if(G){let me=te.texture.type,_e=p.has(me),pe=We.getClearColor(),Me=We.getClearAlpha(),Te=pe.r,Xe=pe.g,nt=pe.b;_e?(_[0]=Te,_[1]=Xe,_[2]=nt,_[3]=Me,z.clearBufferuiv(z.COLOR,0,_)):(M[0]=Te,M[1]=Xe,M[2]=nt,M[3]=Me,z.clearBufferiv(z.COLOR,0,M))}else V|=z.COLOR_BUFFER_BIT}U&&(V|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",hi,!1),We.dispose(),de.dispose(),le.dispose(),W.dispose(),se.dispose(),ee.dispose(),ge.dispose(),ie.dispose(),ce.dispose(),we.dispose(),we.removeEventListener("sessionstart",mf),we.removeEventListener("sessionend",gf),er.stop()};function kt(A){A.preventDefault(),so("WebGLRenderer: Context Lost."),P=!0}function St(){so("WebGLRenderer: Context Restored."),P=!1;let A=H.autoReset,U=De.enabled,j=De.autoUpdate,V=De.needsUpdate,G=De.type;Ie(),H.autoReset=A,De.enabled=U,De.autoUpdate=j,De.needsUpdate=V,De.type=G}function hi(A){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Pi(A){let U=A.target;U.removeEventListener("dispose",Pi),$g(U)}function $g(A){Qg(A),W.remove(A)}function Qg(A){let U=W.get(A).programs;U!==void 0&&(U.forEach(function(j){ce.releaseProgram(j)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,j,V,G,me){U===null&&(U=Un);let _e=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=n0(A,U,j,V,G);E.setMaterial(V,_e);let Me=j.index,Te=1;if(V.wireframe===!0){if(Me=Z.getWireframeAttribute(j),Me===void 0)return;Te=2}let Xe=j.drawRange,nt=j.attributes.position,Se=Xe.start*Te,Et=(Xe.start+Xe.count)*Te;me!==null&&(Se=Math.max(Se,me.start*Te),Et=Math.min(Et,(me.start+me.count)*Te)),Me!==null?(Se=Math.max(Se,0),Et=Math.min(Et,Me.count)):nt!=null&&(Se=Math.max(Se,0),Et=Math.min(Et,nt.count));let rn=Et-Se;if(rn<0||rn===1/0)return;ge.setup(G,V,pe,j,Me);let Gt,Nt=he;if(Me!==null&&(Gt=oe.get(Me),Nt=$,Nt.setIndex(Gt)),G.isMesh)V.wireframe===!0?(E.setLineWidth(V.wireframeLinewidth*sn()),Nt.setMode(z.LINES)):Nt.setMode(z.TRIANGLES);else if(G.isLine){let vn=V.linewidth;vn===void 0&&(vn=1),E.setLineWidth(vn*sn()),G.isLineSegments?Nt.setMode(z.LINES):G.isLineLoop?Nt.setMode(z.LINE_LOOP):Nt.setMode(z.LINE_STRIP)}else G.isPoints?Nt.setMode(z.POINTS):G.isSprite&&Nt.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let vn=G._multiDrawStarts,xe=G._multiDrawCounts,Cn=G._multiDrawCount,lt=Me?oe.get(Me).bytesPerElement:1,si=W.get(V).currentProgram.getUniforms();for(let Ii=0;Ii<Cn;Ii++)si.setValue(z,"_gl_DrawID",Ii),Nt.render(vn[Ii]/lt,xe[Ii])}else if(G.isInstancedMesh)Nt.renderInstances(Se,rn,G.count);else if(j.isInstancedBufferGeometry){let vn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,xe=Math.min(j.instanceCount,vn);Nt.renderInstances(Se,rn,xe)}else Nt.render(Se,rn)};function pf(A,U,j,V){F!==null&&A.isNodeMaterial&&F.setObject(V,A),ut===!0&&Pe.setState(A,j,!1),A.transparent===!0&&A.side===Gn&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,sc(A,U,V),A.side=ki,A.needsUpdate=!0,sc(A,U,V),A.side=Gn):sc(A,U,V)}this.compile=function(A,U,j=null){j===null&&(j=A),F!==null&&F.renderStart(A,U,j),S=le.get(j),S.init(U),y.push(S),j.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),A!==j&&A.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),Ot=this.localClippingEnabled,ut=Pe.init(this.clippingPlanes,Ot),ut===!0&&Pe.setGlobalState(this.clippingPlanes,U),F!==null&&De.render(S.state.shadowsArray,j,U);let V=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let me=G.material;if(me)if(Array.isArray(me))for(let _e=0;_e<me.length;_e++){let pe=me[_e];pf(pe,j,U,G),V.add(pe)}else pf(me,j,U,G),V.add(me)}),S=y.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(A,U,j=null){let V=this.compile(A,U,j);return new Promise(G=>{function me(){if(V.forEach(function(_e){let Me=W.get(_e).currentProgram;(Me===void 0||Me.isReady())&&V.delete(_e)}),V.size===0){G(A);return}setTimeout(me,10)}Rt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Th=null;function e0(A){Th&&Th(A)}function mf(){er.stop()}function gf(){er.start()}let er=new gm;er.setAnimationLoop(e0),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(A){Th=A,we.setAnimationLoop(A),A===null?er.stop():er.start()},we.addEventListener("sessionstart",mf),we.addEventListener("sessionend",gf),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(A,U);let j=we.enabled===!0&&we.isPresenting===!0,V=w!==null&&(te===null||j)&&w.begin(C,te);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(U),U=we.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,U,te),S=le.get(A,y.length),S.init(U),S.state.textureUnits=Y.getTextureUnits(),y.push(S),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(at,gi,U.reversedDepth),Ot=this.localClippingEnabled,ut=Pe.init(this.clippingPlanes,Ot),v=de.get(A,T.length),v.init(),T.push(v),we.enabled===!0&&we.isPresenting===!0){let _e=C.xr.getDepthSensingMesh();_e!==null&&Ah(_e,U,-1/0,C.sortObjects)}Ah(A,U,0,C.sortObjects),v.finish(),F!==null&&F.updateLights(S.state.lightsArray),C.sortObjects===!0&&v.sort(ye,Be),Kt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Kt&&We.addToRenderList(v,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&Pe.beginShadows();let G=S.state.shadowsArray;if(De.render(G,A,U),ut===!0&&Pe.endShadows(),(V&&w.hasRenderPass())===!1){let _e=v.opaque,pe=v.transmissive;if(S.setupLights(),U.isArrayCamera){let Me=U.cameras;if(pe.length>0)for(let Te=0,Xe=Me.length;Te<Xe;Te++){let nt=Me[Te];bf(_e,pe,A,nt)}Kt&&We.render(A);for(let Te=0,Xe=Me.length;Te<Xe;Te++){let nt=Me[Te];xf(v,A,nt,nt.viewport)}}else pe.length>0&&bf(_e,pe,A,U),Kt&&We.render(A),xf(v,A,U)}te!==null&&X===0&&(Y.updateMultisampleRenderTarget(te),Y.updateRenderTargetMipmap(te)),V&&w.end(C),A.isScene===!0&&A.onAfterRender(C,A,U),ge.resetDefaultState(),q=-1,J=null,y.pop(),y.length>0?(S=y[y.length-1],Y.setTextureUnits(S.state.textureUnits),ut===!0&&Pe.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,F!==null&&F.renderEnd()};function Ah(A,U,j,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(tt)){V&&xn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(at);let _e=ee.update(A),pe=A.material;pe.visible&&v.push(A,_e,pe,j,xn.z,null,U)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(tt))){let _e=ee.update(A),pe=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xn.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),xn.copy(_e.boundingSphere.center)),xn.applyMatrix4(A.matrixWorld).applyMatrix4(at)),Array.isArray(pe)){let Me=_e.groups;for(let Te=0,Xe=Me.length;Te<Xe;Te++){let nt=Me[Te],Se=pe[nt.materialIndex];Se&&Se.visible&&v.push(A,_e,Se,j,xn.z,nt,U)}}else pe.visible&&v.push(A,_e,pe,j,xn.z,null,U)}}let me=A.children;for(let _e=0,pe=me.length;_e<pe;_e++)Ah(me[_e],U,j,V)}function xf(A,U,j,V){let{opaque:G,transmissive:me,transparent:_e}=A;S.setupLightsView(j),ut===!0&&Pe.setGlobalState(C.clippingPlanes,j),V&&E.viewport(Q.copy(V)),G.length>0&&ic(G,U,j),me.length>0&&ic(me,U,j),_e.length>0&&ic(_e,U,j),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function bf(A,U,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let Se=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new kn(1,1,{generateMipmaps:!0,type:Se?Si:Wn,minFilter:Zn,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let me=S.state.transmissionRenderTarget[V.id],_e=V.viewport||Q;me.setSize(_e.z*C.transmissionResolutionScale,_e.w*C.transmissionResolutionScale);let pe=C.getRenderTarget(),Me=C.getActiveCubeFace(),Te=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(gt),et=C.getClearAlpha(),et<1&&C.setClearColor(16777215,.5),C.clear(),Kt&&We.render(j);let Xe=C.toneMapping;C.toneMapping=vi;let nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),ut===!0&&Pe.setGlobalState(C.clippingPlanes,V),ic(A,j,V),Y.updateMultisampleRenderTarget(me),Y.updateRenderTargetMipmap(me),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Et=0,rn=U.length;Et<rn;Et++){let Gt=U[Et],{object:Nt,geometry:vn,material:xe,group:Cn}=Gt;if(xe.side===Gn&&Nt.layers.test(V.layers)){let lt=xe.side;xe.side=Dn,xe.needsUpdate=!0,_f(Nt,j,V,vn,xe,Cn),xe.side=lt,xe.needsUpdate=!0,Se=!0}}Se===!0&&(Y.updateMultisampleRenderTarget(me),Y.updateRenderTargetMipmap(me))}C.setRenderTarget(pe,Me,Te),C.setClearColor(gt,et),nt!==void 0&&(V.viewport=nt),C.toneMapping=Xe}function ic(A,U,j){let V=U.isScene===!0?U.overrideMaterial:null;for(let G=0,me=A.length;G<me;G++){let _e=A[G],{object:pe,geometry:Me,group:Te}=_e,Xe=_e.material;Xe.allowOverride===!0&&V!==null&&(Xe=V),pe.layers.test(j.layers)&&_f(pe,U,j,Me,Xe,Te)}}function _f(A,U,j,V,G,me){F!==null&&G.isNodeMaterial&&F.setObject(A,G),A.onBeforeRender(C,U,j,V,G,me),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(C,U,j,V,A,me),G.transparent===!0&&G.side===Gn&&G.forceSinglePass===!1?(G.side=Dn,G.needsUpdate=!0,C.renderBufferDirect(j,U,V,G,A,me),G.side=ki,G.needsUpdate=!0,C.renderBufferDirect(j,U,V,G,A,me),G.side=Gn):C.renderBufferDirect(j,U,V,G,A,me),A.onAfterRender(C,U,j,V,G,me)}function sc(A,U,j){U.isScene!==!0&&(U=Un);let V=W.get(A),G=S.state.lights,me=S.state.shadowsArray,_e=G.state.version,pe=ce.getParameters(A,G.state,me,U,j,S.state.lightProbeGridArray),Me=ce.getProgramCacheKey(pe),Te=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let Xe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=se.get(A.envMap||V.environment,Xe),V.envMapRotation=V.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Te===void 0&&(A.addEventListener("dispose",Pi),Te=new Map,V.programs=Te);let nt=Te.get(Me);if(nt!==void 0){if(V.currentProgram===nt&&V.lightsStateVersion===_e)return vf(A,pe),nt}else pe.uniforms=ce.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,j,pe),A.onBeforeCompile(pe,C),nt=ce.acquireProgram(pe,Me),Te.set(Me,nt),V.uniforms=pe.uniforms;let Se=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Se.clippingPlanes=Pe.uniform),vf(A,pe),V.needsLights=s0(A),V.lightsStateVersion=_e,V.needsLights&&(Se.ambientLightColor.value=G.state.ambient,Se.lightProbe.value=G.state.probe,Se.sunLights.value=G.state.sun,Se.sunLightShadows.value=G.state.sunShadow,Se.directionalLights.value=G.state.directional,Se.directionalLightShadows.value=G.state.directionalShadow,Se.spotLights.value=G.state.spot,Se.spotLightShadows.value=G.state.spotShadow,Se.rectAreaLights.value=G.state.rectArea,Se.ltc_1.value=G.state.rectAreaLTC1,Se.ltc_2.value=G.state.rectAreaLTC2,Se.pointLights.value=G.state.point,Se.pointLightShadows.value=G.state.pointShadow,Se.hemisphereLights.value=G.state.hemi,Se.sunShadowMatrix.value=G.state.sunShadowMatrix,Se.sunShadowCascade.value=G.state.sunShadowCascade,Se.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Se.spotLightMatrix.value=G.state.spotLightMatrix,Se.spotLightMap.value=G.state.spotLightMap,Se.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=nt,V.uniformsList=null,nt}function yf(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=Aa.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function vf(A,U){let j=W.get(A);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function t0(A,U){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(U.matrixWorld);for(let j=0,V=A.length;j<V;j++){let G=A[j];if(G.texture!==null&&G.boundingBox.containsPoint(b))return G}return null}function n0(A,U,j,V,G){U.isScene!==!0&&(U=Un),Y.resetTextureUnits();let me=U.fog,_e=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,pe=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Je.workingColorSpace,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Te=se.get(V.envMap||_e,Me),Xe=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,nt=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!j.morphAttributes.position,Et=!!j.morphAttributes.normal,rn=!!j.morphAttributes.color,Gt=vi;V.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Gt=C.toneMapping);let Nt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vn=Nt!==void 0?Nt.length:0,xe=W.get(V),Cn=S.state.lights;if(ut===!0&&(Ot===!0||A!==J)){let zt=A===J&&V.id===q;Pe.setState(V,A,zt)}let lt=!1;V.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Cn.state.version||xe.outputColorSpace!==pe||G.isBatchedMesh&&xe.batching===!1||!G.isBatchedMesh&&xe.batching===!0||G.isBatchedMesh&&xe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&xe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&xe.instancing===!1||!G.isInstancedMesh&&xe.instancing===!0||G.isSkinnedMesh&&xe.skinning===!1||!G.isSkinnedMesh&&xe.skinning===!0||G.isInstancedMesh&&xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&xe.instancingMorph===!1&&G.morphTexture!==null||xe.envMap!==Te||V.fog===!0&&xe.fog!==me||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Pe.numPlanes||xe.numIntersection!==Pe.numIntersection)||xe.vertexAlphas!==Xe||xe.vertexTangents!==nt||xe.morphTargets!==Se||xe.morphNormals!==Et||xe.morphColors!==rn||xe.toneMapping!==Gt||xe.morphTargetsCount!==vn||!!xe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,xe.__version=V.version);let si=xe.currentProgram;lt===!0&&(si=sc(V,U,G),F&&V.isNodeMaterial&&F.onUpdateProgram(V,si,xe));let Ii=!1,Ms=!1,kr=!1,Pt=si.getUniforms(),Qt=xe.uniforms;if(E.useProgram(si.program)&&(Ii=!0,Ms=!0,kr=!0),V.id!==q&&(q=V.id,Ms=!0),xe.needsLights){let zt=t0(S.state.lightProbeGridArray,G);xe.lightProbeGrid!==zt&&(xe.lightProbeGrid=zt,Ms=!0)}if(Ii||J!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(z,"projectionMatrix",A.projectionMatrix),Pt.setValue(z,"viewMatrix",A.matrixWorldInverse);let Es=Pt.map.cameraPosition;Es!==void 0&&Es.setValue(z,qt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Pt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Pt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,Ms=!0,kr=!0)}if(xe.needsLights&&(Cn.state.sunShadowMap.length>0&&Pt.setValue(z,"sunShadowMap",Cn.state.sunShadowMap,Y),Cn.state.directionalShadowMap.length>0&&Pt.setValue(z,"directionalShadowMap",Cn.state.directionalShadowMap,Y),Cn.state.spotShadowMap.length>0&&Pt.setValue(z,"spotShadowMap",Cn.state.spotShadowMap,Y),Cn.state.pointShadowMap.length>0&&Pt.setValue(z,"pointShadowMap",Cn.state.pointShadowMap,Y)),G.isSkinnedMesh){Pt.setOptional(z,G,"bindMatrix"),Pt.setOptional(z,G,"bindMatrixInverse");let zt=G.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Pt.setValue(z,"boneTexture",zt.boneTexture,Y))}G.isBatchedMesh&&(Pt.setOptional(z,G,"batchingTexture"),Pt.setValue(z,"batchingTexture",G._matricesTexture,Y),Pt.setOptional(z,G,"batchingIdTexture"),Pt.setValue(z,"batchingIdTexture",G._indirectTexture,Y),Pt.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&Pt.setValue(z,"batchingColorTexture",G._colorsTexture,Y));let Ss=j.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&k.update(G,j,si),(Ms||xe.receiveShadow!==G.receiveShadow)&&(xe.receiveShadow=G.receiveShadow,Pt.setValue(z,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Qt.envMapIntensity.value=U.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=Zv()),Ms){if(Pt.setValue(z,"toneMappingExposure",C.toneMappingExposure),xe.needsLights&&i0(Qt,kr),me&&V.fog===!0&&Ce.refreshFogUniforms(Qt,me),Ce.refreshMaterialUniforms(Qt,V,ne,K,S.state.transmissionRenderTarget[A.id]),xe.needsLights&&xe.lightProbeGrid){let zt=xe.lightProbeGrid;Qt.probesSH.value=zt.texture,Qt.probesMin.value.copy(zt.boundingBox.min),Qt.probesMax.value.copy(zt.boundingBox.max),Qt.probesResolution.value.copy(zt.resolution)}Aa.upload(z,yf(xe),Qt,Y)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Aa.upload(z,yf(xe),Qt,Y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Pt.setValue(z,"center",G.center),Pt.setValue(z,"modelViewMatrix",G.modelViewMatrix),Pt.setValue(z,"normalMatrix",G.normalMatrix),Pt.setValue(z,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let zt=V.uniformsGroups;for(let Es=0,zr=zt.length;Es<zr;Es++){let Sf=zt[Es];ie.update(Sf,si),ie.bind(Sf,si)}}return si}function i0(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.sunLights.needsUpdate=U,A.sunLightShadows.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function s0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(A,U,j){let V=W.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=U,W.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){let j=W.get(A);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,j=0){te=A,B=U,X=j;let V=null,G=!1,me=!1;if(A){let pe=W.get(A);if(pe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(z.FRAMEBUFFER,pe.__webglFramebuffer),Q.copy(A.viewport),Ee.copy(A.scissor),ve=A.scissorTest,E.viewport(Q),E.scissor(Ee),E.setScissorTest(ve),q=-1;return}else if(pe.__webglFramebuffer===void 0)Y.setupRenderTarget(A);else if(pe.__hasExternalTextures)Y.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Xe=A.depthTexture;if(pe.__boundDepthTexture!==Xe){if(Xe!==null&&W.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(A)}}let Me=A.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);let Te=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?V=Te[U][j]:V=Te[U],G=!0):A.samples>0&&Y.useMultisampledRTT(A)===!1?V=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Te)?V=Te[j]:V=Te,Q.copy(A.viewport),Ee.copy(A.scissor),ve=A.scissorTest}else Q.copy(be).multiplyScalar(ne).floor(),Ee.copy($e).multiplyScalar(ne).floor(),ve=hn;if(j!==0&&(V=D),E.bindFramebuffer(z.FRAMEBUFFER,V)&&E.drawBuffers(A,V),E.viewport(Q),E.scissor(Ee),E.setScissorTest(ve),G){let pe=W.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,j)}else if(me){let pe=U;for(let Me=0;Me<A.textures.length;Me++){let Te=W.get(A.textures[Me]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Me,Te.__webglTexture,j,pe)}}else if(A!==null&&j!==0){let pe=W.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pe.__webglTexture,j)}q=-1};function Mf(A){let U=W.get(A);return(U.__readFormat!==A.format||U.__readType!==A.type)&&(U.__readFormat=A.format,U.__readType=A.type,U.__formatReadable=L.textureFormatReadable(A.format),U.__typeReadable=L.textureTypeReadable(A.type)),U}this.readRenderTargetPixels=function(A,U,j,V,G,me,_e,pe=0){if(!(A&&A.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){E.bindFramebuffer(z.FRAMEBUFFER,Me);try{let Te=A.textures[pe],Xe=Te.format,nt=Te.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+pe);let Se=Mf(Te);if(Se.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&j>=0&&j<=A.height-G&&z.readPixels(U,j,V,G,ue.convert(Xe),ue.convert(nt),me)}finally{let Te=te!==null?W.get(te).__webglFramebuffer:null;E.bindFramebuffer(z.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(A,U,j,V,G,me,_e,pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me)if(U>=0&&U<=A.width-V&&j>=0&&j<=A.height-G){E.bindFramebuffer(z.FRAMEBUFFER,Me);let Te=A.textures[pe],Xe=Te.format,nt=Te.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+pe);let Se=Mf(Te);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.bufferData(z.PIXEL_PACK_BUFFER,me.byteLength,z.STREAM_READ),z.readPixels(U,j,V,G,ue.convert(Xe),ue.convert(nt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let rn=te!==null?W.get(te).__webglFramebuffer:null;E.bindFramebuffer(z.FRAMEBUFFER,rn);let Gt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Gp(z,Gt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,me),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Et),z.deleteSync(Gt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,j=0){let V=Math.pow(2,-j),G=Math.floor(A.image.width*V),me=Math.floor(A.image.height*V),_e=U!==null?U.x:0,pe=U!==null?U.y:0;Y.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,_e,pe,G,me),E.unbindTexture()},this.copyTextureToTexture=function(A,U,j=null,V=null,G=0,me=0){let _e,pe,Me,Te,Xe,nt,Se,Et,rn,Gt=A.isCompressedTexture?A.mipmaps[me]:A.image;if(j!==null)_e=j.max.x-j.min.x,pe=j.max.y-j.min.y,Me=j.isBox3?j.max.z-j.min.z:1,Te=j.min.x,Xe=j.min.y,nt=j.isBox3?j.min.z:0;else{let Qt=Math.pow(2,-G);_e=Math.floor(Gt.width*Qt),pe=Math.floor(Gt.height*Qt),A.isDataArrayTexture?Me=Gt.depth:A.isData3DTexture?Me=Math.floor(Gt.depth*Qt):Me=1,Te=0,Xe=0,nt=0}V!==null?(Se=V.x,Et=V.y,rn=V.z):(Se=0,Et=0,rn=0);let Nt=ue.convert(U.format),vn=ue.convert(U.type),xe;U.isData3DTexture?(Y.setTexture3D(U,0),xe=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),xe=z.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),xe=z.TEXTURE_2D),E.activeTexture(z.TEXTURE0),E.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let Cn=E.getParameter(z.UNPACK_ROW_LENGTH),lt=E.getParameter(z.UNPACK_IMAGE_HEIGHT),si=E.getParameter(z.UNPACK_SKIP_PIXELS),Ii=E.getParameter(z.UNPACK_SKIP_ROWS),Ms=E.getParameter(z.UNPACK_SKIP_IMAGES);E.pixelStorei(z.UNPACK_ROW_LENGTH,Gt.width),E.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Gt.height),E.pixelStorei(z.UNPACK_SKIP_PIXELS,Te),E.pixelStorei(z.UNPACK_SKIP_ROWS,Xe),E.pixelStorei(z.UNPACK_SKIP_IMAGES,nt);let kr=A.isDataArrayTexture||A.isData3DTexture,Pt=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){let Qt=W.get(A),Ss=W.get(U),zt=W.get(Qt.__renderTarget),Es=W.get(Ss.__renderTarget);E.bindFramebuffer(z.READ_FRAMEBUFFER,zt.__webglFramebuffer),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,Es.__webglFramebuffer);for(let zr=0;zr<Me;zr++)kr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,W.get(A).__webglTexture,G,nt+zr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,W.get(U).__webglTexture,me,rn+zr)),z.blitFramebuffer(Te,Xe,_e,pe,Se,Et,_e,pe,z.DEPTH_BUFFER_BIT,z.NEAREST);E.bindFramebuffer(z.READ_FRAMEBUFFER,null),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||W.has(A)){let Qt=W.get(A),Ss=W.get(U);E.bindFramebuffer(z.READ_FRAMEBUFFER,I),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let zt=0;zt<Me;zt++)kr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qt.__webglTexture,G,nt+zt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Qt.__webglTexture,G),Pt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ss.__webglTexture,me,rn+zt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ss.__webglTexture,me),G!==0?z.blitFramebuffer(Te,Xe,_e,pe,Se,Et,_e,pe,z.COLOR_BUFFER_BIT,z.NEAREST):Pt?z.copyTexSubImage3D(xe,me,Se,Et,rn+zt,Te,Xe,_e,pe):z.copyTexSubImage2D(xe,me,Se,Et,Te,Xe,_e,pe);E.bindFramebuffer(z.READ_FRAMEBUFFER,null),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(xe,me,Se,Et,rn,_e,pe,Me,Nt,vn,Gt.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(xe,me,Se,Et,rn,_e,pe,Me,Nt,Gt.data):z.texSubImage3D(xe,me,Se,Et,rn,_e,pe,Me,Nt,vn,Gt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,me,Se,Et,_e,pe,Nt,vn,Gt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,me,Se,Et,Gt.width,Gt.height,Nt,Gt.data):z.texSubImage2D(z.TEXTURE_2D,me,Se,Et,_e,pe,Nt,vn,Gt);E.pixelStorei(z.UNPACK_ROW_LENGTH,Cn),E.pixelStorei(z.UNPACK_IMAGE_HEIGHT,lt),E.pixelStorei(z.UNPACK_SKIP_PIXELS,si),E.pixelStorei(z.UNPACK_SKIP_ROWS,Ii),E.pixelStorei(z.UNPACK_SKIP_IMAGES,Ms),me===0&&U.generateMipmaps&&z.generateMipmap(xe),E.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&Y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Y.setTextureCube(A,0):A.isData3DTexture?Y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Y.setTexture2DArray(A,0):Y.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){B=0,X=0,te=null,E.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function td(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,M=o.length;_<M;_++){let b=o[_],v=i.attributes[b];l[b]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let S=i.morphAttributes[b];S&&(c[b]||(c[b]=[]),S.forEach((T,y)=>{let w=new T.array.constructor(T.count*T.itemSize);c[b][y]=new T.constructor(w,T.itemSize,T.normalized)}))}let f=e*.5,m=Math.log10(1/e),x=Math.pow(10,m),g=f*x;for(let _=0;_<r;_++){let M=n?n.getX(_):_,b="";for(let v=0,S=o.length;v<S;v++){let T=o[v],y=i.getAttribute(T),w=y.itemSize;for(let C=0;C<w;C++)b+=`${Math.trunc(y[u[C]](M)*x+g)},`}if(b in t)h.push(t[b]);else{for(let v=0,S=o.length;v<S;v++){let T=o[v],y=i.getAttribute(T),w=i.morphAttributes[T],C=y.itemSize,P=l[T],F=c[T];for(let D=0;D<C;D++){let I=u[D],O=d[D];if(P[O](a,y[I](M)),w)for(let B=0,X=w.length;B<X;B++)F[B][O](a,w[B][I](M))}}t[b]=a,h.push(a),a++}}let p=i.clone();for(let _ in i.attributes){let M=l[_];if(p.setAttribute(_,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),_ in c)for(let b=0;b<c[_].length;b++){let v=c[_][b];p.morphAttributes[_][b]=new v.constructor(v.array.slice(0,a*v.itemSize),v.itemSize,v.normalized)}}return p.setIndex(h),p}function nd(i,e){if(e===Pu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ea||e===Co){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ea)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Sm(i){let e=new Map,t=new Map,n=i.clone();return Em(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Em(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Em(i.children[n],e.children[n],t)}var No=class extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ld(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Zl(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zl(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Md(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ps.extractUrlBase(e);a=ps.resolveURL(c,this.path)}else a=ps.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ma(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cm){try{a[Qe.KHR_BINARY_GLTF]=new Sd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Pd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:a[u]=new od;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ed(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[u]=new wd;break;case Qe.KHR_MESH_QUANTIZATION:a[u]=new Td;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Qv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function nn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ad=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],In);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ks(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _o(h),c.distance=u;break;case"spot":c=new bo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},od=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Jn}extendParams(e,t,n){let s=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],In),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ld=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(r,r)}return Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],In)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Bt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(r[0],r[1],r[2],In),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},gd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(r[0],r[1],r[2],In),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Bt)),Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},yd=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},vd=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Zl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Md=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ci.TRIANGLES&&c.mode!==ci.TRIANGLE_STRIP&&c.mode!==ci.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let x=new ze,g=new R,p=new ht,_=new R(1,1,1),M=new ur(m.geometry,m.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&_.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,x.compose(g,p,_));let b=null;for(let v in l)if(v==="_COLOR_0"){let S=l[v];M.instanceColor=new as(S.array,S.itemSize,S.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(b===null){let T=M.geometry;b=new Tt,b.name=T.name;for(let y in T.attributes)b.setAttribute(y,T.attributes[y]);for(let y in T.morphAttributes)b.morphAttributes[y]=T.morphAttributes[y];T.index!==null&&b.setIndex(T.index),b.morphTargetsRelative=T.morphTargetsRelative;for(let y of T.groups)b.addGroup(y.start,y.count,y.materialIndex);T.boundingBox!==null&&(b.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(b.boundingSphere=T.boundingSphere.clone()),b.drawRange.start=T.drawRange.start,b.drawRange.count=T.drawRange.count,b.userData=Object.assign({},T.userData),M.geometry=b}let S=l[v];b.setAttribute(v,new as(S.array,S.itemSize,S.normalized))}Ht.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Cm="glTF",Fo=12,wm={JSON:1313821514,BIN:5130562},Sd=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Fo,r=new DataView(e,Fo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===wm.JSON){let c=new Uint8Array(e,Fo+a,o);this.content=n.decode(c)}else if(l===wm.BIN){let c=Fo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ed=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Rd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Rd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Pa[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(f)},o,c,In,d)})})}},wd=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Td=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},$l=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,g=-2*f+3*d,p=f-d,_=1-g,M=p-d+u;for(let b=0;b!==o;b++){let v=a[x+b+o],S=a[x+b+l]*h,T=a[m+b+o],y=a[m+b]*h;r[b]=_*v+M*S+g*T+p*y}return r}},eM=new ht,Ad=class extends $l{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return eM.fromArray(r).normalize().toArray(r),r}},ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Pa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tm={9728:tn,9729:Yt,9984:rl,9985:va,9986:_r,9987:Zn},Am={33071:ai,33648:na,10497:On},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tM={CUBICSPLINE:void 0,LINEAR:or,STEP:ar},sd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new on({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),i.DefaultMaterial}function Mr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function sM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rM(i){let e,t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rd(t.attributes):e=i.indices+":"+rd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+rd(i.targets[n]);return e}function rd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Cd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var oM=new ze,Pd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new pr(this.options.manager):this.textureLoader=new yo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ma(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Mr(r,o,s),Vi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ps.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=id[s.type],o=Pa[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new je(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=id[s.type],c=Pa[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(_);M||(x=new c(o,p*f,s.count*f/h),M=new la(x,f/h),t.cache.add(_,M)),g=new ha(M,l,d%f/h,m)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),g=new je(x,l,m);if(s.sparse!==void 0){let p=id.SCALAR,_=Pa[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,v=new _(a[1],M,s.sparse.count*p),S=new c(a[2],b,s.sparse.count*l);o!==null&&(g=new je(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,y=v.length;T<y;T++){let w=v[T];if(g.setX(w,S[T*l]),l>=2&&g.setY(w,S[T*l+1]),l>=3&&g.setZ(w,S[T*l+2]),l>=4&&g.setW(w,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Tm[d.magFilter]||Yt,h.minFilter=Tm[d.minFilter]||Zn,h.wrapS=Am[d.wrapS]||On,h.wrapT=Am[d.wrapT]||On,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==tn&&h.minFilter!==Yt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new un(x);g.needsUpdate=!0,d(g)}),t.load(ps.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Vi(u,a),u.userData.mimeType=a.mimeType||aM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new os,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new da,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return on}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let u=s[Qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],In),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Bt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Gn);let h=r.alphaMode||sd.OPAQUE;if(h===sd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===sd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Jn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Jn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Jn){let u=r.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],In)}return r.emissiveTexture!==void 0&&a!==Jn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Vi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mr(s,u,r),u})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Rm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=rM(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Rm(new Tt,c,t),c.mode===ci.TRIANGLE_STRIP?d=d.then(f=>nd(f,Co)):c.mode===ci.TRIANGLE_FAN&&(d=d.then(f=>nd(f,Ea))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?nM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],g=a[f],p,_=c[f];if(g.mode===ci.TRIANGLES||g.mode===ci.TRIANGLE_STRIP||g.mode===ci.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&b?new Ls(x,_):new st(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===ci.LINES)p=new co(x,_);else if(g.mode===ci.LINE_STRIP)p=new dr(x,_);else if(g.mode===ci.LINE_LOOP)p=new lo(x,_);else if(g.mode===ci.POINTS)p=new cs(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&sM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Vi(p,r),g.extensions&&Mr(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Mr(s,u[0],r),u[0];let d=new It;r.extensions&&Mr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(Nu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Os(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fs(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,_=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(m),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let M=0,b=d.length;M<b;M++){let v=d[M],S=f[M],T=m[M],y=x[M],w=g[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let C=n._createAnimationTracks(v,S,T,y,w);if(C)for(let P=0;P<C.length;P++)p.push(C[P])}let _=new go(r,void 0,p);return Vi(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,oM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new rs:c.length>1?h=new It:c.length===1?h=c[0]:h=new Ht,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Vi(h,r),r.extensions&&Mr(n,h,r),r.matrix!==void 0){let u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new It;n.name&&(r.name=s.createUniqueName(n.name)),Vi(r,n),n.extensions&&Mr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Sm(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Bn||d instanceof un)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Vs[r.path]===Vs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Vs[r.path]){case Vs.weights:h=us;break;case Vs.rotation:h=ds;break;case Vs.translation:case Vs.scale:h=Us;break;default:n.itemSize===1?h=us:h=Us;break}let u=s.interpolation!==void 0?tM[s.interpolation]:or,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let x=new h(l[f]+"."+Vs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Cd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ds?Ad:$l;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function cM(i,e,t){let n=e.attributes,s=new Jt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let h=Cd(Pa[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=Cd(Pa[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new zn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Rm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Rd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==In&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Vi(i,e),cM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?iM(i,e.targets,t):i})}var Id=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),M=0;M<p.length;++M){var b=p.charCodeAt(M);_[M]=b>96?b-97:b>64?b-39:b+4}for(var v=0,M=0;M<p.length;++M)_[v++]=_[M]<60?n[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,v)}function l(p,_,M,b,v,S,T){var y=p.exports.sbrk,w=b+3&-4,C=y(w*v),P=y(S.length),F=new Uint8Array(p.exports.memory.buffer);F.set(S,P);var D=_(C,b,v,P,S.length);if(D==0&&T&&T(C,w,v),M.set(F.subarray(C,C+b*v)),y(C-y(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(M){var b=M.data;_.pending-=b.count,_.requests[b.id][b.action](b.value),delete _.requests[b.id]},_}function m(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),M=new Blob([_],{type:"text/javascript"}),b=URL.createObjectURL(M),v=u.length;v<p;++v)u[v]=f(b);for(var v=p;v<u.length;++v)u[v].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function x(p,_,M,b,v){for(var S=u[0],T=1;T<u.length;++T)u[T].pending<S.pending&&(S=u[T]);return new Promise(function(y,w){var C=new Uint8Array(M),P=++d;S.pending+=p,S.requests[P]={resolve:y,reject:w},S.object.postMessage({id:P,count:p,size:_,source:C,mode:b,filter:v},[C.buffer])})}function g(p){var _=p.data;self.ready.then(function(M){if(!_.id)return self.close();try{var b=new Uint8Array(_.count*_.size);l(M,M.exports[_.mode],b,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,_,M,b,v){l(r,r.exports.meshopt_decodeVertexBuffer,p,_,M,b,r.exports[c[v]])},decodeIndexBuffer:function(p,_,M,b){l(r,r.exports.meshopt_decodeIndexBuffer,p,_,M,b)},decodeIndexSequence:function(p,_,M,b){l(r,r.exports.meshopt_decodeIndexSequence,p,_,M,b)},decodeGltfBuffer:function(p,_,M,b,v,S){l(r,r.exports[h[v]],p,_,M,b,r.exports[c[S]])},decodeGltfBufferAsync:function(p,_,M,b,v){return u.length>0?x(p,_,M,h[b],c[v]):a.then(function(){var S=new Uint8Array(p*_);return l(r,r.exports[h[b]],S,p,_,M,r.exports[c[v]]),S})}}})();var Uo=new R;function li(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Uo.copy(e),Uo[n]=0,Uo.normalize();let c=.5*a/(a+o),h=1-Uo.angleTo(i)/l;return Math.sign(Uo[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Ql=class i extends yi{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new R,c=new R,h=new R(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,x=new R,g=.5/a;for(let p=0,_=0;p<u.length;p+=3,_+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/m)){case 0:x.set(1,0,0),f[_+0]=li(x,c,"z","y",r,n),f[_+1]=1-li(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[_+0]=1-li(x,c,"z","y",r,n),f[_+1]=1-li(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[_+0]=1-li(x,c,"x","z",r,e),f[_+1]=li(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[_+0]=1-li(x,c,"x","z",r,e),f[_+1]=1-li(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[_+0]=1-li(x,c,"x","y",r,e),f[_+1]=1-li(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[_+0]=li(x,c,"x","y",r,e),f[_+1]=1-li(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Ia=i=>{try{navigator.vibrate&&navigator.vibrate(i)}catch{}};function Pm(i){let e=i.querySelector("i"),t={x:0,y:0,active:!1},n=null,s=0,r=0,a=1,o=!1,l=!1,c=(u,d)=>{let f=Math.hypot(u,d),m=f>a?a/f:1;u*=m,d*=m,f=Math.min(f,a),e.style.transform=`translate(${u}px, ${d}px)`;let x=f/a,g=.12,p=x<g?0:(x-g)/(1-g),_=p*p*.35+p*.65;t.x=f?u/f*_:0,t.y=f?-d/f*_:0;let M=x>=g,b=x>.97;M&&!o&&Ia(8),b&&!l&&Ia(18),o=M,l=b};i.addEventListener("pointerdown",u=>{if(n!==null)return;u.preventDefault(),n=u.pointerId;try{i.setPointerCapture(n)}catch{}let d=i.getBoundingClientRect();s=d.left+d.width/2,r=d.top+d.height/2,a=d.width*.36,t.active=!0,i.classList.add("on"),c(u.clientX-s,u.clientY-r)}),i.addEventListener("pointermove",u=>{u.pointerId===n&&(u.preventDefault(),c(u.clientX-s,u.clientY-r))});let h=u=>{u.pointerId===n&&(n=null,t.active=!1,i.classList.remove("on"),e.style.transition="transform .15s ease-out",c(0,0),setTimeout(()=>{e.style.transition=""},160),o=l=!1)};return["pointerup","pointercancel","lostpointercapture"].forEach(u=>i.addEventListener(u,h)),t}var Lm={low:{pr:1,aa:!1,shadow:1024,shadowR:.8,grid:1.45,rocks:.45,reach:[380,90,55],scanMid:!1,devils:0},medium:{pr:1.25,aa:!1,shadow:1024,shadowR:1,grid:1.25,rocks:.55,reach:[480,110,60],scanMid:!1,devils:0},high:{pr:2,aa:!0,shadow:2048,shadowR:1,grid:1,rocks:1,reach:[900,210,110],scanMid:!0,devils:2},ultra:{pr:2,aa:!0,shadow:4096,shadowR:1.35,grid:.82,rocks:1.35,reach:[1400,300,150],scanMid:!0,devils:3}},lM=typeof document<"u"&&document.documentElement.classList.contains("touch");function Oo(){try{return localStorage.getItem("jt-detail")||"auto"}catch{return"auto"}}function Dm(i){try{localStorage.setItem("jt-detail",i)}catch{}}var Im=Oo(),eh=Lm[Im]?Im:lM?"medium":"ultra",Gs=Lm[eh];var ms=(()=>{try{return localStorage.getItem("dsa-game-units")==="us"}catch{return!1}})(),Ld=3.28084,hM=.621371;var Sr=(i,e)=>i.toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),th=ms?"mph":"km/h",nh=i=>ms?i*hM:i,ih=(i,e=0)=>`${Sr(nh(i),e)} ${th}`;var Er=(i,e=0)=>ms?`${Sr(i*Ld,e)} ft`:`${Sr(i,e)} m`,sh=i=>ms?i*Ld<1e3?`${Sr(i*Ld,0)} ft`:`${Sr(i/1609.344,i<16093?1:0)} mi`:i<1e3?`${Sr(i,0)} m`:`${Sr(i/1e3,i<1e4?1:0)} km`;var re=i=>document.getElementById(i),Ur=1.62,AT=document.documentElement.classList.contains("touch");function Yi(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var dM=(()=>{let i=Yi(7),e=new Float32Array(256*256);for(let t=0;t<e.length;t++)e[t]=i();return e})(),rh=(i,e)=>dM[(i%256+256)%256*256+(e%256+256)%256];function xh(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=rh(t,n),c=rh(t+1,n),h=rh(t,n+1),u=rh(t+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}var Tn=(i,e,t)=>{let n=0,s=.5,r=1;for(let a=0;a<t;a++)n+=s*xh(i*r,e*r),s*=.5,r*=2.03;return n},ot=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)},$s=4,Fm=.4,fM=1737400,Ue=600,yt=243,vt=-375,Nn=1.6,He=Math.round(2*Ue/Nn)+1,eg=(i,e,t)=>Math.abs(i-yt)<Ue-t&&Math.abs(e-vt)<Ue-t,bh=null;function tg(i,e){if(!bh)return 0;let t=i/250+127.5,n=e/250+127.5,s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=(u,d)=>bh[Math.max(0,Math.min(255,d))*256+Math.max(0,Math.min(255,u))]/4,c=(u,d,f,m,x)=>d+.5*x*(f-u+x*(2*u-5*d+4*f-m+x*(3*(d-f)+m-u))),h=u=>c(l(s-1,u),l(s,u),l(s+1,u),l(s+2,u),a);return c(h(r-1),h(r),h(r+1),h(r+2),o)}var ng=0;function Pr(i,e){let t=i*$s,n=e*$s;return(tg(t,n)-ng)*Fm-(t*t+n*n)/(2*fM)*Fm}var ei=[],Fn=[],Ri={x:0,z:0},rt={x:-158,z:62,R:55};{let i=Yi(1972),e=(a,o,l,c)=>ei.push({x:a,z:o,R:l,fresh:c,depth:l*(.12+.26*c),rim:l*(.025+.06*c)});[[48,-18,13,1],[-30,64,17,.95],[96,52,21,.9],[20,120,11,1],[-40,-75,24,.85]].forEach(a=>e(...a));let t=373,n=-375,s=470,r=(a,o)=>Math.abs(a-t)<s&&Math.abs(o-n)<s;for(let a=0;a<2e3;a++){let o=1.2/Math.sqrt(1-i()*.99859375),l=t+(i()*2-1)*(s-10),c=n+(i()*2-1)*(s-10);Math.hypot(l,c)<14||Math.hypot(l+12,c-4)<14||e(l,c,o,Math.pow(i(),2.2))}for(let a=0;a<1150;a++){let o=t+(i()*2-1)*(s-6),l=n+(i()*2-1)*(s-6);Math.hypot(o,l)<10||Fn.push({x:o,z:l,s:.12+Math.pow(i(),3)*.7,yaw:i()*6.28,k:i()})}{let a=Yi(2112);for(let o=0;o<1060;o++){let l=1.2/Math.sqrt(1-a()*.99859375),c=yt+(a()*2-1)*(Ue-10),h=vt+(a()*2-1)*(Ue-10),u=Math.pow(a(),2.2);r(c,h)||Math.hypot(c+12,h-4)<14||Math.hypot(c-rt.x,h-rt.z)<rt.R*1.3||e(c,h,l,u)}for(let o=0;o<600;o++){let l=yt+(a()*2-1)*(Ue-6),c=vt+(a()*2-1)*(Ue-6),h=.12+Math.pow(a(),3)*.7,u=a()*6.28,d=a();r(l,c)||Fn.push({x:l,z:c,s:h,yaw:u,k:d})}}for(let a of ei){if(a.fresh<.55||a.R<4)continue;let o=Math.round(a.R*a.fresh*2.2);for(let l=0;l<o;l++){let c=i()*6.2832,h=a.R*(.85+Math.pow(i(),1.7)*1.3),u=a.x+Math.cos(c)*h,d=a.z+Math.sin(c)*h;!eg(u,d,6)||Math.hypot(u,d)<10||Fn.push({x:u,z:d,s:.2+Math.pow(i(),2.2)*Math.min(1.6,a.R*.07),yaw:i()*6.28,k:i()})}}{let a=Yi(17),o=421.75+38,l=-259;e(o,l,50,.5),Ri.x=o,Ri.z=l;for(let c=0;c<170;c++){let h=a()*6.2832,u=50*(.86+Math.pow(a(),1.5)*1.1);Fn.push({x:o+Math.cos(h)*u,z:l+Math.sin(h)*u,s:.07+Math.pow(a(),4)*.95,yaw:a()*6.28,k:a()})}}for(let a=ei.length-1;a>=0;a--)Math.hypot(ei[a].x-rt.x,ei[a].z-rt.z)<rt.R*1.25+ei[a].R*.5&&ei.splice(a,1);{let a=Yi(74);ei.push({x:rt.x,z:rt.z,R:rt.R,fresh:.5,depth:14,rim:2.2});for(let c=0;c<70;c++){let h=a()*6.2832,u=rt.R*(.9+Math.pow(a(),1.5)*.8);Fn.push({x:rt.x+Math.cos(h)*u,z:rt.z+Math.sin(h)*u,s:.08+Math.pow(a(),4)*.8,yaw:a()*6.28,k:a()})}for(let c=0;c<90;c++){let h=a()*6.2832,u=rt.R*(Math.pow(a(),.7)*.6);Fn.push({x:rt.x+Math.cos(h)*u,z:rt.z+Math.sin(h)*u,s:.25+Math.pow(a(),2.5)*1.2*(1.2-u/rt.R),yaw:a()*6.28,k:a(),bury:.4})}let o=rt.x+Math.cos(2.27)*rt.R*1.13,l=rt.z+Math.sin(2.27)*rt.R*1.13;Fn.push({x:o,z:l,s:1.7,yaw:.6,k:.3,bury:.22});for(let c=0;c<8;c++){let h=a()*6.2832,u=2.5+a()*7;Fn.push({x:o+Math.cos(h)*u,z:l+Math.sin(h)*u,s:.15+Math.pow(a(),2)*.55,yaw:a()*6.28,k:a(),bury:.4})}}}var pM=[[2.4,1.05,.05,.035,1],[2.47,1,.02,.018,.55]];function ig(i,e){let t=i-rt.x,n=e-rt.z,s=Math.hypot(t,n)/rt.R;if(s<.75||s>1.35)return 0;let r=Math.atan2(n,t),a=0;for(let[o,l,c,h,u]of pM){let d=r-o;d-=6.2832*Math.round(d/6.2832),a=Math.max(a,u*Math.exp(-(d*d)/(2*c*c)-(s-l)*(s-l)/(2*h*h)))}return a<.02?0:ot(.12,.6,a*(.5+1*Tn(i/1.6+3,e/1.6-5,3)))}var sg=(i,e,t)=>(t[0]=i*(1+.62*e),t[1]=i*(1+.04*e),t[2]=i*(1-.5*e),t),Ys=16,jo=new Map;function mM(){ei.forEach(i=>{let e=i.R*2.2;for(let t=Math.floor((i.x-e)/Ys);t<=Math.floor((i.x+e)/Ys);t++)for(let n=Math.floor((i.z-e)/Ys);n<=Math.floor((i.z+e)/Ys);n++){let s=t+","+n;jo.has(s)||jo.set(s,[]),jo.get(s).push(i)}})}function rg(i,e){let t=0;for(let n of jo.get(Math.floor(i/Ys)+","+Math.floor(e/Ys))||[]){let s=i-n.x,r=e-n.z;if(s>n.R*2.2||s<-n.R*2.2||r>n.R*2.2||r<-n.R*2.2)continue;let a=Math.hypot(s,r)/n.R;t+=a<1?n.rim+(-n.depth-n.rim)*(1-a*a)*(1-a*a*.35):n.rim*Math.exp(-(((a-1)/.42)**2))}return t}var ys=new Float32Array(He*He),Ir=new Float32Array(He*He),Zt=new Float32Array(He*He);function ag(i,e){let t=0;for(let n of jo.get(Math.floor(i/Ys)+","+Math.floor(e/Ys))||[]){let s=Math.hypot(i-n.x,e-n.z)/n.R;s<2.1&&(t=Math.max(t,n.fresh*n.fresh*(s<1?.55:Math.exp(-(((s-1)/.5)**2)))))}return .9+.2*(Tn(i/35+7,e/35,3)-.5)+.45*t}function gM(i,e){let t=(i-yt+2500)/20,n=(e-vt+2500)/20,s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=(f,m)=>Pr(yt-2500+f*20,vt-2500+m*20),c=l(s,r),h=l(s,r+1),u=l(s+1,r);if(a+o<=1)return c+(u-c)*a+(h-c)*o-.15;let d=l(s+1,r+1);return d+(h-d)*(1-a)+(u-d)*(1-o)-.15}function xM(){mM();for(let h=0;h<He;h++)for(let u=0;u<He;u++){let d=yt-Ue+u*Nn,f=vt-Ue+h*Nn,m=ot(0,40,Ue-Math.max(Math.abs(d-yt),Math.abs(f-vt))),x=Pr(d,f),g=m<1?gM(d,f):x;Zt[h*He+u]=g+m*(x-g)+m*((Tn(d/60,f/60,4)-.5)*2.2+(Tn(d/9+40,f/9,3)-.5)*.35),ys[h*He+u]=Zt[h*He+u]+m*rg(d,f),Ir[h*He+u]=ag(d,f)}let i=(h,u)=>{for(let d=0;d<He;d++)for(let f=0;f<He;f++){let m=yt-Ue+f*Nn-Ye.x,x=vt-Ue+d*Nn-Ye.z,g=Math.hypot(m,x);g<h&&u(d*He+f,m,x,g)}},e=0,t=0,n=0,s=0,r=0,a=0,o=0,l=0,c=0;if(i(14,(h,u,d)=>{let f=ys[h];e++,t+=u,n+=d,s+=u*u,r+=d*d,a+=u*d,o+=f,l+=u*f,c+=d*f}),e>10){let h=[[e,t,n],[t,s,a],[n,a,r]],u=[o,l,c],d=_=>_[0][0]*(_[1][1]*_[2][2]-_[1][2]*_[2][1])-_[0][1]*(_[1][0]*_[2][2]-_[1][2]*_[2][0])+_[0][2]*(_[1][0]*_[2][1]-_[1][1]*_[2][0]),f=d(h),m=_=>h.map((M,b)=>M.map((v,S)=>S===_?u[b]:v)),[x,g,p]=[0,1,2].map(_=>d(m(_))/f);Ye.plane={a:x,b:g,c:p},i(22,(_,M,b,v)=>{let S=ot(22,6,v),T=x+g*M+p*b;ys[_]+=(T-ys[_])*S,Zt[_]+=(T-Zt[_])*S})}}var hh=new Map,_h=8;function bM(){for(let i=Fn.length-1;i>=0;i--)Math.hypot(Fn[i].x-Ye.x,Fn[i].z-Ye.z)<7&&Fn.splice(i,1);Fn.forEach((i,e)=>{let t=Math.floor(i.x/_h)+","+Math.floor(i.z/_h);hh.has(t)||hh.set(t,[]),hh.get(t).push(e)})}function _M(i,e){let t=0,n=Math.floor(i/_h),s=Math.floor(e/_h);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=hh.get(n+r+","+(s+a));if(o)for(let l of o){let c=Fn[l],h=((i-c.x)**2+(e-c.z)**2)/(1.6*c.s*c.s);if(h<1){let u=1-h;t=Math.max(t,c.s*Math.max(.5,.66-(c.bury??.62))*u*Math.sqrt(u))}}}return t}function Ai(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var Xi=3;function nf(i,e){let t=(xh(i/1.7,e/1.7)-.5)*.12+(xh(i/.55+71,e/.55)-.5)*.04,n=Math.floor(i/Xi),s=Math.floor(e/Xi);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=n+r,l=s+a;if(Ai(o,l)>.26)continue;let h=.25/Math.sqrt(1-Ai(o+91,l)*(1-(.25/1.5)**2)),u=(o+Ai(o,l+57))*Xi,d=(l+Ai(o+13,l+7))*Xi,f=Math.hypot(i-u,e-d)/h;if(f>1.8)continue;let m=h*(.05+.09*Ai(o+5,l+3)),x=m*.25;t+=f<1?x+(-m-x)*(1-f*f):x*Math.exp(-(((f-1)/.4)**2))}return t}var $t={cx:0,cz:0,half:48};function og(i,e){return ot($t.half,$t.half-6,Math.max(Math.abs(i-$t.cx),Math.abs(e-$t.cz)))}function jt(i,e){let t=Math.max(0,Math.min(He-1.001,(i-yt+Ue)/Nn)),n=Math.max(0,Math.min(He-1.001,(e-vt+Ue)/Nn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=ys[r*He+s],c=ys[r*He+s+1],h=ys[(r+1)*He+s],u=ys[(r+1)*He+s+1];return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}function cg(i,e){let t=Math.max(0,Math.min(He-1.001,(i-yt+Ue)/Nn)),n=Math.max(0,Math.min(He-1.001,(e-vt+Ue)/Nn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=r*He+s;return Zt[l]+(Zt[l+1]-Zt[l])*a+(Zt[l+He]-Zt[l])*o+(Zt[l]-Zt[l+1]-Zt[l+He]+Zt[l+He+1])*a*o+ot(0,40,Ue-Math.max(Math.abs(i-yt),Math.abs(e-vt)))*rg(i,e)-jt(i,e)}function Mt(i,e){let t=og(i,e),n=jt(i,e)+(t>0?(nf(i,e)+cg(i,e))*t:0)+_M(i,e);return wh.length?Math.max(n,PM(i,e)):n}var yM=new R;function Xd(i,e){return yM.set(Mt(i-.35,e)-Mt(i+.35,e),2*.35,Mt(i,e-.35)-Mt(i,e+.35)).normalize()}var ni=new Do({canvas:re("scene"),antialias:Gs.aa,powerPreference:"high-performance"});ni.setPixelRatio(Math.min(Gs.pr,devicePixelRatio));ni.outputColorSpace=Bt;ni.toneMapping=vo;ni.toneMappingExposure=1.25;ni.shadowMap.enabled=!0;ni.shadowMap.type=gr;var Dt=new ca;Dt.background=new Le(0);var Ze=new en(55,1,.1,8e4);function lg(){ni.setSize(innerWidth,innerHeight,!1),Ze.aspect=innerWidth/innerHeight,Ze.updateProjectionMatrix()}addEventListener("resize",lg);lg();var sf=new R(Math.sin(95*Math.PI/180)*Math.cos(16*Math.PI/180),Math.sin(16*Math.PI/180),-Math.cos(95*Math.PI/180)*Math.cos(16*Math.PI/180)).normalize(),ii=new ks(16775922,3.4);ii.castShadow=!0;ii.shadow.mapSize.set(Gs.shadow,Gs.shadow);{let i=30*Gs.shadowR;Object.assign(ii.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:1,far:200})}ii.shadow.bias=-6e-4;ii.shadow.normalBias=.04;Dt.add(ii,ii.target);Dt.add(new ga(0,7236196,.75));function vM(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=Yi(3);for(let a=0;a<256;a++)for(let o=0;o<256;o++){let l=(Tn(o/18,a/18,4)-.5)*40+(s()-.5)*26,c=Math.max(0,Math.min(255,200+l*.7)),h=(a*256+o)*4;n.data[h]=n.data[h+1]=n.data[h+2]=c,n.data[h+3]=255}t.putImageData(n,0,0);let r=new _i(e);return r.wrapS=r.wrapT=On,r.colorSpace=Bt,r.anisotropy=8,r}function MM(){let e=new Float32Array(65536),t=Yi(29);for(let o=0;o<900;o++){let l=t()*256,c=t()*256,h=1.5+Math.pow(t(),3)*9,u=(t()<.6?-1:.6)*h*.25,d=Math.ceil(h*1.6);for(let f=-d;f<=d;f++)for(let m=-d;m<=d;m++){let x=Math.hypot(m,f)/h;if(x>1.6)continue;let g=((Math.round(l)+m)%256+256)%256,p=((Math.round(c)+f)%256+256)%256;e[p*256+g]+=x<1?u*(1-x*x):-u*.2*Math.exp(-(((x-1)/.3)**2))}}for(let o=0;o<256;o++)for(let l=0;l<256;l++)e[o*256+l]+=(Tn(l/6,o/6,3)-.5)*1.4;let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256);for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=e[o*256+(l+1)%256]-e[o*256+(l+256-1)%256],h=e[(o+1)%256*256+l]-e[(o+256-1)%256*256+l],u=Math.hypot(c,h,2),d=(o*256+l)*4;r.data[d]=128-c/u*127,r.data[d+1]=128+h/u*127,r.data[d+2]=128+2/u*127,r.data[d+3]=255}s.putImageData(r,0,0);let a=new _i(n);return a.wrapS=a.wrapT=On,a.anisotropy=8,a}var vs=new on({color:11052189,roughness:1,metalness:0,map:vM(),normalMap:MM(),vertexColors:!0});vs.normalScale.set(.34,.34);var hg=i=>i.fragmentShader.replace("#include <normal_fragment_maps>",Ve.normal_fragment_maps.replace("mapN.xy *= normalScale;","mapN.xy *= normalScale * ( 1.0 - smoothstep( 5.0, 22.0, length( vViewPosition ) ) );")),ug={value:null},SM=i=>{i.uniforms.uRelief=ug,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWxz = (modelMatrix * vec4(transformed, 1.0)).xz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWxz; uniform sampler2D uRelief;`).replace("#include <normal_fragment_begin>",Ve.normal_fragment_begin.replace("vec3 normal = normalize( vNormal );",`vec3 normal = normalize( ( viewMatrix * vec4( texture2D( uRelief, ( vWxz - vec2( ${(yt-Ue).toFixed(1)}, ${(vt-Ue).toFixed(1)} ) ) / ${(2*Ue).toFixed(1)} ).xyz * 2.0 - 1.0, 0.0 ) ).xyz );`))};vs.onBeforeCompile=i=>{i.fragmentShader=hg(i)};vs.polygonOffset=!0;vs.polygonOffsetFactor=-1;vs.polygonOffsetUnits=-1;var dg={value:new ft(0,0,0,0)},fg=vs.clone();fg.onBeforeCompile=i=>{xg(i,gg,"#include <normal_fragment_maps>",`smoothstep( ${(Ue-80).toFixed(1)}, ${Ue.toFixed(1)}, max( abs( vWxz.x - ${yt.toFixed(1)} ), abs( vWxz.y - ${vt.toFixed(1)} ) ) )`),i.fragmentShader=hg(i),SM(i),i.uniforms.uPatch=dg,i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uPatch;`).replace("void main() {",`void main() {
  if (abs(vWxz.x - uPatch.x) < uPatch.z && abs(vWxz.y - uPatch.y) < uPatch.z) discard;`)};function EM(){let i=Gs.grid>1.3?1024:2048,e=2*Ue/i,t=yt-Ue,n=vt-Ue,s=new Float32Array(i*i),r=(c,h)=>ot(0,40,Ue-Math.max(Math.abs(c-yt),Math.abs(h-vt)));for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=t+(h+.5)*e,d=n+(c+.5)*e,f=Math.min(He-1.001,(h+.5)*e/Nn),m=Math.min(He-1.001,(c+.5)*e/Nn),x=Math.floor(f),g=Math.floor(m),p=f-x,_=m-g,M=g*He+x;s[c*i+h]=Zt[M]+(Zt[M+1]-Zt[M])*p+(Zt[M+He]-Zt[M])*_+(Zt[M]-Zt[M+1]-Zt[M+He]+Zt[M+He+1])*p*_+r(u,d)*(xh(u/1.7,d/1.7)-.5)*.12}let a=(c,h,u,d)=>{let f=Math.max(0,Math.floor((c-u-t)/e)),m=Math.min(i-1,Math.ceil((c+u-t)/e)),x=Math.max(0,Math.floor((h-u-n)/e)),g=Math.min(i-1,Math.ceil((h+u-n)/e));for(let p=x;p<=g;p++){let _=n+(p+.5)*e;for(let M=f;M<=m;M++){let b=t+(M+.5)*e,v=Math.hypot(b-c,_-h);v<u&&(s[p*i+M]+=r(b,_)*d(v))}}};for(let c of ei)a(c.x,c.z,c.R*2.2,h=>{let u=h/c.R;return u<1?c.rim+(-c.depth-c.rim)*(1-u*u)*(1-u*u*.35):c.rim*Math.exp(-(((u-1)/.42)**2))});for(let c=Math.floor(t/Xi);c<=Math.floor((t+2*Ue)/Xi);c++)for(let h=Math.floor(n/Xi);h<=Math.floor((n+2*Ue)/Xi);h++){if(Ai(c,h)>.26)continue;let u=.25/Math.sqrt(1-Ai(c+91,h)*(1-(.25/1.5)**2));if(u<.4)continue;let d=u*(.05+.09*Ai(c+5,h+3)),f=d*.25;a((c+Ai(c,h+57))*Xi,(h+Ai(c+13,h+7))*Xi,u*1.8,m=>{let x=m/u;return x<1?f+(-d-f)*(1-x*x):f*Math.exp(-(((x-1)/.4)**2))})}let o=new Uint8Array(i*i*4);for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=s[c*i+Math.min(i-1,h+1)]-s[c*i+Math.max(0,h-1)],d=s[Math.min(i-1,c+1)*i+h]-s[Math.max(0,c-1)*i+h],f=t+(h+.5)*e,m=n+(c+.5)*e,x=r(f,m);if(x<1){let _=e/10;u=u*x+(1-x)*(Pr(f+10,m)-Pr(f-10,m))*_,d=d*x+(1-x)*(Pr(f,m+10)-Pr(f,m-10))*_}let g=Math.hypot(u,2*e,d),p=(c*i+h)*4;o[p]=128-u/g*127,o[p+1]=128+2*e/g*127,o[p+2]=128-d/g*127,o[p+3]=255}let l=new Ds(o,i,i);l.generateMipmaps=!0,l.minFilter=Zn,l.magFilter=Yt,l.anisotropy=ni.capabilities.getMaxAnisotropy(),l.needsUpdate=!0,ug.value=l}var Xo=[0,0,0];function wM(){let i=new ls(2*Ue,2*Ue,He-1,He-1);i.rotateX(-Math.PI/2),i.translate(yt,0,vt);let e=i.attributes.position,t=i.attributes.uv,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let a=Math.round((e.getX(r)-yt+Ue)/Nn),o=Math.round((e.getZ(r)-vt+Ue)/Nn);e.setY(r,ys[o*He+a]),t.setXY(r,e.getX(r)/3.2,e.getZ(r)/3.2);let l=ig(e.getX(r),e.getZ(r));l>0?n.set(sg(Ir[o*He+a],l,Xo),r*3):n.fill(Ir[o*He+a],r*3,r*3+3)}i.setAttribute("color",new je(n,3)),i.computeVertexNormals();let s=new st(i,fg);s.receiveShadow=!0,Dt.add(s)}var bs=.4*Gs.grid,Ji=Math.round(2*$t.half/bs)+1,_s=new ls(2*$t.half,2*$t.half,Ji-1,Ji-1);_s.rotateX(-Math.PI/2);_s.setAttribute("color",new je(new Float32Array(Ji*Ji*3),3));var rf=new st(_s,vs);rf.receiveShadow=!0;rf.frustumCulled=!1;function TM(i,e){let t=Math.max(0,Math.min(He-1.001,(i-yt+Ue)/Nn)),n=Math.max(0,Math.min(He-1.001,(e-vt+Ue)/Nn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r;return Ir[r*He+s]*(1-a)*(1-o)+Ir[r*He+s+1]*a*(1-o)+Ir[(r+1)*He+s]*(1-a)*o+Ir[(r+1)*He+s+1]*a*o}function pg(i,e){$t.cx=Math.round(i/bs)*bs,$t.cz=Math.round(e/bs)*bs;let t=_s.attributes.position,n=_s.attributes.uv,s=_s.attributes.color;for(let r=0;r<Ji;r++)for(let a=0;a<Ji;a++){let o=r*Ji+a,l=$t.cx-$t.half+a*bs,c=$t.cz-$t.half+r*bs,h=og(l,c),u=h>0?nf(l,c)*h:0;t.setXYZ(o,l,jt(l,c)+u+(h>0?cg(l,c)*h:0),c),n.setXY(o,l/3.2,c/3.2);let d=TM(l,c)*(1+Math.max(-.08,Math.min(.08,u*.6))),f=ig(l,c);f>0?(sg(d,f,Xo),s.setXYZ(o,Xo[0],Xo[1],Xo[2])):s.setXYZ(o,d,d,d)}t.needsUpdate=n.needsUpdate=s.needsUpdate=!0,_s.computeVertexNormals(),_s.computeBoundingSphere(),dg.value.set($t.cx,$t.cz,$t.half-1,0)}function AM(){let e=new Float32Array(262144),t=Yi(8017);for(let l=0;l<1500;l++){let c=2/Math.sqrt(1-t()*.998109640831758),h=t()*512,u=t()*512,d=c*(.12+.18*t()),f=d*.3,m=Math.ceil(c*2);for(let x=-m;x<=m;x++)for(let g=-m;g<=m;g++){let p=Math.hypot(g,x)/c;if(p>2)continue;let _=((Math.round(u)+x)%512+512)%512*512+((Math.round(h)+g)%512+512)%512;e[_]+=p<1?f-(d+f)*(1-p*p):f*Math.exp(-(((p-1)/.45)**2))}}let n=0;for(let l of e)n+=l;n/=e.length;let s=document.createElement("canvas");s.width=s.height=512;let r=s.getContext("2d"),a=r.createImageData(512,512);for(let l=0;l<512;l++)for(let c=0;c<512;c++){let h=(e[l*512+(c+1)%512]-e[l*512+(c+512-1)%512])/2,u=(e[(l+1)%512*512+c]-e[(l+512-1)%512*512+c])/2,d=(l*512+c)*4;a.data[d]=128+Math.max(-127,Math.min(127,-h*160)),a.data[d+1]=128+Math.max(-127,Math.min(127,-u*160)),a.data[d+2]=128,a.data[d+3]=128+Math.max(-110,Math.min(110,(e[l*512+c]-n)*30))}r.putImageData(a,0,0);let o=new _i(s);return o.wrapS=o.wrapT=On,o.anisotropy=8,o.colorSpace=oi,o.premultiplyAlpha=!1,o}var mg={value:null},gg="smoothstep( 70.0, 260.0, length( vViewPosition ) )",xg=(i,e,t,n="1.0")=>{i.uniforms.uCrT=mg,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vCN = normalize(mat3(modelMatrix) * objectNormal);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uCrT; varying vec3 vCN;`).replace("#include <color_fragment>",`#include <color_fragment>
      float crW = ( ${e} ) * ( 0.4 + 0.6 * smoothstep( 0.8, 0.96, normalize( vCN ).y ) ); vec4 crA = texture2D( uCrT, vWxz / 120.0 ), crB = texture2D( uCrT, vWxz / 620.0 + 0.37 );
      diffuseColor.rgb *= 1.0 + crW * ( ( crA.a - 0.5 ) * 0.22 + ( crB.a - 0.5 ) * 0.22 );`).replace(t,`${t}
      { vec2 t = ( crA.rg * 2.0 - 1.0 ) * 0.45 + ( crB.rg * 2.0 - 1.0 ) * 0.38; vec3 wn = normalize( vCN ), dw = vec3( t.x, 0.0, t.y ) * crW * ( ${n} ); dw -= wn * dot( wn, dw );
        normal = normalize( normal + ( viewMatrix * vec4( dw, 0.0 ) ).xyz ); }`)};function Nm(i,e,t){let n=new ls(2*i,2*i,e,e);n.rotateX(-Math.PI/2),n.translate(yt,0,vt);let s=n.attributes.position,r=n.attributes.uv,a=new Float32Array(s.count*3);for(let c=0;c<s.count;c++){let h=s.getX(c),u=s.getZ(c);s.setY(c,Pr(h,u)-.15),r.setXY(c,h/3.2,u/3.2),a.fill(ag(h,u),c*3,c*3+3)}n.setAttribute("color",new je(a,3)),n.computeVertexNormals();let o=new on({color:vs.color,roughness:1,map:vs.map,vertexColors:!0});o.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWxz = (modelMatrix * vec4(transformed, 1.0)).xz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("void main() {",`void main() {
  if (max(abs(vWxz.x - ${yt.toFixed(1)}), abs(vWxz.y - ${vt.toFixed(1)})) < ${(t-1).toFixed(1)}) discard;`),xg(c,gg,"#include <normal_fragment_begin>")},o.customProgramCacheKey=()=>"ring"+t;let l=new st(n,o);l.receiveShadow=!0,Dt.add(l)}function RM(){Nm(2500,250,Ue),Nm(8e3,320,2500)}mg.value=AM();var xt={x:0,z:0,cyl:[]},CM=ei.reduce((i,e)=>Math.hypot(e.x-677.6,e.z+699.9)<Math.hypot(i.x-677.6,i.z+699.9)?e:i),wh=[];function bg(i,e,t){let{L:n,W:s,H:r}=i;if(e<-.6||e>n+1.2||Math.abs(t)>s/2+1.4)return-9;let a=s/2*(.86+.28*Tn(e*.45+7,3.3,3)),o=n+.8*(Tn(t*.6+2,8.1,3)-.5),l=r*Math.max(0,e)/n-.12+(.1*(Tn(e*.9+4,t*.9,3)-.5)+.035*(Tn(e*4+1,t*4-3,2)-.5))*Math.min(1,Math.max(0,e)),c=ot(a+.6,a-.9,Math.abs(t)),h=ot(o+.5,o-.45,e);return l*c*h-1.2*(1-c*h)}function PM(i,e){let t=-1e9;for(let n of wh){let s=i-n.x,r=e-n.z;if(Math.abs(s)>n.L||Math.abs(r)>n.L)continue;let a=s*n.c+r*n.s+n.L/2,o=-s*n.s+r*n.c,l=bg(n,a,o);l>-8&&(t=Math.max(t,jt(i,e)+l))}return t}function Um(i,e,t){wh.push(i);let n=70,s=36,r=-.5,a=i.L+1.1,o=-i.W/2-1.3,l=[],c=[];for(let d=0;d<=s;d++)for(let f=0;f<=n;f++){let m=r+(a-r)*f/n,x=o+-2*o*d/s,g=i.x+(m-i.L/2)*i.c-x*i.s,p=i.z+(m-i.L/2)*i.s+x*i.c,_=bg(i,m,x);l.push(g,jt(g,p)+(_<-8?-1.2:_),p)}for(let d=0;d<s;d++)for(let f=0;f<n;f++){let m=d*(n+1)+f;c.push(m,m+n+1,m+1,m+1,m+n+1,m+n+2)}let h=new Tt;h.setAttribute("position",new dt(l,3)),h.setIndex(c),h.computeVertexNormals(),h.attributes.normal.getY(0)<0&&(c.reverse(),h.setIndex(c),h.computeVertexNormals()),_g(h,t);let u=new st(h,e);u.castShadow=u.receiveShadow=!0,Dt.add(u)}function IM(){let e=new Float32Array(65536),t=Yi(76535),n=(h,u,d)=>{let f=Math.floor(h),m=Math.floor(u),x=h-f,g=u-m,p=x*x*(3-2*x),_=g*g*(3-2*g),M=(b,v)=>Ai((b%d+d)%d,(v%d+d)%d);return M(f,m)*(1-p)*(1-_)+M(f+1,m)*p*(1-_)+M(f,m+1)*(1-p)*_+M(f+1,m+1)*p*_};for(let h=0;h<256;h++)for(let u=0;u<256;u++){let d=0,f=.5;for(let m of[4,8,16,32,64])d+=f*n(u/256*m,h/256*m,m),f*=.55;e[h*256+u]=d*2.2}for(let h=0;h<420;h++){let u=t()*256,d=t()*256,f=1.2+Math.pow(t(),3)*7,m=Math.ceil(f*1.5);for(let x=-m;x<=m;x++)for(let g=-m;g<=m;g++){let p=Math.hypot(g,x)/f;if(p>1.5)continue;let _=((Math.round(d)+x)%256+256)%256*256+((Math.round(u)+g)%256+256)%256;e[_]-=p<1?.22*(1-p*p):-.03*(1.5-p)}}let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d"),a=r.createImageData(256,256),o=1e9,l=-1e9;for(let h of e)o=Math.min(o,h),l=Math.max(l,h);for(let h=0;h<256;h++)for(let u=0;u<256;u++){let d=e[h*256+(u+1)%256]-e[h*256+(u+256-1)%256],f=e[(h+1)%256*256+u]-e[(h+256-1)%256*256+u],m=.09,x=Math.hypot(d,f,m),g=(h*256+u)*4;a.data[g]=128-d/x*127,a.data[g+1]=128-f/x*127,a.data[g+2]=128+m/x*127,a.data[g+3]=255*(e[h*256+u]-o)/(l-o)}r.putImageData(a,0,0);let c=new _i(s);return c.wrapS=c.wrapT=On,c.anisotropy=8,c.colorSpace=oi,c.premultiplyAlpha=!1,c}function LM(){let i=new on({color:16777215,vertexColors:!0,roughness:1,metalness:0}),e=IM();return i.onBeforeCompile=t=>{t.uniforms.rockN={value:e},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRP; varying vec3 vRN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRP = (modelMatrix * vec4(transformed, 1.0)).xyz; vRN = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
      uniform sampler2D rockN; varying vec3 vRP; varying vec3 vRN;
      vec4 tri( vec3 p, vec3 w ) { return texture2D( rockN, p.zy ) * w.x + texture2D( rockN, p.xz ) * w.y + texture2D( rockN, p.xy ) * w.z; }
      vec3 triN( vec3 p, vec3 n, vec3 w ) {      // UDN blend of the three projections' normals onto the surface normal
        vec2 a = texture2D( rockN, p.zy ).xy * 2.0 - 1.0, b = texture2D( rockN, p.xz ).xy * 2.0 - 1.0, c = texture2D( rockN, p.xy ).xy * 2.0 - 1.0;
        return vec3( 0.0, a.y, a.x ) * w.x + vec3( b.x, 0.0, b.y ) * w.y + vec3( c.x, c.y, 0.0 ) * w.z; }`).replace("#include <color_fragment>",`#include <color_fragment>
      vec3 rw = pow( abs( normalize( vRN ) ), vec3( 4.0 ) ); rw /= rw.x + rw.y + rw.z;
      float pits = tri( vRP / 1.7, rw ).a * 0.6 + tri( vRP / 0.45, rw ).a * 0.4;
      diffuseColor.rgb *= 0.72 + 0.5 * pits;`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
      { vec3 wn = normalize( vRN ); vec3 w = pow( abs( wn ), vec3( 4.0 ) ); w /= w.x + w.y + w.z;
        vec3 d = triN( vRP / 1.7, wn, w ) * 0.9 + triN( vRP / 0.45, wn, w ) * 0.55 * ( 1.0 - smoothstep( 8.0, 30.0, length( vViewPosition ) ) );
        normal = normalize( ( viewMatrix * vec4( normalize( wn + d ), 0.0 ) ).xyz ); }`)},i}function _g(i,e){let t=i.attributes.position,n=i.attributes.normal,s=new Float32Array(t.count*3),r=new R;for(let a=0;a<t.count;a++){let o=t.getX(a),l=t.getY(a),c=t.getZ(a),h=.5+.13*(Tn(o*.35+e,c*.35+l*.3,3)-.5)+.08*(Tn(o*2.1-l,c*2.1+e,2)-.5);r.set(n.getX(a),n.getY(a),n.getZ(a)),h+=.07*ot(.45,.95,r.y)-.05*ot(-.1,-.7,r.y),h=Math.pow(Math.max(.05,h),2.2),s[a*3]=h,s[a*3+1]=h*.985,s[a*3+2]=h*.96}i.setAttribute("color",new je(s,3))}function DM(){let i=Lr[0],e=[9,4.4,5],t=.35,n=.7;xt.x=i.x-21,xt.z=i.z-3;let s=jt(xt.x,xt.z),r=6,a=new R(jt(xt.x-r,xt.z)-jt(xt.x+r,xt.z),2*r,jt(xt.x,xt.z-r)-jt(xt.x,xt.z+r)).normalize(),o=[[1,0,.12,-1],[.08,.1,1,1],[1,.05,-.25,4.4],[.25,.15,1,-1.4]].map(([v,S,T,y])=>{let w=new R(v,S,T),C=w.length();return{n:w.divideScalar(C),d:y/C}}),l=[[[[0,-1],[1,1]],[-1.1,0,.7]],[[[0,-1],[1,-1]],[-.8,-.1,-.6]],[[[0,1],[2,-1],[3,1]],[.2,0,.55]],[[[0,1],[2,-1],[3,-1]],[.15,-.05,-.65]]],c=xt.grp=new It;c.position.set(xt.x,s-n,xt.z),c.quaternion.setFromUnitVectors(new R(0,1,0),a).multiply(new ht().setFromAxisAngle(new R(0,1,0),t)),Dt.add(c);let h=LM(),u=new R,d=[],f=new fa(1,5);f.deleteAttribute("normal"),f.deleteAttribute("uv");let m=td(f);for(let[v,S]of l){let T=m.clone(),y=T.attributes.position;for(let B=0;B<y.count;B++){u.fromBufferAttribute(y,B).normalize();let X=Tn(u.x*1.6+u.y*2.3+11,u.z*1.6-u.y*1.3,3),te=Tn(u.x*7+3,u.z*7+u.y*6,3),q=Tn(u.x*19-5,u.z*19+u.y*17,2),J=Tn(u.x*48+9,u.z*48-u.y*41,2),Q=.84+.3*X+.12*te+.06*q+.025*J,Ee=1+.35*Math.max(0,u.y)*Math.exp(-((u.x-.15)**2+(u.z+.1)**2)*2.5),ve=gt=>Math.sign(gt)*Math.pow(Math.abs(gt),.55);u.set(ve(u.x)*e[0],ve(u.y)*e[1]*Ee,ve(u.z)*e[2]).multiplyScalar(Q),u.y<-1&&(u.y=-1+(u.y+1)*.3);for(let[gt,et]of v){let ct=o[gt],K=et*(ct.n.dot(u)-ct.d);K<0&&u.addScaledVector(ct.n,-K*et)}y.setXYZ(B,u.x+S[0],u.y+S[1],u.z+S[2])}T.computeVertexNormals(),_g(T,d.length*3.1);let w=new st(T,h);w.castShadow=w.receiveShadow=!0,c.add(w),T.computeBoundingBox();let C=T.boundingBox,P=C.max.x-C.min.x,F=C.max.z-C.min.z,D=P>F,I=Math.min(P,F),O=Math.max(1,Math.round(Math.max(P,F)/I));for(let B=0;B<O;B++){let X=(B+.5)/O,te=D?C.min.x+P*X:(C.min.x+C.max.x)/2,q=D?(C.min.z+C.max.z)/2:C.min.z+F*X,J=new R(te,1,q).applyQuaternion(c.quaternion);d.push({x:xt.x+J.x,z:xt.z+J.z,r:I/2*.85,top:s-n+C.max.y})}}xt.cyl=d;let x=Math.PI/2-.15;Um({x:xt.x+9,z:xt.z+13,c:Math.cos(x),s:Math.sin(x),L:8,W:4.2,H:.7},h,21.7);let g=CM,p=Math.atan2(.358,.934),_=Math.cos(p),M=Math.sin(p),b=g.R+1+5;Um({x:g.x-_*b,z:g.z-M*b,c:_,s:M,L:10,W:4.4,H:1.5},h,13.1)}function FM(){let i=[0,1,2].map(n=>{let s=new fa(1,1);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=td(s);let r=s.attributes.position,a=new R,o=Yi(31+n),l=[0,1,2].map(()=>[new R(o()-.5,(o()-.3)*.8,o()-.5).normalize(),.45+o()*.3]);for(let c=0;c<r.count;c++){a.fromBufferAttribute(r,c).multiplyScalar(.8+.4*o());for(let[h,u]of l){let d=a.dot(h)-u;d>0&&a.addScaledVector(h,-d)}r.setXYZ(c,a.x*[1,1.1,.9][n],a.y*[.85,.75,.95][n],a.z*[1,.85,1.1][n])}return s.computeVertexNormals(),s}),e=new on({color:7828333,roughness:.95,flatShading:!0}),t=new Ht;i.forEach((n,s)=>{let r=Fn.filter(l=>Math.floor(l.k*3)%3===s);if(!r.length)return;let a=new ur(n,e,r.length);r.forEach((l,c)=>{t.position.set(l.x,jt(l.x,l.z)+nf(l.x,l.z)-l.s*(l.bury??.62),l.z),t.rotation.set(0,l.yaw,0),t.scale.setScalar(l.s),t.updateMatrix(),a.setMatrixAt(c,t.matrix)});let o=new pa({depthPacking:Iu});o.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLy = position.y;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("void main() {",`void main() {
  if ( vLy < 0.56 ) discard;      // below the ground line (the rock sits 0.62 of its size down)`)},a.customDepthMaterial=o,a.castShadow=a.receiveShadow=!0,Dt.add(a)})}var Ko=700,wr=new R(Ko/12*(1.1**2+2.06**2),Ko/12*(3.1**2+2.06**2),Ko/12*(3.1**2+1.1**2)),af=()=>!0,mn=(()=>{try{return+localStorage.getItem("lrv-spd")||2}catch{return 2}})(),uh=.41,ko=.36,NM=4200,UM=620,OM=.05,kM=1.6,Om=6e4,zM=1500,BM=.1,HM=1600,jd=.62,yg=5;function vg(i){mn=i===3&&af()?3:i===2||i===3?2:1,jd=[.62,.85,1][mn-1],yg=[5,11.2,15][mn-1];try{localStorage.setItem("lrv-spd",String(mn))}catch{}}var Rn=[[1.15,.915,1],[1.15,-.915,1],[-1.15,.915,-1],[-1.15,-.915,-1]].map(([i,e,t])=>({at:new R(i,-.08,e),steer:t,comp:0,contact:!1,spin:0,off:0,hit:0})),Ye={on:!1,x:-12,z:4,y:0},Kd=[];for(let i of[-1.5,1.5])for(let e of[-1,1])for(let t of[-.3,.75])Kd.push(new R(i,t,e));var N={p:new R(0,0,0),v:new R,q:new ht,w:new R,steer:0};function Zi(i,e,t){let s=new R(jt(i-1.5,e)-jt(i+1.5,e),3,jt(i,e-1.5)-jt(i,e+1.5)).normalize();N.q.setFromUnitVectors(new R(0,1,0),s).multiply(new ht().setFromAxisAngle(new R(0,1,0),t)),N.p.set(i,Mt(i,e),e).addScaledVector(s,.8),N.v.set(0,0,0),N.w.set(0,0,0),N.steer=0,$o=!0,Rn.forEach(r=>{r.hx=r.hy=0})}var $o=!0,zo=new R,Tr=new R,Dr=new R,Ks=new R,_n=new R,Xt=new R,km=new R,gs=new R,La=new R,Dd=new R,mt=new R,Fa=new ht,Gi=new R,ah=new R,Ke={t:0,start:null,peak:0,last:null,best:0,grounded:!0,spin:0},Wt=Object.assign({t:0,d:0,h:0,v:0,v2:0,v3:0,lap:0,lap2:0,lap3:0},(()=>{try{return JSON.parse(localStorage.getItem("lrv-records"))||{}}catch{return{}}})());vg(mn);var ji=0,za=0,zm=.42;function Yd(i){zo.set(0,-Ur*Ko,0),Tr.set(0,0,0),_n.set(0,1,0).applyQuaternion(N.q),Xt.set(1,0,0).applyQuaternion(N.q),km.set(0,0,1).applyQuaternion(N.q);let e=N.v.dot(Xt),t=Math.hypot(N.v.x,N.v.z),n=Math.min(.42,Math.max(.1,1.5*Math.atan(1.15*1.3*jd*Ur/Math.max(.01,t*t))));N.steer+=Math.max(-zm*i,Math.min(zm*i,za*n-N.steer));let s=0;for(let h of Rn){let u=Ks.copy(h.at).applyQuaternion(N.q).add(N.p),d=(u.y-Mt(u.x,u.z))/Math.max(.3,_n.y),f=ko+uh-d;if(f<=0){h.contact=!1,h.comp=0,h.off+=i;continue}h.off>.12&&(h.hit=Math.max(h.hit,-N.v.y+.5)),h.off=0,h.contact=!0,s++;let m=(f-h.comp)/i;h.comp=f;let x=f>ko?m>=0?Om*(f-ko):Math.min(zM,Om*BM*(f-ko)):0,g=Math.min(9e3,NM*Math.min(f,ko)+(m<0?HM:UM)*m+x)*ot(.2,.55,_n.y);if(g<=0)continue;let p=Xd(u.x,u.z),_=Dr.copy(u).addScaledVector(_n,-(d-uh*.1)),M=_.sub(N.p);gs.copy(N.w).cross(M).add(N.v);let b=N.steer*h.steer;La.copy(Xt).multiplyScalar(Math.cos(b)).addScaledVector(km,Math.sin(b)),La.addScaledVector(p,-La.dot(p)).normalize(),Dd.copy(p).cross(La).normalize();let v=gs.dot(La),S=gs.dot(Dd),T=jd*g,y;ji>.02&&v>-.3?y=ji*[520,900,1300][mn-1]*Math.max(0,1-v/yg):ji<-.02&&v<.3?y=ji*300*Math.max(0,1+v/kM):Math.abs(ji)>.02?y=-Math.sign(v)*T:y=0,y-=Math.sign(v)*Math.min(Math.abs(v)*400,OM*g);let w=-S*1600;if($o){h.hx+=v*i,h.hy+=S*i,y=-(v*12e3+h.hx*3e4),w=-(S*12e3+h.hy*3e4);let P=Math.hypot(y,w);P>T&&(h.hx*=T/P,h.hy*=T/P)}let C=Math.hypot(y,w);C>T&&(y*=T/C,w*=T/C),mt.copy(p).multiplyScalar(g).addScaledVector(La,y).addScaledVector(Dd,w),zo.add(mt),Tr.add(ah.copy(M).cross(mt)),h.spin+=v/uh*i}{let h=0;for(let u of Rn)u.contact&&h++;if(h>=2&&!$o){let u=-e*Math.tan(N.steer)/1.15,d=N.w.dot(_n);Tr.addScaledVector(_n,Math.max(-700,Math.min(700,(u-d)*wr.y*.8*h/4*ot(.5,.8,_n.y))))}}if(_n.y<.6&&_n.y>-.5&&t<2.5&&Math.hypot(N.w.x,N.w.z)<1.2){let h=!1;for(let u of Kd){let d=Ks.copy(u).applyQuaternion(N.q).add(N.p);if(d.y<Mt(d.x,d.z)+.05){h=!0;break}}if(h){let u=mt.set(0,1,0).cross(_n),d=u.length();d>.001&&Tr.addScaledVector(u,2400/d*ot(.6,.4,_n.y))}}for(let h of Kd){let u=Ks.copy(h).applyQuaternion(N.q).add(N.p),d=Mt(u.x,u.z),f=d-u.y;if(f<=0)continue;s++;let m=Dr.copy(u).sub(N.p);gs.copy(N.w).cross(m).add(N.v);let x=Xd(u.x,u.z),g=gs.dot(x);h.y>0&&(ae.roof=Math.max(ae.roof,-g),ae.topDown=!0);let p=g<0?Math.min(14e3,6e4*f-3500*g):Math.max(0,Math.min(2500,9e3*f)-3500*g);mt.copy(gs).addScaledVector(x,-g);let _=mt.length();_>1e-4&&mt.multiplyScalar(-Math.min(.4*p,_*3e3)/_),mt.addScaledVector(x,p),zo.add(mt),Tr.add(ah.copy(m).cross(mt))}{Fa.copy(N.q).invert();let h=(u,d,f,m,x)=>{let g=Ks.set(u,d,f).sub(N.p).applyQuaternion(Fa),p=Dr.set(Math.max(-1.5,Math.min(1.5,g.x)),Math.max(-.3,Math.min(.75,g.y)),Math.max(-1,Math.min(1,g.z))).applyQuaternion(N.q).add(N.p),_=Gi.copy(p).sub(mt.set(u,x?p.y:d,f)),M=_.length();if(M>=m)return;M<1e-4&&(_.copy(N.p).sub(mt.set(u,N.p.y,f)),_.y=0,M=0),_.normalize();let b=p.sub(N.p);gs.copy(N.w).cross(b).add(N.v);let v=gs.dot(_),S=Math.max(0,9e4*(m-M)-3e3*v);mt.copy(gs).addScaledVector(_,-v);let T=mt.length();T>1e-4&&mt.multiplyScalar(-Math.min(.4*S,T*3e3)/T),mt.addScaledVector(_,S),zo.add(mt),Tr.add(ah.copy(b).cross(mt)),s++};if(Ye.on&&Math.hypot(N.p.x-Ye.x,N.p.z-Ye.z)<8){h(Ye.x,Math.max(Ye.y+.3,Math.min(Ye.y+7,N.p.y)),Ye.z,2.2,!0);for(let[u,d]of[[1,0],[-1,0],[0,1],[0,-1]]){h(Ye.x+u*4.1,Ye.y+.25,Ye.z+d*4.1,.5);for(let f=1;f<=4;f++){let m=f/5,x=4.1-1.9*m;h(Ye.x+u*x,Ye.y+.4+2.2*m,Ye.z+d*x,.2)}}}if(xt.cyl.length&&Math.hypot(N.p.x-xt.x,N.p.z-xt.z)<22)for(let u of xt.cyl)N.p.y<u.top+.6&&h(u.x,Math.min(u.top,N.p.y),u.z,u.r,!0)}N.v.addScaledVector(zo,i/Ko),Fa.copy(N.q).invert(),Gi.copy(N.w).applyQuaternion(Fa);let r=mt.copy(Tr).applyQuaternion(Fa),a=ah.set(wr.x*Gi.x,wr.y*Gi.y,wr.z*Gi.z),o=Ks.copy(Gi).cross(a);Gi.x+=(r.x-o.x)/wr.x*i,Gi.y+=(r.y-o.y)/wr.y*i,Gi.z+=(r.z-o.z)/wr.z*i,N.w.copy(Gi).applyQuaternion(N.q);{let h=Math.hypot(N.w.x,N.w.z);if(h>2.5){let u=Math.exp(-i*3*(h-2.5));N.w.x*=u,N.w.z*=u}}N.p.addScaledVector(N.v,i);let l=new ht(N.w.x*i*.5,N.w.y*i*.5,N.w.z*i*.5,0).multiply(N.q);N.q.x+=l.x,N.q.y+=l.y,N.q.z+=l.z,N.q.w+=l.w,N.q.normalize();let c=Ue-12;if(Math.abs(N.p.x-yt)>c&&(N.p.x=yt+Math.sign(N.p.x-yt)*c,N.v.x*(N.p.x-yt)>0&&(N.v.x=0)),Math.abs(N.p.z-vt)>c&&(N.p.z=vt+Math.sign(N.p.z-vt)*c,N.v.z*(N.p.z-vt)>0&&(N.v.z=0)),s===0)Ke.grounded&&Ke.t===0&&(Ke.start=N.p.clone(),Ke.peak=0,Ke.spin=0),Ke.t+=i,Ke.spin+=Math.hypot(N.w.x,N.w.z)*i,Ke.peak=Math.max(Ke.peak,N.p.y-.78-Mt(N.p.x,N.p.z)),Ke.grounded=!1;else if(!Ke.grounded){if(Ke.grounded=!0,Ke.t>.45){let h=Math.hypot(N.p.x-Ke.start.x,N.p.z-Ke.start.z);Ke.last={t:Ke.t,d:h,peak:Math.max(0,Ke.peak),spin:Ke.spin},Ke.t>Ke.best&&(Ke.best=Ke.t),nS(Ke.last)}Ke.t=0}return s}var VM=[["#7CC7F2",[[0,0],[129,-27],[330,-1400],[460,-2700],[805,-3003],[1294,-3036],[2200,-2950],[3012,-2599],[2500,-1900],[1735,-1228],[900,-600],[145,-39],[0,0]]]],Wa=[-12,4],Fr=[],Ft={x:Wa[0]+150/$s,z:Wa[1]-170/$s,ring:null,line:null},Lr=[["stop 6 \xB7 Tracy\u2019s Rock",805,-3003],["stop 8",3012,-2599],["stop 9 \xB7 Van Serg",1735,-1228]].map(([i,e,t])=>({n:i,x:Wa[0]+e/$s,z:Wa[1]+t/$s}));function GM(){let i=(c,h,u,d,f)=>.5*(2*h+(-c+u)*f+(2*c-5*h+4*u-d)*f*f+(-c+3*h-3*u+d)*f*f*f),e=[],t=[],n=new Le;for(let[c,h]of VM){let u=h.map(m=>[Wa[0]+m[0]/$s,Wa[1]+m[1]/$s]),d=m=>u[Math.max(0,Math.min(u.length-1,m))];n.set(c);let f=0;for(let m=0;m<u.length-1;m++){let x=Math.hypot(u[m+1][0]-u[m][0],u[m+1][1]-u[m][1]),g=Math.max(2,Math.ceil(x/.5));for(let p=0;p<g;p++){let _=p/g,M=i(d(m-1)[0],d(m)[0],d(m+1)[0],d(m+2)[0],_),b=i(d(m-1)[1],d(m)[1],d(m+1)[1],d(m+2)[1],_);(f+=x/g)<3||(f=0,eg(M,b,14)&&(e.push(M,jt(M,b)+.12,b),t.push(n.r,n.g,n.b),Fr.push(M,b)))}}}let s=new Tt;s.setAttribute("position",new dt(e,3)),s.setAttribute("color",new dt(t,3));let r=new Ln({transparent:!0,depthWrite:!1,uniforms:{map:{value:cf},px:{value:1},vh:{value:800},op:{value:0}},vertexShader:"attribute vec3 color; varying vec3 vC; uniform float px, vh; void main() { vC = color; vec4 mv = modelViewMatrix * vec4( position, 1.0 ); gl_Position = projectionMatrix * mv; gl_PointSize = max( 2.0 * px, 0.3 * projectionMatrix[1][1] * 0.5 * vh / -mv.z ); }",fragmentShader:"uniform sampler2D map; uniform float op; varying vec3 vC; void main() { float a = texture2D( map, gl_PointCoord ).a; if ( a < 0.02 ) discard; gl_FragColor = vec4( vC, a * 0.45 * op ); }"}),a=new cs(s,r),o=new ke;a.frustumCulled=!1,a.renderOrder=2,a.visible=!1,Dt.add(a),Ft.line=a;let l=new st(new fo(3.6,3.85,48),new Jn({color:8177650,transparent:!0,opacity:.4,side:Gn,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(Ft.x,jt(Ft.x,Ft.z)+.25,Ft.z),Dt.add(l),Ft.ring=l,a.onBeforeRender=c=>{r.uniforms.px.value=c.getPixelRatio(),r.uniforms.vh.value=c.getDrawingBufferSize(o).y}}var qa=1400,Xn=new Float32Array(qa*3),qi=new Float32Array(qa*3),dh=new Float32Array(qa),of=new Tt;of.setAttribute("position",new je(Xn,3));function WM(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.6)"),t.addColorStop(.6,"rgba(255,255,255,.15)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new _i(i)}var cf=WM(),Mg=new cs(of,new os({color:10130828,size:.032,map:cf,transparent:!0,opacity:.32,depthWrite:!1}));Mg.frustumCulled=!1;Dt.add(Mg);var Va=0,Qo=1600,Ei=new Float32Array(Qo*3),Ar=new Float32Array(Qo*3),Fd=new Float32Array(Qo),lf=new Tt;lf.setAttribute("position",new je(Ei,3));var Sg=new cs(lf,new os({color:12433325,size:.06,map:cf,transparent:!0,opacity:.3,depthWrite:!1}));Sg.frustumCulled=!1;Dt.add(Sg);var Nd=0;function qM(i){for(let e of Rn){if(!e.contact)continue;let t=Ks.copy(e.at).applyQuaternion(N.q).add(N.p),n=N.v.length(),s=Math.min(5,Math.floor(n*1.2*i*60*(.6+Math.random())));for(let r=0;r<s;r++){let a=Va;Va=(Va+1)%qa,Xn[a*3]=t.x+(Math.random()-.5)*.3,Xn[a*3+1]=Mt(t.x,t.z)+.05,Xn[a*3+2]=t.z+(Math.random()-.5)*.3;let o=.5+Math.random()*1.1*Math.min(1,n/3);qi[a*3]=-Xt.x*n*(.25+Math.random()*.5)+(Math.random()-.5)*.6,qi[a*3+1]=o,qi[a*3+2]=-Xt.z*n*(.25+Math.random()*.5)+(Math.random()-.5)*.6,dh[a]=1}if(e.hit>0){let r=Mt(t.x,t.z),a=Math.min(110,Math.round(40*e.hit)),o=Math.min(2.2,e.hit);for(let l=0;l<a;l++){let c=Nd,h=Math.random()*6.2832,u=(.4+Math.random()*1)*o;Nd=(Nd+1)%Qo,Ei[c*3]=t.x+Math.cos(h)*.25,Ei[c*3+1]=r+.04,Ei[c*3+2]=t.z+Math.sin(h)*.25,Ar[c*3]=Math.cos(h)*u+N.v.x*.4,Ar[c*3+1]=(.2+Math.random()*.6)*o,Ar[c*3+2]=Math.sin(h)*u+N.v.z*.4,Fd[c]=1}e.hit=0}}for(let e=0;e<qa;e++){if(dh[e]<=0){Xn[e*3+1]=-9999;continue}qi[e*3+1]-=Ur*i,Xn[e*3]+=qi[e*3]*i,Xn[e*3+1]+=qi[e*3+1]*i,Xn[e*3+2]+=qi[e*3+2]*i,Xn[e*3+1]<Mt(Xn[e*3],Xn[e*3+2])&&(dh[e]=0)}of.attributes.position.needsUpdate=!0;for(let e=0;e<Qo;e++){if(Fd[e]<=0){Ei[e*3+1]=-9999;continue}Ar[e*3+1]-=Ur*i,Ei[e*3]+=Ar[e*3]*i,Ei[e*3+1]+=Ar[e*3+1]*i,Ei[e*3+2]+=Ar[e*3+2]*i,Ei[e*3+1]<Mt(Ei[e*3],Ei[e*3+2])&&(Fd[e]=0)}lf.attributes.position.needsUpdate=!0}function XM(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"rgba(58,56,53,0)"),n.addColorStop(.16,"rgba(56,54,51,.22)"),n.addColorStop(.84,"rgba(56,54,51,.22)"),n.addColorStop(1,"rgba(58,56,53,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),t.lineCap="round",t.lineJoin="round";for(let[r,a]of[[64*.2,.04],[64*.14,.065],[64*.08,.1]]){t.strokeStyle=`rgba(40,38,36,${a})`,t.lineWidth=r;for(let o=-1;o<5;o++){let l=o*64/4;t.beginPath(),t.moveTo(64*.16,l),t.lineTo(64*.5,l+64*.11),t.lineTo(64*.84,l),t.stroke()}}let s=new _i(e);return s.wrapS=s.wrapT=On,s.colorSpace=Bt,s.anisotropy=4,s}var Ti=1400,jM=new on({map:XM(),transparent:!0,depthWrite:!1,roughness:1,vertexColors:!0,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),KM=Rn.map(()=>{let i=new Float32Array(Ti*2*3),e=new Float32Array(Ti*2*2),t=new Float32Array(Ti*2*4),n=new Uint32Array((Ti-1)*6);for(let a=0;a<Ti-1;a++){let o=a*2;n.set([o,o+2,o+1,o+2,o+3,o+1],a*6)}let s=new Tt;s.setAttribute("position",new je(i,3)),s.setAttribute("uv",new je(e,2)),s.setAttribute("color",new je(t,4)),s.setIndex(new je(n,1)),s.setDrawRange(0,0);let r=new st(s,jM);return r.frustumCulled=!1,r.receiveShadow=!0,r.renderOrder=1,Dt.add(r),{g:s,pos:i,uv:e,col:t,n:0,last:null,s:0,gap:!1}}),Ba=new R;function Ud(i,e){let t=(i-$t.cx+$t.half)/bs,n=(e-$t.cz+$t.half)/bs;if(!(t>=0&&n>=0&&t<Ji-1&&n<Ji-1))return jt(i,e);let s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=_s.attributes.position,c=(m,x)=>l.getY(x*Ji+m),h=c(s,r),u=c(s,r+1),d=c(s+1,r);if(a+o<=1)return h+(d-h)*a+(u-h)*o;let f=c(s+1,r+1);return f+(u-f)*(1-a)+(d-f)*(1-o)}function Od(i,e,t,n,s,r,a,o){if(i.n>=Ti){let l=Ti>>1,c=Ti-l;i.pos.copyWithin(0,c*6,Ti*6),i.uv.copyWithin(0,c*4,Ti*4),i.col.copyWithin(0,c*8,Ti*8),i.n=l}i.pos.set([e,t,n,s,r,a],i.n*6),i.uv.set([0,i.s,1,i.s],i.n*4),i.col.set([1,1,1,o,1,1,1,o],i.n*8),i.n++}function YM(){Rn.forEach((i,e)=>{let t=KM[e];if(!i.contact){t.n&&(t.gap=!0);return}let n=Ci[e],s=(n?Ba.set(n.c.x,i.at.y,n.c.z):Ba.copy(i.at)).applyQuaternion(N.q).add(N.p);if(t.last&&!t.gap&&Math.hypot(s.x-t.last.x,s.z-t.last.z)<.25)return;let r=n?n.hw:.115,a=t.last&&!t.gap?s.x-t.last.x:Xt.x,o=t.last&&!t.gap?s.z-t.last.z:Xt.z,l=Math.hypot(a,o)||1,c=-o/l*r,h=a/l*r,u=s.x+c,d=s.z+h,f=s.x-c,m=s.z-h,x=Ud(s.x,s.z),g=Math.max(Ud(u,d),x)+.02,p=Math.max(Ud(f,m),x)+.02;if(t.gap){let M=(t.n-1)*6,b=t.pos.slice(M,M+6);Od(t,b[0],b[1],b[2],b[3],b[4],b[5],0),Od(t,u,g,d,f,p,m,0),t.gap=!1}else t.last&&(t.s+=Math.hypot(s.x-t.last.x,s.z-t.last.z)/.5);Od(t,u,g,d,f,p,m,1),t.last={x:s.x,z:s.z};let _=t.g.attributes;_.position.needsUpdate=_.uv.needsUpdate=_.color.needsUpdate=!0,t.g.setDrawRange(0,Math.max(0,(t.n-1)*6))})}var Bo={az:240.7,el:45.1,diam:1.88,sub:[-110.9,-8.5],pole:[-.3895,.2953,-.8724]};function JM(){let e=Bo.el*Math.PI/180,t=Bo.az*Math.PI/180,n=6e4*Math.tan(Bo.diam/2*Math.PI/180),s=new on({roughness:.85,metalness:0,fog:!1,color:new Le(2.2,2.2,2.2)});new pr().load("../models/earth-bm.jpg",u=>{u.colorSpace=Bt,u.anisotropy=4,s.map=u,s.needsUpdate=!0}),s.onBeforeCompile=u=>{u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOp = normalize(position);`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vOp;
      float eH(vec3 p) { p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float eV(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
        return mix(mix(mix(eH(i), eH(i + vec3(1, 0, 0)), f.x), mix(eH(i + vec3(0, 1, 0)), eH(i + vec3(1, 1, 0)), f.x), f.y),
                   mix(mix(eH(i + vec3(0, 0, 1)), eH(i + vec3(1, 0, 1)), f.x), mix(eH(i + vec3(0, 1, 1)), eH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      float eF(vec3 p) { float a = 0., w = .5; for (int k = 0; k < 5; k++) { a += w * eV(p); p = p * 2.03 + 1.7; w *= .5; } return a; }`).replace("#include <map_fragment>",`#include <map_fragment>
        { vec3 q = vOp; float lat = abs(q.y);
          vec3 sw = q * 3. + vec3(eF(q * 2.5) , eF(q * 2.5 + 4.), eF(q * 2.5 + 8.)) * 1.6;      // swirled
          float belt = .56 - .08 * smoothstep(.35, .75, lat) - .06 * smoothstep(.12, .02, abs(lat - .08));      // more at mid-latitudes and along the equatorial belt
          float c = smoothstep(belt, belt + .14, eF(sw * 2.2)) * .8;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.93, .94, .96), clamp(c, 0., 1.)); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float rim = 1. - abs(dot(normalize(vNormal), vec3(0., 0., 1.))); totalEmissiveRadiance += vec3(.12, .25, .55) * pow(rim, 4.) * .35; }`)};let r=new st(new po(n,64,32),s),a=new R(Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e));r.position.copy(a).multiplyScalar(6e4);let o=(u,d)=>(u*=Math.PI/180,d*=Math.PI/180,new R(Math.cos(d)*Math.cos(u),Math.sin(d),-Math.cos(d)*Math.sin(u))),l=(u,d)=>{let f=u.clone().normalize(),m=d.clone().addScaledVector(f,-d.dot(f)).normalize();return new ze().makeBasis(f,m,new R().crossVectors(f,m))},c=l(o(...Bo.sub),new R(0,1,0)),h=l(a.clone().negate(),new R(...Bo.pole));return r.quaternion.setFromRotationMatrix(h.multiply(c.transpose())),r}var Eg=JM();Dt.add(Eg);var Ge=new It;Dt.add(Ge);var kd=new No().setMeshoptDecoder(Id);function Ho(i,e,t,n){i.onBeforeCompile=s=>{s.uniforms.uW={value:new ft(...n)},s.uniforms.uF={value:new ke(...t||[1,0])},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = (modelMatrix * vec4(transformed, 1.)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWp; uniform vec4 uW; uniform vec2 uF;
      float wH(vec3 p) { p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float wV(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
        return mix(mix(mix(wH(i), wH(i + vec3(1, 0, 0)), f.x), mix(wH(i + vec3(0, 1, 0)), wH(i + vec3(1, 1, 0)), f.x), f.y),
                   mix(mix(wH(i + vec3(0, 0, 1)), wH(i + vec3(1, 0, 1)), f.x), mix(wH(i + vec3(0, 1, 1)), wH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      float wF(vec3 p) { return wV(p) * .5 + wV(p * 2.7 + 3.1) * .3 + wV(p * 7.3 + 7.7) * .2; }
      vec3 fH(vec3 p) { p = fract(p * vec3(.1031, .1030, .0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx); }
      vec3 fCell(vec3 x) { vec3 i = floor(x), f = fract(x), id = vec3(.5); float best = 9.;
        for (int a = -1; a <= 1; a++) for (int b = -1; b <= 1; b++) for (int c = -1; c <= 1; c++) { vec3 g = vec3(float(a), float(b), float(c)), o = fH(i + g), d = g + o - f; float l = dot(d, d); if (l < best) { best = l; id = o; } }
        return id - .5; }`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1. + uW.x * (wF(vWp * uW.w) - .52) * 2.;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = clamp(roughnessFactor + uW.y * (wF(vWp * uW.w * 2.3 + 11.) - .5) * 2., .05, 1.);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        { vec3 q = vWp * uW.w * 4.; vec3 d = vec3(wV(q), wV(q + 17.3), wV(q + 31.7)) - .5; normal = normalize(normal + uW.z * (viewMatrix * vec4(d, 0.)).xyz); }
        if (uF.y > 0.) { vec3 q = vWp * uF.x; float fw = length(fwidth(q)); vec3 t = fCell(q) * smoothstep(1.1, .3, fw) + .6 * fCell(q * .37 + 5.) * smoothstep(1.1, .3, fw * .37); normal = normalize(normal + uF.y * (viewMatrix * vec4(t, 0.)).xyz); }`)},i.customProgramCacheKey=()=>"lm-"+e}function ZM(i){i.traverse(e=>{e.isMesh&&(e.material=[].concat(e.material).map(t=>{let n=t.clone(),s=n.name||"",r=(a,o,l)=>{n.color.set(a),n.metalness=o,n.roughness=l};return/blinn1SG|blinn10SG/.test(s)?(r(13600048,.15,.5),Ho(n,"amber",[11,.09],[.06,.1,.02,1.5])):/blinn9SG/.test(s)?(r(11033122,.15,.52),Ho(n,"amber2",[11,.09],[.06,.1,.02,1.5])):/initialShadingGr|blinn3SG|blinn7SG/.test(s)?(r(s.includes("blinn3")?6444365:9601135,.08,.55),Ho(n,"cabin",null,[.08,.12,.04,1.2]),n.flatShading=!0):/blinn4SG/.test(s)?(r(11774880,.12,.5),Ho(n,"metal",null,[.07,.12,.04,2])):/blinn6SG|blinn2SG/.test(s)&&(r(s.includes("blinn6")?1579034:3946036,.3,.55),Ho(n,"dark",null,[.06,.1,.03,2])),n}),e.material.length===1&&(e.material=e.material[0]))})}function Bm(i){i.traverse(e=>{e.isMesh&&(e.castShadow=e.receiveShadow=!0,[].concat(e.material).forEach(t=>{t.color&&t.color.lerp(new Le(10196364),.18)}))})}var Wi=Object.create(null);addEventListener("keydown",i=>{Wi[i.key.toLowerCase()]=!0,i.key.toLowerCase()==="r"&&Dg()});addEventListener("keyup",i=>{Wi[i.key.toLowerCase()]=!1});var Hm=Pm(re("stick")),At={yaw:0,pitch:.18,id:null,x:0,y:0,idle:9},ti=0,Vm=[0,3,1,2],$M=["Chase","Wide","Seat","Low"];function wg(i){ti=i,re("btn-pov").textContent=$M[ti],Qs=!1,Ge.visible=!0,i===2&&(At.yaw=0,At.pitch=.18)}re("btn-pov").addEventListener("click",()=>wg(Vm[(Vm.indexOf(ti)+1)%4]));addEventListener("pointerdown",i=>{i.target===ni.domElement&&(At.id=i.pointerId,At.x=i.clientX,At.y=i.clientY)});addEventListener("pointermove",i=>{i.pointerId===At.id&&(At.yaw-=(i.clientX-At.x)*.006,At.pitch=Math.max(ti===2?-.7:-.1,Math.min(1.1,At.pitch+(i.clientY-At.y)*.004)),At.x=i.clientX,At.y=i.clientY,At.idle=0)});addEventListener("pointerup",i=>{i.pointerId===At.id&&(At.id=null)});document.addEventListener("touchmove",i=>{i.target.closest(".sheet")||i.preventDefault()},{passive:!1});var fh=0,yh={x:-1e4,y:-1e4};addEventListener("pointermove",i=>{i.pointerType==="mouse"&&(yh.x=i.clientX,yh.y=i.clientY)});var Tg=i=>40+18*Math.sin(3*i+5)+12*Math.sin(5*i)+7*Math.sin(8*i+4);function Vo(i,e){let t=i-yt,n=e-vt;return Ue-Tg(Math.atan2(n,t))-Math.pow(t**6+n**6,1/6)}function QM(i){let e=Math.cos(i),t=Math.sin(i),n=(Ue-Tg(i))/Math.pow(e**6+t**6,1/6);return[yt+n*e,vt+n*t]}var Lt={on:!1,t:0,cool:0,th:0,st:0,wt:0,msg:"",turn:!1};function eS(i){let e=re("cine-cap");e.classList.remove("on"),e.textContent=i,e.offsetWidth,e.classList.add("on")}function zd(i){if(i===Lt.msg)return;Lt.msg=i;let e=re("edgewarn");i&&(e.textContent=i),e.classList.toggle("on",!!i)}function Jd(){Lt.on=!1,Lt.cool=4,document.body.classList.remove("home"),re("cine-cap").classList.remove("on")}function tS(i){let e=N.p.x,t=N.p.z,n=Vo(e,t),s=-(N.v.x*(Vo(e+1,t)-Vo(e-1,t))+N.v.z*(Vo(e,t+1)-Vo(e,t-1)))/2,r=Math.min(50,15+Math.max(0,s)**2/2.4),a=ae.on||Vt.on||Ae.on||cn.on;if(Lt.on&&a)return Jd(),!1;if(!Lt.on){Lt.cool-=i;let _=s>.3?(n-r)/s:99;if(a||n>160||_>5&&n>r+12||s<-.3)return zd(""),!1;if(n>r||Lt.cool>0)return(Lt.wt-=i)<=0&&(Lt.wt=.25,zd(`Mission Control \xB7 You\u2019re nearing the edge of the mission area. Turn back toward the LM${_<99?`, or Cernan takes the wheel in ${Math.max(1,Math.ceil(_))} s`:""}.`)),!1;zd(""),Lt.on=!0,Lt.t=0,Lt.turn=!1,document.body.classList.add("home"),eS("Cernan has the wheel \xB7 He brakes, turns you around and heads back inside the mission area.")}Lt.t+=i;let o=Math.hypot(Ye.x-e,Ye.z-t)>500,l=o?yt:Ye.x,c=o?vt:Ye.z,h=_=>_-2*Math.PI*Math.round(_/(2*Math.PI)),u=Math.atan2(-(c-t),l-e),d=Math.atan2(-Xt.z,Xt.x),f=Math.hypot(N.v.x,N.v.z),m=Math.atan2(-N.v.z,N.v.x),x=h(u-d),g=h(u-m);if(Lt.turn&&Math.abs(x)<.5&&(f<1||Math.abs(g)<.6)&&Lt.t>2||Lt.t>15)return Jd(),An("Back inside the mission area \xB7 the controls are yours"),!1;let p=Math.min(1,Lt.t/1.2);return f>4&&!Lt.turn?(Lt.st=0,Lt.th=-1):(Lt.turn=!0,Lt.st=p*Math.max(-1,Math.min(1,-x*2.5)),Lt.th=f<2.5?.5:.15),!0}function An(i){re("toast").textContent=i,re("toast").classList.add("on"),fh=3.6}function nS(i){Ia(i.t>1.2?40:20);let e=[];i.t>Wt.t&&(Wt.t=i.t,e.push("air time")),i.d>Wt.d&&(Wt.d=i.d,e.push("distance")),i.peak>Wt.h&&(Wt.h=i.peak,e.push("height"));try{localStorage.setItem("lrv-records",JSON.stringify(Wt))}catch{}let t=i.spin>5.4?" \xB7 full roll!":i.spin>2.6?" \xB7 half roll":"";An(`Airborne ${i.t.toFixed(1)} s \xB7 ${Er(i.d,1)} \xB7 ${Er(i.peak,1)} high${t}${e.length?" \xB7 new record":""}`),tc(),ES(i)}function tc(){re("best").textContent=Wt.t?Wt.t.toFixed(1)+" s":"\u2014";let i=Wt[mn>1?"v"+mn:"v"];re("topv").textContent=i?th+" \xB7 best "+nh(i).toFixed(1):th;let e=Wt[mn>1?"lap"+mn:"lap"];re("rec").textContent=[e?`Best loop ${Math.floor(e/60)}:${(e%60).toFixed(1).padStart(4,"0")}`:"",Wt.t?`${Wt.t.toFixed(1)} s in the air \xB7 ${Er(Wt.d,1)} \xB7 ${Er(Wt.h,1)} high`:""].filter(Boolean).join(" \xB7 ")}var Fe={on:!1,t:0,cp:0,peak:0,away:!1,warned:!1,save:null},Ga={t:0};function iS(){let i=Fe.save;re("btn-rejoin").classList.remove("on"),Ga.t=0,!(!i||ae.on)&&(Zi(i.x,i.z,i.yaw),Qs=!1,Object.assign(Fe,{on:!0,t:i.t,cp:i.cp,peak:i.peak,warned:!1,away:!0}),An(`Back on the route \xB7 the clock resumes at ${Yo(i.t)}`))}var Vt={on:!1,t:0,cap:"",go:!1,lines:null};function sS(){let i=mn>1?"lap"+mn:"lap";Vt.lines=[[0,6.5,"The time trial: Apollo 17\u2019s third drive, north to Tracy\u2019s Rock at stop 6, east to stop 8, and home past Van Serg crater. On the Moon it was "+(ms?"7.5 mi (12.1 km)":"12.1 km")+"; here the stops sit at a quarter of their true distances, so the loop is about "+(ms?"1.5 mi":"2.5 km")+"."],[6.5,12,"The fastest anyone has driven on the Moon is about "+(ms?"11 mph (18 km/h)":"18 km/h (11 mph)")+": Gene Cernan, in this rover, downhill on the way back from that drive. It is still the lunar speed record."+(Wt[i]?` Your best loop at this speed: ${Yo(Wt[i])}.`:"")],[12,13.6,"Timer started \xB7 Go!"]],Vt.on=!0,Vt.t=0,Vt.go=!1,gn=!1,document.body.classList.add("briefing")}function rS(i){let e=Vt.t+=i;e>=Vt.lines[2][0]&&!Vt.go&&(Vt.go=!0,gn=!0,Fe.on=!0,Fe.t=0,Fe.cp=0,Fe.peak=0,Fe.warned=!1),e>=Vt.lines[2][1]&&(Vt.on=!1,document.body.classList.remove("briefing"));let t="";if(Vt.on)for(let[n,s,r]of Vt.lines)e>=n&&e<s&&(t=r);if(t!==Vt.cap){Vt.cap=t;let n=re("cine-cap");n.classList.remove("on"),t&&(n.textContent=t,n.offsetWidth,n.classList.add("on"))}}function aS(){let i=1e9;for(let e=0;e<Fr.length;e+=2){let t=Fr[e]-N.p.x,n=Fr[e+1]-N.p.z,s=t*t+n*n;s<i&&(i=s)}return Math.sqrt(i)}function oS(i){let e=Ft.line.material.uniforms.op,t=Ft.live?Fe.on?1:.65:0;e.value+=Math.sign(t-e.value)*Math.min(Math.abs(t-e.value),i/1.5),Ft.line.visible=e.value>.001}var Yo=i=>`${Math.floor(i/60)}:${(i%60).toFixed(1).padStart(4,"0")}`;function Bd(i,e,t){Ba.set(i,jt(i,e)+2,e).project(Ze);let n=re("objmark"),s=(Ba.x*.5+.5)*innerWidth,r=(-Ba.y*.5+.5)*innerHeight;Ba.z<1?(n.style.display="block",n.style.transform=`translate(${Math.max(20,Math.min(innerWidth-170,s))}px,${Math.max(80,Math.min(innerHeight-60,r))}px)`,n.querySelector("b").textContent=t):n.style.display="none"}function cS(i,e,t){let n=Math.hypot(Ft.x-N.p.x,Ft.z-N.p.z);if(!Fe.on){if(n<4.5&&!Fe.away){Fe.away=!0,sS();return}n>8&&(Fe.away=!1),Bd(Ft.x,Ft.z,n>25?`Time trial \xB7 ${sh(n)}`:"Time trial"),re("clock").textContent="";return}Fe.t+=t,e&&i>Fe.peak&&(Fe.peak=i);let s=aS();if(s<8&&Ke.grounded&&_n.y>.85&&(Fe.saveT=(Fe.saveT||0)+t)>1&&(Fe.saveT=0,Fe.save={x:N.p.x,z:N.p.z,yaw:Math.atan2(-Xt.z,Xt.x),t:Fe.t,cp:Fe.cp,peak:Fe.peak}),s>35){Fe.on=!1,Fe.away=!1,re("clock").textContent="",An("Too far from the route \xB7 time trial over"),Fe.save&&(Ga.t=10,re("btn-rejoin").classList.add("on"));return}s>20&&!Fe.warned?(Fe.warned=!0,An("Back to the line, or the time trial ends")):s<12&&(Fe.warned=!1);let r=Lr[Fe.cp];if(r){let a=Math.hypot(r.x-N.p.x,r.z-N.p.z);a<14&&(Fe.cp++,An(`${r.n[0].toUpperCase()+r.n.slice(1)} \xB7 ${Yo(Fe.t)}`)),Bd(r.x,r.z,`${r.n} \xB7 ${sh(a)}`)}else if(Bd(Ft.x,Ft.z,`Finish \xB7 ${sh(n)}`),n<4.5){Fe.on=!1,Fe.away=!0;let a=!af(),o=mn>1?"lap"+mn:"lap",l=mn>1?"v"+mn:"v",c=!Wt[o]||Fe.t<Wt[o];c&&(Wt[o]=Fe.t),Fe.peak>Wt[l]+.05&&(Wt[l]=Fe.peak),An(`Loop ${Yo(Fe.t)}${c?" \xB7 best lap":""} \xB7 top speed ${ih(Fe.peak,1)}${mn===1&&Fe.peak>18?" \xB7 faster than Cernan\u2019s "+ih(18):""}${a?" \xB7 Triple speed unlocked: choose it on the start card":""}`);try{localStorage.setItem("lrv-records",JSON.stringify(Wt))}catch{}tc()}re("clock").textContent=Yo(Fe.t)}var ae={roof:0,on:!1,t:0,fade:0,safe:{x:0,z:0,yaw:0},safeT:0,pieces:[],joints:[],extra:[],brace:[]},Ag=[],Js=new Map;function lS(){Ge.updateMatrixWorld(!0);let i=Ge.matrixWorld.clone().invert(),e=new R,t=new Ne,n=new Map,s=r=>(Js.has(r)||Js.set(r,r.clone()),Js.get(r));Ge.traverse(r=>{if(!r.isMesh)return;let a=Ci.findIndex(f=>{for(let m=r;m;m=m.parent)if(m===f.spin)return!0;return!1}),o=i.clone().multiply(r.matrixWorld),l=r.geometry,c=l.attributes.position,h=l.index?l.index.array:null,u=(h?h.length:c.count)/3;t.getNormalMatrix(o);let d=new Float32Array(c.count*3);for(let f=0;f<c.count;f++)e.fromBufferAttribute(c,f).applyMatrix4(o),d[f*3]=e.x,d[f*3+1]=e.y,d[f*3+2]=e.z;for(let f=0;f<u;f++){let m=[0,1,2].map(p=>h?h[f*3+p]:f*3+p),x="w"+a;if(a<0){let p=(d[m[0]*3]+d[m[1]*3]+d[m[2]*3])/3,_=(d[m[0]*3+1]+d[m[1]*3+1]+d[m[2]*3+1])/3,M=(d[m[0]*3+2]+d[m[1]*3+2]+d[m[2]*3+2])/3;if(_>qe.KIT)x="k"+(p>-.1?1:0)+(M>0?1:0);else{let b=p<qe.HA?0:p>qe.HF?2:1;for(let v of Ci)Math.abs(M)>.42&&_>-.9&&Math.abs(p-v.c.x)<.56&&(b=v.c.x>0?2:0);x="c"+b}}n.has(x)||n.set(x,new Map);let g=n.get(x);g.has(r)||g.set(r,{f:d,M:o.clone(),n:t.clone(),list:[]}),g.get(r).list.push(...m)}});for(let[r,a]of n){let o=new Jt;for(let{f:u,list:d}of a.values())for(let f of d)o.expandByPoint(e.set(u[f*3],u[f*3+1],u[f*3+2]));let l=o.getCenter(new R),c=o.getSize(new R),h=[];for(let[u,{f:d,n:f,list:m}]of a){let x=u.geometry,g=new Tt,p=new Float32Array(m.length*3);m.forEach((_,M)=>{p[M*3]=d[_*3]-l.x,p[M*3+1]=d[_*3+1]-l.y,p[M*3+2]=d[_*3+2]-l.z}),g.setAttribute("position",new je(p,3));for(let _ of Object.keys(x.attributes)){if(_==="position")continue;let M=x.attributes[_],b=M.itemSize,v=new Float32Array(m.length*b);m.forEach((S,T)=>{if(_==="normal"){e.fromBufferAttribute(M,S).applyMatrix3(f).normalize(),v[T*3]=e.x,v[T*3+1]=e.y,v[T*3+2]=e.z;return}v[T*b]=M.getX(S),b>1&&(v[T*b+1]=M.getY(S)),b>2&&(v[T*b+2]=M.getZ(S)),b>3&&(v[T*b+3]=M.getW(S))}),g.setAttribute(_,new je(v,b))}h.push({geo:g,mat:s(u.material)})}Ag.push({c:l,sz:c,parts:h,key:r,kind:r[0]})}}function Gm(i,e,t){let n=[];if(t){let o=Math.max(e.x,e.y)/2,l=e.z/2;for(let c=0;c<10;c++){let h=c/10*Math.PI*2;for(let u of[-l,l])n.push(new R(Math.cos(h)*o,Math.sin(h)*o,u))}}else{i.updateMatrixWorld(!0);let o=i.matrixWorld.clone().invert();i.traverse(l=>{if(!l.userData.part)return;let c=new Jt;l.children.forEach(u=>{u.geometry.computeBoundingBox(),c.union(u.geometry.boundingBox)});let h=o.clone().multiply(l.matrixWorld);for(let u=0;u<8;u++)n.push(new R(u&1?c.max.x:c.min.x,u&2?c.max.y:c.min.y,u&4?c.max.z:c.min.z).applyMatrix4(h))})}i.updateMatrixWorld(!0);let s=0;for(let o of n){let l=o.clone().applyQuaternion(i.quaternion).add(i.position);s=Math.max(s,Mt(l.x,l.z)-l.y)}i.position.y+=s;let r=new Jt().setFromPoints(n),a=r.getSize(new R).max(new R(.1,.1,.1));return{pts:n,R:Math.max(...n.map(o=>o.length())),I:new R((a.y*a.y+a.z*a.z)/12,(a.x*a.x+a.z*a.z)/12,(a.x*a.x+a.y*a.y)/12),still:0,rest:!1}}function Rg(i=8){Ia([70,50,140,40,60]);let e=Math.max(0,Math.min(1,(i-3.5)/8));ae.on=!0,ae.t=0,ae.fade=0,Ge.visible=!1,ae.id=(ae.id||0)+1,ae.pieces.forEach(d=>Dt.remove(d.m)),ae.extra.forEach(d=>Dt.remove(d)),ae.pieces=[],ae.joints=[],ae.extra=[],ae.brace=[],Js.forEach(d=>{d.opacity=1,d.transparent=!1,d.needsUpdate=!0}),Ge.updateMatrixWorld(!0);let t=d=>{let f=new It;return f.userData.part=!0,d.parts.forEach(({geo:m,mat:x})=>{let g=new st(m,x);g.castShadow=!0,f.add(g)}),f},n=Math.random,s={};Ag.forEach(d=>{s[d.key]=d});let r=(d,f,m,x,g)=>{let p=f.clone().applyMatrix4(Ge.matrixWorld).sub(N.p),_=N.v.clone().add(N.w.clone().cross(p));_.addScaledVector(p.clone().setY(0).normalize(),m*(.5+n())).add(new R(0,m*(.3+n()*.7),0)),d.position.copy(f).applyMatrix4(Ge.matrixWorld),d.quaternion.copy(N.q),Dt.add(d),ae.pieces.push(Object.assign({m:d,v:_,w:N.w.clone().add(new R(n()-.5,n()-.5,n()-.5).multiplyScalar(4*m))},Gm(d,g,x)))},a=s.c1.c,o=new It;o.add(t(s.c1));let l=e>.85&&n()<(e-.85)*3?n()<.5?"c0":"c2":null,c={};for(let d of["c0","c2"]){let f=s[d];if(!f)continue;if(d===l){r(t(f),f.c,1.2*e,!1);continue}let m=d==="c0"?qe.HA:qe.HF,x=new It;x.position.set(m-a.x,qe.HY-a.y,-a.z);let g=t(f);g.position.set(f.c.x-m,f.c.y-qe.HY,f.c.z),x.add(g),o.add(x),x.rotation.z=(n()<.5?-1:1)*(.08+.4*e)*(.6+.4*n()),x.rotation.x=(n()-.5)*.25*e,c[d]=x}for(let d of["w0","w1","w2","w3","k00","k01","k10","k11"]){let f=s[d];if(!f)continue;let m=d[0]==="w";if(n()<(m?.1+.45*e:.45+.4*e)){r(t(f),f.c,(m?1:.6)*(.3+e),m,f.sz);continue}let g=m?c[f.c.x>0?"c2":"c0"]:null,p=t(f);g?p.position.copy(f.c).sub(a).sub(g.position):p.position.copy(f.c).sub(a),p.rotation.set((n()-.5)*(m?.7:1.1)*(.3+e),(n()-.5)*.3*(.3+e),(n()-.5)*(m?.3:1)*(.3+e)),m||p.scale.set(1,.5+.25*n(),1),(g||o).add(p)}o.position.copy(a).applyMatrix4(Ge.matrixWorld),o.quaternion.copy(N.q),Dt.add(o);let h=[];for(let d of ln){if(!d.visible)continue;d.updateMatrixWorld(!0);let f=d.userData.bones,m=n()<.5,x=new ht,g=new R,p=new R,_=new R((n()-.5)*1.2,.8+1.2*e+n()*.6,(n()-.5)*1.2).multiplyScalar(.15+.85*e),M=new R(n()-.5,n()-.5,n()-.5).multiplyScalar(1.5+2*e),b=[],v=[];for(let y=0;y<10;y++){if(y===7&&!m){b.push(b[0]),v.push(null);continue}let w=Ki[y],C=new rs;f[y].matrixWorld.decompose(g,x,p),C.position.copy(w.c).sub(Ki[y===7?0:y].c).applyQuaternion(x).add(g),C.quaternion.copy(x),Dt.add(C),b.push(C);let P=w.size.clone().multiplyScalar(.5).max(new R(.05,.05,.05)),F=[];for(let B=0;B<8;B++)F.push(new R(B&1?P.x:-P.x,B&2?P.y:-P.y,B&4?P.z:-P.z));let D=P.clone().multiplyScalar(2),I=C.position.clone().sub(N.p),O={m:C,v:N.v.clone().add(N.w.clone().cross(I)).add(_),w:N.w.clone().add(M),inv:y?1:.3,airDamp:.9,pts:F,R:P.length(),I:new R((D.y*D.y+D.z*D.z)/12,(D.x*D.x+D.z*D.z)/12,(D.x*D.x+D.y*D.y)/12),still:0,rest:!1};y===7&&(O.v.add(new R(n()-.5,n(),n()-.5)),O.w.multiplyScalar(1.5)),ae.pieces.push(O),v.push(O)}let S=0;for(let y of v)if(y)for(let w of y.pts){let C=w.clone().applyQuaternion(y.m.quaternion).add(y.m.position);S=Math.max(S,Mt(C.x,C.z)-C.y)}v.forEach(y=>{y&&(y.m.position.y+=S,y.m.updateMatrixWorld(!0))});let T=new Fs(b,jg(m));for(let[y,w,C]of d.userData.parts){let P=Js.get(w)||(Js.set(w,Object.assign(w.clone(),{onBeforeCompile:w.onBeforeCompile,customProgramCacheKey:w.customProgramCacheKey})),Js.get(w)),F=y;if(m){F=new Tt;for(let I in y.attributes)F.setAttribute(I,y.attributes[I]);F.setIndex(C)}let D=new Ls(F,P);D.castShadow=!0,D.frustumCulled=!1,D.bind(T,new ze),Dt.add(D),ae.extra.push(D)}for(let[y,w,C]of Oa)ae.joints.push({A:v[y],B:v[w],la:C.clone().sub(Ki[y].c),lb:C.clone().sub(Ki[w].c),lim:pS(y,w)});h.push([v[0],d.getWorldPosition(new R)]),ae.brace.push({T:v[0],arms:[-1,1].map(y=>{let[w,C]=ff(y);return[v[w],v[C],Cg(y),y]})})}let u=o.position.clone().sub(N.p);if(ae.pieces.push(Object.assign({m:o,main:!0,v:N.v.clone().add(N.w.clone().cross(u)),w:N.w.clone(),deck:[new R(-1.5-a.x,-.35-a.y,-1-a.z),new R(1.5-a.x,.1-a.y,1-a.z)]},Gm(o))),e<.55){let d=ae.pieces[ae.pieces.length-1];d.inv=.03;let f=d.m.quaternion.clone().invert();for(let[m,x]of h)ae.joints.push({A:d,B:m,la:x.clone().sub(d.m.position).applyQuaternion(f),lb:Ki[0].c.clone().negate(),belt:!0})}for(let d=0,f=Math.round(30+70*e);d<f;d++){let m=Va;Va=(Va+1)%qa,Xn[m*3]=N.p.x+(n()-.5)*2,Xn[m*3+1]=N.p.y,Xn[m*3+2]=N.p.z+(n()-.5)*2,qi[m*3]=N.v.x*.5+(n()-.5)*3*(.3+e),qi[m*3+1]=n()*2.5*(.3+e),qi[m*3+2]=N.v.z*.5+(n()-.5)*3*(.3+e),dh[m]=1}N.v.set(0,0,0),N.w.set(0,0,0),Ke.t=0,Ke.grounded=!0,An(e<.4?"Rollover \xB7 the rover is wrecked":"Crash \xB7 the rover breaks apart")}var hS=new R,uS=new R,dS=new R,fS=new R,Hd=new R,Cg=i=>new R(i*(_t.H.x-_t.S.x),_t.H.y-_t.S.y,_t.H.z-_t.S.z).normalize();function pS(i,e){return e===3||e===4?{k:new R(1,0,0),lo:-1.5,hi:.85,tol:.15}:e===1||e===2?{k:new R(1,0,0),lo:-.5,hi:1.92,tol:.6}:e===8||e===9?{k:Cg(e===8?-1:1).clone().cross(new R(0,0,1)).normalize(),lo:-.05,hi:2.5,tol:.35}:null}var wn=new ht,Nr=new R,Jo=new R,Cr=new R,Pg=new R,vh=new R,Zd=new R,Wm=new R,$d=new R;function Ig(i,e){let t=i.lim,n=i.A,s=i.B;wn.copy(n.m.quaternion).invert().multiply(s.m.quaternion),wn.w<0&&(wn.x*=-1,wn.y*=-1,wn.z*=-1,wn.w*=-1);let r=2*Math.acos(Math.min(1,wn.w)),a=Math.sqrt(Math.max(1e-12,1-wn.w*wn.w));Nr.set(wn.x,wn.y,wn.z).multiplyScalar(r/a);let o=Nr.dot(t.k);Jo.copy(Nr).addScaledVector(t.k,-o);let l=Jo.length();Cr.copy(t.k).multiplyScalar(o-Math.max(t.lo,Math.min(t.hi,o))),l>t.tol&&Cr.addScaledVector(Jo,1-t.tol/l);let c=Cr.length();if(c<1e-4)return;Cr.applyQuaternion(n.m.quaternion);let h=vh.copy(Cr).divideScalar(c),u=n.inv*3/(n.I.x+n.I.y+n.I.z),d=s.inv*3/(s.I.x+s.I.y+s.I.z),f=u/(u+d),m=d/(u+d);s.m.quaternion.premultiply(wn.setFromAxisAngle(h,-c*m)).normalize(),n.m.quaternion.premultiply(wn.setFromAxisAngle(h,c*f)).normalize();let x=Pg.copy(s.w).sub(n.w).dot(h);x>0&&(s.w.addScaledVector(h,-x*m),n.w.addScaledVector(h,x*f)),n.rest=s.rest=!1}function mS(i){if(!(ae.t>3))for(let e of ae.brace){let t=e.T;if(t.rest||ae.t>.6&&t.v.lengthSq()<.3&&t.w.lengthSq()<2)continue;let n=t.m.quaternion;Wm.set(0,0,1).applyQuaternion(n),$d.set(1,0,0).applyQuaternion(n);for(let[s,r,a,o]of e.arms){vh.set(0,-1,0).addScaledVector(Wm,.35).addScaledVector($d,.45*o).normalize();for(let l of[s,r])Zd.copy(a).applyQuaternion(l.m.quaternion).cross(vh),l.w.addScaledVector(Zd,260*i).addScaledVector(Pg.copy(l.w).sub(t.w),-9*i),l.rest=!1}}}var Go=new R,qn=new R,Wo=new R,gS=new R,qm=new ht;function xS(){let i=ae.pieces.find(n=>n.main);if(!i||!i.deck)return;let[e,t]=i.deck;qm.copy(i.m.quaternion).invert();for(let n of ae.pieces)if(!(n===i||n.rest))for(let s of n.pts){if(Go.copy(s).applyQuaternion(n.m.quaternion).add(n.m.position),qn.copy(Go).sub(i.m.position).applyQuaternion(qm),qn.x<=e.x||qn.x>=t.x||qn.y<=e.y||qn.y>=t.y||qn.z<=e.z||qn.z>=t.z)continue;let r=[qn.x-e.x,t.x-qn.x,qn.y-e.y,t.y-qn.y,qn.z-e.z,t.z-qn.z],a=0;for(let d=1;d<6;d++)r[d]<r[a]&&(a=d);Wo.set(a===0?-1:a===1?1:0,a===2?-1:a===3?1:0,a===4?-1:a===5?1:0).applyQuaternion(i.m.quaternion),n.m.position.addScaledVector(Wo,Math.min(r[a],.05));let o=qn.copy(Go).sub(n.m.position),l=gS.copy(n.w).cross(o).add(n.v),c=Go.sub(i.m.position),h=l.sub(Go.copy(i.w).cross(c).add(i.v)),u=h.dot(Wo);u<0&&(n.v.addScaledVector(Wo,-u*1.05),n.v.addScaledVector(h.addScaledVector(Wo,-u),-.3))}}function bS(i){mS(i);for(let e of ae.joints){e.lim&&Ig(e,i);let t=e.A,n=e.B,s=hS.copy(e.la).applyQuaternion(t.m.quaternion),r=uS.copy(e.lb).applyQuaternion(n.m.quaternion),a=dS.copy(n.m.position).add(r).sub(t.m.position).sub(s),o=fS.copy(n.w).cross(r).add(n.v).sub(Hd.copy(t.w).cross(s)).sub(t.v),l=a.multiplyScalar(-1600).addScaledVector(o,-32).multiplyScalar(i);l.lengthSq()>1e-7&&(t.rest=n.rest=!1),n.v.addScaledVector(l,n.inv),t.v.addScaledVector(l,-t.inv);let c=3/(n.I.x+n.I.y+n.I.z),h=3/(t.I.x+t.I.y+t.I.z);n.w.addScaledVector(Hd.copy(r).cross(l),n.inv*c*.5),t.w.addScaledVector(Hd.copy(s).cross(l),-t.inv*h*.5)}}var oh=new ht,_S=new R,yS=new R,Xm=new R,vS=new R,jm=new R;function Lg(i,e){if(i.rest)return;let t=i.m.quaternion,n=i.m.position,s=yS.set(0,-Ur,0),r=vS.set(0,0,0),a=Math.max(4,i.pts.length),o=9600/a,l=240/a,c=120/a,h=0;if(n.y-i.R<Mt(n.x,n.z)+.5)for(let m of i.pts){let x=jm.copy(m).applyQuaternion(t),g=x.x+n.x,p=x.y+n.y,_=x.z+n.z,M=Mt(g,_)-p;if(M<=0)continue;h++;let b=Xd(g,_),v=Xm.copy(i.w).cross(x).add(i.v),S=v.dot(b),T=Math.max(0,o*Math.min(M,.08)-l*S),y=v.addScaledVector(b,-S),w=y.length(),C=w>1e-5?Math.min(.8*T,w*c)/w:0,P=_S.copy(b).multiplyScalar(T).addScaledVector(y,-C);s.add(P),r.add(x.cross(P))}i.v.addScaledVector(s,e),oh.copy(t).invert();let u=r.applyQuaternion(oh),d=jm.copy(i.w).applyQuaternion(oh);d.x+=u.x/i.I.x*e,d.y+=u.y/i.I.y*e,d.z+=u.z/i.I.z*e,i.w.copy(d.applyQuaternion(t)),h?(i.w.multiplyScalar(Math.exp(-e*1.2)),i.v.multiplyScalar(Math.exp(-e*.4))):i.airDamp&&i.w.multiplyScalar(Math.exp(-e*i.airDamp)),n.addScaledVector(i.v,e);let f=i.w.length();f>1e-6&&t.premultiply(oh.setFromAxisAngle(Xm.copy(i.w).divideScalar(f),f*e)).normalize(),i.still=h&&i.v.length()<.06&&f<.08?i.still+e:0,i.still>.6&&(i.rest=!0)}function MS(i){if(ae.on?(ae.t+=i)>4.5&&(ae.on=!1,Ge.visible=!0,Zi(ae.safe.x,ae.safe.z,ae.safe.yaw),Qs=!1,An("A new rover \xB7 back where you last drove safely")):((ae.safeT+=i)>1&&_n.y>.85&&Ke.grounded&&(ae.safeT=0,ae.safe={x:N.p.x,z:N.p.z,yaw:Math.atan2(-Xt.z,Xt.x)}),(ae.roof>3.5||_n.y<-.2&&ae.topDown)&&Rg(Math.max(ae.roof,N.v.length())),ae.topDown=!1,ae.roof=0),ae.pieces.length&&(ae.fade+=i)>10){let t=Math.max(0,1-(ae.fade-10)/1.5);Js.forEach(n=>{n.transparent||(n.transparent=!0,n.needsUpdate=!0),n.opacity=t}),t===0&&(ae.pieces.forEach(n=>Dt.remove(n.m)),ae.extra.forEach(n=>Dt.remove(n)),ae.pieces=[],ae.joints=[],ae.extra=[],ae.brace=[])}let e=Math.min(12,Math.ceil(i*200));for(let t=0;t<e;t++){bS(i/e);for(let n of ae.pieces)Lg(n,i/e);xS();for(let n of ae.joints)n.lim&&Ig(n)}}var Vd=0;function Dg(){let i=Math.atan2(-Xt.z,Xt.x);Zi(N.p.x,N.p.z,i),An("Back on its wheels")}re("btn-recover").addEventListener("click",Dg);ms&&(document.querySelectorAll(".spd button").forEach(i=>{i.innerHTML=["Real","Double","Triple"][i.dataset.v-1]+"<small>"+ih(18*i.dataset.v)+"</small>"}),re("spec-rover").textContent="About 1,540 lb loaded with crew; 10 ft long; four wire-mesh wheels, each with its own motor; front and rear steering",re("fine-rec").textContent="11 mph",re("spec-top").textContent="11 mph, the record Gene Cernan set on Apollo 17 (it was built for about 8 mph on the level). Faster downhill, where gravity does the work");var hf=()=>document.querySelectorAll(".spd button").forEach(i=>i.classList.toggle("on",+i.dataset.v===mn));document.querySelectorAll(".spd button").forEach(i=>{i.dataset.v==="3"&&(i.hidden=!af()),i.addEventListener("click",()=>{Fe.on&&+i.dataset.v!==mn&&(Fe.on=!1,Fe.away=!1,re("clock").textContent="",An("Speed changed \xB7 time trial over")),vg(+i.dataset.v),tc(),hf()})});hf();re("btn-go").addEventListener("click",()=>{re("brief").classList.remove("on"),qe.ok&&Ye.on?PS():(gn=Ft.live=!0,ln.forEach(i=>{i.visible=!0}))});re("cine-skip").addEventListener("click",()=>{Ae.on?df():Vt.on&&Vt.t<Vt.lines[2][0]&&(Vt.t=Vt.lines[2][0])});var uf=["menu","settings"],Fg={was:!1},Ng=()=>uf.some(i=>re(i).classList.contains("on"));function Km(i){Ng()||(Fg.was=gn,gn=!1),re(i).classList.add("on")}function nc(i=Fg.was){uf.forEach(e=>re(e).classList.remove("on")),gn=i}function Ug(){Ae.on&&df(),Vt.on&&(Vt.on=!1,document.body.classList.remove("briefing"),re("cine-cap").classList.remove("on"),Vt.cap=""),ae.on&&(ae.on=!1,Ge.visible=!0),Lt.on&&Jd(),cn.on&&(cn.t=99,Zg(ln[1],.016)),Fe.on=!1,Fe.save=null,Ga.t=0,re("btn-rejoin").classList.remove("on"),re("clock").textContent="",ln.forEach(i=>{i.visible=!0}),Ft.live=!0,Qs=!1}{let i=(n,s)=>{let r=a=>{a.preventDefault(),a.stopPropagation(),s()};n.addEventListener("pointerup",r),n.addEventListener("click",r)},e=0,t=n=>()=>{let s=performance.now();s-e>400&&(e=s,n())};i(re("back"),t(()=>{re("brief").classList.contains("on")?location.href="../objects":Ng()?nc():Km("menu")})),i(re("btn-set"),t(()=>{Og(),uf.forEach(n=>re(n).classList.remove("on")),Km("settings")}))}re("m-resume").addEventListener("click",()=>nc());re("m-trial").addEventListener("click",()=>{Ug(),Fe.away=!1,Zi(Ft.x,Ft.z+22,Math.PI/2),nc(!0),re("brief").classList.remove("on"),An("Drive through the ring to start the clock")});re("m-lander").addEventListener("click",()=>{Ug(),Zi(0,0,Math.atan2(350,82)),nc(!0),re("brief").classList.remove("on"),An("Back beside the lander")});re("m-objects").addEventListener("click",()=>{location.href="../objects"});var ec=Oo();function Og(){hf(),ec=Oo(),document.querySelectorAll(".cam button").forEach(e=>e.classList.toggle("on",+e.dataset.c===ti)),document.querySelectorAll(".det button").forEach(e=>e.classList.toggle("on",e.dataset.q===ec)),re("set-apply").hidden=!0;let i=re("set-rec");i.armed=!1,i.textContent="Reset records",re("set-note").textContent=`Now drawing at ${eh[0].toUpperCase()+eh.slice(1)}. Lower detail runs smoother; higher looks sharper.`}document.querySelectorAll(".cam button").forEach(i=>i.addEventListener("click",()=>{wg(+i.dataset.c),Og()}));document.querySelectorAll(".det button").forEach(i=>i.addEventListener("click",()=>{ec=i.dataset.q,document.querySelectorAll(".det button").forEach(e=>e.classList.toggle("on",e===i)),re("set-apply").hidden=ec===Oo()}));re("set-apply").addEventListener("click",()=>{Dm(ec),location.reload()});re("set-done").addEventListener("click",()=>nc());re("set-rec").addEventListener("click",()=>{let i=re("set-rec");if(!i.armed){i.armed=!0,i.textContent="Tap again to erase";return}Object.keys(Wt).forEach(e=>{Wt[e]=0}),Ke.best=0;try{localStorage.removeItem("lrv-records")}catch{}tc(),i.armed=!1,i.textContent="Records erased"});var Zs=[],bt={on:!1,t:0,end:0,cam:new R,jump:null,offerT:0,save:null},Xa=0;function SS(){for(Zs.push([Xa,N.p.x,N.p.y,N.p.z,N.q.x,N.q.y,N.q.z,N.q.w,N.steer,...Rn.map(i=>i.spin)]);Zs.length&&Zs[0][0]<Xa-20;)Zs.shift()}function ES(i){if(!(i.t>=1.5||i.d>=12)||!Ke.start)return;let e=Ke.start,t=N.p,n=t.x-e.x,s=t.z-e.z,r=n*n+s*s||1,a=ei.find(o=>{if(o.R<1.5)return!1;let l=Math.max(0,Math.min(1,((o.x-e.x)*n+(o.z-e.z)*s)/r));return Math.hypot(e.x+n*l-o.x,e.z+s*l-o.z)<o.R*1.15});a&&(bt.jump={t0:Xa-i.t,t1:Xa,S:e.clone(),E:t.clone(),c:a,a:i},bt.offerT=6,re("btn-replay").classList.add("on"))}function wS(){let i=bt.jump;if(!i||bt.on||ae.on)return;re("btn-replay").classList.remove("on"),bt.offerT=0,bt.save={run:gn,steer:N.steer,spin:Rn.map(d=>d.spin)},bt.fov=Ze.fov,bt.on=!0,bt.t=i.t0-1.2,bt.end=Math.min(Xa,i.t1+1.8),gn=!1,document.body.classList.add("replay");let e=(i.S.x+i.E.x)/2,t=(i.S.z+i.E.z)/2,n=Math.max(1,Math.hypot(i.E.x-i.S.x,i.E.z-i.S.z)),s=(i.E.x-i.S.x)/n,r=(i.E.z-i.S.z)/n,a=-r,o=s;(e-i.c.x)*a+(t-i.c.z)*o<0&&(a=-a,o=-o);let l=Math.max(9,Math.min(30,n*.7+6)),c=e+a*l-s*n*.2,h=t+o*l-r*n*.2;bt.cam.set(c,Mt(c,h)+1.3,h);let u=re("cine-cap");u.textContent=`Replay \xB7 ${i.a.t.toFixed(1)} s in the air \xB7 ${Er(i.a.d,1)} \xB7 ${Er(i.a.peak,1)} high`,u.offsetWidth,u.classList.add("on")}function kg(){bt.on&&(bt.on=!1,document.body.classList.remove("replay"),Ze.fov=bt.fov,Ze.updateProjectionMatrix(),re("cine-cap").classList.remove("on"),N.steer=bt.save.steer,Rn.forEach((i,e)=>{i.spin=bt.save.spin[e]}),gn=bt.save.run,Qs=!1)}function TS(i){if(bt.t+=i*.55,bt.t>=bt.end)return kg(),!1;let e=Zs.findIndex(r=>r[0]>bt.t);e<1&&(e=e<0?Zs.length-1:1);let t=Zs[e-1],n=Zs[e],s=Math.max(0,Math.min(1,(bt.t-t[0])/Math.max(1e-6,n[0]-t[0])));return Ge.position.set(t[1]+(n[1]-t[1])*s,t[2]+(n[2]-t[2])*s,t[3]+(n[3]-t[3])*s),Ge.quaternion.set(t[4],t[5],t[6],t[7]).slerp(Fa.set(n[4],n[5],n[6],n[7]),s),N.steer=t[8]+(n[8]-t[8])*s,Rn.forEach((r,a)=>{r.spin=t[9+a]+(n[9+a]-t[9+a])*s}),qg(),Ze.position.copy(bt.cam),Ze.lookAt(mt.copy(Ge.position).add(Dr.set(0,.3,0))),Ze.fov=Math.max(14,Math.min(bt.fov,2*Math.atan(7/Ze.position.distanceTo(Ge.position))*180/Math.PI)),Ze.updateProjectionMatrix(),ii.position.copy(Ge.position).addScaledVector(sf,120),ii.target.position.copy(Ge.position),!0}re("btn-replay").addEventListener("click",wS);re("btn-rejoin").addEventListener("click",iS);re("cine-skip").addEventListener("click",()=>{bt.on&&kg()});var gn=!1,Qd=performance.now(),Na=new R,Ua=new R,Qs=!1;function ph(i){let e=Math.min(.05,(i-Qd)/1e3);if(Qd=i,Vt.on&&rS(e),gn){let s=(Wi.w||Wi.arrowup?1:0)-(Wi.s||Wi.arrowdown?1:0),r=(Wi.a||Wi.arrowleft?1:0)-(Wi.d||Wi.arrowright?1:0);ji=s||Hm.y,za=-(r||-Hm.x),tS(e)&&(ji=Lt.th,za=Lt.st),cn.on&&(ji=0,za=0,N.v.multiplyScalar(Math.exp(-e*3))),(Math.abs(ji)>.02||Math.abs(za)>.02)&&($o=!1);let a=Math.min(12,Math.ceil(e/(1/240))),o=e/a;if(!ae.on)for(let l=0;l<a;l++)Yd(o);_n.set(0,1,0).applyQuaternion(N.q),Xt.set(1,0,0).applyQuaternion(N.q),MS(e),qM(e),YM(),Math.max(Math.abs(N.p.x-$t.cx),Math.abs(N.p.z-$t.cz))>14&&pg(N.p.x,N.p.z),Vd=_n.y<.35?Vd+e:0,re("btn-recover").classList.toggle("on",Vd>1.2),Xa+=e,ae.on||SS(),(bt.offerT>0&&(bt.offerT-=e)<=0||ae.on)&&(bt.offerT=0,re("btn-replay").classList.remove("on")),Ga.t>0&&((Ga.t-=e)<=0||Fe.on)&&(Ga.t=0,re("btn-rejoin").classList.remove("on"))}if(bt.on&&TS(e)){ni.render(Dt,Ze),requestAnimationFrame(ph);return}if(Ge.position.copy(N.p),Ge.quaternion.copy(N.q),qg(),n1(e),Ae.on){LS(e),ni.render(Dt,Ze),requestAnimationFrame(ph);return}At.idle+=e,At.idle>(ti===2?4:2.5)&&(At.yaw*=Math.exp(-e*1.5),At.pitch+=(.18-At.pitch)*Math.min(1,e*1.5)),_n.set(0,1,0).applyQuaternion(N.q),Xt.set(1,0,0).applyQuaternion(N.q);let t=ae.on&&ae.pieces.find(s=>s.main);if(ln[0]&&!Ae.on&&Ft.live&&(ln[0].visible=ti!==2),t){if(ae.camFor!==ae.id){ae.camFor=ae.id;let c;do c=Math.floor(Math.random()*3);while(c===ae.cam);ae.cam=c,ae.side=Math.random()<.5?1:-1}let s=ot(0,2.2,ae.t),r=Math.atan2(-Xt.z,Xt.x)+Math.PI,a=t.m.position,o=r+ae.side*Math.PI/2,l=ae.cam===0?mt.set(a.x+Math.cos(o)*(9+3*s),a.y+.45,a.z-Math.sin(o)*(9+3*s)):ae.cam===1?mt.set(a.x+Math.cos(r+.5*ae.side)*(14+4*s),a.y+.9+.6*s,a.z-Math.sin(r+.5*ae.side)*(14+4*s)):mt.set(a.x+Math.cos(r)*(8-s),a.y+2.5+18*s,a.z-Math.sin(r)*(8-s));l.y=Math.max(l.y,Mt(l.x,l.z)+(ae.cam===2?1.5:.35)),Na.lerp(l,1-Math.exp(-e*3)),Ua.lerp(a,1-Math.exp(-e*6)),Ze.position.copy(Na),Ze.lookAt(Ua)}else if(ti===2){Ze.position.copy(Ks.set(-.62,.95,-.32).applyQuaternion(N.q).add(N.p));let s=Math.max(-2.3,Math.min(2.3,At.yaw)),r=At.pitch-.18-.14;Dr.set(Math.cos(s)*Math.cos(r),Math.sin(r),-Math.sin(s)*Math.cos(r)).applyQuaternion(N.q),Ze.up.copy(_n),Ze.lookAt(mt.copy(Ze.position).add(Dr)),Ze.up.set(0,1,0)}else{let s=ti===3,r=Math.atan2(-Xt.z,Xt.x),a=r+Math.PI+At.yaw,o=ti===1?16:s?12:7.5,l=ti===1?.35:s?-.2:0,c=mt.set(N.p.x+Math.cos(a)*Math.cos(At.pitch+l)*o,N.p.y+(s?.2:1.6)+Math.sin(At.pitch+l)*o,N.p.z-Math.sin(a)*Math.cos(At.pitch+l)*o);c.y=Math.max(c.y,Mt(c.x,c.z)+(s?.45:1.2)),Qs||(Na.copy(c),Ua.copy(N.p),Qs=!0),Na.lerp(c,1-Math.exp(-e*4)),Ua.lerp(Ks.copy(N.p).add(Dr.set(0,.6,0)),1-Math.exp(-e*8)),Ze.position.copy(Na),Ze.lookAt(Ua)}window.__lrv&&window.__lrv.cam&&Ze.position.copy(window.__lrv.cam),window.__lrv&&window.__lrv.look&&Ze.lookAt(window.__lrv.look),ii.position.copy(N.p).addScaledVector(sf,120),ii.target.position.copy(N.p);let n=Math.abs(N.v.dot(Xt))*3.6;re("speed").textContent=nh(n).toFixed(1),gn&&cS(n,Ke.grounded&&Ke.t===0,e),oS(e),re("air").textContent=Ke.t>.15?`Airborne ${Ke.t.toFixed(1)} s`:"",fh>0&&(fh-=e,fh<=0&&re("toast").classList.remove("on")),zS(),gn&&(OS(e),s1(e)),ni.render(Dt,Ze),requestAnimationFrame(ph)}var Ci=[];function AS(){Ge.updateMatrixWorld(!0);let i=Ge.matrixWorld.clone().invert(),e=[],t=new R;Ge.traverse(l=>{l.isMesh&&e.push(l)});let n=e.map(l=>{let c=i.clone().multiply(l.matrixWorld),h=l.geometry.attributes.position,u=new Float32Array(h.count*3);for(let d=0;d<h.count;d++)t.fromBufferAttribute(h,d).applyMatrix4(c),u[d*3]=t.x,u[d*3+1]=t.y,u[d*3+2]=t.z;return{m:l,M:c,f:u}}),s=[0,1,2,3].map(()=>({x0:1e9,x1:-1e9,z0:1e9,z1:-1e9,y0:1e9,n:0}));for(let{f:l}of n)for(let c=0;c<l.length;c+=3){let h=l[c],u=l[c+1],d=l[c+2];if(u>-.45||Math.abs(h)<.6||Math.abs(d)<.45)continue;let f=s[(h>0?0:2)+(d>0?0:1)];f.x0=Math.min(f.x0,h),f.x1=Math.max(f.x1,h),f.z0=Math.min(f.z0,d),f.z1=Math.max(f.z1,d),f.y0=Math.min(f.y0,u),f.n++}if(s.some(l=>l.n<100))return;let r=s.map(l=>{let c=(l.x0+l.x1)/2,h=(l.z0+l.z1)/2,u=new Float32Array(21).fill(1e9),d=new Float32Array(21).fill(-1e9),f=[];for(let{f:P}of n)for(let F=0;F<P.length;F+=3){let D=P[F],I=P[F+1],O=P[F+2],B=Math.floor((I-l.y0)*100)-4;Math.abs(O-h)>(l.z1-l.z0)/2+.05||Math.abs(D-c)>.5||(B>=0&&B<21&&(u[B]=Math.min(u[B],D),d[B]=Math.max(d[B],D)),I<l.y0+.12&&f.push(O))}let m=0,x=0,g=0,p=0,_=0,M=0;u.forEach((P,F)=>{if(d[F]<P)return;let D=l.y0+(F+4.5)/100,I=(d[F]-P)/2,O=I*I+D*D;m++,x+=(d[F]+P)/2,g+=D,p+=O,_+=D*D,M+=D*O});let b=(m*M-g*p)/(m*_-g*g),v=x/m,S=b/2,T=Math.sqrt((p-b*g)/m+S*S);f.sort((P,F)=>P-F);let y=f[Math.floor(f.length*.01)]-.015,w=f[Math.floor(f.length*.99)]+.015,C=h>0?.04:-.04;return{c:new R(v,S,(y+w)/2),r:T*1.015,hw:(w-y)/2,z0:y-(y+w)/2+Math.min(0,C),z1:w-(y+w)/2+Math.max(0,C)}});if(r.some(l=>!(l.r>.25&&l.r<.5&&l.hw>.05&&l.hw<.25)))return;let a=(l,c)=>{for(let h=0;h<4;h++){let u=r[h],d=l[c*3]-u.c.x,f=l[c*3+1]-u.c.y,m=l[c*3+2]-u.c.z;if(d*d+f*f<u.r*u.r&&m>u.z0&&m<u.z1)return h}return-1};r.forEach(l=>{let c=new It,h=new It;c.position.copy(l.c),c.add(h),Ge.add(c),l.steer=c,l.spin=h});let o=new Ne;for(let{m:l,M:c,f:h}of n){let u=l.geometry,d=u.index?u.index.array:null,f=(d?d.length:u.attributes.position.count)/3,m=(T,y)=>d?d[T*3+y]:T*3+y,x=[[],[],[],[],[]],g=l.material.map,p=g&&g.image,_=u.attributes.uv,M=null;if(p&&p.width&&_)try{let T=document.createElement("canvas");T.width=p.width,T.height=p.height;let y=T.getContext("2d");y.drawImage(p,0,0),M=y.getImageData(0,0,p.width,p.height).data}catch{M=null}let b=(T,y,w)=>{if(!M)return!1;let C=(_.getX(T)+_.getX(y)+_.getX(w))/3,P=(_.getY(T)+_.getY(y)+_.getY(w))/3;g.flipY&&(P=1-P);let F=Math.min(p.width-1,Math.max(0,Math.floor((C-Math.floor(C))*p.width))),D=Math.min(p.height-1,Math.max(0,Math.floor((P-Math.floor(P))*p.height))),I=(D*p.width+F)*4;return M[I]-M[I+2]>60&&M[I]>90};for(let T=0;T<f;T++){let y=m(T,0),w=m(T,1),C=m(T,2),P=a(h,y);x[P>=0&&a(h,w)===P&&a(h,C)===P&&!b(y,w,C)?P:4].push(y,w,C)}if(x[4].length===f*3)continue;o.getNormalMatrix(c);let v=(T,y)=>{let w=new Tt,C=u.attributes.normal,P=new Float32Array(T.length*3);if(T.forEach((F,D)=>{P[D*3]=h[F*3]-y.x,P[D*3+1]=h[F*3+1]-y.y,P[D*3+2]=h[F*3+2]-y.z}),w.setAttribute("position",new je(P,3)),C){let F=new Float32Array(T.length*3);T.forEach((D,I)=>{t.fromBufferAttribute(C,D).applyMatrix3(o).normalize(),F[I*3]=t.x,F[I*3+1]=t.y,F[I*3+2]=t.z}),w.setAttribute("normal",new je(F,3))}for(let F of Object.keys(u.attributes)){if(F==="position"||F==="normal")continue;let D=u.attributes[F],I=D.itemSize,O=new Float32Array(T.length*I);T.forEach((B,X)=>{O[X*I]=D.getX(B),I>1&&(O[X*I+1]=D.getY(B)),I>2&&(O[X*I+2]=D.getZ(B)),I>3&&(O[X*I+3]=D.getW(B))}),w.setAttribute(F,new je(O,I))}return w},S=(T,y)=>{let w=new st(T,l.material);w.castShadow=w.receiveShadow=!0,y.add(w)};S(v(x[4],new R),Ge);for(let T=0;T<4;T++)x[T].length&&S(v(x[T],r[T].c),r[T].spin);l.parent.remove(l)}Ci.push(...r)}var qe={ok:!1,aft:new It,fwd:new It,HA:-.8,HF:.7,HY:.05,HB:-.4,KIT:.05,kit:[]};function Ym(i,e,t,n,s){let r=new R,a=new Tt,o=new Float32Array(n.length*3);n.forEach((l,c)=>{o[c*3]=e[l*3]-s.x,o[c*3+1]=e[l*3+1]-s.y,o[c*3+2]=e[l*3+2]-s.z}),a.setAttribute("position",new je(o,3));for(let l of Object.keys(i.attributes)){if(l==="position")continue;let c=i.attributes[l],h=c.itemSize,u=new Float32Array(n.length*h);n.forEach((d,f)=>{if(l==="normal"){r.fromBufferAttribute(c,d).applyMatrix3(t).normalize(),u[f*3]=r.x,u[f*3+1]=r.y,u[f*3+2]=r.z;return}u[f*h]=c.getX(d),h>1&&(u[f*h+1]=c.getY(d)),h>2&&(u[f*h+2]=c.getZ(d)),h>3&&(u[f*h+3]=c.getW(d))}),a.setAttribute(l,new je(u,h))}return a}function RS(){if(Ci.length!==4)return;Ge.updateMatrixWorld(!0);let i=Ge.matrixWorld.clone().invert(),e=new R,t=new Ne,n=[],s=new R;Ge.traverse(o=>{o.isMesh&&!Ci.some(l=>{for(let c=o;c;c=c.parent)if(c===l.spin)return!0;return!1})&&n.push(o)}),qe.aft.position.set(qe.HA,qe.HY,0),qe.fwd.position.set(qe.HF,qe.HY,0);let r=new It;Ge.add(r,qe.aft,qe.fwd);let a=new Map;for(let o of n){let l=i.clone().multiply(o.matrixWorld),c=o.geometry,h=c.attributes.position,u=c.index?c.index.array:null,d=(u?u.length:h.count)/3;t.getNormalMatrix(l);let f=new Float32Array(h.count*3);for(let x=0;x<h.count;x++)e.fromBufferAttribute(h,x).applyMatrix4(l),f[x*3]=e.x,f[x*3+1]=e.y,f[x*3+2]=e.z;let m=[[],[],[]];for(let x=0;x<d;x++){let g=[0,1,2].map(v=>u?u[x*3+v]:x*3+v),p=(f[g[0]*3]+f[g[1]*3]+f[g[2]*3])/3,_=(f[g[0]*3+1]+f[g[1]*3+1]+f[g[2]*3+1])/3,M=p<qe.HA?0:p>qe.HF?2:1,b=(f[g[0]*3+2]+f[g[1]*3+2]+f[g[2]*3+2])/3;for(let v of Ci)Math.abs(b)>.42&&_>-.9&&_<=qe.KIT&&Math.abs(p-v.c.x)<.56&&(M=v.c.x>0?2:0);if(_>qe.KIT){let v=M+"|"+Math.floor(p/.45)+"|"+Math.floor(_/.45)+"|"+Math.floor(b/.45);a.has(v)||a.set(v,{sec:M,parts:new Map,n:0,x:0,y:0,z:0});let S=a.get(v);S.parts.has(o)||S.parts.set(o,{f,nm:t.clone(),l:[]}),S.parts.get(o).l.push(...g),S.n++,S.x+=p,S.y+=_,S.z+=b}else m[M].push(...g)}m.forEach((x,g)=>{if(!x.length)return;let p=[qe.aft,r,qe.fwd][g],_=new st(Ym(c,f,t,x,g===1?s:p.position),o.material);_.castShadow=_.receiveShadow=!0,p.add(_)}),o.parent.remove(o)}for(let o of a.values()){let l=new R(o.x/o.n,o.y/o.n,o.z/o.n),c=[qe.aft,r,qe.fwd][o.sec],h=new It;h.position.copy(l).sub(o.sec===1?s:c.position),c.add(h);for(let[u,{f:d,nm:f,l:m}]of o.parts){let x=new st(Ym(u.geometry,d,f,m,l),u.material);x.castShadow=x.receiveShadow=!0,h.add(x)}qe.kit.push({m:h,y:l.y,x:l.x})}qe.kit.sort((o,l)=>Math.floor(o.y/.45)-Math.floor(l.y/.45)||o.x-l.x),qe.kit.forEach((o,l)=>{o.t=22.6+l*Math.min(.08,4.2/qe.kit.length)}),Ci.forEach((o,l)=>{(Rn[l].at.x>0?qe.fwd:qe.aft).attach(o.steer),o.home=o.steer.position.clone()}),qe.ok=!0}function zg(i,e,t,n){qe.aft.rotation.z=-Math.PI*i,qe.fwd.rotation.z=Math.PI*e,Ci.forEach((s,r)=>{let a=Rn[r].at.x>0,o=a?n:t,l=Math.sign(s.home.z);s.steer.rotation.x=l*Math.PI/2*o,s.steer.position.set(s.home.x+((a?.4:-.35)-s.home.x)*o,s.home.y+(-.5-s.home.y)*o,s.home.z+(l*.37-s.home.z)*o)})}var Ae={on:!1,t:0,R0:3.42,P:new R,d:new R,q:new ht,end:null,capT:"",pts:null},CS=[[.6,5.2,"11 December 1972, Taurus\u2013Littrow. The rover rode to the Moon folded into a package on the side of the lunar module."],[5.4,8.8,"From the ladder, a D-handle releases the package. A tape pulled from the ground tilts it out, hinged at the bottom of its bay."],[9,12.4,"Partway over, the aft chassis swings open on its springs and locks, and the rear wheels spring into place."],[12.6,16.4,"With the rear wheels on the ground, a second tape lets the front down. The rover moves out from the lander as the forward chassis and its wheels unfold."],[16.6,19.8,"On all four wheels at last, it is disconnected from the lander and pulled clear."],[20,22.4,"Its 210 kg weigh no more here than 35 kg on Earth."],[22.4,27.4,"The crew unfolds the seats and console, and fits the antennas, TV camera and radio relay unit."],[27.6,32.6,"With front and rear wheels both steering, it could turn in a circle about 3 m in radius."]],Jm=32.8,xs=[27.4,32.4];function PS(){Ae.on=!0,Ae.t=0,document.body.classList.add("intro"),Ft.ring.visible=Ft.line.visible=!1,Ft.line.material.uniforms.op.value=0,Ae.pts||(Ae.pts=[],Ge.traverse(u=>{if(!u.isMesh)return;let d=u.geometry.attributes.position,f=Math.min(60,d.count);for(let m=0;m<f;m++)Ae.pts.push([u,new R().fromBufferAttribute(d,Math.floor(m*d.count/f))])})),Ae.d.set(1,0,1).normalize(),Ae.P.set(Ye.x+Ae.d.x*Ae.R0,Ye.y+1.35,Ye.z+Ae.d.z*Ae.R0);let i=Math.atan2(Ae.d.z,-Ae.d.x);Ae.q.setFromAxisAngle(new R(0,1,0),i);let e=Ye.x+Ae.d.x*(Ae.R0+qe.HF+.9),t=Ye.z+Ae.d.z*(Ae.R0+qe.HF+.9),n=1,s=.6,r=160,a=(u,d,f)=>u<n||u>f-s?0:d*Math.sin(Math.PI*(u-n)/(f-n-s))**2,o=0,l=null,c=9;for(let u=0;u<8;u++){c=n+s+Math.max(2,2*Math.abs(o)/.36);let d=2*o/(c-n-s),f=c/r,m=e,x=t,g=i;l=[[m,x,g,0]];for(let M=1;M<=r;M++){let b=a((M-.5)*f,d,c);g+=b*f/2,m-=Math.cos(g)*f,x+=Math.sin(g)*f,g+=b*f/2,l.push([m,x,g,a(M*f,d,c)])}let _=Math.atan2(-(Ft.z-x),Ft.x-m)-g;_=Math.atan2(Math.sin(_),Math.cos(_)),o+=_}Ae.path=l,Ae.L=c;let h=l[r];Ae.end={x:h[0],z:h[1],yaw:h[2]},Zi(e,t,i)}function df(){Ae.on=!1,document.body.classList.remove("intro"),re("cine-cap").classList.remove("on"),Ft.ring.visible=Ft.live=!0,ln.forEach(i=>{i.visible=!0}),zg(0,0,0,0),qe.kit.forEach(i=>{i.m.visible=!0,i.m.scale.setScalar(1)}),Zi(Ae.end.x,Ae.end.z,Ae.end.yaw),Na.copy(Ze.position),Ua.copy(N.p),Qs=!0,gn=!0}var Gd=new ht,IS=new R(0,0,1),Ws=new R,Zm=new R,ch=new R;function LS(i){let e=Ae.t+=i,t=(b,v)=>ot(b,v,e);if(e>=Jm)return df();let n=(b,v)=>{let S=Math.max(0,Math.min(1,(e-b)/(v-b)));return S<=0?0:1+2.2*Math.pow(S-1,3)+1.2*Math.pow(S-1,2)};zg(1-n(9,10.4),1-n(13.6,15.2),1-n(10,11),1-n(14.8,15.8)),qe.kit.forEach(b=>{let v=Math.min(1,(e-b.t)/.22);b.m.visible=v>0,v>0&&b.m.scale.setScalar(1+2.7*Math.pow(v-1,3)+1.7*Math.pow(v-1,2))});let s=90-4*t(4.6,5.3);for(let[b,v,S]of[[6,7.4,18],[8,9.4,20],[10.4,11.8,16],[12.6,16.6,40]])s-=S*t(b,v);let r=t(12.6,16.6);Ws.copy(Ae.P).addScaledVector(Ae.d,.6*t(12.8,16.6)+.3*t(17,19)),Ws.y+=(N.p.y+qe.HB-Ae.P.y)*r;let a=Ws.x+Ae.d.x*1.75,o=Ws.z+Ae.d.z*1.75,l=Ws.y-Mt(a,o),c=(Math.asin(Math.max(-1,Math.min(1,-l/1.771)))+Math.atan2(.38,1.73))*180/Math.PI;s=Math.max(s,c,0)*Math.PI/180,Gd.copy(Ae.q).multiply(new ht().setFromAxisAngle(IS,-s));let h=Zm.copy(Ws).sub(ch.set(qe.HF,qe.HB,0).applyQuaternion(Gd)),u=t(19,20);if(ln.forEach(b=>{b.visible=e>xs[0]-.4}),e>xs[0]){let b=Math.min(1,(e-xs[0])/(xs[1]-xs[0])),v=Ae.L*b*b*b*(b*(6*b-15)+10),S=Ae.path,T=S.length-1,y=Math.min(T,v/Ae.L*T),w=Math.min(T-1,Math.floor(y)),C=y-w,P=D=>S[w][D]+(S[w+1][D]-S[w][D])*C;Zi(P(0),P(1),P(2)),N.steer=Math.atan(1.15*P(3));let F=v-(Ae.s||0);Ae.s=v,Rn.forEach(D=>{D.spin-=F/uh})}else Ae.s=0;Ge.position.copy(h).lerp(N.p,u),Ge.quaternion.copy(Gd).slerp(N.q,u),Ge.updateMatrixWorld(!0);let d=1e9;for(let[b,v]of Ae.pts)mt.copy(v).applyMatrix4(b.matrixWorld),d=Math.min(d,mt.y-Mt(mt.x,mt.z));d<.02&&(Ge.position.y+=.02-d);let f=Ws.set(-Ae.d.z,0,Ae.d.x),m=Ae.P,x=Zm.set(m.x+Ae.d.x*13+f.x*6,m.y+.3,m.z+Ae.d.z*13+f.z*6),g=ch.set(m.x+Ae.d.x*3.5+f.x*6.5,m.y-.2,m.z+Ae.d.z*3.5+f.z*6.5),p=t(4,8);Ze.position.copy(x).lerp(g,p);let _=new R(N.p.x+Ae.d.x*6-f.x*3,N.p.y+.4,N.p.z+Ae.d.z*6-f.z*3);if(Ze.position.lerp(_,t(17,23.5)),e>xs[0]-.6){let b=Ae.path,v=b[b.length>>1],S=b[b.length-1],T=Math.cos(S[2]),y=-Math.sin(S[2]),w=-y,C=T;(v[0]-Ye.x)*w+(v[1]-Ye.z)*C<0&&(w=-w,C=-C);let P=mt.set(v[0]+w*9-T*3,jt(v[0],v[1])+5,v[1]+C*9-y*3);Ze.position.lerp(P,t(xs[0]-.6,xs[0]+1.6));let F=ti===1?16:7.5,D=ti===1?.35:0,I=Math.cos(At.pitch+D)*F;Ze.position.lerp(mt.set(S[0]-T*I,Mt(S[0],S[1])+.8+1.6+Math.sin(At.pitch+D)*F,S[1]-y*I),t(xs[1]-1.8,Jm))}Ze.position.y=Math.max(Ze.position.y,Mt(Ze.position.x,Ze.position.z)+.45),Ze.lookAt(Ws.copy(m).add(ch.set(0,1-.4*t(4,10),0)).lerp(mt.copy(Ge.position).add(ch.set(0,.4,0)),t(6,12))),ii.position.copy(Ge.position).addScaledVector(sf,120),ii.target.position.copy(Ge.position);let M="";for(let[b,v,S]of CS)e>=b&&e<v&&(M=S);if(M!==Ae.capT){Ae.capT=M;let b=re("cine-cap");b.classList.remove("on"),M&&(b.textContent=M,b.offsetWidth,b.classList.add("on"))}}var Or=[{at:()=>[Ye.x,Ye.z,8.5],name:"Challenger",sub:"Apollo 17 landing site \xB7 11 December 1972",body:["Gene Cernan and Harrison Schmitt landed here in the lunar module Challenger, less than 200 m from their target, while Ronald Evans circled overhead in the command module America.","They stayed about 75 hours, longer than any other Apollo crew, and spent more than 22 hours outside on three moonwalks. With the rover they covered about 35 km and brought home about 110 kg of rock and soil, more than any other mission.","On the first moonwalk part of a rear fender was knocked off, and the wheels sprayed the crew and the rover with dust. Overnight they made a new one from laminated maps, duct tape and clamps.","It was the last of the Apollo landings."]},{at:()=>[xt.x,xt.z,7.5],name:"Tracy\u2019s Rock",sub:"Stop 6 \xB7 the foot of the North Massif",body:["This boulder broke loose high on the North Massif and rolled and bounced about a kilometer down the slope, leaving a trail still visible from orbit, then split into five pieces where it stopped. Put back together it would be about 18 by 10 by 6 m. Gene Cernan named it for his daughter, Tracy.","<b>Troctolite 76535.</b> Among the rock fragments the crew raked from the soil here was a coarse-grained crystalline rock about 4.2 to 4.3 billion years old. It formed slowly, deep in the young Moon\u2019s crust, and was later dug out by impacts.","In 2009 researchers at MIT found that it is weakly magnetized, and that its magnetism dates from when it crystallized. That points to a molten, churning core that gave the young Moon a magnetic field, as Earth\u2019s core does today. A 2016 study supported the result."]},{at:()=>[Ri.x,Ri.z,5],name:"Van Serg crater",sub:"Stop 9 \xB7 the last drive",body:["A crater about 100 m across, blasted through the dark soil that covers the valley floor. The crew came here on the third moonwalk to work out how it formed and to sample the dark material and what lies beneath it.","Its rim is strewn with angular blocks thrown out by the impact, mostly smaller than 30 cm, with a few boulders up to about 2 m across. A piece they broke from a boulder on the rim, sample 79115, turned out to be regolith breccia: loose lunar soil welded into rock by the shock of an impact.","<b>What they found.</b> Harrison Schmitt called it a fresh impact crater with a blocky rim as soon as they arrived. Its shape bears that out: a raised rim of blocks, benches stepping down the inner walls, and a mound of blocks on the floor. Nearly every rock they sampled was the same dark, crumbly breccia, which the geologists read as the valley floor\u2019s own soil, hardened into rock by the impact and thrown out of the crater.","<b>The name.</b> Schmitt named it for Hugh McKinstry (1896\u20131961), a Harvard geology professor who wrote scientific satires under the pen name Nicholas Vanserg."]},{at:()=>[rt.x,rt.z,6],name:"Shorty crater",sub:"Stop 4 \xB7 the second drive \xB7 the orange soil",body:["On the second moonwalk Harrison Schmitt, the only geologist to walk on the Moon, looked down at the rim of this crater and saw orange soil. Shorty is about 110 m across and up to 14 m deep.","Almost all of that soil is tiny beads and broken pieces of orange glass, colored by titanium. They were sprayed out in fire-fountain eruptions about 3.6 billion years ago, buried under a later lava flow, and brought back up by the impact that made the crater. In the core tube the crew drove into the rim, the orange gave way to black beads: the same glass, crystallized as it cooled.","Decades later the beads changed ideas about the Moon itself. In 2008 a team led by Alberto Saal found traces of water in these volcanic glasses, and in 2011 tiny pockets of melt sealed inside crystals in this very soil showed that the Moon\u2019s magma had held about a hundred times more water than earlier studies suggested.","<i>The real Shorty is about 4.3 km west of the lander. It is drawn here at its true size but much closer, so the drive to it is short.</i>"]},{kind:"find",model:"../models/sample-76535.glb",cap:"76535,0 today, about 2 cm across: the largest piece left after samples were cut for study. Drag to turn it, pinch or scroll to zoom. 3D model: NASA Astromaterials 3D.",at:()=>[xt.x-10,xt.z+9,2.5],label:"76535 \xB7 troctolite",name:"76535,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 6",body:["A troctolite: a coarse-grained igneous rock made almost entirely of large grains of pale green olivine and white plagioclase feldspar. It weighs about 156 g and came back in a rake sample from the soil at Station 6, the stop at the split boulder, on the third moonwalk.","It crystallized deep in the young Moon\u2019s crust about 4.2 to 4.3 billion years ago, slowly enough to grow its large, interlocking grains, and was later dug out by impacts.","Few rocks have been studied so closely. In 2009 researchers at MIT found it weakly magnetized since it formed, evidence that the young Moon had a magnetic field from a molten core. In 2021, chemical differences still preserved inside its crystals showed it must have cooled within about 20 million years, far faster than the more than 100 million years once thought."]},{kind:"find",model:"../models/sample-79115.glb",cap:"79115,0 today, about 9 cm long. Drag to turn it, pinch or scroll to zoom. 3D model: NASA Astromaterials 3D.",at:()=>[Ri.x+-.65*48,Ri.z+-.76*48,2.5],label:"79115 \xB7 breccia",name:"79115,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 9",body:["Regolith breccia: loose lunar soil and broken rock welded into stone by the shock of an impact. On the third moonwalk the crew broke this 346 g piece off the top of a fractured boulder on the rim of Van Serg crater, hoping it would tell how and when the crater formed. Its partner, 79135, 2.3 kg, came from the bottom of the same boulder.","About 60% of it is a fine matrix of mineral debris and glass. Mixed through it are fragments of highland rock, mare basalt and other basalts, and beads of orange volcanic glass like those at Shorty crater: soil from across the valley, swept up and pressed together."]},{kind:"find",at:()=>[rt.x+Math.cos(2.4)*rt.R*1.05,rt.z+Math.sin(2.4)*rt.R*1.05,2.5],label:"74220 \xB7 orange soil",name:"74220,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 4",body:["The orange soil itself: 1,180 g scooped from the rim of Shorty crater on the second moonwalk. With the samples from the trench Harrison Schmitt dug across the orange zone and the core tube driven beside it, the set comes to about 4.6 kg.","About 99% of it is beads and broken bits of orange glass; the rest is mostly fragments of basalt. Each bead is a droplet of lava sprayed from a fire fountain about 3.6 billion years ago and frozen to glass in flight. The color comes from titanium.","The beads still hold traces of the gases that drove the eruption. In 2008 and 2011 they gave the first strong evidence of water inside the Moon."]}],DS={"Tracy\u2019s Rock":[["img/tracys-rock.jpg","Harrison Schmitt beside the boulder at Station 6, with the front of the rover at left. AS17-146-22294, photographed by Gene Cernan, 13 December 1972. NASA."]],"Van Serg crater":[["img/van-serg.jpg","Harrison Schmitt in the rover at Station 9, Van Serg crater, on the third moonwalk. AS17-134-20454, photographed by Gene Cernan, 13 December 1972. NASA."]],"Shorty crater":[["img/shorty.jpg","Looking into Shorty crater from Station 4, with the orange soil on its rim. AS17-137-20992, 12 December 1972. NASA."]],"76535,0":[["img/76535.jpg","Sample 76535, photographed at NASA\u2019s Manned Spacecraft Center (now Johnson Space Center) in 1973. NASA photo S73-19456."]],"79115,0":[["img/79115.jpg","Sample 79115, photographed at NASA\u2019s Manned Spacecraft Center (now Johnson Space Center) in 1973. NASA photo S73-15396."]],"74220,0":[["img/orange-soil.jpg","The orange soil at Station 4, Shorty crater. The tripod is the gnomon, the crew\u2019s reference for scale, sun angle and color. AS17-137-20990, 12 December 1972, color gently enhanced. NASA."],["img/orange-beads.jpg","Orange glass beads and fragments from the soil, 0.02 to 0.045 mm across, magnified 160 times. NASA photo S73-15171, January 1973."]]};Or.forEach(i=>{i.imgs=DS[i.name]||[]});var qs=new R,pn={relief:null,trail:(()=>{try{return JSON.parse(localStorage.getItem("lrv-trail"))||[]}catch{return[]}})(),seen:(()=>{try{return new Set(JSON.parse(localStorage.getItem("lrv-found"))||[])}catch{return new Set}})(),t:0,saveT:0,open:!1},FS=()=>[[Ye.x+22,Ye.z+30,"Challenger"],[Lr[0].x,Lr[0].z-22,"Station 6"],[Lr[1].x-10,Lr[1].z-20,"Station 8"],[Ri.x,Ri.z-rt.R-8,"Station 9 \xB7 Van Serg"],[rt.x,rt.z-rt.R-12,"Shorty"],[yt,vt-Ue+70,"North Massif"]],NS=[["Sculptured Hills \u2192",1,.42],["\u2190 South Massif",-1,.96]];function US(){let e=document.createElement("canvas");e.width=e.height=340;let t=e.getContext("2d"),n=t.createImageData(340,340);for(let s=0;s<340;s++)for(let r=0;r<340;r++){let a=yt-Ue+(r+.5)*2*Ue/340,o=vt-Ue+(s+.5)*2*Ue/340,l=2*Ue/340,c=jt(a+l,o)-jt(a-l,o),h=jt(a,o+l)-jt(a,o-l),u=Math.max(16,Math.min(215,108-c/l*150-h/l*38)),d=(s*340+r)*4;n.data[d]=u,n.data[d+1]=u*.98,n.data[d+2]=u*.93,n.data[d+3]=255}return t.putImageData(n,0,0),e}function Bg(i,e,t,n,s){let r=Math.min(2,devicePixelRatio||1),a=Math.round(i.clientWidth*r);if(!a)return;i.width!==a&&(i.width=i.height=a);let o=i.getContext("2d"),l=a/n,c=(M,b)=>[(M-e)*l+a/2,(b-t)*l+a/2];pn.relief||(pn.relief=US()),o.fillStyle="#1a1916",o.fillRect(0,0,a,a);let[h,u]=c(yt-Ue,vt-Ue);o.drawImage(pn.relief,h,u,2*Ue*l,2*Ue*l),o.lineJoin=o.lineCap="round",o.strokeStyle="rgba(124,199,242,.55)",o.lineWidth=Math.max(1,1.2*r),o.setLineDash([2*r,4*r]),o.beginPath();for(let M=0;M<Fr.length;M+=6){let[b,v]=c(Fr[M],Fr[M+1]);M?o.lineTo(b,v):o.moveTo(b,v)}o.stroke(),o.setLineDash([]),o.strokeStyle="rgba(230,204,133,.9)",o.lineWidth=Math.max(1.5,(s?2:1.6)*r),o.beginPath();let d=!1;for(let M of pn.trail){if(!M){d=!1;continue}let[b,v]=c(M[0],M[1]);d?o.lineTo(b,v):o.moveTo(b,v),d=!0}o.stroke();let f=(s?11:8)*r;o.font=`600 ${f}px Montserrat, sans-serif`,o.textAlign="center";for(let M of Or)if(M.kind==="find"){let[b,v]=M.at(),[S,T]=c(b,v),y=pn.seen.has(M.name);o.beginPath(),o.arc(S,T,(s?5:3.2)*r,0,6.3),o.strokeStyle="#7CC7F2",o.lineWidth=1.3*r,o.stroke(),y&&(o.fillStyle="#7CC7F2",o.fill()),s&&(o.fillStyle="rgba(201,189,151,.95)",o.fillText(y?M.name.split(",")[0]:"?",S,T+17*r))}if(s||n<600)for(let[M,b,v]of FS()){let[S,T]=c(M,b);o.fillStyle="rgba(0,0,0,.55)",o.fillText(v,S+r,T+r),o.fillStyle="#E6CC85",o.fillText(v,S,T)}if(s)for(let[M,b,v]of NS)o.textAlign=b>0?"right":"left",o.fillStyle="rgba(201,189,151,.8)",o.fillText(M,b>0?a-8*r:8*r,a*v);o.strokeStyle="rgba(230,140,90,.75)",o.lineWidth=Math.max(1,1.3*r),o.setLineDash([5*r,4*r]),o.beginPath();for(let M=0;M<=240;M++){let[b,v]=c(...QM(M/240*2*Math.PI));M?o.lineTo(b,v):o.moveTo(b,v)}o.stroke(),o.setLineDash([]);let[m,x]=c(Ye.x,Ye.z);o.fillStyle="#F2E4BE",o.fillRect(m-2.5*r,x-2.5*r,5*r,5*r);let[g,p]=c(N.p.x,N.p.z),_=Math.atan2(-Xt.z,Xt.x);o.save(),o.translate(g,p),o.rotate(-_),o.beginPath(),o.moveTo(7*r,0),o.lineTo(-4.5*r,4*r),o.lineTo(-2.5*r,0),o.lineTo(-4.5*r,-4*r),o.closePath(),o.fillStyle="#E6CC85",o.strokeStyle="#0d0a18",o.lineWidth=1.2*r,o.fill(),o.stroke(),o.restore()}function OS(i){let e=pn.trail[pn.trail.length-1];if(!ae.on&&(!e||Math.hypot(N.p.x-e[0],N.p.z-e[1])>3)&&(e&&Math.hypot(N.p.x-e[0],N.p.z-e[1])>30&&pn.trail.push(null),pn.trail.push([+N.p.x.toFixed(1),+N.p.z.toFixed(1)]),pn.trail.length>6e3&&pn.trail.splice(0,1e3)),(pn.saveT+=i)>5){pn.saveT=0;try{localStorage.setItem("lrv-trail",JSON.stringify(pn.trail))}catch{}}(pn.t+=i)>.2&&(pn.t=0,Bg(re("minimap"),N.p.x,N.p.z,260,!1))}var Hg=!1;re("minimap").addEventListener("click",()=>{Ae.on||bt.on||Vt.on||(Hg=gn,gn=!1,re("mapsheet").classList.add("on"),requestAnimationFrame(()=>Bg(re("mapbig"),yt,vt,2*Ue,!0)))});re("mapsheet-close").addEventListener("click",()=>{re("mapsheet").classList.remove("on"),gn=Hg});var Vg=!1;function Gg(i){i.kind==="find"&&!cn.on&&Jg(i)||Wg(i)}function Wg(i){re("sc-t").textContent=i.name,re("sc-s").textContent=i.sub;let e=([t,n])=>`<figure><img src="${t}" alt="" loading="lazy" onerror="this.parentNode.remove()"><figcaption>${n}</figcaption></figure>`;if(re("sc-b").innerHTML=(i.imgs[0]?e(i.imgs[0]):"")+i.body.map(t=>`<p>${t}</p>`).join("")+i.imgs.slice(1).map(e).join(""),re("sitecard").classList.toggle("wide",!!i.model),re("sitecard").classList.add("on"),Vg=gn,gn=!1,i.model&&kS(i.model,i.cap),i.kind==="find"&&!pn.seen.has(i.name)){pn.seen.add(i.name);try{localStorage.setItem("lrv-found",JSON.stringify([...pn.seen]))}catch{}}}re("sc-close").addEventListener("click",()=>{re("sitecard").classList.remove("on"),gn=Vg,Mh.stop&&Mh.stop()});var Mh={stop:null};function kS(i,e){let t=document.createElement("figure");t.className="rock3d";let n=document.createElement("canvas");t.appendChild(n);let s=document.createElement("button");s.className="rock-fs",s.textContent="Full screen",t.appendChild(s);let r=document.createElement("figcaption");r.textContent=e||"",t.appendChild(r),re("sc-b").prepend(t);let a=new Do({canvas:n,antialias:!0,alpha:!0});a.outputColorSpace=Bt;let o=new ca,l=new en(30,1,.001,10);o.add(new ga(16777215,4210752,1.4));let c=new ks(16777215,2.2);c.position.set(.5,.8,.6),o.add(c);let h=new It;o.add(h);let u=!0,d=.3,f=0,m=1,x=()=>{let b=t.classList.contains("big"),v=b?innerWidth:t.clientWidth||360,S=b?innerHeight:Math.round(Math.min(v*.8,innerHeight*.55));a.setPixelRatio(Math.min(2,devicePixelRatio||1)),a.setSize(v,S),l.aspect=v/S,l.updateProjectionMatrix()};x(),addEventListener("resize",x),s.addEventListener("click",()=>{t.classList.toggle("big"),s.textContent=t.classList.contains("big")?"Close":"Full screen",x()}),new No().setMeshoptDecoder(Id).loadAsync(i).then(b=>{let v=b.scene,S=new Jt().setFromObject(v),T=.05/S.getSize(new R).length();v.scale.setScalar(T),v.position.copy(S.getCenter(new R)).multiplyScalar(-T),h.add(v)}).catch(()=>t.remove());let g=new Map,p=0;n.addEventListener("pointerdown",b=>{g.set(b.pointerId,[b.clientX,b.clientY]),n.setPointerCapture(b.pointerId),p=0}),n.addEventListener("pointermove",b=>{let v=g.get(b.pointerId);if(v&&(g.size===1&&(f+=(b.clientX-v[0])*.01,d+=(b.clientY-v[1])*.01),g.set(b.pointerId,[b.clientX,b.clientY]),g.size===2)){let[S,T]=[...g.values()],y=Math.hypot(S[0]-T[0],S[1]-T[1]);p&&(m=Math.max(.6,Math.min(4,m*y/p))),p=y}});let _=b=>{g.delete(b.pointerId),p=0};n.addEventListener("pointerup",_),n.addEventListener("pointercancel",_),n.addEventListener("wheel",b=>{b.preventDefault(),m=Math.max(.6,Math.min(4,m*Math.exp(-b.deltaY*.0015)))},{passive:!1});let M=()=>{u&&(g.size||(f+=.006),h.rotation.set(d,f,0),l.position.set(0,0,.09/m),a.render(o,l),requestAnimationFrame(M))};M(),Mh.stop=()=>{u=!1,removeEventListener("resize",x),a.dispose(),Mh.stop=null}}Or.forEach(i=>{let e=document.createElement("button");e.className=i.kind==="find"?"site find":"site",e.innerHTML=`<i></i>${i.label||i.name}`,e.addEventListener("click",()=>Gg(i)),re("sites").appendChild(e),i.el=e});function zS(){Ze.updateMatrixWorld();for(let i of Or){let[e,t,n]=i.at(),s=Math.hypot(e-Ze.position.x,t-Ze.position.z);qs.set(e,Mt(e,t)+n,t).project(Ze);let r=Math.hypot(qs.x,qs.y*.8),a=i.kind==="find"?150:280,o=qs.z<1&&Math.abs(qs.x)<1.05&&Math.abs(qs.y)<1.05?s<35?1:ot(a,a*.55,s)*ot(.5,.28,r):0;if(i.el.style.display=o>.02?"flex":"none",o>.02){let l=(qs.x+1)/2*innerWidth,c=(1-qs.y)/2*innerHeight;i.el.style.left=l.toFixed(1)+"px",i.el.style.top=c.toFixed(1)+"px",i.el.style.opacity=o.toFixed(2);let h=Math.hypot(yh.x-l,yh.y-c+12);i.el.style.setProperty("--k",(1+.6*ot(130,20,h)).toFixed(3))}}}function qg(){Ci.forEach((i,e)=>{i.steer.rotation.y=-N.steer*Rn[e].steer,i.spin.rotation.z=-Rn[e].spin})}var ln=[],Oa=[],Ki=[],BS=[[-.66,.16,-.33],[-.66,.16,.33]],mh=new R(-.3,.4,0),_t={S:new R(.26,.435,-.07),E:new R(.44,.334,-.08),H:new R(.72,.149,-.093)},ff=i=>i<0?[5,8]:[6,9],HS=i=>{for(let e in i.attributes){let t=i.attributes[e];if(t.array instanceof Float32Array&&!t.normalized)continue;let n=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)n[s*t.itemSize+r]=t.getComponent(s,r);i.setAttribute(e,new je(n,t.itemSize))}return i};function VS(i){i.updateMatrixWorld(!0);let e=new Jt().setFromObject(i),t=1.85/(e.max.y-e.min.y),n=(e.min.x+e.max.x)/2,s=new It,r=new Jt;i.traverse(p=>{p.isMesh&&p.material.name==="base_002"&&r.expandByObject(p)});let a=(r.min.z+r.max.z)/2,o=[.22,1.38],l=[.23,1.43],c=Math.PI/12,h=Math.PI/4,u=.01,d=new R,f=new R;i.traverse(p=>{if(!p.isMesh)return;let _=HS(p.geometry.clone());_.applyMatrix4(p.matrixWorld),_.translate(-n,-e.min.y,-a),_.scale(t,t,t);let M=_.attributes.position,b=_.attributes.normal,v=p.material.name==="base_002",S=/buttons|vents/.test(p.material.name),T=/helm|gold/.test(p.material.name);for(let w=0;w<M.count;w++){d.fromBufferAttribute(M,w),f.fromBufferAttribute(b,w);let C=Math.sign(d.x)||1,P=Math.abs(d.x)-o[0],F=d.y-o[1],D=P*Math.cos(h)-F*Math.sin(h),I=Math.abs(P*Math.sin(h)+F*Math.cos(h)),O=d.y>1.36?1:ot(.2,.235,Math.abs(d.x)),B=d.y>.86&&!T?ot(-.04,.07,D)*ot(.12,.085,I)*ot(1.62,1.5,d.y)*O:0;if(B>0){let te=c*B*C,q=Math.cos(te),J=Math.sin(te),Q=d.x-C*l[0],Ee=d.y-l[1];d.x=C*l[0]+Q*q-Ee*J,d.y=l[1]+Q*J+Ee*q;let ve=f.x*q-f.y*J;f.y=f.x*J+f.y*q,f.x=ve}let X=ot(.98,1.28,d.y)*ot(1.62,1.5,d.y);if(B>.5?d.x+=C*u*X:T||(d.x*=1+u/o[0]*X,d.z*=1+.03*X),v)d.addScaledVector(f,.01*(1-B)+.006*B);else if(S){let te=Math.hypot(d.x*.3,d.z)||1;d.x+=d.x*.3/te*.018,d.z+=d.z/te*.018}M.setXYZ(w,d.x,d.y,d.z),b.setXYZ(w,f.x,f.y,f.z)}let y=new st(_,p.material);s.add(y)});let m=new on({color:14275784,roughness:.9,name:"pack"}),x=new on({color:13223356,roughness:.7,name:"rcu"}),g=(p,_,M,b,v,S,T,y,w)=>{let C=new Ql(p,_,M,3,b);C.translate(v,S,T);let P=new st(C,y);w&&(P.userData.addon=w),s.add(P)};return g(.47,.64,.25,.05,0,1.3,-.315,m,"pack"),g(.44,.2,.21,.05,0,1.73,-.305,m,"pack"),g(.21,.14,.09,.02,0,1.2,.215,x,null),s}function GS(i){let e=i.clone();return e.vertexColors=!0,e.color.multiplyScalar(.93),e}function WS(i){let e=i.clone();return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 sp;
varying vec3 vSp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSp = sp;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSp;`).replace("#include <color_fragment>",`#include <color_fragment>
      { float ax = abs(vSp.x), y = vSp.y, arm = step(1.25, y) * step(.3, ax);
        float red = arm * smoothstep(.025, .015, abs(ax - .4)) + step(y, .9) * step(.5, y) * smoothstep(.025, .015, abs(y - .66)) + step(1.74, y) * smoothstep(.02, .012, ax);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.5, .04, .04), clamp(red, 0., 1.) * .9); }`)},e.customProgramCacheKey=()=>"cmdr-"+i.name,e}var Wd=null;function qS(){if(Wd)return Wd;let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"#000"),t.addColorStop(.47,"#050505"),t.addColorStop(.5,"#9a978f"),t.addColorStop(.62,"#7d7a73"),t.addColorStop(1,"#55534e"),e.fillStyle=t,e.fillRect(0,0,256,128),e.fillStyle="#fff",e.beginPath(),e.arc(70,40,5,0,6.3),e.fill();let n=new _i(i);n.mapping=ya,n.colorSpace=Bt;let s=new Ra(ni).fromEquirectangular(n).texture;return n.dispose(),Wd=new on({color:14198336,metalness:1,roughness:.14,envMap:s,envMapIntensity:1.25,name:"visor"})}var js=(()=>{let i=_t.S.x,e=_t.S.y+.93,t=_t.H.x-i,n=_t.H.y+.93-e,s=Math.hypot(t,n);return{sx:i,sy:e,ux:t/s,uy:n/s,le:Math.hypot(_t.E.x-i,_t.E.y-_t.S.y)}})(),Xg=(i,e)=>{let t=i-js.sx,n=e-js.sy;return[t*js.ux+n*js.uy,Math.abs(t*js.uy-n*js.ux)]},$m=(i,e)=>{if(i<.24&&e<1.32)return!1;let[t,n]=Xg(i,e);return t>-.05&&n<(t>.35?.2:.15)};function XS(i){i.updateMatrixWorld(!0);let e=new Jt;i.traverse(m=>{m.isMesh&&!m.userData.addon&&e.expandByObject(m)});let t=1.85/(e.max.y-e.min.y),n=new R,s=new ht,r=new bi,a=new R,o=.93,l=.5,c=(e.min.z+e.max.z)/2*t,h=(m,x,g)=>m.sub(x).applyQuaternion(s.setFromEuler(r.set(g[0],g[1],g[2]))).add(x),u=[],d=[];i.traverse(m=>{if(!m.isMesh)return;let x=m.geometry.clone();x.applyMatrix4(m.matrixWorld),x.translate(-(e.min.x+e.max.x)/2,-e.min.y,0),x.scale(t,t,t);let g=x.attributes.position,p=x.attributes.normal,_=new Float32Array(g.count*3),M=new Uint8Array(g.count),b=new Uint16Array(g.count*4),v=new Float32Array(g.count*4),S=new Float32Array(g.count*3);for(let C=0;C<g.count;C++){n.fromBufferAttribute(g,C);let P=n.y,F=Math.abs(n.x),D=n.x<0?0:1;S.set([n.x,P,n.z-c],C*3);let I=[];if(m.userData.addon==="pack")I.push([7,1]);else if($m(F,P)){let[q,J]=Xg(F,P),Q=q>.35?1:ot(-.03,.05,q)*ot(.15,.11,J),Ee=ot(js.le-.04,js.le+.04,q);I.push([0,1-Q],[5+D,Q*(1-Ee)],[8+D,Q*Ee])}else{let q=ot(o-.06,o+.1,P),J=ot(l-.05,l+.05,P);I.push([0,q],[1+D,(1-q)*J],[3+D,(1-q)*(1-J)])}let O=0;I.forEach(([q,J],Q)=>{b[C*4+Q]=q,v[C*4+Q]=J,J>I[O][1]&&(O=Q)}),M[C]=I[O][0];let B=Math.max(ot(.66,.06,P),.45*ot(.62,.48,Math.abs(P-.5))*(n.z>c?1:.3));_.set([1-.42*B,1-.43*B,1-.45*B],C*3);let X=ot(l+.06,l-.06,P),te=ot(o+.07,o-.09,P);M[C]!==7&&!$m(F,P)&&(a.fromBufferAttribute(p,C),X>0&&(h(n,new R(n.x,l,c),[Math.PI/2*X,0,0]),a.applyQuaternion(s)),te>0&&(h(n,new R(n.x,o,c),[-Math.PI/2*te,0,0]),a.applyQuaternion(s)),p.setXYZ(C,a.x,a.y,a.z)),g.setXYZ(C,n.x,n.y-o,n.z)}x.setAttribute("color",new je(_,3)),x.setAttribute("sp",new je(S,3)),x.setAttribute("skinIndex",new lr(b,4)),x.setAttribute("skinWeight",new dt(v,4));let T=m.material.name==="helm_gold"?qS():GS(m.material),y=x.index?x.index.array:Array.from({length:g.count},(C,P)=>P),w=[];for(let C=0;C<y.length;C+=3){let P=(M[y[C]]===7)+(M[y[C+1]]===7)+(M[y[C+2]]===7);(P===0||P===3)&&w.push(y[C],y[C+1],y[C+2])}u.push([x,T,w]),d.push(M)});let f=o-l;Oa.length=0;for(let m of[-1,1]){let x=m<0?0:1,[g,p]=ff(m);Oa.push([0,g,_t.S.clone().setX(m*_t.S.x)],[g,p,_t.E.clone().setX(m*_t.E.x)],[0,1+x,new R(m*.1,0,c)],[1+x,3+x,new R(m*.1,0,c+f)])}Ki.length=0;for(let m=0;m<10;m++){let x=new Jt,g=!1;u.forEach(([p],_)=>{let M=p.attributes.position,b=d[_];for(let v=0;v<M.count;v++)b[v]===m&&(x.expandByPoint(n.fromBufferAttribute(M,v)),g=!0)}),Ki.push(g?{c:x.getCenter(new R),size:x.getSize(new R)}:{c:new R,size:new R(.12,.12,.12)})}u.forEach(([m])=>m.scale(jn,jn,jn)),Ki.forEach(m=>{m.c.multiplyScalar(jn),m.size.multiplyScalar(jn)}),Oa.forEach(m=>m[2].multiplyScalar(jn)),_t.scaled||(_t.S.multiplyScalar(jn),_t.E.multiplyScalar(jn),_t.H.multiplyScalar(jn),_t.scaled=!0);for(let m=0;m<2;m++)Zo[m]={hip:Oa.find(x=>x[0]===0&&x[1]===1+m)[2],knee:Oa.find(x=>x[0]===1+m&&x[1]===3+m)[2],shin:.5*jn};return u}var jg=i=>Array.from({length:10},(e,t)=>{let n=Ki[t===7&&!i?0:t].c;return new ze().makeTranslation(-n.x,-n.y,-n.z)});function jS(i){BS.forEach((e,t)=>{let n=new It;n.position.set(...e),n.rotation.y=Math.PI/2;let s=[];for(let c=0;c<10;c++){if(c===7){s.push(s[0]);continue}let h=new rs;n.add(h),s.push(h)}let r=new Fs(s,jg(!1)),a=i.map(([c,h,u])=>[c,t===0&&/^(base_002|helmet)$/.test(h.name)?WS(h):h,u]);a.forEach(([c,h])=>{let u=new Ls(c,h);u.castShadow=!0,u.frustumCulled=!1,u.bind(r,new ze),n.add(u)});let o=c=>t===0&&c<0?new R(-(mh.z-e[2]),mh.y-e[1],mh.x-e[0]):new R(c*.27,-.02,.16),l=KS[t];n.userData={parts:a,bones:s,grips:[o(-1),o(1)],P:l,st:{lx:0,lz:0,vx:0,vz:0,y:0,vy:0,v:null,hands:[o(-1),o(1)],up:0,yaw:0,vyaw:0,look:0,lookT:1+t*2,fx:0,fz:0,t:t*7}},n.visible=!1,Ge.add(n),ln.push(n),Eh(n)})}var jn=.92,qd={t:0},Zo=[],KS=[{K:68,C:5.2,kg:.22,ks:1700,tau:.05,fid:.035,look:.12,ph:.3,bal:.55,glance:.55},{K:50,C:3.6,kg:.36,ks:1300,tau:.14,fid:.055,look:.5,ph:2.1,bal:1.05,glance:.35}],wi={rolled:!1,on:!1,t:0},ef=new R(0,1,0),Sh=new R,gh=new R,tf=new R,Kg=new R,Yg=new R,ka=new R,YS=new ht,Ha=new ht,JS=new ht,ZS=new R,$S=new R,QS=new R,e1=new R;function Da(i,e,t,n,s){i[e].quaternion.copy(t),i[e].position.copy(Ki[e].c).sub(n).applyQuaternion(t).add(s)}function Eh(i){let{bones:e,st:t}=i.userData,n=ZS.set(0,t.y,0),s=YS.setFromUnitVectors(ef,gh.set(t.lx,1,t.lz).normalize()).multiply(Ha.setFromAxisAngle(ef,t.yaw));if(Da(e,0,s,Sh.set(0,0,0),n),t.legs)for(let r=0;r<2;r++){let[a,o]=t.legs[r],l=Zo[r],c=wn.setFromAxisAngle(Nr.set(1,0,0),a);Da(e,1+r,c,l.hip,Jo.copy(l.hip).add(n));let h=Cr.copy(l.knee).sub(l.hip).applyQuaternion(c).add(l.hip).add(n);Da(e,3+r,Ha.setFromAxisAngle(Nr.set(1,0,0),a+o),l.knee,h)}else for(let r of[1,2,3,4])Da(e,r,JS,Sh.set(0,0,0),n);for(let r of[-1,1]){let[a,o]=ff(r),l=tf.copy(_t.S).setX(r*_t.S.x),c=Kg.copy(_t.E).setX(r*_t.E.x),h=Yg.copy(_t.H).setX(r*_t.H.x),u=l.distanceTo(c),d=c.distanceTo(h),f=$S.copy(l).applyQuaternion(s).add(n),m=e1.copy(t.hands[r<0?0:1]).sub(f),x=Math.max(Math.abs(u-d)+.01,Math.min(u+d-.002,m.length()));m.normalize();let g=(u*u-d*d+x*x)/(2*x),p=Math.sqrt(Math.max(0,u*u-g*g)),_=ka.set(r*(.7+.3*t.up),-.8+1*t.up,-.6+.4*t.up);_.addScaledVector(m,-_.dot(m)).normalize();let M=QS.copy(f).addScaledVector(m,g).addScaledVector(_,p),b=m.multiplyScalar(x).add(f),v=new ht().setFromUnitVectors(gh.copy(c).sub(l).normalize(),ka.copy(M).sub(f).normalize());t.up>.01&&v.premultiply(Ha.setFromAxisAngle(ka.copy(M).sub(f).normalize(),r*Math.PI/4*t.up));let S=new ht().setFromUnitVectors(gh.copy(h).sub(c).normalize().applyQuaternion(v),ka.copy(b).sub(M).normalize()).multiply(v);t.up>.01&&S.premultiply(Ha.setFromAxisAngle(ka.copy(b).sub(M).normalize(),r*Math.PI/4*t.up)),Da(e,a,v,l,f),Da(e,o,S,c,M),(t.hand||(t.hand=[new R,new R]))[r<0?0:1].copy(b)}}var pt={mode:"",t:0,len:0,side:0,aim:0,w:[0,0],hand:[new R,new R],seen:new Set,camT:10},Qm=new R;function t1(i,e,t,n,s,r){let a=null,o=1e9,l=0,c=null;i.updateWorldMatrix(!0,!1);for(let d of Or){if(d.kind==="find")continue;let[f,m,x]=d.at(),g=Math.hypot(f-N.p.x,m-N.p.z);if(g>300&&pt.seen.delete(d.name),g>260||g>o)continue;let p=i.worldToLocal(Qm.set(f,Mt(f,m)+x*.3,m)).normalize(),_=Math.atan2(p.x,p.z);Math.abs(_)<1.6&&(o=g,a=d,l=_,c=(c||new R).copy(p))}let h=!!c;pt.mode&&(pt.t+=e),(s>5||wi.on||pt.mode&&pt.t>pt.len)&&(pt.mode=""),!pt.mode&&!wi.on&&(h&&o<150&&r>.8&&Math.abs(l)<1.3&&!pt.seen.has(a.name)?(pt.seen.add(a.name),Object.assign(pt,{mode:"point",t:0,len:2.8,side:l>0?1:0})):r<1.5&&(pt.camT-=e)<0&&(pt.camT=12+Math.random()*12,Object.assign(pt,{mode:"photo",t:0,len:2.6,aim:h?Math.max(-.45,Math.min(.45,l)):(Math.random()-.5)*.8})));let u=pt.mode?ot(0,.45,pt.t)*(1-ot(pt.len-.5,pt.len,pt.t)):0;if(pt.w[0]=pt.w[1]=0,pt.mode==="point"&&c){let d=pt.side,f=d?1:-1;pt.hand[d].set(f*_t.S.x,_t.S.y,_t.S.z).addScaledVector(Qm.set(c.x,Math.max(.15,c.y+.2),c.z).normalize(),.6*jn),pt.w[d]=u,t=Math.max(-.5,Math.min(.5,l))*.8}else if(pt.mode==="photo"){for(let d=0;d<2;d++)pt.hand[d].set(d?.075:-.075,.27,.21).multiplyScalar(jn),pt.w[d]=u;t=pt.aim}else h&&!n&&(t=Math.max(-.5,Math.min(.5,l)));return t}function n1(i){if(i){!Ke.grounded&&Ke.t>1&&!wi.rolled&&(wi.rolled=!0,wi.on=Math.random()<.12),Ke.grounded&&(wi.rolled=!1,wi.on&&(wi.t+=i)>.6&&(wi.on=!1,wi.t=0));for(let e of ln){let{st:t,P:n,grips:s}=e.userData;if(ae.on){Object.assign(t,{lx:0,lz:0,vx:0,vz:0,y:0,vy:0,v:null});continue}if(cn.on&&e===ln[1]){Zg(e,i);continue}let r=gh.copy(e.position).applyQuaternion(N.q),a=tf.copy(N.w).cross(r).add(N.v);t.v||(t.v=a.clone());let o=Kg.copy(a).sub(t.v).divideScalar(i);t.v.copy(a),o.lengthSq()>900&&o.setLength(30);let l=Ha.copy(N.q).multiply(e.quaternion).invert(),c=Yg.set(0,-Ur,0).sub(o).applyQuaternion(l),h=ka.set(0,1,0).applyQuaternion(l),u=Math.abs(c.y+Ur*h.y);e===ln[0]&&(qd.t-=i,u>6&&qd.t<0&&(qd.t=.3,Ia(u>12?35:15))),u>4&&(t.vx+=(Math.random()-.5)*u*.07,t.vz+=(Math.random()-.5)*u*.05,t.vyaw+=(Math.random()-.5)*u*.05);let d=1-Math.exp(-i/n.tau);t.fx+=(c.x-t.fx)*d,t.fz+=(c.z-t.fz)*d,t.t+=i;let f=n.fid,m=f*(Math.sin(t.t*.61+n.ph)+.6*Math.sin(t.t*1.37+2*n.ph)),x=f*.7*Math.sin(t.t*.83+3*n.ph);(t.lookT-=i)<0&&(t.lookT=2.5+Math.random()*4,t.look=Math.random()<.35?0:(Math.random()-.5)*2*n.look);let g=tf.copy(N.v).applyQuaternion(l),p=Math.hypot(g.x,g.z),_=p>1.5?Math.atan2(g.x,g.z):0,M=Math.abs(_)>.15&&Math.abs(_)<2.6?Math.max(-.35,Math.min(.35,_*n.glance)):0,b=M+t.look*(M?.6:1);e===ln[1]&&(b=t1(e,i,b,M,u,p)),t.vyaw+=i*(14*(b-t.yaw)-6.5*t.vyaw),t.yaw=Math.max(-.5,Math.min(.5,t.yaw+i*t.vyaw));let v=Math.ceil(i/.004),S=i/v;for(let w=0;w<v;w++){t.vx+=S*(n.K*(h.x*n.bal+m-t.lx)+n.kg*n.K*t.fx/2.5-n.C*t.vx),t.vz+=S*(n.K*(h.z*n.bal+x-t.lz)+n.kg*n.K*t.fz/2.5-n.C*t.vz);let C=Math.hypot(t.lx,t.lz);if(C>.35){let F=-3*n.K*(C-.35)/C*S;t.vx+=F*t.lx,t.vz+=F*t.lz}t.lx+=S*t.vx,t.lz+=S*t.vz;let P=t.y<0?-n.ks*t.y-40*t.vy:t.y>.05?-n.ks*(t.y-.05)-40*t.vy:0;t.vy+=S*(c.y+P),t.y+=S*t.vy}let T=Math.hypot(t.lx,t.lz);T>.5&&(t.lx*=.5/T,t.lz*=.5/T),t.y=Math.max(-.03,Math.min(.09,t.y));let y=wi.on&&e===ln[1]?1:0;t.up+=(y-t.up)*(1-Math.exp(-i*(y?7:4)));for(let w=0;w<2;w++)t.hands[w].copy(s[w]).lerp(Sh.set(w?.29:-.29,.95,.2).multiplyScalar(jn),t.up);if(e===ln[1])for(let w=0;w<2;w++)pt.w[w]>0&&t.hands[w].lerp(pt.hand[w],pt.w[w]);Eh(e)}}}var cn={on:!1,t:0,st:null,opened:!1,scoop:null},qo=new R(-.66,.16,.33),Xs=new R(-.5,0,1.2),Rr=new R(.2,0,2.25),i1=[{find:"76535,0",in:(i,e)=>Math.hypot(i-xt.x,e-xt.z)<30,what:"a sample beside the boulder"},{find:"79115,0",in:(i,e)=>Math.abs(Math.hypot(i-Ri.x,e-Ri.z)-50)<22,what:"a piece of a boulder on the rim"},{find:"74220,0",in:(i,e)=>Math.abs(Math.hypot(i-rt.x,e-rt.z)-rt.R)<22,what:"the orange soil"}].map(i=>Object.assign(i,{here:!1,done:!1,hint:!1,still:0}));function s1(i){let e=cn.on||ae.on||Lt.on||Ae.on||Vt.on||bt.on||Fe.on,t=Math.hypot(N.v.x,N.v.z);for(let n of i1){if(!n.in(N.p.x,N.p.z)){n.here=n.done=n.hint=!1,n.still=0;continue}if(n.here=!0,!(e||n.done)&&(n.hint||(n.hint=!0,An(`Stop here and Schmitt climbs out for ${n.what}`)),n.still=t<.4?n.still+i:0,n.still>.8)){let r=Or.find(a=>a.name===n.find);r&&Jg(r)&&(n.done=!0,An("Harrison Schmitt climbs out to take the sample"))}}}function Jg(i){if(cn.on||!ln[1]||!ln[1].visible||ae.on||N.v.length()>1.2)return!1;if(Object.assign(cn,{on:!0,t:0,st:i,opened:!1}),!cn.scoop){let e=new It,t=new on({color:12104876,roughness:.5,metalness:.6}),n=new st(new fr(.012,.012,1,8),t);n.position.y=.5,e.add(n);let s=new st(new yi(.09,.03,.12),t);s.position.y=1,e.add(s),e.userData.pan=s,e.traverse(r=>{r.castShadow=!0}),cn.scoop=e}return ln[1].add(cn.scoop),cn.scoop.visible=!0,!0}var lh=(i,e,t,n)=>n.copy(i).lerp(e,t);function Zg(i,e){let t=cn.t+=e,n=i.userData.st,s=(D,I)=>ot(D,I,t),r=jn,a=n,o=(D,I)=>{let O=Math.max(0,Math.min(1,(t-D)/(I-D)));return{u:O*O*(3-2*O),on:O>0&&O<1,ph:(t-D)*5.6}},l=D=>{let I=Math.abs(Math.sin(D.ph)),O=.22*Math.sin(D.ph),B=D.on?.4*(1-I):0;return{legs:[[x[0]+O-B*.5,x[1]-Math.max(0,-O)*.6+B],[x[0]-O-B*.5,x[1]-Math.max(0,O)*.6+B]],y:D.on?.11*Math.pow(I,.6):0}},c=s(5,5.5)-s(5.9,6.2),h=new R,u,d,f=0,m,x=[1.45,-1.35],g=[0,0],p=D=>Sh.set(D?.24:-.24,-.38,.06).multiplyScalar(r).clone();if(t<1.1){let D=s(0,1.1);lh(qo,Xs,s(.2,1.1),h),h.y=0,u=Math.PI/2*(1-D),d=[x.map(I=>I*D),x.map(I=>I*D)],m=null}else if(t<2.7){let D=o(1.1,2.7);lh(Xs,Rr,D.u,h),u=Math.atan2(Rr.x-Xs.x,Rr.z-Xs.z);let I=l(D);d=I.legs,h.y=I.y,f=.14*(D.on?1:0)}else if(t<6.2)h.copy(Rr),u=0,d=[[1.25,-1+.15*c],[1.3,-1.1+.15*c]],f=.18-.32*c;else if(t<7.8){let D=o(6.2,7.8);lh(Rr,Xs,D.u,h),u=Math.atan2(Xs.x-Rr.x,Xs.z-Rr.z);let I=l(D);d=I.legs,h.y=I.y,f=.14*(D.on?1:0)}else if(t<9){let D=1-s(7.8,9);lh(qo,Xs,1-s(7.8,8.7),h),h.y=0,u=Math.PI/2*(1-D),d=[x.map(I=>I*D),x.map(I=>I*D)]}else{cn.on=!1,cn.scoop.visible=!1,i.position.copy(qo),i.rotation.y=Math.PI/2,n.legs=null,n.hands[0].copy(i.userData.grips[0]),n.hands[1].copy(i.userData.grips[1]),n.v=null,Eh(i);return}n.legs=d,n.lx=0,n.lz=f,n.yaw=0,n.y=0,n.up=0;let _=wn.setFromAxisAngle(Nr.set(1,0,0),d[0][0]),b=Cr.copy(Zo[0].knee).sub(Zo[0].hip).applyQuaternion(_).add(Jo.set(0,-Zo[0].shin,0).applyQuaternion(Ha.setFromAxisAngle(Nr.set(1,0,0),d[0][0]+d[0][1]))),v=t<1.1?1-s(0,1.1):t>=7.8?s(7.8,9):0,S=Ge.localToWorld(vh.set(h.x,0,h.z)),T=Ge.worldToLocal(Zd.set(S.x,Mt(S.x,S.z),S.z)).y,y=T-b.y+h.y;i.position.set(h.x,qo.y+(y-qo.y)*(1-v),h.z),i.rotation.y=u;let w=i.userData.grips;if(t<1.1||t>=7.8)n.hands[0].copy(w[0]).lerp(p(0),1-v),n.hands[1].copy(w[1]).lerp(p(1),1-v);else if(t<2.7||t>=6.2){let D=.05*Math.sin((t-(t<2.7?1.1:6.2))*5.6);for(let I=0;I<2;I++)n.hands[I].set(I?.31:-.31,-.22,.13+(I?-D:D)).multiplyScalar(r)}else{let D=s(3.1,3.9)-s(4.4,5.2);n.hands[0].set(-.14,-.08+.1*s(4.4,5.2)+.22*c,.32-.04*c).multiplyScalar(r),n.hands[1].set(.18,-.2,.2).multiplyScalar(r),n.hands[0].z+=.06*D}Eh(i);let C=cn.scoop,P=n.hand[0],F=t>2.4&&t<6.6;if(C.visible=F,F){let D=T-i.position.y+.03+.45*s(4.4,5.4)+.55*c,O=$d.set(-.12*r,D,(.82-.2*s(3.1,3.9)-.2*c)*r).clone().sub(P),B=O.length();C.position.copy(P),C.quaternion.setFromUnitVectors(ef,O.normalize()),C.scale.set(1,B,1),C.userData.pan.scale.set(1,1/B,1)}!cn.opened&&t>5.5&&(cn.opened=!0,Wg(cn.st))}function r1(){let i=new It,e=new on({color:3815996,roughness:.6,metalness:.4}),t=new st(new fr(.014,.018,.33,10),e);t.position.y=-.17;let n=new st(new fr(.017,.017,.12,10),e);return n.rotation.z=Math.PI/2,i.add(t,n),i.position.copy(mh),i.traverse(s=>{s.castShadow=!0}),i}(async()=>{re("loadmsg").textContent="Shaping the valley\u2026",await new Promise(t=>setTimeout(t,30));try{let t=await fetch("../models/moon-a17.bin");t.ok&&(bh=new Int16Array(await t.arrayBuffer()),ng=tg(0,0))}catch{}xM(),bM(),EM(),wM(),pg(0,0),Dt.add(rf),FM(),DM(),GM(),tc(),bh&&RM(),Zi(0,0,Math.atan2(350,82)),re("loadmsg").textContent="Unloading the rover\u2026";let[i,e]=await Promise.all([kd.loadAsync("../models/lrv.glb").catch(()=>null),kd.loadAsync("../models/lm.glb").catch(()=>null)]);if(i){let t=i.scene;Bm(t),t.updateMatrixWorld(!0),t.position.y=-.78-new Jt().setFromObject(t).min.y,Ge.add(t,r1()),AS(),RS(),lS()}else Ge.add(new st(new yi(3.1,.5,2.06),new on({color:12170928})));{let t="";for(let n=0;n<2&&!ln.length;n++)try{let s=await kd.loadAsync("../models/astronaut-a7l.glb");jS(XS(VS(s.scene)))}catch(s){t=s&&s.message||String(s),console.error("crew",s)}ln.length||setTimeout(()=>An("The astronauts could not be loaded on this device"+(t?" \xB7 "+t.slice(0,60):"")),4e3)}if(e){let t=e.scene;Bm(t),ZM(t);let n=Ye.x,s=Ye.z;Ye.y=Mt(n,s),Ye.on=!0;let r=[[4.1,0],[-4.1,0],[0,4.1],[0,-4.1]].map(([c,h])=>Mt(n+c,s+h)),a=new R(r[1]-r[0],8.2,r[3]-r[2]).normalize();t.quaternion.setFromUnitVectors(new R(0,1,0),a).multiply(new ht().setFromAxisAngle(new R(0,1,0),-Math.PI/2)),t.position.set(n,0,s),t.updateMatrixWorld(!0);let o=1e9,l=new R;t.traverse(c=>{if(!c.isMesh)return;let h=c.geometry.attributes.position;for(let u=0;u<h.count;u+=2)l.fromBufferAttribute(h,u).applyMatrix4(c.matrixWorld),o=Math.min(o,l.y-Mt(l.x,l.z))}),t.position.y=-o-.03,Dt.add(t)}re("loading").classList.remove("on"),re("brief").classList.add("on"),requestAnimationFrame(t=>{Qd=t,ph(t)})})();window.__lrv={SHORTY:rt,ORB:At,WHEEL_PARTS:Ci,WHEELS:Rn,rover:Ge,CRASH:ae,stepDebris:Lg,INTRO:Ae,SEC:qe,BOULDER:xt,SLABS:wh,VAN:Ri,SITES:Or,openSite:Gg,OBJ:Ft,CPS:Lr,RUN:Fe,breakApart:Rg,EARTH:Eg,look:null,car:N,AIR:Ke,step:Yd,ground:Mt,place:Zi,tick:(i,e=1/60)=>{for(let t=0;t<i;t++)for(let s=0;s<4;s++)Yd(e/4)},set:(i,e)=>{ji=i,za=e,$o=!1},craters:ei};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
