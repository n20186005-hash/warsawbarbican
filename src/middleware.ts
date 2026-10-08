import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { siteConfig } from "@/config";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

function getHost(request: NextRequest): string {
  const xfh = request.headers.get("x-forwarded-host");
  if (xfh) return xfh.split(":")[0];
  return request.nextUrl.hostname;
}

export default function middleware(request: NextRequest) {
  const host = getHost(request);
  const proto = request.headers.get("x-forwarded-proto")?.split(",")[0] ?? "https";

  // Normalize only the canonical production host to non-www HTTPS.
  // This keeps dev/staging (localhost, preview domains) working as-is.
  const isProd = host === siteConfig.domain || host === `www.${siteConfig.domain}`;
  const isWww = host.startsWith("www.");
  const isHttp = proto === "http";

  if (isProd && (isWww || isHttp)) {
    const url = request.nextUrl.clone();
    url.hostname = host.replace(/^www\./, "");
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(pl|en|zh|ru|de)/:path*"],
};
