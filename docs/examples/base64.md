# Base64

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Two boxes with text labels connected by arrow dots, representing encoding and decoding between plain text and Base64.

## Schema

```js
export const base64 = {
  width: 280, height: 280, background: '#ecfccb',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Input box (top)
    { type: 'rect', style: { x: 56, y: 48, width: 168, height: 56, fill: '#f7fee7', stroke: '#65a30d', strokeWidth: 2, rx: 8 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'text', content: 'ABC', style: { x: 140, y: 82, fontSize: 20, fontWeight: 'bold', color: '#365314', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Arrow dots (top to bottom)
    { type: 'circle', style: { cx: 140, cy: 118, r: 3, fill: '#84cc16' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 140, cy: 132, r: 3, fill: '#84cc16' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 140, cy: 146, r: 3, fill: '#84cc16' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 140, cy: 160, r: 3, fill: '#84cc16' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },

    // Arrow tip (small triangle-like dots)
    { type: 'circle', style: { cx: 134, cy: 154, r: 2, fill: '#65a30d' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 146, cy: 154, r: 2, fill: '#65a30d' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },

    // Output box (bottom)
    { type: 'rect', style: { x: 56, y: 176, width: 168, height: 56, fill: '#f7fee7', stroke: '#16a34a', strokeWidth: 2, rx: 8 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'text', content: 'QUJD', style: { x: 140, y: 210, fontSize: 20, fontWeight: 'bold', color: '#14532d', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Two centered boxes with text labels show the transformation from plain text ("ABC") to its Base64 encoded form ("QUJD").
- Dot-based arrow between them animates sequentially, creating a visual data flow from input to output.
- The arrow tip uses smaller flanking dots to suggest directionality without needing actual triangle shapes.
- Lime/green/teal palette (`#ecfccb` / `#84cc16` / `#65a30d` / `#16a34a`) conveys a "go/process" metaphor.
