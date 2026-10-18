/* ──────────────────────────────────────────────────────────────
   atmos.js — dust in the air
   Dust devils wandering across the plain (Perseverance has filmed
   many at Jezero; they are commonest around midday). The rest of
   the dust in the air is far too fine to see as specks: it is the
   haze, drawn by the fog in terrain.js.
   ────────────────────────────────────────────────────────────── */
import * as THREE from 'three';

const NOISE = `
  float h3( vec3 p ) { p = fract( p * 0.3183099 + 0.1 ); p *= 17.0; return fract( p.x * p.y * p.z * ( p.x + p.y + p.z ) ); }
  float n3( vec3 x ) {
    vec3 i = floor( x ), f = fract( x ); f = f * f * ( 3.0 - 2.0 * f );
    return mix( mix( mix( h3( i ), h3( i + vec3( 1, 0, 0 ) ), f.x ), mix( h3( i + vec3( 0, 1, 0 ) ), h3( i + vec3( 1, 1, 0 ) ), f.x ), f.y ),
                mix( mix( h3( i + vec3( 0, 0, 1 ) ), h3( i + vec3( 1, 0, 1 ) ), f.x ), mix( h3( i + vec3( 0, 1, 1 ) ), h3( i + vec3( 1, 1, 1 ) ), f.x ), f.y ), f.z );
  }`;

/* A dust devil: an open, flaring tube of swirling dust, thick at the foot, thinning
   and spreading as it rises, see-through at its edges where the line of sight
   crosses little of it. Lit on its sunward side. */
function devilMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: true,
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uT: { value: 0 }, uA: { value: 0 }, uSeed: { value: 0 } }]),
    vertexShader: `
      varying vec3 vN, vW; varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() {
        vUv = uv; vN = normalize( mat3( modelMatrix ) * normal );
        vec4 w = modelMatrix * vec4( position, 1.0 ); vW = w.xyz;
        vec4 mvPosition = viewMatrix * w;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: `
      uniform float uT, uA, uSeed; uniform vec3 uSun;
      varying vec3 vN, vW; varying vec2 vUv;
      #include <fog_pars_fragment>
      ${NOISE}
      void main() {
        float y = vUv.y, a = vUv.x * 6.2832;
        vec3 q = vec3( cos( a - uT * 2.2 + y * 7.0 ), sin( a - uT * 2.2 + y * 7.0 ), y * 9.0 - uT * 1.6 ) * vec3( 1.6, 1.6, 1.0 ) + uSeed;
        float swirl = n3( q ) * 0.6 + n3( q * 2.3 + 4.1 ) * 0.4;
        vec3 v = normalize( cameraPosition - vW );
        float edge = pow( abs( dot( normalize( vN ), v ) ), 1.4 );          // looking through the middle crosses the most dust
        float body = smoothstep( 0.0, 0.05, y ) * pow( 1.0 - y, 1.2 );       // dense near the ground, thinning upward
        float alpha = uA * body * edge * ( 0.35 + 0.9 * swirl );
        float lit = 0.62 + 0.38 * max( dot( normalize( vN ), uSun ), 0.0 );
        float fwd = pow( max( dot( -v, uSun ), 0.0 ), 6.0 );                 // backlit dust glows
        vec3 col = vec3( 0.66, 0.45, 0.31 ) * lit + vec3( 0.35, 0.3, 0.26 ) * fwd;
        gl_FragColor = vec4( col, clamp( alpha * ( 1.0 + fwd ), 0.0, 0.85 ) );
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  });
}

export function buildAtmos(scene, { count, height, sunV, wind, playR }) {

  /* dust devils */
  const geo = new THREE.CylinderGeometry(1.9, 0.55, 1, 28, 12, true);
  geo.translate(0, 0.5, 0);
  const devils = [];
  for (let i = 0; i < count; i++) {
    const mat = devilMaterial(); mat.uniforms.uSun = { value: sunV }; mat.uniforms.uSeed.value = i * 17.3;
    const m = new THREE.Mesh(geo, mat); m.frustumCulled = false; m.renderOrder = 2;
    scene.add(m);
    devils.push({ m, t: -i * 40 - 10, life: 0 });
  }
  const spawn = (d, cam) => {
    const ang = Math.random() * Math.PI * 2, r = 260 + Math.random() * Math.min(900, playR * 1.2);
    d.x = cam.x + Math.cos(ang) * r; d.z = cam.z + Math.sin(ang) * r;
    d.w = 6 + Math.random() * 14; d.h = 70 + Math.random() * 170;
    d.vx = wind.x * (2.5 + Math.random() * 3) + (Math.random() - 0.5) * 1.5; d.vz = wind.z * (2.5 + Math.random() * 3) + (Math.random() - 0.5) * 1.5;
    d.life = 70 + Math.random() * 70; d.t = 0;
  };

  return {
    devils,
    step(dt, camera, dim = 0) {
      const cam = camera.position;
      for (const d of devils) {
        d.t += dt;
        if (d.t < 0) { d.m.visible = false; continue; }
        if (d.life <= 0) spawn(d, cam);
        d.x += d.vx * dt; d.z += d.vz * dt;
        const fade = Math.min(1, d.t / 12, (d.life - d.t) / 12);
        if (d.t > d.life) { d.life = 0; d.t = -10 - Math.random() * 40; d.m.visible = false; continue; }
        d.m.visible = true;
        d.m.position.set(d.x, height(d.x, d.z) - 1, d.z);
        d.m.scale.set(d.w, d.h, d.w);
        const u = d.m.material.uniforms; u.uT.value += dt; u.uA.value = 1.1 * Math.max(0, fade) * (1 - dim);
      }
    },
  };
}
