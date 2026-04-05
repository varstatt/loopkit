import type { RGB } from "../color";
import { colorMix } from "../color";
import type { CoverBackground } from "../types";

const DEFAULT_STOPS = [{ mix: 12 }, { mix: 5 }, { mix: 14 }];

export function renderBackground(rgb: RGB, bg?: CoverBackground): string {
  const angle = bg?.angle ?? 135;
  const stops = bg?.stops ?? DEFAULT_STOPS;

  const colorStops = stops.map((s) => colorMix(rgb, s.mix, "white")).join(", ");
  return `linear-gradient(${angle}deg, ${colorStops})`;
}
