import { getTranslations } from "next-intl/server";

export default async function SeasonalNotice() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("seasonal");

  return (
    <div className="seasonal-banner" role="status">
      <div className="inner">
        <span className="seasonal-tag">{ui("update")}</span>
        <p>{t("notice")}</p>
      </div>
    </div>
  );
}
