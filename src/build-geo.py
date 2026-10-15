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
# National park gateway towns (curated; Natural Earth omits most of them).
# [town, park, lat, lon]; coordinates are town centres to about 0.01 deg.
geo['g'] = [
  ['Springdale', 'Zion', 37.189, -112.999], ['Kanab', 'Zion & Bryce', 37.047, -112.526],
  ['Tropic', 'Bryce Canyon', 37.627, -112.082], ['Torrey', 'Capitol Reef', 38.299, -111.420],
  ['Moab', 'Arches & Canyonlands', 38.573, -109.550], ['Tusayan', 'Grand Canyon', 35.973, -112.127],
  ['Holbrook', 'Petrified Forest', 34.902, -110.158], ['Cortez', 'Mesa Verde', 37.349, -108.586],
  ['Montrose', 'Black Canyon', 38.478, -107.876], ['Alamosa', 'Great Sand Dunes', 37.469, -105.870],
  ['Estes Park', 'Rocky Mountain', 40.377, -105.521], ['Grand Lake', 'Rocky Mountain', 40.252, -105.823],
  ['Baker', 'Great Basin', 39.013, -114.122], ['Beatty', 'Death Valley', 36.909, -116.759],
  ['Twentynine Palms', 'Joshua Tree', 34.136, -116.054], ['Mariposa', 'Yosemite', 37.485, -119.966],
  ['Three Rivers', 'Sequoia', 36.439, -118.904], ['Soledad', 'Pinnacles', 36.425, -121.326],
  ['Crescent City', 'Redwood', 41.756, -124.202], ['Mineral', 'Lassen Volcanic', 40.348, -121.598],
  ['Ashford', 'Mount Rainier', 46.759, -122.030], ['Port Angeles', 'Olympic', 48.118, -123.430],
  ['Marblemount', 'North Cascades', 48.528, -121.441], ['West Glacier', 'Glacier', 48.496, -113.983],
  ['West Yellowstone', 'Yellowstone', 44.662, -111.104], ['Gardiner', 'Yellowstone', 45.032, -110.705],
  ['Jackson', 'Grand Teton', 43.480, -110.762], ['Wall', 'Badlands', 43.993, -102.241],
  ['Hot Springs', 'Wind Cave', 43.432, -103.474], ['Medora', 'Theodore Roosevelt', 46.914, -103.524],
  ['Carlsbad', 'Carlsbad Caverns', 32.420, -104.229], ['Alamogordo', 'White Sands', 32.900, -105.960],
  ['Terlingua', 'Big Bend', 29.321, -103.616], ['International Falls', 'Voyageurs', 48.601, -93.411],
  ['Houghton', 'Isle Royale', 47.122, -88.569], ['Gatlinburg', 'Great Smoky Mountains', 35.714, -83.510],
  ['Cherokee', 'Great Smoky Mountains', 35.474, -83.315], ['Luray', 'Shenandoah', 38.665, -78.459],
  ['Bar Harbor', 'Acadia', 44.388, -68.204], ['Cave City', 'Mammoth Cave', 37.137, -85.957],
  ['Fayetteville', 'New River Gorge', 38.053, -81.104], ['Peninsula', 'Cuyahoga Valley', 41.241, -81.551],
  ['Homestead', 'Everglades', 25.469, -80.478],
]
(ROOT / 'zcl-geo.json').write_text(json.dumps(geo, separators=(',', ':'), ensure_ascii=False))
print({k: len(v) for k, v in geo.items() if k != 'src'}, (ROOT / 'zcl-geo.json').stat().st_size, 'bytes')
