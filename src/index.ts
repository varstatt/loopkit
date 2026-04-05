import { createElement } from "./elements";
import { createEngine } from "./engine";
import { createSvgRoot, mount } from "./renderer";
import { computeCycle } from "./timeline";
import type {
  AnimationInstance,
  AnimationSchema,
  ResolvedElement,
} from "./types";

export { lerpColor, parseHex, rgbToHex } from "./color";
export { renderToString } from "./render-string";
// Type re-exports
export type {
  AnimateConfig,
  AnimationInstance,
  AnimationSchema,
  BadgeElement,
  CircleElement,
  EasingName,
  RectElement,
  SchemaElement,
  TextElement,
  TriggerMode,
} from "./types";

/**
 * Create an animated SVG and mount it into the container.
 * Returns playback controls.
 */
export function createAnimation(
  container: HTMLElement,
  schema: AnimationSchema,
): AnimationInstance {
  const svg = createSvgRoot(schema.width, schema.height, schema.background);
  const resolved: ResolvedElement[] = [];

  for (const el of schema.elements) {
    const { node, resolved: res } = createElement(el, schema.stagger);
    svg.appendChild(node);
    if (res) {
      resolved.push(res);
    }
  }

  mount(container, svg);

  const cycle = computeCycle(schema);
  const trigger = schema.trigger ?? "autoplay";

  const engine = createEngine(
    svg,
    resolved,
    cycle.animDuration,
    cycle.hold,
    cycle.fadeOut,
    { loop: true },
  );

  // Apply final frame immediately (no blank flash)
  engine.reset();

  // Attach trigger
  let cleanup: (() => void) | null = null;

  if (trigger === "hover") {
    const onEnter = () => engine.play();
    const onLeave = () => engine.settle();
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    cleanup = () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  } else {
    // Autoplay: start immediately
    engine.play();
  }

  // Wrap destroy to include cleanup
  const originalDestroy = engine.destroy.bind(engine);
  const instance: AnimationInstance = {
    get state() {
      return engine.state;
    },
    play: engine.play.bind(engine),
    pause: engine.pause.bind(engine),
    reset: engine.reset.bind(engine),
    settle: engine.settle.bind(engine),
    destroy() {
      cleanup?.();
      originalDestroy();
    },
  };

  return instance;
}
