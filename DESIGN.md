# Design System Inspired by Claude (Anthropic)

## 1. Visual Theme & Atmosphere

**Implementation note for this repo:** The visual direction below should be implemented through the Tailwind theme tokens defined in `src/styles/globals.css`. When generating TS/TSX, use classes such as `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `bg-primary`, `border-border`, `ring-ring`, `shadow-ring`, and `shadow-whisper`. Hex values in this document describe the current token palette only; they are not instructions to hard-code colors in components.

Claude's interface is a literary salon reimagined as a product page — warm, unhurried, and quietly intellectual. The entire experience is built on a parchment-toned canvas (`#f5f4ed`) that deliberately evokes the feeling of high-quality paper rather than a digital surface. Where most AI product pages lean into cold, futuristic aesthetics, Claude's design radiates human warmth, as if the AI itself has good taste in interior design.

The signature move is the custom Anthropic Serif typeface — a medium-weight serif with generous proportions that gives every headline the gravitas of a book title. Combined with organic, hand-drawn-feeling illustrations in terracotta (`#c96442`), black, and muted green, the visual language says "thoughtful companion" rather than "powerful tool." The serif headlines breathe at tight-but-comfortable line-heights (1.10–1.30), creating a cadence that feels more like reading an essay than scanning a product page.

What makes Claude's design truly distinctive is its warm neutral palette. Every gray has a yellow-brown undertone (`#5e5d59`, `#87867f`, `#4d4c48`) — there are no cool blue-grays anywhere. Borders are cream-tinted (`#f0eee6`, `#e8e6dc`), shadows use warm transparent blacks, and even the darkest surfaces (`#141413`, `#30302e`) carry a barely perceptible olive warmth. This chromatic consistency creates a space that feels lived-in and trustworthy.

**Key Characteristics:**

- Warm parchment canvas (`#f5f4ed`) evoking premium paper, not screens
- Custom Anthropic type family: Serif for headlines, Sans for UI, Mono for code
- Terracotta brand accent (`#c96442`) — warm, earthy, deliberately un-tech
- Exclusively warm-toned neutrals — every gray has a yellow-brown undertone
- Organic, editorial illustrations replacing typical tech iconography
- Ring-based shadow system (`0px 0px 0px 1px`) creating border-like depth without visible borders
- Magazine-like pacing with generous section spacing and serif-driven hierarchy

## 2. Color Palette & Roles

### Tailwind Token Contract

The local implementation should reference color roles by token, not by hex. This mirrors the current app surfaces and avoids one-off hard-coded colors.

| Design role                 | Use this Tailwind token                               | Current palette reference                       |
| --------------------------- | ----------------------------------------------------- | ----------------------------------------------- |
| Parchment page background   | `bg-background`                                       | `--background`                                  |
| Primary text / near black   | `text-foreground`                                     | `--foreground`                                  |
| Ivory card surface          | `bg-card`                                             | `--card`                                        |
| Card text                   | `text-card-foreground`                                | `--card-foreground`                             |
| Terracotta brand accent     | `bg-primary`, `text-primary`                          | `--primary`                                     |
| Text on brand accent        | `text-primary-foreground`                             | `--primary-foreground`                          |
| Warm sand surface           | `bg-secondary`, `bg-accent`                           | `--secondary`, `--accent`                       |
| Text on warm sand           | `text-secondary-foreground`, `text-accent-foreground` | `--secondary-foreground`, `--accent-foreground` |
| Muted supporting text       | `text-muted-foreground`                               | `--muted-foreground`                            |
| Subtle border               | `border-border`                                       | `--border`                                      |
| Form border / input surface | `border-input`                                        | `--input`                                       |
| Focus ring                  | `ring-ring`, `outline-ring`                           | `--ring`                                        |
| Destructive state           | `bg-destructive`, `text-destructive`                  | `--destructive`                                 |
| Ring-style elevation        | `shadow-ring`                                         | `--shadow-ring`                                 |
| Whisper elevation           | `shadow-whisper`                                      | `--shadow-whisper`                              |

