import { Link } from 'react-router-dom'
import { FOOTER_QUICK_LINKS } from '../../constants/navigation'
import { SOCIAL_LINKS } from '../../data/siteContent'
import { Mail, MapPin, Phone, Smartphone } from 'lucide-react'
import Container from './Container'

const CONTACT_ITEMS = [
  {
    id: 'address',
    icon: MapPin,
    title: 'Dirección',
    content: ['Av. Angamos Oeste 651 Of. 905', 'Miraflores, Lima 15074, Perú'],
  },
  {
    id: 'phone-mobile-1',
    icon: Smartphone,
    title: 'Móvil',
    content: ['+51 941 521 258'],
    href: 'tel:+51941521258',
  },
  {
    id: 'phone-mobile-2',
    icon: Phone,
    title: 'Teléfono',
    content: ['+51 941 521 259'],
    href: 'tel:+51941521259',
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email',
    content: ['informes@altaconsulting.pe'],
    href: 'mailto:informes@altaconsulting.pe',
  },
]

function FacebookIcon({ size = 16, className }) {
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

function LinkedInIcon({ size = 16, className }) {
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

function YouTubeIcon({ size = 16, className }) {
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

function InstagramIcon({ size = 16, className }) {
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

const SOCIAL_ICON_MAP = {
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
}

const FOOTER_SECTION_TITLE_CLASS = 'text-sm font-normal uppercase tracking-[0.18em] text-accent'
const FOOTER_LINK_CLASS = 'text-sm text-slate-300 transition hover:text-white'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-primary py-12 text-slate-200 md:py-14">
      <Container>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          <div className="space-y-4">
            <h3 className="text-lg font-normal text-white">ALTA CONSULTING</h3>
            <p className="max-w-[26ch] text-sm leading-relaxed text-slate-300">
              Firma especializada en outsourcing empresarial para compañías que requieren orden,
              control y respaldo experto.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className={FOOTER_SECTION_TITLE_CLASS}>Enlaces rápidos</h4>
            <ul className="space-y-2.5">
              {FOOTER_QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link className={FOOTER_LINK_CLASS} to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={FOOTER_SECTION_TITLE_CLASS}>Redes</h4>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICON_MAP[link.label]

                return (
                  <li key={link.label}>
                    <a
                      className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                      href={link.href}
                    >
                      {Icon ? <Icon className="h-4 w-4 text-accent" /> : null}
                      <span>{link.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={FOOTER_SECTION_TITLE_CLASS}>Contacto</h4>
            <ul className="space-y-4 text-sm">
              {CONTACT_ITEMS.map(({ id, icon: Icon, title, content, href }) => {
                const body = (
                  <>
                    <span className="mt-0.5 shrink-0 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="leading-relaxed text-slate-300">
                      <span className="block text-xs uppercase tracking-wide text-slate-400">{title}</span>
                      {content.map((line) => (
                        <span className="block" key={line}>
                          {line}
                        </span>
                      ))}
                    </span>
                  </>
                )

                return (
                  <li className="flex gap-3" key={id}>
                    {href ? (
                      <a className="flex gap-3 transition hover:text-white" href={href}>
                        {body}
                      </a>
                    ) : (
                      body
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-400">
          {new Date().getFullYear()} ALTA CONSULTING. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
