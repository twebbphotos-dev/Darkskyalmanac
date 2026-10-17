# Mars Rover · Perseverance Simulator

An open-world Perseverance and Ingenuity game built on the same engine and assets as the
Dark Sky Almanac spacecraft viewer: three.js r186, the `perseverance.glb` and
`ingenuity.glb` models, and the viewer's Mars environment (sky gradient, fog, ground
palette, hemisphere + sun lighting). Stripped down to just what a game needs.

## Running it

The models load over `fetch`, so `file://` will not work — it needs a server.

```bash
cd mars-rover-poc-3.4
python3 -m http.server 8000
# open http://localhost:8000
```

Or drop the whole folder onto any static host.

## What changed in 3.19 — flight 72
- **2024 level re-centered** to (-8823, -2026), `playR` 900, `fine` 2.2: `site.py y2024 -8823 -2026`, `levelpath.py 2024 -8823 -2026 2.4 900`. Goals moved with it.
- **`SITE.crash`** (Valinor Hills, game 685, -453): the level's first Ingenuity flight, or one forced after 45 s of driving, flies there and crashes (`crashDown`, phase `wreck`, 3 s hold, `afterCrash`). Ingenuity stays upright, blades scaled short; a blade fragment lies 6 m off. Then `NOHELI` turns on and `addPhotoGoal` adds a `photo` objective (range 200 m, no SuperCam laser, card with the Valinor Hills mosaic).
- Location: azimuth 320.6° read off the gridded Mastcam-Z mosaic, ranges ~450 m (sol 1049) and ~415 m (sol 1068) from the traverse positions; fixes 66 m apart, averaged.
- The 2023 epilogue card is gone (the story now happens in 2024).
- No beacon beam at the end of the drive, just the ring; "Reach the end of the rover's path".

## What changed in 3.18 — sunset, a grounded helicopter, real panoramas
- **Sunset at the beacon** (`startSunset`/`stepSunset`, 14 s, tap to skip): the sun drops to 2.5°, a `dusk` uniform in the sky shader (mars.js) dims the sky to linear brown-gray and adds a tight blue glow round the sun; sun and sky light fade, the fog darkens, the camera sits behind the rover looking into the sun.
- **No Ingenuity from 2024** (`NOHELI`, year ≥ 2024): no helicopter, button, flights count, map taps or legend; the briefing says it is grounded. `.heli-only` / `.heli-gone` in index.html.
- **2023 epilogue** (`SITE.epilogue`): Ingenuity's last flight and the Valinor Hills mosaic (sol 1068) on the drive-complete card. Valinor Hills is ~2.5 km west of the 2023 map and east of the 2024 map, so it is not placed in either.
- **Real panoramas**: the sample depot portrait (sol 693) in 2022; "Crocodile Bridge" 360° (sols 1717 and 1754) in 2026 at the 2026 start, where the traverse shows the rover parked for sols 1710–1756. File names ending `-360.` wrap the full circle in the photo viewer.

## What changed in 3.17 — scout anywhere
- **Tap the big map** to send Ingenuity to that spot (`launchHeli({x,z})`, clamped to the roaming area). Without a target it still images the ground 72 m ahead.
- The Mastcam prompt and "in view" message name the objective type: Panorama location, Sample site or Outcrop.
- The briefing puts the real rover's speed in context (0.1 mph, ~30× slower than walking).

## What changed in 3.16 — fog, POV, easier Easy
- **Fly Ingenuity** replaces "Scout Ahead".
- **POV button**: Chase, Wide (camera 2.3× farther and higher) or Rover (first person from the mast).
- **Realistic hides the route** until the fog lifts there: the route is cut into 14 m pieces, each shown once its map cell has been seen (by the rover or Ingenuity). Easy draws it all, over the fog.
- **Easy** keeps big blocks 6.5 m off the route (4.5 m on Realistic), thins mid rocks to 3.6 m, cuts the off-route block boost, and loosens tip limits 12% with a +0.12 grip bonus.
- **Route grading** (`routeGrade` in terrain.js): the real path is sampled every 2 m, its height smoothed with a ±40 m Gaussian, averaged with any other stretch within 10 m (the route doubles back), relaxed until no 2 m step is steeper than 18°, and blended into the terrain within 3.5–9 m of the line (weighted over all samples within 9 m, so there are no steps at corners). Every year's route now peaks under 24°. One good path; the ground beside it keeps its true slopes, and boulder fields off it are denser.
- The rover briefing is two pages (the year and its goal, then the controls).

## What changed in 3.15 — the full game
- Presented as the **Mars Rover · Perseverance Simulator**: the briefing is the menu, one equal-width button per year, 2021 (the landing) to 2026. No "proof of concept" wording.
- The landing leads straight on to 2022. The old 2021 landing-site traverse (six outcrops) and "Skip to the surface" are gone from the menu.
- Back goes to `../objects`, the address every other page uses. The `.html` address redirects, and a redirected page from the offline cache fails to open (Chrome on iPhone showed "This site can't be reached").

## What changed in 3.14 — on the route
- The rover starts each year level **facing down the route**.
- **The route is easier to follow**: the dashes are a touch brighter and longer, and the real line is passable as it really was: no big blocks within 4.5 m of it and fewer mid-size rocks within 2.6 m (pebbles stay).
- **Belva's floor is clear**: no field of blocks inside the crater (`clear` in the level settings), matching the dunes and sand in the HiRISE pictures and the rim panorama.
- **Ingenuity's camera never goes through a hill**: the take-off shot is from just above, looking down, and the camera is held above the ground on its way between shots.
- The briefing's level buttons are named: 2022 · Delta front, 2023 · Belva Crater, 2024 · Lookout Hill, 2025 · Crater rim, 2026 · Beyond the rim.

