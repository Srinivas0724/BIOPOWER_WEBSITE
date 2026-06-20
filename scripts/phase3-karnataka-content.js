/** Karnataka statewide landing page content (1500–2000 words each) */
const { BRAND, pageShell, faqSection, ctaSection, relatedSection } = require('./phase3-shared');
const { prose, section, areaGrid, advGrid, stepsRow, specTable, benefitsStrip, indGrid, landingSchemas, HERO } = require('./phase3-helpers');

function karnatakaBiogas() {
  const slug = 'biogas-plant-karnataka.html';
  const url = `${BRAND.site}/${slug}`;
  const faqs = [
    { q: 'Which districts in Karnataka does BIOPOWER serve for biogas installations?', a: 'We deploy biogas plants across Karnataka — Bengaluru Urban and Rural, Mysuru, Mangaluru, Hubballi-Dharwad, Belagavi, Davangere, Tumakuru, Hassan, Shivamogga, Ballari, Kalaburagi, and Udupi. Our Bengaluru engineering hub coordinates statewide commissioning and AMC support.' },
    { q: 'What organic waste streams work best for biogas in Karnataka?', a: 'Hotel and canteen food waste, apartment kitchen waste, vegetable market refuse, dairy and cattle residue from cooperative farms, sugarcane press mud, and agro-processing by-products are common feedstocks. We size digesters after a feedstock audit at your site.' },
    { q: 'Are MNRE or Karnataka state subsidies available for biogas plants?', a: 'Central schemes under MNRE and state nodal programmes periodically offer capital subsidy for community and institutional biogas. Eligibility depends on plant capacity, applicant category, and active notification. Our team verifies current scheme status during your site assessment.' },
    { q: 'How long does a commercial biogas plant take to install in Karnataka?', a: 'Portable units from 1–100 kg/day can be commissioned within days once the site is ready. Institutional and commercial plants from 125 kg/day to several metric tons per day typically need 4–10 weeks including civil foundations, piping, and KSPCB documentation support.' },
    { q: 'Can biogas replace LPG entirely for a Karnataka hotel or institution?', a: 'For many canteens and commercial kitchens generating 150–800 kg/day of food waste, biogas can offset 40–70% of LPG demand. Full replacement depends on waste consistency, cooking load, and whether you add supplementary feedstock such as market waste.' },
  ];
  const body = [
    section('Overview', 'Biogas Plants Across <span class="gradient-text">Karnataka</span>', 'Statewide design, manufacture, and commissioning from BIOPOWER\'s Bengaluru headquarters — turning organic waste into clean cooking gas for institutions, farms, and industries.', prose(
      'Karnataka generates millions of tonnes of biodegradable waste each year from its cities, agricultural belts, and food-processing corridors. Hotels along the coast, apartment communities in Bengaluru and Mysuru, dairy cooperatives in Hassan and Tumakuru, and sugar factories in Belagavi all produce feedstock that can fuel on-site biogas plants instead of filling landfills or burdening municipal collection systems.',
      'BIOPOWER has manufactured and installed biogas systems across India since 2006, with deep roots in Karnataka. Our plants range from compact 1 kg/day portable units for homes to multi-ton commercial digesters for institutions. Every system is engineered around your actual waste profile — moisture content, particle size, daily volume, and peak loads — rather than a one-size catalogue pick.',
      'Anaerobic digestion converts organic matter into methane-rich biogas in an oxygen-free digester. The captured gas can power commercial kitchens, water heaters, or backup generators. The digestate leaving the tank is a nutrient-rich organic fertiliser suitable for landscaping, farming, or sale to nurseries. For Karnataka properties facing rising LPG costs and stricter solid-waste compliance, biogas delivers both economic and environmental returns.',
      'Karnataka State Pollution Control Board (KSPCB) and municipal bodies increasingly expect bulk waste generators — apartments above certain thresholds, hotels, hospitals, and industries — to treat organic waste on-premises or through authorised channels. A BIOPOWER biogas plant provides documented proof of waste diversion, daily operating logs, and digestate management records that support compliance audits.',
      'Whether you operate a 200-room resort in Mangaluru, a gated community in Whitefield, or a food-processing unit near Hubballi, our engineers conduct a free site assessment to recommend capacity, layout, civil requirements, and expected gas output before you commit capital.'
    )),
    section('Coverage', 'Districts & Cities We Serve', 'Installation, commissioning, and annual maintenance contracts across Karnataka\'s urban centres and industrial corridors.', areaGrid([
      'Bengaluru Urban & Rural', 'Mysuru', 'Mangaluru & Udupi', 'Hubballi-Dharwad',
      'Belagavi', 'Davangere', 'Tumakuru', 'Hassan', 'Shivamogga', 'Ballari',
      'Kalaburagi', 'Raichur', 'Chitradurga', 'Kolar & Chikkaballapur', 'Coastal Karnataka', 'Malnad Region',
    ]), true),
    section('Why Karnataka', 'Why Property Owners Choose BIOPOWER', 'Local manufacturing, statewide service network, and compliance documentation tailored to Karnataka regulations.', advGrid([
      { icon: '🏭', h: 'Manufactured in Karnataka', p: 'Our engineering and production team is headquartered in Bengaluru, reducing lead times for custom digesters, spare parts, and emergency service anywhere in the state.' },
      { icon: '🌾', h: 'Agricultural & Urban Feedstock', p: 'Plants are sized for mixed streams — from apartment kitchen waste and hotel buffets to press mud, dairy waste, and market vegetable trimmings common across Karnataka districts.' },
      { icon: '📋', h: 'KSPCB-Ready Documentation', p: 'We assist with waste-management plans, operating manuals, and diversion records that apartments, hotels, and industries need for pollution-control and municipal inspections.' },
    ])),
    section('Process', 'How Anaerobic Digestion Works', 'Five stages from waste input to usable biogas and organic fertiliser output.', stepsRow([
      { h: 'Waste Collection', p: 'Segregated wet waste is collected and pre-processed — crushed or macerated if needed.' },
      { h: 'Feeding the Digester', p: 'Organic slurry enters the anaerobic tank at a controlled daily rate.' },
      { h: 'Methane Production', p: 'Bacteria break down waste over 20–30 days, releasing biogas.' },
      { h: 'Gas Storage & Use', p: 'Methane is stored and piped to stoves, boilers, or generators.' },
      { h: 'Digestate Recovery', p: 'Nutrient-rich slurry is dewatered and used as organic manure.' },
    ])),
    section('Comparison', 'Portable vs Commercial Biogas Plants', 'Choose the format that matches your waste volume and property type.', specTable(
      ['Parameter', 'Portable Plant', 'Commercial / Institutional'],
      [
        ['Capacity', '1 – 100 kg/day', '125 kg/day – 100 MT/day'],
        ['Ideal For', 'Homes, small offices', 'Apartments, hotels, colleges, farms'],
        ['Footprint', 'Balcony or backyard', 'Dedicated outdoor pad with civil work'],
        ['Install Time', '2 – 5 days', '4 – 10 weeks'],
        ['Typical Payback', '12 – 18 months', '16 – 24 months'],
        ['Output', 'Cooking gas + small manure', 'Kitchen/generator gas + bulk digestate'],
      ]
    ), true),
    section('Industries', 'Sectors We Serve in Karnataka', null, indGrid([
      { icon: '🏨', label: 'Hotels & Resorts' }, { icon: '🏢', label: 'Apartments' }, { icon: '🎓', label: 'Colleges' },
      { icon: '🏥', label: 'Hospitals' }, { icon: '🍽️', label: 'Canteens' }, { icon: '🥬', label: 'Markets' },
      { icon: '🐄', label: 'Dairies' }, { icon: '🏭', label: 'Food Processing' }, { icon: '🌿', label: 'Farms' }, { icon: '🛕', label: 'Temples' },
    ])),
    section('Benefits', 'Benefits of On-Site Biogas in Karnataka', null, benefitsStrip([
      { icon: '🔥', h: 'Lower LPG Bills', p: 'Offset commercial kitchen fuel costs with gas generated from your own organic waste stream.' },
      { icon: '♻️', h: 'Waste Diversion', p: 'Divert tonnes of wet waste from landfills and demonstrate compliance with SWM Rules 2016.' },
      { icon: '🌱', h: 'Organic Manure', p: 'Sell or reuse digestate for landscaping, farming, or community gardens across your property.' },
      { icon: '📉', h: 'Carbon Reduction', p: 'Cut methane emissions from rotting waste and displace fossil LPG with renewable biogas.' },
      { icon: '💰', h: 'Predictable ROI', p: 'Most institutional plants in Karnataka achieve payback within 16–24 months at current LPG tariffs.' },
      { icon: '🛠️', h: 'Local AMC Support', p: 'BIOPOWER provides annual maintenance, operator training, and remote monitoring options statewide.' },
    ])),
    section('Compliance', 'Regulatory Context in Karnataka', null, prose(
      'Under the Solid Waste Management Rules 2016, bulk waste generators must segregate waste at source and ensure processing of biodegradable fractions. Karnataka\'s urban local bodies — BBMP, MCC Mysuru, MCC Mangaluru, and others — enforce these norms through inspections and penalties for non-compliance.',
      'KSPCB guidelines for hotels, apartments, and industries often require documented waste-management plans. A biogas plant with daily feed logs, gas utilisation records, and digestate disposal receipts strengthens your compliance file during audits.',
      'For agro-industrial clients, biogas also aligns with corporate sustainability reporting and ESG targets. Capturing methane that would otherwise escape from open waste piles turns a liability into a measurable renewable-energy asset.'
    ), true),
    faqSection(faqs),
    ctaSection('Ready for a Karnataka Biogas Assessment?', 'Share your daily waste volume and location — our engineers will recommend capacity, layout, and expected ROI within 48 hours.', 'biogas_plant.html', 'View Biogas Products'),
    relatedSection('Related Guides', [
      { tag: 'Location', href: 'biogas-plant-bangalore.html', label: 'Biogas Plant Bangalore' },
      { tag: 'Industry', href: 'biogas-plant-for-hotels.html', label: 'Biogas for Hotels' },
      { tag: 'Industry', href: 'biogas-plant-for-apartments.html', label: 'Biogas for Apartments' },
      { tag: 'Guide', href: 'blog/commercial-biogas-plant-guide.html', label: 'Commercial Biogas Guide' },
      { tag: 'Case Study', href: 'case-studies/hotel-biogas-case-study.html', label: 'Hotel Biogas Case Study' },
      { tag: 'Resources', href: 'resources.html', label: 'Resource Center' },
    ]),
  ].join('\n');
  return pageShell({
    depth: 0, title: 'Biogas Plant Manufacturer in Karnataka | BIOPOWER', description: `BIOPOWER installs biogas plants across Karnataka — ${BRAND.years} experience, ${BRAND.installations} installations. Hotels, apartments, farms & industries. Free site assessment.`,
    canonical: url, ogImage: `${BRAND.site}/images/plants/1cum/1cum_image.webp`, heroBg: HERO.biogas,
    badge: 'Serving all Karnataka districts since 2006', h1: 'Biogas Plant Manufacturer in <span class="accent">Karnataka</span>',
    lead: 'Design, manufacture, and install portable and commercial biogas plants across Karnataka — converting kitchen, canteen, and agricultural waste into clean cooking gas from 1 kg/day to 100 metric tons/day.',
    body, schemas: landingSchemas({ name: 'Biogas Plant Installation in Karnataka', desc: 'Statewide biogas plant design, manufacture, and installation for hotels, apartments, farms, and industries across Karnataka.', url, area: 'Karnataka', crumbs: [{ name: 'Home', url: `${BRAND.site}/` }, { name: 'Biogas Plant Karnataka', url }], faqs }),
  });
}

