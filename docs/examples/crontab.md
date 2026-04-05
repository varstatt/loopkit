# Crontab

> **Live demo:** [varstatt.com/toolkit](https://varstatt.com/toolkit)

Five crontab field boxes with text content representing a cron expression editor.

## Schema

```js
export const crontab = {
  width: 280, height: 280, background: '#ccfbf1',
  stagger: 0.3, trigger: 'autoplay', hold: 2,
  elements: [
    // Field boxes with labels
    { type: 'rect', style: { x: 20, y: 100, width: 40, height: 40, fill: '#f0fdfa', stroke: '#14b8a6', strokeWidth: 2, rx: 6 }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: '*', style: { x: 40, y: 126, fontSize: 16, fontWeight: 'bold', color: '#0f766e', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 0, duration: 0.4, easing: 'ease-out' } },

    { type: 'rect', style: { x: 68, y: 100, width: 40, height: 40, fill: '#f0fdfa', stroke: '#14b8a6', strokeWidth: 2, rx: 6 }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: '/5', style: { x: 88, y: 126, fontSize: 14, fontWeight: 'bold', color: '#0f766e', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 1, duration: 0.4, easing: 'ease-out' } },

    { type: 'rect', style: { x: 116, y: 100, width: 40, height: 40, fill: '#f0fdfa', stroke: '#14b8a6', strokeWidth: 2, rx: 6 }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: '*', style: { x: 136, y: 126, fontSize: 16, fontWeight: 'bold', color: '#0f766e', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 2, duration: 0.4, easing: 'ease-out' } },

    { type: 'rect', style: { x: 164, y: 100, width: 40, height: 40, fill: '#f0fdfa', stroke: '#14b8a6', strokeWidth: 2, rx: 6 }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: '*', style: { x: 184, y: 126, fontSize: 16, fontWeight: 'bold', color: '#0f766e', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 3, duration: 0.4, easing: 'ease-out' } },

    { type: 'rect', style: { x: 212, y: 100, width: 48, height: 40, fill: '#f0fdfa', stroke: '#14b8a6', strokeWidth: 2, rx: 6 }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },
    { type: 'text', content: '1-5', style: { x: 236, y: 126, fontSize: 13, fontWeight: 'bold', color: '#0f766e', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 4, duration: 0.4, easing: 'ease-out' } },

    // Field labels below
    { type: 'text', content: 'min', style: { x: 40, y: 156, fontSize: 8, color: '#5eead4', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'text', content: 'hour', style: { x: 88, y: 156, fontSize: 8, color: '#5eead4', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'text', content: 'dom', style: { x: 136, y: 156, fontSize: 8, color: '#5eead4', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'text', content: 'mon', style: { x: 184, y: 156, fontSize: 8, color: '#5eead4', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },
    { type: 'text', content: 'dow', style: { x: 236, y: 156, fontSize: 8, color: '#5eead4', textAnchor: 'middle' }, animate: { opacity: [0, 1], sequence: 5, duration: 0.3, easing: 'ease-out' } },

    // Decorative circles
    { type: 'circle', style: { cx: 48, cy: 226, r: 20, fill: '#5eead4', opacity: 0.35 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.35], sequence: 6, duration: 0.6, easing: 'ease-out' } },
    { type: 'circle', style: { cx: 240, cy: 52, r: 16, fill: '#99f6e4', opacity: 0.3 }, animate: { scale: [0.3, 1], opacity: [0.1, 0.3], sequence: 6, duration: 0.6, easing: 'ease-out' } },
  ],
};
```

## Design decisions

- Five field boxes reveal left to right, matching the natural reading order of a cron expression (min, hour, dom, mon, dow).
- Each box uses text content (`*`, `/5`, `1-5`) to show a realistic schedule: every 5 minutes on weekdays.
- Field labels fade in together at the end (sequence 5) as a finishing touch.
- Teal/cyan palette (`#ccfbf1` / `#14b8a6` / `#0f766e`) conveys a clean, terminal-inspired aesthetic.
