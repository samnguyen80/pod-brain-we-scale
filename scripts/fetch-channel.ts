const REPO = "/Users/sam/orca/workspaces/ceo-brain/ecom-pod/30-projects/ecom-pod-brain-by-wescale";
const CACHE = `${REPO}/.cache/channel`;
const TRANSCRIPTS = `${REPO}/channel/transcripts`;
const CHANNEL_URL = "https://www.youtube.com/@itsmegheckman/videos";
const YT_DLP = "/Users/sam/.local/bin/yt-dlp";
const EXPECTED_MINIMUM_VIDEOS = 200;

type Video = { id: string; title: string };
type Word = { t: number; w: string };
type Candidate = Video & {
  info: Record<string, unknown>;
  vtt: string;
  baseSlug: string;
};
type IndexRow = Video & {
  published: string;
  duration: string;
  views: string;
  words: number | null;
  file?: string;
  skipReason?: string;
};

const tsToSec = (t: string) => {
  const [h, m, s] = t.split(":");
  return +h * 3600 + +m * 60 + parseFloat(s);
};

const hhmmss = (seconds: number) =>
  [Math.floor(seconds / 3600), Math.floor((seconds % 3600) / 60), Math.floor(seconds % 60)]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");

const duration = (seconds: unknown) => {
  const value = Number(seconds);
  if (!Number.isFinite(value) || value < 0) return "—";
  const hours = Math.floor(value / 3600);
  return `${hours}:${String(Math.floor((value % 3600) / 60)).padStart(2, "0")}:${String(Math.floor(value % 60)).padStart(2, "0")}`;
};

const published = (info: Record<string, unknown>) => {
  const raw = String(info.upload_date ?? "");
  if (/^\d{8}$/.test(raw)) return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
  const timestamp = Number(info.timestamp);
  return Number.isFinite(timestamp) ? new Date(timestamp * 1000).toISOString().slice(0, 10) : "—";
};

const views = (value: unknown) => {
  const number = Number(value);
  return Number.isFinite(number) ? number.toLocaleString("en-US") : "—";
};

const slug = (title: string) =>
  title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "untitled";

const markdownText = (value: string) => value.replace(/[\\|\[\]]/g, "\\$&").replace(/\s+/g, " ").trim();

const runYtDlp = async (args: string[], captureOutput = false) => {
  const process = Bun.spawn([YT_DLP, ...args], {
    stdout: captureOutput ? "pipe" : "inherit",
    stderr: "inherit",
  });
  const output = captureOutput ? await new Response(process.stdout).text() : "";
  return { exitCode: await process.exited, output };
};

const vttFilesByVideoId = async () => {
  const byId = new Map<string, string[]>();
  const glob = new Bun.Glob("*.vtt");
  for await (const name of glob.scan({ cwd: CACHE, onlyFiles: true })) {
    const match = name.match(/^([A-Za-z0-9_-]{11})(?:\.[^.]+)?\.vtt$/);
    if (!match) continue;
    const files = byId.get(match[1]) ?? [];
    files.push(`${CACHE}/${name}`);
    byId.set(match[1], files);
  }
  return byId;
};

const preferredVtt = (files: string[]) =>
  files.find((file) => file.endsWith(".en.vtt")) ??
  files.find((file) => /\.en(?:[-_][^.]+)?\.vtt$/.test(file)) ??
  files[0];

// --- parse VTT into (start, text) cues, stripping karaoke tags -------------
// This is copied from split-transcript.ts. YouTube's auto-captions roll the
// previous cue forward, so parsing must preserve its longest-suffix dedupe.
const parseVtt = async (file: string) => {
  const raw = await Bun.file(file).text();
  const cues: { start: number; text: string }[] = [];
  for (const block of raw.split(/\r?\n\r?\n/)) {
    const lines = block.split(/\r?\n/);
    const timeLine = lines.find((line) => line.includes("-->"));
    if (!timeLine) continue;
    const start = tsToSec(timeLine.split("-->")[0].trim().split(" ")[0]);
    const text = lines
      .slice(lines.indexOf(timeLine) + 1)
      .join(" ")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (text) cues.push({ start, text });
  }

  // --- de-duplicate YouTube's rolling captions -----------------------------
  // Each cue repeats the tail of the previous one; keep only the new suffix.
  const words: Word[] = [];
  let prev: string[] = [];
  for (const cue of cues) {
    const cur = cue.text.split(" ");
    let overlap = 0;
    const max = Math.min(prev.length, cur.length);
    for (let n = max; n > 0; n--) {
      if (prev.slice(prev.length - n).join(" ") === cur.slice(0, n).join(" ")) {
        overlap = n;
        break;
      }
    }
    for (const w of cur.slice(overlap)) words.push({ t: cue.start, w });
    prev = cur;
  }
  return words;
};

const markdownFor = (candidate: Candidate, words: Word[]) => {
  const info = candidate.info;
  const paragraphs: string[] = [];
  for (let i = 0; i < words.length; i += 90) {
    const chunk = words.slice(i, i + 90);
    paragraphs.push(`[${hhmmss(chunk[0].t)}] ${chunk.map((word) => word.w).join(" ")}`);
  }
  return [
    `# ${String(info.title ?? candidate.title)}`,
    "",
    "Channel: Meg Heckman (@itsmegheckman)",
    `Video: https://www.youtube.com/watch?v=${candidate.id}`,
    `Published: ${published(info)}  ·  Duration: ${duration(info.duration)}  ·  Views: ${views(info.view_count)}`,
    "",
    "---",
    "",
    paragraphs.join("\n\n"),
    "",
  ].join("\n");
};

