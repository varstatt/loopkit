import type { AnimationSchema, SchemaElement } from "./types";

/**
 * Render schema as SVG markup string at final frame (all animations at t=1).
 * No DOM required — works in Node.js / SSR.
 */
export function renderToString(schema: AnimationSchema): string {
  const { width, height, background, elements } = schema;

  let content = "";

  if (background) {
    content += `<rect x="0" y="0" width="${width}" height="${height}" fill="${background}"/>`;
  }

  for (const el of elements) {
    content += renderElementString(el);
  }

  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
}

function getFinalValue(
  style: Record<string, unknown>,
  animate: Record<string, unknown> | undefined,
  prop: string,
): unknown {
  if (animate) {
    const val = animate[prop];
    if (Array.isArray(val) && val.length === 2) return val[1]; // to value
  }
  return style[prop];
}

function renderElementString(el: SchemaElement): string {
  switch (el.type) {
    case "text":
      return renderTextString(el);
    case "rect":
      return renderRectString(el);
    case "circle":
      return renderCircleString(el);
    case "badge":
      return renderBadgeString(el);
  }
}

function renderTextString(
  el: Extract<SchemaElement, { type: "text" }>,
): string {
  const s = el.style;
  const a = el.animate;
  const x = getFinalValue(s, a, "x") ?? s.x;
  const y = getFinalValue(s, a, "y") ?? s.y;
  const opacity = getFinalValue(s, a, "opacity") ?? s.opacity ?? 1;
  const color = getFinalValue(s, a, "color") ?? s.color ?? "#fff";
  const fontSize = getFinalValue(s, a, "fontSize") ?? s.fontSize ?? 14;

  return `<text x="${x}" y="${y}" fill="${color}" font-size="${fontSize}" font-weight="${s.fontWeight ?? "normal"}" font-family="${s.fontFamily ?? "'DM Sans', sans-serif"}" opacity="${opacity}" dominant-baseline="middle">${escapeXml(el.content)}</text>`;
}

function renderRectString(
  el: Extract<SchemaElement, { type: "rect" }>,
): string {
  const s = el.style;
  const a = el.animate;
  const x = getFinalValue(s, a, "x") ?? s.x;
  const y = getFinalValue(s, a, "y") ?? s.y;
  const w = getFinalValue(s, a, "width") ?? s.width;
  const h = getFinalValue(s, a, "height") ?? s.height;
  const fill = getFinalValue(s, a, "fill") ?? s.fill ?? "#fff";
  const opacity = getFinalValue(s, a, "opacity") ?? s.opacity ?? 1;
  const rx = s.rx ? ` rx="${s.rx}"` : "";

  return `<rect x="${x}" y="${y}" width="${Math.max(0, w as number)}" height="${Math.max(0, h as number)}" fill="${fill}" opacity="${opacity}"${rx}/>`;
}

function renderCircleString(
  el: Extract<SchemaElement, { type: "circle" }>,
): string {
  const s = el.style;
  const a = el.animate;
  const cx = getFinalValue(s, a, "cx") ?? s.cx;
  const cy = getFinalValue(s, a, "cy") ?? s.cy;
  let r = (getFinalValue(s, a, "r") ?? s.r) as number;
  const fill = getFinalValue(s, a, "fill") ?? s.fill ?? "#fff";
  const opacity = getFinalValue(s, a, "opacity") ?? s.opacity ?? 1;

  // Handle scale
  if (a?.scale && Array.isArray(a.scale) && a.scale.length === 2) {
    r = s.r * (a.scale[1] as number);
  }

  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${opacity}"/>`;
}

function renderBadgeString(
  el: Extract<SchemaElement, { type: "badge" }>,
): string {
  const s = el.style;
  const a = el.animate;
  const x = a?.x ? (a.x as [number, number])[1] : s.x;
  const y = a?.y ? (a.y as [number, number])[1] : s.y;
  const scale = a?.scale ? (a.scale as [number, number])[1] : 1;
  const opacity = getFinalValue(s, a, "opacity") ?? s.opacity ?? 1;
  const bg = a?.bg ? (a.bg as [string, string])[1] : (s.bg ?? "#222");
  const color = a?.color
    ? (a.color as [string, string])[1]
    : (s.color ?? "#fff");
  const r = s.r ?? 14;
  const fontSize = s.fontSize ?? 12;

  let inner: string;
  if (s.isLabel) {
    const textWidth = (el.content || "").length * 5.8 + 18;
    inner = `<rect x="${-textWidth / 2}" y="${-r}" width="${textWidth}" height="${r * 2}" rx="${r}" fill="${bg}"/>`;
  } else {
    inner = `<circle cx="0" cy="0" r="${r}" fill="${bg}"/>`;
  }

  inner += `<text x="0" y="1" fill="${color}" font-size="${fontSize}" font-weight="${s.fontWeight ?? "bold"}" text-anchor="middle" dominant-baseline="central" font-family="'DM Sans', sans-serif">${escapeXml(el.content)}</text>`;

  return `<g transform="translate(${x},${y}) scale(${scale})" opacity="${opacity}">${inner}</g>`;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
