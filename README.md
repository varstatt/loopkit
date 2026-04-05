# loopkit

Lightweight, zero-dependency SVG animation engine for the web. Define animations as plain JS objects, get smooth `requestAnimationFrame`-driven playback.

Built as a Lottie alternative for short decorative animations — cover art, hero graphics, hover effects. Under 5KB minified.

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
  stagger: 0.45,
  trigger: 'hover',
  hold: 3.5,
  elements: [
    {
      type: 'text',
      content: 'Subjective',
      style: { x: 48, y: 72, fontSize: 28, color: '#334155' },
      animate: {
        opacity: [0.2, 1],
        color: ['#334155', '#34d399'],
        sequence: 0,
        duration: 0.5,
        easing: 'ease-out',
      },
    },
    {
      type: 'rect',
      style: { x: 28, y: 44, width: 3, height: 0, fill: '#34d399' },
      animate: {
        height: [0, 180],
        sequence: 0,
        duration: 2.8,
        easing: 'ease-out',
      },
    },
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

- [GitHub](https://github.com/varstatt/loopkit)
- [npm](https://www.npmjs.com/package/loopkit)
- [Issues](https://github.com/varstatt/loopkit/issues)
