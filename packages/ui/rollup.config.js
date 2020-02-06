import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import multiInput from 'rollup-plugin-multi-input';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';

module.exports = {
  input: ['src/**/*.tsx'],
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  external: ['react'],
  plugins: [
    image({
      exclude: /\.svg$/
    }),
    svgr(),
    multiInput(),
    typescript({
      objectHashIgnoreUnknownHack: true,
    }),
    postcss({
      modules: true,
      use: ['sass']
    })
  ]
};
