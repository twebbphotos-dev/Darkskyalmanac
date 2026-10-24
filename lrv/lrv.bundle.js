/*! Dark Sky Almanac © 2026 Tyler Webb · Zion Canyon Light. All rights reserved. Third-party license notices are kept below. */
var Yp=0,Uu=1,Jp=2;var Lr=1,Zp=2,Ua=3,$i=0,Vn=1,Dn=2,Qi=0,za=1,zu=2,Ou=3,ku=4,$p=5;var Dr=100,Qp=101,em=102,tm=103,nm=104,im=200,sm=201,rm=202,am=203,Bu=204,Hu=205,om=206,cm=207,lm=208,hm=209,um=210,dm=211,fm=212,pm=213,mm=214,Qc=0,el=1,tl=2,ba=3,nl=4,il=5,sl=6,rl=7,Vu=0,gm=1,xm=2,Pi=0,Gu=1,Wu=2,qu=3,Go=4,Xu=5,ju=6,Ku=7,Su="attached",bm="detached",Yu=300,er=301,Fr=302,Oa=303,wl=304,Wo=306,Xn=1e3,ui=1001,ya=1002,un=1003,El=1004;var Nr=1005;var tn=1006,ka=1007;var si=1008;var $n=1009,Ju=1010,Zu=1011,Ba=1012,Tl=1013,Ii=1014,ri=1015,Li=1016,Al=1017,Rl=1018,Ha=1020,$u=35902,Qu=35899,ed=1021,td=1022,ai=1023,qi=1026,tr=1027,Cl=1028,Pl=1029,nr=1030,Il=1031;var Ll=1033,qo=33776,Xo=33777,jo=33778,Ko=33779,Dl=35840,Fl=35841,Nl=35842,Ul=35843,zl=36196,Ol=37492,kl=37496,Bl=37488,Hl=37489,Yo=37490,Vl=37491,Gl=37808,Wl=37809,ql=37810,Xl=37811,jl=37812,Kl=37813,Yl=37814,Jl=37815,Zl=37816,$l=37817,Ql=37818,eh=37819,th=37820,nh=37821,ih=36492,sh=36494,rh=36495,ah=36283,oh=36284,Jo=36285,ch=36286;var Sr=2300,wr=2301,Jc=2302,wu=2303,Eu=2400,Tu=2401,Au=2402,ym=2500;var nd=0,Zo=1,Va=2,_m=3200,id=3201;var lh=0,vm=1,fi="",jt="srgb",kn="srgb-linear",Ao="linear",It="srgb";var Zc=7680;var Mm=519,Sm=512,wm=513,Em=514,hh=515,Tm=516,Am=517,uh=518,Rm=519,sd=35044;var rd="300 es",Ti=2e3,_a=2001;function nx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ix(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cm(){let i=va("canvas");return i.style.display="block",i}var hp={},Ma=null;function Ro(...i){let e="THREE."+i.shift();Ma?Ma("log",e,...i):console.log(e,...i)}function Pm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Pm(i);let e="THREE."+i.shift();if(Ma)Ma("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=Pm(i);let e="THREE."+i.shift();if(Ma)Ma("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Mr(...i){let e=i.join(" ");e in hp||(hp[e]=!0,Ie(...i))}function Im(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lm={[Qc]:el,[tl]:sl,[nl]:rl,[ba]:il,[el]:Qc,[sl]:tl,[rl]:nl,[il]:ba},Xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],up=1234567,Eo=Math.PI/180,Er=180/Math.PI;function Ai(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function ad(i,e){return(i%e+e)%e}function sx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rx(i,e,t){return i!==e?(t-i)/(e-i):0}function To(i,e,t){return(1-t)*i+t*e}function ax(i,e,t,n){return To(i,e,1-Math.exp(-t*n))}function ox(i,e=1){return e-Math.abs(ad(i,e*2)-e)}function cx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ux(i,e){return i+Math.random()*(e-i)}function dx(i){return i*(.5-Math.random())}function fx(i){i!==void 0&&(up=i);let e=up+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function px(i){return i*Eo}function mx(i){return i*Er}function gx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function xx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yx(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*h,l*u,o*c);break;case"YZY":i.set(l*u,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*u,o*d,o*c);break;case"XZX":i.set(o*d,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*d,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var od={DEG2RAD:Eo,RAD2DEG:Er,generateUUID:Ai,clamp:ht,euclideanModulo:ad,mapLinear:sx,inverseLerp:rx,lerp:To,damp:ax,pingpong:ox,smoothstep:cx,smootherstep:lx,randInt:hx,randFloat:ux,randFloatSpread:dx,seededRandom:fx,degToRad:px,radToDeg:mx,isPowerOfTwo:gx,ceilPowerOfTwo:xx,floorPowerOfTwo:bx,setQuaternionFromProperEuler:yx,normalize:Ut,denormalize:Ei},qe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(h!==x||l!==u||c!==f||d!==p){let g=l*u+c*f+d*p+h*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);m=Math.sin(m*y)/S,o=Math.sin(o*y)/S,l=l*m+u*o,c=c*m+f*o,d=d*m+p*o,h=h*m+x*o}else{l=l*m+u*o,c=c*m+f*o,d=d*m+p*o,h=h*m+x*o;let y=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=y,c*=y,d*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+d*h+l*f-c*u,e[t+1]=l*p+d*u+c*h-o*f,e[t+2]=c*p+d*f+o*u-l*h,e[t+3]=d*p-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"YXZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"ZXY":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"ZYX":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"YZX":this._x=u*d*h+c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h-u*f*p;break;case"XZY":this._x=u*d*h-c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h+u*f*p;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qh.copy(this).projectOnVector(e),this.sub(Qh)}reflect(e){return this.sub(Qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qh=new R,dp=new xt,Ge=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],y=s[1],S=s[4],b=s[7],v=s[2],M=s[5],T=s[8];return r[0]=a*x+o*y+l*v,r[3]=a*g+o*S+l*M,r[6]=a*m+o*b+l*T,r[1]=c*x+d*y+h*v,r[4]=c*g+d*S+h*M,r[7]=c*m+d*b+h*T,r[2]=u*x+f*y+p*v,r[5]=u*g+f*S+p*M,r[8]=u*m+f*b+p*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,f=c*r-a*l,p=t*h+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-d*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eu.makeScale(e,t)),this}rotate(e){return Mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eu.makeRotation(-e)),this}translate(e,t){return Mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eu=new Ge,fp=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pp=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _x(){let i={enabled:!0,workingColorSpace:kn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===It&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(s.r=xa(s.r),s.g=xa(s.g),s.b=xa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[kn]:{primaries:e,whitePoint:n,transfer:Ao,toXYZ:fp,fromXYZ:pp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:It,toXYZ:fp,fromXYZ:pp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}var rt=_x();function xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ia,al=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ia===void 0&&(ia=va("canvas")),ia.width=e.width,ia.height=e.height;let s=ia.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ia}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=va("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xs(t[n]/255)*255):t[n]=xs(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vx=0,Sa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tu(s[a].image)):r.push(tu(s[a]))}else r=tu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function tu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Mx=0,nu=new R,gn=class i extends Xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ui,s=ui,r=tn,a=si,o=ai,l=$n,c=i.DEFAULT_ANISOTROPY,d=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Ai(),this.name="",this.source=new Sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nu).x}get height(){return this.source.getSize(nu).y}get depth(){return this.source.getSize(nu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Yu;gn.DEFAULT_ANISOTROPY=1;var _t=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,b=(f+1)/2,v=(m+1)/2,M=(d+u)/4,T=(h+x)/4,_=(p+g)/4;return S>b&&S>v?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=M/n,r=T/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=M/s,r=_/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=T/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-x)/y,this.z=(u-d)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ol=class extends Xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new gn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Sa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Co=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var cl=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xe=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,d,h,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,h,u,f,p,x,g)}set(e,t,n,s,r,a,o,l,c,d,h,u,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=h,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/sa.setFromMatrixColumn(e,0).length(),r=1/sa.setFromMatrixColumn(e,1).length(),a=1/sa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=a*d,f=a*h,p=o*d,x=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*d,f=l*h,p=c*d,x=c*h;t[0]=u+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-p,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*d,f=l*h,p=c*d,x=c*h;t[0]=u-x*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*d,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*d,f=a*h,p=o*d,x=o*h;t[0]=l*d,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*h,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*d,t[4]=x-u*h,t[8]=p*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+p,t[10]=u-x*h}else if(e.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+x,t[5]=a*d,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*d,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sx,e,wx)}lookAt(e,t,n){let s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ks.crossVectors(n,ni),ks.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ks.crossVectors(n,ni)),ks.normalize(),Ec.crossVectors(ni,ks),s[0]=ks.x,s[4]=Ec.x,s[8]=ni.x,s[1]=ks.y,s[5]=Ec.y,s[9]=ni.y,s[2]=ks.z,s[6]=Ec.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],y=n[3],S=n[7],b=n[11],v=n[15],M=s[0],T=s[4],_=s[8],w=s[12],C=s[1],P=s[5],D=s[9],F=s[13],I=s[2],U=s[6],B=s[10],W=s[14],ie=s[3],X=s[7],Z=s[11],ee=s[15];return r[0]=a*M+o*C+l*I+c*ie,r[4]=a*T+o*P+l*U+c*X,r[8]=a*_+o*D+l*B+c*Z,r[12]=a*w+o*F+l*W+c*ee,r[1]=d*M+h*C+u*I+f*ie,r[5]=d*T+h*P+u*U+f*X,r[9]=d*_+h*D+u*B+f*Z,r[13]=d*w+h*F+u*W+f*ee,r[2]=p*M+x*C+g*I+m*ie,r[6]=p*T+x*P+g*U+m*X,r[10]=p*_+x*D+g*B+m*Z,r[14]=p*w+x*F+g*W+m*ee,r[3]=y*M+S*C+b*I+v*ie,r[7]=y*T+S*P+b*U+v*X,r[11]=y*_+S*D+b*B+v*Z,r[15]=y*w+S*F+b*W+v*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],y=l*f-c*u,S=o*f-c*h,b=o*u-l*h,v=a*f-c*d,M=a*u-l*d,T=a*h-o*d;return t*(x*y-g*S+m*b)-n*(p*y-g*v+m*M)+s*(p*S-x*v+m*T)-r*(p*b-x*M+g*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=t*o-n*a,S=t*l-s*a,b=t*c-r*a,v=n*l-s*o,M=n*c-r*o,T=s*c-r*l,_=d*x-h*p,w=d*g-u*p,C=d*m-f*p,P=h*g-u*x,D=h*m-f*x,F=u*m-f*g,I=y*F-S*D+b*P+v*C-M*w+T*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return e[0]=(o*F-l*D+c*P)*U,e[1]=(s*D-n*F-r*P)*U,e[2]=(x*T-g*M+m*v)*U,e[3]=(u*M-h*T-f*v)*U,e[4]=(l*C-a*F-c*w)*U,e[5]=(t*F-s*C+r*w)*U,e[6]=(g*b-p*T-m*S)*U,e[7]=(d*T-u*b+f*S)*U,e[8]=(a*D-o*C+c*_)*U,e[9]=(n*C-t*D-r*_)*U,e[10]=(p*M-x*b+m*y)*U,e[11]=(h*b-d*M-f*y)*U,e[12]=(o*w-a*P-l*_)*U,e[13]=(t*P-n*w+s*_)*U,e[14]=(x*S-p*v-g*y)*U,e[15]=(d*v-h*S+u*y)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,f=r*d,p=r*h,x=a*d,g=a*h,m=o*h,y=l*c,S=l*d,b=l*h,v=n.x,M=n.y,T=n.z;return s[0]=(1-(x+m))*v,s[1]=(f+b)*v,s[2]=(p-S)*v,s[3]=0,s[4]=(f-b)*M,s[5]=(1-(u+m))*M,s[6]=(g+y)*M,s[7]=0,s[8]=(p+S)*T,s[9]=(g-y)*T,s[10]=(1-(u+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=sa.set(s[0],s[1],s[2]).length(),o=sa.set(s[4],s[5],s[6]).length(),l=sa.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vi.copy(this);let c=1/a,d=1/o,h=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=d,vi.elements[5]*=d,vi.elements[6]*=d,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Ti,l=!1){let c=this.elements,d=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Ti)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===_a)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ti,l=!1){let c=this.elements,d=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Ti)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===_a)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sa=new R,vi=new Xe,Sx=new R(0,0,0),wx=new R(1,1,1),ks=new R,Ec=new R,ni=new R,mp=new Xe,gp=new xt,Ri=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gp.setFromEuler(this),this.setFromQuaternion(gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ex=0,xp=new R,ra=new xt,us=new Xe,Tc=new R,xo=new R,Tx=new R,Ax=new xt,bp=new R(1,0,0),yp=new R(0,1,0),_p=new R(0,0,1),vp={type:"added"},Rx={type:"removed"},aa={type:"childadded",child:null},iu={type:"childremoved",child:null},Kt=class i extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Ri,n=new xt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ge}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.multiply(ra),this}rotateOnWorldAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.premultiply(ra),this}rotateX(e){return this.rotateOnAxis(bp,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,t){return xp.copy(e).applyQuaternion(this.quaternion),this.position.add(xp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bp,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tc.copy(e):Tc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(xo,Tc,this.up):us.lookAt(Tc,xo,this.up),this.quaternion.setFromRotationMatrix(us),s&&(us.extractRotation(s.matrixWorld),ra.setFromRotationMatrix(us),this.quaternion.premultiply(ra.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vp),aa.child=e,this.dispatchEvent(aa),aa.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rx),iu.child=e,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),us.multiply(e.parent.matrixWorld)),e.applyMatrix4(us),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vp),aa.child=e,this.dispatchEvent(aa),aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,Tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new R(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mt=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cx={type:"move"},Ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bs={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function su(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=ad(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=su(a,r,e+1/3),this.g=su(a,r,e),this.b=su(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=Dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return rt.workingToColorSpace(Ln.copy(this),e),Math.round(ht(Ln.r*255,0,255))*65536+Math.round(ht(Ln.g*255,0,255))*256+Math.round(ht(Ln.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=jt){rt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,s=Ln.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bs),this.setHSL(Bs.h+e,Bs.s+t,Bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bs),e.getHSL(Ac);let n=To(Bs.h,Ac.h,t),s=To(Bs.s,Ac.s,t),r=To(Bs.l,Ac.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new Ue;Ue.NAMES=Dm;var Ta=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mi=new R,ds=new R,ru=new R,fs=new R,oa=new R,ca=new R,Mp=new R,au=new R,ou=new R,cu=new R,lu=new _t,hu=new _t,uu=new _t,qs=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mi.subVectors(e,t),s.cross(Mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mi.subVectors(s,t),ds.subVectors(n,t),ru.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot(ds),l=Mi.dot(ru),c=ds.dot(ds),d=ds.dot(ru),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,f=(c*l-o*d)*u,p=(a*d-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fs.x),l.addScaledVector(a,fs.y),l.addScaledVector(o,fs.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return lu.setScalar(0),hu.setScalar(0),uu.setScalar(0),lu.fromBufferAttribute(e,t),hu.fromBufferAttribute(e,n),uu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lu,r.x),a.addScaledVector(hu,r.y),a.addScaledVector(uu,r.z),a}static isFrontFacing(e,t,n,s){return Mi.subVectors(n,t),ds.subVectors(e,t),Mi.cross(ds).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ds.subVectors(this.a,this.b),Mi.cross(ds).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;oa.subVectors(s,n),ca.subVectors(r,n),au.subVectors(e,n);let l=oa.dot(au),c=ca.dot(au);if(l<=0&&c<=0)return t.copy(n);ou.subVectors(e,s);let d=oa.dot(ou),h=ca.dot(ou);if(d>=0&&h<=d)return t.copy(s);let u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(oa,a);cu.subVectors(e,r);let f=oa.dot(cu),p=ca.dot(cu);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ca,o);let g=d*p-f*h;if(g<=0&&h-d>=0&&f-p>=0)return Mp.subVectors(r,s),o=(h-d)/(h-d+(f-p)),t.copy(s).addScaledVector(Mp,o);let m=1/(g+x+u);return a=x*m,o=u*m,t.copy(n).addScaledVector(oa,a).addScaledVector(ca,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(r,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rc.copy(n.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),Cc.subVectors(this.max,bo),la.subVectors(e.a,bo),ha.subVectors(e.b,bo),ua.subVectors(e.c,bo),Hs.subVectors(ha,la),Vs.subVectors(ua,ha),br.subVectors(la,ua);let t=[0,-Hs.z,Hs.y,0,-Vs.z,Vs.y,0,-br.z,br.y,Hs.z,0,-Hs.x,Vs.z,0,-Vs.x,br.z,0,-br.x,-Hs.y,Hs.x,0,-Vs.y,Vs.x,0,-br.y,br.x,0];return!du(t,la,ha,ua,Cc)||(t=[1,0,0,0,1,0,0,0,1],!du(t,la,ha,ua,Cc))?!1:(Pc.crossVectors(Hs,Vs),t=[Pc.x,Pc.y,Pc.z],du(t,la,ha,ua,Cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ps=[new R,new R,new R,new R,new R,new R,new R,new R],Si=new R,Rc=new nn,la=new R,ha=new R,ua=new R,Hs=new R,Vs=new R,br=new R,bo=new R,Cc=new R,Pc=new R,yr=new R;function du(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yr.fromArray(i,r);let o=s.x*Math.abs(yr.x)+s.y*Math.abs(yr.y)+s.z*Math.abs(yr.z),l=e.dot(yr),c=t.dot(yr),d=n.dot(yr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var mn=new R,Ic=new qe,Px=0,et=class extends Xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Px++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sd,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Tr=class extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Po=class extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ix=new nn,yo=new R,fu=new R,Kn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ix.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);let t=yo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(fu)),this.expandByPoint(yo.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lx=0,hi=new Xe,pu=new Kt,da=new R,ii=new nn,_o=new nn,Sn=new R,St=class i extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nx(e)?Po:Tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];_o.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(ii.min,_o.min),ii.expandByPoint(Sn),Sn.addVectors(ii.max,_o.max),ii.expandByPoint(Sn)):(ii.expandByPoint(_o.min),ii.expandByPoint(_o.max))}ii.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Sn.fromBufferAttribute(o,c),l&&(da.fromBufferAttribute(e,c),Sn.add(da)),s=Math.max(s,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new et(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new R,l[_]=new R;let c=new R,d=new R,h=new R,u=new qe,f=new qe,p=new qe,x=new R,g=new R;function m(_,w,C){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,C),d.sub(c),h.sub(c),f.sub(u),p.sub(u);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(P),o[_].add(x),o[w].add(x),o[C].add(x),l[_].add(g),l[w].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,w=y.length;_<w;++_){let C=y[_],P=C.start,D=C.count;for(let F=P,I=P+D;F<I;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let S=new R,b=new R,v=new R,M=new R;function T(_){v.fromBufferAttribute(s,_),M.copy(v);let w=o[_];S.copy(w),S.sub(v.multiplyScalar(v.dot(w))).normalize(),b.crossVectors(M,w);let P=b.dot(l[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,P)}for(let _=0,w=y.length;_<w;++_){let C=y[_],P=C.start,D=C.count;for(let F=P,I=P+D;F<I;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,d=new R,h=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*d;for(let m=0;m<d;m++)u[p++]=c[f++]}return new et(u,d,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){let u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){let f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Aa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},On=new R,Ra=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mu=new R,Dx=new R,Fx=new Ge,wi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mu.subVectors(n,t).cross(Dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(mu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fx.getNormalMatrix(e),s=this.coplanarPoint(mu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Nx=0,Yn=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=za,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bu,this.blendDst=Hu,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zc,this.stencilZFail=Zc,this.stencilZPass=Zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ms=new R,gu=new R,Lc=new R,Dc=new R,Xs=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ms)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ms.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ms.copy(this.origin).addScaledVector(this.direction,t),ms.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gu.copy(e).add(t).multiplyScalar(.5),Lc.copy(t).sub(e).normalize(),Dc.copy(this.origin).sub(gu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Lc),o=Dc.dot(this.direction),l=-Dc.dot(Lc),c=Dc.lengthSq(),d=Math.abs(1-a*a),h,u,f,p;if(d>0)if(h=a*l-o,u=a*o-l,p=r*d,h>=0)if(u>=-p)if(u<=p){let x=1/d;h*=x,u*=x,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-p?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=p?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(gu).addScaledVector(Lc,u),f}intersectSphere(e,t){if(e.radius<0)return null;ms.subVectors(e.center,this.origin);let n=ms.dot(this.direction),s=ms.dot(ms)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ms)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=n.x-a.x,y=n.y-a.y,S=n.z-a.z,b=Math.abs(l),v=Math.abs(c),M=Math.abs(d),T,_,w,C,P,D,F,I,U,B,W,ie;if(b>=v&&b>=M?(w=l,D=h,U=p,ie=m,l>=0?(T=c,_=d,C=u,P=f,F=x,I=g,B=y,W=S):(T=d,_=c,C=f,P=u,F=g,I=x,B=S,W=y)):v>=M?(w=c,D=u,U=x,ie=y,c>=0?(T=d,_=l,C=f,P=h,F=g,I=p,B=S,W=m):(T=l,_=d,C=h,P=f,F=p,I=g,B=m,W=S)):(w=d,D=f,U=g,ie=S,d>=0?(T=l,_=c,C=h,P=u,F=p,I=x,B=m,W=y):(T=c,_=l,C=u,P=h,F=x,I=p,B=y,W=m)),w===0)return null;let X=T/w,Z=_/w,ee=1/w,_e=C-X*D,we=P-Z*D,Rt=F-X*U,at=I-Z*U,dt=B-X*ie,Y=W-Z*ie,ne=dt*at-Y*Rt,ve=_e*Y-we*dt,He=Rt*we-at*_e;if(s){if(ne<0||ve<0||He<0)return null}else if((ne<0||ve<0||He<0)&&(ne>0||ve>0||He>0))return null;let ye=ne+ve+He;if(ye===0)return null;let Ze=ee*(ne*D+ve*U+He*ie);return(ye>0?Ze<0:Ze>0)?null:this.at(Ze/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sp=new Xe,_r=new Xs,Fc=new Kn,wp=new R,Nc=new R,Uc=new R,zc=new R,xu=new R,Oc=new R,Ep=new R,kc=new R,Ye=class extends Kt{constructor(e=new St,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Oc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],h=r[l];d!==0&&(xu.fromBufferAttribute(h,e),a?Oc.addScaledVector(xu,d):Oc.addScaledVector(xu.sub(t),d))}t.add(Oc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(r),_r.copy(e.ray).recast(e.near),!(Fc.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Fc,wp)===null||_r.origin.distanceToSquared(wp)>(e.far-e.near)**2))&&(Sp.copy(r).invert(),_r.copy(e.ray).applyMatrix4(Sp),!(n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,v=S;b<v;b+=3){let M=o.getX(b),T=o.getX(b+1),_=o.getX(b+2);s=Bc(this,m,e,n,c,d,h,M,T,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=o.getX(g),S=o.getX(g+1),b=o.getX(g+2);s=Bc(this,a,e,n,c,d,h,y,S,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,v=S;b<v;b+=3){let M=b,T=b+1,_=b+2;s=Bc(this,m,e,n,c,d,h,M,T,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=g,S=g+1,b=g+2;s=Bc(this,a,e,n,c,d,h,y,S,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ux(i,e,t,n,s,r,a,o){let l;if(e.side===Vn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===$i,o),l===null)return null;kc.copy(o),kc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(kc);return c<t.near||c>t.far?null:{distance:c,point:kc.clone(),object:i}}function Bc(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Nc),i.getVertexPosition(l,Uc),i.getVertexPosition(c,zc);let d=Ux(i,e,t,n,Nc,Uc,zc,Ep);if(d){let h=new R;qs.getBarycoord(Ep,Nc,Uc,zc,h),s&&(d.uv=qs.getInterpolatedAttribute(s,o,l,c,h,new qe)),r&&(d.uv1=qs.getInterpolatedAttribute(r,o,l,c,h,new qe)),a&&(d.normal=qs.getInterpolatedAttribute(a,o,l,c,h,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};qs.getNormal(Nc,Uc,zc,u.normal),d.face=u,d.barycoord=h}return d}var vo=new _t,Tp=new _t,Ap=new _t,zx=new _t,Rp=new Xe,Hc=new R,bu=new Kn,Cp=new Xe,yu=new Xs,js=class extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Su,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hc),this.boundingBox.expandByPoint(Hc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hc),this.boundingSphere.expandByPoint(Hc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bu.copy(this.boundingSphere),bu.applyMatrix4(s),e.ray.intersectsSphere(bu)!==!1&&(Cp.copy(s).invert(),yu.copy(e.ray).applyMatrix4(Cp),!(this.boundingBox!==null&&yu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Tp.fromBufferAttribute(s.attributes.skinIndex,e),Ap.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(vo.copy(t),t.set(0,0,0,0)):(vo.set(...t,1),t.set(0,0,0)),vo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Ap.getComponent(r);if(a!==0){let o=Tp.getComponent(r);Rp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(zx.copy(vo).applyMatrix4(Rp),a)}}return t.isVector4&&(t.w=vo.w),t.applyMatrix4(this.bindMatrixInverse)}},bs=class extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ks=class extends gn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=un,d=un,h,u){super(null,a,o,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pp=new Xe,Ox=new Xe,Ys=class i{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ox;Pp.multiplyMatrices(o,t[r]),Pp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ks(t,e,e,ai,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new bs),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ys=class extends et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fa=new Xe,Ip=new Xe,Vc=[],Lp=new nn,kx=new Xe,Mo=new Ye,So=new Kn,Ar=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fa),Lp.copy(e.boundingBox).applyMatrix4(fa),this.boundingBox.union(Lp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fa),So.copy(e.boundingSphere).applyMatrix4(fa),this.boundingSphere.union(So)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(n),e.ray.intersectsSphere(So)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fa),Ip.multiplyMatrices(n,fa),Mo.matrixWorld=Ip,Mo.raycast(e,Vc);for(let a=0,o=Vc.length;a<o;a++){let l=Vc[a];l.instanceId=r,l.object=this,t.push(l)}Vc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ks(new Float32Array(s*this.count),s,this.count,Cl,ri));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vr=new Kn,Bx=new qe(.5,.5),Gc=new R,Ca=class{constructor(e=new wi,t=new wi,n=new wi,s=new wi,r=new wi,a=new wi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],S=r[13],b=r[14],v=r[15];if(s[0].setComponents(c-a,f-d,m-p,v-y).normalize(),s[1].setComponents(c+a,f+d,m+p,v+y).normalize(),s[2].setComponents(c+o,f+h,m+x,v+S).normalize(),s[3].setComponents(c-o,f-h,m-x,v-S).normalize(),n)s[4].setComponents(l,u,g,b).normalize(),s[5].setComponents(c-l,f-u,m-g,v-b).normalize();else if(s[4].setComponents(c-l,f-u,m-g,v-b).normalize(),t===Ti)s[5].setComponents(c+l,f+u,m+g,v+b).normalize();else if(t===_a)s[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);let t=Bx.distanceTo(e.center);return vr.radius=.7071067811865476+t,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Gc.x=s.normal.x>0?e.max.x:e.min.x,Gc.y=s.normal.y>0?e.max.y:e.min.y,Gc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pa=class extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ll=new R,hl=new R,Dp=new Xe,wo=new Xs,Wc=new Kn,_u=new R,Fp=new R,Rr=class extends Kt{constructor(e=new St,t=new Pa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ll.fromBufferAttribute(t,s-1),hl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ll.distanceTo(hl);e.setAttribute("lineDistance",new yt(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wc.copy(n.boundingSphere),Wc.applyMatrix4(s),Wc.radius+=r,e.ray.intersectsSphere(Wc)===!1)return;Dp.copy(s).invert(),wo.copy(e.ray).applyMatrix4(Dp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=d.getX(x),y=d.getX(x+1),S=qc(this,e,wo,l,m,y,x);S&&t.push(S)}if(this.isLineLoop){let x=d.getX(p-1),g=d.getX(f),m=qc(this,e,wo,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=qc(this,e,wo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=qc(this,e,wo,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ll.fromBufferAttribute(o,s),hl.fromBufferAttribute(o,r),t.distanceSqToSegment(ll,hl,_u,Fp)>n)return;_u.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_u);if(!(c<e.near||c>e.far))return{distance:c,point:Fp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Np=new R,Up=new R,Io=class extends Rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Np.fromBufferAttribute(t,s),Up.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Np.distanceTo(Up);e.setAttribute("lineDistance",new yt(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Lo=class extends Rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ji=class extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zp=new Xe,Ru=new Xs,Xc=new Kn,jc=new R,Ki=class extends Kt{constructor(e=new St,t=new ji){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(s),Xc.radius+=r,e.ray.intersectsSphere(Xc)===!1)return;zp.copy(s).invert(),Ru.copy(e.ray).applyMatrix4(zp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);jc.fromBufferAttribute(h,g),Op(jc,g,l,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=u,x=f;p<x;p++)jc.fromBufferAttribute(h,p),Op(jc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Op(i,e,t,n,s,r,a){let o=Ru.distanceSqToPoint(i);if(o<t){let l=new R;Ru.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Do=class extends gn{constructor(e=[],t=er,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ci=class extends gn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Js=class extends gn{constructor(e,t,n=Ii,s,r,a,o=un,l=un,c,d=qi,h=1){if(d!==qi&&d!==tr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ul=class extends Js{constructor(e,t=Ii,n=er,s,r,a=un,o=un,l,c=qi){let d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fo=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},di=class i extends St{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],h=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(h,2));function p(x,g,m,y,S,b,v,M,T,_,w){let C=b/T,P=v/_,D=b/2,F=v/2,I=M/2,U=T+1,B=_+1,W=0,ie=0,X=new R;for(let Z=0;Z<B;Z++){let ee=Z*P-F;for(let _e=0;_e<U;_e++){let we=_e*C-D;X[x]=we*y,X[g]=ee*S,X[m]=I,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[m]=M>0?1:-1,d.push(X.x,X.y,X.z),h.push(_e/T),h.push(1-Z/_),W+=1}}for(let Z=0;Z<_;Z++)for(let ee=0;ee<T;ee++){let _e=u+ee+U*Z,we=u+ee+U*(Z+1),Rt=u+(ee+1)+U*(Z+1),at=u+(ee+1)+U*Z;l.push(_e,we,at),l.push(we,Rt,at),ie+=6}o.addGroup(f,ie,w),f+=ie,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _s=class i extends St{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],u=[],f=[],p=0,x=[],g=n/2,m=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function y(){let b=new R,v=new R,M=0,T=(t-e)/n;for(let _=0;_<=r;_++){let w=[],C=_/r,P=C*(t-e)+e;for(let D=0;D<=s;D++){let F=D/s,I=F*l+o,U=Math.sin(I),B=Math.cos(I);v.x=P*U,v.y=-C*n+g,v.z=P*B,h.push(v.x,v.y,v.z),b.set(U,T,B).normalize(),u.push(b.x,b.y,b.z),f.push(F,1-C),w.push(p++)}x.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let C=x[w][_],P=x[w+1][_],D=x[w+1][_+1],F=x[w][_+1];(e>0||w!==0)&&(d.push(C,P,F),M+=3),(t>0||w!==r-1)&&(d.push(P,D,F),M+=3)}c.addGroup(m,M,0),m+=M}function S(b){let v=p,M=new qe,T=new R,_=0,w=b===!0?e:t,C=b===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;let P=p;for(let D=0;D<=s;D++){let I=D/s*l+o,U=Math.cos(I),B=Math.sin(I);T.x=w*B,T.y=g*C,T.z=w*U,h.push(T.x,T.y,T.z),u.push(0,C,0),M.x=U*.5+.5,M.y=B*.5*C+.5,f.push(M.x,M.y),p++}for(let D=0;D<s;D++){let F=v+D,I=P+D;b===!0?d.push(I,I+1,F):d.push(I+1,I,F),_+=3}c.addGroup(m,_,b===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var dl=class i extends St{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let S=new R,b=new R,v=new R;for(let M=0;M<t.length;M+=3)f(t[M+0],S),f(t[M+1],b),f(t[M+2],v),l(S,b,v,y)}function l(y,S,b,v){let M=v+1,T=[];for(let _=0;_<=M;_++){T[_]=[];let w=y.clone().lerp(b,_/M),C=S.clone().lerp(b,_/M),P=M-_;for(let D=0;D<=P;D++)D===0&&_===M?T[_][D]=w:T[_][D]=w.clone().lerp(C,D/P)}for(let _=0;_<M;_++)for(let w=0;w<2*(M-_)-1;w++){let C=Math.floor(w/2);w%2===0?(u(T[_][C+1]),u(T[_+1][C]),u(T[_][C])):(u(T[_][C+1]),u(T[_+1][C+1]),u(T[_+1][C]))}}function c(y){let S=new R;for(let b=0;b<r.length;b+=3)S.x=r[b+0],S.y=r[b+1],S.z=r[b+2],S.normalize().multiplyScalar(y),r[b+0]=S.x,r[b+1]=S.y,r[b+2]=S.z}function d(){let y=new R;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let b=g(y)/2/Math.PI+.5,v=m(y)/Math.PI+.5;a.push(b,1-v)}p(),h()}function h(){for(let y=0;y<a.length;y+=6){let S=a[y+0],b=a[y+2],v=a[y+4],M=Math.max(S,b,v),T=Math.min(S,b,v);M>.9&&T<.1&&(S<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),v<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,S){let b=y*3;S.x=e[b+0],S.y=e[b+1],S.z=e[b+2]}function p(){let y=new R,S=new R,b=new R,v=new R,M=new qe,T=new qe,_=new qe;for(let w=0,C=0;w<r.length;w+=9,C+=6){y.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),M.set(a[C+0],a[C+1]),T.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),v.copy(y).add(S).add(b).divideScalar(3);let P=g(v);x(M,C+0,y,P),x(T,C+2,S,P),x(_,C+4,b,P)}}function x(y,S,b,v){v<0&&y.x===1&&(a[S]=y.x-1),b.x===0&&b.z===0&&(a[S]=v/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Cr=class i extends dl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Yi=class i extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=e/o,u=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<d;m++){let y=m*u-a;for(let S=0;S<c;S++){let b=S*h-r;p.push(b,-y,0),x.push(0,0,1),g.push(S/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let S=y+c*m,b=y+c*(m+1),v=y+1+c*(m+1),M=y+1+c*m;f.push(S,b,M),f.push(b,v,M)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ia=class i extends St{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],d=[],h=e,u=(t-e)/s,f=new R,p=new qe;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,d.push(p.x,p.y)}h+=u}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let y=m+g,S=y,b=y+n+1,v=y+n+2,M=y+1;o.push(S,b,M),o.push(b,v,M)}}this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var No=class i extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],h=new R,u=new R,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let y=[],S=m/n,b=a+S*o,v=e*Math.cos(b),M=Math.sqrt(e*e-v*v),T=0;m===0&&a===0?T=.5/t:m===n&&l===Math.PI&&(T=-.5/t);for(let _=0;_<=t;_++){let w=_/t,C=s+w*r;h.x=-M*Math.cos(C),h.y=v,h.z=M*Math.sin(C),p.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),g.push(w+T,1-S),y.push(c++)}d.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let S=d[m][y+1],b=d[m][y],v=d[m+1][y],M=d[m+1][y+1];(m!==0||a>0)&&f.push(S,b,M),(m!==n-1||l<Math.PI)&&f.push(b,v,M)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ur(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(kp(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(kp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Fn(i){let e={};for(let t=0;t<i.length;t++){let n=Ur(i[t]);for(let s in n)e[s]=n[s]}return e}function kp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Fm={clone:Ur,merge:Fn},Vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=Hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fl=class extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},sn=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jn=class extends sn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var La=class extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ws(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $c(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Wx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Bp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function qx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ml=class extends Ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tu:r=e,o=2*t-n;break;case Au:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tu:a=e,l=2*n-t;break;case Au:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,y=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,S=(-1-f)*g+(1.5+f)*x+.5*p,b=f*g-f*x;for(let v=0;v!==o;++v)r[v]=m*a[d+v]+y*a[c+v]+S*a[l+v]+b*a[h+v];return r}},gl=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[c+u]*h+a[l+u]*d;return r}},xl=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bl=class extends Ji{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,h=this.outTangents;if(!d||!h){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*u+p*2,y=h[m],S=h[m+1],b=e*u+p*2,v=d[b],M=d[b+1],T=jx(n,t,y,v,s);r[p]=Nm(T,x,S,M,g)}return r}};function Nm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Xx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function jx(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Nm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Xx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ws(t,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ws(e.times,Array),values:Ws(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),$c(e.settings)&&(n.settings={inTangents:Ws(e.settings.inTangents,Array),outTangents:Ws(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case wr:t=this.InterpolantFactoryMethodLinear;break;case Jc:t=this.InterpolantFactoryMethodSmooth;break;case wu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return Jc;case this.InterpolantFactoryMethodBezier:return wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;$c(this.settings)&&(Hp(this.settings.inTangents,e),Hp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ix(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,u=h-n,f=h+n;for(let p=0;p!==n;++p){let x=t[h+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,$c(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Hp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=wr;var vs=class extends Zn{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Sr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}};Uo.prototype.ValueTypeName="color";var Ms=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}};Ms.prototype.ValueTypeName="number";var yl=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)xt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ss=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}};Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Zn{constructor(e,t,n){super(e,t,n)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Sr;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Zs=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}};Zs.prototype.ValueTypeName="vector";var zo=class{constructor(e="",t=-1,n=[],s=ym){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Yx(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let d=Wx(l);l=Bp(l,1,d),c=Bp(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ms(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],d=c.name.match(r);if(d&&d.length>1){let h=d[1],u=s[h];u||(s[h]=u=[]),u.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Kx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return Zs;case"color":return Uo;case"quaternion":return Ss;case"bool":case"boolean":return vs;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Yx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Kx(i.type);if(i.times===void 0){let n=[],s=[];qx(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),$c(i.settings)&&(t.settings={inTangents:Ws(i.settings.inTangents,Float32Array),outTangents:Ws(i.settings.outTangents,Float32Array)}),t}var Wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Vp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Vp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _l=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Um=new _l,Zi=class{constructor(e){this.manager=e!==void 0?e:Um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs={},Cu=class extends Error{constructor(e,t){super(e),this.response=t}},Da=class extends Zi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(gs[e]!==void 0){gs[e].push({onLoad:t,onProgress:n,onError:s});return}gs[e]=[],gs[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=gs[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,g=new ReadableStream({start(m){y();function y(){h.read().then(({done:S,value:b})=>{if(S)m.close();else{x+=b.byteLength;let v=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let M=0,T=d.length;M<T;M++){let _=d[M];_.onProgress&&_.onProgress(v)}m.enqueue(b),y()}},S=>{m.error(S)})}}});return new Response(g)}else throw new Cu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Wi.add(`file:${e}`,c);let d=gs[e];delete gs[e];for(let h=0,u=d.length;h<u;h++){let f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let d=gs[e];if(d===void 0)throw this.manager.itemError(e),c;delete gs[e];for(let h=0,u=d.length;h<u;h++){let f=d[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var pa=new WeakMap,vl=class extends Zi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=pa.get(a);h===void 0&&(h=[],pa.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=va("img");function l(){d(),t&&t(this);let h=pa.get(this)||[];for(let u=0;u<h.length;u++){let f=h[u];f.onLoad&&f.onLoad(this)}pa.delete(this),r.manager.itemEnd(e)}function c(h){d(),s&&s(h),Wi.remove(`image:${e}`);let u=pa.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(h)}pa.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Pr=class extends Zi{constructor(e){super(e)}load(e,t,n,s){let r=new gn,a=new vl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ir=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fa=class extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vu=new Xe,Gp=new R,Wp=new R,Na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){vu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===_a||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kc=new R,Yc=new xt,Gi=new R,Oo=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kc,Yc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Yc,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Kc,Yc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Yc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gs=new R,qp=new qe,Xp=new qe,hn=class extends Oo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gs.x,Gs.y).multiplyScalar(-e/Gs.z),Gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gs.x,Gs.y).multiplyScalar(-e/Gs.z)}getViewSize(e,t){return this.getViewBounds(e,qp,Xp),t.subVectors(Xp,qp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pu=class extends Na{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ko=class extends Ir{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Iu=class extends Na{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},Bo=class extends Ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Iu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$s=class extends Oo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lu=class extends Na{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Lu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Es=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Mu=new WeakMap,Ho=class extends Zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Mu.has(a)===!0?(s&&s(Mu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Mu.set(l,c),Wi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ma=-90,ga=1,Ml=class extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(ma,ga,e,t);s.layers=this.layers,this.add(s);let r=new hn(ma,ga,e,t);r.layers=this.layers,this.add(r);let a=new hn(ma,ga,e,t);a.layers=this.layers,this.add(a);let o=new hn(ma,ga,e,t);o.layers=this.layers,this.add(o);let l=new hn(ma,ga,e,t);l.layers=this.layers,this.add(l);let c=new hn(ma,ga,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Sl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ld="\\[\\]\\.:\\/",Jx=new RegExp("["+ld+"]","g"),hd="[^"+ld+"]",Zx="[^"+ld.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",hd),Qx=/(WCOD+)?/.source.replace("WCOD",Zx),eb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hd),tb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hd),nb=new RegExp("^"+$x+Qx+eb+tb+"$"),ib=["material","materials","bones","map"],Du=class{constructor(e,t,n){let s=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jx,"")}static parseTrackName(e){let t=nb.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ib.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=Du;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bw=new Float32Array(1);var jp=new Xe,Vo=class{constructor(e,t,n=0,s=1/0){this.ray=new Xs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jp),this}intersectObject(e,t=!0,n=[]){return Fu(e,this,n,t),n.sort(Kp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fu(e[s],this,n,t);return n.sort(Kp),n}};function Kp(i,e){return i.distance-e.distance}function Fu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Fu(r[a],e,t,!0)}}var Nu=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function ud(i,e,t,n){let s=sb(n);switch(t){case ed:return i*e;case Cl:return i*e/s.components*s.byteLength;case Pl:return i*e/s.components*s.byteLength;case nr:return i*e*2/s.components*s.byteLength;case Il:return i*e*2/s.components*s.byteLength;case td:return i*e*3/s.components*s.byteLength;case ai:return i*e*4/s.components*s.byteLength;case Ll:return i*e*4/s.components*s.byteLength;case qo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:case Ul:return Math.max(i,16)*Math.max(e,8)/4;case Dl:case Nl:return Math.max(i,8)*Math.max(e,8)/2;case zl:case Ol:case Bl:case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kl:case Yo:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case th:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ih:case sh:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ah:case oh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jo:case ch:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sb(i){switch(i){case $n:case Ju:return{byteLength:1,components:1};case Ba:case Zu:case Li:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case Ii:case Tl:case ri:return{byteLength:4,components:1};case $u:case Qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function s0(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ab(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<h.length;f++){let p=h[u],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,h[u]=x)}h.length=u+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cb=`#ifdef USE_ALPHAHASH
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
#endif`,lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fb=`#ifdef USE_AOMAP
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
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
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
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_b=`#ifdef USE_IRIDESCENCE
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
#endif`,vb=`#ifdef USE_BUMPMAP
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pb=`#define PI 3.141592653589793
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
} // validated`,Ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lb=`vec3 transformedNormal = objectNormal;
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
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kb=`#ifdef USE_GRADIENTMAP
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
}`,Yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$b=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qb=`#ifdef USE_ENVMAP
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
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,ry=`uniform sampler2D dfgLUT;
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
}`,ay=`
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xy=`#if defined( USE_POINTS_UV )
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
#endif`,by=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
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
#endif`,Iy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,By=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xy=`float getShadowMask() {
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
}`,jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jy=`#ifdef USE_SKINNING
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
#endif`,Zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t_=`#ifdef USE_TRANSMISSION
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
#endif`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c_=`uniform sampler2D t2D;
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
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
}`,p_=`#if DEPTH_PACKING == 3200
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
}`,m_=`#define DISTANCE
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
}`,g_=`#define DISTANCE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`uniform float scale;
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
}`,__=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,S_=`#define LAMBERT
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
}`,w_=`#define LAMBERT
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
}`,E_=`#define MATCAP
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
}`,T_=`#define MATCAP
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
}`,A_=`#define NORMAL
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
}`,R_=`#define NORMAL
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
}`,C_=`#define PHONG
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
}`,P_=`#define PHONG
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
}`,I_=`#define STANDARD
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
}`,L_=`#define STANDARD
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
}`,D_=`#define TOON
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
}`,F_=`#define TOON
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
}`,N_=`uniform float size;
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
}`,U_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,O_=`uniform vec3 color;
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
}`,k_=`uniform float rotation;
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
}`,B_=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:ob,alphahash_pars_fragment:cb,alphamap_fragment:lb,alphamap_pars_fragment:hb,alphatest_fragment:ub,alphatest_pars_fragment:db,aomap_fragment:fb,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:xb,beginnormal_vertex:bb,bsdfs:yb,iridescence_fragment:_b,bumpmap_pars_fragment:vb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:Sb,clipping_planes_pars_vertex:wb,clipping_planes_vertex:Eb,color_fragment:Tb,color_pars_fragment:Ab,color_pars_vertex:Rb,color_vertex:Cb,common:Pb,cube_uv_reflection_fragment:Ib,defaultnormal_vertex:Lb,displacementmap_pars_vertex:Db,displacementmap_vertex:Fb,emissivemap_fragment:Nb,emissivemap_pars_fragment:Ub,colorspace_fragment:zb,colorspace_pars_fragment:Ob,envmap_fragment:kb,envmap_common_pars_fragment:Bb,envmap_pars_fragment:Hb,envmap_pars_vertex:Vb,envmap_physical_pars_fragment:Qb,envmap_vertex:Gb,fog_vertex:Wb,fog_pars_vertex:qb,fog_fragment:Xb,fog_pars_fragment:jb,gradientmap_pars_fragment:Kb,lightmap_pars_fragment:Yb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:Zb,lights_pars_begin:$b,lights_toon_fragment:ey,lights_toon_pars_fragment:ty,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:ay,lights_fragment_maps:oy,lights_fragment_end:cy,lightprobes_pars_fragment:ly,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:dy,logdepthbuf_vertex:fy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:gy,map_particle_pars_fragment:xy,metalnessmap_fragment:by,metalnessmap_pars_fragment:yy,morphinstance_vertex:_y,morphcolor_vertex:vy,morphnormal_vertex:My,morphtarget_pars_vertex:Sy,morphtarget_vertex:wy,normal_fragment_begin:Ey,normal_fragment_maps:Ty,normal_pars_fragment:Ay,normal_pars_vertex:Ry,normal_vertex:Cy,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Iy,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Dy,iridescence_pars_fragment:Fy,opaque_fragment:Ny,packing:Uy,premultiplied_alpha_fragment:zy,project_vertex:Oy,dithering_fragment:ky,dithering_pars_fragment:By,roughnessmap_fragment:Hy,roughnessmap_pars_fragment:Vy,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:Wy,shadowmap_vertex:qy,shadowmask_pars_fragment:Xy,skinbase_vertex:jy,skinning_pars_vertex:Ky,skinning_vertex:Yy,skinnormal_vertex:Jy,specularmap_fragment:Zy,specularmap_pars_fragment:$y,tonemapping_fragment:Qy,tonemapping_pars_fragment:e_,transmission_fragment:t_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:s_,uv_vertex:r_,worldpos_vertex:a_,background_vert:o_,background_frag:c_,backgroundCube_vert:l_,backgroundCube_frag:h_,cube_vert:u_,cube_frag:d_,depth_vert:f_,depth_frag:p_,distance_vert:m_,distance_frag:g_,equirect_vert:x_,equirect_frag:b_,linedashed_vert:y_,linedashed_frag:__,meshbasic_vert:v_,meshbasic_frag:M_,meshlambert_vert:S_,meshlambert_frag:w_,meshmatcap_vert:E_,meshmatcap_frag:T_,meshnormal_vert:A_,meshnormal_frag:R_,meshphong_vert:C_,meshphong_frag:P_,meshphysical_vert:I_,meshphysical_frag:L_,meshtoon_vert:D_,meshtoon_frag:F_,points_vert:N_,points_frag:U_,shadow_vert:z_,shadow_frag:O_,sprite_vert:k_,sprite_frag:B_},pe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ts={basic:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Fn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Fn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Fn([pe.points,pe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Fn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Fn([pe.common,pe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Fn([pe.sprite,pe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Fn([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Fn([pe.lights,pe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ts.physical={uniforms:Fn([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var dh={r:0,b:0,g:0},H_=new Xe,r0=new Ge;r0.set(-1,0,0,0,1,0,0,0,1);function V_(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,l,c,d=null,h=0,u=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let b=y.backgroundBlurriness>0;S=e.get(S,b)}return S}function p(y){let S=!1,b=f(y);b===null?g(a,o):b&&b.isColor&&(g(b,1),S=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,S){let b=f(S);b&&(b.isCubeTexture||b.mapping===Wo)?(c===void 0&&(c=new Ye(new di(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ur(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(H_.makeRotationFromEuler(S.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(r0),c.material.toneMapped=rt.getTransfer(b.colorSpace)!==It,(d!==b||h!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ye(new Yi(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ur(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=rt.getTransfer(b.colorSpace)!==It,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,S){y.getRGB(dh,cd(i)),t.buffers.color.setClear(dh.r,dh.g,dh.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:x,dispose:m}}function G_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(P,D,F,I,U){let B=!1,W=h(P,I,F,D);r!==W&&(r=W,c(r.object)),B=f(P,I,F,U),B&&p(P,I,F,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,b(P,D,F,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function h(P,D,F,I){let U=I.wireframe===!0,B=n[D.id];B===void 0&&(B={},n[D.id]=B);let W=P.isInstancedMesh===!0?P.id:0,ie=B[W];ie===void 0&&(ie={},B[W]=ie);let X=ie[F.id];X===void 0&&(X={},ie[F.id]=X);let Z=X[U];return Z===void 0&&(Z=u(l()),X[U]=Z),Z}function u(P){let D=[],F=[],I=[];for(let U=0;U<t;U++)D[U]=0,F[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,D,F,I){let U=r.attributes,B=D.attributes,W=0,ie=F.getAttributes();for(let X in ie)if(ie[X].location>=0){let ee=U[X],_e=B[X];if(_e===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor)),ee===void 0||ee.attribute!==_e||_e&&ee.data!==_e.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function p(P,D,F,I){let U={},B=D.attributes,W=0,ie=F.getAttributes();for(let X in ie)if(ie[X].location>=0){let ee=B[X];ee===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let _e={};_e.attribute=ee,ee&&ee.data&&(_e.data=ee.data),U[X]=_e,W++}r.attributes=U,r.attributesNum=W,r.index=I}function x(){let P=r.newAttributes;for(let D=0,F=P.length;D<F;D++)P[D]=0}function g(P){m(P,0)}function m(P,D){let F=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;F[P]=1,I[P]===0&&(i.enableVertexAttribArray(P),I[P]=1),U[P]!==D&&(i.vertexAttribDivisor(P,D),U[P]=D)}function y(){let P=r.newAttributes,D=r.enabledAttributes;for(let F=0,I=D.length;F<I;F++)D[F]!==P[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function S(P,D,F,I,U,B,W){W===!0?i.vertexAttribIPointer(P,D,F,U,B):i.vertexAttribPointer(P,D,F,I,U,B)}function b(P,D,F,I){x();let U=I.attributes,B=F.getAttributes(),W=D.defaultAttributeValues;for(let ie in B){let X=B[ie];if(X.location>=0){let Z=U[ie];if(Z===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let ee=Z.normalized,_e=Z.itemSize,we=e.get(Z);if(we===void 0)continue;let Rt=we.buffer,at=we.type,dt=we.bytesPerElement,Y=at===i.INT||at===i.UNSIGNED_INT||Z.gpuType===Tl;if(Z.isInterleavedBufferAttribute){let ne=Z.data,ve=ne.stride,He=Z.offset;if(ne.isInstancedInterleavedBuffer){for(let ye=0;ye<X.locationSize;ye++)m(X.location+ye,ne.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ye=0;ye<X.locationSize;ye++)g(X.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let ye=0;ye<X.locationSize;ye++)S(X.location+ye,_e/X.locationSize,at,ee,ve*dt,(He+_e/X.locationSize*ye)*dt,Y)}else{if(Z.isInstancedBufferAttribute){for(let ne=0;ne<X.locationSize;ne++)m(X.location+ne,Z.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ne=0;ne<X.locationSize;ne++)g(X.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let ne=0;ne<X.locationSize;ne++)S(X.location+ne,_e/X.locationSize,at,ee,_e*dt,_e/X.locationSize*ne*dt,Y)}}else if(W!==void 0){let ee=W[ie];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(X.location,ee);break;case 3:i.vertexAttrib3fv(X.location,ee);break;case 4:i.vertexAttrib4fv(X.location,ee);break;default:i.vertexAttrib1fv(X.location,ee)}}}}y()}function v(){w();for(let P in n){let D=n[P];for(let F in D){let I=D[F];for(let U in I){let B=I[U];for(let W in B)d(B[W].object),delete B[W];delete I[U]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let F in D){let I=D[F];for(let U in I){let B=I[U];for(let W in B)d(B[W].object),delete B[W];delete I[U]}}delete n[P.id]}function T(P){for(let D in n){let F=n[D];for(let I in F){let U=F[I];if(U[P.id]===void 0)continue;let B=U[P.id];for(let W in B)d(B[W].object),delete B[W];delete U[P.id]}}}function _(P){for(let D in n){let F=n[D],I=P.isInstancedMesh===!0?P.id:0,U=F[I];if(U!==void 0){for(let B in U){let W=U[B];for(let ie in W)d(W[ie].object),delete W[ie];delete U[B]}delete F[I],Object.keys(F).length===0&&delete n[D]}}}function w(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function W_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function q_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==ai&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==$n&&T!==ri&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ie("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:b,maxSamples:v,samples:M}}function X_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new wi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?d(null):c();else{let y=r?0:n,S=y*4,b=m.clippingState||null;l.value=b,b=d(p,u,S,f);for(let v=0;v!==S;++v)b[v]=t[v];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,b=f;S!==x;++S,b+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Wa=4,j_=6,K_=20,Y_=256,$o=new $s,zm=new Ue,dd=null,fd=0,pd=0,md=!1,J_=new R,zr=new R,Xa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=J_}=r;dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,fd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Li,format:ai,colorSpace:kn,depthBuffer:!1},s=Om(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Om(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Z_(r)),this._blurMaterial=Q_(r,e,t),this._ggxMaterial=$_(r,e,t)}return s}_compileMaterial(e){let t=new Ye(new St,e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,s,r){let l=new hn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(zm),h.toneMapping=Pi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new di,new Bn({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,m=!0):(g.color.copy(zm),m=!0);for(let S=0;S<6;S++){let b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[S],r.y,r.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[S]));let v=this._cubeSize;Ga(s,b*v,S>2?v:0,v,v),h.setRenderTarget(s),m&&h.render(x,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===er||e.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=km());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=c*1.25,f=h*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Wa?n-p+Wa:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Ga(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,$o),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ga(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(o,$o)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],h=3*d*(s>this._lodMax-Wa?s-this._lodMax+Wa:0),u=4*(this._cubeSize-d);Ga(t,h,u,3*d,2*d),a.setRenderTarget(t),a.render(l,$o)}};function Z_(i){let e=[],t=[],n=i,s=i-Wa+1+j_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,f=3,p=new Float32Array(f*u*h),x=new Float32Array(f*u*h);for(let m=0;m<h;m++){let y=m%3*2/3-1,S=m>2?0:-1,b=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];p.set(b,f*u*m);for(let v=0;v<u;v++){let M=d[v*2]*2-1,T=d[v*2+1]*2-1;m===0?zr.set(1,T,M):m===1?zr.set(-M,1,-T):m===2?zr.set(-M,T,1):m===3?zr.set(-1,T,-M):m===4?zr.set(-M,-1,T):zr.set(M,T,-1),zr.toArray(x,(m*u+v)*f)}}let g=new St;g.setAttribute("position",new et(p,f)),g.setAttribute("outputDirection",new et(x,f)),t.push(new Ye(g,null)),n>Wa&&n--}return{lodMeshes:t,sizeLods:e}}function Om(i,e,t){let n=new jn(i,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ga(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $_(i,e,t){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Y_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Q_(i,e,t){return new Hn({name:"SphericalGaussianBlur",defines:{SAMPLES:K_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function km(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Bm(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function mh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ph=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Do(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new di(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Qi});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=tn),new Ml(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function ev(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Oa||f===wl)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new ph(p.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===Oa||f===wl,x=f===er||f===Fr;if(p||x){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Xa(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Xa(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,f){return f===Oa?u.mapping=er:f===wl&&(u.mapping=Fr),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function tv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Mr("WebGLRenderer: "+n+" extension not supported."),s}}}function nv(i,e,t,n){let s={},r=new WeakMap;function a(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(h){let u=h.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(h){let u=[],f=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let S=0,b=y.length;S<b;S+=3){let v=y[S+0],M=y[S+1],T=y[S+2];u.push(v,M,M,T,T,v)}}else{let y=p.array;x=p.version;for(let S=0,b=y.length/3-1;S<b;S+=3){let v=S+0,M=S+1,T=S+2;u.push(v,M,M,T,T,v)}}let g=new(p.count>=65535?Po:Tr)(u,1);g.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function d(h){let u=r.get(h);if(u){let f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function iv(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*a),t.update(u,n,1)}function c(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,h*a,f),t.update(u,n,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function sv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function rv(i,e,t){let n=new WeakMap,s=new _t;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0,u=n.get(o);if(u===void 0||u.count!==h){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let b=o.attributes.position.count*S,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*v*4*h),T=new Co(M,b,v,h);T.type=ri,T.needsUpdate=!0;let _=S*4;for(let C=0;C<h;C++){let P=g[C],D=m[C],F=y[C],I=b*v*4*C;for(let U=0;U<P.count;U++){let B=U*_;f===!0&&(s.fromBufferAttribute(P,U),M[I+B+0]=s.x,M[I+B+1]=s.y,M[I+B+2]=s.z,M[I+B+3]=0),p===!0&&(s.fromBufferAttribute(D,U),M[I+B+4]=s.x,M[I+B+5]=s.y,M[I+B+6]=s.z,M[I+B+7]=0),x===!0&&(s.fromBufferAttribute(F,U),M[I+B+8]=s.x,M[I+B+9]=s.y,M[I+B+10]=s.z,M[I+B+11]=F.itemSize===4?s.w:1)}}u={count:h,texture:T,size:new qe(b,v)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function av(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var ov={[Gu]:"LINEAR_TONE_MAPPING",[Wu]:"REINHARD_TONE_MAPPING",[qu]:"CINEON_TONE_MAPPING",[Go]:"ACES_FILMIC_TONE_MAPPING",[ju]:"AGX_TONE_MAPPING",[Ku]:"NEUTRAL_TONE_MAPPING",[Xu]:"CUSTOM_TONE_MAPPING"};function cv(i,e,t,n,s,r){let a=new jn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new St;c.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yt([0,2,0,0,2,0],2));let d=new fl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ye(c,d),u=new $s(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,y=[],S=!1;this.setSize=function(b,v){a.setSize(b,v),o!==null&&o.setSize(b,v),l!==null&&l.setSize(b,v);for(let M=0;M<y.length;M++){let T=y[M];T.setSize&&T.setSize(b,v)}},this.setEffects=function(b){y=b,S=y.length>0&&y[0].isRenderPass===!0;let v=a.width,M=a.height;y.length>0&&o===null&&(o=new jn(v,M,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new jn(v,M,{type:Li,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let _=y[T];_.setSize&&_.setSize(v,M)}},this.begin=function(b,v){if(x||b.toneMapping===Pi&&y.length===0)return!1;if(m=v,v!==null){let M=v.width,T=v.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return S===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Pi,!0},this.hasRenderPass=function(){return S},this.end=function(b,v){b.toneMapping=g,x=!0;let M=a,T=o;for(let _=0;_<y.length;_++){let w=y[_];w.enabled!==!1&&(w.render(b,T,M,v),w.needsSwap!==!1&&(M=T,T=T===o?l:o))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,d.defines={},rt.getTransfer(f)===It&&(d.defines.SRGB_TRANSFER="");let _=ov[p];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(m),b.render(h,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var a0=new gn,bd=new Js(1,1),o0=new Co,c0=new cl,l0=new Do,Hm=[],Vm=[],Gm=new Float32Array(16),Wm=new Float32Array(9),qm=new Float32Array(4);function ja(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hm[s];if(r===void 0&&(r=new Float32Array(s),Hm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gh(i,e){let t=Vm[e];t===void 0&&(t=new Int32Array(e),Vm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2fv(this.addr,e),bn(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;i.uniform3fv(this.addr,e),bn(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4fv(this.addr,e),bn(t,e)}}function fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(xn(t,n))return;qm.set(n),i.uniformMatrix2fv(this.addr,!1,qm),bn(t,n)}}function pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(xn(t,n))return;Wm.set(n),i.uniformMatrix3fv(this.addr,!1,Wm),bn(t,n)}}function mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(xn(t,n))return;Gm.set(n),i.uniformMatrix4fv(this.addr,!1,Gm),bn(t,n)}}function gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2iv(this.addr,e),bn(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3iv(this.addr,e),bn(t,e)}}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4iv(this.addr,e),bn(t,e)}}function _v(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2uiv(this.addr,e),bn(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3uiv(this.addr,e),bn(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4uiv(this.addr,e),bn(t,e)}}function wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bd.compareFunction=t.isReversedDepthBuffer()?uh:hh,r=bd):r=a0,t.setTexture2D(e||r,s)}function Ev(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||c0,s)}function Tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||l0,s)}function Av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||o0,s)}function Rv(i){switch(i){case 5126:return lv;case 35664:return hv;case 35665:return uv;case 35666:return dv;case 35674:return fv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return xv;case 35668:case 35672:return bv;case 35669:case 35673:return yv;case 5125:return _v;case 36294:return vv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}}function Cv(i,e){i.uniform1fv(this.addr,e)}function Pv(i,e){let t=ja(e,this.size,2);i.uniform2fv(this.addr,t)}function Iv(i,e){let t=ja(e,this.size,3);i.uniform3fv(this.addr,t)}function Lv(i,e){let t=ja(e,this.size,4);i.uniform4fv(this.addr,t)}function Dv(i,e){let t=ja(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fv(i,e){let t=ja(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Nv(i,e){let t=ja(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Uv(i,e){i.uniform1iv(this.addr,e)}function zv(i,e){i.uniform2iv(this.addr,e)}function Ov(i,e){i.uniform3iv(this.addr,e)}function kv(i,e){i.uniform4iv(this.addr,e)}function Bv(i,e){i.uniform1uiv(this.addr,e)}function Hv(i,e){i.uniform2uiv(this.addr,e)}function Vv(i,e){i.uniform3uiv(this.addr,e)}function Gv(i,e){i.uniform4uiv(this.addr,e)}function Wv(i,e,t){let n=this.cache,s=e.length,r=gh(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=bd:a=a0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function qv(i,e,t){let n=this.cache,s=e.length,r=gh(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||c0,r[a])}function Xv(i,e,t){let n=this.cache,s=e.length,r=gh(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||l0,r[a])}function jv(i,e,t){let n=this.cache,s=e.length,r=gh(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||o0,r[a])}function Kv(i){switch(i){case 5126:return Cv;case 35664:return Pv;case 35665:return Iv;case 35666:return Lv;case 35674:return Dv;case 35675:return Fv;case 35676:return Nv;case 5124:case 35670:return Uv;case 35667:case 35671:return zv;case 35668:case 35672:return Ov;case 35669:case 35673:return kv;case 5125:return Bv;case 36294:return Hv;case 36295:return Vv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return jv}}var yd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rv(t.type)}},_d=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kv(t.type)}},vd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},gd=/(\w+)(\])?(\[|\.)?/g;function Xm(i,e){i.seq.push(e),i.map[e.id]=e}function Yv(i,e,t){let n=i.name,s=n.length;for(gd.lastIndex=0;;){let r=gd.exec(n),a=gd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xm(t,c===void 0?new yd(o,i,e):new _d(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new vd(o),Xm(t,h)),t=h}}}var qa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Yv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function jm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Jv=37297,Zv=0;function $v(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Km=new Ge;function Qv(i){rt._getMatrix(Km,rt.workingColorSpace,i);let e=`mat3( ${Km.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Ao:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ym(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$v(i.getShaderSource(e),o)}else return r}function eM(i,e){let t=Qv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var tM={[Gu]:"Linear",[Wu]:"Reinhard",[qu]:"Cineon",[Go]:"ACESFilmic",[ju]:"AgX",[Ku]:"Neutral",[Xu]:"Custom"};function nM(i,e){let t=tM[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fh=new R;function iM(){rt.getLuminanceCoefficients(fh);let i=fh.x.toFixed(4),e=fh.y.toFixed(4),t=fh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ec).join(`
`)}function rM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function aM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ec(i){return i!==""}function Jm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(i){return i.replace(oM,lM)}var cM=new Map;function lM(i,e){let t=Je[e];if(t===void 0){let n=cM.get(e);if(n!==void 0)t=Je[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Md(t)}var hM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(i){return i.replace(hM,uM)}function uM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var dM={[Lr]:"SHADOWMAP_TYPE_PCF",[Ua]:"SHADOWMAP_TYPE_VSM"};function fM(i){return dM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pM={[er]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function mM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":pM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var gM={[Fr]:"ENVMAP_MODE_REFRACTION"};function xM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bM={[Vu]:"ENVMAP_BLENDING_MULTIPLY",[gm]:"ENVMAP_BLENDING_MIX",[xm]:"ENVMAP_BLENDING_ADD"};function yM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bM[i.combine]||"ENVMAP_BLENDING_NONE"}function _M(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=fM(t),c=mM(t),d=xM(t),h=yM(t),u=_M(t),f=sM(t),p=rM(r),x=s.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ec).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ec).join(`
`),m.length>0&&(m+=`
`)):(g=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ec).join(`
`),m=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Pi?nM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,eM("linearToOutputTexel",t.outputColorSpace),iM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ec).join(`
`)),a=Md(a),a=Jm(a,t),a=Zm(a,t),o=Md(o),o=Jm(o,t),o=Zm(o,t),a=$m(a),o=$m(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=y+g+a,b=y+m+o,v=jm(s,s.VERTEX_SHADER,S),M=jm(s,s.FRAGMENT_SHADER,b);s.attachShader(x,v),s.attachShader(x,M),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(v)||"",I=s.getShaderInfoLog(M)||"",U=D.trim(),B=F.trim(),W=I.trim(),ie=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,M);else{let Z=Ym(s,v,"vertex"),ee=Ym(s,M,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Z+`
`+ee)}else U!==""?Ie("WebGLProgram: Program Info Log:",U):(B===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:ie,programLog:U,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:m}})}s.deleteShader(v),s.deleteShader(M),_=new qa(s,x),w=aM(s,x)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Jv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=M,this}var MM=0,Sd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wd(e),t.set(e,n)),n}},wd=class{constructor(e){this.id=MM++,this.code=e,this.usedTimes=0}};function SM(i){return i===nr||i===Yo||i===Jo}function wM(i,e,t,n,s,r){let a=new wa,o=new Sd,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,w,C,P,D,F){let I=P.fog,U=D.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ie=e.get(_.envMap||B,W),X=ie&&ie.mapping===Wo?ie.image.height:null,Z=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let ee=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,_e=ee!==void 0?ee.length:0,we=0;U.morphAttributes.position!==void 0&&(we=1),U.morphAttributes.normal!==void 0&&(we=2),U.morphAttributes.color!==void 0&&(we=3);let Rt,at,dt,Y;if(Z){let qt=ts[Z];Rt=qt.vertexShader,at=qt.fragmentShader}else{Rt=_.vertexShader,at=_.fragmentShader;let qt=o.getVertexShaderStage(_),Ct=o.getFragmentShaderStage(_);o.update(_,qt,Ct),dt=qt.id,Y=Ct.id}let ne=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),He=D.isInstancedMesh===!0,ye=D.isBatchedMesh===!0,Ze=!!_.map,an=!!_.matcap,ct=!!ie,bt=!!_.aoMap,Wt=!!_.lightMap,ft=!!_.bumpMap&&_.wireframe===!1,$t=!!_.normalMap,Mn=!!_.displacementMap,qn=!!_.emissiveMap,en=!!_.metalnessMap,fn=!!_.roughnessMap,k=_.anisotropy>0,Cn=_.clearcoat>0,Nt=_.dispersion>0,L=_.retroreflectivity>0,E=_.iridescence>0,H=_.sheen>0,q=_.transmission>0,K=k&&!!_.anisotropyMap,oe=Cn&&!!_.clearcoatMap,ce=Cn&&!!_.clearcoatNormalMap,$=Cn&&!!_.clearcoatRoughnessMap,te=E&&!!_.iridescenceMap,le=E&&!!_.iridescenceThicknessMap,Le=H&&!!_.sheenColorMap,fe=H&&!!_.sheenRoughnessMap,he=!!_.specularMap,De=!!_.specularColorMap,ze=!!_.specularIntensityMap,$e=q&&!!_.transmissionMap,O=q&&!!_.thicknessMap,ue=!!_.gradientMap,Q=!!_.alphaMap,de=_.alphaTest>0,be=!!_.alphaHash,re=!!_.extensions,Fe=Pi;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let Re={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Rt,fragmentShader:at,defines:_.defines,customVertexShaderID:dt,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ye,batchingColor:ye&&D._colorsTexture!==null,instancing:He,instancingColor:He&&D.instanceColor!==null,instancingMorph:He&&D.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ze,matcap:an,envMap:ct,envMapMode:ct&&ie.mapping,envMapCubeUVHeight:X,aoMap:bt,lightMap:Wt,bumpMap:ft,normalMap:$t,displacementMap:Mn,emissiveMap:qn,normalMapObjectSpace:$t&&_.normalMapType===vm,normalMapTangentSpace:$t&&_.normalMapType===lh,packedNormalMap:$t&&_.normalMapType===lh&&SM(_.normalMap.format),metalnessMap:en,roughnessMap:fn,anisotropy:k,anisotropyMap:K,clearcoat:Cn,clearcoatMap:oe,clearcoatNormalMap:ce,clearcoatRoughnessMap:$,dispersion:Nt,retroreflection:L,iridescence:E,iridescenceMap:te,iridescenceThicknessMap:le,sheen:H,sheenColorMap:Le,sheenRoughnessMap:fe,specularMap:he,specularColorMap:De,specularIntensityMap:ze,transmission:q,transmissionMap:$e,thicknessMap:O,gradientMap:ue,opaque:_.transparent===!1&&_.blending===za&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:de,alphaHash:be,combine:_.combine,mapUv:Ze&&p(_.map.channel),aoMapUv:bt&&p(_.aoMap.channel),lightMapUv:Wt&&p(_.lightMap.channel),bumpMapUv:ft&&p(_.bumpMap.channel),normalMapUv:$t&&p(_.normalMap.channel),displacementMapUv:Mn&&p(_.displacementMap.channel),emissiveMapUv:qn&&p(_.emissiveMap.channel),metalnessMapUv:en&&p(_.metalnessMap.channel),roughnessMapUv:fn&&p(_.roughnessMap.channel),anisotropyMapUv:K&&p(_.anisotropyMap.channel),clearcoatMapUv:oe&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:fe&&p(_.sheenRoughnessMap.channel),specularMapUv:he&&p(_.specularMap.channel),specularColorMapUv:De&&p(_.specularColorMap.channel),specularIntensityMapUv:ze&&p(_.specularIntensityMap.channel),transmissionMapUv:$e&&p(_.transmissionMap.channel),thicknessMapUv:O&&p(_.thicknessMap.channel),alphaMapUv:Q&&p(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&($t||k),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(Ze||Q),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&$t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:we,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ze&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===It,decodeVideoTextureEmissive:qn&&_.emissiveMap.isVideoTexture===!0&&rt.getTransfer(_.emissiveMap.colorSpace)===It,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===Vn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&_.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function g(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(w,_),y(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let w=f[_.type],C;if(w){let P=ts[w];C=Fm.clone(P.uniforms)}else C=_.uniforms;return C}function b(_,w){let C=d.get(w);return C!==void 0?++C.usedTimes:(C=new vM(i,w,_,s),c.push(C),d.set(w,C)),C}function v(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:b,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:T}}function EM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function TM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function e0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function t0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=g,y.group=m),e++,y}function l(u,f,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let S=o(u,f,p,x,g,m);p.transmission>0?n.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(u,f,p,x,g,m){let y=o(u,f,p,x,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function d(u,f){t.length>1&&t.sort(u||TM),n.length>1&&n.sort(f||e0),s.length>1&&s.sort(f||e0)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function AM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new t0,i.set(n,[a])):s>=r.length?(a=new t0,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function RM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function CM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var PM=0;function IM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function LM(i){let e=new RM,t=CM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Xe,a=new Xe;function o(c){let d=0,h=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,y=0,S=0,b=0,v=0,M=0,T=0,_=0,w=0,C=0;c.sort(IM);for(let D=0,F=c.length;D<F;D++){let I=c[D],U=I.color,B=I.intensity,W=I.distance,ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===nr?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=U.r*B,h+=U.g*B,u+=U.b*B;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],B);C++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=ee,n.sunShadowMap[p]=ie;let _e=Z.getViewportCount();for(let we=0;we<_e;we++)n.sunShadowMatrix[x+we]=Z.getMatrix(we),n.sunShadowCascade[x+we]=Z._cascadeData[we];x+=_e,p++}n.sun[f]=X,f++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=ie,n.directionalShadowMatrix[g]=I.shadow.matrix,v++}n.directional[g]=X,g++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(U).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[y]=X;let Z=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,Z.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[y]=Z.matrix,I.castShadow){let ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=ie,T++}y++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(U).multiplyScalar(B),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[S]=X,S++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let Z=I.shadow,ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=ie,n.pointShadowMatrix[m]=I.shadow.matrix,M++}n.point[m]=X,m++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(B),X.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[b]=X,b++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==S||P.hemiLength!==b||P.numSunShadows!==p||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==_||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=S,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.sunLength=f,P.directionalLength=g,P.pointLength=m,P.spotLength=y,P.rectAreaLength=S,P.hemiLength=b,P.numSunShadows=p,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=_,P.numLightProbes=C,n.version=PM++)}function l(c,d){let h=0,u=0,f=0,p=0,x=0,g=0,m=d.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let b=c[y];if(b.isSunLight){let v=n.sun[h];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),h++}else if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(b.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function n0(i){let e=new LM(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function DM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new n0(i),e.set(s,[o])):r>=a.length?(o=new n0(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var FM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NM=`uniform sampler2D shadow_pass;
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
}`,UM=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],zM=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],i0=new Xe,Qo=new R,xd=new R;function OM(i,e,t){let n=new Ca,s=new qe,r=new qe,a=new _t,o=new La,l=new pl,c={},d=t.maxTextureSize,h={[$i]:Vn,[Vn]:$i,[Dn]:Dn},u=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:FM,fragmentShader:NM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new St;p.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ye(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let m=this.type;this.render=function(M,T,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Zp&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lr);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Qi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=m!==this.type;F&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=M.length;I<U;I++){let B=M[I],W=B.shadow;if(W===void 0){Ie("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ie=W.getFrameExtents();s.multiply(ie),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ie.x),s.x=r.x*ie.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ie.y),s.y=r.y*ie.y,W.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ua){if(B.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new jn(s.x,s.y,{format:nr,type:Li,minFilter:tn,magFilter:tn,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new Js(s.x,s.y,ri),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=qi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=un,W.map.depthTexture.magFilter=un}else B.isPointLight?(W.map=new ph(s.x),W.map.depthTexture=new ul(s.x,Ii)):(W.map=new jn(s.x,s.y),W.map.depthTexture=new Js(s.x,s.y,Ii)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=qi,this.type===Lr?(W.map.depthTexture.compareFunction=X?uh:hh,W.map.depthTexture.minFilter=tn,W.map.depthTexture.magFilter=tn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=un,W.map.depthTexture.magFilter=un);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Z=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,_);for(let ee=0;ee<Z;ee++){let _e=W.getCamera(ee);if(B.isPointLight){let we=W.camera,Rt=W.matrix,at=B.distance||we.far;at!==we.far&&(we.far=at,we.updateProjectionMatrix()),Qo.setFromMatrixPosition(B.matrixWorld),we.position.copy(Qo),xd.copy(we.position),xd.add(UM[ee]),we.up.copy(zM[ee]),we.lookAt(xd),we.updateMatrixWorld(),Rt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),i0.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),W._frustum.setFromProjectionMatrix(i0,we.coordinateSystem,we.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(W.map),i.clear());let we=W.getViewport(ee);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),D.viewport(a)}n=W.getFrustum(ee),b(T,_,_e,B,this.type)}W.isPointLightShadow!==!0&&this.type===Ua&&y(W,_),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,C,P)};function y(M,T){let _=e.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new jn(s.x,s.y,{format:nr,type:Li}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,_,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,_,f,x,null)}function S(M,T,_,w){let C=null,P=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=C.uuid,F=T.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let U=I[F];U===void 0&&(U=C.clone(),I[F]=U,T.addEventListener("dispose",v)),C=U}if(C.visible=T.visible,C.wireframe=T.wireframe,w===Ua?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:h[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=i.properties.get(C);D.light=_}return C}function b(M,T,_,w,C){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===Ua)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let F=e.update(M),I=M.material;if(Array.isArray(I)){let U=F.groups;for(let B=0,W=U.length;B<W;B++){let ie=U[B],X=I[ie.materialIndex];if(X&&X.visible){let Z=S(M,X,w,C);M.onBeforeShadow(i,M,T,_,F,Z,ie),i.renderBufferDirect(_,null,F,Z,M,ie),M.onAfterShadow(i,M,T,_,F,Z,ie)}}}else if(I.visible){let U=S(M,I,w,C);M.onBeforeShadow(i,M,T,_,F,U,null),i.renderBufferDirect(_,null,F,U,M,null),M.onAfterShadow(i,M,T,_,F,U,null)}}let D=M.children;for(let F=0,I=D.length;F<I;F++)b(D[F],T,_,w,C)}function v(M){M.target.removeEventListener("dispose",v);for(let _ in c){let w=c[_],C=M.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function kM(i,e){function t(){let O=!1,ue=new _t,Q=null,de=new _t(0,0,0,0);return{setMask:function(be){Q!==be&&!O&&(i.colorMask(be,be,be,be),Q=be)},setLocked:function(be){O=be},setClear:function(be,re,Fe,Re,qt){qt===!0&&(be*=Re,re*=Re,Fe*=Re),ue.set(be,re,Fe,Re),de.equals(ue)===!1&&(i.clearColor(be,re,Fe,Re),de.copy(ue))},reset:function(){O=!1,Q=null,de.set(-1,0,0,0)}}}function n(){let O=!1,ue=!1,Q=null,de=null,be=null;return{setReversed:function(re){if(ue!==re){let Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ue=re;let Re=be;be=null,this.setClear(Re)}},getReversed:function(){return ue},setTest:function(re){re?ne(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(re){Q!==re&&!O&&(i.depthMask(re),Q=re)},setFunc:function(re){if(ue&&(re=Lm[re]),de!==re){switch(re){case Qc:i.depthFunc(i.NEVER);break;case el:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case ba:i.depthFunc(i.LEQUAL);break;case nl:i.depthFunc(i.EQUAL);break;case il:i.depthFunc(i.GEQUAL);break;case sl:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=re}},setLocked:function(re){O=re},setClear:function(re){be!==re&&(be=re,ue&&(re=1-re),i.clearDepth(re))},reset:function(){O=!1,Q=null,de=null,be=null,ue=!1}}}function s(){let O=!1,ue=null,Q=null,de=null,be=null,re=null,Fe=null,Re=null,qt=null;return{setTest:function(Ct){O||(Ct?ne(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ct){ue!==Ct&&!O&&(i.stencilMask(Ct),ue=Ct)},setFunc:function(Ct,_i,Hi){(Q!==Ct||de!==_i||be!==Hi)&&(i.stencilFunc(Ct,_i,Hi),Q=Ct,de=_i,be=Hi)},setOp:function(Ct,_i,Hi){(re!==Ct||Fe!==_i||Re!==Hi)&&(i.stencilOp(Ct,_i,Hi),re=Ct,Fe=_i,Re=Hi)},setLocked:function(Ct){O=Ct},setClear:function(Ct){qt!==Ct&&(i.clearStencil(Ct),qt=Ct)},reset:function(){O=!1,ue=null,Q=null,de=null,be=null,re=null,Fe=null,Re=null,qt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},h={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,S=null,b=null,v=null,M=null,T=null,_=new Ue(0,0,0),w=0,C=!1,P=null,D=null,F=null,I=null,U=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ie=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=ie>=2);let Z=null,ee={},_e=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Rt=new _t().fromArray(_e),at=new _t().fromArray(we);function dt(O,ue,Q,de){let be=new Uint8Array(4),re=i.createTexture();i.bindTexture(O,re),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Q;Fe++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ue+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return re}let Y={};Y[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(ba),ft(!1),$t(Uu),ne(i.CULL_FACE),bt(Qi);function ne(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function ve(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function He(O,ue){return u[O]!==ue?(i.bindFramebuffer(O,ue),u[O]=ue,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function ye(O,ue){let Q=p,de=!1;if(O){Q=f.get(ue),Q===void 0&&(Q=[],f.set(ue,Q));let be=O.textures;if(Q.length!==be.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Fe=be.length;re<Fe;re++)Q[re]=i.COLOR_ATTACHMENT0+re;Q.length=be.length,de=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,de=!0);de&&i.drawBuffers(Q)}function Ze(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let an={[Dr]:i.FUNC_ADD,[Qp]:i.FUNC_SUBTRACT,[em]:i.FUNC_REVERSE_SUBTRACT};an[tm]=i.MIN,an[nm]=i.MAX;let ct={[im]:i.ZERO,[sm]:i.ONE,[rm]:i.SRC_COLOR,[Bu]:i.SRC_ALPHA,[um]:i.SRC_ALPHA_SATURATE,[lm]:i.DST_COLOR,[om]:i.DST_ALPHA,[am]:i.ONE_MINUS_SRC_COLOR,[Hu]:i.ONE_MINUS_SRC_ALPHA,[hm]:i.ONE_MINUS_DST_COLOR,[cm]:i.ONE_MINUS_DST_ALPHA,[dm]:i.CONSTANT_COLOR,[fm]:i.ONE_MINUS_CONSTANT_COLOR,[pm]:i.CONSTANT_ALPHA,[mm]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(O,ue,Q,de,be,re,Fe,Re,qt,Ct){if(O===Qi){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),O!==$p){if(O!==m||Ct!==C){if((y!==Dr||v!==Dr)&&(i.blendEquation(i.FUNC_ADD),y=Dr,v=Dr),Ct)switch(O){case za:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zu:i.blendFunc(i.ONE,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",O);break}else switch(O){case za:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ou:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ku:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",O);break}S=null,b=null,M=null,T=null,_.set(0,0,0),w=0,m=O,C=Ct}return}be=be||ue,re=re||Q,Fe=Fe||de,(ue!==y||be!==v)&&(i.blendEquationSeparate(an[ue],an[be]),y=ue,v=be),(Q!==S||de!==b||re!==M||Fe!==T)&&(i.blendFuncSeparate(ct[Q],ct[de],ct[re],ct[Fe]),S=Q,b=de,M=re,T=Fe),(Re.equals(_)===!1||qt!==w)&&(i.blendColor(Re.r,Re.g,Re.b,qt),_.copy(Re),w=qt),m=O,C=!1}function Wt(O,ue){O.side===Dn?ve(i.CULL_FACE):ne(i.CULL_FACE);let Q=O.side===Vn;ue&&(Q=!Q),ft(Q),O.blending===za&&O.transparent===!1?bt(Qi):bt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let de=O.stencilWrite;o.setTest(de),de&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),qn(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function $t(O){O!==Yp?(ne(i.CULL_FACE),O!==D&&(O===Uu?i.cullFace(i.BACK):O===Jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),D=O}function Mn(O){O!==F&&(W&&i.lineWidth(O),F=O)}function qn(O,ue,Q){O?(ne(i.POLYGON_OFFSET_FILL),(I!==ue||U!==Q)&&(I=ue,U=Q,a.getReversed()&&(ue=-ue),i.polygonOffset(ue,Q))):ve(i.POLYGON_OFFSET_FILL)}function en(O){O?ne(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function fn(O){O===void 0&&(O=i.TEXTURE0+B-1),Z!==O&&(i.activeTexture(O),Z=O)}function k(O,ue,Q){Q===void 0&&(Z===null?Q=i.TEXTURE0+B-1:Q=Z);let de=ee[Q];de===void 0&&(de={type:void 0,texture:void 0},ee[Q]=de),(de.type!==O||de.texture!==ue)&&(Z!==Q&&(i.activeTexture(Q),Z=Q),i.bindTexture(O,ue||Y[O]),de.type=O,de.texture=ue)}function Cn(){let O=ee[Z];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Nt(){try{i.compressedTexImage2D(...arguments)}catch(O){Ve("WebGLState:",O)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(O){Ve("WebGLState:",O)}}function E(){try{i.texSubImage2D(...arguments)}catch(O){Ve("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){Ve("WebGLState:",O)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Ve("WebGLState:",O)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Ve("WebGLState:",O)}}function oe(){try{i.texStorage2D(...arguments)}catch(O){Ve("WebGLState:",O)}}function ce(){try{i.texStorage3D(...arguments)}catch(O){Ve("WebGLState:",O)}}function $(){try{i.texImage2D(...arguments)}catch(O){Ve("WebGLState:",O)}}function te(){try{i.texImage3D(...arguments)}catch(O){Ve("WebGLState:",O)}}function le(O){return h[O]!==void 0?h[O]:i.getParameter(O)}function Le(O,ue){h[O]!==ue&&(i.pixelStorei(O,ue),h[O]=ue)}function fe(O){Rt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Rt.copy(O))}function he(O){at.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),at.copy(O))}function De(O,ue){let Q=c.get(ue);Q===void 0&&(Q=new WeakMap,c.set(ue,Q));let de=Q.get(O);de===void 0&&(de=i.getUniformBlockIndex(ue,O.name),Q.set(O,de))}function ze(O,ue){let de=c.get(ue).get(O);l.get(ue)!==de&&(i.uniformBlockBinding(ue,de,O.__bindingPointIndex),l.set(ue,de))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},Z=null,ee={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,S=null,b=null,v=null,M=null,T=null,_=new Ue(0,0,0),w=0,C=!1,P=null,D=null,F=null,I=null,U=null,Rt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ve,bindFramebuffer:He,drawBuffers:ye,useProgram:Ze,setBlending:bt,setMaterial:Wt,setFlipSided:ft,setCullFace:$t,setLineWidth:Mn,setPolygonOffset:qn,setScissorTest:en,activeTexture:fn,bindTexture:k,unbindTexture:Cn,compressedTexImage2D:Nt,compressedTexImage3D:L,texImage2D:$,texImage3D:te,pixelStorei:Le,getParameter:le,updateUBOMapping:De,uniformBlockBinding:ze,texStorage2D:oe,texStorage3D:ce,texSubImage2D:E,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:fe,viewport:he,reset:$e}}function BM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,d=new WeakMap,h=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return p?new OffscreenCanvas(L,E):va("canvas")}function g(L,E,H){let q=1,K=Nt(L);if((K.width>H||K.height>H)&&(q=H/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let oe=Math.floor(q*K.width),ce=Math.floor(q*K.height);u===void 0&&(u=x(oe,ce));let $=E?x(oe,ce):u;return $.width=oe,$.height=ce,$.getContext("2d").drawImage(L,0,0,oe,ce),Ie("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+oe+"x"+ce+")."),$}else return"data"in L&&Ie("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function m(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function S(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(L,E,H,q,K,oe=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce;q&&(ce=e.get("EXT_texture_norm16"),ce||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=E;if(E===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8),H===i.UNSIGNED_SHORT&&ce&&($=ce.R16_EXT),H===i.SHORT&&ce&&($=ce.R16_SNORM_EXT)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),E===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8),H===i.UNSIGNED_SHORT&&ce&&($=ce.RG16_EXT),H===i.SHORT&&ce&&($=ce.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),E===i.RGB&&(H===i.UNSIGNED_SHORT&&ce&&($=ce.RGB16_EXT),H===i.SHORT&&ce&&($=ce.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),E===i.RGBA){let te=oe?Ao:rt.getTransfer(K);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=te===It?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ce&&($=ce.RGBA16_EXT),H===i.SHORT&&ce&&($=ce.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(L,E){let H;return L?E===null||E===Ii||E===Ha?H=i.DEPTH24_STENCIL8:E===ri?H=i.DEPTH32F_STENCIL8:E===Ba&&(H=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ii||E===Ha?H=i.DEPTH_COMPONENT24:E===ri?H=i.DEPTH_COMPONENT32F:E===Ba&&(H=i.DEPTH_COMPONENT16),H}function M(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==un&&L.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function T(L){let E=L.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&h.delete(E)}function _(L){let E=L.target;E.removeEventListener("dispose",_),P(E)}function w(L){let E=n.get(L);if(E.__webglInit===void 0)return;let H=L.source,q=f.get(H);if(q){let K=q[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(L),Object.keys(q).length===0&&f.delete(H)}n.remove(L)}function C(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let H=L.source,q=f.get(H);delete q[E.__cacheKey],a.memory.textures--}function P(L){let E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let K=0;K<E.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(E.__webglFramebuffer[q][K]);else i.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)i.deleteFramebuffer(E.__webglFramebuffer[q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let H=L.textures;for(let q=0,K=H.length;q<K;q++){let oe=n.get(H[q]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(H[q])}n.remove(L)}let D=0;function F(){D=0}function I(){return D}function U(L){D=L}function B(){let L=D;return L>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,L}function W(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ie(L,E){let H=n.get(L);if(L.isVideoTexture&&k(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){let q=L.image;if(q===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(H,L,E);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function X(L,E){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){ve(H,L,E);return}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function Z(L,E){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){ve(H,L,E);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function ee(L,E){let H=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&H.__version!==L.version){He(H,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}let _e={[Xn]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},we={[un]:i.NEAREST,[El]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},Rt={[Sm]:i.NEVER,[Rm]:i.ALWAYS,[wm]:i.LESS,[hh]:i.LEQUAL,[Em]:i.EQUAL,[uh]:i.GEQUAL,[Tm]:i.GREATER,[Am]:i.NOTEQUAL};function at(L,E){if(E.type===ri&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===tn||E.magFilter===ka||E.magFilter===Nr||E.magFilter===si||E.minFilter===tn||E.minFilter===ka||E.minFilter===Nr||E.minFilter===si)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,_e[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,_e[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,_e[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,we[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,we[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Rt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===un||E.minFilter!==Nr&&E.minFilter!==si||E.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function dt(L,E){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",T));let q=E.source,K=f.get(q);K===void 0&&(K={},f.set(q,K));let oe=W(E);if(oe!==L.__cacheKey){K[oe]===void 0&&(K[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[oe].usedTimes++;let ce=K[L.__cacheKey];ce!==void 0&&(K[L.__cacheKey].usedTimes--,ce.usedTimes===0&&C(E)),L.__cacheKey=oe,L.__webglTexture=K[oe].texture}return H}function Y(L,E,H){return Math.floor(Math.floor(L/H)/E)}function ne(L,E,H,q){let oe=L.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,H,q,E.data);else{oe.sort((Le,fe)=>Le.start-fe.start);let ce=0;for(let Le=1;Le<oe.length;Le++){let fe=oe[ce],he=oe[Le],De=fe.start+fe.count,ze=Y(he.start,E.width,4),$e=Y(fe.start,E.width,4);he.start<=De+1&&ze===$e&&Y(he.start+he.count-1,E.width,4)===ze?fe.count=Math.max(fe.count,he.start+he.count-fe.start):(++ce,oe[ce]=he)}oe.length=ce+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Le=0,fe=oe.length;Le<fe;Le++){let he=oe[Le],De=Math.floor(he.start/4),ze=Math.ceil(he.count/4),$e=De%E.width,O=Math.floor(De/E.width),ue=ze,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,$e,O,ue,Q,H,q,E.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function ve(L,E,H){let q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=i.TEXTURE_3D);let K=dt(L,E),oe=E.source;t.bindTexture(q,L.__webglTexture,i.TEXTURE0+H);let ce=n.get(oe);if(oe.version!==ce.__version||K===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Q=rt.getPrimaries(rt.workingColorSpace),de=E.colorSpace===fi?null:rt.getPrimaries(E.colorSpace),be=E.colorSpace===fi||Q===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let te=g(E.image,!1,s.maxTextureSize);te=Cn(E,te);let le=r.convert(E.format,E.colorSpace),Le=r.convert(E.type),fe=b(E.internalFormat,le,Le,E.normalized,E.colorSpace,E.isVideoTexture);at(q,E);let he,De=E.mipmaps,ze=E.isVideoTexture!==!0,$e=ce.__version===void 0||K===!0,O=oe.dataReady,ue=M(E,te);if(E.isDepthTexture)fe=v(E.format===tr,E.type),$e&&(ze?t.texStorage2D(i.TEXTURE_2D,1,fe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,fe,te.width,te.height,0,le,Le,null));else if(E.isDataTexture)if(De.length>0){ze&&$e&&t.texStorage2D(i.TEXTURE_2D,ue,fe,De[0].width,De[0].height);for(let Q=0,de=De.length;Q<de;Q++)he=De[Q],ze?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,le,Le,he.data):t.texImage2D(i.TEXTURE_2D,Q,fe,he.width,he.height,0,le,Le,he.data);E.generateMipmaps=!1}else ze?($e&&t.texStorage2D(i.TEXTURE_2D,ue,fe,te.width,te.height),O&&ne(E,te,le,Le)):t.texImage2D(i.TEXTURE_2D,0,fe,te.width,te.height,0,le,Le,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,fe,De[0].width,De[0].height,te.depth);for(let Q=0,de=De.length;Q<de;Q++)if(he=De[Q],E.format!==ai)if(le!==null)if(ze){if(O)if(E.layerUpdates.size>0){let be=ud(he.width,he.height,E.format,E.type);for(let re of E.layerUpdates){let Fe=he.data.subarray(re*be/he.data.BYTES_PER_ELEMENT,(re+1)*be/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,re,he.width,he.height,1,le,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,te.depth,le,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,fe,he.width,he.height,te.depth,0,he.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,te.depth,le,Le,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,fe,he.width,he.height,te.depth,0,le,Le,he.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ze&&$e&&t.texStorage2D(i.TEXTURE_2D,ue,fe,De[0].width,De[0].height);for(let Q=0,de=De.length;Q<de;Q++)he=De[Q],E.format!==ai?le!==null?ze?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,fe,he.width,he.height,0,he.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,le,Le,he.data):t.texImage2D(i.TEXTURE_2D,Q,fe,he.width,he.height,0,le,Le,he.data)}else if(E.isDataArrayTexture)if(ze){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,fe,te.width,te.height,te.depth),O)if(E.layerUpdates.size>0){let Q=ud(te.width,te.height,E.format,E.type);for(let de of E.layerUpdates){let be=te.data.subarray(de*Q/te.data.BYTES_PER_ELEMENT,(de+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,te.width,te.height,1,le,Le,be)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Le,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,te.width,te.height,te.depth,0,le,Le,te.data);else if(E.isData3DTexture)ze?($e&&t.texStorage3D(i.TEXTURE_3D,ue,fe,te.width,te.height,te.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Le,te.data)):t.texImage3D(i.TEXTURE_3D,0,fe,te.width,te.height,te.depth,0,le,Le,te.data);else if(E.isFramebufferTexture){if($e)if(ze)t.texStorage2D(i.TEXTURE_2D,ue,fe,te.width,te.height);else{let Q=te.width,de=te.height;for(let be=0;be<ue;be++)t.texImage2D(i.TEXTURE_2D,be,fe,Q,de,0,le,Le,null),Q>>=1,de>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),te.parentNode!==Q){Q.appendChild(te),h.add(E),Q.onpaint=de=>{let be=de.changedElements;for(let re of h)be.includes(re.image)&&(re.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let be=i.RGBA,re=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,re,Fe,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(ze&&$e){let Q=Nt(De[0]);t.texStorage2D(i.TEXTURE_2D,ue,fe,Q.width,Q.height)}for(let Q=0,de=De.length;Q<de;Q++)he=De[Q],ze?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,le,Le,he):t.texImage2D(i.TEXTURE_2D,Q,fe,le,Le,he);E.generateMipmaps=!1}else if(ze){if($e){let Q=Nt(te);t.texStorage2D(i.TEXTURE_2D,ue,fe,Q.width,Q.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Le,te)}else t.texImage2D(i.TEXTURE_2D,0,fe,le,Le,te);m(E)&&y(q),ce.__version=oe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function He(L,E,H){if(E.image.length!==6)return;let q=dt(L,E),K=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);let oe=n.get(K);if(K.version!==oe.__version||q===!0){t.activeTexture(i.TEXTURE0+H);let ce=rt.getPrimaries(rt.workingColorSpace),$=E.colorSpace===fi?null:rt.getPrimaries(E.colorSpace),te=E.colorSpace===fi||ce===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let le=E.isCompressedTexture||E.image[0].isCompressedTexture,Le=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let re=0;re<6;re++)!le&&!Le?fe[re]=g(E.image[re],!0,s.maxCubemapSize):fe[re]=Le?E.image[re].image:E.image[re],fe[re]=Cn(E,fe[re]);let he=fe[0],De=r.convert(E.format,E.colorSpace),ze=r.convert(E.type),$e=b(E.internalFormat,De,ze,E.normalized,E.colorSpace),O=E.isVideoTexture!==!0,ue=oe.__version===void 0||q===!0,Q=K.dataReady,de=M(E,he);at(i.TEXTURE_CUBE_MAP,E);let be;if(le){O&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,$e,he.width,he.height);for(let re=0;re<6;re++){be=fe[re].mipmaps;for(let Fe=0;Fe<be.length;Fe++){let Re=be[Fe];E.format!==ai?De!==null?O?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Re.width,Re.height,De,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,$e,Re.width,Re.height,0,Re.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Re.width,Re.height,De,ze,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,$e,Re.width,Re.height,0,De,ze,Re.data)}}}else{if(be=E.mipmaps,O&&ue){be.length>0&&de++;let re=Nt(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,$e,re.width,re.height)}for(let re=0;re<6;re++)if(Le){O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,fe[re].width,fe[re].height,De,ze,fe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,fe[re].width,fe[re].height,0,De,ze,fe[re].data);for(let Fe=0;Fe<be.length;Fe++){let qt=be[Fe].image[re].image;O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,qt.width,qt.height,De,ze,qt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,$e,qt.width,qt.height,0,De,ze,qt.data)}}else{O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,ze,fe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,De,ze,fe[re]);for(let Fe=0;Fe<be.length;Fe++){let Re=be[Fe];O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,De,ze,Re.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,$e,De,ze,Re.image[re])}}}m(E)&&y(i.TEXTURE_CUBE_MAP),oe.__version=K.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ye(L,E,H,q,K,oe){let ce=r.convert(H.format,H.colorSpace),$=r.convert(H.type),te=b(H.internalFormat,ce,$,H.normalized,H.colorSpace),le=n.get(E),Le=n.get(H);if(Le.__renderTarget=E,!le.__hasExternalTextures){let fe=Math.max(1,E.width>>oe),he=Math.max(1,E.height>>oe);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,oe,te,fe,he,E.depth,0,ce,$,null):t.texImage2D(K,oe,te,fe,he,0,ce,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),fn(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,Le.__webglTexture,0,en(E)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,Le.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(L,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let q=E.depthTexture,K=q&&q.isDepthTexture?q.type:null,oe=v(E.stencilBuffer,K),ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fn(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,en(E),oe,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,en(E),oe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,oe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,L)}else{let q=E.textures;for(let K=0;K<q.length;K++){let oe=q[K],ce=r.convert(oe.format,oe.colorSpace),$=r.convert(oe.type),te=b(oe.internalFormat,ce,$,oe.normalized,oe.colorSpace);fn(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,en(E),te,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,en(E),te,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,te,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function an(L,E,H){let q=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(E.depthTexture);if(K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),at(i.TEXTURE_CUBE_MAP,E.depthTexture);let le=r.convert(E.depthTexture.format),Le=r.convert(E.depthTexture.type),fe;E.depthTexture.format===qi?fe=i.DEPTH_COMPONENT24:E.depthTexture.format===tr&&(fe=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,E.width,E.height,0,le,Le,null)}}else ie(E.depthTexture,0);let oe=K.__webglTexture,ce=en(E),$=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,te=E.depthTexture.format===tr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===qi)fn(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,te,$,oe,0);else if(E.depthTexture.format===tr)fn(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,te,$,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(L){let E=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let q=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){let K=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),E.__depthDisposeCallback=K}E.__boundDepthTexture=q}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)an(E.__webglFramebuffer[q],L,q);else{let q=L.texture.mipmaps;q&&q.length>0?an(E.__webglFramebuffer[0],L,0):an(E.__webglFramebuffer,L,0)}else if(H){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=i.createRenderbuffer(),Ze(E.__webglDepthbuffer[q],L,!1);else{let K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,oe)}}else{let q=L.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ze(E.__webglDepthbuffer,L,!1);else{let K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(L,E,H){let q=n.get(L);E!==void 0&&ye(q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ct(L)}function Wt(L){let E=L.texture,H=n.get(L),q=n.get(E);L.addEventListener("dispose",_);let K=L.textures,oe=L.isWebGLCubeRenderTarget===!0,ce=K.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=E.version,a.memory.textures++),oe){H.__webglFramebuffer=[];for(let $=0;$<6;$++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[$]=[];for(let te=0;te<E.mipmaps.length;te++)H.__webglFramebuffer[$][te]=i.createFramebuffer()}else H.__webglFramebuffer[$]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let $=0;$<E.mipmaps.length;$++)H.__webglFramebuffer[$]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ce)for(let $=0,te=K.length;$<te;$++){let le=n.get(K[$]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&fn(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){let te=K[$];H.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[$]);let le=r.convert(te.format,te.colorSpace),Le=r.convert(te.type),fe=b(te.internalFormat,le,Le,te.normalized,te.colorSpace,L.isXRRenderTarget===!0),he=en(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,fe,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,H.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),at(i.TEXTURE_CUBE_MAP,E);for(let $=0;$<6;$++)if(E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)ye(H.__webglFramebuffer[$][te],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,te);else ye(H.__webglFramebuffer[$],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(E)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let $=0,te=K.length;$<te;$++){let le=K[$],Le=n.get(le),fe=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Le.__webglTexture),at(fe,le),ye(H.__webglFramebuffer,L,le,i.COLOR_ATTACHMENT0+$,fe,0),m(le)&&y(fe)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&($=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,q.__webglTexture),at($,E),E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)ye(H.__webglFramebuffer[te],L,E,i.COLOR_ATTACHMENT0,$,te);else ye(H.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,$,0);m(E)&&y($),t.unbindTexture()}L.depthBuffer&&ct(L)}function ft(L){let E=L.textures;for(let H=0,q=E.length;H<q;H++){let K=E[H];if(m(K)){let oe=S(L),ce=n.get(K).__webglTexture;t.bindTexture(oe,ce),y(oe),t.unbindTexture()}}}let $t=[],Mn=[];function qn(L){if(L.samples>0){if(fn(L)===!1){let E=L.textures,H=L.width,q=L.height,K=i.COLOR_BUFFER_BIT,oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(L),$=E.length>1;if($)for(let le=0;le<E.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let te=L.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<E.length;le++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);let Le=n.get(E[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,K,i.NEAREST),l===!0&&($t.length=0,Mn.length=0,$t.push(i.COLOR_ATTACHMENT0+le),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&($t.push(oe),Mn.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Mn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<E.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);let Le=n.get(E[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function en(L){return Math.min(s.maxSamples,L.samples)}function fn(L){let E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function k(L){let E=a.render.frame;d.get(L)!==E&&(d.set(L,E),L.update())}function Cn(L,E){let H=L.colorSpace,q=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==kn&&H!==fi&&(rt.getTransfer(H)===It?(q!==ai||K!==$n)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",H)),E}function Nt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.getTextureUnits=I,this.setTextureUnits=U,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=bt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=qn,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=fn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HM(i,e){function t(n,s=fi){let r,a=rt.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ju)return i.BYTE;if(n===Zu)return i.SHORT;if(n===Ba)return i.UNSIGNED_SHORT;if(n===Tl)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===Li)return i.HALF_FLOAT;if(n===ed)return i.ALPHA;if(n===td)return i.RGB;if(n===ai)return i.RGBA;if(n===qi)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Cl)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===nr)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===qo||n===Xo||n===jo||n===Ko)if(a===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Fl||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===Ol||n===kl||n===Bl||n===Hl||n===Yo||n===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zl||n===Ol)return a===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bl)return r.COMPRESSED_R11_EAC;if(n===Hl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yo)return r.COMPRESSED_RG11_EAC;if(n===Vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gl||n===Wl||n===ql||n===Xl||n===jl||n===Kl||n===Yl||n===Jl||n===Zl||n===$l||n===Ql||n===eh||n===th||n===nh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eh)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===th)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nh)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ih||n===sh||n===rh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ih)return a===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ah||n===oh||n===Jo||n===ch)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ah)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ch)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ha?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var VM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GM=`
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

}`,Ed=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hn({vertexShader:VM,fragmentShader:GM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Td=class extends Xi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Ed,m={},y=t.getContextAttributes(),S=null,b=null,v=[],M=[],T=new qe,_=null,w=null,C=new hn;C.viewport=new _t;let P=new hn;P.viewport=new _t;let D=[C,P],F=new Sl,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=v[Y];return ne===void 0&&(ne=new Ea,v[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=v[Y];return ne===void 0&&(ne=new Ea,v[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=v[Y];return ne===void 0&&(ne=new Ea,v[Y]=ne),ne.getHandSpace()};function B(Y){let ne=M.indexOf(Y.inputSource);if(ne===-1)return;let ve=v[ne];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<v.length;Y++){let ne=M[Y];ne!==null&&(M[Y]=null,v[Y].disconnect(ne))}I=null,U=null,g.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(S),f=null,u=null,h=null,s=null,b=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,He=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=y.stencil?tr:qi,He=y.stencil?Ha:Ii);let Ze={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new jn(u.textureWidth,u.textureHeight,{format:ai,type:$n,depthTexture:new Js(u.textureWidth,u.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new jn(f.framebufferWidth,f.framebufferHeight,{format:ai,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(Y){for(let ne=0;ne<Y.removed.length;ne++){let ve=Y.removed[ne],He=M.indexOf(ve);He>=0&&(M[He]=null,v[He].disconnect(ve))}for(let ne=0;ne<Y.added.length;ne++){let ve=Y.added[ne],He=M.indexOf(ve);if(He===-1){for(let Ze=0;Ze<v.length;Ze++)if(Ze>=M.length){M.push(ve),He=Ze;break}else if(M[Ze]===null){M[Ze]=ve,He=Ze;break}if(He===-1)break}let ye=v[He];ye&&ye.connect(ve)}}let X=new R,Z=new R;function ee(Y,ne,ve){X.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);let He=X.distanceTo(Z),ye=ne.projectionMatrix.elements,Ze=ve.projectionMatrix.elements,an=ye[14]/(ye[10]-1),ct=ye[14]/(ye[10]+1),bt=(ye[9]+1)/ye[5],Wt=(ye[9]-1)/ye[5],ft=(ye[8]-1)/ye[0],$t=(Ze[8]+1)/Ze[0],Mn=an*ft,qn=an*$t,en=He/(-ft+$t),fn=en*-ft;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(fn),Y.translateZ(en),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ye[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let k=an+en,Cn=ct+en,Nt=Mn-fn,L=qn+(He-fn),E=bt*ct/Cn*k,H=Wt*ct/Cn*k;Y.projectionMatrix.makePerspective(Nt,L,E,H,k,Cn),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function _e(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ne=Y.near,ve=Y.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),F.near=P.near=C.near=ne,F.far=P.far=C.far=ve,(I!==F.near||U!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,U=F.far),F.layers.mask=Y.layers.mask|6,C.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let He=Y.parent,ye=F.cameras;_e(F,He);for(let Ze=0;Ze<ye.length;Ze++)_e(ye[Ze],He);ye.length===2?ee(F,C,P):F.projectionMatrix.copy(C.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),we(Y,F,He)};function we(Y,ne,ve){ve===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Er*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Y){return m[Y]};let Rt=null;function at(Y,ne){if(d=ne.getViewerPose(c||a),p=ne,d!==null){let ve=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let He=!1;ve.length!==F.cameras.length&&(F.cameras.length=0,He=!0);for(let ct=0;ct<ve.length;ct++){let bt=ve[ct],Wt=null;if(f!==null)Wt=f.getViewport(bt);else{let $t=h.getViewSubImage(u,bt);Wt=$t.viewport,ct===0&&(e.setRenderTargetTextures(b,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(b))}let ft=D[ct];ft===void 0&&(ft=new hn,ft.layers.enable(ct),ft.viewport=new _t,D[ct]=ft),ft.matrix.fromArray(bt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(bt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),ct===0&&(F.matrix.copy(ft.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),He===!0&&F.cameras.push(ft)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let ct=h.getDepthInformation(ve[0]);ct&&ct.isValid&&ct.texture&&g.init(ct,s.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let ct=0;ct<ve.length;ct++){let bt=ve[ct].camera;if(bt){let Wt=m[bt];Wt||(Wt=new Fo,m[bt]=Wt);let ft=h.getCameraImage(bt);Wt.sourceTexture=ft}}}}for(let ve=0;ve<v.length;ve++){let He=M[ve],ye=v[ve];He!==null&&ye!==void 0&&ye.update(He,ne,c||a)}Rt&&Rt(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}let dt=new s0;dt.setAnimationLoop(at),this.setAnimationLoop=function(Y){Rt=Y},this.dispose=function(){}}},WM=new Xe,h0=new Ge;h0.set(-1,0,0,0,1,0,0,0,1);function qM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,cd(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,S,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Vn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Vn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),S=y.envMap,b=y.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(WM.makeRotationFromEuler(b)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(h0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function XM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let M=v.program;n.uniformBlockBinding(b,M)}function c(b,v){let M=s[b.id];M===void 0&&(g(b),M=d(b),s[b.id]=M,b.addEventListener("dispose",y));let T=v.program;n.updateUBOMapping(b,T);let _=e.render.frame;r[b.id]!==_&&(u(b),r[b.id]=_)}function d(b){let v=h();b.__bindingPointIndex=v;let M=i.createBuffer(),T=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let v=s[b.id],M=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let _=0,w=M.length;_<w;_++){let C=M[_];if(Array.isArray(C))for(let P=0,D=C.length;P<D;P++)f(C[P],_,P,T);else f(C,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,v,M,T){if(x(b,v,M,T)===!0){let _=b.__offset,w=b.value;if(Array.isArray(w)){let C=0;for(let P=0;P<w.length;P++){let D=w[P],F=m(D);p(D,b.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function p(b,v,M){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,M)}function x(b,v,M,T){let _=b.value,w=v+"_"+M;if(T[w]===void 0)return typeof _=="number"||typeof _=="boolean"?T[w]=_:ArrayBuffer.isView(_)?T[w]=_.slice():T[w]=_.clone(),!0;{let C=T[w];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return T[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(b){let v=b.uniforms,M=0,T=16;for(let w=0,C=v.length;w<C;w++){let P=Array.isArray(v[w])?v[w]:[v[w]];for(let D=0,F=P.length;D<F;D++){let I=P[D],U=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=U.length;B<W;B++){let ie=U[B],X=m(ie),Z=M%T,ee=Z%X.boundary,_e=Z+ee;M+=ee,_e!==0&&T-_e<X.storage&&(M+=T-_e),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=X.storage}}}let _=M%T;return _>0&&(M+=T-_),b.__size=M,b.__cache={},this}function m(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",b),v}function y(b){let v=b.target;v.removeEventListener("dispose",y);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function S(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}var jM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),es=null;function KM(){return es===null&&(es=new Ks(jM,16,16,nr,Li),es.name="DFG_LUT",es.minFilter=tn,es.magFilter=tn,es.wrapS=ui,es.wrapT=ui,es.generateMipmaps=!1,es.needsUpdate=!0),es}var tc=class{constructor(e={}){let{canvas:t=Cm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=$n}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,g=new Set([Ll,Il,Pl]),m=new Set([$n,Ii,Ba,Ha,Al,Rl]),y=new Uint32Array(4),S=new Int32Array(4),b=new R,v=null,M=null,T=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,D=null,F=null,I=null,U=null;this._outputColorSpace=jt;let B=0,W=0,ie=null,X=-1,Z=null,ee=new _t,_e=new _t,we=null,Rt=new Ue(0),at=0,dt=t.width,Y=t.height,ne=1,ve=null,He=null,ye=new _t(0,0,dt,Y),Ze=new _t(0,0,dt,Y),an=!1,ct=new Ca,bt=!1,Wt=!1,ft=new Xe,$t=new R,Mn=new _t,qn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},en=!1;function fn(){return ie===null?ne:1}let k=n;function Cn(A,z){return t.getContext(A,z)}let Nt,L,E,H,q,K,oe,ce,$,te,le,Le,fe,he,De,ze,$e,O,ue,Q,de,be,re;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",qt,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",_i,!1),k===null){let z="webgl2";if(k=Cn(z,A),k===null)throw Cn(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(A){throw t.removeEventListener("webglcontextlost",qt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",_i,!1),Ve("WebGLRenderer: "+A.message),A}function Fe(){Nt=new tv(k),Nt.init(),de=new HM(k,Nt),L=new q_(k,Nt,e,de),E=new kM(k,Nt),L.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),F=k.createFramebuffer(),I=k.createFramebuffer(),U=k.createFramebuffer(),H=new sv(k),q=new EM,K=new BM(k,Nt,E,q,L,de,H),oe=new ev(C),ce=new ab(k),be=new G_(k,ce),$=new nv(k,ce,H,be),te=new av(k,$,ce,be,H),O=new rv(k,L,K),De=new X_(q),le=new wM(C,oe,Nt,L,be,De),Le=new qM(C,q),fe=new AM,he=new DM(Nt),$e=new V_(C,oe,E,te,p,l),ze=new OM(C,te,L),re=new XM(k,H,L,E),ue=new W_(k,Nt,H),Q=new iv(k,Nt,H),H.programs=le.programs,C.capabilities=L,C.extensions=Nt,C.properties=q,C.renderLists=fe,C.shadowMap=ze,C.state=E,C.info=H}x!==$n&&(w=new cv(x,t.width,t.height,o,s,r));let Re=new Td(C,k);this.xr=Re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=Nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(dt,Y,!1))},this.getSize=function(A){return A.set(dt,Y)},this.setSize=function(A,z,j=!0){if(Re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=A,Y=z,t.width=Math.floor(A*ne),t.height=Math.floor(z*ne),j===!0&&(t.style.width=A+"px",t.style.height=z+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(dt*ne,Y*ne).floor()},this.setDrawingBufferSize=function(A,z,j){dt=A,Y=z,ne=j,t.width=Math.floor(A*j),t.height=Math.floor(z*j),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===$n){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,z,j,V){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,z,j,V),E.viewport(ee.copy(ye).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(Ze)},this.setScissor=function(A,z,j,V){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,z,j,V),E.scissor(_e.copy(Ze).multiplyScalar(ne).round())},this.getScissorTest=function(){return an},this.setScissorTest=function(A){E.setScissorTest(an=A)},this.setOpaqueSort=function(A){ve=A},this.setTransparentSort=function(A){He=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,j=!0){let V=0;if(A){let G=!1;if(ie!==null){let ge=ie.texture.format;G=g.has(ge)}if(G){let ge=ie.texture.type,Se=m.has(ge),me=$e.getClearColor(),Ee=$e.getClearAlpha(),Pe=me.r,nt=me.g,lt=me.b;Se?(y[0]=Pe,y[1]=nt,y[2]=lt,y[3]=Ee,k.clearBufferuiv(k.COLOR,0,y)):(S[0]=Pe,S[1]=nt,S[2]=lt,S[3]=Ee,k.clearBufferiv(k.COLOR,0,S))}else V|=k.COLOR_BUFFER_BIT}z&&(V|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",qt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",_i,!1),$e.dispose(),fe.dispose(),he.dispose(),q.dispose(),oe.dispose(),te.dispose(),be.dispose(),re.dispose(),le.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",tp),Re.removeEventListener("sessionend",np),xr.stop()};function qt(A){A.preventDefault(),Ro("WebGLRenderer: Context Lost."),P=!0}function Ct(){Ro("WebGLRenderer: Context Restored."),P=!1;let A=H.autoReset,z=ze.enabled,j=ze.autoUpdate,V=ze.needsUpdate,G=ze.type;Fe(),H.autoReset=A,ze.enabled=z,ze.autoUpdate=j,ze.needsUpdate=V,ze.type=G}function _i(A){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Hi(A){let z=A.target;z.removeEventListener("dispose",Hi),Yg(z)}function Yg(A){Jg(A),q.remove(A)}function Jg(A){let z=q.get(A).programs;z!==void 0&&(z.forEach(function(j){le.releaseProgram(j)}),A.isShaderMaterial&&le.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,j,V,G,ge){z===null&&(z=qn);let Se=G.isMesh&&G.matrixWorld.determinantAffine()<0,me=Qg(A,z,j,V,G);E.setMaterial(V,Se);let Ee=j.index,Pe=1;if(V.wireframe===!0){if(Ee=$.getWireframeAttribute(j),Ee===void 0)return;Pe=2}let nt=j.drawRange,lt=j.attributes.position,Te=nt.start*Pe,Pt=(nt.start+nt.count)*Pe;ge!==null&&(Te=Math.max(Te,ge.start*Pe),Pt=Math.min(Pt,(ge.start+ge.count)*Pe)),Ee!==null?(Te=Math.max(Te,0),Pt=Math.min(Pt,Ee.count)):lt!=null&&(Te=Math.max(Te,0),Pt=Math.min(Pt,lt.count));let pn=Pt-Te;if(pn<0||pn===1/0)return;be.setup(G,V,me,j,Ee);let Yt,Ht=ue;if(Ee!==null&&(Yt=ce.get(Ee),Ht=Q,Ht.setIndex(Yt)),G.isMesh)V.wireframe===!0?(E.setLineWidth(V.wireframeLinewidth*fn()),Ht.setMode(k.LINES)):Ht.setMode(k.TRIANGLES);else if(G.isLine){let Pn=V.linewidth;Pn===void 0&&(Pn=1),E.setLineWidth(Pn*fn()),G.isLineSegments?Ht.setMode(k.LINES):G.isLineLoop?Ht.setMode(k.LINE_LOOP):Ht.setMode(k.LINE_STRIP)}else G.isPoints?Ht.setMode(k.POINTS):G.isSprite&&Ht.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Pn=G._multiDrawStarts,Me=G._multiDrawCounts,zn=G._multiDrawCount,gt=Ee?ce.get(Ee).bytesPerElement:1,li=q.get(V).currentProgram.getUniforms();for(let Vi=0;Vi<zn;Vi++)li.setValue(k,"_gl_DrawID",Vi),Ht.render(Pn[Vi]/gt,Me[Vi])}else if(G.isInstancedMesh)Ht.renderInstances(Te,pn,G.count);else if(j.isInstancedBufferGeometry){let Pn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Me=Math.min(j.instanceCount,Pn);Ht.renderInstances(Te,pn,Me)}else Ht.render(Te,pn)};function ep(A,z,j,V){D!==null&&A.isNodeMaterial&&D.setObject(V,A),bt===!0&&De.setState(A,j,!1),A.transparent===!0&&A.side===Dn&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,wc(A,z,V),A.side=$i,A.needsUpdate=!0,wc(A,z,V),A.side=Dn):wc(A,z,V)}this.compile=function(A,z,j=null){j===null&&(j=A),D!==null&&D.renderStart(A,z,j),M=he.get(j),M.init(z),_.push(M),j.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),A!==j&&A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),Wt=this.localClippingEnabled,bt=De.init(this.clippingPlanes,Wt),bt===!0&&De.setGlobalState(this.clippingPlanes,z),D!==null&&ze.render(M.state.shadowsArray,j,z);let V=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){let me=ge[Se];ep(me,j,z,G),V.add(me)}else ep(ge,j,z,G),V.add(ge)}),M=_.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(A,z,j=null){let V=this.compile(A,z,j);return new Promise(G=>{function ge(){if(V.forEach(function(Se){let Ee=q.get(Se).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(Se)}),V.size===0){G(A);return}setTimeout(ge,10)}Nt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Zh=null;function Zg(A){Zh&&Zh(A)}function tp(){xr.stop()}function np(){xr.start()}let xr=new s0;xr.setAnimationLoop(Zg),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(A){Zh=A,Re.setAnimationLoop(A),A===null?xr.stop():xr.start()},Re.addEventListener("sessionstart",tp),Re.addEventListener("sessionend",np),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(A,z);let j=Re.enabled===!0&&Re.isPresenting===!0,V=w!==null&&(ie===null||j)&&w.begin(C,ie);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(z),z=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,z,ie),M=he.get(A,_.length),M.init(z),M.state.textureUnits=K.getTextureUnits(),_.push(M),ft.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ct.setFromProjectionMatrix(ft,Ti,z.reversedDepth),Wt=this.localClippingEnabled,bt=De.init(this.clippingPlanes,Wt),v=fe.get(A,T.length),v.init(),T.push(v),Re.enabled===!0&&Re.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&$h(Se,z,-1/0,C.sortObjects)}$h(A,z,0,C.sortObjects),v.finish(),D!==null&&D.updateLights(M.state.lightsArray),C.sortObjects===!0&&v.sort(ve,He),en=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,en&&$e.addToRenderList(v,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&De.beginShadows();let G=M.state.shadowsArray;if(ze.render(G,A,z),bt===!0&&De.endShadows(),(V&&w.hasRenderPass())===!1){let Se=v.opaque,me=v.transmissive;if(M.setupLights(),z.isArrayCamera){let Ee=z.cameras;if(me.length>0)for(let Pe=0,nt=Ee.length;Pe<nt;Pe++){let lt=Ee[Pe];sp(Se,me,A,lt)}en&&$e.render(A);for(let Pe=0,nt=Ee.length;Pe<nt;Pe++){let lt=Ee[Pe];ip(v,A,lt,lt.viewport)}}else me.length>0&&sp(Se,me,A,z),en&&$e.render(A),ip(v,A,z)}ie!==null&&W===0&&(K.updateMultisampleRenderTarget(ie),K.updateRenderTargetMipmap(ie)),V&&w.end(C),A.isScene===!0&&A.onAfterRender(C,A,z),be.resetDefaultState(),X=-1,Z=null,_.pop(),_.length>0?(M=_[_.length-1],K.setTextureUnits(M.state.textureUnits),bt===!0&&De.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,D!==null&&D.renderEnd()};function $h(A,z,j,V){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ct)){V&&Mn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ft);let Se=te.update(A),me=A.material;me.visible&&v.push(A,Se,me,j,Mn.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ct))){let Se=te.update(A),me=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Mn.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Mn.copy(Se.boundingSphere.center)),Mn.applyMatrix4(A.matrixWorld).applyMatrix4(ft)),Array.isArray(me)){let Ee=Se.groups;for(let Pe=0,nt=Ee.length;Pe<nt;Pe++){let lt=Ee[Pe],Te=me[lt.materialIndex];Te&&Te.visible&&v.push(A,Se,Te,j,Mn.z,lt,z)}}else me.visible&&v.push(A,Se,me,j,Mn.z,null,z)}}let ge=A.children;for(let Se=0,me=ge.length;Se<me;Se++)$h(ge[Se],z,j,V)}function ip(A,z,j,V){let{opaque:G,transmissive:ge,transparent:Se}=A;M.setupLightsView(j),bt===!0&&De.setGlobalState(C.clippingPlanes,j),V&&E.viewport(ee.copy(V)),G.length>0&&Sc(G,z,j),ge.length>0&&Sc(ge,z,j),Se.length>0&&Sc(Se,z,j),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function sp(A,z,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[V.id]===void 0){let Te=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[V.id]=new jn(1,1,{generateMipmaps:!0,type:Te?Li:$n,minFilter:si,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let ge=M.state.transmissionRenderTarget[V.id],Se=V.viewport||ee;ge.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let me=C.getRenderTarget(),Ee=C.getActiveCubeFace(),Pe=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(Rt),at=C.getClearAlpha(),at<1&&C.setClearColor(16777215,.5),C.clear(),en&&$e.render(j);let nt=C.toneMapping;C.toneMapping=Pi;let lt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),bt===!0&&De.setGlobalState(C.clippingPlanes,V),Sc(A,j,V),K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Pt=0,pn=z.length;Pt<pn;Pt++){let Yt=z[Pt],{object:Ht,geometry:Pn,material:Me,group:zn}=Yt;if(Me.side===Dn&&Ht.layers.test(V.layers)){let gt=Me.side;Me.side=Vn,Me.needsUpdate=!0,rp(Ht,j,V,Pn,Me,zn),Me.side=gt,Me.needsUpdate=!0,Te=!0}}Te===!0&&(K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,Ee,Pe),C.setClearColor(Rt,at),lt!==void 0&&(V.viewport=lt),C.toneMapping=nt}function Sc(A,z,j){let V=z.isScene===!0?z.overrideMaterial:null;for(let G=0,ge=A.length;G<ge;G++){let Se=A[G],{object:me,geometry:Ee,group:Pe}=Se,nt=Se.material;nt.allowOverride===!0&&V!==null&&(nt=V),me.layers.test(j.layers)&&rp(me,z,j,Ee,nt,Pe)}}function rp(A,z,j,V,G,ge){D!==null&&G.isNodeMaterial&&D.setObject(A,G),A.onBeforeRender(C,z,j,V,G,ge),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(C,z,j,V,A,ge),G.transparent===!0&&G.side===Dn&&G.forceSinglePass===!1?(G.side=Vn,G.needsUpdate=!0,C.renderBufferDirect(j,z,V,G,A,ge),G.side=$i,G.needsUpdate=!0,C.renderBufferDirect(j,z,V,G,A,ge),G.side=Dn):C.renderBufferDirect(j,z,V,G,A,ge),A.onAfterRender(C,z,j,V,G,ge)}function wc(A,z,j){z.isScene!==!0&&(z=qn);let V=q.get(A),G=M.state.lights,ge=M.state.shadowsArray,Se=G.state.version,me=le.getParameters(A,G.state,ge,z,j,M.state.lightProbeGridArray),Ee=le.getProgramCacheKey(me),Pe=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,V.fog=z.fog;let nt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=oe.get(A.envMap||V.environment,nt),V.envMapRotation=V.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",Hi),Pe=new Map,V.programs=Pe);let lt=Pe.get(Ee);if(lt!==void 0){if(V.currentProgram===lt&&V.lightsStateVersion===Se)return op(A,me),lt}else me.uniforms=le.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,j,me),A.onBeforeCompile(me,C),lt=le.acquireProgram(me,Ee),Pe.set(Ee,lt),V.uniforms=me.uniforms;let Te=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Te.clippingPlanes=De.uniform),op(A,me),V.needsLights=tx(A),V.lightsStateVersion=Se,V.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.sunLights.value=G.state.sun,Te.sunLightShadows.value=G.state.sunShadow,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.sunShadowMatrix.value=G.state.sunShadowMatrix,Te.sunShadowCascade.value=G.state.sunShadowCascade,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=M.state.lightProbeGridArray.length>0,V.currentProgram=lt,V.uniformsList=null,lt}function ap(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=qa.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function op(A,z){let j=q.get(A);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function $g(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(z.matrixWorld);for(let j=0,V=A.length;j<V;j++){let G=A[j];if(G.texture!==null&&G.boundingBox.containsPoint(b))return G}return null}function Qg(A,z,j,V,G){z.isScene!==!0&&(z=qn),K.resetTextureUnits();let ge=z.fog,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?z.environment:null,me=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:rt.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Pe=oe.get(V.envMap||Se,Ee),nt=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,lt=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!j.morphAttributes.position,Pt=!!j.morphAttributes.normal,pn=!!j.morphAttributes.color,Yt=Pi;V.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Yt=C.toneMapping);let Ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pn=Ht!==void 0?Ht.length:0,Me=q.get(V),zn=M.state.lights;if(bt===!0&&(Wt===!0||A!==Z)){let Xt=A===Z&&V.id===X;De.setState(V,A,Xt)}let gt=!1;V.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==zn.state.version||Me.outputColorSpace!==me||G.isBatchedMesh&&Me.batching===!1||!G.isBatchedMesh&&Me.batching===!0||G.isBatchedMesh&&Me.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Me.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Me.instancing===!1||!G.isInstancedMesh&&Me.instancing===!0||G.isSkinnedMesh&&Me.skinning===!1||!G.isSkinnedMesh&&Me.skinning===!0||G.isInstancedMesh&&Me.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Me.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Me.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Me.instancingMorph===!1&&G.morphTexture!==null||Me.envMap!==Pe||V.fog===!0&&Me.fog!==ge||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==De.numPlanes||Me.numIntersection!==De.numIntersection)||Me.vertexAlphas!==nt||Me.vertexTangents!==lt||Me.morphTargets!==Te||Me.morphNormals!==Pt||Me.morphColors!==pn||Me.toneMapping!==Yt||Me.morphTargetsCount!==Pn||!!Me.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Me.__version=V.version);let li=Me.currentProgram;gt===!0&&(li=wc(V,z,G),D&&V.isNodeMaterial&&D.onUpdateProgram(V,li,Me));let Vi=!1,Us=!1,ta=!1,Ot=li.getUniforms(),ln=Me.uniforms;if(E.useProgram(li.program)&&(Vi=!0,Us=!0,ta=!0),V.id!==X&&(X=V.id,Us=!0),Me.needsLights){let Xt=$g(M.state.lightProbeGridArray,G);Me.lightProbeGrid!==Xt&&(Me.lightProbeGrid=Xt,Us=!0)}if(Vi||Z!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ot.setValue(k,"projectionMatrix",A.projectionMatrix),Ot.setValue(k,"viewMatrix",A.matrixWorldInverse);let Os=Ot.map.cameraPosition;Os!==void 0&&Os.setValue(k,$t.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Ot.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ot.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Us=!0,ta=!0)}if(Me.needsLights&&(zn.state.sunShadowMap.length>0&&Ot.setValue(k,"sunShadowMap",zn.state.sunShadowMap,K),zn.state.directionalShadowMap.length>0&&Ot.setValue(k,"directionalShadowMap",zn.state.directionalShadowMap,K),zn.state.spotShadowMap.length>0&&Ot.setValue(k,"spotShadowMap",zn.state.spotShadowMap,K),zn.state.pointShadowMap.length>0&&Ot.setValue(k,"pointShadowMap",zn.state.pointShadowMap,K)),G.isSkinnedMesh){Ot.setOptional(k,G,"bindMatrix"),Ot.setOptional(k,G,"bindMatrixInverse");let Xt=G.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ot.setValue(k,"boneTexture",Xt.boneTexture,K))}G.isBatchedMesh&&(Ot.setOptional(k,G,"batchingTexture"),Ot.setValue(k,"batchingTexture",G._matricesTexture,K),Ot.setOptional(k,G,"batchingIdTexture"),Ot.setValue(k,"batchingIdTexture",G._indirectTexture,K),Ot.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&Ot.setValue(k,"batchingColorTexture",G._colorsTexture,K));let zs=j.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0)&&O.update(G,j,li),(Us||Me.receiveShadow!==G.receiveShadow)&&(Me.receiveShadow=G.receiveShadow,Ot.setValue(k,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&z.environment!==null&&(ln.envMapIntensity.value=z.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=KM()),Us){if(Ot.setValue(k,"toneMappingExposure",C.toneMappingExposure),Me.needsLights&&ex(ln,ta),ge&&V.fog===!0&&Le.refreshFogUniforms(ln,ge),Le.refreshMaterialUniforms(ln,V,ne,Y,M.state.transmissionRenderTarget[A.id]),Me.needsLights&&Me.lightProbeGrid){let Xt=Me.lightProbeGrid;ln.probesSH.value=Xt.texture,ln.probesMin.value.copy(Xt.boundingBox.min),ln.probesMax.value.copy(Xt.boundingBox.max),ln.probesResolution.value.copy(Xt.resolution)}qa.upload(k,ap(Me),ln,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qa.upload(k,ap(Me),ln,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ot.setValue(k,"center",G.center),Ot.setValue(k,"modelViewMatrix",G.modelViewMatrix),Ot.setValue(k,"normalMatrix",G.normalMatrix),Ot.setValue(k,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let Xt=V.uniformsGroups;for(let Os=0,na=Xt.length;Os<na;Os++){let lp=Xt[Os];re.update(lp,li),re.bind(lp,li)}}return li}function ex(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function tx(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(A,z,j){let V=q.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=z,q.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let j=q.get(A);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,j=0){ie=A,B=z,W=j;let V=null,G=!1,ge=!1;if(A){let me=q.get(A);if(me.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(k.FRAMEBUFFER,me.__webglFramebuffer),ee.copy(A.viewport),_e.copy(A.scissor),we=A.scissorTest,E.viewport(ee),E.scissor(_e),E.setScissorTest(we),X=-1;return}else if(me.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(me.__hasExternalTextures)K.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let nt=A.depthTexture;if(me.__boundDepthTexture!==nt){if(nt!==null&&q.has(nt)&&(A.width!==nt.image.width||A.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}let Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);let Pe=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pe[z])?V=Pe[z][j]:V=Pe[z],G=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?V=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Pe)?V=Pe[j]:V=Pe,ee.copy(A.viewport),_e.copy(A.scissor),we=A.scissorTest}else ee.copy(ye).multiplyScalar(ne).floor(),_e.copy(Ze).multiplyScalar(ne).floor(),we=an;if(j!==0&&(V=F),E.bindFramebuffer(k.FRAMEBUFFER,V)&&E.drawBuffers(A,V),E.viewport(ee),E.scissor(_e),E.setScissorTest(we),G){let me=q.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,me.__webglTexture,j)}else if(ge){let me=z;for(let Ee=0;Ee<A.textures.length;Ee++){let Pe=q.get(A.textures[Ee]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ee,Pe.__webglTexture,j,me)}}else if(A!==null&&j!==0){let me=q.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,me.__webglTexture,j)}X=-1};function cp(A){let z=q.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=L.textureFormatReadable(A.format),z.__typeReadable=L.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,j,V,G,ge,Se,me=0){if(!(A&&A.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){E.bindFramebuffer(k.FRAMEBUFFER,Ee);try{let Pe=A.textures[me],nt=Pe.format,lt=Pe.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+me);let Te=cp(Pe);if(Te.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-V&&j>=0&&j<=A.height-G&&k.readPixels(z,j,V,G,de.convert(nt),de.convert(lt),ge)}finally{let Pe=ie!==null?q.get(ie).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,z,j,V,G,ge,Se,me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(z>=0&&z<=A.width-V&&j>=0&&j<=A.height-G){E.bindFramebuffer(k.FRAMEBUFFER,Ee);let Pe=A.textures[me],nt=Pe.format,lt=Pe.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+me);let Te=cp(Pe);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Pt),k.bufferData(k.PIXEL_PACK_BUFFER,ge.byteLength,k.STREAM_READ),k.readPixels(z,j,V,G,de.convert(nt),de.convert(lt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let pn=ie!==null?q.get(ie).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,pn);let Yt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Im(k,Yt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Pt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ge),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Pt),k.deleteSync(Yt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,j=0){let V=Math.pow(2,-j),G=Math.floor(A.image.width*V),ge=Math.floor(A.image.height*V),Se=z!==null?z.x:0,me=z!==null?z.y:0;K.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,Se,me,G,ge),E.unbindTexture()},this.copyTextureToTexture=function(A,z,j=null,V=null,G=0,ge=0){let Se,me,Ee,Pe,nt,lt,Te,Pt,pn,Yt=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(j!==null)Se=j.max.x-j.min.x,me=j.max.y-j.min.y,Ee=j.isBox3?j.max.z-j.min.z:1,Pe=j.min.x,nt=j.min.y,lt=j.isBox3?j.min.z:0;else{let ln=Math.pow(2,-G);Se=Math.floor(Yt.width*ln),me=Math.floor(Yt.height*ln),A.isDataArrayTexture?Ee=Yt.depth:A.isData3DTexture?Ee=Math.floor(Yt.depth*ln):Ee=1,Pe=0,nt=0,lt=0}V!==null?(Te=V.x,Pt=V.y,pn=V.z):(Te=0,Pt=0,pn=0);let Ht=de.convert(z.format),Pn=de.convert(z.type),Me;z.isData3DTexture?(K.setTexture3D(z,0),Me=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(K.setTexture2DArray(z,0),Me=k.TEXTURE_2D_ARRAY):(K.setTexture2D(z,0),Me=k.TEXTURE_2D),E.activeTexture(k.TEXTURE0),E.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);let zn=E.getParameter(k.UNPACK_ROW_LENGTH),gt=E.getParameter(k.UNPACK_IMAGE_HEIGHT),li=E.getParameter(k.UNPACK_SKIP_PIXELS),Vi=E.getParameter(k.UNPACK_SKIP_ROWS),Us=E.getParameter(k.UNPACK_SKIP_IMAGES);E.pixelStorei(k.UNPACK_ROW_LENGTH,Yt.width),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt.height),E.pixelStorei(k.UNPACK_SKIP_PIXELS,Pe),E.pixelStorei(k.UNPACK_SKIP_ROWS,nt),E.pixelStorei(k.UNPACK_SKIP_IMAGES,lt);let ta=A.isDataArrayTexture||A.isData3DTexture,Ot=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let ln=q.get(A),zs=q.get(z),Xt=q.get(ln.__renderTarget),Os=q.get(zs.__renderTarget);E.bindFramebuffer(k.READ_FRAMEBUFFER,Xt.__webglFramebuffer),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let na=0;na<Ee;na++)ta&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,q.get(A).__webglTexture,G,lt+na),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,q.get(z).__webglTexture,ge,pn+na)),k.blitFramebuffer(Pe,nt,Se,me,Te,Pt,Se,me,k.DEPTH_BUFFER_BIT,k.NEAREST);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||q.has(A)){let ln=q.get(A),zs=q.get(z);E.bindFramebuffer(k.READ_FRAMEBUFFER,I),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let Xt=0;Xt<Ee;Xt++)ta?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,G,lt+Xt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,G),Ot?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,zs.__webglTexture,ge,pn+Xt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zs.__webglTexture,ge),G!==0?k.blitFramebuffer(Pe,nt,Se,me,Te,Pt,Se,me,k.COLOR_BUFFER_BIT,k.NEAREST):Ot?k.copyTexSubImage3D(Me,ge,Te,Pt,pn+Xt,Pe,nt,Se,me):k.copyTexSubImage2D(Me,ge,Te,Pt,Pe,nt,Se,me);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ot?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Me,ge,Te,Pt,pn,Se,me,Ee,Ht,Pn,Yt.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Me,ge,Te,Pt,pn,Se,me,Ee,Ht,Yt.data):k.texSubImage3D(Me,ge,Te,Pt,pn,Se,me,Ee,Ht,Pn,Yt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ge,Te,Pt,Se,me,Ht,Pn,Yt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ge,Te,Pt,Yt.width,Yt.height,Ht,Yt.data):k.texSubImage2D(k.TEXTURE_2D,ge,Te,Pt,Se,me,Ht,Pn,Yt);E.pixelStorei(k.UNPACK_ROW_LENGTH,zn),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt),E.pixelStorei(k.UNPACK_SKIP_PIXELS,li),E.pixelStorei(k.UNPACK_SKIP_ROWS,Vi),E.pixelStorei(k.UNPACK_SKIP_IMAGES,Us),ge===0&&z.generateMipmaps&&k.generateMipmap(Me),E.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){B=0,W=0,ie=null,E.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};function Ad(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},d=[],h=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let y=0,S=o.length;y<S;y++){let b=o[y],v=i.attributes[b];l[b]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let M=i.morphAttributes[b];M&&(c[b]||(c[b]=[]),M.forEach((T,_)=>{let w=new T.array.constructor(T.count*T.itemSize);c[b][_]=new T.constructor(w,T.itemSize,T.normalized)}))}let f=e*.5,p=Math.log10(1/e),x=Math.pow(10,p),g=f*x;for(let y=0;y<r;y++){let S=n?n.getX(y):y,b="";for(let v=0,M=o.length;v<M;v++){let T=o[v],_=i.getAttribute(T),w=_.itemSize;for(let C=0;C<w;C++)b+=`${Math.trunc(_[h[C]](S)*x+g)},`}if(b in t)d.push(t[b]);else{for(let v=0,M=o.length;v<M;v++){let T=o[v],_=i.getAttribute(T),w=i.morphAttributes[T],C=_.itemSize,P=l[T],D=c[T];for(let F=0;F<C;F++){let I=h[F],U=u[F];if(P[U](a,_[I](S)),w)for(let B=0,W=w.length;B<W;B++)D[B][U](a,w[B][I](S))}}t[b]=a,d.push(a),a++}}let m=i.clone();for(let y in i.attributes){let S=l[y];if(m.setAttribute(y,new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)),y in c)for(let b=0;b<c[y].length;b++){let v=c[y][b];m.morphAttributes[y][b]=new v.constructor(v.array.slice(0,a*v.itemSize),v.itemSize,v.normalized)}}return m.setIndex(d),m}function Rd(i,e){if(e===nd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Va||e===Zo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Va)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function u0(i){let e=new Map,t=new Map,n=i.clone();return d0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function d0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)d0(i.children[n],e.children[n],t)}var ic=class extends Zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Nd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new xh(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new xh(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Kd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Es.extractUrlBase(e);a=Es.resolveURL(c,this.path)}else a=Es.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Da(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===x0){try{a[ot.KHR_BINARY_GLTF]=new Yd(e)}catch(h){s&&s(h);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new nf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){let h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){let h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:a[h]=new Dd;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[h]=new Jd(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[h]=new Zd;break;case ot.KHR_MESH_QUANTIZATION:a[h]=new $d;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function JM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function dn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ld=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,d=new Ue(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],kn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qs(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bo(d),c.distance=h;break;case"spot":c=new ko(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ns(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Dd=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Bn}extendParams(e,t,n){let s=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,jt))}return Promise.all(s)}},Fd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Nd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(r,r)}return Promise.all(s)}},Ud=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},zd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Od=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],kn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,jt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},kd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Bd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(r[0],r[1],r[2],kn),Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Vd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(r[0],r[1],r[2],kn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,jt)),Promise.all(s)}},Gd=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Wd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},qd=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Xd=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},jd=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},xh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,d=s.count,h=s.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(f),d,h,u,s.mode,s.filter),f})})}else return null}},Kd=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==pi.TRIANGLES&&c.mode!==pi.TRIANGLE_STRIP&&c.mode!==pi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,f=[];for(let p of h){let x=new Xe,g=new R,m=new xt,y=new R(1,1,1),S=new Ar(p.geometry,p.material,u);for(let v=0;v<u;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,x.compose(g,m,y));let b=null;for(let v in l)if(v==="_COLOR_0"){let M=l[v];S.instanceColor=new ys(M.array,M.itemSize,M.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(b===null){let T=S.geometry;b=new St,b.name=T.name;for(let _ in T.attributes)b.setAttribute(_,T.attributes[_]);for(let _ in T.morphAttributes)b.morphAttributes[_]=T.morphAttributes[_];T.index!==null&&b.setIndex(T.index),b.morphTargetsRelative=T.morphTargetsRelative;for(let _ of T.groups)b.addGroup(_.start,_.count,_.materialIndex);T.boundingBox!==null&&(b.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(b.boundingSphere=T.boundingSphere.clone()),b.drawRange.start=T.drawRange.start,b.drawRange.count=T.drawRange.count,b.userData=Object.assign({},T.userData),S.geometry=b}let M=l[v];b.setAttribute(v,new ys(M.array,M.itemSize,M.normalized))}Kt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}},x0="glTF",nc=12,f0={JSON:1313821514,BIN:5130562},Yd=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,nc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==x0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-nc,r=new DataView(e,nc),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===f0.JSON){let c=new Uint8Array(e,nc+a,o);this.content=n.decode(c)}else if(l===f0.BIN){let c=nc+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Jd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let d in a){let h=ef[d]||d.toLowerCase();o[h]=a[d]}for(let d in e.attributes){let h=ef[d]||d.toLowerCase();if(a[d]!==void 0){let u=n.accessors[e.attributes[d]],f=Ka[u.componentType];c[h]=f.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){s.decodeDracoFile(d,function(f){for(let p in f.attributes){let x=f.attributes[p],g=l[p];g!==void 0&&(x.normalized=g)}h(f)},o,c,kn,u)})})}},Zd=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},$d=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},bh=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=s-t,h=(n-t)/d,u=h*h,f=u*h,p=e*c,x=p-c,g=-2*f+3*u,m=f-u,y=1-g,S=m-u+h;for(let b=0;b!==o;b++){let v=a[x+b+o],M=a[x+b+l]*d,T=a[p+b+o],_=a[p+b]*d;r[b]=y*v+S*M+g*T+m*_}return r}},ZM=new xt,Qd=class extends bh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ZM.fromArray(r).normalize().toArray(r),r}},pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ka={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},p0={9728:un,9729:tn,9984:El,9985:ka,9986:Nr,9987:si},m0={33071:ui,33648:ya,10497:Xn},Cd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ef={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ir={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$M={CUBICSPLINE:void 0,LINEAR:wr,STEP:Sr},Pd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function QM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new sn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),i.DefaultMaterial}function Or(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ns(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,d=e.length;c<d;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){let h=e[c];if(n){let u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(u)}if(s){let u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let d=c[0],h=c[1],u=c[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function tS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nS(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Id(t.attributes):e=i.indices+":"+Id(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Id(i.targets[n]);return e}function Id(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function tf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var sS=new Xe,nf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new JM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Pr(this.options.manager):this.textureLoader=new Ho(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Da(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Or(r,o,s),ns(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,d]of a.children.entries())r(d,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Es.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Cd[s.type],o=Ka[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new et(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Cd[s.type],c=Ka[s.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==h){let m=Math.floor(u/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,S=t.cache.get(y);S||(x=new c(o,m*f,s.count*f/d),S=new Aa(x,f/d),t.cache.add(y,S)),g=new Ra(S,l,u%f/d,p)}else o===null?x=new c(s.count*l):x=new c(o,u,s.count*l),g=new et(x,l,p);if(s.sparse!==void 0){let m=Cd.SCALAR,y=Ka[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,v=new y(a[1],S,s.sparse.count*m),M=new c(a[2],b,s.sparse.count*l);o!==null&&(g=new et(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,_=v.length;T<_;T++){let w=v[T];if(g.setX(w,M[T*l]),l>=2&&g.setY(w,M[T*l+1]),l>=3&&g.setZ(w,M[T*l+2]),l>=4&&g.setW(w,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return d.magFilter=p0[u.magFilter]||tn,d.minFilter=p0[u.minFilter]||si,d.wrapS=m0[u.wrapS]||Xn,d.wrapT=m0[u.wrapT]||Xn,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==un&&d.minFilter!==tn,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let u=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let d=Promise.resolve(l).then(function(h){return new Promise(function(u,f){let p=u;t.isImageBitmapLoader===!0&&(p=function(x){let g=new gn(x);g.needsUpdate=!0,u(g)}),t.load(Es.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ns(h,a),h.userData.mimeType=a.mimeType||iS(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ji,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Pa,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return sn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let h=s[ot.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ue(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],kn),o.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,jt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Dn);let d=r.alphaMode||Pd.OPAQUE;if(d===Pd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Pd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Bn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Bn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Bn){let h=r.emissiveFactor;o.emissive=new Ue().setRGB(h[0],h[1],h[2],kn)}return r.emissiveTexture!==void 0&&a!==Bn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,jt)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),ns(h,r),t.associations.set(h,{materials:e}),r.extensions&&Or(s,h,r),h})}createUniqueName(e){let t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return g0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],d=nS(c),h=s[d];if(h)a.push(h.promise);else{let u;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=g0(new St,c,t),c.mode===pi.TRIANGLE_STRIP?u=u.then(f=>Rd(f,Zo)):c.mode===pi.TRIANGLE_FAN&&(u=u.then(f=>Rd(f,Va))),s[d]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let d=a[l].material===void 0?QM(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let f=0,p=d.length;f<p;f++){let x=d[f],g=a[f],m,y=c[f];if(g.mode===pi.TRIANGLES||g.mode===pi.TRIANGLE_STRIP||g.mode===pi.TRIANGLE_FAN||g.mode===void 0){let S=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=S&&b?new js(x,y):new Ye(x,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===pi.LINES)m=new Io(x,y);else if(g.mode===pi.LINE_STRIP)m=new Rr(x,y);else if(g.mode===pi.LINE_LOOP)m=new Lo(x,y);else if(g.mode===pi.POINTS)m=new Ki(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&tS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ns(m,r),g.extensions&&Or(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Or(s,h[0],r),h[0];let u=new Mt;r.extensions&&Or(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new hn(od.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new $s(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ns(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,d=a.length;c<d;c++){let h=a[c];if(h){o.push(h);let u=new Xe;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ys(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],d=[];for(let h=0,u=s.channels.length;h<u;h++){let f=s.channels[h],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(p),d.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){let u=h[0],f=h[1],p=h[2],x=h[3],g=h[4],m=[];for(let S=0,b=u.length;S<b;S++){let v=u[S],M=f[S],T=p[S],_=x[S],w=g[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let C=n._createAnimationTracks(v,M,T,_,w);if(C)for(let P=0;P<C.length;P++)m.push(C[P])}let y=new zo(r,void 0,m);return ns(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,d=o.length;c<d;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,sS)});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);if(d.userData.pivot!==void 0&&h.length>0){let f=d.userData.pivot,p=h[0];d.pivot=new R().fromArray(f),d.position.x-=f[0],d.position.y-=f[1],d.position.z-=f[2],p.position.set(0,0,0),delete d.userData.pivot}return d})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(r.isBone===!0?d=new bs:c.length>1?d=new Mt:c.length===1?d=c[0]:d=new Kt,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(r.name&&(d.userData.name=r.name,d.name=a),ns(d,r),r.extensions&&Or(n,d,r),r.matrix!==void 0){let h=new Xe;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!s.associations.has(d))s.associations.set(d,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(d);s.associations.set(d,{...h})}return s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Mt;n.name&&(r.name=s.createUniqueName(n.name)),ns(r,n),n.extensions&&Or(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,h=l.length;d<h;d++){let u=l[d];u.parent!==null?r.add(u0(u)):r.add(u)}let c=d=>{let h=new Map;for(let[u,f]of s.associations)(u instanceof Yn||u instanceof gn)&&h.set(u,f);return d.traverse(u=>{let f=s.associations.get(u);f!=null&&h.set(u,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ir[r.path]===ir.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let d;switch(ir[r.path]){case ir.weights:d=Ms;break;case ir.rotation:d=Ss;break;case ir.translation:case ir.scale:d=Zs;break;default:n.itemSize===1?d=Ms:d=Zs;break}let h=s.interpolation!==void 0?$M[s.interpolation]:wr,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new d(l[f]+"."+ir[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=tf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ss?Qd:bh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function rS(i,e,t){let n=e.attributes,s=new nn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let d=tf(Ka[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,d=r.length;c<d;c++){let h=r[c];if(h.POSITION!==void 0){let u=t.json.accessors[h.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let x=tf(Ka[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Kn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function g0(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=ef[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return rt.workingColorSpace!==kn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),ns(i,e),rS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?eS(i,e.targets,t):i})}var sf=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var y=new Uint8Array(m.length),S=0;S<m.length;++S){var b=m.charCodeAt(S);y[S]=b>96?b-97:b>64?b-39:b+4}for(var v=0,S=0;S<m.length;++S)y[v++]=y[S]<60?n[y[S]]:(y[S]-60)*64+y[++S];return y.buffer.slice(0,v)}function l(m,y,S,b,v,M,T){var _=m.exports.sbrk,w=b+3&-4,C=_(w*v),P=_(M.length),D=new Uint8Array(m.exports.memory.buffer);D.set(M,P);var F=y(C,b,v,P,M.length);if(F==0&&T&&T(C,w,v),S.set(D.subarray(C,C+b*v)),_(C-_(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],u=0;function f(m){var y={object:new Worker(m),pending:0,requests:{}};return y.object.onmessage=function(S){var b=S.data;y.pending-=b.count,y.requests[b.id][b.action](b.value),delete y.requests[b.id]},y}function p(m){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),S=new Blob([y],{type:"text/javascript"}),b=URL.createObjectURL(S),v=h.length;v<m;++v)h[v]=f(b);for(var v=m;v<h.length;++v)h[v].object.postMessage({});h.length=m,URL.revokeObjectURL(b)}function x(m,y,S,b,v){for(var M=h[0],T=1;T<h.length;++T)h[T].pending<M.pending&&(M=h[T]);return new Promise(function(_,w){var C=new Uint8Array(S),P=++u;M.pending+=m,M.requests[P]={resolve:_,reject:w},M.object.postMessage({id:P,count:m,size:y,source:C,mode:b,filter:v},[C.buffer])})}function g(m){var y=m.data;self.ready.then(function(S){if(!y.id)return self.close();try{var b=new Uint8Array(y.count*y.size);l(S,S.exports[y.mode],b,y.count,y.size,y.source,S.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:y.id,count:y.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,y,S,b,v){l(r,r.exports.meshopt_decodeVertexBuffer,m,y,S,b,r.exports[c[v]])},decodeIndexBuffer:function(m,y,S,b){l(r,r.exports.meshopt_decodeIndexBuffer,m,y,S,b)},decodeIndexSequence:function(m,y,S,b){l(r,r.exports.meshopt_decodeIndexSequence,m,y,S,b)},decodeGltfBuffer:function(m,y,S,b,v,M){l(r,r.exports[d[v]],m,y,S,b,r.exports[c[M]])},decodeGltfBufferAsync:function(m,y,S,b,v){return h.length>0?x(m,y,S,d[b],c[v]):a.then(function(){var M=new Uint8Array(m*y);return l(r,r.exports[d[b]],M,m,y,S,r.exports[c[v]]),M})}}})();var sc=new R;function mi(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;sc.copy(e),sc[n]=0,sc.normalize();let c=.5*a/(a+o),d=1-sc.angleTo(i)/l;return Math.sign(sc[t])===1?d*c:o/(a+o)+c+c*(1-d)}var yh=class i extends di{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new R,c=new R,d=new R(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,x=new R,g=.5/a;for(let m=0,y=0;m<h.length;m+=3,y+=2)switch(l.fromArray(h,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[m+0]=d.x*Math.sign(l.x)+c.x*r,h[m+1]=d.y*Math.sign(l.y)+c.y*r,h[m+2]=d.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[y+0]=mi(x,c,"z","y",r,n),f[y+1]=1-mi(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-mi(x,c,"z","y",r,n),f[y+1]=1-mi(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-mi(x,c,"x","z",r,e),f[y+1]=mi(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-mi(x,c,"x","z",r,e),f[y+1]=1-mi(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-mi(x,c,"x","y",r,e),f[y+1]=1-mi(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=mi(x,c,"x","y",r,e),f[y+1]=1-mi(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Ya=i=>{try{navigator.vibrate&&navigator.vibrate(i)}catch{}};function b0(i){let e=i.querySelector("i"),t={x:0,y:0,active:!1},n=null,s=0,r=0,a=1,o=!1,l=!1,c=(h,u)=>{let f=Math.hypot(h,u),p=f>a?a/f:1;h*=p,u*=p,f=Math.min(f,a),e.style.transform=`translate(${h}px, ${u}px)`;let x=f/a,g=.12,m=x<g?0:(x-g)/(1-g),y=m*m*.35+m*.65;t.x=f?h/f*y:0,t.y=f?-u/f*y:0;let S=x>=g,b=x>.97;S&&!o&&Ya(8),b&&!l&&Ya(18),o=S,l=b};i.addEventListener("pointerdown",h=>{if(n!==null)return;h.preventDefault(),n=h.pointerId;try{i.setPointerCapture(n)}catch{}let u=i.getBoundingClientRect();s=u.left+u.width/2,r=u.top+u.height/2,a=u.width*.36,t.active=!0,i.classList.add("on"),c(h.clientX-s,h.clientY-r)}),i.addEventListener("pointermove",h=>{h.pointerId===n&&(h.preventDefault(),c(h.clientX-s,h.clientY-r))});let d=h=>{h.pointerId===n&&(n=null,t.active=!1,i.classList.remove("on"),e.style.transition="transform .15s ease-out",c(0,0),setTimeout(()=>{e.style.transition=""},160),o=l=!1)};return["pointerup","pointercancel","lostpointercapture"].forEach(h=>i.addEventListener(h,d)),t}var _0={low:{pr:1,aa:!1,shadow:1024,shadowR:.8,grid:1.45,rocks:.45,reach:[380,90,55],scanMid:!1,devils:0},medium:{pr:1.25,aa:!1,shadow:1024,shadowR:1,grid:1.25,rocks:.55,reach:[480,110,60],scanMid:!1,devils:0},high:{pr:2,aa:!0,shadow:2048,shadowR:1,grid:1,rocks:1,reach:[900,210,110],scanMid:!0,devils:2},ultra:{pr:2,aa:!0,shadow:4096,shadowR:1.35,grid:.82,rocks:1.35,reach:[1400,300,150],scanMid:!0,devils:3}},aS=typeof document<"u"&&document.documentElement.classList.contains("touch");function rc(){try{return localStorage.getItem("jt-detail")||"auto"}catch{return"auto"}}function v0(i){try{localStorage.setItem("jt-detail",i)}catch{}}var y0=rc(),_h=_0[y0]?y0:aS?"medium":"ultra",sr=_0[_h];var Ts=(()=>{try{return localStorage.getItem("dsa-game-units")==="us"}catch{return!1}})(),rf=3.28084,oS=.621371;var kr=(i,e)=>i.toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),vh=Ts?"mph":"km/h",Mh=i=>Ts?i*oS:i,Sh=(i,e=0)=>`${kr(Mh(i),e)} ${vh}`;var rr=(i,e=0)=>Ts?`${kr(i*rf,e)} ft`:`${kr(i,e)} m`,wh=i=>Ts?i*rf<1e3?`${kr(i*rf,0)} ft`:`${kr(i/1609.344,i<16093?1:0)} mi`:i<1e3?`${kr(i,0)} m`:`${kr(i/1e3,i<1e4?1:0)} km`;var se=i=>document.getElementById(i),bi=1.62,OA=document.documentElement.classList.contains("touch");function as(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var lS=(()=>{let i=as(7),e=new Float32Array(256*256);for(let t=0;t<e.length;t++)e[t]=i();return e})(),Eh=(i,e)=>lS[(i%256+256)%256*256+(e%256+256)%256];function Oh(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Eh(t,n),c=Eh(t+1,n),d=Eh(t,n+1),h=Eh(t+1,n+1);return l+(c-l)*a+(d-l)*o+(l-c-d+h)*a*o}var An=(i,e,t)=>{let n=0,s=.5,r=1;for(let a=0;a<t;a++)n+=s*Oh(i*r,e*r),s*=.5,r*=2.03;return n},Ae=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)},mr=4,M0=.4,hS=1737400,We=600,Tt=243,At=-375,Wn=1.6,Ke=Math.round(2*We/Wn)+1,j0=(i,e,t)=>Math.abs(i-Tt)<We-t&&Math.abs(e-At)<We-t,kh=null;function K0(i,e){if(!kh)return 0;let t=i/250+127.5,n=e/250+127.5,s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=(h,u)=>kh[Math.max(0,Math.min(255,u))*256+Math.max(0,Math.min(255,h))]/4,c=(h,u,f,p,x)=>u+.5*x*(f-h+x*(2*h-5*u+4*f-p+x*(3*(u-f)+p-h))),d=h=>c(l(s-1,h),l(s,h),l(s+1,h),l(s+2,h),a);return c(d(r-1),d(r),d(r+1),d(r+2),o)}var Y0=0;function Vr(i,e){let t=i*mr,n=e*mr;return(K0(t,n)-Y0)*M0-(t*t+n*n)/(2*hS)*M0}var oi=[],Gn=[],ki={x:0,z:0},ut={x:-158,z:62,R:55};{let i=as(1972),e=(a,o,l,c)=>oi.push({x:a,z:o,R:l,fresh:c,depth:l*(.12+.26*c),rim:l*(.025+.06*c)});[[48,-18,13,1],[-30,64,17,.95],[96,52,21,.9],[20,120,11,1],[-40,-75,24,.85]].forEach(a=>e(...a));let t=373,n=-375,s=470,r=(a,o)=>Math.abs(a-t)<s&&Math.abs(o-n)<s;for(let a=0;a<2e3;a++){let o=1.2/Math.sqrt(1-i()*.99859375),l=t+(i()*2-1)*(s-10),c=n+(i()*2-1)*(s-10);Math.hypot(l,c)<14||Math.hypot(l+12,c-4)<14||e(l,c,o,Math.pow(i(),2.2))}for(let a=0;a<1150;a++){let o=t+(i()*2-1)*(s-6),l=n+(i()*2-1)*(s-6);Math.hypot(o,l)<10||Gn.push({x:o,z:l,s:.12+Math.pow(i(),3)*.7,yaw:i()*6.28,k:i()})}{let a=as(2112);for(let o=0;o<1060;o++){let l=1.2/Math.sqrt(1-a()*.99859375),c=Tt+(a()*2-1)*(We-10),d=At+(a()*2-1)*(We-10),h=Math.pow(a(),2.2);r(c,d)||Math.hypot(c+12,d-4)<14||Math.hypot(c-ut.x,d-ut.z)<ut.R*1.3||e(c,d,l,h)}for(let o=0;o<600;o++){let l=Tt+(a()*2-1)*(We-6),c=At+(a()*2-1)*(We-6),d=.12+Math.pow(a(),3)*.7,h=a()*6.28,u=a();r(l,c)||Gn.push({x:l,z:c,s:d,yaw:h,k:u})}}for(let a of oi){if(a.fresh<.55||a.R<4)continue;let o=Math.round(a.R*a.fresh*2.2);for(let l=0;l<o;l++){let c=i()*6.2832,d=a.R*(.85+Math.pow(i(),1.7)*1.3),h=a.x+Math.cos(c)*d,u=a.z+Math.sin(c)*d;!j0(h,u,6)||Math.hypot(h,u)<10||Gn.push({x:h,z:u,s:.2+Math.pow(i(),2.2)*Math.min(1.6,a.R*.07),yaw:i()*6.28,k:i()})}}{let a=as(17),o=421.75+38,l=-259;e(o,l,50,.5),ki.x=o,ki.z=l;for(let c=0;c<170;c++){let d=a()*6.2832,h=50*(.86+Math.pow(a(),1.5)*1.1);Gn.push({x:o+Math.cos(d)*h,z:l+Math.sin(d)*h,s:.07+Math.pow(a(),4)*.95,yaw:a()*6.28,k:a()})}}for(let a=oi.length-1;a>=0;a--)Math.hypot(oi[a].x-ut.x,oi[a].z-ut.z)<ut.R*1.25+oi[a].R*.5&&oi.splice(a,1);{let a=as(74);oi.push({x:ut.x,z:ut.z,R:ut.R,fresh:.5,depth:14,rim:2.2});for(let c=0;c<70;c++){let d=a()*6.2832,h=ut.R*(.9+Math.pow(a(),1.5)*.8);Gn.push({x:ut.x+Math.cos(d)*h,z:ut.z+Math.sin(d)*h,s:.08+Math.pow(a(),4)*.8,yaw:a()*6.28,k:a()})}for(let c=0;c<90;c++){let d=a()*6.2832,h=ut.R*(Math.pow(a(),.7)*.6);Gn.push({x:ut.x+Math.cos(d)*h,z:ut.z+Math.sin(d)*h,s:.25+Math.pow(a(),2.5)*1.2*(1.2-h/ut.R),yaw:a()*6.28,k:a(),bury:.4})}let o=ut.x+Math.cos(2.27)*ut.R*1.13,l=ut.z+Math.sin(2.27)*ut.R*1.13;Gn.push({x:o,z:l,s:1.7,yaw:.6,k:.3,bury:.22});for(let c=0;c<8;c++){let d=a()*6.2832,h=2.5+a()*7;Gn.push({x:o+Math.cos(d)*h,z:l+Math.sin(d)*h,s:.15+Math.pow(a(),2)*.55,yaw:a()*6.28,k:a(),bury:.4})}}}var uS=[[2.4,1.05,.05,.035,1],[2.47,1,.02,.018,.55]];function J0(i,e){let t=i-ut.x,n=e-ut.z,s=Math.hypot(t,n)/ut.R;if(s<.75||s>1.35)return 0;let r=Math.atan2(n,t),a=0;for(let[o,l,c,d,h]of uS){let u=r-o;u-=6.2832*Math.round(u/6.2832),a=Math.max(a,h*Math.exp(-(u*u)/(2*c*c)-(s-l)*(s-l)/(2*d*d)))}return a<.02?0:Ae(.12,.6,a*(.5+1*An(i/1.6+3,e/1.6-5,3)))}var Z0=(i,e,t)=>(t[0]=i*(1+.62*e),t[1]=i*(1+.04*e),t[2]=i*(1-.5*e),t),os=16,ao=new Map;function dS(){oi.forEach(i=>{let e=i.R*2.2;for(let t=Math.floor((i.x-e)/os);t<=Math.floor((i.x+e)/os);t++)for(let n=Math.floor((i.z-e)/os);n<=Math.floor((i.z+e)/os);n++){let s=t+","+n;ao.has(s)||ao.set(s,[]),ao.get(s).push(i)}})}function $0(i,e){let t=0;for(let n of ao.get(Math.floor(i/os)+","+Math.floor(e/os))||[]){let s=i-n.x,r=e-n.z;if(s>n.R*2.2||s<-n.R*2.2||r>n.R*2.2||r<-n.R*2.2)continue;let a=Math.hypot(s,r)/n.R;t+=a<1?n.rim+(-n.depth-n.rim)*(1-a*a)*(1-a*a*.35):n.rim*Math.exp(-(((a-1)/.42)**2))}return t}var Is=new Float32Array(Ke*Ke),Gr=new Float32Array(Ke*Ke),on=new Float32Array(Ke*Ke);function Q0(i,e){let t=0;for(let n of ao.get(Math.floor(i/os)+","+Math.floor(e/os))||[]){let s=Math.hypot(i-n.x,e-n.z)/n.R;s<2.1&&(t=Math.max(t,n.fresh*n.fresh*(s<1?.55:Math.exp(-(((s-1)/.5)**2)))))}return .9+.2*(An(i/35+7,e/35,3)-.5)+.45*t}function fS(i,e){let t=(i-Tt+2500)/20,n=(e-At+2500)/20,s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=(f,p)=>Vr(Tt-2500+f*20,At-2500+p*20),c=l(s,r),d=l(s,r+1),h=l(s+1,r);if(a+o<=1)return c+(h-c)*a+(d-c)*o-.15;let u=l(s+1,r+1);return u+(d-u)*(1-a)+(h-u)*(1-o)-.15}function pS(){dS();for(let d=0;d<Ke;d++)for(let h=0;h<Ke;h++){let u=Tt-We+h*Wn,f=At-We+d*Wn,p=Ae(0,40,We-Math.max(Math.abs(u-Tt),Math.abs(f-At))),x=Vr(u,f),g=p<1?fS(u,f):x;on[d*Ke+h]=g+p*(x-g)+p*((An(u/60,f/60,4)-.5)*2.2+(An(u/9+40,f/9,3)-.5)*.35),Is[d*Ke+h]=on[d*Ke+h]+p*$0(u,f),Gr[d*Ke+h]=Q0(u,f)}let i=(d,h)=>{for(let u=0;u<Ke;u++)for(let f=0;f<Ke;f++){let p=Tt-We+f*Wn-st.x,x=At-We+u*Wn-st.z,g=Math.hypot(p,x);g<d&&h(u*Ke+f,p,x,g)}},e=0,t=0,n=0,s=0,r=0,a=0,o=0,l=0,c=0;if(i(14,(d,h,u)=>{let f=Is[d];e++,t+=h,n+=u,s+=h*h,r+=u*u,a+=h*u,o+=f,l+=h*f,c+=u*f}),e>10){let d=[[e,t,n],[t,s,a],[n,a,r]],h=[o,l,c],u=y=>y[0][0]*(y[1][1]*y[2][2]-y[1][2]*y[2][1])-y[0][1]*(y[1][0]*y[2][2]-y[1][2]*y[2][0])+y[0][2]*(y[1][0]*y[2][1]-y[1][1]*y[2][0]),f=u(d),p=y=>d.map((S,b)=>S.map((v,M)=>M===y?h[b]:v)),[x,g,m]=[0,1,2].map(y=>u(p(y))/f);st.plane={a:x,b:g,c:m},i(22,(y,S,b,v)=>{let M=Ae(22,6,v),T=x+g*S+m*b;Is[y]+=(T-Is[y])*M,on[y]+=(T-on[y])*M})}}var Ph=new Map,Bh=8;function mS(){for(let i=Gn.length-1;i>=0;i--)Math.hypot(Gn[i].x-st.x,Gn[i].z-st.z)<7&&Gn.splice(i,1);Gn.forEach((i,e)=>{let t=Math.floor(i.x/Bh)+","+Math.floor(i.z/Bh);Ph.has(t)||Ph.set(t,[]),Ph.get(t).push(e)})}function gS(i,e){let t=0,n=Math.floor(i/Bh),s=Math.floor(e/Bh);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=Ph.get(n+r+","+(s+a));if(o)for(let l of o){let c=Gn[l],d=((i-c.x)**2+(e-c.z)**2)/(1.6*c.s*c.s);if(d<1){let h=1-d;t=Math.max(t,c.s*Math.max(.5,.66-(c.bury??.62))*h*Math.sqrt(h))}}}return t}function Oi(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var rs=3;function Nf(i,e){let t=(Oh(i/1.7,e/1.7)-.5)*.12+(Oh(i/.55+71,e/.55)-.5)*.04,n=Math.floor(i/rs),s=Math.floor(e/rs);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=n+r,l=s+a;if(Oi(o,l)>.26)continue;let d=.25/Math.sqrt(1-Oi(o+91,l)*(1-(.25/1.5)**2)),h=(o+Oi(o,l+57))*rs,u=(l+Oi(o+13,l+7))*rs,f=Math.hypot(i-h,e-u)/d;if(f>1.8)continue;let p=d*(.05+.09*Oi(o+5,l+3)),x=p*.25;t+=f<1?x+(-p-x)*(1-f*f):x*Math.exp(-(((f-1)/.4)**2))}return t}var cn={cx:0,cz:0,half:48};function eg(i,e){return Ae(cn.half,cn.half-6,Math.max(Math.abs(i-cn.cx),Math.abs(e-cn.cz)))}function Zt(i,e){let t=Math.max(0,Math.min(Ke-1.001,(i-Tt+We)/Wn)),n=Math.max(0,Math.min(Ke-1.001,(e-At+We)/Wn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=Is[r*Ke+s],c=Is[r*Ke+s+1],d=Is[(r+1)*Ke+s],h=Is[(r+1)*Ke+s+1];return l+(c-l)*a+(d-l)*o+(l-c-d+h)*a*o}function tg(i,e){let t=Math.max(0,Math.min(Ke-1.001,(i-Tt+We)/Wn)),n=Math.max(0,Math.min(Ke-1.001,(e-At+We)/Wn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=r*Ke+s;return on[l]+(on[l+1]-on[l])*a+(on[l+Ke]-on[l])*o+(on[l]-on[l+1]-on[l+Ke]+on[l+Ke+1])*a*o+Ae(0,40,We-Math.max(Math.abs(i-Tt),Math.abs(e-At)))*$0(i,e)-Zt(i,e)}function ke(i,e){let t=eg(i,e),n=Zt(i,e)+(t>0?(Nf(i,e)+tg(i,e))*t:0)+gS(i,e);return Xh.length?Math.max(n,AS(i,e)):n}var xS=new R;function vf(i,e){return xS.set(ke(i-.35,e)-ke(i+.35,e),2*.35,ke(i,e-.35)-ke(i,e+.35)).normalize()}var Un=new tc({canvas:se("scene"),antialias:sr.aa,powerPreference:"high-performance"});Un.setPixelRatio(Math.min(sr.pr,devicePixelRatio));Un.outputColorSpace=jt;Un.toneMapping=Go;Un.toneMappingExposure=1.25;Un.shadowMap.enabled=!0;Un.shadowMap.type=Lr;var vt=new Ta;vt.background=new Ue(0);var Qe=new hn(55,1,.1,8e4);function ng(){Un.setSize(innerWidth,innerHeight,!1),Qe.aspect=innerWidth/innerHeight,Qe.updateProjectionMatrix()}addEventListener("resize",ng);ng();var Uf=new R(Math.sin(95*Math.PI/180)*Math.cos(16*Math.PI/180),Math.sin(16*Math.PI/180),-Math.cos(95*Math.PI/180)*Math.cos(16*Math.PI/180)).normalize(),ci=new Qs(16775922,3.4);ci.castShadow=!0;ci.shadow.mapSize.set(sr.shadow,sr.shadow);{let i=30*sr.shadowR;Object.assign(ci.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:1,far:200})}ci.shadow.bias=-6e-4;ci.shadow.normalBias=.04;vt.add(ci,ci.target);vt.add(new Fa(0,7236196,.75));function bS(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=as(3);for(let a=0;a<256;a++)for(let o=0;o<256;o++){let l=(An(o/18,a/18,4)-.5)*40+(s()-.5)*26,c=Math.max(0,Math.min(255,200+l*.7)),d=(a*256+o)*4;n.data[d]=n.data[d+1]=n.data[d+2]=c,n.data[d+3]=255}t.putImageData(n,0,0);let r=new Ci(e);return r.wrapS=r.wrapT=Xn,r.colorSpace=jt,r.anisotropy=8,r}function yS(){let e=new Float32Array(65536),t=as(29);for(let o=0;o<900;o++){let l=t()*256,c=t()*256,d=1.5+Math.pow(t(),3)*9,h=(t()<.6?-1:.6)*d*.25,u=Math.ceil(d*1.6);for(let f=-u;f<=u;f++)for(let p=-u;p<=u;p++){let x=Math.hypot(p,f)/d;if(x>1.6)continue;let g=((Math.round(l)+p)%256+256)%256,m=((Math.round(c)+f)%256+256)%256;e[m*256+g]+=x<1?h*(1-x*x):-h*.2*Math.exp(-(((x-1)/.3)**2))}}for(let o=0;o<256;o++)for(let l=0;l<256;l++)e[o*256+l]+=(An(l/6,o/6,3)-.5)*1.4;let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256);for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=e[o*256+(l+1)%256]-e[o*256+(l+256-1)%256],d=e[(o+1)%256*256+l]-e[(o+256-1)%256*256+l],h=Math.hypot(c,d,2),u=(o*256+l)*4;r.data[u]=128-c/h*127,r.data[u+1]=128+d/h*127,r.data[u+2]=128+2/h*127,r.data[u+3]=255}s.putImageData(r,0,0);let a=new Ci(n);return a.wrapS=a.wrapT=Xn,a.anisotropy=8,a}var Fs=new sn({color:11052189,roughness:1,metalness:0,map:bS(),normalMap:yS(),vertexColors:!0});Fs.normalScale.set(.34,.34);var ig=i=>i.fragmentShader.replace("#include <normal_fragment_maps>",Je.normal_fragment_maps.replace("mapN.xy *= normalScale;","mapN.xy *= normalScale * ( 1.0 - smoothstep( 5.0, 22.0, length( vViewPosition ) ) );")),sg={value:null},_S=i=>{i.uniforms.uRelief=sg,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWxz = (modelMatrix * vec4(transformed, 1.0)).xz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWxz; uniform sampler2D uRelief;`).replace("#include <normal_fragment_begin>",Je.normal_fragment_begin.replace("vec3 normal = normalize( vNormal );",`vec3 normal = normalize( ( viewMatrix * vec4( texture2D( uRelief, ( vWxz - vec2( ${(Tt-We).toFixed(1)}, ${(At-We).toFixed(1)} ) ) / ${(2*We).toFixed(1)} ).xyz * 2.0 - 1.0, 0.0 ) ).xyz );`))};Fs.onBeforeCompile=i=>{i.fragmentShader=ig(i)};Fs.polygonOffset=!0;Fs.polygonOffsetFactor=-1;Fs.polygonOffsetUnits=-1;var rg={value:new _t(0,0,0,0)},ag=Fs.clone();ag.onBeforeCompile=i=>{hg(i,lg,"#include <normal_fragment_maps>",`smoothstep( ${(We-80).toFixed(1)}, ${We.toFixed(1)}, max( abs( vWxz.x - ${Tt.toFixed(1)} ), abs( vWxz.y - ${At.toFixed(1)} ) ) )`),i.fragmentShader=ig(i),_S(i),i.uniforms.uPatch=rg,i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uPatch;`).replace("void main() {",`void main() {
  if (abs(vWxz.x - uPatch.x) < uPatch.z && abs(vWxz.y - uPatch.y) < uPatch.z) discard;`)};function vS(){let i=sr.grid>1.3?1024:2048,e=2*We/i,t=Tt-We,n=At-We,s=new Float32Array(i*i),r=(c,d)=>Ae(0,40,We-Math.max(Math.abs(c-Tt),Math.abs(d-At)));for(let c=0;c<i;c++)for(let d=0;d<i;d++){let h=t+(d+.5)*e,u=n+(c+.5)*e,f=Math.min(Ke-1.001,(d+.5)*e/Wn),p=Math.min(Ke-1.001,(c+.5)*e/Wn),x=Math.floor(f),g=Math.floor(p),m=f-x,y=p-g,S=g*Ke+x;s[c*i+d]=on[S]+(on[S+1]-on[S])*m+(on[S+Ke]-on[S])*y+(on[S]-on[S+1]-on[S+Ke]+on[S+Ke+1])*m*y+r(h,u)*(Oh(h/1.7,u/1.7)-.5)*.12}let a=(c,d,h,u)=>{let f=Math.max(0,Math.floor((c-h-t)/e)),p=Math.min(i-1,Math.ceil((c+h-t)/e)),x=Math.max(0,Math.floor((d-h-n)/e)),g=Math.min(i-1,Math.ceil((d+h-n)/e));for(let m=x;m<=g;m++){let y=n+(m+.5)*e;for(let S=f;S<=p;S++){let b=t+(S+.5)*e,v=Math.hypot(b-c,y-d);v<h&&(s[m*i+S]+=r(b,y)*u(v))}}};for(let c of oi)a(c.x,c.z,c.R*2.2,d=>{let h=d/c.R;return h<1?c.rim+(-c.depth-c.rim)*(1-h*h)*(1-h*h*.35):c.rim*Math.exp(-(((h-1)/.42)**2))});for(let c=Math.floor(t/rs);c<=Math.floor((t+2*We)/rs);c++)for(let d=Math.floor(n/rs);d<=Math.floor((n+2*We)/rs);d++){if(Oi(c,d)>.26)continue;let h=.25/Math.sqrt(1-Oi(c+91,d)*(1-(.25/1.5)**2));if(h<.4)continue;let u=h*(.05+.09*Oi(c+5,d+3)),f=u*.25;a((c+Oi(c,d+57))*rs,(d+Oi(c+13,d+7))*rs,h*1.8,p=>{let x=p/h;return x<1?f+(-u-f)*(1-x*x):f*Math.exp(-(((x-1)/.4)**2))})}let o=new Uint8Array(i*i*4);for(let c=0;c<i;c++)for(let d=0;d<i;d++){let h=s[c*i+Math.min(i-1,d+1)]-s[c*i+Math.max(0,d-1)],u=s[Math.min(i-1,c+1)*i+d]-s[Math.max(0,c-1)*i+d],f=t+(d+.5)*e,p=n+(c+.5)*e,x=r(f,p);if(x<1){let y=e/10;h=h*x+(1-x)*(Vr(f+10,p)-Vr(f-10,p))*y,u=u*x+(1-x)*(Vr(f,p+10)-Vr(f,p-10))*y}let g=Math.hypot(h,2*e,u),m=(c*i+d)*4;o[m]=128-h/g*127,o[m+1]=128+2*e/g*127,o[m+2]=128-u/g*127,o[m+3]=255}let l=new Ks(o,i,i);l.generateMipmaps=!0,l.minFilter=si,l.magFilter=tn,l.anisotropy=Un.capabilities.getMaxAnisotropy(),l.needsUpdate=!0,sg.value=l}var dc=[0,0,0];function MS(){let i=new Yi(2*We,2*We,Ke-1,Ke-1);i.rotateX(-Math.PI/2),i.translate(Tt,0,At);let e=i.attributes.position,t=i.attributes.uv,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let a=Math.round((e.getX(r)-Tt+We)/Wn),o=Math.round((e.getZ(r)-At+We)/Wn);e.setY(r,Is[o*Ke+a]),t.setXY(r,e.getX(r)/3.2,e.getZ(r)/3.2);let l=J0(e.getX(r),e.getZ(r));l>0?n.set(Z0(Gr[o*Ke+a],l,dc),r*3):n.fill(Gr[o*Ke+a],r*3,r*3+3)}i.setAttribute("color",new et(n,3)),i.computeVertexNormals();let s=new Ye(i,ag);s.receiveShadow=!0,vt.add(s)}var Cs=.4*sr.grid,ls=Math.round(2*cn.half/Cs)+1,Ps=new Yi(2*cn.half,2*cn.half,ls-1,ls-1);Ps.rotateX(-Math.PI/2);Ps.setAttribute("color",new et(new Float32Array(ls*ls*3),3));var zf=new Ye(Ps,Fs);zf.receiveShadow=!0;zf.frustumCulled=!1;function SS(i,e){let t=Math.max(0,Math.min(Ke-1.001,(i-Tt+We)/Wn)),n=Math.max(0,Math.min(Ke-1.001,(e-At+We)/Wn)),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r;return Gr[r*Ke+s]*(1-a)*(1-o)+Gr[r*Ke+s+1]*a*(1-o)+Gr[(r+1)*Ke+s]*(1-a)*o+Gr[(r+1)*Ke+s+1]*a*o}function og(i,e){cn.cx=Math.round(i/Cs)*Cs,cn.cz=Math.round(e/Cs)*Cs;let t=Ps.attributes.position,n=Ps.attributes.uv,s=Ps.attributes.color;for(let r=0;r<ls;r++)for(let a=0;a<ls;a++){let o=r*ls+a,l=cn.cx-cn.half+a*Cs,c=cn.cz-cn.half+r*Cs,d=eg(l,c),h=d>0?Nf(l,c)*d:0;t.setXYZ(o,l,Zt(l,c)+h+(d>0?tg(l,c)*d:0),c),n.setXY(o,l/3.2,c/3.2);let u=SS(l,c)*(1+Math.max(-.08,Math.min(.08,h*.6))),f=J0(l,c);f>0?(Z0(u,f,dc),s.setXYZ(o,dc[0],dc[1],dc[2])):s.setXYZ(o,u,u,u)}t.needsUpdate=n.needsUpdate=s.needsUpdate=!0,Ps.computeVertexNormals(),Ps.computeBoundingSphere(),rg.value.set(cn.cx,cn.cz,cn.half-1,0)}function wS(){let e=new Float32Array(262144),t=as(8017);for(let l=0;l<1500;l++){let c=2/Math.sqrt(1-t()*.998109640831758),d=t()*512,h=t()*512,u=c*(.12+.18*t()),f=u*.3,p=Math.ceil(c*2);for(let x=-p;x<=p;x++)for(let g=-p;g<=p;g++){let m=Math.hypot(g,x)/c;if(m>2)continue;let y=((Math.round(h)+x)%512+512)%512*512+((Math.round(d)+g)%512+512)%512;e[y]+=m<1?f-(u+f)*(1-m*m):f*Math.exp(-(((m-1)/.45)**2))}}let n=0;for(let l of e)n+=l;n/=e.length;let s=document.createElement("canvas");s.width=s.height=512;let r=s.getContext("2d"),a=r.createImageData(512,512);for(let l=0;l<512;l++)for(let c=0;c<512;c++){let d=(e[l*512+(c+1)%512]-e[l*512+(c+512-1)%512])/2,h=(e[(l+1)%512*512+c]-e[(l+512-1)%512*512+c])/2,u=(l*512+c)*4;a.data[u]=128+Math.max(-127,Math.min(127,-d*160)),a.data[u+1]=128+Math.max(-127,Math.min(127,-h*160)),a.data[u+2]=128,a.data[u+3]=128+Math.max(-110,Math.min(110,(e[l*512+c]-n)*30))}r.putImageData(a,0,0);let o=new Ci(s);return o.wrapS=o.wrapT=Xn,o.anisotropy=8,o.colorSpace=fi,o.premultiplyAlpha=!1,o}var cg={value:null},lg="smoothstep( 70.0, 260.0, length( vViewPosition ) )",hg=(i,e,t,n="1.0")=>{i.uniforms.uCrT=cg,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vCN = normalize(mat3(modelMatrix) * objectNormal);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uCrT; varying vec3 vCN;`).replace("#include <color_fragment>",`#include <color_fragment>
      float crW = ( ${e} ) * ( 0.4 + 0.6 * smoothstep( 0.8, 0.96, normalize( vCN ).y ) ); vec4 crA = texture2D( uCrT, vWxz / 120.0 ), crB = texture2D( uCrT, vWxz / 620.0 + 0.37 );
      diffuseColor.rgb *= 1.0 + crW * ( ( crA.a - 0.5 ) * 0.22 + ( crB.a - 0.5 ) * 0.22 );`).replace(t,`${t}
      { vec2 t = ( crA.rg * 2.0 - 1.0 ) * 0.45 + ( crB.rg * 2.0 - 1.0 ) * 0.38; vec3 wn = normalize( vCN ), dw = vec3( t.x, 0.0, t.y ) * crW * ( ${n} ); dw -= wn * dot( wn, dw );
        normal = normalize( normal + ( viewMatrix * vec4( dw, 0.0 ) ).xyz ); }`)};function S0(i,e,t){let n=new Yi(2*i,2*i,e,e);n.rotateX(-Math.PI/2),n.translate(Tt,0,At);let s=n.attributes.position,r=n.attributes.uv,a=new Float32Array(s.count*3);for(let c=0;c<s.count;c++){let d=s.getX(c),h=s.getZ(c);s.setY(c,Vr(d,h)-.15),r.setXY(c,d/3.2,h/3.2),a.fill(Q0(d,h),c*3,c*3+3)}n.setAttribute("color",new et(a,3)),n.computeVertexNormals();let o=new sn({color:Fs.color,roughness:1,map:Fs.map,vertexColors:!0});o.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWxz = (modelMatrix * vec4(transformed, 1.0)).xz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("void main() {",`void main() {
  if (max(abs(vWxz.x - ${Tt.toFixed(1)}), abs(vWxz.y - ${At.toFixed(1)})) < ${(t-1).toFixed(1)}) discard;`),hg(c,lg,"#include <normal_fragment_begin>")},o.customProgramCacheKey=()=>"ring"+t;let l=new Ye(n,o);l.receiveShadow=!0,vt.add(l)}function ES(){S0(2500,250,We),S0(8e3,320,2500)}cg.value=wS();var wt={x:0,z:0,cyl:[]},w0=(i,e)=>oi.reduce((t,n)=>Math.hypot(n.x-i,n.z-e)<Math.hypot(t.x-i,t.z-e)?n:t),TS=[w0(292,-765),w0(312,-752)],Xh=[];function ug(i,e,t){let{L:n,W:s,H:r}=i;if(e<-.6||e>n+1.2||Math.abs(t)>s/2+1.4)return-9;let a=s/2*(i.th?.95+.1*An(e*.45+7,3.3,3):.86+.28*An(e*.45+7,3.3,3)),o=n+.8*(An(t*.6+2,8.1,3)-.5),l=Math.max(0,e),c=Math.tan(i.th||0),d=n-2.3,h=Math.max(0,l-d),f=(i.th?c*(l<i.Lt?l*l/(2*i.Lt):i.Lt/2+l-i.Lt)-c*(i.round||0)*h*h/(2*2.3):r*l/n)-.12+(.1*(An(e*.9+4,t*.9,3)-.5)+.035*(An(e*4+1,t*4-3,2)-.5))*Math.min(1,Math.max(0,e))*(i.th?.25:1),p=Ae(a+.6,a-.9,Math.abs(t)),x=Ae(o+.5,o-.45,e);return f*p*x-1.2*(1-p*x)}function AS(i,e){let t=-1e9;for(let n of Xh){let s=i-n.x,r=e-n.z;if(Math.abs(s)>n.L||Math.abs(r)>n.L)continue;let a=s*n.c+r*n.s+n.L/2,o=-s*n.s+r*n.c,l=ug(n,a,o);l>-8&&(t=Math.max(t,(n.g0??Zt(i,e))+l))}return t}function E0(i,e,t){Xh.push(i);let n=70,s=36,r=-.5,a=i.L+1.1,o=-i.W/2-1.3,l=[],c=[];for(let u=0;u<=s;u++)for(let f=0;f<=n;f++){let p=r+(a-r)*f/n,x=o+-2*o*u/s,g=i.x+(p-i.L/2)*i.c-x*i.s,m=i.z+(p-i.L/2)*i.s+x*i.c,y=ug(i,p,x);l.push(g,(i.g0??Zt(g,m))+(y<-8?-1.2:y),m)}for(let u=0;u<s;u++)for(let f=0;f<n;f++){let p=u*(n+1)+f;c.push(p,p+n+1,p+1,p+1,p+n+1,p+n+2)}let d=new St;d.setAttribute("position",new yt(l,3)),d.setIndex(c),d.computeVertexNormals(),d.attributes.normal.getY(0)<0&&(c.reverse(),d.setIndex(c),d.computeVertexNormals()),dg(d,t);let h=new Ye(d,e);h.castShadow=h.receiveShadow=!0,vt.add(h)}function RS(){let e=new Float32Array(65536),t=as(76535),n=(d,h,u)=>{let f=Math.floor(d),p=Math.floor(h),x=d-f,g=h-p,m=x*x*(3-2*x),y=g*g*(3-2*g),S=(b,v)=>Oi((b%u+u)%u,(v%u+u)%u);return S(f,p)*(1-m)*(1-y)+S(f+1,p)*m*(1-y)+S(f,p+1)*(1-m)*y+S(f+1,p+1)*m*y};for(let d=0;d<256;d++)for(let h=0;h<256;h++){let u=0,f=.5;for(let p of[4,8,16,32,64])u+=f*n(h/256*p,d/256*p,p),f*=.55;e[d*256+h]=u*2.2}for(let d=0;d<420;d++){let h=t()*256,u=t()*256,f=1.2+Math.pow(t(),3)*7,p=Math.ceil(f*1.5);for(let x=-p;x<=p;x++)for(let g=-p;g<=p;g++){let m=Math.hypot(g,x)/f;if(m>1.5)continue;let y=((Math.round(u)+x)%256+256)%256*256+((Math.round(h)+g)%256+256)%256;e[y]-=m<1?.22*(1-m*m):-.03*(1.5-m)}}let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d"),a=r.createImageData(256,256),o=1e9,l=-1e9;for(let d of e)o=Math.min(o,d),l=Math.max(l,d);for(let d=0;d<256;d++)for(let h=0;h<256;h++){let u=e[d*256+(h+1)%256]-e[d*256+(h+256-1)%256],f=e[(d+1)%256*256+h]-e[(d+256-1)%256*256+h],p=.09,x=Math.hypot(u,f,p),g=(d*256+h)*4;a.data[g]=128-u/x*127,a.data[g+1]=128-f/x*127,a.data[g+2]=128+p/x*127,a.data[g+3]=255*(e[d*256+h]-o)/(l-o)}r.putImageData(a,0,0);let c=new Ci(s);return c.wrapS=c.wrapT=Xn,c.anisotropy=8,c.colorSpace=fi,c.premultiplyAlpha=!1,c}function CS(){let i=new sn({color:16777215,vertexColors:!0,roughness:1,metalness:0}),e=RS();return i.onBeforeCompile=t=>{t.uniforms.rockN={value:e},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        normal = normalize( ( viewMatrix * vec4( normalize( wn + d ), 0.0 ) ).xyz ); }`)},i}function dg(i,e){let t=i.attributes.position,n=i.attributes.normal,s=new Float32Array(t.count*3),r=new R;for(let a=0;a<t.count;a++){let o=t.getX(a),l=t.getY(a),c=t.getZ(a),d=.5+.13*(An(o*.35+e,c*.35+l*.3,3)-.5)+.08*(An(o*2.1-l,c*2.1+e,2)-.5);r.set(n.getX(a),n.getY(a),n.getZ(a)),d+=.07*Ae(.45,.95,r.y)-.05*Ae(-.1,-.7,r.y),d=Math.pow(Math.max(.05,d),2.2),s[a*3]=d,s[a*3+1]=d*.985,s[a*3+2]=d*.96}i.setAttribute("color",new et(s,3))}function PS(){let i=Wr[0],e=[9,4.4,5],t=.35,n=.7;wt.x=i.x-21,wt.z=i.z-3;let s=Zt(wt.x,wt.z),r=6,a=new R(Zt(wt.x-r,wt.z)-Zt(wt.x+r,wt.z),2*r,Zt(wt.x,wt.z-r)-Zt(wt.x,wt.z+r)).normalize(),o=[[1,0,.12,-1],[.08,.1,1,1],[1,.05,-.25,4.4],[.25,.15,1,-1.4]].map(([P,D,F,I])=>{let U=new R(P,D,F),B=U.length();return{n:U.divideScalar(B),d:I/B}}),l=[[[[0,-1],[1,1]],[-1.1,0,.7]],[[[0,-1],[1,-1]],[-.8,-.1,-.6]],[[[0,1],[2,-1],[3,1]],[.2,0,.55]],[[[0,1],[2,-1],[3,-1]],[.15,-.05,-.65]]],c=wt.grp=new Mt;c.position.set(wt.x,s-n,wt.z),c.quaternion.setFromUnitVectors(new R(0,1,0),a).multiply(new xt().setFromAxisAngle(new R(0,1,0),t)),vt.add(c);let d=CS(),h=new R,u=[],f=new Cr(1,5);f.deleteAttribute("normal"),f.deleteAttribute("uv");let p=Ad(f);for(let[P,D]of l){let F=p.clone(),I=F.attributes.position;for(let _e=0;_e<I.count;_e++){h.fromBufferAttribute(I,_e).normalize();let we=An(h.x*1.6+h.y*2.3+11,h.z*1.6-h.y*1.3,3),Rt=An(h.x*7+3,h.z*7+h.y*6,3),at=An(h.x*19-5,h.z*19+h.y*17,2),dt=An(h.x*48+9,h.z*48-h.y*41,2),Y=.84+.3*we+.12*Rt+.06*at+.025*dt,ne=1+.35*Math.max(0,h.y)*Math.exp(-((h.x-.15)**2+(h.z+.1)**2)*2.5),ve=He=>Math.sign(He)*Math.pow(Math.abs(He),.55);h.set(ve(h.x)*e[0],ve(h.y)*e[1]*ne,ve(h.z)*e[2]).multiplyScalar(Y),h.y<-1&&(h.y=-1+(h.y+1)*.3);for(let[He,ye]of P){let Ze=o[He],an=ye*(Ze.n.dot(h)-Ze.d);an<0&&h.addScaledVector(Ze.n,-an*ye)}I.setXYZ(_e,h.x+D[0],h.y+D[1],h.z+D[2])}F.computeVertexNormals(),dg(F,u.length*3.1);let U=new Ye(F,d);U.castShadow=U.receiveShadow=!0,c.add(U),F.computeBoundingBox();let B=F.boundingBox,W=B.max.x-B.min.x,ie=B.max.z-B.min.z,X=W>ie,Z=Math.min(W,ie),ee=Math.max(1,Math.round(Math.max(W,ie)/Z));for(let _e=0;_e<ee;_e++){let we=(_e+.5)/ee,Rt=X?B.min.x+W*we:(B.min.x+B.max.x)/2,at=X?(B.min.z+B.max.z)/2:B.min.z+ie*we,dt=new R(Rt,1,at).applyQuaternion(c.quaternion);u.push({x:wt.x+dt.x,z:wt.z+dt.z,r:Z/2*.85,top:s-n+B.max.y})}}wt.cyl=u;let x=Math.PI/2-.15;E0({x:wt.x+9,z:wt.z+13,c:Math.cos(x),s:Math.sin(x),L:8,W:4.2,H:.7},d,21.7);let g=4.5*Math.PI/180,m=Math.cos(g),y=Math.sin(g),S=302,b=-756,v=22,M=(P,D)=>TS.some(F=>Math.hypot(P-F.x,D-F.z)<F.R),T=-40;for(let P=-70;P<0;P+=.25)if(M(S+m*P,b+y*P)){T=P;break}let _=T-2.5,w=S+m*(_-v/2),C=b+y*(_-v/2);E0({x:w,z:C,c:m,s:y,L:v,W:7,H:1,th:23*Math.PI/180,Lt:14,g0:Zt(w-m*v/2,C-y*v/2)},d,13.1)}function IS(){let i=[0,1,2].map(n=>{let s=new Cr(1,1);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=Ad(s);let r=s.attributes.position,a=new R,o=as(31+n),l=[0,1,2].map(()=>[new R(o()-.5,(o()-.3)*.8,o()-.5).normalize(),.45+o()*.3]);for(let c=0;c<r.count;c++){a.fromBufferAttribute(r,c).multiplyScalar(.8+.4*o());for(let[d,h]of l){let u=a.dot(d)-h;u>0&&a.addScaledVector(d,-u)}r.setXYZ(c,a.x*[1,1.1,.9][n],a.y*[.85,.75,.95][n],a.z*[1,.85,1.1][n])}return s.computeVertexNormals(),s}),e=new sn({color:7828333,roughness:.95,flatShading:!0}),t=new Kt;i.forEach((n,s)=>{let r=Gn.filter(l=>Math.floor(l.k*3)%3===s);if(!r.length)return;let a=new Ar(n,e,r.length);r.forEach((l,c)=>{t.position.set(l.x,Zt(l.x,l.z)+Nf(l.x,l.z)-l.s*(l.bury??.62),l.z),t.rotation.set(0,l.yaw,0),t.scale.setScalar(l.s),t.updateMatrix(),a.setMatrixAt(c,t.matrix)});let o=new La({depthPacking:id});o.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLy = position.y;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("void main() {",`void main() {
  if ( vLy < 0.56 ) discard;      // below the ground line (the rock sits 0.62 of its size down)`)},a.customDepthMaterial=o,a.castShadow=a.receiveShadow=!0,vt.add(a)})}var oo=700,Br=new R(oo/12*(1.1**2+2.06**2),oo/12*(3.1**2+2.06**2),oo/12*(3.1**2+1.1**2)),Of=()=>!0,vn=(()=>{try{return+localStorage.getItem("lrv-spd")||2}catch{return 2}})(),Ih=.41,ac=.36,LS=4200,DS=620,FS=.05,NS=1.6,T0=6e4,US=1500,zS=.1,OS=1600,Mf=.62,kf=5;function fg(i){vn=i===3&&Of()?3:i===2||i===3?2:1,Mf=[.62,.85,1][vn-1],kf=[5,11.2,15][vn-1];try{localStorage.setItem("lrv-spd",String(vn))}catch{}}var Rn=[[1.15,.915,1],[1.15,-.915,1],[-1.15,.915,-1],[-1.15,-.915,-1]].map(([i,e,t])=>({at:new R(i,-.08,e),steer:t,comp:0,contact:!1,spin:0,off:0,hit:0})),st={on:!1,x:-12,z:4,y:0},Sf=[];for(let i of[-1.5,1.5])for(let e of[-1,1])for(let t of[-.3,.75])Sf.push(new R(i,t,e));var N={p:new R(0,0,0),v:new R,q:new xt,w:new R,steer:0};function hs(i,e,t){let s=new R(Zt(i-1.5,e)-Zt(i+1.5,e),3,Zt(i,e-1.5)-Zt(i,e+1.5)).normalize();N.q.setFromUnitVectors(new R(0,1,0),s).multiply(new xt().setFromAxisAngle(new R(0,1,0),t)),N.p.set(i,ke(i,e),e).addScaledVector(s,.8),N.v.set(0,0,0),N.w.set(0,0,0),N.steer=0,gc=!0,Rn.forEach(r=>{r.hx=r.hy=0})}var gc=!0,Ja=new R,ar=new R,Yr=new R,ur=new R,kS=new R,yn=new R,Ft=new R,A0=new R,As=new R,Za=new R,af=new R,mt=new R,Qa=new xt,is=new R,oc=new R,it={t:0,start:null,peak:0,last:null,best:0,grounded:!0,spin:0},Jt=Object.assign({t:0,d:0,h:0,v:0,v2:0,v3:0,lap:0,lap2:0,lap3:0},(()=>{try{return JSON.parse(localStorage.getItem("lrv-records"))||{}}catch{return{}}})());fg(vn);var xi=0,lr=0,R0=.42;function wf(i){Ja.set(0,-bi*oo,0),ar.set(0,0,0),yn.set(0,1,0).applyQuaternion(N.q),Ft.set(1,0,0).applyQuaternion(N.q),A0.set(0,0,1).applyQuaternion(N.q);let e=N.v.dot(Ft),t=Math.hypot(N.v.x,N.v.z),n=Math.min(.42,Math.max(.1,1.5*Math.atan(1.15*1.3*Mf*bi/Math.max(.01,t*t))));N.steer+=Math.max(-R0*i,Math.min(R0*i,lr*n-N.steer));let s=0;for(let d of Rn){let h=ur.copy(d.at).applyQuaternion(N.q).add(N.p),u=(h.y-ke(h.x,h.z))/Math.max(.3,yn.y),f=ac+Ih-u;if(f<=0){d.contact=!1,d.comp=0,d.off+=i;continue}d.off>.12&&(d.hit=Math.max(d.hit,-N.v.y+.5)),d.off=0,d.contact=!0,s++;let p=(f-d.comp)/i;d.comp=f;let x=f>ac?p>=0?T0*(f-ac):Math.min(US,T0*zS*(f-ac)):0,g=Math.min(9e3,LS*Math.min(f,ac)+(p<0?OS:DS)*p+x)*Ae(.2,.55,yn.y);if(g<=0)continue;let m=vf(h.x,h.z),y=Yr.copy(h).addScaledVector(yn,-(u-Ih*.1)),S=y.sub(N.p);As.copy(N.w).cross(S).add(N.v);let b=N.steer*d.steer;Za.copy(Ft).multiplyScalar(Math.cos(b)).addScaledVector(A0,Math.sin(b)),Za.addScaledVector(m,-Za.dot(m)).normalize(),af.copy(m).cross(Za).normalize();let v=As.dot(Za),M=As.dot(af),T=oo*bi/4,_=Mf*g*Math.max(.6,1-.22*Math.max(0,g/T-1)),w;xi>.02&&v>-.3?w=xi*[520,900,1300][vn-1]*Math.max(0,1-v/kf):xi<-.02&&v<.3?w=xi*300*Math.max(0,1+v/NS):Math.abs(xi)>.02?w=-Math.sign(v)*_:w=0,w-=Math.sign(v)*Math.min(Math.abs(v)*400,FS*g);let C=-M*1600;if(gc){d.hx+=v*i,d.hy+=M*i,w=-(v*12e3+d.hx*3e4),C=-(M*12e3+d.hy*3e4);let D=Math.hypot(w,C);D>_&&(d.hx*=_/D,d.hy*=_/D)}let P=Math.hypot(w,C);P>_&&(w*=_/P,C*=_/P),mt.copy(m).multiplyScalar(g).addScaledVector(Za,w),Ja.add(mt),ar.add(oc.copy(S).cross(mt)),mt.copy(af).multiplyScalar(C),Ja.add(mt),ar.add(oc.copy(S).addScaledVector(yn,.25).cross(mt)),d.spin+=v/Ih*i}{let d=0;for(let h of Rn)h.contact&&d++;if(d>=2&&!gc){let h=-e*Math.tan(N.steer)/1.15,u=N.w.dot(yn);ar.addScaledVector(yn,Math.max(-700,Math.min(700,(h-u)*Br.y*.8*d/4*Ae(.5,.8,yn.y))))}}if(yn.y<.6&&yn.y>-.5&&t<2.5&&Math.hypot(N.w.x,N.w.z)<1.2){let d=!1;for(let h of Sf){let u=ur.copy(h).applyQuaternion(N.q).add(N.p);if(u.y<ke(u.x,u.z)+.05){d=!0;break}}if(d){let h=mt.set(0,1,0).cross(yn),u=h.length();u>.001&&ar.addScaledVector(h,2400/u*Ae(.6,.4,yn.y))}}for(let d of Sf){let h=ur.copy(d).applyQuaternion(N.q).add(N.p),u=ke(h.x,h.z),f=u-h.y;if(f<=0)continue;s++;let p=Yr.copy(h).sub(N.p);As.copy(N.w).cross(p).add(N.v);let x=vf(h.x,h.z),g=As.dot(x);d.y>0&&(ae.roof=Math.max(ae.roof,-g),ae.topDown=!0);let m=g<0?Math.min(14e3,6e4*f-3500*g):Math.max(0,Math.min(2500,9e3*f)-3500*g);mt.copy(As).addScaledVector(x,-g);let y=mt.length();y>1e-4&&mt.multiplyScalar(-Math.min(.4*m,y*3e3)/y),mt.addScaledVector(x,m),Ja.add(mt),ar.add(oc.copy(p).cross(mt))}{Qa.copy(N.q).invert();let d=(h,u,f,p,x)=>{let g=ur.set(h,u,f).sub(N.p).applyQuaternion(Qa),m=Yr.set(Math.max(-1.5,Math.min(1.5,g.x)),Math.max(-.3,Math.min(.75,g.y)),Math.max(-1,Math.min(1,g.z))).applyQuaternion(N.q).add(N.p),y=is.copy(m).sub(mt.set(h,x?m.y:u,f)),S=y.length();if(S>=p)return;S<1e-4&&(y.copy(N.p).sub(mt.set(h,N.p.y,f)),y.y=0,S=0),y.normalize();let b=m.sub(N.p);As.copy(N.w).cross(b).add(N.v);let v=As.dot(y),M=Math.max(0,9e4*(p-S)-3e3*v);mt.copy(As).addScaledVector(y,-v);let T=mt.length();T>1e-4&&mt.multiplyScalar(-Math.min(.4*M,T*3e3)/T),mt.addScaledVector(y,M),Ja.add(mt),ar.add(oc.copy(b).cross(mt)),s++};if(st.on&&Math.hypot(N.p.x-st.x,N.p.z-st.z)<8){d(st.x,Math.max(st.y+.3,Math.min(st.y+7,N.p.y)),st.z,2.2,!0);for(let[h,u]of[[1,0],[-1,0],[0,1],[0,-1]]){d(st.x+h*4.1,st.y+.25,st.z+u*4.1,.5);for(let f=1;f<=4;f++){let p=f/5,x=4.1-1.9*p;d(st.x+h*x,st.y+.4+2.2*p,st.z+u*x,.2)}}}if(wt.cyl.length&&Math.hypot(N.p.x-wt.x,N.p.z-wt.z)<22)for(let h of wt.cyl)N.p.y<h.top+.6&&d(h.x,Math.min(h.top,N.p.y),h.z,h.r,!0)}N.v.addScaledVector(Ja,i/oo),Qa.copy(N.q).invert(),is.copy(N.w).applyQuaternion(Qa);let r=mt.copy(ar).applyQuaternion(Qa),a=oc.set(Br.x*is.x,Br.y*is.y,Br.z*is.z),o=ur.copy(is).cross(a);is.x+=(r.x-o.x)/Br.x*i,is.y+=(r.y-o.y)/Br.y*i,is.z+=(r.z-o.z)/Br.z*i,N.w.copy(is).applyQuaternion(N.q);{let d=Math.hypot(N.w.x,N.w.z);if(d>2.5){let h=Math.exp(-i*3*(d-2.5));N.w.x*=h,N.w.z*=h}}N.p.addScaledVector(N.v,i);let l=new xt(N.w.x*i*.5,N.w.y*i*.5,N.w.z*i*.5,0).multiply(N.q);N.q.x+=l.x,N.q.y+=l.y,N.q.z+=l.z,N.q.w+=l.w,N.q.normalize();let c=We-12;if(Math.abs(N.p.x-Tt)>c&&(N.p.x=Tt+Math.sign(N.p.x-Tt)*c,N.v.x*(N.p.x-Tt)>0&&(N.v.x=0)),Math.abs(N.p.z-At)>c&&(N.p.z=At+Math.sign(N.p.z-At)*c,N.v.z*(N.p.z-At)>0&&(N.v.z=0)),s===0)it.grounded&&it.t===0&&(it.start=N.p.clone(),it.peak=0,it.spin=0),it.t+=i,it.spin+=Math.hypot(N.w.x,N.w.z)*i,it.peak=Math.max(it.peak,N.p.y-.78-ke(N.p.x,N.p.z)),it.grounded=!1;else if(!it.grounded){if(it.grounded=!0,it.t>.45){let d=Math.hypot(N.p.x-it.start.x,N.p.z-it.start.z);it.last={t:it.t,d,peak:Math.max(0,it.peak),spin:it.spin},it.t>it.best&&(it.best=it.t),e1(it.last)}it.t=0}return s}var BS=[["#7CC7F2",[[0,0],[129,-27],[330,-1400],[460,-2700],[805,-3003],[1294,-3036],[2200,-2950],[3012,-2599],[2500,-1900],[1735,-1228],[900,-600],[145,-39],[0,0]]]],uo=[-12,4],Jr=[],Bt={x:uo[0]+150/mr,z:uo[1]-170/mr,ring:null,line:null},Wr=[["stop 6 \xB7 Tracy\u2019s Rock",805,-3003],["stop 8",3012,-2599],["stop 9 \xB7 Van Serg",1735,-1228]].map(([i,e,t])=>({n:i,x:uo[0]+e/mr,z:uo[1]+t/mr}));function HS(){let i=(c,d,h,u,f)=>.5*(2*d+(-c+h)*f+(2*c-5*d+4*h-u)*f*f+(-c+3*d-3*h+u)*f*f*f),e=[],t=[],n=new Ue;for(let[c,d]of BS){let h=d.map(p=>[uo[0]+p[0]/mr,uo[1]+p[1]/mr]),u=p=>h[Math.max(0,Math.min(h.length-1,p))];n.set(c);let f=0;for(let p=0;p<h.length-1;p++){let x=Math.hypot(h[p+1][0]-h[p][0],h[p+1][1]-h[p][1]),g=Math.max(2,Math.ceil(x/.5));for(let m=0;m<g;m++){let y=m/g,S=i(u(p-1)[0],u(p)[0],u(p+1)[0],u(p+2)[0],y),b=i(u(p-1)[1],u(p)[1],u(p+1)[1],u(p+2)[1],y);(f+=x/g)<3||(f=0,j0(S,b,14)&&(e.push(S,Zt(S,b)+.12,b),t.push(n.r,n.g,n.b),Jr.push(S,b)))}}}let s=new St;s.setAttribute("position",new yt(e,3)),s.setAttribute("color",new yt(t,3));let r=new Hn({transparent:!0,depthWrite:!1,uniforms:{map:{value:jh},px:{value:1},vh:{value:800},op:{value:0}},vertexShader:"attribute vec3 color; varying vec3 vC; uniform float px, vh; void main() { vC = color; vec4 mv = modelViewMatrix * vec4( position, 1.0 ); gl_Position = projectionMatrix * mv; gl_PointSize = max( 2.0 * px, 0.3 * projectionMatrix[1][1] * 0.5 * vh / -mv.z ); }",fragmentShader:"uniform sampler2D map; uniform float op; varying vec3 vC; void main() { float a = texture2D( map, gl_PointCoord ).a; if ( a < 0.02 ) discard; gl_FragColor = vec4( vC, a * 0.45 * op ); }"}),a=new Ki(s,r),o=new qe;a.frustumCulled=!1,a.renderOrder=2,a.visible=!1,vt.add(a),Bt.line=a;let l=new Ye(new Ia(3.6,3.85,48),new Bn({color:8177650,transparent:!0,opacity:.4,side:Dn,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(Bt.x,Zt(Bt.x,Bt.z)+.25,Bt.z),vt.add(l),Bt.ring=l,a.onBeforeRender=c=>{r.uniforms.px.value=c.getPixelRatio(),r.uniforms.vh.value=c.getDrawingBufferSize(o).y}}var fo=1400,ei=new Float32Array(fo*3),ss=new Float32Array(fo*3),Lh=new Float32Array(fo),Bf=new St;Bf.setAttribute("position",new et(ei,3));function VS(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.6)"),t.addColorStop(.6,"rgba(255,255,255,.15)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new Ci(i)}var jh=VS(),pg=new Ki(Bf,new ji({color:10130828,size:.032,map:jh,transparent:!0,opacity:.32,depthWrite:!1}));pg.frustumCulled=!1;vt.add(pg);var co=0,xc=1600,Di=new Float32Array(xc*3),Hr=new Float32Array(xc*3),of=new Float32Array(xc),Hf=new St;Hf.setAttribute("position",new et(Di,3));var mg=new Ki(Hf,new ji({color:12433325,size:.06,map:jh,transparent:!0,opacity:.3,depthWrite:!1}));mg.frustumCulled=!1;vt.add(mg);var cf=0;function GS(i){for(let e of Rn){if(!e.contact)continue;let t=ur.copy(e.at).applyQuaternion(N.q).add(N.p),n=N.v.length(),s=Math.min(5,Math.floor(n*1.2*i*60*(.6+Math.random())));for(let r=0;r<s;r++){let a=co;co=(co+1)%fo,ei[a*3]=t.x+(Math.random()-.5)*.3,ei[a*3+1]=ke(t.x,t.z)+.05,ei[a*3+2]=t.z+(Math.random()-.5)*.3;let o=.5+Math.random()*1.1*Math.min(1,n/3);ss[a*3]=-Ft.x*n*(.25+Math.random()*.5)+(Math.random()-.5)*.6,ss[a*3+1]=o,ss[a*3+2]=-Ft.z*n*(.25+Math.random()*.5)+(Math.random()-.5)*.6,Lh[a]=1}if(e.hit>0){let r=ke(t.x,t.z),a=Math.min(110,Math.round(40*e.hit)),o=Math.min(2.2,e.hit);for(let l=0;l<a;l++){let c=cf,d=Math.random()*6.2832,h=(.4+Math.random()*1)*o;cf=(cf+1)%xc,Di[c*3]=t.x+Math.cos(d)*.25,Di[c*3+1]=r+.04,Di[c*3+2]=t.z+Math.sin(d)*.25,Hr[c*3]=Math.cos(d)*h+N.v.x*.4,Hr[c*3+1]=(.2+Math.random()*.6)*o,Hr[c*3+2]=Math.sin(d)*h+N.v.z*.4,of[c]=1}e.hit=0}}for(let e=0;e<fo;e++){if(Lh[e]<=0){ei[e*3+1]=-9999;continue}ss[e*3+1]-=bi*i,ei[e*3]+=ss[e*3]*i,ei[e*3+1]+=ss[e*3+1]*i,ei[e*3+2]+=ss[e*3+2]*i,ei[e*3+1]<ke(ei[e*3],ei[e*3+2])&&(Lh[e]=0)}Bf.attributes.position.needsUpdate=!0;for(let e=0;e<xc;e++){if(of[e]<=0){Di[e*3+1]=-9999;continue}Hr[e*3+1]-=bi*i,Di[e*3]+=Hr[e*3]*i,Di[e*3+1]+=Hr[e*3+1]*i,Di[e*3+2]+=Hr[e*3+2]*i,Di[e*3+1]<ke(Di[e*3],Di[e*3+2])&&(of[e]=0)}Hf.attributes.position.needsUpdate=!0}function WS(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"rgba(58,56,53,0)"),n.addColorStop(.16,"rgba(56,54,51,.22)"),n.addColorStop(.84,"rgba(56,54,51,.22)"),n.addColorStop(1,"rgba(58,56,53,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),t.lineCap="round",t.lineJoin="round";for(let[r,a]of[[64*.2,.04],[64*.14,.065],[64*.08,.1]]){t.strokeStyle=`rgba(40,38,36,${a})`,t.lineWidth=r;for(let o=-1;o<5;o++){let l=o*64/4;t.beginPath(),t.moveTo(64*.16,l),t.lineTo(64*.5,l+64*.11),t.lineTo(64*.84,l),t.stroke()}}let s=new Ci(e);return s.wrapS=s.wrapT=Xn,s.colorSpace=jt,s.anisotropy=4,s}var Ui=1400,qS=new sn({map:WS(),transparent:!0,depthWrite:!1,roughness:1,vertexColors:!0,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),XS=Rn.map(()=>{let i=new Float32Array(Ui*2*3),e=new Float32Array(Ui*2*2),t=new Float32Array(Ui*2*4),n=new Uint32Array((Ui-1)*6);for(let a=0;a<Ui-1;a++){let o=a*2;n.set([o,o+2,o+1,o+2,o+3,o+1],a*6)}let s=new St;s.setAttribute("position",new et(i,3)),s.setAttribute("uv",new et(e,2)),s.setAttribute("color",new et(t,4)),s.setIndex(new et(n,1)),s.setDrawRange(0,0);let r=new Ye(s,qS);return r.frustumCulled=!1,r.receiveShadow=!0,r.renderOrder=1,vt.add(r),{g:s,pos:i,uv:e,col:t,n:0,last:null,s:0,gap:!1}}),ro=new R;function lf(i,e){let t=(i-cn.cx+cn.half)/Cs,n=(e-cn.cz+cn.half)/Cs;if(!(t>=0&&n>=0&&t<ls-1&&n<ls-1))return Zt(i,e);let s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,l=Ps.attributes.position,c=(p,x)=>l.getY(x*ls+p),d=c(s,r),h=c(s,r+1),u=c(s+1,r);if(a+o<=1)return d+(u-d)*a+(h-d)*o;let f=c(s+1,r+1);return f+(h-f)*(1-a)+(u-f)*(1-o)}function hf(i,e,t,n,s,r,a,o){if(i.n>=Ui){let l=Ui>>1,c=Ui-l;i.pos.copyWithin(0,c*6,Ui*6),i.uv.copyWithin(0,c*4,Ui*4),i.col.copyWithin(0,c*8,Ui*8),i.n=l}i.pos.set([e,t,n,s,r,a],i.n*6),i.uv.set([0,i.s,1,i.s],i.n*4),i.col.set([1,1,1,o,1,1,1,o],i.n*8),i.n++}function jS(){Rn.forEach((i,e)=>{let t=XS[e];if(!i.contact){t.n&&(t.gap=!0);return}let n=Bi[e],s=(n?ro.set(n.c.x,i.at.y,n.c.z):ro.copy(i.at)).applyQuaternion(N.q).add(N.p);if(t.last&&!t.gap&&Math.hypot(s.x-t.last.x,s.z-t.last.z)<.25)return;let r=n?n.hw:.115,a=t.last&&!t.gap?s.x-t.last.x:Ft.x,o=t.last&&!t.gap?s.z-t.last.z:Ft.z,l=Math.hypot(a,o)||1,c=-o/l*r,d=a/l*r,h=s.x+c,u=s.z+d,f=s.x-c,p=s.z-d,x=lf(s.x,s.z),g=Math.max(lf(h,u),x)+.02,m=Math.max(lf(f,p),x)+.02;if(t.gap){let S=(t.n-1)*6,b=t.pos.slice(S,S+6);hf(t,b[0],b[1],b[2],b[3],b[4],b[5],0),hf(t,h,g,u,f,m,p,0),t.gap=!1}else t.last&&(t.s+=Math.hypot(s.x-t.last.x,s.z-t.last.z)/.5);hf(t,h,g,u,f,m,p,1),t.last={x:s.x,z:s.z};let y=t.g.attributes;y.position.needsUpdate=y.uv.needsUpdate=y.color.needsUpdate=!0,t.g.setDrawRange(0,Math.max(0,(t.n-1)*6))})}var cc={az:240.7,el:45.1,diam:1.88,sub:[-110.9,-8.5],pole:[-.3895,.2953,-.8724]};function KS(){let e=cc.el*Math.PI/180,t=cc.az*Math.PI/180,n=6e4*Math.tan(cc.diam/2*Math.PI/180),s=new sn({roughness:.85,metalness:0,fog:!1,color:new Ue(2.2,2.2,2.2)});new Pr().load("../models/earth-bm.jpg",h=>{h.colorSpace=jt,h.anisotropy=4,s.map=h,s.needsUpdate=!0}),s.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
        { float rim = 1. - abs(dot(normalize(vNormal), vec3(0., 0., 1.))); totalEmissiveRadiance += vec3(.12, .25, .55) * pow(rim, 4.) * .35; }`)};let r=new Ye(new No(n,64,32),s),a=new R(Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e));r.position.copy(a).multiplyScalar(6e4);let o=(h,u)=>(h*=Math.PI/180,u*=Math.PI/180,new R(Math.cos(u)*Math.cos(h),Math.sin(u),-Math.cos(u)*Math.sin(h))),l=(h,u)=>{let f=h.clone().normalize(),p=u.clone().addScaledVector(f,-u.dot(f)).normalize();return new Xe().makeBasis(f,p,new R().crossVectors(f,p))},c=l(o(...cc.sub),new R(0,1,0)),d=l(a.clone().negate(),new R(...cc.pole));return r.quaternion.setFromRotationMatrix(d.multiply(c.transpose())),r}var gg=KS();vt.add(gg);var Ne=new Mt;vt.add(Ne);var uf=new ic().setMeshoptDecoder(sf);function lc(i,e,t,n){i.onBeforeCompile=s=>{s.uniforms.uW={value:new _t(...n)},s.uniforms.uF={value:new qe(...t||[1,0])},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        if (uF.y > 0.) { vec3 q = vWp * uF.x; float fw = length(fwidth(q)); vec3 t = fCell(q) * smoothstep(1.1, .3, fw) + .6 * fCell(q * .37 + 5.) * smoothstep(1.1, .3, fw * .37); normal = normalize(normal + uF.y * (viewMatrix * vec4(t, 0.)).xyz); }`)},i.customProgramCacheKey=()=>"lm-"+e}function YS(i){i.traverse(e=>{e.isMesh&&(e.material=[].concat(e.material).map(t=>{let n=t.clone(),s=n.name||"",r=(a,o,l)=>{n.color.set(a),n.metalness=o,n.roughness=l};return/blinn1SG|blinn10SG/.test(s)?(r(13600048,.15,.5),lc(n,"amber",[11,.09],[.06,.1,.02,1.5])):/blinn9SG/.test(s)?(r(11033122,.15,.52),lc(n,"amber2",[11,.09],[.06,.1,.02,1.5])):/initialShadingGr|blinn3SG|blinn7SG/.test(s)?(r(s.includes("blinn3")?6444365:9601135,.08,.55),lc(n,"cabin",null,[.08,.12,.04,1.2]),n.flatShading=!0):/blinn4SG/.test(s)?(r(11774880,.12,.5),lc(n,"metal",null,[.07,.12,.04,2])):/blinn6SG|blinn2SG/.test(s)&&(r(s.includes("blinn6")?1579034:3946036,.3,.55),lc(n,"dark",null,[.06,.1,.03,2])),n}),e.material.length===1&&(e.material=e.material[0]))})}function C0(i){i.traverse(e=>{e.isMesh&&(e.castShadow=e.receiveShadow=!0,[].concat(e.material).forEach(t=>{t.color&&t.color.lerp(new Ue(10196364),.18)}))})}var Ni=Object.create(null);addEventListener("keydown",i=>{Ni[i.key.toLowerCase()]=!0,i.key.toLowerCase()==="r"&&Gf(),i.key===" "&&xe.on&&i.preventDefault()});addEventListener("keyup",i=>{Ni[i.key.toLowerCase()]=!1});var P0=b0(se("stick")),Lt={yaw:0,pitch:.18,id:null,x:0,y:0,idle:9},ti=0,I0=[0,3,1,2],JS=["Chase","Wide","Seat","Low"];function Vf(i){ti=i,se("btn-pov").textContent=JS[ti],gr=!1,Ne.visible=!0,i===2&&(Lt.yaw=0,Lt.pitch=.18)}se("btn-pov").addEventListener("click",()=>Vf(I0[(I0.indexOf(ti)+1)%4]));addEventListener("pointerdown",i=>{i.target===Un.domElement&&(Lt.id=i.pointerId,Lt.x=i.clientX,Lt.y=i.clientY)});addEventListener("pointermove",i=>{i.pointerId===Lt.id&&(Lt.yaw-=(i.clientX-Lt.x)*.006,Lt.pitch=Math.max(ti===2?-.7:-.1,Math.min(1.1,Lt.pitch+(i.clientY-Lt.y)*.004)),Lt.x=i.clientX,Lt.y=i.clientY,Lt.idle=0)});addEventListener("pointerup",i=>{i.pointerId===Lt.id&&(Lt.id=null)});document.addEventListener("touchmove",i=>{i.target.closest(".sheet")||i.preventDefault()},{passive:!1});var Dh=0,Hh={x:-1e4,y:-1e4};addEventListener("pointermove",i=>{i.pointerType==="mouse"&&(Hh.x=i.clientX,Hh.y=i.clientY)});var xg=i=>40+18*Math.sin(3*i+5)+12*Math.sin(5*i)+7*Math.sin(8*i+4);function eo(i,e){let t=i-Tt,n=e-At;return We-xg(Math.atan2(n,t))-Math.pow(t**6+n**6,1/6)}function ZS(i){let e=Math.cos(i),t=Math.sin(i),n=(We-xg(i))/Math.pow(e**6+t**6,1/6);return[Tt+n*e,At+n*t]}var kt={on:!1,t:0,cool:0,th:0,st:0,wt:0,msg:"",turn:!1};function $S(i){let e=se("cine-cap");e.classList.remove("on"),e.textContent=i,e.offsetWidth,e.classList.add("on")}function df(i){if(i===kt.msg)return;kt.msg=i;let e=se("edgewarn");i&&(e.textContent=i),e.classList.toggle("on",!!i)}function Ef(){kt.on=!1,kt.cool=4,document.body.classList.remove("home"),se("cine-cap").classList.remove("on")}function QS(i){let e=N.p.x,t=N.p.z,n=eo(e,t),s=-(N.v.x*(eo(e+1,t)-eo(e-1,t))+N.v.z*(eo(e,t+1)-eo(e,t-1)))/2,r=Math.min(50,15+Math.max(0,s)**2/2.4),a=ae.on||Gt.on||Ce.on||Dt.on||xe.on;if(kt.on&&a)return Ef(),!1;if(!kt.on){kt.cool-=i;let y=s>.3?(n-r)/s:99;if(a||n>160||y>5&&n>r+12||s<-.3)return df(""),!1;if(n>r||kt.cool>0)return(kt.wt-=i)<=0&&(kt.wt=.25,df(`Mission Control \xB7 You\u2019re nearing the edge of the mission area. Turn back toward the LM${y<99?`, or Cernan takes the wheel in ${Math.max(1,Math.ceil(y))} s`:""}.`)),!1;df(""),kt.on=!0,kt.t=0,kt.turn=!1,document.body.classList.add("home"),$S("Cernan has the wheel \xB7 He brakes, turns you around and heads back inside the mission area.")}kt.t+=i;let o=Math.hypot(st.x-e,st.z-t)>500,l=o?Tt:st.x,c=o?At:st.z,d=y=>y-2*Math.PI*Math.round(y/(2*Math.PI)),h=Math.atan2(-(c-t),l-e),u=Math.atan2(-Ft.z,Ft.x),f=Math.hypot(N.v.x,N.v.z),p=Math.atan2(-N.v.z,N.v.x),x=d(h-u),g=d(h-p);if(kt.turn&&Math.abs(x)<.5&&(f<1||Math.abs(g)<.6)&&kt.t>2||kt.t>15)return Ef(),zt("Back inside the mission area \xB7 the controls are yours"),!1;let m=Math.min(1,kt.t/1.2);return f>4&&!kt.turn?(kt.st=0,kt.th=-1):(kt.turn=!0,kt.st=m*Math.max(-1,Math.min(1,-x*2.5)),kt.th=f<2.5?.5:.15),!0}function zt(i){se("toast").textContent=i,se("toast").classList.add("on"),Dh=3.6}function e1(i){J.ph==="film"&&i.t>.6&&(J.land=yi),Ya(i.t>1.2?40:20);let e=[];i.t>Jt.t&&(Jt.t=i.t,e.push("air time")),i.d>Jt.d&&(Jt.d=i.d,e.push("distance")),i.peak>Jt.h&&(Jt.h=i.peak,e.push("height"));try{localStorage.setItem("lrv-records",JSON.stringify(Jt))}catch{}let t=i.spin>5.4?" \xB7 full roll!":i.spin>2.6?" \xB7 half roll":"";zt(`Airborne ${i.t.toFixed(1)} s \xB7 ${rr(i.d,1)} \xB7 ${rr(i.peak,1)} high${t}${e.length?" \xB7 new record":""}`),_c(),v1(i)}function _c(){se("best").textContent=Jt.t?Jt.t.toFixed(1)+" s":"\u2014";let i=Jt[vn>1?"v"+vn:"v"];se("topv").textContent=i?vh+" \xB7 best "+Mh(i).toFixed(1):vh;let e=Jt[vn>1?"lap"+vn:"lap"];se("rec").textContent=[e?`Best loop ${Math.floor(e/60)}:${(e%60).toFixed(1).padStart(4,"0")}`:"",Jt.t?`${Jt.t.toFixed(1)} s in the air \xB7 ${rr(Jt.d,1)} \xB7 ${rr(Jt.h,1)} high`:""].filter(Boolean).join(" \xB7 ")}var Be={on:!1,t:0,cp:0,peak:0,away:!1,warned:!1,save:null},lo={t:0};function t1(){let i=Be.save;se("btn-rejoin").classList.remove("on"),lo.t=0,!(!i||ae.on)&&(hs(i.x,i.z,i.yaw),gr=!1,Object.assign(Be,{on:!0,t:i.t,cp:i.cp,peak:i.peak,warned:!1,away:!0}),zt(`Back on the route \xB7 the clock resumes at ${fc(i.t)}`))}var Gt={on:!1,t:0,cap:"",go:!1,lines:null};function n1(){let i=vn>1?"lap"+vn:"lap";Gt.lines=[[0,6.5,"The time trial: Apollo 17\u2019s third drive, north to Tracy\u2019s Rock at stop 6, east to stop 8, and home past Van Serg crater. On the Moon it was "+(Ts?"7.5 mi (12.1 km)":"12.1 km")+"; here the stops sit at a quarter of their true distances, so the loop is about "+(Ts?"1.5 mi":"2.5 km")+"."],[6.5,12,"The fastest anyone has driven on the Moon is about "+(Ts?"11 mph (18 km/h)":"18 km/h (11 mph)")+": Gene Cernan, in this rover, downhill on the way back from that drive. It is still the lunar speed record."+(Jt[i]?` Your best loop at this speed: ${fc(Jt[i])}.`:"")],[12,13.6,"Timer started \xB7 Go!"]],Gt.on=!0,Gt.t=0,Gt.go=!1,rn=!1,document.body.classList.add("briefing")}function i1(i){let e=Gt.t+=i;e>=Gt.lines[2][0]&&!Gt.go&&(Gt.go=!0,rn=!0,Be.on=!0,Be.t=0,Be.cp=0,Be.peak=0,Be.warned=!1),e>=Gt.lines[2][1]&&(Gt.on=!1,document.body.classList.remove("briefing"));let t="";if(Gt.on)for(let[n,s,r]of Gt.lines)e>=n&&e<s&&(t=r);if(t!==Gt.cap){Gt.cap=t;let n=se("cine-cap");n.classList.remove("on"),t&&(n.textContent=t,n.offsetWidth,n.classList.add("on"))}}function s1(){let i=1e9;for(let e=0;e<Jr.length;e+=2){let t=Jr[e]-N.p.x,n=Jr[e+1]-N.p.z,s=t*t+n*n;s<i&&(i=s)}return Math.sqrt(i)}function r1(i){let e=Bt.line.material.uniforms.op,t=Bt.live?Be.on?1:.65:0;e.value+=Math.sign(t-e.value)*Math.min(Math.abs(t-e.value),i/1.5),Bt.line.visible=e.value>.001}var fc=i=>`${Math.floor(i/60)}:${(i%60).toFixed(1).padStart(4,"0")}`;function ff(i,e,t){ro.set(i,Zt(i,e)+2,e).project(Qe);let n=se("objmark"),s=(ro.x*.5+.5)*innerWidth,r=(-ro.y*.5+.5)*innerHeight;ro.z<1?(n.style.display="block",n.style.transform=`translate(${Math.max(20,Math.min(innerWidth-170,s))}px,${Math.max(80,Math.min(innerHeight-60,r))}px)`,n.querySelector("b").textContent=t):n.style.display="none"}function a1(i,e,t){let n=Math.hypot(Bt.x-N.p.x,Bt.z-N.p.z);if(!Be.on){if(n<4.5&&!Be.away){Be.away=!0,n1();return}n>8&&(Be.away=!1),ff(Bt.x,Bt.z,n>25?`Time trial \xB7 ${wh(n)}`:"Time trial"),se("clock").textContent="";return}Be.t+=t,e&&i>Be.peak&&(Be.peak=i);let s=s1();if(s<8&&it.grounded&&yn.y>.85&&(Be.saveT=(Be.saveT||0)+t)>1&&(Be.saveT=0,Be.save={x:N.p.x,z:N.p.z,yaw:Math.atan2(-Ft.z,Ft.x),t:Be.t,cp:Be.cp,peak:Be.peak}),s>35){Be.on=!1,Be.away=!1,se("clock").textContent="",zt("Too far from the route \xB7 time trial over"),Be.save&&(lo.t=10,se("btn-rejoin").classList.add("on"));return}s>20&&!Be.warned?(Be.warned=!0,zt("Back to the line, or the time trial ends")):s<12&&(Be.warned=!1);let r=Wr[Be.cp];if(r){let a=Math.hypot(r.x-N.p.x,r.z-N.p.z);a<14&&(Be.cp++,zt(`${r.n[0].toUpperCase()+r.n.slice(1)} \xB7 ${fc(Be.t)}`)),ff(r.x,r.z,`${r.n} \xB7 ${wh(a)}`)}else if(ff(Bt.x,Bt.z,`Finish \xB7 ${wh(n)}`),n<4.5){Be.on=!1,Be.away=!0;let a=!Of(),o=vn>1?"lap"+vn:"lap",l=vn>1?"v"+vn:"v",c=!Jt[o]||Be.t<Jt[o];c&&(Jt[o]=Be.t),Be.peak>Jt[l]+.05&&(Jt[l]=Be.peak),zt(`Loop ${fc(Be.t)}${c?" \xB7 best lap":""} \xB7 top speed ${Sh(Be.peak,1)}${vn===1&&Be.peak>18?" \xB7 faster than Cernan\u2019s "+Sh(18):""}${a?" \xB7 Triple speed unlocked: choose it on the start card":""}`);try{localStorage.setItem("lrv-records",JSON.stringify(Jt))}catch{}_c()}se("clock").textContent=fc(Be.t)}var ae={roof:0,on:!1,t:0,fade:0,safe:{x:0,z:0,yaw:0},safeT:0,pieces:[],joints:[],extra:[],brace:[]},bg=[],fr=new Map;function o1(){Ne.updateMatrixWorld(!0);let i=Ne.matrixWorld.clone().invert(),e=new R,t=new Ge,n=new Map,s=r=>(fr.has(r)||fr.set(r,r.clone()),fr.get(r));Ne.traverse(r=>{if(!r.isMesh)return;let a=Bi.findIndex(f=>{for(let p=r;p;p=p.parent)if(p===f.spin)return!0;return!1}),o=i.clone().multiply(r.matrixWorld),l=r.geometry,c=l.attributes.position,d=l.index?l.index.array:null,h=(d?d.length:c.count)/3;t.getNormalMatrix(o);let u=new Float32Array(c.count*3);for(let f=0;f<c.count;f++)e.fromBufferAttribute(c,f).applyMatrix4(o),u[f*3]=e.x,u[f*3+1]=e.y,u[f*3+2]=e.z;for(let f=0;f<h;f++){let p=[0,1,2].map(m=>d?d[f*3+m]:f*3+m),x="w"+a;if(a<0){let m=(u[p[0]*3]+u[p[1]*3]+u[p[2]*3])/3,y=(u[p[0]*3+1]+u[p[1]*3+1]+u[p[2]*3+1])/3,S=(u[p[0]*3+2]+u[p[1]*3+2]+u[p[2]*3+2])/3;if(y>tt.KIT)x="k"+(m>-.1?1:0)+(S>0?1:0);else{let b=m<tt.HA?0:m>tt.HF?2:1;for(let v of Bi)Math.abs(S)>.42&&y>-.9&&Math.abs(m-v.c.x)<.56&&(b=v.c.x>0?2:0);x="c"+b}}n.has(x)||n.set(x,new Map);let g=n.get(x);g.has(r)||g.set(r,{f:u,M:o.clone(),n:t.clone(),list:[]}),g.get(r).list.push(...p)}});for(let[r,a]of n){let o=new nn;for(let{f:h,list:u}of a.values())for(let f of u)o.expandByPoint(e.set(h[f*3],h[f*3+1],h[f*3+2]));let l=o.getCenter(new R),c=o.getSize(new R),d=[];for(let[h,{f:u,n:f,list:p}]of a){let x=h.geometry,g=new St,m=new Float32Array(p.length*3);p.forEach((y,S)=>{m[S*3]=u[y*3]-l.x,m[S*3+1]=u[y*3+1]-l.y,m[S*3+2]=u[y*3+2]-l.z}),g.setAttribute("position",new et(m,3));for(let y of Object.keys(x.attributes)){if(y==="position")continue;let S=x.attributes[y],b=S.itemSize,v=new Float32Array(p.length*b);p.forEach((M,T)=>{if(y==="normal"){e.fromBufferAttribute(S,M).applyMatrix3(f).normalize(),v[T*3]=e.x,v[T*3+1]=e.y,v[T*3+2]=e.z;return}v[T*b]=S.getX(M),b>1&&(v[T*b+1]=S.getY(M)),b>2&&(v[T*b+2]=S.getZ(M)),b>3&&(v[T*b+3]=S.getW(M))}),g.setAttribute(y,new et(v,b))}d.push({geo:g,mat:s(h.material)})}bg.push({c:l,sz:c,parts:d,key:r,kind:r[0]})}}function L0(i,e,t){let n=[];if(t){let o=Math.max(e.x,e.y)/2,l=e.z/2;for(let c=0;c<10;c++){let d=c/10*Math.PI*2;for(let h of[-l,l])n.push(new R(Math.cos(d)*o,Math.sin(d)*o,h))}}else{i.updateMatrixWorld(!0);let o=i.matrixWorld.clone().invert();i.traverse(l=>{if(!l.userData.part)return;let c=new nn;l.children.forEach(h=>{h.geometry.computeBoundingBox(),c.union(h.geometry.boundingBox)});let d=o.clone().multiply(l.matrixWorld);for(let h=0;h<8;h++)n.push(new R(h&1?c.max.x:c.min.x,h&2?c.max.y:c.min.y,h&4?c.max.z:c.min.z).applyMatrix4(d))})}i.updateMatrixWorld(!0);let s=0;for(let o of n){let l=o.clone().applyQuaternion(i.quaternion).add(i.position);s=Math.max(s,ke(l.x,l.z)-l.y)}i.position.y+=s;let r=new nn().setFromPoints(n),a=r.getSize(new R).max(new R(.1,.1,.1));return{pts:n,R:Math.max(...n.map(o=>o.length())),I:new R((a.y*a.y+a.z*a.z)/12,(a.x*a.x+a.z*a.z)/12,(a.x*a.x+a.y*a.y)/12),still:0,rest:!1}}function yg(i=8){Ya([70,50,140,40,60]);let e=Math.max(0,Math.min(1,(i-3.5)/8));ae.on=!0,ae.t=0,ae.fade=0,Ne.visible=!1,ae.id=(ae.id||0)+1,ae.pieces.forEach(u=>vt.remove(u.m)),ae.extra.forEach(u=>vt.remove(u)),ae.pieces=[],ae.joints=[],ae.extra=[],ae.brace=[],fr.forEach(u=>{u.opacity=1,u.transparent=!1,u.needsUpdate=!0}),Ne.updateMatrixWorld(!0);let t=u=>{let f=new Mt;return f.userData.part=!0,u.parts.forEach(({geo:p,mat:x})=>{let g=new Ye(p,x);g.castShadow=!0,f.add(g)}),f},n=Math.random,s={};bg.forEach(u=>{s[u.key]=u});let r=(u,f,p,x,g)=>{let m=f.clone().applyMatrix4(Ne.matrixWorld).sub(N.p),y=N.v.clone().add(N.w.clone().cross(m));y.addScaledVector(m.clone().setY(0).normalize(),p*(.5+n())).add(new R(0,p*(.3+n()*.7),0)),u.position.copy(f).applyMatrix4(Ne.matrixWorld),u.quaternion.copy(N.q),vt.add(u),ae.pieces.push(Object.assign({m:u,v:y,w:N.w.clone().add(new R(n()-.5,n()-.5,n()-.5).multiplyScalar(4*p))},L0(u,g,x)))},a=s.c1.c,o=new Mt;o.add(t(s.c1));let l=e>.85&&n()<(e-.85)*3?n()<.5?"c0":"c2":null,c={};for(let u of["c0","c2"]){let f=s[u];if(!f)continue;if(u===l){r(t(f),f.c,1.2*e,!1);continue}let p=u==="c0"?tt.HA:tt.HF,x=new Mt;x.position.set(p-a.x,tt.HY-a.y,-a.z);let g=t(f);g.position.set(f.c.x-p,f.c.y-tt.HY,f.c.z),x.add(g),o.add(x),x.rotation.z=(n()<.5?-1:1)*(.08+.4*e)*(.6+.4*n()),x.rotation.x=(n()-.5)*.25*e,c[u]=x}for(let u of["w0","w1","w2","w3","k00","k01","k10","k11"]){let f=s[u];if(!f)continue;let p=u[0]==="w";if(n()<(p?.1+.45*e:.45+.4*e)){r(t(f),f.c,(p?1:.6)*(.3+e),p,f.sz);continue}let g=p?c[f.c.x>0?"c2":"c0"]:null,m=t(f);g?m.position.copy(f.c).sub(a).sub(g.position):m.position.copy(f.c).sub(a),m.rotation.set((n()-.5)*(p?.7:1.1)*(.3+e),(n()-.5)*.3*(.3+e),(n()-.5)*(p?.3:1)*(.3+e)),p||m.scale.set(1,.5+.25*n(),1),(g||o).add(m)}o.position.copy(a).applyMatrix4(Ne.matrixWorld),o.quaternion.copy(N.q),vt.add(o);let d=[];for(let u of je){if(!u.visible||u===je[1]&&J.on)continue;u.updateMatrixWorld(!0);let f=u.userData.bones,p=n()<.5,x=new xt,g=new R,m=new R,y=new R((n()-.5)*1.2,.8+1.2*e+n()*.6,(n()-.5)*1.2).multiplyScalar(.15+.85*e),S=new R(n()-.5,n()-.5,n()-.5).multiplyScalar(1.5+2*e),b=[],v=[];for(let _=0;_<10;_++){if(_===7&&!p){b.push(b[0]),v.push(null);continue}let w=zi[_],C=new bs;f[_].matrixWorld.decompose(g,x,m),C.position.copy(w.c).sub(zi[_===7?0:_].c).applyQuaternion(x).add(g),C.quaternion.copy(x),vt.add(C),b.push(C);let P=w.size.clone().multiplyScalar(.5).max(new R(.05,.05,.05)),D=[];for(let B=0;B<8;B++)D.push(new R(B&1?P.x:-P.x,B&2?P.y:-P.y,B&4?P.z:-P.z));let F=P.clone().multiplyScalar(2),I=C.position.clone().sub(N.p),U={m:C,v:N.v.clone().add(N.w.clone().cross(I)).add(y),w:N.w.clone().add(S),inv:_?1:.3,airDamp:.9,pts:D,R:P.length(),I:new R((F.y*F.y+F.z*F.z)/12,(F.x*F.x+F.z*F.z)/12,(F.x*F.x+F.y*F.y)/12),still:0,rest:!1};_===7&&(U.v.add(new R(n()-.5,n(),n()-.5)),U.w.multiplyScalar(1.5)),ae.pieces.push(U),v.push(U)}let M=0;for(let _ of v)if(_)for(let w of _.pts){let C=w.clone().applyQuaternion(_.m.quaternion).add(_.m.position);M=Math.max(M,ke(C.x,C.z)-C.y)}v.forEach(_=>{_&&(_.m.position.y+=M,_.m.updateMatrixWorld(!0))});let T=new Ys(b,Ng(p));for(let[_,w,C]of u.userData.parts){let P=fr.get(w)||(fr.set(w,Object.assign(w.clone(),{onBeforeCompile:w.onBeforeCompile,customProgramCacheKey:w.customProgramCacheKey})),fr.get(w)),D=_;if(p){D=new St;for(let I in _.attributes)D.setAttribute(I,_.attributes[I]);D.setIndex(C)}let F=new js(D,P);F.castShadow=!0,F.frustumCulled=!1,F.bind(T,new Xe),vt.add(F),ae.extra.push(F)}for(let[_,w,C]of io)ae.joints.push({A:v[_],B:v[w],la:C.clone().sub(zi[_].c),lb:C.clone().sub(zi[w].c),lim:d1(_,w)});d.push([v.filter((_,w)=>_&&w!==7),v[0],zi[0].c.clone().negate().applyQuaternion(v[0].m.quaternion).add(v[0].m.position)]),ae.brace.push({T:v[0],arms:[-1,1].map(_=>{let[w,C]=Kf(_);return[v[w],v[C],_g(_),_]})})}let h=o.position.clone().sub(N.p);if(ae.pieces.push(Object.assign({m:o,main:!0,v:N.v.clone().add(N.w.clone().cross(h)),w:N.w.clone(),deck:[new R(-1.5-a.x,-.35-a.y,-1-a.z),new R(1.5-a.x,.1-a.y,1-a.z)]},L0(o))),ae.pieces[ae.pieces.length-1].inv=.03,e<.55){let u=ae.pieces[ae.pieces.length-1],f=u.m.quaternion.clone().invert();for(let[p,x,g]of d)p.forEach(m=>{m.noDeck=!0}),ae.joints.push({A:u,B:x,la:g.clone().sub(u.m.position).applyQuaternion(f),lb:zi[0].c.clone().negate(),belt:!0})}for(let u=0,f=Math.round(30+70*e);u<f;u++){let p=co;co=(co+1)%fo,ei[p*3]=N.p.x+(n()-.5)*2,ei[p*3+1]=N.p.y,ei[p*3+2]=N.p.z+(n()-.5)*2,ss[p*3]=N.v.x*.5+(n()-.5)*3*(.3+e),ss[p*3+1]=n()*2.5*(.3+e),ss[p*3+2]=N.v.z*.5+(n()-.5)*3*(.3+e),Lh[p]=1}N.v.set(0,0,0),N.w.set(0,0,0),it.t=0,it.grounded=!0,zt(e<.4?"Rollover \xB7 the rover is wrecked":"Crash \xB7 the rover breaks apart")}var c1=new R,l1=new R,h1=new R,u1=new R,pf=new R,_g=i=>new R(i*(Et.H.x-Et.S.x),Et.H.y-Et.S.y,Et.H.z-Et.S.z).normalize();function d1(i,e){return e===3||e===4?{k:new R(1,0,0),lo:-1.5,hi:.85,tol:.15}:e===1||e===2?{k:new R(1,0,0),lo:-.5,hi:1.92,tol:.6}:e===8||e===9?{k:_g(e===8?-1:1).clone().cross(new R(0,0,1)).normalize(),lo:-.05,hi:2.5,tol:.35}:null}var En=new xt,Ls=new R,ho=new R,dr=new R,vg=new R,bc=new R,Vh=new R,D0=new R,Tf=new R;function Mg(i,e){let t=i.lim,n=i.A,s=i.B;En.copy(n.m.quaternion).invert().multiply(s.m.quaternion),En.w<0&&(En.x*=-1,En.y*=-1,En.z*=-1,En.w*=-1);let r=2*Math.acos(Math.min(1,En.w)),a=Math.sqrt(Math.max(1e-12,1-En.w*En.w));Ls.set(En.x,En.y,En.z).multiplyScalar(r/a);let o=Ls.dot(t.k);ho.copy(Ls).addScaledVector(t.k,-o);let l=ho.length();dr.copy(t.k).multiplyScalar(o-Math.max(t.lo,Math.min(t.hi,o))),l>t.tol&&dr.addScaledVector(ho,1-t.tol/l);let c=dr.length();if(c<1e-4)return;dr.applyQuaternion(n.m.quaternion);let d=bc.copy(dr).divideScalar(c),h=n.inv*3/(n.I.x+n.I.y+n.I.z),u=s.inv*3/(s.I.x+s.I.y+s.I.z),f=h/(h+u),p=u/(h+u);s.m.quaternion.premultiply(En.setFromAxisAngle(d,-c*p)).normalize(),n.m.quaternion.premultiply(En.setFromAxisAngle(d,c*f)).normalize();let x=vg.copy(s.w).sub(n.w).dot(d);x>0&&(s.w.addScaledVector(d,-x*p),n.w.addScaledVector(d,x*f)),n.rest=s.rest=!1}function f1(i){if(!(ae.t>3))for(let e of ae.brace){let t=e.T;if(t.rest||ae.t>.6&&t.v.lengthSq()<.3&&t.w.lengthSq()<2)continue;let n=t.m.quaternion;D0.set(0,0,1).applyQuaternion(n),Tf.set(1,0,0).applyQuaternion(n);for(let[s,r,a,o]of e.arms){bc.set(0,-1,0).addScaledVector(D0,.35).addScaledVector(Tf,.45*o).normalize();for(let l of[s,r])Vh.copy(a).applyQuaternion(l.m.quaternion).cross(bc),l.w.addScaledVector(Vh,260*i).addScaledVector(vg.copy(l.w).sub(t.w),-9*i),l.rest=!1}}}var hc=new R,Qn=new R,uc=new R,Th=new R,F0=new xt;function p1(){let i=ae.pieces.find(n=>n.main);if(!i||!i.deck)return;let[e,t]=i.deck;F0.copy(i.m.quaternion).invert();for(let n of ae.pieces)if(!(n===i||n.rest||n.noDeck))for(let s of n.pts){if(hc.copy(s).applyQuaternion(n.m.quaternion).add(n.m.position),Qn.copy(hc).sub(i.m.position).applyQuaternion(F0),Qn.x<=e.x||Qn.x>=t.x||Qn.y<=e.y||Qn.y>=t.y||Qn.z<=e.z||Qn.z>=t.z){s.clear=!0;continue}if(!s.clear)continue;let r=[Qn.x-e.x,t.x-Qn.x,Qn.y-e.y,t.y-Qn.y,Qn.z-e.z,t.z-Qn.z],a=0;for(let u=1;u<6;u++)r[u]<r[a]&&(a=u);uc.set(a===0?-1:a===1?1:0,a===2?-1:a===3?1:0,a===4?-1:a===5?1:0).applyQuaternion(i.m.quaternion),n.m.position.addScaledVector(uc,Math.min(r[a],.05));let o=Qn.copy(hc).sub(n.m.position),l=Th.copy(n.w).cross(o).add(n.v),c=hc.sub(i.m.position),d=l.sub(hc.copy(i.w).cross(c).add(i.v)),h=d.dot(uc);if(h<0){let u=n.inv||1,f=i.inv||1,p=u/(u+f),x=f/(u+f);Th.copy(uc).multiplyScalar(-h*1.05),n.v.addScaledVector(Th,p),i.v.addScaledVector(Th,-x),n.v.addScaledVector(d.addScaledVector(uc,-h),-.3*p),i.rest=!1}}}function m1(i){f1(i);for(let e of ae.joints){e.lim&&Mg(e,i);let t=e.A,n=e.B,s=c1.copy(e.la).applyQuaternion(t.m.quaternion),r=l1.copy(e.lb).applyQuaternion(n.m.quaternion),a=h1.copy(n.m.position).add(r).sub(t.m.position).sub(s),o=u1.copy(n.w).cross(r).add(n.v).sub(pf.copy(t.w).cross(s)).sub(t.v),l=a.multiplyScalar(-1600).addScaledVector(o,-32).multiplyScalar(i);l.lengthSq()>1e-7&&(t.rest=n.rest=!1),n.v.addScaledVector(l,n.inv),t.v.addScaledVector(l,-t.inv);let c=3/(n.I.x+n.I.y+n.I.z),d=3/(t.I.x+t.I.y+t.I.z);n.w.addScaledVector(pf.copy(r).cross(l),n.inv*c*.5),t.w.addScaledVector(pf.copy(s).cross(l),-t.inv*d*.5)}}var Ah=new xt,g1=new R,x1=new R,N0=new R,b1=new R,U0=new R;function Sg(i,e){if(i.rest)return;let t=i.m.quaternion,n=i.m.position,s=x1.set(0,-bi,0),r=b1.set(0,0,0),a=Math.max(4,i.pts.length),o=9600/a,l=240/a,c=120/a,d=0;if(n.y-i.R<ke(n.x,n.z)+.5)for(let p of i.pts){let x=U0.copy(p).applyQuaternion(t),g=x.x+n.x,m=x.y+n.y,y=x.z+n.z,S=ke(g,y)-m;if(S<=0)continue;d++;let b=vf(g,y),v=N0.copy(i.w).cross(x).add(i.v),M=v.dot(b),T=Math.max(0,o*Math.min(S,.08)-l*M),_=v.addScaledVector(b,-M),w=_.length(),C=w>1e-5?Math.min(.8*T,w*c)/w:0,P=g1.copy(b).multiplyScalar(T).addScaledVector(_,-C);s.add(P),r.add(x.cross(P))}i.v.addScaledVector(s,e),Ah.copy(t).invert();let h=r.applyQuaternion(Ah),u=U0.copy(i.w).applyQuaternion(Ah);u.x+=h.x/i.I.x*e,u.y+=h.y/i.I.y*e,u.z+=h.z/i.I.z*e,i.w.copy(u.applyQuaternion(t)),d?(i.w.multiplyScalar(Math.exp(-e*1.2)),i.v.multiplyScalar(Math.exp(-e*.4))):i.airDamp&&i.w.multiplyScalar(Math.exp(-e*i.airDamp)),n.addScaledVector(i.v,e);let f=i.w.length();f>1e-6&&t.premultiply(Ah.setFromAxisAngle(N0.copy(i.w).divideScalar(f),f*e)).normalize(),i.still=d&&i.v.length()<.06&&f<.08?i.still+e:0,i.still>.6&&(i.rest=!0)}function y1(i){if(ae.on?(ae.t+=i)>4.5&&(ae.on=!1,Ne.visible=!0,hs(ae.safe.x,ae.safe.z,ae.safe.yaw),gr=!1,zt("A new rover \xB7 back where you last drove safely"),J.ph==="film"&&J.crash&&Og(J.crash)):((ae.safeT+=i)>1&&yn.y>.85&&it.grounded&&(ae.safeT=0,ae.safe={x:N.p.x,z:N.p.z,yaw:Math.atan2(-Ft.z,Ft.x)}),(ae.roof>3.5||yn.y<-.2&&ae.topDown)&&(J.crash=J.ph==="film"?yi:0,yg(Math.max(ae.roof,N.v.length()))),ae.topDown=!1,ae.roof=0),ae.pieces.length&&(ae.fade+=i)>10){let t=Math.max(0,1-(ae.fade-10)/1.5);fr.forEach(n=>{n.transparent||(n.transparent=!0,n.needsUpdate=!0),n.opacity=t}),t===0&&(ae.pieces.forEach(n=>vt.remove(n.m)),ae.extra.forEach(n=>vt.remove(n)),ae.pieces=[],ae.joints=[],ae.extra=[],ae.brace=[])}let e=Math.min(12,Math.ceil(i*200));for(let t=0;t<e;t++){m1(i/e);for(let n of ae.pieces)Sg(n,i/e);p1();for(let n of ae.joints)n.lim&&Mg(n)}}var Fh=0;function Gf(){let i=Math.atan2(-Ft.z,Ft.x);hs(N.p.x,N.p.z,i),zt("Back on its wheels")}se("btn-recover").addEventListener("click",Gf);Ts&&(document.querySelectorAll(".spd button").forEach(i=>{i.innerHTML=["Real","Double","Triple"][i.dataset.v-1]+"<small>"+Sh(18*i.dataset.v)+"</small>"}),se("spec-rover").textContent="About 1,540 lb loaded with crew; 10 ft long; four wire-mesh wheels, each with its own motor; front and rear steering",se("fine-rec").textContent="11 mph",se("spec-top").textContent="11 mph, the record Gene Cernan set on Apollo 17 (it was built for about 8 mph on the level). Faster downhill, where gravity does the work");var Wf=()=>document.querySelectorAll(".spd button").forEach(i=>i.classList.toggle("on",+i.dataset.v===vn));document.querySelectorAll(".spd button").forEach(i=>{i.dataset.v==="3"&&(i.hidden=!Of()),i.addEventListener("click",()=>{Be.on&&+i.dataset.v!==vn&&(Be.on=!1,Be.away=!1,se("clock").textContent="",zt("Speed changed \xB7 time trial over")),fg(+i.dataset.v),_c(),Wf()})});Wf();se("btn-go").addEventListener("click",()=>{se("brief").classList.remove("on"),tt.ok&&st.on?T1():(rn=Bt.live=!0,je.forEach(i=>{i.visible=!0}))});se("cine-skip").addEventListener("click",()=>{Ce.on?Xf():Gt.on&&Gt.t<Gt.lines[2][0]&&(Gt.t=Gt.lines[2][0])});var Kh=["menu","settings","gpsheet"],Gh={was:!1},Yh=()=>Kh.some(i=>se(i).classList.contains("on"));function Af(i){Yh()||(Gh.was=rn,rn=!1),se(i).classList.add("on")}function go(i=Gh.was){Kh.forEach(e=>se(e).classList.remove("on")),se("gp-vid").pause(),rn=i}function wg(){Ce.on&&Xf(),Gt.on&&(Gt.on=!1,document.body.classList.remove("briefing"),se("cine-cap").classList.remove("on"),Gt.cap=""),ae.on&&(ae.on=!1,Ne.visible=!0),kt.on&&Ef(),Dt.on&&(Dt.t=99,qh(je[1],.016)),J.on&&Yf(),Qt.on&&Qt.s.forEach((i,e)=>{i.on&&(i.t=99,qh(je[e],.016,i))}),Be.on=!1,Be.save=null,lo.t=0,se("btn-rejoin").classList.remove("on"),se("clock").textContent="",je.forEach(i=>{i.visible=!0}),Bt.live=!0,gr=!1}{let i=(n,s)=>{let r=a=>{a.preventDefault(),a.stopPropagation(),s()};n.addEventListener("pointerup",r),n.addEventListener("click",r)},e=0,t=n=>()=>{let s=performance.now();s-e>400&&(e=s,n())};i(se("back"),t(()=>{se("brief").classList.contains("on")?location.href="../objects":Yh()?go():Af("menu")})),i(se("btn-set"),t(()=>{Eg(),Kh.forEach(n=>se(n).classList.remove("on")),Af("settings")}))}se("m-resume").addEventListener("click",()=>go());se("m-trial").addEventListener("click",()=>{wg(),Be.away=!1,hs(Bt.x,Bt.z+22,Math.PI/2),go(!0),se("brief").classList.remove("on"),zt("Drive through the ring to start the clock")});se("m-lander").addEventListener("click",()=>{wg(),hs(0,0,Math.atan2(350,82)),go(!0),se("brief").classList.remove("on"),zt("Back beside the lander")});se("m-objects").addEventListener("click",()=>{location.href="../objects"});var po={known:!1,offerT:0};function qf(){po.offerT=0,se("btn-gp").classList.remove("on");let i=Yh()?Gh.was:rn;Kh.forEach(t=>se(t).classList.remove("on")),Af("gpsheet"),Gh.was=i;let e=se("gp-vid");e.currentTime=0,e.play().catch(()=>{})}se("m-gp").addEventListener("click",qf);se("btn-gp").addEventListener("click",qf);se("gp-close").addEventListener("click",()=>{se("gp-vid").pause(),go()});var yc=rc();function Eg(){Wf(),yc=rc(),document.querySelectorAll(".cam button").forEach(e=>e.classList.toggle("on",+e.dataset.c===ti)),document.querySelectorAll(".det button").forEach(e=>e.classList.toggle("on",e.dataset.q===yc)),se("set-apply").hidden=!0;let i=se("set-rec");i.armed=!1,i.textContent="Reset records",se("set-note").textContent=`Now drawing at ${_h[0].toUpperCase()+_h.slice(1)}. Lower detail runs smoother; higher looks sharper.`}document.querySelectorAll(".cam button").forEach(i=>i.addEventListener("click",()=>{Vf(+i.dataset.c),Eg()}));document.querySelectorAll(".det button").forEach(i=>i.addEventListener("click",()=>{yc=i.dataset.q,document.querySelectorAll(".det button").forEach(e=>e.classList.toggle("on",e===i)),se("set-apply").hidden=yc===rc()}));se("set-apply").addEventListener("click",()=>{v0(yc),location.reload()});se("set-done").addEventListener("click",()=>go());se("set-rec").addEventListener("click",()=>{let i=se("set-rec");if(!i.armed){i.armed=!0,i.textContent="Tap again to erase";return}Object.keys(Jt).forEach(e=>{Jt[e]=0}),it.best=0;try{localStorage.removeItem("lrv-records")}catch{}_c(),i.armed=!1,i.textContent="Records erased"});var cs=[],Oe={on:!1,t:0,end:0,cam:new R,jump:null,offerT:0,save:null},yi=0;function _1(){for(cs.push([yi,N.p.x,N.p.y,N.p.z,N.q.x,N.q.y,N.q.z,N.q.w,N.steer,...Rn.map(i=>i.spin)]);cs.length&&cs[0][0]<yi-40;)cs.shift()}function v1(i){if(!(i.t>=1.5||i.d>=12)||!it.start)return;let e=it.start,t=N.p,n=t.x-e.x,s=t.z-e.z,r=n*n+s*s||1,a=oi.find(o=>{if(o.R<1.5)return!1;let l=Math.max(0,Math.min(1,((o.x-e.x)*n+(o.z-e.z)*s)/r));return Math.hypot(e.x+n*l-o.x,e.z+s*l-o.z)<o.R*1.15});a&&(Oe.jump={t0:yi-i.t,t1:yi,S:e.clone(),E:t.clone(),c:a,a:i},Oe.offerT=6,se("btn-replay").classList.add("on"))}function Tg(){let i=Oe.jump;if(!i||Oe.on||ae.on)return;se("btn-replay").classList.remove("on"),Oe.offerT=0,Oe.save={run:rn,steer:N.steer,spin:Rn.map(u=>u.spin)},Oe.fov=Qe.fov,Oe.on=!0,Oe.t=i.t0-1.2,Oe.end=Math.min(yi,i.t1+1.8),rn=!1,document.body.classList.add("replay");let e=(i.S.x+i.E.x)/2,t=(i.S.z+i.E.z)/2,n=Math.max(1,Math.hypot(i.E.x-i.S.x,i.E.z-i.S.z)),s=(i.E.x-i.S.x)/n,r=(i.E.z-i.S.z)/n,a=-r,o=s;(e-i.c.x)*a+(t-i.c.z)*o<0&&(a=-a,o=-o);let l=Math.max(9,Math.min(30,n*.7+6)),c=e+a*l-s*n*.2,d=t+o*l-r*n*.2;Oe.cam.set(c,ke(c,d)+1.3,d);let h=se("cine-cap");h.textContent=`Replay \xB7 ${i.a.t.toFixed(1)} s in the air \xB7 ${rr(i.a.d,1)} \xB7 ${rr(i.a.peak,1)} high`,h.offsetWidth,h.classList.add("on")}function Ag(){Oe.on&&(Oe.on=!1,document.body.classList.remove("replay"),Qe.fov=Oe.fov,Qe.updateProjectionMatrix(),se("cine-cap").classList.remove("on"),N.steer=Oe.save.steer,Rn.forEach((i,e)=>{i.spin=Oe.save.spin[e]}),rn=Oe.save.run,gr=!1,Oe.film&&(Oe.film=!1,je[1].visible=!0,Ne.position.copy(N.p),Ne.quaternion.copy(N.q),zt("Drive up beside Schmitt and stop to pick him up"),po.offerT=8,se("btn-gp").classList.add("on")))}function M1(i){if(Oe.t+=i*(Oe.film?1:.55),Oe.t>=Oe.end)return Ag(),!1;let e=cs.findIndex(o=>o[0]>Oe.t);e<1&&(e=e<0?cs.length-1:1);let t=cs[e-1],n=cs[e],s=Math.max(0,Math.min(1,(Oe.t-t[0])/Math.max(1e-6,n[0]-t[0])));Ne.position.set(t[1]+(n[1]-t[1])*s,t[2]+(n[2]-t[2])*s,t[3]+(n[3]-t[3])*s),Ne.quaternion.set(t[4],t[5],t[6],t[7]).slerp(Qa.set(n[4],n[5],n[6],n[7]),s),N.steer=t[8]+(n[8]-t[8])*s,Rn.forEach((o,l)=>{o.spin=t[9+l]+(n[9+l]-t[9+l])*s}),Dg(),Qe.position.copy(Oe.cam);let r=Oe.film?.25:0,a=Oe.t;return Qe.lookAt(mt.copy(Ne.position).add(Yr.set(r*Math.sin(a*2.3),.3+r*.6*Math.sin(a*3.1+1),r*Math.sin(a*1.7+2)))),Qe.fov=Math.max(14,Math.min(Oe.fov,2*Math.atan((Oe.film?11:7)/Qe.position.distanceTo(Ne.position))*180/Math.PI)),Qe.updateProjectionMatrix(),ci.position.copy(Ne.position).addScaledVector(Uf,120),ci.target.position.copy(Ne.position),!0}se("btn-replay").addEventListener("click",Tg);se("btn-board").addEventListener("click",Wg);se("btn-jump").addEventListener("pointerdown",i=>{i.preventDefault(),xe.jumpQ=1});se("btn-rejoin").addEventListener("click",t1);se("cine-skip").addEventListener("click",()=>{Oe.on&&Ag()});var rn=!1,Rf=performance.now(),to=new R,no=new R,gr=!1;function Nh(i){let e=Math.min(.05,(i-Rf)/1e3);if(Rf=i,Gt.on&&i1(e),rn){let s=(Ni.w||Ni.arrowup?1:0)-(Ni.s||Ni.arrowdown?1:0),r=(Ni.a||Ni.arrowleft?1:0)-(Ni.d||Ni.arrowright?1:0);xi=s||P0.y,lr=-(r||-P0.x),xe.on?(xe.f=xi,xe.s=lr,xi=0,lr=0):QS(e)&&(xi=kt.th,lr=kt.st),(Dt.on||Qt.on||J.ph==="out"||J.ph==="in")&&(xi=0,lr=0,N.v.multiplyScalar(Math.exp(-e*3))),(Math.abs(xi)>.02||Math.abs(lr)>.02)&&(gc=!1);let a=Math.min(12,Math.ceil(e/(1/240))),o=e/a;if(!ae.on)for(let l=0;l<a;l++)wf(o);yn.set(0,1,0).applyQuaternion(N.q),Ft.set(1,0,0).applyQuaternion(N.q),y1(e),GS(e),jS(),Math.max(Math.abs(N.p.x-cn.cx),Math.abs(N.p.z-cn.cz))>14&&og(N.p.x,N.p.z),Fh=yn.y<.35?Fh+e:0,se("btn-recover").classList.toggle("on",Fh>1.2),yi+=e,ae.on||_1(),(Oe.offerT>0&&(Oe.offerT-=e)<=0||ae.on)&&(Oe.offerT=0,se("btn-replay").classList.remove("on")),po.offerT>0&&(po.offerT-=e)<=0&&se("btn-gp").classList.remove("on"),lo.t>0&&((lo.t-=e)<=0||Be.on)&&(lo.t=0,se("btn-rejoin").classList.remove("on"))}if(Oe.on&&M1(e)){Un.render(vt,Qe),requestAnimationFrame(Nh);return}if(Ne.position.copy(N.p),Ne.quaternion.copy(N.q),Dg(),uw(e),Ce.on){R1(e),Un.render(vt,Qe),requestAnimationFrame(Nh);return}Lt.idle+=e,Lt.idle>(ti===2?4:2.5)&&(Lt.yaw*=Math.exp(-e*1.5),Lt.pitch+=(.18-Lt.pitch)*Math.min(1,e*1.5)),yn.set(0,1,0).applyQuaternion(N.q),Ft.set(1,0,0).applyQuaternion(N.q);let t=ae.on&&ae.pieces.find(s=>s.main);if(je[0]&&!Ce.on&&Bt.live&&(je[0].visible=ti!==2),t){if(ae.camFor!==ae.id){ae.camFor=ae.id;let c;do c=Math.floor(Math.random()*3);while(c===ae.cam);ae.cam=c,ae.side=Math.random()<.5?1:-1}let s=Ae(0,2.2,ae.t),r=Math.atan2(-Ft.z,Ft.x)+Math.PI,a=t.m.position,o=r+ae.side*Math.PI/2,l=ae.cam===0?mt.set(a.x+Math.cos(o)*(9+3*s),a.y+.45,a.z-Math.sin(o)*(9+3*s)):ae.cam===1?mt.set(a.x+Math.cos(r+.5*ae.side)*(14+4*s),a.y+.9+.6*s,a.z-Math.sin(r+.5*ae.side)*(14+4*s)):mt.set(a.x+Math.cos(r)*(8-s),a.y+2.5+18*s,a.z-Math.sin(r)*(8-s));l.y=Math.max(l.y,ke(l.x,l.z)+(ae.cam===2?1.5:.35)),to.lerp(l,1-Math.exp(-e*3)),no.lerp(a,1-Math.exp(-e*6)),Qe.position.copy(to),Qe.lookAt(no)}else if(ti===2&&!xe.on){Qe.position.copy(ur.set(-.62,.95,-.32).applyQuaternion(N.q).add(N.p));let s=Math.max(-2.3,Math.min(2.3,Lt.yaw)),r=Lt.pitch-.18-.14;Yr.set(Math.cos(s)*Math.cos(r),Math.sin(r),-Math.sin(s)*Math.cos(r)).applyQuaternion(N.q),Qe.up.copy(yn),Qe.lookAt(mt.copy(Qe.position).add(Yr)),Qe.up.set(0,1,0)}else{let s=xe.on&&xe.W[0],r=s?kS.set(xe.W[0].x,ke(xe.W[0].x,xe.W[0].z)+.3,xe.W[0].z):N.p,a=ti===3,o=s?Math.atan2(-Math.cos(xe.face),Math.sin(xe.face)):Math.atan2(-Ft.z,Ft.x),l=o+Math.PI+Lt.yaw,c=(ti===1?16:a?12:7.5)*(s?.7:1),d=ti===1?.35:a?-.2:0,h=mt.set(r.x+Math.cos(l)*Math.cos(Lt.pitch+d)*c,r.y+(a?.2:1.6)+Math.sin(Lt.pitch+d)*c,r.z-Math.sin(l)*Math.cos(Lt.pitch+d)*c);h.y=Math.max(h.y,ke(h.x,h.z)+(a?.45:1.2)),gr||(to.copy(h),no.copy(r),gr=!0),to.lerp(h,1-Math.exp(-e*4)),no.lerp(ur.copy(r).add(Yr.set(0,s?.9:.6,0)),1-Math.exp(-e*8)),Qe.position.copy(to),Qe.lookAt(no)}window.__lrv&&window.__lrv.cam&&Qe.position.copy(window.__lrv.cam),window.__lrv&&window.__lrv.look&&Qe.lookAt(window.__lrv.look),ci.position.copy(N.p).addScaledVector(Uf,120),ci.target.position.copy(N.p);let n=xe.on&&xe.W[0]?Math.hypot(xe.W[0].vx,xe.W[0].vz)*3.6:Math.abs(N.v.dot(Ft))*3.6;se("speed").textContent=Mh(n).toFixed(1),rn&&a1(n,it.grounded&&it.t===0,e),r1(e),xe.on||(se("air").textContent=it.t>.15?`Airborne ${it.t.toFixed(1)} s`:""),Dh>0&&(Dh-=e,Dh<=0&&se("toast").classList.remove("on")),N1(),rn&&(D1(e),pw(e)),Un.render(vt,Qe),requestAnimationFrame(Nh)}var Bi=[];function S1(){Ne.updateMatrixWorld(!0);let i=Ne.matrixWorld.clone().invert(),e=[],t=new R;Ne.traverse(l=>{l.isMesh&&e.push(l)});let n=e.map(l=>{let c=i.clone().multiply(l.matrixWorld),d=l.geometry.attributes.position,h=new Float32Array(d.count*3);for(let u=0;u<d.count;u++)t.fromBufferAttribute(d,u).applyMatrix4(c),h[u*3]=t.x,h[u*3+1]=t.y,h[u*3+2]=t.z;return{m:l,M:c,f:h}}),s=[0,1,2,3].map(()=>({x0:1e9,x1:-1e9,z0:1e9,z1:-1e9,y0:1e9,n:0}));for(let{f:l}of n)for(let c=0;c<l.length;c+=3){let d=l[c],h=l[c+1],u=l[c+2];if(h>-.45||Math.abs(d)<.6||Math.abs(u)<.45)continue;let f=s[(d>0?0:2)+(u>0?0:1)];f.x0=Math.min(f.x0,d),f.x1=Math.max(f.x1,d),f.z0=Math.min(f.z0,u),f.z1=Math.max(f.z1,u),f.y0=Math.min(f.y0,h),f.n++}if(s.some(l=>l.n<100))return;let r=s.map(l=>{let c=(l.x0+l.x1)/2,d=(l.z0+l.z1)/2,h=new Float32Array(21).fill(1e9),u=new Float32Array(21).fill(-1e9),f=[];for(let{f:P}of n)for(let D=0;D<P.length;D+=3){let F=P[D],I=P[D+1],U=P[D+2],B=Math.floor((I-l.y0)*100)-4;Math.abs(U-d)>(l.z1-l.z0)/2+.05||Math.abs(F-c)>.5||(B>=0&&B<21&&(h[B]=Math.min(h[B],F),u[B]=Math.max(u[B],F)),I<l.y0+.12&&f.push(U))}let p=0,x=0,g=0,m=0,y=0,S=0;h.forEach((P,D)=>{if(u[D]<P)return;let F=l.y0+(D+4.5)/100,I=(u[D]-P)/2,U=I*I+F*F;p++,x+=(u[D]+P)/2,g+=F,m+=U,y+=F*F,S+=F*U});let b=(p*S-g*m)/(p*y-g*g),v=x/p,M=b/2,T=Math.sqrt((m-b*g)/p+M*M);f.sort((P,D)=>P-D);let _=f[Math.floor(f.length*.01)]-.015,w=f[Math.floor(f.length*.99)]+.015,C=d>0?.04:-.04;return{c:new R(v,M,(_+w)/2),r:T*1.015,hw:(w-_)/2,z0:_-(_+w)/2+Math.min(0,C),z1:w-(_+w)/2+Math.max(0,C)}});if(r.some(l=>!(l.r>.25&&l.r<.5&&l.hw>.05&&l.hw<.25)))return;let a=(l,c)=>{for(let d=0;d<4;d++){let h=r[d],u=l[c*3]-h.c.x,f=l[c*3+1]-h.c.y,p=l[c*3+2]-h.c.z;if(u*u+f*f<h.r*h.r&&p>h.z0&&p<h.z1)return d}return-1};r.forEach(l=>{let c=new Mt,d=new Mt;c.position.copy(l.c),c.add(d),Ne.add(c),l.steer=c,l.spin=d});let o=new Ge;for(let{m:l,M:c,f:d}of n){let h=l.geometry,u=h.index?h.index.array:null,f=(u?u.length:h.attributes.position.count)/3,p=(T,_)=>u?u[T*3+_]:T*3+_,x=[[],[],[],[],[]],g=l.material.map,m=g&&g.image,y=h.attributes.uv,S=null;if(m&&m.width&&y)try{let T=document.createElement("canvas");T.width=m.width,T.height=m.height;let _=T.getContext("2d");_.drawImage(m,0,0),S=_.getImageData(0,0,m.width,m.height).data}catch{S=null}let b=(T,_,w)=>{if(!S)return!1;let C=(y.getX(T)+y.getX(_)+y.getX(w))/3,P=(y.getY(T)+y.getY(_)+y.getY(w))/3;g.flipY&&(P=1-P);let D=Math.min(m.width-1,Math.max(0,Math.floor((C-Math.floor(C))*m.width))),F=Math.min(m.height-1,Math.max(0,Math.floor((P-Math.floor(P))*m.height))),I=(F*m.width+D)*4;return S[I]-S[I+2]>60&&S[I]>90};for(let T=0;T<f;T++){let _=p(T,0),w=p(T,1),C=p(T,2),P=a(d,_);x[P>=0&&a(d,w)===P&&a(d,C)===P&&!b(_,w,C)?P:4].push(_,w,C)}if(x[4].length===f*3)continue;o.getNormalMatrix(c);let v=(T,_)=>{let w=new St,C=h.attributes.normal,P=new Float32Array(T.length*3);if(T.forEach((D,F)=>{P[F*3]=d[D*3]-_.x,P[F*3+1]=d[D*3+1]-_.y,P[F*3+2]=d[D*3+2]-_.z}),w.setAttribute("position",new et(P,3)),C){let D=new Float32Array(T.length*3);T.forEach((F,I)=>{t.fromBufferAttribute(C,F).applyMatrix3(o).normalize(),D[I*3]=t.x,D[I*3+1]=t.y,D[I*3+2]=t.z}),w.setAttribute("normal",new et(D,3))}for(let D of Object.keys(h.attributes)){if(D==="position"||D==="normal")continue;let F=h.attributes[D],I=F.itemSize,U=new Float32Array(T.length*I);T.forEach((B,W)=>{U[W*I]=F.getX(B),I>1&&(U[W*I+1]=F.getY(B)),I>2&&(U[W*I+2]=F.getZ(B)),I>3&&(U[W*I+3]=F.getW(B))}),w.setAttribute(D,new et(U,I))}return w},M=(T,_)=>{let w=new Ye(T,l.material);w.castShadow=w.receiveShadow=!0,_.add(w)};M(v(x[4],new R),Ne);for(let T=0;T<4;T++)x[T].length&&M(v(x[T],r[T].c),r[T].spin);l.parent.remove(l)}Bi.push(...r)}var tt={ok:!1,aft:new Mt,fwd:new Mt,HA:-.8,HF:.7,HY:.05,HB:-.4,KIT:.05,kit:[]};function z0(i,e,t,n,s){let r=new R,a=new St,o=new Float32Array(n.length*3);n.forEach((l,c)=>{o[c*3]=e[l*3]-s.x,o[c*3+1]=e[l*3+1]-s.y,o[c*3+2]=e[l*3+2]-s.z}),a.setAttribute("position",new et(o,3));for(let l of Object.keys(i.attributes)){if(l==="position")continue;let c=i.attributes[l],d=c.itemSize,h=new Float32Array(n.length*d);n.forEach((u,f)=>{if(l==="normal"){r.fromBufferAttribute(c,u).applyMatrix3(t).normalize(),h[f*3]=r.x,h[f*3+1]=r.y,h[f*3+2]=r.z;return}h[f*d]=c.getX(u),d>1&&(h[f*d+1]=c.getY(u)),d>2&&(h[f*d+2]=c.getZ(u)),d>3&&(h[f*d+3]=c.getW(u))}),a.setAttribute(l,new et(h,d))}return a}function w1(){if(Bi.length!==4)return;Ne.updateMatrixWorld(!0);let i=Ne.matrixWorld.clone().invert(),e=new R,t=new Ge,n=[],s=new R;Ne.traverse(o=>{o.isMesh&&!Bi.some(l=>{for(let c=o;c;c=c.parent)if(c===l.spin)return!0;return!1})&&n.push(o)}),tt.aft.position.set(tt.HA,tt.HY,0),tt.fwd.position.set(tt.HF,tt.HY,0);let r=new Mt;Ne.add(r,tt.aft,tt.fwd);let a=new Map;for(let o of n){let l=i.clone().multiply(o.matrixWorld),c=o.geometry,d=c.attributes.position,h=c.index?c.index.array:null,u=(h?h.length:d.count)/3;t.getNormalMatrix(l);let f=new Float32Array(d.count*3);for(let x=0;x<d.count;x++)e.fromBufferAttribute(d,x).applyMatrix4(l),f[x*3]=e.x,f[x*3+1]=e.y,f[x*3+2]=e.z;let p=[[],[],[]];for(let x=0;x<u;x++){let g=[0,1,2].map(v=>h?h[x*3+v]:x*3+v),m=(f[g[0]*3]+f[g[1]*3]+f[g[2]*3])/3,y=(f[g[0]*3+1]+f[g[1]*3+1]+f[g[2]*3+1])/3,S=m<tt.HA?0:m>tt.HF?2:1,b=(f[g[0]*3+2]+f[g[1]*3+2]+f[g[2]*3+2])/3;for(let v of Bi)Math.abs(b)>.42&&y>-.9&&y<=tt.KIT&&Math.abs(m-v.c.x)<.56&&(S=v.c.x>0?2:0);if(y>tt.KIT){let v=S+"|"+Math.floor(m/.45)+"|"+Math.floor(y/.45)+"|"+Math.floor(b/.45);a.has(v)||a.set(v,{sec:S,parts:new Map,n:0,x:0,y:0,z:0});let M=a.get(v);M.parts.has(o)||M.parts.set(o,{f,nm:t.clone(),l:[]}),M.parts.get(o).l.push(...g),M.n++,M.x+=m,M.y+=y,M.z+=b}else p[S].push(...g)}p.forEach((x,g)=>{if(!x.length)return;let m=[tt.aft,r,tt.fwd][g],y=new Ye(z0(c,f,t,x,g===1?s:m.position),o.material);y.castShadow=y.receiveShadow=!0,m.add(y)}),o.parent.remove(o)}for(let o of a.values()){let l=new R(o.x/o.n,o.y/o.n,o.z/o.n),c=[tt.aft,r,tt.fwd][o.sec],d=new Mt;d.position.copy(l).sub(o.sec===1?s:c.position),c.add(d);for(let[h,{f:u,nm:f,l:p}]of o.parts){let x=new Ye(z0(h.geometry,u,f,p,l),h.material);x.castShadow=x.receiveShadow=!0,d.add(x)}tt.kit.push({m:d,y:l.y,x:l.x})}tt.kit.sort((o,l)=>Math.floor(o.y/.45)-Math.floor(l.y/.45)||o.x-l.x),tt.kit.forEach((o,l)=>{o.t=22.6+l*Math.min(.08,4.2/tt.kit.length)}),Bi.forEach((o,l)=>{(Rn[l].at.x>0?tt.fwd:tt.aft).attach(o.steer),o.home=o.steer.position.clone()}),tt.ok=!0}function Rg(i,e,t,n){tt.aft.rotation.z=-Math.PI*i,tt.fwd.rotation.z=Math.PI*e,Bi.forEach((s,r)=>{let a=Rn[r].at.x>0,o=a?n:t,l=Math.sign(s.home.z);s.steer.rotation.x=l*Math.PI/2*o,s.steer.position.set(s.home.x+((a?.4:-.35)-s.home.x)*o,s.home.y+(-.5-s.home.y)*o,s.home.z+(l*.37-s.home.z)*o)})}var Ce={on:!1,t:0,R0:3.42,P:new R,d:new R,q:new xt,end:null,capT:"",pts:null},E1=[[.6,5.2,"11 December 1972, Taurus\u2013Littrow. The rover rode to the Moon folded into a package on the side of the lunar module."],[5.4,8.8,"From the ladder, a D-handle releases the package. A tape pulled from the ground tilts it out, hinged at the bottom of its bay."],[9,12.4,"Partway over, the aft chassis swings open on its springs and locks, and the rear wheels spring into place."],[12.6,16.4,"With the rear wheels on the ground, a second tape lets the front down. The rover moves out from the lander as the forward chassis and its wheels unfold."],[16.6,19.8,"On all four wheels at last, it is disconnected from the lander and pulled clear."],[20,22.4,"Its 210 kg weigh no more here than 35 kg on Earth."],[22.4,27.4,"The crew unfolds the seats and console, and fits the antennas, TV camera and radio relay unit."],[27.6,32.6,"With front and rear wheels both steering, it could turn in a circle about 3 m in radius."]],O0=32.8,Rs=[27.4,32.4];function T1(){Ce.on=!0,Ce.t=0,document.body.classList.add("intro"),Bt.ring.visible=Bt.line.visible=!1,Bt.line.material.uniforms.op.value=0,Ce.pts||(Ce.pts=[],Ne.traverse(h=>{if(!h.isMesh)return;let u=h.geometry.attributes.position,f=Math.min(60,u.count);for(let p=0;p<f;p++)Ce.pts.push([h,new R().fromBufferAttribute(u,Math.floor(p*u.count/f))])})),Ce.d.set(1,0,1).normalize(),Ce.P.set(st.x+Ce.d.x*Ce.R0,st.y+1.35,st.z+Ce.d.z*Ce.R0);let i=Math.atan2(Ce.d.z,-Ce.d.x);Ce.q.setFromAxisAngle(new R(0,1,0),i);let e=st.x+Ce.d.x*(Ce.R0+tt.HF+.9),t=st.z+Ce.d.z*(Ce.R0+tt.HF+.9),n=1,s=.6,r=160,a=(h,u,f)=>h<n||h>f-s?0:u*Math.sin(Math.PI*(h-n)/(f-n-s))**2,o=0,l=null,c=9;for(let h=0;h<8;h++){c=n+s+Math.max(2,2*Math.abs(o)/.36);let u=2*o/(c-n-s),f=c/r,p=e,x=t,g=i;l=[[p,x,g,0]];for(let S=1;S<=r;S++){let b=a((S-.5)*f,u,c);g+=b*f/2,p-=Math.cos(g)*f,x+=Math.sin(g)*f,g+=b*f/2,l.push([p,x,g,a(S*f,u,c)])}let y=Math.atan2(-(Bt.z-x),Bt.x-p)-g;y=Math.atan2(Math.sin(y),Math.cos(y)),o+=y}Ce.path=l,Ce.L=c;let d=l[r];Ce.end={x:d[0],z:d[1],yaw:d[2]},hs(e,t,i)}function Xf(){Ce.on=!1,document.body.classList.remove("intro"),se("cine-cap").classList.remove("on"),Bt.ring.visible=Bt.live=!0,je.forEach(i=>{i.visible=!0}),Rg(0,0,0,0),tt.kit.forEach(i=>{i.m.visible=!0,i.m.scale.setScalar(1)}),hs(Ce.end.x,Ce.end.z,Ce.end.yaw),to.copy(Qe.position),no.copy(N.p),gr=!0,rn=!0}var mf=new xt,A1=new R(0,0,1),or=new R,k0=new R,Rh=new R;function R1(i){let e=Ce.t+=i,t=(b,v)=>Ae(b,v,e);if(e>=O0)return Xf();let n=(b,v)=>{let M=Math.max(0,Math.min(1,(e-b)/(v-b)));return M<=0?0:1+2.2*Math.pow(M-1,3)+1.2*Math.pow(M-1,2)};Rg(1-n(9,10.4),1-n(13.6,15.2),1-n(10,11),1-n(14.8,15.8)),tt.kit.forEach(b=>{let v=Math.min(1,(e-b.t)/.22);b.m.visible=v>0,v>0&&b.m.scale.setScalar(1+2.7*Math.pow(v-1,3)+1.7*Math.pow(v-1,2))});let s=90-4*t(4.6,5.3);for(let[b,v,M]of[[6,7.4,18],[8,9.4,20],[10.4,11.8,16],[12.6,16.6,40]])s-=M*t(b,v);let r=t(12.6,16.6);or.copy(Ce.P).addScaledVector(Ce.d,.6*t(12.8,16.6)+.3*t(17,19)),or.y+=(N.p.y+tt.HB-Ce.P.y)*r;let a=or.x+Ce.d.x*1.75,o=or.z+Ce.d.z*1.75,l=or.y-ke(a,o),c=(Math.asin(Math.max(-1,Math.min(1,-l/1.771)))+Math.atan2(.38,1.73))*180/Math.PI;s=Math.max(s,c,0)*Math.PI/180,mf.copy(Ce.q).multiply(new xt().setFromAxisAngle(A1,-s));let d=k0.copy(or).sub(Rh.set(tt.HF,tt.HB,0).applyQuaternion(mf)),h=t(19,20);if(je.forEach(b=>{b.visible=e>Rs[0]-.4}),e>Rs[0]){let b=Math.min(1,(e-Rs[0])/(Rs[1]-Rs[0])),v=Ce.L*b*b*b*(b*(6*b-15)+10),M=Ce.path,T=M.length-1,_=Math.min(T,v/Ce.L*T),w=Math.min(T-1,Math.floor(_)),C=_-w,P=F=>M[w][F]+(M[w+1][F]-M[w][F])*C;hs(P(0),P(1),P(2)),N.steer=Math.atan(1.15*P(3));let D=v-(Ce.s||0);Ce.s=v,Rn.forEach(F=>{F.spin-=D/Ih})}else Ce.s=0;Ne.position.copy(d).lerp(N.p,h),Ne.quaternion.copy(mf).slerp(N.q,h),Ne.updateMatrixWorld(!0);let u=1e9;for(let[b,v]of Ce.pts)mt.copy(v).applyMatrix4(b.matrixWorld),u=Math.min(u,mt.y-ke(mt.x,mt.z));u<.02&&(Ne.position.y+=.02-u);let f=or.set(-Ce.d.z,0,Ce.d.x),p=Ce.P,x=k0.set(p.x+Ce.d.x*13+f.x*6,p.y+.3,p.z+Ce.d.z*13+f.z*6),g=Rh.set(p.x+Ce.d.x*3.5+f.x*6.5,p.y-.2,p.z+Ce.d.z*3.5+f.z*6.5),m=t(4,8);Qe.position.copy(x).lerp(g,m);let y=new R(N.p.x+Ce.d.x*6-f.x*3,N.p.y+.4,N.p.z+Ce.d.z*6-f.z*3);if(Qe.position.lerp(y,t(17,23.5)),e>Rs[0]-.6){let b=Ce.path,v=b[b.length>>1],M=b[b.length-1],T=Math.cos(M[2]),_=-Math.sin(M[2]),w=-_,C=T;(v[0]-st.x)*w+(v[1]-st.z)*C<0&&(w=-w,C=-C);let P=mt.set(v[0]+w*9-T*3,Zt(v[0],v[1])+5,v[1]+C*9-_*3);Qe.position.lerp(P,t(Rs[0]-.6,Rs[0]+1.6));let D=ti===1?16:7.5,F=ti===1?.35:0,I=Math.cos(Lt.pitch+F)*D;Qe.position.lerp(mt.set(M[0]-T*I,ke(M[0],M[1])+.8+1.6+Math.sin(Lt.pitch+F)*D,M[1]-_*I),t(Rs[1]-1.8,O0))}Qe.position.y=Math.max(Qe.position.y,ke(Qe.position.x,Qe.position.z)+.45),Qe.lookAt(or.copy(p).add(Rh.set(0,1-.4*t(4,10),0)).lerp(mt.copy(Ne.position).add(Rh.set(0,.4,0)),t(6,12))),ci.position.copy(Ne.position).addScaledVector(Uf,120),ci.target.position.copy(Ne.position);let S="";for(let[b,v,M]of E1)e>=b&&e<v&&(S=M);if(S!==Ce.capT){Ce.capT=S;let b=se("cine-cap");b.classList.remove("on"),S&&(b.textContent=S,b.offsetWidth,b.classList.add("on"))}}var ea=[{at:()=>[st.x,st.z,8.5],name:"Challenger",sub:"Apollo 17 landing site \xB7 11 December 1972",body:["Gene Cernan and Harrison Schmitt landed here in the lunar module Challenger, less than 200 m from their target, while Ronald Evans circled overhead in the command module America.","They stayed about 75 hours, longer than any other Apollo crew, and spent more than 22 hours outside on three moonwalks. With the rover they covered about 35 km and brought home about 110 kg of rock and soil, more than any other mission.","On the first moonwalk part of a rear fender was knocked off, and the wheels sprayed the crew and the rover with dust. Overnight they made a new one from laminated maps, duct tape and clamps.","It was the last of the Apollo landings."]},{at:()=>[wt.x,wt.z,7.5],name:"Tracy\u2019s Rock",sub:"Stop 6 \xB7 the foot of the North Massif",body:["This boulder broke loose high on the North Massif and rolled and bounced about a kilometer down the slope, leaving a trail still visible from orbit, then split into five pieces where it stopped. Put back together it would be about 18 by 10 by 6 m. Gene Cernan named it for his daughter, Tracy.","<b>Troctolite 76535.</b> Among the rock fragments the crew raked from the soil here was a coarse-grained crystalline rock about 4.2 to 4.3 billion years old. It formed slowly, deep in the young Moon\u2019s crust, and was later dug out by impacts.","In 2009 researchers at MIT found that it is weakly magnetized, and that its magnetism dates from when it crystallized. That points to a molten, churning core that gave the young Moon a magnetic field, as Earth\u2019s core does today. A 2016 study supported the result."]},{at:()=>[ki.x,ki.z,5],name:"Van Serg crater",sub:"Stop 9 \xB7 the last drive",body:["A crater about 100 m across, blasted through the dark soil that covers the valley floor. The crew came here on the third moonwalk to work out how it formed and to sample the dark material and what lies beneath it.","Its rim is strewn with angular blocks thrown out by the impact, mostly smaller than 30 cm, with a few boulders up to about 2 m across. A piece they broke from a boulder on the rim, sample 79115, turned out to be regolith breccia: loose lunar soil welded into rock by the shock of an impact.","<b>What they found.</b> Harrison Schmitt called it a fresh impact crater with a blocky rim as soon as they arrived. Its shape bears that out: a raised rim of blocks, benches stepping down the inner walls, and a mound of blocks on the floor. Nearly every rock they sampled was the same dark, crumbly breccia, which the geologists read as the valley floor\u2019s own soil, hardened into rock by the impact and thrown out of the crater.","<b>The name.</b> Schmitt named it for Hugh McKinstry (1896\u20131961), a Harvard geology professor who wrote scientific satires under the pen name Nicholas Vanserg."]},{at:()=>[ut.x,ut.z,6],name:"Shorty crater",sub:"Stop 4 \xB7 the second drive \xB7 the orange soil",body:["On the second moonwalk Harrison Schmitt, the only geologist to walk on the Moon, looked down at the rim of this crater and saw orange soil. Shorty is about 110 m across and up to 14 m deep.","Almost all of that soil is tiny beads and broken pieces of orange glass, colored by titanium. They were sprayed out in fire-fountain eruptions about 3.6 billion years ago, buried under a later lava flow, and brought back up by the impact that made the crater. In the core tube the crew drove into the rim, the orange gave way to black beads: the same glass, crystallized as it cooled.","Decades later the beads changed ideas about the Moon itself. In 2008 a team led by Alberto Saal found traces of water in these volcanic glasses, and in 2011 tiny pockets of melt sealed inside crystals in this very soil showed that the Moon\u2019s magma had held about a hundred times more water than earlier studies suggested.","<i>The real Shorty is about 4.3 km west of the lander. It is drawn here at its true size but much closer, so the drive to it is short.</i>"]},{kind:"find",model:"../models/sample-76535.glb",cap:"76535,0 today, about 2 cm across: the largest piece left after samples were cut for study. Drag to turn it, pinch or scroll to zoom. 3D model: NASA Astromaterials 3D.",at:()=>[wt.x-10,wt.z+9,2.5],label:"76535 \xB7 troctolite",name:"76535,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 6",body:["A troctolite: a coarse-grained igneous rock made almost entirely of large grains of pale green olivine and white plagioclase feldspar. It weighs about 156 g and came back in a rake sample from the soil at Station 6, the stop at the split boulder, on the third moonwalk.","It crystallized deep in the young Moon\u2019s crust about 4.2 to 4.3 billion years ago, slowly enough to grow its large, interlocking grains, and was later dug out by impacts.","Few rocks have been studied so closely. In 2009 researchers at MIT found it weakly magnetized since it formed, evidence that the young Moon had a magnetic field from a molten core. In 2021, chemical differences still preserved inside its crystals showed it must have cooled within about 20 million years, far faster than the more than 100 million years once thought."]},{kind:"find",model:"../models/sample-79115.glb",cap:"79115,0 today, about 9 cm long. Drag to turn it, pinch or scroll to zoom. 3D model: NASA Astromaterials 3D.",at:()=>[ki.x+-.65*48,ki.z+-.76*48,2.5],label:"79115 \xB7 breccia",name:"79115,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 9",body:["Regolith breccia: loose lunar soil and broken rock welded into stone by the shock of an impact. On the third moonwalk the crew broke this 346 g piece off the top of a fractured boulder on the rim of Van Serg crater, hoping it would tell how and when the crater formed. Its partner, 79135, 2.3 kg, came from the bottom of the same boulder.","About 60% of it is a fine matrix of mineral debris and glass. Mixed through it are fragments of highland rock, mare basalt and other basalts, and beads of orange volcanic glass like those at Shorty crater: soil from across the valley, swept up and pressed together."]},{kind:"find",at:()=>[ut.x+Math.cos(2.4)*ut.R*1.05,ut.z+Math.sin(2.4)*ut.R*1.05,2.5],label:"74220 \xB7 orange soil",name:"74220,0",sub:"Apollo Lunar Collection \xB7 Apollo 17 \xB7 Station 4",body:["The orange soil itself: 1,180 g scooped from the rim of Shorty crater on the second moonwalk. With the samples from the trench Harrison Schmitt dug across the orange zone and the core tube driven beside it, the set comes to about 4.6 kg.","About 99% of it is beads and broken bits of orange glass; the rest is mostly fragments of basalt. Each bead is a droplet of lava sprayed from a fire fountain about 3.6 billion years ago and frozen to glass in flight. The color comes from titanium.","The beads still hold traces of the gases that drove the eruption. In 2008 and 2011 they gave the first strong evidence of water inside the Moon."]}],C1={"Tracy\u2019s Rock":[["img/tracys-rock.jpg","Harrison Schmitt beside the boulder at Station 6, with the front of the rover at left. AS17-146-22294, photographed by Gene Cernan, 13 December 1972. NASA."]],"Van Serg crater":[["img/van-serg.jpg","Harrison Schmitt in the rover at Station 9, Van Serg crater, on the third moonwalk. AS17-134-20454, photographed by Gene Cernan, 13 December 1972. NASA."]],"Shorty crater":[["img/shorty.jpg","Looking into Shorty crater from Station 4, with the orange soil on its rim. AS17-137-20992, 12 December 1972. NASA."]],"76535,0":[["img/76535.jpg","Sample 76535, photographed at NASA\u2019s Manned Spacecraft Center (now Johnson Space Center) in 1973. NASA photo S73-19456."]],"79115,0":[["img/79115.jpg","Sample 79115, photographed at NASA\u2019s Manned Spacecraft Center (now Johnson Space Center) in 1973. NASA photo S73-15396."]],"74220,0":[["img/orange-soil.jpg","The orange soil at Station 4, Shorty crater. The tripod is the gnomon, the crew\u2019s reference for scale, sun angle and color. AS17-137-20990, 12 December 1972, color gently enhanced. NASA."],["img/orange-beads.jpg","Orange glass beads and fragments from the soil, 0.02 to 0.045 mm across, magnified 160 times. NASA photo S73-15171, January 1973."]]};ea.forEach(i=>{i.imgs=C1[i.name]||[]});var cr=new R,_n={relief:null,trail:(()=>{try{return JSON.parse(localStorage.getItem("lrv-trail"))||[]}catch{return[]}})(),seen:(()=>{try{return new Set(JSON.parse(localStorage.getItem("lrv-found"))||[])}catch{return new Set}})(),t:0,saveT:0,open:!1},P1=()=>[[st.x+22,st.z+30,"Challenger"],[Wr[0].x,Wr[0].z-22,"Station 6"],[Wr[1].x-10,Wr[1].z-20,"Station 8"],[ki.x,ki.z-ut.R-8,"Station 9 \xB7 Van Serg"],[ut.x,ut.z-ut.R-12,"Shorty"],[Tt,At-We+70,"North Massif"]],I1=[["Sculptured Hills \u2192",1,.42],["\u2190 South Massif",-1,.96]];function L1(){let e=document.createElement("canvas");e.width=e.height=340;let t=e.getContext("2d"),n=t.createImageData(340,340);for(let s=0;s<340;s++)for(let r=0;r<340;r++){let a=Tt-We+(r+.5)*2*We/340,o=At-We+(s+.5)*2*We/340,l=2*We/340,c=Zt(a+l,o)-Zt(a-l,o),d=Zt(a,o+l)-Zt(a,o-l),h=Math.max(16,Math.min(215,108-c/l*150-d/l*38)),u=(s*340+r)*4;n.data[u]=h,n.data[u+1]=h*.98,n.data[u+2]=h*.93,n.data[u+3]=255}return t.putImageData(n,0,0),e}function Cg(i,e,t,n,s){let r=Math.min(2,devicePixelRatio||1),a=Math.round(i.clientWidth*r);if(!a)return;i.width!==a&&(i.width=i.height=a);let o=i.getContext("2d"),l=a/n,c=(S,b)=>[(S-e)*l+a/2,(b-t)*l+a/2];_n.relief||(_n.relief=L1()),o.fillStyle="#1a1916",o.fillRect(0,0,a,a);let[d,h]=c(Tt-We,At-We);o.drawImage(_n.relief,d,h,2*We*l,2*We*l),o.lineJoin=o.lineCap="round",o.strokeStyle="rgba(124,199,242,.55)",o.lineWidth=Math.max(1,1.2*r),o.setLineDash([2*r,4*r]),o.beginPath();for(let S=0;S<Jr.length;S+=6){let[b,v]=c(Jr[S],Jr[S+1]);S?o.lineTo(b,v):o.moveTo(b,v)}o.stroke(),o.setLineDash([]),o.strokeStyle="rgba(230,204,133,.9)",o.lineWidth=Math.max(1.5,(s?2:1.6)*r),o.beginPath();let u=!1;for(let S of _n.trail){if(!S){u=!1;continue}let[b,v]=c(S[0],S[1]);u?o.lineTo(b,v):o.moveTo(b,v),u=!0}o.stroke();let f=(s?11:8)*r;o.font=`600 ${f}px Montserrat, sans-serif`,o.textAlign="center";for(let S of ea)if(S.kind==="find"){let[b,v]=S.at(),[M,T]=c(b,v),_=_n.seen.has(S.name);o.beginPath(),o.arc(M,T,(s?5:3.2)*r,0,6.3),o.strokeStyle="#7CC7F2",o.lineWidth=1.3*r,o.stroke(),_&&(o.fillStyle="#7CC7F2",o.fill()),s&&(o.fillStyle="rgba(201,189,151,.95)",o.fillText(_?S.name.split(",")[0]:"?",M,T+17*r))}if(s||n<600)for(let[S,b,v]of P1()){let[M,T]=c(S,b);o.fillStyle="rgba(0,0,0,.55)",o.fillText(v,M+r,T+r),o.fillStyle="#E6CC85",o.fillText(v,M,T)}if(s)for(let[S,b,v]of I1)o.textAlign=b>0?"right":"left",o.fillStyle="rgba(201,189,151,.8)",o.fillText(S,b>0?a-8*r:8*r,a*v);o.strokeStyle="rgba(230,140,90,.75)",o.lineWidth=Math.max(1,1.3*r),o.setLineDash([5*r,4*r]),o.beginPath();for(let S=0;S<=240;S++){let[b,v]=c(...ZS(S/240*2*Math.PI));S?o.lineTo(b,v):o.moveTo(b,v)}o.stroke(),o.setLineDash([]);let[p,x]=c(st.x,st.z);o.fillStyle="#F2E4BE",o.fillRect(p-2.5*r,x-2.5*r,5*r,5*r);let[g,m]=c(N.p.x,N.p.z),y=Math.atan2(-Ft.z,Ft.x);o.save(),o.translate(g,m),o.rotate(-y),o.beginPath(),o.moveTo(7*r,0),o.lineTo(-4.5*r,4*r),o.lineTo(-2.5*r,0),o.lineTo(-4.5*r,-4*r),o.closePath(),o.fillStyle="#E6CC85",o.strokeStyle="#0d0a18",o.lineWidth=1.2*r,o.fill(),o.stroke(),o.restore()}function D1(i){let e=_n.trail[_n.trail.length-1];if(!ae.on&&(!e||Math.hypot(N.p.x-e[0],N.p.z-e[1])>3)&&(e&&Math.hypot(N.p.x-e[0],N.p.z-e[1])>30&&_n.trail.push(null),_n.trail.push([+N.p.x.toFixed(1),+N.p.z.toFixed(1)]),_n.trail.length>6e3&&_n.trail.splice(0,1e3)),(_n.saveT+=i)>5){_n.saveT=0;try{localStorage.setItem("lrv-trail",JSON.stringify(_n.trail))}catch{}}(_n.t+=i)>.2&&(_n.t=0,Cg(se("minimap"),N.p.x,N.p.z,260,!1))}var Pg=!1;se("minimap").addEventListener("click",()=>{Ce.on||Oe.on||Gt.on||(Pg=rn,rn=!1,se("mapsheet").classList.add("on"),requestAnimationFrame(()=>Cg(se("mapbig"),Tt,At,2*We,!0)))});se("mapsheet-close").addEventListener("click",()=>{se("mapsheet").classList.remove("on"),rn=Pg});var Ig=!1;function Lg(i){i.kind==="find"&&!Dt.on&&Qf(i)||jf(i)}function jf(i){se("sc-t").textContent=i.name,se("sc-s").textContent=i.sub;let e=([t,n])=>`<figure><img src="${t}" alt="" loading="lazy" onerror="this.parentNode.remove()"><figcaption>${n}</figcaption></figure>`;if(se("sc-b").innerHTML=(i.imgs[0]?e(i.imgs[0]):"")+i.body.map(t=>`<p>${t}</p>`).join("")+i.imgs.slice(1).map(e).join(""),se("sitecard").classList.toggle("wide",!!i.model),se("sitecard").classList.add("on"),Ig=rn,rn=!1,i.model&&F1(i.model,i.cap),i.kind==="find"&&!_n.seen.has(i.name)){_n.seen.add(i.name);try{localStorage.setItem("lrv-found",JSON.stringify([..._n.seen]))}catch{}}}se("sc-close").addEventListener("click",()=>{se("sitecard").classList.remove("on"),rn=Ig,Wh.stop&&Wh.stop()});var Wh={stop:null};function F1(i,e){let t=document.createElement("figure");t.className="rock3d";let n=document.createElement("canvas");t.appendChild(n);let s=document.createElement("button");s.className="rock-fs",s.textContent="Full screen",t.appendChild(s);let r=document.createElement("figcaption");r.textContent=e||"",t.appendChild(r),se("sc-b").prepend(t);let a=new tc({canvas:n,antialias:!0,alpha:!0});a.outputColorSpace=jt;let o=new Ta,l=new hn(30,1,.001,10);o.add(new Fa(16777215,4210752,1.4));let c=new Qs(16777215,2.2);c.position.set(.5,.8,.6),o.add(c);let d=new Mt;o.add(d);let h=!0,u=.3,f=0,p=1,x=()=>{let b=t.classList.contains("big"),v=b?innerWidth:t.clientWidth||360,M=b?innerHeight:Math.round(Math.min(v*.8,innerHeight*.55));a.setPixelRatio(Math.min(2,devicePixelRatio||1)),a.setSize(v,M),l.aspect=v/M,l.updateProjectionMatrix()};x(),addEventListener("resize",x),s.addEventListener("click",()=>{t.classList.toggle("big"),s.textContent=t.classList.contains("big")?"Close":"Full screen",x()}),new ic().setMeshoptDecoder(sf).loadAsync(i).then(b=>{let v=b.scene,M=new nn().setFromObject(v),T=.05/M.getSize(new R).length();v.scale.setScalar(T),v.position.copy(M.getCenter(new R)).multiplyScalar(-T),d.add(v)}).catch(()=>t.remove());let g=new Map,m=0;n.addEventListener("pointerdown",b=>{g.set(b.pointerId,[b.clientX,b.clientY]),n.setPointerCapture(b.pointerId),m=0}),n.addEventListener("pointermove",b=>{let v=g.get(b.pointerId);if(v&&(g.size===1&&(f+=(b.clientX-v[0])*.01,u+=(b.clientY-v[1])*.01),g.set(b.pointerId,[b.clientX,b.clientY]),g.size===2)){let[M,T]=[...g.values()],_=Math.hypot(M[0]-T[0],M[1]-T[1]);m&&(p=Math.max(.6,Math.min(4,p*_/m))),m=_}});let y=b=>{g.delete(b.pointerId),m=0};n.addEventListener("pointerup",y),n.addEventListener("pointercancel",y),n.addEventListener("wheel",b=>{b.preventDefault(),p=Math.max(.6,Math.min(4,p*Math.exp(-b.deltaY*.0015)))},{passive:!1});let S=()=>{h&&(g.size||(f+=.006),d.rotation.set(u,f,0),l.position.set(0,0,.09/p),a.render(o,l),requestAnimationFrame(S))};S(),Wh.stop=()=>{h=!1,removeEventListener("resize",x),a.dispose(),Wh.stop=null}}ea.forEach(i=>{let e=document.createElement("button");e.className=i.kind==="find"?"site find":"site",e.innerHTML=`<i></i>${i.label||i.name}`,e.addEventListener("click",()=>Lg(i)),se("sites").appendChild(e),i.el=e});function N1(){Qe.updateMatrixWorld();for(let i of ea){let[e,t,n]=i.at(),s=Math.hypot(e-Qe.position.x,t-Qe.position.z);cr.set(e,ke(e,t)+n,t).project(Qe);let r=Math.hypot(cr.x,cr.y*.8),a=i.kind==="find"?150:280,o=cr.z<1&&Math.abs(cr.x)<1.05&&Math.abs(cr.y)<1.05?s<35?1:Ae(a,a*.55,s)*Ae(.5,.28,r):0;if(i.el.style.display=o>.02?"flex":"none",o>.02){let l=(cr.x+1)/2*innerWidth,c=(1-cr.y)/2*innerHeight;i.el.style.left=l.toFixed(1)+"px",i.el.style.top=c.toFixed(1)+"px",i.el.style.opacity=o.toFixed(2);let d=Math.hypot(Hh.x-l,Hh.y-c+12);i.el.style.setProperty("--k",(1+.6*Ae(130,20,d)).toFixed(3))}}}function Dg(){Bi.forEach((i,e)=>{i.steer.rotation.y=-N.steer*Rn[e].steer,i.spin.rotation.z=-Rn[e].spin})}var je=[],io=[],zi=[],U1=[[-.66,.16,-.33],[-.66,.16,.33]],Uh=new R(-.3,.4,0),Et={S:new R(.26,.435,-.07),E:new R(.44,.334,-.08),H:new R(.72,.149,-.093)},Kf=i=>i<0?[5,8]:[6,9],z1=i=>{for(let e in i.attributes){let t=i.attributes[e];if(t.array instanceof Float32Array&&!t.normalized)continue;let n=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)n[s*t.itemSize+r]=t.getComponent(s,r);i.setAttribute(e,new et(n,t.itemSize))}return i};function O1(i){i.updateMatrixWorld(!0);let e=new nn().setFromObject(i),t=1.85/(e.max.y-e.min.y),n=(e.min.x+e.max.x)/2,s=new Mt,r=new nn;i.traverse(m=>{m.isMesh&&m.material.name==="base_002"&&r.expandByObject(m)});let a=(r.min.z+r.max.z)/2,o=[.22,1.38],l=[.23,1.43],c=Math.PI/12,d=Math.PI/4,h=.01,u=new R,f=new R;i.traverse(m=>{if(!m.isMesh)return;let y=z1(m.geometry.clone());y.applyMatrix4(m.matrixWorld),y.translate(-n,-e.min.y,-a),y.scale(t,t,t);let S=y.attributes.position,b=y.attributes.normal,v=m.material.name==="base_002",M=/buttons|vents/.test(m.material.name),T=/helm|gold/.test(m.material.name);for(let w=0;w<S.count;w++){u.fromBufferAttribute(S,w),f.fromBufferAttribute(b,w);let C=Math.sign(u.x)||1,P=Math.abs(u.x)-o[0],D=u.y-o[1],F=P*Math.cos(d)-D*Math.sin(d),I=Math.abs(P*Math.sin(d)+D*Math.cos(d)),U=u.y>1.36?1:Ae(.2,.235,Math.abs(u.x)),B=u.y>.86&&!T?Ae(-.04,.07,F)*Ae(.12,.085,I)*Ae(1.62,1.5,u.y)*U:0;if(B>0){let ie=c*B*C,X=Math.cos(ie),Z=Math.sin(ie),ee=u.x-C*l[0],_e=u.y-l[1];u.x=C*l[0]+ee*X-_e*Z,u.y=l[1]+ee*Z+_e*X;let we=f.x*X-f.y*Z;f.y=f.x*Z+f.y*X,f.x=we}let W=Ae(.98,1.28,u.y)*Ae(1.62,1.5,u.y);if(B>.5?u.x+=C*h*W:T||(u.x*=1+h/o[0]*W,u.z*=1+.03*W),v)u.addScaledVector(f,.01*(1-B)+.006*B);else if(M){let ie=Math.hypot(u.x*.3,u.z)||1;u.x+=u.x*.3/ie*.018,u.z+=u.z/ie*.018}S.setXYZ(w,u.x,u.y,u.z),b.setXYZ(w,f.x,f.y,f.z)}let _=new Ye(y,m.material);s.add(_)});let p=new sn({color:14275784,roughness:.9,name:"pack"}),x=new sn({color:13223356,roughness:.7,name:"rcu"}),g=(m,y,S,b,v,M,T,_,w)=>{let C=new yh(m,y,S,3,b);C.translate(v,M,T);let P=new Ye(C,_);w&&(P.userData.addon=w),s.add(P)};return g(.47,.64,.25,.05,0,1.3,-.315,p,"pack"),g(.44,.2,.21,.05,0,1.73,-.305,p,"pack"),g(.21,.14,.09,.02,0,1.2,.215,x,null),s}function k1(i){let e=i.clone();return e.vertexColors=!0,e.color.multiplyScalar(.93),e}function B1(i){let e=i.clone();return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 sp;
varying vec3 vSp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSp = sp;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSp;`).replace("#include <color_fragment>",`#include <color_fragment>
      { float ax = abs(vSp.x), y = vSp.y, arm = step(1.25, y) * step(.3, ax);
        float red = arm * smoothstep(.025, .015, abs(ax - .4)) + step(y, .9) * step(.5, y) * smoothstep(.025, .015, abs(y - .66)) + step(1.74, y) * smoothstep(.02, .012, ax);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.5, .04, .04), clamp(red, 0., 1.) * .9); }`)},e.customProgramCacheKey=()=>"cmdr-"+i.name,e}var gf=null;function H1(){if(gf)return gf;let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"#000"),t.addColorStop(.47,"#050505"),t.addColorStop(.5,"#9a978f"),t.addColorStop(.62,"#7d7a73"),t.addColorStop(1,"#55534e"),e.fillStyle=t,e.fillRect(0,0,256,128),e.fillStyle="#fff",e.beginPath(),e.arc(70,40,5,0,6.3),e.fill();let n=new Ci(i);n.mapping=Oa,n.colorSpace=jt;let s=new Xa(Un).fromEquirectangular(n).texture;return n.dispose(),gf=new sn({color:14198336,metalness:1,roughness:.14,envMap:s,envMapIntensity:1.25,name:"visor"})}var hr=(()=>{let i=Et.S.x,e=Et.S.y+.93,t=Et.H.x-i,n=Et.H.y+.93-e,s=Math.hypot(t,n);return{sx:i,sy:e,ux:t/s,uy:n/s,le:Math.hypot(Et.E.x-i,Et.E.y-Et.S.y)}})(),Fg=(i,e)=>{let t=i-hr.sx,n=e-hr.sy;return[t*hr.ux+n*hr.uy,Math.abs(t*hr.uy-n*hr.ux)]},B0=(i,e)=>{if(i<.24&&e<1.32)return!1;let[t,n]=Fg(i,e);return t>-.05&&n<(t>.35?.2:.15)};function V1(i){i.updateMatrixWorld(!0);let e=new nn;i.traverse(p=>{p.isMesh&&!p.userData.addon&&e.expandByObject(p)});let t=1.85/(e.max.y-e.min.y),n=new R,s=new xt,r=new Ri,a=new R,o=.93,l=.5,c=(e.min.z+e.max.z)/2*t,d=(p,x,g)=>p.sub(x).applyQuaternion(s.setFromEuler(r.set(g[0],g[1],g[2]))).add(x),h=[],u=[];i.traverse(p=>{if(!p.isMesh)return;let x=p.geometry.clone();x.applyMatrix4(p.matrixWorld),x.translate(-(e.min.x+e.max.x)/2,-e.min.y,0),x.scale(t,t,t);let g=x.attributes.position,m=x.attributes.normal,y=new Float32Array(g.count*3),S=new Uint8Array(g.count),b=new Uint16Array(g.count*4),v=new Float32Array(g.count*4),M=new Float32Array(g.count*3);for(let C=0;C<g.count;C++){n.fromBufferAttribute(g,C);let P=n.y,D=Math.abs(n.x),F=n.x<0?0:1;M.set([n.x,P,n.z-c],C*3);let I=[];if(p.userData.addon==="pack")I.push([7,1]);else if(B0(D,P)){let[X,Z]=Fg(D,P),ee=X>.35?1:Ae(-.03,.05,X)*Ae(.15,.11,Z),_e=Ae(hr.le-.04,hr.le+.04,X);I.push([0,1-ee],[5+F,ee*(1-_e)],[8+F,ee*_e])}else{let X=Ae(o-.06,o+.1,P),Z=Ae(l-.05,l+.05,P);I.push([0,X],[1+F,(1-X)*Z],[3+F,(1-X)*(1-Z)])}let U=0;I.forEach(([X,Z],ee)=>{b[C*4+ee]=X,v[C*4+ee]=Z,Z>I[U][1]&&(U=ee)}),S[C]=I[U][0];let B=Math.max(Ae(.66,.06,P),.45*Ae(.62,.48,Math.abs(P-.5))*(n.z>c?1:.3));y.set([1-.42*B,1-.43*B,1-.45*B],C*3);let W=Ae(l+.06,l-.06,P),ie=Ae(o+.07,o-.09,P);S[C]!==7&&!B0(D,P)&&(a.fromBufferAttribute(m,C),W>0&&(d(n,new R(n.x,l,c),[Math.PI/2*W,0,0]),a.applyQuaternion(s)),ie>0&&(d(n,new R(n.x,o,c),[-Math.PI/2*ie,0,0]),a.applyQuaternion(s)),m.setXYZ(C,a.x,a.y,a.z)),g.setXYZ(C,n.x,n.y-o,n.z)}x.setAttribute("color",new et(y,3)),x.setAttribute("sp",new et(M,3)),x.setAttribute("skinIndex",new Tr(b,4)),x.setAttribute("skinWeight",new yt(v,4));let T=p.material.name==="helm_gold"?H1():k1(p.material),_=x.index?x.index.array:Array.from({length:g.count},(C,P)=>P),w=[];for(let C=0;C<_.length;C+=3){let P=(S[_[C]]===7)+(S[_[C+1]]===7)+(S[_[C+2]]===7);(P===0||P===3)&&w.push(_[C],_[C+1],_[C+2])}h.push([x,T,w]),u.push(S)});let f=o-l;io.length=0;for(let p of[-1,1]){let x=p<0?0:1,[g,m]=Kf(p);io.push([0,g,Et.S.clone().setX(p*Et.S.x)],[g,m,Et.E.clone().setX(p*Et.E.x)],[0,1+x,new R(p*.1,0,c)],[1+x,3+x,new R(p*.1,0,c+f)])}zi.length=0;for(let p=0;p<10;p++){let x=new nn,g=!1;h.forEach(([m],y)=>{let S=m.attributes.position,b=u[y];for(let v=0;v<S.count;v++)b[v]===p&&(x.expandByPoint(n.fromBufferAttribute(S,v)),g=!0)}),zi.push(g?{c:x.getCenter(new R),size:x.getSize(new R)}:{c:new R,size:new R(.12,.12,.12)})}h.forEach(([p])=>p.scale(Tn,Tn,Tn)),zi.forEach(p=>{p.c.multiplyScalar(Tn),p.size.multiplyScalar(Tn)}),io.forEach(p=>p[2].multiplyScalar(Tn)),Et.scaled||(Et.S.multiplyScalar(Tn),Et.E.multiplyScalar(Tn),Et.H.multiplyScalar(Tn),Et.scaled=!0);for(let p=0;p<2;p++)pr[p]={hip:io.find(x=>x[0]===0&&x[1]===1+p)[2],knee:io.find(x=>x[0]===1+p&&x[1]===3+p)[2],shin:.5*Tn};return h}var Ng=i=>Array.from({length:10},(e,t)=>{let n=zi[t===7&&!i?0:t].c;return new Xe().makeTranslation(-n.x,-n.y,-n.z)});function G1(i){U1.forEach((e,t)=>{let n=new Mt;n.position.set(...e),n.rotation.y=Math.PI/2;let s=[];for(let c=0;c<10;c++){if(c===7){s.push(s[0]);continue}let d=new bs;n.add(d),s.push(d)}let r=new Ys(s,Ng(!1)),a=i.map(([c,d,h])=>[c,t===0&&/^(base_002|helmet)$/.test(d.name)?B1(d):d,h]);a.forEach(([c,d])=>{let h=new js(c,d);h.castShadow=!0,h.frustumCulled=!1,h.bind(r,new Xe),n.add(h)});let o=c=>t===0&&c<0?new R(-(Uh.z-e[2]),Uh.y-e[1],Uh.x-e[0]):new R(c*.27,-.02,.16),l=W1[t];n.userData={parts:a,bones:s,grips:[o(-1),o(1)],P:l,st:{lx:0,lz:0,vx:0,vz:0,y:0,vy:0,v:null,hands:[o(-1),o(1)],up:0,yaw:0,vyaw:0,look:0,lookT:1+t*2,fx:0,fz:0,t:t*7}},n.visible=!1,Ne.add(n),je.push(n),Ns(n)})}var Tn=.92,xf={t:0},pr=[],W1=[{K:68,C:5.2,kg:.22,ks:1700,tau:.05,fid:.035,look:.12,ph:.3,bal:.55,glance:.55},{K:50,C:3.6,kg:.36,ks:1300,tau:.14,fid:.055,look:.5,ph:2.1,bal:1.05,glance:.35}],Fi={rolled:!1,on:!1,t:0},Cf=new R(0,1,0),mo=new R,zh=new R,Pf=new R,Ug=new R,zg=new R,so=new R,q1=new xt,qr=new xt,X1=new xt,j1=new R,K1=new R,Y1=new R,J1=new R;function $a(i,e,t,n,s){i[e].quaternion.copy(t),i[e].position.copy(zi[e].c).sub(n).applyQuaternion(t).add(s)}function Ns(i){let{bones:e,st:t}=i.userData,n=j1.set(0,t.y,0),s=q1.setFromUnitVectors(Cf,zh.set(t.lx,1,t.lz).normalize()).multiply(qr.setFromAxisAngle(Cf,t.yaw));if($a(e,0,s,mo.set(0,0,0),n),t.legs)for(let r=0;r<2;r++){let[a,o]=t.legs[r],l=pr[r],c=En.setFromAxisAngle(Ls.set(1,0,0),a);$a(e,1+r,c,l.hip,ho.copy(l.hip).add(n));let d=dr.copy(l.knee).sub(l.hip).applyQuaternion(c).add(l.hip).add(n);$a(e,3+r,qr.setFromAxisAngle(Ls.set(1,0,0),a+o),l.knee,d)}else for(let r of[1,2,3,4])$a(e,r,X1,mo.set(0,0,0),n);for(let r of[-1,1]){let[a,o]=Kf(r),l=Pf.copy(Et.S).setX(r*Et.S.x),c=Ug.copy(Et.E).setX(r*Et.E.x),d=zg.copy(Et.H).setX(r*Et.H.x),h=l.distanceTo(c),u=c.distanceTo(d),f=K1.copy(l).applyQuaternion(s).add(n),p=J1.copy(t.hands[r<0?0:1]).sub(f),x=Math.max(Math.abs(h-u)+.01,Math.min(h+u-.002,p.length()));p.normalize();let g=(h*h-u*u+x*x)/(2*x),m=Math.sqrt(Math.max(0,h*h-g*g)),y=so.set(r*(.7+.3*t.up),-.8+1*t.up,-.6+.4*t.up);y.addScaledVector(p,-y.dot(p)).normalize();let S=Y1.copy(f).addScaledVector(p,g).addScaledVector(y,m),b=p.multiplyScalar(x).add(f),v=new xt().setFromUnitVectors(zh.copy(c).sub(l).normalize(),so.copy(S).sub(f).normalize());t.up>.01&&v.premultiply(qr.setFromAxisAngle(so.copy(S).sub(f).normalize(),r*Math.PI/4*t.up));let M=new xt().setFromUnitVectors(zh.copy(d).sub(c).normalize().applyQuaternion(v),so.copy(b).sub(S).normalize()).multiply(v);t.up>.01&&M.premultiply(qr.setFromAxisAngle(so.copy(b).sub(S).normalize(),r*Math.PI/4*t.up)),$a(e,a,v,l,f),$a(e,o,M,c,S),(t.hand||(t.hand=[new R,new R]))[r<0?0:1].copy(b)}}var J={on:!1,ph:"",t:0,x:0,z:0,face:0,tx:0,tz:0,t0:0,land:-1,crash:0,dodge:null,told:!1,go:!1,W:null},pc=new R,Zr=new R;function $r(i){let e=1e9;for(let t=0;t<2;t++){let n=En.setFromAxisAngle(Ls.set(1,0,0),i[t][0]),s=dr.copy(pr[t].knee).sub(pr[t].hip).applyQuaternion(n);e=Math.min(e,s.add(ho.set(0,-pr[t].shin,0).applyQuaternion(qr.setFromAxisAngle(Ls.set(1,0,0),i[t][0]+i[t][1]))).y)}return e}function H0(i,e,t=!1){let n=je[1];if(J.go=t,mc(t?[i,e]:null),J.on){J.ph!=="out"&&J.ph!=="in"&&(se("filmcd").classList.remove("on"),J.tx=i,J.tz=e,J.ph="walk",J.t=0);return}if(!n||!n.visible||Dt.on||Qt.on||ae.on||Oe.on||xe.on){mc(null);return}if(Math.hypot(N.v.x,N.v.z)>1.5){mc(null),zt("Slow down first: Schmitt climbs out of a stopped rover");return}Object.assign(J,{on:!0,ph:"out",t:0,tx:i,tz:e,land:-1,crash:0,dodge:null,W:null}),pt.mode="",t||(po.known=!0)}function Yf(){se("filmcd").classList.remove("on"),mc(null);let i=je[1],e=i.userData.st,t=i.userData.grips;i.parent!==Ne&&Ne.add(i),J.on=!1,J.ph="",i.position.copy(Mc),i.rotation.order="XYZ",i.rotation.set(0,Math.PI/2,0),e.legs=null,e.lz=0,e.up=0,e.v=null,e.hands[0].copy(t[0]),e.hands[1].copy(t[1]),i.visible=!0,Ns(i)}function Z1(i,e,t){let n=cs.filter(c=>c[0]>=i&&c[0]<=e);if(e-i<=15||n.length<3)return[Math.max(i,e-15),e];let s=n.map((c,d)=>{let h=n[Math.max(0,d-1)],u=Math.max(.001,c[0]-h[0]),f=Math.hypot(c[1]-h[1],c[3]-h[3])/u,p=Math.max(0,c[2]-ke(c[1],c[3])-.85),x=Math.min(1,Math.abs(c[4]*h[4]+c[5]*h[5]+c[6]*h[6]+c[7]*h[7])),g=2*Math.acos(x)/u,m=Math.max(0,1-Math.hypot(c[1]-J.x,c[3]-J.z)/25);return(Math.min(f,15)/5+3*p+Math.min(g,4)*.8+m*.8+(t&&Math.abs(c[0]-t)<2?6:0))*u}),r=-1,a=0,o=0,l=0;for(let c=0;c<n.length;c++){for(;l<n.length&&n[l][0]<n[c][0]+15;)o+=s[l++];o>r&&(r=o,a=c),o-=s[c]}return[n[a][0],Math.min(e,n[a][0]+15)]}function Og(i=yi){se("filmcd").classList.remove("on");let[e,t]=Z1(J.t0,i,J.crash);if(J.ph="wait",J.t=0,t-e<1.5||Oe.on||cs.length<2)return;Oe.save={run:rn,steer:N.steer,spin:Rn.map(s=>s.spin)},Oe.fov=Qe.fov,Oe.on=Oe.film=!0,Oe.t=e,Oe.end=Math.min(t+.4,yi),rn=!1,document.body.classList.add("replay"),se("btn-replay").classList.remove("on"),Oe.offerT=0,Oe.cam.set(J.x,ke(J.x,J.z)+1.4,J.z),je[1].visible=!1;let n=se("cine-cap");n.textContent="Schmitt\u2019s film",n.offsetWidth,n.classList.add("on")}function kg(i,e){let t=i.userData.st,n=Tn,s=J.t+=e,r=i.userData.grips;t.yaw=0,t.up=0,t.lx=0,t.y=0,t.v=null;let a=M=>mo.set(M?.31:-.31,-.22,.13).multiplyScalar(n);if(J.ph==="out"||J.ph==="in"){let M=J.ph==="out",T=Math.min(1,s/1.5);if(Jf(i,Mc,Qr,0,M?T:1-T),s>=1.5){if(!M){Yf();return}vt.attach(i),J.x=i.position.x,J.z=i.position.z,Zr.set(0,0,1).applyQuaternion(i.quaternion),J.face=Math.atan2(Zr.x,Zr.z),J.ph="walk",J.t=0}return}let o=[[1.45,-1.35],[1.45,-1.35]],l=0,c=0,d=J.face,h=0,u=N.p.x-J.x,f=N.p.z-J.z,p=Math.hypot(u,f),x=N.v.x,g=N.v.z,m=x*x+g*g;if(!J.dodge&&J.ph!=="board"&&!ae.on&&m>1&&p<18){let M=-(u*x+f*g)/m,T=u+x*M,_=f+g*M;if(M>0&&M<2&&Math.hypot(T,_)<2.6){let w=Math.sqrt(m),C=-g/w,P=x/w;-T*C-_*P<0&&(C=-C,P=-P);let D=Math.max(1.6,3-Math.hypot(T,_));J.dodge={t:0,x0:J.x,z0:J.z,dx:C*D,dz:P*D},J.W=null,J.told||(J.told=!0,zt("Schmitt jumps clear!"))}}let y=(M,T,_)=>{let w=J.W||(J.W=Bg(J.x,J.z,"Schmitt"));w.x=J.x,w.z=J.z;let C=M-J.x,P=T-J.z,D=Math.hypot(C,P),F=D<.3?0:Math.min(_,Math.max(.5,(D-.2)*.9/Math.sqrt(Ds())));return Hg(w,e,C,P,F,Math.atan2(C,P)-J.face,"lope"),J.x=w.x,J.z=w.z,o=w.legs,l=w.hy-ke(w.x,w.z)+$r(w.legs),c=w.lean,D>.3&&(d=Math.atan2(C,P)),J.armSw=w.sw,w.air||Math.hypot(w.vx,w.vz)>.25?Math.max(D,.31):D};if(J.dodge){let M=J.dodge,T=M.t+=e,_=Math.min(1,Math.max(0,(T-.22)/.72)),w=Math.min(1,Math.max(0,(T-1.12)/.5)),C=.66*Ae(0,1,_)+.34*Ae(0,1,w);J.x=M.x0+M.dx*C,J.z=M.z0+M.dz*C;let P=_>0&&_<1||w>0&&w<1;l=.36*Math.sin(Math.PI*_)*(_<1?1:0)+.14*Math.sin(Math.PI*w)*(w>0&&w<1?1:0);let D=P?.12:.5*(Ae(0,.2,T)*(1-Ae(.18,.24,T))+Ae(.92,.98,T)*(1-Ae(1.04,1.14,T))+Ae(1.6,1.64,T)*(1-Ae(1.75,1.95,T)));o=[[1.45-D*.55,-1.35+D*1.1],[1.4-D*.55,-1.3+D*1.1]],c=.08+.12*D;let F=J.face,I=M.dx*Math.cos(F)-M.dz*Math.sin(F);M.lx=Math.sign(I)*.2*Ae(.1,.3,T)*(1-Ae(1.6,1.95,T)),M.arms=Ae(0,.2,T)*(1-Ae(1.65,1.95,T)),d=Math.atan2(u,f),T>1.95&&(J.dodge=null)}else if(J.ph==="walk")y(J.tx,J.tz,(J.go?1.8:1.5)*Ds())<.3&&(J.go?(J.ph="wait",J.t=0,mc(null),zt("Schmitt is there \xB7 stop the rover beside him to pick him up")):(J.ph="film",J.t=0,J.t0=yi,J.land=-1,J.crash=0,zt("Schmitt is filming for 30 s \xB7 show him something good")));else if(J.ph==="film"){d=Math.atan2(u,f),h=Ae(0,.6,s);let M=Math.max(0,30-s);se("filmcd").classList.add("on"),se("filmcd").lastChild.textContent=`REC \xB7 ${Math.ceil(M)} s`,!ae.on&&(s>30||p>250)&&Og()}else if(J.ph==="wait")d=Math.atan2(u,f),p<7&&Math.sqrt(m)<.8&&!ae.on&&(J.ph="board",J.t=0);else if(J.ph==="board"){Ne.updateMatrixWorld(!0);let M=Ne.localToWorld(pc.copy(Qr));if(Math.sqrt(m)>1.5)J.ph="wait";else{let T=Lf(J.x,J.z,M.x,M.z,1);if(y(T[0],T[1],1.6*Ds())<.35&&T[0]===M.x){Ne.attach(i),i.position.copy(Qr),i.rotation.set(0,0,0),J.ph="in",J.t=0,kg(i,0);return}}}let S=J.dodge?4.5:3,b=d-J.face;b-=2*Math.PI*Math.round(b/(2*Math.PI)),J.face+=Math.max(-S*e,Math.min(S*e,b));let v=J.W&&J.W.fall?J.W:null;v&&(J.face=Math.atan2(v.fall.dx,v.fall.dz)),t.legs=o,t.lz=c,t.lx=J.dodge?J.dodge.lx:0,i.rotation.order="YXZ",i.rotation.set(v?v.pitch:0,J.face,0),v?i.position.set(v.rx,v.hy,v.rz):i.position.set(J.x,ke(J.x,J.z)-$r(o)+l,J.z),J.W&&(J.ph==="walk"||J.ph==="board")&&!J.dodge&&Gg(J.W,t,n);for(let M=0;M<2;M++)J.W&&(J.ph==="walk"||J.ph==="board")&&!J.dodge||t.hands[M].copy(a(M)),h&&t.hands[M].lerp(pc.set(M?.07:-.07,.36,.25).multiplyScalar(n),h);if(J.dodge)for(let M=0;M<2;M++)t.hands[M].lerp(pc.set(M?.44:-.44,.1,.12).multiplyScalar(n),J.dodge.arms);Ns(i)}var bf=.24,Nn=[1.45,-1.35],Ds=()=>kf/5,$1=new R,Q1=new R;function Jf(i,e,t,n,s,r=!0){let a=i.userData.st,o=i.userData.grips,l=Tn,c=Math.sign(t.z),d=Ae(0,.35,s),h=Ae(.3,.7,s),u=Ae(.65,1,s),f=.13*Math.sin(Math.PI*h),p=$1.set(-.52,e.y,c*.8),x=Q1.copy(e).lerp(p,h),g=.35*d*(1-h),m=h*(1-u),y=[0,1].map(T=>[Math.max(0,-g+.95*m+Nn[0]*u-(T===(c>0?1:0)?.08*m:0)),-.75*m+Nn[1]*u]),S=x.x+(t.x-x.x)*u,b=x.z+(t.z-x.z)*u,v=Ne.localToWorld(bc.set(S,0,b)),M=Ne.worldToLocal(Vh.set(v.x,ke(v.x,v.z),v.z)).y;if(Object.assign(a,{legs:y,lz:.08*h*(1-u),lx:0,yaw:0,y:0,up:0,v:null}),i.position.set(S,e.y+f+(M-$r(y)-e.y)*u,b),i.rotation.set(0,Math.PI/2+(n-Math.PI/2)*d,0),r)for(let T=0;T<2;T++)a.hands[T].copy(o[T]).lerp(mo.set(T?.31:-.31,-.22,.13).multiplyScalar(l),u);Ns(i)}var ew=[[0,0,1.6,.62],[1.15,.915,.45,.16],[1.15,-.915,.45,.16],[-1.15,.915,.45,.16],[-1.15,-.915,.45,.16]];function If(i){if(i.y>N.p.y+.55)return;let e=Math.atan2(-Ft.z,Ft.x),t=Math.cos(e),n=Math.sin(e),s=i.x-N.p.x,r=i.z-N.p.z,a=.3,o=s*t-r*n,l=s*n+r*t,c=!1;for(let[x,g,m,y]of ew){let S=m+a-Math.abs(o-x),b=y+a-Math.abs(l-g);S<=0||b<=0||(c=!0,S<b?o+=Math.sign(o-x||1)*S:l+=Math.sign(l-g||1)*b)}if(!c)return;let d=o*t+l*n,h=-o*n+l*t,u=N.p.x+d-i.x,f=N.p.z+h-i.z,p=Math.hypot(u,f);if(i.x+=u,i.z+=f,p>1e-6){let x=(i.vx*u+i.vz*f)/p;x<0&&(i.vx-=x*u/p,i.vz-=x*f/p)}}function tw(i,e){let t=Math.atan2(-Ft.z,Ft.x),n=Math.cos(t),s=Math.sin(t),r=i-N.p.x,a=e-N.p.z;return[r*n-a*s,r*s+a*n]}function V0(i,e){let t=Math.atan2(-Ft.z,Ft.x),n=Math.cos(t),s=Math.sin(t);return[N.p.x+i*n+e*s,N.p.z-i*s+e*n]}function Lf(i,e,t,n,s){let[r,a]=tw(i,e);if(a*s>.85||Math.hypot(r,a)>6)return[t,n];let o=Math.sign(r||1)*2.3;return Math.abs(r)<2?V0(o,a):V0(o,s*1.3)}function Bg(i,e,t=""){return{name:t,x:i,z:e,rx:i,rz:e,pitch:0,fall:null,y:ke(i,e),hy:0,vx:0,vz:0,vy:0,air:!1,st:1,ta:0,tf:0,imp:0,lead:0,legs:[Nn.slice(),Nn.slice()],lean:.05,sw:0,ho:0,hv:0,ht:Math.random()*9,jump:0,landed:null,x0:i,z0:e,y0:0,peak:0,gait:"lope"}}function Hg(i,e,t,n,s,r,a){let o=Math.hypot(t,n),l=o>1e-6?t/o:0,c=o>1e-6?n/o:0;if(i.landed=null,i.air){i.vy-=bi*e,i.x+=i.vx*e,i.z+=i.vz*e,i.y+=i.vy*e,i.ta+=e,i.peak=Math.max(i.peak,i.y),If(i);let p=ke(i.x,i.z);i.y<=p&&i.vy<0&&(i.landed={t:i.ta,d:Math.hypot(i.x-i.x0,i.z-i.z0),h:i.peak-i.y0,jump:i.jumped},i.air=!1,i.st=0,i.imp=-i.vy,i.hv-=.25*Math.min(4,i.imp),i.y=p,i.vy=0,Ff(i,!0),sw(i))}else{if(i.fall)return rw(i,e),i;{i.st+=e,i.x+=i.vx*e,i.z+=i.vz*e,If(i),i.y=ke(i.x,i.z);let p=Math.hypot(i.vx,i.vz),x=Math.abs(r)>.6&&p<.5;if(!i.jump&&(s<.05&&p<.35||x&&s>0&&i.st<.5)){let g=Math.exp(-e*7);i.vx*=g,i.vz*=g}else if(i.st>=bf||i.jump){let g=Math.hypot(i.vx,i.vz),y=s>g+.05?Math.min(.75*Ds(),.3+.35*g):.75*Ds(),S=l*s-i.vx,b=c*s-i.vz,v=Math.hypot(S,b);v>y&&(S*=y/v,b*=y/v),i.vx+=S,i.vz+=b;let M=Math.hypot(i.vx,i.vz),T=a==="kanga"?.45+.2*M:.25+.2*M;i.jumped=!!i.jump,i.jump&&(T=2*i.jump/bi,i.jump=0,a="kanga");let _=nw(i.x,i.z,i.vx,i.vz);if(!_)i.rim=null;else if(_!==i.rim&&M>.5&&s>.3){i.rim=_;let w=Math.min(1.35,(M+.4*Ds())/M);i.vx*=w,i.vz*=w,T=Math.max(T,.9+.3*M),i.jumped=!0}i.gait=a,i.tf=T,i.vy=bi*T/2,i.hv-=.12+.1*i.vy,Ff(i,!1),i.air=!0,i.ta=0,i.x0=i.x,i.z0=i.z,i.y0=i.y,i.peak=i.y,a==="lope"&&(i.lead^=1)}}}let d=Math.hypot(i.vx,i.vz),h=Math.min(1,d/1.6),u=i.legs;if(i.air){let p=Math.min(1,i.ta/Math.max(.2,i.tf)),x=Math.sin(Math.PI*Math.min(1,p*1.15))*(.45+.55*h);if(i.gait==="kanga"){let g=.25+.35*Math.sin(Math.PI*p);u[0][0]=u[1][0]=Nn[0]-.25*g,u[0][1]=u[1][1]=Nn[1]+.55*g}else{let g=i.gait==="skip"?0:i.lead;u[g][0]=Nn[0]-.42*x,u[g][1]=Nn[1]+.3*x,u[1-g][0]=Nn[0]+.3*x,u[1-g][1]=Nn[1]+.62*x}i.sw=(i.gait==="kanga"?0:i.lead?1:-1)*x}else{let p=Math.min(1,i.st/bf),x=Math.min(.6,.12+i.imp*.45)*Math.sin(Math.PI*Math.min(1,p))*(i.st<bf*1.5?1:0),g=i.gait==="skip"?0:i.lead;for(let m=0;m<2;m++)u[m][0]=Nn[0]-x*.55-(m===g?.1*h:-.06*h),u[m][1]=Nn[1]+x*1.1;i.sw*=Math.exp(-e*6)}i.lean=.06+.07*Math.min(2,d)+(i.air?0:.05*h);{let p=Math.ceil(e/.01),x=e/p;for(let g=0;g<p;g++)i.hv+=x*(-70*i.ho-5*i.hv),i.ho+=x*i.hv;i.ho=Math.max(-.12,Math.min(.1,i.ho)),i.ht+=e}i.rx=i.x,i.rz=i.z,i.pitch=0;let f=ke(i.x,i.z);return i.hy=i.air?Math.max(i.y-$r([Nn,Nn]),f-$r(u)):f-$r(u),i}function nw(i,e,t,n){let s=ao.get(Math.floor(i/os)+","+Math.floor(e/os)),r=Math.hypot(t,n);if(!s||r<.1)return null;for(let a of s){if(a.R<1.5)continue;let o=i-a.x,l=e-a.z,c=Math.hypot(o,l)||1;if(Math.abs(c-a.R)<Math.max(.8,.12*a.R)&&Math.abs(o*t+l*n)/(c*r)>.45)return a}return null}var vc=900,gi=new Float32Array(vc*3),Xr=new Float32Array(vc*3),Df=new Float32Array(vc),Zf=new St;Zf.setAttribute("position",new et(gi,3));gi.fill(-9999);var Vg=new Ki(Zf,new ji({color:14472906,size:.08,map:jh,transparent:!0,opacity:.8,depthWrite:!1}));Vg.frustumCulled=!1;vt.add(Vg);var yf=0;function G0(i,e,t,n,s,r){let a=yf;yf=(yf+1)%vc,gi[a*3]=i,gi[a*3+1]=e,gi[a*3+2]=t,Xr[a*3]=n,Xr[a*3+1]=s,Xr[a*3+2]=r,Df[a]=1}function Ff(i,e){let t=ke(i.x,i.z),n=Math.hypot(i.vx,i.vz);if(e){let s=Math.min(2.5,.4+i.imp*.6),r=Math.round(14+16*s);for(let a=0;a<r;a++){let o=Math.random()*6.2832,l=(.2+Math.random()*.55)*s;G0(i.x+Math.cos(o)*.12,t+.03,i.z+Math.sin(o)*.12,Math.cos(o)*l+i.vx*.5,(.25+Math.random()*.6)*s,Math.sin(o)*l+i.vz*.5)}}else if(n>.2){let s=Math.round(6+10*Math.min(1,n/2));for(let r=0;r<s;r++)G0(i.x+(Math.random()-.5)*.15,t+.03,i.z+(Math.random()-.5)*.15,-i.vx*(.15+Math.random()*.35)+(Math.random()-.5)*.4,.3+Math.random()*.6,-i.vz*(.15+Math.random()*.35)+(Math.random()-.5)*.4)}}function iw(i){let e=!1;for(let t=0;t<vc;t++)Df[t]<=0||(e=!0,Xr[t*3+1]-=bi*i,gi[t*3]+=Xr[t*3]*i,gi[t*3+1]+=Xr[t*3+1]*i,gi[t*3+2]+=Xr[t*3+2]*i,gi[t*3+1]<ke(gi[t*3],gi[t*3+2])&&(Df[t]=0,gi[t*3+1]=-9999));e&&(Zf.attributes.position.needsUpdate=!0)}function Gg(i,e,t){if(i.fall){let o=i.fall.t,l=Ae(.2,.8,o),c=Ae(1.8,2.4,o)*(1-Ae(3.2,3.8,o));for(let d=0;d<2;d++)e.hands[d].set((d?1:-1)*.3,-.2+.25*l-.35*c,.15+.35*l).multiplyScalar(t);return}let n=Math.hypot(i.vx,i.vz),s=Math.min(1,n/1.8),r=i.air&&i.gait==="kanga",a=i.air?Math.min(1,i.ta/Math.max(.2,i.tf)):0;for(let o=0;o<2;o++){let l=o?1:-1,c=-l*i.sw*(.08+.05*s),d=.008*Math.sin(i.ht*(1.3+.4*o)+o*2),h=r?.14*Math.sin(Math.PI*a):0;e.hands[o].set(l*(.29+.03*s),-.2+.08*s+i.ho+h+d,.15+.08*s+c+.5*h).multiplyScalar(t)}}function sw(i){let e=Math.hypot(i.vx,i.vz);if(e<.4)return;let t=i.vx/e,n=i.vz/e,s=ke(i.x+t*.5,i.z+n*.5)-ke(i.x-t*.5,i.z-n*.5),r=Math.atan(Math.max(0,s));if(r<.17)return;let a=e*Math.sin(r)+.3*i.imp,o=1*Math.sqrt(Ds());if(a>o&&r>.38){i.fall={t:0,dx:t,dz:n},i.vx*=Math.cos(r),i.vz*=Math.cos(r),zt(`${i.name||"He"} trips on the slope and goes down`);return}let l=Math.cos(r)*Math.cos(r);i.vx*=l,i.vz*=l}function rw(i,e){let t=i.fall,n=t.t+=e,s=i.legs,r=Math.hypot(i.vx,i.vz),a=n<.9?.6:2.2;if(r>0){let f=Math.max(0,r-a*e)/r;i.vx*=f,i.vz*=f}i.x+=i.vx*e,i.z+=i.vz*e,If(i),i.y=ke(i.x,i.z);let o=Ae(0,.95,n*n/.95),l=Ae(2.1,3.7,n),c=1.25*o*(1-l)+.55*Ae(2.1,2.6,n)*(1-Ae(3,3.7,n));if(n>.9&&!t.hit){t.hit=!0,i.imp=1.2;let f=i.x,p=i.z;i.x+=t.dx*.9,i.z+=t.dz*.9,Ff(i,!0),i.x=f,i.z=p}let d=Ae(1.9,2.5,n)*(1-Ae(3.1,3.7,n));for(let f=0;f<2;f++)s[f][0]=Nn[0]-.15*o*(1-l)-.9*d,s[f][1]=Nn[1]+.2*o*(1-l)+1.6*d;i.sw=0,i.ho=0,i.hv=0,i.lean=.06,i.pitch=c;let h=-$r(s),u=h*Math.sin(c)*.9;i.rx=i.x+t.dx*u,i.rz=i.z+t.dz*u,i.hy=i.y+Math.max(.22,h*Math.cos(c)),i.air=!1,n>3.8&&(i.fall=null,i.vx=i.vz=0,i.st=0,i.pitch=0)}var jr=null;function mc(i){if(!jr){let e=new Mt,t=new Ye(new _s(.008,.008,.7,6),new sn({color:13157564,roughness:.5,metalness:.5}));t.position.y=.35;let n=new Ye(new Yi(.16,.1),new Bn({color:16757575,side:Dn}));n.position.set(.08,.64,0);let s=new Ye(new Ia(.35,.42,32),new Bn({color:16757575,transparent:!0,opacity:.6,side:Dn,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.03,e.add(t,n,s),e.userData.ring=s,e.visible=!1,vt.add(e),jr=e}jr.visible=!!i,i&&jr.position.set(i[0],ke(i[0],i[1]),i[1])}function aw(i){if(!jr||!jr.visible)return;let e=jr.userData.ring,t=yi*.9%1;e.scale.setScalar(.6+1.2*t),e.material.opacity=.7*(1-t)}var xe={on:!1,ph:"",t:0,face:0,sface:0,W:[null,null],f:0,s:0,told:!1,hopShow:0},Kr=[{seat:null,out:null,faceOut:Math.PI},{seat:null,out:null,faceOut:0}];function ow(){if(!(xe.on||J.on||Dt.on||Qt.on||ae.on||Oe.on||!je[0]||!je[1]||!je[1].visible)){if(Math.hypot(N.v.x,N.v.z)>1.2){zt("Stop the rover first");return}Kr[0].seat=Kg,Kr[0].out=$f,Kr[1].seat=Mc,Kr[1].out=Qr,Object.assign(xe,{on:!0,ph:"out",t:0,W:[null,null],told:!1}),pt.mode="",Jh(),document.body.classList.add("foot"),ti===2&&Vf(0),zt("On foot \xB7 W/S or the stick to go, A/D to turn, Space to jump")}}function Wg(){xe.on&&xe.ph==="walk"&&(xe.ph="home",zt("Back to the rover"))}function cw(i,e,t){let n=Kr[e];i.rotation.order="YXZ",Jf(i,n.seat,n.out,n.faceOut,t)}function qg(i){let e=xe.t+=i,t=Tn;if(xe.ph==="out"||xe.ph==="in"){let u=xe.ph==="out";if(je.forEach((f,p)=>{let x=e-(p?.35:0),g=u?Math.min(1,Math.max(0,x/1.6)):1-Math.min(1,Math.max(0,x/1.6));cw(f,p,g)}),e<1.95)return;u?(xe.W=je.map((f,p)=>{vt.attach(f);let x=Bg(f.position.x,f.position.z,p?"Schmitt":"Cernan");Zr.set(0,0,1).applyQuaternion(f.quaternion);let g=Math.atan2(Zr.x,Zr.z);return p?xe.sface=g:xe.face=g,x}),xe.ph="walk",xe.t=0):(je.forEach((f,p)=>{let x=f.userData.st,g=f.userData.grips;f.position.copy(Kr[p].seat),f.rotation.set(0,Math.PI/2,0),f.rotation.order="XYZ",x.legs=null,x.lz=0,x.lx=0,x.v=null,x.hands[0].copy(g[0]),x.hands[1].copy(g[1]),Ns(f)}),xe.on=!1,xe.ph="",document.body.classList.remove("foot"),se("air").textContent="");return}let[n,s]=xe.W,r=u=>u-2*Math.PI*Math.round(u/(2*Math.PI)),a=(u,f,p,x)=>{let g=Math.hypot(f,p);return g<.001?x:(ke(u.x+f/g,u.z+p/g)-ke(u.x-f/g,u.z-p/g))/2<-.14?"kanga":x},o,l,c,d;if(xe.ph==="walk"){let u=Ds();xe.face+=-xe.s*1.5*Math.sqrt(u)*i;let f=Math.sin(xe.face),p=Math.cos(xe.face),x=xe.f>0&&!n.fall?xe.f*2.2*u:0;xe.f<-.2&&(f=-f,p=-p,x=.4*u*-xe.f),eo(n.x+f*3,n.z+p*3)<6?(x=0,xe.told||(xe.told=!0,zt("Mission Control \xB7 That\u2019s the edge of the mission area. Head back toward the LM."))):xe.told=!1,o=[f,p,x,0],c=a(n,f,p,"skip");let g=Math.sin(xe.face),m=Math.cos(xe.face),y=n.x-m*2.2-g*1,S=n.z+g*2.2-m*1,b=y-s.x,v=S-s.z,M=Math.hypot(b,v),T=.9+.2*Math.hypot(n.vx,n.vz),_=n.vx+b/T,w=n.vz+v/T,C=Math.hypot(_,w),P=2.8*u;C>P&&(_*=P/C,w*=P/C),l=[_,w,M<.5&&Math.hypot(n.vx,n.vz)<.3?0:Math.hypot(_,w),0],d=a(s,_,w,"lope"),(Ni[" "]||xe.jumpQ)&&!n.air&&n.st>.15&&(n.jump=1.15*u,xe.jumpQ=0),xe.jumpQ=0}else{Ne.updateMatrixWorld(!0);let u=Ne.localToWorld(pc.copy($f)).clone(),f=Ne.localToWorld(pc.copy(Qr)).clone(),p=Math.hypot(u.x-n.x,u.z-n.z),x=Math.hypot(f.x-s.x,f.z-s.z),g=Ds(),m=v=>v<.3?0:Math.min(1.8*g,Math.max(.5,(v-.2)*.9/Math.sqrt(g))),y=Lf(n.x,n.z,u.x,u.z,-1),S=Lf(s.x,s.z,f.x,f.z,1);o=[y[0]-n.x,y[1]-n.z,y[0]===u.x?m(p):1.4*g,0],l=[S[0]-s.x,S[1]-s.z,S[0]===f.x?m(x):1.4*g,0],c="lope",d="lope";let b=v=>!v.air&&Math.hypot(v.vx,v.vz)<.25;if(p<.35&&x<.35&&b(n)&&b(s)){je.forEach((v,M)=>{Ne.attach(v),v.position.copy(Kr[M].out)}),xe.ph="in",xe.t=0,qg(0);return}}let h=[xe.face,xe.sface];[[n,o,c],[s,l,d]].forEach(([u,f,p],x)=>{let g=je[x],m=g.userData.st,y=Math.atan2(f[0],f[1]);if(Hg(u,i,f[0],f[1],f[2],f[2]>0?r(y-h[x]):0,p),x===1||xe.ph==="home"){let S=f[2]>0||Math.hypot(u.vx,u.vz)>.3?y:xe.face,b=r(S-h[x]);h[x]+=Math.max(-3*i,Math.min(3*i,b))}if(m.legs=u.legs,m.lz=u.lean,m.lx=0,m.yaw=0,m.y=0,m.up=0,m.v=null,u.fall){let S=Math.atan2(u.fall.dx,u.fall.dz),b=r(S-h[x]);h[x]+=Math.max(-4*i,Math.min(4*i,b))}g.rotation.order="YXZ",g.rotation.set(u.pitch,h[x],0),g.position.set(u.rx,u.hy,u.rz),Gg(u,m,t),Ns(g)}),xe.face=h[0],xe.sface=h[1];{let u=s.x-n.x,f=s.z-n.z,p=Math.hypot(u,f);if(p<.65&&p>1e-4){let x=(.65-p)/2/p;s.x+=u*x,s.z+=f*x,n.x-=u*x,n.z-=f*x}}if(n.landed&&n.landed.t>.25){let u=n.landed;se("air").textContent=`${u.jump?"Jump":"Hop"} ${u.t.toFixed(2)} s \xB7 ${rr(u.d,1)} \xB7 ${Math.round(u.h*100)} cm up`,xe.hopShow=2.5}else xe.hopShow>0&&(xe.hopShow-=i)<=0&&(se("air").textContent="")}var wn={x:0,z:0,hit:!1,timer:0,at:null};function lw(i,e){let t=new Vo;t.setFromCamera(new qe(i/innerWidth*2-1,1-e/innerHeight*2),Qe);let n=t.ray.origin,s=t.ray.direction,r=0;for(let a=.5;a<400;a*=1.04){let o=n.x+s.x*a,l=n.z+s.z*a;if(n.y+s.y*a<ke(o,l)){for(let c=0;c<12;c++){let d=(r+a)/2;n.y+s.y*d<ke(n.x+s.x*d,n.z+s.z*d)?a=d:r=d}return[n.x+s.x*a,n.z+s.z*a]}r=a}return null}function Xg(i,e){if(!rn||Ce.on||Gt.on||Oe.on||Yh())return;let t=lw(i,e),n,s;if(!t){let f=Qe.getWorldDirection(Zr);t=[N.p.x+f.x*15,N.p.z+f.z*15]}n=t[0]-N.p.x,s=t[1]-N.p.z;let r=Math.hypot(n,s),a=t.slice(),o=r>150?150/r:1,l=[N.p.x+n*o,N.p.z+s*o];if(r>20)t=[N.p.x+n/r*20,N.p.z+s/r*20];else if(r<4){let f=4/Math.max(.01,r);t=[N.p.x+n*f,N.p.z+s*f]}wn.x=t[0],wn.z=t[1];let c=[];xe.on?(xe.ph==="walk"&&c.push(["Back to the rover",Wg]),c.push(["Change camera view",()=>se("btn-pov").click()],["Open the map",()=>se("minimap").click()])):(je[1]&&!Dt.on&&!Qt.on&&!ae.on&&r>2.5&&c.push([J.on?"Send Schmitt here instead":"Send Schmitt here",()=>H0(l[0],l[1],!0)]),je[1]&&!Dt.on&&!Qt.on&&!ae.on&&c.push([J.on?"Film from here instead":"Hold the camera here",()=>H0(wn.x,wn.z)]),je[1]&&!Dt.on&&!Qt.on&&!J.on&&!ae.on&&c.push(["Leave the rover on foot",ow]),je[1]&&!Dt.on&&!Qt.on&&!J.on&&!ae.on&&c.push(["Sample here",gw]),J.on&&J.ph!=="in"&&c.push(["Schmitt back aboard",Yf]),Fh>.5&&c.push(["Back on its wheels",Gf]),Oe.jump&&Oe.offerT>0&&c.push(["Replay the jump",Tg]),c.push(["Change camera view",()=>se("btn-pov").click()],["Open the map",()=>se("minimap").click()]),po.known&&c.push(["Watch the real Grand Prix",qf]));let d=se("ctx");d.innerHTML="";for(let[f,p]of c){let x=document.createElement("button");x.textContent=f,x.addEventListener("click",g=>{g.stopPropagation(),Jh(),p()}),d.appendChild(x)}d.classList.add("on");let h=d.offsetWidth,u=d.offsetHeight;d.style.left=Math.min(i,innerWidth-h-8)+"px",d.style.top=Math.min(e,innerHeight-u-8)+"px"}function Jh(){se("ctx").classList.remove("on")}Un.domElement.addEventListener("contextmenu",i=>{i.preventDefault(),Xg(i.clientX,i.clientY)});Un.domElement.addEventListener("pointerdown",i=>{Jh(),i.pointerType==="touch"&&(wn.at=[i.clientX,i.clientY],clearTimeout(wn.timer),wn.timer=setTimeout(()=>{wn.at&&Xg(wn.at[0],wn.at[1]),wn.at=null},600))});Un.domElement.addEventListener("pointermove",i=>{wn.at&&Math.hypot(i.clientX-wn.at[0],i.clientY-wn.at[1])>12&&(wn.at=null,clearTimeout(wn.timer))});addEventListener("pointerup",()=>{wn.at=null,clearTimeout(wn.timer)});addEventListener("keydown",i=>{i.key==="Escape"&&Jh()});var pt={mode:"",t:0,len:0,side:0,aim:0,w:[0,0],hand:[new R,new R],seen:new Set,camT:10},W0=new R;function hw(i,e,t,n,s,r){let a=null,o=1e9,l=0,c=null;i.updateWorldMatrix(!0,!1);for(let u of ea){if(u.kind==="find")continue;let[f,p,x]=u.at(),g=Math.hypot(f-N.p.x,p-N.p.z);if(g>300&&pt.seen.delete(u.name),g>260||g>o)continue;let m=i.worldToLocal(W0.set(f,ke(f,p)+x*.3,p)).normalize(),y=Math.atan2(m.x,m.z);Math.abs(y)<1.6&&(o=g,a=u,l=y,c=(c||new R).copy(m))}let d=!!c;pt.mode&&(pt.t+=e),(s>5||Fi.on||pt.mode&&pt.t>pt.len)&&(pt.mode=""),!pt.mode&&!Fi.on&&(d&&o<150&&r>.8&&Math.abs(l)<1.3&&!pt.seen.has(a.name)?(pt.seen.add(a.name),Object.assign(pt,{mode:"point",t:0,len:2.8,side:l>0?1:0})):r<1.5&&(pt.camT-=e)<0&&(pt.camT=12+Math.random()*12,Object.assign(pt,{mode:"photo",t:0,len:2.6,aim:d?Math.max(-.45,Math.min(.45,l)):(Math.random()-.5)*.8})));let h=pt.mode?Ae(0,.45,pt.t)*(1-Ae(pt.len-.5,pt.len,pt.t)):0;if(pt.w[0]=pt.w[1]=0,pt.mode==="point"&&c){let u=pt.side,f=u?1:-1;pt.hand[u].set(f*Et.S.x,Et.S.y,Et.S.z).addScaledVector(W0.set(c.x,Math.max(.15,c.y+.2),c.z).normalize(),.6*Tn),pt.w[u]=h,t=Math.max(-.5,Math.min(.5,l))*.8}else if(pt.mode==="photo"){for(let u=0;u<2;u++)pt.hand[u].set(u?.075:-.075,.27,.21).multiplyScalar(Tn),pt.w[u]=h;t=pt.aim}else d&&!n&&(t=Math.max(-.5,Math.min(.5,l)));return t}function uw(i){if(i){if(aw(i),iw(i),xe.on){qg(i);return}!it.grounded&&it.t>1&&!Fi.rolled&&(Fi.rolled=!0,Fi.on=Math.random()<.12),it.grounded&&(Fi.rolled=!1,Fi.on&&(Fi.t+=i)>.6&&(Fi.on=!1,Fi.t=0));for(let e of je){let{st:t,P:n,grips:s}=e.userData;if(J.on&&e===je[1]){kg(e,i);continue}if(ae.on){Object.assign(t,{lx:0,lz:0,vx:0,vz:0,y:0,vy:0,v:null});continue}if(Dt.on&&e===je[1]){qh(e,i);continue}if(Qt.on){let w=Qt.s[je.indexOf(e)];if(w&&w.on){qh(e,i,w);continue}}let r=zh.copy(e.position).applyQuaternion(N.q),a=Pf.copy(N.w).cross(r).add(N.v);t.v||(t.v=a.clone());let o=Ug.copy(a).sub(t.v).divideScalar(i);t.v.copy(a),o.lengthSq()>900&&o.setLength(30);let l=qr.copy(N.q).multiply(e.quaternion).invert(),c=zg.set(0,-bi,0).sub(o).applyQuaternion(l),d=so.set(0,1,0).applyQuaternion(l),h=Math.abs(c.y+bi*d.y);e===je[0]&&(xf.t-=i,h>6&&xf.t<0&&(xf.t=.3,Ya(h>12?35:15))),h>4&&(t.vx+=(Math.random()-.5)*h*.07,t.vz+=(Math.random()-.5)*h*.05,t.vyaw+=(Math.random()-.5)*h*.05);let u=1-Math.exp(-i/n.tau);t.fx+=(c.x-t.fx)*u,t.fz+=(c.z-t.fz)*u,t.t+=i;let f=n.fid,p=f*(Math.sin(t.t*.61+n.ph)+.6*Math.sin(t.t*1.37+2*n.ph)),x=f*.7*Math.sin(t.t*.83+3*n.ph);(t.lookT-=i)<0&&(t.lookT=2.5+Math.random()*4,t.look=Math.random()<.35?0:(Math.random()-.5)*2*n.look);let g=Pf.copy(N.v).applyQuaternion(l),m=Math.hypot(g.x,g.z),y=m>1.5?Math.atan2(g.x,g.z):0,S=Math.abs(y)>.15&&Math.abs(y)<2.6?Math.max(-.35,Math.min(.35,y*n.glance)):0,b=S+t.look*(S?.6:1);e===je[1]&&(b=hw(e,i,b,S,h,m)),t.vyaw+=i*(14*(b-t.yaw)-6.5*t.vyaw),t.yaw=Math.max(-.5,Math.min(.5,t.yaw+i*t.vyaw));let v=Math.ceil(i/.004),M=i/v;for(let w=0;w<v;w++){t.vx+=M*(n.K*(d.x*n.bal+p-t.lx)+n.kg*n.K*t.fx/2.5-n.C*t.vx),t.vz+=M*(n.K*(d.z*n.bal+x-t.lz)+n.kg*n.K*t.fz/2.5-n.C*t.vz);let C=Math.hypot(t.lx,t.lz);if(C>.35){let D=-3*n.K*(C-.35)/C*M;t.vx+=D*t.lx,t.vz+=D*t.lz}t.lx+=M*t.vx,t.lz+=M*t.vz;let P=t.y<0?-n.ks*t.y-40*t.vy:t.y>.05?-n.ks*(t.y-.05)-40*t.vy:0;t.vy+=M*(c.y+P),t.y+=M*t.vy}let T=Math.hypot(t.lx,t.lz);T>.5&&(t.lx*=.5/T,t.lz*=.5/T),t.y=Math.max(-.03,Math.min(.09,t.y));let _=Fi.on&&e===je[1]?1:0;t.up+=(_-t.up)*(1-Math.exp(-i*(_?7:4)));for(let w=0;w<2;w++)t.hands[w].copy(s[w]).lerp(mo.set(w?.29:-.29,.95,.2).multiplyScalar(Tn),t.up);if(e===je[1])for(let w=0;w<2;w++)pt.w[w]>0&&t.hands[w].lerp(pt.hand[w],pt.w[w]);Ns(e)}}}var Dt={on:!1,t:0,st:null,opened:!1,scoop:null,tool:null,faceOut:0,card:()=>jf(Dt.st)},Mc=new R(-.66,.16,.33),Qr=new R(-.5,0,1.2),jg=new R(.2,0,2.25),Kg=new R(-.66,.16,-.33),$f=new R(-.5,0,-1.2),dw=new R(0,0,-2.3);Object.assign(Dt,{seat:Mc,out:Qr,spot:jg});var fw=[{find:"76535,0",in:(i,e)=>Math.hypot(i-wt.x,e-wt.z)<30,what:"a sample beside the boulder"},{find:"79115,0",in:(i,e)=>Math.abs(Math.hypot(i-ki.x,e-ki.z)-50)<22,what:"a piece of a boulder on the rim"},{find:"74220,0",in:(i,e)=>Math.abs(Math.hypot(i-ut.x,e-ut.z)-ut.R)<22,what:"the orange soil"}].map(i=>Object.assign(i,{here:!1,done:!1,hint:!1,still:0}));function pw(i){let e=Dt.on||J.on||Qt.on||xe.on||ae.on||kt.on||Ce.on||Gt.on||Oe.on||Be.on,t=Math.hypot(N.v.x,N.v.z);for(let n of fw){if(!n.in(N.p.x,N.p.z)){n.here=n.done=n.hint=!1,n.still=0;continue}if(n.here=!0,!(e||n.done)&&(n.hint||(n.hint=!0,zt(`Stop here and Schmitt climbs out for ${n.what}`)),n.still=t<.4?n.still+i:0,n.still>.8)){let r=ea.find(a=>a.name===n.find);r&&Qf(r)&&(n.done=!0,zt("Harrison Schmitt climbs out to take the sample"))}}}function Qf(i){if(Dt.on||J.on||Qt.on||xe.on||!je[1]||!je[1].visible||ae.on||N.v.length()>1.2)return!1;if(Object.assign(Dt,{on:!0,t:0,st:i,opened:!1}),!Dt.scoop){let e=new Mt,t=new sn({color:12104876,roughness:.5,metalness:.6}),n=new Ye(new _s(.012,.012,1,8),t);n.position.y=.5,e.add(n);let s=new Ye(new di(.09,.03,.12),t);s.position.y=1,e.add(s),e.userData.pan=s,e.traverse(r=>{r.castShadow=!0}),Dt.scoop=e}return Dt.tool=Dt.scoop,je[1].add(Dt.scoop),Dt.scoop.visible=!0,!0}var Ch=(i,e,t,n)=>n.copy(i).lerp(e,t),Qt={on:!1,s:[],tongs:null},q0=[{kind:"extra",name:"An anorthosite",sub:"Like 15415, the Genesis Rock \xB7 Apollo 15",imgs:[],body:["Almost pure white plagioclase feldspar: anorthosite, a piece of the Moon\u2019s first crust. Rocks like it formed as the young Moon\u2019s ocean of molten rock cooled and its light feldspar crystals floated to the top.","The most famous is 15415, which Dave Scott and Jim Irwin found sitting on top of another rock on the rim of Spur crater on Apollo 15 in 1971. It weighs about 269 g. It was quickly nicknamed the Genesis Rock, though later dating put it at about 4.1 billion years, younger than the Moon itself."]},{kind:"extra",name:"A breccia",sub:"Like 14321, Big Bertha \xB7 Apollo 14",imgs:[],body:["Broken rock welded back together by the shock of impacts: a breccia, the most common kind of rock in the lunar highlands.","The biggest of the Apollo 14 samples, 14321, nicknamed Big Bertha, is one, about 9 kg. In 2019 a team led by Jeremy Bellucci reported that a fragment of granite inside it, just under 2 g, most likely formed on Earth about 4 billion years ago and was blasted to the Moon by a large impact. If they are right, it is the oldest known piece of Earth, found on the Moon."]},{kind:"extra",name:"A big shocked rock",sub:"Like 61016, Big Muley \xB7 Apollo 16",imgs:[],body:["Pale shocked anorthosite fused to a darker rock that was melted by an impact.","The largest rock any Apollo crew brought back was one like it: 61016, 11.7 kg, picked up near Plum crater in the Descartes highlands on Apollo 16 in 1972. It is nicknamed Big Muley, after Bill Muehlberger, who led the mission\u2019s field geology team."]},{kind:"extra",name:"A mare basalt",sub:"Like 70017, the goodwill rock \xB7 Apollo 17",imgs:[],body:["Dark, fine-grained lava rock rich in titanium: the high-titanium basalt that flooded this valley about 3.7 billion years ago and lies beneath its floor.","One rock like it, 70017, weighed 2,957 g when Apollo 17 brought it home. In 1973 President Nixon had small pieces of it, about 1.1 g each, set in acrylic as goodwill gifts for 135 countries and the 50 US states. Several have since been stolen or lost."]}],X0=["Just regolith: fine, gray and ordinary. Bagged and numbered anyway.","A few glassy beads and rock chips. Nothing out of the ordinary.","Ordinary soil, the same as the rest of the valley floor. Bagged anyway: every sample counts.","Nothing noteworthy here. Small rock fragments in gray soil."],_f=new Set((()=>{try{return JSON.parse(localStorage.getItem("lrv-extra"))||[]}catch{return[]}})());function mw(){let i=q0.filter(t=>!_f.has(t.name)),e=i.length?i:q0;if(Math.random()<(i.length?.25:.1)){let t=e[Math.floor(Math.random()*e.length)];_f.add(t.name);try{localStorage.setItem("lrv-extra",JSON.stringify([..._f]))}catch{}jf(t)}else zt(X0[Math.floor(Math.random()*X0.length)])}function gw(){if(!(Qt.on||Dt.on||J.on||xe.on||ae.on||!je[0]||!je[1]||!je[1].visible)){if(N.v.length()>1.2){zt("Stop the rover first");return}if(Dt.scoop||(Qf({}),Dt.on=!1),!Qt.tongs){let i=new Mt,e=new sn({color:12104876,roughness:.5,metalness:.6}),t=new Ye(new _s(.011,.011,1,8),e);t.position.y=.5,i.add(t);let n=new Mt;n.position.y=1,i.add(n),i.userData.pan=n;for(let r of[-1,1]){let a=new Ye(new di(.012,.09,.02),e);a.position.set(r*.025,.035,0),a.rotation.z=r*.25,n.add(a)}let s=new Ye(new Cr(.03,0),new sn({color:7236196,roughness:.95}));s.position.y=.06,s.visible=!1,n.add(s),i.userData.rock=s,i.traverse(r=>{r.castShadow=!0}),Qt.tongs=i}je[0].add(Qt.tongs),je[1].add(Dt.scoop),Qt.tongs.visible=Dt.scoop.visible=!0,Qt.s=[{on:!0,t:0,seat:Kg,out:$f,spot:dw,faceOut:Math.PI,tool:Qt.tongs,opened:!1},{on:!0,t:-.5,seat:Mc,out:Qr,spot:jg,faceOut:0,tool:Dt.scoop,opened:!1,card:mw}],Qt.s.forEach(i=>{i.done=()=>{Qt.s.some(e=>e.on)||(Qt.on=!1)}}),Qt.on=!0,pt.mode="",zt("Cernan and Schmitt climb out to take a sample")}}function qh(i,e,t=Dt){let n=t.t+=e,s=i.userData.st,r=(I,U)=>Ae(I,U,n),a=Tn,o=s,l=(I,U)=>{let B=Math.max(0,Math.min(1,(n-I)/(U-I)));return{u:B*B*(3-2*B),on:B>0&&B<1,ph:(n-I)*5.6}},c=I=>{let U=Math.abs(Math.sin(I.ph)),B=.22*Math.sin(I.ph),W=I.on?.4*(1-U):0;return{legs:[[g[0]+B-W*.5,g[1]-Math.max(0,-B)*.6+W],[g[0]-B-W*.5,g[1]-Math.max(0,B)*.6+W]],y:I.on?.11*Math.pow(U,.6):0}};if(n<1.1||n>=7.8&&n<9){Jf(i,t.seat,t.out,t.faceOut,n<1.1?r(0,1.1):1-r(7.8,9)),t.tool&&(t.tool.visible=!1);return}let d=r(5,5.5)-r(5.9,6.2),h=new R,u,f,p=0,x,g=[1.45,-1.35],m=[0,0],y=I=>mo.set(I?.24:-.24,-.38,.06).multiplyScalar(a).clone();if(n<1.1){let I=r(0,1.1);Ch(t.seat,t.out,r(.2,1.1),h),h.y=0,u=Math.PI/2+(t.faceOut-Math.PI/2)*I,f=[g.map(U=>U*I),g.map(U=>U*I)],x=null}else if(n<2.7){let I=l(1.1,2.7);Ch(t.out,t.spot,I.u,h),u=Math.atan2(t.spot.x-t.out.x,t.spot.z-t.out.z);let U=c(I);f=U.legs,h.y=U.y,p=.14*(I.on?1:0)}else if(n<6.2)h.copy(t.spot),u=t.faceOut,f=[[1.25,-1+.15*d],[1.3,-1.1+.15*d]],p=.18-.32*d;else if(n<7.8){let I=l(6.2,7.8);Ch(t.spot,t.out,I.u,h),u=Math.atan2(t.out.x-t.spot.x,t.out.z-t.spot.z);let U=c(I);f=U.legs,h.y=U.y,p=.14*(I.on?1:0)}else if(n<9){let I=1-r(7.8,9);Ch(t.seat,t.out,1-r(7.8,8.7),h),h.y=0,u=Math.PI/2+(t.faceOut-Math.PI/2)*I,f=[g.map(U=>U*I),g.map(U=>U*I)]}else{t.on=!1,t.tool.visible=!1,i.position.copy(t.seat),i.rotation.y=Math.PI/2,s.legs=null,s.hands[0].copy(i.userData.grips[0]),s.hands[1].copy(i.userData.grips[1]),s.v=null,Ns(i),t.done&&t.done();return}s.legs=f,s.lx=0,s.lz=p,s.yaw=0,s.y=0,s.up=0;let S=En.setFromAxisAngle(Ls.set(1,0,0),f[0][0]),v=dr.copy(pr[0].knee).sub(pr[0].hip).applyQuaternion(S).add(ho.set(0,-pr[0].shin,0).applyQuaternion(qr.setFromAxisAngle(Ls.set(1,0,0),f[0][0]+f[0][1]))),M=n<1.1?1-r(0,1.1):n>=7.8?r(7.8,9):0,T=Ne.localToWorld(bc.set(h.x,0,h.z)),_=Ne.worldToLocal(Vh.set(T.x,ke(T.x,T.z),T.z)).y,w=_-v.y+h.y;i.position.set(h.x,t.seat.y+(w-t.seat.y)*(1-M),h.z),i.rotation.y=u;let C=i.userData.grips;if(n<1.1||n>=7.8)s.hands[0].copy(C[0]).lerp(y(0),1-M),s.hands[1].copy(C[1]).lerp(y(1),1-M);else if(n<2.7||n>=6.2){let I=.05*Math.sin((n-(n<2.7?1.1:6.2))*5.6);for(let U=0;U<2;U++)s.hands[U].set(U?.31:-.31,-.22,.13+(U?-I:I)).multiplyScalar(a)}else{let I=r(3.1,3.9)-r(4.4,5.2);s.hands[0].set(-.14,-.08+.1*r(4.4,5.2)+.22*d,.32-.04*d).multiplyScalar(a),s.hands[1].set(.18,-.2,.2).multiplyScalar(a),s.hands[0].z+=.06*I}Ns(i);let P=t.tool,D=s.hand[0],F=n>2.4&&n<6.6;if(P.visible=F,F){let I=_-i.position.y+.03+.45*r(4.4,5.4)+.55*d,B=Tf.set(-.12*a,I,(.82-.2*r(3.1,3.9)-.2*d)*a).clone().sub(D),W=B.length();P.position.copy(D),P.quaternion.setFromUnitVectors(Cf,B.normalize()),P.scale.set(1,W,1),P.userData.pan.scale.set(1,1/W,1)}P.userData.rock&&(P.userData.rock.visible=n>4.3),!t.opened&&n>5.5&&(t.opened=!0,t.card&&t.card())}function xw(){let i=new Mt,e=new sn({color:3815996,roughness:.6,metalness:.4}),t=new Ye(new _s(.014,.018,.33,10),e);t.position.y=-.17;let n=new Ye(new _s(.017,.017,.12,10),e);return n.rotation.z=Math.PI/2,i.add(t,n),i.position.copy(Uh),i.traverse(s=>{s.castShadow=!0}),i}(async()=>{se("loadmsg").textContent="Shaping the valley\u2026",await new Promise(t=>setTimeout(t,30));try{let t=await fetch("../models/moon-a17.bin");t.ok&&(kh=new Int16Array(await t.arrayBuffer()),Y0=K0(0,0))}catch{}pS(),mS(),vS(),MS(),og(0,0),vt.add(zf),IS(),PS(),HS(),_c(),kh&&ES(),hs(0,0,Math.atan2(350,82)),se("loadmsg").textContent="Unloading the rover\u2026";let[i,e]=await Promise.all([uf.loadAsync("../models/lrv.glb").catch(()=>null),uf.loadAsync("../models/lm.glb").catch(()=>null)]);if(i){let t=i.scene;C0(t),t.updateMatrixWorld(!0),t.position.y=-.78-new nn().setFromObject(t).min.y,Ne.add(t,xw()),S1(),w1(),o1()}else Ne.add(new Ye(new di(3.1,.5,2.06),new sn({color:12170928})));{let t="";for(let n=0;n<2&&!je.length;n++)try{let s=await uf.loadAsync("../models/astronaut-a7l.glb");G1(V1(O1(s.scene)))}catch(s){t=s&&s.message||String(s),console.error("crew",s)}je.length||setTimeout(()=>zt("The astronauts could not be loaded on this device"+(t?" \xB7 "+t.slice(0,60):"")),4e3)}if(e){let t=e.scene;C0(t),YS(t);let n=st.x,s=st.z;st.y=ke(n,s),st.on=!0;let r=[[4.1,0],[-4.1,0],[0,4.1],[0,-4.1]].map(([c,d])=>ke(n+c,s+d)),a=new R(r[1]-r[0],8.2,r[3]-r[2]).normalize();t.quaternion.setFromUnitVectors(new R(0,1,0),a).multiply(new xt().setFromAxisAngle(new R(0,1,0),-Math.PI/2)),t.position.set(n,0,s),t.updateMatrixWorld(!0);let o=1e9,l=new R;t.traverse(c=>{if(!c.isMesh)return;let d=c.geometry.attributes.position;for(let h=0;h<d.count;h+=2)l.fromBufferAttribute(d,h).applyMatrix4(c.matrixWorld),o=Math.min(o,l.y-ke(l.x,l.z))}),t.position.y=-o-.03,vt.add(t)}se("loading").classList.remove("on"),se("brief").classList.add("on"),requestAnimationFrame(t=>{Rf=t,Nh(t)})})();window.__lrv={SHORTY:ut,ORB:Lt,WHEEL_PARTS:Bi,WHEELS:Rn,rover:Ne,CRASH:ae,stepDebris:Sg,INTRO:Ce,SEC:tt,BOULDER:wt,SLABS:Xh,VAN:ki,SITES:ea,openSite:Lg,OBJ:Bt,CPS:Wr,RUN:Be,breakApart:yg,EARTH:gg,look:null,car:N,AIR:it,step:wf,ground:ke,place:hs,tick:(i,e=1/60)=>{for(let t=0;t<i;t++)for(let s=0;s<4;s++)wf(e/4)},set:(i,e)=>{xi=i,lr=e,gc=!1},craters:oi};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
