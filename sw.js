/* ════════════════════════════════════════════════════════════
   Dark Sky Almanac — Service Worker
   v118: bulletproof offline. Every page, image, font, and library
   is precached so the app works fully offline once installed via
   "Add to Home Screen". Fonts and the SunCalc library are fetched
   AND their sub-resources (the .woff2 files the font CSS points to)
   are cached too, so type renders correctly with no network.
   ════════════════════════════════════════════════════════════ */
const CACHE = 'zion-sky-v480';
// ── CRITICAL same-origin shell ──────────────────────────────────
// Everything the app itself is made of, in the form that ALWAYS resolves on
// every host (real files: index.html, *.html, images, icons). If ANY of these
// fail to cache during install we fail the install and let the browser retry,
// rather than silently shipping a half-broken offline app.
const CRITICAL = [
  './',
  'index.html',
  'forecast.html','clouds.html','moon.html','objects.html','constellations.html','catalog.html',
  'solar.html','jupiter.html','saturn.html','mars.html','earth.html',
  'mercury.html','venus.html','uranus.html','neptune.html','pluto.html',
  'events.html','finder.html','daylight.html','tonight.html','settings.html','maps.html',
  // 3D spacecraft pages (their text works offline; the 3D view itself needs the optional download below)
  'spacecraft.html','voyager.html',
  // Astrophotography tools
  'photography.html','sources.html','npf.html','session-log.html','integration.html','meridian.html',
  'map-zion.html','map-bryce.html','map-cedar-breaks.html',
  'map-capitol-reef.html','map-canyonlands.html','map-arches.html',
  // Map basemaps
  'map-zion.jpg','map-bryce.jpg','map-cedar-breaks.jpg',
  'map-capitol-reef.jpg','map-canyonlands.jpg','map-arches.jpg',
  // Shared engine loaded by every map page (v123 refactor — was inlined per page)
  'map-engine.js',
  // Shared UI: themed date picker used across the app
  'zcl-calendar.js',
  // Shared timezone resolver — every page renders sun/moon times through this,
  // so it must be present offline or the app has no clock at all.
  'zcl-tz.js',
  'zcl-figures.js',
  // SunCalc, self-hosted so sunrise/moonrise never wait on a CDN
  'suncalc.min.js',
  'zcl-events.js',
  // Saturn ring geometry + moon positions (Meeus ch. 45-46), used by saturn.html
  'saturn-ephem.js',
  'jupiter-ephem.js',
  'zcl-season.js',
  // Planet & moon imagery
  'img/jupiter.jpg','img/io.jpg','img/europa.jpg','img/ganymede.jpg','img/callisto.jpg',
  'img/mars.jpg','img/m20/curiosity-sunset.mp4','img/m20/curiosity-sunset.jpg','img/saturn.jpg','img/earth.jpg','img/moon.jpg',
  // PWA shell
  'manifest.json','icon-180.png','icon-192.png','icon-512.png','icon.svg','social.png',
  'robots.txt','sitemap.xml'
];
// ── Extensionless aliases ───────────────────────────────────────
// Cloudflare Workers strips ".html"; many internal links use the extensionless
// form ('forecast' not 'forecast.html'). We cache these too so offline nav to
// either form works — but BEST-EFFORT, because on a host that doesn't serve the
// extensionless form they'd 404 and (if they were in CRITICAL's atomic addAll)
// would wrongly fail the whole install. The fetch handler also normalises
// .html ⇄ extensionless on cache miss as a second safety net.
const ALIASES = [
  'forecast','clouds','moon','objects','constellations','catalog',
  'solar','jupiter','saturn','mars','earth',
  'mercury','venus','uranus','neptune','pluto',
  'events','finder','daylight','tonight','settings','maps','spacecraft','voyager',
  'photography','sources','npf','session-log','integration','meridian',
  'map-zion','map-bryce','map-cedar-breaks',
  'map-capitol-reef','map-canyonlands','map-arches'
];
// ── Optional 3D download ────────────────────────────────────────
// The 3D viewers (three.js bundles, spacecraft models, comparison photos) are
// about 20 MB, so they are NOT part of the normal offline install. They are
// saved only when the user taps "Download everything" in Settings, into their
// own cache that survives app updates (so an update never throws 20 MB away).
// After an update, only files that actually changed are fetched again.
const C3D = 'zion-sky-3d';
const OFFLINE3D = [
  'spacecraft.bundle.js','voyager.bundle.js',
  'models/apollo.glb', 'models/cassini.glb', 'models/curiosity.glb', 'models/earth-leo-clouds.jpg',
  'models/earth-leo.jpg', 'models/hubble.glb', 'models/ingenuity.glb', 'models/iss.glb',
  'models/jezero.bin', 'models/jezero.jpg', 'models/jezero-wide.jpg', 'models/jezero-route.json',
  // HiRISE detail tiles along Perseverance's route (src/jezero-crater/hirise.py), about 7 MB
  'models/m20dem.bin', 'models/m20mid/index.json', 'models/m20mid/-4_-1.jpg', 'models/m20mid/-4_0.jpg', 'models/m20mid/-3_-2.jpg',
  'models/m20mid/-3_-1.jpg', 'models/m20mid/-3_0.jpg', 'models/m20mid/-2_-2.jpg', 'models/m20mid/-2_-1.jpg',
  'models/m20mid/-2_0.jpg', 'models/m20mid/-1_-2.jpg', 'models/m20mid/-1_-1.jpg', 'models/m20mid/-1_0.jpg',
  'models/m20mid/0_-1.jpg', 'models/m20mid/0_0.jpg',
  'models/m20hr/index.json', 'models/m20hr/-14_0.jpg', 'models/m20hr/-14_1.jpg', 'models/m20hr/-13_-1.jpg',
  'models/m20hr/-13_0.jpg', 'models/m20hr/-13_1.jpg', 'models/m20hr/-12_-2.jpg', 'models/m20hr/-12_-1.jpg',
  'models/m20hr/-12_0.jpg', 'models/m20hr/-12_1.jpg', 'models/m20hr/-11_-2.jpg', 'models/m20hr/-11_-1.jpg',
  'models/m20hr/-11_0.jpg', 'models/m20hr/-11_1.jpg', 'models/m20hr/-10_-2.jpg', 'models/m20hr/-10_-1.jpg',
  'models/m20hr/-10_0.jpg', 'models/m20hr/-9_-4.jpg', 'models/m20hr/-9_-3.jpg', 'models/m20hr/-9_-2.jpg',
  'models/m20hr/-9_-1.jpg', 'models/m20hr/-8_-4.jpg', 'models/m20hr/-8_-3.jpg', 'models/m20hr/-8_-2.jpg',
  'models/m20hr/-7_-4.jpg', 'models/m20hr/-7_-3.jpg', 'models/m20hr/-6_-4.jpg', 'models/m20hr/-6_-3.jpg',
  'models/m20hr/-6_-2.jpg', 'models/m20hr/-5_-4.jpg', 'models/m20hr/-5_-3.jpg', 'models/m20hr/-5_-2.jpg',
  'models/m20hr/-4_-3.jpg', 'models/m20hr/-4_-2.jpg', 'models/m20hr/-4_-1.jpg', 'models/m20hr/-4_0.jpg',
  'models/m20hr/-3_-3.jpg', 'models/m20hr/-3_-2.jpg', 'models/m20hr/-3_-1.jpg', 'models/m20hr/-3_0.jpg',
  'models/m20hr/-2_-2.jpg', 'models/m20hr/-2_-1.jpg', 'models/m20hr/-1_-2.jpg', 'models/m20hr/-1_-1.jpg',
  'models/m20hr/-1_0.jpg', 'models/m20hr/-1_1.jpg', 'models/m20hr/0_-2.jpg', 'models/m20hr/0_-1.jpg',
  'models/m20hr/0_0.jpg', 'models/m20hr/0_1.jpg', 'models/m20hr/1_-2.jpg', 'models/m20hr/1_-1.jpg', 'models/jwst.glb', 'models/lm.glb', 'models/lrv.glb', 'models/moon-a17.bin',
  'models/perseverance.glb', 'models/shuttle.glb', 'models/voyager1.glb',
  'img/cmp/carina-hubble.jpg', 'img/cmp/carina-webb.jpg', 'img/cmp/deep-field-hubble.jpg',
  'img/cmp/deep-field-webb.jpg', 'img/cmp/pillars-hubble.jpg', 'img/cmp/pillars-webb.jpg',
  'img/cmp/southern-ring-hubble.jpg', 'img/cmp/southern-ring-webb.jpg',
  'img/a17-flag.jpg', 'img/m20/first-flight.jpg', 'img/m20/rochette.jpg', 'img/m20/depot.jpg', 'img/m20/cheyava-falls.jpg', 'img/m20/wildcat-ridge.jpg', 'img/m20/belva-crater.jpg', 'img/m20/lookout-hill.jpg', 'img/m20/crocodile-bridge-360.jpg', 'img/m20/sample-depot-portrait.jpg', 'img/m20/valinor-hills.jpg', 'img/m20/first-sunset.jpg',
  // Mars rover game (rover/), opened from the Mars page: page, code, models,
  // terrain, textures and photos (about 41 MB). Same rules as the 3D models.
  'rover/',
  'rover/dtm/area_4m.png', 'rover/dtm/site_1m.png', 'rover/img/jezero-region.jpg',
  'rover/dtm/y2023_site_1m.png', 'rover/dtm/y2023_area_4m.png', 'rover/img/y2023_hr.jpg', 'rover/img/y2023_relief.jpg', 'rover/img/y2023_dunes.jpg', 'rover/img/y2023_area.jpg',
  'rover/img/landing_hr.jpg', 'rover/img/landing_relief.jpg', 'rover/img/landing_dunes.jpg', 'rover/img/landing_area.jpg',
  'rover/dtm/y2022_site_1m.png', 'rover/dtm/y2022_area_4m.png', 'rover/img/y2022_hr.jpg', 'rover/img/y2022_relief.jpg', 'rover/img/y2022_dunes.jpg', 'rover/img/y2022_area.jpg',
  'rover/dtm/y2024_site_1m.png', 'rover/dtm/y2024_area_4m.png', 'rover/img/y2024_hr.jpg', 'rover/img/y2024_relief.jpg', 'rover/img/y2024_dunes.jpg', 'rover/img/y2024_area.jpg',
  'rover/dtm/y2025_site_1m.png', 'rover/dtm/y2025_area_4m.png', 'rover/img/y2025_hr.jpg', 'rover/img/y2025_relief.jpg', 'rover/img/y2025_dunes.jpg', 'rover/img/y2025_area.jpg',
  'rover/dtm/y2026_site_1m.png', 'rover/dtm/y2026_area_4m.png', 'rover/img/y2026_hr.jpg', 'rover/img/y2026_relief.jpg', 'rover/img/y2026_dunes.jpg', 'rover/img/y2026_area.jpg',
  'rover/img/mars-globe.jpg', 'rover/models/perseverance.glb', 'rover/models/rocks/boulder_01.glb',
  'rover/models/rocks/boulder_namaqua_03.glb', 'rover/models/rocks/boulder_namaqua_03_low.glb', 'rover/models/rocks/boulder_namaqua_06.glb',
  'rover/models/rocks/rock_moon_04_low.glb', 'rover/models/rocks/stone_01_low.glb', 'rover/models/rocks/stones_namaqua_01_low.glb',
  'rover/photos/PIA17062.jpg', 'rover/photos/PIA19075.jpg', 'rover/photos/PIA19076.jpg',
  'rover/photos/PIA19161.jpg', 'rover/photos/PIA24485.jpg', 'rover/photos/PIA24684.jpg',
  'rover/rover.bundle.js', 'rover/tex/pebbles_diff.jpg', 'rover/tex/pebbles_nor.jpg',
  'rover/tex/regolith_diff.jpg', 'rover/tex/regolith_disp.jpg',
  'rover/tex/regolith_nor.jpg', 'rover/tex/sand_diff.jpg',
  'rover/tex/sand_disp.jpg', 'rover/tex/sand_nor.jpg',
  'rover/tex/slab_diff.jpg', 'rover/tex/slab_disp.jpg', 'rover/tex/slab_nor.jpg',
  // Apollo 17 lunar rover (lrv/): page and code; it shares models/lrv.glb, lm.glb and moon-a17.bin
  'lrv/', 'lrv/lrv.bundle.js', 'models/astronaut-a7l.glb', 'models/earth-bm.jpg', 'models/sample-76535.glb',
  'lrv/img/tracys-rock.jpg', 'lrv/img/van-serg.jpg', 'lrv/img/shorty.jpg', 'lrv/img/orange-soil.jpg', 'lrv/img/orange-beads.jpg', 'lrv/img/76535.jpg', 'lrv/img/79115.jpg'
];
// ── Star ID (solver/) ────────────────────────────────────
// The plate solver and its star catalog (about 6.5 MB). Saved the first time
// the tool is opened, and by "Download everything" in Settings, into its own
// cache that survives app updates — the catalog never changes in place, so an
// update only re-fetches the few files that did. This worker is the only one
// on the site: the tool used to bring its own, and two workers on one site
// clear each other's saved files.
const CSOL = 'zion-sky-solver';
const SOLVER = [
  'solver/', 'solver/index.html', 'solver/app.css', 'solver/app.js', 'solver/exif.js', 'solver/worker.js',
  'solver/solver/geom.js', 'solver/solver/catalog.js', 'solver/solver/detect.js', 'solver/solver/solve.js', 'solver/solver/astro.js', 'solver/solver/figures.js', 'solver/solver/constellation.js',
  'solver/catalog/manifest.json', 'solver/catalog/stars.bin', 'solver/catalog/names.json', 'solver/catalog/dso.json',
  'solver/catalog/quads_A.bin', 'solver/catalog/quads_B.bin', 'solver/catalog/quads_C.bin', 'solver/catalog/quads_D.bin'
];
// Is our saved copy the same file the server has now? (ETag where the host
// sends one, otherwise size + date.)
// Without a clear signal (no ETag, no size + date) the file counts as changed:
// a needless download is cheap, a stale file is not.
function sameFile(a, b){
  const ea = (a.headers.get('etag') || '').replace(/^W\//, ''), eb = (b.headers.get('etag') || '').replace(/^W\//, '');
  if(ea && eb) return ea === eb;
  const la = a.headers.get('content-length'), lb = b.headers.get('content-length');
  const ma = a.headers.get('last-modified'), mb = b.headers.get('last-modified');
  if(!la || !lb || !ma || !mb) return false;
  return la === lb && ma === mb;
}
// Star ID's code (pages, scripts, small data — about 300 KB) is re-fetched on
// every release, before this worker takes over, so a saved copy can never run
// old code against a new page. The big catalog files keep the change check.
async function refreshSolverCode(){
  if(!(await caches.has(CSOL))) return;
  const c = await caches.open(CSOL);
  await Promise.all(SOLVER.filter(u => !/\.bin$/.test(u)).map(async u => {
    try{ const r = await fetch(u, { cache:'reload' }); if(r && r.ok) await c.put(u, r); }catch(e){ /* offline: keep the saved copy */ }
  }));
}
// Bring an existing optional download (3D, or the solver) up to date: fetch
// what is missing or changed. Never-downloaded caches are left alone.
async function refresh3d(){ await refreshList(C3D, OFFLINE3D); await refreshList(CSOL, SOLVER); }
async function refreshList(name, list){
  if(!(await caches.has(name))) return;
  const c = await caches.open(name);
  for(const u of list){
    try{
      const have = await c.match(u);
      if(have){ const h = await fetch(u, { method:'HEAD', cache:'no-store' }); if(!h.ok || sameFile(have, h)) continue; }
      const r = await fetch(u, { cache:'reload' });
      if(r && r.ok) await c.put(u, r);
    }catch(e){ /* offline or flaky — the fetch handler refreshes files as they are used */ }
  }
}
// ── External libraries / fonts ──────────────────────────────────
// Cached best-effort at install (network may be flaky), then BACKFILLED on
// first use by the fetch handler so they end up cached no matter what. The
// two font CSS variants differ only by the 700 weight (map pages use it).
const EXTERNAL = [
  'https://cdnjs.cloudflare.com/ajax/libs/suncalc/1.9.0/suncalc.min.js',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
];
// Pull the actual font files (.woff2) referenced inside a Google Fonts CSS
// response and cache them, so type renders offline. Without this, the CSS is
// cached but points at uncached gstatic URLs and the font silently falls back.
async function cacheFontFiles(cache, cssURL){
  try{
    const res = await fetch(cssURL, { mode:'cors' });
    if(!res || !res.ok) return;
    await cache.put(cssURL, res.clone());
    const css = await res.text();
    const urls = (css.match(/https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2/g) || []);
    await Promise.all(urls.map(u =>
      fetch(u).then(r => r && r.ok ? cache.put(u, r) : null).catch(()=>{})
    ));
  }catch(e){ /* offline at install — fetch handler will backfill later */ }
}

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil((async function(){
    const cache = await caches.open(CACHE);
    // CRITICAL: must all succeed. addAll is atomic — if any 404s the whole
    // thing rejects and the SW install fails (so we don't ship a broken cache).
    // We add a couple of retries for transient network hiccups.
    let lastErr = null;
    for(let attempt=0; attempt<3; attempt++){
      try{ await cache.addAll(CRITICAL); lastErr = null; break; }
      catch(err){ lastErr = err; await new Promise(r=>setTimeout(r, 800)); }
    }
    if(lastErr) throw lastErr;   // fail the install; browser will retry later
    // ALIASES (extensionless URLs) + EXTERNAL libraries: best-effort, plus pull
    // the font sub-resources so type renders offline.
    await Promise.all([
      cacheFontFiles(cache, EXTERNAL[1]),
      cacheFontFiles(cache, EXTERNAL[2]),
      fetch(EXTERNAL[0]).then(r => r && r.ok ? cache.put(EXTERNAL[0], r) : null).catch(()=>{})
    ].concat(ALIASES.map(function(u){
      return cache.add(u).catch(function(){});   // ok if the host doesn't serve it
    })).concat([refreshSolverCode()]));
  })());
});

