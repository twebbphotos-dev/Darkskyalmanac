// Hubble: NASA's simple model has the aperture door as a flat plate lying shut on the end of a sealed tube.
// This gives the door some thickness, a black inner face, hinge drives and a latch, opens up the tube (dark lining,
// light baffles, secondary mirror on its four vanes, the 2.4 m main mirror at the bottom) and adds one animation:
// the door swinging from shut to 105° open, as the real one does. Sizes follow NASA's Hubble media guide.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dequantize, meshopt, prune, compactPrimitive } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';
await MeshoptDecoder.ready; await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });
const [src, dst] = process.argv.slice(2), doc = await io.read(src); await doc.transform(dequantize());
const buf = doc.getRoot().listBuffers()[0], scene = doc.getRoot().listScenes()[0], hst = doc.getRoot().listNodes().find(n => n.getMesh()), W = hst.getWorldMatrix();
const RIM = 258.3, R = 57.8, HZ = -59.5, T = 3.2;                 // top of the tube, its radius, the hinge line, door thickness (model units ≈ 2.6 cm)
const world = v => [W[0] * v[0] + W[4] * v[1] + W[8] * v[2] + W[12], W[1] * v[0] + W[5] * v[1] + W[9] * v[2] + W[13], W[2] * v[0] + W[6] * v[1] + W[10] * v[2] + W[14]];
// 1. lift the old door and the disc sealing the tube out of the main mesh; keep the door's top skin (it carries the foil texture)
const skin = { P: [], U: [] }; let skinMat = null, took = 0;
for (const p of hst.getMesh().listPrimitives()) { const P = p.getAttribute('POSITION'), U = p.getAttribute('TEXCOORD_0'), I = p.getIndices(), A = I.getArray(), out = [], v = [0, 0, 0], u = [0, 0];
  for (let t = 0; t < A.length; t += 3) { const w = [0, 1, 2].map(j => world(P.getElement(A[t + j], v)));
    const door = w.every(q => q[1] > RIM + .15), cap = w.every(q => Math.abs(q[1] - RIM) < .06) && p.getMaterial().getName() === 'hbltel_1';
    if (door && w.every(q => q[1] > RIM + 1)) { skinMat = p.getMaterial(); for (let j = 0; j < 3; j++) { skin.P.push(w[j]); U.getElement(A[t + j], u); skin.U.push([u[0], u[1]]); } }
    if (door || cap) took++; else out.push(A[t], A[t + 1], A[t + 2]); }
  if (out.length !== A.length) { I.setArray(new A.constructor(out)); compactPrimitive(p); } }
