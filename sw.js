/* ════════════════════════════════════════════════════════════
   Dark Sky Almanac — Service Worker
   v118: bulletproof offline. Every page, image, font, and library
   is precached so the app works fully offline once installed via
   "Add to Home Screen". Fonts and the SunCalc library are fetched
   AND their sub-resources (the .woff2 files the font CSS points to)
   are cached too, so type renders correctly with no network.
   ════════════════════════════════════════════════════════════ */
const CACHE = 'zion-sky-v124';

// ── CRITICAL same-origin shell ──────────────────────────────────
// Everything the app itself is made of, in the form that ALWAYS resolves on
// every host (real files: index.html, *.html, images, icons). If ANY of these
// fail to cache during install we fail the install and let the browser retry,
// rather than silently shipping a half-broken offline app.
const CRITICAL = [
  './',
  'index.html',
  'forecast.html','moon.html','objects.html','constellations.html','catalog.html',
  'solar.html','jupiter.html','saturn.html','mars.html','earth.html',
  'events.html','finder.html','settings.html','maps.html',
  'map-zion.html','map-bryce.html','map-cedar-breaks.html','map-st-george.html',
  'map-capitol-reef.html','map-canyonlands.html','map-arches.html',
  'map-cedar-city.html','map-kanab.html',
  'map-cannonville.html','map-escalante.html','map-moab.html','map-hanksville.html','map-torrey.html',
  // Map basemaps
  'map-zion.jpg','map-bryce.jpg','map-cedar-breaks.jpg','map-st-george.jpg',
  'map-capitol-reef.jpg','map-canyonlands.jpg','map-arches.jpg',
  'map-cedar-city.jpg','map-kanab.jpg',
  'map-cannonville.jpg','map-escalante.jpg','map-moab.jpg','map-hanksville.jpg','map-torrey.jpg',
  // Shared engine loaded by every map page (v123 refactor — was inlined per page)
  'map-engine.js',
  // Planet & moon imagery
  'img/jupiter.jpg','img/io.jpg','img/europa.jpg','img/ganymede.jpg','img/callisto.jpg',
  'img/mars.jpg','img/saturn.jpg','img/earth.jpg','img/moon.jpg',
  // PWA shell
  'manifest.json','icon-180.png','icon-192.png','icon-512.png',
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
  'forecast','moon','objects','constellations','catalog',
  'solar','jupiter','saturn','mars','earth',
  'events','finder','settings','maps',
  'map-zion','map-bryce','map-cedar-breaks','map-st-george',
  'map-capitol-reef','map-canyonlands','map-arches','map-cedar-city','map-kanab',
  'map-cannonville','map-escalante','map-moab','map-hanksville','map-torrey'
];

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
    })));
  })());
});

self.addEventListener('activate', function(e){
  e.waitUntil((async function(){
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
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

self.addEventListener('fetch', function(e){
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = req.url;

  // Live data APIs: network-first, cache the latest as an offline fallback.
  if(url.indexOf('open-meteo.com')   !== -1 ||
     url.indexOf('zippopotam.us')    !== -1 ||
     url.indexOf('services.swpc.noaa.gov') !== -1){
    e.respondWith(
      fetch(req).then(function(r){
        const c = r.clone();
        caches.open(CACHE).then(function(cache){ cache.put(req, c); });
        return r;
      }).catch(function(){ return caches.match(req); })
    );
    return;
  }

  // App pages (navigations): network-first so a fresh deploy shows immediately,
  // fall back to cache (then to the app root) when offline. This is what makes
  // every page work offline once installed.
  if(req.mode === 'navigate' || req.destination === 'document'){
    e.respondWith(
      fetch(req).then(function(r){
        if(r && r.status === 200){ const c = r.clone(); caches.open(CACHE).then(function(cache){ cache.put(req, c); }); }
        return r;
      }).catch(function(){
        // Offline: try the exact request, then the alternate URL form
        // (.html ⇄ extensionless), then finally the app root.
        return caches.match(req, { ignoreSearch:true }).then(function(m){
          if(m) return m;
          var alt = /\.html$/.test(url) ? url.replace(/\.html$/, '') : url + '.html';
          return caches.match(alt, { ignoreSearch:true });
        }).then(function(m){ return m || caches.match('index.html') || caches.match('./'); });
      })
    );
    return;
  }

  // Everything else (images, fonts, libraries, css): cache-first, and BACKFILL
  // anything not yet cached on first use — so even assets that slipped through
  // install (or a new asset added later) become available offline after one
  // online view. This is the safety net that makes "everything works offline"
  // true even if the precache list ever drifts from reality.
  e.respondWith(
    caches.match(req, { ignoreSearch:true }).then(function(cached){
      if(cached) return cached;
      return fetch(req).then(function(r){
        if(r && (r.status === 200 || r.type === 'opaque')){
          const c = r.clone();
          caches.open(CACHE).then(function(cache){ cache.put(req, c); });
        }
        return r;
      }).catch(function(){
        // Last-ditch: for font CSS, return any cached Montserrat CSS we have.
        if(url.indexOf('fonts.googleapis.com') !== -1){
          return caches.match(EXTERNAL[1]).then(function(m){ return m || caches.match(EXTERNAL[2]); });
        }
        return undefined;
      });
    })
  );
});
