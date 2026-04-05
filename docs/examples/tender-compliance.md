# Tender Compliance

> **Live demo:** [varstatt.com](https://varstatt.com)

A before/after transformation: three faded document shapes on the left dissolve while a structured compliance output panel on the right fades in with checklist items and progress bars.

## Schema

```js
export const tenderCompliance = {
  width: 460, height: 280, background: '#fefce8',
  stagger: 0.3, trigger: 'hover', hold: 2.5,
  elements: [
    // Left side: 3 "source document" rects that fade out
    { type: 'rect', style: { x: 24, y: 30, width: 120, height: 155, fill: '#fef9c3', rx: 6, opacity: 0.3 }, animate: { opacity: [0.9, 0.3], sequence: 0, duration: 0.6, easing: 'ease-in' } },
    { type: 'rect', style: { x: 36, y: 42, width: 120, height: 155, fill: '#fef08a', rx: 6, opacity: 0.3 }, animate: { opacity: [0.9, 0.3], sequence: 0, duration: 0.6, easing: 'ease-in' } },
    { type: 'rect', style: { x: 48, y: 54, width: 120, height: 155, fill: '#fde047', rx: 6, opacity: 0.3 }, animate: { opacity: [0.9, 0.3], sequence: 0, duration: 0.6, easing: 'ease-in' } },

    // Document lines on the front document
    { type: 'rect', style: { x: 58, y: 68, width: 90, height: 4, fill: '#ca8a04', rx: 2, opacity: 0.2 }, animate: { opacity: [0.6, 0.2], sequence: 0, duration: 0.5, easing: 'ease-in' } },
    { type: 'rect', style: { x: 58, y: 80, width: 72, height: 4, fill: '#ca8a04', rx: 2, opacity: 0.2 }, animate: { opacity: [0.6, 0.2], sequence: 0, duration: 0.5, easing: 'ease-in' } },
    { type: 'rect', style: { x: 58, y: 92, width: 84, height: 4, fill: '#ca8a04', rx: 2, opacity: 0.2 }, animate: { opacity: [0.6, 0.2], sequence: 0, duration: 0.5, easing: 'ease-in' } },
    { type: 'rect', style: { x: 58, y: 104, width: 60, height: 4, fill: '#ca8a04', rx: 2, opacity: 0.2 }, animate: { opacity: [0.6, 0.2], sequence: 0, duration: 0.5, easing: 'ease-in' } },

    // Arrow between the two sides
    { type: 'rect', style: { x: 192, y: 133, width: 36, height: 4, fill: '#a16207', rx: 2, opacity: 0.7 }, animate: { opacity: [0, 0.7], width: [8, 36], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // Right side: compliance output panel
    { type: 'rect', style: { x: 248, y: 20, width: 192, height: 240, fill: '#ffffff', rx: 10, opacity: 1 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Panel header
    { type: 'text', content: 'Compliance', style: { x: 264, y: 48, fontSize: 12, fontWeight: 'bold', color: '#854d0e' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Checklist item 1 (check circle + line)
    { type: 'circle', style: { cx: 270, cy: 74, r: 6, fill: '#4ade80' }, animate: { scale: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 284, y: 71, width: 130, height: 5, fill: '#e5e7eb', rx: 2 }, animate: { width: [0, 130], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 284, y: 71, width: 130, height: 5, fill: '#22c55e', rx: 2 }, animate: { width: [0, 130], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // Checklist item 2
    { type: 'circle', style: { cx: 270, cy: 100, r: 6, fill: '#4ade80' }, animate: { scale: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 284, y: 97, width: 130, height: 5, fill: '#e5e7eb', rx: 2 }, animate: { width: [0, 130], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 284, y: 97, width: 104, height: 5, fill: '#22c55e', rx: 2 }, animate: { width: [0, 104], sequence: 4, duration: 0.5, easing: 'ease-out' } },

    // Checklist item 3
    { type: 'circle', style: { cx: 270, cy: 126, r: 6, fill: '#facc15' }, animate: { scale: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 284, y: 123, width: 130, height: 5, fill: '#e5e7eb', rx: 2 }, animate: { width: [0, 130], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 284, y: 123, width: 78, height: 5, fill: '#eab308', rx: 2 }, animate: { width: [0, 78], sequence: 5, duration: 0.5, easing: 'ease-out' } },

    // Checklist item 4
    { type: 'circle', style: { cx: 270, cy: 152, r: 6, fill: '#4ade80' }, animate: { scale: [0, 1], sequence: 6, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 284, y: 149, width: 130, height: 5, fill: '#e5e7eb', rx: 2 }, animate: { width: [0, 130], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 284, y: 149, width: 120, height: 5, fill: '#22c55e', rx: 2 }, animate: { width: [0, 120], sequence: 6, duration: 0.5, easing: 'ease-out' } },

    // Checklist item 5
    { type: 'circle', style: { cx: 270, cy: 178, r: 6, fill: '#f87171' }, animate: { scale: [0, 1], sequence: 7, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 284, y: 175, width: 130, height: 5, fill: '#e5e7eb', rx: 2 }, animate: { width: [0, 130], sequence: 7, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 284, y: 175, width: 32, height: 5, fill: '#ef4444', rx: 2 }, animate: { width: [0, 32], sequence: 7, duration: 0.5, easing: 'ease-out' } },

    // Summary score badge at bottom
    { type: 'badge', content: '82%', style: { x: 304, y: 206, width: 56, height: 28, fill: '#22c55e', color: '#ffffff', fontSize: 13, fontWeight: 'bold', rx: 14 }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 8, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Two-phase narrative**: documents fade _out_ (sequence 0) while the compliance panel fades _in_ (sequence 2+), creating a clear before/after transformation with the arrow bridging them at sequence 1.
- Each progress bar is a layered pair: a gray background rect and a colored fill rect. The fill grows to different widths (130, 104, 78, 120, 32) to show varied compliance levels.
- Status circles use traffic-light colors -- green for passing, yellow for partial, red for failing -- making the compliance report immediately readable.
- The final `82%` badge pops in last as the summary payoff. Its pill shape (`rx: 14`) gives it a distinct look from the rectangular progress bars.
- Yellow background (`#fefce8`) ties to the "tender/document" theme, distinct from the greens/reds used for compliance status.
