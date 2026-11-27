import React, { useState } from 'react';
import { Calculator, CheckSquare, ChevronDown, ChevronUp, ClipboardList } from 'lucide-react';
import { ModuleId } from '../types';

interface TeacherNotesBannerProps {
  onSelectModule: (mod: ModuleId) => void;
}

export const TeacherNotesBanner: React.FC<TeacherNotesBannerProps> = ({ onSelectModule }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl bg-slate-900 text-slate-100 border border-indigo-500/40 p-4 sm:p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 flex-shrink-0">
            <ClipboardList className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
              Eastlake High School • Ch. 4 Test Official Teacher Prep Guide
            </div>
            <div className="text-xs sm:text-sm font-bold text-white">
              Covers Lessons 3.2 (Implicit Diff), 4.2 (Straight-Line Motion), &amp; 4.4/4.5 (Related Rates) — Non-Calc + Calculator FRQs!
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-400/40 text-indigo-200 transition"
        >
          {expanded ? 'Hide Checklist' : 'View Teacher Study Checklist'}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
          <div className="space-y-2 rounded-xl bg-slate-800/60 p-3.5 border border-slate-700/70">
            <div className="font-bold text-indigo-300 flex items-center gap-1.5">
              <CheckSquare className="w-4 h-4" />
              Included Directly in This Portal (100% Interactive):
            </div>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>
                <button type="button" onClick={() => onSelectModule('knowledge-checks')} className="text-indigo-300 hover:underline font-semibold">
                  Formative Knowledge Checks (3.2 &amp; 4.2) + PPTX Extras
                </button>{' '}
                — fixes Runqi&rsquo;s product-rule &amp; unit traps + extra AP FRQs from all class PowerPoints!
              </li>
              <li>
                <button type="button" onClick={() => onSelectModule('mcq-review-35')} className="text-indigo-300 hover:underline font-semibold">
                  Review Unit 4 &amp; Implicit Diff MCQ Set (#1–#35)
                </button>{' '}
                — including #8/#25 concavity &amp; #20 farthest-right traps!
              </li>
              <li>
                <button type="button" onClick={() => onSelectModule('bultman-review')} className="text-indigo-300 hover:underline font-semibold">
                  Ms. Bultman&rsquo;s Comprehensive Unit 4 Review
                </button>{' '}
                — Notation, 23 No-Calc MCQs, 6 No-Calc FRQs &amp; 5 Calculator FRQs!
              </li>
              <li>
                <button type="button" onClick={() => onSelectModule('big-10-puzzle')} className="text-indigo-300 hover:underline font-semibold">
                  Ch. 4 Big 10 Review Puzzle (0–9 Challenge)
                </button>{' '}
                — all 10 problems with live digit tracker!
              </li>
            </ul>
          </div>

          <div className="space-y-2 rounded-xl bg-slate-800/60 p-3.5 border border-slate-700/70">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <Calculator className="w-4 h-4" />
              AP Classroom &amp; Exam-Day Reminders from Teacher:
            </div>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>
                <strong>AP Classroom Progress Check MCQ Ch. 3:</strong> do ONLY <strong>#4, #5, #12, #14, #18</strong>.
              </li>
              <li>
                <strong>AP Classroom Progress Check MCQ Ch. 4:</strong> do ONLY <strong>#5, #7, #9, #11, #12, #13</strong>.
              </li>
              <li>
                <strong>Calculator Portion Alert:</strong> You WILL have a calculator section that can include FRQs from <strong>Motion, Implicit Differentiation, AND Related Rates</strong> (keep TI-84 in RADIAN mode, 3 decimal places!).
              </li>
              <li>
                <em>Note:</em> AP Classroom &ldquo;Topic Questions&rdquo; (3.2, 4.2, 4.4, 4.5) are optional — teacher confirmed no &ldquo;weird&rdquo; MCQs on the test!
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
