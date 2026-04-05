import { isColorValue } from "../color";
import { svgEl } from "../renderer";
import type { AnimationTrack, ResolvedElement, TextElement } from "../types";

/** Map schema property names to SVG attribute names for text. */
const ATTR_MAP: Record<string, string> = {
  x: "x",
  y: "y",
  fontSize: "font-size",
  fontFamily: "font-family",
  fontWeight: "font-weight",
  color: "fill",
  opacity: "opacity",
  textAnchor: "text-anchor",
  letterSpacing: "letter-spacing",
};

export function createTextElement(
  el: TextElement,
  stagger: number,
): { node: SVGTextElement; resolved: ResolvedElement | null } {
  const s = el.style;
  const node = svgEl("text", {
    x: s.x,
    y: s.y,
    fill: s.color ?? "#fff",
    "font-size": s.fontSize ?? 14,
    "font-weight": s.fontWeight ?? "normal",
    "font-family": s.fontFamily ?? "'DM Sans', sans-serif",
    opacity: s.opacity ?? 1,
    "dominant-baseline": "middle",
  });
  if (s.textAnchor) node.setAttribute("text-anchor", s.textAnchor);
  if (s.letterSpacing)
    node.setAttribute("letter-spacing", String(s.letterSpacing));
  node.textContent = el.content;

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
