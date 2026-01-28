"use client";

import { useLanguage } from "../i18n";

export function Ecosystem() {
  const { t, locale } = useLanguage();

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">{t.ecosystem.eyebrow}</span>
          <h2 className="section-title">
            {t.ecosystem.title}
            <br />
            <em>{t.ecosystem.titleHighlight}</em>
          </h2>
          <p className="section-description">{t.ecosystem.description}</p>
        </div>

        <div className="ecosystem animate-on-scroll">
          <div className="ecosystem-visual">
            <div className="ecosystem-ring" />
            <div className="ecosystem-ring" />
            <div className="ecosystem-ring" />
            <div className="ecosystem-center">
              <img
                src="/inus-logo.svg"
                alt={locale === "ko" ? "이너스 그룹" : "INUS Group"}
                className="ecosystem-logo"
              />
            </div>
          </div>

          <div className="ecosystem-features">
            {t.ecosystem.features.map((feature) => (
              <div key={feature.number} className="ecosystem-feature">
                <span className="feature-number">{feature.number}</span>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}

            <button
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-primary"
              style={{ marginTop: "2rem" }}
            >
              <span>{t.ecosystem.cta}</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
