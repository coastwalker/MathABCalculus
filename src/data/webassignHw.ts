import { Problem } from '../types';

export const WEBASSIGN_HW_PROBLEMS: Problem[] = [
  {
    id: 'hw-1',
    module: 'webassign-hw',
    section: 'WebAssign HW: Implicit & Geometric Related Rates (#1–#5)',
    badge: 'HW #1 • LarCalc11HS 2.6.006 [2 Pts]',
    title: 'Differentiable Functions x(t) and y(t) on x² + y² = 169',
    calculator: 'non-calculator',
    stem: String.raw`Assume that $x$ and $y$ are both differentiable functions of $t$ and find the required values of $\dfrac{dy}{dt}$ and $\dfrac{dx}{dt}$ for:
$$x^2 + y^2 = 169$$`,
    watchOut: String.raw`Remember $\frac{d}{dt}[169] = 0$ (constant right-hand side!), and watch negative signs when isolating $\frac{dy}{dt}$ or $\frac{dx}{dt}$.`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`Find $\dfrac{dy}{dt}$, given $x = 5$, $y = 12$, and $\dfrac{dx}{dt} = 7$.`,
        inputType: 'numeric',
        placeholder: 'e.g. -35/12 or -2.917',
        numericAnswer: -35 / 12,
        tolerance: 0.005,
        acceptedStrings: ['-35/12'],
        hint1: String.raw`Differentiate both sides of $x^2 + y^2 = 169$ with respect to time $t$.`,
        hint2: String.raw`$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0 \implies x\frac{dx}{dt} + y\frac{dy}{dt} = 0$. Plug in $x = 5, y = 12, \frac{dx}{dt} = 7$.`,
        solution: String.raw`Differentiate $x^2 + y^2 = 169$ with respect to $t$:
$$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0 \implies x\frac{dx}{dt} + y\frac{dy}{dt} = 0$$
Substitute $x = 5$, $y = 12$, and $\frac{dx}{dt} = 7$:
$$5(7) + 12\frac{dy}{dt} = 0 \implies 12\frac{dy}{dt} = -35 \implies \frac{dy}{dt} = -\frac{35}{12} \approx -2.917$$`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`Find $\dfrac{dx}{dt}$, given $x = 12$, $y = 5$, and $\dfrac{dy}{dt} = -2$.`,
        inputType: 'numeric',
        placeholder: 'e.g. 5/6 or 0.833',
        numericAnswer: 5 / 6,
        tolerance: 0.005,
        acceptedStrings: ['5/6', '10/12'],
        hint1: String.raw`Use the same differentiated equation $x\frac{dx}{dt} + y\frac{dy}{dt} = 0$.`,
        hint2: String.raw`Substitute $x = 12$, $y = 5$, and $\frac{dy}{dt} = -2$: $12\frac{dx}{dt} + 5(-2) = 0$.`,
        solution: String.raw`Using $x\frac{dx}{dt} + y\frac{dy}{dt} = 0$ with $x = 12$, $y = 5$, and $\frac{dy}{dt} = -2$:
$$12\frac{dx}{dt} + 5(-2) = 0 \implies 12\frac{dx}{dt} = 10 \implies \frac{dx}{dt} = \frac{10}{12} = \frac{5}{6} \approx 0.833$$`,
      },
    ],
  },
  {
    id: 'hw-2',
    module: 'webassign-hw',
    section: 'WebAssign HW: Implicit & Geometric Related Rates (#1–#5)',
    badge: 'HW #2 • LarCalc11HS 2.6.011 [1 Pt]',
    title: 'Expanding Circle Area Rate',
    calculator: 'non-calculator',
    stem: String.raw`The radius $r$ of a circle is increasing at a rate of $8$ centimeters per minute.`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Find the rate of change of the area when $r = 38$ centimeters. *(You may enter exact form like ` + '`608*pi`' + ` or a decimal.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 608*pi or 1910.088',
        unitLabel: 'cm²/min',
        numericAnswer: 608 * Math.PI,
        tolerance: 0.05,
        acceptedStrings: ['608*pi', '608pi'],
        hint1: String.raw`Write the area of a circle $A = \pi r^2$ and differentiate both sides with respect to time $t$.`,
        hint2: String.raw`$\frac{dA}{dt} = 2\pi r\frac{dr}{dt}$. Substitute $r = 38$ and $\frac{dr}{dt} = 8$.`,
        solution: String.raw`$$A = \pi r^2 \implies \frac{dA}{dt} = 2\pi r\frac{dr}{dt}$$
Substitute $r = 38\text{ cm}$ and $\frac{dr}{dt} = 8\text{ cm/min}$:
$$\frac{dA}{dt} = 2\pi(38)(8) = 608\pi \approx 1910.088\text{ cm}^2/\text{min}$$`,
      },
    ],
  },
  {
    id: 'hw-3',
    module: 'webassign-hw',
    section: 'WebAssign HW: Implicit & Geometric Related Rates (#1–#5)',
    badge: 'HW #3 • LarCalc11HS 2.6.013 [2 Pts]',
    title: 'Expanding Sphere Volume Rate',
    calculator: 'non-calculator',
    stem: String.raw`The radius $r$ of a sphere is increasing at a rate of $6$ inches per minute. *(Recall $V = \frac{4}{3}\pi r^3$.)*`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`Find the rate of change of the volume when $r = 10$ inches. *(Enter exact ` + '`2400*pi`' + ` or decimal.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 2400*pi or 7539.822',
        unitLabel: 'in.³/min',
        numericAnswer: 2400 * Math.PI,
        tolerance: 0.1,
        acceptedStrings: ['2400*pi', '2400pi'],
        hint1: String.raw`Differentiate $V = \frac{4}{3}\pi r^3$ with respect to $t$: $\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt}$.`,
        hint2: String.raw`Plug in $r = 10$ and $\frac{dr}{dt} = 6$: $4\pi(10)^2(6)$.`,
        solution: String.raw`$$V = \frac{4}{3}\pi r^3 \implies \frac{dV}{dt} = 4\pi r^2\frac{dr}{dt}$$
