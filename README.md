# css-cover-art

Schema-driven cover art engine. Define covers as JSON/TypeScript objects, render to HTML with inline styles and hover animations. Zero dependencies.

## Install

```bash
npm install css-cover-art
```

## Usage

```ts
import { createCover } from "css-cover-art";

const cover = createCover({
  color: "#5E70F8",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 12 }, { mix: 5 }, { mix: 14 }] },
  elements: [
    { type: "grid", cols: 2, rows: 2, inset: 12, cellRadius: 8,
      labels: ["S", "O", "A", "P"],
      cellLines: [[80, 65], [70, 85], [90, 60], [75, 85]] },
    { type: "circle", x: "90%", y: "90%", size: 56, mix: 15,
      hover: { scale: 1.3, opacity: 0.9 } },
  ],
  blicks: [
    { shape: "diamond", x: "94%", y: "6%", w: 12, mix: 40,
      hover: { scale: 1.5, rotate: 90 } },
  ],
});

cover.html;      // Full HTML with <style> block for hover
cover.style;     // { position, width, height, overflow, background }
cover.innerHtml; // Elements + blicks without container
cover.hoverCss;  // CSS hover animation rules
cover.coverId;   // Unique data-cover attribute value
```

Same schema = same output. One hex color drives the entire palette via opacity variations.

## Element types

| Type | What it renders |
|------|-----------------|
| `grid` | Labeled grids, calendars, matrices |
| `skeleton` | Document lines, text placeholders |
| `circle` | Avatars, dots, rings |
| `rect` | Cards, panels, image blocks |
| `bar-chart` | Vertical bar charts |
| `polyline` | Line/area charts |
| `diamond` | Decorative accent shapes |
| `stack` | Layered cards, stacked panels |
| `flex-column` | Timeline feeds, vertical lists |
| `text-grid` | Character/symbol grids |

## Color theming

One color drives everything. The package replaces CSS `color-mix()` with computed RGBA values:

```ts
import { colorMix, hexToRgb } from "css-cover-art";

colorMix([94, 112, 248], 15, "transparent"); // rgba(94,112,248,0.15)
colorMix([94, 112, 248], 12, "white");       // blended toward white
```

## Docs

- [API Reference](docs/api.md)
- [Elements](docs/elements.md)
- [Color Theming](docs/color-theming.md)
- [Hover Animations](docs/hover.md)
- [Examples](docs/examples/)

## About

Built and maintained by [Jurij Tokarski](https://varstatt.com/jurij) from [Varstatt](https://varstatt.com). MIT licensed.

- [GitHub](https://github.com/varstatt/css-cover-art)
- [npm](https://www.npmjs.com/package/css-cover-art)
- [Issues](https://github.com/varstatt/css-cover-art/issues)
