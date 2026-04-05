import type { RGB } from "../color";
import type { PolylineElement } from "../types";

export function renderPolyline(
  el: PolylineElement,
  rgb: RGB,
  elIndex: number,
): string {
  const x = el.x ?? "12%";
  const y = el.y ?? "12%";
  const w = el.w ?? "76%";
  const h = el.h ?? "30%";
  const strokeMix = el.strokeMix ?? 50;
  const strokeWidth = el.strokeWidth ?? 2;
  const fill = el.fill !== false;
  const fillMix = el.fillMix ?? 6;

  const containerStyle = [
    `position:absolute`,
    `left:${x}`,
    `top:${y}`,
    `width:${w}`,
    `height:${h}`,
    el.opacity !== undefined ? `opacity:${el.opacity}` : "",
  ]
    .filter(Boolean)
    .join(";");

  // Normalize points to SVG viewBox
  const viewW = 200;
  const viewH = 60;
  const svgPoints = el.points
    .map(([px, py]) => `${(px / 100) * viewW},${(py / 100) * viewH}`)
    .join(" ");

  const [r, g, b] = rgb;
  const strokeColor = `rgba(${r},${g},${b},${strokeMix / 100})`;

  let fillElement = "";
  if (fill && el.points.length > 1) {
    const fillPoints = `${svgPoints} ${viewW},${viewH} 0,${viewH}`;
    fillElement = `<polygon points="${fillPoints}" fill="rgba(${r},${g},${b},${fillMix / 100})" />`;
  }

  const svg = `<svg style="width:100%;height:100%" viewBox="0 0 ${viewW} ${viewH}" fill="none" preserveAspectRatio="none"><polyline points="${svgPoints}" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none" />${fillElement}</svg>`;

  return `<div class="el-${elIndex}" style="${containerStyle}">${svg}</div>`;
}
