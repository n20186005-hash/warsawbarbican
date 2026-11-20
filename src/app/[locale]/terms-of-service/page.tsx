import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { siteConfig } from "@/config";
import LegalPage from "@/components/LegalPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  const title = t("title");
  const description = (t.raw("sections") as { text: string }[])[0].text;
  const url = `${siteConfig.baseUrl}/${locale}/terms-of-service`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { card: "summary", title, description },
    robots: { index: false, follow: true },
    alternates: {
      canonical: url,
    },
  };
}

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "terms" });

  return (
    <LegalPage
      title={t("title")}
      lastUpdated={t("lastUpdated")}
      sections={t.raw("sections") as { heading: string; text: string }[]}
    />
  );
}
