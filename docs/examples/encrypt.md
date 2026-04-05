# Encrypt

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A padlock shape built from a rect body and circle arc on top, with four small dots below suggesting encrypted data.

## Schema

```js
export const encrypt = {
  width: 280, height: 280, background: '#d1fae5',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Lock arc (top circle, stroke-only to form the shackle)
    { type: 'circle', style: { cx: 140, cy: 88, r: 28, fill: 'none', stroke: '#059669', strokeWidth: 8 }, animate: { r: [0, 28], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Lock body (rect)
    { type: 'rect', style: { x: 104, y: 104, width: 72, height: 56, fill: '#10b981', rx: 6 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // Keyhole dot
    { type: 'circle', style: { cx: 140, cy: 126, r: 6, fill: '#065f46' }, animate: { r: [0, 6], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Encrypted data dots (below lock)
    { type: 'circle', style: { cx: 104, cy: 192, r: 5, fill: '#14b8a6' }, animate: { r: [0, 5], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 124, cy: 192, r: 5, fill: '#0d9488' }, animate: { r: [0, 5], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 144, cy: 192, r: 5, fill: '#14b8a6' }, animate: { r: [0, 5], opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 164, cy: 192, r: 5, fill: '#0d9488' }, animate: { r: [0, 5], opacity: [0, 1], sequence: 6, duration: 0.3, easing: 'ease-out' } },

    // Decorative circle (bottom-right)
    { type: 'circle', style: { cx: 236, cy: 240, r: 22, fill: '#34d399', opacity: 0.18 }, animate: { r: [0, 22], opacity: [0, 0.18], sequence: 7, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- The lock shape is built from a stroke-only circle (shackle) on top and a solid rect (body) below, with the body overlapping the circle's lower half.
- A dark green keyhole dot on the lock body adds the recognizable padlock detail.
- Four small teal dots below the lock represent encrypted/scrambled data output.
- Emerald/green/teal palette (`#059669` / `#10b981` / `#14b8a6` / `#0d9488`) conveys security and trust.
- The animation builds the lock top-down (shackle, body, keyhole), then reveals the data dots sequentially.
