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
