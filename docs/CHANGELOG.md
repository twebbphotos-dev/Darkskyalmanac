# Changelog

Newest first. Version label / service-worker cache. Older entries (v2.39–v3.52)
are in the claude.ai Project as `claude/CHANGELOG-vNNN.md` (NNN = cache number).

## v4.78 (zion-sky-v447)
Lunar Rover: wheel tracks you can see. The rover has laid tracks since the first version, but none ever showed, for two reasons. Each tread ribbon was wound so its triangles faced the ground, and the material draws front faces only, so all of it was culled; and it was laid 1.2 cm above the smooth terrain formula, while the ground drawn near the rover is flat 0.4 m triangles over craterlets a few centimeters deep, which covered it almost everywhere. The ribbon now faces up, is lit by its own facets (it carries no normals), and follows the drawn ground's triangles 2 cm up. The tread is the wire-mesh tire's chevron print, a shade darker than the dust as in the Apollo photographs, and like the real ones the tracks stay.

 (zion-sky-v446)
US units for the rover games. A new switch in Settings → Display ("US Units in the Rover Games", stored as dsa-game-units) makes the Mars and Lunar rover games show miles per hour, feet and miles, pounds and °F; off, they stay metric. Both games read it through one shared helper (src/rover-game/src/units.js), and only what is shown is converted: the physics, records and saved bests stay metric, so switching never changes a record. Lunar Rover: speedometer, best speed, jump toasts and records, distances to the ring and stops, lap toast, the start card (speed buttons, top speed, rover size) and the time trial briefing (11 mph (18 km/h); 7.5 mi (12.1 km); about 1.5 mi here). Mars: the landing readouts (altitude, speed, heat shield temperature, fuel, miss distance, distance to Jezero) and the distances to targets and Ingenuity. The narration and info cards keep their metric figures.

