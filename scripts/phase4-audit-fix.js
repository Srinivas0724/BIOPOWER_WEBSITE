/**
 * Phase 4 audit fix — NAP, schema coordinates, brand stats, external media, testimonials
 */
const fs = require('fs');
const path = require('path');
const BRAND = require('./phase4-brand');

const ROOT = path.join(__dirname, '..');
const report = {
  filesModified: [],
  changes: [],
  mediaRemoved: [],
};

function walkHtml(dir, list = []) {
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      if (!['node_modules', 'scripts', '.git'].includes(f)) walkHtml(fp, list);
    } else if (f.endsWith('.html')) list.push(fp);
  }
  return list;
}

const UNSPLASH_MAP = [
  ['photo-1611273426858-450d8e3c9fce', BRAND.heroImages.biogas],
  ['photo-1582560475093-ba66accbc424', BRAND.heroImages.owc],
  ['photo-1581094288338-2314dddb7ece', BRAND.heroImages.stp],
  ['photo-1605152276897-4f618f831968', BRAND.heroImages.cbg],
  ['photo-1566073771259-6a8506099945', BRAND.heroImages.hotel],
  ['photo-1545324418-cc1a3fa10c00', BRAND.heroImages.apartment],
  ['photo-1523050854058-8df90110c9f1', BRAND.heroImages.college],
  ['photo-1581091226825-a6a2a5a15815', BRAND.heroImages.industry],
  ['photo-1556910103-1c02745aae4d', BRAND.heroImages.food],
  ['photo-1454165804606-c3d57bc86b40', BRAND.heroImages.resources],
  ['photo-1516321318423-f06f85e504b3', BRAND.heroImages.faq],
];

function patchHtml(html, rel, depth = 0) {
  let out = html;
  const prefix = depth > 0 ? '../'.repeat(depth) : '';
  const before = out;

  // Coordinates
  out = out.replace(/"latitude":\s*13\.0264/g, `"latitude": ${BRAND.latitude}`);
  out = out.replace(/"longitude":\s*77\.635/g, `"longitude": ${BRAND.longitude}`);
  out = out.replace(/latitude:\s*13\.0264,\s*longitude:\s*77\.635/g, `latitude: ${BRAND.latitude}, longitude: ${BRAND.longitude}`);

  // Schema phone E.164
  out = out.replace(/"telephone":\s*"\+91-73381-29464"/g, `"telephone": "${BRAND.phoneTel}"`);

  // Stats label
  out = out.replace(/<div class="stat-label">Plants Installed<\/div>/g, '<div class="stat-label">Installations</div>');
  out = out.replace(/<div class="l">Plants Installed<\/div>/g, '<div class="l">Installations</div>');

  // Duplicate data-track
  out = out.replace(/data-track="phone_click" data-track="phone_click"/g, 'data-track="phone_click"');

  // Unsplash → local WebP
  for (const [id, local] of UNSPLASH_MAP) {
    const re = new RegExp(`https://images\\.unsplash\\.com/${id}[^'"]*`, 'g');
    const localPath = rel.startsWith('case-studies/') ? '../' + local : rel.startsWith('blog/') ? '/' + local : local;
    out = out.replace(re, localPath.replace(/ /g, '%20'));
  }

  // Footer address — multiple legacy patterns
  const footerPatterns = [
    /<span>BPG renewables pvt ltd<br>No 26, 5th Cross, Hennur Main Road,\s*Kacharakanahalli,<br>Bengaluru, Bengaluru Urban, Karnataka, 560084<\/span>/gi,
    /<span>BPG renewables pvt ltd<br>No 26, 5th Cross, Hennur Main Road,\s*\n?\s*Kacharakanahalli,<br>Bengaluru, Bengaluru Urban, Karnataka, 560084<\/span>/gi,
    /<span>BPG Renewables Pvt Ltd, Bengaluru, Karnataka 560084<\/span>/gi,
  ];
  for (const re of footerPatterns) {
    out = out.replace(re, `<span>${BRAND.footerAddressHtml}</span>`);
  }

  // Footer email / phone with tracking (plain text spans in legacy footers)
  out = out.replace(
    /<span>info@biopower\.co\.in<\/span>(?=[\s\S]*?<h4>Contact Us)/g,
    `<span><a href="mailto:${BRAND.email}" data-track="email_click">${BRAND.email}</a></span>`
  );
  out = out.replace(
    /<span>\+91 73381 29464<\/span>(?=[\s\S]*?<h4>Contact Us)/g,
    `<span><a href="tel:${BRAND.phoneTel}" data-track="phone_click">${BRAND.phone}</a></span>`
  );

  // Blog footer brand text
  out = out.replace(
    /Biopower, established in 2006, is a leading waste-to-energy solutions provider, transforming\s*organic waste into renewable energy through innovative biogas technologies\./g,
    `BIOPOWER, established in ${BRAND.founded}, is a leading waste-to-energy solutions provider with ${BRAND.installations} installations and a ${BRAND.rating} customer rating.`
  );

  // Mixkit hero video → self-hosted lazy
  if (rel === 'index.html') {
    out = out.replace(
      /<video autoplay muted loop playsinline class="hero-video">\s*<source\s+src="https:\/\/assets\.mixkit\.co[^"]+"\s+type="video\/mp4">\s*<\/video>/,
      `<video muted loop playsinline class="hero-video" preload="none" poster="images/plants/institutional-biogas-plant.webp">\n                <source data-src="videos/hero-industrial.mp4" type="video/mp4">\n            </video>`
    );
  }

  if (out !== before) {
    report.filesModified.push(rel);
  }
  return out;
}

