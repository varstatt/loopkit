import type { RGB } from "../color";
import { colorMix } from "../color";
import type { BarChartElement } from "../types";

export function renderBarChart(
  el: BarChartElement,
  rgb: RGB,
  elIndex: number,
): string {
  const gap = el.barGap ?? 4;
  const x = el.x ?? "12%";
  const y = el.y ?? "50%";
  const w = el.w ?? "76%";
  const h = el.h ?? "38%";
  const bw = el.borderWidth ?? 1.5;

  const containerStyle = [
    `position:absolute`,
    `left:${x}`,
    `top:${y}`,
    `width:${w}`,
    `height:${h}`,
    `display:flex`,
    `align-items:${el.stacked ? "stretch" : "flex-end"}`,
    `justify-content:center`,
    `gap:${gap}px`,
    el.opacity !== undefined ? `opacity:${el.opacity}` : "",
  ]
    .filter(Boolean)
    .join(";");

  let bars = "";

  if (el.stacked) {
    // Stacked mode: each bar value is a segment count
    const segGap = el.segmentGap ?? 2;
    const segAspect = el.segmentAspect ?? "3/1";
    const radius = el.radius ?? 6;

    for (let i = 0; i < el.bars.length; i++) {
      const segCount = el.bars[i];
      let segments = "";
      for (let s = 0; s < segCount; s++) {
        const mix = (el.mix ?? 25) + s * 5;
        const bMix = (el.borderMix ?? 35) + s * 4;
        const segStyle = [
          `width:100%`,
          `aspect-ratio:${segAspect}`,
          `border-radius:${radius}px`,
          `background:${colorMix(rgb, mix, "transparent")}`,
          bMix > 0
            ? `border:${bw}px solid ${colorMix(rgb, bMix, "transparent")}`
            : "",
        ]
          .filter(Boolean)
          .join(";");
        segments += `<div style="${segStyle}"></div>`;
      }

      const colStyle = `flex:1;display:flex;flex-direction:column-reverse;gap:${segGap}px`;
      bars += `<div class="el-${elIndex}-bar" style="${colStyle}">${segments}</div>`;
    }
  } else {
    // Normal mode: each bar value is a height percentage
    for (let i = 0; i < el.bars.length; i++) {
      const mix = el.barMix?.[i] ?? (el.mix ?? 25) + i * 5;
      const bMix = el.barBorderMix?.[i] ?? (el.borderMix ?? 35) + i * 4;
      const radius = el.radius ?? 6;

      const barStyle = [
        `flex:1`,
        `height:${el.bars[i]}%`,
        `border-radius:${radius}px`,
        `background:${colorMix(rgb, mix, "transparent")}`,
        bMix > 0
          ? `border:${bw}px solid ${colorMix(rgb, bMix, "transparent")}`
          : "",
      ]
        .filter(Boolean)
        .join(";");

      bars += `<div class="el-${elIndex}-bar" style="${barStyle}"></div>`;
    }
  }

  return `<div class="el-${elIndex}" style="${containerStyle}">${bars}</div>`;
}
