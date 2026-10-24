/* The Moon's history, as an animation for the "How the Moon Was Made" card on moon.html. Loaded when played.
   The giant impact, the Moon gathering from the debris, the magma ocean, the floating crust, the bombardment, the lava
   floods of the maria, the young rayed craters, and today. The surface is the real Moon (the LROC WAC global mosaic,
   img/moon-history/, built by src/moon-history/): before the maria it is shown with the basins unflooded, and each basin
   floods at a rounded crater-count age (illustrative, not individual flows). Times and sizes are not to scale. */
(function () {
  'use strict';
  var W = 1024, H = 512, NW = 512, NH = 256, T_END = 66;
  var maps = null;

  // ── data ──
  function loadGray(src, w, h) {
    return new Promise(function (ok, no) {
      var im = new Image(); im.onload = function () {
        var c = document.createElement('canvas'); c.width = w; c.height = h; var x = c.getContext('2d'); x.drawImage(im, 0, 0, w, h);
        var d = x.getImageData(0, 0, w, h).data, a = new Float32Array(w * h); for (var i = 0; i < a.length; i++) a[i] = d[i * 4] / 255; ok(a);
      }; im.onerror = no; im.src = src;
    });
  }
  function blur(a, w, h, r) {      // three box passes ≈ a gaussian; wraps in longitude
    var b = new Float32Array(a), t = new Float32Array(a.length), k, x, y, s, n = 2 * r + 1;
    for (k = 0; k < 3; k++) {
      for (y = 0; y < h; y++) { s = 0; for (x = -r; x <= r; x++) s += b[y * w + ((x + w) % w)];
        for (x = 0; x < w; x++) { t[y * w + x] = s / n; s += b[y * w + (x + r + 1) % w] - b[y * w + (x - r + w) % w]; } }
      for (x = 0; x < w; x++) { s = 0; for (y = -r; y <= r; y++) s += t[Math.min(h - 1, Math.max(0, y)) * w + x];
        for (y = 0; y < h; y++) { b[y * w + x] = s / n; s += t[Math.min(h - 1, y + r + 1) * w + x] - t[Math.max(0, y - r) * w + x]; } }
    }
    return b;
  }
  function noise(w, h, cells, seed) {      // fractal value noise on a grid that wraps in longitude
    var a = new Float32Array(w * h), amp = 1, tot = 0, rnd = seed;
    function R() { rnd = (rnd * 16807) % 2147483647; return rnd / 2147483647; }
    for (var o = 0; o < 4; o++, cells *= 2, amp *= 0.5) {
      var cw = cells, ch = Math.max(2, cells >> 1), g = new Float32Array(cw * (ch + 1)); for (var i = 0; i < g.length; i++) g[i] = R();
      for (var y = 0; y < h; y++) { var fy = y / h * ch, y0 = fy | 0, ty = fy - y0; ty = ty * ty * (3 - 2 * ty);
        for (var x = 0; x < w; x++) { var fx = x / w * cw, x0 = fx | 0, tx = fx - x0, x1 = (x0 + 1) % cw; tx = tx * tx * (3 - 2 * tx);
          var v = (g[y0 * cw + x0] * (1 - tx) + g[y0 * cw + x1] * tx) * (1 - ty) + (g[(y0 + 1) * cw + x0] * (1 - tx) + g[(y0 + 1) * cw + x1] * tx) * ty;
          a[y * w + x] += v * amp; } }
      tot += amp;
    }
    for (var j = 0; j < a.length; j++) a[j] /= tot;
    return a;
  }
  function gcw(lat, lon, rad) {      // a weight falling from 1 at (lat, lon) to 0 at rad degrees, on the whole map
    var a = new Float32Array(W * H), p = lat * Math.PI / 180, l = lon * Math.PI / 180, sp = Math.sin(p), cp = Math.cos(p), cr = Math.cos(rad * Math.PI / 180);
    for (var y = 0; y < H; y++) { var la = (0.5 - (y + 0.5) / H) * Math.PI, sl = Math.sin(la), cl = Math.cos(la);
      for (var x = 0; x < W; x++) { var lo = ((x + 0.5) / W - 0.5) * 2 * Math.PI, c = sp * sl + cp * cl * Math.cos(lo - l), u = (c - cr) / (1 - cr);
        a[y * W + x] = u <= 0 ? 0 : Math.min(1, u * 2.5); } }
    return a;
  }
  function up2(a) {      // a half-size map to full size, smoothly (bilinear; wraps in longitude)
    var b = new Float32Array(W * H);
    for (var y = 0; y < H; y++) { var fy = Math.max(0, Math.min(NH - 1.001, (y + 0.5) / 2 - 0.5)), y0 = fy | 0, ty = fy - y0;
      for (var x = 0; x < W; x++) { var fx = (x + 0.5) / 2 - 0.5 + NW, x0 = fx | 0, tx = fx - x0, xa = x0 % NW, xb = (x0 + 1) % NW;
        b[y * W + x] = (a[y0 * NW + xa] * (1 - tx) + a[y0 * NW + xb] * tx) * (1 - ty) + (a[(y0 + 1) * NW + xa] * (1 - tx) + a[(y0 + 1) * NW + xb] * tx) * ty; } }
    return b;
  }
  // When each spot floods, at full resolution: the basin ages spread smoothly, the edges taken from the real maria's own
  // dark outlines in the photograph (not the coarse age grid's square cells), and the fronts made ragged by smooth noise
  function floodAge(age, today, n1f, n2f) {
    var a = new Float32Array(age), b = new Float32Array(age.length), k, i, x, y;
    for (k = 0; k < 6; k++) {      // carry each basin's age a few cells past its edge, so blending near the edge has a value
      b.set(a);
      for (y = 0; y < NH; y++) for (x = 0; x < NW; x++) { i = y * NW + x; if (a[i] > 0) continue; var s = 0, c = 0;
        for (var dy = -1; dy <= 1; dy++) for (var dx = -1; dx <= 1; dx++) { var yy = y + dy; if (yy < 0 || yy >= NH) continue; var v = a[yy * NW + (x + dx + NW) % NW]; if (v > 0) { s += v; c++; } }
        if (c) b[i] = s / c; }
      a.set(b);
    }
    var inMare = new Float32Array(age.length); for (i = 0; i < age.length; i++) inMare[i] = age[i] > 0 ? 1 : 0;
    var near = up2(blur(inMare, NW, NH, 3)), af = up2(a.map(function (v) { return v > 0 ? v : 0; })), dark = blur(today, W, H, 1), out = new Float32Array(W * H);
    var mk = new Float32Array(W * H), wa = new Float32Array(W * H);
    for (i = 0; i < out.length; i++) { mk[i] = near[i] > 0.25 && dark[i] < 0.265 + 0.05 * (near[i] - 0.5) ? 1 : 0; wa[i] = af[i] * mk[i]; }
    // ages blended smoothly between neighboring basins (no straight seams), and the middle of each plain, farthest from its
    // shore and so lowest, flooding first: the lava pools in the deepest part and spreads out to the edges
    var num = blur(wa, W, H, 16), den = blur(mk, W, H, 16), depth = blur(mk, W, H, 9);
    for (i = 0; i < out.length; i++) out[i] = mk[i] > 0 && den[i] > 0.01 ? num[i] / den[i] + 0.3 * (depth[i] - 0.7) + (n1f[i] - 0.5) * 0.22 + (n2f[i] - 0.5) * 0.1 : -1;
    return out;
  }
  function load() {
    if (maps) return Promise.resolve(maps);
    return Promise.all([loadGray('img/moon-history/today.jpg', W, H), loadGray('img/moon-history/premare.jpg', W, H), loadGray('img/moon-history/flood.png', NW, NH)]).then(function (r) {
      var today = r[0], pre = r[1], fl = r[2], age = new Float32Array(NW * NH);
      for (var i = 0; i < age.length; i++) { var v = Math.round(fl[i] * 255); age[i] = v >= 254 ? -1 : 4.0 - v / 250 * 3.0; }
      var smooth = blur(pre, W, H, 14), todayB = blur(today, W, H, 4), preB = blur(pre, W, H, 4);
      var wT = gcw(-43.3, -11.4, 32), wC = gcw(9.6, -20.1, 11);      // the reach of Tycho's and Copernicus's bright rays
      var n1 = noise(NW, NH, 12, 7), n2 = noise(NW, NH, 20, 99), n3 = noise(NW, NH, 6, 1234), n1f = up2(n1), n2f = up2(n2), n3f = up2(n3);
      maps = { today: today, pre: pre, smooth: smooth, todayB: todayB, preB: preB, age: floodAge(age, today, n1f, n2f), wT: wT, wC: wC, n1: n1, n2: n2, n3: n3, n1f: n1f, n2f: n2f, n3f: n3f };
      return maps;
    });
  }

  // ── a sphere, drawn pixel by pixel: a lookup of each pixel's latitude, longitude and normal, made once per size ──
  var LUT = {};
  function lut(r) {
    if (LUT[r]) return LUT[r];
    var n = 2 * r, row = new Int16Array(n * n), lon = new Float32Array(n * n), nx = new Float32Array(n * n), ny = new Float32Array(n * n), nz = new Float32Array(n * n), on = new Uint8Array(n * n);
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      var i = y * n + x, a = (x + 0.5 - r) / r, b = -(y + 0.5 - r) / r, q = a * a + b * b; if (q > 1) continue;
      var c = Math.sqrt(1 - q); on[i] = q > 0.985 ? 2 : 1; nx[i] = a; ny[i] = b; nz[i] = c;
      row[i] = Math.min(H - 1, Math.max(0, Math.floor((0.5 - Math.asin(b) / Math.PI) * H))); lon[i] = Math.atan2(a, c) / (2 * Math.PI) * W;
    }
    return (LUT[r] = { n: n, row: row, lon: lon, nx: nx, ny: ny, nz: nz, on: on });
  }
  var L = [-0.5, 0.28, 0.82]; (function () { var m = Math.hypot(L[0], L[1], L[2]); L[0] /= m; L[1] /= m; L[2] /= m; })();
  function ss(a, b, x) { var t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }

  // molten rock: a chilled skin (dark, lit by the Sun) broken by incandescent cracks; the hotter, the more cracks and open melt
  var MG = [0, 0, 0];
  function magma(M, ni, drift, heat, lit, full) {      // full: ni indexes the full-size noise (sharper cracks, for the close-up lava)
    var A = full ? M.n1f : M.n1, Bn = full ? M.n2f : M.n2, Cn = full ? M.n3f : M.n3, N = A.length, a = A[(ni + ((drift * 7) | 0)) % N], b = Bn[(ni + N - ((drift * 4) | 0) % N) % N], c = Cn[ni];
    var glowing = ss(0, 0.15, heat);      // cold: solid rock, nothing glows
    var crack = ((1 - ss(0, 0.012 + 0.03 * heat, Math.abs(a - 0.5))) * 0.9 + (1 - ss(0, 0.008 + 0.02 * heat, Math.abs(b - 0.5))) * 0.6) * glowing;
    var open = ss(0.8 - 0.14 * heat, 0.86 - 0.14 * heat, a * 0.55 + c * 0.45) * glowing;      // open melt
    var e = Math.min(1.05, crack * (0.35 + 0.65 * heat) + open * (0.55 + 0.4 * heat));
    var skin = (0.07 + 0.05 * b) + (0.16 + 0.14 * c - 0.07) * (1 - glowing);      // chilled black skin, or weathered dark rock
    MG[0] = skin * 1.1 * lit + e * 1.25; MG[1] = skin * 0.95 * lit + e * e * 0.42 + e * 0.1; MG[2] = skin * 0.85 * lit + e * e * 0.1;      // orange-red cracks, yellow where hottest
    return MG;
  }
  // P: what the surface is doing now. kind 'moon' | 'earth' | 'theia'
  function shadeSphere(ctx, r, lon0, P) {
    var U = lut(r), M = maps, n = U.n, img = ctx.createImageData(n, n), d = img.data, off = ((lon0 / 360) * W + W / 2) % W; if (off < 0) off += W;      // the map's middle column is longitude 0
    var drift = P.drift || 0, hot = P.hot || 0;
    for (var i = 0; i < n * n; i++) {
      if (!U.on[i]) continue;
      var col = (U.lon[i] + off + W * 2) % W | 0, row = U.row[i], m = row * W + col, ni = (row >> 1) * NW + (col >> 1);
      var mu0 = U.nx[i] * L[0] + U.ny[i] * L[1] + U.nz[i] * L[2], lit = mu0 > 0 ? 2 * mu0 / (mu0 + U.nz[i]) : 0;
      var R = 0, G = 0, B = 0;
      if (P.kind === 'moon') {
        // the solid surface: smooth new crust → cratered highlands → flooded maria, with Tycho's and Copernicus's rays only once they exist
        var hl = M.pre[m], tb = M.today[m];
        var rs = M.wT[m] * (1 - P.tycho) + M.wC[m] * (1 - P.cop); if (rs > 1) rs = 1;
        if (rs > 0) { hl += (M.preB[m] - hl) * rs; tb += (M.todayB[m] - tb) * rs; }
        var a = M.age[m];      // when this spot floods (full resolution, ragged fronts: floodAge)
        var sm = M.smooth[m] * 1.05 + (M.n2[ni] - 0.5) * 0.08, alb = sm + (hl - sm) * P.detail;
        var dl = a > 0 ? a - P.ga : -1;      // how long ago (billions of years) this spot flooded
        if (dl > 0) alb = tb;      // flooded: dark basalt
        var tone = 0.92 + 0.5 * alb;
        R = alb * 1.02 * tone; G = alb * 0.99 * tone; B = alb * 0.94 * tone;
        if (dl > 0) { R *= 0.96; G *= 0.98; B *= 1.03; }      // the maria a touch bluer
        R *= lit; G *= lit; B *= lit;
        if (dl > 0 && dl < 0.22) {      // fresh lava: a glowing front, then a black crust whose cracks glow and fade as it cools
          var hc = 1 - dl / 0.22, mg = magma(M, m, 0, 0.25 + 0.9 * hc, lit, true), k = ss(0, 0.5, hc);
          R = R * (1 - k) + mg[0] * k; G = G * (1 - k) + mg[1] * k; B = B * (1 - k) + mg[2] * k;
          var fr = 1 - dl / 0.025; if (fr > 0) { R += fr * 1.1; G += fr * 0.6; B += fr * 0.15; }
        }
        // molten stages on top: magma ocean, then rafts of floating plagioclase closing over it
        if (P.melt > 0) {      // molten: like a lava lake, a dark chilled skin split by glowing cracks, with open patches of melt while it is hot
          var mlt = magma(M, ni, drift, P.heat, lit);
          var raft = ss(1 - P.raft - 0.04, 1 - P.raft + 0.04, M.n3[ni] * 0.7 + M.n1[ni] * 0.3);      // pale rafts of plagioclase crystals
          var rb = 0.6 + 0.08 * (M.n2[ni] - 0.5), cR = rb * 1.0 * lit + 0.02, cG = rb * 0.98 * lit + 0.02, cB = rb * 0.93 * lit + 0.02;
          var mR = mlt[0] * (1 - raft) + cR * raft, mG = mlt[1] * (1 - raft) + cG * raft, mB = mlt[2] * (1 - raft) + cB * raft;
          R = R * (1 - P.melt) + mR * P.melt; G = G * (1 - P.melt) + mG * P.melt; B = B * (1 - P.melt) + mB * P.melt;
        }
      } else if (P.kind === 'earth') {      // the young Earth: dark rock with a few glowing cracks; after the impact, molten and slowly crusting over
        var em = magma(M, ni, drift, hot, lit); R = em[0]; G = em[1]; B = em[2];
      } else {      // Theia: a dark, Mars-sized rocky body
        var t1 = M.n2[ni]; R = (0.3 + 0.15 * t1) * lit; G = (0.24 + 0.12 * t1) * lit; B = (0.2 + 0.1 * t1) * lit;
      }
      var k = U.on[i] === 2 ? 0.6 : 1;      // a soft limb
      d[i * 4] = Math.min(255, R * 255); d[i * 4 + 1] = Math.min(255, G * 255); d[i * 4 + 2] = Math.min(255, B * 255); d[i * 4 + 3] = 255 * k;
    }
    return img;
  }

  // ── the show ──
  var titleOn = false, box, cv, cx, cap, eraEl, yearEl, gaEl, bar, barDot, btn, scrub = false, raf = 0, t = 0, last = 0, playing = false, CW = 0, CH = 0, stars = null, parts = [], buf = {};
  function bufCanvas(key, n) { var b = buf[key]; if (!b || b.width !== n) { b = buf[key] = document.createElement('canvas'); b.width = b.height = n; } return b; }
  function drawSphere(key, x, y, rad, rr, lon0, P, sx, sy, rot) {      // rendered at rr pixels radius, drawn at rad (squashed sx, sy along angle rot)
    var b = bufCanvas(key, 2 * rr), bx = b.getContext('2d'); bx.putImageData(shadeSphere(bx, rr, lon0, P), 0, 0);
    if (!sx) { cx.drawImage(b, x - rad, y - rad, 2 * rad, 2 * rad); return; }
    cx.save(); cx.translate(x, y); cx.rotate(rot || 0); cx.scale(sx, sy); cx.drawImage(b, -rad, -rad, 2 * rad, 2 * rad); cx.restore();
  }
  var GA = [[0, 4.51], [10, 4.51], [16, 4.5], [24, 4.45], [32, 4.35], [42, 3.9], [49.5, 3.1], [53, 1.2], [59, 0.1], [66, 0]];
  function gaAt(t) { for (var i = 1; i < GA.length; i++) if (t <= GA[i][0]) { var a = GA[i - 1], b = GA[i], u = (t - a[0]) / (b[0] - a[0]); return a[1] + (b[1] - a[1]) * u; } return 0; }
  var ERAS = [
    [0, 'The giant impact', '4.5 billion years ago', 'A body about the size of Mars strikes the young Earth. It is the leading explanation for the Moon’s birth, though the details are still debated.'],
    [10, 'The Moon gathers', 'Within a century, perhaps hours', 'Molten debris thrown into orbit collects into the Moon, far closer to Earth than it is today.'],
    [16, 'A magma ocean', 'About 4.5 billion years ago', 'The Moon’s outer layers are molten rock, hundreds of kilometers deep, over a small core of molten iron. In the cut-away, dense crystals of olivine and pyroxene sink through the melt and pile up as the mantle.'],
    [24, 'The first crust', 'About 4.4 billion years ago', 'Light crystals of plagioclase feldspar float up and join into a pale crust: today’s bright highlands. The last of the melt, rich in rare elements, is trapped between crust and mantle.'],
    [32, 'The great bombardment', '4.3 to 3.8 billion years ago', 'Asteroids and comets batter the crust, blasting out craters and basins hundreds to thousands of kilometers across.'],
    [42, 'Lava floods the basins', 'Mostly 3.9 to 3.1 billion years ago', 'Rock melted deep in the mantle rises through cracks in the crust and pours into the low basins, glowing as it spreads, then cooling to dark basalt: the maria. Fire fountains spray beads of glass. Smaller eruptions go on for a billion years or more.'],
    [53, 'Young craters', 'The last billion years', 'Little changes now. New impacts still scar the surface: Copernicus about 800 million years ago, Tycho about 110 million, its bright rays still fresh.'],
    [59, 'Today', 'Now', 'The Moon we see, little changed for a billion years. It still drifts away from Earth, about 3.8 cm a year.']];
  var EVENTS = [      // basins and craters, where and when they show
    { t: 33.0, lat: -53, lon: -169, s: 0.55, name: 'South Pole–Aitken basin, about 2,500 km across' },
    { t: 38.5, lat: 33, lon: -16, s: 0.38, name: 'Imbrium basin, about 3.9 billion years ago' },
    { t: 41.0, lat: -20, lon: -95, s: 0.3, name: 'Orientale basin, about 3.8 billion years ago' },
    { t: 42.6, lat: 8.5, lon: 31.4, s: 0.1, name: 'Lava fills Mare Tranquillitatis', lava: 1 },
    { t: 44.0, lat: 20.2, lon: 30.8, s: 0.1, name: 'Fire fountains spray volcanic glass', fount: 1 },
    { t: 46.2, lat: 33, lon: -16, s: 0.1, name: 'Mare Imbrium floods', lava: 1 },
    { t: 48.6, lat: 20, lon: -55, s: 0.1, name: 'Oceanus Procellarum, the largest', lava: 1 },
    { t: 54.0, lat: 9.6, lon: -20.1, s: 0.12, name: 'Copernicus' },
    { t: 57.0, lat: -43.3, lon: -11.4, s: 0.12, name: 'Tycho' }];
  var LON = [[16, 900], [24, 690], [32, 540], [42, 345], [53, 355], [66, 360]];
  function lonAt(t) { if (t <= LON[0][0]) return LON[0][1]; for (var i = 1; i < LON.length; i++) if (t <= LON[i][0]) { var a = LON[i - 1], b = LON[i], u = ss(0, 1, (t - a[0]) / (b[0] - a[0])); return a[1] + (b[1] - a[1]) * u; } return 360; }
  var smallHits = []; (function () { var s = 5; function R() { s = (s * 16807) % 2147483647; return s / 2147483647; } for (var i = 0; i < 46; i++) smallHits.push({ t: 32 + R() * 10, lat: Math.asin(R() * 2 - 1) * 180 / Math.PI, lon: R() * 360 - 180, s: 0.03 + R() * 0.06 }); })();

  function project(lat, lon, lon0, x0, y0, rad) {
    var p = lat * Math.PI / 180, l = (lon - lon0) * Math.PI / 180, x = Math.cos(p) * Math.sin(l), y = Math.sin(p), z = Math.cos(p) * Math.cos(l);
    return { x: x0 + x * rad, y: y0 - y * rad, z: z };
  }
  function flash(x, y, rad, u, big) {      // an impact: a white-hot flash, then a spreading ring of ejecta
    var g = cx.createRadialGradient(x, y, 0, x, y, rad * (0.4 + 1.6 * u));
    var a = Math.max(0, 1 - u * 1.6);
    g.addColorStop(0, 'rgba(255,250,235,' + a + ')'); g.addColorStop(0.35, 'rgba(255,190,110,' + a * 0.6 + ')'); g.addColorStop(1, 'rgba(255,140,60,0)');
    cx.globalCompositeOperation = 'lighter'; cx.fillStyle = g; cx.beginPath(); cx.arc(x, y, rad * (0.4 + 1.6 * u), 0, 7); cx.fill();
    if (big) { cx.strokeStyle = 'rgba(230,215,190,' + (0.5 * (1 - u)) + ')'; cx.lineWidth = Math.max(1, rad * 0.08); cx.beginPath(); cx.arc(x, y, rad * (0.6 + 1.4 * u), 0, 7); cx.stroke(); }
    cx.globalCompositeOperation = 'source-over';
  }
  function label(txt, x, y, a, px, py, fs) {      // a named event: a pill of text, with a line down to the spot (px, py)
    if (a <= 0) return; var f = Math.round(CW * (fs || 0.033)); cx.font = '600 ' + f + 'px Montserrat, sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle';
    var w = cx.measureText(txt).width + f * 1.2, hh = f * 1.8, lx = Math.min(CW - w / 2 - 6, Math.max(w / 2 + 6, x)), ly = Math.max(hh / 2 + 6 + (titleOn ? CW * 0.15 : 0), y);      // below the era title while it shows
    if (px != null) { var side = px < lx - w / 2; cx.strokeStyle = 'rgba(230,204,133,' + 0.8 * a + ')'; cx.lineWidth = Math.max(1, f * 0.08); cx.beginPath(); cx.moveTo(side ? lx - w / 2 : lx, side ? ly : ly + hh / 2); cx.lineTo(px, py); cx.stroke();
      cx.fillStyle = 'rgba(230,204,133,' + a + ')'; cx.beginPath(); cx.arc(px, py, Math.max(1.5, f * 0.12), 0, 7); cx.fill(); }      // from the label's near side, with a dot on the spot
    cx.fillStyle = 'rgba(13,10,24,' + 0.82 * a + ')'; cx.strokeStyle = 'rgba(203,168,90,' + 0.7 * a + ')'; cx.lineWidth = Math.max(1, f * 0.06);
    cx.beginPath(); if (cx.roundRect) cx.roundRect(lx - w / 2, ly - hh / 2, w, hh, hh / 2); else cx.rect(lx - w / 2, ly - hh / 2, w, hh); cx.fill(); cx.stroke();
    cx.fillStyle = 'rgba(242,228,190,' + a + ')'; cx.fillText(txt, lx, ly + f * 0.05); cx.textBaseline = 'alphabetic';
  }
  function title(e, a) {      // the era, large, at the top of the picture
    if (a <= 0) return; var f = Math.round(CW * 0.062), g = Math.round(CW * 0.03); cx.textAlign = 'center';
    cx.shadowColor = 'rgba(0,0,0,.9)'; cx.shadowBlur = f * 0.5;
    cx.font = '600 ' + f + 'px Montserrat, sans-serif'; cx.fillStyle = 'rgba(242,228,190,' + a + ')'; cx.fillText(e[1], CW / 2, f * 1.35);
    cx.font = '600 ' + g + 'px Montserrat, sans-serif'; cx.fillStyle = 'rgba(203,168,90,' + a + ')'; cx.fillText(e[2].toUpperCase(), CW / 2, f * 1.35 + g * 1.7);
    cx.shadowBlur = 0;
  }

  // ── the giant impact. Theia comes in at about 45° (the angle the classic simulations favor), is stretched by Earth's pull
  // in the last moments, flattens against Earth and smears around it; a long arm of molten and vaporized rock is flung out
  // along its path and wraps into a disk, much of it falling back; Earth's surface melts and puffs up a glowing atmosphere of
  // rock vapor, and the planet, spun up, wobbles. Not to scale in time: the real collision took hours. ──
  var HIT = 4.2, rs = 11;
  function R() { rs = (rs * 16807) % 2147483647; return rs / 2147483647; }
  function resetParts() { parts = []; parts.got = 0; rs = 11; }
  function geo(t) {
    var S = Math.min(CW, CH), zoom = ss(10, 16, t), ex = CW * (0.42 - 0.62 * zoom), ey = CH * (0.56 - 0.06 * zoom), er = S * (0.22 + 0.33 * zoom);
    var ang = -Math.PI / 4, cxp = ex + Math.cos(ang) * er, cyp = ey + Math.sin(ang) * er;
    var mAng = -2.2 - Math.max(0, t - HIT) * 0.55, mr0 = er * 3.2, mx = ex + Math.cos(mAng) * mr0, my = ey + Math.sin(mAng) * mr0 * 0.95;
    return { S: S, zoom: zoom, ex: ex, ey: ey, er: er, ang: ang, cxp: cxp, cyp: cyp, tr: er * 0.53, GM: Math.pow(er * 1.6, 3) * Math.pow(2 * Math.PI / 4.0, 2), mx: mx, my: my, gather: ss(9, 15, t) };
  }
  function simStep(dt) {      // the debris: spawned as a stream from the contact point, then orbits under Earth's gravity
    if (t < HIT || t >= 16) return; var g = geo(t);
    var rx = g.cxp - g.ex, ry = g.cyp - g.ey, rl = Math.hypot(rx, ry), tx = ry / rl, ty = -rx / rl, vc = Math.sqrt(g.GM / rl);      // (tx, ty): along Theia's sideways motion
    if (t < HIT + 0.9) { var n = Math.round(1700 * dt / 0.9);
      for (var i = 0; i < n; i++) { var fwd = 0.55 + R() * 0.75, out = 0.1 + R() * 0.55 * (1 - (t - HIT) / 0.9), sp = (R() - 0.5) * 0.35;
        parts.push({ x: g.cxp + (R() - 0.5) * g.er * 0.12, y: g.cyp + (R() - 0.5) * g.er * 0.12, vx: (tx * fwd + rx / rl * out + ty * sp) * vc, vy: (ty * fwd + ry / rl * out - tx * sp) * vc, h: 1, b: t, big: R() < 0.03 }); } }
    var sub = 3, h = dt / sub, got = 0;
    for (var p = 0; p < parts.length; p++) { var q = parts[p]; if (q.h <= 0) continue;
      for (var k = 0; k < sub; k++) { var dx = q.x - g.ex, dy = q.y - g.ey, r2 = dx * dx + dy * dy, r = Math.sqrt(r2);
        if (r < g.er * 0.97) { q.h = 0; break; }      // fell back
        var aa = -g.GM / (r2 * r); q.vx += dx * aa * h; q.vy += dy * aa * h;
        if (g.gather > 0 && r > g.er * 1.9) { var gx = g.mx - q.x, gy = g.my - q.y, gl = Math.hypot(gx, gy) + 1; q.vx += (gx / gl * g.er * 6 - q.vx * 2) * g.gather * h; q.vy += (gy / gl * g.er * 6 - q.vy * 2) * g.gather * h; if (gl < g.er * 0.08) { q.h = 0; got++; break; } }
        q.x += q.vx * h; q.y += q.vy * h; } }
    parts.got += got;
  }
  function frame(now) {
    raf = 0; if (!playing) return;
    var dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt;
    if (t > T_END) { t = T_END; playing = false; btn.textContent = '↺ Replay'; }
    simStep(dt); draw(); if (playing) raf = requestAnimationFrame(frame);
  }
  function draw() {
    cx.globalCompositeOperation = 'source-over'; cx.fillStyle = '#000'; cx.fillRect(0, 0, CW, CH); cx.drawImage(stars, 0, 0);
    var S = Math.min(CW, CH), rr = Math.min(170, Math.round(S * 0.33)), ga = gaAt(t);
    var ei0 = 0; for (var i0 = 0; i0 < ERAS.length; i0++) if (t >= ERAS[i0][0]) ei0 = i0; titleOn = scrub || t - ERAS[ei0][0] < 3.6;
    if (t < 16) impactScene(S, rr); else moonScene(S, rr);
    // the era: large on the picture as it begins (and while scrubbing), and in the caption below; the time line
    var ei = 0; for (var i = 0; i < ERAS.length; i++) if (t >= ERAS[i][0]) ei = i; var e = ERAS[ei], since = t - e[0];
    title(e, scrub ? 1 : Math.min(1, since / 0.4) * Math.min(1, (3.6 - since) / 0.8));
    if (eraEl.textContent !== e[1]) { eraEl.textContent = e[1]; yearEl.textContent = e[2]; cap.textContent = e[3]; }
    barDot.style.left = (100 * t / T_END) + '%';
    var gtxt = ga > 0.995 ? ga.toFixed(2) + ' billion years ago' : ga >= 0.01 ? Math.round(ga * 1000) + ' million years ago' : 'Today';
    if (gaEl && gaEl.textContent !== gtxt) gaEl.textContent = gtxt;
  }
  function impactScene(S, rr) {
    var g = geo(t), ex = g.ex, ey = g.ey, er = g.er, since = t - HIT;
    var hot = t < HIT ? 0 : Math.min(1, since * 1.5) * (2.3 - 1.6 * ss(5.5, 16, t));      // the surface melts almost everywhere, then crusts over
    // the rock-vapor atmosphere: a glowing envelope round the melted Earth
    if (since > 0) { var va = Math.min(1, since * 2) * (0.55 - 0.35 * ss(6, 15, t)), vg = cx.createRadialGradient(ex, ey, er * 0.95, ex, ey, er * (1.25 + 0.15 * Math.min(1, since)));
      vg.addColorStop(0, 'rgba(255,170,90,' + va + ')'); vg.addColorStop(0.5, 'rgba(255,110,50,' + va * 0.35 + ')'); vg.addColorStop(1, 'rgba(255,80,40,0)');
      cx.globalCompositeOperation = 'lighter'; cx.fillStyle = vg; cx.beginPath(); cx.arc(ex, ey, er * 1.45, 0, 7); cx.fill(); cx.globalCompositeOperation = 'source-over'; }
    // Earth: solid and dark before; molten, spun up and wobbling after
    var wob = since > 0 ? 0.06 * Math.exp(-since * 0.7) * Math.sin(since * 6) : 0;
    drawSphere('e', ex, ey, er, rr, t < HIT ? t * 5 : HIT * 5 + since * 22, { kind: 'earth', hot: hot, drift: t * 3 }, 1 + wob, 1 - wob, g.ang);
    // Theia: falling in on a curving path, stretched toward Earth, then flattening against it and sinking in
    var dirx = -0.78, diry = 0.62;      // its motion at contact: down and to the left
    if (since < 1.1) {
      var u = Math.min(1, t / HIT), dist = (1 - u) * S * 1.15, curve = (1 - u) * (1 - u) * S * 0.25;
      var px = g.cxp - dirx * (g.tr * 0.85 + dist) + diry * curve, py = g.cyp - diry * (g.tr * 0.85 + dist) - dirx * curve;
      var stretch = 1 + 0.14 * ss(HIT - 0.7, HIT, t), sq = since > 0 ? ss(0, 1.0, since) : 0;
      if (since > 0) { px += (ex - px) * 0.55 * sq; py += (ey - py) * 0.55 * sq; }
      cx.globalAlpha = 1 - ss(0.5, 1.1, since);
      drawSphere('t', px, py, g.tr, Math.round(rr * 0.6), 40 + t * 10, { kind: 'theia' }, stretch * (1 - 0.55 * sq), (1 / Math.sqrt(stretch)) * (1 + 0.45 * sq), Math.atan2(g.cyp - py, g.cxp - px));
      cx.globalAlpha = 1;
    }
    if (since > 0) {
      cx.globalCompositeOperation = 'lighter';
      // the smear: Theia's mantle spreading round Earth, white-hot, cooling to orange
      var sw = Math.min(2.2, since * 0.9), al = Math.max(0, 1 - since / 7), a0 = Math.atan2(g.cyp - ey, g.cxp - ex);
      cx.strokeStyle = 'rgba(255,' + (200 - 80 * Math.min(1, since / 4) | 0) + ',110,' + 0.75 * al + ')'; cx.lineWidth = er * (0.16 - 0.06 * Math.min(1, since / 3)); cx.lineCap = 'round';
      cx.beginPath(); cx.arc(ex, ey, er * 0.97, a0 - sw * 0.25, a0 + sw * 0.75); cx.stroke();
      // the first flash at contact
      if (since < 1.6) { var fu = since / 1.6, fr = er * (0.25 + 0.9 * fu), fg = cx.createRadialGradient(g.cxp, g.cyp, 0, g.cxp, g.cyp, fr);
        fg.addColorStop(0, 'rgba(255,255,245,' + (1 - fu) + ')'); fg.addColorStop(0.4, 'rgba(255,210,140,' + 0.7 * (1 - fu) + ')'); fg.addColorStop(1, 'rgba(255,140,60,0)');
        cx.fillStyle = fg; cx.beginPath(); cx.arc(g.cxp, g.cyp, fr, 0, 7); cx.fill(); }
      // the debris, colored by how long it has had to cool
      for (var p = 0; p < parts.length; p++) { var q = parts[p]; if (q.h <= 0) continue; var age = t - q.b, k2 = Math.min(1, age / 6), z = Math.max(1.5, S * (q.big ? 0.014 : 0.005));
        cx.fillStyle = 'rgba(255,' + (235 - 120 * k2 | 0) + ',' + (190 - 160 * k2 | 0) + ',' + (0.85 - 0.45 * k2) + ')'; cx.fillRect(q.x - z / 2, q.y - z / 2, z, z); }
      cx.globalCompositeOperation = 'source-over';
      if (t > 9) { var mrad = S * (0.02 + 0.33 * g.zoom) * Math.min(1, 0.4 + parts.got / 500), mxz = g.mx + (CW * 0.5 - g.mx) * g.zoom, myz = g.my + (CH * 0.47 - g.my) * g.zoom;
        drawSphere('m', mxz, myz, mrad, rr, lonAt(16), { kind: 'moon', heat: 1, melt: 1, raft: 0, detail: 0, ga: 9, tycho: 0, cop: 0, drift: t * 2 }); }
    }
  }
  // ── inside the young Moon: a quarter cut away. A molten iron core; the magma ocean, in which dense olivine and pyroxene
  // crystals sink to pile up as the mantle while light plagioclase floats up to build the crust; and at the end the last
  // dregs of the melt, rich in potassium, rare-earth elements and phosphorus (KREEP), trapped between crust and mantle.
  // Layer thicknesses are only roughly to scale (the crust is drawn a little thick to be seen). ──
  var CUTP = []; (function () { var s = 21; function R() { s = (s * 16807) % 2147483647; return s / 2147483647; } for (var i = 0; i < 110; i++) CUTP.push({ up: i % 5 < 2, a: 0.06 + R() * 1.45, f: R(), v: 0.07 + R() * 0.08, z: 0.7 + R() * 0.6, rot: R() * 3.14 }); })();
  function cutaway(x0, y0, rad, a) {
    if (a <= 0) return;
    var M = maps, rc = 0.21, base = 0.55 + 0.37 * ss(18, 30, t), kreep = ss(27, 30, t), crust = 1 - 0.04 * ss(22, 30, t), kw = 0.014 * kreep;
    var m = Math.min(base, crust - kw - 0.004), n = Math.max(8, Math.ceil(rad)), b = bufCanvas('cut', n), bx = b.getContext('2d'), img = bx.createImageData(n, n), d = img.data;
    var e = 1.2 / rad, flow = t * 0.03;
    // the cut face, pixel by pixel: each layer with its own color and grain, soft one-pixel edges, a thin dark line at each boundary
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      var r = Math.hypot(x + 0.5, y + 0.5) / rad; if (r > 1.004) continue;
      var th = Math.atan2(y + 0.5, x + 0.5), gi = (y % NH) * NW + (x % NW), gj = (((y * 2) % NH) * NW + ((x * 2 + 97) % NW)), g1 = M.n2[gi] - 0.5, g2 = M.n1[gj] - 0.5, R = 0, G = 0, B = 0;
      if (r < rc) {      // molten iron: white-hot at the middle, orange at its edge
        var c = 1 - r / rc; c = c * c; R = 1.0; G = 0.5 + 0.42 * c + g1 * 0.06; B = 0.12 + 0.55 * c * c;
      } else if (r < m) {      // the mantle: crystals of olivine (dark green, deepest) and pyroxene (browner, higher), packed and grainy
        var u = (r - rc) / Math.max(0.01, m - rc), gr = g2 > 0.18 ? 0.07 : g2 < -0.2 ? -0.05 : 0;
        R = 0.2 + 0.13 * u + g1 * 0.08 + gr; G = 0.27 + 0.06 * u + g1 * 0.08 + gr; B = 0.14 + 0.06 * u + g1 * 0.05 + gr * 0.7;
      } else if (r < crust - kw) {      // the magma ocean: hottest at depth, with slow convection streaks
        var u2 = (r - m) / Math.max(0.01, crust - kw - m), cs = M.n1[((((r * 40) | 0) % NH) * NW + (((th * 90 + flow * 400) | 0) % NW + NW) % NW)] - 0.5;
        R = 1.0 - 0.18 * u2 + cs * 0.1; G = 0.58 - 0.3 * u2 + cs * 0.16; B = 0.16 - 0.1 * u2 + cs * 0.05;
      } else if (r < crust) {      // the last of the melt, rich in rare elements (KREEP): dark, rust-red
        R = 0.44 + g1 * 0.06; G = 0.22 + g1 * 0.04; B = 0.13;
      } else {      // the crust: pale anorthosite, finely grained
        R = 0.84 + g2 * 0.1; G = 0.82 + g2 * 0.1; B = 0.77 + g2 * 0.09;
      }
      var line = 0, bs = [rc, m, crust - kw, crust]; for (var k = 0; k < 4; k++) { var dd = Math.abs(r - bs[k]); if (dd < e) line = Math.max(line, 1 - dd / e); }
      var sh = 0.93 - 0.08 * r * Math.cos(th - 0.6);      // the flat face catches the light a little unevenly
      var o = (y * n + x) * 4, k2 = 1 - 0.35 * line; d[o] = Math.min(255, R * sh * k2 * 255); d[o + 1] = Math.min(255, G * sh * k2 * 255); d[o + 2] = Math.min(255, B * sh * k2 * 255); d[o + 3] = r > 1 ? (1.004 - r) / 0.004 * 255 : 255;
    }
    bx.putImageData(img, 0, 0);
    cx.save(); cx.globalAlpha = a;
    cx.shadowColor = 'rgba(0,0,0,.7)'; cx.shadowBlur = rad * 0.05; cx.drawImage(b, x0, y0); cx.shadowBlur = 0;      // a soft shadow on the sphere along the cut
    // crystals in the melt: dark green grains sinking, white laths of plagioclase rising
    if (crust - kw - m > 0.02) for (var i = 0; i < CUTP.length; i++) {
      var p = CUTP[i], f = (t * p.v + p.f) % 1, top = crust - kw - 0.01, bot = m + 0.01, rr = p.up ? bot + (top - bot) * f : top - (top - bot) * f;
      var px = x0 + Math.cos(p.a) * rr * rad, py = y0 + Math.sin(p.a) * rr * rad, z = rad * 0.009 * p.z, fade = Math.min(1, f * 6, (1 - f) * 6);
      cx.save(); cx.translate(px, py); cx.rotate(p.rot + t * 0.3); cx.globalAlpha = a * fade;
      if (p.up) { cx.fillStyle = '#f4f1e6'; cx.fillRect(-z * 1.6, -z * 0.45, z * 3.2, z * 0.9); }
      else { cx.fillStyle = '#3d5a2a'; cx.beginPath(); cx.moveTo(0, -z); cx.lineTo(z * 0.8, 0); cx.lineTo(0, z); cx.lineTo(-z * 0.8, 0); cx.closePath(); cx.fill(); }
      cx.restore();
    }
    // the cut edges: a fine highlight where the face meets the surface
    cx.strokeStyle = 'rgba(255,240,215,.45)'; cx.lineWidth = Math.max(1, rad * 0.006); cx.beginPath(); cx.moveTo(x0 + rad, y0); cx.lineTo(x0, y0); cx.lineTo(x0, y0 + rad); cx.stroke();
    cx.restore();
    var la = a * ss(18.5, 19.5, t), L2 = function (txt, r, ang) { var px = x0 + Math.cos(ang) * r * rad, py = y0 + Math.sin(ang) * r * rad; label(txt, CW, py, la, px, py, 0.027); };      // down the right side, each level with its spot
    L2('Iron core', rc * 0.55, 0.3);
    L2('Mantle crystals', (m + rc) / 2, 0.55);
    L2('Magma ocean', (crust - kw + m) / 2, 0.82);
    L2('Crust', (1 + crust) / 2, 1.18);
  }
  function fountain(x, y, rad, s) {      // a fire fountain: molten spray thrown kilometers high, falling back as glass beads
    if (s < 0 || s > 3.4) return; var k = 9; function R() { k = (k * 16807) % 2147483647; return k / 2147483647; }
    cx.globalCompositeOperation = 'lighter';
    for (var i = 0; i < 160; i++) { var b = R() * 2.4, a2 = s - b; if (a2 < 0 || a2 > 1.0) continue; var ang = -Math.PI / 2 + (R() - 0.5) * 0.9, v = rad * (0.08 + R() * 0.07);
      var px = x + Math.cos(ang) * v * a2 * 2, py = y + Math.sin(ang) * v * a2 * 2 + rad * 0.32 * a2 * a2, h = 1 - a2;
      cx.fillStyle = 'rgba(255,' + (150 + 90 * h | 0) + ',' + (60 * h | 0) + ',' + (0.4 + 0.5 * h) + ')'; var z = Math.max(1.2, rad * 0.006); cx.fillRect(px - z, py - z, 2 * z, 2 * z); }
    cx.globalCompositeOperation = 'source-over';
  }
  function moonScene(S, rr) {
    var lon0 = lonAt(t), x0 = CW * 0.5, y0 = CH * 0.47, rad = S * 0.35;
    // during the lava, closer in on the near side's maria, so the floods can be watched
    var Z = 1 + 0.8 * ss(42.3, 44.3, t) * (1 - ss(49.8, 51.8, t));
    if (Z > 1.001) { var tq = project(18, 0, lon0 - 360 * Math.floor(lon0 / 360), 0, 0, 1), w = (Z - 1) / 0.8; rad *= Z; x0 -= tq.x * rad * w; y0 -= tq.y * rad * w; rr = Math.min(300, Math.round(rr * Z)); }
    // Earth, huge and close at first, falling behind as the Moon's orbit grows
    var ea = 1 - ss(26, 33, t);
    if (ea > 0) { cx.globalAlpha = ea; drawSphere('e', -CW * 0.12 - CW * 0.4 * ss(16, 33, t), CH * 0.42, S * (0.55 - 0.25 * ss(16, 33, t)), rr, t * 6, { kind: 'earth', hot: 0.4 * (1 - ss(16, 22, t)), drift: t * 3 }); cx.globalAlpha = 1; }
    var P = { kind: 'moon', heat: 1 - 0.75 * ss(16, 26, t), melt: 1 - ss(29, 32.5, t), raft: ss(24, 30, t), detail: ss(32, 42, t), ga: gaAt(t), tycho: ss(57, 58, t), cop: ss(54, 55, t), drift: t * 2 };
    drawSphere('m', x0, y0, rad, rr, lon0, P);
    cutaway(x0, y0, rad, ss(17, 18.5, t) * (1 - ss(30, 31.5, t)));
    // impacts
    for (var i = 0; i < smallHits.length; i++) { var h = smallHits[i], u = (t - h.t) / 0.7; if (u < 0 || u > 1) continue; var p = project(h.lat, h.lon, lon0 - 360 * Math.floor(lon0 / 360), x0, y0, rad); if (p.z > 0.1) flash(p.x, p.y, rad * h.s, u, false); }
    for (var j = 0; j < EVENTS.length; j++) { var E = EVENTS[j], v = (t - E.t) / 1.4; if (v < 0 || v > 2.6) continue; var q = project(E.lat, E.lon, lon0 - 360 * Math.floor(lon0 / 360), x0, y0, rad);
      if (q.z > 0.05 && v <= 1 && !E.lava && !E.fount) flash(q.x, q.y, rad * E.s, v, true);
      if (q.z > 0.05 && E.fount) fountain(q.x, q.y, rad, t - E.t);
      if (q.z > 0.05) label(E.name, q.x, q.y - rad * E.s - CW * 0.09, Math.min(1, v * 3) * Math.min(1, (2.6 - v) * 2), q.x, q.y - rad * E.s * 0.3); }
  }

  function makeStars() { stars = document.createElement('canvas'); stars.width = CW; stars.height = CH; var x = stars.getContext('2d'), s = 3;
    function R() { s = (s * 16807) % 2147483647; return s / 2147483647; }
    for (var i = 0; i < 260; i++) { x.fillStyle = 'rgba(255,255,255,' + (0.15 + 0.6 * R() * R()) + ')'; var z = R() < 0.06 ? 1.6 : 1; x.fillRect(R() * CW, R() * CH, z, z); } }
  function size() { var w = Math.min(box.clientWidth || 360, 560), d = Math.min(2, window.devicePixelRatio || 1); CW = cv.width = Math.round(w * d); CH = cv.height = Math.round(w * d * 0.82); makeStars(); }
  function play() {
    if (t >= T_END) { t = 0; resetParts(); }
    playing = true; btn.textContent = '❚❚ Pause'; last = performance.now(); if (!raf) raf = requestAnimationFrame(frame);
  }
  function pause() { playing = false; btn.textContent = '\u25B6\uFE0E Play'; }
  function seek(s) {      // jump to s seconds; the debris is re-run from the impact (cheap: no drawing)
    s = Math.max(0, Math.min(T_END, s)); var from = t;
    if (s < from || from < HIT) { t = 0; resetParts(); }
    var step = 1 / 30; while (t + step < s && t < 16) { t += step; simStep(step); }
    t = s; draw();
  }
  function scrubber() {      // drag along the time line to go back and forth through time
    var want = null, pend = false, wasPlaying = false;
    function at(e) { var r = bar.getBoundingClientRect(); return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * T_END; }
    function go() { pend = false; if (want != null) seek(want); }
    bar.addEventListener('pointerdown', function (e) { e.preventDefault(); try { bar.setPointerCapture(e.pointerId); } catch (x) { /* fine */ } scrub = true; wasPlaying = playing; pause(); want = at(e); if (!pend) { pend = true; requestAnimationFrame(go); } });
    bar.addEventListener('pointermove', function (e) { if (!scrub) return; want = at(e); if (!pend) { pend = true; requestAnimationFrame(go); } });
    function end() { if (!scrub) return; scrub = false; draw(); if (wasPlaying && t < T_END) play(); }
    bar.addEventListener('pointerup', end); bar.addEventListener('pointercancel', end);
    var ticks = bar.querySelector('.mh-ticks'); if (ticks && !ticks.childNodes.length) ERAS.forEach(function (e) { var i = document.createElement('i'); i.style.left = (100 * e[0] / T_END) + '%'; ticks.appendChild(i); });
  }
  window.MoonHistory = {
    open: function (root) {
      box = root; cv = root.querySelector('canvas'); cx = cv.getContext('2d'); cap = root.querySelector('.mh-cap'); eraEl = root.querySelector('.mh-era'); yearEl = root.querySelector('.mh-year'); gaEl = root.querySelector('.mh-ga');
      bar = root.querySelector('.mh-bar'); barDot = root.querySelector('.mh-dot'); btn = root.querySelector('.mh-play');
      btn.onclick = function () { playing ? pause() : play(); };
      if (!bar.dataset.on) { bar.dataset.on = 1; scrubber(); }
      size(); eraEl.textContent = 'Loading…';
      return load().then(function () { t = 0; resetParts(); play(); });
    },
    close: function () { playing = false; if (raf) cancelAnimationFrame(raf); raf = 0; },
    seek: function (s) { pause(); seek(s); }
  };
})();
