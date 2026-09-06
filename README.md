# Ecom POD Brain — WeScale 2026

Private knowledge base built from the **WeScale 2026 Course (V3)** by Meg Heckman — a 12-hour
print-on-demand curriculum taught across 5 stages. Same shape as `chase-chappell-brain`: the
knowledge lives in markdown next to the source, so an agent **reads the file** instead of guessing.

Captured 2026-09-06 from the Skool classroom Sam has access to.

> Private archive of a course Sam paid for. Not for redistribution. Numbers taught in the course are
> the instructor's *claims* — the notes mark them as such. Not financial advice.

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
| [`resources/all-lesson-links.md`](resources/all-lesson-links.md) | 42 unique resource links, deduped |
| [`resources/sheets/`](resources/sheets/) | The V3 Course Resources spreadsheet — 9 tabs as CSV + markdown |

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
