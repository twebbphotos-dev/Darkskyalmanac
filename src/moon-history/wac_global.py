# The whole Moon from the LROC WAC global mosaic (USGS Analysis Ready Data COG), read from its overviews at 2048 x 1024,
# equirectangular, centered on 0° longitude (the mosaic is centered on 180°, so the halves are swapped).
import rasterio, numpy as np, sys
from rasterio.enums import Resampling
from PIL import Image
url = '/vsicurl/https://astrogeo-ard.s3.us-west-2.amazonaws.com/moon/basemaps/lroc_wac_mosaic/lroc_wac_mosaic_global_303ppd_v3/lroc_wac_mosaic_global_303ppd_v3.tif'
with rasterio.open(url) as s:
  print(s.width, s.height, s.crs, s.bounds, s.overviews(1), s.dtypes)
  a = s.read(1, out_shape=(1024, 2048), resampling=Resampling.average).astype(np.float32)
lo, hi = np.percentile(a[a > 0], [0.2, 99.8]); a = np.clip((a - lo) / (hi - lo), 0, 1)
Image.fromarray((a * 255).astype(np.uint8)).save(sys.argv[1])
print('ok', a.mean())
