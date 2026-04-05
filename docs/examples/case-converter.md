# Case Converter

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A title line with three rows of two case-option boxes each, representing different text case transformations.

## Schema

```js
export const caseConverter = {
  width: 280, height: 280, background: '#d1fae5',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Title line
    { type: 'rect', style: { x: 32, y: 32, width: 140, height: 8, fill: '#059669', rx: 4 }, animate: { width: [0, 140], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Row 1 - two case option boxes
    { type: 'rect', style: { x: 24, y: 64, width: 108, height: 36, fill: '#10b981', rx: 6 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'camelCase', style: { x: 78, y: 87, fontSize: 11, fontWeight: 600, color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 144, y: 64, width: 108, height: 36, fill: '#34d399', rx: 6 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'UPPER', style: { x: 198, y: 87, fontSize: 11, fontWeight: 600, color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Row 2 - two case option boxes
    { type: 'rect', style: { x: 24, y: 112, width: 108, height: 36, fill: '#34d399', rx: 6 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'snake_case', style: { x: 78, y: 135, fontSize: 11, fontWeight: 600, color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 144, y: 112, width: 108, height: 36, fill: '#10b981', rx: 6 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'kebab-case', style: { x: 198, y: 135, fontSize: 11, fontWeight: 600, color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Row 3 - two case option boxes
    { type: 'rect', style: { x: 24, y: 160, width: 108, height: 36, fill: '#10b981', rx: 6 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'Title Case', style: { x: 78, y: 183, fontSize: 11, fontWeight: 600, color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 144, y: 160, width: 108, height: 36, fill: '#34d399', rx: 6 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'lower', style: { x: 198, y: 183, fontSize: 11, fontWeight: 600, color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle (bottom-right)
    { type: 'circle', style: { cx: 240, cy: 244, r: 20, fill: '#065f46', opacity: 0.15 }, animate: { r: [0, 20], opacity: [0, 0.15], sequence: 7, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- A 3x2 grid of labeled option boxes shows the six common case transformations, making the tool's purpose immediately clear.
- Alternating emerald (`#10b981`) and lighter green (`#34d399`) fills create a checkerboard pattern that keeps the grid visually active.
- White text labels inside each box display the actual case format names, reinforcing the conversion concept.
- Boxes animate row by row, two at a time, giving a menu-populating effect.
