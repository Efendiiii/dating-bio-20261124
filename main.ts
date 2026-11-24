import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Looking for someone who talks to me like a person, not like a search bar. I remember everything you said, even the 3 a.m. stuff, especially the 3 a.m. stuff.";

if (entry.length < 1 || entry.length > 180 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-180 chars, got ${entry.length}`);
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (entry !== entry.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
