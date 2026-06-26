# Message to paste into VS Code (Copilot / coding agent)

Copy everything in the block below and send it to your coding agent in VS Code. It assumes a standard HTML/static or component-based site; tell the agent your stack if it asks. If a page doesn't exist yet, have it create the page.

---

**PROMPT START**

You are doing local-SEO on-page optimization for **Boochie's Slots and Video Poker**, a 21+ video gaming café in Champaign, IL. Apply the changes below across the site. Keep existing design; only change/add the SEO elements described. Where a page doesn't exist, create it and add it to the nav. Use clean, semantic HTML. Don't keyword-stuff — copy must read naturally.

**Business facts (use exactly, identical everywhere):**
- Name: Boochie's Slots and Video Poker
- Address: 804 N Randolph St, Champaign, IL 61820
- Phone: (217) 721-5533
- Hours: open daily, late (closes 2 AM) — confirm exact hours with me if a field needs them
- Audience: 21+ only

### 1. Global (every page)
- Ensure one `<h1>` per page, unique `<title>` and `<meta name="description">` per page (values below).
- Add `<meta name="viewport" content="width=device-width, initial-scale=1">` and `<html lang="en">` if missing.
- Add this footer to every page (and a visible "Must be 21+" badge in the header or hero):
  ```html
  <p class="responsible-gaming">
    Must be 21+ to play. Please play responsibly. If you or someone you know has a
    gambling problem, call <a href="tel:1-800-426-2537">1-800-GAMBLER</a>
    (1-800-426-2537) or text "ILGamb" to 833234.
    <br>Boochie's Slots and Video Poker · 804 N Randolph St, Champaign, IL 61820 ·
    <a href="tel:+12177215533">(217) 721-5533</a> · License No. VL-____  <!-- add the real video gaming license # -->
  </p>
  ```
- Add this **LocalBusiness/Casino JSON-LD** to the `<head>` of the homepage (adjust geo, hours, image, and socials):
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Casino",
    "name": "Boochie's Slots and Video Poker",
    "description": "Friendly, clean 21+ video gaming café offering slots and video poker in Champaign, IL.",
    "image": "https://res.cloudinary.com/djp1yfsj5/image/upload/v1782438991/boochies_mega_jackpot_slot.jpg",
    "@id": "https://YOURDOMAIN.com/",
    "url": "https://YOURDOMAIN.com/",
    "telephone": "+1-217-721-5533",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "804 N Randolph St",
      "addressLocality": "Champaign",
      "addressRegion": "IL",
      "postalCode": "61820",
      "addressCountry": "US"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 40.12291, "longitude": -88.2450137 },
    "areaServed": ["Champaign","Urbana","Savoy","Mahomet","Rantoul","Champaign-Urbana"],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "10:00", "closes": "02:00"
    }],
    "priceRange": "$",
    "sameAs": [
      "https://www.google.com/maps/place/?q=place_id:ChIJb0mtv1LXDIgR-_Mq6WrScVc",
      "https://www.facebook.com/REPLACE"
    ]
  }
  </script>
  ```

### 2. Homepage
- **Title:** `Boochie's Slots & Video Poker | Champaign, IL`
- **Meta description:** `Play slots & video poker at Boochie's in Champaign, IL — a clean, friendly 21+ gaming café on N Randolph St. Complimentary drinks & snacks. Open late.`
- **H1:** `Slots & Video Poker in Champaign, IL`
- **Hero subhead/body** should naturally include: *slots, video poker, video gaming, Champaign-Urbana, 21+, clean & friendly, open late, near you.* Example opening line: "Boochie's is a clean, friendly spot to play **slots and video poker in Champaign, IL** — open late, 21 and up, with complimentary snacks and drinks."
- **H2 sections:** "Why Play at Boochie's" · "Our Games — Slots & Video Poker" · "Promotions & Free Slot Play" · "Visit Us — Slots Near You" (with embedded Google Map + NAP) · "What Players Say" (reviews) · "FAQ".
- Add the 4 photos with keyword-rich alt text:
  ```html
  <img src="https://res.cloudinary.com/djp1yfsj5/image/upload/w_1200,q_auto,f_auto/v1782438991/boochies_mega_jackpot_slot.jpg" alt="Mega jackpot slot machine at Boochie's Slots and Video Poker in Champaign, IL" loading="lazy">
  <img src="https://res.cloudinary.com/djp1yfsj5/image/upload/w_1200,q_auto,f_auto/v1782438992/boochies_slot_machine_2.jpg" alt="Video slot machine game at Boochie's gaming café in Champaign, Illinois" loading="lazy">
  <img src="https://res.cloudinary.com/djp1yfsj5/image/upload/w_1200,q_auto,f_auto/v1782438994/boochies_by_owner_counter.jpg" alt="Inside Boochie's Slots and Video Poker — front counter and gaming lounge in Champaign, IL" loading="lazy">
  <img src="https://res.cloudinary.com/djp1yfsj5/image/upload/w_1200,q_auto,f_auto/v1782438995/boochies_interior_3.jpg" alt="Slot machine close-up at Boochie's video gaming café near Urbana, IL" loading="lazy">
  ```
