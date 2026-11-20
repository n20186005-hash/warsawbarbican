import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/config";
import { getGuide, getVisitorGuide, guideCopy, guidePath, guideTopics, originalTopics, visitorTopics } from "@/guides";
import { visitorLabels } from "@/content/warsaw-guide-labels";
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
  const visitor = getVisitorGuide(locale, topic);
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
    openGraph: { title, description, url, ...(visitor ? {} : { images: [siteConfig.baseUrl + siteConfig.heroImage] }) },
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, topic, guide: [title, description, sections] } = await resolveGuide(params);
  setRequestLocale(locale);
  const [home, map, museum, more] = guideCopy[locale].labels;
  const visitor = getVisitorGuide(locale, topic);
  const labels = visitorLabels[locale];
  const related = visitor
    ? visitorTopics.filter((other) => other !== topic && getVisitorGuide(locale, other)?.group === visitor.group)
    : originalTopics.filter((other) => other !== topic);

  return (
    <article className="section">
      <div className="container">
        <p><Link href={`/${locale}`}>{home}</Link> / <Link href={`/${locale}#visitor-guides`}>{labels.directory}</Link></p>
        <div className="section-head">
          <h1>{title}</h1>
          {!visitor && <p>{description}</p>}
        </div>
        {!visitor && <Image src={siteConfig.heroImage} alt={home} width={1600} height={1559}
          sizes="(max-width: 960px) 100vw, 960px"
          style={{ width: "100%", maxWidth: 960, height: "auto", borderRadius: 12 }} />}
        {visitor && (
          <dl>
            <dt><strong>{labels.location}</strong></dt>
            <dd>{visitor.place}</dd>
            <dt><strong>{labels.duration}</strong></dt>
            <dd>{visitor.duration} {labels.minutes}</dd>
          </dl>
        )}
        <p><a className="btn btn-primary" href={visitor?.mapUrl ?? siteConfig.mapsUrl}>{map}</a></p>
        {sections.map(([heading, content]) => (
          <section className="route-step" key={heading}>
            <div><h2>{heading}</h2><p>{content}</p></div>
          </section>
        ))}
        {visitor ? (
          <section>
            <h2>{labels.source}</h2>
            <ul>
              <li><a href={visitor.source}>{new URL(visitor.source).hostname}</a></li>
              <li><a href="https://www.wtp.waw.pl/">{labels.transit}</a></li>
            </ul>
          </section>
        ) : (
          <p><a href="https://barbakan.muzeumwarszawy.pl/en/visit/">{museum}</a></p>
        )}
        <h2>{more}</h2>
        <ul>
          {related.map((other) => (
            <li key={other}><Link href={guidePath(locale, other)}>{getGuide(locale, other)[0]}</Link></li>
          ))}
        </ul>
      </div>
    </article>
  );
}
