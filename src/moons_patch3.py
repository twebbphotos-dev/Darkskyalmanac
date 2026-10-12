p='/home/claude/work/v2/saturn.html'; s=open(p,encoding='utf-8').read()
a=s.index("    // Label: each moon remembers which side of the ring line (and how far out)")
b=s.index("    ctx.globalAlpha=1;\n  });\n\n  offList.forEach(")
new='''    // Label: sits right beside its own moon. It tries the side facing away from
    // the ring line first, then the other side, then along the line, and only
    // steps further out when those are taken — so a name is never far from its
    // dot. Each moon keeps its slot until it genuinely collides, and while the
    // moons are orbiting the label glides to a new slot instead of jumping.
    var strong=close&&!faint&&o.tier[0]!=='hard', fs=Math.round((close?12:11)*dpr);
    ctx.font=(strong?'600 ':'500 ')+fs+'px Montserrat, sans-serif';
    var txt=o.m.name, tw=ctx.measureText(txt).width;
    var mem=lblMem[txt]||(lblMem[txt]={dir:null,t:0,dx:null,dy:null});
    var sg=((o.x-cx)*nx+(o.y-cy)*ny)>=0, al=((o.x-cx)*u[0]+(o.y-cy)*u[1])>=0?1:-1;
    var DIRS=[[nx,ny],[-nx,-ny],[u[0]*al,u[1]*al],[-u[0]*al,-u[1]*al]], PREF=sg?[0,1,2,3]:[1,0,2,3];
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
    var keep= mem.dir===null ? null : slot(mem.dir,mem.t);
    var best=(keep&&first&&keep.t<=first.t)?keep:first;   // hysteresis
    if(!best||skipLabel){ mem.dx=null; return; }
    placed.push(best.box); mem.dir=best.dir; mem.t=best.t;
    var glide=moonAnim.playing&&mem.dx!==null;
    mem.dx= glide ? mem.dx+(best.ox-mem.dx)*.14 : best.ox;
    mem.dy= glide ? mem.dy+(best.oy-mem.dy)*.14 : best.oy;
    var lx=o.x+mem.dx, ly=o.y+mem.dy, dist=Math.hypot(mem.dx,mem.dy)||1, vx=mem.dx/dist, vy=mem.dy/dist;
    var edge=Math.min((tw/2+2*dpr)/Math.max(1e-6,Math.abs(vx)),(fs*.62)/Math.max(1e-6,Math.abs(vy)));
    ctx.globalAlpha=strong?1:.82;
    if(dist-edge-rad>8*dpr){                         // a leader only once the name has had to step away
      ctx.strokeStyle='rgba(203,168,90,.55)'; ctx.lineWidth=.9*dpr;
      ctx.beginPath(); ctx.moveTo(o.x+vx*(rad+2.5*dpr),o.y+vy*(rad+2.5*dpr)); ctx.lineTo(o.x+vx*(dist-edge-1.5*dpr),o.y+vy*(dist-edge-1.5*dpr)); ctx.stroke();
    }
    ctx.fillStyle= faint ? 'rgba(154,135,92,.85)' : MOONS[o.m.name].col;
    ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(txt,lx,ly); ctx.textBaseline='alphabetic';
'''
s=s[:a]+new+s[b:]
# keep names off the globe and rings when the view is close in
old="  if(ext>40){  // Saturn is only a few pixels across out here — name it"
assert s.count(old)==1
s=s.replace(old,"""  if(close){ var pa=2.34*ppr, pb=Math.max(POLAR,2.34*Math.abs(Math.sin(G.B)))*ppr, phx=Math.abs(ax[0])*pa+Math.abs(ay[0])*pb, phy=Math.abs(ax[1])*pa+Math.abs(ay[1])*pb;
    placed.push({x:cx-phx,y:cy-phy,w:2*phx,h:2*phy}); }
"""+old)
open(p,'w',encoding='utf-8').write(s); print('ok')
