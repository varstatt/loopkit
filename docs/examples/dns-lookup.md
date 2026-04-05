# DNS Lookup

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A tree-like hierarchy with two root entries and their sub-entries, representing DNS record resolution.

## Schema

```js
export const dnsLookup = {
  width: 280, height: 280, background: '#cffafe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Root entry 1 dot + line
    { type: 'circle', style: { cx: 36, cy: 60, r: 6, fill: '#0891b2' }, animate: { r: [0, 6], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 50, y: 57, width: 110, height: 6, fill: '#0e7490', rx: 3 }, animate: { width: [0, 110], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Sub-entry 1a
    { type: 'circle', style: { cx: 56, cy: 88, r: 4, fill: '#06b6d4' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 68, y: 85, width: 90, height: 6, fill: '#22d3ee', rx: 3 }, animate: { width: [0, 90], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // Sub-entry 1b
    { type: 'circle', style: { cx: 56, cy: 112, r: 4, fill: '#06b6d4' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 68, y: 109, width: 80, height: 6, fill: '#22d3ee', rx: 3 }, animate: { width: [0, 80], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Root entry 2 dot + line
    { type: 'circle', style: { cx: 36, cy: 152, r: 6, fill: '#0891b2' }, animate: { r: [0, 6], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 50, y: 149, width: 120, height: 6, fill: '#0e7490', rx: 3 }, animate: { width: [0, 120], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // Sub-entry 2a
    { type: 'circle', style: { cx: 56, cy: 180, r: 4, fill: '#06b6d4' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 68, y: 177, width: 100, height: 6, fill: '#22d3ee', rx: 3 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },

    // Sub-entry 2b
    { type: 'circle', style: { cx: 56, cy: 204, r: 4, fill: '#06b6d4' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 68, y: 201, width: 85, height: 6, fill: '#22d3ee', rx: 3 }, animate: { width: [0, 85], opacity: [0, 1], sequence: 5, duration: 0.5, easing: 'ease-out' } },

    // Decorative circle (bottom-right)
    { type: 'circle', style: { cx: 240, cy: 240, r: 22, fill: '#0891b2', opacity: 0.15 }, animate: { r: [0, 22], opacity: [0, 0.15], sequence: 6, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Two root entries with larger dots and two indented sub-entries each create a clear tree hierarchy, mirroring DNS record nesting (domain > A, CNAME, etc.).
- Cyan/sky/blue palette (`#0891b2` / `#0e7490` / `#06b6d4` / `#22d3ee`) on a light cyan background evokes networking and infrastructure.
- Root entries use darker, larger dots; sub-entries use lighter, smaller dots to show hierarchy depth.
- Each root and its children animate as a group before moving to the next root, suggesting progressive DNS resolution.
