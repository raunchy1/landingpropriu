'use client'

import { useEffect, useRef, useState } from 'react'
import { useMotion } from '@/lib/motion'

const base = '/portfolio/ecomunicare/schermo'

/**
 * A portfolio site in a browser frame. The recording (cropped to the laptop
 * screen) loads and plays only while the card is on screen; with reduced
 * motion the first frame is shown as a still.
 */
export default function SiteScreen({
  id,
  url,
  name,
  priority = false,
  live,
  className = '',
}: {
  id: string
  url: string
  name: string
  priority?: boolean
  /** small "live" badge text over the video */
  live?: string
  className?: string
}) {
  const motion = useMotion()
  const wrap = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = wrap.current
    const v = video.current
    if (!el || !v || motion !== 'on') {
      v?.pause()
      setPlaying(false)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLoad(true)
          if (v.readyState) v.play().catch(() => {})
        } else v.pause()
      },
      { rootMargin: '120px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [id, motion])

  // once the sources are attached, load and start playback
  useEffect(() => {
    const v = video.current
    if (!load || !v || motion !== 'on') return
    v.load()
    v.play().catch(() => {})
  }, [load, motion])

  const host = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

  return (
    <div ref={wrap} className={`r-browser ${className}`}>
      <div className="r-browser-bar" aria-hidden="true">
        <b />
        <b />
        <b />
        <span className="r-browser-url">{host}</span>
        <span className="w-[27px]" />
      </div>
      <div className="r-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${base}/${id}.jpg`} alt={name} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} />
        <video
          ref={video}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className={playing ? 'is-playing' : ''}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          {load && <source src={`${base}/${id}.webm`} type="video/webm" />}
          {load && <source src={`${base}/${id}.mp4`} type="video/mp4" />}
        </video>
        {live && (
          <span className="r-live">
            <i />
            {live}
          </span>
        )}
      </div>
    </div>
  )
}
