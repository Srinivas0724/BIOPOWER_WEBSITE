/**
 * Patch existing site: brand stats, footers, nav FAQ link, GA4 hooks, sitemap
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BRAND = { installations: '12,898+', years: '17+', rating: '4.9/5' };

function walkHtml(dir, list = []) {
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      if (f !== 'node_modules' && f !== 'scripts') walkHtml(fp, list);
    } else if (f.endsWith('.html')) list.push(fp);
  }
  return list;
}

function patchStats(content) {
  return content
    .replace(/12,000\+/g, BRAND.installations)
    .replace(/12,000 \+/g, BRAND.installations.replace('+', ' +'))
    .replace(/more than 12,000 plant/gi, `more than ${BRAND.installations.replace('+', '')} plant`)
    .replace(/12,000\+ plants/g, `${BRAND.installations} plants`)
    .replace(/12,000\+ Installations/g, `${BRAND.installations} Installations`)
    .replace(/17\+ years, 12,000\+ plants/g, `${BRAND.years} years, ${BRAND.installations} plants`);
}

function patchNavFaq(content, depth) {
  const p = depth === 0 ? '' : depth === 1 ? '../' : '../../';
  return content.replace(
    /href="([^"]*)index\.html#faqs"/g,
    `href="${p}faq.html"`
  );
}

function patchFooters(content, depth) {
  const p = depth === 0 ? '' : depth === 1 ? '../' : '../../';
  const oldServices = `<h4>Our Services</h4>
        <ul>
          <li><a href="${p}biogas_plant.html" class="magnetic">Biogas Plant Design</a></li>
          <li><a href="${p}stp.html" class="magnetic">Sewage Treatment Plants</a></li>
          <li><a href="${p}contact.html" class="magnetic">Installation & Setup</a></li>
          <li><a href="${p}contact.html" class="magnetic">Maintenance & Support</a></li>
          <li><a href="${p}contact.html" class="magnetic">Energy Consulting</a></li>
          <li><a href="${p}cbg.html" class="magnetic">Bio-CNG Systems</a></li>
        </ul>`;

  const newServices = `<h4>Products &amp; Locations</h4>
        <ul>
          <li><a href="${p}biogas_plant.html" class="magnetic">Biogas Plants</a></li>
          <li><a href="${p}owc.html" class="magnetic">OWC Machines</a></li>
          <li><a href="${p}stp.html" class="magnetic">STP Solutions</a></li>
          <li><a href="${p}cbg.html" class="magnetic">Bio-CNG / CBG</a></li>
          <li><a href="${p}biogas-plant-bangalore.html" class="magnetic">Bangalore</a></li>
          <li><a href="${p}biogas-plant-karnataka.html" class="magnetic">Karnataka</a></li>
          <li><a href="${p}biogas-plant-for-hotels.html" class="magnetic">Hotels</a></li>
          <li><a href="${p}biogas-plant-for-apartments.html" class="magnetic">Apartments</a></li>
        </ul>`;

  let c = content.replace(oldServices, newServices);

  const quickOld = `<h4>Quick Links</h4>
        <ul>
          <li><a href="${p}index.html" class="magnetic">Home</a></li>
          <li><a href="${p}about.html" class="magnetic">About Us</a></li>
          <li><a href="${p}index.html#products" class="magnetic">Products</a></li>
          <li><a href="${p}contact.html" class="magnetic">Contact</a></li>
        </ul>`;

  const quickNew = `<h4>Quick Links</h4>
        <ul>
          <li><a href="${p}index.html" class="magnetic">Home</a></li>
          <li><a href="${p}about.html" class="magnetic">About Us</a></li>
          <li><a href="${p}blog/index.html" class="magnetic">Blog</a></li>
          <li><a href="${p}faq.html" class="magnetic">FAQ Hub</a></li>
          <li><a href="${p}resources.html" class="magnetic">Resource Center</a></li>
          <li><a href="${p}case-studies/hotel-biogas-case-study.html" class="magnetic">Case Studies</a></li>
          <li><a href="${p}contact.html" class="magnetic">Contact</a></li>
        </ul>`;

  c = c.replace(quickOld, quickNew);

  // Blog pages use absolute paths
  c = c.replace(
    /<h4>Quick Links<\/h4>\s*<ul>\s*<li><a href="\/index\.html"/,
    `<h4>Quick Links</h4>\n                    <ul>\n                        <li><a href="/index.html"`
  );

  return c;
}

function patchRequestQuote(content) {
  return content.replace(
    /(<a href="[^"]*contact\.html" class="btn btn-primary magnetic")>/g,
    '$1 data-track="request_quote">'
  ).replace(
    /(<a href="tel:\+917338129464"[^>]*class="[^"]*btn[^"]*")/g,
    '$1 data-track="phone_click"'
  );
}

const files = walkHtml(ROOT);
let patched = 0;
for (const fp of files) {
  if (fp.includes('scripts')) continue;
  const rel = path.relative(ROOT, fp);
  const depth = rel.startsWith('case-studies') ? 1 : rel.startsWith('blog') ? 1 : 0;
  let c = fs.readFileSync(fp, 'utf8');
  const orig = c;
  c = patchStats(c);
  c = patchNavFaq(c, rel.startsWith('blog') ? 1 : depth);
  if (!c.includes('FAQ Hub') && c.includes('footer-grid')) {
    c = patchFooters(c, rel.startsWith('blog') ? 1 : depth);
  }
  c = patchRequestQuote(c);
  if (c !== orig) {
    fs.writeFileSync(fp, c, 'utf8');
    patched++;
  }
}

// Update sitemap
const newUrls = [
  'faq.html', 'resources.html',
  'biogas-plant-karnataka.html', 'organic-waste-converter-karnataka.html',
  'stp-plant-karnataka.html', 'bio-cng-plant-karnataka.html',
  'biogas-plant-for-hotels.html', 'biogas-plant-for-apartments.html',
  'biogas-plant-for-colleges.html', 'organic-waste-converter-for-hotels.html',
  'organic-waste-converter-for-apartments.html', 'stp-for-apartments.html',
  'stp-for-industries.html', 'cbg-for-food-processing-industry.html',
  'case-studies/hotel-biogas-case-study.html',
  'case-studies/apartment-owc-case-study.html',
  'case-studies/institutional-biogas-case-study.html',
  'case-studies/stp-installation-case-study.html',
];

let sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
for (const u of newUrls) {
  const loc = `https://biopower.co.in/${u}`;
  if (!sitemap.includes(loc)) {
    sitemap = sitemap.replace(
      '</urlset>',
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-06-20</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.75</priority>\n  </url>\n</urlset>`
    );
  }
}
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');

console.log(`Patched ${patched} HTML files. Sitemap updated with ${newUrls.length} URLs.`);
