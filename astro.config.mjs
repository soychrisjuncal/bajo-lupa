import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bajolalupa.co',
  base: '/',
  output: 'static',
  build: {
    format: 'file'
  },
  integrations: [sitemap()],
});