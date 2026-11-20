import { getTranslations } from "next-intl/server";

export default async function Reviews() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("reviews");

  return (
    <section className="section section-alt" id="reviews">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{ui("reviews")}</span>
          <h2>{t("title")}</h2>
        </div>

        <div className="review-stat">{t("statLine")}</div>

        <div className="review-quotes">
          {t.raw("quotes").map(
            (quote: { text: string; source: string }, i: number) => (
              <div className="review-quote" key={i}>
                <blockquote>“{quote.text}”</blockquote>
                <cite>{quote.source}</cite>
              </div>
            )
          )}
        </div>

        <div className="map-actions">
          <a
            className="btn btn-primary"
            href="https://www.tripadvisor.com/Attraction_Review-g274856-d284938-Reviews-Barbican-Warsaw_Mazovia_Province_Central_Poland.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("link")} →
          </a>
        </div>
      </div>
    </section>
  );
}
