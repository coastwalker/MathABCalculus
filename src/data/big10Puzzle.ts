import { Problem } from '../types';

export const BIG_10_PUZZLE_PROBLEMS: Problem[] = [
  {
    id: 'big10-1',
    module: 'big-10-puzzle',
    section: 'Ch. 4 Big 10 Review Puzzle (#1–#10)',
    badge: 'Big 10 • #1',
    title: 'Motorcyclist Speed in Montana',
    calculator: 'non-calculator',
    puzzleDigit: 7,
    stem: String.raw`The position of a motorcyclist as time increases in hours, riding along a straight highway in Montana, is given by
$$s(t) = \frac{2}{3}t^3 - \frac{19}{2}t^2 + 32t$$
measured in miles.`,
    watchOut: String.raw`The question asks for **speed**, which is $|v(3)|$ (always non-negative!), NOT velocity $v(3) = -7$!`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Determine the **speed** of the motorcyclist at $t = 3$ hours.`,
        inputType: 'numeric',
        placeholder: 'Cross-off digit (0–9)',
        unitLabel: 'mph',
        numericAnswer: 7,
        tolerance: 0.001,
        hint1: String.raw`Differentiate $s(t)$ to find velocity $v(t) = s'(t)$, evaluate $v(3)$, and take its absolute value $|v(3)|$.`,
        hint2: String.raw`$v(t) = 2t^2 - 19t + 32 \implies v(3) = 2(9) - 19(3) + 32 = -7$. Now take $|v(3)|$!`,
        solution: String.raw`$$v(t) = s'(t) = 2t^2 - 19t + 32$$
Evaluate at $t = 3$:
$$v(3) = 2(3)^2 - 19(3) + 32 = 18 - 57 + 32 = -7\text{ mph}$$
$$\text{Speed at } t = 3 \text{ is } |v(3)| = |-7| = \mathbf{7}\text{ mph} \quad \text{(Cross off } \mathbf{7}\text{!)}$$`,
      },
    ],
  },
  {
    id: 'big10-2',
    module: 'big-10-puzzle',
    section: 'Ch. 4 Big 10 Review Puzzle (#1–#10)',
    badge: 'Big 10 • #2',
    title: 'Implicit Tangent Slope With Numeric Puzzle Code',
    calculator: 'non-calculator',
    puzzleDigit: 9,
    stem: String.raw`Consider the curve $xy^2 + 2xy = 8$. Determine the slope of the tangent line at the point $(1, 2)$, then use the numeric code table below to locate the puzzle digit to cross off:

| Choice | **A)** $-\frac{5}{2}$ | **B)** $-\frac{4}{3}$ | **C)** $-\frac{1}{2}$ | **D)** $-1$ |
| :--- | :---: | :---: | :---: | :---: |
| **Puzzle Digit** | ` + '`0`' + ` | ` + '`9`' + ` | ` + '`5`' + ` | ` + '`3`' + ` |`,
    watchOut: String.raw`Apply the Product Rule to **both** $xy^2$ and $2xy$, then map your slope to the puzzle digit in the bottom row!`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Enter the **puzzle digit** (` + '`0`' + `, ` + '`9`' + `, ` + '`5`' + `, or ` + '`3`' + `) corresponding to the tangent slope at $(1, 2)$.`,
        inputType: 'numeric',
        placeholder: 'Puzzle code digit (0, 9, 5, or 3)',
        numericAnswer: 9,
        tolerance: 0.001,
        hint1: String.raw`Differentiate implicitly: $(y^2 + 2xyy') + (2y + 2xy') = 0$, and substitute $(x, y) = (1, 2)$ immediately!`,
        hint2: String.raw`At $(1, 2)$: $(4 + 4y') + (4 + 2y') = 0 \implies 8 + 6y' = 0 \implies y' = -\frac{4}{3}$ (Choice B). Check the digit under Choice B!`,
        solution: String.raw`Differentiate $xy^2 + 2xy = 8$ implicitly with respect to $x$:
$$\left(1\cdot y^2 + x\cdot 2y\frac{dy}{dx}\right) + \left(2y + 2x\frac{dy}{dx}\right) = 0$$
Substitute $x = 1$ and $y = 2$:
$$4 + 4\frac{dy}{dx} + 4 + 2\frac{dy}{dx} = 0 \implies 6\frac{dy}{dx} = -8 \implies \frac{dy}{dx} = -\frac{4}{3} \quad \textbf{(Choice B)}$$
Looking up Choice **B** in the code row gives puzzle digit **$\mathbf{9}$**!`,
      },
    ],
  },
  {
    id: 'big10-3',
    module: 'big-10-puzzle',
    section: 'Ch. 4 Big 10 Review Puzzle (#1–#10)',
    badge: 'Big 10 • #3',
    title: 'Time When Particle Is at Rest',
    calculator: 'non-calculator',
    puzzleDigit: 2,
    stem: String.raw`If the position of a particle moving along the $x$-axis is given as $x(t) = t^2 - 4t + 5$, at what time $t \ge 0$ is the particle at rest?`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Find the time $t \ge 0$ when the particle is at rest.`,
        inputType: 'numeric',
        placeholder: 'Cross-off digit (0–9)',
        numericAnswer: 2,
        tolerance: 0.001,
        hint1: String.raw`A particle is at rest when its velocity $v(t) = x'(t) = 0$.`,
        hint2: String.raw`$x'(t) = 2t - 4 = 0$. Solve for $t$.`,
        solution: String.raw`$$v(t) = x'(t) = 2t - 4 = 0 \implies t = \mathbf{2} \quad \text{(Cross off } \mathbf{2}\text{!)}$$`,
      },
    ],
  },
  {
    id: 'big10-4',
    module: 'big-10-puzzle',
    section: 'Ch. 4 Big 10 Review Puzzle (#1–#10)',
    badge: 'Big 10 • #4',
    title: 'Rate of Change of Cube Surface Area',
    calculator: 'non-calculator',
    puzzleDigit: 8,
    stem: String.raw`If the side length of a cube is increasing at a rate of $\dfrac{1}{3}$ inch per second when the cube has a side length $s$, what is the rate of change of the **surface area** of the cube when the side length is $2$ inches? *(Recall a cube has $6$ congruent square faces: $SA = 6s^2$.)*`,
    watchOut: String.raw`This is the problem your teacher noted at the top of the sheet (*"Sorry! I wanted an answer to be 4. You will end up with two 8's!"*) — surface area $SA = 6s^2$ gives $8$, whereas volume $V = s^3$ would have given $3(2)^2(\frac{1}{3}) = 4$!`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Find $\dfrac{d(SA)}{dt}$ when $s = 2\text{ inches}$ and $\dfrac{ds}{dt} = \dfrac{1}{3}\text{ in/sec}$.`,
        inputType: 'numeric',
        placeholder: 'Cross-off digit (0–9)',
        unitLabel: 'in²/sec',
        numericAnswer: 8,
        tolerance: 0.001,
        hint1: String.raw`Differentiate surface area $SA = 6s^2$ with respect to time $t$: $\frac{d(SA)}{dt} = 12s\frac{ds}{dt}$.`,
        hint2: String.raw`Substitute $s = 2$ and $\frac{ds}{dt} = \frac{1}{3}$: $12(2)\left(\frac{1}{3}\right)$.`,
        solution: String.raw`$$SA = 6s^2 \implies \frac{d(SA)}{dt} = 12s\frac{ds}{dt}$$
At $s = 2\text{ in}$ and $\frac{ds}{dt} = \frac{1}{3}\text{ in/sec}$:
$$\frac{d(SA)}{dt} = 12(2)\left(\frac{1}{3}\right) = \mathbf{8}\text{ in}^2/\text{sec} \quad \text{(First } \mathbf{8}\text{!)}$$`,
      },
    ],
  },
  {
    id: 'big10-5',
    module: 'big-10-puzzle',
    section: 'Ch. 4 Big 10 Review Puzzle (#1–#10)',
    badge: 'Big 10 • #5',
    title: 'First Integer Time Particle Is Speeding Up',
    calculator: 'non-calculator',
    puzzleDigit: 3,
    stem: String.raw`Suppose a particle is moving along the $x$-axis with velocity $v(t) = 2t^2 - 7t + 5$, where $t \ge 0$. What is the **first integer time**, $t > 0$, where the particle is **speeding up**?`,
    watchOut: String.raw`Check $t = 1$, $t = 2$, and $t = 3$ carefully! At $t = 1$, $v(1) = 0$ (at rest, NOT speeding up); at $t = 2$, $v(2) = -1 < 0$ while $a(2) = 1 > 0$ (opposite signs = slowing down)!`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Enter the first integer time $t > 0$ where the particle is speeding up.`,
        inputType: 'numeric',
        placeholder: 'Cross-off digit (0–9)',
        numericAnswer: 3,
        tolerance: 0.001,
        hint1: String.raw`Find acceleration $a(t) = v'(t) = 4t - 7$, and test integer times $t = 1, 2, 3, \dots$ until $v(t)$ and $a(t)$ have the **same nonzero sign**!`,
        hint2: String.raw`Factor $v(t) = (2t - 5)(t - 1)$ (zeros at $t = 1, 2.5$) and $a(t) = 4t - 7$ (zero at $t = 1.75$). Check $t = 3$: $v(3) = 2 > 0$ and $a(3) = 5 > 0$!`,
        solution: String.raw`1. **Velocity & Acceleration:**
   $$v(t) = 2t^2 - 7t + 5 = (2t - 5)(t - 1), \qquad a(t) = v'(t) = 4t - 7$$
2. **Sign Chart / Integer Check ($t > 0$):**
   - $t = 1$: $v(1) = 0$ (at rest)
   - $t = 2$: $v(2) = -1 < 0,\; a(2) = +1 > 0$ (opposite signs $\implies$ slowing down)
   - $t = 3$: $v(3) = +2 > 0,\; a(3) = +5 > 0$ (**same sign $\implies$ speeding up!**)
   *(Note: $(1, 1.75)$ also has $v < 0, a < 0$, which contains no integers; $(2.5, \infty)$ has $v > 0, a > 0$, whose first integer is $t = \mathbf{3}$!)*`,
      },
    ],
  },
  {
    id: 'big10-6',
    module: 'big-10-puzzle',
    section: 'Ch. 4 Big 10 Review Puzzle (#1–#10)',
    badge: 'Big 10 • #6',
    title: '15-Foot Ladder Pushed Up a Wall (Angle Rate)',
    calculator: 'non-calculator',
    puzzleDigit: 1,
    stem: String.raw`The top of a $15\text{-foot-long}$ ladder rests against a vertical wall with the bottom of the ladder on level ground. The ladder is being pushed up the wall at a constant rate of $9\text{ feet per minute}$.`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`At what rate, in radians per minute, is the acute angle $\theta$ between the bottom of the ladder and the ground changing at the instant the top of the ladder is $12\text{ feet}$ above the ground?`,
        inputType: 'numeric',
        placeholder: 'Cross-off digit (0–9)',
        unitLabel: 'rad/min',
        numericAnswer: 1,
        tolerance: 0.001,
        hint1: String.raw`Since the hypotenuse $15\text{ ft}$ is constant and you know $\frac{dy}{dt} = +9\text{ ft/min}$, relate $\theta$ and $y$ directly with $\sin\theta = \frac{y}{15}$!`,
        hint2: String.raw`Differentiate: $\cos\theta\frac{d\theta}{dt} = \frac{1}{15}\frac{dy}{dt}$. When $y = 12$ and hypotenuse $= 15$, base $x = \sqrt{225 - 144} = 9$, so $\cos\theta = \frac{9}{15}$!`,
        solution: String.raw`Relate angle $\theta$ (with the ground) to height $y$ up the wall and constant hypotenuse $15\text{ ft}$:
$$\sin\theta = \frac{y}{15} \implies \cos\theta\frac{d\theta}{dt} = \frac{1}{15}\frac{dy}{dt}$$
At $y = 12\text{ ft}$, the base distance is $x = \sqrt{15^2 - 12^2} = 9\text{ ft}$, so $\cos\theta = \frac{9}{15}$:
$$\frac{9}{15}\frac{d\theta}{dt} = \frac{9}{15} \implies \frac{d\theta}{dt} = \mathbf{1}\text{ rad/min} \quad \text{(Cross off } \mathbf{1}\text{!)}$$`,
      },
    ],
  },
  {
    id: 'big10-7',
    module: 'big-10-puzzle',
    section: 'Ch. 4 Big 10 Review Puzzle (#1–#10)',
    badge: 'Big 10 • #7',
    title: 'Horizontally Flying Kite Average Velocity From Table',
    calculator: 'non-calculator',
    puzzleDigit: 5,
    stem: String.raw`Let $s(t)$ represent the position function (in meters) of a horizontally flying kite with selected values given in the table below ($t$ in seconds):

| $t$ | $0$ | $0.5$ | $1.0$ | $1.5$ | $2.0$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $s(t)$ | $-15$ | $-8$ | $-10$ | $-11$ | $-5$ |`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`What is the **average velocity** over the time interval $[0, 2]$ in meters per second?`,
        inputType: 'numeric',
        placeholder: 'Cross-off digit (0–9)',
        unitLabel: 'm/s',
        numericAnswer: 5,
        tolerance: 0.001,
        hint1: String.raw`Average velocity on $[0, 2]$ is the slope of the secant line: $\frac{s(2) - s(0)}{2 - 0}$.`,
        hint2: String.raw`Read $s(2) = -5$ and $s(0) = -15$ from the table: $\frac{-5 - (-15)}{2 - 0}$.`,
        solution: String.raw`$$\text{Average Velocity} = \frac{s(2) - s(0)}{2 - 0} = \frac{-5 - (-15)}{2} = \frac{10}{2} = \mathbf{5}\text{ m/s} \quad \text{(Cross off } \mathbf{5}\text{!)}$$`,
      },
    ],
  },
  {
    id: 'big10-8',
    module: 'big-10-puzzle',
    section: 'Ch. 4 Big 10 Review Puzzle (#1–#10)',
    badge: 'Big 10 • #8',
    title: 'Acceleration of Exponential-Trig Velocity Particle',
    calculator: 'non-calculator',
    puzzleDigit: 0,
    stem: String.raw`If the velocity of a particle is given as $v(t) = e^{\cos(t)}$, find the **acceleration** of the particle at $t = \pi$.`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Evaluate $a(\pi) = v'(\pi)$.`,
        inputType: 'numeric',
        placeholder: 'Cross-off digit (0–9)',
        numericAnswer: 0,
        tolerance: 0.001,
        hint1: String.raw`Apply the Chain Rule to $v(t) = e^{\cos(t)}$: $\frac{d}{dt}[e^u] = e^u \cdot u'$.`,
        hint2: String.raw`$a(t) = e^{\cos(t)} \cdot (-\sin t)$. Remember $\sin(\pi) = 0$!`,
        solution: String.raw`$$a(t) = v'(t) = e^{\cos(t)} \cdot (-\sin t)$$
Evaluate at $t = \pi$:
$$a(\pi) = -e^{\cos(\pi)}\sin(\pi) = -e^{-1}(0) = \mathbf{0} \quad \text{(Cross off } \mathbf{0}\text{!)}$$`,
      },
    ],
  },
  {
    id: 'big10-9',
    module: 'big-10-puzzle',
    section: 'Ch. 4 Big 10 Review Puzzle (#1–#10)',
    badge: 'Big 10 • #9',
    title: '3/4 of the Rate of Change of Irregular Shape Area',
    calculator: 'non-calculator',
    puzzleDigit: 6,
    stem: String.raw`The area of an irregular shape, $A$, with given side length $S$ is given by the equation $A = S^2 - 2S$. When the side length $S$ is $3\text{ feet}$, it is known that the side length is increasing at a rate of $2\text{ feet per second}$.`,
    watchOut: String.raw`Read the prompt carefully! It asks for **$\dfrac{3}{4}$** of $\dfrac{dA}{dt}$ at $S = 3\text{ ft}$ (since $\frac{dA}{dt} = 8$, $\frac{3}{4}$ of $8$ gives $6$)!`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`What is **$\dfrac{3}{4}$** the rate of change of the area of the shape with respect to time at the instant $S = 3\text{ feet}$?`,
        inputType: 'numeric',
        placeholder: 'Cross-off digit (0–9)',
        numericAnswer: 6,
        tolerance: 0.001,
        hint1: String.raw`Differentiate $A = S^2 - 2S$ with respect to $t$: $\frac{dA}{dt} = (2S - 2)\frac{dS}{dt}$, then multiply your result by $\frac{3}{4}$!`,
        hint2: String.raw`At $S = 3$ and $\frac{dS}{dt} = 2$: $\frac{dA}{dt} = (2(3) - 2)(2) = 4(2) = 8$. Now take $\frac{3}{4} \times 8$!`,
        solution: String.raw`$$A = S^2 - 2S \implies \frac{dA}{dt} = (2S - 2)\frac{dS}{dt}$$
At $S = 3\text{ ft}$ and $\frac{dS}{dt} = 2\text{ ft/sec}$:
$$\frac{dA}{dt} = (2(3) - 2)(2) = 8\text{ ft}^2/\text{sec}$$
Multiply by $\frac{3}{4}$ as requested:
$$\frac{3}{4}\left(\frac{dA}{dt}\right) = \frac{3}{4}(8) = \mathbf{6} \quad \text{(Cross off } \mathbf{6}\text{!)}$$`,
      },
    ],
  },
  {
    id: 'big10-10',
    module: 'big-10-puzzle',
    section: 'Ch. 4 Big 10 Review Puzzle (#1–#10)',
    badge: 'Big 10 • #10',
    title: 'Implicit Second Derivative of y² + 8x² = 1 at (0, −1)',
    calculator: 'non-calculator',
    puzzleDigit: 8,
    stem: String.raw`Consider the curve $y^2 + 8x^2 = 1$. Find $\dfrac{d^2y}{dx^2}$ at the point $(0, -1)$.`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Evaluate $\left.\dfrac{d^2y}{dx^2}\right|_{(0, -1)}$.`,
        inputType: 'numeric',
        placeholder: 'Cross-off digit (0–9)',
        numericAnswer: 8,
        tolerance: 0.001,
        hint1: String.raw`Differentiate $y^2 + 8x^2 = 1$ implicitly twice: $2yy' + 16x = 0$, then $2(y')^2 + 2yy'' + 16 = 0$!`,
        hint2: String.raw`At $(0, -1)$, $2(-1)y' + 0 = 0 \implies y' = 0$. Plug $y = -1$ and $y' = 0$ into $2(y')^2 + 2yy'' + 16 = 0$.`,
        solution: String.raw`1. **First Derivative:**
   $$2y\frac{dy}{dx} + 16x = 0 \implies \text{at } (0, -1),\; -2\frac{dy}{dx} + 0 = 0 \implies \frac{dy}{dx} = 0$$
2. **Second Derivative:**
   $$2\left(\frac{dy}{dx}\right)^2 + 2y\frac{d^2y}{dx^2} + 16 = 0$$
   Substitute $y = -1$ and $\frac{dy}{dx} = 0$:
   $$2(0)^2 + 2(-1)\frac{d^2y}{dx^2} + 16 = 0 \implies -2\frac{d^2y}{dx^2} = -16 \implies \frac{d^2y}{dx^2} = \mathbf{8} \quad \text{(Second } \mathbf{8}\text{!)}$$`,
      },
    ],
  },
];
