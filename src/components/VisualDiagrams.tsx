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

  // SVG coordinate helpers: t in [0, 12] -> x in [60, 540] (40px per min)
  // v in [-0.25, 0.35] -> y in [225, 25] (v=0 at y=145, 320px per 1.0 unit => 32px per 0.1)
  const toX = (t: number) => 60 + t * 40;
  const toY = (v: number) => 145 - v * 320;

  const polyPoints = CAREN_VERTICES.map(([t, v]) => `${toX(t)},${toY(v)}`).join(' ');
  const { v: curV, a: curA } = evalCaren(hoverT);

  const handlePointer = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * 580;
    const rawT = (svgX - 60) / 40;
    if (rawT >= 0 && rawT <= 12) {
      // Snap to nearest 0.5 minute for crisp inspection
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
          {/* Horizontal grid lines (-0.2 to 0.3) */}
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

          {/* Vertical grid lines (0 to 12) */}
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

          {/* Axis Titles */}
          <text x={60} y={24} className="fill-slate-700 dark:fill-slate-300 text-xs font-bold">
            v(t) (mi/min)
          </text>
          <text x={552} y={149} className="fill-slate-700 dark:fill-slate-300 text-xs font-bold">
            t (min)
          </text>

          {/* Piecewise-linear curve */}
          <polyline
            fill="none"
            stroke="#4F46E5"
            strokeWidth={3}
            strokeLinejoin="round"
            strokeLinecap="round"
            points={polyPoints}
          />

          {/* Key vertices */}
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

          {/* Active hover scrubber */}
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

      {/* Touch-friendly scrubber slider */}
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

export const VisualDiagram: React.FC<{ id: VisualDiagramId }> = ({ id }) => {
  if (id === 'caren-velocity-graph') {
    return <CarenVelocityGraph />;
  }

  if (id === 'unit-circle-diagram') {
    return (
      <div className="my-4 flex justify-center">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
          <svg viewBox="0 0 240 210" className="w-56 h-auto select-none" role="img" aria-label="Unit circle x^2 + y^2 = 1 with tangent lines">
            <line x1={20} y1={105} x2={220} y2={105} stroke="#94A3B8" strokeWidth={1.5} />
            <line x1={120} y1={15} x2={120} y2={195} stroke="#94A3B8" strokeWidth={1.5} />
            <circle cx={120} cy={105} r={68} fill="none" stroke="#4F46E5" strokeWidth={2.5} />
            {/* Horizontal tangents at (0,1) and (0,-1) */}
            <line x1={55} y1={37} x2={185} y2={37} stroke="#10B981" strokeWidth={1.5} strokeDasharray="4,3" />
            <line x1={55} y1={173} x2={185} y2={173} stroke="#10B981" strokeWidth={1.5} strokeDasharray="4,3" />
            {/* Tangent at (√2/2, √2/2) -> (168, 57), slope -1 */}
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
            {/* Center (12, 7) -> (191, 69), r = 5 -> 65px */}
            <circle cx={191} cy={69} r={65} fill="none" stroke="#4F46E5" strokeWidth={2.2} />
            <line x1={160} y1={160} x2={191} y2={69} stroke="#64748B" strokeWidth={2} />
            <line x1={222} y1={160} x2={191} y2={69} stroke="#64748B" strokeWidth={2} />
            {/* Jalen at (0, 2) -> (35, 134); Ashanti at (15, 11) -> (230, 17) */}
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

  return null;
};
