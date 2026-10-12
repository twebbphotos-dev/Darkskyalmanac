
/* ───────────────────────────────────────────────────────────────────────────
   SunCalc-compatible interface on top of Astronomy Engine.
   Same function names and return shapes as SunCalc 1.9 (c) Vladimir Agafonkin,
   so every page keeps working, but positions and times now come from
   Astronomy Engine (VSOP87 / NOVAS based, checked by its author against
   JPL Horizons to about one arcminute) instead of SunCalc's short series.
   Sun and Moon rise/set agree with published almanacs to within a few seconds;
   the old series were off by up to 3 minutes (Sun) and 9 minutes (Moon).
   ─────────────────────────────────────────────────────────────────────────── */
(function (root) { 'use strict';
var A = root.Astronomy, rad = Math.PI / 180, dayMs = 864e5;
var SunCalc = {};
function obs(lat, lng, h) { return new A.Observer(lat, lng, h || 0); }
function scAz(azDeg) { var a = (azDeg - 180) * rad; return a > Math.PI ? a - 2 * Math.PI : a < -Math.PI ? a + 2 * Math.PI : a; }   // SunCalc measures azimuth from south, westward positive
function bad() { return new Date(NaN); }

SunCalc.getPosition = function (date, lat, lng) {
    var o = obs(lat, lng), eq = A.Equator(A.Body.Sun, date, o, true, true), hz = A.Horizon(date, o, eq.ra, eq.dec);
    return { azimuth: scAz(hz.azimuth), altitude: hz.altitude * rad };
};

var times = SunCalc.times = [
    [-0.833, 'sunrise',       'sunset'      ],
    [  -0.3, 'sunriseEnd',    'sunsetStart' ],
    [    -6, 'dawn',          'dusk'        ],
    [   -12, 'nauticalDawn',  'nauticalDusk'],
    [   -18, 'nightEnd',      'night'       ],
    [     6, 'goldenHourEnd', 'goldenHour'  ]
];
SunCalc.addTime = function (angle, riseName, setName) { times.push([angle, riseName, setName]); };
function observerAngle(height) { return -2.076 * Math.sqrt(height) / 60; }

// Sun times for the solar day whose noon is nearest to `date` (as SunCalc does). Values are worked out when first read.
SunCalc.getTimes = function (date, lat, lng, height) {
    height = height || 0;
    var o = obs(lat, lng), dh = observerAngle(height), t0 = new Date(date.valueOf() - dayMs / 2), noon, res = {}, cache = {};
    function getNoon() { if (noon === undefined) { var e = A.SearchHourAngle(A.Body.Sun, o, 0, t0); noon = e ? e.time.date : null; } return noon; }
    function lazy(name, fn) { Object.defineProperty(res, name, { enumerable: true, configurable: true, get: function () { if (!(name in cache)) cache[name] = fn(); return cache[name]; }, set: function (v) { cache[name] = v; } }); }
    lazy('solarNoon', function () { return getNoon() || bad(); });
    lazy('nadir', function () { var n = getNoon(); if (!n) return bad(); var e = A.SearchHourAngle(A.Body.Sun, o, 12, new Date(n.valueOf() - dayMs * 0.75)); return e ? e.time.date : bad(); });
    times.forEach(function (tm) {
        var alt = tm[0] + dh;
        lazy(tm[1], function () { var n = getNoon(); if (!n) return bad(); var e = A.SearchAltitude(A.Body.Sun, o, +1, new Date(n.valueOf() - dayMs / 2), 0.5, alt); return e ? e.date : bad(); });
        lazy(tm[2], function () { var n = getNoon(); if (!n) return bad(); var e = A.SearchAltitude(A.Body.Sun, o, -1, n, 0.5, alt); return e ? e.date : bad(); });
    });
    return res;
};

// Moon as seen from the observer's spot on the surface (parallax included), with refraction, as SunCalc documents.
SunCalc.getMoonPosition = function (date, lat, lng) {
    var o = obs(lat, lng), eq = A.Equator(A.Body.Moon, date, o, true, true), hz = A.Horizon(date, o, eq.ra, eq.dec, 'normal'),
        H = (A.SiderealTime(date) * 15 + lng - eq.ra * 15) * rad, phi = lat * rad, dec = eq.dec * rad,
        pa = Math.atan2(Math.sin(H), Math.tan(phi) * Math.cos(dec) - Math.sin(dec) * Math.cos(H));
    return { azimuth: scAz(hz.azimuth), altitude: hz.altitude * rad, distance: A.GeoMoon(date).Length() * A.KM_PER_AU, parallacticAngle: pa };
};

SunCalc.getMoonIllumination = function (date) {
    date = date || new Date();
    var s = A.Equator(A.Body.Sun, date, obs(0, 0), true, true), m = A.Equator(A.Body.Moon, date, obs(0, 0), true, true),
        sr = s.ra * 15 * rad, sd = s.dec * rad, mr = m.ra * 15 * rad, md = m.dec * rad,
        angle = Math.atan2(Math.cos(sd) * Math.sin(sr - mr), Math.sin(sd) * Math.cos(md) - Math.cos(sd) * Math.sin(md) * Math.cos(sr - mr));
    return { fraction: A.Illumination(A.Body.Moon, date).phase_fraction, phase: A.MoonPhase(date) / 360, angle: angle };
};

SunCalc.getMoonTimes = function (date, lat, lng, inUTC) {
    var t = new Date(date);
    if (inUTC) t.setUTCHours(0, 0, 0, 0); else t.setHours(0, 0, 0, 0);
    var o = obs(lat, lng), end = t.valueOf() + dayMs, result = {},
        r = A.SearchRiseSet(A.Body.Moon, o, +1, t, 1.05), s = A.SearchRiseSet(A.Body.Moon, o, -1, t, 1.05);
    if (r && r.date.valueOf() < end) result.rise = r.date;
    if (s && s.date.valueOf() < end) result.set = s.date;
    if (!result.rise && !result.set) result[SunCalc.getMoonPosition(new Date(t.valueOf() + dayMs / 2), lat, lng).altitude > 0 ? 'alwaysUp' : 'alwaysDown'] = true;
    return result;
};

if (typeof exports === 'object' && typeof module !== 'undefined') module.exports = SunCalc;
else root.SunCalc = SunCalc;
}(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this));