self.addEventListener('activate', function(e){
  e.waitUntil((async function(){
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE && k !== C3D && k !== CSOL).map(k => caches.delete(k)));
    await self.clients.claim();
    // Self-heal: after a long idle period a browser may have evicted part of the
    // cache. Whenever the SW activates, re-add any CRITICAL item that's gone
    // missing so the app stays fully offline-capable without the user having to
    // do anything. (Best-effort — needs network, runs only when something's
    // actually missing, so it's free on the normal path.)
    try{
      const cache = await caches.open(CACHE);
      const missing = [];
      await Promise.all(CRITICAL.map(async u => {
        const m = await cache.match(u, { ignoreSearch:true });
        if(!m) missing.push(u);
      }));
      if(missing.length) await cache.addAll(missing).catch(()=>{});
    }catch(e){ /* offline now — fetch handler will backfill on next online view */ }
    await refresh3d();
  })());
});
// Allow the page to ask the SW questions (e.g. "are you fully cached?") and to
// trigger a re-cache on demand from Settings.
self.addEventListener('message', function(e){
  const msg = e.data || {};
  if(msg.type === 'zcl-cache-status'){
    e.waitUntil((async function(){
      const cache = await caches.open(CACHE);
      const keys = await cache.keys();
      // Consider the app "offline-ready" when every CRITICAL item is present.
      let have = 0;
      await Promise.all(CRITICAL.map(async u => {
        const m = await cache.match(u, { ignoreSearch:true });
        if(m) have++;
      }));
      const ready = have >= CRITICAL.length;
      (e.source && e.source.postMessage) && e.source.postMessage({
        type:'zcl-cache-status-reply', ready, have, total:CRITICAL.length, cached:keys.length
      });
    })());
  } else if(msg.type === 'zcl-solver-list'){
    (e.source && e.source.postMessage) && e.source.postMessage({ type:'zcl-solver-list-reply', list:SOLVER.map(function(u){ return new URL(u, self.location).href; }), cache:CSOL });   // absolute: the solver page sits one folder down
  } else if(msg.type === 'zcl-3d-list'){
    (e.source && e.source.postMessage) && e.source.postMessage({ type:'zcl-3d-list-reply', list:OFFLINE3D, cache:C3D });
  } else if(msg.type === 'zcl-recache'){
    e.waitUntil((async function(){
      const cache = await caches.open(CACHE);
      await cache.addAll(CRITICAL).catch(()=>{});
      await Promise.all([
        cacheFontFiles(cache, EXTERNAL[1]),
        cacheFontFiles(cache, EXTERNAL[2]),
        fetch(EXTERNAL[0]).then(r => r && r.ok ? cache.put(EXTERNAL[0], r) : null).catch(()=>{})
      ].concat(ALIASES.map(function(u){ return cache.add(u).catch(function(){}); })));
      (e.source && e.source.postMessage) && e.source.postMessage({ type:'zcl-recache-done' });
    })());
  }
});

