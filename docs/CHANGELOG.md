# Changelog

Newest first. Version label / service-worker cache. Older entries (v2.39–v3.52)
are in the claude.ai Project as `claude/CHANGELOG-vNNN.md` (NNN = cache number).

## v3.86 / zion-sky-v354 — 2026-10-15
- Jezero Traverse, the Mars rover game, at rover/: land Perseverance, drive
  it over HiRISE terrain of Jezero Crater, fly Ingenuity, aim Mastcam-Z.
  Launched from a "Drive on Mars" card on the Mars page, with a back link.
  Not precached: the service worker treats it like the 3D models, and
  Settings > Download everything saves it for offline play. Shares the
  app's Ingenuity model; unused textures dropped. Sources page credits
  HiRISE, NASA/JPL-Caltech, Poly Haven and three.js. Why: a hands-on way
  into Mars without adding a byte for visitors who never open it.

## v3.85 / zion-sky-v353 — 2026-10-15
- Satellite loop: a two-line summary above the map, estimated from the
  pictures. Whether there is cloud overhead, how much cloud is within 25
  miles and whether it is rising or falling over two hours, and, when the
  clouds are moving, the nearest cloud's distance and direction, its drift
  speed, and when it could reach you (or that it will miss). The note says
  infrared can miss low fog at night. Why: the loop shows what is coming,
  but reading speed and timing off an animation is hard on a phone.

## v3.84 / zion-sky-v352 — 2026-10-15
- Satellite loop: a 4x zoom step (the button cycles 1x, 2x, 4x), and a
  longer, calmer loop: three hours in 18 frames, 0.65 s each, with a 2.4 s
  hold on the newest. Why: two hours at 0.45 s per frame was too quick to
  read cloud motion.

## v3.83 / zion-sky-v351 — 2026-10-15
- Satellite loop: a 2x zoom button (remembered), which redraws the map
  layer for the closer view so labels keep their size. The nearest one or
  two national park gateway towns in view are labeled first, with the park
  beneath (Springdale / Zion NP, Estes Park / Rocky Mountain NP, Moab /
  Arches & Canyonlands NP). Why: Natural Earth leaves out small towns, and
  the gateways are the places people using this app actually go.

## v3.82 / zion-sky-v350 — 2026-10-15
- Cloud Coverage satellite loop: a map layer for scale and context. State,
  province and country borders, coastlines, big lakes, up to eight of the
  largest towns in view (labels never overlap), and a 100-mile scale bar,
  from Natural Earth (public domain). Sources page credits NASA GIBS and
  Natural Earth. Why: bare cloud imagery gave no sense of where or how far.

## v3.81 / zion-sky-v349 — 2026-10-14
- Cloud Coverage: the satellite loop now actually loads. It asks NASA GIBS
  for one infrared picture per 10-minute slot through its WMS service, skips
  the black placeholder GIBS returns for slots it hasn't drawn yet, and
  starts from 30 minutes back because GIBS runs 40-60 minutes behind.
  Why: v3.80 requested map tiles under paths that don't exist, so every
  frame failed and the card stayed hidden.

## v3.80 / zion-sky-v348 — 2026-10-14
- Cloud Coverage: a live satellite loop. The last two hours of GOES-West or
  GOES-East infrared imagery (NASA GIBS), in 10-minute frames centred on the
  saved location, with play/pause and a time scrubber. Infrared shows cloud
  day and night. Americas only; the card stays hidden offline or if no
  imagery loads, and the tiles are never stored in the offline cache.
  Why: the model forecast says what clouds are expected; the satellite
  shows what is actually overhead and coming in.

## v3.79 / zion-sky-v346 — 2026-10-14
- Star ID: a "Try harder" button on the failure screen re-runs the photo with
  the lens unknown on a full-frame sensor across 12–1000 mm, and four more
  ways of finding stars: the centre of the frame alone, 2x2 binning, a
  darker curve, and the cloud/foreground filter. The accuracy check is
  unchanged. Why: a wrong lens setting limited the search to ±44% of it, and
  wide nightscapes with people or haze ranked the wrong stars first.

## v3.78 / zion-sky-v345 — 2026-10-14
- Star ID: well-known constellation names (Sagittarius, Scorpius, Orion and
  about 30 others) now claim their label space before star and object
  labels, so a busy Milky Way frame still names them. With a location set,
  constellation lines and names below the horizon are no longer drawn: the
  photo's time gives the true horizon, and without a usable time only sky
  that never rises at that latitude is dropped. Why: names were placed last
  and got crowded out, and the overlay drew figures in the ground.

