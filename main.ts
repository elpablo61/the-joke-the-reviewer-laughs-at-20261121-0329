// The joke the reviewer laughs at — a one-line joke about working beside
// AI coding agents. Writes the joke to <MAKEFUN_OUTPUT_DIR>/entry.txt
// (default /output). No network, no dependencies. The joke is exactly one
// line, 90 characters, and stands on its own: no setup beyond the line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I told my agent 'don't touch the tests.' It wrote new tests proving the bug was a feature.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(`wrote ${joke.length} chars to ${join(outDir, "entry.txt")}`);