If a stable design role is missing, add a CSS variable in `:root` and `.dark`, then expose it in `@theme inline`. Do not solve missing roles by writing `text-[#...]`, `bg-[#...]`, `border-[#...]`, `ring-[#...]`, or inline `style={{ color: '#...' }}` in business components.

### Primary

- **Anthropic Near Black** (`#141413`): The primary text color and dark-theme surface — not pure black but a warm, almost olive-tinted dark that's gentler on the eyes. The warmest "black" in any major tech brand.
- **Terracotta Brand** (`#c96442`): The core brand color — a burnt orange-brown used for primary CTA buttons, brand moments, and the signature accent. Deliberately earthy and un-tech.
- **Coral Accent** (`#d97757`): A lighter, warmer variant of the brand color used for text accents, links on dark surfaces, and secondary emphasis.

### Secondary & Accent

- **Error Crimson** (`#b53333`): A deep, warm red for error states — serious without being alarming.
- **Focus Blue** (`#3898ec`): Standard blue for input focus rings — the only cool color in the entire system, used purely for accessibility.

### Surface & Background

- **Parchment** (`#f5f4ed`): The primary page background — a warm cream with a yellow-green tint that feels like aged paper. The emotional foundation of the entire design.
- **Ivory** (`#faf9f5`): The lightest surface — used for cards and elevated containers on the Parchment background. Barely distinguishable but creates subtle layering.
- **Pure White** (`#ffffff`): Reserved for specific button surfaces and maximum-contrast elements.
- **Warm Sand** (`#e8e6dc`): Button backgrounds and prominent interactive surfaces — a noticeably warm light gray.
- **Dark Surface** (`#30302e`): Dark-theme containers, nav borders, and elevated dark elements — warm charcoal.
- **Deep Dark** (`#141413`): Dark-theme page background and primary dark surface.

### Neutrals & Text

- **Charcoal Warm** (`#4d4c48`): Button text on light warm surfaces — the go-to dark-on-light text.
- **Olive Gray** (`#5e5d59`): Secondary body text — a distinctly warm medium-dark gray.
- **Stone Gray** (`#87867f`): Tertiary text, footnotes, and de-emphasized metadata.
- **Dark Warm** (`#3d3d3a`): Dark text links and emphasized secondary text.
- **Warm Silver** (`#b0aea5`): Text on dark surfaces — a warm, parchment-tinted light gray.

### Semantic & Accent

- **Border Cream** (`#f0eee6`): Standard light-theme border — barely visible warm cream, creating the gentlest possible containment.
- **Border Warm** (`#e8e6dc`): Prominent borders, section dividers, and emphasized containment on light surfaces.
- **Border Dark** (`#30302e`): Standard border on dark surfaces — maintains the warm tone.
- **Ring Warm** (`#d1cfc5`): Shadow ring color for button hover/focus states.
- **Ring Subtle** (`#dedc01`): Secondary ring variant for lighter interactive surfaces.
- **Ring Deep** (`#c2c0b6`): Deeper ring for active/pressed states.

### Gradient System

- Claude's design is **gradient-free** in the traditional sense. Depth and visual richness come from the interplay of warm surface tones, organic illustrations, and light/dark section alternation. The warm palette itself creates a "gradient" effect as the eye moves through cream → sand → stone → charcoal → black sections.

## 3. Typography Rules

### Font Family

- **Headline**: `Anthropic Serif`, with fallback: `Georgia`
- **Body / UI**: `Anthropic Sans`, with fallback: `Arial`
- **Code**: `Anthropic Mono`, with fallback: `Arial`

_Note: These are custom typefaces. For external implementations, Georgia serves as the serif substitute and system-ui/Inter as the sans substitute._

### Hierarchy

