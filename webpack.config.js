const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // stops minifying code
  //devtool: "none", // to disable eval code in the output
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'TZM Chapters',
      mapId: 'map',
        //'meta': {
        //  'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:' },
        //  // Will generate: <meta http-equiv="Content-Security-Policy" content="default-src https:">
        //  // Which equals to the following http header: `Content-Security-Policy: default-src https:`
        //  'set-cookie': { 'http-equiv': 'set-cookie', content: 'name=value; expires=date; path=url' },
        //  // Will generate: <meta http-equiv="set-cookie" content="value; expires=date; path=url">
        //  // Which equals to the following http header: `set-cookie: value; expires=date; path=url`
        //}
    }),
  ],
  module: {
    rules: [
      {
        test: /\.json$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2||ttf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
