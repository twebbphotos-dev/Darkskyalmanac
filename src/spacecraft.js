/* NASA spacecraft in 3D — one viewer, several craft, each in its own setting.
   Models: NASA 3D Resources (NASA/JPL-Caltech, NASA/GSFC). Bundled into spacecraft.bundle.js. */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree; THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree; THREE.Mesh.prototype.raycast = acceleratedRaycast;

const $ = id => document.getElementById(id);
const D2R = Math.PI / 180;

/* ───────────── The craft ───────────── */
// Matched Hubble and Webb pictures of the same patch of sky, shown on both telescopes' tabs
const SAMESKY = '<div class="zcl-psec-label sc-cmph">Hubble and Webb: the Same Sky</div><p class="sc-cmpnote sc-cmpintro">Drag across each picture to wipe between the two telescopes. Hubble sees mostly visible light with a 2.4 m mirror. Webb sees infrared with a 6.5 m mirror, so it looks through dust and farther back in time. The spikes on Webb’s stars are its signature; they come from the hexagonal segments of its mirror.</p><div class="sc-wipes"><figure class="sc-fig wide mid"><div class="sc-wipe" style="aspect-ratio:1280 / 1335"><img src="img/cmp/pillars-webb.jpg" alt="Pillars of Creation seen by Webb" loading="lazy"><img class="top" src="img/cmp/pillars-hubble.jpg" alt="Pillars of Creation seen by Hubble" loading="lazy"><i></i><span class="tag l">Hubble</span><span class="tag r">Webb</span><input type="range" min="0" max="100" value="50" aria-label="Slide to compare Hubble and Webb"></div><figcaption><b>Pillars of Creation, Eagle Nebula.</b> Columns of cold gas and dust 6,500 light-years away, in a nebula you can find with a small telescope on a summer night. The tallest is about 4 light-years high. To Hubble they are solid and dark, lit from outside by nearby stars. Webb sees through them: the dust thins to a haze, thousands of hidden stars appear, and the red glow at the tips marks stars still being born. The plain corners are simply where Webb’s picture ends.</figcaption></figure><figure class="sc-fig wide"><div class="sc-wipe" style="aspect-ratio:1400 / 811"><img src="img/cmp/carina-webb.jpg" alt="Cosmic Cliffs, Carina Nebula seen by Webb" loading="lazy"><img class="top" src="img/cmp/carina-hubble.jpg" alt="Cosmic Cliffs, Carina Nebula seen by Hubble" loading="lazy"><i></i><span class="tag l">Hubble</span><span class="tag r">Webb</span><input type="range" min="0" max="100" value="50" aria-label="Slide to compare Hubble and Webb"></div><figcaption><b>Cosmic Cliffs, Carina Nebula.</b> The edge of a cloud where stars are forming, 7,600 light-years away; the tallest peaks stand about 7 light-years high. Hubble caught one strip of it in visible light. Webb’s infrared view looks into the dust and finds hundreds of young stars Hubble could not see.</figcaption></figure><figure class="sc-fig "><div class="sc-wipe" style="aspect-ratio:1000 / 931"><img src="img/cmp/southern-ring-webb.jpg" alt="Southern Ring Nebula seen by Webb" loading="lazy"><img class="top" src="img/cmp/southern-ring-hubble.jpg" alt="Southern Ring Nebula seen by Hubble" loading="lazy"><i></i><span class="tag l">Hubble</span><span class="tag r">Webb</span><input type="range" min="0" max="100" value="50" aria-label="Slide to compare Hubble and Webb"></div><figcaption><b>Southern Ring Nebula.</b> A dying star puffing its outer layers into space, about 2,500 light-years away — the same kind of object as the Ring and Dumbbell nebulae in a backyard telescope. Webb picks out the thin shells of gas the star threw off one after another.</figcaption></figure><figure class="sc-fig "><div class="sc-wipe" style="aspect-ratio:1000 / 1021"><img src="img/cmp/deep-field-webb.jpg" alt="Galaxy cluster SMACS 0723 seen by Webb" loading="lazy"><img class="top" src="img/cmp/deep-field-hubble.jpg" alt="Galaxy cluster SMACS 0723 seen by Hubble" loading="lazy"><i></i><span class="tag l">Hubble</span><span class="tag r">Webb</span><input type="range" min="0" max="100" value="50" aria-label="Slide to compare Hubble and Webb"></div><figcaption><b>Galaxy cluster SMACS 0723.</b> A patch of sky the size of a grain of sand at arm’s length. Hubble stared at it for weeks; Webb went deeper in half a day. The stretched red arcs are galaxies far behind the cluster, their light bent by its gravity after travelling for over 13 billion years.</figcaption></figure></div><p class="sc-cmpnote">Images: NASA, ESA, CSA, STScI. Pillars of Creation pair: ESA/Webb (J. DePasquale, A. Koekemoer, A. Pagan, STScI) and the Hubble Heritage Team. Other matched pairs from the open-source WebbCompare project.</p>';
function wireWipes() { document.querySelectorAll('.sc-wipe').forEach(w => { const r = w.querySelector('input'), set = () => w.style.setProperty('--x', r.value + '%'); r.oninput = set; set(); }); }
const CRAFT = {
  mars2020: {
    tab: 'Perseverance', tabS: 'Mars', title: 'Perseverance & Ingenuity', kicker: 'Jezero Crater, Mars · since 2021',
    lede: 'A car-sized rover searching an ancient lake bed for signs of past life — and the little helicopter it carried, which made the first powered flight on another planet. Shown here together, to scale.',
    env: 'mars', sunEl: 38, sunAz: 140, occl: .3,
    models: [{ url: 'models/perseverance.glb', anim: [0, 9], drive: { regroup: true, rock: ['rocker_L', 'rocker_R'], bog: ['bogie_L', 'bogie_R'], bar: 'diff_bar', rods: ['link_L', 'link_R'], wheels: ['wheel_FL', 'wheel_ML', 'wheel_RL', 'wheel_FR', 'wheel_MR', 'wheel_RR'], ww: .17, arm: /^arm(\.\d+)?Action|^turret|^hingeAction/, armT: [3.75, 9, 2.6] } },
      { url: 'models/ingenuity.glb', pos: [-2.5, 0, 2.7], rotY: 30, spin: ['rotors_01', 'rotors_02'] }],      // the helicopter stands clear of the lane the rover drives down
    views: {
      overview: { label: 'Overview', pos: [5.2, 2.6, 5.6], tgt: [-0.5, 0.7, 0.6] },
      heli: { label: 'Ingenuity', pos: [-1.3, 0.55, 4.6], tgt: [-2.5, 0.3, 2.6] },
      drive: { label: 'Suspension', pos: [4.6, 0.8, 2.3], tgt: [0.9, 0.5, 0.15], hide: true },      // no button: the camera the Drive button moves to
      mast: { label: 'Rover’s eye', pos: [-0.55, 1.98, 0.93], tgt: [-2.5, 0.25, 2.7], look: true, deploy: true },
      above: { label: 'From above', short: 'Above', pos: [-6200, 58000, 17500], tgt: [-6200, 0, -900], abs: true },      // centred on the rover's drives, so turning and zooming keep them in the middle
    },
    dist: [.8, 110000],
    parts: [
      // positions are given with the mast and arm deployed; a part with `node` rides along with that piece of the model
      { node: 'Cylinder002', p: [-0.52, 2.06, 0.87], name: 'Mast cameras', txt: 'The head stands 2 m above the ground. The large round window is SuperCam, which fires a laser at rocks up to 7 m away and reads the flash to tell what they’re made of — its microphone records each snap. Below it are Mastcam-Z, a pair of zoom cameras that see in 3D, with a navigation camera on either side.' },
      { node: 'turret_obj', p: [0.27, 1.9, 2.2], name: 'Robotic arm', txt: 'A 2-metre arm ending in a 45 kg turret of tools: a drill that cores chalk-sized rock samples, kept in sealed tubes for a possible return to Earth; PIXL and SHERLOC, which map a rock’s chemistry and minerals grain by grain; and WATSON, a close-up camera.' },
      { p: [-0.08, 0.76, 1.1], name: 'Hazard cameras', txt: 'Four wide-angle cameras at the front and two at the back watch for rocks, trenches and slopes so the rover can steer itself around them. They also watch the arm as it works.' },
      { p: [0.42, 1.42, -0.39], name: 'High-gain antenna', txt: 'A hexagonal antenna 30 cm across that swivels to point straight at Earth for the day’s commands. Most pictures and data go home another way — relayed through orbiters passing overhead by the black can-shaped antenna at the back.' },
      { p: [0, 1.42, -1.5], name: 'Nuclear power', txt: 'A plutonium generator at the back turns the heat of radioactive decay into about 110 watts, day and night, whatever the weather — no solar panels to cover with dust. Its spare heat keeps the rover’s insides warm.' },
      { p: [1.18, 0.32, 1.1], name: 'Wheels', txt: 'Six aluminium wheels, 52.5 cm across, on a rocker-bogie suspension that keeps all six on the ground as the rover rolls over knee-high rocks.' },
      { p: [0.84, 0.92, 0.21], name: 'Rocker-bogie suspension', txt: 'No springs. On each side a long “rocker” pivots on the body and carries the front wheel; hinged to its back end is a “bogie” carrying the other two. A bar across the deck links the two rockers so that when one tips up the other tips down, and the body rides at the average, tilting only half as much. All six wheels stay on the ground, and the rover can climb a rock as tall as its wheels. Tap “Drive” to watch it cross a 20 cm rock: every joint is worked out from where the wheels touch the ground. Shown about seven times faster than the real 4 cm a second.' },
      { p: [-2.5, 0.5, 2.7], name: 'Ingenuity', txt: 'A 1.8 kg helicopter with two 1.2 m rotors that spun in opposite directions at about 2,400 rpm to bite the thin air. It flew 72 times between April 2021 and January 2024 — planned for five. A scrap of fabric from the Wright brothers’ Flyer rides under its solar panel.' },
    ],
    cards: [['Rover mass', '1,025 kg', 'About as heavy as a small car'], ['Landed', '18 Feb 2021', 'Jezero Crater'], ['Cameras', '23', 'Counting the landing cameras'], ['Ingenuity flights', '72', 'First on 19 April 2021']],
    story: '<p>Jezero Crater held a lake about 3.5 billion years ago, fed by a river that left a delta of layered mud and sand. On Earth, that kind of place preserves traces of life well — which is why Perseverance was sent to drive up the delta and drill.</p><p>Ingenuity rode to Mars bolted under the rover’s belly. Its first hover lasted 39 seconds; by its last flight it had covered about 17 km and scouted routes ahead of the rover. A broken rotor blade ended its flying in January 2024, and it now sits where it last landed.</p><p>From above you can see the whole crater, 45 km across, much as an orbiting camera sees it: the delta fanning out where the river broke through the western rim, and the landing site at its foot. The ground is built from elevation maps measured from pairs of Mars Reconnaissance Orbiter photographs, at true height. The colored line is every drive NASA has published, one color per year: across the crater floor, up the delta and out over the western rim. Zoom in and tap a name for the milestones along the way, at least one a year: Ingenuity’s first flight, the first rock core, the strongest organic signal, the sample depot, Belva Crater, “Cheyava Falls” (a rock NASA calls its best candidate yet for a sign of ancient life, though only a lab on Earth could settle it), the climb to the rim, the first rim sample and a new distance record.</p>',
    link: { href: 'mars', txt: 'Explore Mars' }, get extra() { return ROVERS; },
  },
  curiosity: {
    tab: 'Curiosity', title: 'Curiosity', kicker: 'Gale Crater, Mars · since 2012',
    lede: 'The rover that showed Mars once had lakes and streams fit for life. More than a decade on it is still climbing Mount Sharp — and its design was reused, almost bolt for bolt, for Perseverance.',
    env: 'mars', sunEl: 38, sunAz: 140, occl: .3,
    models: [{ url: 'models/curiosity.glb', anim: [2, 10], drive: { root: '_root_p', bodies: ['body', 'Chassis'], rock: ['suspension_axel_L', 'suspension_axel_R'], bog: ['Cube_03_p', 'Cube_04_p'], bar: 'suspension_xmember', rods: ['suspension_rod_L', 'suspension_rod_R'], wheels: ['wheel_01_L', 'wheel_02_L', 'wheel_03_L', 'wheel_01_R', 'wheel_02_R', 'wheel_03_R'], ww: .2, arm: /^arm_0|^MAHLI/, armT: [2, 4, 1.1] } }],
    views: {
      overview: { label: 'Overview', pos: [4.5, 2.3, 5.1], tgt: [0, 0.95, 0.6] },
      wheel: { label: 'Wheels', pos: [3.2, 0.95, 3.0], tgt: [1.0, 0.35, 0.8] },
      drive: { label: 'Suspension', pos: [4.6, 0.8, 2.3], tgt: [0.9, 0.5, 0.15], hide: true },      // no button: the camera the Drive button moves to
      mast: { label: 'Rover’s eye', pos: [-0.52, 1.97, 0.93], tgt: [0.1, 1.25, 6], look: true, deploy: true },
    },
    parts: [
      { node: 'mast_03001', p: [-0.51, 2.06, 0.87], name: 'Mast cameras', txt: 'Behind the round window is ChemCam, which fires a laser at rocks up to 7 m away and reads the flash to tell what they’re made of. Below it are two Mastcams with fixed lenses — one wide, one telephoto — and the navigation cameras. Perseverance’s mast is the same idea with a zoom and a microphone added.' },
      { node: 'arm_05_head001', p: [0.45, 1.92, 2.2], name: 'Robotic arm', txt: 'A 2-metre arm carrying five tools: a drill, a scoop, a wire brush for dusting rocks, the MAHLI close-up camera and an X-ray instrument that reads a rock’s chemistry. The drill grinds rock to powder rather than cutting cores.' },
      { p: [0, 1.2, 0.67], name: 'Onboard labs', txt: 'Powdered rock is dropped through these inlets into two laboratories inside the body. CheMin identifies minerals with X-rays; SAM bakes samples and sniffs the gases given off — it found organic molecules in 3-billion-year-old mudstone. Perseverance has no such labs: it saves its samples for Earth.' },
      { p: [0.04, 0.74, 0.97], name: 'Hazard cameras', txt: 'Four at the front and four at the back — each a working pair plus a spare pair — watch the ground around the wheels and the reach of the arm.' },
      { node: 'antenna_HG_03', p: [0.49, 1.42, -0.3], name: 'High-gain antenna', txt: 'A steerable hexagonal antenna for talking straight to Earth. Most pictures and data go home another way — relayed through orbiters passing overhead by the can-shaped antenna at the back.' },
      { p: [0, 1.42, -1.4], name: 'Nuclear power', txt: 'The same type of plutonium generator Perseverance carries, making about 110 watts at landing. Its output slowly fades, but it has kept Curiosity working for well over a decade.' },
      { p: [1.2, 0.3, 1.1], name: 'Wheels', txt: 'Aluminium wheels 50 cm across with a skin just 0.75 mm thick. Sharp rocks have punched holes in them, which is why Perseverance got thicker, narrower wheels. The treads also stamp “JPL” in Morse code into the dust, so the rover can measure how far it has really rolled.' },
      { p: [0.8, 0.9, 0.22], name: 'Rocker-bogie suspension', txt: 'No springs. On each side a long “rocker” pivots on the body and carries the front wheel; hinged to its back end is a “bogie” carrying the other two. A bar across the deck links the two rockers so that when one tips up the other tips down, and the body rides at the average, tilting only half as much. All six wheels stay on the ground, and the rover can climb a rock as tall as its wheels. Tap “Drive” to watch it cross a 20 cm rock: every joint is worked out from where the wheels touch the ground. Shown about seven times faster than the real 4 cm a second.' },
    ],
    cards: [['Rover mass', '899 kg', '126 kg lighter than Perseverance'], ['Landed', '5 Aug 2012', 'Gale Crater · 6 Aug UTC'], ['Cameras', '17', 'Perseverance carries 23'], ['Distance driven', 'Over 35 km', 'Still climbing Mount Sharp']],
    story: '<p>Curiosity was lowered onto Mars by a rocket-powered “sky crane” in August 2012 — the first time that had been tried. Within weeks it found rounded pebbles from an ancient stream, then drilled mudstone laid down in a freshwater lake: proof that Gale Crater was once a place where microbes could have lived.</p><p>Since 2014 it has been climbing Mount Sharp, a 5 km mountain of layered rock in the middle of the crater, reading the layers like pages of Mars’s history as the planet dried out. Perseverance was sent to take the next step: to look for signs of life itself.</p>',
    link: { href: 'mars', txt: 'Explore Mars' }, get extra() { return ROVERS; },
  },
  cassini: {
    tab: 'Cassini', title: 'Cassini–Huygens', kicker: 'In orbit around Saturn · 2004 to 2017',
    lede: 'Thirteen years circling Saturn. Cassini found an ocean hidden inside the little moon Enceladus, mapped seas of liquid methane on Titan, and carried the Huygens probe that parachuted through Titan’s orange haze to its surface.',
    env: 'saturn', sunEl: 22, sunAz: 62, occl: .5, shadowR: 13,
    models: [{ url: 'models/cassini.glb', pos: [0, 1, 3] }],
    views: {
      overview: { label: 'Overview', pos: [21.5, 4.5, 11], tgt: [0, 0.3, 0.5] },
      probe: { label: 'Huygens probe', short: 'Huygens', pos: [9.5, 1.2, 7.5], tgt: [1.2, -0.2, 3] },
      dish: { label: 'Antenna', pos: [6, 9, 12], tgt: [0, 2.6, 3] },
    },
    parts: [
      { p: [1.2, 3.0, 3], name: 'High-gain antenna', txt: 'A 4-metre dish built by the Italian Space Agency. It sent every picture home — the signal took well over an hour to arrive — and doubled as the radar that mapped Titan through its haze, and as a shield when Cassini crossed the ring plane.' },
      { p: [1.85, -0.1, 3], name: 'Huygens probe', txt: 'Europe’s lander rode on Cassini’s side for seven years. On 14 January 2005 it parachuted for two and a half hours through Titan’s atmosphere and came to rest on a plain of ice pebbles, sending pictures for more than an hour.' },
      { p: [0, 2.4, -3], name: 'Magnetometer boom', txt: 'An 11-metre boom holds magnetic sensors well away from the spacecraft’s own electrical noise. In 2005 it noticed Saturn’s magnetic field bending around Enceladus — the first sign of the geysers erupting from that moon.' },
      { p: [1.05, 1.2, 4.5], name: 'Cameras', txt: 'A cluster of cameras and spectrometers bolted to the body, all looking the same way; to aim them, the whole spacecraft turned. They took about 450,000 pictures.' },
      { p: [-1.8, -1.2, 2.0], name: 'Nuclear power', txt: 'Sunlight at Saturn is a hundred times weaker than at Earth, so solar panels were out. Three plutonium generators supplied nearly 900 watts at launch.' },
      { p: [-0.62, 0.55, 3.95], name: 'Gold blankets', txt: 'The whole spacecraft is wrapped in blankets of up to two dozen layers of plastic film, each thinner than kitchen wrap and coated with aluminium; the amber outer layer gives the colour. They work like a vacuum flask, holding the electronics near room temperature while space around Saturn sits near −200 °C, and they shrugged off the Sun’s heat on the swing past Venus. They also stop grains of dust. Each one was cut and sewn by hand.' },
      { p: [0, -2.4, 3], name: 'Engines', txt: 'Two identical main engines; the second was a spare that was never needed. A 96-minute burn in July 2004 slowed Cassini enough for Saturn to capture it.' },
    ],
    cards: [['At Saturn', '13 years', 'July 2004 to September 2017'], ['Orbits', '294', 'And 127 close passes of Titan'], ['Size', '6.8 m tall', 'About as big as a school bus'], ['Launch mass', '5.7 tonnes', 'More than half of it fuel']],
    story: '<p>Cassini took seven years to reach Saturn, swinging past Venus, Earth and Jupiter to pick up speed. On Christmas Day 2004 it released Huygens, built by the European Space Agency, which landed on Titan three weeks later — still the most distant landing ever made.</p><p>In 2017, almost out of fuel, Cassini made 22 dives through the gap between Saturn and its rings, then was steered into the planet so it could never crash into Enceladus or Titan and contaminate moons that might harbour life. It sent data until the last second.</p>',
    link: { href: 'saturn', txt: 'Explore Saturn' },
    credit: '3D model: NASA 3D Resources (NASA/JPL-Caltech). Cassini–Huygens was a joint mission of NASA, the European Space Agency and the Italian Space Agency.',
  },
  lm: {
    tab: 'Lunar Module', tabS: 'Moon', title: 'Apollo Lunar Module', kicker: 'Taurus–Littrow valley, the Moon · Apollo 17, 1972',
    lede: 'The spidery craft that put twelve people on the Moon. This is Challenger, Apollo 17’s lander, standing where it touched down in December 1972. The gold lower half is still there today.',
    env: 'moon', at: 'lm', sunEl: 24, sunAz: 97, occl: .5, earth: [54, 240], dist: [3, 47000],
    models: [{ url: 'models/lm.glb', pos: [-145, 0, 39], rotY: -90, ground: -.15 }],      // hatch and ladder face west, away from the rising Sun, as the crew landed it
    views: {
      overview: { label: 'Overview', pos: [-12.5, 3.4, 10.5], tgt: [0, 3.5, 0] },
      ladder: { label: 'At the ladder', short: 'Ladder', pos: [-8.2, 1.7, 2.6], tgt: [-1.2, 3.3, 0] },
      rover: { label: 'Rover', pos: [5.5, 1.7, -4.2], tgt: [0, 1.1, 0], tabs: true, look: true, fov: 5 },
      sky: { label: 'Earth overhead', short: 'Earth', pos: [8.5, .9, -5.2], tgt: [2.5, 6.6, -1.8], look: true, fov: 62 },
      above: { label: 'From above', short: 'Above', pos: [-1500, 27000, 2900], tgt: [-1500, 0, 200], abs: true },
    },
    parts: [
      { p: [0.9, 5.9, 0.6], name: 'Ascent stage', txt: 'The crew cabin, and the only part that left the Moon. Two astronauts flew it standing up — there were no seats — in a space about the size of a small tent. To save weight its skin was thinned until, in places, it was about as thick as three sheets of kitchen foil.' },
      { p: [-1.4, 2.6, 2.15], name: 'Descent stage', txt: 'The gold is not paint: it is layers of plastic film coated with metal, wrapped on by hand to keep the fuel tanks from freezing in shadow or boiling in sunlight. This half held the landing engine, and at lift-off it became the launch pad. It is still standing here.' },
      { p: [0, 3.75, 2.75], name: 'Hatch and ladder', txt: 'The crew backed out through a square hatch less than a metre wide onto this small porch, then down nine rungs. Fixed to the ladder leg is a plaque: “Here man completed his first explorations of the Moon, December 1972.”' },
      { p: [3.95, 0.5, 0], name: 'Landing legs', txt: 'Each leg has a core of crushable aluminium honeycomb that squashed once to soak up the landing. Thin probes hung 1.7 m below the footpads; when one touched, a blue light told the crew to shut the engine off and drop the last metre.' },
      { p: [1.85, 4.95, 2.05], name: 'Thrusters', txt: 'Four clusters of four small rocket thrusters, sixteen in all, turned and nudged the lander. They were the only way to steer: with no air on the Moon, wings and rudders would do nothing.' },
      { p: [0, 6.95, 2.45], name: 'Radar and antennas', txt: 'The dish on top is the rendezvous radar, which tracked the mother ship in orbit so the two could find each other again. The steerable dish at the side kept a voice and data link with Earth.' },
      { p: [2.25, 2.3, 1.2], name: 'Rover bay', txt: 'The rover rode here, folded flat against the side of the lander. Pulling two cords swung it down and let it unfold, wheels first, onto the ground.' },
    ],
    cards: [['Height', '7 m', 'About a two-storey house'], ['Mass, fuelled', '16.4 tonnes', 'More than two-thirds of it fuel'], ['Time on the Moon', '75 hours', 'The longest Apollo stay'], ['Crew', '2', 'Flown standing, with no seats']],
    story: '<p>The Lunar Module was the first crewed craft built to fly only in space. It never had to push through air, so it has no smooth shape at all: just tanks, engines and a cabin, wrapped in foil and bolted to four legs. Every spare gram was shaved off to get it down to the surface and back.</p><p>Apollo 17’s lander, Challenger, set Eugene Cernan and Harrison Schmitt down here on 11 December 1972. Three days later the top half lifted off, using the bottom half as its launch pad, and carried them up to Ronald Evans waiting in orbit. Once they were safely across, the empty cabin was sent back down to crash into the South Massif, the mountain to the south-west, so that instruments left on the ground could record the shock. It was the last crewed landing on the Moon.</p><figure class="sc-photo"><img src="img/a17-flag.jpg" alt="An astronaut stands beside the flag on the Moon, with the lunar module and rover behind" loading="lazy"><figcaption>Harrison Schmitt at the flag, with the lander and the rover behind him. Photographed by Eugene Cernan, December 1972. NASA.</figcaption></figure>',
    link: { href: 'moon', txt: 'Explore the Moon' },
    credit: '3D model of the lander: NASA 3D Resources. Rover: “Mondfahrzeug (Lunar Rover)” by <a href="https://sketchfab.com/3d-models/mondfahrzeug-lunar-rover-acb3f8645a69493cb211a62b40d66aab" target="_blank" rel="noopener">Deutsches Museum Digital</a>, licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>, reduced in size for the web and shared under the same licence. Terrain: NASA’s Apollo 17 landing-site model (NASA 3D Resources). Stops on the three drives: Haase et al., <em>Coordinates and Maps of the Apollo 17 Landing Site</em>, 2019.',
  },
  lrv: {
    tab: 'Lunar Rover', tabS: 'Moon', title: 'Lunar Roving Vehicle', kicker: 'Taurus–Littrow valley, the Moon · Apollo 17, 1972',
    lede: 'The electric car that the last three Apollo crews unfolded from the side of their lander. This one is parked where Apollo 17 left it, on the floor of a valley walled in by mountains more than 2 km high, its tracks leading back to the lander. The mountains are the real ones, from NASA’s map of the landing site.',
    env: 'moon', sunEl: 24, sunAz: 97, occl: .3, earth: [54, 240], dist: [.8, 47000],
    models: [{ url: 'models/lrv.glb' }],
    views: {
      overview: { label: 'Overview', pos: [5.4, 2.1, -2.6], tgt: [0.1, 0.75, 0] },
      seat: { label: 'Driver’s seat', short: 'Seat', pos: [-0.62, 1.72, -0.32], tgt: [2.0, 1.25, -1.5], look: true },
      lander: { label: 'Lander', pos: [-3.2, 1.7, 1.4], tgt: [-145, 5.2, 39], look: true, fov: 9 },
      sky: { label: 'Earth overhead', short: 'Earth', pos: [0.9, 0.22, -1.45], tgt: [0.69, 0.396, -1.33], look: true, fov: 56 },      // from the ground by the driver’s side, looking up past the chassis to Earth
      above: { label: 'From above', short: 'Above', pos: [-1500, 27000, 2900], tgt: [-1500, 0, 200] },
    },
    parts: [
      { p: [1.29, 1.5, -0.43], name: 'High-gain antenna', txt: 'A gold-mesh umbrella that the astronauts aimed at Earth by hand at every stop, sending live colour television straight home without going through the lander.' },
      { p: [1.03, 1.1, 0.27], name: 'TV camera', txt: 'Steered by remote control from Mission Control in Houston, 385,000 km away, so the world could watch the astronauts work. When Apollo 17 left, this camera tilted up to follow the lander as it lifted off — the last time people left the Moon.' },
      { p: [0.05, 1.0, 0.05], name: 'Control console', txt: 'One T-shaped hand controller between the seats did everything: push to go, pull to brake, tilt to steer. With no magnetic field for a compass, a gyroscope and wheel counters tracked the way back to the lander.' },
      { p: [-0.41, 0.6, 0.3], name: 'Seats', txt: 'Folding aluminium frames with nylon webbing, like lawn chairs, with seat belts — in one-sixth gravity the rover bounced right off the ground over bumps.' },
      { p: [0.94, 0.45, 0.82], name: 'Wire-mesh wheels', txt: 'No rubber and no air: each tyre is woven from zinc-coated piano wire, with titanium treads riveted on. Every wheel has its own small electric motor.' },
      { p: [-1.1, 1.3, 0.02], name: 'Tool pallet', txt: 'Racks at the back carried hammers, scoops, core tubes and sample bags. Apollo 17 brought home about 110 kg of rock and soil, more than any other mission, including orange volcanic glass that Schmitt spotted at the rim of a crater.' },
    ],
    cards: [['Mass', '210 kg', 'Carried over twice its own weight'], ['Top speed', '18 km/h', 'The record, set here going downhill'], ['Driven on Apollo 17', 'About 36 km', 'Over three days'], ['Power', '2 batteries', '36-volt, single use']],
    story: '<p>The first rover flew on Apollo 15 in 1971. Folded flat against the lander like a camp bed, it swung down and unfolded itself at the pull of two cords. Earlier crews had been limited to about a kilometre on foot; with a rover they could explore for three days.</p><p>Apollo 17 landed here on 11 December 1972. Eugene Cernan and Harrison Schmitt — the only geologist to walk on the Moon — drove as far as 7.6 km from the lander, to the foot of the South Massif, never going farther than they could walk back if the rover broke down. When a fender snapped off, they taped on a replacement made from spare maps. Three days later they parked the rover a short way from the lander and left. Nobody has been back since.</p><p>From above you can follow all three drives. The first ran a short way south. The second went west to Nansen crater at the foot of the South Massif and came back past Shorty crater, where Schmitt found orange soil. The third went north to a house-sized split boulder at stops 6 and 7, then east and home by Van Serg crater.</p><figure class="sc-photo"><img src="img/a17-flag.jpg" alt="An astronaut stands beside the flag on the Moon, with the lunar module and rover behind" loading="lazy"><figcaption>Harrison Schmitt at the flag, with the lander and the rover behind him. Photographed by Eugene Cernan, December 1972. NASA.</figcaption></figure>',
    link: { href: 'moon', txt: 'Explore the Moon' },
    credit: '3D model: “Mondfahrzeug (Lunar Rover)” by <a href="https://sketchfab.com/3d-models/mondfahrzeug-lunar-rover-acb3f8645a69493cb211a62b40d66aab" target="_blank" rel="noopener">Deutsches Museum Digital</a>, a scan of the museum’s exhibit, licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>. Reduced in size for the web; this version is shared under the same licence. Terrain: NASA’s Apollo 17 landing-site model (NASA 3D Resources). Stops on the three drives: Haase et al., <em>Coordinates and Maps of the Apollo 17 Landing Site</em>, 2019.',
  },
  iss: {
    tab: 'ISS', title: 'International Space Station', kicker: 'Low Earth orbit · crewed since 2000',
    lede: 'The largest thing ever built in space: a laboratory the size of a football field, lived in without a break since November 2000. It circles the Earth every 92 minutes — and it is bright enough to see from your backyard.',
    env: 'leo', alt: 415, sunEl: 46, sunAz: 52, occl: 1.6, shadowR: 22, dist: [5, 95],
    models: [{ url: 'models/iss.glb', scale: 2.4, anim: [0, 16], auto: false }], deployLabels: ['Move arm', 'Park arm'],
    views: {
      overview: { label: 'Overview', pos: [-24, 15, -26], tgt: [0.5, -1, 0] },
      earth: { label: 'Over Earth', short: 'Earth', pos: [-12, 36, -14], tgt: [1.5, -1, 0] },
      cupola: { label: 'Cupola', pos: [-2.5, -6.5, 6.5], tgt: [1.2, -1.9, 1.7] },
    },
    parts: [
      { p: [1.11, -2.05, 1.62], name: 'Cupola', txt: 'A dome of seven windows looking straight down at Earth — the crew’s favourite place for photographs, and the control post for the robotic arm. Its round centre pane, 80 cm across, is the largest window ever flown in space.' },
      { p: [3.0, -0.1, -7.4], name: 'Solar arrays', txt: 'Eight wings, each 35 m long, swivel on the truss to follow the Sun and make enough electricity for more than 40 homes. Smaller roll-out arrays have been laid in front of most of them to top up the power as the originals age.' },
      { p: [3.5, 0.1, -3.58], name: 'Radiators', txt: 'In a vacuum the only way to cool off is to glow the heat away. Ammonia is pumped through these white folding panels to carry the warmth of the crew and equipment out to space.' },
      { node: 'SHP_PRIME', p: [-1.3, -2.38, -0.2], name: 'Canadarm2', txt: 'A 17-metre robotic arm that can walk end over end along the station. It catches arriving cargo ships, moves equipment and carries astronauts on spacewalks. It has seven joints — three at the shoulder, one elbow, three at the wrist — and either end can be the hand. Tap “Move arm” to watch it reach out.' },
      { p: [-0.52, -1.18, -0.56], name: 'Destiny', txt: 'The main American laboratory, at work since 2001 — a cylinder 8.5 m long lined with racks of experiments, with a 51 cm window in the floor for studying Earth.' },
      { p: [-3.33, -1.2, 1.9], name: 'Kibo', txt: 'Japan’s laboratory and the station’s largest room, with its own small airlock, a robot arm and an outdoor “porch” for experiments that need to sit in open space.' },
      { p: [-2.65, -1.18, -2.15], name: 'Columbus', txt: 'Europe’s laboratory, delivered by the Space Shuttle in 2008. Like the others, it uses weightlessness to study fluids, materials and the human body.' },
      { p: [7.1, -0.45, 0], name: 'Zvezda', txt: 'The Russian service module, launched in 2000, was the station’s first living quarters. Its engines — and those of cargo ships docked behind it — nudge the station back up when it sinks.' },
    ],
    cards: [['Size', '109 m wide', 'A football field, end zones included'], ['Mass', 'About 420 tonnes', 'Assembled in orbit, 1998–2011'], ['One orbit', '92 minutes', '16 sunrises and sunsets a day'], ['Crewed since', '2 Nov 2000', 'Without a single day’s break']],
    story: '<p>The station was built in orbit, piece by piece. The first module, Russia’s Zarya, went up in November 1998; the Space Shuttle and Russian rockets added the rest over the next thirteen years, bolted together by astronauts on well over a hundred spacewalks.</p><p>It is run by five space agencies — from the United States, Russia, Europe, Japan and Canada — as a laboratory for the things only weightlessness allows, from growing protein crystals to learning how the human body copes with long spaceflight. NASA plans to retire it after 2030 and steer it down into a remote stretch of the Pacific.</p>',
    link: { href: 'objects', txt: 'Explore more objects' },
    credit: '3D model: NASA Johnson Space Center (IGOAL), via NASA 3D Resources.',
    extra: { title: 'Where It Is — and How to See It', draw: box => drawLEO(box, true),
      html: '<div class="sc-dia" id="sc-dia"></div><div class="sc-why">'
        + '<div class="zcl-pcard"><div class="zcl-pclabel">Why so low</div><div class="zcl-pcval">Close enough to reach</div><div class="zcl-pcsub">At 400 km a crew can arrive within hours of launch, and the station stays under the worst of the radiation belts. The price is a trace of air even this high: it slowly drags the station down, so visiting ships fire their engines to push it back up.</div></div>'
        + '<div class="zcl-pcard"><div class="zcl-pclabel">What to look for</div><div class="zcl-pcval">A bright, steady light</div><div class="zcl-pcsub">It is the third-brightest thing in the sky after the Sun and Moon. It looks like a brilliant star gliding from the west toward the east, with no blinking lights and no sound, crossing the sky in a few minutes.</div></div>'
        + '<div class="zcl-pcard"><div class="zcl-pclabel">When to look</div><div class="zcl-pcval">Just after dusk, before dawn</div><div class="zcl-pcsub">You see it when your sky is dark but the station, far above, is still in sunlight. It often fades out mid-flight as it slips into Earth’s shadow. NASA’s Spot the Station service lists pass times for any town.</div></div></div>' },
  },
  shuttle: {
    tab: 'Shuttle', title: 'Space Shuttle', kicker: 'Low Earth orbit · 1981 to 2011',
    lede: 'The first reusable spacecraft: it launched like a rocket, worked in orbit as a truck and a workshop, and glided home to a runway. Shown as it flew in orbit, with its payload bay doors open.',
    env: 'leo', alt: 340, sunEl: 46, sunAz: 128, occl: .5,
    models: [{ url: 'models/shuttle.glb', scale: 0.015, anim: [0, 8] }], deployLabels: ['Open doors', 'Close doors'],
    views: {
      overview: { label: 'Overview', pos: [17, 9, 17], tgt: [0.3, 0, 0] },
      bay: { label: 'Payload bay', short: 'Bay', pos: [12.5, 9.5, 3.5], tgt: [0.5, -0.3, 0], deploy: true },
      engines: { label: 'Engines', pos: [-19, 4.5, 7.5], tgt: [-7.5, 0.6, 0] },
    },
    parts: [
      { p: [0.84, -0.82, 0.00], name: 'Payload bay', txt: 'A cargo hold 18 m long and 4.6 m wide — room for a school bus. It carried Hubble into orbit and brought up most of the Space Station, piece by piece.' },
      { node: 'door_stb', p: [0.84, -0.53, 2.62], name: 'Bay doors and radiators', txt: 'The doors stayed open the whole time in orbit. Their silvered inner faces are radiators that shed the heat of the crew and electronics; had they failed to open, the crew would have had to come home within hours. The starboard door opened first and closed last. Tap “Close doors” to see them shut for the ride home.' },
      { p: [8.6, 1.2, 0.00], name: 'Crew cabin', txt: 'A flight deck with the pilots’ seats and the windows over the bay, and living quarters on the deck below. Most flights carried five to seven astronauts for one to two weeks.' },
      { p: [-9.45, 0.10, 0.00], name: 'Main engines', txt: 'Three engines burning liquid hydrogen and oxygen from the big orange external tank. They fired only for the eight and a half minutes of launch, then rode along silent — and came home to be flown again.' },
      { p: [-8.10, 1.95, 1.35], name: 'Orbital engines', txt: 'Two smaller engines in these pods gave the final push into orbit, changed the orbit to chase down a satellite or the Station, and made the braking burn that started the trip home.' },
      { p: [4.5, -2.3, 0.00], name: 'Heat shield', txt: 'About 24,000 silica tiles, each cut to its own shape, cover the underside in black. Mostly air and as light as foam, they kept the aluminium skin cool while the outside glowed at well over 1,000 °C during re-entry.' },
      { p: [-4.95, -1.05, 4.95], name: 'Wings', txt: 'Useless in orbit, the wings were for the last half hour of the flight: the orbiter came home as a glider of about 100 tonnes with no engine power and one chance at the runway.' },
    ],
    cards: [['Missions', '135', 'April 1981 to July 2011'], ['Orbiters', '5 flew in space', 'Plus the test glider Enterprise'], ['Length', '37 m', 'Wingspan 24 m'], ['Orbit', '300 to 600 km', 'One lap every 90 minutes or so']],
    story: '<p>Five orbiters — Columbia, Challenger, Discovery, Atlantis and Endeavour — flew 135 missions over thirty years. They launched and repaired the Hubble Space Telescope, carried the laboratories and trusses of the Space Station into orbit, and took more than 350 people to space.</p><p>The Shuttle never became the cheap, routine ride it was meant to be, and it was unforgiving. Challenger was lost during launch in 1986 and Columbia during re-entry in 2003, with seven astronauts each. The three surviving orbiters — Discovery, Atlantis and Endeavour — are now museum pieces.</p>',
    link: { href: 'objects', txt: 'Explore more objects' },
  },
  apollo: {
    tab: 'Apollo–Soyuz', title: 'Apollo–Soyuz', kicker: 'Low Earth orbit · July 1975',
    lede: 'The last Apollo ever flown, docked nose to nose with a Soviet Soyuz. In the middle of the Cold War, three astronauts and two cosmonauts opened the hatch between them and shook hands — the first time two nations met in space.',
    env: 'leo', alt: 225, sunEl: 46, sunAz: 128, occl: .5,
    models: [{ url: 'models/apollo.glb', pos: [1.4, -0.25, 0] }],
    views: {
      overview: { label: 'Overview', pos: [16, 8, 14], tgt: [0, 0, 0] },
      apollo: { label: 'Apollo', pos: [-13, 4.5, 9.5], tgt: [-4.6, 0, 0] },
      soyuz: { label: 'Soyuz', pos: [14.5, 4, 8.5], tgt: [5.6, 0.2, 0] },
    },
    parts: [
      { p: [-0.9, 1.35, 0], name: 'Command module', txt: 'The cone is the crew cabin, and the only part that came back to Earth, splashing down in the Pacific under three parachutes. Tom Stafford, Vance Brand and Deke Slayton flew it.' },
      { p: [-5.6, 2.65, 0], name: 'Service module', txt: 'Fuel, oxygen, electrical power and the main engine — the same design that carried nine crews to the Moon and back.' },
      { p: [-9.9, 1.25, 0], name: 'Main engine', txt: 'On Moon flights this engine braked the ship into lunar orbit and fired again to send it home. Here it only had to adjust a low orbit around the Earth.' },
      { p: [1.9, 0.65, 0], name: 'Docking module', txt: 'A 3-metre airlock built for this one flight. Apollo’s cabin held pure oxygen at low pressure and Soyuz held ordinary air, so crews waited in here while the pressure changed before crossing over.' },
      { p: [5.6, 1.25, 0], name: 'Soyuz 19', txt: 'Flown by Alexei Leonov — the first person ever to walk in space — and Valery Kubasov. The round front section is living space; the crew rides home in the bell-shaped section behind it. Descendants of this craft still carry crews today.' },
      { p: [9.1, 3.55, 0], name: 'Solar panels', txt: 'Soyuz made its electricity from sunlight. Apollo carried fuel cells instead, which combined hydrogen and oxygen into power — and into the crew’s drinking water.' },
    ],
    cards: [['Docked', '17 July 1975', 'Joined for 44 hours'], ['Crews', '3 + 2', 'Americans and Soviets'], ['Orbit', 'About 220 km up', 'Half as high as today’s Station'], ['Apollo flights', 'The last one', 'No American flew again until 1981']],
    story: '<p>Apollo is remembered for the Moon, but its final flight never left Earth orbit. In July 1975 a leftover Apollo spacecraft and a Soviet Soyuz launched within hours of each other, met two days later, and stayed joined for almost two days while the crews shared meals, ran experiments and visited each other’s ships.</p><p>The two craft were never built to fit together, so engineers on both sides designed a shared docking system and the airlock between them. That habit of working together outlasted the Cold War: twenty years later the Space Shuttle was docking with the Russian station Mir, and then came the International Space Station.</p>',
    link: { href: 'moon', txt: 'Explore the Moon and the Apollo landing sites' },
  },
  hubble: {
    tab: 'Hubble', title: 'Hubble Space Telescope', kicker: 'Low Earth orbit · since 1990',
    lede: 'The telescope that changed how we see the universe. For more than 35 years it has circled just above the atmosphere, close enough for astronauts to visit and repair, looking out in visible and ultraviolet light.',
    env: 'leo', sunEl: 40, sunAz: 128, occl: .5,
    models: [{ url: 'models/hubble.glb', scale: .0251, rot: [-14, 20, 26], anim: [0, 4] }], local: true, deployLabels: ['Open door', 'Close door'],
    views: {
      overview: { label: 'Overview', pos: [15, 5.5, 17], tgt: [-.4, .3, 0] },
      earth: { label: 'Over Earth', short: 'Earth', pos: [7, 19, 10], tgt: [-.6, -1, -.4] },
      close: { label: 'Close-up', pos: [1.5, 8.5, 10.5], tgt: [-1.6, 2.6, .2] },
      tube: { label: 'Down the tube', short: 'Tube', pos: [-5.9, 14.6, 2.6], tgt: [-2.67, 5.89, -.47], deploy: true },
    },
    parts: [
      { node: 'door', p: [0, 7.9, -1.8], name: 'Aperture door', txt: 'Hubble’s lens cap: a 3-metre lid of aluminium honeycomb, silvered outside and black inside, that opens 105 degrees on motor-driven hinges. It normally stays open, but swings shut by itself in under a minute if the telescope ever drifts toward pointing at the Sun, which would burn the instruments. Tap “Close door” to see it shut.' },
      { p: [0, 5.9, 0], name: 'Main mirror (inside)', txt: 'Light falls down this tube onto a 2.4 m mirror at the bottom. It is polished so smooth that if it were as wide as the Earth, its biggest bump would be 15 cm tall.' },
      { p: [4.4, -.69, 2.2], name: 'Solar arrays', txt: 'Two wings that power everything; batteries carry it through the third of each orbit spent in Earth’s shadow. The model shows the original flexible, roll-out arrays. Smaller rigid ones replaced them in 2002.' },
      { p: [-1.07, 3.75, 1.3], w: 1, name: 'High-gain antennas', txt: 'Two dishes send its pictures up to relay satellites in a higher orbit, which pass them down to the ground: well over a hundred gigabits of data every week.' },
      { p: [.09, -3.0, 2.2], name: 'Cameras', txt: 'The instruments sit in the wide rear section, built like drawers so that spacewalking astronauts could pull one out and slide in a better one. Wide Field Camera 3, fitted in 2009, takes most of the famous pictures.' },
      { p: [-1.56, -4.9, 1.56], name: 'Guidance sensors', txt: 'Three sensors lock onto guide stars to hold Hubble steady to within 0.007 arcseconds for hours on end. That is like keeping a laser pointer on a small coin 300 km away.' },
    ],
    cards: [['Mirror', '2.4 m', 'Wide, across the main mirror'], ['Launched', '24 Apr 1990', 'Aboard shuttle Discovery'], ['One orbit', '95 minutes', 'At about 27,000 km/h'], ['Length', '13.2 m', 'About the size of a school bus']],
    story: '<p>Hubble’s first pictures were blurred. Its main mirror had been ground to the wrong shape, too flat at the edge by about a fiftieth of the width of a human hair. In December 1993 astronauts flew up and fitted corrective optics, like a pair of glasses, and the images snapped into focus. Four more visits followed, the last in 2009, each one leaving it a better telescope than before.</p><p>It measured how fast the universe is expanding and so helped pin its age at 13.8 billion years, showed that giant black holes sit at the heart of most galaxies, and helped reveal that the expansion is speeding up. In 1995 it stared at one apparently empty patch of sky for ten days and found about 3,000 galaxies in it: the Hubble Deep Field. It is still working, now alongside Webb, which sees the infrared light that Hubble cannot.</p>',
    link: { href: 'objects', txt: 'Explore deep-sky objects' },
    extra: { title: 'Where Hubble Is — and Why', draw: box => { drawLEO(box); wireWipes(); },
      html: '<div class="sc-dia" id="sc-dia"></div><div class="sc-why">'
        + '<div class="zcl-pcard"><div class="zcl-pclabel">Why so low</div><div class="zcl-pcval">It rode up on the Shuttle</div><div class="zcl-pcsub">Hubble was carried to orbit in the Space Shuttle’s cargo bay, and low orbit was as high as the Shuttle could go. That saved the mission: astronauts could fly back to it, five times in all, to repair and upgrade it.</div></div>'
        + '<div class="zcl-pcard"><div class="zcl-pclabel">What it gains</div><div class="zcl-pcval">It sits above the air</div><div class="zcl-pcsub">Even this low, Hubble is above almost all of the atmosphere, which blurs starlight and blocks ultraviolet. Its pictures are about ten times sharper than the same telescope could take from the ground.</div></div>'
        + '<div class="zcl-pcard"><div class="zcl-pclabel">The catch</div><div class="zcl-pcval">Earth gets in the way</div><div class="zcl-pcsub">The planet fills half of Hubble’s sky and it swings from daylight into darkness about 15 times a day. The last wisps of air also drag it slowly lower. Without a boost it is expected to fall back to Earth in the 2030s.</div></div>'
        + '</div>' + SAMESKY },
  },
  jwst: {
    tab: 'Webb', title: 'James Webb Space Telescope', kicker: '1.5 million km from Earth · since 2022',
    lede: 'The largest telescope ever flown, seeing the universe in infrared light. It hides from the Sun behind a sunshield the size of a tennis court, keeping its mirror cold enough to see the faint heat of the first galaxies.',
    env: 'l2', sunEl: -62, sunAz: 200, occl: 1.6,
    models: [{ url: 'models/jwst.glb' }],
    views: {
      overview: { label: 'Overview', pos: [19, 12.5, 17.5], tgt: [-1, 4.2, 0] },
      mirror: { label: 'The mirror', pos: [17, 9, 2], tgt: [1, 6.3, 0] },
      sun: { label: 'Sun side', pos: [8, -9, 17], tgt: [-1.5, 2.5, 0] },
    },
    parts: [
      { p: [1.4, 6.3, -0.06], name: 'Primary mirror', txt: '18 hexagons of beryllium, each coated with a layer of gold only about 100 nanometres thick — about 48 grams of gold in all. At 6.5 m across it gathers about six times the light of Hubble’s mirror.' },
      { p: [8.32, 6.44, 0], name: 'Secondary mirror', txt: 'A 0.74 m mirror held 7 m out in front of the primary on three long struts. It bounces the gathered light back through the hole in the centre of the primary mirror to the instruments behind.' },
      { p: [-1.37, 4.15, 0.04], name: 'Science instruments', txt: 'Four cameras and spectrographs behind the mirror. They work at about −233 °C, and one, MIRI, is chilled further by its own cryocooler to about −266 °C.' },
      { p: [0.1, 1.53, 7.09], name: 'Sunshield', txt: 'Five layers of Kapton film, each thinner than a human hair, unfolded in space to about 21 × 14 m. The Sun-facing side reaches around 85 °C; the telescope side stays hundreds of degrees colder.' },
      { p: [-3.67, 1.2, 0], name: 'Spacecraft bus', txt: 'On the warm side: the solar panel, computers, fuel and the radio that sends back around 57 gigabytes of data a day.' },
    ],
    cards: [['Mirror', '6.5 m', '18 gold-coated segments'], ['Launched', '25 Dec 2021', 'On an Ariane 5'], ['Temperature', '−233 °C', 'On the telescope side'], ['Distance', '1.5 million km', 'Around the L2 point']],
    story: '<p>Webb was too big for any rocket, so it launched folded up on Christmas Day 2021 and unfolded itself on the way out: the sunshield, the mirror’s two wings and the secondary mirror, in a two-week sequence with hundreds of steps that each had to work first time. It reached L2 a month after launch, and its first full-colour images were released in July 2022.</p><p>It works in infrared because the light of the most distant galaxies has been stretched to longer wavelengths on its way to us — and because infrared passes through the dust that hides newborn stars and planets. That is also why the telescope must be so cold: a warm telescope glows in infrared and would drown out what it is trying to see.</p>',
    link: { href: 'objects', txt: 'Explore deep-sky objects' },
    extra: { title: 'Where Webb Is — and Why', draw: box => { drawL2(box); l2Anim(); wireWipes(); },
      html: '<div class="sc-dia" id="sc-dia"></div>'
        + '<div class="sc-l2a">'
        + '<div class="sc-l2p"><canvas id="l2pace" aria-label="Animation: Webb stays at L2 beside Earth while a lone probe at the same distance from the Sun falls behind"></canvas><p><b>Keeping pace.</b> Anything this far from the Sun would normally circle it more slowly than Earth, taking about 371 days, and drift behind by roughly a million kilometres a month (grey). At L2, Earth’s pull adds about 3% to the Sun’s — exactly enough for Webb to go round in one year, lined up behind Earth (gold).</p></div>'
        + '<div class="sc-l2p"><canvas id="l2hill" aria-label="Animation: the pull along the Sun–Earth line drawn as hills; a marble left on the L2 hilltop slides off, while Webb fires thrusters to stay on top"></canvas><p><b>On a hilltop.</b> Seen moving with Earth, the pulls along the Sun–Earth line make a landscape with a ridge on either side of Earth: L1 and L2. Left alone, something on top slowly slides off (grey). About every three weeks Webb fires small thrusters to cancel the slide (gold).</p></div>'
        + '</div>'
        + '<div class="sc-why">'
        + '<div class="zcl-pcard"><div class="zcl-pclabel">What it orbits</div><div class="zcl-pcval">The Sun, not the Earth</div><div class="zcl-pcsub">Webb goes round the Sun once a year, 1.5 million km outside Earth’s path. An orbit that far out should be slower, and Webb should fall behind. But at this one spot Earth’s gravity adds to the Sun’s by just enough to keep it in step, so the two travel round together and Webb is always in radio contact.</div></div>'
        + '<div class="zcl-pcard"><div class="zcl-pclabel">What L2 is</div><div class="zcl-pcval">A balance point, with nothing there</div><div class="zcl-pcsub">L2 is not an object, only the place where those pulls balance. Picture the top of a saddle: a marble set down exactly right will stay, but the slightest nudge sends it rolling off. So Webb loops around the empty spot every six months, on a path wider than the Moon’s orbit, and fires small thrusters every few weeks to keep from sliding away.</div></div>'
        + '<div class="zcl-pcard"><div class="zcl-pclabel">Why go there</div><div class="zcl-pcval">One shield blocks everything</div><div class="zcl-pcsub">From L2 the Sun, Earth and Moon all sit in the same direction. Webb keeps its sunshield turned toward the three of them, and the telescope behind stays in permanent shade, cold enough to see faint infrared light. The wide loop also keeps it out of Earth’s shadow, so its solar panel never loses the Sun.</div></div>'
        + '</div>' + SAMESKY },
  },
};
const ROVERS = { title: 'Curiosity vs Perseverance', draw() {}, html: '<div class="sc-cmp"><div class="h"></div><div class="h">Curiosity</div><div class="h">Perseverance</div><div class="k">Landed</div><div>Aug 2012, Gale Crater</div><div>Feb 2021, Jezero Crater</div><div class="k">Asks</div><div>Could Mars ever have supported life?</div><div>Did life leave any traces?</div><div class="k">Mass</div><div>899 kg</div><div>1,025 kg</div><div class="k">Drill</div><div>Grinds rock to powder for its onboard labs</div><div>Cuts chalk-sized cores and seals them in tubes</div><div class="k">Labs</div><div>Two on board: SAM and CheMin</div><div>None — its samples wait for labs on Earth</div><div class="k">Mast</div><div>Fixed-lens Mastcam and the ChemCam laser</div><div>Zoom Mastcam-Z and the SuperCam laser, with a microphone</div><div class="k">Cameras</div><div>17</div><div>23, plus two microphones</div><div class="k">Wheels</div><div>50 cm, thin-skinned — rocks have punched holes in them</div><div>52.5 cm, narrower and thicker, with twice as many treads</div><div class="k">Companion</div><div>None</div><div>Ingenuity helicopter</div></div><p class="sc-cmpnote">Perseverance was built from Curiosity’s design — the same chassis, the same nuclear power source, the same sky-crane landing — which is why the two look like twins at first glance.</p>' };
// Tabs are grouped by where the craft works. Voyager 1 has a page of its own.
const GROUPS = [
  { label: 'Mars', items: ['mars2020', 'curiosity'] },
  { label: 'Moon', items: ['lrv', 'lm'] },
  { label: 'Earth orbit', items: ['iss', 'shuttle', 'hubble', 'apollo'] },
  { label: 'Deep space', items: ['jwst', 'cassini', 'voyager'] },
];

