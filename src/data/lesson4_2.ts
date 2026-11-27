import { Problem } from '../types';

export const LESSON_4_2_PROBLEMS: Problem[] = [
  {
    id: '4.2-caren',
    module: 'lesson-4-2',
    section: 'Graphical Analysis (Page 4)',
    badge: 'Page 4 • Graphical',
    title: "Caren's Bicycle Ride to School (Piecewise Velocity Graph)",
    calculator: 'non-calculator',
    visual: 'caren-velocity-graph',
    stem: String.raw`Caren rides her bicycle along a straight road from home to school, starting at home at time $t = 0$ minutes and arriving at school at time $t = 12$ minutes. During the time interval $0 \le t \le 12$ minutes, her velocity $v(t)$, in miles per minute, is modeled by the piecewise-linear function whose graph is shown below. *(Hover or tap points on the interactive graph to inspect exact coordinates!)*`,
    watchOut: String.raw`Since 2021, the AP Exam requires you to explicitly **connect** acceleration to velocity by writing $a(t) = v'(t)$ (or $a(2.5) = v'(2.5)$) whenever finding acceleration from a velocity graph!`,
    inMockTest: true,
    parts: [
      {
        partId: 'a-c',
        label: 'Parts (a)–(c): Reading the Story of the Graph',
        prompt: String.raw`Based on the graph and prompt, which statement accurately describes Caren's trip at $t = 0$, $t = 2$, and on $[4, 5]$?`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`At $t=0$ she starts at home; at $t=2$ she turns around ($v(t)$ changes from $+$ to $-$); on $[4,5]$ she is stopped at rest ($v(t)=0$, back at home).`,
            explanation: String.raw`Correct! $v(t)$ changes sign from positive to negative at $t=2$ (turning around), and $v(t)=0$ on $[4,5]$ means she is stationary.`,
          },
          {
            label: 'B',
            text: String.raw`At $t=0$ she is at school; at $t=2$ she reaches her maximum distance from school; on $[4,5]$ she bikes at constant speed.`,
            explanation: String.raw`Incorrect: She starts at home at $t=0$, and on $[4,5]$ her velocity is $v(t)=0$ (stopped, not moving at constant nonzero speed — that happens on $[6,7]$ and $[8,11]$).`,
          },
          {
            label: 'C',
            text: String.raw`At $t=1$ she turns around because the graph has a sharp peak; on $[4,5]$ she is moving backward.`,
            explanation: String.raw`Incorrect: Classic graph-reading trap! At $t=1$, $v(t)$ is still positive before and after $t=1$ (she just starts slowing down, still biking toward school). Turning around happens where $v(t)$ crosses the $t$-axis at $t=2$!`,
          },
          {
            label: 'D',
            text: String.raw`At $t=2$ she is speeding up; on $[4,5]$ her acceleration is positive.`,
            explanation: String.raw`Incorrect: At $t=2$, $v(2)=0$, and on $(4,5)$, $v(t)=0$ so $a(t)=v'(t)=0$.`,
          },
        ],
        hint1: String.raw`Remember you are looking at a **velocity** graph $v(t)$, NOT a position graph! Where does $v(t)$ change sign, and where does $v(t) = 0$?`,
        hint2: String.raw`At $t = 2$, $v(t)$ crosses from $+0.2\to 0 \to -0.2$ (sign change = turns around). On $[4,5]$, $v(t) = 0$ (stationary / at rest).`,
        solution: String.raw`- **(a) At $t = 0$:** Caren is at **home** (given in prompt).
- **(b) At $t = 2$:** $v(2) = 0$ and $v(t)$ changes sign from positive to negative, so Caren **turns around** and heads back toward home.
- **(c) On $[4, 5]$:** $v(t) = 0$, so Caren is **stopped / at rest** (in fact, since the area of the positive triangle on $[0,2]$ is $+0.2\text{ mi}$ and the negative triangle on $[2,4]$ is $-0.2\text{ mi}$, she is right back at home grabbing something she forgot!).`,
      },
      {
        partId: 'd',
        label: 'Part (d): Velocity at t = 2.5',
        prompt: String.raw`What is Caren's velocity at $t = 2.5$ minutes? *(Enter the numeric value; units are $\text{miles/minute}$.)*`,
        inputType: 'numeric',
        placeholder: 'e.g. -0.1',
        unitLabel: 'miles/min',
        numericAnswer: -0.1,
        tolerance: 0.001,
        acceptedStrings: ['-0.1', '-1/10'],
        hint1: String.raw`On $[2, 3]$, $v(t)$ is the line segment connecting $(2, 0)$ and $(3, -0.2)$. Find its value halfway at $t = 2.5$.`,
        hint2: String.raw`Midpoint of $(2, 0)$ and $(3, -0.2)$ has $v(2.5) = \frac{0 + (-0.2)}{2} = -0.1$.`,
        solution: String.raw`From the linear segment between $(2, 0)$ and $(3, -0.2)$:
$$v(2.5) = -0.1\text{ miles per minute}$$
**In context:** At $t = 2.5$ minutes, Caren is biking back toward home at a rate of $0.1$ miles per minute.`,
      },
      {
        partId: 'e',
        label: 'Part (e): Acceleration at t = 2.5',
        prompt: String.raw`What is Caren's acceleration at $t = 2.5$ minutes? *(Remember on an FRQ to write $a(2.5) = v'(2.5)$!)*`,
        inputType: 'numeric',
        placeholder: 'e.g. -0.2',
        unitLabel: 'miles/min²',
        numericAnswer: -0.2,
        tolerance: 0.001,
        acceptedStrings: ['-0.2', '-1/5'],
        hint1: String.raw`Acceleration is the slope of the velocity graph: $a(2.5) = v'(2.5)$. Find the slope of the segment on $[2, 3]$.`,
        hint2: String.raw`Use points $(2, 0)$ and $(3, -0.2)$: $v'(2.5) = \frac{-0.2 - 0}{3 - 2}$.`,
        solution: String.raw`State the AP connection explicitly:
$$a(2.5) = v'(2.5) = \frac{-0.2 - 0}{3 - 2} = -0.2\text{ miles/minute}^2$$
**In context:** At $t = 2.5$ minutes, Caren's velocity is decreasing at a rate of $0.2$ miles per minute per minute.`,
      },
      {
        partId: 'f',
        label: 'Part (f): Moving Toward School',
        prompt: String.raw`On what time intervals is Caren moving away from home, towards the school?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`$(0, 1) \cup (3, 4) \cup (5, 6)$`,
            explanation: String.raw`Incorrect: Those are the intervals where $v(t)$ is *increasing* ($a(t) > 0$), not where $v(t) > 0$!`,
          },
          {
            label: 'B',
            text: String.raw`$(0, 2) \cup (5, 12)$`,
            explanation: String.raw`Correct! Moving towards school means velocity is positive ($v(t) > 0$), which holds on $(0, 2)$ and $(5, 12)$.`,
          },
          {
            label: 'C',
            text: String.raw`$(0, 2) \cup (4, 12)$`,
            explanation: String.raw`Incorrect: On $[4, 5]$, $v(t) = 0$, so she is stationary and not moving toward school.`,
          },
          {
            label: 'D',
            text: String.raw`$(2, 4)$`,
            explanation: String.raw`Incorrect: On $(2, 4)$, $v(t) < 0$, so she is moving back toward home.`,
          },
        ],
        hint1: String.raw`Moving away from home toward school means $v(t) > 0$ (graph is strictly above the horizontal $t$-axis).`,
        hint2: String.raw`Check where $v(t) > 0$: from $t=0$ to $t=2$, and from $t=5$ to $t=12$.`,
        solution: String.raw`Caren moves toward school whenever $v(t) > 0$, which occurs on:
$$(0, 2) \cup (5, 12)\text{ minutes}$$`,
      },
      {
        partId: 'g',
        label: 'Part (g): Speed at t = 3',
        prompt: String.raw`What is Caren's **speed** at $t = 3$ minutes?`,
        inputType: 'numeric',
        placeholder: 'e.g. 0.2',
        unitLabel: 'miles/min',
        numericAnswer: 0.2,
        tolerance: 0.001,
        acceptedStrings: ['0.2', '1/5'],
        hint1: String.raw`Speed is the magnitude (absolute value) of velocity: $\text{Speed}(t) = |v(t)|$.`,
        hint2: String.raw`Read $v(3) = -0.2$ from the graph and take its absolute value.`,
        solution: String.raw`$$\text{Speed at } t = 3 \text{ is } |v(3)| = |-0.2| = 0.2\text{ miles per minute.}$$`,
      },
      {
        partId: 'h-i',
        label: 'Parts (h) & (i): Speeding Up vs. Slowing Down',
        prompt: String.raw`At $t = 7.5$ minutes, is Caren speeding up or slowing down — and on which open intervals across $(0, 12)$ is Caren **slowing down**?`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`Slowing down at $t=7.5$; slowing down on $(1, 3) \cup (7, 8) \cup (11, 12)$ because $v'(t) < 0$.`,
            explanation: String.raw`Incorrect trap! On $(2, 3)$, $v(t) < 0$ AND $v'(t) < 0$ (same sign!), so she is actually **speeding up** in the negative direction on $(2, 3)$!`,
          },
          {
            label: 'B',
            text: String.raw`Speeding up at $t=7.5$ because $v(7.5) > 0$; slowing down only on $(2, 4)$.`,
            explanation: String.raw`Incorrect: Positive velocity alone means moving forward, NOT speeding up! At $t=7.5$, $v(7.5) > 0$ while $a(7.5) = v'(7.5) < 0$.`,
          },
          {
            label: 'C',
            text: String.raw`Slowing down at $t=7.5$ ($v(7.5)>0, a(7.5)<0$); slowing down on $(1, 2) \cup (3, 4) \cup (7, 8) \cup (11, 12)$ where $v(t)$ and $a(t)$ have opposite signs.`,
            explanation: String.raw`Correct! Slowing down occurs whenever velocity and acceleration have opposite signs (approaching the $t$-axis).`,
          },
          {
            label: 'D',
            text: String.raw`Slowing down at $t=7.5$; slowing down on $(1, 2) \cup (7, 8) \cup (11, 12)$ only.`,
            explanation: String.raw`Incorrect: Missed $(3, 4)$! On $(3, 4)$, $v(t) < 0$ while $a(t) = v'(t) > 0$ (opposite signs, speed $|v(t)|$ decreases from $0.2$ to $0$).`,
          },
        ],
        hint1: String.raw`An object slows down when **velocity $v(t)$ and acceleration $a(t) = v'(t)$ have opposite signs** (graphically: when the $v(t)$ graph moves *toward* the $t$-axis!).`,
        hint2: String.raw`Check $(3, 4)$ carefully: $v(t) < 0$ and slope $v'(t) > 0$ — opposite signs, so she is slowing down there too!`,
        solution: String.raw`- **(h) At $t = 7.5$:** $v(7.5) = 0.25 > 0$ and $a(7.5) = v'(7.5) = -0.1 < 0$. Since $v(7.5)$ and $a(7.5)$ have **opposite signs**, Caren is **slowing down**.
- **(i) All intervals slowing down:** Wherever $v(t)$ and $a(t) = v'(t)$ have opposite signs:
  - $(1, 2)$: $v(t) > 0$ and $v'(t) < 0$
  - $(3, 4)$: $v(t) < 0$ and $v'(t) > 0$
  - $(7, 8)$: $v(t) > 0$ and $v'(t) < 0$
  - $(11, 12)$: $v(t) > 0$ and $v'(t) < 0$`,
      },
      {
        partId: 'j',
        label: 'Part (j): Average Velocity vs. Average Acceleration on [3, 9]',
        prompt: String.raw`Explain why you cannot determine Caren's *average velocity* on $[3, 9]$ using only derivative/slope formulas from this graph, whereas you *can* find her *average acceleration* on $[3, 9]$ (and state its value).`,
        inputType: 'frq-rubric',
        rubricItems: [
          { id: 'avg-vel', points: 1, criterion: 'Explained that average velocity = [s(9) - s(3)] / (9 - 3) requires position values s(9) and s(3), which are not directly read as y-values from a v(t) graph' },
          { id: 'avg-acc', points: 1, criterion: 'Computed average acceleration = [v(9) - v(3)] / (9 - 3) = [0.2 - (-0.2)] / 6 = 0.4/6 = 1/15 mi/min² using v(9) and v(3) directly from the graph' },
        ],
        modelResponse: String.raw`Average velocity on $[3, 9]$ is $\frac{s(9) - s(3)}{9 - 3}$, which requires knowing position values $s(t)$ rather than velocity values. In contrast, average acceleration on $[3, 9]$ is $\frac{v(9) - v(3)}{9 - 3} = \frac{0.2 - (-0.2)}{6} = \frac{0.4}{6} = \frac{1}{15}\text{ miles/min}^2$, which uses $v(9)$ and $v(3)$ directly from the given $v(t)$ graph.`,
        hint1: String.raw`Write down the difference quotient formulas for **average velocity** and **average acceleration** on $[3, 9]$.`,
        hint2: String.raw`$\text{Avg Vel} = \frac{s(9) - s(3)}{9 - 3}$ (needs position $s$), while $\text{Avg Accel} = \frac{v(9) - v(3)}{9 - 3}$ (uses $v$ directly from the graph!).`,
        solution: String.raw`- **Average Velocity:** $\frac{s(9) - s(3)}{9 - 3}$ requires position function values $s(9)$ and $s(3)$, whereas the given graph shows velocity $v(t)$, not $s(t)$. *(Note: In second-semester integral calculus, you will learn how to find displacement via signed area!)*
- **Average Acceleration:** $\frac{v(9) - v(3)}{9 - 3} = \frac{0.2 - (-0.2)}{6} = \frac{0.4}{6} = \frac{1}{15} \approx 0.067\text{ miles/min}^2$, read directly from the $v(t)$ graph.`,
      },
    ],
  },
  {
    id: '4.2-dust',
    module: 'lesson-4-2',
    section: 'Analytical Motion (Pages 5–6)',
    badge: 'Page 5 • Example FRQ',
    title: 'Dust Particle Moving Along the x-Axis',
    calculator: 'allowed',
    stem: String.raw`A dust particle moves along the $x$-axis so that its velocity at time $t$ is given by
$$v(t) = -(t + 1)\sin\left(\frac{t^2}{2}\right)$$
At time $t = 0$, the particle is at position $x = 1$. *(Ensure your calculator is in **RADIAN** mode!)*`,
    watchOut: String.raw`Always set your calculator to **RADIAN** mode in AP Calculus, and round final decimals to **3 decimal places** (or truncate cleanly after 3 decimals)!`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`Find the acceleration of the particle at $t = 2$ (to 3 decimal places). *(Then check below why speed is decreasing at $t = 2$!)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 1.588',
        numericAnswer: 1.587584,
        tolerance: 0.005,
        hint1: String.raw`Use $a(2) = v'(2)$ via numerical derivative on your graphing calculator (or Product + Chain Rule).`,
        hint2: String.raw`$v'(t) = -\sin\left(\frac{t^2}{2}\right) - (t+1)t\cos\left(\frac{t^2}{2}\right)$. Evaluate at $t = 2$ radians.`,
        solution: String.raw`Connect acceleration to velocity:
$$a(2) = v'(2) \approx 1.588 \quad (1.587584)$$
**Is speed increasing at $t = 2$?** Evaluate velocity at $t = 2$:
$$v(2) = -3\sin(2) \approx -2.728 < 0$$
Since $v(2) < 0$ and $a(2) > 0$ have **opposite signs**, the speed of the particle is **NOT increasing** (it is decreasing) at $t = 2$.`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`Find the time $t$ in the open interval $0 < t < 3$ when the particle changes direction.`,
        inputType: 'numeric',
        placeholder: 'e.g. 2.507 or sqrt(2*pi)',
        numericAnswer: 2.506628,
        tolerance: 0.005,
        acceptedStrings: ['sqrt(2*pi)', 'sqrt(2pi)'],
        hint1: String.raw`Set $v(t) = -(t+1)\sin\left(\frac{t^2}{2}\right) = 0$ on $0 < t < 3$ and verify that $v(t)$ changes sign!`,
        hint2: String.raw`Since $-(t+1) \neq 0$ for $t > 0$, solve $\sin\left(\frac{t^2}{2}\right) = 0 \implies \frac{t^2}{2} = \pi$.`,
        solution: String.raw`For $0 < t < 3$, $v(t) = 0$ when $\sin\left(\frac{t^2}{2}\right) = 0$:
$$\frac{t^2}{2} = \pi \implies t = \sqrt{2\pi} \approx 2.507$$
*(Note: $\frac{t^2}{2} = 2\pi \implies t = \sqrt{4\pi} \approx 3.545 > 3$.)*
Because $v(t)$ changes sign from negative to positive at $t = \sqrt{2\pi} \approx 2.507$, the particle changes direction there.`,
      },
      {
        partId: 'c',
        label: 'Part (c)',
        prompt: String.raw`What is the **speed** of the particle at $t = 4$?`,
        inputType: 'numeric',
        placeholder: 'e.g. 4.947',
        numericAnswer: 4.946791,
        tolerance: 0.005,
        acceptedStrings: ['5*sin(8)', '5sin(8)'],
        hint1: String.raw`Speed is $|v(4)|$ — don't forget the absolute value!`,
        hint2: String.raw`$v(4) = -(4 + 1)\sin\left(\frac{4^2}{2}\right) = -5\sin(8)$. Now take $|-5\sin(8)|$.`,
        solution: String.raw`Evaluate $|v(4)|$:
$$v(4) = -(4+1)\sin(8) = -5\sin(8) \approx -4.9468$$
$$\text{Speed} = |v(4)| = 5\sin(8) \approx 4.947$$`,
      },
    ],
  },
  {
    id: '4.2-ball',
    module: 'lesson-4-2',
    section: 'Analytical Motion (Pages 5–6)',
    badge: 'Page 5 • Analytical #1',
    title: 'Ball Thrown Upward from Below-Ground Cliff',
    calculator: 'non-calculator',
    stem: String.raw`A ball is thrown straight upward from a cliff that's $2$ meters below ground level (so its height starts negative because the launch point is below ground). Its height above ground, in meters, after $t$ seconds is given by
$$s(t) = -t^2 + 5t - 2$$`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`At what time $t$ (in seconds) is the velocity of the ball zero?`,
        inputType: 'numeric',
        placeholder: 'e.g. 2.5 or 5/2',
        unitLabel: 'seconds',
        numericAnswer: 2.5,
        tolerance: 0.001,
        acceptedStrings: ['5/2', '2.5'],
        hint1: String.raw`Find $v(t) = s'(t)$ and set $v(t) = 0$.`,
        hint2: String.raw`$v(t) = -2t + 5 = 0$. Solve for $t$.`,
        solution: String.raw`$$v(t) = s'(t) = -2t + 5 = 0 \implies t = \frac{5}{2} = 2.5\text{ seconds}$$
**Meaning:** At $t = 2.5$ seconds, the ball reaches its maximum height (peak) and changes direction from rising to falling.`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`What is the **displacement** of the ball over the interval $[0, 3]$?`,
        inputType: 'numeric',
        placeholder: 'e.g. 6',
        unitLabel: 'meters',
        numericAnswer: 6,
        tolerance: 0.001,
        hint1: String.raw`Displacement on $[0, 3]$ is net change in position: $s(3) - s(0)$.`,
        hint2: String.raw`Compute $s(3) = -(3)^2 + 5(3) - 2 = 4$ and $s(0) = -2$, then subtract $s(3) - s(0)$.`,
        solution: String.raw`$$\text{Displacement} = s(3) - s(0) = \left(-(3)^2 + 5(3) - 2\right) - (-2) = 4 - (-2) = 6\text{ meters}$$
**Meaning:** Over the first $3$ seconds, the ball's net position increased by $6$ meters (from $2\text{ m}$ below ground to $4\text{ m}$ above ground).`,
      },
      {
        partId: 'c-d',
        label: 'Parts (c) & (d)',
        prompt: String.raw`What is the acceleration at $t = 2$ seconds (with units), and is the ball speeding up or slowing down at $t = 2$?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`$a(2) = -2\text{ m/s}^2$; **speeding up** because acceleration is negative.`,
            explanation: String.raw`Incorrect: Negative acceleration does NOT automatically mean speeding up or slowing down — you must compare signs of $v(2)$ and $a(2)$!`,
          },
          {
            label: 'B',
            text: String.raw`$a(2) = -2\text{ m/s}^2$; **slowing down** because $v(2) = 1 > 0$ and $a(2) = -2 < 0$ have opposite signs.`,
            explanation: String.raw`Correct! At $t=2$, the ball is still rising ($v(2)=1>0$) while gravity pulls downward ($a(2)=-2<0$), so it is slowing down.`,
          },
          {
            label: 'C',
            text: String.raw`$a(2) = 1\text{ m/s}^2$; **speeding up** because $v(2) > 0$ and $a(2) > 0$.`,
            explanation: String.raw`Incorrect: $1$ is $v(2)$, whereas $a(t) = v'(t) = -2\text{ m/s}^2$.`,
          },
          {
            label: 'D',
            text: String.raw`$a(2) = -2\text{ m/s}$; **slowing down** because $v(2) > 0$ and $a(2) < 0$.`,
            explanation: String.raw`Incorrect units: Acceleration has units $\text{meters/second}^2$, not $\text{meters/second}$!`,
          },
        ],
        hint1: String.raw`Find $a(t) = v'(t)$ from $v(t) = -2t + 5$, and compare the signs of $v(2)$ and $a(2)$.`,
        hint2: String.raw`$v(2) = -2(2) + 5 = +1$ and $a(2) = -2$. Do they have the same sign or opposite signs?`,
        solution: String.raw`- **(c)** $a(t) = v'(t) = -2 \implies a(2) = -2\text{ meters/second}^2$.
- **(d)** At $t = 2$, $v(2) = -2(2) + 5 = 1 > 0$ and $a(2) = -2 < 0$. Since $v(2)$ and $a(2)$ have **opposite signs**, the ball is **slowing down**.`,
      },
    ],
  },
  {
    id: '4.2-monster',
    module: 'lesson-4-2',
    section: 'Analytical Motion (Pages 5–6)',
    badge: 'Page 6 • Analytical #2',
    title: 'Monster Walking Away from the Haunted House',
    calculator: 'non-calculator',
    stem: String.raw`The position, in meters, of a monster as he walks along a straight path relative to the haunted house at time $t$ seconds is
$$s(t) = t^3 - 6t^2 + 9t$$`,
    watchOut: String.raw`Don't confuse **speeding up / slowing down** (compare signs of $v(t)$ and $a(t)$) with **moving away from / towards the origin** (compare signs of position $s(t)$ and velocity $v(t)$)!`,
    inMockTest: true,
    parts: [
      {
        partId: 'a-b',
        label: 'Parts (a) & (b): At Rest & Direction at t = 5',
        prompt: String.raw`When is the monster at rest, and is the monster moving left or right at $t = 5$ seconds?`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`At rest at $t = 1\text{ s}$ and $t = 3\text{ s}$ ($v(t)=0$); moving **right** at $t = 5\text{ s}$ because $v(5) = 24 > 0$.`,
            explanation: String.raw`Correct! $v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3) = 0$ at $t=1, 3$, and $v(5) = 3(4)(2) = 24 > 0$.`,
          },
          {
            label: 'B',
            text: String.raw`At rest at $t = 0\text{ s}$ and $t = 3\text{ s}$; moving **right** at $t = 5\text{ s}$ because $s(5) = 20 > 0$.`,
            explanation: String.raw`Incorrect: $s(t) = 0$ means at the haunted house (origin), NOT at rest! Also direction depends on $v(5) > 0$, not $s(5) > 0$.`,
          },
          {
            label: 'C',
            text: String.raw`At rest at $t = 2\text{ s}$; moving **left** at $t = 5\text{ s}$.`,
            explanation: String.raw`Incorrect: $t = 2$ is where $a(t) = 0$, not $v(t) = 0$.`,
          },
          {
            label: 'D',
            text: String.raw`At rest at $t = 1\text{ s}$ and $t = 3\text{ s}$; moving **left** at $t = 5\text{ s}$ because $v(5) < 0$.`,
            explanation: String.raw`Incorrect: $v(5) = 3(25) - 60 + 9 = +24 > 0$ (moving right).`,
          },
        ],
        hint1: String.raw`Compute $v(t) = s'(t) = 3t^2 - 12t + 9$, factor out $3$, and solve $v(t) = 0$.`,
        hint2: String.raw`$v(t) = 3(t^2 - 4t + 3) = 3(t - 1)(t - 3)$. Then plug in $t = 5$ to check the sign of $v(5)$.`,
        solution: String.raw`$$v(t) = s'(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)$$
- **(a) At rest:** $v(t) = 0 \implies t = 1\text{ sec}$ and $t = 3\text{ sec}$.
- **(b) Direction at $t = 5$:** $v(5) = 3(5-1)(5-3) = 24 > 0 \implies$ moving **right**.`,
      },
      {
        partId: 'c',
        label: 'Part (c): Acceleration at t = 5',
        prompt: String.raw`What is the acceleration of the monster at $t = 5$ seconds?`,
        inputType: 'numeric',
        placeholder: 'e.g. 18',
        unitLabel: 'm/s²',
        numericAnswer: 18,
        tolerance: 0.001,
        hint1: String.raw`Differentiate $v(t) = 3t^2 - 12t + 9$ to get $a(t) = v'(t)$, then plug in $t = 5$.`,
        hint2: String.raw`$a(t) = 6t - 12 \implies a(5) = 6(5) - 12$.`,
        solution: String.raw`$$a(t) = v'(t) = 6t - 12 \implies a(5) = 6(5) - 12 = 18\text{ meters/second}^2$$`,
      },
      {
        partId: 'd-e',
        label: 'Parts (d) & (e): Speeding Up at t = 2 & Acceleration When v = 0',
        prompt: String.raw`Is the monster speeding up, slowing down, or neither at $t = 2$? And what is his acceleration each time $v(t) = 0$?`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`Slowing down at $t=2$; $a(1) = -6\text{ m/s}^2$ and $a(3) = 6\text{ m/s}^2$.`,
            explanation: String.raw`Check $a(2)$ carefully! $a(2) = 6(2) - 12 = 0$, so $v(2)$ and $a(2)$ do NOT have opposite signs at $t=2$.`,
          },
          {
            label: 'B',
            text: String.raw`Speeding up at $t=2$; $a(1) = 0\text{ m/s}^2$ and $a(3) = 0\text{ m/s}^2$.`,
            explanation: String.raw`Incorrect: Velocity being $0$ does NOT mean acceleration is $0$!`,
          },
          {
            label: 'C',
            text: String.raw`**Neither** speeding up nor slowing down at $t=2$ because $a(2) = 0$; when $v=0$, $a(1) = -6\text{ m/s}^2$ and $a(3) = 6\text{ m/s}^2$.`,
            explanation: String.raw`Correct! At $t=2$, $v(2)=-3$ and $a(2)=0$ (instantaneous inflection/maximum speed), so neither speeding up nor slowing down!`,
          },
          {
            label: 'D',
            text: String.raw`Neither at $t=2$; when $v=0$, $a(1) = 6\text{ m/s}^2$ and $a(3) = -6\text{ m/s}^2$.`,
            explanation: String.raw`Incorrect signs: $a(1) = 6(1)-12 = -6\text{ m/s}^2$ and $a(3) = 6(3)-12 = +6\text{ m/s}^2$.`,
          },
        ],
        hint1: String.raw`Evaluate $v(2)$ and $a(2) = 6(2) - 12$. What happens when acceleration is $0$? Then evaluate $a(1)$ and $a(3)$.`,
        hint2: String.raw`$v(2) = -3$ and $a(2) = 0$. Since $a(2) = 0$, speed is momentarily stationary ($\frac{d}{dt}|v(t)| = 0$).`,
        solution: String.raw`- **(d) At $t = 2$:** $v(2) = -3$ and $a(2) = 6(2) - 12 = 0$. Because $a(2) = 0$, $v(2)$ and $a(2)$ have neither the same sign nor opposite signs — the monster is **neither** speeding up nor slowing down at $t = 2$.
- **(e) Acceleration when $v(t) = 0$ ($t = 1, 3$):**
  $$a(1) = 6(1) - 12 = -6\text{ m/s}^2, \qquad a(3) = 6(3) - 12 = 6\text{ m/s}^2$$`,
      },
      {
        partId: 'f',
        label: 'Part (f): Average Velocity on [2, 4]',
        prompt: String.raw`What is the monster's **average velocity** over the time interval $[2, 4]$ seconds?`,
        inputType: 'numeric',
        placeholder: 'e.g. 1',
        unitLabel: 'meters/sec',
        numericAnswer: 1,
        tolerance: 0.001,
        hint1: String.raw`Use $\text{Average Velocity} = \frac{s(4) - s(2)}{4 - 2}$ (change in position divided by change in time!).`,
        hint2: String.raw`$s(4) = 64 - 96 + 36 = 4$ and $s(2) = 8 - 24 + 18 = 2$.`,
        solution: String.raw`$$\text{Average Velocity} = \frac{s(4) - s(2)}{4 - 2} = \frac{(4^3 - 6\cdot 4^2 + 9\cdot 4) - (2^3 - 6\cdot 2^2 + 9\cdot 2)}{2} = \frac{4 - 2}{2} = 1\text{ meter/second}$$`,
      },
      {
        partId: 'g',
        label: 'Part (g): Moving Away or Towards the Haunted House at t = 2?',
        prompt: String.raw`Is the monster moving **away from** or **towards** the haunted house at $t = 2$ seconds?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`Moving **away from** the haunted house because $s(2) = 2 > 0$.`,
            explanation: String.raw`Incorrect: $s(2) = 2 > 0$ means he is located $2\text{ m}$ to the right of the house, NOT that he is walking away from it!`,
          },
          {
            label: 'B',
            text: String.raw`Moving **towards** the haunted house because $s(2) = 2 > 0$ and $v(2) = -3 < 0$ have opposite signs.`,
            explanation: String.raw`Correct! He is to the right of the origin ($s(2) > 0$) and walking left ($v(2) < 0$), so he is walking back **towards** the haunted house!`,
          },
          {
            label: 'C',
            text: String.raw`Moving **away from** the haunted house because $v(2) = -3 < 0$ and $a(2) = 0$.`,
            explanation: String.raw`Incorrect: Moving toward/away from the origin compares **position $s(t)$** and **velocity $v(t)$**, not acceleration.`,
          },
          {
            label: 'D',
            text: String.raw`Neither, because $a(2) = 0$.`,
            explanation: String.raw`Incorrect: Even though $a(2)=0$, his velocity is $v(2) = -3 \neq 0$, so he is actively walking toward the origin.`,
          },
        ],
        hint1: String.raw`To decide whether an object moves **away from** or **towards** the origin, compare the signs of **position $s(2)$** and **velocity $v(2)$**!`,
        hint2: String.raw`$s(2) = 8 - 24 + 18 = +2 > 0$ (right of house) and $v(2) = -3 < 0$ (walking left).`,
        solution: String.raw`Evaluate position and velocity at $t = 2$:
$$s(2) = 2^3 - 6(2)^2 + 9(2) = 2 > 0, \qquad v(2) = 3(2)^2 - 12(2) + 9 = -3 < 0$$
Because $s(2)$ and $v(2)$ have **opposite signs**, the distance $|s(t)|$ to the haunted house is decreasing — he is moving **towards** the haunted house.`,
      },
    ],
  },
  {
    id: '4.2-frq1',
    module: 'lesson-4-2',
    section: 'AP Practice FRQs — Calculator (Pages 7–8)',
    badge: 'Page 8 • Practice FRQ #1',
    title: 'Stephen Swimming in a 50-Meter Pool',
    calculator: 'allowed',
    stem: String.raw`Stephen swims back and forth along a straight path in a $50$-meter-long pool for $90$ seconds. Stephen's velocity is modeled by
$$v(t) = 2.38e^{-0.02t}\sin\left(\frac{\pi}{56}t\right)$$
where $t$ is measured in seconds and $v(t)$ is measured in meters per second.`,
    watchOut: String.raw`Per the Official AP Scoring Notes (Page 7): writing "$t = 56$" with **no supporting reason** earns $0/2$ points! Always state *"because $v(t)$ changes sign at $t = 56$"*.`,
    inMockTest: true,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`Find all times $t$ in the interval $0 < t < 90$ at which Stephen changes direction.`,
        inputType: 'numeric',
        placeholder: 'e.g. 56',
        unitLabel: 'seconds',
        numericAnswer: 56,
        tolerance: 0.01,
        hint1: String.raw`Set $v(t) = 0$ on $0 < t < 90$ and check that $v(t)$ changes sign! Note $2.38e^{-0.02t} > 0$ for all $t$.`,
        hint2: String.raw`$\sin\left(\frac{\pi}{56}t\right) = 0 \implies \frac{\pi}{56}t = \pi \implies t = 56$.`,
        solution: String.raw`For $0 < t < 90$, $v(t) = 0$ when $\sin\left(\frac{\pi}{56}t\right) = 0 \implies t = 56\text{ seconds}$.
- For $0 < t < 56$, $v(t) > 0$; for $56 < t < 90$, $v(t) < 0$.
- **AP Justification (2 pts):** Stephen changes direction at $t = 56$ seconds because $v(t)$ changes sign there.`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`Find Stephen's acceleration at $t = 60$ seconds, indicate units, and determine whether Stephen is speeding up or slowing down at $t = 60$ seconds with a reason.`,
        inputType: 'frq-rubric',
        rubricItems: [
          { id: 'setup', points: 1, criterion: 'Wrote setup connecting acceleration to velocity: a(60) = v′(60) ≈ -0.036' },
          { id: 'units', points: 1, criterion: 'Included acceleration units: meters per second per second (m/s²)' },
          { id: 'speeding', points: 1, criterion: 'Concluded Stephen is SPEEDING UP because v(60) < 0 (≈ -0.160) and a(60) < 0 (≈ -0.036) have the SAME sign' },
        ],
        modelResponse: String.raw`$a(60) = v'(60) \approx -0.036\text{ meters per second per second}$ ($\text{m/s}^2$). Since $v(60) \approx -0.160 < 0$ and $a(60) \approx -0.036 < 0$ have the same sign, Stephen is speeding up at $t = 60$ seconds.`,
        hint1: String.raw`Evaluate both $a(60) = v'(60)$ and $v(60)$ on your calculator (in Radian mode!). Don't forget units!`,
        hint2: String.raw`$v'(60) \approx -0.036016\text{ m/s}^2$ and $v(60) \approx -0.1595\text{ m/s}$. Both are negative!`,
        solution: String.raw`1. **Acceleration & Units:**
   $$a(60) = v'(60) \approx -0.036\text{ m/s}^2 \quad (-0.036016\text{ meters per second per second})$$
2. **Speeding Up or Slowing Down:**
   Evaluate velocity: $v(60) = 2.38e^{-1.2}\sin\left(\frac{60\pi}{56}\right) \approx -0.160 < 0$.
   Because $v(60) < 0$ and $a(60) < 0$ have the **same sign**, Stephen is **speeding up** at $t = 60$ seconds.`,
      },
    ],
  },
  {
    id: '4.2-frq2',
    module: 'lesson-4-2',
    section: 'AP Practice FRQs — Calculator (Pages 7–8)',
    badge: 'Page 8 • Practice FRQ #2',
    title: 'Logarithmic Velocity Particle Along the x-Axis',
    calculator: 'allowed',
    stem: String.raw`A particle moves along the $x$-axis so that its velocity at time $t \ge 0$ is given by
$$v(t) = \ln\left(t^2 - 4t + 5\right) - 0.2t$$`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`There is one time, $t = t_R$, in the interval $0 < t < 2$ when the particle is at rest. Find $t_R$ (to 3 decimal places). *(Note: for $0 < t < t_R$, $v(t) > 0$, so the particle moves right!)*`,
        inputType: 'numeric',
        placeholder: 'e.g. 1.426',
        numericAnswer: 1.42561,
        tolerance: 0.005,
        hint1: String.raw`Graph $y_1 = \ln(t^2 - 4t + 5) - 0.2t$ on $0 \le t \le 2$ and find its zero!`,
        hint2: String.raw`At $t = 1$, $v(1) = \ln(2) - 0.2 \approx 0.493 > 0$; at $t = 1.5$, $v(1.5) = \ln(1.25) - 0.3 \approx -0.077 < 0$. Find the root between $1.4$ and $1.5$.`,
        solution: String.raw`Solve $v(t) = \ln(t^2 - 4t + 5) - 0.2t = 0$ on $0 < t < 2$:
$$t_R \approx 1.426 \quad (1.425610)$$
For $0 < t < t_R$, $v(t) > 0$, so the particle is moving to the **right**.`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`Find the acceleration of the particle at time $t = 1.5$, and determine whether the speed of the particle is increasing or decreasing at $t = 1.5$.`,
        inputType: 'mcq',
        correctIndex: 0,
        options: [
          {
            label: 'A',
            text: String.raw`$a(1.5) = v'(1.5) = -1$; speed is **increasing** because $v(1.5) \approx -0.077 < 0$ and $a(1.5) = -1 < 0$ have the same sign.`,
            explanation: String.raw`Correct! Both velocity and acceleration are negative at $t = 1.5$, so speed $|v(t)|$ is increasing!`,
          },
          {
            label: 'B',
            text: String.raw`$a(1.5) = v'(1.5) = -1$; speed is **decreasing** because $a(1.5) < 0$.`,
            explanation: String.raw`Incorrect trap! Negative acceleration only decreases speed if velocity is positive — here $v(1.5) \approx -0.077 < 0$!`,
          },
          {
            label: 'C',
            text: String.raw`$a(1.5) = v'(1.5) = -0.8$; speed is **increasing** because $v(1.5) < 0$ and $a(1.5) < 0$.`,
            explanation: String.raw`Incorrect arithmetic: forgot to subtract $0.2$! $\frac{2(1.5)-4}{1.25} - 0.2 = -0.8 - 0.2 = -1.0$.`,
          },
          {
            label: 'D',
            text: String.raw`$a(1.5) = v'(1.5) = -0.077$; speed is **decreasing**.`,
            explanation: String.raw`Incorrect: $-0.077$ is $v(1.5)$, not $a(1.5) = v'(1.5)$.`,
          },
        ],
        hint1: String.raw`Compute $a(1.5) = v'(1.5)$ and also check the sign of $v(1.5)$ (remember $t_R \approx 1.426 < 1.5$!).`,
        hint2: String.raw`$v'(t) = \frac{2t - 4}{t^2 - 4t + 5} - 0.2$. At $t = 1.5$: $\frac{-1}{1.25} - 0.2 = -0.8 - 0.2 = -1$, and $v(1.5) \approx -0.077 < 0$.`,
        solution: String.raw`1. **Setup & Acceleration:**
   $$a(1.5) = v'(1.5) = \left.\left(\frac{2t - 4}{t^2 - 4t + 5} - 0.2\right)\right|_{t=1.5} = \frac{-1}{1.25} - 0.2 = -1$$
2. **Speed Behavior:**
   At $t = 1.5$, $v(1.5) = \ln(1.25) - 0.3 \approx -0.077 < 0$. Since $v(1.5) < 0$ and $a(1.5) = -1 < 0$ have the **same sign**, the speed of the particle is **increasing** at $t = 1.5$.`,
      },
    ],
  },
  {
    id: '4.2-frq3',
    module: 'lesson-4-2',
    section: 'AP Practice FRQs — Calculator (Pages 7–8)',
    badge: 'Page 8 • Practice FRQ #3',
    title: 'Two Particles P and Q Moving Along the x-Axis',
    calculator: 'allowed',
    stem: String.raw`Two particles move along the $x$-axis. For $0 \le t \le 8$, the position of particle $P$ at time $t$ is given by
$$x_P(t) = \ln\left(t^2 - 2t + 10\right)$$
while the velocity of particle $Q$ at time $t$ is given by
$$v_Q(t) = t^2 - 8t + 15$$`,
    watchOut: String.raw`Read carefully! You are given the **position** $x_P(t)$ for particle $P$ (so you must differentiate to get $v_P(t) = x_P'(t)$), whereas you are already given the **velocity** $v_Q(t)$ for particle $Q$!`,
    parts: [
      {
        partId: 'a-b',
        label: 'Parts (a) & (b): Direction of P and Same Direction as Q',
        prompt: String.raw`For $0 \le t \le 8$: (a) when is particle $P$ moving to the left, and (b) during what time intervals do particles $P$ and $Q$ travel in the **same direction**?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`(a) $0 \le t < 1$; (b) $(0, 1) \cup (3, 5)$`,
            explanation: String.raw`Incorrect on (b): On $(0,1)$, $v_P < 0$ and $v_Q > 0$ (opposite!); on $(3,5)$, $v_P > 0$ and $v_Q < 0$ (opposite!).`,
          },
          {
            label: 'B',
            text: String.raw`(a) $0 \le t < 1$; (b) $(1, 3) \cup (5, 8]$`,
            explanation: String.raw`Correct! $v_P(t) < 0$ on $[0, 1)$ and $v_P(t) > 0$ on $(1, 8]$. Meanwhile $v_Q(t) = (t-3)(t-5) > 0$ on $[0, 3) \cup (5, 8]$. Both are positive on $(1, 3) \cup (5, 8]$!`,
          },
          {
            label: 'C',
            text: String.raw`(a) $3 < t < 5$; (b) $(1, 8]$`,
            explanation: String.raw`Incorrect: $3 < t < 5$ is when particle $Q$ moves left, not particle $P$!`,
          },
          {
            label: 'D',
            text: String.raw`(a) Never, because $t^2 - 2t + 10 > 0$; (b) $[0, 3) \cup (5, 8]$`,
            explanation: String.raw`Incorrect: $x_P(t) > 0$ means position is positive, NOT velocity! Differentiate $x_P(t)$ first to find $v_P(t)$.`,
          },
        ],
        hint1: String.raw`First differentiate $x_P(t)$ to find $v_P(t) = \frac{2t - 2}{t^2 - 2t + 10}$, and factor $v_Q(t) = (t - 3)(t - 5)$.`,
        hint2: String.raw`Make a sign chart on $[0, 8]$ comparing $v_P(t)$ (negative on $[0,1)$, positive on $(1,8]$) and $v_Q(t)$ (positive on $[0,3)$, negative on $(3,5)$, positive on $(5,8]$).`,
        solution: String.raw`1. **Velocity of $P$:**
   $$v_P(t) = x_P'(t) = \frac{2t - 2}{t^2 - 2t + 10}$$
   Since $(t - 1)^2 + 9 > 0$ always, $v_P(t) < 0$ when $2t - 2 < 0 \implies \mathbf{0 \le t < 1}$ (moving left), and $v_P(t) > 0$ on $(1, 8]$.
2. **Velocity of $Q$:**
   $$v_Q(t) = t^2 - 8t + 15 = (t - 3)(t - 5)$$
   $v_Q(t) > 0$ on $[0, 3) \cup (5, 8]$ and $v_Q(t) < 0$ on $(3, 5)$.
3. **Same Direction (same sign of $v_P$ and $v_Q$):**
   Never both negative; both positive on **$(1, 3) \cup (5, 8]$**.`,
      },
      {
        partId: 'c',
        label: 'Part (c): Acceleration & Speed of Q at t = 2',
        prompt: String.raw`Find the acceleration of particle $Q$ at $t = 2$. *(Note: since $v_Q(2) = 3 > 0$ and $a_Q(2) < 0$, the speed of $Q$ is **decreasing** at $t = 2$!)*`,
        inputType: 'numeric',
        placeholder: 'e.g. -4',
        numericAnswer: -4,
        tolerance: 0.001,
        hint1: String.raw`Differentiate $v_Q(t) = t^2 - 8t + 15$ to get $a_Q(t) = v_Q'(t)$, then plug in $t = 2$.`,
        hint2: String.raw`$a_Q(t) = 2t - 8 \implies a_Q(2) = 2(2) - 8$.`,
        solution: String.raw`$$a_Q(t) = v_Q'(t) = 2t - 8 \implies a_Q(2) = 2(2) - 8 = -4$$
Also $v_Q(2) = 2^2 - 8(2) + 15 = 3 > 0$. Since $v_Q(2) > 0$ and $a_Q(2) = -4 < 0$ have **opposite signs**, the speed of particle $Q$ is **decreasing** at $t = 2$.`,
      },
    ],
  },
];
