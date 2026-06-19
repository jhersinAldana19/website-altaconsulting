import { TESTIMONIALS } from '../../data/siteContent'
import TestimonialCard from '../testimonials/TestimonialCard'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 sm:py-20 lg:py-[5.25rem] relative overflow-hidden" style={{ background: 'var(--surface-base)' }}>
      {/* Background texture: same as Mission/Vision */}
      <svg className="absolute inset-0 z-0 h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" aria-hidden>
        <rect width="1440" height="240" fill="#eef2f5" />
        <polygon points="1040,0 1440,0 1440,240 1120,240" fill="#e9edf1" />
      </svg>

      <Container className="relative z-10">
        <SectionHeading title="Experiencias de clientes que fortalecieron su operación" />
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 75}>
              <TestimonialCard testimonial={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
