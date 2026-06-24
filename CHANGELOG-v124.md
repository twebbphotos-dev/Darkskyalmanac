# zion-sky-v124 — Comprehensive audit pass (v122 plus everything v122 missed)

You correctly pointed out v122's audit was incomplete. This release covers the
areas v122 didn't touch and acts on every real finding.

## Audit scope (what v122 didn't check)

PWA manifest validity. Sitemap.xml accuracy. Open Graph + Twitter + canonical
metadata across all 29 pages. CSS class drift across pages. Memory leaks
(setInterval/listeners without cleanup). External links missing rel=noopener.
Semantic HTML landmarks. JavaScript syntax across every script block on every
page. Catalog OBJECTS data integrity (93 deep-sky objects). Stale references
after the v123 engine extraction. Page-weight breakdown for the largest files
(finder.html at 200 KB, forecast.html at 117 KB). format-detection meta. Heading
hierarchy. Apple PWA meta tag coverage.

## Fixed

### 1. `manifest.json` description was stale
The PWA install description still said "Zion, Bryce Canyon, and Cedar Breaks" —
three parks. We now have **fourteen** destinations. Updated to reflect the full
catalog, so people seeing the install prompt get the right pitch.

### 2. `sitemap.xml` was both stale and incomplete
- **Stale:** `/messier` was still listed even though the page was renamed to
  `/catalog` in v113. Search engines pointing crawlers at a 404.
- **Missing:** **9 real pages** weren't in the sitemap: `catalog`, plus eight of
  the fourteen map pages (`map-arches`, `map-canyonlands`, `map-capitol-reef`,
  `map-cedar-city`, `map-kanab`, `map-cannonville`, `map-torrey`, `map-hanksville`).
- **Sloppy:** URLs were relative (`/forecast` instead of
  `https://app.darkskyalmanac.com/forecast`). Sitemaps should use absolute URLs.

The sitemap is now a clean **28 absolute URLs** covering every real page,
organised by section (top-level / catalogues / 14 region maps / solar system).

### 3. Every page was missing `og:url`, `og:site_name`, `twitter:image`, `rel="canonical"`
Without these:
- Shares to Twitter/X showed no image card.
- Search engines didn't have a canonical URL for each page, risking duplicate-
  content treatment for `/forecast` vs `/forecast.html`.
- Open Graph previews didn't show the site name alongside the page title.

Fixed across **all 29 pages** with 116 new meta tags. Canonical URLs derived
from filenames (verified by validator), Open Graph URL matches canonical, Twitter
image reuses each page's existing `og:image`. Skipped any page that already had
the tag — these are additive only.

## Findings I'm raising but not changing without your input

### A. No `<h1>` or semantic landmarks anywhere
Every page uses styled `<div>` for headings and structure. No `<main>`,
`<header>`, `<footer>`, `<section>`, `<article>`, or `<h1>`. Screen readers
have no landmarks to jump between sections, and SEO loses heading hierarchy
signals. Fix would require touching markup + CSS on every page (CSS selectors
that match `body > div` would need rewriting). Medium-effort, low-risk if done
carefully. Mention if you want this in a future pass.

### B. finder.html is 200 KB; forecast.html is 117 KB
Both are 75–80% JavaScript. Looked at refactor options but the content is
genuinely big: finder is the AR sky overlay + planet ephemeris + Quick Align +
device orientation handling. Forecast is rich seasonal Messier-picks tables
(12 months × 8–10 highlighted objects with full descriptions) and lookup
tables. Not bloat — there's nothing obvious to remove without breaking what
the app does.

## Findings that turned out to be false alarms

- "Catalog has 140 RA/Dec range errors" — false. My validator had the schema
  positions wrong (constellation is at index 3, not RA). Catalog is clean:
  93 objects, 31 Nebulae + 32 Galaxies + 13 Globulars + 17 Open Clusters,
  64 Messier + 11 NGC-Caldwell + 10 NGC + 6 IC + 2 IC-Caldwell.
- "69 CSS classes drift across pages" — false. My matcher was over-counting
  rules that legitimately differ across pages (media queries, dark-mode
  variants). The base navigation styling is consistent.
- "jupiter.html has 1 setInterval, 0 clearInterval — memory leak risk" —
  false. The interval is the 60-second refresh for live Jovian moon positions;
  legitimate for the page lifetime.
- "Pages have <20 event listener adds without removes" — irrelevant.
  These are PWA pages with single lifecycle; listener leaks only matter for
  SPAs that navigate in-place.
- "finder.html has 117 KB SF_STARS array" — false. My brace matcher couldn't
  handle strings inside the data; the array is 630 bytes (15 stars). The file's
  weight is genuinely the code, not a hidden data dump.

## Service worker

Bumped `CACHE` `zion-sky-v123` → `zion-sky-v124`.

## Tests

**19/19 checks pass.** Validator verified manifest fields, sitemap completeness
+ correctness + absolute URLs + no stale entries, all 29 pages now have the new
metadata with correct per-page canonical URLs derived from filenames, the v123
engine refactor still renders 5 spot-checked maps correctly with the right pin
counts, every script block across all 29 pages parses.
