import React, { useState } from 'react';
import { VisualDiagramId } from '../types';

// Exact piecewise-linear velocity function for Caren's ride (Page 4)
const CAREN_VERTICES: [number, number][] = [
  [0, 0],
  [1, 0.2],
  [2, 0],
  [3, -0.2],
  [4, 0],
  [5, 0],
  [6, 0.3],
  [7, 0.3],
  [8, 0.2],
  [11, 0.2],
  [12, 0],
];

function evalCaren(t: number): { v: number; a: number | string } {
  const clamped = Math.max(0, Math.min(12, t));
  for (let i = 0; i < CAREN_VERTICES.length - 1; i++) {
    const [t1, v1] = CAREN_VERTICES[i];
    const [t2, v2] = CAREN_VERTICES[i + 1];
    if (clamped >= t1 && clamped <= t2) {
      const slope = (v2 - v1) / (t2 - t1);
      const v = v1 + slope * (clamped - t1);
      const isCorner =
        (Math.abs(clamped - t1) < 1e-4 && i > 0) ||
        (Math.abs(clamped - t2) < 1e-4 && i < CAREN_VERTICES.length - 2);
      return {
        v: Number(v.toFixed(3)),
        a: isCorner ? 'DNE (corner)' : Number(slope.toFixed(2)),
      };
    }
  }
  return { v: 0, a: 0 };
}

