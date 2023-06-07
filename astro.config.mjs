import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://fournaturalenergy.com.ar/',
  integrations: [tailwind(), sitemap(), robotsTxt()],
  outDir: './dist',
});