import type { EasingName } from "./types";

export type EasingFn = (t: number) => number;

export const easings: Record<EasingName, EasingFn> = {
  linear: (t) => t,
  "ease-in": (t) => t * t * t,
  "ease-out": (t) => 1 - (1 - t) ** 3,
  "ease-in-out": (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2),
};

export function getEasing(name: EasingName): EasingFn {
  return easings[name] ?? easings.linear;
}
