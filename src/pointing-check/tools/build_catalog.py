#!/usr/bin/env python3
"""
Build compact binary star catalog + multi-scale geometric-hash quad indices
for the Star Pointer plate solver.

Source: HYG database v4.1 (Hipparcos/Yale BSC/Gliese merge).

Outputs into ../catalog/:
  stars.bin        packed star table, sorted by declination
  names.json       proper names / Bayer-Flamsteed designations by star index
  quads_A..D.bin   quad indices at four angular scales
  manifest.json    layer parameters + file sizes

Quad hashing follows the astrometry.net geometric-hash scheme, but each quad is
projected into a tangent plane centred on that quad (not on a global or image
centre). The solver does exactly the same thing with the image's unit vectors,
so hash codes agree at any field size without projection error.
"""

import csv, json, math, os, struct, sys
import numpy as np
from scipy.spatial import cKDTree
from itertools import combinations

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "catalog"))
SRC = "/home/claude/astronexus/hyg-database/hyg/CURRENT/hygdata_v41.csv"
DSO_SRC = "/home/claude/astronexus/hyg-database/misc/dso.csv"

EPOCH = 2026.0          # propagate proper motion to here
CAT_MAGLIM = 9.0        # full star table limit (Hipparcos completeness)

# Quad index layers. dmin/dmax are quad diameters (the A-B separation) in degrees.
# maglim picks the star subset so each layer has sane star density for its scale.
# `density` is the key parameter: index stars kept per square degree, applied
# per sky cell rather than as a global magnitude cut.
#
# A solve requires the image to independently rediscover one of the catalog's
# exact 4-star sets. A plain magnitude limit breaks that in the Milky Way: a
# dense field holds far more mag-9 stars than the solver will ever look at, so
# the catalog's quads sit below the image's brightest-N cut and nothing matches.
# Capping per cell makes "brightest in this patch of sky" mean the same thing
# on both sides at any galactic latitude, which is what lets the two agree.
#
# Densities are set so a frame at each layer's target focal length holds ~50-70
# index stars, matching the number of detections the solver feeds to quad
# generation.
#
# dmax is held to roughly 0.4x the short side of the frame each layer targets.
# A quad only counts if its whole circle lands inside the rectangle, so quads
# sized near the frame's short dimension almost never fit: at dmax 4.0 deg in a
# 4.58 deg frame, the number of usable quads swung between 221 and zero
# depending on where the frame fell. Keeping quads compact keeps that count
# stable, which matters far more than having more of them.
LAYERS = [
    dict(name="A", maglim=9.0, dmin=0.30, dmax=1.6,  density=2.1,   target=260000,
         nb=8, inner=5, per_anchor=10),
    dict(name="B", maglim=8.5, dmin=0.70, dmax=3.8,  density=0.42,  target=150000,
         nb=8, inner=5, per_anchor=10),
    dict(name="C", maglim=7.0, dmin=1.80, dmax=9.0,  density=0.060, target=45000,
         nb=10, inner=5, per_anchor=16),
    dict(name="D", maglim=5.5, dmin=4.00, dmax=20.0, density=0.015, target=14000,
         nb=10, inner=5, per_anchor=16),
]

CODE_LO, CODE_HI = -0.25, 1.25   # hash code quantisation range -> uint16
R_CIRCLE = math.sqrt(0.5)        # radius of the AB-diameter circle in code frame


# ---------------------------------------------------------------- load catalog

def load_stars():
    ra, dec, mag, names = [], [], [], []
    with open(SRC, newline="") as fh:
        for r in csv.DictReader(fh):
            if r["id"] == "0":          # Sol
                continue
            try:
                m = float(r["mag"])
            except ValueError:
                continue
            if m > CAT_MAGLIM:
                continue
            try:
                a = float(r["rarad"]); d = float(r["decrad"])
            except ValueError:
                continue
            # proper motion (radians/yr) -> epoch
            try:
                pmra = float(r["pmrarad"] or 0.0); pmdec = float(r["pmdecrad"] or 0.0)
            except ValueError:
                pmra = pmdec = 0.0
            # pmrarad is mu_alpha* (already includes cos dec), so divide it back out
            dt = EPOCH - 2000.0
            cd = max(1e-4, abs(math.cos(d)))
            a += pmra * dt / cd
            d += pmdec * dt
            if d > math.pi / 2:
                d = math.pi - d
            elif d < -math.pi / 2:
                d = -math.pi - d
            ra.append(a); dec.append(d); mag.append(m)
            proper = r["proper"].strip()
            bf = r["bf"].strip()
            con = r["con"].strip()
            names.append((proper, bf, con))
    ra = np.array(ra); dec = np.array(dec); mag = np.array(mag, dtype=np.float64)
    # normalise RA into [0, 2pi)
    ra = np.mod(ra, 2 * math.pi)
    order = np.argsort(dec)                      # sort by dec for fast band queries
    ra, dec, mag = ra[order], dec[order], mag[order]
    names = [names[i] for i in order]
    return ra, dec, mag, names


