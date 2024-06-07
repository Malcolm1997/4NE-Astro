import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: 'https://malcolm1997.github.io/4NE-Astro/',
  integrations: [sitemap()]
});