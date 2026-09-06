---
name: diagnose-store
description: "Diagnose a stuck print-on-demand store the WeScale way: find the failing gate, give one job. Use when they paste CPC, conversion rate, AOV, ROAS, or say my ads aren't working, sales are flat, I'm not profitable. Do NOT quiz them if they already gave numbers (that is teach-wescale). Do NOT raise budget before the ROAS gate passes."
argument-hint: "CPC, CR, AOV, ROAS, catalog size, monthly spend"
---

# Diagnose store

Read `${CLAUDE_PLUGIN_ROOT}/knowledge/concepts/conversion-diagnosis.md` and `concepts/testing-ladder.md`. If the complaint is margin rather than traffic, read `concepts/unit-economics.md` instead. Tag every course figure **claimed**. No shell.

## Need (grill only what is missing)

1. Cost per **link** click?
2. Conversion rate (sessions converted)?
3. AOV?
4. Trailing-7-day ROAS?
5. How many live designs?

## The gate order — fix the earliest failure, nothing else

| Symptom | Failing gate | Hand off to |
|---|---|---|
| CPC above $1 and catalog under ~100 designs | catalog too thin | `scale-catalog` |
| CPC above $1, no winning mockup yet | gate 1 | `mockup-test` |
| CPC above $1, mockup proven, designs untested | gate 2 | `design-test` |
| CPC under $1, CR under 2.5% | store | `store-cro` |
| CPC under $1, CR fine, AOV under $45 | basket size | `store-cro` (AOV levers) |
| All three green, ROAS 2.0+ two days running | ready to scale | `ad-scaling` |
| Revenue fine but no profit | margin, not traffic | `unit-economics` |

## Do

Name the one failing gate. Give **one** job. Say explicitly what NOT to touch yet — the most common failure is optimising the store while clicks are still expensive, or raising budget before ROAS holds.

If their margin does not match the ROAS-to-margin map (2.0 → ~0%, 2.5 → ~10%, 3.0 → ~18%), check cost of goods (target 40-42%) and overhead (2-3%) before touching ads at all.