function karnatakaOwc() {
  const slug = 'organic-waste-converter-karnataka.html';
  const url = `${BRAND.site}/${slug}`;
  const faqs = [
    { q: 'What capacity OWC machines does BIOPOWER supply in Karnataka?', a: `We supply organic waste converters from 25 kg/day to several metric tons per day — covering apartments, hotels, IT parks, and municipal wards. Capacity is matched to your peak daily wet-waste generation.` },
    { q: 'How fast does an OWC produce compost in Karnataka\'s climate?', a: 'In Karnataka\'s warm climate, most BIOPOWER OWC units convert segregated food waste into mature compost within 24–48 hours using thermophilic aerobic digestion with automatic temperature and moisture control.' },
    { q: 'Do OWC machines need KSPCB consent in Karnataka?', a: 'Standalone OWC installations for on-site composting typically fall under municipal SWM compliance rather than full industrial consent, but requirements vary by capacity and location. We guide you on documentation for your ULB and KSPCB category.' },
    { q: 'Can OWC output be used in apartment gardens across Karnataka?', a: 'Yes. Properly processed compost from a BIOPOWER OWC meets typical landscaping standards. Many gated communities in Bengaluru, Mysuru, and Mangaluru use output for gardens, selling excess to nurseries.' },
    { q: 'What is the difference between OWC and biogas for Karnataka apartments?', a: 'OWC produces solid compost quickly via aerobic processing — ideal when you need visible waste diversion without gas piping. Biogas captures methane for cooking energy. Some large communities install both: OWC for garden waste and biogas for kitchen streams.' },
  ];
  const body = [
    section('Overview', 'Organic Waste Converters Across <span class="gradient-text">Karnataka</span>', 'Accelerated composting machines for apartments, hotels, campuses, and municipalities — manufactured and supported by BIOPOWER statewide.', prose(
      'Karnataka\'s rapid urbanisation has increased pressure on landfills at Mandur, Mavallipura, and regional dump sites. Apartments, commercial kitchens, and institutions that once relied on municipal collection now face mandates to process biodegradable waste on-site. Organic Waste Converters (OWC) offer a proven, space-efficient solution: turn segregated food waste into usable compost within 24–48 hours.',
      'BIOPOWER OWC machines use controlled aerobic digestion — heated, agitated chambers where microorganisms break down waste without the odour and pest issues of open composting. Automatic sensors manage temperature, moisture, and cycle time. Operators load segregated wet waste, press start, and collect mature compost suitable for landscaping or sale.',
      'From 50-unit apartment complexes in Mysuru to 500-key hotel kitchens in Mangaluru, we size OWC capacity based on waste audits — accounting for occupancy, F&B operations, and seasonal variation. Our Bengaluru team handles installation, operator training, and annual maintenance anywhere in Karnataka.',
      'OWC complements Karnataka\'s push toward decentralised waste management under the Solid Waste Management Rules 2016. Bulk generators must demonstrate source segregation and processing. An OWC with daily logs, output weight records, and compost utilisation reports satisfies most municipal inspection requirements.',
      'Compared to windrow composting, OWC units occupy a compact footprint — often a single parking bay or utility room — and eliminate dependency on weather. For coastal Karnataka properties dealing with high humidity, enclosed OWC design prevents leachate runoff and controls odour more effectively than open pits.'
    )),
    section('Coverage', 'Karnataka Service Areas', 'OWC installation and AMC across major cities and tier-2 centres.', areaGrid([
      'Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi', 'Davangere', 'Tumakuru', 'Hassan', 'Shivamogga', 'Ballari', 'Kalaburagi', 'Udupi', 'Chitradurga', 'Kolar', 'Ramanagara', 'Dharwad',
    ]), true),
    section('Advantages', 'Why Karnataka Chooses BIOPOWER OWC', null, advGrid([
      { icon: '⚡', h: '24–48 Hour Compost', p: 'Thermophilic processing delivers mature compost fast — critical for properties with limited storage and daily compliance reporting.' },
      { icon: '🔒', h: 'Enclosed & Odour-Controlled', p: 'Fully enclosed chambers with carbon filters suit dense urban layouts in Bengaluru and Mysuru where neighbours are metres away.' },
      { icon: '📊', h: 'Compliance Reporting', p: 'Built-in cycle logs and output weighing support BBMP, MCC, and KSPCB documentation for bulk waste generators.' },
    ])),
    section('Process', 'OWC Composting Cycle', null, stepsRow([
      { h: 'Segregate', p: 'Collect wet waste separately from dry recyclables and reject streams.' },
      { h: 'Load', p: 'Feed pre-crushed waste into the OWC chamber up to rated capacity.' },
      { h: 'Aerobic Digest', p: 'Automated agitation and heating accelerate bacterial breakdown.' },
      { h: 'Cure', p: 'Material completes thermophilic phase within 24–48 hours.' },
      { h: 'Harvest', p: 'Unload compost for gardens, landscaping, or authorised sale.' },
    ])),
    section('Sizing', 'OWC Capacity Guide', 'Match machine size to your daily segregated wet-waste volume.', specTable(
      ['Property Type', 'Typical Waste (kg/day)', 'Recommended OWC'],
      [
        ['Small apartment (50–100 units)', '40 – 80', '25 – 50 kg/day unit'],
        ['Mid-size apartment (200–400 units)', '150 – 350', '100 – 250 kg/day unit'],
        ['Hotel (100–200 rooms)', '200 – 500', '250 – 500 kg/day unit'],
        ['College campus (2,000+ students)', '300 – 800', '500 kg – 1 MT/day'],
        ['Commercial kitchen / IT park', '500 – 2,000', '1 – 5 MT/day modular system'],
      ]
    ), true),
    section('Benefits', 'Benefits of OWC for Karnataka Properties', null, benefitsStrip([
      { icon: '♻️', h: 'Zero Landfill Wet Waste', p: 'Process 100% of segregated food waste on-premises — a direct SWM Rules compliance win.' },
      { icon: '🌿', h: 'Usable Compost Output', p: 'Generate organic fertiliser for gardens, terrace farms, or community green belts.' },
      { icon: '💵', h: 'Lower Haulage Costs', p: 'Eliminate daily wet-waste transport fees charged by vendors across Karnataka cities.' },
      { icon: '🏘️', h: 'Resident Satisfaction', p: 'Apartment associations demonstrate visible sustainability — increasingly valued in Bengaluru and Mysuru markets.' },
      { icon: '⏱️', h: 'Quick Installation', p: 'Most OWC units commission within 1–2 weeks including electrical and ventilation setup.' },
      { icon: '🛡️', h: 'Warranty & AMC', p: 'BIOPOWER provides operator training, spare parts, and annual maintenance statewide.' },
    ])),
    section('Sectors', 'Who Uses OWC in Karnataka', null, indGrid([
      { icon: '🏢', label: 'Apartments' }, { icon: '🏨', label: 'Hotels' }, { icon: '🎓', label: 'Colleges' },
      { icon: '🏥', label: 'Hospitals' }, { icon: '🍽️', label: 'Canteens' }, { icon: '🏛️', label: 'Municipalities' },
      { icon: '🛒', label: 'Retail Malls' }, { icon: '🏭', label: 'Food Units' }, { icon: '🌳', label: 'Resorts' }, { icon: '🏗️', label: 'Townships' },
    ])),
    section('Compliance', 'Karnataka Regulatory Fit', null, prose(
      'BBMP mandates for bulk generators in Bengaluru require on-site processing or empanelled vendor proof. OWC installations with documented daily throughput give resident welfare associations auditable records. Similar frameworks apply in Mysuru City Corporation, Mangaluru City Corporation, and Hubballi-Dharwad Municipal Corporation jurisdictions.',
      'KSPCB categorisation depends on installed capacity and effluent characteristics. Most apartment-scale OWC units operate within norms for enclosed composting without liquid discharge. Our engineers assess your property category during the site visit and recommend any ventilation or leachate handling needed.'
    ), true),
    faqSection(faqs),
    ctaSection('Get an OWC Sizing Report for Your Property', 'Tell us your unit count, kitchen operations, or F&B volume — we will recommend the right OWC capacity and layout.', 'owc.html', 'View OWC Products'),
    relatedSection('Related Guides', [
      { tag: 'Location', href: 'organic-waste-converter-bangalore.html', label: 'OWC Bangalore' },
      { tag: 'Industry', href: 'organic-waste-converter-for-hotels.html', label: 'OWC for Hotels' },
      { tag: 'Industry', href: 'organic-waste-converter-for-apartments.html', label: 'OWC for Apartments' },
      { tag: 'Guide', href: 'blog/organic-waste-converter.html', label: 'OWC Complete Guide' },
      { tag: 'Case Study', href: 'case-studies/apartment-owc-case-study.html', label: 'Apartment OWC Case Study' },
      { tag: 'FAQ', href: 'faq.html', label: 'FAQ Hub' },
    ]),
  ].join('\n');
  return pageShell({
    depth: 0, title: 'Organic Waste Converter Karnataka | OWC Machines - BIOPOWER', description: `BIOPOWER OWC machines across Karnataka — 24–48 hr composting for apartments, hotels & campuses. ${BRAND.years} experience. Free site assessment.`,
    canonical: url, ogImage: `${BRAND.site}/images/owc/owc-hero.webp`, heroBg: HERO.owc,
    badge: 'OWC machines statewide · Karnataka', h1: 'Organic Waste Converter in <span class="accent">Karnataka</span>',
    lead: 'Accelerated composting machines that convert segregated food waste into usable compost within 24–48 hours — for apartments, hotels, colleges, and municipalities across Karnataka.',
    body, schemas: landingSchemas({ name: 'Organic Waste Converter Installation in Karnataka', desc: 'OWC machine supply, installation, and maintenance for apartments, hotels, and institutions across Karnataka.', url, area: 'Karnataka', crumbs: [{ name: 'Home', url: `${BRAND.site}/` }, { name: 'OWC Karnataka', url }], faqs }),
  });
}

