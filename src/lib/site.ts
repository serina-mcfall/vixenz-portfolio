export const site = {
  url: 'https://vixenz.dev',
  name: 'Serina McFall',
  brand: 'vixenz.dev',
  tagline:
    'A junior developer building for everyone: accessibility-first, neurospicy, learning by writing it down.',
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
