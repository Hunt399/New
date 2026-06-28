# avtocare.com.ua - Behaviors and Interaction Sweep

This document specifies the interactive behaviors, scroll thresholds, hover states, and responsive shifts observed on `https://avtocare.com.ua/`.

## 1. Interaction Model
The target site is a high-conversion landing page focused on **lead generation** (car buyback request forms).
* **Core Interaction:** Form submissions (Valuation form, callback forms).
* **Secondary Interaction:** Interactive modals (callback popups) and sliders (reviews/recent deals).

---

## 2. Navigation & Header
* **Behavior:** Sticky navigation bar.
* **Scroll Threshold:** Once scrolled past 50px, the header background transitions to semi-transparent white (backdrop-filter: blur) and shrinks slightly.
* **Hover States:**
  * **Phone Numbers:** Color changes with a smooth CSS transition (duration: 200ms).
  * **Language Switcher:** Active language has a distinct background/text style; hovering over the inactive language displays a light hover overlay.
* **Responsive Shift:**
  * **Desktop (>768px):** Displays full contact phone numbers directly next to the logo.
  * **Mobile (<768px):** Collapses menu options, replacing them with a persistent tap-to-call floating button or a streamlined header with a prominent telephone icon for direct dialing.

---

## 3. Valuation Form (Форма онлайн-оценки)
* **Location:** Embedded in the Hero Section.
* **Fields:**
  * Марка автомобиля (text/input)
  * Модель автомобиля (text/input)
  * Год выпуска (text/input)
  * Ваш телефон (tel/input)
* **Interactions:**
  * Inputs have a focus ring animation (border color transitions to brand accent with a subtle shadow).
  * Submit button: Elevates slightly on hover, transitions background color, and displays a loading spinner once clicked.
  * **Validation:** Custom error messages show up immediately under inputs if submitted with empty or invalid values (e.g. invalid phone format).

---

## 4. Sliders and Carousels
* **Recent Deals (Последние выкупленные авто):**
  * Auto-playing carousel showing recent buyback transactions.
  * Drag-to-scroll enabled on touch viewports.
* **Reviews (Отзывы):**
  * Interactive testimonials carousel with indicator dots.
  * Uses CSS transform and opacity to transition reviews smoothly.

---

## 5. Responsive Sweep
* **Desktop (1440px):** 3-column / 4-column grids for "Why Us" and "How It Works". Horizontal alignment.
* **Tablet (768px):** Grid columns collapse to 2 columns where appropriate. Padding decreases by 20%.
* **Mobile (390px):** Single-column stacked layout. Form inputs stretch to full-width (100%). Phone links are enlarged for thumb-friendly tap targets.
