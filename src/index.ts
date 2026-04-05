/**
 * css-cover-art
 *
 * Schema-driven cover art engine. Define covers as data,
 * render to HTML with inline styles and hover animations.
 *
 * @example
 * ```ts
 * import { createCover } from "css-cover-art";
 *
 * const cover = createCover({
 *   color: "#5E70F8",
 *   width: 600,
 *   height: 400,
 *   background: { angle: 135, stops: [{ mix: 12 }, { mix: 5 }, { mix: 14 }] },
 *   elements: [
 *     { type: "grid", cols: 2, rows: 2, inset: 12, cellRadius: 8 },
 *     { type: "circle", x: "90%", y: "90%", size: 56, mix: 15 },
 *   ],
 *   blicks: [
 *     { shape: "diamond", x: "94%", y: "6%", w: 12, mix: 40 },
 *   ],
 * });
 *
 * cover.html;      // HTML with inline styles + <style> for hover
 * cover.style;     // { position, width, height, overflow, background }
 * cover.innerHtml; // elements + blicks without container wrapper
 * cover.hoverCss;  // CSS hover rules
 * cover.coverId;   // unique data-cover attribute value
 * ```
 */

import { renderCoverHtml } from "./render-html";
import type { CoverResult, CoverSchema } from "./types";

export function createCover(schema: CoverSchema): CoverResult {
  return renderCoverHtml(schema);
}

export type { RGB } from "./color";

export { buildPalette, colorMix, hexToRgb, rgbToHex } from "./color";
export type {
  BackgroundStop,
  BarChartElement,
  Blick,
  CellColor,
  CircleElement,
  CoverBackground,
  CoverElement,
  CoverResult,
  CoverSchema,
  DiamondElement,
  FlexColumnElement,
  FlexColumnItem,
  GridElement,
  HoverEffect,
  PolylineElement,
  RectElement,
  SkeletonElement,
  StackElement,
  TextGridElement,
} from "./types";
