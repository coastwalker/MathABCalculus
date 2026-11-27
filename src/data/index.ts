import { Problem, ModuleId } from '../types';
import { LESSON_4_1_PROBLEMS } from './lesson4_1';
import { LESSON_4_2_PROBLEMS } from './lesson4_2';
import { LESSON_3_2_PROBLEMS } from './lesson3_2';
import { LESSON_4_4_PROBLEMS } from './lesson4_4';

export const ALL_PROBLEMS: Problem[] = [
  ...LESSON_4_1_PROBLEMS,
  ...LESSON_4_2_PROBLEMS,
  ...LESSON_3_2_PROBLEMS,
  ...LESSON_4_4_PROBLEMS,
];

export interface ModuleMeta {
  id: ModuleId;
  shortTitle: string;
  fullTitle: string;
  subtitle: string;
  pages: string;
}

export const MODULES: ModuleMeta[] = [
  {
    id: 'lesson-4-1',
    shortTitle: '4.1 Derivatives in Context',
    fullTitle: 'Lesson 4.1 — Interpreting Derivatives in Context',
    subtitle: 'Master "The Big 4" framework, rate-of-a-rate compound units, and unit analysis.',
    pages: 'Packet Pages 1–2',
  },
  {
    id: 'lesson-4-2',
    shortTitle: '4.2 Straight-Line Motion',
    fullTitle: 'Lesson 4.2 — Straight-Line Motion (Position, Velocity, Acceleration)',
    subtitle: 'Graphical & analytical particle motion, direction changes, speeding up vs. slowing down, and AP FRQs.',
    pages: 'Packet Pages 3–8',
  },
  {
    id: 'lesson-3-2',
    shortTitle: '3.2 Implicit Differentiation',
    fullTitle: 'Lesson 3.2 — Implicit Differentiation (Days 1–3)',
    subtitle: 'Product & Chain Rules, tangent lines, d²y/dx², horizontal/vertical tangents, and 6 classic AP FRQs.',
    pages: 'Packet Pages 9–18',
  },
  {
    id: 'lesson-4-4',
    shortTitle: '4.4 & 4.5 Related Rates',
    fullTitle: 'Lessons 4.4 & 4.5 — Related Rates (Days 1–2)',
    subtitle: 'Geometric rate equations, similar-triangle substitutions, cones vs. cylinders, and 2023–2025 AP FRQs.',
    pages: 'Packet Pages 19–26',
  },
  {
    id: 'mock-test',
    shortTitle: 'Timed Unit 4 Mock Exam',
    fullTitle: 'Full Unit 4 Timed Mock Test (100% Mastery Readiness Check)',
    subtitle: '50-minute curated AP-style Unit 4 exam spanning all 4 modules (Non-Calculator + Calculator sections).',
    pages: 'Comprehensive Unit 4 Assessment',
  },
];

export function getProblemsForModule(moduleId: ModuleId): Problem[] {
  if (moduleId === 'mock-test') {
    return ALL_PROBLEMS.filter((p) => p.inMockTest);
  }
  return ALL_PROBLEMS.filter((p) => p.module === moduleId);
}
