import Image from "next/image";
import Link from "next/link";
import details from "@/content/warsaw-guide-details.json";
import { visitorLabels } from "@/content/warsaw-guide-labels";
import { detailLabels, management, transitStops, visitAccess, visitLocales } from "@/content/warsaw-visit-details";
import { getGuide, getVisitorGuide, guideCopy, guidePath, type GuideLocale, type VisitorTopic } from "@/guides";

export default function VisitorGuideArticle({ locale, topic, visitor }: {
  locale: GuideLocale;
  topic: VisitorTopic;
  visitor: NonNullable<ReturnType<typeof getVisitorGuide>>;
}) {
  const detail = details[topic];
  const manager = management[detail.manager as keyof typeof management];
  const access = visitAccess[detail.access as keyof typeof visitAccess][visitLocales.indexOf(locale)];
  const nextStop = detail.nextStop as VisitorTopic;
  const nextTitle = getGuide(locale, nextStop)[0];
  const nextHref = guidePath(locale, nextStop);
  const labels = visitorLabels[locale];
  const [about, basics, hours, transit, route, photoSpot, faq, admissionQuestion, nextQuestion, directions,
    photoSource, resized, startAt, continueTo] = detailLabels[locale];
  const [, map] = guideCopy[locale].labels;
  const photo = detail.photo;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(visitor.place)}&travelmode=walking`;

  return (
    <>
      <div className="section-head visitor-heading">
        <h1>{visitor.title}</h1>
        <p>{visitor.description}</p>
        <a className="btn btn-primary" href={visitor.mapUrl}>{map}</a>
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
        <p>{detail.history[locale]}</p>
        <a href={manager.url}>{new URL(manager.url).hostname}</a>
      </section>
      <section className="visitor-detail">
        <h2>{basics}</h2>
        <dl className="visitor-facts">
          <div><dt>{labels.location}</dt><dd>{visitor.place}</dd></div>
          <div><dt>{labels.duration}</dt><dd>{visitor.duration} {labels.minutes}</dd></div>
          <div><dt>{hours}</dt><dd>{access}</dd></div>
        </dl>
      </section>
      <section className="visitor-detail">
        <h2>{route}</h2>
        <ol className="visitor-list">
          <li>{startAt} <span lang="pl">{transitStops[detail.transit as keyof typeof transitStops]}</span>.</li>
          <li>{visitor.walk}</li>
          <li>{continueTo} <Link href={nextHref}>{nextTitle}</Link>.</li>
        </ol>
      </section>
      <section className="visitor-detail">
        <h2>{photoSpot}</h2>
        <p lang="pl">{detail.photoSpot}</p>
        <p>{detail.framing[locale]}</p>
      </section>
      <section className="visitor-detail">
        <h2>{faq}</h2>
        <details><summary>{admissionQuestion}</summary><p>{access} <a href={manager.url}>{labels.source}</a></p></details>
        <details><summary>{nextQuestion}</summary><p><Link href={nextHref}>{nextTitle}</Link></p></details>
      </section>
      <section className="visitor-detail">
        <h2>{transit}</h2>
        <p lang="pl">{transitStops[detail.transit as keyof typeof transitStops]}</p>
        <p><a href="https://www.wtp.waw.pl/">{labels.transit}</a> · <a href={directionsUrl}>{directions}</a></p>
      </section>
      <section className="visitor-detail">
        <h2>{labels.source}</h2>
        <p><a href={visitor.source}>{new URL(visitor.source).hostname}</a> · <a href={manager.url}>{new URL(manager.url).hostname}</a></p>
      </section>
    </>
  );
}
