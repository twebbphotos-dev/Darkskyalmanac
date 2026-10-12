# Dropping this into your Cloudflare repo

There is no file browser on Cloudflare. Workers static assets are immutable
per deployment — you change files in the git repo and Cloudflare rebuilds.
Whatever is in the repo at build time is exactly what gets served.

## What to copy where

Copy these into the **root of the repo** that `darksky-solver` builds from
(the one with `index.html`, `forecast.html`, `map-zion.jpg` in it):

```
<repo root>/
  solver/           <- the whole folder from this zip
  .assetsignore     <- repo root, not inside solver/
  _headers          <- repo root, not inside solver/
```

`.assetsignore` and `_headers` only work at the assets root. Cloudflare does
not read them from a subfolder.

Then:

```
git add solver .assetsignore _headers
git commit -m "Add Pointing Check plate solver at /solver/"
git push
```

Cloudflare Builds picks up the push and redeploys. The app lands at
`<your-site>/solver/`.

Verified served from a subfolder: the solve works, the service worker scopes
itself to `/solver/` so it cannot touch the rest of the site, and the app
still runs with the network off.

## Check two things after the first deploy

```
curl -I <your-site>/.git/HEAD      # want 404
curl -I <your-site>/solver/        # want 200
```

The first one is the point of `.assetsignore`. Before adding it, your deploy
was publishing the whole repository — full git history, every file ever
committed — at `<your-site>/.git/`.

## Two things I did not decide for you

**`preview_urls`.** They are on by default and keep every past version
reachable at its own address, so a version deployed by mistake stays live
after you fix it. Set `"preview_urls": false` in `wrangler.jsonc` to turn
them off. I left your existing config alone rather than overwrite it.

**The `.zip` files in your repo root.** `dark-sky-almanac-v3.15.zip` and
`zion-sky-v124.zip` are currently being served publicly. That may be
deliberate — if you link them for download, leave them. If not, add `*.zip`
to `.assetsignore`. I did not add it, in case a download link depends on them.

## If you would rather keep it separate

The standalone layout is in `pointing-check-1.1.zip`: same app with the files
at the root instead, deployed with `npx wrangler deploy` as its own Worker.

## A note on the nesting

Inside the app, `solver/solver/` is the portable solve module — no DOM, no
fetch, no app state. It reads oddly nested at `/solver/solver/`, but it is
harmless, and that is the folder that moves across when you fold this into
Dark Sky Almanac. See `solver/README.md`.
