# Comprehensive Guide

This guide covers everything you need to create animated SVG covers with loopkit. It's written for both humans and LLMs generating schemas programmatically.

## Table of Contents

1. [Core Concepts](#core-concepts)
2. [Schema Structure](#schema-structure)
3. [Element Types](#element-types)
4. [Animation System](#animation-system)
5. [Timing Model](#timing-model)
6. [Color System](#color-system)
7. [Trigger Modes](#trigger-modes)
8. [Coordinate System](#coordinate-system)
9. [Design Patterns](#design-patterns)
10. [SSR / Server Rendering](#ssr)
11. [React Integration](#react-integration)
12. [Full API Reference](#full-api-reference)
13. [Recipes](#recipes)

---

## Core Concepts

The package follows a **schema in, animation out** model:

1. You define a **schema** — a plain JavaScript object describing the canvas, elements, and animations
2. `createAnimation()` takes a DOM container + schema, creates an SVG, mounts it, and returns playback controls
3. The engine runs a `requestAnimationFrame` loop that interpolates every animated property from its `from` value to its `to` value over time

Key principles:
- **Final frame first** — the SVG is immediately rendered at the final (to) state. No blank flash on load.
- **Declarative** — you describe what the final state looks like and what the animation start state is. The engine handles interpolation.
- **Zero dependencies** — pure TypeScript, no React, no framework lock-in.
- **SVG-based** — all rendering uses SVG DOM elements with direct attribute manipulation via `setAttribute`.

---

## Schema Structure

```typescript
interface AnimationSchema {
  width: number;          // Canvas width in SVG units (viewBox)
  height: number;         // Canvas height in SVG units (viewBox)
  background?: string;    // Background fill color (hex). Creates a <rect> behind all elements
  stagger: number;        // Seconds between sequence steps (controls cascade timing)
  trigger?: TriggerMode;  // 'autoplay' (default) or 'hover'
  hold?: number;          // Seconds to hold at final frame before restarting (default: 1.5)
  elements: SchemaElement[];  // Ordered list of elements (rendered in array order = painter's model)
}
```

### Minimal example

```javascript
const schema = {
  width: 460,
  height: 280,
  background: '#0c1222',
  stagger: 0.4,
  elements: [
    {
      type: 'rect',
      style: { x: 20, y: 20, width: 420, height: 240, fill: '#1e293b', rx: 12 },
    },
  ],
};
```

This creates a 460×280 SVG with a dark background and a single rounded rectangle. No animation — it's a static cover.

### Canvas sizing

The `width` and `height` define the SVG `viewBox`, not pixel size. The SVG scales to fit its container. Common sizes:

| Use case | Width | Height | Aspect ratio |
|----------|-------|--------|--------------|
| Landscape cover | 460 | 280 | ~3:2 |
| Square cover | 280 | 280 | 1:1 |
| Wide banner | 600 | 200 | 3:1 |
| OG image | 1200 | 630 | ~1.9:1 |

---

## Element Types

### `text`

Renders an SVG `<text>` element.

```javascript
{
  type: 'text',
  content: 'Hello World',          // The text string
  style: {
    x: 48,                         // X position (required)
    y: 72,                         // Y position, baseline (required)
    fontSize: 28,                  // Default: 14
    fontFamily: "'DM Sans', sans-serif",  // Default: "'DM Sans', sans-serif"
    fontWeight: 'bold',            // Default: 'normal'. Accepts number (700) or string ('bold')
    color: '#34d399',              // Maps to SVG `fill` attribute. Default: '#fff'
    opacity: 1,                    // Default: 1
    textAnchor: 'middle',          // 'start' (default) | 'middle' | 'end'
    letterSpacing: 2,              // Default: none
  },
  animate: { ... },               // Optional animation
}
```

**SVG attribute mapping:**
- `color` → `fill`
- `fontSize` → `font-size`
- `fontWeight` → `font-weight`
- `fontFamily` → `font-family`
- `textAnchor` → `text-anchor`
- `letterSpacing` → `letter-spacing`
- All other properties map directly

**Positioning:** `y` is the text baseline. The element uses `dominant-baseline="middle"` by default, so `y` is vertically centered at that position. For multi-line text, create separate text elements.

### `rect`

Renders an SVG `<rect>` element.

```javascript
{
  type: 'rect',
  style: {
    x: 20,                // Top-left X (required)
    y: 40,                // Top-left Y (required)
    width: 200,           // Width (required)
    height: 100,          // Height (required)
    fill: '#34d399',      // Fill color. Default: '#fff'
    stroke: '#166534',    // Stroke color. Default: none
    strokeWidth: 2,       // Stroke width. Default: none
    rx: 8,                // Corner radius. Default: 0 (sharp corners)
    opacity: 0.8,         // Default: 1
  },
  animate: { ... },
}
```

**Common patterns:**
- Background panel: large rect with low opacity and `rx` for rounded corners
- Progress bar: animate `width` from 0 to target
- Horizontal line: rect with `height: 2-4` and full width
- Vertical bar: animate `height` from 0 to target
- Document line: thin rect (height 2-4) with varying widths and `rx: 2` for rounded ends

### `circle`

Renders an SVG `<circle>` element.

```javascript
{
  type: 'circle',
  style: {
    cx: 230,              // Center X (required)
    cy: 140,              // Center Y (required)
    r: 40,                // Radius (required)
    fill: '#34d399',      // Default: '#fff'
    stroke: '#166534',    // Default: none
    strokeWidth: 2,       // Default: none
    opacity: 0.5,         // Default: 1
  },
  animate: { ... },
}
```

**Special:** The `scale` animation property multiplies the base `r` value. `scale: [0, 1]` grows from nothing to full size. `scale: [0.5, 1.5]` grows from half to 1.5× the base radius.

### `badge`

A composite element: `<g>` group containing a shape (circle or rounded-rect) with centered text.

```javascript
{
  type: 'badge',
  content: '1',                    // Text shown inside the badge
  style: {
    x: 100,                       // Center X (required) — group translates here
    y: 80,                        // Center Y (required)
    r: 14,                        // Radius of circle / half-height of label. Default: 14
    fontSize: 12,                 // Default: 12
    fontWeight: 'bold',           // Default: 'bold'
    color: '#fff',                // Text fill. Default: '#fff'
    bg: '#34d399',                // Shape fill. Default: '#222'
    opacity: 1,                   // Default: 1
    isLabel: false,               // false = circle, true = rounded-rect label. Default: false
  },
  animate: { ... },
}
```

**Circle badge** (`isLabel: false`): Creates `<circle cx="0" cy="0" r={r}>` inside a `<g transform="translate(x,y)">` with centered `<text>`.

**Label badge** (`isLabel: true`): Creates a `<rect>` with auto-calculated width based on `content.length * 5.8 + 18` and `height = r * 2`, with `rx = r` for pill shape.

**Badge-specific animation properties:**
- `scale: [from, to]` — scales the entire group
- `x: [from, to]` — translates X position
- `y: [from, to]` — translates Y position
- `bg: ['#from', '#to']` — interpolates background shape color
- `color: ['#from', '#to']` — interpolates text color

These compose into a single `transform="translate(x,y) scale(s)"` per frame.

---

## Animation System

### AnimateConfig

Any element can have an `animate` property:

```javascript
animate: {
  sequence: 0,           // Integer: ordering (0 = first, 1 = second, ...)
  duration: 0.5,         // Seconds: how long this element's animation takes
  easing: 'ease-out',    // Optional. Default: 'ease-out'

  // Animated properties — [from, to] pairs:
  opacity: [0, 1],
  width: [0, 200],
  height: [0, 100],
  x: [100, 50],
  y: [280, 140],
  fill: ['#000000', '#34d399'],
  color: ['#334155', '#34d399'],
  scale: [0, 1],         // circle: multiplies r. badge: scales group transform
}
```

### Property animation rules

1. **Numeric properties** — linearly interpolated: `value = from + (to - from) * easedProgress`
2. **Color properties** — detected automatically when both `from` and `to` start with `#`. Interpolated in RGB space.
3. **Any style property can be animated** — if the property name matches a style key, it animates between the `[from, to]` pair.
4. **Reserved keys** — `sequence`, `duration`, and `easing` are timing config, not animated properties.

### How animation values are applied

For `text` elements, the schema property names are mapped to SVG attributes:
- `color` → sets `fill` attribute
- `fontSize` → sets `font-size` attribute
- `opacity` → sets `opacity` attribute
- etc.

For `rect` and `circle`, property names map directly to SVG attributes (`width`, `height`, `fill`, `opacity`, `cx`, `cy`, `r`).

For `badge`, `scale`/`x`/`y`/`color`/`bg` are handled specially (see badge section above). Other properties work normally.

### Easing functions

All easings are cubic:

| Name | Formula | Behavior |
|------|---------|----------|
| `linear` | `t` | Constant speed |
| `ease-in` | `t³` | Slow start, accelerating |
| `ease-out` | `1 - (1-t)³` | Fast start, decelerating (most natural for UI) |
| `ease-in-out` | Piecewise cubic | Slow start and end |

**Recommendation:** Use `ease-out` for almost everything. It feels natural — elements arrive quickly and settle smoothly. Use `ease-in-out` for looping or back-and-forth motion. Use `linear` for progress bars or continuous motion.

---

## Timing Model

The timing model controls when each element starts animating and how the overall cycle works.

### Per-element delay

```
delay = sequence × stagger
```

- `sequence` is an integer set per element (in `animate`)
- `stagger` is a global schema value (seconds between sequence steps)

**Example:** With `stagger: 0.4`:
- sequence 0 → starts at 0.0s
- sequence 1 → starts at 0.4s
- sequence 2 → starts at 0.8s
- sequence 3 → starts at 1.2s

### Per-element progress

```
t = clamp((elapsed - delay) / duration, 0, 1)
```

An element hasn't started if `elapsed < delay`. It's done if `elapsed >= delay + duration`. Between those points, `t` goes from 0 to 1.

### Cycle duration

The engine automatically computes:
```
animDuration = max(delay_i + duration_i for all elements) + 0.1s buffer
fadeOut = min(animDuration, 1.5)
cycleDuration = fadeOut + animDuration + hold
```

After `cycleDuration` passes, the cycle restarts seamlessly. The fade-out at the start of each cycle smoothly reverses from the final frame, so there is never a hard jump between cycles.

### Timing tips

| Goal | Approach |
|------|----------|
| All elements animate together | All `sequence: 0`, same `duration` |
| Cascade left-to-right | Increment `sequence` for each element, use `stagger: 0.2-0.5` |
| Fast cascade | Small `stagger` (0.1-0.2), short `duration` (0.3-0.4) |
| Slow reveal | Large `stagger` (0.5-1.0), longer `duration` (0.6-1.0) |
| Two groups | First group all `sequence: 0`, second group all `sequence: 5` |
| Background first, content second | Background elements `sequence: 0`, content `sequence: 1+` |

---

## Color System

### Color format

All colors must be **hex strings** starting with `#`:
- 6-digit: `#34d399`, `#0c1222`
- 3-digit shorthand: `#fff`, `#000`

The engine detects color properties by checking if both `from` and `to` values start with `#`. Do not use `rgb()`, `hsl()`, or named colors in schemas.

### Color interpolation

Colors are interpolated in RGB space:
```
r = fromR + (toR - fromR) × t
g = fromG + (toG - fromG) × t
b = fromB + (toB - fromB) × t
```

Output is `rgb(r,g,b)` applied via `setAttribute`.

### Color utilities (re-exported)

```javascript
import { parseHex, rgbToHex, lerpColor } from 'loopkit';

parseHex('#34d399');  // [52, 211, 153]
rgbToHex([52, 211, 153]);  // '#34d399'
lerpColor('#000000', '#ffffff', 0.5);  // 'rgb(128,128,128)'
```

### Opacity as color alternative

For fade effects, prefer animating `opacity` over color interpolation. It's simpler and more performant:

```javascript
// Prefer this:
animate: { opacity: [0, 0.8], sequence: 0, duration: 0.5 }

// Over this (achieves similar but more complex):
animate: { fill: ['#00000000', '#34d399'], sequence: 0, duration: 0.5 }
```

### Design palette tips

For cover art, use **low-opacity fills** (0.1-0.4) over a gradient-like background for a soft, layered look. Common pattern:

```javascript
// Soft green palette
background: '#d1fae5',  // Light emerald
// Elements use darker shades at low opacity:
fill: '#059669'  // Emerald-600 at opacity 0.15-0.3
fill: '#10b981'  // Emerald-500 at opacity 0.2-0.4
fill: '#34d399'  // Emerald-400 at opacity 0.3-0.5
```

---

## Trigger Modes

### `autoplay` (default)

```javascript
{ trigger: 'autoplay', hold: 3.5 }
```

- Animation starts immediately on mount
- Cycle: fade-out (reverse from final frame) → animate forward → hold at final frame → loop
- Smooth transitions between cycles — no hard cuts
- Use for: hero animations, always-visible decorative covers, dashboard graphics

### `hover`

```javascript
{ trigger: 'hover' }
```

- Renders at final frame on mount (no animation visible)
- On `mouseenter`: starts looping animation (same cycle as autoplay — fade-out → forward → hold → repeat)
- On `mouseleave`: smoothly settles back to the final frame from wherever the animation currently is (no snap)
- Use for: interactive cards, portfolio thumbnails, link previews

### Cycle structure (both triggers)

Every animation cycle follows the same three phases:

```
┌─────────┐   ┌──────────────────┐   ┌──────────┐
│ Fade out │ → │ Animate forward  │ → │   Hold   │ → loop
│ (reverse)│   │  (from → to)     │   │(at final)│
└─────────┘   └──────────────────┘   └──────────┘
```

1. **Fade-out** — smoothly reverses from the final frame to the start frame (capped at 1.5s)
2. **Animate forward** — plays all elements from their `from` to `to` values with staggered timing
3. **Hold** — pauses at the completed final frame for `hold` seconds

This means the initial state (final frame) is never broken with a hard cut. The first visible motion is always a smooth reverse.

---

## Coordinate System

SVG coordinate system: **origin at top-left**, X increases right, Y increases down.

```
(0,0) ────────────────── (width, 0)
  │                          │
  │     SVG canvas           │
  │                          │
(0, height) ──────── (width, height)
```

### Positioning elements

- **Rect:** `x, y` is the top-left corner
- **Circle:** `cx, cy` is the center point
- **Text:** `x` is the start (or center/end based on `textAnchor`), `y` is the vertical center (due to `dominant-baseline: middle`)
- **Badge:** `x, y` is the center point (applied as `translate(x,y)` on the group)

### Layout helper calculations

For a 460×280 canvas with 12% inset:
```
insetX = 460 × 0.12 = 55
insetY = 280 × 0.12 = 34
innerWidth = 460 - 110 = 350
innerHeight = 280 - 68 = 212
```

For a 2×2 grid with 8px gap inside that inset:
```
cellWidth = (350 - 8) / 2 = 171
cellHeight = (212 - 8) / 2 = 102
cell[0][0] = { x: 55, y: 34, width: 171, height: 102 }
cell[1][0] = { x: 234, y: 34, width: 171, height: 102 }
cell[0][1] = { x: 55, y: 144, width: 171, height: 102 }
cell[1][1] = { x: 234, y: 144, width: 171, height: 102 }
```

---

## Design Patterns

### Pattern: Document lines

Simulates a text document with heading + body lines:

```javascript
// Heading
{ type: 'rect', style: { x: 30, y: 30, width: 120, height: 6, fill: '#6366f1', rx: 3 } },
// Body lines
{ type: 'rect', style: { x: 30, y: 44, width: 200, height: 4, fill: '#818cf8', rx: 2, opacity: 0.6 } },
{ type: 'rect', style: { x: 30, y: 54, width: 180, height: 4, fill: '#818cf8', rx: 2, opacity: 0.6 } },
{ type: 'rect', style: { x: 30, y: 64, width: 220, height: 4, fill: '#818cf8', rx: 2, opacity: 0.6 } },
```

### Pattern: Bar chart

Bars grow upward from a baseline:

```javascript
const baseline = 240;
const barWidth = 30;
const gap = 10;
const bars = [120, 80, 160, 60, 140]; // heights

bars.map((h, i) => ({
  type: 'rect',
  style: {
    x: 40 + i * (barWidth + gap),
    y: baseline - h,
    width: barWidth,
    height: h,
    fill: '#34d399',
    rx: 4,
  },
  animate: {
    height: [0, h],
    y: [baseline, baseline - h],
    sequence: i,
    duration: 0.6,
    easing: 'ease-out',
  },
}))
```

**Important:** When animating `height`, also animate `y` so the bar grows upward from the baseline instead of downward from the top.

### Pattern: Grid of cells

```javascript
const cols = 4, rows = 3;
const startX = 20, startY = 20;
const cellW = 50, cellH = 50, gap = 8;

Array.from({ length: cols * rows }, (_, i) => {
  const col = i % cols;
  const row = Math.floor(i / cols);
  return {
    type: 'rect',
    style: {
      x: startX + col * (cellW + gap),
      y: startY + row * (cellH + gap),
      width: cellW,
      height: cellH,
      fill: '#6366f1',
      rx: 6,
      opacity: 0.3,
    },
    animate: {
      opacity: [0, 0.3],
      sequence: i,
      duration: 0.3,
      easing: 'ease-out',
    },
  };
})
```

### Pattern: Cascade badges

Numbered badges popping in:

```javascript
const positions = [
  { x: 60, y: 60 }, { x: 140, y: 60 },
  { x: 220, y: 60 }, { x: 300, y: 60 },
];

positions.map((pos, i) => ({
  type: 'badge',
  content: String(i + 1),
  style: { ...pos, r: 16, bg: '#6366f1', color: '#fff' },
  animate: {
    scale: [0, 1],
    opacity: [0, 1],
    sequence: i,
    duration: 0.4,
    easing: 'ease-out',
  },
}))
```

### Pattern: Decorative accent circle

Almost every cover benefits from a large, low-opacity circle in a corner:

```javascript
{ type: 'circle', style: { cx: 420, cy: 245, r: 28, fill: '#34d399', opacity: 0.15 } }
```

These don't need animation — they're visual anchors.

### Pattern: Split panel (before/after, diff, converter)

```javascript
// Left panel
{ type: 'rect', style: { x: 20, y: 20, width: 200, height: 240, fill: '#fee2e2', rx: 8, opacity: 0.3 } },
// Divider
{ type: 'rect', style: { x: 228, y: 20, width: 2, height: 240, fill: '#94a3b8', opacity: 0.2 } },
// Right panel
{ type: 'rect', style: { x: 238, y: 20, width: 200, height: 240, fill: '#dcfce7', rx: 8, opacity: 0.3 } },
// Left content lines
{ type: 'rect', style: { x: 30, y: 40, width: 160, height: 4, fill: '#ef4444', rx: 2, opacity: 0.4 } },
// Right content lines
{ type: 'rect', style: { x: 248, y: 40, width: 160, height: 4, fill: '#22c55e', rx: 2, opacity: 0.4 } },
```

---

## SSR

`renderToString()` generates SVG markup at the final frame — all animated properties at their `to` values.

```javascript
import { renderToString } from 'loopkit';

const svg = renderToString(schema);
// Returns: <svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg">...</svg>
```

Use cases:
- Server-side rendering (Next.js, Astro, etc.)
- Static site generation
- Email templates
- OG image generation (render SVG → convert to PNG)
- Fallback for no-JS environments

The output is a complete, valid SVG string. Elements without `animate` render at their `style` values. Elements with `animate` render at the `to` values of each animated property.

---

## React Integration

```jsx
import { createAnimation } from 'loopkit';
import { useEffect, useRef } from 'react';

function AnimatedCover({ schema }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const anim = createAnimation(containerRef.current, schema);
    return () => anim.destroy();
  }, [schema]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-3/2 rounded-2xl overflow-hidden"
    />
  );
}
```

**Key points:**
- `createAnimation` appends an `<svg>` child to the container
- `destroy()` removes the SVG and cancels the rAF loop — call it in cleanup
- The schema should be stable (memoized or defined outside the component) to avoid re-creating on every render
- For hover triggers, the container element receives the `mouseenter`/`mouseleave` listeners

### SSR + hydration

For SSR, render the static SVG on the server and hydrate with animation on the client:

```jsx
import { renderToString, createAnimation } from 'loopkit';

function Cover({ schema }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    // Clear SSR markup and mount animated version
    ref.current.innerHTML = '';
    const anim = createAnimation(ref.current, schema);
    return () => anim.destroy();
  }, [schema]);

  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{ __html: renderToString(schema) }}
    />
  );
}
```

---

## Full API Reference

### `createAnimation(container, schema): AnimationInstance`

Creates animated SVG, mounts it into the container, returns controls.

**Parameters:**
- `container: HTMLElement` — DOM element to mount the SVG into
- `schema: AnimationSchema` — the animation definition

**Returns:** `AnimationInstance`

**Behavior:**
1. Creates `<svg>` with `viewBox="0 0 {width} {height}"` and `width="100%"`
2. If `background` is set, adds a full-size `<rect>` fill
3. Creates SVG elements for each schema element, extracting animation tracks
4. Computes cycle duration from all elements' delays + durations
5. Applies **final frame** immediately (all animations at `t=1`)
6. Attaches trigger:
   - `autoplay`: calls `play()` immediately, loops infinitely
   - `hover`: adds `mouseenter` → `play()`, `mouseleave` → `settle()` on container
7. Returns instance with playback controls

### `AnimationInstance`

```typescript
interface AnimationInstance {
  play(): void;
  pause(): void;
  reset(): void;
  settle(): void;
  destroy(): void;
  readonly state: 'playing' | 'paused' | 'idle' | 'settling' | 'destroyed';
}
```

| Method | Description |
|--------|-------------|
| `play()` | Start playback. Loops infinitely: fade-out → forward → hold → repeat. |
| `pause()` | Freeze at current frame, cancel rAF. |
| `reset()` | Stop playback, snap to final frame instantly. |
| `settle()` | Stop playback, smoothly animate from current position to final frame. |
| `destroy()` | Cancel rAF, remove event listeners, remove SVG from DOM. Irreversible. |

**State transitions:**
- `idle` → `play()` → `playing`
- `playing` → `pause()` → `paused`
- `playing` → `reset()` → `idle` (at final frame)
- `playing` → `settle()` → `settling` → `idle` (at final frame)
- `paused` → `play()` → `playing`
- Any → `destroy()` → `destroyed`
- Autoplay cycle end → restarts (stays `playing`)

**Hover trigger uses:** `mouseenter` → `play()`, `mouseleave` → `settle()`

### `renderToString(schema): string`

Returns SVG markup string with all elements at final frame. No DOM required.

### Color utilities

```typescript
function parseHex(hex: string): [number, number, number];
function rgbToHex(r: number, g: number, b: number): string;
function lerpColor(from: string, to: string, t: number): string;
```

### Exported types

```typescript
type EasingName = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
type TriggerMode = 'autoplay' | 'hover';

// Schema types
AnimationSchema, SchemaElement, TextElement, RectElement, CircleElement, BadgeElement, AnimateConfig

// Runtime types
AnimationInstance
```

---

## Recipes

### Recipe: Fade-in cascade

Elements appear one by one, each fading from transparent:

```javascript
elements.map((el, i) => ({
  ...el,
  animate: {
    opacity: [0, el.style.opacity ?? 1],
    sequence: i,
    duration: 0.4,
    easing: 'ease-out',
  },
}))
```

### Recipe: Growing bar chart

```javascript
const bars = [
  { x: 40, h: 120, fill: '#34d399' },
  { x: 80, h: 80, fill: '#6ee7b7' },
  { x: 120, h: 160, fill: '#10b981' },
];
const baseline = 250;

{
  width: 280, height: 280, background: '#f0fdf4',
  stagger: 0.3, trigger: 'hover', hold: 2,
  elements: bars.map((bar, i) => ({
    type: 'rect',
    style: {
      x: bar.x, y: baseline - bar.h,
      width: 30, height: bar.h,
      fill: bar.fill, rx: 4,
    },
    animate: {
      height: [0, bar.h],
      y: [baseline, baseline - bar.h],
      sequence: i,
      duration: 0.6,
      easing: 'ease-out',
    },
  })),
}
```

### Recipe: Pulsing badge pop-in

```javascript
{
  type: 'badge',
  content: '✓',
  style: { x: 140, y: 140, r: 20, bg: '#22c55e', color: '#fff' },
  animate: {
    scale: [0, 1],
    opacity: [0, 1],
    sequence: 3,
    duration: 0.5,
    easing: 'ease-out',
  },
}
```

### Recipe: Progress bar fill

```javascript
{
  type: 'rect',
  style: { x: 40, y: 200, width: 300, height: 8, fill: '#6366f1', rx: 4 },
  animate: {
    width: [0, 300],
    sequence: 2,
    duration: 1.5,
    easing: 'ease-in-out',
  },
}
```

### Recipe: Color transition on text

```javascript
{
  type: 'text',
  content: 'Status: Active',
  style: { x: 40, y: 50, fontSize: 16, color: '#22c55e' },
  animate: {
    color: ['#94a3b8', '#22c55e'],  // gray → green
    sequence: 0,
    duration: 0.8,
    easing: 'ease-out',
  },
}
```

### Recipe: Decorative floating circles

```javascript
[
  { cx: 80, cy: 60, r: 30 },
  { cx: 200, cy: 180, r: 20 },
  { cx: 350, cy: 100, r: 25 },
].map((c, i) => ({
  type: 'circle',
  style: { ...c, fill: '#818cf8', opacity: 0.2 },
  animate: {
    scale: [0.3, 1],
    opacity: [0.05, 0.2],
    sequence: i + 2,
    duration: 0.7,
    easing: 'ease-out',
  },
}))
```
