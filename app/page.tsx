"use client";

import { useEffect, useRef } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Subsidiaries } from "./components/Subsidiaries";
import { Ecosystem } from "./components/Ecosystem";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { HtmlLangUpdater } from "./components/HtmlLangUpdater";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .stagger-children"
    );
    animatedElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      <HtmlLangUpdater />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Subsidiaries />
        <Ecosystem />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