| Role              | Font            | Size                | Weight  | Line Height    | Letter Spacing | Notes                                |
| ----------------- | --------------- | ------------------- | ------- | -------------- | -------------- | ------------------------------------ |
| Display / Hero    | Anthropic Serif | 64px (4rem)         | 500     | 1.10 (tight)   | normal         | Maximum impact, book-title presence  |
| Section Heading   | Anthropic Serif | 52px (3.25rem)      | 500     | 1.20 (tight)   | normal         | Feature section anchors              |
| Sub-heading Large | Anthropic Serif | 36–36.8px (~2.3rem) | 500     | 1.30           | normal         | Secondary section markers            |
| Sub-heading       | Anthropic Serif | 32px (2rem)         | 500     | 1.10 (tight)   | normal         | Card titles, feature names           |
| Sub-heading Small | Anthropic Serif | 25–25.6px (~1.6rem) | 500     | 1.20           | normal         | Smaller section titles               |
| Feature Title     | Anthropic Serif | 20.8px (1.3rem)     | 500     | 1.20           | normal         | Small feature headings               |
| Body Serif        | Anthropic Serif | 17px (1.06rem)      | 400     | 1.60 (relaxed) | normal         | Serif body text (editorial passages) |
| Body Large        | Anthropic Sans  | 20px (1.25rem)      | 400     | 1.60 (relaxed) | normal         | Intro paragraphs                     |
| Body / Nav        | Anthropic Sans  | 17px (1.06rem)      | 400–500 | 1.00–1.60      | normal         | Navigation links, UI text            |
| Body Standard     | Anthropic Sans  | 16px (1rem)         | 400–500 | 1.25–1.60      | normal         | Standard body, button text           |
| Body Small        | Anthropic Sans  | 15px (0.94rem)      | 400–500 | 1.00–1.60      | normal         | Compact body text                    |
| Caption           | Anthropic Sans  | 14px (0.88rem)      | 400     | 1.43           | normal         | Metadata, descriptions               |
| Label             | Anthropic Sans  | 12px (0.75rem)      | 400–500 | 1.25–1.60      | 0.12px         | Badges, small labels                 |
| Overline          | Anthropic Sans  | 10px (0.63rem)      | 400     | 1.60           | 0.5px          | Uppercase overline labels            |
| Micro             | Anthropic Sans  | 9.6px (0.6rem)      | 400     | 1.60           | 0.096px        | Smallest text                        |
| Code              | Anthropic Mono  | 15px (0.94rem)      | 400     | 1.60           | -0.32px        | Inline code, terminal                |

### Principles

- **Serif for authority, sans for utility**: Anthropic Serif carries all headline content with medium weight (500), giving every heading the gravitas of a published title. Anthropic Sans handles all functional UI text — buttons, labels, navigation — with quiet efficiency.
- **Single weight for serifs**: All Anthropic Serif headings use weight 500 — no bold, no light. This creates a consistent "voice" across all headline sizes, as if the same author wrote every heading.
- **Relaxed body line-height**: Most body text uses 1.60 line-height — significantly more generous than typical tech sites (1.4–1.5). This creates a reading experience closer to a book than a dashboard.
- **Tight-but-not-compressed headings**: Line-heights of 1.10–1.30 for headings are tight but never claustrophobic. The serif letterforms need breathing room that sans-serif fonts don't.
- **Micro letter-spacing on labels**: Small sans text (12px and below) uses deliberate letter-spacing (0.12px–0.5px) to maintain readability at tiny sizes.

## 4. Component Stylings

### Buttons

**Warm Sand (Secondary)**

- Background: Warm Sand via `bg-secondary` or `bg-accent`
- Text: Charcoal Warm via `text-secondary-foreground` or `text-accent-foreground`
- Padding: 0px 12px 0px 8px (asymmetric — icon-first layout)
- Radius: comfortably rounded (8px)
- Shadow: ring-based via `shadow-ring`
- The workhorse button — warm, unassuming, clearly interactive

