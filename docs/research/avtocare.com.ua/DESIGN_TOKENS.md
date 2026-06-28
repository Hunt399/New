# avtocare.com.ua — Design Tokens (live extraction)

Source: WordPress + BeTheme (betheme-child). Lang ru-RU. Page height ~7438px @1440.

## Fonts
- **Body / nav / UI:** `Ubuntu, Helvetica, Arial, sans-serif` — 16px / line-height 21px
- **Headings:** `"Roboto Slab", Helvetica, Arial, sans-serif`
- **Secondary:** `Roboto, Helvetica, Arial, sans-serif` (a few elements)
- Load **Ubuntu** (400,500,700) + **Roboto Slab** (400,600,700) + **Roboto** (400).

### Type scale (computed)
| Element | Family | Size / LH | Weight | Color |
|---|---|---|---|---|
| Hero H1 ("Выкуп авто в Киеве") | Roboto Slab | 30px / 35px | 400 | #FFFFFF |
| Section heading (h2/h3) | Roboto Slab | 25px | 600 | #1C1611 |
| Body text | Ubuntu | 16px / 21px | 400 | #1C1611 |
| Nav links | Ubuntu | 16px | 400 | grey/white (see header) |
| Phones (header) | Ubuntu | 16px | 400 | #A8A8A8 |

## Colors
| Token | Value | Usage |
|---|---|---|
| `--yellow` (primary) | `#FFDA4B` (255,218,75) | Hero form card, WhyUs section, CTA section, SEO-text section bg |
| `--orange` (accent) | `#F39F18` (243,159,24) | Active nav, heading underline separators, footer links, input focus border |
| `--dark` | `#0F0F17` (15,15,23) | Sticky header, footer, docs section bg |
| `--black` | `#000000` | Buttons (CTA/submit), step number badges |
| `--page-bg` | `#FCFCFC` (252,252,252) | Default page / white sections |
| `--text` | `#1C1611` (28,22,17) | Body + heading text on light bg |
| `--muted` | `#A8A8A8` (168,168,168) | Header phone numbers |
| `--nav-sticky` | `#CDC6BD` (205,198,189) | Nav link text in sticky (scrolled) header |
| `--link-blue` | `#1B68AB` (27,104,171) | Inline content links |
| `--white` | `#FFFFFF` | Text on dark, icon circles |
| Process step circle | ~`#7B8B9E` blue-grey | Filled circles in process steps (from plan-*.png) |
| WhyUs icon | magenta/pink `~#C2185B` | Inside white circles (from advantages-*.png) |

## Buttons
- **Primary (black):** bg `#000`, color `#fff`, `border-radius: 0`, `padding: 10px 20px`, 16px / weight 400, `text-transform: none`. Used for "Узнать стоимость", "Оставить заявку", "ОБРАТНЫЙ ЗВОНОК".

## Inputs (hero valuation form)
- Light fill, `border-radius: 0`, padding ~`22px 30px` (left 60px when icon present), focus border `#F39F18`.
- Placeholder color rgba(0,0,0,0.8). Placeholders: "Марка автомобиля", "Модель автомобиля", "Год выпуска", "Ваш телефон", "Дополнительная информация".

## Layout
- Centered container max-width ≈ **1240px** (BeTheme default), horizontal auto margins.
- Full-bleed sections, alternating bg (dark / yellow / white).
- Mobile-first; columns collapse to stacked at < ~768px.

## Imagery / motifs
- **Folded-corner notch** (origami fold) on yellow hero form card top-right + dark docs section.
- **Heading separator:** short orange curved underline beneath centered section headings.
- Subtle section bg textures (`section-bg1/2.png`), near-flat.

## Favicon / meta
- Favicon: `public/seo/favicon.ico`.
- Title: "Автовыкуп Киев - Выкуп Авто в Киеве с пробегом Дорого".
