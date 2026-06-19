import Container from '../layout/Container'
import ButtonLink from '../ui/ButtonLink'
import Reveal from '../ui/Reveal'

function AboutNextStepsSection() {
  return (
    <section
      className="border-t border-slate-200 bg-surface py-14 lg:py-20"
      aria-labelledby="about-next-steps-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 id="about-next-steps-heading" className="type-section-title">
              Siguiente paso
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Si buscas orden, cumplimiento y respaldo en contabilidad, tributación, nómina o finanzas,
              podemos conversar sin compromiso y orientarte según el contexto de tu empresa.
            </p>
          </Reveal>
          <Reveal className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4" delayMs={70}>
            <ButtonLink href="/contacto" className="sm:min-w-[200px]">
              Solicitar asesoría
            </ButtonLink>
            <ButtonLink href="/servicios" variant="secondary" className="sm:min-w-[200px]">
              Ver servicios
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default AboutNextStepsSection
