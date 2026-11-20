import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/config";
import { getGuide, guideCopy, guidePath, guideTopics } from "@/guides";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideTopics.map((topic) => ({ topic }));
}

async function resolveGuide(params: Props["params"]) {
  const { locale, topic: slug } = await params;
  const topic = guideTopics.find((candidate) => candidate === slug);
  if (!topic || !hasLocale(routing.locales, locale)) notFound();
  return { locale, topic, guide: getGuide(locale, topic) };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, topic, guide: [title, description] } = await resolveGuide(params);
  const url = siteConfig.baseUrl + guidePath(locale, topic);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((lang) => [lang, siteConfig.baseUrl + guidePath(lang, topic)])),
        "x-default": siteConfig.baseUrl + guidePath(routing.defaultLocale, topic),
      },
    },
    openGraph: { title, description, url, images: [siteConfig.baseUrl + siteConfig.heroImage] },
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, topic, guide: [title, description, sections] } = await resolveGuide(params);
  setRequestLocale(locale);
  const [home, map, museum, more] = guideCopy[locale].labels;
  return (
    <article className="section">
      <div className="container">
        <p><Link href={`/${locale}`}>{home}</Link> / {title}</p>
        <div className="section-head">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Image src={siteConfig.heroImage} alt={home} width={1600} height={1559}
          sizes="(max-width: 960px) 100vw, 960px"
          style={{ width: "100%", maxWidth: 960, height: "auto", borderRadius: 12 }} />
        <p><a className="btn btn-primary" href={siteConfig.mapsUrl}>{map}</a></p>
        {sections.map(([heading, content]) => (
          <section className="route-step" key={heading}>
            <div><h2>{heading}</h2><p>{content}</p></div>
          </section>
        ))}
        <p><a href="https://barbakan.muzeumwarszawy.pl/en/visit/">{museum}</a></p>
        <h2>{more}</h2>
        <ul>
          {guideTopics.filter((other) => other !== topic).map((other) => (
            <li key={other}><Link href={guidePath(locale, other)}>{getGuide(locale, other)[0]}</Link></li>
          ))}
        </ul>
      </div>
    </article>
  );
}
