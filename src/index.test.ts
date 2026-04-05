import {
  buildPalette,
  colorMix,
  createCover,
  hexToRgb,
  rgbToHex,
} from "./index";

describe("createCover", () => {
  it("returns a CoverResult with all fields", () => {
    const cover = createCover({
      color: "#5E70F8",
      width: 600,
      height: 400,
      background: { angle: 135, stops: [{ mix: 15 }, { mix: 6 }, { mix: 12 }] },
      elements: [
        {
          type: "grid",
          cols: 2,
          rows: 2,
          inset: 12,
          cellRadius: 12,
          labels: ["Subjective", "Objective", "Assessment", "Plan"],
          cellLines: [
            [80, 65, 45],
            [70, 85, 55],
            [90, 60],
            [75, 85, 70],
          ],
          hover: { scale: 1.05, opacity: 0.8 },
        },
        {
          type: "circle",
          x: "calc(100% - 72px)",
          y: "calc(100% - 72px)",
          size: 56,
          mix: 15,
          hover: { scale: 1.3, opacity: 0.9 },
        },
      ],
      blicks: [
        {
          shape: "diamond",
          x: "94%",
          y: "6%",
          w: 12,
          mix: 40,
          hover: { scale: 1.5, rotate: 90, opacity: 0.55 },
        },
        {
          shape: "rect",
          x: "6%",
          y: "92%",
          w: 8,
          h: 20,
          mix: 35,
          hover: { translateY: -8, opacity: 0.45 },
        },
        {
          shape: "circle",
          x: "5%",
          y: "45%",
          w: 6,
          mix: 50,
          hover: { scale: 2.5, opacity: 0.6 },
        },
      ],
      decorativeCircle: {
        x: "calc(100% - 72px)",
        y: "calc(100% - 72px)",
        size: 56,
        mix: 15,
        hover: { scale: 1.3, opacity: 0.9 },
      },
    });

    expect(cover.html).toContain("data-cover=");
    expect(cover.html).toContain("<style>");
    expect(cover.style.background).toContain("linear-gradient");
    expect(cover.innerHtml).toContain("el-0");
    expect(cover.innerHtml).toContain("el-1");
    expect(cover.innerHtml).toContain("blick-0");
    expect(cover.innerHtml).toContain("deco-circle");
    expect(cover.hoverCss).toContain(":hover");
    expect(cover.coverId).toBeTruthy();
  });

  it("works with minimal schema", () => {
    const cover = createCover({ color: "#ff0000" });
    expect(cover.html).toContain("data-cover=");
    expect(cover.style.background).toContain("linear-gradient");
    expect(cover.innerHtml).toBe("");
  });
});

describe("re-exports", () => {
  it("exports color utilities", () => {
    expect(hexToRgb("#ff0000")).toEqual([255, 0, 0]);
    expect(rgbToHex([255, 0, 0])).toBe("#ff0000");
    expect(colorMix([255, 0, 0], 50)).toBe("rgba(255,0,0,0.5)");
    expect(buildPalette("#ff0000").rgb).toEqual([255, 0, 0]);
  });
});