## What changed in 3.13 — photos in 3D, a to-do list
- **Photographs open inside the game.** A panorama wraps round you on the inside of a cylinder (taken to span about 40° top to bottom): drag to look along it, pinch or scroll to zoom. Other photographs fill the screen. Before, the card's photo was a plain link and opened the bare file in a new tab.
- **Objectives list**, top left in the year levels: each objective and the beacon, ticked off as you go.

## What changed in 3.12 — a bigger 2023, Ingenuity on film, a calmer phone screen
- **2023 is bigger**: 6.9 km of the year's drives across the delta top, with Belva in the middle (`site.py y2023 -4500 -2200`, the big-country settings of 2024 and 2025). The old Belva-only files are gone.
- **Ingenuity's flights are filmed**: letterboxed, a low shot beside it as the rotors spin up and it lifts off, a wide tracking shot as it scouts ahead, a slow circle while it images the ground, and a follow shot down to its new airfield, with captions. Drag at any time to take the camera.
- **Back** goes to the Almanac's Objects page; it now answers taps on iPhone too (the game's own touch handling could swallow them).
- **Phone layout**: no title, no bar backgrounds, a smaller map and a compact tilt gauge under it, smaller buttons and stick, and the Map button dropped (tap the minimap).

## What changed in 3.11 — objectives, and 2026
- **Objectives, not just outcrops.** Each year level has a list of goals (`goals` in `SITES`, `terrain.js`): **analyze an outcrop** (Mastcam-Z and SuperCam, as before), **core a sample** (the same, then the coring drill seals a tube) or **take a panorama**: park inside a blue ring and the mast head turns a full circle, frame by frame. Real places get the rover's real story and NASA's photograph (the same cards as the Almanac's Perseverance map); where nothing in particular was found, the goal is one the rover really does every few days, a navigation panorama from high ground.
  - 2022: core a sample at Wildcat Ridge. 2023: an outcrop, then the panorama from Belva's west rim. 2024: core Cheyava Falls, panorama at Lookout Hill. 2025: core Silver Mountain, navigation panorama. 2026: navigation panorama.
- **Level 5 · 2026, beyond the rim.** 4.3 km of the year's drives west of the crater rim, on the standard scale.
- The HUD counts objectives in the year levels.

## What changed in 3.10 — 2025: along the crater rim
- **Level 4 · 2025.** All 6.5 km of the year's drives, starting at Silver Mountain (the rover's first core from the rim, January 2025), a few hundred metres from where 2024 ends. Same big-country settings as 2024 (750 m roaming radius, 2.4× across, 0.6× in height). Data: `site.py y2025 -11300 0`, `levelpath.py 2025 -11300 0 2.4 750`.

## What changed in 3.9 — 2024: Cheyava Falls and the crater rim; the laser
- **Level 3 · 2024.** From “Cheyava Falls” in Neretva Vallis (the outcrop) up about 500 m of real climb to Lookout Hill on the crater rim, 5 km of the year's drives. A bigger country: 750 m roaming radius, squeezed 2.4× across and 0.6× in height so the whole climb fits (slopes about 1.4× real), haze pushed back to 4.2 km for the view over Jezero. Heights here are CTX stereo (no HiRISE stereo model reaches this far west).
- **Fixed: SuperCam's laser drew as flat squares.** The line that aimed the beam's cylinder along its length had been swallowed into a comment, so it stood upright and was stretched sideways; and the spark at the rock was an untextured square sprite. Both fixed: a thin beam from the mast to the rock and a soft round spark.
- Level settings (scale, roaming radius, mesh spacing, haze) now live with each level in `terrain.js` (`SITES`).

## What changed in 3.8 — a level for each year
- **The landing stays the opening**, followed by the 2021 landing-site traverse. After it, each year of Perseverance's real route is a level, opened from the briefing or `?level=N`:
  - **Level 1 · 2022, the delta front.** About 4.3 km of the year's drives round the foot of the delta; the outcrop is at “Wildcat Ridge”, where the rover found its strongest signs of organic molecules.
  - **Level 2 · 2023, Belva Crater** (was the 3.7 preview; `?level=3` still opens it).
- Each level: real HiRISE ground (`src/jezero-crater/site.py NAME X Z`), that year's route as gold dashes (`src/jezero-crater/levelpath.py`), one outcrop on it, and a beacon at the end. **Next level** on the finish card goes on to the following year.

## What changed in 3.7 — Level 3 preview: Belva Crater
- **A third level**, opened from the briefing (or `?level=3`): the ground round Belva Crater, a crater about 0.9 km across in the top of the delta, 4 km west of the landing site.
- **Real ground.** Heights from the HiRISE stereo DTM DTEEC_002387_1985_003798_1985_A01 at 1 m, and at 4 m out to 4 km from the Dark Sky Almanac's CTX + HiRISE height model; colour from the Almanac's HiRISE picture tiles, laid over the game's own grain as light and dark. Space is compressed 1.5× as before; heights are not exaggerated here, so slopes come out 1.5× real. Built by `src/jezero-crater/belva.py` (`dtm/belva_*.png`, `img/belva_*.jpg`; heights packed (h + 300) × 50 because the rim to the west tops 600 m).
- **The mission follows Perseverance.** Its 2023 route through the area is a gold dashed line on the ground and the map. Image the one outcrop half way along it, then reach the beacon at the end of the drive, where the next level will start. You can roam anywhere on the way.
- No invented mesas, sand sheets, paving or boundary cliffs at Belva: the rover is simply held inside the roaming circle.

