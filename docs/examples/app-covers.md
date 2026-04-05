# App Cover Examples

Six full-page application cover schemas. Each demonstrates a distinct visual pattern.

## labeled-grid-2x2

A 2x2 grid with labeled sections, skeleton text lines, and per-cell color overrides. Uses `cellColors` for multi-hue tiles, `cellAspect` for square cells, `autoRows` and `center` for vertical centering. Good for discovery tools, categorized dashboards, form-based interfaces.

```ts
{
  color: "#5E70F8",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 15 }, { mix: 6 }, { mix: 12 }] },
  elements: [
    {
      type: "grid", cols: 2, rows: 2, inset: 12, cellRadius: 12,
      gapX: 12, gapY: 10, autoRows: true, center: true, cellAspect: "1/1",
      labels: ["Subjective", "Objective", "Assessment", "Plan"],
      cellColors: [
        { bg: "#EDE7F6", border: "#7C4DFF" },
        { bg: "#E8F5E9", border: "#66BB6A" },
        { bg: "#FFF3E0", border: "#FFA726" },
        { bg: "#E3F2FD", border: "#42A5F5" },
      ],
      cellLines: [[80, 65, 45], [70, 85, 55], [90, 60], [75, 85, 70]],
      opacity: 0.6,
      hover: { scale: 1.05, opacity: 0.8 },
    },
  ],
  blicks: [
    { shape: "diamond", x: "94%", y: "6%", w: 12, mix: 40, hover: { scale: 1.5, rotate: 90, opacity: 0.55 } },
    { shape: "rect", x: "6%", y: "92%", w: 8, h: 20, mix: 35, hover: { translateY: -8, opacity: 0.45 } },
    { shape: "circle", x: "95%", y: "45%", w: 6, mix: 50, hover: { scale: 2.5, opacity: 0.6 } },
  ],
  decorativeCircle: {
    x: "calc(100% - 72px)", y: "calc(100% - 72px)", size: 56, mix: 15,
    hover: { scale: 1.3, opacity: 0.9 },
  },
}
```

## numbered-tile-grid

A 4x2 grid of square tiles, each with a numbered circle and skeleton lines. Different colors per tile. Good for step-based workflows, tool collections, categorized items.

```ts
{
  color: "#6366F1",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 12 }, { mix: 6 }, { mix: 16 }] },
  elements: [
    {
      type: "grid", cols: 4, rows: 2, inset: 8, gap: 10, cellRadius: 12,
      cellMix: [8, 8, 8, 8, 8, 8, 8, 8],
      cellBorderMix: [20, 20, 20, 20, 20, 20, 20, 20],
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      cellLines: [[68, 38], [75, 45], [60, 30], [80, 50], [65, 35], [72, 42], [78, 48], [62, 32]],
      opacity: 0.7,
      hover: { scale: 1.1, translateY: -4 },
    },
  ],
  blicks: [
    { shape: "pill", x: "5%", y: "5%", w: 16, h: 6, mix: 40, hover: { translateX: 12, opacity: 0.5 } },
    { shape: "diamond", x: "96%", y: "85%", w: 8, mix: 35, hover: { rotate: 180, scale: 1.5, opacity: 0.5 } },
    { shape: "rect", x: "95%", y: "18%", w: 6, h: 16, mix: 30, hover: { opacity: 0.4 } },
  ],
  decorativeCircle: {
    x: "calc(100% - 60px)", y: "calc(100% - 60px)", size: 48, mix: 15,
    hover: { scale: 1.4, opacity: 0.9 },
  },
}
```

## document-transform

Left side: three stacked document cards. Right side: a structured output panel with title, skeleton lines, bullet items, and progress bars using `rect` content fields. Good for document processing, AI transformation, report generation.

