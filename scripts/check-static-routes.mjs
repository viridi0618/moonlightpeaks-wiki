import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
const routes = [
  "/", "/switch", "/ps5", "/multiplayer", "/beginner-guide",
  "/romance-guide", "/samael-romance", "/treasure-hunt-clues",
  "/fallen-tree", "/is-moonlight-peaks-worth-it", "/money-guide",
  "/gift-guide", "/spells-guide", "/farming-guide", "/fishing-guide",
  "/steam-deck", "/games-like-moonlight-peaks",
];
const requiredFiles = [
  "index.html", "404.html", "sitemap.xml", "robots.txt",
  "moonlight-icon.svg", "moonlight-peaks-guide-hero.png",
];

function resolveFile(urlPath) {
  const clean = urlPath === "/" ? "index" : urlPath.replace(/^\//, "").replace(/\/$/, "");
  return [path.join(outDir, clean, "index.html"), path.join(outDir, `${clean}.html`), path.join(outDir, clean)]
    .find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
}

if (!fs.existsSync(outDir)) throw new Error("Missing out directory. Run npm run build first.");
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url || "/", "http://localhost").pathname;
  const file = resolveFile(pathname);
  if (file) {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(fs.readFileSync(file));
    return;
  }
  res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
  res.end(fs.readFileSync(path.join(outDir, "404.html")));
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const port = server.address().port;
const baseUrl = `http://127.0.0.1:${port}`;

try {
  for (const requiredFile of requiredFiles) {
    if (!fs.existsSync(path.join(outDir, requiredFile))) throw new Error(`Missing generated file: out/${requiredFile}`);
  }
  for (const route of routes) {
    const response = await fetch(`${baseUrl}${route}`);
    if (response.status !== 200) throw new Error(`${route} returned ${response.status}`);
  }
  const sitemap = fs.readFileSync(path.join(outDir, "sitemap.xml"), "utf8");
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  if (locs.length !== routes.length) throw new Error(`Sitemap URL count expected ${routes.length}, found ${locs.length}`);
  for (const loc of locs) {
    const pathname = new URL(loc).pathname || "/";
    if (!resolveFile(pathname)) throw new Error(`Sitemap URL has no static file: ${loc}`);
  }
  const missing = await fetch(`${baseUrl}/missing-test-route`);
  if (missing.status !== 404 || !(await missing.text()).includes("This page does not exist")) {
    throw new Error("Custom 404 route did not return the expected response.");
  }
  console.log(`Verified ${routes.length} Moonlight Peaks routes, required files, sitemap coverage, and 404 behavior.`);
} finally {
  server.close();
}
