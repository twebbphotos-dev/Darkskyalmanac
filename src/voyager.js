/* Voyager 1 — interactive model (NASA/JPL-Caltech 3D model), live distance,
   and where it sits in your sky. Bundled with three.js into voyager.bundle.js. */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const $ = id => document.getElementById(id);
const D2R = Math.PI / 180, AU = 149597870.7, DAY = 86400000, C = 299792.458;

/* ───────────── Where Voyager 1 is ─────────────
   Straight-line outbound track toward RA 17h13m, Dec +12.0° (Ophiuchus) at
   16.99 km/s from the Sun, anchored to NASA's one-light-day moment
   (2026-11-18 06:16:07 UTC, 173.145 AU from Earth). Earth from JPL mean
   elements. Checks against NASA's mid-June 2026 figure to within 0.01 bn km. */
const V_RA = 258.35 * D2R, V_DEC = 12.03 * D2R, OB = 23.43928 * D2R;
const U = (() => { const x = Math.cos(V_DEC) * Math.cos(V_RA), y = Math.cos(V_DEC) * Math.sin(V_RA), z = Math.sin(V_DEC);
  return [x, y * Math.cos(OB) + z * Math.sin(OB), -y * Math.sin(OB) + z * Math.cos(OB)]; })();
const V_AUYR = 16.99 * 86400 * 365.25 / AU, T_LD = Date.parse('2026-11-18T06:16:07Z'), R_LD = 172.3842;
const LAUNCH = Date.parse('1977-09-05T12:56:00Z');
function earthHelio(t) {
  const T = (t / DAY + 2440587.5 - 2451545) / 36525;
  const a = 1.00000261 + 0.00000562 * T, e = 0.01671123 - 0.00004392 * T, I = (-0.00001531 - 0.01294668 * T) * D2R;
  const L = 100.46457166 + 35999.37244981 * T, wb = 102.93768193 + 0.32327364 * T, w = wb * D2R;
  let M = (((L - wb) % 360) + 360) % 360 * D2R, E = M;
  for (let i = 0; i < 8; i++) E -= (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
  const xp = a * (Math.cos(E) - e), yp = a * Math.sqrt(1 - e * e) * Math.sin(E);
  return [Math.cos(w) * xp - Math.sin(w) * yp, (Math.sin(w) * xp + Math.cos(w) * yp) * Math.cos(I), (Math.sin(w) * xp + Math.cos(w) * yp) * Math.sin(I)];
}
function voyager(t) {
  const r = R_LD + V_AUYR * (t - T_LD) / (365.25 * DAY), E = earthHelio(t);
  const d = Math.hypot(r * U[0] - E[0], r * U[1] - E[1], r * U[2] - E[2]);
  return { sun: r, earth: d };
}

/* ───────────── Live numbers ───────────── */
const nf = n => Math.round(n).toLocaleString('en-US');
function hms(s) { const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = Math.floor(s % 60);
  return h + 'h ' + String(m).padStart(2, '0') + 'm ' + String(x).padStart(2, '0') + 's'; }
function tick() {
  const t = Date.now(), v = voyager(t), v2 = voyager(t + 1000);
  $('vg-earthkm').textContent = nf(v.earth * AU) + ' km';
  $('vg-earthmi').textContent = nf(v.earth * AU / 1.609344) + ' miles · ' + v.earth.toFixed(2) + ' AU';
  $('vg-light').textContent = hms(v.earth * AU / C);
  $('vg-sunau').textContent = v.sun.toFixed(2) + ' AU';
  $('vg-sunsub').textContent = (v.sun * AU / 1e9).toFixed(3) + ' billion km';
  const rate = (v2.earth - v.earth) * AU;              // km per second, relative to Earth
  $('vg-speed').textContent = '16.99 km/s';
  $('vg-speedsub').textContent = nf(16.99 * 3600) + ' km/h outward from the Sun' + (Math.abs(rate) > 1 ? ' · ' + (rate > 0 ? 'pulling away from' : 'closing on') + ' Earth at ' + Math.abs(rate).toFixed(1) + ' km/s today' : '');
  const yrs = (t - LAUNCH) / (365.2425 * DAY), y = Math.floor(yrs), d = Math.floor((yrs - y) * 365.2425);
  $('vg-age').textContent = y + ' years, ' + d + ' days';
  const ld = T_LD - t;
  if (ld > 0) { const dd = Math.floor(ld / DAY), hh = Math.floor(ld % DAY / 3600000);
    $('vg-ld').textContent = dd + ' days ' + hh + ' h';
    $('vg-ldsub').textContent = 'Until its signal takes a full day to reach us · ' + ZCLTZ.fmtDate(new Date(T_LD), { month: 'short', day: 'numeric', year: 'numeric' }) + ', ' + ZCLTZ.fmtTime(new Date(T_LD));
  } else {
    $('vg-ldl').textContent = 'One light-day';
    $('vg-ld').textContent = 'Passed';
    $('vg-ldsub').textContent = 'Its signal has taken over a day to reach us since ' + ZCLTZ.fmtDate(new Date(T_LD), { month: 'short', day: 'numeric', year: 'numeric' });
  }
}
function skyNow() {
  const L = ZCLTZ.loc(), t = Date.now();
  const lst = (280.46061837 + 360.98564736629 * (t / DAY + 2440587.5 - 2451545) + L.lng) * D2R, H = lst - V_RA, la = L.lat * D2R;
  const alt = Math.asin(Math.sin(la) * Math.sin(V_DEC) + Math.cos(la) * Math.cos(V_DEC) * Math.cos(H));
  const az = Math.atan2(-Math.cos(V_DEC) * Math.sin(H), Math.sin(V_DEC) * Math.cos(la) - Math.cos(V_DEC) * Math.sin(la) * Math.cos(H));
  const dirs = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
  const dir = dirs[Math.round(((az / D2R + 360) % 360) / 45) % 8];
  $('vg-sky').textContent = alt > 0 ? Math.round(alt / D2R) + '° up in the ' + dir : 'Below your horizon';
  $('vg-skysub').textContent = 'In Ophiuchus, near the border with Hercules. Far too faint to see — by the time its radio signal reaches Earth it carries less than a billionth of a billionth of a watt.';
}

/* ───────────── The model ───────────── */
const PARTS = [
  { id: 'hga', p: [0, 2.3, 0], name: 'High-gain antenna',
    txt: 'A 3.7-metre dish that has pointed back at Earth for almost fifty years. It transmits with about 23 watts — less than a fridge light bulb — and NASA’s 70-metre Deep Space Network dishes still hear it.' },
  { id: 'bus', p: [0.95, 0.25, 0], name: 'The bus & Golden Record',
    txt: 'A ten-sided aluminium frame holding the computers, radios and fuel. Its three computers together have about 69 KB of memory. Bolted to one side is the Golden Record — sounds and images of Earth for anyone who finds it.' },
  { id: 'rtg', p: [0, -0.1, 3.5], name: 'Nuclear power (RTGs)',
    txt: 'Three plutonium-238 generators turn decay heat into electricity. They made about 470 watts at launch; the output falls about 4 watts a year, so instruments are switched off one by one to keep the spacecraft alive.' },
  { id: 'sci', p: [0.06, 0.5, -3.4], name: 'Science platform',
    txt: 'The cameras and spectrometers that photographed Jupiter, Saturn and Titan. They took the Family Portrait and the Pale Blue Dot on 14 February 1990, then were switched off for good to save power.' },
  { id: 'mag', p: [0, 6.1, 9.1], name: 'Magnetometer boom',
    txt: 'A 13-metre folding mast that holds the magnetic-field sensors far from the spacecraft’s own magnetism. In 2012 its readings helped show Voyager 1 had left the Sun’s bubble.' },
  { id: 'pws', p: [2.6, -1.35, 2.73], name: 'Plasma-wave antennas',
    txt: 'Two 10-metre whips that listen to waves in the thin gas between the stars. Their “sound” of denser interstellar plasma confirmed the heliopause crossing on 25 August 2012.' },
];
const VIEWS = {
  overview: { pos: [12.5, 4.5, -8.5], tgt: [0, 2.4, 2.6] },
  home:     { pos: [2.2, -6.5, -3.2], tgt: [0.05, 12, 1.2] },
  close:    { pos: [3.4, 2.2, -4.6], tgt: [0, 0.9, -1.2] },
};

let renderer, scene, camera, controls, model, sunSprite, earthSprite, running = true, tween = null, lastInteract = 0;
const hotEls = [];
function starfield() {
  const n = 4200, pos = new Float32Array(n * 3), col = new Float32Array(n * 3), g = new THREE.BufferGeometry();
  const band = new THREE.Vector3(0.3, 0.2, 1).normalize();
  for (let i = 0; i < n; i++) {
    let v = new THREE.Vector3().randomDirection();
    if (i < n * 0.45) { // Milky Way: pull toward a great circle
      const d = v.dot(band); v.addScaledVector(band, -d * (0.85 + Math.random() * 0.15)).normalize();
    }
    v.multiplyScalar(900); pos.set([v.x, v.y, v.z], i * 3);
    const k = Math.random(), b = 0.35 + Math.pow(Math.random(), 3) * 0.9;
    const c = k < .2 ? [1, .85, .7] : k < .35 ? [.75, .85, 1] : [1, 1, 1];
    col.set([c[0] * b, c[1] * b, c[2] * b], i * 3);
  }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const m = new THREE.PointsMaterial({ size: 1.6, sizeAttenuation: false, vertexColors: true, depthWrite: false, fog: false });
  return new THREE.Points(g, m);
}
function glowTexture(spikes, rgb) {
  const s = 256, cv = document.createElement('canvas'); cv.width = cv.height = s;
  const x = cv.getContext('2d'), g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.06, 'rgba(' + rgb + ',0.95)');
  g.addColorStop(0.2, 'rgba(' + rgb + ',0.25)'); g.addColorStop(1, 'rgba(' + rgb + ',0)');
  x.fillStyle = g; x.fillRect(0, 0, s, s);
  if (spikes) {
    x.globalCompositeOperation = 'lighter';
    for (const a of [0, Math.PI / 2]) {
      x.save(); x.translate(s / 2, s / 2); x.rotate(a);
      const lg = x.createLinearGradient(-s / 2, 0, s / 2, 0);
      lg.addColorStop(0, 'rgba(255,240,220,0)'); lg.addColorStop(0.5, 'rgba(255,240,220,.7)'); lg.addColorStop(1, 'rgba(255,240,220,0)');
      x.fillStyle = lg; x.fillRect(-s / 2, -1.2, s, 2.4); x.restore();
    }
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function init() {
  const cv = $('vg-cv');
  renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.3;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  scene = new THREE.Scene(); scene.background = new THREE.Color(0x05050a);
  camera = new THREE.PerspectiveCamera(38, 1, 0.05, 2000);
  scene.add(starfield());
  // The Sun: 172 AU away it is a dazzling star, not a disc. The dish faces it (and Earth, 0.3° away).
  const SUN_DIR = new THREE.Vector3(0.012, 1, -0.006).normalize();
  sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(true, '255,236,200'), blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sunSprite.position.copy(SUN_DIR).multiplyScalar(800); sunSprite.scale.set(60, 60, 1); scene.add(sunSprite);
  const EARTH_DIR = SUN_DIR.clone().applyAxisAngle(new THREE.Vector3(1, 0, 0), 0.3 * D2R * 8); // exaggerated ×8 so it’s visible
  earthSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(false, '120,170,255'), blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  earthSprite.position.copy(EARTH_DIR).multiplyScalar(800); earthSprite.scale.set(9, 9, 1); scene.add(earthSprite);
  const sun = new THREE.DirectionalLight(0xfff1dd, 3.4); sun.position.copy(SUN_DIR).multiplyScalar(30);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02;
  Object.assign(sun.shadow.camera, { left: -14, right: 14, top: 14, bottom: -14, near: 1, far: 70 });
  scene.add(sun); scene.add(sun.target);
  const rim = new THREE.DirectionalLight(0x8fb2ff, 0.9); rim.position.set(-8, -3, 10); scene.add(rim);
  scene.add(new THREE.HemisphereLight(0x9fb3d9, 0x2a2018, 0.55));
  const fill = new THREE.DirectionalLight(0xffe2c0, 0.9); fill.position.set(9, 2, -7); scene.add(fill);
  controls = new OrbitControls(camera, cv);
  Object.assign(controls, { enableDamping: true, dampingFactor: 0.08, enablePan: false, minDistance: 3, maxDistance: 38, autoRotate: true, autoRotateSpeed: 0.35 });
  controls.addEventListener('start', () => { tween = null; lastInteract = performance.now(); controls.autoRotate = false; });
  controls.addEventListener('end', () => { lastInteract = performance.now(); });
  setView('overview', true);
  new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).load('models/voyager1.glb', g => {
    model = g.scene;
    model.traverse(o => {
      if (!o.isMesh) return;
      if (/cube/i.test(o.name)) { o.visible = false; return; }   // a 1 m helper cube left in the source file
      o.castShadow = o.receiveShadow = true;
      if (o.material) { o.material.roughness = /dark/i.test(o.material.name) ? 0.55 : 0.62; o.material.metalness = 0.12; if (o.material.map) o.material.map.anisotropy = 8; }
    });
    scene.add(model); $('vg-loading').style.display = 'none';
  }, undefined, () => { $('vg-loading').textContent = 'The 3D model could not load.'; });
  const hot = $('vg-hot');
  PARTS.forEach((p, i) => {
    const b = document.createElement('button'); b.className = 'vg-dot'; b.textContent = i + 1; b.setAttribute('aria-label', p.name);
    b.addEventListener('click', () => showPart(i)); hot.appendChild(b); hotEls.push(b);
  });
  resize(); window.addEventListener('resize', resize);
  new IntersectionObserver(e => { running = e[0].isIntersecting; if (running) loop(); }).observe(cv);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) loop(); });
  loop();
}
function resize() {
  const cv = renderer.domElement, w = cv.clientWidth, h = cv.clientHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h;
  camera.fov = w / h < 1.1 ? 50 : 38; camera.updateProjectionMatrix();
}
function setView(k, instant) {
  $('vg-info').classList.remove('open'); hotEls.forEach(b => b.classList.remove('on'));
  const v = VIEWS[k]; document.querySelectorAll('#vg-views [data-v]').forEach(b => b.classList.toggle('on', b.dataset.v === k));
  $('vg-homenote').classList.toggle('show', k === 'home'); if (k === 'home') $('vg-info').classList.remove('open');
  const to = { p: new THREE.Vector3(...v.pos), t: new THREE.Vector3(...v.tgt) };
  if (camera.aspect < 1.1 && k === 'close') to.p.sub(to.t).multiplyScalar(1.25).add(to.t);
  controls.autoRotate = k === 'overview';
  if (instant) { camera.position.copy(to.p); controls.target.copy(to.t); controls.update(); return; }
  tween = { from: { p: camera.position.clone(), t: controls.target.clone() }, to, t0: performance.now(), dur: 1400 };
}
function showPart(i) {
  const p = PARTS[i];
  hotEls.forEach((b, j) => b.classList.toggle('on', j === i));
  $('vg-info').innerHTML = '<div class="vg-infon"><span>' + (i + 1) + '</span>' + p.name + '</div><div class="vg-infot">' + p.txt + '</div>';
  $('vg-info').classList.add('open'); $('vg-homenote').classList.remove('show');
}
const _v = new THREE.Vector3(), _d = new THREE.Vector3(), ray = new THREE.Raycaster();
let frame = 0;
function placeHotspots() {
  const cv = renderer.domElement, w = cv.clientWidth, h = cv.clientHeight, check = model && (frame++ % 6 === 0);
  PARTS.forEach((p, i) => {
    _v.set(...p.p); const dist = _v.distanceTo(camera.position); _v.project(camera);
    const el = hotEls[i], on = _v.z < 1 && Math.abs(_v.x) < 1.05 && Math.abs(_v.y) < 1.05;
    el.style.transform = 'translate(' + ((_v.x + 1) / 2 * w - 11).toFixed(1) + 'px,' + ((1 - _v.y) / 2 * h - 11).toFixed(1) + 'px)';
    if (check) {                                   // hide dots tucked behind the spacecraft
      _d.set(...p.p).sub(camera.position).normalize(); ray.set(camera.position, _d); ray.far = dist - 0.8;
      el.dataset.hid = ray.intersectObject(model, true).length ? '1' : '';
    }
    el.style.opacity = on && !el.dataset.hid && $('vg-parts').classList.contains('on') ? 1 : 0;
    el.style.pointerEvents = el.style.opacity === '1' ? 'auto' : 'none';
  });
  // Sun & Earth labels in the look-home view
  [['vg-sunlab', sunSprite], ['vg-earthlab', earthSprite]].forEach(([id, s]) => {
    _v.copy(s.position).project(camera); const el = $(id), on = _v.z < 1 && Math.abs(_v.x) < .95 && Math.abs(_v.y) < .95;
    el.style.opacity = on ? 1 : 0; el.style.transform = 'translate(' + ((_v.x + 1) / 2 * w).toFixed(1) + 'px,' + ((1 - _v.y) / 2 * h).toFixed(1) + 'px)';
  });
}
function loop() {
  if (!running || document.hidden) return;
  requestAnimationFrame(loop);
  if (tween) {
    const k = Math.min(1, (performance.now() - tween.t0) / tween.dur), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    camera.position.lerpVectors(tween.from.p, tween.to.p, e); controls.target.lerpVectors(tween.from.t, tween.to.t, e);
    if (k >= 1) tween = null;
  }
  if (!controls.autoRotate && !tween && lastInteract && performance.now() - lastInteract > 12000 && $('vg-views').querySelector('.on')?.dataset.v === 'overview') controls.autoRotate = true;
  controls.update(); renderer.render(scene, camera); placeHotspots();
}

document.querySelectorAll('#vg-views [data-v]').forEach(b => b.addEventListener('click', () => setView(b.dataset.v)));
$('vg-parts').addEventListener('click', function () { this.classList.toggle('on'); if (!this.classList.contains('on')) $('vg-info').classList.remove('open'); });
$('vg-info').addEventListener('click', () => { $('vg-info').classList.remove('open'); hotEls.forEach(b => b.classList.remove('on')); });
tick(); skyNow(); setInterval(tick, 1000); setInterval(skyNow, 60000);
window.__vg = () => ({ camera, controls, setView });
try { init(); } catch (e) { $('vg-loading').textContent = '3D view needs WebGL, which this browser has turned off.'; }
