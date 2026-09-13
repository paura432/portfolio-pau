export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localizedPath(locale: Locale, path = '') {
  return `/${locale}${path}`
}

export const copy = {
  en: { work: 'WORK', experience: 'EXPERIENCE', archive: 'ARCHIVE', design: 'DESIGN', colophon: 'COLOPHON', menu: 'Open navigation', home: 'HOME', back: 'ALL SYSTEMS' },
  es: { work: 'PROYECTOS', experience: 'EXPERIENCIA', archive: 'ARCHIVO', design: 'DISEÑO', colophon: 'COLOFÓN', menu: 'Abrir navegación', home: 'INICIO', back: 'TODOS LOS SISTEMAS' },
} as const

export const localeMetadata = {
  en: { title: 'Pau Ramos — Full Stack Product Engineer', description: 'Pau Ramos builds products across interface, systems and intelligence.', ogLocale: 'en_US' },
  es: { title: 'Pau Ramos — Ingeniero de Producto Full Stack', description: 'Pau Ramos crea productos entre interfaz, sistemas e inteligencia.', ogLocale: 'es_ES' },
} as const

export const spanishText: Record<string, string> = {
  'FULL STACK PRODUCT ENGINEER': 'INGENIERO DE PRODUCTO FULL STACK',
  'Building products across interface, systems and AI.': 'Creo productos entre interfaz, sistemas e IA.',
  'SELECTED WORK': 'PROYECTOS DESTACADOS', 'PROFESSIONAL SYSTEMS': 'SISTEMAS PROFESIONALES', 'INDEPENDENT PRODUCT': 'PRODUCTO INDEPENDIENTE',
  'OPEN CASE STUDY': 'ABRIR CASO', 'ENGINEERING ARCHIVE': 'ARCHIVO DE INGENIERÍA', 'OPEN ENGINEERING ARCHIVE': 'ABRIR ARCHIVO DE INGENIERÍA',
  'DESIGN PRACTICE': 'PRÁCTICA DE DISEÑO', 'VIEW DESIGN PRACTICE': 'VER PRÁCTICA DE DISEÑO', 'ENGINEERING CAPABILITIES': 'CAPACIDADES DE INGENIERÍA',
  'Technology in context.': 'Tecnología con contexto.', 'ABOUT': 'SOBRE MÍ', 'CONTACT + CV': 'CONTACTO + CV', 'Build a system worth using.': 'Construye un sistema que merezca usarse.',
  'DOWNLOAD CV EN': 'DESCARGAR CV EN', 'DOWNLOAD CV ES': 'DESCARGAR CV ES', 'VIEW SOURCE': 'VER CÓDIGO',
  'PRIVATE CURRENT SYSTEM / PERFORMANZE': 'SISTEMA PRIVADO ACTUAL / PERFORMANZE', 'CURRENT SYSTEM': 'SISTEMA ACTUAL',
  'AI-assisted productivity system. Publicly shown at product level, not client implementation.': 'Sistema de productividad asistido por IA. Se muestra a nivel de producto, no de implementación de cliente.',
  'Context becomes product work.': 'El contexto se convierte en trabajo de producto.', 'SYSTEM, NOT CHATBOT': 'SISTEMA, NO CHATBOT', 'Assistance needs evidence.': 'La asistencia necesita evidencia.',
  'AI TECHNICAL OPERATIONS': 'OPERACIONES TÉCNICAS CON IA', 'ENGINEERING FOUNDATIONS': 'FUNDAMENTOS DE INGENIERÍA',
  'Before products, there were systems.': 'Antes de productos, hubo sistemas.', 'PUBLIC WORK': 'TRABAJO PÚBLICO',
  'Foundations are not school cards. They are the public engineering problems behind the product work.': 'Los fundamentos no son fichas académicas. Son los problemas de ingeniería que sostienen el trabajo de producto.',
  'PUBLIC IMPLEMENTATION': 'IMPLEMENTACIÓN PÚBLICA', 'Not every product should look like software.': 'No todo producto debe parecer software.',
  'COLOPHON': 'COLOFÓN', 'Built to Inspect.': 'Hecho para inspeccionar.', 'Back to home': 'Volver al inicio', 'All systems': 'Todos los sistemas', 'All work': 'Todos los proyectos',
  'AIRPORT OPERATIONS': 'OPERACIONES AEROPORTUARIAS', 'Make operational work legible.': 'Haz legible el trabajo operativo.',
  'APIs + PROVIDERS': 'APIs + PROVEEDORES', 'Identity is a system of trust.': 'La identidad es un sistema de confianza.',
}