/* ───────────── Settings: ground, sky, light ───────────── */
function noiseTex(size, paint) { const c = document.createElement('canvas'); c.width = c.height = size; paint(c.getContext('2d'), size); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; return t; }
function rand(seed) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
function groundTex(base, dark, light, craters, seed) {
  return noiseTex(1024, (x, S) => {
    const R = rand(seed); x.fillStyle = base; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 9000; i++) { const r = R() * 3 + .5; x.fillStyle = R() < .5 ? dark : light; x.globalAlpha = R() * .18; x.beginPath(); x.arc(R() * S, R() * S, r, 0, 7); x.fill(); }
    for (let i = 0; i < 260; i++) { const r = R() * 60 + 10; const g = x.createRadialGradient(0, 0, 0, 0, 0, r); x.save(); x.translate(R() * S, R() * S);
      g.addColorStop(0, R() < .5 ? dark : light); g.addColorStop(1, 'rgba(0,0,0,0)'); x.globalAlpha = R() * .16; x.fillStyle = g; x.fillRect(-r, -r, 2 * r, 2 * r); x.restore(); }
    for (let i = 0; i < craters; i++) { const cx = R() * S, cy = R() * S, r = Math.pow(R(), 2.5) * 38 + 3; x.globalAlpha = .28;
      x.fillStyle = dark; x.beginPath(); x.arc(cx + r * .12, cy + r * .12, r, 0, 7); x.fill(); x.globalAlpha = .22; x.strokeStyle = light; x.lineWidth = Math.max(1, r * .18); x.beginPath(); x.arc(cx - r * .08, cy - r * .08, r * 1.02, 3.6, 5.9); x.stroke(); }
    x.globalAlpha = 1;
  });
}
function fbmTex(size, period, stops, seed, speck) {   // tileable fractal noise, coloured by a ramp
  return noiseTex(size, (x, S) => {
    const R = rand(seed), P = [], N = 1024; for (let i = 0; i < N * N; i++) P.push(R());
    const lat = (i, j, p) => P[((i % p + p) % p) * N + ((j % p + p) % p)];
    const vn = (u, v, p) => { const i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, su = fu * fu * (3 - 2 * fu), sv = fv * fv * (3 - 2 * fv);
      const a = lat(i, j, p), b = lat(i + 1, j, p), c = lat(i, j + 1, p), d = lat(i + 1, j + 1, p); return a + (b - a) * su + (c - a) * sv + (a - b - c + d) * su * sv; };
    const img = x.createImageData(S, S), px = img.data, cs = stops.map(h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]);
    for (let y = 0; y < S; y++) for (let xx = 0; xx < S; xx++) {
      let f = 0, amp = .5, fr = period / S, p = period;
      for (let o = 0; o < 6; o++) { f += amp * vn(xx * fr, y * fr, p); amp *= .5; fr *= 2; p *= 2; }
      const g = Math.max(0, Math.min(.999, (f - .18) / .64)) * (cs.length - 1), k = Math.floor(g), t = g - k, c0 = cs[k], c1 = cs[k + 1], o4 = (y * S + xx) * 4;
      const sp = speck && R() < speck ? (R() < .5 ? .72 : 1.18) : 1;
      px[o4] = (c0[0] + (c1[0] - c0[0]) * t) * sp; px[o4 + 1] = (c0[1] + (c1[1] - c0[1]) * t) * sp; px[o4 + 2] = (c0[2] + (c1[2] - c0[2]) * t) * sp; px[o4 + 3] = 255;
    }
    x.putImageData(img, 0, 0);
  });
}
function starfield(n, bright) {
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), g = new THREE.BufferGeometry(), band = new THREE.Vector3(0.3, 0.5, 1).normalize();
  for (let i = 0; i < n; i++) { const v = new THREE.Vector3().randomDirection(); if (i < n * .4) { v.addScaledVector(band, -v.dot(band) * (.85 + Math.random() * .15)).normalize(); }
    v.multiplyScalar(900); pos.set([v.x, v.y, v.z], i * 3); const b = (.3 + Math.pow(Math.random(), 3) * .9) * bright, k = Math.random();
    const c = k < .2 ? [1, .85, .7] : k < .35 ? [.75, .85, 1] : [1, 1, 1]; col.set([c[0] * b, c[1] * b, c[2] * b], i * 3); }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return new THREE.Points(g, new THREE.PointsMaterial({ size: 1.6, sizeAttenuation: false, vertexColors: true, depthWrite: false, fog: false }));
}
function glow(rgb, spikes) {
  return noiseTex(256, (x, s) => { const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.07, 'rgba(' + rgb + ',.95)'); g.addColorStop(.22, 'rgba(' + rgb + ',.22)'); g.addColorStop(1, 'rgba(' + rgb + ',0)');
    x.fillStyle = g; x.fillRect(0, 0, s, s);
    if (spikes) { x.globalCompositeOperation = 'lighter'; [0, Math.PI / 2].forEach(a => { x.save(); x.translate(s / 2, s / 2); x.rotate(a);
      const lg = x.createLinearGradient(-s / 2, 0, s / 2, 0); lg.addColorStop(0, 'rgba(255,240,220,0)'); lg.addColorStop(.5, 'rgba(255,240,220,.7)'); lg.addColorStop(1, 'rgba(255,240,220,0)');
      x.fillStyle = lg; x.fillRect(-s / 2, -1.2, s, 2.4); x.restore(); }); } });
}
function sprite(tex, dir, dist, size, add = true) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, blending: add ? THREE.AdditiveBlending : THREE.NormalBlending, depthWrite: false, fog: false, transparent: true }));
  s.position.copy(dir).multiplyScalar(dist); s.scale.set(size, size, 1); return s;
}
function dirFrom(el, az) { el *= D2R; az *= D2R; return new THREE.Vector3(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az)).normalize(); }
/* Earth as it hangs in the lunar sky: the photo wrapped on a globe and lit from
   the Sun's real direction, so it shows the correct phase (a fat crescent on
   Apollo 15's first drive) with a thin blue rim of air. No glow — there is no
   lunar atmosphere to scatter one. Baked once into a flat panel that faces the site. */
