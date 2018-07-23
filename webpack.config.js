const path = require('path');

module.exports = {
  entry : './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './public'),
  },
  devServer: {
    contentBase: path.join(__dirname,'public/'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      }
    ]
  }
};