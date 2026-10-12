import json
P='/home/claude/work/v2/constellations.html'
s=open(P,encoding='utf-8').read()
tag='const DATA = '
i=s.index(tag)+len(tag)
data,end=json.JSONDecoder().raw_decode(s[i:])
D={d['key']:d for d in data}
bad=0
def rep(key,field,old,new):
    global bad
    v=D[key][field]
    if new in v and old not in v: return
    if v.count(old)!=1: print('!!',key,field,repr(old[:60])); bad+=1; return
    D[key][field]=v.replace(old,new)
def setf(key,field,new): D[key][field]=new
R=[
('ursamajor','where',"High in the north, circling Polaris all night and all year from Zion’s latitude. Rides nearly overhead on spring evenings; swings low in the north in autumn.","High in the north on spring evenings, when it rides nearly overhead. In autumn the Dipper skims Zion’s northern horizon and the tip of the handle briefly sets."),
('ursamajor','best',"March–June (overhead); all year from Zion","March–June (overhead); low in the north in autumn"),
('cassiopeia','where',"Overhead on autumn evenings.","Rides high in the north on autumn evenings."),
('cassiopeia','best',"September–December (overhead); all year from Zion","September–December (high in the north); all year from Zion"),
('leo','where',"near the zenith around 9 PM in April","at its highest around 10 PM in mid-April"),
('virgo','where',"Spica sits near the celestial equator and the path of the planets.","Spica sits 11° south of the celestial equator, right on the path of the planets."),
('cygnus','about',"blazing from some 2,600 light years away","blazing from somewhere between 1,400 and 2,600 light years away"),
('taurus','about',"anchored by the fiery orange eye Aldebaran,","anchored by the fiery orange eye Aldebaran (a foreground star, not a cluster member),"),
('gemini','objects',"The Eskimo Nebula, a small bright planetary, lies nearby.","The Clown Face Nebula (NGC 2392), a small bright planetary, sits beside the star Wasat in the other twin."),
('canismajor','about',"So close at 8.6 light years that it often flashes vivid colors when low on the horizon.","At just 8.6 light years it is so brilliant that it often flashes vivid colors when low on the horizon."),
('canisminor','find',"(Gomeisa) just to its north.","(Gomeisa) just to its northwest."),
('perseus','about',"as a dark companion eclipses it","as a fainter companion star eclipses it"),
('andromeda','about',"the most distant object visible to the naked eye","the most distant object easily visible to the naked eye"),
('andromeda','where',"The galaxy is the farthest thing the unaided eye can reach at 2.5 million light years.","The galaxy is the farthest thing most unaided eyes can reach, at 2.5 million light years."),
('andromeda','objects',"lies just off Mirach —","lies about 8° northwest of Mirach, past two fainter stars —"),
('draco','where',"High in the north, circumpolar from Zion.","High in the north and almost entirely circumpolar from Zion — only the head briefly dips below the horizon."),
('draco','best',"May–September; all year from Zion","May–September; nearly all year from Zion"),
('hercules','where',"midway between Vega and Arcturus","about a third of the way from Vega to Arcturus"),
('aquarius','find',"the little Y-shaped Water Jar marked by Sadalmelik and Sadalsuud.","the little Y-shaped Water Jar, just east of the star Sadalmelik."),
('aquarius','objects',"the closest bright planetary","one of the closest planetary nebulae"),
('capricornus','about',"Its brightest star Algedi is","Its alpha star Algedi is"),
('ursaminor','about',"which sits within half a degree of the north celestial pole","which sits about two-thirds of a degree from the north celestial pole"),
('ursaminor','objects',"Kochab and Pherkad were the pole stars 3,000 years ago, when Homer called them the Bears.","Kochab and Pherkad, the “Guardians of the Pole,” were the nearest bright stars to the pole 3,000 years ago."),
('littledipper','about',"Polaris sits almost exactly over the north celestial pole.","Polaris sits less than a degree from the north celestial pole."),
('littledipper','where',"Polaris stays fixed;","Polaris stays almost fixed;"),
('delphinus','about',"whose five brightest stars form a near-perfect diamond that looks exactly like a leaping porpoise","whose brightest stars — a near-perfect diamond of four plus a tail star — look just like a leaping porpoise"),
('delphinus','find',"hop east about 10°.","hop about 13° east-northeast."),
('delphinus','objects',"NGC 6934 is a moderately bright globular just outside the border.","NGC 6934 is a moderately bright globular about 4° south of the tail star."),
('aries','find',"A fourth star, Botein, extends the arc slightly.","A fourth star, Bharani (41 Arietis), extends the arc toward the Pleiades."),
('aries','objects',"was the first double star discovered by telescope (Robert Hooke, 1664)","was one of the first double stars found by telescope (Robert Hooke, 1664)"),
('scutum','where',"Low in the south on summer evenings,","Midway up the southern sky on summer evenings,"),
('leoMinor','about',"(an oversight by Hevelius in 1687)","(an oversight by Francis Baily in 1845)"),
('springtriangle','where',"Some add Denebola (Leo’s tail) to make a “Spring Diamond.”","Some use Denebola (Leo’s tail) in place of Regulus; add Cor Caroli and it becomes the “Great Diamond.”"),
('wintertriangle','where',"standing south around 9 PM in January–February","standing south around 9–10 PM in February"),
('teapot','about',"The eight brightest stars of Sagittarius,","Eight bright stars of Sagittarius,"),
('northerncross','about',"In late autumn it stands upright on the northwestern horizon at dusk,","Around Christmas it stands upright on the northwestern horizon by mid-evening,"),
('coathanger','about',"Too faint for naked eyes, but a showpiece in binoculars.","A faint naked-eye smudge under dark skies, and a showpiece in binoculars."),
('coathanger','where',"near the little constellation Vulpecula","in the little constellation Vulpecula"),
('coathanger','find',"about a third of the way from Albireo (foot of the Northern Cross) toward Altair","about a third of the way from Altair toward Vega"),
('pleiades','about',"for at least 30,000 years","since prehistory"),
('sickle','about',"and one of the few asterisms that is also a genuine stellar association — the stars of the Sickle share a common origin.","but it is purely a line-of-sight pattern — its stars lie anywhere from 79 to more than 1,000 light years away."),
('kemble','where',"between Cassiopeia’s W and Polaris. Circumpolar from Zion.","about one W-length beyond the eastern end of Cassiopeia. Circumpolar from Zion."),
('kemble','find',"Sweep with binoculars in the dim region between Cassiopeia and the pole; the cascade","Extend the line from Caph through Segin — the end stars of Cassiopeia’s W — the same distance again and sweep with binoculars; the cascade"),
]
for r in R: rep(*r)
def relabel(key,old,new):
    global bad
    hit=[st for st in D[key]['stars'] if st[0]==old]
    if not hit:
        if not any(st[0]==new for st in D[key]['stars']): print('!! label',key,old); bad+=1
        return
    hit[0][0]=new
