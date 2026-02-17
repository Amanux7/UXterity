# MISSION — Source of Truth

## Project: UXterity (Agency Portfolio)
**Aesthetic:** "Deep Void" · "Empire Building" · "Bold Executions"

---

## Tech Stack
| Layer           | Technology                                   |
| --------------- | -------------------------------------------- |
| Framework       | Next.js 16 (App Router, TypeScript, Turbopack) |
| Styling         | Tailwind CSS v4 (CSS-based theme)            |
| Animation       | GSAP + ScrollTrigger, Framer Motion          |
| Smooth Scroll   | Lenis (`lerp: 0.1`)                         |
| 3D Engine       | React Three Fiber + Drei                     |
| Typography      | Syne (Display), Inter (Body) via next/font   |
| Icons           | Lucide React                                 |
| Utilities       | clsx + tailwind-merge                        |

## Design Tokens
| Token          | Value     | Usage                   |
| -------------- | --------- | ----------------------- |
| `void`         | `#050505` | Primary backgrounds     |
| `surface`      | `#121212` | Cards, elevated surfaces|
| `empire-gold`  | `#D4AF37` | Accent, highlights      |
| `neon-blue`    | `#4f46e5` | Secondary accent        |

## Typography
- **Display:** Syne (400, 700, 800)
- **Body:** Inter (Variable)

## Rules
1. Backgrounds are **never** `#000000` — use `void` (#050505) or `surface` (#121212)
2. **Motion is mandatory** — no static entry transitions
3. All components must feel bespoke — no generic UI patterns
4. 3D elements must target **60fps** on average hardware
