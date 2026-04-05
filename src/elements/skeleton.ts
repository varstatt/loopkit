import type { RGB } from "../color";
import { colorMix } from "../color";
import type { SkeletonElement } from "../types";

export function renderSkeleton(
  el: SkeletonElement,
  rgb: RGB,
  elIndex: number,
): string {
  const lineHeight = el.lineHeight ?? 6;
  const lineGap = el.lineGap ?? 4;
  const x = el.x ?? "0";
  const y = el.y ?? "0";
  const w = el.w ?? "100%";
  const h = el.h ?? "auto";

  const containerStyle = [
    `position:absolute`,
    `left:${x}`,
    `top:${y}`,
    `width:${w}`,
    h !== "auto" ? `height:${h}` : "",
    `display:flex`,
    `flex-direction:column`,
    `gap:${lineGap}px`,
    el.opacity !== undefined ? `opacity:${el.opacity}` : "",
  ]
    .filter(Boolean)
    .join(";");

  let lines = "";
  for (let i = 0; i < el.lines.length; i++) {
    const mix = el.lineMix?.[i % (el.lineMix?.length ?? 1)] ?? el.mix ?? 25;
    const lineStyle = `height:${lineHeight}px;border-radius:9999px;width:${el.lines[i]}%;background:${colorMix(rgb, mix, "transparent")}`;
    lines += `<div class="el-${elIndex}-line" style="${lineStyle}"></div>`;
  }

  return `<div class="el-${elIndex}" style="${containerStyle}">${lines}</div>`;
}
