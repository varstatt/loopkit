# Product Requirements

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

A document card containing two heading lines and six body lines, representing a PRD. Green/lime palette on a lime-tinted background, centered on a 460x280 canvas.

## Schema

```js
export const productRequirements = {
  width: 460, height: 280, background: '#ecfccb',
  stagger: 0.3, trigger: 'hover',
  elements: [
    // Document card
    { type: 'rect', style: { x: 120, y: 40, width: 220, height: 200, fill: '#f7fee7', rx: 12, opacity: 0.7 }, animate: { opacity: [0, 0.7], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    // Heading line
    { type: 'rect', style: { x: 145, y: 65, width: 130, height: 6, fill: '#65a30d', rx: 3, opacity: 0.5 }, animate: { width: [0, 130], opacity: [0, 0.5], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    // Body lines (section 1)
    { type: 'rect', style: { x: 145, y: 85, width: 170, height: 4, fill: '#86efac', rx: 2, opacity: 0.4 }, animate: { width: [0, 170], opacity: [0, 0.4], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 145, y: 97, width: 150, height: 4, fill: '#86efac', rx: 2, opacity: 0.35 }, animate: { width: [0, 150], opacity: [0, 0.35], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 145, y: 109, width: 160, height: 4, fill: '#86efac', rx: 2, opacity: 0.35 }, animate: { width: [0, 160], opacity: [0, 0.35], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    // Second heading
    { type: 'rect', style: { x: 145, y: 133, width: 110, height: 6, fill: '#65a30d', rx: 3, opacity: 0.5 }, animate: { width: [0, 110], opacity: [0, 0.5], sequence: 5, duration: 0.5, easing: 'ease-out' } },
    // Body lines (section 2)
    { type: 'rect', style: { x: 145, y: 153, width: 170, height: 4, fill: '#86efac', rx: 2, opacity: 0.4 }, animate: { width: [0, 170], opacity: [0, 0.4], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 145, y: 165, width: 140, height: 4, fill: '#86efac', rx: 2, opacity: 0.35 }, animate: { width: [0, 140], opacity: [0, 0.35], sequence: 7, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Document card wrapper** — a 220x200 rounded rectangle (`#f7fee7`) provides a container for the text lines, giving the composition a cohesive "document" feel rather than floating lines.
- The card appears first (sequence 0), then content fills in — heading, body lines, second heading, more body lines.
- Heading lines are thicker (`6px`) and use a darker green (`#65a30d`) to distinguish structure from content.
- Body lines use lighter `#86efac` and vary in width (140--170px) to suggest realistic paragraph wrapping.
- The entire composition is centered: card at `x: 120` with `width: 220` spans from 120 to 340, centered on 230.
