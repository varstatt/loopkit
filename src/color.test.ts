import { buildPalette, colorMix, hexToRgb, rgbToHex } from "./color";

describe("hexToRgb", () => {
  it("converts 6-digit hex", () => {
    expect(hexToRgb("#ff1493")).toEqual([255, 20, 147]);
  });

  it("converts 3-digit hex", () => {
    expect(hexToRgb("#f00")).toEqual([255, 0, 0]);
  });

  it("handles without hash", () => {
    expect(hexToRgb("5E70F8")).toEqual([94, 112, 248]);
  });
});

describe("rgbToHex", () => {
  it("converts rgb to hex", () => {
    expect(rgbToHex([255, 20, 147])).toBe("#ff1493");
  });

  it("pads single digit values", () => {
    expect(rgbToHex([0, 0, 0])).toBe("#000000");
  });
});

describe("colorMix", () => {
  it("transparent target returns rgba", () => {
    expect(colorMix([255, 0, 0], 50, "transparent")).toBe("rgba(255,0,0,0.5)");
  });

  it("white target blends toward white", () => {
    // 50% of 0 + 50% of 255 = 128 (rounded)
    expect(colorMix([0, 0, 0], 50, "white")).toBe("rgb(128,128,128)");
  });

  it("white target at 100% returns the color", () => {
    expect(colorMix([255, 0, 0], 100, "white")).toBe("rgb(255,0,0)");
  });

  it("white target at 0% returns white", () => {
    expect(colorMix([255, 0, 0], 0, "white")).toBe("rgb(255,255,255)");
  });

  it("black target blends toward black", () => {
    expect(colorMix([255, 255, 255], 50, "black")).toBe("rgb(128,128,128)");
  });

  it("defaults to transparent", () => {
    expect(colorMix([100, 200, 50], 30)).toBe("rgba(100,200,50,0.3)");
  });
});

describe("buildPalette", () => {
  it("returns rgb and helper functions", () => {
    const p = buildPalette("#ff0000");
    expect(p.rgb).toEqual([255, 0, 0]);
    expect(p.transparent(50)).toBe("rgba(255,0,0,0.5)");
    expect(p.white(0)).toBe("rgb(255,255,255)");
  });
});