## v4.76 (zion-sky-v445)
Lunar Rover: the route stays hidden through the unloading, and the time trial opens with a briefing. The route line faded in on the start card, before the drive began, and the unloading scene never touched it, so it showed through the whole animation; it and the ring now appear when the drive is handed over. Driving into the ring now pauses the drive (paused, not braked: on the Moon's weak grip a fast rover needs tens of meters to stop) for a short briefing in the letterbox: the real third drive (12.1 km, per the Apollo 17 traverse record; about 2.5 km here at quarter scale), the lunar speed record (about 18 km/h, Gene Cernan downhill on the way back from that drive, per Guinness World Records), and your best loop at that speed, then "Timer started · Go!" and the clock runs. Skip jumps to Go.

## v4.75 (zion-sky-v444)
Lunar Rover: Triple speed for everyone, and the mountains beyond the drivable square drawn cleanly. The terrain model beyond the square is drawn as two rings, an inner one at 20 m and an outer one at 50 m, each cut away where the next one in takes over. three.js reuses a compiled shader whenever the code that builds it is the same text, and both rings were built by the same function, so the outer ring silently took the inner ring's cutout (470 m instead of 2.5 km) and drew over it: its coarser triangles fought the finer ones in patches up the North Massif, including the dark wedge with a hard edge near stop 6. Each ring now has its own shader. Also at the square's north edge: the inner ring's flat 20 m triangles sag below the curved slope, so the square ended up to 0.57 m above it and the low sun drew the ledge as a long line; the square's last 40 m now ease onto the ring's own surface and lighting. The crater texture's relief had never reached the square (another shader step had already replaced the line it attaches to), which left a change of texture at the edge; it now fades in over the square's last 80 m. The Triple speed setting is on the start card from the first drive.

## v4.74 (zion-sky-v443)
Lunar Rover: a calmer, physical crash. The wreck used to burst outward, every piece flung from the middle with a random kick, and each piece was a ball that hovered, spun on the spot and skidded to a stop whatever its shape. Now the chassis stays one body, bent at its hinges by the blow, with wheels and pieces of the kit torn loose only by a harder hit (the rest left on, knocked askew); one end tears away only in the hardest crashes. Everything keeps the rover's own motion and spin, so it slides and tumbles on instead of exploding. Each piece is a rigid body falling at 1.62 m/s², meeting the ground at points on its outline with a stiff spring and regolith friction, so it lands, tips over, rolls (loose wheels roll on their tread) and comes to rest lying on the surface. The kit stands above the part of the hull that registers a crash, so it starts slightly in the ground; pieces are lifted clear first, which kept them from being fired out.

## v4.73 (zion-sky-v442)
Lunar Rover: lined up for the time trial, held by its brakes, and clean wheels. After unloading, the rover now reverses away from the lander in a smooth arc, front and rear wheels steering opposite ways, and stops square on to the time trial's ring (a straight run at full throttle passes within a meter of its center). It used to start facing the lander, and on sloping ground it rolled off on its own because nothing held it: with no throttle the tires only damped motion, so it crept downhill. It is now held as if braked, by static friction at each tire, until the driver first touches the controls. Small scraps of fender inside each wheel's cut-out cylinder turned with the tire, out of step with the fender; triangles painted fender orange in the scan now stay with the body.

## v4.72 (zion-sky-v441)
Lunar Rover: no line on the mountains at the edge of the drivable area. The crater texture faded in over the square's last 60 m, which from afar still read as a line, and it darkened the ground slightly on average, so the two sides differed in tone. It now fades in by distance from the eye, the same on both sides of the edge, and its shading is centered so it no longer shifts the ground's brightness.

## v4.71 (zion-sky-v440)
Lunar Rover: a truer fold and unloading, craters out to the mountains, crashes on landing only, and Triple speed. The rover was cut into equal thirds, so its two ends could only fold through each other; it is now split as the real chassis was (a 1.5 m center, 0.7 and 0.8 m ends), and stowed as the Apollo 15 records describe: both ends folded back over the center, each pair of wheels swung in flat on its own section, the bottom of the chassis facing out, standing just off the stage wall. Unloading follows the same records: the aft chassis and rear wheels spring open partway over, the rear wheels touch down, and the forward chassis unfolds as the rover moves out while the front is let down; nothing dips into the ground any more (it did when the hinge end came down onto sloping ground). Beyond the drivable square the valley had only the terrain model's smooth shape, so the square's edge showed as a line up the North Massif; a tiling crater texture now covers it, fainter on the steep massif slopes, which the Apollo photographs show worn smooth. A rover rolling in the air no longer breaks apart until it hits the ground, and the chassis now breaks only at its hinges (in one piece for a gentle roll). Finishing the time trial once unlocks a Triple speed setting.

## v4.70 (zion-sky-v439)
Perseverance Simulator: more of the view, less dashboard. The roll and pitch gauge moves to the top center and the map into the top-right corner; the objectives and flights counters are gone (the objectives list already says what is left), and the camera button is gone from the screen: Chase, Wide and Rover are chosen in Settings.

## v4.69 (zion-sky-v438)
Lunar Rover: steadier steering, a faint route, gentler rollovers, a truer unloading. Steering lost its grip because its limit fell with forward speed, which itself shrinks in a slide, so the wheels stayed at full lock and fed the slide into a spin (46 to 55° of sideslip in tests); the limit now tracks what the tires can hold in lunar gravity (about 1 m/s² sideways), and the wheels turn a little faster. Slip is down to 8 to 23° and turns hold their speed. The third drive's route now shows faintly while you roam. A slow rollover crumples where it lies instead of exploding; the throw scales with how hard it hit. The unloading follows the real sequence more closely: stepwise pulls on the tapes, each chassis section and wheel snapping into its lock, the rear wheels touching down first while the front is still on its hinge, the front let down, and the rover pulled clear of the lander. Checked: a 5 m drop takes 2.45 s, against 2.48 s for lunar gravity (1.01 s on Earth).

## v4.68 (zion-sky-v437)
Lunar Rover: site cards, Van Serg crater, a more realistic Tracy's Rock, and a ramp. Tappable markers at the lander, Tracy's Rock and Van Serg open short cards on what happened there (the mission's records, the fender repair, troctolite 76535 and the evidence it gave for an early lunar magnetic field, Van Serg's ejecta and regolith breccia), every figure from NASA, LROC or the published papers. Van Serg is now a real crater about 100 m across at stop 9, its rim strewn with angular blocks sized as reported (mostly under 30 cm, a few up to about 2 m). Tracy's Rock was flat-shaded and looked low-poly: it now has a finer, smooth-shaded surface with a pitted rock texture and dusted color. One of its five pieces now lies tilted as a ramp below the boulder, driven as ground: run down the slope onto it and off its lip.

## v4.67 (zion-sky-v436)
Lunar Rover unloading: the seats, console, antennas and camera now pop out one piece at a time, from the deck up, over about 2.6 s, each with a small overshoot, instead of appearing in two blocks at once.

## v4.66 (zion-sky-v435)
Lunar Rover: Tracy's Rock stands at stop 6. The split boulder Gene Cernan named for his daughter is drawn at true size, about 18 × 10 × 6 m in five pieces with dark cracks between them (LROC), resting on the North Massif's slope beside where the rover parked, and solid. Also fixed: placing or respawning the rover on a steep slope set it down level, burying its uphill wheels so the suspension threw it into the air; it is now set down along the slope.

## v4.65 (zion-sky-v434)
Lunar Rover unloading: no more clipping through the lander. The folded rover still carried its seats, console, antennas and TV camera, sticking up from the deck and into the descent stage, and the package sat 0.4 m inside the stage wall. As on the real missions, the seats and console now ride folded away and the antennas, TV camera and radio relay unit are fitted only after the rover is on the ground (with a caption); the chassis ends fold under, away from the wall; and the package sits against the wall instead of inside it.

## v4.64 (zion-sky-v433)
Mars landing: a narrated, hands-off way to watch it. "Watch it, narrated" on the landing briefing flies the whole entry, descent and landing on autopilot, a little faster than the game, while captions explain what the flight software did: bank-angle guidance inherited from Apollo, bank reversals, the backshell thrusters, the Range Trigger for the parachute, Terrain-Relative Navigation and its divert, the sky crane. Lunar Rover: the drive now opens with the rover being unloaded from the lunar module as on Apollo 17, folded in its bay, tilting out, the aft and then the forward chassis and wheels unfolding, set down on the surface (skippable).

## v4.63 (zion-sky-v432)
Lunar Rover: a crash breaks the real rover apart, and the lunar module is solid. The wreck used to be generic boxes and cylinders; it is now cut from the rover's own model (each wheel whole, the rest in chunks where they sat), and it fades away after 10 s. The lunar module had no collision at all, so the rover drove straight through it; its descent stage, footpads and legs now stop the rover.

## v4.62 (zion-sky-v431)
Lunar Rover: each tire throws a ring of soil when it lands from a jump, bigger the harder it comes down. Landings used to raise only the fine driving dust, the same grey as the ground and too small to see. The blast uses coarser, lighter grains that fly in airless arcs and fall straight back.

## v4.61 (zion-sky-v430)
Lunar Rover: the plain keeps its small craters at every distance. Most craters are 1 to 3 m across, too small for the 1.6 m terrain grid that both the mid-range ground and the fine patch round the rover took their craters from, so the plain went smooth from a few tens of meters out until the big craters showed again far off. The fine patch now draws every crater at full shape (and the wheels feel them), and the ground beyond it is lit by a half-meter relief map of all the craters, whose mipmaps fade them smoothly with distance.

## v4.60 (zion-sky-v429)
Lunar Rover: the hubs spin with the tires, and the wheels steer at a steady rate. The hub's disc stands 1–3 cm proud of the tread on the outboard side, just past v4.59's tight cut, so it stayed with the body; the cut now reaches 4 cm further outboard only (the fender's skirt is inboard). Steering used to snap toward the stick almost at once; the wheels now turn at about 17°/s (an estimate), on the ground or in the air.

## v4.59 (zion-sky-v428)
Lunar Rover: fenders no longer spin with the tires. The v4.58 wheel rig guessed each hub 5 cm too high, so its cut cylinder had to be oversized and swallowed the fenders that hug the tire tops. Each wheel is now a circle fitted to the lower half of its tread, with the cylinder trimmed to the tread's width, so only the tire turns.

## v4.58 / zion-sky-v427 — 2026-10-18
- Lunar Rover sim: the wheels turn as you drive and steer, all four. The
  model is a scan with the wheels fused in, so they are found and cut out
  of it when it loads.

## v4.57 / zion-sky-v426 — 2026-10-18
- Lunar Rover time trial: stray too far from the route (a warning at 20 m,
  over at 35 m) and the clock disappears and the line fades away. The
  route line is much fainter.

## v4.56 / zion-sky-v425 — 2026-10-18
- Lunar Rover sim: the speed record attempt is a time trial round the whole
  third drive. A faint ring just north of the lander starts a clock; pass
  stops 6, 8 and 9 in order (the next one is marked small on screen) and
  come back through the ring. Best loop and top speed are kept.

## v4.55 / zion-sky-v424 — 2026-10-18
- Lunar Rover sim:
  - Free roam from the start. A ring at stop 8, with its distance on
    screen, starts a speed record attempt down the third drive's real run
    home past Van Serg crater; only then does the dotted course appear.
  - The valley is now at a quarter scale, so drives are four times shorter
    than the real ones, and the briefing says so.
  - Hard rollovers break the rover apart: pieces fly and bounce, and a new
    rover appears a few seconds later where it last drove safely.

## v4.54 / zion-sky-v423 — 2026-10-18
- Mars rover sim, 2022: the blue sunset panorama is a surprise. Its ring,
  list entry and count stay hidden, and the briefing does not mention it,
  until the first objective is done; then it appears with a "New objective"
  note.

## v4.53 / zion-sky-v422 — 2026-10-18
- Mars rover sim: the blue sunset moved from 2024, where it clashed with the
  Lookout Hill panorama, to the end of 2022 as its own climax: "Take a
  panorama of the blue sunset", on the flat at the foot of the delta looking
  over its hills, the view of Perseverance's first sunset photograph. It
  starts once the other objectives are done and now takes about two
  minutes instead of as little as six seconds.
- Tire tracks are a subtle soft red-brown instead of near-black.

## v4.52 / zion-sky-v421 — 2026-10-18
- Lunar Rover sim: the whole third drive. The drivable ground grew from 840 m
  to 1.8 km, at half scale, and now follows the real valley from NASA's
  terrain model (the climb to the North Massif and the run home past Van
  Serg), with generated craters and rocks on it. Only Drive 3 is drawn, as
  a blue dotted line that stays visible into the distance, and the speed
  record counts on it only. Finer terrain rings round the square, in the
  same soil, so its edge no longer shows.

## v4.51 / zion-sky-v420 — 2026-10-18
- Lunar Rover sim:
  - The real Apollo 17 drives near the lander as dotted lines (stops surveyed
    from orbit, Haase et al. 2019; the line between them follows the general
    route).
  - Top-speed record, kept separately for Real and Double speed, shown under
    the speedometer; beating Cernan's 18 km/h at Real speed is called out.
  - Dust grains are small soft dots instead of big hard squares.

## v4.50 / zion-sky-v419 — 2026-10-18
- Cloud charts: bigger hour numbers and AM / PM labels; they were too small
  to read on a phone.

## v4.49 / zion-sky-v418 — 2026-10-18
- Cloud charts: every hour shows its AM / PM, and a faint vertical line marks
  midnight.

## v4.48 / zion-sky-v417 — 2026-10-18
- Detailed Cloud Cover: "Blended Forecast" renamed "Multi-source Forecast".

## v4.47 / zion-sky-v416 — 2026-10-18
- Detailed Cloud Cover: the "Best window" line moved from above the blended
  chart to below its notes, so the chart leads and the summary follows.

## v4.46 / zion-sky-v415 — 2026-10-18
- Cloud charts (Detailed Cloud Cover and the Forecast's Cloud Cover): every
  hour is now numbered under its bar, with a small PM / AM marker only where
  the night starts and at midnight. Labels every third hour left the hours in
  between hard to read.

## v4.45 / zion-sky-v414 — 2026-10-18
- Lunar Rover sim: a Speed choice on the briefing card, Real (18 km/h) or
  Double (36 km/h), remembered on the device. Double also gets stronger
  motors and grippier tires, since at one-sixth gravity grip, not power,
  limits how fast the rover can speed up.

## v4.44 / zion-sky-v413 — 2026-10-18
- Lunar Rover sim:
  - No more flat grey sheets clipping through the ground. The distant
    mountains' mesh lay only 1.2 m under the drivable square, so it showed
    in every crater and dip, and round the rover, which made it look sunk.
    It is no longer drawn there.
  - Brighter, more natural ground. The soil texture averaged mid-grey, about
    0.22 once linear, which made the near ground four times darker than the
    mountains. The close grain no longer tiles out to the horizon, and the
    craterlets are fewer and shallower.
  - Faster: top speed 18 km/h, the record Gene Cernan set on Apollo 17
    (the rover was built for about 13 km/h on the level), with stronger
    motors and less rolling drag.

## v4.43 / zion-sky-v412 — 2026-10-18
- Lunar Rover sim is now easy to find: a "Drive on the Moon" card on Objects,
  next to the Mars sim, and a Play card on the Moon page. Before, the only way
  in was the Apollo 17 entry on the Moon map, shown only with the Apollo sites
  layer on, which is off by default.

## v4.42 / zion-sky-v411 — 2026-10-18
- Mars rover sim: cleaner, sharper dunes.
  - Crests: wind ripples have sharp crests and broad troughs, but the relief
    came out as smooth waves. `relief.py` now reshapes each ripple that way
    and smooths less.
  - Clean sand: it also maps the ripple fields (strong relief running one
    way, unlike rocky ground) into `rover/img/NAME_dunes.jpg`. On them the
    game drops the grit texture and pebble bumps, deepens the relief, and
    scatters no rocks.
  - Distant ripples: relief fades where a metre of ground is smaller than a
    pixel, so far crests no longer break into jagged lines.
- Ingenuity at "Valinor Hills" photo cropped to drop the black margins.

## v4.41 / zion-sky-v410 — 2026-10-18
- Mars rover sim: dunes and sand ripples now have real 3D shape, and the
  ground pictures no longer show their pixels up close.
  - Relief: the elevation models are too coarse for ripples, but the HiRISE
    pictures show them, since each slope is brighter the more it faces the
    Sun. `src/jezero-crater/relief.py` turns that brightness into height
    (photoclinometry), saved as `rover/img/NAME_relief.jpg`; the terrain
    lights it as fine relief.
  - Smoothness: the pictures are sampled bicubic instead of bilinear.
  - Sun: moved from the southeast (140°) to the west-southwest (255°), where
    it stood for the pictures' afternoon, so their shading and the game's
    3D lighting agree instead of fighting. The sunset level now sets in the
    west, as it should.

## v4.40 / zion-sky-v409 — 2026-10-18
- Mars rover sim: Reset progress in Settings. Two taps (the first asks "Tap
  again to erase"), so a stray one cannot wipe it. Forgets completed levels and
  objectives; difficulty, detail and camera are kept.

## v4.39 / zion-sky-v408 — 2026-10-18
- Mars rover sim: the HiRISE ground pictures are back at full detail, with
  their relief and radiating texture. v4.38 blurred them to remove small dark
  chevrons, but the chevrons repeated, so they came from the 7 m painted ground
  tile, which v4.37 already fades with distance; the blur only cost detail and
  left soft blocks. Same rendering as v4.37.

## v4.38 / zion-sky-v407 — 2026-10-18
- Mars rover sim: no more small dark crescents scattered over the dunes. They
  were the HiRISE picture's small ripples, each a few metres across, magnified
  and given extra contrast. The picture now adds only light and dark broader
  than about 16 m (dunes, sand patches, the big real shadows), blurred to that
  scale however close the camera is, with its contrast lifted a little to
  keep the big shadows strong.

## v4.37 / zion-sky-v406 — 2026-10-18
- Mars rover sim: the small repeating "Tetris" pattern on the ground is gone.
  It was the game's painted ground tile (mottling plus stamped polygon pebbles),
  which repeats every 7 m, and was also sampled at larger scales for broad
  light and dark. It now fades to its average colour beyond a few metres, and
  the broad variation comes from non-repeating noise. The v4.35 de-shading was
  the wrong layer: the HiRISE pictures and their real shadows are restored.
- Rover sims on tablets: the thumbstick was hidden on any screen wider than
  720 px, which assumed wide meant a computer. Touch is now detected directly
  (iPad Safari included, which can report itself as a Mac), so tablets get the
  stick, touch prompts and Medium detail on Auto.

## v4.36 / zion-sky-v405 — 2026-10-18
- Forecast: the cloud section is one plain row again, "Cloud Cover", like Sun &
  Moon and the rest. The hourly chart and its best-window line sit inside, with
  a "Detailed Cloud Cover" link to the multi-model and satellite page (renamed
  from "Cloud Coverage" to match). The long summary in the heading wrapped to
  two lines and the link card sat loose between sections, which read as chaotic.

## v4.35 / zion-sky-v404 — 2026-10-18
- Mars rover sim: no more dark smears on the dunes. The HiRISE pictures carry
  the light of the afternoon they were taken (lit from the west); the game
  lights the ground with its own Sun, so the photo's shadows sat where the
  game's light did not put them. `src/jezero-crater/deshade.py` fits that
  shading from the elevation and divides it out of the 2022 and 2023 pictures
  (the later levels' CTX heights are too coarse to fit, and were left as
  they are). Ripples too small for the elevation now become surface relief
  lit by the game's Sun instead of painted-on light and dark.
- Haze brightens toward the Sun, as forward-scattering dust makes it, using
  the sky dome's own glow so the two match.
- Dust devils wander the plain (Medium 1, High 2, Ultra 3 at a time; none on
  Low) and die down at dusk.

## v4.34 / zion-sky-v403 — 2026-10-18
- Mars and Moon rover sims: new Settings sheet (gear by the Back button) for
  difficulty, level of detail (Auto, Low, Medium, High, Ultra) and camera.
  Auto picks Medium on phones and Ultra on desktop. The tiers set pixel ratio,
  antialiasing, shadow resolution, terrain mesh spacing, rock counts and draw
  distance; Ultra adds denser rocks, sharper shadows and longer reach.
- Why phones struggled: every rock tile was drawn wherever it was on the map,
  about 4,500 draw calls and 12 M triangles a frame on level 3. Rock tiles are
  now hidden beyond their tier's reach, pebbles are tiled too, and mid-size
  rocks use light procedural shapes below High. Medium is now about 1,000 calls
  and 2.5 M triangles.

## v4.33 / zion-sky-v402 — 2026-10-18
- Forecast: the Hourly Cloud Cover heading now says the night at a glance
  before it is opened ("Clear 9 PM–1 AM", "Best 10 PM–1 AM · 25% cloud" or
  "Cloudy · least 60% at 2 AM"), like the Planets heading does.

## v4.32 / zion-sky-v401 — 2026-10-18
- Lunar Rover: finer ground round the rover (0.4 m, with craterlets and grain
  the wheels feel), a fine soil texture, bright rims on fresh craters, blocks
  thrown out round them, chevron wheel tracks that stay, Earth in the sky at
  its true place over Taurus–Littrow (lit by the same Sun, so its phase is
  right), a driver's-seat camera (Chase / Wide / Seat), saved records for air
  time, distance and height, and half or full rolls called out on landing.

## v4.31 / zion-sky-v400 — 2026-10-18
- New: Lunar Rover · Apollo 17 (lrv/), a first version, linked from the
  Apollo 17 entry on the Moon page. Drive the LRV in Taurus–Littrow under
  1.62 m/s²: four sprung wheels whose grip scales with their load, a body
  that pitches, rolls and spins freely in the air, rollovers, and dust in
  clean ballistic arcs. Drive off a fresh crater rim and it flies (about
  1.8 s and 5 m off the first one at top speed); landings report air time,
  distance and height. Real valley mountains from NASA's terrain model;
  generated craters and rocks near the lander. Saved by Download everything.

## v4.30 / zion-sky-v399 — 2026-10-18
- Mars page: the Blue Sunsets card now plays Curiosity's sunset over Gale
  Crater (PIA19401, sol 956, 15 April 2015) as a smooth 6-second loop
  (490 KB video). NASA's animation is four frames over 6 min 51 s; the frames
  between them were made by crossfading the sky and sliding the Sun's disk
  between its measured positions, clipped by the real hill line as it sets.
  The caption says the motion is smoothed. The horizon viewer, made for the
  wide Perseverance photo, is gone; that photo stays on the simulator card.
- Offline video: Safari asks for video in byte ranges and won't play a
  whole-file reply, so the service worker now slices saved files to the
  range asked for.

## v4.29 / zion-sky-v398 — 2026-10-18
- Fix: Mastcam-Z aiming was flipped and cramped. Why: dragging moved the
  view "grab the scene" style (drag right, look left), the opposite of the
  joystick and keys, and the mast head could turn only 51° each way, so a
  target to the side was out of reach. Now drag right looks right, drag up
  looks up, and the head turns up to 160° each way.

## v4.28 / zion-sky-v397 — 2026-10-18
- Copyright: a LICENSE file (all rights reserved, with third-party
  carve-outs), a copyright notice on the Sources page, a copyright banner at
  the top of each 3D/simulator bundle, and robots.txt asking AI-training
  crawlers to stay out.
- Sources: the constellation-figure credit still named H.A. Rey's figures
  (modern_rey). It now names the IAU / Sky & Telescope figures from
  Stellarium's modern_iau, which the app has used since the figure audit.

## v4.27 / zion-sky-v396 — 2026-10-18
- Fix: on the Clouds page, stepping to a later day still showed the satellite
  loop as if it belonged to that day. Why: the loop is always the last three
  hours of real pictures, and the card ignored the day picker. It now shows
  with today only; other days say why it is missing.
- Forecast: the way to the Clouds page is a full-width "Clouds in depth" card,
  always visible, instead of a small link inside the collapsed Hourly Cloud
  Cover box.

## v4.26 / zion-sky-v395 — 2026-10-18
- Simulator, flight 72: Ingenuity lines up 14 m off and comes in fast, still
  moving sideways, digs into a sand ripple, pitches and rolls, and a blade
  piece flies off under Mars gravity before it settles upright. Captions tell
  NASA's account of the cause.
- The wreck keeps its pin: on screen with its distance, on the minimap and on
  the map, before and after it is photographed.
- Back from a drive opens the year menu (with Resume driving); Back from the
  menu goes to Objects. Fix: the menu sheet covered the Back button.
- Progress is remembered on this device: the menu shows each year as
  "Complete ✓" or "1 of 3 objectives", the landing as "Landed ✓", and a
  year's briefing notes what was done before.

## v4.25 / zion-sky-v394 — 2026-10-18
- Fix: in the 2024–2026 levels Mastcam-Z had no way back to driving. Why:
  "Back to driving" is the Fly Ingenuity button relabeled, and that button
  is hidden once Ingenuity is grounded. It now shows whenever Mastcam-Z is open.
- Fix: parked right beside a target, it couldn't be framed. Why: the camera
  tilted down only 16°, and the pre-aim pushed past a rock closer than 4 m.
  Now it tilts to 40°, the pre-aim stops at the rock, and a near rock counts
  as framed anywhere it fills the view.

## v4.24 / zion-sky-v393 — 2026-10-18
- Download everything: the 3D models and the rover game now behave like the
  rest of the app. Online, the newest copy if it arrives within a few seconds,
  otherwise the saved one; offline, the saved one at once. A page's code
  always matches the page (both fresh or both saved), files missing from the
  download are saved as they load, and changed files update on each release.
- Fix: on a phone, "Download everything" could stop before the star catalog
  and 3D models. Why: the button gave the page-saving step 8 s, which a phone
  easily exceeds, and then reset without downloading the rest. It now waits.
- Fix: the Lunar Module and Lunar Rover 3D views threw an error every frame.
  Why: the Moon's Apollo traverse has no year-dot layer, and the shared fade
  code assumed the Mars route's. The error also skipped the rest of each
  frame's updates (the star backdrop following the camera).
- Sizes corrected: 3D models and the rover game are about 80 MB together
  (the rover alone about 41 MB), not 40 MB and 19 MB.
- Checked: after the download, every 3D view, Voyager and the rover levels
  load with the network off, without errors.

## v4.23 / zion-sky-v392 — 2026-10-17
- The blue-sunset photo is now the full 4884 × 958 px original. Why the last
  one was smaller: chat attachments are resized on the way in; this copy came
  straight from Google Drive. The full-screen pan shows it a little larger.

## v4.22 / zion-sky-v391 — 2026-10-17
- The blue-sunset photo (Mars page and the 2024 simulator card) is now the
  2576 × 505 px version, twice the old one, so the full-screen pan is sharp.

## v4.21 / zion-sky-v390 — 2026-10-17
- Mars page: removed the "Panorama" tag on the sunset photo (too big). The
  photo itself still opens the viewer.

## v4.20 / zion-sky-v389 — 2026-10-17
- Mars page: tap the blue-sunset photo to open it full screen as a horizon
  you drag along, opening on the glow. A pan rather than a 3D sphere: the
  picture is 1280 × 251 px, sharp enough at about 2× but not for a
  full-surround view.

## v4.19 / zion-sky-v388 — 2026-10-17
- Mars page: a "Blue Sunsets" card with Perseverance's first sunset photo
  (9 November 2021) and why Martian sunsets are blue: fine dust scatters
  blue light forward, near the Sun. The photo is now precached with the
  pages so the card works offline.

## v4.18 / zion-sky-v387 — 2026-10-17
- Simulator: the blue sunset is now a one-time event at the end of the 2024
  level only. Over the last minute (from about 300 m out) the sun sinks,
  the light dims, shadows stretch and the sky turns gray with a blue glow
  round the sun, so the Lookout Hill panorama is taken at dusk. That
  level's debriefing card alone carries the sunset photo. Other levels end
  in daylight, with no sunset sequence and no photo.

## v4.17 / zion-sky-v386 — 2026-10-17
- Simulator: the drive-complete card shows Perseverance's first sunset
  photograph (Mastcam-Z, 9 November 2021, sol 257), and the in-game sunset
  now matches it: a flat gray sky, a tight blue-white glow over the Sun and
  ground fading to silhouette, instead of the deep navy sky before.

## v4.16 / zion-sky-v385 — 2026-10-17
- Simulator: the real route no longer looks like a graded road. Why: the
  grading replaced the ground along it with one smooth profile and kept a
  clean, straight-edged lane of rock-free ground. Now only the large-scale
  correction is applied (the ground's own bumps up to 40 cm come back),
  the shoulders fade out over 2.5–10 m, the rock-free edge is ragged, the
  boulder fields thin gradually toward the route, and 9,000 extra pebbles
  and small cobbles lie along it. Every route still peaks under 26°.
- Messages ("Slipping · drift sand on a slope") are short lines in the
  top-left panel, above the objectives; vehicle warnings get an orange edge.

## v4.15 / zion-sky-v384 — 2026-10-17
- Fix: after a release, the phone could still run the previous version of
  the rover game (seen as v4.13's Ingenuity panel on the 2023 end card after
  v4.14 removed it). Why: with "Download everything" on, the worker gave
  the network 4 s and then served the saved copy; the 1 MB game bundle
  takes longer than that on a weak signal. Code files (the rover page and
  every .bundle.js) now wait for the network and fall back to the saved
  copy only when it fails. Textures and terrain keep the 4 s rule.

## v4.14 / zion-sky-v383 — 2026-10-17
- Simulator: the 2024 level now plays out Ingenuity's 72nd and last flight.
  Its first flight of the year (or one it makes by itself after 45 s) goes
  to "Valinor Hills", lands hard and breaks the rotor blades. A surprise
  objective follows: photograph the wreck with Mastcam-Z, then NASA's real
  mosaic. The 2023 end card no longer tells this story.
- Valinor Hills placed from evidence: Mastcam-Z's azimuth to the helicopter
  (320.6°, from the gridded mosaic) at about 450 m and 415 m from the
  rover's sol-1049 and sol-1068 positions (NASA traverse); the two fixes
  agree within 66 m. The 2024 map was re-centered and widened (origin
  -8823, -2026, roaming radius 900) so the site, Cheyava Falls and Lookout
  Hill all fit; terrain and pictures regenerated.
- The end of each drive is a plain ring, no glowing beacon, and the
  objective reads "Reach the end of the rover's path".

## v4.13 / zion-sky-v382 — 2026-10-17
- Simulator: each drive ends at sunset. The camera drops behind the rover
  and the sky round the low Sun turns blue, as fine Martian dust scatters
  blue light forward. A tap skips it.
- Ingenuity is grounded in the 2024–2026 levels: its 72nd and last flight,
  on 18 January 2024, broke its rotor blades. The end of the 2023 level now
  tells that story with Perseverance's Mastcam-Z mosaic of Valinor Hills.
  Why not on the map: from NASA's traverse, the rover saw it from about
  415 m away at a spot between the 2023 and 2024 maps, outside both.
- Real panoramas: the sample depot (31 January 2023) in 2022, and the
  360° "Crocodile Bridge" panorama in 2026, at the spot where NASA's
  traverse shows the rover parked from sol 1710 to 1756. The photo viewer
  wraps a 360° picture all the way round.

## v4.12 / zion-sky-v381 — 2026-10-17
- Simulator: tap (or click) anywhere on the big map to send Ingenuity there
  to scout. The map note says how many flights are left.
- Fix: near a panorama objective the prompt said "Outcrop in Mastcam range".
  Why: the prompt was written for the original outcrop hunt and never learned
  the newer objective types. It now says Panorama location / Sample site.
- The speed note gives context: about 150 m an hour (0.1 mph), roughly 30
  times slower than walking pace. "Centred" is now US "centered".

## v4.11 / zion-sky-v380 — 2026-10-17
- Simulator: "Scout Ahead" is now "Fly Ingenuity". A small POV button
  cycles Chase · Wide (higher, wider) · Rover (first person).
- Realistic mode: the gold route shows only where the fog has lifted, by
  driving near it or flying Ingenuity over it. Easy shows it all, as before.
- Easy mode: fewer rocks near the route and 12% more lenient tip angles
  with extra grip. The gold dashes are a little fainter.
- Year levels follow the overhead map more closely: the real route is
  graded into one drivable line (steepest spot on 2024 from 29° to 22°,
  every year now under 24°), with denser block fields off it, so leaving
  the route is the hard way. Why: the raw 20 m terrain put short 30°+ ramps
  on the real path, and where the route doubles back, two stretches at
  different heights sat side by side.
- The rover briefing is two short pages so it fits on a phone screen.

## v4.10 / zion-sky-v379 — 2026-10-17
- The rover game is now the Mars Rover · Perseverance Simulator: no
  proof-of-concept wording, the briefing is a menu with one equal-width
  button per year (2021 · The Landing to 2026 · Beyond the Rim), and the
  landing leads straight on to 2022. The old 2021 landing-site traverse and
  "Skip to the surface" are gone.
- Fix: Back failed on iPhone ("This site can't be reached"). Why: it linked
  objects.html, which redirects to /objects, and a redirected page served
  from the offline cache fails to open. It now links /objects like every
  other page.

## v4.09 / zion-sky-v378 — 2026-10-17
- Mars Rover Simulator 3.14: the rover starts facing down the route; the
  route dashes are slightly clearer and the real line is kept passable (big
  blocks off it, mid-size rocks thinned); Belva's floor has no boulder field,
  matching the HiRISE dunes and the rim panorama; level buttons carry names
  and years. Fix: Ingenuity's camera went through hills because it flew a
  straight line between shots; it now stays above the ground and the
  take-off shot looks down from just above.

## v4.08 / zion-sky-v377 — 2026-10-17
- Mars Rover Simulator 3.13: tapping a photo on a card opens it in the game,
  and panoramas wrap round you in 3D (drag to look, pinch to zoom). Why: the
  photo was a plain link, so it opened the bare file in a new tab. Plus a
  small objectives checklist at top left in the year levels.

## v4.07 / zion-sky-v376 — 2026-10-17
- Mars Rover Simulator 3.12: the 2023 level is bigger (6.9 km of real
  drives across the delta top, Belva in the middle); Ingenuity's flights
  play as a letterboxed film with captions; Back goes to Objects and now
  works on iPhone (the game's touch handling swallowed the link tap); the
  phone screen is calmer (smaller map and tilt gauge, no title or bar
  shading, smaller buttons).

## v4.06 / zion-sky-v375 — 2026-10-17
- Mars Rover Simulator 3.11: objectives. Each year level now asks for what
  the rover really did there: core a sample (Wildcat Ridge, Cheyava Falls,
  Silver Mountain), analyze an outcrop, or take a Mastcam-Z panorama from a
  marked point (Belva's west rim, Lookout Hill), with NASA's photo and the
  real story on the card. Where nothing was found, a navigation panorama
  from high ground, which the rover really takes every few days. Why: the
  generic outcrops didn't match the real discoveries, and the 2025 one was
  a stand-in.
- Level 5 · 2026, beyond the crater rim.

## v4.05 / zion-sky-v374 — 2026-10-17
- Mars Rover Simulator 3.10: Level 4 · 2025, along the crater rim. All
  6.5 km of the year's real drives, starting at Silver Mountain beside the
  end of 2024; one outcrop half way, the beacon at the end.

## v4.04 / zion-sky-v373 — 2026-10-17
- Mars Rover Simulator 3.9: Level 3 · 2024, Cheyava Falls to the crater
  rim. A bigger level: start at the falls (the outcrop), then about 500 m of
  real climb to Lookout Hill, with the view back over Jezero.
- Fix: SuperCam's laser showed as flat squares. Why: the line that aimed the
  beam had been swallowed into a code comment since the game was added, and
  the spark had no round texture.

## v4.03 / zion-sky-v372 — 2026-10-17
- Mars Rover Simulator 3.8: a level for each year of Perseverance's route,
  after the landing and the 2021 traverse. Level 1 · 2022, the delta front
  (outcrop at Wildcat Ridge); Level 2 · 2023, Belva Crater. Real HiRISE
  ground, that year's real route to follow, Next level on the finish card.
  Built by src/jezero-crater/site.py and levelpath.py.

## v4.02 / zion-sky-v371 — 2026-10-16
- Mars Rover Simulator 3.7: Level 3 preview, Belva Crater (button on the
  briefing, or rover/?level=3). Real ground from the HiRISE stereo DTM (1 m)
  and the Almanac's CTX + HiRISE height model (4 m), coloured from the
  HiRISE picture tiles; Belva's dune field and walls in 3D. The mission
  follows Perseverance's 2023 route (gold dashes on the ground and map):
  image one outcrop half way, then reach the beacon at the end of the drive,
  the spawn point for the next level. Open world: roam anywhere.
  Data built by src/jezero-crater/belva.py.

## v4.01 / zion-sky-v370 — 2026-10-16
- Fly the route: overhead for 2021 to mid 2024, then lower and closer from
  Cheyava Falls on over the steep ground, dropping right down at each named
  place; at Lookout Hill the camera sits up on the rim looking down into the
  crater. The flight eases in instead of lurching at the start.
- The moving dot, pins and route now sit on the drawn ground. Why: they used
  the raw terrain height, which floats above the rover's flattened patch
  round the landing site, so the first dot looked like it hovered.
- Silver Mountain's name now gives way when it would overlap another name.

## v4.00 / zion-sky-v369 — 2026-10-16
- Fly the route back to 11 s a year. At each named place the camera sweeps
  down low over the ground for a few seconds, then climbs again.
- No more flying through hills: the flight keeps the camera and its line of
  sight to the dot at least 60 m clear of the ground, and the map view never
  lets the camera below 25 m. Why: the camera height followed the dot, not
  the terrain between them.
- Finer terrain over the drive area: a 20 m height model built from the CTX
  stereo DTMs with the five HiRISE stereo DTMs merged in where they reach
  (models/m20dem.bin, 2 MB, src/jezero-crater/dem20.py). The HiRISE layers
  are draped on it with denser meshes, so ridges, scarps and craters near
  the path stand up instead of looking painted on. Why: the crater mesh is
  140 m between points.
- The 1 m tiles now fade by height above the ground, not absolute height,
  so they stay sharp in low passes.

## v3.99 / zion-sky-v368 — 2026-10-16
- Jezero ground no longer flashes red while loading: until the HiRISE
  picture arrives (or offline without it) the ground is the picture's
  average color instead of the old made-up red soil, which was the
  placeholder texture.
- Fly the route: faster (7 s a year), and a small tilted card pops up for
  about 3 s as the dot passes each named place, with a line to its pin.
  Clicking a card pauses the flight and opens the full card.

## v3.98 / zion-sky-v367 — 2026-10-16
- Rover views at Jezero: procedural stones, grit and cobbles mixed into the
  1 m HiRISE ground close to the camera, fading to the real picture with
  distance. Why: at 1 m a pixel the ground looked blurry next to the rover.
- Route: about 70 needle-thin spikes (sharp reversals on legs under 60 m,
  mostly positioning jitter) removed and corners gently rounded
  (src/jezero-crater/smooth.py). Endpoints, year joins and pins unchanged.
  Why: some stretches read as noise rather than drives.

## v3.97 / zion-sky-v366 — 2026-10-16
- Jezero "From above": "Fly the route" button. The camera follows a dot
  along every drive, about 11 s per year, with the current year lit in the
  legend. Any drag, scroll, pinch or pin tap pauses it; the button resumes.
- Desktop: middle-drag tilts and turns the map, like right-drag.
- Zooming out from the rover views past ~1.2 km switches to the map controls
  automatically, from where the camera is.
- Rover views at Jezero: the ground under the rover is the real HiRISE
  picture of the landing site (1 km round) instead of a repeating texture;
  the 4 m HiRISE layer and the real crater terrain run out to the horizon,
  and the haze is thinner, so the delta scarp to the west shows from the
  ground. Rocks recolored to match.
  Why: the old 220 m haze and made-up soil hid the real landscape.

## v3.96 / zion-sky-v365 — 2026-10-16
- Jezero "From above": a 4 m HiRISE overview layer covers the whole drive
  area (13 tiles, 2.4 MB), so the map stays sharp when zoomed out to
  ~30 km. Strip edges now fray out along a ragged line instead of a hard
  rectangle. The route, pins and names stay on down to ~150 m.
  Why: zoomed out it fell back to the 39 m CTX blur; tile edges looked boxy.
- Fix: the 1 m tiles sat 3 m above the ground in every view and buried the
  rover in Overview. They now show only from 150 m up.
- Panorama viewer: mouse drag pans smoothly and coasts (the browser's own
  image drag was hijacking it); the scroll wheel pans sideways; a drag no
  longer closes the viewer.

## v3.95 / zion-sky-v364 — 2026-10-16
- Jezero "From above": HiRISE 1 m detail strip along Perseverance's route
  (51 one-km tiles, ~1 km wide corridor, 7 MB, offline via Download
  everything). Fades in when zoomed below ~9 km. Each image is aligned to the
  CTX map and keeps its color. Why: dunes, ripples and outcrops are visible
  up close instead of a 39 m blur.
- Viewer: the mouse wheel zooms the 3D view instead of scrolling the page;
  dragging on pins and the info card no longer scrolls the page.
- Mars Rover Simulator 3.6: Difficulty setting (Easy by default, Realistic).
  Easy flips pitch so up means up; Realistic keeps true glider pitch and the
  tighter 3.4 limits. Mouse drag steers on desktop. The page no longer
  scrolls while flying. Decluttered HUD: only the current step, warnings when
  they matter, instructions that fade. Why: easier to read and learn.

## v3.94 / zion-sky-v363 — 2026-10-16
- Mars Rover Simulator 3.5: easier landing (gentler gusts and shears, wider
  trim, parachute and touchdown limits, less fuel use); under the parachute
  the camera circles the capsule over the real crater in 3D; correctly
  registered CTX map of the landing country; roaming radius 280 -> 500 m.
  Why: more forgiving, more cinematic, more of the real ground to drive.
- Jezero cards: photos for Wildcat Ridge, Belva Crater and Lookout Hill. Card
  photos open full screen; panoramas fill the height and pan sideways. Why:
  panoramas were cropped to a sliver.

## v3.93 / zion-sky-v361 — 2026-10-16
- Jezero view: a milestone card for every year. New: Wildcat Ridge (2022,
  strongest organic signal), Belva Crater (2023), Lookout Hill (2024, top of
  the rim), Silver Mountain (2025, first rim sample) and the distance record
  (2026, on the Perseverance label). Pins sit at the rover's position on each
  sol from NASA's traverse. Why: show what the rover achieved along the way.

## v3.92 / zion-sky-v360 — 2026-10-15
- Parts, Drive and Stow buttons hide in the From above views. Why: they
  cluttered the map and covered the pins.

## v3.91 / zion-sky-v359 — 2026-10-15
- Jezero "From above" handles like a map: drag to move, two fingers (or
  right-drag) to tilt and turn, zoom toward the cursor; the view stays over
  the map. Why: explore the route the way Google Earth does.
- Tappable place names open a card with date, facts and a NASA photo:
  landing site (Kodiak), the delta, Ingenuity's first flight, the Rochette
  core holes, the sample depot selfie and Cheyava Falls' leopard spots.
  Photos in img/m20/ (downloaded with the 3D models). Why: puts the mission's
  best-known pictures where they were taken.

## v3.90 / zion-sky-v358 — 2026-10-15
- Jezero "From above": zoomed out, the map no longer ends at a square. Its
  edges fade into the ground's broad colors, which a low-detail skirt carries
  out to the horizon, curving with the planet; from the air the distance fades
  into the dusty sky. Why: the edge showed as a different-colored band.
- Four milestone pins at the rover's position on the day (from NASA's drive
  file): Ingenuity's first flight, first rock core (Rochette), the sample
  depot (Three Forks) and Cheyava Falls. Named when zoomed in. Why: shows
  the mission's most newsworthy moments on the route.
- Labels that would run off the left edge move to the right of their point.

## v3.89 / zion-sky-v357 — 2026-10-15
- Perseverance "From above": all of Jezero Crater as real 3D terrain. USGS
  CTX stereo elevation models (20 m) and their orthophotos, mosaicked into a
  90 km square at true height, colored with the tones of a true-color orbital
  photo; haze only where no stereo pair reaches. NASA's published traverse
  drawn on it (558 drives, 46 km, 2021 to Oct 2026), one color per year, with
  the latest position. The view pivots on the middle of the drives. Why: shows
  where the rover is and where it has been, with real ground.
- The close-up ground patch fades out as the camera climbs, so the real
  crater takes over. Labels that would run off the edge hide.
- Suspension button removed on Perseverance and Curiosity (Drive still uses
  that camera). Why: not needed.
- Lunar Rover "Earth overhead": now from the ground by the driver's side,
  looking up past the chassis, clear of the antenna. Why: the antennas nearly
  hid Earth.

## v3.88 / zion-sky-v356 — 2026-10-15
- Mars Rover Simulator links: a card on the Objects page, and a "Drive on
  Mars" card on the Perseverance and Curiosity pages of NASA Spacecraft
  (shown only for the Mars rovers). Why: people looking at the rovers are
  the ones most likely to want to drive one.

## v3.87 / zion-sky-v355 — 2026-10-15
- Mars page: the rover game's card is titled "Mars Rover Simulator". Why:
  says plainly what it is.

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
