import type { RGB } from "../color";
import { colorMix } from "../color";
import type { GridElement } from "../types";

export function renderGrid(el: GridElement, rgb: RGB, elIndex: number): string {
  const inset = el.inset ?? 12;
  const gap = el.gap ?? 8;
  const cellRadius = el.cellRadius ?? 12;
  const totalCells = el.cols * el.rows;

  const gapStyle =
    el.gapX !== undefined || el.gapY !== undefined
      ? `column-gap:${el.gapX ?? gap}px;row-gap:${el.gapY ?? gap}px`
      : `gap:${gap}px`;

  const positionStyle = el.center
    ? `position:absolute;left:${inset}%;right:${inset}%;top:50%;transform:translateY(-50%)`
    : `position:absolute;inset:${inset}%`;

  const rowsStyle = el.autoRows
    ? ""
    : `grid-template-rows:repeat(${el.rows},1fr)`;

  const containerStyle = [
    positionStyle,
    `display:grid`,
    `grid-template-columns:repeat(${el.cols},1fr)`,
    rowsStyle,
    gapStyle,
    el.opacity !== undefined ? `opacity:${el.opacity}` : "",
  ]
    .filter(Boolean)
    .join(";");

  let cells = "";
  for (let i = 0; i < totalCells; i++) {
    const cellColor = el.cellColors?.[i];
    const mix = el.cellMix?.[i] ?? (el.mix ?? 10) + i * 3;
    const bMix = el.cellBorderMix?.[i] ?? (el.borderMix ?? 25) + i * 4;
    const bw = el.borderWidth ?? 1.5;

    const bg = cellColor
      ? `color-mix(in srgb, ${cellColor.bg} 18%, transparent)`
      : colorMix(rgb, mix, "transparent");
    const borderColor = cellColor
      ? `color-mix(in srgb, ${cellColor.border} 40%, transparent)`
      : colorMix(rgb, bMix, "transparent");

    const cellStyle = [
      `border-radius:${cellRadius}px`,
      `padding:8px`,
      `display:flex`,
      `flex-direction:column`,
      `gap:4px`,
      el.cellColors ? `justify-content:space-between` : "",
      el.cellAspect ? `aspect-ratio:${el.cellAspect}` : "",
      `background:${bg}`,
      bMix > 0 || cellColor ? `border:${bw}px solid ${borderColor}` : "",
    ]
      .filter(Boolean)
      .join(";");

    let cellContent = "";

    // Label (numbered circle for cellColors, text label otherwise)
    const label = el.labels?.[i];
    if (label && cellColor) {
      // Numbered circle style (like discovery tools)
      cellContent += `<div style="width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;background:color-mix(in srgb, ${cellColor.bg} 30%, transparent);color:color-mix(in srgb, ${cellColor.border} 75%, transparent)">${escapeHtml(label)}</div>`;
    } else if (label) {
      cellContent += `<span class="el-${elIndex}-label" style="font-size:7px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:${colorMix(rgb, 70, "transparent")}">${escapeHtml(label)}</span>`;
    }

    // Skeleton lines inside cell
    const lines = el.cellLines?.[i];
    if (lines) {
      const linesWrapper = cellColor
        ? `<div style="display:flex;flex-direction:column;gap:3px;margin-top:auto">`
        : "";
      const linesWrapperEnd = cellColor ? `</div>` : "";
      let linesHtml = "";
      for (const w of lines) {
        const lineBg = cellColor
          ? `color-mix(in srgb, ${cellColor.bg} 45%, transparent)`
          : colorMix(rgb, 25, "transparent");
        const lineH = cellColor ? "6px" : "6px";
        linesHtml += `<div style="height:${lineH};border-radius:9999px;width:${w}%;background:${lineBg}"></div>`;
      }
      cellContent += linesWrapper + linesHtml + linesWrapperEnd;
    }

    const cellClass = el.cellHover ? `el-${elIndex}-cell-${i}` : `el-${elIndex}-cell`;
    cells += `<div class="${cellClass}" style="${cellStyle}">${cellContent}</div>`;
  }

  return `<div class="el-${elIndex}" style="${containerStyle}">${cells}</div>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
