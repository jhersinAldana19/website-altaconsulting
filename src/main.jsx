import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import './index.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './styles/primereact-overrides.css'
import App from './App.jsx'
import faviconUrl from './assets/branding/favicon.webp'
import { scheduleAnalyticsLoad } from './lib/loadAnalytics.js'

const existingFavicon = document.querySelector('link[rel="icon"]')
if (existingFavicon) existingFavicon.remove()

const faviconLink = document.createElement('link')
faviconLink.rel = 'icon'
faviconLink.type = 'image/webp'
faviconLink.href = faviconUrl
document.head.appendChild(faviconLink)

scheduleAnalyticsLoad()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>,
)
