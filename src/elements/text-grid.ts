import type { RGB } from "../color";
import { colorMix } from "../color";
import type { TextGridElement } from "../types";

export function renderTextGrid(
  el: TextGridElement,
  rgb: RGB,
  elIndex: number,
): string {
  const x = el.x ?? "10%";
  const y = el.y ?? "10%";
  const w = el.w ?? "80%";
  const h = el.h ?? "80%";
  const gap = el.gap ?? 2;
  const fontSize = el.fontSize ?? 10;
  const mix = el.mix ?? 40;

  const containerStyle = [
    `position:absolute`,
    `left:${x}`,
    `top:${y}`,
    `width:${w}`,
    `height:${h}`,
    `display:grid`,
    `grid-template-columns:repeat(${el.cols},1fr)`,
    `grid-template-rows:repeat(${el.rows},1fr)`,
    `gap:${gap}px`,
    el.opacity !== undefined ? `opacity:${el.opacity}` : "",
  ]
    .filter(Boolean)
    .join(";");

  let cells = "";
  const totalCells = el.cols * el.rows;
  for (let i = 0; i < totalCells; i++) {
    const char = el.chars[i % el.chars.length] ?? "";
    const cellStyle = `display:flex;align-items:center;justify-content:center;font-size:${fontSize}px;font-family:monospace;color:${colorMix(rgb, mix, "transparent")}`;
    cells += `<div style="${cellStyle}">${escapeHtml(char)}</div>`;
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
