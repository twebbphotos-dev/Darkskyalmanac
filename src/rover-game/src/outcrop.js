/* ──────────────────────────────────────────────────────────────
   outcrop.js — the six science targets.
   Real sedimentary outcrops on Mars are not stacked cakes. They are
   low, ragged ledges coming up out of the ground: thin laminae
   weathered into fins and lips, hard beds standing proud of soft
   ones, joints splitting the rock into blocks, rubble and dust at
   the foot. Each one here is a fine heightfield draped on the real
   terrain, shaped by the rule its rock follows, coloured from the
   rover photograph it is meant to match:
     crossbeds  "Whale Rock"   PIA19076   inclined laminae in sets, broken blocks
     laminae    Pahrump Hills  PIA19075   low, platy, paper-thin flat laminae, cracks
     pebbles    "Hottah"       PIA17062   tilted, broken slab, grey, studded with pebbles
     foresets   "Kodiak"       PIA24485   flat-topped butte, inclined beds in the middle
     veins      Garden City    PIA19161   dark mudstone in a raised net of white veins
     boulders   delta scarp    PIA24684   low cliff, fine beds below, boulders above
   ────────────────────────────────────────────────────────────── */
import * as THREE from 'three';
import { rng } from './mars.js';
import { boulderGeo, rockMaterial } from './terrain.js';

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const fract = v => v - Math.floor(v);

function noise2(seed) {
  const rand = rng(seed), N = 256, g = new Float32Array(N * N);
  for (let i = 0; i < g.length; i++) g[i] = rand() * 2 - 1;
  const at = (a, b) => g[(b & 255) * N + (a & 255)];
  return (x, y) => {
    const x0 = Math.floor(x), y0 = Math.floor(y), fx = x - x0, fy = y - y0;
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const a = at(x0, y0), b = at(x0 + 1, y0), c = at(x0, y0 + 1), d = at(x0 + 1, y0 + 1);
    return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
  };
}
/* distance to the nearest crack between irregular cells, and an id for the cell */
function cells(seed) {
  const h = (i, j, k) => fract(Math.sin(i * 127.1 + j * 311.7 + k * 74.7 + seed) * 43758.5453);
  return (x, y) => {
    const ix = Math.floor(x), iy = Math.floor(y);
    let f1 = 9, f2 = 9, id = 0;
    for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) {
      const px = ix + i + h(ix + i, iy + j, 1), py = iy + j + h(ix + i, iy + j, 2), d = Math.hypot(px - x, py - y);
      if (d < f1) { f2 = f1; f1 = d; id = h(ix + i, iy + j, 3); } else if (d < f2) f2 = d;
    }
    return [f2 - f1, id];
  };
}
/* treads and risers: quantise a height into steps of t, with risers taking fraction w */
const steps = (h, t, w) => t * (Math.floor(h / t) + smooth(1 - w, 1, fract(h / t)));

/* colours sampled from each photograph: deep shadow, mid rock, lit dust */
const LOOK = {
  crossbeds: { rock: [0x8e6c52, 0xa98466, 0x6e5240], fresh: 0x7c7068, dust: 0xb58e6c, dark: 0x3a2a1e },
  laminae:   { rock: [0x9a7458, 0xb08868, 0x806048], fresh: 0x8a7a6c, dust: 0xbb9070, dark: 0x45322a },
  pebbles:   { rock: [0x8c8a88, 0x9e9690, 0x77736f], fresh: 0x6f7a86, dust: 0xb88c6c, dark: 0x4a3c34 },
  foresets:  { rock: [0x9a8c70, 0xb0a07e, 0x7d705a], fresh: 0x8a826e, dust: 0xa89270, dark: 0x4e463a },
  veins:     { rock: [0x5e4a3a, 0x6e5644, 0x4e3c30], fresh: 0x55504c, dust: 0x96745a, dark: 0x22180f },
  boulders:  { rock: [0xa07a58, 0xb48a64, 0x8a6a4c], fresh: 0x857464, dust: 0xbb8e66, dark: 0x4a3626 },
};

