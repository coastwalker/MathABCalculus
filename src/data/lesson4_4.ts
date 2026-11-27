import { Problem } from '../types';

export const LESSON_4_4_PROBLEMS: Problem[] = [
  {
    id: '4.4-language-drills',
    module: 'lesson-4-4',
    section: 'Lesson 4.4: Language & d/dt Operator Drills (Pages 19–20)',
    badge: 'Pages 19–20 • Translations & d/dt',
    title: '"Calculus Speak" Translations & Time-Derivative Drills',
    calculator: 'non-calculator',
    stem: String.raw`In Related Rates, **every variable is differentiated with respect to time $t$** ($\frac{d}{dt}$). Decreasing quantities ALWAYS have **negative** rates!`,
    watchOut: String.raw`Watch your denominator variable! In Related Rates, write $\frac{dV}{dt}$ (with respect to time $t$), NOT $\frac{dV}{dx}$ — and always attach a minus sign when a quantity is **decreasing**, **draining**, **shrinking**, or **deflating**!`,
    parts: [
      {
        partId: 'lang',
        label: 'Page 19: Language of Related Rates',
        prompt: String.raw`Select the translation set that accurately converts all 4 phrases on Page 19:`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`$\frac{dr}{dt} = 6\text{ in/min}$;\; $\frac{dV}{dt} = +2\text{ ft}^3/\text{sec}$;\; Circumference is $2\text{ cm}$;\; Height decreases at $-5\text{ ft/hr}$.`,
            explanation: String.raw`Two classic errors: decreasing volume must have dV/dt = -2 (negative!), and never say "decreasing at -5" in words.`,
          },
          {
            label: 'B',
            text: String.raw`$\frac{dr}{dt} = 6\text{ in/min}$;\; $\frac{dV}{dt} = -2\text{ ft}^3/\text{sec}$;\; Circumference is increasing at $2\text{ cm/sec}$;\; Height is decreasing at $5\text{ ft/hr}$.`,
            explanation: String.raw`Correct! Decreasing volume translates to dV/dt = -2 ft³/sec, and dh/dt = -5 ft/hr translates to "decreasing at a rate of 5 ft/hr".`,
          },
          {
            label: 'C',
            text: String.raw`$\frac{dr}{dx} = 6\text{ in/min}$;\; $\frac{dV}{dx} = -2\text{ ft}^3/\text{sec}$;\; Area increases at $2\text{ cm/sec}$;\; Height decreases at $5\text{ ft/hr}$.`,
            explanation: String.raw`Incorrect: Rates with respect to time use dt in the denominator, not dx!`,
          },
          {
            label: 'D',
            text: String.raw`$r = 6$;\; $V = -2$;\; Circumference increases at $2\text{ cm/sec}$;\; Height increases at $5\text{ ft/hr}$.`,
            explanation: String.raw`Incorrect: Rates of change are derivatives (dr/dt, dV/dt), not static values r or V.`,
          },
        ],
        hint1: String.raw`"Increasing" $\implies$ positive $\frac{d(\cdot)}{dt}$; "Decreasing" $\implies$ negative $\frac{d(\cdot)}{dt}$!`,
        hint2: String.raw`"Volume decreasing at $2\text{ ft}^3/\text{sec}$" $\implies \frac{dV}{dt} = -2\text{ ft}^3/\text{sec}$.`,
        solution: String.raw`1. Radius increasing at $6\text{ in/min} \implies \mathbf{\frac{dr}{dt} = 6\text{ in/min}}$.
2. Volume decreasing at $2\text{ ft}^3/\text{sec} \implies \mathbf{\frac{dV}{dt} = -2\text{ ft}^3/\text{sec}}$.
3. $\frac{dC}{dt} = 2\text{ cm/sec} \implies$ **The circumference is increasing at a rate of $2\text{ cm/sec}$.**
4. $\frac{dh}{dt} = -5\text{ ft/hr} \implies$ **The height is decreasing at a rate of $5\text{ ft/hr}$.**`,
      },
      {
        partId: 'ddt1',
        label: 'Page 20 Drill #1: C = 2πr²',
        prompt: String.raw`Apply $\dfrac{d}{dt}$ to the given equation $C = 2\pi r^2$. *(Enter the right-hand side for $\frac{dC}{dt}$ using ` + '`pi`' + ` and ` + '`dr/dt`' + `.)*`,
        inputType: 'algebraic',
        placeholder: 'e.g. 4*pi*r * dr/dt',
        algebraicExpr: '4*pi*r*drdt',
        variables: ['r', 'drdt'],
        hint1: String.raw`Keep the constant $2\pi$ in front and differentiate $r^2$ with respect to $t$ using the Chain Rule.`,
        hint2: String.raw`$\frac{d}{dt}[2\pi r^2] = 2\pi \cdot 2r \cdot \frac{dr}{dt}$.`,
        solution: String.raw`$$\frac{dC}{dt} = 2\pi \cdot 2r\frac{dr}{dt} = 4\pi r\frac{dr}{dt}$$`,
      },
      {
        partId: 'ddt2',
        label: 'Page 20 Drill #2: P = 2L + 2W',
        prompt: String.raw`Apply $\dfrac{d}{dt}$ to $P = 2L + 2W$. *(Enter the right-hand side for $\frac{dP}{dt}$ using ` + '`dL/dt`' + ` and ` + '`dW/dt`' + `.)*`,
        inputType: 'algebraic',
        placeholder: 'e.g. 2 * dL/dt + 2 * dW/dt',
        algebraicExpr: '2*dldt + 2*dwdt',
        variables: ['dldt', 'dwdt'],
        hint1: String.raw`Differentiate term-by-term with respect to time $t$.`,
        hint2: String.raw`$\frac{d}{dt}[2L] = 2\frac{dL}{dt}$ and $\frac{d}{dt}[2W] = 2\frac{dW}{dt}$.`,
        solution: String.raw`$$\frac{dP}{dt} = 2\frac{dL}{dt} + 2\frac{dW}{dt}$$`,
      },
      {
        partId: 'ddt3',
        label: 'Page 20 Drill #3: A = (1/2)bh',
        prompt: String.raw`Apply $\dfrac{d}{dt}$ to both sides of $A = \dfrac{1}{2}bh$ (where both $b$ and $h$ vary with time $t$). *(Enter the right-hand side for $\frac{dA}{dt}$ using ` + '`db/dt`' + ` and ` + '`dh/dt`' + `.)*`,
        inputType: 'algebraic',
        placeholder: 'e.g. (1/2)*(b * dh/dt + h * db/dt)',
        algebraicExpr: '0.5*(b*dhdt + h*dbdt)',
        variables: ['b', 'h', 'dbdt', 'dhdt'],
        hint1: String.raw`Both $b$ and $h$ change with $t$, so use the **Product Rule** on $b \cdot h$!`,
        hint2: String.raw`$\frac{d}{dt}[bh] = b\frac{dh}{dt} + h\frac{db}{dt}$, then multiply by $\frac{1}{2}$.`,
        solution: String.raw`$$\frac{dA}{dt} = \frac{1}{2}\left(b\frac{dh}{dt} + h\frac{db}{dt}\right)$$`,
      },
      {
        partId: 'ddt4',
        label: 'Page 20 Drill #4: V = (4/3)πr²h',
        prompt: String.raw`Apply $\dfrac{d}{dt}$ to $V = \dfrac{4}{3}\pi r^2 h$ (where both $r$ and $h$ vary with time $t$). *(Enter the right-hand side for $\frac{dV}{dt}$ using ` + '`pi`' + `, ` + '`dr/dt`' + `, and ` + '`dh/dt`' + `.)*`,
        inputType: 'algebraic',
        placeholder: 'e.g. (4/3)*pi*(r^2 * dh/dt + 2*r*h * dr/dt)',
        algebraicExpr: '(4/3)*pi*((r^2)*dhdt + 2*r*h*drdt)',
        variables: ['r', 'h', 'drdt', 'dhdt'],
        hint1: String.raw`Keep $\frac{4}{3}\pi$ factored out front and apply the Product + Chain Rule to $r^2 \cdot h$!`,
        hint2: String.raw`$\frac{d}{dt}[r^2 h] = r^2\frac{dh}{dt} + h\left(2r\frac{dr}{dt}\right)$.`,
        solution: String.raw`$$\frac{dV}{dt} = \frac{4}{3}\pi\left(r^2\frac{dh}{dt} + 2rh\frac{dr}{dt}\right)$$
*(Note on Page 20 Drill #1 & #2 as well: $C = 2\pi r^2 \implies \frac{dC}{dt} = 4\pi r\frac{dr}{dt}$ and $P = 2L + 2W \implies \frac{dP}{dt} = 2\frac{dL}{dt} + 2\frac{dW}{dt}$.)*`,
      },
    ],
  },
  {
    id: '4.5-video-examples',
    module: 'lesson-4-4',
    section: 'Lesson 4.5 Day 1: Classic Geometric Related Rates (Pages 21–22)',
    badge: 'Page 21 • Video Examples #1–#3',
    title: 'Inflating Sphere, Falling Ladder & Expanding Circle',
    calculator: 'non-calculator',
    stem: String.raw`Work through the three foundational Related Rates problems from Page 21. **Golden Rule:** NEVER plug in a changing measurement *before* taking $\frac{d}{dt}$!`,
    watchOut: String.raw`Only plug in **constants** (like a fixed ladder length $L = 10\text{ ft}$) before differentiating; keep changing variables ($x, y, r, V, A$) symbolic until AFTER you differentiate with respect to $t$!`,
    parts: [
      {
        partId: 'sphere',
        label: 'Video Example #1: Inflating Sphere (d = 50 cm)',
        prompt: String.raw`Air is pumped into a spherical balloon at a constant rate of $800\text{ cm}^3/\text{min}$. How fast is the radius increasing at the instant the diameter is $50\text{ cm}$? *(Sphere volume: $V = \frac{4}{3}\pi r^3$. You can type exact expressions like ` + '`8/(25*pi)`' + ` or a decimal!)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 8/(25*pi) or 0.102',
        unitLabel: 'cm/min',
        numericAnswer: 8 / (25 * Math.PI),
        tolerance: 0.002,
        acceptedStrings: ['8/(25*pi)', '8/(25pi)'],
        hint1: String.raw`Differentiate $V = \frac{4}{3}\pi r^3$ with respect to $t$, and note that diameter $50\text{ cm}$ means $r = 25\text{ cm}$!`,
        hint2: String.raw`$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$. Substitute $\frac{dV}{dt} = 800$ and $r = 25$.`,
        solution: String.raw`$$V = \frac{4}{3}\pi r^3 \implies \frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$
When diameter $= 50\text{ cm}$, $r = 25\text{ cm}$:
$$800 = 4\pi(25)^2\frac{dr}{dt} = 2500\pi\frac{dr}{dt} \implies \frac{dr}{dt} = \frac{800}{2500\pi} = \frac{8}{25\pi} \approx 0.102\text{ cm/min}$$`,
      },
      {
        partId: 'ladder',
        label: 'Video Example #2: Falling Ladder',
        prompt: String.raw`A $10\text{-ft}$ ladder leans against a vertical wall. If the bottom of the ladder slides away from the wall at $1\text{ ft/sec}$, find $\dfrac{dy}{dt}$ (the velocity of the top of the ladder along the wall) when the base is $6\text{ ft}$ from the wall.`,
        inputType: 'numeric',
        placeholder: 'e.g. -3/4 or -0.75',
        unitLabel: 'ft/sec',
        numericAnswer: -0.75,
        tolerance: 0.001,
        acceptedStrings: ['-3/4', '-0.75'],
        hint1: String.raw`Since the ladder length $10\text{ ft}$ is **constant**, write $x^2 + y^2 = 10^2 = 100$ and differentiate wrt $t$!`,
        hint2: String.raw`When $x = 6$, $y = \sqrt{100 - 36} = 8\text{ ft}$. Plug $x = 6, y = 8, \frac{dx}{dt} = 1$ into $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$.`,
        solution: String.raw`$$x^2 + y^2 = 100 \implies 2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$
When $x = 6\text{ ft}$, $y = \sqrt{10^2 - 6^2} = 8\text{ ft}$:
$$2(6)(1) + 2(8)\frac{dy}{dt} = 0 \implies 16\frac{dy}{dt} = -12 \implies \frac{dy}{dt} = -\frac{3}{4}\text{ ft/sec}$$
*(The top of the ladder is sliding down the wall at $\frac{3}{4}\text{ ft/sec}$.)*`,
      },
      {
        partId: 'circle',
        label: 'Video Example #3: Expanding Circle',
        prompt: String.raw`A circle's radius increases at $\dfrac{dr}{dt} = 1\text{ cm/sec}$. How fast is the **area** $A = \pi r^2$ increasing at the instant when the area is $100\pi\text{ cm}^2$?`,
        inputType: 'numeric',
        placeholder: 'e.g. 20*pi or 62.832',
        unitLabel: 'cm²/sec',
        numericAnswer: 20 * Math.PI,
        tolerance: 0.02,
        acceptedStrings: ['20*pi', '20pi'],
        hint1: String.raw`First find $r$ when $A = \pi r^2 = 100\pi$, then differentiate $A = \pi r^2$ with respect to $t$.`,
        hint2: String.raw`$r^2 = 100 \implies r = 10\text{ cm}$. Plug $r = 10$ and $\frac{dr}{dt} = 1$ into $\frac{dA}{dt} = 2\pi r\frac{dr}{dt}$.`,
        solution: String.raw`When $A = \pi r^2 = 100\pi$, $r = 10\text{ cm}$.
$$\frac{dA}{dt} = 2\pi r\frac{dr}{dt} = 2\pi(10)(1) = 20\pi \approx 62.832\text{ cm}^2/\text{sec}$$`,
      },
    ],
  },
  {
    id: '4.5-p22-inclass',
    module: 'lesson-4-4',
    section: 'Lesson 4.5 Day 1: Classic Geometric Related Rates (Pages 21–22)',
    badge: 'Page 22 • In-Class Examples #1–#3',
    title: 'Two Cars, Rising Drone Angle, & Skateboarder Shadow',
    calculator: 'allowed',
    stem: String.raw`Solve all three classic AP Related Rates applications from Page 22.`,
    inMockTest: true,
    parts: [
      {
        partId: 'cars',
        label: 'In-Class #1: Two Cars Leaving Central Square',
        prompt: String.raw`Two cars leave Central Square. The first drives north at $35\text{ mph}$ (distance $A = 20\text{ miles}$), and the second drives east at $50\text{ mph}$ (distance $B = 40\text{ miles}$). How fast is the distance $D$ between them changing at that instant?`,
        inputType: 'numeric',
        placeholder: 'e.g. 27*sqrt(5) or 60.374',
        unitLabel: 'mph',
        numericAnswer: 27 * Math.sqrt(5),
        tolerance: 0.01,
        acceptedStrings: ['27*sqrt(5)', '27sqrt(5)', '135/sqrt(5)', '2700/sqrt(2000)'],
        hint1: String.raw`Here **all three** sides of the right triangle change with time: $A^2 + B^2 = D^2$!`,
        hint2: String.raw`Differentiate: $2A\frac{dA}{dt} + 2B\frac{dB}{dt} = 2D\frac{dD}{dt}$, where $D = \sqrt{20^2 + 40^2} = \sqrt{2000} = 20\sqrt{5}$.`,
        solution: String.raw`$$A^2 + B^2 = D^2 \implies A\frac{dA}{dt} + B\frac{dB}{dt} = D\frac{dD}{dt}$$
At $A = 20, B = 40$: $D = \sqrt{400 + 1600} = \sqrt{2000} = 20\sqrt{5}\text{ miles}$.
$$20(35) + 40(50) = 20\sqrt{5}\frac{dD}{dt} \implies 2700 = 20\sqrt{5}\frac{dD}{dt} \implies \frac{dD}{dt} = \frac{135}{\sqrt{5}} = 27\sqrt{5} \approx 60.374\text{ mph}$$`,
      },
      {
        partId: 'drone',
        label: 'In-Class #2: Rising Drone & Camera Angle',
        prompt: String.raw`A drone rises straight up from a launch pad. A stationary camera on the ground **$120\text{ feet}$ away** tracks the drone. At the moment the drone is **$50\text{ feet}$ high** and rising at **$30\text{ ft/sec}$**, how fast is the camera's angle of elevation $\theta$ changing?`,
        inputType: 'numeric',
        placeholder: 'e.g. 36/169 or 0.213',
        unitLabel: 'rad/sec',
        numericAnswer: 36 / 169,
        tolerance: 0.002,
        acceptedStrings: ['36/169'],
        hint1: String.raw`Since the horizontal distance $120\text{ ft}$ is **constant**, relate $\theta$ and height $y$ with $\tan\theta = \frac{y}{120}$!`,
        hint2: String.raw`Differentiate: $\sec^2\theta \frac{d\theta}{dt} = \frac{1}{120}\frac{dy}{dt}$. Use the $5\text{–}12\text{–}13$ right triangle ($50, 120, 130$) to find $\cos\theta = \frac{12}{13}$!`,
        solution: String.raw`$$\tan\theta = \frac{y}{120} \implies \sec^2\theta \frac{d\theta}{dt} = \frac{1}{120}\frac{dy}{dt}$$
At $y = 50\text{ ft}$ and base $= 120\text{ ft}$, the hypotenuse is $\sqrt{50^2 + 120^2} = 130\text{ ft}$, so $\cos\theta = \frac{120}{130} = \frac{12}{13}$ and $\sec^2\theta = \frac{169}{144}$:
$$\frac{169}{144}\frac{d\theta}{dt} = \frac{30}{120} = \frac{1}{4} \implies \frac{d\theta}{dt} = \frac{1}{4}\cdot\frac{144}{169} = \frac{36}{169} \approx 0.213\text{ radians/second}$$`,
      },
      {
        partId: 'shadow-a',
        label: 'In-Class #3(a): Skateboarder Shadow Length Rate',
        prompt: String.raw`A $6\text{-ft}$ boy on a skateboard rolls away from a $15\text{-ft}$ lamppost at $3\text{ ft/s}$. Find the rate at which his **shadow is increasing in length** ($\frac{ds}{dt}$).`,
        inputType: 'numeric',
        placeholder: 'e.g. 2',
        unitLabel: 'ft/sec',
        numericAnswer: 2,
        tolerance: 0.001,
        hint1: String.raw`Use **similar triangles**! Let $x$ be the boy's distance from the post and $s$ be the shadow length: $\frac{15}{x + s} = \frac{6}{s}$.`,
        hint2: String.raw`Cross-multiply before differentiating: $15s = 6x + 6s \implies 9s = 6x \implies s = \frac{2}{3}x$!`,
        solution: String.raw`By similar right triangles:
$$\frac{15}{x + s} = \frac{6}{s} \implies 15s = 6x + 6s \implies 9s = 6x \implies s = \frac{2}{3}x$$
Differentiate with respect to $t$:
$$\frac{ds}{dt} = \frac{2}{3}\frac{dx}{dt} = \frac{2}{3}(3) = 2\text{ ft/sec}$$`,
      },
      {
        partId: 'shadow-b',
        label: 'In-Class #3(b): Speed of the Tip of the Shadow',
        prompt: String.raw`How fast is the **tip of his shadow** moving along the ground?`,
        inputType: 'numeric',
        placeholder: 'e.g. 5',
        unitLabel: 'ft/sec',
        numericAnswer: 5,
        tolerance: 0.001,
        hint1: String.raw`The tip of the shadow is at total distance $T = x + s$ from the base of the lamppost!`,
        hint2: String.raw`$\frac{dT}{dt} = \frac{dx}{dt} + \frac{ds}{dt} = 3 + 2$.`,
        solution: String.raw`The tip's position from the lamppost is $T = x + s$:
$$\frac{dT}{dt} = \frac{dx}{dt} + \frac{ds}{dt} = 3 + 2 = 5\text{ ft/sec}$$`,
      },
    ],
  },
  {
    id: '4.5-day2-substitutions',
    module: 'lesson-4-4',
    section: 'Lesson 4.5 Day 2: Substitutions & Multi-Equation Problems (Pages 23–24)',
    badge: 'Pages 23–24 • Funnel, Sphere, Cones, Cylinder & Pyramid',
    title: 'Substitutions, Similar Triangles & 2016 / 2019 AP FRQs',
    calculator: 'non-calculator',
    visual: 'conical-tank-diagram',
    stem: String.raw`When a cone or pyramid has two changing variables ($r$ and $h$) and you only know one rate, **use similar triangles ($\frac{r}{h} = \frac{R}{H}$) to eliminate a variable BEFORE differentiating**! In contrast, for a **cylinder**, the radius $r$ is constant!`,
    watchOut: String.raw`Cone vs. Cylinder! In a cone, water radius $r$ changes as height $h$ changes (use proportions $\frac{r}{h} = \frac{R}{H}$). In a vertical cylinder, $r$ is **constant** ($\frac{dr}{dt} = 0$), so plug in $r$ right away!`,
    inMockTest: true,
    parts: [
      {
        partId: 'funnel-2016',
        label: 'Page 23 Warm-Up: 2016 AP FRQ #5(c) Funnel',
        prompt: String.raw`The inside of a funnel of height $10\text{ in}$ has circular cross sections with radius $r = \frac{1}{20}(3 + h^2)$ for $0 \le h \le 10$. At the instant $h = 3\text{ in}$, the radius is **decreasing** at $\frac{1}{5}\text{ in/sec}$. What is $\dfrac{dh}{dt}$?`,
        inputType: 'numeric',
        placeholder: 'e.g. -2/3 or -0.667',
        unitLabel: 'in/sec',
        numericAnswer: -2 / 3,
        tolerance: 0.005,
        acceptedStrings: ['-2/3'],
        hint1: String.raw`Since $r$ is decreasing at $\frac{1}{5}\text{ in/sec}$, $\frac{dr}{dt} = -\frac{1}{5}$! Differentiate $r = \frac{3}{20} + \frac{1}{20}h^2$ wrt $t$.`,
        hint2: String.raw`$\frac{dr}{dt} = \frac{1}{10}h\frac{dh}{dt}$. Substitute $\frac{dr}{dt} = -\frac{1}{5}$ and $h = 3$.`,
        solution: String.raw`$$r = \frac{3}{20} + \frac{1}{20}h^2 \implies \frac{dr}{dt} = \frac{1}{10}h\frac{dh}{dt}$$
Substitute $\frac{dr}{dt} = -\frac{1}{5}$ and $h = 3$:
$$-\frac{1}{5} = \frac{3}{10}\frac{dh}{dt} \implies \frac{dh}{dt} = -\frac{1}{5}\cdot\frac{10}{3} = -\frac{2}{3}\text{ inch/second}$$`,
      },
      {
        partId: 'beachball',
        label: 'Page 23 Example #4: Deflating Beach Ball',
        prompt: String.raw`A spherical beach ball is **deflating** at $10\text{ cm}^3/\text{sec}$. When $V = \frac{256}{3}\pi\text{ cm}^3$, what is the rate of change of the surface area $S$? ($S = 4\pi r^2,\; V = \frac{4}{3}\pi r^3$)`,
        inputType: 'numeric',
        placeholder: 'e.g. -5',
        unitLabel: 'cm²/sec',
        numericAnswer: -5,
        tolerance: 0.001,
        hint1: String.raw`Use $\frac{4}{3}\pi r^3 = \frac{256}{3}\pi$ to find $r$, then find $\frac{dr}{dt}$ from $\frac{dV}{dt} = -10$, and plug into $\frac{dS}{dt} = 8\pi r\frac{dr}{dt}$!`,
        hint2: String.raw`$r^3 = 64 \implies r = 4\text{ cm}$. Notice $\frac{dS}{dt} = 8\pi r\frac{dr}{dt} = \frac{2}{r}\left(4\pi r^2\frac{dr}{dt}\right) = \frac{2}{r}\frac{dV}{dt}$!`,
        solution: String.raw`1. Find $r$: $\frac{4}{3}\pi r^3 = \frac{256}{3}\pi \implies r^3 = 64 \implies r = 4\text{ cm}$.
2. Find $\frac{dr}{dt}$: $-10 = 4\pi(4)^2\frac{dr}{dt} = 64\pi\frac{dr}{dt} \implies \frac{dr}{dt} = -\frac{5}{32\pi}\text{ cm/sec}$.
3. Find $\frac{dS}{dt}$:
   $$\frac{dS}{dt} = 8\pi r\frac{dr}{dt} = 8\pi(4)\left(-\frac{5}{32\pi}\right) = -5\text{ cm}^2/\text{sec}$$`,
      },
      {
        partId: 'circle-60pi',
        label: 'Page 23 YOU TRY: Expanding Circle (C = 60π)',
        prompt: String.raw`The radius of a circle increases at $0.4\text{ m/sec}$. What is the rate of increase in the area of the circle when the circumference is $60\pi\text{ m}$?`,
        inputType: 'numeric',
        placeholder: 'e.g. 24*pi or 75.398',
        unitLabel: 'm²/sec',
        numericAnswer: 24 * Math.PI,
        tolerance: 0.02,
        acceptedStrings: ['24*pi', '24pi'],
        hint1: String.raw`Use $C = 2\pi r = 60\pi$ to find $r$, then differentiate $A = \pi r^2$.`,
        hint2: String.raw`$r = 30\text{ m}$, so $\frac{dA}{dt} = 2\pi(30)(0.4)$.`,
        solution: String.raw`From $2\pi r = 60\pi$, $r = 30\text{ m}$.
$$\frac{dA}{dt} = 2\pi r\frac{dr}{dt} = 2\pi(30)(0.4) = 24\pi \approx 75.398\text{ m}^2/\text{sec}$$`,
      },
      {
        partId: 'cone-p23',
        label: 'Page 23 Example #5: Conical Water Tank (R=10, H=40)',
        prompt: String.raw`A conical tank (vertex down) has top radius $10\text{ ft}$ and depth $40\text{ ft}$. Water flows in at $7\text{ ft}^3/\text{min}$. How fast is the depth $h$ increasing when $h = 3\text{ ft}$? ($V = \frac{1}{3}\pi r^2 h$)`,
        inputType: 'numeric',
        placeholder: 'e.g. 112/(9*pi) or 3.961',
        unitLabel: 'ft/min',
        numericAnswer: 112 / (9 * Math.PI),
        tolerance: 0.005,
        acceptedStrings: ['112/(9*pi)', '112/(9pi)'],
        hint1: String.raw`Use similar triangles $\frac{r}{h} = \frac{10}{40} = \frac{1}{4} \implies r = \frac{h}{4}$ and substitute into $V = \frac{1}{3}\pi r^2 h$ **before** differentiating!`,
        hint2: String.raw`$V = \frac{1}{3}\pi\left(\frac{h}{4}\right)^2 h = \frac{\pi}{48}h^3 \implies \frac{dV}{dt} = \frac{\pi}{16}h^2\frac{dh}{dt}$. Plug in $\frac{dV}{dt} = 7$ and $h = 3$.`,
        solution: String.raw`By similar triangles, $\frac{r}{h} = \frac{10}{40} \implies r = \frac{h}{4}$:
$$V = \frac{1}{3}\pi\left(\frac{h}{4}\right)^2 h = \frac{\pi}{48}h^3 \implies \frac{dV}{dt} = \frac{\pi}{16}h^2\frac{dh}{dt}$$
At $h = 3\text{ ft}$ with $\frac{dV}{dt} = 7$:
$$7 = \frac{9\pi}{16}\frac{dh}{dt} \implies \frac{dh}{dt} = \frac{112}{9\pi} \approx 3.961\text{ ft/min}$$`,
      },
      {
        partId: 'cone-p24',
        label: 'Page 24 YOU TRY a Cone! (R=26, H=8, r=10)',
        prompt: String.raw`A conical tank is filled with water at $12\text{ m}^3/\text{sec}$. The tank has base radius $26\text{ m}$ and height $8\text{ m}$. At what rate is the depth $h$ changing when the water surface has radius $r = 10\text{ m}$?`,
        inputType: 'numeric',
        placeholder: 'e.g. 3/(25*pi) or 0.0382',
        unitLabel: 'm/sec',
        numericAnswer: 3 / (25 * Math.PI),
        tolerance: 0.001,
        acceptedStrings: ['3/(25*pi)', '3/(25pi)', '12/(100*pi)'],
        hint1: String.raw`Substitute $r = \frac{26}{8}h = \frac{13}{4}h$ into $V = \frac{1}{3}\pi r^2 h$ (and notice when $r = 10$, $\frac{13}{4}h = 10$)!`,
        hint2: String.raw`$V = \frac{1}{3}\pi\left(\frac{13}{4}h\right)^2 h \implies \frac{dV}{dt} = \pi\left(\frac{13}{4}h\right)^2\frac{dh}{dt} = \pi r^2 \frac{dh}{dt}$! Plug in $\frac{dV}{dt} = 12$ and $r = 10$.`,
        solution: String.raw`Since $\frac{r}{h} = \frac{26}{8} = \frac{13}{4}$, $r = \frac{13}{4}h$:
$$V = \frac{1}{3}\pi\left(\frac{13}{4}h\right)^2 h = \frac{169\pi}{48}h^3 \implies \frac{dV}{dt} = \frac{169\pi}{16}h^2\frac{dh}{dt} = \pi\left(\frac{13}{4}h\right)^2\frac{dh}{dt} = \pi r^2\frac{dh}{dt}$$
When $r = 10\text{ m}$ and $\frac{dV}{dt} = 12\text{ m}^3/\text{s}$:
$$12 = \pi(10)^2\frac{dh}{dt} \implies \frac{dh}{dt} = \frac{12}{100\pi} = \frac{3}{25\pi} \approx 0.038\text{ m/sec}$$`,
      },
      {
        partId: 'cylinder-2019',
        label: 'Page 24 YOU TRY a Cylinder! (2019 AP FRQ)',
        prompt: String.raw`A cylindrical barrel with **diameter $2\text{ feet}$** drains rainwater so that $\frac{dh}{dt} = -\frac{1}{10}\sqrt{h}\text{ ft/sec}$. Find $\dfrac{dV}{dt}$ when $h = 4\text{ feet}$. ($V = \pi r^2 h$)`,
        inputType: 'numeric',
        placeholder: 'e.g. -pi/5 or -0.628',
        unitLabel: 'ft³/sec',
        numericAnswer: -Math.PI / 5,
        tolerance: 0.005,
        acceptedStrings: ['-pi/5', '-1/5*pi'],
        hint1: String.raw`What is unique about a vertical cylinder? Its radius $r = \frac{2}{2} = 1\text{ ft}$ is **constant**!`,
        hint2: String.raw`Substitute $r = 1$ first: $V = \pi(1)^2 h = \pi h \implies \frac{dV}{dt} = \pi\frac{dh}{dt}$. Now plug in $h = 4$ into $\frac{dh}{dt} = -\frac{1}{10}\sqrt{h}$!`,
        solution: String.raw`Because the barrel is a cylinder of diameter $2\text{ ft}$, its radius is constant at $r = 1\text{ ft}$:
$$V = \pi(1)^2 h = \pi h \implies \frac{dV}{dt} = \pi\frac{dh}{dt} = -\frac{\pi}{10}\sqrt{h}$$
At $h = 4\text{ ft}$:
$$\frac{dV}{dt} = -\frac{\pi}{10}\sqrt{4} = -\frac{\pi}{5} \approx -0.628\text{ ft}^3/\text{sec}$$`,
      },
      {
        partId: 'pyramid-p24',
        label: 'Page 24 YOU TRY a Pyramid!',
        prompt: String.raw`A square-pyramid gift box has height $10\text{ cm}$ and base side $s = 8\text{ cm}$. Hot chocolate powder is poured in at $2\text{ cm}^3/\text{sec}$. How fast is the height $h$ rising when $h = 5\text{ cm}$? ($V = \frac{1}{3}s^2 h$)`,
        inputType: 'numeric',
        placeholder: 'e.g. 1/8 or 0.125',
        unitLabel: 'cm/sec',
        numericAnswer: 0.125,
        tolerance: 0.001,
        acceptedStrings: ['1/8', '0.125'],
        hint1: String.raw`Use similar cross-sections $\frac{s}{h} = \frac{8}{10} = \frac{4}{5} \implies s = \frac{4}{5}h$ before differentiating $V = \frac{1}{3}s^2 h$!`,
        hint2: String.raw`$V = \frac{1}{3}\left(\frac{4}{5}h\right)^2 h = \frac{16}{75}h^3 \implies \frac{dV}{dt} = \frac{16}{25}h^2\frac{dh}{dt}$. Plug in $\frac{dV}{dt} = 2$ and $h = 5$.`,
        solution: String.raw`By proportions, $\frac{s}{h} = \frac{8}{10} = \frac{4}{5} \implies s = \frac{4}{5}h$:
$$V = \frac{1}{3}\left(\frac{4}{5}h\right)^2 h = \frac{16}{75}h^3 \implies \frac{dV}{dt} = \frac{16}{25}h^2\frac{dh}{dt}$$
At $h = 5\text{ cm}$ with $\frac{dV}{dt} = 2$:
$$2 = \frac{16}{25}(25)\frac{dh}{dt} = 16\frac{dh}{dt} \implies \frac{dh}{dt} = \frac{2}{16} = \frac{1}{8} = 0.125\text{ cm/sec}$$`,
      },
    ],
  },
  {
    id: '4.5-recent-ap-frqs',
    module: 'lesson-4-4',
    section: 'Recent AP Related Rates FRQs: 2023, 2024, 2025 (Page 25)',
    badge: 'Page 25 • 2023 #6d, 2024 #5d, 2025 #6d',
    title: 'Particles Moving Along Implicit Curves (2023–2025 AP Exams)',
    calculator: 'non-calculator',
    stem: String.raw`On recent AP Calculus AB exams, Related Rates very frequently appears as part (d) of an implicit curve FRQ: differentiate every $x$ and $y$ term **with respect to $t$**, using the Product & Chain Rules!`,
    watchOut: String.raw`Unlike $\frac{dy}{dx}$ problems where $\frac{d}{dx}[x] = 1$, when differentiating with respect to **$t$**, BOTH $x$-terms and $y$-terms get rate factors ($\frac{dx}{dt}$ AND $\frac{dy}{dt}$)!`,
    inMockTest: true,
    parts: [
      {
        partId: '2023-6d',
        label: '2023 AP FRQ #6(d)',
        prompt: String.raw`A particle moves along $6xy = 2 + y^3$. At $\left(\frac{1}{2}, -2\right)$, $\dfrac{dx}{dt} = \dfrac{2}{3}\text{ unit/sec}$. Find $\dfrac{dy}{dt}$ at that instant.`,
        inputType: 'numeric',
        placeholder: 'e.g. -8/9',
        numericAnswer: -8 / 9,
        tolerance: 0.005,
        acceptedStrings: ['-8/9'],
        hint1: String.raw`Differentiate $6xy = 2 + y^3$ with respect to $t$ using the Product Rule on $6xy$!`,
        hint2: String.raw`$6y\frac{dx}{dt} + 6x\frac{dy}{dt} = 3y^2\frac{dy}{dt}$. Plug in $x = \frac{1}{2}, y = -2, \frac{dx}{dt} = \frac{2}{3}$.`,
        solution: String.raw`$$6y\frac{dx}{dt} + 6x\frac{dy}{dt} = 3y^2\frac{dy}{dt}$$
Substitute $x = \frac{1}{2}$, $y = -2$, and $\frac{dx}{dt} = \frac{2}{3}$:
$$6(-2)\left(\frac{2}{3}\right) + 6\left(\frac{1}{2}\right)\frac{dy}{dt} = 3(-2)^2\frac{dy}{dt} \implies -8 + 3\frac{dy}{dt} = 12\frac{dy}{dt} \implies 9\frac{dy}{dt} = -8 \implies \frac{dy}{dt} = -\frac{8}{9}$$`,
      },
      {
        partId: '2024-5d',
        label: '2024 AP FRQ #5(d)',
        prompt: String.raw`For $t \ge 0$, a particle moves along $y^3 + 2xy = 24$. At $(4, 2)$, the $y$-coordinate is **decreasing** at $2\text{ units/sec}$. Find $\dfrac{dx}{dt}$ at that instant.`,
        inputType: 'numeric',
        placeholder: 'e.g. 10',
        numericAnswer: 10,
        tolerance: 0.001,
        hint1: String.raw`Decreasing at $2\text{ units/sec}$ means $\frac{dy}{dt} = -2$! Differentiate $y^3 + 2xy = 24$ wrt $t$.`,
        hint2: String.raw`$3y^2\frac{dy}{dt} + 2x\frac{dy}{dt} + 2y\frac{dx}{dt} = 0$. Plug in $x = 4, y = 2, \frac{dy}{dt} = -2$.`,
        solution: String.raw`$$3y^2\frac{dy}{dt} + 2x\frac{dy}{dt} + 2y\frac{dx}{dt} = 0$$
Substitute $x = 4$, $y = 2$, and $\frac{dy}{dt} = -2$:
$$3(4)(-2) + 2(4)(-2) + 2(2)\frac{dx}{dt} = 0 \implies -24 - 16 + 4\frac{dx}{dt} = 0 \implies 4\frac{dx}{dt} = 40 \implies \frac{dx}{dt} = 10\text{ units/sec}$$`,
      },
      {
        partId: '2025-6d',
        label: '2025 AP FRQ #6(d)',
        prompt: String.raw`A particle moves along curve $H$ defined by $2xy + \ln y = 8$. At $(4, 1)$, $\dfrac{dx}{dt} = 3$. Find $\dfrac{dy}{dt}$ at that instant.`,
        inputType: 'numeric',
        placeholder: 'e.g. -2/3',
        numericAnswer: -2 / 3,
        tolerance: 0.005,
        acceptedStrings: ['-2/3'],
        hint1: String.raw`Differentiate $2xy + \ln y = 8$ wrt $t$: remember $\frac{d}{dt}[\ln y] = \frac{1}{y}\frac{dy}{dt}$!`,
        hint2: String.raw`$2y\frac{dx}{dt} + 2x\frac{dy}{dt} + \frac{1}{y}\frac{dy}{dt} = 0$. Plug in $x = 4, y = 1, \frac{dx}{dt} = 3$.`,
        solution: String.raw`$$2y\frac{dx}{dt} + 2x\frac{dy}{dt} + \frac{1}{y}\frac{dy}{dt} = 0$$
Substitute $x = 4$, $y = 1$, and $\frac{dx}{dt} = 3$:
$$2(1)(3) + 2(4)\frac{dy}{dt} + \frac{1}{1}\frac{dy}{dt} = 0 \implies 6 + 9\frac{dy}{dt} = 0 \implies \frac{dy}{dt} = -\frac{6}{9} = -\frac{2}{3}$$`,
      },
    ],
  },
  {
    id: '4.5-p26-capstone',
    module: 'lesson-4-4',
    section: 'Put Yourself to the Test! Capstone Problems (Page 26)',
    badge: 'Page 26 • Ferris Wheel MCQ & Concert FRQ',
    title: 'Ferris Wheel Distance MCQ & Outdoor Concert Standing Section',
    calculator: 'allowed',
    visual: 'ferris-wheel-diagram',
    stem: String.raw`Tackle the final two AP-level challenge problems on Page 26!`,
    inMockTest: true,
    parts: [
      {
        partId: 'ferris',
        label: 'Page 26 #1: Ferris Wheel AP MCQ',
        prompt: String.raw`Jalen's eye level is at $(0, 2)$ as he watches Ashanti at $(x, y)$ on a Ferris wheel of radius $5\text{ m}$ centered at $(12, 7)$. Let $Z$ be the distance from $(0, 2)$ to $(x, y)$. What is $\dfrac{dZ}{dt}$ when $x = 15$, $y = 11$, and $\dfrac{dx}{dt} = 1\text{ m/s}$? *(Circle equation: $(x - 12)^2 + (y - 7)^2 = 25$.)*`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`$\dfrac{dZ}{dt} = -\dfrac{11}{\sqrt{544}}$, so Ashanti is moving toward Jalen at $\approx 0.47\text{ m/s}$.`,
            explanation: String.raw`Sign error: 15(1) + 9(-3/4) = +33/4 > 0, so Z is increasing (moving away), not decreasing!`,
          },
          {
            label: 'B',
            text: String.raw`$\dfrac{dZ}{dt} = \dfrac{27}{4\sqrt{340}}$, so Ashanti is moving away from Jalen at $\approx 0.36\text{ m/s}$.`,
            explanation: String.raw`Used y² instead of (y - 2)² for Jalen's eye level at (0, 2)!`,
          },
          {
            label: 'C',
            text: String.raw`$\dfrac{dZ}{dt} = \dfrac{11}{\sqrt{544}}$, so Ashanti is moving away from Jalen at $\approx 0.47\text{ m/s}$.`,
            explanation: String.raw`Correct! From the circle, dy/dt = -3/4. Then Z² = x² + (y-2)² = 306 gives dZ/dt = (33/4)/√306 = 11/(4√34) = 11/√544 ≈ 0.47 m/s!`,
          },
          {
            label: 'D',
            text: String.raw`$\dfrac{dZ}{dt} = 13.5$, so Ashanti is moving away from Jalen at $13.5\text{ m/s}$.`,
            explanation: String.raw`Forgot to divide by 2Z when differentiating Z²!`,
          },
        ],
        hint1: String.raw`Step 1: Differentiate the circle $(x - 12)^2 + (y - 7)^2 = 25$ wrt $t$ to find $\frac{dy}{dt}$ at $(15, 11)$. Step 2: Differentiate $Z^2 = (x - 0)^2 + (y - 2)^2$ wrt $t$!`,
        hint2: String.raw`Circle gives $2(3)(1) + 2(4)\frac{dy}{dt} = 0 \implies \frac{dy}{dt} = -\frac{3}{4}$. At $(15, 11)$, $Z = \sqrt{15^2 + 9^2} = \sqrt{306} = 3\sqrt{34}$, and $Z\frac{dZ}{dt} = 15(1) + 9(-\frac{3}{4}) = \frac{33}{4}$.`,
        solution: String.raw`1. **Find $\frac{dy}{dt}$ from the Ferris wheel circle $(x - 12)^2 + (y - 7)^2 = 25$:**
   $$2(x - 12)\frac{dx}{dt} + 2(y - 7)\frac{dy}{dt} = 0 \implies 2(3)(1) + 2(4)\frac{dy}{dt} = 0 \implies \frac{dy}{dt} = -\frac{3}{4}\text{ m/s}$$
2. **Relate distance $Z$ from $(0, 2)$ to $(x, y)$:**
   $$Z^2 = x^2 + (y - 2)^2$$
   At $(15, 11)$, $Z = \sqrt{15^2 + 9^2} = \sqrt{306} = 3\sqrt{34}$. Differentiating wrt $t$:
   $$2Z\frac{dZ}{dt} = 2x\frac{dx}{dt} + 2(y - 2)\frac{dy}{dt} \implies \frac{dZ}{dt} = \frac{15(1) + 9(-3/4)}{3\sqrt{34}} = \frac{33/4}{3\sqrt{34}} = \frac{11}{4\sqrt{34}} = \frac{11}{\sqrt{544}} \approx 0.47\text{ m/s} \quad \textbf{(Choice C)}$$`,
      },
      {
        partId: 'concert',
        label: 'Page 26 #2(d): Outdoor Concert Rectangular Section',
        prompt: String.raw`A rectangular "standing-only" section at a concert venue has length $x$ (feet) and width $y$ (feet). The length $x$ is **increasing** at $6\text{ ft/hr}$, and the width $y$ is **decreasing** at $3\text{ ft/hr}$. What is the rate of change of the area $A$ of the section when $x = 16$ and $y = 10$?`,
        inputType: 'numeric',
        placeholder: 'e.g. 12',
        unitLabel: 'ft²/hr',
        numericAnswer: 12,
        tolerance: 0.001,
        hint1: String.raw`Write $A = xy$ and apply the Product Rule with respect to $t$: $\frac{dA}{dt} = x\frac{dy}{dt} + y\frac{dx}{dt}$!`,
        hint2: String.raw`Note $\frac{dx}{dt} = +6\text{ ft/hr}$ and $\frac{dy}{dt} = -3\text{ ft/hr}$ (decreasing!). Plug in $x = 16, y = 10$.`,
        solution: String.raw`$$A = xy \implies \frac{dA}{dt} = x\frac{dy}{dt} + y\frac{dx}{dt}$$
Substitute $x = 16$, $y = 10$, $\frac{dx}{dt} = 6$, and $\frac{dy}{dt} = -3$:
$$\frac{dA}{dt} = 16(-3) + 10(6) = -48 + 60 = 12\text{ square feet per hour } (\text{ft}^2/\text{hr})$$`,
      },
    ],
  },
];
