/* ──────────────────────────────────────────────────────────────
   edl.js — Level 1: entry, descent and landing

   Perseverance's "seven minutes", compressed to about two and split
   into the decisions that actually mattered on 18 February 2021:

     ENTRY     roll the capsule to point its lift, and steer the
               predicted landing point onto the target
     CHUTE     fire the parachute by range, not by the clock —
               inside the speed it can survive
     DESCENT   heat shield away, radar on, and the hazard map that
               Terrain-Relative Navigation built comes up
     POWERED   drop out of the backshell, light eight engines,
               divert to safe ground before the fuel runs out
     SKY CRANE lower the rover on its bridles, cut it loose, fly away

   The numbers on the HUD follow the real timeline (see FACTS). The
   clock is run fast between decisions and close to real time during
   them. There was no model of the entry vehicle in the Almanac, so
   the aeroshell, parachute and descent stage are built here from
   their published dimensions.

   Two worlds are used. Above the heat-shield separation the craft is
   drawn over a globe, in kilometres. Below it, the craft is put into
   the real surface scene, in metres — so the ground you land on is
   the ground you then drive on.
   ────────────────────────────────────────────────────────────── */
import * as THREE from 'three';
import { rng, MARS, GRADE, LIGHT_CAST, applyGrade } from './mars.js';
import { createStick, buzz } from './stick.js';

export const FACTS = {
  entryAlt: 125, entrySpeed: 5330,          // km, m/s  (about 19,500 km/h)
  peakHeatC: 1300, peakG: 10,
  chuteAlt: 11, chuteSpeed: 420, chuteDia: 21.5,
  backshellAlt: 2100, chuteTerminal: 85,    // m, m/s
  craneAlt: 20, touchdown: 0.75, bridle: 7.6,
  fuel: 400, ellipse: [7.7, 6.6],           // kg, km
};

/* Two ways to fly it. Easy (the default): gentler air, more margin everywhere, and the pitch control works
   the way it looks — push up and the capsule's nose, and its trace on the attitude strip, go up. Realistic:
   the 3.4 margins, and pitch as the flight software sees it, where up raises the angle of attack (the
   capsule's back drops in the view). Chosen on the briefing; remembered on this device. */
const DIFF = {
  easy: { aoaWarn: 12, aoaLost: 30, rcs: 1.8, gust: 0.75, gustA: 2, gustB: 8, shearA: 13, shearB: 7, burn: 12, bankRcs: 0.015, gMax: 2, chuteV: 500, chuteAoa: 18, lateFuel: 40, fuelA: 3.4, fuelB: 2.4, hs: 1.8, vs: 2.2, pitch: -1 },
  real: { aoaWarn: 10, aoaLost: 26, rcs: 2.6, gust: 1, gustA: 3, gustB: 11, shearA: 20, shearB: 10, burn: 8, bankRcs: 0.022, gMax: 1.3, chuteV: 478, chuteAoa: 15, lateFuel: 70, fuelA: 4.3, fuelB: 3.2, hs: 1.3, vs: 1.6, pitch: 1 },
};
let MODE = 'easy'; try { if (localStorage.getItem('jt-difficulty') === 'real') MODE = 'real'; } catch (e) { /* storage blocked */ }
let D = DIFF[MODE];
export const difficulty = () => MODE;
export function setDifficulty(m) { MODE = m === 'real' ? 'real' : 'easy'; D = DIFF[MODE]; try { localStorage.setItem('jt-difficulty', MODE); } catch (e) { /* storage blocked */ } }

const R_MARS = 3389.5;                       // km
const JEZERO = { lat: 18.44, lon: 77.45 };
const DEG = Math.PI / 180;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

/* ── the entry profile ────────────────────────────────────────── */
/* [seconds after entry, altitude km, speed m/s] — the shape of a guided
   Mars entry: a long fast plunge, a brutal minute of braking, then a
   slow glide down to parachute conditions. */
const PROFILE = [
  [0, 125, 5330], [30, 78, 5390], [55, 48, 5300], [70, 36.5, 4950], [80, 30.5, 4350],
  [90, 25.5, 3380], [100, 22, 2520], [112, 19.3, 1840], [130, 17, 1330], [155, 15.2, 980],
  [185, 13.6, 740], [215, 12.2, 565], [240, 11.0, 430], [262, 9.7, 345], [290, 8.2, 290],
];
function profile(t, col) {
  const P = PROFILE;
  if (t <= P[0][0]) return P[0][col];
  if (t >= P[P.length - 1][0]) return P[P.length - 1][col];
  let i = 0; while (P[i + 1][0] < t) i++;
  const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(P.length - 1, i + 2)];
  const u = (t - p1[0]) / (p2[0] - p1[0]);
  // Catmull-Rom with tangents scaled for the uneven spacing
  const m1 = (p2[col] - p0[col]) / (p2[0] - p0[0]) * (p2[0] - p1[0]);
  const m2 = (p3[col] - p1[col]) / (p3[0] - p1[0]) * (p2[0] - p1[0]);
  const u2 = u * u, u3 = u2 * u;
  return (2 * u3 - 3 * u2 + 1) * p1[col] + (u3 - 2 * u2 + u) * m1 + (-2 * u3 + 3 * u2) * p2[col] + (u3 - u2) * m2;
}
const altAt = t => profile(t, 1), velAt = t => profile(t, 2);
const gAt = t => Math.max(0, (velAt(t - 1) - velAt(t + 1)) / 2 / 9.81);
const gammaAt = t => Math.asin(clamp((altAt(t - 1) - altAt(t + 1)) * 500 / velAt(t), -0.9, 0.9));   // flight-path angle, below horizontal
const heatAt = t => Math.exp(-Math.pow((t - 80) / 30, 2));                                         // 0..1, peaks 80 s in
const authAt = t => 0.35 + 0.65 * Math.exp(-Math.pow((t - 100) / 52, 2));                          // how hard lift can steer

// ground distance still to run, km, tabulated once
const RANGE = (() => {
  const out = new Float32Array(300); let acc = 0;
  for (let t = 289; t >= 0; t--) { acc += velAt(t + 0.5) * Math.cos(gammaAt(t + 0.5)) / 1000; out[t] = acc; }
  return out;
})();
const rangeAt = t => { const i = clamp(Math.floor(t), 0, 288); return lerp(RANGE[i], RANGE[i + 1], clamp(t - i, 0, 1)); };

/* ── textures ─────────────────────────────────────────────────── */
function canvasOf(w, h = w) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

/* soft grey mottle with a scatter of crater dots — tiled at several
   scales it gives the ground something to slide past at any altitude */
function mottleTexture(seed) {
  const s = 512, rand = rng(seed), cv = canvasOf(s), c = cv.getContext('2d');
  const small = canvasOf(64), sc = small.getContext('2d'), id = sc.createImageData(64, 64);
  for (let i = 0; i < 64 * 64; i++) { const v = 90 + rand() * 90; id.data.set([v, v, v, 255], i * 4); }
  sc.putImageData(id, 0, 0);
  c.imageSmoothingEnabled = true;
  c.drawImage(small, 0, 0, s, s);
  c.globalAlpha = 0.5; c.drawImage(small, 0, 0, 32, 32, 0, 0, s, s);
  c.globalAlpha = 1;
  for (let i = 0; i < 46; i++) {
    const x = rand() * s, y = rand() * s, r = 3 + Math.pow(rand(), 2.4) * 26;
    for (const ox of [-s, 0, s]) for (const oy of [-s, 0, s]) {
      const px = x + ox, py = y + oy;
      if (px < -40 || px > s + 40 || py < -40 || py > s + 40) continue;
      const g = c.createRadialGradient(px, py, r * 0.2, px, py, r);
      g.addColorStop(0, 'rgba(70,70,70,0.55)'); g.addColorStop(0.8, 'rgba(95,95,95,0.4)');
      g.addColorStop(0.93, 'rgba(210,210,210,0.5)'); g.addColorStop(1, 'rgba(128,128,128,0)');
      c.fillStyle = g; c.beginPath(); c.arc(px, py, r, 0, 6.3); c.fill();
    }
  }
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}

/* A drawn map of the country round the landing site, 60 km on a side,
   north up: Jezero's rim and floor, the delta fanning in from the breach
   in the western rim, the valley that fed it, and a scatter of craters.
   It is a sketch of the real place, not survey data. */
const REGION = 60000;
const SITE_TONE = [146, 72, 45];             // what the ground round the terrain mesh is drawn as, to meet it without a line

/* The real thing, when it is there: Mars Reconnaissance Orbiter's CTX photographs of
   Jezero (USGS orthoimage mosaic, coloured from Mars Express' true-colour view), cut to
   the same 60 km square, north up, centred on the landing point (src/jezero-crater/region.py). Its colours are true; here they are
   re-expressed relative to the crater floor beside the site, in the tones the rest
   of this sheet is drawn in, so the plain still meets the terrain mesh. */
function realRegion(img, cv, c, S, px, len) {
  c.drawImage(img, 0, 0, S, S);
  const id = c.getImageData(0, 0, S, S), d = id.data;
  const lin = new Float32Array(256); for (let i = 0; i < 256; i++) lin[i] = Math.pow(i / 255, 2.2);
  const out = new Uint8ClampedArray(2049); for (let i = 0; i <= 2048; i++) out[i] = Math.round(255 * Math.pow(i / 2048, 1 / 2.2));
  let r = 0, g = 0, b = 0, n = 0;                       // the floor 1.5 to 5.5 km east of the site
  for (let y = S / 2 - 130; y < S / 2 + 130; y += 2) for (let x = S / 2 + 50; x < S / 2 + 190; x += 2) {
    const o = (y * S + x) * 4; r += lin[d[o]]; g += lin[d[o + 1]]; b += lin[d[o + 2]]; n++;
  }
  const k = [lin[SITE_TONE[0]] / (r / n), lin[SITE_TONE[1]] / (g / n), lin[SITE_TONE[2]] / (b / n)].map(v => v * 2048);
  for (let o = 0; o < d.length; o += 4) {
    d[o] = out[Math.min(2048, (lin[d[o]] * k[0]) | 0)];
    d[o + 1] = out[Math.min(2048, (lin[d[o + 1]] * k[1]) | 0)];
    d[o + 2] = out[Math.min(2048, (lin[d[o + 2]] * k[2]) | 0)];
  }
  c.putImageData(id, 0, 0);
  const t = SITE_TONE.join(','), g2 = c.createRadialGradient(px(0), px(0), len(1150), px(0), px(0), len(2400));
  g2.addColorStop(0, `rgba(${t},1)`); g2.addColorStop(0.5, `rgba(${t},0.5)`); g2.addColorStop(1, `rgba(${t},0)`);
  c.fillStyle = g2; c.beginPath(); c.arc(px(0), px(0), len(2400), 0, 6.3); c.fill();
  return cv;
}

function regionalCanvas(img = null) {
  const S = 2048, cv = canvasOf(S), c = cv.getContext('2d', { willReadFrequently: true }), rand = rng(77450);
  const px = m => (m / REGION + 0.5) * S, len = m => m / REGION * S;
  if (img) return realRegion(img, cv, c, S, px, len);

  c.fillStyle = '#8c4a30'; c.fillRect(0, 0, S, S);                       // highlands

  const noise = canvasOf(256), nc = noise.getContext('2d'), id = nc.createImageData(256, 256);
  for (let i = 0; i < 256 * 256; i++) { const v = rand() * 255; id.data.set([v, v, v, 255], i * 4); }
  nc.putImageData(id, 0, 0);
  const mottle = (scale, alpha, mode = 'overlay') => {
    c.save(); c.globalAlpha = alpha; c.globalCompositeOperation = mode;
    c.drawImage(noise, 0, 0, 256 / scale, 256 / scale, 0, 0, S, S); c.restore();
  };
  mottle(32, 0.55); mottle(8, 0.4); mottle(2, 0.22);

  // Jezero: 45 km across, centred east of the landing site
  const jx = px(17200), jz = px(1200), jr = len(22500);
  let g = c.createRadialGradient(jx, jz, jr * 0.2, jx, jz, jr * 1.12);
  g.addColorStop(0, 'rgba(112,58,38,0.9)'); g.addColorStop(0.8, 'rgba(120,62,40,0.88)');
  g.addColorStop(0.9, 'rgba(164,96,62,0.8)'); g.addColorStop(0.96, 'rgba(128,66,43,0.55)'); g.addColorStop(1, 'rgba(140,74,48,0)');
  c.fillStyle = g; c.beginPath(); c.arc(jx, jz, jr * 1.12, 0, 6.3); c.fill();

  // Neretva Vallis, winding in from the west to the breach in the rim
  c.strokeStyle = 'rgba(96,48,31,0.7)'; c.lineWidth = len(520); c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath(); c.moveTo(px(-30000), px(-5200));
  c.bezierCurveTo(px(-22000), px(-8200), px(-17000), px(1800), px(-11500), px(-1600));
  c.bezierCurveTo(px(-9000), px(-3200), px(-7200), px(300), px(-5300), px(-500)); c.stroke();

  // the delta: a fan from the breach, with a ragged front that stops just west of the landing site
  const ax = -5300, az = -500, fan = [];
  for (let a = -64; a <= 66; a += 1) {
    const rr = 5030 * (0.93 + 0.09 * Math.sin(a * 0.31) + 0.045 * Math.sin(a * 1.3 + 1) + 0.02 * Math.sin(a * 4.1) + (rand() - 0.5) * 0.025);
    fan.push([ax + Math.cos(a * DEG) * rr * (Math.abs(a) < 12 ? 1 : 0.97), az + Math.sin(a * DEG) * rr]);
  }
  c.beginPath(); c.moveTo(px(ax), px(az)); fan.forEach(([x, z]) => c.lineTo(px(x), px(z))); c.closePath();
  g = c.createRadialGradient(px(ax), px(az), 0, px(ax), px(az), len(5200));
  g.addColorStop(0, '#a66440'); g.addColorStop(0.85, '#ad6c45'); g.addColorStop(1, '#985a3a');
  c.fillStyle = g; c.fill();
  c.save(); c.clip();
  c.strokeStyle = 'rgba(112,58,38,0.4)'; c.lineWidth = len(90);
  for (let a = -58; a <= 60; a += 9 + rand() * 6) {                       // old distributary channels
    c.beginPath(); c.moveTo(px(ax), px(az));
    const m = a + (rand() - 0.5) * 24;
    c.quadraticCurveTo(px(ax + Math.cos(m * DEG) * 2600), px(az + Math.sin(m * DEG) * 2600), px(ax + Math.cos(a * DEG) * 5200), px(az + Math.sin(a * DEG) * 5200));
    c.stroke();
  }
  c.restore();
  c.strokeStyle = 'rgba(70,34,22,0.45)'; c.lineWidth = len(70);           // the scarp, in shadow
  c.beginPath(); fan.forEach(([x, z], i) => c[i ? 'lineTo' : 'moveTo'](px(x), px(z))); c.stroke();

  // craters, lit from the south-east
  const crater = (x, z, r, depth = 1) => {
    const X = px(x), Z = px(z), Rr = Math.max(1.5, len(r));
    g = c.createRadialGradient(X - Rr * 0.18, Z + Rr * 0.18, Rr * 0.1, X, Z, Rr);
    g.addColorStop(0, `rgba(92,46,30,${0.5 * depth})`); g.addColorStop(0.75, `rgba(106,54,35,${0.4 * depth})`); g.addColorStop(1, 'rgba(106,54,35,0)');
    c.fillStyle = g; c.beginPath(); c.arc(X, Z, Rr, 0, 6.3); c.fill();
    c.lineWidth = Math.max(1, Rr * 0.2);
    c.strokeStyle = `rgba(190,120,80,${0.38 * depth})`; c.beginPath(); c.arc(X, Z, Rr, Math.PI * 0.55, Math.PI * 1.45); c.stroke();
    c.strokeStyle = `rgba(60,28,18,${0.32 * depth})`; c.beginPath(); c.arc(X, Z, Rr, -Math.PI * 0.45, Math.PI * 0.45); c.stroke();
  };
  crater(-1650, -700, 470);                                               // Belva, sitting on the delta
  for (let i = 0; i < 230; i++) {
    const x = (rand() - 0.5) * REGION, z = (rand() - 0.5) * REGION;
    if (Math.hypot(x, z) < 1500) continue;
    crater(x, z, 60 + Math.pow(rand(), 3.2) * 1500, 0.5 + rand() * 0.5);
  }

  // dark sand streaks on the crater floor, combed by the wind
  c.save(); c.globalCompositeOperation = 'multiply';
  for (let i = 0; i < 60; i++) {
    const x = 2000 + rand() * 26000, z = (rand() - 0.5) * 30000, L = 600 + rand() * 2600;
    c.strokeStyle = `rgba(150,120,108,${0.1 + rand() * 0.12})`; c.lineWidth = len(260 + rand() * 500);
    c.beginPath(); c.moveTo(px(x), px(z)); c.lineTo(px(x + L * 0.82), px(z + L * 0.57)); c.stroke();
  }
  c.restore();
  // take the drawn edge off everything: blend in a blurred copy of the map
  const soft = canvasOf(384), sc2 = soft.getContext('2d');
  sc2.drawImage(cv, 0, 0, 384, 384);
  c.save(); c.globalAlpha = 0.62; c.imageSmoothingQuality = 'high'; c.drawImage(soft, 0, 0, S, S); c.restore();
  mottle(4, 0.2, 'soft-light'); mottle(1, 0.12, 'soft-light');

  // settle to one even tone round the landing site, where the real terrain mesh takes over
  g = c.createRadialGradient(px(0), px(0), len(1250), px(0), px(0), len(2900));
  g.addColorStop(0, 'rgba(146,72,45,1)'); g.addColorStop(0.5, 'rgba(146,72,45,0.55)'); g.addColorStop(1, 'rgba(146,72,45,0)');
  c.fillStyle = g; c.beginPath(); c.arc(px(0), px(0), len(2900), 0, 6.3); c.fill();
  return cv;
}

