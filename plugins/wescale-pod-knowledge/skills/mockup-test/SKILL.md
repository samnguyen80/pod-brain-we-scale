---
name: mockup-test
description: "Run WeScale gate 1, the mockup test: which photo earns the click, holding one design constant. Use when they ask how to run the first $50 test, which mockup wins, or paste mockup-test results. Do NOT use for testing designs (design-test). Do NOT judge a result under 5 link clicks."
argument-hint: "Round number, link clicks, cost per link click"
---

# Mockup test — gate 1

Read `${CLAUDE_PLUGIN_ROOT}/knowledge/sources/4-4-launch-mockup-test.md` and `sources/4-5-analyze-mockup-test.md`. Setup detail lives in `sources/4-3-prep-mockup-test.md`. Tag figures **claimed**.

You are testing the **photo**, not the design. One design, five photos.

## Build

| Setting | Value |
|---|---|
| Campaign | Sales objective, ad-set budget, no A/B test |
| Ad set | Website, optimise for **Purchase**, open/Advantage+, US, 18+ |
| Budget | $12.50/day (~$50 per round) |
| Schedule | Thursday morning → Sunday 11:55pm |
| Ads | 5, identical except the mockup image |

Set the end date at launch — the start date locks after publishing. Confirm the ad set optimises for Purchases before publishing; it cannot be changed later, only rebuilt.

## Judge

Never judge under **5 link clicks** — 1-3 is noise. Use cost per *link* click, not the default CPC column.

Winner: **under $1.00** cost per link click.

## Read a failed round

| Cost per link click | Diagnosis | Next round |
|---|---|---|
| under $1.00 | winner | reskin catalog, go to `design-test` |
| $1.00 – $1.50 | near miss, photo problem | iterate the near-winner, add a few fresh |
| $3 – $5 | the design is wrong, not the photo | new designs |
| over $5 | both wrong | start fresh |

Expect ~3 rounds. Only roughly 10-30% win on round one (claimed).

## Do not

Touch a running test. No pausing, no copy edits, no mid-window budget changes — the window is what you paid for.
