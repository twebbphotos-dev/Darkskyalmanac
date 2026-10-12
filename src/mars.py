import sys; sys.path.insert(0,'/tmp/claude-0/build')
from common import *
head,satstyle,tail=parts('mars','Mars','Mars tonight — its phase, size and brightness, when it is closest to Earth, and a to-scale look at Olympus Mons, the tallest volcano in the solar system.')

CSS='''<style>
.mr-stage{position:relative;border-radius:12px;overflow:hidden;border:1px solid rgba(203,168,90,.18);aspect-ratio:2/1;
  background:radial-gradient(ellipse 70% 80% at 50% 50%,rgba(40,24,22,.55),#08070d 75%)}
@media(max-width:600px){.mr-stage{aspect-ratio:1/1}}
#mr-cv{display:block;width:100%;height:100%}
.mr-tag{position:absolute;font-size:11px;letter-spacing:.06em;color:#9A875C;pointer-events:none}
.mr-tag b{display:block;font-size:15px;letter-spacing:.02em;color:#F2E4BE;font-weight:500;margin-top:2px}
#mr-tl{left:14px;top:12px}#mr-tr{right:14px;top:12px;text-align:right}
@media(max-width:600px){.mr-tag{font-size:10px}.mr-tag b{font-size:13px}}
.mr-chart{position:relative}
.mr-chart svg{display:block;width:100%;height:auto;overflow:visible}
.mr-tip{position:absolute;pointer-events:none;background:rgba(8,7,13,.92);border:1px solid rgba(203,168,90,.35);border-radius:7px;
  padding:6px 9px;font-size:11.5px;color:#C9BD97;white-space:nowrap;opacity:0;transition:opacity .12s;transform:translate(-50%,-100%)}
.mr-tip b{color:#F2E4BE;font-weight:500}
.mr-om{display:grid;grid-template-columns:1.15fr 1fr;gap:14px;margin-top:4px}
@media(max-width:700px){.mr-om{grid-template-columns:1fr}}
.mr-panel{background:#0d0a18;border:1px solid rgba(203,168,90,.18);border-radius:10px;padding:12px 12px 8px}
.mr-panel h4{margin:0 0 6px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8A6E32;font-weight:600}
.mr-panel svg{display:block;width:100%;height:auto}
.mr-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-top:12px}
@media(max-width:700px){.mr-facts{grid-template-columns:1fr 1fr}}
.mr-lm{display:grid;grid-template-columns:1fr 1fr;gap:9px}
@media(max-width:620px){.mr-lm{grid-template-columns:1fr}}
.mr-lm .zcl-pcard{display:flex;gap:12px;align-items:flex-start}
.mr-lm svg{width:38px;height:38px;flex-shrink:0;margin-top:2px}
.mr-lm .zcl-pcval{font-size:14.5px}
.mr-3d{white-space:nowrap;font-size:10.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#CBA85A;text-decoration:none}
.mr-lm .zcl-pcsub{font-size:12.5px;line-height:1.5;color:#A89878}
.zcl-moonlist{display:grid;gap:8px}
.mr-moon{display:flex;align-items:center;gap:12px;background:#0d0a18;border:1px solid rgba(203,168,90,.16);border-radius:8px;padding:10px 13px}
.mr-moon svg{width:34px;height:34px;flex-shrink:0}
.mr-moon .mn{font-size:14px;color:#E4D9B8}.mr-moon .ms{font-size:12.5px;color:#9A8C6C;line-height:1.5}
%SEG%
</style>
'''.replace('%SEG%','.zcl-tgtwhy{font-size:13.5px;line-height:1.6;color:#C9BD97}')

