import fs from "node:fs";
import path from "node:path";

const routes = [
  "/", "/switch", "/ps5", "/multiplayer", "/beginner-guide", "/romance-guide",
  "/samael-romance", "/treasure-hunt-clues", "/fallen-tree", "/is-moonlight-peaks-worth-it",
  "/money-guide", "/gift-guide", "/spells-guide", "/farming-guide", "/fishing-guide",
  "/steam-deck", "/games-like-moonlight-peaks",
];
const out = path.resolve("out");
const siteUrl = "https://moonlightpeaksguide.wiki";
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
  const expectedUrl = route === "/" ? siteUrl : `${siteUrl}${route}`;
  const head = html.split("</head>")[0] ?? html;
  for (const [label, value, map] of [["title", title, titles], ["description", description, descriptions], ["canonical", canonical, canonicals]]) {
    if (!value) failures.push(`${route}: missing ${label}`);
    else if (map.has(value)) failures.push(`${route}: duplicate ${label} also used by ${map.get(value)}`);
    else map.set(value, route);
  }
  if (canonical && canonical !== expectedUrl) failures.push(`${route}: canonical ${canonical} does not match ${expectedUrl}`);
  if (/moonlightpeaks\.wiki/i.test(html)) failures.push(`${route}: competitor domain found`);
  if (html.includes("YOUR_DOMAIN_HERE")) failures.push(`${route}: production site URL is not configured`);
  if (/Brainrots|Traits|Roblox|\bSAB\b|Steal a Brainrot/i.test(head)) failures.push(`${route}: legacy SAB wording found in metadata`);
  if (/[\u3400-\u4dbf\u4e00-\u9fff]/u.test(html.replace(/<script[^>]*src=[^>]*>[\s\S]*?<\/script>/g, ""))) failures.push(`${route}: Chinese text found in rendered HTML`);
  if (!html.includes('property="og:locale" content="en_US"')) failures.push(`${route}: missing og:locale en_US`);
  const internalLinks = [...html.matchAll(/<a[^>]+href="\/(?!_next)[^"]*"/g)].length;
  if (internalLinks < 3) failures.push(`${route}: fewer than three internal links`);
  const trailingSlashLinks = [...html.matchAll(/<a[^>]+href="(\/[^"#?]+\/)"/g)].map((match) => match[1]);
  if (trailingSlashLinks.length) failures.push(`${route}: trailing-slash internal hrefs: ${[...new Set(trailingSlashLinks)].join(", ")}`);
  const ownDomains = ["stealabrainrotguide.wiki", "gutsandblackpowder.wiki", "moonlightpeaksguide.wiki"];
  const externalAnchors = [...html.matchAll(/<a[^>]+href="https?:\/\/[^>]+>/g)].map((match) => match[0]);
  for (const anchor of externalAnchors) {
    const isOwn = ownDomains.some((domain) => anchor.includes(domain));
    if (isOwn) {
      if (!/rel="[^"]*noopener[^"]*noreferrer[^"]*"/.test(anchor)) failures.push(`${route}: own-domain link missing rel="noopener noreferrer"`);
      if (/nofollow/.test(anchor)) failures.push(`${route}: own-domain link should not use nofollow`);
    } else {
      if (!/rel="[^"]*noopener[^"]*noreferrer[^"]*nofollow[^"]*"/.test(anchor)) failures.push(`${route}: external link missing required rel`);
    }
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
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedSitemapUrls = routes.map((route) => route === "/" ? siteUrl : `${siteUrl}${route}`);
if (sitemapUrls.length !== 17) failures.push("sitemap.xml: expected 17 URLs");
if (new Set(sitemapUrls).size !== sitemapUrls.length) failures.push("sitemap.xml: duplicate URLs");
if (sitemapUrls.some((url) => url !== siteUrl && url.endsWith("/"))) failures.push("sitemap.xml: trailing-slash URL");
for (const url of expectedSitemapUrls) if (!sitemapUrls.includes(url)) failures.push(`sitemap.xml: missing ${url}`);
for (const url of sitemapUrls) if (!expectedSitemapUrls.includes(url)) failures.push(`sitemap.xml: unexpected ${url}`);
if (/moonlightpeaks\.wiki/i.test(sitemap)) failures.push("sitemap.xml: competitor domain found");
if (sitemap.includes("YOUR_DOMAIN_HERE")) failures.push("sitemap.xml: production site URL is not configured");
const robots = fs.readFileSync(path.join(out, "robots.txt"), "utf8");
if (!robots.includes("Allow: /")) failures.push("robots.txt: missing Allow: /");
if (!robots.includes("Sitemap:")) failures.push("robots.txt: missing sitemap URL");
if (robots.includes("YOUR_DOMAIN_HERE")) failures.push("robots.txt: production site URL is not configured");
if (fs.existsSync(path.resolve("public", "robots.txt"))) failures.push("robots.txt: duplicate public source exists");

if (failures.length) {
  console.error("Moonlight SEO checks failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log("Verified 17 routes, unique metadata, canonical URLs, OG fields, schemas, links, sitemap, robots, and English-only rendered copy.");
