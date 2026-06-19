export const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/sobre-nosotros' },
  {
    label: 'Servicios',
    href: '/servicios',
    submenu: [
      { label: 'Outsourcing Contable', href: '/servicios/outsourcing-contable' },
      { label: 'Outsourcing Tributario', href: '/servicios/outsourcing-tributario' },
      { label: 'Outsourcing de Nómina', href: '/servicios/outsourcing-nomina' },
      { label: 'Outsourcing Finanzas', href: '/servicios/outsourcing-finanzas' },
    ],
  },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Contacto', href: '/contacto' },
]

/** Enlaces del pie: incluye anclas a secciones del inicio que no van en el header. */
export const FOOTER_QUICK_LINKS = [
  ...NAV_ITEMS.slice(0, 3),
  { label: 'Testimonios', href: '/#testimonios' },
  ...NAV_ITEMS.slice(3),
]
