# Small-scale relief for the rover levels, from the HiRISE pictures themselves (photoclinometry).
#
#   python3 src/jezero-crater/relief.py y2022 y2023 y2024 y2025 y2026      (after site.py)
#
# The elevation models are too coarse for the sand ripples and small dunes, but the pictures show
# them plainly, because each slope is brighter the more it faces the Sun. Brightness against its
# own surroundings (about 12 m) gives the slope toward the Sun; integrating that slope along the
# Sun's direction gives height. The game lights the result with its own Sun, set in the same
# quarter of the sky as the pictures' afternoon Sun, so the two agree.
#
# Writes rover/img/NAME_relief.jpg: 2048 px, 1 m, the same square as NAME_hr.jpg; grey 128 = 0,
# one level = RELIEF_M / 127 metres. Only relief finer than ~30 m is kept: the elevation model
# has the rest, and at larger scales real light and dark ground would be read as slopes.
import sys
import numpy as np
from PIL import Image
from scipy import ndimage

SUN_AZ = 265        # degrees from north, clockwise: fitted against the elevation at 263-275 for the 2022 and 2023 pictures
INCIDENCE = 50      # degrees from overhead, typical of HiRISE's mid-afternoon pictures
RELIEF_M = 1.0      # the picture's range, ± metres

def relief(name):
  img = np.asarray(Image.open(f'rover/img/{name}_hr.jpg').convert('RGB'), np.float64) @ [0.3, 0.55, 0.15]
  n = img.shape[0]
  s = np.clip(img / np.maximum(4, ndimage.gaussian_filter(img, 12)) - 1, -0.6, 0.6)      # against ~12 m surroundings: ripple-scale shading, not light and dark ground
  s = ndimage.gaussian_filter(s, 1.0)                  # pixel noise, integrated, would streak
  slope = -s / np.tan(np.radians(INCIDENCE))          # rate of rise toward the Sun: a slope facing it is bright, so it falls toward the Sun
  az = np.radians(SUN_AZ)
  ux, uz = np.sin(az), -np.cos(az)                     # toward the Sun; image columns run east, rows south
  fz, fx = np.meshgrid(np.fft.fftfreq(n), np.fft.fftfreq(n), indexing='ij')
  D = 2j * np.pi * (fx * ux + fz * uz)                 # derivative along the Sun's direction
  eps = 2 * np.pi / 40
  H = np.fft.fft2(slope) * np.conj(D) / (np.abs(D) ** 2 + eps ** 2)
  h = np.real(np.fft.ifft2(H))
  h -= ndimage.gaussian_filter(h, 12)                  # long wavelengths are poorly constrained, and the elevation model has them
  h = ndimage.gaussian_filter(h, 0.7)
  q = np.clip(np.round(128 + h / RELIEF_M * 127), 0, 255).astype(np.uint8)
  Image.fromarray(q, 'L').save(f'rover/img/{name}_relief.jpg', quality=92)      # smooth, so JPEG keeps it well at a third of the PNG's size
  print(f'{name}: relief ±{np.percentile(np.abs(h), 99):.2f} m (99th percentile), clipped {100 * np.mean(np.abs(h) > RELIEF_M):.2f}%')

for name in sys.argv[1:]:
  relief(name)
