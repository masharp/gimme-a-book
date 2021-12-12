import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';

const production = process.env.NODE_ENV === 'production';
const sourceMapsInProduction = false; // Useful for debugging

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      emitCss: production,
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: !production,
      },
      hot: !production
    }),
    legacy({
			targets: ['default']
		}),
  ],
  server: {
      host: 'localhost',
      port: 8080
  },
  build: {
		sourcemap: sourceMapsInProduction
	},
  css: {
		postcss: {
			plugins: [
				autoprefixer()
			]
		}
	}
});