def unit_vectors(ra, dec):
    cd = np.cos(dec)
    return np.stack([cd * np.cos(ra), cd * np.sin(ra), np.sin(dec)], axis=1)


# ------------------------------------------------------------------ quad hash

def quad_code(vecs):
    """vecs: (4,3) unit vectors. Returns (code4, ab_deg) or None if degenerate."""
    # widest pair -> A,B  (smallest dot product == largest angle)
    best, bi, bj = 2.0, 0, 1
    for i in range(4):
        for j in range(i + 1, 4):
            d = float(np.dot(vecs[i], vecs[j]))
            if d < best:
                best, bi, bj = d, i, j
    A, B = vecs[bi], vecs[bj]
    rest = [k for k in range(4) if k not in (bi, bj)]
    C, D = vecs[rest[0]], vecs[rest[1]]

    ab = math.degrees(math.acos(max(-1.0, min(1.0, best))))

    # tangent plane centred on the quad itself
    centre = A + B
    n = np.linalg.norm(centre)
    if n < 1e-12:
        return None
    centre = centre / n
    up = np.array([0.0, 0.0, 1.0])
    if abs(centre[2]) > 0.95:
        up = np.array([0.0, 1.0, 0.0])
    e1 = np.cross(up, centre); e1 /= np.linalg.norm(e1)
    e2 = np.cross(centre, e1)

    def proj(v):
        w = float(np.dot(v, centre))
        if w <= 1e-6:
            return None
        p = v / w
        return np.array([float(np.dot(p, e1)), float(np.dot(p, e2))])

    pa, pb, pc, pd = proj(A), proj(B), proj(C), proj(D)
    if pa is None or pb is None or pc is None or pd is None:
        return None

    # similarity transform: A -> (0,0), B -> (1,1)
    dvec = pb - pa
    dl = math.hypot(dvec[0], dvec[1])
    if dl < 1e-12:
        return None
    s = math.sqrt(2.0) / dl
    th = math.atan2(dvec[1], dvec[0])
    rot = math.pi / 4.0 - th
    cr, sr = math.cos(rot) * s, math.sin(rot) * s

    def xf(p):
        q = p - pa
        return (cr * q[0] - sr * q[1], sr * q[0] + cr * q[1])

    xc, yc = xf(pc)
    xd, yd = xf(pd)

    # C and D must fall inside the circle with AB as diameter
    for (x, y) in ((xc, yc), (xd, yd)):
        if (x - 0.5) ** 2 + (y - 0.5) ** 2 > R_CIRCLE ** 2:
            return None

    # Canonical orientation: break the A/B and C/D swap symmetries. The star
    # order must follow the swaps, otherwise a matched code yields permuted
    # correspondences and verification fails.
    order = [bi, bj, rest[0], rest[1]]
    if xc + xd > 1.0:
        xc, yc, xd, yd = 1.0 - xc, 1.0 - yc, 1.0 - xd, 1.0 - yd
        order = [order[1], order[0], order[2], order[3]]
    if xc > xd:
        xc, yc, xd, yd = xd, yd, xc, yc
        order = [order[0], order[1], order[3], order[2]]

    code = (xc, yc, xd, yd)
    if any(c < CODE_LO or c > CODE_HI for c in code):
        return None
    return code, ab, tuple(order)


def quantise(c):
    v = int(round((c - CODE_LO) / (CODE_HI - CODE_LO) * 65535.0))
    return max(0, min(65535, v))


# ------------------------------------------------------------- quad generation

def sky_cells(vecs, cell_deg):
    """Coarse equal-ish-area cell id per star, for spreading quads over the sky."""
    dec = np.arcsin(np.clip(vecs[:, 2], -1, 1))
    ra = np.mod(np.arctan2(vecs[:, 1], vecs[:, 0]), 2 * math.pi)
    nb = max(2, int(round(180.0 / cell_deg)))
    band = np.clip(((dec + math.pi / 2) / math.pi * nb).astype(int), 0, nb - 1)
    out = np.zeros(len(vecs), dtype=np.int64)
    offs = 0
    for b in range(nb):
        lo = -math.pi / 2 + math.pi * b / nb
        hi = lo + math.pi / nb
        width = max(math.cos(lo), math.cos(hi))
        nra = max(1, int(round(360.0 * width / cell_deg)))
        sel = band == b
        out[sel] = offs + (ra[sel] / (2 * math.pi) * nra).astype(int) % nra
        offs += nra
    return out, offs


