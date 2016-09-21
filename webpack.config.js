var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,


  entry: "./js/app.js",
  output: {
    path: __dirname + "/bin",
    filename: "bundle.js"
   },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!' }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};