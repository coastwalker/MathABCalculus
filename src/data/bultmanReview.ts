import { Problem } from '../types';

export const BULTMAN_REVIEW_PROBLEMS: Problem[] = [
  // =========================================================================
  // SECTION 1: Page 1 — Leibniz Notation, 4.2 Justifications & Graph Critique
  // =========================================================================
  {
    id: 'bultman-p1-foundations',
    module: 'bultman-review',
    section: 'Page 1: Leibniz Notation, Motion Justifications & Graph Critique',
    badge: 'Page 1 • Notation & 4.2 Justifications',
    title: 'Leibniz Evaluation Notation (a–g) & Particle Motion Justification Claims',
    calculator: 'non-calculator',
    stem: String.raw`Warm up with Ms. Bultman's **Leibniz Notation Review** (like $\left.\dfrac{dA}{dt}\right|_{t=4}$) and the **4.2 Motion Justifications** table on Page 1.`,
    watchOut: String.raw`Read carefully on **(f)** and **(g)**: *"The **value** of $h$ when $r = 2$"* is simply function evaluation $h(2)$ (NOT a derivative $\frac{dh}{dr}$)! Only *"rate of change"* or *"derivative"* uses $\frac{d(\cdot)}{d(\cdot)}$!`,
    parts: [
      {
        partId: 'leibniz',
        label: 'Notation Review (a)–(g)',
        prompt: String.raw`Match each verbal description (a)–(g) to its exact mathematical notation:`,
        inputType: 'matching',
        matchingChoices: [
          { id: 'c1', label: 'dy/dx |_(10, 3)' },
          { id: 'c2', label: 'd²y/dx² |_(-2, -5)' },
          { id: 'c3', label: 'dx/dt |_(t = 3)' },
          { id: 'c4', label: 'dx/dt |_(y = 5)' },
          { id: 'c5', label: 'dy/dt |_(t = 1)' },
          { id: 'c6', label: 'h(2)  [or h |_(r = 2)]' },
          { id: 'c7', label: 'y(0)  [or y |_(θ = 0)]' },
        ],
        matchingItems: [
          { id: 'a', prompt: '(a) The rate of change of y with respect to x at the point (10, 3)', correctOptionId: 'c1', explanation: 'First derivative of y wrt x evaluated at (10, 3).' },
          { id: 'b', prompt: '(b) The second derivative of y with respect to x at the point (-2, -5)', correctOptionId: 'c2', explanation: 'Second derivative d²y/dx² evaluated at (-2, -5).' },
          { id: 'c', prompt: '(c) The rate of change of x with respect to t when t = 3', correctOptionId: 'c3', explanation: 'dx/dt evaluated at t = 3.' },
          { id: 'd', prompt: '(d) The rate of change of x with respect to t when y = 5', correctOptionId: 'c4', explanation: 'dx/dt evaluated at the instant y = 5.' },
          { id: 'e', prompt: '(e) The rate of change of y with respect to t when t = 1', correctOptionId: 'c5', explanation: 'dy/dt evaluated at t = 1.' },
          { id: 'f', prompt: '(f) The value of h when r = 2', correctOptionId: 'c6', explanation: 'Static function value h(2), NOT a rate of change!' },
          { id: 'g', prompt: '(g) The value of y when θ = 0', correctOptionId: 'c7', explanation: 'Static function value y(0), NOT a rate of change!' },
        ],
        hint1: String.raw`Put the dependent ("of ___") variable in the numerator and the independent ("with respect to ___") variable in the denominator!`,
        hint2: String.raw`Notice (f) and (g) say *"The value of..."* rather than *"The rate of change of..."*.`,
        solution: String.raw`- **(a)** $\left.\dfrac{dy}{dx}\right|_{(10,3)}$
- **(b)** $\left.\dfrac{d^2y}{dx^2}\right|_{(-2,-5)}$
- **(c)** $\left.\dfrac{dx}{dt}\right|_{t=3}$
- **(d)** $\left.\dfrac{dx}{dt}\right|_{y=5}$
- **(e)** $\left.\dfrac{dy}{dt}\right|_{t=1}$
- **(f)** $h(2)$ (or $\left.h\right|_{r=2}$)
- **(g)** $y(0)$ (or $\left.y\right|_{\theta=0}$)`,
      },
      {
        partId: 'claims',
        label: '4.2 Justifications Table (#2–#4)',
        prompt: String.raw`Based on the justification provided in the right column of Ms. Bultman's table, what motion claim is being proved in rows **2**, **3**, and **4**?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`2: Moving right on $(0,5)\cup(6,8)$;\; 3: At rest at $t=3$;\; 4: Velocity at $t=3$ is $5$.`,
            explanation: String.raw`Same sign of v and a proves SPEEDING UP (not moving right); v changing sign proves DIRECTION CHANGE; |v(3)| = 5 is SPEED (not velocity)!`,
          },
          {
            label: 'B',
            text: String.raw`**2:** The particle is **speeding up** on $(0, 5) \cup (6, 8)$;\; **3:** The particle **changes direction** at $t = 3$;\; **4:** The particle's **speed** at $t = 3$ is $5$.`,
            explanation: String.raw`Correct! v(t) & a(t) same sign ⇔ speeding up; v(t) changes sign ⇔ changes direction; |v(3)| = |-5| = 5 ⇔ speed at t = 3 is 5!`,
          },
          {
            label: 'C',
            text: String.raw`2: Moving away from origin on $(0,5)\cup(6,8)$;\; 3: Speeding up at $t=3$;\; 4: Displacement at $t=3$ is $5$.`,
            explanation: String.raw`Moving away from origin compares s(t) and v(t), not v(t) and a(t).`,
          },
          {
            label: 'D',
            text: String.raw`2: Positive acceleration on $(0,5)\cup(6,8)$;\; 3: Inflection point at $t=3$;\; 4: Acceleration at $t=3$ is $5$.`,
            explanation: String.raw`Incorrect definitions.`,
          },
        ],
        hint1: String.raw`Recall the three core AP Motion templates: (1) $v(t)$ and $a(t)$ same sign, (2) $v(t)$ changes sign, and (3) $|v(t)|$.`,
        hint2: String.raw`$|v(3)| = |-5| = 5$ is the definition of **speed** at $t = 3$.`,
        solution: String.raw`- **Row 2:** *On $(0, 5) \cup (6, 8)$, $v(t)$ and $a(t)$ have the same sign* $\implies$ **The particle is speeding up on $(0, 5) \cup (6, 8)$.**
- **Row 3:** *At $t = 3$, $v(t)$ changes sign* $\implies$ **The particle changes direction at $t = 3$.**
- **Row 4:** *$|v(3)| = |-5| = 5$* $\implies$ **The particle's speed at $t = 3$ is $5$.**`,
      },
    ],
  },
  {
    id: 'bultman-p1-vel-graph',
    module: 'bultman-review',
    section: 'Page 1: Leibniz Notation, Motion Justifications & Graph Critique',
    badge: 'Page 1 • Velocity Graph True/False Critique',
    title: 'Critiquing 3 Motion Statements From Velocity Graph v(t) on [0, 10]',
    calculator: 'non-calculator',
    visual: 'bultman-p1-velocity-graph',
    stem: String.raw`Based on the velocity graph $v(t)$ (in $\text{meters per second}$) above, provide sufficient FRQ justification for each statement **OR explain why the statement is false**:
1. *"The particle changes direction at $t = 3$, $t = \frac{19}{3}$, and $t = 9$ because..."*
2. *"The particle is speeding up on $(0, 2) \cup (3, 6) \cup \left(\frac{19}{3}, 8\right) \cup (9, 10)$ because..."*
3. *"The particle's maximum speed is $4$ meters per second."*`,
    watchOut: String.raw`Look closely at **$t = 3$** on the graph! $v(3) = 0$, **BUT** $v(t)$ bounces off the $t$-axis ($v(t) > 0$ before $t = 3$ AND $v(t) > 0$ after $t = 3$), so the particle does **NOT** change direction at $t = 3$!`,
    parts: [
      {
        partId: 'critique',
        prompt: String.raw`Select the accurate True/False evaluation and AP justification for all 3 statements:`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`**#1 is FALSE** because at $t = 3$, $v(t) = 0$ does **not** change sign ($v > 0$ on both $(0,3)$ and $(3,6)$). **#2 is TRUE** (using the labeled $t$-intercepts) because on each listed subinterval, $v(t)$ and $a(t) = v'(t)$ have the **same sign**. **#3 is TRUE** because speed $= |v(t)|$ achieves its maximum value $|-4| = 4\text{ m/s}$ at $t = 8$ (which exceeds $|3| = 3\text{ m/s}$ at $t = 2$).`,
            explanation: String.raw`Correct! Nails the bounce-zero trap at t = 3, same-sign speeding-up rule, and maximum |v(t)| at t = 8!`,
          },
          {
            label: 'B',
            text: String.raw`**#1 is TRUE** because $v(t) = 0$ at all three times; **#2 is TRUE**; **#3 is FALSE** because the maximum velocity is $3\text{ m/s}$ at $t = 2$.`,
            explanation: String.raw`Two classic traps! v(t) = 0 without a sign change is NOT a direction change, and maximum SPEED |v(t)| checks |-4| = 4 > 3!`,
          },
          {
            label: 'C',
            text: String.raw`**#1 is FALSE**; **#2 is FALSE** because on $(19/3, 8)$ velocity is decreasing; **#3 is TRUE**.`,
            explanation: String.raw`On (19/3, 8), v(t) < 0 AND v′(t) < 0 (both negative = SAME sign!), so the particle IS speeding up in the negative direction!`,
          },
          {
            label: 'D',
            text: String.raw`**#1 is FALSE**; **#2 is TRUE**; **#3 is FALSE** because speed at $t = 8$ is $-4\text{ m/s}$.`,
            explanation: String.raw`Speed is |v(t)| ≥ 0 — it can never be negative! At t = 8, speed is |-4| = 4 m/s.`,
          },
        ],
        hint1: String.raw`Check $t = 3$ for a sign change in #1, check signs of $v(t)$ and $v'(t)$ in #2, and check $\max |v(t)|$ across $[0, 10]$ in #3!`,
        hint2: String.raw`At $t = 2$, $|v(2)| = 3\text{ m/s}$; at $t = 8$, $|v(8)| = |-4| = 4\text{ m/s}$.`,
        solution: String.raw`1. **Statement #1 — FALSE:** At $t = 3$, $v(3) = 0$, but $v(t)$ stays positive on both $(0, 3)$ and $(3, 6)$ (no sign change!), so the particle pauses momentarily and continues right rather than changing direction. *(Note: using exact grid coordinates $(6, 1)\to(8, -4)\to(10, 1)$, the two actual sign-change intercepts occur at $t = 6.4$ and $t = 9.6$.)*
2. **Statement #2 — TRUE (for the labeled intercepts):** On $(0, 2)$, $(3, 6)$, and $(9, 10)$, both $v(t) > 0$ and $a(t) = v'(t) > 0$; on $(\frac{19}{3}, 8)$, both $v(t) < 0$ and $a(t) = v'(t) < 0$. Because $v(t)$ and $a(t)$ have the **same sign**, the particle is speeding up.
3. **Statement #3 — TRUE:** Speed is $|v(t)|$. Across $[0, 10]$, $-4 \le v(t) \le 3$, so the maximum value of $|v(t)|$ is $|v(8)| = |-4| = 4\text{ m/s}$.`,
      },
    ],
  },

  // =========================================================================
  // SECTION 2: Pages 1–4 — No-Calculator Multiple Choice (#1–#23)
  // =========================================================================
  {
    id: 'bultman-mcqs-1-5',
    module: 'bultman-review',
    section: 'Pages 1–4: Ms. Bultman No-Calculator MCQs (#1–#23)',
    badge: 'MCQs #1–#5 • Implicit & Motion',
    title: 'Ms. Bultman Multiple Choice #1–#5',
    calculator: 'non-calculator',
    stem: String.raw`Solve Multiple-Choice Questions **#1–#5** from Pages 1–2 of Ms. Bultman's Review *(note #5 allows calculator if desired, though it factors cleanly by hand!)*.`,
    parts: [
      {
        partId: 'q1',
        label: 'MCQ #1',
        prompt: String.raw`Given $xy + 2 = \sin(x)$, determine $\left.\dfrac{dy}{dx}\right|_{x = \pi}$.`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          { label: 'A', text: String.raw`$0$`, explanation: 'cos(π) = -1 ≠ 0.' },
          { label: 'B', text: String.raw`$\dfrac{\pi + 2}{\pi^2}$`, explanation: 'Sign error: cos(π) = -1, not +1!' },
          { label: 'C', text: String.raw`$\dfrac{-\pi + 2}{\pi^2}$`, explanation: 'Correct! At x = π, πy + 2 = 0 ⇒ y = -2/π. Then y + xy′ = cos x ⇒ -2/π + πy′ = -1 ⇒ πy′ = -1 + 2/π = (-π + 2)/π ⇒ y′ = (-π + 2)/π²!' },
          { label: 'D', text: String.raw`$-\dfrac{2}{\pi}$`, explanation: '-2/π is the y-coordinate at x = π, not dy/dx!' },
          { label: 'E', text: String.raw`$\dfrac{2}{\pi}$`, explanation: 'Incorrect.' },
        ],
        hint1: String.raw`First find $y$ when $x = \pi$: $\pi y + 2 = \sin(\pi) = 0 \implies y = -\frac{2}{\pi}$.`,
        hint2: String.raw`Differentiate: $y + xy' = \cos(x)$. Plug in $x = \pi$ ($\cos\pi = -1$) and $y = -\frac{2}{\pi}$!`,
        solution: String.raw`At $x = \pi$: $\pi y + 2 = 0 \implies y = -\frac{2}{\pi}$.
$$y + x\frac{dy}{dx} = \cos x \implies -\frac{2}{\pi} + \pi\frac{dy}{dx} = -1 \implies \pi\frac{dy}{dx} = \frac{-\pi + 2}{\pi} \implies \frac{dy}{dx} = \frac{-\pi + 2}{\pi^2} \quad \textbf{(Choice C)}$$`,
      },
      {
        partId: 'q2',
        label: 'MCQ #2',
        prompt: String.raw`Given $x^3 - y^2 = y$, determine $\dfrac{dy}{dx}$.`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          { label: 'A', text: String.raw`$3x^2 - 2y$`, explanation: 'Forgot dy/dx on -2y and y.' },
          { label: 'B', text: String.raw`$\dfrac{3x^2}{1 - 2y}$`, explanation: 'Sign error moving -2yy′ to the right side (+2yy′).' },
          { label: 'C', text: String.raw`$\dfrac{3x^2}{1 + 2y}$`, explanation: 'Correct! 3x² - 2yy′ = y′ ⇒ 3x² = (1 + 2y)y′ ⇒ y′ = 3x²/(1 + 2y)!' },
          { label: 'D', text: String.raw`$\dfrac{3x^2 - 1}{2y}$`, explanation: 'Treated y on RHS as x (derivative 1 instead of y′).' },
          { label: 'E', text: String.raw`$-\dfrac{3x^2 - 1}{2y}$`, explanation: 'Treated y on RHS as x.' },
        ],
        hint1: String.raw`Differentiate wrt $x$: $3x^2 - 2y\frac{dy}{dx} = \frac{dy}{dx}$.`,
        hint2: String.raw`Add $2y\frac{dy}{dx}$ to both sides and factor out $\frac{dy}{dx}$.`,
        solution: String.raw`$$3x^2 - 2y\frac{dy}{dx} = \frac{dy}{dx} \implies 3x^2 = (1 + 2y)\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{3x^2}{1 + 2y} \quad \textbf{(Choice C)}$$`,
      },
      {
        partId: 'q3',
        label: 'MCQ #3',
        prompt: String.raw`Given $\dfrac{dy}{dx} = \dfrac{2x}{3y^2}$, determine $\left.\dfrac{d^2y}{dx^2}\right|_{(1, 2)}$.`,
        inputType: 'mcq',
        correctIndex: 3,
        options: [
          { label: 'A', text: String.raw`$\dfrac{5}{3}$`, explanation: 'Forgot (3y²)² = 144 in the Quotient Rule denominator.' },
          { label: 'B', text: String.raw`$-\dfrac{5}{3}$`, explanation: 'Wrong sign and denominator.' },
          { label: 'C', text: String.raw`$\dfrac{5}{6}$`, explanation: 'Divided by 24 instead of 144.' },
          { label: 'D', text: String.raw`$\dfrac{5}{36}$`, explanation: 'Correct! At (1, 2), y′ = 2/12 = 1/6. Quotient Rule: [2(12) - 2(12 · 1/6)] / 12² = (24 - 4)/144 = 20/144 = 5/36!' },
        ],
        hint1: String.raw`Evaluate $y' = \frac{2(1)}{3(4)} = \frac{1}{6}$ first, then apply the Quotient Rule to $\frac{2x}{3y^2}$!`,
        hint2: String.raw`$\frac{d^2y}{dx^2} = \frac{2(3y^2) - 2x(6y\cdot y')}{(3y^2)^2} = \frac{2(12) - 2(1)(12 \cdot \frac{1}{6})}{12^2}$.`,
        solution: String.raw`At $(1, 2)$, $y' = \frac{2}{12} = \frac{1}{6}$. Using the Quotient Rule:
$$\left.\frac{d^2y}{dx^2}\right|_{(1,2)} = \frac{2(3\cdot 4) - 2(1)\left(6\cdot 2\cdot \frac{1}{6}\right)}{(3\cdot 4)^2} = \frac{24 - 4}{144} = \frac{20}{144} = \frac{5}{36} \quad \textbf{(Choice D)}$$`,
      },
      {
        partId: 'q4',
        label: 'MCQ #4',
        prompt: String.raw`A particle moves along the $x$-axis with position $s(t) = \dfrac{t^3}{3} - 4t^2 - 20t$. On which interval (for $t \ge 0$) is the particle moving right?`,
        inputType: 'mcq',
        correctIndex: 3,
        options: [
          { label: 'A', text: String.raw`$(0, 4)$`, explanation: 'On (0, 4), v(t) < 0 (4 is where a(t) = 2t - 8 = 0).' },
          { label: 'B', text: String.raw`$(0, 10)$`, explanation: 'On (0, 10), v(t) = (t - 10)(t + 2) < 0 (moving left!).' },
          { label: 'C', text: String.raw`$(4, 10)$`, explanation: 'On (4, 10), v(t) < 0.' },
          { label: 'D', text: String.raw`$(10, \infty)$`, explanation: 'Correct! v(t) = t² - 8t - 20 = (t - 10)(t + 2) > 0 for t > 10!' },
          { label: 'E', text: String.raw`$(4, \infty)$`, explanation: '(4, ∞) is where a(t) = 2t - 8 > 0, not where v(t) > 0.' },
        ],
        hint1: String.raw`Solve $v(t) = s'(t) = t^2 - 8t - 20 > 0$.`,
        hint2: String.raw`Factor $(t - 10)(t + 2) > 0$.`,
        solution: String.raw`$$v(t) = s'(t) = t^2 - 8t - 20 = (t - 10)(t + 2) > 0 \implies t \in (10, \infty) \quad \textbf{(Choice D)}$$`,
      },
      {
        partId: 'q5',
        label: 'MCQ #5',
        prompt: String.raw`Which statement is **true** about a particle with velocity $v(t) = t^2 - 5t + 6$?`,
        inputType: 'mcq',
        correctIndex: 4,
        options: [
          { label: 'A', text: String.raw`It is speeding up on interval $(0, 2)$.`, explanation: 'False: on (0, 2), v(t) > 0 and a(t) = 2t - 5 < 0 (slowing down).' },
          { label: 'B', text: String.raw`Its initial acceleration is positive.`, explanation: 'False: a(0) = -5 < 0.' },
          { label: 'C', text: String.raw`It changes direction at $t = 2.5$.`, explanation: 'False: v(t) = (t - 2)(t - 3) changes sign at t = 2 and t = 3 (t = 2.5 is where a(t) = 0).' },
          { label: 'D', text: String.raw`It is slowing down on interval $(2, 2.5)$.`, explanation: 'False: on (2, 2.5), both v(t) < 0 and a(t) < 0, so it is speeding up!' },
          { label: 'E', text: String.raw`It has positive acceleration on $(2.5, \infty)$.`, explanation: 'Correct! a(t) = v′(t) = 2t - 5 > 0 whenever t > 2.5!' },
        ],
        hint1: String.raw`Factor $v(t) = (t - 2)(t - 3)$ and compute $a(t) = v'(t) = 2t - 5$.`,
        hint2: String.raw`Check when $a(t) = 2t - 5 > 0$: $t > 2.5$.`,
        solution: String.raw`Since $v(t) = (t - 2)(t - 3)$ and $a(t) = v'(t) = 2t - 5$, $a(t) > 0$ on **$(2.5, \infty)$** ($\text{Choice E}$).`,
      },
    ],
  },
  {
    id: 'bultman-mcqs-6-10',
    module: 'bultman-review',
    section: 'Pages 1–4: Ms. Bultman No-Calculator MCQs (#1–#23)',
    badge: 'MCQs #6–#10 • Implicit Derivatives & Tangents',
    title: 'Ms. Bultman Multiple Choice #6–#10',
    calculator: 'non-calculator',
    stem: String.raw`Solve Multiple-Choice Questions **#6–#10** from Pages 2–3 of Ms. Bultman's Review.`,
    parts: [
      {
        partId: 'q6',
        label: 'MCQ #6',
        prompt: String.raw`What is the slope of the curve with implicit equation $3x^2 = y^3 + 2x$ when $x = 2$?`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          { label: 'A', text: String.raw`$0$`, explanation: '6x - 2 = 10 ≠ 0 at x = 2.' },
          { label: 'B', text: String.raw`$1$`, explanation: 'Forgot +2x differentiated to +2.' },
          { label: 'C', text: String.raw`$\dfrac{5}{6}$`, explanation: 'Correct! At x = 2, 12 = y³ + 4 ⇒ y = 2. Then 6x = 3y²y′ + 2 ⇒ 12 = 12y′ + 2 ⇒ y′ = 10/12 = 5/6!' },
          { label: 'D', text: String.raw`$\dfrac{3}{2}$`, explanation: 'Incorrect y value.' },
          { label: 'E', text: String.raw`Undefined`, explanation: '3y² = 12 ≠ 0.' },
        ],
        hint1: String.raw`Plug $x = 2$ into $3(2)^2 = y^3 + 2(2) \implies 12 = y^3 + 4 \implies y = 2$.`,
        hint2: String.raw`Differentiate: $6x = 3y^2 y' + 2 \implies 12 = 12y' + 2$.`,
        solution: String.raw`When $x = 2$, $12 = y^3 + 4 \implies y = 2$. Differentiating $3x^2 = y^3 + 2x$:
$$6x = 3y^2\frac{dy}{dx} + 2 \implies 12 = 12\frac{dy}{dx} + 2 \implies \frac{dy}{dx} = \frac{10}{12} = \frac{5}{6} \quad \textbf{(Choice C)}$$`,
      },
      {
        partId: 'q7',
        label: 'MCQ #7',
        prompt: String.raw`Determine $\dfrac{dy}{dx}$ for $\sin(y^2) = x$.`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          { label: 'A', text: String.raw`$\dfrac{x}{2y\cos(y^2)}$`, explanation: 'Derivative of x wrt x is 1, not x.' },
          { label: 'B', text: String.raw`$\dfrac{1}{2y\cos(y^2)}$`, explanation: 'Correct! cos(y²) · 2y(dy/dx) = 1 ⇒ dy/dx = 1 / [2y cos(y²)]!' },
          { label: 'C', text: String.raw`$\dfrac{-x}{2y\cos(y^2)}$`, explanation: 'Derivative of sin is +cos and derivative of x is 1.' },
          { label: 'D', text: String.raw`$-\dfrac{1}{y\cos(y^2)}$`, explanation: 'Wrong sign and missing factor of 2.' },
        ],
        hint1: String.raw`Apply the double Chain Rule on $\sin(y^2)$: outer $\cos(y^2)$, middle $2y$, inner $\frac{dy}{dx}$!`,
        hint2: String.raw`$\cos(y^2)\cdot 2y\frac{dy}{dx} = 1$.`,
        solution: String.raw`$$\cos(y^2)\cdot 2y\frac{dy}{dx} = 1 \implies \frac{dy}{dx} = \frac{1}{2y\cos(y^2)} \quad \textbf{(Choice B)}$$`,
      },
      {
        partId: 'q8',
        label: 'MCQ #8',
        prompt: String.raw`A circle has equation $x^2 + y^2 = 4$. Determine the slope at point $(\sqrt{3}, 1)$.`,
        inputType: 'mcq',
        correctIndex: 4,
        options: [
          { label: 'A', text: String.raw`$\dfrac{1}{\sqrt{3}}$`, explanation: 'Upside down and wrong sign.' },
          { label: 'B', text: String.raw`$-\dfrac{1}{\sqrt{3}}$`, explanation: '-y/x instead of -x/y.' },
          { label: 'C', text: String.raw`$2\sqrt{3}$`, explanation: 'Forgot to divide by -2y.' },
          { label: 'D', text: String.raw`$\sqrt{3}$`, explanation: 'Dropped negative sign: in Quadrant I, circle tangent slopes downward!' },
          { label: 'E', text: String.raw`$-\sqrt{3}$`, explanation: 'Correct! dy/dx = -x/y = -√3 / 1 = -√3!' },
        ],
        hint1: String.raw`Use $\frac{dy}{dx} = -\frac{x}{y}$ for $x^2 + y^2 = r^2$.`,
        hint2: String.raw`At $(\sqrt{3}, 1)$, $-\frac{\sqrt{3}}{1} = -\sqrt{3}$.`,
        solution: String.raw`$$2x + 2y\frac{dy}{dx} = 0 \implies \left.\frac{dy}{dx}\right|_{(\sqrt{3}, 1)} = -\frac{\sqrt{3}}{1} = -\sqrt{3} \quad \textbf{(Choice E)}$$`,
      },
      {
        partId: 'q9',
        label: 'MCQ #9',
        prompt: String.raw`For implicit curve $x + 2 = y^3$, $\dfrac{d^2y}{dx^2} =$`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          { label: 'A', text: String.raw`$\dfrac{2}{9y^5}$`, explanation: 'Dropped negative sign when differentiating y⁻².' },
          { label: 'B', text: String.raw`$-\dfrac{2}{9y^5}$`, explanation: 'Correct! y′ = 1/(3y²) = (1/3)y⁻² ⇒ y″ = -(2/3)y⁻³ · y′ = -(2/(3y³)) · (1/(3y²)) = -2/(9y⁵)!' },
          { label: 'C', text: String.raw`$\dfrac{1}{3y^2}$`, explanation: '1/(3y²) is the first derivative dy/dx.' },
          { label: 'D', text: String.raw`$\dfrac{2}{9y^3}$`, explanation: 'Forgot to multiply by dy/dx = 1/(3y²).' },
          { label: 'E', text: String.raw`$-\dfrac{2}{9y^3}$`, explanation: 'Forgot to multiply by y⁻² from dy/dx = 1/(3y²)!' },
        ],
        hint1: String.raw`First find $\frac{dy}{dx} = \frac{1}{3}y^{-2}$, then differentiate wrt $x$ using the Chain Rule!`,
        hint2: String.raw`$\frac{d^2y}{dx^2} = -\frac{2}{3}y^{-3}\cdot\frac{dy}{dx} = -\frac{2}{3y^3}\cdot\frac{1}{3y^2}$.`,
        solution: String.raw`$$1 = 3y^2\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{3}y^{-2} \implies \frac{d^2y}{dx^2} = -\frac{2}{3}y^{-3}\left(\frac{1}{3}y^{-2}\right) = -\frac{2}{9y^5} \quad \textbf{(Choice B)}$$`,
      },
      {
        partId: 'q10',
        label: 'MCQ #10',
        prompt: String.raw`The curve $\sin(y) = x^2 y$ has a horizontal tangent at which of these values of $y$?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          { label: 'A', text: String.raw`$y = \pi$ only`, explanation: 'Missed y = -π! Notice sin(y)/y is an EVEN function, so y = -π behaves identically to y = +π!' },
          { label: 'B', text: String.raw`$y = \pi$ and $y = -\pi$`, explanation: 'Correct! dy/dx = 2xy/(cos y - x²). At x = 0, sin y = 0 ⇒ y = ±π both lie on real branches (sin y / y ≥ 0 near ±π) with dy/dx = 0/(-1) = 0!' },
          { label: 'C', text: String.raw`$y = \frac{\pi}{2}$ only`, explanation: 'At y = π/2, x = ±√(2/π) ≠ 0, so numerator 2xy ≠ 0.' },
          { label: 'D', text: String.raw`$y = \frac{\pi}{2}$ and $y = -\frac{\pi}{2}$`, explanation: 'At y = -π/2, x² = sin(-π/2)/(-π/2) = 2/π ⇒ x ≠ 0, so 2xy ≠ 0.' },
        ],
        hint1: String.raw`Differentiate: $\cos(y)y' = 2xy + x^2 y' \implies \frac{dy}{dx} = \frac{2xy}{\cos y - x^2}$. Set numerator $2xy = 0$!`,
        hint2: String.raw`When $x = 0$, $\sin(y) = 0 \implies y = k\pi$. Check both $y = \pi$ and $y = -\pi$: $\cos(\pm\pi) - 0 = -1 \neq 0$ (and $\frac{\sin y}{y} > 0$ for $|y|$ slightly less than $\pi$, so real branches pass through $(0, \pm\pi)$)!`,
        solution: String.raw`$$\cos(y)\frac{dy}{dx} = 2xy + x^2\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{2xy}{\cos y - x^2}$$
Setting $2xy = 0$: for $x = 0$, $\sin(y) = 0$. At **both** $(0, \pi)$ and $(0, -\pi)$, $\cos(\pm\pi) - 0 = -1 \neq 0$ (and since $x^2 = \frac{\sin y}{y} \ge 0$ is even and non-negative for $0 < |y| \le \pi$, smooth branches pass through both $(0, \pi)$ and $(0, -\pi)$ with slope $0$, $\text{Choice B}$).`,
      },
    ],
  },
  {
    id: 'bultman-mcqs-11-17-20-21',
    module: 'bultman-review',
    section: 'Pages 1–4: Ms. Bultman No-Calculator MCQs (#1–#23)',
    badge: 'MCQs #11–#17, #20–#21 • Motion, Rates & Handout Typo Alerts',
    title: 'Ms. Bultman Multiple Choice #11–#17 & #20–#21',
    calculator: 'non-calculator',
    stem: String.raw`Complete the remaining analytical MCQs (**#11–#17, #20, #21**) from Pages 3–4 of Ms. Bultman's Review.`,
    watchOut: String.raw`**Two Paper-Handout Typo Alerts Solved for You!**
- **On #13:** Ms. Bultman's printed choices correspond to *$8\text{ ft}$ from the **wall*** ($x = 8 \implies \frac{dx}{dt} = \sqrt{5}\text{ ft/s}$, Choice D), whereas literal *$8\text{ ft}$ from the **ground*** ($y = 8$) gives $\frac{dx}{dt} = \frac{4}{\sqrt{5}} = \frac{4\sqrt{5}}{5}\text{ ft/s}$!
- **On #14:** Prompt asks for $\frac{d^2x}{dt^2} = \frac{2t}{x^2} - \frac{2t^4}{x^5}$, whereas printed Choice D had $x$ and $t$ swapped ($\frac{2x}{t^2} - \frac{2x^4}{t^5} = \frac{d^2t}{dx^2}$)! Below, you'll compute the **true** $\frac{d^2x}{dt^2}$!`,
    parts: [
      {
        partId: 'q11',
        label: 'MCQ #11: Speed Trap!',
        prompt: String.raw`What is the **speed** in $\text{m/sec}$ of a particle with **velocity** $v(t) = 4 - t - 2^t$ when $t = 3$?`,
        inputType: 'mcq',
        correctIndex: 3,
        options: [
          { label: 'A', text: String.raw`$-1 - 8\ln(2)\text{ m/sec}$`, explanation: 'Trap! Differentiated v(t) to get acceleration a(3) instead of reading speed |v(3)|!' },
          { label: 'B', text: String.raw`$1 + 8\ln(2)\text{ m/sec}$`, explanation: 'Trap! That is |a(3)|, not speed |v(3)|!' },
          { label: 'C', text: String.raw`$-7\text{ m/sec}$`, explanation: '-7 m/sec is velocity v(3), forgot absolute value for speed!' },
          { label: 'D', text: String.raw`$7\text{ m/sec}$`, explanation: 'Correct! v(t) is ALREADY velocity: v(3) = 4 - 3 - 2³ = -7 ⇒ speed = |-7| = 7 m/sec!' },
        ],
        hint1: String.raw`Don't differentiate! You are ALREADY given $v(t)$, and speed is simply $|v(3)|$!`,
        hint2: String.raw`$v(3) = 4 - 3 - 2^3 = 4 - 3 - 8 = -7 \implies |-7| = 7$.`,
        solution: String.raw`$$v(3) = 4 - 3 - 2^3 = -7\text{ m/sec} \implies \text{Speed} = |v(3)| = |-7| = 7\text{ m/sec} \quad \textbf{(Choice D)}$$`,
      },
      {
        partId: 'q12',
        label: 'MCQ #12: Average Velocity',
        prompt: String.raw`For a particle with position $s(t) = \ln(t^5)$, determine the average velocity on $[1, e]$.`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          { label: 'A', text: String.raw`$-5$`, explanation: 'Incorrect formula.' },
          { label: 'B', text: String.raw`$5$`, explanation: '5 is s(e) - s(1) (displacement), forgot to divide by e - 1!' },
          { label: 'C', text: String.raw`$\dfrac{5}{e - 1}$`, explanation: 'Correct! [ln(e⁵) - ln(1)] / (e - 1) = (5 - 0)/(e - 1) = 5/(e - 1)!' },
          { label: 'D', text: String.raw`$\dfrac{-5}{e - 1}$`, explanation: 'Sign error.' },
        ],
        hint1: String.raw`Note $\ln(t^5) = 5\ln t$, so $s(e) = 5$ and $s(1) = 0$.`,
        hint2: String.raw`Compute $\frac{s(e) - s(1)}{e - 1}$.`,
        solution: String.raw`$$\frac{s(e) - s(1)}{e - 1} = \frac{\ln(e^5) - \ln(1)}{e - 1} = \frac{5}{e - 1} \quad \textbf{(Choice C)}$$`,
      },
      {
        partId: 'q13',
        label: 'MCQ #13: 12-Foot Sliding Ladder (Exact Math Check!)',
        prompt: String.raw`A $12\text{-ft}$ ladder slides down a wall at $2\text{ ft/sec}$ ($\frac{dy}{dt} = -2$). Enter the **exact** base speed $\dfrac{dx}{dt}$ when the top is literally $y = 8\text{ ft}$ from the ground (` + '`4/sqrt(5)`' + ` or ` + '`1.789`' + `). *(Note: on the paper handout, Choice D ` + '`sqrt(5)`' + ` came from setting $x = 8$ instead of $y = 8$ — see Watch Out above!)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 4/sqrt(5) or 1.789',
        unitLabel: 'ft/sec',
        numericAnswer: 4 / Math.sqrt(5),
        tolerance: 0.005,
        acceptedStrings: ['4/sqrt(5)', '4*sqrt(5)/5', '(4*sqrt(5))/5'],
        hint1: String.raw`Use $x^2 + y^2 = 12^2 = 144$. When $y = 8$, $x = \sqrt{144 - 64} = \sqrt{80} = 4\sqrt{5}$.`,
        hint2: String.raw`$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0 \implies 4\sqrt{5}\frac{dx}{dt} + 8(-2) = 0$.`,
        solution: String.raw`- **Literal $y = 8\text{ ft}$ (from ground):** $x = \sqrt{144 - 64} = 4\sqrt{5}\text{ ft}$, so:
  $$4\sqrt{5}\frac{dx}{dt} + 8(-2) = 0 \implies \frac{dx}{dt} = \frac{16}{4\sqrt{5}} = \frac{4}{\sqrt{5}} = \frac{4\sqrt{5}}{5} \approx 1.789\text{ ft/sec}$$
- *(Handout Choice D note: if instead $x = 8\text{ ft}$ from the wall, $y = 4\sqrt{5}$ and $8\frac{dx}{dt} + 4\sqrt{5}(-2) = 0 \implies \frac{dx}{dt} = \sqrt{5}\text{ ft/sec}$.)*`,
      },
      {
        partId: 'q14',
        label: 'MCQ #14: True d²x/dt² for 7t³ − 7x³ = 10',
        prompt: String.raw`If $7t^3 - 7x^3 = 10$, determine the true $\dfrac{d^2x}{dt^2}$ in terms of $t$ and $x$ (e.g. ` + '`2*t/x^2 - 2*t^4/x^5`' + `).`,
        inputType: 'algebraic',
        placeholder: 'e.g. 2*t/x^2 - 2*t^4/x^5',
        algebraicExpr: '(2*t)/(x^2) - (2*(t^4))/(x^5)',
        variables: ['t', 'x'],
        acceptedStrings: ['2t/x^2-2t^4/x^5', '(2tx^3-2t^4)/x^5', '-20t/(7x^5)', '-20*t/(7*x^5)'],
        hint1: String.raw`Divide by $7$ ($t^3 - x^3 = \frac{10}{7}$) and differentiate **with respect to $t$**: $3t^2 - 3x^2\frac{dx}{dt} = 0 \implies \frac{dx}{dt} = \frac{t^2}{x^2}$.`,
        hint2: String.raw`Apply the Quotient Rule wrt $t$: $\frac{d^2x}{dt^2} = \frac{2t\cdot x^2 - t^2 \cdot 2x\frac{dx}{dt}}{x^4}$, then substitute $\frac{dx}{dt} = \frac{t^2}{x^2}$!`,
        solution: String.raw`$$3t^2 - 3x^2\frac{dx}{dt} = 0 \implies \frac{dx}{dt} = \frac{t^2}{x^2}$$
Differentiate again with respect to $t$:
$$\frac{d^2x}{dt^2} = \frac{2tx^2 - t^2\left(2x\cdot\frac{t^2}{x^2}\right)}{x^4} = \frac{2t}{x^2} - \frac{2t^4}{x^5} \quad \left(\text{which also simplifies on the curve to } -\frac{20t}{7x^5}\right)$$
*(Paper handout Choice D wrote $\frac{2x}{t^2} - \frac{2x^4}{t^5}$, which accidentally swapped $x$ and $t$ to compute $\frac{d^2t}{dx^2}$!)*`,
      },
      {
        partId: 'q15',
        label: 'MCQ #15: Overflowing Rectangular Pool',
        prompt: String.raw`A swimming pool measures $20\text{ ft}$ by $30\text{ ft}$ with a depth of $5\text{ ft}$. It is filled at a constant rate in $\text{ft}^3/\text{min}$. After $30\text{ minutes}$, the pool starts to overflow. At what rate is the height of the water increasing at this time?`,
        inputType: 'mcq',
        correctIndex: 4,
        options: [
          { label: 'A', text: String.raw`$100\text{ ft/min}$`, explanation: '100 ft³/min is the VOLUME rate dV/dt = 3000/30, not the height rate dh/dt!' },
          { label: 'B', text: String.raw`$6\text{ ft/min}$`, explanation: '30 min / 5 ft = 6 min/ft (upside down!).' },
          { label: 'C', text: String.raw`$2\text{ ft/min}$`, explanation: 'Incorrect.' },
          { label: 'D', text: String.raw`$0.5\text{ ft/min}$`, explanation: 'Incorrect.' },
          { label: 'E', text: String.raw`$\dfrac{1}{6}\text{ ft/min}$`, explanation: 'Correct! V = 600h and total V = 3000 ft³ in 30 min ⇒ dV/dt = 100 ft³/min ⇒ dh/dt = 100/600 = 1/6 ft/min!' },
        ],
        hint1: String.raw`Total volume $= 20 \times 30 \times 5 = 3000\text{ ft}^3$ filled in $30\text{ min} \implies \frac{dV}{dt} = 100\text{ ft}^3/\text{min}$, and $V = 20 \cdot 30 \cdot h = 600h$!`,
        hint2: String.raw`$100 = 600\frac{dh}{dt} \implies \frac{dh}{dt} = \frac{1}{6}\text{ ft/min}$ (or directly $\frac{5\text{ ft}}{30\text{ min}} = \frac{1}{6}\text{ ft/min}$ since cross-section is uniform!).`,
        solution: String.raw`$$V = 20(30)h = 600h, \qquad \frac{dV}{dt} = \frac{3000\text{ ft}^3}{30\text{ min}} = 100\text{ ft}^3/\text{min}$$
$$100 = 600\frac{dh}{dt} \implies \frac{dh}{dt} = \frac{1}{6}\text{ ft/min} \quad \textbf{(Choice E)}$$`,
      },
      {
        partId: 'q16',
        label: 'MCQ #16: Tangent Slope at (1, −1)',
        prompt: String.raw`Determine the slope of the line tangent to the curve $xy + x^2y^2 + 4x = 4$ at $(1, -1)$.`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          { label: 'A', text: String.raw`$5$`, explanation: 'Correct! (y + xy′) + (2xy² + 2x²yy′) + 4 = 0 ⇒ at (1, -1): (-1 + y′) + (2 - 2y′) + 4 = 0 ⇒ 5 - y′ = 0 ⇒ y′ = 5!' },
          { label: 'B', text: String.raw`$-5$`, explanation: 'Sign error isolating -y′ = -5.' },
          { label: 'C', text: String.raw`$0$`, explanation: 'Incorrect.' },
          { label: 'D', text: String.raw`$-7$`, explanation: 'Sign error on y² = (-1)² = +1.' },
        ],
        hint1: String.raw`Differentiate $(xy) + (x^2y^2) + 4x = 4$ using the Product Rule twice, then plug in $(1, -1)$!`,
        hint2: String.raw`$(-1 + y') + (2(1)(1) + 2(1)(-1)y') + 4 = 0 \implies 5 - y' = 0$.`,
        solution: String.raw`$$(y + xy') + (2xy^2 + 2x^2yy') + 4 = 0$$
At $(1, -1)$: $(-1 + y') + (2 - 2y') + 4 = 0 \implies 5 - y' = 0 \implies y' = 5 \quad \textbf{(Choice A)}$.`,
      },
      {
        partId: 'q17',
        label: 'MCQ #17: Tangent Line to 5x² − y³ = 47 at x = 2',
        prompt: String.raw`The equation of the line tangent to curve $5x^2 - y^3 = 47$ when $x = 2$ is:`,
        inputType: 'mcq',
        correctIndex: 3,
        options: [
          { label: 'A', text: String.raw`$y = -x - 1$`, explanation: 'Incorrect slope.' },
          { label: 'B', text: String.raw`$y = -x + 3$`, explanation: 'Incorrect point and slope.' },
          { label: 'C', text: String.raw`$y - 3 = \dfrac{20}{27}(x - 2)$`, explanation: 'Sign error on y: 20 - y³ = 47 ⇒ y³ = -27 ⇒ y = -3, so y - (-3) = y + 3!' },
          { label: 'D', text: String.raw`$y + 3 = \dfrac{20}{27}(x - 2)$`, explanation: 'Correct! At x = 2, y = -3; 10x - 3y²y′ = 0 ⇒ 20 - 27y′ = 0 ⇒ y′ = 20/27 ⇒ y + 3 = (20/27)(x - 2)!' },
        ],
        hint1: String.raw`Find $y$ at $x = 2$: $5(4) - y^3 = 47 \implies y^3 = -27 \implies y = -3$.`,
        hint2: String.raw`$10x - 3y^2 y' = 0 \implies 20 - 27y' = 0 \implies y' = \frac{20}{27}$ at $(2, -3)$.`,
        solution: String.raw`At $x = 2$: $20 - y^3 = 47 \implies y = -3$. Slope: $10(2) - 3(-3)^2 y' = 0 \implies y' = \frac{20}{27}$.
Point-slope form at $(2, -3)$: **$y + 3 = \frac{20}{27}(x - 2)$** ($\text{Choice D}$).`,
      },
      {
        partId: 'q20',
        label: 'MCQ #20: Expanding Square With x = t²',
        prompt: String.raw`A square's side length $x$ changes every second as modeled by $x = t^2$ ($t \ge 0$). At what rate is the square's **area** changing with respect to time when $x = 4\text{ in}$?`,
        inputType: 'mcq',
        correctIndex: 4,
        options: [
          { label: 'A', text: String.raw`$2$`, explanation: '2 is the time t when x = 4.' },
          { label: 'B', text: String.raw`$4$`, explanation: '4 is dx/dt = 2t at t = 2.' },
          { label: 'C', text: String.raw`$8$`, explanation: '2x = 8 forgot to multiply by dx/dt = 4!' },
          { label: 'D', text: String.raw`$16$`, explanation: '16 is the static area A = 4².' },
          { label: 'E', text: String.raw`$32$`, explanation: 'Correct! When x = 4, t² = 4 ⇒ t = 2 ⇒ dx/dt = 2t = 4; then dA/dt = 2x(dx/dt) = 2(4)(4) = 32 in²/sec!' },
        ],
        hint1: String.raw`Either use $A = x^2 \implies \frac{dA}{dt} = 2x\frac{dx}{dt}$ (finding $t = 2$ when $x = 4$), OR write $A = (t^2)^2 = t^4 \implies \frac{dA}{dt} = 4t^3$ at $t = 2$!`,
        hint2: String.raw`At $t = 2$, $4(2)^3 = 32$.`,
        solution: String.raw`When $x = t^2 = 4$ ($t \ge 0$), $t = 2\text{ sec}$ and $\frac{dx}{dt} = 2t = 4\text{ in/sec}$:
$$\frac{dA}{dt} = 2x\frac{dx}{dt} = 2(4)(4) = 32\text{ in}^2/\text{sec} \quad \textbf{(Choice E)}$$`,
      },
      {
        partId: 'q21',
        label: 'MCQ #21: Rising Balloon & Running Dog Angle Rate!',
        prompt: String.raw`A balloon starts rising from the ground at $4.5\text{ ft/sec}$. A dog $40\text{ ft}$ away runs **towards** the balloon at $14\text{ ft/sec}$. At what rate is the elevation angle $\theta$ between the dog and the balloon changing when $t = 2$?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          { label: 'A', text: String.raw`Decreasing by $\dfrac{36}{45}\text{ rad/sec}$`, explanation: 'Direction error! As the balloon rises AND the dog runs closer, the angle of elevation gets STEEPER (increasing)!' },
          { label: 'B', text: String.raw`Increasing by $\dfrac{36}{45}\text{ rad/sec}$`, explanation: 'Correct! At t = 2: h = 9, x = 40 - 28 = 12 (z = 15). tan θ = h/x ⇒ (25/16)dθ/dt = [4.5(12) - 9(-14)]/144 = 180/144 = 5/4 ⇒ dθ/dt = +4/5 = +36/45 rad/sec!' },
          { label: 'C', text: String.raw`Decreasing by $\dfrac{9}{32}\text{ rad/sec}$`, explanation: 'Used dx/dt = +14 instead of -14 (dog runs TOWARDS balloon, so x decreases!).' },
          { label: 'D', text: String.raw`Increasing by $\dfrac{9}{32}\text{ rad/sec}$`, explanation: 'Used dx/dt = +14 instead of -14 in Quotient Rule.' },
          { label: 'E', text: String.raw`Decreasing by $\dfrac{36}{7}\text{ rad/sec}$`, explanation: 'Incorrect.' },
        ],
        hint1: String.raw`At $t = 2$: balloon height $h = 4.5(2) = 9\text{ ft}$ ($\frac{dh}{dt} = +4.5$), and dog distance $x = 40 - 14(2) = 12\text{ ft}$ ($\frac{dx}{dt} = -14$)!`,
        hint2: String.raw`Differentiate $\tan\theta = \frac{h}{x}$ using the **Quotient Rule**: $\sec^2\theta\frac{d\theta}{dt} = \frac{x\frac{dh}{dt} - h\frac{dx}{dt}}{x^2}$, with $9\text{–}12\text{–}15$ triangle ($\cos\theta = \frac{4}{5} \implies \sec^2\theta = \frac{25}{16}$)!`,
        solution: String.raw`At $t = 2\text{ s}$: $h = 9\text{ ft}$, $\frac{dh}{dt} = +4.5\text{ ft/s}$, $x = 40 - 28 = 12\text{ ft}$, $\frac{dx}{dt} = -14\text{ ft/s}$, and hypotenuse $z = 15\text{ ft}$ ($\sec^2\theta = \frac{25}{16}$).
Differentiate $\tan\theta = \frac{h}{x}$ via Quotient Rule:
$$\sec^2\theta\frac{d\theta}{dt} = \frac{x\frac{dh}{dt} - h\frac{dx}{dt}}{x^2} \implies \frac{25}{16}\frac{d\theta}{dt} = \frac{12(4.5) - 9(-14)}{144} = \frac{54 + 126}{144} = \frac{180}{144} = \frac{5}{4}$$
$$\frac{d\theta}{dt} = \frac{5}{4}\cdot\frac{16}{25} = +\frac{4}{5} = +\frac{36}{45}\text{ rad/sec (Increasing)} \quad \textbf{(Choice B)}$$`,
      },
    ],
  },
  {
    id: 'bultman-mcqs-18-19-22-23',
    module: 'bultman-review',
    section: 'Pages 1–4: Ms. Bultman No-Calculator MCQs (#1–#23)',
    badge: 'MCQs #18–#19 & #22–#23 • Graphical Motion',
    title: 'Particle A Velocity Graph (#18–#19) & Eastlake Student Position Graph (#22–#23)',
    calculator: 'non-calculator',
    visual: 'bultman-particle-a-graph',
    stem: String.raw`Solve the two graphical MCQ pairs from Pages 2–3 of Ms. Bultman's Review:
- **Questions #18–#19** use **Particle A's velocity graph $v(t)$** shown directly above on $[0, 6\pi]$ (note $(3\pi, 0)$ to $(\frac{9\pi}{2}, -1.5)$ is a straight line segment!).
- **Questions #22–#23** use an **Eastlake student's position graph $s(t)$** with piecewise-linear vertices $(0, -3) \to (2, 3) \to (4, -3) \to (8, -3) \to (10, 0)$.`,
    watchOut: String.raw`In #18–#19 the graph is **velocity $v(t)$**, whereas in #22–#23 the graph is **position $s(t)$**! Always check the label on the graph before answering!`,
    parts: [
      {
        partId: 'q18',
        label: 'MCQ #18 (Particle A Velocity Graph)',
        prompt: String.raw`Determine the **average acceleration** of Particle A on the interval $\left[\pi, \dfrac{9\pi}{2}\right]$.`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          { label: 'A', text: String.raw`$-1$`, explanation: 'Forgot π in the denominator.' },
          { label: 'B', text: String.raw`$-\dfrac{3}{2\pi}$`, explanation: 'Divided by π instead of 9π/2 - π = 7π/2.' },
          { label: 'C', text: String.raw`$-\dfrac{3}{7\pi}$`, explanation: 'Correct! [v(9π/2) - v(π)] / (9π/2 - π) = (-3/2 - 0) / (7π/2) = -3/(7π)!' },
          { label: 'D', text: String.raw`$-\dfrac{6}{7\pi}$`, explanation: 'Read v(9π/2) as -3 instead of -1.5 (each vertical grid square = 0.5!).' },
        ],
        hint1: String.raw`Read $v(\pi) = 0$ and $v\left(\frac{9\pi}{2}\right) = -1.5 = -\frac{3}{2}$ carefully from the grid (2 vertical squares $= 1$ unit!).`,
        hint2: String.raw`Compute $\frac{-3/2 - 0}{9\pi/2 - \pi} = \frac{-3/2}{7\pi/2}$.`,
        solution: String.raw`$$\text{Average Acceleration} = \frac{v(9\pi/2) - v(\pi)}{\frac{9\pi}{2} - \pi} = \frac{-\frac{3}{2} - 0}{\frac{7\pi}{2}} = -\frac{3}{7\pi} \quad \textbf{(Choice C)}$$`,
      },
      {
        partId: 'q19',
        label: 'MCQ #19 (Particle A Velocity Graph)',
        prompt: String.raw`Which statement is **false** about Particle A?`,
        inputType: 'mcq',
        correctIndex: 3,
        options: [
          { label: 'A', text: String.raw`It changes direction when $t = \pi$.`, explanation: 'True: v(t) crosses from + to - at t = π.' },
          { label: 'B', text: String.raw`It is speeding up on interval $\left(\pi, \frac{3\pi}{2}\right)$.`, explanation: 'True: on (π, 3π/2), both v(t) < 0 and v′(t) < 0 (same sign).' },
          { label: 'C', text: String.raw`It has constant acceleration on $\left(3\pi, \frac{9\pi}{2}\right)$.`, explanation: 'True: on (3π, 9π/2), v(t) is a straight line segment with constant slope!' },
          { label: 'D', text: String.raw`It is slowing down on interval $\left(\frac{5\pi}{2}, \frac{9\pi}{2}\right)$.`, explanation: 'FALSE (Correct choice)! It slows down on (5π/2, 3π), hits v = 0 at t = 3π, and then SPEEDS UP on (3π, 9π/2) because v < 0 and v′ < 0!' },
        ],
        hint1: String.raw`Check what happens at $t = 3\pi$ inside the interval $\left(\frac{5\pi}{2}, \frac{9\pi}{2}\right)$!`,
        hint2: String.raw`On $\left(3\pi, \frac{9\pi}{2}\right)$, $v(t) < 0$ AND $v'(t) < 0$ — is Particle A slowing down or speeding up there?`,
        solution: String.raw`On $\left(\frac{5\pi}{2}, 3\pi\right)$, $v > 0$ and $v' < 0$ (slowing down), **but** on $\left(3\pi, \frac{9\pi}{2}\right)$, $v < 0$ and $v' < 0$ (**speeding up**!). Thus **Choice D** is **false**.`,
      },
      {
        partId: 'q22-23',
        label: 'MCQs #22 & #23: Eastlake Student Position Graph s(t)',
        prompt: String.raw`An Eastlake student leaves Eastlake at $t = 0$ on foot with piecewise-linear **position** $s(t)$ having vertices $(0, -3) \to (2, 3) \to (4, -3) \to (8, -3) \to (10, 0)$. **(22)** What is the student's velocity at $t = 5$, and **(23)** when does the student change direction *without stopping for more than a moment*?`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`**#22:** $0\text{ mph}$ (horizontal segment on $s(t)$ for $4 < t < 8$);\; **#23:** $t = 2\text{ only}$ (slope $s'(t)$ flips from $+3$ to $-3$ instantaneously at $t = 2$, whereas on $[4, 8]$ the student stops for $4$ units of time!).`,
            explanation: String.raw`Correct! #22 = Choice A (0 mph) and #23 = Choice E (t = 2 only)!`,
          },
          {
            label: 'B',
            text: String.raw`**#22:** $-3\text{ mph}$;\; **#23:** $t = 1, t = 3, t = 10$.`,
            explanation: String.raw`Read s(t) as if it were v(t)! -3 is position s(5), and t = 1, 3, 10 are where s(t) = 0 (passing the house)!`,
          },
          {
            label: 'C',
            text: String.raw`**#22:** $0\text{ mph}$;\; **#23:** $t = 2, t = 4, t = 8$.`,
            explanation: String.raw`Between t = 4 and t = 8, s(t) = -3 is constant (stopped for 4 units of time), violating "without stopping for more than a moment"!`,
          },
          {
            label: 'D',
            text: String.raw`**#22:** $3\text{ mph}$;\; **#23:** $t = 4, t = 8$ only.`,
            explanation: String.raw`Incorrect.`,
          },
        ],
        hint1: String.raw`Velocity is the **slope** $s'(t)$ of the position graph $s(t)$!`,
        hint2: String.raw`On $(4, 8)$, $s(t) = -3$ has slope $0$. At $t = 2$, slope switches immediately from $+3$ to $-3$!`,
        solution: String.raw`- **#22:** On $(4, 8)$, $s(t) = -3$ is constant, so $v(5) = s'(5) = \mathbf{0\text{ mph}}$ (Choice A).
- **#23:** At **$t = 2$**, velocity switches instantaneously from $+3$ on $(0, 2)$ to $-3$ on $(2, 4)$ without stopping for an interval (**$t = 2$ only**, Choice E).`,
      },
    ],
  },

  // =========================================================================
  // SECTION 3: Pages 4–5 — No-Calculator Free Response (#1–#6)
  // =========================================================================
  {
    id: 'bultman-frq-1',
    module: 'bultman-review',
    section: 'Pages 4–5: Ms. Bultman No-Calculator FRQs (#1–#6)',
    badge: 'No-Calc FRQ #1 • Cubic Motion (a–e)',
    title: 'Particle Motion s(t) = (4/3)t³ − 11t² + 10t + 5 (t ≥ 0)',
    calculator: 'non-calculator',
    stem: String.raw`A particle moves along the $x$-axis starting at $t = 0$. Its position $t$ seconds after $t = 0$ is given by the function
$$s(t) = \frac{4t^3}{3} - 11t^2 + 10t + 5$$
*(Note: printed handout had variable typo $x$ inside $s(t)$ — it represents $t$!)*`,
    inMockTest: true,
    parts: [
      {
        partId: 'a-d-e',
        label: 'Parts (a), (d), & (e): Numeric Values',
        prompt: String.raw`Compute **(a)** acceleration $a(2)$ — enter $a(2)$ in the box below *(and verify **(d)** displacement on $[0, 3]$ is $s(3) - s(0) = -33$ and **(e)** speed at $t = 1$ is $|v(1)| = 8$!)*:`,
        inputType: 'numeric',
        placeholder: 'Enter a(2), e.g. -6',
        unitLabel: 'units/sec²',
        numericAnswer: -6,
        tolerance: 0.001,
        hint1: String.raw`Find $v(t) = 4t^2 - 22t + 10$ and $a(t) = 8t - 22$, then plug in $t = 2$.`,
        hint2: String.raw`$a(2) = 8(2) - 22 = -6$.`,
        solution: String.raw`- **$v(t) = 4t^2 - 22t + 10 = 2(2t - 1)(t - 5)$** and **$a(t) = 8t - 22$**.
- **(a) Acceleration at $t = 2$:** $a(2) = 8(2) - 22 = \mathbf{-6\text{ units/sec}^2}$.
- **(d) Displacement at $t = 3$:** $s(3) - s(0) = \left(\frac{4(27)}{3} - 99 + 30 + 5\right) - 5 = -28 - 5 = \mathbf{-33\text{ units}}$.
- **(e) Speed at $t = 1$:** $|v(1)| = |4 - 22 + 10| = |-8| = \mathbf{8\text{ units/sec}}$.`,
      },
      {
        partId: 'b-c',
        label: 'Parts (b) & (c): Speeding Up & Moving Left Intervals',
        prompt: String.raw`On what open interval(s) for $t > 0$ is the particle **(b) speeding up** and **(c) moving to the left**?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`(b) Speeding up on $\left(\frac{11}{4}, \infty\right)$; (c) Moving left on $\left(\frac{1}{2}, 5\right)$.`,
            explanation: String.raw`On (11/4, 5), v(t) < 0 while a(t) > 0 (slowing down!), and missed (1/2, 11/4) where both v < 0 and a < 0!`,
          },
          {
            label: 'B',
            text: String.raw`(b) Speeding up on $\left(\dfrac{1}{2}, \dfrac{11}{4}\right) \cup (5, \infty)$ ($v$ and $a$ same sign); (c) Moving left on $\left(\dfrac{1}{2}, 5\right)$ ($v(t) < 0$).`,
            explanation: String.raw`Correct! v(t) = 2(2t - 1)(t - 5) has zeros at 1/2 and 5, and a(t) = 8t - 22 has zero at 11/4 = 2.75!`,
          },
          {
            label: 'C',
            text: String.raw`(b) Speeding up on $\left(0, \dfrac{1}{2}\right) \cup (5, \infty)$; (c) Moving left on $(0, 5)$.`,
            explanation: String.raw`On (0, 1/2), v(t) > 0 (moving right!) while a(t) < 0 (slowing down!).`,
          },
          {
            label: 'D',
            text: String.raw`(b) Speeding up on $(5, \infty)$ only; (c) Moving left on $\left(\dfrac{1}{2}, 5\right)$.`,
            explanation: String.raw`Missed (1/2, 11/4) where both v(t) < 0 and a(t) < 0 (same negative sign ⇒ speeding up!).`,
          },
        ],
        hint1: String.raw`Factor $v(t) = 2(2t - 1)(t - 5)$ (zeros at $t = \frac{1}{2}, 5$) and solve $a(t) = 8t - 22 = 0 \implies t = \frac{11}{4} = 2.75$.`,
        hint2: String.raw`Test intervals $\left(0, \frac{1}{2}\right)$, $\left(\frac{1}{2}, \frac{11}{4}\right)$, $\left(\frac{11}{4}, 5\right)$, and $(5, \infty)$.`,
        solution: String.raw`- **(c) Moving left ($v(t) < 0$):** $2(2t - 1)(t - 5) < 0 \implies \mathbf{\left(\frac{1}{2}, 5\right)}$.
- **(b) Speeding up ($v(t)$ and $a(t)$ same sign):**
  - On $\left(\frac{1}{2}, \frac{11}{4}\right)$: $v(t) < 0$ and $a(t) < 0$
  - On $(5, \infty)$: $v(t) > 0$ and $a(t) > 0$
  Answer: **$\left(\frac{1}{2}, \frac{11}{4}\right) \cup (5, \infty)$**.`,
      },
    ],
  },
  {
    id: 'bultman-frq-2-3-4',
    module: 'bultman-review',
    section: 'Pages 4–5: Ms. Bultman No-Calculator FRQs (#1–#6)',
    badge: 'No-Calc FRQs #2, #3 & #4 • Implicit & Triangle Rates',
    title: 'Ellipse Slope 1.5 (#2), Rising Isosceles Triangle (#3), & Implicit 2nd Deriv (#4)',
    calculator: 'non-calculator',
    stem: String.raw`Solve No-Calculator FRQs **#2**, **#3**, and **#4** from Page 4 of Ms. Bultman's Review.`,
    parts: [
      {
        partId: 'frq2a',
        label: 'FRQ #2(a): Tangent Line at (4, 1)',
        prompt: String.raw`An implicit curve has equation $x^2 - 6x + 4y^2 - 20y = -24$. Write the equation of the line tangent to the curve at $(4, 1)$.`,
        inputType: 'equation',
        placeholder: 'e.g. y - 1 = (1/6)(x - 4)',
        equationConfig: { type: 'line', slope: 1 / 6, point: [4, 1] },
        acceptedStrings: ['y-1=1/6(x-4)', 'y-1=(1/6)(x-4)'],
        hint1: String.raw`Differentiate implicitly: $2x - 6 + (8y - 20)\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = \frac{6 - 2x}{8y - 20} = \frac{3 - x}{4y - 10}$.`,
        hint2: String.raw`At $(4, 1)$: $m = \frac{3 - 4}{4 - 10} = \frac{-1}{-6} = \frac{1}{6}$.`,
        solution: String.raw`$$\frac{dy}{dx} = \frac{3 - x}{4y - 10} \implies \left.\frac{dy}{dx}\right|_{(4,1)} = \frac{-1}{-6} = \frac{1}{6} \implies y - 1 = \frac{1}{6}(x - 4)$$`,
      },
      {
        partId: 'frq2b',
        label: 'FRQ #2(b): Points Where Slope Is 1.5',
        prompt: String.raw`Determine at what coordinate point(s) the curve $x^2 - 6x + 4y^2 - 20y = -24$ has a slope of $1.5 = \frac{3}{2}$.`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`$(0, 3)$ and $(6, 2)$`,
            explanation: String.raw`Correct! (3 - x)/(4y - 10) = 3/2 ⇒ x = 18 - 6y; substituting into the curve gives 40y² - 200y + 240 = 0 ⇒ (y - 3)(y - 2) = 0 ⇒ (0, 3) and (6, 2)!`,
          },
          {
            label: 'B',
            text: String.raw`$(3, 0)$ and $(2, 6)$`,
            explanation: String.raw`Swapped x and y coordinates!`,
          },
          {
            label: 'C',
            text: String.raw`$(0, 3)$ only`,
            explanation: String.raw`Missed the second intersection point (6, 2) on the opposite side of the ellipse!`,
          },
          {
            label: 'D',
            text: String.raw`$(3, 3)$ and $(3, 2)$`,
            explanation: String.raw`At x = 3, numerator 3 - x = 0 so slope is 0, not 1.5.`,
          },
        ],
        hint1: String.raw`Set $\frac{3 - x}{4y - 10} = \frac{3}{2} \implies 6 - 2x = 12y - 30 \implies x = 18 - 6y$, and substitute into $x^2 - 6x + 4y^2 - 20y = -24$!`,
        hint2: String.raw`Complete-the-square shortcut: $(x - 3)^2 + 4(y - \frac{5}{2})^2 = 10$ with $x - 3 = -6(y - \frac{5}{2}) \implies 40(y - \frac{5}{2})^2 = 10 \implies y - \frac{5}{2} = \pm\frac{1}{2} \implies y = 3, 2$!`,
        solution: String.raw`Set $\frac{3 - x}{4y - 10} = \frac{3}{2} \implies 3 - x = 6y - 15 \implies x = 18 - 6y$.
Substitute into $(x - 3)^2 + 4\left(y - \frac{5}{2}\right)^2 = 10$:
$$(-6y + 15)^2 + 4\left(y - \frac{5}{2}\right)^2 = 10 \implies 40\left(y - \frac{5}{2}\right)^2 = 10 \implies y - \frac{5}{2} = \pm\frac{1}{2}$$
- $y = 3 \implies x = 18 - 18 = 0 \implies \mathbf{(0, 3)}$
- $y = 2 \implies x = 18 - 12 = 6 \implies \mathbf{(6, 2)}$`,
      },
      {
        partId: 'frq3',
        label: 'FRQ #3: Rising Isosceles Triangle Perimeter Rate',
        prompt: String.raw`The top vertex of an **isosceles triangle** with a fixed base of $6\text{ inches}$ is pulled upwards at a constant rate of $\frac{dh}{dt} = 2\text{ in/sec}$. At what rate is the **perimeter** of the triangle changing when the height is $h = 8\text{ inches}$?`,
        inputType: 'numeric',
        placeholder: 'e.g. 32/sqrt(73) or 3.745',
        unitLabel: 'in/sec',
        numericAnswer: 32 / Math.sqrt(73),
        tolerance: 0.005,
        acceptedStrings: ['32/sqrt(73)', '(32*sqrt(73))/73'],
        hint1: String.raw`Drop the altitude $h$ to bisect the $6\text{-inch}$ base into two $3\text{-inch}$ halves! Each equal slant side has length $s = \sqrt{h^2 + 3^2} = \sqrt{h^2 + 9}$, and perimeter $P = 6 + 2s$!`,
        hint2: String.raw`$P = 6 + 2(h^2 + 9)^{1/2} \implies \frac{dP}{dt} = \frac{2h}{\sqrt{h^2 + 9}}\frac{dh}{dt}$. Plug in $h = 8$ and $\frac{dh}{dt} = 2$!`,
        solution: String.raw`Splitting the isosceles triangle down the middle gives two right triangles with base $3\text{ in}$ and height $h$:
$$P = 6 + 2\sqrt{h^2 + 3^2} = 6 + 2\sqrt{h^2 + 9}$$
Differentiate with respect to $t$:
$$\frac{dP}{dt} = \frac{2h}{\sqrt{h^2 + 9}}\frac{dh}{dt}$$
At $h = 8\text{ in}$ and $\frac{dh}{dt} = 2\text{ in/sec}$:
$$\frac{dP}{dt} = \frac{2(8)}{\sqrt{64 + 9}}(2) = \frac{32}{\sqrt{73}} \approx 3.745\text{ in/sec}$$`,
      },
      {
        partId: 'frq4',
        label: 'FRQ #4: dy/dx = ln(x) / (4y²) Second Derivative',
        prompt: String.raw`Given $\dfrac{dy}{dx} = \dfrac{\ln(x)}{4y^2}$: **(a)** note vertical tangents occur at points on the curve where $y = 0$ (with $x > 0, x \neq 1$), and **(b)** enter $\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$:`,
        inputType: 'algebraic',
        placeholder: 'e.g. (2*y^3 - x*(ln(x))^2) / (8*x*y^5)',
        algebraicExpr: '(2*(y^3) - x*((ln(x))^2)) / (8*x*(y^5))',
        variables: ['x', 'y'],
        hint1: String.raw`Apply the Quotient Rule to $\frac{\ln x}{4y^2}$, remembering $\frac{d}{dx}[4y^2] = 8y\frac{dy}{dx}$!`,
        hint2: String.raw`$\frac{d^2y}{dx^2} = \frac{\frac{1}{x}(4y^2) - \ln(x)\left(8y\cdot\frac{\ln x}{4y^2}\right)}{16y^4} = \frac{1}{4xy^2} - \frac{(\ln x)^2}{8y^5}$.`,
        solution: String.raw`- **(a) Vertical Tangents:** Denominator $4y^2 = 0 \implies y = 0$, provided numerator $\ln(x) \neq 0$ (so $x > 0$ and $x \neq 1$).
- **(b) Second Derivative:**
  $$\frac{d^2y}{dx^2} = \frac{\frac{1}{x}(4y^2) - \ln(x)\cdot 8y\frac{dy}{dx}}{16y^4} = \frac{\frac{4y^2}{x} - 8y\ln(x)\left(\frac{\ln x}{4y^2}\right)}{16y^4} = \frac{1}{4xy^2} - \frac{(\ln x)^2}{8y^5} = \frac{2y^3 - x(\ln x)^2}{8xy^5}$$`,
      },
    ],
  },
  {
    id: 'bultman-frq-5-6',
    module: 'bultman-review',
    section: 'Pages 4–5: Ms. Bultman No-Calculator FRQs (#1–#6)',
    badge: 'No-Calc FRQs #5 & #6 • Sprinter Graph & Cubic Runner',
    title: 'Sprinter Velocity Graph (#5) & Field Runner v(t) = t(t − 5)(t − 11) (#6)',
    calculator: 'non-calculator',
    visual: 'bultman-sprinter-velocity-graph',
    stem: String.raw`Solve No-Calculator FRQs **#5** (using the sprinter velocity graph above on $0 \le t \le 9$) and **#6** (runner with velocity $v(t) = t(t - 5)(t - 11)\text{ ft/sec}$, where positive velocity means north).`,
    parts: [
      {
        partId: 'frq5-abc',
        label: 'FRQ #5(a)–(c): Sprinter Graph Intervals & Direction Changes',
        prompt: String.raw`From the sprinter velocity graph $v(t)$ on $0 \le t \le 9$, select the complete answer for **(a)** constant velocity, **(b)** positive acceleration, and **(c)** direction changes:`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`(a) $(0, 1) \cup (7, 9)$ only; (b) $(0, 2) \cup (6, 9)$; (c) $t = 3.5$.`,
            explanation: String.raw`Missed (3, 4) where v(t) = -12 is also constant, and confused v(t) > 0 with positive acceleration v′(t) > 0!`,
          },
          {
            label: 'B',
            text: String.raw`(a) $(0, 1), (3, 4), (7, 9)$; (b) $(4, 9)$; (c) $t = 1, 3, 4, 7$.`,
            explanation: String.raw`On (7, 9), v(t) = 6 is constant so a(t) = 0 (not positive); corners are not direction changes!`,
          },
          {
            label: 'C',
            text: String.raw`**(a)** $(0, 1),\; (3, 4),\text{ and }(7, 9)$ ($v(t)$ horizontal / $v'(t)=0$);\; **(b)** $(4, 7)$ ($a(t) = v'(t) > 0$, $v(t)$ strictly increasing);\; **(c)** $t = 2$ and $t = 6$ ($v(t)$ changes sign).`,
            explanation: String.raw`Correct! Every horizontal segment, upward-sloping segment, and sign-changing zero identified cleanly!`,
          },
          {
            label: 'D',
            text: String.raw`(a) $t = 2, 6$; (b) $(6, 7)$ only; (c) $t = 2, 6$.`,
            explanation: String.raw`On (4, 6), v(t) is ALSO increasing (from -12 to 0), so acceleration v′(t) = +6 > 0 on the entire (4, 7)!`,
          },
        ],
        hint1: String.raw`Constant velocity = horizontal segments of $v(t)$; positive acceleration = upward-sloping segments of $v(t)$ (even below the $t$-axis!); direction change = $v(t)$ crosses $0$.`,
        hint2: String.raw`Check $(4, 7)$: $v(t)$ rises linearly from $-12$ to $+6$ with slope $+6 > 0$!`,
        solution: String.raw`- **(a) Constant velocity:** $(0, 1)$, $(3, 4)$, and $(7, 9)$ because $v(t)$ is constant ($v'(t) = 0$).
- **(b) Positive acceleration:** $(4, 7)$ because $a(t) = v'(t) > 0$ ($v(t)$ is strictly increasing).
- **(c) Changes direction:** $t = 2$ and $t = 6$ seconds because $v(t)$ changes sign there.`,
      },
      {
        partId: 'frq5-d',
        label: 'FRQ #5(d): Sprinter Average Acceleration on [0, 9]',
        prompt: String.raw`Determine the sprinter's **average acceleration** on $[0, 9]$ (in $\text{ft/sec}^2$).`,
        inputType: 'numeric',
        placeholder: 'e.g. -8/9 or -0.889',
        unitLabel: 'ft/sec²',
        numericAnswer: -8 / 9,
        tolerance: 0.005,
        acceptedStrings: ['-8/9'],
        hint1: String.raw`Use $\frac{v(9) - v(0)}{9 - 0}$ from the endpoints of the $v(t)$ graph!`,
        hint2: String.raw`$v(0) = 14\text{ ft/sec}$ and $v(9) = 6\text{ ft/sec}$.`,
        solution: String.raw`$$\text{Average Acceleration} = \frac{v(9) - v(0)}{9 - 0} = \frac{6 - 14}{9} = -\frac{8}{9}\text{ ft/sec}^2$$`,
      },
      {
        partId: 'frq6',
        label: 'FRQ #6(a)–(b): Field Runner v(t) = t(t − 5)(t − 11)',
        prompt: String.raw`For $v(t) = t(t - 5)(t - 11)\text{ ft/sec}$ (positive = north): **(a)** at $t = 6$ is the runner moving north or south, and **(b)** is the runner slowing down or speeding up at $t = 7$?`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`**(a)** Moving **south** because $v(6) = 6(1)(-5) = -30 < 0$;\; **(b)** **Speeding up** at $t = 7$ because $v(7) = -56 < 0$ and $a(7) = v'(7) = -22 < 0$ have the **same sign**.`,
            explanation: String.raw`Correct! Expanding v(t) = t³ - 16t² + 55t gives a(t) = 3t² - 32t + 55 ⇒ a(7) = 147 - 224 + 55 = -22 < 0!`,
          },
          {
            label: 'B',
            text: String.raw`(a) Moving south ($v(6) = -30 < 0$); (b) Slowing down at $t = 7$ because $a(7) = -22 < 0$.`,
            explanation: String.raw`Trap! Both v(7) = -56 < 0 AND a(7) = -22 < 0 are negative (same sign!), so the runner is speeding up southward!`,
          },
          {
            label: 'C',
            text: String.raw`(a) Moving north ($v(6) > 0$); (b) Speeding up at $t = 7$.`,
            explanation: String.raw`6(6 - 5)(6 - 11) = 6(1)(-5) = -30 < 0 (south).`,
          },
          {
            label: 'D',
            text: String.raw`(a) Moving south; (b) Slowing down because $a(7) = +18 > 0$.`,
            explanation: String.raw`Arithmetic error: 3(49) - 32(7) + 55 = 147 - 224 + 55 = -22, not +18.`,
          },
        ],
        hint1: String.raw`Expand $v(t) = t(t^2 - 16t + 55) = t^3 - 16t^2 + 55t$ so differentiating to $a(t) = 3t^2 - 32t + 55$ is super fast!`,
        hint2: String.raw`Evaluate $v(6) = -30$, $v(7) = 7(2)(-4) = -56$, and $a(7) = 3(49) - 32(7) + 55 = -22$.`,
        solution: String.raw`1. **(a) At $t = 6$:** $v(6) = 6(1)(-5) = -30\text{ ft/sec} < 0 \implies$ moving **south**.
2. **(b) At $t = 7$:** $v(7) = 7(2)(-4) = -56\text{ ft/sec} < 0$.
   Expand $v(t) = t^3 - 16t^2 + 55t \implies a(t) = v'(t) = 3t^2 - 32t + 55 \implies a(7) = 147 - 224 + 55 = -22\text{ ft/sec}^2 < 0$.
   Since $v(7) < 0$ and $a(7) < 0$ have the **same sign**, the runner is **speeding up** at $t = 7$.`,
      },
    ],
  },

  // =========================================================================
  // SECTION 4: Pages 5–6 — Calculator Free Response (#7–#11)
  // =========================================================================
  {
    id: 'bultman-frq-7',
    module: 'bultman-review',
    section: 'Pages 5–6: Ms. Bultman Calculator FRQs (#7–#11)',
    badge: 'Calc FRQ #7 • Exponential Motion (a–e)',
    title: 'Field Runner s(t) = e^(6−t) + t² − t − 30 (Calculator)',
    calculator: 'allowed',
    stem: String.raw`A runner sprints back and forth across a field. Their position in meters from the middle of the field is given by
$$s(t) = e^{6 - t} + t^2 - t - 30 \quad (t \ge 0)$$
where $t$ is measured in seconds.`,
    watchOut: String.raw`Notice $a(t) = s''(t) = e^{6 - t} + 2$ is **strictly positive for ALL $t$**! That makes parts (c) and (d) super clean: once you find the single root of $v(t) = -e^{6 - t} + 2t - 1 = 0$, $v$ and $a$ share the same sign everywhere to the right of that root!`,
    inMockTest: true,
    parts: [
      {
        partId: 'a',
        label: 'Part (a): Net Displacement on [0, 2.4]',
        prompt: String.raw`Determine the runner's displacement over $[0, 2.4]$ ($s(2.4) - s(0)$, to 3 decimals). *(Note: if your class defines "displacement when $t=2.4$" as signed position from the middle of the field $s(2.4) \approx 9.958\text{ m}$, both $-363.471$ and $9.958$ are accepted here — see solution!)*`,
        inputType: 'numeric',
        placeholder: 'e.g. -363.471 (or s(2.4) = 9.958)',
        unitLabel: 'meters',
        numericAnswer: -363.470559,
        tolerance: 0.01,
        acceptedStrings: ['9.958', '9.9582', '-363.471', '-363.470'],
        hint1: String.raw`Compute $s(2.4) = e^{3.6} + (2.4)^2 - 2.4 - 30 \approx 9.958\text{ m}$ and $s(0) = e^6 - 30 \approx 373.429\text{ m}$.`,
        hint2: String.raw`Net displacement from $t = 0$ is $s(2.4) - s(0) \approx 9.9582 - 373.4288 = -363.471\text{ m}$.`,
        solution: String.raw`- **Position relative to middle of field at $t = 2.4$:** $s(2.4) = e^{3.6} + 5.76 - 2.4 - 30 \approx \mathbf{9.958\text{ meters}}$.
- **Net displacement from $t = 0$ to $t = 2.4$:** $s(2.4) - s(0) \approx 9.9582 - 373.4288 = \mathbf{-363.471\text{ meters}}$.`,
      },
      {
        partId: 'b',
        label: 'Part (b): Speed at t = 3.7',
        prompt: String.raw`Determine the runner's **speed** when $t = 3.7$ seconds (to 3 decimal places).`,
        inputType: 'numeric',
        placeholder: 'e.g. 3.574',
        unitLabel: 'm/sec',
        numericAnswer: 3.574182,
        tolerance: 0.005,
        hint1: String.raw`Evaluate $v(3.7) = s'(3.7) = -e^{6 - 3.7} + 2(3.7) - 1$ and take $|v(3.7)|$!`,
        hint2: String.raw`$v(3.7) = -e^{2.3} + 6.4 \approx -9.9742 + 6.4 = -3.5742 \implies \text{Speed} = 3.574\text{ m/sec}$.`,
        solution: String.raw`$$v(t) = s'(t) = -e^{6 - t} + 2t - 1 \implies v(3.7) = -e^{2.3} + 6.4 \approx -3.5742\text{ m/sec}$$
$$\text{Speed} = |v(3.7)| \approx \mathbf{3.574\text{ m/sec}}$$`,
      },
      {
        partId: 'c-d-e',
        label: 'Parts (c), (d), & (e): Speeding Up, Direction Change & Accel < 4',
        prompt: String.raw`Using your graphing calculator, select the complete solution for **(c)** speeding up, **(d)** direction change, and **(e)** acceleration $< 4\text{ m/sec}^2$:`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`(c) $(0, 4.042)$; (d) $t \approx 4.042$; (e) $(0, 5.307)$.`,
            explanation: String.raw`Reversed both inequalities! On (0, 4.042), v < 0 while a > 0 (slowing down); and e^(6-t) + 2 < 4 holds for t > 6 - ln 2 ≈ 5.307!`,
          },
          {
            label: 'B',
            text: String.raw`**(c)** Speeding up on $(4.042, \infty)$ ($v(t) > 0$ and $a(t) = e^{6-t} + 2 > 0$ same sign);\; **(d)** Changes direction at $t \approx 4.042\text{ sec}$ ($v(t)$ changes sign from $-$ to $+$);\; **(e)** Acceleration $< 4\text{ m/sec}^2$ on $(5.307, \infty)$ [exact: $(6 - \ln 2, \infty)$].`,
            explanation: String.raw`Correct! Every root and inequality direction verified to 3 decimal places!`,
          },
          {
            label: 'C',
            text: String.raw`(c) $(4.042, 5.307)$; (d) $t \approx 4.042$; (e) $(5.307, \infty)$.`,
            explanation: String.raw`a(t) = e^(6-t) + 2 > 2 > 0 NEVER turns negative, so the runner keeps speeding up on the entire (4.042, ∞)!`,
          },
          {
            label: 'D',
            text: String.raw`(c) $(0.5, \infty)$; (d) $t = 0.5$; (e) $(4, \infty)$.`,
            explanation: String.raw`Dropped the -e^(6-t) term when solving v(t) = 0.`,
          },
        ],
        hint1: String.raw`Graph $v(t) = -e^{6 - t} + 2t - 1$ to find its zero ($t \approx 4.0421$), and solve $a(t) = e^{6 - t} + 2 < 4 \implies e^{6 - t} < 2$.`,
        hint2: String.raw`$e^{6 - t} < 2 \implies 6 - t < \ln 2 \implies t > 6 - \ln 2 \approx 5.3069$.`,
        solution: String.raw`- **$v(t) = -e^{6 - t} + 2t - 1 = 0$** has a single root at **$t \approx 4.042\text{ sec}$**, changing sign from negative to positive $\implies$ **(d)** changes direction at $t \approx 4.042\text{ sec}$.
- Since **$a(t) = e^{6 - t} + 2 > 0$** for all $t$, $v(t)$ and $a(t)$ have the same sign on **$(4.042, \infty)$** $\implies$ **(c)** speeding up on $(4.042, \infty)$.
- **(e)** $a(t) < 4 \iff e^{6 - t} + 2 < 4 \iff e^{6 - t} < 2 \iff t > 6 - \ln 2 \approx 5.307$, so **$(5.307, \infty)$**.`,
      },
    ],
  },
  {
    id: 'bultman-frq-8-9-10',
    module: 'bultman-review',
    section: 'Pages 5–6: Ms. Bultman Calculator FRQs (#7–#11)',
    badge: 'Calc FRQs #8, #9 & #10 • Kite, Shifted Circle & Ice Cream Cone',
    title: '40-m Kite Angle (#8), Circle Tangents (#9), & Melting Waffle Cone (#10)',
    calculator: 'allowed',
    stem: String.raw`Solve Calculator FRQs **#8**, **#9**, and **#10** from Pages 5–6 of Ms. Bultman's Review.`,
    watchOut: String.raw`On **FRQ #10**, the *"cylindrical doggie water bowl with base area $400\pi\text{ cm}^2$"* is classic AP **extra-information camouflage** — the question asks ONLY for the rate of change of the volume of ice cream **in the cone**!`,
    inMockTest: true,
    parts: [
      {
        partId: 'frq8',
        label: 'Calc FRQ #8: Flying Kite Angle Rate',
        prompt: String.raw`A kite $40\text{ m}$ above the ground moves horizontally at $3\text{ m/sec}$. At what rate, in radians/sec, is the angle $\theta$ between the string and the horizontal **decreasing** when $80\text{ meters}$ of string have been let out? *(Enter positive magnitude ` + '`3/160`' + ` / ` + '`0.019`' + ` or signed ` + '`-0.019`' + `.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 3/160 or 0.019',
        unitLabel: 'rad/sec',
        numericAnswer: 0.01875,
        tolerance: 0.002,
        acceptedStrings: ['3/160', '-3/160', '0.019', '0.0188', '-0.019', '-0.0188', '-0.01875'],
        hint1: String.raw`Use $\tan\theta = \frac{40}{x} = 40x^{-1}$! When hypotenuse $z = 80\text{ m}$ and height $= 40\text{ m}$ ($30^\circ\text{–}60^\circ\text{–}90^\circ$ triangle!), horizontal distance $x = 40\sqrt{3}\text{ m}$.`,
        hint2: String.raw`Differentiate: $\sec^2\theta\frac{d\theta}{dt} = -\frac{40}{x^2}\frac{dx}{dt}$, where $\cos\theta = \frac{40\sqrt{3}}{80} = \frac{\sqrt{3}}{2} \implies \sec^2\theta = \frac{4}{3}$!`,
        solution: String.raw`$$\tan\theta = \frac{40}{x} \implies \sec^2\theta\frac{d\theta}{dt} = -\frac{40}{x^2}\frac{dx}{dt}$$
When string $z = 80\text{ m}$, $x = \sqrt{80^2 - 40^2} = 40\sqrt{3}\text{ m}$ ($x^2 = 4800$) and $\sec^2\theta = \left(\frac{80}{40\sqrt{3}}\right)^2 = \frac{4}{3}$:
$$\frac{4}{3}\frac{d\theta}{dt} = -\frac{40}{4800}(3) = -\frac{1}{40} \implies \frac{d\theta}{dt} = -\frac{3}{160} = -0.01875\text{ rad/sec}$$
Thus the angle is decreasing at a rate of **$\frac{3}{160} \approx 0.019\text{ rad/sec}$**.`,
      },
      {
        partId: 'frq9',
        label: 'Calc FRQ #9: Horizontal & Vertical Tangents of x² + y² = 5x + 8y',
        prompt: String.raw`Select all coordinate points at which $x^2 + y^2 = 5x + 8y$ has **horizontal** and **vertical** tangent lines:`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`**Horizontal:** $\left(2.5,\; \frac{8 + \sqrt{89}}{2}\right) \approx (2.5, 8.717)$ and $\left(2.5,\; \frac{8 - \sqrt{89}}{2}\right) \approx (2.5, -0.717)$;\; **Vertical:** $\left(\frac{5 + \sqrt{89}}{2},\; 4\right) \approx (7.217, 4)$ and $\left(\frac{5 - \sqrt{89}}{2},\; 4\right) \approx (-2.217, 4)$.`,
            explanation: String.raw`Correct! dy/dx = (5 - 2x)/(2y - 8); x = 2.5 gives y² - 8y - 6.25 = 0, and y = 4 gives x² - 5x - 16 = 0!`,
          },
          {
            label: 'B',
            text: String.raw`Horizontal at $(2.5, 8)$ and $(2.5, 0)$; Vertical at $(5, 4)$ and $(0, 4)$.`,
            explanation: String.raw`Forgot to include (2.5)² = 6.25 and 5(2.5) = 12.5 when plugging x = 2.5 back into x² + y² = 5x + 8y!`,
          },
          {
            label: 'C',
            text: String.raw`Horizontal at $(4, 7.217)$ and $(4, -2.217)$; Vertical at $(8.717, 2.5)$ and $(-0.717, 2.5)$.`,
            explanation: String.raw`Swapped horizontal (numerator = 0) and vertical (denominator = 0) conditions!`,
          },
          {
            label: 'D',
            text: String.raw`Horizontal at $(2.5, 4)$ only.`,
            explanation: String.raw`(2.5, 4) is the center of the circle, not even on the circle!`,
          },
        ],
        hint1: String.raw`Differentiate implicitly: $2x + 2yy' = 5 + 8y' \implies \frac{dy}{dx} = \frac{5 - 2x}{2y - 8}$.`,
        hint2: String.raw`Horizontal: $x = 2.5 \implies 6.25 + y^2 = 12.5 + 8y \implies y^2 - 8y - 6.25 = 0$. Vertical: $y = 4 \implies x^2 + 16 = 5x + 32 \implies x^2 - 5x - 16 = 0$.`,
        solution: String.raw`$$\frac{dy}{dx} = \frac{5 - 2x}{2y - 8}$$
- **Horizontal tangents ($x = 2.5$):** $y^2 - 8y - 6.25 = 0 \implies y = \frac{8 \pm \sqrt{89}}{2} \approx 8.717,\; -0.717$.
- **Vertical tangents ($y = 4$):** $x^2 - 5x - 16 = 0 \implies x = \frac{5 \pm \sqrt{89}}{2} \approx 7.217,\; -2.217$.`,
      },
      {
        partId: 'frq10',
        label: 'Calc FRQ #10: Melting Mint-Chip Ice Cream Waffle Cone',
        prompt: String.raw`Ice cream in a conical waffle cone of height $12\text{ cm}$ and **diameter $8\text{ cm}$** drips out so depth $h$ changes at $\frac{dh}{dt} = (h - 12)\text{ cm/min}$. At what rate ($\frac{dV}{dt}$, in $\text{cm}^3/\text{min}$) is the volume of ice cream in the cone changing when $h = 3\text{ cm}$? ($V = \frac{1}{3}\pi r^2 h$)`,
        inputType: 'numeric',
        placeholder: 'e.g. -9*pi or -28.274',
        unitLabel: 'cm³/min',
        numericAnswer: -9 * Math.PI,
        tolerance: 0.02,
        acceptedStrings: ['-9*pi', '-9pi'],
        hint1: String.raw`Diameter $8\text{ cm} \implies$ top radius $R = 4\text{ cm}$, so $\frac{r}{h} = \frac{4}{12} = \frac{1}{3} \implies r = \frac{h}{3}$!`,
        hint2: String.raw`$V = \frac{1}{3}\pi\left(\frac{h}{3}\right)^2 h = \frac{\pi}{27}h^3 \implies \frac{dV}{dt} = \frac{\pi}{9}h^2\frac{dh}{dt}$. At $h = 3$, $\frac{dh}{dt} = 3 - 12 = -9\text{ cm/min}$!`,
        solution: String.raw`Since $R = 4\text{ cm}$ and $H = 12\text{ cm}$, $\frac{r}{h} = \frac{4}{12} = \frac{1}{3} \implies r = \frac{h}{3}$:
$$V = \frac{1}{3}\pi\left(\frac{h}{3}\right)^2 h = \frac{\pi}{27}h^3 \implies \frac{dV}{dt} = \frac{\pi}{9}h^2\frac{dh}{dt}$$
When $h = 3\text{ cm}$, $\frac{dh}{dt} = 3 - 12 = -9\text{ cm/min}$:
$$\frac{dV}{dt} = \frac{\pi}{9}(3)^2(-9) = \mathbf{-9\pi \approx -28.274\text{ cm}^3/\text{min}}$$`,
      },
    ],
  },
  {
    id: 'bultman-frq-11',
    module: 'bultman-review',
    section: 'Pages 5–6: Ms. Bultman Calculator FRQs (#7–#11)',
    badge: 'Calc FRQ #11 • Joseph the Spider (a–e)',
    title: 'Joseph the Spider: s(t) = t · e^(sin t) · ln(t + 1) on 0 ≤ t ≤ 6',
    calculator: 'allowed',
    stem: String.raw`A spider named Joseph is moving along the $x$-axis. His **position** is modeled by the function
$$s(t) = t \cdot e^{\sin(t)} \cdot \ln(t + 1)$$
which is defined for $0 \le t \le 6$ minutes *(after $6\text{ min}$, Joseph takes a nap!)*.`,
    watchOut: String.raw`**TI-84 Calculator Pro-Tip:** You are given **POSITION $s(t)$**! Put ` + '`Y1 = X * e^(sin(X)) * ln(X + 1)`' + ` and ` + '`Y2 = nDeriv(Y1, X, X)`' + ` (velocity $v(t)$!) on $[0, 6]$ so you never confuse zeros/extrema of $s(t)$ with zeros/extrema of $v(t)$!`,
    inMockTest: true,
    parts: [
      {
        partId: 'a-b-c',
        label: 'Parts (a), (b), & (c): Direction Changes, Slowing Down, & Moving Right',
        prompt: String.raw`Graph $v(t) = s'(t)$ on $0 \le t \le 6$ (Radian mode!) and select the complete 3-decimal solution for **(a)** direction changes, **(b)** slowing down, and **(c)** moving right:`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`(a) Never changes direction ($s(t) \ge 0$ on $[0, 6]$); (b) $(2.321, 4.365)$; (c) $(0, 6)$.`,
            explanation: String.raw`Trap! Graphed POSITION s(t) instead of VELOCITY v(t) = s′(t)! s(t) has local extrema at 2.321 and 4.365!`,
          },
          {
            label: 'B',
            text: String.raw`(a) $t \approx 2.321$ and $t \approx 4.365$; (b) $(1.383, 3.073)$; (c) $(0, 2.321) \cup (4.365, 6)$.`,
            explanation: String.raw`Trap on (b)! On (2.321, 3.073), BOTH v(t) < 0 and a(t) = v′(t) < 0, so Joseph is SPEEDING UP there, not slowing down!`,
          },
          {
            label: 'C',
            text: String.raw`**(a)** Changes direction at $t \approx 2.321$ and $t \approx 4.365\text{ min}$ ($v(t) = s'(t)$ changes sign);\; **(b)** Slowing down on $(1.383, 2.321) \cup (3.073, 4.365)$ ($v(t)$ and $a(t) = v'(t)$ have opposite signs);\; **(c)** Moving right on $(0, 2.321) \cup (4.365, 6)$ ($v(t) > 0$).`,
            explanation: String.raw`Correct! Zeros of v(t) are 2.321 & 4.365, and local extrema of v(t) (zeros of a(t)) are 1.383 & 3.073!`,
          },
          {
            label: 'D',
            text: String.raw`(a) $t \approx 1.383$ and $t \approx 3.073$; (b) $(0, 1.383) \cup (2.321, 3.073) \cup (4.365, 6)$; (c) $(2.321, 4.365)$.`,
            explanation: String.raw`Confused zeros of a(t) with zeros of v(t), and picked speeding-up intervals instead of slowing-down!`,
          },
        ],
        hint1: String.raw`Graph $Y_2 = v(t) = s'(t)$ on $[0, 6]$: its $t$-intercepts give (a) & (c), and where $v(t)$ moves *toward* the $t$-axis (between each peak/trough of $v$ and the next zero of $v$) gives (b)!`,
        hint2: String.raw`$v(t)$ peaks at $t \approx 1.383$, crosses $0$ at $t \approx 2.321$, bottoms out at $t \approx 3.073$, and crosses $0$ at $t \approx 4.365$!`,
        solution: String.raw`From the graph of $v(t) = s'(t)$ on $[0, 6]$:
- **Zeros of $v(t)$:** $t \approx 2.321$ and $t \approx 4.365$ (plus $v(0) = 0$).
- **Extrema of $v(t)$ (zeros of $a(t) = v'(t)$):** local max at $t \approx 1.383$, local min at $t \approx 3.073$.
- **(a) Direction changes:** **$t \approx 2.321\text{ min}$ and $t \approx 4.365\text{ min}$** because $v(t)$ changes sign there.
- **(b) Slowing down ($v$ and $a$ opposite signs):** **$(1.383, 2.321) \cup (3.073, 4.365)$**.
- **(c) Moving right ($v(t) > 0$):** **$(0, 2.321) \cup (4.365, 6)$** (or $(4.365, 6]$).`,
      },
      {
        partId: 'd',
        label: 'Part (d): Average Velocity on [0, 6]',
        prompt: String.raw`What is Joseph's **average velocity** on the whole interval $0 \le t \le 6$? *(Round to 3 decimal places.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 1.472',
        unitLabel: 'units/min',
        numericAnswer: 1.471547,
        tolerance: 0.005,
        hint1: String.raw`Use $\frac{s(6) - s(0)}{6 - 0}$ directly with $s(t)$!`,
        hint2: String.raw`$s(0) = 0$ and $s(6) = 6e^{\sin 6}\ln(7) \approx 8.8293 \implies \frac{8.8293}{6}$.`,
        solution: String.raw`$$\text{Average Velocity} = \frac{s(6) - s(0)}{6 - 0} = \frac{6e^{\sin 6}\ln(7) - 0}{6} = e^{\sin 6}\ln(7) \approx \mathbf{1.472\text{ units/min}} \quad (1.4715)$$`,
      },
      {
        partId: 'e',
        label: 'Part (e): Average Acceleration on [0, 6]',
        prompt: String.raw`What is Joseph's **average acceleration** on the whole interval $0 \le t \le 6$? *(Round to 3 decimal places.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 1.766',
        unitLabel: 'units/min²',
        numericAnswer: 1.766226,
        tolerance: 0.005,
        hint1: String.raw`Average acceleration on $[0, 6]$ is $\frac{v(6) - v(0)}{6 - 0}$, where $v(t) = s'(t)$!`,
        hint2: String.raw`Notice $v(0) = s'(0) = 0$, and on your calculator ` + '`nDeriv(Y1, X, 6)`' + ` gives $v(6) \approx 10.5974$. Divide by $6$!`,
        solution: String.raw`Compute $v(0) = s'(0) = 0$ and $v(6) = s'(6) \approx 10.59736$:
$$\text{Average Acceleration} = \frac{v(6) - v(0)}{6 - 0} \approx \frac{10.59736 - 0}{6} \approx \mathbf{1.766\text{ units/min}^2}$$`,
      },
    ],
  },
];
