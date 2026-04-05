# Timestamp

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

A clock face with two hands and a center dot representing a timestamp conversion tool.

## Schema

```js
export const timestamp = {
  width: 280, height: 280, background: '#ffedd5',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Clock face
    { type: 'circle', style: { cx: 140, cy: 132, r: 72, fill: '#fff7ed', stroke: '#ea580c', strokeWidth: 3 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Hour markers (12, 3, 6, 9)
    { type: 'rect', style: { x: 137, y: 68, width: 6, height: 14, fill: '#c2410c', rx: 2 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 197, y: 129, width: 14, height: 6, fill: '#c2410c', rx: 2 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 137, y: 182, width: 6, height: 14, fill: '#c2410c', rx: 2 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'rect', style: { x: 69, y: 129, width: 14, height: 6, fill: '#c2410c', rx: 2 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },

    // Hour hand (pointing roughly to 10 o'clock -- angled up-left via position)
    { type: 'rect', style: { x: 137, y: 100, width: 6, height: 36, fill: '#9a3412', rx: 2 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },

    // Minute hand (pointing to 2 o'clock -- angled up-right via position)
    { type: 'rect', style: { x: 138, y: 84, width: 4, height: 50, fill: '#ea580c', rx: 2 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // Center dot
    { type: 'circle', style: { cx: 140, cy: 132, r: 5, fill: '#9a3412' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle top-right
    { type: 'circle', style: { cx: 242, cy: 42, r: 22, fill: '#fdba74', opacity: 0.4 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.4], sequence: 5, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- A large bordered circle serves as the clock face, immediately recognizable as a time-related tool.
- Four hour markers at cardinal positions ground the clock without visual clutter.
- The two hands appear sequentially -- hour then minute -- with the center dot arriving last as the final piece snapping into place.
- Orange/amber palette (`#ffedd5` / `#ea580c` / `#c2410c` / `#9a3412`) gives warmth befitting a time-oriented utility.
