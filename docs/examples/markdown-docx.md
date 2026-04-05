# Markdown to DOCX

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Left panel with markdown source lines, right panel showing a DOCX document with a file icon.

## Schema

```js
export const markdownDocx = {
  width: 280, height: 280, background: '#dbeafe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Markdown source lines (left)
    { type: 'rect', style: { x: 20, y: 48, width: 95, height: 6, fill: '#2563eb', rx: 3 }, animate: { width: [0, 95], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 20, y: 64, width: 75, height: 6, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 75], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 20, y: 80, width: 100, height: 6, fill: '#2563eb', rx: 3 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 20, y: 96, width: 60, height: 6, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 60], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 20, y: 112, width: 85, height: 6, fill: '#2563eb', rx: 3 }, animate: { width: [0, 85], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },

    // DOCX document (right) - white page
    { type: 'rect', style: { x: 148, y: 36, width: 110, height: 140, fill: '#ffffff', rx: 6, stroke: '#93c5fd', strokeWidth: 2 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.5, easing: 'ease-out' } },

    // DOCX icon badge (top-right of document)
    { type: 'rect', style: { x: 216, y: 36, width: 42, height: 18, fill: '#4f46e5', rx: 4 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: '.docx', style: { x: 237, y: 49, fontSize: 9, fontWeight: 600, color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },

    // DOCX content lines
    { type: 'rect', style: { x: 160, y: 68, width: 80, height: 5, fill: '#93c5fd', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 7, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 82, width: 65, height: 5, fill: '#bfdbfe', rx: 2 }, animate: { width: [0, 65], opacity: [0, 1], sequence: 8, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 96, width: 75, height: 5, fill: '#93c5fd', rx: 2 }, animate: { width: [0, 75], opacity: [0, 1], sequence: 9, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle (bottom-left)
    { type: 'circle', style: { cx: 44, cy: 236, r: 24, fill: '#6366f1', opacity: 0.15 }, animate: { r: [0, 24], opacity: [0, 0.15], sequence: 10, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Left markdown lines in blue tones (`#2563eb` / `#3b82f6`) match the overall blue/indigo palette.
- The white DOCX document on the right has a `.docx` badge label in indigo to clearly identify the output format.
- Content lines inside the document are lighter blue, suggesting formatted text within the DOCX container.
- A decorative indigo circle in the bottom-left mirrors the document weight on the right side.
