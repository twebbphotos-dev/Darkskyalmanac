/* ──────────────────────────────────────────────────────────────
   mars.js — stripped-down Mars environment
   Lifted from the Dark Sky Almanac spacecraft viewer's "mars" env
   and simplified for the rover mini-game. Same palette, fog,
   lighting and ground recipe, minus the ephemeris / label / picking
   machinery the viewer needs.
   ────────────────────────────────────────────────────────────── */
import * as THREE from 'three';

export const MARS = {
  skyTop:      0x8a634a,      // the Almanac's 0x5a4436, lifted and cooled toward what Mastcam-Z sees
  skyHorizon:  0xc39878,
  fog:         0xbc8c68,
  fogNear:     30,
  fogFar:      720,           // long enough that the crater rim shows through the haze
  groundPal:   ['#3f261a', '#5a3524', '#6e4330', '#7f5139', '#8e5f44'],
  rock:        0x3d2519,
  hemiSky:     0xc69c7e,
  hemiGround:  0x8a5e44,      // sunlit dust throws a lot of light back up
  hemiInt:     1.9,           // dusty sky: a third of the light is skylight, so shadows are filled, not black          // dusty sky: shadows on Mars are filled, not black
  sunColor:    0xffe6cc,
  sunEl:       38,
  sunAz:       140,
  envIntensity: 0.35,
  exposure:    1.25,          // exposed the way the rover cameras are: sunlit ground mid-bright, not dim
};

const DEG = Math.PI / 180;

/* ── one colour grade for all bare ground ───────────────────────
   The Almanac's palette is a deep brick red. Real rover photographs
   of Jezero and Gale are paler and more ochre: tan dust, grey-brown
   rock. Rather than re-pick every colour in the game, every ground
   material runs its albedo through this one function, so the terrain,
   the rocks' dust, the far plain and the drawn regional map all move
   together and still match each other.                              */
export const GRADE = { sat: 0.80, gain: [2.48, 3.08, 2.71] };   // 3.0: redder — butterscotch-rust, as in Mastcam-Z natural colour, not tan-grey
export const GRADE_GLSL = `
  vec3 marsGrade( vec3 c ) {
    float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
    c = mix( vec3( l ), c, ${GRADE.sat.toFixed(3)} );
    return c * vec3( ${GRADE.gain.map(v => v.toFixed(3)).join(', ')} );
  }`;
/* add the grade to any built-in material, after its map and vertex colours */
/* `baked`: for unlit materials whose colours were drawn with the warm cast of
   the light already in them. The grade has to act on the bare albedo, as it
   does on lit ground, or the two drift apart — so take the cast out, grade,
   and put it back. */
export const LIGHT_CAST = [1.0, 0.79, 0.61];
export function applyGrade(mat, baked = false) {
  const prev = mat.onBeforeCompile;
  const cast = `vec3( ${LIGHT_CAST.map(v => v.toFixed(3)).join(', ')} )`;
  const line = baked ? `diffuseColor.rgb = marsGrade( diffuseColor.rgb / ${cast} ) * ${cast};` : 'diffuseColor.rgb = marsGrade( diffuseColor.rgb );';
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\n' + GRADE_GLSL)
      .replace('#include <color_fragment>', '#include <color_fragment>\n' + line);
  };
  mat.needsUpdate = true;
  return mat;
}
/* the same grade for a colour picked in JS (sRGB hex in, THREE.Color out) */
export function gradeColor(hex) {
  const c = new THREE.Color(hex);
  const l = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
  c.r = (l + (c.r - l) * GRADE.sat) * GRADE.gain[0];
  c.g = (l + (c.g - l) * GRADE.sat) * GRADE.gain[1];
  c.b = (l + (c.b - l) * GRADE.sat) * GRADE.gain[2];
  return c;
}
/* ...and for canvas drawing: css colour string in, graded css string out */
export function gradeCss(r, g, b, a = 1) {
  const c = gradeColor(new THREE.Color().setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace).getHex());
  const o = c.clone().convertLinearToSRGB();
  const q = v => Math.round(Math.max(0, Math.min(1, v)) * 255);
  return `rgba(${q(o.r)},${q(o.g)},${q(o.b)},${a})`;
}

