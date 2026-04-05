# Category Cover Examples

Eight category/section cover schemas. Simple, iconic visuals.

## canvas-layout

A 3x3 grid with a floating overlay panel. Business model canvas, strategy board.

```ts
{
  color: "#F59E0B",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 18 }, { mix: 8 }, { mix: 20 }] },
  elements: [
    {
      type: "grid", cols: 3, rows: 3, inset: 5, gap: 6, cellRadius: 8,
      cellMix: Array.from({ length: 9 }, () => 10),
      cellBorderMix: Array.from({ length: 9 }, () => 20),
      opacity: 0.4,
    },
    { type: "rect", x: "33%", y: "25%", w: "34%", h: "50%", mix: 15, borderMix: 20, radius: 12 },
  ],
  decorativeCircle: { x: "calc(100% - 80px)", y: "calc(100% - 80px)", size: 64, mix: 20 },
}
```

## venn-overlap

Three overlapping circles — competitive analysis, comparison.

```ts
{
  color: "#3B82F6",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 15 }, { mix: 6 }, { mix: 16 }] },
  elements: [
    { type: "circle", x: "22%", y: "calc(50% - 90px)", size: 180, mix: 8, borderMix: 25 },
    { type: "circle", x: "42%", y: "calc(50% - 90px)", size: 180, mix: 8, borderMix: 25 },
    { type: "circle", x: "32%", y: "calc(35% - 80px)", size: 160, mix: 6, borderMix: 20 },
  ],
  decorativeCircle: { x: "calc(100% - 80px)", y: "calc(100% - 80px)", size: 96, mix: 15 },
}
```

## concentric-rings

Concentric circles — market sizing, TAM/SAM/SOM, scope layers.

```ts
{
  color: "#10B981",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 15 }, { mix: 6 }, { mix: 15 }] },
  elements: [
    { type: "circle", x: "calc(50% - 140px)", y: "calc(50% - 140px)", size: 280, mix: 5, borderMix: 20 },
    { type: "circle", x: "calc(50% - 95px)", y: "calc(50% - 95px)", size: 190, mix: 8, borderMix: 25 },
    { type: "circle", x: "calc(50% - 50px)", y: "calc(50% - 50px)", size: 100, mix: 12, borderMix: 30 },
  ],
  decorativeCircle: { x: "16px", y: "16px", size: 80, mix: 20 },
}
```

## persona-avatars

Abstract person silhouettes — user personas, team members.

```ts
{
  color: "#8B5CF6",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 15 }, { mix: 6 }, { mix: 16 }] },
  elements: [
    // Person 1: head + body
    { type: "circle", x: "20%", y: "30%", size: 48, mix: 20, borderMix: 25 },
    { type: "rect", x: "calc(20% + 8px)", y: "calc(30% + 52px)", w: "32px", h: "56px", mix: 12, radius: 12 },
    // Person 2: head + body
    { type: "circle", x: "calc(50% - 28px)", y: "28%", size: 56, mix: 25, borderMix: 30 },
    { type: "rect", x: "calc(50% - 20px)", y: "calc(28% + 60px)", w: "40px", h: "64px", mix: 15, radius: 12 },
    // Person 3: head + body
    { type: "circle", x: "calc(80% - 48px)", y: "32%", size: 44, mix: 20, borderMix: 25 },
    { type: "rect", x: "calc(80% - 42px)", y: "calc(32% + 48px)", w: "28px", h: "52px", mix: 10, radius: 12 },
    // Base line
    { type: "rect", x: "calc(50% - 128px)", y: "calc(100% - 48px)", w: "256px", h: "32px", mix: 15, radius: 9999 },
  ],
}
```

## priority-matrix

2x2 grid with scattered priority dots.

```ts
{
  color: "#F43F5E",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 15 }, { mix: 6 }, { mix: 15 }] },
  elements: [
    {
      type: "grid", cols: 2, rows: 2, inset: 8, gap: 8, cellRadius: 12,
      cellMix: [20, 12, 10, 8], cellBorderMix: [20, 15, 12, 10], opacity: 0.5,
    },
    { type: "circle", x: "25%", y: "25%", size: 24, mix: 30 },
    { type: "circle", x: "60%", y: "35%", size: 16, mix: 25 },
    { type: "circle", x: "30%", y: "60%", size: 20, mix: 20 },
  ],
  decorativeCircle: { x: "calc(100% - 80px)", y: "32px", size: 64, mix: 20 },
}
```

## document-lines

Skeleton document with section headers — PRD, spec, report.

```ts
{
  color: "#22C55E",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 15 }, { mix: 6 }, { mix: 16 }] },
  elements: [
    {
      type: "skeleton", x: "10%", y: "8%", w: "80%",
      lines: [60, 85, 75, 90, 50, 80, 70, 65],
      lineMix: [25, 18, 18, 18, 25, 18, 18, 18],
      lineHeight: 8, lineGap: 10, opacity: 0.4,
    },
  ],
  decorativeCircle: { x: "16px", y: "calc(100% - 112px)", size: 96, mix: 15 },
}
```

## stacked-layers

Three stacked horizontal panels — tech stack, architecture layers.

```ts
{
  color: "#06B6D4",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 15 }, { mix: 6 }, { mix: 15 }] },
  elements: [
    {
      type: "stack", x: "calc(50% - 150px)", y: "20%", w: "300px", h: "60%",
      count: 3, widths: [65, 55, 45], layerHeight: 50, layerGap: 12,
      layerMix: [12, 12, 12], borderMix: 20,
    },
  ],
  decorativeCircle: { x: "24px", y: "24px", size: 64, mix: 20 },
}
```

## bar-chart-with-dots

Bar chart with timeline dots on a horizontal line — cost planning, roadmap.

```ts
{
  color: "#EAB308",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 15 }, { mix: 6 }, { mix: 16 }] },
  elements: [
    // Bar chart
    {
      type: "bar-chart", x: "12%", y: "50%", w: "76%", h: "40%",
      bars: [45, 70, 90, 55], barGap: 12,
      barMix: [25, 25, 30, 20], barBorderMix: [20, 25, 25, 20],
    },
    // Timeline dots
    { type: "circle", x: "20%", y: "28%", size: 10, mix: 25, borderMix: 20 },
    { type: "circle", x: "40%", y: "28%", size: 10, mix: 25, borderMix: 20 },
    { type: "circle", x: "60%", y: "28%", size: 10, mix: 25, borderMix: 20 },
    { type: "circle", x: "80%", y: "28%", size: 10, mix: 25, borderMix: 20 },
  ],
  decorativeCircle: { x: "16px", y: "16px", size: 64, mix: 20 },
}
```
