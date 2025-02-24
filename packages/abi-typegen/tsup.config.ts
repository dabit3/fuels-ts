// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: {
    index: 'src/index.ts',
    cli: 'src/cli.ts',
    bin: 'src/bin.ts',
    runTypegen: 'src/runTypegen.ts',
  },
  format: ['cjs', 'esm', 'iife'],
  splitting: false,
  sourcemap: true,
  clean: false,
  minify: !options.watch,
  loader: {
    '.hbs': 'text',
  },
}));
