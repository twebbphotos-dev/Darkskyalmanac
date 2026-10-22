/*! Dark Sky Almanac © 2026 Tyler Webb · Zion Canyon Light. All rights reserved. Third-party license notices are kept below. */
var _p=0,bu=1,yp=2;var Sr=1,vp=2,Ta=3,Vi=0,Un=1,jn=2,Gi=0,Aa=1,_u=2,yu=3,vu=4,Mp=5;var wr=100,Sp=101,wp=102,Ep=103,Tp=104,Ap=200,Rp=201,Cp=202,Pp=203,Mu=204,Su=205,Ip=206,Lp=207,Dp=208,Fp=209,Np=210,Up=211,Op=212,zp=213,kp=214,kc=0,Bc=1,Hc=2,ca=3,Vc=4,Gc=5,Wc=6,qc=7,wu=0,Bp=1,Hp=2,wi=0,Eu=1,Tu=2,Au=3,Ro=4,Ru=5,Cu=6,Pu=7,ru="attached",Vp="detached",Iu=300,js=301,Er=302,Ra=303,hl=304,Co=306,Hn=1e3,ci=1001,la=1002,an=1003,ul=1004;var Tr=1005;var Zt=1006,Ca=1007;var ei=1008;var Kn=1009,Lu=1010,Du=1011,Pa=1012,dl=1013,Ei=1014,ti=1015,Ti=1016,fl=1017,pl=1018,Ia=1020,Fu=35902,Nu=35899,Uu=1021,Ou=1022,ni=1023,zi=1026,Ks=1027,ml=1028,gl=1029,Ys=1030,xl=1031;var bl=1033,Po=33776,Io=33777,Lo=33778,Do=33779,_l=35840,yl=35841,vl=35842,Ml=35843,Sl=36196,wl=37492,El=37496,Tl=37488,Al=37489,Fo=37490,Rl=37491,Cl=37808,Pl=37809,Il=37810,Ll=37811,Dl=37812,Fl=37813,Nl=37814,Ul=37815,Ol=37816,zl=37817,kl=37818,Bl=37819,Hl=37820,Vl=37821,Gl=36492,Wl=36494,ql=36495,Xl=36283,jl=36284,No=36285,Kl=36286;var pr=2300,mr=2301,Uc=2302,au=2303,ou=2400,cu=2401,lu=2402,Gp=2500;var zu=0,Uo=1,La=2,Wp=3200,ku=3201;var Yl=0,qp=1,li="",Gt="srgb",Fn="srgb-linear",ho="linear",Tt="srgb";var Oc=7680;var Xp=519,jp=512,Kp=513,Yp=514,Jl=515,Jp=516,Zp=517,Zl=518,$p=519,Bu=35044;var Hu="300 es",_i=2e3,ha=2001;function y0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function v0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qp(){let i=ua("canvas");return i.style.display="block",i}var Ff={},da=null;function uo(...i){let e="THREE."+i.shift();da?da("log",e,...i):console.log(e,...i)}function em(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=em(i);let e="THREE."+i.shift();if(da)da("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ze(...i){i=em(i);let e="THREE."+i.shift();if(da)da("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function fr(...i){let e=i.join(" ");e in Ff||(Ff[e]=!0,Ce(...i))}function tm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var nm={[kc]:Bc,[Hc]:Wc,[Vc]:qc,[ca]:Gc,[Bc]:kc,[Wc]:Hc,[qc]:Vc,[Gc]:ca},ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=1234567,co=Math.PI/180,gr=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Vu(i,e){return(i%e+e)%e}function M0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function S0(i,e,t){return i!==e?(t-i)/(e-i):0}function lo(i,e,t){return(1-t)*i+t*e}function w0(i,e,t,n){return lo(i,e,1-Math.exp(-t*n))}function E0(i,e=1){return e-Math.abs(Vu(i,e*2)-e)}function T0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function A0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function R0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function C0(i,e){return i+Math.random()*(e-i)}function P0(i){return i*(.5-Math.random())}function I0(i){i!==void 0&&(Nf=i);let e=Nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L0(i){return i*co}function D0(i){return i*gr}function F0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function N0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function U0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function O0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gu={DEG2RAD:co,RAD2DEG:gr,generateUUID:yi,clamp:at,euclideanModulo:Vu,mapLinear:M0,inverseLerp:S0,lerp:lo,damp:w0,pingpong:E0,smoothstep:T0,smootherstep:A0,randInt:R0,randFloat:C0,randFloatSpread:P0,seededRandom:I0,degToRad:L0,radToDeg:D0,isPowerOfTwo:F0,ceilPowerOfTwo:N0,floorPowerOfTwo:U0,setQuaternionFromProperEuler:O0,normalize:Pt,denormalize:bi},He=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(u!==b||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*b;g<0&&(d=-d,f=-f,m=-m,b=-b,g=-g);let p=1-o;if(g<.9995){let _=Math.acos(g),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+b*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+b*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nh=new C,Uf=new ft,ke=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=s[0],g=s[3],p=s[6],_=s[1],M=s[4],x=s[7],v=s[2],S=s[5],T=s[8];return r[0]=a*b+o*_+l*v,r[3]=a*g+o*M+l*S,r[6]=a*p+o*x+l*T,r[1]=c*b+h*_+u*v,r[4]=c*g+h*M+u*S,r[7]=c*p+h*x+u*T,r[2]=d*b+f*_+m*v,r[5]=d*g+f*M+m*S,r[8]=d*p+f*x+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(s*c-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uh.makeScale(e,t)),this}rotate(e){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uh.makeRotation(-e)),this}translate(e,t){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Uh=new ke,Of=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zf=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z0(){let i={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Tt&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(s.r=oa(s.r),s.g=oa(s.g),s.b=oa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?ho:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fn]:{primaries:e,whitePoint:n,transfer:ho,toXYZ:Of,fromXYZ:zf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:Of,fromXYZ:zf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var et=z0();function cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jr,Xc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jr===void 0&&(jr=ua("canvas")),jr.width=e.width,jr.height=e.height;let s=jr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=jr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ua("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},k0=0,fa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Oh(s[a].image)):r.push(Oh(s[a]))}else r=Oh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Oh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var B0=0,zh=new C,pn=class i extends ki{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ci,s=ci,r=Zt,a=ei,o=ni,l=Kn,c=i.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=yi(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hn:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hn:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Iu;pn.DEFAULT_ANISOTROPY=1;var xt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,x=(f+1)/2,v=(p+1)/2,S=(h+d)/4,T=(u+b)/4,y=(m+g)/4;return M>x&&M>v?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=T/n):x>v?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=y/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=T/r,s=y/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jc=class extends ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new pn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends jc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fo=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kc=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ve=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,b,g)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Kr.setFromMatrixColumn(e,0).length(),r=1/Kr.setFromMatrixColumn(e,1).length(),a=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,b=c*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,b=c*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H0,e,V0)}lookAt(e,t,n){let s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Ls.crossVectors(n,Zn),Ls.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Ls.crossVectors(n,Zn)),Ls.normalize(),uc.crossVectors(Zn,Ls),s[0]=Ls.x,s[4]=uc.x,s[8]=Zn.x,s[1]=Ls.y,s[5]=uc.y,s[9]=Zn.y,s[2]=Ls.z,s[6]=uc.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],_=n[3],M=n[7],x=n[11],v=n[15],S=s[0],T=s[4],y=s[8],E=s[12],R=s[1],P=s[5],F=s[9],D=s[13],I=s[2],O=s[6],B=s[10],X=s[14],te=s[3],q=s[7],J=s[11],Q=s[15];return r[0]=a*S+o*R+l*I+c*te,r[4]=a*T+o*P+l*O+c*q,r[8]=a*y+o*F+l*B+c*J,r[12]=a*E+o*D+l*X+c*Q,r[1]=h*S+u*R+d*I+f*te,r[5]=h*T+u*P+d*O+f*q,r[9]=h*y+u*F+d*B+f*J,r[13]=h*E+u*D+d*X+f*Q,r[2]=m*S+b*R+g*I+p*te,r[6]=m*T+b*P+g*O+p*q,r[10]=m*y+b*F+g*B+p*J,r[14]=m*E+b*D+g*X+p*Q,r[3]=_*S+M*R+x*I+v*te,r[7]=_*T+M*P+x*O+v*q,r[11]=_*y+M*F+x*B+v*J,r[15]=_*E+M*D+x*X+v*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15],_=l*f-c*d,M=o*f-c*u,x=o*d-l*u,v=a*f-c*h,S=a*d-l*h,T=a*u-o*h;return t*(b*_-g*M+p*x)-n*(m*_-g*v+p*S)+s*(m*M-b*v+p*T)-r*(m*x-b*S+g*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],_=t*o-n*a,M=t*l-s*a,x=t*c-r*a,v=n*l-s*o,S=n*c-r*o,T=s*c-r*l,y=h*b-u*m,E=h*g-d*m,R=h*p-f*m,P=u*g-d*b,F=u*p-f*b,D=d*p-f*g,I=_*D-M*F+x*P+v*R-S*E+T*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return e[0]=(o*D-l*F+c*P)*O,e[1]=(s*F-n*D-r*P)*O,e[2]=(b*T-g*S+p*v)*O,e[3]=(d*S-u*T-f*v)*O,e[4]=(l*R-a*D-c*E)*O,e[5]=(t*D-s*R+r*E)*O,e[6]=(g*x-m*T-p*M)*O,e[7]=(h*T-d*x+f*M)*O,e[8]=(a*F-o*R+c*y)*O,e[9]=(n*R-t*F-r*y)*O,e[10]=(m*S-b*x+p*_)*O,e[11]=(u*x-h*S-f*_)*O,e[12]=(o*E-a*P-l*y)*O,e[13]=(t*P-n*E+s*y)*O,e[14]=(b*M-m*v-g*_)*O,e[15]=(h*v-u*M+d*_)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,b=a*h,g=a*u,p=o*u,_=l*c,M=l*h,x=l*u,v=n.x,S=n.y,T=n.z;return s[0]=(1-(b+p))*v,s[1]=(f+x)*v,s[2]=(m-M)*v,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+p))*S,s[6]=(g+_)*S,s[7]=0,s[8]=(m+M)*T,s[9]=(g-_)*T,s[10]=(1-(d+b))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Kr.set(s[0],s[1],s[2]).length(),o=Kr.set(s[4],s[5],s[6]).length(),l=Kr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pi.copy(this);let c=1/a,h=1/o,u=1/l;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=u,pi.elements[9]*=u,pi.elements[10]*=u,t.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=_i,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,b;if(l)m=r/(a-r),b=a*r/(a-r);else if(o===_i)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===ha)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_i,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,b;if(l)m=1/(a-r),b=a/(a-r);else if(o===_i)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===ha)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Kr=new C,pi=new Ve,H0=new C(0,0,0),V0=new C(1,1,1),Ls=new C,uc=new C,Zn=new C,kf=new Ve,Bf=new ft,vi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},G0=0,Hf=new C,Yr=new ft,ns=new Ve,dc=new C,eo=new C,W0=new C,q0=new ft,Vf=new C(1,0,0),Gf=new C(0,1,0),Wf=new C(0,0,1),qf={type:"added"},X0={type:"removed"},Jr={type:"childadded",child:null},kh={type:"childremoved",child:null},Wt=class i extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new vi,n=new ft,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ke}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Vf,e)}rotateY(e){return this.rotateOnAxis(Gf,e)}rotateZ(e){return this.rotateOnAxis(Wf,e)}translateOnAxis(e,t){return Hf.copy(e).applyQuaternion(this.quaternion),this.position.add(Hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vf,e)}translateY(e){return this.translateOnAxis(Gf,e)}translateZ(e){return this.translateOnAxis(Wf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dc.copy(e):dc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(eo,dc,this.up):ns.lookAt(dc,eo,this.up),this.quaternion.setFromRotationMatrix(ns),s&&(ns.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(ns),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qf),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),kh.child=e,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ns.multiply(e.parent.matrixWorld)),e.applyMatrix4(ns),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qf),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,W0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new C(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},j0={type:"move"},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},fc={h:0,s:0,l:0};function Bh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Vu(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bh(a,r,e+1/3),this.g=Bh(a,r,e),this.b=Bh(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=im[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return et.workingToColorSpace(Rn.copy(this),e),Math.round(at(Rn.r*255,0,255))*65536+Math.round(at(Rn.g*255,0,255))*256+Math.round(at(Rn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Rn.copy(this),t);let n=Rn.r,s=Rn.g,r=Rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Gt){et.workingToColorSpace(Rn.copy(this),e);let t=Rn.r,n=Rn.g,s=Rn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(fc);let n=lo(Ds.h,fc.h,t),s=lo(Ds.s,fc.s,t),r=lo(Ds.l,fc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new De;De.NAMES=im;var ga=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mi=new C,is=new C,Hh=new C,ss=new C,Zr=new C,$r=new C,Xf=new C,Vh=new C,Gh=new C,Wh=new C,qh=new xt,Xh=new xt,jh=new xt,zs=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),is.subVectors(n,t),Hh.subVectors(e,t);let a=mi.dot(mi),o=mi.dot(is),l=mi.dot(Hh),c=is.dot(is),h=is.dot(Hh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ss.x),l.addScaledVector(a,ss.y),l.addScaledVector(o,ss.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return qh.setScalar(0),Xh.setScalar(0),jh.setScalar(0),qh.fromBufferAttribute(e,t),Xh.fromBufferAttribute(e,n),jh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(qh,r.x),a.addScaledVector(Xh,r.y),a.addScaledVector(jh,r.z),a}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),is.subVectors(e,t),mi.cross(is).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),is.subVectors(this.a,this.b),mi.cross(is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Zr.subVectors(s,n),$r.subVectors(r,n),Vh.subVectors(e,n);let l=Zr.dot(Vh),c=$r.dot(Vh);if(l<=0&&c<=0)return t.copy(n);Gh.subVectors(e,s);let h=Zr.dot(Gh),u=$r.dot(Gh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Zr,a);Wh.subVectors(e,r);let f=Zr.dot(Wh),m=$r.dot(Wh);if(m>=0&&f<=m)return t.copy(r);let b=f*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector($r,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Xf.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Xf,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Zr,a).addScaledVector($r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$t=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pc.copy(n.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),mc.subVectors(this.max,to),Qr.subVectors(e.a,to),ea.subVectors(e.b,to),ta.subVectors(e.c,to),Fs.subVectors(ea,Qr),Ns.subVectors(ta,ea),lr.subVectors(Qr,ta);let t=[0,-Fs.z,Fs.y,0,-Ns.z,Ns.y,0,-lr.z,lr.y,Fs.z,0,-Fs.x,Ns.z,0,-Ns.x,lr.z,0,-lr.x,-Fs.y,Fs.x,0,-Ns.y,Ns.x,0,-lr.y,lr.x,0];return!Kh(t,Qr,ea,ta,mc)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,Qr,ea,ta,mc))?!1:(gc.crossVectors(Fs,Ns),t=[gc.x,gc.y,gc.z],Kh(t,Qr,ea,ta,mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rs=[new C,new C,new C,new C,new C,new C,new C,new C],gi=new C,pc=new $t,Qr=new C,ea=new C,ta=new C,Fs=new C,Ns=new C,lr=new C,to=new C,mc=new C,gc=new C,hr=new C;function Kh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hr.fromArray(i,r);let o=s.x*Math.abs(hr.x)+s.y*Math.abs(hr.y)+s.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),h=n.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var hn=new C,xc=new He,K0=0,Ze=class extends ki{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bu,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xc.fromBufferAttribute(this,t),xc.applyMatrix3(e),this.setXY(t,xc.x,xc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var xr=class extends Ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var po=class extends Ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends Ze{constructor(e,t,n){super(new Float32Array(e),t,n)}},Y0=new $t,no=new C,Yh=new C,Gn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Y0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);let t=no.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(no,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Yh)),this.expandByPoint(no.copy(e.center).sub(Yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},J0=0,oi=new Ve,Jh=new Wt,na=new C,$n=new $t,io=new $t,yn=new C,At=class i extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y0(e)?po:xr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];io.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors($n.min,io.min),$n.expandByPoint(yn),yn.addVectors($n.max,io.max),$n.expandByPoint(yn)):($n.expandByPoint(io.min),$n.expandByPoint(io.max))}$n.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yn.fromBufferAttribute(o,c),l&&(na.fromBufferAttribute(e,c),yn.add(na)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new C,l[y]=new C;let c=new C,h=new C,u=new C,d=new He,f=new He,m=new He,b=new C,g=new C;function p(y,E,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[y].add(b),o[E].add(b),o[R].add(b),l[y].add(g),l[E].add(g),l[R].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,E=_.length;y<E;++y){let R=_[y],P=R.start,F=R.count;for(let D=P,I=P+F;D<I;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new C,x=new C,v=new C,S=new C;function T(y){v.fromBufferAttribute(s,y),S.copy(v);let E=o[y];M.copy(E),M.sub(v.multiplyScalar(v.dot(E))).normalize(),x.crossVectors(S,E);let P=x.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,P)}for(let y=0,E=_.length;y<E;++y){let R=_[y],P=R.start,F=R.count;for(let D=P,I=P+F;D<I;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ze(d,h,u)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bu,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Dn=new C,ba=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zh=new C,Z0=new C,$0=new ke,xi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zh.subVectors(n,t).cross(Z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$0.getNormalMatrix(e),s=this.coplanarPoint(Zh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Q0=0,Wn=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Aa,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=Su,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oc,this.stencilZFail=Oc,this.stencilZPass=Oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var as=new C,$h=new C,bc=new C,_c=new C,ks=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$h.copy(e).add(t).multiplyScalar(.5),bc.copy(t).sub(e).normalize(),_c.copy(this.origin).sub($h);let r=e.distanceTo(t)*.5,a=-this.direction.dot(bc),o=_c.dot(this.direction),l=-_c.dot(bc),c=_c.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($h).addScaledVector(bc,d),f}intersectSphere(e,t){if(e.radius<0)return null;as.subVectors(e.center,this.origin);let n=as.dot(this.direction),s=as.dot(as)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,b=t.y-a.y,g=t.z-a.z,p=n.x-a.x,_=n.y-a.y,M=n.z-a.z,x=Math.abs(l),v=Math.abs(c),S=Math.abs(h),T,y,E,R,P,F,D,I,O,B,X,te;if(x>=v&&x>=S?(E=l,F=u,O=m,te=p,l>=0?(T=c,y=h,R=d,P=f,D=b,I=g,B=_,X=M):(T=h,y=c,R=f,P=d,D=g,I=b,B=M,X=_)):v>=S?(E=c,F=d,O=b,te=_,c>=0?(T=h,y=l,R=f,P=u,D=g,I=m,B=M,X=p):(T=l,y=h,R=u,P=f,D=m,I=g,B=p,X=M)):(E=h,F=f,O=g,te=M,h>=0?(T=l,y=c,R=u,P=d,D=m,I=b,B=p,X=_):(T=c,y=l,R=d,P=u,D=b,I=m,B=_,X=p)),E===0)return null;let q=T/E,J=y/E,Q=1/E,Ee=R-q*F,Me=P-J*F,_t=D-q*O,it=I-J*O,ut=B-q*te,K=X-J*te,ne=ut*it-K*_t,ve=Ee*K-Me*ut,Ge=_t*Me-it*Ee;if(s){if(ne<0||ve<0||Ge<0)return null}else if((ne<0||ve<0||Ge<0)&&(ne>0||ve>0||Ge>0))return null;let _e=ne+ve+Ge;if(_e===0)return null;let tt=Q*(ne*F+ve*O+Ge*te);return(_e>0?tt<0:tt>0)?null:this.at(tt/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qn=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jf=new Ve,ur=new ks,yc=new Gn,Kf=new C,vc=new C,Mc=new C,Sc=new C,Qh=new C,wc=new C,Yf=new C,Ec=new C,ot=class extends Wt{constructor(e=new At,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){wc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Qh.fromBufferAttribute(u,e),a?wc.addScaledVector(Qh,h):wc.addScaledVector(Qh.sub(t),h))}t.add(wc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yc.copy(n.boundingSphere),yc.applyMatrix4(r),ur.copy(e.ray).recast(e.near),!(yc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(yc,Kf)===null||ur.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(jf.copy(r).invert(),ur.copy(e.ray).applyMatrix4(jf),!(n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,v=M;x<v;x+=3){let S=o.getX(x),T=o.getX(x+1),y=o.getX(x+2);s=Tc(this,p,e,n,c,h,u,S,T,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let _=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);s=Tc(this,a,e,n,c,h,u,_,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,v=M;x<v;x+=3){let S=x,T=x+1,y=x+2;s=Tc(this,p,e,n,c,h,u,S,T,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let _=g,M=g+1,x=g+2;s=Tc(this,a,e,n,c,h,u,_,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ex(i,e,t,n,s,r,a,o){let l;if(e.side===Un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Vi,o),l===null)return null;Ec.copy(o),Ec.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ec);return c<t.near||c>t.far?null:{distance:c,point:Ec.clone(),object:i}}function Tc(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,vc),i.getVertexPosition(l,Mc),i.getVertexPosition(c,Sc);let h=ex(i,e,t,n,vc,Mc,Sc,Yf);if(h){let u=new C;zs.getBarycoord(Yf,vc,Mc,Sc,u),s&&(h.uv=zs.getInterpolatedAttribute(s,o,l,c,u,new He)),r&&(h.uv1=zs.getInterpolatedAttribute(r,o,l,c,u,new He)),a&&(h.normal=zs.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};zs.getNormal(vc,Mc,Sc,d.normal),h.face=d,h.barycoord=u}return h}var so=new xt,Jf=new xt,Zf=new xt,tx=new xt,$f=new Ve,Ac=new C,eu=new Gn,Qf=new Ve,tu=new ks,Bs=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ru,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ac),this.boundingBox.expandByPoint(Ac)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ac),this.boundingSphere.expandByPoint(Ac)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eu.copy(this.boundingSphere),eu.applyMatrix4(s),e.ray.intersectsSphere(eu)!==!1&&(Qf.copy(s).invert(),tu.copy(e.ray).applyMatrix4(Qf),!(this.boundingBox!==null&&tu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ru?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Jf.fromBufferAttribute(s.attributes.skinIndex,e),Zf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(so.copy(t),t.set(0,0,0,0)):(so.set(...t,1),t.set(0,0,0)),so.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Zf.getComponent(r);if(a!==0){let o=Jf.getComponent(r);$f.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tx.copy(so).applyMatrix4($f),a)}}return t.isVector4&&(t.w=so.w),t.applyMatrix4(this.bindMatrixInverse)}},ls=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hs=class extends pn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=an,h=an,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ep=new Ve,nx=new Ve,Vs=class i{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:nx;ep.multiplyMatrices(o,t[r]),ep.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hs(t,e,e,ni,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ce("Skeleton: No bone found with UUID:",r),a=new ls),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},hs=class extends Ze{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ia=new Ve,tp=new Ve,Rc=[],np=new $t,ix=new Ve,ro=new ot,ao=new Gn,br=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ix)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ia),np.copy(e.boundingBox).applyMatrix4(ia),this.boundingBox.union(np)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ia),ao.copy(e.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ia),tp.multiplyMatrices(n,ia),ro.matrixWorld=tp,ro.raycast(e,Rc);for(let a=0,o=Rc.length;a<o;a++){let l=Rc[a];l.instanceId=r,l.object=this,t.push(l)}Rc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hs(new Float32Array(s*this.count),s,this.count,ml,ti));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},dr=new Gn,sx=new He(.5,.5),Cc=new C,_a=class{constructor(e=new xi,t=new xi,n=new xi,s=new xi,r=new xi,a=new xi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],b=r[9],g=r[10],p=r[11],_=r[12],M=r[13],x=r[14],v=r[15];if(s[0].setComponents(c-a,f-h,p-m,v-_).normalize(),s[1].setComponents(c+a,f+h,p+m,v+_).normalize(),s[2].setComponents(c+o,f+u,p+b,v+M).normalize(),s[3].setComponents(c-o,f-u,p-b,v-M).normalize(),n)s[4].setComponents(l,d,g,x).normalize(),s[5].setComponents(c-l,f-d,p-g,v-x).normalize();else if(s[4].setComponents(c-l,f-d,p-g,v-x).normalize(),t===_i)s[5].setComponents(c+l,f+d,p+g,v+x).normalize();else if(t===ha)s[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);let t=sx.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Cc.x=s.normal.x>0?e.max.x:e.min.x,Cc.y=s.normal.y>0?e.max.y:e.min.y,Cc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ya=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yc=new C,Jc=new C,ip=new Ve,oo=new ks,Pc=new Gn,nu=new C,sp=new C,_r=class extends Wt{constructor(e=new At,t=new ya){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Yc.fromBufferAttribute(t,s-1),Jc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Yc.distanceTo(Jc);e.setAttribute("lineDistance",new gt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pc.copy(n.boundingSphere),Pc.applyMatrix4(s),Pc.radius+=r,e.ray.intersectsSphere(Pc)===!1)return;ip.copy(s).invert(),oo.copy(e.ray).applyMatrix4(ip);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=c){let p=h.getX(b),_=h.getX(b+1),M=Ic(this,e,oo,l,p,_,b);M&&t.push(M)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=Ic(this,e,oo,l,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=c){let p=Ic(this,e,oo,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=Ic(this,e,oo,l,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ic(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Yc.fromBufferAttribute(o,s),Jc.fromBufferAttribute(o,r),t.distanceSqToSegment(Yc,Jc,nu,sp)>n)return;nu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(nu);if(!(c<e.near||c>e.far))return{distance:c,point:sp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var rp=new C,ap=new C,mo=class extends _r{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rp.fromBufferAttribute(t,s),ap.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rp.distanceTo(ap);e.setAttribute("lineDistance",new gt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},go=class extends _r{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},us=class extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},op=new Ve,hu=new ks,Lc=new Gn,Dc=new C,ds=class extends Wt{constructor(e=new At,t=new us){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lc.copy(n.boundingSphere),Lc.applyMatrix4(s),Lc.radius+=r,e.ray.intersectsSphere(Lc)===!1)return;op.copy(s).invert(),hu.copy(e.ray).applyMatrix4(op);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=c.getX(m);Dc.fromBufferAttribute(u,g),cp(Dc,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)Dc.fromBufferAttribute(u,m),cp(Dc,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cp(i,e,t,n,s,r,a){let o=hu.distanceSqToPoint(i);if(o<t){let l=new C;hu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var xo=class extends pn{constructor(e=[],t=js,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mi=class extends pn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gs=class extends pn{constructor(e,t,n=Ei,s,r,a,o=an,l=an,c,h=zi,u=1){if(h!==zi&&h!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Zc=class extends Gs{constructor(e,t=Ei,n=js,s,r,a=an,o=an,l,c=zi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},bo=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Si=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function m(b,g,p,_,M,x,v,S,T,y,E){let R=x/T,P=v/y,F=x/2,D=v/2,I=S/2,O=T+1,B=y+1,X=0,te=0,q=new C;for(let J=0;J<B;J++){let Q=J*P-D;for(let Ee=0;Ee<O;Ee++){let Me=Ee*R-F;q[b]=Me*_,q[g]=Q*M,q[p]=I,c.push(q.x,q.y,q.z),q[b]=0,q[g]=0,q[p]=S>0?1:-1,h.push(q.x,q.y,q.z),u.push(Ee/T),u.push(1-J/y),X+=1}}for(let J=0;J<y;J++)for(let Q=0;Q<T;Q++){let Ee=d+Q+O*J,Me=d+Q+O*(J+1),_t=d+(Q+1)+O*(J+1),it=d+(Q+1)+O*J;l.push(Ee,Me,it),l.push(Me,_t,it),te+=6}o.addGroup(f,te,E),f+=te,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var yr=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function _(){let x=new C,v=new C,S=0,T=(t-e)/n;for(let y=0;y<=r;y++){let E=[],R=y/r,P=R*(t-e)+e;for(let F=0;F<=s;F++){let D=F/s,I=D*l+o,O=Math.sin(I),B=Math.cos(I);v.x=P*O,v.y=-R*n+g,v.z=P*B,u.push(v.x,v.y,v.z),x.set(O,T,B).normalize(),d.push(x.x,x.y,x.z),f.push(D,1-R),E.push(m++)}b.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let R=b[E][y],P=b[E+1][y],F=b[E+1][y+1],D=b[E][y+1];(e>0||E!==0)&&(h.push(R,P,D),S+=3),(t>0||E!==r-1)&&(h.push(P,F,D),S+=3)}c.addGroup(p,S,0),p+=S}function M(x){let v=m,S=new He,T=new C,y=0,E=x===!0?e:t,R=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),m++;let P=m;for(let F=0;F<=s;F++){let I=F/s*l+o,O=Math.cos(I),B=Math.sin(I);T.x=E*B,T.y=g*R,T.z=E*O,u.push(T.x,T.y,T.z),d.push(0,R,0),S.x=O*.5+.5,S.y=B*.5*R+.5,f.push(S.x,S.y),m++}for(let F=0;F<s;F++){let D=v+F,I=P+F;x===!0?h.push(I,I+1,D):h.push(I+1,I,D),y+=3}c.addGroup(p,y,x===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $c=class i extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new C,x=new C,v=new C;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],x),f(t[S+2],v),l(M,x,v,_)}function l(_,M,x,v){let S=v+1,T=[];for(let y=0;y<=S;y++){T[y]=[];let E=_.clone().lerp(x,y/S),R=M.clone().lerp(x,y/S),P=S-y;for(let F=0;F<=P;F++)F===0&&y===S?T[y][F]=E:T[y][F]=E.clone().lerp(R,F/P)}for(let y=0;y<S;y++)for(let E=0;E<2*(S-y)-1;E++){let R=Math.floor(E/2);E%2===0?(d(T[y][R+1]),d(T[y+1][R]),d(T[y][R])):(d(T[y][R+1]),d(T[y+1][R+1]),d(T[y+1][R]))}}function c(_){let M=new C;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(_),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){let _=new C;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let x=g(_)/2/Math.PI+.5,v=p(_)/Math.PI+.5;a.push(x,1-v)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let M=a[_+0],x=a[_+2],v=a[_+4],S=Math.max(M,x,v),T=Math.min(M,x,v);S>.9&&T<.1&&(M<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),v<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,M){let x=_*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function m(){let _=new C,M=new C,x=new C,v=new C,S=new He,T=new He,y=new He;for(let E=0,R=0;E<r.length;E+=9,R+=6){_.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),S.set(a[R+0],a[R+1]),T.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),v.copy(_).add(M).add(x).divideScalar(3);let P=g(v);b(S,R+0,_,P),b(T,R+2,M,P),b(y,R+4,x,P)}}function b(_,M,x,v){v<0&&_.x===1&&(a[M]=_.x-1),x.x===0&&x.z===0&&(a[M]=v/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var va=class i extends $c{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var fs=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let _=p*d-a;for(let M=0;M<c;M++){let x=M*u-r;m.push(x,-_,0),b.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let M=_+c*p,x=_+c*(p+1),v=_+1+c*(p+1),S=_+1+c*p;f.push(M,x,S),f.push(x,v,S)}this.setIndex(f),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(b,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_o=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new C,m=new He;for(let b=0;b<=s;b++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let b=0;b<s;b++){let g=b*(n+1);for(let p=0;p<n;p++){let _=p+g,M=_,x=_+n+1,v=_+n+2,S=_+1;o.push(M,x,S),o.push(x,v,S)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var yo=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let _=[],M=p/n,x=a+M*o,v=e*Math.cos(x),S=Math.sqrt(e*e-v*v),T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let y=0;y<=t;y++){let E=y/t,R=s+E*r;u.x=-S*Math.cos(R),u.y=v,u.z=S*Math.sin(R),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(E+T,1-M),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let M=h[p][_+1],x=h[p][_],v=h[p+1][_],S=h[p+1][_+1];(p!==0||a>0)&&f.push(M,x,S),(p!==n-1||l<Math.PI)&&f.push(x,v,S)}this.setIndex(f),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(b,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(lp(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(lp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Cn(i){let e={};for(let t=0;t<i.length;t++){let n=Ar(i[t]);for(let s in n)e[s]=n[s]}return e}function lp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var sm={clone:Ar,merge:Cn},ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new He().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qc=class extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},un=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qn=class extends un{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ma=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},el=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function cx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function hp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function lx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends Bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ou,endingEnd:ou}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cu:r=e,o=2*t-n;break;case lu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cu:a=e,l=2*n-t;break;case lu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,_=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*b+.5*m,x=f*g-f*b;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+_*a[c+v]+M*a[l+v]+x*a[u+v];return r}},nl=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},il=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},sl=class extends Bi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),b=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*b+a[l+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let b=a[c+m],g=a[l+m],p=f*d+m*2,_=u[p],M=u[p+1],x=e*d+m*2,v=h[x],S=h[x+1],T=ux(n,t,_,v,s);r[m]=rm(T,b,M,S,g)}return r}};function rm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function hx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ux(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=rm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=hx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Os(t,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Os(e.times,Array),values:Os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),zc(e.settings)&&(n.settings={inTangents:Os(e.settings.inTangents,Array),outTangents:Os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pr:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth;break;case au:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return Uc;case this.InterpolantFactoryMethodBezier:return au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;zc(this.settings)&&(up(this.settings.inTangents,e),up(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&v0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,zc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function up(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=mr;var ps=class extends Xn{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=pr;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};vo.prototype.ValueTypeName="color";var ms=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};ms.prototype.ValueTypeName="number";var rl=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ft.slerpFlat(r,0,a,c-o,a,c,l);return r}},gs=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}};gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends Xn{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=pr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};Ws.prototype.ValueTypeName="vector";var Mo=class{constructor(e="",t=-1,n=[],s=Gp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(fx(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Xn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=cx(l);l=hp(l,1,h),c=hp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ms(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function dx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return vo;case"quaternion":return gs;case"bool":case"boolean":return ps;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function fx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=dx(i.type);if(i.times===void 0){let n=[],s=[];lx(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),zc(i.settings)&&(t.settings={inTangents:Os(i.settings.inTangents,Float32Array),outTangents:Os(i.settings.outTangents,Float32Array)}),t}var Oi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(dp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!dp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function dp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var al=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},am=new al,Hi=class{constructor(e){this.manager=e!==void 0?e:am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var os={},uu=class extends Error{constructor(e,t){super(e),this.response=t}},Sa=class extends Hi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Oi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(os[e]!==void 0){os[e].push({onLoad:t,onProgress:n,onError:s});return}os[e]=[],os[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=os[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){_();function _(){u.read().then(({done:M,value:x})=>{if(M)p.close();else{b+=x.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let S=0,T=h.length;S<T;S++){let y=h[S];y.onProgress&&y.onProgress(v)}p.enqueue(x),_()}},M=>{p.error(M)})}}});return new Response(g)}else throw new uu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Oi.add(`file:${e}`,c);let h=os[e];delete os[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=os[e];if(h===void 0)throw this.manager.itemError(e),c;delete os[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var sa=new WeakMap,ol=class extends Hi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Oi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=sa.get(a);u===void 0&&(u=[],sa.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=ua("img");function l(){h(),t&&t(this);let u=sa.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}sa.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Oi.remove(`image:${e}`);let d=sa.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}sa.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Oi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var vr=class extends Hi{constructor(e){super(e)}load(e,t,n,s){let r=new pn,a=new ol(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Mr=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wa=class extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},iu=new Ve,fp=new C,pp=new C,Ea=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(fp),pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){iu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(iu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ha||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fc=new C,Nc=new ft,Ui=new C,So=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fc,Nc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Nc,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fc,Nc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Nc,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Us=new C,mp=new He,gp=new He,rn=class extends So{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,t){return this.getViewBounds(e,mp,gp),t.subVectors(gp,mp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},du=class extends Ea{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=gr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},wo=class extends Mr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new du}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},fu=class extends Ea{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},Eo=class extends Mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},qs=class extends So{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pu=class extends Ea{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new pu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var bs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var su=new WeakMap,To=class extends Hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Oi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{su.has(a)===!0?(s&&s(su.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),su.set(l,c),Oi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Oi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ra=-90,aa=1,cl=class extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(ra,aa,e,t);s.layers=this.layers,this.add(s);let r=new rn(ra,aa,e,t);r.layers=this.layers,this.add(r);let a=new rn(ra,aa,e,t);a.layers=this.layers,this.add(a);let o=new rn(ra,aa,e,t);o.layers=this.layers,this.add(o);let l=new rn(ra,aa,e,t);l.layers=this.layers,this.add(l);let c=new rn(ra,aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ll=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var qu="\\[\\]\\.:\\/",px=new RegExp("["+qu+"]","g"),Xu="[^"+qu+"]",mx="[^"+qu.replace("\\.","")+"]",gx=/((?:WC+[\/:])*)/.source.replace("WC",Xu),xx=/(WCOD+)?/.source.replace("WCOD",mx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),_x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),yx=new RegExp("^"+gx+xx+bx+_x+"$"),vx=["material","materials","bones","map"],mu=class{constructor(e,t,n){let s=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(px,"")}static parseTrackName(e){let t=yx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=mu;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S1=new Float32Array(1);var xp=new Ve,Ao=class{constructor(e,t,n=0,s=1/0){this.ray=new ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xp),this}intersectObject(e,t=!0,n=[]){return gu(e,this,n,t),n.sort(bp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)gu(e[s],this,n,t);return n.sort(bp),n}};function bp(i,e){return i.distance-e.distance}function gu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)gu(r[a],e,t,!0)}}var xu=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function ju(i,e,t,n){let s=Mx(n);switch(t){case Uu:return i*e;case ml:return i*e/s.components*s.byteLength;case gl:return i*e/s.components*s.byteLength;case Ys:return i*e*2/s.components*s.byteLength;case xl:return i*e*2/s.components*s.byteLength;case Ou:return i*e*3/s.components*s.byteLength;case ni:return i*e*4/s.components*s.byteLength;case bl:return i*e*4/s.components*s.byteLength;case Po:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:case Ml:return Math.max(i,16)*Math.max(e,8)/4;case _l:case vl:return Math.max(i,8)*Math.max(e,8)/2;case Sl:case wl:case Tl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case El:case Fo:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Wl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xl:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case No:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mx(i){switch(i){case Kn:case Lu:return{byteLength:1,components:1};case Pa:case Du:case Ti:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case Ei:case dl:case ti:return{byteLength:4,components:1};case Fu:case Nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Rm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wx(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let b=u[f];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tx=`#ifdef USE_ALPHAHASH
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
#endif`,Ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
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
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
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
#endif`,Fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zx=`#ifdef USE_IRIDESCENCE
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
#endif`,kx=`#ifdef USE_BUMPMAP
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kx=`#define PI 3.141592653589793
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
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jx=`vec3 transformedNormal = objectNormal;
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
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ib=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,db=`#ifdef USE_GRADIENTMAP
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
}`,fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xb=`#ifdef USE_ENVMAP
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
#endif`,bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
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
#endif`,Sb=`uniform sampler2D dfgLUT;
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
}`,wb=`
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
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ab=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nb=`#if defined( USE_POINTS_UV )
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
#endif`,Ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
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
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
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
#endif`,Yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h_=`float getShadowMask() {
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
}`,u_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,__=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T_=`uniform sampler2D t2D;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`#include <common>
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
}`,L_=`#if DEPTH_PACKING == 3200
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
}`,D_=`#define DISTANCE
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
}`,F_=`#define DISTANCE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`uniform float scale;
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
}`,z_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,B_=`uniform vec3 diffuse;
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
}`,H_=`#define LAMBERT
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
}`,V_=`#define LAMBERT
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
}`,G_=`#define MATCAP
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
}`,W_=`#define MATCAP
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
}`,q_=`#define NORMAL
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
}`,X_=`#define NORMAL
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
}`,j_=`#define PHONG
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
}`,K_=`#define PHONG
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
}`,Y_=`#define STANDARD
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
}`,J_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,$_=`#define TOON
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
}`,Q_=`uniform float size;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,sy=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Ex,alphahash_pars_fragment:Tx,alphamap_fragment:Ax,alphamap_pars_fragment:Rx,alphatest_fragment:Cx,alphatest_pars_fragment:Px,aomap_fragment:Ix,aomap_pars_fragment:Lx,batching_pars_vertex:Dx,batching_vertex:Fx,begin_vertex:Nx,beginnormal_vertex:Ux,bsdfs:Ox,iridescence_fragment:zx,bumpmap_pars_fragment:kx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Gx,color_fragment:Wx,color_pars_fragment:qx,color_pars_vertex:Xx,color_vertex:jx,common:Kx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:Zx,displacementmap_vertex:$x,emissivemap_fragment:Qx,emissivemap_pars_fragment:eb,colorspace_fragment:tb,colorspace_pars_fragment:nb,envmap_fragment:ib,envmap_common_pars_fragment:sb,envmap_pars_fragment:rb,envmap_pars_vertex:ab,envmap_physical_pars_fragment:xb,envmap_vertex:ob,fog_vertex:cb,fog_pars_vertex:lb,fog_fragment:hb,fog_pars_fragment:ub,gradientmap_pars_fragment:db,lightmap_pars_fragment:fb,lights_lambert_fragment:pb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:bb,lights_toon_pars_fragment:_b,lights_phong_fragment:yb,lights_phong_pars_fragment:vb,lights_physical_fragment:Mb,lights_physical_pars_fragment:Sb,lights_fragment_begin:wb,lights_fragment_maps:Eb,lights_fragment_end:Tb,lightprobes_pars_fragment:Ab,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:Pb,logdepthbuf_vertex:Ib,map_fragment:Lb,map_pars_fragment:Db,map_particle_fragment:Fb,map_particle_pars_fragment:Nb,metalnessmap_fragment:Ub,metalnessmap_pars_fragment:Ob,morphinstance_vertex:zb,morphcolor_vertex:kb,morphnormal_vertex:Bb,morphtarget_pars_vertex:Hb,morphtarget_vertex:Vb,normal_fragment_begin:Gb,normal_fragment_maps:Wb,normal_pars_fragment:qb,normal_pars_vertex:Xb,normal_vertex:jb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:Yb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:$b,opaque_fragment:Qb,packing:e_,premultiplied_alpha_fragment:t_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:s_,roughnessmap_fragment:r_,roughnessmap_pars_fragment:a_,shadowmap_pars_fragment:o_,shadowmap_pars_vertex:c_,shadowmap_vertex:l_,shadowmask_pars_fragment:h_,skinbase_vertex:u_,skinning_pars_vertex:d_,skinning_vertex:f_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:g_,tonemapping_fragment:x_,tonemapping_pars_fragment:b_,transmission_fragment:__,transmission_pars_fragment:y_,uv_pars_fragment:v_,uv_pars_vertex:M_,uv_vertex:S_,worldpos_vertex:w_,background_vert:E_,background_frag:T_,backgroundCube_vert:A_,backgroundCube_frag:R_,cube_vert:C_,cube_frag:P_,depth_vert:I_,depth_frag:L_,distance_vert:D_,distance_frag:F_,equirect_vert:N_,equirect_frag:U_,linedashed_vert:O_,linedashed_frag:z_,meshbasic_vert:k_,meshbasic_frag:B_,meshlambert_vert:H_,meshlambert_frag:V_,meshmatcap_vert:G_,meshmatcap_frag:W_,meshnormal_vert:q_,meshnormal_frag:X_,meshphong_vert:j_,meshphong_frag:K_,meshphysical_vert:Y_,meshphysical_frag:J_,meshtoon_vert:Z_,meshtoon_frag:$_,points_vert:Q_,points_frag:ey,shadow_vert:ty,shadow_frag:ny,sprite_vert:iy,sprite_frag:sy},pe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},qi={basic:{uniforms:Cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Cn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Cn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new De(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Cn([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Cn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Cn([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Cn([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Cn([pe.common,pe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Cn([pe.lights,pe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};qi.physical={uniforms:Cn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var $l={r:0,b:0,g:0},ry=new Ve,Cm=new ke;Cm.set(-1,0,0,0,1,0,0,0,1);function ay(i,e,t,n,s,r){let a=new De(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let x=_.backgroundBlurriness>0;M=e.get(M,x)}return M}function m(_){let M=!1,x=f(_);x===null?g(a,o):x&&x.isColor&&(g(x,1),M=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(_,M){let x=f(M);x&&(x.isCubeTexture||x.mapping===Co)?(c===void 0&&(c=new ot(new Si(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ar(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cm),c.material.toneMapped=et.getTransfer(x.colorSpace)!==Tt,(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ot(new fs(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ar(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==Tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,M){_.getRGB($l,Wu(i)),t.buffers.color.setClear($l.r,$l.g,$l.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:b,dispose:p}}function oy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(P,F,D,I,O){let B=!1,X=u(P,I,D,F);r!==X&&(r=X,c(r.object)),B=f(P,I,D,O),B&&m(P,I,D,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,x(P,F,D,I),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,F,D,I){let O=I.wireframe===!0,B=n[F.id];B===void 0&&(B={},n[F.id]=B);let X=P.isInstancedMesh===!0?P.id:0,te=B[X];te===void 0&&(te={},B[X]=te);let q=te[D.id];q===void 0&&(q={},te[D.id]=q);let J=q[O];return J===void 0&&(J=d(l()),q[O]=J),J}function d(P){let F=[],D=[],I=[];for(let O=0;O<t;O++)F[O]=0,D[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:D,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,F,D,I){let O=r.attributes,B=F.attributes,X=0,te=D.getAttributes();for(let q in te)if(te[q].location>=0){let Q=O[q],Ee=B[q];if(Ee===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor)),Q===void 0||Q.attribute!==Ee||Ee&&Q.data!==Ee.data)return!0;X++}return r.attributesNum!==X||r.index!==I}function m(P,F,D,I){let O={},B=F.attributes,X=0,te=D.getAttributes();for(let q in te)if(te[q].location>=0){let Q=B[q];Q===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let Ee={};Ee.attribute=Q,Q&&Q.data&&(Ee.data=Q.data),O[q]=Ee,X++}r.attributes=O,r.attributesNum=X,r.index=I}function b(){let P=r.newAttributes;for(let F=0,D=P.length;F<D;F++)P[F]=0}function g(P){p(P,0)}function p(P,F){let D=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;D[P]=1,I[P]===0&&(i.enableVertexAttribArray(P),I[P]=1),O[P]!==F&&(i.vertexAttribDivisor(P,F),O[P]=F)}function _(){let P=r.newAttributes,F=r.enabledAttributes;for(let D=0,I=F.length;D<I;D++)F[D]!==P[D]&&(i.disableVertexAttribArray(D),F[D]=0)}function M(P,F,D,I,O,B,X){X===!0?i.vertexAttribIPointer(P,F,D,O,B):i.vertexAttribPointer(P,F,D,I,O,B)}function x(P,F,D,I){b();let O=I.attributes,B=D.getAttributes(),X=F.defaultAttributeValues;for(let te in B){let q=B[te];if(q.location>=0){let J=O[te];if(J===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let Q=J.normalized,Ee=J.itemSize,Me=e.get(J);if(Me===void 0)continue;let _t=Me.buffer,it=Me.type,ut=Me.bytesPerElement,K=it===i.INT||it===i.UNSIGNED_INT||J.gpuType===dl;if(J.isInterleavedBufferAttribute){let ne=J.data,ve=ne.stride,Ge=J.offset;if(ne.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,ne.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let _e=0;_e<q.locationSize;_e++)g(q.location+_e);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let _e=0;_e<q.locationSize;_e++)M(q.location+_e,Ee/q.locationSize,it,Q,ve*ut,(Ge+Ee/q.locationSize*_e)*ut,K)}else{if(J.isInstancedBufferAttribute){for(let ne=0;ne<q.locationSize;ne++)p(q.location+ne,J.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ne=0;ne<q.locationSize;ne++)g(q.location+ne);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ne=0;ne<q.locationSize;ne++)M(q.location+ne,Ee/q.locationSize,it,Q,Ee*ut,Ee/q.locationSize*ne*ut,K)}}else if(X!==void 0){let Q=X[te];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(q.location,Q);break;case 3:i.vertexAttrib3fv(q.location,Q);break;case 4:i.vertexAttrib4fv(q.location,Q);break;default:i.vertexAttrib1fv(q.location,Q)}}}}_()}function v(){E();for(let P in n){let F=n[P];for(let D in F){let I=F[D];for(let O in I){let B=I[O];for(let X in B)h(B[X].object),delete B[X];delete I[O]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let D in F){let I=F[D];for(let O in I){let B=I[O];for(let X in B)h(B[X].object),delete B[X];delete I[O]}}delete n[P.id]}function T(P){for(let F in n){let D=n[F];for(let I in D){let O=D[I];if(O[P.id]===void 0)continue;let B=O[P.id];for(let X in B)h(B[X].object),delete B[X];delete O[P.id]}}}function y(P){for(let F in n){let D=n[F],I=P.isInstancedMesh===!0?P.id:0,O=D[I];if(O!==void 0){for(let B in O){let X=O[B];for(let te in X)h(X[te].object),delete X[te];delete O[B]}delete D[I],Object.keys(D).length===0&&delete n[F]}}}function E(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:g,disableUnusedAttributes:_}}function cy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ly(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==ni&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let y=T===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Kn&&T!==ti&&!y&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:x,maxSamples:v,samples:S}}function hy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new xi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,M=_*4,x=p.clippingState||null;l.value=x,x=h(m,d,M,f);for(let v=0;v!==M;++v)x[v]=t[v];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let p=f+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,x=f;M!==b;++M,x+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Fa=4,uy=6,dy=20,fy=256,Oo=new qs,om=new De,Ku=null,Yu=0,Ju=0,Zu=!1,py=new C,Rr=new C,Ua=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=py}=r;Ku=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Yu,Ju),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ti,format:ni,colorSpace:Fn,depthBuffer:!1},s=cm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=my(r)),this._blurMaterial=xy(r,e,t),this._ggxMaterial=gy(r,e,t)}return s}_compileMaterial(e){let t=new ot(new At,e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,s,r){let l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(om),u.toneMapping=wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ot(new Si,new Qn({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,p=!0):(g.color.copy(om),p=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let v=this._cubeSize;Da(s,x*v,M>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(b,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===js||e.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Da(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Oo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,b=this._sizeLods[n],g=3*b*(n>m-Fa?n-m+Fa:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Da(r,g,p,3*b,2*b),s.setRenderTarget(r),s.render(o,Oo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Da(e,g,p,3*b,2*b),s.setRenderTarget(e),s.render(o,Oo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Fa?s-this._lodMax+Fa:0),d=4*(this._cubeSize-h);Da(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Oo)}};function my(i){let e=[],t=[],n=i,s=i-Fa+1+uy;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),b=new Float32Array(f*d*u);for(let p=0;p<u;p++){let _=p%3*2/3-1,M=p>2?0:-1,x=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];m.set(x,f*d*p);for(let v=0;v<d;v++){let S=h[v*2]*2-1,T=h[v*2+1]*2-1;p===0?Rr.set(1,T,S):p===1?Rr.set(-S,1,-T):p===2?Rr.set(-S,T,1):p===3?Rr.set(-1,T,-S):p===4?Rr.set(-S,-1,T):Rr.set(S,T,-1),Rr.toArray(b,(p*d+v)*f)}}let g=new At;g.setAttribute("position",new Ze(m,f)),g.setAttribute("outputDirection",new Ze(b,f)),t.push(new ot(g,null)),n>Fa&&n--}return{lodMeshes:t,sizeLods:e}}function cm(i,e,t){let n=new Vn(i,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gy(i,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:th(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function xy(i,e,t){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:dy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:th(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function lm(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function hm(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function th(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var eh=class extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Si(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Gi});r.uniforms.tEquirect.value=t;let a=new ot(s,r),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=Zt),new cl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function by(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ra||f===hl)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let b=new eh(m.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===Ra||f===hl,b=f===js||f===Er;if(m||b){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Ua(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let _=d.image;return m&&_&&_.height>0||b&&_&&l(_)?(n===null&&(n=new Ua(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Ra?d.mapping=js:f===hl&&(d.mapping=Er),d}function l(d){let f=0,m=6;for(let b=0;b<m;b++)d[b]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function _y(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&fr("WebGLRenderer: "+n+" extension not supported."),s}}}function yy(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(m===void 0)return;if(f!==null){let _=f.array;b=f.version;for(let M=0,x=_.length;M<x;M+=3){let v=_[M+0],S=_[M+1],T=_[M+2];d.push(v,S,S,T,T,v)}}else{let _=m.array;b=m.version;for(let M=0,x=_.length/3-1;M<x;M+=3){let v=M+0,S=M+1,T=M+2;d.push(v,S,S,T,T,v)}}let g=new(m.count>=65535?po:xr)(d,1);g.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function vy(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let b=0;for(let g=0;g<f;g++)b+=d[g];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function My(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sy(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),b===!0&&(M=3);let x=o.attributes.position.count*M,v=1;x>e.maxTextureSize&&(v=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*v*4*u),T=new fo(S,x,v,u);T.type=ti,T.needsUpdate=!0;let y=M*4;for(let R=0;R<u;R++){let P=g[R],F=p[R],D=_[R],I=x*v*4*R;for(let O=0;O<P.count;O++){let B=O*y;f===!0&&(s.fromBufferAttribute(P,O),S[I+B+0]=s.x,S[I+B+1]=s.y,S[I+B+2]=s.z,S[I+B+3]=0),m===!0&&(s.fromBufferAttribute(F,O),S[I+B+4]=s.x,S[I+B+5]=s.y,S[I+B+6]=s.z,S[I+B+7]=0),b===!0&&(s.fromBufferAttribute(D,O),S[I+B+8]=s.x,S[I+B+9]=s.y,S[I+B+10]=s.z,S[I+B+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new He(x,v)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function wy(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Ey={[Eu]:"LINEAR_TONE_MAPPING",[Tu]:"REINHARD_TONE_MAPPING",[Au]:"CINEON_TONE_MAPPING",[Ro]:"ACES_FILMIC_TONE_MAPPING",[Cu]:"AGX_TONE_MAPPING",[Pu]:"NEUTRAL_TONE_MAPPING",[Ru]:"CUSTOM_TONE_MAPPING"};function Ty(i,e,t,n,s,r){let a=new Vn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new At;c.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gt([0,2,0,0,2,0],2));let h=new Qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ot(c,h),d=new qs(-1,1,1,-1,0,1),f=null,m=null,b=!1,g,p=null,_=[],M=!1;this.setSize=function(x,v){a.setSize(x,v),o!==null&&o.setSize(x,v),l!==null&&l.setSize(x,v);for(let S=0;S<_.length;S++){let T=_[S];T.setSize&&T.setSize(x,v)}},this.setEffects=function(x){_=x,M=_.length>0&&_[0].isRenderPass===!0;let v=a.width,S=a.height;_.length>0&&o===null&&(o=new Vn(v,S,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new Vn(v,S,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<_.length;T++){let y=_[T];y.setSize&&y.setSize(v,S)}},this.begin=function(x,v){if(b||x.toneMapping===wi&&_.length===0)return!1;if(p=v,v!==null){let S=v.width,T=v.height;(a.width!==S||a.height!==T)&&this.setSize(S,T)}return M===!1&&x.setRenderTarget(a),g=x.toneMapping,x.toneMapping=wi,!0},this.hasRenderPass=function(){return M},this.end=function(x,v){x.toneMapping=g,b=!0;let S=a,T=o;for(let y=0;y<_.length;y++){let E=_[y];E.enabled!==!1&&(E.render(x,T,S,v),E.needsSwap!==!1&&(S=T,T=T===o?l:o))}if(f!==x.outputColorSpace||m!==x.toneMapping){f=x.outputColorSpace,m=x.toneMapping,h.defines={},et.getTransfer(f)===Tt&&(h.defines.SRGB_TRANSFER="");let y=Ey[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(p),x.render(u,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Pm=new pn,ed=new Gs(1,1),Im=new fo,Lm=new Kc,Dm=new xo,um=[],dm=[],fm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function Oa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=um[s];if(r===void 0&&(r=new Float32Array(s),um[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nh(i,e){let t=dm[e];t===void 0&&(t=new Int32Array(e),dm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ay(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function Iy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;mm.set(n),i.uniformMatrix2fv(this.addr,!1,mm),gn(t,n)}}function Ly(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;pm.set(n),i.uniformMatrix3fv(this.addr,!1,pm),gn(t,n)}}function Dy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;fm.set(n),i.uniformMatrix4fv(this.addr,!1,fm),gn(t,n)}}function Fy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function Vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ed.compareFunction=t.isReversedDepthBuffer()?Zl:Jl,r=ed):r=Pm,t.setTexture2D(e||r,s)}function Gy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lm,s)}function Wy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dm,s)}function qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Im,s)}function Xy(i){switch(i){case 5126:return Ay;case 35664:return Ry;case 35665:return Cy;case 35666:return Py;case 35674:return Iy;case 35675:return Ly;case 35676:return Dy;case 5124:case 35670:return Fy;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Oy;case 5125:return zy;case 36294:return ky;case 36295:return By;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return qy}}function jy(i,e){i.uniform1fv(this.addr,e)}function Ky(i,e){let t=Oa(e,this.size,2);i.uniform2fv(this.addr,t)}function Yy(i,e){let t=Oa(e,this.size,3);i.uniform3fv(this.addr,t)}function Jy(i,e){let t=Oa(e,this.size,4);i.uniform4fv(this.addr,t)}function Zy(i,e){let t=Oa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $y(i,e){let t=Oa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qy(i,e){let t=Oa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ev(i,e){i.uniform1iv(this.addr,e)}function tv(i,e){i.uniform2iv(this.addr,e)}function nv(i,e){i.uniform3iv(this.addr,e)}function iv(i,e){i.uniform4iv(this.addr,e)}function sv(i,e){i.uniform1uiv(this.addr,e)}function rv(i,e){i.uniform2uiv(this.addr,e)}function av(i,e){i.uniform3uiv(this.addr,e)}function ov(i,e){i.uniform4uiv(this.addr,e)}function cv(i,e,t){let n=this.cache,s=e.length,r=nh(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ed:a=Pm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function lv(i,e,t){let n=this.cache,s=e.length,r=nh(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lm,r[a])}function hv(i,e,t){let n=this.cache,s=e.length,r=nh(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Dm,r[a])}function uv(i,e,t){let n=this.cache,s=e.length,r=nh(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Im,r[a])}function dv(i){switch(i){case 5126:return jy;case 35664:return Ky;case 35665:return Yy;case 35666:return Jy;case 35674:return Zy;case 35675:return $y;case 35676:return Qy;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}var td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xy(t.type)}},nd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dv(t.type)}},id=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},$u=/(\w+)(\])?(\[|\.)?/g;function gm(i,e){i.seq.push(e),i.map[e.id]=e}function fv(i,e,t){let n=i.name,s=n.length;for($u.lastIndex=0;;){let r=$u.exec(n),a=$u.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gm(t,c===void 0?new td(o,i,e):new nd(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new id(o),gm(t,u)),t=u}}}var Na=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);fv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function xm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var pv=37297,mv=0;function gv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var bm=new ke;function xv(i){et._getMatrix(bm,et.workingColorSpace,i);let e=`mat3( ${bm.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case ho:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _m(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gv(i.getShaderSource(e),o)}else return r}function bv(i,e){let t=xv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var _v={[Eu]:"Linear",[Tu]:"Reinhard",[Au]:"Cineon",[Ro]:"ACESFilmic",[Cu]:"AgX",[Pu]:"Neutral",[Ru]:"Custom"};function yv(i,e){let t=_v[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ql=new C;function vv(){et.getLuminanceCoefficients(Ql);let i=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function Sv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ko(i){return i!==""}function ym(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(i){return i.replace(Ev,Av)}var Tv=new Map;function Av(i,e){let t=qe[e];if(t===void 0){let n=Tv.get(e);if(n!==void 0)t=qe[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sd(t)}var Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mm(i){return i.replace(Rv,Cv)}function Cv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Pv={[Sr]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};function Iv(i){return Pv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lv={[js]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE_UV"};function Dv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fv={[Er]:"ENVMAP_MODE_REFRACTION"};function Nv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Uv={[wu]:"ENVMAP_BLENDING_MULTIPLY",[Bp]:"ENVMAP_BLENDING_MIX",[Hp]:"ENVMAP_BLENDING_ADD"};function Ov(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Uv[i.combine]||"ENVMAP_BLENDING_NONE"}function zv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Iv(t),c=Dv(t),h=Nv(t),u=Ov(t),d=zv(t),f=Mv(t),m=Sv(r),b=s.createProgram(),g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ko).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ko).join(`
`),p.length>0&&(p+=`
`)):(g=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),p=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?qe.tonemapping_pars_fragment:"",t.toneMapping!==wi?yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,bv("linearToOutputTexel",t.outputColorSpace),vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),a=sd(a),a=ym(a,t),a=vm(a,t),o=sd(o),o=ym(o,t),o=vm(o,t),a=Mm(a),o=Mm(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+g+a,x=_+p+o,v=xm(s,s.VERTEX_SHADER,M),S=xm(s,s.FRAGMENT_SHADER,x);s.attachShader(b,v),s.attachShader(b,S),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function T(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(b)||"",D=s.getShaderInfoLog(v)||"",I=s.getShaderInfoLog(S)||"",O=F.trim(),B=D.trim(),X=I.trim(),te=!0,q=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,v,S);else{let J=_m(s,v,"vertex"),Q=_m(s,S,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+J+`
`+Q)}else O!==""?Ce("WebGLProgram: Program Info Log:",O):(B===""||X==="")&&(q=!1);q&&(P.diagnostics={runnable:te,programLog:O,vertexShader:{log:B,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(v),s.deleteShader(S),y=new Na(s,b),E=wv(s,b)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(b,pv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=v,this.fragmentShader=S,this}var Bv=0,rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ad(e),t.set(e,n)),n}},ad=class{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}};function Hv(i){return i===Ys||i===Fo||i===No}function Vv(i,e,t,n,s,r){let a=new pa,o=new rd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,E,R,P,F,D){let I=P.fog,O=F.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,te=e.get(y.envMap||B,X),q=te&&te.mapping===Co?te.image.height:null,J=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Ce("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ee=Q!==void 0?Q.length:0,Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let _t,it,ut,K;if(J){let Ht=qi[J];_t=Ht.vertexShader,it=Ht.fragmentShader}else{_t=y.vertexShader,it=y.fragmentShader;let Ht=o.getVertexShaderStage(y),wt=o.getFragmentShaderStage(y);o.update(y,Ht,wt),ut=Ht.id,K=wt.id}let ne=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ge=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,tt=!!y.map,fn=!!y.matcap,st=!!te,mt=!!y.aoMap,Bt=!!y.lightMap,lt=!!y.bumpMap&&y.wireframe===!1,jt=!!y.normalMap,_n=!!y.displacementMap,Bn=!!y.emissiveMap,Jt=!!y.metalnessMap,cn=!!y.roughnessMap,k=y.anisotropy>0,En=y.clearcoat>0,Ct=y.dispersion>0,L=y.retroreflectivity>0,w=y.iridescence>0,H=y.sheen>0,W=y.transmission>0,Y=k&&!!y.anisotropyMap,oe=En&&!!y.clearcoatMap,ce=En&&!!y.clearcoatNormalMap,Z=En&&!!y.clearcoatRoughnessMap,ee=w&&!!y.iridescenceMap,le=w&&!!y.iridescenceThicknessMap,Pe=H&&!!y.sheenColorMap,fe=H&&!!y.sheenRoughnessMap,he=!!y.specularMap,Ie=!!y.specularColorMap,Ne=!!y.specularIntensityMap,je=W&&!!y.transmissionMap,z=W&&!!y.thicknessMap,ue=!!y.gradientMap,$=!!y.alphaMap,de=y.alphaTest>0,xe=!!y.alphaHash,ie=!!y.extensions,Le=wi;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=i.toneMapping);let Te={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:_t,fragmentShader:it,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&F.instanceColor!==null,instancingMorph:Ge&&F.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:fn,envMap:st,envMapMode:st&&te.mapping,envMapCubeUVHeight:q,aoMap:mt,lightMap:Bt,bumpMap:lt,normalMap:jt,displacementMap:_n,emissiveMap:Bn,normalMapObjectSpace:jt&&y.normalMapType===qp,normalMapTangentSpace:jt&&y.normalMapType===Yl,packedNormalMap:jt&&y.normalMapType===Yl&&Hv(y.normalMap.format),metalnessMap:Jt,roughnessMap:cn,anisotropy:k,anisotropyMap:Y,clearcoat:En,clearcoatMap:oe,clearcoatNormalMap:ce,clearcoatRoughnessMap:Z,dispersion:Ct,retroreflection:L,iridescence:w,iridescenceMap:ee,iridescenceThicknessMap:le,sheen:H,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:he,specularColorMap:Ie,specularIntensityMap:Ne,transmission:W,transmissionMap:je,thicknessMap:z,gradientMap:ue,opaque:y.transparent===!1&&y.blending===Aa&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:de,alphaHash:xe,combine:y.combine,mapUv:tt&&m(y.map.channel),aoMapUv:mt&&m(y.aoMap.channel),lightMapUv:Bt&&m(y.lightMap.channel),bumpMapUv:lt&&m(y.bumpMap.channel),normalMapUv:jt&&m(y.normalMap.channel),displacementMapUv:_n&&m(y.displacementMap.channel),emissiveMapUv:Bn&&m(y.emissiveMap.channel),metalnessMapUv:Jt&&m(y.metalnessMap.channel),roughnessMapUv:cn&&m(y.roughnessMap.channel),anisotropyMapUv:Y&&m(y.anisotropyMap.channel),clearcoatMapUv:oe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&m(y.sheenRoughnessMap.channel),specularMapUv:he&&m(y.specularMap.channel),specularColorMapUv:Ie&&m(y.specularColorMap.channel),specularIntensityMapUv:Ne&&m(y.specularIntensityMap.channel),transmissionMapUv:je&&m(y.transmissionMap.channel),thicknessMapUv:z&&m(y.thicknessMap.channel),alphaMapUv:$&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(jt||k),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(tt||$),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&jt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Me,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===Tt,decodeVideoTextureEmissive:Bn&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===Tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===Un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ie&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&y.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(E,y),_(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function _(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){let E=f[y.type],R;if(E){let P=qi[E];R=sm.clone(P.uniforms)}else R=y.uniforms;return R}function x(y,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new kv(i,E,y,s),c.push(R),h.set(E,R)),R}function v(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function T(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:T}}function Gv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Em(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,b,g,p){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:p},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.materialVariant=a(d),_.groupOrder=b,_.renderOrder=d.renderOrder,_.z=g,_.group=p),e++,_}function l(d,f,m,b,g,p,_){_.reversedDepth===!0&&(g=-g);let M=o(d,f,m,b,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(d,f,m,b,g,p){let _=o(d,f,m,b,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||Wv),n.length>1&&n.sort(f||wm),s.length>1&&s.sort(f||wm)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function qv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Em,i.set(n,[a])):s>=r.length?(a=new Em,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new De};break;case"SpotLight":t={position:new C,direction:new C,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function jv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Kv=0;function Yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jv(i){let e=new Xv,t=jv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Ve,a=new Ve;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,_=0,M=0,x=0,v=0,S=0,T=0,y=0,E=0,R=0;c.sort(Yv);for(let F=0,D=c.length;F<D;F++){let I=c[F],O=I.color,B=I.intensity,X=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ys?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],B);R++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=te;let Ee=J.getViewportCount();for(let Me=0;Me<Ee;Me++)n.sunShadowMatrix[b+Me]=J.getMatrix(Me),n.sunShadowCascade[b+Me]=J._cascadeData[Me];b+=Ee,m++}n.sun[f]=q,f++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=te,n.directionalShadowMatrix[g]=I.shadow.matrix,v++}n.directional[g]=q,g++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(O).multiplyScalar(B),q.distance=X,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[_]=q;let J=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,J.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[_]=J.matrix,I.castShadow){let Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=te,T++}_++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(O).multiplyScalar(B),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=q,M++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let J=I.shadow,Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=q,p++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(B),q.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[x]=q,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==x||P.numSunShadows!==m||P.numDirectionalShadows!==v||P.numPointShadows!==S||P.numSpotShadows!==T||P.numSpotMaps!==y||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=M,n.point.length=p,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=x,P.numSunShadows=m,P.numDirectionalShadows=v,P.numPointShadows=S,P.numSpotShadows=T,P.numSpotMaps=y,P.numLightProbes=R,n.version=Kv++)}function l(c,h){let u=0,d=0,f=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let x=c[_];if(x.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),u++}else if(x.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(x.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let v=n.rectArea[b];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),b++}else if(x.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Tm(i){let e=new Jv(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Zv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Tm(i),e.set(s,[o])):r>=a.length?(o=new Tm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var $v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`,eM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],tM=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Am=new Ve,zo=new C,Qu=new C;function nM(i,e,t){let n=new _a,s=new He,r=new He,a=new xt,o=new Ma,l=new el,c={},h=t.maxTextureSize,u={[Vi]:Un,[Un]:Vi,[jn]:jn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:$v,fragmentShader:Qv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new At;m.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ot(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let p=this.type;this.render=function(S,T,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===vp&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let D=p!==this.type;D&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=S.length;I<O;I++){let B=S[I],X=B.shadow;if(X===void 0){Ce("WebGLShadowMap:",B,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let te=X.getFrameExtents();s.multiply(te),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,X.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||D===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ta){if(B.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Vn(s.x,s.y,{format:Ys,type:Ti,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),X.map.texture.name=B.name+".shadowMap",X.map.depthTexture=new Gs(s.x,s.y,ti),X.map.depthTexture.name=B.name+".shadowMapDepth",X.map.depthTexture.format=zi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=an,X.map.depthTexture.magFilter=an}else B.isPointLight?(X.map=new eh(s.x),X.map.depthTexture=new Zc(s.x,Ei)):(X.map=new Vn(s.x,s.y),X.map.depthTexture=new Gs(s.x,s.y,Ei)),X.map.depthTexture.name=B.name+".shadowMap",X.map.depthTexture.format=zi,this.type===Sr?(X.map.depthTexture.compareFunction=q?Zl:Jl,X.map.depthTexture.minFilter=Zt,X.map.depthTexture.magFilter=Zt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=an,X.map.depthTexture.magFilter=an);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let J=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();B.isPointLight!==!0&&X.updateMatrices(B,y);for(let Q=0;Q<J;Q++){let Ee=X.getCamera(Q);if(B.isPointLight){let Me=X.camera,_t=X.matrix,it=B.distance||Me.far;it!==Me.far&&(Me.far=it,Me.updateProjectionMatrix()),zo.setFromMatrixPosition(B.matrixWorld),Me.position.copy(zo),Qu.copy(Me.position),Qu.add(eM[Q]),Me.up.copy(tM[Q]),Me.lookAt(Qu),Me.updateMatrixWorld(),_t.makeTranslation(-zo.x,-zo.y,-zo.z),Am.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Am,Me.coordinateSystem,Me.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(X.map),i.clear());let Me=X.getViewport(Q);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),F.viewport(a)}n=X.getFrustum(Q),x(T,y,Ee,B,this.type)}X.isPointLightShadow!==!0&&this.type===Ta&&_(X,y),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,R,P)};function _(S,T){let y=e.update(b);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Vn(s.x,s.y,{format:Ys,type:Ti}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,y,d,b,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,y,f,b,null)}function M(S,T,y,E){let R=null,P=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=R.uuid,D=T.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let O=I[D];O===void 0&&(O=R.clone(),I[D]=O,T.addEventListener("dispose",v)),R=O}if(R.visible=T.visible,R.wireframe=T.wireframe,E===Ta?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:u[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=y}return R}function x(S,T,y,E,R){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Ta)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let D=e.update(S),I=S.material;if(Array.isArray(I)){let O=D.groups;for(let B=0,X=O.length;B<X;B++){let te=O[B],q=I[te.materialIndex];if(q&&q.visible){let J=M(S,q,E,R);S.onBeforeShadow(i,S,T,y,D,J,te),i.renderBufferDirect(y,null,D,J,S,te),S.onAfterShadow(i,S,T,y,D,J,te)}}}else if(I.visible){let O=M(S,I,E,R);S.onBeforeShadow(i,S,T,y,D,O,null),i.renderBufferDirect(y,null,D,O,S,null),S.onAfterShadow(i,S,T,y,D,O,null)}}let F=S.children;for(let D=0,I=F.length;D<I;D++)x(F[D],T,y,E,R)}function v(S){S.target.removeEventListener("dispose",v);for(let y in c){let E=c[y],R=S.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function iM(i,e){function t(){let z=!1,ue=new xt,$=null,de=new xt(0,0,0,0);return{setMask:function(xe){$!==xe&&!z&&(i.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){z=xe},setClear:function(xe,ie,Le,Te,Ht){Ht===!0&&(xe*=Te,ie*=Te,Le*=Te),ue.set(xe,ie,Le,Te),de.equals(ue)===!1&&(i.clearColor(xe,ie,Le,Te),de.copy(ue))},reset:function(){z=!1,$=null,de.set(-1,0,0,0)}}}function n(){let z=!1,ue=!1,$=null,de=null,xe=null;return{setReversed:function(ie){if(ue!==ie){let Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;let Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return ue},setTest:function(ie){ie?ne(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(ie){$!==ie&&!z&&(i.depthMask(ie),$=ie)},setFunc:function(ie){if(ue&&(ie=nm[ie]),de!==ie){switch(ie){case kc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case Hc:i.depthFunc(i.LESS);break;case ca:i.depthFunc(i.LEQUAL);break;case Vc:i.depthFunc(i.EQUAL);break;case Gc:i.depthFunc(i.GEQUAL);break;case Wc:i.depthFunc(i.GREATER);break;case qc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=ie}},setLocked:function(ie){z=ie},setClear:function(ie){xe!==ie&&(xe=ie,ue&&(ie=1-ie),i.clearDepth(ie))},reset:function(){z=!1,$=null,de=null,xe=null,ue=!1}}}function s(){let z=!1,ue=null,$=null,de=null,xe=null,ie=null,Le=null,Te=null,Ht=null;return{setTest:function(wt){z||(wt?ne(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(wt){ue!==wt&&!z&&(i.stencilMask(wt),ue=wt)},setFunc:function(wt,fi,Fi){($!==wt||de!==fi||xe!==Fi)&&(i.stencilFunc(wt,fi,Fi),$=wt,de=fi,xe=Fi)},setOp:function(wt,fi,Fi){(ie!==wt||Le!==fi||Te!==Fi)&&(i.stencilOp(wt,fi,Fi),ie=wt,Le=fi,Te=Fi)},setLocked:function(wt){z=wt},setClear:function(wt){Ht!==wt&&(i.clearStencil(wt),Ht=wt)},reset:function(){z=!1,ue=null,$=null,de=null,xe=null,ie=null,Le=null,Te=null,Ht=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,_=null,M=null,x=null,v=null,S=null,T=null,y=new De(0,0,0),E=0,R=!1,P=null,F=null,D=null,I=null,O=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,te=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=te>=2);let J=null,Q={},Ee=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),_t=new xt().fromArray(Ee),it=new xt().fromArray(Me);function ut(z,ue,$,de){let xe=new Uint8Array(4),ie=i.createTexture();i.bindTexture(z,ie),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<$;Le++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ue+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ie}let K={};K[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(ca),lt(!1),jt(bu),ne(i.CULL_FACE),mt(Gi);function ne(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function ve(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Ge(z,ue){return d[z]!==ue?(i.bindFramebuffer(z,ue),d[z]=ue,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ue),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(z,ue){let $=m,de=!1;if(z){$=f.get(ue),$===void 0&&($=[],f.set(ue,$));let xe=z.textures;if($.length!==xe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Le=xe.length;ie<Le;ie++)$[ie]=i.COLOR_ATTACHMENT0+ie;$.length=xe.length,de=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,de=!0);de&&i.drawBuffers($)}function tt(z){return b!==z?(i.useProgram(z),b=z,!0):!1}let fn={[wr]:i.FUNC_ADD,[Sp]:i.FUNC_SUBTRACT,[wp]:i.FUNC_REVERSE_SUBTRACT};fn[Ep]=i.MIN,fn[Tp]=i.MAX;let st={[Ap]:i.ZERO,[Rp]:i.ONE,[Cp]:i.SRC_COLOR,[Mu]:i.SRC_ALPHA,[Np]:i.SRC_ALPHA_SATURATE,[Dp]:i.DST_COLOR,[Ip]:i.DST_ALPHA,[Pp]:i.ONE_MINUS_SRC_COLOR,[Su]:i.ONE_MINUS_SRC_ALPHA,[Fp]:i.ONE_MINUS_DST_COLOR,[Lp]:i.ONE_MINUS_DST_ALPHA,[Up]:i.CONSTANT_COLOR,[Op]:i.ONE_MINUS_CONSTANT_COLOR,[zp]:i.CONSTANT_ALPHA,[kp]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(z,ue,$,de,xe,ie,Le,Te,Ht,wt){if(z===Gi){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),z!==Mp){if(z!==p||wt!==R){if((_!==wr||v!==wr)&&(i.blendEquation(i.FUNC_ADD),_=wr,v=wr),wt)switch(z){case Aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _u:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ze("WebGLState: Invalid blending: ",z);break}else switch(z){case Aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _u:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yu:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",z);break}M=null,x=null,S=null,T=null,y.set(0,0,0),E=0,p=z,R=wt}return}xe=xe||ue,ie=ie||$,Le=Le||de,(ue!==_||xe!==v)&&(i.blendEquationSeparate(fn[ue],fn[xe]),_=ue,v=xe),($!==M||de!==x||ie!==S||Le!==T)&&(i.blendFuncSeparate(st[$],st[de],st[ie],st[Le]),M=$,x=de,S=ie,T=Le),(Te.equals(y)===!1||Ht!==E)&&(i.blendColor(Te.r,Te.g,Te.b,Ht),y.copy(Te),E=Ht),p=z,R=!1}function Bt(z,ue){z.side===jn?ve(i.CULL_FACE):ne(i.CULL_FACE);let $=z.side===Un;ue&&($=!$),lt($),z.blending===Aa&&z.transparent===!1?mt(Gi):mt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let de=z.stencilWrite;o.setTest(de),de&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Bn(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(z){P!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),P=z)}function jt(z){z!==_p?(ne(i.CULL_FACE),z!==F&&(z===bu?i.cullFace(i.BACK):z===yp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),F=z}function _n(z){z!==D&&(X&&i.lineWidth(z),D=z)}function Bn(z,ue,$){z?(ne(i.POLYGON_OFFSET_FILL),(I!==ue||O!==$)&&(I=ue,O=$,a.getReversed()&&(ue=-ue),i.polygonOffset(ue,$))):ve(i.POLYGON_OFFSET_FILL)}function Jt(z){z?ne(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function cn(z){z===void 0&&(z=i.TEXTURE0+B-1),J!==z&&(i.activeTexture(z),J=z)}function k(z,ue,$){$===void 0&&(J===null?$=i.TEXTURE0+B-1:$=J);let de=Q[$];de===void 0&&(de={type:void 0,texture:void 0},Q[$]=de),(de.type!==z||de.texture!==ue)&&(J!==$&&(i.activeTexture($),J=$),i.bindTexture(z,ue||K[z]),de.type=z,de.texture=ue)}function En(){let z=Q[J];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ct(){try{i.compressedTexImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function w(){try{i.texSubImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function H(){try{i.texSubImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function oe(){try{i.texStorage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function ce(){try{i.texStorage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function Z(){try{i.texImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function ee(){try{i.texImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function le(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function Pe(z,ue){u[z]!==ue&&(i.pixelStorei(z,ue),u[z]=ue)}function fe(z){_t.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),_t.copy(z))}function he(z){it.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),it.copy(z))}function Ie(z,ue){let $=c.get(ue);$===void 0&&($=new WeakMap,c.set(ue,$));let de=$.get(z);de===void 0&&(de=i.getUniformBlockIndex(ue,z.name),$.set(z,de))}function Ne(z,ue){let de=c.get(ue).get(z);l.get(ue)!==de&&(i.uniformBlockBinding(ue,de,z.__bindingPointIndex),l.set(ue,de))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,Q={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,_=null,M=null,x=null,v=null,S=null,T=null,y=new De(0,0,0),E=0,R=!1,P=null,F=null,D=null,I=null,O=null,_t.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ve,bindFramebuffer:Ge,drawBuffers:_e,useProgram:tt,setBlending:mt,setMaterial:Bt,setFlipSided:lt,setCullFace:jt,setLineWidth:_n,setPolygonOffset:Bn,setScissorTest:Jt,activeTexture:cn,bindTexture:k,unbindTexture:En,compressedTexImage2D:Ct,compressedTexImage3D:L,texImage2D:Z,texImage3D:ee,pixelStorei:Pe,getParameter:le,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:ce,texSubImage2D:w,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:fe,viewport:he,reset:je}}function sM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,w){return m?new OffscreenCanvas(L,w):ua("canvas")}function g(L,w,H){let W=1,Y=Ct(L);if((Y.width>H||Y.height>H)&&(W=H/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let oe=Math.floor(W*Y.width),ce=Math.floor(W*Y.height);d===void 0&&(d=b(oe,ce));let Z=w?b(oe,ce):d;return Z.width=oe,Z.height=ce,Z.getContext("2d").drawImage(L,0,0,oe,ce),Ce("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+oe+"x"+ce+")."),Z}else return"data"in L&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),L;return L}function p(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,w,H,W,Y,oe=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce;W&&(ce=e.get("EXT_texture_norm16"),ce||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=w;if(w===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8),H===i.UNSIGNED_SHORT&&ce&&(Z=ce.R16_EXT),H===i.SHORT&&ce&&(Z=ce.R16_SNORM_EXT)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),w===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8),H===i.UNSIGNED_SHORT&&ce&&(Z=ce.RG16_EXT),H===i.SHORT&&ce&&(Z=ce.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),w===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),w===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),w===i.RGB&&(H===i.UNSIGNED_SHORT&&ce&&(Z=ce.RGB16_EXT),H===i.SHORT&&ce&&(Z=ce.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),w===i.RGBA){let ee=oe?ho:et.getTransfer(Y);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=ee===Tt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ce&&(Z=ce.RGBA16_EXT),H===i.SHORT&&ce&&(Z=ce.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(L,w){let H;return L?w===null||w===Ei||w===Ia?H=i.DEPTH24_STENCIL8:w===ti?H=i.DEPTH32F_STENCIL8:w===Pa&&(H=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ei||w===Ia?H=i.DEPTH_COMPONENT24:w===ti?H=i.DEPTH_COMPONENT32F:w===Pa&&(H=i.DEPTH_COMPONENT16),H}function S(L,w){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==an&&L.minFilter!==Zt?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function T(L){let w=L.target;w.removeEventListener("dispose",T),E(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function y(L){let w=L.target;w.removeEventListener("dispose",y),P(w)}function E(L){let w=n.get(L);if(w.__webglInit===void 0)return;let H=L.source,W=f.get(H);if(W){let Y=W[w.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(L),Object.keys(W).length===0&&f.delete(H)}n.remove(L)}function R(L){let w=n.get(L);i.deleteTexture(w.__webglTexture);let H=L.source,W=f.get(H);delete W[w.__cacheKey],a.memory.textures--}function P(L){let w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(w.__webglFramebuffer[W]))for(let Y=0;Y<w.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(w.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(w.__webglFramebuffer[W]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[W])}else{if(Array.isArray(w.__webglFramebuffer))for(let W=0;W<w.__webglFramebuffer.length;W++)i.deleteFramebuffer(w.__webglFramebuffer[W]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let W=0;W<w.__webglColorRenderbuffer.length;W++)w.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[W]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=L.textures;for(let W=0,Y=H.length;W<Y;W++){let oe=n.get(H[W]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(H[W])}n.remove(L)}let F=0;function D(){F=0}function I(){return F}function O(L){F=L}function B(){let L=F;return L>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,L}function X(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function te(L,w){let H=n.get(L);if(L.isVideoTexture&&k(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){let W=L.image;if(W===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(H,L,w);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function q(L,w){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){ve(H,L,w);return}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function J(L,w){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){ve(H,L,w);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function Q(L,w){let H=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&H.__version!==L.version){Ge(H,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}let Ee={[Hn]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},Me={[an]:i.NEAREST,[ul]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},_t={[jp]:i.NEVER,[$p]:i.ALWAYS,[Kp]:i.LESS,[Jl]:i.LEQUAL,[Yp]:i.EQUAL,[Zl]:i.GEQUAL,[Jp]:i.GREATER,[Zp]:i.NOTEQUAL};function it(L,w){if(w.type===ti&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Zt||w.magFilter===Ca||w.magFilter===Tr||w.magFilter===ei||w.minFilter===Zt||w.minFilter===Ca||w.minFilter===Tr||w.minFilter===ei)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Ee[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Ee[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Ee[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Me[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Me[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,_t[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===an||w.minFilter!==Tr&&w.minFilter!==ei||w.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ut(L,w){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",T));let W=w.source,Y=f.get(W);Y===void 0&&(Y={},f.set(W,Y));let oe=X(w);if(oe!==L.__cacheKey){Y[oe]===void 0&&(Y[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Y[oe].usedTimes++;let ce=Y[L.__cacheKey];ce!==void 0&&(Y[L.__cacheKey].usedTimes--,ce.usedTimes===0&&R(w)),L.__cacheKey=oe,L.__webglTexture=Y[oe].texture}return H}function K(L,w,H){return Math.floor(Math.floor(L/H)/w)}function ne(L,w,H,W){let oe=L.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,H,W,w.data);else{oe.sort((Pe,fe)=>Pe.start-fe.start);let ce=0;for(let Pe=1;Pe<oe.length;Pe++){let fe=oe[ce],he=oe[Pe],Ie=fe.start+fe.count,Ne=K(he.start,w.width,4),je=K(fe.start,w.width,4);he.start<=Ie+1&&Ne===je&&K(he.start+he.count-1,w.width,4)===Ne?fe.count=Math.max(fe.count,he.start+he.count-fe.start):(++ce,oe[ce]=he)}oe.length=ce+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Pe=0,fe=oe.length;Pe<fe;Pe++){let he=oe[Pe],Ie=Math.floor(he.start/4),Ne=Math.ceil(he.count/4),je=Ie%w.width,z=Math.floor(Ie/w.width),ue=Ne,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,je,z,ue,$,H,W,w.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function ve(L,w,H){let W=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(W=i.TEXTURE_3D);let Y=ut(L,w),oe=w.source;t.bindTexture(W,L.__webglTexture,i.TEXTURE0+H);let ce=n.get(oe);if(oe.version!==ce.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let $=et.getPrimaries(et.workingColorSpace),de=w.colorSpace===li?null:et.getPrimaries(w.colorSpace),xe=w.colorSpace===li||$===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ee=g(w.image,!1,s.maxTextureSize);ee=En(w,ee);let le=r.convert(w.format,w.colorSpace),Pe=r.convert(w.type),fe=x(w.internalFormat,le,Pe,w.normalized,w.colorSpace,w.isVideoTexture);it(W,w);let he,Ie=w.mipmaps,Ne=w.isVideoTexture!==!0,je=ce.__version===void 0||Y===!0,z=oe.dataReady,ue=S(w,ee);if(w.isDepthTexture)fe=v(w.format===Ks,w.type),je&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,le,Pe,null));else if(w.isDataTexture)if(Ie.length>0){Ne&&je&&t.texStorage2D(i.TEXTURE_2D,ue,fe,Ie[0].width,Ie[0].height);for(let $=0,de=Ie.length;$<de;$++)he=Ie[$],Ne?z&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,he.width,he.height,le,Pe,he.data):t.texImage2D(i.TEXTURE_2D,$,fe,he.width,he.height,0,le,Pe,he.data);w.generateMipmaps=!1}else Ne?(je&&t.texStorage2D(i.TEXTURE_2D,ue,fe,ee.width,ee.height),z&&ne(w,ee,le,Pe)):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,le,Pe,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ne&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,fe,Ie[0].width,Ie[0].height,ee.depth);for(let $=0,de=Ie.length;$<de;$++)if(he=Ie[$],w.format!==ni)if(le!==null)if(Ne){if(z)if(w.layerUpdates.size>0){let xe=ju(he.width,he.height,w.format,w.type);for(let ie of w.layerUpdates){let Le=he.data.subarray(ie*xe/he.data.BYTES_PER_ELEMENT,(ie+1)*xe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ie,he.width,he.height,1,le,Le)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,ee.depth,le,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,fe,he.width,he.height,ee.depth,0,he.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,ee.depth,le,Pe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,fe,he.width,he.height,ee.depth,0,le,Pe,he.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ne&&je&&t.texStorage2D(i.TEXTURE_2D,ue,fe,Ie[0].width,Ie[0].height);for(let $=0,de=Ie.length;$<de;$++)he=Ie[$],w.format!==ni?le!==null?Ne?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(i.TEXTURE_2D,$,fe,he.width,he.height,0,he.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?z&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,he.width,he.height,le,Pe,he.data):t.texImage2D(i.TEXTURE_2D,$,fe,he.width,he.height,0,le,Pe,he.data)}else if(w.isDataArrayTexture)if(Ne){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,fe,ee.width,ee.height,ee.depth),z)if(w.layerUpdates.size>0){let $=ju(ee.width,ee.height,w.format,w.type);for(let de of w.layerUpdates){let xe=ee.data.subarray(de*$/ee.data.BYTES_PER_ELEMENT,(de+1)*$/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,ee.width,ee.height,1,le,Pe,xe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,Pe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,le,Pe,ee.data);else if(w.isData3DTexture)Ne?(je&&t.texStorage3D(i.TEXTURE_3D,ue,fe,ee.width,ee.height,ee.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,Pe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,le,Pe,ee.data);else if(w.isFramebufferTexture){if(je)if(Ne)t.texStorage2D(i.TEXTURE_2D,ue,fe,ee.width,ee.height);else{let $=ee.width,de=ee.height;for(let xe=0;xe<ue;xe++)t.texImage2D(i.TEXTURE_2D,xe,fe,$,de,0,le,Pe,null),$>>=1,de>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),ee.parentNode!==$){$.appendChild(ee),u.add(w),$.onpaint=de=>{let xe=de.changedElements;for(let ie of u)xe.includes(ie.image)&&(ie.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let xe=i.RGBA,ie=i.RGBA,Le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,ie,Le,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ne&&je){let $=Ct(Ie[0]);t.texStorage2D(i.TEXTURE_2D,ue,fe,$.width,$.height)}for(let $=0,de=Ie.length;$<de;$++)he=Ie[$],Ne?z&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,le,Pe,he):t.texImage2D(i.TEXTURE_2D,$,fe,le,Pe,he);w.generateMipmaps=!1}else if(Ne){if(je){let $=Ct(ee);t.texStorage2D(i.TEXTURE_2D,ue,fe,$.width,$.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Pe,ee)}else t.texImage2D(i.TEXTURE_2D,0,fe,le,Pe,ee);p(w)&&_(W),ce.__version=oe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ge(L,w,H){if(w.image.length!==6)return;let W=ut(L,w),Y=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);let oe=n.get(Y);if(Y.version!==oe.__version||W===!0){t.activeTexture(i.TEXTURE0+H);let ce=et.getPrimaries(et.workingColorSpace),Z=w.colorSpace===li?null:et.getPrimaries(w.colorSpace),ee=w.colorSpace===li||ce===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let le=w.isCompressedTexture||w.image[0].isCompressedTexture,Pe=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!le&&!Pe?fe[ie]=g(w.image[ie],!0,s.maxCubemapSize):fe[ie]=Pe?w.image[ie].image:w.image[ie],fe[ie]=En(w,fe[ie]);let he=fe[0],Ie=r.convert(w.format,w.colorSpace),Ne=r.convert(w.type),je=x(w.internalFormat,Ie,Ne,w.normalized,w.colorSpace),z=w.isVideoTexture!==!0,ue=oe.__version===void 0||W===!0,$=Y.dataReady,de=S(w,he);it(i.TEXTURE_CUBE_MAP,w);let xe;if(le){z&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,je,he.width,he.height);for(let ie=0;ie<6;ie++){xe=fe[ie].mipmaps;for(let Le=0;Le<xe.length;Le++){let Te=xe[Le];w.format!==ni?Ie!==null?z?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Te.width,Te.height,Ie,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,je,Te.width,Te.height,0,Te.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Te.width,Te.height,Ie,Ne,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,je,Te.width,Te.height,0,Ie,Ne,Te.data)}}}else{if(xe=w.mipmaps,z&&ue){xe.length>0&&de++;let ie=Ct(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Pe){z?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Ie,Ne,fe[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,fe[ie].width,fe[ie].height,0,Ie,Ne,fe[ie].data);for(let Le=0;Le<xe.length;Le++){let Ht=xe[Le].image[ie].image;z?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Ht.width,Ht.height,Ie,Ne,Ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,je,Ht.width,Ht.height,0,Ie,Ne,Ht.data)}}else{z?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,Ne,fe[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,Ie,Ne,fe[ie]);for(let Le=0;Le<xe.length;Le++){let Te=xe[Le];z?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Ie,Ne,Te.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,je,Ie,Ne,Te.image[ie])}}}p(w)&&_(i.TEXTURE_CUBE_MAP),oe.__version=Y.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function _e(L,w,H,W,Y,oe){let ce=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),ee=x(H.internalFormat,ce,Z,H.normalized,H.colorSpace),le=n.get(w),Pe=n.get(H);if(Pe.__renderTarget=w,!le.__hasExternalTextures){let fe=Math.max(1,w.width>>oe),he=Math.max(1,w.height>>oe);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,oe,ee,fe,he,w.depth,0,ce,Z,null):t.texImage2D(Y,oe,ee,fe,he,0,ce,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),cn(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,Pe.__webglTexture,0,Jt(w)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,Pe.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(L,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){let W=w.depthTexture,Y=W&&W.isDepthTexture?W.type:null,oe=v(w.stencilBuffer,Y),ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;cn(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(w),oe,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(w),oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,oe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,L)}else{let W=w.textures;for(let Y=0;Y<W.length;Y++){let oe=W[Y],ce=r.convert(oe.format,oe.colorSpace),Z=r.convert(oe.type),ee=x(oe.internalFormat,ce,Z,oe.normalized,oe.colorSpace);cn(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(w),ee,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(w),ee,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ee,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fn(L,w,H){let W=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(w.depthTexture);if(Y.__renderTarget=w,(!Y.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,w.depthTexture.addEventListener("dispose",T)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),it(i.TEXTURE_CUBE_MAP,w.depthTexture);let le=r.convert(w.depthTexture.format),Pe=r.convert(w.depthTexture.type),fe;w.depthTexture.format===zi?fe=i.DEPTH_COMPONENT24:w.depthTexture.format===Ks&&(fe=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,w.width,w.height,0,le,Pe,null)}}else te(w.depthTexture,0);let oe=Y.__webglTexture,ce=Jt(w),Z=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ee=w.depthTexture.format===Ks?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===zi)cn(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Z,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Z,oe,0);else if(w.depthTexture.format===Ks)cn(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Z,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Z,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(L){let w=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){let W=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),W){let Y=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),w.__depthDisposeCallback=Y}w.__boundDepthTexture=W}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)fn(w.__webglFramebuffer[W],L,W);else{let W=L.texture.mipmaps;W&&W.length>0?fn(w.__webglFramebuffer[0],L,0):fn(w.__webglFramebuffer,L,0)}else if(H){w.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[W]),w.__webglDepthbuffer[W]===void 0)w.__webglDepthbuffer[W]=i.createRenderbuffer(),tt(w.__webglDepthbuffer[W],L,!1);else{let Y=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,oe)}}else{let W=L.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),tt(w.__webglDepthbuffer,L,!1);else{let Y=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(L,w,H){let W=n.get(L);w!==void 0&&_e(W.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&st(L)}function Bt(L){let w=L.texture,H=n.get(L),W=n.get(w);L.addEventListener("dispose",y);let Y=L.textures,oe=L.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=w.version,a.memory.textures++),oe){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let ee=0;ee<w.mipmaps.length;ee++)H.__webglFramebuffer[Z][ee]=i.createFramebuffer()}else H.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<w.mipmaps.length;Z++)H.__webglFramebuffer[Z]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Z=0,ee=Y.length;Z<ee;Z++){let le=n.get(Y[Z]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&cn(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let ee=Y[Z];H.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);let le=r.convert(ee.format,ee.colorSpace),Pe=r.convert(ee.type),fe=x(ee.internalFormat,le,Pe,ee.normalized,ee.colorSpace,L.isXRRenderTarget===!0),he=Jt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,fe,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),it(i.TEXTURE_CUBE_MAP,w);for(let Z=0;Z<6;Z++)if(w.mipmaps&&w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)_e(H.__webglFramebuffer[Z][ee],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else _e(H.__webglFramebuffer[Z],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(w)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let Z=0,ee=Y.length;Z<ee;Z++){let le=Y[Z],Pe=n.get(le),fe=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Pe.__webglTexture),it(fe,le),_e(H.__webglFramebuffer,L,le,i.COLOR_ATTACHMENT0+Z,fe,0),p(le)&&_(fe)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Z=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,W.__webglTexture),it(Z,w),w.mipmaps&&w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)_e(H.__webglFramebuffer[ee],L,w,i.COLOR_ATTACHMENT0,Z,ee);else _e(H.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,Z,0);p(w)&&_(Z),t.unbindTexture()}L.depthBuffer&&st(L)}function lt(L){let w=L.textures;for(let H=0,W=w.length;H<W;H++){let Y=w[H];if(p(Y)){let oe=M(L),ce=n.get(Y).__webglTexture;t.bindTexture(oe,ce),_(oe),t.unbindTexture()}}}let jt=[],_n=[];function Bn(L){if(L.samples>0){if(cn(L)===!1){let w=L.textures,H=L.width,W=L.height,Y=i.COLOR_BUFFER_BIT,oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(L),Z=w.length>1;if(Z)for(let le=0;le<w.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let ee=L.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<w.length;le++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);let Pe=n.get(w[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,H,W,0,0,H,W,Y,i.NEAREST),l===!0&&(jt.length=0,_n.length=0,jt.push(i.COLOR_ATTACHMENT0+le),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(jt.push(oe),_n.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_n)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let le=0;le<w.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);let Pe=n.get(w[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Jt(L){return Math.min(s.maxSamples,L.samples)}function cn(L){let w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function k(L){let w=a.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function En(L,w){let H=L.colorSpace,W=L.format,Y=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Fn&&H!==li&&(et.getTransfer(H)===Tt?(W!==ni||Y!==Kn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",H)),w}function Ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=mt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Bn,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=cn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rM(i,e){function t(n,s=li){let r,a=et.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lu)return i.BYTE;if(n===Du)return i.SHORT;if(n===Pa)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===Uu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===ni)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Ks)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===Ys)return i.RG;if(n===xl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Po||n===Io||n===Lo||n===Do)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===yl||n===vl||n===Ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===wl||n===El||n===Tl||n===Al||n===Fo||n===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===wl)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tl)return r.COMPRESSED_R11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fo)return r.COMPRESSED_RG11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Fl||n===Nl||n===Ul||n===Ol||n===zl||n===kl||n===Bl||n===Hl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Wl||n===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===jl||n===No||n===Kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ia?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var aM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oM=`
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

}`,od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new bo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:aM,fragmentShader:oM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cd=class extends ki{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new od,p={},_=t.getContextAttributes(),M=null,x=null,v=[],S=[],T=new He,y=null,E=null,R=new rn;R.viewport=new xt;let P=new rn;P.viewport=new xt;let F=[R,P],D=new ll,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=v[K];return ne===void 0&&(ne=new ma,v[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=v[K];return ne===void 0&&(ne=new ma,v[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=v[K];return ne===void 0&&(ne=new ma,v[K]=ne),ne.getHandSpace()};function B(K){let ne=S.indexOf(K.inputSource);if(ne===-1)return;let ve=v[ne];ve!==void 0&&(ve.update(K.inputSource,K.frame,c||a),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",te);for(let K=0;K<v.length;K++){let ne=S[K];ne!==null&&(S[K]=null,v[K].disconnect(ne))}I=null,O=null,g.reset();for(let K in p)delete p[K];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,x=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ge=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=_.stencil?Ks:zi,Ge=_.stencil?Ia:Ei);let tt={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Vn(d.textureWidth,d.textureHeight,{format:ni,type:Kn,depthTexture:new Gs(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Vn(f.framebufferWidth,f.framebufferHeight,{format:ni,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(K){for(let ne=0;ne<K.removed.length;ne++){let ve=K.removed[ne],Ge=S.indexOf(ve);Ge>=0&&(S[Ge]=null,v[Ge].disconnect(ve))}for(let ne=0;ne<K.added.length;ne++){let ve=K.added[ne],Ge=S.indexOf(ve);if(Ge===-1){for(let tt=0;tt<v.length;tt++)if(tt>=S.length){S.push(ve),Ge=tt;break}else if(S[tt]===null){S[tt]=ve,Ge=tt;break}if(Ge===-1)break}let _e=v[Ge];_e&&_e.connect(ve)}}let q=new C,J=new C;function Q(K,ne,ve){q.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);let Ge=q.distanceTo(J),_e=ne.projectionMatrix.elements,tt=ve.projectionMatrix.elements,fn=_e[14]/(_e[10]-1),st=_e[14]/(_e[10]+1),mt=(_e[9]+1)/_e[5],Bt=(_e[9]-1)/_e[5],lt=(_e[8]-1)/_e[0],jt=(tt[8]+1)/tt[0],_n=fn*lt,Bn=fn*jt,Jt=Ge/(-lt+jt),cn=Jt*-lt;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(cn),K.translateZ(Jt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_e[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let k=fn+Jt,En=st+Jt,Ct=_n-cn,L=Bn+(Ge-cn),w=mt*st/En*k,H=Bt*st/En*k;K.projectionMatrix.makePerspective(Ct,L,w,H,k,En),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ee(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ne=K.near,ve=K.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),D.near=P.near=R.near=ne,D.far=P.far=R.far=ve,(I!==D.near||O!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,O=D.far),D.layers.mask=K.layers.mask|6,R.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Ge=K.parent,_e=D.cameras;Ee(D,Ge);for(let tt=0;tt<_e.length;tt++)Ee(_e[tt],Ge);_e.length===2?Q(D,R,P):D.projectionMatrix.copy(R.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),Me(K,D,Ge)};function Me(K,ne,ve){ve===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=gr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let _t=null;function it(K,ne){if(h=ne.getViewerPose(c||a),m=ne,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ge=!1;ve.length!==D.cameras.length&&(D.cameras.length=0,Ge=!0);for(let st=0;st<ve.length;st++){let mt=ve[st],Bt=null;if(f!==null)Bt=f.getViewport(mt);else{let jt=u.getViewSubImage(d,mt);Bt=jt.viewport,st===0&&(e.setRenderTargetTextures(x,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(x))}let lt=F[st];lt===void 0&&(lt=new rn,lt.layers.enable(st),lt.viewport=new xt,F[st]=lt),lt.matrix.fromArray(mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),st===0&&(D.matrix.copy(lt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ge===!0&&D.cameras.push(lt)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let st=u.getDepthInformation(ve[0]);st&&st.isValid&&st.texture&&g.init(st,s.renderState)}if(_e&&_e.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let st=0;st<ve.length;st++){let mt=ve[st].camera;if(mt){let Bt=p[mt];Bt||(Bt=new bo,p[mt]=Bt);let lt=u.getCameraImage(mt);Bt.sourceTexture=lt}}}}for(let ve=0;ve<v.length;ve++){let Ge=S[ve],_e=v[ve];Ge!==null&&_e!==void 0&&_e.update(Ge,ne,c||a)}_t&&_t(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}let ut=new Rm;ut.setAnimationLoop(it),this.setAnimationLoop=function(K){_t=K},this.dispose=function(){}}},cM=new Ve,Fm=new ke;Fm.set(-1,0,0,0,1,0,0,0,1);function lM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Wu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Un&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Un&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,x=_.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fm),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Un&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=s[x.id];S===void 0&&(g(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",_));let T=v.program;n.updateUBOMapping(x,T);let y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let v=u();x.__bindingPointIndex=v;let S=i.createBuffer(),T=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=s[x.id],S=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let y=0,E=S.length;y<E;y++){let R=S[y];if(Array.isArray(R))for(let P=0,F=R.length;P<F;P++)f(R[P],y,P,T);else f(R,y,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,v,S,T){if(b(x,v,S,T)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){let F=E[P],D=p(F);m(F,x.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function m(x,v,S){typeof x=="number"||typeof x=="boolean"?v[0]=x:x.isMatrix3?(v[0]=x.elements[0],v[1]=x.elements[1],v[2]=x.elements[2],v[3]=0,v[4]=x.elements[3],v[5]=x.elements[4],v[6]=x.elements[5],v[7]=0,v[8]=x.elements[6],v[9]=x.elements[7],v[10]=x.elements[8],v[11]=0):ArrayBuffer.isView(x)?v.set(new x.constructor(x.buffer,x.byteOffset,v.length)):x.toArray(v,S)}function b(x,v,S,T){let y=x.value,E=v+"_"+S;if(T[E]===void 0)return typeof y=="number"||typeof y=="boolean"?T[E]=y:ArrayBuffer.isView(y)?T[E]=y.slice():T[E]=y.clone(),!0;{let R=T[E];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return T[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(x){let v=x.uniforms,S=0,T=16;for(let E=0,R=v.length;E<R;E++){let P=Array.isArray(v[E])?v[E]:[v[E]];for(let F=0,D=P.length;F<D;F++){let I=P[F],O=Array.isArray(I.value)?I.value:[I.value];for(let B=0,X=O.length;B<X;B++){let te=O[B],q=p(te),J=S%T,Q=J%q.boundary,Ee=J+Q;S+=Q,Ee!==0&&T-Ee<q.storage&&(S+=T-Ee),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=q.storage}}}let y=S%T;return y>0&&(S+=T-y),x.__size=S,x.__cache={},this}function p(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",x),v}function _(x){let v=x.target;v.removeEventListener("dispose",_);let S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function M(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var uM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function dM(){return Wi===null&&(Wi=new Hs(uM,16,16,Ys,Ti),Wi.name="DFG_LUT",Wi.minFilter=Zt,Wi.magFilter=Zt,Wi.wrapS=ci,Wi.wrapT=ci,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var Bo=class{constructor(e={}){let{canvas:t=Qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Kn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let b=f,g=new Set([bl,xl,gl]),p=new Set([Kn,Ei,Pa,Ia,fl,pl]),_=new Uint32Array(4),M=new Int32Array(4),x=new C,v=null,S=null,T=[],y=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,F=null,D=null,I=null,O=null;this._outputColorSpace=Gt;let B=0,X=0,te=null,q=-1,J=null,Q=new xt,Ee=new xt,Me=null,_t=new De(0),it=0,ut=t.width,K=t.height,ne=1,ve=null,Ge=null,_e=new xt(0,0,ut,K),tt=new xt(0,0,ut,K),fn=!1,st=new _a,mt=!1,Bt=!1,lt=new Ve,jt=new C,_n=new xt,Bn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function cn(){return te===null?ne:1}let k=n;function En(A,U){return t.getContext(A,U)}let Ct,L,w,H,W,Y,oe,ce,Z,ee,le,Pe,fe,he,Ie,Ne,je,z,ue,$,de,xe,ie;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ht,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",fi,!1),k===null){let U="webgl2";if(k=En(U,A),k===null)throw En(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(A){throw t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",fi,!1),ze("WebGLRenderer: "+A.message),A}function Le(){Ct=new _y(k),Ct.init(),de=new rM(k,Ct),L=new ly(k,Ct,e,de),w=new iM(k,Ct),L.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),D=k.createFramebuffer(),I=k.createFramebuffer(),O=k.createFramebuffer(),H=new My(k),W=new Gv,Y=new sM(k,Ct,w,W,L,de,H),oe=new by(R),ce=new wx(k),xe=new oy(k,ce),Z=new yy(k,ce,H,xe),ee=new wy(k,Z,ce,xe,H),z=new Sy(k,L,Y),Ie=new hy(W),le=new Vv(R,oe,Ct,L,xe,Ie),Pe=new lM(R,W),fe=new qv,he=new Zv(Ct),je=new ay(R,oe,w,ee,m,l),Ne=new nM(R,ee,L),ie=new hM(k,H,L,w),ue=new cy(k,Ct,H),$=new vy(k,Ct,H),H.programs=le.programs,R.capabilities=L,R.extensions=Ct,R.properties=W,R.renderLists=fe,R.shadowMap=Ne,R.state=w,R.info=H}b!==Kn&&(E=new Ty(b,t.width,t.height,o,s,r));let Te=new cd(R,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(ut,K,!1))},this.getSize=function(A){return A.set(ut,K)},this.setSize=function(A,U,j=!0){if(Te.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=A,K=U,t.width=Math.floor(A*ne),t.height=Math.floor(U*ne),j===!0&&(t.style.width=A+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(ut*ne,K*ne).floor()},this.setDrawingBufferSize=function(A,U,j){ut=A,K=U,ne=j,t.width=Math.floor(A*j),t.height=Math.floor(U*j),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(b===Kn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Q)},this.getViewport=function(A){return A.copy(_e)},this.setViewport=function(A,U,j,V){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,U,j,V),w.viewport(Q.copy(_e).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(tt)},this.setScissor=function(A,U,j,V){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,U,j,V),w.scissor(Ee.copy(tt).multiplyScalar(ne).round())},this.getScissorTest=function(){return fn},this.setScissorTest=function(A){w.setScissorTest(fn=A)},this.setOpaqueSort=function(A){ve=A},this.setTransparentSort=function(A){Ge=A},this.getClearColor=function(A){return A.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,j=!0){let V=0;if(A){let G=!1;if(te!==null){let ge=te.texture.format;G=g.has(ge)}if(G){let ge=te.texture.type,ye=p.has(ge),me=je.getClearColor(),Se=je.getClearAlpha(),Re=me.r,Je=me.g,rt=me.b;ye?(_[0]=Re,_[1]=Je,_[2]=rt,_[3]=Se,k.clearBufferuiv(k.COLOR,0,_)):(M[0]=Re,M[1]=Je,M[2]=rt,M[3]=Se,k.clearBufferiv(k.COLOR,0,M))}else V|=k.COLOR_BUFFER_BIT}U&&(V|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",fi,!1),je.dispose(),fe.dispose(),he.dispose(),W.dispose(),oe.dispose(),ee.dispose(),xe.dispose(),ie.dispose(),le.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ef),Te.removeEventListener("sessionend",Tf),cr.stop()};function Ht(A){A.preventDefault(),uo("WebGLRenderer: Context Lost."),P=!0}function wt(){uo("WebGLRenderer: Context Restored."),P=!1;let A=H.autoReset,U=Ne.enabled,j=Ne.autoUpdate,V=Ne.needsUpdate,G=Ne.type;Le(),H.autoReset=A,Ne.enabled=U,Ne.autoUpdate=j,Ne.needsUpdate=V,Ne.type=G}function fi(A){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fi(A){let U=A.target;U.removeEventListener("dispose",Fi),f0(U)}function f0(A){p0(A),W.remove(A)}function p0(A){let U=W.get(A).programs;U!==void 0&&(U.forEach(function(j){le.releaseProgram(j)}),A.isShaderMaterial&&le.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,j,V,G,ge){U===null&&(U=Bn);let ye=G.isMesh&&G.matrixWorld.determinantAffine()<0,me=x0(A,U,j,V,G);w.setMaterial(V,ye);let Se=j.index,Re=1;if(V.wireframe===!0){if(Se=Z.getWireframeAttribute(j),Se===void 0)return;Re=2}let Je=j.drawRange,rt=j.attributes.position,we=Je.start*Re,Et=(Je.start+Je.count)*Re;ge!==null&&(we=Math.max(we,ge.start*Re),Et=Math.min(Et,(ge.start+ge.count)*Re)),Se!==null?(we=Math.max(we,0),Et=Math.min(Et,Se.count)):rt!=null&&(we=Math.max(we,0),Et=Math.min(Et,rt.count));let ln=Et-we;if(ln<0||ln===1/0)return;xe.setup(G,V,me,j,Se);let qt,Ut=ue;if(Se!==null&&(qt=ce.get(Se),Ut=$,Ut.setIndex(qt)),G.isMesh)V.wireframe===!0?(w.setLineWidth(V.wireframeLinewidth*cn()),Ut.setMode(k.LINES)):Ut.setMode(k.TRIANGLES);else if(G.isLine){let Tn=V.linewidth;Tn===void 0&&(Tn=1),w.setLineWidth(Tn*cn()),G.isLineSegments?Ut.setMode(k.LINES):G.isLineLoop?Ut.setMode(k.LINE_LOOP):Ut.setMode(k.LINE_STRIP)}else G.isPoints?Ut.setMode(k.POINTS):G.isSprite&&Ut.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Tn=G._multiDrawStarts,be=G._multiDrawCounts,Ln=G._multiDrawCount,dt=Se?ce.get(Se).bytesPerElement:1,ai=W.get(V).currentProgram.getUniforms();for(let Ni=0;Ni<Ln;Ni++)ai.setValue(k,"_gl_DrawID",Ni),Ut.render(Tn[Ni]/dt,be[Ni])}else if(G.isInstancedMesh)Ut.renderInstances(we,ln,G.count);else if(j.isInstancedBufferGeometry){let Tn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,be=Math.min(j.instanceCount,Tn);Ut.renderInstances(we,ln,be)}else Ut.render(we,ln)};function wf(A,U,j,V){F!==null&&A.isNodeMaterial&&F.setObject(V,A),mt===!0&&Ie.setState(A,j,!1),A.transparent===!0&&A.side===jn&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,hc(A,U,V),A.side=Vi,A.needsUpdate=!0,hc(A,U,V),A.side=jn):hc(A,U,V)}this.compile=function(A,U,j=null){j===null&&(j=A),F!==null&&F.renderStart(A,U,j),S=he.get(j),S.init(U),y.push(S),j.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),A!==j&&A.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),Bt=this.localClippingEnabled,mt=Ie.init(this.clippingPlanes,Bt),mt===!0&&Ie.setGlobalState(this.clippingPlanes,U),F!==null&&Ne.render(S.state.shadowsArray,j,U);let V=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let ye=0;ye<ge.length;ye++){let me=ge[ye];wf(me,j,U,G),V.add(me)}else wf(ge,j,U,G),V.add(ge)}),S=y.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(A,U,j=null){let V=this.compile(A,U,j);return new Promise(G=>{function ge(){if(V.forEach(function(ye){let Se=W.get(ye).currentProgram;(Se===void 0||Se.isReady())&&V.delete(ye)}),V.size===0){G(A);return}setTimeout(ge,10)}Ct.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Dh=null;function m0(A){Dh&&Dh(A)}function Ef(){cr.stop()}function Tf(){cr.start()}let cr=new Rm;cr.setAnimationLoop(m0),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(A){Dh=A,Te.setAnimationLoop(A),A===null?cr.stop():cr.start()},Te.addEventListener("sessionstart",Ef),Te.addEventListener("sessionend",Tf),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(A,U);let j=Te.enabled===!0&&Te.isPresenting===!0,V=E!==null&&(te===null||j)&&E.begin(R,te);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(U),U=Te.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,U,te),S=he.get(A,y.length),S.init(U),S.state.textureUnits=Y.getTextureUnits(),y.push(S),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),st.setFromProjectionMatrix(lt,_i,U.reversedDepth),Bt=this.localClippingEnabled,mt=Ie.init(this.clippingPlanes,Bt),v=fe.get(A,T.length),v.init(),T.push(v),Te.enabled===!0&&Te.isPresenting===!0){let ye=R.xr.getDepthSensingMesh();ye!==null&&Fh(ye,U,-1/0,R.sortObjects)}Fh(A,U,0,R.sortObjects),v.finish(),F!==null&&F.updateLights(S.state.lightsArray),R.sortObjects===!0&&v.sort(ve,Ge),Jt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Jt&&je.addToRenderList(v,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Ie.beginShadows();let G=S.state.shadowsArray;if(Ne.render(G,A,U),mt===!0&&Ie.endShadows(),(V&&E.hasRenderPass())===!1){let ye=v.opaque,me=v.transmissive;if(S.setupLights(),U.isArrayCamera){let Se=U.cameras;if(me.length>0)for(let Re=0,Je=Se.length;Re<Je;Re++){let rt=Se[Re];Rf(ye,me,A,rt)}Jt&&je.render(A);for(let Re=0,Je=Se.length;Re<Je;Re++){let rt=Se[Re];Af(v,A,rt,rt.viewport)}}else me.length>0&&Rf(ye,me,A,U),Jt&&je.render(A),Af(v,A,U)}te!==null&&X===0&&(Y.updateMultisampleRenderTarget(te),Y.updateRenderTargetMipmap(te)),V&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,U),xe.resetDefaultState(),q=-1,J=null,y.pop(),y.length>0?(S=y[y.length-1],Y.setTextureUnits(S.state.textureUnits),mt===!0&&Ie.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,F!==null&&F.renderEnd()};function Fh(A,U,j,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(st)){V&&_n.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);let ye=ee.update(A),me=A.material;me.visible&&v.push(A,ye,me,j,_n.z,null,U)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(st))){let ye=ee.update(A),me=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_n.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),_n.copy(ye.boundingSphere.center)),_n.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(me)){let Se=ye.groups;for(let Re=0,Je=Se.length;Re<Je;Re++){let rt=Se[Re],we=me[rt.materialIndex];we&&we.visible&&v.push(A,ye,we,j,_n.z,rt,U)}}else me.visible&&v.push(A,ye,me,j,_n.z,null,U)}}let ge=A.children;for(let ye=0,me=ge.length;ye<me;ye++)Fh(ge[ye],U,j,V)}function Af(A,U,j,V){let{opaque:G,transmissive:ge,transparent:ye}=A;S.setupLightsView(j),mt===!0&&Ie.setGlobalState(R.clippingPlanes,j),V&&w.viewport(Q.copy(V)),G.length>0&&lc(G,U,j),ge.length>0&&lc(ge,U,j),ye.length>0&&lc(ye,U,j),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Rf(A,U,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let we=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new Vn(1,1,{generateMipmaps:!0,type:we?Ti:Kn,minFilter:ei,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let ge=S.state.transmissionRenderTarget[V.id],ye=V.viewport||Q;ge.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);let me=R.getRenderTarget(),Se=R.getActiveCubeFace(),Re=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(_t),it=R.getClearAlpha(),it<1&&R.setClearColor(16777215,.5),R.clear(),Jt&&je.render(j);let Je=R.toneMapping;R.toneMapping=wi;let rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),mt===!0&&Ie.setGlobalState(R.clippingPlanes,V),lc(A,j,V),Y.updateMultisampleRenderTarget(ge),Y.updateRenderTargetMipmap(ge),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Et=0,ln=U.length;Et<ln;Et++){let qt=U[Et],{object:Ut,geometry:Tn,material:be,group:Ln}=qt;if(be.side===jn&&Ut.layers.test(V.layers)){let dt=be.side;be.side=Un,be.needsUpdate=!0,Cf(Ut,j,V,Tn,be,Ln),be.side=dt,be.needsUpdate=!0,we=!0}}we===!0&&(Y.updateMultisampleRenderTarget(ge),Y.updateRenderTargetMipmap(ge))}R.setRenderTarget(me,Se,Re),R.setClearColor(_t,it),rt!==void 0&&(V.viewport=rt),R.toneMapping=Je}function lc(A,U,j){let V=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ge=A.length;G<ge;G++){let ye=A[G],{object:me,geometry:Se,group:Re}=ye,Je=ye.material;Je.allowOverride===!0&&V!==null&&(Je=V),me.layers.test(j.layers)&&Cf(me,U,j,Se,Je,Re)}}function Cf(A,U,j,V,G,ge){F!==null&&G.isNodeMaterial&&F.setObject(A,G),A.onBeforeRender(R,U,j,V,G,ge),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(R,U,j,V,A,ge),G.transparent===!0&&G.side===jn&&G.forceSinglePass===!1?(G.side=Un,G.needsUpdate=!0,R.renderBufferDirect(j,U,V,G,A,ge),G.side=Vi,G.needsUpdate=!0,R.renderBufferDirect(j,U,V,G,A,ge),G.side=jn):R.renderBufferDirect(j,U,V,G,A,ge),A.onAfterRender(R,U,j,V,G,ge)}function hc(A,U,j){U.isScene!==!0&&(U=Bn);let V=W.get(A),G=S.state.lights,ge=S.state.shadowsArray,ye=G.state.version,me=le.getParameters(A,G.state,ge,U,j,S.state.lightProbeGridArray),Se=le.getProgramCacheKey(me),Re=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=oe.get(A.envMap||V.environment,Je),V.envMapRotation=V.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Re===void 0&&(A.addEventListener("dispose",Fi),Re=new Map,V.programs=Re);let rt=Re.get(Se);if(rt!==void 0){if(V.currentProgram===rt&&V.lightsStateVersion===ye)return If(A,me),rt}else me.uniforms=le.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,j,me),A.onBeforeCompile(me,R),rt=le.acquireProgram(me,Se),Re.set(Se,rt),V.uniforms=me.uniforms;let we=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(we.clippingPlanes=Ie.uniform),If(A,me),V.needsLights=_0(A),V.lightsStateVersion=ye,V.needsLights&&(we.ambientLightColor.value=G.state.ambient,we.lightProbe.value=G.state.probe,we.sunLights.value=G.state.sun,we.sunLightShadows.value=G.state.sunShadow,we.directionalLights.value=G.state.directional,we.directionalLightShadows.value=G.state.directionalShadow,we.spotLights.value=G.state.spot,we.spotLightShadows.value=G.state.spotShadow,we.rectAreaLights.value=G.state.rectArea,we.ltc_1.value=G.state.rectAreaLTC1,we.ltc_2.value=G.state.rectAreaLTC2,we.pointLights.value=G.state.point,we.pointLightShadows.value=G.state.pointShadow,we.hemisphereLights.value=G.state.hemi,we.sunShadowMatrix.value=G.state.sunShadowMatrix,we.sunShadowCascade.value=G.state.sunShadowCascade,we.directionalShadowMatrix.value=G.state.directionalShadowMatrix,we.spotLightMatrix.value=G.state.spotLightMatrix,we.spotLightMap.value=G.state.spotLightMap,we.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=rt,V.uniformsList=null,rt}function Pf(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=Na.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function If(A,U){let j=W.get(A);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function g0(A,U){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let j=0,V=A.length;j<V;j++){let G=A[j];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function x0(A,U,j,V,G){U.isScene!==!0&&(U=Bn),Y.resetTextureUnits();let ge=U.fog,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,me=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:et.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=oe.get(V.envMap||ye,Se),Je=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,rt=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!j.morphAttributes.position,Et=!!j.morphAttributes.normal,ln=!!j.morphAttributes.color,qt=wi;V.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(qt=R.toneMapping);let Ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Tn=Ut!==void 0?Ut.length:0,be=W.get(V),Ln=S.state.lights;if(mt===!0&&(Bt===!0||A!==J)){let Vt=A===J&&V.id===q;Ie.setState(V,A,Vt)}let dt=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ln.state.version||be.outputColorSpace!==me||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Re||V.fog===!0&&be.fog!==ge||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ie.numPlanes||be.numIntersection!==Ie.numIntersection)||be.vertexAlphas!==Je||be.vertexTangents!==rt||be.morphTargets!==we||be.morphNormals!==Et||be.morphColors!==ln||be.toneMapping!==qt||be.morphTargetsCount!==Tn||!!be.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,be.__version=V.version);let ai=be.currentProgram;dt===!0&&(ai=hc(V,U,G),F&&V.isNodeMaterial&&F.onUpdateProgram(V,ai,be));let Ni=!1,Cs=!1,qr=!1,Lt=ai.getUniforms(),sn=be.uniforms;if(w.useProgram(ai.program)&&(Ni=!0,Cs=!0,qr=!0),V.id!==q&&(q=V.id,Cs=!0),be.needsLights){let Vt=g0(S.state.lightProbeGridArray,G);be.lightProbeGrid!==Vt&&(be.lightProbeGrid=Vt,Cs=!0)}if(Ni||J!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(k,"projectionMatrix",A.projectionMatrix),Lt.setValue(k,"viewMatrix",A.matrixWorldInverse);let Is=Lt.map.cameraPosition;Is!==void 0&&Is.setValue(k,jt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Lt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Lt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,Cs=!0,qr=!0)}if(be.needsLights&&(Ln.state.sunShadowMap.length>0&&Lt.setValue(k,"sunShadowMap",Ln.state.sunShadowMap,Y),Ln.state.directionalShadowMap.length>0&&Lt.setValue(k,"directionalShadowMap",Ln.state.directionalShadowMap,Y),Ln.state.spotShadowMap.length>0&&Lt.setValue(k,"spotShadowMap",Ln.state.spotShadowMap,Y),Ln.state.pointShadowMap.length>0&&Lt.setValue(k,"pointShadowMap",Ln.state.pointShadowMap,Y)),G.isSkinnedMesh){Lt.setOptional(k,G,"bindMatrix"),Lt.setOptional(k,G,"bindMatrixInverse");let Vt=G.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Lt.setValue(k,"boneTexture",Vt.boneTexture,Y))}G.isBatchedMesh&&(Lt.setOptional(k,G,"batchingTexture"),Lt.setValue(k,"batchingTexture",G._matricesTexture,Y),Lt.setOptional(k,G,"batchingIdTexture"),Lt.setValue(k,"batchingIdTexture",G._indirectTexture,Y),Lt.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&Lt.setValue(k,"batchingColorTexture",G._colorsTexture,Y));let Ps=j.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&z.update(G,j,ai),(Cs||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,Lt.setValue(k,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(sn.envMapIntensity.value=U.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=dM()),Cs){if(Lt.setValue(k,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&b0(sn,qr),ge&&V.fog===!0&&Pe.refreshFogUniforms(sn,ge),Pe.refreshMaterialUniforms(sn,V,ne,K,S.state.transmissionRenderTarget[A.id]),be.needsLights&&be.lightProbeGrid){let Vt=be.lightProbeGrid;sn.probesSH.value=Vt.texture,sn.probesMin.value.copy(Vt.boundingBox.min),sn.probesMax.value.copy(Vt.boundingBox.max),sn.probesResolution.value.copy(Vt.resolution)}Na.upload(k,Pf(be),sn,Y)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Na.upload(k,Pf(be),sn,Y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Lt.setValue(k,"center",G.center),Lt.setValue(k,"modelViewMatrix",G.modelViewMatrix),Lt.setValue(k,"normalMatrix",G.normalMatrix),Lt.setValue(k,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let Vt=V.uniformsGroups;for(let Is=0,Xr=Vt.length;Is<Xr;Is++){let Df=Vt[Is];ie.update(Df,ai),ie.bind(Df,ai)}}return ai}function b0(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.sunLights.needsUpdate=U,A.sunLightShadows.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function _0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(A,U,j){let V=W.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=U,W.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){let j=W.get(A);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,j=0){te=A,B=U,X=j;let V=null,G=!1,ge=!1;if(A){let me=W.get(A);if(me.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(k.FRAMEBUFFER,me.__webglFramebuffer),Q.copy(A.viewport),Ee.copy(A.scissor),Me=A.scissorTest,w.viewport(Q),w.scissor(Ee),w.setScissorTest(Me),q=-1;return}else if(me.__webglFramebuffer===void 0)Y.setupRenderTarget(A);else if(me.__hasExternalTextures)Y.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Je=A.depthTexture;if(me.__boundDepthTexture!==Je){if(Je!==null&&W.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(A)}}let Se=A.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Re=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?V=Re[U][j]:V=Re[U],G=!0):A.samples>0&&Y.useMultisampledRTT(A)===!1?V=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[j]:V=Re,Q.copy(A.viewport),Ee.copy(A.scissor),Me=A.scissorTest}else Q.copy(_e).multiplyScalar(ne).floor(),Ee.copy(tt).multiplyScalar(ne).floor(),Me=fn;if(j!==0&&(V=D),w.bindFramebuffer(k.FRAMEBUFFER,V)&&w.drawBuffers(A,V),w.viewport(Q),w.scissor(Ee),w.setScissorTest(Me),G){let me=W.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,j)}else if(ge){let me=U;for(let Se=0;Se<A.textures.length;Se++){let Re=W.get(A.textures[Se]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Se,Re.__webglTexture,j,me)}}else if(A!==null&&j!==0){let me=W.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,me.__webglTexture,j)}q=-1};function Lf(A){let U=W.get(A);return(U.__readFormat!==A.format||U.__readType!==A.type)&&(U.__readFormat=A.format,U.__readType=A.type,U.__formatReadable=L.textureFormatReadable(A.format),U.__typeReadable=L.textureTypeReadable(A.type)),U}this.readRenderTargetPixels=function(A,U,j,V,G,ge,ye,me=0){if(!(A&&A.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){w.bindFramebuffer(k.FRAMEBUFFER,Se);try{let Re=A.textures[me],Je=Re.format,rt=Re.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+me);let we=Lf(Re);if(we.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&j>=0&&j<=A.height-G&&k.readPixels(U,j,V,G,de.convert(Je),de.convert(rt),ge)}finally{let Re=te!==null?W.get(te).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,U,j,V,G,ge,ye,me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se)if(U>=0&&U<=A.width-V&&j>=0&&j<=A.height-G){w.bindFramebuffer(k.FRAMEBUFFER,Se);let Re=A.textures[me],Je=Re.format,rt=Re.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+me);let we=Lf(Re);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Et),k.bufferData(k.PIXEL_PACK_BUFFER,ge.byteLength,k.STREAM_READ),k.readPixels(U,j,V,G,de.convert(Je),de.convert(rt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let ln=te!==null?W.get(te).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,ln);let qt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await tm(k,qt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Et),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ge),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Et),k.deleteSync(qt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,j=0){let V=Math.pow(2,-j),G=Math.floor(A.image.width*V),ge=Math.floor(A.image.height*V),ye=U!==null?U.x:0,me=U!==null?U.y:0;Y.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,ye,me,G,ge),w.unbindTexture()},this.copyTextureToTexture=function(A,U,j=null,V=null,G=0,ge=0){let ye,me,Se,Re,Je,rt,we,Et,ln,qt=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(j!==null)ye=j.max.x-j.min.x,me=j.max.y-j.min.y,Se=j.isBox3?j.max.z-j.min.z:1,Re=j.min.x,Je=j.min.y,rt=j.isBox3?j.min.z:0;else{let sn=Math.pow(2,-G);ye=Math.floor(qt.width*sn),me=Math.floor(qt.height*sn),A.isDataArrayTexture?Se=qt.depth:A.isData3DTexture?Se=Math.floor(qt.depth*sn):Se=1,Re=0,Je=0,rt=0}V!==null?(we=V.x,Et=V.y,ln=V.z):(we=0,Et=0,ln=0);let Ut=de.convert(U.format),Tn=de.convert(U.type),be;U.isData3DTexture?(Y.setTexture3D(U,0),be=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),be=k.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),be=k.TEXTURE_2D),w.activeTexture(k.TEXTURE0),w.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);let Ln=w.getParameter(k.UNPACK_ROW_LENGTH),dt=w.getParameter(k.UNPACK_IMAGE_HEIGHT),ai=w.getParameter(k.UNPACK_SKIP_PIXELS),Ni=w.getParameter(k.UNPACK_SKIP_ROWS),Cs=w.getParameter(k.UNPACK_SKIP_IMAGES);w.pixelStorei(k.UNPACK_ROW_LENGTH,qt.width),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qt.height),w.pixelStorei(k.UNPACK_SKIP_PIXELS,Re),w.pixelStorei(k.UNPACK_SKIP_ROWS,Je),w.pixelStorei(k.UNPACK_SKIP_IMAGES,rt);let qr=A.isDataArrayTexture||A.isData3DTexture,Lt=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){let sn=W.get(A),Ps=W.get(U),Vt=W.get(sn.__renderTarget),Is=W.get(Ps.__renderTarget);w.bindFramebuffer(k.READ_FRAMEBUFFER,Vt.__webglFramebuffer),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let Xr=0;Xr<Se;Xr++)qr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,W.get(A).__webglTexture,G,rt+Xr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,W.get(U).__webglTexture,ge,ln+Xr)),k.blitFramebuffer(Re,Je,ye,me,we,Et,ye,me,k.DEPTH_BUFFER_BIT,k.NEAREST);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||W.has(A)){let sn=W.get(A),Ps=W.get(U);w.bindFramebuffer(k.READ_FRAMEBUFFER,I),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let Vt=0;Vt<Se;Vt++)qr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,G,rt+Vt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,G),Lt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ps.__webglTexture,ge,ln+Vt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ps.__webglTexture,ge),G!==0?k.blitFramebuffer(Re,Je,ye,me,we,Et,ye,me,k.COLOR_BUFFER_BIT,k.NEAREST):Lt?k.copyTexSubImage3D(be,ge,we,Et,ln+Vt,Re,Je,ye,me):k.copyTexSubImage2D(be,ge,we,Et,Re,Je,ye,me);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(be,ge,we,Et,ln,ye,me,Se,Ut,Tn,qt.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(be,ge,we,Et,ln,ye,me,Se,Ut,qt.data):k.texSubImage3D(be,ge,we,Et,ln,ye,me,Se,Ut,Tn,qt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ge,we,Et,ye,me,Ut,Tn,qt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ge,we,Et,qt.width,qt.height,Ut,qt.data):k.texSubImage2D(k.TEXTURE_2D,ge,we,Et,ye,me,Ut,Tn,qt);w.pixelStorei(k.UNPACK_ROW_LENGTH,Ln),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt),w.pixelStorei(k.UNPACK_SKIP_PIXELS,ai),w.pixelStorei(k.UNPACK_SKIP_ROWS,Ni),w.pixelStorei(k.UNPACK_SKIP_IMAGES,Cs),ge===0&&U.generateMipmaps&&k.generateMipmap(be),w.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&Y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Y.setTextureCube(A,0):A.isData3DTexture?Y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Y.setTexture2DArray(A,0):Y.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){B=0,X=0,te=null,w.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};function ld(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,M=o.length;_<M;_++){let x=o[_],v=i.attributes[x];l[x]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let S=i.morphAttributes[x];S&&(c[x]||(c[x]=[]),S.forEach((T,y)=>{let E=new T.array.constructor(T.count*T.itemSize);c[x][y]=new T.constructor(E,T.itemSize,T.normalized)}))}let f=e*.5,m=Math.log10(1/e),b=Math.pow(10,m),g=f*b;for(let _=0;_<r;_++){let M=n?n.getX(_):_,x="";for(let v=0,S=o.length;v<S;v++){let T=o[v],y=i.getAttribute(T),E=y.itemSize;for(let R=0;R<E;R++)x+=`${Math.trunc(y[u[R]](M)*b+g)},`}if(x in t)h.push(t[x]);else{for(let v=0,S=o.length;v<S;v++){let T=o[v],y=i.getAttribute(T),E=i.morphAttributes[T],R=y.itemSize,P=l[T],F=c[T];for(let D=0;D<R;D++){let I=u[D],O=d[D];if(P[O](a,y[I](M)),E)for(let B=0,X=E.length;B<X;B++)F[B][O](a,E[B][I](M))}}t[x]=a,h.push(a),a++}}let p=i.clone();for(let _ in i.attributes){let M=l[_];if(p.setAttribute(_,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),_ in c)for(let x=0;x<c[_].length;x++){let v=c[_][x];p.morphAttributes[_][x]=new v.constructor(v.array.slice(0,a*v.itemSize),v.itemSize,v.normalized)}}return p.setIndex(h),p}function hd(i,e){if(e===zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===La||e===Uo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===La)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Nm(i){let e=new Map,t=new Map,n=i.clone();return Um(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Um(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Um(i.children[n],e.children[n],t)}var Vo=class extends Hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new ih(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ih(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=bs.extractUrlBase(e);a=bs.resolveURL(c,this.path)}else a=bs.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Sa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hm){try{a[nt.KHR_BINARY_GLTF]=new Id(e)}catch(u){s&&s(u);return}r=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new zd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:a[u]=new md;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ld(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[u]=new Dd;break;case nt.KHR_MESH_QUANTIZATION:a[u]=new Fd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function pM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function on(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},pd=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Fn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Xs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Eo(h),c.distance=u;break;case"spot":c=new wo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},md=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qn}extendParams(e,t,n){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Fn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},xd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return on(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(r,r)}return Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},_d=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return on(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},yd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return on(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Gt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},vd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Md=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return on(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],Fn),Promise.all(s)}},Sd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return on(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},wd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return on(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],Fn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Gt)),Promise.all(s)}},Ed=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return on(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Td=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return on(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ad=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Rd=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Cd=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},ih=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Pd=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==hi.TRIANGLES&&c.mode!==hi.TRIANGLE_STRIP&&c.mode!==hi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let b=new Ve,g=new C,p=new ft,_=new C(1,1,1),M=new br(m.geometry,m.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&_.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,b.compose(g,p,_));let x=null;for(let v in l)if(v==="_COLOR_0"){let S=l[v];M.instanceColor=new hs(S.array,S.itemSize,S.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(x===null){let T=M.geometry;x=new At,x.name=T.name;for(let y in T.attributes)x.setAttribute(y,T.attributes[y]);for(let y in T.morphAttributes)x.morphAttributes[y]=T.morphAttributes[y];T.index!==null&&x.setIndex(T.index),x.morphTargetsRelative=T.morphTargetsRelative;for(let y of T.groups)x.addGroup(y.start,y.count,y.materialIndex);T.boundingBox!==null&&(x.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(x.boundingSphere=T.boundingSphere.clone()),x.drawRange.start=T.drawRange.start,x.drawRange.count=T.drawRange.count,x.userData=Object.assign({},T.userData),M.geometry=x}let S=l[v];x.setAttribute(v,new hs(S.array,S.itemSize,S.normalized))}Wt.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Hm="glTF",Ho=12,Om={JSON:1313821514,BIN:5130562},Id=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ho),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ho,r=new DataView(e,Ho),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Om.JSON){let c=new Uint8Array(e,Ho+a,o);this.content=n.decode(c)}else if(l===Om.BIN){let c=Ho+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ld=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Ud[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ud[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=za[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}u(f)},o,c,Fn,d)})})}},Dd=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Fd=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},sh=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,b=m-c,g=-2*f+3*d,p=f-d,_=1-g,M=p-d+u;for(let x=0;x!==o;x++){let v=a[b+x+o],S=a[b+x+l]*h,T=a[m+x+o],y=a[m+x]*h;r[x]=_*v+M*S+g*T+p*y}return r}},mM=new ft,Nd=class extends sh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return mM.fromArray(r).normalize().toArray(r),r}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},za={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zm={9728:an,9729:Zt,9984:ul,9985:Ca,9986:Tr,9987:ei},km={33071:ci,33648:la,10497:Hn},ud={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ud={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Js={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gM={CUBICSPLINE:void 0,LINEAR:mr,STEP:pr},dd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new un({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),i.DefaultMaterial}function Cr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function _M(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yM(i){let e,t=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fd(t.attributes):e=i.indices+":"+fd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+fd(i.targets[n]);return e}function fd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Od(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var MM=new Ve,zd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new vr(this.options.manager):this.textureLoader=new To(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Cr(r,o,s),Xi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(bs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=ud[s.type],o=za[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ze(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=ud[s.type],c=za[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(_);M||(b=new c(o,p*f,s.count*f/h),M=new xa(b,f/h),t.cache.add(_,M)),g=new ba(M,l,d%f/h,m)}else o===null?b=new c(s.count*l):b=new c(o,d,s.count*l),g=new Ze(b,l,m);if(s.sparse!==void 0){let p=ud.SCALAR,_=za[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,v=new _(a[1],M,s.sparse.count*p),S=new c(a[2],x,s.sparse.count*l);o!==null&&(g=new Ze(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,y=v.length;T<y;T++){let E=v[T];if(g.setX(E,S[T*l]),l>=2&&g.setY(E,S[T*l+1]),l>=3&&g.setZ(E,S[T*l+2]),l>=4&&g.setW(E,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=zm[d.magFilter]||Zt,h.minFilter=zm[d.minFilter]||ei,h.wrapS=km[d.wrapS]||Hn,h.wrapT=km[d.wrapT]||Hn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==an&&h.minFilter!==Zt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new pn(b);g.needsUpdate=!0,d(g)}),t.load(bs.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Xi(u,a),u.userData.mimeType=a.mimeType||vM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new us,Wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ya,Wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return un}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){let u=s[nt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Fn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Gt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=jn);let h=r.alphaMode||dd.OPAQUE;if(h===dd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===dd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Qn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qn){let u=r.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],Fn)}return r.emissiveTexture!==void 0&&a!==Qn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Xi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Cr(s,u,r),u})}createUniqueName(e){let t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Bm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=yM(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Bm(new At,c,t),c.mode===hi.TRIANGLE_STRIP?d=d.then(f=>hd(f,Uo)):c.mode===hi.TRIANGLE_FAN&&(d=d.then(f=>hd(f,La))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?xM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,_=c[f];if(g.mode===hi.TRIANGLES||g.mode===hi.TRIANGLE_STRIP||g.mode===hi.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,x=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");M&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&x?new Bs(b,_):new ot(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===hi.LINES)p=new mo(b,_);else if(g.mode===hi.LINE_STRIP)p=new _r(b,_);else if(g.mode===hi.LINE_LOOP)p=new go(b,_);else if(g.mode===hi.POINTS)p=new ds(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&_M(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Xi(p,r),g.extensions&&Cr(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Cr(s,u[0],r),u[0];let d=new Dt;r.extensions&&Cr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(Gu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new qs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vs(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],b=f.target,g=b.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,_=s.parameters!==void 0?s.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let M=0,x=d.length;M<x;M++){let v=d[M],S=f[M],T=m[M],y=b[M],E=g[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let R=n._createAnimationTracks(v,S,T,y,E);if(R)for(let P=0;P<R.length;P++)p.push(R[P])}let _=new Mo(r,void 0,p);return Xi(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,MM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ls:c.length>1?h=new Dt:c.length===1?h=c[0]:h=new Wt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Xi(h,r),r.extensions&&Cr(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Dt;n.name&&(r.name=s.createUniqueName(n.name)),Xi(r,n),n.extensions&&Cr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Nm(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Wn||d instanceof pn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Js[r.path]===Js.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Js[r.path]){case Js.weights:h=ms;break;case Js.rotation:h=gs;break;case Js.translation:case Js.scale:h=Ws;break;default:n.itemSize===1?h=ms:h=Ws;break}let u=s.interpolation!==void 0?gM[s.interpolation]:mr,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let b=new h(l[f]+"."+Js[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Od(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof gs?Nd:sh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function SM(i,e,t){let n=e.attributes,s=new $t;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){let h=Od(za[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new C,l=new C;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=Od(za[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Gn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Bm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Ud[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return et.workingColorSpace!==Fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Xi(i,e),SM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bM(i,e.targets,t):i})}var kd=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),M=0;M<p.length;++M){var x=p.charCodeAt(M);_[M]=x>96?x-97:x>64?x-39:x+4}for(var v=0,M=0;M<p.length;++M)_[v++]=_[M]<60?n[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,v)}function l(p,_,M,x,v,S,T){var y=p.exports.sbrk,E=x+3&-4,R=y(E*v),P=y(S.length),F=new Uint8Array(p.exports.memory.buffer);F.set(S,P);var D=_(R,x,v,P,S.length);if(D==0&&T&&T(R,E,v),M.set(F.subarray(R,R+x*v)),y(R-y(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(M){var x=M.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function m(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),M=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(M),v=u.length;v<p;++v)u[v]=f(x);for(var v=p;v<u.length;++v)u[v].object.postMessage({});u.length=p,URL.revokeObjectURL(x)}function b(p,_,M,x,v){for(var S=u[0],T=1;T<u.length;++T)u[T].pending<S.pending&&(S=u[T]);return new Promise(function(y,E){var R=new Uint8Array(M),P=++d;S.pending+=p,S.requests[P]={resolve:y,reject:E},S.object.postMessage({id:P,count:p,size:_,source:R,mode:x,filter:v},[R.buffer])})}function g(p){var _=p.data;self.ready.then(function(M){if(!_.id)return self.close();try{var x=new Uint8Array(_.count*_.size);l(M,M.exports[_.mode],x,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:x},[x.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,_,M,x,v){l(r,r.exports.meshopt_decodeVertexBuffer,p,_,M,x,r.exports[c[v]])},decodeIndexBuffer:function(p,_,M,x){l(r,r.exports.meshopt_decodeIndexBuffer,p,_,M,x)},decodeIndexSequence:function(p,_,M,x){l(r,r.exports.meshopt_decodeIndexSequence,p,_,M,x)},decodeGltfBuffer:function(p,_,M,x,v,S){l(r,r.exports[h[v]],p,_,M,x,r.exports[c[S]])},decodeGltfBufferAsync:function(p,_,M,x,v){return u.length>0?b(p,_,M,h[x],c[v]):a.then(function(){var S=new Uint8Array(p*_);return l(r,r.exports[h[x]],S,p,_,M,r.exports[c[v]]),S})}}})();var Go=new C;function ui(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Go.copy(e),Go[n]=0,Go.normalize();let c=.5*a/(a+o),h=1-Go.angleTo(i)/l;return Math.sign(Go[t])===1?h*c:o/(a+o)+c+c*(1-h)}var rh=class i extends Si{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,c=new C,h=new C(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,b=new C,g=.5/a;for(let p=0,_=0;p<u.length;p+=3,_+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/m)){case 0:b.set(1,0,0),f[_+0]=ui(b,c,"z","y",r,n),f[_+1]=1-ui(b,c,"y","z",r,t);break;case 1:b.set(-1,0,0),f[_+0]=1-ui(b,c,"z","y",r,n),f[_+1]=1-ui(b,c,"y","z",r,t);break;case 2:b.set(0,1,0),f[_+0]=1-ui(b,c,"x","z",r,e),f[_+1]=ui(b,c,"z","x",r,n);break;case 3:b.set(0,-1,0),f[_+0]=1-ui(b,c,"x","z",r,e),f[_+1]=1-ui(b,c,"z","x",r,n);break;case 4:b.set(0,0,1),f[_+0]=1-ui(b,c,"x","y",r,e),f[_+1]=1-ui(b,c,"y","x",r,t);break;case 5:b.set(0,0,-1),f[_+0]=ui(b,c,"x","y",r,e),f[_+1]=1-ui(b,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ka=i=>{try{navigator.vibrate&&navigator.vibrate(i)}catch{}};function Vm(i){let e=i.querySelector("i"),t={x:0,y:0,active:!1},n=null,s=0,r=0,a=1,o=!1,l=!1,c=(u,d)=>{let f=Math.hypot(u,d),m=f>a?a/f:1;u*=m,d*=m,f=Math.min(f,a),e.style.transform=`translate(${u}px, ${d}px)`;let b=f/a,g=.12,p=b<g?0:(b-g)/(1-g),_=p*p*.35+p*.65;t.x=f?u/f*_:0,t.y=f?-d/f*_:0;let M=b>=g,x=b>.97;M&&!o&&ka(8),x&&!l&&ka(18),o=M,l=x};i.addEventListener("pointerdown",u=>{if(n!==null)return;u.preventDefault(),n=u.pointerId;try{i.setPointerCapture(n)}catch{}let d=i.getBoundingClientRect();s=d.left+d.width/2,r=d.top+d.height/2,a=d.width*.36,t.active=!0,i.classList.add("on"),c(u.clientX-s,u.clientY-r)}),i.addEventListener("pointermove",u=>{u.pointerId===n&&(u.preventDefault(),c(u.clientX-s,u.clientY-r))});let h=u=>{u.pointerId===n&&(n=null,t.active=!1,i.classList.remove("on"),e.style.transition="transform .15s ease-out",c(0,0),setTimeout(()=>{e.style.transition=""},160),o=l=!1)};return["pointerup","pointercancel","lostpointercapture"].forEach(u=>i.addEventListener(u,h)),t}var Wm={low:{pr:1,aa:!1,shadow:1024,shadowR:.8,grid:1.45,rocks:.45,reach:[380,90,55],scanMid:!1,devils:0},medium:{pr:1.25,aa:!1,shadow:1024,shadowR:1,grid:1.25,rocks:.55,reach:[480,110,60],scanMid:!1,devils:0},high:{pr:2,aa:!0,shadow:2048,shadowR:1,grid:1,rocks:1,reach:[900,210,110],scanMid:!0,devils:2},ultra:{pr:2,aa:!0,shadow:4096,shadowR:1.35,grid:.82,rocks:1.35,reach:[1400,300,150],scanMid:!0,devils:3}},wM=typeof document<"u"&&document.documentElement.classList.contains("touch");function Wo(){try{return localStorage.getItem("jt-detail")||"auto"}catch{return"auto"}}function qm(i){try{localStorage.setItem("jt-detail",i)}catch{}}var Gm=Wo(),ah=Wm[Gm]?Gm:wM?"medium":"ultra",Zs=Wm[ah];var _s=(()=>{try{return localStorage.getItem("dsa-game-units")==="us"}catch{return!1}})(),Bd=3.28084,EM=.621371;var Pr=(i,e)=>i.toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),oh=_s?"mph":"km/h",ch=i=>_s?i*EM:i,lh=(i,e=0)=>`${Pr(ch(i),e)} ${oh}`;var Ir=(i,e=0)=>_s?`${Pr(i*Bd,e)} ft`:`${Pr(i,e)} m`,hh=i=>_s?i*Bd<1e3?`${Pr(i*Bd,0)} ft`:`${Pr(i/1609.344,i<16093?1:0)} mi`:i<1e3?`${Pr(i,0)} m`:`${Pr(i/1e3,i<1e4?1:0)} km`;var se=i=>document.getElementById(i),Vr=1.62,GT=document.documentElement.classList.contains("touch");function Qi(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var AM=(()=>{let i=Qi(7),e=new Float32Array(256*256);for(let t=0;t<e.length;t++)e[t]=i();return e})(),uh=(i,e)=>AM[(i%256+256)%256*256+(e%256+256)%256];function Th(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=uh(t,n),c=uh(t+1,n),h=uh(t,n+1),u=uh(t+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}var Pn=(i,e,t)=>{let n=0,s=.5,r=1;for(let a=0;a<t;a++)n+=s*Th(i*r,e*r),s*=.5,r*=2.03;return n},Xe=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)},ar=4,Xm=.4,RM=1737400,Be=600,Mt=243,St=-375,kn=1.6,We=Math.round(2*Be/kn)+1,fg=(i,e,t)=>Math.abs(i-Mt)<Be-t&&Math.abs(e-St)<Be-t,Ah=null;function pg(i,e){if(!Ah)return 0;let t=i/250+127.5,n=e/250+127.5,s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=(u,d)=>Ah[Math.max(0,Math.min(255,d))*256+Math.max(0,Math.min(255,u))]/4,c=(u,d,f,m,b)=>d+.5*b*(f-u+b*(2*u-5*d+4*f-m+b*(3*(d-f)+m-u))),h=u=>c(l(s-1,u),l(s,u),l(s+1,u),l(s+2,u),a);return c(h(r-1),h(r),h(r+1),h(r+2),o)}var mg=0;function Ur(i,e){let t=i*ar,n=e*ar;return(pg(t,n)-mg)*Xm-(t*t+n*n)/(2*RM)*Xm}var ii=[],zn=[],Li={x:0,z:0},ct={x:-158,z:62,R:55};{let i=Qi(1972),e=(a,o,l,c)=>ii.push({x:a,z:o,R:l,fresh:c,depth:l*(.12+.26*c),rim:l*(.025+.06*c)});[[48,-18,13,1],[-30,64,17,.95],[96,52,21,.9],[20,120,11,1],[-40,-75,24,.85]].forEach(a=>e(...a));let t=373,n=-375,s=470,r=(a,o)=>Math.abs(a-t)<s&&Math.abs(o-n)<s;for(let a=0;a<2e3;a++){let o=1.2/Math.sqrt(1-i()*.99859375),l=t+(i()*2-1)*(s-10),c=n+(i()*2-1)*(s-10);Math.hypot(l,c)<14||Math.hypot(l+12,c-4)<14||e(l,c,o,Math.pow(i(),2.2))}for(let a=0;a<1150;a++){let o=t+(i()*2-1)*(s-6),l=n+(i()*2-1)*(s-6);Math.hypot(o,l)<10||zn.push({x:o,z:l,s:.12+Math.pow(i(),3)*.7,yaw:i()*6.28,k:i()})}{let a=Qi(2112);for(let o=0;o<1060;o++){let l=1.2/Math.sqrt(1-a()*.99859375),c=Mt+(a()*2-1)*(Be-10),h=St+(a()*2-1)*(Be-10),u=Math.pow(a(),2.2);r(c,h)||Math.hypot(c+12,h-4)<14||Math.hypot(c-ct.x,h-ct.z)<ct.R*1.3||e(c,h,l,u)}for(let o=0;o<600;o++){let l=Mt+(a()*2-1)*(Be-6),c=St+(a()*2-1)*(Be-6),h=.12+Math.pow(a(),3)*.7,u=a()*6.28,d=a();r(l,c)||zn.push({x:l,z:c,s:h,yaw:u,k:d})}}for(let a of ii){if(a.fresh<.55||a.R<4)continue;let o=Math.round(a.R*a.fresh*2.2);for(let l=0;l<o;l++){let c=i()*6.2832,h=a.R*(.85+Math.pow(i(),1.7)*1.3),u=a.x+Math.cos(c)*h,d=a.z+Math.sin(c)*h;!fg(u,d,6)||Math.hypot(u,d)<10||zn.push({x:u,z:d,s:.2+Math.pow(i(),2.2)*Math.min(1.6,a.R*.07),yaw:i()*6.28,k:i()})}}{let a=Qi(17),o=421.75+38,l=-259;e(o,l,50,.5),Li.x=o,Li.z=l;for(let c=0;c<170;c++){let h=a()*6.2832,u=50*(.86+Math.pow(a(),1.5)*1.1);zn.push({x:o+Math.cos(h)*u,z:l+Math.sin(h)*u,s:.07+Math.pow(a(),4)*.95,yaw:a()*6.28,k:a()})}}for(let a=ii.length-1;a>=0;a--)Math.hypot(ii[a].x-ct.x,ii[a].z-ct.z)<ct.R*1.25+ii[a].R*.5&&ii.splice(a,1);{let a=Qi(74);ii.push({x:ct.x,z:ct.z,R:ct.R,fresh:.5,depth:14,rim:2.2});for(let c=0;c<70;c++){let h=a()*6.2832,u=ct.R*(.9+Math.pow(a(),1.5)*.8);zn.push({x:ct.x+Math.cos(h)*u,z:ct.z+Math.sin(h)*u,s:.08+Math.pow(a(),4)*.8,yaw:a()*6.28,k:a()})}for(let c=0;c<90;c++){let h=a()*6.2832,u=ct.R*(Math.pow(a(),.7)*.6);zn.push({x:ct.x+Math.cos(h)*u,z:ct.z+Math.sin(h)*u,s:.25+Math.pow(a(),2.5)*1.2*(1.2-u/ct.R),yaw:a()*6.28,k:a(),bury:.4})}let o=ct.x+Math.cos(2.27)*ct.R*1.13,l=ct.z+Math.sin(2.27)*ct.R*1.13;zn.push({x:o,z:l,s:1.7,yaw:.6,k:.3,bury:.22});for(let c=0;c<8;c++){let h=a()*6.2832,u=2.5+a()*7;zn.push({x:o+Math.cos(h)*u,z:l+Math.sin(h)*u,s:.15+Math.pow(a(),2)*.55,yaw:a()*6.28,k:a(),bury:.4})}}}var CM=[[2.4,1.05,.05,.035,1],[2.47,1,.02,.018,.55]];function gg(i,e){let t=i-ct.x,n=e-ct.z,s=Math.hypot(t,n)/ct.R;if(s<.75||s>1.35)return 0;let r=Math.atan2(n,t),a=0;for(let[o,l,c,h,u]of CM){let d=r-o;d-=6.2832*Math.round(d/6.2832),a=Math.max(a,u*Math.exp(-(d*d)/(2*c*c)-(s-l)*(s-l)/(2*h*h)))}return a<.02?0:Xe(.12,.6,a*(.5+1*Pn(i/1.6+3,e/1.6-5,3)))}var xg=(i,e,t)=>(t[0]=i*(1+.62*e),t[1]=i*(1+.04*e),t[2]=i*(1-.5*e),t),ir=16,Qo=new Map;function PM(){ii.forEach(i=>{let e=i.R*2.2;for(let t=Math.floor((i.x-e)/ir);t<=Math.floor((i.x+e)/ir);t++)for(let n=Math.floor((i.z-e)/ir);n<=Math.floor((i.z+e)/ir);n++){let s=t+","+n;Qo.has(s)||Qo.set(s,[]),Qo.get(s).push(i)}})}function bg(i,e){let t=0;for(let n of Qo.get(Math.floor(i/ir)+","+Math.floor(e/ir))||[]){let s=i-n.x,r=e-n.z;if(s>n.R*2.2||s<-n.R*2.2||r>n.R*2.2||r<-n.R*2.2)continue;let a=Math.hypot(s,r)/n.R;t+=a<1?n.rim+(-n.depth-n.rim)*(1-a*a)*(1-a*a*.35):n.rim*Math.exp(-(((a-1)/.42)**2))}return t}var Es=new Float32Array(We*We),Or=new Float32Array(We*We),Qt=new Float32Array(We*We);function _g(i,e){let t=0;for(let n of Qo.get(Math.floor(i/ir)+","+Math.floor(e/ir))||[]){let s=Math.hypot(i-n.x,e-n.z)/n.R;s<2.1&&(t=Math.max(t,n.fresh*n.fresh*(s<1?.55:Math.exp(-(((s-1)/.5)**2)))))}return .9+.2*(Pn(i/35+7,e/35,3)-.5)+.45*t}function IM(i,e){let t=(i-Mt+2500)/20,n=(e-St+2500)/20,s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=(f,m)=>Ur(Mt-2500+f*20,St-2500+m*20),c=l(s,r),h=l(s,r+1),u=l(s+1,r);if(a+o<=1)return c+(u-c)*a+(h-c)*o-.15;let d=l(s+1,r+1);return d+(h-d)*(1-a)+(u-d)*(1-o)-.15}function LM(){PM();for(let h=0;h<We;h++)for(let u=0;u<We;u++){let d=Mt-Be+u*kn,f=St-Be+h*kn,m=Xe(0,40,Be-Math.max(Math.abs(d-Mt),Math.abs(f-St))),b=Ur(d,f),g=m<1?IM(d,f):b;Qt[h*We+u]=g+m*(b-g)+m*((Pn(d/60,f/60,4)-.5)*2.2+(Pn(d/9+40,f/9,3)-.5)*.35),Es[h*We+u]=Qt[h*We+u]+m*bg(d,f),Or[h*We+u]=_g(d,f)}let i=(h,u)=>{for(let d=0;d<We;d++)for(let f=0;f<We;f++){let m=Mt-Be+f*kn-Qe.x,b=St-Be+d*kn-Qe.z,g=Math.hypot(m,b);g<h&&u(d*We+f,m,b,g)}},e=0,t=0,n=0,s=0,r=0,a=0,o=0,l=0,c=0;if(i(14,(h,u,d)=>{let f=Es[h];e++,t+=u,n+=d,s+=u*u,r+=d*d,a+=u*d,o+=f,l+=u*f,c+=d*f}),e>10){let h=[[e,t,n],[t,s,a],[n,a,r]],u=[o,l,c],d=_=>_[0][0]*(_[1][1]*_[2][2]-_[1][2]*_[2][1])-_[0][1]*(_[1][0]*_[2][2]-_[1][2]*_[2][0])+_[0][2]*(_[1][0]*_[2][1]-_[1][1]*_[2][0]),f=d(h),m=_=>h.map((M,x)=>M.map((v,S)=>S===_?u[x]:v)),[b,g,p]=[0,1,2].map(_=>d(m(_))/f);Qe.plane={a:b,b:g,c:p},i(22,(_,M,x,v)=>{let S=Xe(22,6,v),T=b+g*M+p*x;Es[_]+=(T-Es[_])*S,Qt[_]+=(T-Qt[_])*S})}}var xh=new Map,Rh=8;function DM(){for(let i=zn.length-1;i>=0;i--)Math.hypot(zn[i].x-Qe.x,zn[i].z-Qe.z)<7&&zn.splice(i,1);zn.forEach((i,e)=>{let t=Math.floor(i.x/Rh)+","+Math.floor(i.z/Rh);xh.has(t)||xh.set(t,[]),xh.get(t).push(e)})}function FM(i,e){let t=0,n=Math.floor(i/Rh),s=Math.floor(e/Rh);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=xh.get(n+r+","+(s+a));if(o)for(let l of o){let c=zn[l],h=((i-c.x)**2+(e-c.z)**2)/(1.6*c.s*c.s);if(h<1){let u=1-h;t=Math.max(t,c.s*Math.max(.5,.66-(c.bury??.62))*u*Math.sqrt(u))}}}return t}function Ii(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var Ji=3;function lf(i,e){let t=(Th(i/1.7,e/1.7)-.5)*.12+(Th(i/.55+71,e/.55)-.5)*.04,n=Math.floor(i/Ji),s=Math.floor(e/Ji);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=n+r,l=s+a;if(Ii(o,l)>.26)continue;let h=.25/Math.sqrt(1-Ii(o+91,l)*(1-(.25/1.5)**2)),u=(o+Ii(o,l+57))*Ji,d=(l+Ii(o+13,l+7))*Ji,f=Math.hypot(i-u,e-d)/h;if(f>1.8)continue;let m=h*(.05+.09*Ii(o+5,l+3)),b=m*.25;t+=f<1?b+(-m-b)*(1-f*f):b*Math.exp(-(((f-1)/.4)**2))}return t}var en={cx:0,cz:0,half:48};function yg(i,e){return Xe(en.half,en.half-6,Math.max(Math.abs(i-en.cx),Math.abs(e-en.cz)))}function Yt(i,e){let t=Math.max(0,Math.min(We-1.001,(i-Mt+Be)/kn)),n=Math.max(0,Math.min(We-1.001,(e-St+Be)/kn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=Es[r*We+s],c=Es[r*We+s+1],h=Es[(r+1)*We+s],u=Es[(r+1)*We+s+1];return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}function vg(i,e){let t=Math.max(0,Math.min(We-1.001,(i-Mt+Be)/kn)),n=Math.max(0,Math.min(We-1.001,(e-St+Be)/kn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=r*We+s;return Qt[l]+(Qt[l+1]-Qt[l])*a+(Qt[l+We]-Qt[l])*o+(Qt[l]-Qt[l+1]-Qt[l+We]+Qt[l+We+1])*a*o+Xe(0,40,Be-Math.max(Math.abs(i-Mt),Math.abs(e-St)))*bg(i,e)-Yt(i,e)}function ht(i,e){let t=yg(i,e),n=Yt(i,e)+(t>0?(lf(i,e)+vg(i,e))*t:0)+FM(i,e);return Lh.length?Math.max(n,qM(i,e)):n}var NM=new C;function Qd(i,e){return NM.set(ht(i-.35,e)-ht(i+.35,e),2*.35,ht(i,e-.35)-ht(i,e+.35)).normalize()}var In=new Bo({canvas:se("scene"),antialias:Zs.aa,powerPreference:"high-performance"});In.setPixelRatio(Math.min(Zs.pr,devicePixelRatio));In.outputColorSpace=Gt;In.toneMapping=Ro;In.toneMappingExposure=1.25;In.shadowMap.enabled=!0;In.shadowMap.type=Sr;var It=new ga;It.background=new De(0);var Ke=new rn(55,1,.1,8e4);function Mg(){In.setSize(innerWidth,innerHeight,!1),Ke.aspect=innerWidth/innerHeight,Ke.updateProjectionMatrix()}addEventListener("resize",Mg);Mg();var hf=new C(Math.sin(95*Math.PI/180)*Math.cos(16*Math.PI/180),Math.sin(16*Math.PI/180),-Math.cos(95*Math.PI/180)*Math.cos(16*Math.PI/180)).normalize(),ri=new Xs(16775922,3.4);ri.castShadow=!0;ri.shadow.mapSize.set(Zs.shadow,Zs.shadow);{let i=30*Zs.shadowR;Object.assign(ri.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:1,far:200})}ri.shadow.bias=-6e-4;ri.shadow.normalBias=.04;It.add(ri,ri.target);It.add(new wa(0,7236196,.75));function UM(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=Qi(3);for(let a=0;a<256;a++)for(let o=0;o<256;o++){let l=(Pn(o/18,a/18,4)-.5)*40+(s()-.5)*26,c=Math.max(0,Math.min(255,200+l*.7)),h=(a*256+o)*4;n.data[h]=n.data[h+1]=n.data[h+2]=c,n.data[h+3]=255}t.putImageData(n,0,0);let r=new Mi(e);return r.wrapS=r.wrapT=Hn,r.colorSpace=Gt,r.anisotropy=8,r}function OM(){let e=new Float32Array(65536),t=Qi(29);for(let o=0;o<900;o++){let l=t()*256,c=t()*256,h=1.5+Math.pow(t(),3)*9,u=(t()<.6?-1:.6)*h*.25,d=Math.ceil(h*1.6);for(let f=-d;f<=d;f++)for(let m=-d;m<=d;m++){let b=Math.hypot(m,f)/h;if(b>1.6)continue;let g=((Math.round(l)+m)%256+256)%256,p=((Math.round(c)+f)%256+256)%256;e[p*256+g]+=b<1?u*(1-b*b):-u*.2*Math.exp(-(((b-1)/.3)**2))}}for(let o=0;o<256;o++)for(let l=0;l<256;l++)e[o*256+l]+=(Pn(l/6,o/6,3)-.5)*1.4;let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256);for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=e[o*256+(l+1)%256]-e[o*256+(l+256-1)%256],h=e[(o+1)%256*256+l]-e[(o+256-1)%256*256+l],u=Math.hypot(c,h,2),d=(o*256+l)*4;r.data[d]=128-c/u*127,r.data[d+1]=128+h/u*127,r.data[d+2]=128+2/u*127,r.data[d+3]=255}s.putImageData(r,0,0);let a=new Mi(n);return a.wrapS=a.wrapT=Hn,a.anisotropy=8,a}var Rs=new un({color:11052189,roughness:1,metalness:0,map:UM(),normalMap:OM(),vertexColors:!0});Rs.normalScale.set(.34,.34);var Sg=i=>i.fragmentShader.replace("#include <normal_fragment_maps>",qe.normal_fragment_maps.replace("mapN.xy *= normalScale;","mapN.xy *= normalScale * ( 1.0 - smoothstep( 5.0, 22.0, length( vViewPosition ) ) );")),wg={value:null},zM=i=>{i.uniforms.uRelief=wg,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWxz = (modelMatrix * vec4(transformed, 1.0)).xz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWxz; uniform sampler2D uRelief;`).replace("#include <normal_fragment_begin>",qe.normal_fragment_begin.replace("vec3 normal = normalize( vNormal );",`vec3 normal = normalize( ( viewMatrix * vec4( texture2D( uRelief, ( vWxz - vec2( ${(Mt-Be).toFixed(1)}, ${(St-Be).toFixed(1)} ) ) / ${(2*Be).toFixed(1)} ).xyz * 2.0 - 1.0, 0.0 ) ).xyz );`))};Rs.onBeforeCompile=i=>{i.fragmentShader=Sg(i)};Rs.polygonOffset=!0;Rs.polygonOffsetFactor=-1;Rs.polygonOffsetUnits=-1;var Eg={value:new xt(0,0,0,0)},Tg=Rs.clone();Tg.onBeforeCompile=i=>{Pg(i,Cg,"#include <normal_fragment_maps>",`smoothstep( ${(Be-80).toFixed(1)}, ${Be.toFixed(1)}, max( abs( vWxz.x - ${Mt.toFixed(1)} ), abs( vWxz.y - ${St.toFixed(1)} ) ) )`),i.fragmentShader=Sg(i),zM(i),i.uniforms.uPatch=Eg,i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uPatch;`).replace("void main() {",`void main() {
  if (abs(vWxz.x - uPatch.x) < uPatch.z && abs(vWxz.y - uPatch.y) < uPatch.z) discard;`)};function kM(){let i=Zs.grid>1.3?1024:2048,e=2*Be/i,t=Mt-Be,n=St-Be,s=new Float32Array(i*i),r=(c,h)=>Xe(0,40,Be-Math.max(Math.abs(c-Mt),Math.abs(h-St)));for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=t+(h+.5)*e,d=n+(c+.5)*e,f=Math.min(We-1.001,(h+.5)*e/kn),m=Math.min(We-1.001,(c+.5)*e/kn),b=Math.floor(f),g=Math.floor(m),p=f-b,_=m-g,M=g*We+b;s[c*i+h]=Qt[M]+(Qt[M+1]-Qt[M])*p+(Qt[M+We]-Qt[M])*_+(Qt[M]-Qt[M+1]-Qt[M+We]+Qt[M+We+1])*p*_+r(u,d)*(Th(u/1.7,d/1.7)-.5)*.12}let a=(c,h,u,d)=>{let f=Math.max(0,Math.floor((c-u-t)/e)),m=Math.min(i-1,Math.ceil((c+u-t)/e)),b=Math.max(0,Math.floor((h-u-n)/e)),g=Math.min(i-1,Math.ceil((h+u-n)/e));for(let p=b;p<=g;p++){let _=n+(p+.5)*e;for(let M=f;M<=m;M++){let x=t+(M+.5)*e,v=Math.hypot(x-c,_-h);v<u&&(s[p*i+M]+=r(x,_)*d(v))}}};for(let c of ii)a(c.x,c.z,c.R*2.2,h=>{let u=h/c.R;return u<1?c.rim+(-c.depth-c.rim)*(1-u*u)*(1-u*u*.35):c.rim*Math.exp(-(((u-1)/.42)**2))});for(let c=Math.floor(t/Ji);c<=Math.floor((t+2*Be)/Ji);c++)for(let h=Math.floor(n/Ji);h<=Math.floor((n+2*Be)/Ji);h++){if(Ii(c,h)>.26)continue;let u=.25/Math.sqrt(1-Ii(c+91,h)*(1-(.25/1.5)**2));if(u<.4)continue;let d=u*(.05+.09*Ii(c+5,h+3)),f=d*.25;a((c+Ii(c,h+57))*Ji,(h+Ii(c+13,h+7))*Ji,u*1.8,m=>{let b=m/u;return b<1?f+(-d-f)*(1-b*b):f*Math.exp(-(((b-1)/.4)**2))})}let o=new Uint8Array(i*i*4);for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=s[c*i+Math.min(i-1,h+1)]-s[c*i+Math.max(0,h-1)],d=s[Math.min(i-1,c+1)*i+h]-s[Math.max(0,c-1)*i+h],f=t+(h+.5)*e,m=n+(c+.5)*e,b=r(f,m);if(b<1){let _=e/10;u=u*b+(1-b)*(Ur(f+10,m)-Ur(f-10,m))*_,d=d*b+(1-b)*(Ur(f,m+10)-Ur(f,m-10))*_}let g=Math.hypot(u,2*e,d),p=(c*i+h)*4;o[p]=128-u/g*127,o[p+1]=128+2*e/g*127,o[p+2]=128-d/g*127,o[p+3]=255}let l=new Hs(o,i,i);l.generateMipmaps=!0,l.minFilter=ei,l.magFilter=Zt,l.anisotropy=In.capabilities.getMaxAnisotropy(),l.needsUpdate=!0,wg.value=l}var $o=[0,0,0];function BM(){let i=new fs(2*Be,2*Be,We-1,We-1);i.rotateX(-Math.PI/2),i.translate(Mt,0,St);let e=i.attributes.position,t=i.attributes.uv,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let a=Math.round((e.getX(r)-Mt+Be)/kn),o=Math.round((e.getZ(r)-St+Be)/kn);e.setY(r,Es[o*We+a]),t.setXY(r,e.getX(r)/3.2,e.getZ(r)/3.2);let l=gg(e.getX(r),e.getZ(r));l>0?n.set(xg(Or[o*We+a],l,$o),r*3):n.fill(Or[o*We+a],r*3,r*3+3)}i.setAttribute("color",new Ze(n,3)),i.computeVertexNormals();let s=new ot(i,Tg);s.receiveShadow=!0,It.add(s)}var Ms=.4*Zs.grid,es=Math.round(2*en.half/Ms)+1,Ss=new fs(2*en.half,2*en.half,es-1,es-1);Ss.rotateX(-Math.PI/2);Ss.setAttribute("color",new Ze(new Float32Array(es*es*3),3));var uf=new ot(Ss,Rs);uf.receiveShadow=!0;uf.frustumCulled=!1;function HM(i,e){let t=Math.max(0,Math.min(We-1.001,(i-Mt+Be)/kn)),n=Math.max(0,Math.min(We-1.001,(e-St+Be)/kn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r;return Or[r*We+s]*(1-a)*(1-o)+Or[r*We+s+1]*a*(1-o)+Or[(r+1)*We+s]*(1-a)*o+Or[(r+1)*We+s+1]*a*o}function Ag(i,e){en.cx=Math.round(i/Ms)*Ms,en.cz=Math.round(e/Ms)*Ms;let t=Ss.attributes.position,n=Ss.attributes.uv,s=Ss.attributes.color;for(let r=0;r<es;r++)for(let a=0;a<es;a++){let o=r*es+a,l=en.cx-en.half+a*Ms,c=en.cz-en.half+r*Ms,h=yg(l,c),u=h>0?lf(l,c)*h:0;t.setXYZ(o,l,Yt(l,c)+u+(h>0?vg(l,c)*h:0),c),n.setXY(o,l/3.2,c/3.2);let d=HM(l,c)*(1+Math.max(-.08,Math.min(.08,u*.6))),f=gg(l,c);f>0?(xg(d,f,$o),s.setXYZ(o,$o[0],$o[1],$o[2])):s.setXYZ(o,d,d,d)}t.needsUpdate=n.needsUpdate=s.needsUpdate=!0,Ss.computeVertexNormals(),Ss.computeBoundingSphere(),Eg.value.set(en.cx,en.cz,en.half-1,0)}function VM(){let e=new Float32Array(262144),t=Qi(8017);for(let l=0;l<1500;l++){let c=2/Math.sqrt(1-t()*.998109640831758),h=t()*512,u=t()*512,d=c*(.12+.18*t()),f=d*.3,m=Math.ceil(c*2);for(let b=-m;b<=m;b++)for(let g=-m;g<=m;g++){let p=Math.hypot(g,b)/c;if(p>2)continue;let _=((Math.round(u)+b)%512+512)%512*512+((Math.round(h)+g)%512+512)%512;e[_]+=p<1?f-(d+f)*(1-p*p):f*Math.exp(-(((p-1)/.45)**2))}}let n=0;for(let l of e)n+=l;n/=e.length;let s=document.createElement("canvas");s.width=s.height=512;let r=s.getContext("2d"),a=r.createImageData(512,512);for(let l=0;l<512;l++)for(let c=0;c<512;c++){let h=(e[l*512+(c+1)%512]-e[l*512+(c+512-1)%512])/2,u=(e[(l+1)%512*512+c]-e[(l+512-1)%512*512+c])/2,d=(l*512+c)*4;a.data[d]=128+Math.max(-127,Math.min(127,-h*160)),a.data[d+1]=128+Math.max(-127,Math.min(127,-u*160)),a.data[d+2]=128,a.data[d+3]=128+Math.max(-110,Math.min(110,(e[l*512+c]-n)*30))}r.putImageData(a,0,0);let o=new Mi(s);return o.wrapS=o.wrapT=Hn,o.anisotropy=8,o.colorSpace=li,o.premultiplyAlpha=!1,o}var Rg={value:null},Cg="smoothstep( 70.0, 260.0, length( vViewPosition ) )",Pg=(i,e,t,n="1.0")=>{i.uniforms.uCrT=Rg,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vCN = normalize(mat3(modelMatrix) * objectNormal);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uCrT; varying vec3 vCN;`).replace("#include <color_fragment>",`#include <color_fragment>
      float crW = ( ${e} ) * ( 0.4 + 0.6 * smoothstep( 0.8, 0.96, normalize( vCN ).y ) ); vec4 crA = texture2D( uCrT, vWxz / 120.0 ), crB = texture2D( uCrT, vWxz / 620.0 + 0.37 );
      diffuseColor.rgb *= 1.0 + crW * ( ( crA.a - 0.5 ) * 0.22 + ( crB.a - 0.5 ) * 0.22 );`).replace(t,`${t}
      { vec2 t = ( crA.rg * 2.0 - 1.0 ) * 0.45 + ( crB.rg * 2.0 - 1.0 ) * 0.38; vec3 wn = normalize( vCN ), dw = vec3( t.x, 0.0, t.y ) * crW * ( ${n} ); dw -= wn * dot( wn, dw );
        normal = normalize( normal + ( viewMatrix * vec4( dw, 0.0 ) ).xyz ); }`)};function jm(i,e,t){let n=new fs(2*i,2*i,e,e);n.rotateX(-Math.PI/2),n.translate(Mt,0,St);let s=n.attributes.position,r=n.attributes.uv,a=new Float32Array(s.count*3);for(let c=0;c<s.count;c++){let h=s.getX(c),u=s.getZ(c);s.setY(c,Ur(h,u)-.15),r.setXY(c,h/3.2,u/3.2),a.fill(_g(h,u),c*3,c*3+3)}n.setAttribute("color",new Ze(a,3)),n.computeVertexNormals();let o=new un({color:Rs.color,roughness:1,map:Rs.map,vertexColors:!0});o.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWxz = (modelMatrix * vec4(transformed, 1.0)).xz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("void main() {",`void main() {
  if (max(abs(vWxz.x - ${Mt.toFixed(1)}), abs(vWxz.y - ${St.toFixed(1)})) < ${(t-1).toFixed(1)}) discard;`),Pg(c,Cg,"#include <normal_fragment_begin>")},o.customProgramCacheKey=()=>"ring"+t;let l=new ot(n,o);l.receiveShadow=!0,It.add(l)}function GM(){jm(2500,250,Be),jm(8e3,320,2500)}Rg.value=VM();var yt={x:0,z:0,cyl:[]},WM=ii.reduce((i,e)=>Math.hypot(e.x-677.6,e.z+699.9)<Math.hypot(i.x-677.6,i.z+699.9)?e:i),Lh=[];function Ig(i,e,t){let{L:n,W:s,H:r}=i;if(e<-.6||e>n+1.2||Math.abs(t)>s/2+1.4)return-9;let a=s/2*(.86+.28*Pn(e*.45+7,3.3,3)),o=n+.8*(Pn(t*.6+2,8.1,3)-.5),l=r*Math.max(0,e)/n-.12+(.1*(Pn(e*.9+4,t*.9,3)-.5)+.035*(Pn(e*4+1,t*4-3,2)-.5))*Math.min(1,Math.max(0,e)),c=Xe(a+.6,a-.9,Math.abs(t)),h=Xe(o+.5,o-.45,e);return l*c*h-1.2*(1-c*h)}function qM(i,e){let t=-1e9;for(let n of Lh){let s=i-n.x,r=e-n.z;if(Math.abs(s)>n.L||Math.abs(r)>n.L)continue;let a=s*n.c+r*n.s+n.L/2,o=-s*n.s+r*n.c,l=Ig(n,a,o);l>-8&&(t=Math.max(t,Yt(i,e)+l))}return t}function Km(i,e,t){Lh.push(i);let n=70,s=36,r=-.5,a=i.L+1.1,o=-i.W/2-1.3,l=[],c=[];for(let d=0;d<=s;d++)for(let f=0;f<=n;f++){let m=r+(a-r)*f/n,b=o+-2*o*d/s,g=i.x+(m-i.L/2)*i.c-b*i.s,p=i.z+(m-i.L/2)*i.s+b*i.c,_=Ig(i,m,b);l.push(g,Yt(g,p)+(_<-8?-1.2:_),p)}for(let d=0;d<s;d++)for(let f=0;f<n;f++){let m=d*(n+1)+f;c.push(m,m+n+1,m+1,m+1,m+n+1,m+n+2)}let h=new At;h.setAttribute("position",new gt(l,3)),h.setIndex(c),h.computeVertexNormals(),h.attributes.normal.getY(0)<0&&(c.reverse(),h.setIndex(c),h.computeVertexNormals()),Lg(h,t);let u=new ot(h,e);u.castShadow=u.receiveShadow=!0,It.add(u)}function XM(){let e=new Float32Array(65536),t=Qi(76535),n=(h,u,d)=>{let f=Math.floor(h),m=Math.floor(u),b=h-f,g=u-m,p=b*b*(3-2*b),_=g*g*(3-2*g),M=(x,v)=>Ii((x%d+d)%d,(v%d+d)%d);return M(f,m)*(1-p)*(1-_)+M(f+1,m)*p*(1-_)+M(f,m+1)*(1-p)*_+M(f+1,m+1)*p*_};for(let h=0;h<256;h++)for(let u=0;u<256;u++){let d=0,f=.5;for(let m of[4,8,16,32,64])d+=f*n(u/256*m,h/256*m,m),f*=.55;e[h*256+u]=d*2.2}for(let h=0;h<420;h++){let u=t()*256,d=t()*256,f=1.2+Math.pow(t(),3)*7,m=Math.ceil(f*1.5);for(let b=-m;b<=m;b++)for(let g=-m;g<=m;g++){let p=Math.hypot(g,b)/f;if(p>1.5)continue;let _=((Math.round(d)+b)%256+256)%256*256+((Math.round(u)+g)%256+256)%256;e[_]-=p<1?.22*(1-p*p):-.03*(1.5-p)}}let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d"),a=r.createImageData(256,256),o=1e9,l=-1e9;for(let h of e)o=Math.min(o,h),l=Math.max(l,h);for(let h=0;h<256;h++)for(let u=0;u<256;u++){let d=e[h*256+(u+1)%256]-e[h*256+(u+256-1)%256],f=e[(h+1)%256*256+u]-e[(h+256-1)%256*256+u],m=.09,b=Math.hypot(d,f,m),g=(h*256+u)*4;a.data[g]=128-d/b*127,a.data[g+1]=128-f/b*127,a.data[g+2]=128+m/b*127,a.data[g+3]=255*(e[h*256+u]-o)/(l-o)}r.putImageData(a,0,0);let c=new Mi(s);return c.wrapS=c.wrapT=Hn,c.anisotropy=8,c.colorSpace=li,c.premultiplyAlpha=!1,c}function jM(){let i=new un({color:16777215,vertexColors:!0,roughness:1,metalness:0}),e=XM();return i.onBeforeCompile=t=>{t.uniforms.rockN={value:e},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        normal = normalize( ( viewMatrix * vec4( normalize( wn + d ), 0.0 ) ).xyz ); }`)},i}function Lg(i,e){let t=i.attributes.position,n=i.attributes.normal,s=new Float32Array(t.count*3),r=new C;for(let a=0;a<t.count;a++){let o=t.getX(a),l=t.getY(a),c=t.getZ(a),h=.5+.13*(Pn(o*.35+e,c*.35+l*.3,3)-.5)+.08*(Pn(o*2.1-l,c*2.1+e,2)-.5);r.set(n.getX(a),n.getY(a),n.getZ(a)),h+=.07*Xe(.45,.95,r.y)-.05*Xe(-.1,-.7,r.y),h=Math.pow(Math.max(.05,h),2.2),s[a*3]=h,s[a*3+1]=h*.985,s[a*3+2]=h*.96}i.setAttribute("color",new Ze(s,3))}function KM(){let i=zr[0],e=[9,4.4,5],t=.35,n=.7;yt.x=i.x-21,yt.z=i.z-3;let s=Yt(yt.x,yt.z),r=6,a=new C(Yt(yt.x-r,yt.z)-Yt(yt.x+r,yt.z),2*r,Yt(yt.x,yt.z-r)-Yt(yt.x,yt.z+r)).normalize(),o=[[1,0,.12,-1],[.08,.1,1,1],[1,.05,-.25,4.4],[.25,.15,1,-1.4]].map(([v,S,T,y])=>{let E=new C(v,S,T),R=E.length();return{n:E.divideScalar(R),d:y/R}}),l=[[[[0,-1],[1,1]],[-1.1,0,.7]],[[[0,-1],[1,-1]],[-.8,-.1,-.6]],[[[0,1],[2,-1],[3,1]],[.2,0,.55]],[[[0,1],[2,-1],[3,-1]],[.15,-.05,-.65]]],c=yt.grp=new Dt;c.position.set(yt.x,s-n,yt.z),c.quaternion.setFromUnitVectors(new C(0,1,0),a).multiply(new ft().setFromAxisAngle(new C(0,1,0),t)),It.add(c);let h=jM(),u=new C,d=[],f=new va(1,5);f.deleteAttribute("normal"),f.deleteAttribute("uv");let m=ld(f);for(let[v,S]of l){let T=m.clone(),y=T.attributes.position;for(let B=0;B<y.count;B++){u.fromBufferAttribute(y,B).normalize();let X=Pn(u.x*1.6+u.y*2.3+11,u.z*1.6-u.y*1.3,3),te=Pn(u.x*7+3,u.z*7+u.y*6,3),q=Pn(u.x*19-5,u.z*19+u.y*17,2),J=Pn(u.x*48+9,u.z*48-u.y*41,2),Q=.84+.3*X+.12*te+.06*q+.025*J,Ee=1+.35*Math.max(0,u.y)*Math.exp(-((u.x-.15)**2+(u.z+.1)**2)*2.5),Me=_t=>Math.sign(_t)*Math.pow(Math.abs(_t),.55);u.set(Me(u.x)*e[0],Me(u.y)*e[1]*Ee,Me(u.z)*e[2]).multiplyScalar(Q),u.y<-1&&(u.y=-1+(u.y+1)*.3);for(let[_t,it]of v){let ut=o[_t],K=it*(ut.n.dot(u)-ut.d);K<0&&u.addScaledVector(ut.n,-K*it)}y.setXYZ(B,u.x+S[0],u.y+S[1],u.z+S[2])}T.computeVertexNormals(),Lg(T,d.length*3.1);let E=new ot(T,h);E.castShadow=E.receiveShadow=!0,c.add(E),T.computeBoundingBox();let R=T.boundingBox,P=R.max.x-R.min.x,F=R.max.z-R.min.z,D=P>F,I=Math.min(P,F),O=Math.max(1,Math.round(Math.max(P,F)/I));for(let B=0;B<O;B++){let X=(B+.5)/O,te=D?R.min.x+P*X:(R.min.x+R.max.x)/2,q=D?(R.min.z+R.max.z)/2:R.min.z+F*X,J=new C(te,1,q).applyQuaternion(c.quaternion);d.push({x:yt.x+J.x,z:yt.z+J.z,r:I/2*.85,top:s-n+R.max.y})}}yt.cyl=d;let b=Math.PI/2-.15;Km({x:yt.x+9,z:yt.z+13,c:Math.cos(b),s:Math.sin(b),L:8,W:4.2,H:.7},h,21.7);let g=WM,p=Math.atan2(.358,.934),_=Math.cos(p),M=Math.sin(p),x=g.R+1+5;Km({x:g.x-_*x,z:g.z-M*x,c:_,s:M,L:10,W:4.4,H:1.5},h,13.1)}function YM(){let i=[0,1,2].map(n=>{let s=new va(1,1);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=ld(s);let r=s.attributes.position,a=new C,o=Qi(31+n),l=[0,1,2].map(()=>[new C(o()-.5,(o()-.3)*.8,o()-.5).normalize(),.45+o()*.3]);for(let c=0;c<r.count;c++){a.fromBufferAttribute(r,c).multiplyScalar(.8+.4*o());for(let[h,u]of l){let d=a.dot(h)-u;d>0&&a.addScaledVector(h,-d)}r.setXYZ(c,a.x*[1,1.1,.9][n],a.y*[.85,.75,.95][n],a.z*[1,.85,1.1][n])}return s.computeVertexNormals(),s}),e=new un({color:7828333,roughness:.95,flatShading:!0}),t=new Wt;i.forEach((n,s)=>{let r=zn.filter(l=>Math.floor(l.k*3)%3===s);if(!r.length)return;let a=new br(n,e,r.length);r.forEach((l,c)=>{t.position.set(l.x,Yt(l.x,l.z)+lf(l.x,l.z)-l.s*(l.bury??.62),l.z),t.rotation.set(0,l.yaw,0),t.scale.setScalar(l.s),t.updateMatrix(),a.setMatrixAt(c,t.matrix)});let o=new Ma({depthPacking:ku});o.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLy = position.y;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("void main() {",`void main() {
  if ( vLy < 0.56 ) discard;      // below the ground line (the rock sits 0.62 of its size down)`)},a.customDepthMaterial=o,a.castShadow=a.receiveShadow=!0,It.add(a)})}var ec=700,Lr=new C(ec/12*(1.1**2+2.06**2),ec/12*(3.1**2+2.06**2),ec/12*(3.1**2+1.1**2)),df=()=>!0,bn=(()=>{try{return+localStorage.getItem("lrv-spd")||2}catch{return 2}})(),bh=.41,qo=.36,JM=4200,ZM=620,$M=.05,QM=1.6,Ym=6e4,eS=1500,tS=.1,nS=1600,ef=.62,Dg=5;function Fg(i){bn=i===3&&df()?3:i===2||i===3?2:1,ef=[.62,.85,1][bn-1],Dg=[5,11.2,15][bn-1];try{localStorage.setItem("lrv-spd",String(bn))}catch{}}var wn=[[1.15,.915,1],[1.15,-.915,1],[-1.15,.915,-1],[-1.15,-.915,-1]].map(([i,e,t])=>({at:new C(i,-.08,e),steer:t,comp:0,contact:!1,spin:0,off:0,hit:0})),Qe={on:!1,x:-12,z:4,y:0},tf=[];for(let i of[-1.5,1.5])for(let e of[-1,1])for(let t of[-.3,.75])tf.push(new C(i,t,e));var N={p:new C(0,0,0),v:new C,q:new ft,w:new C,steer:0};function ts(i,e,t){let s=new C(Yt(i-1.5,e)-Yt(i+1.5,e),3,Yt(i,e-1.5)-Yt(i,e+1.5)).normalize();N.q.setFromUnitVectors(new C(0,1,0),s).multiply(new ft().setFromAxisAngle(new C(0,1,0),t)),N.p.set(i,ht(i,e),e).addScaledVector(s,.8),N.v.set(0,0,0),N.w.set(0,0,0),N.steer=0,nc=!0,wn.forEach(r=>{r.hx=r.hy=0})}var nc=!0,Xo=new C,Dr=new C,Br=new C,tr=new C,vn=new C,Kt=new C,Jm=new C,ys=new C,Ba=new C,Hd=new C,bt=new C,Va=new ft,ji=new C,dh=new C,$e={t:0,start:null,peak:0,last:null,best:0,grounded:!0,spin:0},Xt=Object.assign({t:0,d:0,h:0,v:0,v2:0,v3:0,lap:0,lap2:0,lap3:0},(()=>{try{return JSON.parse(localStorage.getItem("lrv-records"))||{}}catch{return{}}})());Fg(bn);var Zi=0,ja=0,Zm=.42;function nf(i){Xo.set(0,-Vr*ec,0),Dr.set(0,0,0),vn.set(0,1,0).applyQuaternion(N.q),Kt.set(1,0,0).applyQuaternion(N.q),Jm.set(0,0,1).applyQuaternion(N.q);let e=N.v.dot(Kt),t=Math.hypot(N.v.x,N.v.z),n=Math.min(.42,Math.max(.1,1.5*Math.atan(1.15*1.3*ef*Vr/Math.max(.01,t*t))));N.steer+=Math.max(-Zm*i,Math.min(Zm*i,ja*n-N.steer));let s=0;for(let h of wn){let u=tr.copy(h.at).applyQuaternion(N.q).add(N.p),d=(u.y-ht(u.x,u.z))/Math.max(.3,vn.y),f=qo+bh-d;if(f<=0){h.contact=!1,h.comp=0,h.off+=i;continue}h.off>.12&&(h.hit=Math.max(h.hit,-N.v.y+.5)),h.off=0,h.contact=!0,s++;let m=(f-h.comp)/i;h.comp=f;let b=f>qo?m>=0?Ym*(f-qo):Math.min(eS,Ym*tS*(f-qo)):0,g=Math.min(9e3,JM*Math.min(f,qo)+(m<0?nS:ZM)*m+b)*Xe(.2,.55,vn.y);if(g<=0)continue;let p=Qd(u.x,u.z),_=Br.copy(u).addScaledVector(vn,-(d-bh*.1)),M=_.sub(N.p);ys.copy(N.w).cross(M).add(N.v);let x=N.steer*h.steer;Ba.copy(Kt).multiplyScalar(Math.cos(x)).addScaledVector(Jm,Math.sin(x)),Ba.addScaledVector(p,-Ba.dot(p)).normalize(),Hd.copy(p).cross(Ba).normalize();let v=ys.dot(Ba),S=ys.dot(Hd),T=ef*g,y;Zi>.02&&v>-.3?y=Zi*[520,900,1300][bn-1]*Math.max(0,1-v/Dg):Zi<-.02&&v<.3?y=Zi*300*Math.max(0,1+v/QM):Math.abs(Zi)>.02?y=-Math.sign(v)*T:y=0,y-=Math.sign(v)*Math.min(Math.abs(v)*400,$M*g);let E=-S*1600;if(nc){h.hx+=v*i,h.hy+=S*i,y=-(v*12e3+h.hx*3e4),E=-(S*12e3+h.hy*3e4);let P=Math.hypot(y,E);P>T&&(h.hx*=T/P,h.hy*=T/P)}let R=Math.hypot(y,E);R>T&&(y*=T/R,E*=T/R),bt.copy(p).multiplyScalar(g).addScaledVector(Ba,y).addScaledVector(Hd,E),Xo.add(bt),Dr.add(dh.copy(M).cross(bt)),h.spin+=v/bh*i}{let h=0;for(let u of wn)u.contact&&h++;if(h>=2&&!nc){let u=-e*Math.tan(N.steer)/1.15,d=N.w.dot(vn);Dr.addScaledVector(vn,Math.max(-700,Math.min(700,(u-d)*Lr.y*.8*h/4*Xe(.5,.8,vn.y))))}}if(vn.y<.6&&vn.y>-.5&&t<2.5&&Math.hypot(N.w.x,N.w.z)<1.2){let h=!1;for(let u of tf){let d=tr.copy(u).applyQuaternion(N.q).add(N.p);if(d.y<ht(d.x,d.z)+.05){h=!0;break}}if(h){let u=bt.set(0,1,0).cross(vn),d=u.length();d>.001&&Dr.addScaledVector(u,2400/d*Xe(.6,.4,vn.y))}}for(let h of tf){let u=tr.copy(h).applyQuaternion(N.q).add(N.p),d=ht(u.x,u.z),f=d-u.y;if(f<=0)continue;s++;let m=Br.copy(u).sub(N.p);ys.copy(N.w).cross(m).add(N.v);let b=Qd(u.x,u.z),g=ys.dot(b);h.y>0&&(re.roof=Math.max(re.roof,-g),re.topDown=!0);let p=g<0?Math.min(14e3,6e4*f-3500*g):Math.max(0,Math.min(2500,9e3*f)-3500*g);bt.copy(ys).addScaledVector(b,-g);let _=bt.length();_>1e-4&&bt.multiplyScalar(-Math.min(.4*p,_*3e3)/_),bt.addScaledVector(b,p),Xo.add(bt),Dr.add(dh.copy(m).cross(bt))}{Va.copy(N.q).invert();let h=(u,d,f,m,b)=>{let g=tr.set(u,d,f).sub(N.p).applyQuaternion(Va),p=Br.set(Math.max(-1.5,Math.min(1.5,g.x)),Math.max(-.3,Math.min(.75,g.y)),Math.max(-1,Math.min(1,g.z))).applyQuaternion(N.q).add(N.p),_=ji.copy(p).sub(bt.set(u,b?p.y:d,f)),M=_.length();if(M>=m)return;M<1e-4&&(_.copy(N.p).sub(bt.set(u,N.p.y,f)),_.y=0,M=0),_.normalize();let x=p.sub(N.p);ys.copy(N.w).cross(x).add(N.v);let v=ys.dot(_),S=Math.max(0,9e4*(m-M)-3e3*v);bt.copy(ys).addScaledVector(_,-v);let T=bt.length();T>1e-4&&bt.multiplyScalar(-Math.min(.4*S,T*3e3)/T),bt.addScaledVector(_,S),Xo.add(bt),Dr.add(dh.copy(x).cross(bt)),s++};if(Qe.on&&Math.hypot(N.p.x-Qe.x,N.p.z-Qe.z)<8){h(Qe.x,Math.max(Qe.y+.3,Math.min(Qe.y+7,N.p.y)),Qe.z,2.2,!0);for(let[u,d]of[[1,0],[-1,0],[0,1],[0,-1]]){h(Qe.x+u*4.1,Qe.y+.25,Qe.z+d*4.1,.5);for(let f=1;f<=4;f++){let m=f/5,b=4.1-1.9*m;h(Qe.x+u*b,Qe.y+.4+2.2*m,Qe.z+d*b,.2)}}}if(yt.cyl.length&&Math.hypot(N.p.x-yt.x,N.p.z-yt.z)<22)for(let u of yt.cyl)N.p.y<u.top+.6&&h(u.x,Math.min(u.top,N.p.y),u.z,u.r,!0)}N.v.addScaledVector(Xo,i/ec),Va.copy(N.q).invert(),ji.copy(N.w).applyQuaternion(Va);let r=bt.copy(Dr).applyQuaternion(Va),a=dh.set(Lr.x*ji.x,Lr.y*ji.y,Lr.z*ji.z),o=tr.copy(ji).cross(a);ji.x+=(r.x-o.x)/Lr.x*i,ji.y+=(r.y-o.y)/Lr.y*i,ji.z+=(r.z-o.z)/Lr.z*i,N.w.copy(ji).applyQuaternion(N.q);{let h=Math.hypot(N.w.x,N.w.z);if(h>2.5){let u=Math.exp(-i*3*(h-2.5));N.w.x*=u,N.w.z*=u}}N.p.addScaledVector(N.v,i);let l=new ft(N.w.x*i*.5,N.w.y*i*.5,N.w.z*i*.5,0).multiply(N.q);N.q.x+=l.x,N.q.y+=l.y,N.q.z+=l.z,N.q.w+=l.w,N.q.normalize();let c=Be-12;if(Math.abs(N.p.x-Mt)>c&&(N.p.x=Mt+Math.sign(N.p.x-Mt)*c,N.v.x*(N.p.x-Mt)>0&&(N.v.x=0)),Math.abs(N.p.z-St)>c&&(N.p.z=St+Math.sign(N.p.z-St)*c,N.v.z*(N.p.z-St)>0&&(N.v.z=0)),s===0)$e.grounded&&$e.t===0&&($e.start=N.p.clone(),$e.peak=0,$e.spin=0),$e.t+=i,$e.spin+=Math.hypot(N.w.x,N.w.z)*i,$e.peak=Math.max($e.peak,N.p.y-.78-ht(N.p.x,N.p.z)),$e.grounded=!1;else if(!$e.grounded){if($e.grounded=!0,$e.t>.45){let h=Math.hypot(N.p.x-$e.start.x,N.p.z-$e.start.z);$e.last={t:$e.t,d:h,peak:Math.max(0,$e.peak),spin:$e.spin},$e.t>$e.best&&($e.best=$e.t),xS($e.last)}$e.t=0}return s}var iS=[["#7CC7F2",[[0,0],[129,-27],[330,-1400],[460,-2700],[805,-3003],[1294,-3036],[2200,-2950],[3012,-2599],[2500,-1900],[1735,-1228],[900,-600],[145,-39],[0,0]]]],$a=[-12,4],Hr=[],Nt={x:$a[0]+150/ar,z:$a[1]-170/ar,ring:null,line:null},zr=[["stop 6 \xB7 Tracy\u2019s Rock",805,-3003],["stop 8",3012,-2599],["stop 9 \xB7 Van Serg",1735,-1228]].map(([i,e,t])=>({n:i,x:$a[0]+e/ar,z:$a[1]+t/ar}));function sS(){let i=(c,h,u,d,f)=>.5*(2*h+(-c+u)*f+(2*c-5*h+4*u-d)*f*f+(-c+3*h-3*u+d)*f*f*f),e=[],t=[],n=new De;for(let[c,h]of iS){let u=h.map(m=>[$a[0]+m[0]/ar,$a[1]+m[1]/ar]),d=m=>u[Math.max(0,Math.min(u.length-1,m))];n.set(c);let f=0;for(let m=0;m<u.length-1;m++){let b=Math.hypot(u[m+1][0]-u[m][0],u[m+1][1]-u[m][1]),g=Math.max(2,Math.ceil(b/.5));for(let p=0;p<g;p++){let _=p/g,M=i(d(m-1)[0],d(m)[0],d(m+1)[0],d(m+2)[0],_),x=i(d(m-1)[1],d(m)[1],d(m+1)[1],d(m+2)[1],_);(f+=b/g)<3||(f=0,fg(M,x,14)&&(e.push(M,Yt(M,x)+.12,x),t.push(n.r,n.g,n.b),Hr.push(M,x)))}}}let s=new At;s.setAttribute("position",new gt(e,3)),s.setAttribute("color",new gt(t,3));let r=new Nn({transparent:!0,depthWrite:!1,uniforms:{map:{value:pf},px:{value:1},vh:{value:800},op:{value:0}},vertexShader:"attribute vec3 color; varying vec3 vC; uniform float px, vh; void main() { vC = color; vec4 mv = modelViewMatrix * vec4( position, 1.0 ); gl_Position = projectionMatrix * mv; gl_PointSize = max( 2.0 * px, 0.3 * projectionMatrix[1][1] * 0.5 * vh / -mv.z ); }",fragmentShader:"uniform sampler2D map; uniform float op; varying vec3 vC; void main() { float a = texture2D( map, gl_PointCoord ).a; if ( a < 0.02 ) discard; gl_FragColor = vec4( vC, a * 0.45 * op ); }"}),a=new ds(s,r),o=new He;a.frustumCulled=!1,a.renderOrder=2,a.visible=!1,It.add(a),Nt.line=a;let l=new ot(new _o(3.6,3.85,48),new Qn({color:8177650,transparent:!0,opacity:.4,side:jn,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(Nt.x,Yt(Nt.x,Nt.z)+.25,Nt.z),It.add(l),Nt.ring=l,a.onBeforeRender=c=>{r.uniforms.px.value=c.getPixelRatio(),r.uniforms.vh.value=c.getDrawingBufferSize(o).y}}var Qa=1400,Jn=new Float32Array(Qa*3),Yi=new Float32Array(Qa*3),_h=new Float32Array(Qa),ff=new At;ff.setAttribute("position",new Ze(Jn,3));function rS(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.6)"),t.addColorStop(.6,"rgba(255,255,255,.15)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new Mi(i)}var pf=rS(),Ng=new ds(ff,new us({color:10130828,size:.032,map:pf,transparent:!0,opacity:.32,depthWrite:!1}));Ng.frustumCulled=!1;It.add(Ng);var Ya=0,ic=1600,Ai=new Float32Array(ic*3),Fr=new Float32Array(ic*3),Vd=new Float32Array(ic),mf=new At;mf.setAttribute("position",new Ze(Ai,3));var Ug=new ds(mf,new us({color:12433325,size:.06,map:pf,transparent:!0,opacity:.3,depthWrite:!1}));Ug.frustumCulled=!1;It.add(Ug);var Gd=0;function aS(i){for(let e of wn){if(!e.contact)continue;let t=tr.copy(e.at).applyQuaternion(N.q).add(N.p),n=N.v.length(),s=Math.min(5,Math.floor(n*1.2*i*60*(.6+Math.random())));for(let r=0;r<s;r++){let a=Ya;Ya=(Ya+1)%Qa,Jn[a*3]=t.x+(Math.random()-.5)*.3,Jn[a*3+1]=ht(t.x,t.z)+.05,Jn[a*3+2]=t.z+(Math.random()-.5)*.3;let o=.5+Math.random()*1.1*Math.min(1,n/3);Yi[a*3]=-Kt.x*n*(.25+Math.random()*.5)+(Math.random()-.5)*.6,Yi[a*3+1]=o,Yi[a*3+2]=-Kt.z*n*(.25+Math.random()*.5)+(Math.random()-.5)*.6,_h[a]=1}if(e.hit>0){let r=ht(t.x,t.z),a=Math.min(110,Math.round(40*e.hit)),o=Math.min(2.2,e.hit);for(let l=0;l<a;l++){let c=Gd,h=Math.random()*6.2832,u=(.4+Math.random()*1)*o;Gd=(Gd+1)%ic,Ai[c*3]=t.x+Math.cos(h)*.25,Ai[c*3+1]=r+.04,Ai[c*3+2]=t.z+Math.sin(h)*.25,Fr[c*3]=Math.cos(h)*u+N.v.x*.4,Fr[c*3+1]=(.2+Math.random()*.6)*o,Fr[c*3+2]=Math.sin(h)*u+N.v.z*.4,Vd[c]=1}e.hit=0}}for(let e=0;e<Qa;e++){if(_h[e]<=0){Jn[e*3+1]=-9999;continue}Yi[e*3+1]-=Vr*i,Jn[e*3]+=Yi[e*3]*i,Jn[e*3+1]+=Yi[e*3+1]*i,Jn[e*3+2]+=Yi[e*3+2]*i,Jn[e*3+1]<ht(Jn[e*3],Jn[e*3+2])&&(_h[e]=0)}ff.attributes.position.needsUpdate=!0;for(let e=0;e<ic;e++){if(Vd[e]<=0){Ai[e*3+1]=-9999;continue}Fr[e*3+1]-=Vr*i,Ai[e*3]+=Fr[e*3]*i,Ai[e*3+1]+=Fr[e*3+1]*i,Ai[e*3+2]+=Fr[e*3+2]*i,Ai[e*3+1]<ht(Ai[e*3],Ai[e*3+2])&&(Vd[e]=0)}mf.attributes.position.needsUpdate=!0}function oS(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"rgba(58,56,53,0)"),n.addColorStop(.16,"rgba(56,54,51,.22)"),n.addColorStop(.84,"rgba(56,54,51,.22)"),n.addColorStop(1,"rgba(58,56,53,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),t.lineCap="round",t.lineJoin="round";for(let[r,a]of[[64*.2,.04],[64*.14,.065],[64*.08,.1]]){t.strokeStyle=`rgba(40,38,36,${a})`,t.lineWidth=r;for(let o=-1;o<5;o++){let l=o*64/4;t.beginPath(),t.moveTo(64*.16,l),t.lineTo(64*.5,l+64*.11),t.lineTo(64*.84,l),t.stroke()}}let s=new Mi(e);return s.wrapS=s.wrapT=Hn,s.colorSpace=Gt,s.anisotropy=4,s}var Pi=1400,cS=new un({map:oS(),transparent:!0,depthWrite:!1,roughness:1,vertexColors:!0,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),lS=wn.map(()=>{let i=new Float32Array(Pi*2*3),e=new Float32Array(Pi*2*2),t=new Float32Array(Pi*2*4),n=new Uint32Array((Pi-1)*6);for(let a=0;a<Pi-1;a++){let o=a*2;n.set([o,o+2,o+1,o+2,o+3,o+1],a*6)}let s=new At;s.setAttribute("position",new Ze(i,3)),s.setAttribute("uv",new Ze(e,2)),s.setAttribute("color",new Ze(t,4)),s.setIndex(new Ze(n,1)),s.setDrawRange(0,0);let r=new ot(s,cS);return r.frustumCulled=!1,r.receiveShadow=!0,r.renderOrder=1,It.add(r),{g:s,pos:i,uv:e,col:t,n:0,last:null,s:0,gap:!1}}),Ka=new C;function Wd(i,e){let t=(i-en.cx+en.half)/Ms,n=(e-en.cz+en.half)/Ms;if(!(t>=0&&n>=0&&t<es-1&&n<es-1))return Yt(i,e);let s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=Ss.attributes.position,c=(m,b)=>l.getY(b*es+m),h=c(s,r),u=c(s,r+1),d=c(s+1,r);if(a+o<=1)return h+(d-h)*a+(u-h)*o;let f=c(s+1,r+1);return f+(u-f)*(1-a)+(d-f)*(1-o)}function qd(i,e,t,n,s,r,a,o){if(i.n>=Pi){let l=Pi>>1,c=Pi-l;i.pos.copyWithin(0,c*6,Pi*6),i.uv.copyWithin(0,c*4,Pi*4),i.col.copyWithin(0,c*8,Pi*8),i.n=l}i.pos.set([e,t,n,s,r,a],i.n*6),i.uv.set([0,i.s,1,i.s],i.n*4),i.col.set([1,1,1,o,1,1,1,o],i.n*8),i.n++}function hS(){wn.forEach((i,e)=>{let t=lS[e];if(!i.contact){t.n&&(t.gap=!0);return}let n=Di[e],s=(n?Ka.set(n.c.x,i.at.y,n.c.z):Ka.copy(i.at)).applyQuaternion(N.q).add(N.p);if(t.last&&!t.gap&&Math.hypot(s.x-t.last.x,s.z-t.last.z)<.25)return;let r=n?n.hw:.115,a=t.last&&!t.gap?s.x-t.last.x:Kt.x,o=t.last&&!t.gap?s.z-t.last.z:Kt.z,l=Math.hypot(a,o)||1,c=-o/l*r,h=a/l*r,u=s.x+c,d=s.z+h,f=s.x-c,m=s.z-h,b=Wd(s.x,s.z),g=Math.max(Wd(u,d),b)+.02,p=Math.max(Wd(f,m),b)+.02;if(t.gap){let M=(t.n-1)*6,x=t.pos.slice(M,M+6);qd(t,x[0],x[1],x[2],x[3],x[4],x[5],0),qd(t,u,g,d,f,p,m,0),t.gap=!1}else t.last&&(t.s+=Math.hypot(s.x-t.last.x,s.z-t.last.z)/.5);qd(t,u,g,d,f,p,m,1),t.last={x:s.x,z:s.z};let _=t.g.attributes;_.position.needsUpdate=_.uv.needsUpdate=_.color.needsUpdate=!0,t.g.setDrawRange(0,Math.max(0,(t.n-1)*6))})}var jo={az:240.7,el:45.1,diam:1.88,sub:[-110.9,-8.5],pole:[-.3895,.2953,-.8724]};function uS(){let e=jo.el*Math.PI/180,t=jo.az*Math.PI/180,n=6e4*Math.tan(jo.diam/2*Math.PI/180),s=new un({roughness:.85,metalness:0,fog:!1,color:new De(2.2,2.2,2.2)});new vr().load("../models/earth-bm.jpg",u=>{u.colorSpace=Gt,u.anisotropy=4,s.map=u,s.needsUpdate=!0}),s.onBeforeCompile=u=>{u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
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
        { float rim = 1. - abs(dot(normalize(vNormal), vec3(0., 0., 1.))); totalEmissiveRadiance += vec3(.12, .25, .55) * pow(rim, 4.) * .35; }`)};let r=new ot(new yo(n,64,32),s),a=new C(Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e));r.position.copy(a).multiplyScalar(6e4);let o=(u,d)=>(u*=Math.PI/180,d*=Math.PI/180,new C(Math.cos(d)*Math.cos(u),Math.sin(d),-Math.cos(d)*Math.sin(u))),l=(u,d)=>{let f=u.clone().normalize(),m=d.clone().addScaledVector(f,-d.dot(f)).normalize();return new Ve().makeBasis(f,m,new C().crossVectors(f,m))},c=l(o(...jo.sub),new C(0,1,0)),h=l(a.clone().negate(),new C(...jo.pole));return r.quaternion.setFromRotationMatrix(h.multiply(c.transpose())),r}var Og=uS();It.add(Og);var Fe=new Dt;It.add(Fe);var Xd=new Vo().setMeshoptDecoder(kd);function Ko(i,e,t,n){i.onBeforeCompile=s=>{s.uniforms.uW={value:new xt(...n)},s.uniforms.uF={value:new He(...t||[1,0])},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        if (uF.y > 0.) { vec3 q = vWp * uF.x; float fw = length(fwidth(q)); vec3 t = fCell(q) * smoothstep(1.1, .3, fw) + .6 * fCell(q * .37 + 5.) * smoothstep(1.1, .3, fw * .37); normal = normalize(normal + uF.y * (viewMatrix * vec4(t, 0.)).xyz); }`)},i.customProgramCacheKey=()=>"lm-"+e}function dS(i){i.traverse(e=>{e.isMesh&&(e.material=[].concat(e.material).map(t=>{let n=t.clone(),s=n.name||"",r=(a,o,l)=>{n.color.set(a),n.metalness=o,n.roughness=l};return/blinn1SG|blinn10SG/.test(s)?(r(13600048,.15,.5),Ko(n,"amber",[11,.09],[.06,.1,.02,1.5])):/blinn9SG/.test(s)?(r(11033122,.15,.52),Ko(n,"amber2",[11,.09],[.06,.1,.02,1.5])):/initialShadingGr|blinn3SG|blinn7SG/.test(s)?(r(s.includes("blinn3")?6444365:9601135,.08,.55),Ko(n,"cabin",null,[.08,.12,.04,1.2]),n.flatShading=!0):/blinn4SG/.test(s)?(r(11774880,.12,.5),Ko(n,"metal",null,[.07,.12,.04,2])):/blinn6SG|blinn2SG/.test(s)&&(r(s.includes("blinn6")?1579034:3946036,.3,.55),Ko(n,"dark",null,[.06,.1,.03,2])),n}),e.material.length===1&&(e.material=e.material[0]))})}function $m(i){i.traverse(e=>{e.isMesh&&(e.castShadow=e.receiveShadow=!0,[].concat(e.material).forEach(t=>{t.color&&t.color.lerp(new De(10196364),.18)}))})}var Ki=Object.create(null);addEventListener("keydown",i=>{Ki[i.key.toLowerCase()]=!0,i.key.toLowerCase()==="r"&&gf()});addEventListener("keyup",i=>{Ki[i.key.toLowerCase()]=!1});var Qm=Vm(se("stick")),Rt={yaw:0,pitch:.18,id:null,x:0,y:0,idle:9},si=0,eg=[0,3,1,2],fS=["Chase","Wide","Seat","Low"];function zg(i){si=i,se("btn-pov").textContent=fS[si],or=!1,Fe.visible=!0,i===2&&(Rt.yaw=0,Rt.pitch=.18)}se("btn-pov").addEventListener("click",()=>zg(eg[(eg.indexOf(si)+1)%4]));addEventListener("pointerdown",i=>{i.target===In.domElement&&(Rt.id=i.pointerId,Rt.x=i.clientX,Rt.y=i.clientY)});addEventListener("pointermove",i=>{i.pointerId===Rt.id&&(Rt.yaw-=(i.clientX-Rt.x)*.006,Rt.pitch=Math.max(si===2?-.7:-.1,Math.min(1.1,Rt.pitch+(i.clientY-Rt.y)*.004)),Rt.x=i.clientX,Rt.y=i.clientY,Rt.idle=0)});addEventListener("pointerup",i=>{i.pointerId===Rt.id&&(Rt.id=null)});document.addEventListener("touchmove",i=>{i.target.closest(".sheet")||i.preventDefault()},{passive:!1});var yh=0,Ch={x:-1e4,y:-1e4};addEventListener("pointermove",i=>{i.pointerType==="mouse"&&(Ch.x=i.clientX,Ch.y=i.clientY)});var kg=i=>40+18*Math.sin(3*i+5)+12*Math.sin(5*i)+7*Math.sin(8*i+4);function Yo(i,e){let t=i-Mt,n=e-St;return Be-kg(Math.atan2(n,t))-Math.pow(t**6+n**6,1/6)}function pS(i){let e=Math.cos(i),t=Math.sin(i),n=(Be-kg(i))/Math.pow(e**6+t**6,1/6);return[Mt+n*e,St+n*t]}var Ft={on:!1,t:0,cool:0,th:0,st:0,wt:0,msg:"",turn:!1};function mS(i){let e=se("cine-cap");e.classList.remove("on"),e.textContent=i,e.offsetWidth,e.classList.add("on")}function jd(i){if(i===Ft.msg)return;Ft.msg=i;let e=se("edgewarn");i&&(e.textContent=i),e.classList.toggle("on",!!i)}function sf(){Ft.on=!1,Ft.cool=4,document.body.classList.remove("home"),se("cine-cap").classList.remove("on")}function gS(i){let e=N.p.x,t=N.p.z,n=Yo(e,t),s=-(N.v.x*(Yo(e+1,t)-Yo(e-1,t))+N.v.z*(Yo(e,t+1)-Yo(e,t-1)))/2,r=Math.min(50,15+Math.max(0,s)**2/2.4),a=re.on||zt.on||Ae.on||tn.on;if(Ft.on&&a)return sf(),!1;if(!Ft.on){Ft.cool-=i;let _=s>.3?(n-r)/s:99;if(a||n>160||_>5&&n>r+12||s<-.3)return jd(""),!1;if(n>r||Ft.cool>0)return(Ft.wt-=i)<=0&&(Ft.wt=.25,jd(`Mission Control \xB7 You\u2019re nearing the edge of the mission area. Turn back toward the LM${_<99?`, or Cernan takes the wheel in ${Math.max(1,Math.ceil(_))} s`:""}.`)),!1;jd(""),Ft.on=!0,Ft.t=0,Ft.turn=!1,document.body.classList.add("home"),mS("Cernan has the wheel \xB7 He brakes, turns you around and heads back inside the mission area.")}Ft.t+=i;let o=Math.hypot(Qe.x-e,Qe.z-t)>500,l=o?Mt:Qe.x,c=o?St:Qe.z,h=_=>_-2*Math.PI*Math.round(_/(2*Math.PI)),u=Math.atan2(-(c-t),l-e),d=Math.atan2(-Kt.z,Kt.x),f=Math.hypot(N.v.x,N.v.z),m=Math.atan2(-N.v.z,N.v.x),b=h(u-d),g=h(u-m);if(Ft.turn&&Math.abs(b)<.5&&(f<1||Math.abs(g)<.6)&&Ft.t>2||Ft.t>15)return sf(),dn("Back inside the mission area \xB7 the controls are yours"),!1;let p=Math.min(1,Ft.t/1.2);return f>4&&!Ft.turn?(Ft.st=0,Ft.th=-1):(Ft.turn=!0,Ft.st=p*Math.max(-1,Math.min(1,-b*2.5)),Ft.th=f<2.5?.5:.15),!0}function dn(i){se("toast").textContent=i,se("toast").classList.add("on"),yh=3.6}function xS(i){ae.ph==="film"&&i.t>.6&&(ae.land=di),ka(i.t>1.2?40:20);let e=[];i.t>Xt.t&&(Xt.t=i.t,e.push("air time")),i.d>Xt.d&&(Xt.d=i.d,e.push("distance")),i.peak>Xt.h&&(Xt.h=i.peak,e.push("height"));try{localStorage.setItem("lrv-records",JSON.stringify(Xt))}catch{}let t=i.spin>5.4?" \xB7 full roll!":i.spin>2.6?" \xB7 half roll":"";dn(`Airborne ${i.t.toFixed(1)} s \xB7 ${Ir(i.d,1)} \xB7 ${Ir(i.peak,1)} high${t}${e.length?" \xB7 new record":""}`),oc(),kS(i)}function oc(){se("best").textContent=Xt.t?Xt.t.toFixed(1)+" s":"\u2014";let i=Xt[bn>1?"v"+bn:"v"];se("topv").textContent=i?oh+" \xB7 best "+ch(i).toFixed(1):oh;let e=Xt[bn>1?"lap"+bn:"lap"];se("rec").textContent=[e?`Best loop ${Math.floor(e/60)}:${(e%60).toFixed(1).padStart(4,"0")}`:"",Xt.t?`${Xt.t.toFixed(1)} s in the air \xB7 ${Ir(Xt.d,1)} \xB7 ${Ir(Xt.h,1)} high`:""].filter(Boolean).join(" \xB7 ")}var Ue={on:!1,t:0,cp:0,peak:0,away:!1,warned:!1,save:null},Ja={t:0};function bS(){let i=Ue.save;se("btn-rejoin").classList.remove("on"),Ja.t=0,!(!i||re.on)&&(ts(i.x,i.z,i.yaw),or=!1,Object.assign(Ue,{on:!0,t:i.t,cp:i.cp,peak:i.peak,warned:!1,away:!0}),dn(`Back on the route \xB7 the clock resumes at ${tc(i.t)}`))}var zt={on:!1,t:0,cap:"",go:!1,lines:null};function _S(){let i=bn>1?"lap"+bn:"lap";zt.lines=[[0,6.5,"The time trial: Apollo 17\u2019s third drive, north to Tracy\u2019s Rock at stop 6, east to stop 8, and home past Van Serg crater. On the Moon it was "+(_s?"7.5 mi (12.1 km)":"12.1 km")+"; here the stops sit at a quarter of their true distances, so the loop is about "+(_s?"1.5 mi":"2.5 km")+"."],[6.5,12,"The fastest anyone has driven on the Moon is about "+(_s?"11 mph (18 km/h)":"18 km/h (11 mph)")+": Gene Cernan, in this rover, downhill on the way back from that drive. It is still the lunar speed record."+(Xt[i]?` Your best loop at this speed: ${tc(Xt[i])}.`:"")],[12,13.6,"Timer started \xB7 Go!"]],zt.on=!0,zt.t=0,zt.go=!1,nn=!1,document.body.classList.add("briefing")}function yS(i){let e=zt.t+=i;e>=zt.lines[2][0]&&!zt.go&&(zt.go=!0,nn=!0,Ue.on=!0,Ue.t=0,Ue.cp=0,Ue.peak=0,Ue.warned=!1),e>=zt.lines[2][1]&&(zt.on=!1,document.body.classList.remove("briefing"));let t="";if(zt.on)for(let[n,s,r]of zt.lines)e>=n&&e<s&&(t=r);if(t!==zt.cap){zt.cap=t;let n=se("cine-cap");n.classList.remove("on"),t&&(n.textContent=t,n.offsetWidth,n.classList.add("on"))}}function vS(){let i=1e9;for(let e=0;e<Hr.length;e+=2){let t=Hr[e]-N.p.x,n=Hr[e+1]-N.p.z,s=t*t+n*n;s<i&&(i=s)}return Math.sqrt(i)}function MS(i){let e=Nt.line.material.uniforms.op,t=Nt.live?Ue.on?1:.65:0;e.value+=Math.sign(t-e.value)*Math.min(Math.abs(t-e.value),i/1.5),Nt.line.visible=e.value>.001}var tc=i=>`${Math.floor(i/60)}:${(i%60).toFixed(1).padStart(4,"0")}`;function Kd(i,e,t){Ka.set(i,Yt(i,e)+2,e).project(Ke);let n=se("objmark"),s=(Ka.x*.5+.5)*innerWidth,r=(-Ka.y*.5+.5)*innerHeight;Ka.z<1?(n.style.display="block",n.style.transform=`translate(${Math.max(20,Math.min(innerWidth-170,s))}px,${Math.max(80,Math.min(innerHeight-60,r))}px)`,n.querySelector("b").textContent=t):n.style.display="none"}function SS(i,e,t){let n=Math.hypot(Nt.x-N.p.x,Nt.z-N.p.z);if(!Ue.on){if(n<4.5&&!Ue.away){Ue.away=!0,_S();return}n>8&&(Ue.away=!1),Kd(Nt.x,Nt.z,n>25?`Time trial \xB7 ${hh(n)}`:"Time trial"),se("clock").textContent="";return}Ue.t+=t,e&&i>Ue.peak&&(Ue.peak=i);let s=vS();if(s<8&&$e.grounded&&vn.y>.85&&(Ue.saveT=(Ue.saveT||0)+t)>1&&(Ue.saveT=0,Ue.save={x:N.p.x,z:N.p.z,yaw:Math.atan2(-Kt.z,Kt.x),t:Ue.t,cp:Ue.cp,peak:Ue.peak}),s>35){Ue.on=!1,Ue.away=!1,se("clock").textContent="",dn("Too far from the route \xB7 time trial over"),Ue.save&&(Ja.t=10,se("btn-rejoin").classList.add("on"));return}s>20&&!Ue.warned?(Ue.warned=!0,dn("Back to the line, or the time trial ends")):s<12&&(Ue.warned=!1);let r=zr[Ue.cp];if(r){let a=Math.hypot(r.x-N.p.x,r.z-N.p.z);a<14&&(Ue.cp++,dn(`${r.n[0].toUpperCase()+r.n.slice(1)} \xB7 ${tc(Ue.t)}`)),Kd(r.x,r.z,`${r.n} \xB7 ${hh(a)}`)}else if(Kd(Nt.x,Nt.z,`Finish \xB7 ${hh(n)}`),n<4.5){Ue.on=!1,Ue.away=!0;let a=!df(),o=bn>1?"lap"+bn:"lap",l=bn>1?"v"+bn:"v",c=!Xt[o]||Ue.t<Xt[o];c&&(Xt[o]=Ue.t),Ue.peak>Xt[l]+.05&&(Xt[l]=Ue.peak),dn(`Loop ${tc(Ue.t)}${c?" \xB7 best lap":""} \xB7 top speed ${lh(Ue.peak,1)}${bn===1&&Ue.peak>18?" \xB7 faster than Cernan\u2019s "+lh(18):""}${a?" \xB7 Triple speed unlocked: choose it on the start card":""}`);try{localStorage.setItem("lrv-records",JSON.stringify(Xt))}catch{}oc()}se("clock").textContent=tc(Ue.t)}var re={roof:0,on:!1,t:0,fade:0,safe:{x:0,z:0,yaw:0},safeT:0,pieces:[],joints:[],extra:[],brace:[]},Bg=[],sr=new Map;function wS(){Fe.updateMatrixWorld(!0);let i=Fe.matrixWorld.clone().invert(),e=new C,t=new ke,n=new Map,s=r=>(sr.has(r)||sr.set(r,r.clone()),sr.get(r));Fe.traverse(r=>{if(!r.isMesh)return;let a=Di.findIndex(f=>{for(let m=r;m;m=m.parent)if(m===f.spin)return!0;return!1}),o=i.clone().multiply(r.matrixWorld),l=r.geometry,c=l.attributes.position,h=l.index?l.index.array:null,u=(h?h.length:c.count)/3;t.getNormalMatrix(o);let d=new Float32Array(c.count*3);for(let f=0;f<c.count;f++)e.fromBufferAttribute(c,f).applyMatrix4(o),d[f*3]=e.x,d[f*3+1]=e.y,d[f*3+2]=e.z;for(let f=0;f<u;f++){let m=[0,1,2].map(p=>h?h[f*3+p]:f*3+p),b="w"+a;if(a<0){let p=(d[m[0]*3]+d[m[1]*3]+d[m[2]*3])/3,_=(d[m[0]*3+1]+d[m[1]*3+1]+d[m[2]*3+1])/3,M=(d[m[0]*3+2]+d[m[1]*3+2]+d[m[2]*3+2])/3;if(_>Ye.KIT)b="k"+(p>-.1?1:0)+(M>0?1:0);else{let x=p<Ye.HA?0:p>Ye.HF?2:1;for(let v of Di)Math.abs(M)>.42&&_>-.9&&Math.abs(p-v.c.x)<.56&&(x=v.c.x>0?2:0);b="c"+x}}n.has(b)||n.set(b,new Map);let g=n.get(b);g.has(r)||g.set(r,{f:d,M:o.clone(),n:t.clone(),list:[]}),g.get(r).list.push(...m)}});for(let[r,a]of n){let o=new $t;for(let{f:u,list:d}of a.values())for(let f of d)o.expandByPoint(e.set(u[f*3],u[f*3+1],u[f*3+2]));let l=o.getCenter(new C),c=o.getSize(new C),h=[];for(let[u,{f:d,n:f,list:m}]of a){let b=u.geometry,g=new At,p=new Float32Array(m.length*3);m.forEach((_,M)=>{p[M*3]=d[_*3]-l.x,p[M*3+1]=d[_*3+1]-l.y,p[M*3+2]=d[_*3+2]-l.z}),g.setAttribute("position",new Ze(p,3));for(let _ of Object.keys(b.attributes)){if(_==="position")continue;let M=b.attributes[_],x=M.itemSize,v=new Float32Array(m.length*x);m.forEach((S,T)=>{if(_==="normal"){e.fromBufferAttribute(M,S).applyMatrix3(f).normalize(),v[T*3]=e.x,v[T*3+1]=e.y,v[T*3+2]=e.z;return}v[T*x]=M.getX(S),x>1&&(v[T*x+1]=M.getY(S)),x>2&&(v[T*x+2]=M.getZ(S)),x>3&&(v[T*x+3]=M.getW(S))}),g.setAttribute(_,new Ze(v,x))}h.push({geo:g,mat:s(u.material)})}Bg.push({c:l,sz:c,parts:h,key:r,kind:r[0]})}}function tg(i,e,t){let n=[];if(t){let o=Math.max(e.x,e.y)/2,l=e.z/2;for(let c=0;c<10;c++){let h=c/10*Math.PI*2;for(let u of[-l,l])n.push(new C(Math.cos(h)*o,Math.sin(h)*o,u))}}else{i.updateMatrixWorld(!0);let o=i.matrixWorld.clone().invert();i.traverse(l=>{if(!l.userData.part)return;let c=new $t;l.children.forEach(u=>{u.geometry.computeBoundingBox(),c.union(u.geometry.boundingBox)});let h=o.clone().multiply(l.matrixWorld);for(let u=0;u<8;u++)n.push(new C(u&1?c.max.x:c.min.x,u&2?c.max.y:c.min.y,u&4?c.max.z:c.min.z).applyMatrix4(h))})}i.updateMatrixWorld(!0);let s=0;for(let o of n){let l=o.clone().applyQuaternion(i.quaternion).add(i.position);s=Math.max(s,ht(l.x,l.z)-l.y)}i.position.y+=s;let r=new $t().setFromPoints(n),a=r.getSize(new C).max(new C(.1,.1,.1));return{pts:n,R:Math.max(...n.map(o=>o.length())),I:new C((a.y*a.y+a.z*a.z)/12,(a.x*a.x+a.z*a.z)/12,(a.x*a.x+a.y*a.y)/12),still:0,rest:!1}}function Hg(i=8){ka([70,50,140,40,60]);let e=Math.max(0,Math.min(1,(i-3.5)/8));re.on=!0,re.t=0,re.fade=0,Fe.visible=!1,re.id=(re.id||0)+1,re.pieces.forEach(d=>It.remove(d.m)),re.extra.forEach(d=>It.remove(d)),re.pieces=[],re.joints=[],re.extra=[],re.brace=[],sr.forEach(d=>{d.opacity=1,d.transparent=!1,d.needsUpdate=!0}),Fe.updateMatrixWorld(!0);let t=d=>{let f=new Dt;return f.userData.part=!0,d.parts.forEach(({geo:m,mat:b})=>{let g=new ot(m,b);g.castShadow=!0,f.add(g)}),f},n=Math.random,s={};Bg.forEach(d=>{s[d.key]=d});let r=(d,f,m,b,g)=>{let p=f.clone().applyMatrix4(Fe.matrixWorld).sub(N.p),_=N.v.clone().add(N.w.clone().cross(p));_.addScaledVector(p.clone().setY(0).normalize(),m*(.5+n())).add(new C(0,m*(.3+n()*.7),0)),d.position.copy(f).applyMatrix4(Fe.matrixWorld),d.quaternion.copy(N.q),It.add(d),re.pieces.push(Object.assign({m:d,v:_,w:N.w.clone().add(new C(n()-.5,n()-.5,n()-.5).multiplyScalar(4*m))},tg(d,g,b)))},a=s.c1.c,o=new Dt;o.add(t(s.c1));let l=e>.85&&n()<(e-.85)*3?n()<.5?"c0":"c2":null,c={};for(let d of["c0","c2"]){let f=s[d];if(!f)continue;if(d===l){r(t(f),f.c,1.2*e,!1);continue}let m=d==="c0"?Ye.HA:Ye.HF,b=new Dt;b.position.set(m-a.x,Ye.HY-a.y,-a.z);let g=t(f);g.position.set(f.c.x-m,f.c.y-Ye.HY,f.c.z),b.add(g),o.add(b),b.rotation.z=(n()<.5?-1:1)*(.08+.4*e)*(.6+.4*n()),b.rotation.x=(n()-.5)*.25*e,c[d]=b}for(let d of["w0","w1","w2","w3","k00","k01","k10","k11"]){let f=s[d];if(!f)continue;let m=d[0]==="w";if(n()<(m?.1+.45*e:.45+.4*e)){r(t(f),f.c,(m?1:.6)*(.3+e),m,f.sz);continue}let g=m?c[f.c.x>0?"c2":"c0"]:null,p=t(f);g?p.position.copy(f.c).sub(a).sub(g.position):p.position.copy(f.c).sub(a),p.rotation.set((n()-.5)*(m?.7:1.1)*(.3+e),(n()-.5)*.3*(.3+e),(n()-.5)*(m?.3:1)*(.3+e)),m||p.scale.set(1,.5+.25*n(),1),(g||o).add(p)}o.position.copy(a).applyMatrix4(Fe.matrixWorld),o.quaternion.copy(N.q),It.add(o);let h=[];for(let d of kt){if(!d.visible||d===kt[1]&&ae.on)continue;d.updateMatrixWorld(!0);let f=d.userData.bones,m=n()<.5,b=new ft,g=new C,p=new C,_=new C((n()-.5)*1.2,.8+1.2*e+n()*.6,(n()-.5)*1.2).multiplyScalar(.15+.85*e),M=new C(n()-.5,n()-.5,n()-.5).multiplyScalar(1.5+2*e),x=[],v=[];for(let y=0;y<10;y++){if(y===7&&!m){x.push(x[0]),v.push(null);continue}let E=$i[y],R=new ls;f[y].matrixWorld.decompose(g,b,p),R.position.copy(E.c).sub($i[y===7?0:y].c).applyQuaternion(b).add(g),R.quaternion.copy(b),It.add(R),x.push(R);let P=E.size.clone().multiplyScalar(.5).max(new C(.05,.05,.05)),F=[];for(let B=0;B<8;B++)F.push(new C(B&1?P.x:-P.x,B&2?P.y:-P.y,B&4?P.z:-P.z));let D=P.clone().multiplyScalar(2),I=R.position.clone().sub(N.p),O={m:R,v:N.v.clone().add(N.w.clone().cross(I)).add(_),w:N.w.clone().add(M),inv:y?1:.3,airDamp:.9,pts:F,R:P.length(),I:new C((D.y*D.y+D.z*D.z)/12,(D.x*D.x+D.z*D.z)/12,(D.x*D.x+D.y*D.y)/12),still:0,rest:!1};y===7&&(O.v.add(new C(n()-.5,n(),n()-.5)),O.w.multiplyScalar(1.5)),re.pieces.push(O),v.push(O)}let S=0;for(let y of v)if(y)for(let E of y.pts){let R=E.clone().applyQuaternion(y.m.quaternion).add(y.m.position);S=Math.max(S,ht(R.x,R.z)-R.y)}v.forEach(y=>{y&&(y.m.position.y+=S,y.m.updateMatrixWorld(!0))});let T=new Vs(x,r0(m));for(let[y,E,R]of d.userData.parts){let P=sr.get(E)||(sr.set(E,Object.assign(E.clone(),{onBeforeCompile:E.onBeforeCompile,customProgramCacheKey:E.customProgramCacheKey})),sr.get(E)),F=y;if(m){F=new At;for(let I in y.attributes)F.setAttribute(I,y.attributes[I]);F.setIndex(R)}let D=new Bs(F,P);D.castShadow=!0,D.frustumCulled=!1,D.bind(T,new Ve),It.add(D),re.extra.push(D)}for(let[y,E,R]of qa)re.joints.push({A:v[y],B:v[E],la:R.clone().sub($i[y].c),lb:R.clone().sub($i[E].c),lim:CS(y,E)});h.push([v[0],d.getWorldPosition(new C)]),re.brace.push({T:v[0],arms:[-1,1].map(y=>{let[E,R]=vf(y);return[v[E],v[R],Vg(y),y]})})}let u=o.position.clone().sub(N.p);if(re.pieces.push(Object.assign({m:o,main:!0,v:N.v.clone().add(N.w.clone().cross(u)),w:N.w.clone(),deck:[new C(-1.5-a.x,-.35-a.y,-1-a.z),new C(1.5-a.x,.1-a.y,1-a.z)]},tg(o))),e<.55){let d=re.pieces[re.pieces.length-1];d.inv=.03;let f=d.m.quaternion.clone().invert();for(let[m,b]of h)re.joints.push({A:d,B:m,la:b.clone().sub(d.m.position).applyQuaternion(f),lb:$i[0].c.clone().negate(),belt:!0})}for(let d=0,f=Math.round(30+70*e);d<f;d++){let m=Ya;Ya=(Ya+1)%Qa,Jn[m*3]=N.p.x+(n()-.5)*2,Jn[m*3+1]=N.p.y,Jn[m*3+2]=N.p.z+(n()-.5)*2,Yi[m*3]=N.v.x*.5+(n()-.5)*3*(.3+e),Yi[m*3+1]=n()*2.5*(.3+e),Yi[m*3+2]=N.v.z*.5+(n()-.5)*3*(.3+e),_h[m]=1}N.v.set(0,0,0),N.w.set(0,0,0),$e.t=0,$e.grounded=!0,dn(e<.4?"Rollover \xB7 the rover is wrecked":"Crash \xB7 the rover breaks apart")}var ES=new C,TS=new C,AS=new C,RS=new C,Yd=new C,Vg=i=>new C(i*(vt.H.x-vt.S.x),vt.H.y-vt.S.y,vt.H.z-vt.S.z).normalize();function CS(i,e){return e===3||e===4?{k:new C(1,0,0),lo:-1.5,hi:.85,tol:.15}:e===1||e===2?{k:new C(1,0,0),lo:-.5,hi:1.92,tol:.6}:e===8||e===9?{k:Vg(e===8?-1:1).clone().cross(new C(0,0,1)).normalize(),lo:-.05,hi:2.5,tol:.35}:null}var Sn=new ft,As=new C,Za=new C,nr=new C,Gg=new C,sc=new C,Ph=new C,ng=new C,rf=new C;function Wg(i,e){let t=i.lim,n=i.A,s=i.B;Sn.copy(n.m.quaternion).invert().multiply(s.m.quaternion),Sn.w<0&&(Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,Sn.w*=-1);let r=2*Math.acos(Math.min(1,Sn.w)),a=Math.sqrt(Math.max(1e-12,1-Sn.w*Sn.w));As.set(Sn.x,Sn.y,Sn.z).multiplyScalar(r/a);let o=As.dot(t.k);Za.copy(As).addScaledVector(t.k,-o);let l=Za.length();nr.copy(t.k).multiplyScalar(o-Math.max(t.lo,Math.min(t.hi,o))),l>t.tol&&nr.addScaledVector(Za,1-t.tol/l);let c=nr.length();if(c<1e-4)return;nr.applyQuaternion(n.m.quaternion);let h=sc.copy(nr).divideScalar(c),u=n.inv*3/(n.I.x+n.I.y+n.I.z),d=s.inv*3/(s.I.x+s.I.y+s.I.z),f=u/(u+d),m=d/(u+d);s.m.quaternion.premultiply(Sn.setFromAxisAngle(h,-c*m)).normalize(),n.m.quaternion.premultiply(Sn.setFromAxisAngle(h,c*f)).normalize();let b=Gg.copy(s.w).sub(n.w).dot(h);b>0&&(s.w.addScaledVector(h,-b*m),n.w.addScaledVector(h,b*f)),n.rest=s.rest=!1}function PS(i){if(!(re.t>3))for(let e of re.brace){let t=e.T;if(t.rest||re.t>.6&&t.v.lengthSq()<.3&&t.w.lengthSq()<2)continue;let n=t.m.quaternion;ng.set(0,0,1).applyQuaternion(n),rf.set(1,0,0).applyQuaternion(n);for(let[s,r,a,o]of e.arms){sc.set(0,-1,0).addScaledVector(ng,.35).addScaledVector(rf,.45*o).normalize();for(let l of[s,r])Ph.copy(a).applyQuaternion(l.m.quaternion).cross(sc),l.w.addScaledVector(Ph,260*i).addScaledVector(Gg.copy(l.w).sub(t.w),-9*i),l.rest=!1}}}var Jo=new C,Yn=new C,Zo=new C,IS=new C,ig=new ft;function LS(){let i=re.pieces.find(n=>n.main);if(!i||!i.deck)return;let[e,t]=i.deck;ig.copy(i.m.quaternion).invert();for(let n of re.pieces)if(!(n===i||n.rest))for(let s of n.pts){if(Jo.copy(s).applyQuaternion(n.m.quaternion).add(n.m.position),Yn.copy(Jo).sub(i.m.position).applyQuaternion(ig),Yn.x<=e.x||Yn.x>=t.x||Yn.y<=e.y||Yn.y>=t.y||Yn.z<=e.z||Yn.z>=t.z)continue;let r=[Yn.x-e.x,t.x-Yn.x,Yn.y-e.y,t.y-Yn.y,Yn.z-e.z,t.z-Yn.z],a=0;for(let d=1;d<6;d++)r[d]<r[a]&&(a=d);Zo.set(a===0?-1:a===1?1:0,a===2?-1:a===3?1:0,a===4?-1:a===5?1:0).applyQuaternion(i.m.quaternion),n.m.position.addScaledVector(Zo,Math.min(r[a],.05));let o=Yn.copy(Jo).sub(n.m.position),l=IS.copy(n.w).cross(o).add(n.v),c=Jo.sub(i.m.position),h=l.sub(Jo.copy(i.w).cross(c).add(i.v)),u=h.dot(Zo);u<0&&(n.v.addScaledVector(Zo,-u*1.05),n.v.addScaledVector(h.addScaledVector(Zo,-u),-.3))}}function DS(i){PS(i);for(let e of re.joints){e.lim&&Wg(e,i);let t=e.A,n=e.B,s=ES.copy(e.la).applyQuaternion(t.m.quaternion),r=TS.copy(e.lb).applyQuaternion(n.m.quaternion),a=AS.copy(n.m.position).add(r).sub(t.m.position).sub(s),o=RS.copy(n.w).cross(r).add(n.v).sub(Yd.copy(t.w).cross(s)).sub(t.v),l=a.multiplyScalar(-1600).addScaledVector(o,-32).multiplyScalar(i);l.lengthSq()>1e-7&&(t.rest=n.rest=!1),n.v.addScaledVector(l,n.inv),t.v.addScaledVector(l,-t.inv);let c=3/(n.I.x+n.I.y+n.I.z),h=3/(t.I.x+t.I.y+t.I.z);n.w.addScaledVector(Yd.copy(r).cross(l),n.inv*c*.5),t.w.addScaledVector(Yd.copy(s).cross(l),-t.inv*h*.5)}}var fh=new ft,FS=new C,NS=new C,sg=new C,US=new C,rg=new C;function qg(i,e){if(i.rest)return;let t=i.m.quaternion,n=i.m.position,s=NS.set(0,-Vr,0),r=US.set(0,0,0),a=Math.max(4,i.pts.length),o=9600/a,l=240/a,c=120/a,h=0;if(n.y-i.R<ht(n.x,n.z)+.5)for(let m of i.pts){let b=rg.copy(m).applyQuaternion(t),g=b.x+n.x,p=b.y+n.y,_=b.z+n.z,M=ht(g,_)-p;if(M<=0)continue;h++;let x=Qd(g,_),v=sg.copy(i.w).cross(b).add(i.v),S=v.dot(x),T=Math.max(0,o*Math.min(M,.08)-l*S),y=v.addScaledVector(x,-S),E=y.length(),R=E>1e-5?Math.min(.8*T,E*c)/E:0,P=FS.copy(x).multiplyScalar(T).addScaledVector(y,-R);s.add(P),r.add(b.cross(P))}i.v.addScaledVector(s,e),fh.copy(t).invert();let u=r.applyQuaternion(fh),d=rg.copy(i.w).applyQuaternion(fh);d.x+=u.x/i.I.x*e,d.y+=u.y/i.I.y*e,d.z+=u.z/i.I.z*e,i.w.copy(d.applyQuaternion(t)),h?(i.w.multiplyScalar(Math.exp(-e*1.2)),i.v.multiplyScalar(Math.exp(-e*.4))):i.airDamp&&i.w.multiplyScalar(Math.exp(-e*i.airDamp)),n.addScaledVector(i.v,e);let f=i.w.length();f>1e-6&&t.premultiply(fh.setFromAxisAngle(sg.copy(i.w).divideScalar(f),f*e)).normalize(),i.still=h&&i.v.length()<.06&&f<.08?i.still+e:0,i.still>.6&&(i.rest=!0)}function OS(i){if(re.on?(re.t+=i)>4.5&&(re.on=!1,Fe.visible=!0,ts(re.safe.x,re.safe.z,re.safe.yaw),or=!1,dn("A new rover \xB7 back where you last drove safely"),ae.ph==="film"&&ae.crash&&c0(ae.crash)):((re.safeT+=i)>1&&vn.y>.85&&$e.grounded&&(re.safeT=0,re.safe={x:N.p.x,z:N.p.z,yaw:Math.atan2(-Kt.z,Kt.x)}),(re.roof>3.5||vn.y<-.2&&re.topDown)&&(ae.crash=ae.ph==="film"?di:0,Hg(Math.max(re.roof,N.v.length()))),re.topDown=!1,re.roof=0),re.pieces.length&&(re.fade+=i)>10){let t=Math.max(0,1-(re.fade-10)/1.5);sr.forEach(n=>{n.transparent||(n.transparent=!0,n.needsUpdate=!0),n.opacity=t}),t===0&&(re.pieces.forEach(n=>It.remove(n.m)),re.extra.forEach(n=>It.remove(n)),re.pieces=[],re.joints=[],re.extra=[],re.brace=[])}let e=Math.min(12,Math.ceil(i*200));for(let t=0;t<e;t++){DS(i/e);for(let n of re.pieces)qg(n,i/e);LS();for(let n of re.joints)n.lim&&Wg(n)}}var vh=0;function gf(){let i=Math.atan2(-Kt.z,Kt.x);ts(N.p.x,N.p.z,i),dn("Back on its wheels")}se("btn-recover").addEventListener("click",gf);_s&&(document.querySelectorAll(".spd button").forEach(i=>{i.innerHTML=["Real","Double","Triple"][i.dataset.v-1]+"<small>"+lh(18*i.dataset.v)+"</small>"}),se("spec-rover").textContent="About 1,540 lb loaded with crew; 10 ft long; four wire-mesh wheels, each with its own motor; front and rear steering",se("fine-rec").textContent="11 mph",se("spec-top").textContent="11 mph, the record Gene Cernan set on Apollo 17 (it was built for about 8 mph on the level). Faster downhill, where gravity does the work");var xf=()=>document.querySelectorAll(".spd button").forEach(i=>i.classList.toggle("on",+i.dataset.v===bn));document.querySelectorAll(".spd button").forEach(i=>{i.dataset.v==="3"&&(i.hidden=!df()),i.addEventListener("click",()=>{Ue.on&&+i.dataset.v!==bn&&(Ue.on=!1,Ue.away=!1,se("clock").textContent="",dn("Speed changed \xB7 time trial over")),Fg(+i.dataset.v),oc(),xf()})});xf();se("btn-go").addEventListener("click",()=>{se("brief").classList.remove("on"),Ye.ok&&Qe.on?WS():(nn=Nt.live=!0,kt.forEach(i=>{i.visible=!0}))});se("cine-skip").addEventListener("click",()=>{Ae.on?yf():zt.on&&zt.t<zt.lines[2][0]&&(zt.t=zt.lines[2][0])});var bf=["menu","settings"],Xg={was:!1},_f=()=>bf.some(i=>se(i).classList.contains("on"));function ag(i){_f()||(Xg.was=nn,nn=!1),se(i).classList.add("on")}function cc(i=Xg.was){bf.forEach(e=>se(e).classList.remove("on")),nn=i}function jg(){Ae.on&&yf(),zt.on&&(zt.on=!1,document.body.classList.remove("briefing"),se("cine-cap").classList.remove("on"),zt.cap=""),re.on&&(re.on=!1,Fe.visible=!0),Ft.on&&sf(),tn.on&&(tn.t=99,d0(kt[1],.016)),ae.on&&Mf(),Ue.on=!1,Ue.save=null,Ja.t=0,se("btn-rejoin").classList.remove("on"),se("clock").textContent="",kt.forEach(i=>{i.visible=!0}),Nt.live=!0,or=!1}{let i=(n,s)=>{let r=a=>{a.preventDefault(),a.stopPropagation(),s()};n.addEventListener("pointerup",r),n.addEventListener("click",r)},e=0,t=n=>()=>{let s=performance.now();s-e>400&&(e=s,n())};i(se("back"),t(()=>{se("brief").classList.contains("on")?location.href="../objects":_f()?cc():ag("menu")})),i(se("btn-set"),t(()=>{Kg(),bf.forEach(n=>se(n).classList.remove("on")),ag("settings")}))}se("m-resume").addEventListener("click",()=>cc());se("m-trial").addEventListener("click",()=>{jg(),Ue.away=!1,ts(Nt.x,Nt.z+22,Math.PI/2),cc(!0),se("brief").classList.remove("on"),dn("Drive through the ring to start the clock")});se("m-lander").addEventListener("click",()=>{jg(),ts(0,0,Math.atan2(350,82)),cc(!0),se("brief").classList.remove("on"),dn("Back beside the lander")});se("m-objects").addEventListener("click",()=>{location.href="../objects"});var rc=Wo();function Kg(){xf(),rc=Wo(),document.querySelectorAll(".cam button").forEach(e=>e.classList.toggle("on",+e.dataset.c===si)),document.querySelectorAll(".det button").forEach(e=>e.classList.toggle("on",e.dataset.q===rc)),se("set-apply").hidden=!0;let i=se("set-rec");i.armed=!1,i.textContent="Reset records",se("set-note").textContent=`Now drawing at ${ah[0].toUpperCase()+ah.slice(1)}. Lower detail runs smoother; higher looks sharper.`}document.querySelectorAll(".cam button").forEach(i=>i.addEventListener("click",()=>{zg(+i.dataset.c),Kg()}));document.querySelectorAll(".det button").forEach(i=>i.addEventListener("click",()=>{rc=i.dataset.q,document.querySelectorAll(".det button").forEach(e=>e.classList.toggle("on",e===i)),se("set-apply").hidden=rc===Wo()}));se("set-apply").addEventListener("click",()=>{qm(rc),location.reload()});se("set-done").addEventListener("click",()=>cc());se("set-rec").addEventListener("click",()=>{let i=se("set-rec");if(!i.armed){i.armed=!0,i.textContent="Tap again to erase";return}Object.keys(Xt).forEach(e=>{Xt[e]=0}),$e.best=0;try{localStorage.removeItem("lrv-records")}catch{}oc(),i.armed=!1,i.textContent="Records erased"});var Ts=[],Oe={on:!1,t:0,end:0,cam:new C,jump:null,offerT:0,save:null},di=0;function zS(){for(Ts.push([di,N.p.x,N.p.y,N.p.z,N.q.x,N.q.y,N.q.z,N.q.w,N.steer,...wn.map(i=>i.spin)]);Ts.length&&Ts[0][0]<di-20;)Ts.shift()}function kS(i){if(!(i.t>=1.5||i.d>=12)||!$e.start)return;let e=$e.start,t=N.p,n=t.x-e.x,s=t.z-e.z,r=n*n+s*s||1,a=ii.find(o=>{if(o.R<1.5)return!1;let l=Math.max(0,Math.min(1,((o.x-e.x)*n+(o.z-e.z)*s)/r));return Math.hypot(e.x+n*l-o.x,e.z+s*l-o.z)<o.R*1.15});a&&(Oe.jump={t0:di-i.t,t1:di,S:e.clone(),E:t.clone(),c:a,a:i},Oe.offerT=6,se("btn-replay").classList.add("on"))}function Yg(){let i=Oe.jump;if(!i||Oe.on||re.on)return;se("btn-replay").classList.remove("on"),Oe.offerT=0,Oe.save={run:nn,steer:N.steer,spin:wn.map(d=>d.spin)},Oe.fov=Ke.fov,Oe.on=!0,Oe.t=i.t0-1.2,Oe.end=Math.min(di,i.t1+1.8),nn=!1,document.body.classList.add("replay");let e=(i.S.x+i.E.x)/2,t=(i.S.z+i.E.z)/2,n=Math.max(1,Math.hypot(i.E.x-i.S.x,i.E.z-i.S.z)),s=(i.E.x-i.S.x)/n,r=(i.E.z-i.S.z)/n,a=-r,o=s;(e-i.c.x)*a+(t-i.c.z)*o<0&&(a=-a,o=-o);let l=Math.max(9,Math.min(30,n*.7+6)),c=e+a*l-s*n*.2,h=t+o*l-r*n*.2;Oe.cam.set(c,ht(c,h)+1.3,h);let u=se("cine-cap");u.textContent=`Replay \xB7 ${i.a.t.toFixed(1)} s in the air \xB7 ${Ir(i.a.d,1)} \xB7 ${Ir(i.a.peak,1)} high`,u.offsetWidth,u.classList.add("on")}function Jg(){Oe.on&&(Oe.on=!1,document.body.classList.remove("replay"),Ke.fov=Oe.fov,Ke.updateProjectionMatrix(),se("cine-cap").classList.remove("on"),N.steer=Oe.save.steer,wn.forEach((i,e)=>{i.spin=Oe.save.spin[e]}),nn=Oe.save.run,or=!1,Oe.film&&(Oe.film=!1,kt[1].visible=!0,Fe.position.copy(N.p),Fe.quaternion.copy(N.q),dn("Drive up beside Schmitt and stop to pick him up")))}function BS(i){if(Oe.t+=i*(Oe.film?1:.55),Oe.t>=Oe.end)return Jg(),!1;let e=Ts.findIndex(o=>o[0]>Oe.t);e<1&&(e=e<0?Ts.length-1:1);let t=Ts[e-1],n=Ts[e],s=Math.max(0,Math.min(1,(Oe.t-t[0])/Math.max(1e-6,n[0]-t[0])));Fe.position.set(t[1]+(n[1]-t[1])*s,t[2]+(n[2]-t[2])*s,t[3]+(n[3]-t[3])*s),Fe.quaternion.set(t[4],t[5],t[6],t[7]).slerp(Va.set(n[4],n[5],n[6],n[7]),s),N.steer=t[8]+(n[8]-t[8])*s,wn.forEach((o,l)=>{o.spin=t[9+l]+(n[9+l]-t[9+l])*s}),i0(),Ke.position.copy(Oe.cam);let r=Oe.film?.25:0,a=Oe.t;return Ke.lookAt(bt.copy(Fe.position).add(Br.set(r*Math.sin(a*2.3),.3+r*.6*Math.sin(a*3.1+1),r*Math.sin(a*1.7+2)))),Ke.fov=Math.max(14,Math.min(Oe.fov,2*Math.atan((Oe.film?11:7)/Ke.position.distanceTo(Fe.position))*180/Math.PI)),Ke.updateProjectionMatrix(),ri.position.copy(Fe.position).addScaledVector(hf,120),ri.target.position.copy(Fe.position),!0}se("btn-replay").addEventListener("click",Yg);se("btn-rejoin").addEventListener("click",bS);se("cine-skip").addEventListener("click",()=>{Oe.on&&Jg()});var nn=!1,af=performance.now(),Ga=new C,Wa=new C,or=!1;function Mh(i){let e=Math.min(.05,(i-af)/1e3);if(af=i,zt.on&&yS(e),nn){let s=(Ki.w||Ki.arrowup?1:0)-(Ki.s||Ki.arrowdown?1:0),r=(Ki.a||Ki.arrowleft?1:0)-(Ki.d||Ki.arrowright?1:0);Zi=s||Qm.y,ja=-(r||-Qm.x),gS(e)&&(Zi=Ft.th,ja=Ft.st),(tn.on||ae.ph==="out"||ae.ph==="in")&&(Zi=0,ja=0,N.v.multiplyScalar(Math.exp(-e*3))),(Math.abs(Zi)>.02||Math.abs(ja)>.02)&&(nc=!1);let a=Math.min(12,Math.ceil(e/(1/240))),o=e/a;if(!re.on)for(let l=0;l<a;l++)nf(o);vn.set(0,1,0).applyQuaternion(N.q),Kt.set(1,0,0).applyQuaternion(N.q),OS(e),aS(e),hS(),Math.max(Math.abs(N.p.x-en.cx),Math.abs(N.p.z-en.cz))>14&&Ag(N.p.x,N.p.z),vh=vn.y<.35?vh+e:0,se("btn-recover").classList.toggle("on",vh>1.2),di+=e,re.on||zS(),(Oe.offerT>0&&(Oe.offerT-=e)<=0||re.on)&&(Oe.offerT=0,se("btn-replay").classList.remove("on")),Ja.t>0&&((Ja.t-=e)<=0||Ue.on)&&(Ja.t=0,se("btn-rejoin").classList.remove("on"))}if(Oe.on&&BS(e)){In.render(It,Ke),requestAnimationFrame(Mh);return}if(Fe.position.copy(N.p),Fe.quaternion.copy(N.q),i0(),_1(e),Ae.on){XS(e),In.render(It,Ke),requestAnimationFrame(Mh);return}Rt.idle+=e,Rt.idle>(si===2?4:2.5)&&(Rt.yaw*=Math.exp(-e*1.5),Rt.pitch+=(.18-Rt.pitch)*Math.min(1,e*1.5)),vn.set(0,1,0).applyQuaternion(N.q),Kt.set(1,0,0).applyQuaternion(N.q);let t=re.on&&re.pieces.find(s=>s.main);if(kt[0]&&!Ae.on&&Nt.live&&(kt[0].visible=si!==2),t){if(re.camFor!==re.id){re.camFor=re.id;let c;do c=Math.floor(Math.random()*3);while(c===re.cam);re.cam=c,re.side=Math.random()<.5?1:-1}let s=Xe(0,2.2,re.t),r=Math.atan2(-Kt.z,Kt.x)+Math.PI,a=t.m.position,o=r+re.side*Math.PI/2,l=re.cam===0?bt.set(a.x+Math.cos(o)*(9+3*s),a.y+.45,a.z-Math.sin(o)*(9+3*s)):re.cam===1?bt.set(a.x+Math.cos(r+.5*re.side)*(14+4*s),a.y+.9+.6*s,a.z-Math.sin(r+.5*re.side)*(14+4*s)):bt.set(a.x+Math.cos(r)*(8-s),a.y+2.5+18*s,a.z-Math.sin(r)*(8-s));l.y=Math.max(l.y,ht(l.x,l.z)+(re.cam===2?1.5:.35)),Ga.lerp(l,1-Math.exp(-e*3)),Wa.lerp(a,1-Math.exp(-e*6)),Ke.position.copy(Ga),Ke.lookAt(Wa)}else if(si===2){Ke.position.copy(tr.set(-.62,.95,-.32).applyQuaternion(N.q).add(N.p));let s=Math.max(-2.3,Math.min(2.3,Rt.yaw)),r=Rt.pitch-.18-.14;Br.set(Math.cos(s)*Math.cos(r),Math.sin(r),-Math.sin(s)*Math.cos(r)).applyQuaternion(N.q),Ke.up.copy(vn),Ke.lookAt(bt.copy(Ke.position).add(Br)),Ke.up.set(0,1,0)}else{let s=si===3,r=Math.atan2(-Kt.z,Kt.x),a=r+Math.PI+Rt.yaw,o=si===1?16:s?12:7.5,l=si===1?.35:s?-.2:0,c=bt.set(N.p.x+Math.cos(a)*Math.cos(Rt.pitch+l)*o,N.p.y+(s?.2:1.6)+Math.sin(Rt.pitch+l)*o,N.p.z-Math.sin(a)*Math.cos(Rt.pitch+l)*o);c.y=Math.max(c.y,ht(c.x,c.z)+(s?.45:1.2)),or||(Ga.copy(c),Wa.copy(N.p),or=!0),Ga.lerp(c,1-Math.exp(-e*4)),Wa.lerp(tr.copy(N.p).add(Br.set(0,.6,0)),1-Math.exp(-e*8)),Ke.position.copy(Ga),Ke.lookAt(Wa)}window.__lrv&&window.__lrv.cam&&Ke.position.copy(window.__lrv.cam),window.__lrv&&window.__lrv.look&&Ke.lookAt(window.__lrv.look),ri.position.copy(N.p).addScaledVector(hf,120),ri.target.position.copy(N.p);let n=Math.abs(N.v.dot(Kt))*3.6;se("speed").textContent=ch(n).toFixed(1),nn&&SS(n,$e.grounded&&$e.t===0,e),MS(e),se("air").textContent=$e.t>.15?`Airborne ${$e.t.toFixed(1)} s`:"",yh>0&&(yh-=e,yh<=0&&se("toast").classList.remove("on")),QS(),nn&&(ZS(e),v1(e)),In.render(It,Ke),requestAnimationFrame(Mh)}var Di=[];function HS(){Fe.updateMatrixWorld(!0);let i=Fe.matrixWorld.clone().invert(),e=[],t=new C;Fe.traverse(l=>{l.isMesh&&e.push(l)});let n=e.map(l=>{let c=i.clone().multiply(l.matrixWorld),h=l.geometry.attributes.position,u=new Float32Array(h.count*3);for(let d=0;d<h.count;d++)t.fromBufferAttribute(h,d).applyMatrix4(c),u[d*3]=t.x,u[d*3+1]=t.y,u[d*3+2]=t.z;return{m:l,M:c,f:u}}),s=[0,1,2,3].map(()=>({x0:1e9,x1:-1e9,z0:1e9,z1:-1e9,y0:1e9,n:0}));for(let{f:l}of n)for(let c=0;c<l.length;c+=3){let h=l[c],u=l[c+1],d=l[c+2];if(u>-.45||Math.abs(h)<.6||Math.abs(d)<.45)continue;let f=s[(h>0?0:2)+(d>0?0:1)];f.x0=Math.min(f.x0,h),f.x1=Math.max(f.x1,h),f.z0=Math.min(f.z0,d),f.z1=Math.max(f.z1,d),f.y0=Math.min(f.y0,u),f.n++}if(s.some(l=>l.n<100))return;let r=s.map(l=>{let c=(l.x0+l.x1)/2,h=(l.z0+l.z1)/2,u=new Float32Array(21).fill(1e9),d=new Float32Array(21).fill(-1e9),f=[];for(let{f:P}of n)for(let F=0;F<P.length;F+=3){let D=P[F],I=P[F+1],O=P[F+2],B=Math.floor((I-l.y0)*100)-4;Math.abs(O-h)>(l.z1-l.z0)/2+.05||Math.abs(D-c)>.5||(B>=0&&B<21&&(u[B]=Math.min(u[B],D),d[B]=Math.max(d[B],D)),I<l.y0+.12&&f.push(O))}let m=0,b=0,g=0,p=0,_=0,M=0;u.forEach((P,F)=>{if(d[F]<P)return;let D=l.y0+(F+4.5)/100,I=(d[F]-P)/2,O=I*I+D*D;m++,b+=(d[F]+P)/2,g+=D,p+=O,_+=D*D,M+=D*O});let x=(m*M-g*p)/(m*_-g*g),v=b/m,S=x/2,T=Math.sqrt((p-x*g)/m+S*S);f.sort((P,F)=>P-F);let y=f[Math.floor(f.length*.01)]-.015,E=f[Math.floor(f.length*.99)]+.015,R=h>0?.04:-.04;return{c:new C(v,S,(y+E)/2),r:T*1.015,hw:(E-y)/2,z0:y-(y+E)/2+Math.min(0,R),z1:E-(y+E)/2+Math.max(0,R)}});if(r.some(l=>!(l.r>.25&&l.r<.5&&l.hw>.05&&l.hw<.25)))return;let a=(l,c)=>{for(let h=0;h<4;h++){let u=r[h],d=l[c*3]-u.c.x,f=l[c*3+1]-u.c.y,m=l[c*3+2]-u.c.z;if(d*d+f*f<u.r*u.r&&m>u.z0&&m<u.z1)return h}return-1};r.forEach(l=>{let c=new Dt,h=new Dt;c.position.copy(l.c),c.add(h),Fe.add(c),l.steer=c,l.spin=h});let o=new ke;for(let{m:l,M:c,f:h}of n){let u=l.geometry,d=u.index?u.index.array:null,f=(d?d.length:u.attributes.position.count)/3,m=(T,y)=>d?d[T*3+y]:T*3+y,b=[[],[],[],[],[]],g=l.material.map,p=g&&g.image,_=u.attributes.uv,M=null;if(p&&p.width&&_)try{let T=document.createElement("canvas");T.width=p.width,T.height=p.height;let y=T.getContext("2d");y.drawImage(p,0,0),M=y.getImageData(0,0,p.width,p.height).data}catch{M=null}let x=(T,y,E)=>{if(!M)return!1;let R=(_.getX(T)+_.getX(y)+_.getX(E))/3,P=(_.getY(T)+_.getY(y)+_.getY(E))/3;g.flipY&&(P=1-P);let F=Math.min(p.width-1,Math.max(0,Math.floor((R-Math.floor(R))*p.width))),D=Math.min(p.height-1,Math.max(0,Math.floor((P-Math.floor(P))*p.height))),I=(D*p.width+F)*4;return M[I]-M[I+2]>60&&M[I]>90};for(let T=0;T<f;T++){let y=m(T,0),E=m(T,1),R=m(T,2),P=a(h,y);b[P>=0&&a(h,E)===P&&a(h,R)===P&&!x(y,E,R)?P:4].push(y,E,R)}if(b[4].length===f*3)continue;o.getNormalMatrix(c);let v=(T,y)=>{let E=new At,R=u.attributes.normal,P=new Float32Array(T.length*3);if(T.forEach((F,D)=>{P[D*3]=h[F*3]-y.x,P[D*3+1]=h[F*3+1]-y.y,P[D*3+2]=h[F*3+2]-y.z}),E.setAttribute("position",new Ze(P,3)),R){let F=new Float32Array(T.length*3);T.forEach((D,I)=>{t.fromBufferAttribute(R,D).applyMatrix3(o).normalize(),F[I*3]=t.x,F[I*3+1]=t.y,F[I*3+2]=t.z}),E.setAttribute("normal",new Ze(F,3))}for(let F of Object.keys(u.attributes)){if(F==="position"||F==="normal")continue;let D=u.attributes[F],I=D.itemSize,O=new Float32Array(T.length*I);T.forEach((B,X)=>{O[X*I]=D.getX(B),I>1&&(O[X*I+1]=D.getY(B)),I>2&&(O[X*I+2]=D.getZ(B)),I>3&&(O[X*I+3]=D.getW(B))}),E.setAttribute(F,new Ze(O,I))}return E},S=(T,y)=>{let E=new ot(T,l.material);E.castShadow=E.receiveShadow=!0,y.add(E)};S(v(b[4],new C),Fe);for(let T=0;T<4;T++)b[T].length&&S(v(b[T],r[T].c),r[T].spin);l.parent.remove(l)}Di.push(...r)}var Ye={ok:!1,aft:new Dt,fwd:new Dt,HA:-.8,HF:.7,HY:.05,HB:-.4,KIT:.05,kit:[]};function og(i,e,t,n,s){let r=new C,a=new At,o=new Float32Array(n.length*3);n.forEach((l,c)=>{o[c*3]=e[l*3]-s.x,o[c*3+1]=e[l*3+1]-s.y,o[c*3+2]=e[l*3+2]-s.z}),a.setAttribute("position",new Ze(o,3));for(let l of Object.keys(i.attributes)){if(l==="position")continue;let c=i.attributes[l],h=c.itemSize,u=new Float32Array(n.length*h);n.forEach((d,f)=>{if(l==="normal"){r.fromBufferAttribute(c,d).applyMatrix3(t).normalize(),u[f*3]=r.x,u[f*3+1]=r.y,u[f*3+2]=r.z;return}u[f*h]=c.getX(d),h>1&&(u[f*h+1]=c.getY(d)),h>2&&(u[f*h+2]=c.getZ(d)),h>3&&(u[f*h+3]=c.getW(d))}),a.setAttribute(l,new Ze(u,h))}return a}function VS(){if(Di.length!==4)return;Fe.updateMatrixWorld(!0);let i=Fe.matrixWorld.clone().invert(),e=new C,t=new ke,n=[],s=new C;Fe.traverse(o=>{o.isMesh&&!Di.some(l=>{for(let c=o;c;c=c.parent)if(c===l.spin)return!0;return!1})&&n.push(o)}),Ye.aft.position.set(Ye.HA,Ye.HY,0),Ye.fwd.position.set(Ye.HF,Ye.HY,0);let r=new Dt;Fe.add(r,Ye.aft,Ye.fwd);let a=new Map;for(let o of n){let l=i.clone().multiply(o.matrixWorld),c=o.geometry,h=c.attributes.position,u=c.index?c.index.array:null,d=(u?u.length:h.count)/3;t.getNormalMatrix(l);let f=new Float32Array(h.count*3);for(let b=0;b<h.count;b++)e.fromBufferAttribute(h,b).applyMatrix4(l),f[b*3]=e.x,f[b*3+1]=e.y,f[b*3+2]=e.z;let m=[[],[],[]];for(let b=0;b<d;b++){let g=[0,1,2].map(v=>u?u[b*3+v]:b*3+v),p=(f[g[0]*3]+f[g[1]*3]+f[g[2]*3])/3,_=(f[g[0]*3+1]+f[g[1]*3+1]+f[g[2]*3+1])/3,M=p<Ye.HA?0:p>Ye.HF?2:1,x=(f[g[0]*3+2]+f[g[1]*3+2]+f[g[2]*3+2])/3;for(let v of Di)Math.abs(x)>.42&&_>-.9&&_<=Ye.KIT&&Math.abs(p-v.c.x)<.56&&(M=v.c.x>0?2:0);if(_>Ye.KIT){let v=M+"|"+Math.floor(p/.45)+"|"+Math.floor(_/.45)+"|"+Math.floor(x/.45);a.has(v)||a.set(v,{sec:M,parts:new Map,n:0,x:0,y:0,z:0});let S=a.get(v);S.parts.has(o)||S.parts.set(o,{f,nm:t.clone(),l:[]}),S.parts.get(o).l.push(...g),S.n++,S.x+=p,S.y+=_,S.z+=x}else m[M].push(...g)}m.forEach((b,g)=>{if(!b.length)return;let p=[Ye.aft,r,Ye.fwd][g],_=new ot(og(c,f,t,b,g===1?s:p.position),o.material);_.castShadow=_.receiveShadow=!0,p.add(_)}),o.parent.remove(o)}for(let o of a.values()){let l=new C(o.x/o.n,o.y/o.n,o.z/o.n),c=[Ye.aft,r,Ye.fwd][o.sec],h=new Dt;h.position.copy(l).sub(o.sec===1?s:c.position),c.add(h);for(let[u,{f:d,nm:f,l:m}]of o.parts){let b=new ot(og(u.geometry,d,f,m,l),u.material);b.castShadow=b.receiveShadow=!0,h.add(b)}Ye.kit.push({m:h,y:l.y,x:l.x})}Ye.kit.sort((o,l)=>Math.floor(o.y/.45)-Math.floor(l.y/.45)||o.x-l.x),Ye.kit.forEach((o,l)=>{o.t=22.6+l*Math.min(.08,4.2/Ye.kit.length)}),Di.forEach((o,l)=>{(wn[l].at.x>0?Ye.fwd:Ye.aft).attach(o.steer),o.home=o.steer.position.clone()}),Ye.ok=!0}function Zg(i,e,t,n){Ye.aft.rotation.z=-Math.PI*i,Ye.fwd.rotation.z=Math.PI*e,Di.forEach((s,r)=>{let a=wn[r].at.x>0,o=a?n:t,l=Math.sign(s.home.z);s.steer.rotation.x=l*Math.PI/2*o,s.steer.position.set(s.home.x+((a?.4:-.35)-s.home.x)*o,s.home.y+(-.5-s.home.y)*o,s.home.z+(l*.37-s.home.z)*o)})}var Ae={on:!1,t:0,R0:3.42,P:new C,d:new C,q:new ft,end:null,capT:"",pts:null},GS=[[.6,5.2,"11 December 1972, Taurus\u2013Littrow. The rover rode to the Moon folded into a package on the side of the lunar module."],[5.4,8.8,"From the ladder, a D-handle releases the package. A tape pulled from the ground tilts it out, hinged at the bottom of its bay."],[9,12.4,"Partway over, the aft chassis swings open on its springs and locks, and the rear wheels spring into place."],[12.6,16.4,"With the rear wheels on the ground, a second tape lets the front down. The rover moves out from the lander as the forward chassis and its wheels unfold."],[16.6,19.8,"On all four wheels at last, it is disconnected from the lander and pulled clear."],[20,22.4,"Its 210 kg weigh no more here than 35 kg on Earth."],[22.4,27.4,"The crew unfolds the seats and console, and fits the antennas, TV camera and radio relay unit."],[27.6,32.6,"With front and rear wheels both steering, it could turn in a circle about 3 m in radius."]],cg=32.8,vs=[27.4,32.4];function WS(){Ae.on=!0,Ae.t=0,document.body.classList.add("intro"),Nt.ring.visible=Nt.line.visible=!1,Nt.line.material.uniforms.op.value=0,Ae.pts||(Ae.pts=[],Fe.traverse(u=>{if(!u.isMesh)return;let d=u.geometry.attributes.position,f=Math.min(60,d.count);for(let m=0;m<f;m++)Ae.pts.push([u,new C().fromBufferAttribute(d,Math.floor(m*d.count/f))])})),Ae.d.set(1,0,1).normalize(),Ae.P.set(Qe.x+Ae.d.x*Ae.R0,Qe.y+1.35,Qe.z+Ae.d.z*Ae.R0);let i=Math.atan2(Ae.d.z,-Ae.d.x);Ae.q.setFromAxisAngle(new C(0,1,0),i);let e=Qe.x+Ae.d.x*(Ae.R0+Ye.HF+.9),t=Qe.z+Ae.d.z*(Ae.R0+Ye.HF+.9),n=1,s=.6,r=160,a=(u,d,f)=>u<n||u>f-s?0:d*Math.sin(Math.PI*(u-n)/(f-n-s))**2,o=0,l=null,c=9;for(let u=0;u<8;u++){c=n+s+Math.max(2,2*Math.abs(o)/.36);let d=2*o/(c-n-s),f=c/r,m=e,b=t,g=i;l=[[m,b,g,0]];for(let M=1;M<=r;M++){let x=a((M-.5)*f,d,c);g+=x*f/2,m-=Math.cos(g)*f,b+=Math.sin(g)*f,g+=x*f/2,l.push([m,b,g,a(M*f,d,c)])}let _=Math.atan2(-(Nt.z-b),Nt.x-m)-g;_=Math.atan2(Math.sin(_),Math.cos(_)),o+=_}Ae.path=l,Ae.L=c;let h=l[r];Ae.end={x:h[0],z:h[1],yaw:h[2]},ts(e,t,i)}function yf(){Ae.on=!1,document.body.classList.remove("intro"),se("cine-cap").classList.remove("on"),Nt.ring.visible=Nt.live=!0,kt.forEach(i=>{i.visible=!0}),Zg(0,0,0,0),Ye.kit.forEach(i=>{i.m.visible=!0,i.m.scale.setScalar(1)}),ts(Ae.end.x,Ae.end.z,Ae.end.yaw),Ga.copy(Ke.position),Wa.copy(N.p),or=!0,nn=!0}var Jd=new ft,qS=new C(0,0,1),$s=new C,lg=new C,ph=new C;function XS(i){let e=Ae.t+=i,t=(x,v)=>Xe(x,v,e);if(e>=cg)return yf();let n=(x,v)=>{let S=Math.max(0,Math.min(1,(e-x)/(v-x)));return S<=0?0:1+2.2*Math.pow(S-1,3)+1.2*Math.pow(S-1,2)};Zg(1-n(9,10.4),1-n(13.6,15.2),1-n(10,11),1-n(14.8,15.8)),Ye.kit.forEach(x=>{let v=Math.min(1,(e-x.t)/.22);x.m.visible=v>0,v>0&&x.m.scale.setScalar(1+2.7*Math.pow(v-1,3)+1.7*Math.pow(v-1,2))});let s=90-4*t(4.6,5.3);for(let[x,v,S]of[[6,7.4,18],[8,9.4,20],[10.4,11.8,16],[12.6,16.6,40]])s-=S*t(x,v);let r=t(12.6,16.6);$s.copy(Ae.P).addScaledVector(Ae.d,.6*t(12.8,16.6)+.3*t(17,19)),$s.y+=(N.p.y+Ye.HB-Ae.P.y)*r;let a=$s.x+Ae.d.x*1.75,o=$s.z+Ae.d.z*1.75,l=$s.y-ht(a,o),c=(Math.asin(Math.max(-1,Math.min(1,-l/1.771)))+Math.atan2(.38,1.73))*180/Math.PI;s=Math.max(s,c,0)*Math.PI/180,Jd.copy(Ae.q).multiply(new ft().setFromAxisAngle(qS,-s));let h=lg.copy($s).sub(ph.set(Ye.HF,Ye.HB,0).applyQuaternion(Jd)),u=t(19,20);if(kt.forEach(x=>{x.visible=e>vs[0]-.4}),e>vs[0]){let x=Math.min(1,(e-vs[0])/(vs[1]-vs[0])),v=Ae.L*x*x*x*(x*(6*x-15)+10),S=Ae.path,T=S.length-1,y=Math.min(T,v/Ae.L*T),E=Math.min(T-1,Math.floor(y)),R=y-E,P=D=>S[E][D]+(S[E+1][D]-S[E][D])*R;ts(P(0),P(1),P(2)),N.steer=Math.atan(1.15*P(3));let F=v-(Ae.s||0);Ae.s=v,wn.forEach(D=>{D.spin-=F/bh})}else Ae.s=0;Fe.position.copy(h).lerp(N.p,u),Fe.quaternion.copy(Jd).slerp(N.q,u),Fe.updateMatrixWorld(!0);let d=1e9;for(let[x,v]of Ae.pts)bt.copy(v).applyMatrix4(x.matrixWorld),d=Math.min(d,bt.y-ht(bt.x,bt.z));d<.02&&(Fe.position.y+=.02-d);let f=$s.set(-Ae.d.z,0,Ae.d.x),m=Ae.P,b=lg.set(m.x+Ae.d.x*13+f.x*6,m.y+.3,m.z+Ae.d.z*13+f.z*6),g=ph.set(m.x+Ae.d.x*3.5+f.x*6.5,m.y-.2,m.z+Ae.d.z*3.5+f.z*6.5),p=t(4,8);Ke.position.copy(b).lerp(g,p);let _=new C(N.p.x+Ae.d.x*6-f.x*3,N.p.y+.4,N.p.z+Ae.d.z*6-f.z*3);if(Ke.position.lerp(_,t(17,23.5)),e>vs[0]-.6){let x=Ae.path,v=x[x.length>>1],S=x[x.length-1],T=Math.cos(S[2]),y=-Math.sin(S[2]),E=-y,R=T;(v[0]-Qe.x)*E+(v[1]-Qe.z)*R<0&&(E=-E,R=-R);let P=bt.set(v[0]+E*9-T*3,Yt(v[0],v[1])+5,v[1]+R*9-y*3);Ke.position.lerp(P,t(vs[0]-.6,vs[0]+1.6));let F=si===1?16:7.5,D=si===1?.35:0,I=Math.cos(Rt.pitch+D)*F;Ke.position.lerp(bt.set(S[0]-T*I,ht(S[0],S[1])+.8+1.6+Math.sin(Rt.pitch+D)*F,S[1]-y*I),t(vs[1]-1.8,cg))}Ke.position.y=Math.max(Ke.position.y,ht(Ke.position.x,Ke.position.z)+.45),Ke.lookAt($s.copy(m).add(ph.set(0,1-.4*t(4,10),0)).lerp(bt.copy(Fe.position).add(ph.set(0,.4,0)),t(6,12))),ri.position.copy(Fe.position).addScaledVector(hf,120),ri.target.position.copy(Fe.position);let M="";for(let[x,v,S]of GS)e>=x&&e<v&&(M=S);if(M!==Ae.capT){Ae.capT=M;let x=se("cine-cap");x.classList.remove("on"),M&&(x.textContent=M,x.offsetWidth,x.classList.add("on"))}}var Wr=[{at:()=>[Qe.x,Qe.z,8.5],name:"Challenger",sub:"Apollo 17 landing site \xB7 11 December 1972",body:["Gene Cernan and Harrison Schmitt landed here in the lunar module Challenger, less than 200 m from their target, while Ronald Evans circled overhead in the command module America.","They stayed about 75 hours, longer than any other Apollo crew, and spent more than 22 hours outside on three moonwalks. With the rover they covered about 35 km and brought home about 110 kg of rock and soil, more than any other mission.","On the first moonwalk part of a rear fender was knocked off, and the wheels sprayed the crew and the rover with dust. Overnight they made a new one from laminated maps, duct tape and clamps.","It was the last of the Apollo landings."]},{at:()=>[yt.x,yt.z,7.5],name:"Tracy\u2019s Rock",sub:"Stop 6 \xB7 the foot of the North Massif",body:["This boulder broke loose high on the North Massif and rolled and bounced about a kilometer down the slope, leaving a trail still visible from orbit, then split into five pieces where it stopped. Put back together it would be about 18 by 10 by 6 m. Gene Cernan named it for his daughter, Tracy.","<b>Troctolite 76535.</b> Among the rock fragments the crew raked from the soil here was a coarse-grained crystalline rock about 4.2 to 4.3 billion years old. It formed slowly, deep in the young Moon\u2019s crust, and was later dug out by impacts.","In 2009 researchers at MIT found that it is weakly magnetized, and that its magnetism dates from when it crystallized. That points to a molten, churning core that gave the young Moon a magnetic field, as Earth\u2019s core does today. A 2016 study supported the result."]},{at:()=>[Li.x,Li.z,5],name:"Van Serg crater",sub:"Stop 9 \xB7 the last drive",body:["A crater about 100 m across, blasted through the dark soil that covers the valley floor. The crew came here on the third moonwalk to work out how it formed and to sample the dark material and what lies beneath it.","Its rim is strewn with angular blocks thrown out by the impact, mostly smaller than 30 cm, with a few boulders up to about 2 m across. A piece they broke from a boulder on the rim, sample 79115, turned out to be regolith breccia: loose lunar soil welded into rock by the shock of an impact.","<b>What they found.</b> Harrison Schmitt called it a fresh impact crater with a blocky rim as soon as they arrived. Its shape bears that out: a raised rim of blocks, benches stepping down the inner walls, and a mound of blocks on the floor. Nearly every rock they sampled was the same dark, crumbly breccia, which the geologists read as the valley floor\u2019s own soil, hardened into rock by the impact and thrown out of the crater.","<b>The name.</b> Schmitt named it for Hugh McKinstry (1896\u20131961), a Harvard geology professor who wrote scientific satires under the pen name Nicholas Vanserg."]},{at:()=>[ct.x,ct.z,6],name:"Shorty crater",sub:"Stop 4 \xB7 the second drive \xB7 the orange soil",body:["On the second moonwalk Harrison Schmitt, the only geologist to walk on the Moon, looked down at the rim of this crater and saw orange soil. Shorty is about 110 m across and up to 14 m deep.","Almost all of that soil is tiny beads and broken pieces of orange glass, colored by titanium. They were sprayed out in fire-fountain eruptions about 3.6 billion years ago, buried under a later lava flow, and brought back up by the impact that made the crater. In the core tube the crew drove into the rim, the orange gave way to black beads: the same glass, crystallized as it cooled.","Decades later the beads changed ideas about the Moon itself. In 2008 a team led by Alberto Saal found traces of water in these volcanic glasses, and in 2011 tiny pockets of melt sealed inside crystals in this very soil showed that the Moon\u2019s magma had held about a hundred times more water than earlier studies suggested.","<i>The real Shorty is about 4.3 km west of the lander. It is drawn here at its true size but much closer, so the drive to it is short.</i>"]},{kind:"find",model:"../models/sample-76535.glb",cap:"76535,0 today, about 2 cm across: the largest piece left after samples were cut for study. Drag to turn it, pinch or scroll to zoom. 3D model: NASA Astromaterials 3D.",at:()=>[yt.x-10,yt.z+9,2.5],label:"76535 \xB7 troctolite",name:"76535,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 6",body:["A troctolite: a coarse-grained igneous rock made almost entirely of large grains of pale green olivine and white plagioclase feldspar. It weighs about 156 g and came back in a rake sample from the soil at Station 6, the stop at the split boulder, on the third moonwalk.","It crystallized deep in the young Moon\u2019s crust about 4.2 to 4.3 billion years ago, slowly enough to grow its large, interlocking grains, and was later dug out by impacts.","Few rocks have been studied so closely. In 2009 researchers at MIT found it weakly magnetized since it formed, evidence that the young Moon had a magnetic field from a molten core. In 2021, chemical differences still preserved inside its crystals showed it must have cooled within about 20 million years, far faster than the more than 100 million years once thought."]},{kind:"find",model:"../models/sample-79115.glb",cap:"79115,0 today, about 9 cm long. Drag to turn it, pinch or scroll to zoom. 3D model: NASA Astromaterials 3D.",at:()=>[Li.x+-.65*48,Li.z+-.76*48,2.5],label:"79115 \xB7 breccia",name:"79115,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 9",body:["Regolith breccia: loose lunar soil and broken rock welded into stone by the shock of an impact. On the third moonwalk the crew broke this 346 g piece off the top of a fractured boulder on the rim of Van Serg crater, hoping it would tell how and when the crater formed. Its partner, 79135, 2.3 kg, came from the bottom of the same boulder.","About 60% of it is a fine matrix of mineral debris and glass. Mixed through it are fragments of highland rock, mare basalt and other basalts, and beads of orange volcanic glass like those at Shorty crater: soil from across the valley, swept up and pressed together."]},{kind:"find",at:()=>[ct.x+Math.cos(2.4)*ct.R*1.05,ct.z+Math.sin(2.4)*ct.R*1.05,2.5],label:"74220 \xB7 orange soil",name:"74220,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 4",body:["The orange soil itself: 1,180 g scooped from the rim of Shorty crater on the second moonwalk. With the samples from the trench Harrison Schmitt dug across the orange zone and the core tube driven beside it, the set comes to about 4.6 kg.","About 99% of it is beads and broken bits of orange glass; the rest is mostly fragments of basalt. Each bead is a droplet of lava sprayed from a fire fountain about 3.6 billion years ago and frozen to glass in flight. The color comes from titanium.","The beads still hold traces of the gases that drove the eruption. In 2008 and 2011 they gave the first strong evidence of water inside the Moon."]}],jS={"Tracy\u2019s Rock":[["img/tracys-rock.jpg","Harrison Schmitt beside the boulder at Station 6, with the front of the rover at left. AS17-146-22294, photographed by Gene Cernan, 13 December 1972. NASA."]],"Van Serg crater":[["img/van-serg.jpg","Harrison Schmitt in the rover at Station 9, Van Serg crater, on the third moonwalk. AS17-134-20454, photographed by Gene Cernan, 13 December 1972. NASA."]],"Shorty crater":[["img/shorty.jpg","Looking into Shorty crater from Station 4, with the orange soil on its rim. AS17-137-20992, 12 December 1972. NASA."]],"76535,0":[["img/76535.jpg","Sample 76535, photographed at NASA\u2019s Manned Spacecraft Center (now Johnson Space Center) in 1973. NASA photo S73-19456."]],"79115,0":[["img/79115.jpg","Sample 79115, photographed at NASA\u2019s Manned Spacecraft Center (now Johnson Space Center) in 1973. NASA photo S73-15396."]],"74220,0":[["img/orange-soil.jpg","The orange soil at Station 4, Shorty crater. The tripod is the gnomon, the crew\u2019s reference for scale, sun angle and color. AS17-137-20990, 12 December 1972, color gently enhanced. NASA."],["img/orange-beads.jpg","Orange glass beads and fragments from the soil, 0.02 to 0.045 mm across, magnified 160 times. NASA photo S73-15171, January 1973."]]};Wr.forEach(i=>{i.imgs=jS[i.name]||[]});var Qs=new C,xn={relief:null,trail:(()=>{try{return JSON.parse(localStorage.getItem("lrv-trail"))||[]}catch{return[]}})(),seen:(()=>{try{return new Set(JSON.parse(localStorage.getItem("lrv-found"))||[])}catch{return new Set}})(),t:0,saveT:0,open:!1},KS=()=>[[Qe.x+22,Qe.z+30,"Challenger"],[zr[0].x,zr[0].z-22,"Station 6"],[zr[1].x-10,zr[1].z-20,"Station 8"],[Li.x,Li.z-ct.R-8,"Station 9 \xB7 Van Serg"],[ct.x,ct.z-ct.R-12,"Shorty"],[Mt,St-Be+70,"North Massif"]],YS=[["Sculptured Hills \u2192",1,.42],["\u2190 South Massif",-1,.96]];function JS(){let e=document.createElement("canvas");e.width=e.height=340;let t=e.getContext("2d"),n=t.createImageData(340,340);for(let s=0;s<340;s++)for(let r=0;r<340;r++){let a=Mt-Be+(r+.5)*2*Be/340,o=St-Be+(s+.5)*2*Be/340,l=2*Be/340,c=Yt(a+l,o)-Yt(a-l,o),h=Yt(a,o+l)-Yt(a,o-l),u=Math.max(16,Math.min(215,108-c/l*150-h/l*38)),d=(s*340+r)*4;n.data[d]=u,n.data[d+1]=u*.98,n.data[d+2]=u*.93,n.data[d+3]=255}return t.putImageData(n,0,0),e}function $g(i,e,t,n,s){let r=Math.min(2,devicePixelRatio||1),a=Math.round(i.clientWidth*r);if(!a)return;i.width!==a&&(i.width=i.height=a);let o=i.getContext("2d"),l=a/n,c=(M,x)=>[(M-e)*l+a/2,(x-t)*l+a/2];xn.relief||(xn.relief=JS()),o.fillStyle="#1a1916",o.fillRect(0,0,a,a);let[h,u]=c(Mt-Be,St-Be);o.drawImage(xn.relief,h,u,2*Be*l,2*Be*l),o.lineJoin=o.lineCap="round",o.strokeStyle="rgba(124,199,242,.55)",o.lineWidth=Math.max(1,1.2*r),o.setLineDash([2*r,4*r]),o.beginPath();for(let M=0;M<Hr.length;M+=6){let[x,v]=c(Hr[M],Hr[M+1]);M?o.lineTo(x,v):o.moveTo(x,v)}o.stroke(),o.setLineDash([]),o.strokeStyle="rgba(230,204,133,.9)",o.lineWidth=Math.max(1.5,(s?2:1.6)*r),o.beginPath();let d=!1;for(let M of xn.trail){if(!M){d=!1;continue}let[x,v]=c(M[0],M[1]);d?o.lineTo(x,v):o.moveTo(x,v),d=!0}o.stroke();let f=(s?11:8)*r;o.font=`600 ${f}px Montserrat, sans-serif`,o.textAlign="center";for(let M of Wr)if(M.kind==="find"){let[x,v]=M.at(),[S,T]=c(x,v),y=xn.seen.has(M.name);o.beginPath(),o.arc(S,T,(s?5:3.2)*r,0,6.3),o.strokeStyle="#7CC7F2",o.lineWidth=1.3*r,o.stroke(),y&&(o.fillStyle="#7CC7F2",o.fill()),s&&(o.fillStyle="rgba(201,189,151,.95)",o.fillText(y?M.name.split(",")[0]:"?",S,T+17*r))}if(s||n<600)for(let[M,x,v]of KS()){let[S,T]=c(M,x);o.fillStyle="rgba(0,0,0,.55)",o.fillText(v,S+r,T+r),o.fillStyle="#E6CC85",o.fillText(v,S,T)}if(s)for(let[M,x,v]of YS)o.textAlign=x>0?"right":"left",o.fillStyle="rgba(201,189,151,.8)",o.fillText(M,x>0?a-8*r:8*r,a*v);o.strokeStyle="rgba(230,140,90,.75)",o.lineWidth=Math.max(1,1.3*r),o.setLineDash([5*r,4*r]),o.beginPath();for(let M=0;M<=240;M++){let[x,v]=c(...pS(M/240*2*Math.PI));M?o.lineTo(x,v):o.moveTo(x,v)}o.stroke(),o.setLineDash([]);let[m,b]=c(Qe.x,Qe.z);o.fillStyle="#F2E4BE",o.fillRect(m-2.5*r,b-2.5*r,5*r,5*r);let[g,p]=c(N.p.x,N.p.z),_=Math.atan2(-Kt.z,Kt.x);o.save(),o.translate(g,p),o.rotate(-_),o.beginPath(),o.moveTo(7*r,0),o.lineTo(-4.5*r,4*r),o.lineTo(-2.5*r,0),o.lineTo(-4.5*r,-4*r),o.closePath(),o.fillStyle="#E6CC85",o.strokeStyle="#0d0a18",o.lineWidth=1.2*r,o.fill(),o.stroke(),o.restore()}function ZS(i){let e=xn.trail[xn.trail.length-1];if(!re.on&&(!e||Math.hypot(N.p.x-e[0],N.p.z-e[1])>3)&&(e&&Math.hypot(N.p.x-e[0],N.p.z-e[1])>30&&xn.trail.push(null),xn.trail.push([+N.p.x.toFixed(1),+N.p.z.toFixed(1)]),xn.trail.length>6e3&&xn.trail.splice(0,1e3)),(xn.saveT+=i)>5){xn.saveT=0;try{localStorage.setItem("lrv-trail",JSON.stringify(xn.trail))}catch{}}(xn.t+=i)>.2&&(xn.t=0,$g(se("minimap"),N.p.x,N.p.z,260,!1))}var Qg=!1;se("minimap").addEventListener("click",()=>{Ae.on||Oe.on||zt.on||(Qg=nn,nn=!1,se("mapsheet").classList.add("on"),requestAnimationFrame(()=>$g(se("mapbig"),Mt,St,2*Be,!0)))});se("mapsheet-close").addEventListener("click",()=>{se("mapsheet").classList.remove("on"),nn=Qg});var e0=!1;function t0(i){i.kind==="find"&&!tn.on&&u0(i)||n0(i)}function n0(i){se("sc-t").textContent=i.name,se("sc-s").textContent=i.sub;let e=([t,n])=>`<figure><img src="${t}" alt="" loading="lazy" onerror="this.parentNode.remove()"><figcaption>${n}</figcaption></figure>`;if(se("sc-b").innerHTML=(i.imgs[0]?e(i.imgs[0]):"")+i.body.map(t=>`<p>${t}</p>`).join("")+i.imgs.slice(1).map(e).join(""),se("sitecard").classList.toggle("wide",!!i.model),se("sitecard").classList.add("on"),e0=nn,nn=!1,i.model&&$S(i.model,i.cap),i.kind==="find"&&!xn.seen.has(i.name)){xn.seen.add(i.name);try{localStorage.setItem("lrv-found",JSON.stringify([...xn.seen]))}catch{}}}se("sc-close").addEventListener("click",()=>{se("sitecard").classList.remove("on"),nn=e0,Ih.stop&&Ih.stop()});var Ih={stop:null};function $S(i,e){let t=document.createElement("figure");t.className="rock3d";let n=document.createElement("canvas");t.appendChild(n);let s=document.createElement("button");s.className="rock-fs",s.textContent="Full screen",t.appendChild(s);let r=document.createElement("figcaption");r.textContent=e||"",t.appendChild(r),se("sc-b").prepend(t);let a=new Bo({canvas:n,antialias:!0,alpha:!0});a.outputColorSpace=Gt;let o=new ga,l=new rn(30,1,.001,10);o.add(new wa(16777215,4210752,1.4));let c=new Xs(16777215,2.2);c.position.set(.5,.8,.6),o.add(c);let h=new Dt;o.add(h);let u=!0,d=.3,f=0,m=1,b=()=>{let x=t.classList.contains("big"),v=x?innerWidth:t.clientWidth||360,S=x?innerHeight:Math.round(Math.min(v*.8,innerHeight*.55));a.setPixelRatio(Math.min(2,devicePixelRatio||1)),a.setSize(v,S),l.aspect=v/S,l.updateProjectionMatrix()};b(),addEventListener("resize",b),s.addEventListener("click",()=>{t.classList.toggle("big"),s.textContent=t.classList.contains("big")?"Close":"Full screen",b()}),new Vo().setMeshoptDecoder(kd).loadAsync(i).then(x=>{let v=x.scene,S=new $t().setFromObject(v),T=.05/S.getSize(new C).length();v.scale.setScalar(T),v.position.copy(S.getCenter(new C)).multiplyScalar(-T),h.add(v)}).catch(()=>t.remove());let g=new Map,p=0;n.addEventListener("pointerdown",x=>{g.set(x.pointerId,[x.clientX,x.clientY]),n.setPointerCapture(x.pointerId),p=0}),n.addEventListener("pointermove",x=>{let v=g.get(x.pointerId);if(v&&(g.size===1&&(f+=(x.clientX-v[0])*.01,d+=(x.clientY-v[1])*.01),g.set(x.pointerId,[x.clientX,x.clientY]),g.size===2)){let[S,T]=[...g.values()],y=Math.hypot(S[0]-T[0],S[1]-T[1]);p&&(m=Math.max(.6,Math.min(4,m*y/p))),p=y}});let _=x=>{g.delete(x.pointerId),p=0};n.addEventListener("pointerup",_),n.addEventListener("pointercancel",_),n.addEventListener("wheel",x=>{x.preventDefault(),m=Math.max(.6,Math.min(4,m*Math.exp(-x.deltaY*.0015)))},{passive:!1});let M=()=>{u&&(g.size||(f+=.006),h.rotation.set(d,f,0),l.position.set(0,0,.09/m),a.render(o,l),requestAnimationFrame(M))};M(),Ih.stop=()=>{u=!1,removeEventListener("resize",b),a.dispose(),Ih.stop=null}}Wr.forEach(i=>{let e=document.createElement("button");e.className=i.kind==="find"?"site find":"site",e.innerHTML=`<i></i>${i.label||i.name}`,e.addEventListener("click",()=>t0(i)),se("sites").appendChild(e),i.el=e});function QS(){Ke.updateMatrixWorld();for(let i of Wr){let[e,t,n]=i.at(),s=Math.hypot(e-Ke.position.x,t-Ke.position.z);Qs.set(e,ht(e,t)+n,t).project(Ke);let r=Math.hypot(Qs.x,Qs.y*.8),a=i.kind==="find"?150:280,o=Qs.z<1&&Math.abs(Qs.x)<1.05&&Math.abs(Qs.y)<1.05?s<35?1:Xe(a,a*.55,s)*Xe(.5,.28,r):0;if(i.el.style.display=o>.02?"flex":"none",o>.02){let l=(Qs.x+1)/2*innerWidth,c=(1-Qs.y)/2*innerHeight;i.el.style.left=l.toFixed(1)+"px",i.el.style.top=c.toFixed(1)+"px",i.el.style.opacity=o.toFixed(2);let h=Math.hypot(Ch.x-l,Ch.y-c+12);i.el.style.setProperty("--k",(1+.6*Xe(130,20,h)).toFixed(3))}}}function i0(){Di.forEach((i,e)=>{i.steer.rotation.y=-N.steer*wn[e].steer,i.spin.rotation.z=-wn[e].spin})}var kt=[],qa=[],$i=[],e1=[[-.66,.16,-.33],[-.66,.16,.33]],Sh=new C(-.3,.4,0),vt={S:new C(.26,.435,-.07),E:new C(.44,.334,-.08),H:new C(.72,.149,-.093)},vf=i=>i<0?[5,8]:[6,9],t1=i=>{for(let e in i.attributes){let t=i.attributes[e];if(t.array instanceof Float32Array&&!t.normalized)continue;let n=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)n[s*t.itemSize+r]=t.getComponent(s,r);i.setAttribute(e,new Ze(n,t.itemSize))}return i};function n1(i){i.updateMatrixWorld(!0);let e=new $t().setFromObject(i),t=1.85/(e.max.y-e.min.y),n=(e.min.x+e.max.x)/2,s=new Dt,r=new $t;i.traverse(p=>{p.isMesh&&p.material.name==="base_002"&&r.expandByObject(p)});let a=(r.min.z+r.max.z)/2,o=[.22,1.38],l=[.23,1.43],c=Math.PI/12,h=Math.PI/4,u=.01,d=new C,f=new C;i.traverse(p=>{if(!p.isMesh)return;let _=t1(p.geometry.clone());_.applyMatrix4(p.matrixWorld),_.translate(-n,-e.min.y,-a),_.scale(t,t,t);let M=_.attributes.position,x=_.attributes.normal,v=p.material.name==="base_002",S=/buttons|vents/.test(p.material.name),T=/helm|gold/.test(p.material.name);for(let E=0;E<M.count;E++){d.fromBufferAttribute(M,E),f.fromBufferAttribute(x,E);let R=Math.sign(d.x)||1,P=Math.abs(d.x)-o[0],F=d.y-o[1],D=P*Math.cos(h)-F*Math.sin(h),I=Math.abs(P*Math.sin(h)+F*Math.cos(h)),O=d.y>1.36?1:Xe(.2,.235,Math.abs(d.x)),B=d.y>.86&&!T?Xe(-.04,.07,D)*Xe(.12,.085,I)*Xe(1.62,1.5,d.y)*O:0;if(B>0){let te=c*B*R,q=Math.cos(te),J=Math.sin(te),Q=d.x-R*l[0],Ee=d.y-l[1];d.x=R*l[0]+Q*q-Ee*J,d.y=l[1]+Q*J+Ee*q;let Me=f.x*q-f.y*J;f.y=f.x*J+f.y*q,f.x=Me}let X=Xe(.98,1.28,d.y)*Xe(1.62,1.5,d.y);if(B>.5?d.x+=R*u*X:T||(d.x*=1+u/o[0]*X,d.z*=1+.03*X),v)d.addScaledVector(f,.01*(1-B)+.006*B);else if(S){let te=Math.hypot(d.x*.3,d.z)||1;d.x+=d.x*.3/te*.018,d.z+=d.z/te*.018}M.setXYZ(E,d.x,d.y,d.z),x.setXYZ(E,f.x,f.y,f.z)}let y=new ot(_,p.material);s.add(y)});let m=new un({color:14275784,roughness:.9,name:"pack"}),b=new un({color:13223356,roughness:.7,name:"rcu"}),g=(p,_,M,x,v,S,T,y,E)=>{let R=new rh(p,_,M,3,x);R.translate(v,S,T);let P=new ot(R,y);E&&(P.userData.addon=E),s.add(P)};return g(.47,.64,.25,.05,0,1.3,-.315,m,"pack"),g(.44,.2,.21,.05,0,1.73,-.305,m,"pack"),g(.21,.14,.09,.02,0,1.2,.215,b,null),s}function i1(i){let e=i.clone();return e.vertexColors=!0,e.color.multiplyScalar(.93),e}function s1(i){let e=i.clone();return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 sp;
varying vec3 vSp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSp = sp;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSp;`).replace("#include <color_fragment>",`#include <color_fragment>
      { float ax = abs(vSp.x), y = vSp.y, arm = step(1.25, y) * step(.3, ax);
        float red = arm * smoothstep(.025, .015, abs(ax - .4)) + step(y, .9) * step(.5, y) * smoothstep(.025, .015, abs(y - .66)) + step(1.74, y) * smoothstep(.02, .012, ax);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.5, .04, .04), clamp(red, 0., 1.) * .9); }`)},e.customProgramCacheKey=()=>"cmdr-"+i.name,e}var Zd=null;function r1(){if(Zd)return Zd;let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"#000"),t.addColorStop(.47,"#050505"),t.addColorStop(.5,"#9a978f"),t.addColorStop(.62,"#7d7a73"),t.addColorStop(1,"#55534e"),e.fillStyle=t,e.fillRect(0,0,256,128),e.fillStyle="#fff",e.beginPath(),e.arc(70,40,5,0,6.3),e.fill();let n=new Mi(i);n.mapping=Ra,n.colorSpace=Gt;let s=new Ua(In).fromEquirectangular(n).texture;return n.dispose(),Zd=new un({color:14198336,metalness:1,roughness:.14,envMap:s,envMapIntensity:1.25,name:"visor"})}var er=(()=>{let i=vt.S.x,e=vt.S.y+.93,t=vt.H.x-i,n=vt.H.y+.93-e,s=Math.hypot(t,n);return{sx:i,sy:e,ux:t/s,uy:n/s,le:Math.hypot(vt.E.x-i,vt.E.y-vt.S.y)}})(),s0=(i,e)=>{let t=i-er.sx,n=e-er.sy;return[t*er.ux+n*er.uy,Math.abs(t*er.uy-n*er.ux)]},hg=(i,e)=>{if(i<.24&&e<1.32)return!1;let[t,n]=s0(i,e);return t>-.05&&n<(t>.35?.2:.15)};function a1(i){i.updateMatrixWorld(!0);let e=new $t;i.traverse(m=>{m.isMesh&&!m.userData.addon&&e.expandByObject(m)});let t=1.85/(e.max.y-e.min.y),n=new C,s=new ft,r=new vi,a=new C,o=.93,l=.5,c=(e.min.z+e.max.z)/2*t,h=(m,b,g)=>m.sub(b).applyQuaternion(s.setFromEuler(r.set(g[0],g[1],g[2]))).add(b),u=[],d=[];i.traverse(m=>{if(!m.isMesh)return;let b=m.geometry.clone();b.applyMatrix4(m.matrixWorld),b.translate(-(e.min.x+e.max.x)/2,-e.min.y,0),b.scale(t,t,t);let g=b.attributes.position,p=b.attributes.normal,_=new Float32Array(g.count*3),M=new Uint8Array(g.count),x=new Uint16Array(g.count*4),v=new Float32Array(g.count*4),S=new Float32Array(g.count*3);for(let R=0;R<g.count;R++){n.fromBufferAttribute(g,R);let P=n.y,F=Math.abs(n.x),D=n.x<0?0:1;S.set([n.x,P,n.z-c],R*3);let I=[];if(m.userData.addon==="pack")I.push([7,1]);else if(hg(F,P)){let[q,J]=s0(F,P),Q=q>.35?1:Xe(-.03,.05,q)*Xe(.15,.11,J),Ee=Xe(er.le-.04,er.le+.04,q);I.push([0,1-Q],[5+D,Q*(1-Ee)],[8+D,Q*Ee])}else{let q=Xe(o-.06,o+.1,P),J=Xe(l-.05,l+.05,P);I.push([0,q],[1+D,(1-q)*J],[3+D,(1-q)*(1-J)])}let O=0;I.forEach(([q,J],Q)=>{x[R*4+Q]=q,v[R*4+Q]=J,J>I[O][1]&&(O=Q)}),M[R]=I[O][0];let B=Math.max(Xe(.66,.06,P),.45*Xe(.62,.48,Math.abs(P-.5))*(n.z>c?1:.3));_.set([1-.42*B,1-.43*B,1-.45*B],R*3);let X=Xe(l+.06,l-.06,P),te=Xe(o+.07,o-.09,P);M[R]!==7&&!hg(F,P)&&(a.fromBufferAttribute(p,R),X>0&&(h(n,new C(n.x,l,c),[Math.PI/2*X,0,0]),a.applyQuaternion(s)),te>0&&(h(n,new C(n.x,o,c),[-Math.PI/2*te,0,0]),a.applyQuaternion(s)),p.setXYZ(R,a.x,a.y,a.z)),g.setXYZ(R,n.x,n.y-o,n.z)}b.setAttribute("color",new Ze(_,3)),b.setAttribute("sp",new Ze(S,3)),b.setAttribute("skinIndex",new xr(x,4)),b.setAttribute("skinWeight",new gt(v,4));let T=m.material.name==="helm_gold"?r1():i1(m.material),y=b.index?b.index.array:Array.from({length:g.count},(R,P)=>P),E=[];for(let R=0;R<y.length;R+=3){let P=(M[y[R]]===7)+(M[y[R+1]]===7)+(M[y[R+2]]===7);(P===0||P===3)&&E.push(y[R],y[R+1],y[R+2])}u.push([b,T,E]),d.push(M)});let f=o-l;qa.length=0;for(let m of[-1,1]){let b=m<0?0:1,[g,p]=vf(m);qa.push([0,g,vt.S.clone().setX(m*vt.S.x)],[g,p,vt.E.clone().setX(m*vt.E.x)],[0,1+b,new C(m*.1,0,c)],[1+b,3+b,new C(m*.1,0,c+f)])}$i.length=0;for(let m=0;m<10;m++){let b=new $t,g=!1;u.forEach(([p],_)=>{let M=p.attributes.position,x=d[_];for(let v=0;v<M.count;v++)x[v]===m&&(b.expandByPoint(n.fromBufferAttribute(M,v)),g=!0)}),$i.push(g?{c:b.getCenter(new C),size:b.getSize(new C)}:{c:new C,size:new C(.12,.12,.12)})}u.forEach(([m])=>m.scale(On,On,On)),$i.forEach(m=>{m.c.multiplyScalar(On),m.size.multiplyScalar(On)}),qa.forEach(m=>m[2].multiplyScalar(On)),vt.scaled||(vt.S.multiplyScalar(On),vt.E.multiplyScalar(On),vt.H.multiplyScalar(On),vt.scaled=!0);for(let m=0;m<2;m++)rr[m]={hip:qa.find(b=>b[0]===0&&b[1]===1+m)[2],knee:qa.find(b=>b[0]===1+m&&b[1]===3+m)[2],shin:.5*On};return u}var r0=i=>Array.from({length:10},(e,t)=>{let n=$i[t===7&&!i?0:t].c;return new Ve().makeTranslation(-n.x,-n.y,-n.z)});function o1(i){e1.forEach((e,t)=>{let n=new Dt;n.position.set(...e),n.rotation.y=Math.PI/2;let s=[];for(let c=0;c<10;c++){if(c===7){s.push(s[0]);continue}let h=new ls;n.add(h),s.push(h)}let r=new Vs(s,r0(!1)),a=i.map(([c,h,u])=>[c,t===0&&/^(base_002|helmet)$/.test(h.name)?s1(h):h,u]);a.forEach(([c,h])=>{let u=new Bs(c,h);u.castShadow=!0,u.frustumCulled=!1,u.bind(r,new Ve),n.add(u)});let o=c=>t===0&&c<0?new C(-(Sh.z-e[2]),Sh.y-e[1],Sh.x-e[0]):new C(c*.27,-.02,.16),l=c1[t];n.userData={parts:a,bones:s,grips:[o(-1),o(1)],P:l,st:{lx:0,lz:0,vx:0,vz:0,y:0,vy:0,v:null,hands:[o(-1),o(1)],up:0,yaw:0,vyaw:0,look:0,lookT:1+t*2,fx:0,fz:0,t:t*7}},n.visible=!1,Fe.add(n),kt.push(n),Gr(n)})}var On=.92,$d={t:0},rr=[],c1=[{K:68,C:5.2,kg:.22,ks:1700,tau:.05,fid:.035,look:.12,ph:.3,bal:.55,glance:.55},{K:50,C:3.6,kg:.36,ks:1300,tau:.14,fid:.055,look:.5,ph:2.1,bal:1.05,glance:.35}],Ri={rolled:!1,on:!1,t:0},of=new C(0,1,0),ac=new C,wh=new C,cf=new C,a0=new C,o0=new C,Xa=new C,l1=new ft,kr=new ft,h1=new ft,u1=new C,d1=new C,f1=new C,p1=new C;function Ha(i,e,t,n,s){i[e].quaternion.copy(t),i[e].position.copy($i[e].c).sub(n).applyQuaternion(t).add(s)}function Gr(i){let{bones:e,st:t}=i.userData,n=u1.set(0,t.y,0),s=l1.setFromUnitVectors(of,wh.set(t.lx,1,t.lz).normalize()).multiply(kr.setFromAxisAngle(of,t.yaw));if(Ha(e,0,s,ac.set(0,0,0),n),t.legs)for(let r=0;r<2;r++){let[a,o]=t.legs[r],l=rr[r],c=Sn.setFromAxisAngle(As.set(1,0,0),a);Ha(e,1+r,c,l.hip,Za.copy(l.hip).add(n));let h=nr.copy(l.knee).sub(l.hip).applyQuaternion(c).add(l.hip).add(n);Ha(e,3+r,kr.setFromAxisAngle(As.set(1,0,0),a+o),l.knee,h)}else for(let r of[1,2,3,4])Ha(e,r,h1,ac.set(0,0,0),n);for(let r of[-1,1]){let[a,o]=vf(r),l=cf.copy(vt.S).setX(r*vt.S.x),c=a0.copy(vt.E).setX(r*vt.E.x),h=o0.copy(vt.H).setX(r*vt.H.x),u=l.distanceTo(c),d=c.distanceTo(h),f=d1.copy(l).applyQuaternion(s).add(n),m=p1.copy(t.hands[r<0?0:1]).sub(f),b=Math.max(Math.abs(u-d)+.01,Math.min(u+d-.002,m.length()));m.normalize();let g=(u*u-d*d+b*b)/(2*b),p=Math.sqrt(Math.max(0,u*u-g*g)),_=Xa.set(r*(.7+.3*t.up),-.8+1*t.up,-.6+.4*t.up);_.addScaledVector(m,-_.dot(m)).normalize();let M=f1.copy(f).addScaledVector(m,g).addScaledVector(_,p),x=m.multiplyScalar(b).add(f),v=new ft().setFromUnitVectors(wh.copy(c).sub(l).normalize(),Xa.copy(M).sub(f).normalize());t.up>.01&&v.premultiply(kr.setFromAxisAngle(Xa.copy(M).sub(f).normalize(),r*Math.PI/4*t.up));let S=new ft().setFromUnitVectors(wh.copy(h).sub(c).normalize().applyQuaternion(v),Xa.copy(x).sub(M).normalize()).multiply(v);t.up>.01&&S.premultiply(kr.setFromAxisAngle(Xa.copy(x).sub(M).normalize(),r*Math.PI/4*t.up)),Ha(e,a,v,l,f),Ha(e,o,S,c,M),(t.hand||(t.hand=[new C,new C]))[r<0?0:1].copy(x)}}var ae={on:!1,ph:"",t:0,x:0,z:0,face:0,tx:0,tz:0,t0:0,land:-1,crash:0,dodge:null,told:!1},mh=new C,Eh=new C;function m1(i,e){let t=[1.45,-1.35],n=Math.abs(Math.sin(i)),s=.22*Math.sin(i),r=e?.4*(1-n):0;return[[t[0]+s-r*.5,t[1]-Math.max(0,-s)*.6+r],[t[0]-s-r*.5,t[1]-Math.max(0,s)*.6+r]]}function ug(i){let e=Sn.setFromAxisAngle(As.set(1,0,0),i[0][0]);return nr.copy(rr[0].knee).sub(rr[0].hip).applyQuaternion(e).add(Za.set(0,-rr[0].shin,0).applyQuaternion(kr.setFromAxisAngle(As.set(1,0,0),i[0][0]+i[0][1]))).y}function g1(i,e){let t=kt[1];if(ae.on){ae.ph!=="out"&&ae.ph!=="in"&&(ae.tx=i,ae.tz=e,ae.ph="walk",ae.t=0);return}if(!(!t||!t.visible||tn.on||re.on||Oe.on)){if(Math.hypot(N.v.x,N.v.z)>1.5){dn("Slow down first: Schmitt climbs out of a stopped rover");return}Object.assign(ae,{on:!0,ph:"out",t:0,tx:i,tz:e,land:-1,crash:0,dodge:null}),pt.mode=""}}function Mf(){let i=kt[1],e=i.userData.st,t=i.userData.grips;i.parent!==Fe&&Fe.add(i),ae.on=!1,ae.ph="",i.position.copy(ws),i.rotation.set(0,Math.PI/2,0),e.legs=null,e.lz=0,e.up=0,e.v=null,e.hands[0].copy(t[0]),e.hands[1].copy(t[1]),i.visible=!0,Gr(i)}function c0(i=di){let e=Math.max(ae.t0,i-9);if(ae.ph="wait",ae.t=0,i-e<1.5||Oe.on||Ts.length<2)return;Oe.save={run:nn,steer:N.steer,spin:wn.map(n=>n.spin)},Oe.fov=Ke.fov,Oe.on=Oe.film=!0,Oe.t=e,Oe.end=Math.min(i+.6,di),nn=!1,document.body.classList.add("replay"),se("btn-replay").classList.remove("on"),Oe.offerT=0,Oe.cam.set(ae.x,ht(ae.x,ae.z)+1.4,ae.z),kt[1].visible=!1;let t=se("cine-cap");t.textContent="Schmitt\u2019s film",t.offsetWidth,t.classList.add("on")}function l0(i,e){let t=i.userData.st,n=On,s=ae.t+=e,r=i.userData.grips;t.yaw=0,t.up=0,t.lx=0,t.y=0,t.v=null;let a=x=>ac.set(x?.31:-.31,-.22,.13).multiplyScalar(n);if(ae.ph==="out"||ae.ph==="in"){let x=ae.ph==="out",v=x?Xe(0,1.1,s):1-Xe(0,1.1,s),S=[[1.45*v,-1.35*v],[1.45*v,-1.35*v]],T=mh.copy(ws).lerp(Ci,x?Xe(.2,1.1,s):1-Xe(0,.9,s)),y=Fe.localToWorld(sc.set(T.x,0,T.z)),E=Fe.worldToLocal(Ph.set(y.x,ht(y.x,y.z),y.z)).y;t.legs=S,t.lz=0,i.position.set(T.x,ws.y+(E-ug(S)-ws.y)*v,T.z),i.rotation.set(0,Math.PI/2*(1-v),0);for(let R=0;R<2;R++)t.hands[R].copy(r[R]).lerp(a(R),v);if(Gr(i),s>=1.1){if(!x){Mf();return}It.attach(i),ae.x=i.position.x,ae.z=i.position.z,Eh.set(0,0,1).applyQuaternion(i.quaternion),ae.face=Math.atan2(Eh.x,Eh.z),ae.ph="walk",ae.t=0}return}let o=[[1.45,-1.35],[1.45,-1.35]],l=0,c=0,h=ae.face,u=0,d=N.p.x-ae.x,f=N.p.z-ae.z,m=Math.hypot(d,f),b=N.v.x,g=N.v.z,p=b*b+g*g;if(!ae.dodge&&ae.ph!=="board"&&!re.on&&p>1&&m<14){let x=-(d*b+f*g)/p,v=d+b*x,S=f+g*x;if(x>0&&x<1.5&&Math.hypot(v,S)<2.4){let T=Math.sqrt(p),y=-g/T,E=b/T;-v*y-S*E<0&&(y=-y,E=-E),ae.dodge={t:0,x0:ae.x,z0:ae.z,dx:y*2.2,dz:E*2.2},ae.told||(ae.told=!0,dn("Schmitt jumps clear!"))}}let _=(x,v,S)=>{let T=x-ae.x,y=v-ae.z,E=Math.hypot(T,y);if(E<.05)return E;let R=Math.min(E,S*e)/E;return ae.x+=T*R,ae.z+=y*R,h=Math.atan2(T,y),o=m1(s*6.2,!0),l=.11*Math.pow(Math.abs(Math.sin(s*6.2)),.6),c=.14,E};if(ae.dodge){let x=ae.dodge,v=Math.min(1,(x.t+=e)/.9);ae.x=x.x0+x.dx*Xe(0,1,v),ae.z=x.z0+x.dz*Xe(0,1,v),l=.5*Math.sin(Math.PI*v),o=[[1.05,-.7],[1.1,-.8]],c=.2,t.up=.35*Math.sin(Math.PI*v),h=Math.atan2(d,f),v>=1&&(ae.dodge=null)}else if(ae.ph==="walk")_(ae.tx,ae.tz,2)<.3&&(ae.ph="film",ae.t=0,ae.t0=di,ae.land=-1,ae.crash=0,dn("Schmitt is filming \xB7 show him a stunt"));else if(ae.ph==="film")h=Math.atan2(d,f),u=Xe(0,.6,s),!re.on&&(ae.land>=0&&di-ae.land>1.6||s>14||m>140)&&c0();else if(ae.ph==="wait")h=Math.atan2(d,f),m<7&&Math.sqrt(p)<.8&&!re.on&&(ae.ph="board",ae.t=0);else if(ae.ph==="board"){Fe.updateMatrixWorld(!0);let x=Fe.localToWorld(mh.copy(Ci));if(Math.sqrt(p)>1.5)ae.ph="wait";else if(_(x.x,x.z,1.6)<.35){Fe.attach(i),i.position.copy(Ci),i.rotation.set(0,0,0),ae.ph="in",ae.t=0,l0(i,0);return}}let M=h-ae.face;M-=2*Math.PI*Math.round(M/(2*Math.PI)),ae.face+=Math.max(-3*e,Math.min(3*e,M)),t.legs=o,t.lz=c,i.rotation.set(0,ae.face,0),i.position.set(ae.x,ht(ae.x,ae.z)-ug(o)+l,ae.z);for(let x=0;x<2;x++)t.hands[x].copy(a(x)),u&&t.hands[x].lerp(mh.set(x?.07:-.07,.36,.25).multiplyScalar(n),u);if(t.up>0)for(let x=0;x<2;x++)t.hands[x].lerp(mh.set(x?.45:-.45,.35,.05).multiplyScalar(n),t.up/.35);Gr(i)}var Mn={x:0,z:0,hit:!1,timer:0,at:null};function x1(i,e){let t=new Ao;t.setFromCamera(new He(i/innerWidth*2-1,1-e/innerHeight*2),Ke);let n=t.ray.origin,s=t.ray.direction,r=0;for(let a=.5;a<400;a*=1.04){let o=n.x+s.x*a,l=n.z+s.z*a;if(n.y+s.y*a<ht(o,l)){for(let c=0;c<12;c++){let h=(r+a)/2;n.y+s.y*h<ht(n.x+s.x*h,n.z+s.z*h)?a=h:r=h}return[n.x+s.x*a,n.z+s.z*a]}r=a}return null}function h0(i,e){if(!nn||Ae.on||zt.on||Oe.on||_f())return;let t=x1(i,e),n,s;if(!t){let h=Ke.getWorldDirection(Eh);t=[N.p.x+h.x*15,N.p.z+h.z*15]}n=t[0]-N.p.x,s=t[1]-N.p.z;let r=Math.hypot(n,s);if(r>20)t=[N.p.x+n/r*20,N.p.z+s/r*20];else if(r<4){let h=4/Math.max(.01,r);t=[N.p.x+n*h,N.p.z+s*h]}Mn.x=t[0],Mn.z=t[1];let a=[];kt[1]&&!tn.on&&!re.on&&a.push([ae.on?"Film from here instead":"Hold the camera here",()=>g1(Mn.x,Mn.z)]),ae.on&&ae.ph!=="in"&&a.push(["Schmitt back aboard",Mf]),vh>.5&&a.push(["Back on its wheels",gf]),Oe.jump&&Oe.offerT>0&&a.push(["Replay the jump",Yg]),a.push(["Change camera view",()=>se("btn-pov").click()],["Open the map",()=>se("minimap").click()]);let o=se("ctx");o.innerHTML="";for(let[h,u]of a){let d=document.createElement("button");d.textContent=h,d.addEventListener("click",f=>{f.stopPropagation(),Sf(),u()}),o.appendChild(d)}o.classList.add("on");let l=o.offsetWidth,c=o.offsetHeight;o.style.left=Math.min(i,innerWidth-l-8)+"px",o.style.top=Math.min(e,innerHeight-c-8)+"px"}function Sf(){se("ctx").classList.remove("on")}In.domElement.addEventListener("contextmenu",i=>{i.preventDefault(),h0(i.clientX,i.clientY)});In.domElement.addEventListener("pointerdown",i=>{Sf(),i.pointerType==="touch"&&(Mn.at=[i.clientX,i.clientY],clearTimeout(Mn.timer),Mn.timer=setTimeout(()=>{Mn.at&&h0(Mn.at[0],Mn.at[1]),Mn.at=null},600))});In.domElement.addEventListener("pointermove",i=>{Mn.at&&Math.hypot(i.clientX-Mn.at[0],i.clientY-Mn.at[1])>12&&(Mn.at=null,clearTimeout(Mn.timer))});addEventListener("pointerup",()=>{Mn.at=null,clearTimeout(Mn.timer)});addEventListener("keydown",i=>{i.key==="Escape"&&Sf()});var pt={mode:"",t:0,len:0,side:0,aim:0,w:[0,0],hand:[new C,new C],seen:new Set,camT:10},dg=new C;function b1(i,e,t,n,s,r){let a=null,o=1e9,l=0,c=null;i.updateWorldMatrix(!0,!1);for(let d of Wr){if(d.kind==="find")continue;let[f,m,b]=d.at(),g=Math.hypot(f-N.p.x,m-N.p.z);if(g>300&&pt.seen.delete(d.name),g>260||g>o)continue;let p=i.worldToLocal(dg.set(f,ht(f,m)+b*.3,m)).normalize(),_=Math.atan2(p.x,p.z);Math.abs(_)<1.6&&(o=g,a=d,l=_,c=(c||new C).copy(p))}let h=!!c;pt.mode&&(pt.t+=e),(s>5||Ri.on||pt.mode&&pt.t>pt.len)&&(pt.mode=""),!pt.mode&&!Ri.on&&(h&&o<150&&r>.8&&Math.abs(l)<1.3&&!pt.seen.has(a.name)?(pt.seen.add(a.name),Object.assign(pt,{mode:"point",t:0,len:2.8,side:l>0?1:0})):r<1.5&&(pt.camT-=e)<0&&(pt.camT=12+Math.random()*12,Object.assign(pt,{mode:"photo",t:0,len:2.6,aim:h?Math.max(-.45,Math.min(.45,l)):(Math.random()-.5)*.8})));let u=pt.mode?Xe(0,.45,pt.t)*(1-Xe(pt.len-.5,pt.len,pt.t)):0;if(pt.w[0]=pt.w[1]=0,pt.mode==="point"&&c){let d=pt.side,f=d?1:-1;pt.hand[d].set(f*vt.S.x,vt.S.y,vt.S.z).addScaledVector(dg.set(c.x,Math.max(.15,c.y+.2),c.z).normalize(),.6*On),pt.w[d]=u,t=Math.max(-.5,Math.min(.5,l))*.8}else if(pt.mode==="photo"){for(let d=0;d<2;d++)pt.hand[d].set(d?.075:-.075,.27,.21).multiplyScalar(On),pt.w[d]=u;t=pt.aim}else h&&!n&&(t=Math.max(-.5,Math.min(.5,l)));return t}function _1(i){if(i){!$e.grounded&&$e.t>1&&!Ri.rolled&&(Ri.rolled=!0,Ri.on=Math.random()<.12),$e.grounded&&(Ri.rolled=!1,Ri.on&&(Ri.t+=i)>.6&&(Ri.on=!1,Ri.t=0));for(let e of kt){let{st:t,P:n,grips:s}=e.userData;if(ae.on&&e===kt[1]){l0(e,i);continue}if(re.on){Object.assign(t,{lx:0,lz:0,vx:0,vz:0,y:0,vy:0,v:null});continue}if(tn.on&&e===kt[1]){d0(e,i);continue}let r=wh.copy(e.position).applyQuaternion(N.q),a=cf.copy(N.w).cross(r).add(N.v);t.v||(t.v=a.clone());let o=a0.copy(a).sub(t.v).divideScalar(i);t.v.copy(a),o.lengthSq()>900&&o.setLength(30);let l=kr.copy(N.q).multiply(e.quaternion).invert(),c=o0.set(0,-Vr,0).sub(o).applyQuaternion(l),h=Xa.set(0,1,0).applyQuaternion(l),u=Math.abs(c.y+Vr*h.y);e===kt[0]&&($d.t-=i,u>6&&$d.t<0&&($d.t=.3,ka(u>12?35:15))),u>4&&(t.vx+=(Math.random()-.5)*u*.07,t.vz+=(Math.random()-.5)*u*.05,t.vyaw+=(Math.random()-.5)*u*.05);let d=1-Math.exp(-i/n.tau);t.fx+=(c.x-t.fx)*d,t.fz+=(c.z-t.fz)*d,t.t+=i;let f=n.fid,m=f*(Math.sin(t.t*.61+n.ph)+.6*Math.sin(t.t*1.37+2*n.ph)),b=f*.7*Math.sin(t.t*.83+3*n.ph);(t.lookT-=i)<0&&(t.lookT=2.5+Math.random()*4,t.look=Math.random()<.35?0:(Math.random()-.5)*2*n.look);let g=cf.copy(N.v).applyQuaternion(l),p=Math.hypot(g.x,g.z),_=p>1.5?Math.atan2(g.x,g.z):0,M=Math.abs(_)>.15&&Math.abs(_)<2.6?Math.max(-.35,Math.min(.35,_*n.glance)):0,x=M+t.look*(M?.6:1);e===kt[1]&&(x=b1(e,i,x,M,u,p)),t.vyaw+=i*(14*(x-t.yaw)-6.5*t.vyaw),t.yaw=Math.max(-.5,Math.min(.5,t.yaw+i*t.vyaw));let v=Math.ceil(i/.004),S=i/v;for(let E=0;E<v;E++){t.vx+=S*(n.K*(h.x*n.bal+m-t.lx)+n.kg*n.K*t.fx/2.5-n.C*t.vx),t.vz+=S*(n.K*(h.z*n.bal+b-t.lz)+n.kg*n.K*t.fz/2.5-n.C*t.vz);let R=Math.hypot(t.lx,t.lz);if(R>.35){let F=-3*n.K*(R-.35)/R*S;t.vx+=F*t.lx,t.vz+=F*t.lz}t.lx+=S*t.vx,t.lz+=S*t.vz;let P=t.y<0?-n.ks*t.y-40*t.vy:t.y>.05?-n.ks*(t.y-.05)-40*t.vy:0;t.vy+=S*(c.y+P),t.y+=S*t.vy}let T=Math.hypot(t.lx,t.lz);T>.5&&(t.lx*=.5/T,t.lz*=.5/T),t.y=Math.max(-.03,Math.min(.09,t.y));let y=Ri.on&&e===kt[1]?1:0;t.up+=(y-t.up)*(1-Math.exp(-i*(y?7:4)));for(let E=0;E<2;E++)t.hands[E].copy(s[E]).lerp(ac.set(E?.29:-.29,.95,.2).multiplyScalar(On),t.up);if(e===kt[1])for(let E=0;E<2;E++)pt.w[E]>0&&t.hands[E].lerp(pt.hand[E],pt.w[E]);Gr(e)}}}var tn={on:!1,t:0,st:null,opened:!1,scoop:null},ws=new C(-.66,.16,.33),Ci=new C(-.5,0,1.2),Nr=new C(.2,0,2.25),y1=[{find:"76535,0",in:(i,e)=>Math.hypot(i-yt.x,e-yt.z)<30,what:"a sample beside the boulder"},{find:"79115,0",in:(i,e)=>Math.abs(Math.hypot(i-Li.x,e-Li.z)-50)<22,what:"a piece of a boulder on the rim"},{find:"74220,0",in:(i,e)=>Math.abs(Math.hypot(i-ct.x,e-ct.z)-ct.R)<22,what:"the orange soil"}].map(i=>Object.assign(i,{here:!1,done:!1,hint:!1,still:0}));function v1(i){let e=tn.on||ae.on||re.on||Ft.on||Ae.on||zt.on||Oe.on||Ue.on,t=Math.hypot(N.v.x,N.v.z);for(let n of y1){if(!n.in(N.p.x,N.p.z)){n.here=n.done=n.hint=!1,n.still=0;continue}if(n.here=!0,!(e||n.done)&&(n.hint||(n.hint=!0,dn(`Stop here and Schmitt climbs out for ${n.what}`)),n.still=t<.4?n.still+i:0,n.still>.8)){let r=Wr.find(a=>a.name===n.find);r&&u0(r)&&(n.done=!0,dn("Harrison Schmitt climbs out to take the sample"))}}}function u0(i){if(tn.on||ae.on||!kt[1]||!kt[1].visible||re.on||N.v.length()>1.2)return!1;if(Object.assign(tn,{on:!0,t:0,st:i,opened:!1}),!tn.scoop){let e=new Dt,t=new un({color:12104876,roughness:.5,metalness:.6}),n=new ot(new yr(.012,.012,1,8),t);n.position.y=.5,e.add(n);let s=new ot(new Si(.09,.03,.12),t);s.position.y=1,e.add(s),e.userData.pan=s,e.traverse(r=>{r.castShadow=!0}),tn.scoop=e}return kt[1].add(tn.scoop),tn.scoop.visible=!0,!0}var gh=(i,e,t,n)=>n.copy(i).lerp(e,t);function d0(i,e){let t=tn.t+=e,n=i.userData.st,s=(D,I)=>Xe(D,I,t),r=On,a=n,o=(D,I)=>{let O=Math.max(0,Math.min(1,(t-D)/(I-D)));return{u:O*O*(3-2*O),on:O>0&&O<1,ph:(t-D)*5.6}},l=D=>{let I=Math.abs(Math.sin(D.ph)),O=.22*Math.sin(D.ph),B=D.on?.4*(1-I):0;return{legs:[[b[0]+O-B*.5,b[1]-Math.max(0,-O)*.6+B],[b[0]-O-B*.5,b[1]-Math.max(0,O)*.6+B]],y:D.on?.11*Math.pow(I,.6):0}},c=s(5,5.5)-s(5.9,6.2),h=new C,u,d,f=0,m,b=[1.45,-1.35],g=[0,0],p=D=>ac.set(D?.24:-.24,-.38,.06).multiplyScalar(r).clone();if(t<1.1){let D=s(0,1.1);gh(ws,Ci,s(.2,1.1),h),h.y=0,u=Math.PI/2*(1-D),d=[b.map(I=>I*D),b.map(I=>I*D)],m=null}else if(t<2.7){let D=o(1.1,2.7);gh(Ci,Nr,D.u,h),u=Math.atan2(Nr.x-Ci.x,Nr.z-Ci.z);let I=l(D);d=I.legs,h.y=I.y,f=.14*(D.on?1:0)}else if(t<6.2)h.copy(Nr),u=0,d=[[1.25,-1+.15*c],[1.3,-1.1+.15*c]],f=.18-.32*c;else if(t<7.8){let D=o(6.2,7.8);gh(Nr,Ci,D.u,h),u=Math.atan2(Ci.x-Nr.x,Ci.z-Nr.z);let I=l(D);d=I.legs,h.y=I.y,f=.14*(D.on?1:0)}else if(t<9){let D=1-s(7.8,9);gh(ws,Ci,1-s(7.8,8.7),h),h.y=0,u=Math.PI/2*(1-D),d=[b.map(I=>I*D),b.map(I=>I*D)]}else{tn.on=!1,tn.scoop.visible=!1,i.position.copy(ws),i.rotation.y=Math.PI/2,n.legs=null,n.hands[0].copy(i.userData.grips[0]),n.hands[1].copy(i.userData.grips[1]),n.v=null,Gr(i);return}n.legs=d,n.lx=0,n.lz=f,n.yaw=0,n.y=0,n.up=0;let _=Sn.setFromAxisAngle(As.set(1,0,0),d[0][0]),x=nr.copy(rr[0].knee).sub(rr[0].hip).applyQuaternion(_).add(Za.set(0,-rr[0].shin,0).applyQuaternion(kr.setFromAxisAngle(As.set(1,0,0),d[0][0]+d[0][1]))),v=t<1.1?1-s(0,1.1):t>=7.8?s(7.8,9):0,S=Fe.localToWorld(sc.set(h.x,0,h.z)),T=Fe.worldToLocal(Ph.set(S.x,ht(S.x,S.z),S.z)).y,y=T-x.y+h.y;i.position.set(h.x,ws.y+(y-ws.y)*(1-v),h.z),i.rotation.y=u;let E=i.userData.grips;if(t<1.1||t>=7.8)n.hands[0].copy(E[0]).lerp(p(0),1-v),n.hands[1].copy(E[1]).lerp(p(1),1-v);else if(t<2.7||t>=6.2){let D=.05*Math.sin((t-(t<2.7?1.1:6.2))*5.6);for(let I=0;I<2;I++)n.hands[I].set(I?.31:-.31,-.22,.13+(I?-D:D)).multiplyScalar(r)}else{let D=s(3.1,3.9)-s(4.4,5.2);n.hands[0].set(-.14,-.08+.1*s(4.4,5.2)+.22*c,.32-.04*c).multiplyScalar(r),n.hands[1].set(.18,-.2,.2).multiplyScalar(r),n.hands[0].z+=.06*D}Gr(i);let R=tn.scoop,P=n.hand[0],F=t>2.4&&t<6.6;if(R.visible=F,F){let D=T-i.position.y+.03+.45*s(4.4,5.4)+.55*c,O=rf.set(-.12*r,D,(.82-.2*s(3.1,3.9)-.2*c)*r).clone().sub(P),B=O.length();R.position.copy(P),R.quaternion.setFromUnitVectors(of,O.normalize()),R.scale.set(1,B,1),R.userData.pan.scale.set(1,1/B,1)}!tn.opened&&t>5.5&&(tn.opened=!0,n0(tn.st))}function M1(){let i=new Dt,e=new un({color:3815996,roughness:.6,metalness:.4}),t=new ot(new yr(.014,.018,.33,10),e);t.position.y=-.17;let n=new ot(new yr(.017,.017,.12,10),e);return n.rotation.z=Math.PI/2,i.add(t,n),i.position.copy(Sh),i.traverse(s=>{s.castShadow=!0}),i}(async()=>{se("loadmsg").textContent="Shaping the valley\u2026",await new Promise(t=>setTimeout(t,30));try{let t=await fetch("../models/moon-a17.bin");t.ok&&(Ah=new Int16Array(await t.arrayBuffer()),mg=pg(0,0))}catch{}LM(),DM(),kM(),BM(),Ag(0,0),It.add(uf),YM(),KM(),sS(),oc(),Ah&&GM(),ts(0,0,Math.atan2(350,82)),se("loadmsg").textContent="Unloading the rover\u2026";let[i,e]=await Promise.all([Xd.loadAsync("../models/lrv.glb").catch(()=>null),Xd.loadAsync("../models/lm.glb").catch(()=>null)]);if(i){let t=i.scene;$m(t),t.updateMatrixWorld(!0),t.position.y=-.78-new $t().setFromObject(t).min.y,Fe.add(t,M1()),HS(),VS(),wS()}else Fe.add(new ot(new Si(3.1,.5,2.06),new un({color:12170928})));{let t="";for(let n=0;n<2&&!kt.length;n++)try{let s=await Xd.loadAsync("../models/astronaut-a7l.glb");o1(a1(n1(s.scene)))}catch(s){t=s&&s.message||String(s),console.error("crew",s)}kt.length||setTimeout(()=>dn("The astronauts could not be loaded on this device"+(t?" \xB7 "+t.slice(0,60):"")),4e3)}if(e){let t=e.scene;$m(t),dS(t);let n=Qe.x,s=Qe.z;Qe.y=ht(n,s),Qe.on=!0;let r=[[4.1,0],[-4.1,0],[0,4.1],[0,-4.1]].map(([c,h])=>ht(n+c,s+h)),a=new C(r[1]-r[0],8.2,r[3]-r[2]).normalize();t.quaternion.setFromUnitVectors(new C(0,1,0),a).multiply(new ft().setFromAxisAngle(new C(0,1,0),-Math.PI/2)),t.position.set(n,0,s),t.updateMatrixWorld(!0);let o=1e9,l=new C;t.traverse(c=>{if(!c.isMesh)return;let h=c.geometry.attributes.position;for(let u=0;u<h.count;u+=2)l.fromBufferAttribute(h,u).applyMatrix4(c.matrixWorld),o=Math.min(o,l.y-ht(l.x,l.z))}),t.position.y=-o-.03,It.add(t)}se("loading").classList.remove("on"),se("brief").classList.add("on"),requestAnimationFrame(t=>{af=t,Mh(t)})})();window.__lrv={SHORTY:ct,ORB:Rt,WHEEL_PARTS:Di,WHEELS:wn,rover:Fe,CRASH:re,stepDebris:qg,INTRO:Ae,SEC:Ye,BOULDER:yt,SLABS:Lh,VAN:Li,SITES:Wr,openSite:t0,OBJ:Nt,CPS:zr,RUN:Ue,breakApart:Hg,EARTH:Og,look:null,car:N,AIR:$e,step:nf,ground:ht,place:ts,tick:(i,e=1/60)=>{for(let t=0;t<i;t++)for(let s=0;s<4;s++)nf(e/4)},set:(i,e)=>{Zi=i,ja=e,nc=!1},craters:ii};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
