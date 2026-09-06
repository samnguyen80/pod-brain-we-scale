# CLAUDE.md — ecom-pod-brain-by-wescale

Private knowledge base distilled from the WeScale 2026 (V3) print-on-demand course by Meg Heckman,
plus her YouTube channel archive.

## Invariants

- **Private repo.** This is Sam's archive of a course he paid for. Do not publish it, mirror it to a
  public repo, or paste transcript content into anything outward-facing.
- **The markdown is the brain.** Skills and agents must `Read` the notes, not restate them from
  memory. If a claim isn't in a file here, it isn't doctrine.
- **Claims stay marked.** Revenue and performance figures are the instructor's claims, not verified
  results. Notes tag them `(claimed)` — keep that tag when you quote them anywhere.
- **Transcripts are source, not product.** Write synthesis in `knowledge/`; leave
  `transcripts/` and `channel/transcripts/` as the raw record.

## Layout

| Path | What |
|---|---|
| `knowledge/` | The distilled brain — index, foundations, concepts, one card per lesson |
| `course/` | Skool metadata: curriculum table, per-lesson description + resource links |
| `transcripts/` | Course transcript, one file per chapter of the 12h master video |
| `channel/` | Meg Heckman's YouTube channel — transcript per video + index |
| `resources/` | The V3 Course Resources spreadsheet (9 tabs) + every lesson link, deduped |
| `scripts/` | Bun scripts that (re)build the channel archive |

## Rules

- Bun for scripts. Not Node, not Python.
- Vietnamese with full diacritics when writing for Sam; English is fine inside the knowledge notes
  since the source is English.
- No bold (`**`) inside vault markdown — hard to read raw.
- When adding a lesson note, keep the existing card structure (job → playbook → numbers →
  tools → watch-outs → related) so the files stay diffable and skimmable.

## Provenance

Captured 2026-09-06:
- Course tree + descriptions + resources — Skool `__NEXT_DATA__`, 35 authenticated page fetches
- Course transcript — `yt-dlp` auto-captions of `hduC-C8pBpE`, rolling-caption dedupe, split on the
  video's own 25 chapters (126,080 words)
- Resource spreadsheet — Google Sheets xlsx export, parsed per tab to CSV + markdown
- Channel archive — `scripts/fetch-channel.ts`
