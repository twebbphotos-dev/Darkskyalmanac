/* ──────────────────────────────────────────────────────────────
   stick.js — an analogue thumbstick for touch screens.
   Press anywhere on the pad and drag: x and y run smoothly from
   -1 to 1 (y is +1 pushed up), with a small dead zone in the middle.
   Phones that support it get a light tick when the stick leaves the
   centre and a firmer one at full throw.
   ────────────────────────────────────────────────────────────── */
export const buzz = ms => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) { /* not supported */ } };

export function createStick(el) {
  const knob = el.querySelector('i');
  const s = { x: 0, y: 0, active: false };
  let id = null, cx = 0, cy = 0, R = 1, wasOut = false, wasEdge = false;
  const set = (dx, dy) => {
    let d = Math.hypot(dx, dy);
    const k = d > R ? R / d : 1; dx *= k; dy *= k; d = Math.min(d, R);
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    const m = d / R, dead = 0.12, g = m < dead ? 0 : (m - dead) / (1 - dead);
    const shaped = g * g * 0.35 + g * 0.65;                          // fine near the centre, full at the edge
    s.x = d ? (dx / d) * shaped : 0; s.y = d ? (-dy / d) * shaped : 0;
    const out = m >= dead, edge = m > 0.97;
    if (out && !wasOut) buzz(8);
    if (edge && !wasEdge) buzz(18);
    wasOut = out; wasEdge = edge;
  };
  el.addEventListener('pointerdown', e => {
    if (id !== null) return;
    e.preventDefault(); id = e.pointerId; try { el.setPointerCapture(id); } catch (err) { /* synthetic or already released */ }
    const r = el.getBoundingClientRect();
    cx = r.left + r.width / 2; cy = r.top + r.height / 2; R = r.width * 0.36;
    s.active = true; el.classList.add('on');
    set(e.clientX - cx, e.clientY - cy);
  });
  el.addEventListener('pointermove', e => { if (e.pointerId === id) { e.preventDefault(); set(e.clientX - cx, e.clientY - cy); } });
  const end = e => {
    if (e.pointerId !== id) return;
    id = null; s.active = false; el.classList.remove('on');
    knob.style.transition = 'transform .15s ease-out'; set(0, 0);
    setTimeout(() => { knob.style.transition = ''; }, 160);
    wasOut = wasEdge = false;
  };
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(n => el.addEventListener(n, end));
  return s;
}
