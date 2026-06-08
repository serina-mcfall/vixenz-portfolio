import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const lab = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['idea', 'sketching', 'building', 'paused', 'shipped']),
    started: z.string().optional(),
    updated: z.string().optional(),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    published: z.string(),
    updated: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
})

export const collections = { lab, blog }
