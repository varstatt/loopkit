# QR Code

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A stylized QR code with a 5x5 grid of modules and corner finder patterns.

## Schema

```js
export const qrCode = {
  width: 280, height: 280, background: '#f1f5f9',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Top-left finder pattern
    { type: 'rect', style: { x: 52, y: 52, width: 42, height: 42, fill: 'none', stroke: '#1e293b', strokeWidth: 4, rx: 4 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 62, y: 62, width: 22, height: 22, fill: '#1e293b', rx: 2 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Top-right finder pattern
    { type: 'rect', style: { x: 186, y: 52, width: 42, height: 42, fill: 'none', stroke: '#1e293b', strokeWidth: 4, rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 196, y: 62, width: 22, height: 22, fill: '#1e293b', rx: 2 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // 5x5 data grid (centered area) -- row 1
    { type: 'rect', style: { x: 108, y: 108, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 128, y: 108, width: 14, height: 14, fill: '#94a3b8', rx: 2 }, animate: { opacity: [0, 0.4], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 108, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 168, y: 108, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 188, y: 108, width: 14, height: 14, fill: '#94a3b8', rx: 2 }, animate: { opacity: [0, 0.4], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Row 2
    { type: 'rect', style: { x: 108, y: 128, width: 14, height: 14, fill: '#94a3b8', rx: 2 }, animate: { opacity: [0, 0.4], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 128, y: 128, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 128, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 168, y: 128, width: 14, height: 14, fill: '#94a3b8', rx: 2 }, animate: { opacity: [0, 0.4], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 188, y: 128, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Row 3
    { type: 'rect', style: { x: 108, y: 148, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 128, y: 148, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 148, width: 14, height: 14, fill: '#94a3b8', rx: 2 }, animate: { opacity: [0, 0.4], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 168, y: 148, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 188, y: 148, width: 14, height: 14, fill: '#94a3b8', rx: 2 }, animate: { opacity: [0, 0.4], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Row 4
    { type: 'rect', style: { x: 108, y: 168, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 128, y: 168, width: 14, height: 14, fill: '#94a3b8', rx: 2 }, animate: { opacity: [0, 0.4], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 168, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 168, y: 168, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 188, y: 168, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Row 5
    { type: 'rect', style: { x: 108, y: 188, width: 14, height: 14, fill: '#94a3b8', rx: 2 }, animate: { opacity: [0, 0.4], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 128, y: 188, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 188, width: 14, height: 14, fill: '#94a3b8', rx: 2 }, animate: { opacity: [0, 0.4], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 168, y: 188, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 188, y: 188, width: 14, height: 14, fill: '#334155', rx: 2 }, animate: { opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Two finder patterns (top-left, top-right) use bordered rects with solid inner squares, matching real QR code anatomy.
- The 5x5 data grid uses dark (`#334155`) for filled modules and light (`#94a3b8` at 0.4 opacity) for empty ones, creating a recognizable pattern.
- Finder patterns appear first (sequence 0-1), then data rows reveal top to bottom (sequence 2-6), mimicking a scanner reading the code.
- The gray/slate palette keeps the design neutral and technical, fitting the QR code's utility nature.
