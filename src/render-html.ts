import type { RGB } from "./color";
import { colorMix, hexToRgb } from "./color";
import { renderBackground } from "./elements/background";
import { renderBarChart } from "./elements/bar-chart";
import { renderCircle } from "./elements/circle";
import { renderDiamond } from "./elements/diamond";
import { renderFlexColumn } from "./elements/flex-column";
import { renderGrid } from "./elements/grid";
import { renderPolyline } from "./elements/polyline";
import { renderRect } from "./elements/rect";
import { renderSkeleton } from "./elements/skeleton";
import { renderStack } from "./elements/stack";
import { renderTextGrid } from "./elements/text-grid";
import type { Blick, CoverElement, CoverSchema, HoverEffect } from "./types";

let idCounter = 0;

function nextId(): string {
  return `cca-${++idCounter}`;
}

/** Reset counter (for testing). */
export function resetIdCounter(): void {
  idCounter = 0;
}

function renderElement(el: CoverElement, rgb: RGB, index: number): string {
  switch (el.type) {
    case "grid":
      return renderGrid(el, rgb, index);
    case "skeleton":
      return renderSkeleton(el, rgb, index);
    case "circle":
      return renderCircle(el, rgb, index);
    case "rect":
      return renderRect(el, rgb, index);
    case "bar-chart":
      return renderBarChart(el, rgb, index);
    case "polyline":
      return renderPolyline(el, rgb, index);
    case "diamond":
      return renderDiamond(el, rgb, index);
    case "stack":
      return renderStack(el, rgb, index);
    case "flex-column":
      return renderFlexColumn(el, rgb, index);
    case "text-grid":
      return renderTextGrid(el, rgb, index);
  }
}

function renderBlick(blick: Blick, rgb: RGB, index: number): string {
  const h = blick.h ?? blick.w;
  const bg = colorMix(rgb, blick.mix, "transparent");

  let shapeStyles: string;
  switch (blick.shape) {
    case "diamond":
      shapeStyles = `width:${blick.w}px;height:${h}px;transform:rotate(45deg);border-radius:2px`;
      break;
    case "circle":
      shapeStyles = `width:${blick.w}px;height:${h}px;border-radius:50%`;
      break;
    case "pill":
      shapeStyles = `width:${blick.w}px;height:${h}px;border-radius:9999px`;
      break;
    default:
      shapeStyles = `width:${blick.w}px;height:${h}px;border-radius:2px`;
      break;
  }

  const style = `position:absolute;left:${blick.x};top:${blick.y};${shapeStyles};background:${bg}`;
  return `<div class="blick-${index}" style="${style}"></div>`;
}

function buildHoverCss(
  coverId: string,
  elements: CoverElement[],
  blicks: Blick[],
  decorativeCircle?: CoverSchema["decorativeCircle"],
  customHoverSelector?: string,
): string {
  const rules: string[] = [];
  const selector = `[data-cover="${coverId}"]`;
  const hoverSelector = customHoverSelector
    ? customHoverSelector.replace("{coverId}", coverId)
    : `${selector}:hover`;

  // Transition base for all animatable children
  const allClasses: string[] = [];

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (el.hover) {
      allClasses.push(`.el-${i}`);
      rules.push(buildHoverRule(hoverSelector, `.el-${i}`, el.hover));
    }
    // Per-cell hover for grid elements
    if (el.type === "grid" && el.cellHover) {
      // Expand grid gap on hover to prevent overlapping cells
      const baseGap = el.gap ?? 8;
      const gx = el.gapX ?? baseGap;
      const gy = el.gapY ?? baseGap;
      const containerCls = `.el-${i}`;
      if (!el.hover) {
        allClasses.push(containerCls);
      }
      rules.push(
        `${hoverSelector} ${containerCls}{column-gap:${Math.round(gx * 1.8)}px;row-gap:${Math.round(gy * 1.8)}px}`,
      );

      const totalCells = el.cols * el.rows;
      for (let c = 0; c < totalCells; c++) {
        const cellHover = el.cellHover[c];
        if (cellHover) {
          const cls = `.el-${i}-cell-${c}`;
          allClasses.push(cls);
          rules.push(buildHoverRule(hoverSelector, cls, cellHover));
        }
      }
    }
  }

  for (let i = 0; i < blicks.length; i++) {
    const blick = blicks[i];
    if (blick.hover) {
      allClasses.push(`.blick-${i}`);
      rules.push(buildHoverRule(hoverSelector, `.blick-${i}`, blick.hover));
    }
  }

  if (decorativeCircle?.hover) {
    allClasses.push(`.deco-circle`);
    rules.push(
      buildHoverRule(hoverSelector, `.deco-circle`, decorativeCircle.hover),
    );
  }

  if (allClasses.length === 0) return "";

  // Base transitions
  const transitionBase = allClasses
    .map((cls) => `${selector} ${cls}{transition:all 0.7s ease-in-out}`)
    .join("");

  return transitionBase + rules.join("");
}

