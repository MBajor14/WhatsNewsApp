
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules : [
      {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }]
      },
      {
          test: /\.html$/,
          use: [{ loader: 'html-loader' }]
      },
      {
          test: /\.css$/, 
          use: [ 'style-loader', 'css-loader' ]
      },
      {
          test: /\.(png|jpe?g|gif)$/i,
          use: [{ loader: 'file-loader' }],
      },
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [ 
    new HtmlWebpackPlugin({ 
        template: './src/index.html' 
      })
    ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist")
  }
};