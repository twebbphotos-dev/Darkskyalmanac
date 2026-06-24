/* ════════════════════════════════════════════════════════════
   Dark Sky Almanac — Shared map engine
   v123: Extracted from the cloned per-map engine code. Loaded by every
   map page via <script src="map-engine.js">. Each map page must
   declare a window.MAP_CONFIG block BEFORE this script runs:
     window.MAP_CONFIG = {
       name:       'Zion',                       // for off-map alerts
       spots:      [ { id, n, b, x, y, why, info }, ... ],
       geoFit:     { ax, bx, cx, ay, by, cy },   // (lat,lng) -> (x%,y%)
       bounds:     { top, bottom, left, right }, // map's geographic box
       defaultAspect: 2028/2538,                 // initial guess before img loads
     };
   The basemap <img class="basemap" src="..."> in the HTML drives the
   real aspect ratio once it loads.
   ════════════════════════════════════════════════════════════ */
const CFG = window.MAP_CONFIG;
if(!CFG){ console.error('MAP_CONFIG missing — map will not initialize.'); }
const SPOTS = CFG.spots;
const GEO_FIT = CFG.geoFit;
const MAP_BOUNDS = CFG.bounds;
const MAP_NAME = CFG.name;

const BCOL = { '1':'#B4C8E6', '2':'#D4C864', '3':'#DC8C46' };
// Same colors as RGB triples — used by the on-map pin dots so they can
// render at 50% alpha (map shows through) while keeping their dark border
// and white halo at full opacity for clear definition.
const BCOL_RGB = { '1':'180,200,230', '2':'212,200,100', '3':'220,140,70' };
const BLAB = { '1':'Bortle 1 · pristine dark', '2':'Bortle 2 · truly dark', '3':'Bortle 3 · rural' };
// Calibrated affine transform: (lat,lng) → map (x%, y%).
// Derived by least-squares fit against 8 high-confidence landmark
// pins (Town of Virgin, the Museum, Pa’rus, Canyon Overlook,
// Checkerboard Mesa, Lava Point, Kolob Reservoir, Smithsonian Butte).
// RMSE ~1 km on the ground — vs. ~5 km on the old linear-bounds
// model which over-stated the map’s extent by 5-8 km on three sides
// (the image includes border / scale / title that aren’t map land).
function latLngToMap(la, lo){
  return { x: GEO_FIT.ax*lo + GEO_FIT.bx*la + GEO_FIT.cx,
           y: GEO_FIT.ay*lo + GEO_FIT.by*la + GEO_FIT.cy };
}
// Bounding-box check for "are you on this map?" — the geographic
// rectangle the NPS map image actually covers, rounded outward.
const $ = id => document.getElementById(id);

/* ─────────────────────────────────────────────────────────────────
   Pan/zoom engine. The world is a positioned div; we translate+scale
   it. Pins live inside the world in % coords so they track perfectly.
   ───────────────────────────────────────────────────────────────── */
const mapEl = $('es-map'), world = $('es-world');
const basemapImg = world.querySelector('img.basemap');
/* ASPECT (image height / image width) controls the worldH() calc that
   feeds clamp(). It MUST match the rendered image's true aspect — even
   a 0.5% mismatch leaves a thin black band at the bottom that the user
   can never quite scroll into view. Hardcoded 2028/2538 was for the
   first version of the NPS map; we now read the *actual* loaded image's
   natural dimensions so the deployed file (whatever its resolution) is
   the source of truth. Falls back to the historical value if the image
   hasn't loaded yet at first layout. */
let ASPECT = CFG.defaultAspect;
let scale = 1, tx = 0, ty = 0;
let MINS = 1; const MAXS = 8;   // MINS is recomputed to the cover scale on load/resize

function refreshAspect(){
  if(basemapImg && basemapImg.naturalWidth && basemapImg.naturalHeight){
    ASPECT = basemapImg.naturalHeight / basemapImg.naturalWidth;
  }
}

