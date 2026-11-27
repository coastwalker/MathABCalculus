import React, { useEffect, useMemo, useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Filter,
  GraduationCap,
  Menu,
  Moon,
  RotateCcw,
  Sun,
  Target,
  X,
} from 'lucide-react';
import { ALL_PROBLEMS, getProblemsForModule, MODULES } from './data';
import { ModuleId, PartProgress, PortalState, Problem } from './types';
import { ProblemCard } from './components/ProblemCard';
import { Big4Banner } from './components/Big4Banner';
import { CheatSheetDrawer } from './components/CheatSheetDrawer';
import { MockExamBanner } from './components/MockExamBanner';

const STORAGE_KEY = 'ap_calc_ab_unit4_portal_v2';
const LEGACY_STORAGE_KEY = 'ap_calc_ab_unit4_portal_v1';

const DEFAULT_PART_PROGRESS: PartProgress = {
  status: 'unattempted',
  attempts: 0,
  usedHints: 0,
  needsDrill: false,
  flagged: false,
};

function loadInitialState(): PortalState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        darkMode: typeof parsed.darkMode === 'boolean' ? parsed.darkMode : true,
        activeModule: parsed.activeModule ?? 'lesson-4-1',
        drillMissedOnly: !!parsed.drillMissedOnly,
        cheatSheetOpen: false,
        partProgress: parsed.partProgress ?? {},
      };
    }
    // Migrate progress from v1 while switching default theme to dark mode!
    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyRaw) {
      const legacy = JSON.parse(legacyRaw);
      return {
        darkMode: true,
        activeModule: legacy.activeModule ?? 'lesson-4-1',
        drillMissedOnly: !!legacy.drillMissedOnly,
        cheatSheetOpen: false,
        partProgress: legacy.partProgress ?? {},
      };
    }
  } catch {
    // fallback to default
  }
  return {
    darkMode: true,
    activeModule: 'lesson-4-1',
    drillMissedOnly: false,
    cheatSheetOpen: false,
    partProgress: {},
  };
}

