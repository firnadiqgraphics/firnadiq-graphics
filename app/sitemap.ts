import type { MetadataRoute } from "next";
import { navItems } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = navItems.filter((item) => !item.external).map((item) => item.href);

  return pages.map((page) => ({
    url: new URL(page, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: page === "/" ? "weekly" : "monthly",
    priority: page === "/" ? 1 : 0.8
  }));
}
