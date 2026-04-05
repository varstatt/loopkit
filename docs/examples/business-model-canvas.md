# Business Model Canvas

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

A 3x3 grid of rounded rectangles with a larger center overlay, representing the nine building blocks of a business model canvas. Amber/orange palette on a warm cream background.

## Schema

```js
export const businessModelCanvas = {
  width: 280, height: 280, background: '#fef3c7',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // 3x3 grid cells (top row)
    { type: 'rect', style: { x: 20, y: 20, width: 72, height: 72, fill: '#fde68a', rx: 8, opacity: 0.9 }, animate: { opacity: [0, 0.9], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 104, y: 20, width: 72, height: 72, fill: '#fcd34d', rx: 8, opacity: 0.9 }, animate: { opacity: [0, 0.9], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 188, y: 20, width: 72, height: 72, fill: '#fde68a', rx: 8, opacity: 0.9 }, animate: { opacity: [0, 0.9], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // 3x3 grid cells (middle row)
    { type: 'rect', style: { x: 20, y: 104, width: 72, height: 72, fill: '#fcd34d', rx: 8, opacity: 0.9 }, animate: { opacity: [0, 0.9], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 104, y: 104, width: 72, height: 72, fill: '#fbbf24', rx: 8, opacity: 0.9 }, animate: { opacity: [0, 0.9], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 188, y: 104, width: 72, height: 72, fill: '#fcd34d', rx: 8, opacity: 0.9 }, animate: { opacity: [0, 0.9], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // 3x3 grid cells (bottom row)
    { type: 'rect', style: { x: 20, y: 188, width: 72, height: 72, fill: '#fde68a', rx: 8, opacity: 0.9 }, animate: { opacity: [0, 0.9], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 104, y: 188, width: 72, height: 72, fill: '#fcd34d', rx: 8, opacity: 0.9 }, animate: { opacity: [0, 0.9], sequence: 7, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 188, y: 188, width: 72, height: 72, fill: '#fde68a', rx: 8, opacity: 0.9 }, animate: { opacity: [0, 0.9], sequence: 8, duration: 0.4, easing: 'ease-out' } },

    // Center overlay rect (larger, emphasizing the core value proposition)
    { type: 'rect', style: { x: 80, y: 80, width: 120, height: 120, fill: '#f59e0b', rx: 12, opacity: 0.85 }, animate: { opacity: [0, 0.85], scale: [0.6, 1], sequence: 9, duration: 0.6, easing: 'ease-out' } },

    // Decorative circle bottom-right
    { type: 'circle', style: { cx: 252, cy: 252, r: 22, fill: '#fbbf24', opacity: 0.4 }, animate: { scale: [0.3, 1], opacity: [0, 0.4], sequence: 10, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Stagger 0.3s** keeps the nine grid cells revealing briskly -- under 3 seconds for the full grid, avoiding a sluggish feel on a small 280px canvas.
- Grid cells fade in left-to-right, top-to-bottom (sequences 0--8), following a natural reading order.
- Alternating `#fde68a` and `#fcd34d` fills create a subtle checkerboard warmth without heavy contrast.
- The center overlay at sequence 9 scales up last, drawing the eye to the value proposition -- the canvas's central concept.
- The decorative circle at sequence 10 provides a soft finishing flourish in the corner.
