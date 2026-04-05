# Market Sizing

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

Three concentric circles representing TAM, SAM, and SOM layers, scaling outward from the center. Emerald/teal palette on a mint background.

## Schema

```js
export const marketSizing = {
  width: 280, height: 280, background: '#d1fae5',
  stagger: 0.4, trigger: 'autoplay', hold: 2,
  elements: [
    // Decorative circle top-left
    { type: 'circle', style: { cx: 30, cy: 30, r: 20, fill: '#6ee7b7', opacity: 0.4 }, animate: { scale: [0.3, 1], opacity: [0, 0.4], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // TAM (outermost) -- scales up first
    { type: 'circle', style: { cx: 140, cy: 148, r: 100, fill: '#6ee7b7', opacity: 0.5 }, animate: { r: [0, 100], opacity: [0, 0.5], sequence: 1, duration: 0.7, easing: 'ease-out' } },

    // SAM (middle)
    { type: 'circle', style: { cx: 140, cy: 148, r: 65, fill: '#34d399', opacity: 0.6 }, animate: { r: [0, 65], opacity: [0, 0.6], sequence: 2, duration: 0.6, easing: 'ease-out' } },

    // SOM (innermost)
    { type: 'circle', style: { cx: 140, cy: 148, r: 32, fill: '#059669', opacity: 0.8 }, animate: { r: [0, 32], opacity: [0, 0.8], sequence: 3, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Stagger 0.4s** with the largest circle first creates a "zoom-in" feel -- TAM expands, then SAM narrows the focus, and SOM lands as the core opportunity.
- Each ring gets progressively more opaque (`0.5` / `0.6` / `0.8`), drawing the eye inward toward the serviceable obtainable market.
- The emerald progression (`#6ee7b7` / `#34d399` / `#059669`) darkens toward the center, reinforcing the funnel metaphor.
- Circles are centered slightly below vertical midpoint (`cy: 148`) to give the composition a grounded feel on the square canvas.
- The decorative circle at top-left (sequence 0) appears first as a subtle lead-in before the main diagram builds.
