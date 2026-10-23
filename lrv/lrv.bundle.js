/*! Dark Sky Almanac © 2026 Tyler Webb · Zion Canyon Light. All rights reserved. Third-party license notices are kept below. */
var kp=0,Lu=1,Bp=2;var Cr=1,Hp=2,Na=3,Ki=0,Hn=1,Dn=2,Yi=0,Ua=1,Du=2,Fu=3,Nu=4,Vp=5;var Pr=100,Gp=101,Wp=102,qp=103,Xp=104,jp=200,Kp=201,Yp=202,Jp=203,Uu=204,Ou=205,Zp=206,$p=207,Qp=208,em=209,tm=210,nm=211,im=212,sm=213,rm=214,Jc=0,Zc=1,$c=2,xa=3,Qc=4,el=5,tl=6,nl=7,zu=0,am=1,om=2,Ri=0,ku=1,Bu=2,Hu=3,Ho=4,Vu=5,Gu=6,Wu=7,_u="attached",cm="detached",qu=300,Zs=301,Ir=302,Oa=303,vl=304,Vo=306,qn=1e3,ui=1001,ba=1002,un=1003,Ml=1004;var Lr=1005;var tn=1006,za=1007;var si=1008;var Zn=1009,Xu=1010,ju=1011,ka=1012,Sl=1013,Ci=1014,ri=1015,Pi=1016,wl=1017,El=1018,Ba=1020,Ku=35902,Yu=35899,Ju=1021,Zu=1022,ai=1023,Gi=1026,$s=1027,Tl=1028,Al=1029,Qs=1030,Rl=1031;var Cl=1033,Go=33776,Wo=33777,qo=33778,Xo=33779,Pl=35840,Il=35841,Ll=35842,Dl=35843,Fl=36196,Nl=37492,Ul=37496,Ol=37488,zl=37489,jo=37490,kl=37491,Bl=37808,Hl=37809,Vl=37810,Gl=37811,Wl=37812,ql=37813,Xl=37814,jl=37815,Kl=37816,Yl=37817,Jl=37818,Zl=37819,$l=37820,Ql=37821,eh=36492,th=36494,nh=36495,ih=36283,sh=36284,Ko=36285,rh=36286;var yr=2300,vr=2301,jc=2302,yu=2303,vu=2400,Mu=2401,Su=2402,lm=2500;var $u=0,Yo=1,Ha=2,hm=3200,Qu=3201;var ah=0,um=1,fi="",Xt="srgb",zn="srgb-linear",Eo="linear",Pt="srgb";var Kc=7680;var dm=519,fm=512,pm=513,mm=514,oh=515,gm=516,xm=517,ch=518,bm=519,ed=35044;var td="300 es",wi=2e3,_a=2001;function G0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function W0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ya(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _m(){let i=ya("canvas");return i.style.display="block",i}var ep={},va=null;function To(...i){let e="THREE."+i.shift();va?va("log",e,...i):console.log(e,...i)}function ym(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=ym(i);let e="THREE."+i.shift();if(va)va("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=ym(i);let e="THREE."+i.shift();if(va)va("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _r(...i){let e=i.join(" ");e in ep||(ep[e]=!0,Pe(...i))}function vm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Mm={[Jc]:Zc,[$c]:tl,[Qc]:nl,[xa]:el,[Zc]:Jc,[tl]:$c,[nl]:Qc,[el]:xa},Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tp=1234567,So=Math.PI/180,Mr=180/Math.PI;function Ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function nd(i,e){return(i%e+e)%e}function q0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function X0(i,e,t){return i!==e?(t-i)/(e-i):0}function wo(i,e,t){return(1-t)*i+t*e}function j0(i,e,t,n){return wo(i,e,1-Math.exp(-t*n))}function K0(i,e=1){return e-Math.abs(nd(i,e*2)-e)}function Y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function J0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Z0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $0(i,e){return i+Math.random()*(e-i)}function Q0(i){return i*(.5-Math.random())}function ex(i){i!==void 0&&(tp=i);let e=tp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tx(i){return i*So}function nx(i){return i*Mr}function ix(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function sx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ax(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*h,l*u,o*c);break;case"YZY":i.set(l*u,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*u,o*d,o*c);break;case"XZX":i.set(o*d,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*d,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var id={DEG2RAD:So,RAD2DEG:Mr,generateUUID:Ei,clamp:ht,euclideanModulo:nd,mapLinear:q0,inverseLerp:X0,lerp:wo,damp:j0,pingpong:K0,smoothstep:Y0,smootherstep:J0,randInt:Z0,randFloat:$0,randFloatSpread:Q0,seededRandom:ex,degToRad:tx,radToDeg:nx,isPowerOfTwo:ix,ceilPowerOfTwo:sx,floorPowerOfTwo:rx,setQuaternionFromProperEuler:ax,normalize:Nt,denormalize:Si},We=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],u=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(h!==x||l!==u||c!==f||d!==m){let g=l*u+c*f+d*m+h*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let y=Math.acos(g),M=Math.sin(y);p=Math.sin(p*y)/M,o=Math.sin(o*y)/M,l=l*p+u*o,c=c*p+f*o,d=d*p+m*o,h=h*p+x*o}else{l=l*p+u*o,c=c*p+f*o,d=d*p+m*o,h=h*p+x*o;let y=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=y,c*=y,d*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+d*h+l*f-c*u,e[t+1]=l*m+d*u+c*h-o*f,e[t+2]=c*m+d*f+o*u-l*h,e[t+3]=d*m-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h-u*f*m;break;case"YXZ":this._x=u*d*h+c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h+u*f*m;break;case"ZXY":this._x=u*d*h-c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h-u*f*m;break;case"ZYX":this._x=u*d*h-c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h+u*f*m;break;case"YZX":this._x=u*d*h+c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h-u*f*m;break;case"XZY":this._x=u*d*h-c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h+u*f*m;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(np.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(np.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yh.copy(this).projectOnVector(e),this.sub(Yh)}reflect(e){return this.sub(Yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yh=new R,np=new gt,Ve=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],M=s[4],b=s[7],v=s[2],S=s[5],T=s[8];return r[0]=a*x+o*y+l*v,r[3]=a*g+o*M+l*S,r[6]=a*p+o*b+l*T,r[1]=c*x+d*y+h*v,r[4]=c*g+d*M+h*S,r[7]=c*p+d*b+h*T,r[2]=u*x+f*y+m*v,r[5]=u*g+f*M+m*S,r[8]=u*p+f*b+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,f=c*r-a*l,m=t*h+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(s*c-d*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jh.makeScale(e,t)),this}rotate(e){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jh.makeRotation(-e)),this}translate(e,t){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jh=new Ve,ip=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sp=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ox(){let i={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Pt&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Pt&&(s.r=ga(s.r),s.g=ga(s.g),s.b=ga(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zn]:{primaries:e,whitePoint:n,transfer:Eo,toXYZ:ip,fromXYZ:sp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:ip,fromXYZ:sp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}var rt=ox();function ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ga(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var na,il=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{na===void 0&&(na=ya("canvas")),na.width=e.width,na.height=e.height;let s=na.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=na}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ya("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ps(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ps(t[n]/255)*255):t[n]=ps(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cx=0,Ma=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zh(s[a].image)):r.push(Zh(s[a]))}else r=Zh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var lx=0,$h=new R,gn=class i extends Wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ui,s=ui,r=tn,a=si,o=ai,l=Zn,c=i.DEFAULT_ANISOTROPY,d=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ei(),this.name="",this.source=new Ma(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($h).x}get height(){return this.source.getSize($h).y}get depth(){return this.source.getSize($h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qn:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qn:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=qu;gn.DEFAULT_ANISOTROPY=1;var _t=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,b=(f+1)/2,v=(p+1)/2,S=(d+u)/4,T=(h+x)/4,_=(m+g)/4;return M>b&&M>v?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=T/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=_/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=T/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-x)/y,this.z=(u-d)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sl=class extends Wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new gn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ma(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ao=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qe=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,d,h,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,h,u,f,m,x,g)}set(e,t,n,s,r,a,o,l,c,d,h,u,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ia.setFromMatrixColumn(e,0).length(),r=1/ia.setFromMatrixColumn(e,1).length(),a=1/ia.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=a*d,f=a*h,m=o*d,x=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*d,f=l*h,m=c*d,x=c*h;t[0]=u+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-m,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*d,f=l*h,m=c*d,x=c*h;t[0]=u-x*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*d,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*d,f=a*h,m=o*d,x=o*h;t[0]=l*d,t[4]=m*c-f,t[8]=u*c+x,t[1]=l*h,t[5]=x*c+u,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*d,t[4]=x-u*h,t[8]=m*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+m,t[10]=u-x*h}else if(e.order==="XZY"){let u=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+x,t[5]=a*d,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*d,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hx,e,ux)}lookAt(e,t,n){let s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Us.crossVectors(n,ni),Us.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Us.crossVectors(n,ni)),Us.normalize(),Mc.crossVectors(ni,Us),s[0]=Us.x,s[4]=Mc.x,s[8]=ni.x,s[1]=Us.y,s[5]=Mc.y,s[9]=ni.y,s[2]=Us.z,s[6]=Mc.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],M=n[7],b=n[11],v=n[15],S=s[0],T=s[4],_=s[8],E=s[12],C=s[1],P=s[5],D=s[9],F=s[13],I=s[2],U=s[6],B=s[10],W=s[14],ie=s[3],X=s[7],J=s[11],ee=s[15];return r[0]=a*S+o*C+l*I+c*ie,r[4]=a*T+o*P+l*U+c*X,r[8]=a*_+o*D+l*B+c*J,r[12]=a*E+o*F+l*W+c*ee,r[1]=d*S+h*C+u*I+f*ie,r[5]=d*T+h*P+u*U+f*X,r[9]=d*_+h*D+u*B+f*J,r[13]=d*E+h*F+u*W+f*ee,r[2]=m*S+x*C+g*I+p*ie,r[6]=m*T+x*P+g*U+p*X,r[10]=m*_+x*D+g*B+p*J,r[14]=m*E+x*F+g*W+p*ee,r[3]=y*S+M*C+b*I+v*ie,r[7]=y*T+M*P+b*U+v*X,r[11]=y*_+M*D+b*B+v*J,r[15]=y*E+M*F+b*W+v*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],y=l*f-c*u,M=o*f-c*h,b=o*u-l*h,v=a*f-c*d,S=a*u-l*d,T=a*h-o*d;return t*(x*y-g*M+p*b)-n*(m*y-g*v+p*S)+s*(m*M-x*v+p*T)-r*(m*b-x*S+g*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],y=t*o-n*a,M=t*l-s*a,b=t*c-r*a,v=n*l-s*o,S=n*c-r*o,T=s*c-r*l,_=d*x-h*m,E=d*g-u*m,C=d*p-f*m,P=h*g-u*x,D=h*p-f*x,F=u*p-f*g,I=y*F-M*D+b*P+v*C-S*E+T*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return e[0]=(o*F-l*D+c*P)*U,e[1]=(s*D-n*F-r*P)*U,e[2]=(x*T-g*S+p*v)*U,e[3]=(u*S-h*T-f*v)*U,e[4]=(l*C-a*F-c*E)*U,e[5]=(t*F-s*C+r*E)*U,e[6]=(g*b-m*T-p*M)*U,e[7]=(d*T-u*b+f*M)*U,e[8]=(a*D-o*C+c*_)*U,e[9]=(n*C-t*D-r*_)*U,e[10]=(m*S-x*b+p*y)*U,e[11]=(h*b-d*S-f*y)*U,e[12]=(o*E-a*P-l*_)*U,e[13]=(t*P-n*E+s*_)*U,e[14]=(x*M-m*v-g*y)*U,e[15]=(d*v-h*M+u*y)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,f=r*d,m=r*h,x=a*d,g=a*h,p=o*h,y=l*c,M=l*d,b=l*h,v=n.x,S=n.y,T=n.z;return s[0]=(1-(x+p))*v,s[1]=(f+b)*v,s[2]=(m-M)*v,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(u+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+M)*T,s[9]=(g-y)*T,s[10]=(1-(u+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ia.set(s[0],s[1],s[2]).length(),o=ia.set(s[4],s[5],s[6]).length(),l=ia.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_i.copy(this);let c=1/a,d=1/o,h=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=d,_i.elements[5]*=d,_i.elements[6]*=d,_i.elements[8]*=h,_i.elements[9]*=h,_i.elements[10]*=h,t.setFromRotationMatrix(_i),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=wi,l=!1){let c=this.elements,d=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===wi)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===_a)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=wi,l=!1){let c=this.elements,d=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===wi)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===_a)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ia=new R,_i=new qe,hx=new R(0,0,0),ux=new R(1,1,1),Us=new R,Mc=new R,ni=new R,rp=new qe,ap=new gt,Ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var Sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dx=0,op=new R,sa=new gt,cs=new qe,Sc=new R,mo=new R,fx=new R,px=new gt,cp=new R(1,0,0),lp=new R(0,1,0),hp=new R(0,0,1),up={type:"added"},mx={type:"removed"},ra={type:"childadded",child:null},Qh={type:"childremoved",child:null},jt=class i extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Ti,n=new gt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ve}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sa.setFromAxisAngle(e,t),this.quaternion.multiply(sa),this}rotateOnWorldAxis(e,t){return sa.setFromAxisAngle(e,t),this.quaternion.premultiply(sa),this}rotateX(e){return this.rotateOnAxis(cp,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(hp,e)}translateOnAxis(e,t){return op.copy(e).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cp,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sc.copy(e):Sc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cs.lookAt(mo,Sc,this.up):cs.lookAt(Sc,mo,this.up),this.quaternion.setFromRotationMatrix(cs),s&&(cs.extractRotation(s.matrixWorld),sa.setFromRotationMatrix(cs),this.quaternion.premultiply(sa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(up),ra.child=e,this.dispatchEvent(ra),ra.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mx),Qh.child=e,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cs.multiply(e.parent.matrixWorld)),e.applyMatrix4(cs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(up),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jt.DEFAULT_UP=new R(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gx={type:"move"},wa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},wc={h:0,s:0,l:0};function eu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=nd(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=eu(a,r,e+1/3),this.g=eu(a,r,e),this.b=eu(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=Sm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return rt.workingToColorSpace(Ln.copy(this),e),Math.round(ht(Ln.r*255,0,255))*65536+Math.round(ht(Ln.g*255,0,255))*256+Math.round(ht(Ln.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Xt){rt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,s=Ln.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Os),this.setHSL(Os.h+e,Os.s+t,Os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Os),e.getHSL(wc);let n=wo(Os.h,wc.h,t),s=wo(Os.s,wc.s,t),r=wo(Os.l,wc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new Ue;Ue.NAMES=Sm;var Ea=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yi=new R,ls=new R,tu=new R,hs=new R,aa=new R,oa=new R,dp=new R,nu=new R,iu=new R,su=new R,ru=new _t,au=new _t,ou=new _t,Vs=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yi.subVectors(e,t),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yi.subVectors(s,t),ls.subVectors(n,t),tu.subVectors(e,t);let a=yi.dot(yi),o=yi.dot(ls),l=yi.dot(tu),c=ls.dot(ls),d=ls.dot(tu),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,f=(c*l-o*d)*u,m=(a*d-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,hs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hs.x),l.addScaledVector(a,hs.y),l.addScaledVector(o,hs.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ru.setScalar(0),au.setScalar(0),ou.setScalar(0),ru.fromBufferAttribute(e,t),au.fromBufferAttribute(e,n),ou.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ru,r.x),a.addScaledVector(au,r.y),a.addScaledVector(ou,r.z),a}static isFrontFacing(e,t,n,s){return yi.subVectors(n,t),ls.subVectors(e,t),yi.cross(ls).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),yi.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;aa.subVectors(s,n),oa.subVectors(r,n),nu.subVectors(e,n);let l=aa.dot(nu),c=oa.dot(nu);if(l<=0&&c<=0)return t.copy(n);iu.subVectors(e,s);let d=aa.dot(iu),h=oa.dot(iu);if(d>=0&&h<=d)return t.copy(s);let u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(aa,a);su.subVectors(e,r);let f=aa.dot(su),m=oa.dot(su);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(oa,o);let g=d*m-f*h;if(g<=0&&h-d>=0&&f-m>=0)return dp.subVectors(r,s),o=(h-d)/(h-d+(f-m)),t.copy(s).addScaledVector(dp,o);let p=1/(g+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(aa,a).addScaledVector(oa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ec.copy(n.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),Tc.subVectors(this.max,go),ca.subVectors(e.a,go),la.subVectors(e.b,go),ha.subVectors(e.c,go),zs.subVectors(la,ca),ks.subVectors(ha,la),mr.subVectors(ca,ha);let t=[0,-zs.z,zs.y,0,-ks.z,ks.y,0,-mr.z,mr.y,zs.z,0,-zs.x,ks.z,0,-ks.x,mr.z,0,-mr.x,-zs.y,zs.x,0,-ks.y,ks.x,0,-mr.y,mr.x,0];return!cu(t,ca,la,ha,Tc)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,ca,la,ha,Tc))?!1:(Ac.crossVectors(zs,ks),t=[Ac.x,Ac.y,Ac.z],cu(t,ca,la,ha,Tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(us),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},us=[new R,new R,new R,new R,new R,new R,new R,new R],vi=new R,Ec=new nn,ca=new R,la=new R,ha=new R,zs=new R,ks=new R,mr=new R,go=new R,Tc=new R,Ac=new R,gr=new R;function cu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gr.fromArray(i,r);let o=s.x*Math.abs(gr.x)+s.y*Math.abs(gr.y)+s.z*Math.abs(gr.z),l=e.dot(gr),c=t.dot(gr),d=n.dot(gr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var mn=new R,Rc=new We,xx=0,nt=class extends Wi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ed,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rc.fromBufferAttribute(this,t),Rc.applyMatrix3(e),this.setXY(t,Rc.x,Rc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Sr=class extends nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ro=class extends nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var bt=class extends nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},bx=new nn,xo=new R,lu=new R,jn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);let t=xo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(lu)),this.expandByPoint(xo.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_x=0,hi=new qe,hu=new jt,ua=new R,ii=new nn,bo=new nn,Mn=new R,It=class i extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G0(e)?Ro:Sr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];bo.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(ii.min,bo.min),ii.expandByPoint(Mn),Mn.addVectors(ii.max,bo.max),ii.expandByPoint(Mn)):(ii.expandByPoint(bo.min),ii.expandByPoint(bo.max))}ii.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Mn.fromBufferAttribute(o,c),l&&(ua.fromBufferAttribute(e,c),Mn.add(ua)),s=Math.max(s,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new R,l[_]=new R;let c=new R,d=new R,h=new R,u=new We,f=new We,m=new We,x=new R,g=new R;function p(_,E,C){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),d.sub(c),h.sub(c),f.sub(u),m.sub(u);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(d).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(P),o[_].add(x),o[E].add(x),o[C].add(x),l[_].add(g),l[E].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,E=y.length;_<E;++_){let C=y[_],P=C.start,D=C.count;for(let F=P,I=P+D;F<I;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new R,b=new R,v=new R,S=new R;function T(_){v.fromBufferAttribute(s,_),S.copy(v);let E=o[_];M.copy(E),M.sub(v.multiplyScalar(v.dot(E))).normalize(),b.crossVectors(S,E);let P=b.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,P)}for(let _=0,E=y.length;_<E;++_){let C=y[_],P=C.start,D=C.count;for(let F=P,I=P+D;F<I;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,d=new R,h=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d),f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*d;for(let p=0;p<d;p++)u[m++]=c[f++]}return new nt(u,d,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){let u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){let f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ta=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ed,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},On=new R,Aa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){To("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){To("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},uu=new R,yx=new R,vx=new Ve,Mi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=uu.subVectors(n,t).cross(yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(uu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vx.getNormalMatrix(e),s=this.coplanarPoint(uu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mx=0,Kn=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Ua,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Ou,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kc,this.stencilZFail=Kc,this.stencilZPass=Kc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new We().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ds=new R,du=new R,Cc=new R,Pc=new R,Gs=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ds)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ds.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ds.copy(this.origin).addScaledVector(this.direction,t),ds.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){du.copy(e).add(t).multiplyScalar(.5),Cc.copy(t).sub(e).normalize(),Pc.copy(this.origin).sub(du);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Cc),o=Pc.dot(this.direction),l=-Pc.dot(Cc),c=Pc.lengthSq(),d=Math.abs(1-a*a),h,u,f,m;if(d>0)if(h=a*l-o,u=a*o-l,m=r*d,h>=0)if(u>=-m)if(u<=m){let x=1/d;h*=x,u*=x,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(du).addScaledVector(Cc,u),f}intersectSphere(e,t){if(e.radius<0)return null;ds.subVectors(e.center,this.origin);let n=ds.dot(this.direction),s=ds.dot(ds)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ds)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,u=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,y=n.y-a.y,M=n.z-a.z,b=Math.abs(l),v=Math.abs(c),S=Math.abs(d),T,_,E,C,P,D,F,I,U,B,W,ie;if(b>=v&&b>=S?(E=l,D=h,U=m,ie=p,l>=0?(T=c,_=d,C=u,P=f,F=x,I=g,B=y,W=M):(T=d,_=c,C=f,P=u,F=g,I=x,B=M,W=y)):v>=S?(E=c,D=u,U=x,ie=y,c>=0?(T=d,_=l,C=f,P=h,F=g,I=m,B=M,W=p):(T=l,_=d,C=h,P=f,F=m,I=g,B=p,W=M)):(E=d,D=f,U=g,ie=M,d>=0?(T=l,_=c,C=h,P=u,F=m,I=x,B=p,W=y):(T=c,_=l,C=u,P=h,F=x,I=m,B=y,W=p)),E===0)return null;let X=T/E,J=_/E,ee=1/E,ye=C-X*D,we=P-J*D,At=F-X*U,at=I-J*U,dt=B-X*ie,Y=W-J*ie,ne=dt*at-Y*At,ve=ye*Y-we*dt,Be=At*we-at*ye;if(s){if(ne<0||ve<0||Be<0)return null}else if((ne<0||ve<0||Be<0)&&(ne>0||ve>0||Be>0))return null;let _e=ne+ve+Be;if(_e===0)return null;let Ze=ee*(ne*D+ve*U+Be*ie);return(_e>0?Ze<0:Ze>0)?null:this.at(Ze/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kn=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fp=new qe,xr=new Gs,Ic=new jn,pp=new R,Lc=new R,Dc=new R,Fc=new R,fu=new R,Nc=new R,mp=new R,Uc=new R,Ye=class extends jt{constructor(e=new It,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Nc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],h=r[l];d!==0&&(fu.fromBufferAttribute(h,e),a?Nc.addScaledVector(fu,d):Nc.addScaledVector(fu.sub(t),d))}t.add(Nc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ic.copy(n.boundingSphere),Ic.applyMatrix4(r),xr.copy(e.ray).recast(e.near),!(Ic.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Ic,pp)===null||xr.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(fp.copy(r).invert(),xr.copy(e.ray).applyMatrix4(fp),!(n.boundingBox!==null&&xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,v=M;b<v;b+=3){let S=o.getX(b),T=o.getX(b+1),_=o.getX(b+2);s=Oc(this,p,e,n,c,d,h,S,T,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=o.getX(g),M=o.getX(g+1),b=o.getX(g+2);s=Oc(this,a,e,n,c,d,h,y,M,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,v=M;b<v;b+=3){let S=b,T=b+1,_=b+2;s=Oc(this,p,e,n,c,d,h,S,T,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,M=g+1,b=g+2;s=Oc(this,a,e,n,c,d,h,y,M,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Sx(i,e,t,n,s,r,a,o){let l;if(e.side===Hn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ki,o),l===null)return null;Uc.copy(o),Uc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Uc);return c<t.near||c>t.far?null:{distance:c,point:Uc.clone(),object:i}}function Oc(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Lc),i.getVertexPosition(l,Dc),i.getVertexPosition(c,Fc);let d=Sx(i,e,t,n,Lc,Dc,Fc,mp);if(d){let h=new R;Vs.getBarycoord(mp,Lc,Dc,Fc,h),s&&(d.uv=Vs.getInterpolatedAttribute(s,o,l,c,h,new We)),r&&(d.uv1=Vs.getInterpolatedAttribute(r,o,l,c,h,new We)),a&&(d.normal=Vs.getInterpolatedAttribute(a,o,l,c,h,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};Vs.getNormal(Lc,Dc,Fc,u.normal),d.face=u,d.barycoord=h}return d}var _o=new _t,gp=new _t,xp=new _t,wx=new _t,bp=new qe,zc=new R,pu=new jn,_p=new qe,mu=new Gs,Ws=class extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_u,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zc),this.boundingBox.expandByPoint(zc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zc),this.boundingSphere.expandByPoint(zc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pu.copy(this.boundingSphere),pu.applyMatrix4(s),e.ray.intersectsSphere(pu)!==!1&&(_p.copy(s).invert(),mu.copy(e.ray).applyMatrix4(_p),!(this.boundingBox!==null&&mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_u?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;gp.fromBufferAttribute(s.attributes.skinIndex,e),xp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(_o.copy(t),t.set(0,0,0,0)):(_o.set(...t,1),t.set(0,0,0)),_o.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=xp.getComponent(r);if(a!==0){let o=gp.getComponent(r);bp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(wx.copy(_o).applyMatrix4(bp),a)}}return t.isVector4&&(t.w=_o.w),t.applyMatrix4(this.bindMatrixInverse)}},ms=class extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}},qs=class extends gn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=un,d=un,h,u){super(null,a,o,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yp=new qe,Ex=new qe,Xs=class i{constructor(e=[],t=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ex;yp.multiplyMatrices(o,t[r]),yp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qs(t,e,e,ai,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Pe("Skeleton: No bone found with UUID:",r),a=new ms),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},gs=class extends nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},da=new qe,vp=new qe,kc=[],Mp=new nn,Tx=new qe,yo=new Ye,vo=new jn,wr=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,da),Mp.copy(e.boundingBox).applyMatrix4(da),this.boundingBox.union(Mp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,da),vo.copy(e.boundingSphere).applyMatrix4(da),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,da),vp.multiplyMatrices(n,da),yo.matrixWorld=vp,yo.raycast(e,kc);for(let a=0,o=kc.length;a<o;a++){let l=kc[a];l.instanceId=r,l.object=this,t.push(l)}kc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qs(new Float32Array(s*this.count),s,this.count,Tl,ri));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},br=new jn,Ax=new We(.5,.5),Bc=new R,Ra=class{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],M=r[13],b=r[14],v=r[15];if(s[0].setComponents(c-a,f-d,p-m,v-y).normalize(),s[1].setComponents(c+a,f+d,p+m,v+y).normalize(),s[2].setComponents(c+o,f+h,p+x,v+M).normalize(),s[3].setComponents(c-o,f-h,p-x,v-M).normalize(),n)s[4].setComponents(l,u,g,b).normalize(),s[5].setComponents(c-l,f-u,p-g,v-b).normalize();else if(s[4].setComponents(c-l,f-u,p-g,v-b).normalize(),t===wi)s[5].setComponents(c+l,f+u,p+g,v+b).normalize();else if(t===_a)s[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);let t=Ax.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Bc.x=s.normal.x>0?e.max.x:e.min.x,Bc.y=s.normal.y>0?e.max.y:e.min.y,Bc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ca=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},al=new R,ol=new R,Sp=new qe,Mo=new Gs,Hc=new jn,gu=new R,wp=new R,Er=class extends jt{constructor(e=new It,t=new Ca){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)al.fromBufferAttribute(t,s-1),ol.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=al.distanceTo(ol);e.setAttribute("lineDistance",new bt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hc.copy(n.boundingSphere),Hc.applyMatrix4(s),Hc.radius+=r,e.ray.intersectsSphere(Hc)===!1)return;Sp.copy(s).invert(),Mo.copy(e.ray).applyMatrix4(Sp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=d.getX(x),y=d.getX(x+1),M=Vc(this,e,Mo,l,p,y,x);M&&t.push(M)}if(this.isLineLoop){let x=d.getX(m-1),g=d.getX(f),p=Vc(this,e,Mo,l,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=Vc(this,e,Mo,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Vc(this,e,Mo,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(al.fromBufferAttribute(o,s),ol.fromBufferAttribute(o,r),t.distanceSqToSegment(al,ol,gu,wp)>n)return;gu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(gu);if(!(c<e.near||c>e.far))return{distance:c,point:wp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ep=new R,Tp=new R,Co=class extends Er{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ep.fromBufferAttribute(t,s),Tp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ep.distanceTo(Tp);e.setAttribute("lineDistance",new bt(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Po=class extends Er{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xs=class extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ap=new qe,wu=new Gs,Gc=new jn,Wc=new R,bs=class extends jt{constructor(e=new It,t=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gc.copy(n.boundingSphere),Gc.applyMatrix4(s),Gc.radius+=r,e.ray.intersectsSphere(Gc)===!1)return;Ap.copy(s).invert(),wu.copy(e.ray).applyMatrix4(Ap);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,x=f;m<x;m++){let g=c.getX(m);Wc.fromBufferAttribute(h,g),Rp(Wc,g,l,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=u,x=f;m<x;m++)Wc.fromBufferAttribute(h,m),Rp(Wc,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rp(i,e,t,n,s,r,a){let o=wu.distanceSqToPoint(i);if(o<t){let l=new R;wu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Io=class extends gn{constructor(e=[],t=Zs,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ai=class extends gn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var js=class extends gn{constructor(e,t,n=Ci,s,r,a,o=un,l=un,c,d=Gi,h=1){if(d!==Gi&&d!==$s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ma(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},cl=class extends js{constructor(e,t=Ci,n=Zs,s,r,a=un,o=un,l,c=Gi){let d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lo=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},di=class i extends It{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],h=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(h,2));function m(x,g,p,y,M,b,v,S,T,_,E){let C=b/T,P=v/_,D=b/2,F=v/2,I=S/2,U=T+1,B=_+1,W=0,ie=0,X=new R;for(let J=0;J<B;J++){let ee=J*P-F;for(let ye=0;ye<U;ye++){let we=ye*C-D;X[x]=we*y,X[g]=ee*M,X[p]=I,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[p]=S>0?1:-1,d.push(X.x,X.y,X.z),h.push(ye/T),h.push(1-J/_),W+=1}}for(let J=0;J<_;J++)for(let ee=0;ee<T;ee++){let ye=u+ee+U*J,we=u+ee+U*(J+1),At=u+(ee+1)+U*(J+1),at=u+(ee+1)+U*J;l.push(ye,we,at),l.push(we,At,at),ie+=6}o.addGroup(f,ie,E),f+=ie,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _s=class i extends It{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],u=[],f=[],m=0,x=[],g=n/2,p=0;y(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(f,2));function y(){let b=new R,v=new R,S=0,T=(t-e)/n;for(let _=0;_<=r;_++){let E=[],C=_/r,P=C*(t-e)+e;for(let D=0;D<=s;D++){let F=D/s,I=F*l+o,U=Math.sin(I),B=Math.cos(I);v.x=P*U,v.y=-C*n+g,v.z=P*B,h.push(v.x,v.y,v.z),b.set(U,T,B).normalize(),u.push(b.x,b.y,b.z),f.push(F,1-C),E.push(m++)}x.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let C=x[E][_],P=x[E+1][_],D=x[E+1][_+1],F=x[E][_+1];(e>0||E!==0)&&(d.push(C,P,F),S+=3),(t>0||E!==r-1)&&(d.push(P,D,F),S+=3)}c.addGroup(p,S,0),p+=S}function M(b){let v=m,S=new We,T=new R,_=0,E=b===!0?e:t,C=b===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),m++;let P=m;for(let D=0;D<=s;D++){let I=D/s*l+o,U=Math.cos(I),B=Math.sin(I);T.x=E*B,T.y=g*C,T.z=E*U,h.push(T.x,T.y,T.z),u.push(0,C,0),S.x=U*.5+.5,S.y=B*.5*C+.5,f.push(S.x,S.y),m++}for(let D=0;D<s;D++){let F=v+D,I=P+D;b===!0?d.push(I,I+1,F):d.push(I+1,I,F),_+=3}c.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ll=class i extends It{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new R,b=new R,v=new R;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],b),f(t[S+2],v),l(M,b,v,y)}function l(y,M,b,v){let S=v+1,T=[];for(let _=0;_<=S;_++){T[_]=[];let E=y.clone().lerp(b,_/S),C=M.clone().lerp(b,_/S),P=S-_;for(let D=0;D<=P;D++)D===0&&_===S?T[_][D]=E:T[_][D]=E.clone().lerp(C,D/P)}for(let _=0;_<S;_++)for(let E=0;E<2*(S-_)-1;E++){let C=Math.floor(E/2);E%2===0?(u(T[_][C+1]),u(T[_+1][C]),u(T[_][C])):(u(T[_][C+1]),u(T[_+1][C+1]),u(T[_+1][C]))}}function c(y){let M=new R;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(y),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function d(){let y=new R;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let b=g(y)/2/Math.PI+.5,v=p(y)/Math.PI+.5;a.push(b,1-v)}m(),h()}function h(){for(let y=0;y<a.length;y+=6){let M=a[y+0],b=a[y+2],v=a[y+4],S=Math.max(M,b,v),T=Math.min(M,b,v);S>.9&&T<.1&&(M<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),v<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,M){let b=y*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function m(){let y=new R,M=new R,b=new R,v=new R,S=new We,T=new We,_=new We;for(let E=0,C=0;E<r.length;E+=9,C+=6){y.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),b.set(r[E+6],r[E+7],r[E+8]),S.set(a[C+0],a[C+1]),T.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),v.copy(y).add(M).add(b).divideScalar(3);let P=g(v);x(S,C+0,y,P),x(T,C+2,M,P),x(_,C+4,b,P)}}function x(y,M,b,v){v<0&&y.x===1&&(a[M]=y.x-1),b.x===0&&b.z===0&&(a[M]=v/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Tr=class i extends ll{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var qi=class i extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=e/o,u=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<d;p++){let y=p*u-a;for(let M=0;M<c;M++){let b=M*h-r;m.push(b,-y,0),x.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let M=y+c*p,b=y+c*(p+1),v=y+1+c*(p+1),S=y+1+c*p;f.push(M,b,S),f.push(b,v,S)}this.setIndex(f),this.setAttribute("position",new bt(m,3)),this.setAttribute("normal",new bt(x,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Pa=class i extends It{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],d=[],h=e,u=(t-e)/s,f=new R,m=new We;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,d.push(m.x,m.y)}h+=u}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,M=y,b=y+n+1,v=y+n+2,S=y+1;o.push(M,b,S),o.push(b,v,S)}}this.setIndex(o),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Do=class i extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],h=new R,u=new R,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],M=p/n,b=a+M*o,v=e*Math.cos(b),S=Math.sqrt(e*e-v*v),T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let _=0;_<=t;_++){let E=_/t,C=s+E*r;h.x=-S*Math.cos(C),h.y=v,h.z=S*Math.sin(C),m.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),g.push(E+T,1-M),y.push(c++)}d.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let M=d[p][y+1],b=d[p][y],v=d[p+1][y],S=d[p+1][y+1];(p!==0||a>0)&&f.push(M,b,S),(p!==n-1||l<Math.PI)&&f.push(b,v,S)}this.setIndex(f),this.setAttribute("position",new bt(m,3)),this.setAttribute("normal",new bt(x,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Cp(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Cp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Fn(i){let e={};for(let t=0;t<i.length;t++){let n=Dr(i[t]);for(let s in n)e[s]=n[s]}return e}function Cp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var wm={clone:Dr,merge:Fn},Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new We().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},hl=class extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},sn=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yn=class extends sn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ia=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ul=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Ix(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Pp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Lx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Xi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends Xi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mu:r=e,o=2*t-n;break;case Su:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mu:a=e,l=2*n-t;break;case Su:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,y=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,M=(-1-f)*g+(1.5+f)*x+.5*m,b=f*g-f*x;for(let v=0;v!==o;++v)r[v]=p*a[d+v]+y*a[c+v]+M*a[l+v]+b*a[h+v];return r}},fl=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[c+u]*h+a[l+u]*d;return r}},pl=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ml=class extends Xi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,h=this.outTangents;if(!d||!h){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let u=o*2,f=e-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],p=f*u+m*2,y=h[p],M=h[p+1],b=e*u+m*2,v=d[b],S=d[b+1],T=Fx(n,t,y,v,s);r[m]=Em(T,x,M,S,g)}return r}};function Em(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Dx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Fx(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Em(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Dx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Jn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Yc(e.settings)&&(n.settings={inTangents:Hs(e.settings.inTangents,Array),outTangents:Hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case jc:t=this.InterpolantFactoryMethodSmooth;break;case yu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return jc;case this.InterpolantFactoryMethodBezier:return yu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Yc(this.settings)&&(Ip(this.settings.inTangents,e),Ip(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){He("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&W0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,u=h-n,f=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[u+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Yc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ip(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=vr;var ys=class extends Jn{constructor(e,t,n){super(e,t,n)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=yr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};Fo.prototype.ValueTypeName="color";var vs=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};vs.prototype.ValueTypeName="number";var gl=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)gt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ms=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}};Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends Jn{constructor(e,t,n){super(e,t,n)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=yr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Ks=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};Ks.prototype.ValueTypeName="vector";var No=class{constructor(e="",t=-1,n=[],s=lm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ei(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ux(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let d=Ix(l);l=Pp(l,1,d),c=Pp(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new vs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],d=c.name.match(r);if(d&&d.length>1){let h=d[1],u=s[h];u||(s[h]=u=[]),u.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Nx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return Ks;case"color":return Fo;case"quaternion":return Ms;case"bool":case"boolean":return ys;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ux(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Nx(i.type);if(i.times===void 0){let n=[],s=[];Lx(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Yc(i.settings)&&(t.settings={inTangents:Hs(i.settings.inTangents,Float32Array),outTangents:Hs(i.settings.outTangents,Float32Array)}),t}var Vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Lp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Lp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Lp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var xl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tm=new xl,ji=class{constructor(e){this.manager=e!==void 0?e:Tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var fs={},Eu=class extends Error{constructor(e,t){super(e),this.response=t}},La=class extends ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(fs[e]!==void 0){fs[e].push({onLoad:t,onProgress:n,onError:s});return}fs[e]=[],fs[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=fs[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0,x=0,g=new ReadableStream({start(p){y();function y(){h.read().then(({done:M,value:b})=>{if(M)p.close();else{x+=b.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let S=0,T=d.length;S<T;S++){let _=d[S];_.onProgress&&_.onProgress(v)}p.enqueue(b),y()}},M=>{p.error(M)})}}});return new Response(g)}else throw new Eu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Vi.add(`file:${e}`,c);let d=fs[e];delete fs[e];for(let h=0,u=d.length;h<u;h++){let f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let d=fs[e];if(d===void 0)throw this.manager.itemError(e),c;delete fs[e];for(let h=0,u=d.length;h<u;h++){let f=d[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fa=new WeakMap,bl=class extends ji{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=fa.get(a);h===void 0&&(h=[],fa.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=ya("img");function l(){d(),t&&t(this);let h=fa.get(this)||[];for(let u=0;u<h.length;u++){let f=h[u];f.onLoad&&f.onLoad(this)}fa.delete(this),r.manager.itemEnd(e)}function c(h){d(),s&&s(h),Vi.remove(`image:${e}`);let u=fa.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(h)}fa.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ar=class extends ji{constructor(e){super(e)}load(e,t,n,s){let r=new gn,a=new bl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Rr=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Da=class extends Rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xu=new qe,Dp=new R,Fp=new R,Fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){xu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===_a||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qc=new R,Xc=new gt,Hi=new R,Uo=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qc,Xc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Xc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qc,Xc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Xc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bs=new R,Np=new We,Up=new We,hn=class extends Uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z)}getViewSize(e,t){return this.getViewBounds(e,Np,Up),t.subVectors(Up,Np)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tu=class extends Fa{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Oo=class extends Rr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Tu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Au=class extends Fa{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},zo=class extends Rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Au}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ys=class extends Uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ru=class extends Fa{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ws=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var bu=new WeakMap,ko=class extends ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{bu.has(a)===!0?(s&&s(bu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),bu.set(l,c),Vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Vi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var pa=-90,ma=1,_l=class extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(pa,ma,e,t);s.layers=this.layers,this.add(s);let r=new hn(pa,ma,e,t);r.layers=this.layers,this.add(r);let a=new hn(pa,ma,e,t);a.layers=this.layers,this.add(a);let o=new hn(pa,ma,e,t);o.layers=this.layers,this.add(o);let l=new hn(pa,ma,e,t);l.layers=this.layers,this.add(l);let c=new hn(pa,ma,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},yl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rd="\\[\\]\\.:\\/",Ox=new RegExp("["+rd+"]","g"),ad="[^"+rd+"]",zx="[^"+rd.replace("\\.","")+"]",kx=/((?:WC+[\/:])*)/.source.replace("WC",ad),Bx=/(WCOD+)?/.source.replace("WCOD",zx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ad),Vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ad),Gx=new RegExp("^"+kx+Bx+Hx+Vx+"$"),Wx=["material","materials","bones","map"],Cu=class{constructor(e,t,n){let s=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ox,"")}static parseTrackName(e){let t=Gx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=Cu;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z1=new Float32Array(1);var Op=new qe,Bo=class{constructor(e,t,n=0,s=1/0){this.ray=new Gs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Op.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Op),this}intersectObject(e,t=!0,n=[]){return Pu(e,this,n,t),n.sort(zp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Pu(e[s],this,n,t);return n.sort(zp),n}};function zp(i,e){return i.distance-e.distance}function Pu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Pu(r[a],e,t,!0)}}var Iu=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function od(i,e,t,n){let s=qx(n);switch(t){case Ju:return i*e;case Tl:return i*e/s.components*s.byteLength;case Al:return i*e/s.components*s.byteLength;case Qs:return i*e*2/s.components*s.byteLength;case Rl:return i*e*2/s.components*s.byteLength;case Zu:return i*e*3/s.components*s.byteLength;case ai:return i*e*4/s.components*s.byteLength;case Cl:return i*e*4/s.components*s.byteLength;case Go:case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:case Dl:return Math.max(i,16)*Math.max(e,8)/4;case Pl:case Ll:return Math.max(i,8)*Math.max(e,8)/2;case Fl:case Nl:case Ol:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ul:case jo:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eh:case th:case nh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ih:case sh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ko:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qx(i){switch(i){case Zn:case Xu:return{byteLength:1,components:1};case ka:case ju:case Pi:return{byteLength:2,components:1};case wl:case El:return{byteLength:2,components:4};case Ci:case Sl:case ri:return{byteLength:4,components:1};case Ku:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Km(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jx(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<h.length;f++){let m=h[u],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,h[u]=x)}h.length=u+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yx=`#ifdef USE_ALPHAHASH
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
#endif`,Jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eb=`#ifdef USE_AOMAP
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
#endif`,tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nb=`#ifdef USE_BATCHING
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
#endif`,ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ob=`#ifdef USE_IRIDESCENCE
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
#endif`,cb=`#ifdef USE_BUMPMAP
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
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xb=`#define PI 3.141592653589793
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
} // validated`,bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_b=`vec3 transformedNormal = objectNormal;
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
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nb=`#ifdef USE_GRADIENTMAP
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
}`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qb=`PhysicalMaterial material;
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
#endif`,Xb=`uniform sampler2D dfgLUT;
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
}`,jb=`
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s_=`#if defined( USE_POINTS_UV )
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
#endif`,r_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h_=`#ifdef USE_MORPHTARGETS
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
#endif`,u_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x_=`#ifdef USE_NORMALMAP
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
#endif`,b_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,__=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D_=`float getShadowMask() {
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
}`,F_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,U_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O_=`#ifdef USE_SKINNING
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
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`#include <common>
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
}`,ty=`#if DEPTH_PACKING == 3200
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
}`,ny=`#define DISTANCE
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
}`,iy=`#define DISTANCE
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`uniform float scale;
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
}`,oy=`uniform vec3 diffuse;
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
}`,cy=`#include <common>
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
}`,ly=`uniform vec3 diffuse;
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
}`,hy=`#define LAMBERT
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
}`,uy=`#define LAMBERT
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
}`,dy=`#define MATCAP
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
}`,fy=`#define MATCAP
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
}`,py=`#define NORMAL
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
}`,my=`#define NORMAL
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
}`,gy=`#define PHONG
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
}`,xy=`#define PHONG
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
}`,by=`#define STANDARD
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
}`,_y=`#define STANDARD
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
}`,yy=`#define TOON
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
}`,vy=`#define TOON
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
}`,My=`uniform float size;
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
}`,Sy=`uniform vec3 diffuse;
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
}`,wy=`#include <common>
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
}`,Ey=`uniform vec3 color;
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
}`,Ty=`uniform float rotation;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Kx,alphahash_pars_fragment:Yx,alphamap_fragment:Jx,alphamap_pars_fragment:Zx,alphatest_fragment:$x,alphatest_pars_fragment:Qx,aomap_fragment:eb,aomap_pars_fragment:tb,batching_pars_vertex:nb,batching_vertex:ib,begin_vertex:sb,beginnormal_vertex:rb,bsdfs:ab,iridescence_fragment:ob,bumpmap_pars_fragment:cb,clipping_planes_fragment:lb,clipping_planes_pars_fragment:hb,clipping_planes_pars_vertex:ub,clipping_planes_vertex:db,color_fragment:fb,color_pars_fragment:pb,color_pars_vertex:mb,color_vertex:gb,common:xb,cube_uv_reflection_fragment:bb,defaultnormal_vertex:_b,displacementmap_pars_vertex:yb,displacementmap_vertex:vb,emissivemap_fragment:Mb,emissivemap_pars_fragment:Sb,colorspace_fragment:wb,colorspace_pars_fragment:Eb,envmap_fragment:Tb,envmap_common_pars_fragment:Ab,envmap_pars_fragment:Rb,envmap_pars_vertex:Cb,envmap_physical_pars_fragment:Bb,envmap_vertex:Pb,fog_vertex:Ib,fog_pars_vertex:Lb,fog_fragment:Db,fog_pars_fragment:Fb,gradientmap_pars_fragment:Nb,lightmap_pars_fragment:Ub,lights_lambert_fragment:Ob,lights_lambert_pars_fragment:zb,lights_pars_begin:kb,lights_toon_fragment:Hb,lights_toon_pars_fragment:Vb,lights_phong_fragment:Gb,lights_phong_pars_fragment:Wb,lights_physical_fragment:qb,lights_physical_pars_fragment:Xb,lights_fragment_begin:jb,lights_fragment_maps:Kb,lights_fragment_end:Yb,lightprobes_pars_fragment:Jb,logdepthbuf_fragment:Zb,logdepthbuf_pars_fragment:$b,logdepthbuf_pars_vertex:Qb,logdepthbuf_vertex:e_,map_fragment:t_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:s_,metalnessmap_fragment:r_,metalnessmap_pars_fragment:a_,morphinstance_vertex:o_,morphcolor_vertex:c_,morphnormal_vertex:l_,morphtarget_pars_vertex:h_,morphtarget_vertex:u_,normal_fragment_begin:d_,normal_fragment_maps:f_,normal_pars_fragment:p_,normal_pars_vertex:m_,normal_vertex:g_,normalmap_pars_fragment:x_,clearcoat_normal_fragment_begin:b_,clearcoat_normal_fragment_maps:__,clearcoat_pars_fragment:y_,iridescence_pars_fragment:v_,opaque_fragment:M_,packing:S_,premultiplied_alpha_fragment:w_,project_vertex:E_,dithering_fragment:T_,dithering_pars_fragment:A_,roughnessmap_fragment:R_,roughnessmap_pars_fragment:C_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:I_,shadowmap_vertex:L_,shadowmask_pars_fragment:D_,skinbase_vertex:F_,skinning_pars_vertex:N_,skinning_vertex:U_,skinnormal_vertex:O_,specularmap_fragment:z_,specularmap_pars_fragment:k_,tonemapping_fragment:B_,tonemapping_pars_fragment:H_,transmission_fragment:V_,transmission_pars_fragment:G_,uv_pars_fragment:W_,uv_pars_vertex:q_,uv_vertex:X_,worldpos_vertex:j_,background_vert:K_,background_frag:Y_,backgroundCube_vert:J_,backgroundCube_frag:Z_,cube_vert:$_,cube_frag:Q_,depth_vert:ey,depth_frag:ty,distance_vert:ny,distance_frag:iy,equirect_vert:sy,equirect_frag:ry,linedashed_vert:ay,linedashed_frag:oy,meshbasic_vert:cy,meshbasic_frag:ly,meshlambert_vert:hy,meshlambert_frag:uy,meshmatcap_vert:dy,meshmatcap_frag:fy,meshnormal_vert:py,meshnormal_frag:my,meshphong_vert:gy,meshphong_frag:xy,meshphysical_vert:by,meshphysical_frag:_y,meshtoon_vert:yy,meshtoon_frag:vy,points_vert:My,points_frag:Sy,shadow_vert:wy,shadow_frag:Ey,sprite_vert:Ty,sprite_frag:Ay},pe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Zi={basic:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Fn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Fn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Fn([pe.points,pe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Fn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Fn([pe.common,pe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Fn([pe.sprite,pe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Fn([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Fn([pe.lights,pe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Zi.physical={uniforms:Fn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var lh={r:0,b:0,g:0},Ry=new qe,Ym=new Ve;Ym.set(-1,0,0,0,1,0,0,0,1);function Cy(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,l,c,d=null,h=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let b=y.backgroundBlurriness>0;M=e.get(M,b)}return M}function m(y){let M=!1,b=f(y);b===null?g(a,o):b&&b.isColor&&(g(b,1),M=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,M){let b=f(M);b&&(b.isCubeTexture||b.mapping===Vo)?(c===void 0&&(c=new Ye(new di(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Dr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ym),c.material.toneMapped=rt.getTransfer(b.colorSpace)!==Pt,(d!==b||h!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ye(new qi(2,2),new Bn({name:"BackgroundMaterial",uniforms:Dr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=rt.getTransfer(b.colorSpace)!==Pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,M){y.getRGB(lh,sd(i)),t.buffers.color.setClear(lh.r,lh.g,lh.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:x,dispose:p}}function Py(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(P,D,F,I,U){let B=!1,W=h(P,I,F,D);r!==W&&(r=W,c(r.object)),B=f(P,I,F,U),B&&m(P,I,F,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,b(P,D,F,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function h(P,D,F,I){let U=I.wireframe===!0,B=n[D.id];B===void 0&&(B={},n[D.id]=B);let W=P.isInstancedMesh===!0?P.id:0,ie=B[W];ie===void 0&&(ie={},B[W]=ie);let X=ie[F.id];X===void 0&&(X={},ie[F.id]=X);let J=X[U];return J===void 0&&(J=u(l()),X[U]=J),J}function u(P){let D=[],F=[],I=[];for(let U=0;U<t;U++)D[U]=0,F[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,D,F,I){let U=r.attributes,B=D.attributes,W=0,ie=F.getAttributes();for(let X in ie)if(ie[X].location>=0){let ee=U[X],ye=B[X];if(ye===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor)),ee===void 0||ee.attribute!==ye||ye&&ee.data!==ye.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function m(P,D,F,I){let U={},B=D.attributes,W=0,ie=F.getAttributes();for(let X in ie)if(ie[X].location>=0){let ee=B[X];ee===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let ye={};ye.attribute=ee,ee&&ee.data&&(ye.data=ee.data),U[X]=ye,W++}r.attributes=U,r.attributesNum=W,r.index=I}function x(){let P=r.newAttributes;for(let D=0,F=P.length;D<F;D++)P[D]=0}function g(P){p(P,0)}function p(P,D){let F=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;F[P]=1,I[P]===0&&(i.enableVertexAttribArray(P),I[P]=1),U[P]!==D&&(i.vertexAttribDivisor(P,D),U[P]=D)}function y(){let P=r.newAttributes,D=r.enabledAttributes;for(let F=0,I=D.length;F<I;F++)D[F]!==P[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function M(P,D,F,I,U,B,W){W===!0?i.vertexAttribIPointer(P,D,F,U,B):i.vertexAttribPointer(P,D,F,I,U,B)}function b(P,D,F,I){x();let U=I.attributes,B=F.getAttributes(),W=D.defaultAttributeValues;for(let ie in B){let X=B[ie];if(X.location>=0){let J=U[ie];if(J===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let ee=J.normalized,ye=J.itemSize,we=e.get(J);if(we===void 0)continue;let At=we.buffer,at=we.type,dt=we.bytesPerElement,Y=at===i.INT||at===i.UNSIGNED_INT||J.gpuType===Sl;if(J.isInterleavedBufferAttribute){let ne=J.data,ve=ne.stride,Be=J.offset;if(ne.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)p(X.location+_e,ne.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let _e=0;_e<X.locationSize;_e++)g(X.location+_e);i.bindBuffer(i.ARRAY_BUFFER,At);for(let _e=0;_e<X.locationSize;_e++)M(X.location+_e,ye/X.locationSize,at,ee,ve*dt,(Be+ye/X.locationSize*_e)*dt,Y)}else{if(J.isInstancedBufferAttribute){for(let ne=0;ne<X.locationSize;ne++)p(X.location+ne,J.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ne=0;ne<X.locationSize;ne++)g(X.location+ne);i.bindBuffer(i.ARRAY_BUFFER,At);for(let ne=0;ne<X.locationSize;ne++)M(X.location+ne,ye/X.locationSize,at,ee,ye*dt,ye/X.locationSize*ne*dt,Y)}}else if(W!==void 0){let ee=W[ie];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(X.location,ee);break;case 3:i.vertexAttrib3fv(X.location,ee);break;case 4:i.vertexAttrib4fv(X.location,ee);break;default:i.vertexAttrib1fv(X.location,ee)}}}}y()}function v(){E();for(let P in n){let D=n[P];for(let F in D){let I=D[F];for(let U in I){let B=I[U];for(let W in B)d(B[W].object),delete B[W];delete I[U]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let F in D){let I=D[F];for(let U in I){let B=I[U];for(let W in B)d(B[W].object),delete B[W];delete I[U]}}delete n[P.id]}function T(P){for(let D in n){let F=n[D];for(let I in F){let U=F[I];if(U[P.id]===void 0)continue;let B=U[P.id];for(let W in B)d(B[W].object),delete B[W];delete U[P.id]}}}function _(P){for(let D in n){let F=n[D],I=P.isInstancedMesh===!0?P.id:0,U=F[I];if(U!==void 0){for(let B in U){let W=U[B];for(let ie in W)d(W[ie].object),delete W[ie];delete U[B]}delete F[I],Object.keys(F).length===0&&delete n[D]}}}function E(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Iy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ly(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==ai&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Zn&&T!==ri&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Pe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,maxSamples:v,samples:S}}function Dy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Mi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?d(null):c();else{let y=r?0:n,M=y*4,b=p.clippingState||null;l.value=b,b=d(m,u,M,f);for(let v=0;v!==M;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,b=f;M!==x;++M,b+=4)a.copy(h[M]).applyMatrix4(y,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Ga=4,Fy=6,Ny=20,Uy=256,Jo=new Ys,Am=new Ue,cd=null,ld=0,hd=0,ud=!1,Oy=new R,Fr=new R,qa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Oy}=r;cd=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ld,hd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Pi,format:ai,colorSpace:zn,depthBuffer:!1},s=Rm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zy(r)),this._blurMaterial=By(r,e,t),this._ggxMaterial=ky(r,e,t)}return s}_compileMaterial(e){let t=new Ye(new It,e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,n,s,r){let l=new hn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Am),h.toneMapping=Ri,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new di,new kn({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Am),p=!0);for(let M=0;M<6;M++){let b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[M],r.y,r.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[M]));let v=this._cubeSize;Va(s,b*v,M>2?v:0,v,v),h.setRenderTarget(s),p&&h.render(x,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zs||e.mapping===Ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Jo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=c*1.25,f=h*u,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Ga?n-m+Ga:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Va(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Jo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Va(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(o,Jo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],h=3*d*(s>this._lodMax-Ga?s-this._lodMax+Ga:0),u=4*(this._cubeSize-d);Va(t,h,u,3*d,2*d),a.setRenderTarget(t),a.render(l,Jo)}};function zy(i){let e=[],t=[],n=i,s=i-Ga+1+Fy;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,f=3,m=new Float32Array(f*u*h),x=new Float32Array(f*u*h);for(let p=0;p<h;p++){let y=p%3*2/3-1,M=p>2?0:-1,b=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];m.set(b,f*u*p);for(let v=0;v<u;v++){let S=d[v*2]*2-1,T=d[v*2+1]*2-1;p===0?Fr.set(1,T,S):p===1?Fr.set(-S,1,-T):p===2?Fr.set(-S,T,1):p===3?Fr.set(-1,T,-S):p===4?Fr.set(-S,-1,T):Fr.set(S,T,-1),Fr.toArray(x,(p*u+v)*f)}}let g=new It;g.setAttribute("position",new nt(m,f)),g.setAttribute("outputDirection",new nt(x,f)),t.push(new Ye(g,null)),n>Ga&&n--}return{lodMeshes:t,sizeLods:e}}function Rm(i,e,t){let n=new Xn(i,e,t);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ky(i,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function By(i,e,t){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ny,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Cm(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Pm(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function dh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var uh=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new di(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Yi});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=tn),new _l(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Hy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Oa||f===vl)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new uh(m.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,m=f===Oa||f===vl,x=f===Zs||f===Ir;if(m||x){let g=t.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new qa(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new qa(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,f){return f===Oa?u.mapping=Zs:f===vl&&(u.mapping=Ir),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Vy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&_r("WebGLRenderer: "+n+" extension not supported."),s}}}function Gy(i,e,t,n){let s={},r=new WeakMap;function a(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(h){let u=h.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(h){let u=[],f=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let M=0,b=y.length;M<b;M+=3){let v=y[M+0],S=y[M+1],T=y[M+2];u.push(v,S,S,T,T,v)}}else{let y=m.array;x=m.version;for(let M=0,b=y.length/3-1;M<b;M+=3){let v=M+0,S=M+1,T=M+2;u.push(v,S,S,T,T,v)}}let g=new(m.count>=65535?Ro:Sr)(u,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function d(h){let u=r.get(h);if(u){let f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Wy(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*a),t.update(u,n,1)}function c(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,h*a,f),t.update(u,n,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function qy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xy(i,e,t){let n=new WeakMap,s=new _t;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0,u=n.get(o);if(u===void 0||u.count!==h){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let b=o.attributes.position.count*M,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*v*4*h),T=new Ao(S,b,v,h);T.type=ri,T.needsUpdate=!0;let _=M*4;for(let C=0;C<h;C++){let P=g[C],D=p[C],F=y[C],I=b*v*4*C;for(let U=0;U<P.count;U++){let B=U*_;f===!0&&(s.fromBufferAttribute(P,U),S[I+B+0]=s.x,S[I+B+1]=s.y,S[I+B+2]=s.z,S[I+B+3]=0),m===!0&&(s.fromBufferAttribute(D,U),S[I+B+4]=s.x,S[I+B+5]=s.y,S[I+B+6]=s.z,S[I+B+7]=0),x===!0&&(s.fromBufferAttribute(F,U),S[I+B+8]=s.x,S[I+B+9]=s.y,S[I+B+10]=s.z,S[I+B+11]=F.itemSize===4?s.w:1)}}u={count:h,texture:T,size:new We(b,v)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function jy(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var Ky={[ku]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[Hu]:"CINEON_TONE_MAPPING",[Ho]:"ACES_FILMIC_TONE_MAPPING",[Gu]:"AGX_TONE_MAPPING",[Wu]:"NEUTRAL_TONE_MAPPING",[Vu]:"CUSTOM_TONE_MAPPING"};function Yy(i,e,t,n,s,r){let a=new Xn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new It;c.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new bt([0,2,0,0,2,0],2));let d=new hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ye(c,d),u=new Ys(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,y=[],M=!1;this.setSize=function(b,v){a.setSize(b,v),o!==null&&o.setSize(b,v),l!==null&&l.setSize(b,v);for(let S=0;S<y.length;S++){let T=y[S];T.setSize&&T.setSize(b,v)}},this.setEffects=function(b){y=b,M=y.length>0&&y[0].isRenderPass===!0;let v=a.width,S=a.height;y.length>0&&o===null&&(o=new Xn(v,S,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new Xn(v,S,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let _=y[T];_.setSize&&_.setSize(v,S)}},this.begin=function(b,v){if(x||b.toneMapping===Ri&&y.length===0)return!1;if(p=v,v!==null){let S=v.width,T=v.height;(a.width!==S||a.height!==T)&&this.setSize(S,T)}return M===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Ri,!0},this.hasRenderPass=function(){return M},this.end=function(b,v){b.toneMapping=g,x=!0;let S=a,T=o;for(let _=0;_<y.length;_++){let E=y[_];E.enabled!==!1&&(E.render(b,T,S,v),E.needsSwap!==!1&&(S=T,T=T===o?l:o))}if(f!==b.outputColorSpace||m!==b.toneMapping){f=b.outputColorSpace,m=b.toneMapping,d.defines={},rt.getTransfer(f)===Pt&&(d.defines.SRGB_TRANSFER="");let _=Ky[m];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(h,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Jm=new gn,pd=new js(1,1),Zm=new Ao,$m=new rl,Qm=new Io,Im=[],Lm=[],Dm=new Float32Array(16),Fm=new Float32Array(9),Nm=new Float32Array(4);function Xa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Im[s];if(r===void 0&&(r=new Float32Array(s),Im[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fh(i,e){let t=Lm[e];t===void 0&&(t=new Int32Array(e),Lm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2fv(this.addr,e),bn(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;i.uniform3fv(this.addr,e),bn(t,e)}}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4fv(this.addr,e),bn(t,e)}}function ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(xn(t,n))return;Nm.set(n),i.uniformMatrix2fv(this.addr,!1,Nm),bn(t,n)}}function tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(xn(t,n))return;Fm.set(n),i.uniformMatrix3fv(this.addr,!1,Fm),bn(t,n)}}function nv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(xn(t,n))return;Dm.set(n),i.uniformMatrix4fv(this.addr,!1,Dm),bn(t,n)}}function iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2iv(this.addr,e),bn(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3iv(this.addr,e),bn(t,e)}}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4iv(this.addr,e),bn(t,e)}}function ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2uiv(this.addr,e),bn(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3uiv(this.addr,e),bn(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4uiv(this.addr,e),bn(t,e)}}function uv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pd.compareFunction=t.isReversedDepthBuffer()?ch:oh,r=pd):r=Jm,t.setTexture2D(e||r,s)}function dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$m,s)}function fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qm,s)}function pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zm,s)}function mv(i){switch(i){case 5126:return Jy;case 35664:return Zy;case 35665:return $y;case 35666:return Qy;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return sv;case 35668:case 35672:return rv;case 35669:case 35673:return av;case 5125:return ov;case 36294:return cv;case 36295:return lv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}function gv(i,e){i.uniform1fv(this.addr,e)}function xv(i,e){let t=Xa(e,this.size,2);i.uniform2fv(this.addr,t)}function bv(i,e){let t=Xa(e,this.size,3);i.uniform3fv(this.addr,t)}function _v(i,e){let t=Xa(e,this.size,4);i.uniform4fv(this.addr,t)}function yv(i,e){let t=Xa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vv(i,e){let t=Xa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mv(i,e){let t=Xa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sv(i,e){i.uniform1iv(this.addr,e)}function wv(i,e){i.uniform2iv(this.addr,e)}function Ev(i,e){i.uniform3iv(this.addr,e)}function Tv(i,e){i.uniform4iv(this.addr,e)}function Av(i,e){i.uniform1uiv(this.addr,e)}function Rv(i,e){i.uniform2uiv(this.addr,e)}function Cv(i,e){i.uniform3uiv(this.addr,e)}function Pv(i,e){i.uniform4uiv(this.addr,e)}function Iv(i,e,t){let n=this.cache,s=e.length,r=fh(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=pd:a=Jm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Lv(i,e,t){let n=this.cache,s=e.length,r=fh(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$m,r[a])}function Dv(i,e,t){let n=this.cache,s=e.length,r=fh(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Qm,r[a])}function Fv(i,e,t){let n=this.cache,s=e.length,r=fh(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Zm,r[a])}function Nv(i){switch(i){case 5126:return gv;case 35664:return xv;case 35665:return bv;case 35666:return _v;case 35674:return yv;case 35675:return vv;case 35676:return Mv;case 5124:case 35670:return Sv;case 35667:case 35671:return wv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Fv}}var md=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mv(t.type)}},gd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nv(t.type)}},xd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},dd=/(\w+)(\])?(\[|\.)?/g;function Um(i,e){i.seq.push(e),i.map[e.id]=e}function Uv(i,e,t){let n=i.name,s=n.length;for(dd.lastIndex=0;;){let r=dd.exec(n),a=dd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Um(t,c===void 0?new md(o,i,e):new gd(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new xd(o),Um(t,h)),t=h}}}var Wa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Uv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Om(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ov=37297,zv=0;function kv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var zm=new Ve;function Bv(i){rt._getMatrix(zm,rt.workingColorSpace,i);let e=`mat3( ${zm.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Eo:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function km(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+kv(i.getShaderSource(e),o)}else return r}function Hv(i,e){let t=Bv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Vv={[ku]:"Linear",[Bu]:"Reinhard",[Hu]:"Cineon",[Ho]:"ACESFilmic",[Gu]:"AgX",[Wu]:"Neutral",[Vu]:"Custom"};function Gv(i,e){let t=Vv[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hh=new R;function Wv(){rt.getLuminanceCoefficients(hh);let i=hh.x.toFixed(4),e=hh.y.toFixed(4),t=hh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function Xv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $o(i){return i!==""}function Bm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(i){return i.replace(Kv,Jv)}var Yv=new Map;function Jv(i,e){let t=Je[e];if(t===void 0){let n=Yv.get(e);if(n!==void 0)t=Je[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bd(t)}var Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(i){return i.replace(Zv,$v)}function $v(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Qv={[Cr]:"SHADOWMAP_TYPE_PCF",[Na]:"SHADOWMAP_TYPE_VSM"};function eM(i){return Qv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tM={[Zs]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE_UV"};function nM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var iM={[Ir]:"ENVMAP_MODE_REFRACTION"};function sM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":iM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rM={[zu]:"ENVMAP_BLENDING_MULTIPLY",[am]:"ENVMAP_BLENDING_MIX",[om]:"ENVMAP_BLENDING_ADD"};function aM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":rM[i.combine]||"ENVMAP_BLENDING_NONE"}function oM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=eM(t),c=nM(t),d=sM(t),h=aM(t),u=oM(t),f=qv(t),m=Xv(r),x=s.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($o).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($o).join(`
`),p.length>0&&(p+=`
`)):(g=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),p=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Hv("linearToOutputTexel",t.outputColorSpace),Wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),a=bd(a),a=Bm(a,t),a=Hm(a,t),o=bd(o),o=Bm(o,t),o=Hm(o,t),a=Vm(a),o=Vm(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+g+a,b=y+p+o,v=Om(s,s.VERTEX_SHADER,M),S=Om(s,s.FRAGMENT_SHADER,b);s.attachShader(x,v),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(v)||"",I=s.getShaderInfoLog(S)||"",U=D.trim(),B=F.trim(),W=I.trim(),ie=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,S);else{let J=km(s,v,"vertex"),ee=km(s,S,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+J+`
`+ee)}else U!==""?Pe("WebGLProgram: Program Info Log:",U):(B===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:ie,programLog:U,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(v),s.deleteShader(S),_=new Wa(s,x),E=jv(s,x)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Ov)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=S,this}var lM=0,_d=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yd(e),t.set(e,n)),n}},yd=class{constructor(e){this.id=lM++,this.code=e,this.usedTimes=0}};function hM(i){return i===Qs||i===jo||i===Ko}function uM(i,e,t,n,s,r){let a=new Sa,o=new _d,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,C,P,D,F){let I=P.fog,U=D.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ie=e.get(_.envMap||B,W),X=ie&&ie.mapping===Vo?ie.image.height:null,J=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let ee=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ye=ee!==void 0?ee.length:0,we=0;U.morphAttributes.position!==void 0&&(we=1),U.morphAttributes.normal!==void 0&&(we=2),U.morphAttributes.color!==void 0&&(we=3);let At,at,dt,Y;if(J){let Wt=Zi[J];At=Wt.vertexShader,at=Wt.fragmentShader}else{At=_.vertexShader,at=_.fragmentShader;let Wt=o.getVertexShaderStage(_),Rt=o.getFragmentShaderStage(_);o.update(_,Wt,Rt),dt=Wt.id,Y=Rt.id}let ne=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,_e=D.isBatchedMesh===!0,Ze=!!_.map,an=!!_.matcap,ct=!!ie,xt=!!_.aoMap,Gt=!!_.lightMap,ft=!!_.bumpMap&&_.wireframe===!1,Zt=!!_.normalMap,vn=!!_.displacementMap,Wn=!!_.emissiveMap,en=!!_.metalnessMap,fn=!!_.roughnessMap,k=_.anisotropy>0,Cn=_.clearcoat>0,Ft=_.dispersion>0,L=_.retroreflectivity>0,w=_.iridescence>0,H=_.sheen>0,q=_.transmission>0,K=k&&!!_.anisotropyMap,oe=Cn&&!!_.clearcoatMap,ce=Cn&&!!_.clearcoatNormalMap,Z=Cn&&!!_.clearcoatRoughnessMap,te=w&&!!_.iridescenceMap,le=w&&!!_.iridescenceThicknessMap,Le=H&&!!_.sheenColorMap,fe=H&&!!_.sheenRoughnessMap,he=!!_.specularMap,De=!!_.specularColorMap,Oe=!!_.specularIntensityMap,$e=q&&!!_.transmissionMap,z=q&&!!_.thicknessMap,ue=!!_.gradientMap,Q=!!_.alphaMap,de=_.alphaTest>0,be=!!_.alphaHash,re=!!_.extensions,Ne=Ri;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ne=i.toneMapping);let Ae={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:At,fragmentShader:at,defines:_.defines,customVertexShaderID:dt,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:_e,batchingColor:_e&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ze,matcap:an,envMap:ct,envMapMode:ct&&ie.mapping,envMapCubeUVHeight:X,aoMap:xt,lightMap:Gt,bumpMap:ft,normalMap:Zt,displacementMap:vn,emissiveMap:Wn,normalMapObjectSpace:Zt&&_.normalMapType===um,normalMapTangentSpace:Zt&&_.normalMapType===ah,packedNormalMap:Zt&&_.normalMapType===ah&&hM(_.normalMap.format),metalnessMap:en,roughnessMap:fn,anisotropy:k,anisotropyMap:K,clearcoat:Cn,clearcoatMap:oe,clearcoatNormalMap:ce,clearcoatRoughnessMap:Z,dispersion:Ft,retroreflection:L,iridescence:w,iridescenceMap:te,iridescenceThicknessMap:le,sheen:H,sheenColorMap:Le,sheenRoughnessMap:fe,specularMap:he,specularColorMap:De,specularIntensityMap:Oe,transmission:q,transmissionMap:$e,thicknessMap:z,gradientMap:ue,opaque:_.transparent===!1&&_.blending===Ua&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:de,alphaHash:be,combine:_.combine,mapUv:Ze&&m(_.map.channel),aoMapUv:xt&&m(_.aoMap.channel),lightMapUv:Gt&&m(_.lightMap.channel),bumpMapUv:ft&&m(_.bumpMap.channel),normalMapUv:Zt&&m(_.normalMap.channel),displacementMapUv:vn&&m(_.displacementMap.channel),emissiveMapUv:Wn&&m(_.emissiveMap.channel),metalnessMapUv:en&&m(_.metalnessMap.channel),roughnessMapUv:fn&&m(_.roughnessMap.channel),anisotropyMapUv:K&&m(_.anisotropyMap.channel),clearcoatMapUv:oe&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:fe&&m(_.sheenRoughnessMap.channel),specularMapUv:he&&m(_.specularMap.channel),specularColorMapUv:De&&m(_.specularColorMap.channel),specularIntensityMapUv:Oe&&m(_.specularIntensityMap.channel),transmissionMapUv:$e&&m(_.transmissionMap.channel),thicknessMapUv:z&&m(_.thicknessMap.channel),alphaMapUv:Q&&m(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Zt||k),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(Ze||Q),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&Zt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:we,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ze&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===Pt,decodeVideoTextureEmissive:Wn&&_.emissiveMap.isVideoTexture===!0&&rt.getTransfer(_.emissiveMap.colorSpace)===Pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===Hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(E,_),y(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function y(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let E=f[_.type],C;if(E){let P=Zi[E];C=wm.clone(P.uniforms)}else C=_.uniforms;return C}function b(_,E){let C=d.get(E);return C!==void 0?++C.usedTimes:(C=new cM(i,E,_,s),c.push(C),d.set(E,C)),C}function v(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:b,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:T}}function dM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function fM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,x,g,p){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=g,y.group=p),e++,y}function l(u,f,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let M=o(u,f,m,x,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(u,f,m,x,g,p){let y=o(u,f,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function d(u,f){t.length>1&&t.sort(u||fM),n.length>1&&n.sort(f||Wm),s.length>1&&s.sort(f||Wm)}function h(){for(let u=e,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function pM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new qm,i.set(n,[a])):s>=r.length?(a=new qm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function mM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function gM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var xM=0;function bM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _M(i){let e=new mM,t=gM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new qe,a=new qe;function o(c){let d=0,h=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,M=0,b=0,v=0,S=0,T=0,_=0,E=0,C=0;c.sort(bM);for(let D=0,F=c.length;D<F;D++){let I=c[D],U=I.color,B=I.intensity,W=I.distance,ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Qs?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=U.r*B,h+=U.g*B,u+=U.b*B;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],B);C++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=ie;let ye=J.getViewportCount();for(let we=0;we<ye;we++)n.sunShadowMatrix[x+we]=J.getMatrix(we),n.sunShadowCascade[x+we]=J._cascadeData[we];x+=ye,m++}n.sun[f]=X,f++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=ie,n.directionalShadowMatrix[g]=I.shadow.matrix,v++}n.directional[g]=X,g++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(U).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[y]=X;let J=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,J.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[y]=J.matrix,I.castShadow){let ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=ie,T++}y++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(U).multiplyScalar(B),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=X,M++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let J=I.shadow,ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=X,p++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(B),X.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[b]=X,b++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==M||P.hemiLength!==b||P.numSunShadows!==m||P.numDirectionalShadows!==v||P.numPointShadows!==S||P.numSpotShadows!==T||P.numSpotMaps!==_||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=M,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=y,P.rectAreaLength=M,P.hemiLength=b,P.numSunShadows=m,P.numDirectionalShadows=v,P.numPointShadows=S,P.numSpotShadows=T,P.numSpotMaps=_,P.numLightProbes=C,n.version=xM++)}function l(c,d){let h=0,u=0,f=0,m=0,x=0,g=0,p=d.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let b=c[y];if(b.isSunLight){let v=n.sun[h];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),h++}else if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Xm(i){let e=new _M(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function yM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Xm(i),e.set(s,[o])):r>=a.length?(o=new Xm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MM=`uniform sampler2D shadow_pass;
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
}`,SM=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],wM=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],jm=new qe,Zo=new R,fd=new R;function EM(i,e,t){let n=new Ra,s=new We,r=new We,a=new _t,o=new Ia,l=new ul,c={},d=t.maxTextureSize,h={[Ki]:Hn,[Hn]:Ki,[Dn]:Dn},u=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:vM,fragmentShader:MM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new It;m.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ye(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let p=this.type;this.render=function(S,T,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Hp&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);let E=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Yi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==this.type;F&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=S.length;I<U;I++){let B=S[I],W=B.shadow;if(W===void 0){Pe("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ie=W.getFrameExtents();s.multiply(ie),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ie.x),s.x=r.x*ie.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ie.y),s.y=r.y*ie.y,W.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Na){if(B.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Xn(s.x,s.y,{format:Qs,type:Pi,minFilter:tn,magFilter:tn,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new js(s.x,s.y,ri),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=Gi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=un,W.map.depthTexture.magFilter=un}else B.isPointLight?(W.map=new uh(s.x),W.map.depthTexture=new cl(s.x,Ci)):(W.map=new Xn(s.x,s.y),W.map.depthTexture=new js(s.x,s.y,Ci)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=Gi,this.type===Cr?(W.map.depthTexture.compareFunction=X?ch:oh,W.map.depthTexture.minFilter=tn,W.map.depthTexture.magFilter=tn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=un,W.map.depthTexture.magFilter=un);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,_);for(let ee=0;ee<J;ee++){let ye=W.getCamera(ee);if(B.isPointLight){let we=W.camera,At=W.matrix,at=B.distance||we.far;at!==we.far&&(we.far=at,we.updateProjectionMatrix()),Zo.setFromMatrixPosition(B.matrixWorld),we.position.copy(Zo),fd.copy(we.position),fd.add(SM[ee]),we.up.copy(wM[ee]),we.lookAt(fd),we.updateMatrixWorld(),At.makeTranslation(-Zo.x,-Zo.y,-Zo.z),jm.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),W._frustum.setFromProjectionMatrix(jm,we.coordinateSystem,we.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(W.map),i.clear());let we=W.getViewport(ee);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),D.viewport(a)}n=W.getFrustum(ee),b(T,_,ye,B,this.type)}W.isPointLightShadow!==!0&&this.type===Na&&y(W,_),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,C,P)};function y(S,T){let _=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Xn(s.x,s.y,{format:Qs,type:Pi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,_,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,_,f,x,null)}function M(S,T,_,E){let C=null,P=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=C.uuid,F=T.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let U=I[F];U===void 0&&(U=C.clone(),I[F]=U,T.addEventListener("dispose",v)),C=U}if(C.visible=T.visible,C.wireframe=T.wireframe,E===Na?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:h[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=i.properties.get(C);D.light=_}return C}function b(S,T,_,E,C){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Na)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let F=e.update(S),I=S.material;if(Array.isArray(I)){let U=F.groups;for(let B=0,W=U.length;B<W;B++){let ie=U[B],X=I[ie.materialIndex];if(X&&X.visible){let J=M(S,X,E,C);S.onBeforeShadow(i,S,T,_,F,J,ie),i.renderBufferDirect(_,null,F,J,S,ie),S.onAfterShadow(i,S,T,_,F,J,ie)}}}else if(I.visible){let U=M(S,I,E,C);S.onBeforeShadow(i,S,T,_,F,U,null),i.renderBufferDirect(_,null,F,U,S,null),S.onAfterShadow(i,S,T,_,F,U,null)}}let D=S.children;for(let F=0,I=D.length;F<I;F++)b(D[F],T,_,E,C)}function v(S){S.target.removeEventListener("dispose",v);for(let _ in c){let E=c[_],C=S.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function TM(i,e){function t(){let z=!1,ue=new _t,Q=null,de=new _t(0,0,0,0);return{setMask:function(be){Q!==be&&!z&&(i.colorMask(be,be,be,be),Q=be)},setLocked:function(be){z=be},setClear:function(be,re,Ne,Ae,Wt){Wt===!0&&(be*=Ae,re*=Ae,Ne*=Ae),ue.set(be,re,Ne,Ae),de.equals(ue)===!1&&(i.clearColor(be,re,Ne,Ae),de.copy(ue))},reset:function(){z=!1,Q=null,de.set(-1,0,0,0)}}}function n(){let z=!1,ue=!1,Q=null,de=null,be=null;return{setReversed:function(re){if(ue!==re){let Ne=e.get("EXT_clip_control");re?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ue=re;let Ae=be;be=null,this.setClear(Ae)}},getReversed:function(){return ue},setTest:function(re){re?ne(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(re){Q!==re&&!z&&(i.depthMask(re),Q=re)},setFunc:function(re){if(ue&&(re=Mm[re]),de!==re){switch(re){case Jc:i.depthFunc(i.NEVER);break;case Zc:i.depthFunc(i.ALWAYS);break;case $c:i.depthFunc(i.LESS);break;case xa:i.depthFunc(i.LEQUAL);break;case Qc:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case tl:i.depthFunc(i.GREATER);break;case nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=re}},setLocked:function(re){z=re},setClear:function(re){be!==re&&(be=re,ue&&(re=1-re),i.clearDepth(re))},reset:function(){z=!1,Q=null,de=null,be=null,ue=!1}}}function s(){let z=!1,ue=null,Q=null,de=null,be=null,re=null,Ne=null,Ae=null,Wt=null;return{setTest:function(Rt){z||(Rt?ne(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Rt){ue!==Rt&&!z&&(i.stencilMask(Rt),ue=Rt)},setFunc:function(Rt,bi,ki){(Q!==Rt||de!==bi||be!==ki)&&(i.stencilFunc(Rt,bi,ki),Q=Rt,de=bi,be=ki)},setOp:function(Rt,bi,ki){(re!==Rt||Ne!==bi||Ae!==ki)&&(i.stencilOp(Rt,bi,ki),re=Rt,Ne=bi,Ae=ki)},setLocked:function(Rt){z=Rt},setClear:function(Rt){Wt!==Rt&&(i.clearStencil(Rt),Wt=Rt)},reset:function(){z=!1,ue=null,Q=null,de=null,be=null,re=null,Ne=null,Ae=null,Wt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},h={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,M=null,b=null,v=null,S=null,T=null,_=new Ue(0,0,0),E=0,C=!1,P=null,D=null,F=null,I=null,U=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ie=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=ie>=2);let J=null,ee={},ye=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),At=new _t().fromArray(ye),at=new _t().fromArray(we);function dt(z,ue,Q,de){let be=new Uint8Array(4),re=i.createTexture();i.bindTexture(z,re),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<Q;Ne++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ue+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return re}let Y={};Y[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(xa),ft(!1),Zt(Lu),ne(i.CULL_FACE),xt(Yi);function ne(z){d[z]!==!0&&(i.enable(z),d[z]=!0)}function ve(z){d[z]!==!1&&(i.disable(z),d[z]=!1)}function Be(z,ue){return u[z]!==ue?(i.bindFramebuffer(z,ue),u[z]=ue,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(z,ue){let Q=m,de=!1;if(z){Q=f.get(ue),Q===void 0&&(Q=[],f.set(ue,Q));let be=z.textures;if(Q.length!==be.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ne=be.length;re<Ne;re++)Q[re]=i.COLOR_ATTACHMENT0+re;Q.length=be.length,de=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,de=!0);de&&i.drawBuffers(Q)}function Ze(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let an={[Pr]:i.FUNC_ADD,[Gp]:i.FUNC_SUBTRACT,[Wp]:i.FUNC_REVERSE_SUBTRACT};an[qp]=i.MIN,an[Xp]=i.MAX;let ct={[jp]:i.ZERO,[Kp]:i.ONE,[Yp]:i.SRC_COLOR,[Uu]:i.SRC_ALPHA,[tm]:i.SRC_ALPHA_SATURATE,[Qp]:i.DST_COLOR,[Zp]:i.DST_ALPHA,[Jp]:i.ONE_MINUS_SRC_COLOR,[Ou]:i.ONE_MINUS_SRC_ALPHA,[em]:i.ONE_MINUS_DST_COLOR,[$p]:i.ONE_MINUS_DST_ALPHA,[nm]:i.CONSTANT_COLOR,[im]:i.ONE_MINUS_CONSTANT_COLOR,[sm]:i.CONSTANT_ALPHA,[rm]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(z,ue,Q,de,be,re,Ne,Ae,Wt,Rt){if(z===Yi){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),z!==Vp){if(z!==p||Rt!==C){if((y!==Pr||v!==Pr)&&(i.blendEquation(i.FUNC_ADD),y=Pr,v=Pr),Rt)switch(z){case Ua:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Du:i.blendFunc(i.ONE,i.ONE);break;case Fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",z);break}else switch(z){case Ua:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Du:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fu:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",z);break}M=null,b=null,S=null,T=null,_.set(0,0,0),E=0,p=z,C=Rt}return}be=be||ue,re=re||Q,Ne=Ne||de,(ue!==y||be!==v)&&(i.blendEquationSeparate(an[ue],an[be]),y=ue,v=be),(Q!==M||de!==b||re!==S||Ne!==T)&&(i.blendFuncSeparate(ct[Q],ct[de],ct[re],ct[Ne]),M=Q,b=de,S=re,T=Ne),(Ae.equals(_)===!1||Wt!==E)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Wt),_.copy(Ae),E=Wt),p=z,C=!1}function Gt(z,ue){z.side===Dn?ve(i.CULL_FACE):ne(i.CULL_FACE);let Q=z.side===Hn;ue&&(Q=!Q),ft(Q),z.blending===Ua&&z.transparent===!1?xt(Yi):xt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let de=z.stencilWrite;o.setTest(de),de&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Wn(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(z){P!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),P=z)}function Zt(z){z!==kp?(ne(i.CULL_FACE),z!==D&&(z===Lu?i.cullFace(i.BACK):z===Bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),D=z}function vn(z){z!==F&&(W&&i.lineWidth(z),F=z)}function Wn(z,ue,Q){z?(ne(i.POLYGON_OFFSET_FILL),(I!==ue||U!==Q)&&(I=ue,U=Q,a.getReversed()&&(ue=-ue),i.polygonOffset(ue,Q))):ve(i.POLYGON_OFFSET_FILL)}function en(z){z?ne(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function fn(z){z===void 0&&(z=i.TEXTURE0+B-1),J!==z&&(i.activeTexture(z),J=z)}function k(z,ue,Q){Q===void 0&&(J===null?Q=i.TEXTURE0+B-1:Q=J);let de=ee[Q];de===void 0&&(de={type:void 0,texture:void 0},ee[Q]=de),(de.type!==z||de.texture!==ue)&&(J!==Q&&(i.activeTexture(Q),J=Q),i.bindTexture(z,ue||Y[z]),de.type=z,de.texture=ue)}function Cn(){let z=ee[J];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ft(){try{i.compressedTexImage2D(...arguments)}catch(z){He("WebGLState:",z)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(z){He("WebGLState:",z)}}function w(){try{i.texSubImage2D(...arguments)}catch(z){He("WebGLState:",z)}}function H(){try{i.texSubImage3D(...arguments)}catch(z){He("WebGLState:",z)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){He("WebGLState:",z)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(z){He("WebGLState:",z)}}function oe(){try{i.texStorage2D(...arguments)}catch(z){He("WebGLState:",z)}}function ce(){try{i.texStorage3D(...arguments)}catch(z){He("WebGLState:",z)}}function Z(){try{i.texImage2D(...arguments)}catch(z){He("WebGLState:",z)}}function te(){try{i.texImage3D(...arguments)}catch(z){He("WebGLState:",z)}}function le(z){return h[z]!==void 0?h[z]:i.getParameter(z)}function Le(z,ue){h[z]!==ue&&(i.pixelStorei(z,ue),h[z]=ue)}function fe(z){At.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),At.copy(z))}function he(z){at.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),at.copy(z))}function De(z,ue){let Q=c.get(ue);Q===void 0&&(Q=new WeakMap,c.set(ue,Q));let de=Q.get(z);de===void 0&&(de=i.getUniformBlockIndex(ue,z.name),Q.set(z,de))}function Oe(z,ue){let de=c.get(ue).get(z);l.get(ue)!==de&&(i.uniformBlockBinding(ue,de,z.__bindingPointIndex),l.set(ue,de))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},J=null,ee={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,M=null,b=null,v=null,S=null,T=null,_=new Ue(0,0,0),E=0,C=!1,P=null,D=null,F=null,I=null,U=null,At.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ve,bindFramebuffer:Be,drawBuffers:_e,useProgram:Ze,setBlending:xt,setMaterial:Gt,setFlipSided:ft,setCullFace:Zt,setLineWidth:vn,setPolygonOffset:Wn,setScissorTest:en,activeTexture:fn,bindTexture:k,unbindTexture:Cn,compressedTexImage2D:Ft,compressedTexImage3D:L,texImage2D:Z,texImage3D:te,pixelStorei:Le,getParameter:le,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:oe,texStorage3D:ce,texSubImage2D:w,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:fe,viewport:he,reset:$e}}function AM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,d=new WeakMap,h=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return m?new OffscreenCanvas(L,w):ya("canvas")}function g(L,w,H){let q=1,K=Ft(L);if((K.width>H||K.height>H)&&(q=H/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let oe=Math.floor(q*K.width),ce=Math.floor(q*K.height);u===void 0&&(u=x(oe,ce));let Z=w?x(oe,ce):u;return Z.width=oe,Z.height=ce,Z.getContext("2d").drawImage(L,0,0,oe,ce),Pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+oe+"x"+ce+")."),Z}else return"data"in L&&Pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function p(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(L,w,H,q,K,oe=!1){if(L!==null){if(i[L]!==void 0)return i[L];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce;q&&(ce=e.get("EXT_texture_norm16"),ce||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=w;if(w===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8),H===i.UNSIGNED_SHORT&&ce&&(Z=ce.R16_EXT),H===i.SHORT&&ce&&(Z=ce.R16_SNORM_EXT)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),w===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8),H===i.UNSIGNED_SHORT&&ce&&(Z=ce.RG16_EXT),H===i.SHORT&&ce&&(Z=ce.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),w===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),w===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),w===i.RGB&&(H===i.UNSIGNED_SHORT&&ce&&(Z=ce.RGB16_EXT),H===i.SHORT&&ce&&(Z=ce.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),w===i.RGBA){let te=oe?Eo:rt.getTransfer(K);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=te===Pt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ce&&(Z=ce.RGBA16_EXT),H===i.SHORT&&ce&&(Z=ce.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(L,w){let H;return L?w===null||w===Ci||w===Ba?H=i.DEPTH24_STENCIL8:w===ri?H=i.DEPTH32F_STENCIL8:w===ka&&(H=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ci||w===Ba?H=i.DEPTH_COMPONENT24:w===ri?H=i.DEPTH_COMPONENT32F:w===ka&&(H=i.DEPTH_COMPONENT16),H}function S(L,w){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==un&&L.minFilter!==tn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function T(L){let w=L.target;w.removeEventListener("dispose",T),E(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&h.delete(w)}function _(L){let w=L.target;w.removeEventListener("dispose",_),P(w)}function E(L){let w=n.get(L);if(w.__webglInit===void 0)return;let H=L.source,q=f.get(H);if(q){let K=q[w.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(L),Object.keys(q).length===0&&f.delete(H)}n.remove(L)}function C(L){let w=n.get(L);i.deleteTexture(w.__webglTexture);let H=L.source,q=f.get(H);delete q[w.__cacheKey],a.memory.textures--}function P(L){let w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(w.__webglFramebuffer[q]))for(let K=0;K<w.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(w.__webglFramebuffer[q][K]);else i.deleteFramebuffer(w.__webglFramebuffer[q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[q])}else{if(Array.isArray(w.__webglFramebuffer))for(let q=0;q<w.__webglFramebuffer.length;q++)i.deleteFramebuffer(w.__webglFramebuffer[q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let q=0;q<w.__webglColorRenderbuffer.length;q++)w.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=L.textures;for(let q=0,K=H.length;q<K;q++){let oe=n.get(H[q]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(H[q])}n.remove(L)}let D=0;function F(){D=0}function I(){return D}function U(L){D=L}function B(){let L=D;return L>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,L}function W(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function ie(L,w){let H=n.get(L);if(L.isVideoTexture&&k(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){let q=L.image;if(q===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(H,L,w);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function X(L,w){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){ve(H,L,w);return}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function J(L,w){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){ve(H,L,w);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function ee(L,w){let H=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&H.__version!==L.version){Be(H,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}let ye={[qn]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},we={[un]:i.NEAREST,[Ml]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},At={[fm]:i.NEVER,[bm]:i.ALWAYS,[pm]:i.LESS,[oh]:i.LEQUAL,[mm]:i.EQUAL,[ch]:i.GEQUAL,[gm]:i.GREATER,[xm]:i.NOTEQUAL};function at(L,w){if(w.type===ri&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===tn||w.magFilter===za||w.magFilter===Lr||w.magFilter===si||w.minFilter===tn||w.minFilter===za||w.minFilter===Lr||w.minFilter===si)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ye[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ye[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ye[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,we[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,we[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,At[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===un||w.minFilter!==Lr&&w.minFilter!==si||w.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function dt(L,w){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",T));let q=w.source,K=f.get(q);K===void 0&&(K={},f.set(q,K));let oe=W(w);if(oe!==L.__cacheKey){K[oe]===void 0&&(K[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[oe].usedTimes++;let ce=K[L.__cacheKey];ce!==void 0&&(K[L.__cacheKey].usedTimes--,ce.usedTimes===0&&C(w)),L.__cacheKey=oe,L.__webglTexture=K[oe].texture}return H}function Y(L,w,H){return Math.floor(Math.floor(L/H)/w)}function ne(L,w,H,q){let oe=L.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,H,q,w.data);else{oe.sort((Le,fe)=>Le.start-fe.start);let ce=0;for(let Le=1;Le<oe.length;Le++){let fe=oe[ce],he=oe[Le],De=fe.start+fe.count,Oe=Y(he.start,w.width,4),$e=Y(fe.start,w.width,4);he.start<=De+1&&Oe===$e&&Y(he.start+he.count-1,w.width,4)===Oe?fe.count=Math.max(fe.count,he.start+he.count-fe.start):(++ce,oe[ce]=he)}oe.length=ce+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Le=0,fe=oe.length;Le<fe;Le++){let he=oe[Le],De=Math.floor(he.start/4),Oe=Math.ceil(he.count/4),$e=De%w.width,z=Math.floor(De/w.width),ue=Oe,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,$e,z,ue,Q,H,q,w.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function ve(L,w,H){let q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(q=i.TEXTURE_3D);let K=dt(L,w),oe=w.source;t.bindTexture(q,L.__webglTexture,i.TEXTURE0+H);let ce=n.get(oe);if(oe.version!==ce.__version||K===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let Q=rt.getPrimaries(rt.workingColorSpace),de=w.colorSpace===fi?null:rt.getPrimaries(w.colorSpace),be=w.colorSpace===fi||Q===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let te=g(w.image,!1,s.maxTextureSize);te=Cn(w,te);let le=r.convert(w.format,w.colorSpace),Le=r.convert(w.type),fe=b(w.internalFormat,le,Le,w.normalized,w.colorSpace,w.isVideoTexture);at(q,w);let he,De=w.mipmaps,Oe=w.isVideoTexture!==!0,$e=ce.__version===void 0||K===!0,z=oe.dataReady,ue=S(w,te);if(w.isDepthTexture)fe=v(w.format===$s,w.type),$e&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,fe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,fe,te.width,te.height,0,le,Le,null));else if(w.isDataTexture)if(De.length>0){Oe&&$e&&t.texStorage2D(i.TEXTURE_2D,ue,fe,De[0].width,De[0].height);for(let Q=0,de=De.length;Q<de;Q++)he=De[Q],Oe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,le,Le,he.data):t.texImage2D(i.TEXTURE_2D,Q,fe,he.width,he.height,0,le,Le,he.data);w.generateMipmaps=!1}else Oe?($e&&t.texStorage2D(i.TEXTURE_2D,ue,fe,te.width,te.height),z&&ne(w,te,le,Le)):t.texImage2D(i.TEXTURE_2D,0,fe,te.width,te.height,0,le,Le,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Oe&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,fe,De[0].width,De[0].height,te.depth);for(let Q=0,de=De.length;Q<de;Q++)if(he=De[Q],w.format!==ai)if(le!==null)if(Oe){if(z)if(w.layerUpdates.size>0){let be=od(he.width,he.height,w.format,w.type);for(let re of w.layerUpdates){let Ne=he.data.subarray(re*be/he.data.BYTES_PER_ELEMENT,(re+1)*be/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,re,he.width,he.height,1,le,Ne)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,te.depth,le,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,fe,he.width,he.height,te.depth,0,he.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,te.depth,le,Le,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,fe,he.width,he.height,te.depth,0,le,Le,he.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Oe&&$e&&t.texStorage2D(i.TEXTURE_2D,ue,fe,De[0].width,De[0].height);for(let Q=0,de=De.length;Q<de;Q++)he=De[Q],w.format!==ai?le!==null?Oe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,fe,he.width,he.height,0,he.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,le,Le,he.data):t.texImage2D(i.TEXTURE_2D,Q,fe,he.width,he.height,0,le,Le,he.data)}else if(w.isDataArrayTexture)if(Oe){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,fe,te.width,te.height,te.depth),z)if(w.layerUpdates.size>0){let Q=od(te.width,te.height,w.format,w.type);for(let de of w.layerUpdates){let be=te.data.subarray(de*Q/te.data.BYTES_PER_ELEMENT,(de+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,te.width,te.height,1,le,Le,be)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Le,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,te.width,te.height,te.depth,0,le,Le,te.data);else if(w.isData3DTexture)Oe?($e&&t.texStorage3D(i.TEXTURE_3D,ue,fe,te.width,te.height,te.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Le,te.data)):t.texImage3D(i.TEXTURE_3D,0,fe,te.width,te.height,te.depth,0,le,Le,te.data);else if(w.isFramebufferTexture){if($e)if(Oe)t.texStorage2D(i.TEXTURE_2D,ue,fe,te.width,te.height);else{let Q=te.width,de=te.height;for(let be=0;be<ue;be++)t.texImage2D(i.TEXTURE_2D,be,fe,Q,de,0,le,Le,null),Q>>=1,de>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),te.parentNode!==Q){Q.appendChild(te),h.add(w),Q.onpaint=de=>{let be=de.changedElements;for(let re of h)be.includes(re.image)&&(re.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let be=i.RGBA,re=i.RGBA,Ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,re,Ne,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Oe&&$e){let Q=Ft(De[0]);t.texStorage2D(i.TEXTURE_2D,ue,fe,Q.width,Q.height)}for(let Q=0,de=De.length;Q<de;Q++)he=De[Q],Oe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,le,Le,he):t.texImage2D(i.TEXTURE_2D,Q,fe,le,Le,he);w.generateMipmaps=!1}else if(Oe){if($e){let Q=Ft(te);t.texStorage2D(i.TEXTURE_2D,ue,fe,Q.width,Q.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Le,te)}else t.texImage2D(i.TEXTURE_2D,0,fe,le,Le,te);p(w)&&y(q),ce.__version=oe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Be(L,w,H){if(w.image.length!==6)return;let q=dt(L,w),K=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);let oe=n.get(K);if(K.version!==oe.__version||q===!0){t.activeTexture(i.TEXTURE0+H);let ce=rt.getPrimaries(rt.workingColorSpace),Z=w.colorSpace===fi?null:rt.getPrimaries(w.colorSpace),te=w.colorSpace===fi||ce===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let le=w.isCompressedTexture||w.image[0].isCompressedTexture,Le=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let re=0;re<6;re++)!le&&!Le?fe[re]=g(w.image[re],!0,s.maxCubemapSize):fe[re]=Le?w.image[re].image:w.image[re],fe[re]=Cn(w,fe[re]);let he=fe[0],De=r.convert(w.format,w.colorSpace),Oe=r.convert(w.type),$e=b(w.internalFormat,De,Oe,w.normalized,w.colorSpace),z=w.isVideoTexture!==!0,ue=oe.__version===void 0||q===!0,Q=K.dataReady,de=S(w,he);at(i.TEXTURE_CUBE_MAP,w);let be;if(le){z&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,$e,he.width,he.height);for(let re=0;re<6;re++){be=fe[re].mipmaps;for(let Ne=0;Ne<be.length;Ne++){let Ae=be[Ne];w.format!==ai?De!==null?z?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,Ae.width,Ae.height,De,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,$e,Ae.width,Ae.height,0,Ae.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,Ae.width,Ae.height,De,Oe,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,$e,Ae.width,Ae.height,0,De,Oe,Ae.data)}}}else{if(be=w.mipmaps,z&&ue){be.length>0&&de++;let re=Ft(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,$e,re.width,re.height)}for(let re=0;re<6;re++)if(Le){z?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,fe[re].width,fe[re].height,De,Oe,fe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,fe[re].width,fe[re].height,0,De,Oe,fe[re].data);for(let Ne=0;Ne<be.length;Ne++){let Wt=be[Ne].image[re].image;z?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,Wt.width,Wt.height,De,Oe,Wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,$e,Wt.width,Wt.height,0,De,Oe,Wt.data)}}else{z?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,Oe,fe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,De,Oe,fe[re]);for(let Ne=0;Ne<be.length;Ne++){let Ae=be[Ne];z?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,De,Oe,Ae.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,$e,De,Oe,Ae.image[re])}}}p(w)&&y(i.TEXTURE_CUBE_MAP),oe.__version=K.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function _e(L,w,H,q,K,oe){let ce=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),te=b(H.internalFormat,ce,Z,H.normalized,H.colorSpace),le=n.get(w),Le=n.get(H);if(Le.__renderTarget=w,!le.__hasExternalTextures){let fe=Math.max(1,w.width>>oe),he=Math.max(1,w.height>>oe);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,oe,te,fe,he,w.depth,0,ce,Z,null):t.texImage2D(K,oe,te,fe,he,0,ce,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),fn(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,Le.__webglTexture,0,en(w)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,Le.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(L,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){let q=w.depthTexture,K=q&&q.isDepthTexture?q.type:null,oe=v(w.stencilBuffer,K),ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fn(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,en(w),oe,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,en(w),oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,oe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,L)}else{let q=w.textures;for(let K=0;K<q.length;K++){let oe=q[K],ce=r.convert(oe.format,oe.colorSpace),Z=r.convert(oe.type),te=b(oe.internalFormat,ce,Z,oe.normalized,oe.colorSpace);fn(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,en(w),te,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,en(w),te,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,te,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function an(L,w,H){let q=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(w.depthTexture);if(K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,w.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),at(i.TEXTURE_CUBE_MAP,w.depthTexture);let le=r.convert(w.depthTexture.format),Le=r.convert(w.depthTexture.type),fe;w.depthTexture.format===Gi?fe=i.DEPTH_COMPONENT24:w.depthTexture.format===$s&&(fe=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,w.width,w.height,0,le,Le,null)}}else ie(w.depthTexture,0);let oe=K.__webglTexture,ce=en(w),Z=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,te=w.depthTexture.format===$s?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Gi)fn(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,oe,0);else if(w.depthTexture.format===$s)fn(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(L){let w=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){let q=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),q){let K=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),w.__depthDisposeCallback=K}w.__boundDepthTexture=q}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)an(w.__webglFramebuffer[q],L,q);else{let q=L.texture.mipmaps;q&&q.length>0?an(w.__webglFramebuffer[0],L,0):an(w.__webglFramebuffer,L,0)}else if(H){w.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[q]),w.__webglDepthbuffer[q]===void 0)w.__webglDepthbuffer[q]=i.createRenderbuffer(),Ze(w.__webglDepthbuffer[q],L,!1);else{let K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,oe)}}else{let q=L.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ze(w.__webglDepthbuffer,L,!1);else{let K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(L,w,H){let q=n.get(L);w!==void 0&&_e(q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ct(L)}function Gt(L){let w=L.texture,H=n.get(L),q=n.get(w);L.addEventListener("dispose",_);let K=L.textures,oe=L.isWebGLCubeRenderTarget===!0,ce=K.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=w.version,a.memory.textures++),oe){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let te=0;te<w.mipmaps.length;te++)H.__webglFramebuffer[Z][te]=i.createFramebuffer()}else H.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<w.mipmaps.length;Z++)H.__webglFramebuffer[Z]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Z=0,te=K.length;Z<te;Z++){let le=n.get(K[Z]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&fn(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){let te=K[Z];H.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);let le=r.convert(te.format,te.colorSpace),Le=r.convert(te.type),fe=b(te.internalFormat,le,Le,te.normalized,te.colorSpace,L.isXRRenderTarget===!0),he=en(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,fe,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),at(i.TEXTURE_CUBE_MAP,w);for(let Z=0;Z<6;Z++)if(w.mipmaps&&w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)_e(H.__webglFramebuffer[Z][te],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else _e(H.__webglFramebuffer[Z],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(w)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let Z=0,te=K.length;Z<te;Z++){let le=K[Z],Le=n.get(le),fe=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Le.__webglTexture),at(fe,le),_e(H.__webglFramebuffer,L,le,i.COLOR_ATTACHMENT0+Z,fe,0),p(le)&&y(fe)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Z=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,q.__webglTexture),at(Z,w),w.mipmaps&&w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)_e(H.__webglFramebuffer[te],L,w,i.COLOR_ATTACHMENT0,Z,te);else _e(H.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,Z,0);p(w)&&y(Z),t.unbindTexture()}L.depthBuffer&&ct(L)}function ft(L){let w=L.textures;for(let H=0,q=w.length;H<q;H++){let K=w[H];if(p(K)){let oe=M(L),ce=n.get(K).__webglTexture;t.bindTexture(oe,ce),y(oe),t.unbindTexture()}}}let Zt=[],vn=[];function Wn(L){if(L.samples>0){if(fn(L)===!1){let w=L.textures,H=L.width,q=L.height,K=i.COLOR_BUFFER_BIT,oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(L),Z=w.length>1;if(Z)for(let le=0;le<w.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let te=L.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<w.length;le++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);let Le=n.get(w[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,K,i.NEAREST),l===!0&&(Zt.length=0,vn.length=0,Zt.push(i.COLOR_ATTACHMENT0+le),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Zt.push(oe),vn.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let le=0;le<w.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);let Le=n.get(w[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function en(L){return Math.min(s.maxSamples,L.samples)}function fn(L){let w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function k(L){let w=a.render.frame;d.get(L)!==w&&(d.set(L,w),L.update())}function Cn(L,w){let H=L.colorSpace,q=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==zn&&H!==fi&&(rt.getTransfer(H)===Pt?(q!==ai||K!==Zn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",H)),w}function Ft(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.getTextureUnits=I,this.setTextureUnits=U,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=xt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Wn,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=fn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function RM(i,e){function t(n,s=fi){let r,a=rt.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xu)return i.BYTE;if(n===ju)return i.SHORT;if(n===ka)return i.UNSIGNED_SHORT;if(n===Sl)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===Ju)return i.ALPHA;if(n===Zu)return i.RGB;if(n===ai)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===Tl)return i.RED;if(n===Al)return i.RED_INTEGER;if(n===Qs)return i.RG;if(n===Rl)return i.RG_INTEGER;if(n===Cl)return i.RGBA_INTEGER;if(n===Go||n===Wo||n===qo||n===Xo)if(a===Pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pl||n===Il||n===Ll||n===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===Nl||n===Ul||n===Ol||n===zl||n===jo||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fl||n===Nl)return a===Pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ol)return r.COMPRESSED_R11_EAC;if(n===zl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jo)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bl||n===Hl||n===Vl||n===Gl||n===Wl||n===ql||n===Xl||n===jl||n===Kl||n===Yl||n===Jl||n===Zl||n===$l||n===Ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eh||n===th||n===nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eh)return a===Pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ih||n===sh||n===Ko||n===rh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ih)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ba?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PM=`
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

}`,vd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Lo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bn({vertexShader:CM,fragmentShader:PM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Md=class extends Wi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new vd,p={},y=t.getContextAttributes(),M=null,b=null,v=[],S=[],T=new We,_=null,E=null,C=new hn;C.viewport=new _t;let P=new hn;P.viewport=new _t;let D=[C,P],F=new yl,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=v[Y];return ne===void 0&&(ne=new wa,v[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=v[Y];return ne===void 0&&(ne=new wa,v[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=v[Y];return ne===void 0&&(ne=new wa,v[Y]=ne),ne.getHandSpace()};function B(Y){let ne=S.indexOf(Y.inputSource);if(ne===-1)return;let ve=v[ne];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<v.length;Y++){let ne=S[Y];ne!==null&&(S[Y]=null,v[Y].disconnect(ne))}I=null,U=null,g.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(M),f=null,u=null,h=null,s=null,b=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),E!==null){let Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Be=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=y.stencil?$s:Gi,Be=y.stencil?Ba:Ci);let Ze={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Xn(u.textureWidth,u.textureHeight,{format:ai,type:Zn,depthTexture:new js(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Xn(f.framebufferWidth,f.framebufferHeight,{format:ai,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(Y){for(let ne=0;ne<Y.removed.length;ne++){let ve=Y.removed[ne],Be=S.indexOf(ve);Be>=0&&(S[Be]=null,v[Be].disconnect(ve))}for(let ne=0;ne<Y.added.length;ne++){let ve=Y.added[ne],Be=S.indexOf(ve);if(Be===-1){for(let Ze=0;Ze<v.length;Ze++)if(Ze>=S.length){S.push(ve),Be=Ze;break}else if(S[Ze]===null){S[Ze]=ve,Be=Ze;break}if(Be===-1)break}let _e=v[Be];_e&&_e.connect(ve)}}let X=new R,J=new R;function ee(Y,ne,ve){X.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);let Be=X.distanceTo(J),_e=ne.projectionMatrix.elements,Ze=ve.projectionMatrix.elements,an=_e[14]/(_e[10]-1),ct=_e[14]/(_e[10]+1),xt=(_e[9]+1)/_e[5],Gt=(_e[9]-1)/_e[5],ft=(_e[8]-1)/_e[0],Zt=(Ze[8]+1)/Ze[0],vn=an*ft,Wn=an*Zt,en=Be/(-ft+Zt),fn=en*-ft;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(fn),Y.translateZ(en),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let k=an+en,Cn=ct+en,Ft=vn-fn,L=Wn+(Be-fn),w=xt*ct/Cn*k,H=Gt*ct/Cn*k;Y.projectionMatrix.makePerspective(Ft,L,w,H,k,Cn),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ye(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ne=Y.near,ve=Y.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),F.near=P.near=C.near=ne,F.far=P.far=C.far=ve,(I!==F.near||U!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,U=F.far),F.layers.mask=Y.layers.mask|6,C.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let Be=Y.parent,_e=F.cameras;ye(F,Be);for(let Ze=0;Ze<_e.length;Ze++)ye(_e[Ze],Be);_e.length===2?ee(F,C,P):F.projectionMatrix.copy(C.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),we(Y,F,Be)};function we(Y,ne,ve){ve===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let At=null;function at(Y,ne){if(d=ne.getViewerPose(c||a),m=ne,d!==null){let ve=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Be=!1;ve.length!==F.cameras.length&&(F.cameras.length=0,Be=!0);for(let ct=0;ct<ve.length;ct++){let xt=ve[ct],Gt=null;if(f!==null)Gt=f.getViewport(xt);else{let Zt=h.getViewSubImage(u,xt);Gt=Zt.viewport,ct===0&&(e.setRenderTargetTextures(b,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(b))}let ft=D[ct];ft===void 0&&(ft=new hn,ft.layers.enable(ct),ft.viewport=new _t,D[ct]=ft),ft.matrix.fromArray(xt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(xt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),ct===0&&(F.matrix.copy(ft.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Be===!0&&F.cameras.push(ft)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let ct=h.getDepthInformation(ve[0]);ct&&ct.isValid&&ct.texture&&g.init(ct,s.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let ct=0;ct<ve.length;ct++){let xt=ve[ct].camera;if(xt){let Gt=p[xt];Gt||(Gt=new Lo,p[xt]=Gt);let ft=h.getCameraImage(xt);Gt.sourceTexture=ft}}}}for(let ve=0;ve<v.length;ve++){let Be=S[ve],_e=v[ve];Be!==null&&_e!==void 0&&_e.update(Be,ne,c||a)}At&&At(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}let dt=new Km;dt.setAnimationLoop(at),this.setAnimationLoop=function(Y){At=Y},this.dispose=function(){}}},IM=new qe,eg=new Ve;eg.set(-1,0,0,0,1,0,0,0,1);function LM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,sd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,M,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Hn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Hn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),M=y.envMap,b=y.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(IM.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(eg),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Hn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function DM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let S=v.program;n.uniformBlockBinding(b,S)}function c(b,v){let S=s[b.id];S===void 0&&(g(b),S=d(b),s[b.id]=S,b.addEventListener("dispose",y));let T=v.program;n.updateUBOMapping(b,T);let _=e.render.frame;r[b.id]!==_&&(u(b),r[b.id]=_)}function d(b){let v=h();b.__bindingPointIndex=v;let S=i.createBuffer(),T=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let v=s[b.id],S=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let _=0,E=S.length;_<E;_++){let C=S[_];if(Array.isArray(C))for(let P=0,D=C.length;P<D;P++)f(C[P],_,P,T);else f(C,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,v,S,T){if(x(b,v,S,T)===!0){let _=b.__offset,E=b.value;if(Array.isArray(E)){let C=0;for(let P=0;P<E.length;P++){let D=E[P],F=p(D);m(D,b.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function m(b,v,S){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,S)}function x(b,v,S,T){let _=b.value,E=v+"_"+S;if(T[E]===void 0)return typeof _=="number"||typeof _=="boolean"?T[E]=_:ArrayBuffer.isView(_)?T[E]=_.slice():T[E]=_.clone(),!0;{let C=T[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return T[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(b){let v=b.uniforms,S=0,T=16;for(let E=0,C=v.length;E<C;E++){let P=Array.isArray(v[E])?v[E]:[v[E]];for(let D=0,F=P.length;D<F;D++){let I=P[D],U=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=U.length;B<W;B++){let ie=U[B],X=p(ie),J=S%T,ee=J%X.boundary,ye=J+ee;S+=ee,ye!==0&&T-ye<X.storage&&(S+=T-ye),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=X.storage}}}let _=S%T;return _>0&&(S+=T-_),b.__size=S,b.__cache={},this}function p(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",b),v}function y(b){let v=b.target;v.removeEventListener("dispose",y);let S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function M(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var FM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function NM(){return Ji===null&&(Ji=new qs(FM,16,16,Qs,Pi),Ji.name="DFG_LUT",Ji.minFilter=tn,Ji.magFilter=tn,Ji.wrapS=ui,Ji.wrapT=ui,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var Qo=class{constructor(e={}){let{canvas:t=_m(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Zn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,g=new Set([Cl,Rl,Al]),p=new Set([Zn,Ci,ka,Ba,wl,El]),y=new Uint32Array(4),M=new Int32Array(4),b=new R,v=null,S=null,T=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,D=null,F=null,I=null,U=null;this._outputColorSpace=Xt;let B=0,W=0,ie=null,X=-1,J=null,ee=new _t,ye=new _t,we=null,At=new Ue(0),at=0,dt=t.width,Y=t.height,ne=1,ve=null,Be=null,_e=new _t(0,0,dt,Y),Ze=new _t(0,0,dt,Y),an=!1,ct=new Ra,xt=!1,Gt=!1,ft=new qe,Zt=new R,vn=new _t,Wn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},en=!1;function fn(){return ie===null?ne:1}let k=n;function Cn(A,O){return t.getContext(A,O)}let Ft,L,w,H,q,K,oe,ce,Z,te,le,Le,fe,he,De,Oe,$e,z,ue,Q,de,be,re;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Wt,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",bi,!1),k===null){let O="webgl2";if(k=Cn(O,A),k===null)throw Cn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(A){throw t.removeEventListener("webglcontextlost",Wt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",bi,!1),He("WebGLRenderer: "+A.message),A}function Ne(){Ft=new Vy(k),Ft.init(),de=new RM(k,Ft),L=new Ly(k,Ft,e,de),w=new TM(k,Ft),L.reversedDepthBuffer&&u&&w.buffers.depth.setReversed(!0),F=k.createFramebuffer(),I=k.createFramebuffer(),U=k.createFramebuffer(),H=new qy(k),q=new dM,K=new AM(k,Ft,w,q,L,de,H),oe=new Hy(C),ce=new jx(k),be=new Py(k,ce),Z=new Gy(k,ce,H,be),te=new jy(k,Z,ce,be,H),z=new Xy(k,L,K),De=new Dy(q),le=new uM(C,oe,Ft,L,be,De),Le=new LM(C,q),fe=new pM,he=new yM(Ft),$e=new Cy(C,oe,w,te,m,l),Oe=new EM(C,te,L),re=new DM(k,H,L,w),ue=new Iy(k,Ft,H),Q=new Wy(k,Ft,H),H.programs=le.programs,C.capabilities=L,C.extensions=Ft,C.properties=q,C.renderLists=fe,C.shadowMap=Oe,C.state=w,C.info=H}x!==Zn&&(E=new Yy(x,t.width,t.height,o,s,r));let Ae=new Md(C,k);this.xr=Ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=Ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(dt,Y,!1))},this.getSize=function(A){return A.set(dt,Y)},this.setSize=function(A,O,j=!0){if(Ae.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=A,Y=O,t.width=Math.floor(A*ne),t.height=Math.floor(O*ne),j===!0&&(t.style.width=A+"px",t.style.height=O+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(dt*ne,Y*ne).floor()},this.setDrawingBufferSize=function(A,O,j){dt=A,Y=O,ne=j,t.width=Math.floor(A*j),t.height=Math.floor(O*j),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(x===Zn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(_e)},this.setViewport=function(A,O,j,V){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,O,j,V),w.viewport(ee.copy(_e).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(Ze)},this.setScissor=function(A,O,j,V){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,O,j,V),w.scissor(ye.copy(Ze).multiplyScalar(ne).round())},this.getScissorTest=function(){return an},this.setScissorTest=function(A){w.setScissorTest(an=A)},this.setOpaqueSort=function(A){ve=A},this.setTransparentSort=function(A){Be=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,j=!0){let V=0;if(A){let G=!1;if(ie!==null){let ge=ie.texture.format;G=g.has(ge)}if(G){let ge=ie.texture.type,Se=p.has(ge),me=$e.getClearColor(),Ee=$e.getClearAlpha(),Ce=me.r,tt=me.g,lt=me.b;Se?(y[0]=Ce,y[1]=tt,y[2]=lt,y[3]=Ee,k.clearBufferuiv(k.COLOR,0,y)):(M[0]=Ce,M[1]=tt,M[2]=lt,M[3]=Ee,k.clearBufferiv(k.COLOR,0,M))}else V|=k.COLOR_BUFFER_BIT}O&&(V|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Wt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",bi,!1),$e.dispose(),fe.dispose(),he.dispose(),q.dispose(),oe.dispose(),te.dispose(),be.dispose(),re.dispose(),le.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",qf),Ae.removeEventListener("sessionend",Xf),pr.stop()};function Wt(A){A.preventDefault(),To("WebGLRenderer: Context Lost."),P=!0}function Rt(){To("WebGLRenderer: Context Restored."),P=!1;let A=H.autoReset,O=Oe.enabled,j=Oe.autoUpdate,V=Oe.needsUpdate,G=Oe.type;Ne(),H.autoReset=A,Oe.enabled=O,Oe.autoUpdate=j,Oe.needsUpdate=V,Oe.type=G}function bi(A){He("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ki(A){let O=A.target;O.removeEventListener("dispose",ki),U0(O)}function U0(A){O0(A),q.remove(A)}function O0(A){let O=q.get(A).programs;O!==void 0&&(O.forEach(function(j){le.releaseProgram(j)}),A.isShaderMaterial&&le.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,j,V,G,ge){O===null&&(O=Wn);let Se=G.isMesh&&G.matrixWorld.determinantAffine()<0,me=B0(A,O,j,V,G);w.setMaterial(V,Se);let Ee=j.index,Ce=1;if(V.wireframe===!0){if(Ee=Z.getWireframeAttribute(j),Ee===void 0)return;Ce=2}let tt=j.drawRange,lt=j.attributes.position,Te=tt.start*Ce,Ct=(tt.start+tt.count)*Ce;ge!==null&&(Te=Math.max(Te,ge.start*Ce),Ct=Math.min(Ct,(ge.start+ge.count)*Ce)),Ee!==null?(Te=Math.max(Te,0),Ct=Math.min(Ct,Ee.count)):lt!=null&&(Te=Math.max(Te,0),Ct=Math.min(Ct,lt.count));let pn=Ct-Te;if(pn<0||pn===1/0)return;be.setup(G,V,me,j,Ee);let Kt,Bt=ue;if(Ee!==null&&(Kt=ce.get(Ee),Bt=Q,Bt.setIndex(Kt)),G.isMesh)V.wireframe===!0?(w.setLineWidth(V.wireframeLinewidth*fn()),Bt.setMode(k.LINES)):Bt.setMode(k.TRIANGLES);else if(G.isLine){let Pn=V.linewidth;Pn===void 0&&(Pn=1),w.setLineWidth(Pn*fn()),G.isLineSegments?Bt.setMode(k.LINES):G.isLineLoop?Bt.setMode(k.LINE_LOOP):Bt.setMode(k.LINE_STRIP)}else G.isPoints?Bt.setMode(k.POINTS):G.isSprite&&Bt.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(Ft.get("WEBGL_multi_draw"))Bt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Pn=G._multiDrawStarts,Me=G._multiDrawCounts,Un=G._multiDrawCount,mt=Ee?ce.get(Ee).bytesPerElement:1,li=q.get(V).currentProgram.getUniforms();for(let Bi=0;Bi<Un;Bi++)li.setValue(k,"_gl_DrawID",Bi),Bt.render(Pn[Bi]/mt,Me[Bi])}else if(G.isInstancedMesh)Bt.renderInstances(Te,pn,G.count);else if(j.isInstancedBufferGeometry){let Pn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Me=Math.min(j.instanceCount,Pn);Bt.renderInstances(Te,pn,Me)}else Bt.render(Te,pn)};function Wf(A,O,j,V){D!==null&&A.isNodeMaterial&&D.setObject(V,A),xt===!0&&De.setState(A,j,!1),A.transparent===!0&&A.side===Dn&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,vc(A,O,V),A.side=Ki,A.needsUpdate=!0,vc(A,O,V),A.side=Dn):vc(A,O,V)}this.compile=function(A,O,j=null){j===null&&(j=A),D!==null&&D.renderStart(A,O,j),S=he.get(j),S.init(O),_.push(S),j.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),A!==j&&A.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),Gt=this.localClippingEnabled,xt=De.init(this.clippingPlanes,Gt),xt===!0&&De.setGlobalState(this.clippingPlanes,O),D!==null&&Oe.render(S.state.shadowsArray,j,O);let V=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){let me=ge[Se];Wf(me,j,O,G),V.add(me)}else Wf(ge,j,O,G),V.add(ge)}),S=_.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(A,O,j=null){let V=this.compile(A,O,j);return new Promise(G=>{function ge(){if(V.forEach(function(Se){let Ee=q.get(Se).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(Se)}),V.size===0){G(A);return}setTimeout(ge,10)}Ft.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let jh=null;function z0(A){jh&&jh(A)}function qf(){pr.stop()}function Xf(){pr.start()}let pr=new Km;pr.setAnimationLoop(z0),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(A){jh=A,Ae.setAnimationLoop(A),A===null?pr.stop():pr.start()},Ae.addEventListener("sessionstart",qf),Ae.addEventListener("sessionend",Xf),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(A,O);let j=Ae.enabled===!0&&Ae.isPresenting===!0,V=E!==null&&(ie===null||j)&&E.begin(C,ie);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(O),O=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,O,ie),S=he.get(A,_.length),S.init(O),S.state.textureUnits=K.getTextureUnits(),_.push(S),ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ct.setFromProjectionMatrix(ft,wi,O.reversedDepth),Gt=this.localClippingEnabled,xt=De.init(this.clippingPlanes,Gt),v=fe.get(A,T.length),v.init(),T.push(v),Ae.enabled===!0&&Ae.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&Kh(Se,O,-1/0,C.sortObjects)}Kh(A,O,0,C.sortObjects),v.finish(),D!==null&&D.updateLights(S.state.lightsArray),C.sortObjects===!0&&v.sort(ve,Be),en=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,en&&$e.addToRenderList(v,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&De.beginShadows();let G=S.state.shadowsArray;if(Oe.render(G,A,O),xt===!0&&De.endShadows(),(V&&E.hasRenderPass())===!1){let Se=v.opaque,me=v.transmissive;if(S.setupLights(),O.isArrayCamera){let Ee=O.cameras;if(me.length>0)for(let Ce=0,tt=Ee.length;Ce<tt;Ce++){let lt=Ee[Ce];Kf(Se,me,A,lt)}en&&$e.render(A);for(let Ce=0,tt=Ee.length;Ce<tt;Ce++){let lt=Ee[Ce];jf(v,A,lt,lt.viewport)}}else me.length>0&&Kf(Se,me,A,O),en&&$e.render(A),jf(v,A,O)}ie!==null&&W===0&&(K.updateMultisampleRenderTarget(ie),K.updateRenderTargetMipmap(ie)),V&&E.end(C),A.isScene===!0&&A.onAfterRender(C,A,O),be.resetDefaultState(),X=-1,J=null,_.pop(),_.length>0?(S=_[_.length-1],K.setTextureUnits(S.state.textureUnits),xt===!0&&De.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,D!==null&&D.renderEnd()};function Kh(A,O,j,V){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ct)){V&&vn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ft);let Se=te.update(A),me=A.material;me.visible&&v.push(A,Se,me,j,vn.z,null,O)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ct))){let Se=te.update(A),me=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vn.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),vn.copy(Se.boundingSphere.center)),vn.applyMatrix4(A.matrixWorld).applyMatrix4(ft)),Array.isArray(me)){let Ee=Se.groups;for(let Ce=0,tt=Ee.length;Ce<tt;Ce++){let lt=Ee[Ce],Te=me[lt.materialIndex];Te&&Te.visible&&v.push(A,Se,Te,j,vn.z,lt,O)}}else me.visible&&v.push(A,Se,me,j,vn.z,null,O)}}let ge=A.children;for(let Se=0,me=ge.length;Se<me;Se++)Kh(ge[Se],O,j,V)}function jf(A,O,j,V){let{opaque:G,transmissive:ge,transparent:Se}=A;S.setupLightsView(j),xt===!0&&De.setGlobalState(C.clippingPlanes,j),V&&w.viewport(ee.copy(V)),G.length>0&&yc(G,O,j),ge.length>0&&yc(ge,O,j),Se.length>0&&yc(Se,O,j),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Kf(A,O,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let Te=Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new Xn(1,1,{generateMipmaps:!0,type:Te?Pi:Zn,minFilter:si,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let ge=S.state.transmissionRenderTarget[V.id],Se=V.viewport||ee;ge.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let me=C.getRenderTarget(),Ee=C.getActiveCubeFace(),Ce=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(At),at=C.getClearAlpha(),at<1&&C.setClearColor(16777215,.5),C.clear(),en&&$e.render(j);let tt=C.toneMapping;C.toneMapping=Ri;let lt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),xt===!0&&De.setGlobalState(C.clippingPlanes,V),yc(A,j,V),K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ct=0,pn=O.length;Ct<pn;Ct++){let Kt=O[Ct],{object:Bt,geometry:Pn,material:Me,group:Un}=Kt;if(Me.side===Dn&&Bt.layers.test(V.layers)){let mt=Me.side;Me.side=Hn,Me.needsUpdate=!0,Yf(Bt,j,V,Pn,Me,Un),Me.side=mt,Me.needsUpdate=!0,Te=!0}}Te===!0&&(K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,Ee,Ce),C.setClearColor(At,at),lt!==void 0&&(V.viewport=lt),C.toneMapping=tt}function yc(A,O,j){let V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,ge=A.length;G<ge;G++){let Se=A[G],{object:me,geometry:Ee,group:Ce}=Se,tt=Se.material;tt.allowOverride===!0&&V!==null&&(tt=V),me.layers.test(j.layers)&&Yf(me,O,j,Ee,tt,Ce)}}function Yf(A,O,j,V,G,ge){D!==null&&G.isNodeMaterial&&D.setObject(A,G),A.onBeforeRender(C,O,j,V,G,ge),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(C,O,j,V,A,ge),G.transparent===!0&&G.side===Dn&&G.forceSinglePass===!1?(G.side=Hn,G.needsUpdate=!0,C.renderBufferDirect(j,O,V,G,A,ge),G.side=Ki,G.needsUpdate=!0,C.renderBufferDirect(j,O,V,G,A,ge),G.side=Dn):C.renderBufferDirect(j,O,V,G,A,ge),A.onAfterRender(C,O,j,V,G,ge)}function vc(A,O,j){O.isScene!==!0&&(O=Wn);let V=q.get(A),G=S.state.lights,ge=S.state.shadowsArray,Se=G.state.version,me=le.getParameters(A,G.state,ge,O,j,S.state.lightProbeGridArray),Ee=le.getProgramCacheKey(me),Ce=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=oe.get(A.envMap||V.environment,tt),V.envMapRotation=V.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ce===void 0&&(A.addEventListener("dispose",ki),Ce=new Map,V.programs=Ce);let lt=Ce.get(Ee);if(lt!==void 0){if(V.currentProgram===lt&&V.lightsStateVersion===Se)return Zf(A,me),lt}else me.uniforms=le.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,j,me),A.onBeforeCompile(me,C),lt=le.acquireProgram(me,Ee),Ce.set(Ee,lt),V.uniforms=me.uniforms;let Te=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Te.clippingPlanes=De.uniform),Zf(A,me),V.needsLights=V0(A),V.lightsStateVersion=Se,V.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.sunLights.value=G.state.sun,Te.sunLightShadows.value=G.state.sunShadow,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.sunShadowMatrix.value=G.state.sunShadowMatrix,Te.sunShadowCascade.value=G.state.sunShadowCascade,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=lt,V.uniformsList=null,lt}function Jf(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=Wa.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Zf(A,O){let j=q.get(A);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function k0(A,O){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(O.matrixWorld);for(let j=0,V=A.length;j<V;j++){let G=A[j];if(G.texture!==null&&G.boundingBox.containsPoint(b))return G}return null}function B0(A,O,j,V,G){O.isScene!==!0&&(O=Wn),K.resetTextureUnits();let ge=O.fog,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,me=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:rt.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ce=oe.get(V.envMap||Se,Ee),tt=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,lt=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!j.morphAttributes.position,Ct=!!j.morphAttributes.normal,pn=!!j.morphAttributes.color,Kt=Ri;V.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Kt=C.toneMapping);let Bt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pn=Bt!==void 0?Bt.length:0,Me=q.get(V),Un=S.state.lights;if(xt===!0&&(Gt===!0||A!==J)){let qt=A===J&&V.id===X;De.setState(V,A,qt)}let mt=!1;V.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Un.state.version||Me.outputColorSpace!==me||G.isBatchedMesh&&Me.batching===!1||!G.isBatchedMesh&&Me.batching===!0||G.isBatchedMesh&&Me.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Me.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Me.instancing===!1||!G.isInstancedMesh&&Me.instancing===!0||G.isSkinnedMesh&&Me.skinning===!1||!G.isSkinnedMesh&&Me.skinning===!0||G.isInstancedMesh&&Me.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Me.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Me.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Me.instancingMorph===!1&&G.morphTexture!==null||Me.envMap!==Ce||V.fog===!0&&Me.fog!==ge||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==De.numPlanes||Me.numIntersection!==De.numIntersection)||Me.vertexAlphas!==tt||Me.vertexTangents!==lt||Me.morphTargets!==Te||Me.morphNormals!==Ct||Me.morphColors!==pn||Me.toneMapping!==Kt||Me.morphTargetsCount!==Pn||!!Me.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Me.__version=V.version);let li=Me.currentProgram;mt===!0&&(li=vc(V,O,G),D&&V.isNodeMaterial&&D.onUpdateProgram(V,li,Me));let Bi=!1,Ds=!1,ea=!1,Ut=li.getUniforms(),ln=Me.uniforms;if(w.useProgram(li.program)&&(Bi=!0,Ds=!0,ea=!0),V.id!==X&&(X=V.id,Ds=!0),Me.needsLights){let qt=k0(S.state.lightProbeGridArray,G);Me.lightProbeGrid!==qt&&(Me.lightProbeGrid=qt,Ds=!0)}if(Bi||J!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ut.setValue(k,"projectionMatrix",A.projectionMatrix),Ut.setValue(k,"viewMatrix",A.matrixWorldInverse);let Ns=Ut.map.cameraPosition;Ns!==void 0&&Ns.setValue(k,Zt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Ut.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ut.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,Ds=!0,ea=!0)}if(Me.needsLights&&(Un.state.sunShadowMap.length>0&&Ut.setValue(k,"sunShadowMap",Un.state.sunShadowMap,K),Un.state.directionalShadowMap.length>0&&Ut.setValue(k,"directionalShadowMap",Un.state.directionalShadowMap,K),Un.state.spotShadowMap.length>0&&Ut.setValue(k,"spotShadowMap",Un.state.spotShadowMap,K),Un.state.pointShadowMap.length>0&&Ut.setValue(k,"pointShadowMap",Un.state.pointShadowMap,K)),G.isSkinnedMesh){Ut.setOptional(k,G,"bindMatrix"),Ut.setOptional(k,G,"bindMatrixInverse");let qt=G.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ut.setValue(k,"boneTexture",qt.boneTexture,K))}G.isBatchedMesh&&(Ut.setOptional(k,G,"batchingTexture"),Ut.setValue(k,"batchingTexture",G._matricesTexture,K),Ut.setOptional(k,G,"batchingIdTexture"),Ut.setValue(k,"batchingIdTexture",G._indirectTexture,K),Ut.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&Ut.setValue(k,"batchingColorTexture",G._colorsTexture,K));let Fs=j.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0)&&z.update(G,j,li),(Ds||Me.receiveShadow!==G.receiveShadow)&&(Me.receiveShadow=G.receiveShadow,Ut.setValue(k,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(ln.envMapIntensity.value=O.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=NM()),Ds){if(Ut.setValue(k,"toneMappingExposure",C.toneMappingExposure),Me.needsLights&&H0(ln,ea),ge&&V.fog===!0&&Le.refreshFogUniforms(ln,ge),Le.refreshMaterialUniforms(ln,V,ne,Y,S.state.transmissionRenderTarget[A.id]),Me.needsLights&&Me.lightProbeGrid){let qt=Me.lightProbeGrid;ln.probesSH.value=qt.texture,ln.probesMin.value.copy(qt.boundingBox.min),ln.probesMax.value.copy(qt.boundingBox.max),ln.probesResolution.value.copy(qt.resolution)}Wa.upload(k,Jf(Me),ln,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Wa.upload(k,Jf(Me),ln,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ut.setValue(k,"center",G.center),Ut.setValue(k,"modelViewMatrix",G.modelViewMatrix),Ut.setValue(k,"normalMatrix",G.normalMatrix),Ut.setValue(k,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let qt=V.uniformsGroups;for(let Ns=0,ta=qt.length;Ns<ta;Ns++){let Qf=qt[Ns];re.update(Qf,li),re.bind(Qf,li)}}return li}function H0(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function V0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(A,O,j){let V=q.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=O,q.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let j=q.get(A);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,j=0){ie=A,B=O,W=j;let V=null,G=!1,ge=!1;if(A){let me=q.get(A);if(me.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(k.FRAMEBUFFER,me.__webglFramebuffer),ee.copy(A.viewport),ye.copy(A.scissor),we=A.scissorTest,w.viewport(ee),w.scissor(ye),w.setScissorTest(we),X=-1;return}else if(me.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(me.__hasExternalTextures)K.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let tt=A.depthTexture;if(me.__boundDepthTexture!==tt){if(tt!==null&&q.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}let Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);let Ce=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ce[O])?V=Ce[O][j]:V=Ce[O],G=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?V=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?V=Ce[j]:V=Ce,ee.copy(A.viewport),ye.copy(A.scissor),we=A.scissorTest}else ee.copy(_e).multiplyScalar(ne).floor(),ye.copy(Ze).multiplyScalar(ne).floor(),we=an;if(j!==0&&(V=F),w.bindFramebuffer(k.FRAMEBUFFER,V)&&w.drawBuffers(A,V),w.viewport(ee),w.scissor(ye),w.setScissorTest(we),G){let me=q.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,j)}else if(ge){let me=O;for(let Ee=0;Ee<A.textures.length;Ee++){let Ce=q.get(A.textures[Ee]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,j,me)}}else if(A!==null&&j!==0){let me=q.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,me.__webglTexture,j)}X=-1};function $f(A){let O=q.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=L.textureFormatReadable(A.format),O.__typeReadable=L.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,j,V,G,ge,Se,me=0){if(!(A&&A.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){w.bindFramebuffer(k.FRAMEBUFFER,Ee);try{let Ce=A.textures[me],tt=Ce.format,lt=Ce.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+me);let Te=$f(Ce);if(Te.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-V&&j>=0&&j<=A.height-G&&k.readPixels(O,j,V,G,de.convert(tt),de.convert(lt),ge)}finally{let Ce=ie!==null?q.get(ie).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(A,O,j,V,G,ge,Se,me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(O>=0&&O<=A.width-V&&j>=0&&j<=A.height-G){w.bindFramebuffer(k.FRAMEBUFFER,Ee);let Ce=A.textures[me],tt=Ce.format,lt=Ce.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+me);let Te=$f(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ct),k.bufferData(k.PIXEL_PACK_BUFFER,ge.byteLength,k.STREAM_READ),k.readPixels(O,j,V,G,de.convert(tt),de.convert(lt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let pn=ie!==null?q.get(ie).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,pn);let Kt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await vm(k,Kt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ct),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ge),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Ct),k.deleteSync(Kt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,j=0){let V=Math.pow(2,-j),G=Math.floor(A.image.width*V),ge=Math.floor(A.image.height*V),Se=O!==null?O.x:0,me=O!==null?O.y:0;K.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,Se,me,G,ge),w.unbindTexture()},this.copyTextureToTexture=function(A,O,j=null,V=null,G=0,ge=0){let Se,me,Ee,Ce,tt,lt,Te,Ct,pn,Kt=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(j!==null)Se=j.max.x-j.min.x,me=j.max.y-j.min.y,Ee=j.isBox3?j.max.z-j.min.z:1,Ce=j.min.x,tt=j.min.y,lt=j.isBox3?j.min.z:0;else{let ln=Math.pow(2,-G);Se=Math.floor(Kt.width*ln),me=Math.floor(Kt.height*ln),A.isDataArrayTexture?Ee=Kt.depth:A.isData3DTexture?Ee=Math.floor(Kt.depth*ln):Ee=1,Ce=0,tt=0,lt=0}V!==null?(Te=V.x,Ct=V.y,pn=V.z):(Te=0,Ct=0,pn=0);let Bt=de.convert(O.format),Pn=de.convert(O.type),Me;O.isData3DTexture?(K.setTexture3D(O,0),Me=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),Me=k.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),Me=k.TEXTURE_2D),w.activeTexture(k.TEXTURE0),w.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);let Un=w.getParameter(k.UNPACK_ROW_LENGTH),mt=w.getParameter(k.UNPACK_IMAGE_HEIGHT),li=w.getParameter(k.UNPACK_SKIP_PIXELS),Bi=w.getParameter(k.UNPACK_SKIP_ROWS),Ds=w.getParameter(k.UNPACK_SKIP_IMAGES);w.pixelStorei(k.UNPACK_ROW_LENGTH,Kt.width),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Kt.height),w.pixelStorei(k.UNPACK_SKIP_PIXELS,Ce),w.pixelStorei(k.UNPACK_SKIP_ROWS,tt),w.pixelStorei(k.UNPACK_SKIP_IMAGES,lt);let ea=A.isDataArrayTexture||A.isData3DTexture,Ut=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let ln=q.get(A),Fs=q.get(O),qt=q.get(ln.__renderTarget),Ns=q.get(Fs.__renderTarget);w.bindFramebuffer(k.READ_FRAMEBUFFER,qt.__webglFramebuffer),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ns.__webglFramebuffer);for(let ta=0;ta<Ee;ta++)ea&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,q.get(A).__webglTexture,G,lt+ta),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,q.get(O).__webglTexture,ge,pn+ta)),k.blitFramebuffer(Ce,tt,Se,me,Te,Ct,Se,me,k.DEPTH_BUFFER_BIT,k.NEAREST);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||q.has(A)){let ln=q.get(A),Fs=q.get(O);w.bindFramebuffer(k.READ_FRAMEBUFFER,I),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let qt=0;qt<Ee;qt++)ea?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,G,lt+qt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,G),Ut?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fs.__webglTexture,ge,pn+qt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Fs.__webglTexture,ge),G!==0?k.blitFramebuffer(Ce,tt,Se,me,Te,Ct,Se,me,k.COLOR_BUFFER_BIT,k.NEAREST):Ut?k.copyTexSubImage3D(Me,ge,Te,Ct,pn+qt,Ce,tt,Se,me):k.copyTexSubImage2D(Me,ge,Te,Ct,Ce,tt,Se,me);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ut?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Me,ge,Te,Ct,pn,Se,me,Ee,Bt,Pn,Kt.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(Me,ge,Te,Ct,pn,Se,me,Ee,Bt,Kt.data):k.texSubImage3D(Me,ge,Te,Ct,pn,Se,me,Ee,Bt,Pn,Kt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ge,Te,Ct,Se,me,Bt,Pn,Kt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ge,Te,Ct,Kt.width,Kt.height,Bt,Kt.data):k.texSubImage2D(k.TEXTURE_2D,ge,Te,Ct,Se,me,Bt,Pn,Kt);w.pixelStorei(k.UNPACK_ROW_LENGTH,Un),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt),w.pixelStorei(k.UNPACK_SKIP_PIXELS,li),w.pixelStorei(k.UNPACK_SKIP_ROWS,Bi),w.pixelStorei(k.UNPACK_SKIP_IMAGES,Ds),ge===0&&O.generateMipmaps&&k.generateMipmap(Me),w.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){B=0,W=0,ie=null,w.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};function Sd(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},d=[],h=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let y=0,M=o.length;y<M;y++){let b=o[y],v=i.attributes[b];l[b]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let S=i.morphAttributes[b];S&&(c[b]||(c[b]=[]),S.forEach((T,_)=>{let E=new T.array.constructor(T.count*T.itemSize);c[b][_]=new T.constructor(E,T.itemSize,T.normalized)}))}let f=e*.5,m=Math.log10(1/e),x=Math.pow(10,m),g=f*x;for(let y=0;y<r;y++){let M=n?n.getX(y):y,b="";for(let v=0,S=o.length;v<S;v++){let T=o[v],_=i.getAttribute(T),E=_.itemSize;for(let C=0;C<E;C++)b+=`${Math.trunc(_[h[C]](M)*x+g)},`}if(b in t)d.push(t[b]);else{for(let v=0,S=o.length;v<S;v++){let T=o[v],_=i.getAttribute(T),E=i.morphAttributes[T],C=_.itemSize,P=l[T],D=c[T];for(let F=0;F<C;F++){let I=h[F],U=u[F];if(P[U](a,_[I](M)),E)for(let B=0,W=E.length;B<W;B++)D[B][U](a,E[B][I](M))}}t[b]=a,d.push(a),a++}}let p=i.clone();for(let y in i.attributes){let M=l[y];if(p.setAttribute(y,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),y in c)for(let b=0;b<c[y].length;b++){let v=c[y][b];p.morphAttributes[y][b]=new v.constructor(v.array.slice(0,a*v.itemSize),v.itemSize,v.normalized)}}return p.setIndex(d),p}function wd(i,e){if(e===$u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ha||e===Yo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ha)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function tg(i){let e=new Map,t=new Map,n=i.clone();return ng(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ng(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ng(i.children[n],e.children[n],t)}var tc=class extends ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Id(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new ph(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ph(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ws.extractUrlBase(e);a=ws.resolveURL(c,this.path)}else a=ws.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new La(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===og){try{a[ot.KHR_BINARY_GLTF]=new qd(e)}catch(h){s&&s(h);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new $d(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){let h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){let h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:a[h]=new Cd;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[h]=new Xd(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[h]=new jd;break;case ot.KHR_MESH_QUANTIZATION:a[h]=new Kd;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function OM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function dn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Rd=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,d=new Ue(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],zn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Js(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zo(d),c.distance=h;break;case"spot":c=new Oo(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),$i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Cd=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return kn}extendParams(e,t,n){let s=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],zn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Xt))}return Promise.all(s)}},Pd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Id=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(r,r)}return Promise.all(s)}},Ld=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Dd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Fd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],zn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Xt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Nd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Ud=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(r[0],r[1],r[2],zn),Promise.all(s)}},Od=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},zd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(r[0],r[1],r[2],zn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Xt)),Promise.all(s)}},kd=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Bd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Vd=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Gd=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},ph=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,d=s.count,h=s.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(f),d,h,u,s.mode,s.filter),f})})}else return null}},Wd=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==pi.TRIANGLES&&c.mode!==pi.TRIANGLE_STRIP&&c.mode!==pi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,f=[];for(let m of h){let x=new qe,g=new R,p=new gt,y=new R(1,1,1),M=new wr(m.geometry,m.material,u);for(let v=0;v<u;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,x.compose(g,p,y));let b=null;for(let v in l)if(v==="_COLOR_0"){let S=l[v];M.instanceColor=new gs(S.array,S.itemSize,S.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(b===null){let T=M.geometry;b=new It,b.name=T.name;for(let _ in T.attributes)b.setAttribute(_,T.attributes[_]);for(let _ in T.morphAttributes)b.morphAttributes[_]=T.morphAttributes[_];T.index!==null&&b.setIndex(T.index),b.morphTargetsRelative=T.morphTargetsRelative;for(let _ of T.groups)b.addGroup(_.start,_.count,_.materialIndex);T.boundingBox!==null&&(b.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(b.boundingSphere=T.boundingSphere.clone()),b.drawRange.start=T.drawRange.start,b.drawRange.count=T.drawRange.count,b.userData=Object.assign({},T.userData),M.geometry=b}let S=l[v];b.setAttribute(v,new gs(S.array,S.itemSize,S.normalized))}jt.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),f.push(M)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}},og="glTF",ec=12,ig={JSON:1313821514,BIN:5130562},qd=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ec),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==og)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ec,r=new DataView(e,ec),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===ig.JSON){let c=new Uint8Array(e,ec+a,o);this.content=n.decode(c)}else if(l===ig.BIN){let c=ec+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let d in a){let h=Jd[d]||d.toLowerCase();o[h]=a[d]}for(let d in e.attributes){let h=Jd[d]||d.toLowerCase();if(a[d]!==void 0){let u=n.accessors[e.attributes[d]],f=ja[u.componentType];c[h]=f.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){s.decodeDracoFile(d,function(f){for(let m in f.attributes){let x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}h(f)},o,c,zn,u)})})}},jd=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Kd=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},mh=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=s-t,h=(n-t)/d,u=h*h,f=u*h,m=e*c,x=m-c,g=-2*f+3*u,p=f-u,y=1-g,M=p-u+h;for(let b=0;b!==o;b++){let v=a[x+b+o],S=a[x+b+l]*d,T=a[m+b+o],_=a[m+b]*d;r[b]=y*v+M*S+g*T+p*_}return r}},zM=new gt,Yd=class extends mh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return zM.fromArray(r).normalize().toArray(r),r}},pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ja={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sg={9728:un,9729:tn,9984:Ml,9985:za,9986:Lr,9987:si},rg={33071:ui,33648:ba,10497:qn},Ed={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kM={CUBICSPLINE:void 0,LINEAR:vr,STEP:yr},Td={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function BM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new sn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),i.DefaultMaterial}function Nr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,d=e.length;c<d;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){let h=e[c];if(n){let u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(u)}if(s){let u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let d=c[0],h=c[1],u=c[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function VM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GM(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ad(t.attributes):e=i.indices+":"+Ad(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ad(i.targets[n]);return e}function Ad(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Zd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var qM=new qe,$d=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new OM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Ar(this.options.manager):this.textureLoader=new ko(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new La(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Nr(r,o,s),$i(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,d]of a.children.entries())r(d,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ws.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Ed[s.type],o=ja[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new nt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Ed[s.type],c=ja[s.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==h){let p=Math.floor(u/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(y);M||(x=new c(o,p*f,s.count*f/d),M=new Ta(x,f/d),t.cache.add(y,M)),g=new Aa(M,l,u%f/d,m)}else o===null?x=new c(s.count*l):x=new c(o,u,s.count*l),g=new nt(x,l,m);if(s.sparse!==void 0){let p=Ed.SCALAR,y=ja[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,v=new y(a[1],M,s.sparse.count*p),S=new c(a[2],b,s.sparse.count*l);o!==null&&(g=new nt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,_=v.length;T<_;T++){let E=v[T];if(g.setX(E,S[T*l]),l>=2&&g.setY(E,S[T*l+1]),l>=3&&g.setZ(E,S[T*l+2]),l>=4&&g.setW(E,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return d.magFilter=sg[u.magFilter]||tn,d.minFilter=sg[u.minFilter]||si,d.wrapS=rg[u.wrapS]||qn,d.wrapT=rg[u.wrapT]||qn,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==un&&d.minFilter!==tn,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let u=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let d=Promise.resolve(l).then(function(h){return new Promise(function(u,f){let m=u;t.isImageBitmapLoader===!0&&(m=function(x){let g=new gn(x);g.needsUpdate=!0,u(g)}),t.load(ws.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),$i(h,a),h.userData.mimeType=a.mimeType||WM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new xs,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ca,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return sn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let h=s[ot.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ue(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],zn),o.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Xt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Dn);let d=r.alphaMode||Td.OPAQUE;if(d===Td.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Td.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==kn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==kn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==kn){let h=r.emissiveFactor;o.emissive=new Ue().setRGB(h[0],h[1],h[2],zn)}return r.emissiveTexture!==void 0&&a!==kn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Xt)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),$i(h,r),t.associations.set(h,{materials:e}),r.extensions&&Nr(s,h,r),h})}createUniqueName(e){let t=Ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ag(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],d=GM(c),h=s[d];if(h)a.push(h.promise);else{let u;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=ag(new It,c,t),c.mode===pi.TRIANGLE_STRIP?u=u.then(f=>wd(f,Yo)):c.mode===pi.TRIANGLE_FAN&&(u=u.then(f=>wd(f,Ha))),s[d]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let d=a[l].material===void 0?BM(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let f=0,m=d.length;f<m;f++){let x=d[f],g=a[f],p,y=c[f];if(g.mode===pi.TRIANGLES||g.mode===pi.TRIANGLE_STRIP||g.mode===pi.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&b?new Ws(x,y):new Ye(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===pi.LINES)p=new Co(x,y);else if(g.mode===pi.LINE_STRIP)p=new Er(x,y);else if(g.mode===pi.LINE_LOOP)p=new Po(x,y);else if(g.mode===pi.POINTS)p=new bs(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&VM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),$i(p,r),g.extensions&&Nr(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Nr(s,h[0],r),h[0];let u=new vt;r.extensions&&Nr(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new hn(id.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ys(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$i(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,d=a.length;c<d;c++){let h=a[c];if(h){o.push(h);let u=new qe;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xs(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],d=[];for(let h=0,u=s.channels.length;h<u;h++){let f=s.channels[h],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),d.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){let u=h[0],f=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let M=0,b=u.length;M<b;M++){let v=u[M],S=f[M],T=m[M],_=x[M],E=g[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let C=n._createAnimationTracks(v,S,T,_,E);if(C)for(let P=0;P<C.length;P++)p.push(C[P])}let y=new No(r,void 0,p);return $i(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,d=o.length;c<d;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,qM)});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);if(d.userData.pivot!==void 0&&h.length>0){let f=d.userData.pivot,m=h[0];d.pivot=new R().fromArray(f),d.position.x-=f[0],d.position.y-=f[1],d.position.z-=f[2],m.position.set(0,0,0),delete d.userData.pivot}return d})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(r.isBone===!0?d=new ms:c.length>1?d=new vt:c.length===1?d=c[0]:d=new jt,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(r.name&&(d.userData.name=r.name,d.name=a),$i(d,r),r.extensions&&Nr(n,d,r),r.matrix!==void 0){let h=new qe;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!s.associations.has(d))s.associations.set(d,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(d);s.associations.set(d,{...h})}return s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new vt;n.name&&(r.name=s.createUniqueName(n.name)),$i(r,n),n.extensions&&Nr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,h=l.length;d<h;d++){let u=l[d];u.parent!==null?r.add(tg(u)):r.add(u)}let c=d=>{let h=new Map;for(let[u,f]of s.associations)(u instanceof Kn||u instanceof gn)&&h.set(u,f);return d.traverse(u=>{let f=s.associations.get(u);f!=null&&h.set(u,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}er[r.path]===er.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let d;switch(er[r.path]){case er.weights:d=vs;break;case er.rotation:d=Ms;break;case er.translation:case er.scale:d=Ks;break;default:n.itemSize===1?d=vs:d=Ks;break}let h=s.interpolation!==void 0?kM[s.interpolation]:vr,u=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let x=new d(l[f]+"."+er[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Zd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ms?Yd:mh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function XM(i,e,t){let n=e.attributes,s=new nn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let d=Zd(ja[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,d=r.length;c<d;c++){let h=r[c];if(h.POSITION!==void 0){let u=t.json.accessors[h.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){let x=Zd(ja[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new jn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function ag(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Jd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return rt.workingColorSpace!==zn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),$i(i,e),XM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?HM(i,e.targets,t):i})}var Qd=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),M=0;M<p.length;++M){var b=p.charCodeAt(M);y[M]=b>96?b-97:b>64?b-39:b+4}for(var v=0,M=0;M<p.length;++M)y[v++]=y[M]<60?n[y[M]]:(y[M]-60)*64+y[++M];return y.buffer.slice(0,v)}function l(p,y,M,b,v,S,T){var _=p.exports.sbrk,E=b+3&-4,C=_(E*v),P=_(S.length),D=new Uint8Array(p.exports.memory.buffer);D.set(S,P);var F=y(C,b,v,P,S.length);if(F==0&&T&&T(C,E,v),M.set(D.subarray(C,C+b*v)),_(C-_(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],u=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(M){var b=M.data;y.pending-=b.count,y.requests[b.id][b.action](b.value),delete y.requests[b.id]},y}function m(p){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),M=new Blob([y],{type:"text/javascript"}),b=URL.createObjectURL(M),v=h.length;v<p;++v)h[v]=f(b);for(var v=p;v<h.length;++v)h[v].object.postMessage({});h.length=p,URL.revokeObjectURL(b)}function x(p,y,M,b,v){for(var S=h[0],T=1;T<h.length;++T)h[T].pending<S.pending&&(S=h[T]);return new Promise(function(_,E){var C=new Uint8Array(M),P=++u;S.pending+=p,S.requests[P]={resolve:_,reject:E},S.object.postMessage({id:P,count:p,size:y,source:C,mode:b,filter:v},[C.buffer])})}function g(p){var y=p.data;self.ready.then(function(M){if(!y.id)return self.close();try{var b=new Uint8Array(y.count*y.size);l(M,M.exports[y.mode],b,y.count,y.size,y.source,M.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:y.id,count:y.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,y,M,b,v){l(r,r.exports.meshopt_decodeVertexBuffer,p,y,M,b,r.exports[c[v]])},decodeIndexBuffer:function(p,y,M,b){l(r,r.exports.meshopt_decodeIndexBuffer,p,y,M,b)},decodeIndexSequence:function(p,y,M,b){l(r,r.exports.meshopt_decodeIndexSequence,p,y,M,b)},decodeGltfBuffer:function(p,y,M,b,v,S){l(r,r.exports[d[v]],p,y,M,b,r.exports[c[S]])},decodeGltfBufferAsync:function(p,y,M,b,v){return h.length>0?x(p,y,M,d[b],c[v]):a.then(function(){var S=new Uint8Array(p*y);return l(r,r.exports[d[b]],S,p,y,M,r.exports[c[v]]),S})}}})();var nc=new R;function mi(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;nc.copy(e),nc[n]=0,nc.normalize();let c=.5*a/(a+o),d=1-nc.angleTo(i)/l;return Math.sign(nc[t])===1?d*c:o/(a+o)+c+c*(1-d)}var gh=class i extends di{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new R,c=new R,d=new R(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=h.length/6,x=new R,g=.5/a;for(let p=0,y=0;p<h.length;p+=3,y+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[p+0]=d.x*Math.sign(l.x)+c.x*r,h[p+1]=d.y*Math.sign(l.y)+c.y*r,h[p+2]=d.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:x.set(1,0,0),f[y+0]=mi(x,c,"z","y",r,n),f[y+1]=1-mi(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-mi(x,c,"z","y",r,n),f[y+1]=1-mi(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-mi(x,c,"x","z",r,e),f[y+1]=mi(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-mi(x,c,"x","z",r,e),f[y+1]=1-mi(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-mi(x,c,"x","y",r,e),f[y+1]=1-mi(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=mi(x,c,"x","y",r,e),f[y+1]=1-mi(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Ka=i=>{try{navigator.vibrate&&navigator.vibrate(i)}catch{}};function cg(i){let e=i.querySelector("i"),t={x:0,y:0,active:!1},n=null,s=0,r=0,a=1,o=!1,l=!1,c=(h,u)=>{let f=Math.hypot(h,u),m=f>a?a/f:1;h*=m,u*=m,f=Math.min(f,a),e.style.transform=`translate(${h}px, ${u}px)`;let x=f/a,g=.12,p=x<g?0:(x-g)/(1-g),y=p*p*.35+p*.65;t.x=f?h/f*y:0,t.y=f?-u/f*y:0;let M=x>=g,b=x>.97;M&&!o&&Ka(8),b&&!l&&Ka(18),o=M,l=b};i.addEventListener("pointerdown",h=>{if(n!==null)return;h.preventDefault(),n=h.pointerId;try{i.setPointerCapture(n)}catch{}let u=i.getBoundingClientRect();s=u.left+u.width/2,r=u.top+u.height/2,a=u.width*.36,t.active=!0,i.classList.add("on"),c(h.clientX-s,h.clientY-r)}),i.addEventListener("pointermove",h=>{h.pointerId===n&&(h.preventDefault(),c(h.clientX-s,h.clientY-r))});let d=h=>{h.pointerId===n&&(n=null,t.active=!1,i.classList.remove("on"),e.style.transition="transform .15s ease-out",c(0,0),setTimeout(()=>{e.style.transition=""},160),o=l=!1)};return["pointerup","pointercancel","lostpointercapture"].forEach(h=>i.addEventListener(h,d)),t}var hg={low:{pr:1,aa:!1,shadow:1024,shadowR:.8,grid:1.45,rocks:.45,reach:[380,90,55],scanMid:!1,devils:0},medium:{pr:1.25,aa:!1,shadow:1024,shadowR:1,grid:1.25,rocks:.55,reach:[480,110,60],scanMid:!1,devils:0},high:{pr:2,aa:!0,shadow:2048,shadowR:1,grid:1,rocks:1,reach:[900,210,110],scanMid:!0,devils:2},ultra:{pr:2,aa:!0,shadow:4096,shadowR:1.35,grid:.82,rocks:1.35,reach:[1400,300,150],scanMid:!0,devils:3}},jM=typeof document<"u"&&document.documentElement.classList.contains("touch");function ic(){try{return localStorage.getItem("jt-detail")||"auto"}catch{return"auto"}}function ug(i){try{localStorage.setItem("jt-detail",i)}catch{}}var lg=ic(),xh=hg[lg]?lg:jM?"medium":"ultra",tr=hg[xh];var Es=(()=>{try{return localStorage.getItem("dsa-game-units")==="us"}catch{return!1}})(),ef=3.28084,KM=.621371;var Ur=(i,e)=>i.toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),bh=Es?"mph":"km/h",_h=i=>Es?i*KM:i,yh=(i,e=0)=>`${Ur(_h(i),e)} ${bh}`;var nr=(i,e=0)=>Es?`${Ur(i*ef,e)} ft`:`${Ur(i,e)} m`,vh=i=>Es?i*ef<1e3?`${Ur(i*ef,0)} ft`:`${Ur(i/1609.344,i<16093?1:0)} mi`:i<1e3?`${Ur(i,0)} m`:`${Ur(i/1e3,i<1e4?1:0)} km`;var se=i=>document.getElementById(i),ss=1.62,xA=document.documentElement.classList.contains("touch");function ns(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var JM=(()=>{let i=ns(7),e=new Float32Array(256*256);for(let t=0;t<e.length;t++)e[t]=i();return e})(),Mh=(i,e)=>JM[(i%256+256)%256*256+(e%256+256)%256];function Uh(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Mh(t,n),c=Mh(t+1,n),d=Mh(t,n+1),h=Mh(t+1,n+1);return l+(c-l)*a+(d-l)*o+(l-c-d+h)*a*o}var An=(i,e,t)=>{let n=0,s=.5,r=1;for(let a=0;a<t;a++)n+=s*Uh(i*r,e*r),s*=.5,r*=2.03;return n},Fe=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)},dr=4,dg=.4,ZM=1737400,Ge=600,Et=243,Tt=-375,Gn=1.6,Ke=Math.round(2*Ge/Gn)+1,Ng=(i,e,t)=>Math.abs(i-Et)<Ge-t&&Math.abs(e-Tt)<Ge-t,Oh=null;function Ug(i,e){if(!Oh)return 0;let t=i/250+127.5,n=e/250+127.5,s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=(h,u)=>Oh[Math.max(0,Math.min(255,u))*256+Math.max(0,Math.min(255,h))]/4,c=(h,u,f,m,x)=>u+.5*x*(f-h+x*(2*h-5*u+4*f-m+x*(3*(u-f)+m-h))),d=h=>c(l(s-1,h),l(s,h),l(s+1,h),l(s+2,h),a);return c(d(r-1),d(r),d(r+1),d(r+2),o)}var Og=0;function Br(i,e){let t=i*dr,n=e*dr;return(Ug(t,n)-Og)*dg-(t*t+n*n)/(2*ZM)*dg}var oi=[],Vn=[],Oi={x:0,z:0},ut={x:-158,z:62,R:55};{let i=ns(1972),e=(a,o,l,c)=>oi.push({x:a,z:o,R:l,fresh:c,depth:l*(.12+.26*c),rim:l*(.025+.06*c)});[[48,-18,13,1],[-30,64,17,.95],[96,52,21,.9],[20,120,11,1],[-40,-75,24,.85]].forEach(a=>e(...a));let t=373,n=-375,s=470,r=(a,o)=>Math.abs(a-t)<s&&Math.abs(o-n)<s;for(let a=0;a<2e3;a++){let o=1.2/Math.sqrt(1-i()*.99859375),l=t+(i()*2-1)*(s-10),c=n+(i()*2-1)*(s-10);Math.hypot(l,c)<14||Math.hypot(l+12,c-4)<14||e(l,c,o,Math.pow(i(),2.2))}for(let a=0;a<1150;a++){let o=t+(i()*2-1)*(s-6),l=n+(i()*2-1)*(s-6);Math.hypot(o,l)<10||Vn.push({x:o,z:l,s:.12+Math.pow(i(),3)*.7,yaw:i()*6.28,k:i()})}{let a=ns(2112);for(let o=0;o<1060;o++){let l=1.2/Math.sqrt(1-a()*.99859375),c=Et+(a()*2-1)*(Ge-10),d=Tt+(a()*2-1)*(Ge-10),h=Math.pow(a(),2.2);r(c,d)||Math.hypot(c+12,d-4)<14||Math.hypot(c-ut.x,d-ut.z)<ut.R*1.3||e(c,d,l,h)}for(let o=0;o<600;o++){let l=Et+(a()*2-1)*(Ge-6),c=Tt+(a()*2-1)*(Ge-6),d=.12+Math.pow(a(),3)*.7,h=a()*6.28,u=a();r(l,c)||Vn.push({x:l,z:c,s:d,yaw:h,k:u})}}for(let a of oi){if(a.fresh<.55||a.R<4)continue;let o=Math.round(a.R*a.fresh*2.2);for(let l=0;l<o;l++){let c=i()*6.2832,d=a.R*(.85+Math.pow(i(),1.7)*1.3),h=a.x+Math.cos(c)*d,u=a.z+Math.sin(c)*d;!Ng(h,u,6)||Math.hypot(h,u)<10||Vn.push({x:h,z:u,s:.2+Math.pow(i(),2.2)*Math.min(1.6,a.R*.07),yaw:i()*6.28,k:i()})}}{let a=ns(17),o=421.75+38,l=-259;e(o,l,50,.5),Oi.x=o,Oi.z=l;for(let c=0;c<170;c++){let d=a()*6.2832,h=50*(.86+Math.pow(a(),1.5)*1.1);Vn.push({x:o+Math.cos(d)*h,z:l+Math.sin(d)*h,s:.07+Math.pow(a(),4)*.95,yaw:a()*6.28,k:a()})}}for(let a=oi.length-1;a>=0;a--)Math.hypot(oi[a].x-ut.x,oi[a].z-ut.z)<ut.R*1.25+oi[a].R*.5&&oi.splice(a,1);{let a=ns(74);oi.push({x:ut.x,z:ut.z,R:ut.R,fresh:.5,depth:14,rim:2.2});for(let c=0;c<70;c++){let d=a()*6.2832,h=ut.R*(.9+Math.pow(a(),1.5)*.8);Vn.push({x:ut.x+Math.cos(d)*h,z:ut.z+Math.sin(d)*h,s:.08+Math.pow(a(),4)*.8,yaw:a()*6.28,k:a()})}for(let c=0;c<90;c++){let d=a()*6.2832,h=ut.R*(Math.pow(a(),.7)*.6);Vn.push({x:ut.x+Math.cos(d)*h,z:ut.z+Math.sin(d)*h,s:.25+Math.pow(a(),2.5)*1.2*(1.2-h/ut.R),yaw:a()*6.28,k:a(),bury:.4})}let o=ut.x+Math.cos(2.27)*ut.R*1.13,l=ut.z+Math.sin(2.27)*ut.R*1.13;Vn.push({x:o,z:l,s:1.7,yaw:.6,k:.3,bury:.22});for(let c=0;c<8;c++){let d=a()*6.2832,h=2.5+a()*7;Vn.push({x:o+Math.cos(d)*h,z:l+Math.sin(d)*h,s:.15+Math.pow(a(),2)*.55,yaw:a()*6.28,k:a(),bury:.4})}}}var $M=[[2.4,1.05,.05,.035,1],[2.47,1,.02,.018,.55]];function zg(i,e){let t=i-ut.x,n=e-ut.z,s=Math.hypot(t,n)/ut.R;if(s<.75||s>1.35)return 0;let r=Math.atan2(n,t),a=0;for(let[o,l,c,d,h]of $M){let u=r-o;u-=6.2832*Math.round(u/6.2832),a=Math.max(a,h*Math.exp(-(u*u)/(2*c*c)-(s-l)*(s-l)/(2*d*d)))}return a<.02?0:Fe(.12,.6,a*(.5+1*An(i/1.6+3,e/1.6-5,3)))}var kg=(i,e,t)=>(t[0]=i*(1+.62*e),t[1]=i*(1+.04*e),t[2]=i*(1-.5*e),t),lr=16,uc=new Map;function QM(){oi.forEach(i=>{let e=i.R*2.2;for(let t=Math.floor((i.x-e)/lr);t<=Math.floor((i.x+e)/lr);t++)for(let n=Math.floor((i.z-e)/lr);n<=Math.floor((i.z+e)/lr);n++){let s=t+","+n;uc.has(s)||uc.set(s,[]),uc.get(s).push(i)}})}function Bg(i,e){let t=0;for(let n of uc.get(Math.floor(i/lr)+","+Math.floor(e/lr))||[]){let s=i-n.x,r=e-n.z;if(s>n.R*2.2||s<-n.R*2.2||r>n.R*2.2||r<-n.R*2.2)continue;let a=Math.hypot(s,r)/n.R;t+=a<1?n.rim+(-n.depth-n.rim)*(1-a*a)*(1-a*a*.35):n.rim*Math.exp(-(((a-1)/.42)**2))}return t}var Ps=new Float32Array(Ke*Ke),Hr=new Float32Array(Ke*Ke),on=new Float32Array(Ke*Ke);function Hg(i,e){let t=0;for(let n of uc.get(Math.floor(i/lr)+","+Math.floor(e/lr))||[]){let s=Math.hypot(i-n.x,e-n.z)/n.R;s<2.1&&(t=Math.max(t,n.fresh*n.fresh*(s<1?.55:Math.exp(-(((s-1)/.5)**2)))))}return .9+.2*(An(i/35+7,e/35,3)-.5)+.45*t}function eS(i,e){let t=(i-Et+2500)/20,n=(e-Tt+2500)/20,s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=(f,m)=>Br(Et-2500+f*20,Tt-2500+m*20),c=l(s,r),d=l(s,r+1),h=l(s+1,r);if(a+o<=1)return c+(h-c)*a+(d-c)*o-.15;let u=l(s+1,r+1);return u+(d-u)*(1-a)+(h-u)*(1-o)-.15}function tS(){QM();for(let d=0;d<Ke;d++)for(let h=0;h<Ke;h++){let u=Et-Ge+h*Gn,f=Tt-Ge+d*Gn,m=Fe(0,40,Ge-Math.max(Math.abs(u-Et),Math.abs(f-Tt))),x=Br(u,f),g=m<1?eS(u,f):x;on[d*Ke+h]=g+m*(x-g)+m*((An(u/60,f/60,4)-.5)*2.2+(An(u/9+40,f/9,3)-.5)*.35),Ps[d*Ke+h]=on[d*Ke+h]+m*Bg(u,f),Hr[d*Ke+h]=Hg(u,f)}let i=(d,h)=>{for(let u=0;u<Ke;u++)for(let f=0;f<Ke;f++){let m=Et-Ge+f*Gn-st.x,x=Tt-Ge+u*Gn-st.z,g=Math.hypot(m,x);g<d&&h(u*Ke+f,m,x,g)}},e=0,t=0,n=0,s=0,r=0,a=0,o=0,l=0,c=0;if(i(14,(d,h,u)=>{let f=Ps[d];e++,t+=h,n+=u,s+=h*h,r+=u*u,a+=h*u,o+=f,l+=h*f,c+=u*f}),e>10){let d=[[e,t,n],[t,s,a],[n,a,r]],h=[o,l,c],u=y=>y[0][0]*(y[1][1]*y[2][2]-y[1][2]*y[2][1])-y[0][1]*(y[1][0]*y[2][2]-y[1][2]*y[2][0])+y[0][2]*(y[1][0]*y[2][1]-y[1][1]*y[2][0]),f=u(d),m=y=>d.map((M,b)=>M.map((v,S)=>S===y?h[b]:v)),[x,g,p]=[0,1,2].map(y=>u(m(y))/f);st.plane={a:x,b:g,c:p},i(22,(y,M,b,v)=>{let S=Fe(22,6,v),T=x+g*M+p*b;Ps[y]+=(T-Ps[y])*S,on[y]+=(T-on[y])*S})}}var Rh=new Map,zh=8;function nS(){for(let i=Vn.length-1;i>=0;i--)Math.hypot(Vn[i].x-st.x,Vn[i].z-st.z)<7&&Vn.splice(i,1);Vn.forEach((i,e)=>{let t=Math.floor(i.x/zh)+","+Math.floor(i.z/zh);Rh.has(t)||Rh.set(t,[]),Rh.get(t).push(e)})}function iS(i,e){let t=0,n=Math.floor(i/zh),s=Math.floor(e/zh);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=Rh.get(n+r+","+(s+a));if(o)for(let l of o){let c=Vn[l],d=((i-c.x)**2+(e-c.z)**2)/(1.6*c.s*c.s);if(d<1){let h=1-d;t=Math.max(t,c.s*Math.max(.5,.66-(c.bury??.62))*h*Math.sqrt(h))}}}return t}function Ui(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var ts=3;function Tf(i,e){let t=(Uh(i/1.7,e/1.7)-.5)*.12+(Uh(i/.55+71,e/.55)-.5)*.04,n=Math.floor(i/ts),s=Math.floor(e/ts);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=n+r,l=s+a;if(Ui(o,l)>.26)continue;let d=.25/Math.sqrt(1-Ui(o+91,l)*(1-(.25/1.5)**2)),h=(o+Ui(o,l+57))*ts,u=(l+Ui(o+13,l+7))*ts,f=Math.hypot(i-h,e-u)/d;if(f>1.8)continue;let m=d*(.05+.09*Ui(o+5,l+3)),x=m*.25;t+=f<1?x+(-m-x)*(1-f*f):x*Math.exp(-(((f-1)/.4)**2))}return t}var cn={cx:0,cz:0,half:48};function Vg(i,e){return Fe(cn.half,cn.half-6,Math.max(Math.abs(i-cn.cx),Math.abs(e-cn.cz)))}function Jt(i,e){let t=Math.max(0,Math.min(Ke-1.001,(i-Et+Ge)/Gn)),n=Math.max(0,Math.min(Ke-1.001,(e-Tt+Ge)/Gn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=Ps[r*Ke+s],c=Ps[r*Ke+s+1],d=Ps[(r+1)*Ke+s],h=Ps[(r+1)*Ke+s+1];return l+(c-l)*a+(d-l)*o+(l-c-d+h)*a*o}function Gg(i,e){let t=Math.max(0,Math.min(Ke-1.001,(i-Et+Ge)/Gn)),n=Math.max(0,Math.min(Ke-1.001,(e-Tt+Ge)/Gn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=r*Ke+s;return on[l]+(on[l+1]-on[l])*a+(on[l+Ke]-on[l])*o+(on[l]-on[l+1]-on[l+Ke]+on[l+Ke+1])*a*o+Fe(0,40,Ge-Math.max(Math.abs(i-Et),Math.abs(e-Tt)))*Bg(i,e)-Jt(i,e)}function Xe(i,e){let t=Vg(i,e),n=Jt(i,e)+(t>0?(Tf(i,e)+Gg(i,e))*t:0)+iS(i,e);return Gh.length?Math.max(n,pS(i,e)):n}var sS=new R;function gf(i,e){return sS.set(Xe(i-.35,e)-Xe(i+.35,e),2*.35,Xe(i,e-.35)-Xe(i,e+.35)).normalize()}var Nn=new Qo({canvas:se("scene"),antialias:tr.aa,powerPreference:"high-performance"});Nn.setPixelRatio(Math.min(tr.pr,devicePixelRatio));Nn.outputColorSpace=Xt;Nn.toneMapping=Ho;Nn.toneMappingExposure=1.25;Nn.shadowMap.enabled=!0;Nn.shadowMap.type=Cr;var wt=new Ea;wt.background=new Ue(0);var Qe=new hn(55,1,.1,8e4);function Wg(){Nn.setSize(innerWidth,innerHeight,!1),Qe.aspect=innerWidth/innerHeight,Qe.updateProjectionMatrix()}addEventListener("resize",Wg);Wg();var Af=new R(Math.sin(95*Math.PI/180)*Math.cos(16*Math.PI/180),Math.sin(16*Math.PI/180),-Math.cos(95*Math.PI/180)*Math.cos(16*Math.PI/180)).normalize(),ci=new Js(16775922,3.4);ci.castShadow=!0;ci.shadow.mapSize.set(tr.shadow,tr.shadow);{let i=30*tr.shadowR;Object.assign(ci.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:1,far:200})}ci.shadow.bias=-6e-4;ci.shadow.normalBias=.04;wt.add(ci,ci.target);wt.add(new Da(0,7236196,.75));function rS(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=ns(3);for(let a=0;a<256;a++)for(let o=0;o<256;o++){let l=(An(o/18,a/18,4)-.5)*40+(s()-.5)*26,c=Math.max(0,Math.min(255,200+l*.7)),d=(a*256+o)*4;n.data[d]=n.data[d+1]=n.data[d+2]=c,n.data[d+3]=255}t.putImageData(n,0,0);let r=new Ai(e);return r.wrapS=r.wrapT=qn,r.colorSpace=Xt,r.anisotropy=8,r}function aS(){let e=new Float32Array(65536),t=ns(29);for(let o=0;o<900;o++){let l=t()*256,c=t()*256,d=1.5+Math.pow(t(),3)*9,h=(t()<.6?-1:.6)*d*.25,u=Math.ceil(d*1.6);for(let f=-u;f<=u;f++)for(let m=-u;m<=u;m++){let x=Math.hypot(m,f)/d;if(x>1.6)continue;let g=((Math.round(l)+m)%256+256)%256,p=((Math.round(c)+f)%256+256)%256;e[p*256+g]+=x<1?h*(1-x*x):-h*.2*Math.exp(-(((x-1)/.3)**2))}}for(let o=0;o<256;o++)for(let l=0;l<256;l++)e[o*256+l]+=(An(l/6,o/6,3)-.5)*1.4;let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256);for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=e[o*256+(l+1)%256]-e[o*256+(l+256-1)%256],d=e[(o+1)%256*256+l]-e[(o+256-1)%256*256+l],h=Math.hypot(c,d,2),u=(o*256+l)*4;r.data[u]=128-c/h*127,r.data[u+1]=128+d/h*127,r.data[u+2]=128+2/h*127,r.data[u+3]=255}s.putImageData(r,0,0);let a=new Ai(n);return a.wrapS=a.wrapT=qn,a.anisotropy=8,a}var Ls=new sn({color:11052189,roughness:1,metalness:0,map:rS(),normalMap:aS(),vertexColors:!0});Ls.normalScale.set(.34,.34);var qg=i=>i.fragmentShader.replace("#include <normal_fragment_maps>",Je.normal_fragment_maps.replace("mapN.xy *= normalScale;","mapN.xy *= normalScale * ( 1.0 - smoothstep( 5.0, 22.0, length( vViewPosition ) ) );")),Xg={value:null},oS=i=>{i.uniforms.uRelief=Xg,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWxz = (modelMatrix * vec4(transformed, 1.0)).xz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWxz; uniform sampler2D uRelief;`).replace("#include <normal_fragment_begin>",Je.normal_fragment_begin.replace("vec3 normal = normalize( vNormal );",`vec3 normal = normalize( ( viewMatrix * vec4( texture2D( uRelief, ( vWxz - vec2( ${(Et-Ge).toFixed(1)}, ${(Tt-Ge).toFixed(1)} ) ) / ${(2*Ge).toFixed(1)} ).xyz * 2.0 - 1.0, 0.0 ) ).xyz );`))};Ls.onBeforeCompile=i=>{i.fragmentShader=qg(i)};Ls.polygonOffset=!0;Ls.polygonOffsetFactor=-1;Ls.polygonOffsetUnits=-1;var jg={value:new _t(0,0,0,0)},Kg=Ls.clone();Kg.onBeforeCompile=i=>{$g(i,Zg,"#include <normal_fragment_maps>",`smoothstep( ${(Ge-80).toFixed(1)}, ${Ge.toFixed(1)}, max( abs( vWxz.x - ${Et.toFixed(1)} ), abs( vWxz.y - ${Tt.toFixed(1)} ) ) )`),i.fragmentShader=qg(i),oS(i),i.uniforms.uPatch=jg,i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uPatch;`).replace("void main() {",`void main() {
  if (abs(vWxz.x - uPatch.x) < uPatch.z && abs(vWxz.y - uPatch.y) < uPatch.z) discard;`)};function cS(){let i=tr.grid>1.3?1024:2048,e=2*Ge/i,t=Et-Ge,n=Tt-Ge,s=new Float32Array(i*i),r=(c,d)=>Fe(0,40,Ge-Math.max(Math.abs(c-Et),Math.abs(d-Tt)));for(let c=0;c<i;c++)for(let d=0;d<i;d++){let h=t+(d+.5)*e,u=n+(c+.5)*e,f=Math.min(Ke-1.001,(d+.5)*e/Gn),m=Math.min(Ke-1.001,(c+.5)*e/Gn),x=Math.floor(f),g=Math.floor(m),p=f-x,y=m-g,M=g*Ke+x;s[c*i+d]=on[M]+(on[M+1]-on[M])*p+(on[M+Ke]-on[M])*y+(on[M]-on[M+1]-on[M+Ke]+on[M+Ke+1])*p*y+r(h,u)*(Uh(h/1.7,u/1.7)-.5)*.12}let a=(c,d,h,u)=>{let f=Math.max(0,Math.floor((c-h-t)/e)),m=Math.min(i-1,Math.ceil((c+h-t)/e)),x=Math.max(0,Math.floor((d-h-n)/e)),g=Math.min(i-1,Math.ceil((d+h-n)/e));for(let p=x;p<=g;p++){let y=n+(p+.5)*e;for(let M=f;M<=m;M++){let b=t+(M+.5)*e,v=Math.hypot(b-c,y-d);v<h&&(s[p*i+M]+=r(b,y)*u(v))}}};for(let c of oi)a(c.x,c.z,c.R*2.2,d=>{let h=d/c.R;return h<1?c.rim+(-c.depth-c.rim)*(1-h*h)*(1-h*h*.35):c.rim*Math.exp(-(((h-1)/.42)**2))});for(let c=Math.floor(t/ts);c<=Math.floor((t+2*Ge)/ts);c++)for(let d=Math.floor(n/ts);d<=Math.floor((n+2*Ge)/ts);d++){if(Ui(c,d)>.26)continue;let h=.25/Math.sqrt(1-Ui(c+91,d)*(1-(.25/1.5)**2));if(h<.4)continue;let u=h*(.05+.09*Ui(c+5,d+3)),f=u*.25;a((c+Ui(c,d+57))*ts,(d+Ui(c+13,d+7))*ts,h*1.8,m=>{let x=m/h;return x<1?f+(-u-f)*(1-x*x):f*Math.exp(-(((x-1)/.4)**2))})}let o=new Uint8Array(i*i*4);for(let c=0;c<i;c++)for(let d=0;d<i;d++){let h=s[c*i+Math.min(i-1,d+1)]-s[c*i+Math.max(0,d-1)],u=s[Math.min(i-1,c+1)*i+d]-s[Math.max(0,c-1)*i+d],f=t+(d+.5)*e,m=n+(c+.5)*e,x=r(f,m);if(x<1){let y=e/10;h=h*x+(1-x)*(Br(f+10,m)-Br(f-10,m))*y,u=u*x+(1-x)*(Br(f,m+10)-Br(f,m-10))*y}let g=Math.hypot(h,2*e,u),p=(c*i+d)*4;o[p]=128-h/g*127,o[p+1]=128+2*e/g*127,o[p+2]=128-u/g*127,o[p+3]=255}let l=new qs(o,i,i);l.generateMipmaps=!0,l.minFilter=si,l.magFilter=tn,l.anisotropy=Nn.capabilities.getMaxAnisotropy(),l.needsUpdate=!0,Xg.value=l}var hc=[0,0,0];function lS(){let i=new qi(2*Ge,2*Ge,Ke-1,Ke-1);i.rotateX(-Math.PI/2),i.translate(Et,0,Tt);let e=i.attributes.position,t=i.attributes.uv,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let a=Math.round((e.getX(r)-Et+Ge)/Gn),o=Math.round((e.getZ(r)-Tt+Ge)/Gn);e.setY(r,Ps[o*Ke+a]),t.setXY(r,e.getX(r)/3.2,e.getZ(r)/3.2);let l=zg(e.getX(r),e.getZ(r));l>0?n.set(kg(Hr[o*Ke+a],l,hc),r*3):n.fill(Hr[o*Ke+a],r*3,r*3+3)}i.setAttribute("color",new nt(n,3)),i.computeVertexNormals();let s=new Ye(i,Kg);s.receiveShadow=!0,wt.add(s)}var Rs=.4*tr.grid,rs=Math.round(2*cn.half/Rs)+1,Cs=new qi(2*cn.half,2*cn.half,rs-1,rs-1);Cs.rotateX(-Math.PI/2);Cs.setAttribute("color",new nt(new Float32Array(rs*rs*3),3));var Rf=new Ye(Cs,Ls);Rf.receiveShadow=!0;Rf.frustumCulled=!1;function hS(i,e){let t=Math.max(0,Math.min(Ke-1.001,(i-Et+Ge)/Gn)),n=Math.max(0,Math.min(Ke-1.001,(e-Tt+Ge)/Gn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r;return Hr[r*Ke+s]*(1-a)*(1-o)+Hr[r*Ke+s+1]*a*(1-o)+Hr[(r+1)*Ke+s]*(1-a)*o+Hr[(r+1)*Ke+s+1]*a*o}function Yg(i,e){cn.cx=Math.round(i/Rs)*Rs,cn.cz=Math.round(e/Rs)*Rs;let t=Cs.attributes.position,n=Cs.attributes.uv,s=Cs.attributes.color;for(let r=0;r<rs;r++)for(let a=0;a<rs;a++){let o=r*rs+a,l=cn.cx-cn.half+a*Rs,c=cn.cz-cn.half+r*Rs,d=Vg(l,c),h=d>0?Tf(l,c)*d:0;t.setXYZ(o,l,Jt(l,c)+h+(d>0?Gg(l,c)*d:0),c),n.setXY(o,l/3.2,c/3.2);let u=hS(l,c)*(1+Math.max(-.08,Math.min(.08,h*.6))),f=zg(l,c);f>0?(kg(u,f,hc),s.setXYZ(o,hc[0],hc[1],hc[2])):s.setXYZ(o,u,u,u)}t.needsUpdate=n.needsUpdate=s.needsUpdate=!0,Cs.computeVertexNormals(),Cs.computeBoundingSphere(),jg.value.set(cn.cx,cn.cz,cn.half-1,0)}function uS(){let e=new Float32Array(262144),t=ns(8017);for(let l=0;l<1500;l++){let c=2/Math.sqrt(1-t()*.998109640831758),d=t()*512,h=t()*512,u=c*(.12+.18*t()),f=u*.3,m=Math.ceil(c*2);for(let x=-m;x<=m;x++)for(let g=-m;g<=m;g++){let p=Math.hypot(g,x)/c;if(p>2)continue;let y=((Math.round(h)+x)%512+512)%512*512+((Math.round(d)+g)%512+512)%512;e[y]+=p<1?f-(u+f)*(1-p*p):f*Math.exp(-(((p-1)/.45)**2))}}let n=0;for(let l of e)n+=l;n/=e.length;let s=document.createElement("canvas");s.width=s.height=512;let r=s.getContext("2d"),a=r.createImageData(512,512);for(let l=0;l<512;l++)for(let c=0;c<512;c++){let d=(e[l*512+(c+1)%512]-e[l*512+(c+512-1)%512])/2,h=(e[(l+1)%512*512+c]-e[(l+512-1)%512*512+c])/2,u=(l*512+c)*4;a.data[u]=128+Math.max(-127,Math.min(127,-d*160)),a.data[u+1]=128+Math.max(-127,Math.min(127,-h*160)),a.data[u+2]=128,a.data[u+3]=128+Math.max(-110,Math.min(110,(e[l*512+c]-n)*30))}r.putImageData(a,0,0);let o=new Ai(s);return o.wrapS=o.wrapT=qn,o.anisotropy=8,o.colorSpace=fi,o.premultiplyAlpha=!1,o}var Jg={value:null},Zg="smoothstep( 70.0, 260.0, length( vViewPosition ) )",$g=(i,e,t,n="1.0")=>{i.uniforms.uCrT=Jg,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vCN = normalize(mat3(modelMatrix) * objectNormal);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uCrT; varying vec3 vCN;`).replace("#include <color_fragment>",`#include <color_fragment>
      float crW = ( ${e} ) * ( 0.4 + 0.6 * smoothstep( 0.8, 0.96, normalize( vCN ).y ) ); vec4 crA = texture2D( uCrT, vWxz / 120.0 ), crB = texture2D( uCrT, vWxz / 620.0 + 0.37 );
      diffuseColor.rgb *= 1.0 + crW * ( ( crA.a - 0.5 ) * 0.22 + ( crB.a - 0.5 ) * 0.22 );`).replace(t,`${t}
      { vec2 t = ( crA.rg * 2.0 - 1.0 ) * 0.45 + ( crB.rg * 2.0 - 1.0 ) * 0.38; vec3 wn = normalize( vCN ), dw = vec3( t.x, 0.0, t.y ) * crW * ( ${n} ); dw -= wn * dot( wn, dw );
        normal = normalize( normal + ( viewMatrix * vec4( dw, 0.0 ) ).xyz ); }`)};function fg(i,e,t){let n=new qi(2*i,2*i,e,e);n.rotateX(-Math.PI/2),n.translate(Et,0,Tt);let s=n.attributes.position,r=n.attributes.uv,a=new Float32Array(s.count*3);for(let c=0;c<s.count;c++){let d=s.getX(c),h=s.getZ(c);s.setY(c,Br(d,h)-.15),r.setXY(c,d/3.2,h/3.2),a.fill(Hg(d,h),c*3,c*3+3)}n.setAttribute("color",new nt(a,3)),n.computeVertexNormals();let o=new sn({color:Ls.color,roughness:1,map:Ls.map,vertexColors:!0});o.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWxz = (modelMatrix * vec4(transformed, 1.0)).xz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("void main() {",`void main() {
  if (max(abs(vWxz.x - ${Et.toFixed(1)}), abs(vWxz.y - ${Tt.toFixed(1)})) < ${(t-1).toFixed(1)}) discard;`),$g(c,Zg,"#include <normal_fragment_begin>")},o.customProgramCacheKey=()=>"ring"+t;let l=new Ye(n,o);l.receiveShadow=!0,wt.add(l)}function dS(){fg(2500,250,Ge),fg(8e3,320,2500)}Jg.value=uS();var Mt={x:0,z:0,cyl:[]},pg=(i,e)=>oi.reduce((t,n)=>Math.hypot(n.x-i,n.z-e)<Math.hypot(t.x-i,t.z-e)?n:t),fS=[pg(292,-765),pg(312,-752)],Gh=[];function Qg(i,e,t){let{L:n,W:s,H:r}=i;if(e<-.6||e>n+1.2||Math.abs(t)>s/2+1.4)return-9;let a=s/2*(i.th?.95+.1*An(e*.45+7,3.3,3):.86+.28*An(e*.45+7,3.3,3)),o=n+.8*(An(t*.6+2,8.1,3)-.5),l=Math.max(0,e),c=Math.tan(i.th||0),d=n-2.3,h=Math.max(0,l-d),f=(i.th?c*(l<i.Lt?l*l/(2*i.Lt):i.Lt/2+l-i.Lt)-c*(i.round||0)*h*h/(2*2.3):r*l/n)-.12+(.1*(An(e*.9+4,t*.9,3)-.5)+.035*(An(e*4+1,t*4-3,2)-.5))*Math.min(1,Math.max(0,e))*(i.th?.25:1),m=Fe(a+.6,a-.9,Math.abs(t)),x=Fe(o+.5,o-.45,e);return f*m*x-1.2*(1-m*x)}function pS(i,e){let t=-1e9;for(let n of Gh){let s=i-n.x,r=e-n.z;if(Math.abs(s)>n.L||Math.abs(r)>n.L)continue;let a=s*n.c+r*n.s+n.L/2,o=-s*n.s+r*n.c,l=Qg(n,a,o);l>-8&&(t=Math.max(t,(n.g0??Jt(i,e))+l))}return t}function mg(i,e,t){Gh.push(i);let n=70,s=36,r=-.5,a=i.L+1.1,o=-i.W/2-1.3,l=[],c=[];for(let u=0;u<=s;u++)for(let f=0;f<=n;f++){let m=r+(a-r)*f/n,x=o+-2*o*u/s,g=i.x+(m-i.L/2)*i.c-x*i.s,p=i.z+(m-i.L/2)*i.s+x*i.c,y=Qg(i,m,x);l.push(g,(i.g0??Jt(g,p))+(y<-8?-1.2:y),p)}for(let u=0;u<s;u++)for(let f=0;f<n;f++){let m=u*(n+1)+f;c.push(m,m+n+1,m+1,m+1,m+n+1,m+n+2)}let d=new It;d.setAttribute("position",new bt(l,3)),d.setIndex(c),d.computeVertexNormals(),d.attributes.normal.getY(0)<0&&(c.reverse(),d.setIndex(c),d.computeVertexNormals()),e0(d,t);let h=new Ye(d,e);h.castShadow=h.receiveShadow=!0,wt.add(h)}function mS(){let e=new Float32Array(65536),t=ns(76535),n=(d,h,u)=>{let f=Math.floor(d),m=Math.floor(h),x=d-f,g=h-m,p=x*x*(3-2*x),y=g*g*(3-2*g),M=(b,v)=>Ui((b%u+u)%u,(v%u+u)%u);return M(f,m)*(1-p)*(1-y)+M(f+1,m)*p*(1-y)+M(f,m+1)*(1-p)*y+M(f+1,m+1)*p*y};for(let d=0;d<256;d++)for(let h=0;h<256;h++){let u=0,f=.5;for(let m of[4,8,16,32,64])u+=f*n(h/256*m,d/256*m,m),f*=.55;e[d*256+h]=u*2.2}for(let d=0;d<420;d++){let h=t()*256,u=t()*256,f=1.2+Math.pow(t(),3)*7,m=Math.ceil(f*1.5);for(let x=-m;x<=m;x++)for(let g=-m;g<=m;g++){let p=Math.hypot(g,x)/f;if(p>1.5)continue;let y=((Math.round(u)+x)%256+256)%256*256+((Math.round(h)+g)%256+256)%256;e[y]-=p<1?.22*(1-p*p):-.03*(1.5-p)}}let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d"),a=r.createImageData(256,256),o=1e9,l=-1e9;for(let d of e)o=Math.min(o,d),l=Math.max(l,d);for(let d=0;d<256;d++)for(let h=0;h<256;h++){let u=e[d*256+(h+1)%256]-e[d*256+(h+256-1)%256],f=e[(d+1)%256*256+h]-e[(d+256-1)%256*256+h],m=.09,x=Math.hypot(u,f,m),g=(d*256+h)*4;a.data[g]=128-u/x*127,a.data[g+1]=128-f/x*127,a.data[g+2]=128+m/x*127,a.data[g+3]=255*(e[d*256+h]-o)/(l-o)}r.putImageData(a,0,0);let c=new Ai(s);return c.wrapS=c.wrapT=qn,c.anisotropy=8,c.colorSpace=fi,c.premultiplyAlpha=!1,c}function gS(){let i=new sn({color:16777215,vertexColors:!0,roughness:1,metalness:0}),e=mS();return i.onBeforeCompile=t=>{t.uniforms.rockN={value:e},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        normal = normalize( ( viewMatrix * vec4( normalize( wn + d ), 0.0 ) ).xyz ); }`)},i}function e0(i,e){let t=i.attributes.position,n=i.attributes.normal,s=new Float32Array(t.count*3),r=new R;for(let a=0;a<t.count;a++){let o=t.getX(a),l=t.getY(a),c=t.getZ(a),d=.5+.13*(An(o*.35+e,c*.35+l*.3,3)-.5)+.08*(An(o*2.1-l,c*2.1+e,2)-.5);r.set(n.getX(a),n.getY(a),n.getZ(a)),d+=.07*Fe(.45,.95,r.y)-.05*Fe(-.1,-.7,r.y),d=Math.pow(Math.max(.05,d),2.2),s[a*3]=d,s[a*3+1]=d*.985,s[a*3+2]=d*.96}i.setAttribute("color",new nt(s,3))}function xS(){let i=Vr[0],e=[9,4.4,5],t=.35,n=.7;Mt.x=i.x-21,Mt.z=i.z-3;let s=Jt(Mt.x,Mt.z),r=6,a=new R(Jt(Mt.x-r,Mt.z)-Jt(Mt.x+r,Mt.z),2*r,Jt(Mt.x,Mt.z-r)-Jt(Mt.x,Mt.z+r)).normalize(),o=[[1,0,.12,-1],[.08,.1,1,1],[1,.05,-.25,4.4],[.25,.15,1,-1.4]].map(([P,D,F,I])=>{let U=new R(P,D,F),B=U.length();return{n:U.divideScalar(B),d:I/B}}),l=[[[[0,-1],[1,1]],[-1.1,0,.7]],[[[0,-1],[1,-1]],[-.8,-.1,-.6]],[[[0,1],[2,-1],[3,1]],[.2,0,.55]],[[[0,1],[2,-1],[3,-1]],[.15,-.05,-.65]]],c=Mt.grp=new vt;c.position.set(Mt.x,s-n,Mt.z),c.quaternion.setFromUnitVectors(new R(0,1,0),a).multiply(new gt().setFromAxisAngle(new R(0,1,0),t)),wt.add(c);let d=gS(),h=new R,u=[],f=new Tr(1,5);f.deleteAttribute("normal"),f.deleteAttribute("uv");let m=Sd(f);for(let[P,D]of l){let F=m.clone(),I=F.attributes.position;for(let ye=0;ye<I.count;ye++){h.fromBufferAttribute(I,ye).normalize();let we=An(h.x*1.6+h.y*2.3+11,h.z*1.6-h.y*1.3,3),At=An(h.x*7+3,h.z*7+h.y*6,3),at=An(h.x*19-5,h.z*19+h.y*17,2),dt=An(h.x*48+9,h.z*48-h.y*41,2),Y=.84+.3*we+.12*At+.06*at+.025*dt,ne=1+.35*Math.max(0,h.y)*Math.exp(-((h.x-.15)**2+(h.z+.1)**2)*2.5),ve=Be=>Math.sign(Be)*Math.pow(Math.abs(Be),.55);h.set(ve(h.x)*e[0],ve(h.y)*e[1]*ne,ve(h.z)*e[2]).multiplyScalar(Y),h.y<-1&&(h.y=-1+(h.y+1)*.3);for(let[Be,_e]of P){let Ze=o[Be],an=_e*(Ze.n.dot(h)-Ze.d);an<0&&h.addScaledVector(Ze.n,-an*_e)}I.setXYZ(ye,h.x+D[0],h.y+D[1],h.z+D[2])}F.computeVertexNormals(),e0(F,u.length*3.1);let U=new Ye(F,d);U.castShadow=U.receiveShadow=!0,c.add(U),F.computeBoundingBox();let B=F.boundingBox,W=B.max.x-B.min.x,ie=B.max.z-B.min.z,X=W>ie,J=Math.min(W,ie),ee=Math.max(1,Math.round(Math.max(W,ie)/J));for(let ye=0;ye<ee;ye++){let we=(ye+.5)/ee,At=X?B.min.x+W*we:(B.min.x+B.max.x)/2,at=X?(B.min.z+B.max.z)/2:B.min.z+ie*we,dt=new R(At,1,at).applyQuaternion(c.quaternion);u.push({x:Mt.x+dt.x,z:Mt.z+dt.z,r:J/2*.85,top:s-n+B.max.y})}}Mt.cyl=u;let x=Math.PI/2-.15;mg({x:Mt.x+9,z:Mt.z+13,c:Math.cos(x),s:Math.sin(x),L:8,W:4.2,H:.7},d,21.7);let g=4.5*Math.PI/180,p=Math.cos(g),y=Math.sin(g),M=302,b=-756,v=22,S=(P,D)=>fS.some(F=>Math.hypot(P-F.x,D-F.z)<F.R),T=-40;for(let P=-70;P<0;P+=.25)if(S(M+p*P,b+y*P)){T=P;break}let _=T-2.5,E=M+p*(_-v/2),C=b+y*(_-v/2);mg({x:E,z:C,c:p,s:y,L:v,W:7,H:1,th:23*Math.PI/180,Lt:14,g0:Jt(E-p*v/2,C-y*v/2)},d,13.1)}function bS(){let i=[0,1,2].map(n=>{let s=new Tr(1,1);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=Sd(s);let r=s.attributes.position,a=new R,o=ns(31+n),l=[0,1,2].map(()=>[new R(o()-.5,(o()-.3)*.8,o()-.5).normalize(),.45+o()*.3]);for(let c=0;c<r.count;c++){a.fromBufferAttribute(r,c).multiplyScalar(.8+.4*o());for(let[d,h]of l){let u=a.dot(d)-h;u>0&&a.addScaledVector(d,-u)}r.setXYZ(c,a.x*[1,1.1,.9][n],a.y*[.85,.75,.95][n],a.z*[1,.85,1.1][n])}return s.computeVertexNormals(),s}),e=new sn({color:7828333,roughness:.95,flatShading:!0}),t=new jt;i.forEach((n,s)=>{let r=Vn.filter(l=>Math.floor(l.k*3)%3===s);if(!r.length)return;let a=new wr(n,e,r.length);r.forEach((l,c)=>{t.position.set(l.x,Jt(l.x,l.z)+Tf(l.x,l.z)-l.s*(l.bury??.62),l.z),t.rotation.set(0,l.yaw,0),t.scale.setScalar(l.s),t.updateMatrix(),a.setMatrixAt(c,t.matrix)});let o=new Ia({depthPacking:Qu});o.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLy = position.y;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("void main() {",`void main() {
  if ( vLy < 0.56 ) discard;      // below the ground line (the rock sits 0.62 of its size down)`)},a.customDepthMaterial=o,a.castShadow=a.receiveShadow=!0,wt.add(a)})}var dc=700,Or=new R(dc/12*(1.1**2+2.06**2),dc/12*(3.1**2+2.06**2),dc/12*(3.1**2+1.1**2)),Cf=()=>!0,yn=(()=>{try{return+localStorage.getItem("lrv-spd")||2}catch{return 2}})(),Ch=.41,sc=.36,_S=4200,yS=620,vS=.05,MS=1.6,gg=6e4,SS=1500,wS=.1,ES=1600,xf=.62,Pf=5;function t0(i){yn=i===3&&Cf()?3:i===2||i===3?2:1,xf=[.62,.85,1][yn-1],Pf=[5,11.2,15][yn-1];try{localStorage.setItem("lrv-spd",String(yn))}catch{}}var Rn=[[1.15,.915,1],[1.15,-.915,1],[-1.15,.915,-1],[-1.15,-.915,-1]].map(([i,e,t])=>({at:new R(i,-.08,e),steer:t,comp:0,contact:!1,spin:0,off:0,hit:0})),st={on:!1,x:-12,z:4,y:0},bf=[];for(let i of[-1.5,1.5])for(let e of[-1,1])for(let t of[-.3,.75])bf.push(new R(i,t,e));var N={p:new R(0,0,0),v:new R,q:new gt,w:new R,steer:0};function os(i,e,t){let s=new R(Jt(i-1.5,e)-Jt(i+1.5,e),3,Jt(i,e-1.5)-Jt(i,e+1.5)).normalize();N.q.setFromUnitVectors(new R(0,1,0),s).multiply(new gt().setFromAxisAngle(new R(0,1,0),t)),N.p.set(i,Xe(i,e),e).addScaledVector(s,.8),N.v.set(0,0,0),N.w.set(0,0,0),N.steer=0,mc=!0,Rn.forEach(r=>{r.hx=r.hy=0})}var mc=!0,rc=new R,zr=new R,jr=new R,or=new R,TS=new R,Sn=new R,Qt=new R,xg=new R,Ts=new R,Ya=new R,tf=new R,yt=new R,Za=new gt,Qi=new R,Sh=new R,it={t:0,start:null,peak:0,last:null,best:0,grounded:!0,spin:0},Yt=Object.assign({t:0,d:0,h:0,v:0,v2:0,v3:0,lap:0,lap2:0,lap3:0},(()=>{try{return JSON.parse(localStorage.getItem("lrv-records"))||{}}catch{return{}}})());t0(yn);var gi=0,rr=0,bg=.42;function _f(i){rc.set(0,-ss*dc,0),zr.set(0,0,0),Sn.set(0,1,0).applyQuaternion(N.q),Qt.set(1,0,0).applyQuaternion(N.q),xg.set(0,0,1).applyQuaternion(N.q);let e=N.v.dot(Qt),t=Math.hypot(N.v.x,N.v.z),n=Math.min(.42,Math.max(.1,1.5*Math.atan(1.15*1.3*xf*ss/Math.max(.01,t*t))));N.steer+=Math.max(-bg*i,Math.min(bg*i,rr*n-N.steer));let s=0;for(let d of Rn){let h=or.copy(d.at).applyQuaternion(N.q).add(N.p),u=(h.y-Xe(h.x,h.z))/Math.max(.3,Sn.y),f=sc+Ch-u;if(f<=0){d.contact=!1,d.comp=0,d.off+=i;continue}d.off>.12&&(d.hit=Math.max(d.hit,-N.v.y+.5)),d.off=0,d.contact=!0,s++;let m=(f-d.comp)/i;d.comp=f;let x=f>sc?m>=0?gg*(f-sc):Math.min(SS,gg*wS*(f-sc)):0,g=Math.min(9e3,_S*Math.min(f,sc)+(m<0?ES:yS)*m+x)*Fe(.2,.55,Sn.y);if(g<=0)continue;let p=gf(h.x,h.z),y=jr.copy(h).addScaledVector(Sn,-(u-Ch*.1)),M=y.sub(N.p);Ts.copy(N.w).cross(M).add(N.v);let b=N.steer*d.steer;Ya.copy(Qt).multiplyScalar(Math.cos(b)).addScaledVector(xg,Math.sin(b)),Ya.addScaledVector(p,-Ya.dot(p)).normalize(),tf.copy(p).cross(Ya).normalize();let v=Ts.dot(Ya),S=Ts.dot(tf),T=xf*g,_;gi>.02&&v>-.3?_=gi*[520,900,1300][yn-1]*Math.max(0,1-v/Pf):gi<-.02&&v<.3?_=gi*300*Math.max(0,1+v/MS):Math.abs(gi)>.02?_=-Math.sign(v)*T:_=0,_-=Math.sign(v)*Math.min(Math.abs(v)*400,vS*g);let E=-S*1600;if(mc){d.hx+=v*i,d.hy+=S*i,_=-(v*12e3+d.hx*3e4),E=-(S*12e3+d.hy*3e4);let P=Math.hypot(_,E);P>T&&(d.hx*=T/P,d.hy*=T/P)}let C=Math.hypot(_,E);C>T&&(_*=T/C,E*=T/C),yt.copy(p).multiplyScalar(g).addScaledVector(Ya,_).addScaledVector(tf,E),rc.add(yt),zr.add(Sh.copy(M).cross(yt)),d.spin+=v/Ch*i}{let d=0;for(let h of Rn)h.contact&&d++;if(d>=2&&!mc){let h=-e*Math.tan(N.steer)/1.15,u=N.w.dot(Sn);zr.addScaledVector(Sn,Math.max(-700,Math.min(700,(h-u)*Or.y*.8*d/4*Fe(.5,.8,Sn.y))))}}if(Sn.y<.6&&Sn.y>-.5&&t<2.5&&Math.hypot(N.w.x,N.w.z)<1.2){let d=!1;for(let h of bf){let u=or.copy(h).applyQuaternion(N.q).add(N.p);if(u.y<Xe(u.x,u.z)+.05){d=!0;break}}if(d){let h=yt.set(0,1,0).cross(Sn),u=h.length();u>.001&&zr.addScaledVector(h,2400/u*Fe(.6,.4,Sn.y))}}for(let d of bf){let h=or.copy(d).applyQuaternion(N.q).add(N.p),u=Xe(h.x,h.z),f=u-h.y;if(f<=0)continue;s++;let m=jr.copy(h).sub(N.p);Ts.copy(N.w).cross(m).add(N.v);let x=gf(h.x,h.z),g=Ts.dot(x);d.y>0&&(ae.roof=Math.max(ae.roof,-g),ae.topDown=!0);let p=g<0?Math.min(14e3,6e4*f-3500*g):Math.max(0,Math.min(2500,9e3*f)-3500*g);yt.copy(Ts).addScaledVector(x,-g);let y=yt.length();y>1e-4&&yt.multiplyScalar(-Math.min(.4*p,y*3e3)/y),yt.addScaledVector(x,p),rc.add(yt),zr.add(Sh.copy(m).cross(yt))}{Za.copy(N.q).invert();let d=(h,u,f,m,x)=>{let g=or.set(h,u,f).sub(N.p).applyQuaternion(Za),p=jr.set(Math.max(-1.5,Math.min(1.5,g.x)),Math.max(-.3,Math.min(.75,g.y)),Math.max(-1,Math.min(1,g.z))).applyQuaternion(N.q).add(N.p),y=Qi.copy(p).sub(yt.set(h,x?p.y:u,f)),M=y.length();if(M>=m)return;M<1e-4&&(y.copy(N.p).sub(yt.set(h,N.p.y,f)),y.y=0,M=0),y.normalize();let b=p.sub(N.p);Ts.copy(N.w).cross(b).add(N.v);let v=Ts.dot(y),S=Math.max(0,9e4*(m-M)-3e3*v);yt.copy(Ts).addScaledVector(y,-v);let T=yt.length();T>1e-4&&yt.multiplyScalar(-Math.min(.4*S,T*3e3)/T),yt.addScaledVector(y,S),rc.add(yt),zr.add(Sh.copy(b).cross(yt)),s++};if(st.on&&Math.hypot(N.p.x-st.x,N.p.z-st.z)<8){d(st.x,Math.max(st.y+.3,Math.min(st.y+7,N.p.y)),st.z,2.2,!0);for(let[h,u]of[[1,0],[-1,0],[0,1],[0,-1]]){d(st.x+h*4.1,st.y+.25,st.z+u*4.1,.5);for(let f=1;f<=4;f++){let m=f/5,x=4.1-1.9*m;d(st.x+h*x,st.y+.4+2.2*m,st.z+u*x,.2)}}}if(Mt.cyl.length&&Math.hypot(N.p.x-Mt.x,N.p.z-Mt.z)<22)for(let h of Mt.cyl)N.p.y<h.top+.6&&d(h.x,Math.min(h.top,N.p.y),h.z,h.r,!0)}N.v.addScaledVector(rc,i/dc),Za.copy(N.q).invert(),Qi.copy(N.w).applyQuaternion(Za);let r=yt.copy(zr).applyQuaternion(Za),a=Sh.set(Or.x*Qi.x,Or.y*Qi.y,Or.z*Qi.z),o=or.copy(Qi).cross(a);Qi.x+=(r.x-o.x)/Or.x*i,Qi.y+=(r.y-o.y)/Or.y*i,Qi.z+=(r.z-o.z)/Or.z*i,N.w.copy(Qi).applyQuaternion(N.q);{let d=Math.hypot(N.w.x,N.w.z);if(d>2.5){let h=Math.exp(-i*3*(d-2.5));N.w.x*=h,N.w.z*=h}}N.p.addScaledVector(N.v,i);let l=new gt(N.w.x*i*.5,N.w.y*i*.5,N.w.z*i*.5,0).multiply(N.q);N.q.x+=l.x,N.q.y+=l.y,N.q.z+=l.z,N.q.w+=l.w,N.q.normalize();let c=Ge-12;if(Math.abs(N.p.x-Et)>c&&(N.p.x=Et+Math.sign(N.p.x-Et)*c,N.v.x*(N.p.x-Et)>0&&(N.v.x=0)),Math.abs(N.p.z-Tt)>c&&(N.p.z=Tt+Math.sign(N.p.z-Tt)*c,N.v.z*(N.p.z-Tt)>0&&(N.v.z=0)),s===0)it.grounded&&it.t===0&&(it.start=N.p.clone(),it.peak=0,it.spin=0),it.t+=i,it.spin+=Math.hypot(N.w.x,N.w.z)*i,it.peak=Math.max(it.peak,N.p.y-.78-Xe(N.p.x,N.p.z)),it.grounded=!1;else if(!it.grounded){if(it.grounded=!0,it.t>.45){let d=Math.hypot(N.p.x-it.start.x,N.p.z-it.start.z);it.last={t:it.t,d,peak:Math.max(0,it.peak),spin:it.spin},it.t>it.best&&(it.best=it.t),HS(it.last)}it.t=0}return s}var AS=[["#7CC7F2",[[0,0],[129,-27],[330,-1400],[460,-2700],[805,-3003],[1294,-3036],[2200,-2950],[3012,-2599],[2500,-1900],[1735,-1228],[900,-600],[145,-39],[0,0]]]],oo=[-12,4],Kr=[],zt={x:oo[0]+150/dr,z:oo[1]-170/dr,ring:null,line:null},Vr=[["stop 6 \xB7 Tracy\u2019s Rock",805,-3003],["stop 8",3012,-2599],["stop 9 \xB7 Van Serg",1735,-1228]].map(([i,e,t])=>({n:i,x:oo[0]+e/dr,z:oo[1]+t/dr}));function RS(){let i=(c,d,h,u,f)=>.5*(2*d+(-c+h)*f+(2*c-5*d+4*h-u)*f*f+(-c+3*d-3*h+u)*f*f*f),e=[],t=[],n=new Ue;for(let[c,d]of AS){let h=d.map(m=>[oo[0]+m[0]/dr,oo[1]+m[1]/dr]),u=m=>h[Math.max(0,Math.min(h.length-1,m))];n.set(c);let f=0;for(let m=0;m<h.length-1;m++){let x=Math.hypot(h[m+1][0]-h[m][0],h[m+1][1]-h[m][1]),g=Math.max(2,Math.ceil(x/.5));for(let p=0;p<g;p++){let y=p/g,M=i(u(m-1)[0],u(m)[0],u(m+1)[0],u(m+2)[0],y),b=i(u(m-1)[1],u(m)[1],u(m+1)[1],u(m+2)[1],y);(f+=x/g)<3||(f=0,Ng(M,b,14)&&(e.push(M,Jt(M,b)+.12,b),t.push(n.r,n.g,n.b),Kr.push(M,b)))}}}let s=new It;s.setAttribute("position",new bt(e,3)),s.setAttribute("color",new bt(t,3));let r=new Bn({transparent:!0,depthWrite:!1,uniforms:{map:{value:Lf},px:{value:1},vh:{value:800},op:{value:0}},vertexShader:"attribute vec3 color; varying vec3 vC; uniform float px, vh; void main() { vC = color; vec4 mv = modelViewMatrix * vec4( position, 1.0 ); gl_Position = projectionMatrix * mv; gl_PointSize = max( 2.0 * px, 0.3 * projectionMatrix[1][1] * 0.5 * vh / -mv.z ); }",fragmentShader:"uniform sampler2D map; uniform float op; varying vec3 vC; void main() { float a = texture2D( map, gl_PointCoord ).a; if ( a < 0.02 ) discard; gl_FragColor = vec4( vC, a * 0.45 * op ); }"}),a=new bs(s,r),o=new We;a.frustumCulled=!1,a.renderOrder=2,a.visible=!1,wt.add(a),zt.line=a;let l=new Ye(new Pa(3.6,3.85,48),new kn({color:8177650,transparent:!0,opacity:.4,side:Dn,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(zt.x,Jt(zt.x,zt.z)+.25,zt.z),wt.add(l),zt.ring=l,a.onBeforeRender=c=>{r.uniforms.px.value=c.getPixelRatio(),r.uniforms.vh.value=c.getDrawingBufferSize(o).y}}var co=1400,Qn=new Float32Array(co*3),es=new Float32Array(co*3),Ph=new Float32Array(co),If=new It;If.setAttribute("position",new nt(Qn,3));function CS(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.6)"),t.addColorStop(.6,"rgba(255,255,255,.15)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new Ai(i)}var Lf=CS(),n0=new bs(If,new xs({color:10130828,size:.032,map:Lf,transparent:!0,opacity:.32,depthWrite:!1}));n0.frustumCulled=!1;wt.add(n0);var so=0,gc=1600,Ii=new Float32Array(gc*3),kr=new Float32Array(gc*3),nf=new Float32Array(gc),Df=new It;Df.setAttribute("position",new nt(Ii,3));var i0=new bs(Df,new xs({color:12433325,size:.06,map:Lf,transparent:!0,opacity:.3,depthWrite:!1}));i0.frustumCulled=!1;wt.add(i0);var sf=0;function PS(i){for(let e of Rn){if(!e.contact)continue;let t=or.copy(e.at).applyQuaternion(N.q).add(N.p),n=N.v.length(),s=Math.min(5,Math.floor(n*1.2*i*60*(.6+Math.random())));for(let r=0;r<s;r++){let a=so;so=(so+1)%co,Qn[a*3]=t.x+(Math.random()-.5)*.3,Qn[a*3+1]=Xe(t.x,t.z)+.05,Qn[a*3+2]=t.z+(Math.random()-.5)*.3;let o=.5+Math.random()*1.1*Math.min(1,n/3);es[a*3]=-Qt.x*n*(.25+Math.random()*.5)+(Math.random()-.5)*.6,es[a*3+1]=o,es[a*3+2]=-Qt.z*n*(.25+Math.random()*.5)+(Math.random()-.5)*.6,Ph[a]=1}if(e.hit>0){let r=Xe(t.x,t.z),a=Math.min(110,Math.round(40*e.hit)),o=Math.min(2.2,e.hit);for(let l=0;l<a;l++){let c=sf,d=Math.random()*6.2832,h=(.4+Math.random()*1)*o;sf=(sf+1)%gc,Ii[c*3]=t.x+Math.cos(d)*.25,Ii[c*3+1]=r+.04,Ii[c*3+2]=t.z+Math.sin(d)*.25,kr[c*3]=Math.cos(d)*h+N.v.x*.4,kr[c*3+1]=(.2+Math.random()*.6)*o,kr[c*3+2]=Math.sin(d)*h+N.v.z*.4,nf[c]=1}e.hit=0}}for(let e=0;e<co;e++){if(Ph[e]<=0){Qn[e*3+1]=-9999;continue}es[e*3+1]-=ss*i,Qn[e*3]+=es[e*3]*i,Qn[e*3+1]+=es[e*3+1]*i,Qn[e*3+2]+=es[e*3+2]*i,Qn[e*3+1]<Xe(Qn[e*3],Qn[e*3+2])&&(Ph[e]=0)}If.attributes.position.needsUpdate=!0;for(let e=0;e<gc;e++){if(nf[e]<=0){Ii[e*3+1]=-9999;continue}kr[e*3+1]-=ss*i,Ii[e*3]+=kr[e*3]*i,Ii[e*3+1]+=kr[e*3+1]*i,Ii[e*3+2]+=kr[e*3+2]*i,Ii[e*3+1]<Xe(Ii[e*3],Ii[e*3+2])&&(nf[e]=0)}Df.attributes.position.needsUpdate=!0}function IS(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"rgba(58,56,53,0)"),n.addColorStop(.16,"rgba(56,54,51,.22)"),n.addColorStop(.84,"rgba(56,54,51,.22)"),n.addColorStop(1,"rgba(58,56,53,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),t.lineCap="round",t.lineJoin="round";for(let[r,a]of[[64*.2,.04],[64*.14,.065],[64*.08,.1]]){t.strokeStyle=`rgba(40,38,36,${a})`,t.lineWidth=r;for(let o=-1;o<5;o++){let l=o*64/4;t.beginPath(),t.moveTo(64*.16,l),t.lineTo(64*.5,l+64*.11),t.lineTo(64*.84,l),t.stroke()}}let s=new Ai(e);return s.wrapS=s.wrapT=qn,s.colorSpace=Xt,s.anisotropy=4,s}var Fi=1400,LS=new sn({map:IS(),transparent:!0,depthWrite:!1,roughness:1,vertexColors:!0,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),DS=Rn.map(()=>{let i=new Float32Array(Fi*2*3),e=new Float32Array(Fi*2*2),t=new Float32Array(Fi*2*4),n=new Uint32Array((Fi-1)*6);for(let a=0;a<Fi-1;a++){let o=a*2;n.set([o,o+2,o+1,o+2,o+3,o+1],a*6)}let s=new It;s.setAttribute("position",new nt(i,3)),s.setAttribute("uv",new nt(e,2)),s.setAttribute("color",new nt(t,4)),s.setIndex(new nt(n,1)),s.setDrawRange(0,0);let r=new Ye(s,LS);return r.frustumCulled=!1,r.receiveShadow=!0,r.renderOrder=1,wt.add(r),{g:s,pos:i,uv:e,col:t,n:0,last:null,s:0,gap:!1}}),io=new R;function rf(i,e){let t=(i-cn.cx+cn.half)/Rs,n=(e-cn.cz+cn.half)/Rs;if(!(t>=0&&n>=0&&t<rs-1&&n<rs-1))return Jt(i,e);let s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=Cs.attributes.position,c=(m,x)=>l.getY(x*rs+m),d=c(s,r),h=c(s,r+1),u=c(s+1,r);if(a+o<=1)return d+(u-d)*a+(h-d)*o;let f=c(s+1,r+1);return f+(h-f)*(1-a)+(u-f)*(1-o)}function af(i,e,t,n,s,r,a,o){if(i.n>=Fi){let l=Fi>>1,c=Fi-l;i.pos.copyWithin(0,c*6,Fi*6),i.uv.copyWithin(0,c*4,Fi*4),i.col.copyWithin(0,c*8,Fi*8),i.n=l}i.pos.set([e,t,n,s,r,a],i.n*6),i.uv.set([0,i.s,1,i.s],i.n*4),i.col.set([1,1,1,o,1,1,1,o],i.n*8),i.n++}function FS(){Rn.forEach((i,e)=>{let t=DS[e];if(!i.contact){t.n&&(t.gap=!0);return}let n=zi[e],s=(n?io.set(n.c.x,i.at.y,n.c.z):io.copy(i.at)).applyQuaternion(N.q).add(N.p);if(t.last&&!t.gap&&Math.hypot(s.x-t.last.x,s.z-t.last.z)<.25)return;let r=n?n.hw:.115,a=t.last&&!t.gap?s.x-t.last.x:Qt.x,o=t.last&&!t.gap?s.z-t.last.z:Qt.z,l=Math.hypot(a,o)||1,c=-o/l*r,d=a/l*r,h=s.x+c,u=s.z+d,f=s.x-c,m=s.z-d,x=rf(s.x,s.z),g=Math.max(rf(h,u),x)+.02,p=Math.max(rf(f,m),x)+.02;if(t.gap){let M=(t.n-1)*6,b=t.pos.slice(M,M+6);af(t,b[0],b[1],b[2],b[3],b[4],b[5],0),af(t,h,g,u,f,p,m,0),t.gap=!1}else t.last&&(t.s+=Math.hypot(s.x-t.last.x,s.z-t.last.z)/.5);af(t,h,g,u,f,p,m,1),t.last={x:s.x,z:s.z};let y=t.g.attributes;y.position.needsUpdate=y.uv.needsUpdate=y.color.needsUpdate=!0,t.g.setDrawRange(0,Math.max(0,(t.n-1)*6))})}var ac={az:240.7,el:45.1,diam:1.88,sub:[-110.9,-8.5],pole:[-.3895,.2953,-.8724]};function NS(){let e=ac.el*Math.PI/180,t=ac.az*Math.PI/180,n=6e4*Math.tan(ac.diam/2*Math.PI/180),s=new sn({roughness:.85,metalness:0,fog:!1,color:new Ue(2.2,2.2,2.2)});new Ar().load("../models/earth-bm.jpg",h=>{h.colorSpace=Xt,h.anisotropy=4,s.map=h,s.needsUpdate=!0}),s.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOp = normalize(position);`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
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
        { float rim = 1. - abs(dot(normalize(vNormal), vec3(0., 0., 1.))); totalEmissiveRadiance += vec3(.12, .25, .55) * pow(rim, 4.) * .35; }`)};let r=new Ye(new Do(n,64,32),s),a=new R(Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e));r.position.copy(a).multiplyScalar(6e4);let o=(h,u)=>(h*=Math.PI/180,u*=Math.PI/180,new R(Math.cos(u)*Math.cos(h),Math.sin(u),-Math.cos(u)*Math.sin(h))),l=(h,u)=>{let f=h.clone().normalize(),m=u.clone().addScaledVector(f,-u.dot(f)).normalize();return new qe().makeBasis(f,m,new R().crossVectors(f,m))},c=l(o(...ac.sub),new R(0,1,0)),d=l(a.clone().negate(),new R(...ac.pole));return r.quaternion.setFromRotationMatrix(d.multiply(c.transpose())),r}var s0=NS();wt.add(s0);var Ie=new vt;wt.add(Ie);var of=new tc().setMeshoptDecoder(Qd);function oc(i,e,t,n){i.onBeforeCompile=s=>{s.uniforms.uW={value:new _t(...n)},s.uniforms.uF={value:new We(...t||[1,0])},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        if (uF.y > 0.) { vec3 q = vWp * uF.x; float fw = length(fwidth(q)); vec3 t = fCell(q) * smoothstep(1.1, .3, fw) + .6 * fCell(q * .37 + 5.) * smoothstep(1.1, .3, fw * .37); normal = normalize(normal + uF.y * (viewMatrix * vec4(t, 0.)).xyz); }`)},i.customProgramCacheKey=()=>"lm-"+e}function US(i){i.traverse(e=>{e.isMesh&&(e.material=[].concat(e.material).map(t=>{let n=t.clone(),s=n.name||"",r=(a,o,l)=>{n.color.set(a),n.metalness=o,n.roughness=l};return/blinn1SG|blinn10SG/.test(s)?(r(13600048,.15,.5),oc(n,"amber",[11,.09],[.06,.1,.02,1.5])):/blinn9SG/.test(s)?(r(11033122,.15,.52),oc(n,"amber2",[11,.09],[.06,.1,.02,1.5])):/initialShadingGr|blinn3SG|blinn7SG/.test(s)?(r(s.includes("blinn3")?6444365:9601135,.08,.55),oc(n,"cabin",null,[.08,.12,.04,1.2]),n.flatShading=!0):/blinn4SG/.test(s)?(r(11774880,.12,.5),oc(n,"metal",null,[.07,.12,.04,2])):/blinn6SG|blinn2SG/.test(s)&&(r(s.includes("blinn6")?1579034:3946036,.3,.55),oc(n,"dark",null,[.06,.1,.03,2])),n}),e.material.length===1&&(e.material=e.material[0]))})}function _g(i){i.traverse(e=>{e.isMesh&&(e.castShadow=e.receiveShadow=!0,[].concat(e.material).forEach(t=>{t.color&&t.color.lerp(new Ue(10196364),.18)}))})}var Di=Object.create(null);addEventListener("keydown",i=>{Di[i.key.toLowerCase()]=!0,i.key.toLowerCase()==="r"&&Nf(),i.key===" "&&xe.on&&i.preventDefault()});addEventListener("keyup",i=>{Di[i.key.toLowerCase()]=!1});var yg=cg(se("stick")),Lt={yaw:0,pitch:.18,id:null,x:0,y:0,idle:9},ti=0,vg=[0,3,1,2],OS=["Chase","Wide","Seat","Low"];function Ff(i){ti=i,se("btn-pov").textContent=OS[ti],fr=!1,Ie.visible=!0,i===2&&(Lt.yaw=0,Lt.pitch=.18)}se("btn-pov").addEventListener("click",()=>Ff(vg[(vg.indexOf(ti)+1)%4]));addEventListener("pointerdown",i=>{i.target===Nn.domElement&&(Lt.id=i.pointerId,Lt.x=i.clientX,Lt.y=i.clientY)});addEventListener("pointermove",i=>{i.pointerId===Lt.id&&(Lt.yaw-=(i.clientX-Lt.x)*.006,Lt.pitch=Math.max(ti===2?-.7:-.1,Math.min(1.1,Lt.pitch+(i.clientY-Lt.y)*.004)),Lt.x=i.clientX,Lt.y=i.clientY,Lt.idle=0)});addEventListener("pointerup",i=>{i.pointerId===Lt.id&&(Lt.id=null)});document.addEventListener("touchmove",i=>{i.target.closest(".sheet")||i.preventDefault()},{passive:!1});var Ih=0,kh={x:-1e4,y:-1e4};addEventListener("pointermove",i=>{i.pointerType==="mouse"&&(kh.x=i.clientX,kh.y=i.clientY)});var r0=i=>40+18*Math.sin(3*i+5)+12*Math.sin(5*i)+7*Math.sin(8*i+4);function $a(i,e){let t=i-Et,n=e-Tt;return Ge-r0(Math.atan2(n,t))-Math.pow(t**6+n**6,1/6)}function zS(i){let e=Math.cos(i),t=Math.sin(i),n=(Ge-r0(i))/Math.pow(e**6+t**6,1/6);return[Et+n*e,Tt+n*t]}var Ot={on:!1,t:0,cool:0,th:0,st:0,wt:0,msg:"",turn:!1};function kS(i){let e=se("cine-cap");e.classList.remove("on"),e.textContent=i,e.offsetWidth,e.classList.add("on")}function cf(i){if(i===Ot.msg)return;Ot.msg=i;let e=se("edgewarn");i&&(e.textContent=i),e.classList.toggle("on",!!i)}function yf(){Ot.on=!1,Ot.cool=4,document.body.classList.remove("home"),se("cine-cap").classList.remove("on")}function BS(i){let e=N.p.x,t=N.p.z,n=$a(e,t),s=-(N.v.x*($a(e+1,t)-$a(e-1,t))+N.v.z*($a(e,t+1)-$a(e,t-1)))/2,r=Math.min(50,15+Math.max(0,s)**2/2.4),a=ae.on||Vt.on||Re.on||Dt.on||xe.on;if(Ot.on&&a)return yf(),!1;if(!Ot.on){Ot.cool-=i;let y=s>.3?(n-r)/s:99;if(a||n>160||y>5&&n>r+12||s<-.3)return cf(""),!1;if(n>r||Ot.cool>0)return(Ot.wt-=i)<=0&&(Ot.wt=.25,cf(`Mission Control \xB7 You\u2019re nearing the edge of the mission area. Turn back toward the LM${y<99?`, or Cernan takes the wheel in ${Math.max(1,Math.ceil(y))} s`:""}.`)),!1;cf(""),Ot.on=!0,Ot.t=0,Ot.turn=!1,document.body.classList.add("home"),kS("Cernan has the wheel \xB7 He brakes, turns you around and heads back inside the mission area.")}Ot.t+=i;let o=Math.hypot(st.x-e,st.z-t)>500,l=o?Et:st.x,c=o?Tt:st.z,d=y=>y-2*Math.PI*Math.round(y/(2*Math.PI)),h=Math.atan2(-(c-t),l-e),u=Math.atan2(-Qt.z,Qt.x),f=Math.hypot(N.v.x,N.v.z),m=Math.atan2(-N.v.z,N.v.x),x=d(h-u),g=d(h-m);if(Ot.turn&&Math.abs(x)<.5&&(f<1||Math.abs(g)<.6)&&Ot.t>2||Ot.t>15)return yf(),kt("Back inside the mission area \xB7 the controls are yours"),!1;let p=Math.min(1,Ot.t/1.2);return f>4&&!Ot.turn?(Ot.st=0,Ot.th=-1):(Ot.turn=!0,Ot.st=p*Math.max(-1,Math.min(1,-x*2.5)),Ot.th=f<2.5?.5:.15),!0}function kt(i){se("toast").textContent=i,se("toast").classList.add("on"),Ih=3.6}function HS(i){$.ph==="film"&&i.t>.6&&($.land=xi),Ka(i.t>1.2?40:20);let e=[];i.t>Yt.t&&(Yt.t=i.t,e.push("air time")),i.d>Yt.d&&(Yt.d=i.d,e.push("distance")),i.peak>Yt.h&&(Yt.h=i.peak,e.push("height"));try{localStorage.setItem("lrv-records",JSON.stringify(Yt))}catch{}let t=i.spin>5.4?" \xB7 full roll!":i.spin>2.6?" \xB7 half roll":"";kt(`Airborne ${i.t.toFixed(1)} s \xB7 ${nr(i.d,1)} \xB7 ${nr(i.peak,1)} high${t}${e.length?" \xB7 new record":""}`),_c(),c1(i)}function _c(){se("best").textContent=Yt.t?Yt.t.toFixed(1)+" s":"\u2014";let i=Yt[yn>1?"v"+yn:"v"];se("topv").textContent=i?bh+" \xB7 best "+_h(i).toFixed(1):bh;let e=Yt[yn>1?"lap"+yn:"lap"];se("rec").textContent=[e?`Best loop ${Math.floor(e/60)}:${(e%60).toFixed(1).padStart(4,"0")}`:"",Yt.t?`${Yt.t.toFixed(1)} s in the air \xB7 ${nr(Yt.d,1)} \xB7 ${nr(Yt.h,1)} high`:""].filter(Boolean).join(" \xB7 ")}var ke={on:!1,t:0,cp:0,peak:0,away:!1,warned:!1,save:null},ro={t:0};function VS(){let i=ke.save;se("btn-rejoin").classList.remove("on"),ro.t=0,!(!i||ae.on)&&(os(i.x,i.z,i.yaw),fr=!1,Object.assign(ke,{on:!0,t:i.t,cp:i.cp,peak:i.peak,warned:!1,away:!0}),kt(`Back on the route \xB7 the clock resumes at ${fc(i.t)}`))}var Vt={on:!1,t:0,cap:"",go:!1,lines:null};function GS(){let i=yn>1?"lap"+yn:"lap";Vt.lines=[[0,6.5,"The time trial: Apollo 17\u2019s third drive, north to Tracy\u2019s Rock at stop 6, east to stop 8, and home past Van Serg crater. On the Moon it was "+(Es?"7.5 mi (12.1 km)":"12.1 km")+"; here the stops sit at a quarter of their true distances, so the loop is about "+(Es?"1.5 mi":"2.5 km")+"."],[6.5,12,"The fastest anyone has driven on the Moon is about "+(Es?"11 mph (18 km/h)":"18 km/h (11 mph)")+": Gene Cernan, in this rover, downhill on the way back from that drive. It is still the lunar speed record."+(Yt[i]?` Your best loop at this speed: ${fc(Yt[i])}.`:"")],[12,13.6,"Timer started \xB7 Go!"]],Vt.on=!0,Vt.t=0,Vt.go=!1,rn=!1,document.body.classList.add("briefing")}function WS(i){let e=Vt.t+=i;e>=Vt.lines[2][0]&&!Vt.go&&(Vt.go=!0,rn=!0,ke.on=!0,ke.t=0,ke.cp=0,ke.peak=0,ke.warned=!1),e>=Vt.lines[2][1]&&(Vt.on=!1,document.body.classList.remove("briefing"));let t="";if(Vt.on)for(let[n,s,r]of Vt.lines)e>=n&&e<s&&(t=r);if(t!==Vt.cap){Vt.cap=t;let n=se("cine-cap");n.classList.remove("on"),t&&(n.textContent=t,n.offsetWidth,n.classList.add("on"))}}function qS(){let i=1e9;for(let e=0;e<Kr.length;e+=2){let t=Kr[e]-N.p.x,n=Kr[e+1]-N.p.z,s=t*t+n*n;s<i&&(i=s)}return Math.sqrt(i)}function XS(i){let e=zt.line.material.uniforms.op,t=zt.live?ke.on?1:.65:0;e.value+=Math.sign(t-e.value)*Math.min(Math.abs(t-e.value),i/1.5),zt.line.visible=e.value>.001}var fc=i=>`${Math.floor(i/60)}:${(i%60).toFixed(1).padStart(4,"0")}`;function lf(i,e,t){io.set(i,Jt(i,e)+2,e).project(Qe);let n=se("objmark"),s=(io.x*.5+.5)*innerWidth,r=(-io.y*.5+.5)*innerHeight;io.z<1?(n.style.display="block",n.style.transform=`translate(${Math.max(20,Math.min(innerWidth-170,s))}px,${Math.max(80,Math.min(innerHeight-60,r))}px)`,n.querySelector("b").textContent=t):n.style.display="none"}function jS(i,e,t){let n=Math.hypot(zt.x-N.p.x,zt.z-N.p.z);if(!ke.on){if(n<4.5&&!ke.away){ke.away=!0,GS();return}n>8&&(ke.away=!1),lf(zt.x,zt.z,n>25?`Time trial \xB7 ${vh(n)}`:"Time trial"),se("clock").textContent="";return}ke.t+=t,e&&i>ke.peak&&(ke.peak=i);let s=qS();if(s<8&&it.grounded&&Sn.y>.85&&(ke.saveT=(ke.saveT||0)+t)>1&&(ke.saveT=0,ke.save={x:N.p.x,z:N.p.z,yaw:Math.atan2(-Qt.z,Qt.x),t:ke.t,cp:ke.cp,peak:ke.peak}),s>35){ke.on=!1,ke.away=!1,se("clock").textContent="",kt("Too far from the route \xB7 time trial over"),ke.save&&(ro.t=10,se("btn-rejoin").classList.add("on"));return}s>20&&!ke.warned?(ke.warned=!0,kt("Back to the line, or the time trial ends")):s<12&&(ke.warned=!1);let r=Vr[ke.cp];if(r){let a=Math.hypot(r.x-N.p.x,r.z-N.p.z);a<14&&(ke.cp++,kt(`${r.n[0].toUpperCase()+r.n.slice(1)} \xB7 ${fc(ke.t)}`)),lf(r.x,r.z,`${r.n} \xB7 ${vh(a)}`)}else if(lf(zt.x,zt.z,`Finish \xB7 ${vh(n)}`),n<4.5){ke.on=!1,ke.away=!0;let a=!Cf(),o=yn>1?"lap"+yn:"lap",l=yn>1?"v"+yn:"v",c=!Yt[o]||ke.t<Yt[o];c&&(Yt[o]=ke.t),ke.peak>Yt[l]+.05&&(Yt[l]=ke.peak),kt(`Loop ${fc(ke.t)}${c?" \xB7 best lap":""} \xB7 top speed ${yh(ke.peak,1)}${yn===1&&ke.peak>18?" \xB7 faster than Cernan\u2019s "+yh(18):""}${a?" \xB7 Triple speed unlocked: choose it on the start card":""}`);try{localStorage.setItem("lrv-records",JSON.stringify(Yt))}catch{}_c()}se("clock").textContent=fc(ke.t)}var ae={roof:0,on:!1,t:0,fade:0,safe:{x:0,z:0,yaw:0},safeT:0,pieces:[],joints:[],extra:[],brace:[]},a0=[],hr=new Map;function KS(){Ie.updateMatrixWorld(!0);let i=Ie.matrixWorld.clone().invert(),e=new R,t=new Ve,n=new Map,s=r=>(hr.has(r)||hr.set(r,r.clone()),hr.get(r));Ie.traverse(r=>{if(!r.isMesh)return;let a=zi.findIndex(f=>{for(let m=r;m;m=m.parent)if(m===f.spin)return!0;return!1}),o=i.clone().multiply(r.matrixWorld),l=r.geometry,c=l.attributes.position,d=l.index?l.index.array:null,h=(d?d.length:c.count)/3;t.getNormalMatrix(o);let u=new Float32Array(c.count*3);for(let f=0;f<c.count;f++)e.fromBufferAttribute(c,f).applyMatrix4(o),u[f*3]=e.x,u[f*3+1]=e.y,u[f*3+2]=e.z;for(let f=0;f<h;f++){let m=[0,1,2].map(p=>d?d[f*3+p]:f*3+p),x="w"+a;if(a<0){let p=(u[m[0]*3]+u[m[1]*3]+u[m[2]*3])/3,y=(u[m[0]*3+1]+u[m[1]*3+1]+u[m[2]*3+1])/3,M=(u[m[0]*3+2]+u[m[1]*3+2]+u[m[2]*3+2])/3;if(y>et.KIT)x="k"+(p>-.1?1:0)+(M>0?1:0);else{let b=p<et.HA?0:p>et.HF?2:1;for(let v of zi)Math.abs(M)>.42&&y>-.9&&Math.abs(p-v.c.x)<.56&&(b=v.c.x>0?2:0);x="c"+b}}n.has(x)||n.set(x,new Map);let g=n.get(x);g.has(r)||g.set(r,{f:u,M:o.clone(),n:t.clone(),list:[]}),g.get(r).list.push(...m)}});for(let[r,a]of n){let o=new nn;for(let{f:h,list:u}of a.values())for(let f of u)o.expandByPoint(e.set(h[f*3],h[f*3+1],h[f*3+2]));let l=o.getCenter(new R),c=o.getSize(new R),d=[];for(let[h,{f:u,n:f,list:m}]of a){let x=h.geometry,g=new It,p=new Float32Array(m.length*3);m.forEach((y,M)=>{p[M*3]=u[y*3]-l.x,p[M*3+1]=u[y*3+1]-l.y,p[M*3+2]=u[y*3+2]-l.z}),g.setAttribute("position",new nt(p,3));for(let y of Object.keys(x.attributes)){if(y==="position")continue;let M=x.attributes[y],b=M.itemSize,v=new Float32Array(m.length*b);m.forEach((S,T)=>{if(y==="normal"){e.fromBufferAttribute(M,S).applyMatrix3(f).normalize(),v[T*3]=e.x,v[T*3+1]=e.y,v[T*3+2]=e.z;return}v[T*b]=M.getX(S),b>1&&(v[T*b+1]=M.getY(S)),b>2&&(v[T*b+2]=M.getZ(S)),b>3&&(v[T*b+3]=M.getW(S))}),g.setAttribute(y,new nt(v,b))}d.push({geo:g,mat:s(h.material)})}a0.push({c:l,sz:c,parts:d,key:r,kind:r[0]})}}function Mg(i,e,t){let n=[];if(t){let o=Math.max(e.x,e.y)/2,l=e.z/2;for(let c=0;c<10;c++){let d=c/10*Math.PI*2;for(let h of[-l,l])n.push(new R(Math.cos(d)*o,Math.sin(d)*o,h))}}else{i.updateMatrixWorld(!0);let o=i.matrixWorld.clone().invert();i.traverse(l=>{if(!l.userData.part)return;let c=new nn;l.children.forEach(h=>{h.geometry.computeBoundingBox(),c.union(h.geometry.boundingBox)});let d=o.clone().multiply(l.matrixWorld);for(let h=0;h<8;h++)n.push(new R(h&1?c.max.x:c.min.x,h&2?c.max.y:c.min.y,h&4?c.max.z:c.min.z).applyMatrix4(d))})}i.updateMatrixWorld(!0);let s=0;for(let o of n){let l=o.clone().applyQuaternion(i.quaternion).add(i.position);s=Math.max(s,Xe(l.x,l.z)-l.y)}i.position.y+=s;let r=new nn().setFromPoints(n),a=r.getSize(new R).max(new R(.1,.1,.1));return{pts:n,R:Math.max(...n.map(o=>o.length())),I:new R((a.y*a.y+a.z*a.z)/12,(a.x*a.x+a.z*a.z)/12,(a.x*a.x+a.y*a.y)/12),still:0,rest:!1}}function o0(i=8){Ka([70,50,140,40,60]);let e=Math.max(0,Math.min(1,(i-3.5)/8));ae.on=!0,ae.t=0,ae.fade=0,Ie.visible=!1,ae.id=(ae.id||0)+1,ae.pieces.forEach(u=>wt.remove(u.m)),ae.extra.forEach(u=>wt.remove(u)),ae.pieces=[],ae.joints=[],ae.extra=[],ae.brace=[],hr.forEach(u=>{u.opacity=1,u.transparent=!1,u.needsUpdate=!0}),Ie.updateMatrixWorld(!0);let t=u=>{let f=new vt;return f.userData.part=!0,u.parts.forEach(({geo:m,mat:x})=>{let g=new Ye(m,x);g.castShadow=!0,f.add(g)}),f},n=Math.random,s={};a0.forEach(u=>{s[u.key]=u});let r=(u,f,m,x,g)=>{let p=f.clone().applyMatrix4(Ie.matrixWorld).sub(N.p),y=N.v.clone().add(N.w.clone().cross(p));y.addScaledVector(p.clone().setY(0).normalize(),m*(.5+n())).add(new R(0,m*(.3+n()*.7),0)),u.position.copy(f).applyMatrix4(Ie.matrixWorld),u.quaternion.copy(N.q),wt.add(u),ae.pieces.push(Object.assign({m:u,v:y,w:N.w.clone().add(new R(n()-.5,n()-.5,n()-.5).multiplyScalar(4*m))},Mg(u,g,x)))},a=s.c1.c,o=new vt;o.add(t(s.c1));let l=e>.85&&n()<(e-.85)*3?n()<.5?"c0":"c2":null,c={};for(let u of["c0","c2"]){let f=s[u];if(!f)continue;if(u===l){r(t(f),f.c,1.2*e,!1);continue}let m=u==="c0"?et.HA:et.HF,x=new vt;x.position.set(m-a.x,et.HY-a.y,-a.z);let g=t(f);g.position.set(f.c.x-m,f.c.y-et.HY,f.c.z),x.add(g),o.add(x),x.rotation.z=(n()<.5?-1:1)*(.08+.4*e)*(.6+.4*n()),x.rotation.x=(n()-.5)*.25*e,c[u]=x}for(let u of["w0","w1","w2","w3","k00","k01","k10","k11"]){let f=s[u];if(!f)continue;let m=u[0]==="w";if(n()<(m?.1+.45*e:.45+.4*e)){r(t(f),f.c,(m?1:.6)*(.3+e),m,f.sz);continue}let g=m?c[f.c.x>0?"c2":"c0"]:null,p=t(f);g?p.position.copy(f.c).sub(a).sub(g.position):p.position.copy(f.c).sub(a),p.rotation.set((n()-.5)*(m?.7:1.1)*(.3+e),(n()-.5)*.3*(.3+e),(n()-.5)*(m?.3:1)*(.3+e)),m||p.scale.set(1,.5+.25*n(),1),(g||o).add(p)}o.position.copy(a).applyMatrix4(Ie.matrixWorld),o.quaternion.copy(N.q),wt.add(o);let d=[];for(let u of je){if(!u.visible||u===je[1]&&$.on)continue;u.updateMatrixWorld(!0);let f=u.userData.bones,m=n()<.5,x=new gt,g=new R,p=new R,y=new R((n()-.5)*1.2,.8+1.2*e+n()*.6,(n()-.5)*1.2).multiplyScalar(.15+.85*e),M=new R(n()-.5,n()-.5,n()-.5).multiplyScalar(1.5+2*e),b=[],v=[];for(let _=0;_<10;_++){if(_===7&&!m){b.push(b[0]),v.push(null);continue}let E=Ni[_],C=new ms;f[_].matrixWorld.decompose(g,x,p),C.position.copy(E.c).sub(Ni[_===7?0:_].c).applyQuaternion(x).add(g),C.quaternion.copy(x),wt.add(C),b.push(C);let P=E.size.clone().multiplyScalar(.5).max(new R(.05,.05,.05)),D=[];for(let B=0;B<8;B++)D.push(new R(B&1?P.x:-P.x,B&2?P.y:-P.y,B&4?P.z:-P.z));let F=P.clone().multiplyScalar(2),I=C.position.clone().sub(N.p),U={m:C,v:N.v.clone().add(N.w.clone().cross(I)).add(y),w:N.w.clone().add(M),inv:_?1:.3,airDamp:.9,pts:D,R:P.length(),I:new R((F.y*F.y+F.z*F.z)/12,(F.x*F.x+F.z*F.z)/12,(F.x*F.x+F.y*F.y)/12),still:0,rest:!1};_===7&&(U.v.add(new R(n()-.5,n(),n()-.5)),U.w.multiplyScalar(1.5)),ae.pieces.push(U),v.push(U)}let S=0;for(let _ of v)if(_)for(let E of _.pts){let C=E.clone().applyQuaternion(_.m.quaternion).add(_.m.position);S=Math.max(S,Xe(C.x,C.z)-C.y)}v.forEach(_=>{_&&(_.m.position.y+=S,_.m.updateMatrixWorld(!0))});let T=new Xs(b,S0(m));for(let[_,E,C]of u.userData.parts){let P=hr.get(E)||(hr.set(E,Object.assign(E.clone(),{onBeforeCompile:E.onBeforeCompile,customProgramCacheKey:E.customProgramCacheKey})),hr.get(E)),D=_;if(m){D=new It;for(let I in _.attributes)D.setAttribute(I,_.attributes[I]);D.setIndex(C)}let F=new Ws(D,P);F.castShadow=!0,F.frustumCulled=!1,F.bind(T,new qe),wt.add(F),ae.extra.push(F)}for(let[_,E,C]of to)ae.joints.push({A:v[_],B:v[E],la:C.clone().sub(Ni[_].c),lb:C.clone().sub(Ni[E].c),lim:QS(_,E)});d.push([v.filter((_,E)=>_&&E!==7),v[0],Ni[0].c.clone().negate().applyQuaternion(v[0].m.quaternion).add(v[0].m.position)]),ae.brace.push({T:v[0],arms:[-1,1].map(_=>{let[E,C]=Bf(_);return[v[E],v[C],c0(_),_]})})}let h=o.position.clone().sub(N.p);if(ae.pieces.push(Object.assign({m:o,main:!0,v:N.v.clone().add(N.w.clone().cross(h)),w:N.w.clone(),deck:[new R(-1.5-a.x,-.35-a.y,-1-a.z),new R(1.5-a.x,.1-a.y,1-a.z)]},Mg(o))),ae.pieces[ae.pieces.length-1].inv=.03,e<.55){let u=ae.pieces[ae.pieces.length-1],f=u.m.quaternion.clone().invert();for(let[m,x,g]of d)m.forEach(p=>{p.noDeck=!0}),ae.joints.push({A:u,B:x,la:g.clone().sub(u.m.position).applyQuaternion(f),lb:Ni[0].c.clone().negate(),belt:!0})}for(let u=0,f=Math.round(30+70*e);u<f;u++){let m=so;so=(so+1)%co,Qn[m*3]=N.p.x+(n()-.5)*2,Qn[m*3+1]=N.p.y,Qn[m*3+2]=N.p.z+(n()-.5)*2,es[m*3]=N.v.x*.5+(n()-.5)*3*(.3+e),es[m*3+1]=n()*2.5*(.3+e),es[m*3+2]=N.v.z*.5+(n()-.5)*3*(.3+e),Ph[m]=1}N.v.set(0,0,0),N.w.set(0,0,0),it.t=0,it.grounded=!0,kt(e<.4?"Rollover \xB7 the rover is wrecked":"Crash \xB7 the rover breaks apart")}var YS=new R,JS=new R,ZS=new R,$S=new R,hf=new R,c0=i=>new R(i*(St.H.x-St.S.x),St.H.y-St.S.y,St.H.z-St.S.z).normalize();function QS(i,e){return e===3||e===4?{k:new R(1,0,0),lo:-1.5,hi:.85,tol:.15}:e===1||e===2?{k:new R(1,0,0),lo:-.5,hi:1.92,tol:.6}:e===8||e===9?{k:c0(e===8?-1:1).clone().cross(new R(0,0,1)).normalize(),lo:-.05,hi:2.5,tol:.35}:null}var En=new gt,Is=new R,ao=new R,cr=new R,l0=new R,lo=new R,xc=new R,Sg=new R,vf=new R;function h0(i,e){let t=i.lim,n=i.A,s=i.B;En.copy(n.m.quaternion).invert().multiply(s.m.quaternion),En.w<0&&(En.x*=-1,En.y*=-1,En.z*=-1,En.w*=-1);let r=2*Math.acos(Math.min(1,En.w)),a=Math.sqrt(Math.max(1e-12,1-En.w*En.w));Is.set(En.x,En.y,En.z).multiplyScalar(r/a);let o=Is.dot(t.k);ao.copy(Is).addScaledVector(t.k,-o);let l=ao.length();cr.copy(t.k).multiplyScalar(o-Math.max(t.lo,Math.min(t.hi,o))),l>t.tol&&cr.addScaledVector(ao,1-t.tol/l);let c=cr.length();if(c<1e-4)return;cr.applyQuaternion(n.m.quaternion);let d=lo.copy(cr).divideScalar(c),h=n.inv*3/(n.I.x+n.I.y+n.I.z),u=s.inv*3/(s.I.x+s.I.y+s.I.z),f=h/(h+u),m=u/(h+u);s.m.quaternion.premultiply(En.setFromAxisAngle(d,-c*m)).normalize(),n.m.quaternion.premultiply(En.setFromAxisAngle(d,c*f)).normalize();let x=l0.copy(s.w).sub(n.w).dot(d);x>0&&(s.w.addScaledVector(d,-x*m),n.w.addScaledVector(d,x*f)),n.rest=s.rest=!1}function e1(i){if(!(ae.t>3))for(let e of ae.brace){let t=e.T;if(t.rest||ae.t>.6&&t.v.lengthSq()<.3&&t.w.lengthSq()<2)continue;let n=t.m.quaternion;Sg.set(0,0,1).applyQuaternion(n),vf.set(1,0,0).applyQuaternion(n);for(let[s,r,a,o]of e.arms){lo.set(0,-1,0).addScaledVector(Sg,.35).addScaledVector(vf,.45*o).normalize();for(let l of[s,r])xc.copy(a).applyQuaternion(l.m.quaternion).cross(lo),l.w.addScaledVector(xc,260*i).addScaledVector(l0.copy(l.w).sub(t.w),-9*i),l.rest=!1}}}var cc=new R,$n=new R,lc=new R,wh=new R,wg=new gt;function t1(){let i=ae.pieces.find(n=>n.main);if(!i||!i.deck)return;let[e,t]=i.deck;wg.copy(i.m.quaternion).invert();for(let n of ae.pieces)if(!(n===i||n.rest||n.noDeck))for(let s of n.pts){if(cc.copy(s).applyQuaternion(n.m.quaternion).add(n.m.position),$n.copy(cc).sub(i.m.position).applyQuaternion(wg),$n.x<=e.x||$n.x>=t.x||$n.y<=e.y||$n.y>=t.y||$n.z<=e.z||$n.z>=t.z){s.clear=!0;continue}if(!s.clear)continue;let r=[$n.x-e.x,t.x-$n.x,$n.y-e.y,t.y-$n.y,$n.z-e.z,t.z-$n.z],a=0;for(let u=1;u<6;u++)r[u]<r[a]&&(a=u);lc.set(a===0?-1:a===1?1:0,a===2?-1:a===3?1:0,a===4?-1:a===5?1:0).applyQuaternion(i.m.quaternion),n.m.position.addScaledVector(lc,Math.min(r[a],.05));let o=$n.copy(cc).sub(n.m.position),l=wh.copy(n.w).cross(o).add(n.v),c=cc.sub(i.m.position),d=l.sub(cc.copy(i.w).cross(c).add(i.v)),h=d.dot(lc);if(h<0){let u=n.inv||1,f=i.inv||1,m=u/(u+f),x=f/(u+f);wh.copy(lc).multiplyScalar(-h*1.05),n.v.addScaledVector(wh,m),i.v.addScaledVector(wh,-x),n.v.addScaledVector(d.addScaledVector(lc,-h),-.3*m),i.rest=!1}}}function n1(i){e1(i);for(let e of ae.joints){e.lim&&h0(e,i);let t=e.A,n=e.B,s=YS.copy(e.la).applyQuaternion(t.m.quaternion),r=JS.copy(e.lb).applyQuaternion(n.m.quaternion),a=ZS.copy(n.m.position).add(r).sub(t.m.position).sub(s),o=$S.copy(n.w).cross(r).add(n.v).sub(hf.copy(t.w).cross(s)).sub(t.v),l=a.multiplyScalar(-1600).addScaledVector(o,-32).multiplyScalar(i);l.lengthSq()>1e-7&&(t.rest=n.rest=!1),n.v.addScaledVector(l,n.inv),t.v.addScaledVector(l,-t.inv);let c=3/(n.I.x+n.I.y+n.I.z),d=3/(t.I.x+t.I.y+t.I.z);n.w.addScaledVector(hf.copy(r).cross(l),n.inv*c*.5),t.w.addScaledVector(hf.copy(s).cross(l),-t.inv*d*.5)}}var Eh=new gt,i1=new R,s1=new R,Eg=new R,r1=new R,Tg=new R;function u0(i,e){if(i.rest)return;let t=i.m.quaternion,n=i.m.position,s=s1.set(0,-ss,0),r=r1.set(0,0,0),a=Math.max(4,i.pts.length),o=9600/a,l=240/a,c=120/a,d=0;if(n.y-i.R<Xe(n.x,n.z)+.5)for(let m of i.pts){let x=Tg.copy(m).applyQuaternion(t),g=x.x+n.x,p=x.y+n.y,y=x.z+n.z,M=Xe(g,y)-p;if(M<=0)continue;d++;let b=gf(g,y),v=Eg.copy(i.w).cross(x).add(i.v),S=v.dot(b),T=Math.max(0,o*Math.min(M,.08)-l*S),_=v.addScaledVector(b,-S),E=_.length(),C=E>1e-5?Math.min(.8*T,E*c)/E:0,P=i1.copy(b).multiplyScalar(T).addScaledVector(_,-C);s.add(P),r.add(x.cross(P))}i.v.addScaledVector(s,e),Eh.copy(t).invert();let h=r.applyQuaternion(Eh),u=Tg.copy(i.w).applyQuaternion(Eh);u.x+=h.x/i.I.x*e,u.y+=h.y/i.I.y*e,u.z+=h.z/i.I.z*e,i.w.copy(u.applyQuaternion(t)),d?(i.w.multiplyScalar(Math.exp(-e*1.2)),i.v.multiplyScalar(Math.exp(-e*.4))):i.airDamp&&i.w.multiplyScalar(Math.exp(-e*i.airDamp)),n.addScaledVector(i.v,e);let f=i.w.length();f>1e-6&&t.premultiply(Eh.setFromAxisAngle(Eg.copy(i.w).divideScalar(f),f*e)).normalize(),i.still=d&&i.v.length()<.06&&f<.08?i.still+e:0,i.still>.6&&(i.rest=!0)}function a1(i){if(ae.on?(ae.t+=i)>4.5&&(ae.on=!1,Ie.visible=!0,os(ae.safe.x,ae.safe.z,ae.safe.yaw),fr=!1,kt("A new rover \xB7 back where you last drove safely"),$.ph==="film"&&$.crash&&T0($.crash)):((ae.safeT+=i)>1&&Sn.y>.85&&it.grounded&&(ae.safeT=0,ae.safe={x:N.p.x,z:N.p.z,yaw:Math.atan2(-Qt.z,Qt.x)}),(ae.roof>3.5||Sn.y<-.2&&ae.topDown)&&($.crash=$.ph==="film"?xi:0,o0(Math.max(ae.roof,N.v.length()))),ae.topDown=!1,ae.roof=0),ae.pieces.length&&(ae.fade+=i)>10){let t=Math.max(0,1-(ae.fade-10)/1.5);hr.forEach(n=>{n.transparent||(n.transparent=!0,n.needsUpdate=!0),n.opacity=t}),t===0&&(ae.pieces.forEach(n=>wt.remove(n.m)),ae.extra.forEach(n=>wt.remove(n)),ae.pieces=[],ae.joints=[],ae.extra=[],ae.brace=[])}let e=Math.min(12,Math.ceil(i*200));for(let t=0;t<e;t++){n1(i/e);for(let n of ae.pieces)u0(n,i/e);t1();for(let n of ae.joints)n.lim&&h0(n)}}var Lh=0;function Nf(){let i=Math.atan2(-Qt.z,Qt.x);os(N.p.x,N.p.z,i),kt("Back on its wheels")}se("btn-recover").addEventListener("click",Nf);Es&&(document.querySelectorAll(".spd button").forEach(i=>{i.innerHTML=["Real","Double","Triple"][i.dataset.v-1]+"<small>"+yh(18*i.dataset.v)+"</small>"}),se("spec-rover").textContent="About 1,540 lb loaded with crew; 10 ft long; four wire-mesh wheels, each with its own motor; front and rear steering",se("fine-rec").textContent="11 mph",se("spec-top").textContent="11 mph, the record Gene Cernan set on Apollo 17 (it was built for about 8 mph on the level). Faster downhill, where gravity does the work");var Uf=()=>document.querySelectorAll(".spd button").forEach(i=>i.classList.toggle("on",+i.dataset.v===yn));document.querySelectorAll(".spd button").forEach(i=>{i.dataset.v==="3"&&(i.hidden=!Cf()),i.addEventListener("click",()=>{ke.on&&+i.dataset.v!==yn&&(ke.on=!1,ke.away=!1,se("clock").textContent="",kt("Speed changed \xB7 time trial over")),t0(+i.dataset.v),_c(),Uf()})});Uf();se("btn-go").addEventListener("click",()=>{se("brief").classList.remove("on"),et.ok&&st.on?f1():(rn=zt.live=!0,je.forEach(i=>{i.visible=!0}))});se("cine-skip").addEventListener("click",()=>{Re.on?zf():Vt.on&&Vt.t<Vt.lines[2][0]&&(Vt.t=Vt.lines[2][0])});var Wh=["menu","settings","gpsheet"],Bh={was:!1},qh=()=>Wh.some(i=>se(i).classList.contains("on"));function Mf(i){qh()||(Bh.was=rn,rn=!1),se(i).classList.add("on")}function po(i=Bh.was){Wh.forEach(e=>se(e).classList.remove("on")),se("gp-vid").pause(),rn=i}function d0(){Re.on&&zf(),Vt.on&&(Vt.on=!1,document.body.classList.remove("briefing"),se("cine-cap").classList.remove("on"),Vt.cap=""),ae.on&&(ae.on=!1,Ie.visible=!0),Ot.on&&yf(),Dt.on&&(Dt.t=99,Vh(je[1],.016)),$.on&&Hf(),$t.on&&$t.s.forEach((i,e)=>{i.on&&(i.t=99,Vh(je[e],.016,i))}),ke.on=!1,ke.save=null,ro.t=0,se("btn-rejoin").classList.remove("on"),se("clock").textContent="",je.forEach(i=>{i.visible=!0}),zt.live=!0,fr=!1}{let i=(n,s)=>{let r=a=>{a.preventDefault(),a.stopPropagation(),s()};n.addEventListener("pointerup",r),n.addEventListener("click",r)},e=0,t=n=>()=>{let s=performance.now();s-e>400&&(e=s,n())};i(se("back"),t(()=>{se("brief").classList.contains("on")?location.href="../objects":qh()?po():Mf("menu")})),i(se("btn-set"),t(()=>{f0(),Wh.forEach(n=>se(n).classList.remove("on")),Mf("settings")}))}se("m-resume").addEventListener("click",()=>po());se("m-trial").addEventListener("click",()=>{d0(),ke.away=!1,os(zt.x,zt.z+22,Math.PI/2),po(!0),se("brief").classList.remove("on"),kt("Drive through the ring to start the clock")});se("m-lander").addEventListener("click",()=>{d0(),os(0,0,Math.atan2(350,82)),po(!0),se("brief").classList.remove("on"),kt("Back beside the lander")});se("m-objects").addEventListener("click",()=>{location.href="../objects"});var ho={known:!1,offerT:0};function Of(){ho.offerT=0,se("btn-gp").classList.remove("on");let i=qh()?Bh.was:rn;Wh.forEach(t=>se(t).classList.remove("on")),Mf("gpsheet"),Bh.was=i;let e=se("gp-vid");e.currentTime=0,e.play().catch(()=>{})}se("m-gp").addEventListener("click",Of);se("btn-gp").addEventListener("click",Of);se("gp-close").addEventListener("click",()=>{se("gp-vid").pause(),po()});var bc=ic();function f0(){Uf(),bc=ic(),document.querySelectorAll(".cam button").forEach(e=>e.classList.toggle("on",+e.dataset.c===ti)),document.querySelectorAll(".det button").forEach(e=>e.classList.toggle("on",e.dataset.q===bc)),se("set-apply").hidden=!0;let i=se("set-rec");i.armed=!1,i.textContent="Reset records",se("set-note").textContent=`Now drawing at ${xh[0].toUpperCase()+xh.slice(1)}. Lower detail runs smoother; higher looks sharper.`}document.querySelectorAll(".cam button").forEach(i=>i.addEventListener("click",()=>{Ff(+i.dataset.c),f0()}));document.querySelectorAll(".det button").forEach(i=>i.addEventListener("click",()=>{bc=i.dataset.q,document.querySelectorAll(".det button").forEach(e=>e.classList.toggle("on",e===i)),se("set-apply").hidden=bc===ic()}));se("set-apply").addEventListener("click",()=>{ug(bc),location.reload()});se("set-done").addEventListener("click",()=>po());se("set-rec").addEventListener("click",()=>{let i=se("set-rec");if(!i.armed){i.armed=!0,i.textContent="Tap again to erase";return}Object.keys(Yt).forEach(e=>{Yt[e]=0}),it.best=0;try{localStorage.removeItem("lrv-records")}catch{}_c(),i.armed=!1,i.textContent="Records erased"});var is=[],ze={on:!1,t:0,end:0,cam:new R,jump:null,offerT:0,save:null},xi=0;function o1(){for(is.push([xi,N.p.x,N.p.y,N.p.z,N.q.x,N.q.y,N.q.z,N.q.w,N.steer,...Rn.map(i=>i.spin)]);is.length&&is[0][0]<xi-40;)is.shift()}function c1(i){if(!(i.t>=1.5||i.d>=12)||!it.start)return;let e=it.start,t=N.p,n=t.x-e.x,s=t.z-e.z,r=n*n+s*s||1,a=oi.find(o=>{if(o.R<1.5)return!1;let l=Math.max(0,Math.min(1,((o.x-e.x)*n+(o.z-e.z)*s)/r));return Math.hypot(e.x+n*l-o.x,e.z+s*l-o.z)<o.R*1.15});a&&(ze.jump={t0:xi-i.t,t1:xi,S:e.clone(),E:t.clone(),c:a,a:i},ze.offerT=6,se("btn-replay").classList.add("on"))}function p0(){let i=ze.jump;if(!i||ze.on||ae.on)return;se("btn-replay").classList.remove("on"),ze.offerT=0,ze.save={run:rn,steer:N.steer,spin:Rn.map(u=>u.spin)},ze.fov=Qe.fov,ze.on=!0,ze.t=i.t0-1.2,ze.end=Math.min(xi,i.t1+1.8),rn=!1,document.body.classList.add("replay");let e=(i.S.x+i.E.x)/2,t=(i.S.z+i.E.z)/2,n=Math.max(1,Math.hypot(i.E.x-i.S.x,i.E.z-i.S.z)),s=(i.E.x-i.S.x)/n,r=(i.E.z-i.S.z)/n,a=-r,o=s;(e-i.c.x)*a+(t-i.c.z)*o<0&&(a=-a,o=-o);let l=Math.max(9,Math.min(30,n*.7+6)),c=e+a*l-s*n*.2,d=t+o*l-r*n*.2;ze.cam.set(c,Xe(c,d)+1.3,d);let h=se("cine-cap");h.textContent=`Replay \xB7 ${i.a.t.toFixed(1)} s in the air \xB7 ${nr(i.a.d,1)} \xB7 ${nr(i.a.peak,1)} high`,h.offsetWidth,h.classList.add("on")}function m0(){ze.on&&(ze.on=!1,document.body.classList.remove("replay"),Qe.fov=ze.fov,Qe.updateProjectionMatrix(),se("cine-cap").classList.remove("on"),N.steer=ze.save.steer,Rn.forEach((i,e)=>{i.spin=ze.save.spin[e]}),rn=ze.save.run,fr=!1,ze.film&&(ze.film=!1,je[1].visible=!0,Ie.position.copy(N.p),Ie.quaternion.copy(N.q),kt("Drive up beside Schmitt and stop to pick him up"),ho.offerT=8,se("btn-gp").classList.add("on")))}function l1(i){if(ze.t+=i*(ze.film?1:.55),ze.t>=ze.end)return m0(),!1;let e=is.findIndex(o=>o[0]>ze.t);e<1&&(e=e<0?is.length-1:1);let t=is[e-1],n=is[e],s=Math.max(0,Math.min(1,(ze.t-t[0])/Math.max(1e-6,n[0]-t[0])));Ie.position.set(t[1]+(n[1]-t[1])*s,t[2]+(n[2]-t[2])*s,t[3]+(n[3]-t[3])*s),Ie.quaternion.set(t[4],t[5],t[6],t[7]).slerp(Za.set(n[4],n[5],n[6],n[7]),s),N.steer=t[8]+(n[8]-t[8])*s,Rn.forEach((o,l)=>{o.spin=t[9+l]+(n[9+l]-t[9+l])*s}),v0(),Qe.position.copy(ze.cam);let r=ze.film?.25:0,a=ze.t;return Qe.lookAt(yt.copy(Ie.position).add(jr.set(r*Math.sin(a*2.3),.3+r*.6*Math.sin(a*3.1+1),r*Math.sin(a*1.7+2)))),Qe.fov=Math.max(14,Math.min(ze.fov,2*Math.atan((ze.film?11:7)/Qe.position.distanceTo(Ie.position))*180/Math.PI)),Qe.updateProjectionMatrix(),ci.position.copy(Ie.position).addScaledVector(Af,120),ci.target.position.copy(Ie.position),!0}se("btn-replay").addEventListener("click",p0);se("btn-board").addEventListener("click",I0);se("btn-jump").addEventListener("pointerdown",i=>{i.preventDefault(),xe.jumpQ=1});se("btn-rejoin").addEventListener("click",VS);se("cine-skip").addEventListener("click",()=>{ze.on&&m0()});var rn=!1,Sf=performance.now(),Qa=new R,eo=new R,fr=!1;function Dh(i){let e=Math.min(.05,(i-Sf)/1e3);if(Sf=i,Vt.on&&WS(e),rn){let s=(Di.w||Di.arrowup?1:0)-(Di.s||Di.arrowdown?1:0),r=(Di.a||Di.arrowleft?1:0)-(Di.d||Di.arrowright?1:0);gi=s||yg.y,rr=-(r||-yg.x),xe.on?(xe.f=gi,xe.s=rr,gi=0,rr=0):BS(e)&&(gi=Ot.th,rr=Ot.st),(Dt.on||$t.on||$.ph==="out"||$.ph==="in")&&(gi=0,rr=0,N.v.multiplyScalar(Math.exp(-e*3))),(Math.abs(gi)>.02||Math.abs(rr)>.02)&&(mc=!1);let a=Math.min(12,Math.ceil(e/(1/240))),o=e/a;if(!ae.on)for(let l=0;l<a;l++)_f(o);Sn.set(0,1,0).applyQuaternion(N.q),Qt.set(1,0,0).applyQuaternion(N.q),a1(e),PS(e),FS(),Math.max(Math.abs(N.p.x-cn.cx),Math.abs(N.p.z-cn.cz))>14&&Yg(N.p.x,N.p.z),Lh=Sn.y<.35?Lh+e:0,se("btn-recover").classList.toggle("on",Lh>1.2),xi+=e,ae.on||o1(),(ze.offerT>0&&(ze.offerT-=e)<=0||ae.on)&&(ze.offerT=0,se("btn-replay").classList.remove("on")),ho.offerT>0&&(ho.offerT-=e)<=0&&se("btn-gp").classList.remove("on"),ro.t>0&&((ro.t-=e)<=0||ke.on)&&(ro.t=0,se("btn-rejoin").classList.remove("on"))}if(ze.on&&l1(e)){Nn.render(wt,Qe),requestAnimationFrame(Dh);return}if(Ie.position.copy(N.p),Ie.quaternion.copy(N.q),v0(),W1(e),Re.on){m1(e),Nn.render(wt,Qe),requestAnimationFrame(Dh);return}Lt.idle+=e,Lt.idle>(ti===2?4:2.5)&&(Lt.yaw*=Math.exp(-e*1.5),Lt.pitch+=(.18-Lt.pitch)*Math.min(1,e*1.5)),Sn.set(0,1,0).applyQuaternion(N.q),Qt.set(1,0,0).applyQuaternion(N.q);let t=ae.on&&ae.pieces.find(s=>s.main);if(je[0]&&!Re.on&&zt.live&&(je[0].visible=ti!==2),t){if(ae.camFor!==ae.id){ae.camFor=ae.id;let c;do c=Math.floor(Math.random()*3);while(c===ae.cam);ae.cam=c,ae.side=Math.random()<.5?1:-1}let s=Fe(0,2.2,ae.t),r=Math.atan2(-Qt.z,Qt.x)+Math.PI,a=t.m.position,o=r+ae.side*Math.PI/2,l=ae.cam===0?yt.set(a.x+Math.cos(o)*(9+3*s),a.y+.45,a.z-Math.sin(o)*(9+3*s)):ae.cam===1?yt.set(a.x+Math.cos(r+.5*ae.side)*(14+4*s),a.y+.9+.6*s,a.z-Math.sin(r+.5*ae.side)*(14+4*s)):yt.set(a.x+Math.cos(r)*(8-s),a.y+2.5+18*s,a.z-Math.sin(r)*(8-s));l.y=Math.max(l.y,Xe(l.x,l.z)+(ae.cam===2?1.5:.35)),Qa.lerp(l,1-Math.exp(-e*3)),eo.lerp(a,1-Math.exp(-e*6)),Qe.position.copy(Qa),Qe.lookAt(eo)}else if(ti===2&&!xe.on){Qe.position.copy(or.set(-.62,.95,-.32).applyQuaternion(N.q).add(N.p));let s=Math.max(-2.3,Math.min(2.3,Lt.yaw)),r=Lt.pitch-.18-.14;jr.set(Math.cos(s)*Math.cos(r),Math.sin(r),-Math.sin(s)*Math.cos(r)).applyQuaternion(N.q),Qe.up.copy(Sn),Qe.lookAt(yt.copy(Qe.position).add(jr)),Qe.up.set(0,1,0)}else{let s=xe.on&&xe.W[0],r=s?TS.set(xe.W[0].x,Xe(xe.W[0].x,xe.W[0].z)+.3,xe.W[0].z):N.p,a=ti===3,o=s?Math.atan2(-Math.cos(xe.face),Math.sin(xe.face)):Math.atan2(-Qt.z,Qt.x),l=o+Math.PI+Lt.yaw,c=(ti===1?16:a?12:7.5)*(s?.7:1),d=ti===1?.35:a?-.2:0,h=yt.set(r.x+Math.cos(l)*Math.cos(Lt.pitch+d)*c,r.y+(a?.2:1.6)+Math.sin(Lt.pitch+d)*c,r.z-Math.sin(l)*Math.cos(Lt.pitch+d)*c);h.y=Math.max(h.y,Xe(h.x,h.z)+(a?.45:1.2)),fr||(Qa.copy(h),eo.copy(r),fr=!0),Qa.lerp(h,1-Math.exp(-e*4)),eo.lerp(or.copy(r).add(jr.set(0,s?.9:.6,0)),1-Math.exp(-e*8)),Qe.position.copy(Qa),Qe.lookAt(eo)}window.__lrv&&window.__lrv.cam&&Qe.position.copy(window.__lrv.cam),window.__lrv&&window.__lrv.look&&Qe.lookAt(window.__lrv.look),ci.position.copy(N.p).addScaledVector(Af,120),ci.target.position.copy(N.p);let n=xe.on&&xe.W[0]?Math.hypot(xe.W[0].vx,xe.W[0].vz)*3.6:Math.abs(N.v.dot(Qt))*3.6;se("speed").textContent=_h(n).toFixed(1),rn&&jS(n,it.grounded&&it.t===0,e),XS(e),xe.on||(se("air").textContent=it.t>.15?`Airborne ${it.t.toFixed(1)} s`:""),Ih>0&&(Ih-=e,Ih<=0&&se("toast").classList.remove("on")),M1(),rn&&(y1(e),j1(e)),Nn.render(wt,Qe),requestAnimationFrame(Dh)}var zi=[];function h1(){Ie.updateMatrixWorld(!0);let i=Ie.matrixWorld.clone().invert(),e=[],t=new R;Ie.traverse(l=>{l.isMesh&&e.push(l)});let n=e.map(l=>{let c=i.clone().multiply(l.matrixWorld),d=l.geometry.attributes.position,h=new Float32Array(d.count*3);for(let u=0;u<d.count;u++)t.fromBufferAttribute(d,u).applyMatrix4(c),h[u*3]=t.x,h[u*3+1]=t.y,h[u*3+2]=t.z;return{m:l,M:c,f:h}}),s=[0,1,2,3].map(()=>({x0:1e9,x1:-1e9,z0:1e9,z1:-1e9,y0:1e9,n:0}));for(let{f:l}of n)for(let c=0;c<l.length;c+=3){let d=l[c],h=l[c+1],u=l[c+2];if(h>-.45||Math.abs(d)<.6||Math.abs(u)<.45)continue;let f=s[(d>0?0:2)+(u>0?0:1)];f.x0=Math.min(f.x0,d),f.x1=Math.max(f.x1,d),f.z0=Math.min(f.z0,u),f.z1=Math.max(f.z1,u),f.y0=Math.min(f.y0,h),f.n++}if(s.some(l=>l.n<100))return;let r=s.map(l=>{let c=(l.x0+l.x1)/2,d=(l.z0+l.z1)/2,h=new Float32Array(21).fill(1e9),u=new Float32Array(21).fill(-1e9),f=[];for(let{f:P}of n)for(let D=0;D<P.length;D+=3){let F=P[D],I=P[D+1],U=P[D+2],B=Math.floor((I-l.y0)*100)-4;Math.abs(U-d)>(l.z1-l.z0)/2+.05||Math.abs(F-c)>.5||(B>=0&&B<21&&(h[B]=Math.min(h[B],F),u[B]=Math.max(u[B],F)),I<l.y0+.12&&f.push(U))}let m=0,x=0,g=0,p=0,y=0,M=0;h.forEach((P,D)=>{if(u[D]<P)return;let F=l.y0+(D+4.5)/100,I=(u[D]-P)/2,U=I*I+F*F;m++,x+=(u[D]+P)/2,g+=F,p+=U,y+=F*F,M+=F*U});let b=(m*M-g*p)/(m*y-g*g),v=x/m,S=b/2,T=Math.sqrt((p-b*g)/m+S*S);f.sort((P,D)=>P-D);let _=f[Math.floor(f.length*.01)]-.015,E=f[Math.floor(f.length*.99)]+.015,C=d>0?.04:-.04;return{c:new R(v,S,(_+E)/2),r:T*1.015,hw:(E-_)/2,z0:_-(_+E)/2+Math.min(0,C),z1:E-(_+E)/2+Math.max(0,C)}});if(r.some(l=>!(l.r>.25&&l.r<.5&&l.hw>.05&&l.hw<.25)))return;let a=(l,c)=>{for(let d=0;d<4;d++){let h=r[d],u=l[c*3]-h.c.x,f=l[c*3+1]-h.c.y,m=l[c*3+2]-h.c.z;if(u*u+f*f<h.r*h.r&&m>h.z0&&m<h.z1)return d}return-1};r.forEach(l=>{let c=new vt,d=new vt;c.position.copy(l.c),c.add(d),Ie.add(c),l.steer=c,l.spin=d});let o=new Ve;for(let{m:l,M:c,f:d}of n){let h=l.geometry,u=h.index?h.index.array:null,f=(u?u.length:h.attributes.position.count)/3,m=(T,_)=>u?u[T*3+_]:T*3+_,x=[[],[],[],[],[]],g=l.material.map,p=g&&g.image,y=h.attributes.uv,M=null;if(p&&p.width&&y)try{let T=document.createElement("canvas");T.width=p.width,T.height=p.height;let _=T.getContext("2d");_.drawImage(p,0,0),M=_.getImageData(0,0,p.width,p.height).data}catch{M=null}let b=(T,_,E)=>{if(!M)return!1;let C=(y.getX(T)+y.getX(_)+y.getX(E))/3,P=(y.getY(T)+y.getY(_)+y.getY(E))/3;g.flipY&&(P=1-P);let D=Math.min(p.width-1,Math.max(0,Math.floor((C-Math.floor(C))*p.width))),F=Math.min(p.height-1,Math.max(0,Math.floor((P-Math.floor(P))*p.height))),I=(F*p.width+D)*4;return M[I]-M[I+2]>60&&M[I]>90};for(let T=0;T<f;T++){let _=m(T,0),E=m(T,1),C=m(T,2),P=a(d,_);x[P>=0&&a(d,E)===P&&a(d,C)===P&&!b(_,E,C)?P:4].push(_,E,C)}if(x[4].length===f*3)continue;o.getNormalMatrix(c);let v=(T,_)=>{let E=new It,C=h.attributes.normal,P=new Float32Array(T.length*3);if(T.forEach((D,F)=>{P[F*3]=d[D*3]-_.x,P[F*3+1]=d[D*3+1]-_.y,P[F*3+2]=d[D*3+2]-_.z}),E.setAttribute("position",new nt(P,3)),C){let D=new Float32Array(T.length*3);T.forEach((F,I)=>{t.fromBufferAttribute(C,F).applyMatrix3(o).normalize(),D[I*3]=t.x,D[I*3+1]=t.y,D[I*3+2]=t.z}),E.setAttribute("normal",new nt(D,3))}for(let D of Object.keys(h.attributes)){if(D==="position"||D==="normal")continue;let F=h.attributes[D],I=F.itemSize,U=new Float32Array(T.length*I);T.forEach((B,W)=>{U[W*I]=F.getX(B),I>1&&(U[W*I+1]=F.getY(B)),I>2&&(U[W*I+2]=F.getZ(B)),I>3&&(U[W*I+3]=F.getW(B))}),E.setAttribute(D,new nt(U,I))}return E},S=(T,_)=>{let E=new Ye(T,l.material);E.castShadow=E.receiveShadow=!0,_.add(E)};S(v(x[4],new R),Ie);for(let T=0;T<4;T++)x[T].length&&S(v(x[T],r[T].c),r[T].spin);l.parent.remove(l)}zi.push(...r)}var et={ok:!1,aft:new vt,fwd:new vt,HA:-.8,HF:.7,HY:.05,HB:-.4,KIT:.05,kit:[]};function Ag(i,e,t,n,s){let r=new R,a=new It,o=new Float32Array(n.length*3);n.forEach((l,c)=>{o[c*3]=e[l*3]-s.x,o[c*3+1]=e[l*3+1]-s.y,o[c*3+2]=e[l*3+2]-s.z}),a.setAttribute("position",new nt(o,3));for(let l of Object.keys(i.attributes)){if(l==="position")continue;let c=i.attributes[l],d=c.itemSize,h=new Float32Array(n.length*d);n.forEach((u,f)=>{if(l==="normal"){r.fromBufferAttribute(c,u).applyMatrix3(t).normalize(),h[f*3]=r.x,h[f*3+1]=r.y,h[f*3+2]=r.z;return}h[f*d]=c.getX(u),d>1&&(h[f*d+1]=c.getY(u)),d>2&&(h[f*d+2]=c.getZ(u)),d>3&&(h[f*d+3]=c.getW(u))}),a.setAttribute(l,new nt(h,d))}return a}function u1(){if(zi.length!==4)return;Ie.updateMatrixWorld(!0);let i=Ie.matrixWorld.clone().invert(),e=new R,t=new Ve,n=[],s=new R;Ie.traverse(o=>{o.isMesh&&!zi.some(l=>{for(let c=o;c;c=c.parent)if(c===l.spin)return!0;return!1})&&n.push(o)}),et.aft.position.set(et.HA,et.HY,0),et.fwd.position.set(et.HF,et.HY,0);let r=new vt;Ie.add(r,et.aft,et.fwd);let a=new Map;for(let o of n){let l=i.clone().multiply(o.matrixWorld),c=o.geometry,d=c.attributes.position,h=c.index?c.index.array:null,u=(h?h.length:d.count)/3;t.getNormalMatrix(l);let f=new Float32Array(d.count*3);for(let x=0;x<d.count;x++)e.fromBufferAttribute(d,x).applyMatrix4(l),f[x*3]=e.x,f[x*3+1]=e.y,f[x*3+2]=e.z;let m=[[],[],[]];for(let x=0;x<u;x++){let g=[0,1,2].map(v=>h?h[x*3+v]:x*3+v),p=(f[g[0]*3]+f[g[1]*3]+f[g[2]*3])/3,y=(f[g[0]*3+1]+f[g[1]*3+1]+f[g[2]*3+1])/3,M=p<et.HA?0:p>et.HF?2:1,b=(f[g[0]*3+2]+f[g[1]*3+2]+f[g[2]*3+2])/3;for(let v of zi)Math.abs(b)>.42&&y>-.9&&y<=et.KIT&&Math.abs(p-v.c.x)<.56&&(M=v.c.x>0?2:0);if(y>et.KIT){let v=M+"|"+Math.floor(p/.45)+"|"+Math.floor(y/.45)+"|"+Math.floor(b/.45);a.has(v)||a.set(v,{sec:M,parts:new Map,n:0,x:0,y:0,z:0});let S=a.get(v);S.parts.has(o)||S.parts.set(o,{f,nm:t.clone(),l:[]}),S.parts.get(o).l.push(...g),S.n++,S.x+=p,S.y+=y,S.z+=b}else m[M].push(...g)}m.forEach((x,g)=>{if(!x.length)return;let p=[et.aft,r,et.fwd][g],y=new Ye(Ag(c,f,t,x,g===1?s:p.position),o.material);y.castShadow=y.receiveShadow=!0,p.add(y)}),o.parent.remove(o)}for(let o of a.values()){let l=new R(o.x/o.n,o.y/o.n,o.z/o.n),c=[et.aft,r,et.fwd][o.sec],d=new vt;d.position.copy(l).sub(o.sec===1?s:c.position),c.add(d);for(let[h,{f:u,nm:f,l:m}]of o.parts){let x=new Ye(Ag(h.geometry,u,f,m,l),h.material);x.castShadow=x.receiveShadow=!0,d.add(x)}et.kit.push({m:d,y:l.y,x:l.x})}et.kit.sort((o,l)=>Math.floor(o.y/.45)-Math.floor(l.y/.45)||o.x-l.x),et.kit.forEach((o,l)=>{o.t=22.6+l*Math.min(.08,4.2/et.kit.length)}),zi.forEach((o,l)=>{(Rn[l].at.x>0?et.fwd:et.aft).attach(o.steer),o.home=o.steer.position.clone()}),et.ok=!0}function g0(i,e,t,n){et.aft.rotation.z=-Math.PI*i,et.fwd.rotation.z=Math.PI*e,zi.forEach((s,r)=>{let a=Rn[r].at.x>0,o=a?n:t,l=Math.sign(s.home.z);s.steer.rotation.x=l*Math.PI/2*o,s.steer.position.set(s.home.x+((a?.4:-.35)-s.home.x)*o,s.home.y+(-.5-s.home.y)*o,s.home.z+(l*.37-s.home.z)*o)})}var Re={on:!1,t:0,R0:3.42,P:new R,d:new R,q:new gt,end:null,capT:"",pts:null},d1=[[.6,5.2,"11 December 1972, Taurus\u2013Littrow. The rover rode to the Moon folded into a package on the side of the lunar module."],[5.4,8.8,"From the ladder, a D-handle releases the package. A tape pulled from the ground tilts it out, hinged at the bottom of its bay."],[9,12.4,"Partway over, the aft chassis swings open on its springs and locks, and the rear wheels spring into place."],[12.6,16.4,"With the rear wheels on the ground, a second tape lets the front down. The rover moves out from the lander as the forward chassis and its wheels unfold."],[16.6,19.8,"On all four wheels at last, it is disconnected from the lander and pulled clear."],[20,22.4,"Its 210 kg weigh no more here than 35 kg on Earth."],[22.4,27.4,"The crew unfolds the seats and console, and fits the antennas, TV camera and radio relay unit."],[27.6,32.6,"With front and rear wheels both steering, it could turn in a circle about 3 m in radius."]],Rg=32.8,As=[27.4,32.4];function f1(){Re.on=!0,Re.t=0,document.body.classList.add("intro"),zt.ring.visible=zt.line.visible=!1,zt.line.material.uniforms.op.value=0,Re.pts||(Re.pts=[],Ie.traverse(h=>{if(!h.isMesh)return;let u=h.geometry.attributes.position,f=Math.min(60,u.count);for(let m=0;m<f;m++)Re.pts.push([h,new R().fromBufferAttribute(u,Math.floor(m*u.count/f))])})),Re.d.set(1,0,1).normalize(),Re.P.set(st.x+Re.d.x*Re.R0,st.y+1.35,st.z+Re.d.z*Re.R0);let i=Math.atan2(Re.d.z,-Re.d.x);Re.q.setFromAxisAngle(new R(0,1,0),i);let e=st.x+Re.d.x*(Re.R0+et.HF+.9),t=st.z+Re.d.z*(Re.R0+et.HF+.9),n=1,s=.6,r=160,a=(h,u,f)=>h<n||h>f-s?0:u*Math.sin(Math.PI*(h-n)/(f-n-s))**2,o=0,l=null,c=9;for(let h=0;h<8;h++){c=n+s+Math.max(2,2*Math.abs(o)/.36);let u=2*o/(c-n-s),f=c/r,m=e,x=t,g=i;l=[[m,x,g,0]];for(let M=1;M<=r;M++){let b=a((M-.5)*f,u,c);g+=b*f/2,m-=Math.cos(g)*f,x+=Math.sin(g)*f,g+=b*f/2,l.push([m,x,g,a(M*f,u,c)])}let y=Math.atan2(-(zt.z-x),zt.x-m)-g;y=Math.atan2(Math.sin(y),Math.cos(y)),o+=y}Re.path=l,Re.L=c;let d=l[r];Re.end={x:d[0],z:d[1],yaw:d[2]},os(e,t,i)}function zf(){Re.on=!1,document.body.classList.remove("intro"),se("cine-cap").classList.remove("on"),zt.ring.visible=zt.live=!0,je.forEach(i=>{i.visible=!0}),g0(0,0,0,0),et.kit.forEach(i=>{i.m.visible=!0,i.m.scale.setScalar(1)}),os(Re.end.x,Re.end.z,Re.end.yaw),Qa.copy(Qe.position),eo.copy(N.p),fr=!0,rn=!0}var uf=new gt,p1=new R(0,0,1),ir=new R,Cg=new R,Th=new R;function m1(i){let e=Re.t+=i,t=(b,v)=>Fe(b,v,e);if(e>=Rg)return zf();let n=(b,v)=>{let S=Math.max(0,Math.min(1,(e-b)/(v-b)));return S<=0?0:1+2.2*Math.pow(S-1,3)+1.2*Math.pow(S-1,2)};g0(1-n(9,10.4),1-n(13.6,15.2),1-n(10,11),1-n(14.8,15.8)),et.kit.forEach(b=>{let v=Math.min(1,(e-b.t)/.22);b.m.visible=v>0,v>0&&b.m.scale.setScalar(1+2.7*Math.pow(v-1,3)+1.7*Math.pow(v-1,2))});let s=90-4*t(4.6,5.3);for(let[b,v,S]of[[6,7.4,18],[8,9.4,20],[10.4,11.8,16],[12.6,16.6,40]])s-=S*t(b,v);let r=t(12.6,16.6);ir.copy(Re.P).addScaledVector(Re.d,.6*t(12.8,16.6)+.3*t(17,19)),ir.y+=(N.p.y+et.HB-Re.P.y)*r;let a=ir.x+Re.d.x*1.75,o=ir.z+Re.d.z*1.75,l=ir.y-Xe(a,o),c=(Math.asin(Math.max(-1,Math.min(1,-l/1.771)))+Math.atan2(.38,1.73))*180/Math.PI;s=Math.max(s,c,0)*Math.PI/180,uf.copy(Re.q).multiply(new gt().setFromAxisAngle(p1,-s));let d=Cg.copy(ir).sub(Th.set(et.HF,et.HB,0).applyQuaternion(uf)),h=t(19,20);if(je.forEach(b=>{b.visible=e>As[0]-.4}),e>As[0]){let b=Math.min(1,(e-As[0])/(As[1]-As[0])),v=Re.L*b*b*b*(b*(6*b-15)+10),S=Re.path,T=S.length-1,_=Math.min(T,v/Re.L*T),E=Math.min(T-1,Math.floor(_)),C=_-E,P=F=>S[E][F]+(S[E+1][F]-S[E][F])*C;os(P(0),P(1),P(2)),N.steer=Math.atan(1.15*P(3));let D=v-(Re.s||0);Re.s=v,Rn.forEach(F=>{F.spin-=D/Ch})}else Re.s=0;Ie.position.copy(d).lerp(N.p,h),Ie.quaternion.copy(uf).slerp(N.q,h),Ie.updateMatrixWorld(!0);let u=1e9;for(let[b,v]of Re.pts)yt.copy(v).applyMatrix4(b.matrixWorld),u=Math.min(u,yt.y-Xe(yt.x,yt.z));u<.02&&(Ie.position.y+=.02-u);let f=ir.set(-Re.d.z,0,Re.d.x),m=Re.P,x=Cg.set(m.x+Re.d.x*13+f.x*6,m.y+.3,m.z+Re.d.z*13+f.z*6),g=Th.set(m.x+Re.d.x*3.5+f.x*6.5,m.y-.2,m.z+Re.d.z*3.5+f.z*6.5),p=t(4,8);Qe.position.copy(x).lerp(g,p);let y=new R(N.p.x+Re.d.x*6-f.x*3,N.p.y+.4,N.p.z+Re.d.z*6-f.z*3);if(Qe.position.lerp(y,t(17,23.5)),e>As[0]-.6){let b=Re.path,v=b[b.length>>1],S=b[b.length-1],T=Math.cos(S[2]),_=-Math.sin(S[2]),E=-_,C=T;(v[0]-st.x)*E+(v[1]-st.z)*C<0&&(E=-E,C=-C);let P=yt.set(v[0]+E*9-T*3,Jt(v[0],v[1])+5,v[1]+C*9-_*3);Qe.position.lerp(P,t(As[0]-.6,As[0]+1.6));let D=ti===1?16:7.5,F=ti===1?.35:0,I=Math.cos(Lt.pitch+F)*D;Qe.position.lerp(yt.set(S[0]-T*I,Xe(S[0],S[1])+.8+1.6+Math.sin(Lt.pitch+F)*D,S[1]-_*I),t(As[1]-1.8,Rg))}Qe.position.y=Math.max(Qe.position.y,Xe(Qe.position.x,Qe.position.z)+.45),Qe.lookAt(ir.copy(m).add(Th.set(0,1-.4*t(4,10),0)).lerp(yt.copy(Ie.position).add(Th.set(0,.4,0)),t(6,12))),ci.position.copy(Ie.position).addScaledVector(Af,120),ci.target.position.copy(Ie.position);let M="";for(let[b,v,S]of d1)e>=b&&e<v&&(M=S);if(M!==Re.capT){Re.capT=M;let b=se("cine-cap");b.classList.remove("on"),M&&(b.textContent=M,b.offsetWidth,b.classList.add("on"))}}var Qr=[{at:()=>[st.x,st.z,8.5],name:"Challenger",sub:"Apollo 17 landing site \xB7 11 December 1972",body:["Gene Cernan and Harrison Schmitt landed here in the lunar module Challenger, less than 200 m from their target, while Ronald Evans circled overhead in the command module America.","They stayed about 75 hours, longer than any other Apollo crew, and spent more than 22 hours outside on three moonwalks. With the rover they covered about 35 km and brought home about 110 kg of rock and soil, more than any other mission.","On the first moonwalk part of a rear fender was knocked off, and the wheels sprayed the crew and the rover with dust. Overnight they made a new one from laminated maps, duct tape and clamps.","It was the last of the Apollo landings."]},{at:()=>[Mt.x,Mt.z,7.5],name:"Tracy\u2019s Rock",sub:"Stop 6 \xB7 the foot of the North Massif",body:["This boulder broke loose high on the North Massif and rolled and bounced about a kilometer down the slope, leaving a trail still visible from orbit, then split into five pieces where it stopped. Put back together it would be about 18 by 10 by 6 m. Gene Cernan named it for his daughter, Tracy.","<b>Troctolite 76535.</b> Among the rock fragments the crew raked from the soil here was a coarse-grained crystalline rock about 4.2 to 4.3 billion years old. It formed slowly, deep in the young Moon\u2019s crust, and was later dug out by impacts.","In 2009 researchers at MIT found that it is weakly magnetized, and that its magnetism dates from when it crystallized. That points to a molten, churning core that gave the young Moon a magnetic field, as Earth\u2019s core does today. A 2016 study supported the result."]},{at:()=>[Oi.x,Oi.z,5],name:"Van Serg crater",sub:"Stop 9 \xB7 the last drive",body:["A crater about 100 m across, blasted through the dark soil that covers the valley floor. The crew came here on the third moonwalk to work out how it formed and to sample the dark material and what lies beneath it.","Its rim is strewn with angular blocks thrown out by the impact, mostly smaller than 30 cm, with a few boulders up to about 2 m across. A piece they broke from a boulder on the rim, sample 79115, turned out to be regolith breccia: loose lunar soil welded into rock by the shock of an impact.","<b>What they found.</b> Harrison Schmitt called it a fresh impact crater with a blocky rim as soon as they arrived. Its shape bears that out: a raised rim of blocks, benches stepping down the inner walls, and a mound of blocks on the floor. Nearly every rock they sampled was the same dark, crumbly breccia, which the geologists read as the valley floor\u2019s own soil, hardened into rock by the impact and thrown out of the crater.","<b>The name.</b> Schmitt named it for Hugh McKinstry (1896\u20131961), a Harvard geology professor who wrote scientific satires under the pen name Nicholas Vanserg."]},{at:()=>[ut.x,ut.z,6],name:"Shorty crater",sub:"Stop 4 \xB7 the second drive \xB7 the orange soil",body:["On the second moonwalk Harrison Schmitt, the only geologist to walk on the Moon, looked down at the rim of this crater and saw orange soil. Shorty is about 110 m across and up to 14 m deep.","Almost all of that soil is tiny beads and broken pieces of orange glass, colored by titanium. They were sprayed out in fire-fountain eruptions about 3.6 billion years ago, buried under a later lava flow, and brought back up by the impact that made the crater. In the core tube the crew drove into the rim, the orange gave way to black beads: the same glass, crystallized as it cooled.","Decades later the beads changed ideas about the Moon itself. In 2008 a team led by Alberto Saal found traces of water in these volcanic glasses, and in 2011 tiny pockets of melt sealed inside crystals in this very soil showed that the Moon\u2019s magma had held about a hundred times more water than earlier studies suggested.","<i>The real Shorty is about 4.3 km west of the lander. It is drawn here at its true size but much closer, so the drive to it is short.</i>"]},{kind:"find",model:"../models/sample-76535.glb",cap:"76535,0 today, about 2 cm across: the largest piece left after samples were cut for study. Drag to turn it, pinch or scroll to zoom. 3D model: NASA Astromaterials 3D.",at:()=>[Mt.x-10,Mt.z+9,2.5],label:"76535 \xB7 troctolite",name:"76535,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 6",body:["A troctolite: a coarse-grained igneous rock made almost entirely of large grains of pale green olivine and white plagioclase feldspar. It weighs about 156 g and came back in a rake sample from the soil at Station 6, the stop at the split boulder, on the third moonwalk.","It crystallized deep in the young Moon\u2019s crust about 4.2 to 4.3 billion years ago, slowly enough to grow its large, interlocking grains, and was later dug out by impacts.","Few rocks have been studied so closely. In 2009 researchers at MIT found it weakly magnetized since it formed, evidence that the young Moon had a magnetic field from a molten core. In 2021, chemical differences still preserved inside its crystals showed it must have cooled within about 20 million years, far faster than the more than 100 million years once thought."]},{kind:"find",model:"../models/sample-79115.glb",cap:"79115,0 today, about 9 cm long. Drag to turn it, pinch or scroll to zoom. 3D model: NASA Astromaterials 3D.",at:()=>[Oi.x+-.65*48,Oi.z+-.76*48,2.5],label:"79115 \xB7 breccia",name:"79115,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 9",body:["Regolith breccia: loose lunar soil and broken rock welded into stone by the shock of an impact. On the third moonwalk the crew broke this 346 g piece off the top of a fractured boulder on the rim of Van Serg crater, hoping it would tell how and when the crater formed. Its partner, 79135, 2.3 kg, came from the bottom of the same boulder.","About 60% of it is a fine matrix of mineral debris and glass. Mixed through it are fragments of highland rock, mare basalt and other basalts, and beads of orange volcanic glass like those at Shorty crater: soil from across the valley, swept up and pressed together."]},{kind:"find",at:()=>[ut.x+Math.cos(2.4)*ut.R*1.05,ut.z+Math.sin(2.4)*ut.R*1.05,2.5],label:"74220 \xB7 orange soil",name:"74220,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 4",body:["The orange soil itself: 1,180 g scooped from the rim of Shorty crater on the second moonwalk. With the samples from the trench Harrison Schmitt dug across the orange zone and the core tube driven beside it, the set comes to about 4.6 kg.","About 99% of it is beads and broken bits of orange glass; the rest is mostly fragments of basalt. Each bead is a droplet of lava sprayed from a fire fountain about 3.6 billion years ago and frozen to glass in flight. The color comes from titanium.","The beads still hold traces of the gases that drove the eruption. In 2008 and 2011 they gave the first strong evidence of water inside the Moon."]}],g1={"Tracy\u2019s Rock":[["img/tracys-rock.jpg","Harrison Schmitt beside the boulder at Station 6, with the front of the rover at left. AS17-146-22294, photographed by Gene Cernan, 13 December 1972. NASA."]],"Van Serg crater":[["img/van-serg.jpg","Harrison Schmitt in the rover at Station 9, Van Serg crater, on the third moonwalk. AS17-134-20454, photographed by Gene Cernan, 13 December 1972. NASA."]],"Shorty crater":[["img/shorty.jpg","Looking into Shorty crater from Station 4, with the orange soil on its rim. AS17-137-20992, 12 December 1972. NASA."]],"76535,0":[["img/76535.jpg","Sample 76535, photographed at NASA\u2019s Manned Spacecraft Center (now Johnson Space Center) in 1973. NASA photo S73-19456."]],"79115,0":[["img/79115.jpg","Sample 79115, photographed at NASA\u2019s Manned Spacecraft Center (now Johnson Space Center) in 1973. NASA photo S73-15396."]],"74220,0":[["img/orange-soil.jpg","The orange soil at Station 4, Shorty crater. The tripod is the gnomon, the crew\u2019s reference for scale, sun angle and color. AS17-137-20990, 12 December 1972, color gently enhanced. NASA."],["img/orange-beads.jpg","Orange glass beads and fragments from the soil, 0.02 to 0.045 mm across, magnified 160 times. NASA photo S73-15171, January 1973."]]};Qr.forEach(i=>{i.imgs=g1[i.name]||[]});var sr=new R,_n={relief:null,trail:(()=>{try{return JSON.parse(localStorage.getItem("lrv-trail"))||[]}catch{return[]}})(),seen:(()=>{try{return new Set(JSON.parse(localStorage.getItem("lrv-found"))||[])}catch{return new Set}})(),t:0,saveT:0,open:!1},x1=()=>[[st.x+22,st.z+30,"Challenger"],[Vr[0].x,Vr[0].z-22,"Station 6"],[Vr[1].x-10,Vr[1].z-20,"Station 8"],[Oi.x,Oi.z-ut.R-8,"Station 9 \xB7 Van Serg"],[ut.x,ut.z-ut.R-12,"Shorty"],[Et,Tt-Ge+70,"North Massif"]],b1=[["Sculptured Hills \u2192",1,.42],["\u2190 South Massif",-1,.96]];function _1(){let e=document.createElement("canvas");e.width=e.height=340;let t=e.getContext("2d"),n=t.createImageData(340,340);for(let s=0;s<340;s++)for(let r=0;r<340;r++){let a=Et-Ge+(r+.5)*2*Ge/340,o=Tt-Ge+(s+.5)*2*Ge/340,l=2*Ge/340,c=Jt(a+l,o)-Jt(a-l,o),d=Jt(a,o+l)-Jt(a,o-l),h=Math.max(16,Math.min(215,108-c/l*150-d/l*38)),u=(s*340+r)*4;n.data[u]=h,n.data[u+1]=h*.98,n.data[u+2]=h*.93,n.data[u+3]=255}return t.putImageData(n,0,0),e}function x0(i,e,t,n,s){let r=Math.min(2,devicePixelRatio||1),a=Math.round(i.clientWidth*r);if(!a)return;i.width!==a&&(i.width=i.height=a);let o=i.getContext("2d"),l=a/n,c=(M,b)=>[(M-e)*l+a/2,(b-t)*l+a/2];_n.relief||(_n.relief=_1()),o.fillStyle="#1a1916",o.fillRect(0,0,a,a);let[d,h]=c(Et-Ge,Tt-Ge);o.drawImage(_n.relief,d,h,2*Ge*l,2*Ge*l),o.lineJoin=o.lineCap="round",o.strokeStyle="rgba(124,199,242,.55)",o.lineWidth=Math.max(1,1.2*r),o.setLineDash([2*r,4*r]),o.beginPath();for(let M=0;M<Kr.length;M+=6){let[b,v]=c(Kr[M],Kr[M+1]);M?o.lineTo(b,v):o.moveTo(b,v)}o.stroke(),o.setLineDash([]),o.strokeStyle="rgba(230,204,133,.9)",o.lineWidth=Math.max(1.5,(s?2:1.6)*r),o.beginPath();let u=!1;for(let M of _n.trail){if(!M){u=!1;continue}let[b,v]=c(M[0],M[1]);u?o.lineTo(b,v):o.moveTo(b,v),u=!0}o.stroke();let f=(s?11:8)*r;o.font=`600 ${f}px Montserrat, sans-serif`,o.textAlign="center";for(let M of Qr)if(M.kind==="find"){let[b,v]=M.at(),[S,T]=c(b,v),_=_n.seen.has(M.name);o.beginPath(),o.arc(S,T,(s?5:3.2)*r,0,6.3),o.strokeStyle="#7CC7F2",o.lineWidth=1.3*r,o.stroke(),_&&(o.fillStyle="#7CC7F2",o.fill()),s&&(o.fillStyle="rgba(201,189,151,.95)",o.fillText(_?M.name.split(",")[0]:"?",S,T+17*r))}if(s||n<600)for(let[M,b,v]of x1()){let[S,T]=c(M,b);o.fillStyle="rgba(0,0,0,.55)",o.fillText(v,S+r,T+r),o.fillStyle="#E6CC85",o.fillText(v,S,T)}if(s)for(let[M,b,v]of b1)o.textAlign=b>0?"right":"left",o.fillStyle="rgba(201,189,151,.8)",o.fillText(M,b>0?a-8*r:8*r,a*v);o.strokeStyle="rgba(230,140,90,.75)",o.lineWidth=Math.max(1,1.3*r),o.setLineDash([5*r,4*r]),o.beginPath();for(let M=0;M<=240;M++){let[b,v]=c(...zS(M/240*2*Math.PI));M?o.lineTo(b,v):o.moveTo(b,v)}o.stroke(),o.setLineDash([]);let[m,x]=c(st.x,st.z);o.fillStyle="#F2E4BE",o.fillRect(m-2.5*r,x-2.5*r,5*r,5*r);let[g,p]=c(N.p.x,N.p.z),y=Math.atan2(-Qt.z,Qt.x);o.save(),o.translate(g,p),o.rotate(-y),o.beginPath(),o.moveTo(7*r,0),o.lineTo(-4.5*r,4*r),o.lineTo(-2.5*r,0),o.lineTo(-4.5*r,-4*r),o.closePath(),o.fillStyle="#E6CC85",o.strokeStyle="#0d0a18",o.lineWidth=1.2*r,o.fill(),o.stroke(),o.restore()}function y1(i){let e=_n.trail[_n.trail.length-1];if(!ae.on&&(!e||Math.hypot(N.p.x-e[0],N.p.z-e[1])>3)&&(e&&Math.hypot(N.p.x-e[0],N.p.z-e[1])>30&&_n.trail.push(null),_n.trail.push([+N.p.x.toFixed(1),+N.p.z.toFixed(1)]),_n.trail.length>6e3&&_n.trail.splice(0,1e3)),(_n.saveT+=i)>5){_n.saveT=0;try{localStorage.setItem("lrv-trail",JSON.stringify(_n.trail))}catch{}}(_n.t+=i)>.2&&(_n.t=0,x0(se("minimap"),N.p.x,N.p.z,260,!1))}var b0=!1;se("minimap").addEventListener("click",()=>{Re.on||ze.on||Vt.on||(b0=rn,rn=!1,se("mapsheet").classList.add("on"),requestAnimationFrame(()=>x0(se("mapbig"),Et,Tt,2*Ge,!0)))});se("mapsheet-close").addEventListener("click",()=>{se("mapsheet").classList.remove("on"),rn=b0});var _0=!1;function y0(i){i.kind==="find"&&!Dt.on&&Gf(i)||kf(i)}function kf(i){se("sc-t").textContent=i.name,se("sc-s").textContent=i.sub;let e=([t,n])=>`<figure><img src="${t}" alt="" loading="lazy" onerror="this.parentNode.remove()"><figcaption>${n}</figcaption></figure>`;if(se("sc-b").innerHTML=(i.imgs[0]?e(i.imgs[0]):"")+i.body.map(t=>`<p>${t}</p>`).join("")+i.imgs.slice(1).map(e).join(""),se("sitecard").classList.toggle("wide",!!i.model),se("sitecard").classList.add("on"),_0=rn,rn=!1,i.model&&v1(i.model,i.cap),i.kind==="find"&&!_n.seen.has(i.name)){_n.seen.add(i.name);try{localStorage.setItem("lrv-found",JSON.stringify([..._n.seen]))}catch{}}}se("sc-close").addEventListener("click",()=>{se("sitecard").classList.remove("on"),rn=_0,Hh.stop&&Hh.stop()});var Hh={stop:null};function v1(i,e){let t=document.createElement("figure");t.className="rock3d";let n=document.createElement("canvas");t.appendChild(n);let s=document.createElement("button");s.className="rock-fs",s.textContent="Full screen",t.appendChild(s);let r=document.createElement("figcaption");r.textContent=e||"",t.appendChild(r),se("sc-b").prepend(t);let a=new Qo({canvas:n,antialias:!0,alpha:!0});a.outputColorSpace=Xt;let o=new Ea,l=new hn(30,1,.001,10);o.add(new Da(16777215,4210752,1.4));let c=new Js(16777215,2.2);c.position.set(.5,.8,.6),o.add(c);let d=new vt;o.add(d);let h=!0,u=.3,f=0,m=1,x=()=>{let b=t.classList.contains("big"),v=b?innerWidth:t.clientWidth||360,S=b?innerHeight:Math.round(Math.min(v*.8,innerHeight*.55));a.setPixelRatio(Math.min(2,devicePixelRatio||1)),a.setSize(v,S),l.aspect=v/S,l.updateProjectionMatrix()};x(),addEventListener("resize",x),s.addEventListener("click",()=>{t.classList.toggle("big"),s.textContent=t.classList.contains("big")?"Close":"Full screen",x()}),new tc().setMeshoptDecoder(Qd).loadAsync(i).then(b=>{let v=b.scene,S=new nn().setFromObject(v),T=.05/S.getSize(new R).length();v.scale.setScalar(T),v.position.copy(S.getCenter(new R)).multiplyScalar(-T),d.add(v)}).catch(()=>t.remove());let g=new Map,p=0;n.addEventListener("pointerdown",b=>{g.set(b.pointerId,[b.clientX,b.clientY]),n.setPointerCapture(b.pointerId),p=0}),n.addEventListener("pointermove",b=>{let v=g.get(b.pointerId);if(v&&(g.size===1&&(f+=(b.clientX-v[0])*.01,u+=(b.clientY-v[1])*.01),g.set(b.pointerId,[b.clientX,b.clientY]),g.size===2)){let[S,T]=[...g.values()],_=Math.hypot(S[0]-T[0],S[1]-T[1]);p&&(m=Math.max(.6,Math.min(4,m*_/p))),p=_}});let y=b=>{g.delete(b.pointerId),p=0};n.addEventListener("pointerup",y),n.addEventListener("pointercancel",y),n.addEventListener("wheel",b=>{b.preventDefault(),m=Math.max(.6,Math.min(4,m*Math.exp(-b.deltaY*.0015)))},{passive:!1});let M=()=>{h&&(g.size||(f+=.006),d.rotation.set(u,f,0),l.position.set(0,0,.09/m),a.render(o,l),requestAnimationFrame(M))};M(),Hh.stop=()=>{h=!1,removeEventListener("resize",x),a.dispose(),Hh.stop=null}}Qr.forEach(i=>{let e=document.createElement("button");e.className=i.kind==="find"?"site find":"site",e.innerHTML=`<i></i>${i.label||i.name}`,e.addEventListener("click",()=>y0(i)),se("sites").appendChild(e),i.el=e});function M1(){Qe.updateMatrixWorld();for(let i of Qr){let[e,t,n]=i.at(),s=Math.hypot(e-Qe.position.x,t-Qe.position.z);sr.set(e,Xe(e,t)+n,t).project(Qe);let r=Math.hypot(sr.x,sr.y*.8),a=i.kind==="find"?150:280,o=sr.z<1&&Math.abs(sr.x)<1.05&&Math.abs(sr.y)<1.05?s<35?1:Fe(a,a*.55,s)*Fe(.5,.28,r):0;if(i.el.style.display=o>.02?"flex":"none",o>.02){let l=(sr.x+1)/2*innerWidth,c=(1-sr.y)/2*innerHeight;i.el.style.left=l.toFixed(1)+"px",i.el.style.top=c.toFixed(1)+"px",i.el.style.opacity=o.toFixed(2);let d=Math.hypot(kh.x-l,kh.y-c+12);i.el.style.setProperty("--k",(1+.6*Fe(130,20,d)).toFixed(3))}}}function v0(){zi.forEach((i,e)=>{i.steer.rotation.y=-N.steer*Rn[e].steer,i.spin.rotation.z=-Rn[e].spin})}var je=[],to=[],Ni=[],S1=[[-.66,.16,-.33],[-.66,.16,.33]],Fh=new R(-.3,.4,0),St={S:new R(.26,.435,-.07),E:new R(.44,.334,-.08),H:new R(.72,.149,-.093)},Bf=i=>i<0?[5,8]:[6,9],w1=i=>{for(let e in i.attributes){let t=i.attributes[e];if(t.array instanceof Float32Array&&!t.normalized)continue;let n=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)n[s*t.itemSize+r]=t.getComponent(s,r);i.setAttribute(e,new nt(n,t.itemSize))}return i};function E1(i){i.updateMatrixWorld(!0);let e=new nn().setFromObject(i),t=1.85/(e.max.y-e.min.y),n=(e.min.x+e.max.x)/2,s=new vt,r=new nn;i.traverse(p=>{p.isMesh&&p.material.name==="base_002"&&r.expandByObject(p)});let a=(r.min.z+r.max.z)/2,o=[.22,1.38],l=[.23,1.43],c=Math.PI/12,d=Math.PI/4,h=.01,u=new R,f=new R;i.traverse(p=>{if(!p.isMesh)return;let y=w1(p.geometry.clone());y.applyMatrix4(p.matrixWorld),y.translate(-n,-e.min.y,-a),y.scale(t,t,t);let M=y.attributes.position,b=y.attributes.normal,v=p.material.name==="base_002",S=/buttons|vents/.test(p.material.name),T=/helm|gold/.test(p.material.name);for(let E=0;E<M.count;E++){u.fromBufferAttribute(M,E),f.fromBufferAttribute(b,E);let C=Math.sign(u.x)||1,P=Math.abs(u.x)-o[0],D=u.y-o[1],F=P*Math.cos(d)-D*Math.sin(d),I=Math.abs(P*Math.sin(d)+D*Math.cos(d)),U=u.y>1.36?1:Fe(.2,.235,Math.abs(u.x)),B=u.y>.86&&!T?Fe(-.04,.07,F)*Fe(.12,.085,I)*Fe(1.62,1.5,u.y)*U:0;if(B>0){let ie=c*B*C,X=Math.cos(ie),J=Math.sin(ie),ee=u.x-C*l[0],ye=u.y-l[1];u.x=C*l[0]+ee*X-ye*J,u.y=l[1]+ee*J+ye*X;let we=f.x*X-f.y*J;f.y=f.x*J+f.y*X,f.x=we}let W=Fe(.98,1.28,u.y)*Fe(1.62,1.5,u.y);if(B>.5?u.x+=C*h*W:T||(u.x*=1+h/o[0]*W,u.z*=1+.03*W),v)u.addScaledVector(f,.01*(1-B)+.006*B);else if(S){let ie=Math.hypot(u.x*.3,u.z)||1;u.x+=u.x*.3/ie*.018,u.z+=u.z/ie*.018}M.setXYZ(E,u.x,u.y,u.z),b.setXYZ(E,f.x,f.y,f.z)}let _=new Ye(y,p.material);s.add(_)});let m=new sn({color:14275784,roughness:.9,name:"pack"}),x=new sn({color:13223356,roughness:.7,name:"rcu"}),g=(p,y,M,b,v,S,T,_,E)=>{let C=new gh(p,y,M,3,b);C.translate(v,S,T);let P=new Ye(C,_);E&&(P.userData.addon=E),s.add(P)};return g(.47,.64,.25,.05,0,1.3,-.315,m,"pack"),g(.44,.2,.21,.05,0,1.73,-.305,m,"pack"),g(.21,.14,.09,.02,0,1.2,.215,x,null),s}function T1(i){let e=i.clone();return e.vertexColors=!0,e.color.multiplyScalar(.93),e}function A1(i){let e=i.clone();return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 sp;
varying vec3 vSp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSp = sp;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSp;`).replace("#include <color_fragment>",`#include <color_fragment>
      { float ax = abs(vSp.x), y = vSp.y, arm = step(1.25, y) * step(.3, ax);
        float red = arm * smoothstep(.025, .015, abs(ax - .4)) + step(y, .9) * step(.5, y) * smoothstep(.025, .015, abs(y - .66)) + step(1.74, y) * smoothstep(.02, .012, ax);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.5, .04, .04), clamp(red, 0., 1.) * .9); }`)},e.customProgramCacheKey=()=>"cmdr-"+i.name,e}var df=null;function R1(){if(df)return df;let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"#000"),t.addColorStop(.47,"#050505"),t.addColorStop(.5,"#9a978f"),t.addColorStop(.62,"#7d7a73"),t.addColorStop(1,"#55534e"),e.fillStyle=t,e.fillRect(0,0,256,128),e.fillStyle="#fff",e.beginPath(),e.arc(70,40,5,0,6.3),e.fill();let n=new Ai(i);n.mapping=Oa,n.colorSpace=Xt;let s=new qa(Nn).fromEquirectangular(n).texture;return n.dispose(),df=new sn({color:14198336,metalness:1,roughness:.14,envMap:s,envMapIntensity:1.25,name:"visor"})}var ar=(()=>{let i=St.S.x,e=St.S.y+.93,t=St.H.x-i,n=St.H.y+.93-e,s=Math.hypot(t,n);return{sx:i,sy:e,ux:t/s,uy:n/s,le:Math.hypot(St.E.x-i,St.E.y-St.S.y)}})(),M0=(i,e)=>{let t=i-ar.sx,n=e-ar.sy;return[t*ar.ux+n*ar.uy,Math.abs(t*ar.uy-n*ar.ux)]},Pg=(i,e)=>{if(i<.24&&e<1.32)return!1;let[t,n]=M0(i,e);return t>-.05&&n<(t>.35?.2:.15)};function C1(i){i.updateMatrixWorld(!0);let e=new nn;i.traverse(m=>{m.isMesh&&!m.userData.addon&&e.expandByObject(m)});let t=1.85/(e.max.y-e.min.y),n=new R,s=new gt,r=new Ti,a=new R,o=.93,l=.5,c=(e.min.z+e.max.z)/2*t,d=(m,x,g)=>m.sub(x).applyQuaternion(s.setFromEuler(r.set(g[0],g[1],g[2]))).add(x),h=[],u=[];i.traverse(m=>{if(!m.isMesh)return;let x=m.geometry.clone();x.applyMatrix4(m.matrixWorld),x.translate(-(e.min.x+e.max.x)/2,-e.min.y,0),x.scale(t,t,t);let g=x.attributes.position,p=x.attributes.normal,y=new Float32Array(g.count*3),M=new Uint8Array(g.count),b=new Uint16Array(g.count*4),v=new Float32Array(g.count*4),S=new Float32Array(g.count*3);for(let C=0;C<g.count;C++){n.fromBufferAttribute(g,C);let P=n.y,D=Math.abs(n.x),F=n.x<0?0:1;S.set([n.x,P,n.z-c],C*3);let I=[];if(m.userData.addon==="pack")I.push([7,1]);else if(Pg(D,P)){let[X,J]=M0(D,P),ee=X>.35?1:Fe(-.03,.05,X)*Fe(.15,.11,J),ye=Fe(ar.le-.04,ar.le+.04,X);I.push([0,1-ee],[5+F,ee*(1-ye)],[8+F,ee*ye])}else{let X=Fe(o-.06,o+.1,P),J=Fe(l-.05,l+.05,P);I.push([0,X],[1+F,(1-X)*J],[3+F,(1-X)*(1-J)])}let U=0;I.forEach(([X,J],ee)=>{b[C*4+ee]=X,v[C*4+ee]=J,J>I[U][1]&&(U=ee)}),M[C]=I[U][0];let B=Math.max(Fe(.66,.06,P),.45*Fe(.62,.48,Math.abs(P-.5))*(n.z>c?1:.3));y.set([1-.42*B,1-.43*B,1-.45*B],C*3);let W=Fe(l+.06,l-.06,P),ie=Fe(o+.07,o-.09,P);M[C]!==7&&!Pg(D,P)&&(a.fromBufferAttribute(p,C),W>0&&(d(n,new R(n.x,l,c),[Math.PI/2*W,0,0]),a.applyQuaternion(s)),ie>0&&(d(n,new R(n.x,o,c),[-Math.PI/2*ie,0,0]),a.applyQuaternion(s)),p.setXYZ(C,a.x,a.y,a.z)),g.setXYZ(C,n.x,n.y-o,n.z)}x.setAttribute("color",new nt(y,3)),x.setAttribute("sp",new nt(S,3)),x.setAttribute("skinIndex",new Sr(b,4)),x.setAttribute("skinWeight",new bt(v,4));let T=m.material.name==="helm_gold"?R1():T1(m.material),_=x.index?x.index.array:Array.from({length:g.count},(C,P)=>P),E=[];for(let C=0;C<_.length;C+=3){let P=(M[_[C]]===7)+(M[_[C+1]]===7)+(M[_[C+2]]===7);(P===0||P===3)&&E.push(_[C],_[C+1],_[C+2])}h.push([x,T,E]),u.push(M)});let f=o-l;to.length=0;for(let m of[-1,1]){let x=m<0?0:1,[g,p]=Bf(m);to.push([0,g,St.S.clone().setX(m*St.S.x)],[g,p,St.E.clone().setX(m*St.E.x)],[0,1+x,new R(m*.1,0,c)],[1+x,3+x,new R(m*.1,0,c+f)])}Ni.length=0;for(let m=0;m<10;m++){let x=new nn,g=!1;h.forEach(([p],y)=>{let M=p.attributes.position,b=u[y];for(let v=0;v<M.count;v++)b[v]===m&&(x.expandByPoint(n.fromBufferAttribute(M,v)),g=!0)}),Ni.push(g?{c:x.getCenter(new R),size:x.getSize(new R)}:{c:new R,size:new R(.12,.12,.12)})}h.forEach(([m])=>m.scale(Tn,Tn,Tn)),Ni.forEach(m=>{m.c.multiplyScalar(Tn),m.size.multiplyScalar(Tn)}),to.forEach(m=>m[2].multiplyScalar(Tn)),St.scaled||(St.S.multiplyScalar(Tn),St.E.multiplyScalar(Tn),St.H.multiplyScalar(Tn),St.scaled=!0);for(let m=0;m<2;m++)ur[m]={hip:to.find(x=>x[0]===0&&x[1]===1+m)[2],knee:to.find(x=>x[0]===1+m&&x[1]===3+m)[2],shin:.5*Tn};return h}var S0=i=>Array.from({length:10},(e,t)=>{let n=Ni[t===7&&!i?0:t].c;return new qe().makeTranslation(-n.x,-n.y,-n.z)});function P1(i){S1.forEach((e,t)=>{let n=new vt;n.position.set(...e),n.rotation.y=Math.PI/2;let s=[];for(let c=0;c<10;c++){if(c===7){s.push(s[0]);continue}let d=new ms;n.add(d),s.push(d)}let r=new Xs(s,S0(!1)),a=i.map(([c,d,h])=>[c,t===0&&/^(base_002|helmet)$/.test(d.name)?A1(d):d,h]);a.forEach(([c,d])=>{let h=new Ws(c,d);h.castShadow=!0,h.frustumCulled=!1,h.bind(r,new qe),n.add(h)});let o=c=>t===0&&c<0?new R(-(Fh.z-e[2]),Fh.y-e[1],Fh.x-e[0]):new R(c*.27,-.02,.16),l=I1[t];n.userData={parts:a,bones:s,grips:[o(-1),o(1)],P:l,st:{lx:0,lz:0,vx:0,vz:0,y:0,vy:0,v:null,hands:[o(-1),o(1)],up:0,yaw:0,vyaw:0,look:0,lookT:1+t*2,fx:0,fz:0,t:t*7}},n.visible=!1,Ie.add(n),je.push(n),as(n)})}var Tn=.92,ff={t:0},ur=[],I1=[{K:68,C:5.2,kg:.22,ks:1700,tau:.05,fid:.035,look:.12,ph:.3,bal:.55,glance:.55},{K:50,C:3.6,kg:.36,ks:1300,tau:.14,fid:.055,look:.5,ph:2.1,bal:1.05,glance:.35}],Li={rolled:!1,on:!1,t:0},wf=new R(0,1,0),uo=new R,Nh=new R,Ef=new R,w0=new R,E0=new R,no=new R,L1=new gt,Gr=new gt,D1=new gt,F1=new R,N1=new R,U1=new R,O1=new R;function Ja(i,e,t,n,s){i[e].quaternion.copy(t),i[e].position.copy(Ni[e].c).sub(n).applyQuaternion(t).add(s)}function as(i){let{bones:e,st:t}=i.userData,n=F1.set(0,t.y,0),s=L1.setFromUnitVectors(wf,Nh.set(t.lx,1,t.lz).normalize()).multiply(Gr.setFromAxisAngle(wf,t.yaw));if(Ja(e,0,s,uo.set(0,0,0),n),t.legs)for(let r=0;r<2;r++){let[a,o]=t.legs[r],l=ur[r],c=En.setFromAxisAngle(Is.set(1,0,0),a);Ja(e,1+r,c,l.hip,ao.copy(l.hip).add(n));let d=cr.copy(l.knee).sub(l.hip).applyQuaternion(c).add(l.hip).add(n);Ja(e,3+r,Gr.setFromAxisAngle(Is.set(1,0,0),a+o),l.knee,d)}else for(let r of[1,2,3,4])Ja(e,r,D1,uo.set(0,0,0),n);for(let r of[-1,1]){let[a,o]=Bf(r),l=Ef.copy(St.S).setX(r*St.S.x),c=w0.copy(St.E).setX(r*St.E.x),d=E0.copy(St.H).setX(r*St.H.x),h=l.distanceTo(c),u=c.distanceTo(d),f=N1.copy(l).applyQuaternion(s).add(n),m=O1.copy(t.hands[r<0?0:1]).sub(f),x=Math.max(Math.abs(h-u)+.01,Math.min(h+u-.002,m.length()));m.normalize();let g=(h*h-u*u+x*x)/(2*x),p=Math.sqrt(Math.max(0,h*h-g*g)),y=no.set(r*(.7+.3*t.up),-.8+1*t.up,-.6+.4*t.up);y.addScaledVector(m,-y.dot(m)).normalize();let M=U1.copy(f).addScaledVector(m,g).addScaledVector(y,p),b=m.multiplyScalar(x).add(f),v=new gt().setFromUnitVectors(Nh.copy(c).sub(l).normalize(),no.copy(M).sub(f).normalize());t.up>.01&&v.premultiply(Gr.setFromAxisAngle(no.copy(M).sub(f).normalize(),r*Math.PI/4*t.up));let S=new gt().setFromUnitVectors(Nh.copy(d).sub(c).normalize().applyQuaternion(v),no.copy(b).sub(M).normalize()).multiply(v);t.up>.01&&S.premultiply(Gr.setFromAxisAngle(no.copy(b).sub(M).normalize(),r*Math.PI/4*t.up)),Ja(e,a,v,l,f),Ja(e,o,S,c,M),(t.hand||(t.hand=[new R,new R]))[r<0?0:1].copy(b)}}var $={on:!1,ph:"",t:0,x:0,z:0,face:0,tx:0,tz:0,t0:0,land:-1,crash:0,dodge:null,told:!1,go:!1,W:null},Wr=new R,Yr=new R;function Jr(i){let e=1e9;for(let t=0;t<2;t++){let n=En.setFromAxisAngle(Is.set(1,0,0),i[t][0]),s=cr.copy(ur[t].knee).sub(ur[t].hip).applyQuaternion(n);e=Math.min(e,s.add(ao.set(0,-ur[t].shin,0).applyQuaternion(Gr.setFromAxisAngle(Is.set(1,0,0),i[t][0]+i[t][1]))).y)}return e}function Ig(i,e,t=!1){let n=je[1];if($.go=t,pc(t?[i,e]:null),$.on){$.ph!=="out"&&$.ph!=="in"&&(se("filmcd").classList.remove("on"),$.tx=i,$.tz=e,$.ph="walk",$.t=0);return}if(!n||!n.visible||Dt.on||$t.on||ae.on||ze.on||xe.on){pc(null);return}if(Math.hypot(N.v.x,N.v.z)>1.5){pc(null),kt("Slow down first: Schmitt climbs out of a stopped rover");return}Object.assign($,{on:!0,ph:"out",t:0,tx:i,tz:e,land:-1,crash:0,dodge:null,W:null}),pt.mode="",t||(ho.known=!0)}function Hf(){se("filmcd").classList.remove("on"),pc(null);let i=je[1],e=i.userData.st,t=i.userData.grips;i.parent!==Ie&&Ie.add(i),$.on=!1,$.ph="",i.position.copy(Zr),i.rotation.set(0,Math.PI/2,0),e.legs=null,e.lz=0,e.up=0,e.v=null,e.hands[0].copy(t[0]),e.hands[1].copy(t[1]),i.visible=!0,as(i)}function z1(i,e,t){let n=is.filter(c=>c[0]>=i&&c[0]<=e);if(e-i<=15||n.length<3)return[Math.max(i,e-15),e];let s=n.map((c,d)=>{let h=n[Math.max(0,d-1)],u=Math.max(.001,c[0]-h[0]),f=Math.hypot(c[1]-h[1],c[3]-h[3])/u,m=Math.max(0,c[2]-Xe(c[1],c[3])-.85),x=Math.min(1,Math.abs(c[4]*h[4]+c[5]*h[5]+c[6]*h[6]+c[7]*h[7])),g=2*Math.acos(x)/u,p=Math.max(0,1-Math.hypot(c[1]-$.x,c[3]-$.z)/25);return(Math.min(f,15)/5+3*m+Math.min(g,4)*.8+p*.8+(t&&Math.abs(c[0]-t)<2?6:0))*u}),r=-1,a=0,o=0,l=0;for(let c=0;c<n.length;c++){for(;l<n.length&&n[l][0]<n[c][0]+15;)o+=s[l++];o>r&&(r=o,a=c),o-=s[c]}return[n[a][0],Math.min(e,n[a][0]+15)]}function T0(i=xi){se("filmcd").classList.remove("on");let[e,t]=z1($.t0,i,$.crash);if($.ph="wait",$.t=0,t-e<1.5||ze.on||is.length<2)return;ze.save={run:rn,steer:N.steer,spin:Rn.map(s=>s.spin)},ze.fov=Qe.fov,ze.on=ze.film=!0,ze.t=e,ze.end=Math.min(t+.4,xi),rn=!1,document.body.classList.add("replay"),se("btn-replay").classList.remove("on"),ze.offerT=0,ze.cam.set($.x,Xe($.x,$.z)+1.4,$.z),je[1].visible=!1;let n=se("cine-cap");n.textContent="Schmitt\u2019s film",n.offsetWidth,n.classList.add("on")}function A0(i,e){let t=i.userData.st,n=Tn,s=$.t+=e,r=i.userData.grips;t.yaw=0,t.up=0,t.lx=0,t.y=0,t.v=null;let a=v=>uo.set(v?.31:-.31,-.22,.13).multiplyScalar(n);if($.ph==="out"||$.ph==="in"){let v=$.ph==="out",S=v?Fe(0,1.1,s):1-Fe(0,1.1,s),T=[[1.45*S,-1.35*S],[1.45*S,-1.35*S]],_=Wr.copy(Zr).lerp($r,v?Fe(.2,1.1,s):1-Fe(0,.9,s)),E=Ie.localToWorld(lo.set(_.x,0,_.z)),C=Ie.worldToLocal(xc.set(E.x,Xe(E.x,E.z),E.z)).y;t.legs=T,t.lz=0,i.position.set(_.x,Zr.y+(C-Jr(T)-Zr.y)*S,_.z),i.rotation.set(0,Math.PI/2*(1-S),0);for(let P=0;P<2;P++)t.hands[P].copy(r[P]).lerp(a(P),S);if(as(i),s>=1.1){if(!v){Hf();return}wt.attach(i),$.x=i.position.x,$.z=i.position.z,Yr.set(0,0,1).applyQuaternion(i.quaternion),$.face=Math.atan2(Yr.x,Yr.z),$.ph="walk",$.t=0}return}let o=[[1.45,-1.35],[1.45,-1.35]],l=0,c=0,d=$.face,h=0,u=N.p.x-$.x,f=N.p.z-$.z,m=Math.hypot(u,f),x=N.v.x,g=N.v.z,p=x*x+g*g;if(!$.dodge&&$.ph!=="board"&&!ae.on&&p>1&&m<18){let v=-(u*x+f*g)/p,S=u+x*v,T=f+g*v;if(v>0&&v<2&&Math.hypot(S,T)<2.6){let _=Math.sqrt(p),E=-g/_,C=x/_;-S*E-T*C<0&&(E=-E,C=-C);let P=Math.max(1.6,3-Math.hypot(S,T));$.dodge={t:0,x0:$.x,z0:$.z,dx:E*P,dz:C*P},$.W=null,$.told||($.told=!0,kt("Schmitt jumps clear!"))}}let y=(v,S,T)=>{let _=$.W||($.W=R0($.x,$.z));_.x=$.x,_.z=$.z;let E=v-$.x,C=S-$.z,P=Math.hypot(E,C),D=P<.3?0:Math.min(T,Math.max(.5,(P-.2)*.9/Math.sqrt(fo())));return C0(_,e,E,C,D,Math.atan2(E,C)-$.face,"lope"),$.x=_.x,$.z=_.z,o=_.legs,l=_.hy-Xe(_.x,_.z)+Jr(_.legs),c=_.lean,P>.3&&(d=Math.atan2(E,C)),$.armSw=_.sw,_.air||Math.hypot(_.vx,_.vz)>.25?Math.max(P,.31):P};if($.dodge){let v=$.dodge,S=v.t+=e,T=Math.min(1,Math.max(0,(S-.22)/.72)),_=Math.min(1,Math.max(0,(S-1.12)/.5)),E=.66*Fe(0,1,T)+.34*Fe(0,1,_);$.x=v.x0+v.dx*E,$.z=v.z0+v.dz*E;let C=T>0&&T<1||_>0&&_<1;l=.36*Math.sin(Math.PI*T)*(T<1?1:0)+.14*Math.sin(Math.PI*_)*(_>0&&_<1?1:0);let P=C?.12:.5*(Fe(0,.2,S)*(1-Fe(.18,.24,S))+Fe(.92,.98,S)*(1-Fe(1.04,1.14,S))+Fe(1.6,1.64,S)*(1-Fe(1.75,1.95,S)));o=[[1.45-P*.55,-1.35+P*1.1],[1.4-P*.55,-1.3+P*1.1]],c=.08+.12*P;let D=$.face,F=v.dx*Math.cos(D)-v.dz*Math.sin(D);v.lx=Math.sign(F)*.2*Fe(.1,.3,S)*(1-Fe(1.6,1.95,S)),v.arms=Fe(0,.2,S)*(1-Fe(1.65,1.95,S)),d=Math.atan2(u,f),S>1.95&&($.dodge=null)}else if($.ph==="walk")y($.tx,$.tz,($.go?1.8:1.5)*fo())<.3&&($.go?($.ph="wait",$.t=0,pc(null),kt("Schmitt is there \xB7 stop the rover beside him to pick him up")):($.ph="film",$.t=0,$.t0=xi,$.land=-1,$.crash=0,kt("Schmitt is filming for 30 s \xB7 show him something good")));else if($.ph==="film"){d=Math.atan2(u,f),h=Fe(0,.6,s);let v=Math.max(0,30-s);se("filmcd").classList.add("on"),se("filmcd").lastChild.textContent=`REC \xB7 ${Math.ceil(v)} s`,!ae.on&&(s>30||m>250)&&T0()}else if($.ph==="wait")d=Math.atan2(u,f),m<7&&Math.sqrt(p)<.8&&!ae.on&&($.ph="board",$.t=0);else if($.ph==="board"){Ie.updateMatrixWorld(!0);let v=Ie.localToWorld(Wr.copy($r));if(Math.sqrt(p)>1.5)$.ph="wait";else if(y(v.x,v.z,1.6)<.35){Ie.attach(i),i.position.copy($r),i.rotation.set(0,0,0),$.ph="in",$.t=0,A0(i,0);return}}let M=$.dodge?4.5:3,b=d-$.face;b-=2*Math.PI*Math.round(b/(2*Math.PI)),$.face+=Math.max(-M*e,Math.min(M*e,b)),t.legs=o,t.lz=c,t.lx=$.dodge?$.dodge.lx:0,i.rotation.set(0,$.face,0),i.position.set($.x,Xe($.x,$.z)-Jr(o)+l,$.z),$.W&&($.ph==="walk"||$.ph==="board")&&!$.dodge&&P0($.W,t,n);for(let v=0;v<2;v++)$.W&&($.ph==="walk"||$.ph==="board")&&!$.dodge||t.hands[v].copy(a(v)),h&&t.hands[v].lerp(Wr.set(v?.07:-.07,.36,.25).multiplyScalar(n),h);if($.dodge)for(let v=0;v<2;v++)t.hands[v].lerp(Wr.set(v?.44:-.44,.1,.12).multiplyScalar(n),$.dodge.arms);as(i)}var pf=.24,ei=[1.45,-1.35],fo=()=>Pf/5;function R0(i,e){return{x:i,z:e,y:Xe(i,e),hy:0,vx:0,vz:0,vy:0,air:!1,st:1,ta:0,tf:0,imp:0,lead:0,legs:[ei.slice(),ei.slice()],lean:.05,sw:0,ho:0,hv:0,ht:Math.random()*9,jump:0,landed:null,x0:i,z0:e,y0:0,peak:0,gait:"lope"}}function C0(i,e,t,n,s,r,a){let o=Math.hypot(t,n),l=o>1e-6?t/o:0,c=o>1e-6?n/o:0;if(i.landed=null,i.air){i.vy-=ss*e,i.x+=i.vx*e,i.z+=i.vz*e,i.y+=i.vy*e,i.ta+=e,i.peak=Math.max(i.peak,i.y);let m=Xe(i.x,i.z);i.y<=m&&i.vy<0&&(i.landed={t:i.ta,d:Math.hypot(i.x-i.x0,i.z-i.z0),h:i.peak-i.y0,jump:i.jumped},i.air=!1,i.st=0,i.imp=-i.vy,i.hv-=.25*Math.min(4,i.imp),i.y=m,i.vy=0)}else{i.st+=e,i.x+=i.vx*e,i.z+=i.vz*e,i.y=Xe(i.x,i.z);let m=Math.hypot(i.vx,i.vz),x=Math.abs(r)>.6&&m<.5;if(!i.jump&&(s<.05&&m<.35||x&&s>0&&i.st<.5)){let g=Math.exp(-e*7);i.vx*=g,i.vz*=g}else if(i.st>=pf||i.jump){let g=Math.hypot(i.vx,i.vz),y=s>g+.05?Math.min(.75*fo(),.3+.35*g):.75*fo(),M=l*s-i.vx,b=c*s-i.vz,v=Math.hypot(M,b);v>y&&(M*=y/v,b*=y/v),i.vx+=M,i.vz+=b;let S=Math.hypot(i.vx,i.vz),T=a==="kanga"?.45+.2*S:.25+.2*S;i.jumped=!!i.jump,i.jump&&(T=2*i.jump/ss,i.jump=0,a="kanga"),i.gait=a,i.tf=T,i.vy=ss*T/2,i.hv-=.12+.1*i.vy,i.air=!0,i.ta=0,i.x0=i.x,i.z0=i.z,i.y0=i.y,i.peak=i.y,a==="lope"&&(i.lead^=1)}}let d=Math.hypot(i.vx,i.vz),h=Math.min(1,d/1.6),u=i.legs;if(i.air){let m=Math.min(1,i.ta/Math.max(.2,i.tf)),x=Math.sin(Math.PI*Math.min(1,m*1.15))*(.45+.55*h);if(i.gait==="kanga"){let g=.25+.35*Math.sin(Math.PI*m);u[0][0]=u[1][0]=ei[0]-.25*g,u[0][1]=u[1][1]=ei[1]+.55*g}else{let g=i.gait==="skip"?0:i.lead;u[g][0]=ei[0]-.42*x,u[g][1]=ei[1]+.3*x,u[1-g][0]=ei[0]+.3*x,u[1-g][1]=ei[1]+.62*x}i.sw=(i.gait==="kanga"?0:i.lead?1:-1)*x}else{let m=Math.min(1,i.st/pf),x=Math.min(.6,.12+i.imp*.45)*Math.sin(Math.PI*Math.min(1,m))*(i.st<pf*1.5?1:0),g=i.gait==="skip"?0:i.lead;for(let p=0;p<2;p++)u[p][0]=ei[0]-x*.55-(p===g?.1*h:-.06*h),u[p][1]=ei[1]+x*1.1;i.sw*=Math.exp(-e*6)}i.lean=.06+.07*Math.min(2,d)+(i.air?0:.05*h);{let m=Math.ceil(e/.01),x=e/m;for(let g=0;g<m;g++)i.hv+=x*(-70*i.ho-5*i.hv),i.ho+=x*i.hv;i.ho=Math.max(-.12,Math.min(.1,i.ho)),i.ht+=e}let f=Xe(i.x,i.z);return i.hy=i.air?Math.max(i.y-Jr([ei,ei]),f-Jr(u)):f-Jr(u),i}function P0(i,e,t){let n=Math.hypot(i.vx,i.vz),s=Math.min(1,n/1.8),r=i.air&&i.gait==="kanga",a=i.air?Math.min(1,i.ta/Math.max(.2,i.tf)):0;for(let o=0;o<2;o++){let l=o?1:-1,c=-l*i.sw*(.08+.05*s),d=.008*Math.sin(i.ht*(1.3+.4*o)+o*2),h=r?.14*Math.sin(Math.PI*a):0;e.hands[o].set(l*(.29+.03*s),-.2+.08*s+i.ho+h+d,.15+.08*s+c+.5*h).multiplyScalar(t)}}var qr=null;function pc(i){if(!qr){let e=new vt,t=new Ye(new _s(.008,.008,.7,6),new sn({color:13157564,roughness:.5,metalness:.5}));t.position.y=.35;let n=new Ye(new qi(.16,.1),new kn({color:16757575,side:Dn}));n.position.set(.08,.64,0);let s=new Ye(new Pa(.35,.42,32),new kn({color:16757575,transparent:!0,opacity:.6,side:Dn,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.03,e.add(t,n,s),e.userData.ring=s,e.visible=!1,wt.add(e),qr=e}qr.visible=!!i,i&&qr.position.set(i[0],Xe(i[0],i[1]),i[1])}function k1(i){if(!qr||!qr.visible)return;let e=qr.userData.ring,t=xi*.9%1;e.scale.setScalar(.6+1.2*t),e.material.opacity=.7*(1-t)}var xe={on:!1,ph:"",t:0,face:0,sface:0,W:[null,null],f:0,s:0,told:!1,hopShow:0},Xr=[{seat:null,out:null,faceOut:Math.PI},{seat:null,out:null,faceOut:0}];function B1(){if(!(xe.on||$.on||Dt.on||$t.on||ae.on||ze.on||!je[0]||!je[1]||!je[1].visible)){if(Math.hypot(N.v.x,N.v.z)>1.2){kt("Stop the rover first");return}Xr[0].seat=N0,Xr[0].out=Vf,Xr[1].seat=Zr,Xr[1].out=$r,Object.assign(xe,{on:!0,ph:"out",t:0,W:[null,null],told:!1}),pt.mode="",Xh(),document.body.classList.add("foot"),ti===2&&Ff(0),kt("On foot \xB7 W/S or the stick to go, A/D to turn, Space to jump")}}function I0(){xe.on&&xe.ph==="walk"&&(xe.ph="home",kt("Back to the rover"))}function H1(i,e,t,n){let s=Xr[e],r=i.userData.st,a=i.userData.grips,o=Tn,l=[ei.map(u=>u*t),ei.map(u=>u*t)],c=Wr.copy(s.seat).lerp(s.out,n),d=Ie.localToWorld(lo.set(c.x,0,c.z)),h=Ie.worldToLocal(xc.set(d.x,Xe(d.x,d.z),d.z)).y;Object.assign(r,{legs:l,lz:0,lx:0,yaw:0,y:0,up:0,v:null}),i.position.set(c.x,s.seat.y+(h-Jr(l)-s.seat.y)*t,c.z),i.rotation.set(0,Math.PI/2+(s.faceOut-Math.PI/2)*t,0);for(let u=0;u<2;u++)r.hands[u].copy(a[u]).lerp(uo.set(u?.31:-.31,-.22,.13).multiplyScalar(o),t);as(i)}function L0(i){let e=xe.t+=i,t=Tn;if(xe.ph==="out"||xe.ph==="in"){let u=xe.ph==="out";if(je.forEach((f,m)=>{let x=e-(m?.35:0),g=u?Fe(0,1.1,x):1-Fe(0,1.1,x),p=u?Fe(.2,1.1,x):1-Fe(0,.9,x);H1(f,m,g,p)}),e<1.45)return;u?(xe.W=je.map((f,m)=>{wt.attach(f);let x=R0(f.position.x,f.position.z);Yr.set(0,0,1).applyQuaternion(f.quaternion);let g=Math.atan2(Yr.x,Yr.z);return m?xe.sface=g:xe.face=g,x}),xe.ph="walk",xe.t=0):(je.forEach((f,m)=>{let x=f.userData.st,g=f.userData.grips;f.position.copy(Xr[m].seat),f.rotation.set(0,Math.PI/2,0),x.legs=null,x.lz=0,x.lx=0,x.v=null,x.hands[0].copy(g[0]),x.hands[1].copy(g[1]),as(f)}),xe.on=!1,xe.ph="",document.body.classList.remove("foot"),se("air").textContent="");return}let[n,s]=xe.W,r=u=>u-2*Math.PI*Math.round(u/(2*Math.PI)),a=(u,f,m,x)=>{let g=Math.hypot(f,m);return g<.001?x:(Xe(u.x+f/g,u.z+m/g)-Xe(u.x-f/g,u.z-m/g))/2<-.14?"kanga":x},o,l,c,d;if(xe.ph==="walk"){let u=fo();xe.face+=-xe.s*1.5*Math.sqrt(u)*i;let f=Math.sin(xe.face),m=Math.cos(xe.face),x=xe.f>0?xe.f*2.2*u:0;xe.f<-.2&&(f=-f,m=-m,x=.4*u*-xe.f),$a(n.x+f*3,n.z+m*3)<6?(x=0,xe.told||(xe.told=!0,kt("Mission Control \xB7 That\u2019s the edge of the mission area. Head back toward the LM."))):xe.told=!1,o=[f,m,x,0],c=a(n,f,m,"skip");let g=Math.sin(xe.face),p=Math.cos(xe.face),y=n.x-p*2.2-g*1,M=n.z+g*2.2-p*1,b=y-s.x,v=M-s.z,S=Math.hypot(b,v),T=.9+.2*Math.hypot(n.vx,n.vz),_=n.vx+b/T,E=n.vz+v/T,C=Math.hypot(_,E),P=2.8*u;C>P&&(_*=P/C,E*=P/C),l=[_,E,S<.5&&Math.hypot(n.vx,n.vz)<.3?0:Math.hypot(_,E),0],d=a(s,_,E,"lope"),(Di[" "]||xe.jumpQ)&&!n.air&&n.st>.15&&(n.jump=1.15*u,xe.jumpQ=0),xe.jumpQ=0}else{Ie.updateMatrixWorld(!0);let u=Ie.localToWorld(Wr.copy(Vf)).clone(),f=Ie.localToWorld(Wr.copy($r)).clone(),m=Math.hypot(u.x-n.x,u.z-n.z),x=Math.hypot(f.x-s.x,f.z-s.z),g=fo(),p=M=>M<.3?0:Math.min(1.8*g,Math.max(.5,(M-.2)*.9/Math.sqrt(g)));o=[u.x-n.x,u.z-n.z,p(m),0],l=[f.x-s.x,f.z-s.z,p(x),0],c="lope",d="lope";let y=M=>!M.air&&Math.hypot(M.vx,M.vz)<.25;if(m<.35&&x<.35&&y(n)&&y(s)){je.forEach((M,b)=>{Ie.attach(M),M.position.copy(Xr[b].out)}),xe.ph="in",xe.t=0,L0(0);return}}let h=[xe.face,xe.sface];if([[n,o,c],[s,l,d]].forEach(([u,f,m],x)=>{let g=je[x],p=g.userData.st,y=Math.atan2(f[0],f[1]);if(C0(u,i,f[0],f[1],f[2],f[2]>0?r(y-h[x]):0,m),x===1||xe.ph==="home"){let M=f[2]>0||Math.hypot(u.vx,u.vz)>.3?y:xe.face,b=r(M-h[x]);h[x]+=Math.max(-3*i,Math.min(3*i,b))}p.legs=u.legs,p.lz=u.lean,p.lx=0,p.yaw=0,p.y=0,p.up=0,p.v=null,g.rotation.set(0,h[x],0),g.position.set(u.x,u.hy,u.z),P0(u,p,t),as(g)}),xe.face=h[0],xe.sface=h[1],n.landed&&n.landed.t>.25){let u=n.landed;se("air").textContent=`${u.jump?"Jump":"Hop"} ${u.t.toFixed(2)} s \xB7 ${nr(u.d,1)} \xB7 ${Math.round(u.h*100)} cm up`,xe.hopShow=2.5}else xe.hopShow>0&&(xe.hopShow-=i)<=0&&(se("air").textContent="")}var wn={x:0,z:0,hit:!1,timer:0,at:null};function V1(i,e){let t=new Bo;t.setFromCamera(new We(i/innerWidth*2-1,1-e/innerHeight*2),Qe);let n=t.ray.origin,s=t.ray.direction,r=0;for(let a=.5;a<400;a*=1.04){let o=n.x+s.x*a,l=n.z+s.z*a;if(n.y+s.y*a<Xe(o,l)){for(let c=0;c<12;c++){let d=(r+a)/2;n.y+s.y*d<Xe(n.x+s.x*d,n.z+s.z*d)?a=d:r=d}return[n.x+s.x*a,n.z+s.z*a]}r=a}return null}function D0(i,e){if(!rn||Re.on||Vt.on||ze.on||qh())return;let t=V1(i,e),n,s;if(!t){let f=Qe.getWorldDirection(Yr);t=[N.p.x+f.x*15,N.p.z+f.z*15]}n=t[0]-N.p.x,s=t[1]-N.p.z;let r=Math.hypot(n,s),a=t.slice(),o=r>150?150/r:1,l=[N.p.x+n*o,N.p.z+s*o];if(r>20)t=[N.p.x+n/r*20,N.p.z+s/r*20];else if(r<4){let f=4/Math.max(.01,r);t=[N.p.x+n*f,N.p.z+s*f]}wn.x=t[0],wn.z=t[1];let c=[];xe.on?(xe.ph==="walk"&&c.push(["Back to the rover",I0]),c.push(["Change camera view",()=>se("btn-pov").click()],["Open the map",()=>se("minimap").click()])):(je[1]&&!Dt.on&&!$t.on&&!ae.on&&r>2.5&&c.push([$.on?"Send Schmitt here instead":"Send Schmitt here",()=>Ig(l[0],l[1],!0)]),je[1]&&!Dt.on&&!$t.on&&!ae.on&&c.push([$.on?"Film from here instead":"Hold the camera here",()=>Ig(wn.x,wn.z)]),je[1]&&!Dt.on&&!$t.on&&!$.on&&!ae.on&&c.push(["Leave the rover on foot",B1]),je[1]&&!Dt.on&&!$t.on&&!$.on&&!ae.on&&c.push(["Sample here",Y1]),$.on&&$.ph!=="in"&&c.push(["Schmitt back aboard",Hf]),Lh>.5&&c.push(["Back on its wheels",Nf]),ze.jump&&ze.offerT>0&&c.push(["Replay the jump",p0]),c.push(["Change camera view",()=>se("btn-pov").click()],["Open the map",()=>se("minimap").click()]),ho.known&&c.push(["Watch the real Grand Prix",Of]));let d=se("ctx");d.innerHTML="";for(let[f,m]of c){let x=document.createElement("button");x.textContent=f,x.addEventListener("click",g=>{g.stopPropagation(),Xh(),m()}),d.appendChild(x)}d.classList.add("on");let h=d.offsetWidth,u=d.offsetHeight;d.style.left=Math.min(i,innerWidth-h-8)+"px",d.style.top=Math.min(e,innerHeight-u-8)+"px"}function Xh(){se("ctx").classList.remove("on")}Nn.domElement.addEventListener("contextmenu",i=>{i.preventDefault(),D0(i.clientX,i.clientY)});Nn.domElement.addEventListener("pointerdown",i=>{Xh(),i.pointerType==="touch"&&(wn.at=[i.clientX,i.clientY],clearTimeout(wn.timer),wn.timer=setTimeout(()=>{wn.at&&D0(wn.at[0],wn.at[1]),wn.at=null},600))});Nn.domElement.addEventListener("pointermove",i=>{wn.at&&Math.hypot(i.clientX-wn.at[0],i.clientY-wn.at[1])>12&&(wn.at=null,clearTimeout(wn.timer))});addEventListener("pointerup",()=>{wn.at=null,clearTimeout(wn.timer)});addEventListener("keydown",i=>{i.key==="Escape"&&Xh()});var pt={mode:"",t:0,len:0,side:0,aim:0,w:[0,0],hand:[new R,new R],seen:new Set,camT:10},Lg=new R;function G1(i,e,t,n,s,r){let a=null,o=1e9,l=0,c=null;i.updateWorldMatrix(!0,!1);for(let u of Qr){if(u.kind==="find")continue;let[f,m,x]=u.at(),g=Math.hypot(f-N.p.x,m-N.p.z);if(g>300&&pt.seen.delete(u.name),g>260||g>o)continue;let p=i.worldToLocal(Lg.set(f,Xe(f,m)+x*.3,m)).normalize(),y=Math.atan2(p.x,p.z);Math.abs(y)<1.6&&(o=g,a=u,l=y,c=(c||new R).copy(p))}let d=!!c;pt.mode&&(pt.t+=e),(s>5||Li.on||pt.mode&&pt.t>pt.len)&&(pt.mode=""),!pt.mode&&!Li.on&&(d&&o<150&&r>.8&&Math.abs(l)<1.3&&!pt.seen.has(a.name)?(pt.seen.add(a.name),Object.assign(pt,{mode:"point",t:0,len:2.8,side:l>0?1:0})):r<1.5&&(pt.camT-=e)<0&&(pt.camT=12+Math.random()*12,Object.assign(pt,{mode:"photo",t:0,len:2.6,aim:d?Math.max(-.45,Math.min(.45,l)):(Math.random()-.5)*.8})));let h=pt.mode?Fe(0,.45,pt.t)*(1-Fe(pt.len-.5,pt.len,pt.t)):0;if(pt.w[0]=pt.w[1]=0,pt.mode==="point"&&c){let u=pt.side,f=u?1:-1;pt.hand[u].set(f*St.S.x,St.S.y,St.S.z).addScaledVector(Lg.set(c.x,Math.max(.15,c.y+.2),c.z).normalize(),.6*Tn),pt.w[u]=h,t=Math.max(-.5,Math.min(.5,l))*.8}else if(pt.mode==="photo"){for(let u=0;u<2;u++)pt.hand[u].set(u?.075:-.075,.27,.21).multiplyScalar(Tn),pt.w[u]=h;t=pt.aim}else d&&!n&&(t=Math.max(-.5,Math.min(.5,l)));return t}function W1(i){if(i){if(k1(i),xe.on){L0(i);return}!it.grounded&&it.t>1&&!Li.rolled&&(Li.rolled=!0,Li.on=Math.random()<.12),it.grounded&&(Li.rolled=!1,Li.on&&(Li.t+=i)>.6&&(Li.on=!1,Li.t=0));for(let e of je){let{st:t,P:n,grips:s}=e.userData;if($.on&&e===je[1]){A0(e,i);continue}if(ae.on){Object.assign(t,{lx:0,lz:0,vx:0,vz:0,y:0,vy:0,v:null});continue}if(Dt.on&&e===je[1]){Vh(e,i);continue}if($t.on){let E=$t.s[je.indexOf(e)];if(E&&E.on){Vh(e,i,E);continue}}let r=Nh.copy(e.position).applyQuaternion(N.q),a=Ef.copy(N.w).cross(r).add(N.v);t.v||(t.v=a.clone());let o=w0.copy(a).sub(t.v).divideScalar(i);t.v.copy(a),o.lengthSq()>900&&o.setLength(30);let l=Gr.copy(N.q).multiply(e.quaternion).invert(),c=E0.set(0,-ss,0).sub(o).applyQuaternion(l),d=no.set(0,1,0).applyQuaternion(l),h=Math.abs(c.y+ss*d.y);e===je[0]&&(ff.t-=i,h>6&&ff.t<0&&(ff.t=.3,Ka(h>12?35:15))),h>4&&(t.vx+=(Math.random()-.5)*h*.07,t.vz+=(Math.random()-.5)*h*.05,t.vyaw+=(Math.random()-.5)*h*.05);let u=1-Math.exp(-i/n.tau);t.fx+=(c.x-t.fx)*u,t.fz+=(c.z-t.fz)*u,t.t+=i;let f=n.fid,m=f*(Math.sin(t.t*.61+n.ph)+.6*Math.sin(t.t*1.37+2*n.ph)),x=f*.7*Math.sin(t.t*.83+3*n.ph);(t.lookT-=i)<0&&(t.lookT=2.5+Math.random()*4,t.look=Math.random()<.35?0:(Math.random()-.5)*2*n.look);let g=Ef.copy(N.v).applyQuaternion(l),p=Math.hypot(g.x,g.z),y=p>1.5?Math.atan2(g.x,g.z):0,M=Math.abs(y)>.15&&Math.abs(y)<2.6?Math.max(-.35,Math.min(.35,y*n.glance)):0,b=M+t.look*(M?.6:1);e===je[1]&&(b=G1(e,i,b,M,h,p)),t.vyaw+=i*(14*(b-t.yaw)-6.5*t.vyaw),t.yaw=Math.max(-.5,Math.min(.5,t.yaw+i*t.vyaw));let v=Math.ceil(i/.004),S=i/v;for(let E=0;E<v;E++){t.vx+=S*(n.K*(d.x*n.bal+m-t.lx)+n.kg*n.K*t.fx/2.5-n.C*t.vx),t.vz+=S*(n.K*(d.z*n.bal+x-t.lz)+n.kg*n.K*t.fz/2.5-n.C*t.vz);let C=Math.hypot(t.lx,t.lz);if(C>.35){let D=-3*n.K*(C-.35)/C*S;t.vx+=D*t.lx,t.vz+=D*t.lz}t.lx+=S*t.vx,t.lz+=S*t.vz;let P=t.y<0?-n.ks*t.y-40*t.vy:t.y>.05?-n.ks*(t.y-.05)-40*t.vy:0;t.vy+=S*(c.y+P),t.y+=S*t.vy}let T=Math.hypot(t.lx,t.lz);T>.5&&(t.lx*=.5/T,t.lz*=.5/T),t.y=Math.max(-.03,Math.min(.09,t.y));let _=Li.on&&e===je[1]?1:0;t.up+=(_-t.up)*(1-Math.exp(-i*(_?7:4)));for(let E=0;E<2;E++)t.hands[E].copy(s[E]).lerp(uo.set(E?.29:-.29,.95,.2).multiplyScalar(Tn),t.up);if(e===je[1])for(let E=0;E<2;E++)pt.w[E]>0&&t.hands[E].lerp(pt.hand[E],pt.w[E]);as(e)}}}var Dt={on:!1,t:0,st:null,opened:!1,scoop:null,tool:null,faceOut:0,card:()=>kf(Dt.st)},Zr=new R(-.66,.16,.33),$r=new R(-.5,0,1.2),F0=new R(.2,0,2.25),N0=new R(-.66,.16,-.33),Vf=new R(-.5,0,-1.2),q1=new R(0,0,-2.3);Object.assign(Dt,{seat:Zr,out:$r,spot:F0});var X1=[{find:"76535,0",in:(i,e)=>Math.hypot(i-Mt.x,e-Mt.z)<30,what:"a sample beside the boulder"},{find:"79115,0",in:(i,e)=>Math.abs(Math.hypot(i-Oi.x,e-Oi.z)-50)<22,what:"a piece of a boulder on the rim"},{find:"74220,0",in:(i,e)=>Math.abs(Math.hypot(i-ut.x,e-ut.z)-ut.R)<22,what:"the orange soil"}].map(i=>Object.assign(i,{here:!1,done:!1,hint:!1,still:0}));function j1(i){let e=Dt.on||$.on||$t.on||xe.on||ae.on||Ot.on||Re.on||Vt.on||ze.on||ke.on,t=Math.hypot(N.v.x,N.v.z);for(let n of X1){if(!n.in(N.p.x,N.p.z)){n.here=n.done=n.hint=!1,n.still=0;continue}if(n.here=!0,!(e||n.done)&&(n.hint||(n.hint=!0,kt(`Stop here and Schmitt climbs out for ${n.what}`)),n.still=t<.4?n.still+i:0,n.still>.8)){let r=Qr.find(a=>a.name===n.find);r&&Gf(r)&&(n.done=!0,kt("Harrison Schmitt climbs out to take the sample"))}}}function Gf(i){if(Dt.on||$.on||$t.on||xe.on||!je[1]||!je[1].visible||ae.on||N.v.length()>1.2)return!1;if(Object.assign(Dt,{on:!0,t:0,st:i,opened:!1}),!Dt.scoop){let e=new vt,t=new sn({color:12104876,roughness:.5,metalness:.6}),n=new Ye(new _s(.012,.012,1,8),t);n.position.y=.5,e.add(n);let s=new Ye(new di(.09,.03,.12),t);s.position.y=1,e.add(s),e.userData.pan=s,e.traverse(r=>{r.castShadow=!0}),Dt.scoop=e}return Dt.tool=Dt.scoop,je[1].add(Dt.scoop),Dt.scoop.visible=!0,!0}var Ah=(i,e,t,n)=>n.copy(i).lerp(e,t),$t={on:!1,s:[],tongs:null},Dg=[{kind:"extra",name:"An anorthosite",sub:"Like 15415, the Genesis Rock \xB7 Apollo 15",imgs:[],body:["Almost pure white plagioclase feldspar: anorthosite, a piece of the Moon\u2019s first crust. Rocks like it formed as the young Moon\u2019s ocean of molten rock cooled and its light feldspar crystals floated to the top.","The most famous is 15415, which Dave Scott and Jim Irwin found sitting on top of another rock on the rim of Spur crater on Apollo 15 in 1971. It weighs about 269 g. It was quickly nicknamed the Genesis Rock, though later dating put it at about 4.1 billion years, younger than the Moon itself."]},{kind:"extra",name:"A breccia",sub:"Like 14321, Big Bertha \xB7 Apollo 14",imgs:[],body:["Broken rock welded back together by the shock of impacts: a breccia, the most common kind of rock in the lunar highlands.","The biggest of the Apollo 14 samples, 14321, nicknamed Big Bertha, is one, about 9 kg. In 2019 a team led by Jeremy Bellucci reported that a fragment of granite inside it, just under 2 g, most likely formed on Earth about 4 billion years ago and was blasted to the Moon by a large impact. If they are right, it is the oldest known piece of Earth, found on the Moon."]},{kind:"extra",name:"A big shocked rock",sub:"Like 61016, Big Muley \xB7 Apollo 16",imgs:[],body:["Pale shocked anorthosite fused to a darker rock that was melted by an impact.","The largest rock any Apollo crew brought back was one like it: 61016, 11.7 kg, picked up near Plum crater in the Descartes highlands on Apollo 16 in 1972. It is nicknamed Big Muley, after Bill Muehlberger, who led the mission\u2019s field geology team."]},{kind:"extra",name:"A mare basalt",sub:"Like 70017, the goodwill rock \xB7 Apollo 17",imgs:[],body:["Dark, fine-grained lava rock rich in titanium: the high-titanium basalt that flooded this valley about 3.7 billion years ago and lies beneath its floor.","One rock like it, 70017, weighed 2,957 g when Apollo 17 brought it home. In 1973 President Nixon had small pieces of it, about 1.1 g each, set in acrylic as goodwill gifts for 135 countries and the 50 US states. Several have since been stolen or lost."]}],Fg=["Just regolith: fine, gray and ordinary. Bagged and numbered anyway.","A few glassy beads and rock chips. Nothing out of the ordinary.","Ordinary soil, the same as the rest of the valley floor. Bagged anyway: every sample counts.","Nothing noteworthy here. Small rock fragments in gray soil."],mf=new Set((()=>{try{return JSON.parse(localStorage.getItem("lrv-extra"))||[]}catch{return[]}})());function K1(){let i=Dg.filter(t=>!mf.has(t.name)),e=i.length?i:Dg;if(Math.random()<(i.length?.25:.1)){let t=e[Math.floor(Math.random()*e.length)];mf.add(t.name);try{localStorage.setItem("lrv-extra",JSON.stringify([...mf]))}catch{}kf(t)}else kt(Fg[Math.floor(Math.random()*Fg.length)])}function Y1(){if(!($t.on||Dt.on||$.on||xe.on||ae.on||!je[0]||!je[1]||!je[1].visible)){if(N.v.length()>1.2){kt("Stop the rover first");return}if(Dt.scoop||(Gf({}),Dt.on=!1),!$t.tongs){let i=new vt,e=new sn({color:12104876,roughness:.5,metalness:.6}),t=new Ye(new _s(.011,.011,1,8),e);t.position.y=.5,i.add(t);let n=new vt;n.position.y=1,i.add(n),i.userData.pan=n;for(let r of[-1,1]){let a=new Ye(new di(.012,.09,.02),e);a.position.set(r*.025,.035,0),a.rotation.z=r*.25,n.add(a)}let s=new Ye(new Tr(.03,0),new sn({color:7236196,roughness:.95}));s.position.y=.06,s.visible=!1,n.add(s),i.userData.rock=s,i.traverse(r=>{r.castShadow=!0}),$t.tongs=i}je[0].add($t.tongs),je[1].add(Dt.scoop),$t.tongs.visible=Dt.scoop.visible=!0,$t.s=[{on:!0,t:0,seat:N0,out:Vf,spot:q1,faceOut:Math.PI,tool:$t.tongs,opened:!1},{on:!0,t:-.5,seat:Zr,out:$r,spot:F0,faceOut:0,tool:Dt.scoop,opened:!1,card:K1}],$t.s.forEach(i=>{i.done=()=>{$t.s.some(e=>e.on)||($t.on=!1)}}),$t.on=!0,pt.mode="",kt("Cernan and Schmitt climb out to take a sample")}}function Vh(i,e,t=Dt){let n=t.t+=e,s=i.userData.st,r=(I,U)=>Fe(I,U,n),a=Tn,o=s,l=(I,U)=>{let B=Math.max(0,Math.min(1,(n-I)/(U-I)));return{u:B*B*(3-2*B),on:B>0&&B<1,ph:(n-I)*5.6}},c=I=>{let U=Math.abs(Math.sin(I.ph)),B=.22*Math.sin(I.ph),W=I.on?.4*(1-U):0;return{legs:[[g[0]+B-W*.5,g[1]-Math.max(0,-B)*.6+W],[g[0]-B-W*.5,g[1]-Math.max(0,B)*.6+W]],y:I.on?.11*Math.pow(U,.6):0}},d=r(5,5.5)-r(5.9,6.2),h=new R,u,f,m=0,x,g=[1.45,-1.35],p=[0,0],y=I=>uo.set(I?.24:-.24,-.38,.06).multiplyScalar(a).clone();if(n<1.1){let I=r(0,1.1);Ah(t.seat,t.out,r(.2,1.1),h),h.y=0,u=Math.PI/2+(t.faceOut-Math.PI/2)*I,f=[g.map(U=>U*I),g.map(U=>U*I)],x=null}else if(n<2.7){let I=l(1.1,2.7);Ah(t.out,t.spot,I.u,h),u=Math.atan2(t.spot.x-t.out.x,t.spot.z-t.out.z);let U=c(I);f=U.legs,h.y=U.y,m=.14*(I.on?1:0)}else if(n<6.2)h.copy(t.spot),u=t.faceOut,f=[[1.25,-1+.15*d],[1.3,-1.1+.15*d]],m=.18-.32*d;else if(n<7.8){let I=l(6.2,7.8);Ah(t.spot,t.out,I.u,h),u=Math.atan2(t.out.x-t.spot.x,t.out.z-t.spot.z);let U=c(I);f=U.legs,h.y=U.y,m=.14*(I.on?1:0)}else if(n<9){let I=1-r(7.8,9);Ah(t.seat,t.out,1-r(7.8,8.7),h),h.y=0,u=Math.PI/2+(t.faceOut-Math.PI/2)*I,f=[g.map(U=>U*I),g.map(U=>U*I)]}else{t.on=!1,t.tool.visible=!1,i.position.copy(t.seat),i.rotation.y=Math.PI/2,s.legs=null,s.hands[0].copy(i.userData.grips[0]),s.hands[1].copy(i.userData.grips[1]),s.v=null,as(i),t.done&&t.done();return}s.legs=f,s.lx=0,s.lz=m,s.yaw=0,s.y=0,s.up=0;let M=En.setFromAxisAngle(Is.set(1,0,0),f[0][0]),v=cr.copy(ur[0].knee).sub(ur[0].hip).applyQuaternion(M).add(ao.set(0,-ur[0].shin,0).applyQuaternion(Gr.setFromAxisAngle(Is.set(1,0,0),f[0][0]+f[0][1]))),S=n<1.1?1-r(0,1.1):n>=7.8?r(7.8,9):0,T=Ie.localToWorld(lo.set(h.x,0,h.z)),_=Ie.worldToLocal(xc.set(T.x,Xe(T.x,T.z),T.z)).y,E=_-v.y+h.y;i.position.set(h.x,t.seat.y+(E-t.seat.y)*(1-S),h.z),i.rotation.y=u;let C=i.userData.grips;if(n<1.1||n>=7.8)s.hands[0].copy(C[0]).lerp(y(0),1-S),s.hands[1].copy(C[1]).lerp(y(1),1-S);else if(n<2.7||n>=6.2){let I=.05*Math.sin((n-(n<2.7?1.1:6.2))*5.6);for(let U=0;U<2;U++)s.hands[U].set(U?.31:-.31,-.22,.13+(U?-I:I)).multiplyScalar(a)}else{let I=r(3.1,3.9)-r(4.4,5.2);s.hands[0].set(-.14,-.08+.1*r(4.4,5.2)+.22*d,.32-.04*d).multiplyScalar(a),s.hands[1].set(.18,-.2,.2).multiplyScalar(a),s.hands[0].z+=.06*I}as(i);let P=t.tool,D=s.hand[0],F=n>2.4&&n<6.6;if(P.visible=F,F){let I=_-i.position.y+.03+.45*r(4.4,5.4)+.55*d,B=vf.set(-.12*a,I,(.82-.2*r(3.1,3.9)-.2*d)*a).clone().sub(D),W=B.length();P.position.copy(D),P.quaternion.setFromUnitVectors(wf,B.normalize()),P.scale.set(1,W,1),P.userData.pan.scale.set(1,1/W,1)}P.userData.rock&&(P.userData.rock.visible=n>4.3),!t.opened&&n>5.5&&(t.opened=!0,t.card&&t.card())}function J1(){let i=new vt,e=new sn({color:3815996,roughness:.6,metalness:.4}),t=new Ye(new _s(.014,.018,.33,10),e);t.position.y=-.17;let n=new Ye(new _s(.017,.017,.12,10),e);return n.rotation.z=Math.PI/2,i.add(t,n),i.position.copy(Fh),i.traverse(s=>{s.castShadow=!0}),i}(async()=>{se("loadmsg").textContent="Shaping the valley\u2026",await new Promise(t=>setTimeout(t,30));try{let t=await fetch("../models/moon-a17.bin");t.ok&&(Oh=new Int16Array(await t.arrayBuffer()),Og=Ug(0,0))}catch{}tS(),nS(),cS(),lS(),Yg(0,0),wt.add(Rf),bS(),xS(),RS(),_c(),Oh&&dS(),os(0,0,Math.atan2(350,82)),se("loadmsg").textContent="Unloading the rover\u2026";let[i,e]=await Promise.all([of.loadAsync("../models/lrv.glb").catch(()=>null),of.loadAsync("../models/lm.glb").catch(()=>null)]);if(i){let t=i.scene;_g(t),t.updateMatrixWorld(!0),t.position.y=-.78-new nn().setFromObject(t).min.y,Ie.add(t,J1()),h1(),u1(),KS()}else Ie.add(new Ye(new di(3.1,.5,2.06),new sn({color:12170928})));{let t="";for(let n=0;n<2&&!je.length;n++)try{let s=await of.loadAsync("../models/astronaut-a7l.glb");P1(C1(E1(s.scene)))}catch(s){t=s&&s.message||String(s),console.error("crew",s)}je.length||setTimeout(()=>kt("The astronauts could not be loaded on this device"+(t?" \xB7 "+t.slice(0,60):"")),4e3)}if(e){let t=e.scene;_g(t),US(t);let n=st.x,s=st.z;st.y=Xe(n,s),st.on=!0;let r=[[4.1,0],[-4.1,0],[0,4.1],[0,-4.1]].map(([c,d])=>Xe(n+c,s+d)),a=new R(r[1]-r[0],8.2,r[3]-r[2]).normalize();t.quaternion.setFromUnitVectors(new R(0,1,0),a).multiply(new gt().setFromAxisAngle(new R(0,1,0),-Math.PI/2)),t.position.set(n,0,s),t.updateMatrixWorld(!0);let o=1e9,l=new R;t.traverse(c=>{if(!c.isMesh)return;let d=c.geometry.attributes.position;for(let h=0;h<d.count;h+=2)l.fromBufferAttribute(d,h).applyMatrix4(c.matrixWorld),o=Math.min(o,l.y-Xe(l.x,l.z))}),t.position.y=-o-.03,wt.add(t)}se("loading").classList.remove("on"),se("brief").classList.add("on"),requestAnimationFrame(t=>{Sf=t,Dh(t)})})();window.__lrv={SHORTY:ut,ORB:Lt,WHEEL_PARTS:zi,WHEELS:Rn,rover:Ie,CRASH:ae,stepDebris:u0,INTRO:Re,SEC:et,BOULDER:Mt,SLABS:Gh,VAN:Oi,SITES:Qr,openSite:y0,OBJ:zt,CPS:Vr,RUN:ke,breakApart:o0,EARTH:s0,look:null,car:N,AIR:it,step:_f,ground:Xe,place:os,tick:(i,e=1/60)=>{for(let t=0;t<i;t++)for(let s=0;s<4;s++)_f(e/4)},set:(i,e)=>{gi=i,rr=e,mc=!1},craters:oi};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
