/*
 * detect.js - star centroid extraction from a grayscale frame.
 *
 * Two deliberate choices, both learned from frames that broke earlier versions:
 *
 * 1. No full connected-component pass. A label array for a 6 MP frame costs
 *    ~24 MB on top of the image, which is how a phone tab gets killed. Local
 *    maxima plus windowed centroiding finds the same stars for far less.
 *
 * 2. Background is measured in an annulus around each candidate, not read off
 *    an interpolated tile grid. A landscape frame has a hard edge where the
 *    ridge meets the sky; interpolating across it puts the background far too
 *    low on the sky side, which inflates measured flux so badly that noise
 *    outranks real stars. The tile grid is still used, but only to pick
 *    candidates cheaply.
 */

const DEF = {
  tile: 128,          // background tile size in px
  sigmaK: 4.0,        // candidate threshold above local background
  snrMin: 5.0,        // peak must clear this many sigma of local noise
  minPix: 3,          // reject single hot pixels
  minSep: 6,          // deduplication radius in px
  maxStars: 400,
  edge: 6,            // ignore this margin
  maxFill: 0.55,      // a window this full is extended structure, not a star
  coreR: null,        // centroid half-window; measured from the frame if null
  // Retry strategies (off by default; the worker turns them on when the
  // plain pass does not solve):
  shape: false,       // reject elongated blobs and one-sided edges (cloud rims, silhouettes)
  maxEllip: 0.5,      //   ellipticity above this is not a star
  edgeK: 5,           //   ring brighter on one side by this many sigma = an edge
  rank: 'flux',       // 'flux' or 'snr' (sharp points first, not bright glow)
  spread: 0,          // >0: interleave the best star of each of spread x spread cells
};

/* Ring brightness in 8 directions: a star sits on a flat ring; the rim of a
   cloud or a head against the sky sits on a ring bright on one side only. */
function lopsided(gray, w, px, py, r, sigma) {
  let lo = Infinity, hi = -Infinity;
  for (let k = 0; k < 8; k++) {
    const a = k * Math.PI / 4, cx = Math.round(px + r * Math.cos(a)), cy = Math.round(py + r * Math.sin(a));
    let s = 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) s += gray[(cy + dy) * w + cx + dx];
    s /= 9; if (s < lo) lo = s; if (s > hi) hi = s;
  }
  return (hi - lo) / sigma;
}

/* A clipped star has a flat top: most of its 5x5 core sits within 3% of the
   peak. In a stretched image clipping happens well below the frame maximum,
   so the absolute saturation test alone misses it. Nebula knots and faint
   stars are peaked, not flat. */
function flatTop(gray, w, px, py) {
  const pk = gray[py * w + px], lim = pk * 0.97;
  if (pk <= 0) return false;
  let n = 0;
  for (let dy = -2; dy <= 2; dy++) {
    const row = (py + dy) * w;
    for (let dx = -2; dx <= 2; dx++) if (gray[row + px + dx] >= lim) n++;
  }
  return n >= 15;
}

export function toGray(rgba, w, h) {
  const g = new Float32Array(w * h);
  for (let i = 0, p = 0; i < g.length; i++, p += 4) {
    g[i] = 0.2126 * rgba[p] + 0.7152 * rgba[p + 1] + 0.0722 * rgba[p + 2];
  }
  return g;
}

/**
 * Median by quickselect, in place, over the first n entries.
 * Sorting instead costs about a second on a 6 MP frame, because this runs
 * twice per background tile and once per candidate annulus.
 */
function median(a, n) {
  if (n <= 0) return 0;
  const k = n >> 1;
  let lo = 0, hi = n - 1;
  while (lo < hi) {
    const p = a[(lo + hi) >> 1];
    let i = lo, j = hi;
    while (i <= j) {
      while (a[i] < p) i++;
      while (a[j] > p) j--;
      if (i <= j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }
    }
    if (k <= j) hi = j;
    else if (k >= i) lo = i;
    else break;
  }
  return a[k];
}

