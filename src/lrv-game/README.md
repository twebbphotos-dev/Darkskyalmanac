# Lunar Rover · Apollo 17

Drive the Apollo 17 Lunar Roving Vehicle in the Taurus–Littrow valley. One file of game code
(`src/main.js`) plus the page `lrv/index.html`; it reuses `models/lrv.glb`, `models/lm.glb`,
`models/moon-a17.bin` and the touch stick from the Mars rover game.

Build (from the repo root, with three.js installed somewhere on NODE_PATH):

    NODE_PATH=<dir>/node_modules npx esbuild src/lrv-game/src/main.js --bundle --minify --format=esm \
      --target=es2022 --banner:js='/*! Dark Sky Almanac © 2026 ... */' --outfile=lrv/lrv.bundle.js

## Physics

- Gravity 1.62 m/s². One rigid body (700 kg, 3.1 × 1.1 × 2.06 m box inertia) on four raycast wheels,
  integrated at 240 Hz (semi-implicit Euler; angular motion in body axes with the gyroscopic term).
- Each wheel: spring 4200 N/m, damper 620 N·s/m, bump stop past 0.36 m; tire force limited by a
  friction circle, μ = 0.62 times the wheel's own load, so grip falls with gravity. Rolling drag 0.07.
- Motors governed to 3.6 m/s (13 km/h) on the level; gravity can take it faster downhill.
  Four-wheel steering, softened with speed.
- Eight hull points keep the chassis out of the ground, so it can roll over; R rights it.
- Air time: no wheel or hull contact. Landing reports time, distance and peak height.
- Dust: points thrown off the wheels follow pure parabolas under lunar gravity and stop where they land.

## Ground

- 840 m square at 1.25 m: rolling noise, ~1,500 craters with a power-law size spread (bowl + raised rim;
  fresh rims drop away steeply inside, which launches the rover), five fresh ones placed near the start.
- Rocks are bumps the wheels feel, under instanced rock meshes.
- Beyond, NASA's 250 m terrain model of the site (64 km), with lunar curvature, for the real mountains.

## Detail and extras (v4.32)

- **Fine patch**: a 96 m square at 0.4 m follows the rover (rebuilt when it strays 14 m from the centre),
  carrying `microRaw`: soil grain plus craterlets 0.25–1.5 m across on a hashed 3 m grid. The wheels feel it:
  `ground()` adds the same relief, faded to zero at the patch edge. The coarse ground is discarded under it
  (`uPatch` in a patched shader) and the patch draws with a polygon offset.
