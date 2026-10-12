# one-off markup/script edits; each is safe to re-run
import glob,re
V2='/home/claude/work/v2/'
def sub(path,old,new,count=1):
    s=open(path).read()
    if new in s and old not in s: return
    assert s.count(old)>=1, (path, old[:60])
    s=s.replace(old,new) if count==0 else s.replace(old,new,count)
    open(path,'w').write(s)
# settings: escape sequences printed as text
p=V2+'settings.html'; s=open(p).read()
parts=re.split(r'(<script\b.*?</script>)',s,flags=re.S)
for i,t in enumerate(parts):
    if not t.startswith('<script'): parts[i]=re.sub(r'\\u([0-9a-fA-F]{4})',lambda m:chr(int(m.group(1),16)),t)
open(p,'w').write(''.join(parts))
# jupiter / saturn: legend items stay whole
sub(V2+'jupiter.html','<div class="zcl-mkey"><i class="nb"></i> night at your location <i class="tw"></i> Ganymede swinging east &harr; west</div>','<div class="zcl-mkey"><span><i class="nb"></i> night at your location</span> <span><i class="tw"></i> Ganymede swinging east &harr; west</span></div>')
sub(V2+'saturn.html','<div class="zcl-mkey"><i class="nb"></i> night at your location <i class="tw"></i> Titan swinging east &harr; west</div>','<div class="zcl-mkey"><span><i class="nb"></i> night at your location</span> <span><i class="tw"></i> Titan swinging east &harr; west</span></div>')
# forecast: the date breaks after the weekday, never inside "October 6"
sub(V2+'forecast.html',"""+'<div class="zcl-ddate">'+DY[date.getDay()]+', '+MO[date.getMonth()]+' '+date.getDate()+'</div>'""","""+'<div class="zcl-ddate">'+DY[date.getDay()]+', <span>'+MO[date.getMonth()]+' '+date.getDate()+'</span></div>'""",0)
# map engine: card height known to the layout; controls step aside while the list is open
p=V2+'map-engine.js'
sub(p,"  $('es-card').classList.add('on');\n  document.body.classList.add('card-open');","  $('es-card').classList.add('on');\n  document.body.classList.add('card-open');\n  document.body.style.setProperty('--card-h', $('es-card').offsetHeight + 'px');")
sub(p,"function openDrawer(){ drawer.classList.add('open') }\nfunction closeDrawer(){ drawer.classList.remove('open') }\n$('es-drawer-handle').addEventListener('click', ()=>{\n  drawer.classList.toggle('open');\n});","function openDrawer(){ drawer.classList.add('open'); document.body.classList.add('drawer-open') }\nfunction closeDrawer(){ drawer.classList.remove('open'); document.body.classList.remove('drawer-open') }\n$('es-drawer-handle').addEventListener('click', ()=>{\n  if(drawer.classList.contains('open')) closeDrawer(); else openDrawer();\n});")
sub(V2+'objects.html','or jump directly via the bottom nav.','or jump directly from the menu above.')

# moon: a rise-at-sunset / set-at-sunrise pair is listed in the order it happens
p=V2+'moon.html'
sub(p,"""        const q=picks[j]; picks.splice(j,1);
        rowsList.push({ico:'\\u25CF',good:h.ill>0.85,ill:h.ill,i:h.i,i2:q.i,hits:[h,q],
          label:h.label+(q.i!==h.i?' \\u2013 '+q.label.replace(/^\\S+\\s/,''):''),
          title:brightTitle(h.ill),
          times:pair(tm(h.moonLbl,h.moonMin),tm(h.sunLbl,h.sunMin))
                +'<br>'+pair(tm(q.moonLbl,q.moonMin),tm(q.sunLbl,q.sunMin)),
          info:altdec(h)+' \\u00B7 '+Math.round(q.altAtSun||0)+'\\u00B0 up at sunrise',
          desc:'rises as the Sun sets, then sets as the Sun rises \\u2014 golden light at both ends'});""",
"""        const q=picks[j]; picks.splice(j,1);
        const e1=q.i<=h.i?q:h, e2=e1===h?q:h, qa=Math.round(q.altAtSun||0);   // in the order they happen
        rowsList.push({ico:'\\u25CF',good:h.ill>0.85,ill:h.ill,i:h.i,i2:q.i,hits:[h,q],
          label:e1.label+(q.i!==h.i?' \\u2013 '+e2.label.replace(/^\\S+\\s/,''):''),
          title:brightTitle(h.ill),
          times:pair(tm(e1.moonLbl,e1.moonMin),tm(e1.sunLbl,e1.sunMin))
                +'<br>'+pair(tm(e2.moonLbl,e2.moonMin),tm(e2.sunLbl,e2.sunMin)),
          info:altdec(h)+' \\u00B7 '+(qa<=0?'on the horizon':qa+'\\u00B0 up')+' at sunrise',
          desc:(e1===h?'rises as the Sun sets, then sets as the Sun rises':'sets as the Sun rises, then rises as the Sun sets')+' \\u2014 golden light at both ends'});""")
print('fixes ok')
