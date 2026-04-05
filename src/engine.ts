import { lerpColor } from "./color";
import { getEasing } from "./easing";
import { computeProgress } from "./timeline";
import type { AnimationInstance, ResolvedElement } from "./types";

interface EngineOptions {
  loop: boolean;
}

export function createEngine(
  svg: SVGSVGElement,
  elements: ResolvedElement[],
  animDuration: number,
  hold: number,
  fadeOut: number,
  options: EngineOptions,
): AnimationInstance {
  const cycleDuration = animDuration + hold + fadeOut;
  let state: "playing" | "paused" | "idle" | "settling" | "destroyed" = "idle";
  let rafId: number | null = null;
  let cycleStart = 0;
  let settleStart = 0;
  let settleFrom = 0; // the animation elapsed time we're settling from
  function applyFrame(elapsed: number): void {
    for (const re of elements) {
      const t = computeProgress(elapsed, re.delay, re.duration);
      const eased = getEasing(re.easing)(t);
      const virtualValues: Record<string, number> = {};
      let hasVirtual = false;

      for (const track of re.tracks) {
        let value: number | string;

        if (track.isColor) {
          value = lerpColor(
            track.fromColor ?? "#000",
            track.toColor ?? "#fff",
            eased,
          );
        } else {
          value = track.from + (track.to - track.from) * eased;
        }

        // Virtual properties (badge transform composites)
        if (track.property.startsWith("__")) {
          virtualValues[track.property] = value as number;
          hasVirtual = true;
          // Also apply color virtuals directly
          if (track.isColor && track.property === "__color") {
            const textNode = re.node.children[1] as SVGElement | undefined;
            if (textNode) textNode.setAttribute("fill", value as string);
          } else if (track.isColor && track.property === "__bg") {
            const bgNode = re.node.children[0] as SVGElement | undefined;
            if (bgNode) bgNode.setAttribute("fill", value as string);
          }
          continue;
        }

        if (track.isColor) {
          re.node.setAttribute(track.property, value as string);
        } else {
          re.node.setAttribute(
            track.property,
            String(Math.max(0, value as number)),
          );
        }
      }

      if (hasVirtual && re.applyTransform) {
        re.applyTransform(virtualValues);
      }
    }
  }

  // Current animation elapsed time (for settle to know where we are)
  let currentAnimElapsed = animDuration;

  // Cycle phases: fadeOut (reverse) → animate forward → hold → loop
  function tick(now: number): void {
    if (state !== "playing") return;

    const elapsed = (now - cycleStart) / 1000;

    if (elapsed >= cycleDuration) {
      if (options.loop) {
        cycleStart = now;
        currentAnimElapsed = animDuration;
        applyFrame(animDuration);
      } else {
        currentAnimElapsed = animDuration;
        applyFrame(animDuration);
        state = "idle";
        return;
      }
    } else if (elapsed < fadeOut) {
      // Phase 1: Fade out from final frame to start
      const fadeProgress = fadeOut > 0 ? Math.min(1, elapsed / fadeOut) : 1;
      currentAnimElapsed = animDuration * (1 - fadeProgress);
      applyFrame(currentAnimElapsed);
    } else if (elapsed < fadeOut + animDuration) {
      // Phase 2: Animate forward
      currentAnimElapsed = elapsed - fadeOut;
      applyFrame(currentAnimElapsed);
    } else {
      // Phase 3: Hold at final frame
      currentAnimElapsed = animDuration;
      applyFrame(animDuration);
    }

    rafId = requestAnimationFrame(tick);
  }

  // Settle: smoothly animate from current position to final frame
  function settleTick(now: number): void {
    if (state !== "settling") return;

    const elapsed = (now - settleStart) / 1000;
    const settleDuration = fadeOut > 0 ? fadeOut : 0.5;
    const progress = Math.min(1, elapsed / settleDuration);
    // Interpolate from settleFrom to animDuration (final frame)
    const t = settleFrom + (animDuration - settleFrom) * progress;
    applyFrame(t);

    if (progress >= 1) {
      state = "idle";
      applyFrame(animDuration);
      return;
    }

    rafId = requestAnimationFrame(settleTick);
  }

  const instance: AnimationInstance = {
    get state() {
      return state;
    },

    play() {
      if (state === "destroyed") return;
      state = "playing";
      cycleStart = performance.now();
      rafId = requestAnimationFrame(tick);
    },

    pause() {
      if (state === "destroyed") return;
      state = "paused";
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    },

    reset() {
      if (state === "destroyed") return;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      state = "idle";
      currentAnimElapsed = animDuration;
      applyFrame(animDuration);
    },

    settle() {
      if (state === "destroyed") return;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      // Already at final frame
      if (currentAnimElapsed >= animDuration) {
        state = "idle";
        applyFrame(animDuration);
        return;
      }
      settleFrom = currentAnimElapsed;
      settleStart = performance.now();
      state = "settling";
      rafId = requestAnimationFrame(settleTick);
    },

    destroy() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      state = "destroyed";
      if (svg.parentNode) {
        svg.parentNode.removeChild(svg);
      }
    },
  };

  return instance;
}
