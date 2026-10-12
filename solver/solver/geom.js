/*
 * geom.js - vectors, attitude determination, and the quad geometric hash.
 *
 * The hash here must mirror tools/build_catalog.py exactly, including the
 * canonical ordering swaps, or catalog codes will not match image codes.
 *
 * No DOM, no imports. Runs in Node and in a Web Worker unchanged.
 */

export const CODE_LO = -0.25;
export const CODE_HI = 1.25;
export const R_CIRCLE2 = 0.5; // (sqrt(1/2))^2

export function vnorm(v) {
  const n = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / n, v[1] / n, v[2] / n];
}
export function vdot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
export function vcross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
export function vadd(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
export function vscale(a, s) { return [a[0] * s, a[1] * s, a[2] * s]; }

export function radecToVec(ra, dec) {
  const cd = Math.cos(dec);
  return [cd * Math.cos(ra), cd * Math.sin(ra), Math.sin(dec)];
}
export function vecToRaDec(v) {
  const ra = Math.atan2(v[1], v[0]);
  return [ra < 0 ? ra + 2 * Math.PI : ra, Math.asin(Math.max(-1, Math.min(1, v[2])))];
}
export function angsep(a, b) {
  // numerically stable for small angles
  const d = [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const s = [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  return 2 * Math.atan2(Math.hypot(d[0], d[1], d[2]), Math.hypot(s[0], s[1], s[2]));
}

/* ------------------------------------------------------------------ eigen */

/** Cyclic Jacobi eigendecomposition of a symmetric n x n matrix (row-major). */
export function jacobiSym(Ain, n) {
  const A = Float64Array.from(Ain);
  const V = new Float64Array(n * n);
  for (let i = 0; i < n; i++) V[i * n + i] = 1;
  for (let sweep = 0; sweep < 80; sweep++) {
    let off = 0;
    for (let i = 0; i < n; i++)
      for (let j = i + 1; j < n; j++) off += A[i * n + j] * A[i * n + j];
    if (off < 1e-26) break;
    for (let p = 0; p < n - 1; p++) {
      for (let q = p + 1; q < n; q++) {
        const apq = A[p * n + q];
        if (Math.abs(apq) < 1e-32) continue;
        const theta = (A[q * n + q] - A[p * n + p]) / (2 * apq);
        const sgn = theta >= 0 ? 1 : -1;
        const t = sgn / (Math.abs(theta) + Math.sqrt(theta * theta + 1));
        const c = 1 / Math.sqrt(t * t + 1);
        const s = t * c;
        for (let k = 0; k < n; k++) {
          const akp = A[k * n + p], akq = A[k * n + q];
          A[k * n + p] = c * akp - s * akq;
          A[k * n + q] = s * akp + c * akq;
        }
        for (let k = 0; k < n; k++) {
          const apk = A[p * n + k], aqk = A[q * n + k];
          A[p * n + k] = c * apk - s * aqk;
          A[q * n + k] = s * apk + c * aqk;
        }
        for (let k = 0; k < n; k++) {
          const vkp = V[k * n + p], vkq = V[k * n + q];
          V[k * n + p] = c * vkp - s * vkq;
          V[k * n + q] = s * vkp + c * vkq;
        }
      }
    }
  }
  const vals = new Float64Array(n);
  for (let i = 0; i < n; i++) vals[i] = A[i * n + i];
  return { values: vals, vectors: V }; // eigenvector i is column i of V
}

/* --------------------------------------------------------------- attitude */

/**
 * Davenport q-method solution to Wahba's problem.
 * body[i] and ref[i] are unit vectors; returns R with body = R * ref.
 */
export function wahba(body, ref, weights) {
  const B = new Float64Array(9);
  for (let i = 0; i < body.length; i++) {
    const w = weights ? weights[i] : 1;
    const a = body[i], b = ref[i];
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 3; c++) B[r * 3 + c] += w * a[r] * b[c];
  }
  const sigma = B[0] + B[4] + B[8];
  const z = [B[1 * 3 + 2] - B[2 * 3 + 1], B[2 * 3 + 0] - B[0 * 3 + 2], B[0 * 3 + 1] - B[1 * 3 + 0]];
  const S = new Float64Array(9);
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++) S[r * 3 + c] = B[r * 3 + c] + B[c * 3 + r];

  const K = new Float64Array(16);
  K[0] = sigma;
  for (let i = 0; i < 3; i++) { K[i + 1] = z[i]; K[(i + 1) * 4] = z[i]; }
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      K[(r + 1) * 4 + (c + 1)] = S[r * 3 + c] - (r === c ? sigma : 0);

  const { values, vectors } = jacobiSym(K, 4);
  let best = 0;
  for (let i = 1; i < 4; i++) if (values[i] > values[best]) best = i;
  let q = [vectors[0 * 4 + best], vectors[1 * 4 + best], vectors[2 * 4 + best], vectors[3 * 4 + best]];
  const qn = Math.hypot(q[0], q[1], q[2], q[3]) || 1;
  q = q.map((x) => x / qn);
  // Davenport yields the attitude (frame) matrix, which is the transpose of the
  // active quaternion rotation; conjugating q gives body = R * ref directly.
  return quatToMat([q[0], -q[1], -q[2], -q[3]]);
}

export function quatToMat(q) {
  const [w, x, y, z] = q;
  return [
    [1 - 2 * (y * y + z * z), 2 * (x * y - w * z), 2 * (x * z + w * y)],
    [2 * (x * y + w * z), 1 - 2 * (x * x + z * z), 2 * (y * z - w * x)],
    [2 * (x * z - w * y), 2 * (y * z + w * x), 1 - 2 * (x * x + y * y)],
  ];
}

export function matApply(R, v) {
  return [
    R[0][0] * v[0] + R[0][1] * v[1] + R[0][2] * v[2],
    R[1][0] * v[0] + R[1][1] * v[1] + R[1][2] * v[2],
    R[2][0] * v[0] + R[2][1] * v[1] + R[2][2] * v[2],
  ];
}
export function matApplyT(R, v) {
  return [
    R[0][0] * v[0] + R[1][0] * v[1] + R[2][0] * v[2],
    R[0][1] * v[0] + R[1][1] * v[1] + R[2][1] * v[2],
    R[0][2] * v[0] + R[1][2] * v[1] + R[2][2] * v[2],
  ];
}

/* -------------------------------------------------------------- quad hash */

/**
 * Geometric hash of four unit vectors, computed in a tangent plane centred on
 * the quad itself. Returns { code:[4], abDeg, order:[4] } where order indexes
 * into the input array in canonical A,B,C,D sequence, or null if degenerate.
 */
export function quadCode(v0, v1, v2, v3) {
  const V = [v0, v1, v2, v3];
  let best = 2, bi = 0, bj = 1;
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      const d = vdot(V[i], V[j]);
      if (d < best) { best = d; bi = i; bj = j; }
    }
  }
  const rest = [];
  for (let k = 0; k < 4; k++) if (k !== bi && k !== bj) rest.push(k);

  const A = V[bi], B = V[bj], C = V[rest[0]], D = V[rest[1]];
  const abDeg = (Math.acos(Math.max(-1, Math.min(1, best))) * 180) / Math.PI;

  let centre = vadd(A, B);
  const cn = Math.hypot(centre[0], centre[1], centre[2]);
  if (cn < 1e-12) return null;
  centre = vscale(centre, 1 / cn);

  const up = Math.abs(centre[2]) > 0.95 ? [0, 1, 0] : [0, 0, 1];
  let e1 = vcross(up, centre);
  const e1n = Math.hypot(e1[0], e1[1], e1[2]);
  if (e1n < 1e-12) return null;
  e1 = vscale(e1, 1 / e1n);
  const e2 = vcross(centre, e1);

  const proj = (v) => {
    const w = vdot(v, centre);
    if (w <= 1e-6) return null;
    const p = vscale(v, 1 / w);
    return [vdot(p, e1), vdot(p, e2)];
  };
  const pa = proj(A), pb = proj(B), pc = proj(C), pd = proj(D);
  if (!pa || !pb || !pc || !pd) return null;

  const dx = pb[0] - pa[0], dy = pb[1] - pa[1];
  const dl = Math.hypot(dx, dy);
  if (dl < 1e-12) return null;
  const s = Math.SQRT2 / dl;
  const rot = Math.PI / 4 - Math.atan2(dy, dx);
  const cr = Math.cos(rot) * s, sr = Math.sin(rot) * s;
  const xf = (p) => {
    const qx = p[0] - pa[0], qy = p[1] - pa[1];
    return [cr * qx - sr * qy, sr * qx + cr * qy];
  };
  let [xc, yc] = xf(pc);
  let [xd, yd] = xf(pd);

  for (const [x, y] of [[xc, yc], [xd, yd]]) {
    const ddx = x - 0.5, ddy = y - 0.5;
    if (ddx * ddx + ddy * ddy > R_CIRCLE2) return null;
  }

  let order = [bi, bj, rest[0], rest[1]];
  if (xc + xd > 1) {
    xc = 1 - xc; yc = 1 - yc; xd = 1 - xd; yd = 1 - yd;
    order = [order[1], order[0], order[2], order[3]];
  }
  if (xc > xd) {
    let t = xc; xc = xd; xd = t;
    t = yc; yc = yd; yd = t;
    order = [order[0], order[1], order[3], order[2]];
  }

  const code = [xc, yc, xd, yd];
  for (const c of code) if (c < CODE_LO || c > CODE_HI) return null;
  return { code, abDeg, order };
}

export function quantiseCode(c) {
  const v = Math.round(((c - CODE_LO) / (CODE_HI - CODE_LO)) * 65535);
  return v < 0 ? 0 : v > 65535 ? 65535 : v;
}
export const CODE_SCALE = 65535 / (CODE_HI - CODE_LO); // code units -> uint16 units
