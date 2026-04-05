# Market Sizing

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

Three concentric circles representing TAM, SAM, and SOM layers, expanding outward from the center. Emerald/teal palette on a mint background, centered at (230, 140) on a 460x280 canvas.

## Schema

```js
export const marketSizing = {
  width: 460, height: 280, background: '#d1fae5',
  stagger: 0.3, trigger: 'hover',
  elements: [
    // TAM (outermost)
    { type: 'circle', style: { cx: 230, cy: 140, r: 110, fill: '#6ee7b7', opacity: 0.15 }, animate: { r: [0, 110], opacity: [0, 0.15], sequence: 0, duration: 0.7, easing: 'ease-out' } },
    // SAM (middle)
    { type: 'circle', style: { cx: 230, cy: 140, r: 75, fill: '#34d399', opacity: 0.2 }, animate: { r: [0, 75], opacity: [0, 0.2], sequence: 1, duration: 0.6, easing: 'ease-out' } },
    // SOM (innermost)
    { type: 'circle', style: { cx: 230, cy: 140, r: 40, fill: '#059669', opacity: 0.3 }, animate: { r: [0, 40], opacity: [0, 0.3], sequence: 2, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Three elements only** — no decorative circles, just the TAM/SAM/SOM rings centered exactly at (230, 140).
- TAM expands first, then SAM narrows focus, then SOM lands as the core opportunity — a "zoom-in" build.
- Each ring gets progressively more opaque (`0.15` / `0.2` / `0.3`) and darker (`#6ee7b7` / `#34d399` / `#059669`), drawing the eye inward.
- The outermost circle's `r: 110` fills most of the 280px height while staying within the safe zone.
