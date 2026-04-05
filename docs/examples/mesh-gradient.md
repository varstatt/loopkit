# Mesh Gradient

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Three large overlapping semi-transparent circles creating a mesh gradient effect.

## Schema

```js
export const meshGradient = {
  width: 280, height: 280, background: '#fce7f3',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Pink circle (top-left)
    { type: 'circle', style: { cx: 100, cy: 100, r: 80, fill: '#ec4899', opacity: 0.45 }, animate: { r: [0, 80], opacity: [0, 0.45], sequence: 0, duration: 0.6, easing: 'ease-out' } },

    // Purple circle (top-right)
    { type: 'circle', style: { cx: 190, cy: 110, r: 75, fill: '#a855f7', opacity: 0.4 }, animate: { r: [0, 75], opacity: [0, 0.4], sequence: 1, duration: 0.6, easing: 'ease-out' } },

    // Blue circle (bottom-center)
    { type: 'circle', style: { cx: 140, cy: 190, r: 70, fill: '#3b82f6', opacity: 0.4 }, animate: { r: [0, 70], opacity: [0, 0.4], sequence: 2, duration: 0.6, easing: 'ease-out' } },

    // Decorative circle (bottom-left)
    { type: 'circle', style: { cx: 44, cy: 240, r: 20, fill: '#d946ef', opacity: 0.2 }, animate: { r: [0, 20], opacity: [0, 0.2], sequence: 3, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Three large overlapping circles with low opacity create a mesh gradient effect through additive color mixing.
- Pink, purple, and blue fills (`#ec4899` / `#a855f7` / `#3b82f6`) are placed at offset positions so their overlaps produce organic color transitions.
- Each circle expands from center outward, revealing the gradient blend progressively.
- A small decorative circle in the bottom-left provides a subtle accent to balance the composition.
