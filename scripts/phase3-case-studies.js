/** Case study pages (depth=1, no fabricated customer names) */
const { BRAND, pageShell, ctaSection, relatedSection } = require('./phase3-shared');
const { prose, section, caseMeta, landingSchemas, HERO } = require('./phase3-helpers');

function caseStudyShell({ slug, title, description, h1, badge, lead, heroBg, body, faqs, crumbs, serviceName, serviceDesc, area }) {
  const url = `${BRAND.site}/${slug}`;
  return pageShell({
    depth: 1,
    title,
    description,
    canonical: url,
    ogImage: `${BRAND.site}/images/biopower-logo.png`,
    heroBg,
    badge,
    h1,
    lead,
    body: body + ctaSection('Discuss a Similar Project', 'Tell us about your property type, waste volume, and location — our engineers will outline a comparable solution.', 'contact.html', 'Contact BIOPOWER', 1) + relatedSection('Related Case Studies & Guides', [
      { tag: 'Case Study', href: 'hotel-biogas-case-study.html', label: 'Hotel Biogas' },
      { tag: 'Case Study', href: 'apartment-owc-case-study.html', label: 'Apartment OWC' },
      { tag: 'Case Study', href: 'institutional-biogas-case-study.html', label: 'Institutional Biogas' },
      { tag: 'Case Study', href: 'stp-installation-case-study.html', label: 'STP Installation' },
    ]),
    schemas: landingSchemas({
      name: serviceName,
      desc: serviceDesc,
      url,
      area,
      crumbs,
      faqs,
    }),
  });
}

function hotelBiogasCaseStudy() {
  const slug = 'case-studies/hotel-biogas-case-study.html';
  const faqs = [
    { q: 'What type of hotel was this project?', a: 'A mid-size business hotel in Bengaluru with approximately 140 rooms, one full-service restaurant, banquet facility, and staff canteen — typical of properties along the Outer Ring Road corridor.' },
    { q: 'How much LPG did the biogas plant offset?', a: 'After stabilisation, the plant offset roughly 55% of commercial kitchen LPG consumption for boiling, steaming, and rice preparation — with LPG retained for high-flame wok stations.' },
    { q: 'How long did installation take?', a: 'Site civil work and plant installation completed in six weeks. Gas output reached design parameters within three weeks of seeding the digester.' },
    { q: 'Was KSPCB documentation provided?', a: 'Yes. BIOPOWER supplied operating manuals, daily feed logs, and waste diversion records used during a municipal bulk-generator inspection.' },
  ];
  const body = [
    section('Project', 'Mid-Size Business Hotel, <span class="gradient-text">Bengaluru</span>', 'Commercial biogas plant converting kitchen and banquet food waste into cooking fuel.', caseMeta([
      { v: '350 kg/day', k: 'Plant Capacity' },
      { v: '280 kg/day', k: 'Avg. Waste Fed' },
      { v: '55%', k: 'LPG Offset' },
      { v: '18 mo', k: 'Payback Achieved' },
      { v: '102 T/yr', k: 'Waste Diverted' },
    ]) + prose(
      'A 140-room business hotel along Bengaluru\'s Outer Ring Road corridor faced rising LPG bills and increasing scrutiny on food waste disposal. Daily kitchen operations — restaurant prep, buffet service, banquet events, and staff canteen — generated an average 280 kg of segregated food waste. The property previously paid a waste vendor for daily collection and hauled waste to an off-site processing facility with limited documentation for compliance audits.',
      'BIOPOWER conducted a kitchen waste audit over two weeks, measuring peak volumes during banquet weekends and baseline restaurant loads. We recommended a 350 kg/day institutional biogas plant with pre-crusher, enclosed digester, floating gas holder, and manifold connection to the main kitchen LPG line. Installation occupied a 45 sq.m service yard behind the laundry block — screened from guest areas with landscaping.',
      'The challenge was feedstock consistency: banquet events produced spikes of rice, bread, and vegetable trimmings while weekday restaurant waste was more uniform. We configured a buffer feed tank and trained kitchen staff on pre-sorting — removing coconut shells, large bones, and plastic contaminants before maceration. Engineering staff received daily feeding protocol documentation.',
      'Within six weeks of commissioning, biogas output stabilised at design parameters. The kitchen team reported seamless switching between biogas and LPG via the manifold. Monthly LPG consumption dropped 55% for applicable cooking loads. Digestate was dewatered and applied to hotel landscaping — reducing purchased fertiliser for the property\'s garden beds and herb planters.',
      'Environmental impact: approximately 102 tonnes of food waste diverted from landfill annually, with estimated 45 tonnes CO₂-equivalent avoided through LPG displacement and methane capture from rotting waste. The property documented daily throughput for a KSPCB bulk-generator inspection with no observations.',
      'Results after 18 months: capital investment recovered through LPG savings and eliminated waste-hauling fees. The hotel added biogas metrics to its sustainability reporting for corporate travel accounts. BIOPOWER AMC covers quarterly biological health checks and spare parts.'
    ), true),
    section('Solution', 'Technical Configuration', null, prose(
      'Plant type: Institutional fixed-dome digester with pre-crusher and floating gas holder. Feedstock: segregated kitchen and banquet food waste. Gas use: commercial kitchen manifold for boiling, steaming, and rice cooking. Digestate: dewatered slurry for on-site landscaping. Monitoring: daily feed weight logs, weekly gas pressure readings, monthly BIOPOWER AMC visit.'
    )),
  ].join('\n');
  return caseStudyShell({
    slug, title: 'Hotel Biogas Case Study | Mid-Size Business Hotel Bengaluru - BIOPOWER', description: 'Case study: 140-room Bengaluru hotel biogas plant — 350 kg/day capacity, 55% LPG offset, 102 T/yr waste diverted. BIOPOWER installation.',
    h1: 'Case Study: <span class="accent">Mid-Size Business Hotel</span>, Bengaluru', badge: 'Case Study · Hotel Biogas', lead: 'How a 140-room business hotel converted kitchen and banquet food waste into biogas — cutting LPG costs and achieving documented waste diversion.', heroBg: HERO.hotel, body, faqs,
    crumbs: [{ name: 'Home', url: `${BRAND.site}/` }, { name: 'Case Studies', url: `${BRAND.site}/case-studies/hotel-biogas-case-study.html` }, { name: 'Hotel Biogas', url: `${BRAND.site}/${slug}` }],
    serviceName: 'Hotel Biogas Plant Case Study', serviceDesc: 'Commercial biogas installation case study for a mid-size business hotel in Bengaluru.', area: 'Bengaluru',
  });
}

