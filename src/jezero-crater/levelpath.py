# The stretch of one year's drives that a rover-simulator level follows, in game metres (1.5 m of Mars each) about O.
# usage: levelpath.py YEAR X Z [SQ PLAY_R]   -> prints the path for src/rover-game/src/terrain.js (SITES)
#   2022: 2022 -2200 -550   2023: 2023 -4050 -2290   2024: 2024 -9200 -1900 2.4 750   2025: 2025 -11300 0 2.4 750
import json, math, sys
Y, O = int(sys.argv[1]), (float(sys.argv[2]), float(sys.argv[3]))
SQ, PR = (float(sys.argv[4]), float(sys.argv[5])) if len(sys.argv) > 5 else (1.5, 500.)
R = json.load(open('models/jezero-route.json')); d = [x for x in R['drives'] if x[0] == Y][0][1]
pts = [((d[i] - O[0]) / SQ, (d[i + 1] - O[1]) / SQ) for i in range(0, len(d), 2)]
ins = [math.hypot(*q) < PR - 30 for q in pts]; best = (0, 0); i = 0
while i < len(pts):
  if ins[i]:
    j = i
    while j < len(pts) and ins[j]: j += 1
    L = sum(math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]) for k in range(i + 1, j))
    if L > best[1] - best[0] and L > getattr(sys.modules[__name__], 'BL', 0): best, BL = (i, j), L
    i = j
  else: i += 1
run = pts[best[0]:best[1]]
while math.hypot(*run[0]) > PR - 60: run.pop(0)
while math.hypot(*run[-1]) > PR - 55: run.pop()
def dp(p, tol):
  if len(p) < 3: return p
  a, b = p[0], p[-1]; dx, dz = b[0] - a[0], b[1] - a[1]; L = math.hypot(dx, dz) or 1e-9
  i, m = max(((i, abs((q[0] - a[0]) * dz - (q[1] - a[1]) * dx) / L) for i, q in enumerate(p[1:-1], 1)), key=lambda t: t[1])
  return dp(p[:i + 1], tol)[:-1] + dp(p[i:], tol) if m > tol else [a, b]
s = dp(run, 2.0 * SQ / 1.5); L = sum(math.hypot(s[k][0] - s[k - 1][0], s[k][1] - s[k - 1][1]) for k in range(1, len(s)))
print(len(s), 'points,', round(L), 'game m; start', [round(v) for v in s[0]], 'end', [round(v) for v in s[-1]], file=sys.stderr)
print(json.dumps([v for q in s for v in (round(q[0], 1), round(q[1], 1))], separators=(',', ':')))
