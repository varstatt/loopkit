# Markdown Preview

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Split view with markdown source lines on the left and rendered preview lines on the right, separated by a vertical divider.

## Schema

```js
export const markdownPreview = {
  width: 280, height: 280, background: '#e0f2fe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Left panel background (source)
    { type: 'rect', style: { x: 16, y: 28, width: 120, height: 224, fill: '#f0f9ff', rx: 6 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Right panel background (preview)
    { type: 'rect', style: { x: 144, y: 28, width: 120, height: 224, fill: '#ffffff', rx: 6 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Vertical divider
    { type: 'rect', style: { x: 138, y: 28, width: 4, height: 224, fill: '#7dd3fc', rx: 2 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Source lines (left) -- markdown syntax indicators
    { type: 'rect', style: { x: 26, y: 48, width: 14, height: 7, fill: '#0284c7', rx: 2 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 48, width: 72, height: 7, fill: '#7dd3fc', rx: 2 }, animate: { width: [0, 72], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    { type: 'rect', style: { x: 26, y: 68, width: 96, height: 5, fill: '#bae6fd', rx: 2 }, animate: { width: [0, 96], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 26, y: 80, width: 80, height: 5, fill: '#bae6fd', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    { type: 'rect', style: { x: 26, y: 100, width: 10, height: 7, fill: '#0284c7', rx: 2 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 40, y: 100, width: 60, height: 7, fill: '#7dd3fc', rx: 2 }, animate: { width: [0, 60], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    { type: 'rect', style: { x: 26, y: 120, width: 100, height: 5, fill: '#bae6fd', rx: 2 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 26, y: 132, width: 70, height: 5, fill: '#bae6fd', rx: 2 }, animate: { width: [0, 70], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 26, y: 144, width: 88, height: 5, fill: '#bae6fd', rx: 2 }, animate: { width: [0, 88], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Preview lines (right) -- rendered output
    { type: 'rect', style: { x: 154, y: 48, width: 86, height: 8, fill: '#0369a1', rx: 2 }, animate: { width: [0, 86], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    { type: 'rect', style: { x: 154, y: 68, width: 96, height: 5, fill: '#64748b', rx: 2 }, animate: { width: [0, 96], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 154, y: 80, width: 80, height: 5, fill: '#64748b', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    { type: 'rect', style: { x: 154, y: 100, width: 70, height: 7, fill: '#0369a1', rx: 2 }, animate: { width: [0, 70], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    { type: 'rect', style: { x: 154, y: 120, width: 100, height: 5, fill: '#64748b', rx: 2 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 154, y: 132, width: 72, height: 5, fill: '#64748b', rx: 2 }, animate: { width: [0, 72], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 154, y: 144, width: 88, height: 5, fill: '#64748b', rx: 2 }, animate: { width: [0, 88], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- The split-panel layout mirrors a typical markdown editor with source on the left and live preview on the right.
- Source-side heading indicators (short dark rects before longer light rects) suggest markdown syntax like `#` or `##`.
- Preview-side headings are thicker and darker, showing the rendered result of the same content.
- Corresponding lines on both sides share sequence numbers, so source and preview appear to build simultaneously.
- Sky/blue/indigo palette (`#e0f2fe` / `#0284c7` / `#0369a1`) with a blue divider maintains visual cohesion.
