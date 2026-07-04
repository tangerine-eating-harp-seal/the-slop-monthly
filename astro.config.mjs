// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://tangerine-eating-harp-seal.github.io',
	base: '/the-slop-monthly',
	integrations: [mdx(), sitemap()],
});
