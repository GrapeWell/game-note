// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '游戏笔记',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/GrapeWell' }],
			sidebar: [
				{
					label: '流放之路',
					autogenerate: { directory: 'poe' },
				}
			],
		}),
	],
});