function earthPanel(edir, sun, dist, done) {
  const img = new Image(); img.onload = () => {
    const S = 384, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d');
    const CX = 399.5, CY = 399.5, RR = 352, pad = 1.06;                    // the disc inside the photo; a little margin for the rim of air
    x.drawImage(img, CX - RR * pad, CY - RR * pad, 2 * RR * pad, 2 * RR * pad, 0, 0, S, S);
    const up = new THREE.Vector3(0, 1, 0).addScaledVector(edir, -edir.y).normalize(), right = new THREE.Vector3().crossVectors(edir, up).normalize();
    const L = [sun.dot(right), sun.dot(up), -sun.dot(edir)], id = x.getImageData(0, 0, S, S), px = id.data;
    const sm = (a, b, v) => { const t = Math.max(0, Math.min(1, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
    for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
      const u = ((i + .5) / S * 2 - 1) * pad, v = -((j + .5) / S * 2 - 1) * pad, r2 = u * u + v * v, o = (j * S + i) * 4, r = Math.sqrt(r2);
      if (r > pad) { px[o + 3] = 0; continue; }
      const rc = Math.min(r, 1), nz = Math.sqrt(Math.max(0, 1 - rc * rc)), k = r > 1 ? 1 / r : 1, mu = u * k * L[0] + v * k * L[1] + nz * L[2];
      const day = sm(-.06, .14, mu), lim = .55 + .45 * Math.pow(nz, .4);                // soft terminator, gentle limb darkening
      const air = Math.pow(1 - nz, 3) * sm(-.15, .25, mu);                              // thin blue line of atmosphere on the sunlit limb
      const cov = 1 - sm(1.0, 1.035, r), g = 1.18 * day * lim;
      px[o] = Math.min(255, px[o] * g + 70 * air); px[o + 1] = Math.min(255, px[o + 1] * g + 120 * air); px[o + 2] = Math.min(255, px[o + 2] * g + 215 * air);
      px[o + 3] = 255 * cov * (r > 1 ? sm(-.15, .25, mu) * .8 : 1);
    }
    x.putImageData(id, 0, 0);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    const size = 2 * dist * Math.tan(.95 * D2R) * pad;                      // Earth is 1.9° across from the Moon — nearly four times the Moon in our sky
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, fog: false, toneMapped: false }));
    m.position.copy(edir).multiplyScalar(dist); m.lookAt(0, 0, 0); done(m);
  }; img.src = 'img/earth.jpg';
}
/* ───────────── Hadley–Apennine terrain ─────────────
   A real heightfield instead of a flat disc: a level patch under the rover,
   cratered mare plain, Hadley Rille winding past to the west, and the Apennine
   front rising to the east and south (Mons Hadley, the Swann Range, Hadley
   Delta), with gullied, cratered slopes. +x is east, +z is south. */
/* The Taurus–Littrow valley, where Apollo 17 landed. The mountains are real: NASA's terrain model of the landing site
   (models/moon-a17.bin — heights in quarter-metres on a 250 m grid, 64 km square, north up, centred on the lander),
   drawn at true size and distance, with the Moon's curvature. That grid is far too coarse for the ground underfoot,
   so within a couple of kilometres it fades into gently rolling, cratered soil generated here. */
function moonTerrain(dem) {
  const R = rand(41), N = 256, P = []; for (let i = 0; i < N * N; i++) P.push(R());
  const lat = (i, j) => P[((i % N + N) % N) * N + ((j % N + N) % N)];
  const vn = (u, v) => { const i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, su = fu * fu * (3 - 2 * fu), sv = fv * fv * (3 - 2 * fv);
    const a = lat(i, j), b = lat(i + 1, j), c = lat(i, j + 1), d = lat(i + 1, j + 1); return a + (b - a) * su + (c - a) * sv + (a - b - c + d) * su * sv; };
  const fbm = (x, z, o) => { let f = 0, a = .5, q = 1; for (let k = 0; k < o; k++) { f += a * vn(x * q, z * q); a *= .5; q *= 2.03; } return f; };
  const ridged = (x, z, o) => { let f = 0, a = .5, q = 1; for (let k = 0; k < o; k++) { const n = 1 - Math.abs(2 * vn(x * q + 31, z * q + 17) - 1); f += a * n * n; a *= .5; q *= 2.1; } return f; };
  const ss = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const bump = (az, c, w) => { let d = Math.abs(((az - c + 540) % 360) - 180) / w; return d >= 1 ? 0 : (1 + Math.cos(d * Math.PI)) / 2; };
  const craters = []; for (let i = 0; i < 300; i++) { const a = R() * 6.2832, r = 9 + Math.pow(R(), 1.2) * 800, rad = Math.min(1 + Math.pow(R(), 3) * 26, r * .12 + 1.5); const cx = Math.cos(a) * r, cz = Math.sin(a) * r; if (Math.hypot(cx - LM[0], cz - LM[1]) > rad * 1.6 + 8) craters.push([cx, cz, rad]); }      // none under the lander
  const DN = 256, CELL = 250, RM = 1737400;
  const dv = (i, j) => dem[Math.max(0, Math.min(DN - 1, j)) * DN + Math.max(0, Math.min(DN - 1, i))] / 4;
  const cub = (a, b, c, d, t) => ((1 - t) ** 3 * a + (3 * t ** 3 - 6 * t * t + 4) * b + (-3 * t ** 3 + 3 * t * t + 3 * t + 1) * c + t ** 3 * d) / 6;      // smooth (B-spline) blend of four samples
  const demAt = (x, z) => { if (!dem) return 0; const u = x / CELL + DN / 2, v = z / CELL + DN / 2, i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, row = [];
    for (let m = -1; m < 3; m++) row.push(cub(dv(i - 1, j + m), dv(i, j + m), dv(i + 1, j + m), dv(i + 2, j + m), fu)); return cub(row[0], row[1], row[2], row[3], fv); };
  const dem0 = demAt(0, 0);
  function parts(x, z) {
    const r = Math.hypot(x, z), az = (Math.atan2(x, -z) / D2R + 360) % 360;      // compass bearing
    let h = ss(5, 40, r) * (fbm(x / 22, z / 22, 4) - .5) * .5 + ss(50, 220, r) * (fbm(x / 110 + 9, z / 110, 3) - .5) * 5;   // gently rolling mare
    let cr = 0;
    for (let i = 0; i < craters.length; i++) { const c = craters[i], d = Math.hypot(x - c[0], z - c[1]) / c[2]; if (d < 1.9) {
      const bowl = d < 1 ? -(1 - d * d) * .2 * c[2] : 0, rim = .045 * c[2] * Math.exp(-((d - 1) * (d - 1)) / .09); h += bowl + rim; if (d < 1) cr = Math.max(cr, 1 - d); } }
    const far = ss(500, 2600, r), d = (demAt(x, z) - dem0) * far, hi = ss(120, 900, d);                                     // the real valley and its mountains
    const rough = far * (10 + 26 * hi) * (fbm(x / 420 + 3, z / 420 + 7, 4) - .5) * 2;                                        // hummocks and gullies too small for the 250 m grid
    return { h: h + d + rough - r * r / (2 * RM), mt: hi, rl: 0, cr, far };                                                       // …and the ground falls away with the curve of the Moon
  }
  const radii = [0]; let rr = 0, step = .38; while (rr < 31500) { rr += step; radii.push(rr); if (rr > 13) step = Math.min(step * 1.04, rr * .036); }
  const S = matchMedia('(max-width:600px)').matches ? 160 : 256, pos = [], col = [], uv = [], idx = [];
  radii.forEach((r, i) => { const n = i === 0 ? 1 : S; for (let k = 0; k < n; k++) { const a = k / S * 6.2832, x = Math.sin(a) * r, z = Math.cos(a) * r, q = parts(x, z);
    pos.push(x, q.h, z); uv.push(x / 34, z / 34); const c = .9 * Math.max(.5, (1 + .45 * q.mt - .1 * q.cr) * (.9 + .2 * (1 - q.far) * fbm(x / 170 + 5, z / 170 + 3, 3) + .1 * q.far) * (.93 + .14 * fbm(x / 2600 + 1, z / 2600 + 8, 4)) * (1 - .1 * q.mt * (fbm(x / 300 + 2, z / 300 + 5, 2) - .5) * 2)); col.push(c, c * .985, c * .96); } });      // the massifs are pale highland rock, the valley floor dark lava
  const at = (i, k) => i === 0 ? 0 : 1 + (i - 1) * S + (k % S);
  for (let k = 0; k < S; k++) idx.push(0, at(1, k), at(1, k + 1));
  for (let i = 1; i < radii.length - 1; i++) for (let k = 0; k < S; k++) { const a = at(i, k), b = at(i, k + 1), c = at(i + 1, k), d = at(i + 1, k + 1); idx.push(a, c, b, b, c, d); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  // height of the drawn surface itself (the mesh is coarser than the maths), so things laid on the ground sit exactly on it
  const VP = (i, k) => { const o = at(i, k) * 3; return [pos[o], pos[o + 1], pos[o + 2]]; };
  const surf = (x, z) => { const r = Math.hypot(x, z); let lo = 0, hi = radii.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (radii[m] <= r) lo = m; else hi = m; }
    if (lo === 0) return pos[1]; const k = Math.floor(((Math.atan2(x, z) / 6.2832 + 1) % 1) * S), A = VP(lo, k), B = VP(lo, k + 1), C = VP(hi, k), D = VP(hi, k + 1);
    const bary = (a, b, c) => { const d = (b[2] - c[2]) * (a[0] - c[0]) + (c[0] - b[0]) * (a[2] - c[2]), u = ((b[2] - c[2]) * (x - c[0]) + (c[0] - b[0]) * (z - c[2])) / d, v = ((c[2] - a[2]) * (x - c[0]) + (a[0] - c[0]) * (z - c[2])) / d; return [u, v, 1 - u - v, u * a[1] + v * b[1] + (1 - u - v) * c[1]]; };
    const t1 = bary(A, C, B); return (t1[0] >= -1e-4 && t1[1] >= -1e-4 && t1[2] >= -1e-4) ? t1[3] : bary(B, C, D)[3]; };
  /* From high overhead the mesh is too coarse to show the valley crisply. This holds the slope of the ground at every
     point (east–west and north–south), so it can be lit pixel by pixel: the real survey, plus the hummocks and the
     scatter of small craters the 250 m survey cannot resolve (many small, few large, most of them worn down). */
  let relief = null;
  if (dem) { const M = matchMedia('(max-width:600px)').matches ? 512 : 1024, W = DN * CELL, tx = W / M, H = new Float32Array(M * M), row = [0, 0, 0, 0];
    const cr = (a, b, c, d, t) => .5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);
    for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) { const x = ((i + .5) / M - .5) * W, z = ((j + .5) / M - .5) * W, u = x / CELL + DN / 2, v = z / CELL + DN / 2, a = Math.floor(u), b = Math.floor(v), fu = u - a, fv = v - b;
      for (let m = 0; m < 4; m++) row[m] = cr(dv(a - 1, b + m - 1), dv(a, b + m - 1), dv(a + 1, b + m - 1), dv(a + 2, b + m - 1), fu);
      const d = cr(row[0], row[1], row[2], row[3], fv) - dem0; H[j * M + i] = d + (7 + 30 * ss(120, 900, d)) * (fbm(x / 420 + 3, z / 420 + 7, 4) - .5) * 2; }
    const Rc = rand(88), r0 = tx * 1.15, r1 = 750, n = M === 1024 ? 5200 : 1700;
    for (let c = 0; c < n; c++) { const cx = Rc() * M, cy = Rc() * M, rad = r0 / Math.sqrt(1 - Rc() * (1 - r0 * r0 / (r1 * r1))), r = rad / tx, dep = rad * .2 * (.12 + .88 * Math.pow(Rc(), 1.6)), e = Math.ceil(r * 1.9);
      for (let dy = -e; dy <= e; dy++) { const py = Math.round(cy) + dy; if (py < 0 || py >= M) continue;
        for (let dx = -e; dx <= e; dx++) { const px = Math.round(cx) + dx; if (px < 0 || px >= M) continue; const d = Math.hypot(px - cx, py - cy) / r; if (d > 1.9) continue;
          H[py * M + px] += (d < 1 ? -(1 - d * d) * dep : 0) + .22 * dep * Math.exp(-((d - 1) * (d - 1)) / .07); } } }
    const px = new Uint16Array(M * M * 2), k = 1 / (2 * tx), cl = i => Math.max(0, Math.min(M - 1, i));
    for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) { const o = (j * M + i) * 2; px[o] = THREE.DataUtils.toHalfFloat((H[j * M + cl(i + 1)] - H[j * M + cl(i - 1)]) * k); px[o + 1] = THREE.DataUtils.toHalfFloat((H[cl(j + 1) * M + i] - H[cl(j - 1) * M + i]) * k); }
    relief = new THREE.DataTexture(px, M, M, THREE.RGFormat, THREE.HalfFloatType); relief.minFilter = relief.magFilter = THREE.LinearFilter; relief.needsUpdate = true; }
  return { geo: g, height: (x, z) => parts(x, z).h, surf, peak: (x, z) => new THREE.Vector3(x, parts(x, z).h, z), relief };
}
/* Far-off ground seen from the air needs craters the terrain grid is too coarse to hold. This is a tile of them,
   already shaded as if lit by a low Sun in the east, to be laid over the distant surface. */
function craterTile(seed) {
  return noiseTex(512, (x, S) => { const R = rand(seed), H = new Float32Array(S * S);
    for (let i = 0; i < 110; i++) { const cx = R() * S, cy = R() * S, r = 2.5 + Math.pow(R(), 3.2) * 30, dep = (.6 + .6 * R()) * r * .22, e = Math.ceil(r * 1.9);
      for (let dy = -e; dy <= e; dy++) for (let dx = -e; dx <= e; dx++) { const d = Math.hypot(dx, dy) / r; if (d > 1.9) continue;
        const px = ((Math.round(cx) + dx) % S + S) % S, py = ((Math.round(cy) + dy) % S + S) % S;
        H[py * S + px] += (d < 1 ? -(1 - d * d) * dep : 0) + .22 * dep * Math.exp(-((d - 1) * (d - 1)) / .07); } }
    const im = x.createImageData(S, S), px = im.data;
    for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) { const g = H[j * S + (i + 1) % S] - H[j * S + (i + S - 1) % S], v = Math.max(0, Math.min(255, 128 - g * 52)), o = (j * S + i) * 4; px[o] = px[o + 1] = px[o + 2] = v; px[o + 3] = 255; }
    x.putImageData(im, 0, 0); });
}
const LM = [-145, 39];      // the lander stands about 150 m west of where the rover was parked
/* Wheel tracks from the lander to the rover: two ribbons laid on the ground, printed with the chevron tread of the wire wheels. */
function wheelTracks(T) {
  const tex = noiseTex(128, (x, S) => { x.clearRect(0, 0, S, S); x.fillStyle = 'rgba(40,38,36,.34)'; x.fillRect(S * .08, 0, S * .84, S);
    x.strokeStyle = 'rgba(18,17,16,.62)'; x.lineWidth = S * .055; x.lineCap = 'round';
    for (let k = -1; k < 5; k++) { const y = k * S / 4; x.beginPath(); x.moveTo(S * .14, y); x.lineTo(S * .5, y + S * .13); x.lineTo(S * .86, y); x.stroke(); }
    x.fillStyle = 'rgba(200,196,188,.2)'; x.fillRect(0, 0, S * .08, S); x.fillRect(S * .92, 0, S * .08, S); });      // a pale lip of soil pushed up along each edge
  const C = [[LM[0] - 6, LM[1] + 4], [LM[0] - 4.2, LM[1] + 5.6], [LM[0] + 3, LM[1] + 9.5], [LM[0] + 17, LM[1] + 3], [-112, 22], [-84, 30], [-58, 9], [-33, 13], [-14, 1], [-7, 0], [-3.5, 0], [.98, 0], [2.6, 0]], pts = [];
  const cr = (a, b, c, d, t) => .5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);
  for (let i = 1; i < C.length - 2; i++) { const n = Math.ceil(Math.hypot(C[i + 1][0] - C[i][0], C[i + 1][1] - C[i][1]) / .3);
    for (let k = 0; k < n; k++) { const t = k / n; pts.push([cr(C[i - 1][0], C[i][0], C[i + 1][0], C[i + 2][0], t), cr(C[i - 1][1], C[i][1], C[i + 1][1], C[i + 2][1], t)]); } }
  const pos = [], uv = [], idx = []; let s = 0, n = 0;
  [-.775, .795].forEach(off => {      /* measured from the model: the tyres sit 1.57 m apart, centre to centre */ const base = n; s = 0;
    pts.forEach((q, i) => { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], dx = b[0] - a[0], dz = b[1] - a[1], l = Math.hypot(dx, dz) || 1, nx = -dz / l, nz = dx / l;
      if (i) s += Math.hypot(q[0] - pts[i - 1][0], q[1] - pts[i - 1][1]);
      [-.13, .13].forEach((w, j) => { const X = q[0] + nx * (off + w), Z = q[1] + nz * (off + w); pos.push(X, T.surf(X, Z) + .012, Z); uv.push(j, s / .5); n++; });
      if (i) { const o = base + i * 2; idx.push(o - 2, o - 1, o, o, o - 1, o + 1); } }); });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: tex, transparent: true, depthWrite: false, roughness: 1, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }));
  m.receiveShadow = true; m.renderOrder = 1;
  // from the air the treads are too fine to see, but churned-up soil is darker: one soft dark line along the route, faded in as the camera climbs
  const tp = [], tu = [], ti = []; pts.forEach((q, i) => { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], dx = b[0] - a[0], dz = b[1] - a[1], l = Math.hypot(dx, dz) || 1;
    [-1, 1].forEach((sd, j) => { const X = q[0] - dz / l * sd * 1.5, Z = q[1] + dx / l * sd * 1.5; tp.push(X, T.surf(X, Z) + .02, Z); tu.push(j, 0); }); if (i) { const o = i * 2; ti.push(o - 2, o - 1, o, o, o - 1, o + 1); } });
  const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute(tp, 3)); tg.setAttribute('uv', new THREE.Float32BufferAttribute(tu, 2)); tg.setIndex(ti);
  const band = noiseTex(32, (x, S) => { const gr = x.createLinearGradient(0, 0, S, 0); gr.addColorStop(0, 'rgba(20,19,18,0)'); gr.addColorStop(.5, 'rgba(20,19,18,1)'); gr.addColorStop(1, 'rgba(20,19,18,0)'); x.clearRect(0, 0, S, S); x.fillStyle = gr; x.fillRect(0, 0, S, S); });
  const trail = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ map: band, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 })); trail.renderOrder = 1;
  const grp = new THREE.Group(); grp.add(m, trail); grp.userData.trail = trail.material; return grp;
}
/* The three drives of Apollo 17, seen from above. The stops are the surveyed positions (Haase et al. 2019, from Lunar
   Reconnaissance Orbiter images), in metres east and south of the lander; the line between stops follows the general
   route. Lines keep a constant width on screen and only appear once the camera is well above the ground. */
const STN = { 1: [423, 1031], 2: [-6869, 2782], 3: [-5866, 512], 4: [-4195, -740], 5: [-1297, 157], 6: [805, -3003], 7: [1294, -3036], 8: [3012, -2599], 9: [1735, -1228] };
const DRIVES = [
  ['Drive 1', '#F3E9CC', [[0, 0], [-192, -36], [-40, 60], [150, 520], STN[1], [367, 566], [129, -27], [0, 0]]],
  ['Drive 2', '#F0A23C', [[0, 0], [-386, 57], [-1350, 400], [-2500, 760], [-3900, 1250], [-5050, 1750], [-6000, 2500], STN[2], [-6500, 1700], STN[3], [-5100, -200], STN[4], [-2945, -766], [-2100, -330], STN[5], [-275, 72], [0, 0]]],
  ['Drive 3', '#7CC7F2', [[0, 0], [129, -27], [330, -1400], [460, -2700], STN[6], STN[7], [2200, -2950], STN[8], [2500, -1900], STN[9], [900, -600], [145, -39]]],
];
function screenLine(pts, col, U, order = 3) {      // a line laid over the ground ([x, y, z] points) that keeps the same width on screen at any distance
  const pos = [], perp = [], side = [], idx = [];
  pts.forEach((q, i) => { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], dx = b[0] - a[0], dz = b[2] - a[2], l = Math.hypot(dx, dz) || 1;
    [-1, 1].forEach(sd => { pos.push(q[0], q[1], q[2]); perp.push(-dz / l, dx / l); side.push(sd); });
    if (i) { const o = i * 2; idx.push(o - 2, o - 1, o, o, o - 1, o + 1); } });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('perp', new THREE.Float32BufferAttribute(perp, 2)); g.setAttribute('side', new THREE.Float32BufferAttribute(side, 1)); g.setIndex(idx);
  const m = new THREE.Mesh(g, new THREE.ShaderMaterial({ uniforms: { px: U.px, op: U.op, col: { value: new THREE.Color(col) } }, transparent: true, depthTest: false, depthWrite: false, side: THREE.DoubleSide,
    vertexShader: 'attribute vec2 perp; attribute float side; uniform float px; varying float vS; void main() { vec4 mv = modelViewMatrix * vec4( position, 1.0 ); float w = max( 1.2, -mv.z * px ); gl_Position = projectionMatrix * modelViewMatrix * vec4( position + vec3( perp.x, 0.0, perp.y ) * side * w * .5, 1.0 ); vS = side; }',
    fragmentShader: 'uniform vec3 col; uniform float op; varying float vS; void main() { gl_FragColor = vec4( col, op * smoothstep( 1.0, .5, abs( vS ) ) ); }' }));
  m.frustumCulled = false; m.renderOrder = order; return m;
}
function traverse(T, labels) {
  const grp = new THREE.Group(), U = { px: { value: .001 }, op: { value: 0 } };
  const cr = (a, b, c, d, t) => .5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);
  DRIVES.forEach(dr => { const C = dr[2].map(q => [LM[0] + q[0], LM[1] + q[1]]), pts = [], P = i => C[Math.max(0, Math.min(C.length - 1, i))];
    for (let i = 0; i < C.length - 1; i++) { const n = Math.max(2, Math.ceil(Math.hypot(C[i + 1][0] - C[i][0], C[i + 1][1] - C[i][1]) / 35));
      for (let k = 0; k < n; k++) { const t = k / n; pts.push([cr(P(i - 1)[0], P(i)[0], P(i + 1)[0], P(i + 2)[0], t), cr(P(i - 1)[1], P(i)[1], P(i + 1)[1], P(i + 2)[1], t)]); } }
    pts.push(C[C.length - 1]);
    grp.add(screenLine(pts.map(q => [q[0], T.surf(q[0], q[1]) + 2, q[1]]), dr[1], U)); });
  const dot = noiseTex(64, (x, S) => { x.clearRect(0, 0, S, S); x.beginPath(); x.arc(S / 2, S / 2, S * .36, 0, 6.2832); x.fillStyle = '#F6EED8'; x.fill(); x.lineWidth = S * .1; x.strokeStyle = '#15131A'; x.stroke(); });
  const dp = []; Object.keys(STN).forEach(k => { const x = LM[0] + STN[k][0], z = LM[1] + STN[k][1]; dp.push(x, T.surf(x, z) + 3, z); });
  const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.Float32BufferAttribute(dp, 3));
  const dm = new THREE.PointsMaterial({ map: dot, size: 11, sizeAttenuation: false, transparent: true, depthTest: false, depthWrite: false, toneMapped: false, opacity: 0 });
  const dots = new THREE.Points(dg, dm); dots.frustumCulled = false; dots.renderOrder = 4; grp.add(dots);
  const at = (k, dx, dz) => { const x = LM[0] + STN[k][0] + (dx || 0), z = LM[1] + STN[k][1] + (dz || 0); return new THREE.Vector3(x, T.surf(x, z) + 3, z); };
  [['1', 1], ['2 · Nansen', 2], ['3', 3], ['4 · Shorty', 4, 'L'], ['5 · Camelot', 5, 'T'], ['6 · 7', 7], ['8', 8], ['9 · Van Serg', 9]].forEach(l => labels.push([l[0], at(l[1]), 0, 0, 900, l[2]]));      // shown only from well above the ground; two labels sit left of or above their dots to keep clear of the others
  grp.userData = { U, dm }; return grp;
}
function landerShadow(T, sun) {      // the lander is far outside the range of the scene's real shadows, so give it a soft painted one
  const tex = noiseTex(64, (x, S) => { const g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2); g.addColorStop(0, 'rgba(0,0,0,.8)'); g.addColorStop(.55, 'rgba(0,0,0,.62)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, S, S); });
  const len = 7.2 / Math.tan(Math.asin(sun.y)), hx = -sun.x / Math.hypot(sun.x, sun.z), hz = -sun.z / Math.hypot(sun.x, sun.z), g = new THREE.PlaneGeometry(1, 1, 14, 8), P = g.attributes.position;
  for (let i = 0; i < P.count; i++) { const u = P.getX(i) + .5, v = P.getY(i), X = LM[0] + hx * (u * (len + 5) - 4) - hz * v * 9.5, Z = LM[1] + hz * (u * (len + 5) - 4) + hx * v * 9.5; P.setXYZ(i, X, T.surf(X, Z) + .03, Z); }
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 })); m.renderOrder = 1; return m;
}
function tuneLander(root) {      // NASA's lander is flat yellow and grey plastic; the real one was crinkled gold foil over a dull aluminium cabin
  root.traverse(o => { if (!o.isMesh) return; [].concat(o.material).forEach(m => { const n = m.name || '', set = (hex, metal, rough) => { m.color.set(hex); m.metalness = metal; m.roughness = rough; m.envMapIntensity = 1.6; };
    if (/blinn1SG|blinn10SG/.test(n)) { set(0xcf8530, .5, .4); weather(m, .24, .2, .55, 5); }      // amber foil, as it photographed on the Moon
    else if (/blinn9SG/.test(n)) { set(0xa85a22, .5, .42); weather(m, .24, .2, .5, 5); }
    else if (/initialShadingGr|blinn3SG|blinn7SG/.test(n)) { set(n.includes('blinn3') ? 0x62554d : 0x92806f, .45, .46); m.envMapIntensity = 1.1; weather(m, .16, .16, .1, 2.5); }      // cabin: dull tan-grey aluminium panels, as they photographed on the Moon — not bright silver
    else if (/blinn4SG/.test(n)) { set(0xb3aba0, .55, .5); weather(m, .14, .15, .1, 2.5); }      // legs, ladder, porch and antennas: bare metal
    else if (/blinn6SG|blinn2SG/.test(n)) { set(n.includes('blinn6') ? 0x18181a : 0x3c3634, .5, .55); }
    else weather(m, .12, .1, .05, 3); }); });
}
/* Jezero Crater from above. The ground is real: a mosaic of elevation models the USGS made from stereo pairs taken by
   the CTX camera on Mars Reconnaissance Orbiter (20 m detail), resampled to a 90 km square, north up (models/jezero.bin:
   heights in quarter-metres relative to the landing site). Over it lies the same camera's orthorectified photography
   (models/jezero.jpg), black and white, given the tones of a true-colour orbital view; its edges fade to the ground's broad colour, which a low-detail skirt (models/jezero-wide.jpg, 360 km) carries out to the horizon. +x is east, +z is south. */
