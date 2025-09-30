import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://soychrisjuncal.github.io',
  base: '/bajo-lupa',
  integrations: [sitemap()],
});