#!/usr/bin/env python3
"""Bump the service-worker cache name (zion-sky-vNNN -> vNNN+1) in sw.js.
Every release needs this, or phones keep serving the old files."""
import re, os
p = os.path.join(os.path.dirname(__file__), '..', 'sw.js')
s = open(p, encoding='utf-8').read()
m = re.search(r"const CACHE = 'zion-sky-v(\d+)';", s)
n = int(m.group(1)) + 1
open(p, 'w', encoding='utf-8').write(s.replace(m.group(0), f"const CACHE = 'zion-sky-v{n}';"))
print(f'cache: zion-sky-v{n - 1} -> zion-sky-v{n}')
