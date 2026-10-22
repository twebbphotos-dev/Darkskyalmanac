# models/astronaut-a7l.glb

"Space suit" by IgorSholopov, https://sketchfab.com/3d-models/space-suit-bdc42075279746dab4c8b54784276a20,
CC BY 4.0 (credited on the Sources page). An Apollo A7L, standing in an A-pose, about 61,000 triangles, nine parts
(cloth, connectors, straps, helmet, gold visor and its rim, wrist rings, boots, gloves), each with color, normal and
occlusion-roughness-metal maps (1024 px). It has no backpack.

1. `tools/suit-retex.py IN OUT`: every texture re-encoded as JPEG: color and normal maps 1024 px (the cloth's at its
   own 1024, nothing upscaled), occlusion-roughness-metal 512 px. 16.9 MB of textures to about 2.4 MB.
2. `tools/suit-pack.mjs IN OUT` (glTF-Transform 4.1, meshoptimizer): welded, deduplicated, pruned, written with
   EXT_meshopt_compression (quantized). 4.2 MB.

At load, `prepSuit` in `src/main.js`: the arms raised from the A-pose to level about the top of the shoulder (so the
shoulder pad rises with them), the shoulders and chest broadened by 1 cm a side and 3 % deeper (v5.02; 4 cm and 10 % read as too big), the cloth puffed out
1.4 to 2.6 cm (connectors and straps moved out with it), and built on: the portable life support system (47 × 64 ×
25 cm), the oxygen purge system on top, and the remote control unit on the chest. `buildCrew` bends it into the seat,
skins it to ten bones and grinds gray dust into the boots and lower legs; `cmdrMaterial` gives Gene Cernan the
commander's red bands on arms and legs and a stripe across the helmet; the visor is gold over a mirror.

The previous figure (NASA 3D Resources' astronaut, 282 KB) was retired in v5.00: its 1024 px picture for the whole
body and low-poly shape could not hold up close.
