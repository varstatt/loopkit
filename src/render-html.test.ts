import { renderCoverHtml, resetIdCounter } from "./render-html";
import type { CoverSchema } from "./types";

beforeEach(() => {
  resetIdCounter();
});

const BASE_SCHEMA: CoverSchema = {
  color: "#5E70F8",
  width: 600,
  height: 400,
};

describe("renderCoverHtml", () => {
  it("returns all expected fields", () => {
    const result = renderCoverHtml(BASE_SCHEMA);
    expect(result).toHaveProperty("html");
    expect(result).toHaveProperty("style");
    expect(result).toHaveProperty("innerHtml");
    expect(result).toHaveProperty("hoverCss");
    expect(result).toHaveProperty("coverId");
  });

  it("generates unique coverIds", () => {
    const a = renderCoverHtml(BASE_SCHEMA);
    const b = renderCoverHtml(BASE_SCHEMA);
    expect(a.coverId).not.toBe(b.coverId);
  });

  it("renders background gradient in style", () => {
    const result = renderCoverHtml(BASE_SCHEMA);
    expect(result.style.background).toContain("linear-gradient");
  });

  it("includes data-cover attribute in html", () => {
    const result = renderCoverHtml(BASE_SCHEMA);
    expect(result.html).toContain(`data-cover="${result.coverId}"`);
  });

  it("renders grid element", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [{ type: "grid", cols: 2, rows: 2 }],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("grid-template-columns:repeat(2,1fr)");
    expect(result.innerHtml).toContain("el-0");
  });

  it("renders skeleton element", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [
        { type: "skeleton", lines: [80, 60, 40], x: "10%", y: "10%", w: "80%" },
      ],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("width:80%");
    expect(result.innerHtml).toContain("el-0-line");
  });

  it("renders circle element", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [{ type: "circle", x: "50%", y: "50%", size: 56, mix: 20 }],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("border-radius:50%");
    expect(result.innerHtml).toContain("56px");
  });

  it("renders rect element", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [
        { type: "rect", x: "10%", y: "10%", w: "80%", h: "40%", mix: 15 },
      ],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("el-0");
    expect(result.innerHtml).toContain("width:80%");
  });

  it("renders bar-chart element", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [{ type: "bar-chart", bars: [40, 70, 50, 80, 60] }],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("el-0-bar");
    expect(result.innerHtml).toContain("height:70%");
  });

  it("renders polyline element", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [
        {
          type: "polyline",
          points: [
            [0, 75],
            [25, 60],
            [50, 80],
            [75, 40],
            [100, 20],
          ],
        },
      ],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("<svg");
    expect(result.innerHtml).toContain("<polyline");
  });

  it("renders diamond element", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [{ type: "diamond", x: "90%", y: "10%", size: 12, mix: 40 }],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("rotate(45deg)");
  });

  it("renders stack element", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [{ type: "stack", count: 4, widths: [100, 92, 84, 76] }],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("el-0-layer");
  });

  it("renders flex-column element", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [
        {
          type: "flex-column",
          items: [
            { avatar: 24, lines: [35, 90, 75] },
            { avatar: 24, lines: [28, 85, 60], imageH: 32 },
          ],
        },
      ],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("el-0-item");
    expect(result.innerHtml).toContain("border-radius:50%");
  });

  it("renders text-grid element", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [
        { type: "text-grid", chars: ["A", "B", "C", "D"], cols: 2, rows: 2 },
      ],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("grid-template-columns:repeat(2,1fr)");
    expect(result.innerHtml).toContain(">A<");
  });

  it("renders blicks", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      blicks: [
        { shape: "diamond", x: "94%", y: "6%", w: 12, mix: 40 },
        { shape: "circle", x: "50%", y: "50%", w: 8, mix: 30 },
        { shape: "pill", x: "10%", y: "80%", w: 16, h: 4, mix: 35 },
      ],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("blick-0");
    expect(result.innerHtml).toContain("blick-1");
    expect(result.innerHtml).toContain("blick-2");
    expect(result.innerHtml).toContain("rotate(45deg)");
    expect(result.innerHtml).toContain("border-radius:50%");
    expect(result.innerHtml).toContain("border-radius:9999px");
  });

  it("renders decorative circle", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      decorativeCircle: {
        x: "calc(100% - 72px)",
        y: "calc(100% - 72px)",
        size: 56,
        mix: 15,
      },
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain("deco-circle");
    expect(result.innerHtml).toContain("56px");
  });

  it("generates hover CSS when hover effects present", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [
        {
          type: "circle",
          x: "50%",
          y: "50%",
          size: 40,
          mix: 20,
          hover: { scale: 1.3, opacity: 0.9, delay: 100 },
        },
      ],
    };
    const result = renderCoverHtml(schema);
    expect(result.hoverCss).toContain(":hover");
    expect(result.hoverCss).toContain("scale(1.3)");
    expect(result.hoverCss).toContain("opacity:0.9");
    expect(result.hoverCss).toContain("transition-delay:100ms");
    expect(result.html).toContain("<style>");
  });

  it("no hover CSS when no hover effects", () => {
    const result = renderCoverHtml(BASE_SCHEMA);
    expect(result.hoverCss).toBe("");
    expect(result.html).not.toContain("<style>");
  });

  it("uses custom hoverSelector when provided", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      hoverSelector: ".group:hover [data-cover]",
      elements: [
        {
          type: "circle",
          x: "50%",
          y: "50%",
          size: 40,
          mix: 20,
          hover: { scale: 1.3 },
        },
      ],
    };
    const result = renderCoverHtml(schema);
    expect(result.hoverCss).toContain(".group:hover [data-cover]");
    expect(result.hoverCss).not.toContain(
      `[data-cover="${result.coverId}"]:hover`,
    );
  });

  it("renders grid with labels and cell lines", () => {
    const schema: CoverSchema = {
      ...BASE_SCHEMA,
      elements: [
        {
          type: "grid",
          cols: 2,
          rows: 2,
          labels: ["S", "O", "A", "P"],
          cellLines: [
            [80, 65],
            [70, 85],
            [90, 60],
            [75, 85],
          ],
        },
      ],
    };
    const result = renderCoverHtml(schema);
    expect(result.innerHtml).toContain(">S<");
    expect(result.innerHtml).toContain("width:80%");
  });
});
