/* Moon rocks in 3D: the turning sample viewers on moonrocks.html. NASA Astromaterials 3D photogrammetry models
   (public domain), reduced (src/lrv-game/tools/sample-*.{py,mjs}). Bundled into moonrocks.bundle.js. */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// One viewer in the given box: drag to turn, pinch or scroll to zoom, full screen on request. Resolves once the model shows.
export function mountRock(box, url) {
  const cv = document.createElement('canvas'), fs = document.createElement('button');
  fs.className = 'mr-fs'; fs.type = 'button'; fs.textContent = 'Full screen'; box.append(cv, fs);
  const r = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true }); r.outputColorSpace = THREE.SRGBColorSpace;
  const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(30, 1, 0.001, 10);
  // A soft room to reflect: glossy grains (olivine, glass) catch highlights as the rock turns; matte ones barely change
  const pm = new THREE.PMREMGenerator(r); sc.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; sc.environmentIntensity = 0.55; pm.dispose();
  sc.add(new THREE.HemisphereLight(0xffffff, 0x404040, 0.8)); const key = new THREE.DirectionalLight(0xffffff, 2.4); key.position.set(0.5, 0.8, 0.6); sc.add(key);
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
