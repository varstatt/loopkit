# Word Counter

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Four text lines representing content being analyzed, with two stat badges below showing word and character counts.

## Schema

```js
export const wordCounter = {
  width: 280, height: 280, background: '#dbeafe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Text content lines
    { type: 'rect', style: { x: 28, y: 40, width: 200, height: 6, fill: '#2563eb', rx: 3 }, animate: { width: [0, 200], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 28, y: 58, width: 180, height: 6, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 180], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 28, y: 76, width: 210, height: 6, fill: '#2563eb', rx: 3 }, animate: { width: [0, 210], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 28, y: 94, width: 160, height: 6, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 160], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // Stat badge 1 - word count
    { type: 'badge', content: '247', style: { x: 80, y: 160, fontSize: 18, fontWeight: 700, color: '#ffffff', bg: '#4f46e5', isLabel: true }, animate: { opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'text', content: 'words', style: { x: 80, y: 190, fontSize: 11, fontWeight: 500, color: '#6366f1', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Stat badge 2 - character count
    { type: 'badge', content: '1,482', style: { x: 190, y: 160, fontSize: 18, fontWeight: 700, color: '#ffffff', bg: '#7c3aed', isLabel: true }, animate: { opacity: [0, 1], sequence: 6, duration: 0.5, easing: 'ease-out' } },
    { type: 'text', content: 'chars', style: { x: 190, y: 190, fontSize: 11, fontWeight: 500, color: '#8b5cf6', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 7, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle (bottom-right)
    { type: 'circle', style: { cx: 240, cy: 244, r: 22, fill: '#6366f1', opacity: 0.15 }, animate: { r: [0, 22], opacity: [0, 0.15], sequence: 8, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Four text lines at the top represent the content being analyzed, with varying widths for a natural paragraph feel.
- Two stat badges below show computed metrics (word count and character count), making the tool's output immediately visible.
- Blue/indigo/violet palette (`#2563eb` / `#4f46e5` / `#7c3aed`) transitions from content to analytics, adding depth.
- Text lines animate first as "input," then the stat badges appear as "output," telling the counting story.