function karnatakaStp() {
  const slug = 'stp-plant-karnataka.html';
  const url = `${BRAND.site}/${slug}`;
  const faqs = [
    { q: 'What STP technologies does BIOPOWER deploy in Karnataka?', a: 'We install MBBR, SBR, MBR, and conventional activated-sludge STP plants for apartments, hotels, and industries. Technology selection depends on effluent standards, space, and reuse goals — assessed during site evaluation.' },
    { q: 'Can treated STP water be reused in Karnataka apartments?', a: 'Yes. Treated water meeting KSPCB norms can flush toilets, irrigate landscapes, and supply cooling towers. Many Bengaluru and Mysuru communities reduce freshwater demand by 30–40% through STP reuse.' },
    { q: 'What capacity STP plants do you install across Karnataka?', a: 'From 10 KLD compact packages for small apartments to 500+ KLD modular plants for townships and industrial parks. We design for current load with provision for phased expansion.' },
    { q: 'How long does STP installation take in Karnataka?', a: 'Compact packaged STPs: 3–6 weeks. Custom civil STPs for large townships: 8–16 weeks depending on excavation, piping, and KSPCB consent timelines.' },
    { q: 'Does BIOPOWER handle KSPCB consent for STP projects?', a: 'We provide design drawings, process descriptions, and effluent quality projections to support your consent application. Final approvals remain with the client and KSPCB, but our documentation accelerates the process.' },
  ];
  const body = [
    section('Overview', 'Sewage Treatment Plants Across <span class="gradient-text">Karnataka</span>', 'Packaged and custom STP solutions for apartments, hotels, hospitals, and industries — designed for KSPCB effluent norms and water reuse.', prose(
      'Karnataka\'s water-stressed cities — Bengaluru, Hubballi-Dharwad, Ballari, and growing tier-2 centres — face dual pressure: rising freshwater costs and stricter sewage discharge norms. Apartments above certain occupancy thresholds, hotels, hospitals, and industrial units must treat wastewater before discharge or reuse. BIOPOWER designs, builds, and commissions sewage treatment plants (STP) from 10 KLD to 500+ KLD across the state.',
      'Our STP portfolio includes packaged MBBR and SBR systems for compact sites, modular extended aeration plants for townships, and advanced MBR configurations where reuse quality must meet stringent standards. Every project begins with a load assessment: resident count, hotel occupancy, process water from industries, and peak flow factors.',
      'Treated effluent from a properly operated BIOPOWER STP can replace freshwater for toilet flushing, landscaping irrigation, and HVAC makeup — cutting municipal water bills significantly. In Bengaluru, where borewell depths and tanker costs continue rising, STP reuse delivers measurable ROI within 3–5 years for mid-size communities.',
      'KSPCB sets effluent standards by receiving body — inland surface water, public sewers, or land for irrigation. Our process designs target BOD, COD, TSS, and faecal coliform limits appropriate to your discharge mode. We supply operation manuals, lab testing schedules, and operator training so your plant maintains compliance year-round.',
      'Beyond urban STPs, BIOPOWER serves resort chains along coastal Karnataka, educational campuses in Mysuru and Hassan, and food-processing units near Davangere that generate high-strength organic effluent requiring customised biological treatment.'
    )),
    section('Coverage', 'STP Projects Across Karnataka', null, areaGrid([
      'Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi-Dharwad', 'Belagavi', 'Davangere', 'Tumakuru', 'Hassan', 'Shivamogga', 'Ballari', 'Kalaburagi', 'Udupi', 'Chitradurga', 'Kolar', 'Raichur', 'Bidar',
    ]), true),
    section('Technology', 'STP Technologies We Deploy', null, advGrid([
      { icon: '🫧', h: 'MBBR & SBR', p: 'Compact biological treatment for apartments and hotels with limited civil space — high removal efficiency in small footprint.' },
      { icon: '🔬', h: 'MBR Membrane Systems', p: 'Ultra-filtration for reuse-quality water where landscaping, flushing, or process reuse demands low turbidity and pathogen control.' },
      { icon: '🏗️', h: 'Custom Civil STPs', p: 'Extended aeration and conventional ASP plants for townships, industrial parks, and institutional campuses with phased expansion capacity.' },
    ])),
    section('Process', 'Typical STP Treatment Train', null, stepsRow([
      { h: 'Screening', p: 'Remove plastics, rags, and grit from raw sewage.' },
      { h: 'Equalisation', p: 'Balance flow and load before biological treatment.' },
      { h: 'Biological Treatment', p: 'MBBR/SBR/MBR bacteria reduce BOD and COD.' },
      { h: 'Clarification', p: 'Settle biomass; return sludge to aeration tank.' },
      { h: 'Tertiary & Discharge', p: 'Filter, disinfect, and reuse or discharge per KSPCB norms.' },
    ])),
    section('Sizing', 'STP Capacity Reference', null, specTable(
      ['Application', 'Population / Units', 'Typical STP Size'],
      [
        ['Small apartment', '50 – 100 flats', '10 – 25 KLD'],
        ['Mid apartment / hotel', '200 – 400 flats / 150 rooms', '50 – 150 KLD'],
        ['Large township', '1,000+ flats', '250 – 500 KLD'],
        ['Hospital', '200 – 500 beds', '100 – 300 KLD'],
        ['Food processing unit', 'Process-dependent', 'Custom design'],
      ]
    ), true),
    section('Benefits', 'Why Install an STP in Karnataka', null, benefitsStrip([
      { icon: '💧', h: 'Water Reuse', p: 'Replace up to 40% of freshwater demand with treated STP output for non-potable uses.' },
      { icon: '📋', h: 'KSPCB Compliance', p: 'Meet consent-to-establish and operate conditions for sewage discharge or zero-liquid-discharge goals.' },
      { icon: '💰', h: 'Lower Operating Cost', p: 'Reduce tanker water purchases — a major expense for Bengaluru apartments relying on borewells.' },
      { icon: '🌍', h: 'Environmental Protection', p: 'Prevent untreated sewage from contaminating lakes, rajakaluves, and groundwater across Karnataka.' },
      { icon: '🏠', h: 'Property Value', p: 'STP compliance and reuse infrastructure increasingly influence buyer decisions in gated communities.' },
      { icon: '🔧', h: 'AMC & Remote Monitoring', p: 'BIOPOWER offers annual maintenance, spare parts, and optional IoT monitoring for critical parameters.' },
    ])),
    section('Regulatory', 'KSPCB & Municipal Requirements', null, prose(
      'New apartment projects in Karnataka often require STP installation as a condition of occupancy certificate. Existing communities facing KSPCB notices need retrofit solutions — packaged plants that fit within basement or utility areas. BIOPOWER specialises in retrofit assessments with minimal disruption to residents.',
      'Effluent reuse for flushing and gardening must meet Karnataka Pollution Control Board standards. We coordinate with your consultant on consent applications and provide as-built drawings, P&IDs, and commissioning reports required for regulatory submissions.'
    ), true),
    faqSection(faqs),
    ctaSection('Request an STP Design Consultation', 'Share your occupancy, daily water consumption, and site layout — our engineers will propose technology, capacity, and reuse options.', 'stp.html', 'View STP Solutions'),
    relatedSection('Related Guides', [
      { tag: 'Location', href: 'stp-plant-bangalore.html', label: 'STP Plant Bangalore' },
      { tag: 'Industry', href: 'stp-for-apartments.html', label: 'STP for Apartments' },
      { tag: 'Industry', href: 'stp-for-industries.html', label: 'STP for Industries' },
      { tag: 'Guide', href: 'blog/how-stp-works.html', label: 'How STP Works' },
      { tag: 'Case Study', href: 'case-studies/stp-installation-case-study.html', label: 'STP Case Study' },
      { tag: 'FAQ', href: 'faq.html', label: 'FAQ Hub' },
    ]),
  ].join('\n');
  return pageShell({
    depth: 0, title: 'STP Plant Manufacturer in Karnataka | Sewage Treatment - BIOPOWER', description: `BIOPOWER STP plants across Karnataka — MBBR, SBR, MBR from 10 KLD. Apartments, hotels, industries. KSPCB-compliant. Free consultation.`,
    canonical: url, ogImage: `${BRAND.site}/images/stp/stp-hero.webp`, heroBg: HERO.stp,
    badge: 'KSPCB-compliant STP · Karnataka', h1: 'STP Plant Manufacturer in <span class="accent">Karnataka</span>',
    lead: 'Packaged and custom sewage treatment plants for apartments, hotels, hospitals, and industries — enabling water reuse and KSPCB compliance across Karnataka.',
    body, schemas: landingSchemas({ name: 'Sewage Treatment Plant Installation in Karnataka', desc: 'STP design, supply, and commissioning for apartments, hotels, and industries across Karnataka.', url, area: 'Karnataka', crumbs: [{ name: 'Home', url: `${BRAND.site}/` }, { name: 'STP Karnataka', url }], faqs }),
  });
}

