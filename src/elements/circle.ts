import { isColorValue } from "../color";
import { svgEl } from "../renderer";
import type { AnimationTrack, CircleElement, ResolvedElement } from "../types";

const ATTR_MAP: Record<string, string> = {
  cx: "cx",
  cy: "cy",
  r: "r",
  fill: "fill",
  stroke: "stroke",
  strokeWidth: "stroke-width",
  opacity: "opacity",
};

export function createCircleElement(
  el: CircleElement,
  stagger: number,
): { node: SVGCircleElement; resolved: ResolvedElement | null } {
  const s = el.style;
  const node = svgEl("circle", {
    cx: s.cx,
    cy: s.cy,
    r: s.r,
    fill: s.fill ?? "#fff",
    opacity: s.opacity ?? 1,
  });
  if (s.stroke) node.setAttribute("stroke", s.stroke);
  if (s.strokeWidth) node.setAttribute("stroke-width", String(s.strokeWidth));

  if (!el.animate) return { node, resolved: null };

  const tracks = extractTracks(el.animate, ATTR_MAP);
  const delay = el.animate.sequence * stagger;

  // Handle scale -> r multiplication
  const scaleAnim = el.animate.scale;
  if (Array.isArray(scaleAnim) && scaleAnim.length === 2) {
    const [fromScale, toScale] = scaleAnim as [number, number];
    tracks.push({
      property: "r",
      from: s.r * fromScale,
      to: s.r * toScale,
      isColor: false,
    });
  }

  return {
    node,
    resolved: {
      node,
      tracks,
      delay,
      duration: el.animate.duration,
      easing: el.animate.easing ?? "ease-out",
    },
  };
}

function extractTracks(
  animate: Record<string, unknown>,
  attrMap: Record<string, string>,
): AnimationTrack[] {
  const tracks: AnimationTrack[] = [];
  const skip = new Set(["sequence", "duration", "easing", "scale"]);

  for (const [key, val] of Object.entries(animate)) {
    if (skip.has(key)) continue;
    if (!Array.isArray(val) || val.length !== 2) continue;

    const [from, to] = val;
    const isColor = isColorValue(from) && isColorValue(to);
    const attr = attrMap[key] ?? key;

    tracks.push({
      property: attr,
      from: isColor ? 0 : (from as number),
      to: isColor ? 1 : (to as number),
      isColor,
      fromColor: isColor ? (from as string) : undefined,
      toColor: isColor ? (to as string) : undefined,
    });
  }

  return tracks;
}
