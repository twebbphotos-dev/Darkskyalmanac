# zion-sky-v119 — De-italicized UI + regional overview map

## Removed excessive italics

The app leaned on italic text everywhere — subtitles, descriptions, body copy, notes, captions. Long italic paragraphs are harder to read on a phone, and on the map index in particular every card's description was set in italic. Stripped `font-style:italic` from all 80 places it appeared across 24 pages (the heaviest were forecast 11, jupiter 9, finder 7). Nothing is italic anymore; the descriptive text now reads in the normal upright weight, which is cleaner and easier to scan — especially on the Dark Sky Maps index.

## New: regional overview map

Added a small, themed **map of southern Utah** at the top of the Dark Sky Maps page, above the cards. It's a hand-built SVG in the app's gold-on-velvet style:

- The **Utah state border** drawn accurately — west, south, and east edges solid, the top edge faded (it's a crop; the state continues north), so the recognizable rectangular-with-a-notch shape reads at a glance.
- **All nine destinations pinned** at their true geographic positions: Zion, Bryce Canyon, Cedar Breaks, Capitol Reef, Canyonlands, Arches, plus the St. George, Cedar City, and Kanab gateway regions.
- **Color-coded by tier** with a small legend: gold = Gold-tier International Dark Sky Parks (Zion, Bryce), cream = other Dark Sky Parks, blue = gateway regions.
- A faint starfield behind the outline and the "S. UTAH" watermark tie it into the almanac's look.
- **Every pin is tappable** — tapping a pin jumps straight to that location's detailed map, so the overview doubles as a navigation hub. Labels brighten on hover/tap.

Also corrected the page subtitle, which still said "Six dark sky destinations" — it now reads "Nine dark sky destinations across southern Utah."

## Service worker

Bumped `CACHE` `zion-sky-v118` → `zion-sky-v119`.

## What to test

- Open the Dark Sky Maps page: the southern-Utah overview map appears at the top with all nine pins in their correct geographic spots and a tier legend below it.
- Tap a pin (e.g. Arches in the NE, Zion in the SW) — it should open that location's map.
- Scan the page and the planet/forecast pages: descriptions and subtitles are no longer in italic.

21/21 jsdom checks pass.
