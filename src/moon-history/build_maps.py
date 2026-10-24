# Data for the Moon history animation (moon-history.js), from the LROC WAC global mosaic (wac_global.py):
#   img/moon-history/today.jpg   1024 x 512 albedo, equirectangular, 0° longitude at the center, east to the right
#   img/moon-history/premare.jpg the same before the maria: dark mare basalt replaced by highland brightness, with
#                                highland texture borrowed from the same latitude 180° away (mostly far-side highlands)
#   img/moon-history/flood.png   512 x 256: when each mare pixel flooded, 0 = 4.0 billion years ago … 250 = 1.0, 255 = never
# Mare ages are rounded crater-count model ages by basin (Hiesinger and others, 2011 and earlier): illustrative, not a map
# of individual flows. Each basin floods from its low middle outward.
import sys, numpy as np
from PIL import Image, ImageFilter
from scipy.ndimage import gaussian_filter
src, out = sys.argv[1:3]
a = np.asarray(Image.open(src).convert('L')).astype(np.float32) / 255      # 2048 x 1024, 0..360 E
a = np.roll(a, a.shape[1] // 2, axis=1)                                      # -180..180, 0 in the middle
im = Image.fromarray((a * 255).astype(np.uint8)).resize((1024, 512), Image.LANCZOS); a = np.asarray(im).astype(np.float32) / 255
H, W = a.shape; lat = (0.5 - (np.arange(H) + 0.5) / H) * 180; lon = ((np.arange(W) + 0.5) / W - 0.5) * 360
LAT, LON = np.meshgrid(lat, lon, indexing='ij')
# the mosaic's polar rows are smeared: fade them to a blurred version
blur = lambda x, r: gaussian_filter(x.astype(np.float32), r, mode=('reflect', 'wrap'))
pol = np.clip((np.abs(LAT) - 80) / 6, 0, 1); a = a * (1 - pol) + blur(a, 6) * pol
lo = blur(a, 4)
mare = (lo < 0.25).astype(np.float32)
# keep the big connected dark plains (the maria), not dark crater floors on the far side
near = (np.abs(LON) < 100)
mare *= np.where(near, 1, (lo < 0.2)) * (np.abs(LAT) < 68)
m = blur(mare, 2.5); mare = (m > 0.5).astype(np.float32)
print('mare fraction near side', mare[:, (np.abs(lon) < 90)].mean(), 'far', mare[:, (np.abs(lon) > 90)].mean())
# pre-mare: inpaint the low-frequency brightness from the surroundings, then add highland detail from 180° away
w = 1 - blur(mare, 1.5) ** 0.5; w = np.clip(w, 0, 1); hl = np.zeros_like(a)      # normalized convolution, coarse to fine
for r in (64, 32, 16, 8, 4):
  num, den = blur(a * w, r), blur(w, r) + 1e-6; fill = num / den; hl = np.where(den > 0.02, fill, hl)
hl = a * w + hl * (1 - w)
base = blur(hl, 8)
detail = a - blur(a, 8); detail_far = np.roll(detail, W // 2, axis=1)
m2 = blur(mare, 3)
pre = a * (1 - m2) + (base + detail_far) * m2
pre = np.clip(pre, 0, 1)
Image.fromarray((a * 255).astype(np.uint8)).save(out + '/today.jpg', quality=88)
Image.fromarray((pre * 255).astype(np.uint8)).save(out + '/premare.jpg', quality=88)
# flood times
C = [(31.4, 8.5, 3.75, 'Tranquillitatis'), (17.5, 28.0, 3.6, 'Serenitatis'), (51.3, -7.8, 3.55, 'Fecunditatis'), (35.5, -15.2, 3.7, 'Nectaris'),
     (59.1, 17.0, 3.5, 'Crisium'), (-15.6, 32.8, 3.3, 'Imbrium'), (-17.3, -21.3, 3.4, 'Nubium'), (-39.6, -24.4, 3.45, 'Humorum'),
     (1.4, 56.0, 3.5, 'Frigoris'), (3.6, 13.3, 3.6, 'Vaporum'), (-23.0, -10.0, 3.3, 'Cognitum'), (-30.9, 7.5, 3.4, 'Insularum'),
     (-57.4, 18.4, 3.0, 'Procellarum'), (-62.0, 30.0, 2.2, 'western Procellarum'), (-67.7, 31.8, 1.4, 'near Lichtenberg'), (-25.0, 30.0, 2.8, 'western Imbrium'),
     (87.0, 2.0, 3.6, 'Smythii'), (147.9, 27.3, 3.5, 'Moscoviense'), (128.9, -20.4, 3.4, 'Tsiolkovsky')]
def gc(lo1, la1, lo2, la2):
  p1, p2, l1, l2 = np.radians(la1), np.radians(la2), np.radians(lo1), np.radians(lo2)
  return np.degrees(np.arccos(np.clip(np.sin(p1) * np.sin(p2) + np.cos(p1) * np.cos(p2) * np.cos(l1 - l2), -1, 1)))
D = np.stack([gc(LON, LAT, c[0], c[1]) for c in C]); k = D.argmin(0); dmin = D.min(0)
age = np.array([c[2] for c in C])[k] + 0.12 - 0.012 * np.minimum(dmin, 20) + (np.random.default_rng(3).random(D.shape[1:]) - 0.5) * 0.03
t = np.where(mare > 0, np.clip((4.0 - age) / 3.0 * 250, 0, 250), 255).astype(np.uint8)
Image.fromarray(t).resize((512, 256), Image.NEAREST).save(out + '/flood.png', optimize=True)
print('ok')
