import fs from "node:fs";
import path from "node:path";

const expectedSlugs = [
  "switch", "ps5", "multiplayer", "beginner-guide", "romance-guide",
  "samael-romance", "treasure-hunt-clues", "fallen-tree",
  "is-moonlight-peaks-worth-it", "money-guide", "gift-guide",
  "spells-guide", "farming-guide", "fishing-guide", "steam-deck",
  "games-like-moonlight-peaks",
];
const guideSource = fs.readFileSync(path.resolve("src/data/guides.ts"), "utf8");
const dataSource = fs.readFileSync(path.resolve("src/lib/data.ts"), "utf8");
const slugs = [...guideSource.matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((match) => match[1]);

if (slugs.length !== expectedSlugs.length) {
  throw new Error(`Guide count expected ${expectedSlugs.length}, found ${slugs.length}`);
}
if (new Set(slugs).size !== slugs.length) throw new Error("Duplicate guide slug found.");
for (const slug of expectedSlugs) {
  if (!slugs.includes(slug)) throw new Error(`Missing guide data for ${slug}.`);
  if (!fs.existsSync(path.resolve(`src/app/${slug}/page.tsx`))) throw new Error(`Missing route file for ${slug}.`);
}

for (const requiredExport of ["siteConfig", "publicRoutes", "navItems"]) {
  if (!new RegExp(`export (?:\\{[^}]*\\b${requiredExport}\\b|const ${requiredExport}\\b)`, "s").test(dataSource)) {
    throw new Error(`src/lib/data.ts missing required export ${requiredExport}.`);
  }
}
for (const forbiddenExport of ["brainrots", "mutations", "traits", "publishedBrainrots", "publishedTraits", "eventVerification"]) {
  if (new RegExp(`\\b${forbiddenExport}\\b`).test(dataSource)) throw new Error(`Legacy export remains in src/lib/data.ts: ${forbiddenExport}`);
}

const legacyPaths = [
  "src/data/brainrots.ts", "src/data/mutations.ts", "src/data/traits.ts",
  "src/data/sources.ts", "src/lib/published-data.ts",
  "src/components/BrainrotDetailTemplate.tsx", "src/components/TraitDetailTemplate.tsx",
  "src/components/explorers",
];
for (const legacyPath of legacyPaths) {
  if (fs.existsSync(path.resolve(legacyPath))) throw new Error(`Legacy SAB path still exists: ${legacyPath}`);
}

if (!guideSource.includes("As of the latest check")) throw new Error("Steam Deck status lacks latest-check wording.");
if (!guideSource.includes("guide-reported OLED test")) throw new Error("Battery-life claim lacks guide-reported wording.");
if (!guideSource.includes("Community-reported as Gold at the latest check")) throw new Error("ProtonDB status lacks community/latest-check wording.");
if (!guideSource.includes("Aquaflux II coverage of up to 48 crops") || !guideSource.includes("currently being verified and may vary by version or patch")) {
  throw new Error("Aquaflux II coverage lacks source-confidence wording.");
}
if (!guideSource.includes("around Night 18") || !guideSource.includes("timing may vary by version, patch, pace, or quest order")) {
  throw new Error("Night 18 unlock timing lacks version-sensitive wording.");
}
if (!guideSource.includes("A public tracking snapshot reported a peak") || !guideSource.includes("This is time-sensitive, not a permanent player count") || !guideSource.includes("Exact profitability may vary by version or patch")) {
  throw new Error("Player-count or profitability claims lack source-confidence wording.");
}
if (!guideSource.includes("these exact values are currently being verified and may vary by patch")) {
  throw new Error("Exact fish-value claims lack verification wording.");
}

const worthItBlock = guideSource.match(/"is-moonlight-peaks-worth-it": \{[\s\S]*?\n\s*description: "([^"]+)"/);
if (!worthItBlock) throw new Error("Worth-it metadata description not found.");
if (worthItBlock[1].includes("$34.99")) throw new Error("Worth-it metadata must not hardcode $34.99.");
if (!guideSource.includes("Prices may vary by region, edition, and sale period.")) {
  throw new Error("Worth-it page is missing the required price variability note.");
}

console.log(`Verified ${slugs.length} Moonlight Peaks guide records, route files, required exports, legacy cleanup, and cautious high-risk wording.`);
