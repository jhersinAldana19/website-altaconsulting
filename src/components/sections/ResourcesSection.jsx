import { Play, Search, SlidersHorizontal, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { RESOURCE_VIDEOS } from '../../data/siteContent'
import maintenanceImage from '../../assets/resources/mantenimiento.webp'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const PANEL_CLASSNAME = 'bg-primary/5 p-5'
const INPUT_CLASSNAME =
  'w-full bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-primary/15'
const CATEGORY_BUTTON_BASE =
  'w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-200'
const CARD_CLASSNAME =
  'group overflow-hidden bg-accent/[0.03] transition-colors hover:bg-accent/[0.06]'
const LEGAL_CATEGORY = 'Outsourcing Legal'
const FIXED_CATEGORIES = [LEGAL_CATEGORY]

function ResourcesSection() {
  const [searchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setQuery(searchParams.get('q') ?? '')
  }, [searchParams])

  const categories = useMemo(() => {
    const values = new Set(RESOURCE_VIDEOS.map((video) => video.category))
    FIXED_CATEGORIES.forEach((category) => values.add(category))
    return ['Todos', ...values]
  }, [])

  const filteredVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return RESOURCE_VIDEOS.filter((video) => {
      const matchCategory = activeCategory === 'Todos' || video.category === activeCategory
      if (!normalizedQuery) return matchCategory

      const searchable = `${video.title} ${video.presenter} ${video.category}`.toLowerCase()
      return matchCategory && searchable.includes(normalizedQuery)
    })
  }, [activeCategory, query])

  const isLegalCategorySelected = activeCategory === LEGAL_CATEGORY

  const handleResetFilters = () => {
    setActiveCategory('Todos')
    setQuery('')
  }

  const handleSelectCategory = (category, closeMobileSheet = false) => {
    setActiveCategory(category)
    if (closeMobileSheet) setIsMobileFiltersOpen(false)
  }

  const renderFilters = (isMobile = false) => (
    <div className={`${PANEL_CLASSNAME} space-y-4 ${isMobile ? '' : 'lg:sticky lg:top-24'}`}>
      <h3 className="text-base font-semibold text-heading">Filtros</h3>

      <label className="relative block">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar video o expositor"
          className={INPUT_CLASSNAME}
        />
      </label>

      <div className="space-y-2">
        {categories.map((category) => {
          const isActive = category === activeCategory

          return (
            <button
              key={category}
              type="button"
              onClick={() => handleSelectCategory(category, isMobile)}
              className={`${CATEGORY_BUTTON_BASE} ${
                isActive
                  ? 'bg-primary/80 text-white hover:bg-primary/90 active:bg-primary'
                  : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-primary'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => {
          handleResetFilters()
          if (isMobile) setIsMobileFiltersOpen(false)
        }}
        className={`${CATEGORY_BUTTON_BASE} bg-white text-slate-600 hover:bg-slate-50 hover:text-primary`}
      >
        Limpiar filtros
      </button>
    </div>
  )

  return (
    <section id="recursos" className="bg-white py-20">
      <Container>
        <SectionHeading
          title="Biblioteca de recursos en video"
          description="Explora contenido especializado por línea de outsourcing. Filtra por categoría o busca un tema específico."
        />
        <div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
          <Reveal as="aside" className="mb-8 hidden lg:mb-0 lg:block" variant="fade">
            {renderFilters()}
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-5 text-sm text-slate-500">{filteredVideos.length} videos disponibles</div>
            </Reveal>

            {isLegalCategorySelected ? (
              <Reveal>
              <article className="mx-auto max-w-xl py-4 text-center">
                <img
                  src={maintenanceImage}
                  alt="Contenido de Outsourcing Legal en desarrollo"
                  className="mx-auto h-auto w-full max-w-[220px] object-contain"
                  loading="lazy"
                />
                <p className="mt-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Outsourcing Legal · En desarrollo
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  Pronto publicaremos recursos en esta categoría.
                </p>
              </article>
              </Reveal>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
                {filteredVideos.map((video, index) => (
                  <Reveal key={video.id} delayMs={index * 45}>
                  <article className={CARD_CLASSNAME}>
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${video.title} en YouTube`}
                      className="relative block"
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        loading="lazy"
                        className="aspect-video w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors group-hover:bg-primary/35">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-white opacity-0 transition-opacity group-hover:opacity-100">
                          <Play className="ml-0.5 h-6 w-6 fill-white" />
                        </span>
                      </div>
                    </a>

                    <div className="space-y-3 bg-accent/[0.03] p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-primary">{video.category}</span>
                        <span className="text-slate-500">{video.publishedAt}</span>
                      </div>
                      <h3 className="text-lg font-semibold leading-snug text-heading">{video.title}</h3>
                      <p className="text-sm text-slate-600">{video.presenter}</p>
                    </div>
                  </article>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>

        {filteredVideos.length === 0 && !isLegalCategorySelected && (
          <Reveal>
          <div className="mt-8 bg-slate-50 p-8 text-center text-slate-600 lg:ml-[calc(280px+2rem)]">
            No se encontraron videos con los filtros seleccionados.
          </div>
          </Reveal>
        )}
      </Container>

      <button
        type="button"
        onClick={() => setIsMobileFiltersOpen(true)}
        className="fixed right-4 top-24 z-[85] inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 active:bg-primary lg:hidden"
        aria-label="Abrir filtros"
      >
        <SlidersHorizontal size={16} />
        Filtros
      </button>

      {isMobileFiltersOpen ? (
        <div className="fixed inset-0 z-[95] lg:hidden" role="dialog" aria-modal="true" aria-labelledby="mobile-filters-title">
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/50"
            onClick={() => setIsMobileFiltersOpen(false)}
            aria-label="Cerrar filtros"
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 id="mobile-filters-title" className="text-base font-semibold text-heading">
                Filtrar videos
              </h3>
              <button
                type="button"
                onClick={() => setIsMobileFiltersOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center bg-slate-100 text-slate-700"
                aria-label="Cerrar panel de filtros"
              >
                <X size={16} />
              </button>
            </div>
            {renderFilters(true)}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ResourcesSection