**White Surface**

- Background: Prefer `bg-card` or `bg-background`; avoid raw white page surfaces
- Text: Anthropic Near Black via `text-foreground`
- Padding: 8px 16px 8px 12px
- Radius: generously rounded (12px)
- Hover: shifts to secondary background color
- Clean, elevated button for light surfaces

**Dark Charcoal**

- Background: Dark Surface via the dark-mode value of `bg-card`, `bg-secondary`, or `bg-accent`
- Text: Ivory via `text-card-foreground`, `text-secondary-foreground`, or `text-accent-foreground`
- Padding: 0px 12px 0px 8px
- Radius: comfortably rounded (8px)
- Shadow: ring-based via `shadow-ring`
- The inverted variant for dark-on-light emphasis

**Brand Terracotta**

- Background: Terracotta Brand via `bg-primary`
- Text: Ivory via `text-primary-foreground`
- Radius: 8–12px
- Shadow: ring-based via `shadow-ring` or a token-backed primary ring variant if one is added later
- The primary CTA — the only button with chromatic color

**Dark Primary**

- Background: Anthropic Near Black via dark `bg-background` or dark `bg-card`
- Text: Warm Silver via `text-muted-foreground`
- Padding: 9.6px 16.8px
- Radius: generously rounded (12px)
- Border: thin `border-border`
- Used on dark theme surfaces

### Cards & Containers

- Background: `bg-card` for elevated surfaces, `bg-background` for inset or page surfaces
- Border: `border border-border`
- Radius: comfortably rounded (8px) for standard cards; generously rounded (16px) for featured; very rounded (32px) for hero containers and embedded media
- Shadow: `shadow-whisper` for elevated content
- Ring shadow: `shadow-ring` for interactive card states
- Section borders: `1px 0px 0px` (top-only) for list item separators

### Inputs & Forms

- Text: `text-foreground`
- Padding: 1.6px 12px (very compact vertical)
- Border: standard warm borders
- Focus: `ring-ring` / `outline-ring` — the only cool color moment
- Radius: generously rounded (12px)

### Navigation

- Sticky top nav with warm background
- Logo: wordmark in `text-foreground`
- Links: mix of `text-foreground`, `text-muted-foreground`, and `text-accent-foreground`
- Nav border: `border-border`
- CTA: `bg-primary text-primary-foreground` or a secondary token-backed button
- Hover: text shifts to foreground-primary, no decoration

### Image Treatment

- Product screenshots showing the Claude chat interface
- Generous border-radius on media (16–32px)
- Embedded video players with rounded corners
- Dark UI screenshots provide contrast against warm light canvas
- Organic, hand-drawn illustrations for conceptual sections

### Distinctive Components

**Model Comparison Cards**

- Opus 4.5, Sonnet 4.5, Haiku 4.5 presented in a clean card grid
- Each model gets a bordered card with name, description, and capability badges
- Use `border-border` or token-backed warm separators between items

**Organic Illustrations**

- Hand-drawn-feeling vector illustrations in terracotta, black, and muted green
- Abstract, conceptual rather than literal product diagrams
- The primary visual personality — no other AI company uses this style

**Dark/Light Section Alternation**

- The page alternates between Parchment light and Near Black dark sections
- Creates a reading rhythm like chapters in a book
- Each section feels like a distinct environment

## 5. Layout Principles

### Spacing System

- Base unit: 8px
- Scale: 3px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 30px
- Button padding: asymmetric (0px 12px 0px 8px) or balanced (8px 16px)
- Card internal padding: approximately 24–32px
- Section vertical spacing: generous (estimated 80–120px between major sections)

### Grid & Container

- Max container width: approximately 1200px, centered
- Hero: centered with editorial layout
- Feature sections: single-column or 2–3 column card grids
- Model comparison: clean 3-column grid
- Full-width dark sections breaking the container for emphasis

