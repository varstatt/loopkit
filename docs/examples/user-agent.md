# User Agent

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Title line with a 2x2 grid of info cards showing parsed browser metadata fields, in warm amber tones.

## Schema

```js
export const userAgent = {
  width: 280, height: 280, background: '#ffedd5',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Title
    { type: 'text', content: 'User-Agent', style: { x: 24, y: 38, fontSize: 16, fontWeight: 'bold', color: '#9a3412' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Card 1 — top-left
    { type: 'rect', style: { x: 24, y: 56, width: 108, height: 80, fill: '#fef3c7', rx: 10 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 36, y: 72, width: 64, height: 5, fill: '#f59e0b', rx: 2 }, animate: { width: [0, 64], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 36, y: 84, width: 80, height: 4, fill: '#fcd34d', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // Card 2 — top-right
    { type: 'rect', style: { x: 148, y: 56, width: 108, height: 80, fill: '#fee2e2', rx: 10 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 72, width: 72, height: 5, fill: '#ef4444', rx: 2 }, animate: { width: [0, 72], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 84, width: 56, height: 4, fill: '#fca5a5', rx: 2 }, animate: { width: [0, 56], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Card 3 — bottom-left
    { type: 'rect', style: { x: 24, y: 150, width: 108, height: 80, fill: '#ffedd5', stroke: '#fb923c', strokeWidth: 1.5, rx: 10 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 36, y: 166, width: 58, height: 5, fill: '#fb923c', rx: 2 }, animate: { width: [0, 58], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 36, y: 178, width: 76, height: 4, fill: '#fdba74', rx: 2 }, animate: { width: [0, 76], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Card 4 — bottom-right
    { type: 'rect', style: { x: 148, y: 150, width: 108, height: 80, fill: '#fef3c7', rx: 10 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 166, width: 68, height: 5, fill: '#d97706', rx: 2 }, animate: { width: [0, 68], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 178, width: 84, height: 4, fill: '#fbbf24', rx: 2 }, animate: { width: [0, 84], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle — bottom-right
    { type: 'circle', style: { cx: 258, cy: 258, r: 18, fill: '#f59e0b', opacity: 0.15 }, animate: { r: [0, 18], opacity: [0, 0.15], sequence: 5, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Four rounded cards in a 2x2 grid represent parsed user-agent fields (browser, OS, device, engine).
- Each card contains two short bars mimicking key-value metadata lines.
- Warm amber-to-red palette (`#f59e0b` / `#fb923c` / `#ef4444`) mirrors the cautious, diagnostic nature of user-agent parsing.
- A faint decorative circle in the bottom-right adds depth without competing for attention.
