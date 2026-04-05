# API Reference

## `createAnimation(container, schema)`

Creates an animated SVG, mounts it into the container, and returns playback controls.

```typescript
function createAnimation(
  container: HTMLElement,
  schema: AnimationSchema,
): AnimationInstance;
```

**Behavior:**
- Creates SVG with `viewBox` matching schema dimensions
- Renders all elements at their final frame immediately (no blank flash)
- Attaches trigger (`autoplay` starts playing in infinite loop, `hover` plays on mouseenter and settles on mouseleave)

### `AnimationInstance`

```typescript
interface AnimationInstance {
  play(): void;     // Start/resume forward playback (loops infinitely)
  pause(): void;    // Pause at current frame
  reset(): void;    // Snap to final frame instantly, stop playback
  settle(): void;   // Smoothly animate from current position to final frame
  destroy(): void;  // Remove SVG, cancel rAF, clean up event listeners
  readonly state: "playing" | "paused" | "idle" | "settling" | "destroyed";
}
```

| Method | Description |
|--------|-------------|
| `play()` | Start playback. Loops infinitely. Cycle: fade-out → animate forward → hold. |
| `pause()` | Freeze at current frame, cancel rAF. |
| `reset()` | Stop playback, snap to final frame instantly. |
| `settle()` | Stop playback, smoothly animate from current position to final frame. Used internally by hover trigger on mouseleave. |
| `destroy()` | Cancel rAF, remove event listeners, remove SVG from DOM. Irreversible. |

---

## `renderToString(schema)`

Renders schema as SVG markup at final frame. No DOM required — works in Node.js/SSR.

```typescript
function renderToString(schema: AnimationSchema): string;
```

Returns a complete `<svg>` string with all elements at their `to` values.

---

## Schema

### `AnimationSchema`

```typescript
interface AnimationSchema {
  width: number;
  height: number;
  background?: string;        // Fill color for background rect
  stagger: number;            // Seconds between sequence steps
  trigger?: "autoplay" | "hover";  // Default: "autoplay"
  hold?: number;              // Seconds at final frame before restart. Default: 1.5
  elements: SchemaElement[];
}
```

### Element types

#### `TextElement`

```typescript
{
  type: "text";
  content: string;
  style: {
    x: number;
    y: number;
    fontSize?: number;      // Default: 14
    fontFamily?: string;    // Default: "'DM Sans', sans-serif"
    fontWeight?: number | string;  // Default: "normal"
    color?: string;         // Maps to SVG fill. Default: "#fff"
    opacity?: number;       // Default: 1
    textAnchor?: "start" | "middle" | "end";
    letterSpacing?: number;
  };
  animate?: AnimateConfig;
}
```

#### `RectElement`

```typescript
{
  type: "rect";
  style: {
    x: number;
    y: number;
    width: number;
    height: number;
    fill?: string;          // Default: "#fff"
    stroke?: string;
    strokeWidth?: number;
    rx?: number;            // Border radius
    opacity?: number;       // Default: 1
  };
  animate?: AnimateConfig;
}
```

#### `CircleElement`

```typescript
{
  type: "circle";
  style: {
    cx: number;
    cy: number;
    r: number;
    fill?: string;          // Default: "#fff"
    stroke?: string;
    strokeWidth?: number;
    opacity?: number;       // Default: 1
  };
  animate?: AnimateConfig;
}
```

#### `BadgeElement`

Composite element: `<g>` containing a shape (circle or rounded-rect) with centered text.

```typescript
{
  type: "badge";
  content: string;
  style: {
    x: number;              // Center position
    y: number;              // Center position
    r?: number;             // Radius. Default: 14
    fontSize?: number;      // Default: 12
    fontWeight?: number | string;  // Default: "bold"
    color?: string;         // Text fill. Default: "#fff"
    bg?: string;            // Shape fill. Default: "#222"
    opacity?: number;       // Default: 1
    isLabel?: boolean;      // true = rounded-rect label, false = circle
  };
  animate?: AnimateConfig;
}
```

### `AnimateConfig`

```typescript
interface AnimateConfig {
  sequence: number;         // Ordering (0 = first). Delay = sequence * stagger
  duration: number;         // Seconds
  easing?: EasingName;      // Default: "ease-out"
  [prop: string]: [from, to];  // Keyframe pairs for any style property
}
```

**Animated properties** use `[from, to]` pairs:
- Numeric: `opacity: [0, 1]`, `width: [0, 200]`, `y: [100, 50]`
- Color (hex): `color: ["#334155", "#34d399"]`, `fill: ["#000", "#fff"]`
- Badge-specific: `scale: [0, 1]`, `bg: ["#000", "#fff"]`

### Easings

| Name | Description |
|------|-------------|
| `linear` | Constant speed |
| `ease-in` | Slow start, fast end |
| `ease-out` | Fast start, slow end |
| `ease-in-out` | Slow start and end |

---

## Color utilities

Re-exported for convenience:

```typescript
function parseHex(hex: string): [number, number, number];
function rgbToHex(r: number, g: number, b: number): string;
function lerpColor(from: string, to: string, t: number): string;
```
