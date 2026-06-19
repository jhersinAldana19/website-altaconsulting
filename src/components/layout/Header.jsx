import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { NAV_ITEMS } from '../../constants/navigation'
import { SOCIAL_LINKS } from '../../data/siteContent'
import logoColor from '../../assets/branding/logo_color.webp'
import { useOpaqueHeaderAfterHero } from '../../hooks/useOpaqueHeaderAfterHero'
import Container from './Container'
import SearchOverlay from './SearchOverlay'

function FacebookIcon({ size = 18, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedInIcon({ size = 18, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function YouTubeIcon({ size = 18, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M2.5 17a24.1 24.1 0 0 1 0-10 3 3 0 0 1 2.1-2.1 49.2 49.2 0 0 1 14.8 0A3 3 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 3 3 0 0 1-2.1 2.1 49.2 49.2 0 0 1-14.8 0A3 3 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

function InstagramIcon({ size = 18, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const SOCIAL_ICONS = {
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
}

function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  // Force transparent header on pages that use a full-bleed hero image
  const forceTransparentPaths = ['/sobre-nosotros', '/servicios', '/recursos']
  const opaqueHeader = useOpaqueHeaderAfterHero('inicio', forceTransparentPaths)
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)


  const renderNavItem = (item) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0

    if (hasSubmenu) {
      return (
        <div key={item.label} className="relative group">
          <Link
            to={item.href}
            className={`flex items-center gap-1 ${navLinkClass}`}
          >
            {item.label}
            <ChevronDown size={14} className="shrink-0" strokeWidth={2.25} />
          </Link>

          {/* Desktop Dropdown */}
          <div className="absolute left-0 mt-0 w-48 border border-accent bg-accent shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
            {item.submenu.map((subitem) => (
              <Link
                key={subitem.href}
                to={subitem.href}
                className="block px-4 py-2 text-sm text-white transition hover:bg-primary hover:text-white"
              >
                {subitem.label}
              </Link>
            ))}
          </div>

          {/* Mobile Dropdown */}
          {openSubmenu === item.label && (
            <div className="absolute left-0 mt-2 w-48 border border-accent bg-accent shadow-lg z-40 lg:hidden">
              {item.submenu.map((subitem) => (
                <Link
                  key={subitem.href}
                  to={subitem.href}
                  className="block px-4 py-2 text-sm text-white transition hover:bg-primary hover:text-white"
                  onClick={() => {
                    setOpenSubmenu(null)
                    setIsOpen(false)
                  }}
                >
                  {subitem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )
    }

    return (
      <Link key={item.href} to={item.href} className={navLinkClass}>
        {item.label}
      </Link>
    )
  }

  const renderMobileNavItem = (item) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0

    if (hasSubmenu) {
      return (
        <div key={item.label}>
          <div className="flex items-center justify-between gap-2">
            <Link
              to={item.href}
              className="block flex-1 rounded-md px-2 py-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
            <Button
              type="button"
              icon="pi pi-chevron-down"
              text
              rounded
              severity="secondary"
              onClick={() =>
                setOpenSubmenu(openSubmenu === item.label ? null : item.label)
              }
              aria-label={`Mostrar submenu de ${item.label}`}
              className={openSubmenu === item.label ? '[&_.pi]:rotate-180' : ''}
            />
          </div>
          {openSubmenu === item.label && (
            <div className="ml-4 space-y-1">
              {item.submenu.map((subitem) => (
                <Link
                  key={subitem.href}
                  to={subitem.href}
                  className="block rounded-md px-2 py-2 text-xs uppercase tracking-[0.1em] text-slate-600 hover:bg-slate-50 hover:text-primary"
                  onClick={() => {
                    setOpenSubmenu(null)
                    setIsOpen(false)
                  }}
                >
                  {subitem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={item.href}
        to={item.href}
        className="block rounded-md px-2 py-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-700 hover:bg-slate-50"
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </Link>
    )
  }

  const headerSurfaceClass = opaqueHeader
    ? 'border-b border-slate-200 bg-white shadow-header'
    : 'border-b border-transparent bg-transparent'
  const finalHeaderSurfaceClass = headerSurfaceClass
  const headerPositionClass = (pathname === '/' || forceTransparentPaths.includes(pathname))
    ? 'fixed inset-x-0 top-0'
    : 'sticky top-0'
  const effectiveOpaque = opaqueHeader

  const navLinkClass = effectiveOpaque
    ? 'py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-slate-700 transition hover:text-primary'
    : 'py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white/90 transition hover:text-white'
  const iconButtonClass = effectiveOpaque
    ? 'inline-flex h-10 w-10 items-center justify-center text-slate-600 transition hover:text-primary'
    : 'inline-flex h-10 w-10 items-center justify-center text-white/90 transition hover:text-white'

  const openSearch = () => {
    setIsSearchOpen(true)
    setIsOpen(false)
    setOpenSubmenu(null)
  }

  const handleSearch = (value) => {
    const trimmedValue = value.trim()
    const search = trimmedValue ? `?q=${encodeURIComponent(trimmedValue)}` : ''
    navigate(`/recursos${search}`)
    setIsSearchOpen(false)
  }

  return (
    <header className={`z-50 transition-colors duration-300 ${headerPositionClass} ${finalHeaderSurfaceClass}`}>
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-primary"
      >
        Saltar al contenido principal
      </a>
      <Container className="py-3">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoColor} alt="ALTA CONSULTING" className="h-14 w-auto md:h-16" />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {NAV_ITEMS.map((item) => renderNavItem(item))}
          </nav>

          <div className="hidden items-center gap-1 lg:flex">
            <Button
              type="button"
              icon="pi pi-search"
              text
              rounded
              aria-label="Abrir buscador de recursos"
              className={iconButtonClass}
              onClick={openSearch}
            />
            {SOCIAL_LINKS.map(({ label, href }) => {
              const SocialIcon = SOCIAL_ICONS[label]

              if (!SocialIcon) return null

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={iconButtonClass}
                >
                  <SocialIcon size={18} />
                </a>
              )
            })}
          </div>

          <Button
            type="button"
            icon={isOpen ? 'pi pi-times' : 'pi pi-bars'}
            text
            rounded
            aria-label="Abrir menu"
            className={`lg:hidden ${effectiveOpaque ? 'text-primary' : 'text-white'}`}
            onClick={() => {
              setIsOpen(!isOpen)
              setOpenSubmenu(null)
            }}
          />
        </div>

        {isOpen && (
          <div className="mt-4 space-y-1 rounded-lg border border-slate-200 bg-white p-4 lg:hidden">
            {NAV_ITEMS.map((item) => renderMobileNavItem(item))}
            <div className="flex items-center gap-1 pt-4">
              <Button
                type="button"
                icon="pi pi-search"
                text
                rounded
                severity="secondary"
                aria-label="Abrir buscador de recursos"
                onClick={openSearch}
              />
              {SOCIAL_LINKS.map(({ label, href }) => {
                const SocialIcon = SOCIAL_ICONS[label]

                if (!SocialIcon) return null

                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center text-slate-600 transition hover:text-primary"
                  >
                    <SocialIcon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header
