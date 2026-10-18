'use client'

import { useEffect } from 'react'
import { useMotion } from '@/lib/motion'

/**
 * Wires all scroll motion for the home page from data attributes, so sections
 * can stay server components:
 *   [data-split]   → headline revealed line by line (SplitText, masked)
 *   [data-reveal]  → direct children fade/slide in with stagger
 *   [data-process] → pinned step scene (ScrollTrigger pin + scrub)
 * Everything is reverted when motion is switched to "reduced".
 */
export default function HomeMotion({ rootId }: { rootId: string }) {
  const mode = useMotion()

  useEffect(() => {
    const root = document.getElementById(rootId)
    if (!root || mode !== 'on') return

    let cancelled = false
    let revert: (() => void) | undefined

    // animated icons draw in when they enter the viewport
    const icons = root.querySelectorAll<SVGElement>('[data-icon]')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }),
      { rootMargin: '0px 0px -8% 0px' }
    )
    icons.forEach((el) => io.observe(el))

    // glass cards: border + spotlight follow the cursor
    const onMove = (ev: PointerEvent) => {
      const card = (ev.target as Element | null)?.closest<HTMLElement>('.gcard')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${ev.clientX - r.left}px`)
      card.style.setProperty('--my', `${ev.clientY - r.top}px`)
    }
    root.addEventListener('pointermove', onMove, { passive: true })
    const stopExtras = () => {
      io.disconnect()
      root.removeEventListener('pointermove', onMove)
      icons.forEach((el) => el.classList.remove('is-in'))
    }

    ;(async () => {
      const { gsap, ScrollTrigger, SplitText } = await import('@/lib/gsap')
      if (document.fonts?.ready) await document.fonts.ready
      if (cancelled) return

      const ctx = gsap.context(() => {
        const cleanups: (() => void)[] = []

        gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
          gsap.set(el, { visibility: 'visible' })
          SplitText.create(el, {
            type: 'lines',
            mask: 'lines',
            linesClass: 'split-line',
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 115,
                duration: 1.15,
                ease: 'expo.out',
                stagger: 0.09,
                delay: el.closest('#hero') ? 0.15 : 0,
                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
              }),
          })
        })

        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((group) => {
          gsap.fromTo(
            group.children,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              stagger: 0.09,
              delay: group.closest('#hero') ? 0.45 : 0,
              scrollTrigger: { trigger: group, start: 'top 88%', once: true },
            }
          )
        })

        gsap.utils.toArray<HTMLElement>('[data-process]').forEach((stage) => {
          const steps = gsap.utils.toArray<HTMLElement>('[data-step]', stage)
          const dots = gsap.utils.toArray<HTMLElement>('[data-step-dot]', stage)
          const bar = stage.querySelector<HTMLElement>('[data-step-bar]')
          if (steps.length < 2) return
          stage.classList.add('is-pinned')

          gsap.set(steps, { autoAlpha: 0, yPercent: 18 })
          gsap.set(steps[0], { autoAlpha: 1, yPercent: 0 })
          let active = -1
          const setActive = (i: number) => {
            if (i === active) return
            active = i
            dots.forEach((d, k) => d.toggleAttribute('data-active', k <= i))
            // replay the step's icon as it comes into focus
            steps[i]?.querySelectorAll('[data-icon]').forEach((el) => {
              el.classList.remove('is-in')
              void (el as SVGElement).getBoundingClientRect()
              el.classList.add('is-in')
            })
          }
          setActive(0)

          const tl = gsap.timeline({
            defaults: { ease: 'power2.inOut', duration: 0.5 },
            scrollTrigger: {
              trigger: stage,
              start: 'top top',
              end: () => `+=${window.innerHeight * 0.85 * (steps.length - 1)}`,
              pin: true,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => setActive(Math.min(steps.length - 1, Math.floor(self.progress * steps.length * 0.999))),
            },
          })
          if (bar) tl.fromTo(bar, { scaleX: 1 / steps.length }, { scaleX: 1, ease: 'none', duration: steps.length - 1 }, 0)
          steps.forEach((s, i) => {
            if (!i) return
            tl.to(steps[i - 1], { autoAlpha: 0, yPercent: -18 }, i - 0.5)
            tl.fromTo(s, { autoAlpha: 0, yPercent: 18 }, { autoAlpha: 1, yPercent: 0 }, i - 0.5)
          })
          tl.to({}, { duration: 0.3 }) // short hold on the last step

          cleanups.push(() => {
            stage.classList.remove('is-pinned')
            dots.forEach((d) => d.removeAttribute('data-active'))
          })
        })

        return () => cleanups.forEach((fn) => fn())
      }, root)

      root.classList.add('motion-ready')
      ScrollTrigger.refresh()
      revert = () => {
        ctx.revert()
        root.classList.remove('motion-ready')
      }
    })()

    return () => {
      cancelled = true
      stopExtras()
      revert?.()
    }
  }, [mode, rootId])

  return null
}
