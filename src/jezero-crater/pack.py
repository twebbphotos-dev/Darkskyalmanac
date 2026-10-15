# Pack the crater mosaics for the viewer:
#   models/jezero.bin  heights in quarter-metres relative to the landing site, Int16, M x M, north up
#   models/jezero.jpg  CTX orthoimage mosaic, coloured with the tones of a true-colour orbital photo
import numpy as np, sys
from PIL import Image
from scipy import ndimage
D, M, OUTB, OUTJ, PHOTO, TEXN = sys.argv[1], int(sys.argv[2]), sys.argv[3], sys.argv[4], sys.argv[5], int(sys.argv[6])
S = float(sys.argv[7]); R = 3396190.; LAT0, LON0 = float(sys.argv[8]), float(sys.argv[9]); LAT1, LON1 = 18.4447, 77.4508; CROP = float(sys.argv[11]) if len(sys.argv) > 11 else None; OX, OZ = (float(sys.argv[12]), float(sys.argv[13])) if len(sys.argv) > 13 else (0., 0.)
def fill(a):      # gaps (where no stereo pair reaches) filled smoothly from the surroundings: a mask-weighted image pyramid
  ok = np.isfinite(a); v = np.where(ok, a, 0.).astype(np.float64); w = ok.astype(np.float64); lv = [(v, w)]
  while min(v.shape) > 4:
    v = ndimage.zoom(ndimage.gaussian_filter(v, 1), .5, order=1); w = ndimage.zoom(ndimage.gaussian_filter(w, 1), .5, order=1); lv.append((v, w))
  est = lv[-1][0] / np.maximum(lv[-1][1], 1e-9)
  for v, w in reversed(lv[:-1]):
    up = ndimage.zoom(est, np.array(v.shape) / np.array(est.shape), order=1); k = np.clip(w * 4, 0, 1)
    est = np.where(w > 1e-6, v / np.maximum(w, 1e-9), up) * k + up * (1 - k)
  return np.where(ok, a, est).astype(np.float32)
def crop(a):      # keep a CROP-metre square centred OX m east and OZ m south of the mosaic's centre
  if not CROP: return a
  n = a.shape[0]; k = int(round(n * CROP / S0 / 2)); ci = n // 2 + int(round(OX / S0 * n)); cj = n // 2 + int(round(OZ / S0 * n)); return a[cj - k:cj + k, ci - k:ci + k]
S0 = S; raw = np.load(D + '/dtm.npy'); valid = crop(np.isfinite(raw)); h = crop(fill(raw)); N = h.shape[0]; S = S0 * N / raw.shape[0]
LAT0 -= OZ / (R * np.pi / 180); LON0 += OX / (R * np.pi / 180 * np.cos(np.radians(LAT0 + OZ / (R * np.pi / 180))))
print('square %.0f m, %d px, centre %.5f N %.5f E' % (S, N, LAT0, LON0))
sx = (LON1 - LON0) * np.pi / 180 * R * np.cos(np.radians(LAT0)); sz = -(LAT1 - LAT0) * np.pi / 180 * R
print('landing site at x %.0f m, z %.0f m from the crater centre' % (sx, sz))
site = ndimage.map_coordinates(h, [[(sz + S / 2) / S * N - .5], [(sx + S / 2) / S * N - .5]], order=1)[0]
print('landing site elevation %.1f m' % site)
hs = ndimage.zoom(ndimage.gaussian_filter(h, N / M * .5), M / N, order=1) - site
print('relative range %.0f .. %.0f m' % (hs.min(), hs.max()))
q = np.clip(np.round(hs * 4), -32767, 32767).astype('<i2'); q.tofile(OUTB)
oraw = np.load(D + '/' + (sys.argv[10] if len(sys.argv) > 10 else 'ortho.npy')); of = fill(oraw); n0 = of.shape[0]
valid = ndimage.binary_closing(crop(np.isfinite(oraw)), iterations=20)      # photographed ground, ignoring pinholes
lo, hi = np.percentile(of, [.3, 99.7]); Lf = np.clip((of - lo) / (hi - lo), 0, 1)
# colour by brightness rank, using the photo's own palette (average colour at each brightness); done over the whole mosaic
ph = np.asarray(Image.open(PHOTO).convert('RGB'), dtype=np.float32); pl = ph.mean(2)
qs = np.percentile(pl, np.linspace(0, 100, 65)); bins = np.clip(np.searchsorted(qs, pl) - 1, 0, 63)
pal = np.array([ph[bins == b].mean(0) if (bins == b).any() else [0, 0, 0] for b in range(64)])
ranks = np.argsort(np.argsort(Lf.ravel())).reshape(Lf.shape) / Lf.size        # histogram-match to the photo
idx = ranks * 63; i0 = np.floor(idx).astype(int); fr = (idx - i0)[..., None]; i1 = np.minimum(i0 + 1, 63)
rgbF = (pal[i0] * (1 - fr) + pal[i1] * fr).astype(np.float32); del ranks, idx, i0, i1, fr
lowF = np.stack([ndimage.gaussian_filter(rgbF[..., c], 2500. / (S0 / n0)) for c in range(3)], -1)      # the ground's colour at a few km scale
rgb = crop(rgbF); low = crop(lowF)
if TEXN != rgb.shape[0]: z = TEXN / rgb.shape[0]; rgb = ndimage.zoom(rgb, (z, z, 1), order=1); low = ndimage.zoom(low, (z, z, 1), order=1)
T = rgb.shape[0]; cell = S / N      # where no stereo pair reaches, and at the square's edge, fade into that broad colour, which the viewer's skirt continues
dd = ndimage.distance_transform_edt(np.pad(valid, 1))[1:-1, 1:-1] * cell; dd = ndimage.zoom(ndimage.gaussian_filter(dd, 6), T / N, order=1)
f = 1 - np.clip(dd / 4000., 0, 1); f = (f * f * (3 - 2 * f))[..., None]
mean = rgbF.reshape(-1, 3).mean(0); print('mean ground colour #%02x%02x%02x' % tuple(int(round(v)) for v in mean))
rgb = rgb * (1 - f) + low * f
Image.fromarray(np.clip(rgb, 0, 255).astype(np.uint8)).save(OUTJ, quality=90, optimize=True, progressive=True)
# the skirt: WIDE metres square, centred on the square, at low resolution; the mosaic's broad colour fading to the mean beyond it
WIDE, WN = 360000., 512; OUTW = OUTJ.replace('.jpg', '-wide.jpg')
c = (np.arange(WN) + .5) / WN * WIDE - WIDE / 2; XX, ZZ = np.meshgrid(c + OX, c + OZ)      # in the mosaic's own frame
u = (XX / S0 + .5) * n0 - .5; v = (ZZ / S0 + .5) * n0 - .5
out = np.clip(np.maximum(np.abs(XX), np.abs(ZZ)) - (S0 / 2 - 15000), 0, None); w = np.clip(1 - out / 60000., 0, 1); w = (w * w * (3 - 2 * w))[..., None]
sm = np.stack([ndimage.map_coordinates(ndimage.gaussian_filter(lowF[..., k], 8), [v, u], order=1, mode='nearest') for k in range(3)], -1)
Image.fromarray(np.clip(sm * w + mean * (1 - w), 0, 255).astype(np.uint8)).save(OUTW, quality=88)
print('palette dark', pal[2].round(), 'mid', pal[32].round(), 'bright', pal[61].round())