## What changed in 3.6 — Easy and Realistic, mouse steering, a calmer screen
- **Difficulty**, chosen on the briefing and remembered on the device. **Easy** (the default) keeps the 3.5 margins and flips pitch so it works the way it looks: push up and the capsule's nose, and its trace on the attitude strip, go up. **Realistic** restores the 3.4 margins and the flight-software sense of pitch (up raises the angle of attack).
- **Mouse steering** on desktop: drag anywhere on the scene during the landing, like a thumbstick (110 px is full deflection).
- **No accidental scrolling**: a drag that starts on the HUD no longer scrolls or bounces the page on phones.
- **Less on screen**: entry shows altitude and speed (load only when dangerous); after the parachute, altitude, descent, drift and fuel. One stage chip; no bank readout or legend; thruster level only when low; instructions fade after 7 s.

## What changed in 3.5 — an easier, more cinematic landing; a bigger crater floor
- **Easier landing.** Gusts and density shears are gentler, the capsule can swing 30° (was 26°) before it flips and 12° (was 10°) before the backshell heats, and heating builds more slowly. Pitch thrusters and the descent stage use less propellant. The parachute accepts up to 500 m/s (was 478) and 18° of swing (was 15°). Touchdown allows 2.2 m/s down and 1.8 m/s sideways.
- **Real Jezero under the parachute.** The country beyond the drivable terrain is now the real crater in 3D, from the Dark Sky Almanac's USGS CTX elevation mosaic (`../models/jezero.bin`, heights doubled), draped with a correctly registered 60 km CTX photo map (`img/jezero-region.jpg`, made by `src/jezero-crater/region.py`).
- **Cinematic descent.** Under the parachute the camera circles the capsule, looking down across the crater.
- **Bigger play area.** The roaming radius is 500 m (was 280), with 2.4 m mesh cells beyond 330 m and more rocks to fill it.

## What changed in 3.4 — smoother landing controls
- **Ramped keys.** In the landing, keys no longer snap to full deflection; they ramp in and ease back out. Bank (A/D) takes about 0.6 s to reach full. Pitch (W/S) takes about 0.3 s, so you can still catch a density shear with a quick pulse.
- **Expo curve,** like an RC transmitter, on the keys and the phone stick alike. Small inputs are gentle; full deflection still gives full authority.
- **Slower banking.** Maximum bank rate is down from 62°/s to 48°/s.
- **Lighter fuel use.** The pitch thrusters burn propellant in proportion to how hard you push, so light corrections cost less.
- The same smoothing applies to the powered-descent divert.

## What changed in 3.3 — camera orbit, phone text
- **Orbit the rover.** Drag with the mouse, or a finger on phones, to swing the camera round the rover and up or down. The mouse wheel zooms. When you start driving again, the view eases back behind the rover. The same drag works while Ingenuity flies.
- **Aim Mastcam-Z by dragging,** as well as with the drive keys or stick.
- **No keyboard names on phones.** Buttons read Scout ahead / Mastcam-Z / Map, and in the camera view they switch to Back to driving / Capture. Prompts say "tap Capture", not C or Space. In the landing, the SPACE button is now DEPLOY, and the briefings show stick and Deploy instead of A D, W S and Space. Desktop keeps its key hints.

## What changed in 3.2 — the Mastcam hero sequence
- **Fixed: the mast went up and straight back down.** The model's clip runs raise, hold, stow over 20 s, and the game was playing all of it. Now it plays only the 2.8 s raise, and the mast stays up.
- **Four captioned steps,** letterboxed with the HUD hidden:
  1. *Deploying the Remote Sensing Mast:* low front-quarter shot as the mast swings up.
  2. *Mastcam-Z turns to the target:* over the mast's shoulder as the head pans to the outcrop, then the camera flies into the lens.
  3. *Frame the target:* you look through Mastcam-Z. Press C or Space for a shutter, a held frame and an "Image acquired" stamp.
  4. *SuperCam fires / Reading the spark:* over-the-shoulder laser shot with a pulse counter (30 pulses), then a pull-out to a wide shot of rover and rock before the discovery card.
- An iris fades between shots instead of hard cuts. The laser is drawn thicker so you can follow it.
- C still skips the opening shots.

## What changed in 3.1 — organic layers
- **Rock layers that wander.** Beds dip, sag and swell along each face. Each bed changes colour along its length, and the dark seams between beds come and go.
- **Softer, broken layering.** Layer definition fades in patches, dust streaks run down the faces, and cliffs get their own rock grain instead of flat colour.
- **Crater wall.** Ledges wander up and down instead of running level all the way round. Some stretches are benches, others plain slopes, and gullies and buttresses cut the wall front.
- **Mesas.** Uneven cliff edges and wandering ledges, with a broken caprock instead of a flat table top.

## What changed in 3.0 — colour
- **Redder grade.** The ground grade moved from tan-grey toward the butterscotch-rust of Mastcam-Z natural-colour frames. Sunlit ground went from ~RGB 155/118/82 to ~167/108/67.
- **Sky, fog and skylight.** Warmed to match, so distant cliffs fade into a rust haze.
- **Cliffs and mesas.** Rust-brown to dusty-ochre beds instead of pale cream.
- **Dust and rocks.** Dust in hollows is redder. Basalt blocks get a rust dust coat, and scanned rocks are warmed.

