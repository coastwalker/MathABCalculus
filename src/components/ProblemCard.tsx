import React, { useState } from 'react';
import {
  AlertTriangle,
  Bookmark,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Lightbulb,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { Problem, ProblemPart, PartProgress } from '../types';
import { MathText } from './MathText';
import { VisualDiagram } from './VisualDiagrams';
import {
  checkAlgebraicInput,
  checkLineEquation,
  checkNumericInput,
} from '../utils/mathEval';

interface ProblemCardProps {
  problem: Problem;
  getPartProgress: (problemId: string, partId: string) => PartProgress;
  onUpdatePart: (
    problemId: string,
    partId: string,
    updater: (prev: PartProgress) => PartProgress
  ) => void;
}

const PartRow: React.FC<{
  problemId: string;
  part: ProblemPart;
  progress: PartProgress;
  onUpdate: (updater: (prev: PartProgress) => PartProgress) => void;
}> = ({ part, progress, onUpdate }) => {
  const [hintTier, setHintTier] = useState<number>(0); // 0 = hidden, 1 = Hint 1, 2 = Hint 2, 3 = Full Solution
  const [rubricOpen, setRubricOpen] = useState<boolean>(progress.status !== 'unattempted' && part.inputType === 'frq-rubric');
  const [big4Checks, setBig4Checks] = useState<Record<string, boolean>>({});

  const revealTier = (nextTier: number) => {
    setHintTier(nextTier);
    onUpdate((prev) => ({
      ...prev,
      usedHints: Math.max(prev.usedHints, nextTier),
      // If student needed help before getting it right, mark for Drill Missed review
      needsDrill: prev.status !== 'correct' ? true : prev.needsDrill,
    }));
  };

  const handleCheckInput = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const raw = progress.userInput ?? '';
    if (!raw.trim()) return;

    let isCorrect = false;
    if (part.inputType === 'numeric' && part.numericAnswer !== undefined) {
      isCorrect = checkNumericInput(
        raw,
        part.numericAnswer,
        part.tolerance ?? 0.005,
        part.acceptedStrings ?? []
      );
    } else if (part.inputType === 'algebraic' && part.algebraicExpr) {
      isCorrect = checkAlgebraicInput(
        raw,
        part.algebraicExpr,
        part.variables ?? ['x', 'y', 't'],
        part.acceptedStrings ?? []
      );
    } else if (part.inputType === 'equation' && part.equationConfig) {
      isCorrect = checkLineEquation(
        raw,
        part.equationConfig,
        part.acceptedStrings ?? []
      );
    }

    onUpdate((prev) => ({
      ...prev,
      status: isCorrect ? 'correct' : 'incorrect',
      attempts: prev.attempts + 1,
      // Clear needsDrill if answered cleanly with 0 hints on a fresh retry!
      needsDrill: isCorrect && hintTier === 0 ? false : !isCorrect || prev.needsDrill,
    }));

    if (!isCorrect && hintTier === 0) {
      setHintTier(1);
    }
  };

  const handleSelectMcq = (idx: number) => {
    const isCorrect = idx === part.correctIndex;
    onUpdate((prev) => ({
      ...prev,
      selectedMcq: idx,
      status: isCorrect ? 'correct' : 'incorrect',
      attempts: prev.attempts + 1,
      needsDrill: isCorrect && hintTier === 0 ? false : !isCorrect || prev.needsDrill,
    }));
    if (!isCorrect && hintTier === 0) {
      setHintTier(1);
    }
  };

  const handleCheckMatching = () => {
    const items = part.matchingItems ?? [];
    const ans = progress.matchingAnswers ?? {};
    const allCorrect = items.every((item) => ans[item.id] === item.correctOptionId);
    onUpdate((prev) => ({
      ...prev,
      status: allCorrect ? 'correct' : 'incorrect',
      attempts: prev.attempts + 1,
      needsDrill: allCorrect && hintTier === 0 ? false : !allCorrect || prev.needsDrill,
    }));
  };

  const handleToggleRubricPoint = (itemId: string) => {
    const current = new Set(progress.checkedRubricIds ?? []);
    if (current.has(itemId)) current.delete(itemId);
    else current.add(itemId);
    const updatedArr = Array.from(current);
    const totalItems = part.rubricItems?.length ?? 0;
    const allEarned = totalItems > 0 && updatedArr.length === totalItems;

    onUpdate((prev) => ({
      ...prev,
      checkedRubricIds: updatedArr,
      status: allEarned ? 'correct' : 'incorrect',
      attempts: Math.max(1, prev.attempts),
      needsDrill: !allEarned,
    }));
  };

  const handleRetryPart = () => {
    setHintTier(0);
    setRubricOpen(false);
    onUpdate((prev) => ({
      ...prev,
      status: 'unattempted',
      userInput: '',
      selectedMcq: undefined,
      matchingAnswers: {},
      checkedRubricIds: [],
      usedHints: 0,
    }));
  };

  return (
    <div className="py-4 first:pt-0 last:pb-0 border-b last:border-b-0 border-slate-200/80 dark:border-slate-800">
      {/* Part Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          {part.label && (
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-500/30">
              {part.label}
            </span>
          )}
          {progress.status === 'correct' && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Correct
            </span>
          )}
          {progress.status === 'incorrect' && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400">
              <XCircle className="w-4 h-4" /> Needs Review
            </span>
          )}
        </div>

        {progress.status !== 'unattempted' && (
          <button
            type="button"
            onClick={handleRetryPart}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Retry Cleanly
          </button>
        )}
      </div>

      {/* Prompt */}
      <MathText
        block
        className="text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed mb-3.5"
        text={part.prompt}
      />

      {/* 1. Numeric / Algebraic / Equation Input */}
      {(part.inputType === 'numeric' ||
        part.inputType === 'algebraic' ||
        part.inputType === 'equation') && (
        <form onSubmit={handleCheckInput} className="flex flex-wrap items-center gap-2.5">
          <div className="relative flex-1 min-w-[220px] max-w-md">
            <input
              type="text"
              value={progress.userInput ?? ''}
              onChange={(e) =>
                onUpdate((prev) => ({ ...prev, userInput: e.target.value }))
              }
              placeholder={part.placeholder ?? 'Type your answer...'}
              className={`w-full px-3.5 py-2.5 rounded-xl font-mono text-sm border-2 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none transition ${
                progress.status === 'correct'
                  ? 'border-emerald-500 ring-2 ring-emerald-500/15'
                  : progress.status === 'incorrect'
                  ? 'border-rose-500 ring-2 ring-rose-500/15'
                  : 'border-slate-300 dark:border-slate-700 focus:border-indigo-500'
              }`}
            />
          </div>
          {part.unitLabel && (
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
              {part.unitLabel}
            </span>
          )}
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-sm transition"
          >
            Check Answer
          </button>
        </form>
      )}

      {/* 2. Multiple Choice Input */}
      {part.inputType === 'mcq' && part.options && (
        <div className="grid grid-cols-1 gap-2.5">
          {part.options.map((opt, idx) => {
            const isSelected = progress.selectedMcq === idx;
            const isRightOption = idx === part.correctIndex;
            const showFeedback = progress.selectedMcq !== undefined;

            let cardCls =
              'bg-slate-50/80 hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-100';
            if (showFeedback) {
              if (isRightOption) {
                cardCls =
                  'bg-emerald-50/90 dark:bg-emerald-950/50 border-emerald-500 text-emerald-950 dark:text-emerald-100';
              } else if (isSelected) {
                cardCls =
                  'bg-rose-50/90 dark:bg-rose-950/50 border-rose-500 text-rose-950 dark:text-rose-100';
              }
            }

            return (
              <div key={opt.label} className="space-y-1">
                <button
                  type="button"
                  onClick={() => handleSelectMcq(idx)}
                  className={`math-option w-full text-left px-3.5 py-3 rounded-xl border-2 transition flex items-center gap-3 ${cardCls}`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg text-xs font-extrabold flex items-center justify-center flex-shrink-0 border ${
                      showFeedback && isRightOption
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : showFeedback && isSelected
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600'
                    }`}
                  >
                    {opt.label}
                  </span>
                  <div className="flex-1 min-w-0 overflow-x-auto py-0.5 text-sm sm:text-base">
                    <MathText text={opt.text} />
                  </div>
                </button>

                {showFeedback && (isSelected || isRightOption) && (
                  <div
                    className={`ml-10 text-xs px-3 py-1.5 rounded-lg ${
                      isRightOption
                        ? 'bg-emerald-100/70 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200'
                        : 'bg-rose-100/70 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200'
                    }`}
                  >
                    <MathText text={opt.explanation} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 3. Matching Input */}
      {part.inputType === 'matching' && part.matchingItems && part.matchingChoices && (
        <div className="space-y-3">
          {part.matchingItems.map((item) => {
            const chosen = progress.matchingAnswers?.[item.id] ?? '';
            const graded = progress.status !== 'unattempted';
            const rowRight = chosen === item.correctOptionId;

            return (
              <div
                key={item.id}
                className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                  graded
                    ? rowRight
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-400/70'
                      : 'bg-rose-50/60 dark:bg-rose-950/30 border-rose-400/70'
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/80'
                }`}
              >
                <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                  {item.prompt}
                  {graded && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {item.explanation}
                    </div>
                  )}
                </div>
                <select
                  aria-label={item.prompt}
                  value={chosen}
                  onChange={(e) =>
                    onUpdate((prev) => ({
                      ...prev,
                      matchingAnswers: {
                        ...(prev.matchingAnswers ?? {}),
                        [item.id]: e.target.value,
                      },
                    }))
                  }
                  className="px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white sm:w-64 flex-shrink-0"
                >
                  <option value="">Select match (A–G)...</option>
                  {part.matchingChoices!.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
          <button
            type="button"
            onClick={handleCheckMatching}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-sm transition"
          >
            Check All 7 Matches
          </button>
        </div>
      )}

      {/* 4. FRQ Justification Scratchpad & Point-by-Point Rubric Self-Grader */}
      {part.inputType === 'frq-rubric' && (
        <div className="space-y-3">
          <textarea
            rows={3}
            value={progress.scratchpad ?? ''}
            onChange={(e) =>
              onUpdate((prev) => ({ ...prev, scratchpad: e.target.value }))
            }
            placeholder="Write your full AP-style sentence / justification here before revealing the scoring rubric..."
            className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
          />

          {part.includeBig4SelfCheck && (
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-slate-500 dark:text-slate-400">
                Big 4 Pre-Check:
              </span>
              {['1. Time', '2. Context', '3. Inc/Dec (no -)', '4. Rate + Units'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setBig4Checks((p) => ({ ...p, [tag]: !p[tag] }))}
                  className={`px-2.5 py-1 rounded-full border font-semibold transition ${
                    big4Checks[tag]
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                  }`}
                >
                  {big4Checks[tag] ? '✓ ' : ''}{tag}
                </button>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setRubricOpen((v) => !v)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-sm transition"
          >
            <span>{rubricOpen ? 'Hide AP Scoring Rubric' : 'Reveal AP Scoring Rubric & Self-Grade'}</span>
          </button>

          {rubricOpen && part.rubricItems && (
            <div className="rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-700/60 p-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                Official AP Scoring Rubric — Check Every Point Your Response Earned:
              </div>
              <div className="space-y-2">
                {part.rubricItems.map((ri) => {
                  const isChecked = (progress.checkedRubricIds ?? []).includes(ri.id);
                  return (
                    <label
                      key={ri.id}
                      className="flex items-start gap-3 p-2.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-emerald-200 dark:border-slate-800 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleToggleRubricPoint(ri.id)}
                        className="mt-0.5 accent-emerald-600 w-4 h-4 rounded"
                      />
                      <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        <strong className="text-emerald-700 dark:text-emerald-400">
                          +{ri.points} pt:{' '}
                        </strong>
                        {ri.criterion}
                      </span>
                    </label>
                  );
                })}
              </div>

              {part.modelResponse && (
                <div className="pt-2 border-t border-emerald-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <div className="font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                    Full-Credit Model Response:
                  </div>
                  <MathText block text={part.modelResponse} />
                </div>
              )}

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() =>
                    onUpdate((prev) => ({
                      ...prev,
                      checkedRubricIds: part.rubricItems!.map((r) => r.id),
                      status: 'correct',
                      attempts: Math.max(1, prev.attempts),
                      needsDrill: hintTier > 0 ? prev.needsDrill : false,
                    }))
                  }
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition"
                >
                  Earned All Points ✅
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onUpdate((prev) => ({
                      ...prev,
                      status: 'incorrect',
                      attempts: Math.max(1, prev.attempts),
                      needsDrill: true,
                    }))
                  }
                  className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-bold hover:bg-rose-500 transition"
                >
                  Missed a Rubric Point — Flag for Drill ❌
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Progressive 3-Tier Hint & Full Step-by-Step Solution Bar */}
      <div className="mt-3.5 flex flex-wrap items-center gap-2">
        {hintTier === 0 && (
          <button
            type="button"
            onClick={() => revealTier(1)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/50 dark:hover:bg-amber-950/80 border border-amber-200 dark:border-amber-700/60 px-3 py-1.5 rounded-lg transition"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Need Help? (Hint 1: Strategy)
          </button>
        )}
        {hintTier >= 1 && hintTier < 2 && (
          <button
            type="button"
            onClick={() => revealTier(2)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-700/60 px-3 py-1.5 rounded-lg transition"
          >
            <Lightbulb className="w-3.5 h-3.5" /> Show Hint 2 (Differentiated Setup)
          </button>
        )}
        {hintTier >= 2 && hintTier < 3 && (
          <button
            type="button"
            onClick={() => revealTier(3)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-700/60 px-3 py-1.5 rounded-lg transition"
          >
            <ChevronRight className="w-3.5 h-3.5" /> Show Full Step-by-Step Solution
          </button>
        )}
        {progress.status === 'correct' && hintTier < 3 && (
          <button
            type="button"
            onClick={() => setHintTier(3)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-2.5 py-1.5 rounded-lg transition"
          >
            <ChevronDown className="w-3.5 h-3.5" /> View Official Solution
          </button>
        )}
        {hintTier > 0 && (
          <button
            type="button"
            onClick={() => setHintTier(0)}
            className="text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white ml-auto"
          >
            Hide Help
          </button>
        )}
      </div>

      {/* Progressive Tier Panels */}
      {hintTier >= 1 && (
        <div className="mt-3 space-y-2.5">
          <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
            <div className="font-bold text-amber-800 dark:text-amber-300 text-xs uppercase tracking-wider mb-1">
              Hint 1 — Strategy &amp; Formula
            </div>
            <MathText block text={part.hint1} />
          </div>

          {hintTier >= 2 && (
            <div className="p-3.5 rounded-xl bg-sky-50/80 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              <div className="font-bold text-sky-800 dark:text-sky-300 text-xs uppercase tracking-wider mb-1">
                Hint 2 — Differentiated Equation / Setup
              </div>
              <MathText block text={part.hint2} />
            </div>
          )}

          {hintTier >= 3 && (
            <div className="p-4 rounded-xl bg-slate-100/90 dark:bg-slate-950/90 border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              <div className="font-bold text-indigo-700 dark:text-indigo-400 text-xs uppercase tracking-wider mb-2">
                Full Step-by-Step AP Solution
              </div>
              <MathText block text={part.solution} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const ProblemCard: React.FC<ProblemCardProps> = ({
  problem,
  getPartProgress,
  onUpdatePart,
}) => {
  const partProgresses = problem.parts.map((pt) => getPartProgress(problem.id, pt.partId));
  const completedCount = partProgresses.filter((p) => p.status === 'correct').length;
  const allComplete = completedCount === problem.parts.length;
  const anyFlagged = partProgresses.some((p) => p.flagged);

  const toggleFlagAll = () => {
    const nextFlag = !anyFlagged;
    problem.parts.forEach((pt) => {
      onUpdatePart(problem.id, pt.partId, (prev) => ({ ...prev, flagged: nextFlag }));
    });
  };

  return (
    <article
      className={`rounded-2xl bg-white dark:bg-slate-900 border shadow-sm overflow-hidden transition ${
        allComplete
          ? 'border-emerald-400/80 dark:border-emerald-500/50'
          : 'border-slate-200 dark:border-slate-800'
      }`}
    >
      {/* Card Header */}
      <div className="px-5 py-4 bg-slate-50/90 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold">
            {problem.badge}
          </span>

          {/* Calculator Policy Badge */}
          {problem.calculator === 'allowed' ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border border-sky-200 dark:border-sky-700/50 text-xs font-bold">
              <Calculator className="w-3.5 h-3.5" /> Calculator Allowed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800/90 dark:text-slate-300 border border-slate-300 dark:border-slate-700 text-xs font-semibold">
              Non-Calculator
            </span>
          )}

          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
            {problem.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              allComplete
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300'
                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {completedCount} / {problem.parts.length} Mastered
          </span>
          <button
            type="button"
            onClick={toggleFlagAll}
            title={anyFlagged ? 'Remove Flag' : 'Flag for Review'}
            className={`p-1.5 rounded-lg border transition ${
              anyFlagged
                ? 'bg-amber-100 border-amber-300 text-amber-700 dark:bg-amber-950/80 dark:border-amber-600 dark:text-amber-300'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-white'
            }`}
          >
            <Bookmark className="w-4 h-4" fill={anyFlagged ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6">
        {/* AP Exam Pitfall Callout */}
        {problem.watchOut && (
          <div className="mb-4 p-3.5 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 flex items-start gap-2.5 text-xs sm:text-sm text-rose-950 dark:text-rose-200">
            <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold uppercase tracking-wider text-xs text-rose-700 dark:text-rose-300 mr-1.5">
                Watch Out (AP Pitfall):
              </span>
              <MathText text={problem.watchOut} />
            </div>
          </div>
        )}

        {/* Shared Problem Stem */}
        <MathText
          block
          className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed mb-4"
          text={problem.stem}
        />

        {/* Interactive Diagram if present */}
        {problem.visual && <VisualDiagram id={problem.visual} />}

        {/* Sub-parts */}
        <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
          {problem.parts.map((pt) => (
            <PartRow
              key={pt.partId}
              problemId={problem.id}
              part={pt}
              progress={getPartProgress(problem.id, pt.partId)}
              onUpdate={(updater) => onUpdatePart(problem.id, pt.partId, updater)}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
