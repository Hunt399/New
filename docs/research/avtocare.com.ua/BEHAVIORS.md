# avtocare.com.ua — Behaviors (live interaction sweep)

## 1. Interaction model
Mostly **static** page. Only two dynamic behaviors: (a) scroll-driven sticky header, (b) the bought-cars carousel. FAQ is NOT an accordion — all answers render expanded as static prose. No Lenis/smooth-scroll lib detected (native scroll). No scroll-snap.

## 2. Sticky header (scroll-driven) — KEY BEHAVIOR
- **State A — scroll 0 (over hero):** header sits over dark hero, background transparent, logo large (white "AvtoCar"), nav links white, active "Главная" orange `#F39F18` with thin underline indicator. Two phone numbers grey `#A8A8A8` top-left.
- **State B — scrolled (`#Top_bar.is-sticky`):** `position: fixed; top:0; z-index:701; height:61px; background:#0F0F17; box-shadow:0 2px 5px rgba(0,0,0,.1)`. Logo shrinks to ~50px tall. Nav links grey `#CDC6BD`, active "Главная" orange `#F39F18`. Phones grey.
- **Trigger:** scroll past hero header zone. Implement with scroll listener toggling `isScrolled` when `window.scrollY > 100`.
- **Transition:** background/shadow/logo-size animate ~0.3s ease.
- Header theme is DARK in both states (transparent dark → solid dark). It does NOT turn white.

## 3. Carousel — "Последние выкупленные нами автомобили"
- 9 slides, **3 visible** at desktop. Each card = car photo with bottom dark gradient overlay + white text (model+year, mileage, price). Owl/revolution-style carousel.
- Implement: horizontal slider, 3 per view desktop / 2 tablet / 1 mobile, prev-next + optional auto-advance. Drag/arrows acceptable.

## 4. Hover states
- Nav links: color shift toward orange/white on hover.
- Buttons (black): subtle darken on hover, cursor pointer, no radius change.
- WhyUs icon circles / variant icons / slider cards: slight emphasis on hover (scale/shadow) — keep subtle (~0.2s ease). Extract exact per component if needed; default `transition: all .2s ease`.

## 5. Responsive (tested 1440 / 768 / 390)
- **Header:** desktop horizontal nav; mobile collapses to hamburger (BeTheme mobile menu). Phones may hide on small.
- **Hero:** desktop = heading left + yellow form card right (2-col); mobile = stacked, form below heading, full-width.
- **WhyUs:** 4 columns desktop → 2 cols tablet → 1 col mobile.
- **Process steps:** 4 across desktop → 2 → 1 stacked.
- **Variants:** 3 across → stack.
- **CTA:** image left + card right desktop → stacked mobile.
- **Brands:** 4-col → 2-col → 1-col list.
- **Slider:** 3 → 2 → 1 per view.
- **Reviews:** 2-col → 1-col.
- Breakpoint ≈ 768px primary collapse; secondary ≈ 992/1240 for container.

## 6. Forms
- Hero valuation form: 5 fields (Марка, Модель, Год выпуска, Ваш телефон, Дополнительная информация textarea) + black "Узнать стоимость" submit. Clone visual + client-side only (no backend).
- CTA "ОБРАТНЫЙ ЗВОНОК" and "Оставить заявку" buttons: visual only (could anchor to form / tel:).
