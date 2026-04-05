# Tool Cover Art Examples

A collection of css-cover-art schemas derived from real-world tool cover illustrations. Each entry uses a generic visual name describing the pattern, not the underlying tool.

---

## document-query-lines

Skeleton text lines with a small bar chart in the corner -- a document overview pattern.

```ts
const cover: CoverSchema = {
  color: "#0EA5E9",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 24, y: 24, w: 360, lines: [15, 45, 55, 35, 50, 15], mix: 0.25, lineHeight: 8, lineGap: 8 },
    { type: "bar-chart", x: 430, y: 310, w: 80, h: 60, bars: [33, 50, 25, 42] },
  ],
  decorativeCircle: { x: 520, y: 340, size: 56, mix: 0.15 },
};
```

---

## code-block-formatted

Indented code lines with a decorative circle -- structured data with nesting.

```ts
const cover: CoverSchema = {
  color: "#F59E0B",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 24, y: 24, w: 400, lines: [20, 50, 40, 35, 45, 30, 15], mix: 0.25, lineHeight: 8, lineGap: 6 },
  ],
  decorativeCircle: { x: 520, y: 320, size: 80, mix: 0.15 },
};
```

---

## pixel-grid-mosaic

A 5x5 grid of filled and empty cells with corner anchors -- a matrix pattern.

```ts
const cover: CoverSchema = {
  color: "#6B7280",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.12 }] },
  elements: [
    { type: "grid", cols: 5, rows: 5, inset: 90, gap: 4, cellRadius: 2, cellMix: 0.2 },
    { type: "rect", x: 16, y: 16, w: 56, h: 56, radius: 8, mix: 0.06, borderMix: 0.15 },
    { type: "rect", x: 528, y: 328, w: 56, h: 56, radius: 8, mix: 0.06, borderMix: 0.15 },
  ],
};
```

---

## pattern-input-pills

A text input with small pill tags below -- pattern matching with results.

```ts
const cover: CoverSchema = {
  color: "#8B5CF6",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 24, y: 24, w: 400, lines: [70], mix: 0.2, lineHeight: 12 },
    { type: "rect", x: 24, y: 50, w: 350, h: 32, radius: 8, mix: 0.08, borderMix: 0.15 },
    { type: "stack", x: 24, y: 96, w: 300, h: 20, count: 3, widths: [64, 48, 56] },
  ],
  decorativeCircle: { x: 520, y: 320, size: 64, mix: 0.15 },
};
```

---

## schedule-slot-fields

A row of labeled time-slot fields with corner circles -- a schedule expression.

```ts
const cover: CoverSchema = {
  color: "#14B8A6",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "text-grid", x: 140, y: 155, w: 320, h: 56, chars: "*", cols: 5, rows: 1 },
  ],
  blicks: [
    { shape: "circle", x: 16, y: 16, size: 64, mix: 0.15 },
    { shape: "circle", x: 520, y: 330, size: 48, mix: 0.1 },
  ],
};
```

---

## segmented-id-rows

Repeated rows of dashed segments with dot separators -- unique identifier lines.

```ts
const cover: CoverSchema = {
  color: "#3B82F6",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 100, y: 150, w: 400, lines: [80, 80, 80], mix: 0.2, lineHeight: 12, lineGap: 8 },
  ],
  decorativeCircle: { x: 16, y: 330, size: 56, mix: 0.15 },
};
```

---

## clock-face

A circular clock face with hands and center dot -- a time display.

```ts
const cover: CoverSchema = {
  color: "#F97316",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "circle", x: 300, y: 200, size: 200, mix: 0.04, borderMix: 0.2, innerRing: true },
  ],
  decorativeCircle: { x: 520, y: 16, size: 64, mix: 0.15 },
};
```

---

## tri-color-token-stack

Three colored rectangular segments stacked with separator lines -- a segmented token.

```ts
const cover: CoverSchema = {
  color: "#6366F1",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "rect", x: 60, y: 32, w: 380, h: 24, radius: 8, mix: 0.15, borderMix: 0.2 },
    { type: "skeleton", x: 60, y: 66, w: 420, lines: [90], mix: 0.08, lineHeight: 8 },
    { type: "rect", x: 60, y: 84, w: 380, h: 40, radius: 8, mix: 0.15, borderMix: 0.2 },
    { type: "skeleton", x: 60, y: 134, w: 420, lines: [90], mix: 0.08, lineHeight: 8 },
    { type: "rect", x: 60, y: 152, w: 380, h: 24, radius: 8, mix: 0.15, borderMix: 0.2 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 56, mix: 0.1 },
};
```

