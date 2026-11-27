import React, { useEffect, useState } from 'react';
import { Clock, Pause, Play, RotateCcw, Trophy } from 'lucide-react';

interface MockExamBannerProps {
  correctCount: number;
  totalCount: number;
}

const EXAM_DURATION_SEC = 50 * 60; // 50-minute AP Unit 4 class test simulation

export const MockExamBanner: React.FC<MockExamBannerProps> = ({
  correctCount,
  totalCount,
}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(EXAM_DURATION_SEC);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const pct = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  return (
    <div className="rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-900 text-white p-5 sm:p-6 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-300" />
            <span>50-Minute Simulated AP Unit 4 Exam</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold">
            Full Unit 4 Timed Mock Test
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100 mt-1 max-w-2xl">
            Work on paper without hints first! Respect the <strong>Non-Calculator</strong> vs.{' '}
            <strong>Calculator Allowed</strong> badges on each card to simulate real test conditions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Live Score Pill */}
          <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-center">
            <div className="text-[11px] uppercase tracking-wider text-indigo-200 font-semibold">
              Exam Score
            </div>
            <div className="text-lg font-extrabold">
              {pct}%{' '}
              <span className="text-xs font-normal text-indigo-200">
                ({correctCount}/{totalCount})
              </span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-slate-950/60 border border-white/20 rounded-xl px-4 py-2.5 flex items-center gap-3">
            <Clock className={`w-5 h-5 ${secondsLeft < 300 ? 'text-rose-400 animate-pulse' : 'text-amber-300'}`} />
            <span className="font-mono text-xl font-extrabold tracking-tight">
              {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => setRunning((r) => !r)}
              className="p-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white transition"
              title={running ? 'Pause Timer' : 'Start Timer'}
            >
              {running ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => {
                setRunning(false);
                setSecondsLeft(EXAM_DURATION_SEC);
              }}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
