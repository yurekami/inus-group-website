"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../i18n";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale, toggleLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/" className="nav-logo">
        <img
          src="/inus-logo-white.svg"
          alt={locale === "ko" ? "이너스 그룹" : "INUS Group"}
          className="nav-logo-img"
        />
      </Link>

      <ul className="nav-links">
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="nav-link"
          >
            {t.nav.about}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("subsidiaries")}
            className="nav-link"
          >
            {t.nav.subsidiaries}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link"
          >
            {t.nav.contact}
          </button>
        </li>
      </ul>

      <button className="nav-lang" onClick={toggleLocale}>
        {locale === "en" ? "KO" : "EN"}
      </button>
    </nav>
  );
}
