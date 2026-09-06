# 4.8 Turn Traffic Into Sales

Stage: 4) Marketing
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=29545s
Transcript: [../../transcripts/4-8-turn-traffic-into-sales.md](../../transcripts/4-8-turn-traffic-into-sales.md)

## The job of this lesson

Once cost-per-click is under $1, a merchant should walk away able to diagnose and fix the store/funnel itself — not the ads — using a strict, ordered checklist: conversion rate (broken into add-to-cart, reach-checkout, sessions-converted), then average order value, then ROAS. The output is a repeatable "which page do I fix next" decision process rather than random site tweaks.

## Playbook

1. Learn the 4-metric funnel: CPC (traffic in) → CR (conversion rate) → AOV (average order value) → ROAS (the resulting output, not a lever itself) `[08:15:54]`.
2. Formulas: CR = total orders ÷ total sessions `[08:17:39]`; AOV = total sales revenue ÷ number of orders `[08:18:55]`; ROAS = total sales ÷ total ad spend, topline only, excludes COGS/overhead `[08:19:56]`.
3. In Shopify → Analytics dashboard, pin Conversion Rate and Average Order Value to the top for quick tracking `[08:20:57]`–`[08:21:26]`.
4. Open the Conversion Rate breakdown and filter to human sessions only (exclude bot sessions) `[08:30:33]`.
5. CR splits into 3 sequential sub-metrics; fix them strictly in this order because each represents a bigger drop-off than the next: add-to-cart rate → reach-checkout rate → sessions-converted rate `[08:21:54]`, `[08:26:27]`–`[08:27:46]`.
6. To fix add-to-cart rate, only two pages matter — collection and product `[08:32:24]`. Check mobile first (80%+ of traffic) `[08:33:21]`. Announcement bar = free-shipping threshold `[08:34:14]`. Keep logo small so content stays above the fold `[08:34:39]`. Rename the collection to match traffic; add a short trust description (guarantee, # customers) `[08:35:36]`–`[08:36:12]`. Product titles ≤2-3 words + "t-shirt"; disable currency code (avoids 2-line price wrap) and infinite scroll `[08:36:42]`. Minimize product-page content above the fold `[08:37:33]`. Use color swatches near the top (not dropdowns) so selection doesn't jump the page `[08:38:36]`. Add-to-cart button in a distinct color (black/red/green, ChatGPT for hex codes), all-caps text `[08:39:34]`. Add trust microcopy under it (stars, guarantee, units sold) `[08:40:03]` plus tasteful branded trust-seal icons `[08:41:00]`. Rebrand generic blocks ("frequently bought together" → niche phrase + emoji) `[08:41:28]`. Keep text minimal; push FAQs to the bottom `[08:42:48]`.
7. To fix reach-checkout rate, only the cart drawer matters (not the full cart page), mobile first `[08:44:18]`: match checkout-button color/style to add-to-cart, show the free-shipping bar, avoid clutter (no heavy recommendations/extra guarantees) `[08:45:07]`. Cart drawer is preferred over a popover (claimed higher conversion) `[08:45:35]`.
8. To fix sessions-converted rate, only the checkout page matters `[08:48:15]`: use 3-page checkout (Settings → Checkout and customer accounts), a small centered logo with no background image, checkout-button color matched to the site with a gray accent color `[08:48:50]`–`[08:49:07]`, and flat-rate shipping (e.g. ~$4.87) or free over a threshold (e.g. $75) `[08:49:37]`–`[09:00:02]`.
9. Give any change 1-2 days of data before judging it, and benchmark stuck spots against top-converting stores `[08:50:10]`–`[08:50:39]`.
10. Fix AOV only after CR is healthy — two levers: free-shipping threshold and having enough related products for customers to want to buy together `[08:51:47]`–`[08:53:41]`.
11. Use the W Scale calculator (enter CPC/CR/AOV, get the priority fix) and follow the diagnostic order of operations end to end before touching anything else `[08:55:29]`–`[08:57:34]`. Once CPC/CR/AOV all clear their thresholds, ROAS should naturally clear 2.0 since it's resulting math, not a direct lever `[08:57:57]`.

## Numbers and thresholds

- Add-to-cart rate target: 6-8% (industry benchmark, claimed) `[08:31:27]`.
- Reach-checkout rate target: 5-6% `[08:43:50]`.
- Sessions-converted (overall conversion rate) target: 2.5-3% `[08:47:04]`.
- Green-light criteria to move on (all three must hold): CPC consistently under $1, conversion rate above 2.5%, AOV above $45 — the transcript states the AOV figure with a verbal self-correction ("above that should say 45"), so treat $45 as intended but note the ambiguity `[08:57:34]`.
- Typical early-stage AOV: $30-35 (single-shirt purchases) `[08:52:17]`.
- Sloth Hiking Club example: 5.28% add-to-cart on 3,500 clicks → 187 add-to-carts `[08:22:27]`–`[08:23:04]`; 1.33% sessions-converted in that same pull `[08:24:05]`; a later 30-day pull showed 2.44% overall CR vs. 3.78% on another brand `[08:47:38]`.
- Worked examples given: 78¢ CPC/1.8% CR/$42 AOV → fix CR first; ~65¢ CPC (transcript says "65%," likely a slip for $0.65, ambiguous)/3.1% CR/$28 AOV → fix AOV first; $1.25 CPC/2.9% CR/$45 AOV → fix CPC first `[08:58:24]`–`[09:00:56]`.
- Shipping example: flat rate ~$4.87, free over $75 `[08:49:37]`, `[09:00:02]`; Printify's default per-item rate escalates sharply for 2+ items (~$4.77 → ~$7.15-7.30+), a common silent AOV killer (claimed, approximate) `[09:00:02]`.
- ROAS to unlock scaling: 2.0+ sustained for 2 consecutive days; never raise budget before that `[08:57:57]`, `[09:01:49]`, `[09:04:36]`.
- Typical catalog size when 2.0+ ROAS first hits: ~150-250 designs (up to 350-400 seen) `[09:09:07]`.
- Next-phase promise (claimed, next lesson): $1 in/$2 back → $1 in/$3-4 back via email and upsell `[09:09:35]`.

## Decision rules

- CPC under $1 but CR low → store problem, not an ads problem — don't touch the ads `[08:55:51]`.
- Within CR, fix strictly in order and never skip ahead: add-to-cart < 6% → collection + product page; add-to-cart ok but reach-checkout < 5-6% → cart drawer only; both ok but sessions-converted low → checkout page only `[08:56:16]`–`[08:56:42]`.
- CPC good, CR good, AOV low → check pricing (~$30-35) first, then free-shipping threshold, then whether the catalog has enough related designs `[08:57:08]`–`[08:57:34]`.
- CPC above $1 → don't touch the store at all; go back to design testing ([[design-test]]/[[catalog-scaling]]) `[08:57:34]`.
- Never raise ad budget until ROAS is consistently above 2.0 `[09:01:49]`.

## Tools and services named

- Shopify Analytics dashboard — tracks/surfaces CR and AOV.
- W Scale calculator — enter CPC/CR/AOV, get the priority fix (course resource, cost not stated).
- WeScale GPT — screenshot collection/product pages for optimization ideas.
- ChatGPT — generate ideal hex codes for the add-to-cart button.
- Bill My Pod (Shopify theme) — base theme used throughout the course; already implements many of these CRO practices by default.
- Printify — POD fulfillment platform; source of a default per-item shipping-rate escalation that can hurt AOV.
- Reference stores for CRO inspiration: House of Chenasos, Life is Good, Into the AM, Busted Tees.

## Watch-outs

- Don't work on multiple funnel stages at once ("split focus"/"shiny objects") — fix exactly one metric at a time, in order `[08:56:16]`.
- The framing that stalled results are "just the designs" is motivational, not a universal diagnostic — treat as opinion.
- Printify's default shipping-rate escalation for multi-item orders is a real AOV killer — verify your own settings rather than trusting the platform default `[09:00:02]`.
- The AOV green-light number carries a mid-sentence self-correction ("above that should say 45") — confirm $45 is the intended target before using it as a hard gate.
- All ROAS multiples cited (2x now, 3-4x after email/upsell) are goals stated by the instructor, not guarantees.

## Related

[[conversion-rate]], [[average-order-value]], [[roas]], [[cro-checklist]], [[design-test]], [[catalog-scaling]]
