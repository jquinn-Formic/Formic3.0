import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://formic.co',
  output: 'static',
  server: { port: 4321 },
  redirects: {
    '/packing': '/solutions/packing',
    '/precision': '/solutions/machine-tending',
    '/general': '/solutions/humanoids',
  },
});
