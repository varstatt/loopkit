# CORS Tester

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Title line with a 2x2 grid of result cards: two green success, one rose fail, and one amber warning, representing cross-origin request test results.

## Schema

```js
export const corsTester = {
  width: 280, height: 280, background: '#ffe4e6',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Title
    { type: 'text', content: 'CORS Test', style: { x: 24, y: 36, fontSize: 15, fontWeight: 'bold', color: '#9f1239' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Card 1 — top-left (green, pass)
    { type: 'rect', style: { x: 24, y: 54, width: 108, height: 80, fill: '#dcfce7', rx: 10 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'badge', content: 'PASS', style: { x: 40, y: 72, fontSize: 10, fontWeight: 'bold', color: '#ffffff', bg: '#16a34a', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 36, y: 96, width: 72, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 72], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 36, y: 106, width: 56, height: 4, fill: '#bbf7d0', rx: 2 }, animate: { width: [0, 56], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },

    // Card 2 — top-right (green, pass)
    { type: 'rect', style: { x: 148, y: 54, width: 108, height: 80, fill: '#dcfce7', rx: 10 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'badge', content: 'PASS', style: { x: 164, y: 72, fontSize: 10, fontWeight: 'bold', color: '#ffffff', bg: '#16a34a', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 96, width: 80, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 106, width: 64, height: 4, fill: '#bbf7d0', rx: 2 }, animate: { width: [0, 64], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },

    // Card 3 — bottom-left (rose, fail)
    { type: 'rect', style: { x: 24, y: 150, width: 108, height: 80, fill: '#ffe4e6', stroke: '#fb7185', strokeWidth: 1.5, rx: 10 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'badge', content: 'FAIL', style: { x: 40, y: 168, fontSize: 10, fontWeight: 'bold', color: '#ffffff', bg: '#e11d48', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 36, y: 192, width: 68, height: 4, fill: '#fda4af', rx: 2 }, animate: { width: [0, 68], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 36, y: 202, width: 84, height: 4, fill: '#fecdd3', rx: 2 }, animate: { width: [0, 84], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },

    // Card 4 — bottom-right (amber, warning)
    { type: 'rect', style: { x: 148, y: 150, width: 108, height: 80, fill: '#fef3c7', rx: 10 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'badge', content: 'WARN', style: { x: 164, y: 168, fontSize: 10, fontWeight: 'bold', color: '#ffffff', bg: '#d97706', isLabel: true }, animate: { opacity: [0, 1], scale: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 192, width: 76, height: 4, fill: '#fcd34d', rx: 2 }, animate: { width: [0, 76], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 202, width: 60, height: 4, fill: '#fde68a', rx: 2 }, animate: { width: [0, 60], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- A 2x2 grid mirrors a test-results dashboard: two passes (green), one fail (rose), one warning (amber).
- Each card contains a status badge label and two description bars representing origin URL and header details.
- The fail card uses a stroke border instead of a fill to stand out visually, drawing attention to the error.
- Pink/rose background (`#ffe4e6`) sets a cautious tone appropriate for a security-related tool.
- Badge labels (PASS, FAIL, WARN) use `isLabel: true` with `scale: [0, 1]` for pop-in entrances.
