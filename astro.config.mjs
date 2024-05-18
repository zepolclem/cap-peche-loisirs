import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  image: {
    domains: ["directus.cappecheloisirs.com"],
    remotePatterns: [{
      protocol: "https"
    }]
  },
});