/* ─── The sharpness fix ──────────────────────────────────────────────
   Before: #es-world and the <img> were sized via `width:100%`. On a
   412-px phone viewport, the browser downsampled the 2500-px source
   bitmap to 412 px BEFORE the transform ran, then `scale(2.2)` upscaled
   the already-downsampled 412-px bitmap to ~906 px. We threw away ~80%
   of the source detail and then stretched the remainder. Result: a
   soft, blurry map.

   After: the world is laid out at the image's NATURAL pixel size and
   the visual fit-to-viewport is done by the transform itself. The
   browser keeps the full 2500-px source bitmap in the layer and uses
   GPU-quality bilinear/bicubic interpolation to render it at whatever
   on-screen size the transform requests. Crisp at every zoom.

   Math: `fit = clientWidth / naturalWidth` is the multiplier that
   would make the natural-size world cover the viewport width. We then
   apply `scale(logical_scale × fit)` to the world. Net visual size on
   screen is `naturalWidth × logical_scale × fit = clientWidth × logical_scale`
   — IDENTICAL to the old behaviour, so worldW()/worldH()/clamp()/flyTo()
   need no changes. Only the source bitmap quality changes.

   Pins get an inverse `1/fit` counter-scale via the `--pin-scale` CSS
   var so they appear at exactly the same size they did before
   (30px × logical_scale). */
function fitFactor(){
  const nw = basemapImg && basemapImg.naturalWidth;
  return nw ? mapEl.clientWidth / nw : 1;
}

function worldH(){ return mapEl.clientWidth * ASPECT * scale } // basemap aspect
function worldW(){ return mapEl.clientWidth * scale }

function clamp(){
  const vw = mapEl.clientWidth, vh = mapEl.clientHeight;
  const ww = worldW(), wh = worldH();
  // Asymmetric overscroll slack.
  //   slackTop : space the user can pull below the top edge (a little reveal
  //              of the dark backdrop above the map is harmless and gives a
  //              natural rubber-band feel — but keep small).
  //   slackBot : how far past the bottom edge the user can pan. Two
  //              cases:
  //   * card OPEN — we need a LOT of slack so a pin sitting at y≈95% of the
  //     basemap can still be lifted above the card's top edge. ~340px does it.
  //   * card CLOSED — we need enough slack that the very bottom edge of the
  //     map image can be panned ABOVE the bottom nav (which permanently
  //     covers the lower NAV_H pixels of the viewport). Previous value of
  //     25px clamped the bottom edge to vh−25, which sat behind the 54px
  //     nav — so the user could never actually see the bottom of the map.
  //     Now: navH + a small visual margin so the bottom edge clears the nav
  //     cleanly, plus iPhone safe-area inset if present.
  const cardOn = $('es-card').classList.contains('on');
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),10) || 54;
  let safeBot = 0;
  try{
    // The bottom nav carries `padding-bottom:env(safe-area-inset-bottom)`,
    // so its computed padding-bottom is the home-indicator inset (0 on most
    // devices; ~34px on iPhones with a home indicator). Add it so the bottom
    // of the map can clear the nav on those devices too.
    const nav = document.querySelector('.pwa-nav');
    if(nav){
      const s = getComputedStyle(nav).getPropertyValue('padding-bottom');
      safeBot = parseInt(s,10) || 0;
    }
  }catch(e){}
  // Asymmetric slack: now that the nav is at the TOP, slackTop must clear it
  // (was 20px; now navH + top safe-area + 20). slackBot needs no nav clearance
  // — the bottom is unobstructed except by the card-open state.
  const slackX = 15;
  let safeTop = 0;
  try{
    const nav = document.querySelector('.pwa-nav');
    if(nav){ safeTop = parseInt(getComputedStyle(nav).getPropertyValue('padding-top'),10) || 0 }
  }catch(e){}
  const slackTop = navH + safeTop + 20;
  const slackBot = cardOn ? 340 : 20;
  if(ww <= vw){ tx = (vw - ww)/2 }
  else { tx = Math.min(slackX, Math.max(vw - ww - slackX, tx)) }
  if(wh <= vh){ ty = (vh - wh)/2 }
  else { ty = Math.min(slackTop, Math.max(vh - wh - slackBot, ty)) }
}
function apply(){
  const fit = fitFactor();
  const eff = scale * fit;          // what we actually feed the GPU
  world.style.transform = 'translate('+tx+'px,'+ty+'px) scale('+eff+')';
  // Counter-scale for pins so they keep their pre-fix visible size
  // (30px × logical-scale). Constant across pan/zoom; only changes on
  // resize (orientation change) or when a new image loads.
  world.style.setProperty('--pin-scale', (fit ? (1/fit) : 1).toFixed(4));
}

