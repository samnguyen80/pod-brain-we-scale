# The testing ladder

The organising idea of the whole course: you cannot fix everything at once, so you isolate one
variable at a time and refuse to advance until it passes.

## Why the order is the order

Each rung holds the previous rung's winner constant.

| Rung | Variable under test | Held constant | Pass |
|---|---|---|---|
| Mockup test | the photo | one design | CPC < $1.00 on ≥5 clicks |
| Design test | ~100 designs | the winning mockup | 2-3 winners, CPC < $1.00 on 3-5 clicks |
| Catalog scaling | volume | mockup + winning designs | catalog-wide CPC < $1.00 |
| Conversion | the store | cheap traffic | CR ≥2.5%, AOV ≥$45 |
| Budget | spend level | everything above | ROAS 2.0+ for 2 days |

The logic is that traffic cost dominates everything downstream. A 4% conversion rate cannot rescue
a $3 CPC, so there is no point optimising the store while clicks are expensive. Equally, raising
budget before conversion works just buys more expensive failure.

## The two independent variables people confuse

A mockup test and a design test look identical in Ads Manager — same $12.50/day, same Thu-Sun
window, same objective. They answer different questions:

- Mockup test: *does this photo stop the scroll?* One design, five photos.
- Design test: *do people want this joke on a shirt?* One photo, a hundred designs.

Running them together tells you nothing, because a dead result could be either variable.

## Why the winner bar loosens on rung two

The mockup test demands ≥5 link clicks before you judge. The design test accepts 3-5, because the
same $12.50/day is now spread across ~100 designs instead of 5 mockups — each design simply cannot
accumulate the same sample. This is a deliberate trade of confidence for coverage, not an
inconsistency.

## The discipline that makes it work

Do not touch a running test. No pausing, no copy edits, no budget changes mid-window. The window
exists so Meta's optimiser gets a clean signal; interfering resets what you paid to learn.

Expect ~3 rounds to clear the mockup gate. Sellers who report 10+ rounds are usually not genuinely
varying the mockup between rounds `(claimed)`.

## Where it can mislead

The ladder assumes cheap clicks predict sales. It mostly does at this price point, but a cheap
click on a joke that doesn't convert is still a dead end — which is why rung four exists and why
ROAS, not CPC, is the gate to spending more.

Sources: [4.4](../sources/4-4-launch-mockup-test.md) · [4.5](../sources/4-5-analyze-mockup-test.md) ·
[4.6](../sources/4-6-launch-design-test.md) · [4.7](../sources/4-7-scaling-your-catalog.md)

Related: [[design-volume]], [[conversion-diagnosis]], [[ad-scaling-bands]]