When $r = 10\text{ in}$ and $\frac{dr}{dt} = 6\text{ in/min}$:
$$\frac{dV}{dt} = 4\pi(10)^2(6) = 2400\pi \approx 7539.822\text{ in.}^3/\text{min}$$`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`Find the rate of change of the volume when $r = 35$ inches. *(Enter exact ` + '`29400*pi`' + ` or decimal.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 29400*pi or 92362.824',
        unitLabel: 'in.³/min',
        numericAnswer: 29400 * Math.PI,
        tolerance: 0.5,
        acceptedStrings: ['29400*pi', '29400pi'],
        hint1: String.raw`Use $\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt}$ with $r = 35$ and $\frac{dr}{dt} = 6$.`,
        hint2: String.raw`Compute $35^2 = 1225$, then multiply $4 \times 1225 \times 6 = 29400$ by $\pi$.`,
        solution: String.raw`When $r = 35\text{ in}$ and $\frac{dr}{dt} = 6\text{ in/min}$:
$$\frac{dV}{dt} = 4\pi(35)^2(6) = 24\pi(1225) = 29400\pi \approx 92362.824\text{ in.}^3/\text{min}$$`,
      },
    ],
  },
  {
    id: 'hw-4',
    module: 'webassign-hw',
    section: 'WebAssign HW: Implicit & Geometric Related Rates (#1–#5)',
    badge: 'HW #4 • LarCalc11HS 2.6.015 [2 Pts]',
    title: 'Expanding Cube Volume Rate',
    calculator: 'non-calculator',
    stem: String.raw`All edges of a cube are expanding at a rate of $9$ centimeters per second.`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`How fast is the volume changing when each edge is $2$ centimeters?`,
        inputType: 'numeric',
        placeholder: 'e.g. 108',
        unitLabel: 'cm³/sec',
        numericAnswer: 108,
        tolerance: 0.01,
        hint1: String.raw`Let $x$ be the edge length of the cube, so $V = x^3$. Differentiate wrt $t$!`,
        hint2: String.raw`$\frac{dV}{dt} = 3x^2\frac{dx}{dt}$. Substitute $x = 2$ and $\frac{dx}{dt} = 9$.`,
        solution: String.raw`$$V = x^3 \implies \frac{dV}{dt} = 3x^2\frac{dx}{dt}$$
At $x = 2\text{ cm}$ and $\frac{dx}{dt} = 9\text{ cm/sec}$:
$$\frac{dV}{dt} = 3(2)^2(9) = 3(4)(9) = 108\text{ cm}^3/\text{sec}$$`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`How fast is the volume changing when each edge is $13$ centimeters?`,
        inputType: 'numeric',
        placeholder: 'e.g. 4563',
        unitLabel: 'cm³/sec',
        numericAnswer: 4563,
        tolerance: 0.01,
        hint1: String.raw`Use $\frac{dV}{dt} = 3x^2\frac{dx}{dt}$ with $x = 13$ and $\frac{dx}{dt} = 9$.`,
        hint2: String.raw`$13^2 = 169$, so $\frac{dV}{dt} = 3(169)(9) = 27 \times 169$.`,
        solution: String.raw`At $x = 13\text{ cm}$ and $\frac{dx}{dt} = 9\text{ cm/sec}$:
$$\frac{dV}{dt} = 3(13)^2(9) = 27(169) = 4563\text{ cm}^3/\text{sec}$$`,
      },
    ],
  },
  {
    id: 'hw-5',
    module: 'webassign-hw',
    section: 'WebAssign HW: Implicit & Geometric Related Rates (#1–#5)',
    badge: 'HW #5 • LarCalc11HS 2.6.017.MI [1 Pt]',
    title: 'Conical Sand Pile at a Sand & Gravel Plant',
    calculator: 'non-calculator',
    stem: String.raw`At a sand and gravel plant, sand is falling off a conveyor and onto a conical pile at a rate of $14$ cubic feet per minute. The **diameter** of the base of the cone is **three times the altitude**. *(Hint: $V = \frac{1}{3}\pi r^2 h$.)*`,
    watchOut: String.raw`Read carefully: **diameter** $= 3h$ means $2r = 3h \implies r = \frac{3}{2}h$ (do NOT write $r = 3h$)!`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`At what rate is the height of the pile changing ($h' = \frac{dh}{dt}$) when the pile is $2$ feet high? *(Enter exact ` + '`14/(9*pi)`' + ` or decimal.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 14/(9*pi) or 0.495',
        unitLabel: 'ft/min',
        numericAnswer: 14 / (9 * Math.PI),
        tolerance: 0.005,
        acceptedStrings: ['14/(9*pi)', '14/(9pi)'],
        hint1: String.raw`Since diameter $= 2r = 3h$, substitute $r = \frac{3}{2}h$ into $V = \frac{1}{3}\pi r^2 h$ **before** differentiating!`,
        hint2: String.raw`$V = \frac{1}{3}\pi\left(\frac{3}{2}h\right)^2 h = \frac{3\pi}{4}h^3 \implies \frac{dV}{dt} = \frac{9\pi}{4}h^2\frac{dh}{dt}$. Plug in $\frac{dV}{dt} = 14$ and $h = 2$.`,
        solution: String.raw`Since diameter $d = 2r = 3h$, we have $r = \frac{3}{2}h$. Substitute into $V = \frac{1}{3}\pi r^2 h$:
$$V = \frac{1}{3}\pi\left(\frac{3}{2}h\right)^2 h = \frac{3\pi}{4}h^3$$
Differentiate with respect to $t$:
$$\frac{dV}{dt} = \frac{9\pi}{4}h^2\frac{dh}{dt}$$
Substitute $\frac{dV}{dt} = 14\text{ ft}^3/\text{min}$ and $h = 2\text{ ft}$:
$$14 = \frac{9\pi}{4}(2)^2\frac{dh}{dt} = 9\pi\frac{dh}{dt} \implies \frac{dh}{dt} = \frac{14}{9\pi} \approx 0.495\text{ ft/min}$$`,
      },
    ],
  },
  {
    id: 'hw-6',
    module: 'webassign-hw',
    section: 'WebAssign HW: Applied Word Problems & AP MCQs (#6–#9)',
    badge: 'HW #6 • LarCalc11HS 2.6.022 [1 Pt]',
    title: 'Construction Worker Pulling a 5-Meter Plank',
    calculator: 'allowed',
    visual: 'plank-pulley-diagram',
    stem: String.raw`A construction worker pulls a **five-meter plank** up the side of a building under construction by means of a rope tied to one end of the plank (see figure). Assume the opposite end of the plank follows a path perpendicular to the wall of the building and the worker pulls the rope at a rate of **$0.20$ meter per second**.`,
    watchOut: String.raw`"How fast is the end of the plank sliding..." asks for the positive **speed** ($|\frac{dx}{dt}| \approx 0.46\text{ m/sec}$), rounded to **two decimal places** for WebAssign!`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`How fast is the end of the plank sliding along the ground when it is **$2.0$ meters** from the wall of the building? *(Round your answer to two decimal places.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 0.46',
        unitLabel: 'm/sec',
        numericAnswer: 0.458258,
        tolerance: 0.006,
        acceptedStrings: ['0.46', '0.458', '-0.46', '-0.458', 'sqrt(21)/10', '-sqrt(21)/10'],
        hint1: String.raw`Let $x$ be the distance along the ground from the wall and $y$ be the height of the pulled end up the wall: $x^2 + y^2 = 5^2 = 25$.`,
        hint2: String.raw`When $x = 2.0\text{ m}$, $y = \sqrt{25 - 4} = \sqrt{21}\text{ m}$, and $\frac{dy}{dt} = +0.20\text{ m/sec}$. Solve $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$!`,
        solution: String.raw`By the Pythagorean Theorem:
$$x^2 + y^2 = 5^2 = 25 \implies 2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0 \implies \frac{dx}{dt} = -\frac{y}{x}\frac{dy}{dt}$$
When $x = 2.0\text{ m}$, $y = \sqrt{25 - 2.0^2} = \sqrt{21}\text{ m}$, and $\frac{dy}{dt} = 0.20\text{ m/sec}$:
$$\frac{dx}{dt} = -\frac{\sqrt{21}}{2.0}(0.20) = -0.10\sqrt{21} \approx -0.4583\text{ m/sec}$$
*(The negative sign means $x$ is decreasing toward the wall.)* Rounded to two decimal places, the end of the plank slides along the ground at a speed of **$0.46\text{ m/sec}$**.`,
      },
    ],
  },
  {
    id: 'hw-7',
    module: 'webassign-hw',
    section: 'WebAssign HW: Applied Word Problems & AP MCQs (#6–#9)',
    badge: 'HW #7 • LarCalc11HS 2.6.029 [2 Pts]',
    title: '6-Foot Student Walking Away from a 15-Foot Streetlight',
    calculator: 'non-calculator',
    visual: 'streetlamp-shadow-diagram',
    stem: String.raw`A $6\text{ foot}$ tall student walks at a rate of $7\text{ feet per second}$ away from a light that is $15\text{ feet}$ above the ground (see figure).`,
    watchOut: String.raw`Read the order of parts carefully! Part (a) asks for the **tip of the shadow** ($T = x + s$), whereas Part (b) asks for the **length of the shadow** ($s$)!`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a): Tip of Shadow',
        prompt: String.raw`When the student is $10\text{ feet}$ from the base of the light, at what rate (in $\text{ft/sec}$) is the **tip of their shadow** moving?`,
        inputType: 'numeric',
        placeholder: 'e.g. 35/3 or 11.667',
        unitLabel: 'ft/sec',
        numericAnswer: 35 / 3,
        tolerance: 0.005,
        acceptedStrings: ['35/3'],
        hint1: String.raw`Let $x$ be the student's distance from the post and $T$ be the tip's distance from the post. By similar triangles: $\frac{15}{T} = \frac{6}{T - x}$!`,
        hint2: String.raw`Cross-multiply: $15(T - x) = 6T \implies 9T = 15x \implies T = \frac{5}{3}x$. Now differentiate wrt $t$ using $\frac{dx}{dt} = 7$!`,
        solution: String.raw`Let $x$ be the student's distance from the post and $T$ be the distance from the post to the tip of the shadow. By similar right triangles:
$$\frac{15}{T} = \frac{6}{T - x} \implies 15T - 15x = 6T \implies 9T = 15x \implies T = \frac{5}{3}x$$
Differentiate with respect to $t$ (with $\frac{dx}{dt} = 7\text{ ft/sec}$):
$$\frac{dT}{dt} = \frac{5}{3}\frac{dx}{dt} = \frac{5}{3}(7) = \frac{35}{3} \approx 11.667\text{ ft/sec}$$`,
      },
      {
        partId: 'b',
        label: 'Part (b): Length of Shadow',
        prompt: String.raw`When the student is $10\text{ feet}$ from the base of the light, at what rate (in $\text{ft/sec}$) is the **length of their shadow** changing?`,
        inputType: 'numeric',
        placeholder: 'e.g. 14/3 or 4.667',
        unitLabel: 'ft/sec',
        numericAnswer: 14 / 3,
        tolerance: 0.005,
        acceptedStrings: ['14/3'],
        hint1: String.raw`The shadow length is $s = T - x$, so $\frac{ds}{dt} = \frac{dT}{dt} - \frac{dx}{dt}$ (or from $\frac{15}{x + s} = \frac{6}{s} \implies s = \frac{2}{3}x$)!`,
        hint2: String.raw`$\frac{ds}{dt} = \frac{35}{3} - 7 = \frac{35 - 21}{3} = \frac{14}{3}$.`,
        solution: String.raw`Since shadow length $s = T - x = \frac{5}{3}x - x = \frac{2}{3}x$:
$$\frac{ds}{dt} = \frac{2}{3}\frac{dx}{dt} = \frac{2}{3}(7) = \frac{14}{3} \approx 4.667\text{ ft/sec}$$`,
      },
    ],
  },
  {
    id: 'hw-8',
    module: 'webassign-hw',
    section: 'WebAssign HW: Applied Word Problems & AP MCQs (#6–#9)',
    badge: 'HW #8 • LarCalc11HS 2.AP.010 [1 Pt]',
    title: 'Expanding Cylinder With Both r and h Changing (AP MCQ)',
    calculator: 'non-calculator',
    stem: String.raw`The volume of a cylinder with radius $r$ and height $h$ is given by $V = \pi r^2 h$. The radius of the cylinder is increasing at a rate of $\dfrac{1}{3}$ centimeter per second and the height of the cylinder is increasing at a rate of $\dfrac{1}{2}$ centimeter per second.`,
    watchOut: String.raw`Here **both** $r$ and $h$ are changing with time, so you MUST use the **Product Rule** on $r^2 \cdot h$!`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`At what rate, in cubic centimeters per second, is the volume of the cylinder increasing when its height is $9$ centimeters and its radius is $4$ centimeters?`,
        inputType: 'mcq',
        correctIndex: 3,
        options: [
          {
            label: 'A',
            text: String.raw`$\dfrac{4\pi}{3}$`,
            explanation: String.raw`Incorrect: differentiated r²h as 2r(dr/dt)(dh/dt) instead of applying the Product Rule!`,
          },
          {
            label: 'B',
            text: String.raw`$\dfrac{8\pi}{3}$`,
            explanation: String.raw`Incorrect: omitted h and r² in the Product Rule.`,
          },
          {
            label: 'C',
            text: String.raw`$6\pi$`,
            explanation: String.raw`Incorrect: forgot to square r or dropped a term in the Product Rule.`,
          },
          {
            label: 'D',
            text: String.raw`$32\pi$`,
            explanation: String.raw`Correct! dV/dt = π[2rh(dr/dt) + r²(dh/dt)] = π[2(4)(9)(1/3) + (16)(1/2)] = π(24 + 8) = 32π cm³/sec!`,
          },
        ],
        hint1: String.raw`Apply the Product Rule to $V = \pi(r^2 \cdot h)$ with respect to $t$!`,
        hint2: String.raw`$\frac{dV}{dt} = \pi\left(2r\frac{dr}{dt}\cdot h + r^2\frac{dh}{dt}\right)$. Plug in $r = 4, h = 9, \frac{dr}{dt} = \frac{1}{3}, \frac{dh}{dt} = \frac{1}{2}$.`,
        solution: String.raw`Differentiate $V = \pi r^2 h$ with respect to $t$ using the Product Rule:
$$\frac{dV}{dt} = \pi\left(2rh\frac{dr}{dt} + r^2\frac{dh}{dt}\right)$$
Substitute $r = 4$, $h = 9$, $\frac{dr}{dt} = \frac{1}{3}$, and $\frac{dh}{dt} = \frac{1}{2}$:
$$\frac{dV}{dt} = \pi\left(2(4)(9)\left(\frac{1}{3}\right) + (4)^2\left(\frac{1}{2}\right)\right) = \pi(24 + 8) = 32\pi\text{ cm}^3/\text{sec} \quad \textbf{(Choice D)}$$`,
      },
    ],
  },
  {
    id: 'hw-9',
    module: 'webassign-hw',
    section: 'WebAssign HW: Applied Word Problems & AP MCQs (#6–#9)',
    badge: 'HW #9 • LarCalc11HS 2.AP.011 [1 Pt]',
    title: 'Standing Observer Watching a Westbound Car (Calculator AP MCQ)',
    calculator: 'allowed',
    stem: String.raw`Two roads intersect at right angles. You are **standing** $25\text{ meters}$ north of the intersection on one of the roads. You are watching a car traveling west at $30\text{ meters per second}$.`,
    watchOut: String.raw`You are **standing still**, so $y = 25\text{ m}$ is constant ($\frac{dy}{dt} = 0$)! After $3\text{ seconds}$ at $30\text{ m/s}$, the car is at $x = 30(3) = 90\text{ m}$.`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`At how many meters per second is the car traveling away from you $3\text{ seconds}$ after it passes through the intersection?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`$23.047$`,
            explanation: String.raw`Incorrect: used x = 30 m (at t = 1 sec) instead of x = 30 × 3 = 90 m!`,
          },
          {
            label: 'B',
            text: String.raw`$28.906$`,
            explanation: String.raw`Correct! At t = 3 s, x = 90 m and z = √(90² + 25²) = √8725. Then dz/dt = (x/z)(dx/dt) = (90 · 30)/√8725 ≈ 28.906 m/s!`,
          },
          {
            label: 'C',
            text: String.raw`$29.032$`,
            explanation: String.raw`Incorrect Pythagorean setup.`,
          },
          {
            label: 'D',
            text: String.raw`$30$`,
            explanation: String.raw`Incorrect: 30 m/s is dx/dt along the road, not dz/dt along your line of sight!`,
          },
        ],
        hint1: String.raw`Set up the right triangle $x^2 + 25^2 = z^2$, where $x$ is the car's distance west of the intersection and $z$ is the distance from you to the car.`,
        hint2: String.raw`At $t = 3\text{ sec}$, $x = 30 \times 3 = 90\text{ m}$, so $z = \sqrt{90^2 + 25^2} = \sqrt{8725}$. Solve $2x\frac{dx}{dt} = 2z\frac{dz}{dt}$ for $\frac{dz}{dt}$!`,
        solution: String.raw`1. **Position at $t = 3\text{ s}$:** $x = (30\text{ m/s})(3\text{ s}) = 90\text{ m}$, while your position is fixed at $y = 25\text{ m}$.
2. **Hypotenuse $z$:**
   $$z = \sqrt{90^2 + 25^2} = \sqrt{8100 + 625} = \sqrt{8725}\text{ m}$$
3. **Related Rates Equation:**
   $$x^2 + 25^2 = z^2 \implies 2x\frac{dx}{dt} = 2z\frac{dz}{dt} \implies \frac{dz}{dt} = \frac{x}{z}\frac{dx}{dt} = \frac{90(30)}{\sqrt{8725}} = \frac{2700}{\sqrt{8725}} \approx 28.906\text{ m/s} \quad \textbf{(Choice B)}$$`,
      },
    ],
  },
];