function testimonialsSnippet(depth = 0) {
  const p = depth === 0 ? '' : '../'.repeat(depth);
  return `
    <!-- Phase 4 reusable testimonials -->
    <section class="testimonials" style="padding:70px 0">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <div class="section-tag" style="justify-content:center;">Customer Reviews</div>
                <h2 class="section-title">${BRAND.rating} Rating · <span class="gradient-text-1">${BRAND.reviewCount}+ Reviews</span></h2>
            </div>
            <div class="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper testimonial-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="testimonial-card">
                                <div class="quote-icon">"</div>
                                <p class="testimonial-text">"Throughout the biogas project at our guest house, your conduct was phenomenal. We have offered a Purchase Order for 11 Biogas units — the product and service is highly appreciated by top officials of our organisation."</p>
                                <div class="testimonial-author">
                                    <div class="author-avatar"><img width="472" height="472" loading="lazy" decoding="async" src="${p}images/client/jusco.webp" alt="Enterprise client"></div>
                                    <div class="author-info"><strong>Gaurav Anand</strong><span>Senior Manager, Quality Assurance<br>JUSCO – A Tata Enterprise</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testimonial-card">
                                <div class="quote-icon">"</div>
                                <p class="testimonial-text">"We successfully installed a Biopower Biogas Plant, WonderBin Composter, and Incinerator — enhancing our waste management and aligning with responsible tourism goals. Thank you for professional execution and innovative technology."</p>
                                <div class="testimonial-author">
                                    <div class="author-avatar"><img width="200" height="200" loading="lazy" decoding="async" src="${p}images/client/timbertales.webp" alt="Hospitality client"></div>
                                    <div class="author-info"><strong>Ms Rathi</strong><span>Purchase Manager<br>Timber Tales Resorts, Coorg</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </section>`;
}

const TESTIMONIAL_TARGETS = [
  'biogas_plant.html',
  'owc.html',
  'stp.html',
  'cbg.html',
  'inst_comun.html',
  'biogas-plant-karnataka.html',
  'organic-waste-converter-karnataka.html',
  'stp-plant-karnataka.html',
  'bio-cng-plant-karnataka.html',
  'biogas-plant-for-hotels.html',
  'biogas-plant-for-apartments.html',
  'organic-waste-converter-for-hotels.html',
  'organic-waste-converter-for-apartments.html',
  'stp-for-apartments.html',
  'stp-for-industries.html',
  'cbg-for-food-processing-industry.html',
];

function injectTestimonials() {
  for (const rel of TESTIMONIAL_TARGETS) {
    const fp = path.join(ROOT, rel);
    if (!fs.existsSync(fp)) continue;
    let html = fs.readFileSync(fp, 'utf8');
    if (html.includes('Phase 4 reusable testimonials')) continue;
    const depth = rel.includes('/') ? rel.split('/').length - 1 : 0;
    const marker = /<footer[\s>]/i;
    if (!marker.test(html)) continue;
    html = html.replace(marker, testimonialsSnippet(depth) + '\n\n    <footer');
    fs.writeFileSync(fp, html, 'utf8');
    if (!report.filesModified.includes(rel)) report.filesModified.push(rel);
    report.changes.push(`${rel}: testimonials injected`);
  }
}

