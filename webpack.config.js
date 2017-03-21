var webpack = require("webpack"),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  OpenBrowserPlugin = require('open-browser-webpack-plugin'),
  isDev = process.env.NODE_ENV === 'development',
  isProd = process.env.NODE_ENV === 'production',
  autoprefixer = require('autoprefixer'),
  webpackConfig;

webpackConfig = {
    postcss: function () {
      return {
        defaults: [autoprefixer]
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        //hash: true,
        template: 'src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        }
      }),
      new OpenBrowserPlugin({
        url: 'http://127.0.0.1:8080/'
      }),
      new ExtractTextPlugin('/[name].css'),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
    ],
    entry: ["./src/index.js"],
    output: {
      path: './dist',
      filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css!postcss"
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test : /(common-module|src)(\\|\/).*\.js$/,
          exclude : /(src(\\|\/)vendor(\\|\/)|node_modules)/,
          loaders: ['babel?{"presets": "es2015", "compact": false}']
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: "url",
          query: {
            limit: 10000,
            name: path.posix.join('./', 'img/[name]_[hash:7].[ext]')
          }
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.(mp3)\??.*$/,
          loader: "url-loader",
          query: {
            limit: 10000
          }
        }]
    },
    devServer: {
      port: 8080,
      host: '127.0.0.1',
      contentBase: './dist'
    }
}
if (!isDev) {
  webpackConfig.output = {
    path: './dist',
    publicPath: './',
    filename: "[name].js"
  }
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        warnings: false
      },
      mangle: {
        except: ['GLOBAL_API'],
      }
    })
  ])
}

module.exports = webpackConfig
