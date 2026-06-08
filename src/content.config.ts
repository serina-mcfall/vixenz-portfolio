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

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    ord: z.string(),
    summary: z.string(),
    status: z.enum(['draft', 'live']),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    updated: z.string(),
  }),
})

export const collections = { lab, blog, work }
