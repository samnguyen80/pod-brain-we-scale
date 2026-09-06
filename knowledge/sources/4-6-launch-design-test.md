# 4.6 Launch Design Test

Stage: 4) Marketing
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=25569s
Transcript: [../../transcripts/4-6-launch-design-test.md](../../transcripts/4-6-launch-design-test.md)

## The job of this lesson

A merchant should walk away able to set up a "catalog ad" — a single, reusable Meta campaign that connects directly to the Shopify product catalog instead of one static image, so Facebook automatically cycles through and tests every design (not just the ~10 mockups from the previous lesson) against real buyers. The goal of this specific launch is not sales or profit — it's finding 2-3 winning designs out of the ~100 tested.

## Playbook

1. Confirm the right catalog is syncing: Shopify → Facebook and Instagram app → check synced product catalog and product count `[07:08:12]`.
2. In Business Manager → Data sources → Catalogs → open in Commerce Manager → rename the catalog for clarity `[07:09:14]`.
3. In the business asset group, click Assign assets → Catalog → select your catalog so the page/ad account/catalog are linked `[07:09:51]`.
4. Refresh the ad account to confirm the catalog name updates there `[07:09:51]`.
5. Create a new campaign: objective = Sales, Auction, name it "Design Test" `[07:07:10]`.
6. Ad set: use Advantage+ catalog ads, set to ad-set budget, product set = All products `[07:09:51]`–`[07:10:30]`.
7. Optimization: select "maximize number of conversions" — do NOT let Facebook default to optimizing for link clicks `[07:10:30]`.
8. Leave audience and placements open/broad (same rationale as the mockup test) `[07:10:59]`.
9. Ad level: format = single image; creative source = "from catalog" (pulls from the synced product set) `[07:10:59]`–`[07:11:32]`.
10. Destination = manual, enter the collection page URL (not homepage); turn personalization/shop off `[07:11:32]`.
11. Reuse the primary text from the winning mockup-test ad `[07:12:11]`.
12. Headline: click the "+" to insert the dynamic Product Name field so each ad auto-shows its own product name `[07:12:47]`.
13. Description: reuse whatever worked on the winning mockup (e.g., star rating line + "30-day guarantee") `[07:13:20]`.
14. Turn off every auto-added Facebook "enhancement" (relevant comments, hide price, etc.) `[07:13:58]`.
15. Double-check the Pixel ID matches the one used on prior campaigns `[07:13:58]`.
16. Recap before publishing: single image, manual destination = collection URL, media from catalog, ad copy from winning mockup, headline = dynamic product name `[07:14:49]`.
17. Schedule to start Thursday, run through Sunday, and leave it with **no end date** — this campaign gets reused every week, just toggled on/off `[07:15:47]`.
18. Final pre-publish checklist: budget $12.50/day, ~100 products connected, ad copy copied from the winning mockup `[07:16:18]`.
19. Publish, then let it run untouched through the full Thursday-Sunday window — don't turn it off early, don't change creative, don't remove unsold products mid-run `[07:17:46]`.

## Numbers and thresholds

- Budget: $12.50/day for the catalog/design-test ad set `[07:09:51]`.
- Run window: launch Thursday, run through Sunday; review Monday `[07:15:47]`, `[07:17:46]`.
- Example catalog size at setup: 84 products live + 16 in progress ≈ 100 products, ≈3,400 variants (84 × colors × sizes) `[07:08:12]`, `[07:10:30]`.
- Setup time (claimed): about 10-15 minutes `[07:16:52]`.
- Goal for this first run: 2-3 winning designs out of ~100 tested — explicitly "not profit yet" `[07:16:52]`.
- Aspirational end-state machine (claimed, "not a financial guarantee of any kind"): put in $100, get $200-300 back `[07:17:16]`.
- Don't raise budget to $50+/day until after the first full weekend review `[07:17:46]`.

## Decision rules

- If the catalog shows sync errors: screenshot it, ask the WeScale GPT, treat it as normal troubleshooting — don't stop `[07:08:12]`.
- If a draft ad appears to show up inside unrelated campaigns/ad sets in Ads Manager: this is a known Facebook UI quirk (draft ads render everywhere), not an actual mix-up — ignore it `[07:12:11]`.
- If the weekend test finishes: review Monday, don't judge or kill it after only one weekend, don't change the creative template, and don't remove products with zero sales yet `[07:17:46]`.

## Tools and services named

- Facebook and Instagram app (Shopify) — syncs the product catalog to Meta.
- Meta Business Manager / Commerce Manager — catalog naming and business asset group setup.
- Meta Ads Manager — campaign, ad set, and ad build.
- WeScale GPT — troubleshooting catalog sync errors.

## Watch-outs

- Do not optimize for link clicks — must manually select "maximize number of conversions" `[07:10:30]`.
- Draft-ad cross-appearance in Ads Manager is cosmetic; don't waste time trying to "fix" it `[07:12:11]`.
- No sales are expected from this first run — the deliverable is data (which designs get sub-$1 CPC), not revenue `[07:17:16]`.
- Any specific return/ROAS numbers mentioned ($100 in → $200-300 out) are explicitly flagged by the instructor as not a guarantee — treat as an illustrative target, not a benchmark to expect immediately.

## Related

[[design-test]], [[catalog-ads]], [[mockup-test]], [[facebook-ads-setup]], [[cost-per-click]]
