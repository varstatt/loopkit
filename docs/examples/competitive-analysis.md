# Competitive Analysis

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

Three overlapping circles forming a Venn diagram, representing competitive overlap and differentiation. Sky/blue/indigo palette on a light blue background.

## Schema

```js
export const competitiveAnalysis = {
  width: 280, height: 280, background: '#e0f2fe',
  stagger: 0.4, trigger: 'autoplay', hold: 2,
  elements: [
    // Left circle -- slides in from left
    { type: 'circle', style: { cx: 108, cy: 126, r: 60, fill: '#7dd3fc', opacity: 0.6 }, animate: { cx: [40, 108], opacity: [0, 0.6], sequence: 0, duration: 0.7, easing: 'ease-out' } },

    // Right circle -- slides in from right
    { type: 'circle', style: { cx: 172, cy: 126, r: 60, fill: '#60a5fa', opacity: 0.6 }, animate: { cx: [240, 172], opacity: [0, 0.6], sequence: 1, duration: 0.7, easing: 'ease-out' } },

    // Bottom circle -- slides in from below
    { type: 'circle', style: { cx: 140, cy: 180, r: 60, fill: '#818cf8', opacity: 0.6 }, animate: { cy: [250, 180], opacity: [0, 0.6], sequence: 2, duration: 0.7, easing: 'ease-out' } },

    // Decorative circle bottom-right
    { type: 'circle', style: { cx: 250, cy: 250, r: 18, fill: '#c7d2fe', opacity: 0.5 }, animate: { scale: [0.3, 1], opacity: [0, 0.5], sequence: 3, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Stagger 0.4s** spaces out the three circle entrances so each arrival is distinct, letting the overlap build progressively.
- Each circle slides in from a different direction (left, right, below), converging toward the center to visually communicate competitive convergence.
- Semi-transparent fills (`opacity: 0.6`) allow the overlapping regions to blend naturally, suggesting shared market space.
- The sky-to-indigo progression (`#7dd3fc` / `#60a5fa` / `#818cf8`) adds depth without clashing on the light `#e0f2fe` background.
- The small decorative circle arrives last as a quiet accent.
