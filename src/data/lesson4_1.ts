import { Problem } from '../types';

export const LESSON_4_1_PROBLEMS: Problem[] = [
  {
    id: '4.1-ex1',
    module: 'lesson-4-1',
    section: 'Guided Notes Examples (Page 1)',
    badge: 'Page 1 • Example 1',
    title: 'Cooling Pie Temperature Interpretation',
    calculator: 'non-calculator',
    stem: String.raw`A pie is taken out of the oven. The temperature of the pie (in degrees Fahrenheit), $t$ minutes after the pie is removed from the oven, is given by the function $p(t)$.`,
    watchOut: String.raw`Input vs. Output trap! In $p'(10) = -13$, the input $10$ is the **time** ($t = 10$ minutes), and $-13$ is the **rate**. Also NEVER write "decreasing at a rate of $-13$" (double negative)!`,
    inMockTest: true,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Interpret $p'(10) = -13$ in the context of this problem. Include all **Big 4** elements.`,
        inputType: 'frq-rubric',
        includeBig4SelfCheck: true,
        rubricItems: [
          { id: 'time', points: 1, criterion: 'Stated exact instant in time: "At t = 10 minutes after the pie is removed from the oven"' },
          { id: 'context', points: 1, criterion: 'Named the specific quantity: "the temperature of the pie"' },
          { id: 'direction', points: 1, criterion: 'Used "decreasing" with positive magnitude 13 (no double negative "decreasing by -13")' },
          { id: 'units', points: 1, criterion: 'Included derivative units: "13 degrees Fahrenheit per minute (°F/min)"' },
        ],
        modelResponse: String.raw`At $t = 10$ minutes after the pie is removed from the oven, the temperature of the pie is decreasing at a rate of $13$ degrees Fahrenheit per minute.`,
        hint1: String.raw`Use **The Big 4** template: "At $t = \text{\_\_\_}$, the $\text{[context of } p(t)\text{]}$ is increasing/decreasing at a rate of $\text{\_\_\_}$ (units of $p$ per unit of $t$)."`,
        hint2: String.raw`Here the input is $t = 10$ minutes, the output $p(t)$ is temperature in $^\circ\text{F}$, and the negative sign on $-13$ means **decreasing** at a rate of $+13$.`,
        solution: String.raw`**Step-by-Step Breakdown:**
1. **Time:** $t = 10$ minutes after the pie is removed from the oven.
2. **Object / Context:** The temperature of the pie.
3. **Direction:** Because $p'(10) = -13 < 0$, the temperature is **decreasing**.
4. **Rate + Units:** $13$ degrees Fahrenheit per minute ($^\circ\text{F}/\text{min}$).

**Model AP Sentence:** *"At $t = 10$ minutes after the pie is removed from the oven, the temperature of the pie is decreasing at a rate of $13$ degrees Fahrenheit per minute."*`,
      },
    ],
  },
  {
    id: '4.1-ex2',
    module: 'lesson-4-1',
    section: 'Guided Notes Examples (Page 1)',
    badge: 'Page 1 • Example 2',
    title: 'Waterpark Entry Rate Interpretation (Rate of a Rate!)',
    calculator: 'non-calculator',
    stem: String.raw`The rate at which people enter a waterpark (in hundreds of people per hour) is given by $W(t)$, where $t$ is measured in hours.`,
    watchOut: String.raw`$W(t)$ is **already a rate** (hundreds of people per hour)! Therefore $W'(t)$ is the rate of change of *that rate*, so its units are **hundreds of people per hour per hour**.`,
    parts: [
      {
        partId: 'a',
        prompt: String.raw`Interpret $W'(3) = 2.6$ in context.`,
        inputType: 'frq-rubric',
        includeBig4SelfCheck: true,
        rubricItems: [
          { id: 'time', points: 1, criterion: 'Stated exact time: "At t = 3 hours"' },
          { id: 'context', points: 1, criterion: 'Described W(t) accurately as "the rate at which people enter the waterpark" (not just "the number of people")' },
          { id: 'dir', points: 1, criterion: 'Stated "is increasing at a rate of 2.6"' },
          { id: 'units', points: 1, criterion: 'Gave compound units: "hundreds of people per hour per hour" (or hundreds of people/hr²)' },
        ],
        modelResponse: String.raw`At $t = 3$ hours, the rate at which people enter the waterpark is increasing at a rate of $2.6$ hundreds of people per hour per hour.`,
        hint1: String.raw`Carefully check what $W(t)$ represents: it is NOT the number of people, it is the **rate at which people enter**!`,
        hint2: String.raw`Divide the units of $W(t)$ ($\text{hundreds of people/hour}$) by the units of $t$ ($\text{hours}$) to get the units of $W'(3)$.`,
        solution: String.raw`**Step-by-Step Breakdown:**
1. **Time:** At $t = 3$ hours.
2. **Context of $W(t)$:** The **rate** at which people enter the waterpark.
3. **Direction:** Since $W'(3) = 2.6 > 0$, this rate is **increasing**.
4. **Rate + Units:** $2.6\text{ hundreds of people per hour per hour}$ ($\text{hundreds of people/hr}^2$).

**Model AP Sentence:** *"At $t = 3$ hours, the rate at which people enter the waterpark is increasing at a rate of $2.6$ hundreds of people per hour per hour."*`,
      },
    ],
  },
  {
    id: '4.1-p1',
    module: 'lesson-4-1',
    section: 'PRACTICE TIME! Lesson 4.1 (Page 2)',
    badge: 'Page 2 • #1',
    title: 'Gymnast Dismounting Parallel Bars',
    calculator: 'non-calculator',
    stem: String.raw`A gymnast dismounts the uneven parallel bars. Her height, $h$ (meters), depends on the time, $t$ (seconds), that she is in the air as follows:
$$h(t) = -16t^2 + 8t + 8$$`,
    watchOut: String.raw`Watch the negative sign when multiplying $-32(0.6) = -19.2$, then adding $+8$: $-19.2 + 8 = -11.2$ (NOT $+29.6$ or $+11.2$)!`,
    inMockTest: true,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`What is the function for $h'(t)$?`,
        inputType: 'algebraic',
        placeholder: 'e.g. -32t + 8',
        algebraicExpr: '-32*t + 8',
        variables: ['t'],
        acceptedStrings: ['-32t+8', '8-32t'],
        hint1: String.raw`Apply the Power Rule $\frac{d}{dt}[t^n] = nt^{n-1}$ term-by-term to $h(t) = -16t^2 + 8t + 8$.`,
        hint2: String.raw`$\frac{d}{dt}[-16t^2] = -32t$, $\frac{d}{dt}[8t] = 8$, and $\frac{d}{dt}[8] = 0$.`,
        solution: String.raw`Differentiate $h(t) = -16t^2 + 8t + 8$ with respect to $t$:
$$h'(t) = -16(2t) + 8(1) + 0 = -32t + 8$$`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`Calculate $h'(0.6)$.`,
        inputType: 'numeric',
        placeholder: 'e.g. -11.2',
        unitLabel: 'meters/sec',
        numericAnswer: -11.2,
        tolerance: 0.001,
        acceptedStrings: ['-11.2', '-56/5'],
        hint1: String.raw`Substitute $t = 0.6$ into $h'(t) = -32t + 8$. Watch the negative sign on $-32(0.6)$!`,
        hint2: String.raw`Compute $-32 \times 0.6 = -19.2$, then add $8$.`,
        solution: String.raw`Substitute $t = 0.6$ into $h'(t) = -32t + 8$:
$$h'(0.6) = -32(0.6) + 8 = -19.2 + 8 = -11.2\text{ meters/second}$$`,
      },
      {
        partId: 'c',
        label: 'Part (c)',
        prompt: String.raw`Using correct units, interpret the meaning of $h'(0.6)$ in the context of this problem.`,
        inputType: 'frq-rubric',
        includeBig4SelfCheck: true,
        rubricItems: [
          { id: 'time', points: 1, criterion: 'Stated time: "At t = 0.6 seconds after dismounting the bars"' },
          { id: 'context', points: 1, criterion: 'Stated object/context: "the gymnast\'s height"' },
          { id: 'dir', points: 1, criterion: 'Stated "is decreasing" with positive magnitude 11.2' },
          { id: 'units', points: 1, criterion: 'Included units: "meters per second (m/s)"' },
        ],
        modelResponse: String.raw`At $t = 0.6$ seconds after the gymnast dismounts the uneven parallel bars, her height is decreasing at a rate of $11.2$ meters per second.`,
        hint1: String.raw`Since $h'(0.6) = -11.2 < 0$, is her height increasing or decreasing at $t = 0.6$ seconds?`,
        hint2: String.raw`Combine all Big 4 pieces: time ($0.6\text{ sec}$), context (her height), direction (decreasing), and magnitude + units ($11.2\text{ m/s}$).`,
        solution: String.raw`Because $h'(0.6) = -11.2 < 0$:
*"At $t = 0.6$ seconds after the gymnast dismounts the uneven parallel bars, her height is **decreasing** at a rate of **$11.2$ meters per second**."*`,
      },
    ],
  },
  {
    id: '4.1-p2',
    module: 'lesson-4-1',
    section: 'PRACTICE TIME! Lesson 4.1 (Page 2)',
    badge: 'Page 2 • #2',
    title: 'Island Bird Population Growth',
    calculator: 'non-calculator',
    stem: String.raw`A certain species of bird thrives on a small island. The population of the bird can be estimated using the function
$$P(t) = -0.3t^3 + 97t + 800$$
where $P(t)$ represents the bird population on the island $t$ years after 2009.`,
    watchOut: String.raw`Careful with arithmetic: $-0.9(2)^2 + 97 = -0.9(4) + 97 = -3.6 + 97 = 93.4$ (do NOT double $97$)!`,
    parts: [
      {
        partId: 'a',
        label: 'Part (a)',
        prompt: String.raw`What is the function for $P'(t)$?`,
        inputType: 'algebraic',
        placeholder: 'e.g. -0.9t^2 + 97',
        algebraicExpr: '-0.9*(t^2) + 97',
        variables: ['t'],
        acceptedStrings: ['-0.9t^2+97', '97-0.9t^2', '-9/10t^2+97'],
        hint1: String.raw`Differentiate $P(t) = -0.3t^3 + 97t + 800$ with respect to $t$ using the Power Rule.`,
        hint2: String.raw`$\frac{d}{dt}[-0.3t^3] = -0.3(3t^2) = -0.9t^2$, $\frac{d}{dt}[97t] = 97$, and $\frac{d}{dt}[800] = 0$.`,
        solution: String.raw`Apply the Power Rule term-by-term:
$$P'(t) = -0.3(3t^2) + 97(1) + 0 = -0.9t^2 + 97$$`,
      },
      {
        partId: 'b',
        label: 'Part (b)',
        prompt: String.raw`Calculate $P'(2)$.`,
        inputType: 'numeric',
        placeholder: 'e.g. 93.4',
        unitLabel: 'birds/year',
        numericAnswer: 93.4,
        tolerance: 0.001,
        acceptedStrings: ['93.4', '467/5'],
        hint1: String.raw`Substitute $t = 2$ into $P'(t) = -0.9t^2 + 97$. Remember order of operations: square $2$ first!`,
        hint2: String.raw`$2^2 = 4$, then $-0.9 \times 4 = -3.6$, then add $97$.`,
        solution: String.raw`Evaluate $P'(2)$:
$$P'(2) = -0.9(2)^2 + 97 = -0.9(4) + 97 = -3.6 + 97 = 93.4\text{ birds/year}$$`,
      },
      {
        partId: 'c',
        label: 'Part (c)',
        prompt: String.raw`Using correct units, interpret the meaning of $P'(2)$ in the context of this problem.`,
        inputType: 'frq-rubric',
        includeBig4SelfCheck: true,
        rubricItems: [
          { id: 'time', points: 1, criterion: 'Stated time: "At t = 2 years after 2009 (or in 2011)"' },
          { id: 'context', points: 1, criterion: 'Stated context: "the bird population on the island"' },
          { id: 'dir', points: 1, criterion: 'Stated "is increasing"' },
          { id: 'units', points: 1, criterion: 'Included rate and units: "at a rate of 93.4 birds per year"' },
        ],
        modelResponse: String.raw`At $t = 2$ years after 2009 (in 2011), the bird population on the island is increasing at a rate of $93.4$ birds per year.`,
        hint1: String.raw`Include all Big 4 components: when ($t = 2$ years after 2009), what (bird population), direction ($93.4 > 0$), and units.`,
        hint2: String.raw`Units of $P$ are $\text{birds}$ and units of $t$ are $\text{years}$, so units of $P'(2)$ are $\text{birds per year}$.`,
        solution: String.raw`Since $P'(2) = 93.4 > 0$:
*"At $t = 2$ years after 2009 (in 2011), the bird population on the island is **increasing** at a rate of **$93.4$ birds per year**."*`,
      },
    ],
  },
  {
    id: '4.1-p3',
    module: 'lesson-4-1',
    section: 'PRACTICE TIME! Lesson 4.1 (Page 2)',
    badge: 'Page 2 • #3',
    title: 'Oil Tank Flow Rate: R(10) vs. R′(6)',
    calculator: 'non-calculator',
    stem: String.raw`$R(t)$ gives the **rate**, in pints per second, that oil is flowing into a tank after $t$ seconds.`,
    watchOut: String.raw`Distinguish $R(t)$ from $R'(t)$! $R(10) = 3$ is the flow rate itself (**not** "increasing"), whereas $R'(6) = -0.2$ is how fast that flow rate is changing in **pints per second per second** at $t = 6$ seconds!`,
    inMockTest: true,
    parts: [
      {
        partId: 'a',
        label: 'Part (a): R(10) = 3',
        prompt: String.raw`Which statement accurately interprets $R(10) = 3$?`,
        inputType: 'mcq',
        correctIndex: 1,
        options: [
          {
            label: 'A',
            text: String.raw`After $10$ seconds, the rate of oil flowing into the tank is increasing at a rate of $3$ pints per second.`,
            explanation: String.raw`Incorrect: $R(10)$ has no prime ($'$), so it is the flow rate itself, NOT how fast the flow rate is increasing.`,
          },
          {
            label: 'B',
            text: String.raw`At $t = 10$ seconds, oil is flowing into the tank at a rate of $3$ pints per second.`,
            explanation: String.raw`Correct! $R(t)$ already represents the flow rate in pints/sec at time $t = 10$ seconds.`,
          },
          {
            label: 'C',
            text: String.raw`During the first $10$ seconds, a total of $3$ pints of oil flowed into the tank.`,
            explanation: String.raw`Incorrect: $R(10)$ is an instantaneous flow rate in pints/sec, not total accumulated volume.`,
          },
          {
            label: 'D',
            text: String.raw`At $t = 3$ seconds, oil is flowing into the tank at a rate of $10$ pints per second.`,
            explanation: String.raw`Incorrect: This swaps the input $t = 10$ seconds and the output $R(10) = 3$ pints/sec.`,
          },
        ],
        hint1: String.raw`Look closely: is there a derivative prime symbol on $R(10)$? What does $R(t)$ already measure?`,
        hint2: String.raw`Since $R(t)$ is already defined as "the rate, in pints per second, that oil is flowing into a tank", $R(10) = 3$ simply states that flow rate at $t = 10$.`,
        solution: String.raw`$R(t)$ is the flow rate itself (not $R'(t)$). Therefore, $R(10) = 3$ means:
*"At $t = 10$ seconds, oil is flowing into the tank at a rate of $3$ pints per second."*`,
      },
      {
        partId: 'b',
        label: 'Part (b): R′(6) = −0.2',
        prompt: String.raw`Which statement accurately interprets $R'(6) = -0.2$?`,
        inputType: 'mcq',
        correctIndex: 2,
        options: [
          {
            label: 'A',
            text: String.raw`At $t = 6$ seconds, the amount of oil in the tank is decreasing at a rate of $0.2$ pints per second.`,
            explanation: String.raw`Incorrect: Oil is still flowing *into* the tank if $R(6) > 0$; it is the **rate of oil flow** $R(t)$ that is decreasing, with units $\text{pints/sec}^2$.`,
          },
          {
            label: 'B',
            text: String.raw`At $t = 6$ seconds, the rate at which oil flows into the tank is decreasing at a rate of $-0.2$ pints per second per second.`,
            explanation: String.raw`Incorrect: Never pair the word "decreasing" with a negative number ($-0.2$) — that creates a double negative!`,
          },
          {
            label: 'C',
            text: String.raw`At $t = 6$ seconds, the rate at which oil is flowing into the tank is decreasing at a rate of $0.2$ pints per second per second.`,
            explanation: String.raw`Correct! Includes exact time ($t = 6\text{ s}$), context of $R(t)$ ("the rate at which oil is flowing"), "decreasing" with $+0.2$, and units $\text{pints/sec}^2$.`,
          },
          {
            label: 'D',
            text: String.raw`At $t = 6$ seconds, the rate at which oil is flowing into the tank is decreasing at a rate of $0.2$ pints per second.`,
            explanation: String.raw`Incorrect: Missing "/ second"! Since $R(t)$ is in $\text{pints/sec}$ and $t$ is in $\text{sec}$, $R'(t)$ has units $\text{pints/sec per sec}$.`,
          },
        ],
        hint1: String.raw`$R'(6)$ is the derivative of $R(t)$ at $t = 6$ seconds. What are the units of $\frac{\Delta R}{\Delta t}$?`,
        hint2: String.raw`Units: $\frac{\text{pints/second}}{\text{second}} = \text{pints per second per second}$. And $-0.2$ means **decreasing** at $0.2$.`,
        solution: String.raw`Applying The Big 4 to $R'(6) = -0.2$:
- **Time:** At $t = 6$ seconds
- **Context of $R(t)$:** The rate at which oil is flowing into the tank
- **Direction:** Decreasing
- **Rate + Units:** $0.2$ pints per second per second ($\text{pints/sec}^2$).`,
      },
    ],
  },
  {
    id: '4.1-p4',
    module: 'lesson-4-1',
    section: 'PRACTICE TIME! Lesson 4.1 (Page 2)',
    badge: 'Page 2 • #4',
    title: 'Matching Rates of Change & Units (#1–7 to A–G)',
    calculator: 'non-calculator',
    stem: String.raw`Match each phrase in **#1–7** with the correct term or set of units in **A–G**.`,
    parts: [
      {
        partId: 'match',
        prompt: String.raw`Select the matching letter (**A–G**) for each of the 7 items below:`,
        inputType: 'matching',
        matchingChoices: [
          { id: 'A', label: 'A. velocity' },
          { id: 'B', label: 'B. acceleration' },
          { id: 'C', label: 'C. gallons per hour per hour' },
          { id: 'D', label: 'D. meters' },
          { id: 'E', label: 'E. meters per second' },
          { id: 'F', label: 'F. meters per second per second' },
          { id: 'G', label: 'G. gallons per hour' },
        ],
        matchingItems: [
          {
            id: '1',
            prompt: '1. Instantaneous rate of change of position',
            correctOptionId: 'A',
            explanation: 'Position derivative s′(t) = v(t) is velocity (A).',
          },
          {
            id: '2',
            prompt: '2. Possible units for acceleration',
            correctOptionId: 'F',
            explanation: 'Acceleration is change in velocity (m/s) per time (s) → meters per second per second (F).',
          },
          {
            id: '3',
            prompt: '3. Units for instantaneous rate of change of volume V(t), where V is in gallons and t is in hours',
            correctOptionId: 'G',
            explanation: 'V′(t) has units (units of V)/(units of t) = gallons per hour (G).',
          },
          {
            id: '4',
            prompt: '4. Possible units for position',
            correctOptionId: 'D',
            explanation: 'Position measures linear distance from an origin, such as meters (D).',
          },
          {
            id: '5',
            prompt: '5. Instantaneous rate of change of velocity',
            correctOptionId: 'B',
            explanation: 'Velocity derivative v′(t) = a(t) is acceleration (B).',
          },
          {
            id: '6',
            prompt: '6. Possible units for velocity',
            correctOptionId: 'E',
            explanation: 'Velocity is change in position (m) per unit time (s) → meters per second (E).',
          },
          {
            id: '7',
            prompt: '7. Units for instantaneous rate of change of R(t), where R is in gallons per hour and t is in hours',
            correctOptionId: 'C',
            explanation: 'R′(t) divides (gallons per hour) by (hours) → gallons per hour per hour (C).',
          },
        ],
        hint1: String.raw`For any derivative $f'(t)$, its units are always $\frac{\text{units of } f}{\text{units of } t}$.`,
        hint2: String.raw`Position $\xrightarrow{d/dt}$ Velocity $\xrightarrow{d/dt}$ Acceleration; Volume ($\text{gal}$) $\xrightarrow{d/dt}$ $\text{gal/hr}$ $\xrightarrow{d/dt}$ $\text{gal/hr/hr}$.`,
        solution: String.raw`**Complete Matching Key:**
- **1 $\to$ A** (velocity $= s'(t)$)
- **2 $\to$ F** ($\text{meters per second per second}$)
- **3 $\to$ G** ($\text{gallons per hour}$, for $V'(t)$)
- **4 $\to$ D** ($\text{meters}$)
- **5 $\to$ B** (acceleration $= v'(t)$)
- **6 $\to$ E** ($\text{meters per second}$)
- **7 $\to$ C** ($\text{gallons per hour per hour}$, for $R'(t)$)`,
      },
    ],
  },
];
