# Sitemap Validator

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Five indented URL-like lines showing a root entry and four child pages, representing a validated XML sitemap structure.

## Schema

```js
export const sitemapValidator = {
  width: 280, height: 280, background: '#cffafe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Root URL line
    { type: 'rect', style: { x: 24, y: 40, width: 180, height: 6, fill: '#0891b2', rx: 3 }, animate: { width: [0, 180], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 216, cy: 43, r: 4, fill: '#22d3ee' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },

    // Child URL 1 (indented)
    { type: 'rect', style: { x: 10, y: 72, width: 4, height: 4, fill: '#06b6d4', rx: 2 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 72, width: 156, height: 6, fill: '#22d3ee', rx: 3 }, animate: { width: [0, 156], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 84, width: 80, height: 4, fill: '#67e8f9', rx: 2 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // Child URL 2 (indented)
    { type: 'rect', style: { x: 10, y: 112, width: 4, height: 4, fill: '#06b6d4', rx: 2 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 112, width: 140, height: 6, fill: '#22d3ee', rx: 3 }, animate: { width: [0, 140], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 124, width: 100, height: 4, fill: '#67e8f9', rx: 2 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Child URL 3 (indented)
    { type: 'rect', style: { x: 10, y: 152, width: 4, height: 4, fill: '#06b6d4', rx: 2 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 152, width: 168, height: 6, fill: '#22d3ee', rx: 3 }, animate: { width: [0, 168], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 164, width: 72, height: 4, fill: '#67e8f9', rx: 2 }, animate: { width: [0, 72], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Child URL 4 (indented)
    { type: 'rect', style: { x: 10, y: 192, width: 4, height: 4, fill: '#06b6d4', rx: 2 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 192, width: 128, height: 6, fill: '#22d3ee', rx: 3 }, animate: { width: [0, 128], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 44, y: 204, width: 92, height: 4, fill: '#67e8f9', rx: 2 }, animate: { width: [0, 92], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Green validation dot — bottom-right
    { type: 'circle', style: { cx: 248, cy: 248, r: 10, fill: '#22c55e' }, animate: { r: [0, 10], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 248, cy: 248, r: 4, fill: '#ffffff' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- One root URL at full indent and four child URLs at deeper indent reflect an XML sitemap's hierarchical structure.
- Each URL has a primary bar (the URL) and a secondary lighter bar (metadata like lastmod or priority).
- Small bullet dots on the left connect the tree visually without needing path elements.
- A green validation dot in the bottom-right corner (with a white inner circle) signals "valid sitemap," the tool's core output.
- Cyan/sky/blue palette (`#0891b2` / `#22d3ee` / `#67e8f9`) on a light cyan background feels clean and web-native.
