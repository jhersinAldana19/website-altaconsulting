import outsourcingContableImage from '../assets/services/Outsourcing-Contable.webp'
import outsourcingTributarioImage from '../assets/services/Outsourcing-Tributario.webp'
import outsourcingNominaImage from '../assets/services/Outsourcing-de-Nomina.webp'
import outsourcingFinanzasImage from '../assets/services/Outsourcing-Finanzas.webp'
import heroOutsourcingContableVideo from '../assets/services/hero-videos/hero_Outsourcing_Contable.mp4'
import heroOutsourcingTributarioVideo from '../assets/services/hero-videos/hero_Outsourcing_Tributario.mp4'
import heroOutsourcingNominaVideo from '../assets/services/hero-videos/hero_Outsourcing_Nomina.mp4'
import heroOutsourcingFinanzasVideo from '../assets/services/hero-videos/hero_Outsourcing_Finanzas.mp4'
import anibalRipollImage from '../assets/testimonials/Anibal-Ripoll.webp'
import cesarSarriaImage from '../assets/testimonials/Cesar_Sarria.webp'
import pedroPretellImage from '../assets/testimonials/Pedro-Pretell.webp'

export const HERO_CONTENT = {
  title:
    'Asesoría y consultoría empresarial en Lima para decisiones más seguras',
  description:
    'Integramos contabilidad, tributación, nómina y finanzas para que tu empresa opere con control y cumplimiento.',
}

export const ABOUT_CONTENT = {
  title: 'Equipo especializado para decisiones empresariales con confianza',
  description:
    'Somos un equipo especializado, comprometidos en brindar un servicio de calidad, ofreciendo asesoramiento de confianza, ágil e innovador con un alto nivel de exigencia para la satisfaccion de nuestros clientes, y puedan liderar los retos del mercado actual.',
}

/** Promo del simulador en la página de inicio. */
export const HOME_SIMULATOR_PROMO = {
  title: '¿Sabes cuánto gana realmente tu negocio?',
  description:
    'Calcula de forma referencial tus costos, gastos, impuestos y ganancia neta con nuestro simulador de ganancias y pérdidas.',
  cta: 'Usar simulador',
  ctaHref: '/simulador',
}

export const MISSION_VISION = [
  {
    id: 'vision',
    title: 'Visión',
    content:
      'En Alta Consulting aspiramos a ser una firma líder en asesoría y consultoría empresarial en Perú: que nos reconozcan por acompañar a las organizaciones con soluciones integrales, eficientes y oportunas que fortalecen su operación día a día.',
  },
  {
    id: 'mision',
    title: 'Misión',
    content:
      'Nuestra misión es servir a empresas de distintos sectores con propuestas personalizadas y de alto estándar. Escuchamos su contexto, priorizamos sus necesidades y aportamos soluciones estratégicas claras orientadas al desarrollo y la consolidación de cada cliente.',
  },
]

export const SERVICES = [
  {
    id: 'contable',
    name: 'Outsourcing Contable',
    href: '/servicios/outsourcing-contable',
    image: outsourcingContableImage,
    heroVideo: heroOutsourcingContableVideo,
    summary:
      'Gestión integral del ciclo contable con reportes financieros oportunos para dirección y cumplimiento normativo.',
    highlights: [
      'Definición de políticas contables',
      'Procesos de bancarización',
      'Implementación de contabilidad',
      'Provisión de gastos remitido por el cliente',
      'Registro de comprobantes de pago',
      'Revisión de detracciones, retenciones y percepciones',
      'Registro de ingresos',
      'Análisis de cuenta',
      'Conciliación bancaria',
      'Elaboración de reportes mensuales',
      'Presentación de estados financieros',
      'Notas a los estados financieros',
      'Consolidación de estados financieros',
      'Control de activo fijo y provisión mensual de depreciación',
      'Elaboración de informes para el INEI',
      'Elaboración de libros contables',
      'Control del registro de importaciones',
      'Implementación y adopción de las NIIF',
    ],
  },
  {
    id: 'tributario',
    name: 'Outsourcing Tributario',
    href: '/servicios/outsourcing-tributario',
    image: outsourcingTributarioImage,
    heroVideo: heroOutsourcingTributarioVideo,
    summary:
      'Control tributario preventivo con cumplimiento mensual y anual para minimizar riesgos fiscales.',
    highlights: [
      'Presentación de la declaración anual de renta',
      'Liquidación de impuestos',
      'Presentación de PDT mensual',
      'Impresión de libros contables',
      'Programa de libros electrónicos (PLE)',
      'Declaración de operaciones con terceros (DAOT)',
      'Impuesto temporal a los activos netos (ITAN)',
      'Otras declaraciones informativas solicitadas por la administración tributaria',
      'Revisión y análisis de sustento de gastos',
      'Control y análisis de gastos no deducibles',
      'Estudio de precios de transferencia',
      'Atención a procesos de fiscalización de la SUNAT',
    ],
  },
  {
    id: 'nomina',
    name: 'Outsourcing de Nómina',
    href: '/servicios/outsourcing-nomina',
    image: outsourcingNominaImage,
    heroVideo: heroOutsourcingNominaVideo,
    summary:
      'Administración precisa y segura de planillas para mantener continuidad operativa y cumplimiento laboral.',
    highlights: [
      'Cálculo de planilla de sueldos',
      'Provisión mensual de CTS, gratificaciones, aportes y deducciones',
      'Liquidación de remuneraciones',
      'Revisión y control de las retenciones de renta de quinta categoría',
      'Declaración de planilla AFP NET',
      'Registro de trabajadores y sus respectivos familiares en el T-Registro',
      'Elaboración y presentación de la planilla electrónica PDT PLAME (trabajadores)',
      'Elaboración y presentación de la planilla electrónica PDT PLAME (recibo por honorarios)',
      'Preparación de boletas de pago de los trabajadores',
      'Preparación de certificados de CTS semestral',
      'Preparación de certificados de impuesto a la renta de quinta categoría anual',
      'Preparación de certificados de impuesto a los dividendos anual',
      'Liquidación de beneficios sociales a los trabajadores',
      'Trámite de subsidios ante ESSALUD',
    ],
  },
  {
    id: 'finanzas',
    name: 'Outsourcing Finanzas',
    href: '/servicios/outsourcing-finanzas',
    image: outsourcingFinanzasImage,
    heroVideo: heroOutsourcingFinanzasVideo,
    summary:
      'Soporte financiero estratégico para fortalecer la caja, proyecciones y decisiones de inversión.',
    highlights: [
      'Elaboración y análisis de proyecciones financieras',
      'Tesorería',
      'Planeamiento estratégico',
      'Criticidad, apetito al riesgo',
      'Presupuesto y plan de fortalecimiento del capital',
      'Valorización',
      'Asesoría para préstamos',
      'Diseño y evaluación de productos financieros',
    ],
  },
]

