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

test('Developer Mode launcher opens command palette', async ({ page }) => {
  await page.goto('/foundations')
  await page.getByRole('button', { name: 'CMD K' }).click()
  await expect(page.getByRole('dialog', { name: 'Command palette' })).toBeVisible()
  await page.getByRole('button', { name: 'Toggle Developer Mode' }).click()
  await expect(page.getByLabel('Developer Mode')).toBeVisible()
  await page.getByRole('button', { name: 'CMD K' }).click()
  await page.getByRole('button', { name: 'Toggle Layout Grid' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-grid', 'true')
  await page.keyboard.press('Control+k')
  await page.getByRole('button', { name: 'Toggle X-Ray View' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-xray', 'true')
  await page.keyboard.press('Control+k')
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog', { name: 'Command palette' })).toBeHidden()
})