def build_layer(layer, ra, dec, mag, vecs):
    name = layer["name"]
    pool = np.where(mag <= layer["maglim"])[0]

    # Density cap: keep only the brightest stars per sky cell, so quad members
    # are always among the brightest in their patch regardless of how crowded
    # that patch is. Without this, Milky Way fields never solve.
    cell_deg = layer["dmax"]
    pcells, pncells = sky_cells(vecs[pool], cell_deg)
    keep_per_cell = max(6, int(round(layer["density"] * cell_deg * cell_deg)))
    order_mag = np.argsort(mag[pool], kind="stable")
    taken = np.zeros(pncells, dtype=np.int32)
    chosen = []
    for k in order_mag:
        c = pcells[k]
        if taken[c] >= keep_per_cell:
            continue
        taken[c] += 1
        chosen.append(pool[k])
    sub = np.array(sorted(chosen))
    print(f"  index stars {len(sub)} "
          f"({len(sub)/41252.96:.2f}/sqdeg, <={keep_per_cell} per {cell_deg}deg cell)")

    sv = vecs[sub]
    smag = mag[sub]
    tree = cKDTree(sv)

    dmin, dmax = layer["dmin"], layer["dmax"]
    # chord lengths for angular radii
    chord_max = 2.0 * math.sin(math.radians(dmax) / 2.0)
    chord_min = 2.0 * math.sin(math.radians(dmin) / 2.0)

    cells, ncells = sky_cells(sv, dmax)
    per_cell = max(2, int(math.ceil(layer["target"] / max(1, ncells))))
    cell_count = np.zeros(ncells, dtype=np.int32)

    order = np.argsort(smag)        # brightest first
    seen = set()
    codes, dists, idxs = [], [], []

    for ai in order:
        c = cells[ai]
        if cell_count[c] >= per_cell:
            continue
        nb = tree.query_ball_point(sv[ai], chord_max)
        if len(nb) < 4:
            continue
        nb = [n for n in nb if n != ai]
        if len(nb) < 3:
            continue

        dots = sv[nb] @ sv[ai]
        chord = np.sqrt(np.maximum(0.0, 2.0 - 2.0 * dots))
        # B is chosen nearest-first, not brightest-first. Picking the brightest
        # neighbour within dmax skews hard toward the outer edge of the search
        # radius (there is simply more sky out there), producing quads too wide
        # to fit in frame. The solver orders its candidates the same way.
        bcand = sorted(
            (k for k in range(len(nb)) if chord_min <= chord[k] <= chord_max),
            key=lambda k: chord[k],
        )
        bcand = [nb[k] for k in bcand]
        if not bcand:
            continue

        made = 0
        for bi in bcand[:layer["nb"]]:
            if cell_count[c] >= per_cell or made >= layer["per_anchor"]:
                break
            # stars inside the circle with A-B as diameter
            mid = sv[ai] + sv[bi]
            mn = np.linalg.norm(mid)
            if mn < 1e-12:
                continue
            mid = mid / mn
            rad = math.sqrt(max(0.0, 2.0 - 2.0 * float(np.dot(sv[ai], sv[bi])))) / 2.0
            inner = tree.query_ball_point(mid, rad * 0.995)
            inner = [n for n in inner if n not in (ai, bi)]
            if len(inner) < 2:
                continue
            inner.sort(key=lambda n: smag[n])
            for cd in combinations(inner[:layer["inner"]], 2):
                if cell_count[c] >= per_cell or made >= layer["per_anchor"]:
                    break
                quad = tuple(sorted((ai, bi, cd[0], cd[1])))
                if quad in seen:
                    continue
                res = quad_code(sv[list(quad)])
                if res is None:
                    seen.add(quad)
                    continue
                code, abdeg, perm = res
                if not (dmin <= abdeg <= dmax):
                    seen.add(quad)
                    continue
                seen.add(quad)
                # store global star indices in the permuted (A,B,C,D) order
                g = [int(sub[quad[p]]) for p in perm]
                codes.append([quantise(x) for x in code])
                dists.append(int(round(abdeg * 60.0)))
                idxs.append(g)
                cell_count[c] += 1
                made += 1

    if not codes:
        raise RuntimeError(f"layer {name}: no quads generated")

    codes = np.array(codes, dtype=np.uint16)
    dists = np.array(dists, dtype=np.uint16)
    idxs = np.array(idxs, dtype=np.uint32)

    # Sort by the first hash code. It is far more discriminating than the A-B
    # separation (a ~0.5% search window versus ~8%), so the solver scans an
    # order of magnitude fewer candidates per lookup and can afford to try many
    # more image quads. Separation is still checked, just inside the scan.
    o = np.argsort(codes[:, 0], kind="stable")
    codes, dists, idxs = codes[o], dists[o], idxs[o]

    path = os.path.join(OUT, f"quads_{name}.bin")
    with open(path, "wb") as fh:
        fh.write(b"SPQ2")
        fh.write(struct.pack("<I", len(dists)))
        fh.write(struct.pack("<ff", dmin, dmax))
        fh.write(dists.tobytes())
        fh.write(codes.tobytes())
        fh.write(idxs.tobytes())
    return dict(name=name, file=f"quads_{name}.bin", count=int(len(dists)),
                dmin=dmin, dmax=dmax, maglim=layer["maglim"],
                density=layer["density"], indexStars=int(len(sub)),
                bytes=os.path.getsize(path))