## What changed in 2.9 — mobility
- **Rock crawling.** Each tyre is rolled over the ground, so it meets a block's face with its rim. Wheels climb blocks up to 50 cm (the real wheel is 52.5 cm across). Steep faces slow the rover hard, and hitting one at speed jolts it.
- **Real hitboxes.** Blocks taller than 50 cm stop the wheels. Blocks taller than the 60 cm belly also stop the body. Anything in between can pass under the rover, between the wheels.
- **Rock gardens.** New patches of 15–50 cm blocks to pick a way across.
- **Traction.** Grip depends on the ground: about 40° on bedrock, 35° on regolith, 25° on drift sand. Past that, the wheels spin uphill, and on steeper ground the rover slides downhill.
- **Tipping.** The centre of mass is set at 0.95 m up and 10 cm aft. That is an estimate: NASA doesn't publish it, but these numbers reproduce its "no tip-over at 45°" design figure. Tip angles come out at 49° sideways, 52° nose-down and 48° nose-up. Blocks under one side add to the lean, and part of the sideways load in a turn counts too.
- **Rollover.** Hold past a tip angle for 0.25 s and the rover goes over about its downhill wheels. Recover returns it to the last stable stop.
- **Tilt instrument.** Roll and pitch dials sit under the minimap. Amber marks the 30° flight-software limit and red the tip angle. A warning shows past 30°.
- Suspension fix: the body no longer over-tilts on steep slopes (it read a 35° slope as 44°).

## What changed in 2.8
- **Ingenuity flies smoothly.** Each leg is one curved arc that starts and stops gently, so there are no jerks.
- **Steady altitude.** It climbs to clear the highest ground on its route and holds that height, instead of copying every bump 10 m below it.
- **Real attitude.** Springs drive the tilt: it noses down to speed up, flares to stop, banks into turns and swings its nose round slowly.
- **Graceful hover and landing.** A straight lift-off to a 3 m hover, a slow bob and look-around while it scans, and a soft eased touchdown.

## What changed in 2.7
- **Bigger world.** Roaming radius 110 m → 280 m (about 6× the area). Space compression eased from 2× to 1.5×, so the 1 m HiRISE data still covers the whole drive.
- **More vertical.** Heights exaggerated 3× (was 0.75×). Real ridges and dunes now read as hills; slopes come out 2× the real ones.
- **Six mesas.** Layered-rock buttes, 11–21 m tall, with stepped cliffs and talus. Each has one ramp you can drive up for a view.
- **Crater-wall boundary.** A ragged, banded rock wall 30–56 m high rings the roaming edge, with a boulder talus at its foot. You can see the limit from anywhere.
- **Cliff strata.** Thick beds of varying tone with dark recesses, instead of fine uniform stripes. Sand no longer lies on steep faces.
- **Faster rover.** Top speed 12 → 16 m/s. Ingenuity scouts 72 m ahead and reveals 64 m around. Map reveal radius 40 m.
- Outcrops spread out and set on level pads. Landing briefing map covers 640 m with 3 m contours. Hazard slope limit 17°.

## What changed in 2.6

**The six outcrops, rebuilt against their photographs** (`src/outcrop.js`). The stacked
prisms are gone. Each outcrop is now a fine heightfield (about 5 cm cells) draped on the
real ground: low, ragged ledges rising out of the dust, beds stepped into treads and
undercut risers, joints splitting the rock into blocks, rubble and broken plates at the
foot. Bed colour, laminae, grain and pitting are drawn per pixel, faded out wherever they
would be finer than a pixel, so faces show beds without shimmering. Colours are sampled
from each photograph:
- **Whale Rock** (crossbeds): reddish-brown ledges, inclined sets, broken plates.
- **Pahrump Hills** (laminae): a low, wide, platy pavement of thin flat beds.
- **Hottah** (pebbles): a grey, broken slab studded with rounded dark and pale gravel.
- **Kodiak** (foresets): a flat-topped khaki butte, inclined beds through the middle.
- **Garden City** (veins): dark mudstone under a raised net of pale calcium-sulphate veins.
- **Delta scarp** (boulders): a low cliff of fine beds with dark boulders weathering out.

Mastcam-Z now pre-aims at the face of the outcrop turned toward the rover, and its view
is taken from about 2 m up, as on the real mast.

## What changed in 2.5

**The rover back at full quality.** Resolution never drops below native on a normal
screen (it can go up to 2× on high-density ones), and soft shadows are back. The
savings in 2.4 come from the scenery, not the rover.

**Mastcam-Z, with a camera worth the name.**
- The Remote Sensing Mast now starts stowed on the deck, as the model ships, and the
  first time you open Mastcam-Z it rises — the model's own deploy animation — while the
  camera holds a low, slow arc across the front of the rover, looking up at it.
- Later openings get a shorter version of the same shot. `C` skips it.
- The mast head pans with you as you aim, and the Mastcam view is now taken from the
  head itself.
- Capturing fires SuperCam: 30 pulses from the mast to the rock, with the spark of
  vaporised rock and a flash, filmed over the mast's shoulder, before the card opens.
  The real laser is infrared and invisible; the beam is drawn so you can see it.

**A traverse map.** A round minimap in the corner and a full map on `M` (or tap the
minimap):
- Shaded relief of the real ground under a fog of war that lifts where the rover has
  driven and where Ingenuity has flown.
- Your track, the outcrops you have found (gold) and imaged (green), and Ingenuity.
- Ingenuity leads: when it flies, outcrops it cannot see clearly but are within about
  twice its imaging range show as dashed "layered rock?" circles, a little off-centre.
- The overhead camera moved to `V`.

## What changed in 2.4

