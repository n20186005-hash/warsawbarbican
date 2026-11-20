import { getLocale, getTranslations } from "next-intl/server";

type OpenMeteoData = {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    weather_code: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
  };
};

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.2506035&longitude=21.01008" +
  "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m" +
  "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
  "&timezone=Europe%2FWarsaw&forecast_days=5";

const bcp47: Record<string, string> = {
  pl: "pl-PL",
  en: "en-GB",
  zh: "zh-TW",
  ru: "ru-RU",
  de: "de-DE",
};

function WeatherGlyph({ code }: { code: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const viewBox = "0 0 48 48";

  if (code === 0) {
    return (
      <svg viewBox={viewBox} aria-hidden="true">
        <circle cx="24" cy="24" r="9" {...common} />
        <g {...common}>
          <path d="M24 4v5M24 39v5M4 24h5M39 24h5M10.5 10.5l3.5 3.5M34 34l3.5 3.5M37.5 10.5L34 14M14 34l-3.5 3.5" />
        </g>
      </svg>
    );
  }
  if (code === 1 || code === 2) {
    return (
      <svg viewBox={viewBox} aria-hidden="true">
        <circle cx="22" cy="20" r="7" {...common} />
        <g {...common}>
          <path d="M22 5v4M22 31v4M6 20h4M34 20h4M12 10l2.5 2.5M29.5 27.5 32 30M32 10l-2.5 2.5M14.5 27.5 12 30" />
        </g>
        <path
          d="M17 33c-1.5-3.5 1-7 5-7s6.5 3.5 5 7z"
          fill="currentColor"
          opacity="0.9"
          stroke="none"
        />
        <path d="M13 39h18" {...common} />
      </svg>
    );
  }
  if (code === 3) {
    return (
      <svg viewBox={viewBox} aria-hidden="true">
        <path
          d="M8 26a8 8 0 0 1 8-8 10 10 0 0 1 19 3 7 7 0 0 1 3 14H11a6 6 0 0 1-3-9z"
          {...common}
        />
      </svg>
    );
  }
  if (code === 45 || code === 48) {
    return (
      <svg viewBox={viewBox} aria-hidden="true">
        <path d="M9 20h26" {...common} />
        <path d="M12 27h24" {...common} />
        <path d="M15 34h18" {...common} />
      </svg>
    );
  }
  if (code >= 51 && code <= 57) {
    return (
      <svg viewBox={viewBox} aria-hidden="true">
        <path d="M9 22a7 7 0 0 1 7-7 9 9 0 0 1 17 2 6 6 0 0 1 2 12H12a5 5 0 0 1-3-7z" {...common} />
        <path d="M14 33h.01M20 36h.01M26 33h.01M32 36h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (code >= 61 && code <= 67) {
    return (
      <svg viewBox={viewBox} aria-hidden="true">
        <path d="M9 20a7 7 0 0 1 7-7 9 9 0 0 1 17 2 6 6 0 0 1 2 12H12a5 5 0 0 1-3-7z" {...common} />
        <path d="M16 31v5M24 29v7M32 31v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (code >= 71 && code <= 77) {
    return (
      <svg viewBox={viewBox} aria-hidden="true">
        <path d="M9 22a7 7 0 0 1 7-7 9 9 0 0 1 17 2 6 6 0 0 1 2 12H12a5 5 0 0 1-3-7z" {...common} />
        <path d="M15 30l2-3M22 30l2-3M29 30l2-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 36h3M20 36h4M27 36h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (code >= 80 && code <= 82) {
    return (
      <svg viewBox={viewBox} aria-hidden="true">
        <path d="M8 21a7 7 0 0 1 7-7 9 9 0 0 1 18 2 6 6 0 0 1 2 12H11a5 5 0 0 1-3-7z" {...common} />
        <path d="M16 31l-1.5 4M23 31l-1.5 4M30 31l-1.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (code === 85 || code === 86) {
    return (
      <svg viewBox={viewBox} aria-hidden="true">
        <path d="M9 22a7 7 0 0 1 7-7 9 9 0 0 1 17 2 6 6 0 0 1 2 12H12a5 5 0 0 1-3-7z" {...common} />
        <path d="M15 29l-2 3M22 29l-2 3M29 29l-2 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  // 95–99: thunderstorm
  return (
    <svg viewBox={viewBox} aria-hidden="true">
      <path d="M9 20a7 7 0 0 1 7-7 9 9 0 0 1 17 2 6 6 0 0 1 2 12H12a5 5 0 0 1-3-7z" {...common} />
      <path d="M25 27l-4 6h5l-3 6 8-9h-5l3-3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default async function WeatherSection() {
  const ui = await getTranslations("ui");
  const t = await getTranslations("weather");
  const locale = await getLocale();
  const intlLocale = bcp47[locale] ?? "en-GB";

  let data: OpenMeteoData | null = null;
  try {
    const res = await fetch(API_URL, { next: { revalidate: 1800 } });
    if (res.ok) {
      data = (await res.json()) as OpenMeteoData;
    }
  } catch {
    data = null;
  }

  const formatDay = (isoDate: string) =>
    new Date(`${isoDate}T00:00:00`).toLocaleDateString(intlLocale, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

  if (!data) {
    return (
      <section className="section section-alt" id="weather">
        <div className="container">
          <div className="section-head">
            <span className="kicker">{ui("before")}</span>
            <h2>{t("title")}</h2>
          </div>
          <div className="card weather-fallback">
            <h3>{t("fallbackTitle")}</h3>
            <p>{t("fallbackText")}</p>
          </div>
        </div>
      </section>
    );
  }

  const current = data.current;
  const daily = data.daily;

  return (
    <section className="section section-alt" id="weather">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{ui("before")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="weather-grid">
          <div className="card weather-current">
            <div className="weather-now">
              <span className="weather-glyph large">
                <WeatherGlyph code={current.weather_code} />
              </span>
              <div>
                <span className="weather-temp">
                  {Math.round(current.temperature_2m)} {t("unitC")}
                </span>
                <span className="weather-desc">
                  {t(`codes.${current.weather_code}`)}
                </span>
              </div>
            </div>
            <ul className="weather-facts">
              <li>
                {t("feelsLike")}:{" "}
                <strong>
                  {Math.round(current.apparent_temperature)} {t("unitC")}
                </strong>
              </li>
              <li>
                {t("wind")}: <strong>{Math.round(current.wind_speed_10m)} km/h</strong>
              </li>
              <li>
                {t("humidity")}: <strong>{current.relative_humidity_2m}%</strong>
              </li>
            </ul>
          </div>

          <div className="weather-days">
            {daily.time.map((day, i) => {
              const code = daily.weather_code[i];
              const rain = daily.precipitation_probability_max[i];
              return (
                <div className="card weather-day" key={day}>
                  <span className="weather-day-label">{formatDay(day)}</span>
                  <span className="weather-glyph">
                    <WeatherGlyph code={code} />
                  </span>
                  <span className="weather-desc" title={t(`codes.${code}`)}>
                    {t(`codes.${code}`)}
                  </span>
                  <span className="weather-temps">
                    <span className="max">
                      {Math.round(daily.temperature_2m_max[i])}°
                    </span>
                    <span className="min">
                      {Math.round(daily.temperature_2m_min[i])}°
                    </span>
                  </span>
                  <span className="weather-rain">
                    🌧 {rain !== undefined ? `${rain}%` : "–"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <p className="weather-note">{t("updatedNote")}</p>
      </div>
    </section>
  );
}
