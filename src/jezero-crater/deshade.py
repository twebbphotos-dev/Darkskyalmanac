# Take the sunlight out of the rover levels' HiRISE pictures.
#
#   python3 src/jezero-crater/deshade.py y2022 y2023 ...      (after site.py; run once per fresh picture)
#
# An orbital picture is the ground's colour times the light of the afternoon it was taken:
# the sunward side of every ripple and dune is bright and the far side dark. The game lights
# its own relief with its own Sun, so the baked-in shading reads as dark smears painted on
# the ground, in places where the game's light does not put them. Here the shading is fitted
# from the elevation (brightness against east and south slope, on detail finer than ~40 m so
# real light and dark ground does not skew it) and divided out, leaving the albedo: dark sand,
# pale bedrock. Writes rover/img/NAME_hr.jpg and NAME_area.jpg in place; the originals come
# from site.py.
import sys
import numpy as np
from PIL import Image
from scipy import ndimage

def load_dtm(path):
  d = np.asarray(Image.open(path).convert('RGB'), np.float64)
  return (d[..., 0] * 256 + d[..., 1]) / 50 - 300

def heights(site, area, X, Z):                  # as dtmRaw in terrain.js, landing frame, metres of Mars
  far = ndimage.map_coordinates(area, [(Z + 4000) / 4 - .5, (X + 4000) / 4 - .5], order=1, mode='nearest')
  m = np.maximum(np.abs(X), np.abs(Z))
  near = ndimage.map_coordinates(site, [Z + 599.5, X + 599.5], order=1, mode='nearest')
  t = np.clip((m - 540) / 58, 0, 1); t = t * t * (3 - 2 * t)
  return np.where(m >= 598, far, near + (far - near) * t)

def deshade(path, site, area, px):
  img = np.asarray(Image.open(path).convert('RGB'), np.float64)
  n = img.shape[0]
  c = (np.arange(n) - (n - 1) / 2) * px
  X, Z = np.meshgrid(c, c)                      # columns east, rows south, as the shader reads it
  h = ndimage.gaussian_filter(heights(site, area, X, Z), 1.0)
  gz, gx = np.gradient(h, px)
  L = np.log(np.maximum(4, img @ [0.3, 0.55, 0.15]))
  hp = lambda a: a - ndimage.gaussian_filter(a, 40 / px)
  ok = (img.max(-1) > 12) & (img.min(-1) < 250)
  A = np.stack([hp(gx)[ok], hp(gz)[ok]], 1); y = hp(L)[ok]
  (b, cz), *_ = np.linalg.lstsq(A, y, rcond=None)
  S = np.clip(b * gx + cz * gz, -0.8, 0.8)
  r2 = 1 - np.var(y - A @ [b, cz]) / np.var(y)
  az = np.degrees(np.arctan2(-b, cz)) % 360     # brightest-facing direction, clockwise from north (south = +z)
  print(f'{path}: lit from {az:.0f}°, shading explains {100 * r2:.0f}% of the fine light and dark', '' if r2 > 0.05 else '(left as it is)')
  if r2 <= 0.05: return                         # heights too coarse to see the shading (the CTX levels): not worth a re-encode
  out = np.clip(img * np.exp(-S)[..., None], 0, 255)
  Image.fromarray(out.round().astype(np.uint8)).save(path, quality=90)

for name in sys.argv[1:]:
  site, area = load_dtm(f'rover/dtm/{name}_site_1m.png'), load_dtm(f'rover/dtm/{name}_area_4m.png')
  deshade(f'rover/img/{name}_hr.jpg', site, area, 1.)
  deshade(f'rover/img/{name}_area.jpg', site, area, 4.)
