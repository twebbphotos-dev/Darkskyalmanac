# HiRISE detail along Perseverance's route, for the 3D viewer's "From above" view.
# Writes 1 km x 1 km tiles at 1 m/px (models/m20hr/X_Z.jpg, X/Z = tile index east/south of the landing site in km)
# and models/m20hr/index.json. Colour comes from models/jezero.jpg (the CTX map); fine detail from HiRISE:
# controlled orthoimages (USGS SOCET DTM products) first, map-projected RED observations where those don't reach.
# Each HiRISE image is aligned to the CTX orthoimage mosaic by cross-correlation before use.
# usage: hirise.py list.json route.json ctx_ortho.npy jezero.jpg OUTDIR
import sys, os, json, math, numpy as np, rasterio
from rasterio.windows import from_bounds
from rasterio.enums import Resampling
from scipy import ndimage
from PIL import Image
LIST, ROUTE, CTXO, JPG, OUT = sys.argv[1:6]
R = 3396190.; LAT1, LON1 = 18.4447, 77.4508; k = R * math.pi / 180; CL = math.cos(math.radians(LAT1))
T, PX, BUF = int(os.environ.get('HR_T', 1024)), float(os.environ.get('HR_PX', 1)), float(os.environ.get('HR_BUF', 450))      # tile metres, metres per pixel, corridor half-width
NT = int(round(T / PX))                           # pixels across a tile
# the overview level for the zoomed-out view: HR_T=4096 HR_PX=4 HR_BUF=2500 (models/m20mid/)
os.makedirs(OUT, exist_ok=True)
# landing-site frame (x east, z south, metres) <-> source projection (X = R*lon, Y = R*lat, Mars 2015 sphere, clon 0)
toXY = lambda x, z: (R * math.radians(LON1) + x / CL, R * math.radians(LAT1) - z)
# which tiles: within BUF of the route
rt = json.load(open(ROUTE)); pts = np.array([q for d in rt['drives'] for q in zip(d[1][0::2], d[1][1::2])], float)
tiles = set()
for x, z in pts:
  for tx in range(int(math.floor((x - BUF) / T)), int(math.floor((x + BUF) / T)) + 1):
    for tz in range(int(math.floor((z - BUF) / T)), int(math.floor((z + BUF) / T)) + 1): tiles.add((tx, tz))
tiles = sorted(tiles); print(len(tiles), 'tiles')
SH, NS = (int(sys.argv[6]), int(sys.argv[7])) if len(sys.argv) > 7 else (0, 1)      # optional: this worker's share of the tiles
mine = tiles[SH::NS]
# CTX ortho mosaic (120 km, 39 m, centred 18.38 N 77.70 E) for alignment; CTX colour map (models/jezero.jpg, 90 km square centred 982 m W, 3835 m S... of nothing: centred at x=-982, z=3835)
ctx = np.load(CTXO); ctx = np.where(np.isfinite(ctx), ctx, np.nanmean(ctx)); NC = ctx.shape[0]; SC = 120000.
CX0, CZ0 = 14018., 3835.                          # the mosaic centre in the landing frame
def ctx_at(x, z):                                  # sample the CTX mosaic at landing-frame metres
  return ndimage.map_coordinates(ctx, [((z - CZ0) / SC + .5) * NC - .5, ((x - CX0) / SC + .5) * NC - .5], order=1, mode='nearest')
col = np.asarray(Image.open(JPG).convert('RGB'), np.float32); NJ = col.shape[0]; WJ, JX, JZ = 90000., -982., 3835.
def col_at(x, z):
  u, v = ((x - JX) / WJ + .5) * NJ - .5, ((z - JZ) / WJ + .5) * NJ - .5
  return np.stack([ndimage.map_coordinates(col[..., c], [v, u], order=1, mode='nearest') for c in range(3)], -1)
L = json.load(open(LIST)); L.sort(key=lambda o: (o['kind'] != 'ortho_0', 'COLOR' in o['id']))
L = [o for o in L if 'COLOR' not in o['id']]
src = {}
def open_src(o):
  if o['id'] not in src:
    src[o['id']] = rasterio.open('/vsicurl/' + o['href'].replace('s3-us-west-2', 's3.us-west-2'))
  return src[o['id']]
