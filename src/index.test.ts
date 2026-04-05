import { createAnimation, renderToString } from "./index";
import type { AnimationSchema } from "./types";

const schema: AnimationSchema = {
  width: 460,
  height: 280,
  background: "#0c1222",
  stagger: 0.3,
  trigger: "hover",
  elements: [
    {
      type: "text",
      content: "Test",
      style: { x: 40, y: 60, color: "#fff" },
      animate: { sequence: 0, duration: 0.5, opacity: [0, 1] },
    },
    {
      type: "rect",
      style: { x: 10, y: 10, width: 100, height: 20, fill: "#f00" },
    },
    {
      type: "circle",
      style: { cx: 50, cy: 50, r: 10, fill: "#0f0" },
    },
    {
      type: "badge",
      content: "1",
      style: { x: 100, y: 100, color: "#fff", bg: "#00f" },
      animate: { sequence: 1, duration: 0.3, scale: [0, 1] },
    },
  ],
};

describe("createAnimation", () => {
  it("mounts SVG into container", () => {
    const container = document.createElement("div");
    const anim = createAnimation(container, schema);
    expect(container.querySelector("svg")).not.toBeNull();
    anim.destroy();
  });

  it("returns playback controls", () => {
    const container = document.createElement("div");
    const anim = createAnimation(container, schema);
    expect(typeof anim.play).toBe("function");
    expect(typeof anim.pause).toBe("function");
    expect(typeof anim.reset).toBe("function");
    expect(typeof anim.destroy).toBe("function");
    anim.destroy();
  });

  it("destroy removes SVG from DOM", () => {
    const container = document.createElement("div");
    const anim = createAnimation(container, schema);
    anim.destroy();
    expect(container.querySelector("svg")).toBeNull();
  });

  it("starts in idle state for hover trigger", () => {
    const container = document.createElement("div");
    const anim = createAnimation(container, schema);
    expect(anim.state).toBe("idle");
    anim.destroy();
  });

  it("autoplay starts playing immediately", () => {
    const container = document.createElement("div");
    const anim = createAnimation(container, {
      ...schema,
      trigger: "autoplay",
    });
    expect(anim.state).toBe("playing");
    anim.destroy();
  });
});

describe("renderToString", () => {
  it("returns SVG string", () => {
    const svg = renderToString(schema);
    expect(svg).toContain("<svg");
    expect(svg).toContain("Test");
  });
});
