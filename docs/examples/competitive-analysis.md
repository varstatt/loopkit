# Competitive Analysis

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

Three overlapping circles forming a Venn diagram with border outlines, representing competitive overlap and differentiation. Sky/blue/indigo palette on a light blue background, centered on a 460x280 canvas.

## Schema

```js
export const competitiveAnalysis = {
  width: 460, height: 280, background: '#e0f2fe',
  stagger: 0.3, trigger: 'hover',
  elements: [
    // Left circle
    { type: 'circle', style: { cx: 189, cy: 150, r: 65, fill: '#7dd3fc', opacity: 0.2 }, animate: { cx: [100, 189], opacity: [0, 0.2], sequence: 0, duration: 0.7, easing: 'ease-out' } },
    // Right circle
    { type: 'circle', style: { cx: 271, cy: 150, r: 65, fill: '#818cf8', opacity: 0.2 }, animate: { cx: [360, 271], opacity: [0, 0.2], sequence: 1, duration: 0.7, easing: 'ease-out' } },
    // Top circle
    { type: 'circle', style: { cx: 230, cy: 115, r: 58, fill: '#38bdf8', opacity: 0.15 }, animate: { cy: [40, 115], opacity: [0, 0.15], sequence: 2, duration: 0.7, easing: 'ease-out' } },
    // Left circle border
    { type: 'circle', style: { cx: 189, cy: 150, r: 65, fill: 'none', opacity: 0.4 }, animate: { cx: [100, 189], opacity: [0, 0.4], sequence: 0, duration: 0.7, easing: 'ease-out' } },
    // Right circle border
    { type: 'circle', style: { cx: 271, cy: 150, r: 65, fill: 'none', opacity: 0.4 }, animate: { cx: [360, 271], opacity: [0, 0.4], sequence: 1, duration: 0.7, easing: 'ease-out' } },
    // Top circle border
    { type: 'circle', style: { cx: 230, cy: 115, r: 58, fill: 'none', opacity: 0.3 }, animate: { cy: [40, 115], opacity: [0, 0.3], sequence: 2, duration: 0.7, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Filled circles + border circles** — each Venn section has a low-opacity fill paired with a `fill: 'none'` border circle at higher opacity, creating a clean outline effect.
- Each circle slides in from a different direction (left, right, above), converging toward center to communicate competitive convergence.
- The border circles share their fill circle's sequence, so fill and outline arrive together.
- Low fill opacities (0.15--0.2) allow overlapping regions to blend naturally, suggesting shared market space.
- The three circles are arranged in a triangle: left at cx=189, right at cx=271, top at cx=230/cy=115.