```ts
{
  color: "#10B981",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 12 }, { mix: 5 }, { mix: 14 }] },
  elements: [
    // Left documents
    { type: "skeleton", x: "12%", y: "10%", w: "34%", h: "22%", lines: [60, 85, 70, 50], mix: 25, opacity: 0.5,
      hover: { translateX: -12, scale: 0.95, opacity: 0.3 } },
    { type: "skeleton", x: "12%", y: "36%", w: "34%", h: "26%", lines: [50, 75, 90, 65, 45], mix: 25, opacity: 0.5,
      hover: { translateX: -12, scale: 0.95, opacity: 0.3, delay: 100 } },
    { type: "skeleton", x: "12%", y: "66%", w: "34%", h: "22%", lines: [70, 80, 55], mix: 25, opacity: 0.5,
      hover: { translateX: -12, scale: 0.95, opacity: 0.3, delay: 200 } },
    // Right output panel — rect with title, lines, bullets, and progress bars
    { type: "rect", x: "calc(48% + 8px)", y: "10%", w: "40%", h: "80%",
      mix: 8, borderMix: 30, radius: 12, padding: 14, opacity: 0.6,
      titleWidth: 55, titleMix: 40,
      lines: [90, 75, 60],
      lineMix: [20, 18, 16],
      bullets: [
        { lines: [80, 50], bulletMix: 30 },
        { lines: [70, 60], bulletMix: 30 },
        { lines: [85, 45], bulletMix: 30 },
      ],
      bulletSize: 8,
      progressBars: [
        { fill: 72, fillMix: 40, trackMix: 12 },
        { fill: 45, fillMix: 35, trackMix: 10 },
      ],
      hover: { translateX: 10, scale: 1.05, opacity: 0.85 } },
  ],
  blicks: [
    { shape: "diamond", x: "92%", y: "93%", w: 10, mix: 40, hover: { rotate: 180, scale: 1.75, opacity: 0.55 } },
    { shape: "pill", x: "45%", y: "5%", w: 20, h: 4, mix: 35, hover: { opacity: 0.45 } },
    { shape: "circle", x: "5%", y: "35%", w: 6, mix: 45, hover: { scale: 3, opacity: 0.6 } },
  ],
  decorativeCircle: {
    x: "16px", y: "16px", size: 40, mix: 12,
    hover: { scale: 1.5, opacity: 0.9 },
  },
}
```

## calendar-grid

A 7x5 calendar grid with scattered content dots. Good for scheduling, content planning, habit tracking.

```ts
{
  color: "#F59E0B",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 14 }, { mix: 6 }, { mix: 12 }] },
  elements: [
    {
      type: "grid", cols: 7, rows: 5, inset: 12, gap: 4, cellRadius: 6,
      cellMix: [6, 12, 16, 22, 28, 35, 40, 18, 8, 14,
                6, 12, 16, 22, 28, 35, 40, 18, 8, 14,
                6, 12, 16, 22, 28, 35, 40, 18, 8, 14,
                6, 12, 16, 22, 28],
      cellBorderMix: Array.from({ length: 35 }, () => 22),
      opacity: 0.55,
      hover: { opacity: 0.75 },
    },
    // Content dots
    { type: "circle", x: "20%", y: "22%", size: 10, mix: 55, hover: { scale: 2, opacity: 0.95, delay: 0 } },
    { type: "circle", x: "55%", y: "38%", size: 10, mix: 55, hover: { scale: 2, opacity: 0.95, delay: 80 } },
    { type: "circle", x: "30%", y: "50%", size: 10, mix: 55, hover: { scale: 2, opacity: 0.95, delay: 160 } },
    { type: "circle", x: "72%", y: "32%", size: 10, mix: 55, hover: { scale: 2, opacity: 0.95, delay: 240 } },
    { type: "circle", x: "48%", y: "60%", size: 10, mix: 55, hover: { scale: 2, opacity: 0.95, delay: 320 } },
    { type: "circle", x: "15%", y: "45%", size: 10, mix: 55, hover: { scale: 2, opacity: 0.95, delay: 400 } },
  ],
  blicks: [
    { shape: "pill", x: "8%", y: "94%", w: 14, h: 4, mix: 45, hover: { translateX: 12, opacity: 0.5 } },
    { shape: "diamond", x: "35%", y: "8%", w: 8, mix: 35, hover: { rotate: 180, scale: 1.5, opacity: 0.45 } },
    { shape: "rect", x: "93%", y: "70%", w: 6, h: 12, mix: 30, hover: { opacity: 0.4 } },
  ],
  decorativeCircle: {
    x: "calc(100% - 72px)", y: "16px", size: 56, mix: 12,
    hover: { scale: 1.3, opacity: 0.9 },
  },
}
```

## social-feed-timeline

A centered timeline of posts with avatars, name + handle rows (`nameWidth`), text lines, optional images, and action bars. Sidebars on left and right. Good for social feeds, community platforms, messaging apps.

