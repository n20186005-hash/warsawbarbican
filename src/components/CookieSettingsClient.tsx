"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

export default function CookieSettingsClient({
  title,
  description,
  essential,
  essentialText,
  analytics,
  analyticsText,
  save,
  saved,
  back,
}: {
  title: string;
  description: string;
  essential: string;
  essentialText: string;
  analytics: string;
  analyticsText: string;
  save: string;
  saved: string;
  back: string;
}) {
  const ui = useTranslations("ui");
  const [analyticsOn, setAnalyticsOn] = useState(false);
  const [savedFlag, setSavedFlag] = useState(false);

  useEffect(() => {
    try {
      const prefs = JSON.parse(localStorage.getItem("cookiePrefs") || "{}");
      setAnalyticsOn(!!prefs.analytics);
    } catch {
      // ignore
    }
  }, []);

  const handleSave = () => {
    try {
      localStorage.setItem(
        "cookiePrefs",
        JSON.stringify({ essential: true, analytics: analyticsOn })
      );
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event("consent-updated"));
    setSavedFlag(true);
    setTimeout(() => setSavedFlag(false), 2500);
  };

  return (
    <div className="policy-page">
      <div className="container">
        <h1>{title}</h1>
        <p className="updated">{description}</p>

        <div className="card" style={{ marginBottom: "1rem" }}>
          <h3>{essential}</h3>
          <p>{essentialText}</p>
          <p>
            <strong>✓</strong> {ui("alwaysOn")}
          </p>
        </div>

        <div className="card" style={{ marginBottom: "1.5rem" }}>
          <h3>{analytics}</h3>
          <p>{analyticsText}</p>
          <label style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={analyticsOn}
              onChange={(e) => setAnalyticsOn(e.target.checked)}
            />
            <span>{analytics}</span>
          </label>
        </div>

        <div className="map-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            {save}
          </button>
          <Link href="/" className="btn btn-ghost" style={{ color: "var(--ink)", borderColor: "var(--line)" }}>
            {back}
          </Link>
        </div>
        {savedFlag && <p className="note-box">{saved}</p>}
      </div>
    </div>
  );
}
