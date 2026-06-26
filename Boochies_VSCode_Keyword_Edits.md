# VS Code message — keyword optimization for the LIVE boochiesplace.com site

Paste the prompt below into your VS Code coding agent. It edits the existing site (repo `dylanpier2021-cell/boochiesplace`) to apply the correct local-SEO keywords, then pushes so Vercel redeploys. Tailored to the real page structure as of the live site.

---

**PROMPT START**

You are doing on-page local-SEO keyword optimization for the existing Boochie's Slots and Video Poker website (repo: dylanpier2021-cell/boochiesplace, live at boochiesplace.com). Keep all design, layout, content, and copy intact — only update the SEO elements below. Don't keyword-stuff; everything must read naturally. After editing, commit and push to main so Vercel redeploys.

Business facts (use exactly, consistently): Boochie's Slots and Video Poker (aka Boochie's Place) · 804 N. Randolph St., Champaign, IL 61820 · 217-721-5533 · open daily 6 AM–2 AM · 21+ · licensed Illinois video gaming · Player PAYBACK rewards (J&J Gaming).

GLOBAL (every page):
- Keep one <h1> per page. Make sure each page's PRIMARY keyword appears in the <title>, the <h1>, and within the first 100 words of body copy — phrased naturally.
- Keep titles ≤ ~60 characters and meta descriptions ≤ ~155 characters.
- Weave these geo-modifiers naturally where they fit: Champaign, Urbana, Champaign-Urbana, Savoy, Mahomet, Rantoul, 61820, N. Randolph St.
- Use descriptive, keyword-aware internal link anchor text (e.g., "play slots in Champaign", "video poker in Champaign") instead of "click here".
- Confirm the homepage JSON-LD is type "Casino" or "LocalBusiness" with name, address, geo (lat 40.12291, lng -88.2450137), telephone, openingHours 06:00–02:00 daily, areaServed (Champaign, Urbana, Savoy, Mahomet, Rantoul), priceRange "$", and sameAs (Google Business Profile + Facebook URLs — leave placeholders if unknown).
- Keep image alt text descriptive and location-aware.

PER-PAGE TITLE / META / H1:

Home (/):
- Title: Slots & Video Poker in Champaign, IL | Boochie's Place
- Meta: Play slots & video poker at Boochie's in Champaign, IL. Licensed video gaming, free drinks & Player PAYBACK rewards. Open 6 AM–2 AM daily. 21+.
- H1: Your Champaign neighborhood spot for slots & video poker

Slots (/slots/):
- Title: Slots & Video Gaming in Champaign, IL | Boochie's Place
- Meta: Play slots-style video gaming terminals in Champaign, IL at Boochie's — bright themes, bonus rounds & free drinks. Open daily, 21+.
- H1: Slots & Video Gaming Terminals in Champaign, IL

Video Poker (/video-poker/):
- Title: Video Poker in Champaign, IL | Boochie's Place
- Meta: Play video poker in Champaign, IL at Boochie's. Strategy-friendly play, free drinks & Player PAYBACK rewards. Open 6 AM–2 AM daily. Must be 21+.
- H1: Video Poker in Champaign, IL

About (/about/):
- Title: About Boochie's | Video Gaming Spot in Champaign, IL
- Meta: Boochie's Slots and Video Poker is a friendly, licensed video gaming spot on N. Randolph St. in Champaign, IL. Slots, video poker & free drinks. 21+.
- H1: A friendly neighborhood gaming spot in Champaign-Urbana

Rewards (/rewards/):
- Title: Player PAYBACK Rewards | Boochie's Slots, Champaign IL
- Meta: Earn rewards every time you play slots & video poker at Boochie's in Champaign, IL. Join Player PAYBACK through the J&J Gaming app. 21+.
- H1: Player PAYBACK Rewards at Boochie's

Visit (/visit/):
- Title: Visit Boochie's | Slots Near You in Champaign, IL
- Meta: Find Boochie's Slots & Video Poker at 804 N. Randolph St., Champaign, IL 61820. Hours, directions & parking. Open 6 AM–2 AM daily. 21+.
- H1: Visit Boochie's — slots near you on N. Randolph St.

Locations hub (/locations/):
- Title: Areas We Serve | Boochie's Slots, Champaign-Urbana IL
- Meta: Boochie's Slots and Video Poker serves Champaign, Urbana, Savoy, Mahomet & Rantoul, IL. Find directions to our N. Randolph St. gaming spot. 21+.
- H1: Slots & video poker serving the Champaign-Urbana area

Location pages — for each, Title "Slots & Video Poker near [City], IL | Boochie's", H1 "Slots & Video Poker near [City], IL", and a meta description naming that city + directions to 804 N. Randolph St. Apply to: Champaign (use "in Champaign, IL"), Urbana, Savoy, Mahomet, Rantoul.

Blog hub (/blog/):
- Title: Boochie's Blog | Slots, Video Poker & Gaming Tips, Champaign
- Meta: Tips, guides & local fun from Boochie's Slots and Video Poker in Champaign, IL. Learn about slots, video poker & Illinois video gaming. 21+.
- H1: The Boochie's Blog

Blog posts — for each existing post, make sure its target keyword is in the <title>, <h1>, and first 100 words, add/confirm BlogPosting JSON-LD (headline, datePublished, author "Boochie's Slots and Video Poker"), and add 2–3 internal links to /slots/, /video-poker/, or /visit/ with descriptive anchors. Target keywords:
- video-gaming-in-illinois-guide → "video gaming in Illinois"
- slots-vs-video-poker → "slots vs video poker"
- how-player-payback-works → "Player PAYBACK rewards"
- night-out-in-champaign → "things to do in Champaign at night" (keep 21+ framing)

Finally: update <title>/meta/canonical only where needed, keep the 21+ and 1-800-GAMBLER footer on every page, and report which files you changed.

**PROMPT END**
