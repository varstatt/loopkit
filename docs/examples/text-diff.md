# Text Diff

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Split view with red-tinted removal lines on the left, green-tinted addition lines on the right, and a vertical divider.

## Schema

```js
export const textDiff = {
  width: 280, height: 280, background: '#ecfdf5',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Left column background (deletions)
    { type: 'rect', style: { x: 16, y: 32, width: 120, height: 216, fill: '#fef2f2', rx: 6 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Right column background (additions)
    { type: 'rect', style: { x: 144, y: 32, width: 120, height: 216, fill: '#f0fdf4', rx: 6 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Vertical divider
    { type: 'rect', style: { x: 138, y: 32, width: 4, height: 216, fill: '#d1d5db', rx: 2 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Left column lines (red removals)
    { type: 'rect', style: { x: 26, y: 52, width: 96, height: 5, fill: '#fca5a5', rx: 2 }, animate: { width: [0, 96], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 26, y: 68, width: 80, height: 5, fill: '#f87171', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 26, y: 84, width: 100, height: 5, fill: '#fca5a5', rx: 2 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 26, y: 100, width: 70, height: 5, fill: '#f87171', rx: 2 }, animate: { width: [0, 70], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 26, y: 116, width: 88, height: 5, fill: '#fca5a5', rx: 2 }, animate: { width: [0, 88], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Right column lines (green additions)
    { type: 'rect', style: { x: 154, y: 52, width: 88, height: 5, fill: '#86efac', rx: 2 }, animate: { width: [0, 88], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 154, y: 68, width: 100, height: 5, fill: '#4ade80', rx: 2 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 154, y: 84, width: 72, height: 5, fill: '#86efac', rx: 2 }, animate: { width: [0, 72], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 154, y: 100, width: 96, height: 5, fill: '#4ade80', rx: 2 }, animate: { width: [0, 96], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 154, y: 116, width: 80, height: 5, fill: '#86efac', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 154, y: 132, width: 64, height: 5, fill: '#4ade80', rx: 2 }, animate: { width: [0, 64], opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- The split-panel layout with a vertical divider immediately signals a side-by-side diff comparison.
- Left panel has a red-tinted background with red lines (removals), right panel has a green-tinted background with green lines (additions).
- Lines on each side animate in pairs at the same sequence step, showing corresponding changes appearing together.
- The right column has one extra line (six vs five) to suggest the diff added more content than it removed.
- Line widths vary naturally, avoiding a mechanical look.
