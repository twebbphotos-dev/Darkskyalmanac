import sys; sys.path.insert(0,'/tmp/claude-0/audit/sci')
from p import patch
patch('saturn.html',[
# ---------- CSS ----------
("@media(max-width:560px){#zcl-hero{aspect-ratio:1.9/1}#zcl-field{aspect-ratio:1.25/1}}",
 "@media(max-width:560px){#zcl-hero{aspect-ratio:1.9/1}#zcl-field{aspect-ratio:1.12/1}}"),
(""".zcl-moonrow{display:grid;grid-template-columns:14px 1fr auto;gap:4px 11px;align-items:start;
  background:#0d0a18;border:1px solid rgba(203,168,90,.16);border-radius:8px;padding:10px 13px;margin-bottom:8px}
.zcl-moonrow i{width:11px;height:11px;border-radius:50%;margin-top:4px}""",
""".zcl-moonrow{display:grid;grid-template-columns:32px 1fr auto;gap:0 11px;align-items:center;
  background:#0d0a18;border:1px solid rgba(203,168,90,.16);border-radius:8px;padding:10px 13px;margin-bottom:8px}
/* the moon itself, drawn to scale with the other seven */
.zcl-moonrow .disc{display:flex;align-items:center;justify-content:center;height:32px}
.zcl-moonrow .disc i{display:block;border-radius:50%;flex-shrink:0}
/* where it sits along the ring line: Saturn in the middle, one tick per ring-width */
.zcl-lane{grid-column:1/-1;position:relative;height:20px;margin:9px 0 6px}
.zcl-lane .ln{position:absolute;left:0;right:0;top:50%;height:1px;background:rgba(203,168,90,.16)}
.zcl-lane .tk{position:absolute;top:50%;width:1px;height:7px;margin-top:-3.5px;background:rgba(203,168,90,.3)}
.zcl-lane .sat{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);line-height:0}
.zcl-lane .sat svg{display:block;width:100%;height:auto;overflow:visible}
.zcl-lane .dot{position:absolute;top:50%;width:9px;height:9px;margin:-4.5px 0 0 -4.5px;border-radius:50%;box-shadow:0 0 7px 1px rgba(255,244,214,.42)}
.zcl-lane .dot.hollow{background:none;border:1.5px solid;box-shadow:none;opacity:.75}
.zcl-lane .dot.hid{opacity:.4;box-shadow:none}
.zcl-lane .far{position:absolute;top:50%;transform:translateY(-54%);font-size:15px;line-height:1;color:#CBA85A}
.zcl-lanehdr{display:flex;justify-content:space-between;font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;color:#8A7340;padding:0 14px;margin:0 0 7px}
.zcl-seen{text-align:center;font-size:13px;line-height:1.55;color:#C9BD97;margin:11px auto 0;padding:0 6px;max-width:640px}
.zcl-seen b{color:#F2E4BE;font-weight:600}
.zcl-seen .t{color:#9A875C}
.zcl-seenkey{text-align:center;font-size:11px;line-height:1.5;color:#8A7340;margin:4px auto 2px;padding:0 6px}"""),
# ---------- markup ----------
("""        <div class="zcl-fov" id="zcl-fov"></div>
      </div>
      <div class="zcl-ctlrow">""",
"""        <div class="zcl-fov" id="zcl-fov"></div>
      </div>
      <div class="zcl-seen" id="zcl-seen"></div>
      <div class="zcl-seenkey" id="zcl-seenkey">Bigger dot = brighter moon. A hollow ring is too faint for an 8-inch telescope.</div>
      <div class="zcl-ctlrow">"""),
("""<div class="zcl-seg" id="zcl-zoombar" role="group" aria-label="Zoom"><button class="zcl-vbtn" data-zoom="inner"><span class="l">Inner moons</span><span class="s">Inner</span></button><button class="zcl-vbtn on" data-zoom="titan">""",
 """<div class="zcl-seg" id="zcl-zoombar" role="group" aria-label="Zoom"><button class="zcl-vbtn on" data-zoom="fit"><span class="l">Tonight’s moons</span><span class="s">Tonight</span></button><button class="zcl-vbtn" data-zoom="inner"><span class="l">Inner moons</span><span class="s">Inner</span></button><button class="zcl-vbtn" data-zoom="titan">"""),
("""      <div class="zcl-psec"><div class="zcl-psec-label">The Moons Right Now</div>
        <div id="zcl-moons"></div>""",
"""      <div class="zcl-psec"><div class="zcl-psec-label">The Moons Right Now</div>
        <div class="zcl-lanehdr"><span>&#9664; East</span><span>Saturn</span><span>West &#9654;</span></div>
        <div id="zcl-moons"></div>"""),
# ---------- state ----------
("var st={ mode:'dob', rot:{sky:0,dob:180,diag:0}, zoom:'titan', labels:true };",
 "var st={ mode:'dob', rot:{sky:0,dob:180,diag:0}, zoom:'fit', labels:true };"),
("if(sv.zoom) st.zoom=sv.zoom; } }catch(e){}",
 "if(sv.zoom && sv.zv===2) st.zoom=sv.zoom; } }catch(e){}   // zv: zoom choices saved before \"Tonight\" existed start on it"),
("o.mode=st.mode; o.rot=st.rot; o.zoom=st.zoom; localStorage.setItem",
 "o.mode=st.mode; o.rot=st.rot; o.zoom=st.zoom; o.zv=2; localStorage.setItem"),
# ---------- eyepiece chart ----------
("""var ZOOM={inner:10.5, titan:23, wide:64};
var lblMem={};
var fieldPlanet={key:'',img:null};""",
"""var ZOOM={inner:10.5, titan:23, wide:64};
var lblMem={};
var fieldPlanet={gkey:'',ppr:1,img:null,t:0};
/* "Tonight" zoom: frame just the moons a telescope shows right now, so they
   spread across the field instead of crowding Saturn. Far-flung Iapetus is
   left to an edge arrow. While the moons are playing the frame eases after
   them rather than jumping. */
var fitMem={ext:0};
function fitExtent(list){
  var r=0;
  list.forEach(function(o){
    if(o.tier[0]==='no'||o.state==='behind') return;
    var d=Math.hypot(o.m.X,o.m.Y);
    if(o.m.name==='Iapetus'&&d>26) return;
    if(d>r) r=d;
  });
  var target=Math.max(3.8,Math.min(26,r*1.24));
  fitMem.ext = (moonAnim.playing&&fitMem.ext) ? fitMem.ext+(target-fitMem.ext)*.06 : target;
  return fitMem.ext;
}"""),
("""  var ext=ZOOM[st.zoom], m=26*dpr;
  var ppr=Math.min(""",
"""  var info=G.moons.map(function(mm){ var mag=moonMag(mm), state=moonState(mm); return {m:mm, mag:mag, state:state, tier:visTier(mm,mag,state)}; });
  var ext= st.zoom==='fit' ? fitExtent(info) : ZOOM[st.zoom], m=(st.zoom==='fit'?32:26)*dpr;
  $('zcl-seenkey').style.visibility='';
  var ppr=Math.min("""),
("""  var key=[Math.round(ppr*10),(G.B*R2D).toFixed(2),(G.dU*R2D).toFixed(1)].join('|');
  if(fieldPlanet.key!==key){ fieldPlanet.img=renderPlanet(G,ppr,2.36); fieldPlanet.key=key; }
  var P=fieldPlanet.img;""",
"""  // The globe is ray-traced once and reused. While the frame is still moving
  // (playing, or scrubbing in the "Tonight" zoom) the last render is scaled to
  // fit, and a sharp one is drawn as soon as things settle.
  var gkey=(G.B*R2D).toFixed(2)+'|'+(G.dU*R2D).toFixed(1), pr=fieldPlanet.img?ppr/fieldPlanet.ppr:0;
  clearTimeout(fieldPlanet.t);
  if(!fieldPlanet.img || fieldPlanet.gkey!==gkey || pr<.5 || pr>2){ fieldPlanet.img=renderPlanet(G,ppr,2.36); fieldPlanet.gkey=gkey; fieldPlanet.ppr=ppr; }
  else if(Math.abs(pr-1)>.004){ fieldPlanet.t=setTimeout(function(){ if(moonAnim.playing||st.mode==='top') return; fieldPlanet.gkey=''; drawField(); },220); }
  var P=fieldPlanet.img, ps=ppr/fieldPlanet.ppr;"""),
("""  ctx.setTransform(ax[0],ax[1],-ay[0],-ay[1],cx,cy);   // image x -> X, image y(down) -> -Y""",
 """  ctx.setTransform(ax[0]*ps,ax[1]*ps,-ay[0]*ps,-ay[1]*ps,cx,cy);   // image x -> X, image y(down) -> -Y"""),
("""  var ms=G.moons.map(function(mm){
    var sk=ringToSky(mm.X,mm.Y), p=V(sk[0],sk[1]), mag=moonMag(mm), state=moonState(mm);
    return {m:mm, x:cx+p[0]*ppr, y:cy+p[1]*ppr, mag:mag, state:state, tier:visTier(mm,mag,state)};
  });""",
"""  var ms=info.map(function(o){
    var sk=ringToSky(o.m.X,o.m.Y), p=V(sk[0],sk[1]); o.x=cx+p[0]*ppr; o.y=cy+p[1]*ppr;
    // dot size follows brightness, the way a star chart does: Titan is unmistakably the biggest
    o.rad=Math.max(1.8,Math.min(6.4,1.5+(12.9-o.mag)*1.04))*dpr;
    return o;
  });
  var close=ext<20;                                  // room to name every moon a telescope can show"""),
("""  ms.forEach(function(o){ if(o.state!=='behind') placed.push({x:o.x-7*dpr,y:o.y-7*dpr,w:14*dpr,h:14*dpr}); });
  if(st.zoom==='wide'){""",
"""  ms.forEach(function(o){ if(o.state!=='behind'){ var pb=o.rad+3*dpr; placed.push({x:o.x-pb,y:o.y-pb,w:2*pb,h:2*pb}); } });
  if(ext>40){"""),
("""    var skipLabel = BRIGHT.indexOf(o.m.name)<0 && o.m.name!=='Iapetus' && !(st.zoom==='inner' && (o.m.name==='Enceladus'||o.m.name==='Mimas'));
    if(!inField){ if(!skipLabel) offList.push(o); return; }
    var rad=Math.max(1.4,Math.min(4.2,1.2+(12.6-o.mag)*.62))*dpr;
    var alpha= o.state==='eclipsed'?.25 : faint?.45 : 1;
    var gr=ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,rad*3.2);
    gr.addColorStop(0,'rgba(255,248,230,'+(.55*alpha)+')'); gr.addColorStop(1,'rgba(255,248,230,0)');
    ctx.fillStyle=gr; ctx.beginPath(); ctx.arc(o.x,o.y,rad*3.2,0,7); ctx.fill();
    ctx.globalAlpha=alpha; ctx.fillStyle=MOONS[o.m.name].col; ctx.beginPath(); ctx.arc(o.x,o.y,rad,0,7); ctx.fill(); ctx.globalAlpha=1;""",
"""    // Close in, every moon a telescope can show is named (and on "Inner moons" the faint ones too).
    // Zoomed far out they pile onto Saturn, so only the four brightest and Iapetus keep a name.
    var skipLabel = close ? (faint && !(st.zoom==='inner' && (o.m.name==='Enceladus'||o.m.name==='Mimas')))
                          : (BRIGHT.indexOf(o.m.name)<0 && o.m.name!=='Iapetus');
    if(!inField){ if(!skipLabel) offList.push(o); return; }
    var rad=o.rad;
    if(faint && o.state!=='eclipsed'){               // there, but beyond the telescope: a hollow ring
      ctx.strokeStyle=MOONS[o.m.name].col; ctx.globalAlpha=.5; ctx.lineWidth=1.2*dpr;
      ctx.beginPath(); ctx.arc(o.x,o.y,Math.max(rad,2.6*dpr),0,7); ctx.stroke(); ctx.globalAlpha=1;
    } else {
      var alpha= o.state==='eclipsed'?.25 : o.tier[0]==='hard'?.72 : 1;
      var gr=ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,rad*2.7);
      gr.addColorStop(0,'rgba(255,248,230,'+(.5*alpha)+')'); gr.addColorStop(1,'rgba(255,248,230,0)');
      ctx.fillStyle=gr; ctx.beginPath(); ctx.arc(o.x,o.y,rad*2.7,0,7); ctx.fill();
      ctx.globalAlpha=alpha; ctx.fillStyle=MOONS[o.m.name].col; ctx.beginPath(); ctx.arc(o.x,o.y,rad,0,7); ctx.fill(); ctx.globalAlpha=1;
    }"""),
("""    var fs=Math.round(11*dpr); ctx.font='500 '+fs+'px Montserrat, sans-serif';
    var txt=o.m.name, tw=ctx.measureText(txt).width;""",
"""    var fs=Math.round((close?12:11)*dpr); ctx.font=(close?'600 ':'500 ')+fs+'px Montserrat, sans-serif';
    var txt=o.m.name, tw=ctx.measureText(txt).width;"""),
("""      var off=(10+tier*14)*dpr*sgn, lx=o.x+nx*off, ly=o.y+ny*off;""",
 """      var off=(10*dpr+rad*.6+tier*14*dpr)*sgn, lx=o.x+nx*off, ly=o.y+ny*off;"""),
("""    ctx.strokeStyle='rgba(203,168,90,.28)'; ctx.lineWidth=.8*dpr;
    ctx.beginPath(); ctx.moveTo(o.x+(lx-o.x)*.18,o.y+(ly-o.y)*.18);""",
 """    ctx.strokeStyle='rgba(203,168,90,.5)'; ctx.lineWidth=.9*dpr;
    var lk=Math.min(.6,(rad+2.5*dpr)/Math.max(1,Math.hypot(lx-o.x,ly-o.y)));   // leader starts just clear of the dot
    ctx.beginPath(); ctx.moveTo(o.x+(lx-o.x)*lk,o.y+(ly-o.y)*lk);"""),
# top view
("var OZ={inner:10.5, titan:23, wide:63};","var OZ={fit:23, inner:10.5, titan:23, wide:63};"),
])
