# Build Cost Plan

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

Four bar chart columns growing upward from a shared baseline. Amber palette on a pale yellow background, centered on a 460x280 canvas.

## Schema

```js
export const buildCostPlan = {
  width: 460, height: 280, background: '#fef9c3',
  stagger: 0.3, trigger: 'hover',
  elements: [
    // Bar 1 (shortest)
    { type: 'rect', style: { x: 97, y: 145, width: 55, height: 70, fill: '#fbbf24', rx: 8, opacity: 0.4 }, animate: { height: [0, 70], y: [215, 145], opacity: [0, 0.4], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    // Bar 2
    { type: 'rect', style: { x: 167, y: 105, width: 55, height: 110, fill: '#f59e0b', rx: 8, opacity: 0.45 }, animate: { height: [0, 110], y: [215, 105], opacity: [0, 0.45], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    // Bar 3 (tallest)
    { type: 'rect', style: { x: 237, y: 65, width: 55, height: 150, fill: '#d97706', rx: 8, opacity: 0.5 }, animate: { height: [0, 150], y: [215, 65], opacity: [0, 0.5], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    // Bar 4
    { type: 'rect', style: { x: 307, y: 120, width: 55, height: 95, fill: '#b45309', rx: 8, opacity: 0.4 }, animate: { height: [0, 95], y: [215, 120], opacity: [0, 0.4], sequence: 3, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Four bars only** — the earlier version had a timeline and milestone dots, but the simplified version focuses purely on the cost dimension.
- Bars animate both `height` (from 0) and `y` (from baseline at 215) simultaneously so they grow upward from a shared bottom edge.
- The amber progression (`#fbbf24` / `#f59e0b` / `#d97706` / `#b45309`) darkens with each bar, distinguishing phases.
- Bars are evenly spaced at 70px intervals (`x: 97, 167, 237, 307`), each 55px wide, centered horizontally on the 460px canvas.
- Low opacities (0.4--0.5) keep the bars translucent against the warm background, matching the cover aesthetic.
