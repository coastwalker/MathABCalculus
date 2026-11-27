import React, { useState } from 'react';
import { ClipboardList, ChevronDown, ChevronUp, Calculator, AlertCircle } from 'lucide-react';
import { ModuleId } from '../types';

interface TeacherStudyBannerProps {
  onSelectModule: (mod: ModuleId) => void;
}

export const TeacherStudyBanner: React.FC<TeacherStudyBannerProps> = ({ onSelectModule }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl bg-slate-900/90 border border-indigo-500/30 p-4 sm:p-5 text-slate-200 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 flex-shrink-0">
            <ClipboardList className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-400">
              Eastlake High School • Ch. 4 Test Study Plan
            </div>
            <div className="text-xs sm:text-sm font-bold text-white">
              Covers 3.2 (Implicit Diff), 4.2 (Straight-Line Motion), &amp; 4.4/4.5 (Related Rates) — Non-Calc + Calculator FRQs!
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-indigo-300 border border-slate-700 transition"
        >
          {expanded ? 'Hide Teacher Checklist' : 'View Full Teacher Checklist'}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
          <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-3.5 space-y-2">
            <div className="font-extrabold text-emerald-400 uppercase tracking-wider text-[11px]">
              Included Right Here in Your Portal
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                •{' '}
                <button
                  type="button"
                  onClick={() => onSelectModule('knowledge-checks')}
                  className="text-indigo-400 hover:underline font-semibold"
                >
                  Formative Knowledge Checks (3.2 &amp; 4.2) + PPTX Extras
                </button>{' '}
                — redo the exact motion product-rule &amp; unit traps + extra AP FRQs from slides!
              </li>
              <li>
                •{' '}
                <button
                  type="button"
                  onClick={() => onSelectModule('mcq-review-35')}
                  className="text-indigo-400 hover:underline font-semibold"
                >
                  MCQ Ch. 4 &amp; Implicit Diff Packet (#1–#35)
                </button>{' '}
                — all 35 CollegeBoard MCQs (especially #8/#25 concavity &amp; #20 farthest right!).
              </li>
              <li>
                •{' '}
                <button
                  type="button"
                  onClick={() => onSelectModule('bultman-review')}
                  className="text-indigo-400 hover:underline font-semibold"
                >
                  Ms. Bultman&rsquo;s Comprehensive Unit 4 Review
                </button>{' '}
                — Notation, 23 No-Calc MCQs, 6 No-Calc FRQs, &amp; 5 Calculator FRQs.
              </li>
              <li>
                •{' '}
                <button
                  type="button"
                  onClick={() => onSelectModule('big-10-puzzle')}
                  className="text-indigo-400 hover:underline font-semibold"
                >
                  Ch. 4 Big 10 Review Puzzle
                </button>{' '}
                — all 10 problems with live 0–9 digit tracker.
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-3.5 space-y-2">
            <div className="font-extrabold text-amber-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              AP Classroom &amp; Exam-Day Reminders
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                • <strong>AP Classroom Progress Check MCQ Ch. 3:</strong> do ONLY <code>#4, 5, 12, 14, 18</code>
              </li>
              <li>
                • <strong>AP Classroom Progress Check MCQ Ch. 4:</strong> do ONLY <code>#5, 7, 9, 11, 12, 13</code>
              </li>
              <li>
                • <strong>Topic Questions (3.2, 4.2, 4.4, 4.5):</strong> Optional — teacher noted <em>&ldquo;We are NOT going to put weird MCQs on the test!&rdquo;</em>
              </li>
              <li className="text-amber-200 flex items-start gap-1.5 pt-0.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Calculator Portion Alert:</strong> Expect Calculator FRQs from Motion, Implicit Diff, and Related Rates (RADIAN mode, 3 decimal places, include units &amp; write <code>a(t) = v&prime;(t)</code>!).
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
