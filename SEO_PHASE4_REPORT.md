# BIOPOWER SEO Phase 4 — Audit Fix Implementation Report

**Site:** https://biopower.co.in  
**Date:** 20 June 2026  
**Scope:** 15 audit tasks — design, branding, and UX preserved

---

## Executive Summary

Phase 4 standardised company data and NAP across **51+ HTML files**, updated LocalBusiness geo coordinates, removed external Mixkit/Unsplash dependencies, added testimonial blocks to product/location pages, published **6 new blog articles**, created **OWC alias landing pages**, and expanded the sitemap to **57 URLs**. Validation shows **0 duplicate titles, descriptions, or H1 tags**.

---

## 1. Files Created

| File | Purpose |
|------|---------|
| `blog/biogas-plant-subsidy-karnataka.html` | Karnataka subsidy guide (FAQ schema) |
| `blog/bio-cng-business-opportunities-india.html` | Bio-CNG business opportunities |
| `blog/hotel-waste-management-guide.html` | Hotel waste management |
| `blog/apartment-composting-guide.html` | RWA apartment composting |
| `blog/industrial-stp-design-guide.html` | Industrial STP design (distinct from existing STP guide) |
| `blog/food-waste-to-energy-guide.html` | Food waste to energy |
| `owc-for-hotels.html` | Short-URL OWC hotels landing page |
| `owc-for-apartments.html` | Short-URL OWC apartments landing page |
| `scripts/phase4-brand.js` | Official brand/NAP constants |
| `scripts/phase4-audit-fix.js` | Bulk NAP/schema/media patcher |
| `scripts/phase4-generate-blogs.js` | Blog article generator |
| `scripts/phase4-owc-aliases.js` | OWC alias page creator |
| `scripts/phase4-patch-report.json` | Machine-readable change log |

**Previously created (Phase 3, verified complete):** Karnataka pages, industry pages, case studies, `faq.html`, `resources.html`.

---

## 2. Files Modified (51+)

All root product pages, Bangalore/Karnataka/industry landing pages, case studies, blog footers, `contact.html`, `about.html`, `index.html`, `scripts/phase3-shared.js`, `scripts/phase3-helpers.js`, `css/style.css`, `css/style.min.css`, `js/main.js`, `js/main.min.js`, `sitemap.xml`.

---

## 3. Task 1 — Company Data Consistency

| Metric | Old (found) | New (official) |
|--------|-------------|----------------|
| Experience | Mixed labels | **17+ Years Experience** |
| Installations | `12,000+`, "Plants Installed" | **12,898+ Installations** |
| Rating | Inconsistent labels | **4.9/5 Customer Rating** (5000+ reviews) |
| Founded | 2006 | **2006** (unchanged) |
| Capacity | Various | **1 kg/day to 100 metric tons/day** |

---

## 4. Task 2 — NAP Consistency

| Field | Standardised Value |
|-------|-------------------|
| Company | **BIOPOWER (BPG Renewables Pvt Ltd)** |
| Address | **2nd Floor, 26, 5th Cross, Off Hennur Road, Kacharakanahalli, Bengaluru, Karnataka 560084** |
| Phone | **+91 73381 29464** (`tel:+917338129464`) |
| Email | **info@biopower.co.in** |

Applied to: footers (all pages), schema (Organization, LocalBusiness, ContactPage), contact page body copy.

**Old footer removed:** `BPG renewables pvt ltd / No 26, 5th Cross, Hennur Main Road...`

---

## 5. Task 3 — LocalBusiness Schema Coordinates

| Field | Old | New |
|-------|-----|-----|
| latitude | 13.0264 (approximate) | **13.020937** |
| longitude | 77.635 | **77.634512** |

Updated site-wide in JSON-LD on all pages with geo blocks. Coordinates align with Kacharakanahalli / Hennur Road locality (Google Business Profile area).

Schema telephone normalised to E.164: `+917338129464`.

---

## 6. Task 4 — Media Cleanup

| Action | Detail |
|--------|--------|
| MP4 removed (prior commit) | `1.mp4`–`4.mp4` — already deleted |
| Phase 4 removal | **None** — no active assets deleted |
| Orphan scan | 81 PNG/WebP duplicates flagged (e.g. `.png` pairs of active `.webp` references) — **kept** as fallbacks |

**Recommendation:** Safe to remove unused `.png` duplicates where matching `.webp` is referenced; do not remove client logos or plant gallery images without manual review.

---

## 7. Task 5 — External Dependencies

| Source | Action |
|--------|--------|
| Unsplash hero backgrounds (22 pages) | Replaced with local WebP (`institutional-biogas-plant.webp`, `Fully Autoimatic.webp`, `wonderbin_roof_top.webp`, etc.) |
| Mixkit hero video (`index.html`) | Removed — replaced with self-hosted WebP poster + CSS ken-burns animation |
| `stp.html` ionexchange images | **Already local** — no external hotlinks found |

---

## 8. Task 6 — Hero Video Optimisation

Mixkit CDN returned 403 on download. Implemented **Option A alternative:**

- Self-hosted **WebP poster** (`images/plants/institutional-biogas-plant.webp`)
- Subtle CSS `heroKenBurns` animation (no external video request)
- Eliminates ~5–15 MB third-party video on first paint
- Mobile-friendly, SEO-safe, design preserved

To restore video later: add `videos/hero-industrial.mp4` and revert to lazy-loaded `<video>` (JS hook already in `main.js`).

---

## 9. Tasks 7–9 — Pages (Verified)

- Karnataka: 4 pages ✓
- Industry: 8 pages (+ 2 OWC aliases) ✓
- Case studies: 4 pages in `/case-studies/` ✓

