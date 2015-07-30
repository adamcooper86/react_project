module.exports = {
  entry: './app/app.js',
  output:{
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      }
    ]
  }
};
