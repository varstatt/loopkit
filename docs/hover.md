# Hover Animations

Hover effects are part of the HTML output only. They use raw CSS transitions — no JavaScript, no Tailwind.

## How it works

When any element, blick, or decorative circle has a `hover` property, the HTML output includes a `<style>` block with:

1. **Base transition** on each animatable element: `transition: all 0.7s ease-in-out`
2. **Hover rules** scoped to the cover's unique `data-cover` attribute

```html
<style>
[data-cover="cca-1"] .el-0{transition:all 0.7s ease-in-out}
[data-cover="cca-1"]:hover .el-0{transform:scale(1.05);opacity:0.8}
</style>
<div data-cover="cca-1" style="...">
  <div class="el-0" style="...">...</div>
</div>
```

The `:hover` is on the container — hovering anywhere on the cover triggers all animations simultaneously.

## Available properties

```ts
hover?: {
  scale?: number;       // e.g., 1.05, 1.3, 2.5
  translateX?: number;  // px, e.g., -12, 10
  translateY?: number;  // px, e.g., -8, 14
  rotate?: number;      // degrees, e.g., 90, 180
  opacity?: number;     // 0-1, e.g., 0.8, 0.55
  delay?: number;       // ms, e.g., 80, 200
}
```

All properties are optional. Only specified properties generate CSS rules.

## Stagger patterns

Use `delay` to stagger animations across elements:

```ts
elements: [
  { type: "rect", hover: { scale: 1.05, delay: 0 } },
  { type: "rect", hover: { scale: 1.05, delay: 80 } },
  { type: "rect", hover: { scale: 1.05, delay: 160 } },
  { type: "rect", hover: { scale: 1.05, delay: 240 } },
]
```

Common stagger intervals: 60-100ms between elements.

## Using hover CSS in React

The `hoverCss` field gives you the raw CSS string. You can inject it however you prefer:

```tsx
function Cover({ schema }) {
  const cover = createCover(schema);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cover.hoverCss }} />
      <div
        data-cover={cover.coverId}
        style={cover.style}
        dangerouslySetInnerHTML={{ __html: cover.innerHtml }}
      />
    </>
  );
}
```

Or use the `html` field directly if you're rendering to a string (SSR, email, etc.):

```ts
const cover = createCover(schema);
res.send(cover.html);
```

## Common hover patterns

### Scale up on hover
```ts
hover: { scale: 1.05, opacity: 0.8 }
```

### Float up
```ts
hover: { translateY: -8 }
```

### Spin accent
```ts
hover: { rotate: 90, scale: 1.5, opacity: 0.55 }
```

### Fade in
```ts
hover: { opacity: 0.9, delay: 200 }
```

### Slide sideways
```ts
hover: { translateX: 10, scale: 1.05 }
```
