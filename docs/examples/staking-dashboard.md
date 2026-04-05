# Staking Dashboard

> **Live demo:** [varstatt.com](https://varstatt.com)

A crypto staking dashboard with a chart placeholder at the top, 7 bar columns growing upward from a baseline, and 4 floating coin circles that scale up.

## Schema

```js
export const stakingDashboard = {
  width: 460, height: 280, background: '#0f172a',
  stagger: 0.12, trigger: 'hover', hold: 2.5,
  elements: [
    // Chart area background
    { type: 'rect', style: { x: 24, y: 16, width: 412, height: 100, fill: '#1e293b', rx: 8 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    // Chart line (simplified as a horizontal band representing a trend)
    { type: 'rect', style: { x: 40, y: 52, width: 380, height: 3, fill: '#22d3ee', rx: 1 }, animate: { width: [0, 380], sequence: 1, duration: 0.7, easing: 'ease-out' } },

    // Chart area glow under the line
    { type: 'rect', style: { x: 40, y: 55, width: 380, height: 48, fill: '#22d3ee', rx: 0, opacity: 0.08 }, animate: { width: [0, 380], opacity: [0, 0.08], sequence: 1, duration: 0.7, easing: 'ease-out' } },

    // Small chart label
    { type: 'text', content: 'APY 12.4%', style: { x: 344, y: 46, fontSize: 10, fontWeight: 'bold', color: '#22d3ee' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.3, easing: 'ease-out' } },

    // Bar chart baseline
    { type: 'rect', style: { x: 32, y: 244, width: 396, height: 1, fill: '#334155' }, animate: { width: [0, 396], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    // 7 bar columns (grow upward from baseline at y:244)
    // Heights vary: 60, 85, 45, 100, 72, 55, 90
    { type: 'rect', style: { x: 44, y: 184, width: 36, height: 60, fill: '#6366f1', rx: 4 }, animate: { height: [0, 60], y: [244, 184], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 98, y: 159, width: 36, height: 85, fill: '#818cf8', rx: 4 }, animate: { height: [0, 85], y: [244, 159], sequence: 5, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 152, y: 199, width: 36, height: 45, fill: '#6366f1', rx: 4 }, animate: { height: [0, 45], y: [244, 199], sequence: 6, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 206, y: 144, width: 36, height: 100, fill: '#a78bfa', rx: 4 }, animate: { height: [0, 100], y: [244, 144], sequence: 7, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 260, y: 172, width: 36, height: 72, fill: '#818cf8', rx: 4 }, animate: { height: [0, 72], y: [244, 172], sequence: 8, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 314, y: 189, width: 36, height: 55, fill: '#6366f1', rx: 4 }, animate: { height: [0, 55], y: [244, 189], sequence: 9, duration: 0.4, easing: 'ease-out' } },
    { type: 'rect', style: { x: 368, y: 154, width: 36, height: 90, fill: '#a78bfa', rx: 4 }, animate: { height: [0, 90], y: [244, 154], sequence: 10, duration: 0.4, easing: 'ease-out' } },

    // Day labels under bars
    { type: 'text', content: 'M', style: { x: 56, y: 258, fontSize: 8, color: '#64748b' }, animate: { opacity: [0, 1], sequence: 4, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'T', style: { x: 112, y: 258, fontSize: 8, color: '#64748b' }, animate: { opacity: [0, 1], sequence: 5, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'W', style: { x: 164, y: 258, fontSize: 8, color: '#64748b' }, animate: { opacity: [0, 1], sequence: 6, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'T', style: { x: 219, y: 258, fontSize: 8, color: '#64748b' }, animate: { opacity: [0, 1], sequence: 7, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'F', style: { x: 274, y: 258, fontSize: 8, color: '#64748b' }, animate: { opacity: [0, 1], sequence: 8, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'S', style: { x: 328, y: 258, fontSize: 8, color: '#64748b' }, animate: { opacity: [0, 1], sequence: 9, duration: 0.2, easing: 'ease-out' } },
    { type: 'text', content: 'S', style: { x: 382, y: 258, fontSize: 8, color: '#64748b' }, animate: { opacity: [0, 1], sequence: 10, duration: 0.2, easing: 'ease-out' } },

    // Floating coin circles
    { type: 'circle', style: { cx: 440, cy: 36, r: 14, fill: '#fbbf24', opacity: 0.9 }, animate: { scale: [0, 1], opacity: [0, 0.9], sequence: 11, duration: 0.35, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 440, cy: 72, r: 10, fill: '#f97316', opacity: 0.7 }, animate: { scale: [0, 1], opacity: [0, 0.7], sequence: 12, duration: 0.35, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 440, cy: 172, r: 12, fill: '#fbbf24', opacity: 0.8 }, animate: { scale: [0, 1], opacity: [0, 0.8], sequence: 13, duration: 0.35, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 440, cy: 220, r: 8, fill: '#f97316', opacity: 0.6 }, animate: { scale: [0, 1], opacity: [0, 0.6], sequence: 14, duration: 0.35, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- **Dark background** (`#0f172a` -- slate-900) gives the crypto/fintech dashboard look. All element colors are chosen for contrast against the dark canvas.
- The animation flows top-to-bottom: chart area appears first (sequences 0--2), then the bar chart baseline draws (sequence 3), bars grow upward one by one (sequences 4--10), and coin decorations pop in last (sequences 11--14).
- Bars animate both `height` and `y` simultaneously so they grow upward from the baseline rather than downward from their top edge. This is the key trick for bar-chart animations on an SVG-style canvas.
- Alternating indigo shades (`#6366f1`, `#818cf8`, `#a78bfa`) on the bars add visual rhythm without needing different hue families.
- The cyan chart line (`#22d3ee`) with a faint glow underneath creates a simple but effective "area chart" from just two rects.
- Coin circles use gold/orange tones at varying sizes and opacities to suggest floating cryptocurrency tokens without being too literal.
