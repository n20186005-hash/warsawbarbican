import type { MetadataRoute } from "next";
import { siteConfig } from "@/config";
import { routing } from "@/i18n/routing";

import { guidePath, guideTopics } from "@/guides";

const locales = routing.locales;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-08");

  const home = locales.map((locale) => ({
    url: `${siteConfig.baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: {
        ...Object.fromEntries(
          locales.map((l) => [l, `${siteConfig.baseUrl}/${l}`])
        ),
        "x-default": `${siteConfig.baseUrl}/${routing.defaultLocale}`,
      },
    },
  }));
  const guides = guideTopics.flatMap((topic) => locales.map((locale) => ({
    url: siteConfig.baseUrl + guidePath(locale, topic),
    lastModified: new Date("2026-11-20"),
    alternates: {
      languages: {
        ...Object.fromEntries(locales.map((lang) => [lang, siteConfig.baseUrl + guidePath(lang, topic)])),
        "x-default": siteConfig.baseUrl + guidePath(routing.defaultLocale, topic),
      },
    },
  })));
  return [...home, ...guides];
}
