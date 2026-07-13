import type { MetadataRoute } from "next";
import { publicRoutes } from "@/lib/data";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: absoluteUrl(route.href === "/" ? "/" : `${route.href}/`),
    lastModified: new Date("2026-07-13"),
    changeFrequency: route.href === "/" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