const JZ = { W: 90000, C: [-982, 3835], RM: 3389500, ground: '#66584d', WIDE: 360000 };      // the square's centre (18.38° N 77.433° E), in metres east and south of the landing site: the whole crater, the rover's drives and the country west of the rim
function marsCrater(dem, map) {
  const M = Math.round(Math.sqrt(dem.length)), S = matchMedia('(max-width:600px)').matches ? Math.min(M, 384) : M, pos = [], uv = [], idx = [];
  const hAt = (x, z) => { const u = Math.max(0, Math.min(M - 1.001, ((x - JZ.C[0]) / JZ.W + .5) * M - .5)), v = Math.max(0, Math.min(M - 1.001, ((z - JZ.C[1]) / JZ.W + .5) * M - .5)), i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, k = j * M + i;
    return ((dem[k] * (1 - fu) + dem[k + 1] * fu) * (1 - fv) + (dem[k + M] * (1 - fu) + dem[k + M + 1] * fu) * fv) / 4; };
  const ss = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const edge = []; for (let i = 0; i < M; i++) edge.push(dem[i], dem[(M - 1) * M + i], dem[i * M], dem[i * M + M - 1]); edge.sort((p, q) => p - q); const H0 = edge[edge.length >> 1] / 4;      // the typical height round the square's edge
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
    const a = i * (M - 1) / (S - 1), b = j * (M - 1) / (S - 1), x = JZ.C[0] + ((a + .5) / M - .5) * JZ.W, z = JZ.C[1] + ((b + .5) / M - .5) * JZ.W, r = Math.hypot(x, z), k = ss(450, 900, r);
    const e = ss(0, 6000, JZ.W / 2 - Math.max(Math.abs(x - JZ.C[0]), Math.abs(z - JZ.C[1]))), h = H0 + (hAt(x, z) - H0) * e;      // the last few km settle onto the level of the ground beyond
    pos.push(x, h * k - .4 * (1 - k) - r * r / (2 * JZ.RM), z); uv.push((a + .5) / M, 1 - (b + .5) / M); }      // tucked just under the rover's own patch of ground, and falling away with the curve of Mars
  for (let j = 0; j < S - 1; j++) for (let i = 0; i < S - 1; i++) { const o = j * S + i; idx.push(o, o + S, o + 1, o + 1, o + S, o + S + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
  map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8;
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map }));      // the photograph already holds the light and shade of the real Sun
  // beyond the square: plain ground of the photograph's average colour, out past the horizon, curving away with the planet
  const X = [], sp = [], su = [], si = [], hw = JZ.W / 2 - 200; for (let k = 0; k <= 20; k++) X.push(hw * Math.pow(700000 / hw, k / 20)); const I = []; for (let k = 1; k < 8; k++) I.push(hw * (k / 4 - 1)); const L = [...X.map(v => -v).reverse(), ...I, ...X];      // spans across the square are split so they curve with the planet
  L.forEach(zv => L.forEach(xv => { const x = JZ.C[0] + xv, z = JZ.C[1] + zv; sp.push(x, H0 - 3 - 20 * ss(0, 3000, Math.max(Math.abs(xv), Math.abs(zv)) - hw) - (x * x + z * z) / (2 * JZ.RM), z); su.push(xv / JZ.WIDE + .5, .5 - zv / JZ.WIDE); }));
  const n = L.length, a0 = X.length - 1, a1 = a0 + I.length + 1, inner = i => i >= a0 && i < a1; for (let j = 0; j < n - 1; j++) for (let i = 0; i < n - 1; i++) { if (inner(i) && inner(j)) continue; const o = j * n + i; si.push(o, o + n, o + 1, o + 1, o + n, o + n + 1); }      // the cells inside are the square itself
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3)); sg.setAttribute('uv', new THREE.Float32BufferAttribute(su, 2)); sg.setIndex(si);
  const skirt = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ color: JZ.ground })); m.add(skirt);
  new THREE.TextureLoader().load('models/jezero-wide.jpg', t => { t.colorSpace = THREE.SRGBColorSpace; skirt.material.map = t; skirt.material.color.set(0xffffff); skirt.material.needsUpdate = true; });      // the surrounding ground's broad colours, fading to the average far out
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const surf = (x, z) => {      // height of the drawn surface itself (the triangles), so detail laid on it sits exactly on it
    const fi = clamp(((x - JZ.C[0]) / JZ.W + .5) * M - .5, 0, M - 1) * (S - 1) / (M - 1), fj = clamp(((z - JZ.C[1]) / JZ.W + .5) * M - .5, 0, M - 1) * (S - 1) / (M - 1);
    const i = Math.min(S - 2, Math.floor(fi)), j = Math.min(S - 2, Math.floor(fj)), u = fi - i, v = fj - j, o = (j * S + i) * 3, Y = q => pos[q + 1];
    return u + v <= 1 ? Y(o) + (Y(o + 3) - Y(o)) * u + (Y(o + S * 3) - Y(o)) * v : Y(o + S * 3 + 3) + (Y(o + S * 3) - Y(o + S * 3 + 3)) * (1 - u) + (Y(o + 3) - Y(o + S * 3 + 3)) * (1 - v);
  };
  m.visible = false; return { mesh: m, surf, at: (x, z, up = 0) => new THREE.Vector3(x, hAt(x, z) - (x * x + z * z) / (2 * JZ.RM) + up, z) };
}
/* Perseverance's drives, from NASA's published traverse (models/jezero-route.json, made by src/jezero-crater/route.py:
   one line per calendar year, in metres east and south of the landing site), drawn like the Apollo 17 drives. */
const YEARS = ['#F3E9CC', '#F0A23C', '#7CC7F2', '#E36F5A', '#9BD88A', '#C9A4F0'];      // 2021 onwards
/* What a tap on a named place shows. NASA/JPL-Caltech photographs: two from the rover game's set (rover/photos/), the rest in img/m20/. */
const M20_CARDS = {
  'Landing site': { t: 'Octavia E. Butler Landing', d: '18 February 2021', x: 'Perseverance touched down here after a parachute and a rocket-powered sky crane lowered it to the crater floor. NASA named the spot for the science-fiction author Octavia E. Butler.',
    img: 'rover/photos/PIA24485.jpg', cap: '“Kodiak,” a remnant of the delta, photographed from here four days after landing. Its sloping and flat layers are what a river builds as it runs into a lake. NASA/JPL-Caltech/ASU/MSSS' },
  'River delta': { t: 'The delta', d: 'About 3.5 billion years old', x: 'A fan of mud and sand laid down where a river ran into the lake that once filled Jezero. Layers like these are good at preserving traces of life, which is why Perseverance was sent here.',
    img: 'rover/photos/PIA24684.jpg', cap: 'The delta’s cliffs seen from the crater floor by Mastcam-Z and SuperCam, 2021. Boulders up to 1.5 m across near the top show the gentle river later gave way to flash floods. NASA/JPL-Caltech/LANL/CNES/CNRS/ASU/MSSS' },
  'Ingenuity’s first flight': { t: 'Ingenuity’s first flight', d: '19 April 2021', x: 'The helicopter lifted off from a patch of flat ground nearby, climbed 3 m, hovered and landed: 39 seconds, the first powered, controlled flight on another planet. Perseverance filmed it from a rise about 65 m away. The patch is now called Wright Brothers Field.',
    img: 'img/m20/first-flight.jpg', cap: 'Ingenuity on Wright Brothers Field, photographed by Perseverance’s Mastcam-Z on the day of the flight. NASA/JPL-Caltech/ASU' },
  'First rock core': { t: 'The first rock core', d: '1 September 2021', x: 'The rover drilled into a flat rock nicknamed “Rochette” and sealed a core slightly thicker than a pencil in a titanium tube: the first rock sample collected on another planet for possible return to Earth. A first attempt a month earlier, on a softer rock, crumbled to powder.',
    img: 'img/m20/rochette.jpg', cap: 'Rochette with the two holes left by its cores, drilled on 1 and 7 September 2021. Mastcam-Z. NASA/JPL-Caltech/ASU/MSSS' },
  'Sample depot': { t: 'The sample depot', d: '21 December 2022 to 28 January 2023', x: 'The rover set ten sealed sample tubes down on the ground here, 5 to 15 m apart: a backup set, in case it cannot deliver the samples it still carries. It is the first sample depot on another planet.',
    img: 'img/m20/depot.jpg', cap: 'The rover’s selfie at the depot on 22 January 2023, with a sample tube lying on the ground in front of it. WATSON camera. NASA/JPL-Caltech/MSSS' },
  'Wildcat Ridge': { t: '“Wildcat Ridge”', d: 'July 2022', x: 'A mudstone laid down as an ancient salty lake dried out, about 3.5 billion years ago. When the rover scraped its surface on 20 July 2022, it found the strongest signs of organic molecules of the mission so far, alongside sulfate minerals. Organic molecules are building blocks of life, but geology can make them too. The rover kept two cores.',
    img: 'img/m20/wildcat-ridge.jpg', cap: 'The patch the rover ground into Wildcat Ridge (“Berry Hollow,” right) beside one from an earlier rock (“Thornton Gap,” left): the mudstone is far finer-grained. WATSON camera, 2022. NASA/JPL-Caltech/MSSS' },
  'Belva Crater': { t: 'Belva Crater', d: 'April 2023', x: 'A crater about 1 km wide punched into the top of the delta. From its rim on 22 April 2023, Mastcam-Z took 152 pictures of its walls, where the impact had cut through the delta’s layers like a road cut. Around the same time the rover lost its “pet rock,” a pebble that had ridden in one of its front wheels for more than a year.',
    img: 'img/m20/belva-crater.jpg', cap: 'Belva Crater from its western rim on 22 April 2023, stitched from 152 Mastcam-Z images. The far wall of Jezero rises beyond, about 40 km away. NASA/JPL-Caltech/ASU/MSSS' },
  'Lookout Hill': { t: 'Lookout Hill', d: '10 December 2024', x: 'After three and a half months climbing 500 m, up slopes as steep as 20 percent, the rover reached the top of Jezero’s rim. From here it could see 60 km across Mars. The rim marks where rocks that fell back into the crater after it formed, 3.9 billion years ago, meet rocks the impact threw outside.',
    img: 'img/m20/lookout-hill.jpg', cap: 'Mastcam-Z view at Lookout Hill on Jezero’s rim, December 2024. The rover’s tracks run up the slope at right. NASA/JPL-Caltech/ASU/MSSS' },
  'Silver Mountain': { t: '“Silver Mountain”', d: '28 January 2025', x: 'The first sample from the crater rim, cored from a rock that most likely formed at least 3.9 billion years ago, early in Mars’s history, and may have been shattered and recrystallized by an ancient impact. Its textures were unlike anything the rover had seen before.' },
  Perseverance: { t: 'Perseverance today', d: 'Distance record: 11 October 2026', x: 'With 45.22 km on its odometer, Perseverance passed Opportunity’s record for the farthest drive on another world, on a mission planned around far shorter drives. Most of its driving is done by its own self-driving software. It is now exploring the old rocks beyond the crater’s western rim.' },
  'Cheyava Falls': { t: '“Cheyava Falls”', d: 'July 2024', x: 'An arrowhead-shaped rock at the edge of an old river valley, dotted with millimeter-sized “leopard spots”: pale patches ringed with dark minerals, a pattern that on Earth can be linked to microbes feeding on rock. In 2025 scientists called its core, “Sapphire Canyon,” the mission’s best candidate yet for a sign of ancient life. Chemistry without life could also explain it; only a lab on Earth could tell.',
    img: 'img/m20/cheyava-falls.jpg', cap: 'Cheyava Falls up close: the leopard spots, and pale-green olivine crystals in the white vein beside them. WATSON camera, 18 July 2024. NASA/JPL-Caltech/MSSS' },
};
function showCard(c) {
  $('sc-info').innerHTML = '<div class="vg-infon">' + c.t + '</div><div class="sc-cardd">' + c.d + '</div>' + (c.img ? '<div class="sc-cardph"><img class="sc-cardimg" src="' + c.img + '" alt=""><span>Tap to enlarge</span></div>' : '') + '<div class="vg-infot">' + c.x + '</div>' + (c.cap ? '<div class="sc-cardcap">' + c.cap + '</div>' : '');
  const im = $('sc-info').querySelector('.sc-cardimg');
  if (im) { const wide = () => { if (im.naturalWidth > im.naturalHeight * 2.2) { im.parentElement.classList.add('pano'); im.nextElementSibling.textContent = 'Tap to pan the panorama'; } }; im.complete ? wide() : im.addEventListener('load', wide);
    im.parentElement.addEventListener('click', e => { e.stopPropagation(); showPhoto(c.img, c.cap, im.parentElement.classList.contains('pano')); }); }
  $('sc-info').classList.add('open');
}
/* Full screen: a panorama fills the height and pans sideways (drag, swipe or scroll); anything else fits the screen. */
function showPhoto(src, cap, pano) {
  const lb = $('sc-light'); lb.classList.toggle('pano', pano);
  lb.querySelector('.sc-lightpan').innerHTML = '<img src="' + src + '" alt="">'; lb.querySelector('.sc-lightcap').innerHTML = cap || '';
  lb.classList.add('on'); document.body.style.overflow = 'hidden';
  const pan = lb.querySelector('.sc-lightpan'), img = pan.firstChild, mid = () => { pan.scrollLeft = (pan.scrollWidth - pan.clientWidth) / 2; };
  if (pano) { img.complete ? mid() : img.addEventListener('load', mid); }
  img.draggable = false;      // otherwise the browser starts dragging the picture itself and the pan stalls
  let dragX = null, lastX = 0, lastT = 0, vel = 0, coast = 0, moved = 0;      // a mouse drags it like a finger, and it coasts on when let go
  pan.onpointerdown = e => { if (e.pointerType !== 'mouse' || e.button) return; e.preventDefault(); cancelAnimationFrame(coast); dragX = lastX = e.clientX; lastT = performance.now(); vel = 0; moved = 0; pan.setPointerCapture(e.pointerId); pan.classList.add('grab'); };
  pan.onpointermove = e => { if (dragX === null) return; const t = performance.now(), dx = e.clientX - lastX; pan.scrollLeft -= dx; moved += Math.abs(dx); vel = .8 * (dx / Math.max(1, t - lastT)) + .2 * vel; lastX = e.clientX; lastT = t; };
  pan.onpointerup = pan.onpointercancel = () => { if (dragX === null) return; pan.classList.remove('grab'); dragX = null; if (performance.now() - lastT > 80) vel = 0;
    let v = vel * 16, prev = performance.now(); const step = now => { const k = Math.min(3, (now - prev) / 16); prev = now; pan.scrollLeft -= v * k; v *= Math.pow(.94, k); if (Math.abs(v) > .3) coast = requestAnimationFrame(step); }; coast = requestAnimationFrame(step); };
  pan.onwheel = pano ? e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.preventDefault(); pan.scrollLeft += e.deltaY; } } : null;      // the scroll wheel pans a panorama sideways
  pan.onclick = e => { if (moved > 4) e.stopPropagation(); };      // a drag that ends off the picture is not a tap to close
}
$('sc-light').addEventListener('click', e => { if (e.target.closest('.sc-lightx') || !e.target.closest('.sc-lightpan img')) { $('sc-light').classList.remove('on'); document.body.style.overflow = ''; } });
addEventListener('keydown', e => { if (e.key === 'Escape' && $('sc-light').classList.contains('on')) { $('sc-light').classList.remove('on'); document.body.style.overflow = ''; } });
function roverRoute(J, R, labels) {
  const grp = new THREE.Group(), U = { px: { value: .001 }, op: { value: 0 } }, n = R.drives.length;
  R.drives.forEach((d, i) => { const p = d[1], pts = []; for (let k = 0; k < p.length; k += 2) pts.push(J.at(p[k], p[k + 1], 6).toArray()); grp.add(screenLine(pts, YEARS[i % YEARS.length], U, 3 + n - i)); });      // earlier years drawn on top: later drives often retrace them
  const p = R.drives[n - 1][1], now = J.at(p[p.length - 2], p[p.length - 1], 8), when = new Date(Date.UTC(2021, 1, 18) + R.sols[1] * 1.02749125 * 864e5);      // the latest position; a sol is 1.0275 days, counted from landing
  const dot = noiseTex(64, (x, S) => { x.clearRect(0, 0, S, S); x.beginPath(); x.arc(S / 2, S / 2, S * .36, 0, 6.2832); x.fillStyle = '#F6EED8'; x.fill(); x.lineWidth = S * .1; x.strokeStyle = '#15131A'; x.stroke(); });
  const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.Float32BufferAttribute(now.toArray(), 3));
  const dm = new THREE.PointsMaterial({ map: dot, size: 11, sizeAttenuation: false, transparent: true, depthTest: false, depthWrite: false, toneMapped: false, opacity: 0 });
  const pt = new THREE.Points(dg, dm); pt.frustumCulled = false; pt.renderOrder = 4 + n; grp.add(pt);
  const mo = when.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }), tall = camera.aspect < 1.1;      // on a phone the rover sits near the left edge: two short lines below it instead of one long one to its left
  labels.push([tall ? 'Perseverance<br>' + mo : 'Perseverance · ' + mo, now, 0, 0, 1500, tall ? 'B' : 'L', M20_CARDS.Perseverance]);
  // pins: where the rover stood on the day of a milestone (positions from the traverse; see route.py)
  const pins = R.pins || [], pp = [], dp = new THREE.PointsMaterial({ map: dot, color: 0xE6CC85, size: 8, sizeAttenuation: false, transparent: true, depthTest: false, depthWrite: false, toneMapped: false, opacity: 0 });
  pins.forEach(q => { const v = J.at(q[1], q[2], 8); pp.push(v.x, v.y, v.z); labels.push([q[0], v, 0, 30000, 1500, /^(Ingenuity|Wildcat|Silver)/.test(q[0]) ? 'L' : undefined]); });      // named only once zoomed in; where two places sit close together (the landing site and the first flight, Wildcat Ridge and the depot, Lookout Hill and Silver Mountain), one name goes to the left
  if (pp.length) { const g2 = new THREE.BufferGeometry(); g2.setAttribute('position', new THREE.Float32BufferAttribute(pp, 3)); const pts = new THREE.Points(g2, dp); pts.frustumCulled = false; pts.renderOrder = 4 + n; grp.add(pts); }
  grp.userData = { U, dm, dp, legend: R.drives.map((d, i) => '<span><i style="background:' + YEARS[i % YEARS.length] + '"></i>' + d[0] + '</span>').join('') }; return grp;
}
/* HiRISE detail (made by src/jezero-crater/hirise.py): models/m20mid/, 4 km tiles at 4 m a pixel over the whole drive, for the
   zoomed-out view; models/m20hr/, 1 km tiles at 1 m a pixel along the route itself,
   the CTX map's colours with HiRISE's fine texture — dunes, ripples, boulder fields. Each tile is laid on the
   drawn surface and loads only when the camera comes within a few kilometres; far ones let their pictures go. */
/* Where the strip ends, the detail frays out over a few hundred metres along a ragged, noisy line (continuous from tile to tile)
   instead of stopping at a straight tile edge. */
const HR_EDGE = `
  float hrH( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453 ); }
  float hrN( vec2 p ) { vec2 i = floor( p ), f = fract( p ); f = f * f * ( 3.0 - 2.0 * f );
    return mix( mix( hrH( i ), hrH( i + vec2( 1, 0 ) ), f.x ), mix( hrH( i + vec2( 0, 1 ) ), hrH( i + vec2( 1, 1 ) ), f.x ), f.y ); }
  float hrEdge( vec2 uv, float T ) {
    vec2 w = hrO + vec2( uv.x, 1.0 - uv.y ) * T;
    float n = hrN( w / 260.0 ) * .55 + hrN( w / 90.0 + 17.0 ) * .3 + hrN( w / 30.0 + 41.0 ) * .15;
    float d = 1e5;
    if ( hrOpen.x > .5 ) d = min( d, uv.x * T ); if ( hrOpen.y > .5 ) d = min( d, ( 1.0 - uv.x ) * T );
    if ( hrOpen.z > .5 ) d = min( d, ( 1.0 - uv.y ) * T ); if ( hrOpen.w > .5 ) d = min( d, uv.y * T );
    return smoothstep( hrE.x, hrE.y, d + ( n - .5 ) * hrE.y ); }`;
