# Pointing Check 1.1

Load a single sub, get back where the camera was aimed. Runs entirely in a
phone browser with no signal and no account.

Built for checking framing at the scope before committing to a sequence:
RA/Dec, altitude and azimuth, field size, which way north is, and the named
stars and objects in frame.

---

## What it does

- **Blind plate solve** from one JPEG. No starting guess needed.
- **Fully offline** after the first load. The app and the star catalog
  (6.3 MB) are cached on the device.
- **Reports the true focal length.** The solve measures it, so a zoom that
  reports "300mm" but is really 287mm shows up immediately.
- **Night-first interface.** True black with amber text, large targets.
  A day mode is there for reviewing indoors.

Measured accuracy on synthetic fields with known pointing: centre within
about 1 arcsecond at 300mm, roll within 0.01°. Solve takes 10–60 ms; star
detection on a 3000 px frame takes about 350 ms.

## Using it

1. Transfer the sub to the phone (Sony Creators' App, AirDrop, cable — any route).
2. Open the app, tap **Load a frame**, pick the JPEG.
3. Read the answer.

Half resolution is plenty. The app downsamples anything over 3000 px anyway.

Set latitude and longitude once under **Camera and location** and they are
remembered; without them everything still works except altitude and azimuth.
If the file carries GPS, it is used automatically.

### What it needs from the frame

| | |
|---|---|
| Focal length | 15–350 mm on full frame. Read from EXIF, or type it in. |
| Stars in frame | About 40 or more. A few seconds at a reasonable ISO is plenty. |
| Sensor width | Defaults to 35.9 mm (a7 III). Change it under Camera and location. |

An EXIF focal length that is wrong by up to 10% is fine — the solve finds the
true value. Wrong *sensor width* is not recoverable, so set that correctly once.

### When it does not solve

The app says which of these it is:

- **No stars in this frame** — what was found looks like noise. Wrong file, or
  far too short an exposure.
- **Only N stars found** — expose longer or raise ISO.
- **No match from N stars** — stars are there but nothing lined up. Almost
  always a wrong focal length or sensor width.

## Deploying

Any static host. For the phone it needs **HTTPS** (or localhost): service
workers and geolocation both require a secure context. No build step.

```
python3 -m http.server 8000      # local check
```

On iOS, add it to the home screen to get the standalone window.
Everything is relative-path, so it works from a subdirectory.

### Cloudflare Workers

`wrangler.jsonc`, `.assetsignore` and `_headers` are included. From this
folder:

```
npx wrangler deploy
```

**`.assetsignore` is the important one.** Workers uploads every file in the
assets directory, including dotfiles. Without it, a deploy from a git checkout
publishes the whole repository at `<site>/.git/` — full history, every file
ever committed. Keep `.git` in that list.

`preview_urls` is set to `false` for the same reason: preview URLs keep every
past version reachable at its own address, so a version deployed by mistake
survives the fix.

`_headers` caches the catalog as immutable and forces revalidation on `sw.js`,
without which a service-worker update never reaches the device.

## How it works

Standard geometric-hash plate solving, in the astrometry.net family.

1. **Detect** stars: local maxima, then background and noise measured in an
   annulus around each one. The annulus matters — a landscape frame has a hard
   edge where the ridge meets the sky, and reading the background off an
   interpolated grid puts it far too low on the sky side, which inflates
   measured flux until noise outranks real stars.
2. **Hash** groups of four stars into a 4-number geometric code that does not
   change with rotation or scale. Each quad is projected into a tangent plane
   centred on itself, so the same code works at 24 mm and at 300 mm.
3. **Match** those codes against a precomputed all-sky index, sorted by the
   first code so each lookup scans under 1% of it.
4. **Confirm** by solving for the attitude from the matched quad, projecting
   the catalog back onto the frame, and counting stars that land where they
   should — against what random alignment would produce, which is checked
   rather than assumed.
5. **Refine** the focal length and attitude over every matched star.

Two design points that took measurement to find, in case they matter later:

- **Quads are kept small** — at most 0.4× the frame's short side. A quad only
  counts if its whole circle lands inside the rectangle, so quads sized near
  the frame dimension almost never fit; at one point the usable count swung
  between 221 and zero depending on where the frame fell.
- **The index is density-capped per sky cell**, not magnitude-limited. A plain
  magnitude cut breaks in the Milky Way, where a dense field holds far more
  mag-9 stars than the solver ever looks at, so the catalog's quads sit below
  the image's brightest-N cut and nothing matches.

## Layout

```
index.html  app.css  app.js  exif.js  worker.js  sw.js
solver/        geom.js  catalog.js  detect.js  solve.js  astro.js
catalog/       stars.bin, quads_A..D.bin, names.json, dso.json, manifest.json
tools/         catalog build + test suites (not needed at runtime)
testframes/    synthetic frames for checking the app
```

`solver/` has no DOM, no fetch and no app state. It runs unchanged in Node and
in a Web Worker, which is what makes it portable — see below.

## Catalog

Built from the [HYG database](https://github.com/astronexus/HYG-Database) v4.1
(Hipparcos / Yale Bright Star / Gliese), 83,479 stars to magnitude 9 with
proper motion carried to 2026, plus 863 deep-sky objects.

Four quad index layers cover the focal range:

| Layer | Quad size | Suits | Quads |
|---|---|---|---|
| A | 0.3–1.6° | 150–350 mm | 142,468 |
| B | 0.7–3.8° | 65–150 mm | 46,969 |
| C | 1.8–9.0° | 28–65 mm | 18,114 |
| D | 4.0–20° | 15–28 mm | 4,085 |

Rebuild with `python3 tools/build_catalog.py` (needs numpy, scipy, and the HYG
CSV; the source path is at the top of the file).

## Tests

```
node tools/test_solve.mjs 30      # solver against synthetic star lists
node tools/test_pipeline.mjs 6    # full pipeline on rendered pixels
node tools/sweep.mjs 25           # sensitivity to noise, dropout, focal error
python3 tools/make_test_frame.py --focal 300 --ra 5.5881 --dec -5.391
```

`test_solve` checks the matching logic against a perfect star list.
`test_pipeline` renders actual pixels — Moffat star profiles, read noise, sky
gradient, hot pixels, a ridge line across the bottom — and runs the real
detector over them. The second one is the one that catches detector bugs.

`sweep` is worth rerunning after any change to the solver. It varies one
degradation at a time and shows where the cliff is; that is how the
focal-length sensitivity was found.

## Folding into another project

The merge path is `solver/`. It takes a star list and catalog buffers, returns
a solution, and touches nothing else:

```js
import { solve } from './solver/solve.js';

const sol = solve({
  detected,                     // [{x, y, flux}], brightest first
  width, height,                // image pixels
  focalMm, sensorWidthMm,
  stars, layers,                // from parseStars / parseQuads
});
// -> { ok, ra, dec, fov, roll, focalMm, scaleArcsecPx, nMatch, rmsArcsec, R }
```

Only `app.js`, `index.html`, `app.css` and `sw.js` are specific to this app.
Dropping the solver into an existing PWA means adding `solver/` and `catalog/`
and writing a new wrapper around that one call.

## Licence and credit

Star data from the HYG Database (astronexus), CC BY-SA 4.0 — keep the
attribution if you redistribute the catalog files.

The plate-solving approach follows Lang, Hogg, Mierle, Blanton & Roweis,
*Astrometry.net: Blind astrometric calibration of arbitrary astronomical
images* (2010).