export const App: React.FC = () => {
  const [state, setState] = useState<PortalState>(loadInitialState);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);

  // Sync dark mode class on <html> & persist state
  useEffect(() => {
    const root = document.documentElement;
    if (state.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          darkMode: state.darkMode,
          activeModule: state.activeModule,
          drillMissedOnly: state.drillMissedOnly,
          partProgress: state.partProgress,
        })
      );
    } catch {
      // ignore storage quota errors
    }
  }, [state]);

  const getPartProgress = (problemId: string, partId: string): PartProgress => {
    return state.partProgress[`${problemId}::${partId}`] ?? DEFAULT_PART_PROGRESS;
  };

  const updatePartProgress = (
    problemId: string,
    partId: string,
    updater: (prev: PartProgress) => PartProgress
  ) => {
    const key = `${problemId}::${partId}`;
    setState((prev) => {
      const current = prev.partProgress[key] ?? DEFAULT_PART_PROGRESS;
      return {
        ...prev,
        partProgress: {
          ...prev.partProgress,
          [key]: updater(current),
        },
      };
    });
  };

  // Compute readiness & module completion stats
  const stats = useMemo(() => {
    const calcForList = (problems: Problem[]) => {
      let total = 0;
      let correct = 0;
      let drillCount = 0;
      for (const p of problems) {
        let problemNeedsDrill = false;
        for (const pt of p.parts) {
          total++;
          const prog = state.partProgress[`${p.id}::${pt.partId}`] ?? DEFAULT_PART_PROGRESS;
          if (prog.status === 'correct') correct++;
          if (prog.needsDrill || prog.flagged || prog.status === 'incorrect') {
            problemNeedsDrill = true;
          }
        }
        if (problemNeedsDrill) drillCount++;
      }
      return {
        total,
        correct,
        pct: total > 0 ? Math.round((correct / total) * 100) : 0,
        drillCount,
      };
    };

    const overall = calcForList(ALL_PROBLEMS);
    const byModule: Record<ModuleId, ReturnType<typeof calcForList>> = {
      'lesson-4-1': calcForList(getProblemsForModule('lesson-4-1')),
      'lesson-4-2': calcForList(getProblemsForModule('lesson-4-2')),
      'lesson-3-2': calcForList(getProblemsForModule('lesson-3-2')),
      'lesson-4-4': calcForList(getProblemsForModule('lesson-4-4')),
      'mock-test': calcForList(getProblemsForModule('mock-test')),
    };

    return { overall, byModule };
  }, [state.partProgress]);

  const activeMeta = MODULES.find((m) => m.id === state.activeModule) ?? MODULES[0];
  const moduleProblems = useMemo(
    () => getProblemsForModule(state.activeModule),
    [state.activeModule]
  );

  const visibleProblems = useMemo(() => {
    if (!state.drillMissedOnly) return moduleProblems;
    return moduleProblems.filter((p) =>
      p.parts.some((pt) => {
        const prog = state.partProgress[`${p.id}::${pt.partId}`] ?? DEFAULT_PART_PROGRESS;
        return prog.needsDrill || prog.flagged || prog.status === 'incorrect';
      })
    );
  }, [moduleProblems, state.drillMissedOnly, state.partProgress]);

  // Group visible problems by section while preserving packet order
  const groupedSections = useMemo(() => {
    const groups: { section: string; problems: Problem[] }[] = [];
    for (const p of visibleProblems) {
      const last = groups[groups.length - 1];
      if (last && last.section === p.section) {
        last.problems.push(p);
      } else {
        groups.push({ section: p.section, problems: [p] });
      }
    }
    return groups;
  }, [visibleProblems]);

  const handleResetActiveModule = () => {
    setState((prev) => {
      const nextProgress = { ...prev.partProgress };
      for (const p of moduleProblems) {
        for (const pt of p.parts) {
          delete nextProgress[`${p.id}::${pt.partId}`];
        }
      }
      return { ...prev, partProgress: nextProgress };
    });
    setConfirmResetOpen(false);
  };

  const renderSidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm flex-shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
              AP Calculus AB
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Unit 4 Mastery &amp; Test Prep
            </p>
          </div>
        </div>

        {/* Overall Readiness Score Card */}
        <div className="mt-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/90 dark:border-slate-700/70">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Overall Readiness
            </span>
            <span className="text-indigo-600 dark:text-indigo-400 text-sm">
              {stats.overall.pct}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 to-emerald-500 transition-all duration-300"
              style={{ width: `${stats.overall.pct}%` }}
            />
          </div>
          <div className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 flex justify-between">
            <span>
              {stats.overall.correct} / {stats.overall.total} parts mastered
            </span>
            {stats.overall.drillCount > 0 && (
              <span className="text-rose-600 dark:text-rose-400 font-semibold">
                {stats.overall.drillCount} to drill
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Module Navigation */}
      <nav className="flex-1 overflow-y-auto p-3.5 space-y-1.5">
        <div className="px-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Curriculum Modules
        </div>
        {MODULES.map((mod) => {
          const mStat = stats.byModule[mod.id];
          const isActive = state.activeModule === mod.id;
          const isMock = mod.id === 'mock-test';

          return (
            <button
              key={mod.id}
              type="button"
              onClick={() => {
                setState((prev) => ({ ...prev, activeModule: mod.id }));
                setMobileNavOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left p-3 rounded-xl border transition ${
                isActive
                  ? isMock
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-500/50 text-indigo-950 dark:text-white'
                  : 'bg-transparent border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-bold truncate">
                  {isMock ? '⏱️ ' : ''}
                  {mod.shortTitle}
                </span>
                <span
                  className={`text-xs font-extrabold ${
                    isActive && isMock
                      ? 'text-indigo-100'
                      : mStat.pct === 100
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {mStat.pct}%
                </span>
              </div>
              <div
                className={`w-full h-1.5 rounded-full mt-2 overflow-hidden ${
                  isActive && isMock ? 'bg-indigo-800' : 'bg-slate-200 dark:bg-slate-800'
                }`}
              >
                <div
                  className={`h-full transition-all duration-300 ${
                    isActive && isMock
                      ? 'bg-amber-300'
                      : mStat.pct === 100
                      ? 'bg-emerald-500'
                      : 'bg-indigo-600 dark:bg-indigo-400'
                  }`}
                  style={{ width: `${mStat.pct}%` }}
                />
              </div>
              <div
                className={`text-[11px] mt-1 ${
                  isActive && isMock ? 'text-indigo-100' : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {mod.pages} • {mStat.correct}/{mStat.total} parts
              </div>
            </button>
          );
        })}
      </nav>

      {/* Bottom Quick Tools */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
        <button
          type="button"
          onClick={() => {
            setState((prev) => ({ ...prev, cheatSheetOpen: true }));
            setMobileNavOpen(false);
          }}
          className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-sm transition"
        >
          <BookOpen className="w-4 h-4" />
          Open Quick Reference Cheat Sheet
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setState((prev) => ({ ...prev, darkMode: !prev.darkMode }))}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition"
          >
            {state.darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            {state.darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          <button
            type="button"
            onClick={() => setConfirmResetOpen(true)}
            className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 dark:bg-slate-800 dark:hover:bg-rose-950/50 dark:hover:text-rose-300 text-slate-600 dark:text-slate-300 text-xs font-semibold transition"
            title="Reset current module progress"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );

  const activeStats = stats.byModule[state.activeModule];

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950">
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:block w-80 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 sticky top-0 h-screen">
        {renderSidebarContent()}
      </aside>

      {/* Mobile / iPad Slide-Over Sidebar */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
            onClick={() => setMobileNavOpen(false)}
          />
          <div className="relative w-80 max-w-[85vw] bg-white dark:bg-slate-900 h-full shadow-2xl z-10">
            <button
              type="button"
              onClick={() => setMobileNavOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close Navigation"
            >
              <X className="w-5 h-5" />
            </button>
            {renderSidebarContent()}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Sticky Top Header Bar */}
        <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                aria-label="Open Modules Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {activeMeta.pages}
                </div>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                  {activeMeta.fullTitle}
                </h2>
              </div>
            </div>

            {/* Action Pills: Drill Missed Filter & Cheat Sheet */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    drillMissedOnly: !prev.drillMissedOnly,
                  }))
                }
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition ${
                  state.drillMissedOnly
                    ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                <span>
                  Drill Missed / Flagged ({activeStats.drillCount})
                </span>
              </button>

              <button
                type="button"
                onClick={() => setState((prev) => ({ ...prev, cheatSheetOpen: true }))}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/70 dark:hover:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700/60 transition"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Cheat Sheet
              </button>
            </div>
          </div>
        </header>

        {/* Module Body */}
        <main className="flex-1 px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Module Intro / Mock Test Banner / Big 4 Banner */}
            {state.activeModule === 'mock-test' ? (
              <MockExamBanner
                correctCount={activeStats.correct}
                totalCount={activeStats.total}
              />
            ) : (
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {activeMeta.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2.5 flex-shrink-0 bg-slate-50 dark:bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                  <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                      Module Mastery
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {activeStats.correct} / {activeStats.total} ({activeStats.pct}%)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {state.activeModule === 'lesson-4-1' && !state.drillMissedOnly && (
              <Big4Banner />
            )}

            {/* Empty State when Drill Missed Filter is active and 0 missed! */}
            {visibleProblems.length === 0 ? (
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 text-center space-y-3 shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  Zero Missed or Flagged Problems in This Module!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Every attempted question here was solved cleanly without needing retries or flags. Turn off the filter to view all problems.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setState((prev) => ({ ...prev, drillMissedOnly: false }))
                  }
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm font-bold hover:bg-indigo-500 transition"
                >
                  Show All Problems in Module
                </button>
              </div>
            ) : (
              groupedSections.map((group) => (
                <section key={group.section} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {group.section}
                    </h3>
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                  </div>
                  <div className="space-y-6">
                    {group.problems.map((prob) => (
                      <ProblemCard
                        key={prob.id}
                        problem={prob}
                        getPartProgress={getPartProgress}
                        onUpdatePart={updatePartProgress}
                      />
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </main>
      </div>

      {/* Quick Reference Cheat Sheet Drawer */}
      <CheatSheetDrawer
        open={state.cheatSheetOpen}
        onClose={() => setState((prev) => ({ ...prev, cheatSheetOpen: false }))}
      />

      {/* Reset Module Confirmation Modal */}
      {confirmResetOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Reset Progress for {activeMeta.shortTitle}?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              This will clear your answers, rubric checks, and flags for all problems in{' '}
              <strong>{activeMeta.shortTitle}</strong> so you can practice them fresh. Other modules will not be affected.
            </p>
            <div className="flex justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setConfirmResetOpen(false)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleResetActiveModule}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-rose-600 hover:bg-rose-500 text-white transition"
              >
                Yes, Reset Module
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