---

## split-diff-columns

Two side-by-side columns of skeleton lines with red/green highlights -- a difference comparison.

```ts
const cover: CoverSchema = {
  color: "#10B981",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 24, y: 24, w: 250, lines: [80, 60, 70, 90, 50], mix: 0.2, lineHeight: 8, lineGap: 6 },
    { type: "skeleton", x: 310, y: 24, w: 250, lines: [80, 60, 75, 90, 50], mix: 0.2, lineHeight: 8, lineGap: 6 },
  ],
};
```

---

## dot-field-input

A row of dots inside a bordered input with a strength bar beneath -- a masked input with meter.

```ts
const cover: CoverSchema = {
  color: "#F43F5E",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "rect", x: 120, y: 155, w: 360, h: 32, radius: 8, mix: 0.1, borderMix: 0.15 },
    { type: "skeleton", x: 120, y: 200, w: 360, lines: [100], mix: 0.2, lineHeight: 12 },
  ],
  blicks: [
    { shape: "circle", x: 16, y: 16, size: 56, mix: 0.15 },
  ],
};
```

---

## label-hash-pairs

Alternating label and long hash lines -- a digest output list.

```ts
const cover: CoverSchema = {
  color: "#6B7280",
  background: { angle: 135, stops: [{ mix: 0.08 }, { mix: 0.04 }, { mix: 0.08 }] },
  elements: [
    { type: "flex-column", x: 24, y: 24, w: 500, items: [
      { labelWidth: 30, lineWidth: 85 },
      { labelWidth: 25, lineWidth: 95 },
      { labelWidth: 28, lineWidth: 100 },
    ]},
  ],
  decorativeCircle: { x: 520, y: 330, size: 64, mix: 0.15 },
};
```

---

## venn-circles

Three overlapping translucent circles -- a color model or set diagram.

```ts
const cover: CoverSchema = {
  color: "#EC4899",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "circle", x: 200, y: 200, size: 120, mix: 0.15, borderMix: 0.2 },
    { type: "circle", x: 300, y: 160, size: 120, mix: 0.15, borderMix: 0.2 },
    { type: "circle", x: 330, y: 240, size: 120, mix: 0.15, borderMix: 0.2 },
  ],
  decorativeCircle: { x: 16, y: 330, size: 48, mix: 0.2 },
};
```

---

## encoding-toggle

Two bordered boxes with an arrow between them -- an encode/decode transformation.

```ts
const cover: CoverSchema = {
  color: "#84CC16",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "rect", x: 60, y: 140, w: 200, h: 32, radius: 8, mix: 0.1, borderMix: 0.15 },
    { type: "rect", x: 340, y: 140, w: 200, h: 32, radius: 8, mix: 0.1, borderMix: 0.15 },
  ],
  blicks: [
    { shape: "circle", x: 275, y: 148, size: 12, mix: 0.25 },
  ],
};
```

---

## markup-split-preview

Two columns separated by a vertical line -- raw markup on the left, rendered preview on the right.

```ts
const cover: CoverSchema = {
  color: "#0EA5E9",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 20, y: 20, w: 250, lines: [40, 80, 70, 35, 85, 60], mix: 0.2, lineHeight: 8, lineGap: 6 },
    { type: "skeleton", x: 310, y: 20, w: 250, lines: [45, 80, 70, 38, 85, 60], mix: 0.12, lineHeight: 8, lineGap: 6 },
  ],
};
```

---

## vertical-bar-stripes

Alternating thick and thin vertical bars -- a barcode pattern.

```ts
const cover: CoverSchema = {
  color: "#78716C",
  background: { angle: 135, stops: [{ mix: 0.08 }, { mix: 0.04 }, { mix: 0.1 }] },
  elements: [
    { type: "bar-chart", x: 105, y: 100, w: 390, h: 180, bars: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100], barGap: 2 },
  ],
  decorativeCircle: { x: 16, y: 330, size: 56, mix: 0.15 },
};
```

---