console.log('removed', took, 'triangles; door skin', skin.P.length / 3);
// 2. a small kit for building parts
const mat = (name, c, metal, rough) => doc.createMaterial(name).setBaseColorFactor([...c, 1]).setMetallicFactor(metal).setRoughnessFactor(rough);
const BLACK = mat('hst_black', [.022, .022, .026], 0, .95), METAL = mat('hst_metal', [.66, .67, .69], .7, .42), MIRROR = mat('hst_mirror', [.93, .94, .96], 1, .04), FOIL = mat('hst_foil', [.78, .79, .8], .85, .3);
class Geo { constructor() { this.P = []; this.N = []; this.U = []; this.I = []; }
  quad(a, b, c, d, n, uv) { const o = this.P.length / 3; for (const q of [a, b, c, d]) { this.P.push(...q); this.N.push(...n); this.U.push(...(uv || [0, 0])); } this.I.push(o, o + 1, o + 2, o, o + 2, o + 3); }
  tri(a, b, c, n, ua, ub, uc) { const o = this.P.length / 3; [a, b, c].forEach((q, j) => { this.P.push(...q); this.N.push(...n); this.U.push(...([ua, ub, uc][j] || [0, 0])); }); this.I.push(o, o + 1, o + 2); }
  box(lo, hi) { const [x0, y0, z0] = lo, [x1, y1, z1] = hi;
    this.quad([x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1], [1, 0, 0]); this.quad([x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [x0, y0, z0], [-1, 0, 0]);
    this.quad([x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [0, 1, 0]); this.quad([x0, y0, z1], [x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [0, -1, 0]);
    this.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1]); this.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1]); }
  // a tube or rod along an axis ('y' or 'x'); inward = seen from inside
  cyl(axis, c, r, a0, a1, seg, inward, caps) { const pt = (ang, a, rr = r) => axis === 'y' ? [c[0] + Math.sin(ang) * rr, a, c[1] + Math.cos(ang) * rr] : [a, c[0] + Math.cos(ang) * rr, c[1] + Math.sin(ang) * rr], nr = ang => axis === 'y' ? [Math.sin(ang), 0, Math.cos(ang)] : [0, Math.cos(ang), Math.sin(ang)];
    for (let i = 0; i < seg; i++) { const g0 = i / seg * 2 * Math.PI, g1 = (i + 1) / seg * 2 * Math.PI, o = this.P.length / 3, s = inward ? -1 : 1;
      for (const [g, a] of [[g0, a0], [g1, a0], [g1, a1], [g0, a1]]) { this.P.push(...pt(g, a)); this.N.push(...nr(g).map(x => x * s)); this.U.push(0, 0); }
      const flip = (axis === 'x') !== !!inward; if (flip) this.I.push(o, o + 2, o + 1, o, o + 3, o + 2); else this.I.push(o, o + 1, o + 2, o, o + 2, o + 3);
      if (caps) for (const [a, sg] of [[a0, -1], [a1, 1]]) { const n = axis === 'y' ? [0, sg, 0] : [sg, 0, 0], ctr = pt(0, a, 0), p0 = pt(g0, a), p1 = pt(g1, a), ccw = (axis === 'y') === (sg > 0); ccw ? this.tri(ctr, p0, p1, n) : this.tri(ctr, p1, p0, n); } } }
  ring(y, r0, r1, seg, up) { for (let i = 0; i < seg; i++) { const g0 = i / seg * 2 * Math.PI, g1 = (i + 1) / seg * 2 * Math.PI, p = (g, r) => [Math.sin(g) * r, y, Math.cos(g) * r];
      up ? this.quad(p(g0, r0), p(g0, r1), p(g1, r1), p(g1, r0), [0, 1, 0]) : this.quad(p(g0, r0), p(g1, r0), p(g1, r1), p(g0, r1), [0, -1, 0]); } }
  prim(m) { const p = doc.createPrimitive().setMaterial(m)
      .setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(new Float32Array(this.P)).setBuffer(buf))
      .setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(new Float32Array(this.N)).setBuffer(buf))
      .setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint16Array(this.I)).setBuffer(buf));
    if (m.getBaseColorTexture()) p.setAttribute('TEXCOORD_0', doc.createAccessor().setType('VEC2').setArray(new Float32Array(this.U)).setBuffer(buf)); return p; } }
// 3. the door, built around its hinge line so it can swing
const H = [0, RIM, HZ], rel = q => [q[0] - H[0], q[1] - H[1], q[2] - H[2]], top = new Geo(), inner = new Geo(), fit = new Geo(), Y0 = .5, Y1 = Y0 + T;
for (let t = 0; t < skin.P.length; t += 3) { const q = [0, 1, 2].map(j => { const r = rel(skin.P[t + j]); r[1] = Y1; return r; }); top.tri(q[0], q[1], q[2], [0, 1, 0], skin.U[t], skin.U[t + 1], skin.U[t + 2]); }
// outline of the door (the plate's own D shape: straight along the hinge, round at the far end), walked once round
const edges = new Map(); for (let t = 0; t < skin.P.length; t += 3) for (let j = 0; j < 3; j++) { const a = skin.P[t + j], b = skin.P[t + (j + 1) % 3], ka = a[0].toFixed(1) + ',' + a[2].toFixed(1), kb = b[0].toFixed(1) + ',' + b[2].toFixed(1); if (edges.has(kb + '>' + ka)) edges.delete(kb + '>' + ka); else edges.set(ka + '>' + kb, [a, b, skin.U[t + j], skin.U[t + (j + 1) % 3]]); }
for (const [a, b, ua, ub] of edges.values()) { const A = rel(a), B = rel(b), dx = B[0] - A[0], dz = B[2] - A[2], l = Math.hypot(dx, dz) || 1, n = [dz / l, 0, -dx / l];
  const o = top.P.length / 3; for (const [q, y, u] of [[A, Y1, ua], [A, Y0, ua], [B, Y0, ub], [B, Y1, ub]]) { top.P.push(q[0], y, q[2]); top.N.push(...n); top.U.push(...u); } top.I.push(o, o + 1, o + 2, o, o + 2, o + 3); }
