import Link from "next/link";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getGuide, getVisitorGuide, guidePath, originalTopics, visitorTopics } from "@/guides";
import { visitorLabels } from "@/content/warsaw-guide-labels";
import { getLocale, getTranslations } from "next-intl/server";

export default async function NearbySection() {
  const t = await getTranslations("nearby");
  const locale = await getLocale();

  const language = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const labels = visitorLabels[language];

  return (
    <section className="section" id="nearby">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{labels.groups.oldTown}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="nearby-grid">
          {t.raw("spots").map(
            (
              spot: { name: string; note: string; distance: string },
              i: number
            ) => (
              <div className="nearby-card" key={i}>
                <h3>{spot.name}</h3>
                <p>{spot.note}</p>
                <span className="distance-chip">{spot.distance}</span>
              </div>
            )
          )}
          {originalTopics.map((topic) => {
            const [title, description] = getGuide(language, topic);
            return (
              <div className="nearby-card" key={topic}>
                <h3><Link href={guidePath(language, topic)}>{title}</Link></h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <section id="visitor-guides" aria-labelledby="visitor-guides-title">
          <div className="section-head" style={{ marginTop: "2rem" }}>
            <h2 id="visitor-guides-title">{labels.directory}</h2>
          </div>
          <div className="nearby-grid">
            {Object.entries(labels.groups).map(([group, title]) => (
              <div key={group} className="nearby-card">
                <h3>{title}</h3>
                <ul style={{ paddingInlineStart: "1.25rem" }}>
                  {visitorTopics.map((topic) => {
                    const guide = getVisitorGuide(language, topic);
                    return guide?.group === group && (
                      <li key={topic}><Link href={guidePath(language, topic)}>{guide.title}</Link></li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