# ------------------------------------------------------------------- DSO table

# Common names for the catalogued objects that actually have one. The HYG DSO
# file carries designations but leaves `name` blank for nearly all Messiers.
COMMON = {
    "M 1": "Crab Nebula", "M 7": "Ptolemy Cluster", "M 8": "Lagoon Nebula",
    "M 11": "Wild Duck Cluster", "M 13": "Hercules Cluster",
    "M 16": "Eagle Nebula", "M 17": "Omega Nebula", "M 20": "Trifid Nebula",
    "M 24": "Sagittarius Star Cloud", "M 27": "Dumbbell Nebula",
    "M 31": "Andromeda Galaxy", "M 32": "Andromeda Satellite",
    "M 33": "Triangulum Galaxy", "M 34": "Spiral Cluster",
    "M 36": "Pinwheel Cluster", "M 39": "Cygnus Cluster",
    "M 41": "Little Beehive", "M 42": "Orion Nebula", "M 43": "De Mairan's Nebula",
    "M 44": "Beehive Cluster", "M 45": "Pleiades", "M 46": "Rosette Cluster",
    "M 51": "Whirlpool Galaxy", "M 57": "Ring Nebula", "M 63": "Sunflower Galaxy",
    "M 64": "Black Eye Galaxy", "M 65": "Leo Triplet", "M 76": "Little Dumbbell",
    "M 78": "Casper Nebula", "M 81": "Bode's Galaxy", "M 82": "Cigar Galaxy",
    "M 83": "Southern Pinwheel", "M 87": "Virgo A", "M 97": "Owl Nebula",
    "M 101": "Pinwheel Galaxy", "M 104": "Sombrero Galaxy",
    "M 108": "Surfboard Galaxy", "M 110": "Andromeda Satellite II",
    "NGC 869": "Double Cluster", "NGC 884": "Double Cluster",
    "NGC 7000": "North America Nebula", "NGC 6960": "Veil Nebula (west)",
    "NGC 6992": "Veil Nebula (east)", "NGC 7293": "Helix Nebula",
    "NGC 2237": "Rosette Nebula", "NGC 2264": "Christmas Tree Cluster",
    "NGC 2392": "Eskimo Nebula", "NGC 253": "Sculptor Galaxy",
    "NGC 5128": "Centaurus A", "NGC 3372": "Carina Nebula",
    "NGC 6888": "Crescent Nebula", "NGC 1499": "California Nebula",
    "NGC 2024": "Flame Nebula", "IC 434": "Horsehead Nebula",
    "IC 1396": "Elephant's Trunk", "IC 5146": "Cocoon Nebula",
    "IC 405": "Flaming Star Nebula", "NGC 281": "Pacman Nebula",
    "NGC 7380": "Wizard Nebula", "NGC 6543": "Cat's Eye Nebula",
    "NGC 4565": "Needle Galaxy", "NGC 5907": "Splinter Galaxy",
    "NGC 7635": "Bubble Nebula", "NGC 1952": "Crab Nebula",
}


