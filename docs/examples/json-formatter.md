# JSON Formatter

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Indented code lines representing structured JSON data with syntax-like formatting.

## Schema

```js
export const jsonFormatter = {
  width: 280, height: 280, background: '#fef3c7',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Opening brace
    { type: 'rect', style: { x: 40, y: 40, width: 16, height: 6, fill: '#92400e', rx: 2 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Indented key-value lines
    { type: 'rect', style: { x: 60, y: 64, width: 140, height: 6, fill: '#d97706', rx: 2 }, animate: { width: [0, 140], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 60, y: 84, width: 110, height: 6, fill: '#f59e0b', rx: 2 }, animate: { width: [0, 110], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 104, width: 100, height: 6, fill: '#d97706', rx: 2 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 124, width: 130, height: 6, fill: '#f59e0b', rx: 2 }, animate: { width: [0, 130], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 60, y: 144, width: 90, height: 6, fill: '#d97706', rx: 2 }, animate: { width: [0, 90], opacity: [0, 1], sequence: 5, duration: 0.5, easing: 'ease-out' } },

    // Closing brace
    { type: 'rect', style: { x: 40, y: 168, width: 16, height: 6, fill: '#92400e', rx: 2 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle bottom-right
    { type: 'circle', style: { cx: 238, cy: 238, r: 28, fill: '#fbbf24', opacity: 0.4 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.4], sequence: 7, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Varying `x` positions (40, 60, 80) create indentation levels that suggest nested JSON structure without rendering actual text.
- First and last lines are short and dark, representing `{` and `}` braces.
- The amber/orange palette (`#fef3c7` / `#d97706` / `#f59e0b` / `#92400e`) evokes syntax highlighting warmth.
- Lines reveal sequentially top to bottom, mimicking the formatter processing the document.
