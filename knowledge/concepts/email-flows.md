# Email flows

Where the model goes from $1-in/$2-back to $1-in/$3-4-back. Email revenue carries no acquisition
cost, so it lands almost entirely on the margin line.

## The targets

| Metric | Target |
|---|---|
| Email share of revenue | 25-30% |
| Flows vs campaigns | ~50/50 |
| Popup signup rate | 5-10% |
| Popup delay | 8 seconds (tested) |
| Popup discount | 10-15% |
| Start campaigns at | 20 subscribers |
| Campaign cadence | 1/week → 2-3/week |
| Sunset segment | no opens in 120 days |

Klaviyo is free to 250 profiles, then roughly $50-100/month. Advanced flows are held back until
$10,000 in sales — before that the list is too small to be worth the setup time.

## Flows before campaigns

The reference account shows flows generating $87K against campaigns' $45K — about two thirds of
email revenue from automation `(claimed)`. Flows run once and keep paying; campaigns cost time every
week. Build the automated sequences first.

Six core flows, each with its Klaviyo trigger:

| Flow | Trigger |
|---|---|
| Welcome (6 emails) | popup signup |
| Abandoned checkout | checkout started |
| Abandoned cart | add to cart |
| Browse abandonment | viewed product |
| Site abandonment | active on site |
| Sunset | unengaged-120 segment, 5-day delay, re-engages on any open |

Post-purchase, birthday, VIP and winback are the *advanced* tier, deliberately held back until
$10,000 in sales — before that the list is too thin for them to fire meaningfully.

The popup itself: 8-second delay, two-step (email, then confirm), excluded from /cart and /checkout
so it never interrupts someone already buying. Campaigns default to the Engaged-90 segment; the
full list gets used only for BFCM.

## Campaign rhythm

Start at one per week and alternate: one content email, one sales email. The alternation is what
keeps a list from training itself to ignore you — a list that only ever receives discounts stops
opening anything else.

Work up to 2-3 per week. The flagship brand sends 3.

## The cautionary part of the case study

The brand in this lesson had already done ~$400,000 in sales before setting up email at all
`(claimed)`. The course tells that story as a success, but the honest reading is the opposite: that
is a large amount of repeat revenue left uncollected. Email is placed in stage 5 for sequencing
reasons — it needs traffic to be worth anything — but the popup can go up the day the store opens.

## Metrics to watch

Open rate, click rate, submit rate, subscribe rate, unsubscribe rate. Rising unsubscribes against a
flat open rate usually means cadence outran content value.

## Caveat

The month-by-month revenue figures in this lesson include two revenue totals that don't reconcile
($443K vs $431K for the same period). The source card flags them; the directional story — email
share growing from ~10% to ~20% of revenue as the list matures — is the usable part.

Sources: [5.1](../sources/5-1-email-marketing.md) · [5.5](../sources/5-5-your-scaling-roadmap.md)

Related: [[unit-economics]], [[conversion-diagnosis]]
