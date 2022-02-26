const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 追記

module.exports = {
  mode: "development",
  entry: "./src/index.js", // エントリーポイントを設定
  output: {
    path: path.resolve(__dirname, "./dist"), // 絶対パスを取得
    filename: "./src/index.js", // ビルドされるファイルの名前を設定
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/, // 変更
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 追記
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader", // 追加
          },
        ],
      },
      // ここから追記 //
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // ここまで追記
      // ここから追記 //
      {
        test: /\.(png|jpg|jpeg|gif)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
        use: [
          // 追加
          {
            loader: "image-webpack-loader",
          },
        ],
      },
      // ここまで追記 //
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es5"],
  devServer: {
    port: 8080,
    static: "dist",
    open: true,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
    new HtmlWebpackPlugin({
      title: "hello webpack",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
  ],
};
