/*
 * app.js - UI shell. Everything astronomical lives in ../solver; this file
 * only moves pixels and text around.
 */

import { readExif, exifDate, sensorWidthFrom } from './exif.js';
import { altAz, compass, formatRA, formatDec, CONSTELLATIONS } from './solver/astro.js';
import { constellationAt } from './solver/constellation.js';

const MAX_EDGE = 3000;        // downscale cap: centroids stay sub-pixel well below this
const $ = (id) => document.getElementById(id);

const el = {
  start: $('start'), busy: $('busy'), busyLabel: $('busy-label'), busyBar: $('busy-bar'),
  out: $('out'), fail: $('fail'), failHead: $('fail-head'), failWhy: $('fail-why'),
  file: $('file'), view: $('view'), failview: $('failview'),
  headline: $('headline'), subline: $('subline'), readout: $('readout'), detail: $('detail'),
  starlist: $('starlist'), starWrap: $('starlist-wrap'),
  dsolist: $('dsolist'), dsoWrap: $('dsolist-wrap'),
  catStatus: $('cat-status'), offline: $('offline'),
  sensor: $('sensor'), sensorCustom: $('sensor-custom'), focal: $('focal'),
  lat: $('lat'), lon: $('lon'), when: $('when'), locate: $('locate'),
  mode: $('mode'),
};

const state = {
  bitmap: null, width: 0, height: 0,
  result: null, meta: null, when: null, unknown: false,
  show: { labels: true, stars: true, objects: true, lines: false, found: false, grid: false, mag: Infinity, nObj: 8 },
};

/* ------------------------------------------------------------- preferences */

const PREF = 'pointing-check';
function loadPrefs() {
  try {
    const p = JSON.parse(localStorage.getItem(PREF) || '{}');
    if (p.focal) el.focal.value = p.focal;
    if (p.unknown) { state.unknown = true; el.focal.value = ''; }
    if (p.sensor) {
      // Older builds offered 36.0 mm; fold it into Full frame.
      el.sensor.value = p.sensor === '36' ? '35.9' : p.sensor;
      if (!el.sensor.value) el.sensor.value = '35.9';
      if (p.sensor === 'custom') {
        el.sensorCustom.hidden = false;
        el.sensorCustom.value = p.sensorCustom || '';
      }
    }
    if (p.lat != null) el.lat.value = p.lat;
    if (p.lon != null) el.lon.value = p.lon;
    // Nothing set here yet: start from the location saved in Dark Sky Almanac.
    if (!el.lat.value && !el.lon.value) {
      const a = JSON.parse(localStorage.getItem('dsa-location') || 'null');
      if (a && isFinite(+a.lat) && isFinite(+a.lng)) { el.lat.value = (+a.lat).toFixed(4); el.lon.value = (+a.lng).toFixed(4); }
    }
  } catch { /* first run, or storage blocked */ }
  syncModeLabel();
}
function savePrefs() {
  try {
    localStorage.setItem(PREF, JSON.stringify({
      focal: el.focal.value,
      unknown: !!state.unknown,
      sensor: el.sensor.value,
      sensorCustom: el.sensorCustom.value,
      lat: el.lat.value, lon: el.lon.value,
    }));
  } catch { /* storage blocked; preferences just won't persist */ }
}
function syncModeLabel() {
  if (!el.mode) return;                     // no day/night switch inside the Almanac
  const night = document.documentElement.dataset.mode === 'night';
  el.mode.textContent = night ? 'Day' : 'Night';
  el.mode.setAttribute('aria-label', night ? 'Switch to day colours' : 'Switch to night colours');
  document.querySelector('meta[name=theme-color]')
    ?.setAttribute('content', night ? '#000000' : '#f7f5f2');
}

/* ----------------------------------------------------------------- worker */

const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
let catalogReady = false;
let pending = null;

worker.onmessage = (ev) => {
  const m = ev.data;
  if (m.type === 'progress') {
    const pct = m.total ? Math.min(100, (m.loaded / m.total) * 100) : 0;
    el.catStatus.textContent = `Loading star catalog — ${Math.round(pct)}%`;
    if (!el.busy.hidden) {
      el.busyLabel.textContent = 'Loading star catalog';
      el.busyBar.style.width = `${pct}%`;
    }
    return;
  }
  if (m.type === 'ready') {
    catalogReady = true;
    el.catStatus.textContent =
      `${m.nStars.toLocaleString()} stars ready.`;
    if (pending) { const p = pending; pending = null; runSolve(p); }
    return;
  }
  if (m.type === 'error') { showFail('Something broke', m.message); return; }
  if (m.type === 'trying') {
    el.busyLabel.textContent = m.pass ? 'Second pass \u00b7 filtering clouds and foreground'
      : m.near ? `Trying nearby focal lengths \u00b7 ${Math.round(m.f)} mm`
      : `Trying ${Math.round(m.f)} mm \u00b7 ${m.i} of ${m.n}`;
    el.busyBar.style.width = `${55 + 40 * (m.i / m.n)}%`;
    return;
  }
  if (m.type === 'result') { handleResult(m); }
};

worker.postMessage({ type: 'load' });

/* ------------------------------------------------------------------ input */

/* Focal length is required before a frame is chosen, rather than reported
   as a failure afterwards: many manual lenses write none into the file. */
