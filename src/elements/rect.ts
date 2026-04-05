import type { RGB } from "../color";
import { colorMix } from "../color";
import type { RectElement } from "../types";

export function renderRect(el: RectElement, rgb: RGB, elIndex: number): string {
  const mix = el.mix ?? 10;
  const bMix = el.borderMix ?? 0;
  const bw = el.borderWidth ?? 1.5;
  const radius = el.radius ?? 8;
  const hasContent =
    el.lines || el.bullets || el.progressBars || el.titleWidth || el.rawContent;

  const style = [
    `position:absolute`,
    el.x ? `left:${el.x}` : "",
    el.y ? `top:${el.y}` : "",
    el.w ? `width:${el.w}` : "",
    el.h ? `height:${el.h}` : "",
    `border-radius:${radius}px`,
    `background:${colorMix(rgb, mix, "transparent")}`,
    bMix > 0
      ? `border:${bw}px solid ${colorMix(rgb, bMix, "transparent")}`
      : "",
    el.opacity !== undefined ? `opacity:${el.opacity}` : "",
    hasContent ? `padding:${el.padding ?? 16}px` : "",
    hasContent ? `display:flex` : "",
    hasContent ? `flex-direction:column` : "",
    hasContent ? `gap:${el.lineGap ?? 4}px` : "",
  ]
    .filter(Boolean)
    .join(";");

  let content = "";

  // Title line
  if (el.titleWidth) {
    const tMix = el.titleMix ?? 35;
    content += `<div style="height:${(el.lineHeight ?? 4) * 1.5}px;width:${el.titleWidth}%;border-radius:9999px;background:${colorMix(rgb, tMix, "transparent")}"></div>`;
  }

  // Skeleton lines
  if (el.lines) {
    const lh = el.lineHeight ?? 4;
    for (let i = 0; i < el.lines.length; i++) {
      const lMix =
        el.lineMix?.[i % (el.lineMix?.length ?? 1)] ?? (el.mix ?? 16) + i * 3;
      content += `<div style="height:${lh}px;width:${el.lines[i]}%;border-radius:9999px;background:${colorMix(rgb, lMix, "transparent")}"></div>`;
    }
  }

  // Bullet items
  if (el.bullets) {
    const bSize = el.bulletSize ?? 10;
    for (let i = 0; i < el.bullets.length; i++) {
      const bullet = el.bullets[i];
      const bMixVal = bullet.bulletMix ?? 35 + i * 5;
      let bulletHtml = `<div style="display:flex;gap:6px;align-items:flex-start">`;
      bulletHtml += `<div style="width:${bSize}px;height:${bSize}px;border-radius:2px;flex-shrink:0;margin-top:2px;background:${colorMix(rgb, bMixVal, "transparent")}"></div>`;
      bulletHtml += `<div style="flex:1;display:flex;flex-direction:column;gap:2px">`;
      for (const w of bullet.lines) {
        bulletHtml += `<div style="height:${el.lineHeight ?? 4}px;width:${w}%;border-radius:9999px;background:${colorMix(rgb, 30, "transparent")}"></div>`;
      }
      bulletHtml += `</div></div>`;
      content += bulletHtml;
    }
  }

  // Progress bars
  if (el.progressBars) {
    let pbHtml = `<div style="margin-top:auto;display:flex;gap:4px">`;
    for (let i = 0; i < el.progressBars.length; i++) {
      const pb = el.progressBars[i];
      const trackMix = pb.trackMix ?? 10;
      const fillMix = pb.fillMix ?? 30 + i * 5;
      pbHtml += `<div style="flex:1;height:8px;border-radius:9999px;overflow:hidden;background:${colorMix(rgb, trackMix, "transparent")}">`;
      pbHtml += `<div style="height:100%;width:${pb.fill}%;border-radius:9999px;background:${colorMix(rgb, fillMix, "transparent")}"></div>`;
      pbHtml += `</div>`;
    }
    pbHtml += `</div>`;
    content += pbHtml;
  }

  // Raw content
  if (el.rawContent) {
    content += el.rawContent;
  }

  return `<div class="el-${elIndex}" style="${style}">${content}</div>`;
}