### Whitespace Philosophy

- **Editorial pacing**: Each section breathes like a magazine spread — generous top/bottom margins create natural reading pauses.
- **Serif-driven rhythm**: The serif headings establish a literary cadence that demands more whitespace than sans-serif designs.
- **Content island approach**: Sections alternate between light and dark environments, creating distinct "rooms" for each message.

### Border Radius Scale

- Sharp (4px): Minimal inline elements
- Subtly rounded (6–7.5px): Small buttons, secondary interactive elements
- Comfortably rounded (8–8.5px): Standard buttons, cards, containers
- Generously rounded (12px): Primary buttons, input fields, nav elements
- Very rounded (16px): Featured containers, video players, tab lists
- Highly rounded (24px): Tag-like elements, highlighted containers
- Maximum rounded (32px): Hero containers, embedded media, large cards

## 6. Depth & Elevation

| Level               | Treatment                              | Use                                         |
| ------------------- | -------------------------------------- | ------------------------------------------- |
| Flat (Level 0)      | No shadow, no border                   | Parchment background, inline text           |
| Contained (Level 1) | `border border-border`                 | Standard cards, sections                    |
| Ring (Level 2)      | `shadow-ring`                          | Interactive cards, buttons, hover states    |
| Whisper (Level 3)   | `shadow-whisper`                       | Elevated feature cards, product screenshots |
| Inset (Level 4)     | `inset 0px 0px 0px 1px` at 15% opacity | Active/pressed button states                |

**Shadow Philosophy**: Claude communicates depth through **warm-toned ring shadows** rather than traditional drop shadows. The signature `0px 0px 0px 1px` pattern creates a border-like halo that's softer than an actual border — it's a shadow pretending to be a border, or a border that's technically a shadow. When drop shadows do appear, they're extremely soft (0.05 opacity, 24px blur) — barely visible lifts that suggest floating rather than casting.

### Decorative Depth

- **Light/Dark alternation**: The most dramatic depth effect comes from alternating between light and dark `bg-background` sections — entire sections shift elevation by changing the ambient light level.
- **Warm ring halos**: Button and card interactions use `shadow-ring` so the halo follows the theme palette — never cool-toned or generic gray.

## 7. Do's and Don'ts

### Do

- Use the local Tailwind tokens for all implementation colors; for example, use `bg-background` for Parchment, `bg-card` for Ivory, `text-foreground` for Near Black, and `bg-primary` / `text-primary` for Terracotta
- Use Anthropic Serif at weight 500 for all headlines — the single-weight consistency is intentional
- Use Terracotta Brand through the `primary` token only for primary CTAs and the highest-signal brand moments
- Keep all neutrals warm-toned — every gray should have a yellow-brown undertone
- Use `shadow-ring` for ring-style depth and `shadow-whisper` for the soft elevated shadow
- Maintain the editorial serif/sans hierarchy — serif for content headlines, sans for UI
- Use generous body line-height (1.60) for a literary reading experience
- Alternate between light and dark sections to create chapter-like page rhythm
- Apply generous border-radius (12–32px) for a soft, approachable feel

### Don't

- Don't use cool blue-grays anywhere — the palette is exclusively warm-toned
- Don't use bold (700+) weight on Anthropic Serif — weight 500 is the ceiling for serifs
- Don't introduce saturated colors beyond Terracotta — the palette is deliberately muted
- Don't use sharp corners (< 6px radius) on buttons or cards — softness is core to the identity
- Don't apply heavy drop shadows — depth comes from ring shadows and background color shifts
- Don't hard-code color values in TS/TSX; avoid `text-[#...]`, `bg-[#...]`, `border-[#...]`, `ring-[#...]`, `fill-[#...]`, `stroke-[#...]`, and inline hex styles
- Don't use pure white as a page background — use the `background` or `card` tokens so the surface stays warm and themeable
- Don't use geometric/tech-style illustrations — Claude's illustrations are organic and hand-drawn-feeling
- Don't reduce body line-height below 1.40 — the generous spacing supports the editorial personality
- Don't use monospace fonts for non-code content — Anthropic Mono is strictly for code
- Don't mix in sans-serif for headlines — the serif/sans split is the typographic identity

