# Jezero Crater terrain for the 3D viewer's "From above" view

Builds `models/jezero.bin` (heights) and `models/jezero.jpg` (photography) for
Perseverance's "From above" view in `src/spacecraft.js`.

Source: USGS Analysis Ready Data, CTX stereo DTMs and orthoimages (20 m, CC0),
bucket `astrogeo-ard.s3.us-west-2.amazonaws.com`, index
`collectionindices/mro_ctx_controlled_usgs_dtms.parquet`.

```bash
pip install pyarrow tifffile imagecodecs scipy numpy pillow
curl -O https://astrogeo-ard.s3.us-west-2.amazonaws.com/collectionindices/mro_ctx_controlled_usgs_dtms.parquet
python3 list.py mro_ctx_controlled_usgs_dtms.parquet list.json      # the 85 DTMs over the area
# download each DTM href (and the matching _orthoimage.tif) into tif/ and ortho/
python3 mosaic.py dtm   tif   list.json 3072 out/dtm.npy   18.38 77.70 120000
python3 mosaic.py ortho ortho list.json 3072 out/ortho.npy 18.38 77.70 120000
python3 pack.py out 640 models/jezero.bin models/jezero.jpg rover/img/jezero-region.jpg 3072 120000 18.38 77.70
```

- Grid: 120 km square, north up, centred on 18.38° N 77.70° E (Mars 2015 sphere,
  R = 3396190 m). The landing site (18.4447° N, 77.4508° E) is 14018 m west and
  3835 m north of the centre, which is `JZ.C` in `src/spacecraft.js`.
- `jezero.bin`: Int16 little-endian, quarter-metres relative to the landing site.
- `jezero.jpg`: the orthoimage mosaic, strip brightness matched in the overlaps,
  histogram-matched to the colours of `rover/img/jezero-region.jpg` (Mars Express
  true colour). That photo is only used for its palette: it does not line up with
  the elevation closely enough to drape.
