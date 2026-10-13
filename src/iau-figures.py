#!/usr/bin/env python3
"""Rebuild constellation figures on the IAU / Sky & Telescope lines (one-off, kept for provenance).

Sources (download first, pass the paths):
  index.json   Stellarium skycultures/modern_iau/index.json  (IAU chart lines as HIP polylines; IAU star names)
  stars.8.json d3-celestial data/stars.8.json                (Hipparcos positions, mag, B-V)
  starnames.json d3-celestial data/starnames.json            (traditional names, used only when they agree with the IAU list)

Writes:
  tools/data/iau-figures.json   all 88 figures as [RA deg, Dec deg] vertices + index lines (read by tools/build-figures.py)
  constellations.html           page DATA: lines replaced by the IAU set. Page stars are reused by position
                                so their names, magnitudes and colors survive; missing line stars are added;
                                named stars that fall off the figure stay as labeled points.

usage: src/iau-figures.py index.json stars.8.json starnames.json
"""
import json, math, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
iau_p, stars_p, names_p = sys.argv[1:4]
I = json.load(open(iau_p))
IAU = {c['id'].split()[-1]: c['lines'] for c in I['constellations']}
CN = I['common_names']
ST = {int(f['id']): f for f in json.load(open(stars_p))['features']}
NAMES = json.load(open(names_p))

def radec(h):
    ra, dec = ST[h]['geometry']['coordinates']
    return (ra % 360, dec)
def vec(ra, dec):
    a, d = math.radians(ra), math.radians(dec)
    return (math.cos(d)*math.cos(a), math.cos(d)*math.sin(a), math.sin(d))
def sep(p, q):
    u, v = vec(*p), vec(*q)
    return math.degrees(math.acos(max(-1, min(1, sum(x*y for x, y in zip(u, v))))))
def iau_name(h):
    trad = (NAMES.get(str(h)) or {}).get('name') or ''
    ok = {e['english'] for e in CN.get('HIP %d' % h, [])}
    return trad if trad in ok else ''
def edges(abbr):
    E = []
    for ls in IAU[abbr]:
        for a, b in zip(ls, ls[1:]):
            if a != b and {a, b} not in [set(e) for e in E]: E.append((a, b))
    return E

# 1) all 88 figures for Star ID
figs = {}
for abbr in IAU:
    E = edges(abbr); used = []
    for e in E:
        for h in e:
            if h not in used: used.append(h)
    figs[abbr] = {'v': [[round(radec(h)[0], 3), round(radec(h)[1], 3)] for h in used],
                  'l': [[used.index(a), used.index(b)] for a, b in E]}
(ROOT / 'tools/data/iau-figures.json').write_text(json.dumps(figs, separators=(',', ':')) + '\n')

# 2) page DATA
KEY = {'orion':'Ori','ursamajor':'UMa','cassiopeia':'Cas','leo':'Leo','virgo':'Vir','bootes':'Boo','cygnus':'Cyg','lyra':'Lyr','aquila':'Aql','scorpius':'Sco','sagittarius':'Sgr','taurus':'Tau','gemini':'Gem','canismajor':'CMa','canisminor':'CMi','auriga':'Aur','perseus':'Per','andromeda':'And','pegasus':'Peg','cepheus':'Cep','draco':'Dra','corvus':'Crv','ophiuchus':'Oph','serpens':'Ser','hercules':'Her','cancer':'Cnc','aquarius':'Aqr','capricornus':'Cap','cetus':'Cet','triangulum':'Tri','ursaminor':'UMi','camelopardalis':'Cam','delphinus':'Del','aries':'Ari','scutum':'Sct','leoMinor':'LMi','coronaborealis':'CrB','libra':'Lib','pisces':'Psc','hydra':'Hya','lepus':'Lep','canesvenatici':'CVn','comaberenices':'Com','lacerta':'Lac','lynx':'Lyn','monoceros':'Mon','eridanus':'Eri','piscisaustrinus':'PsA','sagitta':'Sge','vulpecula':'Vul','equuleus':'Equ','crater':'Crt','sextans':'Sex','coronaaustralis':'CrA','lupus':'Lup','puppis':'Pup','columba':'Col'}
page = (ROOT / 'constellations.html').read_text().split('\n')
li = next(k for k, l in enumerate(page) if l.startswith('const DATA = '))
D = json.loads(page[li][len('const DATA = '):].rstrip(';'))
for d in D:
    abbr = KEY.get(d['key'])
    if not abbr: continue
    old = d['stars']; E = edges(abbr)
    oldlines = {frozenset((tuple(old[a][1:3]), tuple(old[b][1:3]))) for a, b in d['lines']}
    hips = []
    for e in E:
        for h in e:
            if h not in hips: hips.append(h)
    claim, new = {}, []
    for h in hips:
        p = radec(h); best = None
        for k, s in enumerate(old):
            if k in claim.values(): continue
            dd = sep(p, (s[1]*15, s[2]))
            if dd < 0.1 and (best is None or dd < best[0]): best = (dd, k)
        if best: claim[h] = best[1]
    stars, at = [], {}
    for k, s in enumerate(old):                       # reused stars keep their page order
        if k in claim.values():
            h = next(h for h, kk in claim.items() if kk == k); at[h] = len(stars); stars.append(s)
    added = []
    for h in hips:
        if h in at: continue
        ra, dec = radec(h); pr = ST[h]['properties']
        at[h] = len(stars); stars.append([iau_name(h), round(ra/15, 4), round(dec, 4), pr['mag'], round(float(pr['bv'] or 0), 2)])
        added.append(stars[-1][0] or 'HIP %d' % h)
    kept = []
    for k, s in enumerate(old):                       # named stars off the figure stay as labels
        if k in claim.values() or not s[0]: continue
        if any(sep((s[1]*15, s[2]), (t[1]*15, t[2])) < 0.1 for t in stars): continue
        stars.append(s); kept.append(s[0])
    lines = [[at[a], at[b]] for a, b in E]
    newlines = {frozenset((tuple(stars[a][1:3]), tuple(stars[b][1:3]))) for a, b in lines}
    if newlines != oldlines or added or len(stars) != len(old):
        print(f"{d['key']:15} {len(d['lines']):2} -> {len(lines):2} lines; added {added}; off-figure labels {kept}")
    d['stars'], d['lines'] = stars, lines
page[li] = 'const DATA = ' + json.dumps(D, ensure_ascii=False) + ';'
(ROOT / 'constellations.html').write_text('\n'.join(page))
