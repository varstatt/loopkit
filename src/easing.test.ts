import { easings, getEasing } from "./easing";

describe("easings", () => {
  for (const [name, fn] of Object.entries(easings)) {
    it(`${name}: f(0) = 0`, () => expect(fn(0)).toBe(0));
    it(`${name}: f(1) = 1`, () => expect(fn(1)).toBe(1));
  }

  it("ease-in is concave at t=0.5", () => {
    expect(easings["ease-in"](0.5)).toBeLessThan(0.5);
  });

  it("ease-out is convex at t=0.5", () => {
    expect(easings["ease-out"](0.5)).toBeGreaterThan(0.5);
  });

  it("ease-in-out passes through 0.5 at t=0.5", () => {
    expect(easings["ease-in-out"](0.5)).toBe(0.5);
  });
});

describe("getEasing", () => {
  it("returns matching easing function", () => {
    expect(getEasing("ease-out")).toBe(easings["ease-out"]);
  });

  it("falls back to linear for unknown", () => {
    expect(getEasing("linear")).toBe(easings.linear);
  });
});
