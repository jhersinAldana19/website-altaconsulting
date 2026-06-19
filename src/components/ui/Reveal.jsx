import { useInViewOnce } from '../../hooks/useInViewOnce'

const motionFadeUp =
  'motion-safe:transition-[opacity,transform] motion-safe:duration-[550ms] motion-safe:ease-out'
const motionFade = 'motion-safe:transition-opacity motion-safe:duration-[550ms] motion-safe:ease-out'

function Reveal({ as: Component = 'div', children, className = '', delayMs = 0, variant = 'fade-up' }) {
  const [ref, visible] = useInViewOnce()
  const isFade = variant === 'fade'
  const motionClass = isFade ? motionFade : motionFadeUp
  const stateClass = visible
    ? isFade
      ? 'opacity-100'
      : 'translate-y-0 opacity-100'
    : isFade
      ? 'opacity-0 motion-reduce:opacity-100'
      : 'translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'

  return (
    <Component
      ref={ref}
      className={`${motionClass} ${stateClass} ${className}`.trim()}
      style={
        visible && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined
      }
    >
      {children}
    </Component>
  )
}

export default Reveal
