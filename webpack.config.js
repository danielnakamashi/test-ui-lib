module.exports = {
  mode: "development",
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
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
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              'style-loader',
              {
                loader: "css-loader",
                options: {
                  modules: true
                }
              }
            ]
          }
      ]
  },
};