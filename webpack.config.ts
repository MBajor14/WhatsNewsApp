
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./src/index.tsx"),
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
      { 
        test: /\.tsx?$/, 
        use: [{ loader: 'ts-loader' }]
      },
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   use: ['source-map-loader'],
      // },
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
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