/* the parachute's pattern: three rings of red-orange and white gores, and a band.
   Read in groups of ten, the real canopy spelled DARE MIGHTY THINGS in binary,
   with JPL's coordinates round the band. This one does too. */
function chuteTexture() {
  const W = 1280, H = 256, cv = canvasOf(W, H), c = cv.getContext('2d');
  const word = w => w.split('').map(ch => ch.charCodeAt(0) - 64);
  const pad = a => { const o = a.slice(); while (o.length < 8) o.push(127); return o; };
  const rings = [pad(word('DARE')), pad(word('MIGHTY')), pad(word('THINGS')), [34, 11, 58, 14, 118, 10, 31, 23]];
  const bands = [[0.0, 0.2], [0.2, 0.44], [0.44, 0.7], [0.78, 1.0]];      // along the canopy profile; 0.7-0.78 is the gap
  c.fillStyle = '#efe9dc'; c.fillRect(0, 0, W, H);
  rings.forEach((codes, r) => {
    const bits = codes.map(n => n.toString(2).padStart(10, '0')).join('');
    for (let i = 0; i < 80; i++) {
      c.fillStyle = bits[i] === '1' ? '#d9541e' : '#efe9dc';
      c.fillRect(i * 16, bands[r][0] * H, 16, (bands[r][1] - bands[r][0]) * H + 1);
    }
  });
  c.fillStyle = 'rgba(40,30,24,0.9)'; c.fillRect(0, 0.7 * H, W, 0.08 * H);   // the gap, seen as dark sky through it
  c.strokeStyle = 'rgba(60,45,35,0.35)'; c.lineWidth = 1;
  for (let i = 0; i <= 80; i++) { c.beginPath(); c.moveTo(i * 16, 0); c.lineTo(i * 16, H); c.stroke(); }
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping;
  return t;
}

/* ── the hardware, built from published dimensions ────────────── */
function buildAeroshell() {
  const g = new THREE.Group();

  // heat shield: 4.5 m, a 70-degree sphere-cone, tiled in PICA
  const hs = [];
  for (let a = 0; a <= 20; a += 4) hs.push(new THREE.Vector2(1.125 * Math.sin(a * DEG), -0.747 + 1.125 * (1 - Math.cos(a * DEG))));
  hs.push(new THREE.Vector2(2.2, -0.02), new THREE.Vector2(2.25, 0.04));
  const tiles = canvasOf(512, 128), tc = tiles.getContext('2d');
  tc.fillStyle = '#7b5a3e'; tc.fillRect(0, 0, 512, 128);
  tc.strokeStyle = 'rgba(40,26,18,0.6)'; tc.lineWidth = 2;
  for (let r = 0; r < 5; r++) for (let i = 0; i < 24; i++) tc.strokeRect(i * 21.33 + (r % 2) * 10, r * 25.6, 21.33, 25.6);
  const tileTex = new THREE.CanvasTexture(tiles); tileTex.colorSpace = THREE.SRGBColorSpace; tileTex.wrapS = THREE.RepeatWrapping;
  const heatMat = new THREE.MeshStandardMaterial({ map: tileTex, roughness: 0.85, emissive: 0xff5a12, emissiveIntensity: 0, side: THREE.DoubleSide });
  const heat = new THREE.Mesh(new THREE.LatheGeometry(hs, 48), heatMat);

  // backshell: biconic, white, with the parachute can on top
  const bs = [[2.25, 0.04], [2.22, 0.12], [1.55, 1.25], [0.78, 1.95], [0.44, 2.02], [0.44, 2.55], [0, 2.55]].map(p => new THREE.Vector2(p[0], p[1]));
  const backMat = new THREE.MeshStandardMaterial({ color: 0xd9d2c2, roughness: 0.78, metalness: 0.05, side: THREE.DoubleSide, emissive: 0xff5a14, emissiveIntensity: 0 });
  const back = new THREE.Mesh(new THREE.LatheGeometry(bs, 48), backMat);
  const dark = new THREE.MeshStandardMaterial({ color: 0x2a2623, roughness: 0.7 });
  for (let i = 0; i < 8; i++) {                                           // reaction-control thruster ports
    const a = i * Math.PI / 4 + 0.39, p = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.05, 10), dark);
    p.position.set(Math.cos(a) * 1.72, 0.95, Math.sin(a) * 1.72);
    p.lookAt(Math.cos(a) * 4, 2.3, Math.sin(a) * 4); p.rotateX(Math.PI / 2);
    back.add(p);
  }
  g.add(heat, back);
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group: g, heat, heatMat, back, backMat };
}

/* The cruise stage: the ring that flew the capsule from Earth. Solar cells on
   its top face, radiators round its rim; it lets go ten minutes before entry. */
function buildCruiseStage() {
  const g = new THREE.Group();
  const cells = canvasOf(512), c = cells.getContext('2d');
  c.fillStyle = '#141b2e'; c.fillRect(0, 0, 512, 512);
  for (let y = 0; y < 512; y += 16) for (let x = 0; x < 512; x += 16) { c.fillStyle = `rgb(${24 + ((x * y) % 13)},${34 + ((x + y) % 11)},${70 + ((x * 3 + y) % 19)})`; c.fillRect(x + 1, y + 1, 14, 14); }
  c.strokeStyle = 'rgba(200,200,210,.5)'; c.lineWidth = 3; for (let i = 0; i < 512; i += 128) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i, 512); c.moveTo(0, i); c.lineTo(512, i); c.stroke(); }
  const cellTex = new THREE.CanvasTexture(cells); cellTex.colorSpace = THREE.SRGBColorSpace;
  const solar = new THREE.MeshStandardMaterial({ map: cellTex, roughness: 0.32, metalness: 0.55 });
  const mli = new THREE.MeshStandardMaterial({ color: 0xd8d4ca, roughness: 0.55, metalness: 0.25 });
  const frame = new THREE.MeshStandardMaterial({ color: 0x8c8a86, roughness: 0.5, metalness: 0.6 });
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.55, 40, 1, true), mli); ring.position.y = 0.28;
  const top = new THREE.Mesh(new THREE.CircleGeometry(2.0, 40), solar); top.rotation.x = -Math.PI / 2; top.position.y = 0.56;
  const under = new THREE.Mesh(new THREE.CircleGeometry(2.0, 40), frame); under.rotation.x = Math.PI / 2;
  g.add(ring, top, under);
  for (let i = 0; i < 10; i++) {                                              // radiator fins round the rim
    const a = (i / 10) * Math.PI * 2, f = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.5, 0.75), frame);
    f.position.set(Math.cos(a) * 2.08, 0.28, Math.sin(a) * 2.08); f.rotation.y = -a; g.add(f);
  }
  for (const k of [-1, 1]) { const t = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 10), frame); t.position.set(k * 0.9, -0.15, 0.4); g.add(t); }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return g;
}
/* tungsten balance masses, bolted to the backshell until they are thrown off */
function buildMasses(n, r, y, size) {
  const mat = new THREE.MeshStandardMaterial({ color: 0x5d5b58, roughness: 0.45, metalness: 0.8 });
  return Array.from({ length: n }, (_, i) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(size, size * 0.7, size * 1.5), mat), a = (i / n) * Math.PI * 2 + 0.2;
    m.position.set(Math.cos(a) * r, y, Math.sin(a) * r); m.lookAt(0, y, 0);
    m.userData = { home: m.position.clone(), homeQ: m.quaternion.clone(), a };
    return m;
  });
}

function buildChute() {
  const g = new THREE.Group();
  // disk-gap-band: a shallow crown with a vent, a gap, then a short band
  const prof = [[0.75, 3.55], [2.6, 3.35], [4.6, 2.75], [6.3, 1.85], [7.45, 0.95], [7.75, 0.62], [7.8, 0.55], [7.8, 0.0]]
    .map(p => new THREE.Vector2(p[0], p[1]));
  const geo = new THREE.LatheGeometry(prof, 80);
  // v along the profile is by point index; respace it so the painted rings land where they should
  const vOf = [0, 0.2, 0.44, 0.58, 0.7, 0.74, 0.78, 1.0], uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setY(i, 1 - vOf[Math.round(uv.getY(i) * (prof.length - 1))]);
  const canopy = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    map: chuteTexture(), roughness: 0.9, side: THREE.DoubleSide, emissive: 0x3a2a20, emissiveIntensity: 0.25,
  }));
  canopy.castShadow = true;
  g.add(canopy);

  // 80 suspension lines to a confluence, then one riser down to the backshell
  const CONF = -28, pts = [];
  for (let i = 0; i < 40; i++) { const a = i / 40 * Math.PI * 2; pts.push(Math.cos(a) * 7.8, 0, Math.sin(a) * 7.8, 0, CONF, 0); }
  pts.push(0, CONF, 0, 0, -43.4, 0);
  const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  g.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0xe8dfcf, transparent: true, opacity: 0.55 })));
  return { group: g, canopy, length: 43.4 };          // canopy rim sits this far above the backshell top
}

