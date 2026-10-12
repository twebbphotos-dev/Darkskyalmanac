#!/usr/bin/env python3
"""Ship gate: every entry in sw.js CRITICAL must exist in dist/ and in the zip.
A single 404 in CRITICAL rejects the whole cache.addAll and kills offline mode,
so this runs before every ship."""
import re, os, sys, zipfile

src = open('sw.js', encoding='utf-8').read()
m = re.search(r'const CRITICAL = \[(.*?)\];', src, re.S)
if not m: sys.exit('CRITICAL block not found in sw.js')

body = re.sub(r'//[^\n]*', '', m.group(1))          # strip comments (apostrophes in them broke this once)
entries = [e for e in re.findall(r"'([^']+)'", body) if e != './']

missing = [e for e in entries if not os.path.exists(os.path.join('dist', e))]
print(f'CRITICAL entries: {len(entries)}')
if missing:
    print(f'MISSING FROM dist/ ({len(missing)}):')
    for e in missing: print('   ', e)
    sys.exit(1)
print('all present in dist/')

# Optional 3D download list (OFFLINE3D): every entry must exist, and every 3D
# asset on disk must be listed, or "Download everything" would silently skip it.
m3 = re.search(r'const OFFLINE3D = \[(.*?)\];', src, re.S)
if not m3: sys.exit('OFFLINE3D block not found in sw.js')
extra = re.findall(r"'([^']+)'", re.sub(r'//[^\n]*', '', m3.group(1)))
gone3 = [e for e in extra if not os.path.exists(os.path.join('dist', e))]
want = [f for f in os.listdir('dist') if f.endswith('.bundle.js')] + ['models/' + f for f in os.listdir('dist/models')] + ['img/cmp/' + f for f in os.listdir('dist/img/cmp')]
unlisted = [f for f in want if f not in extra]
print(f'OFFLINE3D entries: {len(extra)}')
if gone3 or unlisted:
    for e in gone3: print('   MISSING FROM dist/:', e)
    for e in unlisted: print('   NOT IN OFFLINE3D:', e)
    sys.exit(1)
print('3D list complete')

zp = sys.argv[1] if len(sys.argv) > 1 else None
if zp:
    names = set(zipfile.ZipFile(zp).namelist())
    root = os.path.commonprefix([n for n in names if n.endswith('index.html')]) or ''
    root = root[:root.rfind('/')+1] if '/' in root else ''
    gone = [e for e in entries if (root + e) not in names and e not in names]
    if gone:
        print(f'MISSING FROM ZIP ({len(gone)}):')
        for e in gone: print('   ', e)
        sys.exit(1)
    print(f'all present in {os.path.basename(zp)}')
print('SHIP GATE PASSED')
