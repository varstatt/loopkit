# Image Base64

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

An image placeholder on the left with text output lines on the right, representing image-to-Base64 conversion.

## Schema

```js
export const imageBase64 = {
  width: 280, height: 280, background: '#fdf2f8',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Image placeholder (left)
    { type: 'rect', style: { x: 24, y: 56, width: 104, height: 104, fill: '#fce7f3', stroke: '#ec4899', strokeWidth: 2, rx: 8 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },

    // Mountain/landscape icon inside placeholder
    { type: 'rect', style: { x: 44, y: 120, width: 64, height: 4, fill: '#f9a8d4', rx: 2 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 58, cy: 86, r: 10, fill: '#f9a8d4', opacity: 0.8 }, animate: { scale: [0, 1], opacity: [0, 0.8], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 100, width: 56, height: 24, fill: '#fbcfe8', rx: 2, opacity: 0.6 }, animate: { opacity: [0, 0.6], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    // Arrow indicator
    { type: 'circle', style: { cx: 148, cy: 108, r: 3, fill: '#a855f7' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 158, cy: 108, r: 3, fill: '#a855f7' }, animate: { scale: [0, 1], opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },

    // Text output lines (right)
    { type: 'rect', style: { x: 172, y: 64, width: 84, height: 5, fill: '#c026d3', rx: 2 }, animate: { width: [0, 84], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 172, y: 78, width: 84, height: 5, fill: '#d946ef', rx: 2 }, animate: { width: [0, 84], opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 172, y: 92, width: 84, height: 5, fill: '#c026d3', rx: 2 }, animate: { width: [0, 84], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 172, y: 106, width: 84, height: 5, fill: '#d946ef', rx: 2 }, animate: { width: [0, 84], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 172, y: 120, width: 84, height: 5, fill: '#c026d3', rx: 2 }, animate: { width: [0, 84], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 172, y: 134, width: 84, height: 5, fill: '#d946ef', rx: 2 }, animate: { width: [0, 84], opacity: [0, 1], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 172, y: 148, width: 56, height: 5, fill: '#c026d3', rx: 2 }, animate: { width: [0, 56], opacity: [0, 1], sequence: 6, duration: 0.4, easing: 'ease-out' } },

    // Decorative circle bottom-right
    { type: 'circle', style: { cx: 240, cy: 240, r: 24, fill: '#f0abfc', opacity: 0.35 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.35], sequence: 7, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- The left image placeholder with a simple sun circle and landscape shape is universally recognizable as an image icon.
- Two dot arrows bridge the image to the output, showing the conversion direction.
- Seven equal-width output lines on the right represent the long Base64 string, with the last line shorter to indicate the string's end.
- Alternating fuchsia/pink shades between output lines add visual rhythm without introducing new colors.
- Fuchsia/pink/violet palette (`#fdf2f8` / `#ec4899` / `#c026d3` / `#a855f7`) ties the visual and encoded representations together.
