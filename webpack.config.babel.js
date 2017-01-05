import path from 'path';
import webpack from 'webpack';
import Copy from 'copy-webpack-plugin';

export default {
  entry: {
    background: './src/background.js',
    content: './src/content.js',
  },
  output: {
    publicPath: '/',
    sourcePath: ' ',
    path: path.join(__dirname, 'dest'),
    filename: '[name].js',
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      { test: /\.js$/, include: [path.resolve(__dirname, 'src')], loader: 'babel-loader' },
    ],
  },
  plugins: [
    new Copy([
      { from: './src/manifest.json' },
      { from: './src/popup.html' },
    ]),
  ],
  devTool: 'inline-source-map',
  devServer: {
    contentBase: 'dest',
    port: 9000,
    inline: true,
    hot: true,
    colors: true,
  },
};
