import sys,re; sys.path.insert(0,'/tmp/claude-0/build')
from common import *
head,satstyle,tail=parts('spacecraft','NASA Spacecraft','Explore spacecraft in 3D — rovers on Mars and the Moon, the Space Station, the Space Shuttle, Apollo–Soyuz, the Hubble and Webb telescopes, and Cassini at Saturn.')
vcss=open(V2+'voyager.html').read()
a=vcss.index('.vg-stage{'); b=vcss.index('.vg-help{')
CSS='<style>\n'+vcss[a:b]+'''
.vg-help{text-align:center;font-size:11.5px;color:#8A7340;margin:8px 0 0;letter-spacing:.02em}
#sc-parts{top:12px;left:12px;background:rgba(8,7,13,.66)}
#sc-deploy{top:12px;right:12px;background:rgba(8,7,13,.66);min-width:76px;color:#E4D9B8;border-color:rgba(203,168,90,.55)}
#sc-deploy[hidden]{display:none}
#sc-drive{top:50px;right:12px;background:rgba(8,7,13,.66);min-width:76px;color:#E4D9B8;border-color:rgba(203,168,90,.55)}
#sc-drive[hidden]{display:none}
#sc-drive:disabled,#sc-deploy:disabled{opacity:.55}
#sc-parts.on{background:rgba(203,168,90,.2);border-color:#CBA85A;color:#E4D9B8}
#sc-info{left:12px;bottom:12px;max-width:360px;background:rgba(8,7,13,.88);border:1px solid rgba(203,168,90,.3);border-radius:10px;
  padding:11px 14px 12px;opacity:0;transform:translateY(8px);pointer-events:none;transition:opacity .25s,transform .25s;cursor:pointer;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}
#sc-info.open{opacity:1;transform:none;pointer-events:auto}
@media(max-width:600px){#sc-info{left:8px;right:8px;bottom:8px;max-width:none}}
#sc-cv{display:block;width:100%;height:100%;touch-action:none;cursor:grab}
#sc-hot,#sc-labels{position:absolute;inset:0;pointer-events:none}
#sc-labels .vg-lab{color:#E9DEBC;text-shadow:0 0 5px #000,0 0 2px #000,0 1px 1px #000}
#sc-legend{position:absolute;left:12px;bottom:11px;display:flex;gap:14px;font:500 10px/1 Montserrat,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#E9DEBC;text-shadow:0 0 5px #000,0 0 2px #000;opacity:0;transition:opacity .4s;pointer-events:none}
#sc-legend.on{opacity:1}
.sc-photo{margin:18px auto 4px;max-width:560px}
.sc-photo img{display:block;width:100%;height:auto;border-radius:10px;border:1px solid rgba(203,168,90,.25)}
.sc-photo figcaption{margin-top:8px;font-size:12px;line-height:1.5;color:#9A875C;text-align:center}
#sc-legend i{display:inline-block;width:16px;height:3px;border-radius:2px;margin-right:6px;vertical-align:middle}
#sc-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8A7340;pointer-events:none;text-align:center;padding:0 20px}
.sc-sub[hidden]{display:none}
#sc-credit a{color:#CBA85A;text-decoration:none}
#sc-tabs a{text-decoration:none;display:inline-flex;align-items:center;justify-content:center}
.sc-kicker{text-align:center;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#9A875C;margin-top:2px}
.sc-title{text-align:center;font-size:clamp(19px,2.6vw,24px);font-weight:500;color:#F2E4BE;letter-spacing:.03em;margin:4px 0 6px}
.sc-lede{text-align:center;font-size:13.5px;line-height:1.6;color:#C9BD97;max-width:660px;margin:0 auto 14px;padding:0 10px}
.sc-dia svg{display:block;width:100%;height:auto}
.sc-dia{background:#0d0a18;border:1px solid rgba(203,168,90,.18);border-radius:10px;padding:10px 6px 4px;margin-bottom:10px}
.sc-l2a{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:10px}
@media(max-width:700px){.sc-l2a{grid-template-columns:1fr}}
.sc-l2p{background:#0d0a18;border:1px solid rgba(203,168,90,.18);border-radius:10px;padding:8px 8px 10px;min-width:0}
.sc-l2p canvas{display:block;width:100%}
.sc-l2p p{font-size:12.5px;line-height:1.55;color:#A89878;margin:8px 4px 0}
.sc-l2p p b{color:#E6CC85;font-weight:600}
.sc-why{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}
@media(max-width:700px){.sc-why{grid-template-columns:1fr}}
.sc-why .zcl-pcval{font-size:14.5px}.sc-why .zcl-pcsub{font-size:12.5px;line-height:1.55;color:#A89878}
.sc-story p{font-size:13.5px;line-height:1.65;color:#C9BD97;margin:0 0 10px}
.sc-link{display:inline-block;margin-top:4px;font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#CBA85A;text-decoration:none}
.zcl-pcards.cols4{grid-template-columns:repeat(4,1fr)}
@media(max-width:700px){.zcl-pcards.cols4{grid-template-columns:1fr 1fr}}
.sc-cmp{display:grid;grid-template-columns:minmax(78px,.55fr) 1fr 1fr;border:1px solid rgba(203,168,90,.18);border-radius:10px;overflow:hidden;background:#0d0a18}
.sc-cmp>div{padding:9px 12px;font-size:13px;line-height:1.5;color:#C9BD97;border-top:1px solid rgba(203,168,90,.12)}
.sc-cmp>.h{border-top:none;font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#CBA85A}
.sc-cmp>.k{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#9A875C;padding-top:11px}
.sc-cmph{margin-top:22px}.sc-cmpintro{margin:0 2px 12px}
.sc-wipes{display:grid;grid-template-columns:1fr 1fr;gap:14px}.sc-fig{margin:0}.sc-fig.wide{grid-column:1 / -1}.sc-fig.mid{width:100%;max-width:620px;justify-self:center}
@media(max-width:700px){.sc-wipes{grid-template-columns:1fr}}
.sc-wipe{position:relative;overflow:hidden;border-radius:10px;border:1px solid rgba(203,168,90,.18);background:#000;--x:50%}
.sc-wipe img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.sc-wipe img.top{clip-path:inset(0 calc(100% - var(--x)) 0 0)}
.sc-wipe i{position:absolute;top:0;bottom:0;left:var(--x);width:2px;margin-left:-1px;background:#E6CC85;box-shadow:0 0 6px rgba(0,0,0,.8);pointer-events:none}
.sc-wipe i::after{content:'‹ ›';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:34px;height:34px;border-radius:50%;background:rgba(8,7,13,.82);border:1px solid #E6CC85;color:#E6CC85;font:600 13px/32px Montserrat,sans-serif;text-align:center;font-style:normal;letter-spacing:.05em}
.sc-wipe .tag{position:absolute;top:8px;font:600 9.5px/1 Montserrat,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#E4D9B8;background:rgba(8,7,13,.66);padding:5px 7px;border-radius:10px;pointer-events:none}
.sc-wipe .tag.l{left:8px}.sc-wipe .tag.r{right:8px}
.sc-wipe input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:ew-resize;touch-action:pan-y}
.sc-fig figcaption{font-size:12.5px;line-height:1.55;color:#A89878;margin:8px 2px 0}.sc-fig figcaption b{color:#E4D9B8;font-weight:500}
.sc-cmpnote{font-size:13px;line-height:1.6;color:#A89878;margin:10px 2px 0}
@media(max-width:600px){.sc-cmp{grid-template-columns:76px 1fr 1fr}.sc-cmp>div{padding:8px 7px;font-size:12px}.sc-cmp>.h{font-size:9.5px;letter-spacing:.08em}.sc-cmp>.k{font-size:9px;letter-spacing:.04em;padding-top:10px}
  .sc-tabs{margin-left:14px;margin-right:14px}.sc-tabs .zcl-seg .zcl-vbtn{font-size:11px;letter-spacing:.01em;padding:8px 0}.sc-lede{padding:0 16px}.sc-kicker{padding:0 16px;text-wrap:balance}}
</style>
'''
BODY=FRAME_OPEN.replace('%TITLE%','NASA Spacecraft')+'''
    <div class="zcl-ctlrow sc-tabs"><div class="zcl-seg" id="sc-groups" role="tablist" aria-label="Destination"></div></div>
    <div class="zcl-ctlrow sc-tabs sc-sub" id="sc-sub"><div class="zcl-seg" id="sc-tabs" role="tablist" aria-label="Spacecraft"></div></div>
    <div class="sc-kicker" id="sc-kicker"></div>
    <div class="sc-title" id="sc-title"></div>
    <div class="sc-lede" id="sc-lede"></div>
    <div class="zcl-stage">
      <div class="vg-stage">
        <canvas id="sc-cv" aria-label="3D model"></canvas>
        <div id="sc-hot"></div><div id="sc-labels"></div><div id="sc-legend"></div>
        <div id="sc-loading">Loading…</div>
        <button class="zcl-vbtn vg-ovl on" id="sc-parts">Parts</button>
        <button class="zcl-vbtn vg-ovl" id="sc-deploy" hidden>Deploy</button>
        <button class="zcl-vbtn vg-ovl" id="sc-drive" hidden>Drive</button>
        <div class="vg-ovl" id="sc-info"></div>
      </div>
      <div class="zcl-ctlrow"><div class="zcl-seg" id="sc-views" role="group" aria-label="View"></div></div>
      <div class="vg-help">Drag to turn · pinch or scroll to zoom · tap a number to see what it does</div>
    </div>
    <div class="zcl-body">
      <div class="zcl-psec"><div class="zcl-psec-label">At a Glance</div><div class="zcl-pcards cols4" id="sc-cards"></div></div>
      <div class="zcl-psec" id="sc-extra" hidden><div class="zcl-psec-label" id="sc-extrat"></div><div id="sc-extrab"></div></div>
      <div class="zcl-psec"><div class="zcl-psec-label">The Story</div><div class="sc-story" id="sc-story"></div><a class="sc-link" id="sc-link" href="#"></a></div>
      <div class="zcl-note" id="sc-credit"></div>
    </div>
'''+FRAME_CLOSE
SCRIPTS='<script>'+FRAME_JS+'</script>\n<script type="module" src="spacecraft.bundle.js"></script>\n'
open(V2+'spacecraft.html','w').write(head+satstyle+CSS+BODY+SCRIPTS+tail)
print('ok')
