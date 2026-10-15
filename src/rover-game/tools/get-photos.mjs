// Fetches the six rover photographs the discovery cards use into ./photos,
// so the game does not depend on NASA's image server at play time.
//   npm run photos
// Images are NASA/JPL-Caltech (see each card for the full credit line).
import { mkdir, writeFile } from 'node:fs/promises';

const CDN = 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpeg';
const IDS = ['PIA19076', 'PIA19075', 'PIA17062', 'PIA24485', 'PIA19161', 'PIA24684'];

await mkdir('photos', { recursive: true });
for (const id of IDS) {
  const res = await fetch(`${CDN}${id}.jpg`);
  if (!res.ok) { console.error(`${id}: HTTP ${res.status}`); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(`photos/${id}.jpg`, buf);
  console.log(`${id}.jpg  ${(buf.length / 1024).toFixed(0)} KB`);
}
