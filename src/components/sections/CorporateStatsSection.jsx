import { useEffect, useRef, useState } from 'react'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import DecorativeBlock from '../ui/DecorativeBlock'

const CORPORATE_STATS = [
  {
    label: 'Líneas de outsourcing',
    value: '4',
    numericValue: 4,
    detail: 'Contable, Tributario, Nómina y Finanzas',
  },
  {
    label: 'Años de experiencia',
    value: '+10 años',
    detail: 'Experiencia consolidada en asesoría y consultoría empresarial',
  },
  {
    label: 'Enfoque de trabajo',
    value: '100%',
    numericValue: 100,
    suffix: '%',
    detail: 'Orientado a cumplimiento y control de gestión',
  },
  {
    label: 'Relación con clientes',
    value: 'Largo plazo',
    detail: 'Acompañamiento continuo y cercano',
  },
]

function CorporateStatsSection() {
  const sectionRef = useRef(null)
  const hasAnimatedRef = useRef(false)
  const [displayValues, setDisplayValues] = useState(() =>
    CORPORATE_STATS.map((item) => (typeof item.numericValue === 'number' ? 0 : item.value ?? '')),
  )

  useEffect(() => {
    const target = sectionRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return
        hasAnimatedRef.current = true

        const durationMs = 1400
        const startTime = performance.now()

        const tick = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / durationMs, 1)
          const easedProgress = 1 - (1 - progress) ** 3

          setDisplayValues(
            CORPORATE_STATS.map((item) => {
              if (typeof item.numericValue !== 'number') return item.value

              const currentValue = Math.round(item.numericValue * easedProgress)
              const suffix = item.suffix ?? ''
              return `${currentValue}${suffix}`
            }),
          )

          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-primary py-8 text-white sm:py-9 lg:py-10 relative overflow-hidden">
      {/* Decorative geometric blocks (subtle, reusable, non-interactive) */}
      <DecorativeBlock className="-top-6 -left-6 w-36 h-28 rounded-lg transform -rotate-6 hidden md:block" shade="18" />
      <DecorativeBlock className="-bottom-8 -right-10 w-56 h-32 rounded-2xl transform rotate-3 hidden lg:block" shade="16" />
      <DecorativeBlock className="top-6 right-6 w-20 h-10 rounded hidden md:block" shade="12" />
      <DecorativeBlock className="bottom-6 left-4 w-24 h-12 rounded-sm hidden md:block" shade="14" />

      <Container className="relative z-10">
        {/* Title removed per design: show only the stat cards */}

        <div className="grid grid-cols-1 gap-px bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {CORPORATE_STATS.map((item, index) => (
            <article key={item.label} className="bg-primary px-3 py-4 sm:px-4 sm:py-5 lg:px-5 lg:py-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent sm:text-xs sm:tracking-[0.12em]">
                {item.label}
              </p>
              <p className="mt-2 text-3xl font-normal leading-none text-white sm:text-4xl lg:text-[2.5rem] lg:leading-none">
                {displayValues[index]}
              </p>
              <p className="mt-2 max-w-[28ch] text-[13px] leading-[1.65] text-white/85 sm:text-sm sm:leading-relaxed">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CorporateStatsSection
