const path = require('path');
const configBase = require('../../webpack.config');

module.exports = {
  ...configBase,
  entry: './index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    library: '@test/ui1',
    libraryTarget: 'umd',
  },
  externals: {
    "react": {
      commonjs: 'react',
      commonjs2: 'react'
    },
    "react-dom": {
      commonjs: 'react-dom',
      commonjs2: 'react-dom'
    }
  }
}