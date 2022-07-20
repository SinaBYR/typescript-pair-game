const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    shuffle: './src/utils/shuffle.ts',
    cards: {
      import: './src/cards.ts',
      dependOn: 'shuffle'
    },
    index: './src/index.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', include: [path.resolve(__dirname, 'src')] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.ttf$/, type: 'asset/resource', generator: { filename: 'assets/fonts/[contenthash][ext]' } },
      { test: /\.(png|svg|jpg|jpeg)$/i, type: 'asset/resource', generator: { filename: 'assets/img/[contenthash][ext]' } },
      { test: /\.html$/i, loader: 'html-loader', options: { minimize: true } },
      { test: /\.wav$/, loader: 'file-loader', options: { outputPath: 'assets/audio' } }
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