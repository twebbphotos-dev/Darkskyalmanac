#!/usr/bin/env python3
"""
Render a realistic synthetic sub as a JPEG with EXIF, for exercising the app
end to end in a browser. Not part of the shipped tool.

  python3 tools/make_test_frame.py --focal 300 --ra 5.59 --dec -5.39 --out m42.jpg
"""

import argparse, csv, math, os, struct, sys
import numpy as np
from PIL import Image
import piexif

HERE = os.path.dirname(os.path.abspath(__file__))
CAT = os.path.normpath(os.path.join(HERE, "..", "catalog"))


def load_stars():
    with open(os.path.join(CAT, "stars.bin"), "rb") as fh:
        buf = fh.read()
    assert buf[:4] == b"SPS1"
    n = struct.unpack("<I", buf[4:8])[0]
    o = 8
    ra = np.frombuffer(buf, "<f4", n, o); o += 4 * n
    dec = np.frombuffer(buf, "<f4", n, o); o += 4 * n
    mag = np.frombuffer(buf, "<i2", n, o) / 100.0
    return ra.astype(np.float64), dec.astype(np.float64), mag.astype(np.float64)


def rot(ra, dec, roll_deg):
    b = np.array([math.cos(dec) * math.cos(ra), math.cos(dec) * math.sin(ra), math.sin(dec)])
    n = np.array([-b[0] * b[2], -b[1] * b[2], 1 - b[2] ** 2])
    nn = np.linalg.norm(n)
    n = np.array([1.0, 0, 0]) if nn < 1e-9 else n / nn
    x0 = np.cross(n, b)
    R0 = np.vstack([x0, n, b])
    p = -math.radians(roll_deg)
    Rz = np.array([[math.cos(p), -math.sin(p), 0], [math.sin(p), math.cos(p), 0], [0, 0, 1]])
    return Rz @ R0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--focal", type=float, default=300)
    ap.add_argument("--sensor", type=float, default=35.9)
    ap.add_argument("--width", type=int, default=3000)
    ap.add_argument("--height", type=int, default=2000)
    ap.add_argument("--ra", type=float, default=5.5881, help="hours")
    ap.add_argument("--dec", type=float, default=-5.391, help="degrees")
    ap.add_argument("--roll", type=float, default=14.0)
    ap.add_argument("--fwhm", type=float, default=3.2)
    ap.add_argument("--sky", type=float, default=24.0)
    ap.add_argument("--noise", type=float, default=2.6)
    ap.add_argument("--limit", type=float, default=9.0)
    ap.add_argument("--no-exif", action="store_true")
    ap.add_argument("--out", default="test-frame.jpg")
    a = ap.parse_args()

    W, H, F, SW = a.width, a.height, a.focal, a.sensor
    ra0, dec0 = math.radians(a.ra * 15), math.radians(a.dec)
    R = rot(ra0, dec0, a.roll)

    ra, dec, mag = load_stars()
    cd = np.cos(dec)
    V = np.stack([cd * np.cos(ra), cd * np.sin(ra), np.sin(dec)], axis=1)

    b = R[2]
    diag = 2 * math.atan(SW * math.hypot(W, H) / W / 2 / F)
    sel = (V @ b) > math.cos(diag / 2 + 0.02)
    V, M = V[sel], mag[sel]

    cam = V @ R.T
    ok = cam[:, 2] > 1e-6
    cam, M = cam[ok], M[ok]
    mm_per_px = SW / W
    px = W / 2 + (cam[:, 0] / cam[:, 2]) * F / mm_per_px
    py = H / 2 - (cam[:, 1] / cam[:, 2]) * F / mm_per_px

    img = np.full((H, W), 0.0, np.float32)
    yy, xx = np.mgrid[0:H, 0:W]
    img += a.sky * (0.78 + 0.44 * (xx / W) * (1 - 0.35 * yy / H))
    del yy, xx

    beta = 2.5
    alpha = a.fwhm / (2 * math.sqrt(2 ** (1 / beta) - 1))
    rad = max(4, int(math.ceil(alpha * 7)))
    norm = (beta - 1) / (math.pi * alpha * alpha)
    dy, dx = np.mgrid[-rad:rad + 1, -rad:rad + 1]

    drawn = 0
    for x, y, m in zip(px, py, M):
        if m > a.limit or x < -rad or y < -rad or x > W + rad or y > H + rad:
            continue
        ix, iy = int(round(x)), int(round(y))
        x0, x1 = max(0, ix - rad), min(W, ix + rad + 1)
        y0, y1 = max(0, iy - rad), min(H, iy + rad + 1)
        if x1 <= x0 or y1 <= y0:
            continue
        sx0, sy0 = x0 - (ix - rad), y0 - (iy - rad)
        ex = dx[sy0:sy0 + (y1 - y0), sx0:sx0 + (x1 - x0)] + ix - x
        ey = dy[sy0:sy0 + (y1 - y0), sx0:sx0 + (x1 - x0)] + iy - y
        peak = 1.8e5 * (10 ** (-0.4 * (m - 2.0))) * norm
        img[y0:y1, x0:x1] += peak * (1 + (ex * ex + ey * ey) / (alpha * alpha)) ** (-beta)
        drawn += 1

    rng = np.random.default_rng(7)
    img += rng.normal(0, a.noise, img.shape)
    for _ in range(40):                       # hot pixels
        img[rng.integers(0, H), rng.integers(0, W)] += 140

    out = np.clip(img, 0, 255).astype(np.uint8)
    pic = Image.fromarray(np.stack([out] * 3, axis=2), "RGB")

    if a.no_exif:
        pic.save(a.out, quality=92)
    else:
        def rat(v, d=100):
            return (int(round(v * d)), d)
        ex = {
            "0th": {
                piexif.ImageIFD.Make: b"SONY",
                piexif.ImageIFD.Model: b"ILCE-7M3",
            },
            "Exif": {
                piexif.ExifIFD.FocalLength: rat(F),
                piexif.ExifIFD.FocalLengthIn35mmFilm: int(round(F * 36 / SW)),
                piexif.ExifIFD.DateTimeOriginal: b"2026:10:09 03:42:11",
                piexif.ExifIFD.OffsetTimeOriginal: b"-06:00",
                piexif.ExifIFD.ExposureTime: (8, 1),
                piexif.ExifIFD.ISOSpeedRatings: 3200,
                piexif.ExifIFD.FNumber: (56, 10),
            },
            "GPS": {}, "1st": {}, "thumbnail": None,
        }
        pic.save(a.out, quality=92, exif=piexif.dump(ex))

    print(f"{a.out}: {W}x{H}, {drawn} stars, {F}mm, "
          f"centre {a.ra:.4f}h {a.dec:+.3f}deg, roll {a.roll}deg, "
          f"{os.path.getsize(a.out)/1e6:.2f} MB")


if __name__ == "__main__":
    main()
