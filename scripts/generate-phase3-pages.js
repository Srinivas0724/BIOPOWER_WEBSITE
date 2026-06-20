#!/usr/bin/env node
/** BIOPOWER SEO Phase 3 – generate all landing, industry, case-study, and hub pages */
const { writePage, countWords } = require('./phase3-helpers');
const { karnatakaBiogas, karnatakaOwc, karnatakaStp, karnatakaCbg } = require('./phase3-karnataka-content');
const { industryPages } = require('./phase3-industry-content');
const { caseStudyPages } = require('./phase3-case-studies');
const { resourcesPage, faqHubPage } = require('./phase3-hubs');

const PAGES = [
  { file: 'biogas-plant-karnataka.html', gen: karnatakaBiogas, minWords: 1500 },
  { file: 'organic-waste-converter-karnataka.html', gen: karnatakaOwc, minWords: 1500 },
  { file: 'stp-plant-karnataka.html', gen: karnatakaStp, minWords: 1500 },
  { file: 'bio-cng-plant-karnataka.html', gen: karnatakaCbg, minWords: 1500 },
  ...industryPages.map((p) => ({ ...p, minWords: 1200 })),
  ...caseStudyPages.map((p) => ({ ...p, minWords: 600 })),
  { file: 'resources.html', gen: resourcesPage, minWords: 400 },
  { file: 'faq.html', gen: faqHubPage, minWords: 800 },
];

function main() {
  const created = [];
  const warnings = [];
  const errors = [];

  for (const page of PAGES) {
    try {
      const html = page.gen();
      writePage(page.file, html);
      const words = countWords(html);
      created.push(page.file);
      if (words < page.minWords) {
        warnings.push(`${page.file}: ${words} words (target ≥${page.minWords})`);
      } else {
        console.log(`✓ ${page.file} (${words} words)`);
      }
    } catch (err) {
      errors.push(`${page.file}: ${err.message}`);
      console.error(`✗ ${page.file}:`, err.message);
    }
  }

  console.log(`\nGenerated ${created.length} files.`);
  if (warnings.length) {
    console.log('\nWarnings:');
    warnings.forEach((w) => console.log('  -', w));
  }
  if (errors.length) {
    console.log('\nErrors:');
    errors.forEach((e) => console.error('  -', e));
    process.exit(1);
  }
}

if (require.main === module) main();
module.exports = { main, PAGES };
