import * as A from 'astronomy-engine';
const LAT = 20.1911, LON = 30.7723, R_MOON = 1737.4, KM = 149597870.7, D = Math.PI / 180;
const rz = (t, v) => [Math.cos(t) * v[0] + Math.sin(t) * v[1], -Math.sin(t) * v[0] + Math.cos(t) * v[1], v[2]];
const rx = (t, v) => [v[0], Math.cos(t) * v[1] + Math.sin(t) * v[2], -Math.sin(t) * v[1] + Math.cos(t) * v[2]];
function toFixed(v, ax) { const a = ax.ra * 15 * D, d = ax.dec * D, W = ax.spin * D; return rz(W, rx(Math.PI / 2 - d, rz(Math.PI / 2 + a, v))); }
const up = [Math.cos(LAT * D) * Math.cos(LON * D), Math.cos(LAT * D) * Math.sin(LON * D), Math.sin(LAT * D)], east = [-Math.sin(LON * D), Math.cos(LON * D), 0];
const north = [-Math.sin(LAT * D) * Math.cos(LON * D), -Math.sin(LAT * D) * Math.sin(LON * D), Math.cos(LAT * D)], dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const azel = v => { const l = Math.hypot(...v), u = v.map(x => x / l); return [((Math.atan2(dot(u, east), dot(u, north)) / D) + 360) % 360, Math.asin(dot(u, up)) / D, l]; };
for (const iso of ['1972-12-12T00:00Z', '1972-12-12T04:00Z', '1972-12-13T03:00Z', '1972-12-14T01:00Z', '1972-12-14T05:00Z']) {
  const t = A.MakeTime(new Date(iso)), ax = A.RotationAxis(A.Body.Moon, t), gm = A.GeoMoon(t), gs = A.GeoVector(A.Body.Sun, t, true);
  const site = up.map(x => x * R_MOON);
  const earthF = toFixed([-gm.x * KM, -gm.y * KM, -gm.z * KM], ax).map((x, i) => x - site[i]);
  const sunF = toFixed([(gs.x - gm.x) * KM, (gs.y - gm.y) * KM, (gs.z - gm.z) * KM], ax);
  const [eaz, eel, ed] = azel(earthF), [saz, sel] = azel(sunF);
  // Earth's phase seen from the Moon: angle at Earth between Moon and Sun
  const em = [gm.x, gm.y, gm.z], es = [gs.x, gs.y, gs.z], ang = Math.acos(dot(em, es) / Math.hypot(...em) / Math.hypot(...es));
  const frac = (1 + Math.cos(ang)) / 2;      // fraction lit as seen from the Moon (phase angle at Earth = angle Moon-Earth-Sun's supplement)
  console.log(iso, 'Earth az', eaz.toFixed(1), 'el', eel.toFixed(1), 'diam', (2 * Math.atan(6371 / ed) / D).toFixed(2) + '°', ' Sun az', saz.toFixed(1), 'el', sel.toFixed(1), ' Earth lit', (100 * (1 - frac)).toFixed(0) + '%?', (100 * frac).toFixed(0) + '%');
}
{ const t = A.MakeTime(new Date('1972-12-12T00:00Z')), ax = A.RotationAxis(A.Body.Moon, t), gm = A.GeoMoon(t);
  const pole = toFixed([0, 0, 1], ax), P = [dot(pole, east), dot(pole, up), -dot(pole, north)];      // three.js: x east, y up, z south
  const ra = Math.atan2(gm.y, gm.x) / D, dec = Math.asin(gm.z / Math.hypot(gm.x, gm.y, gm.z)) / D, gmst = A.SiderealTime(t) * 15;
  console.log('pole (x east, y up, z south)', P.map(v => v.toFixed(4)).join(', '), ' sub-lunar lon', (((ra - gmst) % 360 + 540) % 360 - 180).toFixed(1), 'lat', dec.toFixed(1));
}
