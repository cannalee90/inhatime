const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    `${__dirname}/frontend/react/index.jsx`,
  ],
  devtool: 'inline-source-map',
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
    publicPath: '/assets/',
    contentBase: path.join(__dirname, 'frontend'),
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      Common: path.resolve(__dirname, 'frontend/react/common'),
      Components: path.resolve(__dirname, 'frontend/react/components'),
      Actions: path.resolve(__dirname, 'frontend/react/actions'),
      Contestants: path.resolve(__dirname, 'frontend/react/contestants'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
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
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: [
          /style\.css$/,
          /font-awesome\.css$/,
          /bootstrap\.css$/,
          /react-select.css$/,
          /font-awesome.min.css$/,
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
                  autoprefixer({ browsers: ['last 2 versions'] }),
                ];
              },
            },
          },
        ],
      },
      {
        test: [
          /style\.css$/,
          /font-awesome\.css$/,
          /bootstrap\.css$/,
          /react-select.css$/,
          /font-awesome.min.css$/,
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  autoprefixer({ browsers: ['last 2 versions'] }),
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
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  autoprefixer({ browsers: ['last 2 versions'] }),
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
