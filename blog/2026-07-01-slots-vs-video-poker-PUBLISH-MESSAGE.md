# Paste this to your VS Code coding agent

Please publish a new blog post to the Boochie's site.

**Source content:** `blog/2026-07-01-slots-vs-video-poker.md` (Markdown with front-matter). Convert the Markdown body to the site's blog page template.

**Create the page:**
- Path/route: `/blog/slots-vs-video-poker` (there's an existing `blog/slots-vs-video-poker/` folder — put the page there as `index.html`).
- Add it to the blog index (`blog/index.html`) and to `sitemap.xml`.

**SEO / meta:**
- `<title>`: `Slots vs. Video Poker: Which Should You Play?`
- Meta description: `Slots vs. video poker — what's the difference and which is right for you? A simple, no-jargon breakdown, then come try both at Boochie's in Champaign.`
- Canonical URL for the `/blog/slots-vs-video-poker` route.
- H1 must match the title exactly.

**Schema:** Add JSON-LD `BlogPosting`:
- headline: `Slots vs. Video Poker: Which Should You Play?`
- datePublished: `2026-07-01`
- author: `Boochie's Slots and Video Poker`
- publisher: Boochie's Slots and Video Poker
- mainEntityOfPage: the canonical URL

Optional but nice: add an `FAQPage` schema with 2–3 Q&As pulled from the post, e.g. "What's the difference between slots and video poker?", "Which is better for beginners?", "Does video poker involve skill?".

**Internal links** (keep the descriptive anchor text from the Markdown):
- "games page" → `/games`
- "home page" → `/`
- "visit page" → `/visit`

**Image:** Add one relevant image with keyword-rich alt text, e.g. `alt="Slots and video poker machines at Boochie's gaming café in Champaign, IL"`.

**Footer (required, must appear on the page):**
> Must be 21+. Please play responsibly. If you or someone you know has a gambling problem, call 1-800-GAMBLER (1-800-426-2537) or text "ILGamb" to 833234.

Match the styling/layout of the existing post at `blog/2026-06-27-play-slots-champaign-il` so the new page is consistent. Commit with a message like `Add blog post: Slots vs. Video Poker`.
