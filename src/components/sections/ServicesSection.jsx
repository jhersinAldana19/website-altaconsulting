import { useState } from 'react'
import { SERVICES, SERVICES_DESTACADOS } from '../../data/siteContent'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppButton from '../ui/AppButton'
import servicesHeroImage from '../../assets/services/hero_page.webp'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const SERVICE_CARD_LINK_CLASSNAME =
  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors duration-300 group-hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

function ServicesSection({ showHero = false }) {
  const [expanded, setExpanded] = useState(false)
  const previewCount = 2
  const servicesTitle = 'Cuatro líneas de outsourcing para una gestión empresarial integral'

  const renderServiceCards = () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((service, index) => (
        <Reveal key={service.id} delayMs={index * 55}>
          <article className="group h-full overflow-hidden border border-transparent bg-surfaceTint transition-colors duration-300 hover:border-accent">
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between bg-surfaceTint px-5 py-4">
              <h3 className="pr-3 text-xl font-semibold leading-snug text-heading">{service.name}</h3>
              <Link
                to={service.href}
                aria-label={`Ver detalle de ${service.name}`}
                className={SERVICE_CARD_LINK_CLASSNAME}
              >
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )

  if (!showHero) {
    return (
      <section id="servicios" className="py-20">
        <Container>
          <SectionHeading title={servicesTitle} center />
          {renderServiceCards()}
        </Container>
      </section>
    )
  }

  return (
    <section id="servicios" className="pb-20">
      <Reveal className="relative mb-12 overflow-hidden">
        <img
          src={servicesHeroImage}
          alt="Servicios de outsourcing empresarial"
          className="h-[36vh] min-h-[240px] w-full object-cover md:h-[44vh]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <Container className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.16em] text-white md:text-5xl">
            Servicios
          </h1>
        </Container>
      </Reveal>

      <Container>
        <SectionHeading title={servicesTitle} center />
        {renderServiceCards()}

        <section id="servicios-destacados" className="mt-12">
          <div className="grid items-start gap-8 md:grid-cols-[minmax(220px,36%)_1fr]">
            <div className="flex items-start">
              <div className="pr-6">
                <h2 className="text-4xl font-normal leading-tight text-heading md:text-5xl">Servicios<br/>destacados</h2>
                <p className="mt-4 max-w-md text-sm text-slate-600">Principales servicios y alcances.</p>
              </div>
              <div className="hidden md:block ml-6">
                <div className="h-28 w-px bg-slate-200" aria-hidden />
              </div>
            </div>

            <div>
              <div className="space-y-4">
                {SERVICES_DESTACADOS.slice(0, previewCount).map((para) => (
                  <p key={para} className="text-sm leading-7 text-slate-700">{para}</p>
                ))}

                <div className="mt-4">
                  <AppButton
                    type="button"
                    variant="primary"
                    label={expanded ? 'Ocultar lista' : 'Ver todos los servicios'}
                    onClick={() => setExpanded((s) => !s)}
                    aria-expanded={expanded}
                    aria-controls="servicios-destacados-list"
                  />
                </div>

                <div
                  id="servicios-destacados-list"
                  className={`mt-4 overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[800px]' : 'max-h-0'}`}
                >
                  <ol className="list-decimal ml-6 space-y-2">
                    {SERVICES_DESTACADOS.map((item) => (
                      <li key={item} className="text-sm leading-7 text-slate-700">{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}

export default ServicesSection