# ── Olympus Mons: heights to scale ──
def peaks_svg():
    W,H=420,250; base=210; kmpx=8.2   # 1 km = 8.2 px, heights to scale
    s='<svg viewBox="0 0 %d %d" role="img" aria-label="Heights to scale: Everest 8.8 km, Mauna Kea 10.2 km from the sea floor, Olympus Mons 21.9 km">'%(W,H)
    s+='<defs><linearGradient id="om" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D98A5E"/><stop offset="1" stop-color="#7A3B22"/></linearGradient>'
    s+='<linearGradient id="ea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B7AE9C"/><stop offset="1" stop-color="#4E4A42"/></linearGradient></defs>'
    for km in (5,10,15,20):
        y=base-km*kmpx; s+='<line x1="34" x2="%d" y1="%.1f" y2="%.1f" stroke="rgba(203,168,90,.1)"/><text x="28" y="%.1f" text-anchor="end" font-size="9" fill="#7A6E55">%d km</text>'%(W-6,y,y,y+3,km)
    def mtn(cx,hw,h,fill,lab,sub,shield=False):
        top=base-h*kmpx
        if shield:  # broad shield: cliff-ringed base, gentle flanks, caldera notch at the top
            e=6.0*kmpx
            d=('M%.1f %d L%.1f %.1f C%.1f %.1f %.1f %.1f %.1f %.1f L%.1f %.1f L%.1f %.1f L%.1f %.1f C%.1f %.1f %.1f %.1f %.1f %.1f L%.1f %d Z'
               %(cx-hw,base, cx-hw+5,base-e, cx-hw*.55,base-e-40, cx-hw*.25,top+6, cx-16,top, cx-9,top+6, cx+9,top+6, cx+16,top,
                 cx+hw*.25,top+6, cx+hw*.55,base-e-40, cx+hw-5,base-e, cx+hw,base))
        else:
            d='M%.1f %d L%.1f %.1f L%.1f %.1f L%.1f %.1f L%.1f %d Z'%(cx-hw,base,cx-hw*.3,top+h*kmpx*.35,cx,top,cx+hw*.25,top+h*kmpx*.3,cx+hw,base)
        return '<path d="%s" fill="url(#%s)"/><text x="%.1f" y="%.1f" text-anchor="middle" font-size="11" fill="#F2E4BE">%s</text><text x="%.1f" y="%.1f" text-anchor="middle" font-size="9.5" fill="#9A875C">%s</text>'%(d,fill,cx,top-18,lab,cx,top-6,sub)
    s+=mtn(78,34,8.85,'ea','Everest','8.8 km')
    s+=mtn(150,40,10.2,'ea','Mauna Kea','10.2 km*')
    s+=mtn(316,100,21.9,'om','Olympus Mons','21.9 km',True)
    y=base-11*kmpx; s+='<line x1="34" x2="%d" y1="%.1f" y2="%.1f" stroke="rgba(214,228,250,.55)" stroke-dasharray="3 4"/>'%(W-6,y,y)
    s+='<rect x="%d" y="%.1f" width="86" height="15" rx="7.5" fill="rgba(8,7,13,.75)"/><text x="%d" y="%.1f" text-anchor="middle" font-size="9" fill="#C8D8F0">airliners cruise</text>'%(W-94,y+4,W-51,y+14.5)
    s+='<line x1="34" x2="%d" y1="%d" y2="%d" stroke="rgba(203,168,90,.4)"/>'%(W-6,base,base)
    s+='<text x="34" y="%d" font-size="9" fill="#7A6E55">*measured from the sea floor · widths not to scale</text></svg>'%(base+26)
    return s

