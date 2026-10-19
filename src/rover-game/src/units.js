/* Units for the rover games, metric or US, from Settings ("US units in the rover games", localStorage
   'dsa-game-units'). Values inside the games stay metric; only what is shown is converted. */
export const US = (() => { try { return localStorage.getItem('dsa-game-units') === 'us'; } catch (e) { return false; } })();
const FT = 3.28084, MI = 0.621371, LB = 2.20462;
const n = (v, d) => v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
export const SPEED = US ? 'mph' : 'km/h';
export const speed = kmh => US ? kmh * MI : kmh;                      // a number, in SPEED
export const kmh = (v, d = 0) => `${n(speed(v), d)} ${SPEED}`;        // km/h in, text out
export const ms = (v, d = 0) => US ? `${n(v * FT, d)} ft/s` : `${n(v, d)} m/s`;
export const m = (v, d = 0) => US ? `${n(v * FT, d)} ft` : `${n(v, d)} m`;            // short distances and heights
export const far = v => US ? (v * FT < 1000 ? `${n(v * FT, 0)} ft` : `${n(v / 1609.344, v < 16093 ? 1 : 0)} mi`)
  : (v < 1000 ? `${n(v, 0)} m` : `${n(v / 1000, v < 10000 ? 1 : 0)} km`);                // anything from meters to kilometers
export const km = (v, d = 0) => US ? `${n(v * MI, d)} mi` : `${n(v, d)} km`;
export const kg = v => US ? `${n(v * LB, 0)} lb` : `${n(v, 0)} kg`;
export const degC = v => US ? `${n(v * 9 / 5 + 32, 0)} °F` : `${n(v, 0)} °C`;
