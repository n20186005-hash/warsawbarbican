import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import "../globals.css";

const htmlLangMap: Record<string, string> = {
  pl: "pl",
  en: "en",
  zh: "zh-CN",
  ru: "ru",
  de: "de",
};

const ogLocaleMap: Record<string, string> = {
  pl: "pl_PL",
  en: "en_US",
  zh: "zh_CN",
  ru: "ru_RU",
  de: "de_DE",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const heroT = await getTranslations({ locale, namespace: "hero" });
  const url = `${siteConfig.baseUrl}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, `${siteConfig.baseUrl}/${l}`])
        ),
        "x-default": `${siteConfig.baseUrl}/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: "Warsaw Barbican",
      type: "website",
      locale: ogLocaleMap[locale] ?? "pl_PL",
      images: [
        {
          url: `${siteConfig.baseUrl}/gallery/warsaw-barbican-1.jpg`,
          width: 1600,
          height: 1559,
          alt: heroT("imgAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${siteConfig.baseUrl}/gallery/warsaw-barbican-1.jpg`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.baseUrl}/#organization`,
        name: "Warsaw Barbican Guide",
        url: siteConfig.baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.baseUrl}/icons/icon.svg`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.baseUrl}/#website`,
        url: siteConfig.baseUrl,
        name: "Warsaw Barbican — Visitor Guide",
        publisher: { "@id": `${siteConfig.baseUrl}/#organization` },
        inLanguage: htmlLangMap[locale] ?? "pl",
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.baseUrl}/${locale}/#webpage`,
        url: `${siteConfig.baseUrl}/${locale}`,
        name: t("title"),
        description: t("description"),
        inLanguage: htmlLangMap[locale] ?? "pl",
        datePublished: "2026-09-02",
        dateModified: "2026-10-08",
        isPartOf: { "@id": `${siteConfig.baseUrl}/#website` },
        about: { "@id": `${siteConfig.baseUrl}/#attraction` },
      },
      {
        "@type": ["TouristAttraction", "LandmarksOrHistoricalBuildings"],
        "@id": `${siteConfig.baseUrl}/#attraction`,
        name: "Warsaw Barbican",
        alternateName: ["Barbakan Warszawski", "Barbican in Warsaw"],
        description:
          "Historic 16th-century fortified outpost and city gate in Old Town Warsaw, Poland.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nowomiejska 15/17",
          addressLocality: "Warszawa",
          postalCode: "00-257",
          addressCountry: "PL",
        },
        telephone: "+48222774402",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 52.2506035,
          longitude: 21.01008,
        },
        hasMap: siteConfig.mapsUrl,
        image: [
          `${siteConfig.baseUrl}/gallery/warsaw-barbican-1.jpg`,
          `${siteConfig.baseUrl}/gallery/warsaw-barbican-2.jpg`,
        ],
        isAccessibleForFree: true,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.7,
          ratingCount: 11164,
          bestRating: 5,
        },
        touristType: ["Historic Landmark", "City Gate", "Fortification"],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            name: "Gate passage & city walls",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
          {
            "@type": "OpeningHoursSpecification",
            name: "Exhibition (summer season)",
            dayOfWeek: ["Wednesday", "Saturday"],
            opens: "13:00",
            closes: "17:00",
            validFrom: "2026-05-20",
            validThrough: "2026-08-29",
          },
        ],
        sameAs: [
          siteConfig.mapsUrl,
          "https://barbakan.muzeumwarszawy.pl/",
          "https://pl.wikipedia.org/wiki/Barbakan_w_Warszawie",
        ],
      },
    ],
  };

  return (
    <html lang={htmlLangMap[locale] ?? "pl"} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* GA4 — consent-gated */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var allowed=false;try{var p=JSON.parse(localStorage.getItem('cookiePrefs')||'{}');allowed=!!p.analytics;}catch(e){}if(allowed){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4Id}';document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${siteConfig.ga4Id}');}document.addEventListener('consent-updated',function(){var p=JSON.parse(localStorage.getItem('cookiePrefs')||'{}');if(p.analytics&&!window.__gaLoaded){window.__gaLoaded=true;var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4Id}';document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${siteConfig.ga4Id}');}});})();`,
          }}
        />
        {/* Service worker registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){})})}`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <NextIntlClientProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
