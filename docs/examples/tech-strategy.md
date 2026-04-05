# Tech Strategy

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

Three stacked horizontal layers representing a technology stack architecture, sliding in from the bottom. Cyan/sky/teal palette on an ice-blue background.

## Schema

```js
export const techStrategy = {
  width: 280, height: 280, background: '#cffafe',
  stagger: 0.4, trigger: 'autoplay', hold: 2,
  elements: [
    // Bottom layer (infrastructure) -- slides in first
    { type: 'rect', style: { x: 30, y: 185, width: 220, height: 55, fill: '#06b6d4', rx: 10, opacity: 0.85 }, animate: { y: [270, 185], opacity: [0, 0.85], sequence: 0, duration: 0.6, easing: 'ease-out' } },

    // Middle layer (platform/services)
    { type: 'rect', style: { x: 46, y: 118, width: 188, height: 55, fill: '#22d3ee', rx: 10, opacity: 0.8 }, animate: { y: [270, 118], opacity: [0, 0.8], sequence: 1, duration: 0.6, easing: 'ease-out' } },

    // Top layer (application)
    { type: 'rect', style: { x: 62, y: 51, width: 156, height: 55, fill: '#67e8f9', rx: 10, opacity: 0.75 }, animate: { y: [270, 51], opacity: [0, 0.75], sequence: 2, duration: 0.6, easing: 'ease-out' } },

    // Layer labels
    { type: 'text', content: 'Infra', style: { x: 140, y: 218, fontSize: 12, fontWeight: 'bold', color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'Platform', style: { x: 140, y: 151, fontSize: 12, fontWeight: 'bold', color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'App', style: { x: 140, y: 84, fontSize: 12, fontWeight: 'bold', color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Stagger 0.4s** spaces the three layers so each has time to land before the next arrives, emphasizing the build-up from infrastructure to application.
- All layers slide in from `y: 270` (below the canvas), stacking upward in the natural order of a technology architecture diagram.
- Each successive layer is narrower (220 / 188 / 156px) and slightly lighter, creating a pyramid/trapezoid shape that suggests stability at the base.
- Opacity decreases from bottom to top (`0.85` / `0.8` / `0.75`), reinforcing the visual hierarchy where infrastructure is the most solid foundation.
- Labels share their layer's sequence value so text arrives alongside each rectangle, keeping the composition readable at every frame.
