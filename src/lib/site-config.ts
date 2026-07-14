const fallbackSiteUrl = "https://YOUR_DOMAIN_HERE";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  siteName: "Moonlight Peaks Guide",
  name: "Moonlight Peaks Guide",
  shortName: "MP Guide",
  gameName: "Moonlight Peaks",
  description:
    "Practical Moonlight Peaks guides for romance, gifts, money, spells, farming, fishing, quests, and platform questions.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl),
  officialGameUrl: "https://www.moonlightpeaks.com/",
  defaultSocialImage: "/moonlight-peaks-guide-hero.png",
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function resolveAssetUrl(src: string) {
  if (/^https?:\/\//i.test(src)) return src;
  return absoluteUrl(src);
}
