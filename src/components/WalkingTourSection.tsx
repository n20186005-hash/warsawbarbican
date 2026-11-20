import Link from "next/link";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getGuide, guidePath } from "@/guides";
import { getLocale, getTranslations } from "next-intl/server";

export default async function WalkingTourSection() {
  const t = await getTranslations("walkingTour");

  const locale = await getLocale();
  const topic = "old-town-city-walls-walk";

  return (
    <section className="section section-alt" id="walkingTour">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Things to do in Warsaw</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div>
          {t.raw("steps").map(
            (step: { title: string; text: string }, i: number) => (
              <div className="route-step" key={i}>
                <span className="route-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            )
          )}
        </div>

        <div className="note-box">
          <strong>{t("tip")}:</strong> {t("tipText")}
        </div>
        {hasLocale(routing.locales, locale) && (
          <p><Link href={guidePath(locale, topic)}>{getGuide(locale, topic)[0]}</Link></p>
        )}
      </div>
    </section>
  );
}
