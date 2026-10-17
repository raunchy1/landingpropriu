'use client'

import { useEffect } from 'react'

/** Marks the document so shared UI (cookie banner) follows the light homepage. */
export default function HomeTone() {
  useEffect(() => {
    document.documentElement.classList.add('ws-tone')
    return () => document.documentElement.classList.remove('ws-tone')
  }, [])
  return null
}
