# [loopkit](https://varstatt.com/toolkit/loopkit)

Lightweight, zero-dependency SVG animation engine for the web. Define animations as plain JS objects, get smooth `requestAnimationFrame`-driven playback. Built as a Lottie alternative for short decorative animations — cover art, hero graphics, hover effects. Under 5KB minified.

- [Live Playground](https://varstatt.com/toolkit/loopkit)

## Install

```bash
npm install loopkit
```

## Quick start

```typescript
import { createAnimation } from 'loopkit';

const anim = createAnimation(document.getElementById('cover'), {
  width: 460,
  height: 280,
  background: '#0c1222',
  stagger: 0.35,
  trigger: 'hover',
  hold: 2,
  elements: [
    // Four bars growing upward
    { type: 'rect', style: { x: 97, y: 200, width: 55, height: 0, fill: '#06b6d4', opacity: 0 },
      animate: { height: [0, 120], y: [200, 80], opacity: [0, 0.5], sequence: 0, duration: 0.8, easing: 'ease-out' } },
    { type: 'rect', style: { x: 167, y: 200, width: 55, height: 0, fill: '#06b6d4', opacity: 0 },
      animate: { height: [0, 90], y: [200, 110], opacity: [0, 0.4], sequence: 1, duration: 0.8, easing: 'ease-out' } },
    { type: 'rect', style: { x: 237, y: 200, width: 55, height: 0, fill: '#06b6d4', opacity: 0 },
      animate: { height: [0, 150], y: [200, 50], opacity: [0, 0.6], sequence: 2, duration: 0.8, easing: 'ease-out' } },
    { type: 'rect', style: { x: 307, y: 200, width: 55, height: 0, fill: '#06b6d4', opacity: 0 },
      animate: { height: [0, 70], y: [200, 130], opacity: [0, 0.35], sequence: 3, duration: 0.8, easing: 'ease-out' } },
    // Labels
    { type: 'text', content: '$2.4k', style: { x: 124, y: 72, fontSize: 11, color: '#06b6d4', textAnchor: 'middle', opacity: 0 },
      animate: { opacity: [0, 0.5], sequence: 0, duration: 0.4 } },
    { type: 'text', content: '$1.8k', style: { x: 194, y: 102, fontSize: 11, color: '#06b6d4', textAnchor: 'middle', opacity: 0 },
      animate: { opacity: [0, 0.4], sequence: 1, duration: 0.4 } },
    { type: 'text', content: '$3.1k', style: { x: 264, y: 42, fontSize: 11, color: '#06b6d4', textAnchor: 'middle', opacity: 0 },
      animate: { opacity: [0, 0.6], sequence: 2, duration: 0.4 } },
    { type: 'text', content: '$1.2k', style: { x: 334, y: 122, fontSize: 11, color: '#06b6d4', textAnchor: 'middle', opacity: 0 },
      animate: { opacity: [0, 0.35], sequence: 3, duration: 0.4 } },
  ],
});

anim.play();     // Start playback
anim.pause();    // Freeze at current frame
anim.reset();    // Snap to final frame
anim.settle();   // Smoothly animate to final frame
anim.destroy();  // Remove SVG, cancel rAF, clean up
```

## Features

- **Schema in, animation out** — declarative JSON-like schema defines elements and keyframes
- **SVG renderer** — creates and updates SVG DOM via `requestAnimationFrame`
- **Zero dependencies** — vanilla TypeScript, <5KB minified
- **Two triggers** — `autoplay` (infinite loop) or `hover` (loop on enter, smooth settle on leave)
- **Smooth transitions** — starts at final frame (no flash), fades out before restarting, settles smoothly on hover leave
- **SSR support** — `renderToString()` outputs SVG markup at final frame, no DOM required
- **Color interpolation** — hex color animation with RGB lerp

## Element types

| Type | SVG output | Key properties |
|------|------------|----------------|
| `text` | `<text>` | x, y, fontSize, color, opacity, fontWeight, textAnchor |
| `rect` | `<rect>` | x, y, width, height, fill, opacity, rx |
| `circle` | `<circle>` | cx, cy, r, fill, opacity, scale |
| `badge` | `<g>` with shape + centered text | x, y, r, bg, color, scale, opacity, isLabel |

## SSR

```typescript
import { renderToString } from 'loopkit';

const svgMarkup = renderToString(schema);
// Returns <svg>...</svg> at final frame — no DOM needed
```

## Docs

- [Comprehensive Guide](docs/guide.md) — full walkthrough of concepts, timing, design patterns, and recipes
- [API Reference](docs/api.md) — all methods, types, and parameters
- [Examples](docs/examples/) — 46 real-world cover schemas with explanations

## About

Built and maintained by [Jurij Tokarski](https://varstatt.com/jurij) from [Varstatt](https://varstatt.com). MIT licensed.

- [Playground](https://varstatt.com/toolkit/loopkit)
- [GitHub](https://github.com/varstatt/loopkit)
- [npm](https://www.npmjs.com/package/loopkit)
- [Issues](https://github.com/varstatt/loopkit/issues)
