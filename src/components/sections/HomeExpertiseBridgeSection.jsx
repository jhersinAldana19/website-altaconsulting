import { HOME_EXPERTISE_BRIDGE } from '../../data/siteContent'
import imageContable from '../../assets/image_contable.webp'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import ButtonLink from '../ui/ButtonLink'

function HomeExpertiseBridgeSection() {
  const { title, lead, points, imageAlt } = HOME_EXPERTISE_BRIDGE

  return (
    <section
      id="enfoque-consultivo"
      className="border-y border-slate-200 py-10 sm:py-11 lg:py-12 relative overflow-hidden"
      aria-labelledby="home-expertise-bridge-heading"
      style={{ background: 'var(--surface-base)' }}
    >
      {/* Background texture: same treatment as Mission/Vision (light gray with angled panel) */}
      <svg className="absolute inset-0 z-0 h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" aria-hidden>
        <rect width="1440" height="240" fill="#eef2f5" />
        <polygon points="1040,0 1440,0 1440,240 1120,240" fill="#e9edf1" />
      </svg>

      {/* Two-tone polygonal background (visible behind content) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Large diagonal band to the right (visible) */}
        <div
          className="absolute -right-6 top-[-8%] h-[130%] w-[120%]"
          style={{
            background: 'var(--surface-diagonal)',
            clipPath: 'polygon(22% 0%, 100% 0%, 78% 100%, 0% 100%)',
            opacity: 0.6,
          }}
        />

        {/* Secondary polygon toward the left/bottom corner (visible) */}
        <div
          className="absolute -left-6 bottom-[-8%] h-[95%] w-[95%]"
          style={{
            background: 'var(--surface-diag-2)',
            clipPath: 'polygon(0% 18%, 82% 0%, 100% 62%, 18% 100%)',
            opacity: 0.45,
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto grid max-w-[1120px] items-stretch gap-5 sm:gap-6 lg:grid-cols-[minmax(0,36%)_minmax(0,1fr)] lg:gap-5 xl:gap-6">
          <Reveal className="order-2 flex w-full justify-center lg:order-1 lg:justify-end">
            <figure className="group relative inline-block h-[260px] w-full max-w-[340px] overflow-hidden rounded-sm ring-1 ring-slate-200/90 sm:h-[320px] lg:h-[360px] lg:max-w-[420px]">
              <div className="absolute inset-0 z-0">
                <img
                  src={imageContable}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-top brightness-100 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* gradient fade to the right to blend image with content */}
              <div aria-hidden className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
            </figure>
          </Reveal>

          <Reveal
            className="order-1 max-w-[32rem] space-y-3.5 border-slate-200 pb-1 lg:order-2 lg:space-y-4 lg:border-l lg:pl-5 xl:max-w-[33rem] flex items-center"
            delayMs={60}
          >
            <div>
              <h2 id="home-expertise-bridge-heading" className="type-section-title tracking-[-0.02em] mb-6">
                {title}
              </h2>
              <div className="space-y-2.5 text-[14px] leading-[1.6] text-slate-600 sm:text-sm sm:leading-relaxed lg:leading-[1.6]">
                <p className="mt-0">{lead}</p>
                <div className="mt-8 lg:mt-10">
                  <ButtonLink href="/contacto" className="inline-block" >Solicitar asesoría</ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default HomeExpertiseBridgeSection
