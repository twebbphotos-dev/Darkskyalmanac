# Handoff: moving Dark Sky Almanac to Claude Code (cloud)

Written at v3.52 (cache `zion-sky-v318`), 2026-10-11. Until now the app was developed in claude.ai chats. Each change shipped as one complete zip that Tyler uploaded to Cloudflare by hand. This repo is now the source of truth.

## 1. Migration steps

1. **Create a private GitHub repo** (e.g. `dark-sky-almanac`) and push this folder as the first commit.
   ```bash
   git init && git add . && git commit -m "Dark Sky Almanac v3.52 (zion-sky-v318)"
   git branch -M main && git remote add origin git@github.com:<you>/dark-sky-almanac.git && git push -u origin main
   ```
   - The repo is about 40 MB. The largest pieces are `models/` (18 MB, 3D spacecraft) and `solver/catalog/` (6 MB).
   - That's fine for Git, and no single file is near GitHub's 100 MB limit.
2. **Open the repo in Claude Code** (on the web or the desktop app) and start every session from it. `CLAUDE.md` loads automatically, so there's no need to re-explain the project.
3. **Install the test tools** in the cloud environment: `pip install playwright numpy pillow && python3 -m playwright install chromium`. Node 18+ is needed for the solver harness.
4. **Pick a deploy route.**
   - **Keep the zip.** Run `tools/build.sh 3.53`, download `out/dark-sky-almanac-v3.53.zip`, and upload it in Cloudflare as before. Nothing else changes.
   - **Or deploy from GitHub (recommended).** In the Cloudflare dashboard, connect the repo to the darkskyalmanac project (Workers & Pages → project → Settings → Build / Git integration).
     - Build command: `bash tools/build.sh ci`. The ship gate runs as part of the build.
     - Output / assets directory: `dist`.
     - Every push to `main` then deploys, and other branches can get preview URLs.
     - Check the exact screen names in the dashboard: they differ between a Pages project and a Worker with static assets. `.assetsignore` already keeps `src/ tools/ tests/ docs/` private, even if the root were ever served.
5. **Keep the claude.ai Project for reference only.** Its file mirror (the HTML pages listed there) is stale. Its `claude/CHANGELOG-v239…v318.md` docs are the full release history, if you ever need detail older than `docs/CHANGELOG.md`.
6. **Don't use old harness paths.** Earlier chats used scratch paths that no longer exist: `/home/claude/work/v2`, `/mnt/user-data/outputs`, `/tmp/claude-0/...`. Everything those tools did is now in `tools/` and `tests/`.

### What changes in practice

| Before (chat) | Now (Claude Code + GitHub) |
|---|---|
| Unzip the latest zip to get the current state | `git pull`. The repo is the state |
| One zip per change, sent to chat | A commit (or PR) per change. A zip only if deploying by hand |
| `claude/CHANGELOG-vNNN.md` in the Project | `docs/CHANGELOG.md` in the repo, newest first, plus commit messages |
| Version label and cache bumped by hand | `tools/bump-cache.py`, then `tools/build.sh <version>` |
| Rollback = re-upload an older zip | `git revert`, or redeploy an earlier commit in Cloudflare |

Suggested branch habit: small changes go straight to `main`. Bigger work (solver changes, new pages) goes on a branch and gets checked on a preview URL on the iPhone before merging.

## 2. Release checklist

1. Make the change. Keep it surgical.
2. Run `python3 tools/bump-cache.py`.
3. With `tools/serve.sh &` running:
   - `python3 tools/sweep.py` should report 0 errors.
   - If Star ID was touched, run `python3 tests/solver/e2e.py`.
4. If the solver changed, run `node tests/solver/regress.mjs` and compare against `tests/solver/baseline.txt`.
5. Run `tools/build.sh 3.NN`. The ship gate must pass.
6. Add an entry to `docs/CHANGELOG.md`, commit, and push (or upload the zip).
7. Tell Tyler what changed and why, in a few short lines.

## 3. Recent history (newest first)

- **v3.52 / v318:** fixed Star ID "Maximum call stack size exceeded" on wide-field (16 mm) frames. A `push(...sorted)` with about 240k candidates was the cause.
- **v3.51 / v317:** Star ID now solves stretched and edited images.
  - Detection ranks by box light, measures star size from mid-ranked stars, sets saturation relative to where bright stars top out, grows windows up to 8×, and adds the border-bounded test.
  - Portrait sensor-width fix: portrait focal lengths had been reported about 1.4× too long.
  - The Unknown ladder runs to about 1000 mm.
  - Constellations come from IAU boundaries.
  - Common names added for Heart, Soul, Owl, Whale, Hamburger, Iris, Monkey Head, Skull, Bow-Tie and others.
- **v3.50 / v316:** Plate Solver Values card with a Copy button, built for Siril/ASTAP. The camera list was simplified to general sensor sizes.
- **v3.49 / v315:**
  - Bright saturated stars are kept.
  - Narrow fields fall back to a smaller index layer.
  - Nearby focal lengths are retried when the entered one fails.
- **v3.48 / v314:**
  - Accuracy gate on rms and match count, which stopped false solves.
  - Second detection pass (shape/snr/spread).
  - Advice for screenshots.
- **v3.47 / v313:** all map pins re-placed on the basemap symbols (Zion untouched).
- **v3.46 / v312:** St. George map removed (low-resolution source). It's parked in `src/st-george-map/`.
- **v3.45 / v311:** maps simplified to 5–6 sites each. Cedar Breaks North View pin fixed.
- **v3.37–v3.44:** Pointing Check folded into the app as **Star ID**.
  - Constellation overlay with Rey figures and a simplified Lyra.
  - Magnitude and object sliders, with M8/M20/M16 ranked over NGC numbers.
  - Always-on watermark. Plain download on desktop.
  - Lens chips with a 16 mm default, and "Lens unknown".
  - Strict `sameFile` and `refreshSolverCode` fix for stale solver code on phones.
  - The Constellations page now uses the same figures, with mythology and seasonal intros, including the circumpolar "undying" stars and Orion and Scorpius chasing each other.
  - Location-specific text was removed outside the Maps pages.

## 4. Open items and ideas

- **Star ID: deeper catalog for narrow fields.** Tycho-2 to mag 10–11 as an optional download. See `docs/STAR-ID.md` → Known limits.
- **Star ID: re-stretched edited images** (`heart-soul-edited_str`) still fail.
- **St. George map:** return it with a higher-resolution basemap.
- **Escalante map:** a stub idea featuring Hole-in-the-Rock Road and Boulder.
- **Daylight Planner:** move it from prototype to a full feature.
- **Before outside review** (science teachers, journalists): run an accuracy audit pass over every page's facts, numbers and mythology against primary sources.

## 5. Tyler's setup (context for advice)

- **Cameras and scopes:** Sony a7 III (35.9 mm sensor), Seestar S30 Pro, Celestron 8" Dobsonian.
- **Processing:** Siril.
- **Testing:** a physical iPhone in Safari. Desktop checks happen on Windows.
