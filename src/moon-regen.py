import numpy as np
from scipy.ndimage import map_coordinates, gaussian_filter, maximum_filter
h=np.load('a17_h.npy').astype(float)*310
hs=gaussian_filter(h,0.6)
old=np.fromfile('/home/claude/work/v2/models/moon-a17.bin',dtype='<i2').reshape(256,256)/4.0
print('old vs smoothed crop std',(old-(hs[121:377,110:366])).std().round(2))
# scene origin (rover) = LM + (145 E, 39 N); LM at grid (253.5,256.5)
ox=253.5+145/250; oy=256.5-39/250
jj,ii=np.mgrid[0:256,0:256]
d=map_coordinates(hs,[oy+(jj-128),ox+(ii-128)],order=3,mode='nearest')
d-=d[128,128]
print(d.min(),d.max())
(np.round(d*4).astype('<i2')).tofile('/home/claude/work/v2/models/moon-a17.bin')
# summits (scene metres)
mx=maximum_filter(d,25); pk=np.argwhere((d==mx)&(d>1300))
for j,i in pk: print('peak',(i-128)*250,(j-128)*250,round(d[j,i]))
