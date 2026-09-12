import { expect, test } from '@playwright/test'

const routes = ['/', '/work/ovi', '/work/duplex', '/work/broki', '/work/trustos', '/design', '/foundations', '/foundations/cub3d', '/foundations/minishell', '/colophon']

test('public routes render at desktop and mobile widths', async ({ page }) => {
  for (const width of [320, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const route of routes) {
      await page.goto(route)
      await expect(page.locator('main')).toBeVisible()
    }
  }
})
