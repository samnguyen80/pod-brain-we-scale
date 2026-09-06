# 5.3 Scaling Your Ads

Stage: 5) Scaling
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=37818s
Transcript: [../../transcripts/5-3-scaling-your-ads.md](../../transcripts/5-3-scaling-your-ads.md)

## The job of this lesson
A merchant should be able to run a repeatable weekly loop — consolidate winning static ads into one ad set, decide when to bump or cut each budget, and know why "just spend more" doesn't work — in order to push daily spend from the $50-100/day testing range toward the $1,000-2,000/day range where results stop swinging wildly day to day.

## Playbook
1. **Goal of this stage:** get spend up over $1,000-2,000/day as fast as possible, because below that level, missing a single sale can swing daily results ~20% `[10:30:23]`–`[10:30:49]`.
2. **Weekly consolidation loop:** review the weekend's static ad results, pull anything profitable into one single "winning ad set," and keep it running there indefinitely; meanwhile keep prepping and launching new static-ad batches `[10:31:14]`–`[10:32:08]`.
3. **Naming convention:** rename everything to include the level — "Catalog Ad Test Campaign," "Static Ad Test Campaign" (retire "Mockup Test Campaign"), "Catalog Ad Test Ad Set," "Static Ad Test #1 Ad Set," and add "ad" into ad-level names — so it's never unclear whether you're editing an ad, ad set, or campaign `[10:33:52]`–`[10:34:24]`.
4. **Resulting structure:** just two live campaigns — Catalog Ad Test (always-on, $12.50/day) and Static Ad Test (one consolidated winning ad set, plus new weekly batches) `[10:34:54]`–`[10:35:24]`. This single-ad-set approach is possible because Meta's "Andromeda" update removed the old need to fragment spend across many ad sets at the $1-2K/day level `[10:38:21]`–`[10:38:51]`.
5. **Weekend evaluation (Sunday night / Monday morning):** at $12.50/day for 4 days (~$50-60 total spend) with an average cost-per-purchase near $19, expect only 1-3 purchases in that window. 1-2 purchases already counts as a winner (roughly a 2.0 ROAS) `[10:36:24]`–`[10:37:24]`. A design with an unusually cheap CPC (even with zero purchases yet) also counts as promising `[10:37:24]`.
6. **Cut criteria for new tests:** $0 purchases and CPC over $1 → turn it off `[10:37:24]`–`[10:37:50]`.
7. **Refill weekly:** add 5-10 new candidate designs into the winning ad set each week; cap the ad set at roughly 15 ads total while spend is still low `[10:37:50]`–`[10:38:21]`.
8. **Budget increases — the "three C's":** Create (make new designs), Cut (turn off losers), Consolidate (merge winners into the single ad set) `[10:44:01]`. Bump cadence is every 2-3 days, based on trailing-7-day ROAS:
   - ≥ 2.5 ROAS → **+20%**
   - 2.2–2.4 ROAS → **+15%**
   - 2.0–2.2 ROAS (just above the ~1.9 breakeven) → **hold**
   - 1.6–1.8 ROAS → **cut 15%**
   `[10:44:29]`–`[10:45:00]`. Do not cut anything while total account spend is under $50/day — you'd be left with no traffic `[10:45:00]`–`[10:45:27]`.
9. **Keep bumps slow even at higher spend:** a $12.50/day ad set jumping to $25-50 is fine, but a $100/day ad set should not jump to $200-300 — always slow, compounding bumps, not leaps `[10:45:27]`–`[10:45:58]`.
10. **Expect ROAS to soften as spend rises** (an inverse relationship) until the ad account accumulates enough good ads to stabilize — this is normal, not a sign to over-engineer the account structure `[10:46:22]`–`[10:47:23]`.
11. **Accountability check whenever results disappoint:** you're only allowed to be frustrated with ad performance if you've actually shipped more than 7 designs/day over the trailing 7 days — track this in a simple spreadsheet `[10:47:23]`–`[10:48:15]`. Any plateau (at $200/day, $500, $1,000, or $2,000 in sales) has the same prescribed fix: commit to 7 designs/day for the next 30 days, then re-check `[10:48:44]`.

