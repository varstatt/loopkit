# SSL Checker

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

SSL certificate validation display — lock icon with status lines.

```js
export const sslChecker = {
  width: 280,
  height: 280,
  background: '#d1fae5',
  stagger: 0.3,
  trigger: 'autoplay',
  hold: 2,
  elements: [
    // Lock body
    {
      type: 'rect',
      style: { x: 119, y: 120, width: 42, height: 52, fill: '#22c55e', rx: 6, opacity: 0.3 },
      animate: { opacity: [0, 0.3], sequence: 0, duration: 0.5, easing: 'ease-out' },
    },
    // Lock shackle (circle outline)
    {
      type: 'circle',
      style: { cx: 140, cy: 112, r: 14, fill: 'none', stroke: '#22c55e', strokeWidth: 3, opacity: 0.3 },
      animate: { opacity: [0, 0.3], sequence: 0, duration: 0.5, easing: 'ease-out' },
    },
    // Keyhole dot
    {
      type: 'circle',
      style: { cx: 140, cy: 142, r: 4, fill: '#16a34a', opacity: 0.4 },
      animate: { opacity: [0, 0.4], scale: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' },
    },
    // Status line 1
    {
      type: 'rect',
      style: { x: 80, y: 192, width: 120, height: 5, fill: '#22c55e', rx: 3, opacity: 0.2 },
      animate: { width: [0, 120], opacity: [0, 0.2], sequence: 2, duration: 0.5, easing: 'ease-out' },
    },
    // Status line 2
    {
      type: 'rect',
      style: { x: 95, y: 204, width: 90, height: 5, fill: '#10b981', rx: 3, opacity: 0.18 },
      animate: { width: [0, 90], opacity: [0, 0.18], sequence: 3, duration: 0.5, easing: 'ease-out' },
    },
  ],
};
```

## Design notes

- Lock composed from a rect (body) and circle (shackle) appearing together at sequence 0
- Keyhole dot pops in at sequence 1 as a focal point
- Two status text lines extend below at sequences 2-3
- Green/emerald palette matches security/validation theme
