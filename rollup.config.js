import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    sourcemap: true,
    format: 'esm',
    dir: 'public',
  },
  plugins: [
    resolve(),
    svelte({
      // skipIntroByDefault: true,
      // nestedTransitions: true,
      dev: !production,
      css: (css) => css.write('public/index.css'),
    }),
  ],
};
