# UUID Generator

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Three rows of UUID-like segments with dot separators representing generated unique identifiers.

## Schema

```js
export const uuidGenerator = {
  width: 280, height: 280, background: '#dbeafe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Row 1 segments
    { type: 'rect', style: { x: 28, y: 80, width: 52, height: 10, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 52], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 86, cy: 85, r: 2, fill: '#6366f1' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 92, y: 80, width: 28, height: 10, fill: '#6366f1', rx: 3 }, animate: { width: [0, 28], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 126, cy: 85, r: 2, fill: '#6366f1' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 132, y: 80, width: 28, height: 10, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 28], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 166, cy: 85, r: 2, fill: '#6366f1' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 172, y: 80, width: 28, height: 10, fill: '#6366f1', rx: 3 }, animate: { width: [0, 28], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 206, cy: 85, r: 2, fill: '#6366f1' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 212, y: 80, width: 40, height: 10, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Row 2 segments
    { type: 'rect', style: { x: 28, y: 120, width: 52, height: 10, fill: '#6366f1', rx: 3 }, animate: { width: [0, 52], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 86, cy: 125, r: 2, fill: '#3b82f6' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 92, y: 120, width: 28, height: 10, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 28], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 126, cy: 125, r: 2, fill: '#3b82f6' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 132, y: 120, width: 28, height: 10, fill: '#6366f1', rx: 3 }, animate: { width: [0, 28], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 166, cy: 125, r: 2, fill: '#3b82f6' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 172, y: 120, width: 28, height: 10, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 28], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 206, cy: 125, r: 2, fill: '#3b82f6' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 212, y: 120, width: 40, height: 10, fill: '#6366f1', rx: 3 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    // Row 3 segments
    { type: 'rect', style: { x: 28, y: 160, width: 52, height: 10, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 52], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 86, cy: 165, r: 2, fill: '#6366f1' }, animate: { opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 92, y: 160, width: 28, height: 10, fill: '#6366f1', rx: 3 }, animate: { width: [0, 28], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 126, cy: 165, r: 2, fill: '#6366f1' }, animate: { opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 132, y: 160, width: 28, height: 10, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 28], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 166, cy: 165, r: 2, fill: '#6366f1' }, animate: { opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 172, y: 160, width: 28, height: 10, fill: '#6366f1', rx: 3 }, animate: { width: [0, 28], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 206, cy: 165, r: 2, fill: '#6366f1' }, animate: { opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 212, y: 160, width: 40, height: 10, fill: '#3b82f6', rx: 3 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle bottom-left
    { type: 'circle', style: { cx: 44, cy: 236, r: 24, fill: '#93c5fd', opacity: 0.4 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.4], sequence: 5, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Three rows of five segments each (8-4-4-4-12 character width pattern) mirror the UUID `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` format.
- Small dot circles between segments represent the hyphens in a UUID string.
- Each row animates as a unit with spacing between sequence numbers (0, 2, 4) to give each UUID its own beat.
- Blue/indigo palette (`#dbeafe` / `#3b82f6` / `#6366f1`) alternates between segments to visually distinguish the five sections.
