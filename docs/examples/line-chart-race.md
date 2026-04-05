# Line Chart Race

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Three series represented as connected horizontal segments at different heights, mimicking animated line chart paths.

## Schema

```js
export const lineChartRace = {
  width: 280, height: 280, background: '#ede9fe',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // X-axis baseline
    { type: 'rect', style: { x: 32, y: 232, width: 220, height: 2, fill: '#a78bfa' }, animate: { width: [0, 220], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Y-axis
    { type: 'rect', style: { x: 32, y: 32, width: 2, height: 200, fill: '#a78bfa' }, animate: { height: [0, 200], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Series 1 (violet) — segments at varying heights
    { type: 'rect', style: { x: 48, y: 160, width: 40, height: 3, fill: '#7c3aed', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 88, y: 120, width: 40, height: 3, fill: '#7c3aed', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 128, y: 80, width: 40, height: 3, fill: '#7c3aed', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 168, y: 60, width: 40, height: 3, fill: '#7c3aed', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 208, y: 52, width: 40, height: 3, fill: '#7c3aed', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Series 2 (purple) — flatter trajectory
    { type: 'rect', style: { x: 48, y: 180, width: 40, height: 3, fill: '#c084fc', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 88, y: 168, width: 40, height: 3, fill: '#c084fc', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 128, y: 148, width: 40, height: 3, fill: '#c084fc', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 168, y: 132, width: 40, height: 3, fill: '#c084fc', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 208, y: 120, width: 40, height: 3, fill: '#c084fc', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Series 3 (fuchsia) — declining
    { type: 'rect', style: { x: 48, y: 100, width: 40, height: 3, fill: '#d946ef', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 88, y: 140, width: 40, height: 3, fill: '#d946ef', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 128, y: 170, width: 40, height: 3, fill: '#d946ef', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 168, y: 190, width: 40, height: 3, fill: '#d946ef', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 208, y: 200, width: 40, height: 3, fill: '#d946ef', rx: 1 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Data point dots for Series 1
    { type: 'circle', style: { cx: 68, cy: 161, r: 4, fill: '#7c3aed' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 228, cy: 53, r: 4, fill: '#7c3aed' }, animate: { r: [0, 4], opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Three line series are approximated as connected horizontal rect segments at different y-positions, each stepping left to right across five data points.
- Series 1 (violet) trends upward, series 2 (purple) rises slowly, and series 3 (fuchsia) declines — showing competitive "racing" between lines.
- Segments share the same `sequence` number per time step, so all three series advance together column by column.
- Small endpoint dots on series 1 highlight the start and finish, adding visual polish.
- Violet/purple/fuchsia palette on `#ede9fe` background stays cohesive across all three series.
