import { getTranslations } from "next-intl/server";

export default async function StoriesSection() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("stories");

  return (
    <section className="section section-alt" id="stories">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{ui("stories")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        {t.raw("items").map(
          (item: { kind: string; title: string; text: string }, i: number) => (
            <div className="story-card" key={i}>
              <span className="story-kind">{item.kind}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
