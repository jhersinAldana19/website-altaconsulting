import Container from '../layout/Container'
import ButtonLink from '../ui/ButtonLink'
import Reveal from '../ui/Reveal'
import ctaBg from '../../assets/contact_mapa.webp'

function HomeClosingCtaSection() {
  return (
    <section
      id="siguiente-paso"
      className="relative bg-surface py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ctaBg})` }}
      aria-labelledby="home-closing-cta-heading"
    >
      {/* subtle light overlay to keep text readable */}
      <div aria-hidden className="absolute inset-0 bg-white/80" />
      <Container className="relative z-10">
        <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="home-closing-cta-heading" className="type-section-title">
            Siguiente paso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Si buscas orden, cumplimiento y respaldo en contabilidad, tributación, nómina o finanzas,
            podemos conversar sin compromiso y orientarte según el contexto de tu empresa.
          </p>
        </div>
        </Reveal>
        <Reveal className="mx-auto mt-8 flex max-w-2xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4" delayMs={70}>
            <ButtonLink href="/contacto" className="sm:min-w-[200px]">
              Solicitar asesoría
            </ButtonLink>
            <ButtonLink href="/servicios" variant="secondary" className="sm:min-w-[200px]">
              Ver servicios
            </ButtonLink>
        </Reveal>
      </Container>
    </section>
  )
}

export default HomeClosingCtaSection
