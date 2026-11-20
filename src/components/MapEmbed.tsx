import { getLocale, getTranslations } from "next-intl/server";
import { siteConfig } from "@/config";

export default async function MapEmbed() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("mapSection");

  const locale = await getLocale();
  const mapLocale = locale === "zh" ? "zh-TW" : locale;

  return (
    <section className="section" id="map">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{ui("map")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <iframe
          className="map-frame"
          src={siteConfig.mapsEmbedSrc.replaceAll("zh-CN", mapLocale)}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          title={`${t("title")} — Google Maps`}
        />

        <div className="map-meta">
          <div className="meta-item">
            <strong>{t("transportTitle")}:</strong>
            <br />
            {t("tramLine")}
            <br />
            {t("metroLine")}
            <br />
            {t("walking")}
          </div>
          <div className="meta-item">
            <strong>{t("authorityText")}:</strong>{" "}
            <a
              href="https://barbakan.muzeumwarszawy.pl/wizyta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("authorityLink")}
            </a>
            <br />
            <strong>{ui("plusCode")}:</strong> {siteConfig.plusCode}
          </div>
        </div>

        <div className="map-actions">
          <a
            className="btn btn-primary"
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("openInMaps")} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
