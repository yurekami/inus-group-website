"use client";

import Image from "next/image";
import { useLanguage } from "../i18n";

export function Hero() {
  const { t, locale } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">{t.hero.eyebrow}</span>
        <h1 className="hero-title">
          {t.hero.title}
          <br />
          {locale === "ko" ? (
            <em>{t.hero.titleHighlight}</em>
          ) : (
            <>
              Through <em>{t.hero.titleHighlight}</em>
            </>
          )}
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-cta">
          <button
            onClick={() => scrollToSection("subsidiaries")}
            className="btn btn-primary"
          >
            <span>{t.hero.cta.primary}</span>
            <span className="btn-arrow">→</span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn btn-outline"
          >
            {t.hero.cta.secondary}
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-globe-minimal">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/600px-Earth_Western_Hemisphere_transparent_background.png"
            alt="Global Network"
            className="globe-img"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}
