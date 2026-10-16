# 20 m terrain of Perseverance's drive area -> models/m20dem.bin (Int16 quarter-metres, same datum as models/jezero.bin,
# 1024 x 1024 posts 20 m apart from x -16384, z -12288 in the landing-site frame).
# 1. CTX: python3 mosaic.py dtm tif list.json 1024 dem4/dtm.npy 18.479249768380292 77.34156996377693 20480
# 2. this script, part one: the five HiRISE stereo DTMs (USGS SOCET, astrogeo-ard) over it, shifted like the HiRISE pictures (hirise.py)
# 3. part two: smooth slightly, match the datum of jezero.bin, pack.

# merge the HiRISE stereo DTMs (1 m, resampled to the 20 m grid) into the CTX one, aligned like the HiRISE pictures
import numpy as np, math, rasterio
from rasterio.windows import from_bounds
from rasterio.enums import Resampling
from scipy import ndimage
from PIL import Image
m = np.load('dem4/dtm.npy').astype(np.float64); N = 1024; S = 20480.; X0, Z0 = -6144 - S/2, -2048 - S/2
R = 3396190.; LAT0, LON0 = 18.38, 77.70; CX, CZ = 14018, 3835; k = R * math.pi / 180; c0 = math.cos(math.radians(LAT0))
g = X0 + (np.arange(N) + .5) * S / N; X, Z = np.meshgrid(g, Z0 + (np.arange(N) + .5) * S / N)
D = {'DTEEC_002387_1985_003798_1985_A01': ('PSP_002387_1985_PSP_003798_1985', (0, -80)), 'DTEEC_023524_1985_023379_1985_U01': ('ESP_023524_1985_ESP_023379_1985', (-40, -80)),
     'DTEEC_045994_1985_046060_1985_U01': ('ESP_045994_1985_ESP_046060_1985', (0, -160)), 'DTEEC_048842_1985_048908_1985_U01': ('ESP_048842_1985_ESP_048908_1985', None), 'DTEEC_022680_1985_022746_1985_A01': ('ESP_022680_1985_ESP_022746_1985', None)}
sh = [v[1] for v in D.values() if v[1]]; med = (float(np.median([s[0] for s in sh])), float(np.median([s[1] for s in sh])))
acc = m.copy(); wt = np.ones_like(m) * 1e-3
for id_, (dr, s) in D.items():
  s = s or med; d = rasterio.open('/vsicurl/https://astrogeo-ard.s3.us-west-2.amazonaws.com/mars/mro/hirise/controlled/dtm/%s/%s.tif' % (dr, id_))
  lon = LON0 + (X - s[0] - CX) / (k * c0); lat = LAT0 - (Z - s[1] - CZ) / k; PX, PY = R * np.radians(lon), R * np.radians(lat)
  b = d.bounds; ins = (PX > b.left) & (PX < b.right) & (PY > b.bottom) & (PY < b.top)
  if ins.sum() < 100: print(id_, 'outside'); continue
  xa, xb, ya, yb = PX[ins].min(), PX[ins].max(), PY[ins].min(), PY[ins].max()
  win = from_bounds(xa, ya, xb, yb, d.transform); nw, nh = int((xb - xa) / 10) + 2, int((yb - ya) / 10) + 2
  a = d.read(1, window=win, out_shape=(nh, nw), resampling=Resampling.average, boundless=True, masked=True).astype(np.float64)
  af = a.filled(-1e9); ok = ~np.ma.getmaskarray(a) & (af > -1e4) & (af < 1e4); a = np.where(ok, af, 0)
  col = (PX - xa) / (xb - xa) * nw - .5; row = (yb - PY) / (yb - ya) * nh - .5
  h = ndimage.map_coordinates(a, [row, col], order=1, cval=0); w = ndimage.map_coordinates(np.clip(ndimage.distance_transform_edt(ok) / 25., 0, 1), [row, col], order=1, cval=0)
  w = np.where(ins, w, 0); w = ndimage.gaussian_filter(w, 1) * (w > 0)
  sel = w > .9
  if sel.sum() < 100: print(id_, 'little'); continue
  h += np.median(m[sel] - h[sel])
  bad = ndimage.binary_dilation(np.abs(h - m) > 40, iterations=3); w = np.where(bad, 0, w)      # stray values at the DTM's ragged edges
  print(id_, 'cover %.1f%%' % (100 * (w > 0).mean()), 'sd vs ctx %.1f' % (h[sel] - m[sel]).std())
  acc += h * w * 4; wt += w * 4                     # HiRISE outweighs CTX where it has data
out = (.25 * m + (acc - m)) / (.25 + wt - 1e-3)
out = (.25 * m + (acc - m)) / (.25 + wt - 1e-3)
np.save('dem4/merged.npy', out.astype(np.float32))

# ---- pack
m = np.load('dem4/merged.npy').astype(np.float64); N = 1024; S = 20480.; X0, Z0 = -6144 - S/2, -2048 - S/2
m = ndimage.gaussian_filter(m, .6)
J = np.fromfile('/home/user/Darkskyalmanac/models/jezero.bin', '<i2').reshape(640, 640) / 4.; W = 90000; C = (-982, 3835)
g = X0 + (np.arange(N) + .5) * S / N; X, Z = np.meshgrid(g, Z0 + (np.arange(N) + .5) * S / N)
u = ((X - C[0]) / W + .5) * 640 - .5; v = ((Z - C[1]) / W + .5) * 640 - .5
c = ndimage.map_coordinates(J, [v, u], order=1)
off = np.median(c - m); m += off; d = m - c
print('offset %.1f  diff vs coarse: sd %.1f  p1 %.1f p99 %.1f' % (off, d.std(), np.percentile(d, 1), np.percentile(d, 99)))
q = np.clip(np.round(m * 4), -32767, 32767).astype('<i2'); q.tofile('/home/user/Darkskyalmanac/models/m20dem.bin')
gy, gx = np.gradient(m, 20.); hs = np.clip(.6 - .5 * gx + .4 * gy, 0, 1)
Image.fromarray((hs * 255).astype(np.uint8)).resize((512, 512)).save('dem4/hs.png')
