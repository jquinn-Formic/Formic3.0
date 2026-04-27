import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://formic.co',
  output: 'static',
  server: { port: 4321 },
  integrations: [sitemap()],
});
