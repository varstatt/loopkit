# Markdown Repository

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Document lines with a column chart representing a file-based content repository queried by frontmatter.

## Schema

```js
export const markdownRepository = {
  width: 280, height: 280, background: '#e0f2fe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Document lines
    { type: 'rect', style: { x: 32, y: 40, width: 130, height: 6, fill: '#0284c7', rx: 3 }, animate: { width: [0, 130], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 32, y: 56, width: 110, height: 6, fill: '#38bdf8', rx: 3 }, animate: { width: [0, 110], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 32, y: 72, width: 145, height: 6, fill: '#0284c7', rx: 3 }, animate: { width: [0, 145], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 32, y: 88, width: 95, height: 6, fill: '#38bdf8', rx: 3 }, animate: { width: [0, 95], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 32, y: 104, width: 125, height: 6, fill: '#0284c7', rx: 3 }, animate: { width: [0, 125], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 32, y: 120, width: 80, height: 6, fill: '#38bdf8', rx: 3 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 5, duration: 0.5, easing: 'ease-out' } },

    // Bar chart columns (bottom-right)
    { type: 'rect', style: { x: 178, y: 192, width: 18, height: 52, fill: '#4f46e5', rx: 3 }, animate: { height: [0, 52], y: [244, 192], opacity: [0, 1], sequence: 6, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 202, y: 172, width: 18, height: 72, fill: '#6366f1', rx: 3 }, animate: { height: [0, 72], y: [244, 172], opacity: [0, 1], sequence: 7, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 226, y: 204, width: 18, height: 40, fill: '#818cf8', rx: 3 }, animate: { height: [0, 40], y: [244, 204], opacity: [0, 1], sequence: 8, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 250, y: 184, width: 18, height: 60, fill: '#4f46e5', rx: 3 }, animate: { height: [0, 60], y: [244, 184], opacity: [0, 1], sequence: 9, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Six document lines at varying widths mimic markdown file content with natural line-length variation.
- The four bar columns in the bottom-right suggest query results or collection metrics, reinforcing the "repository" concept.
- Sky-to-indigo palette (`#e0f2fe` / `#0284c7` / `#38bdf8` / `#4f46e5`) moves from light background through blue content to indigo chart bars, creating depth.
- Lines animate left-to-right with width expansion, then chart bars grow upward, giving a natural reading-then-analyzing flow.
