# User Personas

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

Three persona silhouettes, each composed of a circle (head) and a rounded rectangle (body), popping in from left to right. Violet/purple/fuchsia palette on a soft lavender background.

## Schema

```js
export const userPersonas = {
  width: 280, height: 280, background: '#ede9fe',
  stagger: 0.35, trigger: 'autoplay', hold: 2,
  elements: [
    // Persona 1 (left) -- head
    { type: 'circle', style: { cx: 56, cy: 100, r: 22, fill: '#c4b5fd', opacity: 1 }, animate: { opacity: [0, 1], scale: [0.3, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    // Persona 1 -- body
    { type: 'rect', style: { x: 34, y: 130, width: 44, height: 64, fill: '#a78bfa', rx: 12, opacity: 1 }, animate: { opacity: [0, 1], height: [0, 64], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Persona 2 (center) -- head
    { type: 'circle', style: { cx: 140, cy: 90, r: 26, fill: '#a78bfa', opacity: 1 }, animate: { opacity: [0, 1], scale: [0.3, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    // Persona 2 -- body
    { type: 'rect', style: { x: 114, y: 124, width: 52, height: 74, fill: '#8b5cf6', rx: 14, opacity: 1 }, animate: { opacity: [0, 1], height: [0, 74], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // Persona 3 (right) -- head
    { type: 'circle', style: { cx: 224, cy: 100, r: 22, fill: '#d946ef', opacity: 1 }, animate: { opacity: [0, 1], scale: [0.3, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    // Persona 3 -- body
    { type: 'rect', style: { x: 202, y: 130, width: 44, height: 64, fill: '#c026d3', rx: 12, opacity: 1 }, animate: { opacity: [0, 1], height: [0, 64], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Ground line
    { type: 'rect', style: { x: 20, y: 210, width: 240, height: 3, fill: '#ddd6fe', rx: 2, opacity: 0.7 }, animate: { width: [0, 240], opacity: [0, 0.7], sequence: 3, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Stagger 0.35s** gives each persona its own entrance beat, left to right, mimicking the order you would present personas in a workshop.
- Head and body within each persona share the same `sequence` value so they appear as a unified silhouette.
- The center persona is slightly larger (`r: 26`, body `74px` tall) to suggest a primary persona, a common UX research pattern.
- The violet-to-fuchsia progression (`#c4b5fd` / `#a78bfa` / `#d946ef`) differentiates personas while staying within a cohesive purple family.
- Bodies animate both `opacity` and `height` (growing downward from the neck) for a natural "materializing" effect.
- The ground line at sequence 3 extends last, anchoring all three figures.
