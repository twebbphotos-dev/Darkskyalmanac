# Season intro cards + location-neutral wording for constellations.html. Idempotent.
import json, re
P='/home/claude/work/v2/constellations.html'
s=open(P).read()

INTROS={
'Winter':("The brilliant season",[
 "Winter holds the brightest stars of the year. Six of them — Sirius, Procyon, Pollux, Capella, Aldebaran and Rigel — make a ring called the Winter Hexagon, with Orion standing in the middle and Betelgeuse glowing near its center. Sirius, Procyon and Betelgeuse make the smaller Winter Triangle.",
 "The stories here are a hunt. Orion faces the charging Bull, Taurus, with his two dogs, Canis Major and Canis Minor, at his heels; the Twins, Gemini, and the Charioteer, Auriga, ride above. The Pleiades and the Hyades, the two nearest star clusters to us, sit on the Bull’s shoulder and face.",
 "On winter nights we look outward, away from the center of our galaxy, so the Milky Way is faint here. What we gain is star birth: the Orion Nebula, a cloud where new stars are forming right now, is visible to the naked eye in Orion’s sword."]),
'Spring':("The galaxy season",[
 "In spring the Big Dipper rides high overhead and points the way to everything else: follow the arc of its handle to Arcturus, then speed on to Spica. Arcturus, Spica and Regulus, the heart of Leo, make the Spring Triangle.",
 "Leo is the Nemean Lion that Heracles strangled; Virgo the harvest goddess with an ear of wheat; Boötes the herdsman who drives the Bears around the pole.",
 "In spring we look straight up out of the flat disc of our galaxy, so the Milky Way lies low along the horizon and the dust that hides the distant universe is out of the way. That opens a window into deep space: between Leo and Virgo lie thousands of galaxies in the Virgo Cluster, tens of millions of light-years away."]),
'Summer':("The Milky Way season",[
 "Summer is when the Milky Way is at its best. In the south, Scorpius and Sagittarius sit in front of the center of our galaxy, 26,000 light-years away, where the star clouds are thickest and brightest. Dark lanes of dust, the Great Rift, split the band from Cygnus down to Sagittarius.",
 "Overhead shines the Summer Triangle: Vega in Lyra, Deneb in Cygnus and Altair in Aquila, with the Milky Way running straight through it. In an old Chinese and Japanese legend, Vega is the Weaver Girl and Altair the Cowherd, lovers separated by the Silver River of the Milky Way, allowed to meet once a year when magpies form a bridge — the festival of Qixi, or Tanabata.",
 "Low in the south, the Scorpion that killed Orion rules the summer nights, with Antares, its red heart, and the Archer aiming at it. Hercules and the serpent bearer Ophiuchus fill the sky above them."]),
'Autumn':("The royal family and the Sea",[
 "Autumn’s sky tells one story from end to end. Queen Cassiopeia boasted of her beauty, the sea monster Cetus came, and her daughter Andromeda was chained to the rocks until Perseus rescued her. King Cepheus, the winged horse Pegasus and the monster are all here too.",
 "The Great Square of Pegasus is the signpost. From its corner, Andromeda’s chain of stars leads to the Andromeda Galaxy, 2.5 million light-years away and the most distant thing most people can see with the naked eye.",
 "Below lies a region the Babylonians linked with the rainy season: Aquarius the water bearer, the Fishes, the sea goat Capricornus, the whale Cetus and the Southern Fish. Their stars are faint, so bright Fomalhaut, low in the south, is often called the lonely star of autumn."]),
'Circumpolar':("The Imperishable Stars",[
 "Stars close to the celestial pole never set. Anything nearer to Polaris than your own latitude circles it all night, every night: from mid-northern latitudes that includes the Little Bear, Cassiopeia, Cepheus and Camelopardalis, with the Big Dipper’s handle and Draco’s head only just dipping below the horizon.",
 "The Greeks said these stars never bathe in Ocean, the great river they believed circled the world. Homer wrote that the Bear alone “has no part in the baths of Ocean,” and Ovid told why: Hera, jealous of Callisto, made the sea gods swear never to let the Bear wash in their waters. Every other star sank into Ocean and passed beneath the world each day; these never made that journey.",
 "The Egyptians called them the <i>ikhemu-sek</i>, “the ones who know no destruction” — the Imperishable Stars. All other stars died into the Duat, the underworld, but these never did. The Pyramid Texts tell of the dead king rising to join them, and the Great Pyramid’s northern shafts point toward this unchanging part of the sky.",
 "Their opposite rides low in the south. Orion and Scorpius rise and set like any mortal star, and they barely share the sky: the Scorpion’s heart, Antares, climbs in the east just as Orion’s shoulder sinks in the west. To the Egyptians Orion was Sah, the soul of Osiris, the god who dies and returns. The imperishable stars circle above; the hunter and his killer chase each other through the southern sky, dying and returning without end."]),
}