/* Smoothly run apply() with a brief CSS transition. Used for fly-to and
   ensure-visible motion so the map glides rather than snaps. Drag-pan
   leaves world.style.transition empty so dragging stays 1:1 with input. */
function smoothApply(ms){
  world.style.transition = 'transform '+(ms||380)+'ms ease-out';
  apply();
  setTimeout(()=>{ world.style.transition='' }, (ms||380)+30);
}

/* After a direct pin tap (no flyTo), check if the pin sits behind the card.
   If it does, pan the map up just enough to lift it into the clear band
   between the title and the top of the card. Read in rAF so the card's
   measured height reflects the now-`.on` element. */
function ensurePinVisible(id){
  const pin = pinEls[id]; if(!pin) return;
  requestAnimationFrame(()=>{
    const r = mapEl.getBoundingClientRect();
    const card = $('es-card');
    const cardH = card.offsetHeight || 0;
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),10) || 0;
    // The card slides up from `bottom: var(--nav-h)`, so its top edge on
    // screen is at viewport-height − navH − cardH.
    const cardTop = r.height - cardH;
    const pinR = pin.getBoundingClientRect();
    const pinY = pinR.top + pinR.height/2 - r.top;
    const margin = 32;                     // breathing room above card
    if(pinY > cardTop - margin){
      ty += (cardTop - margin) - pinY;     // negative → shift world up
      clamp();
      smoothApply(380);
    }
  });
}

function zoomTo(newScale, cx, cy){
  newScale = Math.max(MINS, Math.min(MAXS, newScale));
  const r = mapEl.getBoundingClientRect();
  const px = (cx - r.left - tx) / scale;   // world-space point under cursor
  const py = (cy - r.top  - ty) / scale;
  scale = newScale;
  tx = cx - r.left - px*scale;
  ty = cy - r.top  - py*scale;
  clamp(); apply();
}

/* center the map on a % coordinate at a given scale (used by list taps) */
function flyTo(xPct, yPct, targetScale){
  const r = mapEl.getBoundingClientRect();
  scale = Math.max(MINS, Math.min(MAXS, targetScale||3));
  const wpx = mapEl.clientWidth * scale * (xPct/100);
  const wpy = mapEl.clientWidth * ASPECT * scale * (yPct/100);
  tx = r.width/2 - wpx;
  // Aim the pin into the upper portion of the screen — comfortably below the
  // title and well above the info card. Using a fixed target (rather than the
  // band midpoint) keeps edge pins from forcing the map past its own border.
  const targetY = $('es-card').classList.contains('on') ? r.height*0.30 : r.height*0.42;
  ty = targetY - wpy;
  clamp(); apply();
}

/* ── Pins ─────────────────────────────────────────────────────────── */
let selId = null;
const pinEls = {};
function buildPins(){
  SPOTS.forEach(s=>{
    const pin = document.createElement('div');
    pin.className='es-pin'; pin.dataset.id=s.id;
    pin.style.left=s.x+'%'; pin.style.top=s.y+'%';
    pin.innerHTML =
      '<span class="ring"></span>'+
      '<span class="dot" style="--c:'+BCOL_RGB[s.b]+'"></span>'+
      '<span class="lab">'+s.n+'</span>';
    pin.addEventListener('click', ev=>{ ev.stopPropagation(); select(s.id, false) });
    world.appendChild(pin);
    pinEls[s.id]=pin;
  });
}

/* ── List ─────────────────────────────────────────────────────────── */
const rowEls = {};
function buildList(){
  const list = $('es-list');
  list.innerHTML='';
  SPOTS.forEach(s=>{
    const row=document.createElement('div');
    row.className='es-row'; row.dataset.id=s.id;
    row.innerHTML =
      '<span class="pindot" style="background:'+BCOL[s.b]+'"></span>'+
      '<span class="rmid"><span class="rname">'+s.n+'</span>'+
        '<span class="rmeta">'+BLAB[s.b]+' · '+s.info.split(' · ')[0]+'</span></span>'+
      '<span class="rchev">›</span>';
    row.addEventListener('click', ()=>{ select(s.id, true); closeDrawer() });
    list.appendChild(row);
    rowEls[s.id]=row;
  });
}