## image-to-text-block

A bordered image thumbnail beside a block of short text lines -- media-to-text conversion.

```ts
const cover: CoverSchema = {
  color: "#D946EF",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "rect", x: 80, y: 80, w: 170, h: 170, radius: 12, mix: 0.08, borderMix: 0.15 },
    { type: "skeleton", x: 310, y: 100, w: 200, lines: [100, 80, 100, 60], mix: 0.15, lineHeight: 6, lineGap: 4 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 48, mix: 0.15 },
};
```

---

## format-pair-columns

Two structured columns with a conversion indicator between them -- a data format pair.

```ts
const cover: CoverSchema = {
  color: "#F59E0B",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 24, y: 24, w: 220, lines: [20, 50, 40, 15], mix: 0.2, lineHeight: 8, lineGap: 6 },
    { type: "skeleton", x: 340, y: 24, w: 220, lines: [45, 40, 35, 40], mix: 0.2, lineHeight: 8, lineGap: 6 },
  ],
  blicks: [
    { shape: "circle", x: 280, y: 50, size: 16, mix: 0.2 },
  ],
};
```

---

## indented-tree-lines

Indented lines at increasing depths with a checkmark badge -- a validated hierarchical document.

```ts
const cover: CoverSchema = {
  color: "#06B6D4",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 24, y: 24, w: 400, lines: [40, 50, 35, 40, 45, 30], mix: 0.18, lineHeight: 8, lineGap: 8 },
  ],
  blicks: [
    { shape: "circle", x: 510, y: 330, size: 40, mix: 0.2 },
  ],
};
```

---

## data-table-grid

A 4x4 grid with a highlighted header row -- a tabular data editor.

```ts
const cover: CoverSchema = {
  color: "#3B82F6",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "grid", cols: 4, rows: 4, inset: 20, gap: 4, cellRadius: 4, cellMix: 0.08, labels: true },
  ],
  decorativeCircle: { x: 520, y: 330, size: 56, mix: 0.1 },
};
```

---

## document-to-page

Source text lines beside a bordered page preview with a separator -- document export.

```ts
const cover: CoverSchema = {
  color: "#EF4444",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 50, y: 70, w: 200, lines: [50, 80, 70, 60], mix: 0.2, lineHeight: 10, lineGap: 6 },
    { type: "rect", x: 330, y: 60, w: 180, h: 200, radius: 8, mix: 0.04, borderMix: 0.2 },
    { type: "skeleton", x: 342, y: 72, w: 156, lines: [45, 75, 65, 80, 70], mix: 0.12, lineHeight: 6, lineGap: 6 },
  ],
  decorativeCircle: { x: 16, y: 330, size: 56, mix: 0.15 },
};
```

---

## frame-to-frame-arrow

Two bordered image frames with an arrow between them -- a format conversion.

```ts
const cover: CoverSchema = {
  color: "#10B981",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "rect", x: 50, y: 80, w: 180, h: 180, radius: 12, mix: 0.1, borderMix: 0.2 },
    { type: "rect", x: 370, y: 80, w: 180, h: 180, radius: 12, mix: 0.1, borderMix: 0.2 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 48, mix: 0.15 },
};
```

---

## markup-convert-pair

Two columns of structured lines with double-dot connectors between -- a two-way markup transform.

```ts
const cover: CoverSchema = {
  color: "#F97316",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 24, y: 24, w: 220, lines: [30, 55, 40, 50, 25], mix: 0.2, lineHeight: 8, lineGap: 6 },
    { type: "skeleton", x: 340, y: 24, w: 220, lines: [40, 70, 55, 65, 35], mix: 0.15, lineHeight: 8, lineGap: 6 },
  ],
  blicks: [
    { shape: "circle", x: 278, y: 55, size: 12, mix: 0.25 },
    { shape: "circle", x: 278, y: 75, size: 12, mix: 0.25 },
  ],
};
```

---

## gradient-blobs

Overlapping radial gradient blobs on a pastel background -- a mesh gradient preview.

```ts
const cover: CoverSchema = {
  color: "#EC4899",
  background: { angle: 135, stops: [{ mix: 0.12 }, { mix: 0.08 }, { mix: 0.1 }] },
  elements: [
    { type: "circle", x: 200, y: 150, size: 200, mix: 0.2 },
    { type: "circle", x: 370, y: 200, size: 220, mix: 0.15 },
    { type: "circle", x: 420, y: 120, size: 160, mix: 0.12 },
  ],
  decorativeCircle: { x: 16, y: 330, size: 48, mix: 0.15 },
};
```

