# A year level of the Mars Rover Simulator: the real ground round one stretch of Perseverance's route.
# Writes, in the game's own formats (see src/rover-game/README.md, "What changed in 2.3"), for NAME:
#   rover/dtm/NAME_site_1m.png  1.2 km square at 1 m      rover/dtm/NAME_area_4m.png  8 km square at 4 m
#     heights in metres relative to the landing site, packed (h + 300) x 50 in red and green (the rim to the west tops 600 m)
#   rover/img/NAME_hr.jpg   2048 m square at 1 m          rover/img/NAME_area.jpg   8192 m square at 4 m
# all centred on O (landing-site frame, metres east and south), north up.
# Heights: the HiRISE stereo DTMs (1 m posts, USGS SOCET, astrogeo-ard), shifted like the HiRISE pictures (hirise.py),
# over models/m20dem.bin (dem20.py) where they do not reach.
# Pictures: the viewer's HiRISE tiles, models/m20hr (1 m) and models/m20mid (4 m).
# usage (from the repo root): python3 src/jezero-crater/site.py NAME X Z
#   2022: y2022 -2200 -550   2023: y2023 -4500 -2200   2024: y2024 -9200 -1900   2025: y2025 -11300 0   2026: y2026 -12650 950
import numpy as np, math, json, os, rasterio
from rasterio.windows import from_bounds
from rasterio.enums import Resampling
from scipy import ndimage
from PIL import Image
import sys
NAME, O = sys.argv[1], (float(sys.argv[2]), float(sys.argv[3]))
R = 3396190.; LAT1, LON1 = 18.4447, 77.4508; k = R * math.pi / 180; CL = math.cos(math.radians(LAT1))
B = 'https://astrogeo-ard.s3.us-west-2.amazonaws.com/mars/mro/hirise/controlled/dtm/'
DTMS = [(B + 'PSP_002387_1985_PSP_003798_1985/DTEEC_002387_1985_003798_1985_A01.tif', (0., -80.)),      # with the metres to add to each georeference (hirise.py's alignment)
        (B + 'ESP_045994_1985_ESP_046060_1985/DTEEC_045994_1985_046060_1985_U01.tif', (0., -160.))]
dem = np.fromfile('models/m20dem.bin', '<i2').reshape(1024, 1024) / 4.
def coarse(X, Z): return ndimage.map_coordinates(dem, [(Z + 12288) / 20 - .5, (X + 16384) / 20 - .5], order=1, mode='nearest')
def hirise(X, Z, px, src, SH):                             # the stereo DTM sampled at X, Z (landing frame), read at px metres; NaN outside
  XP = R * math.radians(LON1) + (X - SH[0]) / CL; YP = R * math.radians(LAT1) - (Z - SH[1])
  b = src.bounds; xa, xb = max(XP.min(), b.left), min(XP.max(), b.right); ya, yb = max(YP.min(), b.bottom), min(YP.max(), b.top)
  if xa >= xb or ya >= yb: return np.full(X.shape, np.nan)
  nw, nh = int((xb - xa) * CL / px) + 2, int((yb - ya) / px) + 2
  a = src.read(1, window=from_bounds(xa, ya, xb, yb, src.transform), out_shape=(nh, nw), resampling=Resampling.average, boundless=True, masked=True)
  af = a.filled(-1e9).astype(np.float64); ok = (af > -1e4) & (af < 1e4) & ~np.ma.getmaskarray(a)
  col = (XP - xa) / (xb - xa) * nw - .5; row = (yb - YP) / (yb - ya) * nh - .5
  h = ndimage.map_coordinates(np.where(ok, af, 0), [row, col], order=1, cval=0); w = ndimage.map_coordinates(ok * 1., [row, col], order=1, cval=0)
  return np.where(w > .999, h, np.nan)
def heights(n, px):
  g = (np.arange(n) + .5) * px - n * px / 2; X, Z = np.meshgrid(O[0] + g, O[1] + g)
  c = coarse(X, Z); h = np.full(X.shape, np.nan)
  for url, sh in DTMS:      # the first that reaches each point
    q = hirise(X, Z, px, rasterio.open('/vsicurl/' + url), sh); h = np.where(np.isfinite(h), h, q + (np.nanmedian(c - q) if np.isfinite(q).any() else 0))
  ok = np.isfinite(h)
  if ok.sum() > 1000:
    h = h + np.median(c[ok] - h[ok]); bad = ndimage.binary_dilation(np.abs(h - c) > 40, iterations=3); ok &= ~bad
  w = ndimage.gaussian_filter(np.clip(ndimage.distance_transform_edt(ok) / (60 / px), 0, 1), 2) * ok
  out = c + (np.nan_to_num(h) - c) * w
  print('%d at %g m: HiRISE covers %.0f%%, %.1f..%.1f m' % (n, px, 100 * ok.mean(), out.min(), out.max()))
  return ndimage.gaussian_filter(out, .6)
def pack(h, path):
  q = np.clip(np.round((h + 300) * 50), 0, 65535).astype(np.uint32)
  Image.fromarray(np.stack([q >> 8, q & 255, np.zeros_like(q)], -1).astype(np.uint8)).save(path, optimize=True)
pack(heights(1200, 1.), f'rover/dtm/{NAME}_site_1m.png')
pack(heights(2000, 4.), f'rover/dtm/{NAME}_area_4m.png')
def picture(dirn, T, n, px, out, fallback=None):     # a square of n px at px metres from the viewer's tiles
  ix = json.load(open(f'models/{dirn}/index.json')); have = set(map(tuple, ix['tiles'])); tp = 1024 / T
  img = np.zeros((n, n, 3)); got = np.zeros((n, n)); x0, z0 = O[0] - n * px / 2, O[1] - n * px / 2
  for tx in range(int(math.floor(x0 / T)), int(math.floor((x0 + n * px) / T)) + 1):
    for tz in range(int(math.floor(z0 / T)), int(math.floor((z0 + n * px) / T)) + 1):
      if (tx, tz) not in have: continue
      t = np.asarray(Image.open(f'models/{dirn}/{tx}_{tz}.jpg').convert('RGB'), float)
      t = np.asarray(Image.fromarray(t.astype(np.uint8)).resize((int(T / px), int(T / px)), Image.LANCZOS), float) if tp != 1 / px else t
      ox, oz = int(round((tx * T - x0) / px)), int(round((tz * T - z0) / px)); s = t.shape[0]
      a0, b0 = max(0, -ox), max(0, -oz); a1, b1 = min(s, n - ox), min(s, n - oz)
      if a1 > a0 and b1 > b0: img[oz + b0:oz + b1, ox + a0:ox + a1] = t[b0:b1, a0:a1]; got[oz + b0:oz + b1, ox + a0:ox + a1] = 1
  if fallback is not None: img = np.where(got[..., None] > 0, img, fallback)
  print(out, 'covered %.0f%%' % (100 * got.mean()))
  Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).save(out, quality=84, optimize=True, progressive=True)
  return img
area = picture('m20mid', 4096, 2048, 4., f'rover/img/{NAME}_area.jpg')
up = np.asarray(Image.fromarray(area[768:1280, 768:1280].astype(np.uint8)).resize((2048, 2048), Image.BICUBIC), float)      # the 4 m picture, where there is no 1 m tile
picture('m20hr', 1024, 2048, 1., f'rover/img/{NAME}_hr.jpg', up)
