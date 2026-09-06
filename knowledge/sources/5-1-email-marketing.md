# 5.1 Email Marketing

Stage: 5) Scaling
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=33010s
Transcript: [../../transcripts/5-1-email-marketing.md](../../transcripts/5-1-email-marketing.md)

## The job of this lesson
A merchant should walk away with a fully live Klaviyo account: an email/SMS popup capturing visitors, all six core automated flows built and turned on, and a weekly campaign cadence started — so that every Meta-paid customer keeps generating free repeat revenue instead of being a one-time sale.

## Playbook

**Case study context.** Email is framed as the "profit center" of the business — Meta acquires the customer once, email monetizes them again for $0 additional spend `[09:12:43]`. A 0-to-7-figure brand's month-by-month build (starting July '23): $31K sales / $3K email revenue / 20% net margin in month 1 `[09:15:02]`; $53K in month 2 `[09:15:56]`; $100K sales / $13K email / 22% margin / $22K net profit by month 4 (September) `[09:16:34]`; $18K email by October `[09:17:37]`; $150K sales / $28K email / $27K net profit at Black Friday (November) `[09:18:03]`; $160K sales in December with email "about the same, a little bit less" — flagged by the instructor as a mistake: email list was ~4x smaller than today but revenue only 6-7x higher, meaning under-sending during BFCM cost roughly $50K in missed email sales `[09:18:42]`. January/February (supposedly weak Q1 months) still produced $91K/$8K profit and $99K/$11.5K profit respectively, ~$20K combined profit, because ad costs drop in Q1 `[09:19:12]`. Separately, Sloth Hiking Club generated $125,000 in email revenue in a year at ~$0 incremental cost `[09:21:05]`.

**1. Install and configure Klaviyo** (chosen over Omnisend/ActiveCampaign/Mailchimp/Brevo for its Shopify-native integration and free tier) `[09:22:36]`.
- Install from the Shopify App Store, check both sync boxes (Shopify subscribers → Klaviyo, Klaviyo profiles → Shopify) `[09:23:35]`.
- Set sender identity to a branded name + a branded domain email (not Gmail) `[09:24:12]`.
- Free plan covers up to 250 active profiles `[09:24:47]`.
- Create two lists — "email popup" and "SMS popup" — both set to single opt-in under Settings → Consent `[09:25:15]`.

**2. Build the popup** via Website → Sign-up Forms → browse templates → "email and SMS" template `[09:25:55]`.
- Teaser: show before + after form closed, desktop only `[09:26:31]`.
- Trigger: time-delay only (turn off exit-intent), set to 8 seconds — tested as most optimal `[09:26:31]`.
- Exclude `/cart` and `/checkout` from targeting so the popup never interrupts checkout `[09:26:59]`.
- Offer: "Unlock 15% off your order" — tested against other percentages, 15% performs best `[09:26:59]`.
- Two-step flow: step 1 has "Claim my discount" (advances) and "No thanks, I'd rather pay full price" (closes form); step 2 adds the email input field `[09:27:45]`–`[09:28:58]`.
- Add brand logo/imagery to every step individually — it does not carry over automatically `[09:29:50]`.
- Success screen copy: "Check your email inbox to receive your discount code. If you don't see it, check your spam folder." `[09:30:51]`.
- Best practices: simple, single clear value prop, one CTA `[09:31:31]`. Expect a possible short-term dip in site conversion rate after adding a popup — normal, and worth it long-term `[09:32:02]`.

**3. Turn on Klaviyo's Shopify integration tracking** — required before flows can trigger: enable "add viewed product tracking" and "track behavioral events" `[09:43:29]`–`[09:44:32]`.

**4. Build the six core flows.** For each: open the matching Klaviyo template, copy the template email text into a custom "email marketing brain" GPT along with the brand's URL and brand description, and have it rewrite the copy for the brand; paste the result back into a text-only Klaviyo email template `[09:35:38]`–`[09:41:16]`.
1. **Welcome flow** — trigger: email popup signup. 6 emails total. Email 1 sends immediately, includes the welcome discount code (created in Shopify: `WELCOME15`, 15% off, one use per customer, combinable with shipping discounts, no end date). Email 2 (1 day later) is a personal note from the founder. Emails 3–6 continue down the template (product features/social proof if no reviews yet) `[09:35:38]`–`[09:43:04]`.
2. **Abandoned checkout flow** — trigger: Shopify "checkout started" (different from cart: this fires once someone enters payment info). Delays per template: email 1 immediate/1 hour, email 2 at 1 day `[09:44:59]`–`[09:49:06]`.
3. **Abandoned cart flow** — trigger: Shopify "added to cart." Same copy process; only becomes available once the store has recorded add-to-cart events `[09:49:53]`.
4. **Browse abandonment flow** — trigger: "viewed product." Email 1 at 1 hour, includes the dynamic product the visitor viewed. Email 2 at 1 day `[09:51:18]`–`[09:55:32]`.
5. **Site abandonment flow** — cloned from browse abandonment, trigger changed to "active on site" (visited the site without viewing a specific product). Email 1 (3 hours) uses a static best-sellers grid (3 columns, stack on mobile) linking to the collection page; email 2 (1 day, text-only) repeats the link `[09:55:32]`–`[10:02:39]`.
6. **Sunset flow** — trigger: entering the "unengaged 120" segment (opened 0 emails in the last 120 days). Delay between emails: 5 days. If the subscriber opens *any* email in this flow, Klaviyo automatically moves them back into "engaged 90" `[10:02:39]`–`[10:06:29]`.
- **Every flow:** turn off "skip recent email profiles" `[10:05:57]`.
- Advanced flows to add later, once past $10,000 in sales: post-purchase, birthday, VIP customer, winback (templates provided, not built in this lesson) `[09:33:49]`.
- Monthly housekeeping: suppress current members of the unengaged-120 list (Lists & Segments → ⋯ → Suppress current members) to cut Klaviyo's billable profile count without losing the data `[10:06:29]`.