---

## shape-gallery-tiles

A 3-column grid of tiles, each containing a different geometric shape -- a shape sampler.

```ts
const cover: CoverSchema = {
  color: "#6366F1",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "grid", cols: 3, rows: 1, inset: 16, gap: 12, cellRadius: 12, cellMix: 0.1 },
    { type: "circle", x: 108, y: 200, size: 32, mix: 0.15 },
    { type: "rect", x: 280, y: 180, w: 24, h: 40, radius: 8, mix: 0.15 },
    { type: "circle", x: 460, y: 200, size: 40, mix: 0.06, borderMix: 0.2 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 56, mix: 0.1 },
};
```

---

## padlock-centered

A centered padlock shape with dot indicators beneath -- a security/encryption visual.

```ts
const cover: CoverSchema = {
  color: "#10B981",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "rect", x: 265, y: 180, w: 70, h: 80, radius: 8, mix: 0.15, borderMix: 0.25 },
    { type: "circle", x: 300, y: 165, size: 40, mix: 0, borderMix: 0.25 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 56, mix: 0.15 },
};
```

---

## document-to-rich-page

Source text lines beside a detailed document page with icon header -- document export with formatting.

```ts
const cover: CoverSchema = {
  color: "#3B82F6",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 50, y: 70, w: 200, lines: [45, 75, 60, 80], mix: 0.15, lineHeight: 10, lineGap: 6 },
    { type: "rect", x: 330, y: 60, w: 180, h: 200, radius: 8, mix: 0.05, borderMix: 0.2 },
    { type: "skeleton", x: 342, y: 80, w: 156, lines: [50, 80, 65, 75, 55], mix: 0.12, lineHeight: 6, lineGap: 6 },
  ],
  decorativeCircle: { x: 16, y: 330, size: 56, mix: 0.15 },
};
```

---

## vibrant-aurora

Multiple overlapping radial gradients creating a vibrant aurora effect -- a pure color composition.

```ts
const cover: CoverSchema = {
  color: "#8B5CF6",
  background: { angle: 135, stops: [{ mix: 0.3 }, { mix: 0.15 }] },
  elements: [
    { type: "circle", x: 150, y: 150, size: 250, mix: 0.4 },
    { type: "circle", x: 450, y: 300, size: 280, mix: 0.35 },
    { type: "circle", x: 360, y: 120, size: 200, mix: 0.3 },
  ],
};
```

---

## tree-node-list

Indented node list with dot bullets at two levels -- a hierarchical record browser.

```ts
const cover: CoverSchema = {
  color: "#06B6D4",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "flex-column", x: 24, y: 24, w: 400, items: [
      { labelWidth: 4, lineWidth: 60 },
      { labelWidth: 3, lineWidth: 45 },
      { labelWidth: 3, lineWidth: 55 },
      { labelWidth: 4, lineWidth: 50 },
      { labelWidth: 3, lineWidth: 40 },
    ]},
  ],
  decorativeCircle: { x: 520, y: 330, size: 56, mix: 0.15 },
};
```

---

## card-preview-meta

A large image area above short metadata lines -- a social media card preview.

```ts
const cover: CoverSchema = {
  color: "#F97316",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "rect", x: 20, y: 20, w: 560, h: 180, radius: 8, mix: 0.1, borderMix: 0.15 },
    { type: "skeleton", x: 20, y: 215, w: 500, lines: [70, 90, 50], mix: 0.2, lineHeight: 10, lineGap: 8 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 56, mix: 0.15 },
};
```

---

## text-variant-options

A heading line with rows of small option boxes beneath -- text case or style variants.

```ts
const cover: CoverSchema = {
  color: "#10B981",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 20, y: 20, w: 400, lines: [60], mix: 0.2, lineHeight: 12 },
    { type: "grid", cols: 2, rows: 3, inset: 80, gap: 8, cellRadius: 6, cellMix: 0.1 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 48, mix: 0.15 },
};
```

---

## text-with-counters

Skeleton text lines with large numeric counters below -- a word/line count display.