function apartmentOwcCaseStudy() {
  const slug = 'case-studies/apartment-owc-case-study.html';
  const faqs = [
    { q: 'What size apartment community was this?', a: 'A 500-unit apartment complex in Karnataka with approximately 75% occupancy — a gated community with podium gardens and basement utility space.' },
    { q: 'How much haulage cost was saved?', a: 'The RWA eliminated approximately ₹9.5 lakh per year in wet-waste collection vendor fees after OWC commissioning.' },
    { q: 'How was resident segregation improved?', a: 'Pre-installation awareness campaign with floor champions and colour-coded bins improved segregation quality from ~60% to 92% within three months.' },
    { q: 'Where was the OWC installed?', a: 'In a dedicated 35 sq.m waste processing room on the basement level with exhaust ventilation and condensate drainage.' },
  ];
  const body = [
    section('Project', '500-Unit Apartment Complex, <span class="gradient-text">Karnataka</span>', 'Organic Waste Converter enabling on-site composting and BBMP bulk-generator compliance.', caseMeta([
      { v: '500 kg/day', k: 'OWC Capacity' },
      { v: '420 kg/day', k: 'Avg. Waste Processed' },
      { v: '92%', k: 'Segregation Rate' },
      { v: '28 mo', k: 'Payback Period' },
      { v: '153 T/yr', k: 'Waste Diverted' },
    ]) + prose(
      'A 500-flat gated community in Karnataka struggled with escalating wet-waste collection costs and BBMP bulk-generator compliance requirements. Despite resident segregation efforts, the RWA paid a vendor ₹18–22 per kilogram for daily haulage — totalling nearly ₹10 lakh annually. Podium garden maintenance required purchased compost and fertiliser.',
      'BIOPOWER assessed daily waste generation through a two-week weighing programme at the collection point. With 75% occupancy, segregated wet waste averaged 420 kg/day — peaking during festival weekends. We recommended a 500 kg/day OWC machine installed in a basement utility room with ventilation upgrade and condensate drain connection.',
      'The challenge was resident behaviour: early loads contained plastic and dry waste contamination that disrupted OWC cycles. BIOPOWER and the RWA green committee launched a pre-commissioning campaign — floor-wise champions, WhatsApp segregation guides, and children\'s workshop on composting. Segregation quality improved from approximately 60% to 92% within three months.',
      'OWC commissioning took 12 days including electrical work and exhaust installation. Facility staff — two housekeeping supervisors — were trained on loading protocols, cycle monitoring, and compost harvesting. Mature compost output averaged 85–100 kg per day, applied to podium gardens and terrace planters. Excess compost was bagged for resident distribution during green events.',
      'Environmental impact: 153 tonnes of wet waste diverted from landfill annually. Haulage truck trips eliminated — reducing community gate congestion and diesel emissions from daily vendor vehicles. BBMP inspection accepted OWC daily logs as proof of on-site processing.',
      'Financial results: ₹9.5 lakh annual haulage savings plus ₹1.2 lakh fertiliser cost avoidance. Capital investment recovered in 28 months. Resident satisfaction survey showed improved ratings on waste management — a factor the RWA highlighted in resale communications.'
    ), true),
    section('Solution', 'Technical Configuration', null, prose(
      'Equipment: BIOPOWER 500 kg/day thermophilic OWC with carbon filter exhaust. Location: basement waste processing room. Operation: two trained facility staff, 30 minutes daily loading. Output: compost for podium and terrace gardens. Compliance: daily cycle logs and output weight records for municipal inspection.'
    )),
  ].join('\n');
  return caseStudyShell({
    slug, title: 'Apartment OWC Case Study | 500-Unit Complex Karnataka - BIOPOWER', description: 'Case study: 500-unit Karnataka apartment OWC — 500 kg/day capacity, 153 T/yr diverted, BBMP compliance. BIOPOWER installation.',
    h1: 'Case Study: <span class="accent">500-Unit Apartment Complex</span>, Karnataka', badge: 'Case Study · Apartment OWC', lead: 'How a 500-flat gated community eliminated wet-waste haulage costs and achieved on-site composting with a BIOPOWER OWC machine.', heroBg: HERO.apartment, body, faqs,
    crumbs: [{ name: 'Home', url: `${BRAND.site}/` }, { name: 'Case Studies', url: `${BRAND.site}/case-studies/apartment-owc-case-study.html` }, { name: 'Apartment OWC', url: `${BRAND.site}/${slug}` }],
    serviceName: 'Apartment OWC Case Study', serviceDesc: 'Organic waste converter case study for a 500-unit apartment complex in Karnataka.', area: 'Karnataka',
  });
}

