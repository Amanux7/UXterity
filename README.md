# UXterity

> **"Deep Void" · "Empire Building" · "Bold Executions"**

UXterity is a high-performance, visually striking agency portfolio built with Next.js 16. It focuses on immersive interactions, fluid animations, and a bespoke "Deep Void" aesthetic that rejects generic design patterns.

![Project Banner](public/og-image.jpg) <!-- Replace with actual banner if available -->

## 🚀 Features

- **Immersive 3D Experiences**: Powered by React Three Fiber & Drei.
- **Fluid Animations**: Complex orchestrations using GSAP ScrollTrigger & Framer Motion.
- **Smooth Scrolling**: Integrated Lenis for silky smooth scroll interactions (`lerp: 0.1`).
- **Modern Styling**: Tailwind CSS v4 with a custom "Deep Void" design system.
- **Bespoke Design**: Custom typography (Syne + Inter) and unique component architecture.
- **Performance First**: Optimized for 60fps experiences on average hardware.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 (App Router, TypeScript, Turbopack) |
| **Styling** | Tailwind CSS v4 |
| **Animation** | GSAP, Framer Motion |
| **3D Engine** | React Three Fiber, Drei |
| **Typography** | Syne (Display), Inter (Body) |
| **Icons** | Lucide React |

## 🎨 Design System

Our design philosophy is built around the "Deep Void" aesthetic:

| Token | Value | Usage |
|-------|-------|-------|
| `void` | `#050505` | Primary Backgrounds |
| `surface` | `#121212` | Cards, Elevated Surfaces |
| `empire-gold` | `#D4AF37` | Accents, Highlights |
| `neon-blue` | `#4f46e5` | Secondary Accents |

**Core Rules:**
*   Backgrounds are never pure black (`#000000`).
*   Motion is mandatory; no static entry transitions.
*   All components must feel bespoke.

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed:
*   Node.js 18+
*   npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/uxterity.git
    cd uxterity
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4.  **Open the application:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```bash
uxterity/
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # React components
│   │   ├── ui/           # Reusable UI elements (Buttons, Cards)
│   │   ├── hero/         # Hero section specific components
│   │   ├── navigation/   # Navigation components (MegaMenu)
│   │   └── ...
│   └── lib/              # Utility functions and hooks
├── public/               # Static assets
└── ...config files       # Configuration (Tailwind, TypeScript, Next.js)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
