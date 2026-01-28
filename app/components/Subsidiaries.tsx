"use client";

import Image from "next/image";
import { useLanguage } from "../i18n";

const images = [
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
];

const websiteUrls = [
  "https://www.inuslogistics.com/main/",
  "https://inuslabs.com/",
  "https://www.inusfinance.com/",
  "https://www.inustradepartners.com/",
  "https://www.inusproperty.com/",
];

export function Subsidiaries() {
  const { t } = useLanguage();

  return (
    <section id="subsidiaries" className="section section-dark">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">{t.subsidiaries.eyebrow}</span>
          <h2 className="section-title">
            {t.subsidiaries.title}
            <br />
            <em>{t.subsidiaries.titleHighlight}</em>
          </h2>
          <p className="section-description">{t.subsidiaries.description}</p>
        </div>

        <div className="subsidiaries-grid stagger-children">
          {t.subsidiaries.companies.map((sub, index) => (
            <a
              key={sub.name}
              href={websiteUrls[index]}
              className="subsidiary-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={images[index]}
                alt={sub.name}
                className="subsidiary-image"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="subsidiary-content">
                <span className="subsidiary-label">{sub.label}</span>
                <h3 className="subsidiary-name">{sub.name}</h3>
                <p className="subsidiary-desc">{sub.description}</p>
                <div className="subsidiary-features">
                  {sub.features.map((feature) => (
                    <span key={feature} className="subsidiary-feature">
                      {feature}
                    </span>
                  ))}
                </div>
                <span className="subsidiary-link">
                  {t.subsidiaries.learnMore} <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
