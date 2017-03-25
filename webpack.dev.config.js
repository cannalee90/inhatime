const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    bundle: `${__dirname}/frontend/react/index.js`,
  },
  devtool: "inline-source-map",
  output: {
    path: `${__dirname}/src`,
    publicPath: '/assets/',
    filename: 'js/bundle.js',
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    compress: false,
    port: 8080,
    publicPath: "/assets/",
    contentBase: path.join(__dirname, 'frontend'),
  },
  resolve: {
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: [
          /\.js$/,
          /\.jsx$/,
        ],
        exclude: [
          /node_modules/,
        ],
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['react', 'es2015', 'stage-1'] },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: [
          /style\.css$/,
          /font-awesome\.css$/,
          /redactor\.min\.css$/,
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('autoprefixer')({ browsers: ['last 2 versions'] }),
                ];
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('autoprefixer')({ browsers: ['last 2 versions'] }),
                ];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=images/[name]__[hash:base64:5].[ext]',
      },
      {
        test: /\.(jpg|png|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=images/[name]__[hash:base64:5].[ext]',
      },
    ],
  },
};