# ── Olympus Mons footprint over Utah, to scale ──
def utah_svg():
    import math
    lat0=39.4; k=math.cos(math.radians(lat0))*111.32   # km per degree of longitude
    W,H=360,300; cx,cy=W/2,H/2+6; sc=0.38               # px per km
    def P(lat,lon): return (cx+(lon+111.55)*k*sc, cy-(lat-39.5)*110.57*sc)
    ut=[(42,-114.05),(42,-111.05),(41,-111.05),(41,-109.05),(37,-109.05),(37,-114.05)]
    pts=' '.join('%.1f,%.1f'%P(a,b) for a,b in ut)
    s='<svg viewBox="0 0 %d %d" role="img" aria-label="Olympus Mons drawn to scale over the state of Utah, covering nearly all of it">'%(W,H)
    s+='<defs><radialGradient id="omf" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#C9784E" stop-opacity=".55"/><stop offset=".8" stop-color="#9C4C2C" stop-opacity=".35"/><stop offset="1" stop-color="#9C4C2C" stop-opacity=".12"/></radialGradient></defs>'
    r=300*sc
    s+='<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="url(#omf)" stroke="#D98A5E" stroke-width="1.4"/>'%(cx,cy,r*1.04,r*.94)
    s+='<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="rgba(60,22,12,.55)" stroke="#D98A5E" stroke-width=".8"/>'%(cx+6,cy-4,40*sc,30*sc)
    s+='<polygon points="%s" fill="none" stroke="#E6CC85" stroke-width="1.6" stroke-linejoin="round"/>'%pts
    zx,zy=P(37.2,-113.0); s+='<circle cx="%.1f" cy="%.1f" r="3" fill="#E6CC85"/><text x="%.1f" y="%.1f" font-size="10" fill="#E6CC85">Zion</text>'%(zx,zy,zx+6,zy+4)
    sx,sy=P(40.76,-111.89); s+='<circle cx="%.1f" cy="%.1f" r="2.4" fill="#C9BD97"/><text x="%.1f" y="%.1f" font-size="9.5" fill="#C9BD97">Salt Lake City</text>'%(sx,sy,sx+5,sy-4)
    s+='<text x="%.1f" y="%.1f" font-size="9.5" fill="#D98A5E" text-anchor="middle">summit caldera</text>'%(cx+6,cy-4-30*sc-5)
    s+='<text x="%.1f" y="%.1f" font-size="10.5" fill="#F2E4BE" text-anchor="middle">Olympus Mons · 600 km across</text>'%(cx,H-6)
    L=100*sc; s+='<line x1="12" x2="%.1f" y1="16" y2="16" stroke="#9A875C" stroke-width="1.5"/><text x="12" y="30" font-size="9" fill="#9A875C">100 km</text>'%(12+L)
    s+='</svg>'
    return s

def icon(kind):
    g='<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="#2a1712" stroke="rgba(217,138,94,.45)"/>'
    d={
     'valles':'<path d="M6 21 C12 18 16 23 21 20 S30 17 34 19" stroke="#0e0706" stroke-width="3.2" fill="none" stroke-linecap="round"/><path d="M13 20 l2 -4 M24 19 l3 4" stroke="#0e0706" stroke-width="1.6"/>',
     'hellas':'<circle cx="20" cy="21" r="10" fill="#4a2a1d" stroke="#E0A07A" stroke-width="1"/><circle cx="20" cy="21" r="5.5" fill="#6b3b27"/>',
     'polar':'<path d="M6 13 A18 18 0 0 1 34 13 Q20 20 6 13 Z" fill="#F4EEE6"/><path d="M11 27 Q20 33 29 27" stroke="#6b3b27" fill="none"/>',
     'syrtis':'<path d="M17 8 C23 12 21 18 26 24 C28 29 22 32 17 30 C14 25 18 20 14 14 Z" fill="#241510"/>',
     'tharsis':'<circle cx="13" cy="25" r="4" fill="#9C4C2C" stroke="#E0A07A" stroke-width=".8"/><circle cx="20" cy="20" r="4" fill="#9C4C2C" stroke="#E0A07A" stroke-width=".8"/><circle cx="27" cy="15" r="4" fill="#9C4C2C" stroke="#E0A07A" stroke-width=".8"/><circle cx="13" cy="25" r="1.3" fill="#2a1712"/><circle cx="20" cy="20" r="1.3" fill="#2a1712"/><circle cx="27" cy="15" r="1.3" fill="#2a1712"/>',
     'jezero':'<circle cx="20" cy="20" r="11" fill="#5a3322" stroke="#E0A07A" stroke-width="1"/><path d="M9 14 C13 17 15 18 17 20 L22 23 L19 25 Z" fill="#b98763"/><circle cx="23" cy="22" r="1.6" fill="#E6CC85"/>',
    }[kind]
    return g+d+'</svg>'

