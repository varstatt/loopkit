# Markdown to PDF

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Left panel shows markdown source lines, right panel shows a PDF document with content lines inside.

## Schema

```js
export const markdownPdf = {
  width: 280, height: 280, background: '#ffe4e6',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Markdown source lines (left)
    { type: 'rect', style: { x: 20, y: 44, width: 90, height: 6, fill: '#e11d48', rx: 3 }, animate: { width: [0, 90], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 20, y: 60, width: 70, height: 6, fill: '#f43f5e', rx: 3 }, animate: { width: [0, 70], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 20, y: 76, width: 100, height: 6, fill: '#e11d48', rx: 3 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 20, y: 92, width: 60, height: 6, fill: '#f43f5e', rx: 3 }, animate: { width: [0, 60], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 20, y: 108, width: 85, height: 6, fill: '#e11d48', rx: 3 }, animate: { width: [0, 85], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },

    // PDF document (right) - white page
    { type: 'rect', style: { x: 148, y: 34, width: 110, height: 140, fill: '#ffffff', rx: 6, stroke: '#fda4af', strokeWidth: 2 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.5, easing: 'ease-out' } },

    // PDF content lines
    { type: 'rect', style: { x: 160, y: 52, width: 80, height: 5, fill: '#fb7185', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 66, width: 70, height: 5, fill: '#fda4af', rx: 2 }, animate: { width: [0, 70], opacity: [0, 1], sequence: 7, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 80, width: 85, height: 5, fill: '#fb7185', rx: 2 }, animate: { width: [0, 85], opacity: [0, 1], sequence: 8, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 94, width: 60, height: 5, fill: '#fda4af', rx: 2 }, animate: { width: [0, 60], opacity: [0, 1], sequence: 9, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle (bottom-left)
    { type: 'circle', style: { cx: 48, cy: 232, r: 26, fill: '#f97316', opacity: 0.15 }, animate: { r: [0, 26], opacity: [0, 0.15], sequence: 10, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Left markdown lines use bold rose/red tones (`#e11d48` / `#f43f5e`) to suggest raw source content.
- The right PDF panel is a white rectangle with a soft pink border, containing lighter content lines that suggest rendered output.
- The source-to-document flow reads left-to-right, with source appearing first, then the PDF container, then its content filling in.
- A subtle orange decorative circle in the bottom-left balances the visual weight of the PDF panel on the right.
