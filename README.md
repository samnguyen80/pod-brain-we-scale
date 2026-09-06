# Ecom POD Brain — WeScale 2026

Private knowledge base built from the **WeScale 2026 Course (V3)** by Meg Heckman — a 12-hour
print-on-demand curriculum taught across 5 stages. Same shape as `chase-chappell-brain`: the
knowledge lives in markdown next to the source, so an agent **reads the file** instead of guessing.

Captured 2026-09-06 from the Skool classroom Sam has access to.

> Private archive of a course Sam paid for. Not for redistribution. Numbers taught in the course are
> the instructor's *claims* — the notes mark them as such. Not financial advice.

## Skills

The knowledge ships as a plugin, so the gates are runnable rather than just readable.

| Command | Job |
|---|---|
| `/pod` | Router — which skill |
| `/pod-diagnose` | Paste your numbers → the one failing gate → one job |
| `/teach-wescale` | Classroom: one gate, you guess the threshold, one job |
| `/brand-setup` | Stage 1 — store, niche, name, brand why |
| `/design-system` | Stage 2 — research capped at 2h, 100 designs, mockup specs |
| `/mockup-test` | Gate 1 — which photo earns the click |
| `/design-test` | Gate 2 — which designs people want |
| `/scale-catalog` | Gate 3 — volume until catalog-wide CPC drops under $1 |
| `/store-cro` | Gate 4 — ATC → checkout → CR → AOV, in that order |
| `/ad-scaling` | Trailing-7-day ROAS bands decide the budget |
| `/email-flows` | Klaviyo popup, six core flows, campaign cadence |
| `/unit-economics` | Pricing, margin, and why ROAS 2.0 is breakeven |

Skills **Read** the notes in `knowledge/` — doctrine is not copied into the skills, so there is one
place to correct a number. `shared/RESOLVER.md` maps each intent to the file it should open.

### Install

```
/plugin marketplace add https://github.com/samnguyen80/pod-brain-we-scale.git
/plugin install wescale-pod-knowledge@wescale-pod
```

Or for one session without installing, from any directory:

```bash
claude --plugin-dir /path/to/pod-brain-we-scale/plugins/wescale-pod-knowledge
```

The plugin reaches the vault through `plugins/wescale-pod-knowledge/knowledge`, a symlink to the
repo-root `knowledge/`. That keeps the Obsidian vault at the top level while
`${CLAUDE_PLUGIN_ROOT}/knowledge/` still resolves for the skills.

| Ask | Expected |
|---|---|
| *"CPC is $2.40, should I redesign my store?"* | Routes to traffic, not the store — earlier gate fails first |
| *"ROAS is 2.1, can I scale?"* | Yes to the gate, but names that 2.0 is ~0% margin |
| *"Write a Python reverse-string function"* | **no** WeScale skill fires |

## The course in one screen

The entire course is **one 12-hour YouTube video**, chaptered per lesson:
[The ONLY Print on Demand Guide You Need for 2026](https://www.youtube.com/watch?v=hduC-C8pBpE) —
25 chapters, 126,080 transcript words.

| Stage | Lessons | What it delivers |
|---|---|---|
| 🏁 Intro | 0.1 | Course map, what the 5 stages do |
| 🍎 1) Branding | 1.1–1.4 | Store live, niche validated, brand + brand why |
| 👕 2) Design | 2.1–2.4 | Design research → 100 designs with AI → mockups |
| 🛍️ 3) Store | 3.1–3.3 | Products uploaded, store branded, business/legal setup |
| 📣 4) Marketing | 4.1–4.9 | Meta ads: mockup test → design test → catalog scaling → CRO |
| 🚀 5) Scaling | 5.1–5.6 | Email flows, viral ads, ad scaling, unit economics, roadmap |

Full lesson table with timestamps: [`course/curriculum.md`](course/curriculum.md)

## What's in here

| Path | What |
|---|---|
| [`knowledge/index.md`](knowledge/index.md) | Hub — start here |
| [`knowledge/foundations/playbook.md`](knowledge/foundations/playbook.md) | The whole method, synthesized |
| [`knowledge/foundations/glossary.md`](knowledge/foundations/glossary.md) | Terms and metrics |
| [`knowledge/concepts/`](knowledge/concepts/) | Doctrine — the testing system, pricing, email flows, scaling rules |
| [`knowledge/sources/`](knowledge/sources/) | One distilled card per lesson (playbook + numbers + watch-outs) |
| [`course/curriculum.md`](course/curriculum.md) | Every lesson: timestamp, transcript, note |
| [`course/lessons/`](course/lessons/) | Per-lesson metadata + the resources attached to it |
| [`transcripts/`](transcripts/) | Raw transcript, one file per chapter, timestamped |
| [`channel/index.md`](channel/index.md) | Meg Heckman's whole YouTube channel — 200 videos, 540k words |
| [`channel/transcripts/`](channel/transcripts/) | One transcript per channel video |
| [`resources/all-lesson-links.md`](resources/all-lesson-links.md) | 42 unique resource links, deduped |
| [`resources/sheets/`](resources/sheets/) | The V3 Course Resources spreadsheet — 9 tabs as CSV + markdown |

The channel archive overlaps the course by exactly one file: the 12-hour master video is on the
channel too, so it appears in `channel/transcripts/` as a single unsplit file as well as in
`transcripts/` as 25 chapters. The chaptered version is the one to read. The duplicate is left in
place deliberately — `channel/` is generated output, and hand-editing it would be undone by the
next rebuild.

## Rebuilding the channel archive

```bash
bun scripts/fetch-channel.ts                # full pass: list channel, download captions, render
SKIP_FETCH=1 bun scripts/fetch-channel.ts   # re-render from .cache/ only, no network
```

YouTube throttles hard on a 200-video caption pass — expect `HTTP 429` and an incomplete first run.
Top up the stragglers with a targeted `yt-dlp` call, then re-render with `SKIP_FETCH=1` rather than
paying for another full pass. A video reported as "caption-less" after a throttled run usually
isn't; check with `yt-dlp --list-subs` before believing it.

## How the pieces relate

```
transcripts/<lesson>.md      raw source, timestamped   (what was said)
        │
        ▼
knowledge/sources/<lesson>.md  distilled card          (what to do)
        │
        ▼
knowledge/concepts/<topic>.md  doctrine across lessons (why it works)
        │
        ▼
knowledge/foundations/playbook.md  the whole method    (the system)
```

`course/lessons/` runs parallel to that — it holds what Skool itself carries per lesson
(description, video timestamp, attached resource links), not the teaching content.

## Reading it in Obsidian

Open folder as vault → `knowledge/`. Source cards cross-link with `[[wikilinks]]`.

## How it was captured

| Piece | Method |
|---|---|
| Course tree, descriptions, resources | Skool `__NEXT_DATA__` per lesson page (35 pages, authenticated) |
| Transcript | `yt-dlp` auto-captions → dedupe rolling captions → split on the video's 25 chapters |
| Resource spreadsheet | Google Sheets → xlsx export → parsed to CSV + markdown per tab |

Rebuild scripts are not committed — the captured output is the artifact.
