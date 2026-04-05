# Common Patterns

Reusable schema patterns for typical cover art layouts.

## Skeleton document

Text placeholder lines at varying widths. The most basic pattern.

```ts
{
  color: "#6366F1",
  elements: [
    {
      type: "skeleton", x: "15%", y: "12%", w: "70%",
      lines: [60, 90, 75, 45, 85, 70, 50, 80], mix: 25, lineHeight: 6, lineGap: 5,
    },
  ],
}
```

## Bar chart with header

A heading skeleton line above a bar chart.

```ts
{
  color: "#10B981",
  elements: [
    { type: "skeleton", x: "12%", y: "8%", w: "40%", lines: [100], mix: 35, lineHeight: 10 },
    { type: "bar-chart", x: "12%", y: "25%", w: "76%", h: "65%",
      bars: [30, 55, 80, 45, 70, 90, 35, 60, 75, 50] },
  ],
}
```

## Line chart area

Price/metric chart filling the cover.

```ts
{
  color: "#8B5CF6",
  elements: [
    {
      type: "polyline", x: "8%", y: "10%", w: "84%", h: "80%",
      points: [[0, 80], [10, 65], [20, 75], [30, 45], [40, 55], [50, 30], [60, 40], [70, 20], [80, 35], [90, 10], [100, 25]],
      strokeMix: 60, fillMix: 10,
    },
  ],
}
```

## Concentric rings

Nested circles at different sizes and opacities.

```ts
{
  color: "#EC4899",
  elements: [
    { type: "circle", x: "calc(50% - 100px)", y: "calc(50% - 100px)", size: 200, mix: 6 },
    { type: "circle", x: "calc(50% - 75px)", y: "calc(50% - 75px)", size: 150, mix: 10 },
    { type: "circle", x: "calc(50% - 50px)", y: "calc(50% - 50px)", size: 100, mix: 15 },
    { type: "circle", x: "calc(50% - 25px)", y: "calc(50% - 25px)", size: 50, mix: 22 },
  ],
}
```

## Venn diagram

Two overlapping circles.

```ts
{
  color: "#06B6D4",
  elements: [
    { type: "circle", x: "25%", y: "calc(50% - 80px)", size: 160, mix: 12, borderMix: 25 },
    { type: "circle", x: "45%", y: "calc(50% - 80px)", size: 160, mix: 12, borderMix: 25 },
  ],
}
```

## Calendar grid

7x5 grid mimicking a monthly calendar.

```ts
{
  color: "#F59E0B",
  elements: [
    {
      type: "grid", cols: 7, rows: 5, inset: 10, gap: 4, cellRadius: 4,
      cellMix: Array.from({ length: 35 }, (_, i) => 6 + (i % 7) * 4),
      cellBorderMix: Array.from({ length: 35 }, () => 18),
    },
  ],
}
```

## Timeline feed

Vertical list of posts with avatars.

```ts
{
  color: "#F97316",
  elements: [
    {
      type: "flex-column", x: "20%", y: "5%", w: "60%",
      items: [
        { avatar: 20, lines: [40, 85, 70], actions: 3 },
        { avatar: 20, lines: [35, 90, 55], imageH: 28, actions: 3 },
        { avatar: 20, lines: [45, 75, 80, 50], actions: 3 },
        { avatar: 20, lines: [30, 88, 65], actions: 3 },
      ],
    },
  ],
}
```

## Priority matrix

2x2 grid with axis labels.

```ts
{
  color: "#EF4444",
  elements: [
    {
      type: "grid", cols: 2, rows: 2, inset: 15, gap: 6, cellRadius: 8,
      labels: ["Urgent + Important", "Not Urgent + Important", "Urgent + Not Important", "Neither"],
      cellMix: [18, 12, 12, 6],
      cellBorderMix: [30, 22, 22, 15],
    },
  ],
}
```

## Layered cards

Stacked panels of decreasing width.

```ts
{
  color: "#14B8A6",
  elements: [
    {
      type: "stack", x: "15%", y: "10%", w: "70%", h: "80%",
      count: 5, widths: [100, 92, 84, 76, 68],
      layerHeight: 40, layerGap: 8, layerMix: [8, 12, 16, 20, 24],
    },
  ],
}
```

## QR code grid

Dense grid of varying-opacity cells.

```ts
{
  color: "#1E293B",
  elements: [
    {
      type: "grid", cols: 10, rows: 10, inset: 15, gap: 2, cellRadius: 2,
      cellMix: Array.from({ length: 100 }, () => 10 + Math.floor(Math.random() * 50)),
    },
  ],
}
```

## Symbol grid

Character grid with monospace symbols.

```ts
{
  color: "#7C3AED",
  elements: [
    {
      type: "text-grid", x: "15%", y: "15%", w: "70%", h: "70%",
      chars: ["⌘", "⇧", "⌥", "⌃", "⏎", "⇥", "⌫", "⎋"],
      cols: 8, rows: 4, fontSize: 14, mix: 40,
    },
  ],
}
```
