# My V0 Project

## Overview
A Next.js 14 website for an AI consulting/services business. Features include a landing page with services, case studies, pricing, and consultation booking CTAs. Built with Tailwind CSS v4, shadcn/ui components, and Framer Motion animations.

## Project Architecture
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Font**: Geist (via next/font)

## Project Structure
```
app/               - Next.js app router pages
  layout.tsx       - Root layout with theme provider
  page.tsx         - Main landing page
  privacy/         - Privacy policy page
  terms/           - Terms of service page
components/
  ui/              - shadcn/ui and custom components
  theme-provider.tsx - Dark/light theme provider
lib/
  utils.ts         - Utility functions (cn helper)
```

## Development
- **Dev server**: `npx next dev -p 5000 -H 0.0.0.0`
- **Build**: `npm run build`
- **Port**: 5000

## Recent Changes
- 2026-02-08: Initial Replit setup, configured for port 5000, clean dependency install
