const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/app.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  mode: "development",
};