const LENSES = [14, 16, 20, 24, 35, 50, 85, 135, 200, 300];
// Smart scopes: one tap sets the focal length and the sensor. Both Pro models use
// the same 3840 x 2160 sensor with 2.9 um pixels, 11.1 mm wide. Sources: ZWO's
// S30 Pro page (30 mm f/5.3, 160 mm; seestar.com) and the S50 Pro announcement
// (50 mm f/5.2, 260 mm; 2.9 um). Their published 4.6 deg and 2.8 deg fields match
// these numbers on the sensor diagonal.
const SCOPES = [{ n: 'Seestar S30 Pro', f: 160, sw: '11.1' }, { n: 'Seestar S50 Pro', f: 260, sw: '11.1' }];
const chipBox = $('focal-chips'), focalSub = $('focal-sub'), drop = $('drop');
const FOCAL_HINT = focalSub ? focalSub.textContent : '';
function focalValue() { const f = Number(el.focal.value); return f >= 4 && f <= 2000 ? f : 0; }
// "Unknown": no value; every focal length from 12 to 1000 mm is tried in 1.2x
// steps (each try covers +-12%), wide first, and the first that solves wins.
const LADDER = Array.from({ length: 25 }, (_, i) => Math.round(12 * 1.2 ** i * 10) / 10);
const lensOK = () => state.unknown || !!focalValue();
const FOCAL_PH = el.focal.placeholder;
function syncFocal(warn) {
  const ok = lensOK();
  el.focal.placeholder = state.unknown ? 'Unknown \u2014 each lens will be tried' : FOCAL_PH;
  if (drop) drop.classList.toggle('off', !ok);
  el.focal.classList.toggle('need', !ok && !!warn);
  if (focalSub) {
    focalSub.classList.toggle('need', !ok && !!warn);
    focalSub.textContent = (!ok && warn) ? 'Enter the focal length first, then load the frame.' : FOCAL_HINT;
  }
  if (chipBox) for (const c of chipBox.children) {
    const sw = c.dataset.sw;
    c.classList.toggle('on', c.dataset.f === '?' ? !!state.unknown
      : !state.unknown && Number(c.dataset.f) === focalValue() && (!sw || el.sensor.value === sw));
  }
}
if (chipBox) {
  chipBox.innerHTML = LENSES.map((f) => `<button type="button" class="zcl-chip" data-f="${f}">${f}</button>`).join('')
    + '<button type="button" class="zcl-chip" data-f="?">Unknown</button>'
    + SCOPES.map((s) => `<button type="button" class="zcl-chip" data-f="${s.f}" data-sw="${s.sw}">${s.n}</button>`).join('');
  chipBox.addEventListener('click', (e) => {
    const b = e.target.closest('[data-f]'); if (!b) return;
    state.unknown = b.dataset.f === '?';
    el.focal.value = state.unknown ? '' : b.dataset.f;
    if (b.dataset.sw) { el.sensor.value = b.dataset.sw; el.sensorCustom.hidden = true; }
    savePrefs(); syncFocal(false);
    resolveWithLens();
  });
}
el.focal.addEventListener('input', () => { state.unknown = false; savePrefs(); syncFocal(false); });
el.sensor.addEventListener('change', () => syncFocal(false));
el.focal.addEventListener('change', resolveWithLens);
// A frame is on screen (solved or not) and the lens changed: solve it again
// with exactly the value entered, ignoring what the file records.
function resolveWithLens() {
  if (!state.file || !lensOK() || !el.busy.hidden) return;
  if (el.out.hidden && el.fail.hidden) return;
  loadFrame(state.file, true);
}
if (drop) drop.addEventListener('click', (e) => {
  if (lensOK()) return;
  e.preventDefault();
  syncFocal(true);
  el.focal.focus();
});

el.file.addEventListener('change', async () => {
  const f = el.file.files && el.file.files[0];
  if (f) await loadFrame(f);
  el.file.value = '';
});

async function loadFrame(file, forceFocal = false) {
  show('busy');
  el.busyLabel.textContent = 'Reading the frame';
  el.busyBar.style.width = '8%';

  const buf = await file.arrayBuffer();
  const meta = readExif(buf);
  state.meta = meta;
  state.file = file;                         // kept for the full-resolution export

  const when = exifDate(meta) || new Date();
  state.when = when;
  el.when.value = toLocalInput(when);

  if (meta.gps && el.lat.value === '') {
    el.lat.value = meta.gps.lat.toFixed(4);
    el.lon.value = meta.gps.lon.toFixed(4);
    savePrefs();
  }
  const sw = sensorWidthFrom(meta);
  if (sw && el.sensor.value === '35.9' && Math.abs(sw - 35.9) > 1.5) {
    // Snap to a listed size when the camera reports one; otherwise enter it.
    const preset = [...el.sensor.options].find((o) => Math.abs(Number(o.value) - sw) <= 0.4);
    if (preset) {
      el.sensor.value = preset.value;
    } else {
      el.sensor.value = 'custom';
      el.sensorCustom.hidden = false;
      el.sensorCustom.value = sw.toFixed(1);
    }
  }

  let bmp;
  try {
    bmp = await createImageBitmap(new Blob([buf], { type: file.type || 'image/jpeg' }));
  } catch {
    showFail('Could not open that file', 'It needs to be a JPEG or PNG the phone can decode.');
    return;
  }

  state.srcEdge = Math.max(bmp.width, bmp.height);   // original size, for the 'too small' advice
  state.srcW = bmp.width; state.srcH = bmp.height;   // plate-solver values describe this file
  const scale = Math.min(1, MAX_EDGE / Math.max(bmp.width, bmp.height));
  const w = Math.max(1, Math.round(bmp.width * scale));
  const h = Math.max(1, Math.round(bmp.height * scale));

  const off = document.createElement('canvas');
  off.width = w; off.height = h;
  const ctx = off.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(bmp, 0, 0, w, h);
  const rgba = ctx.getImageData(0, 0, w, h);

  state.bitmap = off;
  state.width = w;
  state.height = h;

  // What was entered is used, unless the file records a clearly different
  // focal length (a zoom left at another setting) — then the file is right,
  // and the field shows it. Changing the lens afterwards forces the entry.
  let focal = focalValue();
  const fx = meta.focalLength;
  let focalList = null;
  if (state.unknown) {
    // The file's own focal length, if it has one, is the first guess.
    focalList = fx ? [fx, ...LADDER.filter((f) => Math.abs(f / fx - 1) > 0.12)] : LADDER.slice();
    focal = focalList[0];
    if (focalSub) focalSub.textContent = FOCAL_HINT;
  } else if (!forceFocal && fx && (!focal || Math.abs(fx / focal - 1) > 0.1)) {
    focal = fx;
    el.focal.value = String(Math.round(fx * 10) / 10);
    syncFocal(false);
    if (focalSub) focalSub.textContent = `Using ${el.focal.value} mm from the photo. Change it to solve again.`;
  } else if (focalSub) focalSub.textContent = FOCAL_HINT;
  if (!focal) {                              // cannot happen from the button, but keep the guard
    show('start'); syncFocal(true); el.focal.focus();
    return;
  }

  const job = { rgba: rgba.data.buffer, width: w, height: h,
    focalMm: focal, sensorWidthMm: sensorWidth(), focalList };

  if (!catalogReady) {
    pending = job;
    el.busyLabel.textContent = 'Loading star catalog';
    return;
  }
  runSolve(job);
}

