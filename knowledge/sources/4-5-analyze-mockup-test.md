# 4.5 Analyze Mockup Test

Stage: 4) Marketing
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=23062s
Transcript: [../../transcripts/4-5-analyze-mockup-test.md](../../transcripts/4-5-analyze-mockup-test.md)

## The job of this lesson

A merchant should walk away able to read a completed mockup-test ad set in Meta Ads Manager, apply an objective numeric rule to declare a winner or call for another round, and — once a winner is found — apply that winning mockup across the entire product catalog so the whole store looks like one cohesive branded product line. This is the payoff/decision lesson of the mockup-test system.

## Playbook

1. [06:25:22] Review the following Monday morning, after the scheduled ad set has auto-paused and spent its budget (~$50 total).
2. [06:25:51] Simplify the Ads Manager view first: in the ad set's Ads tab, **Customize Columns**, delete all defaults, add only **Link Clicks, Cost per Link Click, Purchases, ROAS, Amount Spent, Budget**. Save as a named preset and bookmark the page — this becomes the permanent view.
3. [06:27:14] Use "cost per **link** click," not the default CPC metric (which also counts profile-picture/page clicks).
4. [06:31:12] Sort the Ads tab by link clicks, descending.
5. [06:31:40] Scan for any mockup meeting BOTH: ≥5 link clicks AND <$1.00 CPC. If one exists, it's your winner — skip to step 10.
6. [06:35:42] If Meta spent little on a mockup you personally like, don't force spend by isolating it in its own ad set — the allocation is itself diagnostic signal; the instructor tested this "dozens of times" with no improvement.
7. [06:36:30] If no clear winner (the common outcome), before the next round re-check: mockup fundamentals (photorealistic, high contrast, shirt fills the frame, real shadows, design is the first thing the eye lands on, max 2-3 non-distracting objects); design fundamentals (typography or typography+graphic, humor/relatable angle, low color count); and get outside/blind feedback if unsure.
8. [06:33:07] Launch another round with the same structure — $12.50/day, Thu-Sun, ~$50 total, 10 new mockups — using the decision table below to size how different the new batch should be.
9. [06:41:18] Repeat review → adjust → relaunch until a mockup clears ≥5 clicks / <$1.00 CPC.
10. [06:47:14] Apply the winner across the full catalog (Meg's segment): get each shirt's hex code from the Gildan 64000 reference; recolor the winning mockup per shirt color in Gemini/Nano Banana (prompt: keep everything else identical, change only t-shirt color to the hex code; chain codes in one chat, or restart if quality degrades); remove the Nano Banana watermark with Canva's magic eraser; batch-produce colors up front (6-8 per design, ~12 total) rather than one-off later; cross-check each recolor against the real Printify swatch (need not be pixel-exact — see thresholds); place the design onto each recolored mockup in Canva (copy-paste keeps placement consistent), rename by color, download in batches of ~10; in Shopify admin, replace old media, select only the colors offered per design, and reorder images so the collection-grid thumbnail color matches the product-page default (avoids a jarring mismatch) — connect a "Color" metafield so swatches auto-match hex codes.

## Numbers and thresholds

- Minimum sample before judging a mockup: **≥5 link clicks** — 1-3 clicks is treated as statistically insignificant/noise. [06:28:11] (claimed)
- Winner threshold: **<$1.00 cost per link click**, community-benchmarked across "hundreds of stores." [06:29:00] (claimed)
- Optional larger sample if budget allows: can extend to up to **100 clicks** for more confidence. [06:28:38] (claimed)
- Average CPC benchmark cited for $10K+/month stores: **"40 to 60"** — unit not stated explicitly in the transcript ([06:29:26]); given all surrounding thresholds are sub-$1, this most likely means **$0.40-$0.60 cost per link click**, but it could also be misheard/mistranscribed for a cost-per-acquisition figure. Flagging as ambiguous rather than assuming — also noted to apply AFTER the design test stage, not the mockup-test stage.
- Test spend per round: **~$50 total** ($12.50/day over the ~4-day weekend window). [06:33:28]
- Case study (0-to-7-figure brand, running since 2023, during Q4): $1.7M revenue trailing 365 days, $438K trailing 30 days. [06:29:52] (claimed; used as substitute data because the live Slice Club example hadn't finished its full spend window)
- Round 1 (case study): best mockup got 21 link clicks at **$1.35** CPC — not a winner. [06:32:09]
- Round 2 (case study): best mockup got 78 link clicks at approximately **$1.10-$1.15** CPC — transcript renders this ambiguously ("$11" then later "$115"), but the instructor's own restated range ("anything up to $110, $1.15 you can get away with" [06:34:02]) indicates roughly $1.10-$1.15; still not a winner, treated as "really close."
- Round 3 (case study): winner found — **45 link clicks at $0.98** CPC. [06:34:30]
- Rounds typically needed to find a winner: **~3 on average**; some sellers take 10+ rounds, attributed to not genuinely varying mockups between rounds. [06:42:43] (claimed)
- Share of people who get a winner on their very first round: stated inconsistently across the same lesson — "maybe 20%" [06:32:38], "20 maybe 30%, absolute max" [06:35:20], and later "10 maybe 20%" [06:36:30]. Treat as a rough claim of roughly 10-30%, not a precise figure.
- Catalog-wide mockup reskin (~100 products): takes roughly **4-5 hours**, one-time per winning mockup. [07:05:23] (claimed)
- Typical shirt colors per design: **6-8**; recommended total colors to batch-produce across the catalog: **~12**. [06:51:13]-[06:59:14] (claimed)
- Mockup-to-real-product color match target: roughly **within 20-30% visual similarity**, not pixel-exact. [06:54:05] (claimed, qualitative)
- Upload/design batch size: **~10 designs per batch** (workflow preference cited for quality control, not a hard rule). [07:02:22]

## Decision rules

| Best mockup result | Action |
|---|---|
| <5 link clicks | Not enough data — ignore this mockup entirely |
| ≥5 link clicks AND <$1.00 CPC | **Winner** — apply this mockup across the full catalog |
| Best CPC ~$1.00-$1.50 ("very close") | Next round of 10: mix of iterations on the near-winner (tweak layout/colors/shadows) and completely different concepts. The instructor gives two slightly different splits for this in the same lesson (~4-5 iterations + ~3-4 fresh at [06:44:47]; later restated as 5 iterations + 5 fresh for a "$1-$2" range at [06:46:05]) — treat as "roughly half and half," not an exact ratio |
| Best CPC ~$3-$5 | Likely a design problem, not a mockup problem — try a different design; also re-verify ad copy formatting (one line, correct emoji placement) |
| Best CPC >$5 | Start completely fresh — new mockups AND new designs |
| Facebook isn't spending much on a mockup you personally favor | Leave it — don't isolate it into its own ad set to force spend; this wastes budget and does not improve outcomes per repeated testing |

## Tools and services named

- Meta Ads Manager — Customize Columns, column presets, sorting by link clicks
- Gemini / Nano Banana — AI recoloring of the winning mockup per shirt color
- Canva — magic eraser (watermark removal), design placement across mockups
- Printify — source of truth for actual garment colors to validate mockup accuracy against
- Gildan 64000 color reference — hex/RGB lookup for shirt colors (linked in course community resources)
- Shopify product admin — media management, color metafield for swatch auto-matching

## Watch-outs

- Do not use the default "CPC" column — it includes profile-picture clicks and understates true link-click cost.
- Do not judge any mockup on fewer than 5 clicks — treated explicitly as noise.
- Do not force Meta's algorithm to spend more on a favored mockup by isolating it — tested repeatedly with no improvement, per the instructor.
- Running many rounds (10+) without meaningfully varying the mockups is a common trap — it looks like testing but isn't generating new information ("echo chamber").
- Several numeric claims here are internally inconsistent or unit-ambiguous as transcribed (the "40 to 60" benchmark, round-2 CPC figures, and "% who win on round 1") — verify against your live account rather than treating these as precise benchmarks.
- Mockup color need not exactly match the physical garment, but should be close — a real complaint case involved a "rustic red" mockup shipped as "fire engine red."

## Related

[[mockup-test]], [[meta-campaign-structure]], [[hero-design-selection]], [[design-test]], [[catalog-scaling]]
