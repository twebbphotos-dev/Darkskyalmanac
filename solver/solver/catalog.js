/*
 * catalog.js - binary catalog parsing and spatial queries.
 *
 * stars.bin   "SPS1" | u32 count | f32 ra[n] | f32 dec[n] | i16 mag*100[n]
 *             sorted by declination so a field query is a binary-searched band.
 * quads_X.bin "SPQ2" | u32 count | f32 dmin | f32 dmax
 *             | u16 abArcmin[n] | u16 code[n][4] | u32 starIdx[n][4]
 *             sorted by code[0]: a ~0.5% search window versus ~8% if sorted by
 *             separation, so each lookup scans an order of magnitude less.
 *             Separation is still filtered, inside the scan.
 */

const dec4 = (buf, off) => new DataView(buf).getUint32(off, true);

function magic(buf, want) {
  const b = new Uint8Array(buf, 0, 4);
  const s = String.fromCharCode(b[0], b[1], b[2], b[3]);
  if (s !== want) throw new Error(`bad file magic: got "${s}", want "${want}"`);
}

export function parseStars(buf) {
  magic(buf, 'SPS1');
  const n = dec4(buf, 4);
  let o = 8;
  const ra = new Float32Array(buf.slice(o, o + 4 * n)); o += 4 * n;
  const dec = new Float32Array(buf.slice(o, o + 4 * n)); o += 4 * n;
  const mag = new Int16Array(buf.slice(o, o + 2 * n));

  // unit vectors, precomputed once: projection and verification hit these hard
  const vx = new Float32Array(n), vy = new Float32Array(n), vz = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const cd = Math.cos(dec[i]);
    vx[i] = cd * Math.cos(ra[i]);
    vy[i] = cd * Math.sin(ra[i]);
    vz[i] = Math.sin(dec[i]);
  }
  // Cumulative count by magnitude, in 0.1 mag steps. Lets the solver ask for
  // "the brightest stars at about this sky density" without sorting a field's
  // worth of stars on every verification pass.
  const MAGBINS = 260, MAG0 = -2.0, MAGSTEP = 0.1;
  const cum = new Int32Array(MAGBINS);
  for (let i = 0; i < n; i++) {
    let b = Math.round((mag[i] / 100 - MAG0) / MAGSTEP);
    if (b < 0) b = 0;
    if (b >= MAGBINS) b = MAGBINS - 1;
    cum[b]++;
  }
  for (let b = 1; b < MAGBINS; b++) cum[b] += cum[b - 1];

  return { n, ra, dec, mag, vx, vy, vz, cum, MAG0, MAGSTEP, MAGBINS };
}

const SKY_SQDEG = 41252.96;

/** Faintest magnitude whose all-sky density stays at or below perSqDeg. */
export function magForDensity(stars, perSqDeg) {
  const want = Math.max(1, perSqDeg * SKY_SQDEG);
  const { cum, MAG0, MAGSTEP, MAGBINS } = stars;
  for (let b = 0; b < MAGBINS; b++) {
    if (cum[b] >= want) return MAG0 + b * MAGSTEP;
  }
  return 99;
}

export function parseQuads(buf) {
  magic(buf, 'SPQ2');
  const dv = new DataView(buf);
  const n = dv.getUint32(4, true);
  const dmin = dv.getFloat32(8, true);
  const dmax = dv.getFloat32(12, true);
  let o = 16;
  const dist = new Uint16Array(buf.slice(o, o + 2 * n)); o += 2 * n;
  const code = new Uint16Array(buf.slice(o, o + 8 * n)); o += 8 * n;
  const idx = new Uint32Array(buf.slice(o, o + 16 * n));
  return { n, dmin, dmax, dist, code, idx };
}

/** First index with dist[i] >= target. */
export function lowerBound(dist, target) {
  let lo = 0, hi = dist.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (dist[mid] < target) lo = mid + 1; else hi = mid;
  }
  return lo;
}

/** First quad index with code[i*4] >= target, over the stride-4 code array. */
export function lowerBoundCode0(code, n, target) {
  let lo = 0, hi = n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (code[mid * 4] < target) lo = mid + 1; else hi = mid;
  }
  return lo;
}

/**
 * Catalog star indices within `radiusRad` of unit vector `c`, brighter than
 * `magLimit`. Uses the declination sort to cut the search to a band.
 */
export function starsNear(stars, c, radiusRad, magLimit = 99) {
  const { n, dec, mag, vx, vy, vz } = stars;
  const cDec = Math.asin(Math.max(-1, Math.min(1, c[2])));
  const lo = cDec - radiusRad, hi = cDec + radiusRad;

  let a = 0, b = n;
  { // binary search lower edge of the dec band
    let l = 0, h = n;
    while (l < h) { const m = (l + h) >> 1; if (dec[m] < lo) l = m + 1; else h = m; }
    a = l;
  }
  { // upper edge
    let l = 0, h = n;
    while (l < h) { const m = (l + h) >> 1; if (dec[m] <= hi) l = m + 1; else h = m; }
    b = l;
  }

  const magCut = magLimit * 100;
  const cosR = Math.cos(radiusRad);
  const out = [];
  for (let i = a; i < b; i++) {
    if (mag[i] > magCut) continue;
    if (vx[i] * c[0] + vy[i] * c[1] + vz[i] * c[2] >= cosR) out.push(i);
  }
  return out;
}

export function starVec(stars, i) {
  return [stars.vx[i], stars.vy[i], stars.vz[i]];
}
