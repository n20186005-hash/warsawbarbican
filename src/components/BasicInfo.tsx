import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config";

export default async function BasicInfo() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("basicInfo");

  return (
    <section className="section section-alt" id="basicInfo">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{ui("essential")}</span>
          <h2>{t("title")}</h2>
          <p>{t("intro")}</p>
        </div>
        <div className="info-card">
          <table className="info-table">
            <tbody>
              {t.raw("rows").map((row: { label: string; value: string }, i: number) => (
                <tr key={i}>
                  <td className="label">{row.label}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: "1.1rem" }}>
          <a
            className="btn btn-primary"
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("directions")}
          </a>
        </div>
      </div>
    </section>
  );
}