function runSolve(job) {
  el.busyLabel.textContent = 'Finding stars and solving';
  el.busyBar.style.width = '55%';
  worker.postMessage({ type: 'solve', ...job }, [job.rgba]);
}

function sensorWidth() {
  if (el.sensor.value === 'custom') return Number(el.sensorCustom.value) || 35.9;
  return Number(el.sensor.value) || 35.9;
}

/* ---------------------------------------------------------------- results */

// A screenshot or a resized export (phones save these around 1,200 px) shrinks
// stars to one or two pixels and smears them with compression, which hides the
// patterns the solver matches. Say so, rather than blaming the lens settings.
function smallAdvice() {
  if (!state.srcEdge || state.srcEdge >= 2000) return '';
  return `This image is only ${state.srcEdge.toLocaleString()} px on its long side, which looks like a screenshot or a resized copy. At that size stars shrink to a pixel or two and compression blurs them away. Load the original file straight from the camera.`;
}

function handleResult(m) {
  el.busyBar.style.width = '100%';
  if (!m.ok) {
    state.result = m;
    const n = m.nDetected || (m.detected ? m.detected.length : 0);
    if (m.reason === 'too-few-stars') {
      showFail(`Only ${n} stars found`,
        'Not enough to work with. A longer exposure or higher ISO usually fixes it.');
    } else if (m.reason === 'unknown-lens') {
      showFail(`No match from 12 to 1000 mm`, smallAdvice() ||
        `${n} stars were found, but no focal length fitted. Check the sensor width under Camera & Location, or try a frame with more stars.`);
    } else if (m.reason === 'no-layer-for-field') {
      showFail('Field out of range',
        'The focal length puts this outside what the catalog covers. Check the focal length above.');
    } else if ((m.snrP90 || 0) < 10) {
      showFail('No stars in this frame',
        'What was found looks like sensor noise rather than stars. Check the exposure, and that this is the sub rather than a dark or a preview.');
    } else {
      showFail(`No match from ${n} stars`, smallAdvice() || (n < 40
          ? 'Usually too few stars. Expose longer, raise ISO, or try a frame with more sky and less foreground.'
          : 'Stars were found but nothing matched. Check the focal length above and the sensor width under Camera & Location — a wrong value is the usual cause.'));
    }
    drawOverlay(el.failview, m, { labels: false, stars: false, found: true, grid: false });
    return;
  }

  state.result = m;
  resetMag();
  show('out');
  drawOverlay(el.view, m, state.show);
  renderText(m);
  if (!state.unknown && focalSub && m.focalNominalMm && Math.abs(m.focalMm / m.focalNominalMm - 1) > 0.12) {
    const pct = Math.round((m.focalMm / m.focalNominalMm - 1) * 100);
    focalSub.textContent = `Solved at ${Math.round(m.focalMm)} mm, ${Math.abs(pct)}% ${pct > 0 ? 'more' : 'less'} than entered. The photo may be cropped, or the sensor width under Camera & Location may not match your camera.`;
  }
  if (state.unknown && focalSub) {
    focalSub.textContent = `Found it: about ${Math.round(m.focalMm)} mm, after ${m.tried} ${m.tried === 1 ? 'try' : 'tries'}.`;
  }
}

