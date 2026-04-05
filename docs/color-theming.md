# Color Theming

## One color, full palette

Every cover is driven by a single hex color. The package generates all visual variations through opacity (mix with transparent) and tinting (mix with white or black).

This mirrors CSS `color-mix(in srgb, color N%, target)` — but computed as real RGBA values, so it works everywhere including SVG.

## How it works

The `color` in your schema is converted to RGB, then every `mix` percentage in elements, blicks, and backgrounds produces a computed color:

- **Mix with transparent** (`mix: 15`): `rgba(r, g, b, 0.15)` — used for element backgrounds, borders
- **Mix with white** (`mix: 12`): `rgb(r*0.12 + 255*0.88, ...)` — used for background gradient stops

## Background gradient

The `background.stops` array defines gradient stops mixed with white:

```ts
background: {
  angle: 135,
  stops: [
    { mix: 15 },  // 15% color, 85% white — lightest
    { mix: 6 },   // 6% color, 94% white — near-white
    { mix: 12 },  // 12% color, 88% white
  ]
}
```

This creates a subtle gradient from near-white to light tint — the characteristic pastel look.

## Element colors

Elements use `mix` with transparent for their backgrounds:

- `mix: 8-12` — very subtle, almost invisible
- `mix: 15-25` — light fill, good for cards and panels
- `mix: 30-45` — medium, good for text labels and borders
- `mix: 50-70` — strong, good for accents and active states

## Borders

`borderMix` controls border visibility. Typically 10-15 points higher than the element's `mix`:

```ts
{ type: "rect", mix: 10, borderMix: 22 }  // subtle fill, visible border
{ type: "grid", cellMix: [8, 11, 14, 17], cellBorderMix: [25, 29, 33, 37] }
```

## Using color utilities directly

```ts
import { colorMix, hexToRgb, buildPalette } from "css-cover-art";

const rgb = hexToRgb("#5E70F8");
colorMix(rgb, 15, "transparent");  // "rgba(94,112,248,0.15)"
colorMix(rgb, 12, "white");        // "rgb(227,231,254)"
colorMix(rgb, 50, "black");        // "rgb(47,56,124)"

// Or use buildPalette for convenience
const p = buildPalette("#5E70F8");
p.transparent(15);  // same as colorMix(rgb, 15, "transparent")
p.white(12);        // same as colorMix(rgb, 12, "white")
```

## Choosing good mix percentages

| Use case | Mix range | Target |
|----------|-----------|--------|
| Page background gradient | 5-15 | white |
| Card/panel fill | 6-12 | transparent |
| Card border | 18-30 | transparent |
| Skeleton line | 20-35 | transparent |
| Label text | 60-75 | transparent |
| Accent/highlight | 40-55 | transparent |
| Decorative blick | 30-50 | transparent |
| Decorative circle | 12-20 | transparent |
