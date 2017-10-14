module.exports = {
  entry: "./app/assets/script/app.js",
  output: {
    path: "./app/temp/script",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
