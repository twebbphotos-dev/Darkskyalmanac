# darkskyalmanac.com: root-domain site

| Hostname | What | Deployed by |
| --- | --- | --- |
| `app.darkskyalmanac.com` | The PWA | Your existing worker, **unchanged** |
| `darkskyalmanac.com`, `www.darkskyalmanac.com` | Landing page + future projects | Worker `darkskyalmanac-www`, from `www/` |

## Layout

```
www/
  wrangler.jsonc     worker name + custom domains
  public/            everything here is served as-is
    index.html       landing page
    404.html         not-found page
    _redirects       short links (/app, /forecast, ...) into the app
    _headers         response headers
```

Add future pages as `www/public/<name>.html` (served at `/<name>`) or
`www/public/<name>/index.html` (served at `/<name>/`). Add each one to `sitemap.xml`.

## One-time Cloudflare setup

1. Make sure there are **no existing DNS records** for `darkskyalmanac.com` (`@`)
   or `www` in the Cloudflare DNS tab. Delete any leftover parking, Squarespace
   or Netlify records. The deploy creates its own records and fails if
   these exist. Leave the `app` record alone.
2. Choose how to deploy:

**From your computer**
```sh
cd www
npm install
npx wrangler login     # authorise your Cloudflare account in the browser
npx wrangler dev       # optional preview at http://localhost:8787
npx wrangler deploy
```

**Automatically from GitHub**: `.github/workflows/deploy.yml` deploys
whenever `www/` changes on `main`. Add these repo secrets
(GitHub → Settings → Secrets and variables → Actions):

| Secret | Where to get it |
| --- | --- |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare → Workers & Pages, "Account ID" in the sidebar |
| `CLOUDFLARE_API_TOKEN` | My Profile → API Tokens → Create Token → **"Edit Cloudflare Workers"** template, limited to your account and the `darkskyalmanac.com` zone |

Either way, check https://darkskyalmanac.com and https://www.darkskyalmanac.com
within a minute or two of the first deploy. TLS certificates are issued automatically.
