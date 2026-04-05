# Content Feed

> **Live demo:** [varstatt.com](https://varstatt.com)

A vertical timeline of 5 posts, each with an avatar circle and text lines. Posts slide up into view with staggered timing, simulating a social media or blog feed.

## Schema

```js
export const contentFeed = {
  width: 460, height: 280, background: '#ffffff',
  stagger: 0.25, trigger: 'hover', hold: 2,
  elements: [
    // Vertical timeline line (left side)
    { type: 'rect', style: { x: 56, y: 16, width: 2, height: 248, fill: '#e2e8f0', rx: 1 }, animate: { height: [0, 248], sequence: 0, duration: 0.8, easing: 'ease-out' } },

    // Post 1
    { type: 'circle', style: { cx: 57, cy: 40, r: 12, fill: '#6366f1' }, animate: { scale: [0, 1], y: [20, 0], sequence: 1, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 30, width: 140, height: 6, fill: '#1e293b', rx: 3 }, animate: { opacity: [0, 1], y: [20, 0], sequence: 1, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 42, width: 320, height: 5, fill: '#cbd5e1', rx: 2 }, animate: { opacity: [0, 1], y: [20, 0], width: [0, 320], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 52, width: 260, height: 5, fill: '#e2e8f0', rx: 2 }, animate: { opacity: [0, 1], y: [20, 0], width: [0, 260], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // Post 2
    { type: 'circle', style: { cx: 57, cy: 92, r: 12, fill: '#ec4899' }, animate: { scale: [0, 1], y: [20, 0], sequence: 2, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 82, width: 120, height: 6, fill: '#1e293b', rx: 3 }, animate: { opacity: [0, 1], y: [20, 0], sequence: 2, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 94, width: 350, height: 5, fill: '#cbd5e1', rx: 2 }, animate: { opacity: [0, 1], y: [20, 0], width: [0, 350], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 104, width: 290, height: 5, fill: '#e2e8f0', rx: 2 }, animate: { opacity: [0, 1], y: [20, 0], width: [0, 290], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Post 3
    { type: 'circle', style: { cx: 57, cy: 144, r: 12, fill: '#f59e0b' }, animate: { scale: [0, 1], y: [20, 0], sequence: 3, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 134, width: 156, height: 6, fill: '#1e293b', rx: 3 }, animate: { opacity: [0, 1], y: [20, 0], sequence: 3, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 146, width: 300, height: 5, fill: '#cbd5e1', rx: 2 }, animate: { opacity: [0, 1], y: [20, 0], width: [0, 300], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 156, width: 240, height: 5, fill: '#e2e8f0', rx: 2 }, animate: { opacity: [0, 1], y: [20, 0], width: [0, 240], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Post 4
    { type: 'circle', style: { cx: 57, cy: 196, r: 12, fill: '#10b981' }, animate: { scale: [0, 1], y: [20, 0], sequence: 4, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 186, width: 108, height: 6, fill: '#1e293b', rx: 3 }, animate: { opacity: [0, 1], y: [20, 0], sequence: 4, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 198, width: 340, height: 5, fill: '#cbd5e1', rx: 2 }, animate: { opacity: [0, 1], y: [20, 0], width: [0, 340], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 208, width: 280, height: 5, fill: '#e2e8f0', rx: 2 }, animate: { opacity: [0, 1], y: [20, 0], width: [0, 280], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Post 5
    { type: 'circle', style: { cx: 57, cy: 248, r: 12, fill: '#8b5cf6' }, animate: { scale: [0, 1], y: [20, 0], sequence: 5, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 238, width: 132, height: 6, fill: '#1e293b', rx: 3 }, animate: { opacity: [0, 1], y: [20, 0], sequence: 5, duration: 0.35, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 250, width: 310, height: 5, fill: '#cbd5e1', rx: 2 }, animate: { opacity: [0, 1], y: [20, 0], width: [0, 310], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 260, width: 230, height: 5, fill: '#e2e8f0', rx: 2 }, animate: { opacity: [0, 1], y: [20, 0], width: [0, 230], sequence: 5, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Timeline line grows first** (sequence 0) to establish the visual spine before any posts appear.
- Each post is a group: avatar circle + author line (dark, 6px tall) + two content lines (gray, 5px tall). All elements in a post share the same `sequence` so they animate as a unit.
- The `y: [20, 0]` animation on every element creates a "slide up" effect, combined with `opacity: [0, 1]` and `scale: [0, 1]` on the avatar for a smooth entrance.
- Stagger of 0.25s means all 5 posts appear over ~1.25s -- fast enough to feel fluid but slow enough to see each post arrive individually.
- Each avatar uses a different color (indigo, pink, amber, emerald, violet) to represent different authors or content types.
- Content lines have varying widths (230--350px) to avoid a mechanical, uniform look.
