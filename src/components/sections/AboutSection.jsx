import { ABOUT_CONTENT } from '../../data/siteContent'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import aboutVisual from '../../assets/about/nosotros.webp'

function AboutSection() {
  return (
    <section id="nosotros" className="py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 border-y border-slate-200 py-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-14">
            <Reveal className="relative isolate w-full max-w-lg justify-self-center lg:max-w-none lg:justify-self-stretch">
              <span
                className="pointer-events-none absolute -left-1 top-[10%] z-10 w-1.5 rounded-full bg-gradient-to-b from-accent to-primary shadow-sm sm:-left-0.5 sm:w-2"
                aria-hidden
              />
              <div
                className="relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-200/85 sm:rounded-[1.5rem] lg:rounded-[2rem]"
              >
                <img
                  src={aboutVisual}
                  alt="Equipo de ALTA CONSULTING en acompanamiento ejecutivo"
                  className="aspect-[3/4] max-h-[min(420px,70vh)] w-full object-cover sm:aspect-[4/5] sm:max-h-[460px] lg:max-h-[420px]"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="space-y-5 lg:space-y-6" delayMs={70}>
              <h2 className="type-section-title max-w-3xl">{ABOUT_CONTENT.title}</h2>
              <p className="max-w-2xl text-[14px] font-normal leading-[26.6px] text-slate-700">
                {ABOUT_CONTENT.description}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
