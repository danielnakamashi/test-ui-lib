const path = require('path');
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const css = require('@modular-css/rollup');
const embedCss = require('rollup-plugin-embed-css');

module.exports = {
  input: './index.tsx',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
    globals: {
      react: 'React'
    }
  },
  external: ['react'],
  plugins: [
    typescript({
      objectHashIgnoreUnknownHack: true,
    }),
    postcss({
      modules: true
    })
  ]
};