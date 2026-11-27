import { Problem } from '../types';

export const LESSON_3_2_PROBLEMS: Problem[] = [
  {
    id: '3.2-circle-day1',
    module: 'lesson-3-2',
    section: 'Day 1: Foundations & First Derivatives (Pages 9–12)',
    badge: 'Page 9 • Day 1 Intro',
    title: 'Unit Circle Implicit Differentiation & Tangent Slopes',
    calculator: 'non-calculator',
    visual: 'unit-circle-diagram',
    stem: String.raw`Consider the equation of the unit circle $x^2 + y^2 = 1$. Differentiating implicitly with respect to $x$ uses the Chain Rule on $y^2$!`,
    watchOut: String.raw`Every time you differentiate a $y$-term with respect to $x$, multiply by $\frac{dy}{dx}$! Also use Leibniz bar notation $\left.\frac{dy}{dx}\right|_{(x_0, y_0)}$ when evaluating at a point.`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a): Implicit Derivative',
        prompt: String.raw`Find $\dfrac{dy}{dx}$ in terms of $x$ and $y$ for $x^2 + y^2 = 1$.`,
        inputType: 'algebraic',
        placeholder: 'e.g. -x/y',
        algebraicExpr: '-x/y',
        variables: ['x', 'y'],
        acceptedStrings: ['-x/y', '-(x/y)'],
        hint1: String.raw`Differentiate both sides with respect to $x$: $\frac{d}{dx}[x^2] + \frac{d}{dx}[y^2] = \frac{d}{dx}[1]$.`,
        hint2: String.raw`$2x + 2y\frac{dy}{dx} = 0$. Isolate $\frac{dy}{dx}$.`,
        solution: String.raw`$$2x + 2y\frac{dy}{dx} = 0 \implies 2y\frac{dy}{dx} = -2x \implies \frac{dy}{dx} = -\frac{x}{y}$$`,
      },
      {
        partId: 'b',
        label: 'Part (b): Slope at (√2/2, √2/2)',
        prompt: String.raw`Evaluate $\left.\dfrac{dy}{dx}\right|_{\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)}$ and note the slopes at $(0, 1)$ and $(0, -1)$. *(Enter the numeric slope at $\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. -1',
        numericAnswer: -1,
        tolerance: 0.001,
        hint1: String.raw`Substitute $x = \frac{\sqrt{2}}{2}$ and $y = \frac{\sqrt{2}}{2}$ into $\frac{dy}{dx} = -\frac{x}{y}$.`,
        hint2: String.raw`Since $x = y = \frac{\sqrt{2}}{2}$, the ratio $-\frac{x}{y} = -1$.`,
        solution: String.raw`$$\left.\frac{dy}{dx}\right|_{\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)} = -\frac{\sqrt{2}/2}{\sqrt{2}/2} = -1$$
