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

v4.64: the unloading intro. buildSections() cuts the scanned model into aft, center and forward chassis groups hinged at x = -0.55 and +0.45 (y -0.4), with each wheel's steer group attached to its section; foldPose() folds them over the center and tucks the wheels. stepIntro() tilts the package out about the bottom of the bay in Quadrant I (between the forward leg, under the hatch, and the next leg), unfolds aft then forward, then blends onto the pose the drive starts from, 4 m out from the lander. The side of the ladder the bay sat on was not confirmed from a primary source, so the captions name only Quadrant I.

v4.65: buildSections() also splits off everything above the chassis deck (centroid y > 0.05) as SEC.kit, hidden while stowed and shown after set-down (seats and console first, then the mast-top kit). The end sections now fold under the center (away from the lander). The hinge is 2.78 m out along the Quadrant I diagonal: measured, the descent stage face there is 2.11 m out from 1.25 m up, and the package's nearest point stays at 2.20 m or more through the unfold.

v4.66: splitBoulder() builds Tracy's Rock from five copies of one rough, squared-off block (an icosphere pushed through a superellipsoid and fbm), each cut flat along its cracks (planes) and pushed apart, bedded on the local slope 21 m west of stop 6 (the slope there is about 34° in the game, so it sits along the contour, not upslope). Collision: a row of upright cylinders per piece, in step() beside the lander's. place() now aligns the rover with the large-scale ground normal.

v4.67: the kit above the deck is cut into 0.45 m cells (33 on this model), each its own group pivoted at its middle, revealed in order from the deck up and left to right, about 0.08 s apart, scaling in with an ease-out-back.

