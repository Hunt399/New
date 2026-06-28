# avtocare.com.ua - Design Tokens

These design tokens are reverse-engineered from the computed styles of `https://avtocare.com.ua/`.

---

## 🎨 Color Palette

| Category | Token Name | Hex Value | Used For |
|---|---|---|---|
| **Primary** | `brand-primary` | `#e11d48` (Rose 600) | Buttons, highlight text, active borders |
| **Primary Hover**| `brand-hover` | `#be123c` (Rose 700) | Hovered button states |
| **Dark (Text)** | `text-dark` | `#1a1a1a` | Headings, primary content, body text |
| **Muted (Text)** | `text-muted` | `#6b7280` (Gray 500) | Subtitles, labels, placeholders |
| **Light Muted** | `text-light` | `#9ca3af` | Inactive text, secondary labels |
| **Background (Light)**| `bg-light` | `#f9fafb` (Gray 50) | Alternate section backgrounds |
| **Background (White)**| `bg-white` | `#ffffff` | Primary section backgrounds, cards |
| **Borders** | `border-gray` | `#e5e7eb` (Gray 200) | Grid lines, horizontal rules, form borders |

---

## ✍️ Typography

* **Primary Font Family:** `Inter, sans-serif` (emulated equivalent for target's geometric sans font)
* **Fallback Fonts:** `system-ui, -apple-system, sans-serif`

| Token | Font Size | Line Height | Font Weight | Usage |
|---|---|---|---|---|
| `h1` | `36px` (`2.25rem`) | `1.2` | `800` (Extra Bold) | Hero Title |
| `h2` | `28px` (`1.75rem`) | `1.3` | `700` (Bold) | Section Titles |
| `h3` | `20px` (`1.25rem`) | `1.4` | `600` (Semi Bold) | Sub-headings, Form Titles |
| `body` | `16px` (`1rem`) | `1.6` | `400` (Regular) | Body Copy |
| `label`| `14px` (`0.875rem`)| `1.4` | `500` (Medium) | Input Labels, Small Text |

---

## 📐 Spacing & Grid System

* **Container Max Width:** `1200px` (centered using `mx-auto`)
* **Vertical Section Spacing:** `80px` (`5rem`) for desktop, `48px` (`3rem`) for mobile
* **Grid Gap:**
  * Desktop: `32px` (`2rem`)
  * Tablet: `24px` (`1.5rem`)
  * Mobile: `16px` (`1rem`)

---

## 🎛 UI Elements

* **Border Radius:**
  * Buttons & Inputs: `8px` (`0.5rem`)
  * Cards & Containers: `16px` (`1rem`)
* **Transitions:**
  * Duration: `200ms`
  * Timing Function: `ease-in-out`
