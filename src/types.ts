// ---- Schema types ----

export interface BackgroundStop {
  /** Mix percentage with white (0-100). Higher = more color. */
  mix: number;
}

export interface CoverBackground {
  /** Gradient angle in degrees. Default: 135 (top-left to bottom-right). */
  angle?: number;
  /** Color stops mixed with white at given percentages. Default: [{ mix: 12 }, { mix: 5 }, { mix: 14 }]. */
  stops?: BackgroundStop[];
}

export interface HoverEffect {
  scale?: number;
  translateX?: number;
  translateY?: number;
  rotate?: number;
  opacity?: number;
  delay?: number;
  /** Pulse animation: element grows to `scale` (or 1.1) and shrinks back. Duration in ms. */
  pulse?: number;
}

export interface CellColor {
  /** Background color (any CSS color string). */
  bg: string;
  /** Border color (any CSS color string). */
  border: string;
}

// ---- Element types ----

interface BaseElement {
  /** Horizontal position (CSS value: "10%", "50px"). */
  x?: string;
  /** Vertical position (CSS value: "10%", "50px"). */
  y?: string;
  /** Width (CSS value: "80%", "200px"). */
  w?: string;
  /** Height (CSS value: "60%", "100px"). */
  h?: string;
  /** Color mix percentage with transparent (0-100). */
  mix?: number;
  /** Border mix percentage with transparent (0-100). 0 = no border. */
  borderMix?: number;
  /** Border width in px. Default: 1.5. */
  borderWidth?: number;
  /** Border radius in px. Default varies by element type. */
  radius?: number;
  /** Opacity override (0-1). Default: uses mix for alpha. */
  opacity?: number;
  /** Hover animation. Only used in HTML output. */
  hover?: HoverEffect;
}

export interface GridElement extends BaseElement {
  type: "grid";
  cols: number;
  rows: number;
  /** Inset from container edges as percentage. */
  inset?: number;
  /** Cell border radius in px. */
  cellRadius?: number;
  /** Per-cell mix overrides. Array of mix percentages, indexed row-major. */
  cellMix?: number[];
  /** Per-cell border mix overrides. */
  cellBorderMix?: number[];
  /** Per-cell labels (rendered as small text in SVG). */
  labels?: (string | undefined)[];
  /** Per-cell skeleton lines: array of arrays of width percentages. */
  cellLines?: (number[] | undefined)[];
  /** Gap between cells in px. */
  gap?: number;
  /** Column gap in px (overrides `gap` for horizontal spacing). */
  gapX?: number;
  /** Row gap in px (overrides `gap` for vertical spacing). */
  gapY?: number;
  /** When true, use auto row sizing instead of equal-height rows. */
  autoRows?: boolean;
  /** When true, vertically center the grid with top:50%;transform:translateY(-50%) instead of inset for top/bottom. */
  center?: boolean;
  /**
   * Per-cell raw color overrides. Bypasses theme color for specific cells.
   * Use for multi-color grids (e.g., tiles with independent hues).
   */
  cellColors?: (CellColor | undefined)[];
  /** Aspect ratio for cells (CSS aspect-ratio). E.g., "1/1" for squares. */
  cellAspect?: string;
  /** Per-cell hover effects. Stagger cells with different delays/opacities on hover. */
  cellHover?: (HoverEffect | undefined)[];
}

export interface SkeletonElement extends BaseElement {
  type: "skeleton";
  /** Array of line widths as percentages (0-100). */
  lines: number[];
  /** Line height in px. Default: 6. */
  lineHeight?: number;
  /** Gap between lines in px. Default: 4. */
  lineGap?: number;
  /** Mix percentages per line. If shorter than lines, cycles. */
  lineMix?: number[];
}

export interface CircleElement extends BaseElement {
  type: "circle";
  /** Diameter in px or percentage string. */
  size: number | string;
  /** Inner ring border (for coin-like circles). */
  innerRing?: boolean;
}

export interface RectElement extends BaseElement {
  type: "rect";
  /** Skeleton lines inside the rect (widths as percentages). Turns the rect into a card/panel. */
  lines?: number[];
  /** Title line width percentage (rendered thicker than body lines). */
  titleWidth?: number;
  /** Line height in px. Default: 4. */
  lineHeight?: number;
  /** Line gap in px. Default: 4. */
  lineGap?: number;
  /** Line mix percentages (cycling). */
  lineMix?: number[];
  /** Title mix percentage. Default: 35. */
  titleMix?: number;
  /** Bullet items: each has lines + optional bullet square. */
  bullets?: { lines: number[]; bulletMix?: number }[];
  /** Bullet square size in px. Default: 10. */
  bulletSize?: number;
  /** Progress bars at bottom: array of { fill: percentage, fillMix }. */
  progressBars?: { fill: number; fillMix?: number; trackMix?: number }[];
  /** Raw HTML content to inject. */
  rawContent?: string;
  /** Inner padding in px. Default: 16. */
  padding?: number;
}

