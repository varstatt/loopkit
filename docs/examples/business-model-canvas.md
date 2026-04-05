# Business Model Canvas

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

A 3x3 grid of rounded rectangles with a larger center overlay, representing the nine building blocks of a business model canvas. Amber/orange palette on warm cream, centered on a 460x280 canvas.

## Schema

```js
export const businessModelCanvas = {
  width: 460, height: 280, background: '#fef3c7',
  stagger: 0.3, trigger: 'hover',
  elements: [
    // 3x3 grid cells (top row)
    { type: 'rect', style: { x: 79, y: 56, width: 96, height: 51, fill: '#fde68a', rx: 8, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 183, y: 56, width: 96, height: 51, fill: '#fcd34d', rx: 8, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 286, y: 56, width: 96, height: 51, fill: '#fde68a', rx: 8, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    // 3x3 grid cells (middle row)
    { type: 'rect', style: { x: 79, y: 115, width: 96, height: 51, fill: '#fcd34d', rx: 8, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 183, y: 115, width: 96, height: 51, fill: '#fbbf24', rx: 8, opacity: 0.7 }, animate: { opacity: [0, 0.7], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 286, y: 115, width: 96, height: 51, fill: '#fcd34d', rx: 8, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    // 3x3 grid cells (bottom row)
    { type: 'rect', style: { x: 79, y: 174, width: 96, height: 51, fill: '#fde68a', rx: 8, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 183, y: 174, width: 96, height: 51, fill: '#fcd34d', rx: 8, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 7, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 286, y: 174, width: 96, height: 51, fill: '#fde68a', rx: 8, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 8, duration: 0.4, easing: 'ease-out' } },
    // Center overlay rect
    { type: 'rect', style: { x: 168, y: 91, width: 126, height: 112, fill: '#f59e0b', rx: 12, opacity: 0.3 }, animate: { opacity: [0, 0.3], scale: [0.6, 1], sequence: 9, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **No decorative elements** — just the 3x3 grid and center overlay.
- Grid cells fade in left-to-right, top-to-bottom (sequences 0--8), following natural reading order.
- Alternating `#fde68a` and `#fcd34d` fills create a subtle checkerboard warmth. The center cell uses the deepest `#fbbf24`.
- The center overlay scales up last (sequence 9), drawing the eye to the value proposition — the canvas's central concept.
- Grid columns at `x: 79, 183, 286` with 96px widths and 8px gaps, centered on the 460px canvas.