/* ── deterministic RNG so the terrain looks the same every load ── */
export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5;  s >>>= 0;
    return s / 4294967296;
  };
}

/* ── value-noise texture, quantised into a palette ──────────────
   Simplified stand-in for the viewer's noise texture generator.   */
export function noiseTexture(size, cells, palette, seed, grain) {
  const rand = rng(seed);
  const g = cells + 1;
  const grid = new Float32Array(g * g);
  for (let i = 0; i < grid.length; i++) grid[i] = rand();

  const sample = (u, v) => {
    const x = u * cells, y = v * cells;
    const x0 = Math.floor(x), y0 = Math.floor(y);
    const fx = x - x0, fy = y - y0;
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const at = (a, b) => grid[(b % cells) * g + (a % cells)];
    const a = at(x0, y0), b = at(x0 + 1, y0);
    const c = at(x0, y0 + 1), d = at(x0 + 1, y0 + 1);
    return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
  };

  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(size, size);

  const cols = palette.map(h => [
    parseInt(h.slice(1, 3), 16),
    parseInt(h.slice(3, 5), 16),
    parseInt(h.slice(5, 7), 16),
  ]);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      // two octaves of fbm
      let n = sample(u, v) * 0.65 + sample(u * 3.1, v * 3.1) * 0.35;
      n = Math.min(0.999, Math.max(0, n + (rand() - 0.5) * grain));
      const f = n * (cols.length - 1);
      const i0 = Math.floor(f), t = f - i0;
      const c0 = cols[i0], c1 = cols[Math.min(cols.length - 1, i0 + 1)];
      const o = (y * size + x) * 4;
      img.data[o]     = c0[0] + (c1[0] - c0[0]) * t;
      img.data[o + 1] = c0[1] + (c1[1] - c0[1]) * t;
      img.data[o + 2] = c0[2] + (c1[2] - c0[2]) * t;
      img.data[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* ── ground textures: regolith with a pebble lag ───────────────
   Albedo and bump are drawn from the same pebble layout, so each
   pebble gets its own little highlight and relief.                */
export function groundTextures(seed = 11) {
  const size = 1024;
  const map = noiseTexture(size, 22, MARS.groundPal, seed, 0.14);
  const bump = noiseTexture(size, 48, ['#5c5c5c', '#808080', '#a2a2a2'], seed + 6, 0.10);
  bump.colorSpace = THREE.NoColorSpace;

  const rand = rng(seed * 7 + 3);
  const cm = map.image.getContext('2d'), cb = bump.image.getContext('2d');
  const stones = ['#2e1f18', '#3b2920', '#4a3327', '#5a3f30', '#6b4c3a'];

  // Texture space maps to the ground with canvas +x = world +x and canvas +y = world −z,
  // and the sun stands to the +x, +z side — so highlights go up-right, shadows down-left.
  for (let i = 0; i < 460; i++) {
    const x = rand() * size, y = rand() * size;
    const r = 1.4 + Math.pow(rand(), 3) * 7;             // mostly grit, a few real pebbles
    const col = stones[(rand() * stones.length) | 0];
    const nv = 5 + ((rand() * 4) | 0), rot = rand() * 6.3, sq = 0.65 + rand() * 0.35;
    const rim = []; for (let k = 0; k < nv; k++) rim.push(0.72 + rand() * 0.4);
    const stone = (c, grow) => {
      c.beginPath();
      for (let k = 0; k < nv; k++) {
        const a = rot + (k / nv) * 6.2832, rr = r * rim[k] * grow;
        c[k ? 'lineTo' : 'moveTo'](Math.cos(a) * rr, Math.sin(a) * rr * sq);
      }
      c.closePath();
    };

    // draw wrapped copies so the tile stays seamless
    for (const ox of [-size, 0, size]) for (const oy of [-size, 0, size]) {
      const px = x + ox, py = y + oy;
      if (px < -12 || px > size + 12 || py < -12 || py > size + 12) continue;

      cm.save(); cm.translate(px - r * 0.34, py + r * 0.30);       // shadow, down-sun
      cm.fillStyle = 'rgba(18,10,7,0.42)'; stone(cm, 1.08); cm.fill(); cm.restore();
      cm.save(); cm.translate(px, py);
      cm.fillStyle = col; stone(cm, 1); cm.fill();
      cm.clip();                                                   // dusted, sunlit shoulder
      cm.fillStyle = 'rgba(196,146,110,0.34)';
      cm.beginPath(); cm.arc(r * 0.42, -r * 0.4, r * 0.8, 0, 6.3); cm.fill();
      cm.restore();

      cb.save(); cb.translate(px, py);
      const g = cb.createRadialGradient(0, 0, 0, 0, 0, r * 1.1);
      g.addColorStop(0, 'rgba(250,250,250,0.9)');
      g.addColorStop(0.75, 'rgba(205,205,205,0.7)');
      g.addColorStop(1, 'rgba(128,128,128,0)');
      cb.fillStyle = g; stone(cb, 1.12); cb.fill();
      cb.restore();
    }
  }
  map.needsUpdate = bump.needsUpdate = true;
  return { map, bump };
}

/* ── sky dome: butterscotch gradient, small sun, blue-white aureole ─
   Run through the same tone-mapping and colour pipeline as the scene,
   with the horizon set to the fog colour, so distant hills dissolve
   into the sky instead of ending at a seam.                          */
function skyDome(top, horizon, sunDir) {
  const geo = new THREE.SphereGeometry(1900, 40, 20);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      cTop: { value: new THREE.Color(top) },
      cBot: { value: new THREE.Color(horizon) },
      sunDir: { value: sunDir.clone() },
      dusk: { value: 0 },
    },
    vertexShader: `
      varying vec3 vDir;
      void main(){
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`,
    fragmentShader: `
      uniform vec3 cTop; uniform vec3 cBot; uniform vec3 sunDir; uniform float dusk; varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        float t = clamp(d.y * 1.5 + 0.02, 0.0, 1.0);
        vec3 col = mix(cBot, cTop, pow(t, 0.8));
        float s = max(dot(d, sunDir), 0.0);
        // Mars: the sky is tan, but forward-scattering dust makes it blue-white round the sun
        col += vec3(0.62, 0.72, 0.9) * (pow(s, 28.0) * 0.30 + pow(s, 5.0) * 0.07);
        // dusk: the sky dims to brown-gray and the glow round the low sun turns deep blue,
        // because fine dust scatters blue light forward, close to the sun's direction
        col = mix(col, mix(vec3(0.030, 0.022, 0.018), vec3(0.006, 0.006, 0.010), pow(t, 0.6)), dusk);      // linear, to meet the dusk fog
        col += dusk * vec3(0.20, 0.42, 1.0) * (pow(s, 90.0) * 1.5 + pow(s, 24.0) * 0.4 + pow(s, 8.0) * 0.05);
        col += vec3(1.0, 0.97, 0.92) * smoothstep(0.99990, 0.99996, s) * 6.0;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const m = new THREE.Mesh(geo, mat);
  m.frustumCulled = false;
  m.renderOrder = -1;
  return m;
}

/* ── the whole environment, assembled ─────────────────────────── */
export function buildMars(scene, renderer) {
  scene.fog = new THREE.Fog(MARS.fog, MARS.fogNear, MARS.fogFar);

  const el = MARS.sunEl * DEG, az = MARS.sunAz * DEG;
  const sunDir = new THREE.Vector3(
    Math.sin(az) * Math.cos(el),
    Math.sin(el),
    -Math.cos(az) * Math.cos(el)
  ).normalize();

  const sky = skyDome(MARS.skyTop, MARS.fog, sunDir);
  scene.add(sky);

  // surface textures — the terrain mesh in terrain.js wears these
  const { map, bump } = groundTextures(11);
  map.anisotropy = bump.anisotropy = renderer.capabilities.getMaxAnisotropy();

  const hemi = new THREE.HemisphereLight(MARS.hemiSky, MARS.hemiGround, MARS.hemiInt);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(MARS.sunColor, 2.5);
  sun.position.copy(sunDir).multiplyScalar(120);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 320;
  const S = 38;
  Object.assign(sun.shadow.camera, { left: -S, right: S, top: S, bottom: -S });
  sun.shadow.bias = -0.0009;
  sun.shadow.normalBias = 0.05;
  scene.add(sun, sun.target);

  scene.environmentIntensity = MARS.envIntensity;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = MARS.exposure;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  return { sun, sunDir, sky, map, bump, hemi };
}
