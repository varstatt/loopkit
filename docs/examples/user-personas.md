# User Personas

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

Three persona silhouettes, each composed of a circle (head) and a rounded rectangle (body), popping in from left to right. Violet/purple/fuchsia palette on soft lavender, centered on a 460x280 canvas.

## Schema

```js
export const userPersonas = {
  width: 460, height: 280, background: '#ede9fe',
  stagger: 0.3, trigger: 'hover',
  elements: [
    // Persona 1 (left) -- head
    { type: 'circle', style: { cx: 160, cy: 115, r: 22, fill: '#c4b5fd', opacity: 0.35 }, animate: { opacity: [0, 0.35], scale: [0.3, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    // Persona 1 -- body
    { type: 'rect', style: { x: 138, y: 143, width: 44, height: 52, fill: '#a78bfa', rx: 14, opacity: 0.25 }, animate: { opacity: [0, 0.25], height: [0, 52], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Persona 2 (center) -- head
    { type: 'circle', style: { cx: 230, cy: 107, r: 26, fill: '#a78bfa', opacity: 0.4 }, animate: { opacity: [0, 0.4], scale: [0.3, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    // Persona 2 -- body
    { type: 'rect', style: { x: 206, y: 139, width: 48, height: 60, fill: '#8b5cf6', rx: 16, opacity: 0.3 }, animate: { opacity: [0, 0.3], height: [0, 60], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // Persona 3 (right) -- head
    { type: 'circle', style: { cx: 300, cy: 115, r: 22, fill: '#e879f9', opacity: 0.35 }, animate: { opacity: [0, 0.35], scale: [0.3, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    // Persona 3 -- body
    { type: 'rect', style: { x: 278, y: 143, width: 44, height: 52, fill: '#d946ef', rx: 14, opacity: 0.25 }, animate: { opacity: [0, 0.25], height: [0, 52], sequence: 2, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **No ground line** — just the three persona figures, keeping the composition minimal.
- Personas are spaced 70px apart (`cx: 160, 230, 300`), centered on the canvas.
- Head and body within each persona share the same `sequence` value so they appear as a unified silhouette.
- The center persona is slightly larger (`r: 26`, body 60px tall) to suggest a primary persona — a common UX research pattern.
- The violet-to-fuchsia progression (`#c4b5fd` / `#a78bfa` / `#e879f9`) differentiates personas while staying within a cohesive purple family.
- Bodies animate both `opacity` and `height` (growing downward from the neck) for a "materializing" effect.
