# avtocare.com.ua - Page Topology

This document details the layout architecture and visual flow of the landing page at `https://avtocare.com.ua/`.

## Page Structure Overview
The homepage is structured as a vertical, single-page marketing landing page with multiple section components feeding into a unified lead capture flow.

---

## Visual Layout Sequence

| Order | Component Name | Layout Type | Interaction Model | Files Involved |
|---|---|---|---|---|
| **0** | **Header/Nav** | Sticky overlay | Static contacts + language switcher | `src/components/Header.tsx` |
| **1** | **Hero & Valuation** | 2-Column (Desktop) / Stacked (Mobile) | Inline Form submit (`/car-appraisal`) | `src/components/HeroSection.tsx`, `src/components/ValuationForm.tsx` |
| **2** | **Why Us (Почему мы)** | 4-Column Grid | Static with hover scale effects | `src/components/WhyUs.tsx` |
| **3** | **Benefits Info (Выгода)** | Content + Image split | Static text | `src/components/BenefitsInfo.tsx` |
| **4** | **How It Works (Процесс)** | 4-Step pipeline | Step progress indicator (Scroll-reveal) | `src/components/HowItWorks.tsx` |
| **5** | **General Info (Что такое...)** | Text Block | Static text | `src/components/GeneralInfo.tsx` |
| **6** | **Buyback Options (Варианты)** | 3-Card Grid | Hover zoom, callback button click | `src/components/BuybackOptions.tsx` |
| **7** | **Process Details (Детали)** | 6-Card Grid | Hover highlights | `src/components/ProcessDetails.tsx` |
| **8** | **Required Documents** | List with icons | Highlighted targets | `src/components/RequiredDocuments.tsx` |
| **9** | **Car Brands Grid** | Grid of logos | Static logos | `src/components/CarBrandsGrid.tsx` |
| **10** | **Recent Purchases (Сделки)** | Carousel slider | Drag-to-scroll, click photo | `src/components/RecentPurchases.tsx` |
| **11** | **Reviews (Отзывы)** | Carousel slider | Auto-play + dot indicators | `src/components/Reviews.tsx` |
| **12** | **Footer** | 3-Column Footer | Contact links, social icons, map | `src/components/Footer.tsx` |

---

## Z-Index Layering
* `z-50` — Callback Dialog Modal
* `z-40` — Sticky Navigation Header
* `z-10` — Floating Action Button (Quick Call)
* `z-0` — Main content flow, section backgrounds, hero overlay
