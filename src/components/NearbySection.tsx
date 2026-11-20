import Link from "next/link";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getGuide, guidePath, guideTopics } from "@/guides";
import { getLocale, getTranslations } from "next-intl/server";

export default async function NearbySection() {
  const t = await getTranslations("nearby");
  const locale = await getLocale();

  return (
    <section className="section" id="nearby">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Old Town highlights</span>
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
          {hasLocale(routing.locales, locale) && guideTopics.map((topic) => {
            const [title, description] = getGuide(locale, topic);
            return (
              <div className="nearby-card" key={topic}>
                <h3><Link href={guidePath(locale, topic)}>{title}</Link></h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
