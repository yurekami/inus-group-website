# Implementation Plan: Production Readiness

## Phase 1: Core Infrastructure (Parallel)
- [1.1] next.config.ts - image remote patterns
- [1.2] not-found.tsx - 404 page
- [1.3] error.tsx - error boundary

## Phase 2: SEO (Sequential)
- [2.1] sitemap.ts
- [2.2] robots.ts (depends on sitemap)

## Phase 3: Image Optimization (Parallel, depends on Phase 1.1)
- [3.1] Hero.tsx - migrate to next/image
- [3.2] Subsidiaries.tsx - migrate to next/image

## Phase 4: Security & Reliability
- [4.1] contact.ts - rate limiting + timeout + validation

## Phase 5: Polish (Parallel)
- [5.1] layout.tsx - OG metadata
- [5.2] globals.css - reduced motion
- [5.3] ContactForm.tsx - maxLength attributes
