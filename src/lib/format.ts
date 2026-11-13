import type { Rich, Year, YearMonth } from '@/types';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-02" -> "Feb 2026"; a year-only "2020" stays "2020". */
export function formatMonth(date: YearMonth | Year): string {
  const [year, month] = date.split('-').map(Number);
  return month ? `${MONTHS[month - 1]} ${year}` : String(year);
}

/**
 * ("2025-04", "2026-07") -> "Apr 2025 – Jul 2026"; ("2025-02", "2025-07") -> "Feb – Jul 2025";
 * ("2020", "2023") -> "2020 – 2023".
 */
export function formatRange(start: YearMonth | Year, end: YearMonth | Year | 'present'): string {
  const from = formatMonth(start);
  if (end === 'present') return `${from} – Present`;
  const to = formatMonth(end);
  const bothHaveMonths = start.includes('-') && end.includes('-');
  if (bothHaveMonths && start.slice(0, 4) === end.slice(0, 4)) return `${from.split(' ')[0]} – ${to}`;
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
