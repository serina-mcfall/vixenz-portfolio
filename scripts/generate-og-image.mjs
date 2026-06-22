// One-shot script to generate public/og-default.png by screenshotting the
// vixenz.dev home page at the LinkedIn/Twitter standard preview size.
// Run with: node scripts/generate-og-image.mjs

import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'

const URL = 'https://vixenz.dev'
const OUT = 'public/og-default.png'

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1200, height: 627 },
  deviceScaleFactor: 2, // retina for sharp output
})

await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(500) // brief settle for fonts

await mkdir(dirname(OUT), { recursive: true })
await page.screenshot({ path: OUT, fullPage: false })

await browser.close()
console.log(`Wrote ${OUT}`)
