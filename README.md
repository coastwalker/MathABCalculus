# AP Calculus AB — Unit 4 Mastery & Test Prep Portal

Interactive React + TypeScript + Vite + Tailwind CSS + KaTeX study portal covering all 26 pages of **Chapter 4: Applications of Derivatives**:

1. **Lesson 4.1 — Interpreting Derivatives in Context** ("The Big 4" framework, cooling pie, waterpark rate-of-a-rate, gymnast height, bird population, oil tank flow rate, and #1–7 unit/concept matching)
2. **Lesson 4.2 — Straight-Line Motion** (Interactive SVG Caren velocity graph, dust particle FRQ, cliff ball, haunted house monster, and 3 Calculator AP FRQs)
3. **Lesson 3.2 — Implicit Differentiation (Days 1–3)** (First & second derivatives, quick-slope MCQs, horizontal/vertical tangents, $\frac{0}{0}$ checks, and 6 classic AP FRQs: 2008B #4, 2015 #6, 2000 #5, 1998 #6, 1987 #2, 1992 #4)
4. **Lessons 4.4 & 4.5 — Related Rates (Days 1–2)** (Calculus-speak, $\frac{d}{dt}$ drills, sphere/ladder/circle/cars/drone/shadow, cones vs. cylinders, pyramid, 2016/2019/2023/2024/2025 AP FRQs, Ferris wheel MCQ, and concert section)
5. **Timed 50-Minute Full Unit 4 Mock Exam**

## Quick Start

```bash
npm install
npm run dev      # Start local dev server
npm run build    # Type-check & build production static site into ./dist
npm run preview  # Preview production build locally
```

## Deployment
- **GitHub Pages:** Includes [deploy.yml](.github/workflows/deploy.yml) using GitHub Actions Pages deployment (`base: './'` works at any repo subpath).
- **Cloudflare Pages:** Connect the repo with build command `npm run build` and output directory `dist`.
