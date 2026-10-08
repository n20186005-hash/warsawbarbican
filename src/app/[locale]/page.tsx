import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import BasicInfo from "@/components/BasicInfo";
import HoursSection from "@/components/HoursSection";
import HistorySection from "@/components/HistorySection";
import TransportSection from "@/components/TransportSection";
import WalkingTourSection from "@/components/WalkingTourSection";
import NearbySection from "@/components/NearbySection";
import PhotoSpots from "@/components/PhotoSpots";
import FacilitiesSection from "@/components/FacilitiesSection";
import StoriesSection from "@/components/StoriesSection";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQSection from "@/components/FAQSection";
import SourcesSection from "@/components/SourcesSection";
import MapEmbed from "@/components/MapEmbed";
import WeatherSection from "@/components/WeatherSection";
import SeasonalNotice from "@/components/SeasonalNotice";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "faq" });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.raw("items").map((item: { q: string; a: string }) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Warsaw Barbican", item: siteConfig.baseUrl },
      { "@type": "ListItem", position: 2, name: "Warsaw", item: `${siteConfig.baseUrl}/${locale}` },
      { "@type": "ListItem", position: 3, name: "Old Town (Stare Miasto)", item: `${siteConfig.baseUrl}/${locale}#walkingTour` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero />
      <SeasonalNotice />
      <Intro />
      <BasicInfo />
      <HoursSection />
      <HistorySection />
      <TransportSection />
      <WalkingTourSection />
      <NearbySection />
      <PhotoSpots />
      <FacilitiesSection />
      <StoriesSection />
      <Gallery />
      <Reviews />
      <FAQSection />
      <SourcesSection />
      <WeatherSection />
      <MapEmbed />
    </>
  );
}
