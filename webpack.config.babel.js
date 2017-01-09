import path from 'path';
import webpack from 'webpack';
import Copy from 'copy-webpack-plugin';

const cssOptions = process.env.NODE_ENV === 'production'
  ? ''
  : '&localIdentName=[path][name]---[local]---[hash:base64:5]';

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
      { test: /\.css$/, include: [path.resolve(__dirname, 'src')], loaders: ['style', `css?modules${cssOptions}`] },
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
