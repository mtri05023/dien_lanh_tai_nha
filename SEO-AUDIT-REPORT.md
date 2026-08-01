# SEO Audit Report

Date: 2026-08-01
Website: https://suadienlanh.com.vn/

## Scope

Audited local static HTML website files, including homepage, 3 service landing pages, blog index, 20 blog articles, 404 page, and review page.

## Technical SEO Summary

- HTML pages checked: 27
- Sitemap URLs: 25
- Internal links checked: 1092
- Broken internal links: 0
- Missing image alt attributes: 0
- Duplicate titles: 0
- Duplicate meta descriptions: 0
- Pages missing meta description: 0
- Pages missing JSON-LD: 0
- JSON-LD parse errors: 0

## Local SEO Upgrades Added

- Organization JSON-LD with business name, logo, website, phone, email, opening hours, contact point, and area served.
- WebSite JSON-LD with SearchAction and OfferCatalog for the three real services.
- WebSite JSON-LD with SearchAction pointing to the blog search URL.
- Manifest, browserconfig, humans.txt, security.txt, .well-known/security.txt, llms.txt.
- Robots.txt allows public pages, blocks local/private development folders, and references sitemap.
- Sitemap updated with priority and changefreq for homepage, services, blog index, and articles.
- 404 page improved with search, popular services, home link, blog link, and phone CTA.
- Resource hints added for Google Tag Manager and Google Analytics.
- Favicon SVG and Safari pinned tab assets added.

## Missing Images

No broken local image references were found.

Current image note: several SEO pages and blog articles reuse existing `hero-service.webp`. For stronger rich results and visual quality, add unique service/category images later.

## Broken Links

No broken internal links were found in the audited HTML files.

## Missing Alt

No missing `alt` attributes were found on local `<img>` elements.

## Duplicate Titles

No duplicate `<title>` values were found.

## Duplicate Descriptions

No duplicate meta descriptions were found.

## Missing Schema

No audited HTML page is missing JSON-LD.

## Accessibility Notes

- Site language is set with `lang="vi"`.
- Navigation drawer uses `aria-expanded`, `aria-hidden`, and close controls.
- FAQ accordions use `aria-expanded`, `aria-controls`, and region labels.
- Images have alt text.
- Focus states are present for FAQ controls and existing buttons/links inherit visible browser focus behavior.

## SEO Score

Estimated before upgrade: 86/100

Estimated after upgrade: 96/100

The score is an engineering estimate based on local technical SEO coverage, schema completeness, crawlability, metadata, internal links, accessibility basics, and static performance hygiene.

## Remaining Recommendations

- Do not add address or geo data unless there is a real public business location.
- Add official social/business profile links only after they exist.
- Add real 192x192 and 512x512 PWA icons.
- Add unique hero/OG images per service and high-value blog article.
- Add real business profile links once Google Business Profile and social profiles are confirmed.
- Consider adding a lightweight on-site search index if the blog grows beyond the current 20 articles.
