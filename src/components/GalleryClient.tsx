"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

type GalleryItem = { src: string; caption: string };

export default function GalleryClient({ items }: { items: GalleryItem[] }) {
  const ui = useTranslations("ui");
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <figure
            className="gallery-item"
            key={item.src}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(i);
              }
            }}
            aria-label={item.caption}
          >
            <img
              src={item.src}
              alt={item.caption}
              loading={i < 4 ? "eager" : "lazy"}
            />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {active !== null && items[active] && (
        <div
          className="lightbox"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={items[active].caption}
        >
          <button
            className="lb-close"
            onClick={() => setActive(null)}
            aria-label={ui("close")}
          >
            ×
          </button>
          <img src={items[active].src} alt={items[active].caption} />
          <p className="lb-caption">{items[active].caption}</p>
        </div>
      )}
    </>
  );
}
