import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Seo from '../components/seo/Seo'
import PageMountReveal from '../components/ui/PageMountReveal'
import ResourcesSection from '../components/sections/ResourcesSection'
import heroResourcesImage from '../assets/resources/hero_resources.webp'

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Recursos de contabilidad y gestión empresarial"
        description="Accede a recursos de Alta Consulting sobre contabilidad, gestión financiera, cumplimiento tributario y decisiones estratégicas para empresas."
        canonicalPath="/recursos"
      />
      <Header />
      <main id="main-content">
        <PageMountReveal as="section" className="relative overflow-hidden">
          <img
            src={heroResourcesImage}
            alt="Recursos de ALTA CONSULTING"
            className="h-[45vh] min-h-[260px] w-full object-cover md:h-[52vh]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/45" aria-hidden />
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              RECURSOS
            </h1>
          </div>
        </PageMountReveal>
        <PageMountReveal delayMs={80} variant="fade">
          <ResourcesSection />
        </PageMountReveal>
      </main>
      <Footer />
    </div>
  )
}

export default ResourcesPage
