# Image Placeholder

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A dashed-border rectangle centered on the canvas with dimension text inside, representing a generated placeholder image.

## Schema

```js
export const imagePlaceholder = {
  width: 280, height: 280, background: '#f5f5f4',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Outer dashed border frame
    { type: 'rect', style: { x: 40, y: 50, width: 200, height: 150, fill: '#fafaf9', stroke: '#a8a29e', strokeWidth: 2, rx: 4 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Inner dashed lines (simulated with thin rects) — top
    { type: 'rect', style: { x: 48, y: 50, width: 24, height: 2, fill: '#a8a29e' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 50, width: 24, height: 2, fill: '#a8a29e' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 112, y: 50, width: 24, height: 2, fill: '#a8a29e' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 144, y: 50, width: 24, height: 2, fill: '#a8a29e' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 176, y: 50, width: 24, height: 2, fill: '#a8a29e' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 208, y: 50, width: 24, height: 2, fill: '#a8a29e' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },

    // Diagonal cross line — top-left to bottom-right (approximated)
    { type: 'rect', style: { x: 40, y: 124, width: 200, height: 1.5, fill: '#d6d3d1', opacity: 0.5 }, animate: { width: [0, 200], opacity: [0, 0.5], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // Dimension text
    { type: 'text', content: '800 x 600', style: { x: 140, y: 134, fontSize: 18, fontWeight: 'bold', color: '#78716c', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Format label below
    { type: 'text', content: 'PNG', style: { x: 140, y: 156, fontSize: 11, fontWeight: 600, color: '#a8a29e', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Small mountain icon (simplified as triangle with rects)
    { type: 'rect', style: { x: 100, y: 224, width: 36, height: 3, fill: '#d6d3d1', rx: 1 }, animate: { width: [0, 36], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 144, y: 224, width: 36, height: 3, fill: '#d6d3d1', rx: 1 }, animate: { width: [0, 36], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- A single centered rectangle with dashed-line detailing mimics the classic image placeholder pattern used in design tools and documentation.
- The "800 x 600" text sits at the center of the frame, making the tool's purpose self-explanatory.
- Stone/neutral/zinc palette (`#a8a29e` / `#78716c` / `#d6d3d1`) keeps the cover deliberately muted, reflecting the placeholder's intentionally generic nature.
- Small decorative bars below the frame hint at an image icon without requiring complex path data.
