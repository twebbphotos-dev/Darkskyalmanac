# Pack the crater mosaics for the viewer:
#   models/jezero.bin  heights in quarter-metres relative to the landing site, Int16, M x M, north up
#   models/jezero.jpg  CTX orthoimage mosaic, coloured with the tones of a true-colour orbital photo
import numpy as np, sys
from PIL import Image
from scipy import ndimage
D, M, OUTB, OUTJ, PHOTO, TEXN = sys.argv[1], int(sys.argv[2]), sys.argv[3], sys.argv[4], sys.argv[5], int(sys.argv[6])
S = float(sys.argv[7]); R = 3396190.; LAT0, LON0 = float(sys.argv[8]), float(sys.argv[9]); LAT1, LON1 = 18.4447, 77.4508
fill = lambda a: a[tuple(ndimage.distance_transform_edt(~np.isfinite(a), return_distances=False, return_indices=True))]
h = fill(np.load(D + '/dtm.npy')); N = h.shape[0]
sx = (LON1 - LON0) * np.pi / 180 * R * np.cos(np.radians(LAT0)); sz = -(LAT1 - LAT0) * np.pi / 180 * R
print('landing site at x %.0f m, z %.0f m from the crater centre' % (sx, sz))
site = ndimage.map_coordinates(h, [[(sz + S / 2) / S * N - .5], [(sx + S / 2) / S * N - .5]], order=1)[0]
print('landing site elevation %.1f m' % site)
hs = ndimage.zoom(ndimage.gaussian_filter(h, N / M * .5), M / N, order=1) - site
print('relative range %.0f .. %.0f m' % (hs.min(), hs.max()))
q = np.clip(np.round(hs * 4), -32767, 32767).astype('<i2'); q.tofile(OUTB)
o = fill(np.load(D + '/ortho.npy'))
o = ndimage.zoom(o, TEXN / N, order=1) if TEXN != N else o
lo, hi = np.percentile(o, [.3, 99.7]); L = np.clip((o - lo) / (hi - lo), 0, 1)
# colour by brightness rank, using the photo's own palette (average colour at each brightness)
ph = np.asarray(Image.open(PHOTO).convert('RGB'), dtype=np.float32); pl = ph.mean(2)
qs = np.percentile(pl, np.linspace(0, 100, 65)); bins = np.clip(np.searchsorted(qs, pl) - 1, 0, 63)
pal = np.array([ph[bins == b].mean(0) if (bins == b).any() else [0, 0, 0] for b in range(64)])
ranks = np.argsort(np.argsort(L.ravel())).reshape(L.shape) / L.size        # histogram-match to the photo
idx = ranks * 63; i0 = np.floor(idx).astype(int); f = (idx - i0)[..., None]; i1 = np.minimum(i0 + 1, 63)
rgb = pal[i0] * (1 - f) + pal[i1] * f
Image.fromarray(np.clip(rgb, 0, 255).astype(np.uint8)).save(OUTJ, quality=86, optimize=True, progressive=True)
print('palette dark', pal[2].round(), 'mid', pal[32].round(), 'bright', pal[61].round())
