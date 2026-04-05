# OG Preview

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A large image placeholder on top with title and description lines below, representing an Open Graph card preview.

## Schema

```js
export const ogPreview = {
  width: 280, height: 280, background: '#ffedd5',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Image placeholder (large rect)
    { type: 'rect', style: { x: 24, y: 24, width: 232, height: 120, fill: '#f97316', rx: 8, opacity: 0.7 }, animate: { opacity: [0, 0.7], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Image icon hint (small rect inside)
    { type: 'rect', style: { x: 120, y: 64, width: 40, height: 30, fill: '#ea580c', rx: 4 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // Title line
    { type: 'rect', style: { x: 24, y: 164, width: 180, height: 10, fill: '#c2410c', rx: 4 }, animate: { width: [0, 180], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Description line 1
    { type: 'rect', style: { x: 24, y: 188, width: 220, height: 6, fill: '#fb923c', rx: 3 }, animate: { width: [0, 220], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // Description line 2
    { type: 'rect', style: { x: 24, y: 202, width: 190, height: 6, fill: '#fdba74', rx: 3 }, animate: { width: [0, 190], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },

    // Description line 3
    { type: 'rect', style: { x: 24, y: 216, width: 160, height: 6, fill: '#fb923c', rx: 3 }, animate: { width: [0, 160], opacity: [0, 1], sequence: 5, duration: 0.5, easing: 'ease-out' } },

    // Decorative circle (bottom-right)
    { type: 'circle', style: { cx: 244, cy: 248, r: 20, fill: '#ea580c', opacity: 0.15 }, animate: { r: [0, 20], opacity: [0, 0.15], sequence: 6, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- The large image placeholder on top dominates the layout, matching how OG cards display their preview images prominently.
- A bold title line below the image uses a darker orange (`#c2410c`), followed by lighter description lines that taper in width.
- Orange/amber/yellow palette (`#f97316` / `#ea580c` / `#fb923c` / `#fdba74`) creates a warm, social-media-friendly feel.
- The image appears first, then title, then description lines unfurl, mirroring how a browser renders an OG card preview.
