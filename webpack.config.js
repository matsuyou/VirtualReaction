
var path = require('path');

module.exports = {
  mode: 'production',
  target: ['web', 'es5'],
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@framework': path.resolve(__dirname, './CubismSdkForWeb-4-r.4/Framework/src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  devtool: 'inline-source-map'
}
