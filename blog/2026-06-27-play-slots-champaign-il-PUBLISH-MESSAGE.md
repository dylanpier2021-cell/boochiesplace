# Publish message — paste into your VS Code coding agent

Please publish a new blog post on the Boochie's site.

**Source content:** `blog/2026-06-27-play-slots-champaign-il.md` (Markdown with front-matter). Convert the Markdown body to the site's blog page format.

**Page setup:**
- URL slug: `/blog/play-slots-champaign-il`
- H1: `Where to Play Slots in Champaign, IL: A Local's Guide`
- Meta title (≤60 chars): `Where to Play Slots in Champaign, IL`
- Meta description (≤155 chars): `A local's guide to playing slots in Champaign, IL. What makes a gaming café great — and why Boochie's is a clean, friendly 21+ spot open late.`
- Keep the H2/H3 structure from the Markdown.

**Internal links (relative URLs, descriptive anchor text already in the copy):**
- "games page" → `/games`
- "home page" → `/`
- "visit page" → `/visit`

**Add BlogPosting schema (JSON-LD in the page head):**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Where to Play Slots in Champaign, IL: A Local's Guide",
  "datePublished": "2026-06-27",
  "author": { "@type": "Organization", "name": "Boochie's Slots and Video Poker" },
  "publisher": {
    "@type": "Organization",
    "name": "Boochie's Slots and Video Poker",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "804 N Randolph St",
      "addressLocality": "Champaign",
      "addressRegion": "IL",
      "postalCode": "61820"
    },
    "telephone": "(217) 721-5533"
  }
}
```

**Optional FAQ schema** (only if you want a FAQ block on the page) — sample Q/A you can pull from the copy:
- "What's the difference between a gaming café and a casino in Illinois?"
- "Do I have to be 21 to play slots in Champaign?"

**Footer (must appear on the page):**
> Must be 21+. Please play responsibly. If you or someone you know has a gambling problem, call 1-800-GAMBLER (1-800-426-2537) or text "ILGamb" to 833234.

**Image:** add one hero/inline image with keyword alt text, e.g. `alt="Playing slots in Champaign, IL at Boochie's gaming café"`.

After publishing, add the post to the blog index/listing and confirm the slug renders.
