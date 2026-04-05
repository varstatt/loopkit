import type { ResolvedElement, SchemaElement } from "../types";
import { createBadgeElement } from "./badge";
import { createCircleElement } from "./circle";
import { createRectElement } from "./rect";
import { createTextElement } from "./text";

export function createElement(
  el: SchemaElement,
  stagger: number,
): { node: SVGElement; resolved: ResolvedElement | null } {
  switch (el.type) {
    case "text":
      return createTextElement(el, stagger);
    case "rect":
      return createRectElement(el, stagger);
    case "circle":
      return createCircleElement(el, stagger);
    case "badge":
      return createBadgeElement(el, stagger);
  }
}
