/*
 * astro.js - time, precession, horizon coordinates, formatting.
 *
 * Catalog positions are ICRS/J2000 with proper motion propagated to the
 * catalog epoch. Reported RA/Dec stays J2000 so it matches charts and goto
 * targets; precession to the equinox of date is applied only on the way to
 * alt/az, where 0.36 deg of accumulated precession would otherwise show up as
 * a real pointing error.
 */

const D2R = Math.PI / 180, R2D = 180 / Math.PI;
const AS2R = Math.PI / (180 * 3600);

export function julianDay(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

/** Greenwich mean sidereal time in radians. */
export function gmst(date) {
  const jd = julianDay(date);
  const d = jd - 2451545.0;
  const T = d / 36525;
  let deg = 280.46061837 + 360.98564736629 * d + 0.000387933 * T * T - (T * T * T) / 38710000;
  deg = ((deg % 360) + 360) % 360;
  return deg * D2R;
}

/** Rotate a J2000 unit vector to the mean equinox of `date` (IAU 1976). */
export function precessFromJ2000(v, date) {
  const T = (julianDay(date) - 2451545.0) / 36525;
  const zeta = (2306.2181 * T + 0.30188 * T * T + 0.017998 * T ** 3) * AS2R;
  const z = (2306.2181 * T + 1.09468 * T * T + 0.018203 * T ** 3) * AS2R;
  const th = (2004.3109 * T - 0.42665 * T * T - 0.041833 * T ** 3) * AS2R;

  const cz = Math.cos(zeta), sz = Math.sin(zeta);
  const cZ = Math.cos(z), sZ = Math.sin(z);
  const ct = Math.cos(th), st = Math.sin(th);

  // P = Rz(-z) * Ry(th) * Rz(-zeta)
  const P = [
    [cz * ct * cZ - sz * sZ, -sz * ct * cZ - cz * sZ, -st * cZ],
    [cz * ct * sZ + sz * cZ, -sz * ct * sZ + cz * cZ, -st * sZ],
    [cz * st, -sz * st, ct],
  ];
  return [
    P[0][0] * v[0] + P[0][1] * v[1] + P[0][2] * v[2],
    P[1][0] * v[0] + P[1][1] * v[1] + P[1][2] * v[2],
    P[2][0] * v[0] + P[2][1] * v[1] + P[2][2] * v[2],
  ];
}

/**
 * Horizon coordinates. ra/dec in radians (J2000), lat/lon in degrees with
 * east-positive longitude. Returns degrees.
 */
export function altAz(raJ2000, decJ2000, latDeg, lonDeg, date) {
  const cd = Math.cos(decJ2000);
  const v = [cd * Math.cos(raJ2000), cd * Math.sin(raJ2000), Math.sin(decJ2000)];
  const p = precessFromJ2000(v, date);
  const ra = Math.atan2(p[1], p[0]);
  const dec = Math.asin(Math.max(-1, Math.min(1, p[2] / Math.hypot(p[0], p[1], p[2]))));

  const lst = gmst(date) + lonDeg * D2R;
  const H = lst - ra;
  const phi = latDeg * D2R;

  const sinAlt = Math.sin(dec) * Math.sin(phi) + Math.cos(dec) * Math.cos(phi) * Math.cos(H);
  const alt = Math.asin(Math.max(-1, Math.min(1, sinAlt)));
  let az = Math.atan2(
    -Math.cos(dec) * Math.sin(H),
    Math.sin(dec) * Math.cos(phi) - Math.cos(dec) * Math.sin(phi) * Math.cos(H),
  );
  az = ((az * R2D) % 360 + 360) % 360;
  return { alt: alt * R2D, az, haHours: (((H * R2D / 15) % 24) + 36) % 24 - 12 };
}

const POINTS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
  'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
export function compass(azDeg) {
  return POINTS[Math.round((((azDeg % 360) + 360) % 360) / 22.5) % 16];
}

/* ------------------------------------------------------------- formatting */

export function formatRA(rad) {
  let h = ((rad * R2D) / 15) % 24;
  if (h < 0) h += 24;
  const hh = Math.floor(h);
  const mf = (h - hh) * 60;
  const mm = Math.floor(mf);
  const ss = (mf - mm) * 60;
  return `${hh}h ${String(mm).padStart(2, '0')}m ${ss.toFixed(1).padStart(4, '0')}s`;
}

export function formatDec(rad) {
  const d = rad * R2D;
  const sign = d < 0 ? '-' : '+';
  const a = Math.abs(d);
  const dd = Math.floor(a);
  const mf = (a - dd) * 60;
  const mm = Math.floor(mf);
  const ss = (mf - mm) * 60;
  return `${sign}${String(dd).padStart(2, '0')}° ${String(mm).padStart(2, '0')}' ${ss.toFixed(0).padStart(2, '0')}"`;
}

export function formatDeg(d, digits = 2) {
  return `${d.toFixed(digits)}°`;
}

/** Field of view in degrees for a rectilinear lens. */
export function fovFor(focalMm, sensorMm) {
  return 2 * Math.atan(sensorMm / 2 / focalMm) * R2D;
}

export const CONSTELLATIONS = {
  And: 'Andromeda', Ant: 'Antlia', Aps: 'Apus', Aqr: 'Aquarius', Aql: 'Aquila',
  Ara: 'Ara', Ari: 'Aries', Aur: 'Auriga', Boo: 'Bootes', Cae: 'Caelum',
  Cam: 'Camelopardalis', Cnc: 'Cancer', CVn: 'Canes Venatici', CMa: 'Canis Major',
  CMi: 'Canis Minor', Cap: 'Capricornus', Car: 'Carina', Cas: 'Cassiopeia',
  Cen: 'Centaurus', Cep: 'Cepheus', Cet: 'Cetus', Cha: 'Chamaeleon', Cir: 'Circinus',
  Col: 'Columba', Com: 'Coma Berenices', CrA: 'Corona Australis', CrB: 'Corona Borealis',
  Crv: 'Corvus', Crt: 'Crater', Cru: 'Crux', Cyg: 'Cygnus', Del: 'Delphinus',
  Dor: 'Dorado', Dra: 'Draco', Equ: 'Equuleus', Eri: 'Eridanus', For: 'Fornax',
  Gem: 'Gemini', Gru: 'Grus', Her: 'Hercules', Hor: 'Horologium', Hya: 'Hydra',
  Hyi: 'Hydrus', Ind: 'Indus', Lac: 'Lacerta', Leo: 'Leo', LMi: 'Leo Minor',
  Lep: 'Lepus', Lib: 'Libra', Lup: 'Lupus', Lyn: 'Lynx', Lyr: 'Lyra', Men: 'Mensa',
  Mic: 'Microscopium', Mon: 'Monoceros', Mus: 'Musca', Nor: 'Norma', Oct: 'Octans',
  Oph: 'Ophiuchus', Ori: 'Orion', Pav: 'Pavo', Peg: 'Pegasus', Per: 'Perseus',
  Phe: 'Phoenix', Pic: 'Pictor', Psc: 'Pisces', PsA: 'Piscis Austrinus', Pup: 'Puppis',
  Pyx: 'Pyxis', Ret: 'Reticulum', Sge: 'Sagitta', Sgr: 'Sagittarius', Sco: 'Scorpius',
  Scl: 'Sculptor', Sct: 'Scutum', Ser: 'Serpens', Sex: 'Sextans', Tau: 'Taurus',
  Tel: 'Telescopium', Tri: 'Triangulum', TrA: 'Triangulum Australe', Tuc: 'Tucana',
  UMa: 'Ursa Major', UMi: 'Ursa Minor', Vel: 'Vela', Vir: 'Virgo', Vol: 'Volans',
  Vul: 'Vulpecula',
};
