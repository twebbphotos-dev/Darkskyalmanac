# The rover game's 60 km map of the landing country (rover/img/jezero-region.jpg): north up, centred on the
# landing site, cut from the same CTX orthoimage mosaic as models/jezero.jpg and coloured the same way.
# usage: region.py ortho.npy PHOTO OUT   (ortho.npy: 120 km mosaic centred 18.38 N 77.70 E, from mosaic.py)
import sys, numpy as np
from PIL import Image
from scipy import ndimage
O, PHOTO, OUT = sys.argv[1:4]
S0 = 120000.; LX, LZ = -14018., -3835.; CUT, N = 60000., 2048      # the landing site, metres east/south of the mosaic centre
a = np.load(O); ok = np.isfinite(a); n = a.shape[0]
a = np.where(ok, a, 0.); a = np.where(ok, a, ndimage.gaussian_filter(a, 20) / np.maximum(ndimage.gaussian_filter(ok * 1., 20), 1e-6))
c0, r0 = (LX / S0 + .5) * n, (LZ / S0 + .5) * n; k = CUT / S0 * n / 2
a = a[int(round(r0 - k)):int(round(r0 + k)), int(round(c0 - k)):int(round(c0 + k))]
a = ndimage.zoom(a, N / a.shape[0], order=1)
lo, hi = np.percentile(a, [.3, 99.7]); L = np.clip((a - lo) / (hi - lo), 0, 1)
ph = np.asarray(Image.open(PHOTO).convert('RGB'), dtype=np.float32); pl = ph.mean(2)
qs = np.percentile(pl, np.linspace(0, 100, 65)); bins = np.clip(np.searchsorted(qs, pl) - 1, 0, 63)
pal = np.array([ph[bins == b].mean(0) for b in range(64)])
ranks = np.argsort(np.argsort(L.ravel())).reshape(L.shape) / L.size
idx = ranks * 63; i0 = np.floor(idx).astype(int); f = (idx - i0)[..., None]; i1 = np.minimum(i0 + 1, 63)
Image.fromarray(np.clip(pal[i0] * (1 - f) + pal[i1] * f, 0, 255).astype(np.uint8)).save(OUT, quality=88, optimize=True, progressive=True)