```ts
const cover: CoverSchema = {
  color: "#3B82F6",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 20, y: 20, w: 500, lines: [80, 65, 75, 45], mix: 0.2, lineHeight: 8, lineGap: 10 },
    { type: "stack", x: 20, y: 120, w: 200, h: 40, count: 2, widths: [80, 80] },
  ],
  decorativeCircle: { x: 520, y: 330, size: 56, mix: 0.15 },
};
```

---

## url-slug-bar

A heading with a long input bar and trailing dots -- a URL/slug generator.

```ts
const cover: CoverSchema = {
  color: "#F43F5E",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 20, y: 20, w: 400, lines: [70], mix: 0.2, lineHeight: 12 },
    { type: "rect", x: 20, y: 50, w: 480, h: 32, radius: 8, mix: 0.06, borderMix: 0.15 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 48, mix: 0.15 },
};
```

---

## info-card-grid

A heading with a 2x2 grid of bordered info cards -- a device or environment overview.

```ts
const cover: CoverSchema = {
  color: "#F59E0B",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 20, y: 20, w: 400, lines: [75], mix: 0.2, lineHeight: 10 },
    { type: "grid", cols: 2, rows: 2, inset: 60, gap: 8, cellRadius: 8, cellMix: 0.08 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 48, mix: 0.15 },
};
```

---

## icon-size-staircase

A row of bordered squares in ascending sizes -- an icon size progression.

```ts
const cover: CoverSchema = {
  color: "#8B5CF6",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "rect", x: 20, y: 306, w: 16, h: 16, radius: 2, mix: 0.2, borderMix: 0.15 },
    { type: "rect", x: 48, y: 298, w: 24, h: 24, radius: 2, mix: 0.15, borderMix: 0.15 },
    { type: "rect", x: 84, y: 288, w: 32, h: 32, radius: 4, mix: 0.12, borderMix: 0.15 },
    { type: "rect", x: 128, y: 276, w: 44, h: 44, radius: 6, mix: 0.1, borderMix: 0.15 },
    { type: "rect", x: 184, y: 262, w: 56, h: 56, radius: 8, mix: 0.08, borderMix: 0.15 },
  ],
  decorativeCircle: { x: 520, y: 16, size: 48, mix: 0.15 },
};
```

---

## nested-rectangles

Two nested bordered rectangles of different proportions -- an aspect ratio comparison.

```ts
const cover: CoverSchema = {
  color: "#14B8A6",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "rect", x: 20, y: 20, w: 430, h: 165, radius: 8, mix: 0.06, borderMix: 0.25 },
    { type: "rect", x: 20, y: 210, w: 320, h: 130, radius: 8, mix: 0.06, borderMix: 0.25 },
  ],
};
```

---

## shrink-meter

Two file-size skeleton lines with an arrow and size label between -- a compression indicator.

```ts
const cover: CoverSchema = {
  color: "#84CC16",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 20, y: 20, w: 500, lines: [85, 50], mix: 0.2, lineHeight: 10, lineGap: 8 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 56, mix: 0.15 },
};
```

---

## dashed-frame-placeholder

A centered dashed-border rectangle with a dimension label -- an image placeholder.

```ts
const cover: CoverSchema = {
  color: "#78716C",
  background: { angle: 135, stops: [{ mix: 0.08 }, { mix: 0.04 }, { mix: 0.08 }] },
  elements: [
    { type: "rect", x: 100, y: 80, w: 400, h: 240, radius: 8, mix: 0.08, borderMix: 0.25 },
  ],
};
```

---

## horizontal-race-bars

Stacked horizontal bars of decreasing width -- an animated ranking chart.

```ts
const cover: CoverSchema = {
  color: "#3B82F6",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "bar-chart", x: 20, y: 80, w: 480, h: 250, bars: [80, 65, 50, 35, 20] },
  ],
};
```

---

## multi-line-traces

Three overlapping polyline traces -- a multi-series line chart.

```ts
const cover: CoverSchema = {
  color: "#8B5CF6",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "polyline", x: 16, y: 16, w: 568, h: 368, points: [[5, 83], [25, 58], [50, 67], [75, 25], [95, 33]] },
    { type: "polyline", x: 16, y: 16, w: 568, h: 368, points: [[5, 75], [25, 83], [50, 50], [75, 42], [95, 17]] },
    { type: "polyline", x: 16, y: 16, w: 568, h: 368, points: [[5, 92], [25, 75], [50, 75], [75, 58], [95, 50]] },
  ],
};
```

