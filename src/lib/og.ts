import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const FILE = 'og-default.png';

const version = createHash('sha256')
  .update(readFileSync(resolve(process.cwd(), 'public', FILE)))
  .digest('hex')
  .slice(0, 8);

export const ogDefault = `/${FILE}?v=${version}`;