// Patch all HTML
const files = walkHtml(ROOT);
for (const fp of files) {
  const rel = path.relative(ROOT, fp).replace(/\\/g, '/');
  const depth = rel.startsWith('blog/') ? 1 : rel.includes('case-studies/') ? 1 : 0;
  const patched = patchHtml(fs.readFileSync(fp, 'utf8'), rel, depth);
  fs.writeFileSync(fp, patched, 'utf8');
}

injectTestimonials();

// Update phase3-shared.js coordinates & footer
const sharedPath = path.join(ROOT, 'scripts', 'phase3-shared.js');
let shared = fs.readFileSync(sharedPath, 'utf8');
shared = shared.replace(/latitude: 13\.0264, longitude: 77\.635/, `latitude: ${BRAND.latitude}, longitude: ${BRAND.longitude}`);
shared = shared.replace(
  /<span>BPG Renewables Pvt Ltd, Bengaluru, Karnataka 560084<\/span>/,
  `<span>${BRAND.footerAddressHtml}</span>`
);
fs.writeFileSync(sharedPath, shared, 'utf8');
report.filesModified.push('scripts/phase3-shared.js');

// Update phase3-helpers.js hero URLs
const helpersPath = path.join(ROOT, 'scripts', 'phase3-helpers.js');
let helpers = fs.readFileSync(helpersPath, 'utf8');
for (const [id, local] of UNSPLASH_MAP) {
  const re = new RegExp(`https://images\\.unsplash\\.com/${id}[^'"]*`, 'g');
  helpers = helpers.replace(re, local);
}
fs.writeFileSync(helpersPath, helpers, 'utf8');
report.filesModified.push('scripts/phase3-helpers.js');

// Orphan media scan
function collectRefs() {
  const refs = new Set();
  for (const fp of walkHtml(ROOT)) {
    const html = fs.readFileSync(fp, 'utf8');
    const css = fs.existsSync(fp.replace('.html', '')) ? '' : '';
    [...html.matchAll(/(?:src|href|poster|data-src|url\(['"]?)([^'"()\s>]+\.(webp|png|jpg|jpeg|gif|mp4|pdf))/gi)].forEach((m) => {
      refs.add(m[1].split('?')[0].replace(/%20/g, ' '));
    });
  }
  for (const f of ['css/style.min.css', 'css/style.css', 'js/main.js', 'js/main.min.js']) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    const text = fs.readFileSync(p, 'utf8');
    [...text.matchAll(/(?:url\(['"]?|src\s*=\s*['"])([^'"()]+\.(webp|png|jpg|jpeg|gif|mp4|pdf))/gi)].forEach((m) => {
      refs.add(m[1].split('?')[0].replace(/%20/g, ' '));
    });
  }
  return refs;
}

function walkMedia(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) walkMedia(fp, list);
    else if (/\.(webp|png|jpg|jpeg|gif|mp4|pdf)$/i.test(f)) list.push(fp);
  }
  return list;
}

const refs = collectRefs();
const mediaFiles = walkMedia(path.join(ROOT, 'images')).concat(walkMedia(path.join(ROOT, 'videos')));
const orphans = [];
for (const fp of mediaFiles) {
  const rel = path.relative(ROOT, fp).replace(/\\/g, '/');
  const base = path.basename(fp);
  const used = [...refs].some((r) => r.includes(base) || r.endsWith(rel) || r.includes(rel.replace(/ /g, '%20')));
  if (!used) orphans.push(rel);
}
report.orphanMedia = orphans;

// Write machine-readable report
fs.writeFileSync(path.join(ROOT, 'scripts', 'phase4-patch-report.json'), JSON.stringify(report, null, 2));
console.log('Phase 4 audit fix complete.');
console.log('Files modified:', report.filesModified.length);
console.log('Orphan media candidates:', orphans.length);
orphans.slice(0, 15).forEach((o) => console.log('  orphan:', o));
