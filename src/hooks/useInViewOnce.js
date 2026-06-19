import { useEffect, useRef, useState } from 'react'

const DEFAULT_MARGIN = '0px 0px -10% 0px'

/**
 * Dispara una sola vez cuando el nodo entra en vista (Observer se desconecta → bajo costo).
 */
export function useInViewOnce(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const { rootMargin = DEFAULT_MARGIN, threshold = 0 } = options

  useEffect(() => {
    const node = ref.current
    if (!node || isVisible) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { root: null, rootMargin, threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isVisible, rootMargin, threshold])

  return [ref, isVisible]
}
