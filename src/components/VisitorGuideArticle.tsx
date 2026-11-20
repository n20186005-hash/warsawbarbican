import Image from "next/image";
import Link from "next/link";
import details from "@/content/warsaw-guide-details.json";
import { visitorLabels } from "@/content/warsaw-guide-labels";
import { detailLabels, management, transitStops, visitAccess, visitLocales } from "@/content/warsaw-visit-details";
import { getVisitorFacts, topicTypes, typeNames } from "@/content/warsaw-visitor-facts";
import { lodgingAdvice, sectionLabels } from "@/content/warsaw-visitor-sections";
import { getGuide, getVisitorGuide, guideCopy, guidePath, type GuideLocale, type VisitorTopic } from "@/guides";

export default function VisitorGuideArticle({ locale, topic, visitor }: {
  locale: GuideLocale;
  topic: VisitorTopic;
  visitor: NonNullable<ReturnType<typeof getVisitorGuide>>;
}) {
  const detail = details[topic];
  const languageIndex = visitLocales.indexOf(locale);
  const manager = management[detail.manager as keyof typeof management];
  const access = visitAccess[detail.access as keyof typeof visitAccess][languageIndex];
  const nextStop = detail.nextStop as VisitorTopic;
  const nextTitle = getGuide(locale, nextStop)[0];
  const nextHref = guidePath(locale, nextStop);
  const labels = visitorLabels[locale];
  const [about, basics, , transit, route, photoSpot, faq, admissionQuestion, nextQuestion, directions,
    photoSource, resized, startAt, continueTo] = detailLabels[locale];
  const [, map] = guideCopy[locale].labels;
  const photo = detail.photo;
  const copy = sectionLabels[languageIndex];
  const siteType = typeNames[topicTypes[topic]][languageIndex];
  const facts = getVisitorFacts(topic);
  const stop = transitStops[detail.transit as keyof typeof transitStops];
  const operatorUrl = facts.url ?? manager.url;
  const localName = visitor.place.split(",")[0];
  const area = labels.groups[visitor.group];
  const city = ["Warszawa, Polska", "Warsaw, Poland", "波蘭華沙", "Варшава, Польша", "Warschau, Polen"][languageIndex];
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(visitor.place)}&travelmode=walking`;

  return (
    <>
      <div className="section-head visitor-heading">
        <h1>{visitor.title}</h1>
        <p>{siteType} · {area}</p>
        <p>{facts.hours[languageIndex]}</p>
        <a className="btn btn-primary" href={visitor.mapUrl}>{map}</a>{" "}
        <a href="#visitor-reviews">{copy.reviews}</a>
      </div>
      <figure className="visitor-photo">
        <Image src={`/guides/${topic}.webp`} alt={visitor.title}
          width={photo.width} height={photo.height} unoptimized priority />
        <figcaption>
          <a href={photo.source}>{photoSource}</a> · {photo.author} ·{" "}
          {photo.licenseUrl ? <a href={photo.licenseUrl}>{photo.license}</a> : photo.license} · {resized}
        </figcaption>
      </figure>
      <section className="nearby-card visitor-management">
        <h2>{about}</h2>
        <p>{manager.copy[locale]}</p>
        <a href={manager.url}>{new URL(manager.url).hostname}</a>
      </section>
      <section className="visitor-detail">
        <h2>{copy.explore}</h2>
        <p>{visitor.description}</p>
        <h3>{copy.tips}</h3>
        <p>{detail.tip[locale]}</p>
      </section>
      <section className="visitor-detail">
        <h2>{basics}</h2>
        <dl className="visitor-facts">
          <div><dt>{copy.name}</dt><dd lang="pl">{localName}</dd></div>
          <div><dt>{copy.type}</dt><dd>{siteType}</dd></div>
          <div><dt>{copy.area}</dt><dd>Śródmieście · {city}</dd></div>
          <div><dt>{labels.location}</dt><dd lang="pl">{visitor.place}</dd></div>
          <div><dt>{labels.duration}</dt><dd>{visitor.duration} {labels.minutes}</dd></div>
          <div><dt>{copy.opening}</dt><dd><a href="#visitor-hours">{copy.opening}</a></dd></div>
          <div><dt>{copy.tickets}</dt><dd>{facts.tickets[languageIndex]}</dd></div>
          {facts.phone && <div><dt>{copy.phone}</dt><dd><a href={`tel:${facts.phone.replaceAll(" ", "")}`}>{facts.phone}</a></dd></div>}
          <div><dt>{transit}</dt><dd lang="pl">{stop}</dd></div>
        </dl>
      </section>
      <section className="visitor-detail" id="visitor-hours">
        <h2>{copy.opening}</h2>
        <p>{facts.hours[languageIndex]}</p>
        <p><a href={operatorUrl}>{copy.official}</a></p>
      </section>
      <section className="visitor-detail">
        <h2>{copy.tickets}</h2>
        <p>{facts.tickets[languageIndex]}</p>
      </section>
      <section className="visitor-detail">
        <h2>{transit}</h2>
        <p lang="pl">{stop}</p>
        <p><a href="https://www.wtp.waw.pl/">{labels.transit}</a></p>
      </section>
      <section className="visitor-detail">
        <h2>{copy.discover}</h2>
        <h3>{copy.highlights}</h3>
        <p>{detail.history[locale]}</p>
      </section>
      <section className="visitor-detail">
        <h2>{route}</h2>
        <ol className="visitor-list">
          <li>{startAt} <span lang="pl">{stop}</span>.</li>
          <li>{visitor.walk}</li>
          <li>{continueTo} <Link href={nextHref}>{nextTitle}</Link>.</li>
        </ol>
      </section>
      <section className="visitor-detail">
        <h2>{copy.advice}</h2>
        <p>{access}</p>
      </section>
      <section className="visitor-detail">
        <h2>{photoSpot}</h2>
        <p lang="pl">{detail.photoSpot}</p>
        <p>{detail.framing[locale]}</p>
      </section>
      <section className="visitor-detail">
        <h2>{faq}</h2>
        <details><summary>{admissionQuestion}</summary><p>{facts.tickets[languageIndex]} <a href={operatorUrl}>{copy.official}</a></p></details>
        <details><summary>{nextQuestion}</summary><p><Link href={nextHref}>{nextTitle}</Link></p></details>
      </section>
      <section className="visitor-detail">
        <h2>{copy.stay}</h2>
        <p>{lodgingAdvice[visitor.group][languageIndex]}</p>
      </section>
      <section className="visitor-detail" id="visitor-reviews">
        <h2>{copy.reviews}</h2>
        <p><a href={visitor.mapUrl}>{copy.reviewLink}</a></p>
      </section>
      <section className="visitor-detail">
        <h2>{copy.transport}</h2>
        <p lang="pl">{visitor.place}</p>
        <p><a href={visitor.mapUrl}>{map}</a> · <a href={directionsUrl}>{directions}</a></p>
      </section>
      <section className="visitor-detail">
        <h2>{labels.source}</h2>
        <p><a href={visitor.source}>{new URL(visitor.source).hostname}</a> · <a href={manager.url}>{new URL(manager.url).hostname}</a></p>
      </section>
    </>
  );
}
