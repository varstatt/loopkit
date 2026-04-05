import { renderToString } from "./render-string";
import type { AnimationSchema } from "./types";

describe("renderToString", () => {
  const schema: AnimationSchema = {
    width: 460,
    height: 280,
    background: "#0c1222",
    stagger: 0.3,
    elements: [
      {
        type: "text",
        content: "Hello",
        style: { x: 40, y: 60, fontSize: 20, color: "#fff" },
        animate: { sequence: 0, duration: 0.5, opacity: [0, 1] },
      },
      {
        type: "rect",
        style: { x: 10, y: 10, width: 0, height: 20, fill: "#f00" },
        animate: { sequence: 1, duration: 0.5, width: [0, 100] },
      },
    ],
  };

  it("returns valid SVG string", () => {
    const svg = renderToString(schema);
    expect(svg).toMatch(/^<svg /);
    expect(svg).toMatch(/<\/svg>$/);
  });

  it("contains viewBox", () => {
    const svg = renderToString(schema);
    expect(svg).toContain('viewBox="0 0 460 280"');
  });

  it("includes background rect", () => {
    const svg = renderToString(schema);
    expect(svg).toContain('fill="#0c1222"');
  });

  it("renders text at final frame (opacity=1)", () => {
    const svg = renderToString(schema);
    expect(svg).toContain("Hello");
    expect(svg).toContain('opacity="1"');
  });

  it("renders rect at final frame (width=100)", () => {
    const svg = renderToString(schema);
    expect(svg).toContain('width="100"');
  });

  it("renders badge elements", () => {
    const s: AnimationSchema = {
      width: 100,
      height: 100,
      stagger: 0.3,
      elements: [
        {
          type: "badge",
          content: "1",
          style: { x: 50, y: 50, color: "#fff", bg: "#22c55e" },
        },
      ],
    };
    const svg = renderToString(s);
    expect(svg).toContain("1");
    expect(svg).toContain("#22c55e");
  });

  it("renders circle elements", () => {
    const s: AnimationSchema = {
      width: 100,
      height: 100,
      stagger: 0.3,
      elements: [
        {
          type: "circle",
          style: { cx: 50, cy: 50, r: 20, fill: "#f00" },
        },
      ],
    };
    const svg = renderToString(s);
    expect(svg).toContain('r="20"');
  });

  it("works without background", () => {
    const s: AnimationSchema = {
      width: 100,
      height: 100,
      stagger: 0.3,
      elements: [],
    };
    const svg = renderToString(s);
    expect(svg).toBe(
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>',
    );
  });
});