**Space compressed 2×, and a faster rover.**
- The real elevation is sampled at 2 Mars metres per game metre, so the delta front,
  the buttes and every crater sit half as far away. Heights are scaled by 0.75, so
  slopes come out somewhat steeper but nothing turns into a wall (`SQ`, `SV` in
  `src/terrain.js`).
- The six outcrops are drawn in closer together and the roaming radius is 110 m
  (was 150), so finds are a short drive apart. Ingenuity's scouting hop scales with it.
- Top speed 12 m/s (was 7.2), with quicker acceleration and turning.

**Runs lighter.**
- Big scanned boulders cut from 8,000 to 2,600 triangles each.
- Rocks are batched in 90 m tiles, so the camera and the shadow pass skip what they
  cannot see: about 1.6 M triangles a frame instead of 2.8 M.
- The fine terrain grid stops at the edge of the roaming area, and the far grid is coarser.
- Pebbles no longer cast shadows; shadows use plain PCF filtering.
- Render resolution adapts: it starts at up to 1.5× and steps down (to 0.75×) while
  frames run slower than about 40 fps, then back up when there is headroom.

## What changed in 2.3

**The ground is the real Jezero.** The terrain is now built from NASA's Mars 2020
Terrain-Relative-Navigation HiRISE elevation mosaic, centred on Perseverance's actual
landing point (18.4447° N, 77.4508° E):
- `dtm/site_1m.png` — 1.2 km square at 1 m, where you drive.
- `dtm/area_4m.png` — 8 km square at 4 m, out to the delta front and the buttes.
Heights are packed as 16-bit values in the red and green channels: (h + 300) × 100 m.
The procedural craters and invented delta are switched off when the data loads; the
real craters, ridges and delta are in the elevation. Delete `dtm/` and the game falls
back to the procedural ground. The terrain mesh now runs out 4 km each way, and the
haze is pushed back to 2.6 km so the delta stands on the western skyline.

**Scanned rocks and ground (Poly Haven, CC0).**
- `models/rocks/` — photogrammetry boulders and stones (Namaqualand boulders, moon
  rock, stone_01, boulder_01), decimated to 450–8,000 triangles with 1K textures,
  dusted to match. They replace the procedural big and mid-size rocks; pebbles stay
  procedural for speed.
- `tex/` — scanned regolith, sand, pebble-lag and slab textures, layered onto the
  terrain for close-range grain and relief. They supply detail only; the colour is
  still the game's Mars grade.

**Colour.** The ground grade is re-tuned toward Mastcam-Z frames of the crater floor:
tan-grey rather than brick red.

The bundle is now an ES module (`<script type="module">`), so it still needs a local
server, as before.

## What changed in 2.2

**Briefings back to a technical mission tone.** Still one per level and still compact,
but with the real hardware and numbers: one-way light time on landing day (11 min 22 s),
entry mass and speed, the PICA heat shield, the 16° trim angle, the two 77 kg tungsten
cruise balance masses and six 25 kg entry masses, the 21.5 m chute at about Mach 1.7,
Terrain-Relative Navigation, eight throttleable engines and 400 kg of hydrazine, three
7.6 m bridles and a 0.75 m/s touchdown. Each level's opening screen has a short spec
block; the cinematic captions carry the cruise-stage separation, the 2 rpm spin and the
tungsten masses again. Level 2's briefing covers Jezero's lake and delta, why layered
sediment matters for biosignatures, and the rover, Mastcam-Z and Ingenuity specs.

## What changed in 2.1

**Shorter, punchier briefings, one per level.**
- The opening screen is Level 1 only: a three-line pitch and the landing controls.
- The landing briefing keeps both maps but trims the plan to four short lines.
- The cinematic captions are cut to one short line each.
- Level 2 now has its own briefing when you reach the surface — the lake-bed story in
  two sentences and the rover controls — and you start driving when you are ready.

**Phone controls: an analogue thumbstick.** Both D-pads are replaced by a thumbstick
(`src/stick.js`). It is analogue — half a push is half a bank or half speed — with a
small dead zone, gentler response near the centre and a soft spring back. Phones that
support vibration get a light tick as the stick leaves centre, a firmer one at full
throw, and buzzes for density shears, the parachute, backshell separation, touchdown
and failures (Android; iPhone browsers do not allow vibration). During the landing a
large SPACE button sits above the stick. Briefings and prompts describe the stick
instead of keys on touch screens.

## What changed in 2.0

**You really steer now, and the ◇ is the real crater.** Until 1.9 the view during entry
was turned by a stand-in for the predicted miss, so the ◇ and the Jezero you could see
on the globe below did not line up. Now the camera sits where the capsule actually is —
off to the side of the line to Jezero by the predicted cross-range miss (drawn larger
while Jezero is far off, true to scale by the end) — and points where it is actually
going. Bank and the heading swings; the ◇ is the projection of Jezero itself, sitting on
the gold ring drawn round it on the globe. Point the nose at the ◇ and you will land on
target: hold it there and the miss closes to zero by the parachute.

## What changed in 1.9

Fixed: the entry view banked the wrong way. Banking left now tips the horizon as it does
from a cockpit (left side up), and the flight-path marker's wings dip to the left.

## What changed in 1.8

**A landing map you can read.** The entry guidance panel is now "Where you'll land": a
small top-down map with the target ellipse, a dot for where you will come down if
nothing changes, and an arrow showing which way that point is drifting. Beside it, the
miss in km and one plain instruction — "Bank left", "Roll upright to stretch", "Bank
steeper to shorten", or "Hold it — on course". The lift-vector and range-hold lines are
gone. On phones and during the parachute stage the map is hidden and only the text shows.
Also fixed: the cinematic letterbox could stay on screen after the approach on slow devices.

