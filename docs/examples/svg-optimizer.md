# SVG Optimizer

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Two thick bars showing before/after file sizes with a reduction arrow label, visualizing SVG compression.

## Schema

```js
export const svgOptimizer = {
  width: 280, height: 280, background: '#ecfccb',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // "Before" bar — full width, heavier
    { type: 'rect', style: { x: 32, y: 80, width: 210, height: 28, fill: '#65a30d', rx: 6 }, animate: { width: [0, 210], opacity: [0, 1], sequence: 0, duration: 0.6, easing: 'ease-out' } },
    { type: 'text', content: '12 KB', style: { x: 248, y: 100, fontSize: 13, fontWeight: 600, color: '#3f6212', textAnchor: 'end' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Arrow down
    { type: 'text', content: '>', style: { x: 140, y: 140, fontSize: 18, fontWeight: 'bold', color: '#4d7c0f', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // "After" bar — shorter, lighter
    { type: 'rect', style: { x: 32, y: 160, width: 70, height: 28, fill: '#22c55e', rx: 6 }, animate: { width: [0, 70], opacity: [0, 1], sequence: 2, duration: 0.6, easing: 'ease-out' } },
    { type: 'text', content: '4 KB', style: { x: 112, y: 180, fontSize: 13, fontWeight: 600, color: '#166534', textAnchor: 'start' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Savings label
    { type: 'text', content: '-67%', style: { x: 140, y: 228, fontSize: 20, fontWeight: 'bold', color: '#15803d', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // Decorative circle — bottom-right
    { type: 'circle', style: { cx: 252, cy: 252, r: 20, fill: '#86efac', opacity: 0.2 }, animate: { r: [0, 20], opacity: [0, 0.2], sequence: 4, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Two horizontal bars at drastically different widths (210 vs 70) make the file-size reduction immediately visible.
- The ">" arrow between bars creates a simple before/after flow without needing complex path elements.
- A bold "-67%" label at the bottom drives home the optimization story.
- Lime/green/emerald palette (`#65a30d` / `#22c55e` / `#86efac`) signals positive improvement and efficiency.
- A faint decorative circle keeps the bottom-right from feeling empty.
