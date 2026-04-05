# Area Chart Race

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Three stacked area shapes of decreasing height, approximated as filled rectangles, representing layered time-series data.

## Schema

```js
export const areaChartRace = {
  width: 280, height: 280, background: '#ffedd5',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // X-axis baseline
    { type: 'rect', style: { x: 24, y: 240, width: 232, height: 2, fill: '#d97706' }, animate: { width: [0, 232], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Area 1 (bottom layer) — tallest, orange
    { type: 'rect', style: { x: 24, y: 80, width: 232, height: 160, fill: '#f97316', rx: 4, opacity: 0.35 }, animate: { height: [0, 160], y: [240, 80], opacity: [0, 0.35], sequence: 1, duration: 0.6, easing: 'ease-out' } },

    // Area 2 (middle layer) — medium, amber
    { type: 'rect', style: { x: 24, y: 130, width: 232, height: 110, fill: '#f59e0b', rx: 4, opacity: 0.4 }, animate: { height: [0, 110], y: [240, 130], opacity: [0, 0.4], sequence: 2, duration: 0.6, easing: 'ease-out' } },

    // Area 3 (top layer) — shortest, yellow
    { type: 'rect', style: { x: 24, y: 180, width: 232, height: 60, fill: '#fbbf24', rx: 4, opacity: 0.5 }, animate: { height: [0, 60], y: [240, 180], opacity: [0, 0.5], sequence: 3, duration: 0.6, easing: 'ease-out' } },

    // Legend dots
    { type: 'circle', style: { cx: 48, cy: 260, r: 4, fill: '#f97316' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 58, y: 258, width: 32, height: 4, fill: '#fdba74', rx: 2 }, animate: { width: [0, 32], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },

    { type: 'circle', style: { cx: 112, cy: 260, r: 4, fill: '#f59e0b' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 122, y: 258, width: 32, height: 4, fill: '#fcd34d', rx: 2 }, animate: { width: [0, 32], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },

    { type: 'circle', style: { cx: 176, cy: 260, r: 4, fill: '#fbbf24' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 186, y: 258, width: 32, height: 4, fill: '#fde68a', rx: 2 }, animate: { width: [0, 32], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Three stacked rectangles grow upward from the baseline, layering on top of each other like stacked area charts.
- Each layer uses decreasing height and increasing opacity, creating visual depth through transparency blending.
- The orange/amber/yellow progression (`#f97316` / `#f59e0b` / `#fbbf24`) moves from warm to bright, matching the typical warm palette used in financial or analytics charts.
- A small legend row at the bottom with colored dots and short bars identifies each series.
- All areas share the same width, anchored to the x-axis baseline for a clean stacked composition.
