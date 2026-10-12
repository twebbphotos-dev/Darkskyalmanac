#!/usr/bin/env bash
# Local server for testing (pages need the .html suffix locally).
cd "$(dirname "$0")/.." && exec python3 -m http.server "${1:-8765}"
