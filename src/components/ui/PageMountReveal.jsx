import { useEffect, useState } from 'react'

const motionFadeUp =
  'motion-safe:transition-[opacity,transform] motion-safe:duration-[550ms] motion-safe:ease-out'
const motionFade = 'motion-safe:transition-opacity motion-safe:duration-[550ms] motion-safe:ease-out'

/**
 * Entrada al cargar o recargar la ruta (no depende del scroll).
 * `variant="fade"` evita `transform` en el ancestro (útil si dentro hay `position: sticky`).
 */
function PageMountReveal({
  as: Component = 'div',
  children,
  className = '',
  delayMs = 0,
  variant = 'fade-up',
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let cancelled = false
    const show = () => {
      if (!cancelled) setVisible(true)
    }

    let handle
    if (delayMs <= 0) {
      handle = requestAnimationFrame(show)
    } else {
      handle = window.setTimeout(show, delayMs)
    }

    return () => {
      cancelled = true
      if (delayMs <= 0) cancelAnimationFrame(handle)
      else clearTimeout(handle)
    }
  }, [delayMs])

  const isFadeOnly = variant === 'fade'
  const motionClass = isFadeOnly ? motionFade : motionFadeUp
  const stateClass = visible
    ? isFadeOnly
      ? 'opacity-100'
      : 'translate-y-0 opacity-100'
    : isFadeOnly
      ? 'opacity-0 motion-reduce:opacity-100'
      : 'translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'

  return (
    <Component className={`${motionClass} ${stateClass} ${className}`.trim()}>{children}</Component>
  )
}

export default PageMountReveal