function detailTiles(J, idx, dir, L) {      // L: grid points across a tile, fade-out distance and height, ragged-edge width, draw order
  const grp = new THREE.Group(), T = idx.size, N = L.N, list = [], loader = new THREE.TextureLoader();
  const have = new Set(idx.tiles.map(t => t[0] + ',' + t[1]));
  idx.tiles.forEach(([tx, tz]) => {
    const x0 = tx * T, z0 = tz * T, pos = [], uv = [], ix = [];
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const x = x0 + i / (N - 1) * T, z = z0 + j / (N - 1) * T; pos.push(x, J.surf(x, z) + 3, z); uv.push(i / (N - 1), 1 - j / (N - 1)); }
    for (let j = 0; j < N - 1; j++) for (let i = 0; i < N - 1; i++) { const o = j * N + i; ix.push(o, o + N, o + 1, o + 1, o + N, o + N + 1); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(ix);
    const mat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
    const open = [[-1, 0], [1, 0], [0, -1], [0, 1]].map(([a, b]) => have.has((tx + a) + ',' + (tz + b)) ? 0 : 1);      // sides with no tile beyond them
    mat.onBeforeCompile = sh => { sh.uniforms.hrOpen = { value: new THREE.Vector4(...open) }; sh.uniforms.hrO = { value: new THREE.Vector2(x0, z0) }; sh.uniforms.hrE = { value: new THREE.Vector2(...L.edge) };
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform vec4 hrOpen; uniform vec2 hrO; uniform vec2 hrE;' + HR_EDGE).replace('#include <map_fragment>', '#include <map_fragment>\n diffuseColor.a *= hrEdge( vMapUv, ' + T.toFixed(1) + ' );'); };
    mat.customProgramCacheKey = () => 'hredge';
    const m = new THREE.Mesh(g, mat);
    m.visible = false; m.renderOrder = L.order; grp.add(m);
    list.push({ m, cx: x0 + T / 2, cz: z0 + T / 2, url: dir + tx + '_' + tz + '.jpg', state: 0 });
  });
  grp.userData.update = cam => {      // show and fade tiles by distance; fetch the near ones, release the far ones
    for (const t of list) {
      const d = Math.hypot(cam.x - t.cx, cam.y, cam.z - t.cz), o = cam.y < L.top ? (1 - Math.max(0, Math.min(1, (d - L.far) / (L.far / 2)))) * Math.max(0, Math.min(1, (cam.y - 150) / 250)) : 0;      // none near the ground: the tiles sit 3 m up and would bury the rover
      if (o > 0 && !t.state) { t.state = 1; loader.load(t.url, tex => { tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8; t.m.material.map = tex; t.m.material.needsUpdate = true; t.state = 2; }, undefined, () => { t.state = 3; }); }
      if (d > L.far * 2 && t.state === 2) { t.m.material.map.dispose(); t.m.material.map = null; t.state = 0; }
      t.m.material.opacity = t.state === 2 ? o : 0; t.m.visible = t.state === 2 && o > 0;
    }
  };
  return grp;
}
/* A repeating texture shows its repeat from a distance. Mix three copies at
   unrelated scales and rotations (and normalise by the texture's average) so
   the pattern never lines up with itself. */
function untile(mat, farTex, relief) {
  mat.onBeforeCompile = sh => { sh.uniforms.farMap = { value: farTex || null }; sh.uniforms.reliefMap = { value: relief || null };
    sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', `
      #ifdef USE_MAP
        vec3 mMean = texture2D( map, vec2( .5 ), 12.0 ).rgb + 1e-4;
        vec4 mA = texture2D( map, vMapUv );
        vec3 mB = texture2D( map, mat2( .7986, -.6018, .6018, .7986 ) * vMapUv * .283 + .37 ).rgb / mMean;
        vec3 mC = texture2D( map, mat2( -.3584, .9336, -.9336, -.3584 ) * vMapUv * .0617 + .71 ).rgb / mMean;
        float rUp = smoothstep( 300.0, 3000.0, cameraPosition.y ), hUp = smoothstep( 2.5, 22.0, cameraPosition.y );      // 0 on the ground, 1 seen from high above
        float mNear = smoothstep( 260.0, 40.0, vViewPosition.z ), mFar = smoothstep( 500.0, 2500.0, vViewPosition.z );            // fine grain only close up; none at all on mountains kilometres away
        vec3 mD = texture2D( map, mat2( .6, .8, -.8, .6 ) * vMapUv * .0113 + .19 ).rgb / mMean, mE = texture2D( map, mat2( -.8, .6, -.6, -.8 ) * vMapUv * .0031 + .53 ).rgb / mMean;      // broad mottling, kilometres across
        vec4 sampledDiffuseColor = vec4( mix( mMean, mA.rgb, ( .35 + .65 * mNear ) * ( 1.0 - mFar ) * ( 1.0 - .8 * hUp ) ) * mix( vec3( 1.0 ), mB, .55 * ( 1.0 - mFar ) * ( 1.0 - .8 * hUp ) ) * mix( vec3( 1.0 ), mC, ( .55 - .45 * mFar ) * ( 1.0 - .85 * hUp ) ) * mix( vec3( 1.0 ), mD * mE, .16 * mFar * ( 1.0 - .9 * rUp ) ), 1.0 );
        diffuseColor *= sampledDiffuseColor;
        FARCRATERS
      #endif`.replace('FARCRATERS', farTex ? 'float fc = ( texture2D( farMap, vMapUv * .0068 ).r - .5 ) * .8 + ( texture2D( farMap, vMapUv * .0257 + .37 ).r - .5 ) * .5; fc *= max( smoothstep( 300.0, 1800.0, vViewPosition.z ), hUp ); fc += ( texture2D( farMap, mat2( .8, -.6, .6, .8 ) * vMapUv * .093 + .11 ).r - .5 ) * .5 * hUp * smoothstep( 600.0, 150.0, vViewPosition.z ); diffuseColor.rgb *= 1.0 + fc * ( 1.0 - .75 * rUp * smoothstep( 6000.0, 26000.0, vViewPosition.z ) );' : ''));
    if (relief) sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      if ( rUp > 0.0 ) { vec2 rs = texture2D( reliefMap, vMapUv * ( 34.0 / 64000.0 ) + .5 ).rg; normal = normalize( mix( normal, normalize( ( viewMatrix * vec4( -rs.x * 1.2, 1.0, -rs.y * 1.2, 0.0 ) ).xyz ), rUp ) ); }`).replace('#include <common>', '#include <common>\nuniform sampler2D reliefMap;');
    if (farTex) sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform sampler2D farMap;');
  };
  mat.customProgramCacheKey = () => 'untile';
}
/* Earth from low orbit: 1 scene unit = 1 km here, so the planet has its true
   curvature and fills the lower half of the sky. The photo (an Apollo view) is
   too soft this close, so fine cloud texture is layered on from noise, and the
   air shows as a thin blue line on the horizon. */
function earthBelow(sun, alt) {
  /* The ground from low orbit. No single picture is sharp enough to fill the view from 400 km up, so this is built in layers:
     NASA's cloud-free Blue Marble for land and sea, a global cloud map for where the weather is (both taken from the
     MIT-licensed three-globe project's example images), and fine cloud structure
     worked into it procedurally so the edges stay crisp however close the view. Centred on open Atlantic east of the Bahamas,
     so what lies straight below is sea and cloud, and the coarse land imagery is only ever seen far off toward the horizon. */
  const R = 6371, grp = new THREE.Group(); grp.position.set(0, -(R + alt), 0);
  const load = u => { const t = new THREE.TextureLoader().load(u); t.anisotropy = 8; t.generateMipmaps = false; t.minFilter = THREE.LinearFilter; return t; };
  const tex = load('models/earth-leo.jpg'), ctex = load('models/earth-leo-clouds.jpg'); tex.colorSpace = THREE.SRGBColorSpace; ctex.colorSpace = THREE.NoColorSpace;
  const noise = fbmTex(512, 8, ['#000000', '#ffffff'], 77, 0); noise.colorSpace = THREE.NoColorSpace;
  const common = 'varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(position); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }';
  const surf = new THREE.Mesh(new THREE.SphereGeometry(R, 320, 72, 0, Math.PI * 2, 0, .62), new THREE.ShaderMaterial({
    uniforms: { map: { value: tex }, cmap: { value: ctex }, nz: { value: noise }, sunDir: { value: sun.clone() }, span: { value: 2 * Math.sin(27 * D2R) } }, vertexShader: common,
    fragmentShader: `uniform sampler2D map; uniform sampler2D cmap; uniform sampler2D nz; uniform vec3 sunDir; uniform float span; varying vec3 vN; varying vec3 vW;
      vec4 bic(sampler2D t, vec2 uv) {                                           // smooth (bicubic) magnification: no blocky pixels close up
        vec2 p = uv * 1024. - .5, f = fract(p), i = floor(p), f2 = f * f, f3 = f2 * f;
        vec2 w0 = (1. - 3. * f + 3. * f2 - f3) / 6., w1 = (3. * f3 - 6. * f2 + 4.) / 6., w2 = (-3. * f3 + 3. * f2 + 3. * f + 1.) / 6., w3 = f3 / 6.;
        vec2 g0 = w0 + w1, g1 = w2 + w3, h0 = (i + w1 / g0 - .5) / 1024., h1 = (i + w3 / g1 + 1.5) / 1024.;
        return (texture2D(t, vec2(h0.x, h0.y)) * g0.x + texture2D(t, vec2(h1.x, h0.y)) * g1.x) * g0.y + (texture2D(t, vec2(h0.x, h1.y)) * g0.x + texture2D(t, vec2(h1.x, h1.y)) * g1.x) * g1.y; }
      float fbm(vec2 p) { return texture2D(nz, p).r * .5 + texture2D(nz, mat2(.8, -.6, .6, .8) * p * 2.9 + .31).r * .27 + texture2D(nz, mat2(-.6, .8, -.8, -.6) * p * 8.3 + .73).r * .15 + texture2D(nz, mat2(.28, .96, -.96, .28) * p * 23. + .17).r * .08; }
      float clouds(vec2 q, vec2 uv) {
        float big = bic(cmap, uv).r;                                            // the real weather systems
        big = pow(big, .6) * 1.1 + smoothstep(.46, .78, fbm(q * 1.7 + 3.)) * .42 + smoothstep(.5, .72, fbm(q * 6.3 + 1.3)) * .34 + smoothstep(.56, .74, fbm(q * 19. + 7.)) * .3;      // plus scattered fields the cloud map is too coarse to hold
        vec2 w = q * 34. + (vec2(fbm(q * 9.), fbm(q * 9. + 5.2)) - .5) * 2.2;     // warped so the fine structure streaks and curls
        float d = fbm(w);
        return clamp((big - (1. - d) * .78) / .34, 0., 1.);                      // eat into the soft shape with fine detail
      }
      void main(){
        vec2 q = vN.xz, uv = .5 + vec2(q.x, -q.y) / span;
        vec3 base = bic(map, uv).rgb;
        float land = smoothstep(.07, .2, base.r + base.g * .4 - base.b * .55);
        base *= 1. + (fbm(q * 120.) - .5) * mix(.16, .6, land);                  // grain: swell on the sea, terrain on land
        vec2 sd = normalize(sunDir.xz + 1e-4) * .0016;                            // toward the Sun, for relief and shadows
        float c = clouds(q, uv), cs = clouds(q + sd * 1.8, uv + vec2(sd.x, -sd.y) * 1.8 / span);
        float d = dot(vN, sunDir), light = smoothstep(-.08, .3, d) * (.45 + .75 * max(d, 0.0));
        vec3 v = normalize(cameraPosition - vW), hv = normalize(sunDir + v);
        float glint = (pow(max(dot(vN, hv), 0.), 240.) * .1 + pow(max(dot(vN, hv), 0.), 2400.) * .6) * (1. - land) * (.55 + .9 * fbm(q * 260.));      // sunlight glittering off the sea
        vec3 ground = base * 1.3 * (1. - .5 * cs) + vec3(1., .93, .8) * glint;   // clouds throw shadows on what is beneath them
        vec3 cloud = mix(vec3(.6, .65, .73), vec3(1.), clamp(.6 + (c - cs) * 1.6, 0., 1.)) * (.86 + .14 * c);   // bright toward the Sun, grey on the far side
        vec3 col = mix(ground, cloud, smoothstep(0., .65, c)) * light;
        float mu = max(dot(vN, v), 0.0), haze = pow(1.0 - mu, 2.6);
        col = mix(col * 1.2, vec3(.36, .58, 1.0) * light * 1.1, haze * .8) + vec3(.02, .045, .1) * light;      // air between us and the ground
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }` }));
  const air = new THREE.Mesh(new THREE.SphereGeometry(R + 110, 320, 48, 0, Math.PI * 2, 0, .62), new THREE.ShaderMaterial({
    uniforms: { sunDir: { value: sun.clone() }, C: { value: grp.position.clone() } }, vertexShader: common, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    fragmentShader: `uniform vec3 sunDir; uniform vec3 C; varying vec3 vN; varying vec3 vW;
      void main(){
        vec3 dir = normalize(vW - cameraPosition), oc = cameraPosition - C; float tca = -dot(oc, dir), b = sqrt(max(dot(oc, oc) - tca * tca, 0.0));
        float h = b - 6371.0;                                                    // height at which this line of sight skims past the planet
        float a = (h < 0.0 ? exp(h / 2.5) : exp(-h / 16.0)) * smoothstep(-.1, .3, dot(vN, sunDir));
        gl_FragColor = vec4(mix(vec3(.75, .88, 1.0), vec3(.2, .45, 1.0), smoothstep(0.0, 40.0, h)) * a * 1.25, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }` }));
  grp.add(surf, air); return grp;
}
/* Saturn as Cassini saw it: a banded, slightly squashed globe lit by the scene's Sun, with the rings drawn from their
   real proportions (C, B, Cassini Division, A, Encke Gap) and the planet's shadow falling across them. */
function saturnBack(dir, sun, dist, R) {
  const g = new THREE.Group(), rnd = rand(41);
  const band = noiseTex(256, (x, S) => { const im = x.createImageData(S, S), px = im.data;
    const stops = [[0, [150, 134, 104]], [.1, [176, 158, 120]], [.2, [201, 182, 138]], [.3, [214, 196, 150]], [.38, [196, 172, 124]], [.46, [224, 206, 160]], [.5, [232, 214, 168]], [.54, [222, 202, 154]], [.62, [200, 176, 128]], [.7, [216, 198, 152]], [.8, [198, 180, 138]], [.9, [172, 156, 122]], [1, [146, 132, 104]]];
    const row = []; for (let y = 0; y < S; y++) { const v = y / (S - 1); let k = 0; while (k < stops.length - 2 && stops[k + 1][0] < v) k++;
      const a = stops[k], b = stops[k + 1], t = (v - a[0]) / (b[0] - a[0]), j = 1 + (rnd() - .5) * .05; row.push([0, 1, 2].map(c => (a[1][c] + (b[1][c] - a[1][c]) * t) * j)); }
    for (let y = 0; y < S; y++) for (let xx = 0; xx < S; xx++) { const o = (y * S + xx) * 4; px[o] = row[y][0]; px[o + 1] = row[y][1]; px[o + 2] = row[y][2]; px[o + 3] = 255; }
    x.putImageData(im, 0, 0); });
  const planet = new THREE.Mesh(new THREE.SphereGeometry(R, 72, 48), new THREE.MeshStandardMaterial({ map: band, roughness: 1, metalness: 0, fog: false, envMapIntensity: 0 }));
  planet.scale.y = .902; g.add(planet);                                    // Saturn is visibly flattened at the poles
  const ringTex = noiseTex(1024, (x, S) => { const im = x.createImageData(S, 1), px = im.data;
    for (let i = 0; i < S; i++) { const r = 1.239 + (2.27 - 1.239) * i / (S - 1); let a = 0, b = 1;       // radius in Saturn radii → opacity, brightness
      if (r < 1.526) { a = .12 + .18 * (r - 1.239) / .287; b = .55; }                                    // C ring: thin and dusky
      else if (r < 1.95) { a = .82 + .16 * Math.sin((r - 1.526) * 40); b = .92 + .08 * Math.sin(r * 90); }  // B ring: bright and nearly opaque
      else if (r < 2.025) { a = .04; b = .5; }                                                           // Cassini Division
      else { a = .55 + .12 * Math.sin(r * 70); b = .8; if (Math.abs(r - 2.214) < .006) a = .03; }          // A ring, with the Encke Gap
      a *= .9 + .2 * rnd(); const o = i * 4; px[o] = 226 * b; px[o + 1] = 208 * b; px[o + 2] = 172 * b; px[o + 3] = 255 * Math.min(1, a); }
    for (let y = 0; y < S; y++) x.putImageData(im, 0, y); });
  ringTex.wrapS = ringTex.wrapT = THREE.ClampToEdgeWrapping;
  const rg = new THREE.RingGeometry(1.239 * R, 2.27 * R, 160, 1), rp = rg.attributes.position, ru = rg.attributes.uv;
  for (let i = 0; i < rp.count; i++) ru.setXY(i, (Math.hypot(rp.getX(i), rp.getY(i)) / R - 1.239) / (2.27 - 1.239), .5);
  rg.rotateX(-Math.PI / 2);
  const rings = new THREE.Mesh(rg, new THREE.ShaderMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide, toneMapped: false,
    uniforms: { map: { value: ringTex }, sunL: { value: new THREE.Vector3() }, R: { value: R } },
    vertexShader: 'varying vec2 vUv; varying vec3 vP; void main(){ vUv = uv; vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
    fragmentShader: 'uniform sampler2D map; uniform vec3 sunL; uniform float R; varying vec2 vUv; varying vec3 vP;' +
      'void main(){ vec4 c = texture2D(map, vUv); float t = dot(vP, sunL); vec3 q = vP - t * sunL; q.y /= .902;' +      // in the planet's shadow?
      ' float sh = t < 0. ? smoothstep(R * .985, R * 1.02, length(q)) : 1.; gl_FragColor = vec4(c.rgb * (.06 + .94 * sh) * .82, c.a); }' }));
  g.add(rings);
  g.rotation.set(-21 * D2R, 0, 9 * D2R);                                   // tip the ring plane toward the viewer
  g.position.copy(dir).multiplyScalar(dist); g.updateMatrixWorld(true);
  rings.material.uniforms.sunL.value.copy(sun).transformDirection(new THREE.Matrix4().copy(g.matrixWorld).invert());
  return g;
}
function rocks(n, rMin, rMax, color, seed, avoid, big = .45, hgt) {
  const R = rand(seed), geo = new THREE.IcosahedronGeometry(1, 1), p = geo.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); v.multiplyScalar(.7 + R() * .55); v.y *= .55; p.setXYZ(i, v.x, v.y, v.z); }
  geo.computeVertexNormals();
  const m = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color, roughness: .95, flatShading: true }), n), o = new THREE.Object3D();
  for (let i = 0; i < n; i++) { let x, z; do { const a = R() * 7, r = rMin + Math.pow(R(), 1.6) * (rMax - rMin); x = Math.cos(a) * r; z = Math.sin(a) * r; } while (avoid && avoid(x, z));
    const s = Math.pow(R(), 3.5) * big + .03; o.position.set(x, (hgt ? hgt(x, z) : 0) - s * .12, z); o.scale.set(s * (1 + R() * .6), s, s * (1 + R() * .6)); o.rotation.set(0, R() * 7, 0); o.updateMatrix(); m.setMatrixAt(i, o.matrix); }
  m.castShadow = m.receiveShadow = true; return m;
}
function skyDome(zenith, horizon) {
  const g = new THREE.SphereGeometry(950, 32, 16), c = [], a = new THREE.Color(zenith), b = new THREE.Color(horizon), p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const y = p.getY(i) / 950, k = Math.pow(Math.max(0, 1 - Math.max(0, y)), 3), col = a.clone().lerp(b, k); c.push(col.r, col.g, col.b); }
  g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
  return new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
}

/* ───────────── L2 in motion: two small physics animations ─────────────
   Both use real numbers for the Sun and Earth (the Moon's mass folded into
   Earth's) and are drawn in a frame that turns with Earth, so the Sun and
   Earth hold still and only what differs moves.
   1. Keeping pace — Webb at L2 against a lone probe at the same distance from
      the Sun, which circles more slowly and falls behind (Kepler's third law).
   2. A hilltop — the combined pull along the Sun–Earth line drawn as a
      landscape: L1 and L2 are ridge tops. Left alone a marble slides off
      (in reality the drift grows about 2.7-fold every 23 days); Webb's thrusters
      cancel the slide about every three weeks. */
const L2P = (() => {
  const GMs = 1.32712e20, GMe = 3.986e14 + 4.90e12, R = 1.496e11, W0 = 2 * Math.PI / (365.256 * 86400), DAY = 86400;
  const acc = x => -GMs / ((R + x) * (R + x)) * Math.sign(R + x) - GMe / (x * x) * Math.sign(x) + W0 * W0 * (R + x);   // along the line, turning frame
  const phi = x => -GMs / Math.abs(R + x) - GMe / Math.abs(x) - 0.5 * W0 * W0 * (R + x) * (R + x);
  let a = 1.0e9, b = 2.0e9; for (let i = 0; i < 80; i++) { const m = (a + b) / 2; if (acc(m) > 0) b = m; else a = m; }  // the balance point
  const dL2 = (a + b) / 2;
  a = -2.0e9; b = -1.0e9; const sa = Math.sign(acc(a)); for (let i = 0; i < 80; i++) { const m = (a + b) / 2; if (Math.sign(acc(m)) === sa) a = m; else b = m; }
  const dL1 = (a + b) / 2, h = 1e5, lam1 = Math.sqrt((acc(dL2 + h) - acc(dL2 - h)) / (2 * h));
  // Off the line, Earth's turning (the Coriolis effect) slows the slide a little: the
  // real escape rate at L2 is 2.484 times Earth's orbital rate, about e-fold every 23
  // days. Scale the along-line slope so the marble slides at that real pace.
  const lam = 2.4843 * W0, slope = (lam / lam1) * (lam / lam1);
  return { GMs, GMe, R, W0, DAY, acc, phi, dL2, dL1, lam, slope };
})();
let L2A = null;
function l2Anim() {
  const pc = $('l2pace'), hc = $('l2hill');
  if (!pc || !hc) return;
  if (L2A && L2A.pc === pc) { L2A.size(); L2A.frame(); return; }
  if (L2A) { cancelAnimationFrame(L2A.raf); L2A.io && L2A.io.disconnect(); }
  const P = L2P, still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const st = { pc, hc, raf: 0, last: 0, t1: 0, t2: 0, vis: true, trail: [], w: null, g: null };
  const ctxOf = c => { const r = c.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1), w = Math.max(260, r.width), hh = Math.round(w * .74);
    c.width = Math.round(w * d); c.height = Math.round(hh * d); c.style.height = hh + 'px'; const x = c.getContext('2d'); x.setTransform(d, 0, 0, d, 0, 0); return { x, w, h: hh }; };
  st.size = () => { st.A = ctxOf(pc); st.B = ctxOf(hc); };
  const txt = (x, s, X, Y, o = {}) => { x.font = (o.w || 500) + ' ' + (o.s || 11) + 'px Montserrat, sans-serif'; x.fillStyle = o.c || '#C9BD97'; x.textAlign = o.a || 'left'; x.fillText(s, X, Y); };
  const arrow = (x, x0, y0, x1, y1, col) => { x.strokeStyle = col; x.fillStyle = col; x.lineWidth = 1.2; x.beginPath(); x.moveTo(x0, y0); x.lineTo(x1, y1); x.stroke();
    const an = Math.atan2(y1 - y0, x1 - x0); x.beginPath(); x.moveTo(x1, y1); x.lineTo(x1 - 7 * Math.cos(an - .45), y1 - 7 * Math.sin(an - .45)); x.lineTo(x1 - 7 * Math.cos(an + .45), y1 - 7 * Math.sin(an + .45)); x.fill(); };
  const webb = (x, X, Y) => { x.fillStyle = '#E8B64C'; x.shadowColor = 'rgba(232,182,76,.7)'; x.shadowBlur = 8; x.beginPath(); x.arc(X, Y, 4.2, 0, 7); x.fill(); x.shadowBlur = 0; };
  /* 1 · keeping pace — 60 days, about 6 seconds */
  const PACE = 60;
  function drawPace(t) {
    const { x, w, h } = st.A, s = w * .30 / P.dL2, ex = w * .33, ey = h * .27;
    const X = m => ex + m * s, Y = m => ey - m * s;                  // +y = along Earth's orbit (up on screen)
    x.clearRect(0, 0, w, h);
    const sg = x.createRadialGradient(-w * .55, ey, 0, -w * .55, ey, w * .75);
    sg.addColorStop(0, 'rgba(255,230,160,.55)'); sg.addColorStop(1, 'rgba(255,230,160,0)'); x.fillStyle = sg; x.fillRect(0, 0, w, h);
    txt(x, '← Sun', 8, ey - 8, { c: '#E6CC85', w: 600 }); txt(x, '150 million km', 8, ey + 7, { s: 9.5, c: '#9A875C' });
    // the two circles round the Sun: Earth's, and one at Webb's distance (both nearly straight at this scale)
    x.setLineDash([2, 5]); x.strokeStyle = 'rgba(203,168,90,.3)'; x.lineWidth = 1;
    [0, P.dL2].forEach(d => { const r = (P.R + d) * s, cx = ex - P.R * s; x.beginPath(); x.arc(cx, ey, r, -.02, .02); x.stroke(); });
    x.setLineDash([3, 4]); x.strokeStyle = 'rgba(201,189,151,.35)'; x.beginPath(); x.arc(ex, ey, 3.844e8 * s, 0, 7); x.stroke(); x.setLineDash([]);
    arrow(x, ex - 16, ey + 30, ex - 16, ey - 22, 'rgba(143,180,232,.8)'); txt(x, 'orbit', ex - 21, ey + 42, { s: 9.5, c: '#8FB4E8', a: 'center' });
    x.fillStyle = '#4F8FD8'; x.beginPath(); x.arc(ex, ey, 5.5, 0, 7); x.fill(); txt(x, 'Earth', ex + 8, ey - 8, { w: 600, c: '#E4D9B8' });
    // L2: Webb stays on it (its small six-month loop round the point is left out here)
    const lx = X(P.dL2), wx = lx, wy = ey;
    txt(x, 'L2', lx - 9, ey + 4, { s: 10, c: '#E6CC85', w: 600, a: 'right' });
    // the lone probe: a plain circular orbit round the Sun at L2's distance, slower than Earth's year
    const r = P.R + P.dL2, n = Math.sqrt(P.GMs / (r * r * r)), th = (n - P.W0) * t * P.DAY;
    const gx = X(r * Math.cos(th) - P.R), gy = Y(r * Math.sin(th));
    st.trail.push([gx, gy]); if (st.trail.length > 400) st.trail.shift();
    x.fillStyle = 'rgba(169,160,140,.35)'; st.trail.forEach(p => { x.fillRect(p[0] - .6, p[1] - .6, 1.2, 1.2); });
    x.fillStyle = '#A9A08C'; x.beginPath(); x.arc(gx, gy, 3.6, 0, 7); x.fill();
    if (gy - wy > 14) txt(x, 'On its own: falls behind', gx + 8, gy + 4, { s: 10, c: '#B5AC97' });
    webb(x, wx, wy); txt(x, 'Webb: keeps pace', wx + 8, wy - 7, { s: 10, c: '#F2E4BE', w: 600 });
    txt(x, 'Day ' + Math.floor(t), w - 8, 16, { s: 10.5, c: '#9A875C', a: 'right', w: 600 });
  }
  /* 2 · a hilltop — 130 days, about 9 seconds; both start 30,000 km off the top */
  const HILL = 130, BURN = 21;
  const xa = -2.7e9, xb = 4.3e9;
  const pTop = P.phi(P.dL2), pLow = Math.min(P.phi(xa), P.phi(xb));
  function sim(sk) { return { x: P.dL2 + 3.0e7, v: 0, sk, nb: BURN, puff: -1 }; }
  st.m = [sim(false), sim(true)];
  function stepHill(dtDays) {
    const n = Math.max(1, Math.ceil(dtDays / .05)), dt = dtDays / n * P.DAY;
    st.m.forEach(m => { for (let i = 0; i < n; i++) {
      if (m.x > xb + 1e9 || m.x < 2e8) break;
      m.v += P.slope * P.acc(m.x) * dt; m.x += m.v * dt;
    }
    if (m.sk && st.t2 >= m.nb) {                // the burn: cancel the part of the motion that runs away
      m.v = -P.lam * (m.x - P.dL2); m.x += (Math.random() - .5) * 3e6; m.nb += BURN; m.puff = st.t2; } });
  }
  function drawHill() {
    const { x, w, h } = st.B, top = h * .30, base = h * .86, k = (base - top) / (pTop - pLow);
    const SX = m => 10 + (m - xa) / (xb - xa) * (w - 20), SY = p => Math.min(h + 20, top + (pTop - p) * k);
    x.clearRect(0, 0, w, h);
    x.beginPath(); x.moveTo(SX(xa), h);
    for (let i = 0; i <= 260; i++) { const m = xa + (xb - xa) * i / 260; x.lineTo(SX(m), Math.abs(m) < 3e7 ? h + 20 : SY(P.phi(m))); }
    x.lineTo(SX(xb), h); x.closePath();
    const lg = x.createLinearGradient(0, top, 0, h); lg.addColorStop(0, 'rgba(203,168,90,.20)'); lg.addColorStop(1, 'rgba(203,168,90,.02)');
    x.fillStyle = lg; x.fill(); x.strokeStyle = 'rgba(230,204,133,.75)'; x.lineWidth = 1.4; x.stroke();
    txt(x, '← toward the Sun', 10, 16, { s: 10, c: '#9A875C' });
    txt(x, 'Earth', SX(0), h - 8, { a: 'center', w: 600, c: '#8FB4E8' });
    [[P.dL1, 'L1'], [P.dL2, 'L2']].forEach(([m, l]) => txt(x, l, SX(m), SY(P.phi(m)) + 22, { a: 'center', w: 600, c: '#E6CC85' }));
    st.m.forEach(m => {
      if (m.x > xb + 1e9) return;
      const mx = SX(m.x), my = SY(P.phi(m.x)) - 5;
      if (m.sk && m.puff >= 0 && st.t2 - m.puff < 4) {              // thruster puff for a few days of the clock
        const dir = m.v >= 0 ? -1 : 1, f = 1 - (st.t2 - m.puff) / 4;
        x.fillStyle = 'rgba(143,180,232,' + (.8 * f).toFixed(2) + ')'; x.beginPath(); x.moveTo(mx + dir * 5, my - 3); x.lineTo(mx + dir * 15, my); x.lineTo(mx + dir * 5, my + 3); x.fill(); }
      if (m.sk) webb(x, mx, my); else { x.fillStyle = '#A9A08C'; x.beginPath(); x.arc(mx, my, 4.2, 0, 7); x.fill(); }
    });
    const g = st.m[0], gl = Math.min(w - 8, SX(Math.min(g.x, xb)) + 8);
    txt(x, 'Webb', SX(st.m[1].x), SY(P.phi(st.m[1].x)) - 16, { a: 'center', s: 10, c: '#F2E4BE', w: 600 });
    if (g.x - P.dL2 > 2.5e8) txt(x, 'left alone', Math.min(gl, w - 60), SY(P.phi(Math.min(g.x, xb))) - 12, { s: 10, c: '#B5AC97' });
    txt(x, 'Day ' + Math.floor(st.t2), w - 8, 16, { s: 10.5, c: '#9A875C', a: 'right', w: 600 });
  }
  st.frame = () => { drawPace(st.t1); drawHill(); };
  function tick(now) {
    if (!pc.isConnected) { cancelAnimationFrame(st.raf); st.io && st.io.disconnect(); if (L2A === st) L2A = null; return; }
    const dt = Math.min(.1, (now - (st.last || now)) / 1000); st.last = now;
    if (st.vis) {
      st.t1 += dt * 10; if (st.t1 > PACE + 12) { st.t1 = 0; st.trail = []; }     // ~1 s hold at the end
      const t2 = st.t2 + dt * 15; if (t2 > HILL + 20) { st.t2 = 0; st.m = [sim(false), sim(true)]; } else { stepHill(t2 - st.t2); st.t2 = t2; }
      drawPace(Math.min(st.t1, PACE)); drawHill();
    }
    st.raf = requestAnimationFrame(tick);
  }
  st.size();
  if (still) {                                    // reduced motion: one representative frame of each
    for (let d = 0; d <= PACE; d += .5) drawPace(d);
    for (let d = 0; d < 80; d += .5) { stepHill(.5); st.t2 = d; } drawHill();
  } else {
    if ('IntersectionObserver' in window) { st.io = new IntersectionObserver(es => { st.vis = es.some(e => e.isIntersecting); }); st.io.observe(pc); st.io.observe(hc); }
    st.raf = requestAnimationFrame(tick);
  }
  L2A = st;
}

/* ───────────── Where Webb is: the Sun–Earth L2 point ─────────────
   Drawn at the page's real width so the text stays readable on a phone. The
   Earth–Moon–L2 part is to scale; the Sun is 100 times farther than shown. */
function drawL2(box) {
  const W = Math.max(300, box.clientWidth - 12), ph = W < 560, H = ph ? 286 : 372, cy = ph ? 124 : 166;
  const ex = W * (ph ? .5 : .55), lx = W * (ph ? .8 : .82), sc = (lx - ex) / 1.5;      // px per million km
  const moonR = .3844 * sc, haloR = Math.min(.83 * sc, cy - 30), fs = ph ? 10.5 : 12, sm = ph ? 9.5 : 10.5;
  const T = (x, y, t, o = {}) => '<text x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" font-size="' + (o.s || fs) + '" fill="' + (o.c || '#C9BD97') + '" text-anchor="' + (o.a || 'middle') + '"' + (o.w ? ' font-weight="' + o.w + '"' : '') + (o.i ? ' font-style="italic"' : '') + '>' + t + '</text>';
  let g = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="img" aria-label="Diagram: the Sun, Earth and Moon in a line, with Webb circling the L2 point 1.5 million kilometres beyond Earth, always keeping its sunshield toward all three" font-family="Montserrat, sans-serif">';
  g += '<defs><radialGradient id="l2sun"><stop offset="0" stop-color="#FFF6D2"/><stop offset=".5" stop-color="#F6CB5C"/><stop offset=".62" stop-color="#F2C24E" stop-opacity=".55"/><stop offset="1" stop-color="#F2C24E" stop-opacity="0"/></radialGradient>'
    + '<marker id="l2a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#E6CC85"/></marker>'
    + '<marker id="l2b" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#8FB4E8"/></marker></defs>';
  // the two paths around the Sun (centre far off to the left)
  const arc = x => { const R = x + W * .9, a = Math.asin(Math.min(.99, (cy - 6) / R)), b = Math.asin(Math.min(.99, (H - cy - 30) / R)); const cx0 = x - R;
    return '<path d="M ' + (cx0 + R * Math.cos(a)).toFixed(1) + ' ' + (cy - R * Math.sin(a)).toFixed(1) + ' A ' + R.toFixed(1) + ' ' + R.toFixed(1) + ' 0 0 1 ' + (cx0 + R * Math.cos(b)).toFixed(1) + ' ' + (cy + R * Math.sin(b)).toFixed(1) + '" fill="none" stroke="rgba(203,168,90,.28)" stroke-dasharray="2 5"/>'; };
  g += arc(ex) + arc(lx);
  // the Sun and its light
  g += '<circle cx="' + (ph ? -34 : -30) + '" cy="' + cy + '" r="' + (ph ? 96 : 130) + '" fill="url(#l2sun)"/>';
  g += T(ph ? 8 : 14, cy + 4, 'Sun', { a: 'start', c: '#3a2a08', w: 600 });
  const r0 = ph ? 58 : 96, r1 = ex - moonR - (ph ? 10 : 18);
  [-22, 0, 22].forEach(dy => { g += '<line x1="' + r0 + '" y1="' + (cy + dy) + '" x2="' + r1.toFixed(1) + '" y2="' + (cy + dy) + '" stroke="#E6CC85" stroke-opacity="' + (dy ? .35 : .6) + '" stroke-width="1" marker-end="url(#l2a)"/>'; });
  const bx = (r0 + r1) / 2;                                                                 // “not to scale” break
  g += '<rect x="' + (bx - 7) + '" y="' + (cy - 30) + '" width="14" height="60" fill="#0d0a18"/><path d="M ' + (bx - 5) + ' ' + (cy + 9) + ' l 5 -18 M ' + bx + ' ' + (cy + 9) + ' l 5 -18" stroke="#9A875C" stroke-width="1.2" fill="none"/>';
  g += T(bx, cy + 46, '150 million km', { s: sm, c: '#9A875C' }) + T(bx, cy + 46 + sm + 2, '(not to scale)', { s: sm, c: '#7A6E55' });
  // Earth, the Moon's orbit
  g += '<circle cx="' + ex + '" cy="' + cy + '" r="' + moonR.toFixed(1) + '" fill="none" stroke="rgba(201,189,151,.4)" stroke-dasharray="3 4"/>';
  g += '<circle cx="' + (ex + moonR * .5).toFixed(1) + '" cy="' + (cy - moonR * .866).toFixed(1) + '" r="2.6" fill="#D8D2C2"/>' + T(ex + moonR * .5 + 6, cy - moonR * .866 - 5, 'Moon', { a: 'start', s: sm, c: '#B5AC97' });
  g += '<circle cx="' + ex + '" cy="' + cy + '" r="' + (ph ? 5.5 : 7) + '" fill="#4F8FD8" stroke="#A8D0F4" stroke-width="1"/>' + T(ex, cy + (ph ? 19 : 22), 'Earth', { w: 600, c: '#E4D9B8' });
  // L2 and Webb's halo orbit around it (wider than the Moon's orbit)
  const hw = Math.max(9, haloR * .16);
  g += '<ellipse cx="' + lx + '" cy="' + cy + '" rx="' + hw.toFixed(1) + '" ry="' + haloR.toFixed(1) + '" fill="none" stroke="#CBA85A" stroke-opacity=".75" stroke-dasharray="4 4"/>';
  g += '<path d="M ' + (lx - 4) + ' ' + cy + ' h 8 M ' + lx + ' ' + (cy - 4) + ' v 8" stroke="#E6CC85" stroke-width="1.3"/>' + T(lx + 8, cy + 4, 'L2', { a: 'start', w: 600, c: '#E6CC85' });
  const wx = lx + hw * .55, wy = cy - haloR * .86;                                          // Webb: shield toward the Sun, mirror behind it
  g += '<line x1="' + (wx - 4) + '" y1="' + (wy - 9) + '" x2="' + (wx - 4) + '" y2="' + (wy + 9) + '" stroke="#D9B8C4" stroke-width="2.4" stroke-linecap="round"/><path d="M ' + wx + ' ' + (wy - 5) + ' l 5 2.6 v 5 l -5 2.6 Z" fill="#E8B64C"/>';
  g += T(wx + 10, wy + 4, 'Webb', { a: 'start', w: 600, c: '#F2E4BE' });
  g += '<line x1="' + (wx + 8) + '" y1="' + (wy + 14) + '" x2="' + Math.min(W - 6, wx + (ph ? 40 : 70)) + '" y2="' + (wy + 14) + '" stroke="#8FB4E8" stroke-width="1.2" marker-end="url(#l2b)"/>' + (ph ? '' : T(wx + 10, wy + 29, 'looks out into the cold', { a: 'start', s: sm, c: '#8FB4E8' }));
  // distance bracket
  const by = H - (ph ? 58 : 50);
  g += '<path d="M ' + ex + ' ' + (by - 5) + ' v 5 H ' + lx + ' v -5" fill="none" stroke="#9A875C" stroke-width="1.2"/>' + T((ex + lx) / 2, by + 15, '1.5 million km', { w: 600, c: '#E4D9B8' }) + T((ex + lx) / 2, by + 15 + sm + 3, '4× as far as the Moon', { s: sm, c: '#9A875C' });
  g += T(ph ? 6 : 12, H - 8, 'Earth and Webb circle the Sun together, once a year', { a: 'start', s: sm, c: '#7A6E55', i: 1 });
  box.innerHTML = g + '</svg>';
}
/* ───────────── Where Hubble is: low Earth orbit, to scale ───────────── */
function drawLEO(box, iss) {
  const W = Math.max(300, box.clientWidth - 12), ph = W < 560, R = W * (ph ? 1.5 : 1.25), k = R / 6371;      // px per km
  const altH = 510, altI = 400, top = Math.round(altH * k) + (ph ? 50 : 52), H = top + (ph ? 62 : 84), cx = W / 2, cy = top + R, fs = ph ? 10.5 : 12, sm = ph ? 9.5 : 10.5;
  const T = (x, y, t, o = {}) => '<text x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" font-size="' + (o.s || fs) + '" fill="' + (o.c || '#C9BD97') + '" text-anchor="' + (o.a || 'start') + '"' + (o.w ? ' font-weight="' + o.w + '"' : '') + (o.i ? ' font-style="italic"' : '') + '>' + t + '</text>';
  const ring = (alt, col, dash, w) => '<circle cx="' + cx + '" cy="' + cy.toFixed(1) + '" r="' + (R + alt * k).toFixed(1) + '" fill="none" stroke="' + col + '" stroke-width="' + (w || 1) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '/>';
  const at = (alt, fx) => { const x = W * fx, dx = x - cx, r = R + alt * k; return [x, cy - Math.sqrt(r * r - dx * dx)]; };
  let g = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="img" aria-label="Diagram to scale: the curve of the Earth with the edge of space 100 kilometres up, the Space Station 400 kilometres up and Hubble about 500 kilometres up" font-family="Montserrat, sans-serif">';
  g += '<defs><radialGradient id="leoE" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#16345e"/><stop offset=".95" stop-color="#23508f"/><stop offset=".994" stop-color="#2f69b2"/><stop offset="1" stop-color="#8fc0f5"/></radialGradient></defs>';
  g += ring(iss ? altI : altH, '#CBA85A', '5 4', 1.3) + ring(iss ? altH : altI, 'rgba(201,189,151,.5)', '2 5') + ring(100, 'rgba(127,180,238,.5)', '1 4');
  g += '<circle cx="' + cx + '" cy="' + cy.toFixed(1) + '" r="' + R.toFixed(1) + '" fill="url(#leoE)"/>';
  // the craft this tab is about, drawn on its orbit
  const hp = at(iss ? altI : altH, ph ? .78 : .68), rot = (Math.atan2(hp[0] - cx, cy - hp[1]) / D2R).toFixed(1);
  g += '<g transform="translate(' + hp[0].toFixed(1) + ',' + hp[1].toFixed(1) + ') rotate(' + rot + ')">' + (iss
    ? '<rect x="-11" y="-.8" width="22" height="1.6" fill="#D8D6D0"/><rect x="-11" y="-5" width="3.2" height="10" fill="#D9A45A"/><rect x="-6.6" y="-5" width="3.2" height="10" fill="#D9A45A"/><rect x="3.4" y="-5" width="3.2" height="10" fill="#D9A45A"/><rect x="7.8" y="-5" width="3.2" height="10" fill="#D9A45A"/><rect x="-1.4" y="-4" width="2.8" height="8" rx="1" fill="#D8D6D0"/>'
    : '<g transform="rotate(12)"><rect x="-9" y="-1.3" width="18" height="2.6" fill="#D9A45A"/><rect x="-2.6" y="-7" width="5.2" height="13" rx="1.2" fill="#D8D6D0"/></g>') + '</g>';
  const l0 = ph ? 8 : 16, apex = alt => top - alt * k, hi = { a: 'middle', w: 600, c: '#F2E4BE' }, lo = { a: 'middle', s: sm, c: '#B5AC97' };
  if (iss) g += T(cx, apex(altH) - 7, 'Hubble · about 500 km', lo) + T(cx - (ph ? 34 : 60), apex(altI) + fs + (ph ? 13 : 12), 'Space Station · about 400 km up', hi);
  else g += T(cx - (ph ? 34 : 60), apex(altH) - 9, 'Hubble · about 500 km up', hi) + T(cx, apex(400) + sm + 3, 'Space Station · 400 km', lo);
  let p = at(100, .8); g += T(p[0], p[1] - 4, 'Edge of space · 100 km', { a: 'middle', s: sm, c: '#8FB4E8' });
  g += T(cx, top + (ph ? 30 : 40), 'Earth', { a: 'middle', w: 600, c: '#DCE9FA' }) + T(cx, top + (ph ? 30 : 40) + sm + 4, 'airliners and weather: the bottom 12 km', { a: 'middle', s: sm, c: '#A9C2E8' });
  g += T(W - l0, 16, 'Moon: 750 times higher', { a: 'end', s: sm, c: '#9A875C' }) + T(W - l0, 16 + sm + 4, 'Webb: 3,000 times higher', { a: 'end', s: sm, c: '#9A875C' });
  g += T(l0, 16, 'Drawn to scale', { s: sm, c: '#7A6E55', i: 1 });
  box.innerHTML = g + '</svg>';
}
/* ───────────── Viewer ───────────── */
let renderer, scene, camera, controls, pmrem, envTex, world = null, craftKey = null, parts = [], hotEls = [], running = true, tween = null, lastInteract = 0, loadId = 0;
const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
function init() {
  const cv = $('sc-cv');
  renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap; renderer.shadowMap.autoUpdate = false;
  scene = new THREE.Scene(); camera = new THREE.PerspectiveCamera(38, 1, 0.05, 1300);
  pmrem = new THREE.PMREMGenerator(renderer); envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  controls = new OrbitControls(camera, cv);
  Object.assign(controls, { enableDamping: true, dampingFactor: .08, enablePan: false, autoRotateSpeed: .4 });
  controls.addEventListener('start', () => { tween = null; lastInteract = performance.now(); controls.autoRotate = false; });
  controls.addEventListener('end', () => { lastInteract = performance.now(); });
  cv.addEventListener('wheel', e => { if (!lookView) return; e.preventDefault(); zoomFov(Math.exp(e.deltaY * .0015)); }, { passive: false });
  cv.parentElement.addEventListener('wheel', e => { if (e.target === cv) return; e.preventDefault(); cv.dispatchEvent(new WheelEvent('wheel', e)); }, { passive: false });      // a scroll over a label or the info card zooms the view, never the page
  const pts = new Map(); let pd = 0;
  cv.addEventListener('pointerdown', e => { pts.set(e.pointerId, [e.clientX, e.clientY]); pd = 0; });
  cv.addEventListener('pointermove', e => { if (!pts.has(e.pointerId)) return; pts.set(e.pointerId, [e.clientX, e.clientY]); if (pts.size !== 2) return;
    const q = [...pts.values()], d = Math.hypot(q[0][0] - q[1][0], q[0][1] - q[1][1]); if (pd && d) zoomFov(pd / d); pd = d; });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(n => cv.addEventListener(n, e => { pts.delete(e.pointerId); pd = 0; }));
  resize(); window.addEventListener('resize', () => { resize(); const c = CRAFT[craftKey]; if (c && c.extra && $('sc-dia')) c.extra.draw($('sc-dia')); });
  new IntersectionObserver(e => { running = e[0].isIntersecting; if (running) loop(); }).observe(cv);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) loop(); });
  loop();
}
function disposeWorld() {
  if (!world) return;
  world.traverse(o => { if (o.geometry) o.geometry.dispose(); const ms = o.material ? [].concat(o.material) : [];
    ms.forEach(m => { Object.values(m).forEach(v => { if (v && v.isTexture) v.dispose(); }); m.dispose(); }); });
  scene.remove(world); world = null;
}
function buildSetting(c) {
  const g = new THREE.Group(), sun = dirFrom(c.sunEl, c.sunAz); if (c.env === 'moon') sun.z *= -1;      // Moon scene uses true compass bearings: +x east, +z south
  { const lg = $('sc-legend'); if (lg) { lg.classList.remove('on'); lg.innerHTML = c.env === 'moon' ? DRIVES.map(d => '<span><i style="background:' + d[1] + '"></i>' + d[0] + '</span>').join('') : ''; } }
  scene.fog = null; scene.environment = envTex; scene.environmentIntensity = .35; scene.background = new THREE.Color(0x020204);
  renderer.toneMappingExposure = 1.1; const labels = [];
  const key = new THREE.DirectionalLight(0xfff4e6, 3.2), R = c.shadowR || (c.env === 'l2' ? 20 : 14), space = c.env === 'l2' || c.env === 'leo' || c.env === 'saturn';
  key.position.copy(sun).multiplyScalar(40); key.castShadow = true; key.shadow.mapSize.setScalar(matchMedia('(max-width:600px)').matches ? 1024 : 2048); key.shadow.bias = c.env === 'l2' ? -.0012 : -.0004; key.shadow.normalBias = c.env === 'l2' ? .09 : .03;
  Object.assign(key.shadow.camera, { left: -R, right: R, top: R, bottom: -R, near: 1, far: 100 }); g.add(key, key.target);
  if (c.env === 'moon') {
    const atLM = c.at === 'lm'; if (atLM) { key.position.x += LM[0]; key.position.z += LM[1]; key.target.position.set(LM[0], 0, LM[1]); }      // the real shadows follow whichever vehicle is the subject
    const stars = starfield(2500, .5); stars.scale.setScalar(3); stars.material.depthTest = false; stars.renderOrder = -1; g.add(stars); g.userData.stars = stars;      // drawn first, so mountains kilometres away still hide them
    const tex = fbmTex(1024, 8, ['#2f2e2c', '#454341', '#575553', '#696764', '#7a7875'], 7, .06);
    const detail = fbmTex(512, 16, ['#6a6a6a', '#8a8a8a', '#a0a0a0'], 19, 0); detail.colorSpace = THREE.NoColorSpace; detail.repeat.set(4, 4);
    const build = dem => { if (!g.parent) return; const t0 = performance.now();
      const T = moonTerrain(dem), ground = new THREE.Mesh(T.geo, new THREE.MeshStandardMaterial({ map: tex, bumpMap: detail, bumpScale: .9, roughness: 1, vertexColors: true }));
      ground.material.color.setRGB(1.25, .92, .9);      // the warm brown-grey of the soil in the Apollo 17 surface photographs
      untile(ground.material, craterTile(29), T.relief); ground.receiveShadow = true; g.add(ground); g.userData.soil = ground.material;
      const wt = wheelTracks(T); g.userData.trail = wt.userData.trail; g.add(wt); if (!atLM) g.add(landerShadow(T, sun)); if (dem) { const tr = traverse(T, labels); g.add(tr); g.userData.route = tr.userData; }
      const lmY = T.surf(LM[0], LM[1]);
      if (atLM) loader.load('models/lrv.glb', q => { if (!g.parent) return; tuneMaterials(q.scene, 'lrv'); g.add(q.scene); });      // the other vehicle stands in the distance
      else loader.load('models/lm.glb', q => { if (!g.parent) return; const o = q.scene; tuneLander(o); o.position.set(LM[0], lmY - .15, LM[1]); o.rotation.y = -90 * D2R; g.add(o); });
      { const n = matchMedia('(max-width:600px)').matches ? 110 : 200, rk = rocks(n, 6, 60, 0x58463d, 11, null, .2, (x, z) => T.height(x + LM[0], z + LM[1])); rk.position.set(LM[0], 0, LM[1]); g.add(rk); }
      g.userData.T = T; if (g.userData.seat) g.userData.seat();
      labels.push(atLM ? ['Lunar Rover', new THREE.Vector3(0, 3.2, 0), 12, 1500] : ['Lunar Module', new THREE.Vector3(LM[0], lmY + 11, LM[1]), 12, 1500], ['Landing site', new THREE.Vector3(0, 60, 0), 2500]);
      g.add(rocks(matchMedia('(max-width:600px)').matches ? 300 : 520, 3, 70, 0x58463d, 3, (x, z) => Math.hypot(x, z) < 3.2, .2, T.height));
      if (dem) { [['South Massif', -10500, 6800], ['North Massif', 2500, -6400]].forEach(m => labels.push([m[0], T.peak(m[1], m[2]).add(new THREE.Vector3(0, 900, 0))])); drawLabels(); }
      renderer.shadowMap.needsUpdate = true; window.__moonMs = Math.round(performance.now() - t0); };
    fetch('models/moon-a17.bin').then(r => { if (!r.ok) throw 0; return r.arrayBuffer(); }).then(b => build(new Int16Array(b))).catch(() => build(null));      // without the terrain file: plain rolling ground
    g.add(g.userData.fill = new THREE.HemisphereLight(0x1c1a1a, 0x5a473c, .62));       // only light bounced off the ground fills the shadows
    const ed = c.earth || [19, 203], edir = dirFrom(ed[0], ed[1]); edir.z *= -1; earthPanel(edir, sun, 90000, m => g.add(m));
    labels.push(['Earth', edir.clone().multiplyScalar(90000)]);
    renderer.toneMappingExposure = 1.08; scene.environmentIntensity = .22;
  } else if (c.env === 'mars') {
    const sky = new THREE.Group(), dome = skyDome(0x5a4436, 0xa88466); dome.renderOrder = -2; dome.material.depthTest = false; sky.add(dome); g.add(sky); g.userData.sky = sky;      // the sky goes wherever the camera goes, so it still surrounds it high above the crater
    scene.fog = new THREE.Fog(0x9c7b5f, 25, 220);
    const tex = fbmTex(1024, 8, ['#3f261a', '#5a3524', '#6e4330', '#7f5139', '#8e5f44'], 11, .05); tex.repeat.set(22, 22);
    const detail = fbmTex(512, 16, ['#6a6a6a', '#8a8a8a', '#a0a0a0'], 17, 0); detail.colorSpace = THREE.NoColorSpace; detail.repeat.set(90, 90);
    const ground = new THREE.Mesh(new THREE.CircleGeometry(400, 64), new THREE.MeshStandardMaterial({ map: tex, bumpMap: detail, bumpScale: 1.2, roughness: .96 }));
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; g.add(ground); g.userData.near = [ground];
    if (c.views.above) { const T = new THREE.TextureLoader(); let dem = null, map = null; const done = () => { if (!dem || !map || !g.parent) return; const J = marsCrater(dem, map); g.add(J.mesh); g.userData.crater = J.mesh;
        labels.push(['Landing site', J.at(0, 0, 200), 2500, 0, 1500], ['Jezero Crater', J.at(14700, 4500, 300), 0, 0, 20000], ['River delta', J.at(-4200, -3600, 300), 0, 0, 9000], ['Neretva Vallis', J.at(-15100, -9200, 300), 0, 0, 20000]); drawLabels();      // the old river's valley, which fed the delta
        // the drives, then a card for each named place, opened by a tap
        fetch('models/jezero-route.json').then(r => { if (!r.ok) throw 0; return r.json(); }).then(R => { if (!g.parent) return; const rt = roverRoute(J, R, labels); g.add(rt); g.userData.route = rt.userData; labels.forEach(l => { if (M20_CARDS[l[0]]) l[6] = M20_CARDS[l[0]]; }); const lg = $('sc-legend'); if (lg) lg.innerHTML = rt.userData.legend; drawLabels(); }).catch(() => {});
        [['m20mid', { N: 65, far: 26000, top: 34000, edge: [150, 1100], order: 1 }], ['m20hr', { N: 33, far: 5000, top: 9000, edge: [40, 300], order: 2 }]].forEach(([d, L]) =>      // HiRISE at 4 m over the whole drive, and 1 m along the route itself
          fetch('models/' + d + '/index.json').then(r => { if (!r.ok) throw 0; return r.json(); }).then(ix => { if (!g.parent) return; const hr = detailTiles(J, ix, 'models/' + d + '/', L); g.add(hr); (g.userData.hr = g.userData.hr || []).push(hr); }).catch(() => {})); };
      fetch('models/jezero.bin').then(r => { if (!r.ok) throw 0; return r.arrayBuffer(); }).then(b => { dem = new Int16Array(b); done(); }).catch(() => {});
      T.load('models/jezero.jpg', t => { map = t; done(); }); }
    g.add(g.userData.rocks = rocks(matchMedia('(max-width:600px)').matches ? 450 : 750, 3.5, 70, 0x3d2519, 5, (x, z) => Math.hypot(x, z) < 3.8 || Math.hypot(x + 2.5, z - 2.7) < 1.5 || (x > -1.8 && x < 7 && z > -2 && z < 9.5), .22));      // nothing near the rover, the helicopter, the lane the rover drives down, or right in front of the camera that follows it
    g.add(new THREE.HemisphereLight(0xb89272, 0x3a2418, .55)); scene.environmentIntensity = .35;
    renderer.toneMappingExposure = .92;
    sky.add(sprite(glow('255,236,215'), sun, 900, 45));
  } else if (c.env === 'leo') {
    const stars = starfield(3200, .8); stars.scale.setScalar(5); g.add(stars);
    g.add(sprite(glow('255,240,214', true), sun, 5000, 420)); labels.push(['The Sun', sun.clone().multiplyScalar(5000)]);
    g.add(earthBelow(sun, c.alt || 510));
    g.add(new THREE.HemisphereLight(0x0a0e16, 0x9db9de, 1.25));          // earthshine from below, black sky above
    scene.environmentIntensity = .25; renderer.toneMappingExposure = 1.0;
  } else if (c.env === 'saturn') {
    g.add(starfield(4200, 1));
    g.add(sprite(glow('255,238,210', true), sun, 900, 26)); labels.push(['The Sun', sun.clone().multiplyScalar(900)]);      // 9.5 times farther than from Earth: a tenth the width
    const sd = dirFrom(-5, 247); g.add(saturnBack(sd, sun, 780, 150)); labels.push(['Saturn', sd.clone().multiplyScalar(780).add(new THREE.Vector3(0, 175, 0))]);
    const td = dirFrom(4, 213); g.add(sprite(glow('236,170,84'), td, 900, 16)); labels.push(['Titan', td.clone().multiplyScalar(900)]);
    g.add(new THREE.HemisphereLight(0x9a9484, 0x241c18, .6));
    const fill = new THREE.DirectionalLight(0xe6d6b0, .9); fill.position.copy(sd).multiplyScalar(30); g.add(fill); scene.environmentIntensity = .55;      // light bounced off Saturn
  } else {
    g.add(starfield(4200, 1));
    g.add(sprite(glow('255,236,200', true), sun, 900, 70)); labels.push(['The Sun', sun.clone().multiplyScalar(900)]);
    const e = sun.clone().applyAxisAngle(new THREE.Vector3(0, 0, 1), 7 * D2R); g.add(sprite(glow('120,170,255'), e, 900, 12)); labels.push(['Earth', e.clone().multiplyScalar(900)]);
    g.add(new THREE.HemisphereLight(0xaab0be, 0x1c1a20, .7));
    const fill = new THREE.DirectionalLight(0xe4e9f6, 1.1); fill.position.set(18, 12, 10); g.add(fill); scene.environmentIntensity = .6;
  }
  return { group: g, labels };
}
// NASA's Webb model carries a stray sunshield panel hanging loose below the aft end
// (a leftover from its deployment rig). Drop those triangles.
function stripTris(root, bad) {                  // drop triangles lying wholly inside a region
  const a = new THREE.Vector3(); root.updateMatrixWorld(true);
  root.traverse(o => { if (!o.isMesh || !o.geometry.index) return; const g = o.geometry, idx = g.index.array, pos = g.attributes.position, keep = [];
    const inside = q => { a.fromBufferAttribute(pos, q).applyMatrix4(o.matrixWorld); return bad(a.x, a.y, a.z); };
    for (let i = 0; i < idx.length; i += 3) if (!(inside(idx[i]) && inside(idx[i + 1]) && inside(idx[i + 2]))) keep.push(idx[i], idx[i + 1], idx[i + 2]);
    if (keep.length < idx.length) g.setIndex(keep); });
}
/* Wear for models that come out of the box looking like plastic: uneven tone, patchy shine and a slightly wrinkled surface,
   all computed from the position on the craft so it needs no texture coordinates. tone/shine/wrinkle are strengths, grain is features per metre. */
function weather(m, tone, shine, wrinkle, grain, local) {      // local: pattern fixed to the part itself (for parts that move), not to the scene
  m.onBeforeCompile = sh => {
    sh.uniforms.uW = { value: new THREE.Vector4(tone, shine, wrinkle, grain) };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWp;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWp = ' + (local ? 'transformed' : '(modelMatrix * vec4(transformed, 1.)).xyz') + ';');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vWp; uniform vec4 uW;
      float wH(vec3 p) { p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float wV(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
        return mix(mix(mix(wH(i), wH(i + vec3(1, 0, 0)), f.x), mix(wH(i + vec3(0, 1, 0)), wH(i + vec3(1, 1, 0)), f.x), f.y),
                   mix(mix(wH(i + vec3(0, 0, 1)), wH(i + vec3(1, 0, 1)), f.x), mix(wH(i + vec3(0, 1, 1)), wH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      float wF(vec3 p) { return wV(p) * .5 + wV(p * 2.7 + 3.1) * .3 + wV(p * 7.3 + 7.7) * .2; }`)
      .replace('#include <map_fragment>', '#include <map_fragment>\ndiffuseColor.rgb *= 1. + uW.x * (wF(vWp * uW.w) - .52) * 2.;')
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = clamp(roughnessFactor + uW.y * (wF(vWp * uW.w * 2.3 + 11.) - .5) * 2., .05, 1.);')
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\n{ vec3 q = vWp * uW.w * 4.; vec3 d = vec3(wV(q), wV(q + 17.3), wV(q + 31.7)) - .5; normal = normalize(normal + uW.z * (viewMatrix * vec4(d, 0.)).xyz); }');
  };
  m.customProgramCacheKey = () => local ? 'weatherL' : 'weather';
}
/* Crinkled metal foil — sunshield film and insulation blankets. Space is cut into irregular cells and each cell becomes a flat
   facet tilted its own way, so every facet mirrors a different part of the surroundings, as crumpled foil does. The effect
   fades out once the facets are smaller than a pixel, so it does not shimmer from far away. */
function foil(m, scale, amount, local) {
  m.onBeforeCompile = sh => {
    sh.uniforms.uF = { value: new THREE.Vector2(scale, amount) };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vFp;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvFp = ' + (local ? 'transformed' : '(modelMatrix * vec4(transformed, 1.)).xyz') + ';');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vFp; uniform vec2 uF;
      vec3 fH(vec3 p) { p = fract(p * vec3(.1031, .1030, .0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx); }
      vec3 fCell(vec3 x) { vec3 i = floor(x), f = fract(x), id = vec3(.5); float best = 9.;
        for (int a = -1; a <= 1; a++) for (int b = -1; b <= 1; b++) for (int c = -1; c <= 1; c++) { vec3 g = vec3(float(a), float(b), float(c)), o = fH(i + g), d = g + o - f; float l = dot(d, d); if (l < best) { best = l; id = o; } }
        return id - .5; }`)
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\n{ vec3 q = vFp * uF.x; float fw = length(fwidth(q)); vec3 t = fCell(q) * smoothstep(1.1, .3, fw) + .6 * fCell(q * .37 + 5.) * smoothstep(1.1, .3, fw * .37); normal = normalize(normal + uF.y * (viewMatrix * vec4(t, 0.)).xyz); }');
  };
  m.customProgramCacheKey = () => local ? 'foilL' : 'foil';
}
/* What Webb's sunshield reflects out at L2: black space, stars and a faint band of Milky Way above; the glow of the
   sunlit side below. Used only by the sunshield films, which are close to mirrors. */
function l2Env() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 512; const x = c.getContext('2d'), g = x.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, '#06070b'); g.addColorStop(.3, '#090a10'); g.addColorStop(.46, '#16161d'); g.addColorStop(.5, '#3d3a45'); g.addColorStop(.56, '#807c88'); g.addColorStop(.7, '#aaa6b0'); g.addColorStop(1, '#67646d');
  x.fillStyle = g; x.fillRect(0, 0, 1024, 512);
  x.save(); x.translate(512, 150); x.rotate(-.22); const band = x.createLinearGradient(0, -70, 0, 70); band.addColorStop(0, 'rgba(150,140,190,0)'); band.addColorStop(.5, 'rgba(150,148,185,.22)'); band.addColorStop(1, 'rgba(150,140,190,0)'); x.fillStyle = band; x.fillRect(-700, -70, 1400, 140); x.restore();
  const R = rand(7); for (let i = 0; i < 520; i++) { const px = R() * 1024, py = R() * 250, b = Math.pow(R(), 3), sz = 1.2 + b * 2.6; x.fillStyle = 'rgba(255,250,244,' + (.35 + .65 * b).toFixed(2) + ')'; x.fillRect(px, py, sz, sz); }
  [[250, 228, 70, 'rgba(255,240,250,.95)'], [760, 236, 90, 'rgba(240,225,255,.7)'], [560, 330, 120, 'rgba(255,246,230,.9)']].forEach(q => { const r = x.createRadialGradient(q[0], q[1], 0, q[0], q[1], q[2]); r.addColorStop(0, q[3]); r.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = r; x.fillRect(q[0] - q[2], q[1] - q[2], q[2] * 2, q[2] * 2); });
  const t = new THREE.CanvasTexture(c); t.mapping = THREE.EquirectangularReflectionMapping; t.colorSpace = THREE.SRGBColorSpace; const out = pmrem.fromEquirectangular(t).texture; t.dispose(); return out; }
/* Stretched film — Webb's sunshield. Each layer is one taut sheet of metal-coated plastic thinner than a hair: a dark,
   slightly rippled mirror. It shows the stars, and the gold of the main mirror standing over it (worked out exactly, as a
   reflection of the mirror's disc). The model's triangles face both ways at random, so the surface is lit by whichever
   side is towards the viewer. */
function film(m, ripple, gold) {
  m.onBeforeCompile = sh => {
    sh.uniforms.uR = { value: new THREE.Vector2(ripple, gold) };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vFp;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvFp = (modelMatrix * vec4(transformed, 1.)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vFp; uniform vec2 uR;
      float rH(vec3 p) { p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float rV(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
        return mix(mix(mix(rH(i), rH(i + vec3(1, 0, 0)), f.x), mix(rH(i + vec3(0, 1, 0)), rH(i + vec3(1, 1, 0)), f.x), f.y),
                   mix(mix(rH(i + vec3(0, 0, 1)), rH(i + vec3(1, 0, 1)), f.x), mix(rH(i + vec3(0, 1, 1)), rH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      { normal = normalize( vNormal ); if ( dot( normal, vViewPosition ) < 0.0 ) normal = -normal;
        vec3 q = vFp * vec3( 1.7, 1.7, .14 ), q2 = vFp * vec3( .17, 1.7, 2.3 ) + 9., q3 = vFp * vec3( 5.5, 5.5, .6 ) + 3.;      // long ripples along the sheet, a fainter set across it, and fine creases
        vec3 d = vec3( rV( q ) - .5, 0., 0. ) + .55 * vec3( 0., 0., rV( q2 ) - .5 ) + .3 * vec3( rV( q3 ) - .5, 0., rV( q3 + 4. ) - .5 );
        normal = normalize( normal + uR.x * ( viewMatrix * vec4( d, 0. ) ).xyz ); }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      { vec3 wN = normalize( ( vec4( normal, 0. ) * viewMatrix ).xyz ), rr = reflect( normalize( vFp - cameraPosition ), wN );
        const vec3 mC = vec3( 1.35, 6.3, 0. ), mN = vec3( .993, -.118, 0. ); float dn = dot( rr, mN ), t = dot( mC - vFp, mN ) / dn; vec3 h = vFp + t * rr - mC;      // does the reflected ray land on the main mirror's disc?
        float hit = step( dn, -.02 ) * step( 0., t ) * smoothstep( 3.25, 3.05, length( h ) ) * smoothstep( .32, .5, length( h ) );
        totalEmissiveRadiance += uR.y * hit * vec3( 1., .66, .2 ) * ( .35 + .65 * rV( h * 1.6 + 2. ) ) * ( .6 + .4 * smoothstep( 3.2, 1., length( h ) ) ); }`);
  };
  m.customProgramCacheKey = () => 'film';
}
function retint(tex, from, to, tol) {      // swap one flat colour in a texture for another
  const im = tex.image, c = document.createElement('canvas'); c.width = im.width; c.height = im.height; const x = c.getContext('2d'); x.drawImage(im, 0, 0);
  const d = x.getImageData(0, 0, c.width, c.height), px = d.data;
  for (let i = 0; i < px.length; i += 4) if (Math.abs(px[i] - from[0]) + Math.abs(px[i + 1] - from[1]) + Math.abs(px[i + 2] - from[2]) < tol) { px[i] = to[0]; px[i + 1] = to[1]; px[i + 2] = to[2]; }
  x.putImageData(d, 0, 0); tex.image = c; tex.needsUpdate = true;
}
function tuneMaterials(root, key = craftKey) {
  if (key === 'lm') tuneLander(root);
  const blank = {};      // Curiosity: stand-in finishes for the parts NASA's file leaves untextured (flat white)
  root.traverse(o => { if (!o.isMesh) return; o.castShadow = o.receiveShadow = true;
    [].concat(o.material).forEach(m => { let n = m.name || '';
      if (key === 'curiosity' && /^tex_05$|^tex_03\.002$|^tex_02\.003$/.test(n)) {
        let kind = 'metal'; for (let q = o; q; q = q.parent) { if (/^suspension/.test(q.name)) { kind = 'dark'; break; } if (/^arm_0[23]/.test(q.name) && /^Mesh00/.test(o.name)) { kind = 'cable'; break; } }
        if (!blank[kind]) { const c = blank[kind] = m.clone(); c.name = 'blank_' + kind;
          if (kind === 'cable') { c.color.set(0x8a6233); c.metalness = .5; c.roughness = .46; c.envMapIntensity = 1; weather(c, .14, .12, .22, 14, true); }             // flat cables along the arm: amber polyimide film
          else if (kind === 'dark') { c.color.set(0x25272a); c.metalness = .55; c.roughness = .5; weather(c, .16, .12, .06, 4, true); }                              // suspension pivots and differential: black-anodised, like the tubes
          else { c.color.set(0xa9acb0); c.metalness = .75; c.roughness = .4; c.envMapIntensity = 1.1; weather(c, .12, .16, .08, 5, true); } }                         // tool housings and brackets: bare machined aluminium
        m = o.material = blank[kind]; n = m.name; }
      // Lunar Rover: a working vehicle coated in grey lunar dust, not a museum piece
      if (key === 'lrv') { m.color.multiply(new THREE.Color(/Wheels|Damping|Chassis/.test(n) ? 0xa09488 : 0xb6a698)); m.roughness = Math.max(m.roughness, .82); m.metalness = Math.min(m.metalness, .25); m.envMapIntensity = .5; }
      if (craftKey === 'hubble' && !/^hst_/.test(n)) { m.side = THREE.DoubleSide; m.metalness = .35; m.roughness = .5; }      // parts named hst_ are the door fittings and the inside of the tube, which keep their own finish
      if (n === 'hst_mirror') m.envMapIntensity = 2.2;
      if (n === 'hst_foil') { m.envMapIntensity = 1.6; weather(m, .12, .2, .5, .09, true); }      // the door's outer skin: crinkled silvered foil
      // Space Station: the model marks nearly everything as bare metal, which mirrors black space and turns white panels dark
      if (craftKey === 'iss') { m.metalness = .22; m.roughness = 1;
        // …and marks most of them as see-through, which stops them hiding what is behind them: the far wall of a module then
        // draws over the near one and it looks inside out. Their textures only use transparency for cut-outs, so cut out instead.
        if (m.transparent) { m.transparent = false; m.depthWrite = true; m.alphaTest = .5; }
        m.side = THREE.FrontSide; }      // the solar wings are two sheets back to back; drawn double-sided they flicker through each other
      // Apollo–Soyuz: NASA's model is flat-shaded plastic in pastel colours. The real ships were mirror-silver tape and bare metal
      // (Apollo) and a dark green quilted blanket (Soyuz), and neither was spotless.
      if (craftKey === 'apollo') {
        const set = (hex, metal, rough, env) => { if (hex != null) m.color.set(hex); m.metalness = metal; m.roughness = rough; m.envMapIntensity = env || 1; };
        if (n === 'blinn14SG') { set(0xf4f7fb, .95, .2, 2.4); weather(m, .1, .14, .1, 3.2); }               // command module: aluminised tape
        else if (n === 'blinn11SG') { set(0xeef0f2, .55, .46, 1.5); weather(m, .1, .13, .035, 1.6); }           // service module: painted and bare aluminium panels
        else if (n === 'blinn13SG') { set(0x4a4744, .9, .38, 2.4); weather(m, .28, .2, .04, 2.4); }           // engine bell: heat-darkened metal
        else if (n === 'lambert2SG') { set(0x3f4a3f, 0, .96); weather(m, .3, .04, .5, 4.5); }                 // Soyuz: dark green insulation blanket
        else if (n === 'lambert5SG') { set(0xdcdcdc, 0, .96); if (m.map && m.map.image) retint(m.map, [136, 177, 156], [64, 75, 64], 60); weather(m, .2, .04, .3, 4.5); }
        else if (n === 'lambert6SG' || n === 'lambert3SG') { set(0xcfcdc6, .15, .7); weather(m, .16, .15, .08, 2.2); }
        else if (n === 'lambert4SG') { set(0x6f7f95, .35, .32, 2); weather(m, .12, .12, .02, 3); }             // solar cells: darker and glassy
        else if (/apollohorns_blin$/.test(n)) { set(0x8f8b84, .85, .4, 2); weather(m, .2, .15, .05, 6); }       // thruster quads: bare metal, not yellow
        else if (n === 'blinn6SG' || n === 'blinn5SG' || n === 'blinn2SG') { set(null, .35, .62, 1.5); if (n === 'blinn5SG') m.color.set(0x121314); weather(m, .3, .2, .1, 3); }
        else weather(m, .15, .12, .04, 3);
      }
      if (craftKey === 'shuttle' && n !== 'doors inside') { m.metalness = .08; m.roughness = /belly|nose tip|glass|blac/.test(n) ? .5 : .78; }
      // Webb: NASA's model is flat colours with a blue cast. The real telescope is polished gold mirrors, a black composite
      // frame, and blankets and sunshield films of crinkled, metal-coated plastic — silver on the cold side, purple-pink facing the Sun.
      if (craftKey === 'jwst') { m.side = THREE.DoubleSide; const sky = root.userData.sky || (root.userData.sky = l2Env());
        if (/mli|sa_edge/.test(n) && !/pinkmli/.test(n)) m.flatShading = true;      // blankets mix triangle windings, so light them by true face direction
        if (/pinkmli/.test(n)) { m.polygonOffset = true; m.polygonOffsetFactor = -2; m.polygonOffsetUnits = -8; }
        const set = (hex, metal, rough, env) => { m.color.set(hex); m.metalness = metal; m.roughness = rough; m.envMapIntensity = env || 1; };
        if (/mirror_blinn/.test(n)) { set(0xffc655, .8, .13, 2.6); weather(m, .16, .05, 0, .4); }                  // gold, polished to a mirror
        else if (/shld_silv/.test(n)) { set(0xdcd8e2, 1, .09, 2.6); m.envMap = sky; film(m, .2, .5); }           // sunshield, cold side: aluminised film, a dark mirror
        else if (/pinkmli/.test(n)) { set(0xa97bbb, 1, .14, 1.7); m.envMap = sky; film(m, .2, .3); }              // sunshield, Sun side: silicon-coated film, a violet-pink mirror
        else if (/silver_mli|corecov_smli|sc_rad_smli/.test(n)) { set(0xd6d9de, 1, .2, 1.2); foil(m, 9, .34); }   // silver blankets
        else if (/blk_mli|straylgt_blkmli/.test(n)) { set(0x17171a, .6, .34, 1.2); foil(m, 9, .34); }             // black blankets
        else if (/sa_edge_gold/.test(n)) { set(0xc08a2c, 1, .22, 1.2); foil(m, 9, .34); }                         // gold blanket
        else if (/mboom_alu|carbonfiber/.test(n)) set(0x1d1d20, .25, .46, 1.1);                                   // struts and mirror frame: black carbon composite
        else if (/paintedblack|blkblack|bafl_/.test(n)) set(0x0d0d0f, 0, .6, .8);
        else if (/prop_alum|prop_drkalum|sc_ring_ssm|lambert1/.test(n)) { set(/drkalum/.test(n) ? 0x6f7378 : 0xa3a6ab, 1, .3, 1.1); foil(m, 7, .2); }      // spacecraft bus: bare metal
        else if (/whitepaint/.test(n)) set(0xd6d4cc, 0, .75, .8);
        else if (/sacells/.test(n)) set(0x0d111c, .4, .22, 1.6); }                                                // solar cells
      if (m.map) m.map.anisotropy = 8; }); });
}
function setCraft(key, push) {
  if (!CRAFT[key]) key = 'mars2020';
  const c = CRAFT[key], id = ++loadId; craftKey = key;
  const gi = GROUPS.findIndex(g => g.items.includes(key)), grp = GROUPS[gi];
  document.querySelectorAll('#sc-groups [data-g]').forEach(b => b.classList.toggle('on', +b.dataset.g === gi));
  $('sc-sub').hidden = grp.items.length < 2;
  $('sc-tabs').innerHTML = grp.items.map(k => k === 'voyager' ? '<a class="zcl-vbtn" href="voyager">Voyager 1</a>' : '<button class="zcl-vbtn' + (k === key ? ' on' : '') + '" data-c="' + k + '">' + CRAFT[k].tab + '</button>').join('');
  $('sc-tabs').querySelectorAll('[data-c]').forEach(b => b.addEventListener('click', () => { if (b.dataset.c !== craftKey) setCraft(b.dataset.c, true); }));
  $('sc-kicker').textContent = c.kicker; $('sc-title').textContent = c.title; $('sc-lede').textContent = c.lede;
  $('sc-views').innerHTML = Object.entries(c.views).filter(e => !e[1].hide).map(([k, v], i) => '<button class="zcl-vbtn' + (i ? '' : ' on') + '" data-v="' + k + '"><span class="l">' + v.label + '</span><span class="s">' + (v.short || v.label) + '</span></button>').join('');
  $('sc-views').querySelectorAll('[data-v]').forEach(b => b.addEventListener('click', () => setView(b.dataset.v)));
  $('sc-cards').innerHTML = c.cards.map(k => '<div class="zcl-pcard"><div class="zcl-pclabel">' + k[0] + '</div><div class="zcl-pcval">' + k[1] + '</div><div class="zcl-pcsub">' + k[2] + '</div></div>').join('');
  $('sc-story').innerHTML = c.story; $('sc-extra').hidden = !c.extra; if (c.extra) { $('sc-extrat').textContent = c.extra.title; $('sc-extrab').innerHTML = c.extra.html; c.extra.draw($('sc-dia')); } $('sc-credit').innerHTML = (c.credit || '3D models: NASA 3D Resources (NASA/JPL-Caltech, NASA/GSFC).') + ' The 3D views need an internet connection.'; $('sc-link').href = c.link.href; $('sc-link').textContent = c.link.txt + ' ›';
  document.title = c.title + ' · Dark Sky Almanac';
  if (push) history.replaceState(null, '', '?m=' + key);
  $('sc-info').classList.remove('open');
  if (!renderer) return;
  disposeWorld(); $('sc-loading').style.display = ''; $('sc-loading').textContent = 'Loading ' + c.tab + '…';
  const s = buildSetting(c); world = s.group; scene.add(world); skyLabels = s.labels; renderer.shadowMap.needsUpdate = true;      // the shadow map must exist before the first frame draws
  parts = c.parts; mixer = null; actions = []; dep = { t: 0, to: 0 }; spin = []; bound = []; drive = null; armCap = Infinity; { const b = $('sc-drive'); b.hidden = true; b.textContent = 'Drive'; b.disabled = false; $('sc-deploy').disabled = false; } $('sc-deploy').hidden = !c.models.some(m => m.anim); $('sc-deploy').textContent = (c.deployLabels || ['Deploy'])[0];
  if (c.local) { const m0 = c.models[0], e = new THREE.Euler(m0.rot[0] * D2R, m0.rot[1] * D2R, m0.rot[2] * D2R);      // part positions given on the model, before it is tilted
    parts = c.parts.map(q => q.w ? q : Object.assign({}, q, { p: new THREE.Vector3(...q.p).applyEuler(e).toArray() })); }
  viewOff.set(0, 0, 0);
  if (c.at === 'lm') { const m0 = c.models[0], Yax = new THREE.Vector3(0, 1, 0); viewOff.set(m0.pos[0], 0, m0.pos[2]);      // part positions given on the model; views given relative to where it stands
    parts = c.parts.map(q => Object.assign({}, q, { p: new THREE.Vector3(...q.p).applyAxisAngle(Yax, m0.rotY * D2R).add(viewOff).toArray() })); }
  const hot = $('sc-hot'); hot.innerHTML = ''; hotEls = [];
  parts.forEach((p, i) => { const b = document.createElement('button'); b.className = 'vg-dot'; b.textContent = i + 1; b.setAttribute('aria-label', p.name);
    b.addEventListener('click', () => showPart(i)); hot.appendChild(b); hotEls.push(b); });
  drawLabels();
  setView(Object.keys(c.views)[0], true);
  let left = c.models.length; const meshes = [];
  c.models.forEach(m => loader.load(m.url, g => {
    if (id !== loadId) return; const o = g.scene; if (m.pos) o.position.set(...m.pos); if (m.rotY) o.rotation.y = m.rotY * D2R; if (m.scale) o.scale.setScalar(m.scale); if (m.rot) o.rotation.set(m.rot[0] * D2R, m.rot[1] * D2R, m.rot[2] * D2R);
    if (m.strip) stripTris(o, m.strip);
    tuneMaterials(o); world.add(o); meshes.push(o);
    if (m.ground != null) { const w = world, sit = () => { if (id !== loadId) return; const y = w.userData.T.surf(o.position.x, o.position.z), dy = y - viewOff.y; o.position.y = y + m.ground;      // stand it on the terrain once that exists
        viewOff.y = y; parts.forEach(q => { q.p[1] += dy; }); camera.position.y += dy; controls.target.y += dy; skyLabels.forEach(l => { if (l[0] === 'Lunar Module') l[1].y += dy; }); renderer.shadowMap.needsUpdate = true; };
      if (w.userData.T) sit(); else w.userData.seat = sit; }
    if (m.anim && g.animations.length) {
      mixer = new THREE.AnimationMixer(o); hold = m.anim; dep.t = dep.to = hold[0];
      actions = g.animations.filter(cl => cl.name !== 'rig').map(cl => { const a = mixer.clipAction(cl); a.setLoop(THREE.LoopOnce); a.clampWhenFinished = true; a.play(); return a; });
      pose(hold[1]); o.updateMatrixWorld(true);
      parts.forEach((p, i) => { const n = p.node && o.getObjectByName(p.node); if (n) bound[i] = { n, l: n.worldToLocal(new THREE.Vector3(...p.p)) }; });
      pose(hold[0]);
    }
    if (m.drive) { drive = setupDrive(o, world, m.drive); $('sc-drive').hidden = !drive; }
    if (m.spin) { o.updateMatrixWorld(true);      // the two rotors turn opposite ways about the vertical, whichever way each one's own axis happens to point
      m.spin.forEach((nm, i) => { const n = o.getObjectByName(nm); if (n) spin.push([n, (i % 2 ? -1 : 1) * (Math.sign(n.matrixWorld.elements[1]) || 1)]); }); }
    o.traverse(q => { if (q.isMesh && !q.isInstancedMesh) try { q.geometry.computeBoundsTree(); } catch (e) {} }); renderer.shadowMap.needsUpdate = true;
    if (--left === 0) { $('sc-loading').style.display = 'none'; pickables = meshes; renderer.shadowMap.needsUpdate = true; if (mixer && c.models.every(q => q.auto !== false)) setTimeout(() => { if (id === loadId) setDeploy(true); }, 900); }
  }, undefined, () => { if (id === loadId) $('sc-loading').textContent = 'The 3D model could not load — check your connection.'; }));
}
let skyLabels = [], pickables = [];
function drawLabels() { $('sc-labels').innerHTML = skyLabels.map((l, i) => '<span class="vg-lab' + (l[6] ? ' pin' : '') + '" data-i="' + i + '">' + l[0] + '</span>').join(''); }
// Moving parts: NASA's own rig for the rover's mast and arm, played between the stowed and deployed moments of its timeline (`hold`, in seconds)
let mixer = null, actions = [], hold = [0, 0], dep = { t: 0, to: 0 }, spin = [], bound = [], lastT = 0;
/* Rocker-bogie suspension in action (Curiosity). NASA's rig has every joint as a real hinge: a rocker pivoting on each
   side of the body with the front wheel on it, a bogie on the back of each rocker carrying the other two wheels, and
   the differential bar across the deck that ties the two rockers together. The rover drives over one rock with its left
   wheels. Nothing here is keyframed. On every frame the body's height, pitch and roll, the rocker angle and the two
   bogie angles are solved so that all six wheels rest exactly on the ground, with the rockers turning by equal and
   opposite amounts — which is what the differential does, and why the body pitches only half as much as a rocker. */
let drive = null;
function setupDrive(o, grp, cfg) {
  const N = n => o.getObjectByName(n), V = () => new THREE.Vector3(), X = new THREE.Vector3(1, 0, 0), Y = new THREE.Vector3(0, 1, 0);
  let root = cfg.root && N(cfg.root), bodies = (cfg.bodies || []).map(N);
  if (cfg.regroup) { root = new THREE.Group(); const body = new THREE.Group(); [...o.children].forEach(c => body.add(c)); root.add(body); o.add(root); bodies = [body]; }      // a model with no single "whole rover" node: gather everything under one
  const d = { root, bodies, rock: cfg.rock.map(N), bog: cfg.bog.map(N), bar: N(cfg.bar), rods: cfg.rods.map(N), wheels: cfg.wheels.map(N), arm: cfg.arm, armT: cfg.armT, s: 0, t: -1, p: [0, 0, 0, 0, 0, 0], ang: [0, 0, 0, 0, 0, 0], D: 3.7, phase: '' };
  if (!d.root || [...d.bodies, ...d.rock, ...d.bog, d.bar, ...d.rods, ...d.wheels].some(n => !n)) return null;
  o.updateMatrixWorld(true);
  const all = [d.root, ...d.bodies, ...d.rock, ...d.bog, d.bar, ...d.rods, ...d.wheels]; d.rest = new Map(all.map(n => [n, { q: n.quaternion.clone(), p: n.position.clone() }]));
  d.w0 = d.wheels.map(w => w.getWorldPosition(V())); d.last = d.w0.map(q => q.clone());
  // the rock: an angular slab of dark basalt about 20 cm high, half buried, in the path of the left wheels.
  // It is a block cut by flat faces at odd angles (a tilted top, a broken corner, seven sides), which is how fractured rock looks.
  const x0 = (d.w0[0].x + d.w0[1].x) / 2, z0 = d.w0[0].z + .74, D2 = Math.PI / 180;
  const RN = rand(23), LT = []; for (let i = 0; i < 4096; i++) LT.push(RN());
  const vn = (a, b) => { const i = Math.floor(a), j = Math.floor(b), fa = a - i, fb = b - j, sa = fa * fa * (3 - 2 * fa), sb = fb * fb * (3 - 2 * fb), at = (p, q) => LT[((p & 63) << 6) | (q & 63)]; return at(i, j) * (1 - sa) * (1 - sb) + at(i + 1, j) * sa * (1 - sb) + at(i, j + 1) * (1 - sa) * sb + at(i + 1, j + 1) * sa * sb; };
  const fb = (a, b) => vn(a, b) * .5 + vn(a * 2.3 + 7, b * 2.3 + 3) * .3 + vn(a * 5.1 + 2, b * 5.1 + 9) * .2;
  const SIDES = [[10, .40, 1.9], [62, .33, 2.6], [118, .30, 1.4], [171, .42, 2.2], [228, .34, 3.0], [282, .31, 1.6], [330, .36, 2.4], [35, .47, .9], [200, .48, .8]].map(f => [Math.cos(f[0] * D2), Math.sin(f[0] * D2), f[1], f[2]]);
  const block = (u, w) => { let h = Math.min(.186 + .10 * u - .06 * w, .214 - .34 * u - .26 * w); for (const f of SIDES) { const q = f[3] * (f[2] - (u * f[0] + w * f[1])); if (q < h) h = q; } return h; };
  // no fracture is perfectly flat or straight: the faces bow a little, pieces have spalled off the edges, and the surface is pitted
  const lump = (u, w, k) => { const a = u + .034 * (fb(u * 5 + 1, w * 5 + k) - .5), b = w + .034 * (fb(u * 5 + 9, w * 5 + 4 + k) - .5);
    let h = block(a, b) - .05 * Math.max(0, fb(u * 8 + 3 + k, w * 8 + 8) - .56); if (h <= 0) return 0;
    return Math.max(.001, h + Math.min(1, h * 9) * (.022 * (fb(u * 13 + k, w * 13 + 2) - .5) - .012 * Math.max(0, fb(u * 46 + 5, w * 46 + k) - .6))); };
  // …and it has shed a few fragments, which lie beside it
  const BITS = [[-.385, .30, .21, 40], [.40, -.27, .16, 205], [.37, .31, .11, 110], [-.41, -.12, .09, 300]].map(f => [f[0], f[1], f[2], Math.cos(f[3] * D2), Math.sin(f[3] * D2)]);
  const stone = (u, w) => { let h = lump(u, w, 0); for (const f of BITS) { const a = (u - f[0]) / f[2], b = (w - f[1]) / f[2]; if (a * a + b * b < .5) h = Math.max(h, f[2] * lump(a * f[3] - b * f[4], a * f[4] + b * f[3], f[2] * 40)); } return h; };
  const g = (x, z) => stone(x - x0, z - z0);
  // height of each wheel's centre as it rolls: the wheel is a wide drum that rides on the highest ground under it
  const zA = -1.9, dz = .008, n = Math.ceil((d.D + 6.6) / dz); d.zA = zA; d.dz = dz;
  d.C = d.wheels.map((w, i) => { const R = d.w0[i].y, T = new Float32Array(n), G = new Float32Array(n);
    for (let k = 0; k < n; k++) { let m = 0; for (let j = -4; j <= 4; j++) m = Math.max(m, g(d.w0[i].x + j * cfg.ww / 4, zA + k * dz)); G[k] = m; }
    const span = Math.ceil(R / dz); for (let k = 0; k < n; k++) { let c = R; for (let j = -span; j <= span; j++) { const kk = k + j; if (kk < 0 || kk >= n || !G[kk]) continue; const e = j * dz, hgt = G[kk] + Math.sqrt(Math.max(0, R * R - e * e)); if (hgt > c) c = hgt; } T[k] = c; }
    return T; });
  d.h = (i, z) => { const u = (z - zA) / dz, k = Math.max(0, Math.min(d.C[i].length - 2, Math.floor(u))), f = Math.max(0, Math.min(1, u - k)); return d.C[i][k] * (1 - f) + d.C[i][k + 1] * f; };
  // …and the stone itself, drawn from the same shape on a 1 cm grid, coloured by what each spot is: bare dark rock on the steep
  // faces, rusty dust settled on anything near level
  { const nx = 150, nz = 132, UX = .5, UZ = .44, pos = [], idx = [], kind = [];
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) { const u = (i / nx * 2 - 1) * UX, w = (j / nz * 2 - 1) * UZ, st = stone(u, w);
      pos.push(x0 + u, st > 0 ? st : -.03, z0 + w); kind.push(st > 0 ? 1 : 0); }      // everything outside the rock is tucked under the ground
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) { const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, e = c + 1; if (kind[a] || kind[b] || kind[c] || kind[e]) idx.push(a, c, b, b, c, e); }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals();
    const nrm = geo.attributes.normal, col = [], rockC = new THREE.Color(0x5b4d48), darkC = new THREE.Color(0x2b2523), dustC = new THREE.Color(0x8a5235), soilC = new THREE.Color(0x70432f), c = new THREE.Color();
    for (let k = 0; k < kind.length; k++) { const x = pos[k * 3] - x0, z = pos[k * 3 + 2] - z0, y = pos[k * 3 + 1], up = nrm.getY(k), m1 = fb(x * 9 + 4, z * 9), m2 = fb(x * 46 + 5, z * 46);
      if (kind[k]) { c.copy(rockC).lerp(darkC, Math.max(0, Math.min(1, (m1 - .3) * 2.4))); if (m2 > .6) c.multiplyScalar(.6);      // grey-brown basalt, mottled, with dark pits
        c.multiplyScalar(.72 + .28 * Math.min(1, y / .1));      // darker towards the foot, where less sky reaches it
        const t = Math.max(0, Math.min(1, (up - .78) / .2)), low = Math.max(0, 1 - y / .03); c.lerp(dustC, t * t * Math.max(0, Math.min(1, (m1 - .4) * 3.2)) * .62); c.lerp(soilC, low * low * .9); }      // rusty dust lies in patches on what is near level, and soil is banked against the foot
      else c.copy(soilC);
      col.push(c.r, c.g, c.b); }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .93 }); weather(mat, .1, 0, .6, 26);
    const m = new THREE.Mesh(geo, mat); m.castShadow = m.receiveShadow = true; grp.add(m); }
  // differential linkage: where each rod leaves its rocker, and the end of the bar it runs to
  d.rodA = d.rods.map(r => r.position.clone()); d.barEnd = d.rods.map((r, i) => { const a = r.getWorldPosition(V()), b = d.bar.getWorldPosition(V()); return new THREE.Vector3(a.x, b.y, b.z); });
  d.barC = d.bar.getWorldPosition(V()); d.endL = d.barEnd.map(b => d.bar.worldToLocal(b.clone())); d.rodDir0 = d.rods.map((r, i) => d.rock[i].worldToLocal(d.barEnd[i].clone()).sub(d.rodA[i]).normalize());
  const q = new THREE.Quaternion(), e = new THREE.Euler(), wp = V();
  const apply = p => { d.root.position.z = d.rest.get(d.root).p.z + d.s;
    d.bodies.forEach(b => { b.position.y = d.rest.get(b).p.y + p[0]; b.quaternion.setFromEuler(e.set(p[2], 0, p[1], 'XYZ')).premultiply(d.rest.get(b).q); });
    d.rock.forEach((r, i) => r.quaternion.copy(d.rest.get(r).q).multiply(q.setFromAxisAngle(X, i ? -p[3] : p[3])));
    d.bog.forEach((b, i) => b.quaternion.copy(d.rest.get(b).q).multiply(q.setFromAxisAngle(X, p[4 + i]))); };
  const res = p => { apply(p); d.root.updateMatrixWorld(true); return d.wheels.map((w, i) => { w.getWorldPosition(wp); return wp.y - d.h(i, wp.z); }); };
  d.solve = () => { const p = d.p;
    for (let it = 0; it < 5; it++) { const r = res(p); if (Math.max(...r.map(Math.abs)) < 2e-5) break;
      const J = r.map(() => []); for (let j = 0; j < 6; j++) { const sv = p[j]; p[j] = sv + 1e-4; const r2 = res(p); p[j] = sv; for (let i = 0; i < 6; i++) J[i][j] = (r2[i] - r[i]) / 1e-4; }
      const M = J.map((row, i) => [...row, -r[i]]);      // Gaussian elimination
      for (let c = 0; c < 6; c++) { let pv = c; for (let i = c + 1; i < 6; i++) if (Math.abs(M[i][c]) > Math.abs(M[pv][c])) pv = i; [M[c], M[pv]] = [M[pv], M[c]]; if (Math.abs(M[c][c]) < 1e-9) continue;
        for (let i = 0; i < 6; i++) if (i !== c) { const f = M[i][c] / M[c][c]; for (let k = c; k <= 6; k++) M[i][k] -= f * M[c][k]; } }
      for (let j = 0; j < 6; j++) { const dp = Math.abs(M[j][j]) < 1e-9 ? 0 : M[j][6] / M[j][j]; p[j] += Math.max(-.08, Math.min(.08, dp)); } }
    apply(p); d.root.updateMatrixWorld(true);
    // the bar turns to follow the rockers, and each rod swings to stay pinned to its end of the bar
    const hgt = d.rodA[0].y, L = Math.abs(d.barEnd[0].x - d.barC.x), psi = -Math.asin(Math.max(-1, Math.min(1, hgt * Math.sin(p[3]) / L)));
    d.bar.quaternion.copy(d.rest.get(d.bar).q).multiply(q.setFromAxisAngle(Y, psi)); d.bar.updateMatrixWorld(true);
    d.rods.forEach((r, i) => { const dir = d.rock[i].worldToLocal(d.bar.localToWorld(d.endL[i].clone())).sub(d.rodA[i]).normalize(); r.quaternion.copy(d.rest.get(r).q).premultiply(q.setFromUnitVectors(d.rodDir0[i], dir)); });
    // wheels turn by exactly the distance they roll
    d.wheels.forEach((w, i) => { w.getWorldPosition(wp); const dzz = wp.z - d.last[i].z, ds = Math.hypot(dzz, wp.y - d.last[i].y) * Math.sign(dzz || 1); d.ang[i] += ds / d.w0[i].y; d.last[i].copy(wp); w.quaternion.copy(d.rest.get(w).q).multiply(q.setFromAxisAngle(X, d.ang[i])); });
    d.root.updateMatrixWorld(true); };
  return d;
}
// position along the drive at time t: out over the rock, a pause, and back in reverse (about 7× faster than the real rover's 4 cm a second)
function driveAt(d, t) { const v = .3, a = .3, D = d.D, tr = v / a, T = D / v + tr, trap = x => x <= 0 ? 0 : x >= T ? D : x < tr ? .5 * a * x * x : x > T - tr ? D - .5 * a * (T - x) * (T - x) : v * (x - tr / 2);
  return t < T ? trap(t) : t < T + 1.2 ? D : t < 2 * T + 1.2 ? D - trap(t - T - 1.2) : 0; }
