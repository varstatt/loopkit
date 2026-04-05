# Bubble Chart Race

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Four circles of different sizes scattered across the canvas, representing animated bubble chart data points.

## Schema

```js
export const bubbleChartRace = {
  width: 280, height: 280, background: '#d1fae5',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Bubble 1 — large, top-left area
    { type: 'circle', style: { cx: 80, cy: 100, r: 48, fill: '#059669', opacity: 0.7 }, animate: { r: [0, 48], opacity: [0, 0.7], sequence: 0, duration: 0.6, easing: 'ease-out' } },

    // Bubble 2 — medium, center-right
    { type: 'circle', style: { cx: 190, cy: 130, r: 36, fill: '#10b981', opacity: 0.7 }, animate: { r: [0, 36], opacity: [0, 0.7], sequence: 1, duration: 0.6, easing: 'ease-out' } },

    // Bubble 3 — small, top-right
    { type: 'circle', style: { cx: 210, cy: 60, r: 22, fill: '#34d399', opacity: 0.8 }, animate: { r: [0, 22], opacity: [0, 0.8], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Bubble 4 — medium-large, bottom-center
    { type: 'circle', style: { cx: 130, cy: 210, r: 40, fill: '#6ee7b7', opacity: 0.6 }, animate: { r: [0, 40], opacity: [0, 0.6], sequence: 3, duration: 0.6, easing: 'ease-out' } },

    // Value labels inside bubbles
    { type: 'text', content: '42', style: { x: 80, y: 106, fontSize: 16, fontWeight: 'bold', color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: '28', style: { x: 190, y: 136, fontSize: 14, fontWeight: 'bold', color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: '15', style: { x: 210, y: 66, fontSize: 12, fontWeight: 'bold', color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: '35', style: { x: 130, y: 216, fontSize: 15, fontWeight: 'bold', color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Four bubbles at varying sizes (r: 22-48) are scattered asymmetrically, avoiding a grid layout to feel more organic and data-driven.
- Each bubble expands from zero radius, creating the signature bubble-chart "pop" effect.
- Semi-transparent fills (0.6-0.8 opacity) allow overlapping areas to blend, a hallmark of bubble chart visualizations.
- White numeric labels inside each bubble show data values, making the chart feel functional rather than purely decorative.
- Emerald/green/lime palette (`#059669` / `#10b981` / `#34d399` / `#6ee7b7`) creates a cohesive gradient of greens across sizes.