export interface BarChartElement extends BaseElement {
  type: "bar-chart";
  /** Bar heights as percentages (0-100) of container height. */
  bars: number[];
  /** Gap between bars in px. Default: 4. */
  barGap?: number;
  /** Per-bar mix percentages. */
  barMix?: number[];
  /** Per-bar border mix percentages. */
  barBorderMix?: number[];
  /**
   * Stacked mode: each bar is a column of stacked segments.
   * `bars` values become segment counts instead of percentages.
   * Each segment is a small rectangle stacked bottom-to-top.
   */
  stacked?: boolean;
  /** Gap between stacked segments in px. Default: 2. */
  segmentGap?: number;
  /** Aspect ratio for segments (CSS). Default: "3/1". */
  segmentAspect?: string;
}

export interface PolylineElement extends BaseElement {
  type: "polyline";
  /** Points as [x, y] pairs, normalized to 0-100 range. */
  points: [number, number][];
  /** Stroke mix percentage. Default: 50. */
  strokeMix?: number;
  /** Stroke width in px. Default: 2. */
  strokeWidth?: number;
  /** Fill area under the line. Default: true. */
  fill?: boolean;
  /** Fill mix percentage. Default: 6. */
  fillMix?: number;
}

export interface DiamondElement extends BaseElement {
  type: "diamond";
  /** Size in px. */
  size: number;
}

export interface StackElement extends BaseElement {
  type: "stack";
  /** Number of stacked layers. */
  count: number;
  /** Width percentages for each layer (top to bottom). */
  widths?: number[];
  /** Height per layer in px. Default: calculated from container. */
  layerHeight?: number;
  /** Gap between layers in px. Default: 4. */
  layerGap?: number;
  /** Per-layer mix percentages. */
  layerMix?: number[];
}

export interface FlexColumnElement extends BaseElement {
  type: "flex-column";
  /** Items in the column. Each item is a row of shapes. */
  items: FlexColumnItem[];
  /** Gap between items in px. Default: 8. */
  itemGap?: number;
  /** Show separator lines between items. */
  separators?: boolean;
  /** Separator mix percentage. Default: 15. */
  separatorMix?: number;
}

export interface FlexColumnItem {
  /** Avatar circle size in px. 0 = no avatar. */
  avatar?: number;
  /** Name line width percentage. Renders a bolder "name" + shorter "handle" row above text lines. */
  nameWidth?: number;
  /** Name line mix percentage. Default: 45. */
  nameMix?: number;
  /** Skeleton lines after avatar. Widths as percentages. */
  lines?: number[];
  /** Line mix percentage. */
  lineMix?: number;
  /** Optional image block height in px. 0 = no image. */
  imageH?: number;
  /** Image mix percentage. */
  imageMix?: number;
  /** Action bar: small dots at bottom. Count of dots. */
  actions?: number;
  /** Action mix percentage. */
  actionMix?: number;
  /** Avatar mix percentage. */
  avatarMix?: number;
}

export interface TextGridElement extends BaseElement {
  type: "text-grid";
  /** Characters to display in the grid. */
  chars: string[];
  cols: number;
  rows: number;
  /** Font size in px. Default: 10. */
  fontSize?: number;
  /** Gap between cells in px. Default: 2. */
  gap?: number;
}

export type CoverElement =
  | GridElement
  | SkeletonElement
  | CircleElement
  | RectElement
  | BarChartElement
  | PolylineElement
  | DiamondElement
  | StackElement
  | FlexColumnElement
  | TextGridElement;

// ---- Blick (decorative accent) ----

export interface Blick {
  shape: "diamond" | "circle" | "rect" | "pill";
  x: string;
  y: string;
  w: number;
  h?: number;
  mix: number;
  hover?: HoverEffect;
}

// ---- Cover schema ----

export interface CoverSchema {
  /** Theme color as hex string. Drives the entire palette. */
  color: string;
  /** Width in px. Default: 600. */
  width?: number;
  /** Height in px. Default: 400. */
  height?: number;
  /** Background gradient configuration. */
  background?: CoverBackground;
  /** Main visual elements. */
  elements?: CoverElement[];
  /** Decorative accent shapes. */
  blicks?: Blick[];
  /** Decorative circle (common pattern). */
  decorativeCircle?: {
    x: string;
    y: string;
    size: number;
    mix: number;
    hover?: HoverEffect;
  };
  /**
   * Custom CSS selector for hover. Default: `[data-cover="ID"]:hover`.
   * Use `.group:hover` if the cover is inside a parent with `group` class.
   */
  hoverSelector?: string;
}

// ---- Output ----

export interface CoverResult {
  /** HTML string with inline styles and <style> block for hover. */
  readonly html: string;
  /** React-compatible inline style object for the container. */
  readonly style: Record<string, string>;
  /** Inner HTML content (elements + blicks) without the container wrapper. */
  readonly innerHtml: string;
  /** CSS <style> block content for hover animations. */
  readonly hoverCss: string;
  /** Unique data attribute value for this cover instance. */
  readonly coverId: string;
}
