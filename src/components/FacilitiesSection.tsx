import { getTranslations } from "next-intl/server";

// Icon order matches the facility list order in all five message files:
// toilets, cafés, hotels, souvenirs, parking, ATMs, grocery, fuel/EV, pharmacy, bikes
const FACILITY_ICONS = ["🚻", "☕", "🏨", "🛍️", "🅿️", "💳", "🛒", "⛽", "💊", "🚲"];

export default async function FacilitiesSection() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("facilities");
  const items = t.raw("items") as { type: string; hint: string }[];

  return (
    <section className="section" id="facilities">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{ui("practical")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="fac-grid">
          {items.map((item, i) => (
            <div className="fac-card" key={i}>
              <span className="fac-icon" aria-hidden="true">
                {FACILITY_ICONS[i % FACILITY_ICONS.length]}
              </span>
              <h3>{item.type}</h3>
              <p>{item.hint}</p>
            </div>
          ))}
        </div>

        <div className="note-box">{t("note")}</div>
      </div>
    </section>
  );
}
