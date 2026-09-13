import type { MetadataRoute } from 'next'

const origin = 'https://portfolio-pau-khaki.vercel.app'
const paths = ['', '/work/ovi', '/work/duplex', '/work/trustos', '/work/broki', '/foundations', '/foundations/cub3d', '/foundations/minishell', '/design', '/colophon']

export default function sitemap(): MetadataRoute.Sitemap {
  return ['en', 'es'].flatMap((locale) => paths.map((path) => ({ url: `${origin}/${locale}${path}`, lastModified: new Date() })))
}
