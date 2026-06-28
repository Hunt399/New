# avtocare.com.ua — Page Topology (live)

Single long landing page, top→bottom. Container max-width ~1240px centered. Section y-offsets @1440 in parens.

| # | Section | Bg | Interaction | Component |
|---|---|---|---|---|
| 0 | **Header / Nav** (fixed overlay) | transparent→#0F0F17 on scroll | scroll-driven sticky | `Header.tsx` |
| 1 | **Hero** (0) | dark gradient (#000→transparent) | static + form | `Hero.tsx` + `ValuationForm.tsx` |
| 2 | **WhyUs "Почему мы"** (965) | yellow #FFDA4B | static, hover icons | `WhyUs.tsx` |
| 3 | **"Автовыкуп — это выгодно"** (1626) | white | static text | folded into `ProcessSection` intro or `RichText` |
| 4 | **Process "Как происходит процесс"** (1864) | white | static (4 steps) | `ProcessSteps.tsx` |
| 5 | **"Что такое выкуп авто"** (2303) | white | static bullet text | `RichText` block |
| 6 | **Variants "ПРЕДЛАГАЕМ ВАРИАНТЫ"** (2692) | white | static 3 icons | `Variants.tsx` |
| 7 | **CTA banner "Обратитесь к нам"** (2941) | yellow #FFDA4B | static + button | `CtaBanner.tsx` |
| 8 | **SEO long-text "Как происходит выкуп…"** (3308) | yellow #FFDA4B | static, multiple sub-headings + lists | `SeoContent.tsx` |
| 9 | **Docs "ДОКУМЕНТЫ, КОТОРЫЕ НУЖНО ИМЕТЬ"** (4721) | dark #0F0F17, faded car bg, folded corner | static, 4 bullets | `DocsSection.tsx` |
| 10 | **Brands "Мы занимаемся авто выкупом…"** (5117) | white | static 4-col list | `BrandsList.tsx` |
| 11 | **Slider "ПОСЛЕДНИЕ ВЫКУПЛЕННЫЕ"** (5614) | white | carousel, 9 slides, shows 3 | `BoughtSlider.tsx` |
| 12 | **Reviews "Отзывы"** (6034) | white | static 2-col, 4 items | `Reviews.tsx` |
| 13 | **FAQ "Популярные вопросы"** (6538) | white | static Q&A (NOT accordion — all expanded) | `Faq.tsx` |
| 14 | **Footer** (7438) | dark #0F0F17 | static | `Footer.tsx` |

## Z-index / sticky
- Header `#Top_bar.is-sticky`: `position: fixed; top:0; z-index:701; height:61px; box-shadow:0 2px 5px rgba(0,0,0,.1)`.
- All other sections are normal flow.

## Build order
1. Foundation (fonts, globals, types, icons, assets) — done by foreman.
2. Sub-components first: `ValuationForm`, then section wrappers.
3. Parallel builders per section; merge; `npm run build` after each.
4. Assemble in `page.tsx` top→bottom.

## Notes
- Sections 3 & 5 & 8 are mostly long SEO prose — group sensibly to avoid over-fragmentation, but keep distinct headings.
- Nav menu: Главная (active) / Услуги ▾ (dropdown) / Блог / О нас / Контакты + lang selector "Русский ▾". Clone visual only (no real routing/dropdown data required beyond visual).
