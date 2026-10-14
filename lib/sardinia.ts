/**
 * Simplified Sardinia coastline (lon, lat), clockwise from Santa Teresa Gallura.
 * Used by the hero wireframe (Three.js) and its static SVG fallback.
 */
const COAST: [number, number][] = [
  [9.19, 41.24], [9.38, 41.19], [9.52, 41.14], [9.62, 41.0], [9.57, 40.92],
  [9.73, 40.84], [9.69, 40.72], [9.75, 40.58], [9.73, 40.38], [9.63, 40.28],
  [9.62, 40.12], [9.71, 39.94], [9.67, 39.82], [9.66, 39.55], [9.63, 39.3],
  [9.56, 39.14], [9.43, 39.13], [9.3, 39.2], [9.11, 39.2], [9.02, 39.08],
  [8.98, 38.98], [8.85, 38.87], [8.65, 38.87], [8.56, 38.96], [8.4, 38.98],
  [8.37, 39.08], [8.43, 39.2], [8.41, 39.38], [8.43, 39.5], [8.45, 39.73],
  [8.56, 39.86], [8.42, 39.92], [8.38, 40.04], [8.47, 40.18], [8.48, 40.3],
  [8.35, 40.45], [8.31, 40.56], [8.16, 40.57], [8.14, 40.74], [8.21, 40.97],
  [8.3, 40.88], [8.4, 40.84], [8.55, 40.86], [8.71, 40.91], [8.87, 41.01],
  [9.05, 41.06], [9.12, 41.16],
]

export type Pt = [number, number]

/** Island centred on origin, height ≈ 2.4 units. */
export function sardiniaShape(): Pt[] {
  const k = Math.cos((40 * Math.PI) / 180)
  const pts = COAST.map(([lon, lat]) => [(lon - 8.95) * k, lat - 40.06] as Pt)
  const s = 2.4 / 2.37
  return pts.map(([x, y]) => [x * s, y * s])
}

/** Portrait rounded-rect "phone" outline, clockwise from top centre. */
export function phoneShape(w = 1.3, h = 2.4, r = 0.22): Pt[] {
  const pts: Pt[] = []
  const hw = w / 2
  const hh = h / 2
  const arc = (cx: number, cy: number, a0: number) => {
    for (let i = 0; i <= 8; i++) {
      const a = a0 - (i / 8) * (Math.PI / 2)
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r])
    }
  }
  pts.push([0, hh])
  arc(hw - r, hh - r, Math.PI / 2)
  arc(hw - r, -hh + r, 0)
  arc(-hw + r, -hh + r, -Math.PI / 2)
  arc(-hw + r, hh - r, Math.PI)
  return pts
}

/** Resample a closed polyline to n points evenly spaced by arc length. */
export function resample(poly: Pt[], n: number): Pt[] {
  const seg: number[] = []
  let total = 0
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i]
    const b = poly[(i + 1) % poly.length]
    const d = Math.hypot(b[0] - a[0], b[1] - a[1])
    seg.push(d)
    total += d
  }
  const out: Pt[] = []
  let idx = 0
  let acc = 0
  for (let k = 0; k < n; k++) {
    const target = (k / n) * total
    while (acc + seg[idx] < target) {
      acc += seg[idx]
      idx = (idx + 1) % poly.length
    }
    const t = seg[idx] ? (target - acc) / seg[idx] : 0
    const a = poly[idx]
    const b = poly[(idx + 1) % poly.length]
    out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t])
  }
  return out
}

/** SVG path for the island in a viewBox of `size` (y flipped). */
export function sardiniaPath(size = 100, pad = 8): string {
  const pts = sardiniaShape()
  const scale = (size - pad * 2) / 2.4
  return (
    pts
      .map(([x, y], i) => `${i ? 'L' : 'M'}${(size / 2 + x * scale).toFixed(2)} ${(size / 2 - y * scale).toFixed(2)}`)
      .join(' ') + 'Z'
  )
}
