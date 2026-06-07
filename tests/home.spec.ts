import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('home page @a11y', () => {
  test('has a single h1 with the name', async ({ page }) => {
    await page.goto('/')
    const h1 = page.locator('main h1')
    await expect(h1).toHaveCount(1)
    await expect(h1).toContainText('Serina McFall')
  })

  test('skip link is the first focusable element', async ({ page }) => {
    await page.goto('/')
    await page.keyboard.press('Tab')
    const focused = await page.evaluate(
      () => document.activeElement?.textContent,
    )
    expect(focused).toContain('Skip to content')
  })

  test('all three case-study tiles render', async ({ page }) => {
    await page.goto('/')
    const tiles = page.locator('a.tile')
    await expect(tiles).toHaveCount(3)
  })

  test('no axe-detectable a11y violations', async ({ page }) => {
    await page.goto('/')
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze()
    expect(results.violations).toEqual([])
  })
})
