# JWT Decoder

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Three colored blocks representing JWT header, payload, and signature sections separated by dots.

## Schema

```js
export const jwtDecoder = {
  width: 280, height: 280, background: '#eff6ff',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Header block (blue)
    { type: 'rect', style: { x: 32, y: 56, width: 216, height: 48, fill: '#3b82f6', rx: 6 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 72, width: 120, height: 5, fill: '#93c5fd', rx: 2 }, animate: { width: [0, 120], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 84, width: 80, height: 5, fill: '#93c5fd', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Dot separator 1
    { type: 'circle', style: { cx: 140, cy: 116, r: 4, fill: '#64748b' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },

    // Payload block (purple)
    { type: 'rect', style: { x: 32, y: 128, width: 216, height: 48, fill: '#8b5cf6', rx: 6 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 142, width: 140, height: 5, fill: '#c4b5fd', rx: 2 }, animate: { width: [0, 140], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 154, width: 100, height: 5, fill: '#c4b5fd', rx: 2 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 166, width: 60, height: 5, fill: '#c4b5fd', rx: 2 }, animate: { width: [0, 60], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Dot separator 2
    { type: 'circle', style: { cx: 140, cy: 188, r: 4, fill: '#64748b' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },

    // Signature block (green)
    { type: 'rect', style: { x: 32, y: 200, width: 216, height: 36, fill: '#22c55e', rx: 6 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 212, width: 160, height: 5, fill: '#86efac', rx: 2 }, animate: { width: [0, 160], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Three stacked blocks use the canonical JWT color scheme: blue (header), purple (payload), green (signature).
- Dot separators between blocks mirror the `.` delimiters in a real JWT string.
- The payload block is tallest with three content lines, reflecting that payload typically holds the most data.
- The signature block is shortest with a single line, matching its fixed-length nature.
- Content lines within each block are lighter tints of the block color, creating readable contrast.
