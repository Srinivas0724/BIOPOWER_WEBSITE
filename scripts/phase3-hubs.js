/** resources.html and faq.html hub pages */
const { BRAND, pageShell, faqSection, ctaSection, relatedSection, orgSchema, localBusinessSchema, breadcrumbSchema, faqSchema } = require('./phase3-shared');
const { section, prose, rgGrid, HERO } = require('./phase3-helpers');

function collectionPageSchema(url, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BIOPOWER Resource Center',
    description: 'Guides, blog posts, subsidy information, and downloads for biogas, OWC, STP, and CBG solutions.',
    url,
    publisher: { '@id': `${BRAND.site}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: item.url,
        description: item.description,
      })),
    },
  };
}

const RESOURCE_ITEMS = [
  { name: 'How Biogas Plants Work', url: `${BRAND.site}/blog/how-biogas-plants-work.html`, description: 'Anaerobic digestion explained for beginners.' },
  { name: 'Commercial Biogas Plant Guide', url: `${BRAND.site}/blog/commercial-biogas-plant-guide.html`, description: 'Sizing and planning commercial biogas installations.' },
  { name: 'Biogas Plant Cost in India', url: `${BRAND.site}/blog/biogas-plant-cost-in-india.html`, description: 'Cost factors and ROI for biogas projects.' },
  { name: 'Government Subsidies for Biogas', url: `${BRAND.site}/blog/government-subsidies-for-biogas-plants.html`, description: 'MNRE and state subsidy eligibility guide.' },
  { name: 'Benefits of Biogas Plants', url: `${BRAND.site}/blog/benefits-of-biogas-plants.html`, description: 'Environmental and economic benefits overview.' },
  { name: 'Organic Waste Converter Guide', url: `${BRAND.site}/blog/organic-waste-converter.html`, description: 'Complete OWC machine guide for RWAs and hotels.' },
  { name: 'OWC Machine Cost', url: `${BRAND.site}/blog/owc-machine-cost.html`, description: 'Pricing and payback for OWC installations.' },
  { name: 'Commercial Composting Solutions', url: `${BRAND.site}/blog/commercial-composting-solutions.html`, description: 'OWC vs traditional composting comparison.' },
  { name: 'Organic Waste Management', url: `${BRAND.site}/blog/organic-waste-management.html`, description: 'Best practices for segregating and processing wet waste.' },
  { name: 'How STP Works', url: `${BRAND.site}/blog/how-stp-works.html`, description: 'Sewage treatment process explained.' },
  { name: 'STP Cost in India', url: `${BRAND.site}/blog/stp-cost-in-india.html`, description: 'STP pricing for apartments and industries.' },
  { name: 'Industrial STP Guide', url: `${BRAND.site}/blog/industrial-stp-guide.html`, description: 'Industrial effluent treatment planning.' },
  { name: 'Wastewater Treatment Technologies', url: `${BRAND.site}/blog/wastewater-treatment-technologies.html`, description: 'MBBR, SBR, MBR technology comparison.' },
  { name: 'Water Recycling Methods', url: `${BRAND.site}/blog/water-recycling-methods.html`, description: 'Treated water reuse applications.' },
  { name: 'Composting vs Biogas', url: `${BRAND.site}/blog/composting-vs-biogas.html`, description: 'Choose the right on-site processing technology.' },
  { name: 'Food Waste Management', url: `${BRAND.site}/blog/food-waste-management.html`, description: 'Hotel and commercial kitchen waste strategies.' },
  { name: 'ROI Report PDF', url: `${BRAND.site}/images/client/ROI_Report.pdf`, description: 'Download BIOPOWER ROI analysis report.' },
];

function resourcesPage() {
  const slug = 'resources.html';
  const url = `${BRAND.site}/${slug}`;
  const body = [
    section('Hub', 'BIOPOWER <span class="gradient-text">Resource Center</span>', 'Guides, blog articles, subsidy information, and downloadable resources for biogas, OWC, STP, and CBG projects.', prose(
      'Whether you are an RWA evaluating OWC options, a hotel manager comparing biogas versus composting, or an industrial facility planning effluent treatment — this resource hub curates BIOPOWER\'s most useful guides and blog articles. Browse by category below or contact our team for project-specific advice.'
    )),
    section('Biogas', 'Biogas Guides & Articles', 'Learn about anaerobic digestion, commercial sizing, costs, subsidies, and benefits.', rgGrid([
      { tag: 'Guide', href: 'blog/how-biogas-plants-work.html', label: 'How Biogas Plants Work' },
      { tag: 'Guide', href: 'blog/commercial-biogas-plant-guide.html', label: 'Commercial Biogas Plant Guide' },
      { tag: 'Cost', href: 'blog/biogas-plant-cost-in-india.html', label: 'Biogas Plant Cost in India' },
      { tag: 'Subsidy', href: 'blog/government-subsidies-for-biogas-plants.html', label: 'Government Subsidies for Biogas' },
      { tag: 'Benefits', href: 'blog/benefits-of-biogas-plants.html', label: 'Benefits of Biogas Plants' },
      { tag: 'Landing', href: 'biogas-plant-karnataka.html', label: 'Biogas Plant Karnataka' },
    ]), true),
    section('OWC', 'Organic Waste Converter Guides', 'OWC sizing, costs, composting solutions, and waste management best practices.', rgGrid([
      { tag: 'Guide', href: 'blog/organic-waste-converter.html', label: 'Organic Waste Converter Guide' },
      { tag: 'Cost', href: 'blog/owc-machine-cost.html', label: 'OWC Machine Cost' },
      { tag: 'Compare', href: 'blog/commercial-composting-solutions.html', label: 'Commercial Composting Solutions' },
      { tag: 'Management', href: 'blog/organic-waste-management.html', label: 'Organic Waste Management' },
      { tag: 'Compare', href: 'blog/composting-vs-biogas.html', label: 'Composting vs Biogas' },
      { tag: 'Landing', href: 'organic-waste-converter-karnataka.html', label: 'OWC Karnataka' },
    ])),
    section('STP', 'Sewage Treatment Guides', 'STP technology, costs, industrial effluent, and water reuse methods.', rgGrid([
      { tag: 'Guide', href: 'blog/how-stp-works.html', label: 'How STP Works' },
      { tag: 'Cost', href: 'blog/stp-cost-in-india.html', label: 'STP Cost in India' },
      { tag: 'Industrial', href: 'blog/industrial-stp-guide.html', label: 'Industrial STP Guide' },
      { tag: 'Technology', href: 'blog/wastewater-treatment-technologies.html', label: 'Wastewater Treatment Technologies' },
      { tag: 'Reuse', href: 'blog/water-recycling-methods.html', label: 'Water Recycling Methods' },
      { tag: 'Landing', href: 'stp-plant-karnataka.html', label: 'STP Plant Karnataka' },
    ]), true),
    section('CBG', 'Bio-CNG & CBG Guides', 'Commercial biogas upgrading, food waste management, and subsidy resources.', rgGrid([
      { tag: 'Guide', href: 'blog/commercial-biogas-plant-guide.html', label: 'Commercial Biogas Guide' },
      { tag: 'Subsidy', href: 'blog/government-subsidies-for-biogas-plants.html', label: 'Government Subsidies' },
      { tag: 'Food Waste', href: 'blog/food-waste-management.html', label: 'Food Waste Management' },
      { tag: 'Landing', href: 'bio-cng-plant-karnataka.html', label: 'Bio-CNG Karnataka' },
      { tag: 'Industry', href: 'cbg-for-food-processing-industry.html', label: 'CBG for Food Processing' },
      { tag: 'FAQ', href: 'faq.html', label: 'FAQ Hub' },
    ])),
    section('Subsidy', 'Subsidy & Policy Information', 'Central and state programmes that may support your waste-to-energy project.', prose(
      'MNRE\'s National Biogas Programme and periodic state nodal schemes offer capital subsidy for community and institutional biogas. SATAT framework supports compressed biogas offtake through oil marketing companies. Eligibility varies by plant size, applicant category, and active notification period.',
      'Read our detailed guide: <a href="blog/government-subsidies-for-biogas-plants.html">Government Subsidies for Biogas Plants</a>. BIOPOWER verifies current scheme status during your free site assessment and assists with technical documentation for subsidy applications.'
    ), true),
    section('Downloads', 'Downloads & Reports', 'ROI analysis and project documentation templates.', prose(
      '<strong>ROI Report:</strong> Download our sample return-on-investment analysis for institutional biogas and OWC projects — <a href="images/client/ROI_Report.pdf" target="_blank" rel="noopener">ROI_Report.pdf</a> (PDF).',
      'For project-specific ROI modelling, contact our team with your waste volume, location, and energy or water costs. We provide customised financial projections during site assessments.'
    )),
    ctaSection('Need Project-Specific Guidance?', 'Browse the guides above or speak directly with our engineers for a tailored recommendation.', 'contact.html', 'Contact BIOPOWER'),
    relatedSection('Popular Landing Pages', [
      { tag: 'Biogas', href: 'biogas-plant-for-hotels.html', label: 'Biogas for Hotels' },
      { tag: 'OWC', href: 'organic-waste-converter-for-apartments.html', label: 'OWC for Apartments' },
      { tag: 'STP', href: 'stp-for-apartments.html', label: 'STP for Apartments' },
      { tag: 'Case Study', href: 'case-studies/hotel-biogas-case-study.html', label: 'Hotel Case Study' },
    ]),
  ].join('\n');
  return pageShell({
    depth: 0,
    title: 'Resource Center | Biogas, OWC, STP & CBG Guides - BIOPOWER',
    description: 'BIOPOWER resource hub — biogas, OWC, STP, and CBG guides, blog articles, subsidy info, and ROI report download.',
    canonical: url,
    ogImage: `${BRAND.site}/images/biopower-logo.png`,
    heroBg: HERO.resources,
    badge: 'Guides · Downloads · Subsidy Info',
    h1: 'BIOPOWER <span class="accent">Resource Center</span>',
    lead: 'Curated guides, blog articles, subsidy information, and downloadable resources for biogas, organic waste converters, sewage treatment, and Bio-CNG projects.',
    body,
    schemas: [
      orgSchema(),
      localBusinessSchema(),
      breadcrumbSchema([
        { name: 'Home', url: `${BRAND.site}/` },
        { name: 'Resources', url },
      ]),
      collectionPageSchema(url, RESOURCE_ITEMS),
    ],
  });
}

const FAQ_SECTIONS = {
  Biogas: [
    { q: 'What is a biogas plant and how does it work?', a: 'A biogas plant uses anaerobic digestion — bacteria breaking down organic waste in an oxygen-free environment — to produce methane-rich biogas. The gas is captured and used for cooking, heating, or power generation. Digestate left after digestion is nutrient-rich organic manure.' },
    { q: 'What waste can be fed into a biogas plant?', a: 'Kitchen food waste, canteen scraps, fruit and vegetable trimmings, dairy waste, and agricultural residue work well. Avoid large bones, coconut shells in excess, and non-organic contaminants like plastic and metal.' },
    { q: 'How much does a biogas plant cost in India?', a: 'Portable plants from 1–100 kg/day start from approximately ₹40,000. Commercial and institutional plants from 125 kg/day to several metric tons per day are custom-quoted based on capacity, civil work, and gas utilisation equipment.' },
    { q: 'Is government subsidy available for biogas plants?', a: 'MNRE and state nodal agencies periodically offer capital subsidy for community and institutional biogas under active scheme notifications. Eligibility depends on plant size and applicant category — verified during BIOPOWER site assessment.' },
    { q: 'How long does biogas plant installation take?', a: 'Portable units: 2–5 days. Commercial and institutional plants: 4–10 weeks including civil foundations, piping, and commissioning.' },
  ],
  OWC: [
    { q: 'What is an organic waste converter (OWC)?', a: 'An OWC is an enclosed machine that uses accelerated aerobic composting to convert segregated food waste into mature compost within 24–48 hours through controlled temperature, moisture, and agitation.' },
    { q: 'OWC vs biogas — which should my apartment choose?', a: 'OWC produces compost quickly without gas piping — ideal for RWAs focused on waste diversion. Biogas generates cooking energy from the same waste. Some large communities install both for different waste streams.' },
    { q: 'How much space does an OWC need?', a: 'A 250 kg/day OWC typically needs 15–25 sq.m including loading area and ventilation. Larger units for hotels and townships need 30–60 sq.m.' },
    { q: 'Can OWC compost be used in gardens?', a: 'Yes. Properly processed OWC output is suitable for landscaping, terrace gardens, and agricultural use. Some properties bag excess compost for resident distribution or nursery sale.' },
    { q: 'What is the operating cost of an OWC?', a: 'Electricity for heating and agitation is the primary O&M cost — typically ₹3–8 per kg of waste processed. BIOPOWER AMC contracts cover periodic maintenance and parts.' },
  ],
  STP: [
    { q: 'Is STP mandatory for apartments in Karnataka?', a: 'Yes. New projects require functional STP for occupancy certificates. Existing communities facing KSPCB notices must install or upgrade STP to meet discharge or reuse standards.' },
    { q: 'What STP technology is best for apartments?', a: 'MBBR and SBR packaged plants are most common for apartments — compact footprint, stable performance, and manageable operator requirements. MBR suits projects needing higher reuse quality.' },
    { q: 'Can STP treated water be used for toilet flushing?', a: 'Yes. Treated water meeting KSPCB reuse standards is widely used for toilet flushing and landscaping — reducing freshwater demand 30–40% in water-scarce cities like Bengaluru.' },
    { q: 'What size STP does a 300-flat apartment need?', a: 'Approximately 80–120 KLD depending on occupancy, per-capita consumption, and reuse goals. BIOPOWER sizes STP after flow measurement and occupancy assessment.' },
    { q: 'What is the STP operating cost?', a: 'Electricity, chemicals, and sludge handling typically cost ₹8–15 per kilolitre treated. Water reuse savings often exceed O&M costs in tanker-dependent communities.' },
  ],
  CBG: [
    { q: 'What is Bio-CNG / CBG?', a: 'Compressed Biogas (CBG) is biogas upgraded to 95%+ methane content, compressed to high pressure, and used as vehicular or industrial fuel — equivalent to conventional CNG but produced from organic waste.' },
    { q: 'What feedstock suits CBG plants?', a: 'Food processing waste, press mud, cattle dung, poultry litter, and municipal segregated wet waste. Consistent daily volume and pre-treatment are critical for stable upgrading.' },
    { q: 'What is the minimum scale for viable CBG?', a: 'Most viable CBG projects start at 5–10 MT/day organic feedstock or equivalent effluent load. Smaller installations may produce raw biogas for on-site boiler use without full upgrading.' },
    { q: 'What is SATAT and how does it relate to CBG?', a: 'SATAT (Sustainable Alternative Towards Affordable Transportation) is a government initiative encouraging CBG production and offtake through oil marketing companies — providing market access for larger CBG projects.' },
    { q: 'Can CBG integrate with existing effluent treatment?', a: 'Yes. Anaerobic digesters can be added upstream of aerobic ETP stages — capturing biogas while reducing COD load on downstream treatment, lowering aeration energy and sludge volume.' },
  ],
};

function faqHubPage() {
  const slug = 'faq.html';
  const url = `${BRAND.site}/${slug}`;
  const allFaqs = Object.values(FAQ_SECTIONS).flat();
  const body = [
    section('Hub', 'Frequently Asked <span class="gradient-text">Questions</span>', 'Answers to common questions about biogas, organic waste converters, sewage treatment, and Bio-CNG — from BIOPOWER engineers.', prose(
      'Browse FAQs by category below. For project-specific questions, request a free site assessment — our team responds within 48 hours with capacity recommendations and ROI estimates.'
    )),
    ...Object.entries(FAQ_SECTIONS).map(([cat, faqs], i) =>
      faqSection(faqs).replace('Frequently Asked Questions', `${cat} FAQs`).replace('id="faqs"', `id="faqs-${cat.toLowerCase()}"`)
    ),
    ctaSection('Still Have Questions?', 'Our engineers provide free site assessments for biogas, OWC, STP, and CBG projects across India.', 'contact.html', 'Contact BIOPOWER'),
    relatedSection('Helpful Resources', [
      { tag: 'Resources', href: 'resources.html', label: 'Resource Center' },
      { tag: 'Biogas', href: 'biogas-plant-karnataka.html', label: 'Biogas Karnataka' },
      { tag: 'OWC', href: 'organic-waste-converter-karnataka.html', label: 'OWC Karnataka' },
      { tag: 'STP', href: 'stp-plant-karnataka.html', label: 'STP Karnataka' },
      { tag: 'CBG', href: 'bio-cng-plant-karnataka.html', label: 'Bio-CNG Karnataka' },
    ]),
  ].join('\n');
  return pageShell({
    depth: 0,
    title: 'FAQ Hub | Biogas, OWC, STP & CBG Questions - BIOPOWER',
    description: 'BIOPOWER FAQ hub — answers on biogas plants, OWC machines, STP systems, and Bio-CNG. 20+ expert answers from our engineering team.',
    canonical: url,
    ogImage: `${BRAND.site}/images/biopower-logo.png`,
    heroBg: HERO.faq,
    badge: '20+ Expert Answers',
    h1: 'BIOPOWER <span class="accent">FAQ Hub</span>',
    lead: 'Expert answers to the most common questions about biogas plants, organic waste converters, sewage treatment plants, and Bio-CNG systems in India.',
    body,
    schemas: [
      orgSchema(),
      localBusinessSchema(),
      breadcrumbSchema([
        { name: 'Home', url: `${BRAND.site}/` },
        { name: 'FAQ', url },
      ]),
      faqSchema(allFaqs),
    ],
  });
}

module.exports = { resourcesPage, faqHubPage };
