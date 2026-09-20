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
