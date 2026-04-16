# Design System Strategy: The Curated Grove

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Curated Grove."**

We are moving away from the rigid, boxy constraints of traditional "landscaping" websites to create a digital experience that feels as intentional as a high-end estate. This system rejects the industrial "template" look in favor of **Organic Editorialism**. We utilize generous white space, intentional asymmetry, and a tactile sense of depth achieved not through shadows, but through tonal layering.

The goal is to evoke the feeling of flipping through a premium architectural digest. Elements should feel like they are "planted" within the layout — some overlapping, some breathing in wide-open spaces — mimicking the natural yet controlled beauty of a master-planned garden.

---

## 2. Colors & Surface Logic
Our palette is rooted in deep forest tones, sun-drenched ambers, and clay-rich terracottas. It is a sophisticated, earthen spectrum designed to convey authority and luxury.

### The "No-Line" Rule
**This design system strictly prohibits the use of 1px solid borders for sectioning or containment.** We define boundaries through **Background Shifts**.
- To separate a section, transition from `surface` (#e9ffeb) to `surface_container` (#c8fad3).
- To highlight a piece of content, place it on a `surface_container_highest` (#bceec8) block.

### Surface Hierarchy & Nesting
Think of the UI as a series of physical layers. We use the Material surface tiers to create "nested" depth:
1. **Base Layer:** `surface` (#e9ffeb) — The expansive lawn.
2. **Sectional Layer:** `surface_container` (#c8fad3) — Defined garden beds.
3. **Content Layer (Cards):** `surface_container_lowest` (#ffffff) — The focal point.

### Signature Textures & Gradients
Flat color can feel sterile. To add "visual soul," use subtle linear gradients for primary CTAs or hero backgrounds, transitioning from `primary` (#002b14) to `primary_container` (#144227) at a 135-degree angle. This mimics the way light filters through a canopy.

---

## 3. Typography
The typographic pairing is a study in contrast: the architectural strength of **Epilogue** against the fluid readability of **Manrope**.

- **Display & Headlines (Epilogue):** These must be bold with a tight letter-spacing (-0.02em to -0.04em). This creates a "block" of text that feels like a physical object on the page. Use `display-lg` for hero statements to command immediate attention.
- **Body & Labels (Manrope):** Body text requires "breathing room." Maintain a generous line-height (1.6 to 1.8) to ensure the editorial feel remains light and accessible.
- **Hierarchy as Identity:** Use `secondary` (#795900) for small caps labels or `title-sm` elements to act as "golden threads" throughout the editorial layout.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are replaced by a technique we call **Environmental Depth.**

- **The Layering Principle:** Place a card using `surface_container_lowest` (#ffffff) directly onto a `surface_container` (#c8fad3) background. The subtle shift in hex value provides a sophisticated "lift" that feels more natural than a simulated shadow.
- **Glassmorphism & The Floating Nav:** The navigation must be a floating pill using a backdrop-blur (minimum 12px) and a semi-transparent `surface` color at 70% opacity. This allows the "landscape" of the content to scroll beneath it, maintaining a sense of place.
- **Ambient Shadows (The Exception):** If a floating element (like a modal) requires a shadow for legibility, it must be an **Ambient Shadow:**
  - Color: Derived from `on_surface` (#00210e) at 5% opacity.
  - Blur: 40px to 60px.
  - Spread: -5px.
- **The Ghost Border:** For high-interaction elements like input fields, use a "Ghost Border" — the `outline_variant` (#c1c9c0) at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Navigation (The Floating Pill)
- **Shape:** Full pill (`full` / 9999px).
- **Style:** Glassmorphic (70% Surface + Blur).
- **Placement:** Floating at the top or bottom center, detached from the screen edges to reinforce the "organic" feel.

### Buttons
- **Primary:** `primary` background with `on_primary` text. Roundness: `md` (0.75rem).
- **Secondary (Amber):** `secondary_container` background with `on_secondary_container` text. Use for high-conversion CTAs.
- **Tertiary:** No background. Bold `primary` text with an underline that appears on hover.

### Cards & Lists
- **Cards:** Use `surface_container_lowest` (#ffffff) with an `xl` (1.5rem) corner radius. **Never use dividers.**
- **Lists:** Separate list items using the vertical spacing scale (e.g., 24px or 32px of gap). If a separation is required, use a subtle background shift on alternating items rather than a line.

### Inputs & Form Fields
- **Background:** `surface_container_low`.
- **Active State:** Shift to `surface_container_lowest` with a "Ghost Border" of `primary` at 20% opacity.
- **Typography:** Labels should use `label-md` in `primary` to maintain an authoritative tone.

### Botanical Chips
- Used for service categories (e.g., "Hardscaping"). Use `tertiary-container` (#652707) with `on-tertiary-container` (#e78d66) text.

---

## 6. Design System Notes for Stitch Generation

**DESIGN SYSTEM (REQUIRED — copy this block into every Stitch prompt):**

Color tokens:
- Primary: #002b14 (deepest forest)
- Primary Container: #144227 (forest green)
- Secondary: #795900 (amber gold)
- Secondary Container: #fed174 (light gold)
- Tertiary: #451500 (terracotta dark)
- Tertiary Container: #652707 (terracotta)
- Surface: #e9ffeb (soft green-white)
- Surface Container: #c8fad3 (sage)
- Surface Container Low: #d0ffda (pale green)
- Surface Container Lowest: #ffffff (pure white, for cards)
- Surface Container High: #c2f4cd
- Surface Container Highest: #bceec8
- Surface Dim: #b4e6c0 (muted sage, for immersive blocks)
- On Surface: #00210e (near-black green)
- On Surface Variant: #414942 (muted forest)
- Outline: #717971 (mid-gray green)
- Outline Variant: #c1c9c0 (ghost border)
- Inverse Surface: #07381e (dark footer/banner)
- Inverse On Surface: #cafdd6
- Inverse Primary: #a1d2ad
- Error: #ba1a1a
- On Primary: #ffffff
- On Secondary: #ffffff
- On Tertiary: #ffffff
- On Tertiary Container: #e78d66

Typography:
- Headlines: Epilogue (bold, geometric, tight letter-spacing -0.02em to -0.04em)
- Body: Manrope (humanist, generous line-height 1.6-1.8)
- Labels: Manrope ALL-CAPS (+0.05em letter-spacing)
- Golden threads: Use secondary (#795900) for small-caps labels

Roundness: md (0.75rem) for buttons, xl (1.5rem) for cards, full (9999px) for nav pill

Elevation: NO drop shadows. Use tonal layering (surface hierarchy). Ambient shadows only for modals: `box-shadow: 0 40-60px blur, on_surface at 5% opacity, -5px spread`

Borders: NO 1px solid borders. Use background shifts and tonal transitions only. Ghost border at 15% opacity if needed for accessibility.

Gradients: Primary (#002b14) to Primary Container (#144227) at 135 degrees for hero/CTA sections.

Style: "The Curated Grove" — organic editorialism, generous whitespace, tonal layering, glassmorphism for floating elements, editorial asymmetric alignment.

---

## 7. Do's and Don'ts

### Do:
- **Embrace Asymmetry:** Offset your images. If a headline is left-aligned, consider placing the supporting body text in the 5th or 6th column of your grid to create visual tension.
- **Use "White Space" as a Tool:** Treat empty space as a luxury material. It is not "empty"; it is "room to breathe."
- **Overlap Elements:** Let a high-quality cutout of a tree or plant overlap a `surface_container` block to break the "grid" and feel organic.

### Don't:
- **No 1px Borders:** Never use a solid line to separate content. Use a change in the green surface tone instead.
- **No Harsh Shadows:** Avoid the "floating box" look of standard SaaS products.
- **Don't Center Everything:** Centered layouts often look like templates. Use "Editorial Alignment" (asymmetric balance) to keep the user engaged.
- **Avoid Default Padding:** Use generous internal padding within cards (minimum 32px-40px) to maintain the premium feel.
- **Don't use #000000:** Use `on-surface` (#00210e) for text to maintain the earthy, warm tone.

---

*This design system is a living philosophy. When in doubt, ask: "Does this feel like a generic webpage, or does it feel like a curated experience?" If it's the former, add more space, remove a line, and shift a background tone.*
