"use client";

import { useEffect, useState } from "react";

interface JourneyOverlaysProps {
  scrollProgress: number;
  activeSection: number;
}

const sections = [
  {
    id: "singularity",
    title: "INUS",
    subtitle: "Where universes begin",
    description: null,
    forceClass: null,
  },
  {
    id: "logistics",
    title: "MOVE",
    subtitle: "The Force of Motion",
    description: "We orchestrate the flow of matter across dimensions. Global supply chains. Infinite reach.",
    forceClass: "force-logistics",
  },
  {
    id: "technology",
    title: "CONNECT",
    subtitle: "The Force of Intelligence",
    description: "We weave the neural networks of tomorrow. AI. Cloud. Data. The synapses of progress.",
    forceClass: "force-technology",
  },
  {
    id: "finance",
    title: "GROW",
    subtitle: "The Force of Expansion",
    description: "We fuel the engines of creation. Capital flows where vision leads. Exponential futures.",
    forceClass: "force-finance",
  },
  {
    id: "trade",
    title: "EXCHANGE",
    subtitle: "The Force of Connection",
    description: "We bridge worlds. Markets converge. Borders dissolve. Commerce without limits.",
    forceClass: "force-trade",
  },
  {
    id: "realestate",
    title: "BUILD",
    subtitle: "The Force of Form",
    description: "We crystallize dreams into structure. Spaces that endure. Legacy in concrete and light.",
    forceClass: "force-realestate",
  },
  {
    id: "convergence",
    title: "CONVERGE",
    subtitle: "Create Your Universe",
    description: null,
    forceClass: null,
    isCTA: true,
  },
];

export function JourneyOverlays({ scrollProgress, activeSection }: JourneyOverlaysProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentSection = sections[activeSection] || sections[0];
  const isVisible = true; // Always show the active section

  // Calculate opacity for smooth transitions
  const sectionProgress = (scrollProgress * 7) % 1;
  const fadeIn = Math.min(sectionProgress * 3, 1);
  const fadeOut = sectionProgress > 0.7 ? 1 - (sectionProgress - 0.7) * 3.33 : 1;
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <div
      className={`overlay ${isVisible ? "visible" : ""}`}
      style={{ opacity: mounted ? opacity : 0 }}
    >
      <div className="overlay-content">
        {currentSection.id === "singularity" && scrollProgress < 0.1 && (
          <>
            <h1 className="text-massive">{currentSection.title}</h1>
            <p className="text-subtitle">{currentSection.subtitle}</p>
          </>
        )}

        {currentSection.id !== "singularity" && currentSection.id !== "convergence" && (
          <>
            <h2 className={`text-force ${currentSection.forceClass}`}>
              {currentSection.title}
            </h2>
            <p className="text-subtitle">{currentSection.subtitle}</p>
            <p className="text-description">{currentSection.description}</p>
          </>
        )}

        {currentSection.id === "convergence" && (
          <>
            <h2 className="text-force" style={{
              background: "linear-gradient(90deg, #22d3ee, #a855f7, #fbbf24, #f97316, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 60px rgba(255,255,255,0.3))",
            }}>
              {currentSection.title}
            </h2>
            <p className="text-subtitle">{currentSection.subtitle}</p>
            <div className="cta-container" style={{ marginTop: "3rem" }}>
              <a href="mailto:contact@inus-group.com" className="cta-button">
                <span>Begin Your Journey</span>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function JourneyProgress({
  activeSection,
  onSectionClick,
}: {
  activeSection: number;
  onSectionClick: (index: number) => void;
}) {
  return (
    <nav className="journey-progress" aria-label="Journey progress">
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={`progress-dot ${activeSection === index ? "active" : ""}`}
          onClick={() => onSectionClick(index)}
          aria-label={`Go to ${section.title}`}
          aria-current={activeSection === index ? "step" : undefined}
        />
      ))}
    </nav>
  );
}

export function ScrollHint({ visible }: { visible: boolean }) {
  return (
    <div className={`scroll-hint ${visible ? "" : "hidden"}`}>
      <span className="scroll-hint-text">Scroll to begin</span>
      <div className="scroll-hint-line" />
    </div>
  );
}