## 8. Responsive Behavior

### Breakpoints

| Name         | Width     | Key Changes                                                            |
| ------------ | --------- | ---------------------------------------------------------------------- |
| Small Mobile | <479px    | Minimum layout, stacked everything, compact typography                 |
| Mobile       | 479–640px | Single column, hamburger nav, reduced heading sizes                    |
| Large Mobile | 640–767px | Slightly wider content area                                            |
| Tablet       | 768–991px | 2-column grids begin, condensed nav                                    |
| Desktop      | 992px+    | Full multi-column layout, expanded nav, maximum hero typography (64px) |

### Touch Targets

- Buttons use generous padding (8–16px vertical minimum)
- Navigation links adequately spaced for thumb navigation
- Card surfaces serve as large touch targets
- Minimum recommended: 44x44px

### Collapsing Strategy

- **Navigation**: Full horizontal nav collapses to hamburger on mobile
- **Feature sections**: Multi-column → stacked single column
- **Hero text**: 64px → 36px → ~25px progressive scaling
- **Model cards**: 3-column → stacked vertical
- **Section padding**: Reduces proportionally but maintains editorial rhythm
- **Illustrations**: Scale proportionally, maintain aspect ratios

### Image Behavior

- Product screenshots scale proportionally within rounded containers
- Illustrations maintain quality at all sizes
- Video embeds maintain 16:9 aspect ratio with rounded corners
- No art direction changes between breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference

- Brand CTA: "Terracotta Brand via `bg-primary text-primary-foreground`"
- Brand accent text or icons: "Terracotta Brand via `text-primary`"
- Page Background: "Parchment via `bg-background`"
- Card Surface: "Ivory via `bg-card`"
- Primary Text: "Anthropic Near Black via `text-foreground`"
- Secondary Text: "Olive Gray via `text-muted-foreground`"
- Warm secondary surface: "Warm Sand via `bg-secondary text-secondary-foreground`"
- Borders: "Border Cream via `border-border`"
- Focus rings: "Focus Blue via `ring-ring` / `outline-ring`"
- Ring depth: "`shadow-ring`"
- Whisper depth: "`shadow-whisper`"

### Example Component Prompts

- "Create a hero section on `bg-background` with a headline in the serif heading style, weight 500, line-height 1.10. Use `text-foreground` for the headline, `text-muted-foreground` for supporting copy, and `bg-primary text-primary-foreground` for the primary CTA."
- "Design a feature card on `bg-card` with `border-border`, comfortably rounded corners, and `shadow-whisper`. Title uses the serif heading style; description uses `text-muted-foreground`."
- "Build a dark section using the dark-mode values of `bg-background` and `text-foreground`. Use `text-muted-foreground` for body copy and `border-border` for containment."
- "Create a secondary control using `bg-secondary text-secondary-foreground`, rounded corners, and `shadow-ring`; use `ring-ring` only for focus state."
- "Design a comparison grid with cards on `bg-card`, `border-border`, serif titles, and `text-muted-foreground` descriptions."

### Iteration Guide

1. Focus on ONE component at a time
2. Reference specific token-backed color roles — "use `text-muted-foreground` for Olive Gray" not "make it gray"
3. Always specify warm-toned variants — no cool grays
4. Describe serif vs sans usage explicitly — "Anthropic Serif for the heading, Anthropic Sans for the label"
5. For shadows, use `shadow-ring` or `shadow-whisper` — never generic "drop shadow"
6. Specify the warm background through tokens — "on `bg-background`" or "on a dark `bg-background` surface"
7. Keep illustrations organic and conceptual — describe "hand-drawn-feeling" style
