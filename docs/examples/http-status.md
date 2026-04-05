# HTTP Status

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Four rows each containing a colored status badge and a description line, representing HTTP response code categories.

## Schema

```js
export const httpStatus = {
  width: 280, height: 280, background: '#dbeafe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Row 1 — 200 OK (green)
    { type: 'badge', content: '200', style: { x: 24, y: 32, fontSize: 12, fontWeight: 'bold', color: '#ffffff', bg: '#16a34a', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 38, width: 120, height: 5, fill: '#86efac', rx: 2 }, animate: { width: [0, 120], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 50, width: 80, height: 4, fill: '#bbf7d0', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },

    // Row 2 — 301 Redirect (amber)
    { type: 'badge', content: '301', style: { x: 24, y: 88, fontSize: 12, fontWeight: 'bold', color: '#ffffff', bg: '#d97706', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 94, width: 140, height: 5, fill: '#fcd34d', rx: 2 }, animate: { width: [0, 140], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 106, width: 96, height: 4, fill: '#fde68a', rx: 2 }, animate: { width: [0, 96], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },

    // Row 3 — 404 Not Found (orange)
    { type: 'badge', content: '404', style: { x: 24, y: 144, fontSize: 12, fontWeight: 'bold', color: '#ffffff', bg: '#ea580c', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 150, width: 108, height: 5, fill: '#fdba74', rx: 2 }, animate: { width: [0, 108], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 162, width: 72, height: 4, fill: '#fed7aa', rx: 2 }, animate: { width: [0, 72], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },

    // Row 4 — 500 Server Error (red)
    { type: 'badge', content: '500', style: { x: 24, y: 200, fontSize: 12, fontWeight: 'bold', color: '#ffffff', bg: '#dc2626', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 206, width: 130, height: 5, fill: '#fca5a5', rx: 2 }, animate: { width: [0, 130], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 80, y: 218, width: 88, height: 4, fill: '#fecaca', rx: 2 }, animate: { width: [0, 88], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },

    // Title
    { type: 'text', content: 'HTTP Status', style: { x: 140, y: 264, fontSize: 13, fontWeight: 600, color: '#3b82f6', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Four rows map to the key HTTP status families: 2xx success (green), 3xx redirect (amber), 4xx client error (orange), 5xx server error (red).
- Each row pairs a colored badge label with two description bars, mimicking a reference table layout.
- The traffic-light color progression (green to red) is immediately intuitive for status severity.
- Blue background (`#dbeafe`) stays neutral and technical, letting the badge colors carry the semantic meaning.
- Badges use `isLabel: true` for rounded-rect rendering and `scale: [0, 1]` for a pop-in entrance.
