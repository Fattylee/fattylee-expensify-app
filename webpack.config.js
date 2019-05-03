const path = require('path');
const outputPath = path.join(__dirname, 'public');

module.exports = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
};
