# Robots.txt

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Six code-like lines with varying indentation, colored green for Allow rules and red for Disallow rules, mimicking a robots.txt file.

## Schema

```js
export const robotsTxt = {
  width: 280, height: 280, background: '#fef9c3',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Line 1 — User-agent (header, amber)
    { type: 'rect', style: { x: 24, y: 36, width: 120, height: 6, fill: '#d97706', rx: 3 }, animate: { width: [0, 120], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 152, y: 36, width: 40, height: 6, fill: '#f59e0b', rx: 3 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Line 2 — Allow (green, indented)
    { type: 'rect', style: { x: 40, y: 64, width: 56, height: 6, fill: '#16a34a', rx: 3 }, animate: { width: [0, 56], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 104, y: 64, width: 80, height: 6, fill: '#4ade80', rx: 3 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // Line 3 — Allow (green, indented)
    { type: 'rect', style: { x: 40, y: 92, width: 56, height: 6, fill: '#16a34a', rx: 3 }, animate: { width: [0, 56], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 104, y: 92, width: 110, height: 6, fill: '#4ade80', rx: 3 }, animate: { width: [0, 110], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Line 4 — Disallow (red, indented)
    { type: 'rect', style: { x: 40, y: 120, width: 76, height: 6, fill: '#dc2626', rx: 3 }, animate: { width: [0, 76], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 124, y: 120, width: 64, height: 6, fill: '#f87171', rx: 3 }, animate: { width: [0, 64], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Line 5 — Disallow (red, indented)
    { type: 'rect', style: { x: 40, y: 148, width: 76, height: 6, fill: '#dc2626', rx: 3 }, animate: { width: [0, 76], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 124, y: 148, width: 96, height: 6, fill: '#f87171', rx: 3 }, animate: { width: [0, 96], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Line 6 — Sitemap (amber, no indent)
    { type: 'rect', style: { x: 24, y: 184, width: 72, height: 6, fill: '#d97706', rx: 3 }, animate: { width: [0, 72], opacity: [0, 1], sequence: 5, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 104, y: 184, width: 140, height: 6, fill: '#fbbf24', rx: 3 }, animate: { width: [0, 140], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle — bottom-right
    { type: 'circle', style: { cx: 252, cy: 252, r: 20, fill: '#f59e0b', opacity: 0.15 }, animate: { r: [0, 20], opacity: [0, 0.15], sequence: 6, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Six lines mimic a real robots.txt file structure: User-agent header, Allow rules, Disallow rules, and a Sitemap directive.
- Green (`#16a34a` / `#4ade80`) for Allow and red (`#dc2626` / `#f87171`) for Disallow provides instant semantic meaning.
- Amber (`#d97706`) for the User-agent and Sitemap lines distinguishes directive types from rules.
- Indented lines (x: 40 vs x: 24) reflect the actual indentation hierarchy in robots.txt files.
- Yellow background (`#fef9c3`) and warm accent colors evoke a text-editor feel for configuration files.
