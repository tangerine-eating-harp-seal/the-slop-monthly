// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = '월간 슬롭 · The Slop Monthly';
export const SITE_DESCRIPTION = '사이드 프로젝트 잡동사니 연재.';

export const MASTHEAD = 'The Slop Monthly';
export const MASTHEAD_KR = '월간 슬롭';
export const PUBLISHER = 'SLOP PUBLISHING';
export const TAGLINE = 'A periodical of side-project slop, lovingly over-engineered.';

// GitHub Pages serves the site under /the-slop-monthly, so every internal
// link has to carry the base path.
export function url(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}${path}`;
}

// Issue number = 1-based position in chronological order (oldest first).
export function issueNumber(n: number): string {
	return `#${String(n).padStart(3, '0')}`;
}
