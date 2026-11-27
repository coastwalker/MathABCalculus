import React from 'react';
import { X, BookOpen } from 'lucide-react';
import { MathText } from './MathText';

interface CheatSheetDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const CheatSheetDrawer: React.FC<CheatSheetDrawerProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 h-full overflow-y-auto shadow-2xl border-l border-slate-200 dark:border-slate-800 p-5 sm:p-7 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur z-10">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-indigo-600 text-white">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Unit 4 Quick Reference Cheat Sheet
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Essential rules, templates, sign charts &amp; geometry formulas
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Close Cheat Sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Big 4 */}
        <section className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-4 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            1. Lesson 4.1 — "The Big 4" Derivative Interpretation
          </h3>
          <MathText
            block
            className="text-sm text-slate-700 dark:text-slate-200"
            text={String.raw`“At $t = a$ **(1. Time)**, the **[2. Context of $f(t)$]** is **[3. increasing/decreasing]** at a rate of $|f'(a)|$ **[4. units of $f$ per unit of $t$]**.”
- **Trap:** Never write *"decreasing at a rate of $-13$"*! And if $R(t)$ is already a rate (e.g. $\text{gal/hr}$), then $R'(t)$ has units $\text{gal/hr}^2$!`}
          />
        </section>

        {/* 2. Straight-Line Motion */}
        <section className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-4 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            2. Lesson 4.2 — Straight-Line Particle Motion Sign Rules
          </h3>
          <MathText
            block
            className="text-sm text-slate-700 dark:text-slate-200"
            text={String.raw`- **Relationships (Always write on FRQs!):** $v(t) = s'(t)$ and $a(t) = v'(t) = s''(t)$, $\text{Speed} = |v(t)|$.
- **Displacement on $[a, b]$:** $s(b) - s(a)$ | **Avg Velocity:** $\frac{s(b) - s(a)}{b - a}$ | **Avg Acceleration:** $\frac{v(b) - v(a)}{b - a}$.
- **Direction & Rest:** At rest when $v(t) = 0$; moving right/up when $v(t) > 0$; moving left/down when $v(t) < 0$; **changes direction** when $v(t)$ **changes sign**!
- **Speeding Up vs. Slowing Down:** Compare signs of **$v(t)$ and $a(t)$**! Same sign $\Rightarrow$ **speeding up**; opposite signs $\Rightarrow$ **slowing down**.
- **Moving Away vs. Towards Origin:** Compare signs of **position $s(t)$ and velocity $v(t)$**! Same sign $\Rightarrow$ moving **away**; opposite signs $\Rightarrow$ moving **towards** origin.`}
          />
        </section>

        {/* 3. Implicit Differentiation */}
        <section className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-4 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            3. Lesson 3.2 — Implicit Differentiation Protocol
          </h3>
          <MathText
            block
            className="text-sm text-slate-700 dark:text-slate-200"
            text={String.raw`1. Differentiate both sides wrt $x$ (multiply every differentiated $y$-term by $\frac{dy}{dx}$; watch Product Rule on $xy$: $x\frac{dy}{dx} + y$).
2. Group $\frac{dy}{dx}$ terms on one side, factor out $\frac{dy}{dx}$, and divide.
3. **Horizontal Tangent:** Numerator of $\frac{dy}{dx} = 0$ (and denominator $\neq 0$).
4. **Vertical Tangent:** Denominator of $\frac{dy}{dx} = 0$ (and numerator $\neq 0$).
5. **$\frac{0}{0}$ Throw-Out & Curve Check:** Discard any point giving $\frac{0}{0}$, and ALWAYS verify the point satisfies the **original curve equation**!`}
          />
        </section>

        {/* 4. Related Rates & Geometry */}
        <section className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-4 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            4. Lessons 4.4 &amp; 4.5 — Related Rates 5 Steps &amp; Geometry Formulas
          </h3>
          <MathText
            block
            className="text-sm text-slate-700 dark:text-slate-200"
            text={String.raw`- **5-Step Protocol:** (1) Sketch & label variables/rates; (2) Write relating equation (substitute constants or cone proportions $\frac{r}{h} = \frac{R}{H}$, NEVER changing snapshots!); (3) Differentiate wrt time $t$ ($\frac{d}{dt}$); (4) Plug in known snapshot values; (5) State answer with units!
- **Essential Geometry Formulas:**
  - **Circle:** $A = \pi r^2,\quad C = 2\pi r$
  - **Sphere:** $V = \frac{4}{3}\pi r^3 \implies \frac{dV}{dt} = 4\pi r^2\frac{dr}{dt},\quad S = 4\pi r^2 \implies \frac{dS}{dt} = 8\pi r\frac{dr}{dt}$
  - **Right Circular Cone:** $V = \frac{1}{3}\pi r^2 h$ *(use $\frac{r}{h} = \frac{R}{H}$ before differentiating!)*
  - **Cylinder:** $V = \pi r^2 h$ *(radius $r$ is **constant**!)*
  - **Square Pyramid:** $V = \frac{1}{3}s^2 h$ *(use $\frac{s}{h} = \frac{S}{H}$ before differentiating!)*
  - **Right Triangle:** $x^2 + y^2 = z^2$ and $\tan\theta = \frac{\text{opp}}{\text{adj}} \implies \sec^2\theta\frac{d\theta}{dt} = \dots$`}
          />
        </section>
      </div>
    </div>
  );
};