## What changed in 1.7

**Entry flies like a glider.**
- The chase camera now sits directly behind the capsule on its flight path, a little
  above, instead of off to the right.
- A flight-path marker (circle with wings) shows where you are heading; a gold ◇ shows
  Jezero. Bank toward the ◇ and the capsule turns: Mars swings round the nose and the
  ◇ slides in toward the marker, turning green when you are lined up.
- The view banks with the capsule, so a roll reads as a turn.
- Steering bites from the start of entry rather than only in thick air, and a hard roll
  knocks the pitch about less than before.
- Re-balanced over 20 runs per style: no pitch input tumbles 18 times in 20; a lazy
  damper survives 19 in 20; a steady one always does.

## What changed in 1.6

**The approach.** "Begin entry" now opens on a 26-second cinematic, letterboxed, before
you get the controls: the cruise stack closing on Mars with its solar panels to the Sun,
the cruise stage letting go, thrusters turning the capsule heat shield first, the two
tungsten balance masses thrown off, and a count into the atmosphere. `Space` or "Skip"
jumps straight to entry. The cruise stage is built in code, like the rest of the hardware.

**Entry is dangerous now.** The capsule has to be flown, not just steered:
- `W` / `S` fire the pitch thrusters. The capsule flies tilted about 16° to the flow — its
  trim — and gusts, density shears and your own hard rolls knock it off. An attitude
  trace under the guidance scope shows the swing against green, amber and red bands.
- Off by more than 10°, the backshell takes heat it was never built for. A heating bar
  fills, the capsule glows, and if it fills: **Burned through**.
- Off by 26°, the heat shield no longer leads: **Tumbled**.
- Slowing through Mach 3, the capsule starts to wobble on its own, as real capsules do
  before their parachutes. You have to damp it while you wait to fire the chute, and
  firing with it swinging more than 15° fouls the lines.
- Pointing the lift down too long drives the capsule into thick air too steeply: over
  15 g for more than a second is **Overloaded**.
- The thrusters run on a shared propellant budget, for both pitch and roll.
- Before the parachute, six more weights are thrown off and the capsule rolls level —
  the real manoeuvre is called "Straighten Up and Fly Right".

Balanced in simulation: with no pitch input the capsule tumbles every time, around
3:40 in; a slow, inattentive damper survives 11 times in 12; a steady one always does.

**The parachute is on screen.** The deploy cuts to a camera looking up the riser from the
backshell as the canopy snaps open — the view Perseverance's own up-look camera
recorded — then pulls out to a wide shot of canopy, capsule and Mars below, where the
heat shield drops away. The phase now runs about 13 seconds instead of 7.

**All six rover photographs are bundled.** Kodiak butte (PIA24485) completes the set, so
every discovery card shows its real photograph offline and on hosts that block outside
images. `npm run photos` is now only needed to refresh them from NASA.

## What changed in 1.5

**The landing now flies over the real Jezero.** `img/jezero-region.jpg` is Mars Express'
view of the crater (NASA PIA24350, ESA/DLR/FU-Berlin/NASA/JPL-Caltech) with the caption
and ellipse removed, cropped to 60 km with the landing point at the foot of the delta
front. It replaces the drawn regional map in two places: under the capsule from entry
down to the last few hundred metres, and in the briefing's approach panel, where the
ellipse is redrawn exactly where NASA had it. The top and right edges of the 60 km
square lie beyond the photograph and are filled with blurred tone. Delete the file and
the game falls back to the drawn map.

**Five of the six rover photographs are bundled** in `photos/`, so their cards work
offline and on hosts that block outside images: Whale Rock (PIA19076), Pahrump Hills
(PIA19075), Hottah (PIA17062), Garden City (PIA19161) and the delta scarp (PIA24684).
Only Kodiak butte (PIA24485) is still fetched from NASA or by `npm run photos`.
Wide panoramas are no longer cropped at the sides.

## What changed in 1.4

**A briefing before the landing.** "Fly the landing" now opens a briefing first: two
maps and the plan.

- *Approach*, 60 km across: the crater, the river valley, the delta, your ground track
  and the 7.7 × 6.6 km landing ellipse.
- *Landing site*, 400 m across: a shaded-relief survey with 1 m contours, drawn from the
  same height function the rover drives on, with the hazard grid the powered descent
  uses laid over it and the six outcrops marked. What is red here is red on the way down.
- The five stages, by altitude, with the keys for each.

**The look, matched to rover photographs.** The Almanac's palette is a deep brick red.
Real Mastcam frames are paler and more ochre, with grey-brown rock and well-lit shadows.

- One colour grade (`GRADE` in `src/mars.js`) now runs on the albedo of every ground
  material — terrain, rock dust, the far plain, the regional map — so they move together.
  It is one place to tune the whole look.
- Light: a third of it now comes from the sky rather than the sun, as under a dusty
  Martian sky, so shadowed faces are filled rather than black. Exposure is set the way
  the rover cameras expose: sunlit ground mid-bright.
- Rocks are basalt grey under tan dust instead of dark red-brown.
- Outcrops: a wandering, jointed outline with notches where blocks have fallen away;
  every bed weathered back unevenly; dust on the ledges; the stack leaning back so one
  side is a face to read and the other a stepped slope; broken slabs on top; more talus.
  Mudstone and conglomerate re-coloured from the Pahrump Hills and Hottah photographs.
- From altitude the terrain now runs into the far plain without a visible square, and
  the hazard overlay fades out instead of ending at a straight edge.

