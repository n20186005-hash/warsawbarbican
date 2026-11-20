import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config";

export default async function Footer() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("footer");
  const navT = await getTranslations("header");
  const locale = await getLocale();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{ui("brand")}</h4>
            <p>{t("tagline")}</p>
            <p className="footer-note">{t("editNote")}</p>
          </div>
          <div>
            <h4>{t("quickLinks")}</h4>
            <ul>
              <li>
                <a href={`/${locale}/#hours`}>{navT("nav.hours")}</a>
              </li>
              <li>
                <a href={`/${locale}/#walkingTour`}>{navT("nav.walkingTour")}</a>
              </li>
              <li>
                <a href={`/${locale}/#faq`}>{navT("nav.faq")}</a>
              </li>
              <li>
                <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {t("mapLink")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t("legal")}</h4>
            <ul>
              <li>
                <Link href="/privacy-policy">{t("privacy")}</Link>
              </li>
              <li>
                <Link href="/terms-of-service">{t("terms")}</Link>
              </li>
              <li>
                <Link href="/cookie-settings">{t("cookies")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} warsawbarbican.com — {t("rights")}
          </span>
          <span>
            {t("lastUpdated")}: {siteConfig.lastUpdated}
          </span>
        </div>
        <p className="footer-note">{t("photoCredit")}</p>
      </div>
    </footer>
  );
}
