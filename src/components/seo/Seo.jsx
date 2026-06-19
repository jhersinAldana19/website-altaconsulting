import { useEffect } from 'react'

/** Origen público estable (canonical, OG, Schema). No usar localhost aquí. */
export const SITE_ORIGIN = 'https://altaconsulting.pe'

const DEFAULT_SITE_NAME = 'ALTA CONSULTING'
/** Imagen OG compartida: archivo en `public/` para URL fija tras deploy (Meta/LinkedIn). */
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-share.webp`
const DEFAULT_DESCRIPTION =
  'Alta Consulting ayuda a empresas en Perú a mejorar su rentabilidad y eficiencia con contabilidad, gestión financiera, asesoría tributaria y legal, optimización de procesos y diagnóstico empresarial.'

function upsertMeta(name, content, attribute = 'name') {
  if (!content) return
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let tag = document.head.querySelector(`link[rel="${rel}"]`)

  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }

  tag.setAttribute('href', href)
}

function Seo({
  fullTitle,
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '/',
  noIndex = false,
  type = 'website',
  structuredData,
}) {
  useEffect(() => {
    const finalTitle = fullTitle || (title ? `${title} | ${DEFAULT_SITE_NAME}` : DEFAULT_SITE_NAME)
    document.title = finalTitle

    const baseUrl = SITE_ORIGIN
    const url = new URL(canonicalPath, baseUrl).toString()
    const robots = noIndex ? 'noindex, nofollow' : 'index, follow'

    upsertMeta('description', description)
    upsertMeta('robots', robots)
    upsertMeta('og:title', finalTitle, 'property')
    upsertMeta('og:description', description, 'property')
    upsertMeta('og:type', type, 'property')
    upsertMeta('og:url', url, 'property')
    upsertMeta('og:site_name', DEFAULT_SITE_NAME, 'property')
    upsertMeta('og:locale', 'es_PE', 'property')
    upsertMeta('og:image', DEFAULT_OG_IMAGE, 'property')
    upsertMeta('twitter:card', 'summary_large_image')
    upsertMeta('twitter:title', finalTitle)
    upsertMeta('twitter:description', description)
    upsertMeta('twitter:image', DEFAULT_OG_IMAGE)
    upsertLink('canonical', url)

    const existingStructuredData = document.getElementById('seo-structured-data')
    if (existingStructuredData) existingStructuredData.remove()

    if (structuredData) {
      const script = document.createElement('script')
      script.id = 'seo-structured-data'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [fullTitle, title, description, canonicalPath, noIndex, type, structuredData])

  return null
}

export default Seo
