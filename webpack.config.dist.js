var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  devtool: 'source-map',
  entry: {
    'react-data-menu': './module.js'
  },
  output: {
    path: __dirname + "/lib",
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '[name]'
  },
  externals: {
    'react': {
      'commonjs': 'react',
      'commonjs2': 'react',
      'amd': 'react',
      'root': 'React'
    },
    'react-dom': {
      'commonjs': 'react-dom',
      'commonjs2': 'react-dom',
      'amd': 'react-dom',
      'root': 'ReactDOM'
    },
    'lodash': {
      'commonjs': 'lodash',
      'commonjs2': 'lodash',
      'amd': 'lodash',
      'root': 'Lodash'
    }
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  }
};