function institutionalBiogasCaseStudy() {
  const slug = 'case-studies/institutional-biogas-case-study.html';
  const faqs = [
    { q: 'What type of institution was this?', a: 'An engineering college campus in Karnataka with 3,200 students, two hostel messes, staff canteen, and agricultural demonstration plot — without naming the institution per client privacy.' },
    { q: 'Does the plant support academic programmes?', a: 'Yes. Environmental engineering faculty use the plant for student projects on gas yield monitoring, digestate analysis, and anaerobic microbiology.' },
    { q: 'How much mess LPG was offset?', a: 'Biogas offset approximately 48% of hostel mess LPG for rice cooking, dal boiling, and vegetable steaming during academic sessions.' },
    { q: 'Was MNRE subsidy utilised?', a: 'The institution applied for institutional biogas subsidy under the active MNRE notification at project inception — BIOPOWER assisted with technical documentation.' },
  ];
  const body = [
    section('Project', 'Engineering College Campus, <span class="gradient-text">Karnataka</span>', 'Institutional biogas plant serving hostel messes with educational integration.', caseMeta([
      { v: '750 kg/day', k: 'Plant Capacity' },
      { v: '620 kg/day', k: 'Avg. Waste Fed' },
      { v: '48%', k: 'Mess LPG Offset' },
      { v: '22 mo', k: 'Payback Period' },
      { v: '186 T/yr', k: 'Waste Diverted' },
    ]) + prose(
      'An engineering college campus in Karnataka with 3,200 students and two residential hostel messes generated substantial daily food waste — rice, vegetables, and canteen scraps from academic-year operations. The administration sought infrastructure supporting NAAC green campus criteria while reducing mess LPG expenditure and landfill dependency.',
      'BIOPOWER\'s campus audit measured mess waste at 520–680 kg/day during semesters, dropping during vacations. We recommended a 750 kg/day institutional biogas plant with pre-crusher, fixed-dome digester, and gas pipeline to both mess kitchens. Location: rear utility area adjacent to the horticulture department — enabling digestate use on the campus agricultural demonstration plot.',
      'Challenge: maintaining digester biology during two-month vacation periods when waste volume dropped sharply. We configured reduced feeding protocols and supplemental feedstock from the horticulture department\'s green waste during low-occupancy periods. Environmental engineering faculty integrated the plant into lab modules — students monitor gas pressure, slurry pH, and methane content.',
      'Installation completed over eight weeks including underground gas piping to mess kitchens. Mess staff received training on segregation and feeding schedules aligned with meal preparation cycles. Biogas manifold connects to rice cookers and steam vessels — high-flame frying retains LPG backup.',
      'Environmental impact: 186 tonnes of organic waste processed on-campus annually. Digestate fertilises the agricultural demo plot — reducing purchased inputs for student farming projects. Documented diversion supports NAAC criterion on environmental sustainability.',
      'Results: 48% mess LPG offset during academic sessions, 22-month payback including MNRE subsidy component. Campus sustainability report publishes monthly biogas generation data. BIOPOWER AMC ensures biological health checks before each academic year restart.'
    ), true),
    section('Solution', 'Technical Configuration', null, prose(
      'Plant: 750 kg/day fixed-dome institutional biogas with pre-crusher. Feedstock: hostel mess and canteen food waste. Gas use: piped to two mess kitchens for boiling and steaming. Digestate: horticulture department demo plot. Education: faculty-supervised student monitoring programme.'
    )),
  ].join('\n');
  return caseStudyShell({
    slug, title: 'Institutional Biogas Case Study | Engineering College Karnataka - BIOPOWER', description: 'Case study: Karnataka engineering college biogas — 750 kg/day, 48% mess LPG offset, NAAC support. BIOPOWER campus installation.',
    h1: 'Case Study: <span class="accent">Engineering College Campus</span>, Karnataka', badge: 'Case Study · Institutional Biogas', lead: 'How an engineering college converted hostel mess waste into biogas — cutting LPG costs, supporting NAAC criteria, and enabling student research.', heroBg: HERO.college, body, faqs,
    crumbs: [{ name: 'Home', url: `${BRAND.site}/` }, { name: 'Case Studies', url: `${BRAND.site}/case-studies/institutional-biogas-case-study.html` }, { name: 'Institutional Biogas', url: `${BRAND.site}/${slug}` }],
    serviceName: 'Institutional Biogas Case Study', serviceDesc: 'Campus biogas plant case study for an engineering college in Karnataka.', area: 'Karnataka',
  });
}

