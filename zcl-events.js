/* Sky events — one list shared by Home, Objects, Stargazing Forecast and Cosmic Events,
   so the four pages can never disagree.

   Dates are the local evening or morning to look. Every date, separation, magnitude and
   constellation below was computed with two independent ephemerides (Astronomy Engine and
   PyEphem) at 37.20°N 112.99°W, in October 2026. Clock times are stored as UTC tokens,
   {T:2026-06-21T08:24Z}, and shown in the saved location's time zone.
   m is the month counted from 0 (0 = January). */
(function () {
  var showers = [
    // peak dates and rates: International Meteor Organization shower calendar
    { name: 'Quadrantids',     m: 0,  d: 3,  zhr: 80,  rad: 'Boötes',     short: 'Sharp peak only a few hours wide — best 2–5 AM',
      note: 'A sharp, brief peak only a few hours wide — best in the small hours, 2–5 AM. Often rich in bright meteors.' },
    { name: 'Lyrids',          m: 3,  d: 22, zhr: 18,  rad: 'Lyra',       short: 'Reliable annual shower; occasional outbursts',
      note: 'A dependable spring shower with the occasional bright fireball and rare outburst years. The radiant rises in late evening.' },
    { name: 'Eta Aquariids',   m: 4,  d: 6,  zhr: 50,  rad: 'Aquarius',   short: "Pre-dawn only; Halley's Comet debris",
      note: 'Swift meteors from the dust of Halley’s Comet. The radiant rises shortly before dawn at this latitude, so expect far fewer than the headline rate — look in the last hour of darkness.' },
    { name: 'Delta Aquariids', m: 6,  d: 30, zhr: 25,  rad: 'Aquarius',   short: 'Broad peak; overlaps the early Perseids',
      note: 'A broad, gentle peak that overlaps the building Perseids — faint, steady meteors low in the south.' },
    { name: 'Perseids',        m: 7,  d: 12, zhr: 100, rad: 'Perseus',    short: "The year's most popular — warm nights, high rate", feature: true,
      note: 'The summer favourite — warm nights, a high rate, and many bright meteors with persistent trains. Best after midnight, when the radiant is high.' },
    { name: 'Draconids',       m: 9,  d: 8,  zhr: 10,  rad: 'Draco',      short: 'Evening shower; occasional outburst years',
      note: 'An evening shower (the radiant is highest at dusk) that occasionally erupts into a brief storm. Usually sparse.' },
    { name: 'Orionids',        m: 9,  d: 21, zhr: 20,  rad: 'Orion',      short: "Swift meteors; Halley's Comet debris",
      note: 'The second helping of Halley’s Comet debris — fast meteors radiating from near Orion’s club, best after midnight.' },
    { name: 'Leonids',         m: 10, d: 17, zhr: 15,  rad: 'Leo',        short: 'Very fast meteors; best before dawn',
      note: 'Famous for rare, spectacular storms roughly every 33 years; in ordinary years a modest but very fast shower, best before dawn.' },
    { name: 'Geminids',        m: 11, d: 13, zhr: 150, rad: 'Gemini',     short: "The year's richest — active all night, bright meteors", feature: true,
      note: 'The richest shower of the year — bright, often colourful meteors, active from mid-evening until dawn.' },
    { name: 'Ursids',          m: 11, d: 22, zhr: 10,  rad: 'Ursa Minor', short: 'Brief solstice shower; circumpolar radiant',
      note: 'A quiet solstice shower from a circumpolar radiant near the Little Dipper — a low-key encore after the Geminids.' }
  ];

  // art: illustration on a featured card.  badge: also flagged on the Forecast calendar.
  var events = [
    { y: 2026, m: 5,  d: 9,  label: 'Venus – Jupiter Conjunction', art: 'conj', feature: true, badge: true,
      short: 'The two brightest planets 1.6° apart, low in the west-northwest at dusk.',
      note: 'The two brightest planets meet 1.6° apart, low in the west-northwest at dusk — an unmistakable pair to the naked eye and a fine sight in binoculars.' },
    { y: 2026, m: 5,  d: 15, label: 'Mercury at Greatest Elongation', type: 'Elongation', art: 'conj',
      note: 'Mercury stands 24.5° east of the Sun, shining at magnitude +0.5. Look low in the west-northwest 30–45 minutes after sunset, below Venus.' },
    { y: 2026, m: 5,  d: 21, label: 'June Solstice', art: 'sun',
      note: 'The longest day and shortest night of the year ({T:2026-06-21T08:24Z}). From here on the nights slowly lengthen — true darkness arrives a little earlier each evening.' },
    { y: 2026, m: 6,  d: 4,  label: 'Mars Passes Close to Uranus', art: 'conj', badge: true,
      short: 'Mars within 0.2° of Uranus before dawn — one telescope field.',
      note: 'Mars slides within 0.2° of Uranus — less than half the width of the Full Moon — low in the east before dawn. Use Mars as a guidepost to spot dim blue-green Uranus in the same telescope field.' },
    { y: 2026, m: 6,  d: 7,  label: 'Jupiter Disappears into Evening Twilight', art: 'jupiter',
      note: 'Jupiter sinks too close to the setting Sun to observe — the end of its 2025–26 evening apparition. It stays out of view for about six weeks while it passes behind the Sun.' },
    { y: 2026, m: 6,  d: 29, label: 'Jupiter at Solar Conjunction', art: 'jupiter',
      note: 'Jupiter passes behind the Sun from our point of view, the midpoint of its absence from the sky. From now on it slowly emerges into the pre-dawn east.' },
    { y: 2026, m: 7,  d: 14, label: 'Venus at Greatest Elongation', type: 'Elongation', art: 'conj',
      note: 'Venus reaches its greatest angle from the Sun for this evening apparition, 46° to the east, at about magnitude −4.4. From this latitude it still sits low in the west at dusk.' },
    { y: 2026, m: 7,  d: 19, label: 'Jupiter Returns to Morning Sky', art: 'jupiter',
      note: 'Jupiter climbs far enough from the Sun’s glare to be spotted low in the east before dawn — the start of its 2026–27 apparition. It rises earlier each night until its February 2027 opposition.' },
    { y: 2026, m: 7,  d: 27, label: 'Deep Partial Lunar Eclipse', type: 'Eclipse', art: 'moon', badge: true,
      short: 'Earth’s shadow covers 93% of the Moon’s width, deepest at {T:2026-08-28T04:12Z}.',
      note: 'Earth’s shadow covers 93% of the Moon’s width, deepest at {T:2026-08-28T04:12Z} — nearly total, with the shadowed part glowing dull red. The whole partial phase is visible across most of North America.' },
    { y: 2026, m: 8,  d: 22, label: 'Autumn Equinox', art: 'sun',
      note: 'Day and night are nearly equal ({T:2026-09-23T00:05Z}), and the Milky Way’s bright core sinks toward the southwest after dusk. The long, dark nights of galaxy season begin.' },
    { y: 2026, m: 8,  d: 25, label: 'Neptune at Opposition', art: 'neptune', badge: true,
      short: 'Closest and brightest for the year (mag +7.8) in Pisces — telescope or binoculars.',
      note: 'Neptune is at its closest and brightest for the year (magnitude +7.8) in Pisces — a tiny blue point for binoculars or a telescope, up all night not far from Saturn.' },
    { y: 2026, m: 8,  d: 26, label: 'Harvest Moon', art: 'moon',
      note: 'The full Moon closest to the autumn equinox, rising soon after sunset for several evenings running. A bright, golden Moon low on the horizon — a classic photo opportunity over the canyon walls.' },
    { y: 2026, m: 9,  d: 4,  label: 'Saturn at Opposition', art: 'saturn', feature: true, badge: true,
      short: 'Brightest for 2026 (mag +0.3), up all night in Cetus. Rings 7.4° open after the 2025 edge-on crossing, widening each year to 2032.',
      note: 'Saturn is opposite the Sun: rising at sunset, highest near 1 AM and setting at dawn, at its brightest for the year (magnitude +0.3) in Cetus. The rings have re-opened to 7.4° after the 2025 edge-on crossing and will keep widening until 2032.' },
    { y: 2026, m: 9,  d: 6,  label: 'Moon Occults Jupiter', type: 'Occultation', art: 'jupiter', badge: true,
      short: 'The Moon covers Jupiter for eastern North America; farther west the pair rise side by side before dawn.',
      note: 'The crescent Moon passes directly in front of Jupiter for eastern North America. Farther west it happens just before the pair rise — they come up side by side, less than half a degree apart, shortly before dawn.' },
    { y: 2026, m: 10, d: 16, label: 'Mars–Jupiter Conjunction', art: 'conj', badge: true,
      short: 'Mars (mag +0.7) 1.2° from Jupiter (mag −2.1), high in the southeast before dawn.',
      note: 'Reddish Mars passes 1.2° from brilliant Jupiter in Leo. The pair rise around midnight and stand high in the southeast before dawn — both fit one binocular field.' },
    { y: 2026, m: 10, d: 20, label: 'Mercury at Its Best Before Dawn', type: 'Elongation', art: 'conj',
      note: 'Mercury reaches 19.6° west of the Sun at magnitude −0.6 — one of its best morning showings of the year from northern latitudes. Look low in the east-southeast 45 minutes before sunrise.' },
    { y: 2026, m: 10, d: 24, label: 'Beaver Supermoon', art: 'moon',
      note: 'A full Moon near perigee, about 7% wider than an average full Moon and noticeably brighter. Bright enough to wash out faint deep-sky targets, so a night for lunar and landscape photography.' },
    { y: 2026, m: 10, d: 25, label: 'Uranus at Opposition', art: 'uranus', badge: true,
      short: 'Closest and brightest for the year (mag +5.6) in Taurus — a dim blue-green point in binoculars.',
      note: 'Uranus is at its brightest of the year (magnitude +5.6) in Taurus — a dim blue-green point, just catchable in binoculars from a dark sky and an easy target in any small telescope.' },
    { y: 2026, m: 11, d: 21, label: 'December Solstice', art: 'sun',
      note: 'The longest night of the year ({T:2026-12-21T20:50Z}) — darkness falls early and lasts late, giving the most observing hours of any season. Orion and the winter showpieces ride high.' },
    { y: 2026, m: 11, d: 23, label: 'Cold Supermoon', art: 'moon', feature: true,
      note: 'The closest and largest full Moon of 2026, about 222,000 miles (357,000 km) away. A spectacular Moon over the canyon, and a fine night for lunar detail.' },
    { y: 2027, m: 0,  d: 2,  label: 'Earth at Perihelion', type: 'Earth', art: 'sun',
      note: 'Earth is at its closest to the Sun for the year, 147.1 million km — about 3% nearer than in July. Our seasons come from the tilt of Earth’s axis, not its distance.' },
    { y: 2027, m: 0,  d: 3,  label: 'Venus at Greatest Elongation', type: 'Elongation', art: 'conj',
      note: 'Venus stands 47° west of the Sun — a brilliant Morning Star at magnitude −4.6, more than 20° up in the southeast as dawn begins.' },
    { y: 2027, m: 1,  d: 10, label: 'Jupiter at Opposition', type: 'Opposition', art: 'jupiter', badge: true,
      short: 'Magnitude −2.6 in Leo, up all night — belts and all four Galilean moons on show.',
      note: 'Jupiter is opposite the Sun and up all night at magnitude −2.6 in Leo — its cloud belts and all four Galilean moons on show. Well placed for evening viewing through spring 2027.' },
    { y: 2027, m: 1,  d: 19, label: 'Mars at Opposition', art: 'mars', feature: true, badge: true,
      short: 'Mars at its best until 2029 — mag −1.2, 13.8″ across, up all night in Leo.',
      note: 'Mars at its best until 2029 — up all night in Leo at magnitude −1.2, nearly as bright as Sirius. The 13.8″ disc shows its polar cap and dark markings such as Syrtis Major at high power.' },
    { y: 2027, m: 2,  d: 20, label: 'March Equinox', art: 'sun',
      note: 'Day and night are nearly equal ({T:2027-03-20T20:24Z}). Galaxy season is at its height: Leo, Virgo and the Big Dipper ride high in the evening.' },
    { y: 2027, m: 5,  d: 21, label: 'June Solstice', art: 'sun',
      note: 'The longest day and shortest night of the year ({T:2027-06-21T14:10Z}). The Milky Way core is up for most of the short night.' },
    { y: 2027, m: 8,  d: 22, label: 'Autumn Equinox', art: 'sun',
      note: 'Day and night are nearly equal (the equinox falls at {T:2027-09-23T06:01Z}). The long, dark nights of galaxy season begin.' },
    { y: 2027, m: 8,  d: 28, label: 'Neptune at Opposition', art: 'neptune', badge: true,
      short: 'Closest and brightest for the year (mag +7.8) in Pisces.',
      note: 'Neptune is at its closest and brightest for the year (magnitude +7.8) in Pisces — a tiny blue point for binoculars or a telescope, up all night.' },
    { y: 2027, m: 9,  d: 17, label: 'Saturn at Opposition', art: 'saturn', feature: true, badge: true,
      short: 'Brightest for 2027 (mag 0.0), up all night in Pisces, rings 12.9° open.',
      note: 'Saturn is opposite the Sun and up all night in Pisces at magnitude 0.0. The rings are now 12.9° open, up from 7.4° a year earlier, and the Cassini Division is an easy catch in a small telescope.' },
    { y: 2027, m: 10, d: 29, label: 'Uranus at Opposition', art: 'uranus', badge: true,
      short: 'Closest and brightest for the year (mag +5.6) in Taurus.',
      note: 'Uranus is at its brightest of the year (magnitude +5.6) in Taurus — just catchable in binoculars from a dark sky. Opposition falls at {T:2027-11-30T09:00Z}.' },
    { y: 2027, m: 11, d: 21, label: 'December Solstice', art: 'sun',
      note: 'The longest night of the year ({T:2027-12-22T02:42Z}) — the most observing hours of any season.' }
  ];

  /* Moonlight on a shower's peak night, worked out for the year in question
     (needs the Sun & Moon library; returns '' without it). */
  function moonNote(date) {
    try {
      if (typeof SunCalc === 'undefined') return '';
      var loc = (window.ZCLTZ && ZCLTZ.loc) ? ZCLTZ.loc() : { lat: 37.1986, lng: -112.9869 };
      var base = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 22, 0, 0).getTime(), up = 0, n = 0, ill = 0;
      for (var h = 0; h <= 7; h++) {            // 10 PM to 5 AM
        var t = new Date(base + h * 3600000);
        if (SunCalc.getMoonPosition(t, loc.lat, loc.lng).altitude > 0) up++;
        ill += SunCalc.getMoonIllumination(t).fraction; n++;
      }
      var pct = Math.round(ill / n * 100), yr = date.getFullYear();
      if (pct <= 8) return 'In ' + yr + ' the Moon is nearly new — dark skies all night.';
      if (up === 0) return 'In ' + yr + ' the ' + pct + '%-lit Moon is below the horizon through the prime hours — dark skies.';
      if (up <= 2) return 'In ' + yr + ' the ' + pct + '%-lit Moon is out of the way for most of the night.';
      if (pct < 35) return 'In ' + yr + ' a ' + pct + '%-lit crescent Moon interferes only a little.';
      if (pct < 70) return 'In ' + yr + ' a ' + pct + '%-lit Moon brightens the sky for part of the night.';
      return 'In ' + yr + ' a bright ' + pct + '%-lit Moon is up for much of the night and will hide the fainter meteors.';
    } catch (e) { return ''; }
  }

  /* {T:...Z} -> "10:12 PM MDT" in the saved location's time zone (or the
     device's), plus "on the 28th" when that falls on a different date from
     the event's listed day. */
  function tzName() {
    try { if (window.ZCLTZ && ZCLTZ.zone) return ZCLTZ.zone(); } catch (e) {}
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { return 'UTC'; }
  }
  function ordinal(n) { var s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }
  function localTimes(text, ev) {
    if (!text || text.indexOf('{T:') < 0) return text;
    var tz = tzName();
    return text.replace(/\{T:([^}]+)\}/g, function (_, iso) {
      var t = new Date(iso);
      try {
        var parts = {};
        new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit', day: 'numeric', month: 'numeric', year: 'numeric', timeZoneName: 'short' })
          .formatToParts(t).forEach(function (p) { parts[p.type] = p.value; });
        var hm = parts.hour + (parts.minute === '00' ? '' : ':' + parts.minute) + ' ' + parts.dayPeriod + ' ' + parts.timeZoneName;
        var same = +parts.year === ev.y && +parts.month === ev.m + 1 && +parts.day === ev.d;
        return same ? hm : hm + ' on the ' + ordinal(+parts.day);
      } catch (e) { return t.toUTCString().slice(17, 22) + ' UTC'; }
    });
  }
  events.forEach(function (ev) { ev.note = localTimes(ev.note, ev); ev.short = localTimes(ev.short, ev); });

  window.ZCL_EVENTS = { showers: showers, events: events, moonNote: moonNote };
})();
