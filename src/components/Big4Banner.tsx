import React, { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const Big4Banner: React.FC = () => {
  const [checked, setChecked] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const items = [
    {
      num: 1,
      title: '1. Exact Instant in Time',
      desc: 'State "At t = a [time units]..." (never confuse the input a with the output f′(a)!)',
    },
    {
      num: 2,
      title: '2. Specific Object / Context of f',
      desc: 'Name what f(t) measures (if f is already a rate, say "the rate of..."!)',
    },
    {
      num: 3,
      title: '3. Increasing or Decreasing',
      desc: 'Use "increasing" if f′(a) > 0, "decreasing" if f′(a) < 0 — NEVER write "decreasing by -13"!',
    },
    {
      num: 4,
      title: '4. Rate Magnitude + Derivative Units',
      desc: 'Write |f′(a)| followed by (units of f) per (unit of t).',
    },
  ];

  return (
    <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/40 border border-indigo-200/80 dark:border-indigo-500/30 p-5 shadow-sm">
      <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-sm uppercase tracking-wider mb-2">
        <Sparkles className="w-4 h-4" />
        <span>Lesson 4.1 Core Framework: "THE BIG 4" Interactive Checklist</span>
      </div>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4">
        Every AP Calculus derivative interpretation requires all 4 elements below. Click each card as you verify your written sentences:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {items.map((item) => {
          const isOn = !!checked[item.num];
          return (
            <button
              key={item.num}
              type="button"
              onClick={() => setChecked((prev) => ({ ...prev, [item.num]: !prev[item.num] }))}
              className={`text-left p-3.5 rounded-xl border transition flex items-start gap-3 ${
                isOn
                  ? 'bg-white dark:bg-slate-800/90 border-indigo-300 dark:border-indigo-500/50 shadow-sm'
                  : 'bg-slate-100/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-70'
              }`}
            >
              <CheckCircle2
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  isOn ? 'text-emerald-500' : 'text-slate-400'
                }`}
              />
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-xl bg-white/90 dark:bg-slate-950/80 border border-indigo-200 dark:border-slate-800 px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
        <span className="font-bold text-indigo-600 dark:text-indigo-400">AP Sentence Template: </span>
        “At <span className="underline decoration-indigo-400 underline-offset-4">t = [time + units]</span>, the{' '}
        <span className="underline decoration-sky-400 underline-offset-4">[context of f(t)]</span> is{' '}
        <span className="underline decoration-emerald-400 underline-offset-4">[increasing / decreasing]</span> at a rate of{' '}
        <span className="underline decoration-amber-400 underline-offset-4">[|f′(t)| + units of f per unit of t]</span>.”
      </div>
    </div>
  );
};
