import rasterio, numpy as np, math, sys
from rasterio.windows import Window
from PIL import Image
url='/vsicurl/https://astrogeo-ard.s3.us-west-2.amazonaws.com/moon/basemaps/lroc_wac_mosaic/lroc_wac_mosaic_global_303ppd_v3/lroc_wac_mosaic_global_303ppd_v3.tif'
with rasterio.Env(GDAL_DISABLE_READDIR_ON_OPEN='EMPTY_DIR', CPL_VSIL_CURL_ALLOWED_EXTENSIONS='.tif'):
  ds=rasterio.open(url); print(ds.crs, ds.transform, ds.width, ds.height, ds.dtypes, ds.count)
  lat,lon=20.1908,30.7717
  # geographic or projected?
  t=ds.transform
  if abs(t.a)<1: x,y=lon,lat
  else:
    R=1737400.0; x=math.radians(((lon-180+180)%360)-180 if False else lon-180)*R; y=math.radians(lat)*R; print("clon180 x",x)
  col,row=~t*(x,y); print('col,row',col,row)
  half_m=34000; ppm=abs(t.a) if abs(t.a)>1 else abs(t.a)*math.pi/180*1737400
  print('m per px',ppm)
  hr=int(half_m/ppm)+4; hc=int(half_m/(ppm*math.cos(math.radians(lat))))+4
  w=Window(int(col)-hc,int(row)-hr,2*hc,2*hr); a=ds.read(1,window=w); print(a.shape,a.dtype,a.min(),a.max())
  np.save('wac.npy',a); open('wac_meta.txt','w').write(f'{col-int(col)+hc} {row-int(row)+hr} {ppm} {lat}\n')