function karnatakaCbg() {
  const slug = 'bio-cng-plant-karnataka.html';
  const url = `${BRAND.site}/${slug}`;
  const faqs = [
    { q: 'What is the difference between biogas and Bio-CNG in Karnataka projects?', a: 'Raw biogas contains 55–65% methane plus CO₂ and moisture — suitable for on-site cooking. Bio-CNG upgrades biogas to 95%+ methane via purification and compression, enabling use as vehicular fuel or pipeline injection under SATAT and related frameworks.' },
    { q: 'What feedstock suits Bio-CNG plants in Karnataka?', a: 'Food processing waste, press mud from sugar mills, cattle dung from dairy clusters, poultry litter, and municipal segregated wet waste. Mixed agricultural residue from Hassan, Belagavi, and Mandya districts offers strong gas yields when pre-processed consistently.' },
    { q: 'What capacity Bio-CNG plants does BIOPOWER build in Karnataka?', a: 'We engineer CBG/Bio-CNG plants from small commercial upgraders linked to existing digesters to multi-ton installations producing hundreds of kg of compressed gas daily for fleet or industrial clients.' },
    { q: 'Are central government incentives available for CBG in Karnataka?', a: 'MNRE, SATAT, and periodic state programmes may offer capital support for CBG projects meeting eligibility criteria. Viability depends on offtake agreements, feedstock security, and current scheme windows — verified during feasibility assessment.' },
    { q: 'How long does a Bio-CNG plant take to commission in Karnataka?', a: 'Feasibility and consent: 2–4 months. Construction and commissioning for a mid-size plant: 6–12 months depending on digester civil work, upgrading skid delivery, and compression infrastructure.' },
  ];
  const body = [
    section('Overview', 'Bio-CNG & CBG Plants Across <span class="gradient-text">Karnataka</span>', 'Upgrade biogas to compressed natural gas for fleet fuel, industrial heat, and grid injection — engineered for Karnataka feedstock and offtake markets.', prose(
      'Karnataka\'s mix of urban food waste, sugarcane press mud, dairy cluster effluent, and poultry operations creates abundant feedstock for compressed biogas (CBG) — also marketed as Bio-CNG. Upgrading raw biogas to 95%+ methane unlocks higher-value applications: fuelling CNG vehicle fleets, supplying industrial boilers, and participating in central government SATAT initiatives aimed at reducing imported natural gas dependency.',
      'BIOPOWER engineers complete Bio-CNG value chains — anaerobic digesters, biogas upgrading (water scrubbing, PSA, or membrane systems), compression, storage, and dispensing — tailored to Karnataka\'s geography and client offtake agreements. We work with food processors near Bengaluru, sugar cooperatives in Mandya and Belagavi, and municipal solid waste projects exploring CBG from segregated wet waste.',
      'Raw biogas from anaerobic digestion typically contains 55–65% methane, 30–40% carbon dioxide, and trace H₂S. Upgrading removes CO₂, moisture, and contaminants to produce fuel-grade compressed biogas meeting IS 16087 specifications. The economics improve significantly when offtake is secured — fleet operators, industrial gas consumers, or oil marketing company tie-ups under SATAT.',
      'Karnataka\'s renewable energy policy environment and industrial base make it a strong CBG deployment state. Proximity to Bengaluru\'s logistics corridors, Mangaluru\'s port-industry belt, and Hubballi\'s agro-processing hubs creates diverse project profiles. BIOPOWER conducts feasibility studies covering feedstock supply contracts, gas yield modelling, capex/opex projections, and regulatory pathway before ground-breaking.',
      'For clients with existing biogas digesters, we supply upgrading and compression skids that bolt onto current infrastructure — avoiding full greenfield investment while capturing higher fuel value from gas already being produced.'
    )),
    section('Coverage', 'CBG Project Geography', 'Feasibility, EPC, and O&M support across Karnataka industrial and agricultural zones.', areaGrid([
      'Bengaluru Industrial Belt', 'Mandya Sugar Belt', 'Hassan Dairy Cluster', 'Belagavi Agro Zone',
      'Davangere Food Processing', 'Tumakuru Poultry Belt', 'Mangaluru Port Industry', 'Hubballi Logistics Hub',
      'Mysuru Industrial Area', 'Shivamogga Agro', 'Ballari Mining Support Towns', 'Kalaburagi Processing',
    ]), true),
    section('Capabilities', 'End-to-End Bio-CNG Engineering', null, advGrid([
      { icon: '⚗️', h: 'Biogas Upgrading', p: 'PSA, water scrubbing, and membrane purification systems sized for your raw gas composition and output target.' },
      { icon: '🔩', h: 'Compression & Storage', p: 'CNG-grade compressors, cascade storage, and dispensing infrastructure for fleet or bulk offtake.' },
      { icon: '📈', h: 'Feasibility & EPC', p: 'Feedstock audits, financial modelling, KSPCB documentation support, and turnkey project delivery.' },
    ])),
    section('Process', 'From Waste to Bio-CNG', null, stepsRow([
      { h: 'Feedstock Prep', p: 'Collect and homogenise organic waste or agro-residue.' },
      { h: 'Anaerobic Digestion', p: 'Produce raw biogas in engineered digesters.' },
      { h: 'Upgrading', p: 'Remove CO₂, H₂S, and moisture to 95%+ methane.' },
      { h: 'Compression', p: 'Compress to 250 bar for storage and dispensing.' },
      { h: 'Offtake', p: 'Dispense to fleet, industry, or grid injection point.' },
    ])),
    section('Feedstock', 'Karnataka Feedstock Profiles', null, specTable(
      ['Feedstock Source', 'Region', 'Typical Yield Potential'],
      [
        ['Food processing effluent', 'Bengaluru, Mysuru', 'High — consistent daily volume'],
        ['Sugarcane press mud', 'Mandya, Belagavi', 'High — seasonal with storage'],
        ['Cattle dung', 'Hassan, Tumakuru', 'Moderate — cooperative supply chains'],
        ['Poultry litter', 'Tumakuru, Kolar', 'Moderate–High — requires pre-treatment'],
        ['Municipal wet waste', 'Urban ULBs', 'High — depends on segregation quality'],
      ]
    ), true),
    section('Benefits', 'Why Invest in Bio-CNG in Karnataka', null, benefitsStrip([
      { icon: '⛽', h: 'Fuel Independence', p: 'Replace imported CNG/LPG with renewable compressed biogas from local waste streams.' },
      { icon: '🚛', h: 'Fleet Decarbonisation', p: 'Logistics and municipal fleets reduce carbon intensity with Bio-CNG dispensing on-site.' },
      { icon: '💼', h: 'Revenue from Waste', p: 'Convert a cost centre (waste disposal) into a fuel production asset with secured offtake.' },
      { icon: '🌾', h: 'Agro Circular Economy', p: 'Sugar mills and dairies monetise by-products that previously incurred disposal costs.' },
      { icon: '📜', h: 'Policy Alignment', p: 'Align with SATAT, MNRE, and Karnataka renewable energy objectives for potential incentives.' },
      { icon: '🔧', h: 'Turnkey O&M', p: 'BIOPOWER provides long-term operation support, gas quality monitoring, and plant optimisation.' },
    ])),
    section('Economics', 'Project Viability Considerations', null, prose(
      'Bio-CNG project economics hinge on three variables: secure feedstock at stable cost, guaranteed offtake price, and capital subsidy availability. Karnataka projects near Bengaluru benefit from dense food-waste supply and fleet operators seeking green fuel credentials. Rural agro-industrial projects leverage press mud and dung with lower feedstock cost but require seasonal storage solutions.',
      'BIOPOWER\'s feasibility reports model 15–20 year cash flows including digestate revenue, tipping fee income from waste acceptance, and O&M costs. We recommend phased investment — digester first, upgrading skid when offtake contracts firm up — for clients managing capital constraints.'
    ), true),
    faqSection(faqs),
    ctaSection('Explore Bio-CNG Feasibility for Your Site', 'Share your feedstock source, daily volume, and offtake interest — we will deliver a preliminary viability assessment.', 'cbg.html', 'View CBG Products'),
    relatedSection('Related Guides', [
      { tag: 'Location', href: 'bio-cng-plant-bangalore.html', label: 'Bio-CNG Bangalore' },
      { tag: 'Industry', href: 'cbg-for-food-processing-industry.html', label: 'CBG for Food Processing' },
      { tag: 'Guide', href: 'blog/commercial-biogas-plant-guide.html', label: 'Commercial Biogas Guide' },
      { tag: 'Guide', href: 'blog/government-subsidies-for-biogas-plants.html', label: 'Subsidy Guide' },
      { tag: 'Resources', href: 'resources.html', label: 'Resource Center' },
      { tag: 'FAQ', href: 'faq.html', label: 'FAQ Hub' },
    ]),
  ].join('\n');
  return pageShell({
    depth: 0, title: 'Bio-CNG Plant Manufacturer in Karnataka | CBG Plants - BIOPOWER', description: `BIOPOWER Bio-CNG & CBG plants in Karnataka — waste to compressed biogas for fleets & industry. Feasibility, EPC, O&M. Contact for assessment.`,
    canonical: url, ogImage: `${BRAND.site}/images/cbg/cbg-hero.webp`, heroBg: HERO.cbg,
    badge: 'Bio-CNG · CBG · Karnataka', h1: 'Bio-CNG Plant Manufacturer in <span class="accent">Karnataka</span>',
    lead: 'Engineer, build, and operate Bio-CNG upgrading and compression plants across Karnataka — converting food waste, press mud, and agro-residue into fuel-grade compressed biogas.',
    body, schemas: landingSchemas({ name: 'Bio-CNG Plant Installation in Karnataka', desc: 'Bio-CNG and CBG plant engineering for food processors, sugar mills, and fleet operators across Karnataka.', url, area: 'Karnataka', crumbs: [{ name: 'Home', url: `${BRAND.site}/` }, { name: 'Bio-CNG Karnataka', url }], faqs }),
  });
}

module.exports = { karnatakaBiogas, karnatakaOwc, karnatakaStp, karnatakaCbg };