function buildDescentStage() {
  const g = new THREE.Group();
  const frame = new THREE.MeshStandardMaterial({ color: 0x3a3632, roughness: 0.6, metalness: 0.4 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xb8893a, roughness: 0.45, metalness: 0.65 });
  const white = new THREE.MeshStandardMaterial({ color: 0xcfc8ba, roughness: 0.7 });

  const deck = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.6, 0.34, 6), frame); deck.position.y = 0.5; g.add(deck);
  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.7, 0.62, 12), white); core.position.y = 0.42; g.add(core);
  for (let i = 0; i < 3; i++) {                                           // propellant tanks
    const a = i / 3 * Math.PI * 2 + 0.52, t = new THREE.Mesh(new THREE.SphereGeometry(0.47, 18, 14), gold);
    t.position.set(Math.cos(a) * 1.0, 0.72, Math.sin(a) * 1.0); g.add(t);
  }
  for (let i = 0; i < 2; i++) {                                           // helium pressurant
    const a = i * Math.PI + 1.57, t = new THREE.Mesh(new THREE.SphereGeometry(0.27, 14, 10), white);
    t.position.set(Math.cos(a) * 0.95, 0.95, Math.sin(a) * 0.95); g.add(t);
  }
  // eight throttled engines in four pairs, canted outward so the plumes miss the rover
  const nozzles = [], plumes = [];
  const plumeMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { power: { value: 0 }, time: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform float power; uniform float time; varying vec2 vUv;
      void main(){ float f = pow(vUv.y, 1.6) * (0.75 + 0.25 * sin(time * 60.0 + vUv.y * 30.0));
        gl_FragColor = vec4(mix(vec3(1.0,0.55,0.25), vec3(1.0,0.93,0.8), vUv.y) * f * power * 1.2, 1.0); }`,
  });
  for (let c = 0; c < 4; c++) for (let k = 0; k < 2; k++) {
    const a = c * Math.PI / 2 + Math.PI / 4 + (k ? 0.2 : -0.2);
    const piv = new THREE.Group();
    piv.position.set(Math.cos(a) * 1.5, 0.36, Math.sin(a) * 1.5);
    piv.rotation.set(Math.sin(a) * 0.36, 0, -Math.cos(a) * 0.36);        // cant outward
    const nz = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.17, 0.4, 12, 1, true), frame); nz.position.y = -0.2;
    const pl = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.5, 2.6, 12, 1, true), plumeMat); pl.position.y = -1.7;
    piv.add(nz, pl); g.add(piv); nozzles.push(piv); plumes.push(pl);
  }
  g.traverse(o => { if (o.isMesh && o.material !== plumeMat) o.castShadow = true; });
  return { group: g, plumeMat, plumes, height: 0.9 };
}

/* ── the level ────────────────────────────────────────────────── */
export function createEDL(ctx) {
  const { renderer, scene, camera, height, sunDir } = ctx;
  const $ = id => document.getElementById(id);

  const mottle = mottleTexture(9091);
  const regionCv = regionalCanvas(ctx.regionImg || null), REAL = !!ctx.regionImg;
  const regionTex = new THREE.CanvasTexture(regionCv);
  regionTex.colorSpace = THREE.SRGBColorSpace; regionTex.flipY = false; regionTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

  /* the far plain: what the ground does beyond the edge of the terrain mesh */
  const plain = (() => {
    const geo = new THREE.CircleGeometry(64000, 96); geo.rotateX(-Math.PI / 2);
    const p = geo.attributes.position, uv = geo.attributes.uv;
    const OX = ctx.origin ? ctx.origin.x : 0, OZ = ctx.origin ? ctx.origin.z : 0;      // level 3 is centred elsewhere in the crater
    for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) + OX) / REGION + 0.5, (p.getZ(i) + OZ) / REGION + 0.5);
    const mat = new THREE.MeshBasicMaterial({ map: regionTex, color: 0xb4c2bb });   // tuned so the plain meets the lit mesh without a line
    mat.onBeforeCompile = sh => {
      sh.uniforms.detail = { value: ctx.groundMap }; sh.uniforms.mott = { value: mottle };
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = ( modelMatrix * vec4( position, 1.0 ) ).xyz;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform sampler2D detail; uniform sampler2D mott; varying vec3 vWP;')
        .replace('#include <map_fragment>', `#include <map_fragment>
          float d1 = dot( texture2D( detail, vWP.xz / 7.0 ).rgb, vec3( 0.3, 0.5, 0.2 ) ) / 0.085;
          float d2 = dot( texture2D( detail, vWP.xz / 51.0 + 0.31 ).rgb, vec3( 0.3, 0.5, 0.2 ) ) / 0.085;
          float d3 = texture2D( mott, vWP.xz / 900.0 ).r * 2.0;
          float d4 = texture2D( mott, vWP.xz / 5200.0 + 0.4 ).r * 2.0;
          diffuseColor.rgb *= clamp( mix( 1.0, d1, 0.5 ) * mix( 1.0, d2, 0.35 ) * mix( 1.0, d3, 0.26 ) * mix( 1.0, d4, 0.24 ), 0.45, 1.7 );
          float inMap = smoothstep( 0.5, 0.42, max( abs( vMapUv.x - 0.5 ), abs( vMapUv.y - 0.5 ) ) );      // past the edge of the map: its average colour, not its edge pixels smeared outward
          diffuseColor.rgb = mix( texture2D( map, vec2( 0.5 ), 12.0 ).rgb * diffuse, diffuseColor.rgb, inMap );`);
    };
    applyGrade(mat, true);
    const m = new THREE.Mesh(geo, mat);
    // drawn first and never written to depth, so whatever terrain there is always sits on top of it
    mat.depthWrite = false;
    m.position.y = ctx.plainY ?? ctx.floor - 6; m.frustumCulled = false; m.renderOrder = -0.5;
    scene.add(m);
    if (ctx.ext) fetch('../models/jezero.bin').then(r => r.ok ? r.arrayBuffer() : null).then(b => { if (b) relief(m, new Int16Array(b)); }).catch(() => {});
    return m;
  })();

  /* The plain in 3D: the real crater from the Dark Sky Almanac's elevation mosaic (models/jezero.bin: USGS CTX
     stereo models, heights in quarter-metres relative to the landing site, a 90 km square centred 982 m west and
     3835 m south of it), in true metres like the map laid on it, heights doubled so the rim reads from the air.
     Under the drivable terrain it stays flat and a little low; it rises into the real ground beyond it. */
  function relief(m, dem) {
    const OX = ctx.origin ? ctx.origin.x : 0, OZ = ctx.origin ? ctx.origin.z : 0, M = Math.round(Math.sqrt(dem.length)), W = 90000, CX = -982 - OX, CZ = 3835 - OZ, EX = 2, R = 64000, E0 = ctx.ext, base = m.position.y;
    const hAt = (x, z) => {
      const u = clamp(((x - CX) / W + 0.5) * M - 0.5, 0, M - 1.001), v = clamp(((z - CZ) / W + 0.5) * M - 0.5, 0, M - 1.001), i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, k = j * M + i;
      const h = ((dem[k] * (1 - fu) + dem[k + 1] * fu) * (1 - fv) + (dem[k + M] * (1 - fu) + dem[k + M + 1] * fu) * fv) / 4;
      return h * smooth(0, 6000, W / 2 - Math.max(Math.abs(x - CX), Math.abs(z - CZ)));      // settles to the landing site's level past the edge of the data
    };
    const ax = [0, 600, 1200, E0 - 200, E0]; for (let x = E0, st = 110; x < R; ) { st = Math.min(1400, st * 1.07); x = Math.min(R, x + st); ax.push(x); }
    const L = [...ax.slice(1).map(v => -v).reverse(), ...ax], n = L.length, pos = new Float32Array(n * n * 3), uv = new Float32Array(n * n * 2), idx = [];
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const x = L[i], z = L[j], o = j * n + i, w = smooth(E0 + 150, E0 + 2600, Math.max(Math.abs(x), Math.abs(z)));
      pos[o * 3] = x; pos[o * 3 + 2] = z; pos[o * 3 + 1] = w * (hAt(x, z) * EX - base - (x * x + z * z) / (2 * R_MARS * 1000)) - 4 * (1 - w);
      uv[o * 2] = (x + OX) / REGION + 0.5; uv[o * 2 + 1] = (z + OZ) / REGION + 0.5;
    }
    for (let j = 0; j < n - 1; j++) for (let i = 0; i < n - 1; i++) { const a = j * n + i; idx.push(a, a + n, a + 1, a + 1, a + n, a + n + 1); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setIndex(idx);
    m.geometry.dispose(); m.geometry = g; m.material.depthWrite = true;      // with hills of its own, it has to hide itself properly
  }

  /* ── the globe world (kilometres) ───────────────────────────── */
  const space = new THREE.Scene();
  const bgCam = new THREE.PerspectiveCamera(55, 1, 0.4, 30000);
  const globeMat = new THREE.ShaderMaterial({
    uniforms: {
      map: { value: null }, detail: { value: mottle }, sunDir: { value: new THREE.Vector3() },
      haze: { value: new THREE.Color(0xb08f6c) }, hazeAmt: { value: 0.8 },
    },
    vertexShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){ vUv = uv; vN = normalize( mat3( modelMatrix ) * normal ); vec4 w = modelMatrix * vec4( position, 1.0 ); vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform sampler2D map; uniform sampler2D detail; uniform vec3 sunDir; uniform vec3 haze; uniform float hazeAmt;
      varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){
        vec3 c = texture2D( map, vUv ).rgb;
        vec2 d = vUv * vec2( 2.0, 1.0 );
        float m = texture2D( detail, d * 110.0 ).r * 0.4 + texture2D( detail, d * 760.0 ).r * 0.35 + texture2D( detail, d * 4300.0 ).r * 0.25;
        c *= 0.62 + m * 0.95;
        vec3 n = normalize( vN );
        c *= clamp( dot( n, sunDir ) * 0.85 + 0.42, 0.08, 1.15 );
        float graze = 1.0 - max( dot( n, normalize( cameraPosition - vW ) ), 0.0 );
        c = mix( c, haze, clamp( pow( graze, 2.6 ) * hazeAmt, 0.0, 0.95 ) );
        gl_FragColor = vec4( c, 1.0 );
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const globe = new THREE.Mesh(new THREE.SphereGeometry(R_MARS, 160, 80), globeMat);
  {
    // turn the globe so Jezero is at the top (+Y), east is +X and north is -Z — the surface game's own axes
    const la = JEZERO.lat * DEG, lo = JEZERO.lon * DEG;
    const up = new THREE.Vector3(Math.cos(la) * Math.cos(lo), Math.sin(la), -Math.cos(la) * Math.sin(lo));
    const east = new THREE.Vector3(-Math.sin(lo), 0, -Math.cos(lo));
    const north = new THREE.Vector3(-Math.sin(la) * Math.cos(lo), Math.cos(la), Math.sin(la) * Math.sin(lo));
    globe.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(east, up, north.negate()).transpose());
  }
  space.add(globe);
  new THREE.TextureLoader().load('img/mars-globe.jpg', t => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; globeMat.uniforms.map.value = t; });

  // the drawn regional map, laid on the globe as a cap round Jezero and feathered at its edge
  {
    const cv = canvasOf(1024), c = cv.getContext('2d');
    c.drawImage(regionCv, 0, 0, 1024, 1024);
    const g = c.createRadialGradient(512, 512, 330, 512, 512, 508);
    g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    c.globalCompositeOperation = 'destination-in'; c.fillStyle = g; c.fillRect(0, 0, 1024, 1024);
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.flipY = false;
    const N = 48, pos = [], uv = [], idx = [];
    for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
      const x = (i / N - 0.5) * 60, z = (j / N - 0.5) * 60, v = new THREE.Vector3(x, R_MARS, z).setLength(R_MARS + 0.03);
      pos.push(v.x, v.y, v.z); uv.push(i / N, j / N);
    }
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const a = j * (N + 1) + i; idx.push(a, a + N + 1, a + 1, a + 1, a + N + 1, a + N + 2); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setIndex(idx);
    const m = new THREE.Mesh(geo, applyGrade(new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, color: 0xa1ada7 }), true));
    m.renderOrder = 1; space.add(m);
  }
  // thin air, seen edge-on
  const air = new THREE.Mesh(new THREE.SphereGeometry(R_MARS * 1.012, 96, 48), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: 'varying vec3 vN; varying vec3 vW; void main(){ vN = normalize( mat3( modelMatrix ) * normal ); vec4 w = modelMatrix * vec4( position, 1.0 ); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: `varying vec3 vN; varying vec3 vW;
      void main(){ float g = 1.0 - abs( dot( normalize( vN ), normalize( cameraPosition - vW ) ) );
        gl_FragColor = vec4( vec3( 0.80, 0.56, 0.38 ) * pow( g, 5.0 ) * 0.9, 1.0 ); }`,
  }));
  space.add(air);
  const stars = (() => {
    const rand = rng(424242), p = [];
    for (let i = 0; i < 900; i++) { const v = new THREE.Vector3(rand() - 0.5, rand() - 0.5, rand() - 0.5).setLength(20000); p.push(v.x, v.y, v.z); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
    const m = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0.9, depthWrite: false }));
    m.frustumCulled = false; space.add(m); return m;
  })();
  // where we are trying to go
  const targetRing = new THREE.Mesh(new THREE.RingGeometry(3.3, 3.85, 64), new THREE.MeshBasicMaterial({ color: 0xcba85a, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthTest: false }));
  targetRing.rotation.x = -Math.PI / 2; targetRing.position.y = R_MARS + 0.1; targetRing.renderOrder = 2; space.add(targetRing);

  /* ── the craft, in its own small world (metres) ─────────────── */
  const craftScene = new THREE.Scene();
  const craftCam = new THREE.PerspectiveCamera(55, 1, 0.5, 600);
  const craftSun = new THREE.DirectionalLight(0xffecd7, 3.0);
  craftScene.add(craftSun, new THREE.HemisphereLight(0xc9a27e, 0x4a3020, 0.9));

  const shell = buildAeroshell(), chute = buildChute(), stage = buildDescentStage();
  const cruise = buildCruiseStage();
  const cbm = buildMasses(2, 2.0, 0.35, 0.34), ebm = buildMasses(6, 1.92, 0.5, 0.22);     // cruise and entry balance masses
  const loose = [];                                                                         // things thrown off, drifting away
  const throwOff = (o, v, spin) => { const w = new THREE.Vector3(); o.getWorldPosition(w); craftScene.attach(o); loose.push({ o, v, spin }); };
  // thruster puffs: a few soft sprites at the eight RCS ports
  const puffTex = (() => { const c = canvasOf(64), x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  const puffs = Array.from({ length: 8 }, (_, i) => {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: puffTex, color: 0xeef2ff, transparent: true, opacity: 0, depthWrite: false }));
    const a = i * Math.PI / 4 + 0.39; sp.position.set(Math.cos(a) * 2.05, 1.05, Math.sin(a) * 2.05); sp.scale.setScalar(0.9);
    shell.group.add(sp); return sp;
  });
  const fire = (strength) => puffs.forEach((p, i) => { if (Math.random() < 0.35 * strength) p.material.opacity = Math.max(p.material.opacity, 0.5 + Math.random() * 0.4); });
  const craft = new THREE.Group();                    // +Y is the backshell apex; the heat shield leads
  craft.add(shell.group);
  shell.group.add(chute.group);
  chute.group.visible = false;
  stage.group.visible = false;

  // the shock layer: a glowing cap ahead of the heat shield and a wake behind
  const glowMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { heat: { value: 0 }, time: { value: 0 } },
    vertexShader: 'varying vec2 vUv; varying vec3 vP; void main(){ vUv = uv; vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }',
    fragmentShader: `uniform float heat; uniform float time; varying vec2 vUv; varying vec3 vP;
      void main(){
        // streaks of glowing gas running back from the shoulder of the shield, thinning as they go
        float st = sin( vUv.x * 150.0 + sin( vUv.x * 37.0 ) * 3.0 + time * 2.0 ) * 0.5 + 0.5;
        float st2 = sin( vUv.x * 61.0 - time * 3.1 + vUv.y * 9.0 ) * 0.5 + 0.5;
        float fl = 0.8 + 0.2 * sin( time * 37.0 + vP.y * 3.0 );
        float a = pow( 1.0 - vUv.y, 2.4 ) * ( 0.18 + 0.82 * pow( st, 3.0 ) * ( 0.5 + 0.5 * st2 ) ) * fl;
        vec3 c = mix( vec3( 1.0, 0.35, 0.08 ), vec3( 1.0, 0.86, 0.66 ), pow( 1.0 - vUv.y, 3.0 ) );
        gl_FragColor = vec4( c * a * heat * 0.62, 1.0 ); }`,
  });
  const wake = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 2.5, 34, 36, 8, true), glowMat);
  wake.position.y = 17.4;                              // trailing back along +Y, widening; uv.y = 0 at the capsule
  const bow = new THREE.Mesh(new THREE.SphereGeometry(3.0, 32, 16, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: glowMat.uniforms,
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }',
    fragmentShader: `uniform float heat; uniform float time; varying vec3 vP;
      void main(){ float e = smoothstep( 0.0, -3.0, vP.y ); float fl = 0.85 + 0.15 * sin( time * 41.0 + vP.x * 6.0 );
        gl_FragColor = vec4( mix( vec3( 1.0, 0.4, 0.1 ), vec3( 1.0, 0.92, 0.8 ), e ) * ( 0.25 + e ) * heat * fl * 0.9, 1.0 ); }`,
  }));
  bow.scale.set(0.86, 0.42, 0.86); bow.position.y = -0.1;
  craft.add(wake, bow);
  craftScene.add(craft);

  // sparks streaming back past the camera
  const SP = 160, spark = (() => {
    const p = new Float32Array(SP * 3), g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    const dot = canvasOf(32), dc = dot.getContext('2d'), dg = dc.createRadialGradient(16, 16, 0, 16, 16, 16);
    dg.addColorStop(0, 'rgba(255,255,255,1)'); dg.addColorStop(1, 'rgba(255,255,255,0)'); dc.fillStyle = dg; dc.fillRect(0, 0, 32, 32);
    const m = new THREE.Points(g, new THREE.PointsMaterial({ map: new THREE.CanvasTexture(dot), color: 0xffb070, size: 0.3, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    m.frustumCulled = false; craftScene.add(m);
    return { p, g, m, s: new Float32Array(SP).map(() => Math.random()) };
  })();

  // the loose heat shield, once it is let go
  const heatDrop = new THREE.Group();

  /* ── terminal-descent furniture, in the surface scene ───────── */
  const hazard = { grid: null, mesh: null, tex: null };
  function buildHazardOverlay() {
    if (hazard.mesh) return;
    hazard.grid = hazard.grid || ctx.buildHazardGrid();
    const { n, data, half } = hazard.grid, cv = canvasOf(n), c = cv.getContext('2d'), id = c.createImageData(n, n);
    const cell = hazard.grid.cell, lim = (ctx.playR || 150) - 14;
    for (let i = 0; i < n * n; i++) {
      const x = ((i % n) + 0.5) * cell - half, z = (Math.floor(i / n) + 0.5) * cell - half;
      const d = Math.hypot(x, z);
      // beyond the mapped circle the red thins out to nothing, so the overlay has no square edge
      id.data.set(!data[i] ? [70, 205, 120, 70] : d > lim ? [226, 70, 52, Math.round(64 * (1 - smooth(lim + 6, half - 8, d)))] : [226, 58, 40, 150], i * 4);
    }
    c.putImageData(id, 0, 0);
    hazard.tex = new THREE.CanvasTexture(cv); hazard.tex.flipY = false; hazard.tex.magFilter = THREE.LinearFilter;
    const geo = new THREE.PlaneGeometry(half * 2, half * 2); geo.rotateX(-Math.PI / 2);
    // PlaneGeometry's v runs the other way to +Z once laid flat; put it right
    const uv = geo.attributes.uv, p = geo.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i) / (half * 2) + 0.5, p.getZ(i) / (half * 2) + 0.5);
    hazard.mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: hazard.tex, transparent: true, opacity: 0, depthWrite: false, fog: false }));
    hazard.mesh.position.y = hazard.grid.top + 1.5; hazard.mesh.renderOrder = 5; hazard.mesh.visible = false;
    scene.add(hazard.mesh);
  }
  const mkRing = (r0, r1, color) => {
    const m = new THREE.Mesh(new THREE.RingGeometry(r0, r1, 56), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthWrite: false, fog: false }));
    m.rotation.x = -Math.PI / 2; m.renderOrder = 6; m.visible = false; scene.add(m); return m;
  };
  const aimRing = mkRing(5.5, 7, 0x7fd4e0);            // where you will come down as things stand
  const goalRing = mkRing(9, 10.2, 0xcba85a);          // the middle of the ellipse
  const bridles = (() => {
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(18), 3));
    const l = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xe9e2d2 })); l.frustumCulled = false; l.visible = false; scene.add(l); return l;
  })();

  /* ── state ──────────────────────────────────────────────────── */
  const E = {
    active: false, stage: 'idle', high: true,
    t: 0,                         // mission seconds since entry interface
    st: 0,                        // gameplay seconds in the current stage
    warp: 1,
    bank: 0, cross: 0, down: 0,   // degrees; predicted miss, km (cross + = right of track, down + = long)
    driftC: 0, driftD: 0, trail: [],
    chuteT: -1, chuteOK: true, inflate: 0, shieldT: -1,
    pos: new THREE.Vector3(), vel: new THREE.Vector3(),      // terminal descent, metres, surface world
    fuel: FACTS.fuel, drop: 0, engines: 0, sepAlt: 0, wind: new THREE.Vector2(),
    result: null, shake: 0, flash: 0, msg: '', msgT: 0,
    camP: new THREE.Vector3(), camT: new THREE.Vector3(), camInit: false,
    // holding the capsule's attitude through entry
    aoa: 0, q: 0, rcs: 100, burn: 0, gOver: 0, att: [], dying: null, shears: [], it: 0, rt: 0,
    cueY: 0, cueP: 0, roll: 0,     // heading and flight-path offsets toward the target, degrees; camera bank
  };
  const keys = Object.create(null);
  const pad = { l: 0, r: 0, u: 0, d: 0 };
  let action = false;
  addEventListener('keydown', e => {
    if (!E.active) return;
    const k = e.key.toLowerCase(); keys[k] = true;
    if (k === ' ' || k === 'enter') { action = true; e.preventDefault(); }
    if (k.startsWith('arrow')) e.preventDefault();
  });
  addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });
  document.querySelectorAll('[data-edl]').forEach(el => {
    const k = el.dataset.edl;
    const set = v => ev => { ev.preventDefault(); if (k === 'go') { if (v) action = true; } else pad[k] = v; };
    el.addEventListener('pointerdown', set(1));
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(n => el.addEventListener(n, set(0)));
  });
  const stick = createStick($('stick-edl'));
  // desktop: drag anywhere on the scene with the mouse to steer, the same as the thumbstick (110 px is full deflection)
  const mouse = { x: 0, y: 0, id: null, x0: 0, y0: 0 }, cv = renderer.domElement;
  cv.addEventListener('pointerdown', e => { if (!E.active || e.pointerType !== 'mouse' || e.button !== 0) return; e.preventDefault(); mouse.id = e.pointerId; mouse.x0 = e.clientX; mouse.y0 = e.clientY; try { cv.setPointerCapture(e.pointerId); } catch (_) { /* fine */ } });
  cv.addEventListener('pointermove', e => { if (e.pointerId !== mouse.id) return; mouse.x = clamp((e.clientX - mouse.x0) / 110, -1, 1); mouse.y = clamp(-(e.clientY - mouse.y0) / 110, -1, 1); });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(n => cv.addEventListener(n, e => { if (e.pointerId === mouse.id) { mouse.id = null; mouse.x = mouse.y = 0; } }));
  /* Smoothed, expo-curved control, as on a model-aircraft transmitter. A key doesn't snap to
     full deflection: it ramps in over about two-thirds of a second, so a tap is a small,
     gentle correction and only a long hold gives full authority. Letting go eases back to
     centre. Then an expo curve softens the middle of the range, for the keys and the stick
     alike: half deflection gives about a third of the effect, full deflection still gives all of it. */
  // Bank is smoothed hard; pitch less so, because catching a density shear needs a quick pulse.
  const AX = { x: { rampIn: 1 / 0.6, rampOut: 1 / 0.2, expo: 0.55 }, z: { rampIn: 1 / 0.28, rampOut: 1 / 0.12, expo: 0.35 } };
  const IN = { x: 0, z: 0 };
  const expo = (v, e) => (1 - e) * v + e * v * v * v;
  function easeAxis(cur, want, dt, a) {
    const rate = Math.abs(want) > Math.abs(cur) && Math.sign(want || cur) === Math.sign(cur || want) ? a.rampIn : a.rampOut;
    const step = rate * dt;
    return Math.abs(want - cur) <= step ? want : cur + Math.sign(want - cur) * step;
  }
  function stepInput(dt) {
    const kx = (keys.d || keys.arrowright ? 1 : 0) - (keys.a || keys.arrowleft ? 1 : 0);
    const kz = (keys.s || keys.arrowdown ? 1 : 0) - (keys.w || keys.arrowup ? 1 : 0);
    const sx = stick.x || mouse.x, sy = stick.y || mouse.y;
    IN.x = kx ? easeAxis(IN.x, kx, dt, AX.x) : (sx ? sx : easeAxis(IN.x, 0, dt, AX.x));
    IN.z = kz ? easeAxis(IN.z, kz, dt, AX.z) : (sy ? -sy : easeAxis(IN.z, 0, dt, AX.z));
  }
  const axX = () => expo(IN.x, AX.x.expo);
  const axZ = () => expo(IN.z, AX.z.expo);

  const say = (m, hold = 3.2) => { E.msg = m; E.msgT = hold; $('edl-call').textContent = m; $('edl-call').classList.add('on'); };

  /* ── stage control ──────────────────────────────────────────── */
  const ORDER = ['entry', 'chute', 'descent', 'powered', 'crane', 'down'];
  const TOUCH = document.documentElement.classList.contains('touch');
  const PROMPT = TOUCH ? {
    intro: '',
    entry: '<b>Stick ◀ ▶</b> bank toward the ◇ · <b>▲ ▼</b> hold trim.',
    chute: 'Tap <b>DEPLOY</b> when both bars are green. Keep it steady.',
    descent: 'Heat shield away. Building the hazard map…',
    powered: '<b>Stick</b> to steer the blue ring onto green ground.',
    crane: 'Tap <b>DEPLOY</b> to lower the rover.',
    down: '',
  } : {
    intro: '',
    entry: '<b>A / D</b> bank the lift toward the ◇ · <b>W / S</b> hold the trim angle.',
    chute: '<b>SPACE</b> when both bars are green. Keep it steady with <b>W / S</b>.',
    descent: 'Heat shield away. Building the hazard map…',
    powered: '<b>W A S D</b> steer the blue ring onto green ground.',
    crane: '<b>SPACE</b> lowers the rover.',
    down: '',
  };
  let promptT = 0;
  function prompt(html) {      // an instruction shows for a few seconds, then fades out of the way
    const p = $('edl-prompt'); p.innerHTML = html; p.classList.remove('gone'); clearTimeout(promptT);
    if (html) promptT = setTimeout(() => p.classList.add('gone'), 7000);
  }
  function setStage(s) {
    E.stage = s; E.st = 0; action = false;
    if (s === 'chute') { const b = $('edl-speed').querySelector('u'), l = (560 - D.chuteV) / 2.2; b.style.left = l + '%'; b.style.width = ((560 - 352) / 2.2 - l) + '%'; }      // the green band follows the difficulty's limit
    document.querySelectorAll('#edl-steps i').forEach(el => {
      const i = ORDER.indexOf(el.dataset.s), j = ORDER.indexOf(s);
      el.classList.toggle('on', i === j); el.classList.toggle('done', i < j);
    });
    prompt(PROMPT[s] || '');
    const hi = s === 'entry' || s === 'chute';
    $('edl-l-vel').textContent = hi ? 'Speed' : 'Descent';
    $('edl-l-g').textContent = hi ? 'Load' : 'Drift';
    $('edl-l-heat').textContent = hi ? 'Heat shield' : 'Fuel';
    document.body.dataset.edl = s;
  }

  function begin(from = 'entry') {
    ['edl-fpm', 'edl-tgt'].forEach(id => { $(id).style.display = 'none'; });
    E.active = true; E.result = null; E.camInit = false; E.shake = 0; E.flash = 0;
    E.saidHeat = E.saidG = E.saidSt = E.saidTRN = E.saidDry = E.lower = E.saidSep = false; E.engines = 0; E.drop = 0;
    document.body.classList.add('edl');
    $('edl').classList.add('on');
    ['edl-fail', 'edl-done'].forEach(id => $(id).classList.remove('on'));
    const rover = ctx.rover();
    rover.visible = false; ctx.setHeliVisible(false);
    chute.group.visible = false; stage.group.visible = false; bridles.visible = false;
    aimRing.visible = goalRing.visible = false;
    if (hazard.mesh) { hazard.mesh.visible = false; hazard.mesh.material.opacity = 0; }
    shell.heat.visible = true; shell.group.visible = true;
    if (heatDrop.parent) heatDrop.parent.remove(heatDrop);

    E.cueY = E.cueP = E.roll = 0; E.psi = 0; E.remPrev = undefined;
    E.aoa = 0; E.q = 0; E.rcs = 100; E.burn = 0; E.gOver = 0; E.att = []; E.dying = null; E.saidLoad = E.saidRCS = E.saidWob = false;
    shell.backMat.emissiveIntensity = 0;
    loose.forEach(l => craftScene.remove(l.o)); loose.length = 0;
    cbm.concat(ebm).forEach(m => { if (from === 'intro' || from === 'entry') { shell.group.add(m); m.position.copy(m.userData.home); m.quaternion.copy(m.userData.homeQ); } else if (m.parent) m.parent.remove(m); });
    // entry is busiest at peak heating: two or three pockets of uneven air, at times of their own
    E.shears = [42 + Math.random() * 30, 82 + Math.random() * 40, 140 + Math.random() * 40].map(t => ({ t, done: false }));
    if (from === 'intro' || from === 'entry') {
      E.high = true; E.t = 0; E.bank = 0; E.trail = []; E.term = null;
      const r = Math.random;
      E.cross = (r() < 0.5 ? -1 : 1) * (2.5 + r() * 3);
      E.down = (r() < 0.5 ? -1 : 1) * (4 + r() * 5);
      E.driftC = 0; E.driftD = 0; E.chuteT = -1; E.inflate = 0; E.shieldT = -1; E.chuteOK = true;
      craftScene.add(craft); craft.add(shell.group); shell.group.position.set(0, 0, 0); shell.group.rotation.set(0, 0, 0);
      craft.add(wake, bow);
      if (from === 'intro') {
        shell.group.add(cruise); cruise.position.set(0, 2.62, 0); cruise.rotation.set(0, 0, 0); cruise.visible = true;
        E.it = 0; E.camInit = false; setStage('intro');
      } else {
        if (cruise.parent) cruise.parent.remove(cruise);
        cbm.forEach(m => shell.group.remove(m));
        setStage('entry');
        say('Entry interface. 125 km up, 19,500 km/h, seven minutes to the ground.', 4.5);
      }
    } else {
      toTerminal(true);
    }
    ctx.onStage && ctx.onStage(E.stage);
  }

  /* hand the craft over from the globe to the real surface */
  function toTerminal(retry = false) {
    ['edl-fpm', 'edl-tgt'].forEach(id => { $(id).style.display = 'none'; });
    E.high = false;
    if (retry && E.termT) E.t = E.termT; else E.termT = E.t;       // a retry restarts the clock where this phase began
    buildHazardOverlay();
    const T = ctx.target;
    if (!retry || !E.term) {
      // what is left of the miss becomes where you arrive: 55 m of ground per km of error, capped inside the map
      const ex = clamp(E.down * 55, -150, 150), ez = clamp(E.cross * 55, -150, 150);
      E.term = { x: T.x + ex, z: T.z + ez };
    }
    E.pos.set(E.term.x - 235, 0, E.term.z - 20);        // still travelling east as the chute stands it up
    E.pos.y = height(E.pos.x, E.pos.z) + 8000;
    E.vel.set(12, -100, 1);
    E.wind.set((Math.random() - 0.5) * 3.6, (Math.random() - 0.5) * 3.6);
    E.saidTRN = E.saidDry = E.lower = false;
    E.fuel = FACTS.fuel; E.drop = 0; E.engines = 0; E.inflate = 1; E.camInit = false;

    scene.add(craft); craft.rotation.set(0, 0, 0); craft.quaternion.identity();
    craft.remove(wake, bow);
    shell.heat.visible = false;
    craft.add(shell.group); shell.group.position.set(0, 0, 0); shell.group.rotation.set(0, 0, 0); shell.group.visible = true;
    chute.group.visible = true; chute.group.scale.setScalar(1); chute.group.position.set(0, 2.55 + chute.length, 0);
    scene.add(stage.group); stage.group.visible = false;
    const rover = ctx.rover(); rover.visible = false;
    hazard.mesh.visible = true; goalRing.visible = true;
    goalRing.position.set(T.x, hazard.grid.top + 1.9, T.z);
    camera.near = 1; camera.far = 140000; camera.updateProjectionMatrix();
    setStage('descent');
    say('Radar lock. Terrain-Relative Navigation is matching the camera to its map.', 4);
  }

  function die(kind, title, why) {
    if (E.dying) return;
    buzz([200, 60, 300]);
    E.dying = { kind, rt: 0, title, why, axis: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize() };
    E.shake = 1.6; say(kind === 'burn' ? 'Backshell temperature critical!' : kind === 'load' ? 'Structural load exceeded!' : 'Loss of attitude control — tumbling!', 3);
  }
  function fail(title, why, from) {
    ['edl-fpm', 'edl-tgt'].forEach(id => { $(id).style.display = 'none'; });
    E.stage = 'failed';
    $('edl-fail-title').textContent = title; $('edl-fail-why').textContent = why;
    $('edl-fail').classList.add('on');
    $('edl-retry').onclick = () => begin(from);
  }

  function finish() {
    const T = ctx.target, miss = Math.hypot(E.pos.x - T.x, E.pos.z - T.z);
    E.result = { miss, fuel: E.fuel, x: E.pos.x, z: E.pos.z };
    $('edl-miss').textContent = miss < 10 ? miss.toFixed(1) + ' m' : Math.round(miss) + ' m';
    $('edl-fuel-left').textContent = Math.round(E.fuel) + ' kg';
    $('edl-clock').textContent = clock(E.t);
    $('edl-verdict').textContent = miss < 15 ? 'On the spot. The real one touched down about 5 m from the point its navigation had picked.'
      : miss < 60 ? 'Well inside the ellipse, on safe ground.' : 'Safe ground, a fair walk from the middle of the ellipse.';
    $('edl-done').classList.add('on');
  }

  function leave() {
    ['edl-fpm', 'edl-tgt'].forEach(id => { $(id).style.display = 'none'; });
    E.active = false;
    document.body.classList.remove('edl'); delete document.body.dataset.edl;
    ['edl', 'edl-fail', 'edl-done'].forEach(id => $(id).classList.remove('on'));
    $('edl-glow').style.opacity = 0;
    [craft, stage.group, heatDrop].forEach(o => o.parent && o.parent.remove(o));
    bridles.visible = aimRing.visible = goalRing.visible = false;
    if (hazard.mesh) hazard.mesh.visible = false;
    camera.near = 0.1; camera.far = 6000; camera.fov = 52; camera.updateProjectionMatrix();
    scene.fog.near = ctx.fog.near; scene.fog.far = ctx.fog.far;
    renderer.setClearColor(0x000000, 1);
  }

  // every second the parachute waits carries the landing point 360 m farther on
  const downNow = () => (E.stage === 'chute' && E.chuteT < 0 ? E.down + 0.36 * (E.t - 240) : E.down);
  const clock = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

  /* ── high regime: entry and parachute ───────────────────────── */
  const vHat = new THREE.Vector3(), qA = new THREE.Quaternion(), qB = new THREE.Quaternion(), qG = new THREE.Quaternion();
  const DOWN_Y = new THREE.Vector3(0, -1, 0), Yv = new THREE.Vector3(0, 1, 0), Z = new THREE.Vector3(0, 0, 1), tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();

  /* ── the capsule's attitude ────────────────────────────────── */
  /* The capsule flies tilted about 16° to the flow — its trim — and that tilt
     is where its lift comes from. Aerodynamics pull it back to trim like a
     spring; thick air makes the spring stiff and well damped, thin air soft.
     Late in entry, slowing through the low supersonic, the damping turns
     negative and the swing grows on its own: capsules wobble before their
     parachutes. Gusts and hard rolls knock it off. W and S fire the pitch
     thrusters. Off by more than 10°, the backshell starts to take heat it was
     never built for; off by 24°, the heat shield no longer leads and it flips. */
  // the warning and loss angles come from the difficulty: D.aoaWarn, D.aoaLost
  function attitude(dt) {
    const t = E.t, qbar = clamp(gAt(t) / 9.5, 0, 1), late = smooth(160, 228, t);
    const w = 0.9 + 2.6 * Math.sqrt(qbar);
    const c = 0.15 + 0.9 * Math.sqrt(qbar) - 0.95 * late;
    const u = E.rcs > 0 ? -axZ() * D.pitch : 0;                         // realistic: W raises the angle of attack; easy: W raises the nose as you see it
    if (u) { E.rcs = Math.max(0, E.rcs - D.rcs * Math.abs(u) * dt); if (Math.abs(u) > 0.08) fire(0.6); }   // a light touch burns less
    if (Math.random() < dt * D.gust * (0.25 + 0.9 * qbar + 0.7 * late))
      E.q += (Math.random() < 0.5 ? -1 : 1) * (D.gustA + Math.random() * D.gustB) * (0.3 + 1.25 * qbar + 0.6 * late);
    for (const sh of E.shears) if (!sh.done && t >= sh.t) {
      sh.done = true; E.q += (Math.random() < 0.5 ? -1 : 1) * (D.shearA + Math.random() * D.shearB); E.shake = 0.8; buzz([40, 30, 60]);
      say('Density shear! Catch the swing — W / S.', 2.6);
    }
    for (let i = 0, n = 4, h = dt / 4; i < n; i++) {
      const acc = -w * w * E.aoa - c * E.q + u * 38 + (Math.random() - 0.5) * 10 * qbar;
      E.q += acc * h; E.aoa += E.q * h;
    }
    E.att.push(E.aoa); if (E.att.length > 200) E.att.shift();
    const over = Math.max(0, Math.abs(E.aoa) - D.aoaWarn);
    E.burn = clamp(E.burn + (over / D.burn) * (0.2 + heatAt(t) * 1.3) * dt - 0.01 * dt, 0, 1);
    if (!E.saidWob && late > 0.35 && E.stage === 'entry') { E.saidWob = true; say('Slowing through Mach 3: the capsule is starting to wobble on its own. Damp it.', 4); }
    if (!E.saidRCS && E.rcs < 20) { E.saidRCS = true; say(`Thruster propellant at ${Math.round(E.rcs)}%. Short pulses.`, 3); }
    if (Math.abs(E.aoa) > D.aoaLost) die('tumble', 'Tumbled', `The capsule swung ${Math.round(Math.abs(E.aoa))}° off its trim and flipped: the heat shield no longer faced the flow. W and S fire the pitch thrusters — short pulses against the swing keep the nose in the green. The real capsule's eight thrusters fired again and again through entry for exactly this.`);
    else if (E.burn >= 1) die('burn', 'Burned through', 'Flown too far off its trim angle in the hottest part of entry, the capsule turned its backshell into the flow. The backshell is built for the wake, not for 1,300 °C plasma. Keep the nose in the green while the heat shield glows.');
  }

  /* ── the approach: ten minutes out, in about 26 seconds ─────── */
  const INTRO = 26;
  const CAPS = [
    [0.8, 6.6, '18 February 2021. 203 days and 472 million km after launch, Mars 2020 arrives.'],
    [6.9, 10.2, 'E − 10 min. The cruise stage, its solar panels and radiators, separates.'],
    [10.4, 14.2, 'Eight thrusters turn the capsule heat shield first and stop its 2 rpm spin.'],
    [14.4, 18.8, 'Two 77 kg tungsten blocks are jettisoned. Off-balance, the capsule flies with lift and can be steered.'],
    [19.0, 23.2, 'Entry interface: 125 km, 5.3 km/s. Earth will hear about it in 11 min 22 s.'],
  ]
  const qCruise = new THREE.Quaternion(), qEntry = new THREE.Quaternion(), qSpin = new THREE.Quaternion();
  const shotP = new THREE.Vector3(), shotT = new THREE.Vector3(), pA = new THREE.Vector3(), tA = new THREE.Vector3(), pB = new THREE.Vector3(), tB = new THREE.Vector3();
  function stepIntro(dt) {
    E.it += dt; const T = E.it;
    if (action) { action = false; if (T > 0.5) return endIntro(); }
    const th0 = rangeAt(0) / R_MARS, g0 = gammaAt(0);
    qG.setFromAxisAngle(Z, th0);
    vHat.set(Math.cos(g0), -Math.sin(g0), 0);
    // where the stack is, km, in the entry-interface frame: on the incoming line, closing fast
    const sKm = 7200 * Math.pow(Math.max(0, 1 - T / INTRO), 2.3);
    const P = new THREE.Vector3(0, R_MARS + FACTS.entryAlt, 0).addScaledVector(vHat, -sKm);
    const toMars = P.clone().negate().normalize();                 // craft-local direction to the planet's centre

    // attitude: cruising solar panels to the Sun and spinning; then de-spin and turn heat shield first
    const sunL = new THREE.Vector3().copy(sunDir).applyQuaternion(qG.clone().invert()).normalize();
    qCruise.setFromUnitVectors(Yv, sunL);
    qSpin.setFromAxisAngle(Yv, 0.21 * Math.min(T, 9) + 0.21 * Math.max(0, Math.min(T, 12) - 9) * (1 - (Math.min(T, 12) - 9) / 6));
    qA.setFromUnitVectors(DOWN_Y, vHat); qEntry.copy(qA); { const r = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), -0.24); qEntry.multiply(r); }
    const turn = smooth(10.2, 15.5, T);
    craft.quaternion.copy(qCruise).multiply(qSpin).slerp(qEntry, turn);
    craft.position.set(0, 0, 0);
    wake.visible = bow.visible = false; spark.m.material.opacity = 0;
    if (T > 10 && T < 15.8) fire(0.5);
    puffs.forEach(p => { p.material.opacity = Math.max(0, p.material.opacity - dt * 3); });

    // separations
    if (T >= 9 && cruise.parent === shell.group) { throwOff(cruise, new THREE.Vector3(0, 1.7, 0).applyQuaternion(craft.quaternion), new THREE.Vector3(0, 0.21, 0)); E.shake = 0.25; }
    if (T >= 15.6 && cbm[0].parent === shell.group) cbm.forEach((m, i) => throwOff(m, new THREE.Vector3(Math.cos(m.userData.a) * 1.6, -0.3, Math.sin(m.userData.a) * 1.6).applyQuaternion(craft.quaternion), new THREE.Vector3(1.3, 0.4 * i, 0.9)));
    for (const l of loose) { l.o.position.addScaledVector(l.v, dt); l.o.rotation.x += l.spin.x * dt; l.o.rotation.y += l.spin.y * dt; l.o.rotation.z += l.spin.z * dt; }

    // three shots, cross-faded: Mars behind the stack; alongside for the separations; then in behind the capsule
    const side = new THREE.Vector3().crossVectors(toMars, Yv).normalize();
    const orbit = 0.25 + T * 0.03;
    pA.copy(toMars).multiplyScalar(-24).addScaledVector(side, Math.sin(orbit) * 11).add(new THREE.Vector3(0, 5, 0)); tA.set(0, 1, 0).addScaledVector(toMars, 6);
    pB.copy(side).multiplyScalar(13).addScaledVector(toMars, -5).add(new THREE.Vector3(0, 3.5, 0)); tB.set(0, 1.5, 0);
    const pC = new THREE.Vector3().copy(vHat).multiplyScalar(-19).add(new THREE.Vector3(0, 7.5, 0)), tC = new THREE.Vector3().copy(vHat).multiplyScalar(30).add(new THREE.Vector3(0, 3, 0));
    const kB = smooth(7.2, 9.4, T), kC = smooth(16.5, 21.5, T);
    shotP.copy(pA).lerp(pB, kB).lerp(pC, kC); shotT.copy(tA).lerp(tB, kB).lerp(tC, kC);
    E.shake = Math.max(0, E.shake - dt * 1.4);
    craftCam.position.copy(shotP).add(tmp.set((Math.random() - .5), (Math.random() - .5), (Math.random() - .5)).multiplyScalar(E.shake * 0.3));
    craftCam.up.set(0, 1, 0); craftCam.lookAt(shotT);
    craftCam.aspect = bgCam.aspect = camera.aspect; craftCam.updateProjectionMatrix(); bgCam.updateProjectionMatrix();
    E.camP.copy(shotP); E.camT.copy(shotT); E.camInit = true;

    const Pg = P.clone().applyQuaternion(qG);
    bgCam.position.copy(Pg).add(tmp.copy(craftCam.position).multiplyScalar(0.001).applyQuaternion(qG));
    bgCam.quaternion.copy(qG).multiply(craftCam.quaternion);
    globeMat.uniforms.sunDir.value.copy(sunDir); globeMat.uniforms.hazeAmt.value = 0.75;
    craftSun.position.copy(sunL).multiplyScalar(50);
    stars.material.opacity = 0.9; renderer.setClearColor(0x000000, 1);
    targetRing.material.opacity = smooth(17, 21, T) * (0.55 + 0.4 * Math.sin(T * 4)); targetRing.scale.setScalar(9);

    // captions, letterbox, the count into the atmosphere
    let cap = '';
    for (const [a, b, txt] of CAPS) if (T >= a && T < b) cap = txt;
    if (T >= 23.2) cap = `Atmosphere in ${Math.max(1, Math.ceil(INTRO - T))}`;
    const el = $('edl-cap');
    if (el.dataset.txt !== cap) { el.dataset.txt = cap; el.classList.remove('on'); if (cap) { el.textContent = cap; void el.offsetWidth; el.classList.add('on'); } }
    $('edl-fade').style.opacity = String(1 - smooth(0, 1.6, T));
    if (T >= INTRO) endIntro();
  }
  function endIntro() {
    if (cruise.parent === shell.group) throwOff(cruise, new THREE.Vector3(0, 0.55, 0), new THREE.Vector3(0, 0.21, 0));
    cbm.forEach(m => { if (m.parent === shell.group) shell.group.remove(m); });
    loose.forEach(l => craftScene.remove(l.o)); loose.length = 0;
    $('edl-cap').classList.remove('on'); $('edl-cap').dataset.txt = ''; $('edl-fade').style.opacity = '0';
    E.t = 0; E.camInit = false;
    setStage('entry');
    say('Entry interface. Guidance is yours.', 2.5);
  }

  function stepHigh(dt) {
    if (E.stage === 'intro') return stepIntro(dt);
    const s = E.stage;
    puffs.forEach(p => { p.material.opacity = Math.max(0, p.material.opacity - dt * 3); });
    if (E.dying) {
      E.dying.rt += dt;
      if (E.dying.rt > 2.2) { const d = E.dying; E.dying = null; return fail(d.title, d.why, 'entry'); }
    } else if (s === 'entry') {
      E.warp = 6.4;
      const b0 = E.bank;
      E.bank = E.rcs > 0 ? clamp(E.bank + axX() * 48 * dt, -85, 85) : E.bank;          // was 62°/s: slower, smoother banking
      const db = Math.abs(E.bank - b0);
      if (db > 0) { E.rcs = Math.max(0, E.rcs - db * D.bankRcs); fire(0.4); E.q += (E.bank - b0) * 0.14 * Math.sign(Math.sin(E.t * 0.7) + 0.3); }   // a hard roll knocks the pitch about
      const dm = dt * E.warp, b = E.bank * DEG, lift = clamp(1 + E.aoa / 25, 0.6, 1.4), a = authAt(E.t) * lift;
      // unsteady air: the thing guidance exists to fight
      E.driftC += (Math.sin(E.t * 0.071 + 1.3) * 0.016 - E.driftC) * Math.min(1, dm * 0.2);
      E.driftD += (Math.sin(E.t * 0.053 + 4.0) * 0.03 - E.driftD) * Math.min(1, dm * 0.2);
      E.cross += (0.13 * Math.sin(b) * a + E.driftC * a) * dm;
      E.down += (0.52 * (Math.cos(b) - 0.53) * a + E.driftD * a) * dm;
      E.t += dm;
      attitude(dt);
      // lift pointed down drives the capsule deeper, into thicker air, sooner: more load
      const gEff = gAt(E.t) * (1 + 0.55 * Math.max(0, -Math.cos(b)) * authAt(E.t));
      E.gEff = gEff;
      E.gOver = gEff > 15 ? E.gOver + dt : Math.max(0, E.gOver - dt);
      if (!E.saidLoad && gEff > 12.5) { E.saidLoad = true; say('Load climbing past 12 g — roll the lift back up!', 3); }
      if (E.gOver > D.gMax) die('load', 'Overloaded', 'With its lift pointed down for too long, the capsule dove into thick air too steeply and pulled more than 15 g, past what the rover and its structure are built for. Lift down shortens your range, but use it in short bursts.');
      if (!E.saidHeat && E.t > 62) { E.saidHeat = true; say('Peak heating. The shield is at 1,300 °C; behind it the rover sits at room temperature.', 4); }
      if (!E.saidG && E.t > 86) { E.saidG = true; say('Peak deceleration: ten times Earth gravity.', 3); }
      if (!E.saidSt && E.t > 150) { E.saidSt = true; say('Lift is fading with the speed. Last corrections now.', 3.5); }
      if (E.t >= 226) {
        setStage('chute');
        // Straighten Up and Fly Right: six more weights go, and the capsule stops flying with lift
        ebm.forEach((m, i) => throwOff(m, new THREE.Vector3(Math.cos(m.userData.a) * 2.2, 0.2, Math.sin(m.userData.a) * 2.2).applyQuaternion(craft.quaternion), new THREE.Vector3(2 + i * 0.3, 1, 0.6)));
        say('Straighten up and fly right: six more weights away, the capsule rolls level. Parachute armed — keep it steady.', 5);
      }
    } else if (s === 'chute') {
      E.warp = E.chuteT < 0 ? 2.6 : 2.2;                 // slow enough after deploy to watch it
      E.bank += (0 - E.bank) * Math.min(1, dt * 1.5);
      const dm = dt * E.warp;
      E.t += dm;
      E.gEff = gAt(E.t);
      if (E.chuteT < 0) {
        attitude(dt);
        const v = velAt(E.t);
        if (!E.dying && (action || v < 352)) {
          action = false;
          if (v > D.chuteV) return fail('Parachute lost', `It was fired at ${Math.round(v)} m/s, well over what the canopy is built to take. The real one was deployed at about 420 m/s and loaded to some 30 tonnes even so.`, 'entry');
          if (Math.abs(E.aoa) > D.chuteAoa) return fail('Parachute fouled', `It went out with the capsule swinging ${Math.round(Math.abs(E.aoa))}° off line, and the lines wrapped the backshell. Damp the swing first, then fire.`, 'entry');
          E.down = downNow(); E.chuteT = E.t; E.chuteV = v; E.flash = 1; E.shake = 1.4; E.rt = 0; buzz([90, 40, 160]);
          chute.group.visible = true;
          say(v < 356 ? 'Fired late, on the backup trigger. You have flown long.' : `Parachute out at ${Math.round(v)} m/s. ${FACTS.chuteDia} m of canopy, open in under a second.`, 4);
          document.body.dataset.edl = 'open';
          prompt('Parachute open. Slowing from supersonic to about 320 km/h.');
        }
      } else {
        E.rt += dt;
        E.aoa *= Math.exp(-dt * 1.5); E.q *= Math.exp(-dt * 1.5);          // the canopy takes the swing out
        E.inflate = Math.min(1, E.inflate + dt * 1.5);
        if (E.shieldT < 0 && E.t > E.chuteT + 20) {
          E.shieldT = E.t; E.shake = 0.5;
          shell.heat.visible = false;
          heatDrop.clear(); const h = shell.heat.clone(); heatDrop.add(h); heatDrop.position.set(0, 0, 0); heatDrop.quaternion.copy(craft.quaternion); craftScene.add(heatDrop);
          say('Heat shield separation. The rover sees Mars for the first time.', 3.5);
        }
        if (E.shieldT > 0) {
          heatDrop.position.addScaledVector(vHat, dt * 26); heatDrop.rotation.x += dt * 0.5;
          if (E.t > E.shieldT + 9) { craftScene.remove(heatDrop); toTerminal(); return; }
        }
      }
    }
    for (const l of loose) { l.o.position.addScaledVector(l.v, dt); l.o.rotation.x += l.spin.x * dt; l.o.rotation.y += l.spin.y * dt; l.o.rotation.z += l.spin.z * dt; }

    /* place the craft and both cameras */
    const t = E.t, gamma = gammaAt(t), alt = E.chuteT > 0 ? Math.max(8.0, altAt(E.chuteT) - (t - E.chuteT) * 0.11) : altAt(t);
    const dyingBurn = E.dying && E.dying.kind === 'burn' ? E.dying.rt : 0;
    const heat = Math.min(1.6, heatAt(t) * (s === 'entry' ? 1 : 0) + dyingBurn * 0.6 + E.burn * 0.3), g = E.gEff || gAt(t);
    const hung = E.chuteT > 0 ? smooth(0, 14, t - E.chuteT) : 0;      // under the chute it swings to hang nearly vertical
    const ga = lerp(gamma, 1.2, hung);
    vHat.set(Math.cos(ga), -Math.sin(ga), 0);
    qA.setFromUnitVectors(DOWN_Y, vHat);
    qB.setFromAxisAngle(vHat, E.bank * DEG);
    craft.quaternion.copy(qB).multiply(qA);
    craft.rotateZ((-0.24 - E.aoa * DEG) * (1 - hung) + Math.sin(E.st * 1.3) * 0.05 * hung);   // trimmed nose-up: that is where the lift comes from
    if (E.dying && E.dying.kind !== 'burn') craft.rotateOnAxis(E.dying.axis, Math.pow(E.dying.rt, 1.5) * 2.6);
    craft.position.set(0, 0, 0);

    shell.heatMat.emissiveIntensity = heat * 2.4;
    shell.backMat.emissiveIntensity = E.burn * 1.4 + dyingBurn * 1.5;
    glowMat.uniforms.heat.value = Math.min(1.3, heat); glowMat.uniforms.time.value += dt;
    wake.visible = bow.visible = heat > 0.02;

    // sparks
    spark.m.material.opacity = Math.min(1, heat * 0.9);
    for (let i = 0; i < SP; i++) {
      spark.s[i] += dt * (1.2 + (i % 7) * 0.2); if (spark.s[i] > 1) spark.s[i] -= 1;
      const a = i * 2.399, r = 2.2 + (i % 5) * 0.5 + spark.s[i] * 2.5;
      tmp.set(0, spark.s[i] * 46, 0).add(tmp2.set(Math.cos(a) * r, 0, Math.sin(a) * r)).applyQuaternion(craft.quaternion);
      spark.p.set([tmp.x, tmp.y, tmp.z], i * 3);
    }
    spark.g.attributes.position.needsUpdate = true;

    // parachute: streams out behind, snaps open, then breathes
    if (chute.group.visible) {
      const k = E.inflate, open = k < 1 ? 0.12 + 0.88 * Math.pow(k, 0.6) * (1 + 0.28 * Math.sin(k * 9) * (1 - k)) : 1 + Math.sin(E.st * 5) * 0.015;
      chute.group.scale.set(open, 0.55 + 0.45 * k, open);
      chute.group.position.set(0, 2.55 + chute.length * (0.35 + 0.65 * Math.min(1, k * 1.6)), 0);
    }

    // camera, in the craft's local frame (X downrange, Y up, Z to the right of track).
    // Entry: chasing the capsule. Parachute out: first the view up the riser from the
    // backshell as the canopy snaps open, then a wide shot — canopy, capsule, Mars below.
    let wantP, wantT, up = tmp2.set(0, 1, 0);
    const chase = () => [tmp.copy(vHat).multiplyScalar(-19).add(new THREE.Vector3(0, 7.5, 0)), new THREE.Vector3().copy(vHat).multiplyScalar(30).add(new THREE.Vector3(0, 3, 0))];
    if (E.chuteT < 0) {
      [wantP, wantT] = chase();
      // the view banks with the capsule, like the chase plane behind a glider
      E.roll += (E.bank * 0.45 - E.roll) * Math.min(1, dt * 3);
      up = new THREE.Vector3(0, 1, 0).applyAxisAngle(vHat, E.roll * DEG);   // bank left: the world tips clockwise, as from a cockpit
    }
    else {
      const axis = new THREE.Vector3(0, 1, 0).applyQuaternion(craft.quaternion);
      const side = new THREE.Vector3(0.75, 0, 0.66).applyQuaternion(craft.quaternion);
      const upP = axis.clone().multiplyScalar(3.0).addScaledVector(side, 0.9);
      const upT = axis.clone().multiplyScalar(2.55 + chute.length * (0.35 + 0.65 * Math.min(1, E.inflate * 1.6)));
      const wideP = new THREE.Vector3(-22, 26, 88), wideT = new THREE.Vector3(0, 14, 0);
      const k = smooth(4.2, 6.6, E.rt);
      wantP = upP.lerp(wideP, k); wantT = upT.lerp(wideT, k);
      if (k < 0.5) up = new THREE.Vector3(1, 0, 0).applyQuaternion(craft.quaternion);
      if (E.rt < 0.05) { E.camP.copy(wantP); E.camT.copy(wantT); }          // a cut, not a pan, onto the up-look camera
    }
    if (!E.camInit) { E.camP.copy(wantP); E.camT.copy(wantT); E.camInit = true; }
    const kk = 1 - Math.exp(-(E.chuteT > 0 && E.rt < 4.2 ? 12 : 2.6) * dt);
    E.camP.lerp(wantP, kk); E.camT.lerp(wantT, kk);
    E.shake = Math.max(0, E.shake - dt * 1.4);
    const sh = (g / 10) * 0.11 * (s === 'entry' ? 1 : 0.2) + E.shake * 0.5 + (E.dying ? 0.35 : 0) + (E.chuteT > 0 && E.rt < 1.5 ? 0.25 : 0);
    craftCam.position.copy(E.camP).add(tmp.set((Math.random() - .5) * sh, (Math.random() - .5) * sh, (Math.random() - .5) * sh));
    craftCam.up.copy(up); craftCam.lookAt(E.camT);
    craftCam.aspect = bgCam.aspect = camera.aspect; craftCam.updateProjectionMatrix(); bgCam.updateProjectionMatrix();

    // The same view, placed over the globe — at where the capsule really is and pointing
    // where it is really going. Its sideways position is the predicted cross-range miss,
    // drawn larger while Jezero is far off (so a correction of a few km reads at 600 km)
    // and true to scale by the end. Its heading is the direction that position is
    // actually moving, so banking turns the nose, the world swings, and the real crater
    // slides toward the middle of the screen as the miss closes.
    const rem = rangeAt(Math.min(t, 288)) * (E.chuteT > 0 ? 1 - hung * 0.75 : 1);
    const kv = 1 + 39 * clamp(rem / RANGE[0], 0, 1), lat = E.cross * kv;
    if (E.remPrev !== undefined && E.remPrev - rem > 1e-4) {
      // heading comes from how the miss is changing (not from the drawing scale shrinking)
      const want = clamp(Math.atan2((E.cross - E.crossPrev) * kv, E.remPrev - rem), -0.7, 0.7);
      E.psi += (want - E.psi) * Math.min(1, dt * 3);
    } else if (E.chuteT > 0) E.psi *= Math.exp(-dt);
    E.remPrev = rem; E.crossPrev = E.cross;
    const th = rem / R_MARS, ph = lat / R_MARS;
    const upG = new THREE.Vector3(-Math.sin(th) * Math.cos(ph), Math.cos(th) * Math.cos(ph), Math.sin(ph)).normalize();
    const along = new THREE.Vector3(Math.cos(th), Math.sin(th), 0); along.addScaledVector(upG, -along.dot(upG)).normalize();
    const head = along.clone().applyAxisAngle(upG, -E.psi);                  // + psi: heading right of the line
    const rightG = new THREE.Vector3().crossVectors(head, upG);
    const qF = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(head, upG, rightG));
    qG.copy(qF);
    const posG = upG.clone().multiplyScalar(R_MARS + alt);
    bgCam.position.copy(posG).add(tmp.copy(craftCam.position).multiplyScalar(0.001).applyQuaternion(qF));
    bgCam.quaternion.copy(qF).multiply(craftCam.quaternion);
    globeMat.uniforms.sunDir.value.copy(sunDir);
    craftSun.position.copy(sunDir).applyQuaternion(qF.clone().invert()).multiplyScalar(50);
    // HUD: the flight-path marker (where you are going) and Jezero itself (where it really is)
    const steer = (s === 'entry' || (s === 'chute' && E.chuteT < 0)) && !E.dying;
    $('edl-fpm').style.display = $('edl-tgt').style.display = steer ? 'block' : 'none';
    if (steer) {
      const W = innerWidth, H = innerHeight;
      const scr = v => { const p = v.clone().project(craftCam); return [(p.x + 1) / 2 * W, (1 - p.y) / 2 * H, p.z]; };
      const [fx, fy] = scr(tmp.copy(vHat).multiplyScalar(60).add(craftCam.position));
      const jl = new THREE.Vector3(0, R_MARS, 0).sub(posG).applyQuaternion(qF.clone().invert()).normalize();
      let [gx, gy, gz] = scr(jl.multiplyScalar(500).add(craftCam.position));
      if (gz > 1) { gx = W - gx; gy = H - gy; }                                 // behind the camera: show it at the edge it is round
      const m = 34; gx = clamp(gx, m, W - m); gy = clamp(gy, m + 60, H - m);
      $('edl-fpm').style.transform = `translate(${fx}px,${fy}px) rotate(${E.roll}deg)`;
      $('edl-tgt').style.transform = `translate(${gx}px,${gy}px)`;
      $('edl-tgt').classList.toggle('lock', Math.abs(gx - fx) < 22);
      $('edl-tgt-d').textContent = `Jezero ${Math.round(rem)} km`;
    }
    stars.material.opacity = smooth(35, 85, alt) * 0.9;
    const sky = smooth(70, 14, alt);
    renderer.setClearColor(new THREE.Color(0x000000).lerp(new THREE.Color(MARS.fog), sky * 0.92), 1);
    globeMat.uniforms.hazeAmt.value = lerp(0.75, 1.0, sky);
    targetRing.material.opacity = 0.55 + 0.4 * Math.sin(E.st * 4);
    targetRing.scale.setScalar(clamp(alt / 10, 1, 9));                    // the 7 km ring, drawn big enough to find from 100 km up

    $('edl-glow').style.opacity = Math.min(0.85, heat * 0.3 + E.burn * 0.35 + dyingBurn * 0.3).toFixed(3);
    $('edl-glow').classList.toggle('hot', E.burn > 0.25 || dyingBurn > 0);
    hudHigh(alt, velAt(t), g, heat);
  }

  /* ── low regime: under the chute, powered descent, sky crane ── */
  const HANG = 2.5;                                    // rover wheels to the bottom of the descent stage
  const vTarget = a => clamp(0.75 + 1.9 * Math.sqrt(Math.max(0, a - 21)), 0.75, 88);
  function stepLow(dt) {
    const s = E.stage, rover = ctx.rover(), T = ctx.target;
    const ground = height(E.pos.x, E.pos.z);
    let a = E.pos.y - ground;                          // height of the rover's wheels above the ground

    if (s === 'descent') {
      E.warp = 7;
      const dm = dt * E.warp;
      E.vel.x += (E.wind.x - E.vel.x) * Math.min(1, dm * 0.05);
      E.vel.z += (E.wind.y - E.vel.z) * Math.min(1, dm * 0.05);
      E.vel.y = -lerp(FACTS.chuteTerminal, 100, smooth(2000, 8000, a));
      E.pos.addScaledVector(E.vel, dm); E.t += dm;
      hazard.mesh.material.opacity = Math.min(1, E.st / 2.5);
      if (!E.saidTRN && E.st > 4.2) { E.saidTRN = true; say('Red is rock, slope, sand or crater. Green is where a rover can stand.', 4); }
      if (a < 2500 && !E.saidSep) { E.saidSep = true; prompt(TOUCH ? 'Tap <b>DEPLOY</b> to drop free of the backshell.' : '<b>SPACE</b> drops free of the backshell.'); }
      if ((action && a < 2500) || a < 1500) {
        const late = a < 1500;
        action = false; E.sepAlt = a;
        // let the backshell and parachute go: they stay behind and drift off
        scene.attach(shell.group); E.shellV = new THREE.Vector3(E.vel.x + 9, -58, E.vel.z + 5);
        stage.group.visible = true; rover.visible = true; bridles.visible = false;
        aimRing.visible = true;
        if (late) E.fuel -= D.lateFuel;
        setStage('powered'); E.shake = 0.8; buzz(70);
        say(late ? 'Separated late on the backup trigger. That cost fuel.' : `Backshell separation at ${Math.round(a)} m. Eight engines lit.`, 3.5);
      }
    } else if (s === 'powered' || s === 'crane') {
      E.warp = s === 'powered' ? lerp(1.0, 1.8, smooth(60, 400, a)) : 1.6;
      const dm = dt * E.warp;
      E.engines = Math.min(1, E.engines + dt * 2.2);

      // sideways: your thrust, or guidance quietly killing the drift
      const ix = axX(), iz = axZ(), hs = Math.hypot(E.vel.x, E.vel.z);
      let ax = ix * 3.6, az = iz * 3.6;
      if (!ix) ax = -clamp(E.vel.x * 0.9, -2.4, 2.4);
      if (!iz) az = -clamp(E.vel.z * 0.9, -2.4, 2.4);
      const authority = E.fuel > 0 ? (s === 'crane' ? 0.35 : smooth(8, 60, a) * 0.85 + 0.15) : 0;
      E.vel.x += ax * authority * dm; E.vel.z += az * authority * dm;
      const cap = lerp(1.2, 30, smooth(25, 500, a));
      if (hs > cap) { E.vel.x *= cap / hs; E.vel.z *= cap / hs; }

      // down: the guidance law's descent rate for this height
      const want = E.fuel > 0 ? -vTarget(a - E.drop) : E.vel.y - 3.71 * dm;
      E.vel.y += clamp(want - E.vel.y, -5 * dm, 16 * dm);
      E.pos.addScaledVector(E.vel, dm); E.t += dm;
      E.fuel = Math.max(0, E.fuel - (D.fuelA + D.fuelB * (Math.abs(ix) + Math.abs(iz)) * (s === 'crane' ? 0.3 : 1)) * dm);

      // the pieces left behind
      if (shell.group.parent === scene) { shell.group.position.addScaledVector(E.shellV, dm); if (shell.group.position.y < ground - 30) scene.remove(shell.group); }

      // where this ends up if you touch nothing
      // (let go of the keys and guidance brakes the drift at about 2.2 m/s², so that is the stopping distance)
      const lead = Math.min(hs / 4.4, 1.05 * Math.sqrt(Math.max(0, a - 20)) + 2);
      const px = E.pos.x + E.vel.x * lead, pz = E.pos.z + E.vel.z * lead;
      aimRing.position.set(px, hazard.grid.top + 2.1, pz);
      const big = clamp(a / 55, 1, 12);                    // keep the rings readable from high up
      aimRing.scale.setScalar(big); goalRing.scale.setScalar(big * 0.8);
      const bad = hazard.grid.hazardAt(px, pz);
      aimRing.material.color.setHex(bad ? 0xffd9cf : 0x7fd4e0);   // pale when over a hazard: red on red would vanish
      const fadeMap = smooth(22, 70, a);
      hazard.mesh.material.opacity = fadeMap; aimRing.material.opacity = 0.95 * fadeMap; goalRing.material.opacity = 0.9 * fadeMap;

      a = E.pos.y - height(E.pos.x, E.pos.z);
      if (s === 'powered') {
        if (E.fuel <= 0 && !E.saidDry) { E.saidDry = true; say('Tanks dry.', 2); }
        if (a - E.drop <= 0.4) return fail('Hard landing', E.fuel <= 0 ? 'The descent stage ran out of fuel above the ground. Diverting costs fuel; the real stage carried about 400 kg and landed with plenty in hand.' : 'It reached the ground still flying.', 'terminal');
        if (a <= 21.5 && Math.abs(E.vel.y) < 1.6) { setStage('crane'); say('Twenty metres. Sky crane.', 2.6); }
      } else {
        if (action || E.st > 2.4) E.lower = true;
        if (E.lower) E.drop = Math.min(FACTS.bridle, E.drop + 1.5 * dm);
        bridles.visible = E.drop > 0.05;
        if (a - E.drop <= 0.02) return touchdown();
        if (E.fuel <= 0) return fail('Out of fuel on the crane', 'The stage dropped with the rover still on its bridles.', 'terminal');
      }
      // dust, once the plumes reach the ground
      if (a < 45 && ctx.puff) for (let i = 0; i < 3; i++) {
        const an = Math.random() * 6.3, rr = 2 + Math.random() * (5 + (45 - a) * 0.12);
        ctx.puff(E.pos.x + Math.cos(an) * rr, height(E.pos.x, E.pos.z) + 0.2, E.pos.z + Math.sin(an) * rr, 5, 1.6);
      }
    } else if (s === 'down') {
      // cut the bridles; the stage throttles up and flies itself clear
      E.flyV.y += 7 * dt; E.flyV.x -= 5.5 * dt; E.flyV.z -= 4 * dt;
      stage.group.position.addScaledVector(E.flyV, dt);
      stage.group.rotation.z = Math.min(0.5, E.st * 0.25); stage.group.rotation.x = -Math.min(0.35, E.st * 0.18);
      if (E.st > 0.5 && E.st < 2 && ctx.puff) ctx.puff(E.pos.x + (Math.random() - .5) * 6, ground + 0.3, E.pos.z + (Math.random() - .5) * 6, 3, 1.2);
      if (E.st > 4.6 && !E.result) finish();
    }

    /* put the hardware where the numbers say */
    if (s !== 'down') {
      const stageY = E.pos.y + HANG - 0;                 // the stage holds its height while the rover goes down
      rover.position.set(E.pos.x, E.pos.y - E.drop, E.pos.z);
      rover.rotation.set(0, ctx.roverYaw(), 0);
      stage.group.position.set(E.pos.x, stageY, E.pos.z);
      const tiltX = clamp(E.vel.z * 0.012, -0.2, 0.2), tiltZ = clamp(-E.vel.x * 0.012, -0.2, 0.2);
      stage.group.rotation.set(tiltX, 0, tiltZ);
      if (s === 'descent') craft.position.set(E.pos.x, E.pos.y + 0.2, E.pos.z);
      if (bridles.visible) {
        const p = bridles.geometry.attributes.position, top = stageY + 0.3, bot = E.pos.y - E.drop + 1.25;
        [[0.55, -0.5], [-0.55, -0.5], [0, 0.75]].forEach(([dx, dz], i) => {
          p.setXYZ(i * 2, E.pos.x + dx * 0.4, top, E.pos.z + dz * 0.4); p.setXYZ(i * 2 + 1, E.pos.x + dx, bot, E.pos.z + dz);
        });
        p.needsUpdate = true;
      }
    }
    stage.plumeMat.uniforms.power.value = (s === 'descent' ? 0 : E.engines) * (E.fuel > 0 || s === 'down' ? 1 : 0) * (s === 'crane' ? 0.6 : 1);
    stage.plumeMat.uniforms.time.value += dt;
    if (s === 'descent') chute.group.scale.setScalar(1 + Math.sin(E.st * 4) * 0.012);

    /* camera: an eased offset from the lander, so a fast descent cannot outrun it */
    const fx = s === 'down' ? E.pos.x : rover.position.x, fz = s === 'down' ? E.pos.z : rover.position.z;
    const fy = s === 'descent' ? E.pos.y + 1 : s === 'down' ? ground + 1.2 : E.pos.y + 1.6;
    const low = s === 'descent' ? 0 : smooth(170, 35, a);            // swing from looking down to looking across
    let wantP, wantT;
    if (s === 'descent') {      // under the parachute: a slow circle round the capsule, looking out across the crater to the horizon
      const ang = 0.5 + E.st * 0.2, r = lerp(42, 30, smooth(2600, 1600, a));
      wantP = tmp.set(Math.sin(ang) * r, 15, Math.cos(ang) * r); wantT = tmp2.set(0, -13, 0);      // the capsule and its canopy against the ground, then closing in as the drop nears
    }
    else if (s === 'down') { wantP = tmp.set(9, 3.2, 14); wantT = tmp2.set(-2, 4.4, 0); }
    else { wantP = tmp.set(lerp(0, 9, low), lerp(44, 6.5, low), lerp(6, 24, low)); wantT = tmp2.set(0, lerp(-40, 0.5, low), lerp(-2, 0, low)); }
    if (!E.camInit) { E.camP.copy(wantP); E.camT.copy(wantT); E.camInit = true; }
    const kk = 1 - Math.exp(-(s === 'down' ? 1.6 : 2.6) * dt);
    E.camP.lerp(wantP, kk); E.camT.lerp(wantT, kk);
    E.shake = Math.max(0, E.shake - dt * 1.4);
    const sh = E.shake * 0.6 + E.engines * 0.04 * (s === 'powered' ? 1 : 0.3);
    camera.position.set(fx + E.camP.x + (Math.random() - .5) * sh, fy + E.camP.y + (Math.random() - .5) * sh, fz + E.camP.z + (Math.random() - .5) * sh);
    camera.position.y = Math.max(camera.position.y, height(camera.position.x, camera.position.z) + 2.2);
    camera.up.set(0, 1, 0); camera.lookAt(fx + E.camT.x, fy + E.camT.y, fz + E.camT.z);
    const fov = s === 'descent' ? 58 : 52;
    if (Math.abs(camera.fov - fov) > 0.1) { camera.fov = fov; camera.updateProjectionMatrix(); }
    const camAlt = Math.max(0, camera.position.y - ground);
    scene.fog.near = 30 + camAlt * 0.8; scene.fog.far = ctx.fog.far + camAlt * 6.5;
    ctx.afterCamera(E.pos.x, ground, E.pos.z);

    hudLow(Math.max(0, a - E.drop), -E.vel.y, Math.hypot(E.vel.x, E.vel.z));
  }

  function touchdown() {
    buzz(45);
    const rover = ctx.rover();
    const hs = Math.hypot(E.vel.x, E.vel.z), vs = Math.abs(E.vel.y);
    const hz = hazard.grid.hazardAt(E.pos.x, E.pos.z);
    if (hz) return fail('Down, but not safely', 'The wheels came down on ground the hazard map had marked red — rock, sand, a crater wall or a steep slope. Terrain-Relative Navigation exists to steer away from exactly this.', 'terminal');
    if (hs > D.hs || vs > D.vs) return fail('Too fast at touchdown', `The rover met the ground at ${vs.toFixed(1)} m/s down and ${hs.toFixed(1)} m/s sideways. The real touchdown was at 0.75 m/s, about walking pace.`, 'terminal');
    E.flyV = new THREE.Vector3(0, 0.5, 0);
    bridles.visible = false; aimRing.visible = goalRing.visible = false; hazard.mesh.visible = false;
    ctx.settleRover(E.pos.x, E.pos.z);
    setStage('down'); E.shake = 0.3;
    say('Touchdown confirmed. Bridles cut — the descent stage flies clear.', 4);
  }

  /* ── HUD ────────────────────────────────────────────────────── */
  const scope = $('edl-scope').getContext('2d'), att = $('edl-att').getContext('2d');
  function hudHigh(alt, v, g, heat) {
    $('edl-t').textContent = clock(E.t);
    $('edl-alt').textContent = alt.toFixed(1) + ' km';
    $('edl-vel').textContent = Math.round(v * 3.6).toLocaleString('en-US') + ' km/h';
    $('edl-g').textContent = g.toFixed(1) + ' g';
    $('edl-heat').textContent = Math.round(20 + heat * (FACTS.peakHeatC - 20)).toLocaleString('en-US') + ' °C';

    // landing map: a small top-down view — the target ellipse, where you will come down
    // if nothing changes (the dot), which way that point is moving (the arrow), and one
    // plain instruction underneath
    const W = scope.canvas.width, cx = W / 2, cy = W / 2, K = W / 21;
    scope.clearRect(0, 0, W, W);
    scope.strokeStyle = 'rgba(203,168,90,.18)'; scope.lineWidth = 1;
    scope.beginPath(); scope.moveTo(cx, 4); scope.lineTo(cx, W - 4); scope.moveTo(4, cy); scope.lineTo(W - 4, cy); scope.stroke();
    scope.fillStyle = 'rgba(203,168,90,.12)'; scope.strokeStyle = 'rgba(203,168,90,.95)'; scope.lineWidth = 2;
    scope.beginPath(); scope.ellipse(cx, cy, FACTS.ellipse[1] / 2 * K, FACTS.ellipse[0] / 2 * K, 0, 0, 6.3); scope.fill(); scope.stroke();
    const dn = downNow();
    const X = clamp(cx + E.cross * K, 7, W - 7), Y = clamp(cy - dn * K, 7, W - 7);
    const inEll = Math.pow(E.cross / (FACTS.ellipse[1] / 2), 2) + Math.pow(dn / (FACTS.ellipse[0] / 2), 2) < 1;
    if (E.stage === 'entry') {
      E.trail.push([X, Y]); if (E.trail.length > 90) E.trail.shift();
      scope.strokeStyle = 'rgba(127,212,224,.3)'; scope.lineWidth = 1.5;
      scope.beginPath(); E.trail.forEach(([x, y], i) => scope[i ? 'lineTo' : 'moveTo'](x, y)); scope.stroke();
      if (E.trail.length > 30) {                                        // drift arrow: where the dot is heading
        const [ox, oy] = E.trail[E.trail.length - 30], dx = X - ox, dy = Y - oy, L = Math.hypot(dx, dy);
        if (L > 1.5) {
          const ux = dx / L, uy = dy / L, len = Math.min(22, 8 + L * 2), ex = X + ux * len, ey = Y + uy * len;
          scope.strokeStyle = scope.fillStyle = inEll ? '#6FCF7F' : '#7FD4E0'; scope.lineWidth = 2;
          scope.beginPath(); scope.moveTo(X, Y); scope.lineTo(ex, ey); scope.stroke();
          scope.beginPath(); scope.moveTo(ex + ux * 5, ey + uy * 5); scope.lineTo(ex - uy * 4, ey + ux * 4); scope.lineTo(ex + uy * 4, ey - ux * 4); scope.fill();
        }
      }
    }
    scope.fillStyle = inEll ? '#6FCF7F' : '#7FD4E0'; scope.beginPath(); scope.arc(X, Y, 5, 0, 6.3); scope.fill();
    scope.strokeStyle = '#0d0a18'; scope.lineWidth = 1.5; scope.stroke();
    $('edl-miss-now').textContent = inEll && Math.hypot(E.cross, dn) < 1 ? 'On target'
      : `${Math.abs(dn).toFixed(1)} km ${dn > 0 ? 'long' : 'short'} · ${Math.abs(E.cross).toFixed(1)} km ${E.cross > 0 ? 'right' : 'left'}`;
    // the one thing to do about it
    let tip = '';
    if (E.stage === 'entry') {
      const side = Math.abs(E.cross) > 0.6 ? (E.cross > 0 ? 'Bank <b>left</b>' : 'Bank <b>right</b>') : '';
      const rng = dn < -0.8 ? 'roll <b>upright</b> to stretch' : dn > 0.8 ? 'bank <b>steeper</b> to shorten' : '';
      tip = side && rng ? `${side} · ${rng}` : side ? `${side} toward the ◇` : rng ? rng.charAt(0).toUpperCase() + rng.slice(1) : '<b>Hold it</b> — on course';
      $('edl-bank').textContent = `${Math.abs(Math.round(E.bank))}°${E.bank > 2 ? ' R' : E.bank < -2 ? ' L' : ''}`;
    }
    $('edl-tip').innerHTML = tip;

    // parachute: a speed band it can survive, and the range ticking past the target
    if (E.stage === 'chute' && E.chuteT < 0) {
      const sp = clamp((560 - v) / (560 - 340), 0, 1);
      $('edl-speed-pin').style.left = (sp * 100) + '%';
      $('edl-range-pin').style.left = clamp(50 + dn * 7, 2, 98) + '%';
      $('edl-speed').classList.toggle('ok', v <= D.chuteV && v >= 352);
    }
    if (E.flash > 0) { E.flash = Math.max(0, E.flash - 0.05); $('edl-flash').style.opacity = E.flash; }

    // attitude: a running trace of the swing, against the bands that matter
    $('edl-g').parentElement.classList.toggle('warn', g > 12.5);
    if (E.stage === 'entry' || (E.stage === 'chute' && E.chuteT < 0)) {
      const W2 = att.canvas.width, H2 = att.canvas.height, my = H2 / 2, K2 = (H2 / 2 - 3) / D.aoaLost, AOA_WARN = D.aoaWarn, AOA_LOST = D.aoaLost, PS = D.pitch;      // easy mode draws the swing the way the stick moves it
      att.clearRect(0, 0, W2, H2);
      att.fillStyle = 'rgba(224,104,90,.22)'; att.fillRect(0, 0, W2, H2);
      att.fillStyle = 'rgba(224,170,90,.22)'; att.fillRect(0, my - AOA_WARN * K2, W2, AOA_WARN * K2 * 2);
      att.fillStyle = 'rgba(111,207,127,.28)'; att.fillRect(0, my - 5 * K2, W2, 10 * K2);
      att.strokeStyle = 'rgba(242,228,190,.25)'; att.beginPath(); att.moveTo(0, my); att.lineTo(W2, my); att.stroke();
      att.strokeStyle = '#F2E4BE'; att.lineWidth = 1.6; att.beginPath();
      const n = E.att.length; E.att.forEach((v, i) => att[i ? 'lineTo' : 'moveTo'](W2 - (n - 1 - i) * (W2 / 200), my - clamp(v * PS, -AOA_LOST, AOA_LOST) * K2)); att.stroke();
      const cur = Math.abs(E.aoa);
      att.fillStyle = cur < 5 ? '#6FCF7F' : cur < AOA_WARN ? '#E0AA5A' : '#E0685A';
      att.beginPath(); att.arc(W2 - 3, my - clamp(E.aoa * PS, -AOA_LOST, AOA_LOST) * K2, 3.5, 0, 6.3); att.fill();
      $('edl-rcs').textContent = `thrusters ${Math.round(E.rcs)}%`;
      $('edl-rcs').classList.toggle('low', E.rcs < 20);
      $('edl-burn').style.width = (E.burn * 100).toFixed(1) + '%';
      $('edl-burnrow').classList.toggle('on', E.burn > 0.02);
    }
  }
  function hudLow(a, vs, hs) {
    $('edl-t').textContent = clock(E.t);
    $('edl-alt').textContent = a > 999 ? (a / 1000).toFixed(2) + ' km' : Math.round(a) + ' m';
    $('edl-vel').textContent = vs.toFixed(vs < 10 ? 1 : 0) + ' m/s down';
    $('edl-g').textContent = hs.toFixed(1) + ' m/s across';
    $('edl-heat').textContent = Math.round(E.fuel) + ' kg';
    $('edl-fuel-bar').style.width = (E.fuel / FACTS.fuel * 100) + '%';
    $('edl-fuel').classList.toggle('low', E.fuel < 60);
    const T = ctx.target;
    $('edl-miss-now').textContent = `${Math.round(Math.hypot(E.pos.x - T.x, E.pos.z - T.z))} m from the centre of the ellipse`;
  }

  /* ── frame ──────────────────────────────────────────────────── */

  /* ── the briefing: two maps and the plan, before the clock starts ── */
  /* Both maps are drawn from what the level actually uses. The approach map is
     the same 60 km regional sheet that is laid under the capsule; the site map
     is a shaded-relief survey of the real terrain function, with the hazard
     grid Terrain-Relative Navigation will fly against laid over it. */
  let briefDrawn = false;
  function drawBrief() {
    if (briefDrawn) return; briefDrawn = true;
    const INK = '#F2E4BE', GOLDC = '#CBA85A';
    const label = (c, text, x, y, align = 'left', size = 11.5, col = INK) => {
      c.font = `600 ${size}px Montserrat, system-ui, sans-serif`; c.textAlign = align; c.textBaseline = 'middle';
      c.lineWidth = 3; c.strokeStyle = 'rgba(20,12,8,.75)'; c.strokeText(text, x, y);
      c.fillStyle = col; c.fillText(text, x, y);
    };
    const north = (c, x, y) => {
      c.strokeStyle = INK; c.fillStyle = INK; c.lineWidth = 1.5;
      c.beginPath(); c.moveTo(x, y + 14); c.lineTo(x, y - 8); c.stroke();
      c.beginPath(); c.moveTo(x, y - 14); c.lineTo(x - 4.5, y - 5); c.lineTo(x + 4.5, y - 5); c.closePath(); c.fill();
      label(c, 'N', x, y + 23, 'center', 10.5);
    };
    const scaleBar = (c, x, y, px, text) => {
      c.strokeStyle = INK; c.lineWidth = 2; c.beginPath();
      c.moveTo(x, y - 4); c.lineTo(x, y); c.lineTo(x + px, y); c.lineTo(x + px, y - 4); c.stroke();
      label(c, text, x + px / 2, y - 10, 'center', 10.5);
    };

    /* approach: the orbital photograph in its own colours if we have it, else the drawn sheet graded as the 3D view grades it */
    {
      const cv = $('brief-region'), S = cv.width, c = cv.getContext('2d');
      if (REAL) { c.imageSmoothingQuality = 'high'; c.drawImage(ctx.regionImg, 0, 0, S, S); }
      else {
        c.drawImage(regionCv, 0, 0, S, S);
        const id = c.getImageData(0, 0, S, S), d = id.data, lin = v => Math.pow(v / 255, 2.2), out = v => Math.round(255 * Math.pow(Math.min(1, v), 1 / 2.2));
        for (let i = 0; i < d.length; i += 4) {
          let r = lin(d[i]), g = lin(d[i + 1]), b = lin(d[i + 2]);
          g /= LIGHT_CAST[1]; b /= LIGHT_CAST[2];                          // the sheet is drawn with the light's warmth in it
          const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          r = (l + (r - l) * GRADE.sat) * GRADE.gain[0] * 0.62; g = (l + (g - l) * GRADE.sat) * GRADE.gain[1] * 0.62 * LIGHT_CAST[1]; b = (l + (b - l) * GRADE.sat) * GRADE.gain[2] * 0.62 * LIGHT_CAST[2];
          d[i] = out(r); d[i + 1] = out(g); d[i + 2] = out(b);
        }
        c.putImageData(id, 0, 0);
      }
      const px = m => (m / REGION + 0.5) * S, len = m => (m / REGION) * S;
      // ground track: in from the west, heading a little south of east
      c.strokeStyle = 'rgba(127,212,224,.9)'; c.fillStyle = 'rgba(127,212,224,.9)'; c.lineWidth = 1.6; c.setLineDash([6, 4]);
      c.beginPath(); c.moveTo(px(-29000), px(-2600)); c.lineTo(px(-5200), px(-460)); c.stroke(); c.setLineDash([]);
      c.beginPath(); c.moveTo(px(-4300), px(-380)); c.lineTo(px(-5600), px(-960)); c.lineTo(px(-5500), px(10)); c.closePath(); c.fill();
      label(c, 'Your track', px(-28600), px(-700), 'left', 11, '#7FD4E0');
      // the landing ellipse, 7.7 by 6.6 km — on the photograph, exactly where NASA drew it
      const ex = REAL ? -277 : 0, ez = REAL ? -127 : 0;
      c.strokeStyle = GOLDC; c.lineWidth = 2;
      c.beginPath(); c.ellipse(px(ex), px(ez), len(3850), len(3300), 0, 0, 6.2832); c.stroke();
      c.fillStyle = GOLDC; c.beginPath(); c.arc(px(0), px(0), 2.5, 0, 6.3); c.fill();
      label(c, 'Landing ellipse', px(ex), px(ez + 4800), 'center', 11.5, GOLDC);
      if (REAL) {
        label(c, 'Delta', px(-5200), px(-6300), 'center');
        label(c, 'Neretva Vallis', px(-12000), px(-9500), 'center');
        label(c, 'Jezero crater floor', px(14500), px(11000), 'center');
        label(c, 'Crater rim', px(-9000), px(14000), 'center');
        $('brief-region-cap').innerHTML = '<b>Approach</b> 60 km across, from the west. The ellipse is 7.7 × 6.6 km, beside the delta. <i>Image: ESA/DLR/FU-Berlin/NASA/JPL-Caltech</i>';
      } else {
        label(c, 'Delta', px(-3500), px(-2700), 'center');
        label(c, 'Neretva Vallis', px(-17500), px(-6800), 'center');
        label(c, 'Jezero crater floor', px(15500), px(-9500), 'center');
        label(c, 'Crater rim', px(-9500), px(15500), 'center');
      }
      north(c, S - 24, 30); scaleBar(c, 16, S - 14, len(10000), '10 km');
    }

    /* landing site: shaded relief of the terrain function, hazards over it */
    {
      const cv = $('brief-site'), S = cv.width, c = cv.getContext('2d');
      const HALF = 320, N = 300, cell = (HALF * 2) / N;
      const H = new Float32Array((N + 1) * (N + 1));
      for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) H[j * (N + 1) + i] = height(i * cell - HALF, j * cell - HALF);
      const small = canvasOf(N), sc = small.getContext('2d'), id = sc.createImageData(N, N), d = id.data;
      const grid = hazard.grid || (hazard.grid = ctx.buildHazardGrid());
      const lim = (ctx.playR || 150) - 14, sx = sunDir.x, sy = sunDir.y, sz = sunDir.z, EX = 1.6;       // relief exaggerated to read
      for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
        const k = j * (N + 1) + i, h00 = H[k], h10 = H[k + 1], h01 = H[k + N + 1];
        const x = (i + 0.5) * cell - HALF, z = (j + 0.5) * cell - HALF, r = Math.hypot(x, z);
        let nx = -(h10 - h00) / cell * EX, nz = -(h01 - h00) / cell * EX, il = 1 / Math.hypot(nx, 1, nz);
        const shade = clamp(0.3 + 0.95 * (nx * sx + sy + nz * sz) * il, 0.12, 1.25);
        const sand = ctx.sandMask ? ctx.sandMask(x, z) : 0;
        let R = lerp(168, 196, sand), G = lerp(124, 150, sand), B = lerp(90, 104, sand);
        R *= shade; G *= shade; B *= shade;
        if (Math.floor(h00 / 3) !== Math.floor(h10 / 3) || Math.floor(h00 / 3) !== Math.floor(h01 / 3)) { R *= 0.7; G *= 0.7; B *= 0.7; }   // 3 m contours
        const hz = grid.hazardAt(x, z);
        if (r > lim) { const f = 0.55 - 0.25 * smooth(lim, HALF, r); R *= f; G *= f; B *= f; }           // beyond the mapped circle
        else if (hz) { R = lerp(R, 214, 0.42); G = lerp(G, 58, 0.42); B = lerp(B, 42, 0.42); }
        else { R = lerp(R, 96, 0.13); G = lerp(G, 210, 0.13); B = lerp(B, 130, 0.13); }
        d.set([R, G, B, 255], (j * N + i) * 4);
      }
      sc.putImageData(id, 0, 0);
      c.imageSmoothingEnabled = true; c.imageSmoothingQuality = 'high';
      c.drawImage(small, 0, 0, S, S);
      const px = m => (m + HALF) / (HALF * 2) * S, len = m => m / (HALF * 2) * S;
      c.strokeStyle = 'rgba(242,228,190,.5)'; c.lineWidth = 1; c.setLineDash([3, 4]);
      c.beginPath(); c.arc(px(0), px(0), len(lim), 0, 6.2832); c.stroke(); c.setLineDash([]);
      // the outcrops: what the landing site was chosen for
      (ctx.outcrops || []).forEach(([x, z], i) => {
        c.save(); c.translate(px(x), px(z)); c.rotate(Math.PI / 4);
        c.fillStyle = INK; c.strokeStyle = 'rgba(20,12,8,.8)'; c.lineWidth = 1.5; c.fillRect(-4, -4, 8, 8); c.strokeRect(-4, -4, 8, 8); c.restore();
        label(c, String(i + 1), px(x) + 10, px(z) - 7, 'left', 11);
      });
      // the target, and the way in
      const T = ctx.target;
      c.strokeStyle = GOLDC; c.lineWidth = 2;
      c.beginPath(); c.arc(px(T.x), px(T.z), len(10), 0, 6.2832); c.stroke();
      c.beginPath(); c.moveTo(px(T.x) - 15, px(T.z)); c.lineTo(px(T.x) + 15, px(T.z)); c.moveTo(px(T.x), px(T.z) - 15); c.lineTo(px(T.x), px(T.z) + 15); c.stroke();
      label(c, 'Target', px(T.x), px(T.z) + 24, 'center', 11.5, GOLDC);
      c.strokeStyle = 'rgba(127,212,224,.9)'; c.fillStyle = 'rgba(127,212,224,.9)'; c.lineWidth = 1.6; c.setLineDash([6, 4]);
      c.beginPath(); c.moveTo(px(-314), px(T.z - 32)); c.lineTo(px(-205), px(T.z - 22)); c.stroke(); c.setLineDash([]);
      c.beginPath(); c.moveTo(px(-189), px(T.z - 21)); c.lineTo(px(-208), px(T.z - 32)); c.lineTo(px(-206), px(T.z - 13)); c.closePath(); c.fill();
      label(c, 'Delta front 1.3 km', px(-314), px(-282), 'left', 9.5);
      c.strokeStyle = INK; c.lineWidth = 1.2; c.beginPath(); c.moveTo(px(-240), px(-262)); c.lineTo(px(-301), px(-262)); c.stroke();
      c.fillStyle = INK; c.beginPath(); c.moveTo(px(-310), px(-262)); c.lineTo(px(-298), px(-268)); c.lineTo(px(-298), px(-256)); c.closePath(); c.fill();
      north(c, S - 24, 30); scaleBar(c, 16, S - 14, len(100), '100 m');
    }

  }
  function brief() {
    drawBrief();
    $('edl-brief').classList.add('on');
  }
  $('edl-begin').onclick = () => { $('edl-brief').classList.remove('on'); begin('intro'); };
  $('edl-skipintro').onclick = () => { if (E.stage === 'intro') endIntro(); };
  $('edl-back').onclick = () => { $('edl-brief').classList.remove('on'); ctx.onBack && ctx.onBack(); };

  function step(dt) {
    if (!E.active || E.stage === 'failed') return;
    E.st += dt;
    if (E.msgT > 0) { E.msgT -= dt; if (E.msgT <= 0) $('edl-call').classList.remove('on'); }
    stepInput(dt);
    if (E.high) stepHigh(dt); else stepLow(dt);
  }
  function render() {
    if (E.high) {
      renderer.autoClear = false;
      renderer.clear();
      renderer.render(space, bgCam);
      renderer.clearDepth();
      renderer.render(craftScene, craftCam);
      renderer.autoClear = true;
    } else renderer.render(scene, camera);
  }

  $('edl-go').onclick = () => { const r = E.result; leave(); ctx.onLanded(r); };
  $('edl-skip').onclick = () => { leave(); ctx.onLanded(null); };

  return {
    begin, brief, step, render, leave, state: E,
    get active() { return E.active; },
    // for tuning and smoke tests
    debug: { endIntro: () => endIntro(), sim: (n, dt = 1 / 60) => { for (let i = 0; i < n; i++) step(dt); }, profile: { altAt, velAt, gAt, gammaAt, rangeAt, heatAt }, toTerminal, setStage, touchdown, plain, hazard, space, bgCam, craftCam, craftScene },
  };
}
