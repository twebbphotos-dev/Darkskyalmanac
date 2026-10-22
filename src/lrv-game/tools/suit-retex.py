# re-encode the suit's textures: body color/normal 2048, other color/normal 1024, occlusion-roughness-metal 512, all JPEG
import json,struct,io,sys
from PIL import Image
src,dst=sys.argv[1],sys.argv[2]
b=open(src,'rb').read(); n=struct.unpack('<I',b[12:16])[0]; j=json.loads(b[20:20+n]); off=20+n; L=struct.unpack('<I',b[off:off+4])[0]; BIN=b[off+8:off+8+L]
size={}
for m in j['materials']:
  big=1024 if m['name'] in ('base_002','helmet') else 512      # v5.10: smaller for tablets' graphics memory (the cloth and helmet keep 1024)
  for k in ['normalTexture']:
    if k in m: size[j['textures'][m[k]['index']]['source']]=(min(big,512) if m['name']!='base_002' else big,90)
  pb=m.get('pbrMetallicRoughness',{})
  if 'baseColorTexture' in pb: size[j['textures'][pb['baseColorTexture']['index']]['source']]=(big,88)
  for k in ['metallicRoughnessTexture']:
    if k in pb: size[j['textures'][pb[k]['index']]['source']]=(256,85)
  if 'occlusionTexture' in m: size.setdefault(j['textures'][m['occlusionTexture']['index']]['source'],(256,85))
views=[]; newimg={}
for k,im in enumerate(j['images']):
  bv=j['bufferViews'][im['bufferView']]; d=BIN[bv.get('byteOffset',0):bv.get('byteOffset',0)+bv['byteLength']]
  I=Image.open(io.BytesIO(d)); I=I.convert('RGB'); s,q=size.get(k,(512,85)); 
  if max(I.size)>s: I=I.resize((s,s), Image.LANCZOS)
  o=io.BytesIO(); I.save(o,'JPEG',quality=q,optimize=True); newimg[im['bufferView']]=o.getvalue(); im['mimeType']='image/jpeg'
  print(k, Image.open(io.BytesIO(d)).size, '->', I.size, len(d)//1024,'KB ->', len(newimg[im['bufferView']])//1024,'KB')
out=bytearray()
for i,bv in enumerate(j['bufferViews']):
  data=newimg.get(i, BIN[bv.get('byteOffset',0):bv.get('byteOffset',0)+bv['byteLength']])
  while len(out)%4: out.append(0)
  bv['byteOffset']=len(out); bv['byteLength']=len(data); out+=data
while len(out)%4: out.append(0)
j['buffers'][0]['byteLength']=len(out)
js=json.dumps(j,separators=(',',':')).encode()
while len(js)%4: js+=b' '
glb=struct.pack('<III',0x46546C67,2,12+8+len(js)+8+len(out))+struct.pack('<II',len(js),0x4E4F534A)+js+struct.pack('<II',len(out),0x004E4942)+bytes(out)
open(dst,'wb').write(glb); print('wrote',len(glb)//1024,'KB')