def load_dsos():
    """Small set of notable deep-sky objects for 'what's in frame' labelling."""
    out = []
    if not os.path.exists(DSO_SRC):
        return out
    with open(DSO_SRC, newline="") as fh:
        for r in csv.DictReader(fh):
            try:
                ra_h = float(r.get("ra") or "")
                dec_d = float(r.get("dec") or "")
            except ValueError:
                continue
            mg = r.get("mag") or ""
            try:
                m = float(mg)
            except ValueError:
                m = 99.0
            name = (r.get("name") or "").strip()
            cat1 = (r.get("cat1") or "").strip()
            id1 = (r.get("id1") or "").strip()
            cat2 = (r.get("cat2") or "").strip()
            id2 = (r.get("id2") or "").strip()
            desig = f"{cat1} {id1}".strip() if cat1 else ""
            alt = f"{cat2} {id2}".strip() if cat2 else ""
            label = name or COMMON.get(desig) or COMMON.get(alt) or desig or alt
            if not label:
                continue
            # prefer the Messier/Caldwell designation as the short tag
            if cat2 in ("M", "C") and cat1 not in ("M", "C"):
                desig, alt = alt, desig
            # keep Messier/Caldwell/NGC brighter than 11, plus anything named
            keep = False
            if cat1 in ("M", "C") or cat2 in ("M", "C"):
                keep = True
            elif m <= 10.5:
                keep = True
            elif name and cat1 == "NGC":
                keep = True
            if not keep:
                continue
            out.append(dict(
                n=label,
                d=desig if desig and desig != label else (alt if alt != label else ""),
                r=round(ra_h * 15.0, 4),
                c=round(dec_d, 4),
                m=round(m, 1) if m < 90 else None,
                t=(r.get("type") or "").strip()[:12],
            ))
    # dedupe on label
    seen, uniq = set(), []
    for d in out:
        k = d["n"].lower()
        if k in seen:
            continue
        seen.add(k)
        uniq.append(d)
    uniq.sort(key=lambda d: (d["m"] if d["m"] is not None else 99))
    return uniq[:3000]


# ------------------------------------------------------------------------ main

def main():
    os.makedirs(OUT, exist_ok=True)
    print("loading HYG ...", flush=True)
    ra, dec, mag, names = load_stars()
    print(f"  {len(ra)} stars to mag {CAT_MAGLIM}")
    vecs = unit_vectors(ra, dec)

    # ---- star table: ra(f32) dec(f32) mag(i16, x100)
    with open(os.path.join(OUT, "stars.bin"), "wb") as fh:
        fh.write(b"SPS1")
        fh.write(struct.pack("<I", len(ra)))
        fh.write(np.asarray(ra, dtype="<f4").tobytes())
        fh.write(np.asarray(dec, dtype="<f4").tobytes())
        fh.write(np.asarray(np.round(mag * 100), dtype="<i2").tobytes())
    print(f"  stars.bin {os.path.getsize(os.path.join(OUT,'stars.bin'))} bytes")

    # ---- names (sparse: only stars that have one)
    nm = {}
    for i, (proper, bf, con) in enumerate(names):
        if proper or bf:
            e = {}
            if proper:
                e["n"] = proper
            if bf:
                e["b"] = bf
            if con:
                e["c"] = con
            nm[str(i)] = e
    with open(os.path.join(OUT, "names.json"), "w") as fh:
        json.dump(nm, fh, separators=(",", ":"))
    print(f"  names.json {len(nm)} entries")

    # ---- deep sky objects
    dsos = load_dsos()
    with open(os.path.join(OUT, "dso.json"), "w") as fh:
        json.dump(dsos, fh, separators=(",", ":"))
    print(f"  dso.json {len(dsos)} objects")

    # ---- quad layers
    layers = []
    for L in LAYERS:
        print(f"building layer {L['name']} "
              f"(mag<={L['maglim']}, {L['dmin']}-{L['dmax']} deg) ...", flush=True)
        info = build_layer(L, ra, dec, mag, vecs)
        print(f"  {info['count']} quads, {info['bytes']} bytes")
        layers.append(info)

    manifest = dict(
        source="HYG v4.1", epoch=EPOCH, maglimit=CAT_MAGLIM,
        nstars=int(len(ra)), codeRange=[CODE_LO, CODE_HI],
        layers=layers, fitRatio=0.40,
        files=dict(stars="stars.bin", names="names.json", dso="dso.json"),
    )
    with open(os.path.join(OUT, "manifest.json"), "w") as fh:
        json.dump(manifest, fh, indent=1)
    total = sum(os.path.getsize(os.path.join(OUT, f)) for f in os.listdir(OUT))
    print(f"\ntotal catalog payload: {total/1e6:.2f} MB")


if __name__ == "__main__":
    main()