/* ── Selection: the single source of truth linking pin <-> card <-> row ── */
function select(id, fly){
  selId = id;
  const s = SPOTS.find(x=>x.id===id);
  // pins
  Object.values(pinEls).forEach(p=>p.classList.remove('sel'));
  if(pinEls[id]) pinEls[id].classList.add('sel');
  // rows
  Object.values(rowEls).forEach(r=>r.classList.remove('sel'));
  if(rowEls[id]){ rowEls[id].classList.add('sel') }
  // card
  $('es-card-badge').querySelector('i').style.background = BCOL[s.b];
  $('es-card-badge').querySelector('span').textContent = BLAB[s.b];
  $('es-card-name').textContent = s.n;
  $('es-card-why').textContent  = s.why;
  $('es-card-info').textContent = s.info;
  const idx = SPOTS.findIndex(x=>x.id===id);
  $('es-card-count').textContent = (idx+1)+' / '+SPOTS.length;
  $('es-card').classList.add('on');
  document.body.classList.add('card-open');
  // The CSS lifts #es-map's bottom to 42vh when card-open is on. Wait for
  // that transition (~280ms) to land, then have the engine re-read its new
  // viewport size so pan limits and the cover-scale match the smaller area.
  setTimeout(()=>{ try{ recomputeMin(); clamp(); apply() }catch(e){} }, 300);
  if(fly){
    // List-tap: explicit fly. Pins near the top/bottom edges of a tall map
    // need more zoom: enough that lifting them into the clear band doesn't
    // pull the map's own border into view above the card. Boost scales up
    // sharply toward the vertical edges.
    const edge = Math.min(s.y, 100 - s.y);          // 0 at edge, 50 at centre
    let target = 3.0;
    if(edge < 22) target = 3.0 + (22 - edge) * 0.30;
    world.style.transition = 'transform 420ms ease-out';
    flyTo(s.x, s.y, Math.max(scale, target));
    setTimeout(()=>{ world.style.transition='' }, 450);
  } else {
    // Direct pin-tap: keep the user's current view, but pan up the minimum
    // amount needed if the pin would be hidden behind the card.
    ensurePinVisible(id);
  }
}
function deselect(){
  selId=null;
  Object.values(pinEls).forEach(p=>p.classList.remove('sel'));
  Object.values(rowEls).forEach(r=>r.classList.remove('sel'));
  $('es-card').classList.remove('on');
  document.body.classList.remove('card-open');
  // Map viewport expands back to the bottom of the screen; re-fit so the
  // world refills the larger area cleanly.
  setTimeout(()=>{ try{ recomputeMin(); clamp(); apply() }catch(e){} }, 300);
}
function step(dir){
  const idx = SPOTS.findIndex(x=>x.id===selId);
  const n = (idx + dir + SPOTS.length) % SPOTS.length;
  select(SPOTS[n].id, true);
}

/* ── Drawer ───────────────────────────────────────────────────────── */
const drawer = $('es-drawer');
function openDrawer(){ drawer.classList.add('open') }
function closeDrawer(){ drawer.classList.remove('open') }
$('es-drawer-handle').addEventListener('click', ()=>{
  drawer.classList.toggle('open');
});

/* ── Gesture handling on the map (pointer events) ─────────────────── */
const pointers = new Map();
let lastDist=0, lastMid=null, moved=false, downXY=null;

/* Belt-and-braces against the desktop "weird click-drag of the image
   itself" misfire. Even with pointer-events:none on the img and the
   draggable="false" attribute, some browsers will still kick off the
   native HTML5 drag (ghost-image follows the cursor) when mousedown
   lands inside the map. These two listeners hard-kill both native drag
   AND text selection, regardless of which descendant the event came
   from, so our pan gesture is the only thing that can ever happen. */
mapEl.addEventListener('dragstart', e=>{ e.preventDefault() });
mapEl.addEventListener('selectstart', e=>{ e.preventDefault() });

