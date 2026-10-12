#!/usr/bin/env python3
"""Load every page at phone size and report JavaScript errors.
Needs: pip install playwright && python3 -m playwright install chromium
Run tools/serve.sh first (port 8765)."""
import asyncio, glob, os
from playwright.async_api import async_playwright
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
pages = sorted(os.path.basename(p)[:-5] for p in glob.glob(os.path.join(ROOT, '*.html')))
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--disable-gpu'])
        ctx = await b.new_context(viewport={'width': 390, 'height': 844}, timezone_id='America/Denver', service_workers='block')
        async def route(r):   # offline except the local server: pages must survive without network
            await (r.continue_() if 'localhost' in r.request.url else r.abort())
        await ctx.route('**/*', route)
        pg = await ctx.new_page(); bad = 0
        for n in pages:
            errs = []; h = lambda e: errs.append(str(e)[:160]); pg.on('pageerror', h)
            await pg.goto(f'http://localhost:8765/{n}.html'); await pg.wait_for_timeout(700)
            pg.remove_listener('pageerror', h)
            if errs: bad += 1; print('  ', n, errs[:2])
        print(len(pages), 'pages,', bad, 'with errors')
        await b.close()
asyncio.run(main())
