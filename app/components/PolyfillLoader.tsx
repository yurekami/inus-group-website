"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function PolyfillLoader() {
  const [needsPolyfill, setNeedsPolyfill] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if scroll-timeline is natively supported
    const supportsScrollTimeline = CSS.supports("animation-timeline", "--test");
    setNeedsPolyfill(!supportsScrollTimeline);

    if (supportsScrollTimeline) {
      document.documentElement.classList.add("native-scroll-timeline");
    }
  }, []);

  // Don't render anything until we know if polyfill is needed
  if (needsPolyfill === null) return null;
  if (!needsPolyfill) return null;

  return (
    <Script
      src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"
      strategy="afterInteractive"
      onLoad={() => {
        document.documentElement.classList.add("polyfill-loaded");
      }}
    />
  );
}
