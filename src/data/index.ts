import { Problem, ModuleId } from '../types';
import { LESSON_4_1_PROBLEMS } from './lesson4_1';
import { LESSON_4_2_PROBLEMS } from './lesson4_2';
import { LESSON_3_2_PROBLEMS } from './lesson3_2';
import { LESSON_4_4_PROBLEMS } from './lesson4_4';
import { WEBASSIGN_HW_PROBLEMS } from './webassignHw';
import { KNOWLEDGE_CHECKS_AND_PPTX_PROBLEMS } from './knowledgeChecksAndPptx';
import { MCQ_REVIEW_35_PROBLEMS } from './mcqReview35';
import { BULTMAN_REVIEW_PROBLEMS } from './bultmanReview';
import { BIG_10_PUZZLE_PROBLEMS } from './big10Puzzle';

export const ALL_PROBLEMS: Problem[] = [
  ...LESSON_4_1_PROBLEMS,
  ...LESSON_4_2_PROBLEMS,
  ...LESSON_3_2_PROBLEMS,
  ...LESSON_4_4_PROBLEMS,
  ...WEBASSIGN_HW_PROBLEMS,
  ...KNOWLEDGE_CHECKS_AND_PPTX_PROBLEMS,
  ...MCQ_REVIEW_35_PROBLEMS,
  ...BULTMAN_REVIEW_PROBLEMS,
  ...BIG_10_PUZZLE_PROBLEMS,
];

export interface ModuleMeta {
  id: ModuleId;
  group: 'core' | 'teacher-prep' | 'exam';
  shortTitle: string;
  fullTitle: string;
  subtitle: string;
  pages: string;
}

export const MODULES: ModuleMeta[] = [
  {
    id: 'lesson-4-1',
    group: 'core',
    shortTitle: '4.1 Derivatives in Context',
    fullTitle: 'Lesson 4.1 — Interpreting Derivatives in Context',
    subtitle: 'Master "The Big 4" framework, rate-of-a-rate compound units, and unit analysis.',
    pages: 'Packet Pages 1–2',
  },
  {
    id: 'lesson-4-2',
    group: 'core',
    shortTitle: '4.2 Straight-Line Motion',
    fullTitle: 'Lesson 4.2 — Straight-Line Motion (Position, Velocity, Acceleration)',
    subtitle: 'Graphical & analytical particle motion, direction changes, speeding up vs. slowing down, and AP FRQs.',
    pages: 'Packet Pages 3–8',
  },
  {
    id: 'lesson-3-2',
    group: 'core',
    shortTitle: '3.2 Implicit Differentiation',
    fullTitle: 'Lesson 3.2 — Implicit Differentiation (Days 1–3)',
    subtitle: 'Product & Chain Rules, tangent lines, d²y/dx², horizontal/vertical tangents, and 6 classic AP FRQs.',
    pages: 'Packet Pages 9–18',
  },
  {
    id: 'lesson-4-4',
    group: 'core',
    shortTitle: '4.4 & 4.5 Related Rates',
    fullTitle: 'Lessons 4.4 & 4.5 — Related Rates (Days 1–2)',
    subtitle: 'Geometric rate equations, similar-triangle substitutions, cones vs. cylinders, and 2023–2025 AP FRQs.',
    pages: 'Packet Pages 19–26',
  },
  {
    id: 'webassign-hw',
    group: 'core',
    shortTitle: 'HW: 4.4/4.5 WebAssign (9 Qs)',
    fullTitle: 'WebAssign Homework — Lesson 4.4/4.5 Related Rates',
    subtitle: 'All 9 Cengage WebAssign Related Rates homework problems (13 total points) with exact + rounded checking.',
    pages: 'Math HW.pdf • #1–#9 (13 Pts)',
  },
  {
    id: 'knowledge-checks',
    group: 'teacher-prep',
    shortTitle: 'KC 3.2/4.2 & PPTX Extras',
    fullTitle: 'Formative Knowledge Checks (3.2 & 4.2) + Teacher PowerPoint Extras',
    subtitle: 'Redo your exact Lesson 3.2 & 4.2 Knowledge Checks (fixing the Product Rule & cm/sec unit traps!) plus extra AP FRQs and examples from the 3.2, 4.1, 4.2, and 4.4/4.5 PowerPoint slides.',
    pages: 'Eastlake Formative Checks + Slides',
  },
  {
    id: 'mcq-review-35',
    group: 'teacher-prep',
    shortTitle: 'MCQ Packet: Ch. 4 & 3.2 (35 Qs)',
    fullTitle: 'Ch. 4 Review Packet — AP Multiple Choice & Implicit Differentiation (#1–#35)',
    subtitle: 'All 35 CollegeBoard AP MCQs covering Motion, Implicit Differentiation, and Related Rates — with targeted alerts on #8/#25 (position concavity) and #20 (farthest right).',
    pages: 'Review Unit 4 MCQ Packet • Pages 1–9',
  },
  {
    id: 'bultman-review',
    group: 'teacher-prep',
    shortTitle: "Ms. Bultman's Ch. 4 Review",
    fullTitle: "Ms. Bultman's Comprehensive Unit 4 Review (MCQs + Non-Calc & Calc FRQs)",
    subtitle: 'Complete Eastlake review packet: Leibniz Notation, Motion Justifications, 23 No-Calculator MCQs, 6 No-Calculator FRQs, and 5 Calculator FRQs (including Kite, Waffle Cone & Joseph the Spider).',
    pages: "Ms. Bultman's Packet • Pages 1–6",
  },
  {
    id: 'big-10-puzzle',
    group: 'teacher-prep',
    shortTitle: 'Ch. 4 Big 10 Review Puzzle',
    fullTitle: 'Ch. 4 Big 10 Review Puzzle — Cross Off Digits 0–9 Challenge',
    subtitle: 'All 10 Eastlake Big 10 Review Puzzle problems with a live 0–9 digit cross-off tracker!',
    pages: 'Big 10 Puzzle • #1–#10',
  },
  {
    id: 'mock-test',
    group: 'exam',
    shortTitle: 'Timed Unit 4 Mock Exam',
    fullTitle: 'Full Unit 4 Timed Mock Test (100% Mastery Readiness Check)',
    subtitle: 'Curated AP-style Unit 4 exam spanning Motion, Implicit Differentiation, and Related Rates (Non-Calculator + Calculator).',
    pages: 'Comprehensive Ch. 4 Assessment',
  },
];

export function getProblemsForModule(moduleId: ModuleId): Problem[] {
  if (moduleId === 'mock-test') {
    return ALL_PROBLEMS.filter((p) => p.inMockTest);
  }
  return ALL_PROBLEMS.filter((p) => p.module === moduleId);
}