// ── Weak-signal ("1 bar") handling ─────────────────────────────
// A phone with one bar isn't offline, so requests don't fail — they just
// hang. Every network wait below has a deadline; when it passes we serve
// the cached copy (and let the network finish in the background to refresh
// the cache for next time). Airplane mode and 1 bar now behave the same.
const PAGE_WAIT = 2000, DATA_WAIT = 7000, ASSET_WAIT = 4000, CODE_WAIT = 8000;
// When a page falls back to its saved copy, its code should too (see the 3D branch below).
let weakUntil = 0;
function fellBack(hit, page){ if(page) weakUntil = Date.now() + 60000; return hit; }
function fresh(r, page){ if(page) weakUntil = 0; return r; }
function deadline(p, ms){
  return new Promise(function(res, rej){
    const t = setTimeout(function(){ rej(new Error('timeout')); }, ms);
    p.then(function(r){ clearTimeout(t); res(r); }, function(err){ clearTimeout(t); rej(err); });
  });
}
// Safari asks for video in byte ranges and will not play a whole-file answer, so a saved
// video is sliced to the range asked for.
function partial(res, range){
  return res.arrayBuffer().then(function(buf){
    const m = /bytes=(\d*)-(\d*)/.exec(range) || [], n = buf.byteLength;
    let a = m[1] === '' || m[1] == null ? Math.max(0, n - (+m[2] || 0)) : +m[1], b = m[1] !== '' && m[2] ? Math.min(+m[2], n - 1) : n - 1;
    if(a >= n) return new Response(null, { status:416, headers:{ 'Content-Range':'bytes */' + n } });
    return new Response(buf.slice(a, b + 1), { status:206, headers:{ 'Content-Type': res.headers.get('Content-Type') || 'video/mp4', 'Content-Range':'bytes ' + a + '-' + b + '/' + n, 'Content-Length': String(b - a + 1), 'Accept-Ranges':'bytes' } });
  });
}
function putLater(req, r){ if(r && (r.status === 200 || r.type === 'opaque')){ const c = r.clone(); caches.open(CACHE).then(function(cache){ cache.put(req, c); }); } return r; }
function cachedPage(req, url){
  return caches.match(req, { ignoreSearch:true }).then(function(m){
    if(m) return m;
    var alt = /\.html$/.test(url) ? url.replace(/\.html$/, '') : url + '.html';
    return caches.match(alt, { ignoreSearch:true });
  });
}

