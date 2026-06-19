const GA_ID = 'G-XHRWGC8WV2'

function injectGtag() {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
}

export function scheduleAnalyticsLoad() {
  if (!import.meta.env.PROD) return

  const run = () => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.onload = () => injectGtag()
    document.head.appendChild(script)
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(run, { timeout: 4000 })
  } else {
    window.setTimeout(run, 2500)
  }
}
