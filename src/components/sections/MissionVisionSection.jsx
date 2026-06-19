import { MISSION_VISION } from '../../data/siteContent'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'

function MissionVisionSection() {
  const vision = MISSION_VISION.find((item) => item.id === 'vision')
  const mision = MISSION_VISION.find((item) => item.id === 'mision')

  return (
    <section className="relative py-14 lg:py-20">
      {/* Background texture: light gray with angled panel on right */}
      <svg className="absolute inset-0 -z-10 h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" aria-hidden>
        <rect width="1440" height="240" fill="#eef2f5" />
        <polygon points="1040,0 1440,0 1440,240 1120,240" fill="#e9edf1" />
      </svg>

      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Misión - tarjeta clara */}
            <Reveal as="article" className="relative z-10 mx-auto max-w-lg rounded-lg border border-slate-200 bg-white p-8 shadow-sm group hover:-translate-y-2 hover:shadow-soft transition-transform duration-300" delayMs={0}>
              <div className="absolute -left-10 -top-10 hidden w-40 rotate-12 transform md:block">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-10">
                  <defs>
                    <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#e6eefc" />
                      <stop offset="100%" stopColor="#f9fbff" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="200" rx="12" fill="url(#g1)" />
                </svg>
              </div>

              <div className="flex flex-col items-start">
                <div className="rounded-full border border-slate-100 bg-white p-3 text-primary shadow-sm transition-colors transition-transform duration-200 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                  {/* Custom rocket icon with two tones (primary color) */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                    <path d="M5 20c0-3 3-7 7-7s7 4 7 7H5z" fill="#e6eefc" />
                    <path d="M12 3c1.2 0 2.3.3 3.3.9l2.4 1.6c.7.5.9 1.4.5 2.1l-3 5c-.4.7-1.2 1.1-2.1 1.1-.4 0-.8-.1-1.2-.3L9 12l1.9-6.4C11.3 4.3 11.7 3 12 3z" fill="currentColor" />
                    <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" />
                  </svg>
                </div>

                <h3 className="mt-4 text-left text-2xl font-semibold text-slate-900">{mision?.title}</h3>
                <p className="mt-3 text-left text-slate-600">{mision?.content}</p>
              </div>

              <ul className="mt-6 space-y-3 text-left">
                {mision?.highlights?.map((h, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-slate-200 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-3 w-3 fill-current">
                        <path d="M7.629 13.314L4.07 9.755 2.99 10.836l4.64 4.64L17.01 6.096 15.93 5.015z" />
                      </svg>
                    </span>
                    <span className="text-slate-700">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Visión - tarjeta en color principal */}
            <Reveal as="article" className="relative z-10 mx-auto max-w-lg overflow-hidden rounded-lg bg-primary p-8 text-white shadow-md group hover:-translate-y-2 hover:shadow-soft transition-transform duration-300" delayMs={75}>
              {/* Decorative shapes */}
              <div className="pointer-events-none absolute -right-10 -top-10 hidden h-48 w-48 rotate-12 transform opacity-20 md:block">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <rect x="10" y="10" width="180" height="180" rx="8" fill="#ffffff" opacity="0.05" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-full bg-white/10 p-3 text-white transition-colors transition-transform duration-200 group-hover:bg-white group-hover:text-primary group-hover:scale-105">
                  {/* Custom eye icon (primary color on hover) */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                    <path fill="currentColor" d="M12 5c-4 0-7.5 2.7-9 6 1.5 3.3 5 6 9 6s7.5-2.7 9-6c-1.5-3.3-5-6-9-6zm0 10a4 4 0 110-8 4 4 0 010 8z" opacity="0.95" />
                    <circle cx="12" cy="12" r="2" fill="#fff" opacity="0.95" />
                  </svg>
                </div>

                <h3 className="mt-4 text-left text-2xl font-semibold">{vision?.title}</h3>
                <p className="mt-3 max-w-prose leading-relaxed text-white/90">{vision?.content}</p>
              </div>

              {/* Removed small pills per design; accents use primary color */}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MissionVisionSection
