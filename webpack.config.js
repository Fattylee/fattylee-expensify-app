const path = require('path');
const outputPath = path.join(__dirname, 'public');

module.exports = {
  entry: './src/app.js',
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [{
    test: /\.(js|jsx)$/, 
    use: 'babel-loader',
    exclude: /node_modules/,
    }]
  },
  devtool: 'cheap-module-eval-source-map',
};