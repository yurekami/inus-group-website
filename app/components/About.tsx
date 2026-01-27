"use client";

import { Globe, Cpu, Leaf } from "lucide-react";
import { useLanguage } from "../i18n";

const icons = [Globe, Cpu, Leaf];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">{t.about.eyebrow}</span>
          <h2 className="section-title">
            {t.about.title}
            <br />
            {t.about.titleLine2} <em>{t.about.titleHighlight}</em>
          </h2>
          <p className="section-description">{t.about.description}</p>
        </div>

        <div className="pillars stagger-children">
          {t.about.pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <article key={pillar.number} className="pillar">
                <span className="pillar-number">{pillar.number}</span>
                <Icon className="pillar-icon" strokeWidth={1} />
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-text">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
