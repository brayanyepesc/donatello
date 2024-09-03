import type { Config } from 'tailwindcss';

export default {
	content: [	
		'./src/**/*.{html,js,svelte,ts}',
		'./src/components/**/*.svelte',
	],

	theme: {
		extend: {}
	},
} as Config;
