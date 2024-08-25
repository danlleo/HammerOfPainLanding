'use client'

import { useEffect } from 'react'

export default function ScrollHandler() {
  useEffect(() => {
    let isScrolling = false

    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0 && !isScrolling) {
        isScrolling = true
        const contentSection = document.getElementById('content')

        if (contentSection) {
          contentSection.scrollIntoView({ behavior: 'smooth' })
        }

        setTimeout(() => {
          isScrolling = false
        }, 1000)
      }
    }

    window.addEventListener('wheel', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  return null
}