relabel('scorpius','Graffias','Acrab'); relabel('scorpius','Al Niyat','Alniyat'); relabel('scorpius','Girtab','Sargas')
relabel('northerncross','Gienah','Aljanah'); relabel('aries','Mesartim','Mesarthim'); relabel('cetus','Deneb Kaitos','Diphda')
D['coathanger']['stars']=[["",19.3867,20.2779,7.11,1.14],["",19.3964,20.2644,6.40,0.01],["",19.4229,20.2717,6.31,-0.01],["",19.4418,20.2590,6.64,0.01],["",19.4650,20.2474,6.88,-0.03],["",19.4891,20.2797,6.34,-0.10],
  ["",19.4370,20.0977,5.60,-0.01],["",19.4413,19.8915,5.84,1.56],["",19.4246,19.7984,5.14,1.00],["",19.4123,19.9394,7.16,0.16]]
D['kemble']['stars']=[["",3.8868,63.4834,8.05,0.18],["",3.9353,63.2295,8.26,1.0],["",3.9571,63.0723,4.95,-0.07],["",3.9610,62.7775,7.98,0.48],["",4.0329,62.5141,8.0,0.3],["",4.0487,62.4213,7.34,0.28],["NGC 1502",4.13,62.33,5.7,0.3]]
pl={'Alcyone':3.7914,'Atlas':3.8194,'Electra':3.7479,'Maia':3.7638,'Merope':3.7721,'Taygeta':3.7535,'Pleione':3.8198}
for st in D['pleiades']['stars']: st[1]=pl[st[0]]
[st for st in D['pleiades']['stars'] if st[0]=='Pleione'][0][2]=24.137
u=D['ursamajor']['stars'][6]
if abs(u[1]-11.3255)<1e-3: D['ursamajor']['stars'][6]=["",11.3031,31.5288,3.79,0.59]
for st in D['sagittarius']['stars']:
    if abs(st[1]-19.294)<1e-3: st[3]=4.88
    if abs(st[1]-19.361)<1e-3: st[3]=3.92
out=json.dumps(data,ensure_ascii=False)
open(P,'w',encoding='utf-8').write(s[:i]+out+s[i+end:])
print('constellations', 'ok' if not bad else 'FAILED %d'%bad)
