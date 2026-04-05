# Copy-Paste Character

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A 5x3 grid of character cells displaying special Unicode characters, representing a character picker/clipboard tool.

## Schema

```js
export const copyPasteCharacter = {
  width: 280, height: 280, background: '#e0f2fe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Row 1
    { type: 'badge', content: '\u2190', style: { x: 20, y: 32, fontSize: 14, fontWeight: 'bold', color: '#0369a1', bg: '#bae6fd', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 0, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u2192', style: { x: 68, y: 32, fontSize: 14, fontWeight: 'bold', color: '#0369a1', bg: '#bae6fd', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 0, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u2191', style: { x: 116, y: 32, fontSize: 14, fontWeight: 'bold', color: '#0369a1', bg: '#bae6fd', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 0, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u2193', style: { x: 164, y: 32, fontSize: 14, fontWeight: 'bold', color: '#0369a1', bg: '#bae6fd', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 0, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u2194', style: { x: 212, y: 32, fontSize: 14, fontWeight: 'bold', color: '#0369a1', bg: '#bae6fd', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 0, duration: 0.35, easing: 'ease-out' } },

    // Row 2
    { type: 'badge', content: '\u00a9', style: { x: 20, y: 84, fontSize: 14, fontWeight: 'bold', color: '#0e7490', bg: '#a5f3fc', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 1, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u00ae', style: { x: 68, y: 84, fontSize: 14, fontWeight: 'bold', color: '#0e7490', bg: '#a5f3fc', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 1, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u2122', style: { x: 116, y: 84, fontSize: 14, fontWeight: 'bold', color: '#0e7490', bg: '#a5f3fc', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 1, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u00b0', style: { x: 164, y: 84, fontSize: 14, fontWeight: 'bold', color: '#0e7490', bg: '#a5f3fc', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 1, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u00b1', style: { x: 212, y: 84, fontSize: 14, fontWeight: 'bold', color: '#0e7490', bg: '#a5f3fc', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 1, duration: 0.35, easing: 'ease-out' } },

    // Row 3
    { type: 'badge', content: '\u2605', style: { x: 20, y: 136, fontSize: 14, fontWeight: 'bold', color: '#0d9488', bg: '#99f6e4', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 2, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u2665', style: { x: 68, y: 136, fontSize: 14, fontWeight: 'bold', color: '#0d9488', bg: '#99f6e4', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 2, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u266a', style: { x: 116, y: 136, fontSize: 14, fontWeight: 'bold', color: '#0d9488', bg: '#99f6e4', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 2, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u2660', style: { x: 164, y: 136, fontSize: 14, fontWeight: 'bold', color: '#0d9488', bg: '#99f6e4', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 2, duration: 0.35, easing: 'ease-out' } },
    { type: 'badge', content: '\u2663', style: { x: 212, y: 136, fontSize: 14, fontWeight: 'bold', color: '#0d9488', bg: '#99f6e4', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 2, duration: 0.35, easing: 'ease-out' } },

    // Bottom labels
    { type: 'rect', style: { x: 24, y: 196, width: 100, height: 5, fill: '#7dd3fc', rx: 2 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 24, y: 208, width: 72, height: 4, fill: '#bae6fd', rx: 2 }, animate: { width: [0, 72], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },

    // Decorative circle — bottom-right
    { type: 'circle', style: { cx: 250, cy: 250, r: 22, fill: '#38bdf8', opacity: 0.15 }, animate: { r: [0, 22], opacity: [0, 0.15], sequence: 4, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- A 5x3 grid of badge elements displays recognizable Unicode characters: arrows, legal symbols, and card suits.
- Each row uses a slightly different color tint (sky, cyan, teal) to group character categories visually.
- Badge `isLabel: true` renders each character in a rounded-rect cell, mimicking a character picker UI.
- Rows animate in together (shared `sequence` per row) for a wave-like reveal across the grid.
- A faint decorative circle in the bottom-right and two short bars below the grid add visual weight to the lower portion of the canvas.
