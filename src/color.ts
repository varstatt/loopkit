export type RGB = [number, number, number];

export function hexToRgb(hex: string): RGB {
  let h = hex.replace(/^#/, "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const n = Number.parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function rgbToHex(rgb: RGB): string {
  return `#${rgb.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

/**
 * Replicate CSS `color-mix(in srgb, color N%, target)`.
 *
 * - target "transparent": returns `rgba(r,g,b, pct/100)`
 * - target "white": blends toward white
 * - target "black": blends toward black
 */
export function colorMix(
  rgb: RGB,
  percentage: number,
  target: "transparent" | "white" | "black" = "transparent",
): string {
  const pct = percentage / 100;
  if (target === "transparent") {
    return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${pct})`;
  }
  const t = target === "white" ? 255 : 0;
  const r = Math.round(rgb[0] * pct + t * (1 - pct));
  const g = Math.round(rgb[1] * pct + t * (1 - pct));
  const b = Math.round(rgb[2] * pct + t * (1 - pct));
  return `rgb(${r},${g},${b})`;
}

/**
 * Build a palette of pre-computed color strings at common mix percentages.
 */
export function buildPalette(hex: string): {
  rgb: RGB;
  transparent: (pct: number) => string;
  white: (pct: number) => string;
} {
  const rgb = hexToRgb(hex);
  return {
    rgb,
    transparent: (pct: number) => colorMix(rgb, pct, "transparent"),
    white: (pct: number) => colorMix(rgb, pct, "white"),
  };
}
