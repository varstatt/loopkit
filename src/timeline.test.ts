import { computeCycle, computeDelay, computeProgress } from "./timeline";
import type { AnimationSchema } from "./types";

describe("computeDelay", () => {
  it("returns sequence * stagger", () => {
    expect(computeDelay(3, 0.45)).toBeCloseTo(1.35);
  });

  it("returns 0 for sequence 0", () => {
    expect(computeDelay(0, 0.5)).toBe(0);
  });
});

describe("computeProgress", () => {
  it("returns 0 before delay", () => {
    expect(computeProgress(0.5, 1.0, 0.5)).toBe(0);
  });

  it("returns 1 after delay + duration", () => {
    expect(computeProgress(2.0, 0.5, 1.0)).toBe(1);
  });

  it("returns 0.5 at midpoint", () => {
    expect(computeProgress(1.0, 0.5, 1.0)).toBeCloseTo(0.5);
  });

  it("handles zero duration", () => {
    expect(computeProgress(1.0, 0.5, 0)).toBe(1);
    expect(computeProgress(0.3, 0.5, 0)).toBe(0);
  });
});

describe("computeCycle", () => {
  const schema: AnimationSchema = {
    width: 460,
    height: 280,
    stagger: 0.3,
    hold: 2.0,
    elements: [
      {
        type: "rect",
        style: { x: 0, y: 0, width: 10, height: 10 },
        animate: { sequence: 0, duration: 1.0 },
      },
      {
        type: "rect",
        style: { x: 0, y: 0, width: 10, height: 10 },
        animate: { sequence: 3, duration: 0.5 },
      },
    ],
  };

  it("computes animDuration from max(delay + duration)", () => {
    // seq 3 * 0.3 stagger = 0.9 delay + 0.5 duration = 1.4 + 0.1 buffer
    expect(schema && computeCycle(schema).animDuration).toBeCloseTo(1.5);
  });

  it("computes cycleDuration = animDuration + hold + fadeOut", () => {
    // 1.5 anim + 2.0 hold + 1.5 fadeOut = 5.0
    expect(computeCycle(schema).cycleDuration).toBeCloseTo(5.0);
  });

  it("computes fadeOut capped at 1.5s", () => {
    expect(computeCycle(schema).fadeOut).toBeCloseTo(1.5);
  });

  it("uses default hold of 1.5", () => {
    const s = { ...schema, hold: undefined };
    expect(computeCycle(s).hold).toBe(1.5);
  });
});
