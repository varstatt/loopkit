const SVG_NS = "http://www.w3.org/2000/svg";

export function svgEl<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs?: Record<string, string | number>,
): SVGElementTagNameMap[K] {
  const el = document.createElementNS(SVG_NS, tag);
  if (attrs) setAttrs(el, attrs);
  return el;
}

export function setAttrs(
  el: SVGElement,
  attrs: Record<string, string | number>,
): void {
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, String(v));
  }
}

export function createSvgRoot(
  width: number,
  height: number,
  background?: string,
): SVGSVGElement {
  const svg = svgEl("svg", {
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: "xMidYMid slice",
    xmlns: SVG_NS,
  });
  svg.style.display = "block";
  svg.style.width = "100%";
  svg.style.height = "100%";

  if (background) {
    const bg = svgEl("rect", {
      x: 0,
      y: 0,
      width,
      height,
      fill: background,
    });
    svg.appendChild(bg);
  }

  return svg;
}

export function mount(container: HTMLElement, svg: SVGSVGElement): void {
  container.appendChild(svg);
}
