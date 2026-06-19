import { useEffect, useRef, useState } from 'react'
import heroVideo from '../../assets/hero/hero_alta_consulting.mp4'
import heroPoster from '../../assets/services/hero_page.webp'
import { HERO_CONTENT } from '../../data/siteContent'
import Container from '../layout/Container'
import ButtonLink from '../ui/ButtonLink'

function HeroSection() {
  const videoRef = useRef(null)
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  /** En escritorio: cargar vídeo de inmediato. En móvil: diferir hasta idle para no competir con LCP/TTI. */
  const [loadVideoSource, setLoadVideoSource] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !window.matchMedia('(max-width: 1023px)').matches
  })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined

    const narrow = window.matchMedia('(max-width: 1023px)')
    if (!narrow.matches) {
      setLoadVideoSource(true)
      return undefined
    }

    let idleId
    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(() => setLoadVideoSource(true), { timeout: 3500 })
    } else {
      idleId = window.setTimeout(() => setLoadVideoSource(true), 500)
    }

    const onWide = () => {
      if (!narrow.matches) setLoadVideoSource(true)
    }
    narrow.addEventListener('change', onWide)

    return () => {
      narrow.removeEventListener('change', onWide)
      if ('cancelIdleCallback' in window && typeof idleId === 'number') {
        window.cancelIdleCallback(idleId)
      } else {
        window.clearTimeout(idleId)
      }
    }
  }, [reduceMotion])

  useEffect(() => {
    if (reduceMotion || !loadVideoSource) return
    const video = videoRef.current
    if (!video) return
    void video.play().catch(() => {})
  }, [reduceMotion, loadVideoSource])

  return (
    <section
      id="inicio"
      className="relative flex min-h-[78vh] items-center overflow-hidden py-20 lg:min-h-[84vh] lg:py-24"
    >
      {reduceMotion ? (
        <img
          src={heroPoster}
          alt=""
          width={1600}
          height={900}
          decoding="async"
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
      ) : (
        <video
          ref={videoRef}
          poster={heroPoster}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload={loadVideoSource ? 'auto' : 'none'}
          aria-hidden
        >
          {loadVideoSource ? <source src={heroVideo} type="video/mp4" /> : null}
        </video>
      )}

      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-normal leading-tight text-white sm:text-5xl">
            <span className="whitespace-nowrap">Asesoría y consultoría</span>{' '}
            empresarial en Lima para decisiones más seguras
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/90">
            {HERO_CONTENT.description}
          </p>
          <div className="mx-auto mt-8 flex w-full flex-row items-stretch gap-2 sm:mx-0 sm:w-auto sm:items-center sm:gap-4">
            <ButtonLink href="/contacto" className="app-btn-hero min-w-0 flex-1 sm:flex-none sm:min-w-[12rem]">
              Solicitar asesoría
            </ButtonLink>
            <ButtonLink href="/servicios" variant="outline-white" className="app-btn-hero min-w-0 flex-1 sm:flex-none sm:min-w-[12rem]">
              Ver servicios
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
