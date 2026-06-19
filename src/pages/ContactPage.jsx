import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Seo from '../components/seo/Seo'
import ContactSection from '../components/sections/ContactSection'
import MapSection from '../components/sections/MapSection'
import PageMountReveal from '../components/ui/PageMountReveal'

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Contacto y asesoría empresarial en Perú"
        description="Agenda una asesoría con Alta Consulting para evaluar contabilidad, gestión financiera, cumplimiento tributario y optimización de procesos en tu empresa."
        canonicalPath="/contacto"
      />
      <Header />
      <main id="main-content">
        <PageMountReveal>
          <ContactSection />
          <MapSection />
        </PageMountReveal>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
