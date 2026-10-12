import sys; sys.path.insert(0,'/tmp/claude-0/audit/sci')
from p import patch
patch('saturn.html',[
("  if(top){ drawOrbits(); return; }","  $('zcl-seenkey').hidden=top;\n  if(top){ drawOrbits(); return; }"),
("  $('zcl-seenkey').style.visibility='';\n",""),
("""function renderMoons(){
  var rows=G.moons.map(function(m){
    var mag=moonMag(m), state=moonState(m), tier=visTier(m,mag,state);
    var sk=ringToSky(m.X,m.Y), sep=Math.hypot(sk[0],sk[1])*G.radiusArcsec;
    var dir=sk[0]>0?'east':'west';
    var where;
    if(state==='behind') where='Behind Saturn — hidden';
    else if(state==='transit') where='Crossing in front of Saturn';
    else if(state==='eclipsed') where='In Saturn’s shadow — eclipsed';
    else where=arc(sep)+' '+dir+' of Saturn'+(state==='glare'?' · tucked against the rings':'');
    return {m:m,mag:mag,tier:tier,where:where};
  }).sort(function(a,b){return a.mag-b.mag});
  var html='';
  rows.forEach(function(r){
    var info=MOONS[r.m.name];
    html+='<div class="zcl-moonrow'+(r.tier[0]==='no'?' dim':'')+'"><i style="background:'+info.col+'"></i><div>'
      +'<div class="mn">'+r.m.name+'</div><div class="mw">'+r.where+' · mag '+r.mag.toFixed(1)+'</div>'
      +'<div class="ms">'+info.km.toLocaleString()+' km · orbits in '+info.per+' — '+info.fact+'</div></div>'
      +'<span class="vis '+r.tier[0]+'">'+r.tier[1]+'</span></div>';
  });
  $('zcl-moons').innerHTML=html;""",
"""/* The line-up: one strip per moon, all on the same scale, so each moon's place
   beside Saturn can be read without the names colliding. The yardstick is the
   "ring-width" — the rings from tip to tip — because that is what the eye can
   judge at the eyepiece. Each moon's disc is drawn to scale with the others. */
var RINGW=4.54;        // ring span, tip to tip, in Saturn radii
var LANE=22;           // half-length of each strip, in Saturn radii — just past Titan's orbit
function laneHTML(m,col,tier,state){
  var x=Math.max(-LANE,Math.min(LANE,m.X)), far=Math.abs(m.X)>LANE, h='<span class="ln"></span>';
  for(var k=1;k<=4;k++){ var d=k*RINGW/LANE*50; h+='<span class="tk" style="left:'+(50-d).toFixed(2)+'%"></span><span class="tk" style="left:'+(50+d).toFixed(2)+'%"></span>'; }
  var ry=Math.max(1.4,22.7*Math.abs(Math.sin(G.B))).toFixed(1);
  h+='<span class="sat" style="width:'+(RINGW/(2*LANE)*100).toFixed(2)+'%"><svg viewBox="-23 -10 46 20" aria-hidden="true">'
    +'<ellipse rx="21.6" ry="'+ry+'" fill="none" stroke="#CBA85A" stroke-opacity=".7" stroke-width="2.2"/>'
    +'<ellipse rx="10" ry="9" fill="#D9BE84"/>'
    +'<path d="M-21.6 0 A21.6 '+ry+' 0 0 '+(G.B>0?0:1)+' 21.6 0" fill="none" stroke="#CBA85A" stroke-opacity=".85" stroke-width="2.2"/></svg></span>';
  var hid=(state==='behind'||state==='eclipsed'), hollow=(tier==='no'&&!hid);
  if(!far) h+='<i class="dot'+(hollow?' hollow':'')+(hid?' hid':'')+'" style="left:'+(50+x/LANE*50).toFixed(2)+'%;'+(hollow?'border-color:':'background:')+col+'"></i>';
  else h+='<span class="far" style="'+(x>0?'right:0':'left:0')+'">'+(x>0?'&#8250;':'&#8249;')+'</span>';
  return '<div class="zcl-lane">'+h+'</div>';
}
function renderMoons(){
  var rows=G.moons.map(function(m){
    var mag=moonMag(m), state=moonState(m), tier=visTier(m,mag,state);
    var sk=ringToSky(m.X,m.Y), sepR=Math.hypot(sk[0],sk[1]), sep=sepR*G.radiusArcsec;
    var dir=sk[0]>0?'east':'west';
    var where;
    if(state==='behind') where='Behind Saturn — hidden';
    else if(state==='transit') where='Crossing in front of Saturn';
    else if(state==='eclipsed') where='In Saturn’s shadow — eclipsed';
    else if(state==='glare') where='Tucked against the rings, '+dir+' side · '+arc(sep);
    else { var n=(sepR/RINGW).toFixed(1);
      where=(sepR/RINGW<.65 ? 'Just off the '+dir+' ring tip' : (n==='1.0'?'1 ring-width ':n+' ring-widths ')+dir)+' · '+arc(sep); }
    return {m:m,mag:mag,tier:tier,state:state,where:where};
  }).sort(function(a,b){return a.mag-b.mag});
  var html='';
  rows.forEach(function(r){
    var info=MOONS[r.m.name], d=Math.max(2.5,info.km/5150*30).toFixed(1);
    html+='<div class="zcl-moonrow'+(r.tier[0]==='no'?' dim':'')+'">'
      +'<span class="disc"><i style="width:'+d+'px;height:'+d+'px;background:radial-gradient(circle at 34% 30%,rgba(255,255,255,.45),rgba(255,255,255,0) 46%),radial-gradient(circle at 62% 66%,rgba(0,0,0,0) 38%,rgba(0,0,0,.42)),'+info.col+'"></i></span>'
      +'<div><div class="mn">'+r.m.name+'</div><div class="mw">'+r.where+' · mag '+r.mag.toFixed(1)+'</div></div>'
      +'<span class="vis '+r.tier[0]+'">'+r.tier[1]+'</span>'
      +laneHTML(r.m,info.col,r.tier[0],r.state)
      +'<div class="ms">'+info.km.toLocaleString()+' km across · orbits in '+info.per+' — '+info.fact+'</div></div>';
  });
  $('zcl-moons').innerHTML=html;
  // one line under the chart: which moons a telescope shows right now
  var names=function(t){ return rows.filter(function(r){return t.indexOf(r.tier[0])>=0}).map(function(r){return r.m.name}); };
  var see=names(['easy','good']), hard=names(['hard']);
  $('zcl-seen').innerHTML=(see.length?'<b>In a telescope now:</b> '+see.join(', '):'<b>No moon is easy to catch right now</b>')
    +(hard.length?' <span class="t">· Tougher: '+hard.join(', ')+'</span>':'');"""),
("""Visibility ratings assume an 8-inch telescope on a dark, steady night; moons close to the rings are harder than their brightness suggests.';""",
 """Each strip shows where a moon sits along the ring line; the ticks are one ring-width apart (the rings from tip to tip, '+arc(RINGW*G.radiusArcsec)+' right now), and an arrow means it is off the end. The discs show the moons’ true sizes next to one another. Visibility ratings assume an 8-inch telescope on a dark, steady night; moons close to the rings are harder than their brightness suggests.';"""),
(".zcl-moonrow .ms{font-size:12px;color:#8A7C5C;margin-top:3px;line-height:1.45}",".zcl-moonrow .ms{grid-column:1/-1;font-size:12px;color:#8A7C5C;line-height:1.45}"),
])
