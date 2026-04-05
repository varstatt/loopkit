# Text Gradient

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Colorful overlapping circles on a dark purple background with large "Aa" text at center.

## Schema

```js
export const textGradient = {
  width: 280, height: 280, background: '#2d1b4e',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Pink circle (left)
    { type: 'circle', style: { cx: 90, cy: 130, r: 60, fill: '#ec4899', opacity: 0.5 }, animate: { r: [0, 60], opacity: [0, 0.5], sequence: 0, duration: 0.6, easing: 'ease-out' } },

    // Cyan circle (right)
    { type: 'circle', style: { cx: 190, cy: 130, r: 55, fill: '#06b6d4', opacity: 0.5 }, animate: { r: [0, 55], opacity: [0, 0.5], sequence: 1, duration: 0.6, easing: 'ease-out' } },

    // Gold circle (bottom-center)
    { type: 'circle', style: { cx: 140, cy: 180, r: 50, fill: '#eab308', opacity: 0.45 }, animate: { r: [0, 50], opacity: [0, 0.45], sequence: 2, duration: 0.6, easing: 'ease-out' } },

    // Center "Aa" text
    { type: 'text', content: 'Aa', style: { x: 140, y: 152, fontSize: 48, fontWeight: 800, color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Dark purple background (`#2d1b4e`) makes the semi-transparent color circles pop, simulating a gradient builder preview.
- Pink, cyan, and gold circles (`#ec4899` / `#06b6d4` / `#eab308`) overlap to produce rich color blends where they intersect.
- The large white "Aa" text at center represents the text that would receive the gradient treatment.
- Circles expand first to establish the color palette, then the text appears on top as the final focal element.