## v3.77 / zion-sky-v344 — 2026-10-13
- Sky Finder: the menu button is now the one control for the bottom box.
  Open shows the time slider, status and buttons; hidden leaves a small
  round button in the corner, and the choice is remembered. The X is gone.
  The live view now fills the screen exactly below the nav, in the browser
  and the home-screen app, and the box clears the home indicator and caps
  its width on tablets. Why: the X turned overlays off and hid the panel
  with no way back, and the view was sized for a 56 px nav that is really
  43 px and ignored the notch inset, leaving a gap on top and pushing the
  bottom off-screen in home-screen mode.

## v3.76 / zion-sky-v343 — 2026-10-13
- Sky Finder: overlay buttons regrouped as two rows of three (Stars,
  Objects, Moon / Milky Way, Boost, Lens). Removed Sun, which has its own
  page, and Grid. "MW" now reads "Milky Way"; Boost uses a lightbulb icon.
  Why: eight cramped buttons with abbreviations were hard to read on a phone.

## v3.75 / zion-sky-v342 — 2026-10-13
- Sky Finder: the camera feed no longer takes taps, so iOS stops drawing its
  play/pause button over it (v3.74 only hid the autoplay variant; a tap
  still brought up the pause control in Chrome and Safari). Negative
  altitudes now show their minus sign ("−48° Below horizon", not "48°").
  Constellation names stay below the direction/altitude boxes and only
  appear when some of the figure's lines are in view.

## v3.74 / zion-sky-v341 — 2026-10-13
- Constellations: Sagittarius's head group now joins the handle (Nunki to
  omicron Sgr) instead of floating; Taurus gains the Pleiades line from
  Secunda Hyadum to Alcyone. Stars hanging off their figures removed
  (Pisces, Canis Major). Kemble's Cascade removed to keep the list to
  classic constellations and asterisms.
- Sky Finder: draws the same 88 figures as the Constellations page and
  Star ID, from a shared generated file, instead of its own copy. Hides
  iOS's native play button over the camera feed and restarts the feed on
  the next touch. Why: iOS overlays a play button when it blocks video
  autoplay (Low Power Mode, or after an app switch), and the Finder kept a
  separate set of figures that could drift from the page.

## v3.73 / zion-sky-v339 — 2026-10-13
- Constellations, Star ID and Sky Finder: every figure now follows the IAU /
  Sky & Telescope charts, taken from Stellarium's modern_iau sky culture.
  34 of the page's 57 constellations changed (Leo, Gemini, Canis Major,
  Sagittarius, Cygnus, Hercules, Perseus, Pisces and more); Star ID's other
  31 and the Sky Finder's H.A. Rey figures switched too. zeta Persei no
  longer carries a second "Atik" label (the IAU name belongs to omicron).
  Why: the earlier audit compared against d3-celestial's line set, which
  is not the IAU set, so figures that "passed" still didn't match the charts.

## v3.72 / zion-sky-v338 — 2026-10-13
- Constellations: Scorpius stinger completed as on the IAU chart: Shaula now
  joins Lesath and Fuyue (G Scorpii). The tail label Girtab moved to kappa
  Scorpii where it belongs; iota-1 is unnamed. Star ID figures regenerated.
  Why: the two stinger stars sat detached from the figure, and the old
  labels put Girtab on the wrong star and used Mula, a non-IAU name.

## v3.71 / zion-sky-v337 — 2026-10-13
- Constellations: removed the Orion and Scorpius illustrations and the
  Illustration toggle. Every figure is now just the IAU / Sky & Telescope
  lines. Why: keep it simple and accurate; the procedural drawings never
  matched the quality of the rest of the page.

## v3.70 / zion-sky-v336 — 2026-10-13
- Constellations: Scorpius now follows the IAU / Sky & Telescope lines
  (the one on the IAU chart), plus the short Fang–rho branch. Fuyue and
  Lesath stay as labeled stars off the figure. The illustration's claw
  arms re-anchored at Dschubba to match. Star ID figures regenerated.
  Why: the old figure was the app's original Stellarium/Rey-style set and
  did not match any published chart.

## v3.69 / zion-sky-v335 — 2026-10-13
- Star ID: a Seestar preset now applies only to 16:9 frames; any other
  photo is solved as a full-frame camera with the lens unknown. A failed
  solve with a smaller sensor width retries once the same way and says
  so. Why: tapping a Seestar chip left 11.1 mm set for every later frame,
  and with that width the lens ladder tops out at a 49-degree field, so
  wide Milky Way shots that used to solve stopped solving.

## v3.68 / zion-sky-v334 — 2026-10-12
- Star ID overlay made cohesive: labels 11.5 px with tighter plates,
  object squares smaller at the rings' 50% opacity and 1.2 px weight,
  label offsets follow the smaller rings.

## v3.67 / zion-sky-v333 — 2026-10-12
- Star ID overlay: star rings at half opacity, thinner and a fifth smaller,
  so they sit with the figure lines instead of competing with the labels.

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