for (let t = 0; t < skin.P.length; t += 3) { const q = [0, 1, 2].map(j => { const r = rel(skin.P[t + j]); r[1] = Y0; return r; }); inner.tri(q[0], q[2], q[1], [0, -1, 0]); }      // the side that faces the mirror: flat black
for (const x of [-34, 34]) { fit.cyl('x', [0, 0], 2.4, x - 7, x + 7, 14, false, true); fit.box([x - 5, -1, 0], [x + 5, Y1 - .4, 3.2]); }                  // hinge knuckles and the lugs that carry the door
fit.box([-4, Y0 - 1.2, 113], [4, Y1 - .5, 117.6]);                                                                                                      // latch tongue at the far end
const door = doc.createNode('door').setTranslation(H).setMesh(doc.createMesh('door').addPrimitive(top.prim(FOIL)).addPrimitive(inner.prim(BLACK)).addPrimitive(fit.prim(METAL)));
scene.addChild(door);
// 4. what the open door reveals, and what holds it
const blk = new Geo(), met = new Geo(), mir = new Geo(), RI = 51;
blk.cyl('y', [0, 0], RI, -40, RIM, 40, true); blk.ring(RIM, RI, R, 40, true);                                 // tube lining and the rim of the opening
for (let k = 0; k < 9; k++) { const y = RIM - 14 - k * 16.5; blk.ring(y, RI - 6.5, RI, 40, true); blk.ring(y - .6, RI - 6.5, RI, 40, false); blk.cyl('y', [0, 0], RI - 6.5, y - .6, y, 40, true); }   // light baffles
blk.cyl('y', [0, 0], 9, 112, 128, 20, false, true);                                                           // secondary mirror housing…
for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + Math.PI / 4, c = Math.cos(a), s = Math.sin(a), g = new Geo(); g.box([9, 116, -.5], [RI, 124, .5]);
  for (let i = 0; i < g.P.length; i += 3) { const x = g.P[i], z = g.P[i + 2]; blk.P.push(x * c - z * s, g.P[i + 1], x * s + z * c); const nx = g.N[i], nz = g.N[i + 2]; blk.N.push(nx * c - nz * s, g.N[i + 1], nx * s + nz * c); blk.U.push(0, 0); }
  const o = blk.P.length / 3 - g.P.length / 3; blk.I.push(...g.I.map(i => i + o)); }                              // …on its four vanes
blk.cyl('y', [0, 0], 9.5, -38, 34, 20, false, true); blk.ring(-39.5, 0, RI, 40, true);                        // central baffle; floor
mir.ring(-38.2, 9.5, 46, 48, true);                                                                           // the 2.4 m main mirror
for (const x of [-34, 34]) { met.box([x - 6, RIM - 15, HZ - 2.6], [x + 6, RIM - .2, -44]); }                    // hinge brackets on the tube
met.cyl('x', [RIM, HZ], 1.3, -27, 27, 12, false, false); met.cyl('x', [RIM - 3.2, HZ + 1], 3.3, -24, -13, 14, false, true);   // torque tube and the motor (rotary drive actuator) that turns it
met.box([-5, RIM - 9, 55.5], [5, RIM + .3, 60.5]);                                                            // latch housing
scene.addChild(doc.createNode('hst_inside').setMesh(doc.createMesh('hst_inside').addPrimitive(blk.prim(BLACK)).addPrimitive(mir.prim(MIRROR)).addPrimitive(met.prim(METAL))));
// 5. the swing: shut → 105° open, easing in and out, over 4 seconds
const N = 17, times = [], quats = []; for (let i = 0; i < N; i++) { const k = i / (N - 1), e = k * k * (3 - 2 * k), a = -105 * Math.PI / 180 * e; times.push(k * 4); quats.push(Math.sin(a / 2), 0, 0, Math.cos(a / 2)); }
const smp = doc.createAnimationSampler().setInput(doc.createAccessor().setType('SCALAR').setArray(new Float32Array(times)).setBuffer(buf)).setOutput(doc.createAccessor().setType('VEC4').setArray(new Float32Array(quats)).setBuffer(buf)).setInterpolation('LINEAR');
doc.createAnimation('door').addSampler(smp).addChannel(doc.createAnimationChannel().setTargetNode(door).setTargetPath('rotation').setSampler(smp));
await doc.transform(prune(), meshopt({ encoder: MeshoptEncoder, level: 'medium', quantizePosition: 14, quantizeNormal: 8, quantizeTexcoord: 12 }));
await io.write(dst, doc); console.log('wrote', dst);