---

## 10. Task 10 — Testimonial System

Reusable testimonial block injected on:

- Product pages: `biogas_plant.html`, `owc.html`, `stp.html`, `cbg.html`, `inst_comun.html`
- Karnataka/industry: 11 landing pages + `biogas-plant-for-colleges.html`
- Homepage: existing full slider retained
- AggregateRating schema: present on product, location, and contact pages

---

## 11. Task 11 — GA4 Conversion Tracking

Production events in `js/main.js` / `main.min.js`:

```javascript
gtag('event', 'request_quote', { event_category: 'conversion', ... });
gtag('event', 'contact_form_submit', { event_category: 'conversion', ... });
gtag('event', 'phone_call', { event_category: 'conversion', ... });
gtag('event', 'email_click', { event_category: 'conversion', ... });
gtag('event', 'whatsapp_click', { event_category: 'conversion', ... });
```

Measurement ID: `G-KT48H7F23D`

---

## 12. Task 12 — Schema Validation

| Schema Type | Status |
|-------------|--------|
| Organization | Present on all major pages |
| LocalBusiness | Updated geo + NAP on location/contact pages |
| FAQPage | Karnataka, industry, case studies, new blogs |
| Product/Service | Product and landing pages |
| BreadcrumbList | Blogs, landing pages |
| AggregateRating | 4.9 / 5000 reviewCount |

Duplicate `data-track` attributes fixed (18 instances).

---

## 13. Task 13 — Sitemap Expansion

**57 URLs** in `sitemap.xml` (+8 from Phase 4):

- 6 new blog articles
- `owc-for-hotels.html`
- `owc-for-apartments.html`

XML structure validated — well-formed `urlset`.

---

## 14. Task 14 — Blog Articles

| Article | Target Keywords | Words (approx.) |
|---------|-----------------|-----------------|
| Biogas Plant Subsidy Karnataka | biogas subsidy Karnataka | ~1,800 |
| Bio CNG Business Opportunities India | Bio CNG business India | ~1,700 |
| Hotel Waste Management Guide | hotel waste management | ~1,600 |
| Apartment Composting Guide | apartment composting OWC | ~1,600 |
| Industrial STP Design Guide | industrial STP design | ~1,700 |
| Food Waste to Energy Guide | food waste to energy | ~1,600 |

Each includes: FAQ schema, internal links, tables, E-E-A-T author attribution.

---

## 15. Task 15 — Final Validation

| Check | Result |
|-------|--------|
| Duplicate titles | **0** |
| Duplicate meta descriptions | **0** |
| Duplicate H1 tags | **0** |
| Old 12,000 stat | **0** |
| Canonical issues | **0** |
| External Unsplash/Mixkit | **0** |
| NAP inconsistencies in footer | **0** |
| Broken links (validator) | 333 false positives — absolute paths (`/about.html`) from `/blog/` resolve correctly on production |

**Lighthouse SEO (estimated):** 96–98 (post Phase 4 — improved LCP from hero video removal)  
**Before Phase 4 (estimated):** 92–95

---

## Internal Linking Map (New Content)

```
blog/biogas-plant-subsidy-karnataka.html
  → biogas-plant-karnataka.html, biogas_plant.html, cbg.html, biogas-plant-for-hotels.html, case-studies/hotel-biogas-case-study.html

blog/bio-cng-business-opportunities-india.html
  → cbg.html, bio-cng-plant-karnataka.html, cbg-for-food-processing-industry.html

blog/hotel-waste-management-guide.html
  → biogas-plant-for-hotels.html, organic-waste-converter-for-hotels.html, owc-for-hotels.html, case-studies/hotel-biogas-case-study.html

blog/apartment-composting-guide.html
  → organic-waste-converter-for-apartments.html, owc-for-apartments.html, biogas-plant-for-apartments.html, stp-for-apartments.html, case-studies/apartment-owc-case-study.html

blog/industrial-stp-design-guide.html
  → stp-for-industries.html, stp.html, case-studies/stp-installation-case-study.html, blog/industrial-stp-guide.html

blog/food-waste-to-energy-guide.html
  → biogas_plant.html, cbg.html, biogas-plant-for-hotels.html, biogas-plant-for-colleges.html, cbg-for-food-processing-industry.html, blog/biogas-plant-subsidy-karnataka.html
```

---

## Estimated Ranking Improvement

| Keyword Cluster | Before | After (3–6 months) |
|-----------------|--------|---------------------|
| Biogas Plant Manufacturer India | Page 2–3 | Page 1 potential — authority content + schema |
| Organic Waste Converter India | Page 2–4 | Top 10 — OWC aliases + apartment/hotel guides |
| STP Plant Manufacturer India | Page 3–5 | Top 15 — industrial design guide + case study |
| Bio-CNG Plant Manufacturer India | Page 3–6 | Top 15 — business opportunities + Karnataka pages |
| Local (Karnataka/Bangalore) | Limited | Strong — 8 location + subsidy content |

**Primary gains from:** NAP trust signals, expanded topical authority (57 indexed URLs), FAQ rich results eligibility, improved Core Web Vitals (hero optimisation), conversion tracking for CRO iteration.

---

## Next Steps (Optional)

1. Upload a compressed hero MP4 to `videos/hero-industrial.mp4` if video background is desired
2. Submit updated sitemap in Google Search Console
3. Verify GA4 events in DebugView
4. Run Rich Results Test on 3–5 representative URLs
5. Remove PNG duplicates only after confirming WebP coverage in production CDN

---

*Generated by Phase 4 audit fix pipeline — `node scripts/phase4-audit-fix.js`*
