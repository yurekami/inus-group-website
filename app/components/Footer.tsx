"use client";

import { useLanguage } from "../i18n";

const websiteUrls = [
  "https://www.inuslogistics.com/main/",
  "https://inuslabs.com/",
  "https://www.inusfinance.com/",
  "https://www.inustradepartners.com/",
  "https://www.inusproperty.com/",
];

export function Footer() {
  const { t, locale } = useLanguage();

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const quickLinks = [
    { label: t.footer.links.about, href: "#about" },
    { label: t.footer.links.subsidiaries, href: "#subsidiaries" },
    { label: t.footer.links.contact, href: "#contact" },
  ];

  const subsidiaryLinks = t.subsidiaries.companies.map((sub, index) => ({
    label: sub.name,
    href: websiteUrls[index],
  }));

  const legalLinks = [
    { label: t.footer.links.privacyPolicy, href: "#" },
    { label: t.footer.links.termsOfService, href: "#" },
    { label: t.footer.links.cookiePolicy, href: "#" },
    { label: t.footer.links.sustainabilityReport, href: "#" },
    { label: t.footer.links.esgCommitment, href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/inus-logo-white.svg"
                alt={locale === "ko" ? "이너스 그룹" : "INUS Group"}
                className="footer-logo-img"
              />
            </div>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>

          <div className="footer-column">
            <h4>{t.footer.quickLinks}</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      padding: 0,
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>{t.footer.ourSubsidiaries}</h4>
            <ul className="footer-links">
              {subsidiaryLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>{t.footer.legal}</h4>
            <ul className="footer-links">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="footer-legal">
            <a href="#">{t.footer.links.privacyPolicy}</a>
            <a href="#">{t.footer.links.termsOfService}</a>
            <a href="#">{t.footer.links.cookiePolicy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
