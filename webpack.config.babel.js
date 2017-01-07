import path from 'path';
import webpack from 'webpack';
import Copy from 'copy-webpack-plugin';

export default {
  entry: {
    background: './src/background.js',
    content: './src/content.js',
    app: './src/view/index.jsx',
  },
  output: {
    publicPath: '/',
    sourcePath: ' ',
    path: path.join(__dirname, 'dest'),
    filename: '[name].js',
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: [path.resolve(__dirname, 'src')], loader: 'babel-loader' },
    ],
  },
  plugins: [
    new Copy([
      { from: './src/manifest.json' },
      { from: './src/popup.html' },
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ],
  devTool: '#inline-source-map',
  devServer: {
    contentBase: 'dest',
    port: 9000,
    inline: true,
    hot: true,
    colors: true,
  },
};
