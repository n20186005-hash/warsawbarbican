import type { MetadataRoute } from "next";
import { siteConfig } from "@/config";
import { routing } from "@/i18n/routing";

const locales = routing.locales;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-08");

  return locales.map((locale) => ({
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
}
