/**
 * Phase 5 — Final SEO correction
 * 1. Remove unverifiable AggregateRating schema (Google guidelines)
 * 2. Fix GA4 trigger elements (WhatsApp, legacy blog tel links)
 * 3. Indexability audit report
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const SITE = 'https://biopower.co.in';

const report = {
  aggregateRatingRemoved: [],
  ga4Fixes: [],
  indexability: [],
};

function walkHtml(dir, list = []) {
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      if (!['node_modules', 'scripts', '.git', 'seo'].includes(f)) walkHtml(fp, list);
    } else if (f.endsWith('.html')) list.push(fp);
  }
  return list;
}

const AGGREGATE_RATING_BLOCK = /\s*,?\s*"aggregateRating"\s*:\s*\{\s*"@type"\s*:\s*"AggregateRating"\s*,\s*"ratingValue"\s*:\s*"[^"]*"\s*,\s*"reviewCount"\s*:\s*"[^"]*"\s*\}/g;

const AGGREGATE_RATING_BLOCK_JS = /\s*,?\s*aggregateRating:\s*\{\s*'@type':\s*'AggregateRating'\s*,\s*ratingValue:\s*'[^']*'\s*,\s*reviewCount:\s*BRAND\.reviewCount\s*,?\s*\}/g;

// Remove AggregateRating from all HTML
for (const fp of walkHtml(ROOT)) {
  const rel = path.relative(ROOT, fp).replace(/\\/g, '/');
  let html = fs.readFileSync(fp, 'utf8');
  const before = html;
  if (AGGREGATE_RATING_BLOCK.test(html)) {
    html = html.replace(AGGREGATE_RATING_BLOCK, '');
    report.aggregateRatingRemoved.push(rel);
  }
  // Testimonial schema-adjacent misleading heading (compliance)
  html = html.replace(
    /4\.9\/5 Rating · <span class="gradient-text-1">5000\+ Reviews<\/span>/g,
    'What Our <span class="gradient-text-1">Clients Say</span>'
  );
  // Legacy blog footer phone → trackable tel link
  html = html.replace(
    /<span>\+91 73381 29464<\/span>(?=[\s\S]{0,800}?<\/footer>)/g,
    '<span><a href="tel:+917338129464" data-track="phone_click">+91 73381 29464</a></span>'
  );
  html = html.replace(
    /<span>info@biopower\.co\.in<\/span>(?=[\s\S]{0,800}?<\/footer>)/g,
    '<span><a href="mailto:info@biopower.co.in" data-track="email_click">info@biopower.co.in</a></span>'
  );
  if (html !== before) fs.writeFileSync(fp, html, 'utf8');
}

// phase3-shared.js — remove future aggregateRating generation
const sharedPath = path.join(ROOT, 'scripts', 'phase3-shared.js');
let shared = fs.readFileSync(sharedPath, 'utf8');
if (AGGREGATE_RATING_BLOCK_JS.test(shared) || shared.includes('aggregateRating')) {
  shared = shared.replace(AGGREGATE_RATING_BLOCK_JS, '');
  shared = shared.replace(
    /\s*,?\s*aggregateRating:\s*\{[\s\S]*?reviewCount:[\s\S]*?\},/,
    ','
  );
  fs.writeFileSync(sharedPath, shared, 'utf8');
  report.aggregateRatingRemoved.push('scripts/phase3-shared.js');
}

// phase4-brand.js — note reviewCount is display-only, not schema
const brandPath = path.join(ROOT, 'scripts', 'phase4-brand.js');
let brand = fs.readFileSync(brandPath, 'utf8');
if (!brand.includes('schemaReviewCount')) {
  brand = brand.replace(
    "reviewCount: '5000',",
    "reviewCount: '5000', // display/marketing only — NOT used in schema (see Phase 5)\n  schemaReviewCount: null,"
  );
  fs.writeFileSync(brandPath, brand, 'utf8');
}

// WhatsApp on contact + index (minimal — same btn pattern)
function addWhatsAppLink(html, phonePath) {
  if (html.includes('wa.me/917338129464')) return html;
  const wa = `<a href="https://wa.me/917338129464?text=Hi%20BIOPOWER%2C%20I%20would%20like%20a%20quote" class="btn btn-outline magnetic" data-track="whatsapp_click" style="margin-top:12px"><span>Chat on WhatsApp</span></a>`;
  if (phonePath === 'contact') {
    return html.replace(
      /(<h5>Contact Information<\/h5>\s*<p>Phone: \+91 73381 29464<br>)/,
      `$1\n                        <a href="https://wa.me/917338129464?text=Hi%20BIOPOWER%2C%20I%20would%20like%20a%20quote" data-track="whatsapp_click">WhatsApp: +91 73381 29464</a><br>`
    );
  }
  if (phonePath === 'index') {
    return html.replace(
      /(<a href="tel:\+917338129464" class="btn btn-white magnetic" data-track="phone_click">[\s\S]*?<\/a>)/,
      `$1\n                    ${wa}`
    );
  }
  return html;
}

const contactPath = path.join(ROOT, 'contact.html');
let contactHtml = fs.readFileSync(contactPath, 'utf8');
const contactBefore = contactHtml;
contactHtml = addWhatsAppLink(contactHtml, 'contact');
if (contactHtml !== contactBefore) {
  fs.writeFileSync(contactPath, contactHtml, 'utf8');
  report.ga4Fixes.push('contact.html: WhatsApp link added');
}

const indexPath = path.join(ROOT, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
const indexBefore = indexHtml;
indexHtml = addWhatsAppLink(indexHtml, 'index');
if (indexHtml !== indexBefore) {
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  report.ga4Fixes.push('index.html: WhatsApp CTA added');
}

// Indexability audit
const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const sitemapUrls = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, '').replace(/^\//, '') || '/')
);

for (const fp of walkHtml(ROOT)) {
  const rel = path.relative(ROOT, fp).replace(/\\/g, '/');
  const html = fs.readFileSync(fp, 'utf8');
  const canon = (html.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1];
  const robots = (html.match(/<meta name="robots" content="([^"]+)"/i) || [])[1] || 'not set';
  const noindex = /noindex/i.test(robots);
  const expectedCanon = rel === 'index.html' ? `${SITE}/` : `${SITE}/${rel}`;
  const canonValid = !canon || canon === expectedCanon || canon === `${SITE}/${rel.replace(/index\.html$/, '')}`;
  const inSitemap =
    sitemapUrls.has(rel) ||
    sitemapUrls.has(rel.replace(/\\/g, '/')) ||
    (rel === 'index.html' && sitemapUrls.has('/'));

  const issues = [];
  if (!canon) issues.push('missing canonical');
  if (canon && canon !== expectedCanon && rel !== 'index.html') issues.push(`canonical mismatch: ${canon}`);
  if (noindex) issues.push('noindex');
  if (!inSitemap && !noindex) issues.push('not in sitemap');

  report.indexability.push({
    url: rel === 'index.html' ? '/' : `/${rel}`,
    indexable: !noindex ? 'Yes' : 'No',
    canonicalValid: canon && !issues.includes('missing canonical') ? (issues.some((i) => i.startsWith('canonical mismatch')) ? 'No' : 'Yes') : canon ? 'Yes' : 'No',
    inSitemap: inSitemap ? 'Yes' : 'No',
    issues: issues.join('; ') || 'none',
  });
}

// Add missing pages to sitemap if any indexable page missing
const missing = report.indexability.filter((r) => r.inSitemap === 'No' && r.indexable === 'Yes' && r.issues.includes('not in sitemap'));
if (missing.length) {
  let sm = sitemap;
  for (const m of missing) {
    const loc = m.url === '/' ? `${SITE}/` : `${SITE}${m.url}`;
    if (!sm.includes(loc)) {
      sm = sm.replace(
        '</urlset>',
        `  <url>
    <loc>${loc}</loc>
    <lastmod>2026-06-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`
      );
      report.ga4Fixes.push(`sitemap.xml: added ${m.url}`);
    }
  }
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sm, 'utf8');
}

fs.writeFileSync(path.join(ROOT, 'seo', 'phase5-audit-data.json'), JSON.stringify(report, null, 2));
console.log('AggregateRating removed from', report.aggregateRatingRemoved.length, 'files');
console.log('GA4 fixes:', report.ga4Fixes.length);
console.log('Indexability rows:', report.indexability.length);
console.log('Missing from sitemap (fixed):', missing.length);
