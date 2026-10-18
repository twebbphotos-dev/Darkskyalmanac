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
