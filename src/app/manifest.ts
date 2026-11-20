import type { MetadataRoute } from "next";
import defaultMessages from "@/messages/pl.json";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultMessages.ui.guideName,
    short_name: defaultMessages.ui.brand,
    description: defaultMessages.meta.description,
    start_url: "/pl",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3a7a8d",
    lang: "pl",
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
