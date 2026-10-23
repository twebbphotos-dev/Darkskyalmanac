# NASA Astromaterials 3D web-resolution OBJ + JPEG to a glTF for moonrocks.html (then rock-simplify.mjs).
#   python3 rock-build.py <obj> <jpg> <out.glb> <sample> [shine]
# Normals come from the full-resolution mesh (averaged per OBJ vertex, so UV seams stay smooth).
# shine: 'olivine' = honey-yellow olivine grains glossy and clear-coated, the white plagioclase satin;
#        'glass'   = the darkest glassy spots slightly glossy; default a uniform matte rock.
# Second texture: R = clearcoat, G = roughness (glTF metallicRoughness reads G, KHR_materials_clearcoat reads R).
# Third: a normal map (grain edges and fine relief), 2048 px for 'olivine', else 1024. Masks are 2048 px, hard-edged, not blurred,
# so grain boundaries stay crisp.
import sys, json, struct, io, numpy as np
from PIL import Image, ImageFilter
obj, jpg, out, name = sys.argv[1:5]; shine = sys.argv[5] if len(sys.argv) > 5 else ''
V, T, F = [], [], []
for line in open(obj):
  if line.startswith('v '): V.append([float(x) for x in line.split()[1:4]])
  elif line.startswith('vt '): T.append([float(x) for x in line.split()[1:3]])
  elif line.startswith('f '):
    F.append([tuple(int(i) - 1 for i in c.split('/')[:2]) for c in line.split()[1:4]])
V, T, F = np.array(V, np.float64), np.array(T, np.float32), np.array(F, np.int64)
vi = F[:, :, 0]; a, b, c = V[vi[:, 0]], V[vi[:, 1]], V[vi[:, 2]]
fn = np.cross(b - a, c - a); N = np.zeros_like(V)
for k in range(3): np.add.at(N, vi[:, k], fn)          # area-weighted
N /= np.linalg.norm(N, axis=1, keepdims=True) + 1e-20
key, idx, pv = {}, [], []
for f in F.reshape(-1, 2):
  t = (f[0], f[1])
  if t not in key: key[t] = len(pv); pv.append(t)
  idx.append(key[t])
pv = np.array(pv); pos = V[pv[:, 0]].astype(np.float32); nor = N[pv[:, 0]].astype(np.float32); uv = T[pv[:, 1]].copy(); uv[:, 1] = 1 - uv[:, 1]
ext = pos.max(0) - pos.min(0); print('extent', ext)
if ext.max() > 1: pos /= 1000          # scans in mm
pos -= (pos.max(0) + pos.min(0)) / 2
idx = np.array(idx, np.uint32)
im = Image.open(jpg).convert('RGB').resize((2048, 2048), Image.LANCZOS)
def enc(i, q): b = io.BytesIO(); i.save(b, 'JPEG', quality=q); return b.getvalue()
img = enc(im, 86)
hsv = np.asarray(im.convert('HSV')).astype(np.float32) / 255
h, s, v = hsv[..., 0] * 360, hsv[..., 1], hsv[..., 2]
def hard(m): return np.asarray(Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.MedianFilter(5)).filter(ImageFilter.GaussianBlur(0.6))).astype(np.float32) / 255
rng = np.random.default_rng(1); grain = np.asarray(Image.fromarray((rng.random((256, 256)) * 255).astype(np.uint8)).resize((2048, 2048), Image.BICUBIC)).astype(np.float32) / 255
raise_ = 0
if shine == 'olivine':
  m = hard(np.clip((s - 0.115) / 0.025, 0, 1) * ((h > 28) & (h < 85)))   # olive / honey-yellow grains, crisp edges
  rough, coat, raise_ = 0.72 - (0.50 - 0.12 * grain) * m, 0.8 * m, 1.0
elif shine == 'glass':
  m = hard(np.clip((0.13 - v) / 0.03, 0, 1) * (s < 0.22))               # only the darkest, grey pixels: glass
  rough, coat = 0.86 - 0.36 * m, 0.25 * m
else:
  m = np.zeros_like(v); rough, coat = np.full_like(v, 0.86), np.zeros_like(v)