v4.68: SITES (lander, Tracy's Rock, Van Serg) are projected each frame as buttons within 320 m and open #sitecard (pausing the drive). Van Serg: a crater of R 50 m added after all generated craters and rocks, with its own seeded blocks, so the rest of the terrain is unchanged. Tracy's Rock: IcosahedronGeometry(1, 5) merged to indexed (smooth normals, shaped once per point), vertex colors (rockColors), and rockMaterial(): a 256 px tiling height/normal texture (rockSurface) applied triplanar by world position at 1.7 m and 0.45 m, darkening pits. The ramp (SLAB): slabRel(u, v) defines a tilted slab with a ragged outline over the hillside; it builds the mesh and, through slabAt() in ground(), the surface the wheels drive, so the two match. Tested: off the lip the rover flies about 4 m up for 1.2 s; driving into its side stops the rover without a launch.

v4.69: steering limit dmax = min(0.42, atan(1.15 · 1.3 · MU · G / v²)) on horizontal speed, STEER_RATE 0.42 rad/s; route line rests at op 0.65 while roaming; breakApart(hit) scales throw, spin and dust by k = 0.12 to 1 over 3.5 to 10.5 m/s. Unloading: tilt by tape pulls with pauses, sections and wheels unfold with an ease-out-back snap, the tilt is held at or above the angle at which the rear wheels touch (1.48 sin φ − 0.38 cos φ = −lift) while the hinge is lowered, then the rover is pulled 0.77 m clear.

v4.71: SEC hinges at x = -0.8 / +0.7, fold line y 0.05 (above it is the kit), pivot at the chassis bottom (y -0.4); triangles within 0.56 m of a wheel (outboard, below the kit) go with that wheel's section. foldPose folds both ends π over the center and lays each wheel flat under its section. Unloading timed to the Apollo 15 account (aft at 40 to 50°, forward from 73° as the rover moves out, second tape lowers the front), with a clearance pass that lifts the rover by its lowest sampled point. craterTile(): 512 px tiling crater slopes and tone, applied to the far rings and faded into the square's last 60 m, weaker where the ground slopes steeply. Crash only when the top hull meets the ground (CRASH.topDown). Debris: wheels, four kit pieces, the chassis in three at its hinges or one for a gentle roll. Speed SPD 1 to 3 (Triple: 15 m/s, MU 1.0, unlocked by any completed lap).

v4.73: after the kit appears, BACK (T 27.4 to 32.4) reverses the rover along a path built in startIntro: heading ψ along the reversing distance with dψ/ds = κ rising and falling as sin² (at most 0.36), the total turn found by passes so the end pose points at the ring (OBJ); car.steer = atan(1.15 κ), wheels spin backward, camera rises to the side away from the lander, then settles to the chase pose. INTRO.end is that final pose. Parking hold: place() sets parked; while parked each tire is held by a spring (30000) and damper (12000) on its own slip, capped by friction; the first throttle or steering input clears it. rigWheels leaves triangles whose texture is fender orange (r − b > 60, r > 90) on the body.

v4.74: breakApart(hit), k = (hit − 3.5) / 8 clamped. The chassis is one body (c1, with c0 and c2 on pivots at the hinges, bent 0.08 + 0.4k rad about z); wheels come off with probability 0.1 + 0.45k, kit pieces 0.05 + 0.4k, the rest stay on askew; an end tears off only above k 0.85. Velocities are the rover's own at each point (v + ω × r) plus a small pop. stepDebris: per-unit-mass rigid body at up to 200 Hz, contact points from each part's box corners (20 rim points for a loose wheel), spring 9600/n and damper 240/n per point (penetration capped at 8 cm), friction 0.8 with a viscous cap, box inertia, rest after 0.6 s still. Pieces are lifted out of the ground at spawn. Pieces do not collide with each other or with the lander.

v4.75: ringMesh materials get customProgramCacheKey 'ring' + hole (three.js keys programs by onBeforeCompile.toString(), so the outer ring had reused the inner ring's 470 m discard). ringSurf(x, z) is the inner ring as drawn (its triangulation, −0.15 m); buildGround blends HB from it to demGame over the 40 m edge band, and reliefMap blends its normals there toward demGame's ±10 m slope. craterField takes nw, a GLSL weight on its relief; on the square it is applied before grainFade (which consumed '#include <normal_fragment_maps>') and fades in over the last 80 m. unlocked3() is true for now. Test hook: window.__lrv.cam fixes the camera position (with look).

v4.76: OBJ.live (set at the end of the unloading, or on Go without it) gates the route line; the ring is hidden during the intro. Entering the ring calls startBrief(): running = false, body.briefing shows #cine, stepBrief() runs captions from BRIEF.lines and starts RUN at the "Go" line. Sources: Guinness World Records, lunar speed record (18 km/h, Cernan, Apollo 17); PDS Apollo 17 mission document (EVA-3 traverse 12.1 km).

v4.78: tracks were never visible: the ribbon index faced down (culled, FrontSide) and sat 1.2 cm over ground(), under the patch's triangles. Now the index is wound up, trackMat uses flatShading, and drawnH(x, z) gives the patch mesh's own triangle height (groundBase outside it); the tread edges sit 2 cm over max(edge, center). Tread texture softened.

v4.79: crash camera (frame): while CRASH.on, follow the piece marked main (the chassis), D 8 → 7 m back and H 2.5 → 20.5 m up over ss(0, 2.2, CRASH.t); respawn at 4.5 s. Replay: record() keeps [simT, p, q, steer, spins] for 20 s; landed() → offerReplay(a) if t ≥ 1.5 s or d ≥ 12 m and the takeoff-to-landing segment passes within 1.15 R of a crater (R ≥ 1.5 m); startReplay pauses (running = false), body.replay, plays HIST at 0.55× from t0 − 1.2 to t1 + 1.8 with a fixed camera 9–30 m to the side away from the crater center, 1.3 m up, fov narrowed to frame about 14 m.

v4.81: tracks use WHEEL_PARTS[k].c (hub) and .hw (tire half-width). SLABS replaces SLAB: buildSlab(S, mat, tone) adds a slab (x, z, c, s, L, W, H) to SLABS and draws it; slabAt takes the highest. Tracy's fifth piece H 0.7; the ramp sits on RAMP_CRATER (the generated crater nearest 677.6, −699.9, R 7.3), lip R + 1 short of its center along the route's 0.366 rad heading, L 10, H 1.5. RUN.save (on the line, upright, grounded, every ~1 s) and REJOIN / rejoin() put you back after "time trial over". Van Serg card: station 9 report and ALSJ.

v4.82: HALF 545, CX 298 (was 470, 373). Crater and rock generation keeps CX0/CZ0/H0 = 373/−375/470 so the old terrain is unchanged; rng(2112) fills the new strip. SHORTY {x −120, z 10, R 55, depth 14} with rng(74) rim blocks; orangeAt(x, z) tints the vertex colors of the coarse ground and the fine patch (tintOrange). Fixed starter crater (−92, −40) moved to (−40, −75).

v4.83: SITES entries with kind 'find' are discovery pins (.site.find, label) opening the same sheet; any entry may carry img (img/lrv/…) and cap, drawn as a figure only if the image loads. siteMarks: camera.updateMatrixWorld() first; opacity = ss(far, 0.55·far, d) · ss(0.5, 0.28, aim), far 280 (sites) or 150 (finds); always on within 35 m.

v4.84: SITE_IMGS maps a card's name to [file, caption] pairs (lrv/img/, NASA photographs); the first leads the card, the rest follow the text. Listed in OFFLINE3D.

v4.86: MAP (trail in localStorage lrv-trail, opened samples in lrv-found), reliefCanvas() from groundBase, drawMap(canvas, cx, cz, span, big), mapTick each running frame (minimap redrawn every 0.2 s). Names: MAP_NAMES, MAP_EDGE.

v4.89: crew rag dolls. buildCrew tags each vertex with a segment (0 torso, 1-2 thighs, 3-4 shins, 5-6 arms, 7 backpack) and fills CREW_SEG (centers, sizes) and CREW_JOINTS. breakApart makes 7 THREE.Bones as debris pieces, one SkinnedMesh per suit part (CRASH.extra), and soft joints (CRASH.joints, stepJoints at ~200 Hz). The backpack detaches half the time as its own piece.

v4.90: crew rig. buildCrew keeps the scan's T-pose arms and skins the suit to 10 bones (segments 0 torso, 1-2 thighs, 3-4 shins, 5-6 upper arms, 7 backpack, 8-9 forearms) with blended weights at waist, knees, shoulders, elbows. Bones are flat children of the seat holder, origins at CREW_SEG centers, inverses from crewInverses() (the backpack aliases the torso bone until it tears off). poseCrew: torso lean about the hips, two-bone arm IK to the grips (ARM.S/E/H, HAND_CTRL). stepCrew: seat acceleration from car.v/car.w, felt gravity in the crew frame, damped torso pendulum (CREW_P) and seat cushion/belt; FUN = the rare hands-up on jumps over 1 s. handController() adds the T-handle before the sections are cut.

v4.91: Shorty at (-158, 62); ORANGE lists the two rim patches (angle, distance in radii, spreads, strength). Speed in localStorage lrv-spd (default 2).

v4.92: menu (#menu: m-resume, m-trial, m-lander, m-objects) and settings (#settings: .spd .cam .det, set-rec two taps). openSheet/closeSheets pause and restore running; toDrive() ends the intro, a briefing, a wreck or a run before placing.

v4.93: HALF 600, CX 243 (grown west). HOME: at 50 m from the edge, homeStep() drives toward the LM (or the map middle past 500 m) with body.home letterbox captions, until 100 m inside or 30 s. buildGround levels 11 m round LM to the mean within 5.5 m. foilLM(): box-projected UVs and a canvas foil on blinn1/9 (amber) and blinn4 (silver, bump only). Hands up: twist sd*pi/4 on upper arm and forearm.

v4.94: rocks have a customDepthMaterial that discards below local y 0.56 (the buried part). foilLM maps each triangle in its own face plane (toNonIndexed, world space); panel canvas on blinn3/4/7.

v4.95: HOME triggers at edge < 40 + 4 v, holds v0, turns heading and velocity together at up to 0.9 rad/s, ends when within 0.4 rad of the LM bearing (8 s cap). Foil canvas 512, tile 1.8 m, per-face offset from the face normal; panel texture also on blinn2/10 and initialShading.

v4.96: foilLM uses lmShader (from src/spacecraft.js weather + foil): world-space crinkle cells on blinn1/9/10, weathered tone on the cabin (flat shaded), legs and dark parts. No UVs, no canvas textures.

v4.97: suitMaterial() (folds, tone, dust patches from the rest position, vRp) and visorMaterial() (gold metal with a small PMREM sky/ground map); the debris clones keep the suit shader.

v4.98: attribute sp (standing position, before the seat bend) drives the suit details in suitMaterial; uCmdr from userData.cmdr (Cernan gets his own materials, kept in holder.userData.parts so the rag doll keeps them).

v4.99: suitMaterial: the map multiplies in only where it differs from its plain cloth color (uRef, measured from the picture); folds(vSp) gives relief, valley depth and softness; bumpN perturbs the normal from screen derivatives (follows the skinned pose).

v5.01: CREW_K 0.92 scales the built crew (geometry, CREW_SEG, CREW_JOINTS, ARM). CREW_P adds tau (felt-gravity lag), fid (fidget), look, ph, bal (upright balance), glance (into a slide). st.yaw: shoulder turn, applied after the lean in poseCrew.

v5.04: prepSuit raises the arms by TH (15°) about ROT, selecting arm points along the model's own slant ANG (45°). buildCrew picks the arm by AX (axis from ARM.S toward ARM.H): armAx gives [along, off], armAt the test; the elbow blend at AX.le.

v5.05: EARTH_SKY (from tools/earth-sky.mjs) places and turns Earth; models/earth-bm.jpg (Blue Marble, 1024 x 512) with drawn clouds. pov 3 = Low; POV_ORDER cycles chase, low, wide, seat; seat look from ORB.yaw/pitch. CRASH.cam picks one of three crash shots per crash (CRASH.id).

v5.06: buildGround fits a plane (LM.plane) over 14 m and blends toward it within 22 m; indexRocks clears 7 m round LM; the LM is tilted to its four pads and set by its lowest point.

v5.08: jointLimit/limitJoint (hinge limits as hard stops, also after each debris substep), brace() (arms toward the ground while tumbling, first 4 s). SAMPLE/startSample/stepSample: the passenger walk-out with st.legs [thigh, knee] per side (LEGJ), the scoop. rockView: three.js viewer of models/sample-76535.glb in the card (tools/sample-obj2gltf.py, sample-simplify.mjs). Rocks may carry bury (default 0.62).

v5.11: deckContacts() (crash pieces vs the chassis deck box M.deck), seat-belt joints to the chassis when k < 0.55 (M.inv 0.03), brace() 260 per rad with relative damping from t = 0, wheel springs scaled by ss(0.2, 0.55, up.y), tipping torque past 70°, dmax at least 0.14 rad, yaw assist toward -v tan(steer) / 1.15.

v5.13: edgeDist()/edgePt() define the mission area (superellipse p=6 minus wob(θ) = 40 + 18 sin(3θ+5) + 12 sin(5θ) + 7 sin(8θ+4), centered on CX, CZ). homeStep(): #edgewarn countdown when time to the takeover line < 5 s; takeover line = min(50, 15 + vOut²/2.4); Cernan brakes straight (throttle −1) above 4 m/s, then turns at walking pace with full steering; hands back when pointed and moving inward. The square clamp (HALF − 12) now only zeroes the outward velocity. drawMap draws the boundary.

v5.14: wheel ground force along normalAt (not the chassis up); bump stop on rebound min(BUMP_OUT 1500, BUMP_K·BUMP_RB·(x−REST)); rebound damping C_REB 1600 (compression C_DAMP 620); frame contact on separation max(0, min(2500, 9000·pen) − 3500·vn); tip-over push from up.y < 0.6. Dust: softDot gaussian falloff, spray ≤5 grains/wheel/frame at size 0.032 and opacity 0.32, landing ring ≤110 at size 0.06 and opacity 0.3.

v5.15: STOPS + sampleStops(dt): stopped (< 0.4 m/s for 0.8 s) within 30 m of BOULDER or within 22 m of the Van Serg (R 50) or Shorty rim starts startSample on that station's find, once per visit, with a toast on arrival; skipped during a run, recall, crash, intro, briefing or replay. models/sample-79115.glb from NASA Astromaterials 3D (tools/sample-obj2gltf.py takes the sample name; simplify ratio 0.1). rockView(url, cap): card-width canvas (#sitecard.wide), full-screen toggle, pinch and wheel zoom.

v5.16: SCH + schmitt(h, dt, yawT, drift, jolt, sp): Schmitt's riding acts (point once per station within 150 m in view, photo with both hands to the chest when under 1.5 m/s every 12-24 s, eyes on the station ahead), blended into st.hands by SCH.w; cancelled by a jolt > 5 or FUN. stepSample: lope() gait (5.6 rad/s phase, 0.11 m float, knee give on landing, lean 0.14), insp (5.0-6.2 s) raises the scoop to the visor; card at 5.5 s.

v5.17: CTX/ctxOpen (contextmenu, or a 600 ms still touch press; groundAt marches the view ray to the ground; the spot is kept 4-20 m from the rover). FILM/startFilm/stepFilm: phases out (rover frame) -> walk (scene.attach, world frame, lopeLegs at 2 m/s) -> film (faces the rover, camera to the chest) -> playFilm (REPLAY.film: true speed, handheld lookAt, REPLAY.cam at his eye) -> wait -> board (to OUT1, rover.attach) -> in. Dodge: closest approach under 2.4 m within 1.5 s -> a 2.2 m sideways leap in 0.9 s. Skipped by breakApart's crew ragdolls; FILM.crash plays the film after the reset.

v5.18: grandPrix() opens #gpsheet (lrv/grand-prix.mp4, H.264 640x480 from the Commons 480p transcode of Ap16 rover.ogv; poster grand-prix.jpg). Dodge: trigger at closest approach < 2.6 m within 2 s; crouch 0-0.22 s, hop 1 (66%, 0.36 m) 0.22-0.94 s, landing give, hop 2 (34%, 0.14 m) 1.12-1.62 s, settle to 1.95 s; st.lx leans into the push; turn rate 4.5 rad/s.

v5.19: stepSample(h, dt, S) takes a state object (seat, out, spot, faceOut, tool, card, done); SAMPLE is the default. DIG/startDig: both crew out (Cernan SEAT0/OUT0/SPOT0 with DIG.tongs, Schmitt with the scoop 0.5 s behind); digResult: 25% a card from EXTRA (unseen first, kept in localStorage lrv-extra; 10% once all seen), else a NOTHING toast.

v5.20: GP.known (set by startFilm) gates the right-click Grand Prix item; endReplay of his film offers #btn-gp for 8 s (GP.offerT); #m-gp stays in the menu.

v5.21: film phase 30 s with #filmcd countdown; bestClip(t0, t1, crashT) slides a 15 s window over HIST scoring speed/5 + 3·air + 0.8·tumble + 0.8·nearness (25 m) + 6 within 2 s of a wreck; HIST keeps 40 s.

v5.22: deckContacts: per-point clear flag (only points that have been outside the deck box are pushed), momentum shared with the chassis by inv; belted crew parts noDeck; chassis inv 0.03 always; belt anchor la at the torso's hip after the lift out of the ground.

v5.23: RAMP_PAIR (the double crater near 292,-765 and 312,-752). Kicker slabs: S.th (final angle), S.Lt (curved length), S.g0 (level base height), optional S.round; slabRel ramp = tan(th)·(u²/2Lt, then straight); smoother top and tidier edges when S.th. Ramp at heading 4.5°, lip 2.5 m before the first point inside either crater, L 22 (Lt 14 + 8), W 7, th 23°.

v5.27: hop(W, dt, dx, dz, want, turn, gait) / hopper(x, z): ballistic stride under G (stance STANCE 0.24 s, push changes velocity by at most 0.75 m/s, flight 0.25 + 0.2 v s, kangaroo 0.45 + 0.2 v; gaits 'lope', 'skip' (Cernan, one foot leading), 'kanga' (down slopes steeper than ~8°, and jumps); W.hy is the root height: the hips follow the arc, boots never below ground). soleY() now takes the lower boot. FILM's walk and board use hop() (FILM.W); startFilm(x, z, go) with go = "Send Schmitt here" (up to 150 m, beacon() marker flag and pulsing ring, ends in 'wait'). FOOT/startFoot/stepFoot/footBoard: "Leave the rover on foot": both climb out (footClimb), the player moves Cernan (FOOT.f/FOOT.s from throttle/steer, max 2.2 m/s, back 0.4 m/s, turn 1.5 rad/s, Space or #btn-jump: 1.15 m/s up), Schmitt holds a slot 2.2 m right and 1 m back of Cernan (Cernan's velocity plus 0.9 x the gap, capped 2.8 m/s), the chase camera follows Cernan at 0.7 x distance, #air shows each hop; 'home' hops both to OUT0/OUT1, then aboard.

v5.28: armHands(W, st, K): hands forward and out, counter-swing from W.sw, jump raise, vertical lag spring W.ho/W.hv (k 70, c 5, kicked at push-off and landing). footK() = VMAX / 5 scales on-foot speeds, the per-push velocity change, turn rate (sqrt), Schmitt's cap and Cernan's jump. Schmitt's follow: Cernan's velocity plus the gap over one stride (Tp = 0.9 + 0.2 v).

v5.29: hop() push limit when speeding up: min(0.75 footK(), 0.3 + 0.35 v); slowing keeps 0.75 footK().

v5.30: bootDust(W, land) into its own Points (BN 900, bootTick in stepCrew): push-off kick back, landing ring scaled by W.imp. rimAt(x, z, vx, vz): via CRATER_GRID, R >= 1.5, within max(0.8, 0.12 R) of the rim, moving across it (radial share > 0.45); hop() then multiplies speed by up to 1.35 and stretches the flight to at least 0.9 + 0.3 v, once per crater (W.rim).

v5.31: climbPose(h, seat, out, faceOut, u) for every climb (footClimb, FILM out/in over 1.5 s, stepSample's T < 1.1 and 7.8-9): swivel (0-0.35), hips to an edge point (-0.52, seat.y, ±0.8) lifted 13 cm over the seat frame with legs hanging (0.3-0.7), stand and step to OUT (0.65-1). roverClear(W): ROVER_BOX (frame 1.6 x 0.62 half-sizes, wheels 0.45 x 0.16) plus 0.3 m body, skipped above car.p.y + 0.55; aroundRover() routes boarding round the nose or tail. slopeLanding(W): uphill angle th along the motion; speed x cos^2 th; into = v sin th + 0.3 imp > sqrt(footK()) with th > 0.38 rad trips (W.fall, fallStep: topple 0.95 s, slide, kneel, up by 3.8 s; W.pitch, W.rx/W.rz; rotation order YXZ while on foot). Suits kept 0.65 m apart.

v5.34: step(): lateral tire force applied at the contact point raised 0.25 m along the chassis up (roll center); grip limit lim = MU Fn max(0.6, 1 - 0.22 (Fn / Fn0 - 1)), Fn0 = MASS G / 4. Test: 6 spots x 2 directions x throttle on/off, 6 s straight then 5 s full lock: rollovers 0/24, 0/24, 2/24 at speeds 1/2/3 (were 0, 1, 8).

v5.38: layTracks: gap when a wheel moves > 1.5 m between frames or while CRASH.on. deckContacts: belted crew (noDeck) no longer skipped; their points start un-clear; legs (piece.leg, bones 1-4) collide only with the floor pan (lo.y + 0.12); a piece on the ground (p.gnd, set in stepDebris) moves the chassis 80% of the push-out and takes the velocity correction as if 4x lighter than itself. Test (6 spots x 2 directions, rolled 2.3 rad onto the roof, breakApart(4.5), 4 s): frames with crew points >5 cm inside 2501/2520 -> 29/2520, deepest 0.22 -> 0.09 m.

v5.39: wheels carry wl.om (set to vf / WHEEL_R while loaded; otherwise eased toward throttle x VMAX / WHEEL_R at 1.5/s, or coasting at 0.25/s); wl.spin += om h every substep. rigWheels second pass: a non-orange triangle with a corner inside a cylinder joins it if all corners lie within 1.07 r above the hub (1.025 r below) and the z range +-1 cm. Ramp: TH 22, LT 12, RL 18, W 7; slabRel for th slabs: outline 0.78 + 0.38 fbm, top roughness 0.3 + 0.9 ss(1.2, 2.6, |v|) plus a fine fbm toward the edges, shoulders pow(ss(hw + 1.6, hw - 0.6, |v|), 0.7), sides to -3.5 m. Fifth Tracy's Rock slab removed. rockMaterial: GLSL 3D value-noise fbm (rV, rF); rBump knobs and pits as a bump; the tiled texture blended with a turned copy by broad noise. Jump test (start 32 m before the ramp at 10.5 / 14 m/s, three lateral offsets): air 7.2-7.6 s at speed 2, 9.0-9.2 s at speed 3; one of six runs (2x, 0.6 m right) rolls after landing.

v5.41: slabRel(S, u, v, gl) takes the local ground relative to the slab base; outside the outline it returns min(gl, top) - 0.5 (mesh and slabAt). Ramp side falloff width 1.0 + 0.45 top, outline fbm at 0.18 per m. TH 22, LT 10, RL 16. Fourteen decorative chips (no collision) 4.2-7.7 m either side, 1 to L - 0.5 m along. Jump test: 7.1-7.5 s at speed 2, 8.4-8.9 s at speed 3, all upright.
