const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/app/components/ForkMeOnGithub.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'ForkMeOnGithub',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  mode: 'production'
};
