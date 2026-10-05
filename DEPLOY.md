# Deploying Dark Sky Almanac to Cloudflare Workers

The app is a static PWA served by a **static-assets Worker** (no server code).
Everything in `public/` is uploaded and served at **https://app.darkskyalmanac.com**.

## 1. Put the site in `public/` (one time)

The latest release lives in `dark-sky-almanac-v3.15.zip`. Unpack it into `public/`:

```sh
mkdir -p public
unzip dark-sky-almanac-v3.15.zip -d public
git add public && git commit -m "Unpack v3.15 into public/"
```

From then on, edit files in `public/` directly instead of uploading zips.
Bump `CACHE` in `public/sw.js` with each release so installed phones update.

## 2. Cloudflare prerequisites

1. `darkskyalmanac.com` must be added to your Cloudflare account as an
   **active zone** (nameservers pointed at Cloudflare).
2. Delete any existing DNS record for `app` (e.g. an old Netlify CNAME).
   Wrangler creates the record and TLS cert itself on first deploy, and it fails
   if a conflicting record exists.

## 3a. Deploy from your computer

```sh
npm install
npx wrangler login      # opens browser, authorise your Cloudflare account
npx wrangler dev        # optional: preview at http://localhost:8787
npx wrangler deploy     # publishes + attaches app.darkskyalmanac.com
```

## 3b. Deploy automatically from GitHub (recommended)

`.github/workflows/deploy.yml` deploys on every push to `main`. Add two repo
secrets (GitHub → Settings → Secrets and variables → Actions):

| Secret | Where to get it |
| --- | --- |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard → Workers & Pages → right sidebar "Account ID" |
| `CLOUDFLARE_API_TOKEN` | My Profile → API Tokens → Create Token → template **"Edit Cloudflare Workers"**. Scope it to your account and the `darkskyalmanac.com` zone. |

Then merge to `main` (or run the workflow manually from the Actions tab).

## Notes

- `html_handling: auto-trailing-slash` serves `/forecast.html` at `/forecast`,
  matching the canonical URLs and the service worker's alias handling.
- The zips, changelogs and old root-level files are **not** deployed; only `public/` is.
