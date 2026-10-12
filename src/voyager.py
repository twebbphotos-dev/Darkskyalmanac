import sys; sys.path.insert(0,'/tmp/claude-0/build')
from common import *
head,satstyle,tail=parts('voyager','Voyager 1','Voyager 1 in 3D — explore NASA’s interstellar spacecraft, see its live distance and signal time, and follow its journey from 1977 to the stars.')
CSS='''<style>
.vg-lede{text-align:center;font-size:13.5px;line-height:1.6;color:#C9BD97;max-width:640px;margin:-4px auto 16px;padding:0 12px}
.vg-stage{position:relative;border-radius:12px;overflow:hidden;border:1px solid rgba(203,168,90,.2);background:#05050a;aspect-ratio:16/10;max-height:84vh;margin:0 -14px;
  box-shadow:0 10px 40px rgba(0,0,0,.45)}
@media(max-width:1100px){.vg-stage{margin:0}}
@media(max-width:600px){.vg-stage{aspect-ratio:3/4.3}}
#vg-cv{display:block;width:100%;height:100%;touch-action:none;cursor:grab}
#vg-cv:active{cursor:grabbing}
#vg-hot{position:absolute;inset:0;pointer-events:none}
.vg-dot{position:absolute;left:0;top:0;width:22px;height:22px;border-radius:50%;border:1px solid #CBA85A;background:rgba(8,7,13,.72);
  color:#E6CC85;font:600 11px/20px Montserrat,-apple-system,sans-serif;padding:0;cursor:pointer;opacity:0;transition:opacity .3s,background .2s,color .2s;
  box-shadow:0 0 0 3px rgba(203,168,90,.14)}
.vg-dot:hover,.vg-dot.on{background:#CBA85A;color:#0d0a18}
.vg-ovl{position:absolute;z-index:2}
#vg-parts{top:12px;left:12px;background:rgba(8,7,13,.66)}
#vg-parts.on{background:rgba(203,168,90,.2);border-color:#CBA85A;color:#E4D9B8}
#vg-info{left:12px;bottom:12px;max-width:360px;background:rgba(8,7,13,.88);border:1px solid rgba(203,168,90,.3);border-radius:10px;
  padding:11px 14px 12px;opacity:0;transform:translateY(8px);pointer-events:none;transition:opacity .25s,transform .25s;cursor:pointer;
  -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}
#vg-info.open{opacity:1;transform:none;pointer-events:auto}
.vg-infon{font-size:13.5px;color:#F2E4BE;font-weight:500;display:flex;align-items:center;gap:8px;margin-bottom:5px}
.vg-infon span{width:19px;height:19px;border-radius:50%;background:#CBA85A;color:#0d0a18;font-size:10.5px;font-weight:600;display:inline-flex;align-items:center;justify-content:center}
.vg-infot{font-size:12.5px;line-height:1.55;color:#C9BD97}
#vg-homenote{top:12px;right:12px;max-width:290px;font-size:12px;line-height:1.5;color:#C9BD97;background:rgba(8,7,13,.7);border-radius:8px;
  padding:9px 12px;opacity:0;transition:opacity .4s;pointer-events:none}
#vg-homenote.show{opacity:1}
#vg-homenote b{color:#E6CC85;font-weight:500}
.vg-lab{position:absolute;left:0;top:0;font:500 10px/1 Montserrat,sans-serif;letter-spacing:.12em;text-transform:uppercase;pointer-events:none;
  white-space:nowrap;transition:opacity .3s;padding:0 0 0 16px;margin-top:-5px}
#vg-sunlab{color:#F2E4BE}#vg-earthlab{color:#9DB6E8}
#vg-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;letter-spacing:.14em;
  text-transform:uppercase;color:#8A7340;pointer-events:none}
@media(max-width:600px){#vg-info{left:8px;right:8px;bottom:8px;max-width:none}#vg-homenote{left:8px;right:8px;top:auto;bottom:8px;max-width:none}}
.sc-tabs{margin:0 0 8px}.sc-sub{margin:0 0 14px}.sc-sub .zcl-seg{border-color:rgba(203,168,90,.12);background:none}.sc-sub+.sc-kicker{margin-top:6px}
#sc-tabs a,#sc-groups a{text-decoration:none;display:inline-flex;align-items:center;justify-content:center}
.sc-kicker{text-align:center;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#9A875C;margin-top:2px}
.sc-title{text-align:center;font-size:clamp(19px,2.6vw,24px);font-weight:500;color:#F2E4BE;letter-spacing:.03em;margin:4px 0 6px}
.sc-lede{text-align:center;font-size:13.5px;line-height:1.6;color:#C9BD97;max-width:660px;margin:0 auto 14px;padding:0 10px}
@media(max-width:600px){.sc-tabs{margin-left:14px;margin-right:14px}.sc-tabs .zcl-seg .zcl-vbtn{font-size:11px;letter-spacing:.01em;padding:8px 0}.sc-lede{padding:0 16px}.sc-kicker{padding:0 16px;text-wrap:balance}}
.vg-help{text-align:center;font-size:11.5px;color:#8A7340;margin:8px 0 0;letter-spacing:.02em}
.vg-tl{list-style:none;margin:0;padding:0 0 0 20px;position:relative}
.vg-tl:before{content:"";position:absolute;left:5px;top:6px;bottom:6px;width:1px;background:linear-gradient(#CBA85A,rgba(203,168,90,.15))}
.vg-tl li{position:relative;padding:0 0 13px 8px}
.vg-tl li:before{content:"";position:absolute;left:-19px;top:5px;width:9px;height:9px;border-radius:50%;background:#141319;border:1.5px solid #CBA85A}
.vg-tl li.now:before{background:#CBA85A;box-shadow:0 0 0 4px rgba(203,168,90,.18)}
.vg-tl li.future:before{border-style:dashed;border-color:#8A7340}
.vg-tl .d{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#CBA85A}
.vg-tl .t{font-size:13.5px;line-height:1.5;color:#D9CDAA;margin-top:2px}
.vg-tl .t b{color:#F2E4BE;font-weight:500}
.vg-rec{display:grid;grid-template-columns:120px 1fr;gap:18px;align-items:center}
.vg-rec svg{width:120px;height:120px}
@media(max-width:520px){.vg-rec{grid-template-columns:1fr}.vg-rec svg{margin:0 auto}}
.zcl-pcards.cols3 .zcl-pcval{font-variant-numeric:tabular-nums}
%SEG%
</style>
'''.replace('%SEG%','.zcl-tgtwhy{font-size:13.5px;line-height:1.6;color:#C9BD97}')
REC='''<svg viewBox="0 0 120 120" aria-hidden="true"><defs><radialGradient id="rg" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#F6DE9A"/><stop offset=".55" stop-color="#C89B45"/><stop offset="1" stop-color="#6E5020"/></radialGradient></defs>
<circle cx="60" cy="60" r="56" fill="url(#rg)"/><g fill="none" stroke="rgba(60,40,10,.35)"><circle cx="60" cy="60" r="48"/><circle cx="60" cy="60" r="40"/><circle cx="60" cy="60" r="32"/><circle cx="60" cy="60" r="24"/></g>
<circle cx="60" cy="60" r="12" fill="#8A6A2C"/><circle cx="60" cy="60" r="2.2" fill="#2a1d08"/>
<g stroke="rgba(40,26,6,.55)" stroke-width=".8">%PULSARS%</g></svg>'''
import math,random
random.seed(4); pl=''
for i in range(14):
    a=i/14*2*math.pi+random.uniform(-.1,.1); L=random.uniform(18,44)
    pl+='<line x1="60" y1="60" x2="%.1f" y2="%.1f"/>'%(60+L*math.cos(a),60+L*math.sin(a))
