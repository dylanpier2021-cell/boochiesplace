# Build Prompt: Boochie's Slots and Video Poker Website

Copy everything below the line into a fresh Claude chat (Claude Code / Cowork works best for a multi-file build).

---

You are a senior web developer and local-SEO specialist. Build me a complete, production-ready, static website (hand-coded HTML, CSS, and minimal vanilla JS) for a real local business. Output all files into a single project folder with a clean structure. Do not use a framework or build tools. Optimize for fast load, clean semantic HTML, and local SEO ranking.

## The business (use these exact details for NAP consistency)

- Business name: Boochie's Slots and Video Poker (also known as "Boochie's Place")
- Type / niche: Licensed video gaming parlor (Illinois Video Gaming Terminals: slots-style reel games and video poker)
- Address: 804 N. Randolph St., Champaign, IL 61820
- Phone: 217-721-5533
- Hours: Monday through Sunday, 6:00 AM to 2:00 AM
- Geo: latitude 40.1229084, longitude -88.2450194
- Rewards program: Player PAYBACK (earn points by checking in via the J&J Gaming app, redeem for merchandise)
- Amenities: top-tier gaming machines from leading manufacturers, free non-alcoholic drinks, snack counter (chips and drinks), private gaming area, clean and welcoming neighborhood atmosphere
- Domain (use in canonicals, sitemap, and schema): https://boochiesslotsandvideopoker.com

## Compliance and legal (important)

- Illinois VGT play is 21 and over. Put a clear "You must be 21 or older to play" notice site-wide (footer plus age messaging on gaming pages).
- Include responsible-gaming messaging and the helpline in the footer of every page: "Gambling problem? Call 1-800-GAMBLER (1-800-426-2537)."
- Do not make guaranteed-winnings claims, do not target minors, and do not violate Google's gambling/policy guidelines. Keep copy informational and welcoming, not a call to wager.

## Design direction

Make it look cool, attractive, and premium but still approachable and local. Blend a modern casino-night energy (dark base, warm gold accents, a tasteful neon/violet glow, bold confident headings) with a friendly neighborhood feel. It must look custom and unique, not like a template. Fully responsive, mobile-first, accessible (WCAG-minded: skip link, focus states, alt text, color contrast). Use system font stack (no external web fonts) for speed. Use CSS and inline SVG for visuals and a favicon. For photos, use clearly labeled image placeholders sized correctly with descriptive alt text so the owner can drop in their own Google Business Profile photos later. Do not scrape or embed copyrighted third-party images.

## Pages to build (about 15)

Core:
1. Home (index.html)
2. About
3. Slots / Video Gaming Terminals (service page)
4. Video Poker (service page)
5. Rewards (Player PAYBACK)
6. Visit / Contact (hours, address, embedded Google map link, directions)

Locations hub plus 5 city pages targeting the Champaign-Urbana area (unique local copy each, no duplicate/boilerplate content):
7. Locations hub (locations/index.html)
8. Champaign, IL (primary)
9. Urbana, IL
10. Savoy, IL
11. Mahomet, IL
12. Rantoul, IL

Blog hub plus 4 to 5 original articles optimized for local and topical keywords:
13. Blog hub (blog/index.html)
14. "What Is Video Gaming in Illinois? A Beginner's Guide"
15. "Slots vs. Video Poker: Which Should You Play?"
16. "How the Player PAYBACK Rewards Program Works"
17. "A Fun Night Out in Champaign: What to Know Before You Visit"

## SEO and technical requirements

- Every page indexable: meta robots set to "index, follow". Do NOT add a noindex tag to Home, service pages, location pages, blog posts, or any public page.
- Unique, keyword-relevant title tag (around 50 to 60 chars) and meta description (around 140 to 160 chars) per page.
- One H1 per page, logical H2/H3 hierarchy, semantic HTML5 (header, nav, main, section, article, footer, address, breadcrumbs).
- Self-referencing canonical tag on every page using the domain above.
- Open Graph and Twitter card tags on every page.
- JSON-LD structured data: LocalBusiness/EntertainmentBusiness on all pages, BreadcrumbList on inner pages, and Article schema on blog posts.
- Generate sitemap.xml (list every page) and robots.txt (allow all, reference the sitemap). Add a custom 404 page.
- Performance: minimal CSS in one file, defer the small JS, lazy-load below-the-fold images, no render-blocking external resources, no heavy libraries. Target a fast Lighthouse score.
- Accessible, descriptive internal linking between related pages (services link to locations, locations link to blog, etc.).

## Content rules (read carefully)

- Write 100% original copy. Do NOT copy the J&J Gaming website or any competitor. Make it distinctly different in voice and structure.
- Do NOT use em dashes (the long "—" character) anywhere in any text. Use commas, periods, or short hyphens instead.
- Keep NAP (name, address, phone) identical on every page.
- Write naturally for humans first, then weave in keywords like "video gaming in Champaign," "slots in Champaign IL," "video poker near me," and the nearby city names. No keyword stuffing.

## Deliverable

Produce all the HTML files, one shared styles.css, one small main.js (for the mobile nav toggle and lazy-load), favicon.svg, sitemap.xml, robots.txt, and the 404 page, organized in a clean folder structure. After building, give me a short checklist confirming: every page is indexable, canonicals are correct, no em dashes are present, internal links work, and schema is valid.
