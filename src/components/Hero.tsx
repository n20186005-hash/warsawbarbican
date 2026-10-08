import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="hero" id="overview">
      <div
        className="hero-bg"
        role="img"
        aria-label={t("imgAlt")}
        style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-kicker">Warsaw · Old Town (Stare Miasto) · Since 1548</span>
        <span className="hero-badge">{t("freeBadge")}</span>
        <h1>{t("title")}</h1>
        <p className="hero-sub">{t("subtitle")}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#hours">
            {t("ctaPrimary")}
          </a>
          <a className="btn btn-ghost" href="#map">
            {t("ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
