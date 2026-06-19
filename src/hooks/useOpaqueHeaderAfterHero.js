import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * When the hero (#inicio) is visible under the sticky header area, the bar stays visually “open”.
 * Once the user scrolls past that region, returns true so the header can use a solid surface (e.g. white).
 */
export function useOpaqueHeaderAfterHero(heroSectionId = 'inicio', forceDetectPaths = []) {
  const { pathname } = useLocation()
  const [opaque, setOpaque] = useState(() => {
    // Default: non-root paths are opaque. But if caller passes forceDetectPaths
    // and current pathname is in that list, we enable hero-based detection.
    if (pathname !== '/' && !forceDetectPaths.includes(pathname)) return true
    return pathname !== '/'
  })

  useEffect(() => {
    if (pathname !== '/' && !forceDetectPaths.includes(pathname)) {
      setOpaque(true)
      return
    }

    const headerOffset = 64

    const updateOpaqueFromHero = () => {
      const heroElement = document.getElementById(heroSectionId)
      if (!heroElement) {
        setOpaque((previous) => {
          const next = window.scrollY > 24
          return previous === next ? previous : next
        })
        return
      }

      const { bottom } = heroElement.getBoundingClientRect()
      setOpaque((previous) => {
        const next = bottom <= headerOffset
        return previous === next ? previous : next
      })
    }

    updateOpaqueFromHero()

    let animationFrameId = null
    const handleScroll = () => {
      if (animationFrameId !== null) return
      animationFrameId = window.requestAnimationFrame(() => {
        updateOpaqueFromHero()
        animationFrameId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [pathname, heroSectionId])

  return opaque
}
