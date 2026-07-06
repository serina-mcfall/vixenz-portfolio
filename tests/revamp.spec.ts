import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = ['/', '/blog', '/about', '/cv']

const postRoutes = ['/blog/css-block-by-block']

test.describe('revamp @a11y', () => {
  for (const route of routes) {
    test(`${route} passes axe`, async ({ page }) => {
      await page.goto(route)
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
        .analyze()
      expect(results.violations).toEqual([])
    })
  }

  for (const route of postRoutes) {
    test(`${route} passes axe`, async ({ page }) => {
      await page.goto(route)
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
        .analyze()
      expect(results.violations).toEqual([])
    })
  }

  test('reading-mode data attribute set on /blog', async ({ page }) => {
    await page.goto('/blog')
    const bodyMode = await page.evaluate(() =>
      document.body.getAttribute('data-page-mode'),
    )
    expect(bodyMode).toBe('reading')
  })

  test('reading-mode data attribute set on /blog/[slug]', async ({ page }) => {
    await page.goto('/blog/css-block-by-block')
    const bodyMode = await page.evaluate(() =>
      document.body.getAttribute('data-page-mode'),
    )
    expect(bodyMode).toBe('reading')
  })

  test('home page does not have reading-mode', async ({ page }) => {
    await page.goto('/')
    const bodyMode = await page.evaluate(() =>
      document.body.getAttribute('data-page-mode'),
    )
    expect(bodyMode).toBe('default')
  })
})
