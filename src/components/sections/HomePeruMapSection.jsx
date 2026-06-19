import { geoMercator } from 'd3-geo'
import { useId, useMemo } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import { feature } from 'topojson-client'
import peDepartmentsTopology from 'pe-atlas/departments-100k.json'
import { HOME_PERU_MAP_SECTION, OFFICE_MAP } from '../../data/siteContent'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'

const ACCENT = '#169bd5'
const PRIMARY_STROKE = '#243a80'
const LIMA_FILL = 'rgba(22,155,213,0.18)'
const LIMA_FILL_HOVER = 'rgba(22,155,213,0.38)'
const OTHER_DEPT_FILL = 'transparent'

function isLimaDepartment(geo) {
  const name = geo.properties?.name
  return typeof name === 'string' && name.trim().toUpperCase() === 'LIMA'
}

/** Lienzo del mapa solo Perú. */
const MAP_W = 1200
const MAP_H = 560
const FIT_PADDING = 14

/**
 * Proyección solo Perú (departamentos), encajada al bbox nacional.
 * Datos: pe-atlas — world-atlas solo trae frontera país, sin líneas internas.
 */
function buildPeruMapProjection(width, height) {
  try {
    const fc = feature(
      peDepartmentsTopology,
      peDepartmentsTopology.objects.departments,
    )
    return geoMercator().fitExtent(
      [[FIT_PADDING, FIT_PADDING], [width - FIT_PADDING, height - FIT_PADDING]],
      fc,
    )
  } catch {
    return fallbackWorldProjection(width, height)
  }
}

function fallbackWorldProjection(width, height) {
  const dy = Math.round(height * 0.065) + 10
  return geoMercator()
    .scale(120)
    .center([0, 9])
    .translate([width / 2, height / 2 + dy])
}

/** Pin (Lima); escala acorde al zoom solo-Perú. */
function PeruPinGlyph({ maskId }) {
  return (
    <g transform="scale(0.16) translate(-50 -128)">
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect width="100" height="130" fill="white" />
          <circle cx="50" cy="42" r="16.75" fill="black" />
        </mask>
      </defs>
      <path
        fill={ACCENT}
        mask={`url(#${maskId})`}
        d="M50 126.25c-.35 0-.75-.38-1-1-.8-5.58-39-59.92-39-76.92 0-18.92 17.92-39.92 41-39.92s41 21 41 39.92c0 17-37.73 71.73-39 76.93-.35 1-.8 1.6-1.35 1.6z"
      />
    </g>
  )
}

function PresenceContactCard() {
  return (
    <div className="max-w-md lg:max-w-none">
      <p className="text-xs font-bold uppercase leading-tight tracking-[0.14em] text-accent sm:text-sm">
        Alta Consulting — Perú
      </p>
      <address className="mt-3 space-y-2 not-italic text-sm leading-snug text-primary sm:text-[0.95rem]">
        <p>{OFFICE_MAP.address}</p>
        <a
          className="block font-medium text-primary underline-offset-2 hover:underline"
          href={OFFICE_MAP.phoneHref}
          aria-label={`Teléfono ${OFFICE_MAP.phoneDisplay}`}
        >
          {OFFICE_MAP.phoneDisplay}
        </a>
        <a
          className="block font-medium text-primary underline-offset-2 hover:underline"
          href={`mailto:${OFFICE_MAP.email}`}
          aria-label={`Email ${OFFICE_MAP.email}`}
        >
          {OFFICE_MAP.email}
        </a>
      </address>
      <a
        className="mt-3 block break-all text-sm font-semibold text-accent underline-offset-2 transition hover:text-accent/85 hover:underline sm:text-[0.95rem]"
        href={OFFICE_MAP.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {OFFICE_MAP.websiteUrl}
      </a>
    </div>
  )
}

function HomePeruMapSection() {
  const pinHoleMaskId = useId().replace(/:/g, '')
  const [lng, lat] = OFFICE_MAP.lngLat
  const peruProjection = useMemo(() => buildPeruMapProjection(MAP_W, MAP_H), [])

  return (
    <section
      id="ubicacion"
      className="relative isolate z-10 overflow-visible border-t border-slate-200 bg-surface pt-14 pb-10 sm:pt-16 sm:pb-11 lg:pt-16 lg:pb-12"
      aria-labelledby="home-peru-map-heading"
    >
      <Container className="relative">
        <Reveal>
        <div className="mb-8 text-center sm:mb-9">
          <h2 id="home-peru-map-heading" className="type-section-title">
            {HOME_PERU_MAP_SECTION.title}
          </h2>
        </div>
        <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:gap-3 xl:gap-4">
          <div className="w-full shrink-0 lg:max-w-[15rem] xl:max-w-[16rem]">
            <PresenceContactCard />
          </div>

          <div
            className="flex max-h-none min-h-0 min-w-0 w-full shrink-0 items-center justify-start overflow-visible lg:max-h-[min(80vh,700px)] lg:min-h-0 lg:flex-1"
            style={{
              aspectRatio: `${MAP_W} / ${MAP_H}`,
            }}
          >
            <ComposableMap
              projection={peruProjection}
              width={MAP_W}
              height={MAP_H}
              className="block h-full w-full"
              preserveAspectRatio="xMinYMid meet"
              overflow="visible"
              style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'visible' }}
              aria-label="Mapa de Perú por departamentos, oficina en Lima"
            >
              <Geographies geography={peDepartmentsTopology}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const lima = isLimaDepartment(geo)
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={lima ? LIMA_FILL : OTHER_DEPT_FILL}
                        stroke={PRIMARY_STROKE}
                        strokeWidth={0.65}
                        vectorEffect="non-scaling-stroke"
                        style={{
                          default: { outline: 'none', cursor: lima ? 'help' : 'default' },
                          hover: {
                            outline: 'none',
                            cursor: lima ? 'help' : 'default',
                            ...(lima ? { fill: LIMA_FILL_HOVER } : {}),
                          },
                          pressed: { outline: 'none' },
                        }}
                      />
                    )
                  })
                }
              </Geographies>

              <Marker coordinates={[lng, lat]}>
                <g
                  style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.35))' }}
                  transform="translate(0 -2)"
                >
                  <PeruPinGlyph maskId={pinHoleMaskId} />
                </g>
              </Marker>
            </ComposableMap>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default HomePeruMapSection
