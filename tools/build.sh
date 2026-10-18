#!/usr/bin/env bash
# Build the deploy tree and release zip.
#   tools/build.sh 3.53        -> dist/ and out/dark-sky-almanac-v3.53.zip
#   tools/build.sh ci          -> dist/ only (Cloudflare Git builds); gate still runs
# Bump the cache first (tools/bump-cache.py) - every release, no exceptions.
set -euo pipefail
cd "$(dirname "$0")/.."
V="${1:?usage: tools/build.sh <version, e.g. 3.53>}"
rm -rf dist && mkdir -p dist out
# Root files. Images must be listed explicitly: *.html *.js alone silently drops them.
cp *.html *.js *.json *.txt *.xml *.png *.jpg *.svg dist/ 2>/dev/null || true
cp -r img models solver rover lrv dist/
cp _headers .assetsignore dist/
if [ "$V" = ci ]; then python3 verify-assets.py; exit 0; fi
rm -f "out/dark-sky-almanac-v$V.zip"
(cd dist && zip -qr "../out/dark-sky-almanac-v$V.zip" .)
python3 verify-assets.py "out/dark-sky-almanac-v$V.zip"
echo "built out/dark-sky-almanac-v$V.zip  ($(grep -o "zion-sky-v[0-9]*" sw.js | head -1))"
