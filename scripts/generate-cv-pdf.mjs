// One-shot script to generate public/serina-mcfall-cv.pdf by rendering the
// /cv page with print-media emulated and saving as A4 PDF.
//
// Default renders from the live site (https://vixenz.dev/cv), which is fine
// because print styles hide the download button and any decorative chrome —
// PDF content stays identical regardless of dev vs live source.
//
// Override the source with CV_URL, e.g. for local preview:
//   CV_URL=http://localhost:4321/cv node scripts/generate-cv-pdf.mjs

import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'

const URL = process.env.CV_URL || 'https://vixenz.dev/cv'
const OUT = 'public/serina-mcfall-cv.pdf'

console.log(`Rendering CV PDF from ${URL}...`)

const browser = await chromium.launch()
const page = await browser.newPage()

try {
  await page.goto(URL, { waitUntil: 'networkidle' })
} catch (err) {
  console.error(`Failed to load ${URL}: ${err.message}`)
  if (URL.includes('localhost')) {
    console.error(`Hint: is 'npm run dev' running in another terminal?`)
  }
  await browser.close()
  process.exit(1)
}

await page.emulateMedia({ media: 'print' })
await page.waitForTimeout(500) // brief settle for fonts + print styles

await mkdir(dirname(OUT), { recursive: true })
await page.pdf({
  path: OUT,
  format: 'A4',
  printBackground: true,
  margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' },
})

await browser.close()
console.log(`Wrote ${OUT}`)
