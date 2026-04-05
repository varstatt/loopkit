import { isColorValue } from "../color";
import { svgEl } from "../renderer";
import type { AnimationTrack, RectElement, ResolvedElement } from "../types";

const ATTR_MAP: Record<string, string> = {
  x: "x",
  y: "y",
  width: "width",
  height: "height",
  fill: "fill",
  stroke: "stroke",
  strokeWidth: "stroke-width",
  rx: "rx",
  opacity: "opacity",
};

export function createRectElement(
  el: RectElement,
  stagger: number,
): { node: SVGRectElement; resolved: ResolvedElement | null } {
  const s = el.style;
  const node = svgEl("rect", {
    x: s.x,
    y: s.y,
    width: Math.max(0, s.width),
    height: Math.max(0, s.height),
    fill: s.fill ?? "#fff",
    opacity: s.opacity ?? 1,
  });
  if (s.rx) node.setAttribute("rx", String(s.rx));
  if (s.stroke) node.setAttribute("stroke", s.stroke);
  if (s.strokeWidth) node.setAttribute("stroke-width", String(s.strokeWidth));

  if (!el.animate) return { node, resolved: null };

  const tracks = extractTracks(el.animate, ATTR_MAP);
  const delay = el.animate.sequence * stagger;

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
  const skip = new Set(["sequence", "duration", "easing"]);

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