// One press: raise the mast if it is down, fold the arm away (the rover never drives with it out), drive, and unfold again.
function driveStep(dt) { const d = drive; if (!d || !d.phase) return; const [armIn, armOut, rate] = d.armT;
  if (d.phase === 'ready') { if (dep.t === hold[1]) { d.phase = 'stow'; armCap = armOut; } return; }
  if (d.phase === 'stow') { armCap = Math.max(armIn, armCap - dt * rate); pose(dep.t); if (armCap === armIn) { d.phase = 'go'; d.t = 0; } }
  else if (d.phase === 'go') { const s0 = d.s; d.t += dt; d.s = driveAt(d, d.t); d.solve(); const dz = d.s - s0;      // the camera rides along beside the rover
    if (tween) [tween.from.p, tween.from.t, tween.to.p, tween.to.t].forEach(v => { v.z += dz; }); else { camera.position.z += dz; controls.target.z += dz; }
    if (d.t > 2 * (d.D / .3 + 1) + 1.2) { d.s = 0; d.solve(); d.phase = 'unstow'; } }
  else if (d.phase === 'unstow') { armCap = Math.min(armOut, armCap + dt * rate); pose(dep.t); if (armCap === armOut) { armCap = Infinity; d.phase = ''; const b = $('sc-drive'); b.textContent = 'Drive'; b.disabled = false; $('sc-deploy').disabled = false; } }
  renderer.shadowMap.needsUpdate = true; }
