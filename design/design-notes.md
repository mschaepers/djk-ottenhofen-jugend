# Design Notes — Trainer-Wissensdatenbank F/E-Jugend (DJK Ottenhofen)

Companion spec for `mockup.html`. The stylesheet is written as a reusable theme: all values live in CSS custom properties (`:root`), and every visual pattern is a class-based component (never an ID-styled one-off), so it maps cleanly onto a Markdown-driven static site generator later.

## Design tokens

**Color**
- `--color-yellow: #FFF300` — signature brand color. Accent/hero/banner surfaces and UI highlights only; never a background behind body text.
- `--color-ink: #111111` — primary text, buttons, ink surfaces.
- `--color-white: #FFFFFF` — content background.
- Neutral scale (all checked against white): `--color-grey-900 #1a1a1a` (alt heading), `--grey-700 #3d3d3d` (body copy, ~10:1), `--grey-600 #595959` (meta/captions, ~7:1), `--grey-500 #767676` (placeholders/tertiary, ~4.5:1 — normal-text AA minimum), `--grey-300 #c9c9c9` (borders), `--grey-200 #E5E5E5` (brand light grey — hairlines/surfaces), `--grey-100 #F5F5F4` (subtle surface tint).
- One subtle info/success tint (per brief): `--color-tint-bg #EAF6EE`, `--color-tint-ink #1F6B3B`, `--color-tint-border #CBE9D4` — used only for the "Coaching-Punkte" callout and the "So machst du mit" card.

**Type**
- Font: Sen (400/700/800) via Google Fonts, falls back to system sans.
- Scale (major-second-ish, rem-based): `100` 13px meta → `900` 60px hero, 9 steps total (`--fs-100` … `--fs-900`). Headings use weight 800 (`--fw-black`), UI/labels 700, body 400.
- Line-height: 1.15 for headings (`--lh-tight`), 1.55 for body (`--lh-normal`).

**Spacing** — 4px base scale, `--space-1` (4px) through `--space-9` (96px), used for all padding/gaps/margins instead of hand-picked values.

**Radii** — `--radius-sm 8px` (small controls), `--radius-md 14px` (cards), `--radius-lg 24px` (hero logo plate), `--radius-pill 999px` (buttons, chips, search bar).

**Elevation** — `--shadow-sm/md/lg`, low-opacity ink shadows only (no color tint), used to signal hover/interactive state.

## Components (one-liner each)

- **Header** — sticky, white, logo + two-line title, nav with animated yellow underline, inline search (`.search-bar--header`); collapses to a single no-JS `<details>` menu below 900px that reveals nav + search.
- **Button** (`.btn`, `.btn-primary`, `.btn-outline`) — pill, ink-on-yellow or yellow-on-ink for primary; outline inverts on hover/focus.
- **Tag / Chip** (`.tag`, `.chip`) — neutral pill for metadata (age/strength) vs. interactive filter pill with active (ink-fill) state.
- **Search bar** (`.search-bar`, `--large` variant) — pill input with icon, grey resting state, white + yellow focus glow, used identically in header and Übungen toolbar.
- **Hero** (`.hero`) — full-bleed yellow with subtle diagonal texture, white "badge" plate behind the logo (protects legibility regardless of logo art), two CTA buttons.
- **Category group** (`.category-group`) — heading + count badge + card grid; the browse page is just N of these stacked.
- **Exercise card** (`.card-exercise`) — category badge, title (stretched-link over the whole card), 2-line clamped Ziel excerpt, meta chips, footer with source + "Details" arrow that shifts on hover. Scannable at a glance; all real fields (Ziel/Aufbau/Ablauf/Coaching/Für wen/Quelle) live one click away on the detail view.
- **Exercise detail** (`.detail-layout`, `.fact-card`, `.field-block`) — sticky "Kurz-Infos" fact card + related exercises in a sidebar (reflows above content on mobile); main column has one `.field-block` per data field, with Coaching-Punkte styled as a highlighted tinted callout.
- **Editorial layout** (`.parents-layout`, `.pull-quote`, `.value-list`) — two-column article for "Für Eltern" with icon-led values list and a pull-quote; sidebar has a plain info card ("Das lernt dein Kind") and a tinted CTA card ("So machst du mit") with numbered steps.
- **Principle card** (`.principle-card`) — numbered card grid for the 7 Leitprinzipien; large low-opacity ghost numeral, yellow top accent bar.
- **Footer** — light (not dark) to keep the logo legible in the light theme; yellow top border, 3-column link/contact layout.
- **Mockup-only chrome** — sticky banner, jump-nav, and dashed "— Section —" dividers used purely to let this single file be reviewed by scrolling; styled distinctly (dashed/monospace-ish) so they're obviously not part of the shipped design.

## Accessibility notes

- Text on yellow is always ink (#111); text on ink is always yellow or white — no yellow-on-white or white-on-yellow body text anywhere.
- Global `:focus-visible` outline (3px ink) plus a yellow glow on interactive brand controls (buttons, search) for double affordance.
- Skip link to `#main-content`, semantic landmarks (`header`, `nav[aria-label]`, `main`, `footer`), `role="search"` forms with labelled inputs.
- Mobile nav/search use native `<details>/<summary>` — keyboard- and screen-reader-operable without JavaScript.
- `prefers-reduced-motion: reduce` disables transitions/animations.
- Card "stretched link" pattern keeps the whole card clickable while the inline source link remains independently reachable (raised z-index) — no nested interactive elements.
- Grey-500 (#767676) is the palest text color used and only for meta/placeholder text, sitting right at the WCAG AA threshold for normal text on white; all primary/body copy uses grey-700 or ink for higher headroom.

## Responsive behavior

Mobile-first from 360px. Card grids: 1 → 2 (640px) → 3 (980px) columns. Header nav/search collapse into a details-menu below 900px. Detail sidebar stacks above the article on mobile, becomes a sticky right rail at 940px+. "Für Eltern" and footer go two/three-column at 940px/720px respectively.