/** Listado único mostrado en la sección 'Servicios destacados' (texto provisto por el cliente). */
export const SERVICES_DESTACADOS = [
  'Elaboración y análisis de Proyecciones financieras.',
  'Criticidad, apetito al riesgo.',
  'Presupuesto y Plan de fortalecimiento del capital.',
  'Constitución de empresas.',
  'Asesoramiento al directorio y junta de accionistas.',
  'Implementación de contabilidad.',
  'Presentación de Estados Financieros.',
  "Implementación y adopción de las NIIF.",
  'Presentación de la Declaración Jurada Anual de Renta.',
  "Presentación de PDT'S mensual.",
  'Estudio de Precios de Transferencia.',
  'Atención a procesos de fiscalización de la SUNAT.',
  'Cálculo de planilla de sueldos.',
  'Revisión y control de las retenciones de Renta de Quinta Categoría.',
  'Trámite de Subsidios ante ESSALUD.',
]

export const TESTIMONIALS = [
  {
    id: 'anibal-ripoll',
    name: 'Aníbal Ripoll',
    role: 'Gerente General de Hydraulic Systems',
    quote:
      'ALTA CONSULTING nos dio orden y velocidad para decidir mejor, permitiéndonos tomar decisiones informadas y reducir la incertidumbre operativa.',
    image: anibalRipollImage,
    videoUrl: 'https://www.youtube.com/watch?v=ocGu2A7OfUQ',
  },
  {
    id: 'cesar-sarria',
    name: 'César Sarria',
    role: 'Director del Grupo Tecport',
    quote:
      'Hoy operamos con más claridad financiera y mejor control, lo que ha optimizado nuestra planificación y la capacidad de respuesta ante desafíos.',
    image: cesarSarriaImage,
    videoUrl: 'https://www.youtube.com/watch?v=IlEutmaFtPQ&t=3s',
  },
  {
    id: 'pedro-pretell',
    name: 'Pedro Pretell',
    role: 'Gerente de Nerd Studio',
    quote:
      'Entienden nuestro ritmo y sostienen el control del negocio, aportando seguimiento constante y soluciones prácticas que facilitan la operación diaria.',
    image: pedroPretellImage,
    videoUrl: 'https://www.youtube.com/watch?v=iU0hGkpbYik',
  },
]

