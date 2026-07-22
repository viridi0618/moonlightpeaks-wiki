import type { Metadata } from "next";
import type { Guide } from "@/data/guides";
import { siteConfig } from "@/lib/site-config";

export function guideMetadata(guide: Guide): Metadata {
  const path = `/${guide.slug}`;
  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: { title: guide.title, description: guide.description, url: path, siteName: siteConfig.siteName, locale: "en_US", type: "article", images: [{ url: siteConfig.defaultSocialImage, alt: "Moonlit gothic farm landscape for Moonlight Peaks Guide" }] },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: [siteConfig.defaultSocialImage] },
  };
}