mapEl.addEventListener('pointerdown', e=>{
  // pins handle their own taps; don't start a drag on them
  if(e.target.closest && e.target.closest('.es-pin')) return;
  // Suppress focus changes, text selection, and the lingering
  // native-drag initiation on mouse pointers. Safe with setPointerCapture
  // — synthetic click still fires on pointerup if we didn't move.
  if(e.cancelable) e.preventDefault();
  mapEl.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
  mapEl.classList.add('grab');
  moved=false; downXY={x:e.clientX,y:e.clientY};
});
mapEl.addEventListener('pointermove', e=>{
  if(!pointers.has(e.pointerId)) return;
  const prev = pointers.get(e.pointerId);
  pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
  const pts=[...pointers.values()];
  if(pts.length===2){
    const dist=Math.hypot(pts[0].x-pts[1].x, pts[0].y-pts[1].y);
    const mx=(pts[0].x+pts[1].x)/2, my=(pts[0].y+pts[1].y)/2;
    if(lastDist){ zoomTo(scale*(dist/lastDist), mx, my) }
    if(lastMid){ tx+=mx-lastMid.x; ty+=my-lastMid.y; clamp(); apply() }
    lastDist=dist; lastMid={x:mx,y:my}; moved=true;
  } else {
    tx += e.clientX-prev.x; ty += e.clientY-prev.y;
    if(downXY && Math.hypot(e.clientX-downXY.x, e.clientY-downXY.y) > 5) moved=true;
    clamp(); apply();
  }
});
function endPtr(e){
  if(pointers.has(e.pointerId)) pointers.delete(e.pointerId);
  if(pointers.size<2){ lastDist=0; lastMid=null }
  if(pointers.size===0) mapEl.classList.remove('grab');
}
mapEl.addEventListener('pointerup', e=>{
  // tap on empty map (no drag) dismisses selection
  if(!moved && !(e.target.closest && e.target.closest('.es-pin'))){
    if(selId) deselect();
  }
  endPtr(e);
});
mapEl.addEventListener('pointercancel', endPtr);
mapEl.addEventListener('wheel', e=>{
  e.preventDefault();
  zoomTo(scale*(e.deltaY<0?1.12:1/1.12), e.clientX, e.clientY);
}, {passive:false});

/* zoom buttons */
$('es-zin').addEventListener('click', ()=>{
  const r=mapEl.getBoundingClientRect(); zoomTo(scale*1.4, r.left+r.width/2, r.top+r.height/2);
});
$('es-zout').addEventListener('click', ()=>{
  const r=mapEl.getBoundingClientRect(); zoomTo(scale/1.4, r.left+r.width/2, r.top+r.height/2);
});

/* card controls */
$('es-card-close').addEventListener('click', deselect);
$('es-prev').addEventListener('click', ()=>step(-1));
$('es-next').addEventListener('click', ()=>step(1));

/* geolocation */
$('es-loc').addEventListener('click', ()=>{
  if(!navigator.geolocation){ alert('Geolocation not available.'); return }
  navigator.geolocation.getCurrentPosition(p=>{
    const {latitude:la, longitude:lo}=p.coords;
    if(la<MAP_BOUNDS.bottom||la>MAP_BOUNDS.top||lo<MAP_BOUNDS.left||lo>MAP_BOUNDS.right){
      alert('Your location is outside the '+MAP_NAME+' region map.'); return;
    }
    // Calibrated affine — picks up the projection rotation and the
    // offset between image edges and true map content.
    const pos = latLngToMap(la, lo);
    const xPct = Math.max(0, Math.min(100, pos.x));
    const yPct = Math.max(0, Math.min(100, pos.y));
    // drop a temporary "you" marker
    let me=$('es-me'); if(!me){ me=document.createElement('div'); me.id='es-me';
      // 50% blue fill so the map shows through, with a full-opacity white
      // rim and outer glow for clear definition over light terrain.
      // Counter-scaled the same way pins are so its CSS-pixel size stays
      // consistent regardless of the natural-image fit factor.
      me.style.cssText='position:absolute;z-index:8;transform:translate(-50%,-50%) scale(var(--pin-scale, 1));width:16px;height:16px;border-radius:50%;background:rgba(90,169,230,0.65);border:2px solid #fff;box-shadow:0 0 12px rgba(90,169,230,.8)';
      world.appendChild(me) }
    me.style.left=xPct+'%'; me.style.top=yPct+'%';
    flyTo(xPct,yPct,Math.max(scale,3));
  }, ()=>alert('Could not get your location.'), {enableHighAccuracy:true, timeout:8000});
});

