import { getTranslations } from "next-intl/server";

export default async function PhotoSpots() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("photoSpots");

  return (
    <section className="section section-alt" id="photos">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{ui("photo")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="spot-grid">
          {t.raw("spots").map(
            (spot: { title: string; text: string }, i: number) => (
              <div className="spot-card" key={i}>
                <h3>{spot.title}</h3>
                <p>{spot.text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
