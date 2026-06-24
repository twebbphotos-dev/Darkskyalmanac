═══════════════════════════════════════════════════════════════
  ZION DARK SKY ALMANAC — PWA DEPLOYMENT GUIDE
═══════════════════════════════════════════════════════════════

WHAT THIS IS
A Progressive Web App (PWA): a website that installs to a phone's
home screen and works fully OFFLINE — essential for use in Zion's
dead zones. It also makes the Sky Finder's camera + compass work,
which a Squarespace embed cannot do.

Five tools plus a home page:
  • index.html          — home / launcher
  • forecast.html       — Dark Sky Nightly Forecast
  • moon.html           — Lunar Atlas
  • constellations.html — Constellation Guide
  • messier.html        — Messier Objects
  • finder.html         — Sky Finder (live camera + compass)

───────────────────────────────────────────────────────────────
DEPLOY TO NETLIFY (free, ~5 minutes, no command line)
───────────────────────────────────────────────────────────────

1. Go to  https://app.netlify.com/drop
2. Drag this ENTIRE folder onto the page.
   (Drag the folder itself, so all files upload together.)
3. Netlify gives you a URL like  random-name-123.netlify.app
4. Open that URL on your phone — the app works immediately.
   Tap Share → "Add to Home Screen" to install it.

That's it. The app is live and installable.

───────────────────────────────────────────────────────────────
USE YOUR OWN DOMAIN (recommended)
───────────────────────────────────────────────────────────────

To serve it from app.zioncanyonlight.com instead of a netlify.app URL:

1. In Netlify: Site settings → Domain management → Add a domain →
   enter  app.zioncanyonlight.com
2. Netlify shows you a DNS record to add (a CNAME pointing to your
   Netlify site).
3. In your domain registrar / Squarespace DNS settings, add that
   CNAME record:
       Type:  CNAME
       Host:  app
       Value: <the value Netlify gives you, e.g. yoursite.netlify.app>
4. Wait a few minutes for DNS to propagate. Netlify auto-issues a
   free HTTPS certificate.

Now the app lives at  https://app.zioncanyonlight.com  — fully your
brand, while zioncanyonlight.com stays on Squarespace for your
photography and booking site. Link to the app from Squarespace with
a button: "Open the Zion Sky App →".

───────────────────────────────────────────────────────────────
IMPORTANT NOTES
───────────────────────────────────────────────────────────────

• SKY FINDER CAMERA: On first use, iPhone will prompt for camera
  AND motion-sensor access. Both must be allowed. Because this is
  now a top-level page (not a Squarespace iframe), the motion
  prompt WILL appear — that was the whole reason for the PWA.

• OFFLINE: The first time someone opens the app online, the service
  worker caches everything. After that it works with no signal.
  The weather forecast is the only piece needing internet; it shows
  the last-fetched data when offline.

• UPDATING A WIDGET: Just re-drag the updated folder to Netlify
  (or use the same Netlify site's "Deploys" tab). To force phones
  to pick up changes, bump the CACHE version in sw.js
  (change 'zion-sky-v1' to 'zion-sky-v2', etc.).

• MAGNETIC DECLINATION: The Sky Finder is tuned to Zion (+10.5°).
  If you license this to a property elsewhere, that value (in
  finder.html) should be updated for their location.

═══════════════════════════════════════════════════════════════


--- v118 ---
Offline is now bulletproof: every page, map, image, and font is precached.
Users can install via Settings > Install & Offline (one-tap on Android, guided
Share-sheet steps on iOS) and tap 'Download everything for offline' to force a
full cache. Make sure your host serves either /page or /page.html — the SW
handles both forms, but at least one must resolve.
