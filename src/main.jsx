import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
