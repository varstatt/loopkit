# SOAP Note Grid

> **Live demo:** [varstatt.com](https://varstatt.com)

A 2x2 grid representing a medical SOAP note (Subjective, Objective, Assessment, Plan) with labeled sections, content lines, and a decorative circle.

## Schema

```js
export const soapNoteGrid = {
  width: 460, height: 280, background: '#f0fdf4',
  stagger: 0.4, trigger: 'hover', hold: 2,
  elements: [
    // Section backgrounds (4 rounded rects in 2x2 grid)
    { type: 'rect', style: { x: 55, y: 34, width: 168, height: 100, fill: '#dcfce7', rx: 8, opacity: 0.6 }, animate: { opacity: [0.2, 0.8], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 237, y: 34, width: 168, height: 100, fill: '#dcfce7', rx: 8, opacity: 0.6 }, animate: { opacity: [0.2, 0.8], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 55, y: 146, width: 168, height: 100, fill: '#dcfce7', rx: 8, opacity: 0.6 }, animate: { opacity: [0.2, 0.8], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 237, y: 146, width: 168, height: 100, fill: '#dcfce7', rx: 8, opacity: 0.6 }, animate: { opacity: [0.2, 0.8], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // Section labels
    { type: 'text', content: 'S', style: { x: 65, y: 52, fontSize: 11, fontWeight: 'bold', color: '#166534' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'O', style: { x: 247, y: 52, fontSize: 11, fontWeight: 'bold', color: '#166534' }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'A', style: { x: 65, y: 164, fontSize: 11, fontWeight: 'bold', color: '#166534' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: 'P', style: { x: 247, y: 164, fontSize: 11, fontWeight: 'bold', color: '#166534' }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // Subjective lines
    { type: 'rect', style: { x: 65, y: 62, width: 135, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 135], sequence: 0, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 65, y: 72, width: 110, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 110], sequence: 0, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 65, y: 82, width: 76, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 76], sequence: 0, duration: 0.6, easing: 'ease-out' } },

    // Objective lines
    { type: 'rect', style: { x: 247, y: 62, width: 118, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 118], sequence: 1, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 247, y: 72, width: 144, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 144], sequence: 1, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 247, y: 82, width: 93, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 93], sequence: 1, duration: 0.6, easing: 'ease-out' } },

    // Assessment lines
    { type: 'rect', style: { x: 65, y: 174, width: 152, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 152], sequence: 2, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 65, y: 184, width: 101, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 101], sequence: 2, duration: 0.6, easing: 'ease-out' } },

    // Plan lines
    { type: 'rect', style: { x: 247, y: 174, width: 126, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 126], sequence: 3, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 247, y: 184, width: 144, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 144], sequence: 3, duration: 0.6, easing: 'ease-out' } },
    { type: 'rect', style: { x: 247, y: 194, width: 118, height: 4, fill: '#86efac', rx: 2 }, animate: { width: [0, 118], sequence: 3, duration: 0.6, easing: 'ease-out' } },

    // Decorative circle
    { type: 'circle', style: { cx: 420, cy: 245, r: 28, fill: '#bbf7d0', opacity: 0.5 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.5], sequence: 4, duration: 0.7, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Stagger 0.4s** gives each quadrant its own beat -- S, O, A, P reveal left-to-right, top-to-bottom, mimicking the reading order a clinician would follow.
- Content lines share their section's `sequence` value so lines extend simultaneously with their parent section fading in.
- Varying line widths (76--152px) avoids a rigid look and suggests real note content of different lengths.
- The decorative circle at sequence 4 arrives last as a finishing flourish, using `scale` to grow from a small dot.
- Green palette (`#f0fdf4` / `#dcfce7` / `#86efac` / `#166534`) matches the medical/health theme of the original cover.