const infoFor = async (id: string) => {
  const file = Bun.file(`${CACHE}/${id}.info.json`);
  if (!(await file.exists())) return undefined;
  try {
    return JSON.parse(await file.text()) as Record<string, unknown>;
  } catch {
    return undefined;
  }
};

const main = async () => {
  await Bun.$`mkdir -p ${CACHE} ${TRANSCRIPTS}`.quiet();

  console.log("Fetching the complete channel playlist…");
  const playlist = await runYtDlp([
    "--flat-playlist",
    "--print",
    "%(id)s|||%(title)s",
    CHANNEL_URL,
  ], true);
  const videos = playlist.output
    .split(/\r?\n/)
    .flatMap((line): Video[] => {
      const separator = line.indexOf("|||");
      if (separator < 0) return [];
      const id = line.slice(0, separator).trim();
      const title = line.slice(separator + 3).trim();
      return /^[A-Za-z0-9_-]{11}$/.test(id) && title ? [{ id, title }] : [];
    });

  if (playlist.exitCode !== 0) console.error(`Playlist command exited ${playlist.exitCode}; using its returned entries.`);
  if (videos.length < EXPECTED_MINIMUM_VIDEOS) {
    throw new Error(`Expected at least ${EXPECTED_MINIMUM_VIDEOS} videos, but yt-dlp returned ${videos.length}. Stopping rather than archiving a partial channel.`);
  }
  console.log(`Found ${videos.length} videos. Downloading captions and metadata only…`);

  const download = await runYtDlp([
    "--skip-download",
    "--write-auto-subs",
    "--write-subs",
    "--sub-langs",
    "en.*,en",
    "--sub-format",
    "vtt",
    "--write-info-json",
    "--ignore-errors",
    "--no-abort-on-error",
    "-o",
    `${CACHE}/%(id)s.%(ext)s`,
    CHANNEL_URL,
  ]);
  if (download.exitCode !== 0) console.error(`Caption download exited ${download.exitCode}; continuing with every VTT yt-dlp produced.`);

  const vtts = await vttFilesByVideoId();
  const skipped = new Map<string, string>();
  const candidates: Candidate[] = [];
  for (const video of videos) {
    const vtt = preferredVtt(vtts.get(video.id) ?? []);
    if (!vtt) {
      skipped.set(video.id, "no English VTT produced (unavailable, gated, or caption-less)");
      continue;
    }
    const info = await infoFor(video.id);
    if (!info) {
      skipped.set(video.id, "metadata info.json was not produced or could not be parsed");
      continue;
    }
    candidates.push({ ...video, info, vtt, baseSlug: slug(String(info.title ?? video.title)) });
  }

  const baseSlugCounts = new Map<string, number>();
  for (const candidate of candidates) {
    baseSlugCounts.set(candidate.baseSlug, (baseSlugCounts.get(candidate.baseSlug) ?? 0) + 1);
  }

  const indexed = new Map<string, IndexRow>();
  let totalWords = 0;
  for (const candidate of candidates) {
    const words = await parseVtt(candidate.vtt);
    if (!words.length) {
      skipped.set(candidate.id, "English VTT contained no readable caption words");
      continue;
    }
    const name = `${candidate.baseSlug}${baseSlugCounts.get(candidate.baseSlug)! > 1 ? `-${candidate.id}` : ""}.md`;
    await Bun.write(`${TRANSCRIPTS}/${name}`, markdownFor(candidate, words));
    totalWords += words.length;
    indexed.set(candidate.id, {
      id: candidate.id,
      title: String(candidate.info.title ?? candidate.title),
      published: published(candidate.info),
      duration: duration(candidate.info.duration),
      views: views(candidate.info.view_count),
      words: words.length,
      file: name,
    });
  }

  const rows = videos.map((video): IndexRow => {
    const completed = indexed.get(video.id);
    if (completed) return completed;
    const info = candidates.find((candidate) => candidate.id === video.id)?.info;
    return {
      ...video,
      title: String(info?.title ?? video.title),
      published: info ? published(info) : "—",
      duration: info ? duration(info.duration) : "—",
      views: info ? views(info.view_count) : "—",
      words: null,
      skipReason: skipped.get(video.id) ?? "no transcript written",
    };
  }).sort((a, b) => b.published.localeCompare(a.published));

  const transcribed = indexed.size;
  const index = [
    "# Meg Heckman YouTube channel archive",
    "",
    `${videos.length} videos · ${transcribed} transcribed · ${totalWords.toLocaleString("en-US")} words.`,
    "",
    "| Title | Published | Duration | Views | Words |",
    "| --- | --- | --- | ---: | ---: |",
    ...rows.map((row) => {
      const title = row.file
        ? `[${markdownText(row.title)}](transcripts/${row.file})`
        : `${markdownText(row.title)} — ${markdownText(row.skipReason ?? "skipped")}`;
      return `| ${title} | ${row.published} | ${row.duration} | ${row.views} | ${row.words?.toLocaleString("en-US") ?? "—"} |`;
    }),
    "",
  ].join("\n");
  await Bun.write(`${REPO}/channel/index.md`, index);

  console.log("\nArchive summary");
  console.log(`  Total videos found: ${videos.length}`);
  console.log(`  Transcripts written: ${transcribed}`);
  console.log(`  Videos skipped: ${skipped.size}`);
  for (const video of videos) {
    const reason = skipped.get(video.id);
    if (reason) console.log(`    ${video.id} — ${video.title}: ${reason}`);
  }
  console.log(`  Total words: ${totalWords}`);
};

await main();
