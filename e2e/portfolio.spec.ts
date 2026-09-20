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

test('Foundations header links remain usable', async ({ page }) => {
  await page.goto('/en/foundations')
  await page.getByRole('link', { name: 'ALL SYSTEMS', exact: true }).click()
  await expect(page).toHaveURL('/en')
  await page.goto('/en/foundations')
  await page.getByRole('link', { name: 'DESIGN', exact: true }).click()
  await expect(page).toHaveURL('/en/design')
})

test('mobile case navigation opens from the three-line control', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 704 })
  await page.goto('/en/work/duplex')
  await page.getByRole('button', { name: 'Open navigation' }).click()
  await expect(page.getByRole('link', { name: 'DESIGN', exact: true })).toBeVisible()
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' }).getByText('CV', { exact: true })).toBeVisible()
})

test('case header fits every responsive breakpoint', async ({ page }) => {
  for (const width of [320, 390, 420, 621, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 704 })
    await page.goto('/en/work/duplex')
    await expect(page.locator('.global-header')).toHaveJSProperty('scrollWidth', width)
    if (width <= 900) {
      await expect(page.getByLabel('Open navigation')).toBeVisible()
    } else {
      await expect(page.locator('.global-nav')).toBeVisible()
      await expect(page.getByLabel('Open navigation')).toBeHidden()
    }
  }
})

test('localized routes keep locale while switching language', async ({ page }) => {
  await page.goto('/en/work/duplex')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await page.getByRole('link', { name: 'Cambiar a castellano' }).click()
  await expect(page).toHaveURL('/es/work/duplex')
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
  await page.getByRole('link', { name: 'Switch to English' }).click()
  await expect(page).toHaveURL('/en/work/duplex')
})

test('integration evidence keeps project relationships visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Technology is evidence of work.' })).toBeVisible()
  const graph = page.getByRole('heading', { name: 'MICROSOFT GRAPH API' }).locator('..')
  await graph.focus()
  await expect(graph.getByText('USED IN', { exact: true })).toBeVisible()
  await expect(graph.getByText('OVI', { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'GAMMA' })).toHaveCount(0)
  await expect(page.getByRole('heading', { name: 'SUPABASE' })).toHaveCount(0)
  await page.goto('/work/broki')
  await expect(page.getByText('Airport operations platform', { exact: true })).toBeVisible()
  await expect(page.getByText('Ground Support Equipment')).toBeVisible()
  await expect(page.getByText('MIGRATION, NOT RESKIN')).toHaveCount(0)
})
