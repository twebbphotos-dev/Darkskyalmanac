import cv2, numpy as np
from PIL import Image
D='/tmp/claude-0/build/sg/'
img=cv2.imread(D+'clean.png'); H,W=img.shape[:2]
f=img[...,::-1].astype(np.float32)                    # RGB
hsv=cv2.cvtColor(img,cv2.COLOR_BGR2HSV).astype(np.float32)
L=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY).astype(np.float32)
def rgb(hx): return np.array([int(hx[i:i+2],16) for i in (1,3,5)],np.float32)
CREAM=rgb('#F4EFE7'); BLM=rgb('#EFEDD3'); PARK=rgb('#D6E8D0'); WATER=rgb('#A6D0E6')
sm=cv2.GaussianBlur(hsv,(9,9),0); hb,sb=sm[...,0],sm[...,1]
# soft class weights, so area edges stay smooth
def ramp(x,a,b): return np.clip((x-a)/(b-a),0,1)
wsat=ramp(sb,18,40)
wblm=wsat*ramp(hb,18,24)*(1-ramp(hb,34,40))
wpark=wsat*ramp(hb,34,40)*(1-ramp(hb,88,95))
wwat=ramp(sb,35,60)*ramp(hb,92,98)*(1-ramp(hb,122,128))
wbase=np.clip(1-wblm-wpark-wwat,0,1)
fill=(wbase[...,None]*CREAM+wblm[...,None]*BLM+wpark[...,None]*PARK+wwat[...,None]*WATER)
# terrain shading from a lightly blurred luminance
Ls=cv2.GaussianBlur(L,(3,3),0)
ref=np.median(Ls)
shade=np.clip(Ls/ref,0.6,1.04)**1.5
base=fill*shade[...,None]
# fine detail from the original (roads, rivers, labels, outlines), boosted
blur=cv2.GaussianBlur(f,(0,0),3)
detail=f-blur
# colourful detail (roads/rivers) gets extra push; neutral detail (outlines) is softened
chroma=np.abs(f-f.mean(axis=2,keepdims=True)).max(axis=2)
cb=np.abs(blur-blur.mean(axis=2,keepdims=True)).max(axis=2)
k=np.where((chroma-cb)>6, 3.2, 0.9)[...,None]
out=base+detail*k
# deepen highway reds: pixels that are distinctly warmer than surroundings
warm=((f[...,0]-f[...,2])-(blur[...,0]-blur[...,2]))
redm=np.clip((warm-8)/18,0,1)*(hsv[...,2]>140)
RED=rgb('#C23B2E')
out=out*(1-redm[...,None]*0.85)+RED*(redm[...,None]*0.85)
res=np.clip(out,0,255).astype(np.uint8)
Image.fromarray(res).save(D+'recolor2.png')

# town labels where the old boxes were, NPS style: bold black with a white halo
from PIL import ImageDraw, ImageFont
im=Image.fromarray(res); d=ImageDraw.Draw(im)
B='/usr/share/fonts/truetype/dejavu/'
boxes=np.load(D+'boxes.npy')
NAMES=['Enterprise','Pine Valley','Veyo','Gunlock','Ivins','Hurricane','Santa Clara','St. George']
for (x,y,w,hh),nm in zip(boxes,NAMES):
    big=nm=='St. George'
    fnt=ImageFont.truetype(B+'DejaVuSansCondensed-Bold.ttf', 19 if big else 15)
    cx,cy=x+w/2,y+hh/2
    tw=d.textlength(nm,font=fnt)
    tx=min(max(cx-tw/2,4),W-tw-4)
    d.text((tx,cy),nm,font=fnt,fill=(30,27,24),anchor='lm',stroke_width=3,stroke_fill=(255,255,255))
# credit, bottom-left
fs=ImageFont.truetype(B+'DejaVuSansCondensed.ttf',10)
d.text((8,H-8),'Basemap © OpenStreetMap contributors',font=fs,fill=(90,84,76),anchor='ls',stroke_width=2,stroke_fill=(244,239,231))
im.save(D+'final.png')
im.save(D+'map-st-george.jpg',quality=90,optimize=True,progressive=True)
