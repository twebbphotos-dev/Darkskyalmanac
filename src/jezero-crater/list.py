import pyarrow.parquet as pq, json, sys
t=pq.read_table(sys.argv[1],columns=['id','bbox','assets','proj:transform','proj:shape','proj:wkt2'])
out=[]
for r in t.to_pylist():
  b=r['bbox']
  if b['xmax']-b['xmin']>5: continue
  if b['xmin']<78.84 and b['xmax']>76.56 and b['ymin']<19.45 and b['ymax']>17.30 and r['assets'].get('dtm'):
    out.append(dict(id=r['id'],href=r['assets']['dtm']['href'],tr=r['proj:transform'],shape=r['proj:shape'],wkt=r['proj:wkt2'][-400:],bbox=b))
json.dump(out,open(sys.argv[2],'w'))
print(len(out)); print(out[0]['wkt'])