**The first real photograph is bundled.** `photos/PIA17062.jpg` (Hottah, the pebble
conglomerate) ships with the game, so that card works offline and on hosts that block
outside images. The other five still come from NASA's server or `npm run photos`.
The card now frames each photograph at its own shape instead of cropping to a strip.

## What changed in 1.3

**Level 1: the landing.** The game now opens at the top of the atmosphere and you fly
Perseverance's entry, descent and landing before you drive. About 100 seconds of play
for the real 410, with the clock run fast between decisions:

| Stage | What you do | What it is teaching |
|---|---|---|
| Entry | `A` / `D` roll the capsule, `W` / `S` hold its pitch | The capsule flies with lift. Rolling points that lift: sideways to correct cross-range, more or less upright to stretch or shorten the range. The scope shows the predicted landing point against the 7.7 × 6.6 km ellipse. |
| Parachute | `Space`, once | The real system fired by *range*, not by the clock. Wait and you fly long; go early and the canopy is over its speed limit. |
| Radar | watch | Heat shield off, and the hazard map comes up — built from the actual terrain: slopes, boulders, sand, craters, outcrops. |
| Powered descent | `Space` to leave the backshell, then `W A S D` | Divert to green ground on 400 kg of fuel. Diverting costs fuel. |
| Sky crane | `Space` | Lower the rover on its bridles, touch down at 0.75 m/s, cut, fly the stage clear. |

Where you set down is where level 2 starts. "Skip to the surface" on the first screen
goes straight to driving, and a failed stage can be retried from where it began.

There was no model of the entry vehicle in the Almanac (or in NASA's public 3D
repository), so the aeroshell, parachute and descent stage are built in code from
published dimensions: a 4.5 m, 70° sphere-cone heat shield, a biconic backshell, a
21.5 m disk-gap-band parachute, an eight-engine descent stage. The parachute carries the
real canopy's binary pattern. If you get proper models, `buildAeroshell`, `buildChute`
and `buildDescentStage` in `src/edl.js` are the three places to swap them in.

Also in 1.3:
- `img/mars-globe.jpg` is NASA's global Mars map (from `nasa/NASA-3D-Resources`), used
  for the view from entry altitude. Jezero's surroundings — rim, delta, inlet valley —
  are drawn in code as a regional map laid over it.
- A far plain now runs out beyond the terrain mesh, so the ground has no edge from above.
- Fixed: cliff strata were shaded by the camera's up rather than the world's, which
  striped the delta top like wood grain when seen from overhead.

## What changed in 1.2

- **Real photographs.** Every discovery card now ends with the photograph a rover
  actually took of that kind of rock, with where, when and which camera:

  | In the game | The real thing | Image |
  |---|---|---|
  | Cross-bedded sandstone | "Whale Rock", Gale crater — Curiosity, sol 796 | PIA19076 |
  | Laminated mudstone | "Pahrump Hills", Gale crater — Curiosity, sol 792 | PIA19075 |
  | Pebble conglomerate | "Hottah", Gale crater — Curiosity, sol 39 | PIA17062 |
  | Inclined delta beds | "Kodiak" butte, Jezero crater — Perseverance, Feb 2021 | PIA24485 |
  | Mineral-veined mudstone | "Garden City", Gale crater — Curiosity, sol 929 | PIA19161 |
  | Boulder flood beds | Delta scarp, Jezero crater — Perseverance, 2021 | PIA24684 |

  The six rock types were re-chosen so each one matches a real find, and each outcrop
  is now built to show its feature: angled laminae, a steep foreset wedge between flat
  beds, pale veins, a boulder bed on fine layers.
- **Photos load from `photos/<id>.jpg` first, then from NASA's image server.** Run
  `npm run photos` once to download local copies (about 2 MB). Without them the game
  needs to be online to show the pictures.
