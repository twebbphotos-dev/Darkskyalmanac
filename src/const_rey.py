# Rebuild constellations.html chart figures (stars + lines) from the same
# H.A. Rey figures used by Star ID / Sky Finder. Names: kept from the old
# chart where a figure star matches (<0.3 deg), else the IAU proper name for
# stars brighter than mag 2.5.
import json, math, sys
D='/tmp/claude-0/-home-claude/31d058b6-055f-50c7-a4bc-60591045fce2/scratchpad/const/'
P='/home/claude/work/v2/constellations.html'
feat={f['id']:f for f in json.load(open(D+'stars8.json'))['features']}
names=json.load(open(D+'starnames.json'))
rey=json.load(open(D+'rey.json'))
KEY2AB={'orion':'Ori','ursamajor':'UMa','cassiopeia':'Cas','leo':'Leo','virgo':'Vir','bootes':'Boo','cygnus':'Cyg','lyra':'Lyr','aquila':'Aql','scorpius':'Sco','sagittarius':'Sgr','taurus':'Tau','gemini':'Gem','canismajor':'CMa','canisminor':'CMi','auriga':'Aur','perseus':'Per','andromeda':'And','pegasus':'Peg','cepheus':'Cep','draco':'Dra','corvus':'Crv','ophiuchus':'Oph','serpens':'Ser','hercules':'Her','cancer':'Cnc','aquarius':'Aqr','capricornus':'Cap','cetus':'Cet','triangulum':'Tri','ursaminor':'UMi','delphinus':'Del','aries':'Ari','scutum':'Sct','leoMinor':'LMi','coronaborealis':'CrB','camelopardalis':'Cam'}
LYRA=[[91262,91919],[91919,91971],[91971,91262],[91971,92420],[92420,93194],[93194,92791],[92791,91971]]
def polylines(ab):
    if ab=='Lyr': return LYRA
    out=[]
    for c in rey['constellations']:
        a=c['id'].split()[-1].lstrip('.')[:3]
        if a==ab: out+=c['lines']
    return out
def sep(ra1,d1,ra2,d2):
    r=math.radians; c=math.sin(r(d1))*math.sin(r(d2))+math.cos(r(d1))*math.cos(r(d2))*math.cos(r(ra1-ra2))
    return math.degrees(math.acos(max(-1,min(1,c))))
def build(entry):
    ab=KEY2AB[entry['key']]; old=entry.get('stars',[])
    idx={}; stars=[]; lines=[]
    for pl in polylines(ab):
        prev=None
        for h in pl:
            if h not in feat: prev=None; continue
            if h not in idx:
                f=feat[h]; ra=f['geometry']['coordinates'][0]%360; dec=f['geometry']['coordinates'][1]
                mag=f['properties']['mag']; bv=f['properties'].get('bv'); bv=float(bv) if bv not in (None,'') else 0.4
                nm=''
                for o in old:
                    if o[0] and sep(o[1]*15,o[2],ra,dec)<0.3: nm=o[0]; break
                if not nm and mag<=2.5 and str(h) in names and names[str(h)].get('name'): nm=names[str(h)]['name']
                idx[h]=len(stars); stars.append([nm,round(ra/15,4),round(dec,4),round(mag,2),round(bv,2)])
            j=idx[h]
            if prev is not None and prev!=j and [prev,j] not in lines and [j,prev] not in lines: lines.append([prev,j])
            prev=j
    lost=[o[0] for o in old if o[0] and not any(s[0]==o[0] for s in stars)]
    return stars,lines,lost
if __name__=='__main__':
    s=open(P).read(); i=s.index('const DATA = ')+13; data,end=json.JSONDecoder().raw_decode(s[i:])
    for e in data:
        if e['type']!='Constellation': continue
        st,ln,lost=build(e); e['stars']=st; e['lines']=ln
        print(e['key'],len(st),len(ln),'lost:',lost)
    if '--write' in sys.argv:
        s=s[:i]+json.dumps(data,ensure_ascii=False)+s[i+end:]; open(P,'w').write(s); print('written')