```ts
{
  color: "#F97316",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 12 }, { mix: 6 }, { mix: 14 }] },
  elements: [
    // Main feed — uses nameWidth for name + handle rows
    {
      type: "flex-column", x: "25%", y: "6%", w: "50%", opacity: 0.55,
      hover: { translateY: -14, opacity: 0.75 },
      items: [
        { avatar: 24, nameWidth: 38, nameMix: 50, lines: [90, 75], actions: 4 },
        { avatar: 24, nameWidth: 32, nameMix: 45, lines: [85, 60], imageH: 32, actions: 4 },
        { avatar: 24, nameWidth: 42, nameMix: 50, lines: [70, 80, 45], actions: 4 },
        { avatar: 24, nameWidth: 36, nameMix: 45, lines: [95, 68], actions: 4 },
        { avatar: 24, nameWidth: 30, nameMix: 50, lines: [80, 55], imageH: 32, actions: 4 },
        { avatar: 24, nameWidth: 34, nameMix: 45, lines: [88, 72], actions: 4 },
      ],
    },
    // Left sidebar
    { type: "skeleton", x: "6%", y: "10%", w: "14%", lines: [70, 55, 60, 50, 65], mix: 22, opacity: 0.35,
      hover: { translateX: 3, opacity: 0.6 } },
    // Right sidebar
    { type: "skeleton", x: "80%", y: "10%", w: "14%", lines: [80, 60, 70], mix: 22, opacity: 0.3,
      hover: { translateX: -3, opacity: 0.55 } },
  ],
  blicks: [
    { shape: "diamond", x: "8%", y: "7%", w: 8, mix: 40, hover: { translateY: -6, scale: 1.5, opacity: 0.5 } },
    { shape: "pill", x: "40%", y: "95%", w: 16, h: 4, mix: 35, hover: { opacity: 0.45 } },
    { shape: "circle", x: "93%", y: "50%", w: 6, mix: 42, hover: { scale: 3, opacity: 0.6 } },
  ],
  decorativeCircle: {
    x: "calc(100% - 72px)", y: "calc(100% - 60px)", size: 56, mix: 12,
    hover: { scale: 1.4, opacity: 0.9 },
  },
}
```

## coin-stack-chart

A line chart on top, stacked segment columns below (using `stacked` bar chart mode), and floating coin circles. Uses `segmentGap` and `segmentAspect` for coin-like block styling. Good for finance, crypto, investment dashboards.

```ts
{
  color: "#8B5CF6",
  width: 600,
  height: 400,
  background: { angle: 135, stops: [{ mix: 14 }, { mix: 6 }, { mix: 12 }] },
  elements: [
    // Price chart
    {
      type: "polyline", x: "12%", y: "12%", w: "76%", h: "30%", opacity: 0.45,
      hover: { opacity: 0.75 },
      points: [[0, 75], [10, 67], [20, 80], [30, 50], [40, 58], [50, 33], [60, 42], [70, 25], [80, 30], [90, 13], [100, 20]],
    },
    // Coin columns — stacked segments instead of solid bars
    {
      type: "bar-chart", x: "12%", y: "50%", w: "76%", h: "38%",
      bars: [3, 5, 7, 4, 6, 5, 3], stacked: true,
      segmentGap: 3, segmentAspect: "4/1", barGap: 12, opacity: 0.55,
      hover: { translateY: -8, opacity: 0.8 },
    },
    // Floating coins
    { type: "circle", x: "16%", y: "18%", size: 20, mix: 20, borderMix: 35, innerRing: true, opacity: 0.55,
      hover: { scale: 1.5, translateY: -8, opacity: 0.85 } },
    { type: "circle", x: "72%", y: "35%", size: 20, mix: 28, borderMix: 43, innerRing: true, opacity: 0.55,
      hover: { scale: 1.5, translateY: -8, opacity: 0.85, delay: 100 } },
    { type: "circle", x: "25%", y: "52%", size: 20, mix: 36, borderMix: 51, innerRing: true, opacity: 0.55,
      hover: { scale: 1.5, translateY: -8, opacity: 0.85, delay: 200 } },
    { type: "circle", x: "45%", y: "28%", size: 20, mix: 44, borderMix: 59, innerRing: true, opacity: 0.55,
      hover: { scale: 1.5, translateY: -8, opacity: 0.85, delay: 300 } },
  ],
  blicks: [
    { shape: "pill", x: "7%", y: "6%", w: 12, h: 4, mix: 38, hover: { translateX: 12, opacity: 0.5 } },
    { shape: "diamond", x: "85%", y: "92%", w: 8, mix: 35, hover: { rotate: 180, scale: 1.75, opacity: 0.45 } },
    { shape: "rect", x: "6%", y: "40%", w: 6, h: 16, mix: 30, hover: { opacity: 0.4 } },
  ],
  decorativeCircle: {
    x: "calc(100% - 72px)", y: "16px", size: 56, mix: 12,
    hover: { scale: 1.4, opacity: 0.9 },
  },
}
```
