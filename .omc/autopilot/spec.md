# INUS Group Website - Production Readiness Spec

## Priority 1: Critical
1. ✅ Logo SVGs verified (already present)
2. Configure next.config.ts with image remote patterns
3. Create not-found.tsx (404 page)
4. Create error.tsx (error boundary)

## Priority 2: High
1. Add sitemap.ts
2. Add robots.ts
3. Implement contact form rate limiting
4. Add OG image metadata to layout.tsx
5. Migrate Hero and Subsidiaries to next/image

## Priority 3: Medium
1. Add prefers-reduced-motion CSS
2. Add form field max lengths
3. Add Resend API timeout handling

## Implementation Order
1. next.config.ts - enables image optimization
2. app/not-found.tsx
3. app/error.tsx
4. app/sitemap.ts
5. app/robots.ts
6. app/components/Hero.tsx - next/image
7. app/components/Subsidiaries.tsx - next/image
8. app/actions/contact.ts - rate limiting + timeout
9. app/layout.tsx - OG metadata
10. app/globals.css - reduced motion
11. app/components/ContactForm.tsx - maxLength

## No New Dependencies Required
All implementations use built-in Next.js 16 features.
