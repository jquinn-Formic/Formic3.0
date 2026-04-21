import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://formic.co',
  output: 'static',
  integrations: [sitemap()],
});
