'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { phoneShape, resample, sardiniaShape } from '@/lib/sardinia'

const N = 220 // points per outline
const LAYERS = 18 // extrusion depth slices
const RIBS = 22 // front-to-back connectors
const DEPTH = 0.9
const ACCENT = new THREE.Color('#2ef2c8')
const BG = new THREE.Color('#0b0f14')

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

/**
 * Extruded wireframe of Sardinia that morphs into a phone outline while the
 * hero scrolls out (island → online). Single LineSegments draw call + points.
 */
export default function HeroScene({ onReady }: { onReady?: () => void }) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
    } catch {
      return // no WebGL: SVG fallback stays visible
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    host.appendChild(renderer.domElement)
    renderer.domElement.style.display = 'block'

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50)
    camera.position.set(0, 0, 5.6)

    const from = resample(sardiniaShape(), N)
    const to = resample(phoneShape(), N)

    // outline layers + ribs
    const lineVerts = LAYERS * N * 2 + RIBS * 2
    const linePos = new Float32Array(lineVerts * 3)
    const lineCol = new Float32Array(lineVerts * 3)
    const c = new THREE.Color()
    for (let l = 0; l < LAYERS; l++) {
      const f = l / (LAYERS - 1)
      c.copy(ACCENT).lerp(BG, Math.pow(f, 0.7) * 0.92)
      for (let v = 0; v < N * 2; v++) {
        const o = (l * N * 2 + v) * 3
        lineCol[o] = c.r
        lineCol[o + 1] = c.g
        lineCol[o + 2] = c.b
      }
    }
    for (let r = 0; r < RIBS * 2; r++) {
      const o = (LAYERS * N * 2 + r) * 3
      c.copy(ACCENT).lerp(BG, r % 2 ? 0.85 : 0.35)
      lineCol[o] = c.r
      lineCol[o + 1] = c.g
      lineCol[o + 2] = c.b
    }
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3))
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineCol, 3))
    const lines = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.95 })
    )

    const dotPos = new Float32Array(N * 3)
    const dotGeo = new THREE.BufferGeometry()
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3))
    const dots = new THREE.Points(
      dotGeo,
      new THREE.PointsMaterial({ color: ACCENT, size: 0.028, sizeAttenuation: true, transparent: true, opacity: 0.9 })
    )

    const group = new THREE.Group()
    group.add(lines, dots)
    scene.add(group)

    const layerPts: Float32Array[] = Array.from({ length: LAYERS }, () => new Float32Array(N * 2))

    let lastP = -1
    const build = (p: number) => {
      if (Math.abs(p - lastP) < 0.0005) return
      lastP = p
      for (let l = 0; l < LAYERS; l++) {
        // staggered wave: back layers follow the front ones
        const lp = ease(clamp01(p * 1.5 - (l / LAYERS) * 0.5))
        const arr = layerPts[l]
        for (let i = 0; i < N; i++) {
          arr[i * 2] = from[i][0] + (to[i][0] - from[i][0]) * lp
          arr[i * 2 + 1] = from[i][1] + (to[i][1] - from[i][1]) * lp
        }
      }
      let o = 0
      for (let l = 0; l < LAYERS; l++) {
        const z = -(l / (LAYERS - 1)) * DEPTH
        const arr = layerPts[l]
        for (let i = 0; i < N; i++) {
          const j = (i + 1) % N
          linePos[o++] = arr[i * 2]
          linePos[o++] = arr[i * 2 + 1]
          linePos[o++] = z
          linePos[o++] = arr[j * 2]
          linePos[o++] = arr[j * 2 + 1]
          linePos[o++] = z
        }
      }
      const front = layerPts[0]
      const back = layerPts[LAYERS - 1]
      for (let r = 0; r < RIBS; r++) {
        const i = Math.floor((r / RIBS) * N)
        linePos[o++] = front[i * 2]
        linePos[o++] = front[i * 2 + 1]
        linePos[o++] = 0
        linePos[o++] = back[i * 2]
        linePos[o++] = back[i * 2 + 1]
        linePos[o++] = -DEPTH
      }
      for (let i = 0; i < N; i++) {
        dotPos[i * 3] = front[i * 2]
        dotPos[i * 3 + 1] = front[i * 2 + 1]
        dotPos[i * 3 + 2] = 0.002
      }
      lineGeo.attributes.position.needsUpdate = true
      dotGeo.attributes.position.needsUpdate = true
      lineGeo.computeBoundingSphere()
    }

    const resize = () => {
      const w = host.clientWidth
      const h = host.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      renderer.domElement.style.width = `${w}px`
      renderer.domElement.style.height = `${h}px`
      camera.aspect = w / h
      // keep the 2.4-unit shape fully framed on narrow aspect ratios
      camera.position.z = w / h < 0.75 ? 6.6 : 5.6
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(resize)
    ro.observe(host)
    resize()

    // scroll progress across the hero section
    const hero = document.getElementById('hero')
    let target = 0
    let current = 0
    const onScroll = () => {
      const h = hero ? hero.offsetHeight : window.innerHeight
      target = clamp01(window.scrollY / (h * 0.75))
    }
    onScroll()
    current = target
    window.addEventListener('scroll', onScroll, { passive: true })

    // pointer parallax
    let mx = 0
    let my = 0
    const onMove = (e: PointerEvent) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1
      my = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    let visible = true
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
    })
    io.observe(host)

    let raf = 0
    const t0 = performance.now()
    let rx = 0
    let ry = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visible || document.hidden) return
      const t = (performance.now() - t0) / 1000
      current += (target - current) * 0.08
      build(current)
      const tryY = -0.32 + Math.sin(t * 0.35) * 0.14 + mx * 0.16 + current * 0.42
      const tryX = 0.22 + Math.cos(t * 0.3) * 0.05 + my * 0.08 - current * 0.12
      ry += (tryY - ry) * 0.06
      rx += (tryX - rx) * 0.06
      group.rotation.set(rx, ry, -0.04 + current * 0.04)
      group.position.y = Math.sin(t * 0.6) * 0.04
      renderer.render(scene, camera)
    }
    build(current)
    tick()
    onReady?.()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onMove)
      ro.disconnect()
      io.disconnect()
      lineGeo.dispose()
      dotGeo.dispose()
      ;(lines.material as THREE.Material).dispose()
      ;(dots.material as THREE.Material).dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [onReady])

  return <div ref={hostRef} className="absolute inset-0" aria-hidden="true" />
}
