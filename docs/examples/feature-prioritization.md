# Feature Prioritization

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

A 2x2 priority matrix with four scatter dots representing plotted features. Rose/pink palette on a blush background, centered on a 460x280 canvas. No axis lines — the quadrant fills alone communicate the grid.

## Schema

```js
export const featurePrioritization = {
  width: 460, height: 280, background: '#ffe4e6',
  stagger: 0.3, trigger: 'hover',
  elements: [
    // 2x2 grid quadrants
    { type: 'rect', style: { x: 82, y: 42, width: 140, height: 90, fill: '#fecdd3', rx: 10, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 238, y: 42, width: 140, height: 90, fill: '#fda4af', rx: 10, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 82, y: 148, width: 140, height: 90, fill: '#fda4af', rx: 10, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 238, y: 148, width: 140, height: 90, fill: '#fecdd3', rx: 10, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    // Scatter dots
    { type: 'circle', style: { cx: 152, cy: 82, r: 10, fill: '#e11d48', opacity: 0.5 }, animate: { scale: [0, 1], opacity: [0, 0.5], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 320, cy: 100, r: 8, fill: '#f43f5e', opacity: 0.4 }, animate: { scale: [0, 1], opacity: [0, 0.4], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 140, cy: 195, r: 9, fill: '#f43f5e', opacity: 0.35 }, animate: { scale: [0, 1], opacity: [0, 0.35], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 290, cy: 180, r: 7, fill: '#fb7185', opacity: 0.3 }, animate: { scale: [0, 1], opacity: [0, 0.3], sequence: 4, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **No axis lines** — the alternating `#fecdd3` / `#fda4af` quadrant fills create a diagonal pattern that implies the effort/impact axes without needing drawn lines.
- All four quadrants share sequence 0 so the grid appears as a single unit before dots land.
- Four dots (up from three) spread across all quadrants, with varying sizes (`r: 7--10`) and opacities to suggest different priority levels.
- The top-left dot is largest and deepest rose (`#e11d48`, `r: 10`), visually marking the "quick win" quadrant.
- Quadrants are centered on the 460px canvas: two columns at `x: 82` and `x: 238`, two rows at `y: 42` and `y: 148`, each 140x90.
