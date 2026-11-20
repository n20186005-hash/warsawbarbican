import type { Metadata } from "next";
import { siteConfig } from "@/config";
import defaultMessages from "@/messages/pl.json";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: defaultMessages.meta.title,
    template: "%s",
  },
  description: defaultMessages.meta.description,
  applicationName: defaultMessages.ui.guideName,
  formatDetection: { telephone: false },
};

// The root layout is a pass-through: the [locale] layout renders <html> with the
// correct lang attribute, per the next-intl App Router pattern.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
