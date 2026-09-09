import type { MetadataRoute } from 'next'

const origin = 'https://portfolio-pau-khaki.vercel.app'
const paths = ['/', '/work/ovi', '/work/duplex', '/work/trustos', '/foundations', '/foundations/cub3d', '/foundations/minishell', '/design', '/colophon']

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: origin + path, lastModified: new Date() }))
}
