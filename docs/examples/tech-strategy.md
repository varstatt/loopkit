# Tech Strategy

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

Three stacked horizontal layers representing a technology stack, sliding in from below. Cyan/teal palette on an ice-blue background, centered at (230, 140) on a 460x280 canvas.

## Schema

```js
export const techStrategy = {
  width: 460, height: 280, background: '#cffafe',
  stagger: 0.3, trigger: 'hover',
  elements: [
    // Bottom layer (widest -- infrastructure)
    { type: 'rect', style: { x: 116, y: 169, width: 228, height: 36, fill: '#06b6d4', rx: 10, opacity: 0.25 }, animate: { y: [280, 169], opacity: [0, 0.25], sequence: 0, duration: 0.6, easing: 'ease-out' } },
    // Middle layer (platform/services)
    { type: 'rect', style: { x: 135, y: 122, width: 190, height: 36, fill: '#22d3ee', rx: 10, opacity: 0.25 }, animate: { y: [280, 122], opacity: [0, 0.25], sequence: 1, duration: 0.6, easing: 'ease-out' } },
    // Top layer (narrowest -- application)
    { type: 'rect', style: { x: 154, y: 75, width: 152, height: 36, fill: '#67e8f9', rx: 10, opacity: 0.3 }, animate: { y: [280, 75], opacity: [0, 0.3], sequence: 2, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Three layers only** — no labels or borders, just the visual pyramid. The narrowing widths (228 / 190 / 152px) communicate the stack hierarchy.
- All layers slide in from `y: 280` (below canvas), stacking upward in natural infrastructure-first order.
- Each layer is narrower and lighter (`#06b6d4` / `#22d3ee` / `#67e8f9`), creating a trapezoid shape suggesting stability at the base.
- Low opacities (0.25--0.3) keep the layers translucent, matching the cover aesthetic.
- Layers are vertically centered: bottom at y=169, middle at y=122, top at y=75, with consistent 47px gaps and 36px heights.
