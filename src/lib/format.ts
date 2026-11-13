import type { Rich, YearMonth } from '@/types';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-02" -> "Feb 2026" */
export function formatMonth(ym: YearMonth): string {
  const [year, month] = ym.split('-').map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

/** ("2025-04", "2026-07") -> "Apr 2025 – Jul 2026"; same-year ranges drop the first year. */
export function formatRange(start: YearMonth, end: YearMonth | 'present'): string {
  const from = formatMonth(start);
  if (end === 'present') return `${from} – Present`;
  const to = formatMonth(end);
  if (start.slice(0, 4) === end.slice(0, 4)) return `${from.split(' ')[0]} – ${to}`;
  return `${from} – ${to}`;
}

/** Sort key so newer dates come first. */
export function compareDesc(a: YearMonth | 'present', b: YearMonth | 'present'): number {
  const key = (v: YearMonth | 'present') => (v === 'present' ? '9999-99' : v);
  return key(b).localeCompare(key(a));
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Escapes the text, then turns **x** into <strong>x</strong>. Use with set:html. */
export function rich(text: Rich): string {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

export function doiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}