export function makeOutcrop({ feature, seed, length = 5, width = 2.7, x: X = 0, z: Z = 0, ground }) {
  const rand = rng(seed), nA = noise2(seed + 1), nB = noise2(seed + 2), nC = noise2(seed + 3);
  const crack = cells(seed * 0.37), crack2 = cells(seed * 0.71 + 9);
  const look = LOOK[feature];
  const yaw = rand() * Math.PI * 2, cy = Math.cos(yaw), sy = Math.sin(yaw);

  // size and profile per kind
  const P = {
    crossbeds: { L: length * 1.15, W: width * 1.1, H: 1.25, t: 0.16, w: 0.18, t2: 0.04, w2: 0.55, slope: 0.32, crackCell: 1.3, crackD: 0.45 },
    laminae:   { L: length * 1.4, W: width * 1.5, H: 0.5, t: 0.09, w: 0.4, t2: 0.014, w2: 0.5, slope: 0, crackCell: 0.45, crackD: 0.05 },
    pebbles:   { L: length * 1.0, W: width * 0.9, H: 0.75, t: 0.3, w: 0.35, t2: 0, w2: 0, slope: 0, crackCell: 0.8, crackD: 0.22 },
    foresets:  { L: length * 1.8, W: width * 1.7, H: 3.4, t: 0.34, w: 0.2, t2: 0.06, w2: 0.45, slope: 0.42, crackCell: 2.2, crackD: 0.5 },
    veins:     { L: length * 1.2, W: width * 1.3, H: 0.75, t: 0.11, w: 0.35, t2: 0.025, w2: 0.5, slope: 0, crackCell: 0.7, crackD: 0.06 },
    boulders:  { L: length * 1.3, W: width * 1.1, H: 2.0, t: 0.26, w: 0.2, t2: 0.035, w2: 0.5, slope: 0, crackCell: 1.6, crackD: 0.35 },
  }[feature];
  const { L, W, H } = P;
  const face = rand() < 0.5 ? -1 : 1;                 // which long side is the steep, readable face
  const tiltA = (rand() - 0.5) * 0.12;                // the whole unit dips a little
  const bumps = [];                                   // pebbles in the Hottah slab
  if (false) for (let i = 0; i < 420; i++) bumps.push({ x: (rand() - 0.5) * 2 * L, z: (rand() - 0.5) * 2 * W, r: 0.012 + Math.pow(rand(), 2.2) * 0.05, c: rand() });

  // plan: a lumpy, squarish outline with bites taken out of it
  const ph = [rand() * 6.3, rand() * 6.3, rand() * 6.3];
  const reach = th => {
    let r = 1 + 0.12 * Math.sin(2 * th + ph[0]) + 0.08 * Math.sin(3 * th + ph[1]) + 0.05 * Math.sin(7 * th + ph[2]);
    return r;
  };
  /* rock surface height above the ground at local (u along, v across), and its stratigraphic coordinate */
  function rock(u, v) {
    const th = Math.atan2(v / W, u / L), rr = Math.hypot(u / L, v / W) / reach(th);
    const ragged = nA(u * 1.6, v * 1.6) * 0.09 + nB(u * 5, v * 5) * 0.035;
    let d = 1 - rr + ragged;                           // > 0 inside the outline
    if (d <= 0) return [-0.35, 0, 0, 0];
    // the mound: steep on the face side, a gentler back-slope behind
    const across = v / W * face;                        // −1 face … +1 back
    const steep = across < 0 ? 0.16 : 0.42;
    let h = H * Math.pow(smooth(0, steep, d), 0.85) * (0.82 + 0.18 * nC(u * 0.5, v * 0.5));
    if (feature === 'foresets') h = Math.min(h, H * (0.93 + 0.04 * nA(u * 0.3, v * 0.3)));   // flat-topped butte
    if (feature === 'pebbles') h = Math.min(h, H * smooth(-1.2, 1.2, u / L * 1.4 + 0.3) + 0.05) + 0.08;   // a tilted slab
    h += tiltA * u;
    // joints: cracks running down through the beds, splitting it into blocks
    const [cd, cid] = crack(u / P.crackCell, v / P.crackCell);
    const cw = feature === 'crossbeds' || feature === 'boulders' ? 0.07 : 0.05;
    const inCrack = 1 - smooth(cw * 0.4, cw, cd);
    h -= inCrack * P.crackD * Math.min(1, h / Math.max(0.01, P.crackD));
    h += (cid - 0.5) * 0.05 * (feature === 'veins' || feature === 'laminae' ? 1 : 2);      // each block sits a little differently
    // beds: inclined within sets for cross-beds and foresets, flat otherwise
    let incl = P.slope;
    if (feature === 'foresets') incl = h > H * 0.32 && h < H * 0.72 ? P.slope : 0;
    if (feature === 'crossbeds') incl = P.slope * (Math.floor(h / 0.3) % 2 ? 1 : -0.6);
    const s0 = h - incl * u;
    let s = steps(s0 + nB(u * 1.3, v * 1.3) * P.t * 0.18, P.t, P.w);                // ledges with ragged lips
    // (fine laminae are drawn and lit in the shader: at this grid they would only alias)
    h = s + incl * u;
    // pebbles standing out of the slab
    let peb = 0;
    if (bumps.length) for (const b of bumps) { const q = (u - b.x) ** 2 + (v - b.z) ** 2; if (q < b.r * b.r) { const k = Math.sqrt(1 - q / (b.r * b.r)) * b.r * 0.9; if (k > peb) peb = k; } }
    h += peb;
    // veins: a raised net, harder than the mudstone round it
    let vein = 0;
    if (feature === 'veins') {
      const [v1] = crack2(u / 0.55 + nA(u, v) * 0.3, v / 0.55 + nB(u, v) * 0.3), [v2] = crack(u / 1.4, v / 1.4);
      vein = Math.max((1 - smooth(0.012, 0.03, v1)) * 0.85, 1 - smooth(0.01, 0.028, v2));
      h += vein * 0.03;
      vein = 0;                                          // colour is drawn per pixel, from the same net
    }
    return [Math.max(-0.35, h), s0, peb, vein, inCrack];
  }

  // grid fine enough for laminae where it matters
  const cell = Math.max(0.035, (2.4 * Math.max(L, W)) / 260);
  const nu = Math.ceil((2.3 * L) / cell), nv = Math.ceil((2.3 * W) / cell);
  const pos = new Float32Array((nu + 1) * (nv + 1) * 3), col = new Float32Array(pos.length), strat = new Float32Array((nu + 1) * (nv + 1));
  const GY = new Float32Array((nu + 1) * (nv + 1)), UU = new Float32Array((nu + 1) * (nv + 1)), H2 = new Float32Array((nu + 1) * (nv + 1)), PB = new Float32Array(H2.length), VN = new Float32Array(H2.length), CK = new Float32Array(H2.length);
  let top = 0;
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) {
    const u = -1.15 * L + i * cell, v = -1.15 * W + j * cell, k = j * (nu + 1) + i;
    const wx = X + u * cy + v * sy, wz = Z - u * sy + v * cy;
    const [h, s0, peb, vein, ck] = rock(u, v);
    const gy = ground(wx, wz); GY[k] = gy; UU[k] = u;
    pos[k * 3] = u; pos[k * 3 + 1] = gy + h; pos[k * 3 + 2] = v;
    H2[k] = h; strat[k] = s0; PB[k] = peb; VN[k] = vein || 0; CK[k] = ck || 0;
    top = Math.max(top, h);
  }
  // colour: bed tone up the stratigraphy, darker in crevices and under lips, dust where flat
  const bedTone = s => { const i = Math.floor(s / P.t); return fract(Math.sin(i * 91.7 + seed) * 4375.85); };
  // the photographs are lit by the Martian sun; take the albedo a little darker and greyer than they look
  const alb = h => { const c = new THREE.Color(h), l = c.r * 0.2126 + c.g * 0.7152 + c.b * 0.0722; return c.lerp(new THREE.Color(l, l, l), 0.3).multiplyScalar(0.62); };
  const c0 = new THREE.Color(), cA = look.rock.map(alb), cF = new THREE.Color(look.fresh), cDust = alb(look.dust), cDark = new THREE.Color(look.dark);
  const SP = new Float32Array((nu + 1) * (nv + 1) * 2);
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) {
    const k = j * (nu + 1) + i, h = H2[k];
    c0.setRGB(1, 1, 1).lerp(cF.clone().multiplyScalar(1 / Math.max(0.01, cA[0].g)), 0.18 * (nC(i * 0.07, j * 0.07) + 1));   // patches of fresher, greyer rock
    // concavity: how far below its neighbourhood this point sits
    let sum = 0, n = 0;
    for (const [a, b] of [[-3, 0], [3, 0], [0, -3], [0, 3], [-2, -2], [2, 2], [-2, 2], [2, -2]]) {
      const ii = Math.min(nu, Math.max(0, i + a)), jj = Math.min(nv, Math.max(0, j + b)); sum += H2[jj * (nu + 1) + ii]; n++;
    }
    const cav = Math.max(0, sum / n - h);
    c0.multiplyScalar(1 - Math.min(0.62, cav * 5 + CK[k] * 0.45));
    SP[k * 2] = feature === 'pebbles' && PB[k] > 0 ? 0.2 + 0.8 * fract(PB[k] * 997) : 0; SP[k * 2 + 1] = VN[k];
    if (h < 0.02) c0.setRGB(1.05, 1.05, 1.05);
    col[k * 3] = c0.r; col[k * 3 + 1] = c0.g; col[k * 3 + 2] = c0.b;
  }
  const idx = [];
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1;
    if (H2[a] < -0.3 && H2[b] < -0.3 && H2[c] < -0.3 && H2[d] < -0.3) continue;
    idx.push(a, c, b, b, c, d);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('aG', new THREE.BufferAttribute(GY, 1));
  geo.setAttribute('aU', new THREE.BufferAttribute(UU, 1));
  geo.setAttribute('aSp', new THREE.BufferAttribute(SP, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0 });
  const U = {
    cR0: { value: cA[0] }, cR1: { value: cA[1] }, cR2: { value: cA[2] }, cDust: { value: cDust }, cDark: { value: cDark },
    bedT: { value: P.t }, lamT: { value: P.t2 || P.t / 6 }, incl: { value: P.slope }, H: { value: H }, kind: { value: ['crossbeds', 'laminae', 'pebbles', 'foresets', 'veins', 'boulders'].indexOf(feature) },
    seed: { value: (seed % 97) / 9.7 },
  };
  mat.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, U);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute float aG; attribute float aU; attribute vec2 aSp;\nvarying vec3 vOP; varying float vH; varying float vU; varying vec2 vSp;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvOP = position; vH = position.y - aG; vU = aU; vSp = aSp;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      uniform vec3 cR0, cR1, cR2, cDust, cDark; uniform float bedT, lamT, incl, H, kind, seed;
      vec2 cellH( vec2 p ) { return fract( sin( vec2( dot( p, vec2( 127.1, 311.7 ) ), dot( p, vec2( 269.5, 183.3 ) ) ) + seed ) * 43758.5453 ); }
      float edge( vec2 p ) { vec2 n = floor( p ), f = fract( p ); float f1 = 8.0, f2 = 8.0;
        for ( int j = -1; j <= 1; j++ ) for ( int i = -1; i <= 1; i++ ) { vec2 g = vec2( float( i ), float( j ) ); float d = length( g + cellH( n + g ) - f );
          if ( d < f1 ) { f2 = f1; f1 = d; } else if ( d < f2 ) f2 = d; }
        return f2 - f1; }
      varying vec3 vOP; varying float vH; varying float vU; varying vec2 vSp;
      float hsh( vec3 p ) { return fract( sin( dot( p, vec3( 12.9898, 78.233, 37.719 ) ) ) * 43758.5453 ); }
      float h1( float x ) { return fract( sin( x * 91.7 + seed ) * 4375.85 ); }
      float vn( vec3 p ) { vec3 i = floor( p ), f = fract( p ); f = f * f * ( 3.0 - 2.0 * f );
        return mix( mix( mix( hsh( i ), hsh( i + vec3( 1, 0, 0 ) ), f.x ), mix( hsh( i + vec3( 0, 1, 0 ) ), hsh( i + vec3( 1, 1, 0 ) ), f.x ), f.y ),
                    mix( mix( hsh( i + vec3( 0, 0, 1 ) ), hsh( i + vec3( 1, 0, 1 ) ), f.x ), mix( hsh( i + vec3( 0, 1, 1 ) ), hsh( i + vec3( 1, 1, 1 ) ), f.x ), f.y ), f.z ); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
      {
        // the stratigraphy, per pixel, so cliff faces show their beds
        float inc = incl;
        if ( kind == 3.0 ) inc = ( vH > H * 0.32 && vH < H * 0.72 ) ? incl : 0.0;
        if ( kind == 0.0 ) inc = incl * ( mod( floor( vH / 0.3 ), 2.0 ) > 0.5 ? 1.0 : -0.6 );
        float s = vH - inc * vU + ( vn( vOP * 1.7 ) - 0.5 ) * 0.03 + ( vn( vOP * vec3( 4.0, 1.0, 4.0 ) ) - 0.5 ) * lamT * 1.6;
        float bed = h1( floor( s / bedT ) ), bed2 = h1( floor( s / bedT ) + 17.0 );
        vec3 rockC = mix( cR0, bed > 0.5 ? cR1 : cR2, abs( bed - 0.5 ) * 1.3 ) * ( 0.92 + 0.16 * vn( vOP * vec3( 0.6, 3.0, 0.6 ) ) );
        if ( bed2 > 0.86 ) rockC *= 0.72;                                        // a dark, resistant marker bed
        float fl = fwidth( s );
        float lam = mix( 0.5, sin( s / lamT * 6.2832 ) * 0.5 + 0.5, 1.0 - smoothstep( 0.15, 0.4, fl / lamT ) );
        float lam2 = mix( 0.5, sin( s / ( lamT * 0.37 ) * 6.2832 + 1.3 ) * 0.5 + 0.5, 1.0 - smoothstep( 0.15, 0.4, fl / ( lamT * 0.37 ) ) );
        rockC *= 0.86 + 0.16 * lam + 0.06 * lam2;                                // laminae, faded out wherever they would be finer than a pixel
        if ( vSp.x > 0.0 ) rockC = mix( vec3( 0.16 ), vec3( 0.52, 0.5, 0.48 ), vSp.x );             // pebbles
        if ( kind == 2.0 ) {
          // Hottah: rounded gravel cemented in a sandy matrix, on every face
          vec3 nW = normalize( cross( dFdx( vOP ), dFdy( vOP ) ) );
          vec2 pp = abs( nW.y ) > 0.6 ? vOP.xz : vec2( vOP.x + vOP.z, vOP.y );
          vec2 cq = pp / 0.06, cn = floor( cq ), cf = fract( cq ); float best = 9.0; vec2 id = vec2( 0.0 );
          for ( int j = -1; j <= 1; j++ ) for ( int i = -1; i <= 1; i++ ) { vec2 g = vec2( float( i ), float( j ) ); vec2 o = cellH( cn + g );
            float r = 0.18 + 0.3 * o.x; float d = length( g + o - cf ) / r; if ( d < best ) { best = d; id = o; } }
          float peb = 1.0 - smoothstep( 0.85, 1.0, best ), aa = 1.0 - smoothstep( 0.004, 0.015, length( fwidth( pp ) ) );
          vec3 pc = mix( vec3( 0.22, 0.21, 0.21 ), vec3( 0.55, 0.53, 0.5 ), id.y ) * ( 0.8 + 0.4 * ( 1.0 - best ) );
          rockC = mix( rockC, pc, peb * aa * step( 0.5, id.x ) );
        }
        if ( kind == 4.0 ) {
          // calcium-sulphate veins: a fine net and a coarse one, cutting straight down through the beds
          vec3 nW4 = normalize( cross( dFdx( vOP ), dFdy( vOP ) ) );
          vec2 q = vU * vec2( 1.0, 0.0 ) + vOP.xz;
          float w1 = fwidth( q.x ) * 2.0 / 0.55;
          float e1 = 1.0 - smoothstep( 0.004, 0.011 + w1, edge( vOP.xz / 0.55 + vec2( vn( vOP * 1.8 ), vn( vOP * 2.1 + 3.0 ) ) * 0.5 ) );
          float e2 = 1.0 - smoothstep( 0.004, 0.012 + w1 * 0.4, edge( vOP.xz / 1.4 + 7.0 ) );
          float vv = max( e1 * 0.85, e2 * 0.7 * smoothstep( 0.3, 0.8, nW4.y ) );
          rockC = mix( rockC, vec3( 0.66, 0.62, 0.56 ) * ( 0.8 + 0.2 * vn( vOP * 30.0 ) ), vv * 0.9 );
        }
        diffuseColor.rgb = rockC * diffuseColor.rgb;
        diffuseColor.rgb = mix( diffuseColor.rgb, cDust, smoothstep( 0.04, -0.05, vH ) * 0.9 );        // buried in dust at the foot
      }`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      {
        // relief finer than the mesh: hard laminae standing proud of soft ones, grain, pits and fractures
        float inc2 = incl;
        if ( kind == 3.0 ) inc2 = ( vH > H * 0.32 && vH < H * 0.72 ) ? incl : 0.0;
        if ( kind == 0.0 ) inc2 = incl * ( mod( floor( vH / 0.3 ), 2.0 ) > 0.5 ? 1.0 : -0.6 );
        float s2 = vH - inc2 * vU + ( vn( vOP * vec3( 4.0, 1.0, 4.0 ) ) - 0.5 ) * lamT * 1.6;
        // fade every detail out before it is finer than a pixel, so nothing shimmers into stripes
        float aaL = 1.0 - smoothstep( 0.25, 0.6, fwidth( s2 ) / lamT );
        float aaP = 1.0 - smoothstep( 0.02, 0.06, length( fwidth( vOP ) ) );
        float fin = smoothstep( 0.35, 0.75, sin( s2 / lamT * 6.2832 ) * 0.5 + 0.5 ) * aaL;
        float bh = fin * 0.0 + vn( vOP * 22.0 ) * 0.005 * aaP + vn( vOP * 6.0 ) * 0.012
                 + vSp.y * 0.01 + vSp.x * 0.01;
        vec3 sp = - vViewPosition, sx = dFdx( sp ), syy = dFdy( sp );
        vec3 R1 = cross( syy, normal ), R2 = cross( normal, sx );
        float det = dot( sx, R1 ) * faceDirection;
        vec3 grad = sign( det ) * ( dFdx( bh ) * R1 + dFdy( bh ) * R2 );
        normal = normalize( abs( det ) * normal - grad * 0.9 );
      }
      vec3 wn = inverseTransformDirection( normal, viewMatrix );
      float g = vn( vOP * 38.0 ) * 0.5 + vn( vOP * 11.0 ) * 0.35 + vn( vOP * 3.0 ) * 0.15;
      diffuseColor.rgb *= 0.8 + 0.4 * g;                                           // grain and pitting
      // risers are the undercut faces under each ledge: in shade from the sky
      diffuseColor.rgb *= mix( 0.5, 1.0, smoothstep( 0.1, 0.7, wn.y ) );
      float up = smoothstep( 0.6, 0.93, wn.y + ( vn( vOP * 2.3 ) - 0.5 ) * 0.4 );
      diffuseColor.rgb = mix( diffuseColor.rgb, cDust * ( 0.85 + 0.3 * g ), up * 0.28 );   // a little dust on treads and tops`);
  };
  const rockMesh = new THREE.Mesh(geo, mat);
  rockMesh.castShadow = true; rockMesh.receiveShadow = false;   // its relief is finer than a shadow-map texel; it carries its own shade

  const g = new THREE.Group();
  g.add(rockMesh);

  // loose blocks and rubble at the foot, and boulders for the flood beds
  const d = new THREE.Object3D();
  const strew = (geom, m, n, at) => {
    const im = new THREE.InstancedMesh(geom, m, n);
    for (let i = 0; i < n; i++) { at(d, i); d.updateMatrix(); im.setMatrixAt(i, d.matrix); }
    im.castShadow = true; im.receiveShadow = true; g.add(im);
  };
  const edgePoint = (grow) => {
    const th = rand() * 6.283, r = reach(th) * grow;
    const u = Math.cos(th) * r * L, v = Math.sin(th) * r * W;
    return [u, v, ground(X + u * cy + v * sy, Z - u * sy + v * cy)];
  };
  const rubbleCol = alb(look.rock[2]).multiplyScalar(0.55).getHex();
  strew(boulderGeo(seed + 55, 1), rockMaterial(rubbleCol), feature === 'foresets' ? 70 : 45, o => {
    const [u, v, gy] = edgePoint(0.95 + Math.pow(rand(), 1.4) * 0.45), s = 0.05 + Math.pow(rand(), 2) * (feature === 'foresets' ? 0.6 : 0.3);
    o.position.set(u, gy + s * 0.1, v); o.rotation.set((rand() - .5) * 0.6, rand() * 6.3, (rand() - .5) * 0.6); o.scale.set(s, s * (0.35 + rand() * 0.4), s * (0.6 + rand() * 0.5));
  });
  if (feature === 'crossbeds' || feature === 'laminae') {
    // thin plates broken off the ledges, lying tilted on and around the rock
    strew(boulderGeo(seed + 31, 1), rockMaterial(alb(look.rock[1]).multiplyScalar(0.8).getHex()), feature === 'crossbeds' ? 28 : 40, o => {
      const [u, v, gy] = edgePoint(0.6 + rand() * 0.75), [h] = rock(u, v), s = 0.12 + rand() * (feature === 'crossbeds' ? 0.4 : 0.22);
      o.position.set(u, gy + Math.max(0, h) + s * 0.04, v);
      o.rotation.set((rand() - .5) * 0.9, rand() * 6.3, (rand() - .5) * 0.9); o.scale.set(s, s * 0.14, s * (0.6 + rand() * 0.5));
    });
  }
  if (feature === 'boulders') {
    strew(boulderGeo(seed + 9, 2, true), rockMaterial(0x2a2420), 40, o => {
      const th = rand() * 6.283, r = reach(th) * (0.55 + rand() * 0.4), u = Math.cos(th) * r * L, v = Math.sin(th) * r * W;
      const [h] = rock(u, v), s = 0.2 + rand() * 0.45;
      o.position.set(u, ground(X + u * cy + v * sy, Z - u * sy + v * cy) + Math.max(0, h) - s * 0.25, v);
      o.rotation.set(rand() * 3, rand() * 6.3, rand() * 3); o.scale.set(s, s * 0.8, s);
    });
  }
  g.position.set(X, 0, Z);
  g.rotation.y = yaw;
  g.userData = { top, length: L, width: W, yaw, absolute: true };
  return g;
}
