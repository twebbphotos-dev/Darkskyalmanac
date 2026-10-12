# Restyle the St. George basemap (OSM-derived terrain render) to match the
# NPS-style maps: cream land, pale green / pale tan public lands, NPS red roads,
# blue water, bold black town labels with a white halo. Same size, so every
# map position and the GPS fit stay valid.
import cv2, numpy as np
from PIL import Image, ImageDraw, ImageFont
D='/tmp/claude-0/build/sg/'
img=cv2.imread(D+'orig.jpg'); H,W=img.shape[:2]
hsv=cv2.cvtColor(img,cv2.COLOR_BGR2HSV); h,s,v=[hsv[...,i].astype(np.int32) for i in range(3)]
# 1. find the blue label boxes, record them, inpaint them away
fill=((h>=100)&(h<=125)&(s>70)&(v>150)).astype(np.uint8)
n,lab,st,cen=cv2.connectedComponentsWithStats(fill,8)
boxes=[(x,y,w,hh) for (x,y,w,hh,a) in st[1:] if a>150 and w>25 and hh>10 and hh<40]
mask=np.zeros((H,W),np.uint8)
for x,y,w,hh in boxes: cv2.rectangle(mask,(x-3,y-3),(x+w+3,y+hh+3),255,-1)
cv2.rectangle(mask,(int(W*0.86),int(H*0.408)),(W-1,int(H*0.424)),255,-1)   # old tiny attribution line
img=cv2.inpaint(img,mask,6,cv2.INPAINT_TELEA)
print('boxes',boxes)
np.save(D+'boxes.npy',np.array(boxes))
cv2.imwrite(D+'clean.png',img)
