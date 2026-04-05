# CSS Covers

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A 3-column grid of cover art thumbnails featuring a circle, a tall rectangle, and a ring shape.

## Schema

```js
export const cssCovers = {
  width: 280, height: 280, background: '#e0e7ff',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Thumbnail 1 - circle cover
    { type: 'rect', style: { x: 20, y: 40, width: 72, height: 90, fill: '#c7d2fe', rx: 6 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 56, cy: 78, r: 20, fill: '#6366f1' }, animate: { r: [0, 20], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // Thumbnail 2 - tall rect cover
    { type: 'rect', style: { x: 104, y: 40, width: 72, height: 90, fill: '#c7d2fe', rx: 6 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 122, y: 56, width: 36, height: 58, fill: '#a855f7', rx: 4 }, animate: { height: [0, 58], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Thumbnail 3 - ring cover
    { type: 'rect', style: { x: 188, y: 40, width: 72, height: 90, fill: '#c7d2fe', rx: 6 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 224, cy: 78, r: 20, fill: 'none', stroke: '#ec4899', strokeWidth: 5 }, animate: { r: [0, 20], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Second row - three more thumbnails (smaller, bottom)
    { type: 'rect', style: { x: 20, y: 148, width: 72, height: 90, fill: '#c7d2fe', rx: 6 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 104, y: 148, width: 72, height: 90, fill: '#c7d2fe', rx: 6 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 188, y: 148, width: 72, height: 90, fill: '#c7d2fe', rx: 6 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle (bottom-right)
    { type: 'circle', style: { cx: 248, cy: 256, r: 18, fill: '#818cf8', opacity: 0.2 }, animate: { r: [0, 18], opacity: [0, 0.2], sequence: 7, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- A 3-column, 2-row grid of thumbnail cards represents a gallery of generated cover art.
- Top row thumbnails each contain a distinct shape (circle, tall rect, ring) to show variety in generative output.
- Indigo/purple/pink palette (`#6366f1` / `#a855f7` / `#ec4899`) on soft indigo backgrounds (`#c7d2fe`) feels creative and design-oriented.
- Bottom row shows empty card placeholders that fade in together, suggesting "more covers available."
- Cards animate column by column, top row first, reinforcing a browsing experience.
