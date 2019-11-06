const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: [
          { loader: 'babel-loader', options: { cacheDirectory: true } },
          { loader: 'eslint-loader', options: { fix: true } },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ttf|eot|woff|woff2)(\?t=\d+)?$/,
        use: ['url-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      title: '洋葱数学',
    }),
    new webpack.DefinePlugin(globalConfig),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      'styles': path.resolve(__dirname, '../src/styles'),
      'static': path.resolve(__dirname, '../src/static'),
    },
  },
}
