# Favicon

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Five progressively larger squares arranged left-to-right and bottom-aligned, representing favicon size variants from 16px to 512px.

## Schema

```js
export const favicon = {
  width: 280, height: 280, background: '#ede9fe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Square 1 — 16px (smallest)
    { type: 'rect', style: { x: 24, y: 220, width: 20, height: 20, fill: '#8b5cf6', rx: 3 }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Square 2 — 32px
    { type: 'rect', style: { x: 56, y: 204, width: 36, height: 36, fill: '#a78bfa', rx: 4 }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // Square 3 — 48px (apple-touch)
    { type: 'rect', style: { x: 104, y: 180, width: 60, height: 60, fill: '#c084fc', rx: 6 }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Square 4 — 192px
    { type: 'rect', style: { x: 176, y: 148, width: 92, height: 92, fill: '#d946ef', rx: 8 }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Square 5 — 512px (largest, partially visible)
    { type: 'rect', style: { x: 148, y: 32, width: 124, height: 124, fill: '#7c3aed', rx: 12, opacity: 0.25 }, animate: { opacity: [0, 0.25], scale: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },

    // Decorative circle — top-right
    { type: 'circle', style: { cx: 256, cy: 28, r: 16, fill: '#a855f7', opacity: 0.2 }, animate: { r: [0, 16], opacity: [0, 0.2], sequence: 5, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Five squares grow from left to right and from small to large, visually conveying the concept of multi-resolution favicon generation.
- Bottom-aligned placement creates a staircase effect that naturally draws the eye upward.
- Violet/purple/fuchsia palette (`#8b5cf6` / `#c084fc` / `#d946ef`) gives a rich, icon-like feel.
- The largest square is rendered at low opacity as a background element, suggesting the oversized source image that gets scaled down.
- A subtle circle in the top-right corner balances the composition.
