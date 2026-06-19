import { OFFICE_MAP } from '../../data/siteContent'
import { MapPin } from 'lucide-react'
import Container from '../layout/Container'
import ButtonLink from '../ui/ButtonLink'
import Reveal from '../ui/Reveal'

function MapSection() {
  return (
    <section aria-label="Ubicacion de la oficina" className="bg-surface py-20">
      <Container>
        <Reveal className="mb-8 text-center">
          <h2 className="type-section-title normal-case tracking-normal">
            Ubicanos en
          </h2>
        </Reveal>

        <Reveal delayMs={50}>
        <div className="mx-auto max-w-5xl overflow-hidden border border-slate-200 bg-white shadow-soft">
          <iframe
            title={`Mapa de ${OFFICE_MAP.address}`}
            src={OFFICE_MAP.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full md:h-[360px]"
          />

          <div className="grid border-t border-slate-200 md:grid-cols-[1.2fr_1fr]">
            <div className="flex items-center gap-3 px-5 py-4 text-slate-700">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-primary">
                <MapPin size={18} />
              </span>
              <p className="text-sm md:text-base">{OFFICE_MAP.address}</p>
            </div>

            <div className="bg-slate-800 px-5 py-4">
              <p className="text-sm font-semibold text-white">Como llegar?</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <ButtonLink
                  href={OFFICE_MAP.wazeUrl}
                  variant="secondary"
                  size="small"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase tracking-wide"
                >
                  Waze
                </ButtonLink>
                <ButtonLink
                  href={OFFICE_MAP.mapsUrl}
                  variant="secondary"
                  size="small"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase tracking-wide"
                >
                  Google Maps
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default MapSection
