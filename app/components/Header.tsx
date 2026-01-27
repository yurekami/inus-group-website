"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="logo">
        INUS
      </Link>

      <div className="fieldset-wrapper">
        <fieldset>
          <legend className="sr-only">Transition Effects</legend>

          <input
            type="radio"
            id="blink-effect"
            name="effect"
            value="blink"
            defaultChecked
            className="sr-only"
          />
          <label htmlFor="blink-effect">Blink</label>

          <input
            type="radio"
            id="horizontal-scroll-effect"
            name="effect"
            value="horizontal-scroll"
            className="sr-only"
          />
          <label htmlFor="horizontal-scroll-effect">Slide</label>

          <input
            type="radio"
            id="backwards-scroll-effect"
            name="effect"
            value="backwards-scroll"
            className="sr-only"
          />
          <label htmlFor="backwards-scroll-effect">Reverse</label>

          <input
            type="radio"
            id="zoom-scroll-effect"
            name="effect"
            value="zoom-scroll"
            className="sr-only"
          />
          <label htmlFor="zoom-scroll-effect">Zoom</label>
        </fieldset>
      </div>
    </header>
  );
}
