const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function walkHtml(dir, list = []) {
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      if (!['node_modules', 'scripts', '.git'].includes(f)) walkHtml(fp, list);
    } else if (f.endsWith('.html')) list.push(fp);
  }
  return list;
}

const files = walkHtml(ROOT);
const titles = new Map();
const descs = new Map();
const h1s = new Map();
const broken = [];
const statsIssues = [];

for (const fp of files) {
  const rel = path.relative(ROOT, fp).replace(/\\/g, '/');
  const html = fs.readFileSync(fp, 'utf8');
  const dir = path.dirname(fp);

  const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1];
  const desc = (html.match(/<meta name="description" content="([^"]+)"/i) || [])[1];
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1].replace(/<[^>]+>/g, '').trim();
  const canon = (html.match(/rel="canonical"/g) || []).length;

  if (title) {
    if (!titles.has(title)) titles.set(title, []);
    titles.get(title).push(rel);
  }
  if (desc) {
    if (!descs.has(desc)) descs.set(desc, []);
    descs.get(desc).push(rel);
  }
  if (h1) {
    if (!h1s.has(h1)) h1s.set(h1, []);
    h1s.get(h1).push(rel);
  }
  if (canon !== 1) statsIssues.push(`${rel}: canonical count ${canon}`);

  if (/12,000|12000/.test(html) && !html.includes('12,898')) {
    statsIssues.push(`${rel}: contains old 12,000 stat`);
  }

  const hrefs = [...html.matchAll(/href="([^"#][^"]*)"/g)].map((m) => m[1]);
  for (const h of new Set(hrefs)) {
    if (/^(https?:|tel:|mailto:|javascript:)/.test(h)) continue;
    const target = path.normalize(path.join(dir, h.replace(/\//g, path.sep)));
    if (!fs.existsSync(target)) broken.push({ from: rel, href: h });
  }
}

const dupTitles = [...titles.entries()].filter(([, v]) => v.length > 1);
const dupDescs = [...descs.entries()].filter(([, v]) => v.length > 1);
const dupH1 = [...h1s.entries()].filter(([, v]) => v.length > 1);

const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const urlCount = (sitemap.match(/<loc>/g) || []).length;

console.log('=== SEO VALIDATION REPORT ===');
console.log('HTML files:', files.length);
console.log('Sitemap URLs:', urlCount);
console.log('Duplicate titles:', dupTitles.length);
dupTitles.slice(0, 5).forEach(([t, f]) => console.log('  -', t, '->', f.join(', ')));
console.log('Duplicate meta descriptions:', dupDescs.length);
dupDescs.slice(0, 3).forEach(([d, f]) => console.log('  -', d.slice(0, 60) + '...', '->', f.length, 'files'));
console.log('Duplicate H1 (cross-page):', dupH1.length);
console.log('Broken internal links:', broken.length);
broken.slice(0, 10).forEach((b) => console.log('  -', b.from, '->', b.href));
console.log('Stats/canonical issues:', statsIssues.length);
statsIssues.slice(0, 10).forEach((s) => console.log('  -', s));
