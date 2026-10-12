#!/usr/bin/env python3
"""Build the Star ID regression set from tests/solver/frames/.

Writes raw RGBA buffers plus manifest.json into tests/solver/.cache/ (git-ignored).
Each source frame is downscaled to the app's 3000 px working size, exactly as
app.js does, and the real-world frames also get "edited" variants: a hard
stretch with clipped whites, a rotate-and-crop, a resize with heavy JPEG, and an
S-curve with vignette. A pure-noise frame and a very dense frame (~240k star
candidates, the v3.51 call-stack crash) check for false solves and crashes.

    python3 tests/solver/make_variants.py
    node tests/solver/regress.mjs            # then run the solver over all of it
"""
import io, json, os, glob
import numpy as np
from PIL import Image, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
FR, OUT = os.path.join(HERE, 'frames'), os.path.join(HERE, '.cache')
os.makedirs(OUT, exist_ok=True)
man = []

def save(im, name):
    im = im.convert('RGBA')
    open(os.path.join(OUT, name + '.rgba'), 'wb').write(im.tobytes())
    man.append([name, im.size[0], im.size[1]])

def load(path):
    im = Image.open(path).convert('RGB')
    s = min(1, 3000 / max(im.size))                     # app.js MAX_EDGE
    if s < 1: im = im.resize((round(im.size[0] * s), round(im.size[1] * s)), Image.LANCZOS)
    return im

EDIT = {'andromeda-135mm', 'orion-300mm', 'sagittarius-50mm', 'orion-user-362mm', 'heart-soul-edited'}
for path in sorted(glob.glob(os.path.join(FR, '*'))):
    n = os.path.splitext(os.path.basename(path))[0]
    im = load(path); save(im, n)
    if n not in EDIT: continue
    W, H = im.size
    a = np.asarray(im).astype(float) / 255
    # hard arcsinh stretch, whites clipped at 75%, saturation boost
    bp = np.percentile(a, 25, axis=(0, 1)); x = np.clip((a - bp) / (1 - bp), 0, 1)
    y = np.clip(np.arcsinh(60 * x) / np.arcsinh(60) / 0.75, 0, 1)
    m = y.mean(2, keepdims=True); y = np.clip(m + (y - m) * 1.6, 0, 1)
    save(Image.fromarray((y * 255).astype(np.uint8)), n + '_str')
    # rotate 17 deg and crop to the middle 76%
    r = im.rotate(17, resample=Image.BICUBIC).crop((int(W * .12), int(H * .12), int(W * .88), int(H * .88)))
    save(r, n + '_rot')
    # resize to 1600 px and JPEG q65
    s = min(1, 1600 / max(W, H)); j = im.resize((int(W * s), int(H * s)), Image.LANCZOS)
    b = io.BytesIO(); j.save(b, 'JPEG', quality=65); save(Image.open(b), n + '_jpg')
    # S-curve with vignette
    c = np.clip((a - 0.08) / 0.8, 0, 1); c = c * c * (3 - 2 * c)
    yy, xx = np.mgrid[0:H, 0:W]; v = 1 - 0.25 * (((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2)
    save(Image.fromarray((np.clip(c * v[..., None] + 0.03, 0, 1) * 255).astype(np.uint8)), n + '_curve')

rng = np.random.default_rng(1)
# cloudy noise with speckles: must NOT solve
W, H = 2400, 1600
a = rng.normal(40, 12, (H, W)) + np.linspace(0, 60, W)[None, :]
cl = np.asarray(Image.fromarray((rng.random((H // 8, W // 8)) * 255).astype(np.uint8)).resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(6))).astype(float)
a = np.clip(a + np.clip(cl * 3.5 - 420, 0, 120), 0, 255); a[rng.random((H, W)) > 0.9985] = 230
save(Image.fromarray(a.astype(np.uint8)).convert('RGB'), 'noise')
# very dense frame: must not crash
W, H = 3000, 2000
a = rng.normal(30, 3, (H, W)); m = rng.random((H, W)) < 0.04; a[m] += rng.uniform(20, 200, m.sum())
save(Image.fromarray(np.clip(a, 0, 255).astype(np.uint8)).convert('RGB'), 'dense')

json.dump(man, open(os.path.join(OUT, 'manifest.json'), 'w'))
print(len(man), 'frames ->', OUT)