function tiledBackground(gray, w, h, tile) {
  const nx = Math.max(1, Math.ceil(w / tile));
  const ny = Math.max(1, Math.ceil(h / tile));
  const bg = new Float32Array(nx * ny);
  const sg = new Float32Array(nx * ny);
  const samples = new Float64Array(Math.ceil((tile / 3) * (tile / 3)) + 8);
  const sigmas = [];

  for (let ty = 0; ty < ny; ty++) {
    for (let tx = 0; tx < nx; tx++) {
      const x0 = tx * tile, x1 = Math.min(w, x0 + tile);
      const y0 = ty * tile, y1 = Math.min(h, y0 + tile);
      let n = 0;
      for (let y = y0; y < y1; y += 3) {
        for (let x = x0; x < x1; x += 3) samples[n++] = gray[y * w + x];
      }
      if (!n) { bg[ty * nx + tx] = 0; sg[ty * nx + tx] = 1; continue; }
      const med = median(samples, n);   // quickselect permutes `samples`
      for (let i = 0; i < n; i++) samples[i] = Math.abs(samples[i] - med);
      const mad = median(samples, n);
      const s = Math.max(0.3, mad * 1.4826);
      bg[ty * nx + tx] = med;
      sg[ty * nx + tx] = s;
      sigmas.push(s);
    }
  }

  // A dark foreground reads as almost noiseless, which would drop its
  // threshold to nothing and flood the list with terrain speckle. Floor every
  // tile against the frame's typical noise.
  sigmas.sort((a, b) => a - b);
  const floor = Math.max(0.5, 0.55 * (sigmas[sigmas.length >> 1] || 1));
  for (let i = 0; i < sg.length; i++) if (sg[i] < floor) sg[i] = floor;

  return { bg, sg, nx, ny, tile };
}

/** Robust background and noise in an annulus around (px, py). */
function annulus(gray, w, h, px, py, rIn, rOut, buf) {
  let n = 0;
  const y0 = Math.max(0, py - rOut), y1 = Math.min(h - 1, py + rOut);
  const x0 = Math.max(0, px - rOut), x1 = Math.min(w - 1, px + rOut);
  const i2 = rIn * rIn, o2 = rOut * rOut;
  for (let y = y0; y <= y1; y++) {
    const dy = y - py, dy2 = dy * dy;
    const row = y * w;
    for (let x = x0; x <= x1; x++) {
      const dx = x - px;
      const d2 = dx * dx + dy2;
      if (d2 < i2 || d2 > o2) continue;
      buf[n++] = gray[row + x];
      if (n >= buf.length) break;
    }
  }
  if (n < 8) return null;
  const med = median(buf, n);
  for (let i = 0; i < n; i++) buf[i] = Math.abs(buf[i] - med);
  const mad = median(buf, n);
  return { bg: med, sigma: Math.max(0.3, mad * 1.4826) };
}

/**
 * Median PSF sigma of typical stars.
 *
 * Measured on mid-ranked candidates, not the very brightest: in a stretched
 * or edited image the brightest stars are clipped, bloated blobs, and sizing
 * the window to them made every window huge enough to swallow neighbors and
 * nebula. Size comes from the half-maximum area, which nearby stars and a
 * glowing background barely move (second moments over a box did).
 */
function measurePsf(gray, w, h, cands, bgAt) {
  const R = 9;
  const out = [];
  const n = Math.min(cands.length, 3000);
  const i0 = Math.floor(n * 0.03), i1 = Math.max(i0 + 1, Math.floor(n * 0.4));
  const step = Math.max(1, Math.floor((i1 - i0) / 80));
  for (let k = i0; k < i1 && out.length < 80; k += step) {
    const idx = cands[k];
    const px = idx % w, py = (idx / w) | 0;
    if (px < R || py < R || px >= w - R || py >= h - R) continue;
    const b = bgAt(px, py), pk = gray[idx] - b;
    if (pk <= 0) continue;
    const half = b + pk / 2;
    let area = 0;
    for (let dy = -R; dy <= R; dy++) {
      const row = (py + dy) * w;
      for (let dx = -R; dx <= R; dx++) if (gray[row + px + dx] >= half) area++;
    }
    // Gaussian: half-max area = pi * (1.1774 sigma)^2
    const s = Math.sqrt(area / Math.PI) / 1.1774;
    if (s > 0.3 && s < R) out.push(s);
  }
  if (!out.length) return 1.3;
  out.sort((a, b) => a - b);
  return out[out.length >> 1];
}

/**
 * @returns {Array<{x,y,flux,peak,npix,snr}>} brightest first.
 */
