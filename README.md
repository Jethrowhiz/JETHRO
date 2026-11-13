# Jethro Samson — React Portfolio

A visually stunning, premium, fully responsive personal portfolio website for **Jethro Samson**, Software Developer specializing in **Frontend Development**, **Web Applications**, and **Web3 Development**.

Built with **React.js**, **Vite**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## 🎨 Color Palette & Aesthetic

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Deep Burnt Brown** | `#54230F` | Primary dark surface, navigation base |
| **Rich Chocolate Brown**| `#713315` | Mid-tone shadow, cards, modal framing |
| **Warm Caramel** | `#C47A3E` | Key accent, timeline node, button hover |
| **Golden Amber** | `#E8A65D` | Ambient lighting, active indicators, badges |
| **Soft Cream** | `#FFF9EE` | Primary light background, primary buttons |
| **Warm Beige** | `#F6EBD6` | Secondary light surface, cards, borders |
| **Dark Typography** | `#171310` | High-contrast editorial typography |

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🏛️ Component Architecture

```
PORTFOLIO/
├── index.html                  # Root HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind theme & color system
├── public/
│   └── assets/images/          # Vector SVG assets
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glassmorphic nav & mobile menu drawer
│   │   ├── Hero.tsx            # Radial gradient, portrait, interactive tags
│   │   ├── About.tsx           # Radial tick arc gauge & floating cards
│   │   ├── Services.tsx        # 7 capability cards with inquiry links
│   │   ├── Projects.tsx        # Filterable showcase with preview & code modal
│   │   ├── Process.tsx         # 4-stage engineering timeline (01–04)
│   │   ├── Skills.tsx          # Technical toolchain categorized cards
│   │   ├── Contact.tsx         # Interactive form with validation & copy email
│   │   ├── Footer.tsx          # Dual-tone minimal footer with smooth scroll
│   │   └── Modals/
│   │       ├── AboutModal.tsx      # In-depth retrospective bio modal
│   │       ├── ProjectModal.tsx    # Live preview & architecture code inspector
│   │       └── SuccessModal.tsx    # Contact confirmation celebration
│   ├── data/
│   │   ├── projectsData.ts     # Curated production project datasets
│   │   ├── servicesData.ts     # 7 specialized services
│   │   └── skillsData.ts       # Frontend, Web Apps, Web3 toolchains
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── styles/
│   │   └── globals.css         # Tailwind directives, custom radial arc math
│   ├── App.tsx                 # Master state orchestration & modal manager
│   └── main.tsx                # React root mount
└── dist/                       # Production build output
```

---

## 📱 Responsive Adaptations

- **Mobile (320px–767px)**:
  - Slide-out mobile navigation drawer with backdrop blur.
  - Stacked hero layout with naturally framed portrait and tap-friendly tags.
  - Horizontal swipeable carousel for About floating preview cards.
  - Single-column responsive cards for Projects and Services.
  - Full-width mobile-optimized contact form.
- **Tablet (768px–1024px)**:
  - 2-column project and services grids with adjusted spacing.
- **Desktop (1024px–1920px+)**:
  - Full architectural radial tick arc dial with mathematically positioned tilted cards.
  - 3-column services grid and dual-column interactive project showcases.
  - Horizontal connected timeline with golden amber gradient node indicators.

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Starts the local development server at `http://localhost:3000` with instant Hot Module Replacement (HMR).

### Production Build
```bash
npm run build
```
Type-checks TypeScript and compiles an optimized production bundle into the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Previews the production build locally.

---

&copy; 2026 Jethro Samson. All rights reserved.
