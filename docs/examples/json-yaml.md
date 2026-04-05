# JSON to YAML

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Two-panel conversion view with JSON lines on the left, YAML lines on the right, and a central conversion dot.

## Schema

```js
export const jsonYaml = {
  width: 280, height: 280, background: '#fef3c7',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // JSON lines (left panel)
    { type: 'rect', style: { x: 20, y: 50, width: 100, height: 6, fill: '#d97706', rx: 3 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 30, y: 66, width: 80, height: 6, fill: '#f59e0b', rx: 3 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 30, y: 82, width: 90, height: 6, fill: '#d97706', rx: 3 }, animate: { width: [0, 90], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 30, y: 98, width: 70, height: 6, fill: '#f59e0b', rx: 3 }, animate: { width: [0, 70], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 20, y: 114, width: 100, height: 6, fill: '#d97706', rx: 3 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },

    // Center conversion dot
    { type: 'circle', style: { cx: 140, cy: 140, r: 8, fill: '#92400e' }, animate: { r: [0, 8], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // YAML lines (right panel)
    { type: 'rect', style: { x: 160, y: 50, width: 95, height: 6, fill: '#16a34a', rx: 3 }, animate: { width: [0, 95], opacity: [0, 1], sequence: 6, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 170, y: 66, width: 75, height: 6, fill: '#22c55e', rx: 3 }, animate: { width: [0, 75], opacity: [0, 1], sequence: 7, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 170, y: 82, width: 85, height: 6, fill: '#16a34a', rx: 3 }, animate: { width: [0, 85], opacity: [0, 1], sequence: 8, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 170, y: 98, width: 65, height: 6, fill: '#22c55e', rx: 3 }, animate: { width: [0, 65], opacity: [0, 1], sequence: 9, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 114, width: 95, height: 6, fill: '#16a34a', rx: 3 }, animate: { width: [0, 95], opacity: [0, 1], sequence: 10, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Left panel uses amber tones (`#d97706` / `#f59e0b`) with indented lines to suggest JSON bracket-and-key structure.
- Right panel uses green tones (`#16a34a` / `#22c55e`) with indented lines representing YAML's indentation-based format.
- A single dark amber dot at center acts as the conversion bridge between formats.
- Lines animate left-to-right in reading order, left panel first, then the dot, then the right panel, giving a natural conversion flow.
