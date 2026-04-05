# Product Requirements

> **Live demo:** [varstatt.com/discovery](https://varstatt.com/discovery)

A document layout with two heading lines and six body lines, representing a PRD. Emerald/green palette on a lime-tinted background. Lines extend from the left edge one by one.

## Schema

```js
export const productRequirements = {
  width: 280, height: 280, background: '#ecfccb',
  stagger: 0.25, trigger: 'autoplay', hold: 2,
  elements: [
    // Heading line 1 (thicker)
    { type: 'rect', style: { x: 36, y: 40, width: 160, height: 8, fill: '#65a30d', rx: 4, opacity: 0.9 }, animate: { width: [0, 160], opacity: [0, 0.9], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Heading line 2 (thicker)
    { type: 'rect', style: { x: 36, y: 58, width: 120, height: 8, fill: '#65a30d', rx: 4, opacity: 0.9 }, animate: { width: [0, 120], opacity: [0, 0.9], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // Body line 1
    { type: 'rect', style: { x: 36, y: 86, width: 200, height: 4, fill: '#86efac', rx: 2, opacity: 0.8 }, animate: { width: [0, 200], opacity: [0, 0.8], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Body line 2
    { type: 'rect', style: { x: 36, y: 102, width: 180, height: 4, fill: '#86efac', rx: 2, opacity: 0.8 }, animate: { width: [0, 180], opacity: [0, 0.8], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Body line 3
    { type: 'rect', style: { x: 36, y: 118, width: 210, height: 4, fill: '#86efac', rx: 2, opacity: 0.8 }, animate: { width: [0, 210], opacity: [0, 0.8], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Body line 4
    { type: 'rect', style: { x: 36, y: 134, width: 165, height: 4, fill: '#86efac', rx: 2, opacity: 0.8 }, animate: { width: [0, 165], opacity: [0, 0.8], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Body line 5
    { type: 'rect', style: { x: 36, y: 150, width: 195, height: 4, fill: '#86efac', rx: 2, opacity: 0.8 }, animate: { width: [0, 195], opacity: [0, 0.8], sequence: 6, duration: 0.4, easing: 'ease-out' } },

    // Body line 6
    { type: 'rect', style: { x: 36, y: 166, width: 140, height: 4, fill: '#86efac', rx: 2, opacity: 0.8 }, animate: { width: [0, 140], opacity: [0, 0.8], sequence: 7, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Stagger 0.25s** keeps lines arriving quickly -- eight lines complete in 2 seconds, matching the brisk pace of scanning a document.
- Each line has its own sequence so they extend one by one from the left, mimicking a typewriter or document-loading effect.
- Heading lines are thicker (`8px`) and use a darker green (`#65a30d`) to distinguish structure from content, just as real PRD headings stand out.
- Body lines use a lighter `#86efac` and vary in width (140--210px) to suggest realistic paragraph wrapping.
- The composition sits in the upper portion of the canvas, leaving breathing room at the bottom -- matching how a real document page has margins.
