import type { AnimationSchema } from "./types";

export interface CycleConfig {
  /** Total animation duration in seconds (before hold). */
  animDuration: number;
  /** Hold time in seconds at final frame. */
  hold: number;
  /** Duration of the fade-out phase (reverse playback before restart). */
  fadeOut: number;
  /** Total cycle = animDuration + hold + fadeOut. */
  cycleDuration: number;
}

export function computeDelay(sequence: number, stagger: number): number {
  return sequence * stagger;
}

export function computeProgress(
  elapsed: number,
  delay: number,
  duration: number,
): number {
  if (duration <= 0) return elapsed >= delay ? 1 : 0;
  return Math.max(0, Math.min(1, (elapsed - delay) / duration));
}

export function computeCycle(schema: AnimationSchema): CycleConfig {
  const hold = schema.hold ?? 1.5;
  let maxEnd = 0;

  for (const el of schema.elements) {
    if (el.animate) {
      const delay = computeDelay(el.animate.sequence, schema.stagger);
      const dur = el.animate.duration;
      const end = delay + dur;
      if (end > maxEnd) maxEnd = end;
    }
  }

  // Add a small buffer so the last element fully completes
  const animDuration = maxEnd + 0.1;
  // Fade-out phase: reverse animation before restart, capped at 1.5s
  const fadeOut = Math.min(animDuration, 1.5);

  return {
    animDuration,
    hold,
    fadeOut,
    cycleDuration: animDuration + hold + fadeOut,
  };
}
