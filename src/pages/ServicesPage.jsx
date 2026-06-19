import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Seo from '../components/seo/Seo'
import PageMountReveal from '../components/ui/PageMountReveal'
import ServicesSection from '../components/sections/ServicesSection'

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Servicios de outsourcing empresarial"
        description="Conoce los servicios de Alta Consulting en Perú: outsourcing contable, tributario, nómina y finanzas para ordenar tu operación y reducir riesgos."
        canonicalPath="/servicios"
      />
      <Header />
      <main id="main-content">
        <PageMountReveal>
          <ServicesSection showHero />
        </PageMountReveal>
      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage
