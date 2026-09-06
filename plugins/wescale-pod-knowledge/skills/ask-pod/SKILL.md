---
name: ask-pod
description: "Route a print-on-demand question to the right WeScale skill. Use when the user says /pod, ask WeScale, which skill, or the ask is ambiguous. Do NOT run a classroom lesson (teach-wescale). Do NOT invent thresholds — every number lives in knowledge/."
argument-hint: "Question"
---

# Ask POD

Pick **one** skill, then run it. Knowledge is in `${CLAUDE_PLUGIN_ROOT}/knowledge/` — skills point, they do not own facts. Start from `${CLAUDE_PLUGIN_ROOT}/knowledge/foundations/playbook.md` when you need the whole shape.

| They want | Skill |
|---|---|
| Teach me / classroom / quiz me on a gate | `teach-wescale` |
| They paste numbers (CPC, CR, AOV, ROAS) and are stuck | `diagnose-store` |
| Which photo gets the click / first $50 test | `mockup-test` |
| Testing ~100 designs behind a winning mockup | `design-test` |
| Catalog is small, CPC still above $1, how many designs | `scale-catalog` |
| Add-to-cart, checkout, conversion rate, AOV, shipping | `store-cro` |
| Raise or cut budget, ROAS bands, scaling spend | `ad-scaling` |
| Klaviyo, popup, welcome flow, abandoned cart, campaigns | `email-flows` |
| Pricing, margin, COGS, profit per shirt, P&L | `unit-economics` |
| Niche, brand name, logo, brand why, store setup | `brand-setup` |
| Design research, making 100 designs, mockup specs | `design-system` |

The gates run in order — mockup → design → catalog → conversion → budget. If they ask about a later gate while an earlier one is failing, say so and route to the earlier one.

Ambiguous → one clarifying question, then route. Unrelated coding request → **no** WeScale skill fires.
