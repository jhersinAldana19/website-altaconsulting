
import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/routing/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import OutsourcingContablePage from './pages/OutsourcingContablePage'
import OutsourcingTributarioPage from './pages/OutsourcingTributarioPage'
import OutsourcingNominaPage from './pages/OutsourcingNominaPage'
import OutsourcingFinanzasPage from './pages/OutsourcingFinanzasPage'
import ResourcesPage from './pages/ResourcesPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import SimulatorPage from './pages/SimulatorPage'
import WhatsAppFloatButton from './components/layout/WhatsAppFloatButton'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<AboutPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/servicios/outsourcing-contable" element={<OutsourcingContablePage />} />
        <Route path="/servicios/outsourcing-tributario" element={<OutsourcingTributarioPage />} />
        <Route path="/servicios/outsourcing-nomina" element={<OutsourcingNominaPage />} />
        <Route path="/servicios/outsourcing-finanzas" element={<OutsourcingFinanzasPage />} />
        <Route path="/porque-elegirnos" element={<Navigate to="/" replace />} />
        <Route
          path="/testimonios"
          element={<Navigate to={{ pathname: '/', hash: 'testimonios' }} replace />}
        />
        <Route path="/recursos" element={<ResourcesPage />} />
        <Route path="/simulador" element={<SimulatorPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <WhatsAppFloatButton />
    </>
  )
}

export default App
