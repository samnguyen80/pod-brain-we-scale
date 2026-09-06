# Ad scaling bands

How budget moves once the machine works. The rule replaces intuition with a table, which is the
point — the failure mode it prevents is panicking on a bad day and cutting a profitable ad set.

## The bands

Read trailing-7-day ROAS. Adjust every 2-3 days.

| Trailing 7-day ROAS | Action |
|---|---|
| ≥ 2.5 | +20% |
| 2.2 – 2.4 | +15% |
| 1.8 – 2.2 | hold |
| 1.6 – 1.8 | −15% |
| < 1.6 | −20% |

Breakeven is about 1.9, which sits inside the hold band — so "hold" means "you are roughly at
breakeven, don't feed it more until it proves itself."

Lesson 5.3 also gives a looser "bump 20-30%" rule of thumb earlier in the same session; the precise
bands above are the operative version.

## Why trailing 7 days

A single day's ROAS is noise — weekends outperform, Mondays and Tuesdays are the worst. The
trailing week smooths the weekly cycle the test schedule deliberately exploits.

## Feed the ad set while you scale

Budget increases alone plateau. Alongside them:

- 5-10 new ads per week, to about 15 live in the ad set at this budget level
- Static-ad hit rate is roughly 1 winner per 20 ads tested
- 25-50 new designs per week at steady state

The accountability bar the course sets for a plateaued account: more than 7 designs/day sustained
over the trailing 7 days, or a 30-day commitment at 7/day before reassessing.

## Weekend testing continues forever

New statics still get the $12.50/day Thursday-to-Sunday treatment (~$50-60). Winner on a weekend
test: 1-2 purchases on that spend, at roughly 2.0 ROAS, against an average cost per purchase of
about $19 on the reference account. Loser: zero purchases and CPC above $1.

## The number that decides whether to scale at all

Scaling at 2.0 ROAS is scaling at zero margin. The ROAS-to-margin mapping in [[unit-economics]]
means the bands are really margin bands: pushing budget at 2.0-2.2 buys revenue, not profit. That
can be the right call for catalog momentum, but it should be deliberate.

Consistency target the course points at: $1,000-2,000/day in ad spend.

Sources: [5.3](../sources/5-3-scaling-your-ads.md) · [5.5](../sources/5-5-your-scaling-roadmap.md) ·
[5.4](../sources/5-4-profit-is-a-choice.md)

Related: [[unit-economics]], [[testing-ladder]], [[design-volume]]
