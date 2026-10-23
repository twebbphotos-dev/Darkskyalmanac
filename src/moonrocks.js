/* Moon rocks in 3D: the turning sample viewers on moonrocks.html. NASA Astromaterials 3D photogrammetry models
   (public domain), reduced (src/lrv-game/tools/sample-*.{py,mjs}). Bundled into moonrocks.bundle.js. */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

// One viewer in the given box: drag to turn, pinch or scroll to zoom, full screen on request. Resolves once the model shows.
export function mountRock(box, url) {
  const cv = document.createElement('canvas'), fs = document.createElement('button');
  fs.className = 'mr-fs'; fs.type = 'button'; fs.textContent = 'Full screen'; box.append(cv, fs);
  const r = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true }); r.outputColorSpace = THREE.SRGBColorSpace;
  const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(30, 1, 0.001, 10);
  // What the rock reflects: a lunar sky (black, a faint Milky Way, stars, the Sun) over pale regolith. Never shown, only
  // seen in the glossy grains, so highlights are small and warm-grey instead of a bright white room.
  const pm = new THREE.PMREMGenerator(r); sc.environment = pm.fromEquirectangular(moonSky()).texture; sc.environmentIntensity = 1; pm.dispose();
  sc.add(new THREE.HemisphereLight(0xfff6ea, 0x4a4540, 0.55)); const key = new THREE.DirectionalLight(0xfff8f0, 2.6); key.position.set(0.5, 0.8, 0.6); sc.add(key);
  const piv = new THREE.Group(); sc.add(piv); let rx = 0.3, ry = 0, zoom = 1, seen = true;
  const fit = () => { const big = box.classList.contains('big'), W = big ? innerWidth : box.clientWidth || 320, H = big ? innerHeight : Math.round(Math.min(W * 0.75, 420));
    r.setPixelRatio(Math.min(2, devicePixelRatio || 1)); r.setSize(W, H); cam.aspect = W / H; cam.updateProjectionMatrix(); };
  fit(); addEventListener('resize', fit);
  fs.addEventListener('click', () => { box.classList.toggle('big'); fs.textContent = box.classList.contains('big') ? 'Close' : 'Full screen'; document.body.style.overflow = box.classList.contains('big') ? 'hidden' : ''; fit(); });
  const pts = new Map(); let pinch = 0;      // one finger turns it, two pinch to zoom
  cv.addEventListener('pointerdown', e => { pts.set(e.pointerId, [e.clientX, e.clientY]); cv.setPointerCapture(e.pointerId); pinch = 0; });
  cv.addEventListener('pointermove', e => { const p = pts.get(e.pointerId); if (!p) return;
    if (pts.size === 1) { ry += (e.clientX - p[0]) * 0.01; rx += (e.clientY - p[1]) * 0.01; }
    pts.set(e.pointerId, [e.clientX, e.clientY]);
    if (pts.size === 2) { const [a, b] = [...pts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (pinch) zoom = Math.max(0.6, Math.min(4, zoom * d / pinch)); pinch = d; } });
  const up = e => { pts.delete(e.pointerId); pinch = 0; }; cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', e => { e.preventDefault(); zoom = Math.max(0.6, Math.min(4, zoom * Math.exp(-e.deltaY * 0.0015))); }, { passive: false });
  new IntersectionObserver(e => { seen = e[0].isIntersecting; if (seen) loop(); }).observe(box);      // only drawn while on screen
  function loop() { if (!seen && !box.classList.contains('big')) return; if (!pts.size) ry += 0.005; piv.rotation.set(rx, ry, 0); cam.position.set(0, 0, 0.09 / zoom); r.render(sc, cam); requestAnimationFrame(loop); }
  return new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(url).then(g => { const o = g.scene, b = new THREE.Box3().setFromObject(o), s = 0.05 / b.getSize(new THREE.Vector3()).length();
    o.scale.setScalar(s); o.position.copy(b.getCenter(new THREE.Vector3())).multiplyScalar(-s); piv.add(o); loop(); })
    .catch(e => { r.dispose(); cv.remove(); fs.remove(); throw e; });
}

// Equirectangular float sky, built once: ground below the horizon, a tilted Milky Way band with mottling, stars, and a
// small bright Sun in the key light's direction.
let SKY = null;
function moonSky() {
  if (SKY) return SKY;
  const W = 512, H = 256, d = new Float32Array(W * H * 4), sun = new THREE.Vector3(0.5, 0.8, 0.6).normalize(), gal = new THREE.Vector3(0.35, 0.5, -0.79).normalize();
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const v = new THREE.Vector3();
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const th = (y + 0.5) / H * Math.PI, ph = (x + 0.5) / W * Math.PI * 2;
    v.set(-Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph));
    let c;
    if (v.y < 0) { const g = 0.16 + 0.05 * Math.sin(ph * 23 + th * 31) * Math.sin(ph * 7); c = [g * 1.02, g, g * 0.94]; }   // regolith, sunlit
    else {
      const b = v.dot(gal), mw = Math.exp(-b * b / 0.02) * (0.6 + 0.4 * Math.sin(ph * 17 + th * 11) * Math.cos(ph * 5 - th * 9));
      c = [0.004 + 0.07 * mw, 0.004 + 0.066 * mw, 0.005 + 0.06 * mw];
      if (rnd() < 0.004) { const s = 0.3 + rnd() * 1.5; c = [c[0] + s, c[1] + s, c[2] + s * 1.05]; }
      const sd = v.dot(sun); if (sd > 0.9994) c = [60, 58, 55]; else if (sd > 0.995) { const k = (sd - 0.995) / 0.0044 * 0.6; c = [c[0] + k, c[1] + k, c[2] + k]; }
    }
    const i = (y * W + x) * 4; d[i] = c[0]; d[i + 1] = c[1]; d[i + 2] = c[2]; d[i + 3] = 1;
  }
  SKY = new THREE.DataTexture(d, W, H, THREE.RGBAFormat, THREE.FloatType); SKY.mapping = THREE.EquirectangularReflectionMapping; SKY.needsUpdate = true;
  return SKY;
}