LM=[('valles','Valles Marineris','A canyon system 4,000 km long and up to 7 km deep — it would stretch from Los Angeles to New York. The whole Grand Canyon would fit inside one of its side branches.'),
    ('tharsis','Tharsis','A volcanic plateau some 4,000 km across, topped by three more giant volcanoes in a row — Arsia, Pavonis and Ascraeus Mons — with Olympus Mons off its western edge.'),
    ('hellas','Hellas Basin','An impact scar 2,300 km wide and over 7 km deep — the lowest place on Mars. Often filled with frost or cloud, so it can look bright in a telescope.'),
    ('polar','The polar caps','Water ice capped by a winter layer of frozen carbon dioxide. A cap is usually the first detail you notice in a small telescope, and it visibly shrinks through the Martian spring.'),
    ('syrtis','Syrtis Major','A dark plain of volcanic rock — the first surface feature ever recorded on another planet, sketched by Christiaan Huygens in 1659. Easy to spot in a small telescope when it faces us.'),
    ('jezero','Jezero Crater','An old lake bed with a river delta, where NASA’s Perseverance rover landed in 2021 to search for signs of ancient life. <a class="mr-3d" href="spacecraft?m=mars2020">See it in 3D ›</a>')]
LMHTML=''.join('<div class="zcl-pcard">'+icon(k)+'<div><div class="zcl-pcval">'+n+'</div><div class="zcl-pcsub">'+t+'</div></div></div>' for k,n,t in LM)

def moon_svg(rx,ry,col):
    return '<svg viewBox="0 0 34 34" aria-hidden="true"><ellipse cx="17" cy="17" rx="%.1f" ry="%.1f" fill="%s"/><circle cx="%.1f" cy="15" r="1.6" fill="rgba(0,0,0,.25)"/></svg>'%(rx,ry,col,17-rx*.3)

