export type GuideTable = { headers: string[]; rows: string[][] };
export type GuideSection = { heading: string; paragraphs?: string[]; bullets?: string[]; table?: GuideTable; note?: string };
export type GuideSource = { label: string; url: string; level: "Official" | "Guide" | "Community" };
export type Guide = { slug: string; title: string; description: string; h1: string; eyebrow: string; answer: string; updated: string; sections: GuideSection[]; faqs: { question: string; answer: string }[]; related: string[]; sources: GuideSource[] };

// ─── L1 Official ───
export const OFFICIAL_SITE: GuideSource = { label: "Official Moonlight Peaks website", url: "https://www.moonlightpeaks.com/", level: "Official" };
export const STEAM: GuideSource = { label: "Moonlight Peaks on Steam", url: "https://store.steampowered.com/app/2209900/Moonlight_Peaks/", level: "Official" };
export const NINTENDO: GuideSource = { label: "Moonlight Peaks on Nintendo.com", url: "https://www.nintendo.com/us/store/products/moonlight-peaks-switch/", level: "Official" };
export const GOOGLE_PLAY: GuideSource = { label: "Moonlight Peaks on Google Play", url: "https://play.google.com/store/apps/details?id=com.xseed.moonlightpeaks", level: "Official" };

// ─── L2 Guide ───
const PCG_SAMAEL: GuideSource = { label: "PC Gamer — How to unlock Samael romance", url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-date-samael-romance-unlock/", level: "Guide" };
const PCG_TREE: GuideSource = { label: "PC Gamer — Fallen tree location", url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-lift-the-fallen-tree-location/", level: "Guide" };
const PCG_TREASURE: GuideSource = { label: "PC Gamer — Elvira treasure hunt clues", url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-treasure-hunt-clues-location/", level: "Guide" };
const PCG_DATING: GuideSource = { label: "PC Gamer — Dating and romance guide", url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-date-how-to/", level: "Guide" };
const SDHQ: GuideSource = { label: "Steam Deck HQ — Performance review", url: "https://steamdeckhq.com/game-reviews/moonlight-peaks/", level: "Guide" };
const IGN_TIPS: GuideSource = { label: "IGN — Tips and tricks", url: "https://www.ign.com/wikis/moonlight-peaks/Tips_and_Tricks", level: "Guide" };
const EG_BEGINNER: GuideSource = { label: "Eurogamer — Top five things to do first", url: "https://www.eurogamer.net/top-five-things-to-do-first-moonlight-peaks", level: "Guide" };
const EG_ROMANCE: GuideSource = { label: "Eurogamer — Romance candidates list", url: "https://www.eurogamer.net/moonlight-peaks-romance-candidates", level: "Guide" };
const LG_BEGINNER: GuideSource = { label: "LadiesGamers — Beginner's guide", url: "https://ladiesgamers.com/moonlight-peaks-beginners-guide-tips-for-supernatural-farming-life", level: "Guide" };
const GR_ROMANCE: GuideSource = { label: "GameRant — All romanceable characters", url: "https://gamerant.com/moonlight-peaks-all-romanceable-characters", level: "Guide" };
const TR_ROMANCE: GuideSource = { label: "TechRaptor — Romance and marriage guide", url: "https://techraptor.net/gaming/guides/moonlight-peaks-romance-and-marriage-guide", level: "Guide" };
const BA_ROMANCE: GuideSource = { label: "Bonus Action — Romanceable characters", url: "https://bonus-action.com/guides/moonlight-peaks-romanceable-character-dating-guide", level: "Guide" };
const BA_FISHING: GuideSource = { label: "Bonus Action — How to get the fishing rod", url: "https://bonus-action.com/guides/moonlight-peaks-fishing-rod-guide", level: "Guide" };
const NS_FISHING: GuideSource = { label: "Neoseeker — Fishing guide", url: "https://www.neoseeker.com/moonlight-peaks/Fishing_Guide", level: "Guide" };
const TG_FISHING: GuideSource = { label: "TheGamer — All fish types", url: "https://www.thegamer.com/moonlight-peaks-fishing-fish-location-guide", level: "Guide" };
const NE_EVERYTHING: GuideSource = { label: "Nintendo Everything — Romanceable characters", url: "https://nintendoeverything.com/moonlight-peaks-romanceable-characters-complete-list-and-full-details", level: "Guide" };

// SAB legacy exports — required by old SAB components, not used by Moonlight Peaks
import type { SourceReference } from "@/lib/types";

export const brainrotsWikiSource: SourceReference = { name: "SAB Wiki (legacy)", url: "https://example.com", type: "community-wiki", checkedAt: "legacy" };
export const mutationsWikiSource: SourceReference = { name: "Mutations (legacy)", url: "https://example.com", type: "community-wiki", checkedAt: "legacy" };
export const traitsWikiSource: SourceReference = { name: "Traits (legacy)", url: "https://example.com", type: "community-wiki", checkedAt: "legacy" };
export const checkedAt = { adminAbuse: "legacy", tacoTuesday: "legacy" };

