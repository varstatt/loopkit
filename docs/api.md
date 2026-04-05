# API Reference

## `createCover(schema)`

Main entry point. Takes a `CoverSchema` and returns a `CoverResult`.

```ts
import { createCover } from "css-cover-art";

const cover = createCover({
  color: "#5E70F8",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 12 }, { mix: 5 }, { mix: 14 }] },
  elements: [...],
  blicks: [...],
  decorativeCircle: { x: "calc(100% - 72px)", y: "calc(100% - 72px)", size: 56, mix: 15 },
});
```

## `CoverSchema`

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `color` | `string` | — | **Required.** Theme hex color. Drives the entire palette. |
| `width` | `number` | `600` | Width in px. |
| `height` | `number` | `400` | Height in px. |
| `background` | `CoverBackground` | see below | Background gradient config. |
| `elements` | `CoverElement[]` | `[]` | Main visual elements. |
| `blicks` | `Blick[]` | `[]` | Decorative accent shapes. |
| `decorativeCircle` | `object` | — | Optional decorative circle. |

### `CoverBackground`

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `angle` | `number` | `135` | Gradient angle in degrees. |
| `stops` | `BackgroundStop[]` | `[{mix:12},{mix:5},{mix:14}]` | Color stops mixed with white. |

### `BackgroundStop`

| Field | Type | Description |
|-------|------|-------------|
| `mix` | `number` | Mix percentage with white (0-100). Higher = more color visible. |

## `CoverResult`

| Field | Type | Description |
|-------|------|-------------|
| `html` | `string` | Full HTML with `<style>` block for hover animations. |
| `style` | `Record<string, string>` | Container style object for React inline styles. |
| `innerHtml` | `string` | Elements + blicks without the container wrapper. |
| `hoverCss` | `string` | CSS hover animation rules (empty string if no hover effects). |
| `coverId` | `string` | Unique `data-cover` attribute value for this instance. |

## `Blick`

Decorative accent shapes.

| Field | Type | Description |
|-------|------|-------------|
| `shape` | `"diamond" \| "circle" \| "rect" \| "pill"` | Shape type. |
| `x` | `string` | CSS left position. |
| `y` | `string` | CSS top position. |
| `w` | `number` | Width in px. |
| `h` | `number` | Height in px (defaults to `w`). |
| `mix` | `number` | Color mix percentage with transparent. |
| `hover` | `HoverEffect` | Optional hover animation. |

## `CellColor`

Per-cell raw color override. Bypasses the theme color for individual grid cells.

| Field | Type | Description |
|-------|------|-------------|
| `bg` | `string` | Background color (any CSS color string). |
| `border` | `string` | Border color (any CSS color string). |

```ts
import type { CellColor } from "css-cover-art";

const colors: (CellColor | undefined)[] = [
  { bg: "#E8F5E9", border: "#66BB6A" },
  undefined, // falls back to theme color
  { bg: "#FFF3E0", border: "#FFA726" },
];
```

## `HoverEffect`

Available on elements, blicks, and decorative circles.

| Field | Type | Description |
|-------|------|-------------|
| `scale` | `number` | Scale factor on hover. |
| `translateX` | `number` | Horizontal translation in px. |
| `translateY` | `number` | Vertical translation in px. |
| `rotate` | `number` | Rotation in degrees. |
| `opacity` | `number` | Opacity on hover (0-1). |
| `delay` | `number` | Transition delay in ms. |

## Color utilities

```ts
import { hexToRgb, rgbToHex, colorMix, buildPalette } from "css-cover-art";
```

### `hexToRgb(hex: string): [number, number, number]`

Convert hex string to RGB tuple. Supports 3 and 6 digit hex, with or without `#`.

### `rgbToHex(rgb: [number, number, number]): string`

Convert RGB tuple to hex string with `#` prefix.

### `colorMix(rgb, percentage, target?)`

Replicate CSS `color-mix(in srgb, color N%, target)`.

- `"transparent"` (default): returns `rgba(r,g,b, pct/100)`
- `"white"`: blends toward white
- `"black"`: blends toward black

### `buildPalette(hex: string)`

Returns `{ rgb, transparent(pct), white(pct) }` helper object for convenient color generation.
