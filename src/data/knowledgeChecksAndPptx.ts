import { Problem } from '../types';

export const KNOWLEDGE_CHECKS_AND_PPTX_PROBLEMS: Problem[] = [
  // =========================================================================
  // SECTION 1: Formative Knowledge Check — Lesson 3.2 Implicit Differentiation
  // =========================================================================
  {
    id: 'kc-3.2-q1',
    module: 'knowledge-checks',
    section: 'Formative Knowledge Check: Lesson 3.2 Implicit Differentiation (#1–#6)',
    badge: 'KC 3.2 #1 • Product Rule [1 Pt]',
    title: 'Implicit Derivative of 3x² + 5x²y² = 2y',
    calculator: 'non-calculator',
    stem: String.raw`If $3x^2 + 5x^2y^2 = 2y$, then $\dfrac{dy}{dx} =$`,
    watchOut: String.raw`Don't forget the **Product Rule** on $5x^2y^2 = (5x^2)(y^2)$! Both $2 - 10x^2y$ and $10x^2y - 2$ forms are equivalent if you flip signs in BOTH numerator and denominator!`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Choose the expression equal to $\dfrac{dy}{dx}$:`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`$\dfrac{2 - 6x - 10xy^2}{10x^2y}$`,
            explanation: String.raw`Incorrect: forgot to multiply 2 by dy/dx when differentiating 2y!`,
          },
          {
            label: 'B',
            text: String.raw`$\dfrac{6x + 10xy^2 + 10x^2y}{2}$`,
            explanation: String.raw`Incorrect: dropped dy/dx on 10x²y(dy/dx).`,
          },
          {
            label: 'C',
            text: String.raw`$\dfrac{-10xy^2 - 6x}{10x^2y - 2}$`,
            explanation: String.raw`Correct! 6x + 10xy² + 10x²y y′ = 2y′ ⇒ (10x²y - 2)y′ = -10xy² - 6x!`,
          },
          {
            label: 'D',
            text: String.raw`$\dfrac{-6x}{20xy - 2}$`,
            explanation: String.raw`Incorrect: differentiated 5x²y² as (10x)(2y y′) instead of applying the Product Rule!`,
          },
        ],
        hint1: String.raw`Differentiate term-by-term with respect to $x$, using the Product Rule on $(5x^2)(y^2)$.`,
        hint2: String.raw`$6x + 5\left(x^2 \cdot 2y\frac{dy}{dx} + y^2 \cdot 2x\right) = 2\frac{dy}{dx}$. Group $\frac{dy}{dx}$ terms on one side!`,
        solution: String.raw`$$6x + 10x^2y\frac{dy}{dx} + 10xy^2 = 2\frac{dy}{dx}$$
$$(10x^2y - 2)\frac{dy}{dx} = -10xy^2 - 6x \implies \frac{dy}{dx} = \frac{-10xy^2 - 6x}{10x^2y - 2} \quad \textbf{(Choice C)}$$`,
      },
    ],
  },
  {
    id: 'kc-3.2-q2',
    module: 'knowledge-checks',
    section: 'Formative Knowledge Check: Lesson 3.2 Implicit Differentiation (#1–#6)',
    badge: 'KC 3.2 #2 • Second Derivative [1 Pt]',
    title: 'Second Derivative d²y/dx² of 3x − y² = 5',
    calculator: 'non-calculator',
    stem: String.raw`Find $\dfrac{d^2y}{dx^2}$ if $3x - y^2 = 5$.`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Select the correct formula for $\dfrac{d^2y}{dx^2}$:`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`$\dfrac{d^2y}{dx^2} = \dfrac{9}{4y^3}$`,
            explanation: String.raw`Sign error: differentiating (3/2)y⁻¹ gives -(3/2)y⁻² · (dy/dx) (negative!).`,
          },
          {
            label: 'B',
            text: String.raw`$\dfrac{d^2y}{dx^2} = \dfrac{3}{2y}$`,
            explanation: String.raw`Incorrect: 3/(2y) is the first derivative dy/dx, not the second derivative!`,
          },
          {
            label: 'C',
            text: String.raw`$\dfrac{d^2y}{dx^2} = -\dfrac{9}{4y^3}$`,
            explanation: String.raw`Correct! dy/dx = 3/(2y) = (3/2)y⁻¹ ⇒ d²y/dx² = -(3/(2y²)) · (3/(2y)) = -9/(4y³)!`,
          },
          {
            label: 'D',
            text: String.raw`$\dfrac{d^2y}{dx^2} = -\dfrac{3}{2y}$`,
            explanation: String.raw`Incorrect differentiation of 3/(2y).`,
          },
        ],
        hint1: String.raw`First find $\frac{dy}{dx} = \frac{3}{2}y^{-1}$, then differentiate again with respect to $x$ using the Chain Rule!`,
        hint2: String.raw`$\frac{d^2y}{dx^2} = -\frac{3}{2}y^{-2}\cdot\frac{dy}{dx}$. Substitute $\frac{dy}{dx} = \frac{3}{2y}$!`,
        solution: String.raw`1. **First derivative:** $3 - 2y\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = \frac{3}{2y} = \frac{3}{2}y^{-1}$.
2. **Second derivative:**
   $$\frac{d^2y}{dx^2} = -\frac{3}{2}y^{-2}\cdot\frac{dy}{dx} = -\frac{3}{2y^2}\cdot\frac{3}{2y} = -\frac{9}{4y^3} \quad \textbf{(Choice C)}$$`,
      },
    ],
  },
  {
    id: 'kc-3.2-q3',
    module: 'knowledge-checks',
    section: 'Formative Knowledge Check: Lesson 3.2 Implicit Differentiation (#1–#6)',
    badge: 'KC 3.2 #3 • Logarithmic Slope [1 Pt]',
    title: 'Tangent Slope to ln(xy) = x Where x = 1',
    calculator: 'non-calculator',
    stem: String.raw`The slope of the line tangent to the graph of $\ln(xy) = x$ at the point where $x = 1$ is:`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Choose the tangent slope where $x = 1$:`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          { label: 'A', text: String.raw`$0$`, explanation: 'Correct! At x = 1, ln(y) = 1 ⇒ y = e; 1/x + y′/y = 1 ⇒ 1 + y′/e = 1 ⇒ y′ = 0!' },
          { label: 'B', text: String.raw`$1$`, explanation: 'Incorrect: 1 is the derivative of the right-hand side alone.' },
          { label: 'C', text: String.raw`$e$`, explanation: 'Incorrect: e is the y-coordinate at x = 1, not the slope.' },
          { label: 'D', text: String.raw`$e^2$`, explanation: 'Incorrect algebra.' },
          { label: 'E', text: String.raw`$1 - e$`, explanation: 'Incorrect: forgot 1/x = 1 cancels the 1 on the right side.' },
        ],
        hint1: String.raw`Use log properties $\ln(xy) = \ln x + \ln y = x$ (and find $y$ at $x = 1$: $\ln y = 1 \implies y = e$)!`,
        hint2: String.raw`$\frac{1}{x} + \frac{1}{y}\frac{dy}{dx} = 1$. At $x = 1$, $1 + \frac{1}{e}\frac{dy}{dx} = 1$.`,
        solution: String.raw`At $x = 1$, $\ln(1\cdot y) = 1 \implies y = e$. Differentiating $\ln x + \ln y = x$:
$$\frac{1}{x} + \frac{1}{y}\frac{dy}{dx} = 1 \implies 1 + \frac{1}{e}\frac{dy}{dx} = 1 \implies \frac{dy}{dx} = 0 \quad \textbf{(Choice A)}$$`,
      },
    ],
  },
  {
    id: 'kc-3.2-q4',
    module: 'knowledge-checks',
    section: 'Formative Knowledge Check: Lesson 3.2 Implicit Differentiation (#1–#6)',
    badge: 'KC 3.2 #4 • Log Chain Rule [1 Pt]',
    title: 'Implicit Derivative of y = ln(2x² − 3y²)',
    calculator: 'non-calculator',
    stem: String.raw`If $y = \ln(2x^2 - 3y^2)$, then $\dfrac{dy}{dx} =$`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Select the correct expression for $\dfrac{dy}{dx}$:`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`$\dfrac{4x - 6y}{2x^2 - 3y^2}$`,
            explanation: String.raw`Incorrect: forgot to multiply -6y by dy/dx in the Chain Rule!`,
          },
          {
            label: 'B',
            text: String.raw`$\dfrac{4x}{2x^2 - 3y^2 + 6y}$`,
            explanation: String.raw`Correct! y′ = (4x - 6y y′)/(2x² - 3y²) ⇒ (2x² - 3y² + 6y)y′ = 4x ⇒ y′ = 4x/(2x² - 3y² + 6y)!`,
          },
          {
            label: 'C',
            text: String.raw`$\dfrac{1}{2x^2 - 3y^2}$`,
            explanation: String.raw`Incorrect: omitted the inside derivative completely.`,
          },
          {
            label: 'D',
            text: String.raw`$\dfrac{4x}{2x^2 - 3y^2}$`,
            explanation: String.raw`Incorrect: treated -3y² as a constant instead of differentiating wrt x!`,
          },
        ],
        hint1: String.raw`Apply $\frac{d}{dx}[\ln u] = \frac{u'}{u}$ where $u = 2x^2 - 3y^2$, remembering $\frac{du}{dx} = 4x - 6y\frac{dy}{dx}$!`,
        hint2: String.raw`Multiply both sides of $\frac{dy}{dx} = \frac{4x - 6y\frac{dy}{dx}}{2x^2 - 3y^2}$ by $(2x^2 - 3y^2)$ and collect $\frac{dy}{dx}$!`,
        solution: String.raw`$$\frac{dy}{dx} = \frac{4x - 6y\frac{dy}{dx}}{2x^2 - 3y^2}$$
$$(2x^2 - 3y^2)\frac{dy}{dx} = 4x - 6y\frac{dy}{dx} \implies (2x^2 - 3y^2 + 6y)\frac{dy}{dx} = 4x \implies \frac{dy}{dx} = \frac{4x}{2x^2 - 3y^2 + 6y} \quad \textbf{(Choice B)}$$`,
      },
    ],
  },
  {
    id: 'kc-3.2-q5',
    module: 'knowledge-checks',
    section: 'Formative Knowledge Check: Lesson 3.2 Implicit Differentiation (#1–#6)',
    badge: 'KC 3.2 #5 • Short Response [2 Pts]',
    title: 'Implicit Differentiation of tan(y) = 2x − 9y',
    calculator: 'non-calculator',
    stem: String.raw`Find $\dfrac{dy}{dx}$ by implicit differentiation, given $\tan y = 2x - 9y$.`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Enter $\dfrac{dy}{dx}$ in terms of $y$ (e.g. ` + '`2 / (sec(y)^2 + 9)`' + `):`,
        inputType: 'algebraic',
        placeholder: 'e.g. 2 / (sec(y)^2 + 9)',
        algebraicExpr: '2 / ((sec(y)^2) + 9)',
        variables: ['x', 'y'],
        acceptedStrings: ['2/(sec^2(y)+9)', '2/(sec^2y+9)', '2/(9+sec^2(y))'],
        hint1: String.raw`Differentiate both sides with respect to $x$: $\frac{d}{dx}[\tan y] = \sec^2(y)\frac{dy}{dx}$.`,
        hint2: String.raw`$\sec^2(y)\frac{dy}{dx} = 2 - 9\frac{dy}{dx}$. Add $9\frac{dy}{dx}$ to both sides and factor out $\frac{dy}{dx}$!`,
        solution: String.raw`$$\frac{d}{dx}[\tan y] = \frac{d}{dx}[2x - 9y]$$
$$\sec^2(y)\frac{dy}{dx} = 2 - 9\frac{dy}{dx} \implies (\sec^2 y + 9)\frac{dy}{dx} = 2 \implies \frac{dy}{dx} = \frac{2}{\sec^2 y + 9}$$`,
      },
    ],
  },
  {
    id: 'kc-3.2-q6',
    module: 'knowledge-checks',
    section: 'Formative Knowledge Check: Lesson 3.2 Implicit Differentiation (#1–#6)',
    badge: 'KC 3.2 #6 • Tangent & Vertical Tangents [4 Pts]',
    title: 'Closed Curve x² + 7x + y⁴ + 4y = 5',
    calculator: 'non-calculator',
    stem: String.raw`Given the curve $x^2 + 7x + y^4 + 4y = 5$ and that
$$\frac{dy}{dx} = \frac{-2x - 7}{4(y^3 + 1)}$$`,
    watchOut: String.raw`Use proper Leibniz evaluation bar notation $\left.\frac{dy}{dx}\right|_{(-7, 1)}$, and verify vertical tangent points don't make the numerator $-2x - 7 = 0$!`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a) [2 pts]',
        prompt: String.raw`Write an equation for the tangent line to the curve at the point $(-7, 1)$.`,
        inputType: 'equation',
        placeholder: 'e.g. y - 1 = (7/8)(x + 7)',
        equationConfig: { type: 'line', slope: 7 / 8, point: [-7, 1] },
        acceptedStrings: ['y-1=7/8(x+7)', 'y-1=(7/8)(x+7)', 'y=7/8(x+7)+1'],
        hint1: String.raw`Evaluate $\left.\frac{dy}{dx}\right|_{(-7, 1)} = \frac{-2(-7) - 7}{4(1^3 + 1)}$, then write point-slope form.`,
        hint2: String.raw`Slope $m = \frac{14 - 7}{4(2)} = \frac{7}{8}$ through $(-7, 1)$.`,
        solution: String.raw`$$\left.\frac{dy}{dx}\right|_{(-7, 1)} = \frac{-2(-7) - 7}{4(1^3 + 1)} = \frac{7}{8}$$
Tangent line equation:
$$y - 1 = \frac{7}{8}(x + 7)$$`,
      },
      {
        partId: 'b',
        label: 'Part (b) [2 pts]',
        prompt: String.raw`Find the coordinate point(s) on the curve where the curve has **vertical tangent lines**.`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`$(8, -1)$ and $(-1, -1)$`,
            explanation: String.raw`Factoring sign error: x² + 7x - 8 = (x + 8)(x - 1) = 0 gives x = -8 and x = 1!`,
          },
          {
            label: 'B',
            text: String.raw`$(-8, -1)$ and $(1, -1)$`,
            explanation: String.raw`Correct! 4(y³ + 1) = 0 ⇒ y = -1 ⇒ x² + 7x + 1 - 4 = 5 ⇒ x² + 7x - 8 = (x + 8)(x - 1) = 0 ⇒ (-8, -1) and (1, -1)!`,
          },
          {
            label: 'C',
            text: String.raw`$\left(-\frac{7}{2}, -1\right)$`,
            explanation: String.raw`Incorrect: x = -7/2 is where numerator -2x - 7 = 0 (horizontal tangent condition), not vertical!`,
          },
          {
            label: 'D',
            text: String.raw`$y = -1$ only (without $x$-coordinates)`,
            explanation: String.raw`Incomplete: the question asks for coordinate point(s) (x, y) ON the curve!`,
          },
        ],
        hint1: String.raw`Set denominator $4(y^3 + 1) = 0 \implies y = -1$, then substitute $y = -1$ into $x^2 + 7x + y^4 + 4y = 5$!`,
        hint2: String.raw`$x^2 + 7x + 1 - 4 = 5 \implies x^2 + 7x - 8 = 0 \implies (x + 8)(x - 1) = 0$.`,
        solution: String.raw`Set the denominator of $\frac{dy}{dx}$ equal to $0$:
$$4(y^3 + 1) = 0 \implies y^3 = -1 \implies y = -1$$
Substitute $y = -1$ into the original curve:
$$x^2 + 7x + (-1)^4 + 4(-1) = 5 \implies x^2 + 7x - 8 = 0 \implies (x + 8)(x - 1) = 0 \implies x = -8,\; 1$$
At both $(-8, -1)$ and $(1, -1)$, the numerator $-2x - 7 \neq 0$, so the vertical tangent points are **$(-8, -1)$** and **$(1, -1)$**.`,
      },
    ],
  },

  // =========================================================================
  // SECTION 2: Formative Knowledge Check — Lesson 4.2 Motion (Non-Calculator)
  // =========================================================================
  {
    id: 'kc-4.2-q1',
    module: 'knowledge-checks',
    section: 'Formative Knowledge Check: Lesson 4.2 Motion Non-Calculator (#1–#3)',
    badge: 'KC 4.2 #1 • Velocity Graph [3 Pts]',
    title: 'Piecewise Velocity Graph V(t) on [0, 9]',
    calculator: 'non-calculator',
    visual: 'kc-42-velocity-graph',
    stem: String.raw`Using the velocity graph, $V(t)$, provided below, of an object measured in *feet per minute* over the time interval $[0, 9]$ minutes, answer the following questions. *(Approximating $x$-values is acceptable.)*`,
    watchOut: String.raw`**Teacher Feedback Note from Runqi's Quiz:** Keep AP justifications crisp and direct!
- Moving right: *"because $V(t) > 0$"*
- Negative acceleration: *"because $a(t) = V'(t) < 0$ (or $V(t)$ is decreasing)"*
- Changing direction: *"because $V(t)$ changes sign (from $-$ to $+$ or $+$ to $-$)"*`,
    parts: [
      {
        partId: 'a-c',
        prompt: String.raw`Select the complete, properly justified solution set for parts **(a)** moving right, **(b)** negative acceleration, and **(c)** changing direction:`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`**(a)** $(3.4, 6.6)\text{ min}$ because $V(t) > 0$;\; **(b)** $(0, 1.1) \cup (5, 7.3)\text{ min}$ because $a(t) = V'(t) < 0$ ($V(t)$ is decreasing);\; **(c)** $t \approx 3.4\text{ min}$ and $t \approx 6.6\text{ min}$ because $V(t)$ changes sign there.`,
            explanation: String.raw`Correct! Matches all 3 parts and the teacher's exact AP justification criteria!`,
          },
          {
            label: 'B',
            text: String.raw`**(a)** $(2, 5)\text{ min}$ because $V(t)$ is increasing;\; **(b)** $(0, 3.4) \cup (6.6, 9)\text{ min}$ because $V(t) < 0$;\; **(c)** $t = 5\text{ min}$.`,
            explanation: String.raw`Classic trap! Confused V(t) > 0 (above axis) with V′(t) > 0 (increasing), and confused peak t = 5 with sign changes of V(t)!`,
          },
          {
            label: 'C',
            text: String.raw`**(a)** $(3.4, 6.6)\text{ min}$;\; **(b)** $(0, 2) \cup (5, 7.3)\text{ min}$;\; **(c)** $t = 0, 3.4, 6.6, 9\text{ min}$.`,
            explanation: String.raw`Incorrect: on (1.1, 2) V(t) is constant so a(t) = 0 (not negative!), and V(t) does not change sign at endpoints t = 0 or t = 9.`,
          },
          {
            label: 'D',
            text: String.raw`**(a)** $(0, 5)\text{ min}$;\; **(b)** $(5, 9)\text{ min}$;\; **(c)** $t = 1.1, 2, 5, 7.3\text{ min}$.`,
            explanation: String.raw`Incorrect: corners of V(t) are where acceleration changes sign, NOT where the object changes direction!`,
          },
        ],
        hint1: String.raw`Remember this is a **velocity** graph $V(t)$: sign of $V(t)$ gives direction, slope $V'(t)$ gives acceleration, and sign changes of $V(t)$ give direction changes!`,
        hint2: String.raw`Check flat segment $(1.1, 2)$: $V(t) = -3.5$ is constant, so $a(t) = 0$ there (exclude it from negative acceleration!).`,
        solution: String.raw`- **(a) Moving right:** $(3.4, 6.6)$ minutes, because $V(t) > 0$ on that interval.
- **(b) Negative acceleration:** $(0, 1.1) \cup (5, 7.3)$ minutes, because $a(t) = V'(t) < 0$ ($V(t)$ is decreasing) on those intervals.
- **(c) Changing direction:** At $t \approx 3.4$ minutes ($V(t)$ changes sign from negative to positive) and $t \approx 6.6$ minutes ($V(t)$ changes sign from positive to negative).`,
      },
    ],
  },
  {
    id: 'kc-4.2-q2',
    module: 'knowledge-checks',
    section: 'Formative Knowledge Check: Lesson 4.2 Motion Non-Calculator (#1–#3)',
    badge: 'KC 4.2 #2 • Runqi Retry Target! [5 Pts]',
    title: 'Analytical Velocity v(t) = (t − 1)²(t − 3) (Fix the Product Rule Error!)',
    calculator: 'non-calculator',
    stem: String.raw`A particle moves along the $x$-axis measured in centimeters so that at time $t \ge 0$, in minutes, its velocity is given by
$$v(t) = (t - 1)^2(t - 3)$$`,
    watchOut: String.raw`**Runqi's Quiz Mistake Alert (-1 pt on 2b):** When differentiating $v(t) = (t - 1)^2(t - 3)$ by the Product Rule, write out each factor cleanly:
$$a(t) = v'(t) = 2(t - 1)(1)(t - 3) + (t - 1)^2(1)$$
At $t = 4$, $(4 - 1)^2(1) = 9$ and $2(3)(1) = 6$, so $a(4) = 9 + 6 = \mathbf{15}\text{ cm/min}^2$ (don't accidentally multiply by $4$ to get $36 + 24 = 60$)!`,
    inMockTest: true,
    parts: [
      {
        partId: 'a',
        label: 'Part (a) [1 pt]',
        prompt: String.raw`What is the **speed** of the object at $t = 2$ minutes? *(Units: $\text{cm/min}$.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 1',
        unitLabel: 'cm/min',
        numericAnswer: 1,
        tolerance: 0.001,
        hint1: String.raw`Evaluate $v(2) = (2 - 1)^2(2 - 3)$ and take its absolute value $|v(2)|$.`,
        hint2: String.raw`$v(2) = (1)^2(-1) = -1\text{ cm/min} \implies \text{Speed} = |-1|$.`,
        solution: String.raw`$$v(2) = (2 - 1)^2(2 - 3) = (1)(-1) = -1\text{ cm/min}$$
$$\text{Speed at } t = 2\text{ min} = |v(2)| = |-1| = \mathbf{1\text{ cm/min}}$$`,
      },
      {
        partId: 'b-acc',
        label: 'Part (b) Step 1: Exact Acceleration a(4) [2 pts]',
        prompt: String.raw`Compute the exact acceleration $a(4) = v'(4)$ at $t = 4$ minutes carefully using the Product Rule:`,
        inputType: 'numeric',
        placeholder: 'e.g. 15',
        unitLabel: 'cm/min²',
        numericAnswer: 15,
        tolerance: 0.001,
        hint1: String.raw`Let $u = (t - 1)^2$ ($u' = 2(t - 1)$) and $w = t - 3$ ($w' = 1$). Then $a(t) = u'w + uw'$.`,
        hint2: String.raw`$a(t) = 2(t - 1)(t - 3) + (t - 1)^2(1)$. Plug in $t = 4$: $2(3)(1) + (3)^2$!`,
        solution: String.raw`State $a(t) = v'(t)$ and apply the Product Rule:
$$a(t) = v'(t) = 2(t - 1)(t - 3) + (t - 1)^2(1)$$
Evaluate at $t = 4$:
$$a(4) = 2(4 - 1)(4 - 3) + (4 - 1)^2 = 2(3)(1) + 9 = 6 + 9 = \mathbf{15\text{ cm/min}^2}$$`,
      },
      {
        partId: 'b-conc',
        label: 'Part (b) Step 2: Speeding Up or Slowing Down? [1 pt]',
        prompt: String.raw`Using $v(4)$ and $a(4)$, is the particle speeding up or slowing down at $t = 4$ minutes — and when is the particle at rest in **Part (c)**?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`Slowing down at $t = 4$; at rest only at $t = 3\text{ min}$.`,
            explanation: String.raw`Incorrect: both v(4) = 9 > 0 and a(4) = 15 > 0 are positive, and v(1) = 0 as well!`,
          },
          {
            label: 'B',
            text: String.raw`**Speeding up** at $t = 4\text{ min}$ because $v(4) = 9\text{ cm/min} > 0$ and $a(4) = 15\text{ cm/min}^2 > 0$ have the **same sign**; at rest in **(c)** at $t = 1\text{ min}$ and $t = 3\text{ min}$.`,
            explanation: String.raw`Correct! Full 5/5 points: exact Product Rule arithmetic a(4) = 15, explicit connection a(t) = v′(t), same-sign comparison, and both zeros t = 1, 3!`,
          },
          {
            label: 'C',
            text: String.raw`Speeding up at $t = 4\text{ min}$ because $a(4) = 15 > 0$; at rest at $t = 1\text{ min}$ and $t = 3\text{ min}$.`,
            explanation: String.raw`Incomplete AP justification! Saying "because a(4) > 0" alone loses the justification point — you MUST state that v(4) and a(4) have the SAME sign!`,
          },
          {
            label: 'D',
            text: String.raw`Speeding up at $t = 4\text{ min}$; at rest only at $t = 3\text{ min}$ because $(t - 1)^2$ doesn't change sign.`,
            explanation: String.raw`Careful! "At rest" only requires v(t) = 0 (so BOTH t = 1 and t = 3), whereas "changes direction" requires a sign change!`,
          },
        ],
        hint1: String.raw`Compare the signs of $v(4) = (3)^2(1) = 9$ and $a(4) = 15$. For part (c), "at rest" simply means $v(t) = 0$!`,
        hint2: String.raw`Both $v(4) > 0$ and $a(4) > 0$ are positive (same sign $\implies$ speeding up), and $(t - 1)^2(t - 3) = 0 \implies t = 1, 3$.`,
        solution: String.raw`- **Part (b) Conclusion:** Since $v(4) = (4-1)^2(4-3) = 9\text{ cm/min} > 0$ and $a(4) = 15\text{ cm/min}^2 > 0$ have the **same sign**, the particle is **speeding up** at $t = 4$ minutes.
- **Part (c) At Rest:** $v(t) = (t - 1)^2(t - 3) = 0 \implies \mathbf{t = 1\text{ min}}$ and $\mathbf{t = 3\text{ min}}$.`,
      },
    ],
  },
  {
    id: 'kc-4.2-q3',
    module: 'knowledge-checks',
    section: 'Formative Knowledge Check: Lesson 4.2 Motion Non-Calculator (#1–#3)',
    badge: 'KC 4.2 #3 • Unit Trap Alert! [2 Pts]',
    title: 'Flying Squirrel Average Velocity on [1, 4] Seconds',
    calculator: 'non-calculator',
    stem: String.raw`A flying squirrel scurries along a straight tree branch. Its position at time $t$ (**in seconds**) for $t \ge 0$ is modeled by the rational function
$$s(t) = \frac{12t}{t + 2}$$
where $s(t)$ is measured in centimeters. Find the **average velocity** of the flying squirrel over the closed interval $[1, 4]$ seconds. Include units!`,
    watchOut: String.raw`**Runqi's Quiz Unit Trap (-1/4 pt):** On the quiz, Runqi computed $\frac{8 - 4}{4 - 1} = \frac{4}{3}$ perfectly, but wrote $\text{cm/min}$ (carrying over minutes from Question #2!) instead of **$\text{cm/sec}$**. Always circle the time & distance units in EVERY new problem!`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Compute the average velocity on $[1, 4]$ (in $\text{cm/sec}$):`,
        inputType: 'numeric',
        placeholder: 'e.g. 4/3 or 1.333',
        unitLabel: 'cm/sec',
        numericAnswer: 4 / 3,
        tolerance: 0.005,
        acceptedStrings: ['4/3'],
        hint1: String.raw`Average velocity on $[1, 4]$ is the secant slope $\frac{s(4) - s(1)}{4 - 1}$ (NOT $\frac{v(4) + v(1)}{2}$ and NOT $s'(t)$!).`,
        hint2: String.raw`$s(4) = \frac{48}{6} = 8\text{ cm}$ and $s(1) = \frac{12}{3} = 4\text{ cm}$. Divide $8 - 4$ by $4 - 1$, with units $\text{cm/sec}$!`,
        solution: String.raw`$$s(1) = \frac{12(1)}{1 + 2} = 4\text{ cm}, \qquad s(4) = \frac{12(4)}{4 + 2} = \frac{48}{6} = 8\text{ cm}$$
$$\text{Average Velocity} = \frac{s(4) - s(1)}{4 - 1} = \frac{8 - 4}{3} = \mathbf{\frac{4}{3}\text{ cm/sec}}$$`,
      },
    ],
  },

  // =========================================================================
  // SECTION 3: Teacher PowerPoint Extras — Context & Motion (4.1 & 4.2 PPTX)
  // =========================================================================
  {
    id: 'pptx-4.1-ap-extras',
    module: 'knowledge-checks',
    section: 'Teacher PowerPoint Extras: Context & Motion (Lessons 4.1 & 4.2 PPTX)',
    badge: '4.1 PPTX Slides 26–31 • AP FRQs',
    title: 'Tree Height Table, Water Tank Rate-Out, & Lake Fish Rate-of-a-Rate',
    calculator: 'allowed',
    stem: String.raw`Three official AP Exam questions from the end of the teacher's **4.1 & 4.3 Interpreting Derivatives** PowerPoint:`,
    watchOut: String.raw`In "Rate-In / Rate-Out" problems, the net rate of change of the quantity is $N'(t) = E(t) - L(t)$, so asking whether the **rate of change** is increasing or decreasing asks for the sign of the **second derivative** $N''(t) = E'(t) - L'(t)$!`,
    parts: [
      {
        partId: 'tree-2018',
        label: '2018 AB #4(a): Tree Height H′(6)',
        prompt: String.raw`Selected values of tree height $H(t)$ (in meters) at time $t$ (in years) are: $(2, 1.5),\; (3, 2),\; (5, 6),\; (7, 11),\; (10, 15)$. Estimate $H'(6)$ using the closest symmetric secant interval. *(Note meaning: at $t = 6\text{ years}$, the tree's height is increasing at approximately $2.5\text{ meters/year}$.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 5/2 or 2.5',
        unitLabel: 'meters/year',
        numericAnswer: 2.5,
        tolerance: 0.001,
        acceptedStrings: ['5/2', '2.5'],
        hint1: String.raw`$t = 6$ lies halfway between table entries $t = 5$ and $t = 7$. Compute $\frac{H(7) - H(5)}{7 - 5}$.`,
        hint2: String.raw`$\frac{11 - 6}{7 - 5} = \frac{5}{2}$.`,
        solution: String.raw`$$H'(6) \approx \frac{H(7) - H(5)}{7 - 5} = \frac{11 - 6}{2} = \frac{5}{2} = 2.5\text{ meters/year}$$
**Big 4 Interpretation:** At time $t = 6$ years, the height of the tree is increasing at a rate of approximately $2.5$ meters per year.`,
      },
      {
        partId: 'water-r2',
        label: 'Water Tank FRQ(a): Estimate R′(2)',
        prompt: String.raw`Water is removed from a tank at rate $R(t)$ ($\text{liters/hour}$) with table values $(0, 1340),\; (1, 1190),\; (3, 950),\; (6, 740),\; (8, 700)$. Estimate $R'(2)$ (include negative sign; units are $\text{liters/hour}^2$).`,
        inputType: 'numeric',
        placeholder: 'e.g. -120',
        unitLabel: 'liters/hr²',
        numericAnswer: -120,
        tolerance: 0.01,
        hint1: String.raw`$t = 2$ lies halfway between $t = 1$ and $t = 3$. Use the difference quotient $\frac{R(3) - R(1)}{3 - 1}$.`,
        hint2: String.raw`$\frac{950 - 1190}{3 - 1} = \frac{-240}{2}$. Notice units: $(\text{liters/hour}) / \text{hour} = \text{liters/hour}^2$!`,
        solution: String.raw`$$R'(2) \approx \frac{R(3) - R(1)}{3 - 1} = \frac{950 - 1190}{2} = \frac{-240}{2} = -120\text{ liters/hour}^2$$`,
      },
      {
        partId: 'fish-2019',
        label: '2019 AB #1(d): Fish Entering & Leaving Lake (Calculator)',
        prompt: String.raw`Fish enter a lake at $E(t) = 20 + 15\sin\left(\frac{\pi t}{6}\right)$ and leave at $L(t) = 4 + 2^{0.1t^2}$ (both in fish/hr, $t$ in hours since midnight). Is the **rate of change** in the number of fish in the lake increasing or decreasing at $5\text{ A.M.}$ ($t = 5$)?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`**Increasing**, because $E(5) - L(5) \approx 27.5 - 9.657 = +17.843 > 0$.`,
            explanation: String.raw`Careful! E(5) - L(5) > 0 means the NUMBER of fish is increasing, NOT the RATE OF CHANGE in the number of fish!`,
          },
          {
            label: 'B',
            text: String.raw`**Decreasing**, because the derivative of the net rate $E'(5) - L'(5) \approx -10.723 < 0$.`,
            explanation: String.raw`Correct! Net rate is R_net(t) = E(t) - L(t), whose derivative at t = 5 is E′(5) - L′(5) ≈ -6.802 - 3.921 = -10.723 < 0!`,
          },
          {
            label: 'C',
            text: String.raw`**Increasing**, because $E'(5) - L'(5) > 0$.`,
            explanation: String.raw`Check radian mode! cos(5π/6) = -√3/2 < 0, so E′(5) ≈ -6.802 and L′(5) ≈ +3.921, making E′(5) - L′(5) ≈ -10.723 < 0.`,
          },
          {
            label: 'D',
            text: String.raw`**Decreasing**, because $L(5) > E(5)$.`,
            explanation: String.raw`False: E(5) = 27.5 > L(5) ≈ 9.657.`,
          },
        ],
        hint1: String.raw`Let the rate of change in the number of fish be $R_{\text{net}}(t) = E(t) - L(t)$. To test if $R_{\text{net}}(t)$ is increasing or decreasing at $t = 5$, compute $R_{\text{net}}'(5) = E'(5) - L'(5)$!`,
        hint2: String.raw`On your calculator (Radian mode): $E'(5) \approx -6.8017$ and $L'(5) \approx +3.9210 \implies E'(5) - L'(5) \approx -10.723$.`,
        solution: String.raw`The rate of change in the number of fish in the lake at time $t$ is $E(t) - L(t)$. Differentiating at $t = 5$:
$$E'(5) - L'(5) = \frac{15\pi}{6}\cos\left(\frac{5\pi}{6}\right) - 2^{0.1(25)}(0.2\cdot 5)\ln 2 \approx -6.8017 - 3.9210 = -10.723 < 0$$
Because $E'(5) - L'(5) < 0$, the rate of change in the number of fish is **decreasing** at $t = 5$ ($\text{Choice B}$).`,
      },
    ],
  },
  {
    id: 'pptx-4.2-table-and-graph',
    module: 'knowledge-checks',
    section: 'Teacher PowerPoint Extras: Context & Motion (Lessons 4.1 & 4.2 PPTX)',
    badge: '4.2 PPTX Slides 11, 20, 24 & 26 • Motion Extras',
    title: 'Velocity Table (IVT & Secant), Velocity Graph Farthest-Right, & Calc MCQ',
    calculator: 'allowed',
    visual: 'pptx-42-velocity-graph',
    stem: String.raw`Practice the extra motion problems from the **4.2 Motion** PowerPoint (only included in the slides beyond the printed packet!):
1. **Velocity Graph above ($0 \le t \le 9\text{ s}$):** vertices $(0, 3) \to (3, 12) \to (6, -6) \to (9, -6)$, crossing $v = 0$ at $t = 5$.
2. **Velocity Table ($v$ differentiable, in $\text{meters/minute}$):**

| Time $t$ | $0$ | $2$ | $5$ | $6$ | $8$ | $12$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Velocity $v(t)$ | $-3$ | $2$ | $3$ | $5$ | $7$ | $5$ |`,
    watchOut: String.raw`**IVT Checklist on AP FRQs:** Before invoking the Intermediate Value Theorem on $v(t)$, you MUST state *"Since $v$ is differentiable, $v$ is **continuous** on $[0, 2]$"*!`,
    parts: [
      {
        partId: 'graph-furthest',
        label: 'Slide 11 Graph: Farthest Right & Avg Accel',
        prompt: String.raw`For the **velocity graph above** on $[0, 9]$, what is the average acceleration on $[2, 4]$, and at what time $t$ is the particle **farthest to the right**?`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`Avg accel $= -\dfrac{3}{2}\text{ ft/sec}^2$; farthest right at $t = 3$ because $v(3) = 12$ is the maximum velocity.`,
            explanation: String.raw`Classic trap! At t = 3, the particle is moving right at peak speed, AND keeps moving right from t = 3 to t = 5 because v(t) > 0!`,
          },
          {
            label: 'B',
            text: String.raw`Avg accel $= -3\text{ ft/sec}^2$; farthest right at $t = 5$.`,
            explanation: String.raw`Check v(2): on [0, 3], slope = (12 - 3)/3 = 3, so v(2) = 9 and v(4) = 6 ⇒ (6 - 9)/(4 - 2) = -3/2 ft/sec²!`,
          },
          {
            label: 'C',
            text: String.raw`Avg accel $= -\dfrac{3}{2}\text{ ft/sec}^2$; **farthest to the right at $t = 5$** because $v(t) > 0$ (moving right) for $0 \le t < 5$ and $v(t) < 0$ (moving left) for $5 < t \le 9$.`,
            explanation: String.raw`Correct! v(2) = 9, v(4) = 6 ⇒ avg accel = -3/2 ft/sec²; and position increases throughout [0, 5] then decreases on [5, 9]!`,
          },
          {
            label: 'D',
            text: String.raw`Avg accel $= \dfrac{3}{2}\text{ ft/sec}^2$; farthest right at $t = 9$.`,
            explanation: String.raw`Sign error on v(4) - v(2) = 6 - 9 = -3, and on (5, 9] the particle moves left.`,
          },
        ],
        hint1: String.raw`Find $v(2)$ on segment $(0, 3)\to(3, 12)$ (slope $+3 \implies v(2) = 9$) and $v(4)$ on $(3, 12)\to(6, -6)$ (slope $-6 \implies v(4) = 6$). For farthest right, look where $v(t)$ switches from $+$ to $-$!`,
        hint2: String.raw`As long as $v(t) > 0$, the particle keeps moving right! It stops moving right and starts moving left at $t = 5$.`,
        solution: String.raw`- **Average Acceleration on $[2, 4]$:** $\frac{v(4) - v(2)}{4 - 2} = \frac{6 - 9}{2} = -\frac{3}{2}\text{ ft/sec}^2$.
- **Farthest Right:** Since $v(t) > 0$ on $[0, 5)$ (moving right) and $v(t) < 0$ on $(5, 9]$ (moving left), the particle reaches its rightmost position at **$t = 5$ seconds**.`,
      },
      {
        partId: 'table-frq',
        label: 'Slide 24 Table: Approximate v′(10) & IVT',
        prompt: String.raw`From the **velocity table** above, approximate $v'(10)$ (in $\text{meters/minute}^2$). *(Also review the solution for the full IVT justification on $[0, 2]$!)*`,
        inputType: 'numeric',
        placeholder: 'e.g. -1/2 or -0.5',
        unitLabel: 'm/min²',
        numericAnswer: -0.5,
        tolerance: 0.001,
        acceptedStrings: ['-1/2', '-0.5', '-2/4'],
        hint1: String.raw`$t = 10$ lies halfway between $t = 8$ and $t = 12$. Compute $\frac{v(12) - v(8)}{12 - 8}$.`,
        hint2: String.raw`$\frac{5 - 7}{12 - 8} = \frac{-2}{4} = -\frac{1}{2}$.`,
        solution: String.raw`- **(a) At $t = 0$:** Moving **left** because $v(0) = -3 < 0$.
- **(b) At rest via IVT:** Yes! Since $v(t)$ is differentiable, $v(t)$ is **continuous** on $[0, 2]$. Because $v(0) = -3 < 0 < 2 = v(2)$, by the **Intermediate Value Theorem**, there is at least one time $t$ in $(0, 2)$ where $v(t) = 0$.
- **(c) Secant Approximation:**
  $$v'(10) \approx \frac{v(12) - v(8)}{12 - 8} = \frac{5 - 7}{4} = -\frac{1}{2}\text{ meters/minute}^2$$
- **(d) Meaning of $v'(10)$:** $v'(10)$ is the particle's acceleration (the rate at which velocity is changing, in $\text{meters/minute}^2$) at $t = 10\text{ minutes}$.`,
      },
      {
        partId: 'calc-mcq',
        label: 'Slide 26 Calculator MCQ: v(t) = 3 + 4.1 cos(0.9t)',
        prompt: String.raw`A particle moves along the $x$-axis so that at any time $t \ge 0$, its velocity is given by $v(t) = 3 + 4.1\cos(0.9t)$. What is the acceleration of the particle at time $t = 4$? *(Radian mode!)*`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          { label: 'A', text: String.raw`$-2.016$`, explanation: 'Evaluated something other than v′(4).' },
          { label: 'B', text: String.raw`$-0.677$`, explanation: 'Evaluated v(4) - 3 instead of differentiating.' },
          { label: 'C', text: String.raw`$1.633$`, explanation: 'Correct! a(4) = v′(4) = -4.1(0.9)sin(3.6) = -3.69 sin(3.6) ≈ +1.633!' },
          { label: 'D', text: String.raw`$1.814$`, explanation: 'Forgot the Chain Rule factor 0.9: -4.1 sin(3.6) ≈ 1.814!' },
          { label: 'E', text: String.raw`$2.978$`, explanation: 'Incorrect mode or formula.' },
        ],
        hint1: String.raw`Differentiate $v(t) = 3 + 4.1\cos(0.9t)$ using the Chain Rule (or ` + '`nDeriv`' + ` on TI-84 in Radian mode)!`,
        hint2: String.raw`$a(t) = -4.1(0.9)\sin(0.9t) = -3.69\sin(0.9t)$. Since $3.6\text{ rad} > \pi$, $\sin(3.6) < 0$, making $a(4) > 0$!`,
        solution: String.raw`$$a(t) = v'(t) = -4.1(0.9)\sin(0.9t) = -3.69\sin(0.9t)$$
At $t = 4$ (in radians):
$$a(4) = -3.69\sin(3.6) \approx 1.633 \quad \textbf{(Choice C)}$$`,
      },
    ],
  },

  // =========================================================================
  // SECTION 4: Teacher PowerPoint Extras — Implicit Diff & Related Rates
  // =========================================================================
  {
    id: 'pptx-3.2-ap-frqs',
    module: 'knowledge-checks',
    section: 'Teacher PowerPoint Extras: Implicit Diff & Related Rates (3.2 & 4.4/4.5 PPTX)',
    badge: '3.2 PPTX Slides 2, 7, 17, 23 & 25 • Implicit & AP FRQs',
    title: 'Ellipse Tangent, Normal Line, 2004 AB #4, & 2005 AB #5 Form B',
    calculator: 'non-calculator',
    stem: String.raw`Extra examples and official AP FRQs from the teacher's **3.2 Implicit Differentiation** PowerPoint:`,
    watchOut: String.raw`A **normal line** is perpendicular to the tangent line, so its slope is the **negative reciprocal** $m_{\text{normal}} = -\dfrac{1}{m_{\text{tangent}}}$!`,
    inMockTest: true,
    parts: [
      {
        partId: 'ellipse-warmup',
        label: 'Slide 2 Warm-Up: Ellipse Tangent Line',
        prompt: String.raw`Find the equation of the tangent line to $4x^2 + 9y^2 = 2$ at $\left(\dfrac{1}{2}, \dfrac{1}{3}\right)$.`,
        inputType: 'equation',
        placeholder: 'e.g. y - 1/3 = (-2/3)(x - 1/2)',
        equationConfig: { type: 'line', slope: -2 / 3, point: [0.5, 1 / 3] },
        acceptedStrings: ['y-1/3=-2/3(x-1/2)', 'y-1/3=(-2/3)(x-1/2)', 'y=-2/3x+2/3'],
        hint1: String.raw`Differentiate $4x^2 + 9y^2 = 2$ implicitly: $8x + 18y\frac{dy}{dx} = 0$.`,
        hint2: String.raw`At $\left(\frac{1}{2}, \frac{1}{3}\right)$: $8\left(\frac{1}{2}\right) + 18\left(\frac{1}{3}\right)y' = 0 \implies 4 + 6y' = 0 \implies y' = -\frac{2}{3}$.`,
        solution: String.raw`$$8x + 18y\frac{dy}{dx} = 0 \implies \left.\frac{dy}{dx}\right|_{(1/2, 1/3)} = -\frac{8(1/2)}{18(1/3)} = -\frac{4}{6} = -\frac{2}{3}$$
Tangent line:
$$y - \frac{1}{3} = -\frac{2}{3}\left(x - \frac{1}{2}\right) \quad \left(\text{or } y = -\frac{2}{3}x + \frac{2}{3}\right)$$`,
      },
      {
        partId: 'normal-line',
        label: 'Slide 7: Normal Line to Implicit Curve',
        prompt: String.raw`Given $(y - 5)^5 = x^2 + 2xy + 6$, write the equation of the **normal line** at $(-7, 4)$.`,
        inputType: 'equation',
        placeholder: 'e.g. y - 4 = (19/6)(x + 7)',
        equationConfig: { type: 'line', slope: 19 / 6, point: [-7, 4] },
        acceptedStrings: ['y-4=19/6(x+7)', 'y-4=(19/6)(x+7)'],
        hint1: String.raw`First find the tangent slope $m_{\text{tan}} = \left.\frac{dy}{dx}\right|_{(-7, 4)}$, then flip and negate to get $m_{\text{normal}} = -\frac{1}{m_{\text{tan}}}$!`,
        hint2: String.raw`$5(y-5)^4 y' = 2x + 2xy' + 2y \implies$ at $(-7, 4)$, $5(1)y' = -14 - 14y' + 8 \implies 19y' = -6 \implies m_{\text{tan}} = -\frac{6}{19}$, so $m_{\text{normal}} = +\frac{19}{6}$!`,
        solution: String.raw`Differentiate implicitly and evaluate at $(-7, 4)$:
$$5(y - 5)^4 y' = 2x + 2xy' + 2y \implies 5(-1)^4 y' = -14 - 14y' + 8 \implies 19y' = -6 \implies m_{\text{tan}} = -\frac{6}{19}$$
The normal line has perpendicular slope $m_{\text{normal}} = +\frac{19}{6}$:
$$y - 4 = \frac{19}{6}(x + 7)$$`,
      },
      {
        partId: 'frq-2004-4c',
        label: 'Slide 25: 2004 AP AB #4(b)–(c)',
        prompt: String.raw`For $x^2 + 4y^2 = 7 + 3xy$, we have $\dfrac{dy}{dx} = \dfrac{3y - 2x}{8y - 3x}$. At $x = 3$, the point $P$ with a horizontal tangent is $(3, 2)$ (since $3y - 6 = 0 \implies y = 2$). Find $\dfrac{d^2y}{dx^2}$ at $P(3, 2)$.`,
        inputType: 'numeric',
        placeholder: 'e.g. -2/7',
        numericAnswer: -2 / 7,
        tolerance: 0.002,
        acceptedStrings: ['-2/7'],
        hint1: String.raw`Apply the Quotient Rule to $\frac{dy}{dx} = \frac{3y - 2x}{8y - 3x}$, and take advantage of $\left.\frac{dy}{dx}\right|_{(3, 2)} = 0$!`,
        hint2: String.raw`Since $3y - 2x = 0$ AND $y' = 0$ at $(3, 2)$, the entire second term of the Quotient Rule vanishes: $y'' = \frac{(3y' - 2)(8y - 3x) - 0}{(8y - 3x)^2} = \frac{-2}{8(2) - 3(3)}$!`,
        solution: String.raw`At $P(3, 2)$, $3y - 2x = 0$ and $\frac{dy}{dx} = 0$. Using the Quotient Rule:
$$\frac{d^2y}{dx^2} = \frac{(3y' - 2)(8y - 3x) - (3y - 2x)(8y' - 3)}{(8y - 3x)^2}$$
Substitute $x = 3$, $y = 2$, and $y' = 0$:
$$\left.\frac{d^2y}{dx^2}\right|_{(3, 2)} = \frac{(0 - 2)(16 - 9) - 0}{7^2} = \frac{-14}{49} = -\frac{2}{7}$$`,
      },
      {
        partId: 'frq-2005-5d',
        label: 'Slide 23: 2005 AP AB #5B(d) Curve Related Rates',
        prompt: String.raw`Let $x$ and $y$ be functions of time $t$ related by $y^2 = 2 + xy$ (where $\frac{dy}{dx} = \frac{y}{2y - x}$). At $t = 5$, $y = 3$ and $\dfrac{dy}{dt} = 6$. Find $\dfrac{dx}{dt}$ at $t = 5$.`,
        inputType: 'numeric',
        placeholder: 'e.g. 22/3 or 7.333',
        numericAnswer: 22 / 3,
        tolerance: 0.005,
        acceptedStrings: ['22/3'],
        hint1: String.raw`First plug $y = 3$ into $y^2 = 2 + xy$ to find $x$ at $t = 5$! Then use $\frac{dy}{dt} = \frac{dy}{dx}\cdot\frac{dx}{dt}$ (or differentiate $y^2 = 2 + xy$ wrt $t$).`,
        hint2: String.raw`$9 = 2 + 3x \implies x = \frac{7}{3}$. Then $2y\frac{dy}{dt} = x\frac{dy}{dt} + y\frac{dx}{dt} \implies 2(3)(6) = \frac{7}{3}(6) + 3\frac{dx}{dt}$!`,
        solution: String.raw`1. **Find $x$ when $y = 3$:** $3^2 = 2 + 3x \implies 3x = 7 \implies x = \frac{7}{3}$.
2. **Differentiate $y^2 = 2 + xy$ wrt $t$:**
   $$2y\frac{dy}{dt} = x\frac{dy}{dt} + y\frac{dx}{dt}$$
   $$2(3)(6) = \frac{7}{3}(6) + 3\frac{dx}{dt} \implies 36 = 14 + 3\frac{dx}{dt} \implies 3\frac{dx}{dt} = 22 \implies \frac{dx}{dt} = \frac{22}{3}$$`,
      },
    ],
  },
  {
    id: 'pptx-4.5-angles-and-police',
    module: 'knowledge-checks',
    section: 'Teacher PowerPoint Extras: Implicit Diff & Related Rates (3.2 & 4.4/4.5 PPTX)',
    badge: '4.4/4.5 PPTX Slides 13–18 • Angles & Radar',
    title: 'Hot-Air Balloon, Rocket, Hypotenuse Angle, & Police Cruiser Radar',
    calculator: 'allowed',
    stem: String.raw`Four classic angle and Pythagorean Related Rates problems from the **4.4 & 4.5 Related Rates** PowerPoint:`,
    watchOut: String.raw`In the Police Cruiser problem, the cruiser is **approaching** the intersection, so its distance $y$ from the intersection is **decreasing** ($\frac{dy}{dt} = -60\text{ mph}$, NEGATIVE!), while the radar distance $z$ is increasing ($\frac{dz}{dt} = +20\text{ mph}$)!`,
    parts: [
      {
        partId: 'balloon-s13',
        label: 'Slide 13: Range Finder Tracking Hot-Air Balloon',
        prompt: String.raw`A hot-air balloon rising straight up is tracked by a range finder $500\text{ ft}$ from lift-off. When the elevation angle $\theta$ is increasing at $0.14\text{ rad/min}$ and the balloon is $400\text{ ft}$ high, how fast is the balloon rising ($\frac{dh}{dt}$)?`,
        inputType: 'numeric',
        placeholder: 'e.g. 114.8',
        unitLabel: 'ft/min',
        numericAnswer: 114.8,
        tolerance: 0.05,
        acceptedStrings: ['114.8', '574/5'],
        hint1: String.raw`Use $\tan\theta = \frac{h}{500} \implies \sec^2\theta\frac{d\theta}{dt} = \frac{1}{500}\frac{dh}{dt}$.`,
        hint2: String.raw`At $h = 400$ and base $= 500$, $\tan\theta = \frac{4}{5}$, so $\sec^2\theta = 1 + \tan^2\theta = 1 + \frac{16}{25} = \frac{41}{25}$!`,
        solution: String.raw`$$\tan\theta = \frac{h}{500} \implies \sec^2\theta\frac{d\theta}{dt} = \frac{1}{500}\frac{dh}{dt}$$
When $h = 400\text{ ft}$, $\sec^2\theta = 1 + \left(\frac{400}{500}\right)^2 = 1 + \frac{16}{25} = \frac{41}{25}$:
$$\frac{dh}{dt} = 500\left(\frac{41}{25}\right)(0.14) = 20(41)(0.14) = 114.8\text{ ft/min}$$`,
      },
      {
        partId: 'rocket-s16',
        label: 'Slide 16: Observer 300 m From Rocket Launch',
        prompt: String.raw`An observer is $300\text{ meters}$ away from a rocket launch pad. The rocket rises at $150\text{ m/min}$. Find $\dfrac{d\theta}{dt}$ when the rocket is $400\text{ meters}$ above the ground.`,
        inputType: 'numeric',
        placeholder: 'e.g. 9/50 or 0.18',
        unitLabel: 'rad/min',
        numericAnswer: 0.18,
        tolerance: 0.002,
        acceptedStrings: ['9/50', '0.18'],
        hint1: String.raw`Use $\tan\theta = \frac{h}{300} \implies \sec^2\theta\frac{d\theta}{dt} = \frac{1}{300}\frac{dh}{dt}$.`,
        hint2: String.raw`With base $300\text{ m}$ and height $400\text{ m}$, the hypotenuse is $500\text{ m}$ ($3\text{–}4\text{–}5$ triangle!), so $\cos\theta = \frac{3}{5}$ and $\sec^2\theta = \frac{25}{9}$.`,
        solution: String.raw`$$\sec^2\theta\frac{d\theta}{dt} = \frac{1}{300}(150) = \frac{1}{2}$$
Since $\cos\theta = \frac{300}{500} = \frac{3}{5}$, $\sec^2\theta = \frac{25}{9}$:
$$\frac{d\theta}{dt} = \frac{1}{2}\cdot\frac{9}{25} = \frac{9}{50} = 0.18\text{ rad/min}$$`,
      },
      {
        partId: 'balloon-s17',
        label: 'Slide 17: Angle Rate From Hypotenuse Rate',
        prompt: String.raw`An observer stands $15\text{ ft}$ from a balloon launch point. The **distance $z$ between the observer and balloon** increases at $1\text{ ft/sec}$. Find $\dfrac{d\theta}{dt}$ when $z = 25\text{ ft}$.`,
        inputType: 'numeric',
        placeholder: 'e.g. 3/100 or 0.03',
        unitLabel: 'rad/sec',
        numericAnswer: 0.03,
        tolerance: 0.001,
        acceptedStrings: ['3/100', '0.03'],
        hint1: String.raw`Relate angle $\theta$, constant adjacent side $15$, and changing hypotenuse $z$: $\cos\theta = 15z^{-1}$!`,
        hint2: String.raw`Differentiate: $-\sin\theta\frac{d\theta}{dt} = -\frac{15}{z^2}\frac{dz}{dt}$. When $z = 25$ and adj $= 15$, opposite $= 20$, so $\sin\theta = \frac{20}{25} = \frac{4}{5}$!`,
        solution: String.raw`$$\cos\theta = \frac{15}{z} = 15z^{-1} \implies -\sin\theta\frac{d\theta}{dt} = -\frac{15}{z^2}\frac{dz}{dt}$$
At $z = 25\text{ ft}$, height $= \sqrt{25^2 - 15^2} = 20\text{ ft}$, so $\sin\theta = \frac{20}{25} = \frac{4}{5}$:
$$-\frac{4}{5}\frac{d\theta}{dt} = -\frac{15}{625}(1) = -\frac{3}{125} \implies \frac{d\theta}{dt} = \frac{3}{125}\cdot\frac{5}{4} = \frac{3}{100} = 0.03\text{ rad/sec}$$`,
      },
      {
        partId: 'police-s18',
        label: 'Slide 18: Police Cruiser Chasing Speeding Car',
        prompt: String.raw`A police cruiser approaching a right-angled intersection from the north at $60\text{ mph}$ chases a speeding car moving straight east. When the cruiser is $0.6\text{ mi}$ north and the car is $0.8\text{ mi}$ east, radar shows the distance between them is **increasing** at $20\text{ mph}$. What is the speed of the car?`,
        inputType: 'numeric',
        placeholder: 'e.g. 70',
        unitLabel: 'mph',
        numericAnswer: 70,
        tolerance: 0.01,
        hint1: String.raw`Write $x^2 + y^2 = z^2 \implies x\frac{dx}{dt} + y\frac{dy}{dt} = z\frac{dz}{dt}$. Remember the cruiser is getting *closer* to the intersection, so $\frac{dy}{dt} = -60$!`,
        hint2: String.raw`At $x = 0.8, y = 0.6$, $z = \sqrt{0.64 + 0.36} = 1.0\text{ mi}$. Solve $0.8\frac{dx}{dt} + 0.6(-60) = 1.0(20)$!`,
        solution: String.raw`$$x^2 + y^2 = z^2 \implies x\frac{dx}{dt} + y\frac{dy}{dt} = z\frac{dz}{dt}$$
Here $x = 0.8$, $y = 0.6 \implies z = 1.0\text{ mi}$, $\frac{dy}{dt} = -60\text{ mph}$ (approaching intersection!), and $\frac{dz}{dt} = +20\text{ mph}$:
$$0.8\frac{dx}{dt} + 0.6(-60) = 1.0(20) \implies 0.8\frac{dx}{dt} - 36 = 20 \implies 0.8\frac{dx}{dt} = 56 \implies \frac{dx}{dt} = 70\text{ mph}$$`,
      },
    ],
  },
  {
    id: 'pptx-4.5-ap-frqs-2002-2008-2003',
    module: 'knowledge-checks',
    section: 'Teacher PowerPoint Extras: Implicit Diff & Related Rates (3.2 & 4.4/4.5 PPTX)',
    badge: '4.4/4.5 PPTX Slides 31–36 • 2002, 2008 & 2003 FRQs',
    title: 'Evaporating Cone (2002), Oil Slick Cylinder (2008), & Coffeepot (2003)',
    calculator: 'allowed',
    stem: String.raw`Three official AP Calculus AB Cone & Cylinder FRQs featured in the teacher's **4.4 & 4.5 Related Rates** PowerPoint:`,
    watchOut: String.raw`Compare the two cylinders carefully: in **2008 Oil Slick**, BOTH $r$ and $h$ change with time (use Product Rule on $\pi r^2 h$!). In **2003 Coffeepot**, the glass pot has a fixed $r = 5\text{ in}$ (plug in $r = 5$ BEFORE differentiating)!`,
    inMockTest: true,
    parts: [
      {
        partId: 'cone-2002',
        label: 'Slide 31: 2002 AP FRQ #5(b) Evaporating Cone',
        prompt: String.raw`An open conical container has height $10\text{ cm}$ and top **diameter** $10\text{ cm}$. Water evaporates so depth $h$ changes at $\frac{dh}{dt} = -\frac{3}{10}\text{ cm/hr}$. Find $\dfrac{dV}{dt}$ when $h = 5\text{ cm}$. *(Note: in part (a), $V(5) = \frac{1}{3}\pi(2.5)^2(5) = \frac{125\pi}{12}\text{ cm}^3$.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. -15*pi/8 or -5.890',
        unitLabel: 'cm³/hr',
        numericAnswer: (-15 * Math.PI) / 8,
        tolerance: 0.01,
        acceptedStrings: ['-15*pi/8', '-15pi/8'],
        hint1: String.raw`Top diameter $10\text{ cm}$ means top radius $R = 5\text{ cm}$, so $\frac{r}{h} = \frac{5}{10} = \frac{1}{2} \implies r = \frac{h}{2}$. Substitute into $V = \frac{1}{3}\pi r^2 h$ first!`,
        hint2: String.raw`$V = \frac{1}{3}\pi\left(\frac{h}{2}\right)^2 h = \frac{\pi}{12}h^3 \implies \frac{dV}{dt} = \frac{\pi}{4}h^2\frac{dh}{dt}$. Plug in $h = 5$ and $\frac{dh}{dt} = -\frac{3}{10}$.`,
        solution: String.raw`Since $R = 5\text{ cm}$ and $H = 10\text{ cm}$, $\frac{r}{h} = \frac{5}{10} \implies r = \frac{h}{2}$:
$$V = \frac{1}{3}\pi\left(\frac{h}{2}\right)^2 h = \frac{\pi}{12}h^3 \implies \frac{dV}{dt} = \frac{\pi}{4}h^2\frac{dh}{dt}$$
At $h = 5\text{ cm}$ and $\frac{dh}{dt} = -\frac{3}{10}\text{ cm/hr}$:
$$\frac{dV}{dt} = \frac{\pi}{4}(25)\left(-\frac{3}{10}\right) = -\frac{15\pi}{8} \approx -5.890\text{ cm}^3/\text{hr}$$`,
      },
      {
        partId: 'oilslick-2008',
        label: 'Slide 33: 2008 AP FRQ #3(a) Leaking Oil Slick (Calculator — 3 Decimals!)',
        prompt: String.raw`An oil slick forms a cylinder $V = \pi r^2 h$ with **both $r$ and $h$ changing** with time, and $\frac{dV}{dt} = 2000\text{ cm}^3/\text{min}$. When $r = 100\text{ cm}$ and $h = 0.5\text{ cm}$, $\frac{dr}{dt} = 2.5\text{ cm/min}$. Find $\dfrac{dh}{dt}$ (in $\text{cm/min}$, accurate to 3 decimal places).`,
        inputType: 'numeric',
        placeholder: 'e.g. 0.039 or 0.0387',
        unitLabel: 'cm/min',
        numericAnswer: 1 / (5 * Math.PI) - 1 / 40,
        tolerance: 0.001,
        acceptedStrings: ['0.039', '0.038', '0.0387', '1/(5*pi)-1/40', '(8-pi)/(40*pi)'],
        hint1: String.raw`Differentiate $V = \pi r^2 h$ using the **Product Rule**: $\frac{dV}{dt} = \pi\left(2rh\frac{dr}{dt} + r^2\frac{dh}{dt}\right)$!`,
        hint2: String.raw`Substitute $2000 = \pi\left(2(100)(0.5)(2.5) + 100^2\frac{dh}{dt}\right) = \pi\left(250 + 10000\frac{dh}{dt}\right)$ and solve for $\frac{dh}{dt}$!`,
        solution: String.raw`Apply the Product Rule to $V = \pi r^2 h$:
$$\frac{dV}{dt} = \pi\left(2rh\frac{dr}{dt} + r^2\frac{dh}{dt}\right)$$
Plug in $\frac{dV}{dt} = 2000$, $r = 100$, $h = 0.5$, and $\frac{dr}{dt} = 2.5$:
$$2000 = \pi\left(2(100)(0.5)(2.5) + 10000\frac{dh}{dt}\right) = 250\pi + 10000\pi\frac{dh}{dt}$$
$$\frac{dh}{dt} = \frac{2000 - 250\pi}{10000\pi} = \frac{1}{5\pi} - \frac{1}{40} \approx 0.03866 \approx \mathbf{0.039\text{ cm/min}} \quad (\text{or } 0.038)$$`,
      },
      {
        partId: 'coffeepot-2003',
        label: 'Slide 35: 2003 AP FRQ #5(a) Cylindrical Coffeepot',
        prompt: String.raw`A cylindrical coffeepot has constant radius $r = 5\text{ inches}$. The volume $V$ of coffee is changing at the rate $\frac{dV}{dt} = -5\pi\sqrt{h}\text{ in}^3/\text{sec}$. Show that $\dfrac{dh}{dt} = -\dfrac{\sqrt{h}}{5}$.`,
        inputType: 'frq-rubric',
        rubricItems: [
          { id: 'const-r', points: 1, criterion: 'Substituted constant radius r = 5 into V = πr²h to get V = 25πh, then differentiated wrt t: dV/dt = 25π(dh/dt)' },
          { id: 'solve-dh', points: 1, criterion: 'Equated 25π(dh/dt) = -5π√h and divided by 25π to show dh/dt = -√h / 5' },
        ],
        modelResponse: String.raw`Since the coffeepot is a cylinder with constant radius $r = 5$, $V = \pi(5)^2 h = 25\pi h$. Differentiating wrt $t$ gives $\frac{dV}{dt} = 25\pi\frac{dh}{dt}$. Setting $25\pi\frac{dh}{dt} = -5\pi\sqrt{h}$ yields $\frac{dh}{dt} = -\frac{5\pi\sqrt{h}}{25\pi} = -\frac{\sqrt{h}}{5}$.`,
        hint1: String.raw`Plug the constant radius $r = 5$ into $V = \pi r^2 h$ *before* differentiating!`,
        hint2: String.raw`$V = 25\pi h \implies \frac{dV}{dt} = 25\pi\frac{dh}{dt}$. Set this equal to $-5\pi\sqrt{h}$.`,
        solution: String.raw`Because $r = 5\text{ in}$ is constant:
$$V = \pi(5)^2 h = 25\pi h \implies \frac{dV}{dt} = 25\pi\frac{dh}{dt}$$
Substitute $\frac{dV}{dt} = -5\pi\sqrt{h}$:
$$25\pi\frac{dh}{dt} = -5\pi\sqrt{h} \implies \frac{dh}{dt} = -\frac{\sqrt{h}}{5}$$`,
      },
    ],
  },
  {
    id: 'pptx-4.5-hw-solution-guide-extras',
    module: 'knowledge-checks',
    section: 'Teacher PowerPoint Extras: Implicit Diff & Related Rates (3.2 & 4.4/4.5 PPTX)',
    badge: '4.5 MCQ Solution Guide PPTX • 5 Unique Problems',
    title: 'Sphere Surface-to-Volume, Dual-Rate Cone, 40-ft Slipping Ladder, & Train',
    calculator: 'allowed',
    stem: String.raw`The 5 unique problems from the teacher's **4.5 Related Rates MCQ Solution Guide** PowerPoint (the other 5 appear in the 35-MCQ packet next!):`,
    parts: [
      {
        partId: 'sphere-100pi',
        label: 'Guide #2: Sphere Volume Rate When S = 100π',
        prompt: String.raw`The radius $r$ of a sphere increases at $0.3\text{ in/sec}$. When the surface area $S = 4\pi r^2$ becomes $100\pi\text{ in}^2$, what is the rate of increase (in $\text{in}^3/\text{sec}$) in the volume $V = \frac{4}{3}\pi r^3$?`,
        inputType: 'numeric',
        placeholder: 'e.g. 30*pi or 94.248',
        unitLabel: 'in³/sec',
        numericAnswer: 30 * Math.PI,
        tolerance: 0.05,
        acceptedStrings: ['30*pi', '30pi'],
        hint1: String.raw`Notice a cool shortcut: $\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt} = S \cdot \frac{dr}{dt}$! (Or solve $4\pi r^2 = 100\pi \implies r = 5$ first!)`,
        hint2: String.raw`$\frac{dV}{dt} = (100\pi)(0.3) = 30\pi$.`,
        solution: String.raw`From $S = 4\pi r^2 = 100\pi$, we have $r = 5\text{ in}$ (or directly $4\pi r^2 = 100\pi$):
$$\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt} = (100\pi)(0.3) = 30\pi \approx 94.248\text{ in}^3/\text{sec}$$`,
      },
      {
        partId: 'cone-dual',
        label: 'Guide #3: Expanding Cone With Both r and h Increasing',
        prompt: String.raw`For a cone $V = \frac{1}{3}\pi r^2 h$, **both** $r$ and $h$ increase at a constant rate of $\frac{1}{2}\text{ cm/sec}$. At what rate (in $\text{cm}^3/\text{sec}$) is $V$ increasing when $h = 9\text{ cm}$ and $r = 6\text{ cm}$?`,
        inputType: 'numeric',
        placeholder: 'e.g. 24*pi or 75.398',
        unitLabel: 'cm³/sec',
        numericAnswer: 24 * Math.PI,
        tolerance: 0.05,
        acceptedStrings: ['24*pi', '24pi'],
        hint1: String.raw`Use the **Product Rule** on $V = \frac{\pi}{3}(r^2 \cdot h)$ since both $r$ and $h$ vary independently!`,
        hint2: String.raw`$\frac{dV}{dt} = \frac{\pi}{3}\left(2rh\frac{dr}{dt} + r^2\frac{dh}{dt}\right) = \frac{\pi}{3}\left(2(6)(9)(\frac{1}{2}) + 36(\frac{1}{2})\right)$.`,
        solution: String.raw`$$\frac{dV}{dt} = \frac{\pi}{3}\left(2rh\frac{dr}{dt} + r^2\frac{dh}{dt}\right) = \frac{\pi}{3}\left(2(6)(9)\left(\frac{1}{2}\right) + 6^2\left(\frac{1}{2}\right)\right) = \frac{\pi}{3}(54 + 18) = 24\pi\text{ cm}^3/\text{sec}$$`,
      },
      {
        partId: 'circle-96pi',
        label: 'Guide #4: Circular Region Radius Rate',
        prompt: String.raw`The area of a circular region increases at $96\pi\text{ m}^2/\text{sec}$. When the area is $64\pi\text{ m}^2$, how fast (in $\text{m/sec}$) is the radius increasing?`,
        inputType: 'numeric',
        placeholder: 'e.g. 6',
        unitLabel: 'm/sec',
        numericAnswer: 6,
        tolerance: 0.001,
        hint1: String.raw`Find $r$ from $\pi r^2 = 64\pi \implies r = 8\text{ m}$, then use $\frac{dA}{dt} = 2\pi r\frac{dr}{dt}$.`,
        hint2: String.raw`$96\pi = 2\pi(8)\frac{dr}{dt} = 16\pi\frac{dr}{dt}$.`,
        solution: String.raw`When $A = \pi r^2 = 64\pi$, $r = 8\text{ m}$. Differentiating $A = \pi r^2$:
$$96\pi = 2\pi(8)\frac{dr}{dt} \implies \frac{dr}{dt} = \frac{96\pi}{16\pi} = 6\text{ m/sec}$$`,
      },
      {
        partId: 'ladder-40',
        label: 'Guide #9: 40-Foot Slipping Ladder Rate Ratio (AP MCQ)',
        prompt: String.raw`$PQ$ represents a $40\text{-foot}$ ladder with top $P$ against a vertical wall and base $Q$ on level ground ($RQ = x$). If the ladder slips down the wall, what is the distance $RQ$ at the instant when $Q$ moves along the ground **$\dfrac{3}{4}$ as fast as** $P$ moves down the wall?`,
        inputType: 'mcq',
        correctIndex: 4,
        options: [
          { label: 'A', text: String.raw`$\dfrac{6}{5}\sqrt{10}$`, explanation: 'Incorrect substitution.' },
          { label: 'B', text: String.raw`$\dfrac{8}{5}\sqrt{10}$`, explanation: 'Incorrect substitution.' },
          { label: 'C', text: String.raw`$\dfrac{80}{\sqrt{7}}$`, explanation: 'Used x² - y² instead of x² + y² = 40².' },
          { label: 'D', text: String.raw`$24$`, explanation: '24 ft is the vertical height y = (3/4)(32), whereas the question asks for horizontal distance RQ = x!' },
          { label: 'E', text: String.raw`$32$`, explanation: 'Correct! dx/dt = -(3/4)dy/dt in x(dx/dt) + y(dy/dt) = 0 gives y = (3/4)x ⇒ x² + (9/16)x² = 1600 ⇒ (25/16)x² = 1600 ⇒ x = 32 ft!' },
        ],
        hint1: String.raw`Since $x$ increases while $y$ decreases, $\frac{dx}{dt} = -\frac{3}{4}\frac{dy}{dt}$! Substitute this into $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$.`,
        hint2: String.raw`$x\left(-\frac{3}{4}\frac{dy}{dt}\right) + y\frac{dy}{dt} = 0 \implies y = \frac{3}{4}x$. Now solve $x^2 + \left(\frac{3}{4}x\right)^2 = 40^2$!`,
        solution: String.raw`1. **Relate rates:** $x^2 + y^2 = 40^2 \implies x\frac{dx}{dt} + y\frac{dy}{dt} = 0$.
2. **Use $\frac{dx}{dt} = -\frac{3}{4}\frac{dy}{dt}$:**
   $$-\frac{3}{4}x\frac{dy}{dt} + y\frac{dy}{dt} = 0 \implies y = \frac{3}{4}x$$
3. **Substitute into $x^2 + y^2 = 1600$:**
   $$x^2 + \frac{9}{16}x^2 = 1600 \implies \frac{25}{16}x^2 = 1600 \implies x^2 = 1024 \implies RQ = x = 32\text{ ft} \quad \textbf{(Choice E)}$$`,
      },
      {
        partId: 'train-s11',
        label: 'Guide #10: Eastbound Train & Observer (Calculator)',
        prompt: String.raw`A railroad track and a road cross at right angles. An observer stands $70\text{ m}$ south of the crossing and watches an eastbound train traveling at $60\text{ m/sec}$. At how many $\text{m/sec}$ is the train moving away from the observer $4\text{ seconds}$ after passing through the intersection?`,
        inputType: 'numeric',
        placeholder: 'e.g. 57.6',
        unitLabel: 'm/sec',
        numericAnswer: 57.6,
        tolerance: 0.01,
        acceptedStrings: ['57.6', '288/5'],
        hint1: String.raw`At $t = 4\text{ sec}$, $x = 60(4) = 240\text{ m}$ while $y = 70\text{ m}$ is constant ($\frac{dy}{dt} = 0$). Recognize the $7\text{–}24\text{–}25$ right triangle!`,
        hint2: String.raw`$z = \sqrt{240^2 + 70^2} = 250\text{ m}$, and $x^2 + 70^2 = z^2 \implies \frac{dz}{dt} = \frac{x}{z}\frac{dx}{dt} = \frac{240}{250}(60)$.`,
        solution: String.raw`At $t = 4\text{ s}$, $x = 60(4) = 240\text{ m}$ and $y = 70\text{ m}$ (constant), so $z = \sqrt{240^2 + 70^2} = 250\text{ m}$:
$$x^2 + 70^2 = z^2 \implies 2x\frac{dx}{dt} = 2z\frac{dz}{dt} \implies \frac{dz}{dt} = \frac{240}{250}(60) = \frac{288}{5} = 57.6\text{ m/sec}$$`,
      },
    ],
  },
];
