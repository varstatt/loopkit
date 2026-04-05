# Element Types

All elements share these base properties:

| Field | Type | Description |
|-------|------|-------------|
| `x` | `string` | CSS left position (e.g., `"10%"`, `"50px"`). |
| `y` | `string` | CSS top position. |
| `w` | `string` | CSS width. |
| `h` | `string` | CSS height. |
| `mix` | `number` | Color mix % with transparent (0-100). |
| `borderMix` | `number` | Border color mix %. 0 = no border. |
| `borderWidth` | `number` | Border width in px. Default: 1.5. |
| `radius` | `number` | Border radius in px. |
| `opacity` | `number` | CSS opacity (0-1). |
| `hover` | `HoverEffect` | Hover animation (HTML output only). |

---

## `grid`

Renders a CSS Grid of cells with optional labels and skeleton lines.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cols` | `number` | — | **Required.** Column count. |
| `rows` | `number` | — | **Required.** Row count. |
| `inset` | `number` | `12` | Inset from edges as %. |
| `cellRadius` | `number` | `12` | Cell border radius in px. |
| `cellMix` | `number[]` | auto | Per-cell background mix %. |
| `cellBorderMix` | `number[]` | auto | Per-cell border mix %. |
| `labels` | `string[]` | — | Per-cell text labels. |
| `cellLines` | `number[][]` | — | Per-cell skeleton line widths (%). |
| `gap` | `number` | `8` | Gap between cells in px. |
| `gapX` | `number` | — | Column gap override in px (overrides `gap` for horizontal). |
| `gapY` | `number` | — | Row gap override in px (overrides `gap` for vertical). |
| `autoRows` | `boolean` | `false` | Use auto row sizing instead of equal-height rows. |
| `center` | `boolean` | `false` | Vertically center with `top:50%;transform:translateY(-50%)`. |
| `cellColors` | `(CellColor \| undefined)[]` | — | Per-cell raw color overrides. Bypasses theme color. |
| `cellAspect` | `string` | — | CSS `aspect-ratio` for cells (e.g., `"1/1"`). |

```ts
{ type: "grid", cols: 2, rows: 2, inset: 12, cellRadius: 12,
  labels: ["S", "O", "A", "P"],
  cellLines: [[80, 65, 45], [70, 85, 55], [90, 60], [75, 85, 70]] }

// Multi-color grid with per-cell colors and square aspect
{ type: "grid", cols: 4, rows: 2, gap: 10, cellRadius: 12,
  cellAspect: "1/1", autoRows: true, center: true,
  cellColors: [
    { bg: "#E8F5E9", border: "#66BB6A" },
    { bg: "#FFF3E0", border: "#FFA726" },
    { bg: "#E3F2FD", border: "#42A5F5" },
    { bg: "#FCE4EC", border: "#EC407A" },
  ] }
```

---

## `skeleton`

Renders horizontal lines of varying widths — text placeholders, document lines.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `lines` | `number[]` | — | **Required.** Line widths as %. |
| `lineHeight` | `number` | `6` | Height per line in px. |
| `lineGap` | `number` | `4` | Gap between lines in px. |
| `lineMix` | `number[]` | — | Per-line mix %. Cycles if shorter. |

```ts
{ type: "skeleton", x: "12%", y: "10%", w: "76%",
  lines: [60, 85, 70, 50, 80], mix: 25 }
```

---

## `circle`

Renders a circle. Useful for avatars, decorative dots, rings.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `size` | `number \| string` | — | **Required.** Diameter. |
| `innerRing` | `boolean` | `false` | Show inner ring border. |

```ts
{ type: "circle", x: "50%", y: "50%", size: 56, mix: 20 }
```

---

## `rect`

Renders a positioned rectangle. Cards, panels, image blocks. Optionally contains skeleton lines, bullet lists, progress bars, or raw HTML.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `lines` | `number[]` | — | Skeleton line widths (%). Turns rect into a card/panel. |
| `titleWidth` | `number` | — | Title line width %. Rendered thicker than body lines. |
| `lineHeight` | `number` | `4` | Line height in px. |
| `lineGap` | `number` | `4` | Gap between lines in px. |
| `lineMix` | `number[]` | — | Per-line mix % (cycles if shorter). |
| `titleMix` | `number` | `35` | Title line mix %. |
| `bullets` | `{ lines: number[]; bulletMix?: number }[]` | — | Bullet items with a square marker and lines. |
| `bulletSize` | `number` | `10` | Bullet square size in px. |
| `progressBars` | `{ fill: number; fillMix?: number; trackMix?: number }[]` | — | Progress bars at bottom. `fill` = percentage. |
| `rawContent` | `string` | — | Raw HTML injection. |
| `padding` | `number` | `16` | Inner padding in px. |

```ts
// Simple rect
{ type: "rect", x: "10%", y: "10%", w: "80%", h: "40%", mix: 10, borderMix: 22, radius: 12 }

// Card panel with title, lines, bullets, and progress bars
{ type: "rect", x: "52%", y: "8%", w: "40%", h: "84%", mix: 6, borderMix: 25, radius: 12, padding: 14,
  titleWidth: 55, titleMix: 40,
  lines: [90, 75, 60],
  bullets: [
    { lines: [80, 50], bulletMix: 30 },
    { lines: [70, 60], bulletMix: 30 },
  ],
  progressBars: [
    { fill: 72, fillMix: 40, trackMix: 12 },
    { fill: 45, fillMix: 35, trackMix: 10 },
  ] }
