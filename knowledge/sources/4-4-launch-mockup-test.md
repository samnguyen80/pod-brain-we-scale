# 4.4 Launch Mockup Test

Stage: 4) Marketing
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=21274s
Transcript: [../../transcripts/4-4-launch-mockup-test.md](../../transcripts/4-4-launch-mockup-test.md)

## The job of this lesson

A merchant should walk away having actually built and published the first live mockup-test campaign in Meta Ads Manager — correct campaign/ad-set/ad structure, budget, targeting, schedule, and creative — and understand the exact settings that must be right (conversion objective, purchase optimization) versus the many defaults that can be safely ignored.

## Playbook

1. [05:55:32] Mental model: Campaign (root, sets objective) → Ad Set (branch, sets targeting/placement/budget) → Ad (leaf, creative + copy). Only three actions ever happen in the account: make ads, pause ads, adjust budgets.
2. [05:56:54] Verify the ad account if prompted: add a payment method, confirm the time zone.
3. [05:58:01] Create the Campaign: objective = **Sales**, name "Mockup Test," Advantage+ catalog ads OFF, use **ad set budget** (not campaign budget), skip A/B testing and special ad categories.
4. [05:59:05] Ad Set: conversion location = **Website**; goal = maximize conversions; conversion event = **Purchase** (a warning appears since no purchases exist yet on a fresh pixel — expected, resolves after the first sale); skip cost-per-result rules; Audience = **open/Advantage+** (no interest targeting), country = **United States**, min age **18+**; daily budget = **$12.50**.
5. [06:00:38] Ad level: format = manual single image; multi-advertiser ads OFF; Website URL = the **full collection page URL** (the short `/sale` link is used only in the ad copy text, not the destination field); personalized destinations OFF; upload the mockup; skip promotions/branding/site links/products; delete auto-generated selling-point bullets.
6. [06:03:57] Paste the primary text and headline from 4.3; description = a short trust line ("30-day guarantee," or "100+ 5-star reviews" once you have them); turn OFF every Meta AI creative-enhancement toggle — not used in this system.
7. [06:07:12] Verify the `/sale` redirect resolves before publishing; if missing, create it in Shopify: **Content → Menus → URL redirects → Create URL redirect**, mapping `/sale` to the main collection page.
8. [06:06:12] Confirm the ad preview shows the primary text on exactly **one line** before publishing.
9. [06:08:27] Publish. If Meta throws an "Instagram not connected" error, uncheck Instagram as a placement for now — 70-80% of this setup's traffic normally comes from Facebook anyway. Long-term fix: create a dedicated IG professional account and connect it in Business Manager.
10. [06:10:52] Wait for the first ad to clear **Processing → Preparing → Active/Learning** before uploading the rest — the very first ad often reviews slower than later ones.
11. [06:12:34] Duplicate the first ad **4 more times** (5 total for round one), swapping only the creative image on each — everything else stays identical.
12. [06:14:27] Set an **end date** at launch (start date is locked after publishing, end date isn't): Thursday morning → Sunday 11:55pm. Weekends and Thu/Fri evenings are the cheapest, highest-scroll windows; Mon/Tue perform worst.
13. [06:15:23] Launch only **5 ads at a time** on a young account, not 10+ — Meta's anti-scam detection watches for scam-like launch patterns on new accounts, and batching conservatively reduces false-positive flags.
14. [06:20:38] Confirm the ad set is optimized for **Purchases**, not Traffic/View Content — unchangeable after publish; if wrong, duplicate and rebuild rather than edit the live ad set.
15. [06:22:24] Once live, don't touch it: no early pausing, ad-copy edits, or mid-test budget changes. Let the full window run so Meta's pixel can gather real signal and find buyers via its own targeting (trusted over manual interest targeting).

## Numbers and thresholds

- Ad set daily budget: **$12.50/day**. [06:21:07]
- Total mockup-test spend per round: **~$50** over the scheduled window. [05:54:39]
- Test schedule: **Thursday morning → Sunday 11:55pm** (~4 days). [06:14:27]
- First batch size: launch **5 ads at a time**, not 10+, on a new account. [06:15:23]
- First-ever ad review/approval time: typically **1-2 hours**, can be longer for the very first ad on the account. [06:21:36] (claimed)
- Audience: United States, minimum age **18+**, no interest targeting. [05:59:59]

## Decision rules

| Situation | Action |
|---|---|
| Purchase-conversion warning shown before any sales exist | Ignore — normal for a new pixel, resolves after first sale |
| Ad set accidentally optimized for Traffic/View Content instead of Purchases | Cannot fix in place — duplicate the ad set and rebuild with the correct objective |
| Instagram-account error blocks publishing | Uncheck Instagram as a placement to publish now; set up a real IG business account later |
| Test is live and running | Do not pause, edit copy, or change budget until the scheduled window ends |

## Tools and services named

- Meta Ads Manager — campaign/ad set/ad build, scheduling, bulk duplicate tools
- Shopify — Content → Menus → URL Redirects, for the `/sale` short link
- ChatGPT / WeScale GPT — troubleshooting when Meta's UI has changed from what's shown on screen

## Watch-outs

- Meta changes its UI/button layout frequently — if a setting isn't where shown, screenshot it and ask ChatGPT or the course GPT to locate the equivalent.
- New ad accounts get flagged by Meta's anti-fraud systems for launching too many ads at once — cap the first round at 5.
- Don't manually add interest/audience targeting on top of the open/Advantage+ setup — the stated position is that Meta's own algorithm outperforms manual targeting once the pixel has data (claimed, not independently verified in-transcript).
- Don't check the ad account obsessively during the test window — a common first-timer habit that doesn't change outcomes.
- Start date is locked after publishing — get the launch day right before hitting publish; only the end date remains adjustable.

## Related

[[meta-campaign-structure]], [[mockup-test]], [[meta-ad-account-setup]], [[url-redirect-setup]]