BODY=FRAME_OPEN.replace('%TITLE%','Mars')+'''
    <div class="zcl-stage">
      <div class="mr-stage">
        <canvas id="mr-cv" aria-label="Mars as it looks tonight, shaded to its current phase"></canvas>
        <div class="mr-tag" id="mr-tl"></div><div class="mr-tag" id="mr-tr"></div>
      </div>
      <div class="zcl-ctlrow"><div class="zcl-seg" id="mr-sizes" role="group" aria-label="Compare sizes"></div></div>
      <div class="zcl-stagenote" id="mr-note"></div>
    </div>
    <div class="zcl-body">
      <div class="zcl-psec"><div class="zcl-psec-label">Mars Tonight</div>
        <div class="zcl-pcards cols4" id="mr-tonight"></div>
      </div>
      <div class="zcl-psec"><div class="zcl-psec-label">When to See It</div>
        <div class="zcl-seasongrid" id="zcl-season"></div>
        <div class="zcl-note">Dates for your saved location. About every 26 months Mars slips behind the Sun’s glare for a while, then reappears in the morning sky.</div>
      </div>
      <div class="zcl-psec"><div class="zcl-psec-label">Getting Closer</div>
        <div class="mr-chart" id="mr-chart"><div class="mr-tip" id="mr-tip"></div></div>
        <div class="zcl-note">How big Mars looks through a telescope, over the next ten years. Every 26 months Earth overtakes Mars on the inside track and the gap closes — an <b>opposition</b>. Because Mars’s orbit is lopsided, some passes are far closer than others.</div>
      </div>
      <div class="zcl-psec"><div class="zcl-psec-label">Olympus Mons</div>
        <div class="zcl-tgtwhy" style="margin:0 0 12px">The tallest volcano in the solar system — a shield volcano like those of Hawaii, grown enormous because Mars has no moving plates to carry it away from the hot spot beneath. Lava piled up in the same place for billions of years.</div>
        <div class="mr-om">
          <div class="mr-panel"><h4>How tall</h4>'''+peaks_svg()+'''</div>
          <div class="mr-panel"><h4>How wide — laid over Utah</h4>'''+utah_svg()+'''</div>
        </div>
        <div class="mr-facts">
          <div class="zcl-pcard"><div class="zcl-pclabel">Height</div><div class="zcl-pcval">21.9 km</div><div class="zcl-pcsub">2½ times Everest</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Width</div><div class="zcl-pcval">600 km</div><div class="zcl-pcsub">Wider than Utah is tall</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Summit caldera</div><div class="zcl-pcval">80 × 60 km</div><div class="zcl-pcsub">Up to 3 km deep</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Edge cliffs</div><div class="zcl-pcval">Up to 8 km</div><div class="zcl-pcsub">A steep scarp around much of its base</div></div>
        </div>
        <div class="zcl-note">Its slopes are only a few degrees on average, so climbing it would feel like a very long, gentle walk — and it is so broad that from its edge the summit would sit beyond the horizon. Some of its lava flows may be only a few million years old.</div>
      </div>
      <div class="zcl-psec"><div class="zcl-psec-label">More Landmarks</div>
        <div class="mr-lm">'''+LMHTML+'''</div>
      </div>
      <div class="zcl-psec"><div class="zcl-psec-label">The Two Moons</div>
        <div class="zcl-moonlist">
          <div class="mr-moon">'''+moon_svg(13,10,'#8C7F6E')+'''<span><span class="mn">Phobos</span><br><span class="ms">27 km long · orbits in 7 hours 39 minutes — faster than Mars spins, so from the surface it rises in the west and sets in the east, twice a day. It is spiralling inward and is expected to break apart or crash into Mars within about 50 million years.</span></span></div>
          <div class="mr-moon">'''+moon_svg(8,6.5,'#9A8C78')+'''<span><span class="mn">Deimos</span><br><span class="ms">15 km long · orbits in 30.3 hours. From Mars it would look like a bright star, barely a disc at all.</span></span></div>
        </div>
        <div class="zcl-note">Both are dark and lumpy. They look like captured asteroids, though they may be debris from a giant impact — Japan’s MMX mission aims to find out. Discovered in 1877 and named for the sons of Ares: Fear and Dread. Near opposition they can be glimpsed in larger telescopes if Mars’s glare is kept out of view.</div>
      </div>
      <div class="zcl-psec"><div class="zcl-psec-label">The Planet Itself</div>
        <div class="zcl-pcards cols3">
          <div class="zcl-pcard"><div class="zcl-pclabel">Diameter</div><div class="zcl-pcval">6,779 km</div><div class="zcl-pcsub">About half of Earth</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Day</div><div class="zcl-pcval">24h 40m</div><div class="zcl-pcsub">One sol — remarkably Earth-like</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Year</div><div class="zcl-pcval">687 days</div><div class="zcl-pcsub">Nearly two Earth years</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Gravity</div><div class="zcl-pcval">38%</div><div class="zcl-pcsub">You’d weigh a bit over a third</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Air</div><div class="zcl-pcval">95% CO₂</div><div class="zcl-pcsub">Under 1% of Earth’s pressure</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Temperature</div><div class="zcl-pcval">−153 to 20 °C</div><div class="zcl-pcsub">Polar night to summer noon</div></div>
        </div>
        <div class="zcl-note">Mars is red because its dust is rusted — iron oxidised over billions of years. Through a small telescope near opposition, look for a white polar cap and dark markings like Syrtis Major rotating slowly into view; Mars turns only a little slower than Earth, so the same face comes back about 40 minutes later each night.</div>
      </div>
    </div>
'''+FRAME_CLOSE

JS=open('/tmp/claude-0/build/mars.js').read()
SCRIPTS='<script>'+FRAME_JS+'</script>\n<script src="zcl-tz.js"></script>\n<script src="zcl-season.js"></script>\n<script>\n'+JS+'\n</script>\n'
open(V2+'mars.html','w').write(head+satstyle+CSS+BODY+SCRIPTS+tail)
print('ok')
