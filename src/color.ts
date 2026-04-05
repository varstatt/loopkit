import type { RGB } from "./types";

export function parseHex(hex: string): RGB {
  if (!hex || typeof hex !== "string") return [255, 255, 255];
  const h = hex.startsWith("#") ? hex.slice(1) : hex;
  const full = h.length === 3 ? h[0] + h[0] + h[1] + h[1] + h[2] + h[2] : h;
  return [
    Number.parseInt(full.slice(0, 2), 16),
    Number.parseInt(full.slice(2, 4), 16),
    Number.parseInt(full.slice(4, 6), 16),
  ];
}

export function rgbToHex(rgb: RGB): string {
  return `#${rgb.map((c) => Math.round(c).toString(16).padStart(2, "0")).join("")}`;
}

export function lerpRgb(a: RGB, b: RGB, t: number): RGB {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

export function lerpColor(from: string, to: string, t: number): string {
  const a = parseHex(from);
  const b = parseHex(to);
  const r = lerpRgb(a, b, t);
  return `rgb(${Math.round(r[0])},${Math.round(r[1])},${Math.round(r[2])})`;
}

/** Check if a value looks like a hex color string. */
export function isColorValue(v: unknown): v is string {
  return typeof v === "string" && v.startsWith("#");
}
