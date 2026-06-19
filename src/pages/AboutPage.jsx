import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Seo from '../components/seo/Seo'
import PageMountReveal from '../components/ui/PageMountReveal'
import AboutSection from '../components/sections/AboutSection'
import AboutNextStepsSection from '../components/sections/AboutNextStepsSection'
import MissionVisionSection from '../components/sections/MissionVisionSection'
import heroAboutImage from '../assets/about/hero_sobre_nosotros.webp'

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Nosotros | Consultoría empresarial en Perú"
        description="Conoce al equipo de Alta Consulting, nuestra misión y visión para ayudar a empresas en Perú a mejorar su rentabilidad, eficiencia y toma de decisiones."
        canonicalPath="/sobre-nosotros"
      />
      <Header />
      <main id="main-content">
        <PageMountReveal as="section" className="relative overflow-hidden">
          <img
            src={heroAboutImage}
            alt="Sobre nosotros - ALTA CONSULTING"
            className="h-[45vh] min-h-[260px] w-full object-cover md:h-[52vh]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/45" aria-hidden />
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              SOBRE NOSOTROS
            </h1>
          </div>
        </PageMountReveal>
        <PageMountReveal delayMs={80}>
          <AboutSection />
          <MissionVisionSection />
          <AboutNextStepsSection />
        </PageMountReveal>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