mr = np.stack([coat, rough, np.zeros_like(v)], -1)
mrb = enc(Image.fromarray((mr * 255).round().astype(np.uint8)), 92)
# Normal map: crystal grains stand slightly proud with a sharp step at their edges, plus fine relief from the photo's
# small-scale brightness. glTF convention: +X right, +Y up the image, so ny = +dh/drow.
lum = v; hp = lum - np.asarray(Image.fromarray((lum * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(6))).astype(np.float32) / 255
hgt = raise_ * m * 1.6 + hp * 3.0
gy, gx = np.gradient(hgt)
nx, ny, nz = -gx, gy, np.ones_like(hgt); ln = np.sqrt(nx * nx + ny * ny + 1)
nrm = np.stack([nx / ln, ny / ln, nz / ln], -1) * 0.5 + 0.5
nim = Image.fromarray((nrm * 255).round().astype(np.uint8))
nb = enc(nim if shine == 'olivine' else nim.resize((1024, 1024), Image.LANCZOS), 88)   # only crystal edges need the full 2048
bufs = [pos.tobytes(), nor.tobytes(), uv.astype(np.float32).tobytes(), idx.tobytes(), img, mrb, nb]; offs = []; blob = b''
for x in bufs:
  while len(blob) % 4: blob += b'\0'
  offs.append(len(blob)); blob += x
bv = [{'buffer': 0, 'byteOffset': o, 'byteLength': len(x)} | ({'target': 34962} if i < 3 else {'target': 34963} if i == 3 else {}) for i, (o, x) in enumerate(zip(offs, bufs))]
mat = {'name': 'rock', 'pbrMetallicRoughness': {'baseColorTexture': {'index': 0}, 'metallicFactor': 0, 'roughnessFactor': 1, 'metallicRoughnessTexture': {'index': 1}}, 'normalTexture': {'index': 2}}
ext_used = []
if shine: mat['extensions'] = {'KHR_materials_clearcoat': {'clearcoatFactor': 1, 'clearcoatTexture': {'index': 1}, 'clearcoatRoughnessFactor': 0.1}}; ext_used = ['KHR_materials_clearcoat']
g = {'asset': {'version': '2.0', 'extras': {'source': 'NASA Astromaterials 3D, lunar sample ' + name + ' (public domain)'}},
  'buffers': [{'byteLength': len(blob)}], 'bufferViews': bv,
  'accessors': [{'bufferView': 0, 'componentType': 5126, 'count': len(pos), 'type': 'VEC3', 'min': pos.min(0).tolist(), 'max': pos.max(0).tolist()},
                {'bufferView': 1, 'componentType': 5126, 'count': len(nor), 'type': 'VEC3'},
                {'bufferView': 2, 'componentType': 5126, 'count': len(uv), 'type': 'VEC2'}, {'bufferView': 3, 'componentType': 5125, 'count': len(idx), 'type': 'SCALAR'}],
  'images': [{'bufferView': 4, 'mimeType': 'image/jpeg'}, {'bufferView': 5, 'mimeType': 'image/jpeg'}, {'bufferView': 6, 'mimeType': 'image/jpeg'}], 'textures': [{'source': 0}, {'source': 1}, {'source': 2}],
  'materials': [mat], 'meshes': [{'primitives': [{'attributes': {'POSITION': 0, 'NORMAL': 1, 'TEXCOORD_0': 2}, 'indices': 3, 'material': 0}]}],
  'nodes': [{'mesh': 0}], 'scenes': [{'nodes': [0]}], 'scene': 0}
if ext_used: g['extensionsUsed'] = ext_used
js = json.dumps(g).encode()
while len(js) % 4: js += b' '
while len(blob) % 4: blob += b'\0'
open(out, 'wb').write(struct.pack('<III', 0x46546C67, 2, 28 + len(js) + len(blob)) + struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(blob), 0x004E4942) + blob)
print(name, 'faces', len(idx) // 3, 'verts', len(pos), 'shine', shine or 'matte', 'mean rough %.2f' % rough.mean())