export const CarenVelocityGraph: React.FC = () => {
  const [hoverT, setHoverT] = useState<number>(2.5);

  const toX = (t: number) => 60 + t * 40;
  const toY = (v: number) => 145 - v * 320;

  const polyPoints = CAREN_VERTICES.map(([t, v]) => `${toX(t)},${toY(v)}`).join(' ');
  const { v: curV, a: curA } = evalCaren(hoverT);

  const handlePointer = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * 580;
    const rawT = (svgX - 60) / 40;
    if (rawT >= 0 && rawT <= 12) {
      const snapped = Math.round(rawT * 2) / 2;
      setHoverT(snapped);
    }
  };

  return (
    <div className="my-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Interactive Velocity Graph: v(t) in miles/minute (Hover or Drag Slider)
        </div>
        <div className="flex items-center gap-3 text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
          <span>
            t = <strong className="text-indigo-600 dark:text-indigo-400">{hoverT.toFixed(1)} min</strong>
          </span>
          <span>•</span>
          <span>
            v(t) = <strong className="text-emerald-600 dark:text-emerald-400">{curV} mi/min</strong>
          </span>
          <span>•</span>
          <span>
            v′(t) = <strong className="text-amber-600 dark:text-amber-400">{curA}</strong>
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 580 245"
          onMouseMove={handlePointer}
          className="w-full min-w-[480px] h-auto cursor-crosshair select-none"
          role="img"
          aria-label="Caren piecewise-linear velocity graph from t=0 to t=12 minutes"
        >
          {[-0.2, -0.1, 0, 0.1, 0.2, 0.3].map((vVal) => (
            <g key={vVal}>
              <line
                x1={60}
                y1={toY(vVal)}
                x2={540}
                y2={toY(vVal)}
                stroke="currentColor"
                className={vVal === 0 ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200 dark:text-slate-800'}
                strokeWidth={vVal === 0 ? 1.8 : 1}
              />
              <text
                x={50}
                y={toY(vVal) + 4}
                textAnchor="end"
                className="fill-slate-600 dark:fill-slate-400 text-[11px] font-mono"
              >
                {vVal.toFixed(1)}
              </text>
            </g>
          ))}

          {Array.from({ length: 13 }, (_, tVal) => (
            <g key={tVal}>
              <line
                x1={toX(tVal)}
                y1={35}
                x2={toX(tVal)}
                y2={218}
                stroke="currentColor"
                className={tVal === 0 ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200 dark:text-slate-800'}
                strokeWidth={tVal === 0 ? 1.8 : 1}
              />
              <text
                x={toX(tVal)}
                y={234}
                textAnchor="middle"
                className="fill-slate-600 dark:fill-slate-400 text-[11px] font-mono"
              >
                {tVal}
              </text>
            </g>
          ))}

          <text x={60} y={24} className="fill-slate-700 dark:fill-slate-300 text-xs font-bold">
            v(t) (mi/min)
          </text>
          <text x={552} y={149} className="fill-slate-700 dark:fill-slate-300 text-xs font-bold">
            t (min)
          </text>

          <polyline
            fill="none"
            stroke="#4F46E5"
            strokeWidth={3}
            strokeLinejoin="round"
            strokeLinecap="round"
            points={polyPoints}
          />

          {CAREN_VERTICES.map(([t, v], idx) => (
            <circle
              key={idx}
              cx={toX(t)}
              cy={toY(v)}
              r={4}
              className="fill-white dark:fill-slate-900 stroke-indigo-600 dark:stroke-indigo-400"
              strokeWidth={2}
            />
          ))}

          <line
            x1={toX(hoverT)}
            y1={35}
            x2={toX(hoverT)}
            y2={218}
            stroke="#10B981"
            strokeWidth={1.5}
            strokeDasharray="4,3"
          />
          <circle
            cx={toX(hoverT)}
            cy={toY(curV)}
            r={6}
            className="fill-emerald-500 stroke-white dark:stroke-slate-900"
            strokeWidth={2}
          />
        </svg>
      </div>

      <div className="mt-2 flex items-center gap-3 px-2">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">🏠 t=0</span>
        <input
          type="range"
          min={0}
          max={12}
          step={0.5}
          value={hoverT}
          onChange={(e) => setHoverT(parseFloat(e.target.value))}
          aria-label="Inspect time t on Caren's velocity graph"
          className="flex-1 accent-indigo-600 h-1.5 cursor-pointer"
        />
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">🏫 t=12</span>
      </div>
    </div>
  );
};

// Reusable clean coordinate grid for piecewise graphs
interface GridGraphProps {
  title: string;
  xMin: number;
  xMax: number;
  xStep?: number;
  yMin: number;
  yMax: number;
  yStep?: number;
  xAxisLabel: string;
  yAxisLabel: string;
  vertices: [number, number][];
  strokeColor?: string;
}

const PiecewiseGridGraph: React.FC<GridGraphProps> = ({
  title,
  xMin,
  xMax,
  xStep = 1,
  yMin,
  yMax,
  yStep = 1,
  xAxisLabel,
  yAxisLabel,
  vertices,
  strokeColor = '#6366F1',
}) => {
  const padL = 52;
  const padR = 38;
  const padT = 32;
  const padB = 34;
  const plotW = 420;
  const plotH = 210;
  const svgW = padL + plotW + padR;
  const svgH = padT + plotH + padB;

  const toX = (x: number) => padL + ((x - xMin) / (xMax - xMin)) * plotW;
  const toY = (y: number) => padT + ((yMax - y) / (yMax - yMin)) * plotH;

  const xTicks: number[] = [];
  for (let x = xMin; x <= xMax + 1e-6; x += xStep) xTicks.push(Number(x.toFixed(4)));
  const yTicks: number[] = [];
  for (let y = yMin; y <= yMax + 1e-6; y += yStep) yTicks.push(Number(y.toFixed(4)));

  const poly = vertices.map(([x, y]) => `${toX(x)},${toY(y)}`).join(' ');

  return (
    <div className="my-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
        {title}
      </div>
      <div className="overflow-x-auto flex justify-center">
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full max-w-[520px] h-auto select-none" role="img" aria-label={title}>
          {yTicks.map((yv) => (
            <g key={yv}>
              <line
                x1={padL}
                y1={toY(yv)}
                x2={padL + plotW}
                y2={toY(yv)}
                stroke="currentColor"
                className={Math.abs(yv) < 1e-6 ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200 dark:text-slate-800'}
                strokeWidth={Math.abs(yv) < 1e-6 ? 1.8 : 1}
              />
              <text
                x={padL - 8}
                y={toY(yv) + 4}
                textAnchor="end"
                className="fill-slate-600 dark:fill-slate-400 text-[10px] font-mono"
              >
                {yv}
              </text>
            </g>
          ))}
          {xTicks.map((xv) => (
            <g key={xv}>
              <line
                x1={toX(xv)}
                y1={padT}
                x2={toX(xv)}
                y2={padT + plotH}
                stroke="currentColor"
                className={Math.abs(xv) < 1e-6 ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200 dark:text-slate-800'}
                strokeWidth={Math.abs(xv) < 1e-6 ? 1.8 : 1}
              />
              <text
                x={toX(xv)}
                y={padT + plotH + 16}
                textAnchor="middle"
                className="fill-slate-600 dark:fill-slate-400 text-[10px] font-mono"
              >
                {xv}
              </text>
            </g>
          ))}
          <text x={padL} y={20} className="fill-slate-700 dark:fill-slate-300 text-xs font-bold">
            {yAxisLabel}
          </text>
          <text x={padL + plotW + 6} y={toY(0) + 4} className="fill-slate-700 dark:fill-slate-300 text-xs font-bold">
            {xAxisLabel}
          </text>
          <polyline
            fill="none"
            stroke={strokeColor}
            strokeWidth={2.8}
            strokeLinejoin="round"
            strokeLinecap="round"
            points={poly}
          />
          {vertices.map(([x, y], i) => (
            <circle
              key={i}
              cx={toX(x)}
              cy={toY(y)}
              r={4}
              className="fill-white dark:fill-slate-900"
              stroke={strokeColor}
              strokeWidth={2.2}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export const VisualDiagram: React.FC<{ id: VisualDiagramId }> = ({ id }) => {
  if (id === 'caren-velocity-graph') {
    return <CarenVelocityGraph />;
  }

  if (id === 'kc42-velocity-graph' || id === 'kc-42-velocity-graph') {
    // Knowledge Check 4.2 #1: (0,0) -> (1.1,-3.5) -> (2,-3.5) -> (5,4) -> (7.3,-1.7) -> (9,0)
    return (
      <PiecewiseGridGraph
        title="Knowledge Check 4.2 #1 — Velocity Graph V(t) in feet/minute on [0, 9]"
        xMin={0}
        xMax={9}
        xStep={1}
        yMin={-4}
        yMax={4}
        yStep={1}
        xAxisLabel="t (min)"
        yAxisLabel="V(t) (ft/min)"
        vertices={[
          [0, 0],
          [1.1, -3.5],
          [2, -3.5],
          [5, 4],
          [7.3, -1.7],
          [9, 0],
        ]}
        strokeColor="#38BDF8"
      />
    );
  }

  if (id === 'pptx-42-velocity-graph') {
    // 4.2 PPTX Slide 11 Velocity Graph on [0, 9]: (0,3) -> (3,12) -> (6,-6) -> (9,-6)
    return (
      <PiecewiseGridGraph
        title="4.2 PPTX Slide 11 — Velocity Graph v(t) in ft/sec on [0, 9]"
        xMin={0}
        xMax={9}
        xStep={1}
        yMin={-6}
        yMax={12}
        yStep={3}
        xAxisLabel="t (sec)"
        yAxisLabel="v(t) (ft/sec)"
        vertices={[
          [0, 3],
          [3, 12],
          [6, -6],
          [9, -6],
        ]}
        strokeColor="#818CF8"
      />
    );
  }

  if (id === 'mcq35-bug-velocity-graph') {
    // 35-MCQ Packet #7: Bug crawling on vertical wire on [0, 8]
    return (
      <PiecewiseGridGraph
        title="Bug Velocity Graph v(t) on 0 ≤ t ≤ 8"
        xMin={0}
        xMax={8}
        xStep={1}
        yMin={-1}
        yMax={3}
        yStep={1}
        xAxisLabel="t"
        yAxisLabel="v(t)"
        vertices={[
          [0, 0],
          [2, 3],
          [4, 3],
          [6, 0],
          [7, -1],
          [8, 0],
        ]}
        strokeColor="#10B981"
      />
    );
  }

  if (id === 'mcq35-position-concavity-graph') {
    // 35-MCQ Packet #8 & #25: Smooth position graph x(t) on (0, 6)
    // Horizontal tangents at t = 1 (min ≈ -1.6) and t = 5 (max = 1.0), inflection at t = 2 (x ≈ -0.9), x(0)=0, x(3)=0
    const padL = 52;
    const padT = 30;
    const plotW = 360;
    const plotH = 190;
    const toX = (t: number) => padL + (t / 6) * plotW;
    const toY = (x: number) => padT + ((2 - x) / 4) * plotH;

    // Sample exact cubic/quartic-matched curve with x'(1)=0, x'(5)=0, x''(2)=0!
    // Look! Let x'(t) = k * (t - 1) * (5 - t) / ... wait: if x'(t) has max at t=2 (so x''(2)=0) and zeros at t=1 and t=5:
    // Let x'(t) = A * (t - 1) * (5 - t) * e^(-c*t)!
    // Check derivative of (t - 1)(5 - t) e^(-c t) = (-t^2 + 6t - 5) e^(-c t):
    // At t = 2: (-2*2 + 6) - c*(-4 + 12 - 5) = 2 - 3c = 0 => c = 2/3!!
    // BINGO!! With c = 2/3, x'(1) = 0, x'(5) = 0, AND x''(2) = 0 EXACTLY!!
    const pts: string[] = [];
    let curVal = 0;
    const rawVals: [number, number][] = [[0, 0]];
    const dt = 0.05;
    for (let t = dt; t <= 6.001; t += dt) {
      const tm = t - dt / 2;
      const deriv = (tm - 1) * (5 - tm) * Math.exp((-2 / 3) * tm);
      curVal += deriv * dt;
      rawVals.push([t, curVal]);
    }
    // Scale so min at t=1 is -1.6:
    const minAt1 = rawVals[20][1];
    const scale = -1.6 / minAt1;
    for (const [t, val] of rawVals) {
      pts.push(`${toX(t).toFixed(1)},${toY(val * scale).toFixed(1)}`);
    }
    const yAt1 = rawVals[20][1] * scale;
    const yAt2 = rawVals[40][1] * scale;
    const yAt5 = rawVals[100][1] * scale;

    return (
      <div className="my-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
          Position Graph x(t) on 0 &lt; t &lt; 6 (Horizontal Tangents at t = 1, 5 • Inflection Point at t = 2)
        </div>
        <div className="overflow-x-auto flex justify-center">
          <svg viewBox="0 0 460 250" className="w-full max-w-[460px] h-auto select-none" role="img" aria-label="Position graph x(t) with horizontal tangents at t=1 and t=5 and inflection at t=2">
            {[-2, -1, 0, 1, 2].map((yv) => (
              <g key={yv}>
                <line
                  x1={padL}
                  y1={toY(yv)}
                  x2={padL + plotW}
                  y2={toY(yv)}
                  stroke="currentColor"
                  className={yv === 0 ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200 dark:text-slate-800'}
                  strokeWidth={yv === 0 ? 1.8 : 1}
                />
                <text x={padL - 8} y={toY(yv) + 4} textAnchor="end" className="fill-slate-600 dark:fill-slate-400 text-[10px] font-mono">
                  {yv}
                </text>
              </g>
            ))}
            {[0, 1, 2, 3, 4, 5, 6].map((tv) => (
              <g key={tv}>
                <line
                  x1={toX(tv)}
                  y1={padT}
                  x2={toX(tv)}
                  y2={padT + plotH}
                  stroke="currentColor"
                  className={tv === 0 ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200 dark:text-slate-800'}
                  strokeWidth={tv === 0 ? 1.8 : 1}
                />
                <text x={toX(tv)} y={toY(0) + 15} textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px] font-mono">
                  {tv}
                </text>
              </g>
            ))}
            <text x={padL - 8} y={20} className="fill-slate-700 dark:fill-slate-300 text-xs font-bold">
              x(t)
            </text>
            <text x={padL + plotW + 8} y={toY(0) + 4} className="fill-slate-700 dark:fill-slate-300 text-xs font-bold">
              t
            </text>
            <polyline fill="none" stroke="#F59E0B" strokeWidth={3} points={pts.join(' ')} />
            {/* Highlight horizontal tangents & inflection */}
            <circle cx={toX(1)} cy={toY(yAt1)} r={4} fill="#10B981" />
            <circle cx={toX(2)} cy={toY(yAt2)} r={4.5} fill="#EC4899" />
            <circle cx={toX(5)} cy={toY(yAt5)} r={4} fill="#10B981" />
          </svg>
        </div>
      </div>
    );
  }

  if (id === 'mcq35-triangle-angle-diagram') {
    return (
      <div className="my-4 flex justify-center">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
          <svg viewBox="0 0 250 155" className="w-60 h-auto select-none" role="img" aria-label="Right triangle with hypotenuse 5, vertical leg x, and acute angle theta">
            <polygon points="35,125 195,125 195,25" fill="rgba(99,102,241,0.08)" stroke="#6366F1" strokeWidth={2.5} strokeLinejoin="round" />
            <polyline points="181,125 181,111 195,111" fill="none" stroke="#94A3B8" strokeWidth={1.8} />
            <text x={105} y={66} className="fill-indigo-600 dark:fill-indigo-400 text-sm font-extrabold">
              5
            </text>
            <text x={206} y={82} className="fill-emerald-600 dark:fill-emerald-400 text-sm font-extrabold">
              x
            </text>
            <text x={66} y={118} className="fill-amber-600 dark:fill-amber-400 text-sm font-extrabold">
              θ
            </text>
          </svg>
        </div>
      </div>
    );
  }

  if (id === 'mcq35-rectangle-diag-diagram') {
    return (
      <div className="my-4 flex justify-center">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
          <svg viewBox="0 0 260 155" className="w-64 h-auto select-none" role="img" aria-label="Rectangle with horizontal base x, height y, and diagonal z">
            <rect x={45} y={25} width={170} height={95} fill="rgba(16,185,129,0.08)" stroke="#10B981" strokeWidth={2.5} />
            <line x1={45} y1={25} x2={215} y2={120} stroke="#F59E0B" strokeWidth={2.5} />
            <text x={26} y={78} className="fill-emerald-600 dark:fill-emerald-400 text-sm font-extrabold">
              y
            </text>
            <text x={125} y={140} className="fill-emerald-600 dark:fill-emerald-400 text-sm font-extrabold">
              x
            </text>
            <text x={135} y={66} className="fill-amber-600 dark:fill-amber-400 text-sm font-extrabold">
              z
            </text>
          </svg>
        </div>
      </div>
    );
  }

  if (id === 'bultman-p1-velocity-graph') {
    return (
      <PiecewiseGridGraph
        title="Ms. Bultman Page 1 — Velocity Graph v(t) in m/s on [0, 10]"
        xMin={0}
        xMax={10}
        xStep={1}
        yMin={-4}
        yMax={4}
        yStep={1}
        xAxisLabel="t (sec)"
        yAxisLabel="v(t) (m/s)"
        vertices={[
          [0, 1],
          [2, 3],
          [3, 0],
          [6, 1],
          [8, -4],
          [10, 1],
        ]}
        strokeColor="#A855F7"
      />
    );
  }

  if (id === 'bultman-particle-a-graph') {
    // Ms. Bultman #18-#19: v(t) on [0, 6pi]:
    // [0, 3pi]: 1.5*sin(t); [3pi, 4.5pi]: line from (3pi, 0) to (4.5pi, -1.5); [4.5pi, 6pi]: smooth curve through (5.5pi, -0.5) to (6pi, 0)
    const padL = 52;
    const padT = 30;
    const plotW = 420;
    const plotH = 180;
    // Let u = t / pi in [0, 6]
    const toX = (u: number) => padL + (u / 6) * plotW;
    const toY = (v: number) => padT + ((2 - v) / 4) * plotH;

    const pts: string[] = [];
    for (let u = 0; u <= 3.001; u += 0.05) {
      const v = 1.5 * Math.sin(u * Math.PI);
      pts.push(`${toX(u).toFixed(1)},${toY(v).toFixed(1)}`);
    }
    pts.push(`${toX(4.5).toFixed(1)},${toY(-1.5).toFixed(1)}`);
    // Quadratic through (4.5, -1.5), (5.5, -0.5), (6.0, 0):
    //Wait: check slope from (4.5, -1.5) to (5.5, -0.5) is +1, and (5.5, -0.5) to (6.0, 0) is +1?
    // Wait: on the worksheet it's slightly curved concave-up: v(u) = -1.5 + 0.8*(u-4.5) + (0.2/1.5)*(u-4.5)^2 -> let's interpolate exact Lagrange quadratic through (4.5,-1.5), (5.5,-0.5), (6,0):
    // Wait: (-0.5 - (-1.5))/(5.5-4.5) = 1.0 AND (0 - (-0.5))/(6-5.5) = 1.0! Look at all_5_graphs_zoom.png middle-left:
    // At u = 4.5 (9th grid line), dot is at -1.5; at u = 5.5 (11th grid line), dot is at -0.5; wait at u = 5 (10th grid line) it's at -1.25, curving up through (5.5, -0.5) to (6, +0.1? No, (6, 0) dot is right on axis!).
    for (let u = 4.55; u <= 6.001; u += 0.05) {
      const v = -1.5 + 0.3 * (u - 4.5) + 0.4667 * Math.pow(u - 4.5, 2);
      pts.push(`${toX(u).toFixed(1)},${toY(v).toFixed(1)}`);
    }

    const uGrid = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6];
    const uLabels: Record<number, string> = {
      0: '0',
      1: 'π',
      2: '2π',
      3: '3π',
      4: '4π',
      4.5: '9π/2',
      5: '5π',
      6: '6π',
    };

    return (
      <div className="my-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
          Particle A Velocity Graph v(t) on [0, 6π] (Each Horizontal Grid Unit = π/2, Vertical Grid Unit = 0.5)
        </div>
        <div className="overflow-x-auto flex justify-center">
          <svg viewBox="0 0 510 245" className="w-full max-w-[510px] h-auto select-none" role="img" aria-label="Velocity graph of Particle A from 0 to 6pi">
            {[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2].map((yv) => (
              <g key={yv}>
                <line
                  x1={padL}
                  y1={toY(yv)}
                  x2={padL + plotW}
                  y2={toY(yv)}
                  stroke="currentColor"
                  className={yv === 0 ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200 dark:text-slate-800'}
                  strokeWidth={yv === 0 ? 1.8 : 1}
                />
                {Number.isInteger(yv) && (
                  <text x={padL - 8} y={toY(yv) + 4} textAnchor="end" className="fill-slate-600 dark:fill-slate-400 text-[10px] font-mono">
                    {yv}
                  </text>
                )}
              </g>
            ))}
            {uGrid.map((ug) => (
              <g key={ug}>
                <line
                  x1={toX(ug)}
                  y1={padT}
                  x2={toX(ug)}
                  y2={padT + plotH}
                  stroke="currentColor"
                  className={ug === 0 ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200 dark:text-slate-800'}
                  strokeWidth={ug === 0 ? 1.8 : 1}
                />
                {uLabels[ug] && (
                  <text x={toX(ug)} y={padT + plotH + 16} textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px] font-mono">
                    {uLabels[ug]}
                  </text>
                )}
              </g>
            ))}
            <text x={padL} y={20} className="fill-slate-700 dark:fill-slate-300 text-xs font-bold">
              v(t)
            </text>
            <polyline fill="none" stroke="#38BDF8" strokeWidth={2.8} points={pts.join(' ')} />
            {[
              [0, 0],
              [1, 0],
              [2, 0],
              [3, 0],
              [4.5, -1.5],
              [6, 0],
            ].map(([u, v], idx) => (
              <circle key={idx} cx={toX(u)} cy={toY(v)} r={4} className="fill-white dark:fill-slate-900 stroke-sky-400" strokeWidth={2.2} />
            ))}
          </svg>
        </div>
      </div>
    );
  }

  if (id === 'bultman-eastlake-position-graph') {
    return (
      <PiecewiseGridGraph
        title="Eastlake Student Position Graph s(t) on [0, 10] (Note: POSITION Graph, NOT Velocity!)"
        xMin={0}
        xMax={10}
        xStep={1}
        yMin={-4}
        yMax={4}
        yStep={1}
        xAxisLabel="t"
        yAxisLabel="s(t)"
        vertices={[
          [0, -3],
          [2, 3],
          [4, -3],
          [8, -3],
          [10, 0],
        ]}
        strokeColor="#F43F5E"
      />
    );
  }

  if (id === 'bultman-sprinter-velocity-graph') {
    return (
      <PiecewiseGridGraph
        title="Sprinter Velocity Graph v(t) in ft/sec on [0, 9]"
        xMin={0}
        xMax={9}
        xStep={1}
        yMin={-14}
        yMax={14}
        yStep={2}
        xAxisLabel="t (sec)"
        yAxisLabel="v(t) (ft/sec)"
        vertices={[
          [0, 14],
          [1, 14],
          [2, 0],
          [3, -12],
          [4, -12],
          [6, 0],
          [7, 6],
          [9, 6],
        ]}
        strokeColor="#10B981"
      />
    );
  }

  if (id === 'unit-circle-diagram') {
    return (
      <div className="my-4 flex justify-center">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
          <svg viewBox="0 0 240 210" className="w-56 h-auto select-none" role="img" aria-label="Unit circle x^2 + y^2 = 1 with tangent lines">
            <line x1={20} y1={105} x2={220} y2={105} stroke="#94A3B8" strokeWidth={1.5} />
            <line x1={120} y1={15} x2={120} y2={195} stroke="#94A3B8" strokeWidth={1.5} />
            <circle cx={120} cy={105} r={68} fill="none" stroke="#4F46E5" strokeWidth={2.5} />
            <line x1={55} y1={37} x2={185} y2={37} stroke="#10B981" strokeWidth={1.5} strokeDasharray="4,3" />
            <line x1={55} y1={173} x2={185} y2={173} stroke="#10B981" strokeWidth={1.5} strokeDasharray="4,3" />
            <line x1={133} y1={22} x2={203} y2={92} stroke="#F59E0B" strokeWidth={2} />
            <circle cx={168} cy={57} r={4.5} fill="#F59E0B" />
            <text x={175} y={53} className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">
              (√2/2, √2/2)
            </text>
            <circle cx={120} cy={37} r={4} fill="#10B981" />
            <text x={126} y={32} className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">
              (0, 1)
            </text>
            <circle cx={188} cy={105} r={4} fill="#4F46E5" />
            <text x={192} y={118} className="fill-slate-600 dark:fill-slate-300 text-[10px] font-semibold">
              (1, 0)
            </text>
          </svg>
        </div>
      </div>
    );
  }

  if (id === 'conical-tank-diagram') {
    return (
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 flex items-center gap-3">
          <svg viewBox="0 0 120 120" className="w-24 h-24 flex-shrink-0" role="img" aria-label="Inverted cone similar triangles">
            <ellipse cx={60} cy={22} rx={42} ry={10} fill="none" stroke="#64748B" strokeWidth={1.8} />
            <line x1={18} y1={22} x2={60} y2={108} stroke="#64748B" strokeWidth={1.8} />
            <line x1={102} y1={22} x2={60} y2={108} stroke="#64748B" strokeWidth={1.8} />
            <ellipse cx={60} cy={58} rx={24} ry={6} fill="rgba(56,189,248,0.2)" stroke="#0284C7" strokeWidth={1.6} />
            <line x1={60} y1={22} x2={60} y2={108} stroke="#94A3B8" strokeDasharray="3,2" />
            <line x1={60} y1={58} x2={84} y2={58} stroke="#0284C7" strokeWidth={2} />
            <text x={68} y={54} className="fill-sky-600 dark:fill-sky-400 text-[10px] font-bold">r</text>
            <text x={63} y={85} className="fill-sky-600 dark:fill-sky-400 text-[10px] font-bold">h</text>
          </svg>
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <div className="font-bold text-slate-900 dark:text-white">Cone / Pyramid: r Changes!</div>
            <p>Use similar triangles <code className="font-mono">r / h = R / H</code> to substitute BEFORE taking <code className="font-mono">d/dt</code>.</p>
          </div>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 flex items-center gap-3">
          <svg viewBox="0 0 120 120" className="w-24 h-24 flex-shrink-0" role="img" aria-label="Cylindrical barrel with constant radius">
            <ellipse cx={60} cy={22} rx={30} ry={8} fill="none" stroke="#64748B" strokeWidth={1.8} />
            <line x1={30} y1={22} x2={30} y2={98} stroke="#64748B" strokeWidth={1.8} />
            <line x1={90} y1={22} x2={90} y2={98} stroke="#64748B" strokeWidth={1.8} />
            <ellipse cx={60} cy={98} rx={30} ry={8} fill="rgba(16,185,129,0.2)" stroke="#059669" strokeWidth={1.6} />
            <ellipse cx={60} cy={56} rx={30} ry={8} fill="rgba(16,185,129,0.25)" stroke="#059669" strokeWidth={1.6} />
            <line x1={60} y1={56} x2={90} y2={56} stroke="#059669" strokeWidth={2} />
            <text x={70} y={52} className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">r = const</text>
          </svg>
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <div className="font-bold text-slate-900 dark:text-white">Cylinder: r is Constant!</div>
            <p>Water radius never changes as height drops, so plug in constant <code className="font-mono">r</code> immediately!</p>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'ferris-wheel-diagram') {
    return (
      <div className="my-4 flex justify-center">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
          <svg viewBox="0 0 310 185" className="w-72 sm:w-80 h-auto select-none" role="img" aria-label="Ferris wheel centered at (12,7) viewed from (0,2)">
            <line x1={25} y1={160} x2={295} y2={160} stroke="#94A3B8" strokeWidth={1.6} />
            <line x1={35} y1={170} x2={35} y2={15} stroke="#94A3B8" strokeWidth={1.6} />
            <circle cx={191} cy={69} r={65} fill="none" stroke="#4F46E5" strokeWidth={2.2} />
            <line x1={160} y1={160} x2={191} y2={69} stroke="#64748B" strokeWidth={2} />
            <line x1={222} y1={160} x2={191} y2={69} stroke="#64748B" strokeWidth={2} />
            <line x1={35} y1={134} x2={230} y2={17} stroke="#F59E0B" strokeWidth={2} strokeDasharray="5,3" />
            <circle cx={35} cy={134} r={4.5} fill="#10B981" />
            <text x={42} y={142} className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-bold">
              Jalen (0, 2)
            </text>
            <circle cx={191} cy={69} r={4} fill="#4F46E5" />
            <text x={197} y={73} className="fill-indigo-600 dark:fill-indigo-400 text-[11px] font-bold">
              (12, 7)
            </text>
            <circle cx={230} cy={17} r={5} fill="#EF4444" />
            <text x={237} y={21} className="fill-rose-600 dark:fill-rose-400 text-[11px] font-bold">
              (x, y) = (15, 11)
            </text>
            <text x={115} y={72} className="fill-amber-600 dark:fill-amber-400 text-xs font-bold">
              Z
            </text>
          </svg>
        </div>
      </div>
    );
  }

  if (id === 'plank-pulley-diagram') {
    return (
      <div className="my-4 flex justify-center">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
          <svg viewBox="0 0 280 185" className="w-64 sm:w-72 h-auto select-none" role="img" aria-label="Worker pulling 5-meter plank up side of building">
            <line x1={25} y1={160} x2={260} y2={160} stroke="#94A3B8" strokeWidth={2.5} />
            <rect x={45} y={40} width={55} height={120} fill="none" stroke="#64748B" strokeWidth={2.5} />
            <line x1={45} y1={100} x2={100} y2={100} stroke="#64748B" strokeWidth={2} />
            <line x1={45} y1={40} x2={100} y2={100} stroke="#64748B" strokeWidth={1.6} />
            <line x1={100} y1={40} x2={45} y2={100} stroke="#64748B" strokeWidth={1.6} />
            <line x1={45} y1={100} x2={100} y2={160} stroke="#64748B" strokeWidth={1.6} />
            <line x1={100} y1={100} x2={45} y2={160} stroke="#64748B" strokeWidth={1.6} />
            <circle cx={92} cy={24} r={5} fill="#38BDF8" />
            <line x1={92} y1={29} x2={92} y2={40} stroke="#38BDF8" strokeWidth={2.2} />
            <line x1={102} y1={32} x2={102} y2={92} stroke="#F59E0B" strokeWidth={2} strokeDasharray="4,2" />
            <line x1={116} y1={82} x2={116} y2={52} stroke="#EF4444" strokeWidth={2.2} />
            <polygon points="116,46 112,54 120,54" fill="#EF4444" />
            <text x={123} y={68} className="fill-rose-500 dark:fill-rose-400 text-[10px] font-bold">
              0.20 m/s
            </text>
            <line x1={100} y1={92} x2={215} y2={160} stroke="#A855F7" strokeWidth={4} strokeLinecap="round" />
            <text x={162} y={118} className="fill-purple-600 dark:fill-purple-300 text-xs font-extrabold">
              5 m
            </text>
            <text x={142} y={176} className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-bold">
              x = 2.0 m
            </text>
          </svg>
        </div>
      </div>
    );
  }

  if (id === 'streetlamp-shadow-diagram') {
    return (
      <div className="my-4 flex justify-center">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
          <svg viewBox="0 0 320 175" className="w-72 sm:w-80 h-auto select-none" role="img" aria-label="6-ft student walking away from 15-ft streetlamp">
            <line x1={25} y1={145} x2={305} y2={145} stroke="#94A3B8" strokeWidth={2} />
            <line x1={45} y1={145} x2={45} y2={30} stroke="#64748B" strokeWidth={3.5} />
            <circle cx={45} cy={26} r={7} fill="#FBBF24" />
            <text x={14} y={92} className="fill-amber-600 dark:fill-amber-400 text-[11px] font-bold">
              15 ft
            </text>
            <line x1={45} y1={26} x2={212} y2={145} stroke="#FBBF24" strokeWidth={1.8} strokeDasharray="5,3" />
            <circle cx={145} cy={95} r={4.5} fill="#38BDF8" />
            <line x1={145} y1={99} x2={145} y2={145} stroke="#38BDF8" strokeWidth={3} />
            <text x={150} y={118} className="fill-sky-600 dark:fill-sky-400 text-[11px] font-bold">
              6 ft
            </text>
            <text x={82} y={162} className="fill-slate-600 dark:fill-slate-300 text-[11px] font-semibold">
              x (dx/dt = 7 ft/s)
            </text>
            <line x1={145} y1={145} x2={212} y2={145} stroke="#10B981" strokeWidth={3.5} />
            <text x={165} y={162} className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-bold">
              s (shadow)
            </text>
          </svg>
        </div>
      </div>
    );
  }

  return null;
};
