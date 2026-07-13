# Moonlight Peaks Guide

An unofficial, search-intent-focused guide site for **Moonlight Peaks**. It covers platform availability, beginner progression, romance, gifts, money, spells, farming, fishing, and selected quest solutions.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Static export via `output: "export"`

## Local development

```bash
npm ci
npm run dev
```

## Build and validation

```bash
npm run lint
npm run typecheck
npm run build
npm run check:links
npm run check:seo
npm run check:responsive
```

## Site URL

Set the production domain through:

```text
NEXT_PUBLIC_SITE_URL=https://YOUR_DOMAIN_HERE
```

Canonical URLs, Open Graph URLs, sitemap URLs, robots references, and JSON-LD URLs all use this value. Do not use a competitor domain.

Optional public variables:

```text
NEXT_PUBLIC_GA_ID
NEXT_PUBLIC_CLARITY_ID
NEXT_PUBLIC_ADSENSE_CLIENT
```

## Vercel

```text
Framework Preset: Next.js
Install Command: npm ci
Build Command: npm run build
Output Directory: out
```

The site is fan-made and is not affiliated with Little Chicken, XSEED Games, Marvelous, Nintendo, Steam, or Google Play.