## Numbers and thresholds
- Target consistency threshold: $1,000-2,000/day ad spend `[10:30:23]`
- Static test spend: $12.50/day × Thu-Sun ≈ $50, occasionally up to $60 `[10:35:55]`
- Average cost per purchase (this account): ≈ $19 `[10:36:55]`
- Winner bar on a weekend test: 1-2 purchases on ~$50-60 spend ≈ 2.0 ROAS `[10:36:55]`–`[10:37:24]`
- Loser bar: $0 purchases and CPC > $1 `[10:37:24]`
- New ads added per week: 5-10 (up to ~15 total in the ad set at this budget) `[10:37:50]`–`[10:38:21]`
- Budget bump cadence: every 2-3 days `[10:44:29]`
- Bump/cut bands (trailing 7-day ROAS): ≥2.5 → +20%; 2.2-2.4 → +15%; 1.8/2.0-2.2 → hold; 1.6-1.8 → -15% `[10:44:29]`–`[10:45:00]` (this lesson does not define a band below 1.6 — 5.5's scorecard lesson adds a <1.6 → -20% band)
- Breakeven ROAS: ≈ 1.9 `[10:44:29]`
- Static-ad hit rate: roughly 1 winner per 20 ads tested (≈ 4 batches of 5) `[10:44:29]`
- Accountability bar: > 7 designs/day sustained over the trailing 7 days `[10:47:49]`
- Design commitment to break a plateau: 7 designs/day for 30 days, then reassess `[10:48:44]`
- Note: earlier in the same lesson the instructor gives a looser "bump by 20 to 30%" rule of thumb `[10:42:55]` before the precise 15-20% bands above `[10:44:29]` — treat the precise bands as the operative rule; the 20-30% mention is a rounder approximation of the same idea.

## Decision rules
- If trailing-7-day ROAS ≥ 2.5 → bump budget +20%.
- If trailing-7-day ROAS is 2.2-2.4 → bump +15%.
- If trailing-7-day ROAS is 1.8-2.2 (near the ~1.9 breakeven) → hold, no change.
- If trailing-7-day ROAS is 1.6-1.8 → cut -15%.
- If total account spend is under $50/day → never cut, regardless of ROAS — there isn't enough traffic to spare.
- If none of the current catalog designs meet the promotion bar → pick the best available, or promote none this cycle, but keep prepping the next design batch regardless.
- If static ads underperform (no purchases, high CPC) across the board → treat it as normal variance, not a broken system; the fix is more/better designs, never a new account structure, new targeting, or new ad copy.
- If sales plateau at any level → don't touch structure or targeting; hit 7 designs/day for 30 days first.

## Tools and services named
- Meta Ads Manager — ad set budget field and "increase daily budget by X%" shortcut used for the bump/cut routine

## Watch-outs
- Mixing up ad vs. ad-set vs. campaign edits is an easy, common mistake — the naming convention in step 3 exists specifically to prevent it `[10:34:24]`.
- Don't over-index on "spend more" as the fix — budget alone doesn't repair a design/CPC problem `[10:40:43]`–`[10:41:10]`.
- Even a well-performing ad set should get slow, percentage-based bumps, not large jumps, even once spend is much higher (e.g., $100/day) `[10:45:27]`–`[10:45:58]`.
- The two budget-bump percentages given in this lesson (a rounder "20-30%" and the later precise 15-20% table) are not identical — use the precise table as the working rule.
- Resist chasing account-structure/targeting/ad-copy tweaks when results disappoint — the instructor frames this pull as a brain-wiring bias toward novelty, more fully explained in 5.5 `[10:47:23]`–`[10:47:49]`.

## Related
[[ad-scaling]], [[budget-bump-rules]], [[static-ads]], [[design-cadence]], [[unit-economics]]
