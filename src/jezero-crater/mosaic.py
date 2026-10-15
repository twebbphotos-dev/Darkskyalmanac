# Mosaic USGS CTX DTMs or their orthoimages onto a square grid (+x east, +row south) centred on (lat, lon).
# usage: mosaic2.py dtm|ortho TIFDIR LIST N OUT LAT LON SIZE_M
import json, sys, os, numpy as np, tifffile
from scipy import ndimage
mode, TD, LIST, N, OUT = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]), sys.argv[5]
LAT0, LON0, S = float(sys.argv[6]), float(sys.argv[7]), float(sys.argv[8])
R = 3396190.0
L = json.load(open(LIST))
c = (np.arange(N) + .5) / N * S - S / 2
X, Z = np.meshgrid(c, c)
lat = LAT0 - Z / R * 180 / np.pi
lon = LON0 + X / (R * np.cos(np.radians(LAT0))) * 180 / np.pi
PX = R * np.radians(lon); PY = R * np.radians(lat)
stack = []
for l in L:
  base = os.path.basename(l['href']); f = TD + '/' + (base if mode == 'dtm' else base.replace('_dtm.tif', '_orthoimage.tif'))
  if not os.path.exists(f): continue
  tf = tifffile.TiffFile(f); p = tf.pages[0]; sc = p.tags['ModelPixelScaleTag'].value; tp = p.tags['ModelTiepointTag'].value
  col = (PX - tp[3]) / sc[0] - .5; row = (tp[4] - PY) / sc[1] - .5; sh = p.shape
  r0, r1 = int(max(0, row.min() - 2)), int(min(sh[0], row.max() + 3)); c0, c1 = int(max(0, col.min() - 2)), int(min(sh[1], col.max() + 3))
  if r1 - r0 < 10 or c1 - c0 < 10: continue
  a = p.asarray()[r0:r1, c0:c1].astype(np.float32); row = row - r0; col = col - c0
  ok = (a > -1e4) & np.isfinite(a)
  if mode == 'ortho': ok &= a > 0.01
  if ok.sum() < 1000: continue
  dist = ndimage.distance_transform_edt(ok); w = np.clip(dist / 150., 0, 1) ** 2
  a2 = np.where(ok, a, 0)
  h = ndimage.map_coordinates(a2, [row, col], order=1, mode='constant', cval=0)
  ww = ndimage.map_coordinates(w, [row, col], order=1, mode='constant', cval=0)
  okk = ndimage.map_coordinates(ok.astype(np.float32), [row, col], order=1, mode='constant', cval=0) > .999
  ww = np.where(okk, ww, 0)
  if (ww > 0).sum() < 2000: continue
  if mode == 'ortho':      # keep each strip's fine detail relative to its own local brightness, so haze and Sun angle don't leave seams
    msk = (ww > 0).astype(np.float32); sg = 2500. / (S / N)
    lm = ndimage.gaussian_filter(h * msk, sg) / np.maximum(ndimage.gaussian_filter(msk, sg), 1e-6); det = np.where(msk > 0, h / np.maximum(lm, 1e-4), 1.)
    sd = np.std(det[msk > 0]); det = 1 + (det - 1) * (.16 / max(sd, 1e-3))
    stack.append((l['id'], h.astype(np.float32), ww.astype(np.float16), det.astype(np.float16))); print(l['id'][:30], 'cover %.1f%% detail sd %.3f' % (100 * (ww > 0).mean(), sd), flush=True); continue
  stack.append((l['id'], h.astype(np.float32), ww.astype(np.float32)))
  print(l['id'][:30], 'cover %.1f%%' % (100 * (ww > 0).mean()), flush=True)
acc = np.zeros((N, N)); wsum = np.zeros((N, N)); dacc = np.zeros((N, N))
for st in sorted(stack, key=lambda s: -(s[2] > 0).sum()):
  nm, h, ww = st[0], st[1], st[2].astype(np.float32)
  if mode == 'ortho': dacc += st[3].astype(np.float32) * ww
  both = (ww > 0) & (wsum > 0)
  if mode == 'dtm':
    g, off = 1., (np.median((acc[both] / wsum[both]) - h[both]) if both.sum() > 5000 else 0.)
  elif both.sum() > 5000:      # brightness differs strip to strip (season, Sun angle, haze): match each to what is already laid
    ref = acc[both] / wsum[both]; v = h[both]; g = np.std(ref) / max(np.std(v), 1e-6); off = np.mean(ref) - g * np.mean(v)
  else: g, off = 1., 0.
  print(nm[:30], 'gain %.3f offset %.3f' % (g, off))
  acc += (g * h + off) * ww; wsum += ww
m = np.where(wsum > 0, acc / np.maximum(wsum, 1e-9), np.nan)
if mode == 'ortho':      # broad brightness from the blended mosaic, smoothed past the strip edges, times the fine detail
  ok = (wsum > 0).astype(np.float32); sg = 2500. / (S / N)
  low = ndimage.gaussian_filter(np.nan_to_num(m) * ok, sg) / np.maximum(ndimage.gaussian_filter(ok, sg), 1e-6)
  m = np.where(wsum > 0, low * dacc / np.maximum(wsum, 1e-9), np.nan)
print('coverage %.2f%%' % (100 * np.isfinite(m).mean()))
np.save(OUT, m.astype(np.float32))
