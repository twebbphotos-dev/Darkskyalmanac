# HiRISE pictures for the landing level of the Mars Rover Simulator, and gaps filled in every level's 4 m picture.
#
#   python3 src/jezero-crater/pictures.py            (then: python3 src/jezero-crater/relief.py landing)
#
# rover/img/landing_hr.jpg (2048 m at 1 m) and rover/img/landing_area.jpg (8192 m at 4 m), centred on the landing
# site, north up, from the viewer's HiRISE tiles (models/m20hr, models/m20mid), as site.py makes them for the years.
# Where no HiRISE tile reaches, every NAME_area.jpg is filled from the 60 km CTX map (rover/img/jezero-region.jpg,
# region.py), matched to the HiRISE picture's own brightness and colour where both cover, instead of black.
import numpy as np, math, json, sys
from PIL import Image
from scipy import ndimage
sys.argv = [sys.argv[0], 'landing', '0', '0']
# The landing level's heights are NASA's TRN mosaic (dtm/site_1m.png, area_4m.png), which sits 20 m east and 48 m south of the
# viewer's tiles: a hillshade of it cross-correlated against the pictures puts the same craters there at both 1 m and 4 m.
# So its pictures are cut 20 m west and 48 m north of the landing point, and line up with its ground.
LEVELS = {'landing': (-20, -48), 'y2022': (-2200, -550), 'y2023': (-4500, -2200), 'y2024': (-8823, -2026), 'y2025': (-11300, 0), 'y2026': (-12650, 950)}
REG = np.asarray(Image.open('rover/img/jezero-region.jpg').convert('RGB'), float); RN, RS = REG.shape[0], 60000.

def tiles(dirn, T, n, px, O):      # a square of n px at px metres from the viewer's tiles, and where they cover
  ix = json.load(open(f'models/{dirn}/index.json')); have = set(map(tuple, ix['tiles']))
  img = np.zeros((n, n, 3)); got = np.zeros((n, n)); x0, z0 = O[0] - n * px / 2, O[1] - n * px / 2
  for tx in range(int(math.floor(x0 / T)), int(math.floor((x0 + n * px) / T)) + 1):
    for tz in range(int(math.floor(z0 / T)), int(math.floor((z0 + n * px) / T)) + 1):
      if (tx, tz) not in have: continue
      t = Image.open(f'models/{dirn}/{tx}_{tz}.jpg').convert('RGB')
      if t.size[0] != int(T / px): t = t.resize((int(T / px), int(T / px)), Image.LANCZOS)
      t = np.asarray(t, float); ox, oz = int(round((tx * T - x0) / px)), int(round((tz * T - z0) / px)); s = t.shape[0]
      a0, b0 = max(0, -ox), max(0, -oz); a1, b1 = min(s, n - ox), min(s, n - oz)
      if a1 > a0 and b1 > b0: img[oz + b0:oz + b1, ox + a0:ox + a1] = t[b0:b1, a0:a1]; got[oz + b0:oz + b1, ox + a0:ox + a1] = 1
  return img, got

def ctx(n, px, O):      # the CTX map resampled to the same square
  g = (np.arange(n) + .5) * px - n * px / 2; X, Z = np.meshgrid(O[0] + g, O[1] + g)
  c, r = (X / RS + .5) * RN - .5, (Z / RS + .5) * RN - .5
  return np.stack([ndimage.map_coordinates(REG[..., k], [r, c], order=1, mode='nearest') for k in range(3)], -1)

def fill(img, got, n, px, O):      # CTX where HiRISE is missing, matched in each channel, feathered over ~200 m
  if got.min() > 0: return img
  c = ctx(n, px, O); ok = got > 0
  if ok.sum() > 1000:
    for k in range(3): c[..., k] *= np.median(img[..., k][ok]) / max(1, np.median(c[..., k][ok]))
  w = ndimage.gaussian_filter(np.clip(ndimage.distance_transform_edt(ok) / (200 / px), 0, 1), 3) * ok
  return img * w[..., None] + c * (1 - w[..., None])

def save(img, out): Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).save(out, quality=84, optimize=True, progressive=True)

O = LEVELS['landing']
area, got = tiles('m20mid', 4096, 2048, 4., O); area = fill(area, got, 2048, 4., O); save(area, 'rover/img/landing_area.jpg')
print('landing area: HiRISE covers %.0f%%' % (100 * got.mean()))
up = np.asarray(Image.fromarray(np.clip(area[768:1280, 768:1280], 0, 255).astype(np.uint8)).resize((2048, 2048), Image.BICUBIC), float)
hr, g1 = tiles('m20hr', 1024, 2048, 1., O)
w = ndimage.gaussian_filter(np.clip(ndimage.distance_transform_edt(g1 > 0) / 40, 0, 1), 2) * (g1 > 0)      # the 4 m picture where there is no 1 m tile, feathered
save(hr * w[..., None] + up * (1 - w[..., None]), 'rover/img/landing_hr.jpg'); print('landing 1 m: covers %.0f%%' % (100 * g1.mean()))
for name, O in LEVELS.items():      # the years' 4 m pictures: black holes filled
  if name == 'landing': continue
  a, got = tiles('m20mid', 4096, 2048, 4., O)
  print(name, 'area: HiRISE covers %.0f%%' % (100 * got.mean()))
  if got.min() == 0: save(fill(a, got, 2048, 4., O), f'rover/img/{name}_area.jpg')
