// Star ID regression: runs the real detector and solver over every frame in
// tests/solver/.cache/ exactly as worker.js does with "Lens unknown"
// (two detection passes x the 12-1000 mm ladder, portrait-corrected sensor
// width, same accuracy gate). Prints one line per frame and a summary.
//
//   python3 tests/solver/make_variants.py      # once, builds .cache/
//   node tests/solver/regress.mjs              # all frames
//   node tests/solver/regress.mjs heart        # frames whose name contains "heart"
//   DETECT=/path/to/other-detect.js node tests/solver/regress.mjs   # A/B a detector
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const S = path.join(ROOT, 'solver');
const { parseStars, parseQuads } = await import(path.join(S, 'solver/catalog.js'));
const det = await import(process.env.DETECT || path.join(S, 'solver/detect.js'));
const { solve } = await import(path.join(S, 'solver/solve.js'));

const C = path.join(S, 'catalog');
const manifest = JSON.parse(fs.readFileSync(path.join(C, 'manifest.json')));
const ab = (f) => { const b = fs.readFileSync(path.join(C, f)); return b.buffer.slice(b.byteOffset, b.byteOffset + b.length); };
const stars = parseStars(ab('stars.bin'));
const layers = manifest.layers.map((L) => ({ name: L.name, dmin: L.dmin, dmax: L.dmax, density: L.density, quads: parseQuads(ab(L.file)) }));

const LADDER = Array.from({ length: 25 }, (_, i) => Math.round(12 * 1.2 ** i * 10) / 10);   // app.js
const PASSES = [{}, { shape: true, rank: 'snr', spread: 4 }];                               // worker.js
const SENSOR = 35.9;
const only = process.argv[2];
const CACHE = path.join(HERE, '.cache');
let ok = 0, n = 0;
for (const [name, W, H] of JSON.parse(fs.readFileSync(path.join(CACHE, 'manifest.json')))) {
  if (only && !name.includes(only)) continue;
  n++;
  const gray = det.toGray(new Uint8ClampedArray(fs.readFileSync(path.join(CACHE, name + '.rgba'))), W, H);
  const sensorWidthMm = SENSOR * W / Math.max(W, H);          // worker.js portrait fix
  let res = 'FAIL', t0 = Date.now();
  try {
    outer: for (const [pi, p] of PASSES.entries()) {
      const d = det.detectStars(gray, W, H, p);
      if (d.length < 8) continue;
      for (const f of LADDER) {
        const sol = solve({ detected: d, width: W, height: H, focalMm: f, sensorWidthMm, stars, layers, options: { scaleTol: 0.12 } });
        if (sol.ok) {
          res = `pass${pi + 1}  RA ${(sol.ra * 12 / Math.PI).toFixed(2)}h  Dec ${(sol.dec * 180 / Math.PI).toFixed(1)}  ${sol.focalMm.toFixed(0)} mm  n ${sol.nMatch}  rms ${sol.rmsPx.toFixed(2)} px`;
          ok++; break outer;
        }
      }
    }
  } catch (e) { res = 'CRASH ' + e.message; }
  console.log(name.padEnd(30), res, ((Date.now() - t0) / 1000).toFixed(1) + 's');
}
console.log(`\n${ok} of ${n} solved`);
