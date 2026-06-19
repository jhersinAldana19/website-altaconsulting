import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Seo from '../components/seo/Seo'
import HeroSection from '../components/sections/HeroSection'
import CorporateStatsSection from '../components/sections/CorporateStatsSection'
import HomeExpertiseBridgeSection from '../components/sections/HomeExpertiseBridgeSection'
import ServicesSection from '../components/sections/ServicesSection'
import HomeClosingCtaSection from '../components/sections/HomeClosingCtaSection'
import HomePeruMapSection from '../components/sections/HomePeruMapSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        fullTitle="Alta Consulting | Asesoría y consultoría empresarial en Lima"
        description="Asesoría y consultoría empresarial en Lima. Alta Consulting ayuda a empresas a tomar decisiones más seguras integrando contabilidad, tributación, nómina y finanzas."
        canonicalPath="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'ALTA CONSULTING',
          url: 'https://altaconsulting.pe/',
          image: 'https://altaconsulting.pe/favicon.svg',
          telephone: '+51941521258',
          email: 'informes@altaconsulting.pe',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Angamos Oeste 651 Of. 905',
            addressLocality: 'Miraflores',
            addressRegion: 'Lima',
            postalCode: '15074',
            addressCountry: 'PE',
          },
          sameAs: [
            'https://www.linkedin.com/company/alta-consulting-peru/',
            'https://www.facebook.com/altaconsultingperu/',
            'https://www.instagram.com/alta_consulting_peru/',
            'https://www.youtube.com/channel/UCcHGbJGhaupNFKFRPY__S1g',
          ],
          description:
            'Asesoría y consultoría empresarial en Lima. Alta Consulting ayuda a empresas a tomar decisiones más seguras integrando contabilidad, tributación, nómina y finanzas.',
          areaServed: {
            '@type': 'Country',
            name: 'Perú',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicios empresariales',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contabilidad y gestión financiera' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asesoría tributaria y legal' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Optimización de procesos' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnóstico empresarial' } },
            ],
          },
        }}
      />
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <HomeExpertiseBridgeSection />
        <CorporateStatsSection />
        <TestimonialsSection />
        <HomePeruMapSection />
        <HomeClosingCtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
