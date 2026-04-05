# Barcode

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A center group of varying-width vertical bars representing a standard barcode pattern.

## Schema

```js
export const barcode = {
  width: 280, height: 280, background: '#f5f5f4',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Barcode bars (varying widths, centered)
    { type: 'rect', style: { x: 48, y: 64, width: 4, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 56, y: 64, width: 2, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 64, y: 64, width: 6, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 76, y: 64, width: 2, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 84, y: 64, width: 4, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 96, y: 64, width: 6, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 108, y: 64, width: 2, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 116, y: 64, width: 4, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 128, y: 64, width: 2, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 136, y: 64, width: 6, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 148, y: 64, width: 4, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 160, y: 64, width: 2, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 168, y: 64, width: 6, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 180, y: 64, width: 4, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 190, y: 64, width: 2, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 198, y: 64, width: 6, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 210, y: 64, width: 4, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 220, y: 64, width: 2, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 228, y: 64, width: 4, height: 130, fill: '#292524', rx: 1 }, animate: { height: [0, 130], opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle bottom-left
    { type: 'circle', style: { cx: 44, cy: 240, r: 22, fill: '#d6d3d1', opacity: 0.4 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.4], sequence: 7, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Nineteen vertical bars of varying widths (2, 4, 6px) and spacing create a realistic barcode silhouette.
- Bars grow downward in groups of 2-3 from left to right, creating a curtain-reveal effect.
- The stone/neutral palette (`#f5f5f4` / `#292524`) is a natural fit -- barcodes are inherently monochrome.
- Irregular bar widths and gaps avoid a uniform grid look, matching real barcode encoding patterns.
