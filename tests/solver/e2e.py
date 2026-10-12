#!/usr/bin/env python3
"""Star ID end to end in a real browser: service worker install, solver cache,
solve online, then go offline, reload and solve again; check the Plate Solver
Values card against known answers. Run tools/serve.sh first (port 8765)."""
import asyncio, os
from playwright.async_api import async_playwright
FR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'frames') + '/'
async def solve(pg, f):
    await pg.set_input_files('#file', FR + f)
    for _ in range(240):
        await pg.wait_for_timeout(500)
        st = await pg.evaluate("[!document.getElementById('out').hidden, !document.getElementById('fail').hidden, document.getElementById('headline').textContent, document.getElementById('subline').textContent]")
        if st[0] or st[1]: return st
    return st
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--disable-gpu'])
        ctx = await b.new_context(viewport={'width': 390, 'height': 844}, timezone_id='America/Denver', is_mobile=True, has_touch=True)
        pg = await ctx.new_page(); errs = []; pg.on('pageerror', lambda e: errs.append(str(e)[:300]))
        await pg.goto('http://localhost:8765/index.html'); await pg.wait_for_timeout(4000)
        await pg.goto('http://localhost:8765/solver/')
        for _ in range(40):
            await pg.wait_for_timeout(500)
            t = await pg.evaluate("document.getElementById('offline').textContent")
            if 'Saved' in t or 'Not fully' in t or 'unavailable' in t: break
        print('offline status:', t, '| caches:', await pg.evaluate("caches.keys()"))
        await pg.evaluate("localStorage.setItem('pointing-check', JSON.stringify({focal:'300',sensor:'35.9'}))"); await pg.reload(); await pg.wait_for_timeout(1500)
        print('orion 300mm online:', await solve(pg, 'orion-300mm.jpg'))
        await pg.evaluate("localStorage.setItem('pointing-check', JSON.stringify({unknown:true,sensor:'35.9'}))")
        await ctx.set_offline(True); await pg.reload(); await pg.wait_for_timeout(2500)
        print('heart/soul offline, lens unknown:', await solve(pg, 'heart-soul-edited.jpg'))
        print(await pg.evaluate("document.getElementById('detail').innerText.replace(/\\n/g,' | ')"))
        print('expect: Heart Nebula / Cassiopeia, 408 mm, 13.94 um, 7.04"/px')
        print('page errors:', errs or 'none')
        await b.close()
asyncio.run(main())
