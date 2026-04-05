# YAML Validate

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Six indented YAML-like lines with a checkmark circle confirming validation in the bottom-right corner.

## Schema

```js
export const yamlValidate = {
  width: 280, height: 280, background: '#ccfbf1',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // YAML lines with varying indentation
    { type: 'rect', style: { x: 32, y: 48, width: 130, height: 6, fill: '#0d9488', rx: 3 }, animate: { width: [0, 130], opacity: [0, 1], sequence: 0, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 66, width: 100, height: 6, fill: '#14b8a6', rx: 3 }, animate: { width: [0, 100], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 84, width: 115, height: 6, fill: '#0d9488', rx: 3 }, animate: { width: [0, 115], opacity: [0, 1], sequence: 2, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 32, y: 102, width: 140, height: 6, fill: '#14b8a6', rx: 3 }, animate: { width: [0, 140], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 120, width: 90, height: 6, fill: '#0d9488', rx: 3 }, animate: { width: [0, 90], opacity: [0, 1], sequence: 4, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 48, y: 138, width: 110, height: 6, fill: '#14b8a6', rx: 3 }, animate: { width: [0, 110], opacity: [0, 1], sequence: 5, duration: 0.5, easing: 'ease-out' } },

    // Checkmark circle (bottom-right)
    { type: 'circle', style: { cx: 224, cy: 224, r: 28, fill: '#10b981' }, animate: { r: [0, 28], opacity: [0, 1], sequence: 6, duration: 0.5, easing: 'ease-out' } },
    { type: 'text', content: '\u2713', style: { x: 224, y: 232, fontSize: 28, fontWeight: 700, color: '#ffffff', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 7, duration: 0.4, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Six lines with alternating indentation levels mimic YAML key-value nesting structure.
- Cyan/teal palette (`#ccfbf1` / `#0d9488` / `#14b8a6` / `#10b981`) gives a clean, verification-oriented feel.
- The emerald checkmark circle in the bottom-right appears last, confirming that the YAML content above has passed validation.
- Sequential fade-in of lines followed by the checkmark creates a "scanning then approving" narrative.
