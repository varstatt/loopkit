import { isColorValue, lerpColor, lerpRgb, parseHex, rgbToHex } from "./color";

describe("parseHex", () => {
  it("parses 6-digit hex", () => {
    expect(parseHex("#ff0000")).toEqual([255, 0, 0]);
  });

  it("parses 3-digit hex", () => {
    expect(parseHex("#f00")).toEqual([255, 0, 0]);
  });

  it("handles no hash prefix", () => {
    expect(parseHex("00ff00")).toEqual([0, 255, 0]);
  });

  it("returns white for invalid input", () => {
    expect(parseHex("")).toEqual([255, 255, 255]);
  });
});

describe("rgbToHex", () => {
  it("converts RGB to hex", () => {
    expect(rgbToHex([255, 0, 128])).toBe("#ff0080");
  });
});

describe("lerpRgb", () => {
  it("returns start at t=0", () => {
    expect(lerpRgb([0, 0, 0], [255, 255, 255], 0)).toEqual([0, 0, 0]);
  });

  it("returns end at t=1", () => {
    expect(lerpRgb([0, 0, 0], [255, 255, 255], 1)).toEqual([255, 255, 255]);
  });

  it("interpolates midpoint", () => {
    const result = lerpRgb([0, 0, 0], [100, 200, 50], 0.5);
    expect(result[0]).toBeCloseTo(50);
    expect(result[1]).toBeCloseTo(100);
    expect(result[2]).toBeCloseTo(25);
  });
});

describe("lerpColor", () => {
  it("interpolates between hex colors", () => {
    const mid = lerpColor("#000000", "#ffffff", 0.5);
    expect(mid).toBe("rgb(128,128,128)");
  });
});

describe("isColorValue", () => {
  it("detects hex strings", () => {
    expect(isColorValue("#ff0000")).toBe(true);
  });

  it("rejects numbers", () => {
    expect(isColorValue(42)).toBe(false);
  });

  it("rejects non-hex strings", () => {
    expect(isColorValue("hello")).toBe(false);
  });
});
