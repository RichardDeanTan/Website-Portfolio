// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Change this to the final Vercel (or custom) domain before launch.
  // It is used for the sitemap and for absolute Open Graph image URLs.
  site: 'https://richard-dean-tanjaya.vercel.app',
  integrations: [sitemap()],
  // Hides Astro's floating dev toolbar during `npm run dev` (it never appears in production).
  devToolbar: { enabled: false },
  image: {
    // Project cards use Unsplash placeholders until real screenshots replace them.
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
});