```

---

## `bar-chart`

Renders vertical bars anchored at the bottom.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `bars` | `number[]` | — | **Required.** Bar heights as % of container. |
| `barGap` | `number` | `4` | Gap between bars in px. |
| `barMix` | `number[]` | auto | Per-bar background mix %. |
| `barBorderMix` | `number[]` | auto | Per-bar border mix %. |
| `stacked` | `boolean` | `false` | Stacked mode: `bars` values = segment counts per column. |
| `segmentGap` | `number` | `2` | Gap between stacked segments in px. |
| `segmentAspect` | `string` | `"3/1"` | CSS aspect-ratio for stacked segments. |

```ts
// Standard bar chart
{ type: "bar-chart", x: "12%", y: "50%", w: "76%", h: "38%",
  bars: [40, 70, 50, 80, 60, 45, 30] }

// Stacked segments (each bar = column of small blocks)
{ type: "bar-chart", x: "12%", y: "20%", w: "76%", h: "68%",
  bars: [3, 5, 4, 6, 5, 3, 4], stacked: true,
  segmentGap: 3, segmentAspect: "4/1", barGap: 8 }
```

---

## `polyline`

Renders a line chart using inline SVG. Points are normalized 0-100.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `points` | `[number, number][]` | — | **Required.** [x, y] pairs (0-100). |
| `strokeMix` | `number` | `50` | Stroke color mix %. |
| `strokeWidth` | `number` | `2` | Stroke width in px. |
| `fill` | `boolean` | `true` | Fill area under line. |
| `fillMix` | `number` | `6` | Fill color mix %. |

```ts
{ type: "polyline", x: "12%", y: "12%", w: "76%", h: "30%",
  points: [[0, 75], [10, 67], [30, 80], [50, 50], [70, 58], [90, 13], [100, 20]] }
```

---

## `diamond`

Renders a rotated square — decorative blick/accent.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `size` | `number` | — | **Required.** Size in px. |

```ts
{ type: "diamond", x: "90%", y: "10%", size: 12, mix: 40 }
```

---

## `stack`

Renders centered stacked rectangles of decreasing width.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `count` | `number` | — | **Required.** Number of layers. |
| `widths` | `number[]` | auto | Width % per layer. Default decreases by 8%. |
| `layerHeight` | `number` | `24` | Height per layer in px. |
| `layerGap` | `number` | `4` | Gap between layers in px. |
| `layerMix` | `number[]` | auto | Per-layer mix %. |

```ts
{ type: "stack", x: "15%", y: "15%", w: "70%", h: "70%",
  count: 5, widths: [100, 92, 84, 76, 68] }
```

---

## `flex-column`

Renders a vertical feed of items — timeline posts, sidebar nav items.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `items` | `FlexColumnItem[]` | — | **Required.** Items in the column. |
| `separators` | `boolean` | `true` | Show separator lines between items. |
| `separatorMix` | `number` | `15` | Separator line mix %. |

### `FlexColumnItem`

| Field | Type | Description |
|-------|------|-------------|
| `avatar` | `number` | Circle diameter in px. 0 = no avatar. |
| `avatarMix` | `number` | Avatar mix %. |
| `nameWidth` | `number` | Name line width %. Renders a bold "name" + shorter "handle" row above text lines. |
| `nameMix` | `number` | Name line mix %. Default: 45. |
| `lines` | `number[]` | Skeleton line widths (%). |
| `lineMix` | `number` | Line mix %. |
| `imageH` | `number` | Image block height in px. |
| `imageMix` | `number` | Image block mix %. |
| `actions` | `number` | Count of action dots. |
| `actionMix` | `number` | Action dots mix %. |

```ts
{ type: "flex-column", x: "25%", y: "6%", w: "50%",
  items: [
    { avatar: 24, lines: [35, 90, 75], actions: 4 },
    { avatar: 24, lines: [28, 85, 60], imageH: 32, actions: 4 },
  ] }

// With name + handle rows (social post style)
{ type: "flex-column", x: "20%", y: "6%", w: "60%", separators: true,
  items: [
    { avatar: 28, nameWidth: 40, nameMix: 50, lines: [90, 75, 60], actions: 4 },
    { avatar: 28, nameWidth: 35, nameMix: 50, lines: [85, 70], imageH: 40, actions: 4 },
  ] }
```

---

## `text-grid`

Renders characters in a grid layout — symbol matrices, keyboard layouts.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `chars` | `string[]` | — | **Required.** Characters to display. Cycles. |
| `cols` | `number` | — | **Required.** Column count. |
| `rows` | `number` | — | **Required.** Row count. |
| `fontSize` | `number` | `10` | Font size in px. |
| `gap` | `number` | `2` | Gap between cells in px. |

```ts
{ type: "text-grid", x: "15%", y: "15%", w: "70%", h: "70%",
  chars: ["⌘", "⇧", "⌥", "⌃", "⏎", "⇥"], cols: 6, rows: 4 }
```
