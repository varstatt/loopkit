import type { RGB } from "../color";
import { colorMix } from "../color";
import type { CircleElement } from "../types";

export function renderCircle(
  el: CircleElement,
  rgb: RGB,
  elIndex: number,
): string {
  const size = typeof el.size === "number" ? `${el.size}px` : el.size;
  const mix = el.mix ?? 15;
  const bMix = el.borderMix ?? 0;
  const bw = el.borderWidth ?? 1.5;

  const style = [
    `position:absolute`,
    el.x ? `left:${el.x}` : "",
    el.y ? `top:${el.y}` : "",
    `width:${size}`,
    `height:${size}`,
    `border-radius:50%`,
    `background:${colorMix(rgb, mix, "transparent")}`,
    bMix > 0
      ? `border:${bw}px solid ${colorMix(rgb, bMix, "transparent")}`
      : "",
    el.opacity !== undefined ? `opacity:${el.opacity}` : "",
  ]
    .filter(Boolean)
    .join(";");

  let inner = "";
  if (el.innerRing) {
    const ringMix = Math.max(5, mix - 8);
    inner = `<div style="position:absolute;inset:4px;border-radius:50%;border:1px solid ${colorMix(rgb, ringMix, "transparent")}"></div>`;
  }

  return `<div class="el-${elIndex}" style="${style}">${inner}</div>`;
}
