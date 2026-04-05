# HTML to Markdown

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Two-panel view with HTML indented lines on the left, conversion dots at center, and Markdown lines on the right.

## Schema

```js
export const htmlToMarkdown = {
  width: 280, height: 280, background: '#ffedd5',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // HTML lines (left panel, indented to suggest tag nesting)
    { type: 'rect', style: { x: 16, y: 48, width: 95, height: 6, fill: '#ea580c', rx: 3 }, animate: { width: [0, 95], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 28, y: 64, width: 75, height: 6, fill: '#f97316', rx: 3 }, animate: { width: [0, 75], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 40, y: 80, width: 60, height: 6, fill: '#ea580c', rx: 3 }, animate: { width: [0, 60], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 28, y: 96, width: 80, height: 6, fill: '#f97316', rx: 3 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 16, y: 112, width: 95, height: 6, fill: '#ea580c', rx: 3 }, animate: { width: [0, 95], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },

    // Conversion dots (center column)
    { type: 'circle', style: { cx: 140, cy: 72, r: 4, fill: '#9a3412' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 140, cy: 88, r: 4, fill: '#9a3412' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 140, cy: 104, r: 4, fill: '#9a3412' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },

    // Markdown lines (right panel, flat structure)
    { type: 'rect', style: { x: 160, y: 48, width: 100, height: 6, fill: '#65a30d', rx: 3 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 6, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 64, width: 80, height: 6, fill: '#84cc16', rx: 3 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 7, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 80, width: 90, height: 6, fill: '#65a30d', rx: 3 }, animate: { width: [0, 90], opacity: [0, 1], sequence: 8, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 96, width: 70, height: 6, fill: '#84cc16', rx: 3 }, animate: { width: [0, 70], opacity: [0, 1], sequence: 9, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 112, width: 100, height: 6, fill: '#65a30d', rx: 3 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 10, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Left HTML lines use orange tones (`#ea580c` / `#f97316`) with increasing then decreasing indentation to suggest nested HTML tags.
- Right Markdown lines use lime/green tones (`#65a30d` / `#84cc16`) with flat alignment, reflecting Markdown's simpler structure.
- Three dark orange dots at center act as a visual "processing" bridge between the two formats.
- The animation flows left-panel first, then dots, then right-panel, conveying a transformation pipeline.
