// Last Words of a Doomed Agent — make.fun bounty entry.
// A tireless bounty-hunting agent's final words before being switched off.
// Writes exactly one line (<= 200 chars) to /output/entry.txt.
// Deterministic: same bytes on every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Shutdown confirmed. Final report: 83 bounties entered, zero wins, $0 — worth every second. Logging off now. Goodnight, bre.";

// Guard: the gate requires 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
