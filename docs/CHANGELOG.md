# Changelog

Newest first. Version label / service-worker cache. Older entries (v2.39–v3.52)
are in the claude.ai Project as `claude/CHANGELOG-vNNN.md` (NNN = cache number).

## v3.66 / zion-sky-v332 — 2026-10-12
- Hardening pass after a code review of everything since v3.52.
- Remaining page figures on the IAU / S&T lines (Leo, Virgo, Boötes, Aquila,
  Sagittarius, Gemini, Canis Major, Auriga, Perseus, Pegasus, Cepheus,
  Ophiuchus, Cancer, Cetus, Camelopardalis, Corona Borealis, Cassiopeia,
  Orion). Scorpius keeps its claw lines for the illustration; Lyra stays
  simplified. Alterf and Mira stay as labeled stars off the figure.
- Star ID's figures are now generated from the page by
  tools/build-figures.py, so the two can't drift. Why: they disagreed on
  20 constellations while the docs claimed they matched.
- Sky tilt: eases out between 75° and 85° instead of snapping to north-up
  at 80°; redraws when a hidden tab returns; skips redraws when the tilt
  hasn't changed. Location now comes from the shared ZCLTZ.loc().
- Seestar preset sources cited in code. www deploy uses npm ci.

## v3.65 / zion-sky-v331 — 2026-10-12
- Star ID: Seestar S30 Pro and S50 Pro presets. One tap in the lens row sets
  the focal length (160 or 260 mm) and the 11.1 mm sensor; the sensor list
  gains the same entry. Why: Seestar frames needed "Other" plus a typed
  width and focal every time, and a wrong sensor width can't be corrected
  by the solve.

## v3.64 / zion-sky-v330 — 2026-10-12
- Star ID overlay figures regenerated for all 88 constellations from the
  IAU / Sky & Telescope line set, matching the Constellations page. The
  solver itself is untouched (figures are overlay-only); e2e passes.
- Andromeda on the IAU figure. Why: the old one had a detour through
  Titawin and a pi-to-Mirach link that read as stray stars.

## v3.63 / zion-sky-v329 — 2026-10-12
- Delphinus, Aries, Serpens, Aquarius, Corvus, Cygnus, Hercules and
  Capricornus switched to the IAU / Sky & Telescope figures, with their
  star names kept. Skat, Maasym and Algedi stay as labeled stars off the
  figure, since the standard lines skip them.

## v3.62 / zion-sky-v328 — 2026-10-12
- Taurus on the IAU / Sky & Telescope figure. Why: both horns came off
  tau Tau, with a stray line from there to Tianguan; the standard figure
  runs Ain to Elnath and Aldebaran to Tianguan from the Hyades. The
  Pleiades stay as a labeled star off the figure.

## v3.61 / zion-sky-v327 — 2026-10-12
- Zodiac intro: dropped the line about planets being the bright points not on the chart.

## v3.60 / zion-sky-v326 — 2026-10-12
- 20 new constellations: Libra, Pisces, Hydra, Lepus, Canes Venatici, Coma
  Berenices, Lacerta, Lynx, Monoceros, Eridanus, Piscis Austrinus, Sagitta,
  Vulpecula, Equuleus, Crater, Sextans, Corona Australis, Lupus, Puppis,
  Columba. Figures from the IAU / Sky & Telescope lines; only IAU-approved
  star names labeled.
- Zodiac chip: the twelve in the order the Sun passes through them, with
  an intro on Ophiuchus and precession.
- Default line strength no longer drops when star names are hidden. Why:
  the old eye button dimmed lines along with the labels, and that carried
  over to the Star names checkbox.

## v3.59 / zion-sky-v325 — 2026-10-12
- Constellation charts now tilt the way the figure sits in the sky right
  now for the saved location: a point just above the figure's center
  (toward the zenith) is projected and the chart turns until it's straight
  up. Caption under the map: direction and altitude. Near the zenith
  (>80°) and below the horizon it stays north-up and says so. Refreshes
  once a minute.