**5. Start weekly campaigns** once the list hits 20+ subscribers, so it never goes cold `[09:34:43]`. Cadence: 1 campaign/week to start (Sloth Hiking Club now sends 3/week), alternating one content email and one sales email `[09:34:16]`, `[10:08:55]`. Send to the "Engaged 90" segment by default (Klaviyo auto-builds Engaged 30/60/90); email the entire list only for major sales events like Black Friday/Cyber Monday `[10:07:00]`–`[10:08:55]`.

## Numbers and thresholds
- Klaviyo free tier: up to 250 active profiles `[09:24:47]`
- Popup delay: 8 seconds (tested optimal) `[09:26:31]`
- Popup discount: 15% (tested best vs. other percentages) `[09:26:59]`
- Start sending campaigns once list ≥ 20 subscribers `[09:34:43]`
- Campaign cadence: 1/week starting out, 1 content + 1 sales, alternating `[09:34:16]`
- Sloth Hiking Club currently sends 3 campaigns/week `[10:08:55]`
- Sunset segment definition: opened 0 emails in last 120 days `[10:07:51]`
- Sunset flow email delay: 5 days `[10:05:57]`
- Advanced flows unlock at $10,000 in sales `[09:33:49]`
- Email KPIs tracked: open rate, submit rate, click rate, subscribe rate, unsubscribe rate `[10:09:47]`
- Sloth Hiking Club account snapshot (claimed): flows generated $87,000 vs. campaigns $45,000 of email revenue — flows ≈ 66% of total email revenue `[10:10:12]`–`[10:10:43]`
- Sloth had already done ~$400,000 in sales before setting up email at all `[10:11:39]` (claimed)
- Case-study brand: $443,000 sales / $93,000 profit in trailing 30 days using an estimated cost-of-goods rate; recalculated with actual 38-40% cost-of-goods to $431,000 revenue / $73,000 profit — the two revenue figures ($443K vs $431K) are not reconciled in the source, treat as approximate `[09:14:03]`–`[09:14:30]` (claimed)
- Same brand's month-by-month: July $31K sales/$3K email/20% margin; Aug $53K; Sep $100K sales/$13K email/22% margin/$22K profit; Oct $18K email; Nov (BFCM) $150K sales/$28K email/$27K profit; Dec $160K sales, email flat-to-down `[09:15:02]`–`[09:18:42]` (claimed)
- Jan $91K sales/$8K profit; Feb $99K sales/$11.5K profit `[09:19:12]`–`[09:19:48]` (claimed)
- Sloth Hiking Club: $125,000 email revenue/year at ~$0 incremental cost `[09:21:05]` (claimed)

## Decision rules
- If a subscriber opens any email inside the sunset flow → Klaviyo moves them back into "Engaged 90" automatically; no manual action needed `[10:04:50]`.
- If sending to the full list vs. a segment → only email everyone during major sale events (BFCM); default sends go to Engaged 90 `[10:07:00]`.
- If the list is under 20 subscribers → hold off on campaigns (flows can still run); once ≥ 20 → start weekly campaigns `[09:34:43]`.
- Once a month → suppress the current unengaged-120 members to control Klaviyo's billed profile count `[10:06:29]`.

## Tools and services named
- Klaviyo — email/SMS platform, chosen over Omnisend/ActiveCampaign/Mailchimp/Brevo — free up to 250 profiles, Shopify-native
- Custom "email marketing brain" GPT — rewrites each flow/campaign template for the merchant's brand voice given brand URL + description
- Shopify Discounts — used to create the `WELCOME15` code (15% off, 1 use/customer, no end date)

## Watch-outs
- Setting up email late is called a "massive mistake" — one brand ran to ~$400K in sales before turning email on at all `[09:11:39]`, `[10:11:39]`.
- "Skip recent email profiles" must be turned OFF on every flow, or intended sends get silently skipped `[10:05:57]`.
- Abandoned-cart/browse/site-abandonment flows won't trigger until Klaviyo's Shopify tracking (add-to-cart, viewed-product, behavioral events) is turned on `[09:43:29]`.
- Popup can cause a short-term dip in overall site conversion rate — expected, not a sign something's broken `[09:32:02]`.
- Dollar figures throughout (case-study revenue/profit numbers, Sloth's $125K, the 66% flows-vs-campaigns split) are the instructor's own brand data, explicitly flagged as "your results will vary" — treat as claimed, not benchmarks to hit exactly.

## Related
[[email-flows]], [[klaviyo-setup]], [[ad-scaling]], [[unit-economics]]
