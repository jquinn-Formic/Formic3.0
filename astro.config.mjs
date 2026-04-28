import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://formic.co',
  output: 'static',
  server: { port: 4321 },
});
