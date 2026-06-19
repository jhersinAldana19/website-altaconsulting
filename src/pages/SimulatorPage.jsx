import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Seo from '../components/seo/Seo'
import PageMountReveal from '../components/ui/PageMountReveal'
import ProfitLossSimulator from '../components/simulator/ProfitLossSimulator'
import simulatorBackground from '../assets/simulador/fondo-simulador.webp'

function SimulatorPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <img
          src={simulatorBackground}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/88 sm:bg-white/85" />
      </div>

      <Seo
        title="Simulador de Ganancias y Pérdidas"
        description="Calcula de forma referencial tus costos, gastos, impuestos y ganancia neta con el simulador de Alta Consulting."
        canonicalPath="/simulador"
      />
      <Header />
      <main id="main-content" className="py-12 sm:py-16 lg:py-20">
        <PageMountReveal>
          <ProfitLossSimulator />
        </PageMountReveal>
      </main>
      <Footer />
    </div>
  )
}

export default SimulatorPage
