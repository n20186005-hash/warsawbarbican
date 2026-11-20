import { getTranslations } from "next-intl/server";

export default async function HistorySection() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("history");

  return (
    <section className="section section-alt" id="history">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{ui("architecture")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="intro-body" style={{ marginBottom: "2rem" }}>
          {t.raw("paragraphs").map((paragraph: string, i: number) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <h3 style={{ marginBottom: "1rem" }}>{t("timelineTitle")}</h3>
        <div className="timeline">
          {t.raw("timeline").map(
            (item: { year: string; title: string; text: string }, i: number) => (
              <div className="timeline-item" key={i}>
                <span className="year">{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
