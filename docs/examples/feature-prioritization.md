# Feature Prioritization

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

A 2x2 priority matrix grid with three scatter dots representing plotted features. Rose/pink palette on a blush background.

## Schema

```js
export const featurePrioritization = {
  width: 280, height: 280, background: '#ffe4e6',
  stagger: 0.35, trigger: 'autoplay', hold: 2,
  elements: [
    // 2x2 grid quadrants
    { type: 'rect', style: { x: 30, y: 30, width: 105, height: 105, fill: '#fecdd3', rx: 8, opacity: 0.7 }, animate: { opacity: [0, 0.7], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 145, y: 30, width: 105, height: 105, fill: '#fda4af', rx: 8, opacity: 0.7 }, animate: { opacity: [0, 0.7], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 30, y: 145, width: 105, height: 105, fill: '#fda4af', rx: 8, opacity: 0.7 }, animate: { opacity: [0, 0.7], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 145, y: 145, width: 105, height: 105, fill: '#fecdd3', rx: 8, opacity: 0.7 }, animate: { opacity: [0, 0.7], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Axis lines
    { type: 'rect', style: { x: 30, y: 139, width: 220, height: 2, fill: '#fb7185', rx: 1, opacity: 0.5 }, animate: { width: [0, 220], opacity: [0, 0.5], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 139, y: 30, width: 2, height: 220, fill: '#fb7185', rx: 1, opacity: 0.5 }, animate: { height: [0, 220], opacity: [0, 0.5], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // Scatter dot 1 (top-right quadrant -- high value, low effort)
    { type: 'circle', style: { cx: 195, cy: 68, r: 12, fill: '#e11d48', opacity: 0.85 }, animate: { scale: [0, 1], opacity: [0, 0.85], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Scatter dot 2 (top-left quadrant)
    { type: 'circle', style: { cx: 72, cy: 85, r: 10, fill: '#f43f5e', opacity: 0.75 }, animate: { scale: [0, 1], opacity: [0, 0.75], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Scatter dot 3 (bottom-right quadrant)
    { type: 'circle', style: { cx: 205, cy: 200, r: 10, fill: '#f43f5e', opacity: 0.75 }, animate: { scale: [0, 1], opacity: [0, 0.75], sequence: 4, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Stagger 0.35s** separates the two phases: the grid appears first (sequence 0), axes draw in (sequence 1), then dots pop in one by one (sequences 2--4).
- All four quadrants share sequence 0 so the matrix background appears as a single unit before the data lands on it.
- The top-right dot is slightly larger (`r: 12`) and uses a deeper rose (`#e11d48`) to visually mark it as the "quick win" quadrant -- high impact, low effort.
- Alternating `#fecdd3` and `#fda4af` quadrant fills create a diagonal pattern suggesting the effort/impact axes.
- Dots use `scale: [0, 1]` to pop from nothing, giving them an energetic "plotted" feeling.