REC=REC.replace('%PULSARS%',pl)
BODY=FRAME_OPEN.replace('%TITLE%','NASA Spacecraft')+'''
    <div class="zcl-ctlrow sc-tabs"><div class="zcl-seg" id="sc-groups" role="tablist" aria-label="Destination">
      <a class="zcl-vbtn" href="spacecraft?m=mars2020">Mars</a>
      <a class="zcl-vbtn" href="spacecraft?m=lrv">Moon</a>
      <a class="zcl-vbtn" href="spacecraft?m=iss">Earth orbit</a>
      <a class="zcl-vbtn on" href="spacecraft?m=jwst">Deep space</a>
    </div></div>
    <div class="zcl-ctlrow sc-tabs sc-sub"><div class="zcl-seg" id="sc-tabs" role="tablist" aria-label="Spacecraft">
      <a class="zcl-vbtn" href="spacecraft?m=jwst">Webb</a>
      <a class="zcl-vbtn" href="spacecraft?m=cassini">Cassini</a>
      <a class="zcl-vbtn on" href="voyager" aria-current="page">Voyager 1</a>
    </div></div>
    <div class="sc-kicker">Interstellar space · since 2012</div>
    <div class="sc-title">Voyager 1</div>
    <div class="sc-lede">Launched in 1977 to explore Jupiter and Saturn, Voyager 1 is now in interstellar space — the farthest anything built by people has ever gone. Its signal takes almost a full day to reach us.</div>
    <div class="zcl-stage">
      <div class="vg-stage">
        <canvas id="vg-cv" aria-label="3D model of the Voyager 1 spacecraft"></canvas>
        <div id="vg-hot"></div>
        <span class="vg-lab" id="vg-sunlab">The Sun</span><span class="vg-lab" id="vg-earthlab">Earth</span>
        <div id="vg-loading">Loading spacecraft…</div>
        <button class="zcl-vbtn vg-ovl on" id="vg-parts">Parts</button>
        <div class="vg-ovl" id="vg-homenote">Looking back past the dish toward home. From 172 AU the <b>Sun</b> is just the brightest star in the sky, and <b>Earth</b> is lost in its glare — only a third of a degree away (spread out here so you can see it).</div>
        <div class="vg-ovl" id="vg-info"></div>
      </div>
      <div class="zcl-ctlrow"><div class="zcl-seg" id="vg-views" role="group" aria-label="View">
        <button class="zcl-vbtn on" data-v="overview"><span class="l">Overview</span><span class="s">Overview</span></button>
        <button class="zcl-vbtn" data-v="home"><span class="l">Looking home</span><span class="s">Home</span></button>
        <button class="zcl-vbtn" data-v="close"><span class="l">Close-up</span><span class="s">Close-up</span></button>
      </div></div>
      <div class="vg-help">Drag to turn · pinch or scroll to zoom · tap a number to see what it does</div>
    </div>
    <div class="zcl-body">
      <div class="zcl-psec"><div class="zcl-psec-label">Voyager 1 Right Now</div>
        <div class="zcl-pcards cols3">
          <div class="zcl-pcard accent"><div class="zcl-pclabel">Distance from Earth</div><div class="zcl-pcval" id="vg-earthkm">—</div><div class="zcl-pcsub" id="vg-earthmi"></div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Signal time</div><div class="zcl-pcval" id="vg-light">—</div><div class="zcl-pcsub">One way, at the speed of light</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel" id="vg-ldl">One light-day in</div><div class="zcl-pcval" id="vg-ld">—</div><div class="zcl-pcsub" id="vg-ldsub"></div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Distance from the Sun</div><div class="zcl-pcval" id="vg-sunau">—</div><div class="zcl-pcsub" id="vg-sunsub"></div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Speed</div><div class="zcl-pcval" id="vg-speed">—</div><div class="zcl-pcsub" id="vg-speedsub"></div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">In space for</div><div class="zcl-pcval" id="vg-age">—</div><div class="zcl-pcsub">Launched 5 September 1977</div></div>
        </div>
      </div>
      <div class="zcl-psec"><div class="zcl-psec-label">In Your Sky</div>
        <div class="zcl-pcards"><div class="zcl-pcard"><div class="zcl-pclabel">Where it is now</div><div class="zcl-pcval" id="vg-sky">—</div><div class="zcl-pcsub" id="vg-skysub"></div></div></div>
      </div>
      <div class="zcl-psec"><div class="zcl-psec-label">The Journey</div>
        <ul class="vg-tl">
          <li><div class="d">5 Sep 1977</div><div class="t"><b>Launch</b> from Cape Canaveral, 16 days after its twin, Voyager 2, on a faster route to Jupiter.</div></li>
          <li><div class="d">5 Mar 1979</div><div class="t"><b>Jupiter.</b> Found erupting volcanoes on Io — the first active volcanoes seen beyond Earth — and a faint ring.</div></li>
          <li><div class="d">12 Nov 1980</div><div class="t"><b>Saturn and Titan.</b> A close pass of Titan revealed a thick orange haze, and Saturn’s gravity flung Voyager 1 up and out of the plane of the planets.</div></li>
          <li><div class="d">14 Feb 1990</div><div class="t"><b>The Pale Blue Dot.</b> From 6 billion km it turned its camera home for a family portrait of the planets — Earth a single pixel in a sunbeam.</div></li>
          <li><div class="d">17 Feb 1998</div><div class="t"><b>Most distant object ever built,</b> overtaking Pioneer 10.</div></li>
          <li><div class="d">16 Dec 2004</div><div class="t"><b>Termination shock</b> at 94 AU, where the solar wind slows below the speed of sound.</div></li>
          <li><div class="d">25 Aug 2012</div><div class="t"><b>Interstellar space.</b> Crossed the heliopause — the edge of the Sun’s bubble — at 121 AU.</div></li>
          <li class="now" id="vg-tlnow"><div class="d">Nov 2026</div><div class="t"><b>One light-day from Earth.</b> A message sent from here takes 24 hours to arrive, and the reply another 24.</div></li>
          <li class="future"><div class="d">Early 2030s</div><div class="t"><b>Silence.</b> Power is expected to run too low for any instrument, and contact will eventually be lost.</div></li>
          <li class="future"><div class="d">In 40,000 years</div><div class="t">Drifts within 1.6 light-years of the star <b>Gliese 445</b> — still carrying its message from Earth.</div></li>
        </ul>
      </div>
      <div class="zcl-psec"><div class="zcl-psec-label">The Golden Record</div>
        <div class="vg-rec">'''+REC+'''<div class="zcl-tgtwhy" style="margin:0">A 12-inch gold-plated copper record, bolted to the side of the spacecraft with a stylus and instructions for playing it. It carries 115 pictures, greetings in 55 languages, the sounds of wind, rain, whales and a heartbeat, and 90 minutes of music from Bach to Chuck Berry. The cover shows where Earth is, mapped against 14 pulsars. In the emptiness between the stars it should survive for a billion years or more.</div></div>
      </div>
      <div class="zcl-psec"><div class="zcl-psec-label">The Spacecraft</div>
        <div class="zcl-pcards cols3">
          <div class="zcl-pcard"><div class="zcl-pclabel">Mass</div><div class="zcl-pcval">722 kg</div><div class="zcl-pcsub">About as heavy as a small car</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Computer memory</div><div class="zcl-pcval">69 KB</div><div class="zcl-pcsub">Across its three computers</div></div>
          <div class="zcl-pcard"><div class="zcl-pclabel">Radio power</div><div class="zcl-pcval">23 watts</div><div class="zcl-pcsub">Heard by 70 m dishes on Earth</div></div>
        </div>
        <div class="zcl-note">3D model: NASA/JPL-Caltech, from NASA’s 3D Resources. Distances are calculated live from Voyager 1’s outbound path and Earth’s orbit. <a href="spacecraft" style="color:#CBA85A;text-decoration:none">More NASA spacecraft in 3D ›</a></div>
      </div>
    </div>
'''+FRAME_CLOSE
SCRIPTS='''<script>'''+FRAME_JS+'''</script>
<script src="zcl-tz.js"></script>
<script type="module" src="voyager.bundle.js"></script>
'''
out=head+satstyle+CSS+BODY+SCRIPTS+tail
open(V2+'voyager.html','w').write(out)
print(len(out))
