# 4.7 Scaling Your Catalog

Stage: 4) Marketing
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=26358s
Transcript: [../../transcripts/4-7-scaling-your-catalog.md](../../transcripts/4-7-scaling-your-catalog.md)

## The job of this lesson

A merchant should walk away able to run the weekly catalog-ad cycle: read the per-design cost-per-click (CPC) data, identify winners, systematically iterate on them (concept first, then style, then graphic), inject fresh research to avoid an echo chamber, and scale the catalog from ~100 toward hundreds of designs at a steady 25/week until the whole catalog's CPC drops under $1.

## Playbook

1. Weekly review (Monday): Ads Manager → Campaigns → Design campaign → Ad Sets → Ads → Breakdown → Delivery → scroll down → select "Product ID" `[07:21:53]`.
2. Sort the resulting list by amount spent to surface which designs got the cheapest clicks `[07:22:49]`.
3. Ignore designs with $0 spend or a single stray click — that's just the algorithm allocating budget away from them, not a signal to act on `[07:55:01]`.
4. For each winner, run the analyze-then-iterate framework:
   a. Find the winner by lowest CPC `[07:28:08]`.
   b. Analyze by separating **concept** (the core idea/joke/theme) from **style** (art style, color, e.g. monocolor/grunge) — concept first `[07:28:35]`–`[07:29:33]`.
   c. Iterate with big, "blue ocean" swings on the concept — never minor tweaks like font/color/removing one element, since that just re-markets to the same buyers `[07:31:52]`–`[07:32:51]`.
5. Use AI to scale iteration: paste screenshots of top performers into ChatGPT and Gemini in parallel, asking for similar sayings/jokes/puns following the same thread `[07:38:38]`–`[07:39:44]`.
6. Feed the model only 5-10 prompts at a time — beyond ~20 it degrades/"gives up" `[07:43:25]`.
7. Turn the shortlisted phrases into image-generation prompts; optionally attach screenshots of winners and instruct the model to copy only their art style/colors/placement, never their concept `[07:44:51]`.
8. Iterate back and forth with the image model until outputs match the winning pattern: monocolor, simple, good negative space, consistent single font `[07:47:52]`.
9. If the model starts blending multiple designs together, abandon that chat and start a new one `[07:45:57]`.
10. Also review the losers (0-click designs) to spot what genre/style is NOT converting (e.g. "peaceful/eco" vibes vs. humor) so you avoid repeating it `[07:48:51]`.
11. Build the next design batch on a 50/50 split: 50% iterations off proven sub-$1 winners, 50% completely fresh research — the research never stops `[07:50:44]`.
12. Weekly cadence: Monday = review data + start designing; Tuesday-Wednesday = keep designing; Wednesday night/Thursday morning = upload everything and turn ads back on; Thursday-Sunday = ads run; repeat `[07:59:21]`.
13. Time-block the work: ~30 min Monday for review, ~1 hour/day Monday-Wednesday for design, a dedicated slot Wednesday night or Thursday morning to upload `[08:07:24]`–`[08:07:50]`.
14. Repeat the full weekly cycle roughly 2-4 times until the overall catalog CPC is under $1 `[07:56:17]`–`[07:56:43]`.

## Numbers and thresholds

- Winning criteria for a design: under $1 CPC **and** roughly 3-5 link clicks (lower than the mockup test's "solid 5" because the design-test budget per design is much smaller) `[07:23:14]`–`[07:24:08]`.
- Design output target: 25 new designs/week, framed as slightly above the "top 1% of print-on-demand sellers" benchmark of 7 designs/day (claimed) `[07:53:14]`–`[07:53:58]`.
- Sloth Hiking Club case data: started at $5 CPC in January → dropped to $0.37 CPC with a 2.3 ROAS ($2.37 back per $1 spent) as the catalog scaled from 100 → 150 → 200 designs `[07:19:23]`–`[07:25:50]`.
- Win ratio (claimed, "after doing this for years"): roughly 1 winning design per 20-30 tested `[07:55:49]`.
- Mockup test (prior lesson) typically takes ~3 iterations, about 3 weeks, on average (claimed) `[07:56:17]`.
- Reaching sub-$1 catalog-wide CPC: estimated 2-4 full weekly cycles, depending on design volume/quality (claimed) `[07:56:43]`.
- Sloth Hiking Club Q4 year-over-year: $400K → $676K, a 50%+ increase attributed to adding new designs alone (claimed) `[08:04:38]`.
- Community anecdotes cited (claimed, unverified): a coach went from 5 orders in June to 1,756 by November `[08:01:15]`; one member reports ~$5,000/month profit from design volume + research `[08:02:20]`; another hit $50,000/month after finding one standout winning design `[08:02:49]`.

## Decision rules

- If a design gets under $1 CPC with ~3-5+ clicks → treat it as a winner → generate 3-5 concept-level variations off it `[07:52:09]`.
- If a design gets $0 spend or 1 click → no action needed, that's the algorithm deprioritizing it `[07:55:01]`.
- If iterating on a winner → always change the core concept (big swing); never just tweak font/color/minor graphic details `[07:31:52]`.
- If the overall catalog CPC is still above $1 after a cycle → don't panic; expect only 1-2 winners per 100 designs launched and keep repeating research + iteration `[07:24:57]`.
- If zero designs land under $1 CPC in a round → that's not failure, it's data — keep going `[07:57:36]`.

## Tools and services named

- Meta Ads Manager (Breakdown → Delivery → Product ID) — surfaces per-design CPC data.
- ChatGPT — brainstorms sayings/jokes/puns from screenshots of top performers, then drafts image-generation prompts.
- Gemini — run the same prompts in parallel to increase idea/image throughput.
- WeScale GPT / accelerator coaching calls / community — support resource for the iteration process (accelerator is a paid program; cost not stated in this lesson).

## Watch-outs

- Don't judge a design on 1-2 clicks; meaningful shifts only come from genuinely different concepts, not incremental data `[07:24:57]`.
- Watch for AI brainstorms that "lose the thread" (e.g., humor sliding into dark/morbid "death threat" jokes) — curate for what's actually funny/relatable rather than accepting everything `[07:39:44]`.
- A cited real failure mode: a student launched 1,000 designs that were all minor variations of the same joke/graphic and got zero sub-$1 winners — volume without concept diversity doesn't work `[07:51:17]`.
- The success-story revenue figures (Sloth's $676K Q4, member's $50K/month, etc.) are anecdotal claims from the course community — worth verifying independently, not guarantees.
- Consistency beats intensity: the instructor explicitly warns against burning out by spiking to 100 designs one week — steady 25/week is the target `[07:59:48]`.

## Related

[[design-test]], [[catalog-scaling]], [[cost-per-click]], [[design-iteration]], [[time-blocking]]