- **Landscape.** Polygonal bedrock pavement (the plates Jezero's floor is known for),
  a delta scarp along the western skyline with a layered butte standing in front of it,
  outcrops rebuilt as low ledges on their own rises rather than towers, rounder
  wind-worn boulders alongside the angular ones, and more rock overall.

## What changed in 1.1

- **Working rocker-bogie.** Rockers, bogies, steering knuckles and all six wheels now
  articulate. Wheels spin at their own ground speed, corner wheels steer, and the body
  rides at the average of the two rockers the way the real differential makes it.
- **Ingenuity lives on the ground.** It no longer rides on the deck. It waits at an
  airfield, flies a recon when asked, then picks a flat clear patch near where it
  imaged and lands there until the next flight.
- **Terrain.** Impact craters with rims and ejecta blocks, sand sheets combed into
  wind ripples, rock fields with a realistic size distribution, dust-capped rocks,
  ground that varies in tone, and the crater rim on the horizon through the haze.
- Fixed: 1.0 pitched the rover the wrong way on slopes.

## The loop

Drive across a crater floor, walk the suspension over cobbles and steer round the
boulders, find six layered outcrops and read each one with Mastcam-Z. Ingenuity can be
sent ahead to spot outcrops over the next rise.

| Key | |
|---|---|
| `W A S D` / arrows | Drive (on-screen D-pad on touch) |
| `C` | Open Mastcam-Z — drive keys then pan and tilt |
| `Space` | Take the shot when a target is centred |
| `F` | Send Ingenuity to scout ahead |
| `M` | Traverse map (overhead camera is `V`) |
| `Esc` | Stow the camera |

Each capture names the unit, says what the camera is seeing in the bedding, and what
that bedding means — cross-beds for current-driven dunes, flat laminae for still
water, rounded clasts for a river. Six outcrops, six different depositional stories.

## What is in here

```
index.html            UI shell, HUD, Mastcam overlay, all the CSS
rover.bundle.js       the built game (three.js + game code, ~900 KB)
models/               perseverance.glb, ingenuity.glb  (from Dark Sky Almanac)
src/mars.js           sky, sun, haze, lights, ground textures, the colour grade
src/terrain.js        height function, craters, ripples, rocks, outcrops, landing-site search
src/suspension.js     splits the rover's mobility meshes and solves the rocker-bogie
src/game.js           driving, Mastcam, Ingenuity, HUD, the six rock types, level hand-off
src/edl.js            level 1: briefing maps, entry profile, guidance, parachute, powered descent, sky crane
img/mars-globe.jpg    NASA global Mars map, for the view from entry altitude
dtm/                  HiRISE elevation of the landing site (NASA/JPL/UArizona/USGS)
tex/                  scanned ground textures (Poly Haven, CC0)
models/rocks/         scanned rock models (Poly Haven, CC0)
img/jezero-region.jpg Jezero from orbit, 60 km square, for the landing and its briefing
tools/get-photos.mjs  downloads the NASA photographs into photos/
photos/*.jpg          the six rover photographs (NASA/JPL-Caltech; full credits on each card)
```

## Rebuilding

```bash
npm install
npm run build        # esbuild src/game.js -> rover.bundle.js
```

## Notes on the implementation

**Suspension.** The model has no rig — wheels and suspension are rigid meshes, and the
tyres are not even in the node called `Wheels_objs` (that is only the hub caps; the
treads and spokes are inside a merged mesh named `hazcams_front`). But every tyre,
spoke, knuckle and arm is its own connected piece of geometry. So at load,
`suspension.js` finds the connected components of the three mobility meshes, sorts
each one by where its bounding box sits, and re-hangs it on a linkage:

```
body ── rocker ─┬─ front steering knuckle ── front wheel
                └─ bogie ─┬─ middle wheel
                          └─ rear steering knuckle ── rear wheel
```

The new meshes share the original vertex buffers and differ only in their index, so
the split copies nothing. Pivot positions were read off the geometry: rocker pivot at
y 0.89 / z 0.21, bogie pivot at y 0.664 / z −0.54, wheel radius 0.2635.

Each frame the game reads the ground under all six wheels and `pose()` solves each
side in its own vertical plane: the bogie lies across its two wheels, the rocker spans
from the bogie pivot to the front wheel, and the body takes the mean of the two rocker
angles. Measured in a headless run, the treads sit within 1–4 cm of the ground across
the map. `__game.wheelGap()` in the console reports it live.

**What the wheels ride on.** `groundHeight()` is the terrain plus any cobble under the
wheel. Rocks up to 30 cm tall are kept in a 1 m spatial hash and act as bumps; taller
ones are colliders. That threshold is `DRIVE_OVER` in `terrain.js`.

**Terrain.** Still one height function shared by the mesh, the wheels, the rock
scatter and Ingenuity's landing search — now with 22 craters (two large and worn, the
rest small and fresh), sand sheets with 6.4 m ripples square to a fixed wind, and the
rim hills beyond 230 m. The mesh is a single grid: 1.25 m cells across the drivable
area, stretching geometrically out to ~950 m, so there are no seams. Tone is carried
by vertex colour (dust in hollows and crater floors, bare dark rock on slopes and
rims) and the sand is shaded separately in the fragment shader: pebble bump faded
out, albedo eased toward clean sand, and 40 cm wind ripples added to the normal.

**Ingenuity.** `findLanding()` searches rings round the recon point for the flattest
spot with no boulder nearby, no cobble under any of the four feet, and clear of the
outcrops and the rover. The helicopter sits at true scale, aligned to the slope, and
is a collider while parked. Rotors use the Almanac viewer's counter-rotating trick.

**Other.**
- Outcrops are generated: beds are prisms on one shared irregular outline, merged into
  one mesh with vertex colours. They cast shadows but do not receive them — the
  laminae are thinner than a shadow-map texel.
- The sky runs through the same tone mapping as the scene, with its horizon set to the
  fog colour, so the far hills dissolve into it rather than ending at a line.
- The `.glb` files use `EXT_meshopt_compression`; `GLTFLoader` needs the meshopt decoder.
- `window.__game` exposes `tp(x, z, yaw)`, `view(...)`, `findAll()`, `wheelGap()`.

**The landing (`src/edl.js`).** Two worlds. Above heat-shield separation the capsule is
drawn at the origin of its own small scene and the same camera is placed over a globe in
kilometres — two render passes, so a 4.5 m capsule and a 3,390 km planet never share a
depth buffer. Below it, the hardware is moved into the real surface scene in metres, so
the ground you land on is the ground you drive on. The entry follows a table of
[time, altitude, speed] shaped like the real one (631 km of ground track, 9.5 g peak);
guidance is a two-number model — predicted cross-range and down-range miss — pushed by
the sine and cosine of your bank angle, scaled by how much air there is to push on.
`__game.edl.debug.sim(n)` steps the level without rendering, which is how it was tested:
a scripted pilot flies it start to finish in the headless run.

## Obvious next steps

- The differential bar and its links on the deck stay still; they are small, but they
  should swing with the rockers.
- Collision is still one circle round the rover. Per-wheel collision would let a
  boulder pass between the wheels, as it can on the real thing.
- The arm-deploy animation (23 clips, scrubbed 0→9 s like the viewer's deploy slider)
  is unused; it would suit an abrasion or coring step at an outcrop.
- Ingenuity flies a fixed distance along the rover's heading. Letting the player pick
  the recon point would make scouting a real decision.
- Wheel tracks in the sand.
