import { HOME_SIMULATOR_PROMO } from '../../data/siteContent'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import ButtonLink from '../ui/ButtonLink'

function HomeExpertiseBridgeSection() {
  const { title, description, cta, ctaHref } = HOME_SIMULATOR_PROMO

  return (
    <section
      id="simulador-ganancias"
      className="border-y border-slate-200 py-14 sm:py-16 lg:py-20"
      aria-labelledby="home-simulator-promo-heading"
      style={{ background: 'var(--surface-base)' }}
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 id="home-simulator-promo-heading" className="type-section-title tracking-[-0.02em]">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={ctaHref}>{cta}</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default HomeExpertiseBridgeSection
