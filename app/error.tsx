"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="error-page">
      <div className="error-content">
        <h1 className="error-title">Oops</h1>
        <h2 className="error-subtitle">Something went wrong</h2>
        <p className="error-description">
          We apologize for the inconvenience. Please try again.
        </p>
        <button onClick={reset} className="btn btn-primary">
          <span>Try Again</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </main>
  );
}
