# Build Cost Plan

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

Four bar chart columns growing upward with a horizontal timeline and milestone dots. Yellow/amber/indigo palette on a pale yellow background.

## Schema

```js
export const buildCostPlan = {
  width: 280, height: 280, background: '#fef9c3',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Bar 1 (shortest)
    { type: 'rect', style: { x: 40, y: 130, width: 36, height: 90, fill: '#fbbf24', rx: 6, opacity: 0.9 }, animate: { height: [0, 90], y: [220, 130], opacity: [0, 0.9], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Bar 2
    { type: 'rect', style: { x: 90, y: 90, width: 36, height: 130, fill: '#f59e0b', rx: 6, opacity: 0.9 }, animate: { height: [0, 130], y: [220, 90], opacity: [0, 0.9], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // Bar 3 (tallest)
    { type: 'rect', style: { x: 140, y: 60, width: 36, height: 160, fill: '#d97706', rx: 6, opacity: 0.9 }, animate: { height: [0, 160], y: [220, 60], opacity: [0, 0.9], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Bar 4
    { type: 'rect', style: { x: 190, y: 105, width: 36, height: 115, fill: '#f59e0b', rx: 6, opacity: 0.9 }, animate: { height: [0, 115], y: [220, 105], opacity: [0, 0.9], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // Baseline
    { type: 'rect', style: { x: 30, y: 220, width: 210, height: 2, fill: '#92400e', rx: 1, opacity: 0.4 }, animate: { width: [0, 210], opacity: [0, 0.4], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Timeline line
    { type: 'rect', style: { x: 30, y: 250, width: 210, height: 2, fill: '#6366f1', rx: 1, opacity: 0.6 }, animate: { width: [0, 210], opacity: [0, 0.6], sequence: 4, duration: 0.6, easing: 'ease-out' } },

    // Timeline dot 1
    { type: 'circle', style: { cx: 58, cy: 250, r: 5, fill: '#6366f1', opacity: 0.9 }, animate: { scale: [0, 1], opacity: [0, 0.9], sequence: 5, duration: 0.3, easing: 'ease-out' } },

    // Timeline dot 2
    { type: 'circle', style: { cx: 108, cy: 250, r: 5, fill: '#818cf8', opacity: 0.9 }, animate: { scale: [0, 1], opacity: [0, 0.9], sequence: 6, duration: 0.3, easing: 'ease-out' } },

    // Timeline dot 3
    { type: 'circle', style: { cx: 158, cy: 250, r: 5, fill: '#6366f1', opacity: 0.9 }, animate: { scale: [0, 1], opacity: [0, 0.9], sequence: 7, duration: 0.3, easing: 'ease-out' } },

    // Timeline dot 4
    { type: 'circle', style: { cx: 208, cy: 250, r: 5, fill: '#818cf8', opacity: 0.9 }, animate: { scale: [0, 1], opacity: [0, 0.9], sequence: 8, duration: 0.3, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Stagger 0.3s** creates a snappy rhythm -- bars grow left to right (sequences 0--3), then the timeline draws in (sequence 4), and dots pop in one by one (sequences 5--8).
- Bars animate both `height` (from 0) and `y` (from baseline) simultaneously so they grow upward from the bottom rather than stretching downward.
- The amber progression (`#fbbf24` / `#f59e0b` / `#d97706`) makes the tallest bar the darkest, visually emphasizing the peak cost phase.
- Indigo timeline dots (`#6366f1` / `#818cf8`) introduce a contrasting color that separates the cost dimension (amber) from the time dimension (indigo), matching the dual-axis nature of the original cover.
- Dots align horizontally with bar centers, connecting each cost column to its timeline milestone.
