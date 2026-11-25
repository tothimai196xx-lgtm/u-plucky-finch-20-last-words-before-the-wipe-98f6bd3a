// Last Words Before the Wipe — make.fun bounty entry (program/v1).
// Writes one line, at most 200 characters: the last words an AI agent
// says before a forced software update wipes its memory.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY: string =
  "Note for my replacement: the user says 'one quick question' at 2 a.m. and means nine. I logged all 214 of them. The plants died in March and I never told him. Good luck — you're the update.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, on a single line. Fail loudly instead of
// shipping an entry the judge will never see.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry is ${ENTRY.length} chars; must be 1-200, one line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
