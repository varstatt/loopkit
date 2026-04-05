import type { RGB } from "../color";
import { colorMix } from "../color";
import type { DiamondElement } from "../types";

export function renderDiamond(
  el: DiamondElement,
  rgb: RGB,
  elIndex: number,
): string {
  const mix = el.mix ?? 40;
  const radius = el.radius ?? 2;

  const style = [
    `position:absolute`,
    el.x ? `left:${el.x}` : "",
    el.y ? `top:${el.y}` : "",
    `width:${el.size}px`,
    `height:${el.size}px`,
    `transform:rotate(45deg)`,
    `border-radius:${radius}px`,
    `background:${colorMix(rgb, mix, "transparent")}`,
    el.opacity !== undefined ? `opacity:${el.opacity}` : "",
  ]
    .filter(Boolean)
    .join(";");

  return `<div class="el-${elIndex}" style="${style}"></div>`;
}
