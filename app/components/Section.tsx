interface SectionProps {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  contentClassName?: string;
  geometricFormClass?: string;
}

// Hoisted static background elements - created once, reused
const BackgroundElements = (
  <>
    <div className="bg-topo" />
    <div className="bg-glow bg-glow-1" />
    <div className="bg-glow bg-glow-2" />
  </>
);

export function Section({
  id,
  label,
  title,
  description,
  features,
  contentClassName = "",
  geometricFormClass,
}: SectionProps) {
  return (
    <section id={id} className="section">
      <div className={`content ${contentClassName}`}>
        {BackgroundElements}

        {/* Geometric Form — Abstract visual representation */}
        {geometricFormClass && (
          <div className={`geometric-form ${geometricFormClass}`} aria-hidden="true" />
        )}

        <div className="content-inner">
          <div className="section-content">
            <div className="section-label">{label}</div>
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{description}</p>

            <div className="section-features">
              {features.map((feature, index) => (
                <div key={index} className="feature">
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