# 1. Replace the static intro block with an empty container filled from INTROS.
s=re.sub(r'    <div class="zcl-c-intro" id="zcl-c-intro" hidden>.*?\n    </div>\n', '    <div class="zcl-c-intro" id="zcl-c-intro" hidden></div>\n', s, count=1, flags=re.S)
js_intros='const INTROS='+json.dumps({k:{'h':v[0],'p':v[1]} for k,v in INTROS.items()},ensure_ascii=False)+';\n'
if 'const INTROS=' in s:
    s=re.sub(r'const INTROS=.*?;\n', lambda m: js_intros, s, count=1, flags=re.S)
else:
    s=s.replace("const SEASONS=['Winter'", js_intros+"const SEASONS=['Winter'",1)
old="  $('zcl-c-intro').hidden = season!=='Circumpolar';"
new="  { const it=INTROS[season], box=$('zcl-c-intro'); box.hidden=!it;\n    if(it) box.innerHTML='<div class=\"zcl-c-intro-h\">'+it.h+'</div>'+it.p.map(p=>'<p>'+p+'</p>').join(''); }"
s=s.replace(old,new)

# 2. Location-neutral wording.
REPL=[
 ("All year from Zion (circumpolar); highest in winter","All year (circumpolar); highest in winter"),
 ("All year from Zion (circumpolar)","All year (circumpolar)"),
 ("; all year from Zion","; all year in the north"),
 ("nearly all year from Zion","nearly all year"),
 ("almost entirely circumpolar from Zion","almost entirely circumpolar"),
 ("circumpolar from Zion","circumpolar"),
 ("Circumpolar from Zion","Circumpolar from mid-northern latitudes"),
 ("never setting from Zion","never setting"),
 ("In autumn the Dipper skims Zion’s northern horizon","In autumn the Dipper skims the northern horizon"),
 ("the richest galaxy-hunting ground visible from Zion","the richest galaxy-hunting ground in the sky"),
 ("Zion’s dark southern horizon shows it beautifully","a dark, open southern horizon shows it beautifully"),
 ("On dark Zion nights","On dark nights"),
 ("so it skims Zion’s southern sky","so it stays low in the southern sky"),
 ("so Zion’s low southern horizon helps","so an open southern horizon helps"),
 ("Polaris stands 37° above the northern horizon (equal to Zion’s latitude)","Polaris stands above the northern horizon at an angle equal to your latitude"),
 ("so it takes a dark sky — which Zion has","so it takes a truly dark sky"),
 ("Always above the northern horizon from Zion,","Always above the northern horizon,"),
 ("on a dark Zion night","on a dark night"),
 ("with binoculars from Zion","with binoculars"),
 ("From dark Zion skies","From dark skies"),
 ("Under dark Zion conditions","Under dark skies"),
 ("Zion’s dark southern horizon reveals the full hook","a dark southern horizon reveals the full hook"),
]
for a,b in REPL: s=s.replace(a,b)
open(P,'w').write(s)
left=re.findall(r'[^.\"]*Zion[^.\"]*', s)
print('Zion left:', len(left)); [print('  ',x[:150]) for x in left]