/* keyboard */
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){ if($('es-set-modal').classList.contains('on')) return; deselect(); closeDrawer() }
  else if(e.key==='ArrowRight' && selId) step(1);
  else if(e.key==='ArrowLeft' && selId) step(-1);
});

/* settings modal */
(function(){
  const modal=$('es-set-modal'), frame=$('es-set-frame'), backdrop=$('es-set-backdrop'), btn=$('es-set-btn');
  let loaded=false;
  function open(){ if(!loaded){ frame.src='settings.html?embed=1'; loaded=true } modal.classList.add('on') }
  function close(){ modal.classList.remove('on') }
  btn.addEventListener('click', e=>{ e.preventDefault(); open() });
  modal.addEventListener('click', e=>{ if(e.target===modal||e.target===backdrop) close() });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && modal.classList.contains('on')) close() });
  window.addEventListener('message', e=>{ const d=e.data||{};
    if(d.type==='zcl-close') close();
    else if(d.type==='zcl-night'){ document.body.classList.toggle('night-mode', !!d.on); try{ sessionStorage.setItem('nightMode', d.on?'1':'0') }catch(e){} }
  });
})();

/* init */
function coverScale(){
  // Minimum zoom = fit-to-viewport ("contain" semantics). The user can zoom
  // out far enough to see the WHOLE basemap, even if that means black bars
  // on the off-axis side. At scale=1 the world is exactly viewport-width
  // wide (and ASPECT × viewport-width tall). To fit height inside vh too,
  // we need scale ≤ vh / (vw × ASPECT). The min of 1 and that is the
  // furthest we let the user zoom out. The clamp() function already
  // centers the world when it's smaller than the viewport in either
  // dimension, so the black bars appear naturally.
  const vw = mapEl.clientWidth, vh = mapEl.clientHeight;
  if(!vw || !vh) return 1;
  const fitHeight = vh / (vw * ASPECT);
  return Math.min(1, fitHeight);
}
function recomputeMin(){ MINS = coverScale(); if(scale < MINS) scale = MINS }

/* When the basemap image actually finishes loading, lock the ASPECT to its
   true natural ratio, switch the world's CSS dimensions to NATURAL pixel
   size (so the source bitmap is held at full resolution by the browser
   layer), and re-clamp. The visual size on screen is unchanged because
   the transform scale absorbs the fit-to-viewport factor — but the
   bitmap going into the GPU is now the full-res source, not a
   downsampled thumbnail. */
function onBasemapReady(){
  refreshAspect();
  const nw = basemapImg.naturalWidth;
  const nh = basemapImg.naturalHeight;
  if(nw && nh){
    world.style.width  = nw + 'px';
    world.style.height = nh + 'px';
    basemapImg.style.width  = nw + 'px';
    basemapImg.style.height = nh + 'px';
  }
  recomputeMin();
  clamp();
  apply();
}
if(basemapImg){
  if(basemapImg.complete && basemapImg.naturalWidth){
    onBasemapReady();
  } else {
    basemapImg.addEventListener('load', onBasemapReady, {once:true});
    basemapImg.addEventListener('error', ()=>{
      console.warn('map-zion.jpg failed to load — check the file is alongside map-zion.html in the deploy bundle.');
    }, {once:true});
  }
}

function init(){
  buildPins(); buildList();
  refreshAspect();
  recomputeMin();
  // Default view: a comfortable mid-zoom (~1.8×) focused on the right-side
  // main canyon corridor — frames the Visitor Center, Museum, Canyon
  // Junction, the Scenic Drive and the tunnel/Canyon Overlook area, which
  // is where most users are headed. They can pinch out to MINS to see the
  // whole park (Kolob included) or pinch in further.
  scale = MINS; tx = 0; ty = 0; clamp(); apply();
  flyTo(58, 60, 1.8);
}
window.addEventListener('resize', ()=>{ recomputeMin(); clamp(); apply() });
init();
