const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,

  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', include: [path.resolve(__dirname, 'src')] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.ttf$/, type: 'asset/resource' },
      // { test: /\.(png|svg|jpg|jpeg)$/i, type: 'asset/resource', generator: { filename: '[name].[ext]' } }
      { test: /\.html$/i, loader: 'html-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TypeScript Pair Game',
      template: './src/templates/index.html',
      publicPath: './'
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true,
    port: 8080,
    devMiddleware: {
      writeToDisk: filePath => !/hot-update/i.test(filePath)
    }
  }
}