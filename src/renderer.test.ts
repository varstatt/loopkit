import { createSvgRoot, mount, setAttrs, svgEl } from "./renderer";

describe("svgEl", () => {
  it("creates an SVG element in SVG namespace", () => {
    const rect = svgEl("rect", { x: 10, y: 20 });
    expect(rect.namespaceURI).toBe("http://www.w3.org/2000/svg");
    expect(rect.getAttribute("x")).toBe("10");
    expect(rect.getAttribute("y")).toBe("20");
  });
});

describe("setAttrs", () => {
  it("sets multiple attributes", () => {
    const el = svgEl("rect");
    setAttrs(el, { width: 100, height: 50, fill: "#f00" });
    expect(el.getAttribute("width")).toBe("100");
    expect(el.getAttribute("fill")).toBe("#f00");
  });
});

describe("createSvgRoot", () => {
  it("creates SVG with viewBox", () => {
    const svg = createSvgRoot(460, 280);
    expect(svg.getAttribute("viewBox")).toBe("0 0 460 280");
  });

  it("adds background rect when color provided", () => {
    const svg = createSvgRoot(460, 280, "#0c1222");
    expect(svg.children.length).toBe(1);
    expect(svg.children[0].getAttribute("fill")).toBe("#0c1222");
  });

  it("no background rect when color omitted", () => {
    const svg = createSvgRoot(460, 280);
    expect(svg.children.length).toBe(0);
  });
});

describe("mount", () => {
  it("appends SVG to container", () => {
    const container = document.createElement("div");
    const svg = createSvgRoot(100, 100);
    mount(container, svg);
    expect(container.children.length).toBe(1);
    expect(container.children[0]).toBe(svg);
  });
});
