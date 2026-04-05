# Bar Chart Race

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Five horizontal bars of decreasing width that animate in sequentially, representing an animated ranking chart.

## Schema

```js
export const barChartRace = {
  width: 280, height: 280, background: '#dbeafe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Bar 1 — longest
    { type: 'rect', style: { x: 32, y: 36, width: 220, height: 28, fill: '#2563eb', rx: 6 }, animate: { width: [0, 220], opacity: [0, 1], sequence: 0, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 40, y: 46, width: 48, height: 5, fill: '#bfdbfe', rx: 2 }, animate: { width: [0, 48], opacity: [0, 1], sequence: 0, duration: 0.3, easing: 'ease-out' } },

    // Bar 2
    { type: 'rect', style: { x: 32, y: 80, width: 180, height: 28, fill: '#3b82f6', rx: 6 }, animate: { width: [0, 180], opacity: [0, 1], sequence: 1, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 40, y: 90, width: 40, height: 5, fill: '#bfdbfe', rx: 2 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },

    // Bar 3
    { type: 'rect', style: { x: 32, y: 124, width: 140, height: 28, fill: '#60a5fa', rx: 6 }, animate: { width: [0, 140], opacity: [0, 1], sequence: 2, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 40, y: 134, width: 36, height: 5, fill: '#dbeafe', rx: 2 }, animate: { width: [0, 36], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },

    // Bar 4
    { type: 'rect', style: { x: 32, y: 168, width: 100, height: 28, fill: '#93c5fd', rx: 6 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 3, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 40, y: 178, width: 32, height: 5, fill: '#dbeafe', rx: 2 }, animate: { width: [0, 32], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },

    // Bar 5 — shortest
    { type: 'rect', style: { x: 32, y: 212, width: 64, height: 28, fill: '#bfdbfe', rx: 6 }, animate: { width: [0, 64], opacity: [0, 1], sequence: 4, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 40, y: 222, width: 28, height: 5, fill: '#e0f2fe', rx: 2 }, animate: { width: [0, 28], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Five bars in descending width create a clear ranking visual, the core concept behind bar chart racing.
- Each bar includes a small inner label line (lighter rect) that mimics a category name rendered on top of the bar.
- Blue/cyan/teal progression from dark (`#2563eb`) to light (`#bfdbfe`) reinforces the ranking order through color intensity.
- Bars animate from zero width outward with `ease-out`, giving a satisfying "race to position" effect.
