// Regenerates the site's brand images into /public:
//   og-image.png          1200x630 link preview, rendered from scripts/brand/og.html with headless Chrome/Edge
//   apple-touch-icon.png  180x180 home-screen icon, from public/favicon.svg
//   favicon-48.png        48x48 PNG fallback for browsers/search engines without SVG favicon support
//
// Run with: npm run brand
// Needs Chrome or Edge installed locally. Not part of the Vercel build; commit the PNGs it produces.

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const pub = (name) => resolve(root, 'public', name);

const browserCandidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const browser = browserCandidates.find((p) => existsSync(p));
if (!browser) {
  console.error('No Chrome/Edge found. Set CHROME_PATH to your browser executable and retry.');
  process.exit(1);
}

// 1. OG image
const ogTemplate = pathToFileURL(resolve(root, 'scripts/brand/og.html')).href;
execFileSync(
  browser,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=3000',
    `--screenshot=${pub('og-image.png')}`,
    ogTemplate,
  ],
  { stdio: 'ignore' },
);
// Re-encode to keep the file small
const og = await sharp(pub('og-image.png')).png({ compressionLevel: 9, palette: false }).toBuffer();
await sharp(og).toFile(pub('og-image.png'));
console.log('public/og-image.png');

// 2. PNG icons from the SVG favicon
const svg = pub('favicon.svg');
await sharp(svg, { density: 600 })
  .resize(140, 140)
  .extend({ top: 20, bottom: 20, left: 20, right: 20, background: '#ffffff' })
  .flatten({ background: '#ffffff' })
  .png()
  .toFile(pub('apple-touch-icon.png'));
console.log('public/apple-touch-icon.png');

await sharp(svg, { density: 300 }).resize(48, 48).png().toFile(pub('favicon-48.png'));
console.log('public/favicon-48.png');
