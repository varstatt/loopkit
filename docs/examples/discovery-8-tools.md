# Discovery 8 Tools

> **Live demo:** [varstatt.com](https://varstatt.com)

Eight numbered badges in a 4x2 grid, each popping in with staggered timing. Every badge has a distinct accent color and two small horizontal bars underneath representing tool descriptions.

## Schema

```js
export const discovery8Tools = {
  width: 460, height: 280, background: '#fafaf9',
  stagger: 0.15, trigger: 'hover', hold: 2,
  elements: [
    // Badge colors: amber, rose, sky, violet, emerald, orange, cyan, fuchsia
    // Grid: 4 columns x 2 rows, starting at x:38 y:36, cell ~100x110, gap 12

    // Row 1
    { type: 'badge', content: '1', style: { x: 38, y: 36, width: 88, height: 88, fill: '#fef3c7', color: '#92400e', fontSize: 24, fontWeight: 'bold', rx: 12 }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 0, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 42, y: 132, width: 72, height: 4, fill: '#fcd34d', rx: 2 }, animate: { width: [0, 72], sequence: 0, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 42, y: 141, width: 52, height: 4, fill: '#fde68a', rx: 2 }, animate: { width: [0, 52], sequence: 0, duration: 0.3, easing: 'ease-out' } },

    { type: 'badge', content: '2', style: { x: 144, y: 36, width: 88, height: 88, fill: '#ffe4e6', color: '#9f1239', fontSize: 24, fontWeight: 'bold', rx: 12 }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 1, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 132, width: 68, height: 4, fill: '#fda4af', rx: 2 }, animate: { width: [0, 68], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 141, width: 80, height: 4, fill: '#fecdd3', rx: 2 }, animate: { width: [0, 80], sequence: 1, duration: 0.3, easing: 'ease-out' } },

    { type: 'badge', content: '3', style: { x: 250, y: 36, width: 88, height: 88, fill: '#e0f2fe', color: '#075985', fontSize: 24, fontWeight: 'bold', rx: 12 }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 2, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 254, y: 132, width: 76, height: 4, fill: '#7dd3fc', rx: 2 }, animate: { width: [0, 76], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 254, y: 141, width: 56, height: 4, fill: '#bae6fd', rx: 2 }, animate: { width: [0, 56], sequence: 2, duration: 0.3, easing: 'ease-out' } },

    { type: 'badge', content: '4', style: { x: 356, y: 36, width: 88, height: 88, fill: '#ede9fe', color: '#5b21b6', fontSize: 24, fontWeight: 'bold', rx: 12 }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 3, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 360, y: 132, width: 64, height: 4, fill: '#a78bfa', rx: 2 }, animate: { width: [0, 64], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 360, y: 141, width: 78, height: 4, fill: '#c4b5fd', rx: 2 }, animate: { width: [0, 78], sequence: 3, duration: 0.3, easing: 'ease-out' } },

    // Row 2
    { type: 'badge', content: '5', style: { x: 38, y: 160, width: 88, height: 88, fill: '#d1fae5', color: '#065f46', fontSize: 24, fontWeight: 'bold', rx: 12 }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 4, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 42, y: 256, width: 60, height: 4, fill: '#6ee7b7', rx: 2 }, animate: { width: [0, 60], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 42, y: 265, width: 80, height: 4, fill: '#a7f3d0', rx: 2 }, animate: { width: [0, 80], sequence: 4, duration: 0.3, easing: 'ease-out' } },

    { type: 'badge', content: '6', style: { x: 144, y: 160, width: 88, height: 88, fill: '#ffedd5', color: '#9a3412', fontSize: 24, fontWeight: 'bold', rx: 12 }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 5, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 256, width: 74, height: 4, fill: '#fdba74', rx: 2 }, animate: { width: [0, 74], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 265, width: 58, height: 4, fill: '#fed7aa', rx: 2 }, animate: { width: [0, 58], sequence: 5, duration: 0.3, easing: 'ease-out' } },

    { type: 'badge', content: '7', style: { x: 250, y: 160, width: 88, height: 88, fill: '#cffafe', color: '#155e75', fontSize: 24, fontWeight: 'bold', rx: 12 }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 6, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 254, y: 256, width: 82, height: 4, fill: '#67e8f9', rx: 2 }, animate: { width: [0, 82], sequence: 6, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 254, y: 265, width: 62, height: 4, fill: '#a5f3fc', rx: 2 }, animate: { width: [0, 62], sequence: 6, duration: 0.3, easing: 'ease-out' } },

    { type: 'badge', content: '8', style: { x: 356, y: 160, width: 88, height: 88, fill: '#fae8ff', color: '#86198f', fontSize: 24, fontWeight: 'bold', rx: 12 }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 7, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 360, y: 256, width: 70, height: 4, fill: '#e879f9', rx: 2 }, animate: { width: [0, 70], sequence: 7, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 360, y: 265, width: 84, height: 4, fill: '#f0abfc', rx: 2 }, animate: { width: [0, 84], sequence: 7, duration: 0.3, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Stagger 0.15s** is deliberately fast -- eight items need to all appear within ~1.2s total so the animation feels snappy rather than tedious.
- Each badge uses `scale: [0, 1]` for a "pop" entrance. The short 0.35s duration keeps it punchy.
- Every badge has a unique color pair (background + text) drawn from Tailwind's palette, giving the grid a colorful, tool-catalog feel.
- Two small bars underneath each badge represent brief tool descriptions. They share the same `sequence` as their parent badge so they extend in sync with the pop-in.
- The 4x2 grid is evenly distributed across the 460px width with ~12-18px gaps, keeping badges centered on the canvas.