---

## scattered-bubbles

Scattered circles of varying sizes -- a bubble chart composition.

```ts
const cover: CoverSchema = {
  color: "#10B981",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "circle", x: 190, y: 110, size: 100, mix: 0.2 },
    { type: "circle", x: 410, y: 155, size: 75, mix: 0.18 },
    { type: "circle", x: 300, y: 280, size: 56, mix: 0.18 },
    { type: "circle", x: 410, y: 260, size: 44, mix: 0.15 },
  ],
};
```

---

## stacked-area-fill

Layered filled areas beneath a shared top edge -- a stacked area chart.

```ts
const cover: CoverSchema = {
  color: "#F97316",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "polyline", x: 16, y: 16, w: 568, h: 368, points: [[5, 92], [25, 67], [50, 75], [75, 50], [95, 58]] },
    { type: "polyline", x: 16, y: 16, w: 568, h: 368, points: [[5, 92], [25, 80], [50, 83], [75, 70], [95, 75]] },
    { type: "polyline", x: 16, y: 16, w: 568, h: 368, points: [[5, 92], [25, 87], [50, 88], [75, 83], [95, 87]] },
  ],
};
```

---

## status-code-list

Colored label badges with trailing description lines -- a status code reference list.

```ts
const cover: CoverSchema = {
  color: "#6366F1",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "flex-column", x: 20, y: 20, w: 400, items: [
      { labelWidth: 15, lineWidth: 50 },
      { labelWidth: 15, lineWidth: 40 },
      { labelWidth: 15, lineWidth: 45 },
      { labelWidth: 15, lineWidth: 35 },
    ]},
  ],
};
```

---

## config-rules-list

A heading line followed by indented allow/deny rule lines with a corner accent -- a config file layout.

```ts
const cover: CoverSchema = {
  color: "#EAB308",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 20, y: 20, w: 400, lines: [55, 40, 50, 35, 45, 60], mix: 0.2, lineHeight: 8, lineGap: 6 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 48, mix: 0.15 },
};
```

---

## url-tree-hierarchy

A short heading with indented URL lines below -- a sitemap/URL tree.

```ts
const cover: CoverSchema = {
  color: "#06B6D4",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 20, y: 20, w: 400, lines: [30, 70, 65, 72, 60], mix: 0.18, lineHeight: 8, lineGap: 6 },
  ],
  blicks: [
    { shape: "circle", x: 520, y: 330, size: 24, mix: 0.25 },
  ],
};
```

---

## header-status-grid

A heading with a 2x2 grid of mixed-status result cards -- a network policy checker.

```ts
const cover: CoverSchema = {
  color: "#EC4899",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "skeleton", x: 20, y: 20, w: 400, lines: [65], mix: 0.2, lineHeight: 12 },
    { type: "grid", cols: 2, rows: 2, inset: 60, gap: 8, cellRadius: 6, cellMix: 0.1 },
  ],
};
```

---

## shield-badge-centered

A centered bordered rectangle with an inner circle -- a certificate or shield badge.

```ts
const cover: CoverSchema = {
  color: "#22C55E",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "rect", x: 260, y: 145, w: 80, h: 100, radius: 8, mix: 0.06, borderMix: 0.25 },
    { type: "circle", x: 300, y: 180, size: 32, mix: 0, borderMix: 0.3 },
    { type: "skeleton", x: 200, y: 270, w: 200, lines: [60, 40], mix: 0.15, lineHeight: 8, lineGap: 6 },
  ],
};
```

---

## symbol-character-grid

A 5x3 grid of small tiles each containing a character -- a special character picker.

```ts
const cover: CoverSchema = {
  color: "#0EA5E9",
  background: { angle: 135, stops: [{ mix: 0.1 }, { mix: 0.05 }, { mix: 0.1 }] },
  elements: [
    { type: "text-grid", x: 16, y: 16, w: 568, h: 330, chars: "*", cols: 5, rows: 3 },
  ],
  decorativeCircle: { x: 520, y: 330, size: 48, mix: 0.15 },
};
```
