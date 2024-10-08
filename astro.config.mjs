import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/static';

// import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  // adapter: vercel()npx astro add vercel
  output: 'server',

  adapter: vercel({
    imageService: true,
  })
});