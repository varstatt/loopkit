# Aspect Ratio

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Two nested rectangles of different proportions (16:9 and 4:3) with a ratio label, visualizing aspect ratio calculation.

## Schema

```js
export const aspectRatio = {
  width: 280, height: 280, background: '#ccfbf1',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Outer frame — 16:9 proportion
    { type: 'rect', style: { x: 24, y: 60, width: 232, height: 131, fill: 'none', stroke: '#0d9488', strokeWidth: 2.5, rx: 6 }, animate: { opacity: [0, 1], width: [0, 232], sequence: 0, duration: 0.6, easing: 'ease-out' } },

    // Inner frame — 4:3 proportion
    { type: 'rect', style: { x: 48, y: 76, width: 160, height: 120, fill: '#99f6e4', stroke: '#14b8a6', strokeWidth: 1.5, rx: 4, opacity: 0.6 }, animate: { opacity: [0, 0.6], width: [0, 160], sequence: 1, duration: 0.6, easing: 'ease-out' } },

    // Dimension line — horizontal
    { type: 'rect', style: { x: 24, y: 204, width: 232, height: 2, fill: '#0f766e' }, animate: { width: [0, 232], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Dimension line — vertical
    { type: 'rect', style: { x: 16, y: 60, width: 2, height: 131, fill: '#0f766e' }, animate: { height: [0, 131], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Ratio label
    { type: 'text', content: '16:9', style: { x: 140, y: 240, fontSize: 22, fontWeight: 'bold', color: '#0f766e', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // Secondary label
    { type: 'text', content: '4:3', style: { x: 128, y: 142, fontSize: 13, fontWeight: 600, color: '#14b8a6', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Two nested rectangles at 16:9 and 4:3 proportions make the tool's purpose immediately obvious.
- Dimension lines along the left and bottom edges suggest measurement, reinforcing the calculation aspect.
- Teal/emerald palette (`#0d9488` / `#14b8a6` / `#99f6e4`) feels technical yet approachable.
- The bold "16:9" label anchors the composition while the smaller "4:3" label sits inside its frame.
