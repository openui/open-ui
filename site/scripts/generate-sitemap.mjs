import { readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const site = "https://open-ui.org";
const distDirUrl = new URL("../dist/", import.meta.url);
const distDir = fileURLToPath(distDirUrl);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(full) : full;
    }),
  );
  return files.flat();
}

const htmlFiles = (await walk(distDir))
  .filter((file) => file.endsWith(".html"))
  .filter((file) => !file.endsWith(`${path.sep}404.html`) && !file.endsWith(`${path.sep}500.html`));

const urls = htmlFiles.map((file) => {
  const rel = file
    .replace(distDir, "")
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/index\.html$/, "");

  const url = `${site}/${rel}`.replace(/([^:]\/)\/+/g, "$1");
  return url.endsWith("/") ? url : `${url}/`;
});

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n") +
  `\n</urlset>\n`;

await writeFile(path.join(distDir, "sitemap.xml"), xml, "utf8");
await writeFile(
  path.join(distDir, "sitemap-index.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${site}/sitemap.xml</loc></sitemap>\n</sitemapindex>\n`,
  "utf8",
);
