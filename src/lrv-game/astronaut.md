# models/astronaut.glb

From NASA 3D Resources, `3D Models/Astronaut/Astronaut.glb` (public domain), github.com/nasa/NASA-3D-Resources.

1. The suit texture (1024 px, the model's own) was given a fine Beta-cloth weave and a slightly warmer off-white,
   with faint unevenness (numpy/Pillow: weave = 1 + 0.035·sin(2πx/3.2)·sin(2πy/3.2) + 0.02·sin(2π(x+y)/11)),
   saved as JPEG q86.
2. `tools/astronaut-conv.mjs` (glTF-Transform 4.1): Draco decoded, WebP textures replaced (suit: the JPEG above;
   visor: the model's own PNG), welded, deduplicated, pruned, written with EXT_meshopt_compression (quantized). 282 KB.

The seated pose, the dust on the boots and legs, and the crew's placement are done at load time in `src/main.js`
(buildCrew, seatCrew).
