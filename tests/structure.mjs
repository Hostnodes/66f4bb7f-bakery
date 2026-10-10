// Structure checks for the bakery page. Your pull request runs them too
// (`npm test`). They only check rules that hold at every step, so a page in
// progress passes; your mentor reviews the rest against the course criteria.

import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const failures = [];
const check = (code, ok, message) => {
  if (!ok) failures.push(`${code}: ${message}`);
};

// HTML-01: the document has the basics.
check('HTML-01', /^\s*<!doctype html>/i.test(html), 'Start the file with <!DOCTYPE html>.');
check('HTML-01', /<html[^>]*\slang="[a-z]{2}/i.test(html), 'Give <html> a lang attribute, e.g. lang="en".');
check('HTML-01', /<meta\s+charset="utf-8"/i.test(html), 'Add <meta charset="utf-8"> to <head>.');
check('HTML-01', /<title>[^<]{3,}<\/title>/i.test(html), 'Give the page a meaningful <title>.');

// HTML-02: one h1, and heading levels in order.
const headings = [...html.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
check('HTML-02', headings.filter((h) => h === 1).length <= 1, 'Use at most one <h1>.');
for (let i = 1; i < headings.length; i++) {
  if (headings[i] > headings[i - 1] + 1) {
    check('HTML-02', false, `An <h${headings[i]}> follows an <h${headings[i - 1]}>: don't skip heading levels.`);
    break;
  }
}

// CSS-01: styles live in the stylesheet.
check('CSS-01', !/\sstyle="/i.test(html), 'Move style="..." attributes into css/style.css.');
check('CSS-01', /<link[^>]+href="css\/style\.css"/i.test(html), 'Link css/style.css from <head>.');

// HTML-04: navigation links jump to sections that exist.
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/gi)].map((m) => m[1]));
for (const [, target] of html.matchAll(/href="#([^"]+)"/gi)) {
  check('HTML-04', ids.has(target), `The link to #${target} has no element with id="${target}".`);
}

// POL-01: images have alt text (an empty alt is fine for decoration).
for (const [tag] of html.matchAll(/<img\b[^>]*>/gi)) {
  check('POL-01', /\salt="/i.test(tag), `Add an alt attribute to ${tag}.`);
}

if (failures.length > 0) {
  console.error(`${failures.length} check(s) failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log('All structure checks passed.');