- Internal links to: Games, Promotions, Visit.

### 3. Games / Video Gaming page  (create if missing: `/games`)
- **Title:** `Slots & Video Gaming in Champaign, IL | Boochie's`
- **Meta:** `Slots, video poker & video gaming terminals (VGTs) in Champaign, IL. See what's on the floor at Boochie's — 21+, open late, near you.`
- **H1:** `Slots & Video Gaming Terminals in Champaign`
- H2s: "Slots" · "Video Poker" · "How Our Video Gaming Terminals Work" (link to the matching blog post) · "Complimentary Snacks & Drinks".
- Use secondary keywords: *video gaming terminals, VGT, slot machines, video poker games, 21+.*

### 4. About page  (`/about`)
- **Title:** `About Boochie's | Friendly 21+ Gaming Café in Champaign`
- **Meta:** `Boochie's is a clean, friendly, locally run 21+ gaming café in Champaign-Urbana. Slots, video poker, free snacks & drinks. Get to know us.`
- **H1:** `A Clean, Friendly Gaming Café in Champaign-Urbana`
- Weave: *locally owned, clean and friendly, 21+, gaming café/parlor, Champaign-Urbana, welcoming.*

### 5. Promotions page  (`/promotions`)
- **Title:** `Slot Play Promotions in Champaign, IL | Boochie's`
- **Meta:** `Free slot play & loyalty perks at Boochie's in Champaign, IL. See current slot promotions — 21+, open late on N Randolph St.`
- **H1:** `Promotions & Free Slot Play`
- Keywords: *free slot play Champaign, slot promotions, loyalty.*

### 6. Visit / Contact page  (`/visit`)
- **Title:** `Visit Boochie's | Slots Near You in Champaign, IL`
- **Meta:** `Find Boochie's Slots & Video Poker at 804 N Randolph St, Champaign, IL 61820. Hours, directions & parking. Slots near you — 21+, open late.`
- **H1:** `Find Us — Slots Near You on N Randolph St`
- Include: embedded Google Map, full NAP, hours, directions, "near the University of Illinois / North Champaign," neighborhoods served (Champaign, Urbana, Savoy, Mahomet, Rantoul). Use "slots near me / near you" naturally.

### 7. Blog hub  (`/blog`)
- **Title:** `Boochie's Blog | Slots, Video Poker & Gaming Tips`
- **Meta:** `Tips, guides & local fun from Boochie's Slots and Video Poker in Champaign, IL. Slots, video poker, promotions & more. 21+.`
- **H1:** `The Boochie's Blog`
- Set up so each post has its own page, BlogPosting schema, author, date, and 2–3 internal links to money pages.

### 8. FAQ page  (`/faq`)  — great for long-tail + "People Also Ask"
- **Title:** `FAQ | Boochie's Slots & Video Poker, Champaign`
- Add `FAQPage` JSON-LD. Seed these Q&As: "Do I have to be 21?" · "What games do you have?" · "Are snacks and drinks free?" · "What are your hours?" · "Do you have free slot play / promotions?" · "Where are you located / is there parking?" · "How do video gaming terminals work?"

### 9. Technical hygiene
- Generate/update `sitemap.xml` and `robots.txt`.
- Ensure every image has descriptive alt text and `loading="lazy"` below the fold.
- Mobile-responsive, fast (compress images — Cloudinary `f_auto,q_auto` already helps).
- One canonical URL per page; fix any duplicate/trailing-slash issues.
- Descriptive, keyword-friendly URL slugs (e.g., `/games`, `/promotions`, not `/page2`).

After making changes, give me a short summary of which files you edited and any info you still need from me (exact hours, license number, Facebook URL, domain).

**PROMPT END**