function renderText(m) {
  const named = m.stars.filter((s) => s.name);
  const bright = m.stars[0];
  // The constellation is where the frame's center falls on the official IAU
  // boundaries, not borrowed from whichever named star happens to be in
  // frame (a deep-sky field often has none, and a star near a border can
  // belong to the neighbor).
  const con = constellationAt(m.ra, m.dec);
  const conName = CONSTELLATIONS[con] || con;
  const namedObj = m.dsos.find((o) => !/^(M\d|NGC |IC |C \d)/.test(o.n));

  // Lead with what he is actually asking: what am I pointed at?
  const anchor = named[0] || null;
  el.headline.textContent = anchor ? `Near ${anchor.name}`
    : namedObj ? namedObj.n
    : `In ${conName}`;

  const bits = [conName];
  const nextObj = m.dsos.find((o) => anchor || o !== namedObj);
  if (nextObj) bits.push(`${nextObj.n} in frame`);
  el.subline.textContent = bits.join(' · ');

  const rows = [];
  rows.push(['Right ascension', formatRA(m.ra)]);
  rows.push(['Declination', formatDec(m.dec)]);

  const lat = Number(el.lat.value), lon = Number(el.lon.value);
  const when = el.when.value ? fromLocalInput(el.when.value) : state.when;
  if (Number.isFinite(lat) && Number.isFinite(lon) && el.lat.value !== '' && el.lon.value !== '') {
    const aa = altAz(m.ra, m.dec, lat, lon, when || new Date());
    rows.push(['Altitude', `${aa.alt.toFixed(1)}<span class="unit">°</span>`]);
    rows.push(['Azimuth', `${aa.az.toFixed(1)}<span class="unit">° ${compass(aa.az)}</span>`]);
    if (aa.alt < 0) rows.push(['Note', 'below the horizon at this time']);
  } else {
    rows.push(['Altitude / azimuth', '<span class="unit">add a location below</span>']);
  }

  rows.push(['Field', `${m.fov.w.toFixed(2)} × ${m.fov.h.toFixed(2)}<span class="unit">°</span>`]);
  rows.push(['North is', `${m.roll.toFixed(1)}<span class="unit">° clockwise from up</span>`]);
  el.readout.innerHTML = rows
    .map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');

  // Values a desktop plate solver asks for. The solve may run on a downscaled
  // copy, so image scale and pixel size are converted back to the file's own
  // pixels. Focal length and pixel size only matter as a pair: together they
  // must give the file's image scale.
  const k = state.srcEdge ? Math.max(state.width, state.height) / state.srcEdge : 1;
  const scale = m.scaleArcsecPx * k;                 // arcsec per file pixel
  const pix = scale * m.focalMm / 206.265;           // µm per file pixel
  const raDeg = ((((m.ra * 180 / Math.PI) % 360) + 360) % 360).toFixed(4);   // m.ra, m.dec are radians
  const decDeg = (m.dec * 180 / Math.PI).toFixed(4);
  const sv = [
    ['Right ascension', formatRA(m.ra), `${raDeg}°`],
    ['Declination', formatDec(m.dec), `${decDeg}°`],
    ['Focal length', `${m.focalMm.toFixed(1)} mm`],
    ['Pixel size', `${pix.toFixed(2)} µm`, 'per pixel of this file'],
    ['Image scale', `${scale.toFixed(2)}″ per pixel`],
    ['Image size', `${state.srcW} × ${state.srcH} px`],
    ['Field of view', `${m.fov.w.toFixed(2)}° × ${m.fov.h.toFixed(2)}°`],
    ['Rotation', `${m.roll.toFixed(1)}°`, 'north, clockwise from up'],
    ['Flipped', m.mirrored ? 'Yes' : 'No'],
    ['Stars matched', `${m.nMatch} of ${m.nDetected}`],
    ['Accuracy', `${m.rmsArcsec.toFixed(1)}″ (${m.rmsPx.toFixed(2)} px)`],
  ];
  el.detail.innerHTML = sv.map(([a, b, c]) =>
    `<dt>${a}</dt><dd>${b}${c ? `<small>${c}</small>` : ''}</dd>`).join('');
  state.copyText = [
    'Star ID plate solve (Dark Sky Almanac)',
    `RA: ${formatRA(m.ra)} (${raDeg}°)`,
    `Dec: ${formatDec(m.dec)} (${decDeg}°)`,
    `Focal length: ${m.focalMm.toFixed(1)} mm`,
    `Pixel size: ${pix.toFixed(2)} µm`,
    `Image scale: ${scale.toFixed(2)}"/px`,
    `Image size: ${state.srcW} x ${state.srcH} px`,
    `Field of view: ${m.fov.w.toFixed(2)} x ${m.fov.h.toFixed(2)} deg`,
    `Rotation: ${m.roll.toFixed(1)} deg (north, clockwise from up)`,
    `Flipped: ${m.mirrored ? 'yes' : 'no'}`,
  ].join('\n');

  // Named stars first, then designated ones, then simply the brightest. Only
  // a few hundred stars carry a proper name, so a name-only list is usually
  // one line long and tells him nothing.
  const labelled = m.stars.filter((s) => s.name || s.bayer);
  const starItems = (labelled.length >= 3 ? labelled : m.stars).slice(0, 12);
  el.starWrap.hidden = starItems.length === 0;
  el.starlist.innerHTML = starItems.map((s) => {
    const bay = prettyBayer(s.bayer);
    const label = s.name || bay || `mag ${s.mag.toFixed(1)} star`;
    const meta = [s.name && bay ? bay : null, s.con ? (CONSTELLATIONS[s.con] || s.con) : null]
      .filter(Boolean).join(', ');
    return `<li><span><span class="nm">${esc(label)}</span>${meta ? ` <span class="meta">${esc(meta)}</span>` : ''}</span><span class="mg">mag ${s.mag.toFixed(1)}</span></li>`;
  }).join('');

  el.dsoWrap.hidden = m.dsos.length === 0;
  el.dsolist.innerHTML = m.dsos.slice(0, 12).map((o) => {
    const meta = [o.d, o.t].filter(Boolean).join(', ');
    return `<li><span><span class="nm">${esc(o.n)}</span>${meta ? ` <span class="meta">${esc(meta)}</span>` : ''}</span><span class="mg">${o.m != null ? `mag ${o.m.toFixed(1)}` : ''}</span></li>`;
  }).join('');
}

const GREEK = {
  Alp: '\u03b1', Bet: '\u03b2', Gam: '\u03b3', Del: '\u03b4', Eps: '\u03b5',
  Zet: '\u03b6', Eta: '\u03b7', The: '\u03b8', Iot: '\u03b9', Kap: '\u03ba',
  Lam: '\u03bb', Mu: '\u03bc', Nu: '\u03bd', Xi: '\u03be', Omi: '\u03bf',
  Pi: '\u03c0', Rho: '\u03c1', Sig: '\u03c3', Tau: '\u03c4', Ups: '\u03c5',
  Phi: '\u03c6', Chi: '\u03c7', Psi: '\u03c8', Ome: '\u03c9',
};

/**
 * HYG writes designations column-padded: "44Iot Ori", "29    Ori", "43The2Ori".
 * Turn them into "44 \u03b9 Ori", "29 Ori", "43 \u03b8\u00b2 Ori".
 */
