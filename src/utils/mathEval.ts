// Deterministic lexical tokenizer & evaluator for AP Calculus AB numeric, algebraic, and equation inputs.
// Supports fractions (-4/5), constants (pi, e), functions (sin, cos, tan, sec, csc, cot, ln, sqrt, abs, exp),
// trig powers (sec^2(y)), rate tokens (dy/dx, dr/dt, dh/dt, db/dt), implicit multiplication (2xy, 3x^2(x+1)),
// and line equations (point-slope, slope-intercept, vertical x=c, horizontal y=c).

export type VarMap = Record<string, number>;

const FUNCTIONS = new Set(['sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'ln', 'log', 'sqrt', 'abs', 'exp']);
const RATE_TOKENS = new Set(['dydx', 'drdt', 'dhdt', 'dbdt', 'dldt', 'dwdt', 'dxdt', 'dydt']);

type Token =
  | { type: 'num'; val: string }
  | { type: 'const'; name: 'pi' | 'e' }
  | { type: 'var'; name: string }
  | { type: 'fn'; name: string }
  | { type: 'op'; val: '+' | '-' | '*' | '/' | '^' }
  | { type: 'lparen' }
  | { type: 'rparen' };

function normalizeRaw(raw: string, vars: string[]): string {
  let s = raw.trim();
  if (s.includes('=')) {
    const parts = s.split('=');
    const lhs = parts[0].trim().toLowerCase().replace(/\s+/g, '');
    if (
      parts.length === 2 &&
      /^(y'|f'\([a-z]\)|h'\([a-z]\)|p'\([a-z]\)|v\([a-z]\)|a\([a-z]\)|dy\/dx|d2y\/dx2|d[a-z]\/dt|[a-z])$/.test(lhs)
    ) {
      s = parts[1].trim();
    }
  }

  s = s
    .replace(/−/g, '-')
    .replace(/×|·/g, '*')
    .replace(/÷/g, '/')
    .replace(/π/g, 'pi')
    .replace(/\\dfrac\{([^{}]+)\}\{([^{}]+)\}/g, '(($1)/($2))')
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '(($1)/($2))')
    .replace(/\\sqrt\{([^{}]+)\}/g, 'sqrt($1)')
    .replace(/\\(pi|ln|sin|cos|tan|sec|csc|cot)\b/g, '$1')
    .replace(/\\left/g, '')
    .replace(/\\right/g, '')
    .replace(/[\[\{]/g, '(')
    .replace(/[\]\}]/g, ')');

  // Normalize rate derivatives like dy/dx -> dydx when expected
  const lowerVars = vars.map((v) => v.toLowerCase());
  const rateMap: [RegExp, string][] = [
    [/d\s*y\s*\/\s*d\s*x/gi, 'dydx'],
    [/d\s*r\s*\/\s*d\s*t/gi, 'drdt'],
    [/d\s*h\s*\/\s*d\s*t/gi, 'dhdt'],
    [/d\s*b\s*\/\s*d\s*t/gi, 'dbdt'],
    [/d\s*l\s*\/\s*d\s*t/gi, 'dldt'],
    [/d\s*w\s*\/\s*d\s*t/gi, 'dwdt'],
    [/d\s*x\s*\/\s*d\s*t/gi, 'dxdt'],
    [/d\s*y\s*\/\s*d\s*t/gi, 'dydt'],
  ];
  for (const [rx, tok] of rateMap) {
    if (lowerVars.includes(tok)) {
      s = s.replace(rx, ` ${tok} `);
    }
  }

  // Convert trig powers like sec^2(y) or sin^2 x -> (sec(y))^2
  s = s.replace(/(sin|cos|tan|sec|csc|cot)\s*\^\s*(\d+)\s*\(([^()]+)\)/gi, '(($1($3))^$2)');
  s = s.replace(/(sin|cos|tan|sec|csc|cot)\s*\^\s*(\d+)\s*([a-zA-Z])/gi, '(($1($3))^$2)');

  return s;
}

function tokenize(raw: string, vars: string[]): Token[] | null {
  const s = normalizeRaw(raw, vars);
  const lowerVars = new Set(vars.map((v) => v.toLowerCase()));
  const tokens: Token[] = [];

  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (/\s/.test(ch)) {
      i++;
      continue;
    }
    if (/[0-9.]/.test(ch)) {
      let num = '';
      while (i < s.length && /[0-9.]/.test(s[i])) {
        num += s[i++];
      }
      if ((num.match(/\./g) ?? []).length > 1 || num === '.') return null;
      tokens.push({ type: 'num', val: num });
      continue;
    }
    if (ch === '(') {
      tokens.push({ type: 'lparen' });
      i++;
      continue;
    }
    if (ch === ')') {
      tokens.push({ type: 'rparen' });
      i++;
      continue;
    }
    if (ch === '+' || ch === '-' || ch === '*' || ch === '/' || ch === '^') {
      tokens.push({ type: 'op', val: ch });
      i++;
      continue;
    }
    if (/[a-zA-Z]/.test(ch)) {
      let word = '';
      while (i < s.length && /[a-zA-Z]/.test(s[i])) {
        word += s[i++];
      }
      const lw = word.toLowerCase();

      // Greedily peel known multi-char words (functions, pi, rate tokens) or single-char variables/constants
      let pos = 0;
      while (pos < lw.length) {
        const rem = lw.slice(pos);
        let matched = false;

        // 1. Rate tokens (dydx, drdt, etc.) if active
        for (const rt of RATE_TOKENS) {
          if (rem.startsWith(rt) && lowerVars.has(rt)) {
            tokens.push({ type: 'var', name: rt });
            pos += rt.length;
            matched = true;
            break;
          }
        }
        if (matched) continue;

        // 2. Known math functions (longest first: sqrt, sin, cos, tan, sec, csc, cot, exp, abs, log, ln)
        const fnList = ['sqrt', 'sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'exp', 'abs', 'log', 'ln'];
        for (const fn of fnList) {
          if (rem.startsWith(fn) && FUNCTIONS.has(fn)) {
            tokens.push({ type: 'fn', name: fn });
            pos += fn.length;
            matched = true;
            break;
          }
        }
        if (matched) continue;

        // 3. Constant 'pi'
        if (rem.startsWith('pi')) {
          tokens.push({ type: 'const', name: 'pi' });
          pos += 2;
          continue;
        }

        // 4. Single-letter variable or constant 'e'
        const ch1 = rem[0];
        if (lowerVars.has(ch1)) {
          tokens.push({ type: 'var', name: ch1 });
          pos += 1;
          continue;
        }
        if (ch1 === 'e') {
          tokens.push({ type: 'const', name: 'e' });
          pos += 1;
          continue;
        }

        // Unknown symbol
        return null;
      }
      continue;
    }
    return null;
  }

  return tokens;
}

function isValueEnd(t: Token): boolean {
  return t.type === 'num' || t.type === 'const' || t.type === 'var' || t.type === 'rparen';
}

function isValueStart(t: Token): boolean {
  return (
    t.type === 'num' ||
    t.type === 'const' ||
    t.type === 'var' ||
    t.type === 'fn' ||
    t.type === 'lparen'
  );
}

function compileTokensToJs(tokens: Token[]): string | null {
  if (tokens.length === 0) return null;

  // Wrap unparenthesized single-argument functions like `sin x` or `cos y` -> `sin(x)`
  const normalized: Token[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const cur = tokens[i];
    normalized.push(cur);
    if (cur.type === 'fn') {
      const next = tokens[i + 1];
      if (!next) return null;
      if (next.type !== 'lparen') {
        if (next.type === 'var' || next.type === 'const' || next.type === 'num') {
          normalized.push({ type: 'lparen' }, next, { type: 'rparen' });
          i++;
        } else {
          return null;
        }
      }
    }
  }

  // Insert explicit '*' where implicit multiplication occurs
  const withMult: Token[] = [];
  for (let i = 0; i < normalized.length; i++) {
    const cur = normalized[i];
    withMult.push(cur);
    const next = normalized[i + 1];
    if (next && isValueEnd(cur) && isValueStart(next)) {
      withMult.push({ type: 'op', val: '*' });
    }
  }

  // Render to valid JS expression (handling unary minus before exponentiation safely in JS: `-x^2` -> `-(x**2)`)
  // In JS, `-2**2` is a SyntaxError unless parenthesized! Using `Math.pow` or careful emission avoids it.
  const parts: string[] = [];
  for (let i = 0; i < withMult.length; i++) {
    const t = withMult[i];
    if (t.type === 'num') parts.push(t.val);
    else if (t.type === 'const') parts.push(t.name === 'pi' ? 'Math.PI' : 'Math.E');
    else if (t.type === 'var') parts.push(`__v.${t.name}`);
    else if (t.type === 'fn') parts.push(`__fn.${t.name}`);
    else if (t.type === 'lparen') parts.push('(');
    else if (t.type === 'rparen') parts.push(')');
    else if (t.type === 'op') parts.push(t.val === '^' ? '**' : t.val);
  }

  let js = parts.join(' ');
  // Fix JS unary minus + exponentiation syntax error: e.g. `- __v.x ** 2` -> `- (__v.x ** 2)`
  js = js.replace(
    /(^|[\(\+\-\*\/])\s*-\s*((?:__v\.[a-z]+|Math\.(?:PI|E)|[0-9.]+|\([^()]+\))\s*\*\*\s*(?:__v\.[a-z]+|[0-9.]+|\([^()]+\)))/g,
    '$1 -($2)'
  );
  return js;
}

const MATH_FNS = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  sec: (x: number) => 1 / Math.cos(x),
  csc: (x: number) => 1 / Math.sin(x),
  cot: (x: number) => Math.cos(x) / Math.sin(x),
  ln: Math.log,
  log: Math.log,
  sqrt: Math.sqrt,
  abs: Math.abs,
  exp: Math.exp,
};

export function evalMathExpression(expr: string, env: VarMap = {}): number | null {
  if (!expr || !expr.trim()) return null;
  const vars = Object.keys(env);
  const tokens = tokenize(expr, vars);
  if (!tokens) return null;
  const js = compileTokensToJs(tokens);
  if (!js) return null;

  const lowerEnv: VarMap = {};
  for (const [k, v] of Object.entries(env)) {
    lowerEnv[k.toLowerCase()] = v;
  }

  try {
    const fn = new Function('__v', '__fn', `"use strict"; return (${js});`);
    const val = fn(lowerEnv, MATH_FNS);
    return typeof val === 'number' && Number.isFinite(val) ? val : null;
  } catch {
    return null;
  }
}

export function checkNumericInput(
  rawInput: string,
  expected: number,
  tolerance = 0.005,
  acceptedStrings: string[] = []
): boolean {
  const cleaned = rawInput.trim();
  if (!cleaned) return false;

  const norm = (s: string) => s.toLowerCase().replace(/\s+/g, '');
  if (acceptedStrings.some((acc) => norm(acc) === norm(cleaned))) {
    return true;
  }

  const strippedUnits = cleaned.replace(/\s+[a-zA-Z°]+\s*(\/.*|\^.*)?$/, '').trim();
  const val = evalMathExpression(cleaned) ?? evalMathExpression(strippedUnits);
  if (val === null) return false;
  return Math.abs(val - expected) <= tolerance;
}

const SAMPLE_SEEDS = [
  [0.65, 1.35, 0.85, 1.15, 0.45],
  [1.25, 0.75, 1.55, 0.55, -0.35],
  [-0.85, 1.65, 0.35, -1.25, 0.95],
  [0.42, 0.92, -0.62, 1.42, 0.72],
  [1.75, 1.15, 1.05, 0.65, -0.85],
];

export function checkAlgebraicInput(
  rawInput: string,
  targetExpr: string,
  variables: string[] = ['x', 'y', 't'],
  acceptedStrings: string[] = []
): boolean {
  const cleaned = rawInput.trim();
  if (!cleaned) return false;

  const norm = (s: string) => s.toLowerCase().replace(/\s+/g, '');
  if (acceptedStrings.some((acc) => norm(acc) === norm(cleaned))) {
    return true;
  }

  let validComparisons = 0;
  for (const seed of SAMPLE_SEEDS) {
    const env: VarMap = {};
    variables.forEach((v, idx) => {
      env[v.toLowerCase()] = seed[idx % seed.length];
    });
    const expectedVal = evalMathExpression(targetExpr, env);
    if (expectedVal === null) continue;
    const studentVal = evalMathExpression(cleaned, env);
    if (studentVal === null) return false;
    if (Math.abs(studentVal - expectedVal) > 1e-4 * Math.max(1, Math.abs(expectedVal))) {
      return false;
    }
    validComparisons++;
  }
  return validComparisons >= 3;
}

export function checkLineEquation(
  rawInput: string,
  config: {
    type: 'line' | 'vertical' | 'horizontal';
    slope?: number;
    point?: [number, number];
    constantValue?: number;
  },
  acceptedStrings: string[] = []
): boolean {
  const cleaned = rawInput.trim();
  if (!cleaned) return false;

  const norm = (s: string) => s.toLowerCase().replace(/\s+/g, '');
  if (acceptedStrings.some((acc) => norm(acc) === norm(cleaned))) {
    return true;
  }

  const eqParts = cleaned.split('=');
  if (eqParts.length !== 2) return false;
  const [lhs, rhs] = eqParts;

  if (config.type === 'vertical' && config.constantValue !== undefined) {
    const c = config.constantValue;
    const at1 = (evalMathExpression(lhs, { x: c, y: 1 }) ?? NaN) - (evalMathExpression(rhs, { x: c, y: 1 }) ?? NaN);
    const at2 = (evalMathExpression(lhs, { x: c, y: -2.5 }) ?? NaN) - (evalMathExpression(rhs, { x: c, y: -2.5 }) ?? NaN);
    const off = (evalMathExpression(lhs, { x: c + 1.3, y: 1 }) ?? NaN) - (evalMathExpression(rhs, { x: c + 1.3, y: 1 }) ?? NaN);
    return Math.abs(at1) < 1e-4 && Math.abs(at2) < 1e-4 && Math.abs(off) > 1e-3;
  }

  if (config.type === 'horizontal' && config.constantValue !== undefined) {
    const c = config.constantValue;
    const at1 = (evalMathExpression(lhs, { x: 1, y: c }) ?? NaN) - (evalMathExpression(rhs, { x: 1, y: c }) ?? NaN);
    const at2 = (evalMathExpression(lhs, { x: -2.5, y: c }) ?? NaN) - (evalMathExpression(rhs, { x: -2.5, y: c }) ?? NaN);
    const off = (evalMathExpression(lhs, { x: 1, y: c + 1.3 }) ?? NaN) - (evalMathExpression(rhs, { x: 1, y: c + 1.3 }) ?? NaN);
    return Math.abs(at1) < 1e-4 && Math.abs(at2) < 1e-4 && Math.abs(off) > 1e-3;
  }

  if (config.type === 'line' && config.slope !== undefined && config.point) {
    const [x0, y0] = config.point;
    const m = config.slope;
    for (const tx of [x0, x0 + 1.5, x0 - 2.2]) {
      const ty = y0 + m * (tx - x0);
      const lVal = evalMathExpression(lhs, { x: tx, y: ty });
      const rVal = evalMathExpression(rhs, { x: tx, y: ty });
      if (lVal === null || rVal === null || Math.abs(lVal - rVal) > 1e-3) {
        return false;
      }
    }
    const offL = evalMathExpression(lhs, { x: x0, y: y0 + 2.5 });
    const offR = evalMathExpression(rhs, { x: x0, y: y0 + 2.5 });
    if (offL === null || offR === null || Math.abs(offL - offR) < 1e-3) {
      return false;
    }
    return true;
  }

  return false;
}
