const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
 mode:'development',
 entry: {
  index: {
    import: './dev/index.js',
  },
 },
 devServer:{
  static: './source/',
  open: ['output.html'],
 },
 plugins:[
    new HtmlWebpackPlugin({
      title: 'Widget',
      template: './dev/output.html',
      filename: 'output.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from:'dev/assets',to:'assets'},
        {from:'dev/icon.png',to:'icon.png'} 
      ]
    }), 
],
  output: {
   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'source'),
    clean: false,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },    
};


module.exports = (env, argv) => {

  if ((argv.mode === 'development')||(argv.mode === '')) {
    config.mode = 'development';
    config.devtool = 'inline-source-map';
  }

  if (argv.mode === 'production') {
    config.mode = 'production';
    config.output.clean = true;
  }

  return config;
 };