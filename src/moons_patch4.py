import sys; sys.path.insert(0,'/tmp/claude-0/audit/sci')
from p import patch
patch('saturn.html',[
# compass reports exactly what it covers, instead of the chart reserving the whole corner
("""function compass(ctx,V,W,H,dpr){
  var ox=62*dpr, oy=H-88*dpr, L=18*dpr;
  var n=V(0,1), e=V(1,0), w=V(-1,0);""",
"""function compass(ctx,V,W,H,dpr){
  var ox=62*dpr, oy=H-88*dpr, L=18*dpr, boxes=[];
  var n=V(0,1), e=V(1,0), w=V(-1,0);"""),
("""    if(x0<6*dpr) lx+=6*dpr-x0;                                   // keep the label inside the field
    ctx.fillText(lab, lx, ly); ctx.textBaseline='alphabetic';
  }""",
"""    if(x0<6*dpr){ lx+=6*dpr-x0; x0=6*dpr; }                      // keep the label inside the field
    var fh=11*dpr, y0=ctx.textBaseline==='middle'?ly-fh/2:ctx.textBaseline==='top'?ly:ly-fh;
    boxes.push({x:x0-3*dpr,y:y0-2*dpr,w:tw+6*dpr,h:fh+4*dpr});
    boxes.push({x:Math.min(ox,x2)-5*dpr,y:Math.min(oy,y2)-5*dpr,w:Math.abs(x2-ox)+10*dpr,h:Math.abs(y2-oy)+10*dpr});
    ctx.fillText(lab, lx, ly); ctx.textBaseline='alphabetic';
  }"""),
("""  arrow(w,L*1.25,'rgba(230,204,133,.95)','DRIFT',true);
}""",
"""  arrow(w,L*1.25,'rgba(230,204,133,.95)','DRIFT',true);
  return boxes;      // what the compass covers, so moon names can steer round it
}"""),
("""  var placed=[{x:0,y:H-132*dpr,w:130*dpr,h:132*dpr},{x:W-190*dpr,y:H-26*dpr,w:190*dpr,h:26*dpr}], offList=[];""",
 """  // names keep clear of the turn buttons, the field-size caption and the compass
  var placed=[{x:0,y:H-48*dpr,w:126*dpr,h:48*dpr},{x:W-190*dpr,y:H-26*dpr,w:190*dpr,h:26*dpr}].concat(compass(ctx,V,W,H,dpr)), offList=[];"""),
("""  // compass: N and E, plus DRIFT (= west)
  compass(ctx,V,W,H,dpr);
""",""),
])
