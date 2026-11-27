import React from 'react';
import { Sparkles, CheckCircle2, Info } from 'lucide-react';
import { PartProgress, Problem } from '../types';

interface Big10BannerProps {
  problems: Problem[];
  getPartProgress: (problemId: string, partId: string) => PartProgress;
}

export const Big10Banner: React.FC<Big10BannerProps> = ({ problems, getPartProgress }) => {
  // Count how many times each digit 0..9 has been earned by solving problems in this module!
  const earnedDigits: { digit: number; badge: string }[] = [];
  for (const p of problems) {
    if (typeof p.puzzleDigit === 'number') {
      const allCorrect = p.parts.every(
        (pt) => getPartProgress(p.id, pt.partId).status === 'correct'
      );
      if (allCorrect) {
        earnedDigits.push({ digit: p.puzzleDigit, badge: p.badge });
      }
    }
  }

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="rounded-2xl bg-gradient-to-br from-indigo-950/90 via-slate-900 to-emerald-950/70 border border-indigo-500/40 p-5 sm:p-6 shadow-md text-white space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-300 mb-1">
            <Sparkles className="w-4 h-4" />
            Interactive 0–9 Digit Cross-Off Tracker
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-white">
            Big 10 Unit 4 Review Puzzle ({earnedDigits.length} / 10 Solved)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Complete #1–#10 below to cross off each puzzle answer in the 0–9 box automatically!
          </p>
        </div>
      </div>

      {/* 0–9 Digit Box */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2.5 pt-1">
        {digits.map((d) => {
          const matches = earnedDigits.filter((e) => e.digit === d);
          const count = matches.length;
          const isTeacherFour = d === 4;

          return (
            <div
              key={d}
              className={`relative rounded-xl border p-3 text-center transition-all ${
                count > 0
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-sm'
                  : isTeacherFour
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-200/80'
                  : 'bg-slate-900/80 border-slate-700 text-slate-200'
              }`}
            >
              <div className={`text-xl sm:text-2xl font-black font-mono ${count > 0 ? 'line-through decoration-emerald-400 decoration-2' : ''}`}>
                {d}
              </div>
              <div className="text-[10px] font-bold mt-1 truncate">
                {count >= 2 ? (
                  <span className="text-amber-300">×2 Crossed!</span>
                ) : count === 1 ? (
                  <span className="inline-flex items-center gap-0.5 text-emerald-300">
                    <CheckCircle2 className="w-3 h-3" /> Done
                  </span>
                ) : isTeacherFour ? (
                  <span className="text-amber-300/90">See note!</span>
                ) : (
                  <span className="text-slate-500">Open</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Teacher's Note from DOCX */}
      <div className="flex items-start gap-2.5 rounded-xl bg-amber-500/15 border border-amber-400/30 px-3.5 py-2.5 text-xs text-amber-100">
        <Info className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
        <div>
          <strong>Note from your Eastlake Math Teacher on the worksheet:</strong>{' '}
          <em>&ldquo;Sorry! I wanted an answer to be 4. You will end up with two 8&rsquo;s!&rdquo;</em>{' '}
          (So when all 10 problems are solved accurately, <strong>0, 1, 2, 3, 5, 6, 7, 9</strong> are crossed off once each, and <strong>8</strong> is crossed off <strong>twice</strong>!)
        </div>
      </div>
    </div>
  );
};