function prettyBayer(bf) {
  if (!bf) return null;
  const raw = String(bf).trim();
  const m = /^(.*?)\s*([A-Za-z]{3})$/.exec(raw);
  if (!m) return raw.replace(/\s+/g, ' ');
  const con = m[2];
  const pre = m[1].trim();
  const mm = /^(\d*)\s*([A-Za-z]{2,3})?(\d)?$/.exec(pre);
  if (!mm) return `${pre} ${con}`.replace(/\s+/g, ' ').trim();
  const flam = mm[1] || '';
  const g = mm[2] ? (GREEK[mm[2]] || mm[2]) : '';
  const sup = mm[3] ? (['\u00b9', '\u00b2', '\u00b3'][Number(mm[3]) - 1] || mm[3]) : '';
  return [flam, g ? g + sup : '', con].filter(Boolean).join(' ');
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------------------------------------------------------------- overlay */

// opts (export only): src = full-resolution image, f = output pixels per
// solve pixel, shown = width the labels are sized for, nStars / nDso = how
// many to name. All drawing stays in solve-pixel coordinates; g.scale maps it.
function drawOverlay(canvas, m, show, opts = {}) {
  if (!state.bitmap) return;
  const w = state.width, h = state.height, f = opts.f || 1;
  canvas.width = Math.round(w * f);
  canvas.height = Math.round(h * f);
  const g = canvas.getContext('2d');
  g.drawImage(opts.src || state.bitmap, 0, 0, canvas.width, canvas.height);
  g.scale(f, f);
  const lineK = Math.max(1 / f, w / (opts.shown || canvas.clientWidth || Math.min(380, w)));

  // Constellation figures first, faint, so everything else sits on top.
  if (show.lines && m.figures) {
    g.strokeStyle = 'rgba(203,168,90,.3)';
    g.lineWidth = 1.5 * lineK;
    g.lineCap = 'round';
    g.beginPath();
    for (const fg of m.figures) for (const s of fg.segs) { g.moveTo(s[0], s[1]); g.lineTo(s[2], s[3]); }
    g.stroke();
  }

  // Scale to how large the canvas actually appears, not its pixel count. A
  // 3000 px frame shown 340 px wide needs ~9x strokes and text to be legible;
  // sizing off the buffer makes every label unreadable on a phone.
  const shown = opts.shown || canvas.clientWidth || Math.min(380, w);
  const k = Math.max(1 / f, w / shown);
  const hot = '#E6CC85', cool = '#9DC4E6', dim = 'rgba(203,168,90,.6)';
  g.lineWidth = 1.4 * k;
  g.font = `500 ${13 * k}px Montserrat, -apple-system, system-ui, sans-serif`;
  g.textBaseline = 'middle';

  if (show.found && m.detected) {
    g.strokeStyle = dim;
    for (const s of m.detected) {
      g.beginPath();
      g.arc(s.x, s.y, 4 * k, 0, 6.2832);
      g.stroke();
    }
  }

  // Centre reticle and north arrow go down before any label, and reserve
  // their space, so a label never lands on top of them.
  const taken = [];
  if (show.grid) {
    const cx = w / 2, cy = h / 2, arm = 26 * k, gap = 9 * k;
    g.strokeStyle = hot;
    g.lineWidth = 1.8 * k;
    g.beginPath();
    g.moveTo(cx - arm, cy); g.lineTo(cx - gap, cy);
    g.moveTo(cx + gap, cy); g.lineTo(cx + arm, cy);
    g.moveTo(cx, cy - arm); g.lineTo(cx, cy - gap);
    g.moveTo(cx, cy + gap); g.lineTo(cx, cy + arm);
    g.stroke();
    taken.push([cx - arm, cy - arm, cx + arm, cy + arm]);

    if (m.ok) {
      const a = (m.roll * Math.PI) / 180;
      const L = 52 * k, px = w - 52 * k, py = 52 * k;
      const dx = m.mirrored ? -Math.sin(a) : Math.sin(a), dy = -Math.cos(a);
      g.beginPath();
      g.moveTo(px - dx * L * 0.35, py - dy * L * 0.35);
      g.lineTo(px + dx * L * 0.62, py + dy * L * 0.62);
      g.stroke();
      g.fillStyle = hot;
      g.textAlign = 'center';
      g.fillText('N', px + dx * L * 0.88, py + dy * L * 0.88);
      g.textAlign = 'start';
      taken.push([px - L, py - L, px + L, py + L]);
    }
  }
  g.lineWidth = 1.4 * k;

  // Credit plate in the bottom-right corner, on every drawn frame. Its
  // space is reserved first so no label lands on it; it is drawn last.
  let mark = null;
  if (opts.mark !== false) {            // always: on screen, in screenshots and in the saved file
    const q = opts.shown ? k : k * 0.75;  // a touch smaller on screen, where the frame is small
    const pad = 9 * q, gap = 4 * q, f1 = 10.5 * q, f2 = 9.5 * q, star = 9 * q;
    g.font = `600 ${f1}px Montserrat, -apple-system, system-ui, sans-serif`;
    if ('letterSpacing' in g) g.letterSpacing = `${0.16 * f1}px`;
    const t1 = 'DARK SKY ALMANAC', w1 = g.measureText(t1).width;
    if ('letterSpacing' in g) g.letterSpacing = '0px';
    g.font = `400 ${f2}px Montserrat, -apple-system, system-ui, sans-serif`;
    const t2 = 'Star ID \u00b7 app.darkskyalmanac.com', w2 = g.measureText(t2).width;
    const bw = pad * 2 + Math.max(star + 6 * q + w1, w2), bh = pad * 2 + f1 + gap + f2 + 2 * q;
    const m2 = 12 * q, bx = w - bw - m2, by = h - bh - m2;
    mark = { bx, by, bw, bh, pad, gap, f1, f2, star, t1, t2, q };
    taken.push([bx - 4 * k, by - 4 * k, w, h]);
    g.font = `500 ${13 * k}px Montserrat, -apple-system, system-ui, sans-serif`;
  }

  // Labels go only where they fit. A wide field holds hundreds of catalog
  // stars; labelling all of them buries the picture.
  const fits = (x, y, tw, th) => {
    if (x < 2 * k || y < 2 * k || x + tw > w - 2 * k || y + th > h - 2 * k) return false;
    for (const r of taken) {
      if (x < r[2] && x + tw > r[0] && y < r[3] && y + th > r[1]) return false;
    }
    return true;
  };
  const place = (cxp, cyp, rad, text, colour) => {
    const tw = g.measureText(text).width + 7 * k;
    const th = 19 * k;
    const spots = [
      [cxp + rad + 5 * k, cyp - th / 2],
      [cxp - rad - 5 * k - tw, cyp - th / 2],
      [cxp - tw / 2, cyp + rad + 4 * k],
      [cxp - tw / 2, cyp - rad - 4 * k - th],
    ];
    for (const [x, y] of spots) {
      if (!fits(x, y, tw, th)) continue;
      g.fillStyle = 'rgba(13,10,24,.72)';
      g.fillRect(x, y, tw, th);
      g.fillStyle = colour;
      g.fillText(text, x + 3.5 * k, y + th / 2);
      taken.push([x, y, x + tw, y + th]);
      return true;
    }
    return false;
  };

  // The brightness slider trims stars, faintest first.
  const stars = (m.stars || []).filter((s) => s.mag <= show.mag);
  if (show.stars) {
    g.strokeStyle = hot;
    for (const s of stars) {
      const r = Math.max(4, 15 - s.mag * 1.5) * k;
      g.beginPath();
      g.arc(s.x, s.y, r, 0, 6.2832);
      g.stroke();
    }
  }
  // Objects: with Names on, an object is marked only if its name fits too —
  // an unnamed box tells you nothing.
  if (show.objects && m.dsos) {
    const sz = 22 * k, list = m.dsos.slice(0, show.nObj ?? 8);
    if (show.labels) for (const o of list) taken.push([o.x - sz / 2, o.y - sz / 2, o.x + sz / 2, o.y + sz / 2]);
    for (const o of list) {
      if (show.labels && !place(o.x, o.y, 14 * k, o.n, cool)) continue;
      g.strokeStyle = cool;
      g.lineWidth = 1.4 * k;
      g.strokeRect(o.x - sz / 2, o.y - sz / 2, sz, sz);
    }
  }
  if (show.labels && show.stars) {
    let n = 0;
    for (const s of stars) {
      if (n >= (opts.nStars || 10)) break;
      const t = s.name || prettyBayer(s.bayer);
      if (!t) continue;
      place(s.x, s.y, Math.max(4, 15 - s.mag * 1.5) * k, t, '#F2E4BE');
      n++;
    }
  }
  // Constellation names: quiet spaced capitals, no plate, only where clear.
  if (show.labels && show.lines && m.figures) {
    g.font = `600 ${11 * k}px Montserrat, -apple-system, system-ui, sans-serif`;
    if ('letterSpacing' in g) g.letterSpacing = `${2 * k}px`;
    g.fillStyle = 'rgba(230,204,133,.62)';
    g.textAlign = 'center';
    for (const fg of m.figures) {
      if (!fg.lab) continue;
      const t = fg.n.toUpperCase(), tw = g.measureText(t).width + 6 * k, th = 15 * k;
      for (const dy of [0, -24 * k, 24 * k]) {
        const x = fg.lab[0] - tw / 2, y = fg.lab[1] + dy - th / 2;
        if (!fits(x, y, tw, th)) continue;
        g.fillText(t, fg.lab[0], fg.lab[1] + dy);
        taken.push([x, y, x + tw, y + th]);
        break;
      }
    }
    if ('letterSpacing' in g) g.letterSpacing = '0px';
    g.textAlign = 'start';
  }

  if (mark) {
    const { bx, by, bw, bh, pad, gap, f1, f2, star, t1, t2, q } = mark, r = 7 * q;
    g.fillStyle = 'rgba(13,10,24,.9)';
    g.strokeStyle = 'rgba(203,168,90,.45)';
    g.lineWidth = 1 * q;
    g.beginPath();
    if (g.roundRect) g.roundRect(bx, by, bw, bh, r); else g.rect(bx, by, bw, bh);
    g.fill(); g.stroke();
    // four-point star, as in the app's title rule
    const sx = bx + pad + star / 2, sy = by + pad + f1 / 2, s = star / 2;
    g.fillStyle = '#CBA85A';
    g.beginPath();
    g.moveTo(sx, sy - s); g.lineTo(sx + s * 0.3, sy - s * 0.3); g.lineTo(sx + s, sy);
    g.lineTo(sx + s * 0.3, sy + s * 0.3); g.lineTo(sx, sy + s); g.lineTo(sx - s * 0.3, sy + s * 0.3);
    g.lineTo(sx - s, sy); g.lineTo(sx - s * 0.3, sy - s * 0.3); g.closePath(); g.fill();
    g.textBaseline = 'middle';
    g.textAlign = 'start';
    g.font = `600 ${f1}px Montserrat, -apple-system, system-ui, sans-serif`;
    if ('letterSpacing' in g) g.letterSpacing = `${0.16 * f1}px`;
    g.fillStyle = '#E6CC85';
    g.fillText(t1, bx + pad + star + 6 * q, sy);
    if ('letterSpacing' in g) g.letterSpacing = '0px';
    g.font = `400 ${f2}px Montserrat, -apple-system, system-ui, sans-serif`;
    g.fillStyle = '#9A8E6E';
    g.fillText(t2, bx + pad, by + pad + f1 + gap + f2 / 2 + 2 * q);
  }
}

/* ----------------------------------------------------------------- chrome */

function show(which) {
  for (const id of ['start', 'busy', 'out', 'fail']) el[id].hidden = (id !== which);
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

function showFail(head, why) {
  show('fail');
  el.failHead.textContent = head;
  el.failWhy.textContent = why;
}

function toLocalInput(d) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}
function fromLocalInput(v) {
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
}

for (const [id, key] of [['t-labels', 'labels'], ['t-stars', 'stars'], ['t-objects', 'objects'],
  ['t-lines', 'lines'], ['t-found', 'found'], ['t-grid', 'grid']]) {
  $(id).addEventListener('click', () => {
    state.show[key] = !state.show[key];
    $(id).classList.toggle('on', state.show[key]);
    $(id).setAttribute('aria-pressed', String(state.show[key]));
    if (state.result && state.result.ok) drawOverlay(el.view, state.result, state.show);
  });
}

$('again').addEventListener('click', () => el.file.click());

// Brightness slider. The left end keeps the three brightest stars (Vega,
// Altair and Deneb in a Summer Triangle frame); the right end keeps all.
// Positions map evenly onto the magnitude range in between.
const magIn = $('mag'), magOut = $('mag-out');
function magRange() {
  const ms = ((state.result && state.result.stars) || []).map((s) => s.mag).sort((a, b) => a - b);
  if (!ms.length) return null;
  return { lo: ms[Math.min(2, ms.length - 1)], hi: ms[ms.length - 1], ms };
}
function applyMag(redraw) {
  const r = magRange();
  if (!r) return;
  const t = Number(magIn.value) / 100;
  const lim = t >= 1 ? Infinity : r.lo + (r.hi - r.lo) * t;
  state.show.mag = lim;
  const n = r.ms.filter((x) => x <= lim).length;
  magOut.textContent = t >= 1 ? `All ${n} stars` : `Mag ${lim.toFixed(1)} and brighter \u00b7 ${n} star${n === 1 ? '' : 's'}`;
  if (redraw && state.result && state.result.ok && !magRAF) {
    magRAF = requestAnimationFrame(() => { magRAF = 0; drawOverlay(el.view, state.result, state.show); });
  }
}
let magRAF = 0;
// Each new frame starts at magnitude 3 (the bright, named stars), with room
// to slide either way; all stars if the frame has none that faint.
function resetMag() {
  const r = magRange();
  const t = r && r.hi > r.lo ? (3 - r.lo) / (r.hi - r.lo) : 1;
  magIn.value = Math.round(Math.max(0, Math.min(1, t)) * 100);
  applyMag(false);
  resetObj();
}

// Objects slider: how many of the ranked objects to mark (most popular first).
const objIn = $('obj'), objOut = $('obj-out');
function applyObj(redraw) {
  const total = ((state.result && state.result.dsos) || []).length;
  objIn.max = String(total);
  const n = Math.min(Number(objIn.value), total);
  state.show.nObj = n;
  objOut.textContent = !total ? 'None in frame' : n === 0 ? 'None' : n >= total ? `All ${total}` : `Top ${n} of ${total}`;
  if (redraw && state.result && state.result.ok && !magRAF) {
    magRAF = requestAnimationFrame(() => { magRAF = 0; drawOverlay(el.view, state.result, state.show); });
  }
}
function resetObj() {
  const total = ((state.result && state.result.dsos) || []).length;
  objIn.max = String(total);
  objIn.value = String(Math.min(8, total));
  applyObj(false);
}
objIn.addEventListener('input', () => applyObj(true));
magIn.addEventListener('input', () => applyMag(true));

// Full-screen viewer: the annotated frame exactly as shown, at full resolution.
// Save uses the share sheet where it can take files (iPhone: Save Image),
// otherwise a normal download.
let viewerURL = null, viewerBlob = null;
const IS_PHONE = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);   // iPadOS reports as a Mac
if (!IS_PHONE) $('viewer-save').textContent = 'Download';
// The saved image is redrawn from the original file at up to 4096 px (inside
// iPhone's 16.7 MP canvas limit), with labels sized to read when zoomed in
// and the 30 brightest named stars marked instead of 10.
const EXPORT_EDGE = 4096, EXPORT_AREA = 16e6;
async function frameBlob() {
  const w = state.width, h = state.height;
  let src = null, f = 1;
  try {
    src = await createImageBitmap(state.file);
    f = Math.min(src.width / w, EXPORT_EDGE / Math.max(w, h), Math.sqrt(EXPORT_AREA / (w * h)));
    f = Math.max(1, f);
  } catch { src = null; f = 1; }
  const c = document.createElement('canvas');
  drawOverlay(c, state.result, state.show,
    { src: src || state.bitmap, f, shown: 1200 * w / Math.max(w, h), nStars: 30 });
  if (src && src.close) src.close();
  const blob = await new Promise((res) => c.toBlob(res, 'image/jpeg', 0.92));
  c.width = c.height = 0;                    // free the memory now, not at GC
  return blob || new Promise((res) => el.view.toBlob(res, 'image/jpeg', 0.92));
}
function frameName() {
  const d = new Date(), p = (n) => String(n).padStart(2, '0');
  return `star-id-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}.jpg`;
}
async function openViewer() {
  if (!state.result || !state.result.ok) return;
  const img = $('viewer-img'), tip = $('viewer-tip'), save = $('viewer-save');
  img.parentNode.classList.remove('actual');
  img.style.width = '';
  img.removeAttribute('src');
  tip.textContent = 'Preparing full resolution…';
  save.disabled = true;
  $('viewer').hidden = false;
  document.documentElement.style.overflow = 'hidden';
  viewerBlob = await frameBlob();
  if (!viewerBlob || $('viewer').hidden) return;
  if (viewerURL) URL.revokeObjectURL(viewerURL);
  viewerURL = URL.createObjectURL(viewerBlob);
  img.src = viewerURL;
  tip.textContent = 'Tap to zoom';
  save.disabled = false;
}
function closeViewer() {
  $('viewer').hidden = true;
  document.documentElement.style.overflow = '';
}
async function saveImage() {
  if (!viewerBlob) return;
  const file = new File([viewerBlob], frameName(), { type: 'image/jpeg' });
  // Phones: the share sheet, which is where "Save Image" (to Photos) lives.
  // Computers: a plain download, straight to the Downloads folder.
  if (IS_PHONE && navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file] }); return; }
    catch (e) { if (e && e.name === 'AbortError') return; }
  }
  const a = document.createElement('a');
  a.href = viewerURL; a.download = file.name;
  document.body.appendChild(a); a.click(); a.remove();
}
$('full').addEventListener('click', openViewer);
el.view.addEventListener('click', openViewer);
$('viewer-close').addEventListener('click', closeViewer);
// Tap: fit <-> full resolution, keeping the tapped spot under the finger.
$('viewer-img').addEventListener('click', (e) => {
  const img = e.currentTarget, box = img.parentNode;
  const r = img.getBoundingClientRect();
  const fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
  const bx = e.clientX - box.getBoundingClientRect().left, by = e.clientY - box.getBoundingClientRect().top;
  const on = box.classList.toggle('actual');
  // One image pixel per screen pixel, but never smaller than 2x the fitted size.
  const w = Math.max(img.naturalWidth / (window.devicePixelRatio || 1), r.width * 2);
  img.style.width = on ? w + 'px' : '';
  if (on) {
    const h = w * img.naturalHeight / img.naturalWidth;
    box.scrollLeft = fx * w - bx;
    box.scrollTop = fy * h - by;
  }
});
$('viewer-save').addEventListener('click', saveImage);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('viewer').hidden) closeViewer(); });
$('retry').addEventListener('click', () => el.file.click());

