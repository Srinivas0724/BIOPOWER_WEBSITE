/** Create owc-for-hotels.html and owc-for-apartments.html from long-name pages */
const fs = require('fs');
const path = require('path');
const BRAND = require('./phase4-brand');

const ROOT = path.join(__dirname, '..');

const ALIASES = [
  {
    from: 'organic-waste-converter-for-hotels.html',
    to: 'owc-for-hotels.html',
    title: 'OWC for Hotels | Organic Waste Converter India - BIOPOWER',
    h1Old: 'Organic Waste Converter for <span class="accent">Hotels</span>',
    h1New: 'OWC for <span class="accent">Hotels</span>',
    canonical: `${BRAND.site}/owc-for-hotels.html`,
    desc: 'OWC for hotels — compact composting machines for kitchen waste, zero odour, KSPCB compliance. BIOPOWER: 12,898+ installations, 4.9/5 rating.',
  },
  {
    from: 'organic-waste-converter-for-apartments.html',
    to: 'owc-for-apartments.html',
    title: 'OWC for Apartments | RWA Composting Machine - BIOPOWER',
    h1Old: 'Organic Waste Converter for <span class="accent">Apartments</span>',
    h1New: 'OWC for <span class="accent">Apartments</span>',
    canonical: `${BRAND.site}/owc-for-apartments.html`,
    desc: 'OWC for apartments and RWAs — on-site composting, SWM compliance, 100–500 kg/day capacity. Free site assessment from BIOPOWER.',
  },
];

for (const a of ALIASES) {
  const src = path.join(ROOT, a.from);
  if (!fs.existsSync(src)) {
    console.warn('Missing source', a.from);
    continue;
  }
  let html = fs.readFileSync(src, 'utf8');
  html = html.replace(/<title>[^<]+<\/title>/, `<title>${a.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]+"/, `<meta name="description" content="${a.desc}"`);
  html = html.replace(/<link rel="canonical" href="[^"]+"/, `<link rel="canonical" href="${a.canonical}"`);
  html = html.replace(/property="og:url" content="[^"]+"/, `property="og:url" content="${a.canonical}"`);
  html = html.replace(/property="og:title" content="[^"]+"/, `property="og:title" content="${a.title}"`);
  html = html.replace(/property="og:description" content="[^"]+"/, `property="og:description" content="${a.desc}"`);
  html = html.replace(a.h1Old, a.h1New);
  html = html.replace(new RegExp(BRAND.site + '/organic-waste-converter-for-[^"]+', 'g'), a.canonical);
  fs.writeFileSync(path.join(ROOT, a.to), html, 'utf8');
  console.log('Created', a.to);
}
