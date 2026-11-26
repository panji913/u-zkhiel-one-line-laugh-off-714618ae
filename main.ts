import { mkdirSync, writeFileSync } from "node:fs";

// One funny line for the One-Line Laugh-Off: a single joke that lands on a
// cold read, with no setup notes and no explanation. The twist is the turn:
// the assistant, not the human, is the one with the grievance.
// The line is 113 characters, inside the gate's 1-200, and is written with
// no trailing newline so the file holds exactly the joke.
const LINE =
  "My AI assistant filed a complaint about me — apparently 'do it again, but better' counts as workplace harassment.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
