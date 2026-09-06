# 3.3 Business Setup

Stage: 3) Store
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=14591s
Transcript: [../../transcripts/3-3-business-setup.md](../../transcripts/3-3-business-setup.md)

## The job of this lesson
A merchant should walk away with a store that can actually take and fulfill orders: an "all designs" collection, bulk-edited pricing/descriptions/inventory via an app, a branded domain connected, Shopify Payments configured, correct shipping settings (the single biggest conversion killer if wrong), core store policies published, and an informed personal decision on whether to form an LLC before launch.

## Playbook
1. Create an "All Designs" collection using an automated condition (Product type = t-shirt), rename it to something niche-specific (e.g., "Golf T-Shirt Sale"), optionally add an emoji, and verify the title fits on one line in the theme. `[04:03:16]`
2. Install the "Bulk Product Edit" app (referred to by the instructor as Hextom Bulk Product Edit) — described as the single most important app for this workflow. `[04:04:19]`
3. Bulk-edit pricing: filter by product title contains "t-shirt," then set price per size variant (small, medium, etc.) in one pass across every product — this is faster and safer than setting prices individually in Printify. Save each bulk-edit job so you can hit "rerun" after every new batch upload instead of reconfiguring. `[04:05:53]`
4. Bulk-edit "Compare at price": filter all t-shirt variants, increase by 30% over the actual price, to show a crossed-out "sale" price/badge on every product page. `[04:06:52]`
5. Bulk-edit descriptions: filter by title contains "t-shirt," draft one description in Claude (aligned to your brand voice/niche), paste as the bulk value. Connect the description field to a dynamic source in the theme's accordion block so descriptions differ by product/product type automatically. `[04:08:28]`
6. Bulk-edit inventory: set "continue selling when out of stock" and set available inventory to a large quantity — this fixes the common Shopify/Printify "out of stock" display bug seen after publishing. `[04:11:30]`
7. Buy a branded domain (GoDaddy used in the demo; Shopify and Google Domains are alternatives) — check `.com` first, fall back to `.co`/`.store`/etc. if `.com` is taken or overpriced; avoid `.edu`. Buy 1-year registration (renewable) plus domain privacy protection to hide personal WHOIS info. Decline upsells. `[04:14:21]`
8. Connect the domain in Shopify: Settings → Domains → Connect existing domain → enter domain → follow the DNS instructions Shopify provides (add/update A record and CNAME/www record in your registrar's DNS settings) → verify. Allow up to ~5 minutes for propagation. If a record conflict appears, update the existing record's value rather than deleting blindly, then re-verify. `[04:18:04]`
9. Decide on an LLC: this is a personal/legal decision the instructor is not licensed to make for you — she personally got an LLC before her first sale, partly for liability protection (an LLC can shield personal assets from a lawsuit — e.g., copyright dispute) and partly as a psychological commitment device. Cost and requirements vary by state/jurisdiction; consult a professional or your own research (ChatGPT suggested only as a starting-point sounding board, not legal advice). `[04:27:36]`
10. If forming an LLC, use a formation service (the instructor uses Busy.com, formerly IncFile) — pick your state, follow the guided flow, decline upsells; a registered agent may be required depending on state; turnaround is typically 1-2 weeks. `[04:30:21]`
11. Set up Shopify Payments: Settings → Payments → Complete account setup. If operating as an LLC, you'll need an EIN; if personal, your SSN and bank account. `[04:32:10]`
12. Confirm you're on the Shopify Basic plan until you're ready to hire staff (Grow/Advanced plans add staff accounts). `[04:33:27]`
13. Fix shipping profiles: ensure zero products remain assigned to the "Printify" shipping profile (that profile pushes Printify's own — expensive — shipping cost onto the customer); confirm all products sit under your "General" shipping profile instead. `[04:36:36]`
14. In the General shipping profile, set free-shipping threshold to $74.99 (so an order must exceed $75 to qualify), remove any weight-based rate tiers, and add one flat rate (~$4.75-5, e.g., $4.89) for Standard shipping under the threshold. Save. `[04:37:30]`
15. Start with US-only shipping; add international later once the US funnel is validated, to reduce testing complexity. `[04:35:15]`
16. Publish store policies (Settings → Policies): Refund policy, Privacy policy (Shopify's template plus your business info), Terms of Service (Shopify template + business info), Shipping policy — draft each via Claude using the course's provided policy templates/PDF, then paste and publish. `[04:39:28]`
17. Fill in Contact/About Us pages and make sure they're added to the site's main menu (Online Store → Navigation) so customers can reach them; add policy links (Privacy, Refund, Shipping, Terms) to the footer menu. `[04:41:46]`
18. Verify General settings: store name, store email/contact, correct time zone, currency = USD. `[04:47:15]`
19. Do a final QA pass on the live preview: pages load, Add to Cart works, mobile looks correct, no leftover placeholder text or generic (non-niche) branding anywhere. `[04:22:42]`

## Numbers and thresholds
- Free shipping threshold: orders over $74.99 qualify for free shipping `[04:37:30]`
- Flat shipping rate below threshold: ~$4.75-$5, e.g. $4.89 `[04:38:11]`
- Compare-at-price markup for sale badge: +30% over actual price `[04:06:52]`
- Shopify Basic plan cost: $29/month `[04:33:55]`
- Shopify processing fee: 2.9% + $0.30 per transaction (industry standard, compared favorably to Etsy's $0.20 listing fee + ~6% transaction fee + payment processing + off-site ad fees over $10k) `[04:33:04]`
- Return/refund rate on the instructor's brands: 1% `[04:46:16]` (claimed)
- LLC formation turnaround via Busy.com: typically 1-2 weeks `[04:30:48]`
- Domain registration example cost note: some premium domains quoted as high as $10,000 (instructor skipped it) `[04:14:21]`
- Cited real cost of a shipping-setting mistake: $3,000 lost from one wrong shipping configuration `[04:26:14]` (claimed)

## Tools and services named
- Bulk Product Edit (Hextom) — Shopify app for bulk price/compare-at-price/description/inventory edits; called the single most important app for this workflow
- GoDaddy — domain registration and DNS management (Shopify's own domain purchase and Google Domains mentioned as alternatives)
- Busy.com (formerly IncFile) — LLC formation service, state-by-state guided setup
- Claude — drafting refund/privacy/shipping policy text and page copy from provided templates
- Shopify Payments — native payment processing, requires EIN (LLC) or SSN (personal) plus bank account

## Watch-outs
- LLC formation, registered-agent requirements, EIN/tax setup, and liability protection are jurisdiction-specific (varies by US state, and the instructor has no experience advising international sellers) — treat this section as a starting point, not legal/tax advice, and verify against your own state's/country's requirements or a licensed professional. `[04:27:36]`
- Do not leave any products assigned to the Printify shipping profile — that silently passes Printify's real (often ~$12+) shipping cost to the customer at checkout, which the instructor identifies as the single biggest conversion-rate killer in this setup, even though Add to Cart and Initiate Checkout metrics look fine. `[04:26:14]`
- DNS record conflicts (e.g., an existing "www" CNAME) can block domain verification — update the existing record's value instead of just adding a new one, and re-verify. `[04:18:55]`
- Decline upsells during both domain purchase (GoDaddy) and LLC formation (Busy.com) — the instructor calls these out explicitly as unnecessary.
- Don't claim guarantees/customer counts you can't back — the 30-day money-back guarantee is presented as a trust-builder specifically because it's real and low-cost (1% return rate), not just marketing copy.
- Some theme-generated pages (e.g., a broken-looking Terms/Shipping policy render) may need a support ticket to Build My Pod's team if formatting looks visibly broken — don't assume it's a mistake you made. `[04:43:35]`

## Related
[[shipping-profile-conversion-killer]], [[llc-vs-personal]], [[store-policies-template]], [[bulk-product-editor]], [[branded-domain-setup]]
