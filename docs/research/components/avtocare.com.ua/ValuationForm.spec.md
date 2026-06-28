# ValuationForm Specification

## Overview
* **Target file:** `src/components/ValuationForm.tsx`
* **Parent Component:** `HeroSection`
* **Interaction model:** Form submission via POST / AJAX handler

---

## DOM Structure
```
form (container)
 ├── h3 (title: "Узнайте стоимость своего авто сейчас:")
 ├── div (input grid)
 │    ├── input[name="car-mark"] (placeholder: "Марка автомобиля")
 │    ├── input[name="car-model"] (placeholder: "Модель автомобиля")
 │    ├── input[name="car-year"] (placeholder: "Год выпуска")
 │    └── input[name="your-phone"] (placeholder: "Ваш телефон", type: "tel")
 └── button[type="submit"] (text: "Узнать стоимость")
```

---

## Computed Styles (Exact target values)

### Form Container
* **max-width:** `480px`
* **background-color:** `rgba(255, 255, 255, 0.95)` (glassmorphism overlay on Hero background)
* **backdrop-filter:** `blur(10px)`
* **padding:** `32px` (`2rem`)
* **border-radius:** `16px` (`1rem`)
* **box-shadow:** `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)`

### Form Title (h3)
* **font-size:** `20px` (`1.25rem`)
* **font-weight:** `700` (bold)
* **color:** `#1a1a1a`
* **margin-bottom:** `20px`

### Inputs
* **font-size:** `16px` (`1rem`)
* **height:** `48px`
* **padding-left:** `16px`
* **border:** `1px solid #d1d5db` (Gray 300)
* **border-radius:** `8px` (`0.5rem`)
* **background-color:** `#ffffff`
* **focus-border-color:** `#e11d48` (Rose 600 / Brand primary)
* **focus-ring:** `0 0 0 3px rgba(225, 29, 72, 0.2)`

### Submit Button
* **font-size:** `16px`
* **font-weight:** `600`
* **height:** `52px`
* **color:** `#ffffff`
* **background-color:** `#e11d48` (Rose 600)
* **border-radius:** `8px`
* **cursor:** `pointer`
* **transition:** `all 0.2s ease-in-out`
* **hover-background-color:** `#be123c` (Rose 700)
* **hover-transform:** `translateY(-1px)`

---

## States & Behaviors

### Hover & Active States
* **Input Hover:** Border changes to `#9ca3af` (Gray 400).
* **Button Hover:** Background transitions to `#be123c` (Rose 700), shadow deepens.
* **Button Active:** Scale transitions to `0.98`.

### Form Submission Handler
* On click, perform client-side validation (ensure `your-phone` matches regex `/^\+?3?8?(0\d{9})$/`).
* If invalid: Add class `border-red-500` to input, show message "Введите корректный номер телефона".
* If valid: Transition button to loading state (opacity: `0.7`, show loading spinner, disable interactions).
* Send data asynchronously to endpoint. Display success dialog "Заявка принята! Мы свяжемся с вами в течение 10 минут."

---

## Responsive Behavior
* **Desktop (>768px):** Inputs aligned in a 2x2 grid. Button is full width at the bottom.
* **Mobile (<768px):** Grid collapses to a single-column stack. Form width adjusts to `100%`. Paddings reduce to `24px`.
