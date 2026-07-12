export const site = {
  url: 'https://vixenz.dev',
  name: 'Serina McFall',
  brand: 'vixenz.dev',
  tagline:
    'Software Developer. Accessibility-first, neurospicy, and building for the people whose voices go least heard.',
  email: 'serina.mcfall@gmail.com',
  github: 'https://github.com/serina-mcfall',
  linkedin: 'https://linkedin.com/in/serinamcfall',
  location: 'Auckland · open to remote',
} as const;

export const nav = [
  { href: '/work/atlas', label: 'work' },
  { href: '/now', label: 'now' },
  { href: '/lab', label: 'lab' },
  { href: '/blog', label: 'blog' },
  { href: '/neurodiversity-in-tech', label: 'neurodiversity' },
  { href: '/about', label: 'about' },
] as const;
