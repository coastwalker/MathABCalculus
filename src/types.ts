export type ModuleId =
  | 'lesson-4-1'
  | 'lesson-4-2'
  | 'lesson-3-2'
  | 'lesson-4-4'
  | 'mock-test';

export type CalculatorPolicy = 'allowed' | 'non-calculator';

export type PartInputType =
  | 'numeric'
  | 'algebraic'
  | 'equation'
  | 'mcq'
  | 'matching'
  | 'frq-rubric';

export interface McqOption {
  label: string;
  text: string;
  explanation: string;
}

export interface MatchingItem {
  id: string;
  prompt: string;
  correctOptionId: string;
  explanation: string;
}

export interface MatchingChoice {
  id: string;
  label: string;
}

export interface RubricItem {
  id: string;
  points: number;
  criterion: string;
}

export interface ProblemPart {
  partId: string;
  label?: string;
  prompt: string;
  inputType: PartInputType;
  placeholder?: string;
  unitLabel?: string;

  // Numeric checking
  numericAnswer?: number;
  tolerance?: number;

  // Algebraic expression checking (evaluated across sample variable assignments)
  algebraicExpr?: string;
  variables?: string[];
  acceptedStrings?: string[];

  // Line / curve equation checking (e.g., y - 6 = -7(x - 2) or x = 1 or y = 0)
  equationConfig?: {
    type: 'line' | 'vertical' | 'horizontal';
    slope?: number;
    point?: [number, number];
    constantValue?: number;
  };

  // Multiple choice
  options?: McqOption[];
  correctIndex?: number;

  // Matching (Lesson 4.1 #4)
  matchingChoices?: MatchingChoice[];
  matchingItems?: MatchingItem[];

  // FRQ Rubric Self-Grader
  rubricItems?: RubricItem[];
  modelResponse?: string;
  includeBig4SelfCheck?: boolean;

  // Progressive 3-Tier Help
  hint1: string;
  hint2: string;
  solution: string;
}

export type VisualDiagramId =
  | 'caren-velocity-graph'
  | 'ferris-wheel-diagram'
  | 'funnel-diagram'
  | 'conical-tank-diagram'
  | 'cylinder-barrel-diagram'
  | 'unit-circle-diagram';

export interface Problem {
  id: string;
  module: Exclude<ModuleId, 'mock-test'>;
  section: string;
  badge: string;
  title: string;
  calculator: CalculatorPolicy;
  stem: string;
  visual?: VisualDiagramId;
  watchOut?: string;
  inMockTest?: boolean;
  parts: ProblemPart[];
}

export interface PartProgress {
  status: 'unattempted' | 'correct' | 'incorrect';
  attempts: number;
  usedHints: number; // 0, 1, 2, or 3 (full solution viewed before getting correct)
  needsDrill: boolean; // true if ever answered wrong or used hint/solution before first clean pass, cleared when re-solved cleanly
  flagged: boolean;
  userInput?: string;
  selectedMcq?: number;
  matchingAnswers?: Record<string, string>;
  scratchpad?: string;
  checkedRubricIds?: string[];
}

export interface PortalState {
  darkMode: boolean;
  activeModule: ModuleId;
  drillMissedOnly: boolean;
  cheatSheetOpen: boolean;
  partProgress: Record<string, PartProgress>; // key = `${problemId}::${partId}`
}
