# Content Calendar

> **Live demo:** [varstatt.com](https://varstatt.com)

A 7x5 grid of small calendar cells with 6 scattered colored dots that scale up to represent scheduled content items across different days.

## Schema

```js
export const contentCalendar = {
  width: 460, height: 280, background: '#f8fafc',
  stagger: 0.08, trigger: 'hover', hold: 2,
  elements: [
    // Day-of-week headers
    { type: 'text', content: 'M', style: { x: 48, y: 28, fontSize: 9, fontWeight: 'bold', color: '#94a3b8' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'T', style: { x: 106, y: 28, fontSize: 9, fontWeight: 'bold', color: '#94a3b8' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'W', style: { x: 162, y: 28, fontSize: 9, fontWeight: 'bold', color: '#94a3b8' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'T', style: { x: 220, y: 28, fontSize: 9, fontWeight: 'bold', color: '#94a3b8' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'F', style: { x: 278, y: 28, fontSize: 9, fontWeight: 'bold', color: '#94a3b8' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'S', style: { x: 336, y: 28, fontSize: 9, fontWeight: 'bold', color: '#94a3b8' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'S', style: { x: 394, y: 28, fontSize: 9, fontWeight: 'bold', color: '#94a3b8' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.2, easing: 'ease-out' } },

    // Calendar grid: 7 columns x 5 rows
    // Row 1 (y: 38)
    { type: 'rect', style: { x: 32, y: 38, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 90, y: 38, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 38, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 206, y: 38, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 264, y: 38, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 322, y: 38, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 380, y: 38, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.15, easing: 'ease-out' } },

    // Row 2 (y: 82)
    { type: 'rect', style: { x: 32, y: 82, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 90, y: 82, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 82, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 206, y: 82, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 264, y: 82, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 322, y: 82, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 380, y: 82, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.15, easing: 'ease-out' } },

    // Row 3 (y: 126)
    { type: 'rect', style: { x: 32, y: 126, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 90, y: 126, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 126, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 206, y: 126, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 264, y: 126, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 322, y: 126, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 380, y: 126, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.15, easing: 'ease-out' } },

    // Row 4 (y: 170)
    { type: 'rect', style: { x: 32, y: 170, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 90, y: 170, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 170, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 206, y: 170, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 264, y: 170, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 322, y: 170, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 380, y: 170, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.15, easing: 'ease-out' } },

    // Row 5 (y: 214)
    { type: 'rect', style: { x: 32, y: 214, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 90, y: 214, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 214, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 206, y: 214, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 264, y: 214, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 322, y: 214, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.15, easing: 'ease-out' } },
    { type: 'rect', style: { x: 380, y: 214, width: 48, height: 38, fill: '#f1f5f9', rx: 4 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.15, easing: 'ease-out' } },

    // Colored content dots scattered on specific days
    // Blog post (blue) - Tuesday week 1
    { type: 'circle', style: { cx: 114, cy: 52, r: 7, fill: '#3b82f6' }, animate: { scale: [0, 1], sequence: 7, duration: 0.3, easing: 'ease-out' } },
    // Social post (pink) - Friday week 1
    { type: 'circle', style: { cx: 288, cy: 52, r: 7, fill: '#ec4899' }, animate: { scale: [0, 1], sequence: 8, duration: 0.3, easing: 'ease-out' } },
    // Newsletter (amber) - Wednesday week 2
    { type: 'circle', style: { cx: 172, cy: 96, r: 7, fill: '#f59e0b' }, animate: { scale: [0, 1], sequence: 9, duration: 0.3, easing: 'ease-out' } },
    // Blog post (blue) - Monday week 3
    { type: 'circle', style: { cx: 56, cy: 140, r: 7, fill: '#3b82f6' }, animate: { scale: [0, 1], sequence: 10, duration: 0.3, easing: 'ease-out' } },
    // Video (purple) - Thursday week 4
    { type: 'circle', style: { cx: 230, cy: 184, r: 7, fill: '#8b5cf6' }, animate: { scale: [0, 1], sequence: 11, duration: 0.3, easing: 'ease-out' } },
    // Social post (pink) - Tuesday week 5
    { type: 'circle', style: { cx: 114, cy: 228, r: 7, fill: '#ec4899' }, animate: { scale: [0, 1], sequence: 12, duration: 0.3, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Two-phase animation**: the grid cells fade in row-by-row (sequences 1--5 at 0.08s stagger = rows appear every ~80ms), then the colored dots pop in individually (sequences 7--12) after the grid is established.
- Grid cells are rendered per-row with the same sequence value so all 7 cells in a row appear together, creating a top-to-bottom sweep effect.
- The 0.08s stagger is very tight -- the entire grid appears in under 0.5s, leaving time for the dots to be the main event.
- Six colored dots use a simple category-color mapping (blue = blog, pink = social, amber = newsletter, purple = video) that reads as a real content schedule.
- Dots are centered within their respective cells. The `scale: [0, 1]` animation makes them pop like items being added to a calendar.