shift = {}
def align(o, d):                                   # metres to add to the image's own georeference, from correlation with CTX at 40 m
  if o['id'] in shift: return shift[o['id']]
  b = d.bounds; cxm, cym = (b.left + b.right) / 2, (b.bottom + b.top) / 2
  W = 6000.; win = from_bounds(cxm - W / 2 / CL, cym - W / 2, cxm + W / 2 / CL, cym + W / 2, d.transform)
  n = 150; a = d.read(1, window=win, out_shape=(n, n), resampling=Resampling.average, boundless=True, fill_value=0).astype(np.float32)
  m = a > 0
  if m.mean() < .5: shift[o['id']] = (0., 0.); return shift[o['id']]
  x0 = (cxm - R * math.radians(LON1)) * CL; z0 = R * math.radians(LAT1) - cym
  g = (np.arange(n) + .5) / n * W - W / 2; X, Z = np.meshgrid(g + x0, g + z0)
  c = ctx_at(X, Z).reshape(n, n)
  a = np.where(m, a, a[m].mean()); hp = lambda q: (q - ndimage.gaussian_filter(q, 8)) / (q.std() + 1e-6)
  F = np.fft.fft2(hp(c)) * np.conj(np.fft.fft2(hp(a))); cc = np.real(np.fft.ifft2(F)); j, i = np.unravel_index(np.argmax(cc), cc.shape)
  j = j - n if j > n // 2 else j; i = i - n if i > n // 2 else i
  pk = cc.max() / cc.std(); sh = (i * W / n, j * W / n)
  good = [v for v in shift.values() if v != (0., 0.)]
  med = (float(np.median([v[0] for v in good])), float(np.median([v[1] for v in good]))) if len(good) >= 3 else None
  if med and pk < 15 and math.hypot(sh[0] - med[0], sh[1] - med[1]) > 100: sh = med      # a weak match far from the others: trust the others
  shift[o['id']] = sh; print('align', o['id'], sh, 'peak %.2f' % pk); return sh
index = []
for tx, tz in mine:
  x0, z0 = tx * T, tz * T; g = (np.arange(NT) + .5) * PX; X, Z = np.meshgrid(x0 + g, z0 + g)
  det = np.zeros((NT, NT), np.float32); wsum = np.zeros((NT, NT), np.float32)
  for o in L:
    b = o['bbox']; lon0, lat0 = LON1 + x0 / (k * CL), LAT1 - (z0 + T) / k; lon1, lat1 = LON1 + (x0 + T) / (k * CL), LAT1 - z0 / k
    if b['xmax'] < lon0 or b['xmin'] > lon1 or b['ymax'] < lat0 or b['ymin'] > lat1: continue
    if (wsum > .99).mean() > .995: break
    d = open_src(o); sx, sz = align(o, d)
    Xa, Ya = toXY(x0 - sx - 20, z0 - sz - 20); Xb, Yb = toXY(x0 + T - sx + 20, z0 + T - sz + 20)
    win = from_bounds(Xa, Yb, Xb, Ya, d.transform)
    nw, nh = int(round((Xb - Xa) * CL / PX)), int(round((Ya - Yb) / PX))
    a = d.read(1, window=win, out_shape=(nh, nw), resampling=Resampling.average, boundless=True, fill_value=0).astype(np.float32)
    ok = a > 0
    if ok.mean() < .02: continue
    lp = ndimage.gaussian_filter(np.where(ok, a, 0), 40 / PX) / np.maximum(ndimage.gaussian_filter(ok * 1., 40 / PX), 1e-3)
    dd = np.where(ok, a / np.maximum(lp, 1), 1.); dd = 1 + np.clip((dd - 1) / max(dd[ok].std(), 1e-3) * .14, -.6, .6)      # fine detail, contrast evened between images
    w = np.clip(ndimage.distance_transform_edt(ok) / (60. / PX), 0, 1) ** 2
    rr, cc = (Z - z0 + 20) / ((Ya - Yb) / nh) - .5, (X - x0 + 20) / ((Xb - Xa) * CL / nw) - .5      # the window was already read shifted by the alignment
    di = ndimage.map_coordinates(dd, [rr, cc], order=1, mode='constant', cval=1); wi = ndimage.map_coordinates(w, [rr, cc], order=1, mode='constant', cval=0)
    wi = wi * (1 - np.clip(wsum, 0, 1))           # earlier (better) images keep what they have
    det += di * wi; wsum += wi
  if wsum.max() < .05: continue
  det = np.where(wsum > 0, det / np.maximum(wsum, 1e-6), 1.); cover = np.clip(wsum, 0, 1)
  base = col_at(X, Z)
  rgb = base * (1 + (det[..., None] - 1) * cover[..., None])
  ts = set(tiles); f = np.ones(NT, np.float32); ramp = np.clip(g / 80., 0, 1)      # where no tile follows, the detail fades out over 80 m instead of stopping at a straight edge
  fx = (ramp if (tx - 1, tz) not in ts else f) * (ramp[::-1] if (tx + 1, tz) not in ts else f); fz = (ramp if (tx, tz - 1) not in ts else f) * (ramp[::-1] if (tx, tz + 1) not in ts else f)
  fade = (fz[:, None] * fx[None, :])[..., None]; rgb = base + (rgb - base) * fade
  Image.fromarray(np.clip(rgb, 0, 255).astype(np.uint8)).save(f'{OUT}/{tx}_{tz}.jpg', quality=82, optimize=True, progressive=True)
  index.append([tx, tz]); print('tile', tx, tz, 'cover %.0f%%' % (100 * cover.mean()), flush=True)
json.dump({'size': T, 'tiles': index}, open(f'{OUT}/index{SH}.json', 'w'))      # one per worker; merged into index.json afterwards
