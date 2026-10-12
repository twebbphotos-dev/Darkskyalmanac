/* ---------------------------------------------------------------------------
   zcl-tz.js — one timezone answer for the whole app.

   WHY THIS EXISTS
   Before this file, every page decided the display timezone on its own. Two
   different wrong answers were in circulation at the same time:

     1. Most pages hardcoded 'America/Denver' no matter where the saved
        location actually was. Plan a night in California and every sunset was
        an hour late; plan one in Arizona between March and November and every
        time was an hour late, because Denver observes DST and Arizona does not.

     2. clouds.html and forecast.html used a guessTZ(lng) with its Mountain /
        Pacific cut at longitude -112.5. Zion itself sits at -112.9869, i.e.
        WEST of that cut, so those pages placed Zion in Pacific time and drew
        every sun and moon time one hour early — while the hardcoded pages drew
        the same event correctly. Same location, same event, two answers.

   So the fix is not a better longitude cut. It is a single resolver that every
   page calls, that knows the real state boundaries in the region this app is
   built for, and that knows Arizona keeps standard time all year.

   Longitude bands are still the fallback for the rest of the world, where a
   one-hour error is a planning nuisance rather than a wrong answer about the
   user's own back yard.
--------------------------------------------------------------------------- */
(function(global){
  'use strict';

  var DEFAULT_TZ = 'America/Denver';
  var HOME = { lat: 37.1986, lng: -112.9869, label: 'Default location', tz: 'America/Denver' };

  function inBox(lat, lng, s, n, w, e){
    return lat >= s && lat <= n && lng >= w && lng <= e;
  }

  /* --- Western US, by state, because this is the ground the app is used on ---
     Boxes are deliberately coarse: they only have to separate neighbouring
     zones, and every box is tested against its neighbours below. */
  function westernUS(lat, lng){

    // Arizona — standard time all year (no DST), EXCEPT the Navajo Nation in
    // the north-east corner, which does observe it. Page sits west of the
    // Navajo cut and is correctly Phoenix; Monument Valley is east of it and
    // correctly Denver.
    if(inBox(lat, lng, 31.33, 37.00, -114.82, -109.04)){
      if(lat >= 35.50 && lng >= -110.75) return 'America/Denver'; // Navajo Nation
      return 'America/Phoenix';
    }

    // California
    if(inBox(lat, lng, 32.53, 42.01, -124.48, -114.13)) return 'America/Los_Angeles';
    // Nevada
    if(inBox(lat, lng, 35.00, 42.00, -120.01, -114.04)) return 'America/Los_Angeles';
    // Oregon (the small Mountain-time sliver in the far south-east is ignored)
    if(inBox(lat, lng, 41.99, 46.30, -124.60, -116.46)) return 'America/Los_Angeles';
    // Washington
    if(inBox(lat, lng, 45.54, 49.01, -124.85, -116.91)) return 'America/Los_Angeles';
    // Idaho — the northern panhandle is Pacific, the rest of the state Mountain
    if(inBox(lat, lng, 41.99, 49.01, -117.25, -111.04)){
      return lat >= 45.50 ? 'America/Los_Angeles' : 'America/Boise';
    }
    // Alaska and Hawaii sit at longitudes the bands below cannot separate
    // (Anchorage and Honolulu are only ~8° apart but 2 hours and 30° of
    // latitude apart), so they are matched on latitude here instead.
    if(lat >= 51.00 && lng <= -129.00) return 'America/Anchorage';
    if(lat >= 18.00 && lat <= 23.50 && lng <= -154.00) return 'Pacific/Honolulu';

    // Utah, Colorado, Wyoming, Montana, New Mexico — all Mountain with DST
    if(inBox(lat, lng, 36.99, 42.01, -114.06, -109.04)) return 'America/Denver'; // UT
    if(inBox(lat, lng, 36.99, 41.01, -109.06, -102.04)) return 'America/Denver'; // CO
    if(inBox(lat, lng, 40.99, 45.01, -111.06, -104.05)) return 'America/Denver'; // WY
    if(inBox(lat, lng, 44.35, 49.01, -116.06, -104.03)) return 'America/Denver'; // MT
    if(inBox(lat, lng, 31.33, 37.00, -109.06, -103.00)) return 'America/Denver'; // NM

    return null;
  }

  /* --- Everywhere else: longitude bands. The cuts follow where the zone
     boundaries actually run on the ground, not the tidy 15°-apart meridian
     midpoints — those put Atlanta in Central and Austin in Mountain, and the
     old -112.5 cut put Zion itself in Pacific. --- */
  function byLongitude(lng){
    if(lng >= -52.5)  return 'America/St_Johns';
    if(lng >= -67.5)  return 'America/Halifax';
    if(lng >= -85.0)  return 'America/New_York';
    if(lng >= -102.0) return 'America/Chicago';
    if(lng >= -114.0) return 'America/Denver';
    if(lng >= -127.5) return 'America/Los_Angeles';
    if(lng >= -142.5) return 'America/Anchorage';
    if(lng >= -157.5) return 'Pacific/Honolulu';
    return null;
  }

  /* Resolve coordinates to an IANA zone. Outside the Americas we ask the
     device, which is right whenever the user is where they are planning for
     and is the best guess available offline when they are not. */
  function forCoords(lat, lng){
    lat = +lat; lng = +lng;
    if(!isFinite(lat) || !isFinite(lng)) return DEFAULT_TZ;

    var z = westernUS(lat, lng);
    if(z) return z;

    // Only trust the longitude bands inside the Americas' latitude/longitude
    // envelope; elsewhere they would be nonsense.
    if(lng <= -52.5 && lng >= -170 && lat >= 14 && lat <= 72){
      z = byLongitude(lng);
      if(z) return z;
    }

    try{
      var dev = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if(dev) return dev;
    }catch(e){}
    return DEFAULT_TZ;
  }

  function isValidZone(tz){
    if(!tz || typeof tz !== 'string') return false;
    try{ new Intl.DateTimeFormat('en-US', {timeZone: tz}); return true; }
    catch(e){ return false; }
  }

  /* The saved location, in the one shape the whole app agrees on. A tz stored
     alongside the coordinates wins (Settings records it at save time, so a
     location the user named keeps the zone it was saved with); otherwise we
     derive it. A stored tz that no longer parses is discarded rather than
     trusted. */
  function loc(){
    var r = null;
    try{ r = JSON.parse(localStorage.getItem('dsa-location') || 'null'); }catch(e){}
    if(!r || !isFinite(+r.lat) || !isFinite(+r.lng) ||
       Math.abs(+r.lat) > 90 || Math.abs(+r.lng) > 180){
      return {lat: HOME.lat, lng: HOME.lng, label: HOME.label, tz: HOME.tz};
    }
    var lat = +r.lat, lng = +r.lng;
    return {
      lat: lat,
      lng: lng,
      label: r.label || 'Saved location',
      tz: isValidZone(r.tz) ? r.tz : forCoords(lat, lng)
    };
  }

  function zone(){ return loc().tz; }

  /* --- Formatting. Every page renders times through these, so no page can
     drift back to raw getHours() or its own hardcoded zone. --- */

  function fmtTime(d, tz){
    if(!d || isNaN(d)) return '—';
    return new Intl.DateTimeFormat('en-US', {
      timeZone: tz || zone(), hour: 'numeric', minute: '2-digit', hour12: true
    }).format(d);
  }

  function fmtDate(d, opts, tz){
    if(!d || isNaN(d)) return '—';
    var o = {timeZone: tz || zone()};
    for(var k in (opts || {})) o[k] = opts[k];
    if(!opts) { o.weekday = 'short'; o.month = 'short'; o.day = 'numeric'; }
    return new Intl.DateTimeFormat('en-US', o).format(d);
  }

  /* 'YYYY-MM-DD' for the calendar day this instant falls on IN THE LOCATION'S
     zone — which is what hourly forecast tables and day-grouping need. Built
     from parts, never from toISOString(), which is UTC. */
  function dayKey(d, tz){
    var p = new Intl.DateTimeFormat('en-CA', {
      timeZone: tz || zone(), year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(d).reduce(function(a, x){ a[x.type] = x.value; return a; }, {});
    return p.year + '-' + p.month + '-' + p.day;
  }

  /* Hour of the local day, 0-23. */
  function hourOf(d, tz){
    var p = new Intl.DateTimeFormat('en-US', {
      timeZone: tz || zone(), hour: 'numeric', hour12: false
    }).formatToParts(d);
    for(var i = 0; i < p.length; i++) if(p[i].type === 'hour') return (+p[i].value) % 24;
    return 0;
  }

  /* Minutes past local midnight. This is the number that ordering and
     gap-between-events maths must use — raw getHours() drifts by the machine's
     own UTC offset and has caused a one-hour moonrise error here before. */
  function minOfDay(d, tz){
    var p = new Intl.DateTimeFormat('en-US', {
      timeZone: tz || zone(), hour: 'numeric', minute: 'numeric', hour12: false
    }).formatToParts(d).reduce(function(a, x){ a[x.type] = x.value; return a; }, {});
    return ((+p.hour) % 24) * 60 + (+p.minute);
  }

  /* Signed UTC offset in minutes (MDT = -360). DST-aware for the date given,
     so it is correct on both sides of a changeover. */
  function utcOffsetMinutes(d, tz){
    d = d || new Date();
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz || zone(), timeZoneName: 'shortOffset', hour: 'numeric'
    }).formatToParts(d);
    for(var i = 0; i < parts.length; i++){
      if(parts[i].type === 'timeZoneName'){
        var m = /GMT([+-])(\d{1,2})(?::(\d{2}))?/.exec(parts[i].value);
        if(m){
          var mins = (+m[2]) * 60 + (m[3] ? +m[3] : 0);
          return m[1] === '-' ? -mins : mins;
        }
        return 0; // bare "GMT"
      }
    }
    return 0;
  }

  /* Hours WEST of UTC, positive (MDT = 6, MST/Phoenix = 7). This is the
     convention forecast.html's old mtOffset() used. */
  function offsetWestHours(d, tz){ return -utcOffsetMinutes(d, tz) / 60; }

  /* 'MDT', 'MST', 'PDT' … for labelling a time so a wrong zone is visible
     rather than silent. */
  function abbr(d, tz){
    d = d || new Date();
    try{
      var parts = new Intl.DateTimeFormat('en-US', {
        timeZone: tz || zone(), timeZoneName: 'short', hour: 'numeric'
      }).formatToParts(d);
      for(var i = 0; i < parts.length; i++)
        if(parts[i].type === 'timeZoneName') return parts[i].value;
    }catch(e){}
    return '';
  }

  /* The instant at which the location's own wall clock reads the given date
     and time. `new Date(y, mo, da, hh)` builds that wall clock on the DEVICE,
     which is a different moment whenever the phone and the place being planned
     for are in different zones — the hourly strips were labelled from that and
     drifted a full hour. We guess, measure the real offset at the guess, and
     re-measure once so a DST changeover lands on the right side. */
  function at(y, mo, da, hh, mm, tz){
    tz = tz || zone();
    var guess = Date.UTC(y, mo, da, hh || 0, mm || 0, 0);
    var off  = utcOffsetMinutes(new Date(guess), tz);
    var t    = guess - off * 60000;
    var off2 = utcOffsetMinutes(new Date(t), tz);
    if(off2 !== off) t = guess - off2 * 60000;
    return new Date(t);
  }

  /* ---------------- The Moon, one answer app-wide ----------------
     Before this, five pages each described "tonight's Moon" differently:
     one used SunCalc, four used a mean-lunar-cycle shortcut (the real Moon
     runs up to ~14 hours ahead of or behind that average), and each sampled
     it at a different moment — now, 10 PM, even 8 AM the next day. On one
     night the app showed 83%, 86%, 90% and 92% for the same Moon.
     Now: always SunCalc when it's loaded, always sampled at 11 PM local
     time on the calendar day asked for, always named by the same rule. */
  var SYNODIC = 29.530588853, REF_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);

  function phaseName(p, lit){
    if(lit < 0.02) return 'New Moon';
    if(lit > 0.98) return 'Full Moon';
    var wax = p < 0.5;
    if(Math.abs(p - 0.25) < 0.03) return 'First Quarter';
    if(Math.abs(p - 0.75) < 0.03) return 'Last Quarter';
    if(lit < 0.5) return wax ? 'Waxing Crescent' : 'Waning Crescent';
    return wax ? 'Waxing Gibbous' : 'Waning Gibbous';
  }

  /* `date` names a calendar day (its device-local year/month/day, which is
     how every page builds its day objects). Returns
     {ill 0–1, frac 0–1 of the cycle (0 new, .5 full), waxing, name, at, exact}. */
  function moonTonight(date, tz){
    tz = tz || zone();
    var t = at(date.getFullYear(), date.getMonth(), date.getDate(), 23, 0, tz);
    var SC = global.SunCalc, fr, ph, exact = false;
    if(SC && SC.getMoonIllumination){
      try{ var m = SC.getMoonIllumination(t); fr = m.fraction; ph = m.phase; exact = true; }catch(e){}
    }
    if(!exact){
      var days = (t.getTime() - REF_NEW_MOON) / 86400000;
      ph = (((days % SYNODIC) + SYNODIC) % SYNODIC) / SYNODIC;
      fr = 0.5 * (1 - Math.cos(2 * Math.PI * ph));
    }
    return { ill: fr, frac: ph, waxing: ph < 0.5, name: phaseName(ph, fr), at: t, exact: exact };
  }

  /* Moonrise and moonset during the LOCATION's calendar day. SunCalc's own
     getMoonTimes scans the phone's midnight-to-midnight, which is a different
     24 hours whenever the phone and the place being planned for are in
     different zones. We scan the UTC days that overlap the location's day and
     keep the events that fall inside it. Same return shape as SunCalc. */
  function moonTimes(date, lat, lng, tz){
    var SC = global.SunCalc;
    if(!SC || !SC.getMoonTimes) throw new Error('SunCalc not loaded');
    tz = tz || zone();
    var y = date.getFullYear(), mo = date.getMonth(), da = date.getDate();
    var start = at(y, mo, da, 0, 0, tz).getTime(), end = at(y, mo, da + 1, 0, 0, tz).getTime();
    var rise = null, set = null;
    for(var k = -1; k <= 1; k++){
      var u = new Date(start + k * 86400000);
      var r = SC.getMoonTimes(u, lat, lng, true);
      if(r.rise && r.rise.getTime() >= start && r.rise.getTime() < end && (!rise || r.rise < rise)) rise = r.rise;
      if(r.set  && r.set.getTime()  >= start && r.set.getTime()  < end && (!set  || r.set  < set))  set  = r.set;
    }
    var out = {};
    if(rise) out.rise = rise;
    if(set)  out.set  = set;
    if(!rise && !set){
      var alt = SC.getMoonPosition(new Date((start + end) / 2), lat, lng).altitude;
      out[alt > 0 ? 'alwaysUp' : 'alwaysDown'] = true;
    }
    return out;
  }

  /* Save a location, always with its resolved zone attached, so every page
     that reads the store afterwards gets the same answer. Single writer. */
  function save(lat, lng, label, tz){
    lat = +lat; lng = +lng;
    if(!isFinite(lat) || Math.abs(lat) > 90) return null;
    if(!isFinite(lng) || Math.abs(lng) > 180) return null;
    var rec = {
      lat: Math.round(lat * 1e6) / 1e6,
      lng: Math.round(lng * 1e6) / 1e6,
      label: label || 'Custom location',
      tz: isValidZone(tz) ? tz : forCoords(lat, lng)
    };
    try{ localStorage.setItem('dsa-location', JSON.stringify(rec)); }
    catch(e){ return null; }
    return rec;
  }

  global.ZCLTZ = {
    forCoords: forCoords,
    isValidZone: isValidZone,
    loc: loc,
    zone: zone,
    at: at,
    save: save,
    moonTonight: moonTonight,
    moonTimes: moonTimes,
    phaseName: phaseName,
    fmtTime: fmtTime,
    fmtDate: fmtDate,
    dayKey: dayKey,
    hourOf: hourOf,
    minOfDay: minOfDay,
    utcOffsetMinutes: utcOffsetMinutes,
    offsetWestHours: offsetWestHours,
    abbr: abbr,
    HOME: HOME
  };

})(typeof self !== 'undefined' ? self : this);
