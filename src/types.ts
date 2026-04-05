export type EasingName = "linear" | "ease-in" | "ease-out" | "ease-in-out";
export type TriggerMode = "autoplay" | "hover";

// ── Schema types ──

export interface AnimationSchema {
  width: number;
  height: number;
  background?: string;
  /** Seconds between sequence steps. */
  stagger: number;
  /** Default: "autoplay". */
  trigger?: TriggerMode;
  /** Seconds to hold at final frame before restart. Default: 1.5. */
  hold?: number;
  elements: SchemaElement[];
}

export interface AnimateConfig {
  sequence: number;
  duration: number;
  easing?: EasingName;
  [key: string]: unknown;
}

export interface TextElement {
  type: "text";
  content: string;
  style: {
    x: number;
    y: number;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number | string;
    color?: string;
    opacity?: number;
    textAnchor?: "start" | "middle" | "end";
    letterSpacing?: number;
  };
  animate?: AnimateConfig;
}

export interface RectElement {
  type: "rect";
  style: {
    x: number;
    y: number;
    width: number;
    height: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    rx?: number;
    opacity?: number;
  };
  animate?: AnimateConfig;
}

export interface CircleElement {
  type: "circle";
  style: {
    cx: number;
    cy: number;
    r: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    opacity?: number;
  };
  animate?: AnimateConfig;
}

export interface BadgeElement {
  type: "badge";
  content: string;
  style: {
    x: number;
    y: number;
    r?: number;
    fontSize?: number;
    fontWeight?: number | string;
    color?: string;
    bg?: string;
    opacity?: number;
    /** If true, renders as a rounded-rect label instead of circle. */
    isLabel?: boolean;
  };
  animate?: AnimateConfig;
}

export type SchemaElement =
  | TextElement
  | RectElement
  | CircleElement
  | BadgeElement;

// ── Internal types ──

export type RGB = [number, number, number];

export interface AnimationTrack {
  property: string;
  from: number;
  to: number;
  isColor: boolean;
  fromColor?: string;
  toColor?: string;
}

export interface ResolvedElement {
  node: SVGElement;
  tracks: AnimationTrack[];
  delay: number;
  duration: number;
  easing: EasingName;
  /** Custom attribute setter for composite transforms (badge scale). */
  applyTransform?: (values: Record<string, number>) => void;
}

export interface AnimationInstance {
  play(): void;
  pause(): void;
  reset(): void;
  /** Smoothly animate from current position to the final frame. */
  settle(): void;
  destroy(): void;
  readonly state: "playing" | "paused" | "idle" | "settling" | "destroyed";
}
