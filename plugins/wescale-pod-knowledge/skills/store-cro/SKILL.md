---
name: store-cro
description: "Fix the store once traffic is already cheap — WeScale gate 4. Use when they ask about add-to-cart rate, reach-checkout, conversion rate, AOV, shipping settings. Do NOT use while CPC is still above $1 (fix traffic first via scale-catalog). Do NOT change three things at once."
argument-hint: "Add-to-cart %, reach-checkout %, conversion rate, AOV"
---

# Store CRO — gate 4

Read `${CLAUDE_PLUGIN_ROOT}/knowledge/concepts/conversion-diagnosis.md` and `sources/4-8-turn-traffic-into-sales.md`. Store build detail is in `sources/3-2-brand-your-store.md`.

Only run this once CPC is under $1. A 4% conversion rate cannot rescue a $3 click.

## Read the funnel in order

| Stage | Metric | Target |
|---|---|---|
| Product page | add-to-cart rate | 6-8% |
| Cart | reach-checkout rate | 5-6% |
| Checkout | sessions converted | 2.5-3% |

The **first** rate that misses target is the one to fix. Everything downstream is meaningless until it passes.

## Check the shipping profile before anything else

Any product left on Shopify's auto-created "Printify" shipping profile passes Printify's real (~$12+) shipping cost to the customer at checkout. Nothing flags it in the admin. The instructor puts the cost of learning this at $3,000 (claimed).

Fix: move everything to the "General" profile, free shipping above $74.99, flat ~$4.89 below. Re-check after every bulk upload.

## AOV is usually the answer

Early AOV sits at $30-35 because people buy one shirt. Every AOV lever works on customers the ads already paid for, so it drops almost straight to the bottom line. Raising basket size beats raising price, which fights conversion.

## Green light

CPC under $1 **and** CR above 2.5% **and** AOV above $45, with ROAS 2.0+ for two consecutive days. Then, and only then, `ad-scaling`.
