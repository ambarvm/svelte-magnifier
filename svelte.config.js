import preprocess from 'svelte-preprocess';
import postcssNesting from 'postcss-nesting';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV == 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [postcssNesting()]
		}
	}),
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		paths: {
			base: dev ? '' : '/svelte-magnifier'
		}
	}
};

export default config;
