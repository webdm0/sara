import { readdir, readFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const distDirectory = resolve("dist");

async function collectCssFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory()
        ? collectCssFiles(path)
        : Promise.resolve(extname(entry.name) === ".css" ? [path] : []);
    }),
  );

  return files.flat();
}

function fail(message) {
  console.error(`Browser compatibility check failed: ${message}`);
  process.exitCode = 1;
}

let cssFiles;

try {
  cssFiles = await collectCssFiles(distDirectory);
} catch (error) {
  fail(`could not read ${distDirectory}. Run the production build first.`);
  console.error(error);
  process.exit();
}

if (cssFiles.length === 0) {
  fail("the production build contains no CSS files.");
  process.exit();
}

const stylesheets = await Promise.all(cssFiles.map((file) => readFile(file, "utf8")));
const css = stylesheets.join("\n");
const mediaQueries = css.match(/@media[^{]+/g) ?? [];
const rangeQueries = mediaQueries.filter((query) => /[<>]=?/.test(query));

if (rangeQueries.length > 0) {
  fail(
    `unsupported media-query range syntax was emitted: ${rangeQueries.join(", ")}`,
  );
}

if (!/@media\s*\(\s*max-width\s*:\s*820px\s*\)/.test(css)) {
  fail("the critical mobile breakpoint at 820px is missing.");
}

const indexHtml = await readFile(join(distDirectory, "index.html"), "utf8");
const viewportTag = indexHtml.match(/<meta[^>]*name=["']viewport["'][^>]*>/i)?.[0];

if (!viewportTag || !/width=device-width/i.test(viewportTag)) {
  fail("the generated page is missing a device-width viewport meta tag.");
}

if (process.exitCode) {
  process.exit();
}

console.log(
  `Browser compatibility check passed (${cssFiles.length} stylesheet${cssFiles.length === 1 ? "" : "s"}).`,
);