if (el.mode) el.mode.addEventListener('click', () => {
  const r = document.documentElement;
  r.dataset.mode = r.dataset.mode === 'night' ? 'day' : 'night';
  syncModeLabel();
  savePrefs();
});

el.sensor.addEventListener('change', () => {
  el.sensorCustom.hidden = el.sensor.value !== 'custom';
  savePrefs();
});
el.sensorCustom.addEventListener('change', savePrefs);
document.getElementById('copy-vals').addEventListener('click', async (e) => {
  const b = e.currentTarget;
  try { await navigator.clipboard.writeText(state.copyText || ''); b.textContent = 'Copied'; }
  catch { b.textContent = 'Copy failed'; }
  setTimeout(() => { b.textContent = 'Copy values'; }, 1600);
});
el.lat.addEventListener('change', () => { savePrefs(); refresh(); });
el.lon.addEventListener('change', () => { savePrefs(); refresh(); });
el.when.addEventListener('change', refresh);

function refresh() {
  if (state.result && state.result.ok) renderText(state.result);
}

el.locate.addEventListener('click', () => {
  if (!navigator.geolocation) {
    el.offline.textContent = 'This browser will not share a location. Type one in instead.';
    return;
  }
  el.locate.textContent = 'Getting location…';
  navigator.geolocation.getCurrentPosition(
    (p) => {
      el.lat.value = p.coords.latitude.toFixed(4);
      el.lon.value = p.coords.longitude.toFixed(4);
      el.locate.textContent = 'Use my location';
      savePrefs();
      refresh();
    },
    () => {
      el.locate.textContent = 'Use my location';
      el.offline.textContent = 'Location was not shared. Type one in instead.';
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 },
  );
});

