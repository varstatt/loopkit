# Regex Tester

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A pattern line, input box, and match highlight badges representing a regular expression testing tool.

## Schema

```js
export const regexTester = {
  width: 280, height: 280, background: '#ede9fe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Pattern line (thick)
    { type: 'rect', style: { x: 32, y: 40, width: 160, height: 10, fill: '#7c3aed', rx: 4 }, animate: { width: [0, 160], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Input box
    { type: 'rect', style: { x: 32, y: 70, width: 216, height: 60, fill: '#f5f3ff', stroke: '#a78bfa', strokeWidth: 2, rx: 6 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // Input text lines inside box
    { type: 'rect', style: { x: 44, y: 84, width: 180, height: 5, fill: '#c4b5fd', rx: 2 }, animate: { width: [0, 180], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 96, width: 140, height: 5, fill: '#c4b5fd', rx: 2 }, animate: { width: [0, 140], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 108, width: 165, height: 5, fill: '#c4b5fd', rx: 2 }, animate: { width: [0, 165], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Match highlight badges
    { type: 'badge', content: 'Match 1', style: { x: 32, y: 156, fontSize: 9, fontWeight: 'bold', color: '#ffffff', bg: '#7c3aed', isLabel: true }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'badge', content: 'Match 2', style: { x: 108, y: 156, fontSize: 9, fontWeight: 'bold', color: '#ffffff', bg: '#8b5cf6', isLabel: true }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'badge', content: 'Match 3', style: { x: 184, y: 156, fontSize: 9, fontWeight: 'bold', color: '#ffffff', bg: '#a78bfa', isLabel: true }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle bottom-right
    { type: 'circle', style: { cx: 244, cy: 240, r: 26, fill: '#c4b5fd', opacity: 0.4 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.4], sequence: 6, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- The thick pattern line at the top represents the regex input, visually distinct from the test content below.
- The bordered input box contains three text lines, suggesting multi-line test content.
- Three match badges appear sequentially, each slightly lighter in violet, conveying progressive match discovery.
- Violet/purple/indigo palette (`#ede9fe` / `#7c3aed` / `#8b5cf6` / `#a78bfa`) gives a technical-creative feel suited to regex work.
