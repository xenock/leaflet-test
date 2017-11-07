module.exports = {
  entry: "./src/app.js",

  output: {
    filename: "bundle.js"
  },

  watch: true,

  devServer: {
    port: 9000,
    inline: true
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
