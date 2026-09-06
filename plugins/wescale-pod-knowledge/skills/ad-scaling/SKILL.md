---
name: ad-scaling
description: "Decide whether to raise, hold, or cut ad budget using trailing-7-day ROAS bands. Use when they ask should I scale, how fast to increase budget, my ROAS dropped. Do NOT raise budget before the 2.0-for-two-days gate (diagnose-store). Do NOT read a single day's ROAS as signal."
argument-hint: "Trailing 7-day ROAS, current daily budget, days since last change"
---

# Ad scaling bands

Read `${CLAUDE_PLUGIN_ROOT}/knowledge/concepts/ad-scaling-bands.md` and `sources/5-3-scaling-your-ads.md`.

## The bands

Read **trailing-7-day** ROAS. Adjust every 2-3 days. Skip Monday and Tuesday reviews.

| Trailing 7-day ROAS | Action |
|---|---|
| ≥ 2.5 | +20% |
| 2.2 – 2.4 | +15% |
| 1.8 – 2.2 | hold |
| 1.6 – 1.8 | −15% |
| < 1.6 | −20% |

Breakeven is about **1.9**, which sits inside the hold band — "hold" means "you are roughly at breakeven, don't feed it yet."

Never cut below $50/day total spend. Account-level: overall ROAS under 1.8 → stop bumping, launch new creatives only.

## Say the margin out loud

Scaling at 2.0 ROAS is scaling at roughly **zero margin** (2.0 → ~0%, 2.5 → ~10%, 3.0 → ~18%, 4.0 → ~25-30%). That can be a deliberate choice for catalog momentum, but never let them think 2.0 means profitable. See `concepts/unit-economics.md`.

## Feed it while scaling

Budget increases alone plateau. 5-10 new ads/week, up to ~15 live in the ad set. Static-ad hit rate is about 1 winner per 20. Weekend static test: $12.50/day Thu-Sun; winner is 1-2 purchases on ~$50-60 spend, loser is zero purchases with CPC above $1.
