const path = require('path');
 
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.mjs',
    module: true,
    libraryTarget: "module",
  },
  experiments: {
    outputModule: true,
    topLevelAwait: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    fallback: {
      bufferutil: false,
      'utf-8-validate': false,
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  mode: 'production',
  target: "node",
};
