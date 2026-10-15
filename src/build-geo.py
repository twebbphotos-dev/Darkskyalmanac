#!/usr/bin/env python3
"""Build zcl-geo.json: borders, coastlines, lakes and cities for the satellite
loop's map overlay (clouds.html). One-off, kept for provenance.

Source: Natural Earth (public domain), nvkelso/natural-earth-vector/geojson:
  ne_50m_admin_1_states_provinces_lines, ne_50m_admin_0_boundary_lines_land,
  ne_50m_coastline, ne_50m_lakes, ne_10m_populated_places_simple
Trimmed to the GOES view (the Americas), rounded to 0.01 deg, thinned.

usage: src/build-geo.py <dir with the five .geojson files>
"""
import json, sys, pathlib
D = pathlib.Path(sys.argv[1]); ROOT = pathlib.Path(__file__).resolve().parents[1]
W, E, S, N = -170, -30, -60, 75
def inbox(p): return W <= p[0] <= E and S <= p[1] <= N
def lines(fname, keep=lambda pr: True, step=0.03):
    out = []
    for f in json.load(open(D / fname))['features']:
        if not keep(f['properties']): continue
        g = f['geometry']; parts = g['coordinates']
        if g['type'] in ('LineString',): parts = [parts]
        if g['type'] == 'Polygon': parts = parts
        if g['type'] == 'MultiPolygon': parts = [r for poly in parts for r in poly]
        for ln in parts:
            cur = []
            for p in ln:
                if not inbox(p):
                    if len(cur) > 1: out.append(cur)
                    cur = []; continue
                q = [round(p[0], 2), round(p[1], 2)]
                if cur and abs(q[0] - cur[-1][0]) < step and abs(q[1] - cur[-1][1]) < step: continue
                cur.append(q)
            if len(cur) > 1: out.append(cur)
    return [[c for pt in ln for c in pt] for ln in out]   # flat [lon,lat,lon,lat,...]
geo = {
  'src': 'Natural Earth (public domain)',
  's': lines('ne_50m_admin_1_states_provinces_lines.geojson'),
  'b': lines('ne_50m_admin_0_boundary_lines_land.geojson'),
  'c': lines('ne_50m_coastline.geojson'),
  'l': lines('ne_50m_lakes.geojson', lambda pr: (pr.get('scalerank') or 9) <= 4),
}
cities = []
for f in json.load(open(D / 'ne_10m_populated_places_simple.geojson'))['features']:
    pr = f['properties']; lon, lat = f['geometry']['coordinates']
    if not inbox([lon, lat]): continue
    pop = int(pr.get('pop_max') or 0)
    if pop < 15000 and not pr.get('adm0cap'): continue
    cities.append([pr['name'], round(lat, 3), round(lon, 3), pop])
cities.sort(key=lambda c: -c[3])
geo['p'] = cities
(ROOT / 'zcl-geo.json').write_text(json.dumps(geo, separators=(',', ':'), ensure_ascii=False))
print({k: len(v) for k, v in geo.items() if k != 'src'}, (ROOT / 'zcl-geo.json').stat().st_size, 'bytes')
