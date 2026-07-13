import { chromium } from "@playwright/test";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const out = path.resolve("out");
const routes = ["/", "/switch", "/ps5", "/multiplayer", "/beginner-guide", "/romance-guide", "/samael-romance", "/treasure-hunt-clues", "/fallen-tree", "/is-moonlight-peaks-worth-it", "/money-guide", "/gift-guide", "/spells-guide", "/farming-guide", "/fishing-guide", "/steam-deck", "/games-like-moonlight-peaks"];

function resolveFile(urlPath) {
  const clean = urlPath === "/" ? "index" : urlPath.replace(/^\//, "").replace(/\/$/, "");
  return [path.join(out, clean, "index.html"), path.join(out, `${clean}.html`), path.join(out, clean)].find((file) => fs.existsSync(file));
}

const server = http.createServer((req, res) => {
  const file = resolveFile(new URL(req.url || "/", "http://localhost").pathname);
  if (!file) { res.writeHead(404); res.end("Not found"); return; }
  const type = file.endsWith(".css") ? "text/css" : file.endsWith(".js") ? "text/javascript" : file.endsWith(".png") ? "image/png" : file.endsWith(".svg") ? "image/svg+xml" : "text/html";
  res.writeHead(200, { "content-type": type });
  res.end(fs.readFileSync(file));
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const port = server.address().port;
const systemChrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await chromium.launch({ headless: true, executablePath: fs.existsSync(systemChrome) ? systemChrome : undefined });

try {
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  for (const route of routes) {
    await mobile.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: "networkidle" });
    const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    if (overflow) throw new Error(`${route} has horizontal overflow at 390px`);
    if (!(await mobile.locator("h1").isVisible())) throw new Error(`${route} has no visible h1 at 390px`);
  }
  await mobile.goto(`http://127.0.0.1:${port}/`);
  await mobile.getByRole("button", { name: "Open menu" }).click();
  if (!(await mobile.getByRole("link", { name: "Beginner Guide" }).last().isVisible())) throw new Error("Mobile navigation did not open");

  const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await desktop.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle" });
  if (await desktop.getByRole("button", { name: "Open menu" }).isVisible()) throw new Error("Mobile menu button is visible on desktop");
  console.log("Verified all 17 routes at 390px, mobile navigation, and the desktop header at 1440px.");
} finally {
  await browser.close();
  server.close();
}