function startDrive() { if (!drive || drive.phase || !mixer) return; drive.phase = 'ready'; setDeploy(true); const b = $('sc-drive'); b.textContent = 'Driving…'; b.disabled = true; $('sc-deploy').disabled = true; controls.autoRotate = false; $('sc-info').classList.remove('open'); if (CRAFT[craftKey].views.drive) setView('drive'); }
let armCap = Infinity;      // lets the arm fold away by itself while everything else stays as it is
function pose(t) { actions.forEach(a => { a.paused = false; a.enabled = true; const c = a.getClip(); a.time = Math.min(drive && drive.arm.test(c.name) ? Math.min(t, armCap) : t, c.duration); }); mixer.update(0); if (drive && drive.s) drive.solve(); }
function setDeploy(on) { dep.to = hold[on ? 1 : 0]; const l = CRAFT[craftKey].deployLabels || ['Deploy', 'Stow']; $('sc-deploy').textContent = l[on ? 1 : 0]; }
let viewFov = 0, lookView = false; const viewOff = new THREE.Vector3();
function zoomFov(f) { if (!lookView || tween) return; viewFov = Math.max(5, Math.min(75, (viewFov || camera.fov) * f)); camera.fov = viewFov; camera.updateProjectionMatrix(); controls.rotateSpeed = .5 * viewFov / 50; }
function baseFov() { return viewFov || (camera.aspect < 1.1 ? 50 : 38); }
function resize() { const cv = renderer.domElement, w = cv.clientWidth, h = cv.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; if (!tween) camera.fov = baseFov(); camera.updateProjectionMatrix(); }
function setView(k, instant) {
  $('sc-info').classList.remove('open'); hotEls.forEach(b => b.classList.remove('on'));
  const v = CRAFT[craftKey].views[k]; if (v.deploy && mixer) setDeploy(true); $('sc-views').querySelectorAll('[data-v]').forEach(b => b.classList.toggle('on', b.dataset.v === k));
  const to = { p: new THREE.Vector3(...v.pos), t: new THREE.Vector3(...v.tgt) }; if (!v.abs) { to.p.add(viewOff); if (!v.tabs) to.t.add(viewOff); }
  if (camera.aspect < 1.1 && (k === 'overview' || k === 'above' || k === 'drive')) to.p.sub(to.t).multiplyScalar(k === 'above' ? (CRAFT[craftKey].env === 'mars' ? 1.3 : 1.12) : k === 'drive' ? 1.45 : 1.2).add(to.t);      // step back on a tall, narrow screen
  // "Look around" views pivot about a point just in front of the lens, so dragging turns your head instead of swinging the camera around a far-off subject
  if (v.look) to.t.sub(to.p).setLength(.04).add(to.p);      // the pivot is the lens itself, so looking up never drags the camera down through the seat
  lookView = !!v.look; viewFov = v.fov || (v.look ? (camera.aspect < 1.1 ? 50 : 38) : 0); controls.enableZoom = !v.look; const env = CRAFT[craftKey].env; camera.near = (env === 'l2' || env === 'saturn') ? .4 : env === 'leo' ? .3 : env === 'moon' ? .06 : .03; camera.far = env === 'leo' ? 6500 : env === 'moon' ? 110000 : env === 'mars' ? 200000 : 1300; camera.updateProjectionMatrix();
  $('sc-cv').parentElement.classList.toggle('sc-above', k === 'above');      // the vehicle's own buttons (Parts, Drive, Stow) step aside over the map
  mapMode = k === 'above' && env === 'mars'; const T = THREE;      // over Jezero the view handles like a map: drag to move across it, two fingers or right-drag to tilt and turn
  Object.assign(controls, { enablePan: mapMode, screenSpacePanning: !mapMode, zoomToCursor: mapMode, mouseButtons: mapMode ? { LEFT: T.MOUSE.PAN, MIDDLE: T.MOUSE.DOLLY, RIGHT: T.MOUSE.ROTATE } : { LEFT: T.MOUSE.ROTATE, MIDDLE: T.MOUSE.DOLLY, RIGHT: T.MOUSE.PAN },
    touches: mapMode ? { ONE: T.TOUCH.PAN, TWO: T.TOUCH.DOLLY_ROTATE } : { ONE: T.TOUCH.ROTATE, TWO: T.TOUCH.DOLLY_PAN } });
  { const hp = document.querySelector('.vg-help'); if (hp) { hp.dataset.d = hp.dataset.d || hp.textContent; hp.textContent = mapMode ? (matchMedia('(pointer:coarse)').matches ? 'Drag to move · two fingers to tilt and turn · pinch to zoom · tap a name' : 'Drag to move · right-drag to tilt and turn · scroll to zoom · click a name') : hp.dataset.d; } }
  controls.autoRotate = k === 'overview'; controls.maxPolarAngle = (env === 'l2' || env === 'leo' || env === 'saturn') ? Math.PI : v.look ? Math.PI * .92 : Math.PI / 2 - .04;
  const sz = CRAFT[craftKey].dist || ((env === 'l2' || env === 'saturn') ? [6, 70] : env === 'leo' ? [5, 60] : (env === 'mars' || craftKey === 'lrv') ? [.8, 22] : [2, 40]); controls.minDistance = v.look ? .02 : sz[0]; controls.maxDistance = sz[1]; controls.rotateSpeed = v.look ? .5 * viewFov / 50 : 1;
  if (instant) { camera.position.copy(to.p); controls.target.copy(to.t); camera.fov = baseFov(); camera.updateProjectionMatrix(); controls.update(); return; }
  const far = camera.position.distanceTo(to.p) > 500;      // a move between the ground and high overhead: longer, and accelerating away from the ground so it reads as one continuous pull-back
  tween = { from: { p: camera.position.clone(), t: controls.target.clone(), f: camera.fov }, to, f: baseFov(), t0: performance.now(), dur: far ? 3200 : 1400, zoom: far ? (to.p.y > camera.position.y ? 1 : -1) : 0 };
}
function showPart(i) {
  const p = parts[i]; hotEls.forEach((b, j) => b.classList.toggle('on', j === i));
  $('sc-info').innerHTML = '<div class="vg-infon"><span>' + (i + 1) + '</span>' + p.name + '</div><div class="vg-infot">' + p.txt + '</div>'; $('sc-info').classList.add('open');
}
const _v = new THREE.Vector3(), _d = new THREE.Vector3(), _p = new THREE.Vector3(), ray = new THREE.Raycaster(); ray.firstHitOnly = true; let frame = 0;
function place() {
  const cv = renderer.domElement, w = cv.clientWidth, h = cv.clientHeight, check = pickables.length && (frame++ % 6 === 0), showParts = $('sc-parts').classList.contains('on');
  parts.forEach((p, i) => { const b = bound[i]; if (b) b.n.localToWorld(_p.copy(b.l)); else _p.set(...p.p); _v.copy(_p); const dist = _v.distanceTo(camera.position); _v.project(camera);
    const el = hotEls[i]; if (!el) return; const on = _v.z < 1 && Math.abs(_v.x) < 1.02 && Math.abs(_v.y) < 1.02 && dist < 150;
    el.style.transform = 'translate(' + ((_v.x + 1) / 2 * w - 11).toFixed(1) + 'px,' + ((1 - _v.y) / 2 * h - 11).toFixed(1) + 'px)';
    if (check) { _d.copy(_p).sub(camera.position).normalize(); ray.set(camera.position, _d); ray.far = dist - (CRAFT[craftKey].occl || .35); el.dataset.hid = ray.intersectObjects(pickables, true).length ? '1' : ''; }
    const vis = on && !el.dataset.hid && showParts && !(drive && drive.phase);      // the numbered dots stay put, so hide them while the rover is away from its spot
    el.style.opacity = vis ? 1 : 0; el.style.pointerEvents = vis ? 'auto' : 'none'; });
  $('sc-labels').querySelectorAll('.vg-lab').forEach(el => { const l = skyLabels[+el.dataset.i]; _v.copy(l[1]).project(camera);
    if (check && CRAFT[craftKey].env === 'moon') { _d.copy(l[1]).sub(camera.position); ray.far = _d.length(); ray.set(camera.position, _d.normalize()); el.dataset.hid = ray.intersectObjects(pickables, true).length ? '1' : ''; }      // a label behind the vehicle is hidden by it
    const far = camera.position.distanceTo(l[1]), on = !el.dataset.hid && _v.z < 1 && Math.abs(_v.x) < .93 && Math.abs(_v.y) < .93 && (camera.fov > 22 || l[3]) && !(l[2] && far < l[2]) && !(l[3] && far > l[3]) && !(l[4] && camera.position.y < (mapMode && l[4] <= 1500 ? 150 : l[4])); el.style.opacity = on ? 1 : 0; if (l[6]) el.style.pointerEvents = on ? 'auto' : 'none';
    let side = l[5]; if (on) { const x = (_v.x + 1) / 2 * w; if (side === 'L' && x - 38 - el.offsetWidth < 4) side = 0; if (!side && x + 16 + el.offsetWidth > w - 4) el.style.opacity = 0; }      // a label that would run off the left edge moves to the right of its point; off the right edge, it is hidden rather than cut
    el.style.transform = 'translate(' + ((_v.x + 1) / 2 * w).toFixed(1) + 'px,' + ((1 - _v.y) / 2 * h).toFixed(1) + 'px)' + (side === 'L' ? ' translate(-100%,0) translateX(-22px)' : side === 'T' ? ' translate(-50%,-15px) translateX(-11px)' : side === 'B' ? ' translate(-20px,12px)' : ''); });
}
function moonCam() {      // one Moon scene runs from the driver's seat to 25 km up: keep the near plane and the exposure in step with the height
  const cc = CRAFT[craftKey]; if (!cc || cc.env !== 'moon' || !camera) return;
  if (!lookView) { const nr = Math.min(120, Math.max(.06, camera.position.distanceTo(controls.target) * .004)); if (Math.abs(nr - camera.near) > camera.near * .2) { camera.near = nr; camera.updateProjectionMatrix(); } }
  const t = Math.max(0, Math.min(1, (camera.position.y - 150) / 2500)), up = t * t * (3 - 2 * t), u = world && world.userData, t2 = Math.max(0, Math.min(1, (camera.position.y - 4) / 50));
  renderer.toneMappingExposure = 1.08 * (1 + 1.4 * t2 * t2 * (3 - 2 * t2));      // seen from straight above, sunlit ground under a low Sun is dim: open up the exposure as the camera climbs…
  if (u && u.fill) u.fill.intensity = .62 - .37 * up;        // …and let the shadows deepen, so the mountains stand out
  if (u && u.route) { const o = Math.max(0, Math.min(1, (camera.position.y - 700) / 1500)); u.route.U.op.value = o; u.route.dm.opacity = o; u.route.dp.opacity = o; u.route.U.px.value = 3.2 * 2 * Math.tan(camera.fov * D2R / 2) / renderer.domElement.clientHeight;
    const lg = $('sc-legend'); if (lg) lg.classList.toggle('on', o > .5); }
  if (u && u.soil) u.soil.bumpScale = .9 * (1 - .75 * Math.max(0, Math.min(1, (camera.position.y - 6) / 60)));      // the grain of the soil turns to noise seen from the air
  if (u && u.trail) u.trail.opacity = .34 * Math.max(0, Math.min(1, (camera.position.y - 12) / 50));
  if (u && u.stars) u.stars.position.copy(camera.position);  // the stars are infinitely far away, wherever the camera goes
}
let mapMode = false;
const FOG_LOW = new THREE.Color(0x9c7b5f), FOG_HIGH = new THREE.Color(0xa88466);      // the ground-level haze, and the sky dome's horizon
function marsCam() {      // after the controls move the camera, so the sky is never left behind; the Mars scene runs from beside the rover to 70 km up: thin the haze, move the near plane and swap the ground with the height
  const cc = CRAFT[craftKey], u = world && world.userData; if (!cc || cc.env !== 'mars' || !camera || !u || !u.sky) return;
  if (mapMode && !tween) { const t = controls.target, lim = JZ.W / 2 - 4000, dx = Math.max(JZ.C[0] - lim, Math.min(JZ.C[0] + lim, t.x)) - t.x, dz = Math.max(JZ.C[1] - lim, Math.min(JZ.C[1] + lim, t.z)) - t.z; if (dx || dz) { t.x += dx; t.z += dz; camera.position.x += dx; camera.position.z += dz; } }      // keep the map under the view
  const y = Math.max(0, camera.position.y); u.sky.position.copy(camera.position);
  if (u.hr) u.hr.forEach(h => h.userData.update(camera.position));
  if (!lookView) { const nr = Math.min(150, Math.max(.03, camera.position.distanceTo(controls.target) * .003)); if (Math.abs(nr - camera.near) > camera.near * .2) { camera.near = nr; camera.updateProjectionMatrix(); } }
  if (scene.fog) { scene.fog.near = 25 + y * 1.2; scene.fog.far = 220 + y * 6; const t = Math.max(0, Math.min(1, (y - 50) / 2000)); scene.fog.color.lerpColors(FOG_LOW, FOG_HIGH, t * t * (3 - 2 * t)); }      // from the air the distance fades into the dusty horizon of the sky dome
  // over the map the route stays on down to a few hundred metres
  if (u.route) { const o = mapMode ? Math.max(0, Math.min(1, (y - 120) / 300)) : Math.max(0, Math.min(1, (y - 1500) / 3000)); u.route.U.op.value = o; u.route.dm.opacity = o; u.route.dp.opacity = o; u.route.U.px.value = 3.2 * 2 * Math.tan(camera.fov * D2R / 2) / renderer.domElement.clientHeight;
    const lg = $('sc-legend'); if (lg) lg.classList.toggle('on', o > .5); }
  if (u.crater) {      // the rover's patch of close-up ground (a repeating texture) fades out as the camera climbs, leaving the real crater
    u.crater.visible = y > 20; const f = Math.max(0, Math.min(1, (y - 40) / 80));
    u.near.forEach(o => { const m = o.material; o.visible = f < 1; if (m.transparent !== f > 0) { m.transparent = f > 0; m.depthWrite = !m.transparent; m.needsUpdate = true; } m.opacity = 1 - f; });
    if (u.rocks) u.rocks.visible = f < .5; }
}
function stepTween() { if (!tween) return; const k = Math.min(1, (performance.now() - tween.t0) / tween.dur), R = 300; let e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    if (tween.zoom > 0) e = (Math.pow(R, e) - 1) / (R - 1); else if (tween.zoom < 0) e = 1 - (Math.pow(R, 1 - e) - 1) / (R - 1);
    camera.position.lerpVectors(tween.from.p, tween.to.p, e); controls.target.lerpVectors(tween.from.t, tween.to.t, e); camera.fov = tween.from.f + (tween.f - tween.from.f) * e; camera.updateProjectionMatrix(); if (k >= 1) tween = null; }
