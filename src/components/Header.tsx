import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LanguageToggle from "./LanguageToggle";

export default async function Header() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("header");
  const locale = await getLocale();

  const navItems = [
    { key: "overview", href: "#overview" },
    { key: "hours", href: "#hours" },
    { key: "history", href: "#history" },
    { key: "transport", href: "#transport" },
    { key: "walkingTour", href: "#walkingTour" },
    { key: "nearby", href: "#nearby" },
    { key: "photos", href: "#photos" },
    { key: "faq", href: "#faq" },
    { key: "map", href: "#map" },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <svg
            className="brand-mark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 21h18" />
            <path d="M5 21V7l7-4 7 4v14" />
            <path d="M9 21v-6h6v6" />
          </svg>
          {ui("brand")}
        </Link>

        <nav className="main-nav" aria-label={ui("main")}>
          {navItems.map((item) => (
            <a key={item.key} href={`/${locale}/${item.href}`}>
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <LanguageToggle />
      </div>
    </header>
  );
}
