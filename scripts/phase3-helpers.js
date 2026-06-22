/** Shared HTML builders for Phase 3 page generation */
const fs = require('fs');
const path = require('path');
const {
  orgSchema,
  localBusinessSchema,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} = require('./phase3-shared');

const ROOT = path.join(__dirname, '..');
const HERO = {
  biogas: 'images/plants/institutional-biogas-plant.webp',
  owc: 'images/plants/Fully Autoimatic.webp',
  stp: 'images/plants/institutional-biogas-plant.webp',
  cbg: 'images/plants/6cum/Aerial view of green biogas digester.webp',
  hotel: 'images/wonderbin_roof_top.webp',
  apartment: 'images/wonderbin_roof_top.webp',
  college: 'images/plants/institutional-biogas-plant.webp',
  industry: 'images/plants/institutional-biogas-plant.webp',
  food: 'images/plants/Fully Autoimatic.webp',
  resources: 'images/plants/institutional-biogas-plant.webp',
  faq: 'images/biopower-logo.webp',
};
const PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';

function prose(...paragraphs) {
  return paragraphs.map((p) => `<p class="prose-block">${p}</p>`).join('\n');
}
function section(tag, title, sub, inner, alt = false) {
  return `<section class="ll-section${alt ? ' alt' : ''}">
  <div class="container">
    <div class="section-tag" data-aos="fade-up"><span></span>${tag}</div>
    <h2 class="ll-section-title" data-aos="fade-up">${title}</h2>
    ${sub ? `<p class="ll-section-sub" data-aos="fade-up">${sub}</p>` : ''}
    ${inner}
  </div>
</section>`;
}
function areaGrid(areas) {
  return `<div class="area-grid" data-aos="fade-up" data-aos-delay="100">${areas.map((a) => `<div class="area-chip">${PIN}${a}</div>`).join('')}</div>`;
}
function advGrid(cards) {
  return `<div class="adv-grid" data-aos="fade-up" data-aos-delay="100">${cards.map((c) => `<div class="adv-card"><div class="ai">${c.icon}</div><h3>${c.h}</h3><p>${c.p}</p></div>`).join('')}</div>`;
}
function stepsRow(steps) {
  return `<div class="steps-row" data-aos="fade-up" data-aos-delay="100">${steps.map((s, i) => `<div class="step-box"><div class="sb-num">${i + 1}</div><h4>${s.h}</h4><p>${s.p}</p></div>`).join('')}</div>`;
}
function specTable(headers, rows) {
  return `<div class="spec-table-wrap" data-aos="fade-up" data-aos-delay="100"><table class="spec-table"><thead><tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function benefitsStrip(items) {
  return `<div class="benefits-strip" data-aos="fade-up" data-aos-delay="100">${items.map((b) => `<div class="benefit-tile"><div class="bt-icon">${b.icon}</div><div><h4>${b.h}</h4><p>${b.p}</p></div></div>`).join('')}</div>`;
}
function indGrid(tiles) {
  return `<div class="ind-grid" data-aos="fade-up" data-aos-delay="100">${tiles.map((t) => `<div class="ind-tile"><div class="it-icon">${t.icon}</div><p>${t.label}</p></div>`).join('')}</div>`;
}
function roiGrid(cards) {
  return `<div class="roi-grid" data-aos="fade-up" data-aos-delay="100">${cards.map((c) => `<div class="roi-card"><div class="rv">${c.v}</div><div class="rl">${c.l}</div></div>`).join('')}</div>`;
}
function caseMeta(stats) {
  return `<div class="case-meta" data-aos="fade-up">${stats.map((s) => `<div class="cm"><div class="v">${s.v}</div><div class="k">${s.k}</div></div>`).join('')}</div>`;
}
function landingSchemas({ name, desc, url, area, crumbs, faqs, lbExtra }) {
  return [orgSchema(), localBusinessSchema(lbExtra || {}), breadcrumbSchema(crumbs), serviceSchema(name, desc, url, area), faqSchema(faqs)];
}
function writePage(relPath, html) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, 'utf8');
  return relPath;
}
function countWords(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length;
}
function rgGrid(links) {
  return `<div class="rg-grid">${links.map((l) => `<a href="${l.href}"><span>${l.tag}</span>${l.label}</a>`).join('')}</div>`;
}

module.exports = { ROOT, HERO, PIN, prose, section, areaGrid, advGrid, stepsRow, specTable, benefitsStrip, indGrid, roiGrid, caseMeta, landingSchemas, writePage, countWords, rgGrid };
