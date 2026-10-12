#!/bin/sh
cd /tmp/claude-0/astro
{ printf '/* Astronomy Engine 2.1.19 (MIT, Don Cross, github.com/cosinekitty/astronomy) followed by a SunCalc-compatible interface. */\n'; cat node_modules/astronomy-engine/astronomy.browser.min.js; printf '\n'; cat shim.js; } > /home/claude/work/v2/suncalc.min.js
ls -la /home/claude/work/v2/suncalc.min.js
