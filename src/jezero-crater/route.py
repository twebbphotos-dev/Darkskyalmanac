# Perseverance's drives (NASA M20_traverse.json, CRS84 lon/lat) -> models/jezero-route.json
# Same frame as models/jezero.bin: metres east (x) and south (z) of the landing site.
# Output: drives: [[year, [x, z, x, z, ...]], ...] one polyline per calendar year, simplified to ~4 m; pins: [[name, x, z, sol], ...]
import json, sys, math, datetime
R = 3396190.; LAT0, LON0 = 18.38, 77.70; CX, CZ = 14018, 3835; k = R * math.pi / 180
SOL0 = datetime.date(2021, 2, 18); SOL = 1.02749125
d = json.load(open(sys.argv[1]))['features']; d.sort(key=lambda f: f['properties']['sol'])
xy = lambda lon, lat: (CX + (lon - LON0) * k * math.cos(math.radians(LAT0)), CZ - (lat - LAT0) * k)
def dp(p, tol):                      # Douglas-Peucker
  if len(p) < 3: return p
  a, b = p[0], p[-1]; dx, dz = b[0] - a[0], b[1] - a[1]; L = math.hypot(dx, dz) or 1e-9
  i, m = max(((i, abs((q[0] - a[0]) * dz - (q[1] - a[1]) * dx) / L) for i, q in enumerate(p[1:-1], 1)), key=lambda t: t[1])
  return dp(p[:i + 1], tol)[:-1] + dp(p[i:], tol) if m > tol else [a, b]
years = {}; total = 0; last = None
for f in d:
  s = f['properties']['sol']; y = (SOL0 + datetime.timedelta(days=s * SOL)).year; total += f['properties'].get('length') or 0
  pts = [xy(c[0], c[1]) for c in f['geometry']['coordinates']]
  seq = years.setdefault(y, [])
  if seq and math.hypot(seq[-1][0] - pts[0][0], seq[-1][1] - pts[0][1]) > 50: print('gap', y, s)
  seq.extend(pts); last = (s, pts[-1])
# Pins: where the rover stood on the sol of a well-documented event (end of its last drive on or before that sol)
PINS = [('Ingenuity’s first flight', 58), ('First rock core', 190), ('Wildcat Ridge', 503), ('Sample depot', 653), ('Belva Crater', 772), ('Cheyava Falls', 1215), ('Lookout Hill', 1354), ('Silver Mountain', 1401)]      # the distance record (sol 2006) is the latest position, labelled by the viewer itself
pins = []
for name, sol in PINS:
  f = [f for f in d if f['properties']['sol'] <= sol][-1]; x, z = xy(*f['geometry']['coordinates'][-1][:2])
  pins.append([name, round(x), round(z), sol]); print('pin', name, sol, 'from drive of sol', f['properties']['sol'], round(x), round(z))
out = []
for y in sorted(years):
  if y > min(years): out[-1][1].extend(years[y][:1])      # join each year to the next
  p = dp(years[y], 4.0); out.append([y, p])
for o in out: o[1] = [round(v) for q in o[1] for v in q]
json.dump({'sols': [d[0]['properties']['sol'], last[0]], 'km': round(total / 1000, 1), 'drives': out, 'pins': pins}, open(sys.argv[2], 'w'), separators=(',', ':'))
print('total %.1f km over %d drives; last sol %d at x %.0f z %.0f; points %d' % (total / 1000, len(d), last[0], last[1][0], last[1][1], sum(len(o[1]) // 2 for o in out)))
for o in out: print(o[0], len(o[1]) // 2)
