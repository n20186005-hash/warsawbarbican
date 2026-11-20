import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFoundPage() {
  const ui = await getTranslations("ui");
  return (
    <div className="policy-page">
      <div className="container" style={{ textAlign: "center" }}>
        <h1>404</h1>
        <p className="updated">{ui("notFound")}</p>
        <Link href="/" className="btn btn-primary" style={{ display: "inline-flex" }}>
          {ui("home")}
        </Link>
      </div>
    </div>
  );
}
