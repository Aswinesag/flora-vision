# FloraVision Landing Page

A responsive plant storefront landing page built from the provided Figma design using Next.js and TailwindCSS.

## Overview

The page presents a dark, nature-focused FloraVision brand experience with:

- Full-screen plant hero section
- Glassmorphism product feature cards
- Plant images overflowing out of product cards
- Trendy plants section
- Top-selling plants grid
- Customer testimonials
- O2 plants feature section
- Footer with quick links and newsletter form

## Tech Stack

- Next.js App Router
- React
- TypeScript
- TailwindCSS
- `next/image` for optimized local assets

## Project Structure

```text
app/
  components/
    Button.tsx
    Footer.tsx
    HeroBanner.tsx
    Navbar.tsx
    PlantCard.tsx
    SectionTitle.tsx
    Stars.tsx
    TestimonialCard.tsx
  data.ts
  globals.css
  layout.tsx
  page.tsx
public/
  figma-assets/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Validation

Before submitting, run:

```bash
npm run lint
npm run build
```
