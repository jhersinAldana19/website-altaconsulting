import { useEffect, useState } from 'react'

/**
 * Solo montar vídeo autoplay cuando aporta (desktop, sin prefers-reduced-motion)
 * para no descargar MP4 pesados en móvil.
 */
export function useDesktopAutoplayVideo() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const widthQuery = window.matchMedia('(min-width: 1024px)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setEnabled(widthQuery.matches && !motionQuery.matches)
    }

    update()

    widthQuery.addEventListener('change', update)
    motionQuery.addEventListener('change', update)

    return () => {
      widthQuery.removeEventListener('change', update)
      motionQuery.removeEventListener('change', update)
    }
  }, [])

  return enabled
}
