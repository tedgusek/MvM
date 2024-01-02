// const path = require('path');

// module.exports = {
//   entry: './src/index.js', // adjust the entry point based on your project structure
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//     ],
//   },
 
// };
const path = require('path');

module.exports = {
  // mode: process.env.NODE_ENV,
  entry: './src/index.js',
  // entry: {
  //   index: path.join(__dirname, 'client', 'index.js'),
  //   // login: path.join(__dirname, 'client', 'login.js'),
  //   // signup: path.join(__dirname, 'client', 'signup.js'),
  // },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'client', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};