# CSV Editor

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A 4x4 grid of cells resembling a spreadsheet with a header row and a decorative circle.

## Schema

```js
export const csvEditor = {
  width: 280, height: 280, background: '#dbeafe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Header row (4 cells)
    { type: 'rect', style: { x: 24, y: 40, width: 52, height: 24, fill: '#3b82f6', rx: 4 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 82, y: 40, width: 52, height: 24, fill: '#2563eb', rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 140, y: 40, width: 52, height: 24, fill: '#3b82f6', rx: 4 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 198, y: 40, width: 52, height: 24, fill: '#2563eb', rx: 4 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Row 2
    { type: 'rect', style: { x: 24, y: 70, width: 52, height: 24, fill: '#bfdbfe', rx: 4 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 82, y: 70, width: 52, height: 24, fill: '#dbeafe', rx: 4, stroke: '#93c5fd', strokeWidth: 1 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 140, y: 70, width: 52, height: 24, fill: '#bfdbfe', rx: 4 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 198, y: 70, width: 52, height: 24, fill: '#dbeafe', rx: 4, stroke: '#93c5fd', strokeWidth: 1 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Row 3
    { type: 'rect', style: { x: 24, y: 100, width: 52, height: 24, fill: '#dbeafe', rx: 4, stroke: '#93c5fd', strokeWidth: 1 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 82, y: 100, width: 52, height: 24, fill: '#bfdbfe', rx: 4 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 140, y: 100, width: 52, height: 24, fill: '#dbeafe', rx: 4, stroke: '#93c5fd', strokeWidth: 1 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 198, y: 100, width: 52, height: 24, fill: '#bfdbfe', rx: 4 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Row 4
    { type: 'rect', style: { x: 24, y: 130, width: 52, height: 24, fill: '#bfdbfe', rx: 4 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 82, y: 130, width: 52, height: 24, fill: '#dbeafe', rx: 4, stroke: '#93c5fd', strokeWidth: 1 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 140, y: 130, width: 52, height: 24, fill: '#bfdbfe', rx: 4 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 198, y: 130, width: 52, height: 24, fill: '#dbeafe', rx: 4, stroke: '#93c5fd', strokeWidth: 1 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle (bottom-right)
    { type: 'circle', style: { cx: 236, cy: 232, r: 24, fill: '#6366f1', opacity: 0.18 }, animate: { r: [0, 24], opacity: [0, 0.18], sequence: 7, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- A 4x4 grid layout with distinct header coloring immediately communicates "spreadsheet" or "tabular data."
- Header cells use solid blue fills (`#3b82f6` / `#2563eb`), while data rows alternate between lighter fills and bordered cells for a checkerboard pattern.
- Rows animate as groups (same sequence number) to suggest data appearing row by row, as in a loading table.
- A subtle indigo decorative circle in the bottom-right adds visual weight without competing with the grid.
