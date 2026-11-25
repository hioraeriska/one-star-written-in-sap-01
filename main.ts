import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Star, Written in Sap: a houseplant's one-star review of its human.
// The line is the whole entry: one grievance (watering on a gym schedule),
// one concrete detail (keen in January, gone by February), one sting at
// the end (the leaves are the cancellation letter he never sent).
const LINE =
  "One star. He waters me on his gym schedule \u2014 keen in January, gone by February \u2014 and my leaves are the cancellation letter he never bothered to send.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
