import Link from "next/link";

const sections = [
  { id: "hero", label: "Home" },
  { id: "logistics", label: "Logistics" },
  { id: "technology", label: "Technology" },
  { id: "finance", label: "Finance" },
  { id: "trade", label: "Trade" },
  { id: "real-estate", label: "Real Estate" },
  { id: "contact", label: "Contact" },
];

export function Indicator() {
  return (
    <nav aria-label="Section navigation">
      <ul className="indicator">
        {sections.map((section) => (
          <li key={section.id}>
            <Link href={`#${section.id}`}>
              <span className="sr-only">{section.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
