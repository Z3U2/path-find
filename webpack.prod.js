var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".js", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // Handling css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "./index.html" //relative to root of the application
    })
  ]
};
