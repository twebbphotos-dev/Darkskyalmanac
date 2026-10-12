import re
V2='/home/claude/work/v2/'
def parts(slug,title,desc):
    j=open(V2+'jupiter.html').read().split('\n')
    head='\n'.join(j[:84])+'\n'
    head=head.replace('<title>Jupiter · Dark Sky Almanac</title>','<title>'+title+' · Dark Sky Almanac</title>')
    head=re.sub(r'<meta name="description" content="[^"]*">','<meta name="description" content="'+desc+'">',head)
    head=re.sub(r'<meta property="og:description" content="[^"]*">','<meta property="og:description" content="'+desc+'">',head)
    head=head.replace('content="Jupiter · Dark Sky Almanac"','content="'+title+' · Dark Sky Almanac"')
    head=head.replace('https://app.darkskyalmanac.com/jupiter','https://app.darkskyalmanac.com/'+slug)
    head=re.sub(r'<body><!-- ═+.*?═+ -->','<body>',head,flags=re.S)
    sat=open(V2+'saturn.html').read()
    i=sat.index("<!-- SATURN — live render + moon finder"); st=sat.index("<style>",i); en=sat.index("</style>",st)+8
    satstyle=sat[st:en]
    jt=open(V2+'jupiter.html').read()
    tail=jt[jt.index('<nav class="pwa-nav">'):]
    return head,satstyle,tail
FRAME_OPEN='''<div id="zcl-pl-wrap">
<div id="zcl-pl">
  <div class="zcl-goldbar"></div>
  <div class="zcl-fl zcl-tl"></div><div class="zcl-fl zcl-tr"></div>
  <div class="zcl-fl zcl-bl"></div><div class="zcl-fl zcl-br"></div>
  <svg id="zcl-plstars" viewBox="0 0 800 700" preserveAspectRatio="xMidYMid slice"></svg>
  <div class="zcl-wrap">
    <div class="zcl-titlebar">
      <div class="zcl-maintitle">%TITLE%</div>
      <div class="zcl-titlerule">
        <span class="zcl-rline"></span>
        <svg class="zcl-rstar" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 L13.6 9.2 L21 12 L13.6 14.8 L12 22 L10.4 14.8 L3 12 L10.4 9.2 Z" fill="#CBA85A"/></svg>
        <span class="zcl-rline"></span>
      </div>
    </div>
'''
FRAME_CLOSE='''  </div>
</div>
</div>
'''
FRAME_JS='''(function(){var $=function(id){return document.getElementById(id)};
var s='';for(var i=0;i<150;i++){s+='<circle cx="'+(Math.random()*800).toFixed(1)+'" cy="'+(Math.random()*700).toFixed(1)+'" r="'+(Math.random()*.9+.2).toFixed(2)+'" fill="#fff" opacity="'+(Math.random()*.6+.1).toFixed(2)+'"/>'}$('zcl-plstars').innerHTML=s;
var fl='<svg viewBox="0 0 40 40" fill="none" stroke="#CBA85A" stroke-width="1" stroke-linecap="round">'
  +'<path d="M2 2 L2 14" stroke-width="1.4"/><path d="M2 2 L14 2" stroke-width="1.4"/>'
  +'<path d="M2 7 C12 7 7 17 17 17" opacity=".9"/><path d="M7 2 C7 12 17 7 17 17" opacity=".9"/>'
  +'<path d="M2 19 C9 19 9 12 2 12" opacity=".55"/><path d="M19 2 C19 9 12 9 12 2" opacity=".55"/>'
  +'<circle cx="17" cy="17" r="1.5" fill="#E6CC85" stroke="none"/><circle cx="2.5" cy="2.5" r="1" fill="#E6CC85" stroke="none"/></svg>';
var els=document.querySelectorAll('.zcl-fl');for(var i=0;i<els.length;i++)els[i].innerHTML=fl})();'''
def seg_css():
    j=open(V2+'jupiter.html').read()
    a=j.index('.zcl-seg{'); b=j.index('.zcl-seg .s{display:none}')
    return j[a:b]+'.zcl-seg .s{display:none}\n'