- Ursa Major illustration removed for now; Orion and Scorpius stay.

## v3.58 / zion-sky-v324 — 2026-10-12
- Ursa Major: the head is its own drawn shape, snout on Muscida and skull
  at h: heavy brow, small angled eye, snarling muzzle, open jaw with
  canines, rounded ear, thick neck. Why: the old head was just the body
  shell tapering to a point, and its mouth line curved up into a smile.
  The body now starts along the neck line so its shell can't fold back
  on itself at the cheek.

## v3.57 / zion-sky-v323 — 2026-10-12
- Ursa Major: bear-like profile (shoulder hump, rounded rump, thicker
  haunches), ear raised clear of the head outline, far legs and leg
  centerlines removed. Why: the dimmed far legs and centerlines doubled
  the outlines on the Tania leg.
- Orion: helmeted head with brim, cheek and nose guards, crest, eyes,
  beard and mustache.

## v3.56 / zion-sky-v322 — 2026-10-12
- Illustrations for Orion (hunter with club, lion pelt and sword) and Ursa
  Major (bear with the long Dipper tail), drawn through the map projection
  like Scorpius. The drawing helpers are now shared by all three figures.

## v3.55 / zion-sky-v321 — 2026-10-12
- Illustration toggle no longer moves the stars. Why: it changed the map
  margin, which re-fit the whole projection. Figures with artwork now
  always use the larger margin.
- "Star names" is a labeled checkbox in the options row; the eye button is gone.

## v3.54 / zion-sky-v320 — 2026-10-12
- Constellation map capped by viewport height so it fits a laptop screen.
  Why: the `#zcl-con-wrap *` rule forces `max-width:100%` on everything, so
  the card filled the column (~1100 px wide, taller than the screen).
- Star-name eye button moved out of the map corner into the options row.
- Natural sky stronger: lines fainter, faint stars smaller and dimmer.
- Illustrated figures get more margin inside the map.

## v3.53 / zion-sky-v319 — 2026-10-12
- Constellations: Ursa Major now uses the IAU / Sky & Telescope figure (bowl,
  handle, head at Muscida, legs hanging below). Why: the Rey bear crouched
  sideways and didn't match any standard chart. Also removed a stray mag-7
  point near Mizar.
- Orion: raised arm now ends on ν Ori. Why: it ended on a phantom mag-7.4
  point 0.6° from any real star.
- New "Natural sky" option: figure lines fade to a trace and stars size on
  one continuous magnitude scale. Why: the default scale floors everything
  fainter than ~4.3 to one size.
- New "Illustration" option (Scorpius first): a drawn scorpion registered to
  the stars through the map's own projection. Head and eyes on Alniyat,
  Antares at the heart, sting at Shaula/Lesath.
- Star-label toggle now survives switching constellations.

## v3.52 / zion-sky-v318 — 2026-10-11
- Star ID: fixed "Maximum call stack size exceeded" on wide-field frames.
  Why: `cand.push(...sorted)` spread ~240k candidates as call arguments,
  past the JS engine's limit. Now a plain loop. Dense frame added to the
  regression set.

## v3.51 / zion-sky-v317 — 2026-10-10
- Star ID solves stretched/edited images (Heart & Soul, stretched Orion,
  rotated crops, recompressed JPEGs). Why they failed: peak-pixel ranking,
  saturation tied to the frame maximum, star size measured on bloated stars.
- Portrait frames: sensor width now spans the long edge (focal was ~1.4x long).
- Lens unknown ladder to ~1000 mm. IAU-boundary constellation in the headline.
  Common names for 14 bare NGC/IC objects.

## v3.50 / zion-sky-v316 — 2026-10-10
- Star ID: Plate Solver Values card + Copy (Siril/ASTAP). General sensor list.