let pulseCounter = 0;

function buildHoverRule(
  hoverSelector: string,
  childSelector: string,
  hover: HoverEffect,
): string {
  // Pulse mode: keyframe animation that grows then shrinks back
  if (hover.pulse !== undefined && hover.pulse > 0) {
    const name = `cca-pulse-${++pulseCounter}`;
    const s = hover.scale ?? 1.1;
    const dur = hover.pulse;
    const delay = hover.delay ?? 0;
    const transforms: string[] = [];
    if (hover.translateX !== undefined) transforms.push(`translateX(${hover.translateX}px)`);
    if (hover.translateY !== undefined) transforms.push(`translateY(${hover.translateY}px)`);
    if (hover.rotate !== undefined) transforms.push(`rotate(${hover.rotate}deg)`);
    const midTransform = [`scale(${s})`, ...transforms].join(" ");
    const midOpacity = hover.opacity !== undefined ? `opacity:${hover.opacity};` : "";
    const kf = `@keyframes ${name}{0%{transform:scale(1)}40%{transform:${midTransform};${midOpacity}}100%{transform:scale(1)}}`;
    const rule = `${hoverSelector} ${childSelector}{animation:${name} ${dur}ms ease-in-out ${delay}ms both}`;
    return kf + rule;
  }

  const transforms: string[] = [];
  const props: string[] = [];

  if (hover.scale !== undefined) transforms.push(`scale(${hover.scale})`);
  if (hover.translateX !== undefined)
    transforms.push(`translateX(${hover.translateX}px)`);
  if (hover.translateY !== undefined)
    transforms.push(`translateY(${hover.translateY}px)`);
  if (hover.rotate !== undefined) transforms.push(`rotate(${hover.rotate}deg)`);

  if (transforms.length > 0) props.push(`transform:${transforms.join(" ")}`);
  if (hover.opacity !== undefined) props.push(`opacity:${hover.opacity}`);
  if (hover.delay !== undefined)
    props.push(`transition-delay:${hover.delay}ms`);

  if (props.length === 0) return "";
  return `${hoverSelector} ${childSelector}{${props.join(";")}}`;
}

export function renderCoverHtml(schema: CoverSchema): {
  html: string;
  style: Record<string, string>;
  innerHtml: string;
  hoverCss: string;
  coverId: string;
} {
  const rgb = hexToRgb(schema.color);
  const width = schema.width ?? 600;
  const height = schema.height ?? 400;
  const coverId = nextId();

  // Background
  const bgGradient = renderBackground(rgb, schema.background);

  // Container style
  const containerStyle: Record<string, string> = {
    position: "relative",
    width: `${width}px`,
    height: `${height}px`,
    overflow: "hidden",
    background: bgGradient,
  };

  const styleStr = Object.entries(containerStyle)
    .map(([k, v]) => `${k}:${v}`)
    .join(";");

  // Elements
  const elements = schema.elements ?? [];
  let innerHtml = "";
  for (let i = 0; i < elements.length; i++) {
    innerHtml += renderElement(elements[i], rgb, i);
  }

  // Blicks
  const blicks = schema.blicks ?? [];
  for (let i = 0; i < blicks.length; i++) {
    innerHtml += renderBlick(blicks[i], rgb, i);
  }

  // Decorative circle
  if (schema.decorativeCircle) {
    const dc = schema.decorativeCircle;
    const dcStyle = `position:absolute;left:${dc.x};top:${dc.y};width:${dc.size}px;height:${dc.size}px;border-radius:50%;background:${colorMix(rgb, dc.mix, "transparent")}`;
    innerHtml += `<div class="deco-circle" style="${dcStyle}"></div>`;
  }

  // Hover CSS
  const hoverCss = buildHoverCss(
    coverId,
    elements,
    blicks,
    schema.decorativeCircle,
    schema.hoverSelector,
  );

  // Full HTML
  const styleTag = hoverCss ? `<style>${hoverCss}</style>` : "";
  const html = `${styleTag}<div data-cover="${coverId}" style="${styleStr}">${innerHtml}</div>`;

  return { html, style: containerStyle, innerHtml, hoverCss, coverId };
}
