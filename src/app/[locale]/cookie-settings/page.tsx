import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { siteConfig } from "@/config";
import CookieSettingsClient from "@/components/CookieSettingsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cookieSettings" });
  const title = t("title");
  const description = t("description");
  const url = `${siteConfig.baseUrl}/${locale}/cookie-settings`;
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

export default async function CookieSettingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "cookieSettings" });

  return (
    <CookieSettingsClient
      title={t("title")}
      description={t("description")}
      essential={t("essential")}
      essentialText={t("essentialText")}
      analytics={t("analytics")}
      analyticsText={t("analyticsText")}
      save={t("save")}
      saved={t("saved")}
      back={t("back")}
    />
  );
}
