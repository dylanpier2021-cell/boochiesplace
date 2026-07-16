# Paste this to your VS Code coding agent

Publish a new blog post on the Boochie's site.

**Source content:** `blog/2026-07-11-how-video-gaming-terminals-work-illinois.md` (in the repo root). Use the Markdown body as the page copy — strip the YAML front-matter and convert it to real HTML.

**Create:** `/blog/how-video-gaming-terminals-work-illinois/index.html`

Match the existing blog post templates in `/blog/` exactly — same header, nav, footer, CSS classes, and layout as `/blog/slots-vs-video-poker/index.html`. Do not invent new styles.

**Head / SEO:**
- `<title>`: How Video Gaming Terminals Work in Illinois
- `<meta name="description">`: Curious how video gaming terminals work in Illinois? A plain-English guide to VGTs, payouts, and the rules — plus where to play in Champaign.
- Canonical: `https://boochiesslots.com/blog/how-video-gaming-terminals-work-illinois/` (use the site's real domain)
- Open Graph + Twitter card tags matching title/description, reusing the site's default OG image.

**Body:**
- Single `<h1>`: **How Video Gaming Terminals Work in Illinois (Plain-English Guide)**
- Keep the H2/H3 structure from the Markdown.
- Internal links with the anchor text as written: "slots and video poker games" → `/games`, "visit Boochie's in Champaign" → `/visit`, "home page" → `/`.
- External link: Illinois Gaming Board → `https://www.igb.illinois.gov/` with `target="_blank" rel="noopener"`.
- Add one hero/inline image using an existing asset from `/assets/`, alt text: `Video gaming terminals in Illinois at Boochie's Slots and Video Poker in Champaign, IL`.
- Footer must include: **Visit Boochie's — Slots & Video Poker in Champaign, IL**, 804 N Randolph St, Champaign, IL 61820, (217) 721-5533, and the 21+ responsible-gaming line: *Must be 21+. Please play responsibly. If you or someone you know has a gambling problem, call 1-800-GAMBLER (1-800-426-2537) or text "ILGamb" to 833234.*

**Schema (JSON-LD in `<head>`):**
- `BlogPosting` — headline "How Video Gaming Terminals Work in Illinois (Plain-English Guide)", datePublished "2026-07-11", dateModified "2026-07-11", author + publisher Organization "Boochie's Slots and Video Poker", mainEntityOfPage = the canonical URL, image = the hero image URL.
- `FAQPage` with these Q&As pulled from the post:
  - "What is a video gaming terminal?" — A state-licensed slot or video poker machine operated in a licensed Illinois business such as a gaming café, bar, or restaurant.
  - "Who regulates video gaming terminals in Illinois?" — The Illinois Gaming Board (IGB) licenses and monitors terminals, terminal operators, and licensed establishments.
  - "How old do you have to be to play a VGT in Illinois?" — You must be 21 or older.
  - "Do video gaming terminals get 'hot' or 'due'?" — No. Outcomes come from a random number generator and every play is independent.

**Also update:**
1. `/blog/index.html` — add a card for this post at the top of the list, matching existing card markup (title, date July 11, 2026, and the meta description as the excerpt).
2. `sitemap.xml` — add `<url>` for `/blog/how-video-gaming-terminals-work-illinois/` with `<lastmod>2026-07-11</lastmod>`.

Then run the site locally and confirm the page renders, all links resolve (no 404s), and the JSON-LD validates.
