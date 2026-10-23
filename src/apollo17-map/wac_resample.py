import numpy as np, math
from PIL import Image
a=np.load('wac.npy').astype(np.float32); cx,cy,ppm,lat=[float(v) for v in open('wac_meta.txt').read().split()]
N=int(__import__("os").environ.get("N","1024")); W=64000.0; cl=math.cos(math.radians(lat))
i=(np.arange(N)+0.5)/N*W-W/2
X,Z=np.meshgrid(i,i)        # x east, z south (viewer frame, origin = rover park = LM + 145 m E, 39 m N)
col=cx+(X+145.0)/(ppm*cl); row=cy-(-Z+39.0)/ppm
c0=np.floor(col).astype(int); r0=np.floor(row).astype(int); fc=col-c0; fr=row-r0
c0=np.clip(c0,0,a.shape[1]-2); r0=np.clip(r0,0,a.shape[0]-2)
v=(a[r0,c0]*(1-fc)+a[r0,c0+1]*fc)*(1-fr)+(a[r0+1,c0]*(1-fc)+a[r0+1,c0+1]*fc)*fr
Image.fromarray(np.clip(v,0,255).astype(np.uint8)).save('wac%d.png'%N)
# hillshade of the viewer DEM for comparison
d=np.fromfile('/home/user/Darkskyalmanac/models/moon-a17.bin',dtype='<i2').astype(np.float32).reshape(256,256)/4
gy,gx=np.gradient(d,250.0)
sun_az=math.radians(110); el=math.radians(25)
lx,lz=math.sin(sun_az),-math.cos(sun_az)  # light from east-southeast; x east, z(row) south
sh=np.clip((-gx*lx*math.cos(el) - gy*lz*math.cos(el) + math.sin(el))/np.sqrt(1+gx**2+gy**2),0,1)
Image.fromarray((sh*255).astype(np.uint8)).resize((512,512)).save('dem_shade.png')
Image.fromarray(np.clip(v,0,255).astype(np.uint8)).resize((512,512)).save('wac512.png')
both=Image.new('L',(1024,512)); both.paste(Image.open('wac512.png'),(0,0)); both.paste(Image.open('dem_shade.png'),(512,0)); both.save('cmp.png')