- **Look**: a tiling normal map of pits and clods; fresh craters are brighter on their floors and rims
  (vertex colors from each crater's freshness); fresh craters over 4 m have blocks thrown out round them.
- **Tracks**: a ribbon per wheel with a chevron tread, 0.23 m wide, laid every 0.25 m while the wheel touches;
  after a jump, two transparent joins bridge the gap. 1,400 points per wheel, oldest half dropped when full.
- **Earth**: 54° up at azimuth 240° (from the site's selenographic position, ignoring libration), 1.9° across,
  lit by the same Sun so its phase follows the Sun's place.
- **Cameras**: Chase, Wide, Seat (rides with the rover at the driver's position).
- **Records**: air time, distance and height in localStorage `lrv-records`; tumbling in the air is reported as a
  half or full roll.

## Route, speed and dust (v4.51)

- **The real drives**: dotted lines, one dot every 3 m, in the 3D viewer's colors (Drive 1 cream, 2 orange,
  3 blue). Stops are Haase et al. 2019's surveyed positions, in metres east and south of the lander (the same
  table as `src/spacecraft.js`); between stops a Catmull-Rom line follows the general route. Only the parts
  near the lander fall in the square: each drive's start and its way home.
- **Speed**: Real caps the motors at 5 m/s (18 km/h, Cernan's Apollo 17 record; about 17 km/h on the flat),
  Double at 11.2 m/s with more grip and motor force (`lrv-speed`). Top speed on the ground is a record per mode
  (`v`, `v2` in `lrv-records`), announced when the run slows below 70% of its peak.
- **Dust**: soft round sprites, 4 cm.

## The third drive (v4.52)

- The drivable square is 1.8 km across (`HALF` 900 at 2.5 m, centred at `CX`, `CZ`) and holds all of Drive 3
  at half scale: one game metre is `SQ` = 2 m of the Moon, heights × `SV` = 0.75 (slopes 1.5× real).
- Its base is NASA's terrain model (`demGame`: Catmull-Rom between the 250 m cells, with the Moon's curvature),
  loaded before the ground is built; noise and ~6,900 game-size craters ride on it, faded out over the last 40 m
  so the edge meets the terrain rings exactly.
- Rings outside it, same model and same soil material: 8 km at 25 m, then 32 km at 80 m, each discarded where the
  next one in is drawn.
- Only Drive 3 is drawn (blue dots, 3 m apart, never under 3 px on screen); the speed record counts within 8 m of it.

## Free roam, quarter scale, crashes (v4.55)

- Quarter scale across (`SQ` 4), heights × `SV` 0.4 (slopes 1.6× real); the square is 940 m (`HALF` 470 at 1.6 m),
  ~2,000 craters and ~1,150 rocks; terrain rings 5 km at 20 m and 16 km at 50 m. The briefing says the real drives
  were four times as long.
- Free roam first: no route shown. A blue ring at stop 8 (`OBJ`) with an on-screen marker and its distance; driving
  into it starts the speed record attempt and shows the course, the third drive's run home from stop 8 past Van Serg
  (stop 9) to the lander. Top speed counts only on it.
- Crashes: a roof impact over 3.5 m/s, or tumbling upside down above 4 m/s, hides the rover and throws eight pieces
  (wheels, panels, a seat, the dish, a battery, a fender) that arc and bounce under lunar gravity, with a burst of dust;
  3.5 s later a new rover stands where it last drove upright (sampled each second).

## Time trial (v4.56)

- The speed record attempt is now a timed loop of the whole third drive. A faint ring 46 m up the route from the start
  (`OBJ`) starts the clock and shows the dotted loop; stops 6, 8 and 9 (`CPS`, within 14 m) must be passed in order,
  the next one marked small on screen with its distance; back through the ring stops it. Best lap per speed setting
  (`lap`, `lap2` in `lrv-records`) and the lap's top speed on the ground (`v`, `v2`). Leave the ring before it can
  start again.
- Straying (v4.57): more than 20 m from the line warns, more than 35 m ends the attempt; the clock clears and the
  line fades out over 1.5 s (it fades in the same way when the clock starts). The line is faint: 0.3 m dots at 45%
  opacity, never under 2 px.

## Turning wheels (v4.58)

- The model is a scan with the wheels fused in. `rigWheels()` finds them on load: points below the hubs at each
  corner give each wheel's centre (one radius for all four, the widest cluster's: 0.42 m), and every triangle wholly
  inside a wheel's cylinder is cut into its own mesh under a steer group (Y, from `car.steer`) and a spin group
  (Z, from each wheel's `spin` in the physics). If the clusters are not found the model is left whole.

v4.59: the wheel rig fits each wheel's circle to the lower half of its tread (width at each height) and trims the cylinder to the tread's width, so the fenders, a few centimetres above the tire and overhanging its inboard side, stay on the body.

v4.60: the wheel cut reaches 4 cm past the tread on the outboard side so the hub discs spin too; steering slews at STEER_RATE (0.3 rad/s at the wheel, an estimate) whether or not the wheels touch the ground.

v4.61: reliefMap() bakes every crater, craterlet and the patch's 1.7 m lumps into a world-space normal map of the drivable square (2048 px, about 0.46 m; 1024 on Low), which lights the coarse ground. It is injected before three.js builds the grain normal map's tangent frame, since the normal-map chunk overwrites `normal`. The fine patch and ground() add craterFine(): the true crater shapes in place of the grid's bilinear ones, faded out with the patch's edge so it still meets the coarse ground.

v4.62: landing dust. step() times each wheel out of contact (wl.off); touching down after more than 0.12 s records the downward speed (wl.hit), and kick() turns it into a ring of up to 260 grains in a separate, coarser point pool (puff, size 0.085, lighter grey).

v4.63: buildDebris() runs after rigWheels(): each wheel's spin group becomes one piece, and the rest of the model is cut by triangle centroid into a 4 × 2 × 2 grid over the chassis, with cloned materials so the wreck can fade (after 10 s, over 1.5 s) without touching the respawned rover. The lunar module collides as a 2.2 m vertical cylinder plus spheres for its footpads (0.5 m, 4.1 m out along each axis) and legs, each tested against the chassis box in step().
