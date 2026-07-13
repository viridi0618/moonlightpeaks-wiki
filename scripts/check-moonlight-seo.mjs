import fs from "node:fs";
import path from "node:path";

const routes = [
  "/", "/switch", "/ps5", "/multiplayer", "/beginner-guide", "/romance-guide",
  "/samael-romance", "/treasure-hunt-clues", "/fallen-tree", "/is-moonlight-peaks-worth-it",
  "/money-guide", "/gift-guide", "/spells-guide", "/farming-guide", "/fishing-guide",
  "/steam-deck", "/games-like-moonlight-peaks",
];
const out = path.resolve("out");
const failures = [];
const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();

function fileFor(route) {
  if (route === "/") return path.join(out, "index.html");
  const clean = route.slice(1);
  return [path.join(out, clean, "index.html"), path.join(out, `${clean}.html`)].find((file) => fs.existsSync(file)) ?? path.join(out, clean, "index.html");
}

function capture(html, pattern) {
  return html.match(pattern)?.[1] ?? "";
}

for (const route of routes) {
  const file = fileFor(route);
  if (!fs.existsSync(file)) {
    failures.push(`${route}: missing static HTML`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const title = capture(html, /<title>([^<]+)<\/title>/);
  const description = capture(html, /<meta name="description" content="([^"]+)"/);
  const canonical = capture(html, /<link rel="canonical" href="([^"]+)"/);
  for (const [label, value, map] of [["title", title, titles], ["description", description, descriptions], ["canonical", canonical, canonicals]]) {
    if (!value) failures.push(`${route}: missing ${label}`);
    else if (map.has(value)) failures.push(`${route}: duplicate ${label} also used by ${map.get(value)}`);
    else map.set(value, route);
  }
  if (/moonlightpeaks\.wiki/i.test(html)) failures.push(`${route}: competitor domain found`);
  if (/[\u3400-\u4dbf\u4e00-\u9fff]/u.test(html.replace(/<script[^>]*src=[^>]*>[\s\S]*?<\/script>/g, ""))) failures.push(`${route}: Chinese text found in rendered HTML`);
  if (!html.includes('property="og:locale" content="en_US"')) failures.push(`${route}: missing og:locale en_US`);
  const internalLinks = [...html.matchAll(/<a[^>]+href="\/(?!_next)[^"]*"/g)].length;
  if (internalLinks < 3) failures.push(`${route}: fewer than three internal links`);
  const externalAnchors = [...html.matchAll(/<a[^>]+href="https?:\/\/[^>]+>/g)].map((match) => match[0]);
  for (const anchor of externalAnchors) {
    if (!/rel="[^"]*noopener[^"]*noreferrer[^"]*nofollow[^"]*"/.test(anchor)) failures.push(`${route}: external link missing required rel`);
  }
  if (route === "/") {
    if (!html.includes('"@type":"WebSite"')) failures.push("/: missing WebSite schema");
    if (!html.includes('"@type":"Organization"')) failures.push("/: missing Organization schema");
    if (!html.includes('"@type":"FAQPage"')) failures.push("/: missing FAQPage schema");
  } else {
    if (!html.includes('property="og:type" content="article"')) failures.push(`${route}: og:type is not article`);
    for (const schema of ["BreadcrumbList", "Article", "FAQPage"]) if (!html.includes(`\"@type\":\"${schema}\"`)) failures.push(`${route}: missing ${schema} schema`);
  }
}

const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
if ([...sitemap.matchAll(/<loc>/g)].length !== 17) failures.push("sitemap.xml: expected 17 URLs");
if (/moonlightpeaks\.wiki/i.test(sitemap)) failures.push("sitemap.xml: competitor domain found");
const robots = fs.readFileSync(path.join(out, "robots.txt"), "utf8");
if (!robots.includes("Allow: /")) failures.push("robots.txt: missing Allow: /");
if (!robots.includes("Sitemap:")) failures.push("robots.txt: missing sitemap URL");

if (failures.length) {
  console.error("Moonlight SEO checks failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log("Verified 17 routes, unique metadata, canonical URLs, OG fields, schemas, links, sitemap, robots, and English-only rendered copy.");