export function detectStars(gray, w, h, opts = {}) {
  const o = { ...DEF, ...opts };
  const { bg, sg, nx, ny, tile } = tiledBackground(gray, w, h, o.tile);

  // Nearest tile, not bilinear: across the hard edge of a ridge line,
  // interpolation invents a background that exists nowhere in the frame.
  const ti = (x, y) => Math.min(ny - 1, (y / tile) | 0) * nx + Math.min(nx - 1, (x / tile) | 0);
  const bgAt = (x, y) => bg[ti(x, y)];

  // --- candidate local maxima
  const cand = [];
  const m = o.edge;
  for (let y = m; y < h - m; y++) {
    const trow = Math.min(ny - 1, (y / tile) | 0) * nx;
    const row = y * w;
    for (let x = m; x < w - m; x++) {
      const t = trow + Math.min(nx - 1, (x / tile) | 0);
      const v = gray[row + x];
      if (v <= bg[t] + o.sigmaK * sg[t]) continue;
      let isMax = true;
      for (let dy = -2; dy <= 2 && isMax; dy++) {
        const r2 = row + dy * w + x;
        for (let dx = -2; dx <= 2; dx++) {
          if (dx === 0 && dy === 0) continue;
          const u = gray[r2 + dx];
          // ties resolved by scan order so a flat saturated core yields one peak
          if (u > v || (u === v && (dy < 0 || (dy === 0 && dx < 0)))) { isMax = false; break; }
        }
      }
      if (isMax) cand.push(row + x);
    }
  }
  if (!cand.length) return [];
  // Rank by light in a small box, not by the single brightest pixel. A
  // stretched or edited image clips every bright star to the same flat top,
  // and lifts thousands of faint stars to nearly that level, so peak value
  // stops meaning brightness. Sorting by peak put faint stars first (in scan
  // order) and the real bright stars past the candidate limit.
  const score = new Float32Array(w * h ? cand.length : 0);
  const B = 3;
  for (let k = 0; k < cand.length; k++) {
    const idx = cand[k], px = idx % w, py = (idx / w) | 0;
    const b0 = bgAt(px, py);
    let s = 0;
    for (let dy = -B; dy <= B; dy++) {
      const yy = py + dy; if (yy < 0 || yy >= h) continue;
      const row = yy * w;
      for (let dx = -B; dx <= B; dx++) {
        const xx = px + dx; if (xx < 0 || xx >= w) continue;
        const v = gray[row + xx] - b0; if (v > 0) s += v;
      }
    }
    score[k] = s;
  }
  // PSF is still measured on the peak-ranked list, as before: the box score
  // favors broad bright patches, which would inflate the measured star size.
  const byPeak = cand.slice().sort((a, b) => gray[b] - gray[a]);
  const order = Array.from(cand.keys()).sort((a, b) => score[b] - score[a]);
  const sorted = order.map((k) => cand[k]);
  // copied in a loop: push(...sorted) passes every candidate as an argument,
  // and a wide-field frame has enough of them to overflow the call stack
  for (let i = 0; i < sorted.length; i++) cand[i] = sorted[i];

  // --- window sized to the frame's actual star profile, so a soft-focus or
  //     slightly trailed sub is measured over the whole star rather than
  //     clipped by a fixed box
  const psf = o.coreR ? o.coreR / 2.6 : measurePsf(gray, w, h, byPeak, bgAt);
  const r = Math.max(3, Math.min(14, Math.round(psf * 2.6)));
  const rIn = r + 2, rOut = r + 8;
  const winArea = (2 * r + 1) * (2 * r + 1);
  const annBuf = new Float64Array((2 * rOut + 1) * (2 * rOut + 1));

  const limit = Math.min(cand.length, o.maxStars * 12);
  let gmax = 0; for (let i = 0; i < gray.length; i += 7) if (gray[i] > gmax) gmax = gray[i];
  // "Saturated" is relative to where the bright stars actually top out. An
  // edited image clips them well below the frame's brightest pixel (often a
  // colored star or a nebula core), so a fixed fraction of the maximum
  // missed every one, and they were thrown out as too big to be stars.
  const topPeak = gray[byPeak[Math.min(byPeak.length - 1, Math.floor(byPeak.length * 0.005))]];
  const satLevel = Math.min(Math.max(gray[cand[0]], gmax), topPeak) * 0.92;
  const found = [];
  const bigRank = Math.max(20, Math.floor(cand.length * 0.02));
  for (let kc = 0; kc < limit; kc++) {
    const idx = cand[kc];
    const px = idx % w, py = (idx / w) | 0;
    if (px < rOut || py < rOut || px >= w - rOut || py >= h - rOut) continue;

    // Measure in the frame's typical star window; if the blob overflows it,
    // try a window 2x then 3x larger. A bright, saturated star is just big —
    // it fits once the window is large enough. Cloud, nebula and terrain keep
    // overflowing at every size and are still rejected. (Before, every bright
    // star in a telephoto frame was thrown out as "extended", leaving the
    // solver only faint stars and nebula knots.)
    let loc = null, rr = r, sum = 0, sx = 0, sy = 0, np = 0, peak = 0, sxx = 0, syy = 0, sxy = 0, ok = false;
    // Grow until the blob ends inside the window. The window starts at the
    // size of a typical star, so a big saturated one can need many times it.
    for (const k of [1, 2, 3, 4, 6, 8]) {
      if (k > 1 && r * k > 48) break;
      // only a saturated core earns a bigger window; glow and nebula knots don't
      // Only a saturated or clearly bright candidate earns a bigger window;
      // faint glow and nebula knots don't. "Clearly bright" = top 2% by the
      // area score the candidates are sorted on.
      if (k > 1 && gray[idx] < satLevel && kc > bigRank && !flatTop(gray, w, px, py)) break;
      rr = r * k;
      const ri = rr + 2, ro = rr + 8;
      if (px < ro || py < ro || px >= w - ro || py >= h - ro) break;
      loc = annulus(gray, w, h, px, py, ri, ro, k === 1 ? annBuf : new Float64Array((2 * ro + 1) * (2 * ro + 1)));
      if (!loc) break;
      const lim = loc.bg + 1.5 * loc.sigma;
      sum = 0; sx = 0; sy = 0; np = 0; peak = 0; sxx = 0; syy = 0; sxy = 0;
      for (let dy = -rr; dy <= rr; dy++) {
        const row = (py + dy) * w;
        for (let dx = -rr; dx <= rr; dx++) {
          const g = gray[row + px + dx];
          if (g <= lim) continue;
          const v = g - loc.bg;
          sum += v; sx += v * (px + dx); sy += v * (py + dy); np++;
          sxx += v * dx * dx; syy += v * dy * dy; sxy += v * dx * dy;
          if (v > peak) peak = v;
        }
      }
      const area = (2 * rr + 1) * (2 * rr + 1);
      if (np <= area * o.maxFill) { ok = true; break; }   // bounded: a star
      // In a dense, stretched star field neighbors fill the window even
      // around a clean star. What matters is whether the blob ends inside
      // the window: on the window's border a star sits at background, while
      // nebula and cloud run straight across it.
      let eb = 0, en = 0;
      for (let t = -rr; t <= rr; t++) {
        for (const [ex, ey] of [[t, -rr], [t, rr], [-rr, t], [rr, t]]) {
          en++; if (gray[(py + ey) * w + px + ex] > lim) eb++;
        }
      }
      if (eb <= en * 0.3) { ok = true; break; }
    }
    if (!ok || !loc) continue;                     // extended at every size: cloud, nebula, terrain
    if (np < o.minPix || sum <= 0) continue;
    if (peak < o.snrMin * loc.sigma) continue;     // not convincingly above the local noise
    if (o.shape) {
      const mx = sx / sum - px, my = sy / sum - py;
      const a = sxx / sum - mx * mx, b = syy / sum - my * my, c = sxy / sum - mx * my;
      const e = (a + b) > 0 ? Math.sqrt((a - b) * (a - b) + 4 * c * c) / (a + b) : 0;
      if (e > o.maxEllip) continue;
      if (lopsided(gray, w, px, py, rr + 4, loc.sigma) > o.edgeK) continue;
    }

    found.push({
      x: sx / sum, y: sy / sum,
      flux: sum, peak, npix: np, snr: peak / loc.sigma, rad: rr,
    });
  }

  // --- deduplicate, brightest wins
  found.sort((a, b) => b.flux - a.flux);
  const sep2 = o.minSep * o.minSep;
  const cell = Math.max(1, o.minSep);
  const buckets = new Map();
  const key = (cx, cy) => cx * 100003 + cy;
  const out = [], bigs = [];
  for (const st of found) {
    const cx = Math.floor(st.x / cell), cy = Math.floor(st.y / cell);
    let clash = false;
    for (let dy = -1; dy <= 1 && !clash; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const arr = buckets.get(key(cx + dx, cy + dy));
        if (!arr) continue;
        for (const q of arr) {
          const ex = q.x - st.x, ey = q.y - st.y;
          if (ex * ex + ey * ey < sep2) { clash = true; break; }
        }
        if (clash) break;
      }
    }
    // a big saturated star can throw several peaks across its disk
    if (!clash) for (const q of bigs) {
      const ex = q.x - st.x, ey = q.y - st.y;
      if (ex * ex + ey * ey < q.rad * q.rad) { clash = true; break; }
    }
    if (clash) continue;
    out.push(st);
    if (st.rad > o.minSep) bigs.push(st);
    const kk = key(cx, cy);
    if (!buckets.has(kk)) buckets.set(kk, []);
    buckets.get(kk).push(st);
    if (out.length >= o.maxStars) break;
  }
  if (o.rank === 'snr') out.sort((a, b) => b.snr - a.snr);
  if (o.spread > 1) {
    // Best star of each cell first, then the second-best of each, and so on,
    // each round in brightness order — so the solver's first quads span the
    // whole frame instead of one bright patch of Milky Way.
    const g = o.spread, cells = new Map();
    out.forEach((s, i) => {
      const k = Math.min(g - 1, (s.x / w * g) | 0) * g + Math.min(g - 1, (s.y / h * g) | 0);
      if (!cells.has(k)) cells.set(k, []);
      cells.get(k).push(s);
    });
    const lists = [...cells.values()], res = [];
    for (let round = 0; res.length < out.length; round++) {
      const batch = lists.filter((l) => l.length > round).map((l) => l[round]);
      if (!batch.length) break;
      res.push(...batch);
    }
    return res;
  }
  return out;
}
