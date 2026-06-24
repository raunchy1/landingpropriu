'use client'

import { useEffect } from 'react'
import { trackLandingPageView } from '@/lib/trackEvents'

export default function LandingPageTracker() {
  useEffect(() => {
    trackLandingPageView()
  }, [])
  return null
}