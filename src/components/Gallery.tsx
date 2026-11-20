import { getTranslations } from "next-intl/server";
import GalleryClient from "./GalleryClient";

export default async function Gallery() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("gallery");
  const items = t.raw("items") as { src: string; caption: string }[];

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{ui("gallery")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <GalleryClient items={items} />
      </div>
    </section>
  );
}
