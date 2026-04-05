# Hash Generator

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Three groups of algorithm label and hash output lines representing multiple hash function results.

## Schema

```js
export const hashGenerator = {
  width: 280, height: 280, background: '#f1f5f9',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // MD5 group
    { type: 'rect', style: { x: 32, y: 44, width: 40, height: 8, fill: '#334155', rx: 3 }, animate: { width: [0, 40], opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 32, y: 60, width: 200, height: 6, fill: '#94a3b8', rx: 3 }, animate: { width: [0, 200], opacity: [0, 1], sequence: 1, duration: 0.5, easing: 'ease-out' } },

    // SHA-256 group
    { type: 'rect', style: { x: 32, y: 96, width: 56, height: 8, fill: '#334155', rx: 3 }, animate: { width: [0, 56], opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 32, y: 112, width: 216, height: 6, fill: '#94a3b8', rx: 3 }, animate: { width: [0, 216], opacity: [0, 1], sequence: 3, duration: 0.5, easing: 'ease-out' } },

    // SHA-512 group
    { type: 'rect', style: { x: 32, y: 148, width: 56, height: 8, fill: '#334155', rx: 3 }, animate: { width: [0, 56], opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 32, y: 164, width: 216, height: 6, fill: '#94a3b8', rx: 3 }, animate: { width: [0, 216], opacity: [0, 1], sequence: 5, duration: 0.5, easing: 'ease-out' } },
    { type: 'rect', style: { x: 32, y: 178, width: 216, height: 6, fill: '#94a3b8', rx: 3 }, animate: { width: [0, 216], opacity: [0, 1], sequence: 5, duration: 0.5, easing: 'ease-out' } },

    // Decorative circle bottom-right
    { type: 'circle', style: { cx: 240, cy: 240, r: 26, fill: '#cbd5e1', opacity: 0.4 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.4], sequence: 6, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Three groups represent common hash algorithms (MD5, SHA-256, SHA-512) with increasing output lengths.
- Thick dark labels followed by thinner gray hash lines create a clear label-value hierarchy.
- SHA-512 has two hash lines to represent its longer output, distinguishing it from the shorter algorithms.
- Slate/gray palette (`#f1f5f9` / `#334155` / `#94a3b8`) stays neutral and technical, appropriate for a cryptographic utility.
- Each label-hash pair animates sequentially, revealing one algorithm result at a time.