function stpInstallationCaseStudy() {
  const slug = 'case-studies/stp-installation-case-study.html';
  const faqs = [
    { q: 'What type of property was this STP project?', a: 'A 380-flat apartment community in Bengaluru facing KSPCB compliance notice — requiring retrofit STP with treated water reuse for flushing and gardening.' },
    { q: 'What STP technology was installed?', a: 'A packaged 120 KLD MBBR plant with tertiary filtration and chlorination — installed in the basement utility area over 45 sq.m footprint.' },
    { q: 'How much freshwater was saved?', a: 'Treated water reuse for flushing and podium irrigation reduced tanker water purchases by approximately 38% — saving ₹14 lakh annually at prevailing tanker rates.' },
    { q: 'How long did retrofit installation take?', a: 'Eight weeks from civil modification to commissioning, with phased operation to minimise disruption to residents.' },
  ];
  const body = [
    section('Project', '380-Flat Apartment Community, <span class="gradient-text">Bengaluru</span>', 'Retrofit MBBR sewage treatment plant achieving KSPCB compliance and water reuse.', caseMeta([
      { v: '120 KLD', k: 'STP Capacity' },
      { v: '95 KLD', k: 'Avg. Daily Flow' },
      { v: '38%', k: 'Freshwater Saved' },
      { v: '36 mo', k: 'Payback Period' },
      { v: '34,000 KL/yr', k: 'Water Treated' },
    ]) + prose(
      'A 380-flat apartment community in Bengaluru received a Karnataka State Pollution Control Board notice requiring functional sewage treatment before the next inspection cycle. The original developer had provisioned STP space in the basement but equipment was never installed — raw sewage flowed to municipal lines. Tanker water purchases for flushing and gardening exceeded ₹36 lakh annually as borewells failed.',
      'BIOPOWER conducted flow measurement over two weeks: average sewage generation of 95 KLD based on occupancy and per-capita consumption patterns. We recommended a packaged 120 KLD MBBR plant — providing 25% headroom for full occupancy — with tertiary filtration and chlorination for reuse-quality output. Basement utility area required minor civil modification for tank placement and blower room ventilation.',
      'Retrofit challenges included limited headroom for tank delivery, working around resident vehicle parking schedules, and connecting treated water to dual plumbing for toilet flushing and podium irrigation. BIOPOWER coordinated with the RWA facilities team on phased shutdowns — no full-day water outage exceeded four hours.',
      'Commissioning completed in eight weeks. Treated effluent quality met KSPCB inland surface water discharge norms and exceeded reuse standards for flushing. Dual plumbing delivered treated water to all toilet cisterns and irrigation manifolds for podium gardens. Sludge handling via authorised desludging vendor on quarterly schedule.',
      'Environmental impact: 34,000 kilolitres of sewage treated annually — preventing raw discharge to storm drains connecting to local lakes. Freshwater demand reduced 38% through reuse, decreasing groundwater extraction and tanker diesel transport.',
      'Results: KSPCB inspection passed with no further observations. Tanker water spending dropped ₹14 lakh per year. Including compliance penalty avoidance and property value protection, the RWA projected 36-month payback on STP investment. BIOPOWER AMC covers monthly lab testing and quarterly blower maintenance.'
    ), true),
    section('Solution', 'Technical Configuration', null, prose(
      'Technology: 120 KLD packaged MBBR with tertiary sand filter and sodium hypochlorite disinfection. Location: basement utility area, 45 sq.m. Reuse: toilet flushing and podium irrigation via dual plumbing. Monitoring: monthly third-party lab tests for BOD, TSS, and faecal coliform. O&M: BIOPOWER AMC with 24-hour breakdown response.'
    )),
  ].join('\n');
  return caseStudyShell({
    slug, title: 'STP Installation Case Study | 380-Flat Apartment Bengaluru - BIOPOWER', description: 'Case study: Bengaluru apartment STP retrofit — 120 KLD MBBR, 38% water savings, KSPCB compliance. BIOPOWER installation.',
    h1: 'Case Study: <span class="accent">380-Flat Apartment Community</span>, Bengaluru', badge: 'Case Study · STP Retrofit', lead: 'How a Bengaluru apartment community achieved KSPCB compliance and cut tanker water costs with a packaged MBBR sewage treatment plant.', heroBg: HERO.stp, body, faqs,
    crumbs: [{ name: 'Home', url: `${BRAND.site}/` }, { name: 'Case Studies', url: `${BRAND.site}/case-studies/stp-installation-case-study.html` }, { name: 'STP Installation', url: `${BRAND.site}/${slug}` }],
    serviceName: 'Apartment STP Case Study', serviceDesc: 'Sewage treatment plant retrofit case study for a 380-flat apartment in Bengaluru.', area: 'Bengaluru',
  });
}

const caseStudyPages = [
  { file: 'case-studies/hotel-biogas-case-study.html', gen: hotelBiogasCaseStudy },
  { file: 'case-studies/apartment-owc-case-study.html', gen: apartmentOwcCaseStudy },
  { file: 'case-studies/institutional-biogas-case-study.html', gen: institutionalBiogasCaseStudy },
  { file: 'case-studies/stp-installation-case-study.html', gen: stpInstallationCaseStudy },
];

module.exports = { caseStudyPages };
