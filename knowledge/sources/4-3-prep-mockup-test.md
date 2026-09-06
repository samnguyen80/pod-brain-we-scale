# 4.3 Prep Mockup Test

Stage: 4) Marketing
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=19779s
Transcript: [../../transcripts/4-3-prep-mockup-test.md](../../transcripts/4-3-prep-mockup-test.md)

## The job of this lesson

A merchant should walk away with every creative asset needed to launch the mockup test already assembled — final ad copy, a headline, and one "hero design" placed onto all 10 mockups — so that clicking buttons inside Ads Manager (next lesson) becomes the fast, mechanical last step rather than a place for improvised decisions.

## Playbook

1. [05:31:38] Understand why only ONE variable is tested: like a casting director testing 10 actors in the identical scene/script to isolate acting quality, the mockup test holds design, ad copy, and audience constant and only varies the mockup image.
2. [05:32:57] Inventory the ad components needed: page (done in 4.2), ad copy, mockup, design, headline, and the "Shop Now" button (fixed, no work needed).
3. [05:33:50] Generate ad copy via a Claude project: paste in a proven high-performing ad copy example plus a prompt asking Claude to produce a branded rewrite (include your actual site URL). Structure to enforce:
   - Line 1: an attention-grabbing hook naming the niche/pain point, short enough to render on exactly one line in the Facebook ad preview, bookended with two on-brand emojis (never generic ones like a plain star).
   - Line 2: the reason to buy right now — typically a discount. Best practice: set the Shopify "compare at" price ~30-35% above the real price so the product is presented as perpetually on sale.
   - Line 3: the call to action ("Shop Now") plus a **short redirect link** (e.g. `yoursite.com/sale`), never the full catalog URL, to save space.
4. [05:36:27] For the very first-ever ad on a brand-new account, run it WITHOUT a discount to keep the account "safe" while it's still warming up — large discounts can visually resemble scam/fire-sale patterns Meta's fraud systems watch for; ~30-35% off is unlikely to trigger flags either way, but the first ad specifically should stay conservative.
5. [05:37:25] Generate the headline via the same Claude project (e.g. "New golf t-shirt collection") — pick the shortest, cleanest variant.
6. [05:38:11] Select ONE hero design to place across all mockups, based on research rather than personal taste:
   - Prefer typography-only or typography+graphic designs; graphic-only designs almost never win (per a survey of accelerator sellers doing $10K+/month, ~50% cited typography-only best-sellers, ~50% typography+graphic, almost none graphic-alone). (claimed)
   - Favor humor/relatability and monochrome or low color-count designs — more colors reduces the pool of people willing to wear the shirt in public.
   - Screen out sensitive-topic designs (e.g. cigars, smoking, alcohol) for the FIRST ad; these can be tested later once the account is warmed up.
7. [05:41:14] Shortlist ~10 candidate designs, screenshot them into ChatGPT ("design GPT") and prompt it to evaluate which design has the best research-backed chance of success for the niche — use its top pick as the hero design.
8. [05:45:54] Place the winning design onto every mockup in Canva: download the design (background pre-removed), paste it onto each mockup, adjust text/design color for contrast per shirt color (white vs. dark text — use Canva or Gemini to re-render if a color doesn't work), remove any AI watermarks/backgrounds via Canva's magic eraser, smooth out shirt wrinkles with Nano Banana where needed, and center the design just under the neckline consistently across all mockups.
9. [05:50:27] Rename each mockup file clearly before batch-downloading (makes matching mockups to ads far easier in the next lesson).
10. [05:52:34] Run a final QC pass on all mockups against a simple check: where do your eyes land first? It should be the design, not a background object. Cap supporting objects at 2-3 max per mockup; ensure the shirt looks photorealistic and fills most of the frame.

## Numbers and thresholds

- Compare-at price set ~30-35% above actual price to simulate an "always on sale" state. [05:35:30] (claimed)
- Survey of accelerator sellers doing $10K+/month in sales: ~50% best-sellers were typography-only, ~50% typography+graphic, almost none graphic-only. [05:39:38] (claimed)
- Max 2-3 supporting objects per mockup. [05:53:48] (best-practice guideline, not a hard test threshold)

## Decision rules

None formal — hero design selection is qualitative/research-guided rather than a numeric if/then rule. Numeric decision rules for reading actual test results begin in [[analyze-mockup-test]].

## Tools and services named

- Claude (project) — ad copy and headline generation
- ChatGPT ("design GPT") — hero design evaluation/selection from a shortlist
- Canva — mockup design placement, magic eraser cleanup
- Gemini / Nano Banana — AI recoloring, background removal, wrinkle smoothing

## Watch-outs

- Do not run a first-ad discount that looks like a "90%+ off" fire sale — a common trigger pattern Meta's anti-scam detection watches for.
- Do not select the hero design on personal preference alone — the instructor explicitly frames this as a research decision, not a taste decision.
- Avoid designs referencing cigars/smoking/alcohol on the first ad specifically (not stated as a permanent ban, just a "steer away from, do it later" recommendation).
- Overly colorful/busy designs are called out as reducing wearability and diluting where the eye is drawn in the ad creative — treat "more colors = worse for cold testing" as the working assumption, not an absolute rule.

## Related

[[mockup-test]], [[hero-design-selection]], [[ad-copy-formula]], [[meta-campaign-structure]]
