import { isColorValue } from "../color";
import { svgEl } from "../renderer";
import type { AnimationTrack, BadgeElement, ResolvedElement } from "../types";

export function createBadgeElement(
  el: BadgeElement,
  stagger: number,
): { node: SVGGElement; resolved: ResolvedElement | null } {
  const s = el.style;
  const r = s.r ?? 14;

  const g = svgEl("g");
  g.setAttribute("transform", `translate(${s.x},${s.y})`);
  if (s.opacity !== undefined) g.setAttribute("opacity", String(s.opacity));

  if (s.isLabel) {
    // Rounded-rect label
    const textWidth = (el.content || "").length * 5.8 + 18;
    const shape = svgEl("rect", {
      x: -textWidth / 2,
      y: -r,
      width: textWidth,
      height: r * 2,
      rx: r,
      fill: s.bg ?? "#222",
    });
    g.appendChild(shape);
  } else {
    // Circle badge
    const shape = svgEl("circle", {
      cx: 0,
      cy: 0,
      r,
      fill: s.bg ?? "#222",
    });
    g.appendChild(shape);
  }

  const text = svgEl("text", {
    x: 0,
    y: 1,
    fill: s.color ?? "#fff",
    "font-size": s.fontSize ?? 12,
    "font-weight": s.fontWeight ?? "bold",
    "text-anchor": "middle",
    "dominant-baseline": "central",
    "font-family": "'DM Sans', sans-serif",
  });
  text.textContent = el.content;
  g.appendChild(text);

  if (!el.animate) return { node: g, resolved: null };

  const anim = el.animate;
  const delay = anim.sequence * stagger;

  // Extract standard tracks (opacity, color, bg)
  const tracks: AnimationTrack[] = [];
  const skip = new Set([
    "sequence",
    "duration",
    "easing",
    "scale",
    "x",
    "y",
    "color",
    "bg",
  ]);

  for (const [key, val] of Object.entries(anim)) {
    if (skip.has(key)) continue;
    if (!Array.isArray(val) || val.length !== 2) continue;
    const [from, to] = val;
    const isColor = isColorValue(from) && isColorValue(to);
    tracks.push({
      property: key,
      from: isColor ? 0 : (from as number),
      to: isColor ? 1 : (to as number),
      isColor,
      fromColor: isColor ? (from as string) : undefined,
      toColor: isColor ? (to as string) : undefined,
    });
  }

  // Color tracks for badge children
  const colorAnim = anim.color as [string, string] | undefined;
  const bgAnim = anim.bg as [string, string] | undefined;

  // Composite values that need custom application
  const scaleAnim = anim.scale as [number, number] | undefined;
  const xAnim = anim.x as [number, number] | undefined;
  const yAnim = anim.y as [number, number] | undefined;

  // Track scale/x/y as virtual properties (not direct SVG attrs)
  if (scaleAnim) {
    tracks.push({
      property: "__scale",
      from: scaleAnim[0],
      to: scaleAnim[1],
      isColor: false,
    });
  }
  if (xAnim) {
    tracks.push({
      property: "__x",
      from: xAnim[0],
      to: xAnim[1],
      isColor: false,
    });
  }
  if (yAnim) {
    tracks.push({
      property: "__y",
      from: yAnim[0],
      to: yAnim[1],
      isColor: false,
    });
  }
  if (colorAnim) {
    tracks.push({
      property: "__color",
      from: 0,
      to: 1,
      isColor: true,
      fromColor: colorAnim[0],
      toColor: colorAnim[1],
    });
  }
  if (bgAnim) {
    tracks.push({
      property: "__bg",
      from: 0,
      to: 1,
      isColor: true,
      fromColor: bgAnim[0],
      toColor: bgAnim[1],
    });
  }

  const baseX = s.x;
  const baseY = s.y;

  const applyTransform = (values: Record<string, number>) => {
    const sx = values.__x ?? baseX;
    const sy = values.__y ?? baseY;
    const sc = values.__scale ?? 1;
    g.setAttribute("transform", `translate(${sx},${sy}) scale(${sc})`);
  };

  return {
    node: g,
    resolved: {
      node: g,
      tracks,
      delay,
      duration: anim.duration,
      easing: anim.easing ?? "ease-out",
      applyTransform,
    },
  };
}