let frozen = false;      // test hook: hold one still frame
function advance(dt) {      // everything that moves by itself, for one step of time
  if (mixer && dep.t !== dep.to) { const s = Math.sign(dep.to - dep.t); dep.t += s * dt * 1.5; if ((dep.to - dep.t) * s <= 0) dep.t = dep.to; pose(dep.t); renderer.shadowMap.needsUpdate = true; }
  if (spin.length) { spin.forEach(q => q[0].rotateX(q[1] * 5.2 * dt)); renderer.shadowMap.needsUpdate = true; }      // a slow 50 rpm turn, as in Ingenuity's first spin test
  driveStep(dt);
}
function loop() {
  if (!running || frozen || document.hidden) return; requestAnimationFrame(loop);
  stepTween();
  if (!controls.autoRotate && !tween && lastInteract && performance.now() - lastInteract > 12000 && $('sc-views').querySelector('.on')?.dataset.v === 'overview') controls.autoRotate = true;
  const now = performance.now(), dt = Math.min(.05, (now - lastT) / 1000); lastT = now;
  advance(dt);
  moonCam();
  controls.update(); marsCam(); renderer.render(scene, camera); place();
}

/* ───────────── Page wiring ───────────── */
$('sc-groups').innerHTML = GROUPS.map((g, i) => '<button class="zcl-vbtn" data-g="' + i + '">' + g.label + '</button>').join('');
document.querySelectorAll('#sc-groups [data-g]').forEach(b => b.addEventListener('click', () => { const g = GROUPS[+b.dataset.g]; if (!g.items.includes(craftKey)) setCraft(g.items[0], true); }));
$('sc-parts').addEventListener('click', function () { this.classList.toggle('on'); if (!this.classList.contains('on')) $('sc-info').classList.remove('open'); });
$('sc-deploy').addEventListener('click', () => { if (mixer) setDeploy(dep.to === hold[0]); });
$('sc-drive').addEventListener('click', startDrive);
$('sc-labels').addEventListener('click', e => { const el = e.target.closest('.vg-lab.pin'), l = el && skyLabels[+el.dataset.i]; if (l && l[6]) { hotEls.forEach(b => b.classList.remove('on')); showCard(l[6]); } });
$('sc-info').addEventListener('click', () => { $('sc-info').classList.remove('open'); hotEls.forEach(b => b.classList.remove('on')); });
const first = new URLSearchParams(location.search).get('m') || 'mars2020';
window.__sc = () => ({ camera, controls, setView, setCraft, pick: (nx, ny) => { const rc = new THREE.Raycaster(); rc.setFromCamera({ x: nx, y: ny }, camera); const h = rc.intersectObjects(pickables, true)[0]; if (!h) return null; const g = h.object.geometry, P = g.attributes.position, f = h.face, w = new THREE.Vector3(); h.object.updateMatrixWorld(true);
      return [h.point.toArray().map(v => +v.toFixed(2)), [f.a, f.b, f.c].map(i => w.fromBufferAttribute(P, i).applyMatrix4(h.object.matrixWorld).toArray().map(v => +v.toFixed(2)))]; }, world: () => world, renderer: () => renderer, pose: t => { dep.t = dep.to = t; pose(t); renderer.shadowMap.needsUpdate = true; }, ready: () => pickables.length, dep: () => dep.t, run: secs => { for (let t = 0; t < secs; t += .05) advance(.05); return { dep: dep.t, phase: drive ? drive.phase : null, s: drive ? drive.s : null, armCap }; }, driveTo: t => { if (!drive) return null; armCap = drive.armT[0]; pose(dep.t); const n = 60; for (let i = 1; i <= n; i++) { drive.s = driveAt(drive, t * i / n); drive.solve(); } return { s: drive.s, p: drive.p.slice(), wheels: drive.wheels.map((w, i) => { const v = w.getWorldPosition(new THREE.Vector3()); return +(v.y - drive.h(i, v.z)).toFixed(5); }) }; }, still: k => { frozen = true; running = false; frame = 0; if (k != null && tween) { tween.t0 = performance.now() - k * tween.dur; stepTween(); } moonCam(); controls.update(); marsCam(); renderer.render(scene, camera); place(); } });
try { init(); } catch (e) { $('sc-loading').textContent = '3D view needs WebGL, which this browser has turned off.'; }
setCraft(first, false);
