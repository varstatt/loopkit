import type { RGB } from "../color";
import { colorMix } from "../color";
import type { FlexColumnElement } from "../types";

export function renderFlexColumn(
  el: FlexColumnElement,
  rgb: RGB,
  elIndex: number,
): string {
  const x = el.x ?? "25%";
  const y = el.y ?? "6%";
  const w = el.w ?? "50%";
  const h = el.h ?? "auto";
  const separators = el.separators !== false;
  const sepMix = el.separatorMix ?? 15;

  const containerStyle = [
    `position:absolute`,
    `left:${x}`,
    `top:${y}`,
    w ? `width:${w}` : "",
    h !== "auto" ? `height:${h}` : "",
    `display:flex`,
    `flex-direction:column`,
    el.opacity !== undefined ? `opacity:${el.opacity}` : "",
  ]
    .filter(Boolean)
    .join(";");

  let items = "";
  for (let i = 0; i < el.items.length; i++) {
    const item = el.items[i];
    const avatarMix = item.avatarMix ?? 30 + i * 6;
    const lineMix = item.lineMix ?? 25;
    const imageMix = item.imageMix ?? 15;
    const actionMix = item.actionMix ?? 18;

    let itemContent = "";

    // Row: avatar + name/lines
    if (item.avatar || item.lines || item.nameWidth) {
      itemContent += `<div style="display:flex;gap:8px">`;

      if (item.avatar) {
        itemContent += `<div style="width:${item.avatar}px;height:${item.avatar}px;border-radius:50%;flex-shrink:0;background:${colorMix(rgb, avatarMix, "transparent")}"></div>`;
      }

      const nameMix = item.nameMix ?? 45;
      const hasName = item.nameWidth !== undefined;

      if (hasName || item.lines) {
        itemContent += `<div style="flex:1;display:flex;flex-direction:column;gap:4px">`;

        // Name + handle row
        if (hasName) {
          itemContent += `<div style="display:flex;gap:6px;align-items:center">`;
          itemContent += `<div style="height:6px;border-radius:9999px;width:${item.nameWidth}%;background:${colorMix(rgb, nameMix, "transparent")}"></div>`;
          itemContent += `<div style="height:4px;border-radius:9999px;width:${(item.nameWidth ?? 35) - 10}%;background:${colorMix(rgb, 20, "transparent")}"></div>`;
          itemContent += `</div>`;
        }

        // Text lines
        if (item.lines) {
          for (const w of item.lines) {
            itemContent += `<div style="height:6px;border-radius:9999px;width:${w}%;background:${colorMix(rgb, lineMix, "transparent")}"></div>`;
          }
        }

        itemContent += `</div>`;
      }

      itemContent += `</div>`;
    }

    // Image block
    if (item.imageH) {
      const imgBorderMix = imageMix + 7;
      itemContent += `<div style="height:${item.imageH}px;width:85%;border-radius:8px;margin-top:6px;background:${colorMix(rgb, imageMix, "transparent")};border:1px solid ${colorMix(rgb, imgBorderMix, "transparent")}"></div>`;
    }

    // Actions
    if (item.actions) {
      itemContent += `<div style="display:flex;gap:16px;margin-top:2px">`;
      for (let a = 0; a < item.actions; a++) {
        itemContent += `<div style="width:12px;height:4px;border-radius:9999px;background:${colorMix(rgb, actionMix, "transparent")}"></div>`;
      }
      itemContent += `</div>`;
    }

    const borderBottom =
      separators && i < el.items.length - 1
        ? `border-bottom:1px solid ${colorMix(rgb, sepMix, "transparent")}`
        : "";

    const itemStyle = [`padding:8px 0`, borderBottom].filter(Boolean).join(";");

    items += `<div class="el-${elIndex}-item" style="${itemStyle}">${itemContent}</div>`;
  }

  return `<div class="el-${elIndex}" style="${containerStyle}">${items}</div>`;
}
