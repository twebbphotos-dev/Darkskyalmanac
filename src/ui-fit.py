import re,glob,os,sys,json
V2='/home/claude/work/v2/'
GEN={'spacecraft.html','mars.html','voyager.html'}
EXTRA=json.load(open('/tmp/claude-0/audit/extra.json')) if os.path.exists('/tmp/claude-0/audit/extra.json') else {}
def block(page,ID,P):
    base=("@media(max-width:640px){#%s::after{inset:7px}.%stl,.%str{top:7px}.%sbl,.%sbr{bottom:7px}.%stl,.%sbl{left:7px}.%str,.%sbr{right:7px}}"%((ID,)+(P,)*8))
    return "/* fit */\n"+base+"\n"+EXTRA.get(page,'')+"\n"+NAV+"/* /fit */\n"
NAV='@media(max-width:374px){.pwa-navitem{font-size:7.5px;letter-spacing:.02em}}@media(max-width:340px){.pwa-navitem{font-size:7px;letter-spacing:0}}\n'
n=0
for f in sorted(glob.glob(V2+'*.html')):
    page=os.path.basename(f)
    if page in GEN: continue
    s=open(f).read()
    s=re.sub(r'/\* fit \*/\n.*?/\* /fit \*/\n','',s,flags=re.S)
    m=re.search(r"#([a-z0-9-]+)::after\{content:'';position:absolute;inset:14px",s)
    if m:
        c=re.search(r"\.([a-z0-9-]*?)tl\{top:14px;left:14px\}",s); P=c.group(1) if c else 'zcl-none-'
        end=s.index('</style>',m.start()); s=s[:end]+block(page,m.group(1),P)+s[end:]
    else:
        end=s.rindex('</style>'); s=s[:end]+"/* fit */\n"+EXTRA.get(page,'')+"\n"+NAV+"/* /fit */\n"+s[end:]
    open(f,'w').write(s); n+=1
print('patched',n)
