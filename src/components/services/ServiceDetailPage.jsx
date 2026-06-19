import { useEffect, useRef, useState } from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Container from '../layout/Container'
import ButtonLink from '../ui/ButtonLink'
import PageMountReveal from '../ui/PageMountReveal'
import Reveal from '../ui/Reveal'
import Seo, { SITE_ORIGIN } from '../seo/Seo'
import { SERVICES } from '../../data/siteContent'
import { useDesktopAutoplayVideo } from '../../hooks/useDesktopAutoplayVideo'

function ServiceDetailPage({ serviceId }) {
  const service = SERVICES.find((item) => item.id === serviceId)
  const videoRef = useRef(null)
  const showVideo = useDesktopAutoplayVideo()
  const [showAllHighlights, setShowAllHighlights] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el || !showVideo) return
    void el.play().catch(() => {})
  }, [showVideo, serviceId])

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Seo
          title="Servicio no encontrado"
          description="No se encontro la pagina del servicio solicitado en ALTA CONSULTING."
          canonicalPath="/servicios"
          noIndex
        />
        <Header />
        <main id="main-content" className="py-20">
          <PageMountReveal variant="fade">
            <Container className="max-w-3xl">
              <h1 className="type-section-title">Servicio no encontrado</h1>
              <p className="mt-4 text-slate-700">No se encontro la informacion de este servicio.</p>
              <div className="mt-8">
                <ButtonLink href="/servicios" variant="secondary">
                  Volver a servicios
                </ButtonLink>
              </div>
            </Container>
          </PageMountReveal>
        </main>
        <Footer />
      </div>
    )
  }

  const seoTitle = `${service.name} en Perú`
  const seoDescription = `${service.summary} Conoce beneficios, alcance y asesoría especializada de ALTA CONSULTING para tu empresa.`
  const benefitItems = service.highlights.slice(0, 4)
  const visibleHighlights = showAllHighlights ? service.highlights : service.highlights.slice(0, 6)

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={seoTitle}
        description={seoDescription}
        canonicalPath={service.href}
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          description: service.summary,
          provider: {
            '@type': 'Organization',
            name: 'ALTA CONSULTING',
          },
          areaServed: 'PE',
          serviceType: 'Outsourcing empresarial',
          url: `${SITE_ORIGIN}${service.href}`,
        }}
      />
      <Header />
      <main id="main-content">
        <PageMountReveal as="section" className="relative isolate h-[42vh] min-h-[260px] w-full overflow-hidden bg-black md:h-[48vh]">
          <img
            src={service.image}
            alt=""
            width={1200}
            height={675}
            decoding="async"
            fetchPriority="high"
            className={`absolute inset-0 h-full w-full object-cover ${showVideo ? 'lg:hidden' : ''}`}
            aria-hidden
          />
          {showVideo ? (
            <video
              ref={videoRef}
              className="absolute inset-0 hidden h-full w-full object-cover lg:block"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`Video principal de ${service.name}`}
            >
              <source src={service.heroVideo} type="video/mp4" />
            </video>
          ) : null}
          <div className="absolute inset-0 bg-primary/35" aria-hidden />
          <Container className="absolute inset-x-0 bottom-10">
            <h1 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">{service.name}</h1>
          </Container>
        </PageMountReveal>

        <PageMountReveal delayMs={80} variant="fade">
        <Container className="max-w-6xl py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,1fr)] lg:gap-12">
            <div className="space-y-10">
              <Reveal>
              <section className="border-b border-slate-200 pb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Servicio</p>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{service.summary}</p>
              </section>
              </Reveal>

              <Reveal delayMs={55}>
              <section className="border-b border-slate-200 pb-8">
                <h2 className="type-section-title">Cómo te ayudamos</h2>
                <p className="mt-4 text-slate-700">
                  En {service.name} trabajamos con un enfoque preventivo y operativo para ayudarte a tomar
                  decisiones con información confiable, reducir riesgos y mejorar la eficiencia de tu gestión
                  empresarial.
                </p>
              </section>
              </Reveal>

              <Reveal delayMs={110}>
              <section>
                <h2 className="type-section-title">Beneficios clave</h2>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {benefitItems.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 px-1 py-1 text-slate-700">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
              </Reveal>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
              <Reveal delayMs={40}>
              <section className="rounded-lg bg-slate-100/90 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Resultados esperados</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    <span>Mayor control y visibilidad de la operación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    <span>Reducción de riesgos tributarios y operativos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    <span>Mejores decisiones financieras y estratégicas.</span>
                  </li>
                </ul>
              </section>
              </Reveal>

              <Reveal delayMs={95}>
              <section className="rounded-lg bg-slate-100/90 p-6">
                <h3 className="type-section-title">Solicita una asesoría</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Evaluamos tu contexto actual y proponemos un plan de trabajo adaptado a tu empresa.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <ButtonLink href="/contacto" className="w-full">
                    Contactar ahora
                  </ButtonLink>
                  <ButtonLink href="/servicios" variant="secondary" className="w-full">
                    Ver todos los servicios
                  </ButtonLink>
                </div>
              </section>
              </Reveal>
            </aside>
          </div>

          <Reveal delayMs={80}>
          <section className="mt-12">
            <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              <div>
                <h2 className="type-section-title">Alcance del servicio</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Mostramos los puntos más importantes para una lectura rápida y clara.
                </p>
                <ul className="mt-6 space-y-3">
                  {visibleHighlights.map((highlight, index) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="inline-flex min-w-[2rem] items-center justify-center rounded-md bg-accent/10 px-2 py-1 text-xs font-semibold tracking-[0.04em] text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="pt-0.5 text-[15px] leading-7 text-slate-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                {service.highlights.length > 6 ? (
                  <button
                    type="button"
                    onClick={() => setShowAllHighlights((previous) => !previous)}
                    className="mt-5 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition hover:text-accent"
                  >
                    {showAllHighlights ? 'Ver menos alcance' : 'Ver alcance completo'}
                  </button>
                ) : null}
              </div>

              <figure className="overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={service.image}
                  alt={`Imagen referencial de ${service.name}`}
                  className="h-full min-h-[220px] w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </section>
          </Reveal>
        </Container>
        </PageMountReveal>
      </main>
      <Footer />
    </div>
  )
}

export default ServiceDetailPage
