p='/home/claude/work/v2/saturn.html'; s=open(p,encoding='utf-8').read()
def rep(old,new,n=1):
    global s
    assert s.count(old)==n,(s.count(old),old[:80]); s=s.replace(old,new)
# frame clock, so easing is time-based and the same on every phone
rep("var lblMem={};","var lblMem={}, lastFieldT=0, fieldDT=0;   // fieldDT: seconds since the last chart frame")
rep("  var info=G.moons.map(function(mm){","  var nowT=performance.now(); fieldDT=Math.min(.1,Math.max(0,(nowT-lastFieldT)/1000)); lastFieldT=nowT;\n  var info=G.moons.map(function(mm){")
# Tonight zoom: open out gently when a moon needs room, close in very slowly
rep("  fitMem.ext = (moonAnim.playing&&fitMem.ext) ? fitMem.ext+(target-fitMem.ext)*.06 : target;",
    "  if(moonAnim.playing&&fitMem.ext){ var tau= target>fitMem.ext ? .9 : 4; fitMem.ext += (target-fitMem.ext)*(1-Math.exp(-fieldDT/tau)); }\n  else fitMem.ext=target;")
a=s.index("    var sg=((o.x-cx)*nx+(o.y-cy)*ny)>=0, al=")
b=s.index("    var lx=o.x+mem.dx, ly=o.y+mem.dy, dist=")
s=s[:a]+'''    // Directions are fixed on screen (above / below / either way along the ring
    // line), so a remembered side means the same thing frame to frame.
    var sg=((o.x-cx)*nx+(o.y-cy)*ny)>=0, al=((o.x-cx)*u[0]+(o.y-cy)*u[1])>=0;
    var DIRS=[[nx,ny],[-nx,-ny],[u[0],u[1]],[-u[0],-u[1]]], PREF=(sg?[0,1]:[1,0]).concat(al?[2,3]:[3,2]);
    function slot(dir,t){
      var d=DIRS[dir], reach=rad+7*dpr+t*13*dpr;
      var ox=d[0]*(reach+tw/2*Math.abs(d[0])), oy=d[1]*(reach+fs*.55*Math.abs(d[1]));
      var box={x:o.x+ox-tw/2-3*dpr,y:o.y+oy-fs*.62-2*dpr,w:tw+6*dpr,h:fs*1.24+4*dpr};
      var hit=placed.some(function(q){return !(box.x>q.x+q.w||box.x+box.w<q.x||box.y>q.y+q.h||box.y+box.h<q.y)});
      if(box.x<2||box.x+box.w>W-2||box.y<2||box.y+box.h>H-2) hit=true;
      return hit?null:{dir:dir,t:t,ox:ox,oy:oy,box:box};
    }
    var first=null;
    for(var t=0;t<5&&!first;t++) for(var i=0;i<4&&!first;i++) first=slot(PREF[i],t);
    // Sticky: a name keeps its side, stepping a little further out if a neighbour
    // passes, and only changes side when that side is truly blocked. While the
    // moons play it tolerates more, so names drift rather than hop.
    var keep=null, playing=moonAnim.playing;
    if(mem.dir!==null) for(var t2=0;t2<5&&!keep;t2++) keep=slot(mem.dir,t2);
    var best=(keep&&(!first||keep.t<=first.t+(playing?2:0)))?keep:first;
    var kP=1-Math.exp(-fieldDT/.5), kA=1-Math.exp(-fieldDT/.3);      // glide ~0.5 s, fade ~0.3 s
    var showIt=!!best&&!skipLabel;
    mem.a = (playing&&mem.a!==undefined) ? mem.a+((showIt?1:0)-mem.a)*kA : (showIt?1:0);
    if(!showIt){                                     // fade out where it was, rather than vanish
      if(!playing||mem.dx===null||mem.a<.03){ mem.dx=null; mem.a=0; return; }
      best={ox:mem.dx,oy:mem.dy};
    } else { placed.push(best.box); mem.dir=best.dir; mem.t=best.t; }
    var glide=playing&&mem.dx!==null;
    mem.dx= glide ? mem.dx+(best.ox-mem.dx)*kP : best.ox;
    mem.dy= glide ? mem.dy+(best.oy-mem.dy)*kP : best.oy;
'''+s[b:]
rep("    ctx.globalAlpha=strong?1:.94;\n    if(dist-edge-rad>8*dpr){","    ctx.globalAlpha=(strong?1:.94)*mem.a;\n    if(dist-edge-rad>8*dpr){")
open(p,'w',encoding='utf-8').write(s); print('ok')
