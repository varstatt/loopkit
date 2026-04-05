# Color Picker

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Three overlapping circles in red, green, and blue representing additive color mixing.

## Schema

```js
export const colorPicker = {
  width: 280, height: 280, background: '#fce7f3',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Red circle (top-left)
    { type: 'circle', style: { cx: 116, cy: 112, r: 52, fill: '#ef4444', opacity: 0.7 }, animate: { scale: [0.3, 1], opacity: [0, 0.7], sequence: 0, duration: 0.6, easing: 'ease-out' } },

    // Green circle (top-right)
    { type: 'circle', style: { cx: 164, cy: 112, r: 52, fill: '#22c55e', opacity: 0.7 }, animate: { scale: [0.3, 1], opacity: [0, 0.7], sequence: 1, duration: 0.6, easing: 'ease-out' } },

    // Blue circle (bottom-center)
    { type: 'circle', style: { cx: 140, cy: 156, r: 52, fill: '#3b82f6', opacity: 0.7 }, animate: { scale: [0.3, 1], opacity: [0, 0.7], sequence: 2, duration: 0.6, easing: 'ease-out' } },

    // Overlap highlights (small circles at intersections)
    { type: 'circle', style: { cx: 140, cy: 104, r: 12, fill: '#fbbf24', opacity: 0.6 }, animate: { scale: [0, 1], opacity: [0, 0.6], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 124, cy: 140, r: 12, fill: '#06b6d4', opacity: 0.6 }, animate: { scale: [0, 1], opacity: [0, 0.6], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 156, cy: 140, r: 12, fill: '#f0abfc', opacity: 0.6 }, animate: { scale: [0, 1], opacity: [0, 0.6], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Center white (all three overlap)
    { type: 'circle', style: { cx: 140, cy: 126, r: 8, fill: '#ffffff', opacity: 0.8 }, animate: { scale: [0, 1], opacity: [0, 0.8], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle bottom-left
    { type: 'circle', style: { cx: 44, cy: 244, r: 20, fill: '#f9a8d4', opacity: 0.4 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.4], sequence: 5, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Three large overlapping circles form the classic RGB additive color diagram, universally associated with color tools.
- Small intersection highlights (yellow, cyan, magenta) and a white center dot show the color mixing effect.
- Each primary circle scales in sequentially, then the secondary/tertiary colors pop in together, building up to the complete diagram.
- The pink background (`#fce7f3`) complements the RGB primaries without competing with any single channel.
