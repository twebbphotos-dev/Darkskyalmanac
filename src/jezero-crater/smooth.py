# Tidy models/jezero-route.json for drawing: drop needle-thin spikes (a sharp reversal on a short leg, mostly
# positioning jitter in the traverse) and round the corners a little (Chaikin, two passes). Endpoints stay put,
# so each year still joins the next and the latest position is unchanged.
# usage: smooth.py route.json out.json [spike_m]
import json, sys, math
R = json.load(open(sys.argv[1])); SP = float(sys.argv[3]) if len(sys.argv) > 3 else 60.
def despike(p):
  ch = True
  while ch:
    ch = False; q = [p[0]]
    for i in range(1, len(p) - 1):
      a, b, c = q[-1], p[i], p[i + 1]
      u, v = (b[0] - a[0], b[1] - a[1]), (c[0] - b[0], c[1] - b[1]); lu, lv = math.hypot(*u), math.hypot(*v)
      if lu < 1e-6: ch = True; continue
      cos = (u[0] * v[0] + u[1] * v[1]) / (lu * lv or 1)
      if cos < -.85 and min(lu, lv) < SP: ch = True; continue      # turns back on itself within a short leg: a spike
      q.append(b)
    q.append(p[-1]); p = q
  return p
def chaikin(p):
  q = [p[0]]
  for a, b in zip(p, p[1:]): q += [(.75 * a[0] + .25 * b[0], .75 * a[1] + .25 * b[1]), (.25 * a[0] + .75 * b[0], .25 * a[1] + .75 * b[1])]
  q[-1] = p[-1]; return q
n0 = n1 = 0
for d in R['drives']:
  p = list(zip(d[1][0::2], d[1][1::2])); n0 += len(p)
  p = chaikin(chaikin(despike(p))); n1 += len(p)
  d[1] = [round(v, 1) for q in p for v in q]
json.dump(R, open(sys.argv[2], 'w'), separators=(',', ':')); print(n0, '->', n1, 'points')
