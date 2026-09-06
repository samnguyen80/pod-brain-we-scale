# 5.2 Viral Ads

Stage: 5) Scaling
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=36856s
Transcript: [../../transcripts/5-2-viral-ads.md](../../transcripts/5-2-viral-ads.md)

## The job of this lesson
A merchant should be able to identify which catalog-ad designs are ready to graduate into standalone "static ads," and launch a static-ad-test campaign that builds up likes/comments/shares — social proof that then compounds ad performance — rather than leaving every design buried inside the catalog ad.

## Playbook
1. Understand the split in purpose: the catalog ad is built to **discover** winners (like open tryouts finding who's ready for the big leagues); static ads are built to **scale** a winner by giving it its own spotlight and letting it accumulate engagement `[10:14:48]`–`[10:17:34]`. Structurally a static ad is identical to the earlier mockup test — one ad set, individual images uploaded per ad `[10:14:48]`.
2. Every week, pull the past 7 days of catalog data (the catalog should be running continuously, hovering near a 2.0 ROAS) and look for designs that are getting **both** consistently sub-$1 cost-per-click **and** actual purchases; also note which color/variant is winning `[10:17:34]`–`[10:18:22]`.
3. Cross-reference two data sources, since Meta's product-ID breakdown does not show purchase data: Ads Manager → campaign → ad set → ad → Breakdown → Delivery → Product ID (sort by amount spent / cost-per-click) for the click-cost side, and Shopify's "Total sales by product" report for the purchase side `[10:18:50]`–`[10:22:18]`.
4. Create a new campaign, "Static Ad Test," budget $12.50/day, running Thursday through Sunday alongside the always-on catalog test `[10:17:34]`–`[10:18:22]`. Put 5 winning designs into one ad set `[10:18:22]`.
5. Fastest build method: duplicate an existing campaign/ad set/ads wholesale rather than rebuilding from scratch, then rename clearly (e.g. "static ad number one, two, three, four, five") `[10:23:45]`–`[10:25:50]`.
6. For each ad, swap in the winning color/variant's image — find the SKU/variant number from the catalog breakdown, look it up in Shopify to confirm the color, then upload the matching mockup `[10:25:50]`–`[10:26:54]`.
7. Turn off any scheduled end date — control the ad manually instead `[10:26:54]`.
8. After this setup, the account has exactly three things running: the catalog ad (finds winners), the static ad test (builds engagement/tests scale), and email flows `[10:28:14]`–`[10:29:11]`.

## Numbers and thresholds
- Example viral static ad (claimed): 2,200 likes, 116 comments, 133 shares `[10:14:18]`
- Consumer trust stat (claimed, general): 82% of consumers trust online ratings/reviews as much as or more than friend/family recommendations `[10:16:08]`
- Catalog ad should hover near a 2.0 ROAS before pulling winners `[10:17:34]`
- Static Ad Test budget: $12.50/day, run Thursday–Sunday `[10:17:34]`–`[10:18:22]`
- Designs per new static ad set: 5 `[10:18:22]`
- Day-to-day fluctuation of 30-40% in CPC/purchases is normal — judge on the 7-day average, not a single day `[10:28:14]`
- Sample catalog data pulled from a 7-figure brand (claimed): 7-day spend $1,900, 3,000 link clicks, $0.64 CPC, 120 purchases, 2.8 ROAS `[10:19:45]`
- Smaller/more typical week example (claimed): $300 spend, 12 purchases, 1.88 ROAS `[10:19:45]`

## Decision rules
- If a catalog design shows sub-$1 CPC **and** purchases in the trailing 7 days → promote it into the next static-ad batch `[10:17:34]`.
- If no catalog designs currently clear that bar → pick the best-performing available ones, or run none this cycle — still keep prepping more designs regardless `[10:32:08]` (bridges into 5.3).
- If a design was a catalog winner but flops as a static ad (high CPC, no purchases) → that's normal and not a system failure; the fix is simply more designs, never a structural change `[10:32:32]`–`[10:33:24]` (elaborated fully in 5.3).
- If the ad account UI glitches (stuck "review" state, nothing to publish) → hard-refresh the page; rarely needed `[10:27:37]`–`[10:28:14]`.

## Tools and services named
- Meta Ads Manager — Breakdown → Delivery → Product ID report; bulk duplicate/rename actions for campaigns, ad sets, and ads
- Shopify Analytics — "Total sales by product" report, used to find which designs actually converted

## Watch-outs
- Purchase counts do not appear in Meta's per-product breakdown — you must pull that half of the picture from Shopify separately `[10:20:46]`–`[10:21:14]`.
- A design's catalog-ad success does not guarantee static-ad success, and vice versa — expect some winners to underperform once isolated `[10:32:32]`.
- Engagement numbers shown (2,200 likes etc.) are the instructor's own best example, not a typical result to expect immediately.

## Related
[[static-ads]], [[catalog-ads]], [[ad-scaling]], [[social-proof]]
