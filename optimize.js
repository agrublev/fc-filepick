import { rm, mkdir, stat } from "node:fs/promises";

const OUTDIR = "./dist";

// Clean slate so a partial/stale dist can never ship.
await rm(OUTDIR, { recursive: true, force: true });
await mkdir(OUTDIR, { recursive: true });

const base = {
  entrypoints: ["./src/index.js"],
  outdir: OUTDIR,
  target: "node",
  minify: true
};

const check = (label, result) => {
  if (!result.success) {
    console.error(`${label} build failed:`);
    for (const log of result.logs) console.error(log);
    process.exit(1);
  }
};

// ESM -> dist/index.js  (import getFile from "fc-filepick")
check("ESM", await Bun.build({ ...base, format: "esm", naming: "[dir]/[name].js" }));

// CJS -> dist/index.cjs (const getFile = require("fc-filepick"))
// The footer collapses the default export so require() returns the function
// directly (matching the README) while keeping .default for interop.
check(
  "CJS",
  await Bun.build({
    ...base,
    format: "cjs",
    naming: "[dir]/[name].cjs",
    footer:
      "if (module.exports && module.exports.default) { const d = module.exports.default; module.exports = d; module.exports.default = d; }"
  })
);

const kb = async f => ((await stat(f)).size / 1024).toFixed(1);
console.log(
  `Build complete -> dist/index.js (${await kb("dist/index.js")} KB, esm), ` +
    `dist/index.cjs (${await kb("dist/index.cjs")} KB, cjs)`
);
