import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import nodejs from "@astrojs/node"
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  // adapter: cloudflare(),
  adapter: nodejs({
    mode: "standalone"
  })
});
