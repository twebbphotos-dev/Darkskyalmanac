# OBJ (v, vt, f) to a minimal glTF with a JPEG texture: positions in metres (the scan is in mm), centred
import sys, json, struct, numpy as np
from PIL import Image
obj, jpg, out = sys.argv[1:4]
V, T, F = [], [], []
for line in open(obj):
  if line.startswith('v '): V.append([float(x) for x in line.split()[1:4]])
  elif line.startswith('vt '): T.append([float(x) for x in line.split()[1:3]])
  elif line.startswith('f '):
    F.append([tuple(int(i) - 1 for i in c.split('/')[:2]) for c in line.split()[1:4]])
V, T = np.array(V, np.float32), np.array(T, np.float32)
key, idx, pos, uv = {}, [], [], []
for f in F:
  for c in f:
    if c not in key: key[c] = len(pos); pos.append(V[c[0]]); uv.append(T[c[1]])
    idx.append(key[c])
pos = np.array(pos, np.float32); uv = np.array(uv, np.float32); uv[:, 1] = 1 - uv[:, 1]
ext = pos.max(0) - pos.min(0); print('extent (file units)', ext)
pos -= (pos.max(0) + pos.min(0)) / 2      # metres already
idx = np.array(idx, np.uint32)
im = Image.open(jpg).convert('RGB').resize((1024, 1024), Image.LANCZOS); import io; b = io.BytesIO(); im.save(b, 'JPEG', quality=88); img = b.getvalue()
bufs = [pos.tobytes(), uv.tobytes(), idx.tobytes(), img]; offs = []; blob = b''
for x in bufs:
  while len(blob) % 4: blob += b'\0'
  offs.append(len(blob)); blob += x
g = {'asset': {'version': '2.0', 'extras': {'source': 'NASA Astromaterials 3D, lunar sample 76535,0 (public domain)'}},
  'buffers': [{'byteLength': len(blob)}],
  'bufferViews': [{'buffer': 0, 'byteOffset': offs[0], 'byteLength': len(bufs[0]), 'target': 34962}, {'buffer': 0, 'byteOffset': offs[1], 'byteLength': len(bufs[1]), 'target': 34962},
                  {'buffer': 0, 'byteOffset': offs[2], 'byteLength': len(bufs[2]), 'target': 34963}, {'buffer': 0, 'byteOffset': offs[3], 'byteLength': len(bufs[3])}],
  'accessors': [{'bufferView': 0, 'componentType': 5126, 'count': len(pos), 'type': 'VEC3', 'min': pos.min(0).tolist(), 'max': pos.max(0).tolist()},
                {'bufferView': 1, 'componentType': 5126, 'count': len(uv), 'type': 'VEC2'}, {'bufferView': 2, 'componentType': 5125, 'count': len(idx), 'type': 'SCALAR'}],
  'images': [{'bufferView': 3, 'mimeType': 'image/jpeg'}], 'textures': [{'source': 0}],
  'materials': [{'name': 'rock', 'pbrMetallicRoughness': {'baseColorTexture': {'index': 0}, 'metallicFactor': 0, 'roughnessFactor': 0.85}}],
  'meshes': [{'primitives': [{'attributes': {'POSITION': 0, 'TEXCOORD_0': 1}, 'indices': 2, 'material': 0}]}], 'nodes': [{'mesh': 0}], 'scenes': [{'nodes': [0]}], 'scene': 0}
js = json.dumps(g).encode()
while len(js) % 4: js += b' '
while len(blob) % 4: blob += b'\0'
open(out, 'wb').write(struct.pack('<III', 0x46546C67, 2, 28 + len(js) + len(blob)) + struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(blob), 0x004E4942) + blob)
print('faces', len(idx) // 3, 'verts', len(pos))
