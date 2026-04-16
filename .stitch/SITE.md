# Greenway Landscaping — Site Vision

## 1. Overview

A premium local landscaping company website for **Greenway Landscaping** based in **Edison, NJ**. This is a template built by a web agency to show potential clients what we can design for them. Single-page landing page — nav links scroll to sections via anchor links. No separate pages.

**Vibe:** "The Curated Grove" — organic editorialism, editorial luxury, generous whitespace, tonal layering, glassmorphism. Like flipping through a premium architectural digest.

## 2. Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## 3. Design Tokens (from Stitch "Curated Grove" system)

| Role | Hex | Name |
|------|-----|------|
| Primary | `#002b14` | Deepest Forest |
| Primary Container | `#144227` | Forest Green |
| Secondary | `#795900` | Amber Gold |
| Secondary Container | `#fed174` | Light Gold |
| Tertiary | `#451500` | Terracotta Dark |
| Tertiary Container | `#652707` | Terracotta |
| Surface | `#e9ffeb` | Soft Green-White |
| Surface Container | `#c8fad3` | Sage |
| Surface Container Low | `#d0ffda` | Pale Green |
| Surface Container Lowest | `#ffffff` | White (cards) |
| Surface Dim | `#b4e6c0` | Muted Sage |
| On Surface | `#00210e` | Near-Black Green |
| Inverse Surface | `#07381e` | Dark (footer/banners) |
| Outline Variant | `#c1c9c0` | Ghost Border |

**Typography:** Epilogue (headlines, bold, tight tracking) + Manrope (body, generous line-height 1.6-1.8)

## 4. Sitemap

Single page — all sections on `index`. Nav uses anchor scroll links.

- [x] `index` — Single-page landing (all sections below)

### Sections (top to bottom):
1. **Floating Navbar** — Glassmorphic pill, logo left, anchor nav links (Home, Services, About, Portfolio, Contact), "Free Estimate" CTA button scrolls to form
2. **Hero** — Full-height, gradient bg (#002b14 → #144227), bold Epilogue headline, subtext, two CTAs (Free Estimate + See Our Work), trust badges row
3. **Services** — 6 cards (3x2): Lawn Care, Landscape Design, Hardscaping, Tree Services, Irrigation, Seasonal Cleanup
4. **Why Us** — 4 value props: 15+ Years, Licensed & Insured, Satisfaction Guaranteed, Eco-Friendly
5. **Portfolio** — 6 project image cards showing completed work
6. **Testimonials** — 3 client review cards with gold stars
7. **Free Estimate Form** — Contact form: name, phone, email, service dropdown, message, submit. UI only (no backend yet — future integration)
8. **Footer** — Dark bg, 4 columns: company info, nav links, services, contact. Social icons. "Designed by [Agency Name]" credit.

## 5. Roadmap

1. ~~Generate homepage wireframe in Stitch~~ DONE
2. Generate visual assets via Nano Banana
3. Build and refine components via 21st Magic
4. Implement single-page site in Next.js
5. Test and deploy

## 6. Upsells (not included in base $50/mo)

These are additional pages/features we can offer for extra monthly cost:
- Dedicated About Us page
- Individual service pages with detailed info
- Blog / seasonal tips section
- Portfolio gallery with case studies
- Service area map
- Online booking / scheduling integration
- SEO optimization package