At $(0, 1)$ and $(0, -1)$, $\frac{dy}{dx} = -\frac{0}{\pm 1} = 0$, giving **horizontal tangent lines** ($y = 1$ and $y = -1$).`,
      },
    ],
  },
  {
    id: '3.2-d-dx-drills',
    module: 'lesson-3-2',
    section: 'Day 1: Foundations & First Derivatives (Pages 9–12)',
    badge: 'Page 10 • Example 1 Drills',
    title: 'Differentiating Implicit Terms With Respect to x',
    calculator: 'non-calculator',
    stem: String.raw`Practice applying $\dfrac{d}{dx}$ to expressions involving $x$ and $y$ (where $y$ is a differentiable function of $x$). *(Type ` + '`dydx`' + ` or ` + '`dy/dx`' + ` for $\frac{dy}{dx}$!)*`,
    parts: [
      {
        partId: 'a',
        label: 'Drill (a)',
        prompt: String.raw`Find $\dfrac{d}{dx}\left[x^3\right]$.`,
        inputType: 'algebraic',
        placeholder: 'e.g. 3x^2',
        algebraicExpr: '3*(x^2)',
        variables: ['x'],
        hint1: String.raw`Since the variable $x$ matches $\frac{d}{dx}$, simply apply the standard Power Rule (no $\frac{dy}{dx}$ needed).`,
        hint2: String.raw`$\frac{d}{dx}[x^n] = nx^{n-1}$ with $n = 3$.`,
        solution: String.raw`$$\frac{d}{dx}\left[x^3\right] = 3x^2$$`,
      },
      {
        partId: 'b',
        label: 'Drill (b)',
        prompt: String.raw`Find $\dfrac{d}{dx}\left[y^3\right]$. *(Use ` + '`dy/dx`' + ` for $\frac{dy}{dx}$.)*`,
        inputType: 'algebraic',
        placeholder: 'e.g. 3y^2 * dy/dx',
        algebraicExpr: '3*(y^2)*dydx',
        variables: ['y', 'dydx'],
        acceptedStrings: ['3y^2*dy/dx', '3y^2(dy/dx)', '3y^2dydx'],
        hint1: String.raw`Use the Chain Rule: $\frac{d}{dx}[f(y)] = f'(y) \cdot \frac{dy}{dx}$.`,
        hint2: String.raw`Differentiate the outer cube power ($3y^2$) and multiply by the inside derivative $\frac{dy}{dx}$.`,
        solution: String.raw`$$\frac{d}{dx}\left[y^3\right] = 3y^2 \cdot \frac{dy}{dx}$$`,
      },
      {
        partId: 'c',
        label: 'Drill (c)',
        prompt: String.raw`Find $\dfrac{d}{dx}\left[x + y\right]$. *(Use ` + '`dy/dx`' + ` for $\frac{dy}{dx}$.)*`,
        inputType: 'algebraic',
        placeholder: 'e.g. 1 + dy/dx',
        algebraicExpr: '1 + dydx',
        variables: ['dydx'],
        acceptedStrings: ['1+dy/dx', 'dy/dx+1'],
        hint1: String.raw`Differentiate term-by-term with respect to $x$: $\frac{d}{dx}[x] + \frac{d}{dx}[y]$.`,
        hint2: String.raw`$\frac{d}{dx}[x] = 1$ and $\frac{d}{dx}[y] = \frac{dy}{dx}$.`,
        solution: String.raw`$$\frac{d}{dx}[x + y] = 1 + \frac{dy}{dx}$$`,
      },
      {
        partId: 'd',
        label: 'Drill (d)',
        prompt: String.raw`Find $\dfrac{d}{dx}\left[xy^2\right]$. *(Use ` + '`dy/dx`' + ` for $\frac{dy}{dx}$.)*`,
        inputType: 'algebraic',
        placeholder: 'e.g. 2xy * dy/dx + y^2',
        algebraicExpr: '2*x*y*dydx + y^2',
        variables: ['x', 'y', 'dydx'],
        acceptedStrings: ['2xy*dy/dx+y^2', 'y^2+2xy*dy/dx', 'x*2y*dy/dx+y^2'],
        hint1: String.raw`Apply the **Product Rule** $\frac{d}{dx}[u \cdot v] = u \cdot \frac{dv}{dx} + v \cdot \frac{du}{dx}$ with $u = x$ and $v = y^2$.`,
        hint2: String.raw`$\frac{du}{dx} = 1$ and $\frac{dv}{dx} = 2y\frac{dy}{dx}$.`,
        solution: String.raw`$$\frac{d}{dx}\left[xy^2\right] = x \cdot \left(2y\frac{dy}{dx}\right) + y^2 \cdot (1) = 2xy\frac{dy}{dx} + y^2$$`,
      },
    ],
  },
  {
    id: '3.2-p10-ex1',
    module: 'lesson-3-2',
    section: 'Day 1: Foundations & First Derivatives (Pages 9–12)',
    badge: 'Page 10 • Example 1 (Curve)',
    title: 'Implicit Curve y³ + y² − 5y − x² = −4',
    calculator: 'non-calculator',
    stem: String.raw`Given the equation $y^3 + y^2 - 5y - x^2 = -4$, notice this equation cannot be solved explicitly for $y = \dots$, so we use implicit differentiation.`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`Determine $\dfrac{dy}{dx}$ for this relation.`,
        inputType: 'algebraic',
        placeholder: 'e.g. 2x / (3y^2 + 2y - 5)',
        algebraicExpr: '(2*x)/(3*(y^2) + 2*y - 5)',
        variables: ['x', 'y'],
        hint1: String.raw`Differentiate every term wrt $x$, remembering $\frac{dy}{dx}$ on all three $y$-terms!`,
        hint2: String.raw`$3y^2\frac{dy}{dx} + 2y\frac{dy}{dx} - 5\frac{dy}{dx} - 2x = 0$. Factor out $\frac{dy}{dx}$.`,
        solution: String.raw`$$3y^2\frac{dy}{dx} + 2y\frac{dy}{dx} - 5\frac{dy}{dx} - 2x = 0$$
$$\left(3y^2 + 2y - 5\right)\frac{dy}{dx} = 2x \implies \frac{dy}{dx} = \frac{2x}{3y^2 + 2y - 5}$$`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`Write the equation of the tangent line to the graph at $(-2, 0)$.`,
        inputType: 'equation',
        placeholder: 'e.g. y = (4/5)(x + 2)',
        equationConfig: { type: 'line', slope: 0.8, point: [-2, 0] },
        acceptedStrings: ['y=(4/5)(x+2)', 'y-0=(4/5)(x+2)', 'y=4/5(x+2)', 'y=0.8(x+2)', 'y=4/5x+8/5'],
        hint1: String.raw`Evaluate $\left.\frac{dy}{dx}\right|_{(-2, 0)}$ to get the slope $m$, then use point-slope form $y - y_1 = m(x - x_1)$.`,
        hint2: String.raw`At $(-2, 0)$: $m = \frac{2(-2)}{3(0)^2 + 2(0) - 5} = \frac{-4}{-5} = \frac{4}{5}$.`,
        solution: String.raw`$$\left.\frac{dy}{dx}\right|_{(-2, 0)} = \frac{2(-2)}{0 + 0 - 5} = \frac{-4}{-5} = \frac{4}{5}$$
Tangent line at $(-2, 0)$:
$$y - 0 = \frac{4}{5}(x + 2) \quad \left(\text{or } y = \frac{4}{5}x + \frac{8}{5}\right)$$`,
      },
      {
        partId: 'c',
        label: 'Part (c)',
        prompt: String.raw`Evaluate $\dfrac{dy}{dx}$ at $(1, 1)$ and write the equation of the tangent line at $(1, 1)$.`,
        inputType: 'equation',
        placeholder: 'e.g. x = 1',
        equationConfig: { type: 'vertical', constantValue: 1 },
        acceptedStrings: ['x=1'],
        hint1: String.raw`Substitute $(1, 1)$ into $\frac{2x}{3y^2 + 2y - 5}$. What happens when the denominator is $0$ and numerator is nonzero?`,
        hint2: String.raw`At $(1, 1)$, $\frac{2(1)}{3 + 2 - 5} = \frac{2}{0}$ (undefined $\implies$ **vertical tangent line**!). What is the equation of a vertical line through $(1, 1)$?`,
        solution: String.raw`At $(1, 1)$: numerator $= 2(1) = 2 \neq 0$, denominator $= 3(1)^2 + 2(1) - 5 = 0$.
Therefore the tangent line is **vertical**, with equation:
$$x = 1$$`,
      },
    ],
  },
  {
    id: '3.2-p11-examples-mcqs',
    module: 'lesson-3-2',
    section: 'Day 1: Foundations & First Derivatives (Pages 9–12)',
    badge: 'Page 11 • Examples 2–3 & Quick-Slope MCQs',
    title: 'Product/Trig Implicit Derivatives & Quick-Slope MCQs',
    calculator: 'non-calculator',
    stem: String.raw`Solve Examples 2 & 3 and the 3 AP Multiple-Choice implicit differentiation questions from Page 11.`,
    watchOut: String.raw`**Quick-Slope Shortcut (MCQ ONLY — NEVER on an FRQ!):** When an MCQ asks only for the numerical slope at $(x_0, y_0)$, differentiate implicitly and plug in $(x_0, y_0)$ *immediately* before doing heavy algebra! Also watch minus signs in front of products like $-3xy$: wrap the Product Rule in brackets $-[3x\frac{dy}{dx} + 3y]$!`,
    inMockTest: true,
    parts: [
      {
        partId: 'ex2',
        label: 'Example 2',
        prompt: String.raw`Find $\dfrac{dy}{dx}$ for $x^2 - 3xy + y^2 = -1$.`,
        inputType: 'algebraic',
        placeholder: 'e.g. (3y - 2x) / (2y - 3x)',
        algebraicExpr: '(3*y - 2*x)/(2*y - 3*x)',
        variables: ['x', 'y'],
        hint1: String.raw`Apply the Product Rule to $3xy$ inside brackets so you distribute the negative sign cleanly!`,
        hint2: String.raw`$2x - \left(3x\frac{dy}{dx} + 3y\right) + 2y\frac{dy}{dx} = 0 \implies (2y - 3x)\frac{dy}{dx} = 3y - 2x$.`,
        solution: String.raw`$$2x - 3x\frac{dy}{dx} - 3y + 2y\frac{dy}{dx} = 0$$
$$(2y - 3x)\frac{dy}{dx} = 3y - 2x \implies \frac{dy}{dx} = \frac{3y - 2x}{2y - 3x} \quad \left(\text{or } \frac{2x - 3y}{3x - 2y}\right)$$`,
      },
      {
        partId: 'ex3',
        label: 'Example 3',
        prompt: String.raw`Find $\dfrac{dy}{dx}$ for $\sin x = x(1 + \tan y)$.`,
        inputType: 'algebraic',
        placeholder: 'e.g. (cos(x) - 1 - tan(y)) / (x * sec(y)^2)',
        algebraicExpr: '(cos(x) - 1 - tan(y))/(x * (sec(y)^2))',
        variables: ['x', 'y'],
        hint1: String.raw`Use the Product Rule on the right side $x \cdot (1 + \tan y)$, and remember $\frac{d}{dx}[\tan y] = \sec^2(y)\frac{dy}{dx}$!`,
        hint2: String.raw`$\cos x = 1\cdot(1 + \tan y) + x\cdot\left(\sec^2 y \frac{dy}{dx}\right)$. Isolate $\frac{dy}{dx}$.`,
        solution: String.raw`$$\cos x = (1 + \tan y) + x\sec^2(y)\frac{dy}{dx}$$
$$\frac{dy}{dx} = \frac{\cos x - 1 - \tan y}{x\sec^2 y}$$`,
      },
      {
        partId: 'mcq0',
        label: 'MCQ: sin x = eʸ',
        prompt: String.raw`If $\sin x = e^y$ for $0 < x < \pi$, what is $\dfrac{dy}{dx}$ **in terms of $x$**?`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          { label: 'A', text: String.raw`$-\tan x$`, explanation: 'Incorrect reciprocal and sign.' },
          { label: 'B', text: String.raw`$-\cot x$`, explanation: 'Incorrect negative sign: derivative of sin x is +cos x.' },
          { label: 'C', text: String.raw`$\cot x$`, explanation: 'Correct! cos(x) = e^y dy/dx ⇒ dy/dx = cos(x)/e^y = cos(x)/sin(x) = cot x.' },
          { label: 'D', text: String.raw`$\tan x$`, explanation: 'Incorrect: sin(x)/cos(x) is upside down; dy/dx = cos(x)/sin(x).' },
          { label: 'E', text: String.raw`$\csc x$`, explanation: 'Incorrect: forgot cos(x) in the numerator when differentiating sin(x).' },
        ],
        hint1: String.raw`Differentiate implicitly ($\cos x = e^y \frac{dy}{dx}$), then substitute $e^y = \sin x$ from the original equation!`,
        hint2: String.raw`$\frac{dy}{dx} = \frac{\cos x}{e^y} = \frac{\cos x}{\sin x}$. Which trig function equals $\frac{\cos x}{\sin x}$?`,
        solution: String.raw`Differentiate $\sin x = e^y$ with respect to $x$:
$$\cos x = e^y \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{\cos x}{e^y}$$
Substitute $e^y = \sin x$:
$$\frac{dy}{dx} = \frac{\cos x}{\sin x} = \cot x \quad \textbf{(Choice C)}$$`,
      },
      {
        partId: 'mcq1',
        label: 'Quick-Slope MCQ #1',
        prompt: String.raw`The slope of the line tangent to the graph of $\ln(xy) = x$ at the point where $x = 1$ is:`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          { label: 'A', text: String.raw`$0$`, explanation: 'Correct! Using ln(x) + ln(y) = x gives 1/x + y′/y = 1; at x = 1 (y = e), 1 + y′/e = 1 ⇒ y′ = 0!' },
          { label: 'B', text: String.raw`$1$`, explanation: 'Incorrect: that is the derivative of the right-hand side alone.' },
          { label: 'C', text: String.raw`$e$`, explanation: 'Incorrect: e is the y-coordinate when x = 1, not the slope.' },
          { label: 'D', text: String.raw`$e^2$`, explanation: 'Incorrect algebra isolating y′.' },
          { label: 'E', text: String.raw`$1 - e$`, explanation: 'Incorrect: forgot to divide 1 by x when differentiating ln(xy).' },
        ],
        hint1: String.raw`First find $y$ when $x = 1$ ($\ln(1\cdot y) = 1 \implies y = e$), OR rewrite $\ln(xy) = \ln x + \ln y = x$ before differentiating!`,
        hint2: String.raw`Differentiating $\ln x + \ln y = x$ gives $\frac{1}{x} + \frac{1}{y}\frac{dy}{dx} = 1$. Plug in $x = 1, y = e$!`,
        solution: String.raw`At $x = 1$: $\ln(y) = 1 \implies y = e$.
Rewrite $\ln(xy) = \ln x + \ln y = x$ and differentiate:
$$\frac{1}{x} + \frac{1}{y}\frac{dy}{dx} = 1$$
Plug in $(1, e)$:
$$1 + \frac{1}{e}\frac{dy}{dx} = 1 \implies \frac{dy}{dx} = 0 \quad \textbf{(Choice A)}$$`,
      },
      {
        partId: 'mcq2',
        label: 'Quick-Slope MCQ #2 (YOU TRY!)',
        prompt: String.raw`The slope of the line tangent to the curve $y^2 + (xy + 1)^3 = 0$ at $(2, -1)$ is:`,
        inputType: 'mcq',
        correctIndex: 3,
        options: [
          { label: 'A', text: String.raw`$-\dfrac{3}{2}$`, explanation: 'Incorrect sign and denominator.' },
          { label: 'B', text: String.raw`$-\dfrac{3}{4}$`, explanation: 'Incorrect sign when moving -3 to the right side.' },
          { label: 'C', text: String.raw`$0$`, explanation: 'Incorrect: xy + 1 at (2, -1) equals -1, NOT 0!' },
          { label: 'D', text: String.raw`$\dfrac{3}{4}$`, explanation: 'Correct! -2y′ + 3(-1)²(-1 + 2y′) = 0 ⇒ 4y′ = 3 ⇒ y′ = 3/4.' },
          { label: 'E', text: String.raw`$\dfrac{3}{2}$`, explanation: 'Incorrect: forgot the 2yy′ term from differentiating y².' },
        ],
        hint1: String.raw`Differentiate using Chain + Product Rule: $2yy' + 3(xy+1)^2(y + xy') = 0$, then plug in $(2, -1)$ immediately!`,
        hint2: String.raw`At $(2, -1)$, $xy + 1 = 2(-1) + 1 = -1$, so $3(-1)^2 = 3$: $2(-1)y' + 3(-1 + 2y') = 0$.`,
        solution: String.raw`Differentiate implicitly:
$$2y\frac{dy}{dx} + 3(xy + 1)^2\left(y + x\frac{dy}{dx}\right) = 0$$
Plug in $x = 2, y = -1$ immediately:
$$2(-1)y' + 3(-2 + 1)^2(-1 + 2y') = 0 \implies -2y' + 3(1)(-1 + 2y') = 0$$
$$-2y' - 3 + 6y' = 0 \implies 4y' = 3 \implies y' = \frac{3}{4} \quad \textbf{(Choice D)}$$`,
      },
    ],
  },
  {
    id: '3.2-p12-practice',
    module: 'lesson-3-2',
    section: 'Day 1: Foundations & First Derivatives (Pages 9–12)',
    badge: 'Page 12 • PRACTICE TIME! #1–#4',
    title: 'Implicit Differentiation Practice Set (#1–#4)',
    calculator: 'non-calculator',
    stem: String.raw`Find each implicit derivative (and slope at the given point) from Page 12.`,
    parts: [
      {
        partId: 'p1',
        label: 'Practice #1',
        prompt: String.raw`Find $\dfrac{dy}{dx}$ for $(y - 5)^5 = x^2 + 2xy + 6$.`,
        inputType: 'algebraic',
        placeholder: 'e.g. (2x + 2y) / (5(y - 5)^4 - 2x)',
        algebraicExpr: '(2*x + 2*y)/(5*((y - 5)^4) - 2*x)',
        variables: ['x', 'y'],
        hint1: String.raw`Use the Chain Rule on $(y-5)^5$ and the Product Rule on $2xy$.`,
        hint2: String.raw`$5(y-5)^4 y' = 2x + 2xy' + 2y$. Move $2xy'$ to the left and factor out $y'$.`,
        solution: String.raw`$$5(y - 5)^4\frac{dy}{dx} = 2x + 2x\frac{dy}{dx} + 2y$$
$$\left(5(y - 5)^4 - 2x\right)\frac{dy}{dx} = 2x + 2y \implies \frac{dy}{dx} = \frac{2x + 2y}{5(y - 5)^4 - 2x}$$
*(Bonus check at $(-7, 4)$: $\left.\frac{dy}{dx}\right|_{(-7,4)} = \frac{-14 + 8}{5(1) + 14} = -\frac{6}{19}$.)*`,
      },
      {
        partId: 'p2',
        label: 'Practice #2',
        prompt: String.raw`Find $\dfrac{dy}{dx}$ for $x^2 + e^y = xy$.`,
        inputType: 'algebraic',
        placeholder: 'e.g. (y - 2x) / (e^y - x)',
        algebraicExpr: '(y - 2*x)/(exp(y) - x)',
        variables: ['x', 'y'],
        hint1: String.raw`Remember $\frac{d}{dx}[e^y] = e^y\frac{dy}{dx}$ and $\frac{d}{dx}[xy] = x\frac{dy}{dx} + y$.`,
        hint2: String.raw`$2x + e^y y' = xy' + y \implies (e^y - x)y' = y - 2x$.`,
        solution: String.raw`$$2x + e^y\frac{dy}{dx} = x\frac{dy}{dx} + y \implies (e^y - x)\frac{dy}{dx} = y - 2x \implies \frac{dy}{dx} = \frac{y - 2x}{e^y - x}$$`,
      },
      {
        partId: 'p3',
        label: 'Practice #3',
        prompt: String.raw`Find $\dfrac{dy}{dx}$ for $\ln(y) = x\sin(y) + x^2$.`,
        inputType: 'algebraic',
        placeholder: 'e.g. (sin(y) + 2x) / (1/y - x*cos(y))',
        algebraicExpr: '(sin(y) + 2*x)/((1/y) - x*cos(y))',
        variables: ['x', 'y'],
        hint1: String.raw`Differentiate $\ln(y)$ as $\frac{1}{y}\frac{dy}{dx}$, and use Product + Chain Rule on $x\sin(y)$.`,
        hint2: String.raw`$\frac{1}{y}y' = x\cos(y)y' + \sin(y) + 2x$. Collect $y'$ terms on the left!`,
        solution: String.raw`$$\frac{1}{y}\frac{dy}{dx} = x\cos(y)\frac{dy}{dx} + \sin(y) + 2x$$
$$\left(\frac{1}{y} - x\cos y\right)\frac{dy}{dx} = \sin y + 2x \implies \frac{dy}{dx} = \frac{\sin y + 2x}{\frac{1}{y} - x\cos y} = \frac{y(\sin y + 2x)}{1 - xy\cos y}$$`,
      },
      {
        partId: 'p4',
        label: 'Practice #4',
        prompt: String.raw`The relation $y^2(4 - x) = x^2$ has a slope of what value when $x = 3$ and $y = -3$?`,
        inputType: 'numeric',
        placeholder: 'e.g. -5/2 or -2.5',
        numericAnswer: -2.5,
        tolerance: 0.001,
        acceptedStrings: ['-5/2', '-2.5'],
        hint1: String.raw`Apply the Product Rule to $y^2 \cdot (4 - x)$, then plug in $x = 3, y = -3$ right away!`,
        hint2: String.raw`$2yy'(4 - x) + y^2(-1) = 2x$. At $(3, -3)$: $2(-3)y'(1) + 9(-1) = 6 \implies -6y' - 9 = 6$.`,
        solution: String.raw`$$2y\frac{dy}{dx}(4 - x) + y^2(-1) = 2x$$
Substitute $x = 3, y = -3$:
$$2(-3)(1)\frac{dy}{dx} - 9 = 6 \implies -6\frac{dy}{dx} = 15 \implies \frac{dy}{dx} = -\frac{15}{6} = -\frac{5}{2}$$`,
      },
    ],
  },
  {
    id: '3.2-day2-second-deriv',
    module: 'lesson-3-2',
    section: 'Day 2: Second Derivatives & Horiz/Vert Tangents (Pages 13–16)',
    badge: 'Pages 13–14 • Warm-Up, MCQs & Examples',
    title: 'Second Derivatives (d²y/dx²) & Shifted Ellipse Tangents',
    calculator: 'non-calculator',
    stem: String.raw`Master both point evaluations and symbolic formulas for $\dfrac{d^2y}{dx^2}$, plus horizontal/vertical tangent coordinates.`,
    watchOut: String.raw`When finding $\frac{d^2y}{dx^2}$, remember that differentiating $\frac{dy}{dx}$ (or $y$-terms) introduces **another** $\frac{dy}{dx}$ factor — substitute your expression or value for $\frac{dy}{dx}$ to finish!`,
    inMockTest: true,
    parts: [
      {
        partId: 'warmup',
        label: 'Page 13 Warm-Up: Ellipse Tangents',
        prompt: String.raw`For $4x^2 + y^2 - 8x + 4y + 4 = 0$, horizontal tangents occur when $x = 1$ and vertical tangents occur when $y = -2$. What are the coordinate points and tangent line equations?`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`Horizontal at $(1, 0)$ [$y=0$] and $(1, -4)$ [$y=-4$]; Vertical at $(0, -2)$ [$x=0$] and $(2, -2)$ [$x=2$].`,
            explanation: String.raw`Correct! Plugging $x=1$ into the ellipse gives $y^2 + 4y = 0 \Rightarrow y = 0, -4$; plugging $y=-2$ gives $4x^2 - 8x = 0 \Rightarrow x = 0, 2$.`,
          },
          {
            label: 'B',
            text: String.raw`Horizontal at $(1, 0)$ [$x=1$]; Vertical at $(0, -2)$ [$y=-2$].`,
            explanation: String.raw`Incorrect: Horizontal lines have equations $y = c$ (not $x = c$), and there are TWO points for each!`,
          },
          {
            label: 'C',
            text: String.raw`Horizontal at $(1, 2)$ and $(1, -2)$; Vertical at $(-2, 0)$ and $(2, 0)$.`,
            explanation: String.raw`Incorrect substitution into $4x^2 + y^2 - 8x + 4y + 4 = 0$.`,
          },
          {
            label: 'D',
            text: String.raw`Horizontal at $(1, 4)$ and $(1, 0)$; Vertical at $(0, -2)$ and $(-2, -2)$.`,
            explanation: String.raw`Sign error factoring $y(y+4)=0$ and $4x(x-2)=0$.`,
          },
        ],
        hint1: String.raw`Substitute $x = 1$ into $4x^2 + y^2 - 8x + 4y + 4 = 0$ to find both $y$-coordinates; then substitute $y = -2$ to find both $x$-coordinates!`,
        hint2: String.raw`At $x = 1$: $4 + y^2 - 8 + 4y + 4 = 0 \implies y^2 + 4y = 0$. At $y = -2$: $4x^2 + 4 - 8x - 8 + 4 = 0 \implies 4x^2 - 8x = 0$.`,
        solution: String.raw`- **Horizontal tangents ($x = 1$):** $y^2 + 4y = 0 \implies y(y + 4) = 0 \implies (1, 0)$ [line $y = 0$] and $(1, -4)$ [line $y = -4$].
- **Vertical tangents ($y = -2$):** $4x^2 - 8x = 0 \implies 4x(x - 2) = 0 \implies (0, -2)$ [line $x = 0$] and $(2, -2)$ [line $x = 2$].`,
      },
      {
        partId: 'p13-mcq1',
        label: 'Page 13 MCQ #1',
        prompt: String.raw`If $(x + 2y)\cdot\dfrac{dy}{dx} = 2x - y$, what is the value of $\dfrac{d^2y}{dx^2}$ at the point $(3, 0)$?`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          { label: 'A', text: String.raw`$-\dfrac{10}{3}$`, explanation: 'Correct! At (3,0), y′ = 2. Differentiating gives (1+2y′)y′ + (x+2y)y″ = 2 - y′ ⇒ 5(2) + 3y″ = 0 ⇒ y″ = -10/3.' },
          { label: 'B', text: String.raw`$0$`, explanation: 'Incorrect: 2 - y′ = 0 on the right side, but (1 + 2y′)y′ = 10 on the left side!' },
          { label: 'C', text: String.raw`$2$`, explanation: 'Incorrect: 2 is the first derivative dy/dx at (3, 0), not the second derivative!' },
          { label: 'D', text: String.raw`$\dfrac{10}{3}$`, explanation: 'Sign error isolating 3y″ = -10.' },
          { label: 'E', text: String.raw`Undefined`, explanation: 'Incorrect: x + 2y = 3 ≠ 0 at (3, 0).' },
        ],
        hint1: String.raw`First plug $(3, 0)$ into the given equation to find $\left.\frac{dy}{dx}\right|_{(3,0)}$. Then differentiate the equation implicitly using the Product Rule!`,
        hint2: String.raw`At $(3, 0)$, $3y' = 6 \implies y' = 2$. Differentiate $(x + 2y)y' = 2x - y$: $(1 + 2y')y' + (x + 2y)y'' = 2 - y'$.`,
        solution: String.raw`1. **Find $y'$ at $(3, 0)$:** $(3 + 0)y' = 6 - 0 \implies y' = 2$.
2. **Differentiate $(x + 2y)y' = 2x - y$ implicitly:**
   $$(1 + 2y')y' + (x + 2y)y'' = 2 - y'$$
3. **Substitute $x = 3, y = 0, y' = 2$:**
   $$(1 + 4)(2) + 3y'' = 2 - 2 \implies 10 + 3y'' = 0 \implies y'' = -\frac{10}{3} \quad \textbf{(Choice A)}$$`,
      },
      {
        partId: 'p13-mcq2',
        label: 'Page 13 MCQ #2',
        prompt: String.raw`If $x^2 + y^2 = 25$, what is the value of $\dfrac{d^2y}{dx^2}$ at the point $(4, 3)$?`,
        inputType: 'numeric',
        placeholder: 'e.g. -25/27',
        numericAnswer: -25 / 27,
        tolerance: 0.005,
        acceptedStrings: ['-25/27'],
        hint1: String.raw`First find $\frac{dy}{dx} = -\frac{x}{y}$, then differentiate using the Quotient Rule!`,
        hint2: String.raw`At $(4, 3)$, $y' = -\frac{4}{3}$. Quotient Rule: $y'' = -\frac{1\cdot y - x\cdot y'}{y^2} = -\frac{3 - 4(-4/3)}{9}$.`,
        solution: String.raw`$$\frac{dy}{dx} = -\frac{x}{y} \implies \frac{d^2y}{dx^2} = -\frac{y - x\frac{dy}{dx}}{y^2} = -\frac{y - x(-x/y)}{y^2} = -\frac{x^2 + y^2}{y^3}$$
At $(4, 3)$ with $x^2 + y^2 = 25$:
$$\left.\frac{d^2y}{dx^2}\right|_{(4,3)} = -\frac{25}{3^3} = -\frac{25}{27}$$`,
      },
      {
        partId: 'p14-ex1',
        label: 'Page 14 Example #1',
        prompt: String.raw`If $\dfrac{dy}{dx} = \sqrt{1 - y^2}$, then $\dfrac{d^2y}{dx^2} =$`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          { label: 'A', text: String.raw`$-2y$`, explanation: 'Forgot the 1/2 power factor in (1 - y²)^(1/2).' },
          { label: 'B', text: String.raw`$-y$`, explanation: 'Correct! d/dx[(1-y²)^(1/2)] = (-y / √(1-y²)) · (dy/dx) = (-y / √(1-y²)) · √(1-y²) = -y!' },
          { label: 'C', text: String.raw`$\dfrac{-y}{\sqrt{1 - y^2}}$`, explanation: 'Forgot the Chain Rule! Must multiply by dy/dx = √(1 - y²), which cancels the denominator!' },
          { label: 'D', text: String.raw`$y$`, explanation: 'Dropped the negative sign when differentiating -y².' },
          { label: 'E', text: String.raw`$\dfrac{1}{2}$`, explanation: 'Invalid differentiation.' },
        ],
        hint1: String.raw`Differentiate $(1 - y^2)^{1/2}$ with respect to $x$ — don't forget to multiply by $\frac{dy}{dx}$ from the Chain Rule!`,
        hint2: String.raw`$\frac{d^2y}{dx^2} = \frac{1}{2}(1 - y^2)^{-1/2}(-2y)\cdot\frac{dy}{dx}$. Now substitute $\frac{dy}{dx} = \sqrt{1 - y^2}$!`,
        solution: String.raw`$$\frac{d^2y}{dx^2} = \frac{1}{2}(1 - y^2)^{-1/2}(-2y)\cdot\frac{dy}{dx} = \frac{-y}{\sqrt{1 - y^2}}\cdot\sqrt{1 - y^2} = -y \quad \textbf{(Choice B)}$$`,
      },
      {
        partId: 'p14-ex2',
        label: 'Page 14 Example #2',
        prompt: String.raw`Consider the curve $y + \cos y = x + 1$ for $0 \le y \le 2\pi$. Find $\dfrac{d^2y}{dx^2}$ in terms of $y$.`,
        inputType: 'algebraic',
        placeholder: 'e.g. cos(y) / (1 - sin(y))^3',
        algebraicExpr: 'cos(y)/((1 - sin(y))^3)',
        variables: ['y'],
        hint1: String.raw`First find $\frac{dy}{dx} = \frac{1}{1 - \sin y} = (1 - \sin y)^{-1}$, then differentiate wrt $x$ using the Chain Rule!`,
        hint2: String.raw`$\frac{d^2y}{dx^2} = -(1 - \sin y)^{-2}(-\cos y)\cdot\frac{dy}{dx}$. Substitute $\frac{dy}{dx} = \frac{1}{1 - \sin y}$!`,
        solution: String.raw`$$(1 - \sin y)\frac{dy}{dx} = 1 \implies \frac{dy}{dx} = (1 - \sin y)^{-1}$$
$$\frac{d^2y}{dx^2} = -(1 - \sin y)^{-2}(-\cos y)\cdot\frac{dy}{dx} = \frac{\cos y}{(1 - \sin y)^2}\cdot\frac{1}{1 - \sin y} = \frac{\cos y}{(1 - \sin y)^3}$$`,
      },
      {
        partId: 'p14-ex3',
        label: 'Page 14 Example #3',
        prompt: String.raw`Consider the curve $y^2 + 8x^2 = 1$. Find $\dfrac{d^2y}{dx^2}$ at the point $(0, -1)$.`,
        inputType: 'numeric',
        placeholder: 'e.g. 8',
        numericAnswer: 8,
        tolerance: 0.001,
        hint1: String.raw`Differentiate $y^2 + 8x^2 = 1$ twice implicitly: $2yy' + 16x = 0$, then differentiate a second time!`,
        hint2: String.raw`At $(0, -1)$, $y' = 0$. Second derivative equation: $2(y')^2 + 2yy'' + 16 = 0$. Substitute $y = -1, y' = 0$!`,
        solution: String.raw`1. First derivative: $2yy' + 16x = 0 \implies$ at $(0, -1)$, $2(-1)y' + 0 = 0 \implies y' = 0$.
2. Differentiate $2yy' + 16x = 0$ again:
   $$2(y')^2 + 2yy'' + 16 = 0$$
3. Plug in $y = -1$ and $y' = 0$:
   $$2(0)^2 + 2(-1)y'' + 16 = 0 \implies -2y'' = -16 \implies y'' = 8$$`,
      },
    ],
  },
  {
    id: '3.2-frq-2008b',
    module: 'lesson-3-2',
    section: 'Day 2 & Day 3: Official AP Calculus FRQs (Pages 15–18)',
    badge: 'Page 15 • 2008 AP Form B #4',
    title: 'Closed Curve x² + 2x + y⁴ + 4y = 5',
    calculator: 'non-calculator',
    stem: String.raw`Consider the closed curve in the $xy$-plane given by
$$x^2 + 2x + y^4 + 4y = 5$$`,
    watchOut: String.raw`Always verify that candidate points actually lie **ON the original curve** AND never give $\frac{dy}{dx} = \frac{0}{0}$ ("throw out" indeterminate points)!`,
    inMockTest: true,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`Show that $\dfrac{dy}{dx} = \dfrac{-(x + 1)}{2(y^3 + 1)}$.`,
        inputType: 'frq-rubric',
        rubricItems: [
          { id: 'imp', points: 1, criterion: 'Implicitly differentiated correctly: 2x + 2 + (4y³ + 4)(dy/dx) = 0' },
          { id: 'alg', points: 1, criterion: 'Isolated dy/dx and factored 2 from numerator and 4 from denominator to get -(x+1)/[2(y³+1)]' },
        ],
        modelResponse: String.raw`$2x + 2 + 4y^3\frac{dy}{dx} + 4\frac{dy}{dx} = 0 \implies 4(y^3 + 1)\frac{dy}{dx} = -2(x + 1) \implies \frac{dy}{dx} = \frac{-(x + 1)}{2(y^3 + 1)}$.`,
        hint1: String.raw`Differentiate every term of $x^2 + 2x + y^4 + 4y = 5$ with respect to $x$.`,
        hint2: String.raw`$2x + 2 + 4y^3\frac{dy}{dx} + 4\frac{dy}{dx} = 0$. Factor out $4\frac{dy}{dx}$ and divide!`,
        solution: String.raw`$$\frac{d}{dx}\left[x^2 + 2x + y^4 + 4y\right] = \frac{d}{dx}[5]$$
$$2x + 2 + (4y^3 + 4)\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = \frac{-2(x + 1)}{4(y^3 + 1)} = \frac{-(x + 1)}{2(y^3 + 1)}$$`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`Write an equation for the line tangent to the curve at the point $(-2, 1)$.`,
        inputType: 'equation',
        placeholder: 'e.g. y - 1 = (1/4)(x + 2)',
        equationConfig: { type: 'line', slope: 0.25, point: [-2, 1] },
        acceptedStrings: ['y-1=1/4(x+2)', 'y-1=(1/4)(x+2)', 'y=1/4(x+2)+1', 'y=0.25(x+2)+1'],
        hint1: String.raw`Evaluate $\frac{dy}{dx} = \frac{-(x+1)}{2(y^3+1)}$ at $(-2, 1)$, then write point-slope form.`,
        hint2: String.raw`At $(-2, 1)$: $m = \frac{-(-2 + 1)}{2(1^3 + 1)} = \frac{1}{4}$.`,
        solution: String.raw`$$\left.\frac{dy}{dx}\right|_{(-2,1)} = \frac{-(-2 + 1)}{2(1 + 1)} = \frac{1}{4}$$
Tangent line equation:
$$y - 1 = \frac{1}{4}(x + 2)$$`,
      },
      {
        partId: 'c-d',
        label: 'Parts (c) & (d)',
        prompt: String.raw`(c) Find the two points where the tangent line is vertical, and (d) determine if it is possible for this curve to have a horizontal tangent where it intersects the $x$-axis.`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`(c) $(-4, -1)$ and $(2, -1)$; (d) Yes, at $(-1, 0)$ because numerator $-(x+1)=0$ at $x=-1$.`,
            explanation: String.raw`Trap on (d)! Check if $(-1, 0)$ is ON the curve: $(-1)^2 + 2(-1) + 0 + 0 = -1 \neq 5$! $(-1, 0)$ is not on the curve!`,
          },
          {
            label: 'B',
            text: String.raw`(c) $(-4, -1)$ and $(2, -1)$; (d) **No**, because a horizontal tangent requires $x = -1$, and $x$-axis intersection requires $y = 0$, but $(-1, 0)$ does not satisfy $x^2 + 2x + y^4 + 4y = 5$.`,
            explanation: String.raw`Correct! Setting $y^3 + 1 = 0 \Rightarrow y = -1$ gives $x^2 + 2x - 8 = 0 \Rightarrow x = -4, 2$ (neither makes $x+1=0$). And $(-1, 0)$ gives $-1 \neq 5$!`,
          },
          {
            label: 'C',
            text: String.raw`(c) $(4, -1)$ and $(-2, -1)$; (d) No.`,
            explanation: String.raw`Sign error factoring $x^2 + 2x - 8 = (x + 4)(x - 2) = 0$.`,
          },
          {
            label: 'D',
            text: String.raw`(c) $(-1, -1)$ only; (d) No.`,
            explanation: String.raw`Incorrect: $(-1, -1)$ does not lie on the curve ($1 - 2 + 1 - 4 = -4 \neq 5$).`,
          },
        ],
        hint1: String.raw`For (c), set denominator $2(y^3 + 1) = 0 \implies y = -1$ and substitute into the curve equation. For (d), test whether $(x, y) = (-1, 0)$ satisfies the curve equation!`,
        hint2: String.raw`At $y = -1$: $x^2 + 2x + 1 - 4 = 5 \implies x^2 + 2x - 8 = 0 \implies (x+4)(x-2)=0$. At $(-1, 0)$: $(-1)^2 + 2(-1) + 0 = -1 \neq 5$.`,
        solution: String.raw`- **(c) Vertical Tangents:** $2(y^3 + 1) = 0 \implies y = -1$. Plug into curve:
  $$x^2 + 2x + (-1)^4 + 4(-1) = 5 \implies x^2 + 2x - 8 = 0 \implies (x + 4)(x - 2) = 0$$
  At $(-4, -1)$ and $(2, -1)$, numerator $-(x+1) \neq 0$, so both are valid vertical tangent points!
- **(d) Horizontal Tangent on $x$-Axis?** Intersecting the $x$-axis means $y = 0$, and horizontal tangent requires numerator $-(x + 1) = 0 \implies x = -1$. Testing $(-1, 0)$ in the curve equation gives $(-1)^2 + 2(-1) + 0 + 0 = -1 \neq 5$, so **no**, $(-1, 0)$ is not on the curve.`,
      },
    ],
  },
  {
    id: '3.2-frq-2015',
    module: 'lesson-3-2',
    section: 'Day 2 & Day 3: Official AP Calculus FRQs (Pages 15–18)',
    badge: 'Page 16 • 2015 AP #6',
    title: 'Curve y³ − xy = 2 & Second Derivative Evaluation',
    calculator: 'non-calculator',
    stem: String.raw`Consider the curve given by the equation $y^3 - xy = 2$. It can be shown that
$$\frac{dy}{dx} = \frac{y}{3y^2 - x}$$`,
    inMockTest: true,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`Write an equation for the line tangent to the curve at the point $(-1, 1)$.`,
        inputType: 'equation',
        placeholder: 'e.g. y - 1 = (1/4)(x + 1)',
        equationConfig: { type: 'line', slope: 0.25, point: [-1, 1] },
        acceptedStrings: ['y-1=1/4(x+1)', 'y-1=(1/4)(x+1)', 'y=1/4(x+1)+1'],
        hint1: String.raw`Evaluate $\frac{dy}{dx} = \frac{y}{3y^2 - x}$ at $(-1, 1)$.`,
        hint2: String.raw`$m = \frac{1}{3(1)^2 - (-1)} = \frac{1}{4}$. Use point-slope form at $(-1, 1)$.`,
        solution: String.raw`$$\left.\frac{dy}{dx}\right|_{(-1,1)} = \frac{1}{3(1)^2 - (-1)} = \frac{1}{4} \implies y - 1 = \frac{1}{4}(x + 1)$$`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`Find the coordinates of all points on the curve at which the line tangent to the curve is vertical.`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          { label: 'A', text: String.raw`$(0, \sqrt[3]{2})$`, explanation: 'At x = 0, denominator 3y² - x = 3(2^(2/3)) ≠ 0.' },
          { label: 'B', text: String.raw`$(-3, 1)$`, explanation: '3(1)² - (-3) = 6 ≠ 0; forgot x = +3y².' },
          { label: 'C', text: String.raw`$(3, -1)$`, explanation: 'Correct! 3y² - x = 0 ⇒ x = 3y²; plug into y³ - (3y²)y = 2 ⇒ -2y³ = 2 ⇒ y = -1, x = 3!' },
          { label: 'D', text: String.raw`$(3, 1)$ and $(3, -1)$`, explanation: '(3, 1) is not on the curve: 1³ - 3(1) = -2 ≠ 2.' },
        ],
        hint1: String.raw`Set denominator $3y^2 - x = 0 \implies x = 3y^2$, and substitute into the original curve $y^3 - xy = 2$!`,
        hint2: String.raw`$y^3 - (3y^2)y = 2 \implies -2y^3 = 2 \implies y^3 = -1 \implies y = -1$. Now find $x = 3y^2$.`,
        solution: String.raw`Set denominator $= 0$: $3y^2 - x = 0 \implies x = 3y^2$.
Substitute into $y^3 - xy = 2$:
$$y^3 - (3y^2)y = 2 \implies -2y^3 = 2 \implies y = -1 \implies x = 3(-1)^2 = 3$$
Since numerator $y = -1 \neq 0$, the unique vertical tangent point is **$(3, -1)$**.`,
      },
      {
        partId: 'c',
        label: 'Part (c)',
        prompt: String.raw`Evaluate $\dfrac{d^2y}{dx^2}$ at the point on the curve where $x = -1$ and $y = 1$.`,
        inputType: 'numeric',
        placeholder: 'e.g. 1/32',
        numericAnswer: 1 / 32,
        tolerance: 0.001,
        acceptedStrings: ['1/32', '0.03125'],
        hint1: String.raw`Apply the Quotient Rule to $\frac{dy}{dx} = \frac{y}{3y^2 - x}$ with respect to $x$, remembering $\frac{d}{dx}[3y^2 - x] = 6y\frac{dy}{dx} - 1$!`,
        hint2: String.raw`At $(-1, 1)$, we found $y' = \frac{1}{4}$. Plug $x = -1, y = 1, y' = \frac{1}{4}$ into $\frac{y'(3y^2 - x) - y(6yy' - 1)}{(3y^2 - x)^2}$.`,
        solution: String.raw`Apply the Quotient Rule to $\frac{dy}{dx} = \frac{y}{3y^2 - x}$:
$$\frac{d^2y}{dx^2} = \frac{\frac{dy}{dx}(3y^2 - x) - y\left(6y\frac{dy}{dx} - 1\right)}{(3y^2 - x)^2}$$
Substitute $x = -1$, $y = 1$, and $\frac{dy}{dx} = \frac{1}{4}$:
$$\left.\frac{d^2y}{dx^2}\right|_{(-1,1)} = \frac{\frac{1}{4}(4) - 1\left(6(1)(\frac{1}{4}) - 1\right)}{4^2} = \frac{1 - \left(\frac{3}{2} - 1\right)}{16} = \frac{\frac{1}{2}}{16} = \frac{1}{32}$$`,
      },
    ],
  },
  {
    id: '3.2-p16-you-try',
    module: 'lesson-3-2',
    section: 'Day 2 & Day 3: Official AP Calculus FRQs (Pages 15–18)',
    badge: 'Page 16 • YOU TRY + BONUS',
    title: 'Horizontal Tangents & Slope −1/2 on x² + xy + y² = 4',
    calculator: 'non-calculator',
    stem: String.raw`Consider the rotated ellipse $x^2 + xy + y^2 = 4$.`,
    watchOut: String.raw`Don't drop $\frac{dy}{dx}$ on $y^2$! Differentiating $x^2 + xy + y^2 = 4$ gives $2x + x\frac{dy}{dx} + y + 2y\frac{dy}{dx} = 0$ (NOT $+2y$ without $\frac{dy}{dx}$)!`,
    parts: [
      {
        partId: 'main',
        label: 'Horizontal Tangents + Bonus',
        prompt: String.raw`What are the **equations of the horizontal tangent lines** to $x^2 + xy + y^2 = 4$, and (**BONUS**) what are the point(s) where the slope is $-\frac{1}{2}$ when $x = 0$?`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`Horizontal lines: $y = \dfrac{4}{\sqrt{3}}$ and $y = -\dfrac{4}{\sqrt{3}}$; Bonus points: $(0, 2)$ and $(0, -2)$.`,
            explanation: String.raw`Correct! dy/dx = (-2x - y)/(x + 2y) = 0 ⇒ x = -y/2 ⇒ (3/4)y² = 4 ⇒ y = ±4/√3. And at x = 0, y = ±2 and dy/dx = -y/(2y) = -1/2!`,
          },
          {
            label: 'B',
            text: String.raw`Horizontal lines: $y = \pm\sqrt{\dfrac{16}{7}}$; Bonus points: $(0, 2)$ only.`,
            explanation: String.raw`Incorrect: $\pm\sqrt{16/7}$ comes from dropping dy/dx on 2y (getting 2x + 3y = 0 instead of 2x + y = 0)!`,
          },
          {
            label: 'C',
            text: String.raw`Horizontal lines: $y = \pm\dfrac{2}{\sqrt{3}}$; Bonus points: $(0, 2)$ and $(0, -2)$.`,
            explanation: String.raw`Careful! $\pm 2/\sqrt{3}$ are the x-coordinates of the horizontal tangent points; y = -2x = ∓4/√3!`,
          },
          {
            label: 'D',
            text: String.raw`Horizontal lines: $y = \pm 2$; Bonus points: None.`,
            explanation: String.raw`At (0, ±2), the slope is -1/2 (tilted ellipse!), NOT 0.`,
          },
        ],
        hint1: String.raw`Differentiate carefully: $2x + \left(x\frac{dy}{dx} + y\right) + 2y\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = \frac{-2x - y}{x + 2y}$.`,
        hint2: String.raw`Set numerator $-2x - y = 0 \implies x = -\frac{1}{2}y$ and plug into $x^2 + xy + y^2 = 4$ to solve directly for $y$!`,
        solution: String.raw`1. **Implicit Derivative:**
   $$2x + x\frac{dy}{dx} + y + 2y\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = \frac{-2x - y}{x + 2y}$$
2. **Horizontal Tangent Lines ($\frac{dy}{dx} = 0$):**
   $$-2x - y = 0 \implies x = -\frac{1}{2}y$$
   Substitute into $x^2 + xy + y^2 = 4$:
   $$\left(-\frac{1}{2}y\right)^2 + \left(-\frac{1}{2}y\right)y + y^2 = 4 \implies \frac{1}{4}y^2 - \frac{1}{2}y^2 + y^2 = 4 \implies \frac{3}{4}y^2 = 4 \implies y = \pm\frac{4}{\sqrt{3}}$$
3. **BONUS ($x = 0$, slope $= -\frac{1}{2}$):**
   At $x = 0$, $0 + 0 + y^2 = 4 \implies y = \pm 2$. Checking $\frac{dy}{dx} = \frac{-0 - y}{0 + 2y} = -\frac{1}{2}$ for both **$(0, 2)$** and **$(0, -2)$**!`,
      },
    ],
  },
  {
    id: '3.2-frq-2000',
    module: 'lesson-3-2',
    section: 'Day 2 & Day 3: Official AP Calculus FRQs (Pages 15–18)',
    badge: 'Page 17 • FRQ #1 (2000 AB #5)',
    title: 'Curve xy² − x³y = 6',
    calculator: 'non-calculator',
    stem: String.raw`Consider the curve given by $xy^2 - x^3y = 6$. It can be shown that
$$\frac{dy}{dx} = \frac{3x^2y - y^2}{2xy - x^3}$$`,
    parts: [
      {
        partId: 'a-b',
        label: 'Parts (a) & (b): Points & Tangent Lines at x = 1',
        prompt: String.raw`Find all points on the curve whose $x$-coordinate is $1$, and select their tangent line equations.`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`$(1, -3)$ with $y + 3 = 0$, and $(1, 2)$ with $y - 2 = 2(x - 1)$.`,
            explanation: String.raw`Factoring sign error: $y^2 - y - 6 = (y - 3)(y + 2) = 0 \Rightarrow y = 3, -2$.`,
          },
          {
            label: 'B',
            text: String.raw`$(1, 3)$ with tangent line $y = 3$, and $(1, -2)$ with tangent line $y + 2 = 2(x - 1)$.`,
            explanation: String.raw`Correct! At (1, 3), dy/dx = (9 - 9)/(6 - 1) = 0 ⇒ y = 3; at (1, -2), dy/dx = (-6 - 4)/(-4 - 1) = -10/-5 = 2 ⇒ y + 2 = 2(x - 1).`,
          },
          {
            label: 'C',
            text: String.raw`$(1, 3)$ with $y - 3 = 3(x - 1)$, and $(1, -2)$ with $y + 2 = -2(x - 1)$.`,
            explanation: String.raw`Incorrect slope calculations when plugging into (3x²y - y²)/(2xy - x³).`,
          },
          {
            label: 'D',
            text: String.raw`$(1, 3)$ only, with $y = 3$.`,
            explanation: String.raw`Missed the second root y = -2 of y² - y - 6 = 0!`,
          },
        ],
        hint1: String.raw`Plug $x = 1$ into $xy^2 - x^3y = 6 \implies y^2 - y - 6 = 0$, factor to get both $y$-values, then compute $\frac{dy}{dx}$ at each point!`,
        hint2: String.raw`$(y - 3)(y + 2) = 0 \implies (1, 3)$ and $(1, -2)$. Evaluate $\frac{3x^2y - y^2}{2xy - x^3}$ at each.`,
        solution: String.raw`- **Part (a) Derivation:** $(y^2 + 2xyy') - (3x^2y + x^3y') = 0 \implies (2xy - x^3)y' = 3x^2y - y^2 \implies \frac{dy}{dx} = \frac{3x^2y - y^2}{2xy - x^3}$.
- **Part (b) At $x = 1$:** $y^2 - y - 6 = 0 \implies (y - 3)(y + 2) = 0$.
  - At **$(1, 3)$**: $\frac{dy}{dx} = \frac{9 - 9}{6 - 1} = 0 \implies \mathbf{y = 3}$.
  - At **$(1, -2)$**: $\frac{dy}{dx} = \frac{-6 - 4}{-4 - 1} = \frac{-10}{-5} = 2 \implies \mathbf{y + 2 = 2(x - 1)}$.`,
      },
      {
        partId: 'c-d',
        label: 'Parts (c) & (d): Vertical & Horizontal Tangents',
        prompt: String.raw`(c) Find the $x$-coordinate where the tangent line is vertical, and (d) find all point(s) where the tangent line is horizontal.`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`(c) $x = 0$ and $x = -\sqrt[5]{24}$; (d) $(1, 3)$ and $(0, 0)$.`,
            explanation: String.raw`Trap! Neither x = 0 nor (0, 0) lies on xy² - x³y = 6 because 0 ≠ 6!`,
          },
          {
            label: 'B',
            text: String.raw`(c) $x = \sqrt[5]{24}$; (d) $(1, 3)$.`,
            explanation: String.raw`Sign error on (c): x(x⁴/4) - x³(x²/2) = -x⁵/4 = 6 ⇒ x⁵ = -24 ⇒ x = -24^(1/5).`,
          },
          {
            label: 'C',
            text: String.raw`(c) $x = -\sqrt[5]{24}$; (d) $(1, 3)$ only.`,
            explanation: String.raw`Correct! Setting 2xy - x³ = 0 (x ≠ 0) gives y = x²/2 ⇒ -x⁵/4 = 6 ⇒ x = -24^(1/5). Setting 3x²y - y² = 0 (y ≠ 0) gives y = 3x² ⇒ 6x⁵ = 6 ⇒ x = 1, y = 3!`,
          },
          {
            label: 'D',
            text: String.raw`(c) $x = -\sqrt[5]{12}$; (d) $(-1, 3)$.`,
            explanation: String.raw`Algebra slip substituting y = x²/2 and y = 3x².`,
          },
        ],
        hint1: String.raw`Note $x \neq 0$ and $y \neq 0$ on $xy^2 - x^3y = 6$. So vertical ($2xy - x^3 = 0$) gives $y = \frac{1}{2}x^2$, and horizontal ($3x^2y - y^2 = 0$) gives $y = 3x^2$!`,
        hint2: String.raw`Plug $y = \frac{1}{2}x^2$ into $xy^2 - x^3y = 6 \implies -\frac{1}{4}x^5 = 6$; then plug $y = 3x^2$ into $xy^2 - x^3y = 6 \implies 6x^5 = 6$.`,
        solution: String.raw`- **(c) Vertical Tangent:** $2xy - x^3 = x(2y - x^2) = 0$. Since $x = 0$ gives $0 = 6$ (impossible), $y = \frac{1}{2}x^2$.
  $$x\left(\frac{x^4}{4}\right) - x^3\left(\frac{x^2}{2}\right) = 6 \implies -\frac{1}{4}x^5 = 6 \implies x = -\sqrt[5]{24}$$
- **(d) Horizontal Tangent:** $y(3x^2 - y) = 0$. Since $y \neq 0$, $y = 3x^2$:
  $$x(9x^4) - x^3(3x^2) = 6 \implies 6x^5 = 6 \implies x = 1 \implies y = 3 \implies \mathbf{(1, 3)}$$`,
      },
    ],
  },
  {
    id: '3.2-frq-1998',
    module: 'lesson-3-2',
    section: 'Day 2 & Day 3: Official AP Calculus FRQs (Pages 15–18)',
    badge: 'Page 17 • FRQ #2 (1998 AB #6)',
    title: 'Curve 2y³ + 6x²y − 12x² + 6y = 1',
    calculator: 'allowed',
    stem: String.raw`Consider the curve defined by $2y^3 + 6x^2y - 12x^2 + 6y = 1$. It can be shown that
$$\frac{dy}{dx} = \frac{4x - 2xy}{x^2 + y^2 + 1}$$`,
    watchOut: String.raw`In Part (b), $4x - 2xy = 2x(2 - y) = 0$ gives TWO algebraic candidates ($x = 0$ and $y = 2$), but plugging $y = 2$ into the curve gives $28 = 1$ (impossible)! Always test every candidate in the original curve!`,
    parts: [
      {
        partId: 'b',
        label: 'Part (b): Horizontal Tangent Line Equation',
        prompt: String.raw`Write the numerical $y$-value (to 3 decimal places) of the unique horizontal tangent line $y = k$ to the curve.`,
        inputType: 'numeric',
        placeholder: 'e.g. 0.165',
        numericAnswer: 0.165165,
        tolerance: 0.005,
        hint1: String.raw`Set numerator $4x - 2xy = 2x(2 - y) = 0$, reject $y = 2$ (check why!), and plug $x = 0$ into $2y^3 + 6y = 1$.`,
        hint2: String.raw`Use your graphing calculator to solve $2y^3 + 6y - 1 = 0$ for $y$!`,
        solution: String.raw`Set numerator $= 0$: $2x(2 - y) = 0 \implies x = 0$ or $y = 2$.
- **Test $y = 2$:** $2(8) + 12x^2 - 12x^2 + 12 = 28 \neq 1$ (no points on curve!).
- **Test $x = 0$:** $2y^3 + 6y = 1 \implies y \approx 0.165$.
Horizontal tangent line equation: **$y \approx 0.165$**.`,
      },
      {
        partId: 'c',
        label: 'Part (c): Line Through Origin With Slope −1',
        prompt: String.raw`The line through the origin with slope $-1$ is tangent to the curve at point $P$. Find the coordinates of point $P$.`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`$P = \left(-\dfrac{1}{2},\, \dfrac{1}{2}\right)$`,
            explanation: String.raw`Correct! Line through origin with slope -1 is y = -x. Setting dy/dx = -1 with y = -x gives (4x + 2x²)/(2x² + 1) = -1 ⇒ (2x + 1)² = 0 ⇒ x = -1/2, y = 1/2 (which satisfies the curve!).`,
          },
          {
            label: 'B',
            text: String.raw`$P = \left(\dfrac{1}{2},\, -\dfrac{1}{2}\right)$`,
            explanation: String.raw`At (1/2, -1/2), dy/dx = (2 + 1/2)/(3/2) = 5/3 ≠ -1.`,
          },
          {
            label: 'C',
            text: String.raw`$P = (-1, 1)$`,
            explanation: String.raw`(-1, 1) does not lie on the curve: 2 + 6 - 12 + 6 = 2 ≠ 1.`,
          },
          {
            label: 'D',
            text: String.raw`$P = (0, 0)$`,
            explanation: String.raw`(0, 0) does not lie on the curve: 0 ≠ 1.`,
          },
        ],
        hint1: String.raw`What is the equation of the line through $(0, 0)$ with slope $-1$? Since it is tangent at $P$, point $P$ lies on $y = -x$ AND has $\frac{dy}{dx} = -1$!`,
        hint2: String.raw`Substitute $y = -x$ into $\frac{4x - 2xy}{x^2 + y^2 + 1} = -1 \implies \frac{4x + 2x^2}{2x^2 + 1} = -1$. Solve for $x$!`,
        solution: String.raw`The line through the origin with slope $-1$ has equation $y = -x$. At point $P(x, -x)$, $\frac{dy}{dx} = -1$:
$$\frac{4x - 2x(-x)}{x^2 + (-x)^2 + 1} = -1 \implies 4x + 2x^2 = -2x^2 - 1 \implies 4x^2 + 4x + 1 = (2x + 1)^2 = 0$$
Thus $x = -\frac{1}{2}$ and $y = \frac{1}{2}$. Checking on the curve: $2(\frac{1}{8}) + 6(\frac{1}{4})(\frac{1}{2}) - 12(\frac{1}{4}) + 6(\frac{1}{2}) = \frac{1}{4} + \frac{3}{4} - 3 + 3 = 1$. So **$P = \left(-\frac{1}{2}, \frac{1}{2}\right)$**.`,
      },
    ],
  },
  {
    id: '3.2-frq-1987-1992',
    module: 'lesson-3-2',
    section: 'Day 2 & Day 3: Official AP Calculus FRQs (Pages 15–18)',
    badge: 'Page 18 • FRQ #3 (1987) & FRQ #4 (1992)',
    title: '1987 BC #2 & 1992 AB #4 / BC #1 Practice',
    calculator: 'non-calculator',
    stem: String.raw`Complete both classic AP implicit differentiation FRQs on Page 18.`,
    parts: [
      {
        partId: '87-ab',
        label: '1987 FRQ #3: y³ + 3x²y + 13 = 0',
        prompt: String.raw`For $y^3 + 3x^2y + 13 = 0$, write an equation for the line tangent to the curve at $(2, -1)$.`,
        inputType: 'equation',
        placeholder: 'e.g. y + 1 = (4/5)(x - 2)',
        equationConfig: { type: 'line', slope: 0.8, point: [2, -1] },
        acceptedStrings: ['y+1=4/5(x-2)', 'y+1=(4/5)(x-2)', 'y=4/5(x-2)-1'],
        hint1: String.raw`Differentiate $y^3 + 3x^2y + 13 = 0$ using Product Rule on $3x^2y$: $3y^2y' + 6xy + 3x^2y' = 0$.`,
        hint2: String.raw`$\frac{dy}{dx} = \frac{-2xy}{x^2 + y^2}$. At $(2, -1)$, $m = \frac{-2(2)(-1)}{4 + 1} = \frac{4}{5}$.`,
        solution: String.raw`$$3y^2\frac{dy}{dx} + 6xy + 3x^2\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = \frac{-2xy}{x^2 + y^2}$$
At $(2, -1)$: $\frac{dy}{dx} = \frac{-2(2)(-1)}{2^2 + (-1)^2} = \frac{4}{5}$, giving tangent line:
$$y + 1 = \frac{4}{5}(x - 2)$$`,
      },
      {
        partId: '92-abc',
        label: '1992 FRQ #4: y + cos y = x + 1 (0 ≤ y ≤ 2π)',
        prompt: String.raw`For $y + \cos y = x + 1$ ($0 \le y \le 2\pi$), select the correct answers for (a) $\dfrac{dy}{dx}$ in terms of $y$, (b) the vertical tangent equation, and (c) $\dfrac{d^2y}{dx^2}$ in terms of $y$.`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`(a) $\dfrac{1}{1 + \sin y}$; (b) $x = \dfrac{3\pi}{2} - 1$; (c) $\dfrac{-\cos y}{(1 + \sin y)^3}$`,
            explanation: String.raw`Sign error: derivative of cos y is -sin y (not +sin y).`,
          },
          {
            label: 'B',
            text: String.raw`(a) $\dfrac{1}{1 - \sin y}$; (b) $y = \dfrac{\pi}{2}$; (c) $\dfrac{\cos y}{(1 - \sin y)^2}$`,
            explanation: String.raw`Two errors: a vertical line has equation x = constant (not y = π/2!), and (c) forgot to multiply by dy/dx = 1/(1 - sin y)!`,
          },
          {
            label: 'C',
            text: String.raw`(a) $\dfrac{1}{1 - \sin y}$; (b) $x = \dfrac{\pi}{2} - 1$; (c) $\dfrac{\cos y}{(1 - \sin y)^3}$`,
            explanation: String.raw`Correct! 1 - sin y = 0 ⇒ y = π/2 ⇒ x = π/2 + cos(π/2) - 1 = π/2 - 1; and d/dx[(1 - sin y)^(-1)] = cos(y)/(1 - sin y)² · dy/dx = cos(y)/(1 - sin y)³!`,
          },
          {
            label: 'D',
            text: String.raw`(a) $\dfrac{1}{1 - \sin y}$; (b) $x = \dfrac{\pi}{2}$; (c) $\dfrac{-\cos y}{(1 - \sin y)^3}$`,
            explanation: String.raw`At y = π/2, y + cos y = x + 1 gives π/2 + 0 = x + 1 ⇒ x = π/2 - 1 (not π/2), and sign error in (c).`,
          },
        ],
        hint1: String.raw`Differentiate wrt $x$: $(1 - \sin y)\frac{dy}{dx} = 1$. For vertical tangent, set $1 - \sin y = 0$ on $[0, 2\pi]$ and solve for **$x$**!`,
        hint2: String.raw`At $y = \frac{\pi}{2}$, $\frac{\pi}{2} + \cos(\frac{\pi}{2}) = x + 1 \implies x = \frac{\pi}{2} - 1$. For (c), differentiate $(1 - \sin y)^{-1}$ and multiply by $\frac{dy}{dx}$!`,
        solution: String.raw`- **(a)** $(1 - \sin y)\frac{dy}{dx} = 1 \implies \mathbf{\frac{dy}{dx} = \frac{1}{1 - \sin y}}$.
- **(b)** Vertical tangent when $1 - \sin y = 0 \implies \sin y = 1 \implies y = \frac{\pi}{2}$ on $[0, 2\pi]$. Plug into curve: $\frac{\pi}{2} + 0 = x + 1 \implies \mathbf{x = \frac{\pi}{2} - 1}$.
- **(c)** Differentiate $(1 - \sin y)^{-1}$ wrt $x$:
  $$\frac{d^2y}{dx^2} = -(1 - \sin y)^{-2}(-\cos y)\cdot\frac{dy}{dx} = \frac{\cos y}{(1 - \sin y)^2}\cdot\frac{1}{1 - \sin y} = \mathbf{\frac{\cos y}{(1 - \sin y)^3}}$$`,
      },
    ],
  },
];
