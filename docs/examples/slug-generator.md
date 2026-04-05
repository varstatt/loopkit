# Slug Generator

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A title line, an input box containing slug text, and three decorative dots, representing URL slug generation.

## Schema

```js
export const slugGenerator = {
  width: 280, height: 280, background: '#ffe4e6',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Title line
    { type: 'rect', style: { x: 32, y: 40, width: 160, height: 8, fill: '#e11d48', rx: 4 }, animate: { width: [0, 160], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Input box
    { type: 'rect', style: { x: 24, y: 72, width: 232, height: 44, fill: '#ffffff', rx: 8, stroke: '#fda4af', strokeWidth: 2 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // Slug text inside input
    { type: 'text', content: 'my-awesome-page', style: { x: 140, y: 100, fontSize: 14, fontWeight: 600, color: '#be185d', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Output slug line
    { type: 'rect', style: { x: 32, y: 140, width: 180, height: 6, fill: '#f472b6', rx: 3 }, animate: { width: [0, 180], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // Three decorative processing dots
    { type: 'circle', style: { cx: 112, cy: 180, r: 5, fill: '#ec4899' }, animate: { r: [0, 5], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 136, cy: 180, r: 5, fill: '#f472b6' }, animate: { r: [0, 5], opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 160, cy: 180, r: 5, fill: '#db2777' }, animate: { r: [0, 5], opacity: [0, 1], sequence: 6, duration: 0.3, easing: 'ease-out' } },

    // Decorative circle (bottom-right)
    { type: 'circle', style: { cx: 240, cy: 240, r: 24, fill: '#f9a8d4', opacity: 0.2 }, animate: { r: [0, 24], opacity: [0, 0.2], sequence: 7, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- A white input box with pink border and slug text inside immediately communicates "text input tool."
- The slug text `my-awesome-page` uses a bold pink color to stand out against the white input background.
- Three sequential dots below suggest processing or transformation steps (spaces to hyphens, lowercasing, etc.).
- Rose/pink/fuchsia palette (`#e11d48` / `#ec4899` / `#f472b6` / `#db2777`) keeps the design vibrant and tool-oriented.
