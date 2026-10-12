import cv2, numpy as np
from PIL import Image, ImageDraw, ImageFont
D='/tmp/claude-0/build/sg/'
img=cv2.imread(D+'clean.png'); H,W=img.shape[:2]
hsv=cv2.cvtColor(img,cv2.COLOR_BGR2HSV).astype(np.float32); h,s,v=hsv[...,0],hsv[...,1],hsv[...,2]
L=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY).astype(np.float32)
def rgb(hx): return np.array([int(hx[i:i+2],16) for i in (1,3,5)],np.float32)
CREAM=rgb('#F3EEE6'); PARK=rgb('#D9EAD3'); BLM=rgb('#F1EED6'); WATER=rgb('#A9D2E6'); ROAD=rgb('#C0392B'); MINOR=rgb('#9C8F7E'); LINE=rgb('#8DB78A'); INK=rgb('#3B3631'); URBAN=rgb('#E4DDD3')
cls=np.zeros((H,W),np.uint8)          # 0 base
sm=cv2.GaussianBlur(hsv,(7,7),0); hb,sb,vb=sm[...,0],sm[...,1],sm[...,2]
cls[(hb>=20)&(hb<38)&(sb>28)]=1        # olive/yellow public land -> BLM tan
cls[(hb>=38)&(hb<90)&(sb>28)]=2        # green -> park/forest green
cls[(hb>=90)&(hb<=125)&(sb>45)]=3      # water
out=np.zeros((H,W,3),np.float32)
ref={}
for c,col in [(0,CREAM),(1,BLM),(2,PARK),(3,WATER)]:
    m=cls==c
    if not m.any(): continue
    r=np.median(L[m]); ref[c]=r
    shade=np.clip(L/r,0.62,1.10)**1.6
    out[m]=(col[None,:]*shade[m][:,None])
# thin features drawn over the fills, from the unblurred pixels
# lines: noticeably more saturated than their own neighbourhood
sloc=cv2.GaussianBlur(hsv[...,1],(15,15),0)
lift=s-sloc
road=(((h<=28)|(h>=160))&(lift>6)&(s>38)&(v>150))
river=((h>=80)&(h<=110)&(lift>8)&(s>30))
def keep_long(m, min_len):
    m=cv2.morphologyEx(m.astype(np.uint8),cv2.MORPH_CLOSE,np.ones((3,3),np.uint8))
    n,lab,st,_=cv2.connectedComponentsWithStats(m,8)
    ok=np.zeros(n,bool)
    for i in range(1,n):
        x,y,w,hh,a=st[i]
        if max(w,hh)>=min_len: ok[i]=True
    return ok[lab]
road=keep_long(road,22)
road=cv2.dilate(road.astype(np.uint8),np.ones((2,2),np.uint8)).astype(bool)
river=keep_long(river,30)
orange=np.zeros_like(road)
line=(h>=35)&(h<90)&(s>45)&(v<175)&(v>70)
ink=(L<105)&(s<70)
out[line]=out[line]*0.35+LINE*0.65
# soften the grey land-ownership outlines toward their surroundings
Lb=cv2.GaussianBlur(L,(9,9),0)
grey=(Lb-L>9)&(s<45)&(L>105)
ob=cv2.GaussianBlur(out,(9,9),0)
out[grey]=ob[grey]*0.7+out[grey]*0.3
out[orange]=MINOR*0.55+out[orange]*0.45
out[road]=ROAD
out[river]=WATER*0.8
out[ink]=INK
res=np.clip(out,0,255).astype(np.uint8)
Image.fromarray(res).save(D+'recolor.png')
print('class share',[(c,round((cls==c).mean()*100,1)) for c in range(4)], ref)
