import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathTextProps {
  text: string;
  className?: string;
  block?: boolean;
}

/**
 * Renders mixed Markdown-lite + LaTeX ($...$ inline and $$...$$ display) safely using KaTeX.
 * Supports **bold**, *italic*, `code`, and newline breaks.
 */
export const MathText: React.FC<MathTextProps> = ({ text, className = '', block = false }) => {
  const html = useMemo(() => {
    if (!text) return '';

    // Tokenize $$...$$ and $...$ blocks first so HTML/Markdown formatting never touches math
    const mathTokens: string[] = [];
    let processed = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, expr) => {
      const rendered = katex.renderToString(expr.trim(), {
        displayMode: true,
        throwOnError: false,
      });
      const id = mathTokens.length;
      mathTokens.push(
        `<div class="my-2 overflow-x-auto bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/70 rounded-xl px-3 py-1">${rendered}</div>`
      );
      return `@@MATH_TOKEN_${id}@@`;
    });

    processed = processed.replace(/\$([^$\n]+?)\$/g, (_, expr) => {
      const rendered = katex.renderToString(expr.trim(), {
        displayMode: false,
        throwOnError: false,
      });
      const id = mathTokens.length;
      mathTokens.push(rendered);
      return `@@MATH_TOKEN_${id}@@`;
    });

    // Escape remaining HTML characters
    processed = processed
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Simple Markdown formatting
    processed = processed
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
      .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 font-mono text-xs">$1</code>')
      .replace(/\n\n/g, '<div class="h-2.5"></div>')
      .replace(/\n/g, '<br />');

    // Restore KaTeX HTML tokens
    processed = processed.replace(/@@MATH_TOKEN_(\d+)@@/g, (_, idx) => mathTokens[Number(idx)]);

    return processed;
  }, [text]);

  const Tag = block ? 'div' : 'span';
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};
