# Password Generator

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

An input box with masked password dots and a strength meter bar below.

## Schema

```js
export const passwordGenerator = {
  width: 280, height: 280, background: '#ffe4e6',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Input box
    { type: 'rect', style: { x: 32, y: 80, width: 216, height: 44, fill: '#fff1f2', stroke: '#fb7185', strokeWidth: 2, rx: 6 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Password dots (12)
    { type: 'circle', style: { cx: 52, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 68, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 84, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 1, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 100, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 116, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 132, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 148, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 164, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 180, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 3, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 196, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 212, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 228, cy: 102, r: 4, fill: '#e11d48' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 4, duration: 0.3, easing: 'ease-out' } },

    // Strength meter label
    { type: 'text', content: 'Strong', style: { x: 32, y: 150, fontSize: 10, fontWeight: 'bold', color: '#be123c' }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Strength meter track
    { type: 'rect', style: { x: 32, y: 158, width: 216, height: 10, fill: '#fecdd3', rx: 5 }, animate: { opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },

    // Strength meter fill (gradient effect via overlapping bars)
    { type: 'rect', style: { x: 32, y: 158, width: 190, height: 10, fill: '#f43f5e', rx: 5 }, animate: { width: [0, 190], opacity: [0, 1], sequence: 6, duration: 0.6, easing: 'ease-out' } },

    // Decorative circle top-left
    { type: 'circle', style: { cx: 44, cy: 44, r: 22, fill: '#fda4af', opacity: 0.4 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.4], sequence: 7, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Twelve masked dots inside the input box represent a strong generated password, appearing in groups of three for visual rhythm.
- The strength meter below fills to ~88% (190/216px), indicating "Strong" without hitting the maximum, which feels more realistic.
- Rose/pink palette (`#ffe4e6` / `#e11d48` / `#f43f5e`) signals the security/attention theme typical of password tools.
- Dots use `scale` animation from zero, creating a "typing" effect as each group pops in.