/* ------------------------------------------------------------ offline bit */

// Dark Sky Almanac's service worker looks after this tool too. It names the
// files; this page saves any that are missing or changed into the tool's own
// cache (a long download inside the worker can be cut short by the browser).
// The standalone version had a worker of its own at this folder; it is retired
// here, because two workers on one site clear each other's saved files.
function sameFile(a, b) {
  const ea = (a.headers.get('etag') || '').replace(/^W\//, ''), eb = (b.headers.get('etag') || '').replace(/^W\//, '');
  if (ea && eb) return ea === eb;
  return a.headers.get('content-length') === b.headers.get('content-length') && a.headers.get('last-modified') === b.headers.get('last-modified');
}
async function saveOffline() {
  for (const r of await navigator.serviceWorker.getRegistrations()) {
    if (new URL(r.scope).pathname !== '/') await r.unregister();       // the old solver-only worker
  }
  caches.delete('pointing-check-v1');                                   // its old cache
  const reg = await navigator.serviceWorker.register(new URL('../sw.js', import.meta.url));
  const sw = reg.active || await new Promise((resolve) => {             // first visit: wait for it to start
    const w = reg.installing || reg.waiting;
    w.addEventListener('statechange', () => { if (w.state === 'activated') resolve(w); });
  });
  const d = await new Promise((resolve) => {
    const on = (ev) => { if ((ev.data || {}).type === 'zcl-solver-list-reply') { navigator.serviceWorker.removeEventListener('message', on); resolve(ev.data); } };
    navigator.serviceWorker.addEventListener('message', on);
    sw.postMessage({ type: 'zcl-solver-list' });
    setTimeout(() => resolve(null), 4000);
  });
  if (!d) throw new Error('no reply');
  const c = await caches.open(d.cache);
  let failed = 0;
  for (const u of d.list) {
    try {
      const have = await c.match(u);
      if (have) {
        if (!navigator.onLine) continue;
        const h = await fetch(u, { method: 'HEAD', cache: 'no-store' });
        if (!h.ok || sameFile(have, h)) continue;
      }
      const r = await fetch(u, { cache: 'reload' });
      if (r.ok) await c.put(u, r); else failed++;
    } catch { failed++; }
  }
  return failed;
}
if ('serviceWorker' in navigator && window.caches) {
  el.offline.textContent = 'Saving for offline use…';
  saveOffline().then((failed) => {
    el.offline.textContent = failed
      ? 'Not fully saved yet. Open this page again with a signal.'
      : 'Saved on this device for offline use.';
  }).catch(() => {
    el.offline.textContent = 'Offline storage unavailable, so this needs a connection.';
  });
} else {
  el.offline.textContent = 'This browser cannot store the app offline.';
}

let resizeTimer = 0;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (state.result && state.result.ok) drawOverlay(el.view, state.result, state.show);
  }, 150);
});

loadPrefs();
syncFocal(false);
