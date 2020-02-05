const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const configBase = require('../../webpack.config');

module.exports = {
  ...configBase,
  entry: './index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root'
    })
  ]
}