self.addEventListener('fetch', function(e){
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = req.url;
  // Live satellite tiles (NASA GIBS): straight to the network, never stored.
  // A two-hour loop is a few hundred tiles that are stale within the hour.
  if(url.indexOf('earthdata.nasa.gov') !== -1) return;
  // The 3D spacecraft viewers and the Mars rover game (about 80 MB) are kept only if the
  // user chose "Download everything". If they did, they behave like the rest of the app:
  // online, the network's copy (and the saved copy is refreshed); on a weak signal, the saved
  // copy after a few seconds; offline, the saved copy at once. Code follows its page: once a
  // page has fallen back to its saved copy, the bundles come from the saved copy too, so an
  // old page never runs new code or the reverse. Files not yet saved are added as they load.
  // If the user never downloaded: plain network, nothing stored.
  if(/\/models\/|\.bundle\.js|\/rover\/|\/lrv\//.test(url)){
    const code = /\.js(\?|$)|\/(rover|lrv)\/(index\.html)?(\?|#|$)/.test(url), page = req.mode === 'navigate' || req.destination === 'document';
    e.respondWith(caches.has(C3D).then(function(has){
      if(!has) return fetch(req);
      return caches.open(C3D).then(function(c){
        return c.match(req, { ignoreSearch:true }).then(function(hit){
          const net = fetch(req).then(function(r){ if(r && r.status === 200) c.put(req, r.clone()); return r; });
          try{ e.waitUntil(net.catch(function(){})); }catch(err){}
          if(!hit) return net;
          if((self.navigator && self.navigator.onLine === false) || (code && !page && Date.now() < weakUntil)) return hit;
          return deadline(net, code ? CODE_WAIT : ASSET_WAIT).then(function(r){ return (r && r.ok) ? fresh(r, page) : fellBack(hit, page); }, function(){ return fellBack(hit, page); });
        });
      });
    }));
    return;
  }

  // Star ID: its own cache. Pages: fresh from the network when it
  // answers quickly, otherwise the saved copy. Everything else (scripts and
  // the star catalog): the saved copy first. Anything fetched is saved, so the
  // tool is offline-ready after one use even before the full download ends.
  if(/\/solver\//.test(new URL(url).pathname)){
    const page = req.mode === 'navigate' || req.destination === 'document';
    e.respondWith(caches.open(CSOL).then(function(c){
      const save = function(r){ if(r && r.status === 200) c.put(req, r.clone()); return r; };
      return c.match(req, { ignoreSearch:true }).then(function(hit){
        if(!hit && page) hit = c.match('solver/index.html');
        return Promise.resolve(hit).then(function(hit){
          if(hit && !page) return hit;
          const net = fetch(req).then(save);
          try{ e.waitUntil(net.catch(function(){})); }catch(err){}
          if(!hit) return net;
          if(self.navigator && self.navigator.onLine === false) return hit;
          return deadline(net, PAGE_WAIT).then(function(r){ return (r && r.ok) ? r : hit; }, function(){ return hit; });
        });
      });
    }));
    return;
  }

  // Live data (weather, aurora): try the network for a few seconds, then
  // fall back to the last copy we saved.
  if(url.indexOf('open-meteo.com')   !== -1 ||
     url.indexOf('zippopotam.us')    !== -1 ||
     url.indexOf('services.swpc.noaa.gov') !== -1){
    const net = fetch(req).then(function(r){ return putLater(req, r); });
    e.waitUntil(net.catch(function(){}));
    e.respondWith(
      deadline(net, DATA_WAIT).catch(function(){
        return caches.match(req).then(function(m){
          return m || new Response('{"offline":true}', { status: 503, headers: { 'Content-Type': 'application/json' } });
        });
      })
    );
    return;
  }

  // App pages: fresh from the network when it answers quickly, otherwise the
  // cached page right away. The slow network reply still updates the cache.
  if(req.mode === 'navigate' || req.destination === 'document'){
    const net = fetch(req).then(function(r){ return putLater(req, r); });
    e.waitUntil(net.catch(function(){}));
    e.respondWith(
      cachedPage(req, url).then(function(cached){
        if(!cached) return net.catch(function(){ return caches.match('index.html') || caches.match('./'); });
        if(self.navigator && self.navigator.onLine === false) return fellBack(cached, true);
        return deadline(net, PAGE_WAIT).then(function(r){ return (r && r.ok) ? fresh(r, true) : fellBack(cached, true); }, function(){ return fellBack(cached, true); });
      })
    );
    return;
  }

  // Everything else (images, fonts, libraries, css): cache-first, and
  // BACKFILL anything not yet cached on first use. A cache miss on a weak
  // signal gives up after a few seconds instead of stalling the page — the
  // font stylesheet in particular blocks rendering until it answers.
  e.respondWith(
    caches.match(req, { ignoreSearch:true }).then(function(cached){
      if(cached && req.headers.get('range')) return partial(cached, req.headers.get('range'));
      if(cached) return cached;
      const net = fetch(req).then(function(r){ return putLater(req, r); });
      try{ e.waitUntil(net.catch(function(){})); }catch(err){}
      return deadline(net, url.indexOf('fonts.googleapis.com') !== -1 ? 1200 : ASSET_WAIT).catch(function(){
        if(url.indexOf('fonts.googleapis.com') !== -1){
          return caches.match(EXTERNAL[1]).then(function(m){ return m || caches.match(EXTERNAL[2]); })
            .then(function(m){ return m || new Response('', { headers: { 'Content-Type': 'text/css' } }); });
        }
        return Response.error();
      });
    })
  );
});
