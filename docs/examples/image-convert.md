# Image Convert

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Left image box, center arrow, right image box in a different color representing format conversion.

## Schema

```js
export const imageConvert = {
  width: 280, height: 280, background: '#d1fae5',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Source image box (left)
    { type: 'rect', style: { x: 24, y: 72, width: 80, height: 80, fill: '#10b981', rx: 8 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 36, y: 84, width: 56, height: 56, fill: '#059669', rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // Arrow (center - three rects forming a right arrow)
    { type: 'rect', style: { x: 120, y: 108, width: 36, height: 6, fill: '#0d9488', rx: 3 }, animate: { width: [0, 36], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 144, y: 100, width: 6, height: 10, fill: '#0d9488', rx: 1 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 144, y: 112, width: 6, height: 10, fill: '#0d9488', rx: 1 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },

    // Target image box (right)
    { type: 'rect', style: { x: 172, y: 72, width: 80, height: 80, fill: '#06b6d4', rx: 8 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 184, y: 84, width: 56, height: 56, fill: '#0891b2', rx: 4 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle (bottom-right)
    { type: 'circle', style: { cx: 236, cy: 236, r: 22, fill: '#14b8a6', opacity: 0.18 }, animate: { r: [0, 22], opacity: [0, 0.18], sequence: 6, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Two boxes side by side with an arrow between them is a universal "conversion" visual metaphor.
- The source box uses emerald (`#10b981` / `#059669`) and the target uses cyan (`#06b6d4` / `#0891b2`), showing the format change through color shift.
- Each box has an inner rect to suggest image content within the container.
- The arrow animates after the source appears and before the target, creating a clear left-to-right transformation narrative.