export const RESOURCE_VIDEOS = [
  {
    id: 'rv-01',
    title: 'Planeamiento Estratégico',
    category: 'Outsourcing Financiero',
    presenter: 'Gneomar Natzmar',
    publishedAt: '04-12-2020',
    youtubeId: 'mcyqStXSVMw',
    youtubeUrl: 'https://www.youtube.com/watch?v=mcyqStXSVMw',
  },
  {
    id: 'rv-02',
    title: 'Gestión Integral de Riesgos',
    category: 'Outsourcing Financiero',
    presenter: 'Gneomar Natzmar',
    publishedAt: '04-12-2020',
    youtubeId: 'XUyHKuK_KO8',
    youtubeUrl: 'https://www.youtube.com/watch?v=XUyHKuK_KO8',
  },
  {
    id: 'rv-03',
    title: 'Tesorería',
    category: 'Outsourcing Financiero',
    presenter: 'Gneomar Natzmar',
    publishedAt: '04-12-2020',
    youtubeId: 'V-bXrNeDT5I',
    youtubeUrl: 'https://www.youtube.com/watch?v=V-bXrNeDT5I',
  },
  {
    id: 'rv-04',
    title: 'Servicios Corporativos',
    category: 'Corporativo',
    presenter: 'Alta Consulting',
    publishedAt: '04-12-2020',
    youtubeId: 'ILMG_gESicM',
    youtubeUrl: 'https://www.youtube.com/watch?v=ILMG_gESicM',
  },
  {
    id: 'rv-08',
    title: 'Discriminación Remunerativa',
    category: 'Outsourcing de Nómina',
    presenter: 'Outsourcing de Nómina',
    publishedAt: '17-01-2020',
    youtubeId: 'R5aRszbZRDk',
    youtubeUrl: 'https://www.youtube.com/watch?v=R5aRszbZRDk',
  },
  {
    id: 'rv-09',
    title: 'Doble Imposición Tributaria',
    category: 'Outsourcing Contable',
    presenter: 'Paola Ortega',
    publishedAt: '11-12-2019',
    youtubeId: 'QQCat_RZwyw',
    youtubeUrl: 'https://www.youtube.com/watch?v=QQCat_RZwyw',
  },
  {
    id: 'rv-10',
    title: "Las NIIF's en las empresas",
    category: 'Outsourcing Contable',
    presenter: 'César Rivadeneyra',
    publishedAt: '08-11-2019',
    youtubeId: 'vM-wxyUHC_w',
    youtubeUrl: 'https://www.youtube.com/watch?v=vM-wxyUHC_w',
  },
  {
    id: 'rv-12',
    title: 'Inversión',
    category: 'Outsourcing Financiero',
    presenter: 'Gneomar Natzmar',
    publishedAt: '08-11-2019',
    youtubeId: 'cMUFDm2GstM',
    youtubeUrl: 'https://www.youtube.com/watch?v=cMUFDm2GstM',
  },
  {
    id: 'rv-13',
    title: 'Tasa de Interés',
    category: 'Outsourcing Financiero',
    presenter: 'Gneomar Natzmar',
    publishedAt: '05-11-2019',
    youtubeId: 'd1hHDjO7VXc',
    youtubeUrl: 'https://www.youtube.com/watch?v=d1hHDjO7VXc',
  },
  {
    id: 'rv-14',
    title: "Implementación de las NIIF's",
    category: 'Outsourcing Contable',
    presenter: 'César Rivadeneyra',
    publishedAt: '05-11-2019',
    youtubeId: 'bW6N7fhh9zs',
    youtubeUrl: 'https://www.youtube.com/watch?v=bW6N7fhh9zs&t=5s',
  },
  {
    id: 'rv-16',
    title: 'Servicios Financieros',
    category: 'Outsourcing Financiero',
    presenter: 'Gneomar Natzmar',
    publishedAt: '04-11-2019',
    youtubeId: 'LzaEh1WACAs',
    youtubeUrl: 'https://www.youtube.com/watch?v=LzaEh1WACAs',
  },
  {
    id: 'rv-17',
    title: 'Servicios de Contabilidad',
    category: 'Outsourcing Contable',
    presenter: 'Paola Ortega',
    publishedAt: '27-09-2019',
    youtubeId: 'cHGgGKcORmY',
    youtubeUrl: 'https://www.youtube.com/watch?v=cHGgGKcORmY',
  },
]

export const CONTACT_INFO = [
  { label: 'Direccion', value: 'Av. Angamos Oeste 651, Miraflores 15074, Lima, Peru' },
  { label: 'Telefono', value: '+51 941 521 258' },
  { label: 'Email', value: 'informes@altaconsulting.pe' },
]

/** Bloque mapa Perú (inicio): titular de sección. */
export const HOME_PERU_MAP_SECTION = {
  title: 'Presencia en Perú',
}

export const OFFICE_MAP = {
  /** [longitud, latitud] Lima — mismo orden que Marker de react-simple-maps / d3-geo */
  lngLat: [-77.0428, -12.0464],
  address: 'Av. Angamos Oeste 651, Miraflores. Lima 15074, Perú',
  embedUrl: 'https://www.google.com/maps?q=Av.+Angamos+Oeste+651,+Miraflores+15074&output=embed',
  mapsUrl: 'https://maps.google.com/?q=Av.+Angamos+Oeste+651,+Miraflores+15074',
  wazeUrl: 'https://waze.com/ul?q=Av.+Angamos+Oeste+651,+Miraflores+15074',
  phoneDisplay: '+51 941 521 259',
  phoneHref: 'tel:+51941521259',
  email: 'informes@altaconsulting.pe',
  websiteUrl: 'https://altaconsulting.pe/',
}

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/alta-consulting-peru/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCcHGbJGhaupNFKFRPY__S1g' },
  { label: 'Instagram', href: 'https://www.instagram.com/alta_consulting_peru/' },
  { label: 'Facebook', href: 'https://www.facebook.com/altaconsultingperu/' },
]
