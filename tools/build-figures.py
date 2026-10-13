#!/usr/bin/env python3
"""Regenerate solver/solver/figures.js (Star ID's constellation line overlay).

The Constellations page is the source of truth: every constellation it carries is
written out from its DATA (stars in RA/Dec, lines by index), so the two can never
drift apart. Constellations the page doesn't have come from tools/data/iau-figures.json.
Run after changing any figure in constellations.html.
"""
import json, re, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
page = (ROOT / 'constellations.html').read_text()
i = page.index('const DATA =') + len('const DATA =')
data, _ = json.JSONDecoder().raw_decode(page[i:].lstrip())
astro = (ROOT / 'solver/solver/astro.js').read_text()
k = astro.index('CONSTELLATIONS = {'); names = dict(re.findall(r"(\w{3}):\s*'([^']+)'", astro[k:astro.index('};', k)]))
# page key -> IAU abbreviation
KEY = {'orion':'Ori','ursamajor':'UMa','cassiopeia':'Cas','leo':'Leo','virgo':'Vir','bootes':'Boo','cygnus':'Cyg','lyra':'Lyr','aquila':'Aql','scorpius':'Sco','sagittarius':'Sgr','taurus':'Tau','gemini':'Gem','canismajor':'CMa','canisminor':'CMi','auriga':'Aur','perseus':'Per','andromeda':'And','pegasus':'Peg','cepheus':'Cep','draco':'Dra','corvus':'Crv','ophiuchus':'Oph','serpens':'Ser','hercules':'Her','cancer':'Cnc','aquarius':'Aqr','capricornus':'Cap','cetus':'Cet','triangulum':'Tri','ursaminor':'UMi','camelopardalis':'Cam','delphinus':'Del','aries':'Ari','scutum':'Sct','leoMinor':'LMi','coronaborealis':'CrB','libra':'Lib','pisces':'Psc','hydra':'Hya','lepus':'Lep','canesvenatici':'CVn','comaberenices':'Com','lacerta':'Lac','lynx':'Lyn','monoceros':'Mon','eridanus':'Eri','piscisaustrinus':'PsA','sagitta':'Sge','vulpecula':'Vul','equuleus':'Equ','crater':'Crt','sextans':'Sex','coronaaustralis':'CrA','lupus':'Lup','puppis':'Pup','columba':'Col'}
fig_path = ROOT / 'solver/solver/figures.js'
old = fig_path.read_text(); j = old.index('export const FIGURES = ')
order = [f['n'] for f in json.loads(old[j + len('export const FIGURES = '):].rstrip().rstrip(';'))]
# constellations the page doesn't carry come straight from the IAU / S&T set (src/iau-figures.py)
iau = json.loads((ROOT / 'tools/data/iau-figures.json').read_text())
existing = {names[a]: {'n': names[a], **f} for a, f in iau.items()}
order += [n for n in existing if n not in order]
for d in data:
    if d['type'] != 'Constellation': continue
    name = names[KEY[d['key']]]
    used = sorted({v for l in d['lines'] for v in l})          # labeled-only stars (no lines) stay off the overlay
    idx = {v: n for n, v in enumerate(used)}
    existing[name] = {'n': name, 'v': [[round(d['stars'][v][1] * 15, 3), round(d['stars'][v][2], 3)] for v in used],
                      'l': [[idx[a], idx[b]] for a, b in d['lines']]}
    if name not in order: order.append(name)
out = [existing[n] for n in order]
hdr = '''/*
 * Constellation figures for the line overlay: all 88. Every constellation the
 * Constellations page carries is written from that page's data by
 * tools/build-figures.py, so the two always show the same figure; the rest are
 * on the IAU / Sky & Telescope lines. Vertices are [RA deg, Dec deg] (J2000);
 * lines are vertex index pairs. Do not edit by hand.
 */
export const FIGURES = '''
fig_path.write_text(hdr + json.dumps(out, separators=(',', ':')) + ';\n')
print(len(out), 'figures,', sum(len(f['v']) for f in out), 'vertices;', sum(1 for d in data if d['type']=='Constellation'), 'from the page')
