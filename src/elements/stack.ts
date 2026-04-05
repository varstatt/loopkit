import type { RGB } from "../color";
import { colorMix } from "../color";
import type { StackElement } from "../types";

export function renderStack(
  el: StackElement,
  rgb: RGB,
  elIndex: number,
): string {
  const x = el.x ?? "10%";
  const y = el.y ?? "10%";
  const w = el.w ?? "80%";
  const h = el.h ?? "80%";
  const gap = el.layerGap ?? 4;
  const radius = el.radius ?? 12;

  const containerStyle = [
    `position:absolute`,
    `left:${x}`,
    `top:${y}`,
    `width:${w}`,
    `height:${h}`,
    `display:flex`,
    `flex-direction:column`,
    `align-items:center`,
    `justify-content:center`,
    `gap:${gap}px`,
    el.opacity !== undefined ? `opacity:${el.opacity}` : "",
  ]
    .filter(Boolean)
    .join(";");

  let layers = "";
  for (let i = 0; i < el.count; i++) {
    const widthPct = el.widths?.[i] ?? 100 - i * 8;
    const mix = el.layerMix?.[i] ?? (el.mix ?? 10) + i * 4;
    const bMix = el.borderMix ?? 20;
    const bw = el.borderWidth ?? 1.5;
    const layerH = el.layerHeight ?? 24;

    const layerStyle = [
      `width:${widthPct}%`,
      `height:${layerH}px`,
      `border-radius:${radius}px`,
      `background:${colorMix(rgb, mix, "transparent")}`,
      bMix > 0
        ? `border:${bw}px solid ${colorMix(rgb, bMix, "transparent")}`
        : "",
    ]
      .filter(Boolean)
      .join(";");

    layers += `<div class="el-${elIndex}-layer" style="${layerStyle}"></div>`;
  }

  return `<div class="el-${elIndex}" style="${containerStyle}">${layers}</div>`;
}
