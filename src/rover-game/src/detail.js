/* ──────────────────────────────────────────────────────────────
   detail.js — how much the simulator draws, chosen once at load.
   Auto picks Medium on phones and tablets and Ultra on computers;
   the settings sheet can override it (remembered on this device).
   Resolution still steps down by itself if frames run slow.
   ────────────────────────────────────────────────────────────── */
const TIERS = {
  // reach: how far away each size of rock is still drawn (m) — boulders, mid-size rocks, pebbles; scanMid: photo-scanned mid-size rocks; devils: how many dust devils can be out at once
  low:    { pr: 1.0, aa: false, shadow: 1024, shadowR: 0.8, grid: 1.45, rocks: 0.45, reach: [380, 90, 55],   scanMid: false, devils: 0 },
  medium: { pr: 1.5, aa: true,  shadow: 1024, shadowR: 1.0, grid: 1.18, rocks: 0.7,  reach: [560, 130, 75],  scanMid: false, devils: 1 },
  high:   { pr: 2.0, aa: true,  shadow: 2048, shadowR: 1.0, grid: 1.0,  rocks: 1.0,  reach: [900, 210, 110], scanMid: true, devils: 2 },
  ultra:  { pr: 2.0, aa: true,  shadow: 4096, shadowR: 1.35, grid: 0.82, rocks: 1.35, reach: [1400, 300, 150], scanMid: true, devils: 3 },
};
const TOUCHY = typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches;
export function detailChoice() { try { return localStorage.getItem('jt-detail') || 'auto'; } catch (e) { return 'auto'; } }
export function setDetail(v) { try { localStorage.setItem('jt-detail', v); } catch (e) { /* not remembered */ } }
const choice = detailChoice();
export const DETAIL_NAME = TIERS[choice] ? choice : (TOUCHY ? 'medium' : 'ultra');
export const DETAIL = TIERS[DETAIL_NAME];
